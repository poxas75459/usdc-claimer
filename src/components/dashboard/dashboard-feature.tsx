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
    "3FG8nPtjd8pFZNTZ9iarbqwJDX6xLNZPx4cpsZNtUnyLJ1xWbkRxeESDGfmrJf6eYiehAMvygM9j3AZhe7Fd3cDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsWHW97ezccz597eogQiv8Ma1Mo1589uJBmGPHD3VbQAegLpUbSVwCP2xejB6DBRP6j8Lns3e8pr1iDUFveeJhp",
  "key1": "65uXd5oRkp7LfTpjpTzuZpz24mSENv6yM1UwzeQgsLmvJi8sV9thEjgUUrVRhqW9EYeZXczGk9LuFAbVdPmEcHc4",
  "key2": "3FVMUipFevP5dCLAakEMuoqUYuuDP6ZeM4Ae2zCdUKQmHhqxEe6ygTKxH2yQK34uo4w2nLb6m32U4R3v6g7MgudA",
  "key3": "aBfiTyCYKjhH3J1ubFfMUs3PTUVTz45o3R7K4QUjycjUA8w5ns25jY8qvECh46VVyyPxZUvdF9nL8Ud1ZnQAVWH",
  "key4": "4A43HB7FbWLRAqZPptsJRR8dZR9kGYzEHax2FwySeBZKQH8u4cFJysBf991u7YRormyWbSTHqFdWGh93GGDRb3zf",
  "key5": "3vDSji7kjpaaDt1ZLH8ZUGj871469hUMEBRbthVtSmQzudbFQaWBQZU8KCeX9nKAyh9aqTNUDqPRamaWQw3uam4b",
  "key6": "29s7YJGe78AZGwVsRHbzsrSsATebqVQiJwbwP5V1FdLg6VYuv3TSzaPfZ14Ysbs2XevrmsZmvqpe6LSU4m5VqHsj",
  "key7": "281UQyhuH1AyvF8Tp4iWaY43p4RH328sHELLyh22V7EvWwQ1eg3JmeqKGcyX1r2LtBT7XqwoHjhumuWbdk59zdfB",
  "key8": "3eeHsmJ54rBhdBtpdvYmvgNMkBMh1yS4T6WiwCHmcTMfAouMcFyeSTxQ7ntMLYam2fXpezv6omJjKcMzx914xfaj",
  "key9": "4Z2PCmcpqXUfN7TZSTkDbpvSxtntEzZdQD63tueJR9jX377ayEfQMcMAvEcWr4oqCfFMgDtmEK65h6Ld18t65vp6",
  "key10": "2EyjPhfvB683BP1oxzzhEPSNLoKNiqRKYyWqNP6qtDL1h1LkiToyDHCpNtKoc9U7G2GbcKNbDv1Rs4MnDqu8jnuA",
  "key11": "3RvNNzH8ojcSqUL4xpKmXkfWJF3hDk9rAs6eFkHqRLLTQEeSr54e4vatfSgnKSVEQrBdDeMLrvBssH18KcaL5EUD",
  "key12": "39WubE5BRYVqyAQGtvtctFqAwsbLdj7JmAQaWAEv9LtRdk48CWfJCbwTokUbjxMcg3oubsihKdTwjpJiHFHKeRNq",
  "key13": "49kjgvu9ZXWymgaMrDRSVVZ1KPbXnWPunBH8uMtx8qfSa5gLfHYVtKCqUzJnV5vyamxdX6bT6BjzmRGpuMpFxjkG",
  "key14": "3Lhoct7o74pCNBCtFHVMzNiQrMjeXbwi5KHMaKhJMA8cgise5Z6zdPArWSoJFGYbaX3d2FK9Qocjz9N7eeo7M5us",
  "key15": "53k3DQnTwG2eyu1mYijKSWPcko9fCxBKnZE5MKJhsFdZvNakR6oXLY3WBj3b7VfjeAj7vPA2nCXz96KEzo61FyQ1",
  "key16": "56eEB9hbVTJKpzpvP5P2EKxcDu24duo7bbRsWRDyy5cdmomPAsiTDF7EEjYQaH8kRGFv6vBFYRXpNrKr4PH3Ck23",
  "key17": "nFQjcimjuTtRMRNDH3Q7AnLxZPs4ff2CagxpsPgoeZ9nXqceTNdtftSG2L31jVANCnEPvpZ9Hc4MPaGUobLPGbT",
  "key18": "22dJStnEyzGVP1z2S6odiv8oTH7YLhtmP5skJoARg4Dat3bnhZFGJ1K5bxXiQyEnfh7AWVto9Uxoq7YvdhKKZh8J",
  "key19": "3dWhvD5s2tNYrShPBn3Pa5MmA7f5TAdJvgw4uscM7zDSNu6FfEukP8ATvNYd8tZZcJYtU9qQwbL7ADyuTfHVRvYd",
  "key20": "5DxEsr4B83bRQV3rFxT72nh1J6XzA1FYHFwLVSdbstFnSXnKKxQSJgZSLijW4y6urVDJVVDLeGBUutP2fWCKqaAd",
  "key21": "3tgaUEYeTHB3cqmnWagtnxTj2c6fkxGvpYh3D25H6WozKFbtwbBvWiMXtRboFCWDWhuDnnYFywXEegEomcyz4ni8",
  "key22": "5AC7mmbYiKsDGq1b26CFuD1UGmA2xir9AYrUhYufy2puArp8PR7wN3zoLUPFkBrShANnqWAunCowDhqR5gpw2Gyu",
  "key23": "4XWuXeBbytrPdGfWrnbNYfQfLGwRJSMg9KNi5y1Mye1z4Xct8AHsamGcgqFqGMykbW2SZwUzB6K5R15c5Edhyax3",
  "key24": "49Zc7wVhmmc2Xr67jCtdgV4ATAjhWxPGCZfVr8sfdjMhq1ktNQd1Fxsmyus6DzKZqW5ytrnAMxM9cS14rTJwffMe",
  "key25": "TDpHhavEoXij22HTEQ2FpNLQWHwYsmm2wFysywVqcvce3zuAPCwCsrcdBrC3vQQJiBLsG6xckN4p1u8cJ7cFqjw",
  "key26": "3F2r3LbsWHfYfUZRvs9bCv8sdxgqb4AntAzVBMx88DSscgQushAmxtvDrYicP6mGnAFYAR8eGXEXSVqgRvjpERUG",
  "key27": "59xy8PPazwKPECk1gFRZPcA8fkCEVaLE6ieFWLzJZAVTUwePYj5Lp9knYAnM4DmegJikUKCBYtDBKcjkQZjTmEqt",
  "key28": "5yZQZZuptLTqwGxLmr5EtfTQoC5xwR8wqpSR4so14DJpGY8CHq8cgaNp9gnWAyXU19Pbb3r3j4N91hWSrMyx1UG5",
  "key29": "5sAKsfwmFVpaheLjwMAo5vXDE5XyTzqxQMnN6tYTwocVygQmeoZ24JCx2fDrXG4XbFGifPx6oakqcaz99xXyDWCB",
  "key30": "5w23phBrrfe6gfAH5bwswZzrPJ2QVDQTnGg5Q8dFxTUxMMZHaAVaxnEan9k6zciqL2GJwKsCFJxywQw5sfBQCJN9",
  "key31": "AxbLsmHcraHpRByyTuReaTKXAKZTg2FBoAfdcPpceHUbGPBxmfCFiTkJziLB6ZnpG98kQnuoP1xnnfpx2oBfE7q"
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
