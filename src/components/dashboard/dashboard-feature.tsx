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
    "2mktc5QxsmuFRGrzvDjbeBKaMcAiu4hBTkZdEE3ZYFstsNCbYcPgc3Hr7MixE6xX4Yi4VXwmws2m2X9qkH5hQQFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzMQa7AVnnw8Z61kAXSwF15y9S9oRLmyLBKetbKF258CgYFWX88fcQ2Toe6boKsuhSUxvK4aHGNJLj9NH7Bq6kd",
  "key1": "5XaH93zYkzMeMuxzWtNCKN7zFv56eu3eRqc4nrf8raC4qaoA1kHz35Q6XmeCtiwV9XyusRRnkcjeZKAiTFon71SS",
  "key2": "4xFDE4KLqMXJcJ7FY6fKPv8NkwCaxtXorLq3EaVezKi4J7kAZ3nEPBR9gd5NwNJ1bCysNnLLDjjr3n8LRvHVVEWK",
  "key3": "45N2RKANufGKeapmyAPNatABr3T3FPW3JDjC4WxHCtSGr3e4SirMH3nKKBtxvc2TQAy49sAFCQiCr6xFQMcW8Cvv",
  "key4": "5jg9v7V44cXKBZc3z1MocH3EESkMy8YLZZHc5wuczsvcnAbhPDttNymJkdhfwVzftEFZ28Aa828Pm3r3NGzu6wfH",
  "key5": "2phdZegsgTvbBU3tmKAzrRqAVhcGBv7Yw7NfZnP1g9B12NaWZDnn9uWbdbc3UhGXthpV74rAruXtsKDmkvyTmNQo",
  "key6": "4mjgS97UTPh94Gpt259rQ2W1HzBWki3urHZrnDJJBDXNhAwMWSmtfgDNQKTPQ24Ygaho4RxgCwkgsVEJdEZcESRa",
  "key7": "4AKe5wA2azH2Q8DeKGs8Qam9opB49znQr8UgUbLEnxxx45N8ZEz8twhXnQ7BXZr6ZPY4psSoaaf9nCuGsnRrbjQH",
  "key8": "2Z4A4s9B93Cdg1UGBFdhpVQCRAeR9ZExmkbZYmcHVkGkYJjqLzTXmeweRF35nYZgFyBSqeteoZiY9BHqtQmqX6Qf",
  "key9": "5jVgD1nA2Dk8x78iCYuRsw9SvL7J7G1FyKhLB4jnX922KNackdegaCKEDy32g6oZxvTtVV7uDpyQy5H4LgbxiNH1",
  "key10": "5N5Uhgm6EJkfStEsjyBuqusABKVRTXKAdPiNW6Zve4re19hwYAB7K8Gp9qjj7GbCs9p6cadPbzGpyMkJb2j9PgSV",
  "key11": "YtteVGKEfoafmkFqQnDEhBkjzgGvGEdPPDCa9onDhA8uTwKfLXEFWa3UReWe7uAj2M8FRBfwaQEHyP5EuZaVrRB",
  "key12": "9uY1pYc5p1gUumeeGeXy5uBt4BF2ECcvnPuLrnmgLjmwYrfdkZhUYxSojL15y2jFdyoQMZFVnebcNsDwJFftSRL",
  "key13": "5mAQx4ADJ42ueE2E8k2xm42xZVzZLBR8y1Hdh8K3SZEpVBZg9fr6tXkoYUhh77w1Q3v6pYXkV1FcWYYg19ckYEey",
  "key14": "eEUduNk8xFX3sQjkEq2dvvexEU8xZatM97RUaV3umVcMUn9PymTCWXFZKFg9dgeMXDsKyDH1XPduPaKapoFiKpK",
  "key15": "dZSr1jncgZBfZatiYgmrw9QrLxiMWYr8GA8kFUTgGzf8jWiaWqwCm5BUDGtUTYU8TT6cndMmfSc7xVUXH4Z7kAH",
  "key16": "5HaLSfH8DBAZz7rq2Zce6dFrzGahwrNLx3S6nHhzRtdCNbPhYHJvLpvCwzvBLMTthSeuRDy6Eiyadi8mGXwxGpaK",
  "key17": "3dUtGBTgNKxCsWtz6qdipugaHPHdkLnNf4GuZ9NVKX5xqrk1JqNzvnZsU26pTDBS978Zy3K9b7hKSd9HZWSUoZHP",
  "key18": "4spWFHLNeA3qbG6UwoE9mynvjqjPpgKtbDftj2KaeGH2H4g3feGUpjLkMTb8hgaeZy6witxwDg2UwkvwtW66VVHP",
  "key19": "3rD4JNtpdAgpVwhTvXzoJFns1xqDowRtTBcnvWMTi2Z1N3xMaWyxt5ZHaAxmxcBUvrvqUikiCGkPYmyQa9G6hNGn",
  "key20": "3ZKQtvGwN6db9NV2eV9wJeEJK3zadGbnb7Pse3VV5JyJBLuQKfpGES9uKD95DkeJxDeuo1XfbVTLqcNDm6Fat3HB",
  "key21": "3LjPS8m268jr1JLuQMnZPJqvUXdvmVY77wtYdvkvaEjL5EvHbPpoK2BjvUecgqZmFxH5uSFG8seDdn1rvfbH1gKb",
  "key22": "3raVzfsU9DRFjhzitpEvJgsQDQVvVr7PtucX9t47vRAgKhhd2xBSjaHJMKb3EbeF4GgiE4RkzAJ4dUds8Gc5suFJ",
  "key23": "r7q3g95ArrmrfuWGHy5kdJwaVffQAhkwa91cK5AUYCfScV9vkAmyRbb4CG2K8gyaiwiQxRnCB11jj1uZD5NGAcq",
  "key24": "5WhEVZEoquTCfGcuxNvhbYwR9oA1nLiTZTrAwSzPrgt2e9a14hQBQP5wSAAVWVj12DmSu7qJxMBBgJ66KmvcYmpP",
  "key25": "2X5YR5ayGsiDBB8ubmEHyhFNhnHYC1tJ2r16qWrMX1Jguaa6sKrSMnU2CH8WoQ788Xoxrgi4TybMuAeqnAq8uaqe",
  "key26": "MrYmB3pqN7LS4iMSA6ncMcEcMYaMCdXbuJPNLVwsdbXyGNFC4QiYnhiBPpTwNZMM8fgidhaUDhytdzoVY1htVr5",
  "key27": "5oDGAC6AEDunKh7uf9bH8vYFaZx4yPjeQvvbTJFJtjd39VURY6q979eqnsDkAezNUA9ZNrDTf6MWxmcoXGXvf5LQ",
  "key28": "2dqV642fCBEByzuaerg5fYq9qysmCEn9FekDrrvyhr2mcvAYmfx7o6paPvepg7C1BRNMDkJRcWgi8mckd16LfjXF",
  "key29": "5djQcwgeV2JLkvSvzP7RChWwC4z8PSvkhXibfHMRfbW5ByB4C5aY621HzrD71bm5vsxH6zvc1Qr4uHVWnckueDVd",
  "key30": "r1FxRkpgSDeyPwFqbCaCDAPyiSPgbDH7mm4BtRZFGEYbWrdbKJjKuwEQcbFQPdZMZP7VRS88Kstz2QnHNPZ3S5r",
  "key31": "v8Uk8sdJhGzcL177nqdj5XJFzKr6XbXyPVasZoiyhhzoN1DZh3Yo9a15XCx7zHoMu7HFRPuXbZM3wWw82kMBL57",
  "key32": "4WoZGNcf5jFjUus62ekCUyi1xngJD1HZGoYWk1p9U3bU6DLGkmK7RMeHW3dPCumfWiY5oT4mkCZ8SfhVNV5pVcko",
  "key33": "2Udo57CgPuYXABCQHx4a45GvaJJfGaqahfTjKuJN6wW5gfXwYZigoLdwf9UkfoJvmQaHy6MK891pz7WAKNjhtQq1",
  "key34": "twXR3BFVUbYtHbv47vDbbQpY7xF6coB3UerstQDbdSDK6vwDxbxEYsdMrtqzyuda1RKFVYiNsn7L3JPyubVsFYK",
  "key35": "4PJ1FHtf9h4Z9D1KRy2GDXtbPbY3Zua9G4fTbZXVNgN8TGv6BymaoisHV9ZJMZqrbBU5xC4MYQMay9MCEuYgiXWi",
  "key36": "28tdrimuPRqf5fv2DCTnMN9azMerQaWvQ2t6VgM1UjDJyXUX3T5ExHR2XPWgLhM1zAo7KRN4VHc1cfuzx9y7LNYJ",
  "key37": "3u1rHMkPQaErztvggLeHhZKPRKeyhr2BfoooDKZgAADU7YodVAY4MjNCJcmTu36EDMCsYWdoPWBguCzkYtAetFqw",
  "key38": "55SqFQsopZAfgpw8dRDmV51rpaCoG1gFoe83X9CbjMEPM1jfSWSMpDZXRNsPCxysSaUJxCxP5kxuS581fYSpA7Mc",
  "key39": "2HBqbAiBvyMNv1MJNAMdJKm8B7U6vDvJuD5szwXmwSvQRLJUyjwhUM5tiBDwvJ3jYysYqzdLTrfGajomnjMFkc7u",
  "key40": "5ZZt7JcxsiK3e8Tp2BoEQCSdvh56P7SmuJDkLX63JaPtSHENt6xasGW3xAkaezcnfdhQdRUbJR94verMyLjHQCd2",
  "key41": "2ZsnZ6nwo5Fw4GLBdZsZB1pxJ2DbkGR1gprWYHcTvqWar9PCVXB5CQVEQZ2ioSKSFjw4zLmt8cBbuAhY7MCVGPJb",
  "key42": "5Lj92Tpo5DqKqwyhVgR7c3wVedho3SRm9xn5emCTipEMLEpjMkXoZJfT99yUjtEUW3egChbkLvaRitb7zc1WeLDa"
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
