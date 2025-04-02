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
    "3EdcQGp9Z1FXvQsHPS1V1Sm9n7igvVwyUvX53WhxQ83FY5rDL5xBhygc9YFY7o71sfksTtu1fBLhZQV3UXe7JjGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kKGHMx5qRGw2QURciHVXG5mqsmipUAutJmksJAurArkKLdRhXSkWkR44Ycxb5iBeFzh78jMeZ3GuU3uBq84UZ",
  "key1": "3LBwFMps4wEqiZmsGMVNLwXk2CqX2nsRTSr4vJ617P8r3jgPZ9ybMDsyE7LwKGLiXMZjs9rWr92FBaBLJGQDzq6M",
  "key2": "5ciACWi37jRgjVjjyfkQCQDD2ThRfY7j6ebdePtiADB88mGqBEiGJbQSjjMaSxH5TTdS3sowCrd98dh1Q7wNVByc",
  "key3": "AFvFwHtjJedebMCijPuuXSKgSnCTz5GgzfZCgfbagw5SCQhBEQMmCvZtk5w3vBe42q7wqRraKSCEUNLdXQ8DsZh",
  "key4": "3BDJVYTWUvLqWLpyqUV9Fks3SPTDt4UcW3Ej4AGBjDF5FuN7EW9Vvu1jM3jfuA7mHsfnBDAjBPpEoqp6X9DNTWd",
  "key5": "GCvtwheU1dyRyqwRSLuyyBV5CojDBjZZPtpRcsdXrsMfgLTnhXwmePDk8RDPuiaVCEWksYNorHHbMjjMXF2USxU",
  "key6": "4RjZDP7NMPxfrHG25EmikN4xMtv3VBg6KgqE1F52bhcR3nt2Z8KbCe6vs8Z857kbJsHYQMSfH8QBnrdW8baHbCbb",
  "key7": "344jxZbmREScRb4WfxftxxG8eeXh9qm2gZ3Z7x2F3qH6EU2au6H3eRPh5zGkzXNocoVMgFAezSUkb9jX1ZjagSUG",
  "key8": "63Rf1ia9Zk6NmByLXCsbHns8pP31qMdK1v8gXeCFNRUhijMGwyqNN4nq4r2rhaqM6fqXDNkW2T2ymgxYAygbu2ax",
  "key9": "2V7eGSUE2i46HajbzrkBJCDWTy91LUUZ7HuoNg6WpnwPGQeCtD1qMDJXaawwWLiBjGZnpFwSXQ39wz28zpRTyaC4",
  "key10": "QaDjdrHWdbcVF3ZPdeEcX5ki7jZrHyomxiA24JUw7Xn713Jcmcoj43mUDuasCoqk9wFB7rNgVbfJMze4hMXj5m7",
  "key11": "4KWXiRqRkZpwTagGDMabfiDt7eCcc2YohFNgXbVTRWqQAcQSXaFgEX7w4j99Yww3fgyn5zGZXPbSMJBeWvyit3PC",
  "key12": "648NQchCfJSyNszVDrYmqaRqLuYa65jU3ygHQTkGfKhhgNdvyDnUeGFG7kgAsmxDdTGamqyfEtpqFU54huDxPyGu",
  "key13": "2BuaCnvg4JTE9KSLqgMR8DuWGBhiDs7uUuWf3s5oZw3kDNdy99yWmdheuMG5GgajoDRFA77r3fc81VQYjnkpv31o",
  "key14": "2nfHUU9R3cjV7V7qBpLh2y9RteR1nzjd4UPAJ7otFNu6RNXunzrVNuD9j3jivd9SAvFdQdh8LqfkpvJXaTHHkg3d",
  "key15": "41LjBYJZSfV8MfJXefMYNW83Jo3V13htPx15A8oR8psvfepyxZswK5sAH2b2ozKKd8oufK74cK3QP2cARKdCm3LY",
  "key16": "4KNWPonrQWjgRCbUD5gj7F7JndX1jPQaPY1YHY6ZRuN9Jy6GUzbsCB2Dh47PTe6ojiPZgAqA9BN7GxkuYydCqCyz",
  "key17": "4qthHjp1L4Ubzpb7ZcrwFcdmV2kpBiCmqTRFk7K6wFgje7UzPzU9nA7h9DiRyXPMK2iUYDdokEQAu6cYLVXXiRPz",
  "key18": "679stZTDmb9hSTqoLeDzGQHxMafvEkKAKy6ZunQpRbEJrzf4gkFTWXq1BU8SprjMVPwqCdhfmhWkiAwVEB954gNW",
  "key19": "4grJ3mU67NpAGK5MeqR7xb7yzYpFpGM5Nw2ExxHag7cW85C8qCNHscRpjFeUMDYA3yrRdVjFcbNBJgs4SYWgKLK1",
  "key20": "5vZnvQE68qRp1YDCsNd2BFJ3WRf61HjHoDpHv2WE4fUSXZzwZuBNcMqyBt1cH3pwCWaQWezqrxa5rHqPuLdHkdDZ",
  "key21": "4bbMDuQMs638PMqEYCuvjReHRpDkaWo9pzVDnxbBUWXtgjTPdEEq2YcKoRBZepbMbPWjZtBurK8HZaZBb2Cvnr3J",
  "key22": "65nnWosFtyw48ZXGa1vkDFssm2cggGyR8XAhcCwbfBvnCLqohYP5xi7gQRbPF8K7RMs21LCKYkpiwV3zQ2Vjke7L",
  "key23": "35LqPFALbPCxF379fxTx4wyAAuYL4raHzonvpSBmswZyrHqYFG8tQEiZz2VSnkaMi11xbZJSyyttRGGk3RbbrzBz",
  "key24": "3M6ZTgh9puKEewdsWzxvX8ifPTkazjF6Lqssd6fhNDwqKgEe1gxpSiSyaE59x5jshnZbHpRD6m68ReFs1yNeteoV",
  "key25": "54D9qWQSG1BdGkb3MBUyXSBAq7wCS7bAUfAZiChQLWMDaqoFE1ykABErW8mq7KF9URCNhbwdtdNozXoYL3S3aLxV",
  "key26": "4vsPWVQeGUmYA7hKyQPsbVFt3dGfm2qd2moFqv9FWFfTmm8ByQz9FDGG9FbjQk49YwdRzrvJf1pfGcjpRX645KWV",
  "key27": "5PZWxQCf2CK19EnKckFtx1JDNCQbLJQ5kJcu8bsB3VWjuRTG9gQA5pScYdJcSTndwrjwZ17zNf9jWXRE8LNxJXyA",
  "key28": "34GifrBcGAf1tAP62qPjct5JFvqvhrkmcwe65PGRBtZQB7NfyBqnmYrh7P9ngRLBiozBqawYJ2FHVoABVAHKXY7t",
  "key29": "3sk4Un4dz5hna7v5Nv55nZosbM6JmrDhp32hbZW8dpLW7k1nE8ZM35uF6LZ14gqpvdaxqEmf999HWMvAXx7tWvCf",
  "key30": "3Dp7XMiMGKfoEh6WfPV9CAU9TsRomZASz53Jm4Se3DfaowCi8BTrdgHhncRRLt6zaqesxLhbQuhoJymCHMeiwok2",
  "key31": "4vdmo9CUr2nYQCPVm2c2bjDQArc2xLXBiviTH7XFytUxCKNLL1fjWPbPegAFqZRTbpCvLPKoCU9NJx7z6hvbsf6P",
  "key32": "2yvPCYdxybdg6qasb2Qsw2CrXVDJVRbxjiDTTuVLyNo8LiftopJWADgEgqJLJfMAKwYqsujR9SzJmHGkRPinAgha",
  "key33": "4LNsuM9vnknjKr2xh4JysjmJ6HZVyXNnEmcGLPSoJWgUbmW68TCYTcpc2BHT748EM4jmfizju5CcTzzCJXaS9PF3",
  "key34": "3No9Ci6j9fe5gHvuQ1yxP2njXqNKGytPSLK3BDsDiEV7PzUgzYS8iDTrPWRuXWBCTjkSny9U7CUJzo2k4DWxtS7n",
  "key35": "3iNG3nPX53k5cMzTw1w6waXnWiMgHBWfH9cfeizqkfrvWwaCa2R9cRPSP1DkneMtwRi17dAyS91eZTjGjiKAKzkV",
  "key36": "4KTEQMWN9qTeCiMD4Xn2YFmEEjfsGpfDtZr3Af5dchu7gXXdVVCEBrU4fBD1ekLdb87QiRtWj1seVg2Q9qyFwYAY"
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
