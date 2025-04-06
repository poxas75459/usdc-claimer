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
    "4SxEkTtDEF9vuqzajZab6ZEk7FDQFdU3CRuW2EGugc1oGAuH3TY5xM43rnLjAYHPvPq8bxFxmRAzxckYR6EVwxp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23etits8ovWifA7YYbNyjCcjxafkbe5m1cwFC5QJy7gURuLNSJou24R6HMKcJNzACtfypDmJ6WTZo76TguhbNBLi",
  "key1": "5vLmE21REAEA63URUjyQgCWX6k8JGADyVPXSiujonhJdE3n8ZYGZuZMPriQa5eCeCoJ3aGXDRaqGhTHxzFTvWNFU",
  "key2": "2Vu5S2hoCXWUmn8rJ7uobgS3wGGYQYKTXCV7jAMCvMLHgD7tX9okPKW9GCk25LgvAmEUPrYdqasNiWPEVZ4T1Vvd",
  "key3": "5gfuvStfJtbL3RGo4Aqbb7LSnnb3KWJy7uXj6nrFJjzP48Sn3Mr3GgQ8WARJcvCGpCfWEbbBVdx9rPsQxx5wGQQx",
  "key4": "3v9GaiC8TA5pHEethQw6GGbSiuz5XgjBeaE6AN4aYnEQYs3GocTGNUGSdKthLtCu4GwAiNUUDwgZ8AsnoXYW28RE",
  "key5": "36D3fTVoDtgRWEEVeGHxkqxdfxoWwHf9MSNHQ54UZW3gLSSkWFL9XE3ePeLa9WWKnjynDv7aWRQA9HvetTeYSUa9",
  "key6": "3uQ4qrKMMYYYZpLH73zHk2YqPG1Th3Fe9fnYHSLCYGb9fqXpLv4B9R6HesyqmwfVwt1SKhdwVC82yHf8TjvLZV3a",
  "key7": "4MAF5yR2nA7yurX6vm8eDjekYA8HzvLLC6dnwDZmN4jtwwquqXzEvWMcvoVUMe6ZRjHsmoVoBV5qZzexuqJk6B8v",
  "key8": "4UQfj6PnhA1nrKGn4NcJxHBmqv6wnsv23rgkdCssAbnSVCfeAco6oaMEwe6om9RavDo9vg5diaBaWZhqi2qCSvWL",
  "key9": "31pCesHPwM3SupWYEhZHYkMM3uTDjCr7ohecNuYLDjP4117HWdm57N54h8Fk7xNz23J9EZPRZYZviXgydFfhbWa2",
  "key10": "5TVTPeN5eBWK1Vq9XEguDyjC1c1Mw3fBt2ndYmihCtzPh6uaQk7C4pZjoWNqQEgTxuDCE3n9ho8WQ2B11CMwxmLY",
  "key11": "3ggjvZspRqQCiUkJATUDNNY7Cm71iHV8repVDuW26ft1Te6Gwx6kdZ9df5PL295cSauSx1jCEChV2R5fyCBhrqgM",
  "key12": "5n677anYknierrJAesaaSgLJRqJeEBkjawauWhRksEkf5sic1BGqn4fTx2yZsfu2BGh3BCDcw3kKWHPGbrcTATXj",
  "key13": "2nzyh695bF2mYNTDLb4Ct5HmZnYbXHGKqzspZBhBdGdFAzAw54PGoysSm4HmGjthbuGZCrVhMqFM6H7jigzhohpD",
  "key14": "5UVWhFy4Hc6YDoeoGVyYkpNNx1uUqqij8ZyNJMd2BSvKqH6TW1hiT777i9grzPRe2j99Bk2GehWhvcdpqCmMWb2P",
  "key15": "cv8gjfYYRCAnNqt326iZQud8haTQzzPD7PJ7c1sg2KpKcDYuvfQFMv4E8wAaivKehzsRdTc3kSkFsaeAJ9shcVQ",
  "key16": "39NuCoFCoewWG8Ty99sJpZRsXr7bJ9wzQP7V6JVbdVfiq5yc5ApjtshdEdvAvcCZfBXw1qPBWX55y34aJKgQhcKy",
  "key17": "zu1LKnaU2ZTsgfvT2GBdh1Pok8MyD5j33GzKKadgFJhQmXjtj1N5aoVP15X6PTSebGdHjrMSZcKGXJX37PfrgS9",
  "key18": "45s57wGH4RxqLNKa7pngbeVVdA86b3tKzYP2xgwcczBU6j2hYgrSnKpECALamEUNtgtiiPFZdVsW81SdYFReu46B",
  "key19": "4eB3tiuaRLq7P8u76vAZgYq7izy4HScczksLrvCCnx8wEjxx9LpZzZ8EgjFZyZbiXz9M3MNp93NCLT5qVKkcfbuc",
  "key20": "jEzamhcn2AJJ9VweEAyAmWeKg4YX9EB4qR2GUmGANEz8ctfxDzvWkCJsppnzgKuecaxYcdfxawTHzZpLwDwV9MN",
  "key21": "4BVmH7Mks5mhUVQVvykNf2RYiJoejbubDFmvA4vFy15FoMJpAyB4sm3Y3sd3uX4JahLthjRgPN9oAMNHig4ECNo9",
  "key22": "2XTg3Gr4J4a9h65WAuKsUEAG2QV96zMEcBh6Vrh8dCUutvJBgbhwgiNKTTRVTDjEjVbySDeiCLo5iSgj5o5cE6kC",
  "key23": "5byfdiJM6qA3dGkWgdWKFiZf6daKFtQF3xv5bQVCJBDPJH2XTsi6ufxvG4mx3oe9T7jbJ8cyFgQCK8mXdV4i6Zf8",
  "key24": "5BuYjuvA2E6arUo8h9D41B6hxRz1MPbpMfYqChD98xDGmBhrXFeyVQ6FHbkPZTi8iHW1EJxaYVXnBNNh5CtJaBF5",
  "key25": "2YJdBmxMrAobfJ232VzehZKVYXR6wtjEWsXyiGYyHaHs1TqYcEc6hJnzdr97yiXKPw9nB7S2TnBnAxmNFuJZq3BX",
  "key26": "3irxE8YzZi4hcKFskwUeVvbdKH1JFjZwGPQiXKJwkNAd48C5Km8y898ZGDDLnmNaCGznGKywf7ddvtn5Ke7DgHDr",
  "key27": "3du8x9Wen822GZuov2Di5sKLa57utgD3g9TYvSv7aiwzmFGs6krrEiMR8hfTPXthas1hiBvJ8TFjSxrL778X5cPT",
  "key28": "4LcST3s1Zce4oGbf86y4ra4UJeX9s7LWUa4oZXSsBXz2Tu1iWjEcSaTWuVKZZvgMJzHzoyDzj5YCNtTY33sEdrLh",
  "key29": "3vCu5xPxwpqBCqfHHC8UvxadsZCRHmW8fzhsto28Y6n2MGg2D2ZUmJ9SnGy7XZeERW48xMKo7m5P3gUnMQqLRoyq",
  "key30": "3ikwQHCWC6vZMvuUWT5yUuNS5atYMJigYc3KMsV44R2ootMgbtfv5jNEkuPaG6gUPWP5wLL5sBKVtvSqNSEXk9VA",
  "key31": "5ExJzNyskd35EMteTZYH6wegpvchW86ZugLwKtvgKscqxy3QB2J4vhdvNLQdtxanJpEUbwaP3N9P77B6mSDomfeZ",
  "key32": "EK1rsGnKyLhHquTCz8bzzV1suNAaDS4LVAnCv58GeknjmPLK42jLqE4EXdXeNhRza7XjtxxT1vLNwLnCEsbJk4h",
  "key33": "3BD6qdpjZzYrAU5C3mXrYMuJxp4X58skh5MuZJEjWfEmb4ZX9rk8ZdBtxGDVzPzWdxX1a3xBvYXEuxRFg38AsW1W",
  "key34": "5dYh3MRg1znPmNfi92HgMXgtREUTEQMLQT2wqKYtUNCMRqGUrRN1wHXpVZGQi8GX4WC6YKp7qoa98iPN6zrqWmBG",
  "key35": "4AJzRbpKzNXM3ZsdAswUJ5acCDcbBz6t1XikyDyn1Pzqas7W3xNNyq8UdsVpiSk6ZPJVtk7yjCETXcaTKpxyK7ud",
  "key36": "57Nyjxga9eCDYgvdtByQ5CLkonx1FipyAP1miVvuZyyX3aV25dmUxNkpPEshXYTzDbAc4nF4iuV6nnz24PuCBcoT",
  "key37": "47hogh1mZbP3UwYQZU2hwMtc7NnoXdZmuBVnTWVkor17K43Hb7ZtSzZoPYiTg4xXKhwDGFS963ygJUw6CUULNkh1",
  "key38": "58uQAhzPBhTmPmjjT6K7fYXhEtiCnC8xm6xWcR2Nr3YZCioe7Hy5JhrXN93QVLTCwCzYeEr9FjdnwCmK49AjE7mP",
  "key39": "639o8PaeQLtR6FxyhWF4jiKvY5XgjRWyWntFXb7cprGkvCZ9JXiwtw6UWnCCKv2FSWisiMBKCkaJRJTguKLFVCX2",
  "key40": "TAcen7TLDpRbd3yFcd8zdFAWqzxuzLjXbfWmnBvB3owYriWu12TvjHfbnooBZL4TANvNFcmEsG5Nx1ZCDB6BRBo",
  "key41": "D2xFqo8iT6LZiFteHzevS5V1Vw848hoVoAj5WtbpSSjg5Z2L4Pq5cAQtrT7CvhxjpEpP9Y5f71LzspquQvZpLqP",
  "key42": "66sUnaCBhus4ziB76cw2mJDtk5Mm3yXQ5hBaukckwXd3JzacpnV4b7zPmx5NL5nZcFanDYvRKNocLnZE2eimzhUH",
  "key43": "4d2se9hyY1aNdFuJwjRsbsUs3LqJCxMFTsCu6Habap147GAYKJE73GMkHR4wcZNMZ1NhveCGtyBjJ3M7UYg2oz1P"
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
