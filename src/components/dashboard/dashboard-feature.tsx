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
    "61bWpJZW9WxTWtaFM5K5nj5tUcqNfcmuGZkCUQdx9fJPrLxYAPFfLfwkcHNAZqCDvDScMwpGjAUbKfvzpLDwQ2XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBzA4B74zRDSJDdkVBLEEVZx6YnGK1VN9ysjEeJwk6e6dBteEtmSaveSjgrTUdDgfa1JWNhWMnnXVGqmCsdSvnj",
  "key1": "3ZNFwRHLDyNujFkEy4zofpxQxa5AfBAfgJU63wss1wvRV5QCTY71UfwnUwKKQu64kUszY98r1EodSbbgbf7uWPUe",
  "key2": "89WN4rW4nCx2mXmwJjjQZ2dzF8CCbGpQvbBjy3raj1gjnw5dP2ztbfcL1hBPQAeLDKm4YZSo3hTaMLQnQzTNrJu",
  "key3": "5aKKNpoRTPvwJKTiZW9sjKVdodDK8MaMdxWq9JBG183hH8yyiQwR775TsBfb3AoZVgdpmnXJz2c1mQDvuxhaPpjx",
  "key4": "3kLRjLNPZnK2pqAfMdjEuzzPt79zMGxX5Kiwoerp818CpKWirk83Wmrx9tLAxvsvYcJujTEJtq2HY5kGhBRuQPQi",
  "key5": "JBUu9TYXAYNmRv5U5SsduDPTKCeJeCWSVVX4XAyFCs9JKpwG1iysFpGjPAKNF9F8BnGnij5phmTBvWHq932F8tj",
  "key6": "2oNR9FCkWJvJMQHXFPNeE6bk1Hh5h2X2Cbf9ZW5UhsFjJGv6n7PmEAujGze1BNjWXnpqFydWdi9ZFyNYDW1e3aaS",
  "key7": "URnEeSrpGRhzs4rQ27vrrqRsZVE2eHJvhuHcvPRrWXDhdLSBUJAxuAEWShC4bTDUGgbMtSzvaHsHPFzqDCAtR6h",
  "key8": "65Tgd1z5ZsHDsiDsF3wyHDhgf1XjSEUYBYEVBvn2em9PRM4R8cPL3L1W3HJkDa4M93VQ17JAgwb2nrCNdTtgtZxi",
  "key9": "MALdKJC2CSjBHfiXSWJVeL913qK58VAu67yUdk4gEX2YXuJgAm6H2xwvxLmRttRx7hAnFVz94BKEnE8UfaVhM3P",
  "key10": "4bHyqpLdWaMLyqeT3QFRV5iw8gkEaBj5rGM88Ji8Cghjxsqp43cjr7uUWeqwQdPkDCtQU93ZWTYLx2MwEpZ2jYzw",
  "key11": "2A6S7QsohR1hj1vRGHVp5yeekrKq7wuNqdPRvSig3FVZ3tAt9bkHWSStmXqpTxcWaPpm7AudHsuRgDVPCG4fNQ9p",
  "key12": "4gNt5s6MbYpojReMKmkUPLpGM2Qter1vGSYmUZZeYJ7zcTYmNWwhivHxSuUUxDMoLZSkBEqLWdJu36aoD3zzENSr",
  "key13": "2Y9rakhU4KazsyzPZJk1KUWq9uEzhZPw3DYH7wCNeAusnzEjWucmt3D8Wss4SSogiCEVNeNFuhxLmb9FS328a2YE",
  "key14": "24fJJq1m3YSrzWZzTBZgeYC5whQxwrH1c9tkWtkdQw8nPLyqLtbdCtmDZuxNJrf9NUSZ5qxNFrQRWe7NXqGN5yGE",
  "key15": "53r5pjQWLASUAqhKrpcMto6jtScFKpdtY6PqDyZWLkosLrbedgDNu5FjctXqPBdemcdujeDZrFmWWm1QznPHGCwA",
  "key16": "2GLULTPYoAQFdzNQ4BeNa5R365PDLUbk58SkmRYGUUy2P44EA6oq6raDtgSY6qQQa4UpptQwQptoQ9nddCYbaeYo",
  "key17": "33ApkiXWijywtEpxV82GKQ2FwECcSq5XRJpoQgiFfYgBgGgt88h5hS7LhFQ7nYFaSfscDpeRE2JCroWxs8Qe9LnC",
  "key18": "23Wh1HSBVCeHUbRrrJiDCySKaD4tjdeMwcxkn7RZ1KAy23ixQSZ9nbxCExkTthzXg6HqV932jyUeehEsLczmiKTc",
  "key19": "TM2nS4XGSvRgGWZK8CgtuLjohPEoepagXR8XVRp1PJ6kAE557ad56Wnn7TUbvHxTo1poEFpwm5v2zABwZ2xHV6f",
  "key20": "3LyCkbe2tiA6QK1j5dMjugyV1HvnLmfSsBEyAyYvDM9g1trEjiZ4P3DVZmKYgxxNJpMpUNkD3nRSg6NVWvsG9GbY",
  "key21": "66PXdykoWVZa8XiCKtCUhiShdfcW1ssjw8ZNUcpWJBNadkkHT4xvM3bZnzXb79J423w9ifKu2m949DxgfFULzqcU",
  "key22": "2iHNRx9pTHBfw9m5rdDeuNf5DaHEDeDMySuUDzHZDgfCjwpVVetykiBQQW2d9LowLz7T1AMeKeTqMaSkmrYRybUr",
  "key23": "51B6i8izsdkTMD25MkqWfVbZDBkVstnUk6RDwUMm1PAQ224k6tSnTKZZuSnoNrGRX7qu9MWXMCCvkeJveyf94QwB",
  "key24": "3hTQqTyohQ3crmRmESryfPYVoZ8zmoCZtagiwf4TLDJJBaQkvmaJsZhVbdsKYSdkoBBaxJPxURE1baWxNRVHEnLX",
  "key25": "5YWQ88ideZXUottifYo1SaQxQHTkeAMgdGix48CaKL9r79Hfz8RE8aHeMZZHRtREaWeGzTbXwF3okYYRbhFwgrvs"
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
