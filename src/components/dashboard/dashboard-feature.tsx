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
    "5SVJsmg32Mya4tvqzPRYoSrorWyxdvD8gM9cWLFmNqKPyxaPYmEdGue9aZ1wyqY3oKEYGWFQCP48QorBEwvUNJXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rmREaVqVNyC3VyEcoe2mLezrLCx1kbWRPBdkNy5geDSKmSU12TBaSPijBZn92vagW6Xw6UVocj2CndpZqe625P",
  "key1": "sohPcFRwW6XxRRC57ntdndeDdPmYdTWw1TUV8CdnoLNZN5mMggYawDY4kJTNzQsRNbUAuyQcjcMo1ntnsSFtH52",
  "key2": "2aqhtR9n7boKdbm8ku2ZnUAZn2oqxpZqwC1QH7okRNShFUNyufFG8YQK2T4qNE39h26auJSD2Z8zTF9nDgkjLZSN",
  "key3": "4HLfgnETPms5ngGJXButW1LaWSf3Cz6fhYT9uepcLSpDu8bYLa4jqhqabtescDpgeJAmRuBAhryK6mf8mBE5fCjN",
  "key4": "53AhzXxdWvtFZtjvLTWYAkCK8we7ph4hKduHeiuPF5AL8SHdpFW7EyzWLRkzWwzknCUExe8oEzwdzFAeab9VUMN3",
  "key5": "33YBfcHpzL42nQtPNPdkeGdSVcGSPQTed5BXKEnsozG4yQaCoMDQrBfuEyJPBynGR1NYqXMM4qyDdwznhXKqNhRk",
  "key6": "Wmya5sGuPrPHHjNHo7nKMm2x53R56yWq6ihC9u9LMLzQf55tyakq3iytDcd3QnGVZtbKQWaov2o7uBfV8P1J5Dm",
  "key7": "5pCaosaoruKgySqFeTc6KAoqL6U5nGRrfG1WqAeDLg2KsiZJeHC46wrwapgdu85wVkfqNqHV36K8iyvq4CzJWccg",
  "key8": "4KsKGW1bMbHU4cB7s8rxYm1ocrWmqQpJwa5MJtRitCXG1cVhkwnepqxvPq2GNmE7hFtJ1FUqC7prdgmygkmBUDs8",
  "key9": "4DKp1eUrKS5AhD6y28rNpERq9Sd3rDtAE86kEKTUH4b1a6jiQL7jzDSpgCXXSk4e5nLAeowhnyCh5ispMtmPNvLW",
  "key10": "3bkMgkaTSeShekwFZ9fhAzC1hxmvimWao5KgDuVJ7QhqqgPB6JShY7y1ESujEjpBbWm4J8XNMLVsvBvoYj7e8yXG",
  "key11": "NDLohagZRjxPSDJANS5LW4FG2Dh7ZJ7FZxWvv2Aw4e94ypRop2RBFVjFz68x9uQWiXCv17zTRSTPfcUfeNJfbJ1",
  "key12": "vATo4QgseBejYCXJGuSJbBRt4fpRc3Pq3fhzkR4TUBHwokP8tM2nUGd6uM8S9wct7zXu5NVW8t7zrj7SpFDQc5J",
  "key13": "4a51ePSvBHZU6ZzqQVT15PZuFWWTnzj1VkFQKNUuVAT4eJxexFV6iDhBuoEkFHePujYWQ2g8HWbBku3C2qRtoiME",
  "key14": "JhUKq1nmXp9dowD5UC7xs9CKXw5QCT4U75SKg1r7kWjxGpfaUEAwfMjWn8tehizwA2KQhKM8gpwaE5tf4AWA9gM",
  "key15": "4VEo4w4yr6jhBhjWneVx8igezSpzAUgDxhky2cUKRQtRajxE6j3Xche5MLw4jSqvfUU6AakTQjx69kxcLv6zyAmP",
  "key16": "2n12ue9GY7WfY6RqNZiF5goLiBubcBp1YyMreSrv2PjdN4w84Lr8PQ2jsfPabPxpQLxUzQ798AxBUv6EuD2wLFAy",
  "key17": "4j44ZdZV9doNL6fxLMpSf8QcgR3jmHDXCGxoBsWiThANmDKCEn5HN6rogHEdvL2aEqJ4tBw695Vwqr2DoEmnMyLK",
  "key18": "4H159nPPvvafCT6SQoriUneULptnMCnsono1AXDCxDy4mDzsY1eq7kDKCAWabYHE75WYYR5GsuCEGYUy7tYNbTzd",
  "key19": "4b7QyCgAioq2y36SaSR7QpmgwrQg2ukfhvMdUKCTokLkYtMGDWBwn1Bh9iqGo5pZV4vmMi8wWa85yifvbPJar5ut",
  "key20": "5BUK1xaLp6BgXBA5ieMwzcmAGqhBKtSrFZ3m8ye8gk1DqGXs94p95dyatycrcCHm2v8NUwbsVAQvHm8LA4h4ZnK8",
  "key21": "3Yk1u2ATxfgjfVAdCg5cD1n6L1M5FBGZp7UGbvSNQEWpKXFKRxechSKdpb1GVcrUHWSshvAHNdZoHXMa9sVTVmhw",
  "key22": "2KPosWz2dMVRfwuzLKdeQQKfLpSjWgKiPaN3P5Gf36eq4yJnpWxDkGmiBF8pLCUzUTRZjD7CiGtiVyhzga1hNq6w",
  "key23": "44PUBL2z1A6htBUMt9pC8eyNjyZWcfXsK26V4dk7XCb1f4PdZG8qTA4FaZce8pPLjzKqZkt74RaSKuJvck1tQ9sq",
  "key24": "5cmHGChtLPj8AEPEyt5NVyVtUrnt6fzPZgE6ZJ5cwBcwUQEnHMEHq5MiRhe43sW5YZeJ7Dh2pb4YFB3RLU9kXLHw",
  "key25": "663jCFh6BPQaJTvZapzgW4DDjHkNeQeGAGE2hLeLPHrm6GwuKqCJALvM5GEKKariqiUfyMPK3ghY45GoHkwdePdj",
  "key26": "4e4nVbTK371mrUd118B4ayhDHnycHrDKkVtfR4mEAcyDofVtx27MEkjqTYWZ48saaUcWcAoyHxp1hKo619YtfNWo",
  "key27": "bVmz6evxPCAQMTxATBUhXMrmd2h1Ys837xuZTmdVfQPK6QQNeBPjwWZVe6og9kiGFz6iEv4wR1htYPmPhk2piRB",
  "key28": "5k2TjaAo3Yu9aSZxy6YiGxwZdwEihXfUL8AoUd12XK8jnAsoqhmNo4SLJABYNZrp6ACFt7siMbNFHXUR8Hd5pdr7",
  "key29": "5oy6PF4yderpU3hazehm9suedx9LG81o2qSrN8JEnh6EkbZmQSwiycfBo2QZ4Q2LLtno69DyzDy7Egy3Ug46bRPU",
  "key30": "yPdhBYT8VnRav3jMDi4Wv3122rWrzdgQMFj3LX7eG9qQsErk8mZzkuaSTdycrhhgEatERnfsmcYEvU3gCfovLwg",
  "key31": "5yF8iarfLqpNYCqu4GTGxcoWZZDEAWaTfajjTrNyYdYX18TDghvj4E9X9MHbK2FrenC2CHsvTmsw3EexZ8zJguzM",
  "key32": "37ogGuyb1TyRVEuktn8xAHNtVTXDf1Hp2ptKSRt8nSt554FtvkAawhCLipSMPodSdhd24UeUQjZJh5NxAfYhULVD",
  "key33": "mQGTHq2SsYutQf1zSCMEV6NK3hXJ7GmjPAipvokQAWadTQ63M2qor1qLNjdMJbs3JQHF7H6RoVFAHZaydYyg7NT",
  "key34": "2rqMaQYdYCcgCD6mBsRbharLDZ5mBr3NWGhmQ1RkGJz1ToGZMbeYmkRZVrpayUtvYpgUEbGVgmWaQ9cCboMsgRCW",
  "key35": "ERhCb4f8NhDZH9v58K7ryhHxkAvbyvCLYxVyq5AhRCbaVKvxZGNs6ueNRjtzAEYXUSSafVviC8UeSd1BTk6bwHE",
  "key36": "3YbknBG5yT6kXi2CMmDzKUYjg2M9oq8tZYP8jmAfpcQ4dtDeSjNmYj4TnjKjffqo64RhGnzdqmbaoA1wPjkSpiB8",
  "key37": "3J4PcBVzDWLyBE9iDQckxqmwqcJ3qkfp8Z33eXoBVjQ8qEq1RbLXZyiLAUFnD8yNvPy8wzYWVpKmPZfH5j7mphKA",
  "key38": "3VjNJtwfcUk4Cex63L5AhLSXcVz7AUZXt9VAmdd7fLA5xz61qR5Hp7jC9c8SCaHXkXsnarncmNz6UiFZByd9Tr3S",
  "key39": "pG5dCr1ekykNUBTVyFe2fSsrHjDKH5xTTK1DDdVF12bqPVkbxJt9ALaUyJkSLsw6BW54KoSQkgTeV6tfeT7oRZs",
  "key40": "3Z9NxS6Jeury6JxPEZbp42K4zoQQ1NgHnbmeJe7FYKh8fNdXJrhQMCChJ2Wmy5tdoTdC8w3Xni56dZVRxHEDWHTo",
  "key41": "5aUHj4NYQLCJmVMUtnfUpxxCMFFJLfqahm8uqywzEEutQKzbwhC5yUSNA9iBzH7SdpNvjCUPR2oAY8p1b2ANuvtw",
  "key42": "3sXetGYEpcZtHpUnvXN7PavCcRnKB9kc6stHTzQufuLvAo6HD3ebLfb1H4UkofC1Y3BqMAcU6q2J8TbCFtENCvzG",
  "key43": "4ivaSikeE5cYbHV9DNxsHqRKv14665qbs7XtC2haYZ9gVGPWQdZ8Mch28H7yHaDxMTWkNwNfQLyCa7fmEk5LZEb9"
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
