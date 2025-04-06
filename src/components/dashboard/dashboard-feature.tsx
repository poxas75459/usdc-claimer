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
    "4GLKqCqxecEWTXDwPmFXKTumzZWq5BnUWRMQASKVieaPajrKaw7kmYghiA4Fipor4CpnSEWb4SufsoMLDgtKxwo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEBeoipT71vKDbspHg2DunLcPXRTmZiHFhTE7f4sqQsgAaV7WBnUsroiteXjZ7U4nyAw7yZC2K5xdyGX42cqEMV",
  "key1": "5mPug8Q27au11TdHAHvWP2jeHoz1CiaNj1VXGSxTJMkZzE6ZeVbJqEhNmRG6CnXmHt8k6DMfifpxnvcuTxk8XvA6",
  "key2": "55hjKJM93YHA5Tr89TzY6npjr8mD9FzebAmY5H1hSPdHaXPWs61BS2heUXA5a2KK7TBMYGHueb4nLwt6xGxdKnCe",
  "key3": "42vu7Gu2qEmeYbAPM5EgmCYBGgDhbdwEi6dBe2hZoL67gtFqg5GVH3GTWFrZ8GdoJK1PSffVwR2LaTA9v3awuzdQ",
  "key4": "2zsNTNCdLyCnHMmMqn7rqAkbHYMyBvwa9rZSSCpGcjoadhr9Xcjgq6MEgG7fftvZChuqNZuktBvNfhX5M5h311Md",
  "key5": "4DDKetYoCbURJ7pJxr6ZbZScMgvHBbJHFJ9CDR7V3qeA7KBYYpv4juQ3KnwgCHza3QuXyJ7bqtjkGqPBtNuQRiVz",
  "key6": "2LdyJZ82yHKqctYbhFXik3dwytTkpoVhYxPftd8D2ykGpkch9gTTrKUEkArY82iM4cajzxdwHCpB9DkPLz9pZY9P",
  "key7": "3Erw8WetYsYrGrVcNcin5CncS58ToQzdh1q39cnyTPBAsDdeiLrj9wK4GFYDxFm8VngcKyGSwVsE22pxYoZ6dyCa",
  "key8": "zqxSjPT8299om4Q8GGqze8LMgA9cAvDoQ37AMWs75JmKDpo6DWxSu8vT1Bi4XcHKC8gPr4Dgm7A4pF54YvVF1tX",
  "key9": "3E9fZmC2JE8NPEnPingEZr66MmNYhnRyY1snJUYyke2CEVpdStXgF5Lgx2rorjVYYe2jBUC57K5mj9zudgUev8x4",
  "key10": "3FXab3Dfv9RNz5wYjYkYE79nUrmhFiRqreADcCSiHkP4vXSoSRbkbUNbeXZgg6N6Ryqo2oCdPnh1c59WZgrwQH5U",
  "key11": "4fui8aBnvZVo7ges8fUKpHyvzLVwtSq98HYXdG9HZN7ethuC7rnXGwtnQ6eGY6J1op5EqWwCUaRio9GwxsQMkAtR",
  "key12": "589WoTifAxyZoic7tJXFCSSu5GZYoFKfXUjeQveN17Cedxge6uZ7sw75d8gtg4YpaSyGJREWHHp7LCCQnGfaChdc",
  "key13": "4P6hacqnXSLPSgtQy1vqc17sYSUU2PmUycCa4bqM4MJqSkqjbo9s5DV9xYpW6jBxCfZmuTU5gLLJanQcnrcX1SK9",
  "key14": "3oqaP6c8G1sMHuUuFRPc3VaeMoWkx3DZWk8QDhn4F9FSa4ub1UvVSjhU75jo6FRAxboysMXHbYqdsD4Ux1aEFrmT",
  "key15": "3Sn33XzCAxfdMWFYsJwTLTTL5Nz3npfX8uo8z8rD5dsBmNZZSqHHT2k9FTvrYe7Sh3P1nbLAiaNvgTP2fXcep7KP",
  "key16": "3gckQhmEc76SQKeqyvxkD7fJbWHJEqaLsb6tHvm8r3Wj1fQ4MURuKWMes7eTbm1QRPRiuu2i6CdimJmUV7CZPQo2",
  "key17": "36Mw5MbRBnFPiuqnWdC9fa8xHYDanZ1nixvFw69wuXWUiv3hbRNLfJTirs7nuuMu3d2N6vZFWZbJXmozUxtKk9oS",
  "key18": "5HMr9KeXfXgx4cd8E6XtkRtGcHyTmwACDTSvuJknc1qvgaXUtxWk557SNemCviStUrtTTGjmDYwg9PNF7Xxe4Zzv",
  "key19": "67Twufxd6K3HSRTfEQsTWHmvjsirzm5fcRp4qaMp7LhiGUBhbfmgMF2Dbs2LdnLovxtgcSuwSY9YPAN7MWZxX19K",
  "key20": "CYWnNXPk3xMjcEBjRp4UDcCnMDr7VVisr558jWQEfQjaeJHwGWsaHmtntHdXzhwqLCWj6r833dQuHmznR8Khvn7",
  "key21": "3UGJiKTWD3dEGS155dPWZ34kVahPSaKv3CkQDoDCnmsGSH7wcREBQax8vm86wSrLK6d1GHyEjVsNj5oym1rnAJYR",
  "key22": "4GJNnWdtX78hHWGMZJGD4f3uzMpP4cFFxpbm5ZTRojjXWj5yMMsXumLGkQQeSV45UFm5WtdTzuzhHcttgfLDBUhf",
  "key23": "31drxnQEu3QmZfJYo15Pq8NqDgTndDQ1Vizj316h2tt7V7N3fKx7LCs5jK9mqT92D5MSU9Wf1vPoYD8vWJhR7aSg",
  "key24": "5Ct3MoDetASG7aaqKCGaVJoH2iPFYuPrBPG16QZBShuaYwNHEET8AYMvvqoA6cURX3GcmVEQdNymhwGDXd8KRkY5",
  "key25": "418g5W6trvcq8HHBtrSthEUb9f1EggRx8Soc7frUcpnsHVvBzkoHwJ6Cbae9f2RxPr1xxZnH3KR73qg8RX6no7jb",
  "key26": "F2asqekhiMsGSgtxmR6qWBBemFrLx7bCD2QCjiJPBA4PfdvLNwMAjZ4NDjVPfgjSKDEw7xZbavxpuoKuUXqgGxx",
  "key27": "5BeYTr6fM2i8cfegawfqTTPUggLDbEb4a8YieRPTgG3NtWLFv6xYdHPXxVwysM7dHPuqGxWb4685HKRCquYYMinm",
  "key28": "5nQym425E51VAXYsXPmyG4sB1hD6hjVYNU86cFZCbBemTwnQ6bCjvttNGWbdMct2aRBySrVLzKUVx4CN4bB33uJ3",
  "key29": "UV75pA6t3uxgw5uaxKaMzsRDUfqp1sCbj9MhtsPN3zvLBpFqCSfuiHs5DqSzdZ8v3JiUfHRT4hRdHfvEVnemAwi",
  "key30": "2nFAJwvFwiE8QihVi49yDEQCpRpHQxkHaVvAJ1o1BhEgETLQphhP4dpsDU8LbviDJN323KknRumTmX2Fajxi4yBr",
  "key31": "4bSdMffmmhN5JTfuCQVPYUitbvJZtkFqyiy5Dh387zEBtBCvfu6pJZwmRzjDnCGGHZTdcJmXRoPojJzR9GV7TMgv",
  "key32": "222isdRJH12cT7JJE5yX1Cp3Esh3xu2PGTCvTfUGvRMLvDxDEDAUJV6ZJuixR3UQB4gmPyou6fXJGHBsdXFPH8P7",
  "key33": "3qhr2JA3rHEzxk3REiFeYhQi8FW5KSnYV1u9eZaQmxibNVaUXp2tWqFfgc1qFRDumu96kxVQydMFQ24gSeBLpBaA",
  "key34": "msKPNsAFfbjyktUDxxcW1HkiqPGAbA94rTxTvG8v4qM3PJ2dSMoeovnfW9i3KJmeHx3NhmNozXPiu96byCRTyYa",
  "key35": "qySGcRuwWgrpj9bGBLLvDMbp67MnTuCgZQ9cnfL4Z9DkDBZhqFn2A2dKUGUTiVPEoid6cFNxNNYRUHKVT3GGqdF",
  "key36": "3bgBkkFe44FDLCEoWPgNT8Q9KXsS2r6NJqZ6WiAXMSYGbao5czRRwRwqQCuxE88BQk6CmATKiDjFLXBeSLANJMqq",
  "key37": "2TjayZciimCZ3WSFHaJfqaUt7KZdE1B47NnGMeCszpQ6hbPokTfrpjG6eGHU3e1TDE55JBLABoBWszPqo8TYdfhj",
  "key38": "488sLZdtqUF1WctidTSbikuWK1WPrQGybJPeyvJSPHarggttRMnxYjkpX13pErbeULwiX7yBTDng1fmztdzi1mz8",
  "key39": "4WWCHcfkFzmdV1CzLJb9v1jmnvz2zCbX6TSJWaSU6vDRatbLNzhfsWYwVekFWGfGRNAH3ApQjT1dvVFdeucwya6r",
  "key40": "3hbPPbsFgD16vdauTcdf89P2CRWPW7tJbvWryLnWoKK2BYkg986B7qX6aW255MogFgtSaCubS9FrVjp97hifSQKW",
  "key41": "5Yxzu1BgCuawfF9xwr45RbQ8bpXU3u2BUQXmmkTW9v57fKgSSnm9tfzAWxDPqA3fnAXEfds1XDn7UaLfdRpZnx3Y"
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
