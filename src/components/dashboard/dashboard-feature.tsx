/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5JuZFjhVbbBatR6TNsrWLRjFT9vkMj9fTxzFWtkd2N6pi1PUuZW6MX4jqdLvPzf7fkQ7UCqeVQe63d92DLPGSCXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51H9beY1q8mYNWwQcSFQwCgHgXE9x7EzDKs4s7U2z7phDDvj25V8PCTGyCtR1r4xLbgHb6jaCXrAshXhjuxjWGAf",
  "key1": "48sR4uJ6HE8AT3qXY9yZ8isCXeGdgAGfjzrbBKMxfwiU95zjjEzJMzHgRFwXo2VbRCWBXTBskxUsMNLLVqKQRJD7",
  "key2": "52RbHZRw5vdRiGNGP8XNdm9iX1DAeuKEhS3GweRuNmzHpxn7wfTGQkWmvtYdd1NRNH81qSFXcqsQDuYq7HWzYmTQ",
  "key3": "3mzT6vbpBb2XVb2hCRvi1Yrs6cpPNuiPkB1kHqLaTjsMTB51jVKq9f9qGrzEo18UyFvrKUNLNAvrfJUFfqg7rKv",
  "key4": "4azMR9mRCWr4CuSqPy27NkhneNShUgnS4vQPf43FyXJ3XViKUrQXkCJSE8hEiFB9XceimDQjMG5i5MDDshNAgSJS",
  "key5": "36LkVEXQ6Ki6CmGwrxqorh5noh1RcCSYUWc7qJXK35WhXuRLTyYbVfbbJuNNCnEeSi6BhAwV8Fh7KEj3DnnPxAJB",
  "key6": "2bXSxJx7byHoB7JCKVNf6NsR1EHNmnAvu3Ey4o3SdHUyeJxyyY89YZPx8RW4au9ow1dDTozLFPosRVwjy5KtkeKC",
  "key7": "64MPtKGD5JxHDQbFvM5SmgL5CwodmTcyn31AE828a4JmjVsh5L9C1DQaKr666FTvt5Mbvp3kzspN4fAx7z5smHMx",
  "key8": "2axhzUgPAFk1cY5vC9sTgfBjxUyTuMpJmnwtPwv4urKVKtyo7zouH24h6TeWYxJMhopd2YwTRskiMjsp5QwywmnK",
  "key9": "CeaHE2B2i1AocKu39i1VSqQTQvH5N4oAaY8aoETFGri3y4NV2F9MoJtYfUsrm41HUPN64csvPgQm2ibewHY9NNH",
  "key10": "4qgsKrP5S9TVoQztgeq6PZXcxEJQ5QFnXetagzgEHb7WmSh1hXv6FtPgZV1bvdSZLEPGNyGBn45yn5rKzeKGvMT2",
  "key11": "dmErwhcXMiXr5Q4KTgeLKZzpkkKWug5F92ojxAt3PcJ5WcNL4Myj2ngwRNbEYph59jcCpKPpcTXAgaCMW4rhnR3",
  "key12": "3cLUChXTjqNCRbPdKW6vf7tEzWXxWtENHTtjjtE5jYtWArfuvgEbsK3Td1JKhv8aPR6PFjanWNehWHbHjcBW9oU8",
  "key13": "bPFHjRGxjBybkYUAaJ1L2J6pkeKWumjW9NH5jiAC4p45TGN3YPTgPhiB34KmqeggzGbdbs4BbPCgjosxGAm9ck1",
  "key14": "2pJLxnV8R2uYfHcMTp7dMForxKxRMdUrn7MDckbDd1szEdJwnKMbKfYEtUXghTaJiHBDX6cutGb8QJ1uE1Ahex2w",
  "key15": "49gDowiSXmtxTnnk47raFAqqyV33hNbc5gWRvtp1ie47oG7B7eKhrreXbapDMBnZubLL8EQPFCwdhuxJaip4WRcB",
  "key16": "4Kqo7o9voytcqsLTL13XdjiKGLMUtJnY7wSqpywJCGHa62Fmi81D7WqDB6BsHuuLkzNmQ2vYh5R8Ss88ouWW6dNa",
  "key17": "3rjuPXhswSEw7StC88aHdazPPWJTiwkAGNKUpfWBosoZoSbyCG5qyYvFk6TSsiiNgzPKXmC7rpULESztNfSVhC24",
  "key18": "3dsvKfN2kB8AjeWrK4FN9t8yUj8Q7HwWed8PVRRjgZLkXo9XLPD1Hfmq2ongsDkyokiXsicFYNT6jwH5rC5XrWWL",
  "key19": "5Ct63MiZTDhQ3Mvuo21o3GyqpUNQjD3RFGDcCWMcnWakifqZvtHni1sN33yBTcvjUaxDb7pT48JX8m6Yzzh8jACD",
  "key20": "3hNkWgw6AiU87t2TTtKW9XyR95LVWAwDMYXENems2H8R7HxUCA335PYrPtAPBwHCf3zsz1cN4tMLTCeY1izy3FX8",
  "key21": "5Mo2LDS1G6uCNBCzmuaHyF5t1vAUdHP5WggiXH4fqzAQdiCFnAjZYJ5bFwkLNnG3ewYh46wCKFmkMpZZBfQ3xzoS",
  "key22": "3uCwudMSu6ssjTr1Arm5T2wcbZsacUqn2KzVvPxEWfLAC3eSG88EMYnfbYwTR1BAap2N8FFAC48jjFTxLutP6WGP",
  "key23": "iwmY2yiqZDc1LqarTLLLCLFa6VZnkv84RhkZkpixptEsjfiUp56ca2EXkz7FT6b2erjE9g9AZ3UDEpYtnzotxGo",
  "key24": "4m6e57rR6suiXdbbbeZy25fiRZoCLZJcLFwv9FnnffNybrDe2jmJW6UN7xV8e5Uzrxe8xR8x6fd7wy3kcpVGXzmn",
  "key25": "22o9GYN3cEain7eoXvAzkBuEqURF8iXKT5d5KjsPP2wLMX1ZzyEMnt7p8C2oaR82F7w22th2Wfnyhr9Zh5GFVJ3m",
  "key26": "3EonFa7ebE3THX6vN94GYEewN1zjL5aN6uuf7bhTPpGKhtRxd1ZuQBseqK5DAw8ag7zATpGi7nJycCeFEcN4rCJH",
  "key27": "mZ8fALiVU6uWeErdTN1hjEghHn76NHSpgXFfXYPctte7udXPy8hX2oDBqoMCYpY9TFoDQRDYkM1satVJBfEdKZE",
  "key28": "zqF4rka5QCTR4WNZrJKXgqkQcHJLW5fRLSDBURYX5qP5Xd53n8kHtUW9uLuWUZk5TScajXfxt8rkJeuFiwh4Rui",
  "key29": "32Qafdegd8ztsH4WhG3tQsBXJL18LfZQuK9WpKpPsWQuAQuXKmPvQMBTbkjXRNrRjAThWy7kbHwsSaqpb5pookpq",
  "key30": "5T1GVoPQ2oRHK2xzBr5qyQWx85jJKsRtcVPtRFP7WD1HBqXCMYY5aHvp3pZXMFU4kWoCAfbX4kP4oxkHza3dextw",
  "key31": "27Zs8VuP8ucALud2ac3BsXNEVj6cFecbKDEDwqe6ewkzeGZAaYi8CqA1fsHjhQ95wXNoK6kM76PHLN8wPmXLShQt",
  "key32": "2G1bZFwJK3BQNDRJT1KB5VWahmZ7RkmQ9iNwoApnqQDLrgk3aebGby1ZQfNPyrAtrsBuWcgE4WHWevRdb8uCY4WK",
  "key33": "KbwmzQcZUEp1gnNGBv6LABxEZ6vQB6fzKRvW57fS8K8vFT8YnPeWqXX8ofYSY4nMPpoEHXP3DWWdMg8ZVJgEDGx",
  "key34": "3uWB1bXiHpLonLkBBCj2VpYx8heARMqMwxeF3MD6L1uoF63bC4FtqMsYE6TCbLQjqXBVBHLZUk4mdeeq9zFDpHFu",
  "key35": "3pkwM8kBVFZQwd3AAognf6381fLN3n9KkUU6aCrkFvtukNK8AjqEMvzo2LooPLp1BvP45uSURRX6yJJ88LpKjDj2",
  "key36": "4ZGTiAiTJ3NdxGKnb8TEBuWe6QdWPi6z7g4fQFFwtrf7vSmAT7WaxkJJmtgbc123GgRenGJJphLpY913Rdp6Ts3E",
  "key37": "2GLU3RvNUBezJVeMMe9Re2Q6a9jbDbb6vCBFtW5DFB7MchSSGuCNKJ38qwg77KMXy4dxLxXkoT4x3P4AWq7u4vhe",
  "key38": "2FNESS5RNbiWGcJqHc5mSSGoY5KZ2YUtd6XoKGXPTsgc39Z2edebTxsz8Ps1tHdBy4gxAvetvmPA3WrVhMB97rge",
  "key39": "5tC5YNFAiesigxaRe8CNG9DXGY9QFjvMQnJSRQExwRzq8rosoNo6nfZQ29p1eDGJ8jcd7Lr33J5bKzzLoMF12D2c"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
