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
    "3uZmdkyRCUc6ELCMRfDGsbHSWDMbYsAJW4uhrDMHByz7GhcJjVWKp7kPPHrSuBxa9MKbKmbNNTUXaRUUkpxPC5xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAM7TjKTu8BQmy2LsuPKvfQ4GdeA1ipT3a3stbM26pqXLijYJxhXn2QP9NHVXL3DgVTfRBayCHgVtAeJVdwD6Rg",
  "key1": "4bT1dddjUjQ8wLMTJh365JhL16CCXpnGuhxLSeG9kJZ8qoQr1iVWzJururAqn3HZ5tJ74ngcrrCrgLtpBRbr8fXW",
  "key2": "2j7JiWhzfQzPe1u3mSdaSpcs3hLqxNdFw67AuNg4mRWRdiHMCLdmCeuYFj7rYSRgjne7EVp98aMmY6mEy3Uv1yNZ",
  "key3": "3u6ZX1RszgH4Wgb3ftgHR1CqbxQ53gvnBMFH22VMbZE87c2QCcjUK9sGxZUFTL3vSA8eiuxMffwCKxyEnxajaM6W",
  "key4": "2WA7AzTX4xD4iCEk2wwimxV8E32qRzZuUSGzHJ6fY9whwL84cdLk1fdGH9UTpTGDmnLhoSGvENykECdBehCVHke9",
  "key5": "4dQ6FX1WQhAZa1NaaAULMMF4t112DDRptj4jjf5iUxfCasmLoe3LGydoaiFrazTBEoQxyk2kSzzibqJhkY3LATVa",
  "key6": "7GYryhHgD1V57iygTfh32bcssYUFV8oe4b5QMoJhHjCrNA5dvBYNwXZQKtoJEMskAuYhdmu4ak7WWQ9Nc5aW9PG",
  "key7": "2CuUBCBSHueJTZwgh3M8EPbXATkN1K1caDxxRt7BTnKjd7nw7xmUhdPPDENoCpT3jiybnzBRwfBsCU4RkUvc14yi",
  "key8": "25wTwr84i9GjkPhABC5kjEBkNUDh9niaNyLQ9i77WM5vrEGYHWR16cT39omNPpfUoJQPHNtE3d14SDvFmas4CHQx",
  "key9": "xo5UkmvvH6oVhKDqPTAiGZYEg327bjvdbusPi6P39Dog2LtwGN5XYThdxtxAjzxJbTh5euJP4ymv9n5sWqJcUxf",
  "key10": "2pzVB1cF82WiFZFoKkYJ284BgjZb36fSPukCZKCGEPFWfLsiCwRNYACVt9eczS7LD5vN9yaELWgmkedxHyczdbP",
  "key11": "28vxhE6yuPnVAKFhoKwX7YAnNdFEcJeJeX29VYZ2M45D3A8tFEmpPiKJKvKukwi61H2x1vhHUxCVQmHk7GwaivxS",
  "key12": "4pUbWwJ3SdmhuoyZJ6a7Sg7hgUZaj2BiSSBTfDodwXLwRevfn7vhZsafYxWvY7srQNAnB44kt6nJ1p4rzpDdPc1s",
  "key13": "45G2okC7FC4GMZZkfXScKfqFWRtfH9RkHsp4sNbPdqtL8URkzBNDjJzLz12xujV3HyibAqi2A8hXsWf7Az6nRbQA",
  "key14": "4F6JEqQwto7YHCVnrpBpiM1zMvWYu6Wh3zTkP8da7Lb5wXz8VwuErFBywDSJSvkprkBQhR6NxbkiBrzoiAKu9GdJ",
  "key15": "3wDZ5mUGhTy2FtpK2pTycuEhHifhEquZoDynKcZ53d6kpirNeWPSRcvyy1tktNxvjUTCWk34q4e6iLZchhT7AAHs",
  "key16": "3CSExnxAF53xoCfwp9WVcAxs86XjUuV9ENHSyr1WvZCwexL5dERJc6xYWLyaXGFZZGLGe29sMC94edzAf6x8boo1",
  "key17": "67UYZSjerZEdwTugtkKmUVNCZNgvsa42Zkrnf8G3mXZsRGrkxrJxKRWBjdisxmyAHPCUayfhBrPAGKNsaZ3a4q7W",
  "key18": "2Uy5kuMa4zPCB7xFJDcrYbQkk7jrwCgK2EakyFnk4NRXJZChYr4mS3iTDtQ42ou5KvBFnVuPL6KBFgqE8WJWwEQC",
  "key19": "57gFAEh563Gid3cxMo2aRAJ7DJGDd8ieyeyqgRuKvSs7hxPHdQmwCf9zEwkfeMq9PQhkAFTbug69Ego55gQXRGkw",
  "key20": "5aT6pBj4JP8pq1zizVt2JmgVd6q7WJTnxBYeYs5VRDwCtNZjfCadqoE4SskNoG8k9M6agjHsweansPHaNU5WVAvU",
  "key21": "5GTbe6CanR7dLvbvRuMGYWUwMfHa8siYtTN4eFaoNc5crtohRWfgGMkSxiUkX8r7GxNgvk7e1fVp37k87A5nKydS",
  "key22": "HtuLVq61Ak29LcntkR88NfdgpM1M4jJ7rWimJmhF1gQwN5ASspeo3VpcjR6XtwVcYFaGk9rHi9uHvAfNe9aqKPb",
  "key23": "Lyt4QM2ngeuK3y434EATtKDKjQY1miYJRAjMm4rzuxLiSSu6ASc7BTYetjGjWGvt52KUjUDZh9XR6DqfK29bAup",
  "key24": "4EsBDkmQTCjTRwMSKnJWAQr416j9dXAqRJtHrS8aeKReKvpTAbgAhyB7rwB1SzkgdgKiRTZZAQmhFEx24DKignLD",
  "key25": "25MSHR2C13vTVPUgWaecwzHg8bgJCQ9jnKTHimrRg9PZKhnipscZYuwBAoh6QTFssifNBtr62u5ZDYWDY5f9aBnj",
  "key26": "52Wh5K3VQyJcJxHJ5TCca1JYuCcrSNaGzdZ2Q5YtMuC5m7kDhTwGRHht32qSWGDUzNfeN5B9rgkzJ4EsZoZ6of1X",
  "key27": "3Z5tefft8oLEN9NcJezvfrkM2XxpgzokuHj1aDyExKEYtYSNj7ganffvZneSaF9CKSmQYZjzytJw8GfdboKghL63",
  "key28": "24VsTEmjXafCGkVhSfT5ZySVr7JocJcQ9DLpqn5FRXhRCsjSNGFzsXHqxFmpagi5SrXTHWnXeE689AghroteLkzE",
  "key29": "4LkxngAMq1kFiJBV9jtDzSGoBeUdywNkjPNssftSdgqmM6Tt9DSLN71oj4UkiZPs7LBf69jucvZqP5TskY1C1u6D",
  "key30": "5U4WBXfk4cnAXks5qtsMxkQDQThsizcZXkoLfJA1kcxRRHdqwTK56CE7SmzdXjY4rLNj6XdoGbs1Q7n8VPrwG26C",
  "key31": "2Pen3m8mbQiWHYHfZJcru1QJ39FLbmU6dhxX2ExuT3aG9yVsmRiPUyko9PzPBEdPjEv51FfrPdvQKudcnfM1snYS",
  "key32": "jw1fkXZWJ5w8PhLGfzwM2Ls9nQb9YNh7UoW4ecnaqGmSuVZDWGAZ9zGnf5BnsRt2e4DnVdHcrVCNBrEivoWbmLP",
  "key33": "2H9aavaBsAonK6QKVhj4ojKJ7bpQtqzY7Bvb6afaJvRkBQw5McjaK4JHLgTMRbvwmCtvkFFw3bhhWjbJbX9fL9Yu",
  "key34": "4qTKDWoA5a1uuSb3vEKhP7ouQ93zKxDua8Bmwyhj2wwjsV5DcoTL9tuh7z5Qk16rnZxWR5wfR8tFsnH48cEeW5S3",
  "key35": "4KVRyVSJKb9gc8AvF8ZEjVGLKR9j7BtV86FYEQBzWBJ8N4zJo6dPnaHqofoJXBWvmeC61Q2ppWhYUzBqarYPttTW",
  "key36": "5LxaBfihmKrYQLhnAyAzthRV1hunn5aWvHh9yPypW4tDhEaqyUce4D1rjAedyHmcCmNZp2csTWyyvn87wi83VYcz",
  "key37": "51zTekwqF6aNa3ZuPvepUnsgawpSSRWb5wT1eq5GBn2orDkHhMnAWQHvtwxksQCn6LQWRwEo5uJZnwxhnRtYndc6",
  "key38": "4jAbREeU9bUajsAGs8LJG1yYr7fwL42fLhmGjVAg82LnVgKE66BXk6VoyCXppMU6Bcacp7HGYQCUALu1c8jeUfzP",
  "key39": "xZTJ1aNb3VhHJ13KGi7dMniEcKP3g6kRq2LjPm3AhSjyjDiN1X5Mxm985nFwEHN6qeBq5X15gmbiBeSCkF3Kzxe",
  "key40": "pq79iwfnKPhapzbDgYrUkJCtDyeraqX2JrisMnvHq8oYtmr8TedbLQooq3PuR5kBFK2AubzHraa1nXRfB9UXTrY",
  "key41": "4Ro85Hb2vhvVsHdKnDe4a8dwoFSbZjo9ZYYw6myRZDs1Wmx7bTiDSQTRqhypEoj2KUm9QrJ3ZvFpHUEWNJBdSzPP",
  "key42": "224mLXHUsRGikN6ozefDLQaY74BPi1fs45F5tGRbimvZgT1uXvi44CpDMyCyBUfNYDxgddE3euBwzqkR2BgEHat3",
  "key43": "4phcjuCsnfgdbzWrjbjstdBKSdGxe5Cy7HQSZ4T2wirYaUvxpgb1sLXnx4a6fgtJRQCk8AaucTL28Df4aQVnBt7x",
  "key44": "nnwmbZacr2DuPBtnqmxvLmKi3icEgPm1PcchTELyUffLK3TK7php62nEwMz46ZgDggQo4Wiko348VUiSJ5Emtgg",
  "key45": "2yVo7tfwobq9p5jQKySFoTd5iE4QWt4dsQN1XhpFG2y2Tp8GGBoAUnutjeLdLKaYZMjCBXy9NcmHWvZdx5ndU8Sc",
  "key46": "4PN3t7Lcaik3rothHKptL2x7mtAGYrZ6vyMvk1NvAYv7F9ATnKUbjMz51HYF47PVt3mggXrLiaKzD5frpCFvi5TT",
  "key47": "5ugM9hXf6Ca6y5PRCCTZuqMmuBQYwYpcDyCgfhzVEu3r4RCuRNWzjAmwsyRrVctZmf53cLUdTP9dxYSJpHVbtGv6"
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
