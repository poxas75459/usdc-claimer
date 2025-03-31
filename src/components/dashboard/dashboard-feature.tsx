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
    "ez3Ad9eCjxHMVveTzuqjoPdDNUEN3xYHbA5No4xFbetNwHLsBJrp4GEWXGHTzAmaKe4je582vK1EmgE1W7vrwhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pew333cHheVEcEtDnFSi9ujpwPRSNxLZnCpGWpvXHsr3misCUnvNNQYDtya2RbDzAFLnRqhfGUiounnvA5Sm8cQ",
  "key1": "5fxAxY8n4yXtpqUu7emKnheHWJY7JwUyE6GDGjn4kMsV9ATaEn2ctGJbqp87cXWP6fLbqo62wa5MfJBb6tkQQzCz",
  "key2": "5jBAP2HNNxWJMbxdWzNLUF1E1u5yjF1Uk3Gh4jPsyDVHcxSMUHPXvbpwatX6Mgo1TDtYZ3g9TW2KLTQvYckagXB8",
  "key3": "2cuoakoh4yYeqymxSqLRuyAYoBARsE9ecmyDftYb5MT1criCPX8zQzQ4AtVr44hPeq6v6t3Mbzd7AUMUwRT8UQc1",
  "key4": "xUZUXxEYExU9FwobWmVehmZJ66uWfLKLfiegcmnuLSzQSAnL4Fdn32yc8odYU5JQuU8yay5W1ntpi9RLgvHxkrA",
  "key5": "tcpzw4Yh9JZPKcb48Fswu9Q65Cm5YZNamwAq9Fu9wnZTgApBzXLhLri51Aw2YTQjnM2TVKxZcdNHBcYNsXWxrGx",
  "key6": "4Hn11qaEAZCfv889CWQ9ww9VLrRRYAaXEavQGjtHMZn5qjoD2GEkqEZtMHDUmBmXnPpaggZrKGh15juJoiBDVuz7",
  "key7": "43vZNyJbXQzkaPhn2rNYMVMpGNqHKdhFHoF6AYqZWXqExYnxniomk4Zoum71v2jBQV16gxM8Yxqh3GfhKBxCvMSA",
  "key8": "2Xccv2xZzU7NXnE3z53tAXm73CwCBZZcJkuTwBCRY2TpuDmqb6LLGGH8EcdAdBMMudy4jXs3sidGvwNqmQkFTWPp",
  "key9": "4V3V8XeeJxyLxef7YEW2b5gpg847v17sYymxpMNijNEDiKYWvempY9igBgXf4piMGPFhwwewCZCNh5YRbW1D1x7c",
  "key10": "3AX4k8r7x5JmSyd1cPYDAueKZQdKwgCmo93nCvj7EKD4WtG8ZeKJzSLuyP4ttsQ38rEpW2NpsbrA8dHB8ALqW7wE",
  "key11": "2MkBetLrecXE9pMMND9kxq7DsJk193toTbEaVM8S6CiWcPepGHLTAY9pZ9s7QhXKBP939XEqHD4DxSqekkLnEznQ",
  "key12": "2Z4C9r4w8J312s1F2sqkVj92xnkDQ3V7k7XCa3thL43PfQKN5BKRSdoec5ZyGvbqPHeagseRftNy3mYEUFa7vu5X",
  "key13": "2aGmL7ksmVqf5VH5Jq1ttkEfhYatQRm99EEzvARPKzLYKhWX9mb6TLnbwWVTwo37Gs4FAFyN9aTWHAQwrgj8DGQ4",
  "key14": "53uc6SgH6mnPjUjhKfvyZuQfZNMRQFjryjUBsY3s6FT9sykBHcv36B3VkVUX59vfW8hRcCzJwK57jqdDMDdjfSre",
  "key15": "3vX6XZLKp6R3EPHF1Z63WHTD97MDpARgcPy47QVxVELZALutVN6nm2DoR42ztQxPFbLkpN1vksCf9Vjq89QJdMVP",
  "key16": "mH2FrjN5sefLt1M2ngy6SXQ5ALUyWPXRncVazZrsEahewcHY5VX6aKCZ3x8rzvsVqt3YowrchXZeSuLi2TN7THT",
  "key17": "2uzNP8u2TXAeor2Xr4emuLfmCL5y2n3G7vjgb6tUjTJEhw8GnPuZ3p9gLFPFbZpt8rT8pstfZhrHrUD4gxXHXjzD",
  "key18": "KHtqJEgG4pVHQ8VPe4sqFrW34mnfAieeso5dXihbBwrzy1gDTgqmGaxoPZH23A4J72K8oNn52HxqVToHCXaBC4Z",
  "key19": "3Ns18HbFqjLntWsxEt6xUowgfyc5yQVhZfeNqcyz4G1YjnfHQdrXGxH2sduBcYN1p7tfEfcida95abkee6BDVFyr",
  "key20": "2ed7P5uJyGgximv2MzyEtdiXtnAXq2A9mTT42URG5B8r8ozGafoQcpu9TAGZchdgsz1KY4i2BQ8gv94rBAbwC2mk",
  "key21": "3st92mJLZi3KsrJh3Leu8sqB2Z8g7uaqnP7JS4rJ3CsamgejkzEZbCG2STnH65vKHUzYNP79ud4iEwaj5kEXkwGw",
  "key22": "5cZ61VqJFxUfFhyHfLxJ1v2kQJJ46iBTHBXFdvimLxjYyVB6TquRKvnwH47447we7qoEBZrCjSmwrR66AT9qfFLH",
  "key23": "2rNV9oDtQwdGBnFYFcwpeAa2egkzU3KRSmmJcQjXm6w4taw5pHsKGKr3Ts2dGDrEe146awC1btNfq9NC4TUch6Pf",
  "key24": "2dLVmzzLHK2F6hjcJNtjMhySA5cdoWLH1rkAV5h8nfVFqFTJAERiDdad3y9zAbGqnEPW9o5ev9PBi9bhTj5i3J6F",
  "key25": "DLJdnvzcwuvwRj2CUN287njocFPvvbuexhFBHTGKjAiv9SLBVTXEjxQstAB7un6sWhvYmHdsVLaAXgRrGoj9WWX",
  "key26": "5o1vquspywBMT1QgPhU9J7qfZqQe5ni5NHiNRoHdxcjCECJJUYChfosnpWsaXfVtq6PsFn2cju4NiCxUEbbiGzqC",
  "key27": "4EQbMvviZi9Jd2fxtUigZWbuDrN5SMtx4azX6LGUJ5YTCAWJn8MkKZXLXQTeHEx45JDtwJJ53uV3BygfzNGmHqhH",
  "key28": "2Tczk32bEJryLw5B9p6k39uERMuobZ25XxTgM41hrnXBh23Tph8iCWbYFgBkzzJp8aMKzy3q3BZ7tztTtYs3ypYF",
  "key29": "3BhoM2CZZ5sBsV4sdcgVKiufhgt5XPHMyQ9Hn248z3yLDgeH6BPrtihyiVMBpAauaB2oukoBa9XvMUr5rp3dXwov",
  "key30": "2RmqLWPKVudyp2qjVWWzZ6ZrYaymgpegpCHCGtu8kzpSaKxF4ys3Jg8b9GHp4NsoZJztYjHA5qFwEYD3GXbpazeF",
  "key31": "4YSY8Ntt1fUWLicSsjmUW3GoTcyC8Si3WDtYLYXJN9XJpr6pUZx9UeYG7nZ5VcytihcBC3X16f9Cy5BeyRT3MsMv",
  "key32": "5bnfeacLBiBkBcL4HquKaogSPoptJsTMcHaBsKh3HmJ37DQAQruLcqwfQtBHZ1vsVFbfrn3PVnyuiHBhXWNPMzwm",
  "key33": "2w6HZJiPo52BL1D3uDGKoDvQxZjYCCiPfDnsJ2qgBnTDVYYjxzCCtfYP1yS9uSHzdGLVgsDkEu2wLt2qcXB66W7J",
  "key34": "2DcJBB6SCqHydgbBPRUqa6GAFtGhBu9yVat853SVj6PZsPV7iH4XqFus8ZZSbanFRaZKhKwNfj625VzNAJ39D99A",
  "key35": "ovQVy12h5b9qNDWWL52gHiAoodvVXbdHSxxTkQukC89jmM3PWZJkhrxWGdGUj2ZB73vEnqSSFd5DGekkoGi18pc",
  "key36": "4aUMkc1LSUxYHG8U7bM9SGHV7EsUxiebmMAF6KzovnjR8gXnFChMtFE1JwVPhpeDj8CHzKUtbHPBaLnPfqdTmVyA",
  "key37": "4vPR3hhyBaH6ic1KUtFVgx4uiLMskth49vdYJiFJvmd9CiL1znq4Xa4tnM5LFUuvpUfZn6NLBsEwxtMP4Kij2Jks",
  "key38": "2RTn43cdBe9miX4vErLM1RLQarBbxfvQ1jPjr1i1uJHEMSkTkomrcUThEAKhrAfvLK7EUWL5dKuzN1AmFZpKoeo4",
  "key39": "GcpWVCXxv4Bq7VFdMGPijFNtHCobjHiJypki1qAoXH7CzDm7hULKU8HRrqLrURE9SockmDA1LTEVE7De6pphMjK",
  "key40": "3RBvUguJPga9G2x41PTw89A59cbUpNdFUb643yyVxcH1Mtm37KVeRcPuGaEFgZiCNehz2kx5JexLY3UiDc3uB4Fx",
  "key41": "2XZXYjHkPN6DZft5esG6rNgpZdSjCFWT15qruAaLQoSWmFBraTvWUVaF4Br3JNxYN91a8hY8VzLLUXsyok5A6EVb",
  "key42": "oCDtxy7YDkKoPVde2aw8oZXCUfGynY9NX2XRQ4EV99nmNhjWuVFXF7AVkjZ6DXJBXUNkgzvPPFu62QWAawZENp3",
  "key43": "Nv72ebVs8MSYnmJewpGNDWoJczqibfKHyoA9n7naNNDSUjBs3DbwvFAwc97kWnYhDF36fCnushREp2soajbkR1D",
  "key44": "2rpmVjLQaMEGN3KWb3CxcsbngmHsJCYYYaEHXpgD4v9j7gUuJDDuqUCrU8MF6HBw2UW7XxLAeKxQLsM6ysuqBNe5"
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
