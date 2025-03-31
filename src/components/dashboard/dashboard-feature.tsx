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
    "5yGadrqiFADGxmPQ9LqPKuEadRzjhcvRhvvfzQzyNnU3DvSnBbDJdA5uxM2a4tVD9nbQT13HSwHVrHK5wGYxZBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMYCc6WWLK3yePMkk1XiRdvTMLGAPoAj6k7aKd7JPNRnVANxCCS36merNU3H7EGNCdtVQVFMaqByWgCNZytvQRd",
  "key1": "2aaCZu23NDKPekXy5a1iNgrGBZN9Lzv1SCqK7PXNGv8ZLiSHt22nUp2DwnmSdnDnnhQQE6ZzZK2Xk5ZK3bypXMsb",
  "key2": "62n1sy2j6mFmD9XgQe1CQZH6XQPHzTsQ6frSsLZWAR71uFBHpmoSwTify7oXQwnhKxsfZCcEotpTcKdbkvoNM1ow",
  "key3": "5Dg8xxw91fZzCcNTUfiYSKKaBnPQJx6ggdNAKxYwXEkQ7Twt676wYdmxUjNHrU68GtKDhbYKHv7rk4rVq9MNrLEr",
  "key4": "5K2Ase8BP9afwaNJVJZbVWYpAksE8GvcdxCSR6RFjgqyYPRvQfVCu5Ya2XGyYfvVZqY7RwKndgxftRmwWYBnFrCZ",
  "key5": "5Uy7rGDmf4WowyzcDRLUTN7ESMx79r3kfateNSfXmHwvLYUtgfgWqcwjLUMfXjSDELEJEoK2q6XhVQcxLgDi8Fx4",
  "key6": "3YspZ69YgWa9wVE7dH1DYnAU5eGyXRKwvDUnnrWbWg7xVmtmKBGCQsU5K97TW9K4GhCNuqU9cFMTZCYrLfGDbDtw",
  "key7": "671cpgWdeJGzXAsoEtX81pPRnBmiVvqgwZju8m44vPdsTfszKJVgDLUYqjDMihJuHxbA2HydN5Zxx3CntXhkYVGg",
  "key8": "5LaNSJLdKPt8BcmVJVy7SLM58XTJApooDLaBPnnJuLhPGi8xVqGEw3nMQrZoWwEEVC9RBsuzK3JitPxeh44iEgVr",
  "key9": "5wXG36KpisCvCyUZVdzR4AGDCMG2HGfrhBPzwUVezZ9gdn7tksvXGDJCDRVoujv63kfkF1iEmRz7G44UCL8Xzb97",
  "key10": "x9B3hfKkmXUhKJ5v8M9TC3vx8PNbmLirNUVzEc9gPCDVkxcRuj9WwAGJJ2kCQ7HzUrETnpMyaK7NXcfhAJ4c7b4",
  "key11": "5nEoUGij8GdzrnnMzEjQessyRWaWca4BsxsYRbRNWsbj9xr97P7pnM3mzzmYUunDMmGp3C226PYVTBq2N3McKMrH",
  "key12": "4udCYHTUaFZXnkpDVHn3FRyNMQ7MYoqH15acqcmdq79HpCQ5GkWYdmMByK3tdyerKKuo7DhkcaC5Me2ohf6AdVzt",
  "key13": "LSr7kbrZ7Mjej5FhrSjgbfzJ3kwmiBGDD6UFy57VMhsrqnxmHdmgScpr96759UDgV8y7Q3MS8EXSMJYEEQ2G79k",
  "key14": "3NmWrUTXRCwhyewvPwqM2c7aVyBjSNrfvob9djSZL8sBW4HfCMxd8G5RVXhiDJE8bmVArWxok5mfjwWM5jAurYn",
  "key15": "aCq37e6T3b5MPwxEycpBzEGFyzo8XADNYxQobCQsskvJUHidXqU8CpkVcg9mtzBfS7kKRidbpixgXFnfAQESX14",
  "key16": "3psMQybQimCxJYhQ9RBZrWe9BAJXiFaKygxdUyY5BDjmrAt1tZoEqjGZNktmSba8ZAfou1zV8EmksfSPAi3cm4aG",
  "key17": "4MTWH163FChC6Jicko4fqSbwWuKF7Ez2rV8YXFUhyKf4Zz2sns7xhGJRM6bUpgdjhnECYHwz6jE6B8bWdZNA4VZn",
  "key18": "XkMaYjgHTnfvzbrYKpnJiMAUwVrbZs2xm7C1BYJdvsGgPBWh3DJQzUquetUnLukD1bqgnPNs4dsa9tNS6KLGvqG",
  "key19": "5JXUSaGW4rBE88Sm1R3C1DTyCPjcE344238rjWS34MRkzxiLzyQnnSsBcWRuD4jaUXigBLr8uEkPEkpypxozuyZA",
  "key20": "4m8SJfXvsfUWmf57oADqTxmof4t4kXTZPs1bo7rLqrLx7RL8BJBfbAqaKCMiNEaM6qNVT7ho5C8CfQJC45mQy8E2",
  "key21": "5vZ8UsMtnD8zn15BjuhCS4bnbacXpTC2Vu44w4CMNbaJhzsM5kATpqjxjtpLVV3sKM82ZpbMVJa6JTfFnVY1YqxW",
  "key22": "3yfDU8uZe56cxAgiJ4jApStEugcEtCxRXR7UKpiNDqN68zVa8qK9oKyDaUCiRRyNcb3c2vvw7aPpBkkLAYnRJVtF",
  "key23": "2kChUPkyb5Abqvrxw29KxeSitHCqYatuzdv7mVt2ZtprrQ9EWK1TZXeoaGJzMc5NqrXhFSkaXdR3HA1dkS8MiHcM",
  "key24": "yBxeGHfebB4CMjTq9giaazdDg9mDeJvnfjqu3kcQtfE7Qx64obos4prtfvtRwpHL1EX9W6wLZ3URjJRQFNQKEXQ",
  "key25": "2h8D34mZNC9ysVcePeVWaUpeABJebPD3mBrn4cRQWARMrwGUnXXJCjtemX1GeosMqdZQREzL7tPqdDaXRn62BU5B",
  "key26": "4QuzrDgRPLD6v47i34wbK9CmcTAn1WYCrUmTjhhiou2RSQjE92eoLquD3NJzCXXGD2uMaC3Mu3nt19GRfHdJUfn9"
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
