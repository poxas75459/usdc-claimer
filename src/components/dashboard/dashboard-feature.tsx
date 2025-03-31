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
    "KFndVewNivfHsKRyMqEQwiWmHgpe6CbbjN73PPdiCvz8goi6FtZ2nciRrrVK7pbdq3CxbzMUPx9eVWtJ6CCR1VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvLJvuXoeyy9Pw4YqvujeNqK7sRDvQPCNQqcnQ1SUMAZYE3LZ7NpiCiKJvB2U6PEpp7drBQHXmP9XJZ2mAXGKCw",
  "key1": "3pBWbLen6RfoFwHGWCCWSZbFGy8oM68AyqQRGiK7vR3pADPrGaDxB2YQruZEszojf4m5L9BQ3KzSQUS4znGtCy25",
  "key2": "jq89AMMWsy1bQeKeMVSTkFG5eDWGYYpyp8EJX1smQ5mJBtz7LzTqXrmWw4xvAmZQHrR3xF89ivvAE9SPBRp1a1s",
  "key3": "3DL8Sq2n8NBP6tZrk7bgiezswLeXNPFM4qxWpnuS9pg3eXoArC54aQxPcvQiVssRfLQctpgMTvsUn2YsmHfAsntf",
  "key4": "EvQAwtHSkhMQ5SrZppw4R58MDcGpuREZf7zdY6K6ndsnFLLn5kdB4erDxN59iAygXz8Eddau6a84LnigcAK1bCh",
  "key5": "4H9YXZDCHk7RK1BYyYbJopnBW9vFCvDm5UyXkuUenQBFKRyMprDLmaXfxhcx6zvUi8VaVHFUQCFX65pBE5aqrwgC",
  "key6": "2YCC89r6ZLpFVeJLmofZ5EDBsTx2DV1DwqDWU5gv8usgzLXtufgv57e9FtTVpvqvVqGFaeSbUVDXsoLVvJcqZ4GG",
  "key7": "4mu5GT1YLZA4Bzfg2L4xaU5DznEtqcy3GpYkgRYCqJKZhByTKwwd5UJBA7nAYVBYLu3b2KULKiHsATQMtad5BMXQ",
  "key8": "3Qp8PgwPvomgqaqhJ52qRzLoZK5iSxwhzN9ajwNDTeVBEy4WP9TEA6ERfeHv4B2kPsQ8rDkSbETcLo3nYEhBXYyP",
  "key9": "2Kr3shRTb4LeSMcX2oktUS8DeuzESZvfm9YKv2wF3KyX2YQKSpHffNSViErsofYChjQd2K2H1iaMCroR3kfJntwP",
  "key10": "WpECGt2Sje87KyLiu4fwgYWnSzRZFVnmRzMESwcxSo3DznQkNqAgVzxHMNfmaQNDCPNhdfZkrnduqFud1EuFpsx",
  "key11": "czbUtE6yuauQKBGx21Hh5DUoARZ8UsGUuvvLmptE3jQfSX4R1GgGDuHyygFrmEA6968ed9abGc66jTkD4177WWZ",
  "key12": "5W7PPCoovShBZtEgfvGsNDrWb2kaWngSh9bQFiUJ1rDmyRcxXT2vWKeKAY4Vk6emmuVGQspAXBGCrm6PVUQyJoin",
  "key13": "3oFFmJW6nwjiehynGqZd1VWofrfKQow2rXimTRsr4sy2rNRy9cKNxwgV2mMXDGxuUqjiorom7syGjEicUNkgqMXj",
  "key14": "5KR8iEwvNkoUBy7Lg5Xs9yHHQRnmbAvc2Fh9VAsJBDLtSfxSS3K41ZJyeBm3ymUVq3dM63ZgQw7UVEwm13dcqPtb",
  "key15": "3bYyBrLNERNkcaXoBJwSvU4BdhsZAU2bVzaX9vQpeDfPpYjSFqNu24GzvweDwCqm2AMUdYxB7a8MAiUEHP8gTsT",
  "key16": "4cxPrbR6ExUf2JgmMrFiBTmEHncehMEDYi71rUBJXDhheJc3zzka4Ex7Bpwj5WB9mSpknFvmYj3uWNbXCKe3tUHz",
  "key17": "2qr9WQD12rhHoapbANShXMAYaLrog8TecBkhkMQfjocknqzdGRYomDY5vzYqU52ddaCvmEJ9qe2vyEJPY9YhKSmA",
  "key18": "42LRz2kFtKTLLk6YNpaXD3DBdj53Vv9Fgu1rVEEriXiyX87AXT9hnzZFYKFbtxQqmE6rndNeKAzg7bV7LBnKkobc",
  "key19": "5eEJnxeJEmF8cPnXkooRA1u57bBSoi8YmGrif6zooi3FZE1GgQTvRUW9V9LDuvjaKq86EBPGBRRWw3MjinjhD2hU",
  "key20": "2KX3GGuwcfLvXhjiXh4g7wqYmVXb5WjTjpe4bPWji8rG6MSnLafnqdmk56QMHzaxJnkdjjGzhW7vLq6bRcvtHdHS",
  "key21": "2YopV3dA9SZXbcHFcct4pBdjyQc4ivjWuJMz3gQFjqFQ5zveC4UnuYXFx1pnPCDXWH5rHGKBwA7W5sQ3adbmMCNG",
  "key22": "aLZKbQsKVLYFPgpVnnLwKn2pNUBXm2BTYMksX27wrVXauTVwLPaYtd31MQmmU8wwMEx7uuAhQEj5SNQ7EJiDJJi",
  "key23": "2j1G3qkj12J4btkJv8jzLSMng2hvMsr7kGBCwm6Q8GRiHKeNz6RfBCM44Lkdb8ZZZfJhsRhjseTaBjPxRgeFpsdr",
  "key24": "31ChmARYeJVucNRiL3bAeSmzVNDQDXgzPpWH5Z9a4ceLFHcUNeiZnbCg3KxSBUj8s4FRjoANz3GJqupHRG1dGSW8",
  "key25": "Hq1bLf2shYXVfQHs3Qbujxba2K2qAaKmqPeAS9QV8vTKi1BhPXNuTzFJaCv13u4Qm6PjTLNV5qwLCruq8Q1w6pz",
  "key26": "3dJ2Frfz9YEHgFNFMhEtqNQUMRn222p521jQviPZCZDNcfVQAwQSqv9iPwPhAaZniNDznWaLBh3vppUSmCs11J8g",
  "key27": "4E2SsWKmwikvGHe1h3MgUPxN8teEFymKxXifjag4wkNJwJQdYW5cRNrBBgGkMvfQuP5r3s65KdDJQ79FPPJpzB3C",
  "key28": "48jPy3L38fJxV6LW9A8fkZYQFyNfxWo6fsYRSSKjQCunYVJtyiN5tbDMYwrRevki3QjVrFyJunNjmMUaxk5NmVCZ",
  "key29": "5PVq3FtxwrAyeTMWzDnEsRGPGrFpUftgoqy1uVHR2d69eXnarVycvYHL4fpm8kwcK5EKCDqXrmXEB69CRDBywrPs",
  "key30": "4wneNAJCJ7nNKgfREBnDnt18ZC2KW1vMtTHvCGwiJSAFHtXFsAux8FDgLdFAZoBdjCitviDUG5NQXoxVLHHiXpSg",
  "key31": "SRAjzAjQ9iLWmW3CvFHqvzqRGF5T6hApj7wq63RQGXejGEPC2eXBbCzHnzbXpzATEy7VPRHuXBVauZTFWzRSeXD",
  "key32": "4p6Mc1apLejb1F7yNhT7AdHfUYCkpo9hv6qNEtgK3Xz2ukofK7ckMGAnEGKgAdC1HizfHn1cLKygXPwHrBd3rnAY",
  "key33": "374xcQKfMYC3QqgztR1Q6LdSTnELwMpKig6L1xWW341rq79qbeRLcRydAWAqwfUHKEauWYQC2USrKVXqtdxJp5Dm",
  "key34": "3bLXpnFaxEzWHvDRLo9CXkoyZHfs97LuHpUTd8GRXbrZJBsz1rkG1M7Y3CG9UKsc7URPD6MU1arHAPnCAHhdiHer"
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
