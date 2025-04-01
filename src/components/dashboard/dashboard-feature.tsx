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
    "3dMTKXYYTXwcYTbRYF1C3p7S8DwA6fzqP7ve3yUBvsRFtTt5uZkmRM7i2nCoao9p4394iz2k4cJqB6SyPAo9h5Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4ydPhSD4fLxLjHjMuEcQ58LNoK2pcumijFEw842DGWfKfKmtq3cen1U98HHyF6GnrePMDkYqYBdwt2GFsmhzdf",
  "key1": "52ch7yb7g8PbcsZNCHe8VLox3XT4mrVSYRpGBoNyLXuaCBWMNtvbzStMZYSXVerFgGGCxsLLcrABmS1wWynFbeSH",
  "key2": "4DWa3Wziv8y19XcqMNpzaATUiVm1iopzYjxoq6BwoJXYbnuQd35RvLY2DRrArkyrFH4TD26AQWY9kLPqguVacnL8",
  "key3": "3BfMubaopkYVT4mBCg43v6GhGLcGPhqs7pACeAMvPZqmNj6nX2BFiFQT7j2PU1hLUhExZzb4zqU66Bn2hsNrRuLD",
  "key4": "QVAKZcMtuGwBRfffqT939Nq5PzCc7Cu7EtqvhTGDvEXyxncyGYRNr3t6hBTnUdc7UPcAXUn5HdYuzbdJJJBERyf",
  "key5": "4E8gMLLmbnu4F8d8Xf9W5PH2AKoPTUVSHdJb7UQfYLwVijbNotEqVHTLnsCBfapn81SeERo5gFQjCk5oJLz5YJDx",
  "key6": "5WdePCXgusi1Qz9gAeaQ8bdJHqYQzq4Q2PpaVfrErT37BFdbtGfw9arfqkpaTNGEhi93WFcUrn93j96xs6F3azs6",
  "key7": "5VaRPDNA6U84qVHNpw6hEtp4PGBPctW9BWZDxWJLbss9vwWENzzL9nYVaP8uF4fCBa8QNLajxhxtVswGMTvxDMx4",
  "key8": "3qVK9zi9LQu9kpAedJxzoBjP5qu3UK3CL9ZKz69PrRKxrdqLV7BWzb4aCYazatzkWZMUdaNLuKzjUL7L839KqZEG",
  "key9": "2FXpJSZ2BYdtjZtfvbYcJAq3kz2YJPYpfRVvbGsm8BaqbayekP453VZbjGKF3dH4MCdaQNKao9Hv5GSH1NwyYY4x",
  "key10": "2qH1j3RScWkb3Z2nc7QDjzJQbHFTMkmKyBnNG4tP2SjLGNaCfsSyfS4ZorUBnjNfTVJEnwMSPyVuy9bWrEdAmciv",
  "key11": "4FVAU8eCU8p2Zuus6EYwgbkmAHg8a91vWYnkbXNihUjnuAm8runrhGPb8hPXdNFaigxDRY5rCAt5aKoYkr7kzni",
  "key12": "5kV5thhoTr5b5nY2CPiVfHejBDnEDPRZK79BBNpa9QQCorKAY3j93adATAY5avY99d2gJtKn1z4fvdazj9q46ySD",
  "key13": "5RDteEcCWZAmReP94bsN1P2dWhKpWRdjCfv2jVURCpLapQQez6Sg5wNNAp8SmW7XfRaXJJZr2MrpMYXAmFcgwRo6",
  "key14": "3naAGgERcycSi8fEJftHVrMeG9QM5AXh9ns3rk7TvCBTDaD4aW18XVHxqQCEBgfFuMfb7L697SH22G9WqgLhJ5u4",
  "key15": "2aRgjWd3EjLaW59DQNsXMSwtKiQDZYuRCzmoqpTLCarrt5FRxazhKsCtMGxuvbdbye6CeJBHHBRmSepVFEHPSLjm",
  "key16": "67jWwWAJT1yetFnhZ3jsR7PwTs58z3ViG5JNcmone7ThsqpxbwKmSmBrMYLwDKaFf1gzqs1QDDY3PsvGpFinif5i",
  "key17": "5Qt9LqepAou74HzRGR5vdN63c672xRLCg6tdb7CG8gw9JZTy4GsfFLKzXVwk63bUUJ26TLwistYRHAbDJ4FKjgxV",
  "key18": "2KqXwYTse1dJMEJ4GYnBHp5ReH8X9uxpVKZa2pEiseEMBBW8C2HTuGYhpQPBQPvH1V3uwy4irXn9kPokxpkcA3yP",
  "key19": "2coHXc5GcPvzHueApu1uZwGxzNEmNAbNZq22WERYn1F17E5dZuKnDqbKVxNQcEt4um55ZHGncnU9SW7e7dexyvtW",
  "key20": "3pdm8DUygFWKLYnX9VBYNSXtTYbzX8E5Caq7vEnB67rsUruxn1MivprEcj9F6UTASpcBcToe8HpTLT232nKXF564",
  "key21": "251b7TS4w4En1cAbexLCwjpwYCA3f3GwELfHFBzY4DBTXdwpwLjFhxCBwRvsVLzTBiCQTa89BLi29nmDrDaohbeY",
  "key22": "5q3f2WE2Km1JoeLsZHVphK7MJAp6aLyRj8HWGREsKPFEHGfXJ9XKRKypYajQkzfKMLqQyuoW5ZkP1weHUvBAX59J",
  "key23": "38g8acgj1EvaGHTWdVJYMyWygmSTzx6Ak5rnN32ES7hJsrroiCgQ7oWvj2LyXHSJW3qy23mLCUprPqaXAx8NRMnZ",
  "key24": "5o1EBdgV2VRkBVqDndQtKi4tHvxjUpmdPrax8SByQ1nsJyDUbQj44E73y9igVeWxxxdAn2xvG5HNvuFtce8p3rwq",
  "key25": "4jcYsJMHS2J3eQMqBeKErbrugZb1bKKd36Cg64g1kB2VFVgZbw1otydZ7Cwb63ydLMMjdBP8gEQbscmALLGiZSAy",
  "key26": "2DdXBDHc4QF58ASbDf9ppbTVHZ8vvPsdUrxZR899aWALwo6L9qAR7jURZvDZy5nTDEbCGTGeAtfHQH9oK8Qy1RFK"
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
