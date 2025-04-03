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
    "3YDugLRAwsro8WSfPGzisvL7qPAZoQ9EfFtGp3wE4s1AAiPkjfk5WQyKqzTAKQbR5u8cZPD5yjZVC5tTSJkfZQ5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApftKXgfvSTzpF85zmVUXgeyRsiXboFTWAF6t3Brnni6ZDWJJg2uvnymAoGjDrGzgJXB5Jzp5idrZqdtkpQNNoM",
  "key1": "4uAdkkg1V1gMVXDmLAFfrYFzcoUzMV41P7RzVUAiNmYDUFcWj3iyzsdGT56onhGxi948Urr7AyHidf93QdySdaCq",
  "key2": "5uiDrQCgUsCTGjdKbeCAFRvo2341sbWFMv1HfsUjK7WawbML68AbSWM9LncfEfz8JVqhMxkNhKvnAbqEALifvabL",
  "key3": "2MmiXMw8ccLAPc4VnrpUrW7wzWFV5PByCYPxoWXbfJMvB12nt8XnMJ4usKJAXEoo98dyyLECENQwGnEygLyBgExT",
  "key4": "srjntcQtgpU7Xpf9T39LHVpr3ijbkb7jZsDPj2J6JtWfhgM3oEh4uenGqbxfzudiVyv1pVqQodbuJcd7eDE52Cx",
  "key5": "3jWiVnAr4hnQkVcTSjLN3PJBn5vysctnogWFgi1FD2DjWJATXAM3DErDwiHRJusFFbcAcZmWzkRsUGWWU7Qm3wxq",
  "key6": "43CDD4H6wBjJjAVqG9NKRYsMHS7Cheej9oFFQDjY8trjTW5FyfbisPzYosrHrkVsyNP9GQet7Cg3tBvJuFHaEp1B",
  "key7": "4hbScRKXvuKtSqMQdQEU6uSnzx9vmHNbbHijffpkvowbsGkf157FyqQ31iwfN173JfNK644nvntWxskPimyXee4B",
  "key8": "4vZd7aRFzG1iKESHdeWcmQZviaToePmyHGmtSNcjQPuyHatyzUH1pZso1je7HwakEJ5HkpuE1a1MjZH7shpCJqTe",
  "key9": "6q7Xj7nUCmniiJJdjgkNDmc2wsucLUSi5NPAwayw3QVqetPmZg94fU4APC8YBGrD6V8yqS3M5YwXVW87muEnGJ2",
  "key10": "3HVYJhH4LMtXsKnG1aEdRuVLJXKmyDUnUWgs3LCQ5k9S7DnM33L1EJNbF8SKmjxMpUAEEU5rKPWE4tmX5ihzgCH5",
  "key11": "yJErmgUywx2fvFUxUv7pSyjggjJ6hxm152U1DvQVkh4zQG3GwW5tGcSPntBK57UqC5NTGQsLAMAShpYNysNQe33",
  "key12": "5S3YSXffscQf6PD6m838uadCXQgfYWpeC5Bc9JUuLwk9DgLpAKA81Lsv6KxGndx6t5TbNkCZgNnotKFteq5SbtYr",
  "key13": "3jYF2Wvh3waYW8EEvXNrdw9sDxK6h4r4KGaiFrgZLBw1bc85se7bzwaSsb84u3JWyTP9R5a6aSBAYYJKZ5RugR6u",
  "key14": "51uMczteF69XW6hQyztPzc5bdHE2cvTQ9vpzpRJgxshr2HtGMbevuW7pPLTQ8wtiE7x2ve8RyFSq4ChVGeupHNxM",
  "key15": "3rPwvEVfg9B5RuqRxXALChp7wAkxmT96qBQaNdeQ6bP6ijkyfkdN8ViD51HFkZNKkirj9djGvffzvrEanp1bFNFh",
  "key16": "3jSJjNp1khPeSTeLjfKosiA4t5CVNmZVS7C9Su59Gh2duQSQePR8ZxAt6gawh23N6ycKysSKpw3Fb4imLwm5TvUc",
  "key17": "3faRmQqDCaT8dZybN4pFATnftFQaVBD8tGs5otx63iW5Uh4NSLaEnLbduYB8red379ZEzDZgX4ZLukckKnjTSch3",
  "key18": "4E8ahc5bwbZ6tQMuUGPef4VEJ51bS7wRuKFBe1ZfW8H9dciZjH6nvBmevAEDqkt7eR8Uemwi7LjG2E23KKVgcm6m",
  "key19": "2harDvY26b1HmBDusxWeSDYf7QgWvYfTJxSwMuQxTMc2eLvQesTFGAZfzn4X5TThVc6DmSycDpyHAv7CL4xQUi7L",
  "key20": "2YXZU2kERcVRgfWQfZLGnyLqVvCGdgPRHMJv8cMKmx33LucZ22w8SiYx9FHUE6aZRt6r3sDeY4o5oQNTT9MTBFZx",
  "key21": "54CYRdQy3zQdt98j4ypdbarAQPDAqxfduVcFsUR4cgReP1JkN4NXZk4TRRPRH3G65wgXdYBHXQ8n7cmefnb1DnmQ",
  "key22": "23wcHr3S9NgbJxg2961qfmGHeQpojegihDErGzMyt9Ps5LNaXUg9omwQ5Tt2pmZCEMZmfSBnEJEiA1EjJWt7shCb",
  "key23": "8Wm1mPnoRpjCDzmdibxJyWK4PumWYt4mjXVpDN2JkcaVMW8RMhWPRtj1MdsULqLJNKZJkzQsSccC9UNYxNs3Phw",
  "key24": "4kdULxSMfhP2y9GEP3iZsMHEFDUtZ9xrgUqDBiNUa4i5Mw32vptxGCbe6QWQnu1tVvsw349CLUyGgBJcRLaZxAKB",
  "key25": "4aZjfXMoHBzxsYcXkQkPHax811Qhdue3pdD2H8j8koMR2GoQQ7xFc2R4Wr2AWb9AMRRW2JFmaLt2rEmDS1sG5c5E",
  "key26": "o4X7MWPPX7s9fjrFfre84fwELdyPDCkGt3yko8rLmcoZR7ueAS3nX4CrZ8XB19Cta4hu61yfM5eg8GEStRQJhPg",
  "key27": "bev2fCcANJ38YXgV1DPxHsMSRiXya4YwLKHvfxFkKk5ykeyXCP4NfaPaHKPHUWMDYV8ZLqngu38121MQXHiUPfx"
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
