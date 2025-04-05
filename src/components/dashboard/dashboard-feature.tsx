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
    "pdZC91VYoLKoDLB3gPiYQV2dMqsvJ3hBFqAx9Faa4kwzgCBW85yCu2R1ZRYKfgPgZAnW2UVn4AwGYqxufYWGMKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyZCXRr2pUgrVnDVaZk73xGbjcgnwrbkkEjfEfg83Q1QheZUiGgMJLhNpckZLhCRL325DdwxcxRT471aJ4KF1ij",
  "key1": "4bLzKdJ8ZVJigJzKvWyV284u6TxiHdhjA2hM3B7ZiBNcTWvXL5dW9jsuUTvgvXxSUpXWN9jRPmLWbAPBfN2oCwmx",
  "key2": "AvbkaagR1pMaRHUoN2Sg68VtBjYN6pwxevGWaF44CbGXnsaGuKzgztvYLXgbm5FrxhXhqRH3rMyet7hbLCh3oXe",
  "key3": "3RygCWkjKxB7Fayc1RqwuTjrDyQHwBTqqzBKS4pBN2DVLyJxWNB9kQs2cocKoSTQPtRJFx4wRMiYyNqNBz6BKtm7",
  "key4": "5p1yE2mo75zBWEgkbhVoAWznNvRR4eFKpv1zq2dwL3XC8D9BVaruDPsW4SpVFafGtWF1wdVnLFeKpmuxaHyM9sdk",
  "key5": "64BuSF98F6L3wpqVgjjKWwMqQsvkgxbK5hoV428arLpRjiGBdEe7A59468Ykxfd2wtcphsgP3VjEQK3L5mPJAkQQ",
  "key6": "4Aa5UNuzga1Zn7WazCQ1YNjaQC6HvosUjtuju7JcoWqUqSRk3pAM5RTkqdnZ9Q47orgghcCGeoPbzCmiqYebzdtY",
  "key7": "471jmAynNELLDbhp7JfhuNNjvsjPjTeWnZ5tok7VeGdLU7Ws4GY92jmQnwZ3kMcYPqZusiyeynLGfQ4GCct94dwN",
  "key8": "62FJCB8SH8GYACHEGKn6bnkTSkEXkTSReYbkgzThw3AtsoMSpQFrPkRdk7VWczsX9kaFmZ5aW42pfBhRtu2h9gAU",
  "key9": "2mgm3zoNuK9fjHToXfQ7uj47E3ucLi4LQXvw3HdTMxFw9mMS1sXTejDdbUeJwGuSJRezZYHbUY1WHARAbPAtgCnS",
  "key10": "3b86rjLDPG9a4Urh6n7ueihQ7M3iSdgKNt7XYzGC9NxPXkmesC88DzWoBrj4UZd66iE8gvw6AeG3fEdCuErQ6tQz",
  "key11": "2ECTjcEUZAhPa1EytfrrhH5ritvmtAHPB1diuCpsZM9aThbDhQCLAPP8kWmNs9q6b5WjYuFNVFG2nRwNm5czA8A9",
  "key12": "fJWYGuGs4rwU5GfZP6AnqHyxsudbgGveqbCNmgfySAWiZEsJnzLp6adu3K75fkJyhUE5iDxGtLRJ3XbZzodjFpE",
  "key13": "2w2bN3uiWP7Ak8GaTszKFMnX9RHi14cKdjBCWsTbHa8FAjNnzp5KJKZztnawfRqk8VR3bHUhS5NLyJ3V7GQBQ5om",
  "key14": "59ugcpJL1atpNbPqkK8RGLWCMX2uyA6MHUTupBc8A8MWWGMm6AQW6PSVkDQusw7nkdr6JfbkbVgoB5zCrVVdXKCi",
  "key15": "88RYszyQ3nru1u9UfPjP9sQVFmqDndvZeS7nBghGvzcn5YjL6fRjAh4q4PH6xmePU4MSSH5BmkAaEivVyzRq4Wa",
  "key16": "5WSdQQbhmknMvvo7FGmmMWGfR7GoZ8pcetvSD3Hb327GvsaDVCfzZPtLM757KiL5HuBREG4kp4SfyBG7cVSiGZFE",
  "key17": "2e6jwQSAWkatrdbxtGdWQJuyQFCZZtujAJVV5ygmtAGfpKjG4JqYzH3dTWGu9zD8ymJ8oaLpREYtxmWXfbKRG8wi",
  "key18": "4nSyFhvTHffT65TKbCXECCCL46eB4FyTEmp7FH8xmrrEUcyzah6bmA8PTZNyX8bQyN7LodDm9ZLKpHRf6kVr1ytD",
  "key19": "2cpeeycyetaE5DH6DbAbiP2uyZqN2QPeHzAsXDKHP8CrGG9fdVV64k7gn1TU1EvHxAeuZUqvUp9QXJJvYgFzMMFv",
  "key20": "3KwiNZ49sTnYoXLaFjj4tfMryLG6N39CAwFtHJD1avjBo5J736ZMuTUku4xMpwKDwrVEgFtCpK2EDAKWnQtLRDRa",
  "key21": "2jSVeu3pRDZtazAHboo9hSTdeYB2pnz2Cyd9Pgva5V9t5NpN5NfPN3ZYCTAyeGoNSuL7AoBppkTtXqHEEPyj5hwG",
  "key22": "3YZcQ8gRXRJ8Sa6JMjAw12pedhE33UeRcpLVvDR4Uj6tKGdkewukFNhARNYyKqkjqHzCa9hefiwYyYBqKSm9r4ZL",
  "key23": "28eRYRuGu6XkHR6PX5fJD4fatZqVBzW6Af6qAVr2dQzebxVKHBQa6yHX3LJgJnbTvXGWeQwivNEvzJ1z4QipNDUC",
  "key24": "4keKkfqooomg2HsJCxYg849nkF5iViubFM6SyQhtegRiavPhCXMgXPBNLXFWd85avpUCeunHVq3eBdntb6FR9Hfm",
  "key25": "5G5UhVe2XiNvbtMo26nxgUXcBXDDaoPbvdGbnCNjayp4iAMpFhJPbjME46UJFKStuFs2fwNFQaEsvi2eXxZYo6jQ",
  "key26": "5wU4epJHA7EEjHNMvfDnnf7S2NYvfYZS9qr3St3NsKLDEczTaYNzUbDmr57poA1jEULG9yiTjsaJWezg2dcFgoAG"
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
