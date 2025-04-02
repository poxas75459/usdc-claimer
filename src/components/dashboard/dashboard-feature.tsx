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
    "BFz7frcJZayDnvwAV2qEuFGPnenWMfBomzuj6diPjtCWMQHzwYuEidTUYUJ39FBeGMz8Na49PiGwW5exVmWCY6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fq3G8PEQ7pW91PxHJU8xR2KoYijNVE29CqmjDHz9DEPsWJq6MQD6xTRib3qWUsksyby2xyzb6mdALsF8xDZWkEg",
  "key1": "2Lvo7GxmbTUh3GgdyDyWcZesrAPJn59zKNi22jzcPZmfMN9XPL2wVrL6xhKnPRRGYoem7q2D3zXToh1GryhrsUUZ",
  "key2": "oY1CHi7DS93GDkGv44BpgX3g24cmUnUqe8pWSc7T62tXf7JxXkBTYkdx2uxYZMdBgGRnXW2okbK6xmiSYbEQA7u",
  "key3": "3A3Pvv6cTHv6RT37TYjo2f7JVsRhJFDTPykffRz5sqvNV2b67CJs9fyhF4f3axDvh1tWZpQXcwfYXT3uFpSSsBgQ",
  "key4": "2dTbt6tn9oPtkM2DqRcDU35Nbe5RFZd88usitXHWSp285KdetdrjXFY7sAvR4oH7VnfT6KVzLJwSk1ZPA8bypFNo",
  "key5": "2vqME6JKc12yq4P1fG9Akv7CK3faucZoJqYov1pv6Rv38B2inSj6sbZc5MzXJDNGHMGWZr5gnAtQeigmCjJ3WsX6",
  "key6": "5KfoLK3iTRaowhYeMfgXrKZ7AKPENxdp2SQ6ZiZSnNkHQWfbBsmUXD6c7GzMJzbhUzXxG9tjVHS3F2xEsJJsGySt",
  "key7": "2GGgEqHQ6KuvVm2NmB2ySFjRGLjYWabWstU3KbnyEpyT1bZb5iDyhJFx34hPMgFJMLUHPHwoRRdaj79KFSxPdyHD",
  "key8": "iKP5jWGgfogPNhShRP3oPmWBdv4sEz462QRyvTQVQvRu7doXXHWBsssT34rSgif3BETe2Aao9y5Ap3mkZRSioSN",
  "key9": "4ybQWcM8PXpQXyAxGNB4ZdVtowUodKvcCz3wSqbMVVCvjCiMD1BLQtrWpVi7YgphC5CNqGGNXT2Coty6dboKCH7m",
  "key10": "HWfFkrhgFKTi6pPWNu4na5Z1aF6xS6HWkfAuGFR3bkhsmMuceqrCJwKqP3tgTd8Nb8nn2TgKZr5mvo7Rck78J5m",
  "key11": "38NjZseFWh3AXZ7kKuwrKuTNGvfdHcpSuK3AtKb6DbGi97Qx3NK52Qcg72uuzB1dkC2PhxjTjtvFDiFsQ7rGwbdf",
  "key12": "2AyQ7jpFB1nP2iwadRpBXZQFvGvdDHEMALb6Am7jqAFuraHqVDGZHVFp9PDrbR6TmnjsfBQS8ZFj7J6qdz56uW7V",
  "key13": "hsgvqi45zSDy19FjnXHvBiDJqs9sus8cMSCwXiSdufBvTxCDpiZghK8q8K5DcWAJdAB5ajSxNCvCrK4cLp3ZPZ7",
  "key14": "5tx2bfvTcM3ePcrBsQHUQN6g541pcdbzhaCHPL9oh6qSA8bsXdEgvczTedCFQVqAdjFTFUX4S2E2d8bgSCPVYPUa",
  "key15": "2YtAPDB1SbXNnAM8ionw1SXiZ4ybwDdxHMsVc51uLSjqXmj6xz2Q421PLoazH8F2yBVaxexu1TA3WLKgkGXXCsbb",
  "key16": "2cxREZaSb5Ra5YAfHgvwmm2D7UxirwgACRwBAi6cobrfAiyb2R2SKNCW75nG1Tmu1psFsAzZydHBPyD23QCQuWLh",
  "key17": "3qMYREun2HZU1TsWgGrHbSax5xJXxJnd3ynV79yApEez1x7W4SFtRFcbmdidD2wuEq2vVTF6owxwwhJfLtMFWmGC",
  "key18": "SH4yVjkLAMpZ8frYpnszgu77BXbACSiRnqmMWiGW2DUn8w53PTvtZPJd7E1kiipU6qbE6gBiMh7bcbJCcrQ2rtc",
  "key19": "3HG2HsiYrezwiRw6UxewpHQTuMAjEXQNNX3Ui4HPZ7uGeoxQd1LCv2ChDTg64bKdHCzLyRuDGYvkhxxsyro9vPdu",
  "key20": "5JbeqbnTCNajDgbMn8maCbrAQvshFonK9DxSksHXnpmGe7BwvNwzY8qZHr6qbBv1UkPzXxFXHPHzGaxUFh63wzrB",
  "key21": "5M6uoEdmSgNfqVW24k5dpjteDaK3URDN3RRfEqJq89Neuepe6ffPMFMTobiFGwA2bzgDs9iddo6XKdmgZM9ndLSw",
  "key22": "BrduhBqsnRC1jrT5NtTovo5JihjXiq1C8HXjofJNxaXeVWoX2HddjxPA6yXPqpEVY8MVGEPY6WQ1Lv6GgLCvKLn",
  "key23": "2Ypf9faYQTJmbaNQXnjTwpvG84xrE7wTGGYZJMr45sWN9syZGMNUwCNQgTn2bjoSAvUYnzDZwavUamho6x9WXKDn",
  "key24": "4wSXoC6MjH1Cc4DroE87U2EdwhHebFYQBamiGZAjTKwGCMs9vHeVuBdzAXaU6yU7q7LNmWbdHFYkrj9GeZ1AqQ2T",
  "key25": "bWeVJXUGarPCJmWPagjTzvkh3HoaTNbRaMkM14Hcj6frmzG1RYnqRrdepLVkauzq8vR39GDQd8XmWALStKXQsHX",
  "key26": "HY3MvMUTo38yBbFt3tp5gATfaRsaQSRkLY7rcyBSUgX1zfUKLvPTeHyhbeMbNmm6GXtDEYib9LCHyaGhQVoExBn",
  "key27": "48H6YgksJNpC1n1XudVnCoHojEy2xV3PwjgmP6fHmFecEJr8eRvqAk3qpDNNNQMqmBCAxvMyNtvwj3hZki9S7nmA",
  "key28": "5k7DGe7wXSvNCjXpr94s3FrtNk1hGBh7bt6RC8CPNwRaqkLAfEVLLLrdHq99mkFHrywBiM8pb76xjC8eGrt9y64y",
  "key29": "3MHMi9S3oKEtgYGvvXXCTTmC8jEw4yPUm6jAkwUxc7qeFFyz5v77Pq36zkjTvHZ9N4Ycvt8Fktt3qwDmAkU9NVXY",
  "key30": "45pnJdrDzCUrHoRuTPoWBHLPLpBSNbNKk2KouJ4n4cQTJMKfsvEhmq2Cyb3dbqd3ndu1BsLCAK1b5yVri2Jy8Bh9",
  "key31": "3RCNh9d8XbCcTzeGvdJibV34A7wjRGYD7GhwqQrRpHGTeUgtEp4tauVycEFpq9rR57SJsseNBA1RB4eUCxUE2UUd",
  "key32": "DL5xksff6TL6PC3CZraHfrYPxf6SgtgTcT8unxe53pUQXEo1Zn8GAe9viJP7SYiRL8KMYptP1yBxeBBBH3QnWYk",
  "key33": "387Rzuo1cpvmPWa6vT6v3f5kwQNSvyHBxBmXPt4va81KDocDwY5X1PFQGtbD5VT8NGWC9wm2P7bz19umoTYro6Lv",
  "key34": "5bcRVZiJk5uXBxbZR8hZXK2kQg9DkErpctWN6MTz1Wjn4c5a1uH4MKFkTyVxhJ5XU8uh5gjYXz3qnTJEjDXNgZkU",
  "key35": "5JzA7mPZdSeiwCZa5rw1WiiP8ntzbnF25F34nBE6SpcZ8v8TG4wfDy8gySe4mjh1g65oZFYvLfZbn4ktBtzSEcvv",
  "key36": "4cjQD28X8qXukfL3wwFoT3FSvWZqAJrm3ueygv2fRqSJZJXKATUF4LUwDHdithp5qyLGS5k6NFfKGp96dmbi6oqv",
  "key37": "3gh3Lt9eiiSXJCBCN7XNSE1SDnbzAeQ2diUua2Vasf6VC6WpQHzd9Tzk4oDZnZqY6epMVjb7Vtv49ZTRbbjDdjPb"
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
