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
    "3LDuZCeHLWrwfzRXV1WBb711Tp1beZrw1QJcLFts6Ee97fUdHeK1vnFmoifDoYMykQa9TRRrpKQtyoXwzEu6do3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTXrumW7nRyJbHc4QtHqwu4UJHfR391ENTpNiBvQbXV4U1vWtQhiDVBpVjFGwhYDhAeZVfVjHLXdbKo4ACKodrY",
  "key1": "5nStsX5JBRHzMZkrvKWDB3rCmbg4LLc4PdMhLPRGZWGgjTggAwCwVUn7ee8hZoZz4G9H7KVE2HWSJQq12Z8bf4SU",
  "key2": "9uhDcucHzwVuKzZDWbsPa6YGGmzC4W5U9ceu13vEAduKj3HBBZUiCrypncpDNbojzJtREtGThj9b4mMgHyoK8XJ",
  "key3": "TdTcGhWpF1PQBiuu9qQNk6E91D1eDbrG8rZEfr3muMvQKpN3TBhf832cAReKDiXxQQ8bwgBDd7NWfzYabQSmP4a",
  "key4": "3pz3Co4pAThQP2hxnkRJGdoDcWiLPeBNbXgqGUunKjTzedkuMkuidiBxPu44JuUNRdwuFjBeWrFM4itpXTw7CMzF",
  "key5": "2N7A5CHi7auVf4aNipJAngYKZPBDAayomKAkrqknHU5bpJtx7Ui9AXJsDeVUevGWRz26wpbDDr8Q7gBRd3pEf7cv",
  "key6": "5pyMjufttpq3ik9Dp8xoMbSAe1dnCv5vJPZxnCiUQyWphhU4pTFJF9G288eVQhwDQJfKZ2tJt9MTYEEksE8wtgXW",
  "key7": "3koYBE8yA3MviMa2aSkM1yigjiyh2cqr2RxgHeaD44XfpDDiKNDoJt6ugiuQYuqrW5ScGexwbWDghg8SJAZp6kHC",
  "key8": "58DXC1Q4GfJKzjzbLKxzbEEZVbu7avwXqrXD1eheKVLwP9jh4enFsuBLv3ozjQny1qJvHHG6f7Z7GWNt3RefreSr",
  "key9": "4juZiKetiE9NgyFHZptAhgFUcg2aTULSBhsyzesv3n4jFvFxWReoZJoTmpVNZajesNCPwUXsrZdWUEyDKE5oNZyp",
  "key10": "3ininYja8tGBX2Z2qZis5mXoLPDjppSwAbwbW6k3P8SuSajT462WUj26NeXjgiSNovM8h4GrLiVTZDMYgdogUiRm",
  "key11": "2NHjcN34fhF9XKY9h5wYnsCcEXj65ky6BttPRjW3nY5uaLyo3jmiyHTGeSuEYP3gfqrwxWxA7uk7ywpw82JY4pvJ",
  "key12": "UJcVwuYWqW7bomKav7STYKn56kFdrczkA5gF9DE1Fk8y1bh74dzJaYsGbVtt6K25i5tveubSLm8jXpxfbW4kRWM",
  "key13": "39EV1m4QtZqCknQtPTennExXVbqwrAPBJmLzG4GiqPquzVAXgRo4Xb4Pq17J15fyw7DPbixXsXfEBbD9Kar3DdDU",
  "key14": "3AJRbCVNWN4U3ci5rJ7HDUQhPkvaXyELHfzCxkVCA2RGST2TuQD4h1VM4JJrqS6uTGutYfvKjg2RHDeXhLUksFVT",
  "key15": "3k2f9nwPmRXBdzZmLirAikxHiUqzgdwxicAztADUqHAgBZnoTcEhRZbptadCtwWzMireY41h1vx5jwG4PbQF5rg6",
  "key16": "2mcrvtcgaKC88DYAaTcfsjW6Z2Q65LJex18gquvP1XyKGqznMuvJ4oqePe1HmZnzxm8RC1Xr6iaEfE2awdX57buN",
  "key17": "riqa62FGoKWr4AYGMKKf15SiRehyzDakEZb2y2WnmBep1dMfro4TquT52ozLskopbWm4Zxj1Pa5ZXKchUQjwDo3",
  "key18": "4Mbi5VoZqbTuNQM3kYpk7vzrsgUY9cNQ53bkVpZwKvM7pyKQjTjCfxgVqne6cY2m7kF5ybRjN4oEsfaqyMWqKTNC",
  "key19": "3yHkHXgoXV18XzNajqtEqD22dLktpC2DopTcWs1hYUmMFr563a3gUBkgqCw5fwi6btADk4z24hFweiKeDeEoLvha",
  "key20": "5WzETkxMEPsxHjuGYYJJSc9fh7vEQ2iEz7Bc2HtEFQ2W3PLv54vk5YMGZs9zpHnbGmswNimpdQ564oAKA2NxjE4F",
  "key21": "38hZyYbEmXm1fJLrfbJZk7zUxz7W28PcaJjroj9gunjRxenq4ojGWFHGxk4ARNiUwTyBHftAxwhokawpbXu54s8H",
  "key22": "3SJdRvArLBn8Vdg1Lv5UZxq4jfLXcM82rN1y24RimQNWq7V5ijuP4YWAeTFvyWixhTJFKPsK9j18gGe4WA9qyJHD",
  "key23": "4U16pQAbzHmuSP7ayALmZMeLtGMbKm6qCMGiGeuM6eyrk8xHuG3QpfXSSKUD4wyhaSaXp3LCa6kWrnGvckL2a3Bq",
  "key24": "2nWtZ9Q6jexPwZv2tQyxGBoBpjYA5eXmMaXeBCxLTdwgWhfFcwwJdS81JYcYfwmJEu39G9p2H1ThHMu66MM6jKcG",
  "key25": "4JuKZjgHbhJirevc4KsNp2bNoXEozq287rkgjsQWL3mgH3N1T5TvBtrVBxAWpsLEoSBBwcKMLfDiH3U7EZWnofAG",
  "key26": "5g756FDFvmzAxK48oFApbzUV8oawGY3cmNtabuhF9UeBHAjKnUQBu84NKvsaxvQZdxfumkBriVYm5v3qGjUx5Jor",
  "key27": "4vL4HgzRebKFduPY7ZC325wUok8UZih55SMhTisC3FdCRaokkYBqpFAZytJgAV2k3BDF9oss7CVHtwGo6KPyFuRY",
  "key28": "5ZjjjHeNg1CMx1JDheFCp1qvzonUV9a1TuNaFxawQaTeqU4dAq989baEf8nB2C3qPfsEk1n1VMLvGyMyt847qtWr",
  "key29": "3Jbuhozbbhz89BkpBGtHPE1Df5AzucxJjZgf6Z94ocWa84NYVEYo6aSbyFJR5eWzM81sQuuWfGteL6NFvKgt4UGZ",
  "key30": "39GkuTB4eCxfATHgzbFfJo2RLUTdyqwoy4PpzhxVvM39wu6hs9oNySDR6jLkQ41nxU5taQoYQTdsW62CcP93FhrS",
  "key31": "5t5xFSuREk7kL3rCqqAQPFwBDfpom7UWFTe4EopFZV1iDcG9jkxU19SfAsH95PDeh7v8tAPHCZRPjft8SJfY7enr",
  "key32": "2VKzbazApHaTwiGUDHBTPrPYa987V6QT1JdcCtmGQCntSo68RiWPgGi4Yxre2PnAerYqt4CedCDaM2FCuWk5xp4T",
  "key33": "HH9TJbTjDBu36bZJbcPQfbgCkzsEXwnaUi715utn266CKD8WyYuVcAr53XSq1yYgWYYV671aNB5heNw7wAZuMn1",
  "key34": "5SdCAfQLG6sdXoR2gTrDd9qHUwbofxGBXkAPw5s45aywbGcnobpSsLBDZW5S5PZXk1ux5g9trGd1RiACsbsX6X1K",
  "key35": "4tn9MYyJVbkPmNDwxLkNGLFJwfhqb2WMc3q8vBdSdZaxT4SdSNvuVtaCVUCX4JRGxEbH8EtUTwXCtJY5SV9FPXQB",
  "key36": "2LsjHhp5B79YJs3HC8gQAQtdWnQNZ2XqDpPGLH7vkdNsJh4ZBqziRP6C2kqPKyiq2nXg7Wx2F3dpmeZsru1JoiM3"
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
