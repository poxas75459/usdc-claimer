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
    "4iSHWHj2So2FfC6tT3kG8PdR77gfqVWr9pNitQHfND11Yp1C2e9jKamsMoFyP7k3ytf5wdLfA4g3b3ZKzE9dPEF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397FjDG4aVry9UDvNZBfff6NCPSTEQvNo4z7ZA8eXzJ8zU85e7w9PFBhuxhuTqFSc5WAttoWGcb4Vao7wR9PoUEP",
  "key1": "5BPpSJbYtfB9nhVJeVzN8cEd6mC6CspM9SyJZy9LBCEqCLQ9sEj7EYEfvykEr6ADd64FHasFsnXByLruBvkRCDmS",
  "key2": "95N94TGTsgwHaH4hedTcoUjppqCofLHeXukAMZtKT77JfK4ih2MMfdf5AuvNjpHNhpWU4NwW2jYcv7cQTfhAdw3",
  "key3": "38kMvhoNmnRsuczZzePSFq3wkBLiUMWQQWvRbTai43qaqmWyhVFs6ChQJt9zTmzjGrBwKgWoy4VaeZ48LiVZ9yC6",
  "key4": "4f3TPG3F625u3V7Ut2nuxAqCLsi3qUPyqhDA9DX3k8sUaPdDHVBksL3kYBPBJVUpMxHyP3ndPtgeAov9PeogT4gE",
  "key5": "3fFueDTnHPAX7973ArAVWhH4yeMgoVttzw3kZr5hH783RRHi6MqqGy196hBg91m5kbfaEi2BCbjX2ZuCiRX43E2j",
  "key6": "53X9X3d16mzyD6VXUcRChuEqivEBjKUDXEHdtmQ9ZzuGFjwjbgJYne8vAXTQKKVoox9jsirkrWCSRjGLYz1b3hPj",
  "key7": "gzQcKtkWnhR2MJGsr5aitwvEnzjHLC4nrEWUvsHRzWCUhSEzWgGfgnBt5gfpFPTFm8Nk5npN3hxsnxtUv9iCwEW",
  "key8": "56S2PQFNuziCxNny2kGLE9yquWPpY7LLrPKDH5KpS6Axcb4Tc3z95t4ZhUzdgVnmLT1yGbtTEo5M3SF68NtfHxL5",
  "key9": "PD6hZABFJ5HRWvz7v94iZc63rcTRTMUMWZtSKwLgs8iNXw9F3947rMMsWk2synvs6wqYTaPB3PeV81TuqVZJKze",
  "key10": "5UFUttPNPWYWhXzNYx4CJZcqSZCBnNEbU3rGWoEbSQRuB98e9EfvWudz1f53ucjF8Xou4Q8wD976gocEezbzvdGt",
  "key11": "4caXKCk1FVGhewXadiJDJabPGq8rv7fKgym5ZwV8fsZBfx7vfm3gquF89brHxzjUKDGisPnTuVLqSyVDXnsEnDmR",
  "key12": "27ttkteasXWpEAhhU6wZYSqjNVa3FzbMY11ZYc4SeWZscqikNgv6oTTFM1siZ4Wnfw37ajz8q4iaqnM7k8GrNDsf",
  "key13": "56uD3zntTwHuFxgy4oo9QeaxVQZDdZamm5nfe8qMtQn1jJ9Uk4nTopRD3v4vFBV9NesiGE3Buy7crn3vypspRYEY",
  "key14": "3LA4Qt1p2PGvxvoapmoJEQMTA7Pqi6Z5WiokqZrSBSLoGqnujYzTjW8U26nGJipzmsvUohmwHif6vFYeCfrwZm9e",
  "key15": "2YSsyvd2D4eL4PeqvxfCX7442eavM7JGDibzKEoh8uvT47nptSDoExgA1eDZWFDdYK7AnDRnCnMUksyGNgWzfJan",
  "key16": "3k4JuRfyj3Ra5tdRYTdyk56kGmeJDfZvJQZeGDnWnpcXYmNGqo5iiMhz99N8E7PRdgG2wZ4k6aVu2msjSiZcQKqn",
  "key17": "4U8JTARMADJZcEdoErvVvfJ3hMFU4h2SBhiofGZSTjoW5YzGrCQJ7djAckGcyc6agpewLUQut4AsDeVkyqh8X7iu",
  "key18": "3PGTY3kUKGjEHohMNyyKjAUd4mhJL4GpyMCc1obsxpmGgTCCpLqYr8ZexHeHQk7GRKZkKCj6Ao1S7JtPRYMHwHYq",
  "key19": "4k1ryx7iBaLC9N9rZpn4zTwuLwUyBdqvskFkFMonDYob3CvM4bnPRvjFNAPZT3gGfVn1DX8ko7giN6TGppxRkHT4",
  "key20": "4NGD92zKmV4aEbT9t2eu1XWV36C5nyiDYkg1PchVP1M6GJveyCqL7m5evmG3p4jpwztNs4b3V5w6TiP4XEKFpV5G",
  "key21": "2krmPbfZW3NHhysoWHi9vwoszM5yg3n5WLy8nZckmQLfu5XqdQwht8UmnpPp1BNtNaac6SR8q6o7XseXV2hZN4Em",
  "key22": "5UVw7KMPDZ2cnQFKXWkEudxYkW7EHv1E1hYCDkn1FHEzcgPe7b93JiSjc57D2C9RM5aqJSJovC1uJSUE1DboGW1c",
  "key23": "5UGbGmXNiaGHdxEayYP4jkgEwqgSBSxcm6wGo8JPidD5gYwT51nXzuv1ziYAFxtPGEDYzLVdP3QanZhUC6NQa9Gg",
  "key24": "QwCqSir4yH5wNGVNP723LAkK5RGXFCsYZKhU2y2C3vcyWtgymM8KXmjymjyekh7otkfAygZrBzDWYKyakcNbYaW",
  "key25": "TqtXbR9HdDKLFnwaF2Tgj3eQW7puXM3TQ8qK6ejPoenweE7nj91v2hyYaGWKSMfTHo9g4PCsNsjq2vdxPVJZWCi",
  "key26": "HuGZYiTfsx2beNMFYq3h2i8ndCCzL9paZk31qTYafvHFsrWG3hB6btNcc6QW4PSgbgR1fsjLm8Yfjg7gMqn5KWm",
  "key27": "5tWE3FH3tsUuWC9kWTKaud7QvaEbowWQWUafca8SjrFN46ryhYuRG1Ps471ofcGX86Ua53g6TZKowx7UTbnVWL5k",
  "key28": "2gkSYgR4HypkQTnV4VUWZG6kvLuNjBKT2qNhzZ18SownkfWmGSZD3xmkA1sD1KCD9izP95PJZinkh7mC4M5ZrU5X",
  "key29": "53XLrgbdezQ8NkPCWsisKKMpmkPMcbRHJJJ5DsWVfmUmhcnrxsZGSweL9iDscfnAguxKNHr5H43VxZLTNa2G6Kak"
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
