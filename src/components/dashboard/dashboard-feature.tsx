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
    "topYfwdBMasQEA7wDLLrsAKLGss1L2nyLs8Wk52bvaJgbSC4BZb3Xp9fJZSwbHiHPcf3DZGndwUeBwyhnDCaQPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EEJJbnH2MJbCN6xJJQLnbfaMunyNHwpnXr8VHBL7RtQDuCFQ95hDNd1SfupgmgaSKotz3BGNtvrKcxJsqQAT5oV",
  "key1": "5Lq4wWY5apBx1MrWbSZWZYutxpCxoQWgN2xCkRmaEq6RBGeqTpJGwqiJtUyKwFN8pggR3Jk49L4ouK2AfouMDayF",
  "key2": "4vE3foobaB1zDUaxK8iL9QogHgueAjY8KMESM8DAw4CXXUnYty9Nvo6ETefJM3Q6kV7ZAyy6PXoQgDsFUxypRapJ",
  "key3": "eeKf7ENXnBKgkGyMSHzSnAiZJkxip9q956EsY26vVu7TSwBUCbV3sCPsKExFXEgkM2bmKqxvLyQXydHKh3oSEB7",
  "key4": "GNfn6pprECS2kLCgcs6crK8xheRMQVxm8nCRa6WUnfGwGPy68LfcPXLrRTGtcMsgu1T2CgfCKmLyUQVX6Jv6oQm",
  "key5": "9LvtEDcNkBFQdvAbRvv9S5d1pdgnrSwtULj5KSi1uWZWpEef5ABvNjjkwfecnrejxg7n2dny2tprYT82inSFjN4",
  "key6": "jqAaJ6ALKcSgfRGCZyb6WQKCGLhygNmFUeErEiS8jN58KDHkNcKqanjoiGzKdQDtHj35SgRtFQTGHwyciaBscfM",
  "key7": "4xAcK2111GJbPKAq3LzHCGB5bKMZL8VBgaCNF7TjnuYpSTwVEeFUGeKxJidVSys16zKnwyutzKNqwi1QzY655NBJ",
  "key8": "3bqmQXqJJxw9ULEVitBzjowSArzTz2fu3fhjWhcsKMRj3KL839w6rvK1dZkxow8WvhRTfETkzXseHpg8G7B88JHy",
  "key9": "3AH4QX4y93R4yA1QBzXYmfi6bnKQgeBgM6urLc7j35Cfds5DJtnnXbgHLG616Z6kSYCgETnoHJMtuKrSmaWUaCpN",
  "key10": "2TaSeiGjZsrg1FS5i1TjRJogH3enwd8rpg3JS8NKNNtAu4NVeok4HoaRe5skfsjR6oyik75nZvVuJHxPjWxJabGg",
  "key11": "nEPECgkDTTTnoppfi8AjW4Gf4zFTmqmciSo5fd8nbAPLSDQQFAZ4WDByM2izGMMvkkGPFysADmRuZCkw8v7FXXb",
  "key12": "2nD64tYU3N5swQevJartiN14guayKHUhoNVVfvV12qkRQvfQu86wPWzc8HFkcsYC66nSf6aRZSotuuUJbjfnGqLG",
  "key13": "3yyfCN3p8WHFqDF7zntNz3wi7aPB4Z1vZg5kdVJQ94XLwkAxHkT1jgU7rCu61QxM4zsw1jM7hsD2PDcpTuxM6ivb",
  "key14": "4KWP3f4ynUz86hgefZASdZEqw9f8aA79ZYvyGHNwQ8B1q1j8BNQ6WGbf1mE8CkcXnFGLWvELaQ2gEb4tRtQaEehy",
  "key15": "4S52W6G2ytG64tPWkSCgTDN7MgHDz3CMcaMGu74KisjwTbuxeXQgAvAiehPvTVUBUWrwnkCRARnCVtonKFefLiVH",
  "key16": "2RgTaJZRibMmzmB8SForLoUMkzD1BYGUmLwhGxYFfJ99Nkbf9f5cRkz3GYZehddPPjumDBeMHk21QoHf8ro3nEnb",
  "key17": "4mbw5NKTrHgDuqyqU7VRv4NmcyCUqqwGcXjDUG7yYcJ7fGRYBTcALym4CV4hL7VuHyhVe8s3DDWVoFbog2Q8cDAS",
  "key18": "3PSvUu69zb8Rwfv72Jd9DVguD8MzKtpH3pUDbbuo1xU1x17RpatKoXN5UxAGnuQh1wZHjhVFVz8UiEXk6nwD8VUP",
  "key19": "3rR1Qkwm7aqoHQpjPwmFgb3vDKCAvnahWgirkyKaBJZ9gmm94SceBHcxdCaWHN6Cya2iP15FsbC3egRdwf1qRDQ3",
  "key20": "47Xi4Q3okJ36d7PDvQRLdpJFVj7hrNH1L6EmXyXn84o9HV8sWXXQqLkDJBvPPndRuYXKpHfbNekbacXM9paMFTYA",
  "key21": "4fdZgFNfxkEUrmApMLdF8wMNzhqijfEUXX6tY6WQ7ZdrnwSoibxRUpxK9hj3ZFsbfSrGgXUhtWqeohSZwp6hdMSK",
  "key22": "415sSwh5yxUjfbbJSGvG4i7xRVAoY28NPCtDRhzVVWNBTDRtJtZVQvbpz8dX9jHRPkrF1pm2XmaFReF6QSZxHc4T",
  "key23": "2mqD5i68d2wVxwdtT6TbVMdJm66R2WjLdbXn5KkrNALWf96aCZrnYxqeqNgL13U2oDhY6kzL3i8T27GHJE67ysz1",
  "key24": "4UGggqbQxf3bPXBWiaFvJPMSJkWuuboYUBttDcJZt7LtKgsyP1r63LcN3JUj3dQVWHiMxxG7G8H6Sjg5G1mctnhk",
  "key25": "63BtFR7kQgiWwnrJJ7zraykmZTuYVQhFFrVbo9tczH1nG6rVcRKRbEm5Feb1XmsMx16HvWim8UhBknXwz3Yiyi55",
  "key26": "4xAoU51JBwmnQDviYNj3bPkU7uunm24fFcKenpDh34SKHqEHevcFDqf79zwRKv2avFhGD5trU8JbnEW14yEKgybo",
  "key27": "5Aoncm9fbcSNs1QcVWKZEyjRGCnGFfmJC9kbHwfBWarJzmPHyGhayRPvFhNxndqQVPTFvsRVGuDcvDfXrDDyHZxP",
  "key28": "2r2ZxpGLfrjm9GgLPMKZ9LZF9QdfY9y986Y2V6tERCCcS5DHah54GcJv7cNdE9ALKA1qiDF3cm54PFqycqhANuoX",
  "key29": "5uw7dR1UJusQtatuNJJiYHp52RzQXB2oinWa72fdvvW7RFLNnExZRZLzMX3VMVZWyzgLKriNBkmnoSyqyo9AmECg",
  "key30": "TXWGjB2GMYi6ke18PkJ5PfKa5cTvQ4amifziUoby4gWuvRZPhAFZQAy2j3JVwPo9fA9Mf5zvopN2XtYGPFDpEgg",
  "key31": "4QQLStU4kCCrPKjgTM33D6B2QapTxQcgY9sLBLA4fALLsBpLwjV1Ue1JKEhy2XdQSDA9ryeGrtt4e7nh71wx3jWY",
  "key32": "58zGuTX3nrMmfLyFUAxxqMiBHYaM3vwx2DiCrpiF9A2obCTe3H5AWMYYjqk1p2wwfzc7489TxAwwmTN3PznnBF22",
  "key33": "47qL6os9gAS5DXRf51pQ53Bn1268NvTvw1jtT4LVCjjEMuf7B4F1eyqxCsz22moMAfeuo546JjJYmc8z9B9VxCx7",
  "key34": "4sCQKpNLCF1fDc7kwKZdFHkozA3nUZUvV32DHRzQjUrCasE3H4Ry9HNL2MpYyChsd4YzKY79oPcwm8ELCr6YxZRU",
  "key35": "5kZdEgkFZUkAYZ75vK38jmkVgbUhi6C8gLDFwbRGUTibCSF7i96LHQmbzRf5vrPCVN3wGSHoThGHwFb6Xa6ZowMf",
  "key36": "NWXTBGhYiBB622N6cpdJ7D6H3sezZP8EQYgjUtcuxcxQMdCbVTMwzLqoFHfigNeGrKuVfCy4t8c6VjqvaUczJJH",
  "key37": "3hCvcD631r9ZXsK4H9CgbD5BFu8yqrz9Fb8J7pEoRdXA55F8Rf6u3Rru4vryJsfoSAnTXeztMuMWGNGYNHt3Ak8q",
  "key38": "5wSCmCPb3xnMVbHRfhWsytoRHH4Rcbw2mkdEk6EZtYZN4xaXWpm15W8oyhng6GyPU8Pr8VS5D63oqFnTkQHf4q5k",
  "key39": "5m311Mvj74sjHf8PiXKyEK2AHSgoAakTap3GNkCUCkAP6A4Ve1bZrWrGs74YkLCBA9o13bCN7SKcaLq19RBsG4aY",
  "key40": "22Q5JKyoM65G1RbWcT3KhUk2fwCfkXEJyvXDnnBHo3YauyKGwx6hKhkFLdpXCTbcZwNuVtkCE66uCK898UEckj8j",
  "key41": "3ZZJ9q39NZ2pKw2E6PRG8HY5XbAF49qevSQZg44bWxJ5r2JyMfgPXQPYozMg9yGqfp4GefC66W2i7GmR4xcrRuFF",
  "key42": "44iQCvz1Qpk7wuomwRsMyMNU7TNRvd4Ydc2zqH1zuet5kQrfpRfoFBGFcDVMtMqTeFGjWXW7VStgTPTd6RehDFk6",
  "key43": "5qsyKLQ8UgA24EGV4VY2zmq5DLAPbWJPTyydANz63fThUnGpB8fTYxSAPoJ1GrFit9QmKnRLabcYzUBavLNnXkr3",
  "key44": "45yQhj5XaN797LaDu8E9MoR5HE3oNy9kkRqHv3dLcyNRNk6oxXuFzn51eApivaFGfxPRUgGQC49GthT9txoHWJgg",
  "key45": "3KXTXKeYnURHf6yugV7ZN1kpgXjDvyH7bHr44gKSoKThMbjBEXcv2eQRLV4uYKCi4F29XJwBswaHrqRQDEpsAa3v"
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
