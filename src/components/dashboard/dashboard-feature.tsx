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
    "2fWhCXUHwTCpVNQDQRwSe2RqFZTWURrC4SfKsu9xXGBt46cp178GPnrZ8VGNcCsqxWK3igR2J8s1KTeTkXp96aoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oaN9XXhuSmpiNisJr5edKx49ZvjLCz1DuzhN4Kyw9nF2QmYZjb36chsfjaiCodxfacW7bXTQJiXZzjv9EVbohJn",
  "key1": "28UrPJhYK4GavLrV3ersoa8xS6XBeNw9K7C67XckG4crd5Rw9YcBLTgpGh4FgK7UkWefsR83qYXEmsyvd6jmGAqk",
  "key2": "41aPhyoybfR2kBhRwCEi7kWPE83hV4H1n2SzmbbPFBfbH4Zi2pcNPb8UL5Qwi7HJ9EfuQDsoT2pQ5QXo1m1F7E8g",
  "key3": "1Vuwdfw2kNc8N3Z1qgEHByZrZpJ1wizipRk69tbDqLuyEB83a2mFRRdqLfeKSvrm4nmBSYUS8CCfnEi8QVsdvAx",
  "key4": "2SAiSCSf4XfEt93xt4ekDPAAbhUtLLstrQyFivedupRzj2wpuQ1i7WuGKQEnRHYyzfS8z21VvQEmyy2hEFp7EeT3",
  "key5": "4wWjt1hmsHK8cpypqqAXrR4TE1yNtA1xQdQXZgoJG61dPiQTZGcaxQNqiTMneczGURkHHYPcoWb57RR48TrWRgxb",
  "key6": "4GYWdN51wGN4hTaPA5FTdhyjRuKeasMBQpuazRVxfDHrEccpPJRTkqFtiNgEzzfWizsoCqGDKyut821GmjuQYGDS",
  "key7": "3mJjuH1S8gCFDxH49tuKJVss4eBuWsxDEDL1p8Uo1LyHUZ79y8ALr3LSSRNQZmoPcon8XPCqMTAF3cdtihMAhVqr",
  "key8": "2hHew7ChcmyvmtiM6Q4hgSbfFY2G8zw8G27Ca6wWx3cX5i9FhzmXD18RFo8K53wbHg6iP6ZNPnL3n6TNDMRUCEgG",
  "key9": "2uwF1JsXFyjLttznKkWEMXTSoYnhZ22FxmnjocqVtsPBQ1uRy475WYS3y4ry15CWq96EEjAQbGCM7jGLKbsYxMWG",
  "key10": "4HThhYtgcTeKeaaqB6w8cftBE8mt1kbYNp5TV4LA9jfbEZcAr25PCEmBYdiTXaVZgMM1LQCMt3UD6hZniUFPsGpJ",
  "key11": "5C18f8eGDcXLk7q23YfVLbGNfHsgGzWjmEYXgrSozyb5hUDKRg5Vz2e3GEokMre5eZ36vfUfTvCC1RVztY7LfWWZ",
  "key12": "9zXhKSiYvtPTZXQeoz5G6Xj7GqpwvaCFjcyizEALxarj4vDNiyA7SXPXZ3g9Hur75Sk2W6BFkirTwcqSQViMNZw",
  "key13": "3863A9AssPCuehmnZ6kgzJud2Vq9e4JFpBm7LZkhEsDCzaXmABayjX7BYGBUs8Wyvc2SaDdoUWqhjFyYDxG1ym5N",
  "key14": "ry95RDTYNQ7kvJe7Qw5pTmJCuMQpNz1DLoF9QqCskkZDjDeMRvjEwHhFn4GMN4nr5uMDrNX2ozMA4Hvt6JQM3ZE",
  "key15": "284e8kLhdkJwyZYZ2YAuG9ZwD3KwYaNPdCzoYSKAYvntnfi3Fe3DNgxdAqyxJ15yL8cy3pGtFuGbQV77yMpQ3ceK",
  "key16": "U8EU1vK5UuPKgZNCjqjDEZg1UkGSnhAAWtApo39dMSFsgPc7kutw9geVLbWW28SDfVWnz6PnPVqGmDPXt8DJCty",
  "key17": "5GTPsMun94CZjdra5ZFMgG3driJJFaSzuhchfiMyRLjq2vNwJTdjdCwxXUHA5baMTiRM4VkUsDY8naTXb5R9uERy",
  "key18": "3hdPascBWZMKBB8Xfo9bsntNk4zrCFeqR6GuoFeeoRtEPFbAkmDVXKDmEjDgwczKfbeEH7DVK7VRzXs2Gey1kZP8",
  "key19": "3k7wCFBecsqN7ogLVGR9ZNbdVHh86kGZYztkJNToCz6bZe6Te1BJbWVQjJ5u9Z4iR2dDhe76EKZmdcRswVBR6LPe",
  "key20": "v14wBSF5sJJhxyeWSSd47yfcQjNAi4Hz1cvnm2HyWRZy5cXqz6RN24o9AaaF7eBkmm85JQjPRyEF7EFtaFLvLBE",
  "key21": "5LW722KGDKGU68ob4fhbHNTzfGT3fYa3M7dfpF3DrFV46WEBxUZ8o8XuP3xtbmCTRQoHR7fv3fzFd1sr3A17zRHy",
  "key22": "2JRgmxXjDTmnGZbXq7Cyn1DF7P1fADnWpwbcWeTMU4Xu8QjGjMuXAZBE9LzK2pvRyaYgC9PB8ziXDNBfnDza83Ah",
  "key23": "9NiTJ56TvPipPXC78bTC1VQY5iSfZ6b86axTKw3VJ88afNVywQxWEZCzAp1fh8fx4f8j6h9Z9y7MXNCdSb73gE1",
  "key24": "66BG2PkKE5M4CQk7HvC6jyunEPrtP9gbAeZRtgWWJD3Y4JiGuv8LyGa2Wbp2QauHzZsAFDdVa9vdhnfXLkAnq77M",
  "key25": "4a8aacjUh4FzKXFgdH1TmNMpZo781M9JKLsS4hMJ9LKxhh1mqprVXTNw2QkJQnP9FhD1V4XQExopCikejnv3ZiLS",
  "key26": "2FcwfnJssxs7dafpexvnjTaEwVUq5rZAfJ7CBoQqbKkivjJArS23WLKavgXRXKQpwcSVGuWEVtxFCL2oir4BN3uL",
  "key27": "2xirM44fp91JgVX256Rg7NcYCp1z9XBsrXaxkxcTvQgHjpWjnfTPSqurcV5sHYiZsGdxPBvv4WX1cfP6oZUSpvih",
  "key28": "2TDMQAhNt2Spg83YdYS8rmFyVJYqwCDo1BYW3j4A1yvpuuoBESsLxJQUVZEsy5boeWMm4bGbAnvoRpG21HtTBTSz",
  "key29": "631AfEM7SWfmtjSqkUhv4gLg3C7Mfu7oFDYsbaaMvgw7FKWjyXnPCjAbvgQTCNcVLL8zBpUyhEtc5i2znTmz1YGU",
  "key30": "47e7YnjYsYK7XCMYQgNcKB2fjjcPREf8VUNChg4kLa4Y6w68vCyzfJTV8EduMaZteK3T7nUK21FaoFzEVbxwZ8ao",
  "key31": "5VivfuhtsN2QdPyvrUNompBMbNQHqGFtkjp2oPtu4c4AL4A1tPhMiixQMU7fxf4AQz9io5cx88Jd3rLYW5SQizx9",
  "key32": "2r18Cqud8e5dmy1bbmdUrDVeSaXKFvKVPheq7JHnztKqvmwCxhtw1Yzk8xzY9NMPPa6HPcocnLcYgUWWKzZhEv1A",
  "key33": "5rMrN4meezoKEpJGJNRfNbuqVJx75emJudWqCQ3oXSyeNnrytBPgzWgPpDzVxg4CYajKALC3FTqd5q9ha2FwGtPG",
  "key34": "2kM3JJCyLknJYP5zjRSoUHZDXiKLThguXaocY23N6H4Ai8GjhoWs8rUtAxzDMMvSqqcjrnNy5dN83VrMoJ2Epkjf",
  "key35": "3m7JENDEzXqrfr7s7VxoB1hBof5icozjEKwmfgKt27kW3DBrLZiYGx6fXohY4ALiur5iKRu1z1CEioAUD333dhGR"
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
