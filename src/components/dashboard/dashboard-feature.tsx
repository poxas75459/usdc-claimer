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
    "JVpMgPd3oXDKaQG1TvTomg2eJbpKndbMDUtUUEoKrxnz2StkXddSCVr4sMx223zDmGw7Kk4fzJprfb68wAccfUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PnDKF8MvgHNStpVj5VxD19z1VT6hM5QBTwxYswjpM6QFHwu37wpTbDX5VLqVg29A5Z83eYbQBbVmhWCFMY2Am3",
  "key1": "3Rkzi9fEMJ7f9wHnmXxDEbZxLBGA743fP6THjJNgDWN4h3J22gZeyNXuVcHoQaSFen9CCbLRrEmenmFodUJi6w11",
  "key2": "57YWZesVoij3m1q7WaPaUzLvppKYhcS8UtckxwKZh1EQVjNjsP4YCzZpYZdChJ3bjzi1h4LZq5bBr7vcgk3Z1QqM",
  "key3": "4m8PFN9k6PpTVtw7Jn3zgfxy3FkBXranSDXV9FCRPS5uYAGDmPYodhjFxSfXZa4owc7xT6n8pmAhS5fFd4xWopvw",
  "key4": "LDjzukzZw7AL2Avd7xfQbJ3k8ZYnajjJkG3v7yKpUFCuTJPkRxoUxaoszsB3koW1ggSFXW9JRDCwZTLCzpz7ACJ",
  "key5": "TLrz5mwMkQid55aALa6KCkpA2D1BawzeNbyLWZHKWJoCYVZBbx1GpDYSSiBVUezAUXKrRApXya4MwgToRo78jUV",
  "key6": "2tDs71wB3R2A63ExRe1jyGaWUCShXny8toRdEWzKqfc5sWqiSXuZUKtZvAgrjQNTMPu4gWUxzWSqS65UKWh7mKFY",
  "key7": "3DViVsJQCR9x4Dx5DBCGqioEmSmDKq1Mqj5bB8WyDLR8cPWcLF1HnnDLC5HfVvUsWf699iGgcvmHPf3sbwyQ8ZF4",
  "key8": "9aMEgeuyoMYE1ShCcPRUc6u1wB8Em7LaFbuR8eNW5uQJEwpydkcMX6UaUT9pFMecF1z4cfAz2WJQq4KqQCVeQEg",
  "key9": "4VaYvmSdc7mooQwS8QAcb7nGSCz629KyhZ8pLM5Q4tRTUfc3XpWvFZ7dYjkWvEqyACAFpFxjcnZ9ZbynC9Tjio57",
  "key10": "5Cmawr9Vv5ezQ5qfnxxfu7DjVGW6CfLigW5Xbaf7PPmHXbXAFzU4Ay4zZRFgcLLWkiZEi7Pcbhy5ncjqBQU7SY35",
  "key11": "5NpeXgsdekuM5V7noHVz57xvzLFPz7KLCw7mnEFqyMjAoGTrsLXzmMVpkSZ2oRWjUhcRE2hmWwFKJaeG93jNpahm",
  "key12": "66kgTCq5c7Moed8Xqm5SMhcxEX4tUxkaVZ3XshnVhT1jNuZJq8pgw5ERhkjjTzKMra3B8SNHB8rnrrMXmuvMPpe9",
  "key13": "55eTTg4gXoyVVi7UxrZmrQwx6i2yiKpWYjziRGcJrd5a7S5RE1q2rPErd8iE8E3fGwuFUTzzEw2H9dW2TMSnbh84",
  "key14": "4jLAWrog8URpTKKbz4RTp6efp6ULyLRVA9Xe8qiTE7f3zyf1iPJtgofDx4dDATF2vq2zecYPMBp1RUDmDAaygTb6",
  "key15": "4GLcH6jtBc5MDBT2FZSqwN1xPqJemWXVg8d2TMHkFMGEQzRp1h2nV5r1s7bkHBRsHEHvhGCraKH5gfv5upXvA851",
  "key16": "4MCyMLRb6KTxACJSXsTbjnqEdkp5oYPiVkLhtX8ck8kgBdKf6kusRVbEm6ncJDKYJkxarWSkmxqHP9WiTQfNJ1T8",
  "key17": "5ApWuNdjdJpUmv7fGdrh9TDewWQe1vE9EL6x7RhoLq4gu6Dm2STmpUmnn1zjujX7HiYvmZu8CTbumWST2cRyaDLN",
  "key18": "5C18sW2BaM1ZmFCvWN8VJkTPUwgh1u3E2Xcx1gpzWaVGoLenJ5zn1vmGEFbXqGmqVqomCUBJJgPJRtv24wjHQVS9",
  "key19": "3weL7VUhcgdXqEnwMApEhiGMxCLQSPqzKAp8ULkyxooLeouV8zJMPonmPqFVCCMCwPN6txWCnYWfDxR5kEnmURK2",
  "key20": "4Gmsky8yV1pFZWs2U3dGSwVpvfskjGcowg84FVquzBMfh6T77FV6cP5f6iEWZVbJCA6164JqmbbVjmeqUsraYyEF",
  "key21": "3LkxXsnJyZYQqGR1gGZ2njeBM5b6oxoWxdjs4vvurhfGJ2sBm1MqKHGbR4MN1LZ5qbmgySrpq92TYdRH3ZZsCa9o",
  "key22": "44opRBXTfb9iXqsWHW5jsnhAFZtdDtn2WWQ5Nqk1zqp4PQUqFpJkB559b5R4n4iHwRLvFDRYvDzJd2ANVYQ75JTh",
  "key23": "4M3tssxeBcJPmKCfwdZh8jaE3am58gDLeW1kRe1xVwCPrfo1oHgwVXeKSwNzC1Vn2hKj5fhbVCeKq3vYT5jciwaD",
  "key24": "39P4oqwsbA9YeFt453NURHFEyDkbKn6E3tV78Znw7RLmkoFpt8dpvmENcNwQS1rxJiHwNTUrWB1VZ9UoRAjL1LiT",
  "key25": "LkH4z9987xnqBpbGw1hcsXJodbSpy3yXUaR6zaD1yPeGMTVdS3n9xm5iR9aRM2KYNKCQGnbTCQSNPUQoaGydjd6",
  "key26": "z81Y4rKEwGqSBi3xbZZksLYFg7kDmcanUf9J8Ptp9BsRKCCkfgx1tjDudpVRME6qKnM6BfWFeWdXuh9YaZUsg4j",
  "key27": "67ouniw6E7fRR2Fqufazp4ibn2kBjMeB1m3ZP3ykDxy4doDpxzv5DbJ3we3bB8GLbNXQ5aHfnit3yfL3x19bqMLL",
  "key28": "5eUyK7T3dCvLoRQ6hGwMr1XjshgSETrF5ejYUN7nKHELsFjoYGDGsc1Nm8imTeQo8Caf8tFBpBbyJKQk8M4aJKZn",
  "key29": "4vJjz4KaXBHgd6vmWtp72hmufszzGVC1gzabyC8eSpnU5HTv7R9kBYT9LqsHJQE1DG1HvZj99WmuFEeR1oJZp3PC",
  "key30": "wHLWsPmsj9dwHTqNaFAKGNmfAACkvXXPh44rDyZAYEhmY12ohrHE3XYdNBxt2fUMKqEBXJSLfNpXFJkQyvLo47K",
  "key31": "29NxAV3WvZGFaACkiKcB6qExPH9HWFVvCrTRXmwYeLubmLLfFdLL1oHG7KayFF3QNyzst4KeWxime34CntCprYQA",
  "key32": "2UZfMYzQo7KxntHHiZ1URqJXscMusLAz6rbX6gXXddsjMfAzVvBbSpRwFD4rHcjk5RhhQ82CGAvYVdBCmhTKzqKe"
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
