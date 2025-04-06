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
    "2TV1S8sykepaT2oVuqEzXnLvLnL4EJasHqms7NVY9L9Y7TP7wZevp6E18DTyKkp23jmCey6rmKxvkmvxhzLK8Fom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUqXMQPg1hao6nzsBiVF7UhDKeWh8bi2SRJUQB37x6M7qUCdK92hHqS9ZUErFfoTxJXsGpEbCmJj7QM6WsMHo9G",
  "key1": "4b58iJPZ3DJ6rswyR2C6aUwcV8MXKLTgoUFtFb94eEEwGgPzLosNEgqAGqrsnai4iMqQfb88jewaYxgfKa9VNo6j",
  "key2": "Zu23diGQs1xSGSTX2qmABGPokUffyNLHkVc3KCyW3gsreTanMBNaH3ZhKrQkkHHwz2w89Y2H4YkxgPA9MRMYJBZ",
  "key3": "A7EBrvWKut4Zd7VsxCM9FiCQFBz1SmabLBpTgE3qYXRSRQZ69uYLE9tZBNnUuUy9ezAtcakKygV5yRvWH3nVFqu",
  "key4": "3CksqcNifrKNCgqVB5XxZogNzp4VuijtncEzXKLssGDhXPVECz5r6jJB4fs2Kva3Ddc7vkVmsX8X9ZvpZjWdG78W",
  "key5": "4xdD6gTCd2HjNEBC45r6yVuVPhbUWcN1pKJJ4X8B8fZv8gJpJKxu4PPuT3ES3G5WJuKR7PHiZWsbHp86rjdyGbX",
  "key6": "3iTUAnqZG5MudxAwRdzAECCFhGsycmN1rBr2AFXVAPkJy4AWaJLGga4h1VtEFZWgs5HePJhwj9EtmBiVy9MfYSP5",
  "key7": "3VXF5RwrMmdERsLJG6parENUYU6qKP7LZFixL7KA5bjjnkaXMJRjTCjsKugnLmQ1nXHYfiC1GsToZga5PtmfNcMD",
  "key8": "5QQXzqnp7zYNNLtwxu3RCqsUSNjDPkKzyS8ARpNoYk1UiFNXbSS1MbshpETVt7HqExeLD96nx4CqHQJVrtBKMUiR",
  "key9": "5FrQeCbcqvNuvWgjRP8KTqsSS1JpU69qG2ZU3fbbS785VYCAp1nG7TPj43rxKu9AvP8BaSYrPMfxGhVAPZtbQRuf",
  "key10": "4TaWU71TbqoJS1sgB8FyK45U2LV31oyA4KshjHdF76hnyqB1V44prdPHh9e9guyPRfAzujdBpfNekfni29rf7ALX",
  "key11": "5LM7bVHrNVRSo61uYsoQ9nqXoqxhsBiiqFSkvWrSuVHyFAVdHaHDBmZvmEUUoyXpuZ9uMoJ5HqGYmEaNYS7xeCPz",
  "key12": "9C1pszTHWcCGS9fq9JX1qNkZzYegJrzAV6PwVXCk1F3sJwfHhbpgnVhqbFXcs3bVhQqfcPqPojkVGP5PBH4Tygv",
  "key13": "38RkkQJ3CV9f9cFPhvHskDBVjh1nU86TUJ6gqaePr7ycMqGiU5945STFGuH9F3B2nrewW59MG9k755kXSHGUENfX",
  "key14": "5PSY1goCsLT535NXtgSgZUduRxNRtESgvukxjikVCZdfizpLaW23zfpj6x48WFuEGVaCcLZT8jFRJ1647oWvufDz",
  "key15": "4YzqjHJ2Trvz6FZb6yVA9Td5mQBpPRPxUB8KUHENAVzm5cQozwW7hCJSE7MzoG3rVxJdLE54hJrBDf3Q4W7DkoHC",
  "key16": "3YdyH4359iKDGsKGRLxcMq3m8q4esmgWexGAAtcZSsY6pN1EaoUmnN7Zyv8w5jjkKC3UZKNbVHVeUcgCvK3xSFaZ",
  "key17": "Mn8AqqneWggTRXagYmBh7y31jDDPqvvXbe5jYMUGkwRVLdqv7E9ronNGYjVGCCJWryoySAC7raaPd5vnQSqLoTV",
  "key18": "3rDgaXFimpV5NH7Vau878mwv9rswmjc1tSgsEf7um82HTCrywhw3CMv6pxDxL3ma5BoUD6GnvNuBa2dXsmbxv2MD",
  "key19": "zqGa9TicyyY4mEaKHhWgF9WLQVdamLBAnnegoYoJ3eo5RVw6QYWjcJziyqwPscHa747xp3veqGx8XHeymhDnoGX",
  "key20": "5gFhM7KyCKoUseTt5tEC7CXyVF8MgfdGFQDgYXB5nsSsJW3XGPKc8npwhhVwymwknzeMLEGVTaikuKDhW6SFTVm4",
  "key21": "4cqzC7PndRLtfrBeXnUfxG7EDbdEwN8bmfkZoVVotCoQBXmyaWHjKp8SfFQm28dafM5h6Hve2XpanoYT92Ze6WiS",
  "key22": "65ngEVjTg5Eko3M9vsZ4YGkyuHwWqmc46cj9227aMYjcMzwFwZ6UjVfSyCTRtVtzeMU1PyTf7h4Z6Q4CdYbg4rnV",
  "key23": "58T72WAPcJD2AawwPFX3czgP7PK9SAVnvsRAhSPaKoJ5qWQYWxFjidfT5ZHD5Ty577jUwBHEuGYZmJmahZRZc7f",
  "key24": "5mHhX6ujT1i6KQ96DgMWAbNcwG7Swc4uReUUprnfkk5ABcrKRvYXyrHQF8wDpfNBj6z7evsFPeoKXhdP9XnhAEd1",
  "key25": "5obFTX68KtBq1pEWR2ad3r5qaSEceMALYrZXV4uyV9h7pA1fabpAQ4tCSM8R5RVP4VcoxXutiSdAqyyC9pdG6otM",
  "key26": "5kN4j4g4EZ5Vaa9kPNfN3BFJKf65xrRi9S2yUjsoLpWPXhRkLYoG5VoqEN171aKVqxn55eE9dBjAJWGsfmhUXy7t",
  "key27": "4N7girKws6kgJGBBuzsaYeipwUY9FvQKxNqFwdtUHFn5FHUQDnzM8ji5kEv2yqGYWFF2pJRCZpccGkEjFbqKm8hM",
  "key28": "5JWDM8Umy1UmWAe2UWTBo9taEMSZvmqoiPMaFmEv8UVHkdsEUKnjQanjFGqSaBRVnEw7qKrjYHRtQPfuue2W7Yg9",
  "key29": "4p8i8xAUHMW2s1Cw2xfZrK7xWUZPFxcHq3nBn4rN4R5ScZrztwyPMpvrN6mZc3zxVKEWhhsDTctimTpSn6dzYhtN",
  "key30": "5iwKyZgRNKSZWiJ6sKkMzSQFtqJ3HxoyxMApCiR7r8Nzbw5Mp4MpFaeUJPTWdt9oCvTtRGPGdC2DfPyWW6DD7Ban",
  "key31": "4gTK5ir8GHfXQBttcAkhivqcrFFEJW9CH3naxmKZeDhq2xbGk9DqK6ZLPnsenVbY1mv9U4bspjRTEFLECWNspye3",
  "key32": "46mFKxdYxoqJieuQBGixFzZDgoz6wz4PihWupGLU763oaH5dpfSccTb8BWitCuc34oAoaHmavQhZLxLhtPoTZRbv",
  "key33": "2AsFF3X7AjDYzQkAdcDJd76wK1xR2bjcF85n1znE3y8pRj1vRwPvUuK4AGRf5FjxAXbtwDqr5uwUtpeYoGBkVFbV"
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
