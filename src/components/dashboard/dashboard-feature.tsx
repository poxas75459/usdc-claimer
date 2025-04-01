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
    "USpM9eJ3ZYejWjPRmwtaN2R1KYCYZeLnV1Enn9WokexcCr4dVQryEiPBdPoKNxCbt5R5GgNfe6vBDznNDehGz7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LErLvh5GNJqPRnkyS5LNKHBLKggmW2JJjH1jG2sWRKecSx51WXoaUYeD5WZS5NjgXtPYcPL999CnUNmYZpYyKMN",
  "key1": "R6TaAxkbKJ7PMUUTegqW3CRkKjFywii7iA2AjBCmdyhdJdazjbyRUpMyu9QUBWSPTNxAvqiDPBuavjRho6qNsxk",
  "key2": "3KGbB7ySoZoYBsy4mFeWi7nSpmrvRHGZKSevxS8Vr2QyoW9wRrDomRpZPUccKo754whRZgFDh2L2PeYyXMchsnVH",
  "key3": "3iJbACqgb2B3dswEjo7SugV9AUVUEd5NwJJphZ6jBdMaoY8YPa5uPT31bNjJYvc6t1bwQVEcQxkTc4R4bNpDSPBi",
  "key4": "59P5ZFo6pTBAk4x1DZAt46jiNLTbxc2ei72Dh7ZK1sTXrdDPcz5BJkPPmQkw2PVrtDNMrwUXVLEv8KGWPkGd9qQs",
  "key5": "3ER1sLyyvP6ZN3PEpt86GsCHyBGKU3xCUHfSQAsDGphUdLN3MstmuqixMsGgN3nvyH9VgxcSFWBZ5i5wcjh6awNH",
  "key6": "r9rs8p8kt8BseNDJxxmmz1LBRaqnDe7miz4wjqNDCSGouzHjCywi3kC1j3XA7dGinRvibsqBCgQCSWtkBLKkZrg",
  "key7": "4ULCZ3e7DKHb5orYSMt2PS2tSt1CenooBBcnkLFvU27DaANhc5FzAMSys8tocZMwM6UWzaAwZXJzka9SahyAvdyU",
  "key8": "ScdEACjAQM7fz6Hkx8aQXp8t6UwQsYcnHjLp8yKfFcMw3ZSxpJPKjqanzrbWomPEkhfVLJYTxgCx3RaQ4arQ4Wh",
  "key9": "5M29eFQDGKJdq9m4a7NPwurwzvt7Gz38EdSXW9sHXc8RnN5QadQGjyL2s2akSBBRYeue1LQ3qj1MxwxQPQ6PAVPf",
  "key10": "5qCRoZ1mGv3kY1EG6mKbqYbLfHquH6Hqqwu31dW5QWniPTfPcaUrsC6URHLeyFi3gbtJv48zMdneNLs73XXd49vT",
  "key11": "5ZR56mTe2hwkewv1p8mwwVXZcxcmPT37kkVx79SGDBsm9nFHvqu69aDtFn4kNUyKqn4w5zLQrzPt9s9yhqah1ypH",
  "key12": "4u37rGQELcgotyPSwEhbb5HzyftBHg2YjsZumuW5JNHsiXhAPTwppCXcSNr33wMbUD4U6mZEgRgM9KrQtN2Cb281",
  "key13": "5m9PdD6PZoywNzECFaNFM58Bj5uZEmhcamHbLu2TCZFwAPUmiXSY6vaJiJVBZRix71aSQSTcAgLsiUUHXT7EvbJt",
  "key14": "2v75uuxHP71ogANgVFtakaDpPh85S8AYcDAo9mbgmYFNnUmia7j5aZXnJArb1hoGsmn11qgwLSsfGGnakKw6oF1t",
  "key15": "SRkNnwAMUu1d2uSkXZo3L82bPXTfqLW87S3zw8rPFtodxdP3DJ3cRDjUdvSbmJRWDfMzjvFZXwXEtvg4HTcFtTp",
  "key16": "3Z9Ls6zzwtZ9KUdRx9wEL9hxUFBr3ZyuiXNYVh2crq5WiWxoxo9Vwy6PitBp7tdWEbsMKJdpbkGCNyXu4R4XHpwj",
  "key17": "2WthsyaKJhKTUw58VRahEwZnF36MFwTgc1sFBDnA1au8S7SY9iHqEhErKc4N5wBDrpfm7XMBc2MR1jvTAKTQEMVv",
  "key18": "Ta5ErrPMUsSz6Nw7SXF3sxsbzysPZXGJMxRPj1J7WgyXfYbxye9BtwgFEp8LjTuyz1rztAWKeGS66ETvMwxDcXX",
  "key19": "9KeDVSFntenzuS3i1qaUKavLLvFT9X6HZ3ydxFomoeDReujGWpsEnC3JN2SjnLdofVM4wTUg43VGqhpLvamJ4xH",
  "key20": "5G1gXe3vBgCy79MAWDKsierthFUzzHc749P1cJ5NnTtThUaJYpUNNpJnUQr6F1NXSCpjmBaSqReKrz7QEVa8iwsM",
  "key21": "5zze5LnsSWwdY3CBDMBebQZtg32KpJ6Say6UsNxBq1yUp9HhyqbzpXUrFrRcawEN2oczDQnCUxGa3ffZYZyVPcqR",
  "key22": "59YUzScfBfkFidkA2Zx6UKLSqqAw6U8LQNMXC6XKMVqHr7rFpncsAx9tvvu5pjj4UkgZZpmcrfC8MbomcEERsTTD",
  "key23": "27vE9ASeqCER34A9Po8QSTuarY1dhibuQmutf9bHeoyyJBRMFJbtmw8XcGxckLU8ZBGfw3Qme5PbhmdkTFJ7H3Gt",
  "key24": "3dL1zYvZR8buCrQiCuYrWrrGFBdft8U1cwRFMaJqMt2aBiehi2o5xcwhEJXkpnKwDxKtsTzzHkttNiY839jXRfYG",
  "key25": "64KDCjbDm2x7U5Xf9g587hT8kHA8NVWU8KNDt9tAEmqWwQyvFc9moAnBfY5fKDxUpHSyQw7Xd3PReVMd81FPSYaX",
  "key26": "XNSECZdbAjXcm87HUpq9jZthBPqq9A1h9UFKUXoY6XzKUg4yfJTU9x8SjpPmVgUgZo1gr72SDNZa3QSLEhsF2UP"
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
