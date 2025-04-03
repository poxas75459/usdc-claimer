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
    "5QvyfB3Jn33k9UggNvGQ8UtVjEYPcrNiR5wdR6HFSwzk9TmrCsph2AupwNJFHZV7ecQBG1cYtHeqEZW9J7WP8YUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7aRmoCdvmpsEexdSUFcSzvskwMFAuL2HjDCQ1KcjeNAydJE9RagsUXbuBxfKNkUqXiLg3dyzSDUND3eHhRZesb",
  "key1": "5tejKbMqfkbGkwsTHAkKBpyGcav3H7cgvZMjdkagNV3hkdWcLYEw9nSxTWgyRvbG12Mc31fPoRw9DukXvyEKXURg",
  "key2": "2HFN9Q4TNAsTdNFddMZXrQgc5i65YZdV7CEBg1DRuqndzvXAvFN8iEpHNrkxrGK1aqrKd6y7q67a8YM93y2ZTjx4",
  "key3": "3gGYWZm3uhpg8WF4LACCNn2sqrHZC14VMdFRFzynkTiU4sJL6YhqWAA4A52LiL2djDbCQjapGDFvMMWWyYukwHYd",
  "key4": "3eLYVMpvxCbL2skpuFZCFw8QgN1wNDNHnYReETKVuVePDnfydMPVG8nv7yKH5qJCDQBCrNiGTWRY5KBussjiJh8s",
  "key5": "5YB37CECUxRuXU5boLWE5E6maTxfynzNjVxcAU3TVjbrU4EqoitigHcDrXaRjbJZkB1NKX3bMvCdX2gaQQeZNPS1",
  "key6": "3r9aWovGKS8PGd5huP77XmuMEoG7oh5saaL41PHCMXynyorZNnwPRMopFZo42tSxGsAjVYDxfJiaE8qqkgr5LAZH",
  "key7": "3ne5JumUm9kv5XnU8VFACZUopsb9Qe9wGeHPXAd1KpNm6EW41nPPjNnKEqHegPUFu8QsQpsPsTuegztHSvaGTPrv",
  "key8": "5ZdmCniotDFG3wmdCx4Sqdt6vXpM2qkyhCh8FTi6tq2THQQ3f7xTfKp5v4QrqEFR3UyF9AbKTPVvwRAn8mp1pkGB",
  "key9": "5wbdATA7hyu8HjYEbs9VPyRhDKbrB1jokYG8x4GRPxdj9EQU7c84vv9fHyWjgZL4ewk94GGemXFVsEncPk9Lf4Mr",
  "key10": "24EDRm9swC8qBeV8JjhCmYCKppEmzYoCrzXgUCwULfDJMCkxqB8KKKGy63JQ479NSTxeK3ageXsjTeYEZfcB6AML",
  "key11": "3t9sr5danxnZdhVdbKCtBDpXraqgmL1JeaV435kot2HA1k1ESzF9tsSfqDTkHRJRsEPtMhimQ5N6F5tQf1YRTmiP",
  "key12": "2ttZvNC9hsBVVFbVne6MEH965a3HEKVxivcvX9kwppoXUPaAJBk5fg5ofvvTnsxmQ5mcC7gZSvUyBExxHe4vwKhD",
  "key13": "2kWSVPBEF5Y1JpFFy3pczX1fXnnfw6BPYEYfRtx4a9eVngDX7VDxGLGR7oobG8LezoRfds3ofnxQfc2C7WTd5TGZ",
  "key14": "5apWiNA6gnCCmPiCpSYSUuqLPGyYAZ6EGt5ZhgQSyEcnqg7RCFDSp96C8J1fWvuBF68fjXjVHKfcEvjmQBKZQFKs",
  "key15": "2iwFQnWHpV3gDZHxY7VNRa4Ck9fKPf25VzsjBTePqC8LqM4qHxp3L1wiSeU5bnkgjLNDT3wZvmo7CurcDLRzFXZN",
  "key16": "VcmXByzPm9ozY9TjhePnniwTyZXxh8uMBX6aKq85FUc3RrbSKqpBQRzq1eduxKYZsRHGnbRyhi9y4xWkgTzUBC5",
  "key17": "5wrGLm6rk85kGpPctZvh3s5gbL1XERqH2GLZMEB8zeVcWfyrFCHYxWUWxmtvu1PvGumNCHqAFxksstrpK6XqXfAx",
  "key18": "3rfQ14kypLJozetbRcyhrYgKWhNj2CHhEZfzAQ6uQF1vuM5L9kRa89AS18oJJm8qqJeq815BXrQzFFkZNPZNRM9z",
  "key19": "2g741SAYt3wpg3HrBbjGyUAEyUoAN3ynJ1XZt9qVmFoMR8DnwQrTQUjzhwyP6DiYaj2NSSwgF1vrZZPLTLTNEgHe",
  "key20": "1B2H2D9uz86vCACCxwjEyDkXzLGSHz6wrLTPxUStoDGJv1DBDgu5A9WtKnV52xL2LRtFt58ycCuk5E124ZNkmdH",
  "key21": "4QByDDTyxBZicUNXaVmMkMEJrG5A7xDExDiTize5YiS7UUkrxQ1WLfSZ1cj1dJyLfnJS1EpUAoabtWhUpVV4kmYE",
  "key22": "2GASyk6BUKv8rKUtNsgehqZk7jT6XiBVggKP5Gmiz3Q2z81pwr7wgfwuMRSZ7CHAN3A98MvFXhoFYLMTj3EU6vXo",
  "key23": "2gkMqKT8cLRbExAiVmszTds3FhUfR5Jt7PVvsBDuv2jjmeCpNQeGvapwKeisBz5YjnNQLKLKN623xDJiXYNaXBfr",
  "key24": "4TLVj2vgoDQZPRZ89w4ZK4J4xdQ7mFhKZgEzqF7MUutiQoFvncwux1RtQQ5nKAMQuhv2i8AALiSPzfpJvBbfPdkY",
  "key25": "4QtXRcmqL1xSeeNfLzXa8QeGap6BQAnbmuffUADnJhHY1kodXBGuNxeZh5KZKKm2rJ4jR7pdfJ9NUCZpx8gEsLbB"
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
