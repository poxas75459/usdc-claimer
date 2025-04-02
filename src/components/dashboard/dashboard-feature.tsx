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
    "43UyVXYq96RpbWYm1E8kF2qn2SvVMLzPmk6qWAaex5dbgwSKN6JXhcVZCrWkATt3U7XHzvAHKGq6kKb6EgsRvXXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qE5c35u59ov4Awd181uWfSK1CMR5uEHMZxB4614fDHtDhAeHV2PNDHhBRyFvhUFzJp77BCKykcxECxeBVCRtgwW",
  "key1": "4KxJFRCL5xJXLzwwjRm3tMkT6RNvcGubujaCvbVupyHr85HLENwAZVAS6tmV6Wj1eauFcJunTsY6W41eNCsYJ8Ez",
  "key2": "58D5JLdvcNaTja1q59y68buutpcsvEWs1JbtYHD8fhk9dcmt6Gd3dii7dCAeyEYmy9mTcThipKBczSUGv8QxiLRr",
  "key3": "2beVA7NyziVyWTYBEA4DuRTuDwiFbUn1w9X8sTWPgiLFHu89MPnhemr7EheEq7nU2a3QE84hFvBvqTr8RT8EUW62",
  "key4": "36Ty3nNkQHefrfD1Xw5uj1S8DDZv3h64cZj47dPBNG3irBevgHgLEpGnqEiVaDQN2roxNbdyAyHxrDqmRDN7PDLu",
  "key5": "3ST6Y1mudL9HNxYFejnoKuo67dLokcQfBjmgkh7paoc9cZay7q96dfDz7Cf5i1bks7dpbsHc3wEYrpTNdE4TYeYA",
  "key6": "n8up9J7kN4HKsmtdSaV2yfkkJS91RXbA1T9ky4DWn7Y27sepsBLcYgmmiiXo94sonYya55FCUwFgPw8QASiS1SZ",
  "key7": "4LQxZRJNTh8XphNHfN25Pv1A1GquBkzsiRus4cc5HnQbQkjKWZii1b5aVZdoSXjystH2rRE8CRuzmY1pLzzhT5rS",
  "key8": "3z4PrAx2pyfb6jDeeceVG4bY2LzzxKcVHMUoMPkJMZFM6ERhYu8YhWugkLBXSLwporbL698Hscub4JyCfPKYStBG",
  "key9": "3Nz8eUwHRUgJ9KJsBbGftSN6Qq8WY34gMRSawGFF7KYaLaUeFF5otpRPhkdNFSoY9u9696PW799jQNQDG3cGGmv4",
  "key10": "BkVRGVtbMhpSJBBT4Hzodmrvpobk3acJDWFhMhBRB9fkHgDQptwkAEMbymP6mPR5FqJ91CsUVyAKjB3ZSfJRTKG",
  "key11": "2NonGz86rKVgb137fiiEJrSb5ZQwUZRZ6QAJNLLpGEbqdi1VgGTktYE1uowKXaJxfUTXgRdNkKGo8bJdxc79C7Jd",
  "key12": "5hGfsCxCnDhgysfQpCmQ7ErLPg2E8WXmbS4sPfyzCVAXJsUq1jHVsSrM28ZHZSJTH7xt1HQhf5npbcnxQVjhyqKA",
  "key13": "Z96ZDtx9QSVBJoBDU8RKBNaV3Fr3j4rwC5BfhA3T59cKCcQJxBoTX5siQsgmPdwACoCUtN88Hiougm4jmgdGXcn",
  "key14": "2xhm49KLCqwwkkhs8L3nyttEi1ypLuyygwm6a1PpLvx5iioajh2Es1yztnVZFc1vYtv78WA6B3VNj9qWzjbBrwJe",
  "key15": "3JckvXDCy5noArLJh42RFscxr2ZB1G4MLEzyqyRsxJdS8oNafuFqpKfJGX9YwpQSAdchuLBsjS1VwyqpzHUHvDAs",
  "key16": "DvKFSQxcEycwMWSSRkZXK5uyTTzFL5WXMsCqRC2GTUVXmbVkVQ4RSsBCbFcptWhNCAigAjPTajngCMdhCopmEYB",
  "key17": "43EjtLu2qYNHNR3uVC5PV62f3u9rrpeUzS8fAkaTm7oUh5zNMMh25ihcsnNMzQpLPzwhzSPaSdpFJYkj7YZ2b1Bj",
  "key18": "5kVxGsNbhGu4E3mJQfnGYob6Bhj8ZyH6d4hvH39u5WtveMiagVa54UkGeJcrevpxgQMLG3Torex6aA3mVNUGHRTa",
  "key19": "5tmR5NztbiEJkbioKkypwSjejMBUxSW9k4puyYhs664744ErfESjvHdCjudB4UsRxSRAhxbM7CQYDm2gaSb3ytXK",
  "key20": "3prePgHpXRMwMBdutn1staMunPL97BmFDpCX5h2yCXpyB4V9DH4Gwmh2SPfEAk4zLcQvhHvYBUjqKpjcTh1JiVbk",
  "key21": "24w3q8sbnD8nYa769qvrqKRh8cN5xoVGdn5nDoh8oCLfTL7ARfFziiVzUqaGhp9auMFEoccRcFLKWd8wzXhUPNuz",
  "key22": "41B6cfaa8XYmmkggG6cpSpjZNVeXBgADt3KbMg1EMyYNk1haZrQnHVupCCiBF3UUR5K6cWb9AcdUQTqNLDRkji73",
  "key23": "42tMyccKqyrpcV2CA2PPzTFTudjGfDZypUDicetvSouxkjkVbaZjDcdyy8mdY3dYCKHozRYH4XJ9tzMt31LU7AJ3",
  "key24": "5rv7bSBxM76e96vYSs5quSWaFK22mnu73RHokpnHPPj9EdF63wYKQwwZSB4XRN6icNCybf4TGqLfXK4GvYc3Zcar",
  "key25": "4WmJCMFd82H6R37PkLrVGcLUR8pWBnW16hwX6hRcf138YnCE2ssTn9dWfrWzD3oPrkU8N8wpe3ueEDB2Km2wsdhR",
  "key26": "2UQu4b9yp2hrtGjz3TPZnMa3xZ8ALB1JxqC7iFgfhYGAa1HBwggT8ZmHDmcngNQELLRj6fjBR1XYuhBmpPDvidg3",
  "key27": "3V7C4njXQj5pywE3tbcteYb73q58R8FWU9P5yWL5VAkYTp9ADYPxgguyebxp4GT8UveFbrwuMohDnoAhnM8v8hQy",
  "key28": "Yr9mnvztmdqVtWPHDUdEYoS64ZKHi1iJu2TsMTZ5fcq5MjQtinRrDcyQ1FwNJtGXvtRizphZBsjiULhJNzQn95j",
  "key29": "2GTwSZH73Va549XT3eYM2bKYHfpFhRKXVUgpxA39r4TTXGo6YtPRCgk4QCLQqvsMvc8xW87Jxi7xj3S63GhQMybu",
  "key30": "R3ouYGix27oAjCSzfqdB47gkn42syGauw5jZiDdaY2yoQKEf11V5NrJmgRjX9cdPnewNtc44P9sWB7ME8jMNxET",
  "key31": "3MAQrSc1ToHZdMry533B33ncr8LQVgRRM6sgKp116nRxPXaf5txdqnDju6MmwwxfzEgbtRLuyBFZvjEkKgQwGt26"
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
