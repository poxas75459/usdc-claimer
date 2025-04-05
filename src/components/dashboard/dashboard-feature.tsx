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
    "jiHskNnWRX9EduGjCsg2Zi8sXWVCUZKZKyZx8vppWpZ1AHEEB8FNgVLn1SKS7WWgXLiSG9oifJ33giebrjZo6Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44oJqFCcGJF5jrHHTd1oGXZrpQ5mvyjxRCh1xntuuabaVAoQSNQNrY2PZgRqfmi9vXNeKKwhSCoCQxoE7yAEuUmq",
  "key1": "SCXCykd9GZ9LqQwLj92PGjishtYVB7m8QXyCG85N62uWcQaEWiZV9E8PfVxkUu6Fu778c6m6RS9zBD1cJiRkt7p",
  "key2": "2g7Mdpi6Pk6q9AybkcYAeikHwvaCC733DqmZN6GoksTtyWv753ayPu2Ljx8CqozsjtMAp6i1XN8ujVhqHM9oYxiM",
  "key3": "4uZrcmmvk7S1m8wVXTbtSrGFiyCSvCwfnasfC1bjqS6KFZ9obnfysXpq1VincqkMupNn5yUXssoMUiJfK8QC5nMW",
  "key4": "3mpHgZV74UPgXppdULHroUGZVUdWsMcohNEC52q5ruTsu4aZzPbG52m4LEqEMUsw2r9LxfDG2QBrsAp6HKGDg4uT",
  "key5": "4rkyFYNKvRsi4EtMv9jhAF1XaE5mzDfDcpd12tiEqwEEFp2ffi1Z76udkBoT68Ad5EKLv9DZ76bzRvM6WmEAZ6Wn",
  "key6": "KNShqtZSZoDKNuyh6s5ZbUAukAFg9DgPJqXCxWRyzFSX8v6VS4J1x3dUfRkXrLUFVeT7guoSW4Ukq6uJzHwmEY7",
  "key7": "5oBFpqb9mPawykUa7vpz7iJq17wCTzJRdj3T6TrENBMb76dWoj8G5qxPxDPnXP5wYbRBKVx4znEPY1RfrkrmnaHY",
  "key8": "8ZZ6MyQUsEMvmPKg7xaAsDhy5uK4xQTVECB7KqZgujqm1zhxRN1ziRpkGNASdjSawVYM3ca6Eki1hffggLDgD2K",
  "key9": "5JdSQP18bdZMS6PDZU7EWrDkYanL187vgdqphc9VadY7xQcC8WgRXA7Trs474v1vBuufDj3dss6Eys5CCRoGa9kK",
  "key10": "3Q1aC4p5u85bJ7wMyUXjznTZykF6Xk2GG6xsk5wS7fnNigW8iFX7Ct6Bk8fjrejsHi29Jh36A2rPcbkSkjEfdMse",
  "key11": "2N5TcWZpCqPYQssfM5acgHrUuTJE5eZ8tQrxDYBCxqfvLySLa9PyjGvsXcqdn1MXsYSZM9oLvirjjK49kieogqo4",
  "key12": "4hFMGuWiM4DtwTxxpEK4Udd3YBCLvdd1aoWyP48dJeJqcVjfTggD1LL5g37PMdHY7HeiTq77C84VeBotRdtGAr8m",
  "key13": "3ESuSKurLy67fQQmMQFbjvf3fEUHzjgBsEuMxHtx79DNuVXDiUrrcxmyMpJRa2eGGq4CZwP37GpV4oGF7dPURTfH",
  "key14": "3fEDRax9ZEtTDGs7UaaD52zxvmbXQe1ty2v6MFT8bBAyL9DbRcBALsfy1Ymtc4jquUu7qV62MEPBhnjGXzoaN9Yw",
  "key15": "35jQZzSdf5APoavrRSkirXPd5JysAjSpFWXQ4ybjuiGJ2cQR5rLcxzac4Um1CbdNRrjN4mEFjbS23juE834j8GKE",
  "key16": "2m4FHkpbRjDgTT4KXD2kJVQrgYn2MFXWZatyHLHADtSCrsJKxffHyYVKP6ykvWrzDEMbe3jrd2c6ZAA8iPjjpdzy",
  "key17": "3hVewinzdD1JPmPvsxQtAQVWWKJm5eYBxrR8eHRvE8ivZSym2a7JGwoy6duA12iv8vMUPYrPPqYFsMhMJWr1WkGE",
  "key18": "3Fd8hrHM9FCitVi8gmXfFUBKf9SaAoZg9PjjdpQHezNKJqsenY3QpCqANgWH1uJq9NsPTc7jtjNKosd3E3Xhsv9a",
  "key19": "4cGVeKbcTLwg7uVgvCQunVdhagihjQdp65bMk5BLPMM7RzdpJEdNFTtsFSa48hd6UZiqRHJdQDriuxm1Eih6dg6E",
  "key20": "21yfeEKjm5XCxdhoWoEVHW98N9C2jz2Mrr7NbKKpKCbwnPp3gvZ4grzdxmnbHmBXiAKpiiV1dvcEaosyDFg8hccd",
  "key21": "5Vmdmv65NdZ2RFu4CxTnbSPbpw552WToothnmur7xLAWwy1uDpxZsUGvXmjrwU11WDUu9GxBPw1AD2EqKgynxtR3",
  "key22": "5mbWP1CcNXhoURNumEs9WrUvoQnqxN8VHS32ysDhesJrdDJbvrU4vc3rmDB2ZyLvKWYwPngezGo4Rc3QcssMTNQp",
  "key23": "5eUezUkKoYphfAfThbLoJ7y363mjDHJwLRpNpNRNVvwARUjDNu3U6z1uz9cvEbPitnpPKKiqzVPqdUmw9xtkACou",
  "key24": "HXAeRKNzYvye2pBq1cKkDBxvPBE7pCfKifBbKLMz2CYnhe3F1SqutW8mfCbFQPC8fmd4wWQTCvB3CFhddSaCgna"
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
