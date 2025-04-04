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
    "3mBDNVa31rFSjfgBJ4UKrPRTdL9P6cQpA5YpZcXzXAAa2dHmRHVs1ZLFK1GXNFaqCwDY3vaktVBt1Pthx3teXPn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcre8YsuGGYzdnecp9Zgoq66n31G3ApSqmC9EayVh1quRHhj3SCGSMYqyrkg1Aw8UfKQYihz5dQDbkkTgfSBfdP",
  "key1": "5oTnPSJ4AA6L1UXSPht1LDjTaqDkGe1RC28HFiFwVHnNv28PWWEXRUKAJvSdLgFAPyjZ2Ragym6ZRY1wNtystWFD",
  "key2": "36BL8QmMMBWuBRVRErJofZsfvhy4eduJ5yGpirfqVzBZKoXAmBgrUbrjNEwqhbGE3tmDWgEVqMRN3MZEbkbm6BtP",
  "key3": "JoDVq6eViQqR41zpcNZPAd4dMSSD3Aj5Ndk9FEPoL1DN1dyW5X8U297GD9T6AJe2qnt7Rvb628NG3LZ5RPZZ1J8",
  "key4": "3EGHWPbbZ9ynFV7wGB2fP6kHhnegsQkhduYdM3YLVDFwYCHPr7kKACxEVHBaGJCRPkTjqZppKcvGGfNxrdbXXDKs",
  "key5": "xkoxmBkaUwNvjazdheiL5ehf78sPi9avgU5M7KVaV7Rm74jemu4oHHBmDZ73DjWf5hd5scGKjhGqgha3WUF76nQ",
  "key6": "3Fkwox8WQKZtD3g71ujBv9uwr9VMg9xBqRvoBjChhVYfRhF1WetWPftugbbRkmfs8xRfrdA8XnUkcMugGwq1DfCN",
  "key7": "5GgWzxAwbva6wcNgs8ceLmr39hjphzQV9Q8sFrXSFy3KSCRpaXNCPxoysr9fBLEE4oA1h3Zxgc4UyzC6RD6zHHHs",
  "key8": "22aG2cNmM3P1pVywg8AhpSLgxaLy7h9s2Q1wWfaK4VsyBscXpY16ZQVqhdRZ2MR2C2SqorkpmgRUpktQmQpdDz3N",
  "key9": "4qBfiZoZHakoPsGkMESYSoKkAhTHNRf2aHRssgo3vHdAnUKgHThVpGFmGJMHkP7LiJ6BcRWGba2EAuCAh1dp8Ni5",
  "key10": "4HdTsF3aZfGgYJMXHStdSSM7dGUAtrq5J3dSzzmzYFxptyAkremA2JG9o1AYnhe9TzFSTNyEGJpYnhmo7SRgyzc6",
  "key11": "4mgTojwTPC8mYUStv3YbTKMU1bNrx162nLw9WgGvPLY5eTvqSP5YNUzbygrpxnCM5tBfi4SVm5nuBLcomkMew3Zt",
  "key12": "Cw5D3Kz4QCt62CztQUhFctPswTcuHtVFjnXuTSXuJh3nh9jBV7hFwC8dK8Q4yC97UtoTe1A1FipSUsLREpwC53N",
  "key13": "33VnxuseyqaoaRZsH9G7bf5gNNT2BMNiBR9yjSXPGySfdREiPSV7e8YynCT9e5ePbSoSsxhBx6w16Mjzi7Jwxv3i",
  "key14": "5NxufEGFiZVmiDh6ZVMMZV1LoF9iCzB2eHuPxMAMShkfUBmKzAm8TBHwZxGZC8mygENPRrjGpr6Kwr1trgssPSpS",
  "key15": "4yo6yTcHuWn91ARt5fBrGBggqki7RpE5ZyAPBdCKLepj6UMGSJJRqoBrRzj2Q3kj6vqAdnbSVky3UGnJrXKy1WVv",
  "key16": "57bHQdFrmURYCf3SngnwLbFgSsttfwvYEcLx3Mb2HfYcz5CpzHEWHH9byUADz7LGAf9BbTGvkKmJhfdeLDPPnRj9",
  "key17": "3FefXRNmF9iaSSn7d2kZGFrXDVvYXmr2nC93ojW9as5FWf3hmZ73R9suEkQwjFRD6aD8puNnckRsMGNV6K1n6ULR",
  "key18": "23wuRsnsERrAh32CceuHncNjsWm1hYHBmairRMA2BuAPaSNXNtGwZwn3i6ZZXwkG86EfvRCFBRhoqBb2V71D2ueU",
  "key19": "1Jsenw7UyhD8Leg3JCgF7Tdiqv81BTRLG7Xtks4wqjizXDkFamNWNjFEGedo6wAzpmBuhXzmQufSb2ExbZxjgp2",
  "key20": "318yiMcQn7VUKiZKLnqqSDLjDN4WKsQURkhCmb55zj23uzLXzsjD7b3hMe4ghorHRW1AnRxRtHU2mEr9UmqK9pVm",
  "key21": "48oSKDU1ACaVeUpkWhx6rGAh51CVhUaunQJJmopvffj6mEHv1mLVbT5v1JkrrV4JqFhbqtpRoeujiX44qDs5gA6c",
  "key22": "5mpj8XL7KYyxaHqYdFN2fhUXev72ffgMZaRtrSLFYK2dyVaBizzrEzfXhtJC3iNn7FSq9TednYTbgk7R6n8RduAU",
  "key23": "29Y1KaYKztGLSZVvH1DdREkciacCrrvwES4X81fwb1akFYqCdtKgzCauPD7s5j1EwR57oT8tvyWhgh7hYJKG6Wyx",
  "key24": "42s6qWKzjCsLL9LahqvBwnWfKrniZjF17Am4A28HEFX1f6vsse6z9j8VddgFZYA3YyAnoJjQaH9GcWSPHiCg7LHG",
  "key25": "6jpWS4jbRhfWi4UmMV46D4561EzT4j2eNqYHh47FmiLyEGSZ4AZeTS6QS2HMWEmuzr5VjJ1dL2LDMi2qTQPReaQ"
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
