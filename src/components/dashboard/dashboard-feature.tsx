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
    "4gDt1xo9CT6kEE9aD8C6LQVWFQfghLvdVYSTPgzXvM9A6AZQhTePNDi8qh57kXQqa3RvCJNtaLyUtW8RMxm71Qmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHJruPMWSeu2S4cbP1HtXR7Fgvwn9AignRSgsVZEGnmc6W76ksdB4LphLihkjj914kphXeLSHz1cATCXtWqkwLg",
  "key1": "4mRkUXXu29EvpwKe5iuRi3oTkUEsLVQAfo66khGFwAHtGRd7rbYfV8udPofv9KN5rYpMCfZ7i8sPmdg6Qo4uFzES",
  "key2": "4p3Bv3Fgg5XMmPKrhmySXSQ1v2M8761yY5nP6vB8KmbokBQtEkXwQdipBgEdms6Byr48TrnYxeX5bDeD9hz9A3jv",
  "key3": "2i5XDEsWpqaq8N9AxZY3WL9jM74nkopGPtDVDpZtBrtX8bbrssfuPyEtusPgjT9ZXi3T4Vp8572fpTND1KqeNnCr",
  "key4": "X4Gi2KtpEAmJLoiR9yftx6So39YwV9u8EAPiHvB7Z4UsPU94taYdsqYCfSf8Xikop6DKfqCnFAJtWY5rVc9uWvf",
  "key5": "2MTSPZcmshCLAMcwmiNDNC2VeYHTR25HGSE5Fuu11ssCXyH1Bv864nyevhfUQAm21kbT5WLa9dwxqX3oHvLLKy8D",
  "key6": "3bFgetQkB2PK9acvwnx9LViutBUfidbyynAY9tzoMhEPn35EtUHhD6QNLqjAX8hj5adEPQpW7c1w3WZ1n1kkAQru",
  "key7": "1jrY43AJ8eX6pcZ1w6ugbbNPqgSCZnu5mawersrLCAvc6qAjv1LQvYo4SL65PpNDrPvpt8KpFcT4fSom3jCdbWo",
  "key8": "65Dhgf9hhSjaghAcoENBmaxE91eMtgVE5Zau5tBx74YhYDaFJM86bxywE3KY7iRvEJgHsWkUGxjvuYESd3cmMbfM",
  "key9": "22xHwAs4w7HLtxaWvi8ECfhQBRphfYUsrUAtMBa9Qu7niXwpjBjF9KL2GJrE9gdtKNnp1hTNr2Yqy4dvbj9dBLSJ",
  "key10": "3ZYxa3XVT1cipgjsiq7ruNJoA1RxYUA5Qt6fyeQEqheRXRyXPJZgdYMN4qzB6yxkvnA2pbYaJzdTnFoNfr1M16od",
  "key11": "5svqruRZehVE7tqQhURW3hZX4uAbMGWsJCKLgBtuyWxQwd7Gewgj6BBzZZX98VJpSVNeWpS1M2x7qMeYdpMwwVVd",
  "key12": "3zAm5cusvr8Q4AraeCmVx39ZVH8JTHD5Ci7KwwB43w9nFi3eiPsKCSSbPA3Uq9gkBF8PAWV1TDkmJj3Ye7up4iuz",
  "key13": "5Vu6FM1J6g2ruRHK1fGjiahF5gVMgqC6iqw6HqsxMqqnkjKNr1DMgSY7mDMCYuYVK7ee95QEuUxaXQhS37zf7kM3",
  "key14": "8pSnBqKUQTj2L3E3oFjRhonNYp3HqyEhq6dF2W7yWPghnunSXyerXd2g7QNPNmLfGRG4o8bqhDSYZttpm9bLVRM",
  "key15": "4XRJZX8ChaQwrtpKsDF2X8mdqiWAEK4SSNQrWRjjLqqoZfU8VhXAUst32z1gsi7ZGSeGr8jN6xYmhfpYtosDik3u",
  "key16": "4hBsy7UbFApj6aTrpTZ1Sy7S64wN7ViedRExBVfES8gJ8tpgQx12jHYgMAcUX28UbJfmXbn2uY5PCLL3pNdzKBEF",
  "key17": "4fqvjX3AWZJSH8cQM78J3useH53ssovHitJVTqT5CqJiCtPmJrBsVfJGpnDuiegs8U1QJscivVkHn2BWHXbN7i4d",
  "key18": "4ADSbhaj4unWT8sQ9CJ8YsnWBudxDCupgYwEwG64boWB8HcNH5eHJUdJL5dFet62pK1pF5xoSb1KeVionAtG33VM",
  "key19": "5GrHZaAMAdUHmycG7y1KGBHueXrx7pSLjjWxaPe17r5pbB2RrpukHZntrZYUGQ3vnynqF4m79b5fou2EeMXevEff",
  "key20": "5dMpoET8BaYPxrB8VPhhqgzWPiZkAnNTutMA9sZ1YidPmtLjNgTh4u32juJDH3Ez5kr4WCvJi8bPcWxDR2hykYYF",
  "key21": "5q2D89EEBeo8yHNb7e725tGJ6RFBvSvgYT9nf5dRXGtGsf5mPWJrKk3hnQKRvRxUvDtq6jNpXiiYzSqUp7WQy2NS",
  "key22": "2AGZK8vCbUpsUSfwpySng9UzaR7kuriVCM6ESoq6bEmSJgz55GcUppACWikLS3oz4R8sXtcyr7NUUY3gpAVJFCVB",
  "key23": "54aKyVxUK8vSEkF1ezNDN8dq5L1fkef8XncnREMwrB3KZYrW5TRXdYeuD3nxpLbNrswKguaLDCHzWMoaw8Y3a5dw",
  "key24": "e1hBx286qjZXLTnXdjQcSP3VTQ5pV5tKnDcWKH6g9bhYneBKUv6tfYs3UfbDciR2KrettZjmeqMUmp1ZZ2DTTdd"
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
