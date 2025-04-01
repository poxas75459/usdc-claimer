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
    "5rmHxCGDBmjJQD6zy4LB5op4LSGd1eTWQhC7mN6qYZ9QuFggjTmhZ7qawS4z6EKS3tqrx4mZgLAi5Ut54Rf9N4Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UKzA4npUUe46MPaUrn1sEv7Z6pPkCtMw3VzsEbVYANZVtrVo3K4TK2F6ED8qxfLKdTt7op8FS5rhCfJYmeid2bv",
  "key1": "3F6Jn6SUuAci3ffr8PeFVRHHdSjGckec4SLhmYNKs88Rg19U2AdD8RJLv4GBbzXXYZf9Ee1rUKU22xrTL9W6PtQA",
  "key2": "2TF361JpVBdjdeATg9cTu8fUu1j7SWNa49ZLyJMwVFeZNELT7XYfM3N1My7hHW1CnzSe2Z91WqmcWBAK9mP7Fs85",
  "key3": "57nzmAxH2XX3XczJYu7GBLACUQYbR91WaYMKAXNGvaXNEJiCNfG96gP37GfB3vmAH7ABmMkzwUqpZSutq8NeEwV",
  "key4": "37RmnG6xkmQMieJhtKHNuY9kzxcx9b9c3rrqMJWueiMrZEKEWJwLT4SCSooJGw7Ffs5RSSmDLkBFezbsLc2Byg9x",
  "key5": "4u3ppEGxUSpXYWbRmDCBht52Ghfh3XXmfpENHYMRK5Efa3Lxi2oovKj5M924vFWypakzniCoyd42ntQga5q9FnxZ",
  "key6": "XyKKrbzf68UoV7JpB6LJHVfCRnrEgvRZsgmrvg1Mt19bQZ3n9QkqRaJH9nL6u5QBcfnAU35Vve1bXXmtmmKozuD",
  "key7": "5wXAhAMwJVwEiVSzFH7xUtQh5mgyprDDE7syabFQyUD4sg2ASPkT6AHPnXjhSDGS4AAcS8cazDSpAquYuhJYChxk",
  "key8": "4JVgQ8gj4LURRXz4jnPAJ2YELT1mgHhGPbKxaUFYj9RnyzxYtajbphuCUVVdHMX9TskuL7A3jHmxBxN8L4YZnUvU",
  "key9": "2bCvKyeCqTUj2Puo8dFvoRmucP3Uz5k3u8XnLPMmGpdEeuZ7MejMNMPxXbEc8jF9N2aGQwEpaBfWV13Z41mq1jcK",
  "key10": "67B48K2vpdWjmiokFZceMwgh8hNS25pgPZmz4Z8vTSx42WGgBViDC59CLgVLFLk9DmyEnPCrR6N4kHBiNQfuVDzT",
  "key11": "5h7maD7WmX1KyXUaw7fmm1kGtzdhMLHXCQhn5AzKzYTLekQ2xS6T8DSrFxzctBm5zffG4pGNeTRyRnkSeopsFN5L",
  "key12": "5dudExuh93RWbWgKkuDpBnzdXxxrwfKZmfsrfhxE4nybDyam7z3pArPyFxN64YjoQMJrevsoeVtfHftyoVcmYKUG",
  "key13": "3mJUiDKMYqJT8Xk6FyU2Pk29HACPtatJ4pPrDjaNq7tLnkX4jcqnZLTgkaZki1XuL6YKficBarf9gMiG4gyc8FZ9",
  "key14": "3JpGSPt3insRFGcqYt724QbWAsSqB5HsNFUqktGundudqWFWS8e1T3TCdbtoLKbts5ZeRYP5FDkhxKVkVFAMBW4N",
  "key15": "3gZ25bDUajHN3VEZBmcJKZhBttYMvQqv88cbMJQRXtYoWkPUWQLTBm89aLdGaWevGKkqbXpG9i3YQNJxyAM62nCZ",
  "key16": "28vDFRLCFSiF1rihyDEdcWB6SNWzDQYQ8Uu6y7rKwgWUz7DJ6WEh8SQsvgEx98Djrm7ZVQ8hNoWE16TRphG6A2Xo",
  "key17": "4erdDzrecyJdhh8Nfae1KwHEBDwP6eySvvA9436WygPsPxRtizxtRYFw6kvwUvsfNcHjdby2UiTUiDKnpRbKx1g3",
  "key18": "2LGPkooKyNFNiCKYy9ark89YYa17EjvCCQqczd5twvLPD6pFCEkdbA6ENXYpNbPUTfHeYTVpwL2RTf6mDzYH4dRJ",
  "key19": "49o7zHijE8NxCn4ZM7FeEDCfeGYwwuQ8Er2MoVJZE5FigYPmUW8GwpFHtcVmEzuNB9BSt2ndVSdEPN7fsVo4hFcs",
  "key20": "2tuGbSKX88hrzgR6sohUwcs4FRMyuGHj8fPUTVDjMDv7hKhJ92779PWVZDWpQqYt2LGHWj3gZxgTAEPknfXRnWbc",
  "key21": "4WRZWpbKXHHjTnMaPNuNLFD3qn5yHEJHcTAXQPdDrz86MBq9bpkXR8KKEojNKWGikzgj2FgKDM5Q78pf7E3MWn9V",
  "key22": "51JyMU1vEWsNktXEhp5CUApDX5YudxDpDESpeoe5jMhjy5V9HfFXJzqfrbJvJzheJ4axWooMDWfik23LGkesPpX3",
  "key23": "4pPS47QYQdcwCiohns6U7yVCP4VUDFg5Wm5EZEk8RyZ9eBdX1Nmwv3vmV32WeH8bxzmkkTGChpbzwomaG76i7xB7",
  "key24": "5DC2LWsjr6Qs7JGLsLfH3SNtxfhH8nPVpW2MCXQevmeFHstvgwe3phpTNCj7Pe3i9YezZTi5iTAKs3688RRL22y1",
  "key25": "VzbuC6pUAi1tKnpSiz1bDRXRMqq28JJJnSkrQec8M5raAsMVEof3QuLLBpxx8Z5BLfj8HuedrZyzhzeKD4SaAy5",
  "key26": "27dM8w4kHWX42SamPoCQP9x5Y1GhG6x9isStWXo1LahpAURq68WGfGL9Xq39fnnTizoBAqVkKoag7DkHcyFRYuGo",
  "key27": "3MBrRYJBBPcWXCxo8CQ3ww5RFvCkhzqyyxBr4S6PCY91KKXH1ZKTV2MqaxPek5P8ms9UVmcepqAtw5SzfdBqCCK8",
  "key28": "5c5mJ63TA5dnojSvB378NcLxXdA6bP4r9KzVfzEBAwn19MpqeYYDwSUggH4vyswvdqbqvdGbawqvchA8v2AURUCA",
  "key29": "PaHd5rsffKD5mwYymxjggDfoYAUVV2SJ3zbYiCRBBx6qriavwjkQNCWZvCuM5dutZGwnLbYGMEcn5DJFbe5oigy",
  "key30": "4qB9AsdMqp52YjX2B5oaf997TF2MJBFb147CFGS5f7YQFXmNtGkj7dyDvoxoekAEQJfi533jspo88pQxPWtH3BZG",
  "key31": "2812aZu2Cw3VJaupB5Gvmwvzh92tEzQccCyxVh39ssYouu5QD3FJNJHRKGBy8wDnypk3GKeUi2WLwDpbjSx83vNy",
  "key32": "2BNM7KPT9GVbjrMaUeSWFXFLU6oLbSn3onbqhW7q8BbxZT9LntsHw755KB6cTSM3HVnpvPxZAttPsLa37qoMHSMB",
  "key33": "4sjDuaJZuoXMvKcJ63RUjgDcJ5H7jzSiCjk8AGWeYqJDQNU71KyJCNGS1bNik7n2s4C6vu1tmJQePPyy6dvQMspk",
  "key34": "3GXXe4Yt2EtJSSf3AHUbtPe3Ea7PbADXenMdf844HZeYT2VT6Y4Djhwn4gD4CSANxSyreBRVSgMDe9cTdmtyntVe",
  "key35": "3k39AmcjAxGt5METDyr2gYCsjCswykxnzxy2KGVQjUpbZn9MheXTSbBk1qdZDok7sNtYkinwBLymCs4hKtsEpP7c",
  "key36": "3uKeBFUZpYGgRfpu4U8cKyh8oHdwJn1pgtxNVHwDZ5mfGLTLb2yXpw81Sas6PFAyL5WpELa7gXwjXsvnK4iSgEEz",
  "key37": "2GexKTCGieiRPTikKrfoSSUJF6taS5siajxXaE2k3CuMNvGtaWi3v84r7zFRwfsF6gxUtDeaEStP4tjd5e9uZJ2C",
  "key38": "5hTTK8Ub6AfK7bwQhzroZf7eM9c8SprejQhYsnVSupAak1Ri477pF9M2VLeeP72xMvCyGoD8gR2JNuFwFvLwE43b",
  "key39": "3D7vSsXfFxz3A4GkEE23vVhes6kbMvX1XghxS5cpUY129BYrL5qtiffv9oSnK6fxFCpojWTyjVaXMpdGj6fEv5cs",
  "key40": "gPsGjjwZ4dwMCbGJBVZ29qwqYnC24DyH4ZVi5evpCeBnkm88HyX385wfz5mi9ixXvN21fRu5EY4G3p9PfyeNTZr",
  "key41": "2mCGR2jN4b6XQSoG3s1yvNWAKVXsRsejpnPHQyVCbFZNJiPApNXbSDjVRhMgPZNUs9Vrdra2mqSQTXVtx7xLcb1c",
  "key42": "N62vBKXEsnZVwMTNcGVTySKumdLincupjMRhLTLPVoRJ6RjDdFEvXzHAd6mP1LMuAUe87jiPrBKXpdhTVMmjhvk",
  "key43": "2cWqHDYwKUx9E1BV2bPvWtn2rd71u6srjo6SqFtcdKVEpYYTai6ESdFpYVPvxFeud8Xs1GWow3xQSo4sSMKzn8gL",
  "key44": "RNUhx8eeywCGiyxDrsoWpQTnYVwLter3snZNXJGyvBTbwHsdMk5ECJKhfPhjE3qMhrZVRfGdxWVd569cM4MRXyJ",
  "key45": "JbJofiixCRFvHJqLm75PWbVCZDjFkgi51wkc4qQyKcsDBYjuYo52vyayjTLiY454Chjf7bdpQsmUykYPrREGugv"
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
