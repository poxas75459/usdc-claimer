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
    "3nBaqJkj5AwchDtB7EA5qu4JiGuW9JLhVbgdAHvG4RrPRBfx2TtrSAyT7Hv4QxPJxSbGcPPUReUHLsGSyrdmhnjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "To95yrkYNLWotjZ6fqrmnzvQ3ahRdrKToVobUsW3qzfV5pGuocbwyYDJV88Vff96Xf1WQ5L6Mmz1RHkuRyFZ8PK",
  "key1": "3oH5ML4G8jWPVMa8MYrYYcuv8V9gi179rPgcvba5QtLJSLx9em3kXii1XcdF2JhkB9JzWY4Rfo2FWmLzfMveGkDQ",
  "key2": "4GabW81ByiY5jSgvEaBZ45mLA1dvGoDVJNPMBcZ8mYGZKDztBRbys3EfgRV6g3w6iwUTFP6APmMDcpMC86AwC1Hm",
  "key3": "3KCH2NHZbkSuGaVbVGGwpDjg72HJPqqawHfHxvrA2KfNj9ZhBdWHtyUG8zxRpDJ6pDzH6TUNRrhnGfKYrftwrewU",
  "key4": "iZ951AqWTrY9Uz4Xnvj8kkKSotafj35qD3qLL6rcHSQSkHB7bqP5iwBKLxCWBchJFFAHzGdB9KJXvgH4Zi4kPRf",
  "key5": "4uZKw1SgHEjGRhtmKnjTKCgWctF4KatE4pHPDfACugCDGK1Gut4HxXAYfh3tEgqrtuSVR9LAURhUp8PqsQMnFNmq",
  "key6": "3iDvgSHwSZGNzbGgAu2P2yryuMpumZjr6BoK24Mj1nQJduRAgNNsb5nH5p1fc8YRSevQ7qL7tEifBhMKLyEbJrwx",
  "key7": "KRjfN6X34psMwexNecXpJrzBJnWrJPFFCcxVRjAPi7WVXM9RCTRyVaKBGAwNDBZxqQr81HaDaCQoqAdSPdXipV7",
  "key8": "473kukNzofs3bRYEa3doiywraGRknRVzjYZ9JQBhsi6rXs7WtAFhhbqwx4DvuMmSJHSUq4mt2wE43nmCdvsMa11v",
  "key9": "vrYtbMjZzSzvhWm6qL6f1wpQHZBAJrcZvjJFczNiQjSqg3R5WaoExASMeNQSzBThcpj2DWcSpxvm36pwsVT65Nz",
  "key10": "4PMbqRRKc1dxv7uJwJp1YNhLNYLPsy6TPBs9s1BhjyHMKcGsBj7WtnyX8WVxtfdPwVcyJWwrvh5h5qDB7q2MeLKA",
  "key11": "5FtJemubvvN2WSdA3Jb24VJ2U9TsZLBLeC2yctVPVtUHeAnNqD9A8igP4Tw2PJpfHGo4bTcGpkYPAJtuXj2V1dBk",
  "key12": "5Eb4vWhrLCYf83xiCWb3ZckaQbwQSU1MKsPNCUjUA4NNWpKe5XCCXbciYFU6aCJseTUjsTuVFVwqqgkcR1RoeskM",
  "key13": "3hZGHPtn8jLSXYVzM95iC1XpzzuvrZbLkfxJDfSuxj8oQMUhyMNcWj7bkmgnAc5tGzi7zotwN2DEg6Q8ipzPoZSj",
  "key14": "32m7Z9hBbugqT9tia6JLyoPDjtxjG52JCB1WUMoJKEt1W6GS2AJvtyvBo8L1AAhjYsCT5EL4QGNGVzb6TShi1otp",
  "key15": "4kJbzCAFwdFf8cFcLan7FxsCnNeqA7ecPU7B1XVSrc5QxA1aHhubeRQp7FU6KtNJxi8WHVnWZiouzvqLdYyTn6Me",
  "key16": "4SQ4rmgDGyjQyxgno9yGB1ocpBhuLXxiCJBG8KWwkCfD5fxxHKfHzKUkzJoBAvenTKwa1aX2ZD9pbYxzYzrfAFXJ",
  "key17": "2HSk2jb6vPajUbumwVHbH2ifb2LmeLfG2F8W185goMXA47SwhWbsW7rfZSEhVoqKA4m3MXtDZDzMTK1VHUkoVHeX",
  "key18": "4ZoZUgfmeBMFgY4VkJqfmXVhCTMyLrzy5CQKzkqn5DFq63wYsXFUM7VfxQETgq7NpPxyiHMm49D8jBPtM4STVjR5",
  "key19": "3HgSV2Fci3rznmhhY5E52Rp56nLBJWv7DUC4JCMXFGfP4fNjL4dTb9iBxEkvtWUX5ZhzHHcuiER3eK7GYHq62c5H",
  "key20": "2dtv3Grs6YmArn3JS5qfnkfrh4wNV1vsgAUbPJuKwLPbS4AJCrzqkjuMSQnJoXmnRiBPiywHQ6fqBXbaqTPJupuc",
  "key21": "4U4qVGs2VeTyLD9JZi6CWArmfcSn9KihX5t3f3pGS4iJQB3umaEi5qTnCgpTEEkDBmvXPHYyQKDraxwoNaG2n7nd",
  "key22": "3hbN9HsfhsDqDWqqfk4MvfAo8ijWrTAL3HuWPZxe7CY7jBLK255x4zRdfJxiRbH7Cb4xX5AffSmG2DcmZZAFuS3j",
  "key23": "4hG8beFuoG9BEE2WiVyEGqGQKig85JZgX7F3nYVwFYKPsq6cZLcHydJ5jQDQaowrWY9yt4ivrqRN8HyTkZPkpHnj",
  "key24": "6ju85Vj1JaBVAsgRS4bE5FBiMZZwxfPknJoktps7fpdqmF7z5UBm8kkPV4q7Wgj7vWFFzosvxr4X7ohoQZrkKhY",
  "key25": "C6wHCHyThaB7ZfYfzUpUbPwoUHxsZ3bXUicrVWyrPxutf6k1M7Xt5WgUJqrJevjXNf1mUmAeBx2AqJi8oE5QpeF",
  "key26": "2gYce6oV51GTyTs4vBryi3fCEQVfStkDeaetwaQ4JdMLkQD8f66nicizUJAAWoP39MayGJ2xYtJn4aq6FjVthgEH",
  "key27": "V8zR7G9F3g6GqxFTMxcRCXh9guCLodUvjRLmBbFM3kGprCdyYosjLDHCha3nHRiGLT3PvmePCZatKim3AKDJYzv",
  "key28": "4z9UiQTKCGYhxnMeBj7zt7taVwcPyjBcAHDweuLjxHuZHg4bqVkhvoABopMj4NSHHMKFFvMYSYjt9DWJwcc3xuuq",
  "key29": "Y7vyXU5acDRw9WU5hZ9ZXKr78ENyCeRt4SR2VK8E2gMqx1riAe8pTm8UdpvPv7XKZf6Q5Mu2ohGRFJB1WekKbgw",
  "key30": "2cWiUgotw8VKisapv8A1B7tHqxyPeS62VobRkgYUVvsuswUAGwarbsSC2DeDMYsdp4HuWUu7nUK5PyDWzT3yjne7",
  "key31": "UjKN4MKRcwzmtYCWCqF9kJtibPsmNAvhoGSXAaA4f2dLS6XUD9nnBGQG6Hc9vM9ij2DVZCcq6hbSfKnkhT2e4XC",
  "key32": "3hSF8uVGhe1a1rwmURMzhmK8NR4LuD1TfTozEKymB3bhuYAS6AEL2rTcgoGmUKdch72WqyFVUjfqpfzTTEFJDpgq",
  "key33": "4AW8D2eFTWL6n5oum2gDDwnSRzwbGLnqG1HaUvVHuzgwgfEpNF5PB1nUsbQntFanK4yVUC3WT2D6B5e3QtB93JBs",
  "key34": "3wyVgi6LLpdahoL3wvJ1NCKsEdqTaNPoGDLqEK3f6jAragWpfn56wjV9WG6cFvp8d2zSqpWCiSEsmredg36dEXcd",
  "key35": "p7VXFrpjQa9VJUKgk7dCMigMkM3xpZqeMk9S7KvPAxiNG2Q5sBtMbhQfDnQSKEvmemq7jdFZ53R9t9PcZgQnQXz",
  "key36": "5ZJgR7BXFJA1fS7VuEwR5AoXfUKN92FiLmrbG7ZwrZXPM7V7Lh4RagBHncAgH2weouEGv6fQqmGhpyy9NQG29TNK",
  "key37": "5DBJVTUmEWzuDmRSCBZhWZefRMBT2f8DwhU96qzucXMu1M8oKvbvybu4dmqdgz8L4WgwbnbhHAQUSRRPTniQkCGN",
  "key38": "4iJHqhxtmRrNnzQok7wKeYaFXF49r2vxMb8sVSdrtXsybgDNtkYtsDcrW9hhvtmCrceZzMEr328xnaPgUBqpCFps"
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
