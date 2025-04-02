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
    "4Jq3ZdcQMcAkL5L3hWN2QCth53KosXjJR14a2uFuZrNrYGTCgYfDsWopW1USDVittQajt7mMXJvcbtCBxEgGnUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EecFWA1dHNMeUyLnsRyXXGoxLFAUiqJZvvEBofMLKG9CDKCZhjFyzcGpYhVP7MpprYRy99WbhZCC1wt7CTVbzdU",
  "key1": "nBhnGdEUH27p5Xj3wLWtwiJz8Yn6nqngCDW2sy8pdu4K7umgLRduuxMojEE75HeBN7diGsPoQSpBpabvKnhYp7M",
  "key2": "41DyBMihZnCELMwGrfSiZx9wAHSsdDfFxWBnhnErLvKiHZ2S5nyruzySF9tmiJg8igqh7ZrC9aKeSQfqX1xwF7kx",
  "key3": "2VUhDGtL1fKLdgChbebvtun7oWmxBpsaThEpzkmjqyhE3ZSWhoB8voVxRtrH9yTKTHGE1bLGwYRh36Kjpnozn3Bc",
  "key4": "4tGfwdLh3FrZB7ifvmqom37F3JToihgmPse9Xyd9axJJUTHke3266Ww8DF35REiLxKoWcupcggN6xR5Z4GFAdNuc",
  "key5": "4gh4YhB3jXxfKTFTMj3RtgmtroefEktgXhd7dST5ibApoEnZx8ncCkK5BFbcWmvUeYCaDsGF6dCKESkWw3a69QDm",
  "key6": "5ig78HakRHeDyfvsxPUtgWw9bT8MAhRyYK6DGwgK787hwSw6T5mucwvHNYk3soFm5aFreKqSZSTtiniHzW2m8Tr",
  "key7": "5tx2HXxqjPwR68iRVVnmWK2FAgmM2CjZT5U9NcRknn26bsTRi1i8g3KeiAFZ13AFX2yDkcvJWAxBVTwDhE6ebQn9",
  "key8": "3woqzq6sZhkzTGd1LwGqPG3xLc3DJChmwBbhkC21KCkDe8YYbAKcDFqcZoEv4E57NFs384aRzikxrBDwMduk2tjk",
  "key9": "qqsq2fU2N9hEKwTsdT95s4cvhkYD1CqAnLsn6knpS1ZQShqboPPJRu39U9iM3r33LwkSpLy7MvnvKZwWjjJtgCe",
  "key10": "5XECc9qFVn4fFWWGaFjmJRo7c429TxPHqbqTTmVphBUQBNjM7NeeBLgunh9r4GJ6Vsk52jEkTksWCPZy3jYfkZFL",
  "key11": "2CxxiWYhsWWQGSnGquNb2pFAxTxatyu1VpSePyoW99PasP1978vF8LewzaWCv93CNFHLnqNP7kRtc7sAUSbTGjfH",
  "key12": "4mVcJGgy74Rgkxvbg3yTxj1TvfoSfbLMLjivn8pB277YVZmY1RUFn5B7iVZdrHBXV6sKj4UMAaNtjrr22RKYGVjf",
  "key13": "4nZDNVZjkdV8AbtU5Zxi22HxbNzttic4ZAPskg5EBXkPhR4zRpCQqDJqYvfb6KEoGLmWfzeKrE4pviJiGNLqi84J",
  "key14": "4yVCgHstFhqAhGeG4YV9kUNkVzipZhkS5xExWB4RksEc5LJVLqqeWs86toTCi6khP8LGUQZG4XaXJDHPBRyepRs2",
  "key15": "DBgHkmMjaUULMmTKgj2dENukDN8tkEr2WKzLE3xwYDvs1w1jtJ9rprUr9Zk988TWJKhRPkkvPJguztzZGU9zncL",
  "key16": "2ZrMtLokt76cZySY1Ag6EdZbe5w4ZDedKm1hNdeaLFu2CTFaZVEmjMVmo5nhWxtMNGESzvgAzxUnEVwebHtBsbK1",
  "key17": "4EucNTW96GmMbF2FNNEfXfR7A8y43v4agvm56euZQQEj5BLSft2Zx48mCq6Xn5URVADGQJC5pPszMNcJFJKX57rP",
  "key18": "5ozedxUKCN386eCgVqmY6w5F9fDkeGmxFkPdCvEsCLiemwL2XaxuTA4ag7F2fefpo9Q7dtLuaMUtNBsuMzngGknG",
  "key19": "5V81r36pzSFdTDxUR6itj83MYTMT5c6viQkd21HT77omBXJuAzCw5m98FG1Z2xZABcbTosbCMHC3xUdxrYqqrWr8",
  "key20": "3L7jjHAwUJoAgp8epkbM7RtuGniTDqVQapThtknsoPQzo2DWcwHYvhrCQth4zoVhWikiHL9ruQEDGkUKdTN17Sdm",
  "key21": "S4xWqfxi1zd7gHctonr7KWi3qjwruEfbPpfE81PvGmo9HhA8FRaFYckyK7Ve2hhdHrfpHc24rRHKEAiMEeT625o",
  "key22": "4v8NgVUi2FsHtCV13eSp8pnLR2NmiVY7Xa1FvnGyBDAiuhLx45gvCkkcEEd6X9VsdAodwzJzSQ5Jjwot1mwsqS8D",
  "key23": "5e1SztquewmESuexj2pyGWWyqZccWr9wVS8Tp6HDvt1qv2NvG1HfbdSs2Kiopd8MCarcSUrQ6LSgZQCHaRiGUeom",
  "key24": "2aKdeYuAPBZwngrNnkrdZ7zwot3axNYpMemaGjEPfh8jHesbSWFiKf8fTtoTLzA5DQaLwkcsmYCz5y1cVeTwUdF8",
  "key25": "3C9QULAMHcUM7oPdrMyJhTuuuLVkKFUvwKACpVLY286FWuRorvFTfzhT4e9uJ2TASM6PfgpXtmTrCMSrtWJk6nqj",
  "key26": "4KyoUTmML6pfsUdKg3RyJZjPgdD8nZFG5bmbxvfurVGoz3McBMm1GrFKZg49pw7oXBMqBL72u2J94xAqqo7grv2d",
  "key27": "FG3Ny3qHa5dTG9mRzyKeauBsokM6H9SCaQx85VKMhHPQQ7g7Fn2ek7LakQxzx6omVL1TKK2TfSKym8Ne3514WvD",
  "key28": "5xfcJ3dRzJXHpHaGnXzDYQQD5GYPxdqEYTY6eHWwKx6qQoF8BksrdhN4XnoJtcRsRGWkUmxsBg5CZtBQANmpexYx",
  "key29": "UaKVS19oeBevhQWcrcbyi7WjwvsopnVjB5foXXNciq4xmLEoZjT3j4hXQGiNsC57yfy1pMEzyL33QtWV2x4C94C",
  "key30": "3BLHNjxjzVo5cFvxe7VnYwdhUZvrWb1DzXtRy8ppytvemUTwh27LdZLDmr4BQ3xjEuKRTVQ5aZX2h2YrEnMSnCcg",
  "key31": "4PhJxfKvr3PPxgitedGTmMtoNjDy4vyWybEDu8Z3rdpeS3LuE8itb3ecV9uvoLeaeyVu9G9MCF7CVmTuvjzggGj9",
  "key32": "yC7fhmLjdEhPixKpuaZucQmnjMLBpfczRfbpfnGsw3xLus4XNXazqZypn9X7xbgUDRf1DJizTC35ndmdGJsTPsQ"
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
