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
    "288U4Z3p7xVEkxJL5J19Q1iYoaz4HLL5P3xfzQXmMYhZZpSKMKwBfncJrjW6fTyYYLYrk7u8RGeuXTBgyZHnrWX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQ9ztwwQtv2DG499XGKkCHLFean8xU2ddz236AVpK6D3rrWNwemueYxUDvQPZCBbnPXSdPPuBY8K7wiuhNQquHF",
  "key1": "4eCBh4DVbfPMyrew6MEQpZQ7rN7rhUW1xFu1YgLLNuqoaAjPwkWvNbzgM26Sz2NwHjtZRWRzH9H3WzayaW2XgWBV",
  "key2": "5LvzE6bvMsFvKCHaLfgePSbUM9U6KWrUtqJMZaU5CCeSHeEvWmYp3s5mR6jHaxbutTuUXVRGJV9RrRkdNDRXvV6g",
  "key3": "4mPbGZwFepXuQsXMMzqZCtXBdqa8WmvhZnvgoVZAcHfAUyDgJ2RyhwH72fzKxvPPipbrzV9BanVZRpVKfxiYY4cE",
  "key4": "5dvBm2kAPXQ4XVWMEJER8wLMkKo7qeH9QMp9221Qaa7ZjRr6XQy4k7hcy7PQ6M3SfxN2aN1ztdkZur3Se91mJYfu",
  "key5": "4dviMZtqFy2kVWAxBsMfg4WT9hTzyjvkHCcaBTcoGFynaUzixDCUMDjN624f328zvGHJSHCbradjG3m1W2WRj4Kd",
  "key6": "4GFBrunduQZAJPnsbLZUYxJU691CRkmDvgB5hMABhBXjR7LR9MmF9d5RXw1sWzK6aJfcL9fM9D3uhJJKL6xB3wr9",
  "key7": "4tsiGK8a5bzjGnZ6TpauzWfFtH93qnngFum8WLonuvCiHJk9wZKopGFTmZoYnPWeuEqvTdKQ4EonYseYBAesR4fr",
  "key8": "3pBHPTtCZhaN6UHuuVS5aCmE4xuYhCVWjaBPucXsZ7Tzc66KiNF4U72SWS8iTXvmwgRaGbyTJCEu2517LhR2V19m",
  "key9": "5Qe1ovdBtqyD9u8MeWVzvgK629dk4EePsQfYWLssL9d512Y6hKK5DgcaCYPEP65W6T6JL2PWJyyB3ksbdQdvhQqA",
  "key10": "3Z6B39co4JZyDh39B2fUZFiFZNjcwqhkUqz6xemUMqJgcXFaQ7Emud2Y3BYYY5jpitqpeUPekCyMzAq56vA5oRFg",
  "key11": "3gd82rtqupCyDL1cGKpsuxPe3kxfwJCCCVQPGez25LrvyjwqEw7KjHTVmGK1YY2YkHxNkN5nyepyXCBankjogW2y",
  "key12": "4imT98YzPmE1BwNUHMS8z2MSAVFckiKxeJMeYQ5RxhsSdkJiDogvodWrLsXS9uJF4eRrQnLZx8aGYCwZJcRU3428",
  "key13": "2oawnRMUMM6QBxX3KUJuQaqWdyCEPJuMZTg4eADvSdxjgNLpZdPxX1Rpb1cUEN8DfhR6vfZ7moADA31N7NGVmpJV",
  "key14": "3qsugHtMPuYzgcQy8Krdo2fhHVSrnjwgwdWDki63hEEwDGJpGQjBxStasxqWj8Z6k1EjeGMQmVvnXPXAUGLUWmGv",
  "key15": "2kRxvs2ueDreNocuyNWfLRSp7At8cR4f6qsERjTcT6zpiejgcTDAt2MgDQQ7vk9JDa8ChSki8GeurorDqP9kzXzp",
  "key16": "3APuVxYWwfSrLfuzBAYzvsrjhkM4LHTGFc7R4sw5qkmgttZoeNyfvhna83HmwCF4EdQ3QusJyq3D68Vy1TE2tbf5",
  "key17": "58x4qC2oJLttd27tn67yDm4Ao8bTQDbPLT619mrZnALD8ZzsGEwrm65M61JUfxanaNZwrGncR9EVFJNZPiAK9soH",
  "key18": "53tSe6UjaFK7nr5d7WbbNnp8wMjwdoJWzsrsxedCkC2Vd127D8vFr5SLjtQ9T4V4swiL4bn6UeHjGVxaa2qaEKXi",
  "key19": "4MpjQfaBdniBH9pBXLzU67jpd6ycWpoy9hSArWqXXtPfLywX8m1zbvBFtUUjSLSRHarAV1XrSyqYRePZUPNyLsec",
  "key20": "4fbXc2nnNpFS9hmKUqF1eigNnmrZysGVVqqMC3MHnWDvW4TKkBLw71Qx99YJ3i9VNiDrz1TRskLVdgCHRgKjgW3p",
  "key21": "Gty68W9oFKSWvY5u4G9dwafgeBP5kZGQF8HWyjc7B45j9XS8R4xcz35dJxRy9VzQo78K59gDFxogoF8sdCVQgKZ",
  "key22": "4VotA9FwbZXwrtJsPDzUcCUqZY8wGUrHPXWA9oKZ7UKSCGi3FX9dMxSaRwntMQ3MNKATYxCZNVt7gTMVLRzcsG7U",
  "key23": "5uGTUkmRg4XzNT1AyXkA6KhVzdXLX4RGZ18vs81ErTyy7xB8MKK9jQY7PoPiButh2p2VdZfr766KP4R7y8casrZM",
  "key24": "xVzhnfRFzs6PAYQXYctoGrLzjgTaBmhXVddTiHDEETDZ5RN9JzS8RgFqnhzYtGvY443g7JSboF1G5t8aAGkL9o5",
  "key25": "5DqSnCcv8RNmXzH4ANde6GPzdCaMEa4ddYqXu1jKfxKx35MsFqjFeyHyvWECEeL85Ah5hiVD7v6ARwUdcfo7gwvo",
  "key26": "4ywtB5SNLq8h3QFZ7CUZMgy8eeoaifYoFnZH5yqRr1bLCzmLJbZq3dWp1s1mucvWiTFe6MLvNgCbWyoT4vMcXU58",
  "key27": "64oH817UfaxwuukhNrzLrCmSZW2SPxiFJvLmnemkfy6sL1G7N52LH4Jzg2o53x9YUgpR3FSAFiBmpJFsNa4mxuKc",
  "key28": "4jNpnKsgeQjpKPhAhguZhEFXAHZW7d32sBijee91VjGQGdSJc24W1RzdqsMfqBYNBz2sLsCMhGc6rqBcTjMoXzXT"
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
