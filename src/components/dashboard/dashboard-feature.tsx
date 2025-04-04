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
    "kM26nmTNuMbvPPoXB24o5Cyhxh3JerUBgL9S7Xbi5ZQpp3yLKbsTajedk9XFcPeHM6YuyQpPWVD56woaTZWLukM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvoKhoiYKFFpX5AQ9RAJJMemCGWg6JcFBqgf41uBzUrVcNhmCZhApbDgo1HfoP1zs6FxpEe6PS2uKGVswD1bY2K",
  "key1": "Gp8bJTi892iHnSDSXfJLnnSQWV6ftFAA94hzMPY2MEiNvW527y78eKFfp7smN1u5W4i4dJ7ymVU93eN2uwuo7i9",
  "key2": "qEiELKBC78xXYrD7fDQ1HhS3FLeGmzCnXXPv64ppST4PZB7uNHRGBVaavjqMAEYmzxDUycDBmDKBZq5UViVJ5tc",
  "key3": "LSGLUEc8bRDG2ksiynqD6bnDA2JuT6PA3zR5DjfrurbAgrT4Wtk6yxdxYjTdQLJFyTXTTHnDFv5iXNh5SeXJxMr",
  "key4": "5r5pYpRsnq8gAk11qkJFkVi6nMuZMQmGJXbqE1szJFSCAzFoH7xjHMZ1vqMvy8rEkNNEUP26HpBurDbR8LSKVypU",
  "key5": "4V5yTkjco8ZJnPJ67WrthEptuk9dKhL5tawmS3CqMWL8GsFHKmajvHrMBDr8VwQYv4nBdq1Egv48uJfZvryL1Gk7",
  "key6": "3KrmZp6izT67a5T7WxTHzQsCKNKbf3GZ3ygDGfGwSdvAnd81FWadSdctSPZdsdzg3camZu3GLhDoicc3SUVbgexb",
  "key7": "yky1N5ENz5R4YbkZC9iLaSvPfufZVSRemsBoytvuPHqxu3aHnNZpTzrNCGLMky8ZVHuMsQSGmqBh4mYrXCiL7j1",
  "key8": "ZVPKmyDf8Yz5njL5LPBujrtR45SLpdqfcEufoUCt6HUis7emc3Uvaqpufd2WGfiVqjKpYUTsHUme6R3vSfvD4iA",
  "key9": "52gsDKFw4v9p9BYLFECftDqxdFQCfwdH7Ff8aaV1hkj42iRLFa29kkNoemfiL4J5VuWT4wwPpLAfqvFt7PKH4yiH",
  "key10": "wFWesSxQrJMhcqRvWPZ3uQRDMRAxTLPBtzZGXKwMUrWwYxEvdG1wdCptznYE5QXxmVJWVH2BfarZiNjZ4xHcBWF",
  "key11": "39ZTj8UsyVi7JcTdxr4jZ5LpBkZ1y7MEWM5LT2qnvZRN6rtJ7aD855KnRiFQZ1id9jf5G5BvebRrY8677e9HpV8a",
  "key12": "2rmbEcHefvYbYbEbXc9eSvXVhrvte895wXhk1RJvTnmn5YEsZeRv1PTCPaZDNbfobqQasrvBvfW3F1yYAvQX4Vyo",
  "key13": "FqxTvX6PqvAiR4Psu9nmvB2V8xSevsHqpVUQpP8DQ77iSuHuQg2qfyyyozKWwxAZy8h2akd6GX7nejQCEtdhR7d",
  "key14": "VWmCEAgg4boJH9vWKAASyhknjHtAxoySuq4NCWSLLt81KdxiZuVzYn7eMNyMn88WJTD8AJGF5sE6pMm16sQmR3a",
  "key15": "47HBnnfMmbZEeh2CTXZKLqYsCfd2f5vmQPiyhfKdNiFgS9qxHf5SiAoTo5Bit7wKcrRZvm5R2kGVyN3iTiTz6yx8",
  "key16": "5Ehp2FjT4i2VZynCfHHA6Hk4nawZDqjN6YTz3SMsMXGFVR5GCinq7MXHnP9QZdq14aCkZp9ahiMDaQdwNKG5BpRG",
  "key17": "3v14eThvWfcDpk6UTuRT917c4xx1TW21aYAZVdSQKV4MBrrXwvP5wjr34pgB3FcwntEW4uQMhWYHCMCos2Q6iuo5",
  "key18": "4nQ4qRY2xyNeYDDZXaDW81VZy4uSj4DAA26wF6FUyrp3Sv35j9oU489GU68N3EwqFpCSdy3ibRzDaFgAqaNbei9F",
  "key19": "4K3WSDcEzVmyHr78r1sLhWjTdDd3QFsq4B1P8JMFRsZRTLaHZHjW8HyyPNWaiUqr6RWrKn53MV7L3QkJigsj2eLs",
  "key20": "3Z27FsCvgmD3sjWSE48ykAd3y59dsHfsconmoyxeRQnZ2t5utCuzWGgMiXHCEyAVWiF34bWRYcMkoEGHvr6ePdDd",
  "key21": "4DhDcu7AZ1rh8hYFmaCN67uwzhQ8RJrVeT1LwTUVMePuAyVYdbKqVaAqF7AWRC6tideGXazGKmej5JgunwtLwpgd",
  "key22": "5ZiSF2cJPthPgAnpEG67cPa91ka93SWXw3TXMaAVSJtYczJhBBNjw1tvKfh7xrZmDPjrWZTrkZgC1WXuYbTR2f1n",
  "key23": "4P8RcMawaVhvVybStpqDGwD8Mk46zLHCbm2FATMxuCqdgmTMnRp7cNHemzUv4p8Mhf7QdKLRvVdFmSQYwqqNCQfy",
  "key24": "3uMqde426aYbJAzTMLV266HKrHkamFUiMfNdKGbvBbq1PiybxVMTZEhatMsz1bGEqWHyZkZo78HYWD4MsJdHEuCk",
  "key25": "rvfFKyHLafw5GyNjju6EUpsixxwSe2qrU3Xrkjm17mX3o9DLucnR4MZxpbyUeiBMsbEpiTqdi2rPnpzJWBKDREV",
  "key26": "4cJ1rgMBAFR2LyivjKxpUyHQbNHnvPEan68XsYZn8Y5ht98U27Cmt8GpdXMZDo1WFxjowJUbLEfgZjHxKC2V7JSb",
  "key27": "QcSsnJ9g5tjfAxMF5zJHPymuUfhwYsytUhAysk5Z2QFL2SFc5rov4fMNeduoG3rvyQRowHYEnh6Qyt9zPBWnRez",
  "key28": "25gNMaTfsAqEufTBmpG4T6WXppYuukxtUdX8r4JhNrAJw52DT1X1DunfoPqLcX3mPTxtVUYRofeqmVCdPXpFanmd",
  "key29": "uKPCDpDVaWqYcYzwvTPKvKZiXD5nEnVn64sSLL528ZvFNsBbBALQEe5VBgHzLXwaXenxLxV8Py1ZA1qW7qEHjLP",
  "key30": "2VN5Bm15Yp5ARq72ZDqDQ9MWt2gkQ95pCzMTkrszXhFvGvncXRYioytFFuypuaZ3vPQbVtUVhrSNhCwDDZsHHw5z",
  "key31": "hkfKzBN3GHvewfEELiW83G9UQnuKkRZZ4xniEzVPPqLkQ73uF5x9GqEURyXNmy5iw8gZojocY22mA8Z64Aobu64",
  "key32": "4jayYeAxkqqkq9sYTfkBn9hzp9UK5ra5sLGF9PpdiiYUiaJHPLCSiJwwejXtCwonPNj4YjGMQEXrLnKAybZwVURz",
  "key33": "2ig1Gkuj5mVdrwtWP1Ctao1FkZHDxXLJU7mLa4VMNYgK2QRdgGUTZ93pQBjZJjeQb1fkLUDCR1PfPT1JY8hwyPVy",
  "key34": "3a3uxaq9PAsMgPASm8wFjxBobmmqdPVVw7jqNpohRBC2ovQDGprgXnEKcUtnGF7disgfe63vnfefkau7XiGr6NJm",
  "key35": "3WmSH3ghU2mLUnzg74ctcLtyJWZoUnwW4WQrEEaEhhWC33CKH9T5jg3QytX3F1adj34JCJGdcUfn2ab9Trjy6WFT",
  "key36": "2yw5bAE9HigAa5LypTTGAR8QgXTLjRBenpJtypsYRHbVV77YfFKvT4S1jBW4aX1afJXMkUzZrr8AK3dcZ1BTJ5gv",
  "key37": "Ci87PEN178xy512Nc2S9bDjxrHw22WfDojEAAcYAjcjMtLWqHR5YpXD6eUELYpgdaDcdyeodGYHX987g8qfF6xw",
  "key38": "K67fWeiBa8kRhCr3b1bgHvNZRwE2vAGA86iFF8yT6dp7oC9BWoDgfmYoesaPwx4umGeKkGS9jAzRjw9TTHAbMG5"
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
