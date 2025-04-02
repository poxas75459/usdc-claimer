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
    "2Ac2RdYqYXVhEyBvh5xsxxiCWdAgxRsT79HceAJK7XLDndegB8RYooYosX1d49xNwG9u3Xosa9hNSman2DsD4XRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FWiVx7Ld5SNXAvPkyDSmxb5b9jWnAdenFyEp22yGHVEUNtQdVQ5DJd1Lu3Tv43MrNX1quZKVMW2jHosGtUWrDd",
  "key1": "2ejYUFHbe31UyJysSGwBqzmvbS6agJxLdXvWF7ppDSoxrPZEGz1VpjFKHQnQfgQd1TMDvDVCnq73kfZdQAzVW6dZ",
  "key2": "4ZBRVddCbHkxt4D77PXNkoZ2KhxDhe9eDuqzEWGoSAN7QGvGwEhAJ7CpGdBfeCq8RNH2uswGPNnqQHu37kNr3cRs",
  "key3": "bK1zqi1YPZKs8jHK5EwyMPKPiqXLNU7qMb1wjiGhPR4H71K2To95AEcRmrJkg5fYstorkezHor52e2A18fJmGRp",
  "key4": "3STZ7rXSzkoSfQ6y1tfbbsbnvtGCSFrSvnpzgYPfP5eGL45HnNx73HgPWyZjppNa9CfcMLY9XHhis23PLSvtDGpC",
  "key5": "2aviQvcAFS3XHqeGFfWS2Vzgdppf11ApgnXZA6VijApZAxJsxxgnp1PMCnWsLWGWakHon6yhedopgvSsiSAQcMkp",
  "key6": "3etcRGThhAaJZbrh4Aq3rnw7TxZmXt7TypCHVh2th98GghVyCjriz5Bm4TRdUnWCkrWBeLpyD3QS4mcmmVu7K8Fq",
  "key7": "2pFDFVfFazAuRX1Z8qwTy8qMUGtgAw8ow1XfQjMTwP7NoCEGySKLRi4QnZyoeUoxPZXUz3QQ6hVyjwYhTwSWqmFH",
  "key8": "sZdNxKgNvXVFYAh2wGSTLx56fkADx6NfPx9MmKPEBg6QLHTLpZtE5JZXe1ac82MHMFb53w3dPWPxAPC4j8m3tye",
  "key9": "GuSvZuA9vzCre47uGktQ9HsRxbG6px1s4DX1U4jJjDW7JMoAPQ8vaKAwtcTHYuvisHVeZ3aGau3hmqHTuKCAF1k",
  "key10": "36cnjVdunV5nkVBA2hQ3EKeWAmUpopFdgEFttS2ACSEYJ1utV8tEUeZs2Rm61yf8G2eAHhm1Huj5g1HsJhCWypGk",
  "key11": "3oV8pcyHpeXiigC4g1wHEn7VbxDFpZsnwpgZA3xygnRrYkmphaJJ1KxgEbEbHEWQXsqLk8aCb9HgWdgHizaQK7Ty",
  "key12": "JzAoTpWgRRAKqTZw9zJ9BSJenWmJmQyPDtmEd2S3KcEcXRF9RoTLafgUsQJgUJtzFRqT6EiZhE4489yWMMeVeov",
  "key13": "4d4pmofCHNRzgW1p85rt8PSdzi3QtJBhFDphCvciDCRDtHFeqEYhRdTR2Tkr5jdE2ch7ptT4ndhB4Xa2nBNDvkgu",
  "key14": "62qwdHzra9c3Fed4nYc5FRywmh7JQzU65FLM8NZE7JUjWNSbemK95KR8VNdSb1XEMmjsB1RPRdvA2p4cfrTNT9HX",
  "key15": "2tyLtgLNYv276mViypSGtJWcRJEzmx3TgRr8cFyrPGizxvWVbRRUABWHu6w6XY7hd6u4xad2DwjiZ2WAK93Btq2g",
  "key16": "5rmS4MWmgA8YJngKLUhEgtgJ4F7zaFeNWdb68nH33Zm8qveVwkP7Q1qzpZontRfHvdeTxQZumdHVMV7yTjmNyJRD",
  "key17": "5SQZAbe4nCpP1FFogjCx86DfFYpBKYg2GDyRT1KPYGckARdxxaXMfsNNkXDhSP2ZErcWKisd7ZeD3JXUHhD6U6Ba",
  "key18": "3nkW3f22r6sYYcsWE5BHrG39h4KMuHSLH55aqz4p7Az2dwnqRR86izzVUuvW9HpTChu1N2gefceQ4NSSYdLGjgsc",
  "key19": "eGhHZHxjDwWGv1iu6pHhA9jEUNpWWp9n4tn8FJisYYRJXbfxfHxPuKuEyWvFB5kuimQ9WsLhnsqGZcj5CRTWY9A",
  "key20": "4raFUSzL7Zen99bVRhZiX7QG85rqArP9Az7H3XnVpbYbZpLuX2xapUA7QZNXYSt9B1gCrdRTXuXzKkbKN3BmTZ5k",
  "key21": "5YkJL7Bv1GqC5yWm5Zc4zTMfGACbkZ4dGuDrnjaSPgzd4t9nyYAvFNy11jPPsK9UEzViWb7MNH9RrVf6GK2XNmru",
  "key22": "572QsagfjKLFBQwhx1GE67CvmvNaRF7NicobQn7LFBCmjXcmBLB4TpKr2R5siVfmapBQQX8eD7iY7Xx454EU1xT4",
  "key23": "2VdTHDRH9KhcAHuqvgL5Ce4VErgHq3aj7DoL4NxiNAM1QitB4ZSqkcpeLtwUAMD4bmfR4ED2LP31MquocYssquKA",
  "key24": "3C1E9F7WpHfopDVpyxdF1KoFycpshjnUBhSM2beRjzUjSDopQpu6s8iLuHFx6PTNUt2gTnozGjVJmnTxH5GUiPzY",
  "key25": "5E6cJMRTXjZXeF7V6hsWKyorXaXmhyx6rSGe1UjFNAxKB2yR3pU3aiy31wfZsRVARQRXchYycHSVKDCTWvsVp4Pc",
  "key26": "5uLRtFVbVmkvsGiAHrnQc3gE5vAGaEbtUKBmb1BDxbCbGKGQMJcSEBJ3JHqbDfibobhTyXmeGeRtNPdwUf5pFP3H",
  "key27": "27mZ4q87WrXRV8dPMcQfCDmSwq71wxntjSdpWTQEWD5mL6LfF1zC1DGcXPLh3vFRRK4YRoBQ9p4niM14wxpT3pSg",
  "key28": "2mhQszwy8Y4oxcoUQbp26h8tJaTdXkCBxPuGtZVA6ErUg5CB7nQEvtmBYEY3sAt283vmmmgdxHknQMcqQW9ekZ1Q",
  "key29": "hLFjD7SSEBt5HMpyTMsyPCNAj3kCehSa2WE6FbVzMnnWdFqL3KFfJdZ3Z3vNW7oY3cQwnV5SC5xkfttH8uoWao1",
  "key30": "Rd2dFH2oiDKxjJsjATQH77qZqVsyoNt2V29AQtsCbTN48tvCTFdQtu5wtjjoAa52UwRSeRhM7niiL6znkmEfSbN",
  "key31": "5txZNuFukVixRzqqk7Rk9DFajMUBJsjTBqbvs7cg6zz8WZfMja97QGg2NKivzQqnVE6R2CSbnd4MaxBYaJGRkCQw",
  "key32": "2NDC1k4GfrWJh65veaAsmNJavPHJnTQAEaPQnpgc567Q4PdwNXR28eDxt6z9SKqDza49wr3LNGk4ungUiK5FM71Z",
  "key33": "wtJbRu5A2GkwxM6JgX1EY5ZD31D5MLnpCagnghqmUhfL5dEYRAVn2wDrmRaL9yQqvJhzQpEBxevPaL3N9f7cdQm",
  "key34": "5VtmX7NkVA3RNdipqrCaeWYQTRURgGsjrLS6oWJxvqqT1TET9evqZRXbW2oSgaCLFkiSkjEkgjPNo37fgq4BWEXw",
  "key35": "26YgcgQcDJHsmUoUbVS69xFnH3HTqvvvJNphbcnkR6HaQH1NY8kBYZurJ5bQsqrHyvwS7i9D31vaYSLRCqGMso2L",
  "key36": "5j1PrjySiAwER3W43GUZTGxgmnMm1hiqy81geNVw9PiW5GSaRnYwzedFxgEaSnqWDcCaSLW32NvdeEHohNfpTmMY"
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
