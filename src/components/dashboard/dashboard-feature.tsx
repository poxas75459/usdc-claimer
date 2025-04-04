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
    "savH7thnf9CdQcFwW4cmCM6mLwQR94s6kAaiTFVZWncoRVUWrX2SPKsUfMrsLfHwLqPhbLZ3a2w5LCRT9p2hTFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFQJumtLrGJdsV7SVja7qVqeLweAZ245mT1iuJwKSBriGo9ogpPDj21CeVmwyxWcNT2wssQytttbu6zght1EDkz",
  "key1": "4q97fZ6DUZuC9nsERStgN4bmiV5XVkuZLrkFd5xTEkzPGrkJ6o2zZ8WhLah1oFiJfqdsibukJuZKzp5JMbmaSTH5",
  "key2": "5MyfGkFW8AR5QXmSkhZ9p25P1VaG95HyjP9TqGCFnkuy7sfQ629k4QjZGpqakRJmJUu6kv5kTsLcpQVypN37XD9E",
  "key3": "rZ1ipXPZ19yHGSi5XsQChP7cmN5cV7bzUFSCG2qPrP6gZB7QTpXMuLVwJYYXsvErZ11m7Cd68A4HB3StakhN5q7",
  "key4": "3LUS8TykhsxFtQroG4oHkaUgMJvKUP9eqFLhvMMY4M7wfybujAtza461QVNuhGH9bSMCt2GiJDUZX4sWX1iEqqct",
  "key5": "3ujwPFzK6zCouEaTqLftu7Ad8khjaFmBcNE6k1QSGL46eoyScvKifnEubNxwowYtQYBjerAfQSX7w3ZCuhNooTYW",
  "key6": "3fnQZMLDQZKRdXZbrd5DZfnfFARAPHmEZQrLywUQBk3kpeT9tGA3kogrikuZbhtmEPucE8w3f1ZSYZUKUKmxdAfQ",
  "key7": "55QwbmDpJpD4FHEYA2qgVmY9fxgKAy6yvLXrmDSWs7mbAWJ4SfhMQkb79WXLgEXKkKJWRRCLkoLWpapcaUuGicCJ",
  "key8": "3eYTYTdWKKgFQ1GVdHBU2a6UfAmmGsZQzFyh9yPnH9cHEhrY3JbEszqcA9XNuM6Wt2Y5dDWbKsNW9X5wQokjFDKo",
  "key9": "4C7cocQ5QmaaSBp58SEha3jdX6SvwgyzNUgeWbfixZWo9AMsw8deSN8Cmrg5QpD8412HfSdKt5ZYpaMCPCXfTHfo",
  "key10": "3yNjx6xMzTLYKhiSmUebPrwmKSZ3TD3h3FueVPooK3NWcSgcGdnD4NzmiowN9hwBKx733vntY7cg7x5E6e49c4jX",
  "key11": "2w42y5NePmZse3WciqTRgeW1w4oP3a1vnWdxk9VfTToKA5XZ66rCKiFvqNdfDsjauv2rXsVFZL4E9gfxNQUAc7ui",
  "key12": "66C8uWTxdvMxkePQr3zbtHkaiWKYSexcPdPGdudZMhMiKn57sRCHopkbPTjQA3DG4CoWZpwYDvvLt8yWce4YG859",
  "key13": "5hpT57HhRsWFKc7BKDJNDmKtqAwiLBSzTX85pCnUZSgdsHtvWrqAHP8E6FMGFgHtxQATnRBjLzUK8PHRv7UEovkv",
  "key14": "4sMk3rKCE4sRqevGTgJ43wwSnKLZgAPMyU2cep8RqBjWwgedBcu7DCSRUnSLbC8iM5n51HwK22S8ntYADEzLaJdu",
  "key15": "4ZLW3ubeedhu46V9Aak6amihnuVeg3ewcXKXa5MNuzNRwHRz2FgEMMZPULVAUgKANmAaDGG39mhaqkTq9jaj4tRQ",
  "key16": "5gaY5YKnG2py4GSzzDyzy7fRqgVn6VtuBK6bz2ALfe4CnzipxNA1ZgD4jjE9g4u6hvneThAtDPZgRjuG4i5stDGH",
  "key17": "3XkVfTSSfsjYipYdTgk88G1GnPnZ9FADL2F239hmq3HNEzN49q35cJfcKcw4g9anq5LyxfVrnweTa5okgPEykkjA",
  "key18": "5UrSSGqpdanNr5sC8rqeVanq5gYJn6cQcpvngztXGCQtFwXFG5rSGHSUp5M2WjgKwrFpVsYzJYVzYntixNNe8HXi",
  "key19": "3zbe9NxS4N6j6Dtx7s5w7ddiCWbfdGjMY2Fk6bnKEkieM9E7GSjaYoPXJ1zC2GFyFMjJsJEVqa6g7XAGboLrD9fp",
  "key20": "G3n1fXHDR1DxoBhL86HGxzrWaNuDAYzEtS5z6yoCmtRWMty94cVjfwU8KcB3chGpHgVszBiHB9yg38iGHX7aSAM",
  "key21": "3YASDsW2fXxzhQZQHi6i9eMZNZADghRE5dcopLB8LdZQsPzxSpcwjRToTusyVG1RrWYGs6aZq4wf938ZmZFTjzcX",
  "key22": "5KBp4psxXK4fetUKyw5jTdst6jvYCeB81eyxci8M3Baf5yG2EovHf2mciH4J4TJ6GFtaHUcydYpogLUc52yz4KUA",
  "key23": "3W7kTeiCU7X4gMZADsXjSnFb4wD8f889Gz6VnUKSHJc3BX1GxP2ihXmmgtXmXNkF4xUNA1VnfUUz4abC4ovQo7oN",
  "key24": "2MtSBeBLTUF4z5m5WaWQduTLbPPDvqMS3mpQSW4QnstkKaYJFLJFk3Lx2aFB5ovZ1X6CjGV7jKRHJYSa2tEgwp9p"
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
