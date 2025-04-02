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
    "4RWamZKBDC66cYtFjAaNbqDcCjM2a6jszkYw1BQF5KSPTJFJgasW672EJ4XpaCFfz3kdJTfci335mnF4w4eq3JCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W3g8gKQDJE5HbyBDTwJgDb9ZmkruV6Ntd3JDNsopspNuAXkLEfYsaa1ymYyVsHvVZDFVKx4GusjgGgtEekoPDkH",
  "key1": "2y7iW1UsJgUphMzzAhdDcDpRbwHnUW5guMBRpsyCdoUg94y5HdPJwQ4dgTuApYfQmpoCZd1anVmjnXW9StQAKmeY",
  "key2": "5TTKZsqgFNecNfQ5mbqvbAQSDBNfsvmBdWxED3gNDZcmxFAMZERtDrvYsAtbrpAomt3pLoxhyxkNNwNnrBWqAoPs",
  "key3": "23CCCEz5RteX8hcVCHLZWPf8Huam8vnxdA6HftwRmmWbvVGudPSJJZ2w7QKeB3mDQ9wQ9Atsde4VyZzFqa6GShAi",
  "key4": "W7rfPcUapR6ixTiqTukq8H8536Z3ButPYvSGVHuEqzac4JEyN1CvfrgigwNFMq7xvVMsLmwXSsRTWCieKwZKncP",
  "key5": "3i1tThZnkigvy6qGZ73G5Ra4KQ7zdjja8zKdJYJpXxNzic8JvSwRidVzUfwaCgGMrQ7SWJtqdvbW4iSfPs8gnST5",
  "key6": "fPUR5DqSDJYSKkUisGWFgXUxYEXNYgp56c4Z6ePHJLDT6HkKNgeFjwQAcGwNjVrFSJ1kjCWaLEb2m3bwKpYvEhB",
  "key7": "HtGBU2zCZfD8iLCoacPh997kKTNkRGTvuLDTDoFka6gMr4Nsd4ysEtWTeSCsWSu3qqfV2keUkBsmL1nnJpRMWbK",
  "key8": "2E1BjsfPy6AE6jQsqEnLKqsVswuo8V9XCuefQLzn2ux1nBvVCVBtgQydyfT1yYSyKqSA4QMZGUcj5yjXKHVUqYA4",
  "key9": "4AUXkgNPcU7gkMeWXzsp3bizY8YB1bHkZCA7yhmSorBebKt6fLGidyL3PxwSSGw3kzw6Ede28ikYNvS7W1LYwe1r",
  "key10": "cTvQsXsPtfSCnxTTUJRF5hZ1PBML7GDmiU6UqBjjx6GpUKeNUwZsjGWfvNydcqxPfW7JYXaS9E2U9j5Hc1Th9WH",
  "key11": "345EkNCqxFgPRmtE8ynea1xvDBLtsDR2vJ4EuViJHp5Qwu2xbCE8L6616vunqEixuBd9FEgDXhaKwsqBvQBJEVcH",
  "key12": "53t5ND4YFbfge1uob2brosJMpvFUSCChXaSSsmJ7LdVbq1bzA7sbhtCosuBcU1fyShXQ9zvuax3gpXBTGbwY682z",
  "key13": "3n1QWtv9YmDnrX1ooUQoJbpQNsBQ3pDBY9SZhXPfCKfwzPGWkUQZw8KJKq4yDFff1BM5PCZReXgDUf7kWPoEFVif",
  "key14": "5Cg47oo8jSphKAXKXWvciyPTmrTbu4ZUG3u4vt7Rs8cvJJvPHcG4S1o6z77z8k7nddkHz65sZrxEEcqa4rnnpwbH",
  "key15": "M6e5Si2yqNYunbZBvwy3UjSfphg45Ym9sZZ1KtWknMXZab9GC7E4TzdpLaVUPkVqD3S1fvDQMJfGvFQ3PH9FAKQ",
  "key16": "3BZjHx1rccQAvrkgfHGgytjoGD2RWMPuK1ZWvFcLGw7wYcosbdM4EdYvDpZ573hDiaZm8X79B9aeAEYqQuGsJcaL",
  "key17": "5pFqigrKFzfuuYSywzLBBMZ1MFprm7EJv5XKm7ca3hZYrXPCR6qKG8r4duztWH8ERkHZGQuijj4yPaQY3g5EHpTp",
  "key18": "4pQqyN1pa3RtkLchSbUKToAVETgAa3MtwJLeUX1etysdV6V1ScAJxaFYyFdMnQJ1tvjdNRcem8sZ36Xzi789o5Pp",
  "key19": "3eFXTk5fy9UUQ89e3yq19KfNa7rfNAauyrS8wEQxrkBEEMXdpJDp183iikVvPYQnm6QBMhAJZeWKA6YVHfWhgYD4",
  "key20": "66tzFuBLkkeEz1y5kcZxRdX3V2KJCpJ5gcmfa8AmiT9FSKr6nTnnXjGXFz2buD5crRgb8yY5iTnQDBkMTPqpKXJF",
  "key21": "55JRSyXWiowqkgp5kWmDvcKUf82Me9QvPn6z5TVRxLDprNSb4B9XuYW2QhN3b9QizT5QPgEqpzCDcpDvpYtxK3kk",
  "key22": "5hg4eCdT8zQjE5BVp13qM93MrGdLLkBStCuH22GZR2RMELBqxzzJCwgX9Cc62CpcazYLyrxLM9K9H5a5LBqQntKg",
  "key23": "2nKPVcebpjxXa2JKV7DfyZNgpm7LpnYFFRgHMvW2ghcxYd5wWvF1xsXbDBxgcDKChhDnh6P6u3Wg9ZcHjSpMxCiK",
  "key24": "3YDhusryKubj1EcULL32VrT7QiKakMDW5LTUyrsdgEKRW1cVaMJTUwWjs6G6syTzPCL4CduQ2pWKQyqx6q3gnrjP",
  "key25": "4PN5XZvcVzpQTme36ocjRb7eJ67iL9QJjR2u79ZSk3AQQ9KBkFAuPe3GTHod79sDNfxfTmYyhwgmzLqW16UGdpct"
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
