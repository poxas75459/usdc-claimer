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
    "49Yg7HwUaDA9D63Bpxa3bHkBtYHza2VgpdSrCGadAbgG8NS7qKmDarCuz3Y6twqjahdXoH2JKsaDn9zECqJ6HJB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckzKD4n2DgWejmeGgTGuGLiM9sCwbMi8QDPPCv7gifqzvnzhsfcAAHT9U9iQSRvrznDhdVun1ynEWVMxhNBBHLo",
  "key1": "5dMpmLcq48Wj3Zq4PTsRCEPCczDUJZxxTbsLg6TySpW3HHdzedp1chBmMGRfgtZb1EuxtruU8hm3SUq2unEE1CHZ",
  "key2": "5DG6K7sFUbrUEkkZHz1EScCeyvQa4PxYurRv8XNPhhPVYxjE4dzYXntLv7wjULpryCm75KDXGU5JMEq3oAkSwpK6",
  "key3": "3iFa9RcNWXcPPm7MT5ki7gC7CNfEMp6DR8CfB5e6duNZ7N9ZSgNiZnHB4Kt42PokZkeNDAmnzB5xy72aAczeBzub",
  "key4": "5EXeBdExvxFiqBjqNiD2yrSjLSQQThYEJ1osFJPe4YYEebEvyM8ncjEqF8xLUBVUeMefVqgbo5VsLKvsjkkD7afJ",
  "key5": "AiWgP5GxTFMvTuFK1XmrQ71uSkq9TPQwPPMffmV8ng4rQNfjE3r92PAXGbvywxzF4rdacqfmPyxtrRRU3FuwnDi",
  "key6": "4JYXhffGC94WRd5YpnasyzvZUL26i362kFympGZT25JUgCgtKds6MN2XoYDtAmVRrawVePBQmTYzvmQtaBQKDFeZ",
  "key7": "3SULpVBvdQFt8kNkfshyvNQovCXZxpy9XLULPwKtd2eUuhEh3ptxKgApofVJU4pbc3ZFQULXSDZoWpK9cKy3TUoM",
  "key8": "57FTVfQFw1kZmq2of5o51tKzGwigyTNkDquiSLHVNqTDmo6H9vMFC39d3oVNDvDXETt3YMt7hfbRRz8A1ftutLej",
  "key9": "3TS7NxF16JaWxQdKasdWus7kpjbK2wWwvKBLyoqKu9SJzxn4vwVsr8QK5TTSpxN5BboW1pBQ2kMZ4Qx8RLLfBMzR",
  "key10": "2fqg4ypmc59FCo2YFaUEasRA65zvxakTcMQvrsgBVMpre8J7yTHJfzQfn4zuzoCtf6JDWhPjRukXmu6GRGrea3Mi",
  "key11": "4fhCPbj5TSWfefHzebxcBoC4yWKFGNcXUQSKgngdUN7bpP5E4oPtdGQTGjrNjLbFmPEiHzQ3Uxbpitc69adF7ALS",
  "key12": "2wqB74AaAteRegyawExVZfdo7eNzeYMsmETFc3rWXeaXAhRjMmYXb8p86w3FiSndbiqRZKuqfEW5JGEZVXxDePHK",
  "key13": "2VBhMVFGhEZcD6pRBCWE6zbAF6VMy1QcR69br1DauRX6sHzx4teH135TdPAkqMvGQtw6qAGmswJY4u48cysshN1r",
  "key14": "5rK9brLNGvhJiQuxxFRnLXvufkS94e4zCXnnEW5MFdAPQM9GHw9pjrVANte4eF9TEZLWbSNbPVPrxPHu9KscG67J",
  "key15": "4wHxPdT6vjEqLgjxVpBPvstB59TdWj8VaYZBkcdhwr9qAkNrNpbPSUxAqUfaAWSCkWU1MEk2719j3keouJAoWkJ7",
  "key16": "64aCg6JZ5zn9Qg4WheV7uYwGf1Xn8xDPmuSHwUs2PRRnGy5P2uhyspRNN9e4YTvngJ1bG8yuEgqN7L45VXfd7VwJ",
  "key17": "3Riofv587nWVArhwrKkBhSZhR5DxXkvbeCkcQcZpjP5hQuGW9QbiApMQbFTnpaz5LQKA4XrFS7oEFby7zEdRQsiR",
  "key18": "3tvYaqbuCr2fBqRv5GJcYiWtvV5L41hYNmcAmoGqY4USMqfoGYHvS6bSPjt4ywm2yURyvZNGzqFsqJYFJpMKeJjt",
  "key19": "2USoynFrFsBRr3SyK3EJyV8XUWbLp53oX8h2ogZkjg2sDRdeujtWTPx9j7VYL1Q2mezBNoffSFGTMhW98n8FzLCV",
  "key20": "4GmN7SwcKgxwbopm75z8v7FzURHkEnTjbdXJMWu21aoRuF7QJEeRJ28FyFLMrwbWT1Dxa4xmigfYYMwBSJnb5zTi",
  "key21": "44sgVDTf9PrvqC7u3AU4Le1Q3L9Jx6PRj7wiS42uMnbsA3tTv55RJgnhb2Eku8R8VCCsLXcaNRUQZzEm3JnCQm3S",
  "key22": "3XAL5JwhY9Se5ZpwtBvKe9o4DQoonmVJZDUXH6ZgbbsxxnWQyVjmL4pxefUB2fx5cia6WGoRX63YmcTzq3n2PeX",
  "key23": "JdfzD5P9xF1hzbWAvaFdibWoG7ncFZzQfD7ZV4hjgMjKT5XBt48mtyxyhTSYXbt3EcA8zi8d1JuJE2NTtSNzHzE",
  "key24": "3yUD43yf7X9g3NetAZerBdeVTk9YRkx5HGiWtoLp6SdZdyt4SQ6wCKz11oy88Z7Y2jqJcNAQja6FeVvXecaSF2zd",
  "key25": "5FiT3K29ZsnLLfc7cgKbssTgDrbwZaMMKFQFxFMf9dhoVHmtP4KxxAaM5unorJ9iZ7fuUjJ9RhYC1nVpUfmmWNER"
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
