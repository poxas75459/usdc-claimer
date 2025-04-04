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
    "KWE4TSwAbVE9cVtKYroENu9ghXhKsdCTg1QTu9xPvNmJa8iU9C5PMBwuND6Ev6heHaevKXU3MRhmNMAQctMQgjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YS7tHYqmJ8pRubrG4FDwTJ3CDmR8LTLoysY7vNfFYo5drp1DKG7jrLbCSpEfgMBzjkJXsiZqMPPozi9Q72nrH44",
  "key1": "3damef4rNTm5wxkKgxESHeMcFnfKtrqoBV4E4Toif3cnTsEnk9CP1bFHJ8UHTwafzStwq5HBfwgREoeSEZfBUk2",
  "key2": "2d14LPZdRYGH9JzH5VGhew6rbwLUUvZJjuttrZibbeGhA4sZULfgq7v4ukEUjbSAgtYKNsJqnb9Mz2JfUnU1ZZQJ",
  "key3": "3sJMw2JLYtDnWe7jdBpwdb8QfEBjX4jQ33VgnioHabpPpBkCxWJ4qTEfsoj2B6AE81UMm9mv1Kqhy4sjwBFbt6Jg",
  "key4": "2BiWPUR6UEZgKd5ot5ZniQvuf3QVCxGSnquFT65mKTHaGSDuQuKCbzHQ9AGL7mZqkiZj8VgQB7pY4Vt3fqJf9Yuq",
  "key5": "33CqJNSCNxqMdFBojvXudA4d65SkVmHMkoenXzStLQit4SKFs6gS1dcb6AeWDkvAk2Cs3aoBX7DxyxFrpNsoz8KA",
  "key6": "5UgqSRoB4HfxFtT7kCebx1ketbJE4dZf6aQqd3Gk74LyVY5yvkXqsgLwXsApakn1JRAXBx1d4FVruoXEBRWCPAtS",
  "key7": "HG49c6oqS83hjFNSNMtEAd2P2CPY7k5PwneBuwm6dvXAgvybpUuvj3HB7sZtNCbhfhGpUkZMKgJuULhp725yHRy",
  "key8": "4mbMPvXMWh9c1jsiQbBcp1vDUMgvnXPucP55b3dRKSh8CD57MpwSn9CQFoJSAJXsismBTGE91QTuZEoDDEUJyLLN",
  "key9": "64ShCenFALcjmuiq5qdkve82iY2tCLvUgJkjPyDQA7BGZyrNx1F7tPWpdhw6CxHkyNUCguQDWyCwhJmXUpChjB9F",
  "key10": "22CTMzNSXtzHiRnB5pSfZMcPMmUNRvT8fTAoFW2ZxMkQ5mFoVBUhWKuzqKdTdneE8aoqsHszgBmKc86rJNjvYTSJ",
  "key11": "2a2WaN78j3aQ7miwmnyjJ8qCR8EBcjrVvGo5THG2X2E88Y4pXWeq5nyCjmGcVtZCDjkAWTnEAj4KzTjyerAJMf53",
  "key12": "5yzJRVJSrrT8CackuU199NQu7M2Q8Xb8qkQ8dn8Bnd781D6UrJQJpg6qMKf1JHDMgf5D6kyim3g48XTPjA25TbDC",
  "key13": "4aaDaSDFXs5WA2817x7YKa1NQPc9izhyT9HpDSphhauNVnQVZyHeo6SyJkeGarmG9b6a4eQKmYcug838kfG4pfjE",
  "key14": "BiLYA7wfh6DdQgWp5Pc45KFtQanJSdqCr4dV23T2Rk8CmwRcBFLdLe7YGB8xvrapHWyotkjCsiu9xBJu3rzWht2",
  "key15": "4ygpMT5TvsPENmiwPJ8FdnekXKaqfuqdZdnAVzDSKbNfmyGk8npwW3LJgudBEEWrDg13NZ6CwHrbiJQiboYiniLa",
  "key16": "4cpTrEoeiuKpv298RfhKwFMdwgocNbuZhRdwoiyU1WmErkzoEemsEJ862GRvXbRLMN6Lsmhm3vH3LLU8vMNp6JuM",
  "key17": "4XQCWYPsaz8GTke7Pc3HATaHATRkKehkG37juKSfgrg2UnWN2ezumJHeHfcLqv3NWyzw3aFGTDnSxg3WXmiJTKzs",
  "key18": "2vhER5nG5VUoboeGtrWpJ1Eo18P8wnm5qx29nt4oKA1qweDj5C5WrbiEGxjVUkp4u3CFb1AMpE5QF7zZbSxN5J9g",
  "key19": "4WsaB6HF4U7GEEYDrRzwscXjQDxC1MVFoM5nPBfoQ5RPXYxN1E16V8kyYGQKoNu6q6dB8Movr6qXrCtdZzsPYL9a",
  "key20": "5wYUwkMNaJHDMq76Hk1vwuQ296yogxVPJRMvbdWHg3hYKHcyL4YYeDm1DAB8K89uKiVAA5hdYxazuMEjy6rmF5m2",
  "key21": "5Yqqtqzodqr4iDoSUgQY5XonE3hQGtEUfwWQxskXfLSez25JnNgvY5n5ywzdt6CWPFysE64h5Tt42kcVJt4V2UcR",
  "key22": "2H3pqQyELZURbLAtaZhgsqkxhbyzrk48jeymuomvGT22sFu6kF4KLHVAyP1DGQkQbBK7JJSWUM1hPogkzqUKakTZ",
  "key23": "LwY52UwXfNdhSDFtXUXNzGejuTM65cgews8AgQiAhL8nZNuF5ct3woQPWHZqjjNGREze2pdFkcmpLAQHpkrq648",
  "key24": "2wrdsimy6TysFnbKKrd3RyE3Lf2GiFto18BfWogpvdMbSPyBG8fbZuW5Wo2LHXAuWDeYRcBb7VqDUYXSq7FofWHR",
  "key25": "1siT1fPedG2CRCSC4cC9vgqs5XeThWVnnrvdB256x39me4fj9CWVwxZSqswQ5zxbvk38nomiLxWYqyFtA4HdU8A",
  "key26": "2MmLqkarENFhhCcZJ8Z9NEf1NDNvcg8uwYaJU6Jrf6rTFzTJ9i2e9KyZSxsiH1PzHzV5Z1TA8CRp1imnpSPFHk7A",
  "key27": "2yo19fof3ap9ySErQXuM52CvzPThXmDq8YCzK9JezUat5EpHsXYdXGNTjjyQurWw1jex4fqKWpjo8KhC5X7pWH35",
  "key28": "4tzWKRGug8wHgB4fiQMRizUWcsByYewwPgcNYCLnhPNfqy5K1UhHdVsAnZL7cRkevSTLEM9rhdUr9v9hHdPwRu4L",
  "key29": "opNhFzs584LHE1ooK4aAk15JgA3TGKEkN2uRfzmh9ZE8P8p1fUbaoLLNSGW4nzuQLHKxbkNtwugrDuR9ZpX4Zwm",
  "key30": "4exX83whpjFJD77AwusU47EBCDRycE5r1C7Usiv6mM881mUy9gDwhvxcJtrQtenfCFvdFKsNiHEzZxJxiruzhsBP",
  "key31": "5PxjNXDkkcd3T3SRXwTZVDwWUMc6tkyBXd5uiFAjQ9URMH5MDUA8kLnRZb56r8zWM6FptTt82zqm6zq3fNxkvdce",
  "key32": "9gSbuSGAqvWPDksaXrGTWtPMpfcz3k1pdCUsgXG2zAWZKxbnAQsmV78CvyND8LxsTodGv5UbDjbhM84z36sXvJs",
  "key33": "wM3HPYzbKCG8B9aeV2cvWs5CuarMF6p6oat69c9fcnfvCsPFeq8A5Zq1hkXp3YkX9hU4x966poTM7tRvkzi2GZD",
  "key34": "38hWiUQnfeucFjBSg5RhS2yPbLFKK3RyHoMpcvDoNbUoJViobxKBP9isbMrfiZiNgkdy8vicZZ9b3TtSPBGxqtiR",
  "key35": "4pos9CaYxteYutissZFbHYzUCgYEhbLZAmCvA19Cepuo6N4H2hyLBj4tXWMz5dnKcbR41ofgGGo1wfFhBxKb7XDm"
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
