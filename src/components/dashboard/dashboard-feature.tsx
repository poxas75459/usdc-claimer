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
    "42SsHKAkZoTZfdgJrzegdTJZJgNb1cjyV3QD6jk87DZF2js5TaF78jZq1AjHbwYKkzjjWCNTKKkV7ThBBLoGJAWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5g6iBzUCqKzodfU8vDYt9gjGGBZWZd4xXu968zQWu2JDQGSuuw6sbSWVor28px3sx33tEg7k3oyfz2CJZbBZUJ",
  "key1": "3sc23RSXWKhW763j1cYytd4CVRqLbz15pqbKrqVP9LU5H8ZMx9gzY47Uwa5FCpQHALqvFUZ4rpKDLxRPEiLn6vc9",
  "key2": "3GNam1gAzEoH9U55qVQ5tBtc6XzZoDhosNwpP4cmNuV581Nbgi3JjFXx6JFq7kBFomCMWHwxtHiSzbWYypuRJDPM",
  "key3": "ah67Fyede355tucLpaZn26m6Ji9cqdUbJFGDdaT5iykeMvVbmK1k5eEvA8HhhbLkCLoThKKiLydrdq4iS6JL4e3",
  "key4": "29opXuB3dms3NSFG7Xi6sutBTTgdWAr6B3pY5rUhiK16mJpJ4QDLv7ToX15GmKHDPks3bUPVKmVQ3zLxMMeTkMRK",
  "key5": "33oFwapsp2e6rfsLFiNwx6imeHDiHR8RLuAyNEkUgeY6XMJBAZxxbGnViunD7UweCmwetbNkjLGgTHCdgDfFsJxh",
  "key6": "2KgcRVfRFnSMG4aEAsL6UQgyvneUa69TNfY2S73NsqMeeK4cGhRMhMBXPV9DHn18Pgac3ZwcxsD3bo89SB2BwSKz",
  "key7": "5RX9s4n7uf8z4GMiNsPEXdNpMb5jmYD73GBNX6x39Xu6bV2Qa47FiAbgJepHKvN8A2HqAgzMupqp8gdDucr9Fhu9",
  "key8": "5Xj5vQXbYcR1bfheWqx9u39MdHgpiNNcgsD2WxrgPXzUXwG4AcZFi56Gicr9TMmcWpfZNgVHa2v6ziAoT8ZJK3WN",
  "key9": "5rQsqS1wuRqg1d6RG8bVpAJp7fMZVX7nZpKHZRCTsQkzH8aaqji5kTuEbQ4u2RpBkAFHdNazLJz8nH5VupmKRtJe",
  "key10": "3uRdfRxjhwUWfdq9AsjKm6Z6BfcfvgN33Ecsnq6PEFMrcBoeAskboHCtu6vtLyWWqXsG7hYrqpDPZWDBtYbn17Qy",
  "key11": "27QCDWhqyqRYBehGCkdah6qX31DaX2rVaMREM99jqgNcoPaxbfPBACEWRoez938Pv8zDWriv82Bn5T6jGGuRCwJ9",
  "key12": "3oeG16ZuKtNd1o6kT1BSJHsjFw56tNVhJQ9ABURG79Hc18ERya9APRpSvnAyZKh4EtSDnhb9LiFuWokjMFM9LXmT",
  "key13": "6b9ANzuCf9wzAbqxvYL4P8EttepF5j9xTcrYXKi98asc7QiRLY9Fe9Zfoj2sC7iLuYk8NSTvmpbyiuDvMxHqys1",
  "key14": "5sHeqpyA6weGT1pwsKeagD8VcretavAdtwGKN2Bsm4pyGYzbLJESuUtkdZgdPUHaNWxx7Zis6caVDMSUrp5mth7n",
  "key15": "4CHtTTkfFTQoNYkkBo5EpS8PmwVJX8MSTGM71T3Nwm57duZn13EaNvwgDBYVSZeCRGekKifLbyhdXjszGV44wdpM",
  "key16": "62TnRQuEfH3R273vmi3fEMTGfNbik7P91fMpUSQG3aABHg5B2RxY5FrLSfh8SSj6H4rB4388NWpnsi9BZke4KaQk",
  "key17": "372NWQ5h3aKTVYKdvgAyKY8UFoBcgbENN6FondM5RDao46uxMXJzENwTo9ZGWavi9jjaTQvTutfYPKp9EAxwg8D5",
  "key18": "59okU8iLc3UPTXyznkrFbEqHU17gHavTqdPGoQC4ucUq3LoFLpqW6KzpRZyvisFwHgfy1dReX39eNUwwmuFomxap",
  "key19": "zfCZphNdnActiVqmgFDowJ8dCESrNqvoC66nhZtBJe5YhBJPdULjNgsXuAYWsFxpRH1ZycxZw8b86nW1T9LnYmZ",
  "key20": "4fP7EzZJ7Zowqd8nymuZMccLcSzNf3mchhmBd1dLoJn17QekrtPtWrbxcxmypy7M3R71MAWJmANxbseBnmN5e7F2",
  "key21": "M6W7yDNX1WJi9mjRShxCimEQvDHGehSNJ8sTkoBaZ19bydCPrxL64FUVv7rftXmXvSH6XnPEmcD6EYXoztPEvT3",
  "key22": "26xYWEjYuHhRmfyc3ZpuXqdxdc2N75djuL7vrw9fEKd9cCbCA7SRwdB9L2YoeGnNmuv7JFuhrWnZsk6HvvfnRUKL",
  "key23": "38owDKgthV7N8uUzByxwjyyEbSL2mrihQAscZ25TY2QzHuWKDhdborXEZMaJhnXkjqbcM6CCbcXkJyXkM7KWqAs5",
  "key24": "GLp1Q8Fxh8oxhDp5We4ErCtw2zEK2aRahuJzqrfve4RpXrLjihXcuZY2JiGSEdfLgKHVKQFVyKBrF97sapU61Qa",
  "key25": "4qADUvDcqt3c2kksQwconYnS3cSvf8pTJvaHHxoK36h9oqdp11NGLqbcyoWvgdFcpkp5pjpESb7YoPSwPMTDkKC4",
  "key26": "4tmXFGsSy2YJKTn2uFYPcHRekZrwQA7s9zSGhe3sMuRF8JzWkhsiez7xYeeWuaxuUHd1J7mRW23bj9t6uM3HC9hE",
  "key27": "3x4Aj5xKPSfVPJodxTEW2fexmkR8KLmK1zJHUDE1EEhZdPp4xQ2MR36jP2M8Xko4EXSV95penvDEEiUMx4VNQUkN"
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
