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
    "YTpZWfdXzuwAWM4R38uNwAGYqAYpGJrX4HP1VKUwrNoMuEBNv97Ztce2v3srFV15BeuDye9A7o87vutgGuVFfFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8QwjFPJhyUP3C9VTs3559TjHhj7dRCuKA7w4UghcBpqPvkkpGWkTbxqDkj8eqzyKjER5k9wME1uxk7qnhKk8UNa",
  "key1": "5dhZUzwPJocce5YNuyAnegkRRy1kUE95StGeMqiBFdYZHdUPmsu83EHVh6Av3MEHZzWXc78qJBCid81YM85WBfcR",
  "key2": "2wGuqHzPNRpEKZVjBNDNmwBDp63oimuupQKqRLcy8xQUZmDTtf6BGL1Z9FKmtsrp8vjnXKBH2cE6vuJrd9Zce38D",
  "key3": "4UrEve58PymrDP5DvAYVe19wrxAAdZDYGx5w8S7yx3XAEN5VooB67hAKAxTZ242EhLdCqmPCcqnRKTQnhJwt6Tds",
  "key4": "4iauLYc9BdDykrbrGmuk9iQzDQ53DiLyUzjaYDcbEvv4Ub8rLonXmN6fSHCsYuETwcLhszfqM52yjSjMSMak31nW",
  "key5": "41HD2GMFQgGxuatywS3yN8xcrHK8EJgnLqv74AEmMtYBgbWCnsVfyVSZWudBHzwWAr3uggeBBRXJXJZbhCu9CUDz",
  "key6": "5MzJoj8T6fETeZbW8coSffptTvkrBNhnDJwyUctGv8mH8wmZAiYeJ9Q31nb6RZeJtsQoqFtRrpSHAZVGhzKLqE2X",
  "key7": "n61tN4gpAGyuhRGKDNPC6gMu4tgqiNSzjskoh29SKfvSHTgqPqdW2ZHkMxrWxJEJXo4oWPxcppoAzLvjNkkYN4a",
  "key8": "5Xz3SUZciPuRcfQqRNNM53dPTGqXabbWHiyWoSt8DiqJvu7eMQwhzLL6swa6W4MTLvB1EsMs3fcY5BELkXtmGc9o",
  "key9": "uxnsQ421V4djSK9L7MqzJGWBN2oeU5CVcBjiakivX7EMkFrQqmyYFbj6fMrE9CKG5FGtAdbT3Gsm3oU6aYTG5rZ",
  "key10": "4a1SwtaNG9Aa8pJdnbwZ7opMVJPYEYrKGVySXzd4otEr9xLJ8gaJPuFuAYSoLQZX9ik8EsRyRYUacb5rjqNm17k8",
  "key11": "2UYqWCYL61GAZUydmGPzvrcoxFhsyUMxQeBjezzdUDs2jdVNgtgG1LAFuFw9rzya7sm7bmbdoKF8fRJH5bzpBMQX",
  "key12": "358fZxeFpUzQYBjLepdDc4L8ftSQM6H1XRXmov4FWemLKgb5nW16jXHEJXPDuoytabThnw91QJD8DBT4fp9Eqqg4",
  "key13": "59KxsaSzq3X3DVQrFjJcLwfEjeeo64nzQakf2paZ51gyGxfZrkPeKbW4Cuv15JFv9ERnpcQdck2vfi6yJ37zuSzN",
  "key14": "4TSToTAUhr9wzj54hG2kesrr8RrwoYom2w36D3niyic3MY9RVqqyZG6rwvBHcgrgaRaYR2SJuBJYAsvhDEQHKFGL",
  "key15": "ueTekEkG2LgC9P4dELmhAayawizohhHACfUpjfEZoHyoh1F9eEuYz5LLwskX4tqjRzvFPdiNbFKw73JyCU2MtNW",
  "key16": "2Q34Z9k98qUQvU6sKfFC1Khr97mmGopk6b6UMCwysXcBJipZdMyQWUQC9SuKpKFLZVv6hbeKayruEQhpQi6us1oN",
  "key17": "fo2hjdRso4DJ2UuGs3UV9JrY5NnkrHHTutdvzsJ5cwxP3YhFzgHrefYzP5rWfq6Sd4UmTXSR2mZUgkPL95NbBUu",
  "key18": "5BHwMV5vBVjcDwvyRWi8w6wqcDTZhipa7yVCFKujpRYS8XhMe77Qek7midyWFz6jmWJhVztCQujHpjwmrNWqQbbG",
  "key19": "5LdAf29ZDKQxSht91gKB8qgBLzTPEtj9tb97MFBBcBf4aeNnpkyxyduMtrriKk6muFwkDc8APVUcNoLQt34ttKT",
  "key20": "5snMwMLUwoMH9LgaoEBQjhxYiKBCykxPJ7CFVqN22NCBUpNdanugAjkF5PVsnQLQDgAKur53sdugyNmbg32nrWFf",
  "key21": "4cJXNq464LvRZvpRTuPNrt8FfDtv7H2sqs28ekSyypv681AuRBhwik4YLPsG1RUeHp3b5CacDx7A6UsSHqvEGDxb",
  "key22": "2G2nnXe9LWpWhQcGNbf3JrRUACpgXRhNJt8tceSqqiYqGMv1aVsuWbMZkQvPSRjdvEWuNmSFBqR7e2s8j2tCjVKt",
  "key23": "5GvZEKmUCra8FGCSSpmWGStHVPcgz7YX78gfh5W9qZHEdhLfs6LwP2P1vsps4xKYq1ctYtxtuzoP6J38KSmqrr1i",
  "key24": "4Nz4cgQjzWaZhe45ZCRBsnCsacq2hNSFJLrk1agQifsh58WjmcvSzU9T8yzRNXTNhiCnao7Fp5FbSfFKdubNwbfM",
  "key25": "3MNYesehs7ELnKBPcjWrGJNVEkY5zzwVFfg1UUyzQvVk3PR4L7EFSBndFgW4JKXRpXkT6R3hkq9Dja1Qu23dRJXU",
  "key26": "3fNteqwHDgq5FFZ1YbXDVgbasGJvm9zLS4jepaFUhe1gBn9vy1owwr5YPYs5qRWgNhCS46EgGcmaK8zHmgRQyoNX",
  "key27": "2spsZZswGfkjAM2dbDaKo1Qaneghu8CoQJa8RCv29uK2tJBohX4oEnvno9jHjEncHmybcD4By5u5SYqEGzVfPSL7",
  "key28": "2isKHNxjF73ukWXeVBe4t77JTofu2yUp28xa5owQFgBzJL49GipCd2phLB7LArVaUARavW7gNhnypP9NeVghzzAT",
  "key29": "qNvzfQVvBVQ3127ES823upQG5UX5qHuv7NGLsp1tYsnvKUqQ7B2J1Kj5AKLUB4za8pVPiyAWmJLZCdHtxw9eZh7",
  "key30": "5QXd2QC8QryHQYkwPAmDQeUpFgHWg9TkLcFmDmvTevZKTk1fu5FpNXFopDjdMKLrD65LzE6QbR3qhNA7jCsmD8pa",
  "key31": "5cPXN3MxDcLF31zSYNcpMk6ZitLxdTFcsd7yhWqSaiQr9YRAiaKBXa2PKUzBs1tzRNGBmi71pVQQHj86PxL5o4VA",
  "key32": "4vffhePeJxBLinSXt6vng1KRjWa4mEp18BaMbU2DmiyaNPE7eeL4j2Bz5SpdccYAYVx9Vx2MszWusij1ok3acxrT",
  "key33": "3sHmLf3zS5Dw38sYxkh6QXdQi5d5QjBNfbTXrzeebefKNWFZXatcpUNdtk1YHCr7VKaBEKN9kMhW5BisjNYRKzeS",
  "key34": "bTuFtfWKkNuNXcmxXPYQEfmrcaHz1ytHAGQZqCWo3FX81XgCEgTFQiFCH6TYHA5oELikrYp3js3iwaHt8TZ246B",
  "key35": "5t2KnVdg77B2XFM3fdB836hwXSE2JuubtJbDKmhh9hTzXZkaU485t18bSoDRrqoyHgmuVYWXP8bQiw6Xf4sN2Rj9",
  "key36": "3YKBLszsWuTPuQ8qk64RmdzQrRkh8zphxpngUnJaMmUbq6UsavHzqt96xg3RJTvHL3rX94k1BqBM9ayoZ2FkteEu",
  "key37": "5Wma5bAm9NL2k7wb5JdYvHGQV7wk69eW2LwNSaSC3XgCQxzuPUU9mUmWUtp6SZcXoGdkNAVHBqcSQULQhJqd2V2d",
  "key38": "5eoy8CRsepotJKf6fKL6KkK9v96WhxVoJbdAnBNqaRLFgAcAM66jTTvzGwGAnSAT4uzsH7GZoZnfDk59vHs2PvUf",
  "key39": "4DKE3YFZ95YDP4avcVaX162vJf1QXn7qy8BGg2AKZrnzDAGb9hw6sa3r6Ptnnhd8BK4e9ktiCymrFrLh8fdhvTSn",
  "key40": "3YG1mencQt2ixyuSAcCufqptsKC7dtvKQnsZvnr59G41LReMhx7afZzTdR71uRu4gZ76qXCQ9rU1UDADm6fUxRs",
  "key41": "utqSAhU49PPh2im9DRJAYCRLz5xZwu9pX62qBi4jnP5YSHGE2o3HPFJ4M3VUfpd2sbTRF3c7BH7XTVWAeyLHgwe",
  "key42": "2PvfMkGMZVaJbR5f8Xsh2q1oevs5KAMPuTDTV5PCtCabVrdXEs16zGwL4yGvhh1ttPhC23GzRvQvkBkKwymxzDDj",
  "key43": "5QzBD87ncZqTu3gEp1austaYgvvFnPjCR6aupFrUiN4YRioZd7V1kP3CHTY6cqPuivJaTa25wj8U6vHtdKegop2D",
  "key44": "Cdei9Fuhs8C2bxzkMTejxDeeoQ23vmMGhzFPGaGFJQCGm99rD4ytnXq9riPuoJsC5wnTK3XrhExMaz1R7Y4uYRk",
  "key45": "36n212kBNC3p9kY6jEQkDQtch7MT9CmL1wQqemcEtFNubQmhhxM1EaSeKQDffdjuAc3yoXgzpV67HggyBty4LoDs",
  "key46": "5oP63LP6D7Yj31fhrPG3auRuMSb2rMGVA1xqV98QftKc4auEXNbQmP1VQV99uH1Jbd2v4qYT6fZWdqLBjFsCuEgZ",
  "key47": "4YQEWP6DJU9vEuwVRwFZCcA4gYqmTG2T4VEsgJKjHHxVVFPCLGjAAMWB1XVrNjmP1Ew1GRdWBkraLgaE1FkKEcCo"
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
