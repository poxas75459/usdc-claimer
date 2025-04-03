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
    "sCg8FgGu1s5CsPuv62QcuEgBsZ7juN358iTDAoBLqJTEBJbh3g7uehG5oyTb8Ybi4hbMuZJAHZV59enoUKKtVck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wKp4YfX2AjmyHQ8t8xfDDxrJjnTbvYtZC413mo61bNLvipHxpmR26ChXjUa9hVoBzuq6JUVfFY7vDUgFX5PTev",
  "key1": "2a3TxX4Tkza16DkE1WrHfzS5R7eamkLvA8rWsMz1ez2GXBQoYkjW66ZJWJ1bodSQaCLtgDLUwpojtKs2MTU9BFy3",
  "key2": "44Bb6a1x9w4c2HxRbjqMbtqPbGMFnGu847kdGHsU13jZqvYmpHPS2U8VV3g3D3vbGvzcFPGjHvLS2PJtz9UG3HAh",
  "key3": "3DkqqShAe5oeFQ1G59KzkjEUBzALeLfaZYRNFBiA8R566yrJa7oWJWxCwzA9up3pZ317NUNSrPyxizUm6aFe4GYF",
  "key4": "5P5NCmDGmAmeU1KS4ghSM3RoeJSmfgssasxqyQW5pGgD4wDMFLFEdskYGxsQGomBhtpgQg6ApLqB1qzH74Znrr9A",
  "key5": "4PonXmxuB6bQbZdtDmY7rrz5EA77JsFHdNE6uvsb4fBABtQvZRmjgXKaq3PDkJsffwXmHiUsCVctJnevxo95RSfx",
  "key6": "5w2qD3x6NPKQtTKNutTwZAjzNJEG85Q6vk3qBHVc2vKtdUqDPEnypoTYTNxJYSYa8qoFPWbJsHVnod6Apk3EfNr1",
  "key7": "4edT81QnsbjxDgAfm7xD4Szi5t6ot2zivf7wff6mEvQUf21TojZ4zBmpmd8fL3NiV5yPyb3eYyE3YB5hCu1uvMPs",
  "key8": "2Pc3aUnwsp3rhH2Dn42gJtLEzPcjwanHQ7Yz2dcsji2xeAL4RttyZKG6XKpknSiCBtA8VTHJyRSaN1TX5ZRE8EBN",
  "key9": "5EEZTEvPqHau9Z7kqxmztUMrJK7vUiGPMNwYi4anATmY5cnSgoSpNuawybftHjyEw9nKZEqpKY86AS95UGjkYgVN",
  "key10": "2P59sxUVqNNtRqAaVQYGyjqYyGF8e8zU41RhN9Lnbw2WXGQyT4ZT7MBTPcZCC1578hFuosizHNvjFxzLUcEfpTuW",
  "key11": "3pjiTKMznu3u22sdSGc1tQdcVMfgAypYnspqqoRirA7XuU6nxnuMQY3yheKxkewVdid6Pv27k7odXJ8Wgrf76gcR",
  "key12": "2uT88G4CAQPyZU2r95fhJ6NXVSMNNhbRvqxyn2Jd2NJvcuSAX7T9rSSyduMejKnavJdqxMjYnqxaxXUpEgB5jjtM",
  "key13": "ft4J5p5YsqH4dvD7yBNmQDSf5u36Cz16zat77dg38R7LaPPRuaPnzz7raFaU5qLDsqifNDqUdezUUM4oMKgtBCi",
  "key14": "3LXQRgbdbdaoqb7ovWQwx3QqyyB3x5rtNrZBK9Db1NDn7o8aMiBGR8bhwzS4id4Zyy2wJQRcr9AkqxE7S27Nba7N",
  "key15": "4XU21qUJCZm69NnXzoqGZshbfbd81ynHGf7nKhssqudVm6TpP3T5HJ5YR5NbucmpSATRCGhHEbySTFgH4YfPYHAe",
  "key16": "38jyeouXbS3Av1ZXsgBFYXq7AGw5tMWjS1WC7U3nHVrYnta45QW2aRcRD4wm3hX2NWmPJtNNHqLbFcHLCn19ro7d",
  "key17": "2iwiQ8dUQgkiEcJ6Scd1bGSp9o9aePy56JEHZCzj4ZNdw9YhGa4QRUoZvDm5zV954599bxyBAUMWFuUTpJdtiXSV",
  "key18": "3SquNnzfiAY4PtRrgEDRAiBrqky1dbNxLE95vfzLenojTeFFPFnKx33Kw5w5BiZvYAn5RVbDAqnpGwx1Avzsr2Mr",
  "key19": "Mj2qxgSAyfq1oLVZmd9a1bysk1GAijEBM8Jed8Q4FkvGcjYXpSZCYN6NJqLwf5RjDquzDbsjxbn2S2hzVQWQDQX",
  "key20": "2TERBSC4r6V18g3yVVQtnY9dhqT6otKNfCGopgBsFQd4cnXUNKUjNDxv5m2XvRFVogaK22sPjWXxzgz4NRxwiC3e",
  "key21": "2r8JqW6ag9GuBvBbfy9Bv1V6xNxKnoa1fDoCbG8hXutVocXinrfG8rZwnwq8TeNEjtgGvS16H3N4WDBSzhTb4JET",
  "key22": "jxMgwLZw7YP7FWiY9cpbrLBCBVmGxuCTJJd8cmYFATG7Liy72BLCCGmvK7Q7aVhg2mWdodoRkEppE1Kj6YUFVTX",
  "key23": "BwQ8TooCMqQf8h4xtS2kuritwfbK4ZLTfAbGnM943gCNYnQWe8JrkGSbZgNkNGnUv4K6VD6E119ADSdsWQcn8mX",
  "key24": "5fRbPy8fkesykvLES16Kum1qwoRXSJuZPLK3mqNquvLpgTxqVpikDf2iDtt38i6T6U4TvkBE8sQPfZHBerXQAfLp",
  "key25": "e3hCsxj9PAfhnVagt94ZbpLBd4aGaNtU22nJJuoVyg8PsbyDeKoRWHNUKjcFNuWodEM9EPquq7G5cQRsZw8wXf7",
  "key26": "42DF2DWFydRhRENjrXwvwts5KdVwiBfxAVQFqFjPwV7xsyJWA9fsZxaRd4NMrCVyU5friQKb9AHNhmT3gsV6XzNY",
  "key27": "uYLJQtXt2T2FiFCWRDRDxF8EL3145XykpDXL43FYBmNvFwsvUkXwgdhVk1LoAhnLyVr8XX3Hh4hZ5YfnfpF5Gvv",
  "key28": "2qTu34kuJvAMqnCyXnLz3ZXnMrKUkXGMm5UVjz4eveK4dTJBojLEeKqsgiMnZWveoxXzXnSBetbKxFk7r5DWV5x9",
  "key29": "ttMwTSztyStbgyHzep9rYfqVCfFqKjgKvN14RXikU9rkUwPkcuEvqKWTNvxpW7KH8EYyGJ3kVW59SZYau4AvtCA",
  "key30": "5tWKGaVWAytrkV6rBHrBVw3JEoc3gcHPGKTHQFNXLcD3gUHX2yNp7bcYGDFCfd8q2RF6ACL2rZAkodZngBMfkywS",
  "key31": "4pZ6vTD8UQfgURGpd4Bj2tG79K66uuzkDbNDUtBGcguSYAhjpzMWpMrwRTPzJp2GtGe54rCWLjMfHQhDc8jxUtS3",
  "key32": "Cj2c4gnhLXe8aZyjCvAMSkyLDkCHWAPWskSG1fYb2vYLtSSBpAV1q4JNPEoJZFmCZHXdsGo3oSmWxvtn4UBimfp",
  "key33": "2PU2pKnykcwjALYzycwswPsBPFG3pqQ9wyab7qKhccfgFB8VgDdwbZLPEZ7QYk46SVDtffCWvFj2FwSj4hq4N5Qj",
  "key34": "64E19EWZZymX89LMt8x7TfEUn4mEfJTGz7YrXkrdaJChhSuqMQm8cSu5ZeacS1Ys2BwdSkz544eYSRVXBMENjWhS",
  "key35": "4muoaddfSdWZqsGmkQnw8kLNWBgRBPs8TjzMZc3bD62gZPSjUQBrtjeRg3HE5ycEua2BDdFAS5sj7e26EU7ZM5Qg",
  "key36": "54hiEj5nP6gZ9Kg8kiCeJnBUEXM5ng2jxs9adLZjmmurnXPr1E7HJ3bkwazdLkP6BsHYhH6LMc7coa5LZYn1EAtb"
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
