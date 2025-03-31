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
    "WiSB2sSknJDMzXJ1tQSnjAtHYfHYAvhU6gxcTVGzAybKB5fnCA1vmicHZowjVArkMFUb9o3iQtx12tAnXy46jbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkC2trvQvsa9zVg822KmPYDGNsTuLhPsrhk7kMt1JBQ1BSqeMSw6RqqdbHKpikkzc6krwJ8G37GP5hM9uF8ZQZA",
  "key1": "PzzeYk2AL13JtPb1C26JbCyYmf6gJaZBFReezVJiXQaGRGLvyfTqS6Bvcpb7y3Np5Tqa6d1kFXz2fSak3k6uxRj",
  "key2": "5jkqw1k7d65e3VgpjjXuxkHBXYNUVgBkeb7SqJzSVFYZ9Xi9ZNE56BNZ1bfswEz7rj8H9zn37WUBK25BpXGyqJzw",
  "key3": "FhffGZ3WnkfEm4ooCVaBc5u14sadeXFCxfbszJcUHpLvgRFdHqfrYpp999eQXZn616an9sCasnLV7Gz9uQRSP79",
  "key4": "3M3nV2JBfUWS975UjtND5YN9c8ic63bTnQgPzjCGq8SBSK4CbkSE6oFyZdTtH1qZiMG4BYz9XhXuP1UgYBH2xHRV",
  "key5": "38YqATTmNrb7YVGKyCB5hLgdMQfJ4ETnk7E4KvxZC5uyranDuzuusSMszxzTquAzDPXDAWzYK29sZQaqAPR9Gk7W",
  "key6": "5MvHa1NZ5KgeoPj3RzefypvKTCN6bFcRsbNymmTxyTNQDZGsBsGTg2NyGhio751dJ5ejWRD8x7QyVTN8J9w4yN1r",
  "key7": "3VRYvfs63Pem11D5yGkvtNdBN6ttAYCCtxaAqPPDcm4CtNuEnyoAJtCFfJtjt4VJQeZTdzABS5QZmtPZPFg1JHwi",
  "key8": "375CHGoWPckwweexBehwBic86ZhkY2xoA6YcaHCP7EQgkdrTPVWDxdXo8HKTvfMkqbu1CWMqhpRYHWmeLhcT7VAq",
  "key9": "c9UhvJyiMPLanKdPo1ChDEK5PDuVvP8gUJrK98yx1ZjG8LpgWeVTVz8EuWE6zgpWWRTumhvUgacgyF4gTmnEiGD",
  "key10": "616aT9yTzrvLAiN6ENXGoQrXnVzNyHdKDCwgcUEH1DGRy7wa97ou3DwZM1efT6KUpVwMGGDQ5Wp9gnj2Gv96H7j2",
  "key11": "3uP48oCCCHoU3p2oNwm2ZuB9QrdgC6ZnweS14w2KJKuMorK4MP3yDpY9oTkXpc7SzS64EG67AYwTM5w796kMZiNb",
  "key12": "3X3Lr1KtgrvSiAZCQukMqR86DQUPYzyr1npY5M3jVfJmkApu25FYrXq92JHAqGcjCyvZ77iGfNLYWB4CPBmjKxaL",
  "key13": "4PCUV8suEtnHpn27u5QnPGPK4DBL81VpNkuRTJxZfr8HMqBFJxUKkt2t8718gU3sFPauFFTRRy8czEjP8WtmmvsA",
  "key14": "51Y1CDqNx4Y4q1hhVRvBqrht8V3fp1dqJx98KvxkCjksggf9azx9tyybnFwdQ74gXoZfDaHSApgFP4TMeGoXLGNE",
  "key15": "3c7TGSAkWG3FYhJzmdTCs1jWxF8EjMrDdn8Kk2UxwVL9WGAkTX1HjcuPs1FfHoqSLN7gRRQzirfYN5vGtNHyYxm3",
  "key16": "2KJgFCLmFeQKNQwB9gCND6Qd73grSLJ3CHDeZ23s7HH488qi8mTYPuSkADboqM9m7QSPmBaiARTrjFWyNQSSW39K",
  "key17": "5qwZpHe46FLSP8jyxZ51MySLYeC6A3wm2J3htDyhKGdd5wkWUk5Qi6xh4ua9BBMzBzW3FtLkxYn5fwReanhXcMnf",
  "key18": "5jjNw2Ek8ufnKNh1BNqYdnvetW8rBVCPD63kbftwcb2YGWYe1NdU8gkvVAng9BpAMCkeMPpKLhvnCzuiHaZsShRD",
  "key19": "3SenpREDoUXPuo2HYjbuGNGWSRdk8ES7tuv9cMhF9kjh9HzqiPmGBRY1NFxAFRYUSrLc5mEaWtzxnhsiVQ6NcVw7",
  "key20": "5Xqz25ohLPAdaYy3rbyTGNo1yMCm9jF9pkt41jRmnYXsBDdFjN2Sri9rEha9P64eJ6DBqamgyjdhxXb2YyoP1Xeg",
  "key21": "2QdndHBWe5wt5SVvdV1zqmZQ6oShARmCTEFBPMsFvnLpvc2RwukKsP3UFNjTeMy63YNeNFuuaawhDhbaD1i7vcCX",
  "key22": "67M4V6zs9GM7FFSzSBvomEXYdjV3trM7ndXSm4LVRriuKCHx1SofKrrCBCWKCmvTzB9ACrgZxaYqHXcd4ktEwSdp",
  "key23": "TeEw7LMKEoBx4owX7mc11MQ1sjSRCtKNi7PS7THiSo4iaGe3uzvaSX4ugqv2kcVSwiu86ivKiP6daBAfVmFrkj3",
  "key24": "RwvhHERgVFjqTQbZR1Q4TyxJTkfk48bGHDjJQBxn9dUfL1eQkRynen2FVSPxNjqhSrcow4bhUhaSgRt1rPQDdPW",
  "key25": "5n7GqBQoeCP7CDR5LqAzpBPKCUg241eZyBMRw2iHZqV9jLgz4qih5NaH5xp8TF7bcESXRPDTfKDzvLG8ZQopbfZ7",
  "key26": "3vaDdNxXsk9kGJxujwuJMSEnG9segEqwTcducdvfA5iCJGWm6VZi6GZ1Gs1KYLJLAyw4va8Fh3xzp7xEZdaNRCaE"
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
