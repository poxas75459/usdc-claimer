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
    "347szcap6vpTUq84YpvRTkFrMW26wuJ4SgFewY5oKaK7xEX92CCDQ8KaZj2TVq53Mwr4PAtxpGFaNzZZuV12kbhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ffPFVkV2YS7E9CuQRQutTBRF6KfGFrXP3VKLmwNUmx3HceBfv24E2ix932UMLJkNaiwqgYN7qYHDURxhMWZqUKx",
  "key1": "65Wi6gJ9BUNAHmz1yx1HCtmBqWDs23uk4CYpuc68388SXqHDGRGX5p3wE3am7G4vjW5reC6xARejFQKT3gXQbkZW",
  "key2": "5QNTFDuJbLk9i9KsnZcoM9oZGGVsZcYiTp6XDefvBEaL7FL8b3BzNENY53YxbqErZkFbeTK7AbdtFz8txvzG9Hmy",
  "key3": "kFoBt6sAHu8CXYiAsxM7kXZYiVXwbQfWcAhHRJ4E1pgNBF8ywTUPCj8CsoRsFneaZPSZViRmkmgCV3yzchvdVzT",
  "key4": "3vufPvXRTmeYGfkPSLpEFmupP6EnaEe3NZfBW5q9Ew9YKE7rDiieHdXJSHvrMmMCf87mLhLQnn3v4toFw6pb3qAw",
  "key5": "4AKj464XXRNkm3chg4er7z541DR6EhJbTxzWEdLCfbwYAKPpUhWkegMAkeEy3erFWaQ5FVBDMzDBRwExXePqCwEk",
  "key6": "EEDZoVhLxVoBXSWnpJgeZFVpBZBwSHRxyuKsmUTZ23ghAeuEeqRmB871BjEoJsB4zBAoDnpM4kQhoPUGkVGHT4r",
  "key7": "4pMsmpZJpLsx7sKTHRyWdpdQb84H9gYRC2zG41Q4HM34ExfLywcRn2ZY79X9jLAXbN1wr3vULaqDQ9Go7vnzXMXY",
  "key8": "3U71QHY1pjJ2i9Bu833XxQMmhvc5PtDa7n7kotijNWX88XNtKnU8BPKAfwBKiAjk7vJFgBSxweyFmuFkvrviXnsk",
  "key9": "4g5SsJwtr12Gt2uNJb5urQn5SrgP1JvogCLFmtMn5dArfRxuQENbRx4fo1zZUACqBRwLAG9Kvc5eKkMa7RsXd5d2",
  "key10": "5TsynergG9gfEYzCjkC9UZnAS3sg8AELqMqeQtfkzy6kMrCfu34oufqoGT9MfXj1KeGKfU5Z7fcUFfBGuBDmYGoZ",
  "key11": "5AGQAPARt3gqvPSHzRmzd5CSKV8ikEiBBKobZQFHMnXvdCxscDMhh1Jwgg9DEEkErL1dxo25Er6GF5PJSjwPoEtX",
  "key12": "4AuXdHktkMiqqGLzeKmkGLvfdpcRfs5Sg8XFXwRAztow3ky9V7TJdiCrSsueJS23xfhbPdSdSaBfsEAxehMUsbbu",
  "key13": "36t4HrpEa93mJzSGBJxC3ic8UK9FncoRbUaP4uKE6ZeGv2Fcp4ZaZYAJtg73wLLZGqQRfk27Ucx6CnSVR6L5848E",
  "key14": "4DSrdswNZTv71PTQRESh7dEtyxWYdg18HTmQm3VeKPUYx4PaysH5QHbgxgDtVoKsTQk915sWLdUwRpNAtuTN1PKv",
  "key15": "5nAKaeVgArtwTLFhT9bgVctTzXD11DLoMxgHG13zzVtdk4yzFUqwrSYvRq27onpGhmZYjCcjKQUBpwYpuvd1HNRP",
  "key16": "5M7nAzDsQKawv1hKLzMPN5HtDrHiL9b2kCnuevjEYPAwJDXV9Q2m4JLRzZHknGaMF6EdQY4vf7Gj5SroSoTwkDbc",
  "key17": "3pAJU6MDXMPY45CqgWg43KvADDDUnd8rhdWJS9vgZD5yLxxVWPPXrBEHhHPXwiKtFtmVryL7voDEYEt1L6V1YLPv",
  "key18": "3szFtgn1f5P6uAih6g4uycXGn4ofEqEyqVcpu6Xc77yEp276zaq81mBMfwx7LZhnEq95X3WB98eVek3awjP7SQxi",
  "key19": "xfPHGB7GVSZ92UEfEBEMF4rJQbKXwoqwHqLeqDnHGktS2aJR11UejF4fzrtaN8eU7Gc58pyPgxq1v2owvvnEthz",
  "key20": "2SwD18sycwfbFXtuR5tTeh1TtPTi7RkZvPqAD2ecQmne7oxpuan7kiGUaYeqBfPZ2s2YnvJf8sNAsTxRcwS7hU7q",
  "key21": "PXwc8g3CRc49vC8uXUt3CHMaJwY4aSw1DYHtGQQGxKizuxCbC1AXJ29Kwfgm5D1BHp2xVWjzTzXWpAZVesTJEAn",
  "key22": "RpigZSUKAAHaqZ6BBjmJEoiggCSBC2sHYtBnKyUyzPUZ1E6o5aTMwhMoyipxG6uqMdZPvx3NpZH1JFHtodrAJVh",
  "key23": "3GGsYfyQvpsSSLKLnjaGqfTix7zxkks52mE1oX6pPzC6gZLzf9bgAUsQqz9QYRzdQkJDDeLRTRZdWaYLcLzpi2vi",
  "key24": "5WZSb2FYb2AP1Zwxvi1vthireDZhhxk5LGt4uLfpTGKAufUpnPvib7WbTE4E8LDVjxjBfJoc9Zp1pcH5yx5DkNcb",
  "key25": "2vE3gxbwq8Jx5pjAAxnuQ1xzARaN1KQxWo8jFKdoor886MES1xVyDFGkvoiFUimghdj7fUXNVWXvRXaUWp3uk6QD",
  "key26": "4DxeGGYEvWCMSYXJc6nNGr7nHj624nQ3vu3YUyzzrLbDhPHHd9EyxCfQSpg4Hw7yp462Pf4qrZNgZ2NiG5eZDjug",
  "key27": "4wPwX8RbiDTMi5hKaMeZdoFMsA7eM76t2X36HyN6b65QNNbpWzXJTrzd9nCf8mV3Co1bxykrngG7uehraNRpboZC",
  "key28": "LPd4eSffsyx4NqUQ5fTUemBb5bsSUykhgqjqfppk4mCNhG7L1M7SMkHm3Y3VYdMHVzTrp8X9TpvhoT2bR9ywGE5",
  "key29": "5QmVtvHsqfwBZeJdbRnpL4eMmoStZU8Nuf9KXKag6FwCffg4UhZ7aykK6Ra3VsmazNBLZYfoyu9CS4ysYFLAJqTc",
  "key30": "f9nxD85zriow2cjyLC3wb7AWhAQjiv4eSgmJFWheLjAwc1Fk1jdonopop4GLrHnQK3LsGfSD2i8TaE9B8NX8ZUj",
  "key31": "iUg4542NPmjjxiQgM8WgXjvthocJ73zUw5cgSrUZvQ7QdTSkZx5dUr3xGzeB6So1M7zMa6yJTNnnw7hioVbpc2p",
  "key32": "61tAU5cthTTGMSxKzoF321mZpR1JH2JrmiZtjrBKzzbumVppp7vgLk8Hcws9M8gDaeVomPubJG1n9ChZfiSro3oc",
  "key33": "5WkMsQu5L2RPyg1nkSRSXkzmd5v22PwngzC1W7deaz14HFUVo8QjATb6Qc5SqhtA6C6Jh4VxV7jD5LE9x9jBSdpt",
  "key34": "4rgiDqqZazcLLxnGsbGSetAy9GkjKHYz91FEUXzGZFP63VUWdJroVf3Nz1shJAPgG3459oPie4HRyqq6BAGnhusJ",
  "key35": "25mDcneuczYHHP91RWwRGuRibqmFrGaJrnxdRTNTiPYuzvnXB1pmiQ2jo2fH44TkQRufS8E8qkEf7xg41wQgkaKz",
  "key36": "hniPVCLduPprm3oVoquX7aLMMuX75kSRSdk2q4sudRxRFUD2xK92WZX4qoh5cx5UyhjakWg3SL8iyzpa1tXN52D",
  "key37": "5zyRDH7PhcCZgHgH5djZn2sKrQMqmawNeGfH2S4HQ2vTCzYhuLkW2fE4t4pToLtdZsi8kEL2r4KuL2cE2DZPZBm4",
  "key38": "3zf7hzxuYKTP1sK3TB6Zcot9pJ2xk5wEQj2uRMMgjMSRdTn6gwkVnTHcbTCT5sWNk435VvmBAMHdmjRTsKTKkMQN",
  "key39": "3MRYiMQirA6ZtBj9k7wjYQYALpsWoBkEK6KAfD9bmqytV7onxehEqTmE3PkfgsTJguTTpGwBUQvEpVBqwCBVjPCy",
  "key40": "665kfjyXMJR8gGz97Bhbh3ah98Y3jW4s5JwfFHN4bTHdz6V7Qbud5RfScT1SYwnKirhxv7PQcfrsDYSZa11QAUeW",
  "key41": "3kyprrzdN9SmjJfCrxT9tuLN5tW2uvkew3d4kQUDVky5iLYuaJrGktmdZHTGTXJok4d7uD3BgTkdcHL3ekQBLUBh",
  "key42": "FkdTkkSQSSJah8med6DPBCLJiQePEtRjnYC4Ux2zK36UVBQVPMRhJYRRwq7q4e7eWtpoQtxDRimz3qBucfu92b9",
  "key43": "3MqWnbWWLBb2scNdvP3JmFXNMc2tGU7zv7rHPLsHaTRM3pB99wvSfsYnjgTUdS11mvE8hU5HFQsQgDcTeZkLQ9ve",
  "key44": "41by2bbFozoyYd28CtoP1eUW1wnp7DpD2AYxxWUj5WUBHjjLVZBJgyGu82wWwrES8XqbmDLRTWc9DUChyTtnGCxa"
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
