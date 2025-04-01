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
    "5LpVm5oZZi4mfDvxuQ9aWrrkcwPh7q3wrZY1uHmqbb72vLWtdR6E7Y51dJLuLtchc6gXoTD68rHLdPmgkfJA1hR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJSEmKJt2FqDaZRMVNR5ngeeJKUHEA17JHrLhiYEsG1oqWhezCeF3tL4viNdxqoC2f5Wdk34XDQKGkdVoTuqbcy",
  "key1": "4eewJzDqSetEBXvMRhvXktUSZDmmvqWoc5qrno2xEqEpUD7kUcrWaACGLekb3UMTGPQUvPtrkf2pt3KSCTMpjGt1",
  "key2": "2YP6JLwpcCWo7Wv7YkCwdEvyZ1w9LtD8LvVSaGs7Qskt4NXcaMCVLQNggy5mRoaVDFzi2wX3cbLHenkqPTqxeTKn",
  "key3": "4sEJskfiECfZnKwBokHhCzycbJUyeyiYAgwZf51sQGNvGdomZrocojPU3PZKAiM4Gnra7yndZXkARRqDrvjBpdcp",
  "key4": "4mkvVsuY9E3sKarZLrr2Rej4FBakWb8dNqGyqB1qkM9tHeYoDU3XGXEuLYJBUKqQuouJvZ1WyxyFLypmkXE9f8jt",
  "key5": "2Up8EFwqqVvgZGpD2qSahtQ57K8fgkxfs9mT9RapiyUASYRBAxnTk4rch4rB2jWNNfqrxj9UTxTp1r2WfcA8NrCm",
  "key6": "tTtSVMtPRgyJnwQJa3hw6UgLxag3a9Vmp95RMrjLEpBwyq6DDaDGFKNF6nBHELJhnqXz2e1cwHk4DDP7fsp7mQh",
  "key7": "39AXbsQRvMH9ktDa8pthDdhk1zvi1NziNV1TKiR1LEmszSbVfGKjwhuYa43oxqrmyvQwJabiUhe4D8j5NUAThxWb",
  "key8": "6NPQWYZaAjaL2EAWni71n9zo5owuXv2LXEXK5h8uuVhgsQSSaioX92e2rYXgfWKciRV9exLNe8JwtJpsj9KMLVZ",
  "key9": "4np6cADpjfdMFyDAZZCpNv1Mz7VtGeBYUA3fjJ3mBYoVenTu4jiNH3aY38BuDw4m9zukiEswXb2HuB69nEP9PcCA",
  "key10": "Pq3iez6cSPp4Jd4vXsiYv8ssL3meJFG66UhmaYxZFQYqtK1BGVj8QM9bEh8Gt7J43bYia3yapeXnJtQ4R5XzBNP",
  "key11": "4w3RXJnA3sz5Tk18RSv2m7ga5h3M5ziqyTPtZTdivUs7rJcBH9VCvG8TUi6NC4CmGvn1vZTj4HVrqGPw3FpDbEzm",
  "key12": "3YeJqQpbxMh5yvxriJTFkvTXhPN5fp33CygJzwMDvCq5azfCxZ4yEFbLykGrBn7PBJTh64YC1isr59N14sysNwEa",
  "key13": "3ZpqFvdtkbPjWhchGVxX4yKj97BjHwZbyJ6G8vTAfnVfXe5XXmsVcvxGqxFtYhHQDRjLvAJ6TfdonYP5wanqq5N3",
  "key14": "bbiCK96Xi1CMT9dbQGJZJj7BZfZ6GJ4DGbz92oXNZr3rGPKsQbxgGo1ztXfmfAwnNVXkSvhbEentPKt1eVVvEbE",
  "key15": "3Rp2rm2GdpdZxVDujYQvbgX9qGwXcH9935bPVsd76SMAxhJpBcppczyvkKizJkvjAP6EHauJsDrUrMDKEx9UfGiH",
  "key16": "2QjRMcxWSYyDoynszXF38fkVodwbrWheeaDirSSNYpFu3xNSZhM1i5obk1dCH7e2aWzytvweGXcbNKivLaEWDC4k",
  "key17": "4osCQ4k7Xo7dMVskELymmQrMc8BiBGLvneLdBnvo2DT1nE5CoHV4z3tFvfYQHxcABwtbM7qagnDJB8Ty4d4iHcqE",
  "key18": "5HkxZp8gUSteCrsUgFdPbVHCpNkfsTSJCBcmNGFxS6HacQvXSdiDLp2AppENNNgtaofsuDh2rXjhwJej4AwpL6pA",
  "key19": "37YKUJCXhx6bhCcH8UgpFfiRfDcB2HMug66LB3R6y9Hd89Yz11TMjJiFWoU12RoqQ2zfcqAJAG23xMBwCgdbTaN4",
  "key20": "4azaeh3xtUQU4hVHUWKDAongkCUA2Kb5u6TCLpAP5dZdE6Q5dhqoqG1FPoydFey5FrVDhGko5FcQDaRgxZBNJoo7",
  "key21": "5MYBQ9V5WWR1ibxU7wsxSLXXZ2hh3MM7iZHh1vd4wsey3J52bjBWG2EVjyJgg255j3MmvAE7Z2vvvpnVGxnzw8ts",
  "key22": "2Qj9ohiEn4QAsKajLBCXjqXxzMWwwuE1CyFCeZqNwEfciVt3nFkMHgTN5pnKV9ohKiAEd7AWA3mKqDTUY294Q3KF",
  "key23": "2iDtnTwpBPucmULgYhu4HcJvYnLDFotn1augvBa9xPZ6Rvr6L8wW15QExroHEmA9Mujd9bnYr7cEvrQVqXEKRCMG",
  "key24": "3S5tctyAJxu22gg5AZonVPBJK5T5iT9oG7ugmBD4DB3w5gWfSnPcLGYhdj1GndusagSuzQLU6mekNCXVSVs7sqms",
  "key25": "3dKVwCSZmfrxuUfQ59zBPDXpo6EBhboA1fzskTZPKBHRzvVLT8hNbokLkbesAXY5St1Fq29PJfuSv6yAbaXizHcR",
  "key26": "3hvC4Y19H9Vb5b4gXxpEndxtk3FjQSKfNSL1me9nWAmEq8R6rLCFBvvvrqZqZ4ZJ9P6pXFBcpzezPdKVoYeMxXaE"
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
