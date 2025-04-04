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
    "kPQdkkNiVpHzwTuBHv6jJNWiNKg4zVU6bbgk7JunnRMqYoCLCCDiz8xKG7jNbA1nFoW39anLk4MBy5BUsM86uXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Pt381Gcc34TD9WSbGLaUBoi4toz18JGdwSDzNSk2NtESFmJTyQXFFsqnjeq9gZViifFPrXkb7jEC4M7F1bfPnP",
  "key1": "2j9GWnTWeanKo1zJmW7GFwTW85BvbQDSDb7Fnzrpiduo1pCGsYEHvszdHurfkNvaz4jmEozSTfSV5MAKiEfLZAsy",
  "key2": "XzRmkjzC4W3obUFJ52QbdVn6vBPihP7VZDJ7W8a8z6b2idS4fy3mmdszkAkqiaux6k2jG931iACcieh35rwTMiS",
  "key3": "4cBJVV3kqxHjKf9Z1YDYKWXZEHkPhBHL7WC8rCRgj4cMmhvkLHK6EPsXrJjMgj5ab6rNuovvuWRJigeczeeghSAc",
  "key4": "fRLgC8PSswLfD8pDxL2nJWeznXWoTTiEiDVQ6YWdztMGJxZmcKojMWTzHgVvvUb3CV3n6V19oS6c4JpnnJHMNPt",
  "key5": "4ozeSYKkRAjzX1ZHD2UZmx3TLdq4EzijuVhb8Yhdorid2uPr6WsHWjtNkumZc5G23cmJPK9QBR6uhHxwTc39pYvL",
  "key6": "35vmXLsk1RNynt3FM7d7BgKAio56EADpyc5EeityGLvNZq1pojSkuQaeewNt5LDvDm6A6GzDm9CyG3U9odZByM41",
  "key7": "5zYhRQ9RNDUEGCK8Mpu3iadvDARQ9sH9JFuH9PieTi4e87cwk5VRmfzjwE6c2xRjmmoifdC3ut9y9Lo5drnjhLGT",
  "key8": "5S1hseofUQ3XFgrsfrT3ExCQKn7GGQ71FfARJLvm6KZ5Gs37pMMvrk1YphzN8FddDg9vfGJt5NCQq4zcCQuwd7dJ",
  "key9": "2uEc4EWSsShuuFPUgdTo96zUtZU6r9twbYTaskgN9udkCJvrUzS2KLJaxZ3ocxkkn1uKTaot6STv9uumJV24nL9G",
  "key10": "2YVXKKSWZvqENtmAaB6aMrXnexWJAs4aYXyVpCB6uSF9HHSiGWAtEvvPpFoey3NbJEfMXQJ7rcg585k7SSWqmeng",
  "key11": "4RYBUjzwpUcyP2A4YcY6TsSA3uiWocq8Y3bzVTJP2VTdQicNyC9W1fj5w4KQEd8SHx3F3m9ydf7jEHE8qK1tLKrQ",
  "key12": "3P2xZrVbosUh13Ni4EDqbSaju3mX2WWUBhDut7axYTPautpCMQm2ueXNQsAoLyYkWDVA2RZ3BaXMvFrPLvzqtmxX",
  "key13": "5ZUteRssCvpetPME6BhcVKqeWEMyQanyVcB3ofPe7174X7sPLmAPT7DkrJ9as678CpHqDNVETt5mync6LhU1JNnq",
  "key14": "3dmfTpmVxsUhimFz9Sek1DYadRTK2GQ5HiGqdXqdVv3Yi2uvhtLqpQ2G7rJGQ9eyWvNNPuG9AZqK3qcQx3RszdXz",
  "key15": "89m7AZkRs51zbhjUmzEYsXB8EHWdx5j771CEC1MNivhBKBwYz2Mb9g94vnYVEGRUUPrPVVwUa9kQApywC2hU1bM",
  "key16": "HaYKN9kPQgJYmm19BdwYGA1Db6VZAbvqHnvcD9XU5UXXXE5ULqALP5wqRSxj2b2oG54dDYn9ubhD9XNnRoYwboP",
  "key17": "2ETGo62egsakVQgB4wPH8DJGHHWYrWLGUHQLGY7G8LznUVePrs7wx9Pgw9NWwUZ7Bc3AmXMRcQJBCAJE6336oPjX",
  "key18": "24DpbkrWk29op3dfVhtgABMZieEcoZoXAKrhM29mstmPEcg3rbAyYm4yKoUxEPMzKuRUyHmYkMY4VMdmh7tCkZGk",
  "key19": "2PTyusP9tfwjNxj3M28h21LrQ8DpJB8nDavpRbfkgRvmPQ5GLePpE5skSLSDL6sCzn5EySBNhZXihFyg4uQ73Bss",
  "key20": "5b8VTpUe7497QRDunBp8ZX9cMmpRwE9KWPixjnTRxRnQD3pFEA4B2c28Hmiu5cPW8HqsKJZVzZLMjq7YRHVCPMzA",
  "key21": "5Qf15FKd6x9pcpaFTR68h5xrP1sLpm2TiEbxGv2PJHjczjLCg6VaNEc5y8Lvb4rS8snM7cWp1gcPuHmd3j7Lnivu",
  "key22": "4viUErFz1uY4qCh1L2d8LwS8XE8ooW7Fiq4wcDHzCNYETmx13d5Lsm9FAXhXXARwJgvVK4Ut3MPJqAgrBcBucHjJ",
  "key23": "321V4JTyXiq3uWSBk4c2Z4bRq4EJqLyDR7jy2SgvjAZUhpCZkXtJtnQ4UEEYmqS6XKyE9vYhGrrmDjEDdBH7q799",
  "key24": "3TTKsyN4xDt8bSGoHrRpNB4LqqkgnhSjfcFAQEKJPw7Eq52t9PTXV9ZxRDtowe221V3vX1uLY8YeQ5goohCToURe",
  "key25": "5sNKXWEQ1JMHKN9f8SLX7KaJHXXqVnSYc97CXQ9tZv78UQFMUrdLoVnqPPgXMk4PeMpwWumnBKy3RuDhkgJxvcen",
  "key26": "PVzKExC2sbfjSe3osBVejry4zwxwp2rua7kSASkTHRytieyncG27Gj1houWaUjSnsm2wwcDRB8cqL6ms8dCM3ds",
  "key27": "2XPCebfdBx916fKxmF1UedQJGBYWpjiinikQvRR39qfZbShKYBcva5vSfyVKH1aAmTLfftdQ1BcX7yFo3NY2ePD6",
  "key28": "2Vm94EPHA1S3DDKqVEvP7fZR1NQUzMJxhzDQqgqYaUhLvx54eSSVH7KMuKXm9d1HQ8YAvAzLA2CtTPni4gHCRay4",
  "key29": "5oUpaM9YGZmGegELsPFjjdMo5ymePZvuPcoHczcs9GwepgvRza2zQapYAAs2zrb5xQDa66cqq816xPVAuyJWVYfE",
  "key30": "FSJBGfBRvjBkp1dyrdvTqxwDcPQgVidpvu6WhfaSEKmb1UrvHr2p45h9wjYx4HkLaBM1iF6CfZP82FuHSkBZNey",
  "key31": "5HHvQ7S2HhMgGWStFpac3Eycg8mJQVNzc6hdDNviqKAdfoDTA6kHd2LuZBdG2uuXg4XZ1WVStWUxNzYTvJr2zTsC",
  "key32": "3H2eDZUxAw3tvZCMvWcc7xsVGNi1uEn2wonB8WDHV45MMPfu6Nfr9TogkECWXxGCLjuw1LCbUF4gTKkJ21dam2gS",
  "key33": "i16D7wYpKWUxUsyQu4haEMMtHFW9j11wQUCorPvwHWgsgn1seKuUEtUvJ7u32zyWYd7ERBrLM4foWGmuctuzGdK",
  "key34": "2fT7773fJbqJnghnf9BqByYo9iAPiRrxTys7DivQyR1PtMDwsMSmxv56mZVT8CGp9XjjD5Ad7XhkuNZNq6Uu4RNh"
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
