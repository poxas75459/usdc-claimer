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
    "5TsMfNX2DJws7HdFc1oCVcAzuBzSN4w5pXdrFTM1QkgMRVs1AJdUd9XmHyxYsMQnpz9JrkAW6hqrDBNmckci5a7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipyff8f7jst9XYEKyagDRb8Ui4D3uN4RRu9TUhw7LUpDjEqfvGghDvNm2VJperGjFfU97bFX2G9L3dzm3uQL5Ps",
  "key1": "5TAa2fXGirGMY6DcqpYKt9etS3CKbFSffnYwbWw8aTGfR6TYFaY4uGAHWvF4iC2bPXwjuSRJdDsnCdA8b3LCF4d8",
  "key2": "z9EAzxkCyVxtijYnyMUiEvANqcyLGPjM4DFSBVL3KjCnhGwWZoaxFLWym791pgx1uYdWMWN7S6B18Xfdmjwxo2b",
  "key3": "5jA74fsREeqqEoWQDfP9gsKhRhB2u1RARttrdpXDTpH69j3ikST6wKiUGvB9TKSuVio6mqDo6ajJZ7Qav9uiDWza",
  "key4": "4iRoUQtixMPSAHioMyi6tF9N2vkMUxeXH1ydis7fipQfNsi7tUABdue1A6pdmV6UPpbyC4xjtEJetHHbz4i7JELX",
  "key5": "65A9QDTLvPxZ17jKatbct3JfRLPnq3UYC1ogKUweqqfmSjfHicPhHehHERT3rg1j4ivz1Lmw5aw1GqcsuFhE9PJ1",
  "key6": "2bcAdEFPcn5NGsRDzUXh4QDrYah5eMdTH4zxTHUkmarvMEVySZZYU4rDbcsqbqjqNsFhxKNwezkJK6gJ5tAKtNsg",
  "key7": "3n1LJZKoakjXht8f1G7t7uwA8qQeThnpqdJknitPZzByLam2DNKR21HjewYZzAKc9PeMyhYendv4kPdtGHtEGXWV",
  "key8": "3f9YacKV9FqJ3afPkjnEt25V7DDRrPc58dQRRD9xbzPLGpAFCgDcv5hVCR4hDfXk3Woib4iyWpiNXqPe3qJ2KUmK",
  "key9": "2A7YBXQbdAvfETihmYtUuQzT9oFgkfdet4TrXTVn1FsHHruDTgdxoHTmLKaBYUJ4bYyPtwJNScNGYkCNMKXdwpmq",
  "key10": "PPMsrQfkGAL6VYe2LTkNBkNESC5FndV7QoVQP3FEf9UrSZSFXMj4zSSBg8TVgvJSH63TUnSRWsBPPcZbtbbk9Cm",
  "key11": "4JPmFV1ES1n4cs4Sc3WyMqvRWZ81RmaQjaB9VUwV6NyTrXHPaWASa5g8aFwiTgbDZj5Qe9bveSUqrB2DzPXh2C9Y",
  "key12": "JaDzfiTPfyPvwtznip5G96LjWC5cbXDRB81S6zLmC6zqFTUxaGYDTft1J4yE8vzTwK565hL5MuJu7Tx3rgn1cQs",
  "key13": "2ZPuKdha5Ag31UjdYBxn2PctxPqyT2MALTx8sRj1vqb1CL4SPwt9SAEGYivHEvRwfikpFp91hrHjs387kzpsr29E",
  "key14": "489xuY9o9vLMAUHThFvgMSDAJAR3Dt9U88h7xqDw2wHMgM8zpXBB6ii6tJmXAUt32C4CpV9WwcbFunBV9GNn97QR",
  "key15": "pYi6EEw2TUKSdKb8TcQvBuD5FJNDRxiPayqVKCeepFT2jmF9BBnKPDHpChyo1GjYtMVcrVAZ1moxVu4jZ49k7CR",
  "key16": "4t4VBHMuFQooRSTQmPedqhdfEg6Fh3R3xeuXiuAmMM11HetM2Lg8Qqfuz2HQNXj6NLuwJX2DeHY3Sd2CsnwSqjNs",
  "key17": "4wKevUxZ4L8u95Avuh2bkqvGqDmrj7zbp3UybYb28yoG67Vg8Dus8GMVNvFBt3dYh2U87xkurUac9YsTzDpkQnL6",
  "key18": "2RrhM6o7cdhWDnwS9SxSKdDVHAin7uQCp4kxkc8QfzeAiav7NE86Pb8KKvS2DZWJCtoBfyhU8swukhbUSPTNcXAV",
  "key19": "4ZJDuEozHj4r9xD52pUMLVUpBeP4izUm6teDkAWuEpXwiFfjnkwt4psfeydCKgXZuXU7DRs3dWEHHktkRMX6EjST",
  "key20": "2bbSUTezE43c1ZJdSrzFcTyGakbfBwW8B2dFc7w5VtRmCkuhVEEL7pgVdv4zVsugbmECtFWLW55QWCxxZgUiEr2V",
  "key21": "33FbYR6ssyxAQiQmWGAUxW4v4udhnxRsVapyYnBvnrmsMff9MCymAoUDbys4BwWip4rzsSPqTzLsPsNzatCLEu3S",
  "key22": "HdFXNvRsp5E2bXrSgT6bYFU2yr8UHUGJgbiDWj6BN6beqaz66cmoC2Bet7e6ndDSC73pQULEKL2y7G3sPpu6mic",
  "key23": "2HCHRw8nEwPduBbw1PvjHfLUgYnkjWYaACqF26rC7fP1qdxytbmA8Syk6kWXpmpgJ7412yMi3jhVJwLWDs4Qx5rn",
  "key24": "3KQicwA2f8tRTnaKZPs2kwmmn8ZRPBgyRwFofjTppCfu3HzQNkvTC2H4w7FfqNCrPZsdCPbznPPY1FRCSM5yPWj1",
  "key25": "3259XgumRRh9vj6Q5Hvg7BvNdHMynZuqE2zWghs7KReo4JySfSh4EihpVjgudXsnVxv9FG8m75inbAShzsPqzwBY"
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
