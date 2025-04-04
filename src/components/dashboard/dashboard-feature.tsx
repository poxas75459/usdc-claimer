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
    "Kw17rbLc3NUJgyWTzPfPJJ2bnwT5pJY5wtWUPgVRXQHpVkZJUuEzwejHjbptRTeQXooULQ1JVjp3QMH5Qmp1Y8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmC6YTd92whNTEaUnxKPLjWXqbSXoHRAVMiZgjWeZWzpGefAsgBb84917Sja6VF5baATCqpch7ojw8gZKuoALM3",
  "key1": "431eQziukobDuQaHd7aAFcE2PBymoQzuqdTUWwVNPaBJqozPgsqmncrtJNnqSyFYbtWowH1RLE2NFAvVtnkHT4AG",
  "key2": "Xwcscy4c86pNM71yKCJEyRNfmv1syCFPDNT57hTYkKCKYaNNWKK5jFbbxJYfHc2ZnH9XBMiPVRapL63QohmTfkt",
  "key3": "23UxpA7QSKMCMmkFCmMMtMVXVpjAfuz8mRWetuGw2xQSAke7cGJ9yBjeiL3xMb4dxZ6QeVqjEUDviBjQjqyJNMYw",
  "key4": "2CgS3HQ7iDUdC6u4g4rZs1Ntwpn5Ex5XHhFV4TfDPvMnqUGPP3tAfhdDWbebQGJYtb78xjJetJLvkmygDALXAMRQ",
  "key5": "64FKomhGbb8rE4VsS1ZMqAHi27wD1BRxQTjLbTnkWoP37RexV2RcaoAyreua85WhLykWHQ4SoCWjNrDpso4Sxp99",
  "key6": "PXx8PcMo9pdbuFHNYsuYNQAfcuLPiuq6ux4HFUCz3T5eEpbkcXTYAiM9LH4aDX2pE63N6EeyHv1odZLWTupsxBM",
  "key7": "5udLYyULKZ33CNJ3xfmeNroaSy5rsLqTh2HKGvZt444x4xCmyboRJdbbbNSLDv3L8PCRnsR6k9UPkVFh2WPWUqRx",
  "key8": "4JLD3HhQkmmiqPXKUTmuCe6gcNxqkzaTDheRfkBH79tv7rg5NSSVxu9ZgoY5vcLFTVj4PoPv7eXPTJqDZGq3CiUb",
  "key9": "2sWriMsV1enzBNiGg3NpwR746uGKGtmg4yYUm6srJnY2Tr3UJg23DzegcF69cWCSXJB5KHw8H2QJKxfrQ887q92X",
  "key10": "V7V4HueoqJRdCNr3GhpnNUqWbXXgnhMaTmhDBYVAfsTWaiUfCT7SfVAewpTzbN2pCwcwXQgBPBNmtesL8K23Rnh",
  "key11": "51VAnuUmUHdjmRi18sk61rKKmf821wsnaWCpXpwnzHuP7NengbnbPaT5aFToV23XKj4DZDF3Lg46wcSGS7qJxkhX",
  "key12": "gUqXCGgqszEAPeZBwCT2WvHdWjEe5pFXX3qT4mLY5y2Tuq7dGP7b9paVT9pUovjXYp3s22p4AqnLmvG2fdenXnt",
  "key13": "51PrX68CQ1xNJGjgRbKu4qnc6eMhXcV522qs1y5N9r8cbebktQS2Y31T9VM6V6x4WnamrKcCtyURMBQo5ffNLqrp",
  "key14": "5eLBbJ58grr1GTLBzLzpNHu5KJYNmQPdqPtU21UKyyL2Q9UamuRifJsiyM6PjHPdEmNnc6MD8eRAaXjDD1V6Pa2",
  "key15": "3byZoicfnfrN3PBwGePBfqVR44XZKf1aQaGWG7pPxJGvHqRe5bQkXuXQdNXi3s35LCqBP3oPCtLB624GuHrMXbVV",
  "key16": "5eFDbCLFKJ47jQ7AjJGztMT2y9aPtrBzyX3mzwgoWxZxK17L4FiQGMSu9XrtbGTwnMgrhbtcE1Dv6VXP5QZxhC5A",
  "key17": "pcdnKnxtRV1b7U3A42mt37B8mTzNTDizJ3CvargioJkdQZ7QFgM9rUdEvDYjsyTk6QwJUwv2gNASVCxpLgP1Tdt",
  "key18": "5Xk5gnSskMiFf4q4ZXmre9nvyrgFY6c4QkLm1wqUmY411Ebwm9eHYkLib5yqejZuMkQPvix1Vyj723HjDRHLSYyV",
  "key19": "8eqnJgeCWvZroM5j591y6T6yZMX2j8iYq1LxfhvEMDW3eMYfy7UCWvg7Mg6ReWaDbAuQsv7EYvgm5x4KnmyiYSq",
  "key20": "3XS8BdCoctQduW2qP3Ts3qVKHibxvrfYTqo7S3dmaRdhaxHGLVbBhqXKskTuR7BCnTK3j5yniPrEvP73pMSNeH17",
  "key21": "qdzr7zWqEWC4auSwzTNbAhQGr9odkcMgPSTUSnZaewVSvQwNwN9CaFRgAapWx1HVhAboZNry8RhojkdqfnAw42v",
  "key22": "4zPbeqQpAraHLdquDoJ6tDs9mqc9CsuxPqrE7qChW68ho4LSqhFvDFVYHnpim7uHQwfcrqaDAZDk4V4fXCzC3ZKB",
  "key23": "2gDUBisPkT9frzdZzADG2R5h7MUpoNiQQZAjzuLQ4o1nrxYysqskNTCHbTxdsoMTko7LZhyF5bZiGPhGDKK9Yn8K",
  "key24": "5eE45cfS7y5bXP5PvZB3Tm6n4WTE2x4Xs8MV2yLEyJ2s8pJqiwaVaj9KdBXaSHBJDw3a8pPmaZXjgdEyh9q2DqcW",
  "key25": "YJDR196HPLf7aQVLVQBbCme18pM4XWfLKMvw9gVQRr6o4JUmjfrmeLRi2WVHcTpTLvHasRgtkYv36EWeXpX7zSZ",
  "key26": "5uagbm2rF65qfvKYNSBvk9gpDL7JtVv3zCgs9NN64vfmkLRHaSZMdBAcKddrGEJNkCYq7s9HxgRrFXvX9mBNvD98",
  "key27": "2Kw156GSBHFRLmDkczRNZBiH3LhGDxLpQoBGqZhCvNGFpnHvBpcRWPfSMidqvgexcq3SzDJRHEyq6iQ1oQqHPZsJ",
  "key28": "5fVDmChWoXz2qwmCRP23adMYFMovauqs7xRcLENSzVZgSMVT9yHDgWJwr8xasxPFYn3pawKDbkREbTx54RAZcLZA",
  "key29": "2DPhnGoQrrL2NtG87y433MyrkfLsE7D4tjZh8QkCByVx8Pb16DZAwojC3rC9WQBYRb1jCbc98JenjDZUeMJfztX2",
  "key30": "2nJP3SE5pKxuLhTbBndaVfows9oao3RnoddWNMMA9WeLtyvcNySAhV1y83Crpz5XhbcYGbu42hPZPv26Vb3eJ3ZM",
  "key31": "TZhPkTqgqd8nBtKrA36HfuQahUXYhmj9E6cqFHvAEkEpYsS3ZXgdF7PNF7A7wb2vEF3YxBWS1wNXx8UMwbi3dsf",
  "key32": "ks97Nyg8ryYhwwmxzN7arYrAa1NFyJSb9CMJ1qzq9iAQKp33V5rP5KreyDqb9aY5VkZdjHJKiKzy8Tq4ANvpsPC",
  "key33": "3T2dj9jrPD6eELXcxZ7M5n8QKZrTFxtWph3WAMcm8RvLMCqYtvzy19yzxdx7o8eMxdt1XCTVMm5SMLykA74SRbKA",
  "key34": "5P5aqe59mjAUNFtbgdEHtu8G1qbdFwSQFTHp5yMDHcPw48PSaSPvQfPhCpCWada3o54KeLv3j4X1tPe2UsKxcDfH"
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
