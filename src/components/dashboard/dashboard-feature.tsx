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
    "33o2NYqzqpQjpFe3PdEYY1H5wzcrAjMEe7MT8QqXNrrDngWkQqjdoUBxo8WrzxFP6EtExnTkd54sjfsRuMuhC7K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFXQ86yjtFL7nWt6de9KCDvnnmecJgi42gb7meUrGkAg9gywRQrfxG64DnCYmWuEbynMA5woFLfpCWiaKikabsf",
  "key1": "4awiq8oSwtbkhZtTCNBBcsTKmiK7NmptXU6H1mGQMisUSx2Pq4EJfTcjkWKrwxu4VSiX3iKLocHwhxK48u16MFyy",
  "key2": "LHdJZcvSvtF8EjQ29Lbw6sGzTKWMXwJvZ9HCuN9EE6Ps9ANMcTmxwMBH4gtNZQZzsRHYz1piCZD5Sqp88majFqr",
  "key3": "3SxTW67DtaDSSFXzxSVjBEAxgMMcZqgUcQwwMq9ayRh5fJQZ3SEdUuvuFEhkRBRJEf3Q9Pfbb1PDFyhTbdhSNg1f",
  "key4": "2vDfjbmZRfnn6WkzVHDExkV84a2fsV6Firt1vQwHeKTECtRCfKcMGHUZKz11xcDD7qB9ZAX128MLDfBscfHYwt2T",
  "key5": "cUuex4UsKyfXKUCXDD7gRmEX3QSq8FqEKXuDVZJXDQAm6NBJ9753hywdhjEdorfFUUDmC8xi4jVt6j3VkAwgd55",
  "key6": "4RwTQfp5HDR4u1X3WnA5bWCVnsAtt1uYw6Een4z3JgFQ9d65rydMwETk59ApTR9ieNK9C7uoH1FKyJAmjFjsrJGw",
  "key7": "23N1EwsRR2ijbPy4tU7AmjqEVzSymiKYzbaUy7ifCxwLSTmTRhKHxn7aVKCFci3AULc5PtN85yi9t6yyCS9wB6L5",
  "key8": "34ULacmcL7pBtV5MXotgG6LCRPjAxrKjJ8nRVkdKfjSSv3aTm2BerGdu1s8VNKmz8d6gf5P9tu8poHhTcB83mQbR",
  "key9": "3zwSjSMSdimXqHxiy3L49xxSfYdxKjrEe9wwjWozzyLp2WRaBgfgmTAbhwk8ok67X7r4M4s8EtRtRxVsrjk19p4U",
  "key10": "5YV61mKFTuZRHen1vaZ9SQ5Xx1QxJWAVHn9hQDXKBHJwis4ZWRMwHeFE9HWzp4saHPuU6T9eQNz4Ztp8U4W45nKB",
  "key11": "4x3B8SUFagN8sPKF5XoWdUQh5TRQsbpHsLKajci6kwBmJGSJoSPDEdV1ruyWhJYt38Er1a6KsvE1LETHoZ1pksKB",
  "key12": "2GemooqkSVi7hpx5htUehNBmqt56MrvrYeQmxrkcZ4dQ1PsuJZ5wVz6ZMFtWB5X3d79SstxtbhatHeCaCsF7fN5y",
  "key13": "35hAYNdYA1udyGg3PQiCR6G5wDwAv5yKkyLpHDdKLFqBQ6FTnm4tVSGaGKjHR2Juz8tKenixTcttsRKQRcGi7ihh",
  "key14": "46CjuqCoocKb5sCspWyTMdV5mZ1yqvR83qW78iqL7LBaTxu4orrdf9N3EBSKPXGBqDd5pu4PokjKY7BbjyKq6yJn",
  "key15": "6ZsMYB5meW9Jv2azT3L3TUosWn46ddhtTYWiTmGaRSbjd6rA98rhCotaAzhcghC84C3PDtKq92Rwqm1M4SdBq9i",
  "key16": "57PwrdFRrPFnrFbgXgsbbfTp6ZbTJkYhmo2kC4hkDgxXuskahqgtig73Gv5ZypeG3CUPAbii26S5vYmUw7hUPa5q",
  "key17": "2r2hcoJB4BzRnRtbGe2Xp4zQfptHKhwLsVf98sLpyFhoWgLQMxj2sMNGxnzM54GYs1trjwxQyD3tKZV7oUMLE7u5",
  "key18": "Q6KmYPkg9rBcorEJK3MKxu5WPLkjHqrEetpavnLLFPNHdUSFirVaDXvG9YVpUTJ9qNehvMyD8jeZdp5yB63vQf4",
  "key19": "624QbW6KbQjhPsygZuUXDKXg8y5wk1sM4Zy6pV7pqdojLtETEorsQi6RxYpwGKd6ntKotzBv8UoNvDMpaNfSYTvT",
  "key20": "TwpFiFNkSvcfcEAPXDSj6JTivBbAj54JGwvpnfxjx8de5pr2F9oTWpKkSpFaRGdXP36M7CPrXqrCrghbX2JYXHr",
  "key21": "55x4ZjvTPBiAEZM7JULtUNXG5xe2cYw8EcXn2L4ZMJiZtgEgFo6sZFwfvC9hUmo95mRQcfMWDeYELDkU3T6CxieT",
  "key22": "2dSHzqZXR76Ebocv2sdFfy1UdcA5vzKB7QBLt2eZjpwJfifjHymNzfxsWWatCstUcnVJhfTCB1xWETEhw7rwds2Z",
  "key23": "5bECeCniwW4s1z8kyAirUXrNYQF7GjdA1SRXK4c4F7KPkkfYPKXAaGuZho28CuDNk2dvnELwZDa1KyhTDuorvdS4",
  "key24": "2Bzm5uncugR7gF4dyY2GG2Th6bwKrN4uBBmEgMRSHN8gE5yNWec4bDjz3RpiMmRwb95ax9X7DwtJz5BHAsC8Lx8r",
  "key25": "4vjgtk238J7z1e4CzGkRUwP1CF1V7rwFx5LDn9YZKh6V8iYkABu7SravKToCPcZHACT2uXTq3ZXDU8aoK5v8NFxF",
  "key26": "51cFojChpVBuxq3YtcmCvfZQAQsHVLBLxvFA1FJreR5bfyiFykR1G6kjfWg9nk3ED4w9Y1NXX9HaUTLAX6c9qmtx",
  "key27": "2EsfmFi7uiCsgMtbzfnTNxdAy5v1B7EeuNC2paMbcE2xMBCV54fnrLvbaMh26r28DhVc7ZwEStFCdUPTz2W47njB",
  "key28": "3RTwzVhyeFVoFpcSA3QxihUK5eTnsJF5beoAj4NtUgnqYzUaZ6xnrPK4z6PfXzzdCqENf9mcnpQhhvPDMavvw6pX",
  "key29": "3NXho23KJFtQxDXWvnGMsMq7c3XwGNS4jcQVj6gVSx8EbSCHBV7cmF8pGcyKHpjHzfGw9PTZ4CwK4s8EQ5Eyx7Ra"
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
