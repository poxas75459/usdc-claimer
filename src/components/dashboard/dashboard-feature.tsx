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
    "2Wh9s369iqy3kqnmBGxmQhvJ78PMrpcruTdegvZ4AZpjDZjrNJBkL9jtDxzx2U1zeWRr3cs41XgjoANjWgpvncLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8UatFNcSSSq9mGYzv4XwNxcrTAfWPZZ9DcreVc9Sk31uG1sn34FKZRrTDCfphGAWhDYR8BTqxdAWc1N48Bj6in",
  "key1": "4orH3Mh6qrKAF22gFeuAn4FaUbj1ZeFvAFWRvnmoitpmArKEe1DG6sbc7MWnDE4cA2p8NLCQMBhZNjiUxPHyQSTW",
  "key2": "3vatkDc2gMDDZgUFASj8ZopiMQLmSngHMChD1QVUhYy52vLxjPpczpUsaQp6pLMWGSbNqUzwhHAupqWe4i4GWVgm",
  "key3": "42yhiBotEvnPGxnYX6K4jGnKyQ5hNnScr6TtisahsJNGYAgPAwy8YSmwvzhnYZPLyKm1pVm49XCP1BtdUVnwmQSv",
  "key4": "2qqj5HjNSca34SrZnEodR9YvWXgi9MWqDGdNvT6ScuBoAkQesJ9ABgT5nFgZq4BMYpnCYYv4aukk7LKoVBBcvsmt",
  "key5": "4hewUuNcpMZjWYAUSGybzGouLnCNYFEoQxSZ9UxB9EC8YnfHQqbo2MgzCFFNGrpeYnWXNujLWSxPkZcBPvtCVQ1g",
  "key6": "2gFeWBXR88KkAGxm2G8Z28sRtUHUZTNG8j1nF7MVQpNFgvKHQPPXv4x1rT42zhr5Y3bboBpHxXTDNbWacyGupWZR",
  "key7": "4KsMYV9pQ2EpEonMBxTaSSBy8XFys5KBRZdYzz9bTH1JaqMF38u714pveaGQaHVT8VTNYakogjeaEuz5FKMDSPuS",
  "key8": "58TybTJZDTE2zfK2nsHRQxKLFFJkJ9EgsHR6Efh6FVhrzb924yWZaNQM4aoetaMb9U71sf57dQKQvM3YQZ3GXo3",
  "key9": "H3B67sZBXTzmhnvKqnJhBGZ8BDZqvbWviL2t1FwDLt3uMvVfPfb1kCdkUyycE7LHhydUWHznbR3v8Qhkz9cxH7u",
  "key10": "45iTq6Sb4xQ92bG9ifMNWnifkyKd9scUjMGfwFFoUotfueN6qSySEWPWgkrLs1ELZScT4ykjWeD4876Mm7S8Hd5a",
  "key11": "9jVb4gdwYUkDhdi8b4DdMPZnY35GZsBpe9anrhaAfvop8PmpZ7jExWghNa2zyfDHVab7Z3uJLGHbmjzmQUD1uA2",
  "key12": "3xFRraKGLCesRcSWfNW85EFynpjSnKkk6uyh5aB7usQaHHXokq7EdpK3xwusxWdUBSRGzupkRT7tnXmKMx2vWkk9",
  "key13": "4riBhudvfv48uSJnoQ8eLENprx4apzecA8DiDpzyRje7eDD7zAopA1vPuGK93Ra9Mn2wj2oaUHoX1MQBXiThuR6h",
  "key14": "4hiUx8ky2MPdqhPRGcWSL91jTfaLLBWdx2Nyys3BXdv4GWwksKXVpmgEWAeC7hsN3ieQpajh4afEYbBTkAWXFfWy",
  "key15": "3fmL2ftZS5x9tK8PzZkCNz3AhMokucyvuoWC9mUMtiXESKQTFgpMksVErTpnkavhGwpqjVAt7f7w5LTeX7m3pKWo",
  "key16": "2i9Ku8teo5b314DjdL2A9wjz26Zr58MX6QMgX57kNmd1TtjUpPGJYUqPRanV5pyp4DeQCjUmQgP6bxHeYLvnt8uQ",
  "key17": "5mdZ4anweeso2dRcC5J1uknggiLqxftBCrVStSceZesPjH4QU43KAWATjKVJEfuFa822rQYgDAX6zRxseJu69QYK",
  "key18": "D6eVdU4L824Jqx2RQhUUHQkib2BWYWJVSMJF3TtT4SRZcucwzcLmr8GKXYob7xbUy4svN89KEZs3xXBTU1HuGK6",
  "key19": "3JmkhvTK7xRGGFDKw3oZRHPXFTKVZRpNg2R1MZoizitK8FQAyPWTx94ri8ZNz97t8gMYTkRYkWRCHCmLbCh6n1cg",
  "key20": "5FCREKEKJ1qKbedKPwJufkSdg17988684tL2JCs5fSLqsdc7oNmdGBa6PRFSkUqXm1BUUjtJv4f76geYpSYmnJbE",
  "key21": "2wA7FyqqCqGHPzPNTSxMzmLNx69PBen2NBb2HfPRpsJFGFc3j3eW5Vqd5nRZYs9tUkEjYQkRDEsTieUw3jsSQ8kv",
  "key22": "4cmryKYG3YcG1BDj8u2MMHN1RwHRoAEyRJ49QEhcAqKnB6YTt66Mv8XeUnRsYZSTd3PArdutLZtC9WVVSV3t8PHe",
  "key23": "3LzzJqSwRb497oazhqL4m2C3QbBhdHyEEqoZaaCMw3WtBL2UirNQ7V1s22E22xZybheeqNnaXxymso5eoQVmStJC",
  "key24": "4Lv23jPpEc3GQxK5jEvHQ313xbPCAqdx2WuhMstHUH9GUhVRcppVTJfqh3ymGv7oseFZrCPUsighZAt1eqPMAy26",
  "key25": "49cMzXYnEe1LpuXyXvr3UQHBYZ8JmZYWpEWMJ26nAEPA4V3h61RgRox5W91Tu7Miif7scMSt5WPu9yUbwhtCTHH3",
  "key26": "4MBkWeRfjA6T9CyYio9Huy2hNBEnxRHcsniBVdcnzKbv2HVDgha56wf95n31K1QtSoqBLYTqMnUfUePMqMZLREmQ",
  "key27": "2c5dsvk1CsA1MaMHkoHxJdzEQU2TFx66tVMM2CukQKsxVVr5tCNmsDtxCayFvSA3ZDYPnUiSBdZHgHgQSVYEF9P",
  "key28": "4xHjB1QKjJBkYxv4eYVmMFeUKk5Q9NMXBrFD5Kip1c7ooVpvAFx5CjFXapodi7QoswQ7QXVNQfjN9SQNuW78i6ZQ",
  "key29": "6iNYMndhZkdRsA7rW4VYX7FfRmir164bF3FZgfNPgBgQfGgZLkpsmsnZEh76oSbKmiNpUxJgD3m99G8WBcJtnkZ",
  "key30": "52iLW4c6eUEb27yjhs7qenvyE33mtwRVqELAtedegM7i2L4NmPyUGd1ZGfn5F7cZe4wwQQMjpwRNybr5eCLMLHUA"
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
