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
    "3PVcCUPjsAors23UCom9QAAaYjdVkCVWqRDineXzX8kRqCM3QpkQkfiLijtjJhjadxLufbAgEC6X9YhUTh87XjwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdVMtNcjQfJraDxQAvoksoUyJx8NucRQyvBAPS7b5o558jgLmHNWPY1VTtd3e6V2C4YGbZeJ4u1EDFREeCPaECd",
  "key1": "3aJzSRHfhqA5CjRabi9Soht2YXwcuzfAb7QsENEgAmb3eTLUVdQMKaceVhu7pgJUsWqKYnqkK2kjxEuwd94rTzC2",
  "key2": "3x8jkjYkRSLKqvXTVWu7hh1hsbGcSYAnhEiHPDF9dpxhGmGxWXXTrgGBfNKf9oKeqK8ZSKe6moo75vSnuuysyz7v",
  "key3": "4mkTK93m4xYtH1yEP66KgR8uT6QfLW3AE3JwpP2ND89KnaZx6UTSU8Kc8ZCTzBW5Q28xNqtK2oReA9MeSkWu3KQp",
  "key4": "5tuaJDaU1JRE8tD4FczsHMMW3ruaTNDnGX8gwUMBWznyFRidBi7LZDUaktaSdxM3pqo8NytWb2BTUQ56E3Q1JiQ1",
  "key5": "229KrmQxFdxjNyGtnYzHNoo7qjvdhFZ7BV9PJdQG3G4CWeZVMYWSmAQcaYZHqthJNNEC81XnYMeb7JCzMNJ8RhZF",
  "key6": "2oWKuMP1obhRb8Nw3HvoQAPWDD98euyu1XDobKftEW3ppV3cRsmdLkmbYo5b5B3ybSKSZ5GskYtJsAgNCECfBYoH",
  "key7": "4uxhqJACAbE85G7HWGXDu1FrAZdaNcTRcYZV9HtY2UKkvAB23YG44cviX65dhKygwbRSyVMxsWwa3VirRfekVn4J",
  "key8": "4Xi2nbWPNm7ZfboBRBa3SghAaditVsYj3zQbfTZfPtqHfKYvowuRXgb2cXgKknHr3HxKCPTwqNTpRqLJcZnfuNvA",
  "key9": "31u8qaqF3jWd3zsBwQsoZLdvVuCDuUwrcyvJAGBoxuQm4ucWEtLQtSXHwUc1xMqHvme1NTiWSAw9b7aqcK2DQqHX",
  "key10": "SpG4cfcs5oqqVLMd7448M85k68ZPjGJpe23822FTbxC6FEYkQgrXgA8pHY37XuUfVEV3iZ1rnKhJ2qB5TpGTUvC",
  "key11": "5YA9mdPNHAJpr5RdryMiVFF6FEDB12JdLi7qsBhRnnKxjiAuGkr8UmEBpgH2ZRRXREZ5dXVVZhqor28WBzqkqVbK",
  "key12": "66k42kRStaEu7ckp7w6hHrzzRbiXGiXTmVoYEb6ebWp4B3XBbYx12bKs4ScfpDofNW8BU1kRqwZn2cCDi8BRoYjz",
  "key13": "2ckyuncFTuENiY1quZ57DqxgEixeMcDWHmYbQgBqx4J2tSx8G4SdntBbKanaCDg2RQvu6oNqeELpxrE11osw9M2D",
  "key14": "4ofhuxg9jXUuPTtmFCBM5Z4jXfXFapH4MGm26BpNkWQb8Ud4k8R5ibckz5BitbUq9os8mKC3kq7yDAtwA3XvXTno",
  "key15": "JVFVH6ow6Y7KGvf2D1MZmk8dt6RC886KcBPkzsLnQ5APRrPHPT46HxJFft1UqJz9AYwLcd7cajd8oxX4uCw1yez",
  "key16": "5sfKF732uWnwmEjCD9CxCNEFJzVuKw7YBddbXVFAbz4hA1YaaNmgq9hLcLx4oqA3NJiK9F4YBf4WnUmpKoB3YmyY",
  "key17": "3Qkj75UbHuQb7undymEoUjUkhu6maE85SMx34iYV5S7w7hA4uSmUTEcMQTsmWYteXjNqVXKGRxWqj7A4faMiu5aP",
  "key18": "4azMMfTod4EHSgyoUrEG7Nv24wEPw1HWsEZKKWEcpfq7KszNJCDXkcgCaSs8MsVGsBz2ydhAk2amcYiyEtdgY75c",
  "key19": "5AwKjXjBx9RNCC16yWhuftWFSMo1g6fKTPiJtEtWEMSVhrDaM2cRb6oAMiFwNdxw6vR4PjovCVkaCSfMecznxB2k",
  "key20": "4B6KCuy2QfpU98toT6HfkyCmDDPdiGkyEMASWNHwXKPyYU8dStbAQyjSp7Ka9teFcmDayE27wVNVYnRj5LJ7gsow",
  "key21": "3hxDao6oTZrCdXfZ5pvYrcPkuGn97SewMQqnFTeUJm85DQHd9ACADutBYMNJFduf7GSaAroy7zueNpiF5t8TcTmi",
  "key22": "3t5xkCMqZQbRVsor5U1KWiv2CMVHttv4K3EbtQhrwXTPGUXwv3uHfDdCDUAzB2z66LSvnUqvHnLp6GVWUT6ro9zA",
  "key23": "43sUEJfSeneEn4QtqUMNZbs32tXjVWV5F7VgRifNG8VvWqgdXBEC2e1v2DjbAF4ao2dbYN9LCfjpmSgHUtvfJurn",
  "key24": "25ZMrsY67SzaR4TGdmbHsVoM41MgkZiSc4aDZQWx477KyfNJhsqpUGFLBw79xTu5s6Rpae6Wmrc4c2JpajsUMq2p",
  "key25": "3m8qewQuVbiBMM48pyagLXSTArisjNvHs1a6nqzTBFEmBdYkeZ7xaVpcwqthrys3EL2oAGcJPNKYuyeg8kK2JRi",
  "key26": "2BRP414x97Ci5qem13tvaQBeMHxcjbvjaheeWS9cJCCa6jxWsiNobFhueo8xyiybPh3hbUTmqLtcAUdbpYhL24k5",
  "key27": "4H7UV1dL36h3gUAjUFVZZEN5ej7XL8p4izDQvnXbCTrAiaxbcn7twzGuk9wEsp7hRq8ZUz3QYSPcnBwBZCuEL2Jn",
  "key28": "FcdhEBup9siGQ2TfhATSZUzGbGudnsj6iPfLJY3wx47yBL6udKVFgZvntke3w7EhW7ktVdfE4g5kAVD79L2Hg98",
  "key29": "3YcZuD3R3qUSNR7vJCMxgCLGgKM1Pzryd2w9EsBnTxGpkDtsMBT1DZQFTJyjXiUHADoiQmfwqLe1GDgTWSjdY1Eh",
  "key30": "ZHbspcDSct4g8zvvUkUk4DJKz4PvkaDxPmJ9bfngkmNs1RDp7tUnvJKzeX3F5mTR4yvJ2FWKQr55KD117trHVmR",
  "key31": "4QRMoDNtzg1T9LALTeVCKAutaP5G268SWKPmSULBfNa2jksK6sXbFL4GV4j3jCe1aesG35yn36UFnfEdL3QUJafN",
  "key32": "5z7MuzJtXjxvarBkU6gfEFb9WVLLMGEtegrC3vDnownBTGmVxSqhgCVGbTHpgTtcednUmsuK7mPZQR5PRzuQyWG5"
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
