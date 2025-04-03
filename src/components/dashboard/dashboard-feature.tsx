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
    "SvxSJ2fx8q6mZVYHUwV8rAvv9xmHz4xRUATZ87tN2JKDUZc9DoejdrjroRpeJtdQdcV8aAqRRFb12cgqbCoJ9q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83vsvvyXy6MkLKTbuqhcSnHrPrM6o48xgSPSGJL4w4k6tsu7hbynCfopyceZT9g2JGKMhxXzK65w4aEAtTSPENS",
  "key1": "34r4kvyFbsg6qW1WCB6rB21W98HzbtcRqrNvKQPvnFgi5ys2e1N7FnC1RnPC1BHF25KKriBRPdy2zEqYNVMPvwwE",
  "key2": "4fgHFixK6NcuNrgbS9pUrtGxq3vH53T5oaEJsbJSLGde6AgbUegUJWLXpLFhtXHRqEozM2aqdT4oUVcUJpEtDt6K",
  "key3": "4F2NgJNU2VhqLnZsjWyxxwVV8A3cGkAEqYRbPU9Jd4XMm1kNZPWky6mdTYvvsZ7gfBmtnTpgeAvzzJtkVGQkX2gu",
  "key4": "4LKZgg4NSAZ6gS8fAhipmufAN5utyJTgEYELneCpRQzMa4NxJoQ3rRdvy7pHCGDpzoqD6YMxcSpEXhP23r35hk6y",
  "key5": "5yGax7XjXz8n1FMqrpG1V9121rbfLGKy4buULoYMEibinCwvZCXu6e5qPL17JHg5jEjJXybdM2wMkcZpNJhNtLV1",
  "key6": "3zC7yYtMSiTeV92EuQCXGNKc1mCLwMydvZ6AZNbQqWogJS15NpyDB9WhpkmnhfgREVSMGY6qAwvqAhMuton8usju",
  "key7": "2PLR5w1UwjtEDypyhcKqmY2j6bMhtN1QA3aVwmF7HPS6jkw1rdSqDrpNGDLAqknE7UQn1UWiYka1JYZCZNkwhf7V",
  "key8": "2u9NJqXSaSHzstQf36jTnaLcak5bYAfqYJq3thrW1KNtDYvoHSzt3nQRFoRih5ZH2PEC7A8dR9byoUnyBm4cV7vL",
  "key9": "3usHo6CA6RXk7Lq5jhqh9NK9uKikQEDYmxKwNSNbcBggNayYrrDXcJP59Rsy8tmVPDVcYyS51ZEmRTNqnpCV9keM",
  "key10": "twN3Sf6ngnJwJta15f5mMnGrY8XvDLJMuH4oB4qB4NeKhz7s88vtmyNUTcozrzCcoHU5S8JxTWagz8cTVGtNrbv",
  "key11": "2mzhQdamQQpnTmNCM5YJBQY2XD1TeM9hcjSquQePaaj1iEKjCYnbAt9efpTF2ykddRtcq6JiMi5Mko5fJ28szUiE",
  "key12": "5BcuHFZ1yTdUEpAcHAtCeEAeYVdN2FyxD88WWxXrWGq714EVQP17uLrLMvDxGCAQyAZ3tEJfp1qxqX7A156F8FLW",
  "key13": "2oozL4NKXNsmvp1fM9A3Was6KagHHJs1e22rXC774FqDiPcczA9BMCGbxeVVJP71g6MwUEY7TzXoQG4kpJoUSyHv",
  "key14": "2STjNzWyfbc5j7Qj1gnkn8u6EKeSaFz59qz1V9ebaUHrww2tQZbYPp7q85veoCi592fXVJ4zVd7hFijJS2Uc3dnM",
  "key15": "2wD7zMPPih3QCs2sdqcMRjkX7oYxjrr6jmq324BgDEQmSwdsw485c94uJf3EuyQpLCGmmNH5SkC1egqN4eGHRjk2",
  "key16": "4Kqix9Fu1qSUQVpVigvrE1AZLXoUGPadvu4jFKaByt6eDWqhHd7YecgZPqY7rG9dByoZkS5SK9Z5Ehy66qnQuttC",
  "key17": "4UQfw7GwucqK6ZmA9ys6NzqJC6Chu6K82WH6eL7dve6MKc94ehvyJK54a2SvvD981nNmPsStgRRXWkAuNYuo7Aen",
  "key18": "3V77g8Exa4GNyZjzBnp24ydEGfKhjmRfn8fbJgPJEgMQZbuC2KYqHeyWGu5VPPnGAwfD3ptvyDSfx1Skgc2uBMUA",
  "key19": "T2APr9PoN2P8yAKoco8HxgeNNNcPxhQcdrXUcNowmo5XxjqjBmni4jSo7WHtqiqHwMjhWEBMkcsupj4che8Db6p",
  "key20": "26utsP3UK3xcovpLnJhwedNmUMvVd8Kj6w49U3q31bR8vobSjgfMvPbxr3W8tZJaZSdcwtT196uKM8danfc3a8Pd",
  "key21": "WLojYSfN2cTNP89brqcvnADbymZJE4BcpR9wamyULzG66iAeoBcgdocs1rLVTsYfmKfTSBxsgRUFeGmFJ9ZDesg",
  "key22": "5WDncEP3CGU4pZ9ZY8sua9E4axvguoB71x3ADcf4QQLWae7V2aKC5ezZoepmJa15YX1HfPaw8QeYJkQpKmp9BfXq",
  "key23": "3Lz9kiM8Mk7D9YCsSRa6dNFRUBuSCTaVBDihacaccaSfAJBdvGUHbWBuys2WV98RQgZL1UryVUVGW3GW6LQJMRcP",
  "key24": "2dLj2BGPkYrPpEFA1oY3askcZRvcccQnkYxwjsotkhf4Gn6Nc5pnWUecksxGCfootudKFk4dKK672GcmXAuYVgzF",
  "key25": "3dqD1opC82NfbU8chTLa53rn6fJ7QHgt25kRxes7qeH4Eog9ii58B8iYMBQD2zKBw32FLD6E3JLCaxpZPupDTgDk",
  "key26": "3xKqv6Pv7ntbjpqz2rLm9A5Qe1Z6KRQfKUTna68r4zhNHEWTb3yxvuzM2Q6zMK6CqQC1WTsCjnFt8o7T7Li213ie",
  "key27": "2a9YD4TZnZkvDin6kMyWJ7Cz3Vq6nNex4sZ6i2kkqjENZ8rRhL7bdCPjNV98cS9zV2DDdDaMb7s8vjUwm3f6vhgr",
  "key28": "4MKTx5FUr7zZkYMVnMLTCPzcK63Q7xbK2nGnwjyVfU1YhJkkiu8goEBQv1XyDEd819KSbKF2uGtk4pLzSmjATHuc",
  "key29": "bvjRLsiHrp5Dv3PNHpZ9SaPtc63RUK6L3oHWLoWkUusWXQFWvbwFunybgHu2F7B8ewznbJ9yrhgCu7qbrtLZ4sg",
  "key30": "4dXnZq7EMiHo9zGif5Jd8yMynJn7i4XP5WGpKMF6zSrc33nQyHfgswEWuUZGrDu5SfteeWLn5ZWaV6U7Q1SqCiF2",
  "key31": "559DVhMxL91PqLmRFaNkoywPYq6Ajgqtpkj1QRo2jarK5Lx26syg96J8CTRGgBZ5xyaF2oz7T7QzQQKv1zb3WTKT",
  "key32": "4jChDWsNYZNNEv9SvexaQa5pNohXFV2QH1hT7qB5xttsaXhVEJBi4Q68sUcU2q4tm2Nooiyp7uBPtnZBetGqagVK",
  "key33": "22U1Z6krpRpQmyj5c3UQYdnhKcy1HEzDt8SN8Kdu9g4m79UWEEzh5oScZtSRrTLBE8FF6vga6GZvZf6a8Lwqdm7T",
  "key34": "4iTaoM1ESZz6xuphg26xact2nhNk7mdEsBXH5Ytp1Vge4i8TVyfSUuLPg2zNyEUpy2JLRKaVvvs8x9aXmm56aqAV",
  "key35": "3TyAMH4bBRmDChauvWGpGafnhCc3N6NfsHpMhBtetMBrWhkvSSRpgT2Y8D8pnAxAFHYHbNP8kafoxyaFcQRpgGiv",
  "key36": "5CU9j3yzy7tpErtqhggmTp7ZCccuwK9jnZ9UJVmC5NaQrnTkEsMd9uM8rE4No1fGNKFiSRCVHFpdJextXGcaQq6h",
  "key37": "3XT654UXLug1KijRX8UMfXrHjYuY5hejsdgz4xd3D4HqBWt4owdTi87UXX9rToDRY2Dir4DjmnaUxK4Jmw8bpgNF",
  "key38": "3Rbvb1vKjepETc3QF9WAaVaTV4y6TWDb5rx8u9XqJvXoDxwbYFLGTnJevK3wpGDDTnW9kQqKDwcBJEYkbTyVWSPo",
  "key39": "5LWeo8T2nTttUoT58d8vGauC2u2YKCqwLsKYFhgU4MnJdWXS8ZwkLq4xCReDZ1gshZR7BApaHELbKkegHeNGNFog",
  "key40": "2iWSgJsuyiFU17vrAw8Yka4wYX5YSXprTv8hjgmCHGGKVCfvQfBjhkf6i8ycVNZePhjar8Ns5xidN6DUfvPEP3aH",
  "key41": "39uzELbcW8nMVWeFzWG55bYaDcVoiCktfb4MCAeqcwzns8QVLZYG1k4fzptkkTrg317xT4EdLiiT1smkUzVumsUY",
  "key42": "5Z8cuoLa2gTjaB3uYg4KwwTDVX2Y5Q4svZgiVCvDrFk95H3a38SS8aUrYHCTgwhqV8i8AojHuphXHDPRA2YDLh4p",
  "key43": "Dwey5Yrdj9Se6c8jkHpVTRW33EDGm8srBYG5wmuBQmZ3Bghjz739ETZxRh1Qud4Guy4twwuRQveXZkkrPJoVdHW",
  "key44": "2nCcN1QXY8pGPPdhK5DMrrk4yMe9RPTy9C9kyBQTiebBn4Yzggn6oZZyTpaCqNiSH4pNsahTzKtGkVN7CkbpDnFG"
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
