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
    "2zGkoTAJ7sCA81PFNEuyP1MNkAmYQcEqGpjXNw13wKbCYGmL9N9gC5AgisydMhBKw2HLuiBBviLfHCa1B6Nigrud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfeftqf8vxWsnQmjyb8tahxSQxT13vKygBxhFEjMtGCq2aJRbQ3YXD4vMpjp9dzehFyqwCgeWF3XPNxb8fihxAT",
  "key1": "3CtHMnm9KVsUzEJJDSXZrgA5AtvY6axGyNMuYDKtcjoSq5CGU9Xb6VftmeMzzGZ4VRHjBKYu6dHoo4qResnKwBQ8",
  "key2": "38ivCqggZyQD1v4yAyrSUjY93ipD5Dvo3YRUkfSp4gHeMh1FhiKPyoy1Php4VNo5ZPk5YBN9tRfPufbA2pzHHnJM",
  "key3": "5wkM8285Zq4UVPBEdQSpgxFurMUdHe3XDcKtdeYXMBSUWziUdbV88cNWCqgUCJp1R6h76iGJBUKEF8jukSzPYhu8",
  "key4": "45HVZJVtm75sCaPVkGLN6qsAUZpEryWKyf9qGWLHQQc5kNUrL2qakth45EKGZ8gBBRn8HN5oqxgtSzwYG3zcXffu",
  "key5": "3gfcfSkEdhyzLZfKZsAd7XGb6cfWM3hY3wvhWLjMNe2Bw3SWrY54RLxaS3fBSCCWxrbrT5nsZVyQjMqj9Sept7pH",
  "key6": "22UZ1nciafVSQAvAoYVkSu7BrzYyXgSFuqzFWdGerxt6GecKEfFXuv3qxkwfGoWHZK9m8HY7Xj2EZ2ovQi7wZAfE",
  "key7": "5gtuSj8gcmzU4xYgtJmZhorAoatwR2ebHE6odRfywJmPrS7dtaPDKbX4XCwTiEGDKsnz2mjqDx43No9UFwM68A1E",
  "key8": "hcg4Jx9oSt3NGKjL2oGH63umzEhEFV12hYKzwDQ6yC2iUpki3u2mo6gabefwnMXDbqR6DXexDYgZYmhzb4dJoDL",
  "key9": "23ee6gZvsi5ZpRr8r3dJKaso9d5pn7YyD7t9WusgSMVP8KKey7b9NbMZ5ELTKZBsV7WSnwTTUwgPTvt3DCouptre",
  "key10": "2jA8jLeusLtWVQQZckpS8XJnE5HtQqXpTDYoodg15KxeuVH2osGUaxCXMxMoDvo8XDS9h8rTmu3xWyS7AUjjfwb3",
  "key11": "5s4A49hz2uMnVRamHHovXnH94axC7jqNHnd1V6ikQPkSyzSEL7tSMA9L18QnMRQ4T8awg4f58eFA72oyX4uPcjri",
  "key12": "3Gk2DS7ihQHiy3zR88EDJ8oyFnan6dAAViD8HcCxQLH5fXMJ6dkQsWGSe2zdbPS4yUdwmaT7M4td6BTKaDZA5msz",
  "key13": "2Ssu5U1nW7rWci9yqzUHujai71V9Abb7SCz2uFpsPKbj2FWjS584tP6KEmagNJkLzcqnedbt4xkPQfecuCf3Z26J",
  "key14": "3sMNRXyFpRfQJTf2hcHjLyWJKTjKHmW59ri6E8g5W4sxN6Pox2csLuofRAP4U1sTFFzwgyhs8CR17uQNug4YWF6V",
  "key15": "5VThTxzm7JQA8v8WVwv7d9XgYEV28b52FjW8WKtX8sWHywWNdWQa7TbamRcf483JLKygguZSMLXVUsSdbjkdMBMH",
  "key16": "29dCBtuk2ytH65xYwyjEhMdjug3Cinj5QXxRidGESzs4HzP3isiov5R1NSmNtGVc1UkKZsjJqVRFJxuYveqE1e92",
  "key17": "3zTsz5oWNs6PFqyKgHB7oGy1oZsUbA6NKue69j2zYQdCVYG7p3KZL3GvPj9ioQQrch1Kw43gtGZXhnitBgkNamfn",
  "key18": "3VirVdqX9XuhKhX9ddxMuu3VeRCZuic9DE8MdrLihvCEqyCxrZVQoPZ5KQcE6tNSZ7Aa6xX4zqCYUd9bZUR9jYPk",
  "key19": "3H41XK1quLhZaRgYDDrjg32NUxgooPneWMXq52wPUNU3EfeHEo6Rq1PvfxFHQnxycp8esb9vfPRwJM9pLp8xBVko",
  "key20": "32pkt8n1oMxV6uTr15ut3QRDpc5A3WvrBpaSHpd9RT4jqK3JUXr9BiZbnCex6SscJHF59jgtZ4M12fvdzveLrjZj",
  "key21": "pRczdtU2pmMyTXXCsYP6rrSoD324d3toPrU7tKecTGtme712Yvfrp4W9gFbPC3YG5oAkKjfXZP88XRyZgaXhbB8",
  "key22": "2G8HSzHfnTTc49auui7wa5dFkTnp6QE6axat9XaKAZvXbWZuAAhbhTopBSotCGTz27kBNk5bSimYBbxjppobzac9",
  "key23": "Wk9CjQR5YeAD7s1Lv8hF2P1iFGGwudso8K8kKbFnSrraw1K9wwm7hNewoBpbHdybCg5naNh2BUyCduRQAcVMbSK",
  "key24": "3ojoCYt8Z6295X6K1i8FCfdJpmcgJL1yCCyjWx5wpriZmvqdfjyB1gmWwdyQRAWFuFqoKihVYrDjiX955RPyn17x",
  "key25": "2zmZmjGoFD8wds52jNH1ZGmnfUz3nwBtsf7HJohGiPQtVKwgcZumTo4SkkGn43q9vB3oc86QjAJPhA1A98yLYo36",
  "key26": "2aXNBQkK7XNb1e4vvr6AaQ8xckAK32xRNZKrnzPmuiJskxC1EN6SYfwVBTuuKGuRLTWH6GWLRtZTtuSUJji1YtsU",
  "key27": "37xRRRWpqmSYLLidsa1v4Vp8btitvmi5dLRyuhoy29Yw5yuQJjLJgVQukQVph2P495ww8fYDJY1Tm9XWknYh3mzQ",
  "key28": "2QtwBrNUDhb9qspUQAxPR5MvJojbbdgp4awrZzRu9ziDuAG5tX3H2o2Szzijtq4xEGe7VrYRUAyqbSRV8DYiDkMi",
  "key29": "5CdRbDhbzqi9iAZwKvGERR4cVGTWA7Jq9VLcBc4vFy2n8J72pwSjuA9YzZoM7xaKmPihebqXdRULcBbB3pfzurtX",
  "key30": "4T4ojJtwaC8Vw8xrkWqXMrdysncT45yRfx6R9SnkKKaATLKXa1qw5Lp1SCezo6SEDiQdggkxPHrPqfTHGSaBYf6f",
  "key31": "4wg9SQr8KFFQmAKcWhDJr1dEknBH8pkvR1K7GUFxeSyNixT1rh5yCpvew3oKsqX6VE7FG5ChxPT6EQHNu76Gd2pe",
  "key32": "Cq5woM8rNpFFduZSBg73TgwpirUSoSmfdB5fyN1CZUKEd11x34XyAzBmqEWfRPLEbxrym7V4AcghApntCGw7EhX",
  "key33": "2Nh3F1Qi2KogMDuZddFdJ8ZgCz3BXGHWQiuqK5x4PhZymDZTpgiuYa5p5f6r6h6qGGYuvJtKMt5nzzsdUXdY8RGT"
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
