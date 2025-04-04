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
    "KrGCKksaD5YHk4kbUqdBoWHHarmVSNA51r5kV8yQ1BpAS7fFFUsBQzVP6Tmygn34aJsJbsXTiJX9kxFeoT38z9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oKt3a49xaxSS3eiyZUvjbPCk1AtDtKcBWXJxpGgivcHBgKAXJCRxCwX8HjMkxPCa6LtZS8yS4rU2GpnQTvpbT7",
  "key1": "2QqBei8n9399pv4x86LkTG6cqtsyJRBppSs55sN5iusxDp23MSmDq7SGmytcbXQPEa2DF4dq37iXNJZ4VQFBEJYF",
  "key2": "U15PqT2KAnCZ4S7WZFB35FbDWxcFUtEB9k2voKJwikBhgWeY9UprfRp9wRTJD4xpFsZkYyw2jN9rkXuW3HPiXUj",
  "key3": "CPYkSA5KR9fFXYSwxRKnJmzoZeatoe9qgQ3KvvrC3ejkP8kmdFdrL2ptLwZkvCfv1Xh3FXDBu2ijiwLYcdwWZTw",
  "key4": "k4cJSdpWXaMi43f4MEe4T7vZ9HNmZfgKqyVKgmGWj4NNyFLBZiA2iQM7ZbiRh7JiS3G6vLw97XNNpg5ENSuqcRK",
  "key5": "3uae68YMaFqz7cnizxHGRrtotfjaWQA9n4MV6jsDiBodNdYtw6KEDkAo4F9ivWJscUoxydKFyePNqmHn6Bm9MgvP",
  "key6": "RwFxiqhHGno5ZZ7JJaHMsLpmsMNg9ZGReou7xpyPUSzVCUw86rMYeSrEVtcTufcZ2DShKSADEmKUn3cvw3ywxQS",
  "key7": "HvUXCFDGposJrcVhzwQJujwx3HzWATLk8rb2M5qNSCVzhoPcthnZ7TnyDzUUQ5cBXF8GcxfZUwVTtXd5HPka1SZ",
  "key8": "297XWu4QNoBa4YU7mB5SWVuXVjeeYKJSzwmakZcSs7GVwj2Uo38fHMUcqHuYvNB7omhs6FbXwM18gkRi8So9L7At",
  "key9": "4HdcFH8FZUNgpzncgE9otqmRLX9XnQN9mmWe2dAUVyukbFS3cLMGuT1vk9WKDjQQrpkZKpMyAv6AoBewxiZ9R1ur",
  "key10": "jwU7KTFp6jBiokwD2i5iEzCmDuJrvCFFrHGH7dG44SvjCQEiUos8Yg9DJNzCutqgBNfsU6BEUC97eFY4CoUTqjk",
  "key11": "uNCJScP7s8PT4HELcNY3328NRw4LpvqDdPmJj9ZtG7iztJncjviHouWFtPCHUofwM4rXEvcEYyeG9v43yeLZE1D",
  "key12": "4Wzj9DkgtvToSfKaJ9j526kVFnurNXmmC2qEBtswqxDczABGs8vGnjWfWBLvraU2LpgSf7D65TFA4Y5o99JuWpJ2",
  "key13": "3JX1VawbrR3drBW82yETsrx3dH6j7FZQDFWKbj7jmtcMTgvCjbEDEPTp8VWgyrCW5pffXiTURiZ4G9YREMw6XcnW",
  "key14": "3YbSFrvmBNNqym1jBZnu8h5X9cb1j36wg4ytujXnyWv8udYGg3YuWyNSC8hibBqUjhbiLgYocxd7qQWxJUzuAZoj",
  "key15": "3GxeK4cF4wMjjBPBApNzfSLFwaTuNS4HFgacdPE8F3JeGYTWtZVPSnoj1RTwyrmqhwhzcCH31G8S2iC4mLjbKsK7",
  "key16": "2zvTGoiLnZ7wMeST12MwyM5Xh35KGUwvwBJA5DGtubLkbFrhor5MFAuTSkNs1stQA2Twp5UAZieUa3M7XuHZSTLK",
  "key17": "2FM1wo7BzmjaNXjBZaNYsspgRUbHZViQkVeAveFREvHKNywYKK2UR5Msti3npagAhyZ5RAgSDnUUKNPC28amPwpv",
  "key18": "wXqgZLRwoXWk9LSswzeMhYi8PpiF5cbmr7RZSapPSrRtQKswabsDaCsGLYN1Hhi2TBfVGqA7YmYJEcZjFmHojpd",
  "key19": "5YQgk5o5GfQbj7Qy2aK9FEU6pVi63oSrTvY3oNA4RgXPh5cJJ3ynFjm8EGJt9doBexejr3XMhgbmvZd1Cw8XARmr",
  "key20": "fU4icWMfQuAYfbHm8HjhdQ3vLDQPVvTKcVNP41cjtVpvAMVEE4b71WqGB5g4tctrAq78TEEtkZeVLgXFXRBKZiC",
  "key21": "2Uy6wQ9hfJeV8GP75oGhoNtcmFtcfisaNwyQ7UHbbEPirYkZuUFLhgkmVTtb1psnyPbwodKNWYbPdCgKVJo9RVgt",
  "key22": "SJ7w7byn5xxgGKZ554NnTeLjvfzEBX1pJXzDrfYDwh4H3wPrR2i2MWJCjwCvwLWAcd3tHVVCWuHBt2LMHjff8ao",
  "key23": "2YwN6SpXbVyK6sBt7ZLeUsg7tALp59qh3EXhr3odHQtjbzaZs5dNJpciqLFP1bGWBc1LaRuTq3FLDDcuaAX6w654",
  "key24": "26nQ5mBoZfncMwXiJuSeE6uzQvfqjKnjLRDtkdf7NejLFhZz7DAgUkthKd24k4HJwd34bU5Q9a2s9Xb6ggUWpC3E",
  "key25": "4BN8VrGbz29uNuAkS6sSHW5B3hCBx9NjrBZCkD4aJvfBCBs7frLqYUwuPNkXVJ4LqwF25w66nZQK9KGUQ7wB1e7t",
  "key26": "4k6Tgu77E2DUqBzyFT4UP3r6Uv3WoxQnfWUnPpBzEUwqj8YfN7Uox4kGpnoGyuHkreFY5hLiFDB8Wc9gUQmD9udT",
  "key27": "4NyLqjxWg79r5ayw2NKhrYuSQQLBKnhAnYqgnbdBempdW9uQovQiBz82GqK7N3W7WSoAqhPfva4YgGFRCK843BA6",
  "key28": "5DfHtbTxpmGdNpZ6kUDajNWiREBQVrVzAJGAtdKfyKW2LWnLF9zLDxf85WQbQB8f6p7veDaNK7ToYy9TzMAhfeMT",
  "key29": "4uZ3ihLvjhZ8GAL3YTkHaxQCTou62aK9YvD8YZ59ozpgrjbCiRz1pA9gfRThvgqFQQNkXieDdxHLx6oY9rpuZMR2",
  "key30": "sXVfHRFkpodgTfBEKfpZNFTG1r7JHD3XrXTFmRywKcHUXC2LJKZh7Q689zyMgmRD2iHHeoYCzXUW9yS52WsNyvk",
  "key31": "3fA2PYj3W3jCka76gyiqnRUGBAxffXxggakuE7qFhGK9iKnX8pyfKeeDPob6jNFwTQJGCAzkMmmgyQBQFj7MkRwo",
  "key32": "4EBdLc3VqCMqYDuaiySwk14PnjiqHorKkBMeHHUwYSda7jjQuzm7U4smy3w5M2adRaw5U1Wff9UaKyw258DHwK11",
  "key33": "3U7mDAuQLUnxHrfrtsSw7bumq1euiA5o5A9PoRkP8WFbYwvtppgJqfNZ4LE26p2Pd7TmbesGivxmLJ6jorkfm833",
  "key34": "56oj5YpPcprjh4ji1RD1VVMLJSzeqeFKd4nErvxEoJPmRW2RAJXUAUANTCudetrUa2qj2knBt9XyFzEHYyXxV3qY",
  "key35": "KeJJ7yVFW2xSrHe1F6teLDDLrD97NZr5q4oDsJXc41pvymX7oXm5sd2BWxhQ8e5Gq1tnyJxPAF1B51cJyDaSkAo",
  "key36": "5EHsSzLdp3P46sfjT2RDgcW1nEWVmPgqNJNxtLUibQZE15YUEVXZr1xQ1XggKyYk8XbBp9RkNr8csLoX6w1YnKg3",
  "key37": "2d5WRU9iszKbaZESRfyfdXGkU8GrpvtqWFDFftUpVEvcS8cJQXXixetMeWUuyFXZQm1GtheBRaW55DuySL5LfPfU",
  "key38": "5DQzkebSok9WMCcdsYvSRCSPBRCbSjPKUn7Jk4qkV3HVaiehz9yr3xtMHwniegJ7Vd3bbBWhDGmGubon9q6LG43A",
  "key39": "3VxqX4vtjFdK2ed8EjMGBMpQ1a186CxdSMoNmm3zLYwchuie62WJc28tyXbxiKMCVEFwLpdZJKEt5QKHuswAzgdT",
  "key40": "rUjQACyvZkrRvAYYe2Ni6AFQqqbwyTFUSD31RMJdHsLLvWB9JfYqHvRFWMxPZfFuPjGaUJgmbNeEVqmCeXAtc21",
  "key41": "4F2gGkD6yokRGQSnnnRZ3XFCfRWPtKVSf1KoG6HTbeAeoJp1U57wB2vNn1aRUdtNx22bytmYceUdJE79Af9D2on1",
  "key42": "2VKKSLBX2twsbWqFEmNoUPTek96VJ4PDZVoVzyQibPm9DFK7bexAHxaKcDE8EmYYniab7CUXzHYAVmQpLMMSR8Wh"
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
