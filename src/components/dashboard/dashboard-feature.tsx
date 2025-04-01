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
    "4F7FEETNQiadkVwpmKdE4dGeR496MHfoZiR7sYAQ3UwtWDZAeD4H6av9swNLP26t323V6xEDPbUAgmhyW2UVdqrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ti7zMdZ3nfbfD6DSEPixhTUfBZJp7K3XejB4g1q2jWmwKgqwyRHUTH5SQcuWXHor6RMvzriJVmke9iGtNtzPomM",
  "key1": "4oYavW1hBGGwZsbQBMTczrgRRAaNMvYxS2DyHqGvQ7dCnT9xeR9kzNp2yo9pENfdqcLdEKDvxAXdp2rgi8WZaZMk",
  "key2": "4D7HRegQLdFyLpyHspex9ExdRcVC7gD4oVHAgJMZFQ5DDfbRDEJdEK3xoP81ts3jpnphLzXqaeipCTUoUGgRR3E6",
  "key3": "5NKurBW3G19KyGTGMx2SGwXjLxrAjysnTFSypHoHUHJYVu78dCgrMcDsPyxKVn2CRBi2QKEFdAw9twrxPh9U2KT7",
  "key4": "3P6qunHaqHTY1A4uenZnJoXuy7TV7PovmjcxF5KK693kAxNai4cevT36FmvyWg4m6Wk6xTqjYuDhfCwMGUmVBPGS",
  "key5": "NQUzVXq3FNrKSYGjP2fhQ28dye2UpLd9tPaQku1qcB9g5fRryXN8rT1LPQqFbgMmw1iub1Uo84miwqtYy1Vrw8e",
  "key6": "5STnUaeH7YzCXXkvZKorjTyd5FcRdZuCtqvYavKNZrAbc2vWSc8K5hA5Ss4ojDoUev8eQ9hBSJU3qFNbmeMFjthm",
  "key7": "5KazBPQHsV86djAA4WvyydKvc1aRTjwA7jVBJgLGKqfADTZnSDuYnp3V2okTboXwhgCoZkVpTgB1nWby28bdamnM",
  "key8": "2cibXNMg4zMmXahUwcZcYvPpRkmPzGgbzw6LNAPKDWcZmA2mmpVDDyokXZhKiyS78TMPHjgKmQTNKk28ZngtCCfD",
  "key9": "5iNKokaqQsFBUfY3mybmA9Z63bqi5PYzSPAHcLftgpgMZiKAyiQnnCGkzPVU9hny3YxNXtQHk2nkzdBWpTpz5ajj",
  "key10": "5XVSBtqeJakFf3rmQiDHqgFocW35exM6fT5epsbpD92R45nfZmt1m79Etdx8ogr5dLRd3jSEDUyZNufGTnTyfgMp",
  "key11": "2i219Grsn5LZJ7hiZWGf95pQdTvb5d31X7yu5HjxuryQzy3DEXnkNrfp89CWCf6m4q4447HLC6eCmWkmnsNDZbDh",
  "key12": "268eeE5yCusSLyspvngkFFtTkqRo2YpomRUCLfs1kSkHHFSENe1fUmTGuQm19N9GKqmadmwyqhvf9pAkbHqhaaQB",
  "key13": "efAJC9tibmQTxBxYahGWyJMCDVAg62a7m7U9GUqTrk71rtjxHDkvhAbKmLv5LWeivcBUpGiHqi5nXJGGzga3jBD",
  "key14": "5davV18qdgpfBjiGf3xWQrZPXpt75s1NFKMq38HbHyfeeuJDkAUTteKiz99Jyyy1cfB571vJqdSWJBc2BgTYjNUE",
  "key15": "5hg8SjvjAzo7TsL3UeJiQtHgDmDngYpfGdPr5JvEmFbEA6S2vzrT659qP2j9LW2CR1xNwpobX33HUS2ZJrdksWg",
  "key16": "27beg5VvDpmaBi2jEDxXWE16QHFB4VyNXnzvRu6QeQa1Svr2n1y2EuCZDWLDNF2MDw2xZNwLxMMc8Y7AoTP1BJg5",
  "key17": "3HRG5As8yY98edvJciuDgd3etqSuRfx6EgRCYJHbaR37fWMfyoszCtcuP8m5LU86jjwuiYVmP5qyqkGxttzphL7v",
  "key18": "3p5WnYL7UKnMJYmQw4N1sCf5RDQskVWQsjht65TyYJ9DRriGJhzg93oenPpSaimvuPWtSiGR9ekmnB9kS3YDXbZB",
  "key19": "3PEJyNpkuK9WfcRhYa63UU5sYaUFkB5PSBbqU1goJHCHMFd3sx5VfbZcxukr2s8BwxzYpKSWLBNwn1cUkbBbpmmj",
  "key20": "4VsvydQwnCdvVtZ1sRMZuZF4Y6bGSjYj7GZDoYGqGSL3MUzWxV7RS6tmotaPhxz5AibjKXKcLdRNK9gom9TrYS3f",
  "key21": "4pW3b7AFimKuKdb4ABX395TN8XpaP31vqRgGGtrvH2Rz7qpPZaXgGWP4WizccWt3JSakdoG7mAY146gddS2fDves",
  "key22": "4xWhn4K2AYG3Mc2ZBvbd1QaXqiex2hrYq8N2CijpJHRpcXWhMfCYZK5EdkasoPY7bZbhvAPdo3oQJvnX42kx7hRS",
  "key23": "4r6r6mHgwRjijuWrxv6TPBvbkBpGW26Wb97F2nBUx1abX4ByFgEWbwT8kA1XJs6Z1itwAAhKC6Jy8fgLFrX6MJrM",
  "key24": "34mgsZrMAcaPDavpCUq4qe5m74qhWSynGXjZKuqkxW7t8GWdBgDWATSmhyHDiVrSjH4kjzrZ1HrKM4MBFN6hSiqe",
  "key25": "5VPjioFNcA3362mbGsvYTG5hb4U6j5qnbT2HSskgFGwYQvWXdJogWt5okSmeSzU9DXQxTxndje8b4U61e8PdrNGp",
  "key26": "4bPGRk87fiQ2h41742uMMhQQhSEcsfVs6NdeQKrgsT4WBz1zr2Zmv95drjLdoKgE9tNb4z1HgDkDeaMadaRzwTq7",
  "key27": "3m9QQ2ACKdXRNRu8djXmquDn7XNxZ8urHw7fTagp6J4dHFmgQDsCfsfgMUdfPFVZnSWzJC9jZTuWTSFXzz3UVqUn",
  "key28": "m4t6mmnHbP8bcDqqKLEJZ3e2P1kPujm569K78JWewUDkEd3b3MjqxYQJLStgwZyzco6MpLGDAQMLzpAFK7vfhqt",
  "key29": "3gfFBDEa9EYeqcWPWoZSFwJxbcunjzQYuoYiUtszijhFRSwv7dH8UfykrMrfj9BciR7FNdTdzxTC13PVR1ggHPnY",
  "key30": "4E1fR2bTAs3vyY5M1Mk9FBPVtXWGVouCNPKdh5dZJ2LK1gsJRfQHPACoqQRydwjTK6BME7SexaL6UAKn5tNEsHnL",
  "key31": "2dRQpgpt2p4R1kR56J74pFaEsHbEx8kyTKvuYzksYpNHRQaszejpKZr8fJHBPupBUxjcDhRkjd58hn4m4RjDuprj",
  "key32": "3C5HdJVVtZrEBAEQQstuEkaNcAMsxh7PqNTzKAgDK3ZTAe6DR5Kkh1kCV1ocEaV8pSwNiaynwkJEX3g47GAiCE67",
  "key33": "56f787bEzCfua5ednnQLWc7Ak4AK7VZWXBfRLHSYPoJLLc9P97qVxYiM3RNPc49TuxwTKatiF396s4DjYgXJB9LM",
  "key34": "4TFy1foHx3HjmkpfiHLwqXvzjPdKHkVjxNPc1AVAjbh2pSsUrpx787n56YX9vUGy8r2CthKKC3AiB95JLmLcJMan",
  "key35": "h5sbCFTh7AqA3hpf4jNMtkkpukRTZpYxzgTnXA1C4K7G8JuFBnx2EA7dSyNqSf4eimox7BCWt4gKjpYr59CWtmm",
  "key36": "yQCh8Tb7ZSXCNvCsbF8pJ5fDT1yCUuLRCpJ7W9oDLzqPa9uSwG67NZuayJc7A4eKFQmAtnM1fXcF6ArUeDRiWew",
  "key37": "4hgXaH44w4xVXtjXdYcUCtT2K1viiFSoZQg3sDUWViQfsWFRgbeYcSCxGEktw87rVo34goTcn7iXJZRcteB3hsuR"
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
