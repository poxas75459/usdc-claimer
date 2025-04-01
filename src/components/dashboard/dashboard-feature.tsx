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
    "61PYrfihm4Ma95qPZkZc54xMjtU1Nmk9cR1rj3kMLx5mKRdnETSeJeCJXidTg2cuzZicnfiz6KGrxCZmUypVoECR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sizBjVP36iLP7qjXQj3gA4vSofDBtDk6iXgcfYUrAsfYof2Vzwbm3oy6aJAWCi7TbnEvoEtY67hNSBvRruYFrS8",
  "key1": "4GQMvKYgDBuzyfbEAnGKJ4WXzhVZTm9GjzTnA6qyrLL9TcuobeWvFDQGaUvyfjRHVohjomeAxg5kacf8VafXz8Kc",
  "key2": "4hFXywfdmia2Td3NArzM7nE4zWuvmgA1RXX97mHC6r4FkCLpDjjMRLrRi4pLVAwbC1mxcu4uGsqNmZqQBvjQAkS2",
  "key3": "4s6AAa1R1Mz7iKwwMXkXP4DougwpwbrthYKNCJ3NyiAjRCvhyRWYJwgrnMUDFnou5wJAwztp7tLMLcVndWhMRbWL",
  "key4": "5H6mDPH3WP2j1dXx2qaPk1z1zLR2m5ubuUigpP3v2HXvJQzTuJYu31jQFqcv4kjqk9buwHxnxTVX3ZcyhGshYpuq",
  "key5": "eBak9KtCuPLHpnKezWYiRCxSnovfFMUBkmBgTDv1D3vtTZWq5MZkscBU1BRPrdws9irsbC9rKYNu7AE9eDL1XML",
  "key6": "4XU64LKG88yFrMbuukGSnMUjisvnjm1nXWtADaDhtggJckkDGT8F5B9fEjK1hf91vSgw67p8JnSqEWWHgStDaCkf",
  "key7": "4hGheA1k2nxj6RMdmTkz2ibrQzPLBHh5swCn44nHUA7urjaLFNapisQptT5iSo7zb98AsXpHmRU8opBY4mHLckGU",
  "key8": "4UsDp7Vj1R9bFhyrT9VRoh78RNTdrJrYMoNwjCyDaLD6LC2J2WkagDf3t9CauTfsM3jQUFEhxkHFGHBVaizSaHEy",
  "key9": "3UEwNLeXfCt4mPCdKBoXA6BbJ9awjUBYr4TPkkZZ6hqwQHAy9fhaF23vaFFXkeVjBQWNZPAGYM8JtvT9MQzWwoD5",
  "key10": "35Wnq9GPnWLe3SPjya4rJVBV6i3wxnowPeXTFJpCbY36rpPpgjh6GzHmQrVXupxvaib2thxyZhmKdzb5NLpy4qwK",
  "key11": "4TLu2sugB7zWZeUE4vFwgwie43Q1YMRzkBNBsdEyMiDwF871DbYZHaXZZdDTCZV8LfiFHtF3s679vTAs9MDb6ZQT",
  "key12": "2r2xwPvcPLZSuf1LkYLZJ2MkfF6imDRfDBustZEs5MNNUZiqsCjp1CEKmJhQsKetntYVjMuWQer59fUueBauJTVZ",
  "key13": "EZ3x4v5HPXK93S8uw61MCYuoaG897hCWexT8pD6ggYASkJtc9YVAh3RwU3yXhcTDhERRXUCTYi32cquvoPUGHnp",
  "key14": "62CzSVBbt33c3Mr46uhX6PTfy16Sw1pkoL36ZUNjpDzd9KP7oqVB7cEBCxmsntNhZFoKB527tueFqi74fmZdzuV",
  "key15": "8RZz1EhpsHnHnRxSFJ28MQ7EQvgFXZjc6use3m86mm1wigy8n8VZFHVFsQb7GcwPDsUz1TkNmsFrnpesPNqHeJt",
  "key16": "RKxssVmRGJxFZf3L3W4eauzezyoQPV3mqnucE4LGKob7GJYSWmhcaTXxzW2A7wQn8sAgHNPmEPu72W6peJq3wUi",
  "key17": "4WXLmJn9eLbwDrhR9Ht8eRdn3kaKXmkMVtypbEFhgmve8rWY4FkbxKDSn9qzHWsy1tS4x689CnKU4qeQGJhBxbZa",
  "key18": "4sdhZnShcdE8VWUf4o6JrS9ks8dxXkDtxAHprDorKu6jBfTweqLWz5yhFpU9LgyTuYLmNRp3vuBMvifF2mu4cCku",
  "key19": "YpD9fvuxUZPUGzxGrHbCQZ8A8GCGZv2wSpaJLqYJJKXrwFDv8KfhFLrz3zvu4DPmwkjdCfn9vyP6cYvojhEq6MG",
  "key20": "PQgjt76S2GhmsSELqKBkjE1pGFBfuqyAdaa8u74AbLyMQmsGSTGLrbymETRcs8B8JLcjvmAwNy7iSmfHLkPWWCG",
  "key21": "4A8HkZjtPq8PXvC7qjfSZTG8KvsmUMZRKU68qrKnW2nXt6Y5hpbq9UVy9Spt4xRx7H5LTbZdBESxpPrgBtUm1iDj",
  "key22": "2igkNRJLF22MxUvGMcYa6RhjA1ceRTSHNjYgaZQLtyLSvW1LgzSfRgbs5qzFRgKBUh6AtDNaDaBSWLtyLYy4pYtq",
  "key23": "4tWMTNFH8fJj8GVMfmxBVN56adncYPZVFQ58P38uRhGqvqhSwx6JpuK4wsKGrjkpm4e2QFkhGnugZk7ZifHBqNq3",
  "key24": "5i1c1nU6yH9czpZridP83fXyHWTG7F3BMnU9mogFYsqm1mCqzUAmD3P4vqVLckpp5GX539nzfUMAfKHHESWPjABD",
  "key25": "59egBeLHJfai6GQX4s4JU32VyxDrrfSRuyKeVKtRh9hNn6UWegyU7Ra5bfKArdhySpnKMuDkwy9mJefLE3N5bA87",
  "key26": "47JXEdEFQK6Tkci499XuPTVe4aRAwUqiAZPqbr8UPYVG5QTChWeL5P4EqhaRht1mZFCcPXpDH7qeZTqtTEq9poFz"
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
