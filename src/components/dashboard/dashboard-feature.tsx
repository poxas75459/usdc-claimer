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
    "4fjbwjd9Xeypv6K1RrxinkKjNETbvi3nQVDG47y51F9J1YDzbRJfr9kGmFSiTNfc7noR3ghLxfUB7818fXSTbVeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdMLmqcoNsfqwGvsTMoR1fohb3QvSDB36gTAzWYpF7mcyZmAkX5vLoHMShsG8nvTP1tuvaKUpb5ADyiK2JFKZjF",
  "key1": "3UXpbKpZVp1kq9XSmfztamvJQhQ9KVF3NTNgCqDua94qTiqX5oLLE3CcrYMPEq9pR3JJ9zT2fHmvyPZFWTf15DMD",
  "key2": "5zv3wnNY5pPVhGo3p3Lkg8GtZ6MpjNeyewFontEKnX4hUDAC7no9U9aHDZ1FmdBAj2aAnyeHouoxEy9o3h4EjRuf",
  "key3": "4UgvJTUVqjXCFbUY2qSL1YoPbyBXokbKcGyCigtEEeFL8s4gBkZzsT6Yvzm7C3fYNfkaqu16p7LJHrR2GXETM8nS",
  "key4": "5s1a6deVyTpCE2Y4YY2bZyAJ5P7KwGauWBiz717tj35kecQRy4jdYux1GUFgNbuVE6uE7RdSx44zJskrNFRRB6JE",
  "key5": "4CfSiqffvPHhUU937pQF2tNim2teAhpCQWBcXcsoZHkN7DG1uK294MpZpyZdxM29nFugMYXLD1K2C1AD3c6MuApW",
  "key6": "We945AUrjtuVGDrAbeEdn6FXBXEtZYs6QPGwoG8HDejzaTr2JVPgSeGQxtSBTXVhvabTxz6erPXgtE79zDeke1o",
  "key7": "2iVU6Wbg8NjT18oRge76YEPK9VQkRgQ5CHw8k3Y32goHuVAyKyNdajEnWbjboiYSKeguaJ8ZVGZwJ7Y6uEzMXjod",
  "key8": "2LFsxLfUotXsK2MnLHtHFeTdZzifyY2dLVpoPG6scsqXZQdD7aRvsyzMR3KxyCXBF9wpgzAL9jQqdT4Cj44QEiBH",
  "key9": "5nTPCDnf9Tz2DRCD6783iqDd27eZukMWe3XJ9KenMpwP6Q9NLsjv4TzwUtkdfetUcVyU3Dig6LTdPKvCSGwQsK8v",
  "key10": "2FigNsj6FxZfjncCXVkUr2gypTKLF8smTYP9gEoc5iS4jWifebpoEQDefUhDrWED5GjZnVpH3BgxNVvtETvfC3yx",
  "key11": "5RN6WDWdK72hkZgyaHbfpFYoA6JLzsRXuxfWViqsKynBbQEjMf9vK6k29NSQLEurENNPJPgJyD6aV6fFvttDMjos",
  "key12": "4SYkRJwu4hqeLk9BjjvZ4GtbE67bwCRMxUq6bW2wUDz2fTc5ceGtQ6nq8RxSQMB1aStLmWHkpjG8dRdgnCZ2vq8j",
  "key13": "aaQoYXmusVz3fXFQ1eqyDVQ7UuEFePQnAEN4FthGXdtXLbBUfpzvMcAjHkKvkM1HN9BaAbkRSLDyve5TjDrAFNp",
  "key14": "Bu1gU6wz5S4xjrXF1MDx7BNNmv6bz5LwRs6Yzqvnzrst6BjnWVDvUrRcuXRKP1rHtvMJJmcaE92MMJdqvnknuLk",
  "key15": "VssBAkVc4tkhCYk96LxXkrPmY5zxaCpGYUpdXGxXMpfcTQydahmCD5u2usxoFqW9ytd1TAKqAvLYtLmV9QRjdc8",
  "key16": "3FqJhVb28evACL4NYDQc8tmXBPa9HrnzHMmLAbBHtQ8cMZ27ah7mDrXp3JkSDmcgeNY5t5v4fi68DpEGevszUak2",
  "key17": "hUboUeumxkp8B4qd4VTBHRQDnyLqj4X5eJeiZxkPzRw9XaokjwRj1yLsBDbou937w2cRFyiQSAoXo4DscvxKHBh",
  "key18": "4N6WHnHdzfNBU7NhZotRhQYy5TB1PKA6QpbtLqxPqMC8mYxccMDfgof3vjKxpmrqznffsLEHFhUMXJfspBzTTFFC",
  "key19": "2pCcBH5q94eVcMyZ5mG1RLVL6FWJdhHzuQChPPRj3SwNSU47GGM8x4dKEAfghXQSiHD7PREqn466FAL1ceWtjJPX",
  "key20": "2Stn6ZkMm8EAb9EPx8tkEgVCjsGLyWxDhaJMkDTpQ3MvXgnDwBeKtUBzq16aNDkK1QDzZMAM4QqWQ8u8A8aCwnd6",
  "key21": "2rQm1V5X1gc6HrmW5ozWgA2beRUvMQhWSjUCE1bsYLzjhduQZJvDCRMknrbgwQUirVumUY1vdxKLAWegTeFmYy8h",
  "key22": "4RHmdFu3KJYXdHrJUUSWMSHJ6Vf9UyGbwH2Np83CM592AQ5xrbWaP16ADZN7ihpbGqTMbNGq4xNiDW3o6kyeSaC7",
  "key23": "2jEyJhB7cTo3CRKjmiSZ2tQj1wdmFb62VZDB39ziWstpWchs7LnTCexrTp9CLsw4e2QBy9xDncxEcA26xKKCm6aj",
  "key24": "4xFwDd76JjQUuoXyj3c7ryk1hcDexMd9S4Z4xW8AMF7SdDnTVSqXMfNLUUbEq4iYKUGoYgkSM8xTFMf4Ny2revW1",
  "key25": "3bwuLEz5oy4LRM67o1fAP9YfXV49Cwvd2iQqYSigtxAN6Uv9cmR5p4wCxcQ7pWjFYAJCy5hCiyCmL41bnnpPxxy",
  "key26": "4CJcUfBgMW5MkXWyL2pu8x96fh5eaYryhT7tfzfkKLFyc2CER8jWvtLjHtwwu2VQeMmZrTKyqj6TzchupbGGFYQB",
  "key27": "3PmCaPhvr5apVQXJyhtif4V5a9XtnUzqiCaC6hteFWXf2oSLvwRbyznUVojfGeUcDCkJLqqbHbu6HnfuPoZdgENM",
  "key28": "2nkX1mjr8QXTPdPDukiuGKs5CQEzNXteK78dNEHi1vHE7VfkuZhx9xrWf72XfSFVeKn1hXSrVQj7wrw9pEvgoqF",
  "key29": "47p4DB8xd4UvXqL8qc9mkLXXLoQ8Pdm74cp3xs6Na8MGCE5if22UYDELjvcLhgJydDog8oBhGRMcZqj2TdSu1YfD",
  "key30": "WJcok1tcqqUxU9W8uVAGcAFZ9cdYFH5gv9mxysszs2Bc74vJtpRpg9RPiqNkakipzxeGihp5osAxeczK1J5NTAb",
  "key31": "2Jajm42DjKmHwyfUB74EjqSLaotcgtzWQzfpRaKwnGbHWDX1GWaxBp47kk2VCRN4XntVwGGqgdmukjVFvVQMMx69",
  "key32": "5hEfwGMovkurcDfh3AkpUeDCLWKqZ7Z4Tgma1UUWXGKbuphViU9G51JHci2GBJJaq8Md7cdWAE9dBUV1jzKw8BfN",
  "key33": "3pKV19TpWFDBH9txfTh5jitFGWgyvjXhZTwL9z8dPbdpUVMBt7MpAtuwvQKY9ZH8AHbVQ1bGVHCncptZeMggvZvU",
  "key34": "3M1EWHwPoPHcDA13L1781ZpbauESLmyMqJ2p5QPL35UhcXBMeALNikde4MCTWnJDrKwBhMWuUUmwRQaCLJwSeZMC",
  "key35": "M9HvUwdMzik6VQKcbFXgwY4D9FTeiQYDZigsEoBFMpMEQ7bBPWAbHYsRYd2B8rET9tytQ4v9447bNmorXXZamtZ",
  "key36": "5Q7LhB8bu2rkuU5L5KGbC2ftx8huFCTvhXYDTHTBRUHtmByrGtbiExvGX6XKCXhimfJnuhcVNyL3GuBzbn1xMRof",
  "key37": "4FMkkPoyJqP8RDTAd5KioGkJaNGP91mH4nmd37ksziSoPFFnyFX2LQ5V4nM7iXj9J4XwkXRmrpaHKBjHdLswXdNA",
  "key38": "652gcakDafNSBLhGv3NBLJS5NwrL923b7nrSf6fF74kkCCDe2GtLb7vddMimzFaKcMdQjG2sDFuGFx3QRMKmxrdF",
  "key39": "5nGdZFUKn4QtJSBmK5hs5pfeu4chrZW3qbFZMdJHQEmQkxfJ4nPPJBojATnsztzCrFHcPfGhdfqsWru4D6Ey4RwZ",
  "key40": "5QSQ477fVhJgXTgs4AVGyaUSyCUJSq4eKPd4WDsttvjB8hV4JuUNgMaeooTfKA3ND5QYxm1m6wTgRCgpMzAGfBtN",
  "key41": "5wfaZHmDzvWMvE69Ver9TNSGKptqZzjgrPBwx1aWyTVJeer4oKe7HQsLYmSfKQPzDzLYnBMXtqeR9KjEGbre2wvX",
  "key42": "4mB658Yzmhpv9b7PqHMtKCUcrZg4UoXLpNVfzLFGyqqNUR7akT6tg5T8A4r63iKKbzsZsfPyvPNcqnkG1x8FqGfW",
  "key43": "57SCPaKjRvXaghF5wVR3BrrmsnhpVywS6vEtycx4Ua6rgS6DKy8Yg9yR6JdwFiTbs7QY17RjSvbCBdSdPSwdkhNp",
  "key44": "2Gc1uDEg1AY1ngd4yrDCQUmmrTKTc7bCrVJvvA2GNRhFXPzCwPpPXx3fHj8PoFnfkXGaPu74hPEDeH3ZmYrsGLTe"
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
