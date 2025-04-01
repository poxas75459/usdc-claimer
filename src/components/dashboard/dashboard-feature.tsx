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
    "4Css9zmR6F8yZA8s56qqJDjdfiki96SQXFiG9H9asrmMtHXj3XNwbs8wdmzfQEMo2DK8gj2zcH2LJqfZiYj3yDP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJcHg16Ne6mGJyvJNsuXLu1BAcPViWgQLAJ2Yp9W24ma2yPoi4HR1ho2rKDQob6uzoroKDPNZXrMqaMdKGhhaux",
  "key1": "4cpcXuVqWt1JUwSqJ9TFkH2i9wDmLtxS7EpW6829LDaRbbYQAdTJaeuY5aKkXFgXqLaR5noCmxqs6jnNoRiEUJ3P",
  "key2": "53wWtdzVjSWrRWVGg33xfm7o7YMGj2a59fmdwtGWfqXmJJpgwhm14igSA64yv6uY932A9SfJzs5LJnAhJhZ6otC3",
  "key3": "22XDbpnJkb572wrWf7oGYTXazqsGDvMc55RixJvwxfv3aUAj2wmGZdH4dQnguVchApVLjdjhSeBu3kpyMacR3FBR",
  "key4": "5cniGdFaJpSSLQtdhAe5hoWEUqZK6P4nB9Xk7KYuGtyrCLWRdmPTmxJrHzteU6kSVUP6KdF4L68Q7v1B7RvAxxUa",
  "key5": "3Bf1Ax59qXoR866u6Nx8jPPHHxnZogG2ozuCZSRqskRvLXmV9Fu3QFFtd1fcMjNDDVWGGtbxU2c6SnKzteyCwEkJ",
  "key6": "5NxU5YexSfHPfnoXUL3hDsgqGV4x1Qoib613bSAu4dkbFcDqKeKJaVPxWm8khL4xKrubjWQ5fzDHgFQgmUA15Kzf",
  "key7": "2SbDinDzxAChruhGTutr4MNsoZiPLmeyF1axmusrcsUkTUzpTsN3n3f9ab8zkeJGuPSZfxbqY8QMvuCk9SNcZEgi",
  "key8": "49xUK5vSboHzk8oH7yDFbxQZ33ZV2sPmax2aTR6V4cAAWy4Wz7yZyvbf5171Hr9QtcXLnU8XbvCPtdu22w5okemE",
  "key9": "LtsGiPLJZ5ck3s8XuFtsBhinM8Zre6EB14bggGi62QHVqZVwR36DNbq8LHe28jioKEBfCNxKsP47uLh8TK5scRL",
  "key10": "2dmp2s4pPF97dxaDqA9oMhDy63s3wAkur4Zg7rxcarr5nv4HwLzevx2uYzK9jvCZiNz8qGyvcqZByBud8m4hk6Up",
  "key11": "4QjWmCD7pTWWnBNRCmpxEY9caQdqnpXpDBG5M8QjjSm6gkSu26QzQ3QJocYmXhS8SAW84uGFTSCLnqsdUxHE6E5b",
  "key12": "4tQ5Y5qh2NRG5BxmaxvW4UEf8QJKFJuUdzeXWCy4ytCubsxQv8vW76argieeC54KmRpiD8UkJ8PaeyhprAU3cY3z",
  "key13": "5ucVn71HE42exmNhsTp9pthgWcTJHwg2HM6gscRdwUNKx7ZcNmTAV7LggTUKXgaZo7kRTGJG7jai5EK7w14FEHG9",
  "key14": "sDcNbNz1bKFJRtZR8pdXdERi1Pbv1B1NchpUoHf7GYFAM83CW2wkKiZZ7Fp3n1AiujcHvKiakFZeT6Xwz9mc3qZ",
  "key15": "3GEzqQ9jaSywWbN4cv2nt4f6WyUPesRAoNBghgyAdMC3RgQQABZTNtaqntJj5xehTgkKYmsk67oKtpwwbau4f1JB",
  "key16": "5Aj3B86AbfhJB7yeu6p6ytjSfXtEeP3xMeya4XqxCZWo1fy14WcXj98frZYJHx7tVvwNzdNFMWJdjC1RoDMDUoLp",
  "key17": "3qPnQ2HgzQgbW9QQfrtDEEeWmFRceXm3oQyaadvEsxThDfJLyawmsXYp17AEneUJ6NfXnvCZFFvKMZQQ7XagmmY9",
  "key18": "iVbkMWniQW16qvJeXgxigJtd5ueLSYDmEmX3dFsgQjuW7DU2znfRVS71pzVvCqqWMYbcW252wd8TbAa7yxRMDWN",
  "key19": "CYZyzdSwNyLP2fFgc6RTrxiV8P3ErH3MnV8MLCZ7rNecFk18hJ2aeVX8KwGyaNp1GMtnU8t5DbnYnBNjjEyn1Up",
  "key20": "3A6E3YP8Dqsu1LasQY1T1ZQiTSutVJr8qcfayKf7BuMx9TprxEUK2oZbzNVUqr2VmztuMkekhzzihLMxRTd8PP7N",
  "key21": "2otdwr6xwhXuT6yq9HoFWyJmcd2EUYsX9B5WaoML1Ju5thGd4E6GtZYGENcYukyuovWschvJrxyC5524ZarZQ6NU",
  "key22": "fsquRmZjH8UR1Qmp77tLbBnFg87NBEnQgtff2akorryEJsbMTDpmQJUQDebL98pdR7Kg3dK84UR57wNM7tgPArp",
  "key23": "4qw7kohvkN8FidgbHnh4TQqwUVwMPTACboZYogSVzZKcFVDjdUdWSHAZY8duYYFb2fhrN2fgXvbrMfCgWUwWYLre",
  "key24": "5SqyA7x5eFUX67Vsjx7BonvNkCRUxDHy4apHUejFQ3qTG9pX95yuCy1rf9dM7PKAPSVFZf3UcHv5MQHFaKo4KQ8X",
  "key25": "3q9pgFT8qdpCmH6RBkSq3uCAoyPctfVwQBdCKKehboqbzFUSTXPL38XE3pvnnt2tdT21B3TRJiw2BsRV7EwipD9A",
  "key26": "3kprztaNiSE2Zvbxyjr961EBWQSana4LhB2GDGjeYbMc7bZfLG6QTayNCtqXo5xYTffzoRggReRax48iYC1qjKno"
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
