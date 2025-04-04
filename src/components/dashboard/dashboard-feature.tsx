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
    "212EiQaBWbF2GiGSBfjk4jFhpFANcYqd4JFt6UsLEYr2PQmbFCQexzTcy1urKDHzRg7PwX1X1ZgjAWLD2eqJQJ3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeCQuW98sLeu3EQZyKqaUWhfTc2suGBno1jbx16R4bQugBJutofxzFFNFq3ReE8GNGdZjWwnqtAKxCiKfPtrGFv",
  "key1": "2FdFYvVhT6tMrqVU9Vz4W7iKa7Wvshg8H63sH7mC5PEVg5PdznodJUSpfDhfbgtYYEdaM3exbKazBGkwQkYiRzTa",
  "key2": "59jjeeppKVYiJNzHcmj7Na9RqNPnrbTSxEsUFakNPWFobDkhn9KQfZQxJuFjZTxVygcCc5xEhdeM1EyUmWXmwxVc",
  "key3": "W5Ra8ChBGvr3fbAt5dWFe6BNPdUdSX1nGAtgTyfXcg7q8369uBz13gHLcc3nx6NH5dXxEgRXAsGeQFDngQRQBrd",
  "key4": "2kN9L5iAUdbxP81w3Rn7v24ixkHh1YXZt7PW1xfXoxeGej5Pi5ftf8fNDVeKHAvNTjbLemrEXtfxuCVRjWn1TEs7",
  "key5": "4xZosgcs6rDrBxUubLaEzHgy7P9vVXh3d7bqZezNuAcSJf3P3i4Hz9DEQEERkJsjyaAqWiZYaSaDxHzczPRtA6Js",
  "key6": "67Dq2A33SXAkt9eNavksTivDszK4QCTqGZwGf7fYZ5u4UqLDaxunyBEqUujV3XZJ2bv2u94tVZuYU1duvVBKmPhq",
  "key7": "2jKLtcD5MEnVRAvrVns1Av7ywskhzbu1yh5WFbrCJQkJcDbPREAeMSfkonxLt7wagBx2VP6acfvJ9JaiuiGRhgre",
  "key8": "4AzwkRhjwg8TS6i3bm3VPGc8Ut1svAKbSknc6PqKxGyFBdyQPrsEhA5mX1yxjCFLGi1TfHpCyFBLSJYJEPY7bM12",
  "key9": "4jmoFZv6ePKToQ4inzg8p8wbh8LcisZvJ724LR7GHLcSfhY9Ds2hieiqVyy3NgGdrqV8AxECBxYMWVMPUcd27cNJ",
  "key10": "43PnqREJ9S8TTJs5XKrjd3jEeNRXWzcENu4GyQ4Zf5UVB7uEX6pUobjYjYNRtKmStV1hbMGm7rbSi4PZTD1ryytN",
  "key11": "5TydBPmQ1ipJu9kXX41sW1tCSQRJxMQBbZBFPq4Dof5bxtyEF7VGXJ2zEr1ZUp3gm9zYL9jWp9ZeeJbajA33KN9K",
  "key12": "tuf9fEZTKk8745FV9Pn9RjFF3amCAtgAbGpVnUnK6PDYnD44jceyW1SphuKewXt38FwLt2fhKWGZaKLCS5EvWM9",
  "key13": "3dnVpf6sUUVyTVhmmUFtHnAA3vb4uNFyNWyJJprPuEh36d6wGVkyjjsCMRHqoBfsXc3tgkrpgbyHEbfHoxaT162R",
  "key14": "TqaCw88MoidnE9VTsyYeeJpHhdm6YkzADefLKS2hKQLpdE7mPm5yHdUQfC9jEdisMPjXJuojakKn2qJqD6YuHKJ",
  "key15": "MHLMo9LSrhLaPq1ke17SkDocLBs6uWY5Z3m1Vaorxpi1xx6Y4HqrDLUfGakRthmwaqh6JqKMP5sTfc2nN4DN2Tg",
  "key16": "2uv9pCR31jYe3ukAP81V2z4bBC7sHDY3FLwKZ7D8g2iAjG2TnzEfWBbXCyZEDer4c3SoYmDuhHy8zD6KaehimTAw",
  "key17": "5ZYXf9zbtJtkbGoer3pCP8y8V57akFnkf1WWAwmQKpJFVbXtW6z39Aiq33YSvPLeUUqofDEgeZkrQryuLYHAX1fk",
  "key18": "3Mje9WjdZrSdJ8K8faD47Z9HsD5ZcZJrCDdXgHLjL9hrm1ThchuWNPVmtm6K8yzKLhtxpEdRSToZoaCtGUq2M51k",
  "key19": "4sGti85izKLdkVT9o4S6YicQhehMF2eYWH2Lpm4RSM52V4w7QcYrQGsjvk9TEL2sK3zFBB4tVS4WDx9asoAufgoS",
  "key20": "iBYwCPntUrTydmnq1FgQ9QVjnqQS4j3AS7qH3CfHHVk7NWzTbbZnVNu2HBP2DTcEyxAVhCfMLGHUmzirUYNpFn5",
  "key21": "4mMzAYmVfwq8Ms9HjnzmTkGMUjAySwvshSSWKzJFvhA39AVsQsNjAzfYxoXobYWhdHMni5iixrMkrwZEh8wH4QeG",
  "key22": "rDgMfQThtFV5EF2XGMnjHgfxtni81pG4jbGp26UVAt898DyVxJPYY6Fv8rkyg8C1nnAxTfGbp74WQGj5sJWdqzN",
  "key23": "5hQDbQC6hFX9XoNjTfN9hgiEsP9CJZRoSGEKYCqohCMPavjj29MumE3rFXFeiyXcnuREoFrnttN7Zw5zJDpk9DLK",
  "key24": "uAzLuRnsuoh6np384wuqzHScXuxPJXQSVn9RfrwLWv2DoHYg88Qxe6e4sRsQtP2gfbZdq3ZBafH9oyCKSERKXSr",
  "key25": "4WKgh6k4KtdE5SRvpTEZPF9F7UJMT6XPzG6HerVD9K511Hme9f1vCrBdmthWPZycwUtfW2scsFEEuDssmeDMuxBP",
  "key26": "37W8JyZyHt4Exu7UYc23dTWFbPF2M44SkqAD2APEhgSQvDGjDuRYAERAo3TB5G2Gp5iYygccTJzYmtQJryyGGSsw",
  "key27": "4wzbQ6Ct18HtFHYTNicKgSn3D5i2GjkB8KH1dL5sAMJS3bbztf6EGovLNmacaXk3NetecyVWRwRRz4HJ3cdtqpZG",
  "key28": "4aiNc8L5zYtpjvCwiym2mh9fMAjbx3ZPr4FJ79J59uEFf9h1FbJvU9DEncg2fK81mmHUCnd926t3tpkDoEEUcqGT",
  "key29": "3wGe7qXxAP8rKYdtYx7cA6hoes5jGXZE7ficxYirNp8YhZc3k7EMpPa1L1pKYoDfzv2U76kiyCTeAjo2cbZNTiGu",
  "key30": "5Jv1Do4vt5wRJ1EBmpnnd6R1Hikeai7Cb4u48JWP6fqqZxybCkC8N6k1VbcVkYRF2HXkMkrtm9Pue8LGHnzXtt3n",
  "key31": "2U6Fvtd4FhHEWk2dPmCZUuBW1hGAJ1pSjTSx5GfqMuKZLwLWShwKX9rx4WdNEKgkwpuoNJfVAnQSJwC21sWgb2pg",
  "key32": "44vVX1YAZ74tqhvnAC39mg51bnQAHC5uqjM53rSY3wpPebwSUH3bQREzaUayphUmmsN7PV7JYHBaQo16T4h6zj6j",
  "key33": "37MzRfG5nLxU5osiuwUyd5ZxqZKeZYhtbi1BVgDZm4pXrRZsGZ8BHoaWMMwY2B8chmZBcBoLqeNe9bY2ShyvVV27",
  "key34": "S78caEcVCwLEqN6dK8CP8CUW5ZYchcLsnxYYZis4oJwgpsRjz2UQDUCyCfx5eVZwFbitZ3GXfZfvncYrTvU5yxm",
  "key35": "mit1WWQ9epAc8ZuC4EwXPEfE6TAH9QoXLgZDSSST29tkYVTBVgDGbKUhYNYQ1HdMq3hQvFbzYa71gS5iA1qpib1",
  "key36": "5DNTdgP2Mc2SSaCLgEzb715B3oHQedj5GxPhY6yxTcrHLZxxVxrnWGUb4Xa8iX8vDUoaq9ZRos6KoDbEK8gCpFTE",
  "key37": "2MXcifxWVeXZTJSSSpMubtJ8MiuEfXpMVY2wRDT2eKdRnY7rFh6X73L6GAHGpg36Q3AaGeEfBhq5YnzjPibKNMVi",
  "key38": "5HNkuywxEDS4FvG927gz7wcWcz9VMPfB3EuHQQdVF2hPfc4vPJaMfXSnXDni5BEfWvzVN6AD927Q5yMxkBmbQxsb",
  "key39": "2DHopLuBiKaySUoJHwtbc7v2HjnxUpbACudTPuTbZPK3zwQqZCWQQaTaxEdR9bZJeZBaki6koGtwKBcuLzuVUWfr",
  "key40": "2y4ewdikbsK7kwgEXe19YvZdSomCUETYC6MwZ3gqZkdTAJvAgH4LHKw9k1Pudi7cuqMi9dhK4SuVo4n1HEJdELDm",
  "key41": "2W6BnRBGwoBu1KH9GuPxLXGvyAJACeTEm2K7jTgYfrZ6QGiuYwT9sm2AsEY1tH94ucjq5i7oVPHMTBYZjE4aRy4p",
  "key42": "4e8n8ZybHU2zr94zUr5BA9pcjjgjaJMqyFdZdWMTgG4wPJkBvXUGQMQTm7dGkGh5VG9MKwyZmfVKsvKPyJ4Vs4yn",
  "key43": "3hPbPZPHzXT3uGmQCt3p5zqViC6fQW2SEr8g3P45qt3fit6vUeD9kTjvpgUr37LGb92YkYsa1Rpf9uZ8b8XBa3uw",
  "key44": "dANfJxuJuFkiGzXSBWWjQKVj118FywJnGkDPCpyjieLjRPQc3AcHCB573fV2ni7bYr2ghu2dWaGG4H7gQUsXBeL",
  "key45": "24H5DSfMdvZPDe3pACwAUJZTvckdGDQPMmvsEdR2snTvpv1qQfbeoto5C14m3PhgtLZEdRthSAuw6q7nLhHUuGac"
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
