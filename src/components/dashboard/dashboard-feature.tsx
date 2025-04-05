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
    "4HfrYHGaYs1SQudt6WZTBeAF4UzALJdtvzcjEmyF6HhvWpnpAQ9scduvmp3v1bfAizu9JcqSz9LvLcML6FWJ4Vgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iW1mE2B3DHgKYJABgbULiBW3Ki5GUKuknAAqV4tjXo1ddoKsFKizZEsKxWVLkEA8oCm4LTzko85PsqJ1CANM3FU",
  "key1": "3kPsbeYyCuxM5wfMNSC7RcAyW2fif5fVeThnpKGtesNc9xa9i1eYjsQ7HXPMxqhyLbdjG4g8ZM8FprLHQ4QfocB6",
  "key2": "4DM9jiUSSGTyn1gPRanQakiDkTuuDjduJ5khier6ffE1Dqhzbpinss8gsjXqFCZVX86p7wq6kDssNTBP4g1Ba63N",
  "key3": "26drrSbePoLHeoNe89jkNFsYRMC2r1A838HKo7HdiiS85y6JworXnESDduwfa1uGf7FES693WGj8fZe2KqmzjkFB",
  "key4": "3hnhR88uSD4PwWGDtrzoySqLfc3WzB5Yb29paMn948Hp3bwMXiTrhf6ChkQB4EVjFcQjcG8G59GfWM2iTYxcBVfn",
  "key5": "2Pp6nZZEtBbHRAYYFkDcoEymp5tLWKR7ZvMbyJt8AJHM2UjFGQnWMLiEmvYvAucLmBPsNU3D5CM4USXkwhXU2Vny",
  "key6": "5kbNbzLNv6QK1X4FbX4a3qaqMXMMuKiqFYPBXx9cKG3jgZnBF5gSysFTWTUR3TTEjjKkUuQ79TxVeMUtXRDFJ6fY",
  "key7": "2bqMXe4G4T5JMdXvTyFSRR7QqnpMuJ1gPDkwowwAeKa4nAEh7HUUeLxUXK4RYFPV6CPqDDkzhHYdC1H8CsysjAcw",
  "key8": "2Kr3EZHBXYDs2XDozUtjgnsQtKGQwMQjnZgT3M77wBr9chnphXGd2BRR292g5z2KbQMLdT6qmAuQ6GL4vvxUD6f5",
  "key9": "5kPDGRDBLRtP8dRuiWiMt2C8xRsDLM9UbGQY7JPVBKoLrmbjuWf3xZtDmE7rxiNkRVSoCdTsR3x1akq38Mjn5sRR",
  "key10": "oysjtkbAxpbtGPrBmR11tgYNyL1vvpmifiUecJu7YDz5a37gaHp8tyPHev5QFz7r9v4SdYQCQKq9FD117hwDFw9",
  "key11": "5SkLYY1L2bHwrJb4jSTctjsuVKy3XWDPGaigbA7aa4jMAZfyQV8DZ9SzKqeXjHD12oQpc3oFejcyuRn9PeyvNn4s",
  "key12": "4B5LqopKuD4qR9KG9je1DtarwYQzDeXMQL2y8jEC52y1HMu48QkVdizkNxXwwiuhQ8dkSQvRuBzh9whr59bWoSqn",
  "key13": "3MwG1aKHpAUTTpFoZjiF3tpVBaEt4E9F3L34zimWohGkXdnaDxXk35RgfpNqaidkDqguLaoUeu5ULTLMynYMpYgE",
  "key14": "2GSNKzbhC9ZK2iLGVjS6coFvDKNR2NV6D3CyGW5bG3y4qtnnoNJ1kSgA25h9F1ECc9H3xcbQLWwHnDE7tjPcd8qm",
  "key15": "qNBSbgYFV5YAkLLjhzsNq41TxhBBFdLnfbyG5YoxA1QLqiUwqGL7mZosrCCckPoyRomkVm8yYzCuV4ZEXJm1inv",
  "key16": "5f3Ga4nKTtpnJ2u3UEUBXyWaMtnjYKt4rCZKJZrG54hWANBVPgPfS2cndMG4hUW1hAay5UVWjwaiwPCt7Psnr9ZK",
  "key17": "32uV5EGXfRcNAYvS72Sy6d1oXXBAUrBsesox1UpSabpJgeigdfEc94rqw5k9HT6GfP4rm4eNMc9Cn8cwaAhyRKZF",
  "key18": "5kEYaA1thRFcHdR6WpDbffPWkrqT5eBSjL1yEvt6A9vB4k1bqBncBZZ2JNKn6F2MSrewWksKjZgZW5aFzkrRcBXu",
  "key19": "3p9F2b4EY8YRyGtF5ajttaUy4PsJkCfHNeuquKkD7pSYY9n6wAvqRXEZk9iXaJ4GTke6CkX1QorRPAX4dgwBAuKR",
  "key20": "2HTWsE4r4cGfsNghxrLyKzDe4FueKrZdtXyVdVTb9gerSfLWtdEYGeTfZcg2CjFYQC4MTk4wH6EehSB1Evsfg4TJ",
  "key21": "49E6Pzqy3rshPJcrqcVWDBbhYgj7xKregYk9XnidZLwTWcQzCvaKdtDtS1yxnMRhHYnDXNw1ujfcJAM169aGcLMh",
  "key22": "2DEC34Za49q51zaPXLrQyYLfYnFwSrbXRX8KZ7NiicndBswTuxDCLFKL6cFcxSHidJy8gz5RJxxrzCNaF4zavxBK",
  "key23": "5ajmP9dWxHV9K4or7UckSJTXy4wyYKYBYFJQhscabYz2R1AGwwPL6qsSqQ56ggh995CBnCxNp3LmMGo1YYGaJjik",
  "key24": "cwjMZdTfdP9rzZL6c4P73xHR8zxSQbgXoSgzZ8yDBhHPw6HirrQK6uY59Ur2iig7dFy1QbGHGhcsn5n8dCikvuc",
  "key25": "3wMyvRs3SpwiE3n6nk1vMwUqAuopUptL8G8YYAHDUcsyoPndnzZRtkMUrwynynR2wvohkQ9kKrPm4gcuYvQgyqsR",
  "key26": "5WMgsgQvvLsD9zd1c3FSvRumWbsSWjspHqC5jA3PGkiPenz3RX95N25jLdmrPcjXwZQFUA92KVKAd3CNUNe8i3iq",
  "key27": "4hSNcK7rnY6Aa22oRsLmRbbNztvBG468cLZyfqm1eCNvUMSBUfvSQNyZ6KBQ2jHw7V875dKB69knW8fLMcnAgDn2",
  "key28": "2Z8Nj7WtZWvR5UqxPeTKbcC4mVvGTm9f7EDwPfnryy5Qoz4uoV5mvgpyPZLCi9TMgFrtrxv8XUEjFCZPAkpMVXjP",
  "key29": "quX3eAd4jP1etni8wmkgSLgSupycvsaEypyW6KdQUKq6h4QP8X7nM5HakChuocBW2k8LmHz42Wbix8rR6NEX3VT",
  "key30": "3T7MtwLV5QTiAYbaP2kk4M5zY5PX4mVcM3SmpTseSLjB1hUeaSLyJmebQUT4fhAdpzymUHpo3f5gXv5Etkrgd2yJ",
  "key31": "5EASPBSLjKztM9rcpbQSBZWELwQoGbPXHfqarMVTRmBfTWtVsKzwFC9DX7LeR9hkBqJrtDTWRDg2AZzAzE7RK5Ww",
  "key32": "3KptH8mdEob5SN5HEchNF1U7CSrgdzfS8b3BTi5iwGdmqDCvNjN8AmLrq18eFG5Yrh16ZC6696cvSRcNGbt5z8Q8",
  "key33": "2ERy2idzpLdVXFGS7Cmw4yCH94XcF4BGEf35CfoMEZzDMGk7LKQp9KerEdB2Nv47qT85JTjyQrwuYxneuaAYJZe3",
  "key34": "2nCyL54ztBun1NnhPmYb5bixmCarP2Jh1h4g7A7LFN4aFeKMEmSeQho1QduaG2QPibnDz1XSjhiScxurBMqLHKHD",
  "key35": "kixV2cx77h9WttUouD9YVvrqtrnfTpYubyiBUYDNrtQNE9fHPD1vLhrEmyJwXh7r7qTsC61KirB3gTAVyAf94Ky",
  "key36": "4xN9F9wLVbmLNozDkQq2WisJkmv9DZATznPrhmKKpDUktYQpFayu4rAXS5Q4omFHTFTqikpX2csfjwqg5j6zrKaL",
  "key37": "2Br1zsFwG5rgnfaELRP2hrUMd2p18QsY5zuG2ahpXSbWAUnpZw65pbTkKAzqpRdUGFwbkk4NrgADsQQ74QDf4sQX",
  "key38": "3iywR5iBmM93JByEZJ3ypDpids7wbUH6sDqo5osEHYre93YFykmSA14bjQo6FQgZLmVMMuPf6f9fDHgn1YUb6vfP",
  "key39": "4HK8CT6G7G7nkgY8gFU1uZHXvYu6pFVawoXaF12WkPTPjseXTvJ79S1Z4EYpRzrDy31rZf6MrheadMQq8XEW4cSw",
  "key40": "4B7aczzyMajSXgScatPGu4Lu5EJgbW5ubmj9QZV2BUA3na64JJizNDvUYx68kWnFKaKjQ4XW3YxHuwrRbdCrZTed",
  "key41": "2anSH8oTYatUpidEkWrvnQSXotJi1upNvQuRduHN4DVE5EepeqMJtG9hm5YZzoFR8HeTfW9JWyn9tU9PqMohs2Go",
  "key42": "NE9LJ3wypCzGp8GSQ2KCB8KxsshjQ54w4Y22gqzNKLwruJJn3z95MmrB8vKD1itQaBzXHrwmEmacDMEcv86CFxv",
  "key43": "3axsrum8DYKTsz4HW9cSXCXWwRKCjfsjuVQt4cJZ534qtKeT3NYC9UV91qce24pwwCw1WNUBiJ3C3VxCPwzECp7f",
  "key44": "GWoytDQCovTqet3JCW1M6gULeWrgB52qdnnxwzuMnamNqdyf3PmysG4gocPsZDUvJtKyoUkd2GsvXJo7DKLnXfW",
  "key45": "3FCeQSJ9JoMb7YyRzEqtU2WzdjbU4XxN7u4J3SqyP5pegCpz7azX1AjESwdtwdQEQa2YdAxxYvXn1w4E6UJEcYJF",
  "key46": "2NAq9Q2xvwUgEsvmaaqVrBcJb7EN6BZu1x6qrWRoDW6x1AunTvePo3fAVmGnuxEkBeyi5LTT3YjBsuttdepSDGR6",
  "key47": "3fR5bE5Rr878W7cpEiFr3KooJQTjUwNzqLiChtonNNcfW78THhi5Atz4xshHFpXH5eJQV7f4pk8KiXVPPQ2qBXXv",
  "key48": "5E8e7fc6iFmKAJyRHK87m6yFfomXNx7AGRt21fR3ANovenpYvd1hbdouUKXzVEfatPBD4qiLCqA7ZmhqK5LczUVB"
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
