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
    "5FCWW11QKfBF7uPC6XU6wxNYRsShqQMhhkBGvMVypdjNK3LrLFB6s31JfUK5NkKvAo7hAuo3hz3urDj4g9ZL6F5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUvw3ypKQ11cygr5HmjyRVjqv7ELKtv7S2H55qafgQugCWUEDNMN4MDL5hkKzLe5j42jo937YyeacvevrHTiuHj",
  "key1": "5oJ4nNPxh4aLGiHp5BFLCQxHF6LGFD3o9tZTUQ59JX9hx7ukkuEiDamrh2HkRuzQNcuzMCWG7nHcwpT2Mp7xxaUP",
  "key2": "3akgck2D6MYXAbS54Z1NCQB3d9bYHv79oiAJpBNNv1nTfMsQNV5K6Y4suTDfBzqDwcgb58m8sSu771Pi3Z3c4e2N",
  "key3": "3Ni5fcg2v3obD5jdtdDcdUxTs8yiMx28pEL5Gd7vUWq9D2Kq4fAd6xzdKQQm7EUTACxisAsN6PdYWg8oqYVsJBWW",
  "key4": "42M9mZ58hsYFf7sVM3UZWAk3FrPbUFEd62tXuZVk5uDQZvHDzuD4tuHpecQxEWXzc2KCA68SFFEvoEA68qRBXAuN",
  "key5": "5i9wLiu2rMLWnYvniEJ2aRKak2cU1KL2ZMy5BZFdrhJfre2BVC7tH9QxvhjSPmzsX3g63CkzSdG9kz4whDLGtQGw",
  "key6": "5FFLppKydoSDfJpoTRJj2qUr2G94gCQ8od9VHHhrJLWaxLP336GgTaJfNtbwQp1bbCZasiP1yvyrEfh198CytNf2",
  "key7": "4YUebU4CjeRBeZik9pNsVQaU49tvTQ2RNg19hZBXvE7tpE1cwmgUR5a3iLF1MBHrrYCTBfb7cUzCgu4yvEr9yxcH",
  "key8": "2GhGLzUPhK3MohhrM9cVPaBDRcQmrBdQhmJh8RsVVV3iqyHeDkUdUFzrsQhAPieDyodiNFggsEubcaLsi3TCF99U",
  "key9": "3A5LSLwwK9VdxqWaHHC4DysLGbHY6Pj28pZM7iaYqrd1FmM9idyDsBFWUgY2CMTXh4778YGvuB1Kjfn8BXHm4czi",
  "key10": "5DbsBiDPKBaDnnYpeTUKo64jCs6oZ3pdjRmDK2xddvjTF1qLqZEw7UFVPpZEXHdTS8d4LtKC7UJT2NvKKWz8rd5Y",
  "key11": "2XG3skX5preiZLvqWht6KFspDJN7ho2YMqpJ5k2vKNDWgzkZBSDRcxQF7GpuLHQjyHNf2cNRP6STA9SSU31Ftf34",
  "key12": "28XtQaE9deVRXTNCpHiFnxXL55krd2fMFixtRK2ySet9Watwf3byPzsxJntSH5m6YwYvvvgozMuHnKFirsGoVoVL",
  "key13": "5yJJNbugyi1dD2UVmixEXtm22SNeU3m7GM9ynAP7jMtRG6HgENcR7y4enWQ8yz8duYkoTqYbUeFpq2kdsZiLP7Fc",
  "key14": "HGi3KjpoqQZC1xzKZpUGqbEkrxJmBiVJ5LqDg7tNwUcFq4Dh3p5zsaApCSvj1wiiLSJ9ra3VUNazuhPoLQPYQgp",
  "key15": "4M77HhUvunaKaAAGmkqQz1AMbsK19DDGzepwNUtLihLfJRgZa2FqztAEGaXgAoCpZzVCvvCeov5qZWDMBb62ptSA",
  "key16": "2FcUhHBmr114hNN7EctTar4o7XJ5966T9KKpf9gSHsNMjby6Ns3DyPdyXguUAEhfUrb1Yr5p2aBADC4tsdn9wUY4",
  "key17": "Zbo3uSuGjCThdBNjxLyncRmWq7WQsJPTjEe2K5YqTazoKaKdC1osatzDX3Rs3e5q1H5rCNkUuZAX2LiQHtqLeFr",
  "key18": "39qaSDvrBHt4geHPekFm6oVCryY1EvWDASFDGGSWMezKFVVm1Q1PnEECAQtzt7a797jn8CaK623C5WJVXQPmPYD7",
  "key19": "4Ss9ezF18AuJniDnVSXiuKekczCgDdB6w2THreaDCiESGm3t1H7fXWLHFztdhk2tBB3ebpfPnRq5A8mQNfxjFiaz",
  "key20": "4XKxkAAsv6Lf1aFXLTnAL1mxQDLF1FsjdLJZFYkQd7aaX6oDLx9dtNumcKLdGRFE31Bbtq9AyPLsB4Gbi1R732oe",
  "key21": "2LoDmszBeAyzVdB5P6QUdb8kWoSD1C3gi6D9NHfZtcVDSYXhXzmADRi8Rkjq5KPfuXPjJZykxwYqgWByQqadyTmD",
  "key22": "3ioQSxWv2L6zWtDSANruZfW7Ts9GmnrbM7eCUWcHj5Y4c7u4E9EinAe2Dzq3yK3VezUhhsoeFX1uTBaJjf5nkH4U",
  "key23": "51QGnpbxgZko7kwtjoFpiGrg4Cgaf4gNxTGhbSe6bsWFQvrKZ7G9MrcVtQ3qyYsfvTG1DGiA1bQcp7wjzqLwvS8T",
  "key24": "5wR3Vr56P6ANeokykAk6j4zWDWzxKD8s78J5vr6ybVKssAvn4yaohPtJLxpVugrKRdnsKNuHXXkPmV7rX7Ci7TZ",
  "key25": "34YBKpopQaT1n5P632p8zXsKYXmULxGsNUTpSpZzypVrecXjSfYHHJW4k15VPNkHpcnG7u2N1GLBTNpqWzuQiS4N",
  "key26": "3ceHhgpLkvryD5iGat5NbX8ZGi7SaVcEGWguS5T8F72aC9a9DYXyF9varYSynLHTeTEaBy2djRJ5fjuy8mqv8T4L",
  "key27": "2jGU7s4SWXf7utRVwd3bz2uvZMR9TapjmFB9PPTpArW9haDkHFCjRoGcUZM8FbQNMJZhvcQKoAytXwgxxJqr8A7N",
  "key28": "puPpasDb5Q7HohuR7CsMugocBoEAzuCmL8GaMofFCtyjh7DwZn4a6FJd1mAMrq7pGyHE56ZJqP3TKMtT9hMf6GC",
  "key29": "3n1e8tTGeGxBoEbZXXo1wJKRDpYf9sztvfQuymf7uP9pFhXAGsZJEuDAHCrzYx8dxpPj6x6Nkvgab9uyeWz5eEAQ",
  "key30": "2mCGanapJrbjETdtSoAJQYA8caxdfm3dKKEG87pZWgZVyoMEyMKk72cHqcz11EoobYqVV2f8pvDs4oy59sP7vSj",
  "key31": "44wb7xkwHfYLA3dg3avZkUxcZVtwCJy34hBaC7s9uztvzsm5h3xKj2ULEGaz7WLNHrAWCH22q513Yvvxq5q9gJXc",
  "key32": "3FyCCp2G8b97C6MnPcDiSn32mfymmPMR86K8DakUbhVp4uy249o5HYdLuKvcXfE1A2xRnrKuWvgha4z8JRhsP8rF",
  "key33": "3bd87NzAKCAgThSDbWU2f9EkKxL6GhWBuhjKdapVhmvqSLCFAtacZ74xvSVCeZkDecKPm5xMRsT3jQ1Dcd5wNdQm",
  "key34": "4hrBwy9kq9qdofrKp1VUichdkZsY26p4D4jwArUw1J92VHUaJSw7u1zRHjRKY36LZtLp9i5VjA45MzKD2g7D9khh",
  "key35": "pmPX3QTcCDbdNbQVfXNEhfChai9SyBRbdqpGePimZ5yNHNTGGddksxWZVZf4w322DC4UzinRFT2UXRnJPRoXjqu",
  "key36": "WJz3CxEx7fLzdjTvQgHJgWMhGWUgrVXiEzzzBh71Zw1osd9L2mysGxSc9EBYS7ZwqMYK65UiT1gne3V2dPFNahn",
  "key37": "uVMK1WVo34bUKqeoNDYhnay6Agznpmk8KxXTQxkH3EBj24bdVt5L8uPdiJUGLV3ewzu9qzRKbnVMMXRPACZ6RCc",
  "key38": "4FN3comgvWVbVn99G4DcXk5FjoaAbudNtPUxKMjrujjLeaEUz8mPfWGyHkraD46pWuyvgXonUgMrjkYMWmagKMnr",
  "key39": "63XpdpZpdtWZYvAH54tjCxwf8F4L3SwYvBosCjbQiUwgtUuRzyV15Evqyoq38jL4u4turSTmevehu3eGxgAYNP2B",
  "key40": "39J4nrDESY69G1XwLNcW6H9pFuP3NEBMMEFLCTP5c6sty9CZhH1k33DBLcm6F6xsaLDoEQY1pPfQV4TcSLkCSuQi",
  "key41": "4bHyQzhRAxNvQs1iuv9hdBfQ88CDCwf44ik4QMn8eisGMYkZmzobgCh8gX2hojx78qo2Y9KVqPqM4cp28tQ4v66z",
  "key42": "TR2sc171T9D6TB1s4aSu4dwLfyM52fyiq5eD5ZXt9BNAPXQqe4jjg6AmefYM1ZWPjdVZwVdfnmmrDozmdT4gXkU",
  "key43": "5NjEMkrtBWDb5tCJpADaDKm2zEA4n5irXseGRiTRvEvA8jy1HuEQYLQAUFJ3ybNKwW2k3eTBdx57hU5iYU81TwEy",
  "key44": "2N14wunsYz8ekhK2JBbnM15NzR8m9tiD1rrHUXeMC9h7uKEgXE8JnhRnpkrHw58RsGvD5uaFNNd4Ks7UQe3PYFdM",
  "key45": "56cVtpVG5dQCTqPFxUEs7b2o1ESebhvTUprz15jNFga9oZPa7DQD6hGyCiXzGpRGxuMDP3RUw9Dr6NC9TRAuc3YF",
  "key46": "2NzPkDQh3kKstKvFH8VQt1PQmzae3GYB9pSELW117Q6mFHBjvTiL51Sf26VXzyCfCbFEPdDjNxTbTp34ywmtRnjg",
  "key47": "52vQjsPgKixuR3mjMNwgy5QyyEotmuzB2JWkUgDb1ZCpvv5NyKWCxVExa21zHK1ByLidy7CRjYSY2iodDwV7LLB2",
  "key48": "3foyULcjY4Zn3hu8yLypA4TtpyhfGXycnaAggWB8d8CKwP1YCbyNdRF5WdRmaq35n6YMEk8CYuBWck5kHmdqSPeh",
  "key49": "cj8BC3hRQW3mdhw846MY3DEyZUaSEcYC3Qi4G5Ud9YsPDq4NHoEGH6FXbLANLHpWLNdrpHHqREbd6YVk7Anntg5"
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
