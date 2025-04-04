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
    "5vMwJE1xeb2Fx3tTES1pnMatCGJ2afBxRcvCupjVPBRem1QvAy18g2LutfAZi4Hwm6qSXrMuNW3fUwfiGeoUN4ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWDhNLJoQGBELSbPH2MYmZwMKmKBA7Hvb31iWuZatazD7A3aJSNyfEHnBa9kkm2Fpan6m9cvpWgJ31oP6Stg3DY",
  "key1": "BQXnxrPhsmFfaxZtBTYHzVcYqagPMNDxX2qN7khfHagxKBAwfKMon5tFhxA1WHii2wd2cJC6CK5NGNkSnuqvf6F",
  "key2": "3SENWyNTYanwK7qRjnRiYYLUFfnKyDwTdUgebwm9zDyEcQHy6WiEWnKbPkxUFCKQQKSfuhSSeL7qmBepacZgsSPD",
  "key3": "2WKpgwPXpmv9WpfUGzRQyzJQmDyuEttB2hArJ2yEe9woRZ7yz6KD2Bn65rTWeFafSqGimFd53JHNDaFNSgRMQ59a",
  "key4": "4anV5C4jyvecaXGbMPfx9uMKzc2ZZamx9ygFVFxHLgq7PwpNDD9R2CEUBwNMEpiVhzrYTh2Gmn5K2Ma6ctAe763r",
  "key5": "43TanTfE2fPmCceiKwSbhVbP63zgZRnwEoMuePPGiozWTNoAQG8ZC1Kzga7bF3MZqQYS3kgE32wfAtwfGdatngjx",
  "key6": "5W6m6aKGdNg7qLLdDE491nk8WENBJqJHLPLnk1HWGNfZ9632LyPvLtiVPzzxqMLzuWHeJteEHdNMRvNXvQG8Cs1d",
  "key7": "3JbfAGaEm9VmCzqqqNWmtpiNLeBGZn2sV5iy17rhd5ih2Q7HMH3HJNxLiwbTEbvLCQ8Sa3rUgroPmr3rgHB9nu9P",
  "key8": "2h3rSpNNB15LPJ1ZmFepTC76bwpwgQJU9oViTBPbAXks9XwYYrsbSeS6ZBkWcjcCmHLBB3f195pZZuvFdhdSHJR6",
  "key9": "2bZzvz7z58MSKPex7ttTUXMcT8e5AEHb1Ufd5isq3YForqJSAxVjNbP2qFy1RnukMGZtr7YcG2mKL52wPTCmLRmd",
  "key10": "4TPHZVr4JifZzjPvuUdsLS8tK5hARw5wYEFnLFyaPsSrCK5BSfQH66x58H4khKSwXA8RaDd9FUG7oBVvi2bBjp4i",
  "key11": "67hVMfmopQ5pcBzEZV4cpN1bUB4bs9L4owTCnRgt6bUbXTSEo4f1Nb4Ae3TYYkJqojM17jGS8iFbfoA37savznzM",
  "key12": "Yco99724U3S13hcBcwWP9nk7Dx3YuKxQNHKUxDKMc5dQbK4Tguer51ikEmSXzTfUnHbmZC6tb17P8JoRGqH1cif",
  "key13": "4dJeC8PAucUc1eYCoBQw2smojwhLTVLn6o3RPhYPanaJocgrCUmGmGA3sbL1gVWd6bHXKfayQSkz7eBU9H6Mfj98",
  "key14": "4a4VNx9N4QiLbwDdFYaR24zPkcmS1om5ChFYY8xXWj1563d1RBhu8cDrCazEsLDhALPMNTqCSFsGtNBfQ1waLhKJ",
  "key15": "4BAE7EXSWQR9vddosEfGEibcn2u1iVW8mMtW191kvV2fPUGjdUxL3oFumGtSkSn4fHk8PtHWfGQYfGu2tEAov98p",
  "key16": "37Y3FR2spK6TASzwYJKcwRG4zix4idc6bXqHQzK9J7i43cyoLbfUMDYMAVmHuTN1r8VWsQjqxKpA7WwuetPhmwKo",
  "key17": "5AxoBD7RXzQvzWUXSXHLCHoFCJTRCJMbUWQK7WW8yJv6E2rvYfvAgMYJA2MnsnB4xSwC4Ucrue9WrwHgg8Nsz5CN",
  "key18": "4a5cAK6Td2VrzrgZnCHrRN2ZiLfFkZKDk8RFiZ51PA4ygXuZVgAhYavwzkhzfoZ4oFwrQvocwazayaxW9XH6eVPX",
  "key19": "4TYDg7ZbATrWobKZ3vatyQkngbPp4GSXV3D7iiwgvNovAq8hinYtdLCWohsvnK6uVp7ZxACvKVmKKuhFHPt9vcMH",
  "key20": "ywsRscDErhWgA8uwrA369h6wG8ppytn38FHDVU96MEJ9EFeH3A6uRQGqUMooePVaYZoqWJBUhaMBWZngYwKxnwZ",
  "key21": "2LKSbsVqV4TpyjfiDep5dnKpRvfoTYduVYHbpLnFF7Emg4zvFcaA4Tcvkg9i63wYWbt3oamqeHcBrqSuK29JB1d6",
  "key22": "4bs7GCQvP1UzPJqy4HqCyE5pTD2utoL4xHWVzz7wobiusYVKn4S39g84QBAJDerRF45FmDfz23QF1KNFxqZNBRNi",
  "key23": "2sxhnfdENTKk37bucqao5ChgAcCbfiXHNyTkq7LmzZRjDyHZjNj9Z3WXmiBsizp2vnay89ttvHH8eKn4wbTkWgyh",
  "key24": "Lwv8nvJmG6bdXtbHb5LGRBt5FjyVdsbnwHtNYmgCU3zBpJz7so4VoyQAE7hoRTqLdAzKJDL2jB656PSUGQwghKQ"
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
