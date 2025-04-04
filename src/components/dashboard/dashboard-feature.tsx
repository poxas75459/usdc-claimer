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
    "EFBkgfAkV2PBEZHoo3jYEqu1x8fkLAqX7yXwAKzPCfNxo3PfnRw3kHVNcCUhAg9PGA8BX9vRPiH3Gs2xtLBmdZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BywpKcMtV8oxAAFYc4sYbbStRRLModgtspUbF7tFcarCkecgNZfhqUyy5jXeudVjefzbuyupn8zie481N7epptD",
  "key1": "41wyaHXuJUqt11RzeRa975nCnTZ7cugFT5strWSmeEvsB4MXoWgN9Z7XGMeWXBgx7CfhwUbHqHMgVuJbQmZ8XNnK",
  "key2": "21efKYRwnDsjXD3ZkNfVuqXiMzURQmQbNk44WnMeS3UgbMnsgufKc5t6zNnXZqFSA591WsmE1PAJ4zkUkmKHaNkg",
  "key3": "3zD5eR4teyYt8wmD6TaD9CMqe4h9nNVtjuCeZWi9vEcM71Tanfhd8xmxLkERgWQYpZRk1XvbvyM68eaBjYxtmERr",
  "key4": "2QMa6YF2ERMFY6CouWRNRJtetP8FBboScF9assRSUY4bpPspLctkS74RVqCSTwRvZwDipGbdySR9jLXFmhkVRnjE",
  "key5": "5H8qRkUuAbCz4UTRJhFosPyiFVu7Xu2RJ9TLdNRkHTWFUL2s7WzUYdtqDMBKH9QVfrTbheuzuFxzWnR6rnPo2RW3",
  "key6": "AS9XqMSrryBu3VmJ6mmihxdDUwGdnpYq2WMHX4gnj3we8tPBsbdQvcxJiE16jzoXjTvpkmqzu5CiUnq4EKLDRrD",
  "key7": "5wmA1LUSkDQFMXBvBU2jq3j29PXjNXFNbq3tavCb4JDBGt5WFtREQ5ztBEZxbVqLc6dpQJgBczSftVGqCtRc57k7",
  "key8": "5oPGzKrxaJ19hG6Xj4CyBaAFgLdz7zHtRAW2BEB4RP1C37i7E1wAUhRXTojBn9YCsvsTExodsXnXAW3S12kXUkDf",
  "key9": "yVGPx1KBcJDPpcKZTwSvAwsTGzu5rVKeC4AiqBsazFmwv1phZSoTG4WYYc1YNZJEqVMpm8Umzc1rasKjE4XsQXc",
  "key10": "nFcmQH1y4GTq2g2HymB23uTsKPzVgk8MrAtr3Jz5MxQynAwnRy8R7zCtgGA35eWCdfBrgRkrkKUMkrtWySZVmgV",
  "key11": "45vnC6PWjLT67E2kiK9heBrFSj26JrfehjhWZR3Gp2QVXBhQuFniSEM67YuFEL3AtNjRiJu3wNjGH1RmTZkGRq6o",
  "key12": "3fMnjP5h8uFdhGSVkPkjGArErHYnkU8Tgr4nbsS6fvN1rLa6fMxrXStv4BGKoYzB7nCeZGV98eV8AzE8btnqQwuF",
  "key13": "5HkQMx45Nj9Hy2qLASeVnncvi22cfnJSEbenPrddxQ5Qb2vu2f9A9FPFwc47EmmZN77Uwi3eYubbbYyR7AMGL4jd",
  "key14": "fDyqTXEUYKRzy75XonE8aHL6NiNdZ3y6n9od6BbsWZET5taVyEpwk7AWi6M6Luv8zj2QJX9NxtTnDxUjEhiNhGZ",
  "key15": "3p3Z8Jzn15cXggdEKFsFVLHHuWn1G2tzVorSVipTDYbXvLGeA9jJshXCvwztJd6DUWC1E2CNKzCaoZJ4iyhBwzrS",
  "key16": "qhUom4X6GdW1LvcUaubmrHXx7Jc5ReFnNAYuheGyBrTVXifgL9wEXgkJT1zMrHYAn6zxDvNCisU7JbMmoVkXktA",
  "key17": "2YtMKD4SeAHrfL9iSBYXBocPcARzp1Lmo3oxuisDtto23R39kaPhrNFeR9EjWqBqyEYamBDT7qitP1MSxwatinMF",
  "key18": "63VemCZivhadLU7QnufyFy4TS8Tk87P21qBhbnyRsvNs2BCnHF4hqMt9Ew8yyWLxqMVQgpVoTpgMmqkFXDUCUibF",
  "key19": "4n1kAJ8ipPJ2XxwiXutxAZr6iEngsZ2D14BA3godSZz3br7fRTMwcRH3ZcMztBvNubtWRagDJP9WxZtuhqVZkzAp",
  "key20": "28X9feroWBb3CJAoncHaWG33RjMDzjb9iKA3XKmxmYMv5UddopApaBweskFud3yN6GtFZCyVBKgv284gwYYqzRWp",
  "key21": "dZr3cR6a8dnEK3pfuqQuaXo7fjdjm6BPH6B5XzR61hupWTr9D2rVtiXjSjokefZcmzPdsNkZ5iSXVDF8Nuq4h6e",
  "key22": "2QRbCcpmVuC6CpdhJxUbgmq9n3UrT7sm38yymiGFmR22itRkfoWFfyeBEnwNNkxtJCxaqeh8fkDkrrG2hbWcbZD1",
  "key23": "51nnRzRAdU7ffFLcKPHZ3FHa4m9cr7QhGdu2jvLr3hYu7FqabDnugywWYgKwixDhUAZDrvVTUUm6KFF1cBRF5VCD",
  "key24": "2cZ7DG6ktJgZM8hRWUUTgcaqj3uUEtE9MdVGain3ggrwuk8gQwmPKPHYm6iJPYxeZ1V6in5bfGGTbEBxitsbo9A8",
  "key25": "dWynUxix8CiNvgdhm8ZJMQA6PyTj44szwXnVobRWdejLV95FLCXNbW94jgB3rdjyB6qtWXXSAX2NirFt8MwMAWW",
  "key26": "3qhhetZza3dFPzqNBaMJ89WpTQH8T9NNPrDVSwKF7EjgwfGvNgG9twLvadNLe2SZEyH3V7z2fLoBha9pV4f7ySfo",
  "key27": "4ByFzD4GSEGAr8kZTpNjn6tqjAd7RwuhSawrQuybtbdgruGpYiyQ1gUxVvP2ABdct8HKvxzvgJMSsJjoFkdNJ1UX",
  "key28": "3C1DUKPUnAtq6mr4SvyMjDH49oELfWdc19ndMkZ7jq6SFYkmNnUYdxpHZapZiqZbxVBHHCkFL7zv5xdeVPghntJk",
  "key29": "5iTWXHSgRL5qkSXg3b4hoGxNXQqPCiA5yebzsi3yf1VE8XYSPmoHiQsgcNJdnJfHLDj2CEQ2RverAx9R3LNzAZyM",
  "key30": "5aKtm1qpYuK9uWgHxywFgE18iyGyY1SodhJuSU3A8VF1hJSM8YbsShCY664TgFkwYERrvnqbHp9PnSra1qacqNJ6",
  "key31": "2ozhoGZ8RPbW851thCqFYJd2CAgyVQ7CLXVCiNzcA34x7hTPwG8R9GU8GsRkMTLkHtUvHR9KJnr3xZJVWknsH3wW",
  "key32": "3DviD4nxS1C4LNbuQDYDSGiPEtSiBzXE7QzHsHVkwDvP9hF7ibzeaH4BePu6dJe4cor3jCrnLySN9BordZwgCyLF",
  "key33": "5A3ocBFuXKAP3WNr5FMDLTWQ4X9R9nnVyatscEKYYvAxTmxCF7oVmjc6RkBaQyx8X9SU9z1JWJiMvYSwUBkXKds1",
  "key34": "4Fh61qejEKHpq5NHiPcNLi3mwNTQU4pAjgmBZvEPepNvNYB75KWnbD5XAdDWBVt2uC1oDwpP28Y4fqHzAGawPs6Q",
  "key35": "5MeNC6peavYYPL5oGkhsrKbu5uWUz9H7kuRQDVEDJb1L8KhjqwhEiAuFRGy7ne3M2xjXrFm2hwjwRmTuTUH8nJhc",
  "key36": "28vH5B3M6Y9Eiok1qb2qYwan2QLACRvBeBdSwJf8CJjDPTGH75wf6t3sPiv87dkRtiZrfJHQQPau61mPjAtqgPcz",
  "key37": "miUN8FcWnZi6YmeQLwMMVB2BSnCMhKA9dSGvjHWUjGbwABkynJL3KCw2LDeq46ZE58xfi6vBrHLoYmuhVx6Ra7i",
  "key38": "3iTVhmgmfGn8F2fJvdSCHHofRNeGsd3AVSWXg8fdYxTFu3TU3PmZr7pXvL1jYZGicYGvPwGFvMDaXfU4Yjz25KP8",
  "key39": "5QeaCxzekWL9hRCcnishYfq6HUL3sH2bicFhF35StQ8nvdEch6xydZnzHBwvPn6XvMoZY2YgV8ZZx2LrN1kWrYK9"
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
