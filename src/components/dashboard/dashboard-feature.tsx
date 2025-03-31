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
    "2r1CBwdkZyY3tWTaPH436MXZJKJBej6MgRaSxKKBsspYLA73Tc86QexMN6X4n3tKUJJ2Mzj6h94azms2LUB6a5Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vt3mkfvEiqBHiT1FAWPByUH6ASSY7dsXZzKkU3aWyqmU4uqQYhbbXLES3gjz72fMmFHt1iAZDt9ea8TouFuMrPC",
  "key1": "25Fs6d7w2ZGywVJ12sDwRtruTJvtMTYsrL88Gwa1wXwzLeW87y9VsKCKq2CD9TZH8uPkGPL38sXXgS7Ty37DJ6xx",
  "key2": "2cg1GJaVfw2jEsMcBVLqU7zVTaSayyZPhCLzCxA8hFcADD7u5sekkjCrXod7CnAk2RcY9wjRKoeHXff5KbT1DwNg",
  "key3": "2ewN4vKmHzpWiJ7CWtLzAwXhxdWyKYufwBeVHT2fQAeLdTeLvHAG4K7MdsvsdAYgtBVPVXmcrWH1nvbmTTbDd9sW",
  "key4": "ExYaSdonqbbdALSSfdq4XKGqPv7wnpn5PBotqMtcyfSGJamXxpD3UpVHBXhyLnv8sYuTtjVaWpDmYXCC5pLQLVM",
  "key5": "UbUqhvobYizkzeuNFJjrh2nTgGYaX3GeyP6eFjnn3kZZB1jMmy58DdoyLQZ1j3J5YSPfhKCMUAgUySe3q3qQKUt",
  "key6": "3knHiYtZyWKJh8F4n5CdybBVbJu6qDAJkkNiD6GWDRTA7RKapspqtiQeMVGwbRW3zmougZcFysFVz4ALmgybHZx7",
  "key7": "4PfLhp3wYiHMJk4dnDRY5uTUuwDZJ8w4HptrsaneoQQstvp9RVGJ8V5z1QMZREFSrqjRRM5ve8krkBby25nv8Dxu",
  "key8": "5crTXDY8SiHm3XLqq3ygxD8wAQ19xPzdwtf1vcTKqgbwGCcUhPVT3APFAoMcbjZrgysXPRxgz4Jyhw9oLXvuTspr",
  "key9": "5HRiT2dh4w1QUBTBqGSLZ6xPv6yGufpZyHvSSabWpCoaraTv9y1sXy1oexVEiKVUPrKyFPQawtLLcBPgQxsj7t4a",
  "key10": "5Vzvcd71M9MjHu7h57XKGTtgaDZeDRwK1jqzC22ooUkif8dM2xrfVmikbjntuX114Cddr9QYgchYfHbSJhGyqCmX",
  "key11": "5mcd3Y8bsstKmyp4kRRa6CD3g69jH1LjaE5SKjdvX5iqSffXit8HCDU4xQ63TgM4nsURSf1VRid8rq2ZzCiSQj5S",
  "key12": "391eSDAkTbqUdnTjtqRDJ3g4sphHBZBn5M9UeTZZdt5q3thw9h3WPP3HUfM3iz4ZLAXejGF64F7qQ8BXw7sXFGUe",
  "key13": "3LSrP7iYDZnq65qT5cHsEbAebQxF4Zy5VemAkJC41NfuShvDimCsD9bXARGnry75WP4BNupuCi4jx7JF1dw8MzF",
  "key14": "358GWoFmHsbRGyZaJgvFFZSXpgE2xuoAfEccNWXgPXvdU6RkXtEcEt4rpW1ZZNBYM9szLKtMGyBFFrm8JgeRZGgf",
  "key15": "QY7qKqwiTiuzvLYrf7Sij9xbezHTJrubh3rsFYD51VzXP4p4y4vgMeJ5E4mkKrEQJkFG6CGvV5JzGMdgFgyp7qx",
  "key16": "sufrGtthGgE5iJbV6LKJDekVvvtfhYGWe2p94pdTbJK6YZgA5EwhzYsL1EL5pk7Aisy1iPjQtTZwhtHXMsz2fEX",
  "key17": "TqYgHtS9RKVgCWjuQ4mHVv6bUoMb25pGibn14b6L68pe4fywt8Mn8NfxHFmviPnZ1qowePD3qsFab7tVBHL8G9Q",
  "key18": "3meWSaPJKppZ6scGnrie6dXZB1goJwvt8SRgnS7Dpn2jVQsKqSgbmPr6c8VWyGon18FpkqXw3EhqNas9xCzNQpnA",
  "key19": "rWoE6iFWYvTG1Cqx5PCYny2ah68AZpccxxT74Rh7GryhGjxasLAjr1N7Jto1EyWP8yhJ9WypP7DnqsD3jLvsE9D",
  "key20": "3E9ssLbzZiwsTEeNmsDWyXwQfDovBmTUtZYudCnpjfiRdiZ3XyrNBeAj3BUhUaXKbeNJyDiTg3pgB7DwVnJzMVrP",
  "key21": "WH6KSXF3enbhZ2LF4FNcCC5uuViurTgZUAHSRuS6Bw46yN6zMf7S2q6bofabEHEX3Ydzuz9gg6jaVszamybsFpu",
  "key22": "5LLj9VPnTJcjED28bQoKoDHUjXPyF84heUHLTitPUJRCDUDaoqB7Kbr3crAKR2aGiANudXQqLHFb94hvczaLXsHG",
  "key23": "z8A3gJUEA3Yejkg96f48GFrXHgJYZpUdzkoFpNs7bsnJvFEXenU2QvoV33mkGhNHGpNQVeMvFL6tx39Y4L3XGet",
  "key24": "5DxZ1WSnEfqjMas3JczvXjRjiNVVuh2WFryqNyYKV7qrZCRdbzhwkUzpN9nbpiEKxMV8JFDUpqZHKT1htHNWhq4S",
  "key25": "8stPYNLK3RSbGj1gfkf2kGp74o91wZ9y9gby2DvS3Hg8isD73GgV2w9Pw6mTMegS5TFRPKdf9HrgFeBAbNQ9GMk",
  "key26": "2RngKYeMzncj9pRojaxv4oPTL7h3Lavf3hkCvsNmmjjCgSUTf7rCBaicnW7c4Tpa4hYgjnYdUh7AgS3roBH1n7MC",
  "key27": "4WBvQJyxnK8yaDFKFYkQobJnRhVaeGcHhMHAr12GH4wQkbdbB9FMK2sqrCPP3sCWu6xeKBpWifATXJn7TfMSbLBt",
  "key28": "3mRgpaAjzGPoGZKgqrYfcLYqWCxW9uUZcrJMruZgpn1hR4vgopPJz8seuQaUbw5vV5nqeDrT9HUT7g34hJ4tCrgJ",
  "key29": "23LvobTLDnFmjguNuhSZxJPAnvPvBVEQMbrU7gSeXi7JvYNXsWHs3XMvMFZB9DViFY6NNx5RoNwn5SR7GbQ3vCRU",
  "key30": "WVZBWqLyxD1BvBCqpTtp9XgeHo21uQn9RzzuYmiYPf2jAcjNXhu6Xrt4TqNs9yc4TbC6hpC46g9Arvh9JFsuA4K",
  "key31": "4tstejP7D5vsdFVqinAH9XvH81EamRLn3Cqn6mD1FrH2UmXMYnuhhRozf89q2tSyjjG2WbfvPfgHbxXFYE5RFagc",
  "key32": "5FnSCH71FXkAN4AYVyNT5veQPiW2Xic414Qx9z5U6Bj4if6dr8B5TxAwVYT9frvLn2gUxuGLUkfp9emHVCAZXkfm"
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
