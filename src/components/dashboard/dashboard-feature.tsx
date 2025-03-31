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
    "51ctB3HoThZey6yLHonKPDHui3djZN9LdUzRCy2dQuAhZtMd7yXAzbqiiiCFj8k5jhZsxyyqRTwH3xywRPDEcRWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqE4ojkFZWw9KmE4dLJTgdmr7Bab1dbLgNRY673AURF3S1iC6T1dkKUrdMS9ccHGiD5vpta93B697111Zh4HD2g",
  "key1": "5gb7sGdZni24n1hFStoRp919BTVtTJyJZzcoYaEvrbcxvTgSDBMhY9gcgUtt1vf72uSyugZdVUJqPWjxu3zSZWaL",
  "key2": "4bbkyXa5H1VGHxUGyTg4X7hSdviKUfDpHtYeVNh5MLHdktiZLwVYYXPv67MLoyJSJa6PULJTN89nx35M3pjEg5sb",
  "key3": "jVBB8ipRbwDWDALGCAWviD5NSeD5z2qGuNBckVbj24EH2Rx4CbKzSfNF5PJRRbazBcPUJBieRp4jQuUYdtWWqvJ",
  "key4": "3eEy87UB6SEYnmtjbThfraPqjmyotEy9taMutUcuuaMstrNJpTHRpNU4Ffzp1iMAvjahZbec7mLv3jLLL3MTCzne",
  "key5": "5qXUEofnmrWctcPkCcaZrUiEShwj3oa8afxrkJbhxJEyiaHH73FQhgW1p3DQqSZBY8RFzzeQdsa5vZ4gWGKEVhGZ",
  "key6": "32tYn3opWwtnZNZpuKSNhjY84hS4mdJBkwWFAsyxPXksx6KzYwr48wdApf439zsWQza3pZ9RWtAEZLDWcZVLwXWb",
  "key7": "4ziTBFmdfGduydfvt164PnSv7c9u1CsSdz5d3zf61QtBqaKVec1j1whPLt8WdHRhZZ1pjPdo7pY3zg9GfgrKXjaJ",
  "key8": "4jzvpg37Euz2xWDa8gHK168gttMrE65xwxcEMSZT9JJU2DQSajQLg1rD1SYZWQaPk8DTQsue2GPJKaxwSqU3e53y",
  "key9": "54dUsD6egsYMT8GWpd94hbMYsCcE7Yj7MUap76G8esSwtPqtfSJUZuMVkqRUFJ8iBPkDqFtfyN1NzfK4U19s2EPD",
  "key10": "4HNUJ5g1UdDaaBn2p4ChAz5Hd71CJKb5SiCTLzQKCRjVdtrfjvjxxeMQH2DNxhRMtJ8tjYSS42LAS7yoM6wg3Y36",
  "key11": "4fggvV54U6QX68dLUarAdhb5YwQbcMaJzfxZPfGasrPSEan2AdDvDXJ1US3hx5K3h1GcjjNP4nhn8PEyaXz3pf2G",
  "key12": "4EX5cahVrSEuAejwHkCngEn5JFeEQtYxw6MYTWCNpwkXNa1CeFsqe2W9iCtDmf6X15r1jmqeiGsQMgtiwCVpGzLv",
  "key13": "2ELm9FA9DzgT85uqEa5GkR2qX787mQ1XdSBZHnctCb5xJ7Q4bBUARGw3AU7NoxvyLeV1Zdi4VJNNpraPNWUNEnoH",
  "key14": "4VZgq2szw3MZfegh2qTKPrreCSAMQWzvziLEFCQqLrSDKHSpes1BxxLUrbyQRnRChHjGE7uCh6cSGGQPRtZDH6Gn",
  "key15": "ZRqxZrGU7PMnHJqBttuYiX8sDJLcmG2RLh7FDPhf5vqXRpAWKetwx2MzdjDrbTJZNHYAy9q731K7n9bvGc1D55d",
  "key16": "2yacRUTqWmcTLECP11djFZcd4FMk1e14wcJgzcWLRGMPoDwMznqdwW6NkiXahP7NSHZbSTPwScKqJzpdxhxzAmR3",
  "key17": "5KZnNRevbyHYFYPbbdQhxgipMtKeMKGHSpyd5SUkpsFf5uDSrWohXeiHAKximkVPws653ryui82pQZAyirHtuXJ4",
  "key18": "3JnmbznNd7hYZgcRu72RCcBWqCkcPYysHAkiv2syfwmvnopPhVBG4VHm29LTHnbZdrmXqvC2ZYNvdstCX3raMnHW",
  "key19": "PzANbC9vByBk9JzmC1w6bFjfs5MNCBk8UCoSeJisnVk1jYHXo58nv6MP4ePvbp9APyKZDzUVFGSrQT1xQfn38zJ",
  "key20": "61XzfCaLMii47vy6F6noBzTQqDt425JcEt57cH8jVAbTYC15f2ZPKGDEWryDtQe6Y9oscqyUV9fb7q1JaxDnHuhE",
  "key21": "2cuYAioXHpUHUEcmmUnqCicP2tzxeimwviiDRm9GN1Ha6WV6ksSdBZNVGD6yAZWXLz1CxAzh8sU5Ji5XkQmLTG1L",
  "key22": "39LvcnuB7V4G3YbSPJB1GwbodiieDhG5GBmAWWfEYcxHpw36R4smCAQ1P9VYtuyN4Gqs55WWAXiL4D8bX7jiDG2e",
  "key23": "5aRriRTVGq4cGtFgk9SbxwUhTHbhmiXZurFYHfWhUEvQDTjuWx6bqBG9TJa6p8xhZEn7K2bP9wqP2Mouv73Rs4gs",
  "key24": "54SREwcszNLYrWZ8rNF4wKbA2TCmGgY1E5T1867dc4ZGPf2QVAZuezi7PCgEBQaPZ8HUqLgefAaGYm3sfcBLg1yh",
  "key25": "2qGxU6fvWditUYMgVusTvGXW87aXHSb7pGiWCVhDFSa9Fe4DMFw4Ns4XNyrMsRhFKQuRRj5wTEoejo9vHJaHLGcs",
  "key26": "4i1uwEAmcfqdSQgcvm2TbctCH6WDzY72SQFzXbUa3qRpN1yT8jz45J2JMWY9x49xoXfxe7SZnuhxxkuosxo9BmC6",
  "key27": "opQQExtqyNYJkGVYdL8cvTBk55W1jqPvXQKu3YgsGtqtmdxYVvZKRbiRE4oZHZsb4ArwGCiXdxSsUTG9sCxb6Et"
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
