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
    "27Ngkpjau1SP6mNm4EMetLdarVyb8LepE8zn1x7m2i8tYPaKYHePETgWRazHU8U9Fo7tmemeJVNUPdzNS9gfkYZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iurC38e2SABAC5FYyd8UDpf3Gzg4mPXaEu3FCThkpSDBuJxf9GyFfsTq7vJKef3pqkpWB9LWP3PMjNGD7BNniZp",
  "key1": "2zW2EzJDux4G8c2GMNL7iGC5b5LubrytGNCrXUhgQnRZAZWyi69U7PTEDYTF2jbwvQFW9BPSB2swjH7zakiZEuYp",
  "key2": "3ncMYVFv5dEsNL3RVGWkcgjwx4EkmwGivVvZ9ARLVZF1RwSbXqLS66nAJhR98uAqRDcHLrQx28DdWvzbSJzfyaSy",
  "key3": "4MgtBWPJDRpUwuaMZVp46pNKsn68BogLEK6P2MogDbgwNZGt1LXHivsrrHoipXKdXFbt6yBPN8AgLicBYomUwkjn",
  "key4": "LefPuURYf6o7ehg6MP4qjbE5eoqUC5a5TfrjVsagwUizyiAJCtPHwsVaDWi4Zek8EtJD9UQPug8DnpiXJHaSJn6",
  "key5": "VcNye2YXKeuXUxJpsK8VXM5aCP7UUXb3qB5YbX68RZh6nG2NXghq8NLfoonCrpDxx2Fqs1FLXVWATDY69f5v5M2",
  "key6": "whPQi5u8rTqYZM2GKTsnAb6uSZ5CVjBmoomuEz3q5g24z4PankSon8Lvo6jdfB4pRfR5hv6bAnhRJUJCfqMTfYD",
  "key7": "5ap7YGxUGcukuyp4L9g9pAfTKtNzfvNkbDTgGNZkLdKJL9bx2mk25bn9sTDi2k7mFdPXwPHdJ8YSSEWiQDzVToEa",
  "key8": "3aMqg9LLuuttB6L2h5gdKsP6fLjoQT3a4U4hT7wSQYhun83whvAA93rKwZw1ZVKUde2N9sB8bkerqh2kyxdUKM7h",
  "key9": "3t4xpMrwtCvWf4pvouoojtRzw2iPNgkZma9PtKPbABkK5xphAezkUj8LPtj5D264MNUViBYNZf548nNPiPzPBauR",
  "key10": "2r8wExEd4eGR3Scq5L1XcxXNfH6jGRwLmFv5X6frMNU67EPHtoKB7ciNh1HgiYB5GpGErjVKa8gnU1Xjiak16uk3",
  "key11": "5L5odM77ewhx3BDKQpcuuNwcZsWGiChDeCJYjqXBQuKvK5yjTWhcGGgAMUi5GaMp2XGNE6fH1yume1qEKFPeZpkN",
  "key12": "4cbSdVpGUZygDrtPQUt5Adf2cQi1QAWCursJutWy2hi9BhuzMUAvu1agnKTHiRLVpmtAUy6gtqRCddq4Fa8LNiF6",
  "key13": "5PM4XAHETR6uqMy7GHmSPnJRbhfm64GA8gzaxpqabHV9oTTCCHi7wtHsx4D9YGgPRHC48x4piJnxGPh4fTdup54k",
  "key14": "5Wqq8AamXVQW8HVdFfcs78ni6YEtmv1Hy7622RQLSUnU4Tw8rB8pBBEzhMV3Z1AmrN72i1jxfoV2GrfCMfPfFkiC",
  "key15": "4YpLN3zqimcvHAW5iHNgqxvqFLyHFMVwL7HybDc8oCSTNzd5tmyVz4nSEjnZxfFKCnw1kf32rtt6KGrv5t8jfx7t",
  "key16": "2WpFiGr2LmRE1Qcxc3aUFea3a3n2i8y7eNhRU1sQ1CSfAEFDCTgiz3PZKd9dAP7YBLwZVpVU6WYZJ2uDWm9s6WT",
  "key17": "4KTGsKNehCawoem9mneCBFzdBr2YfEwDLsc42ufsea7YBjK5GGUYqXEsasFdh2mc2n8jfcuNgu7HhytMKqYx5dNB",
  "key18": "2x82YXHkSqtiHZ9nV5Zqk2U2im2nkvf9ycXdr8kBKEaeG3GKq7Vnu1akZCnJjUX58FmbpM89ugHFJYf1JmqYJufy",
  "key19": "46HBQWAEFPiPaL7WWLTFcPuDMC7nKF17mTRdfvsS76NpiMPmazrAuWGRRNyfQyxccWjPKwZvZDr8BxzzAnxNyugZ",
  "key20": "2zNsrMPiCdvSah9CvVJiTErTCGd7RXDJnU4AjDHE99iydH7Y9jZ1bSuC8xQR5WQgDFuFkWMG3y7ujuQN7ddYSAwX",
  "key21": "3LavhFWwFCdcsZocba8wx5WKJrvV47kodBxGLVSrx35UtdNaztmNxNTdBAHEoVGFLCBbW6Ta5FGWhU6uUMZbLR2U",
  "key22": "3WsAfPYSQpJ8jiLjcD8s6WsnwqUYCNA3ejVGQNzrY6tbce1jjgSq4B2nx5wYhLhWNpVUPaW4miJ7vCr7nemcgGwt",
  "key23": "CtMxLuFzc4vVBUm8Qdrw5LWLCLYwDWRvG3etAnsd31iWKSNNwXEFpJ2ZtzUQWS1rNp3ds6iJmDy2gmgmRBCwiM6",
  "key24": "3iC3H2AgfEGsjDBJwGgJc1wDnisTYaoVa9gXCj5QeEQFdK6Uso5bu4cGw7ts9FpyAfETwbJWz1Ar7pDHP3XK9Vjy"
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
