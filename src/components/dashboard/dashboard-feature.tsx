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
    "UZL1wA7WVs8fMiUcFFnwUFjNVJnfPRergUa9fxNzbPxxKQXL75bU6FbLe6mMCrJdciq5Wv7FBWmmFPciiJWtU9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ox2dsVS34RVAjSPUDibsru4pCn3xgAQUXJgF9TQUPBz5BhhHCekGVNuKzpFkfkDsszsCNUk9Bk2Y3GU2h5EFN",
  "key1": "4numEoVkyanK6NZ4eNKAQeHyUuu1EDuaWkDiYJM9P9hL9d9yxcizNLz1E1Fqnk3UN6e4i64LPzS6MkfVoLd1dUgg",
  "key2": "3aa4b1JoBUjdREd5e85LRPzDMDRJpWYJrh3L3qv1gdSShfWdtf8mfxZdBroG4Y6Bsc2L9aoKomSmxSoaw4K3n7kk",
  "key3": "3kvjxkw9k6QVsBNT4AdUeqpKuPXWfcCBjS12pwA5Ac9UoDqTHSQuRF8g1xiMvhn6DaKyfVZMAY1inCMi4AZyVNm1",
  "key4": "QS7yjSES3nTaxh7Q2FJGQvVrVWsB6BvaPeHSqts165rH1oxUfgcd9dd5mjGJKsFRyhM8Rbh7YRiatfNVkC7oYNE",
  "key5": "3avxvc5KpZJPspxJHDSfX4wt7QxA3WSodxhEoR1Hw7PqPcD3g6k6zqj5iX2CrLiczLwugZiRttECoH6FVpDWTjcL",
  "key6": "5emDxjUQxo7KRvtxGjEqLZLHDB9nAJUWn1gUtB4D64tAS3q8pCYqPNFvk3X3ZgozEZ61r9brGF3k4dmAkw9j6VbM",
  "key7": "3RMSfXRm6A2uf18TaafvBSRy1UBNcDViUUFDaALQyZcuaZQTu522ij6sAriBqUDyy43iMGvCrNJDmKiFrQEQZMFd",
  "key8": "3yE1iTZiCVMJLJhxeWtuUqYgg1ZjPr53Q8iWFnhKsaoKCNQNxaYqTitYHQFqi78uqPUyZ5igBnd1nymsVPqUfS9s",
  "key9": "5hPn4xsZopDUxYYrYfkAFaTyj9PvhL38ZEKZCtBcVpBQ8QjpQ9SwBaFUpAhnteMF89n3m61t99A72g9VMi5imnMQ",
  "key10": "FKmcVZMnAbiSDTVrhtyo4U3SRfxAJrjHmYq25TCfPQg4yir5fjhhGhpU1bwn7xGhJ87Lu8J5znN2Pz3f6Z7zgLm",
  "key11": "3oZ5dZ5EvsazTLL3ueeLBMGdbubdSa7CVkKhP3WZb3KqBebP8g1Y4kmw4QuDLCqWAkupsTUiFBgWtR2Q7rJm8y3R",
  "key12": "2voxmMdPnJhEL3xJTAKepYTex6Gr3H9F1RYkNgKCMFhjQsKBX4CcwWeLotrgrkkYXWDUyxeaMyr7MLFPbjNRaC1o",
  "key13": "36fEsSbeDsRuEghVv6vBN4dHM1AP6CMNS9iYdPfktZ1nngwtvYB66b2M8ZkbPFdoq4Us88xGzeM2YGQQsS4gAdYy",
  "key14": "4rtKYwKwA7K5C1mYfvSaQ98eq2uqqfVgmPXxA7UhctEZDKhTwm8nZyFtH5TX5SWT17uXjK8JvkQ6iPHDHFChoyct",
  "key15": "2JMAddPCL6YWcDDXohEVJ4p77uFkLxVhzX9fVHyEt6FJ4DWagmj434dDAvqEwYjAueAxrqN3keDfaceAFh8i6yt4",
  "key16": "9UkZ6er5px9YPjDSfU4NfqprvL5hoyqRfGS6F6AyRKrtUH6qq1GREAbEmTybJm5xxMncNZUEfvMAgBiow5EvV9T",
  "key17": "36zFMx1qBgSs5zkVn8UiHRzXAYouhsAnQucLnHwa5xHjpN82K9oW7fdWNcfFTZfRb6Vu1QjJtTga9B4hHd1ybWdS",
  "key18": "61ZnYj7yNQaC8L6Dy5zHmdmpY6uErpQZ4W4nkpaPFmrk3qMDhPxtDmTLB9nyjxjnhKDzkkRzX7g9MucrWrKCH1FJ",
  "key19": "2vLoJJabRm539xUi6G6gq59eTk9CTd5etvX8jqckPpJXxZuJw6K2iAt3uYsi2SDec5fbxvYShuMk9XDM6derJ7L2",
  "key20": "5XPEzwrHWpf3dPXJy6ztnSQ1wVQk3eSU8MJnrfLtgAuf5kNzJvKV8DC6Q3dSfAaPP3i3Wsxm1mKReyjodxkZvF5o",
  "key21": "61i8kHMDmRDr4BQj3cAu1nrXe779B3TEVVX2TXduK4f9y96LWCCctVLdbyb7NfZrE5Z1WYBPoPnbPJFUoXm8pBjp",
  "key22": "5dHdf4dsLW1P1CbCZJw1GJNvvdkAk2b9uexcJKJj3J8pGPbcUQpwUgUozefwKRvMAc5LfvCzodbhuJgJMXrmyVES",
  "key23": "621BCqH6mLM2F7u3mya72U4GzqzeumaAoUjEA9UFCPCE86VF52wmr533tXAuxBDhiXrKEjFrNhsyYzAVQefVQ6bn",
  "key24": "4JTQhUxnT1iDkSBQNx6hKQ8KMA33cV1U6vjFtwjfA8YKf9zKXcephZa7cpNuKP7c7aCrgkY8d2JfaPNTDV9bV26u",
  "key25": "4DXxvSuGv2ZC7kpguiPfFB1cD5EfakHjWss5SeQEF669qRedxnmLqcDdhSLosaSaySt91AugNG6eeb645cqE3dYZ",
  "key26": "3SCQMFdjLXG6E7XCmAdWAP3xwjdscR4784cAiT9EJLZWo8mQw1juTJ2hYhDTmyCQYFLqU4sozoY2w1oyN26UJQ2h",
  "key27": "3pXqrrjS2c62ujV5Lz6WKKPatFFBMsTaTgMWVgX17Nexw3cJXS1YspVUt9TwBDJFZWgb7CxdCCb2WKYwibDQUud6",
  "key28": "5cEoJ55GQKD9jokgk8oDmk47N23x2bznp7mR11NGmpbe8yaXAesR3gvmkSdrZxfrJ9JzyZWsb1D3svP8KRQzFwry",
  "key29": "3EHY1HxhUgBAtziFmLKpT1Bvko76ZZgyo4bZckhSac7UUP7VbR3P4GJm1f41fWXFq6BpRwpxZfUtAiXLdowuyXAq",
  "key30": "4NfiFh6GhYjbtF5KjwQurjAocYTCPkcaXzbkkgAVzPzroDmpvpeXS4KtUt6xvBBocr1xhzRe7NHFCwDshcdcj4rs",
  "key31": "36qnqCiPf4UuqJqXi2dQzzqQM4f5pwE6GjGCCnC1Q7HNEmwxvZnAQE7fS6KnXSqkRL5k8shUw9DCTYqKM5w4foMA"
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
