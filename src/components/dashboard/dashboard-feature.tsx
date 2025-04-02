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
    "2sACyCrrXJYdzQL9dMM3c1MDgdZFhEEDww5bsdsdDAEAQ54fPTM9K2tE578WZFZHiVJRfEqL8ABHi8s9sfv2zf3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oDDYbkJkVz4GYDwVhar1ofhfQxa7r5ZHrD6t2PVnkHewDppuq8CNetDJCF157dsJE12UetxZZDNPRh3v62ByzsS",
  "key1": "3TP8j3AjdNVEoWiaudYGbgU5qWbmd74o9tMxsjEpWSgLDcMo9DRSc8b75qnXjb4qH5taJLmsn5ok83rYWv8hp42P",
  "key2": "B86UPATXeMxV44j5JefvqiLdu7ct1WdUA1yrpaYV4MADSxvyUQLxrTe5pmwQD3wBu183PL3Xq5V8JsTDLKKVdkb",
  "key3": "5aAjUjTnagVD4cA6jXFGfxo98EW52HuzhADZg3JVCxGbtgPjR6jx5BEtnkFqHDXpXJVAQ4j2VsixAnC4Sgq1k8ws",
  "key4": "2ekqBnXzpccJy5Ds3NB6zRVyBCH4Wn5zqSzR9NfZSMRpJUZcDGdGyxqgZgEAwzbHD7jq7eGMbnebzvQRbniuFYUG",
  "key5": "5U3E3x2AcBQaJMNbSXMbZ7ikoe5HXzMb1fofKe9VqEsJkNpEBatjBuRRNbpyuPTRUFr2UzYJyEwiLjBqXEYHJKDP",
  "key6": "2YwhUcvw1WopboqAVMZRCyPtrYWSg5yNduzTdxm6DB8uHFyfVg36TFnddezBdLdfyQz4D5khUTwpe3rFkmK5CpLf",
  "key7": "5kRSYBuG7gbZNnPmRNLELbssAEB6AdrYrhK7cgam3skcFAgYx6o5X92gDKLY9QukooRQurSwaWuSxiP7sqGdcw5k",
  "key8": "5nhPuzcD98Wo2CcEYJYiJXNWcj5xtmxH3hVXwoYQAj4CLWXmfvWvF1bdVUR5LHFhkBCqJW1uPcuMJHs6AU4pLQTw",
  "key9": "576vsSYso7scfjMo1EfuuHz9fMVVtCErS32xpHbq4mUjUrkJQZAPFtqCqjhhZ8Ye3PkvJfEnCrAYvU4bTwxqnJ8B",
  "key10": "4Gpdga1phFREEPF4ZgorpP4JSd9thpKFDV5k96ig62UMmjNJ94qq11dEh6w742ooH98hDX8jtH5wg4sTTrjhdFrp",
  "key11": "26FHwnQh9rt4TLEr9kEfqnBQ1Cbyk2ti7y4zD77A5FRhybjGZERER8o56VvoPsJSYscUYbtFXtPA7x59iaM7c2KF",
  "key12": "5QKtbNDBtnKFRsfTwrm6vwHMATAuZEtohKz77F3GAZ7yUqFBjooEvg85PEE7H9nrp9DADTmrMkeVk7Wpn2HvFBfU",
  "key13": "25cYta5bPFdCHZ3wubjAim1Wh7eABKok6nq9TymQ2NLfzEFBKVffwcJUCtvx3AmETkfwWi3RZCgHHvaSq9RWWhYc",
  "key14": "3DEVhkjco6GC4j2cLhdmaEHSx8YZ4oWVR9yjwN6tJNzwFzCBjUp6oUP3SUmVpxFos79g9h5qc7tL1RKTA63so5FE",
  "key15": "5ktQqPBMHvoWc6r6fZ3s7iedPLWMSzTU7ReVKGXyFRZEFKNmmbaRfC1f8Jg4qKVjRjfJA6nT1HS9PiDDhu7MsrSC",
  "key16": "4f7LspYq68RPSaM9qJnd76poDmn64ibUMaKRTxwkjDWoLvHEFe9TASoJcMZuuhPGTkV7Bs9kdgfy6MGWuR7arnPU",
  "key17": "21Q7EUY2DmTZnhLzQHEinFBNJegenDWsuBYoCWyjysd3pwNrHZEhpoWDG8QpaoNSXiHHwLiQHEWxajwQD3itcjDh",
  "key18": "2CLJhcCD6hsfBwkwFFhbcRpNY3PFrWvaPBGMNACThzgn7ZxU1bP9XmpXuq1fnteXYnwpGjTE4jvVwVjmidf8M8PK",
  "key19": "3KGrUxKPcMEfLJ6zoFSnFWcMHU6igA6YQxeiFiKQpLqZaiqU6nQ4sJJcKxszkfL9CUAocoqmkZtLwCCnW82tBWyz",
  "key20": "3QJw91QD4unYe2pt6BABYBdqXZSrJvEuH7SGp67sp3P3Nz9iSAbyArycY2kF9LLdffAk3uqZ826mXJrZgqf3cn12",
  "key21": "3CM5Vm6sd3fhsVp3NTvhrDq3ZNuX54M3jxgVGbVT4aeNnQQ2gmiPJUMoyM6HZnEqydtKXvVRAtpFKg594HntNRqe",
  "key22": "Ed8edcVTtFPHYdFsSb85FB7EFiivtNywE8Jjx9TWByMRnNrbZJuhV8eHHRUjz9km6qvJ6gUZYqHygopwBMLh8e4",
  "key23": "5cXsQpfjvfYuuAueoP4aVqJqttCFohzRRPeoZHGfLzufHHP7XMgKMvAKVnqZ9xUBG75Z3BfyAbogVA1J4EURWgCq",
  "key24": "2dLf6dCQDhdWKNpHwSUyHjPpYnBaoqtEbCZvnMtT7tNGWfEweidQ5uZdH5yy4pXP8S1knWVY5935PwTwyJyJqS4v",
  "key25": "vdjeyZCZExTYFbqW8MMXqZedW8j36KKXoX3hgLrhdwhhA38AiJuzwfcMNMqE17VtfbYZSEg6ssxBAcuiq7CAWjA",
  "key26": "4sZ3zpnD2AfjnHudzmFW1tVv3SE8HqEA336s3aLQhzSP2e6z7q9f3VYpjwTayfE7jgTSPog1HMFBXuubnzxyoywC",
  "key27": "2Lz1d5Dm32sbEBgbxTKYaB7Rnkoj9igbUmeNzXVaTkDJwHnEzdNdzCnBaSzW79DJsKX7tYGG1auyFoTBLJZUBV7b",
  "key28": "55UgpMDcMTBabWqkz96ZvKfLbeoSXixLKoZTi883zrYE9iBFuC9sz5hrtASTPhEKptz85MzfbPM6TZGLaWPXeH5v",
  "key29": "5AAtbNAdnZY3xYerWGaUKLmf2AGUMtn7PRRajApNQWfGqEeHSqPdEagnG4Ygn8ULD8f3HHYHi3S89sJ42DPvcCws",
  "key30": "5qKZZuPWZTs4riYr6GakaBtskYRgGtfC6NJQb9hAAe1uLD75fdH3hPTrprvsiKAVEcLgJ2tmmnNJkVhYjcP7wH85",
  "key31": "2zNxfH72tinV4xL2sFB2BXFW2fUCBUqhbP2kbRougUAyr3CmqjthMnEQvUaURmmfBoAdCSeSvWS23vkd5r4numcJ",
  "key32": "2bfw95kbQMVZ4YQTCiRX54uydTYph8t8Kr98wqhP7q1JKfEfGYPunCozWg1jvdFwBb71NbjG38yPjXtkMAB9PYhf",
  "key33": "5ji7j8e4xxbYRcKHiyuaUWTqS3cBBjb5pmYfGFCf6ev6oP3hUyxshh6qjnr6UGPbPN9KmmYxjKAqtX9DskoFXepu",
  "key34": "63BNHrR1wuFhX1TZTqLqVxGhR2xaVUtAp8Ef3bVTAnR6Q5gQnFLhSakzVF7FsFv4Fbe2ogmEeUEexezxhjn41Rrt"
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
