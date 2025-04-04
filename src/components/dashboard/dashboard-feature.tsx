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
    "3B7pPi8jr1TmsZmNZL2f8ZfqfE89JwBcZpE4x1ZS6QV5u5Qv14K6gYPPB4ya7sSYzuGxpcdNmuyjkZkyKw5bWdmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDB8mTmPFY4fyiV1GqYz1ZQb34Dc9QECRWXNwbg96RuyMSrmX2pJjozoM87PqTa6VrENZWkbhtj4TZK2q5FQhAY",
  "key1": "2F7tPP1yHjsmfkEabAvT2fLkGtjmYpdqfaQTVPK6JG6QxMCx26KLFNtjwXJpeBxJPZC3qhUuqAn5t7h1knkDnB8n",
  "key2": "273BHBebzfngBvY1PLC1C5D4cVHygJ77L2TCNMyk3MBx5wTAhqMAB3LTjjCK6th6CmUE5pSd1VUNjSzXWwbtq7te",
  "key3": "ofUW1MNcgAzfUyJv4VHKnQ3yUfWm5Lf74PK9hZFtvG2Q9GH9tc43HrBLsdHL5JAakLYFpUPhmPr9cRHtxW97ECp",
  "key4": "4uf1vWuqVReyKV1TfMhzXFXF6MfpBSsiE6oXBQ7tHJdFR2T7n8RkgFy3SZvqDCHj5QN89L3ihUKRnKzykR6ZNgvv",
  "key5": "61kCvznZgaYcouRDJWbhGJW9gkzRGn771mKKyqhmDV2x9RXAZWjtMm8nwvjS2StE8nXM52GKBnzXb2toNBDfQ9GU",
  "key6": "yr1hRwiYToRxa2W9suK28DsdH4UPGS3ZTaX6MGpBYdquVxvTKPuWujV3HRif7iEChCMesPmvTaNn6cZ1CHPRnY6",
  "key7": "2X7XG6A7odrLwsvgABVxyMZk6wnHTXhygQBhD6BCLaohgbvKg7DKPsNuHE96ptwJcdP2bt1xo1w7UVYG3pdwM2Z2",
  "key8": "3xCnmaGMxkwEGtryAkL53rQDfxFQZYe1vG2fz2sNzc2HzixDRAsy7M52NTesmhcVEp9zxd6ZHPhJ75TmavXDpgmw",
  "key9": "2rwYBhyAYZeLyrqNKxmtqmxMMBmko7b7UjfCMuEQCA3waJva2qdRrNP5vsA4Pu4TNk4fL2wkBPNhFMoRMMbV5kTd",
  "key10": "uUgJbfbY9hzjrQPSnPncuo1hNEM1FW5C2sxAviVr7SGCDxjZavYHPFk49FnL695Mfth4LXu7WmCbcwBQGzKvGGw",
  "key11": "27QYGZSwY5vL4b2D5V7v4mEyv19QtHJ7ALbgmBjyLUnCrQLZF7xSDwHL5zXBzTLxu6deaKFfRS7FwpWRvinsZegM",
  "key12": "2M72aTbCEaLdTFMJUs5RmXV9K6wiKpQ1U7vN6nTbC8vCqp6msniABBWvVUcK1FgXBhpYqsssbC3Rpg28YJrwe8JX",
  "key13": "3kevyyaGFYxYqWwCGoEEEV2jxsCoPXN58N9P848CEftzUFfAB9J7t1J1UFFGyEiE583YFHDrKMsaSX19RmvcweeZ",
  "key14": "3JHuruDEVMxtpYvdx8bckbcpAaogZixy467BF6MK8wafWYnqe1xDqtpnKHCPiUGes3cyDEoSJVbitkJKpTURXFUn",
  "key15": "26G4H8GzcFmZ1kKQyKbZyLw7sXRfqV4E87jkPAuKdt76X3yPbcEuVnLi2NCE6LhBQKUUC4jeSpy4UDDt45NQ4p2G",
  "key16": "4jYgqsuGxg9rr46dYnt91MNvK3Fj88tzobYQY4arwrB1SxkmZFEdyCLR9qpzezMsLUZ2Mu8azYRpKBGsEepQkWUj",
  "key17": "2ePu49FJmgVhue9JQ1tG3WC4GM5qhrMwfgopCmeejrExwoDCN9rgqi2PAfUkvKKqrwpLWTi2MBRNC61yN4T3m4hm",
  "key18": "2vcmqou6wm2X6KJvNR3dnLSWnAfXRujHMD2jHDZnn7DjrpejECuVHCQ8H9e9xn3GMpfqhDo3amLHpKqBsSnxobiB",
  "key19": "2eiroBBR4queqzuxuHqaAJhi5bwkNACttCFiYratY6rMk29sHbo4SbXG7RnkPQ4UFY94Jmf4oJHBGX4sB9ciiLbX",
  "key20": "2xEhhg4KE7rAEc3eT9zrUob4xwMYdBmvBvQn48TjaP7cPS38E5iG4yT45niNjkndF4sBd8txSB9mqJNH26FrAyXo",
  "key21": "mQPS9Ht7i5uZQVBQQqPaNiZvy2hbuUgFhgjVLdYqYPRBV4EPZQd8gB4vVtkar6mWAAuvr7JBB2bjpWnrJnSDvEi",
  "key22": "2pWAc8nVFLpJB3imQti6fEBJJuuLt1rEymnTDxVpQfSVzW4FmcRp9Lw2ZMQnNBbwSM48KN6ce2Z3Bbe7wBNwbKX1",
  "key23": "4V9RJjZgJbGBuNkT6aT6vMKg1uEKDtWsjtG3C7vRaY1UT3Ut7CH1JYHAuHyMxuekaQYpf675yLPqyurZYkW8DygB",
  "key24": "2fWaVx1RfEsKPuNKciapnnEruSXxRWr8utxuy9u841hmC9qDT16cgyKEmZkrJ98ebUieLVuqrQAPVn9SQxeptSAH",
  "key25": "4vKFuENWhKxCWYzmztCsJtEynH9Gy4Yp8YrqPPPjWDfgcAzZoaHotfdLnGceLGEnP687KHmdRVaLSxezRXWGA6g6",
  "key26": "5dresVf1cWmpteCc3eysvBdZ5F8LftnTJvXmDZ9KiMYvc2hhLb8aABC9oHxqbaKhwpBWXrfJpJ6ptNbyiY8M5A2C",
  "key27": "4hh9fmNaLcrXCrR63Bh1E9wQ3DeHYiPdS1LiEfNREcPsiw7G5ocLAStTQWHPDvZ6kToqe51gjhSNm7YTg8bHxRYz",
  "key28": "SsDQKeAV2rnZg989duH1DAyncTNCgy1g3ELmDZmDBjaQRJzwiDLt91e8L9tUdtGqvFPUrbPa4e6rHh4DB9aUpme",
  "key29": "5TUApKSkP3ahgrqtwSX5aFt2JZAxUNtRGfMrkFjiyKRmFDvZwBK4FTAE9oJJ14dMWsFxwZaFAcVY47mbr5rSK65T",
  "key30": "5GH85E4KorXQmcT8iBTqc5cg9Ph1n38jFzcdUf7ZPFeWf7q6Z2nfCTth6wVs7SceE44AV71WFJuMnBC8mhdAN1Qj",
  "key31": "4dbybuvGaBeH13SgjzZMarKdT7jxHDmGPHThMQHBWVhNV1WD5prjKrv49pW8rkvcXz6e63LdAEhH3aCPVgKjr3PG",
  "key32": "5ckKhx4uJWYurzdX1ftiRex5zSWf7fGQhqu15JZsZvaRh7QMPNkhPwMk4qpUREi6op9zVhHruqnjHUCfvsNBEVQT",
  "key33": "2UHMkxcPUYoeXQJCPhUTZS5Bscsa5Mxxb4KgX8mkuz8nYYAu8iWeo3mAe8BSNdZp48BmZUyvk8Dzp9VL1sskWEPi"
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
