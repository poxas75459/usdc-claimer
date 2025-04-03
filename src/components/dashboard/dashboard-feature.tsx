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
    "63CNGvkmnNjMGz1BCEuz39wfkHHHJrrgXrAnrXPZcRr7JS1iBDNGULt6HBtmfgQt8grwC3siRCexA3vrWtHcJBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cc7DpENbrjZBzSmyL1WKhtCdXm1WK81kSgU5Yr855m2kMhCsctNosTywiZuBBtfcUU753LanuoWa8qh9VsizKxB",
  "key1": "3uEjW5bvaWkkm2HZnzXQRoAsHw1aEs6ADNvDXvSomzvMP8UFmeHp8zdqT16WZjMbSv8eh7Ms1iCByd5K7jL8c1vn",
  "key2": "3gR5ZyixQWQAotfUaBVxXZk2SqPrhT379xFWUo8YRTmdtTNNpLXyA8GvmobDg4RsZGbRqstc18r7p2fY8LxXZ52F",
  "key3": "3hyXKXztaR67Aag7LYDhzqFrEGgdUPo3zPUm7GiTnUWKveHQ952znVwhQ6V1YJZjmS9mHaTztKk75jjGZBmv2bEh",
  "key4": "4Wm8BcGpfdRP1QDX6JUxjL57FJcqL1zqxWmJ94CawiQt7TMuWHjQriQ5KPo3Wf61tWYcW1g5MEYs52cdp71FSDdy",
  "key5": "HJDsUzdPmm3pr4oWDnzx1a9jZDpyUwgcCDXqbApGqkWzsNz3AiZdkbZnhbYF3WfsFXp1r7L2yETDuCvUksVNmM2",
  "key6": "5ckjCTGnYsd8oPWsYfTnoYQxnaM3qJwxYtonT24DrcQdweW61KSia6M2aiDSaSzYcUdmPUf34vxHprLWzy2HuZF8",
  "key7": "47gMT9P82P3aGdyNq7Vno1st1CKtF1s1DQczWyXqc39T6KC4dj9dHULN7T1Em2J1WVPyc2cktY4TnPPCQ7eMYNSj",
  "key8": "3EUWXgnwtTSUc7GE7myTkvULQXBZc3Y4ZeZmmQ3y2xW1UaM6zLQaN4PFj3S2diCZWXGZPovGBmtqW7bTztVifMyo",
  "key9": "46KKjG8P7Y4DPdsWNksHEC8AwtQtJtQMxFM5pTAX9VDShqMFYgpkDHYu7Cs6t76Zj86wvR7meDhXLb2NbSz2oxgS",
  "key10": "5aYQeP7GaG4UJzGmGAnh1oxabxM7ArPQBJPnuX5TLt35oMusM4r6v53scutb8WPbztirmriap2ADLTyLcsDLRTaD",
  "key11": "sd5yS1HgrmLCdtocqB227Aj3BX8GfvNKSbm7a263aaJE3fkNty5vDGcDfSrMjZxyUQEPYPRyV5KRmGQGJm3pcpL",
  "key12": "5rcLk4AJF1dQtTtne9DcYzJGNEc8vmqymmVtTuRcArtoGY8YPUnb4Rcj36xwg4rRH4DJfakjf6n3rkfTBzuQrvcn",
  "key13": "6X6evb9TUSn6HHPwsnyQUYBH9LTfUJgU93Jdyo6mWntk8Ly5Ka1gWmQrkP9dNuTsQAUgDUpkzXT9zJ53cG9x2Cz",
  "key14": "2sERediHDJ2kEiycM8Rg9fFAQRrfU1pTBniar7ZDhn1NFrSKhV9BbD8SgQZGfqY2uH7puv5vmEtcF7Ap6JA8KG9V",
  "key15": "2ddtKqB3VXt7vqmb5azW3m3xo3qszUQnwXqfrwTrUncLxKKsVcXSSTFhkKJt6erQC5vr68YdF4bdyKq6SP3teZBr",
  "key16": "5zBtvn92kahqNV1JPj6AeoYr7dkcQHopbKw4JzMQdegQSqvARzKiRYnEUUcrKAyVaCjiMLf1yQv1uDEvDA9YEfD6",
  "key17": "5teeqkR5dAEEQSxTQVocaCYNjF5Yyou75Tjr1wDqzpiXne5jB4vPYDWCTKUbivoxCWRzx7u1kWkgh2TxPpHTTXpW",
  "key18": "45xadtJtMkRKMZcWzyQbWaK8Bg95jfJyusTGAZ5WmKE6kHqzLd2vCeCxq6dthM82UzhssGtKftZVJAuUrtRyykTc",
  "key19": "4WKUpSu2pdHgwh4pcsXRUEzbdfwSgHzubAS2SniqufNN7CJpnsgLBx8gnreZwtEzXvNhTNYGYftgBkFPk3GxqddQ",
  "key20": "593douzJFwGec1DJCsmaKnsCRcxaiFZkrait4vr7vTjwpDbfufvsE5e9ix1roVkspKSSLkzfa6QeLAZNP4ZmSuHM",
  "key21": "4wpEvFL13qXZioENwMvJHQqCKtLqtMiS1LJTUQ7wrpyXG3nBjWjppC5wy1QH7QWWNCkpXtWevEbAcDouySiZeLya",
  "key22": "2sTe1pHjLv2ZE1qPXoPtFc4dy1ZgVtoj4fot7j44vBfUayZTDLXjf7asWgcsdCaMpba5f7bxJ3FZLvLC1pExh9Cm",
  "key23": "4iiVKCGmCin8KE6QWyhX4C49aarXyyxyA7AE4tGzKG2xgohTdFTb9ZgFE3jNe2y5YfE595PW1kRf8PVgwCMB3tRp",
  "key24": "3ePW5w8kQDmx2RLx6uPvmN9V1ehBBKPuuY9MMrKmN1KTJFuTpk26zayrVjJjVk24Qep5A3kYW4iZYN9miwbrD7j5",
  "key25": "48tXSDyq4bdE2gDHjybFqb3wtEAMD1LJziRteTp5kyVia8FUG2VSDVcQ1uE3unKe6HCfJZ1hfj6wHAh5i7UH2SiX",
  "key26": "5CUHAKPDENPNL7ibQCbidexke7sgwQJTb28RtRoFmxd9uSGonVZed4UEfP1NYDACSEW47zZnYK1ou9YC3hEYTZxf",
  "key27": "X1GjmbSUAnsafDdQjgZRssAZ9nkptDWQgupLvc1qFihpB3kuBbVB7uykTwHF28dF3gV1BbT1ukBeWRGwp2BTSdJ",
  "key28": "kY696Txi1BKJJkNLpqgWgsPHh9V69WEc5SJpCDG1HPDLiUWGqrSLCawbiJcMNCLuLc3Q9qNU7r7eNWyLwQLTMa9",
  "key29": "274y6opuZkqCVFE2kzoVUh85wN1M882qrdCeou4uz7Hvk3foz8YM6DgfPLMDhyCZPhsawkE8g5CorZ8Zo84AmaWy",
  "key30": "3MeaMvQaf92uzmiLRZVasu12Dzk9dqQznGF1GYEYxrFaQHMogZjW2YaqhAgCJg5tjjAq4g4cUgjRcDyxABjiHpQ7",
  "key31": "3FUDJRCjvzDACk6pLxdKxna48UjJHWuT5zruGearVbLDcyU3SKjrA5T3WMdz789GqcshBvhuHup5qkzqSajj3LeG",
  "key32": "3qBnCCz8QV2sDrNsFGC1xxiASKqdezB24FHYBXZKS3mSCtnf3VtPWiUgeDCTF1m2tCAiMrRngzsLN2Svqgjmf2M1",
  "key33": "oAbYu37VwrcBLDDwi6wg3UzJwUyKNfHmHNxVyHqkAQrgEm3P12JpmvJTG5jGgKBKsE9qz7iTpM3jitpQr1vyqjd",
  "key34": "2ycJWE4MwJwVnYvcgYts4CtGAXTgZSqrwfZ5jFVu4pJCWb694kpPYmM8C2WQ1SMYFdcuAPeM9Lb4LWpHpK3rAG88",
  "key35": "2EweA6wCwubdvpNkfSfyPvjZouXonWGihcyMsNqRaaUQdRibk9Nu5Sg9ZXhVazti9SB6T9WiWtngSzAuL3oQw8Zc",
  "key36": "63QeK2rP1orjZghcH9KjkQ59QBV3BHJfFPmPbcB5TFM1mxgPWddYZtLRbEZ34GWkTL4c7KqeTCneJRq52zwnBApU",
  "key37": "2M8cZxpYNYQ8MsG7Vt1tTVnPiweZEDng6F6mDfYM3Q2did5FUkwGwMgaUHqfNKHBjaxdgSDPm4Y1mccSqAJ756HL",
  "key38": "hZfeDQrXSCZYfeb447Hp6d8i17d7zSNcsMQh1q9kM3CAmHBW19VuzBchYY51BBB4sd2kx9UNgeLZn7yaLMouyUM",
  "key39": "4YLZeWutULdP6Ne4Z2CKNuhKxxar1uDcahkbD6briP11GpvL1Stcje6hUkvZ3Be2BNxE8REJPjoAvfG18YtzBHxV"
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
