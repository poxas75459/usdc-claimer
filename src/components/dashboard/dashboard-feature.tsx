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
    "2zF6ku7u8VgXNFTU5aUbBfJmat7YfKK2Z6H7YpEZWyJ52w7zwQ6Nixrbuu1rzpF1rcqqh7dLJ2K3dd9QjK3f3bcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDUkbqP8Tb1RZ6RgmU2n9zBSC9HMhotaFMvS8jeioxjxbA7ToCc8PmUzKNsWPKKMQjbJP9koimvG5qT155b9Vph",
  "key1": "5jvcgSk9A968mNp38b5cafuhuJCKaYKHytYiaUAFcDGFhxJ8MLu1YWvL9wwwiM6NEvu46Lf3Ndxz1xKiEo3MkyrM",
  "key2": "SDwCeAxdqvonzZLiw5J8Xtp7RPJua6xP7cs8LTXdS65xyW75JXuH4RaiiQwNdfzGd9eSZNtAqqmZSFKeMuhpzeq",
  "key3": "2oEZ1ugRvNEy4ca6QS1fWbknCYWAgYZkFakKCEf74kfNj9fdnjQJiasnFCAyHdJsPsks3tkek6RUdne6VSi3FJqf",
  "key4": "QV371uYGaDutdmG6YbmpEbQx3NXwuc9zfD3jxbLziiMgD2CGwBzGPCYnTc63KM17tq2NcEX1iL5KWBjLFUNZwkH",
  "key5": "bioVfsZzHwfqkMDrFF8amdyEgFfun5TYzNQLX3qGvrVXgDousyp7KSyKuuA8c53roPtgygYToZE5jEoBG1X78UF",
  "key6": "NAmdVoSd16uamr4mezVYwdB1hcqtjbD1XYYMeZsPBZVAnF9KcqZDP4aq4rUTu51nXtssJSF2W2S558du1EKxMMi",
  "key7": "3qgpN9BKo6VCJBrP4j6tENaUNu1GfxKZb7gBg1EvENMGr5dkw4HPhzuJ6riRzxCJZRn9teHPas8V29F3u5U394pj",
  "key8": "3U7Zr8nAcmQJ3cWkDz4RuELaDctksFMuFF7whXQM6xe77NBbDxCP84JPM5uaioddYt14LnSzoBee25oCUMdTxkYd",
  "key9": "4ouhqiSEtD3YcRk3HUdFkqELbcpBprJ8yToTYVSDzMzL3bnNtpMXk43DpQRAYDDPBNFHZrf5FPPyirEYbbCNDW3P",
  "key10": "4SapYmyFzin3tAJ7L147Hs5i69mA4TsqfhNdYEnhfBNGhbpV13Jfhk7zynuC6hiTBruEPC2qyASdbWN1dtNkxp2m",
  "key11": "2ZEJLuQouXGaVaLQCUrP5TDxpt83uyDbKDReHUqRCm5w3vty7sNVFPzVSVy1LZk5YuaZGu6RkNf8N6e23389uGtE",
  "key12": "3vmhmNBJiG6mNRhQgarpMQYMp1tSJrM8RuKjB3GhnYSQZ2ENwk1X2xbLnDsvfVDEKznSN3FbTZoNQGKTv6qwEq8j",
  "key13": "eD8ERPWhm2pENqGhwpUg55n4FCsYudF9MExFAqXyhXbDWR752tdhACZcZ8UrDyF4Z9TUzWM1fQueJqJ6BEb84f1",
  "key14": "4VHwLpxn4nY9QyayHKnHRbsecpdwZbTbmfhan1M2APaGSUz9qMLoqDMuza3pwPyqs6WkS5YWyV8vDi6o4wXUAUhi",
  "key15": "4QEoWhjymdX4BCNVNnkaXszQKVZaAKcJs7H26sa8yVFrcWqyfX2CgNsDwSAd398FaCAqEQqsiCBQioXawEyGWNiJ",
  "key16": "2gMx9stmu7VabaZhfHmLE43FxQb9HzTDCr8DV9herrKq6y9ESiEDmADBSVP5j2hYx1P9aLhdzgfPZPuEfS1yPMTG",
  "key17": "59WjS2wfeNP5pKwSqv7qBc61fATGur8QMpGdbBsfq1XD1WDLuf3VPjs4HijTrhrrgmsFoqqzy26q2ubT4g9yv4KP",
  "key18": "2CNtnbcXbtRQGo5buDJTWGnnfUnFcg47Pc9ZRXT1aYzqPp6DAw38SiC2EVW9VUnuhTsUSwmZbZ9JXckkSd5nq2Q6",
  "key19": "4ZSRBQLdVET5ix3ycW5wicRMzgWtq6TrpM9bHuJE5FuemPEhDHjC1LPTpYZtDCn1UhH3i18cWYcryzgAAdWpsHR2",
  "key20": "5vpShHmP1eKFUjzxxkrW5FFM3HurQ7wjTd3Rh3tN9QyuEhvm9buoSstH2u3hVuRy38Ck5zbsQbUvSgyud5KAFLrC",
  "key21": "2DWLLqEDrBmW9rjnNNCVzqVqfHv2AEBEiUxeVZwrrhwFa9DYEFe6HT14nDn1ZgvzSnv75Kf88pFqPaxfiiGKqNmt",
  "key22": "3r1zCyXRGTajcduvGDf2NQd3erbG1bdpHnYjgQaa5BFwVijmNSwuQjw1ypLcUvi532mxq9pv38KarLKRL3RDT82A",
  "key23": "2zmddYBkaZKUiV3w2gmUmx4abreC8wFWbsJWvEmDahtSFyZvFmNfBruifRyhNKP2fP6nCAg2PKCaRvXWtcd4ijBj",
  "key24": "67BR1wS8ofSnr14SuzGrRf5ctzn17KyNM3r3rHiX55gAfkXwReDpvDsnmyQLToELyUcHPANwd3uHyGKVznHHHdKo",
  "key25": "3VhDR144VNHZoRfYwmXpK4xkMTa5GM8e3YTupuAMNUNLxzbB7DnBz5n1GMVXrNSpYb4EgWs53VBaqTBiSzLPwcfR",
  "key26": "i7fnskSfoEuLqbmLGCNmQ2wmg4CHRuhdvxc5u53WacWuhY6EhcGYqPTMSVoKXLmDa4C3EG75UVf4886LrpFEGre",
  "key27": "4JQDa8gqoVddE7GkWyjCGp2mo3nRg1zbMYNzgsACTmphhcUozqQrPPhtrhCHuT3vbwWTEBYqEXKSWUgjCLt7btNU",
  "key28": "um36tLtRdrwYE3pv8gNHpNzqcrxLkT6kNiaCzo8mXGhh4WjNF8jK5xaMAMj9zYUG7HrbYuY6ewDkq9PYYJqMyBH",
  "key29": "5bUz8ZoQyCwyJ2bGEdTum1DKyF7mo4MtpGhHu8fg1xAzVxd5acqezF9iHt5mcpZcPUck3NCMnh3WzhFS23utEQa1",
  "key30": "51ioyfYXjHgSvwGL8KHQuetc3eSQ3eVhwcjaqrFED9adU2JVpy8DBQPxQ9aKRNpyKSsfD8M4EWmkEzxcUuLdvmBi",
  "key31": "jfk4VaGrHcdkW3udyfx2vF6De5UccTQhhzn6Wx9fMJXTsg9KQuY2urUZaut37sgLfCYmyBWTc4p5dbGp2ameHNL",
  "key32": "3LFdeaws6LKE6J39YhQL9t6F9fRzzTZxFTEnYsAj1cAEH9BGopgbsNfKsjtSEJAxwEKUzksLfzr8qYbK1gjkVgVf",
  "key33": "4DWV6KTeP7CV5ZE2WFnvJ2x5pCDN2uShM38b56sEuZuv47YAVZqjDrD43WZjJv38UHoGeeNnLTLFA9o4SUNrAML5",
  "key34": "2XMsivxSByR4qZww2v3trQpAZ4paVZgt46HpTDLhuQCwQ2Ye5cbAt3KiLqskD6BrunFDhv9vbGtLUYckYGnphrHf",
  "key35": "c4c94DZVa6wi9Y2xU1YGHh5FQbjYVYz9HRRDYvr2714okhMyBzUzo9YoGpTgGB4Jr1BQw1popDJ71WQNUKyjobk",
  "key36": "4WuY9oFeTBmRqv19mMKTTmm7hYuLSZFc5qHS8cdh94yzEZHZSmdiPPqUGTtmvzN9MXGGQCjQKAjZAEtTqYfsFjPg",
  "key37": "4n8DdwmUiCR7Fwp4hyjcy4J12BgsfUyWKTqo2snwbRtDANoTmJTTCRgWK8ASPYeQePHHJQTBGQALeriZiTHYQbRY",
  "key38": "wqt2cyjpHKtfQ4eekPef9kzzDaUX1z5fFutqyW31g9yMsjYVR2LbUrTCsNJ371PkYNh87Bh4GhNwxQmLAfQajMi",
  "key39": "4A3wxneinCtgpjHAJtk2BaNRCQyh28vgeZD9LztNruoApEn7kBhtLhais1ox5TtBN6y6NBUJNsJWSExSUvYxERtp",
  "key40": "3KC9JeKooDLnSYVCNh9vfAK8vZTL5BUd5AvbjigBjGu3ZYiPW4qTcR14N9EvNRxXWcwFY3DboRPBxapQMkmTXy71",
  "key41": "5Mmof17puB8cv1PTuLGzcQDGnAM1kqfzSSeQxJfzw24hv18xWRkHZ358gikm8EKtdPWV2Pq4GrPE17YQpGX22enQ",
  "key42": "21ouDzkbhhEfeVmaDaGZwqUykYiW8ErSZW3HzPq9pdEtVe54EpkKTdvVDqLqA8G4krP2W9V45UptSktKwVRTsgwm",
  "key43": "v2idq85KB1aCJKM46u3ZtWE6B8k9wenLoiVXFeAr8JEn85EPXV5LooavuXt4vRL1RGjTCSXtqVWfnwj4ry7vRCu",
  "key44": "3iJZWRXkqHHGF8Gmz9vH7XsxPXiJZswxVnCqKCfEt1oh37nz1fi9HVDXuLkvGYBewWQ74H6ututXioeKuwZe4r96",
  "key45": "5mcmh11VDNYkD2RzX8se3Jb3TmCWHRLSxaz5p4ApRQqU7PPCTTvQgCYrDDiKRmpEanE5cqNSoekhMjhAnhK5pksD",
  "key46": "cD2yAzZ2wiKkofUWXVzxDX2rpdconGHey7Cfkwvv9kVtBJhQWgvFCY3ZTHfeq61W3TAzp9Cuo6gdmqhGps5LovS"
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
