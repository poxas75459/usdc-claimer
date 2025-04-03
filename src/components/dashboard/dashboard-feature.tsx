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
    "2SL8MDKACd54i6DNVgeDWowKgJ1eUZH3phjSgB8MztKPSzV5nMRZ3igWTg4MuthFQhhRX9HW1EiN5fyQkVxhjyYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gh6b75zCxv8J4BfGfH1WVbbv8vY5CJk7dNAJovMLUbGmYuQhsBcxsGYFVPVc4ei3fsVpkXHtC7Kd2jxkNX4opu4",
  "key1": "44EPrxN3SyuXefmqQuMcmYZZwEcDXhJydGAFaZV9CdjBZBQbKJCVDU8VgBSHNVRUhqAj8RM5p1TcneKFvGN2vXSf",
  "key2": "2ZJ7q2rjPMu2CK3NKbPQWtpUZZTuEad7neEMXwtd6njuRNouW3ZQ1RadoR4Vok2e27xj7tr5GxpznTomUcCmUFB5",
  "key3": "4mgfaEHHCmSR9SDQRAQtV6kvunNcLgwvjAahoHapY6ZDuPmvafNzUSiRnfZzwpMabqShigBR9rzxVo6qKCxt7oKc",
  "key4": "3HaUy5WTpy2ytiG56TPnZA2aD8w4nWQwUdGzcqrHQCqayFTo9oBVgyNVrbbrPXqgwog9QYq38LfAMpTE2cLBbnAW",
  "key5": "b7CoDFeGTsJ4pu2Uj7hQbPWZFKLATWiq9CdsaYzAEW1L1rWmkJKcQ4KRv1EPbQq1u48SqZLhXZvXcw5Sg4rLbDL",
  "key6": "wYwENuK8twYfRWyosBMqRCpQ8PdnbRWGNQtjsD5htCKzdLHe3T6JEHoZw1M7rJ3b8LRk4xtuAp9EmjFqRH77zGr",
  "key7": "3wJ2xP4sH75FHgJgXLmNrX6mkahN7yKuTVaSgNdBTYtHjKyMNMVPnDyNHDVoXPUC8Dec8Roh5xHtTCzDKUzt1kWG",
  "key8": "2oMTh3TVnmbBaRqGUCfXmC324SETVewdyutiERBmUFvikpmGjxZMyX3zi6xfh2E8McYXV61Z4GZGCzQBBXbyGtyd",
  "key9": "2ZSSrt72oDb8GRs8XpoUqoxchmu51jv73FRqhjV7So6NFrMMs3FUG8SBwsczuR7bP5un9ZSKEQS8gNDAHHV4fp7S",
  "key10": "5wGNeeRpsZVuMb3g9ypmLAeS7rPe1kBQFN92NkwGYthQYJkr1rG2M4SmrsUadnLxPPFYUSDu6XiXcK76qdcnd3NE",
  "key11": "4Xb1xLAADQdJi9V6tzc2QHobNhNgvGqcXBVSbbFSWgfPzw3PEmTdxPeZ7jEbZdgTHMf5qAwFYqcqDZo7jqtC3obT",
  "key12": "5ySzfvhme8C2URGKTZxBAGxfjMXNA7YQY6xjWHqvTxRDdDcWbkcU2hdaBdA5ryBChtzKVWLkcB5sxT3XXBfnSnUx",
  "key13": "5DzCg7jiMrNcaUESuk5Dew1C9XrvhRmia3e5omx5pLutvDBq8gHE7KXsPuuUa9ZsgtfTAQEbvQxBqwTmSSGdEPdP",
  "key14": "3VDz1wY4PZ5aGg76SqmLjzRgKiqCsJCPMsyN9pMpQzgyAj5YYuknEMfM7Lxx4E8cP2BDZ7EWd4KgCC3BH6oCvfQW",
  "key15": "48uLi8pQpRxYX1AKDoVB4nWYyqp7pjnoANVeBSvfMCcuo6Q218btv1RvMdfhmCTYrQ4zdimEgCxA1YsMsjUVeknP",
  "key16": "4rGF1FVqMs4AqbuEgw2m2yWeeF6pSFVnRD22qTn9KDzLGjYo2mv4GwtdFRnjhD2ZkRcMieRq71q5T8BPid1iNsRj",
  "key17": "5ZDK5cmjCgmj788ntqzcPJtcBFc2LMNjMxw4NbUS3BdPVFb7QhJxrQq7EKKbBuV9FYRkREK5AfAbRfgKZiYWymhN",
  "key18": "4FthqPx1popptL2Ha3HRNfd1rJPDhGddk1jJNcyHTs5yzP3sFfR57Ah5vb56SydHYXd8EbtqyxY82yxarfXXAyt2",
  "key19": "4puKUJVqqUkFFWf3fgHFctTeEoMpTqkzxZexysSdt64QAmuNeSuBWjnz1yL9G7BifEXEPtzShyWNHAHDJ3mYJMPB",
  "key20": "5nf959WTHZhTRe9eb2VV3x3anhVB4oV51aAiu5RXWPZKwzj6oUuXAZbYt2e19eKs1ANJoet5E9hH1cFEnW6kZ6eJ",
  "key21": "3c1r5Jyn4zA5PptAhvskWi8zYzVhx3WE3M9T8hGv5VCC4VbnxwyFm5SXiG5kwAf8BQmMwkkW32mEgJeGiptd9yzg",
  "key22": "5Y83eqRj9rEhqyPaQrsz7G49kypzWpTgKQkeKJLK2kQFt8vySrFSc1Np7TvFtnNrHUNfP1BhzQSZiJqiYjQMhPNz",
  "key23": "uRqqa3nM6QU69kyEwSpSd9v91ZyG96YL2akN7Gt8GTuP8KgnpW7HusxzQjNmpbMcAzERKDDsquKoPye9vnXU5YG",
  "key24": "3hcgvSbjdvHoxnkyXMJPcnNwRp8w6TvcVDESSpkGzW1b3qi11VWNZ8h8vAoXEysTKYHJhM6G8QJa5fnUmVPQZmiy"
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
