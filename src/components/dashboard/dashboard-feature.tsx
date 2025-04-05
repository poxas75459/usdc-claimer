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
    "5CKuVukJhaQacy1UCqkw7vNEYCwgUk2MQKfED99PMK5whkS4Z8WaawAzTSBoiA5TpV2EDFLTM31D55AMSgXs124N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hB14C7z8779U5iTt7bzqATWVTC1WWaZuXnxkW7hko9cZQ1mSmnHk7NTTRXG8nwPbrCiqALwLiLBmgrBTAsSpuBD",
  "key1": "hH16tee8XLQ6Tf4WNe1RCxxzPoEwoU76p9azfYRCHyDQQHyxQriLUfLhDEgdQ2JF4dzYhgekvqDdiChWJDHjsok",
  "key2": "3fbdwK5SYAhvruoToHp4UtYK8ZgtpP8kPixUv6SHbeKHcrk3ZQVS9tDSH9W7NJ311VZSXYU9ZyM4QZMk9RnwHENQ",
  "key3": "5HPz4pUj8tZAKFRejchMo26kV7hpRn2QbWAhCX9ndvqU9qWSiGxENCD1ZzjgHoeKdXeGCcx8b5AdXF1iUWci3DZF",
  "key4": "UqGkSeLRxTG9LJUbFgx4YuxKC7B95Xt5NmbLQgsvMPssJHtwbjgSBdWUGPhpB8WYVMSK58NKXdETajDEQZCDSB9",
  "key5": "NVnPQYwn9ARpZr3zZrPTtgMDyeWqPVKzjrNTnHm9D5yAPdyZjdtsZWzatxmYEB8oRASbyaATW2CFRy49yyhHLUn",
  "key6": "4R2yfTmAQabVVvCKamqiG1zhhmFDXH6mA82Vvvrz5F61Z7GJ2JZT2pHsEofYsvuyc8QZ8i72ZhyfxM2fUpGeWC3o",
  "key7": "4jM74zKdtB2ZFUDfaHBq1MoKUs3ivKsCwwr8wm1oGHTCeYQGrEYBDaivZPxMJFe95Byf9Toj8qVt3WDF8K2v5vyr",
  "key8": "3ego2oFjATGbibmeusd8t8zRn2FBhahy21pk7YKzouCU2FFuHqVZPG2QjDaKe4T7rWHUJ6gK3DM8xw84SCrB7XF8",
  "key9": "3wL5g8ZtaKHPzH64Kod4owteaHpVwBHgX5BuMdKQPXUTypfyaV7Kg9tg8MXMALDz9qD9bsHgUAXFvaJHPWsk5q41",
  "key10": "27Xro63s8AbEjbTeVSJCavx7yqkMLepx3WHAHXxjzsRaqgFq7hUL3cUdMRPbekUm4E9a7HLj9D2jcqN1iesGsFan",
  "key11": "4vhFWXhSwXya6APF4a5BH9zBCno3eCTVo4aKG6noYPi4DDhsTD1csuqzcDxtsqid5gWdGEon8wKvamS4gobFqLvV",
  "key12": "4weFre1Mvf4tttuGVpFuFBg3XFEeXqvvhAersuc6ghTZ1DGgwL7s5WR2gSmvmzfrUmZaYsdFsWoWwoGPN4RU9GTz",
  "key13": "i5eA5ytUAmbjqcL9yk2W7o42AqMPBzgej5vxHkVa6xZFpjU2eqXDp7P8RrRa1QnunCUm9kjjaD55xpwngq4ajHF",
  "key14": "2mpAQfXGgna2sXp6k9QfG9yKLopNycWCrM9rBwaDbCCmqcrfbzNz7ZkoYs6ngTtFMiCkk3VDWTXmASimMZ5aSJo4",
  "key15": "3Xi81tZMpGdWwqN4J6vsKWEHK4E2Huv73RhEPdfBo9drLF8obCZeCNEzzWxmpC2FSzWMNAKXbn3jAxyLiKb7pk8d",
  "key16": "MQNsvL1D2PBDxr8yDK1FriziAfUcYAA9HgspTaL8AUtvswy8WgVUwc1n46Lj6bcdCAm951Q9yGURGryEAuKFJPc",
  "key17": "4MoWjhVhWjKBBYW74dVvswTvZL8kK5CiohynvcujxKEqwQy5EJ8rERJuHG9UPRXQ7WNcgefrNLC1EVP57XRgp9yS",
  "key18": "kmpSQrA9BpvpY2EsYVhHMM5gsq5NyyU9FtFEsUULmmq3ZApoGaETBmyFPD8YLk9y5o63AotD5jYA5trEdqT3C5q",
  "key19": "2ggHdmR6vVd3VxGJg1qKPZVJsePnZCSojJTSzT8TbtFNiYtxFFU751YVd7MJuY9C3rFTyjUWF7TJdwjh4VbActVq",
  "key20": "57x73xxHqqLm5NHC5tCseoBS96mcHCVQLaL6xhr6eNUUzYknCv49W4PSsKxCGq9cwNEJ6RkivVGraTkuoSdN8v4i",
  "key21": "3rtoWSE2tNrUhsc5wBLyU9jJ9x6xSMphsCzjfbwJRdSkhHpS8WvtgDNTcBgUix9MUCDoZaMRBwR84Mpg8tjXMBJv",
  "key22": "3nC5RMwUBa3tSmyEyPwyDzrM6hTYFJJwi66rckRTBdwqWkdDVUwTQpM9MdrvTEqLoMZgp71h8kvWwavhUBo9KQxB",
  "key23": "5reczsHtKeS2b44pWMWGah6Vt9eScTi8hiMaHEwhk1qzZJUMxUPUjvAMDgRJ3LCVwjCAikbpzY5auj2FNhZEALXG",
  "key24": "XoT5WWPrPS5cNbJLRvCaGfgyz2jhPMkdgyYYMjrt38cgnCT3NWHk9bKYPx1C663qS6S6jkysNHkhBJCdmMW5K12"
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
