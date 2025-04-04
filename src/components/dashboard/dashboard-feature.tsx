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
    "3rQRxPS6ETSqotpDRtcinrXVoS5oitYeErm53jwKD4wnzddE45L1UXbzb4wxECfPZ3TQtSju8j38Y9fr6st7XPdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywwdwqHZStHv7AgNCBTovHvnnmsbecy7Lj3PfJPXccUtw37z4aPUUULM73LgRzTuusiVshmQJ5A2MHbVe3pqgGD",
  "key1": "4tENmMJKQz9pc6rKkn1wZoPc8UisA728B3BAtXCFWW6PGreUAxLrxFcogchhS4kpaCrVtnyjdJmAQeztZAFZcLpj",
  "key2": "39b6JXLRNsiFw9Zv47bqrb3X6KBud9599V6GaCHW1FHCf8gUkz2E89jm5Tj7enn8tKqtQeULhrVGKnHYdvWUqakP",
  "key3": "4iBHA4F3ou2d883LbB3476F1LtCNkZ5qQ4sSAk77vaSSzmKWjn1jojb2qPoBhxUSjQ5ZcW8wLKSSaWiJqiMNdRtf",
  "key4": "5n95usxtcVPgEmkJZpeMzj8JPeeimffCqECjEd27hqqTwAoMxwKYyrRbd5CGWncQFdabKLApbv92JVCzX7fzMXDZ",
  "key5": "54R38E28vryfX1ZYvH7Q3K4i77PdF3P3d2re6To5URB6EsCzB4L3WYLFRKdsZwT3JvrCKjEjHrmkNKnwpwQSS6xz",
  "key6": "3HPhv6ZY341yrU5Yf2mnqFuW8e4AGj7svmEnzYhN1EtVF3BQksc5mVta5ZrNk3kQvvty3jvoFY6gYuBQcVdC724Q",
  "key7": "58wzpEL1EFgnNxPCJXvfjWDZpG9PtXwb9xmRBMMq3bAoDnvSD8iffALzSfbhWdHgGKLKChULD1ShtEgiL3kfZ4V8",
  "key8": "5R3G8YVxpj4vZfEMm8wGfHc1aBAA3P3JzmDghDPDxfz3G45yN7reP6qtxJp4GZ7YNhiG4WhVSMkXjm8pUeYo8jYH",
  "key9": "4NFmnVXk7bgb9PMB5xanZWDivMu8vTBFKLogJWHYiEmhVgsUepmt1K7fp2p9fCZzioidyXNCaCsrVJN32MsXYFB6",
  "key10": "19aUxot1UiXaLo1MtvmcpEoWiabX4teaGFwkvDWx5zvzLkimo4jwqLuQK64YJs2rCTB3BZNgtB9m8mUhHNetTf5",
  "key11": "5phi9SwDPmSEjaHgxCT9CeSMSyByU3whB9xoDEMfVGB5KKQ1HKdNTbcp3nHsPHckZ5WB1NbtPjjMMNUmVj9rL4hj",
  "key12": "3wFGMF82YezNxN9AeFo8xaHiYv1s1f8PApbeRDSXS4yMdpfPJg3eNDEvNtciqAxpfCfVkZ5WJD49yUc676WLtJBQ",
  "key13": "4FXoorEPVaiy8NjZdP6vjB8N3PwHoEbup2DtK7rwsnvyhRBpy7t5qN15mWBgDrm3aF85tJBbAGMzASBzPe1VuP1M",
  "key14": "4GUidXWADtG1deTahaZrPyTiJV6qKarR5Ru7LpH9iFZKbbs72rC7T4UEo9QKvqxAYswbZqF6FhkfaxcHGyjTt7ju",
  "key15": "5qoQY7jAnTMGHhv1LrZD28EqdHSkyp1ns52xPp1tLfRTVvae7Pj8DGLPDSyLGKToZ7dT3RCyGu2AbUG7RTaMaEFW",
  "key16": "2HSoXLyqNndasrJPwszhZ66F6r8RyVGxaW2EYcUR7x2VC89UTA1LFd6Zm6B3RZHomcZ67SBJynpiuA5yZVS9d7hC",
  "key17": "GJYfHpWYN52tF4aGz6HKRmU7pUBnY8DZ3fhAbZZcsWR7JKhHJpiT6DQXsQkrrW7DxobYresqrJPqe8YR1hrnbAT",
  "key18": "2jUZt8K5qrff9tvTARrdfyN7RwKMfyxFnkSY5Gnc7JELugsxER9dDnR2tEemnLfBWfYJsA4Z2JvM9nTWroijHrki",
  "key19": "3rA1L8EB8S8tDtur2AP6bntJATdQuCnB5J33vs7KUwbuG1Edm4H5vfcyZTGBa5dWiJUw8s75RGz6S8mo8vW5bzt5",
  "key20": "5FnDvKNVEzqqF4s7LJBbjghMQvCVaytZTNfDTfRSVeCPCFZCjToojBZPmmVKbDpHpcb1ah2MzRgSEHvu8mqwQjvj",
  "key21": "3Hf2CRyoFm9s5CH7ryGYwC6VMn85kiU7eykqeHecRAdyNVEaC3nKmf6z5BgYqqc7Zmow5G4EoP1vrDd7dL3mWEaa",
  "key22": "znUcj2wDwvrMKKKGuMTu3E1fRLdeQLdKuZivCQodX8aBf6eEdTCbdaejsrwXqKs7JwFG9tExdVbbfDiRyYEWhBX",
  "key23": "3aq5EqW3nU7DUyMmXSMycNDsYAXYtx7hMbCgQKFUHg7oU7t5nPPQNZYQ8xL5ePptXYKoxtGAm7QncutVFXFjHxR2",
  "key24": "s3wxYvCuYi3yqMNJ751HPPP1bcxfiC8A1FHWBvGhMaYhwAF44YA53SBQxe5QZQEVJ1UxmW2ZjhMupPHCM7ZwFbH",
  "key25": "3UxCUcTDDhjDSeUwwRo9Z581BGb9gXXLjoSkHukaGSEtkhT5WoZyebvmj9CYL7gYbhNqbaPyzSqFHeHQHK2dShxg",
  "key26": "4XvdDHVv6tkY9uSor7iqQwMD55jMqXGakw3UajJYU8oot54Km3Ld9VGMHiTpVsS3ipSzZvqPfoKibSjrYvyxtVZ8",
  "key27": "2smFneC26tQG8cSTnEGzJJLseMLnCCtMu342jJTGP2NXmNkPdo9y19eAeMfXaCxapWqUFArHYXzfLn6qpr9VbBSZ"
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
