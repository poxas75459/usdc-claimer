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
    "4HBfFz5rryqwp1zAYBAJzfDbSAiCA8xe4vNLkcyy75veS6NMP5tcZogzEqa31kXUMWTNYySdo4btjhUfrVaWMmg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVLd3qtAAVgNWvNc9Vzeq2hejMfD8tk15sbkojQLKnAqpDZBzsnQ6H98UQkLh5V615WcVSStsSCwBXTqx7Z9iZV",
  "key1": "2BbdNNxxt2TQvqnsuXLjspLtZHEKgas7KR4jbT4VaxQ7CXxDrzTQCKE5JT6tpuqdMYu4cU2y8gNH3W7fhARU69YE",
  "key2": "5NJcPNn7WvibeN4fQMi9GJNrqgDSMtejvJnhcjkxN8cFeRcN7T485GJXWrPW2NjnbiwJMJX5dwFdzqXaTo3jeXz6",
  "key3": "uQQ92i1nePPqKQNz3TE1dvm5mnC3ohVk7P3XmSgfi3DM6ENaKaxNxuooiXqxHgJVZa1AVuMUBg5P85Zu8mHgHr7",
  "key4": "2VrZxMi1ndwvUQk6gPGaXhjLtuoAfc4dgcgWzjyv5epb7tgqKJj5R6vP9WKk9yxxLBRcVdnqfFerbfAV4NAGeamE",
  "key5": "47hLwZzWWHVHrY4vdGt7N6FhJZC2yzyxZCEnPaZ3u4Wo9bJNY3fCPgQAUUjRXGgVp3D8aR8ieqBXWqyEc6Nd63eX",
  "key6": "4EZ3gXk92jvfgk4qLu5EULWsTux8oNXiX7skFgvGjpMeDwwoXs9WdkTt6eUe45BCDh8Xvda7vmcWWzkRdgHSbG2b",
  "key7": "53pyRugSGKHkgUZ62wFGN1p19RfRNwexz4NfK5qCJi715hUJKGixkSKXsSoKD449F6wh7BduhchZJz9ZbM8YdaCi",
  "key8": "4cmtrMn541euuJ55n4ncXw5FpnVaDZRawgw85q2DwYkT5qbaFz98romVW3vUrK9Dym5WKKhBhi5ka2wZ6pAaE6Bk",
  "key9": "cZFqU1N3h9xcJtUHdxG4YcA641GQywVKZLZ3SFc9QQkBPui7gT1kyE51Ht9ovtzekbxByqBdtaKJosn2gnuLLBX",
  "key10": "35HdxQSomFLnq35w747rgpfKJ215gBv3ALHhVvaP4NfDfvVvz8Fw1KpzWSNCPoLL2vGfUAeYQDYiXrJDWpWejApP",
  "key11": "5tTQc5GMDFFu53D9TvY5bxyJJpR1xRCxiqeq93s29dmuMacED5xwCw2hXcnfUPGLF6A9MNHqUN9qv1JTJ83j22sE",
  "key12": "7dg8C4TRXDSWfUUAgnaeDvfRccWHpbyuS4ZfSd1C8saJ6umGBExhvDY12cfRbPVTA3x7Nhgw1soihg1m22W6WrN",
  "key13": "2LVu7ChWaoncWsZsgT4e1DEHGwTK7funDpakfyFjUN3rkRtVVudstjrMsjHR8pjgTsC2jjTYwhwj9cCTrNFygwcK",
  "key14": "2L2jro3u9fTsywXcJQo5aM6KVZhhf1np1xMSGraF2o3fcgHEag7k5xZS1osKsZ6niQWDQ16cp3zK8TFkB76L5pkJ",
  "key15": "4DTz1Wc73qLwPTdgVDdywWv5W6VTMbcw4QuAJXmSMZSo2AuoqPqLjoEzyNSyq2HVuR5kBcg94iKivE2hPKV2E2A3",
  "key16": "3gbdJPRx1cSyPc6D2L1mmUcKTR7gb66iQFgZrdhGC5WLk1gPGonMXZLqNZ1GEiLcptspogDLvdPH8GQm4a84fFgV",
  "key17": "4McASYFS48Z8eaWnhcZDFN9HJqtzQ6AYerrATMZVTYDGTWxiAFSyS9Y5jV2urzK8vgUDmw7Hr3NJAMRVSKNtg9yk",
  "key18": "5CmsThJw74hEXXtwsJC8opW66FqXrqdFUC7KabXXHm2vMMJFM64evqCupG5wcE2xbfXASeMoQeRyeEipz1GB44NG",
  "key19": "3mq8wPndWNdUjZfhBzGoFPm3z2NcLPojZqD76g81GKyjrfEdVRN6P9XX7rFQBWTQUtmhXb6ijxXfF5bXAF2EHq9k",
  "key20": "5H122EaGJCrjrBjPFkMa9EMM58GcVtqF7SxHatYGWXkhc5N8DsteqPbuGyTCjDH1aDGac6J47VBNpQ8TRtr73HTc",
  "key21": "3EjPq3zrLrUrfZcXQPd6YuSWmKUWTa2PxLkF7Z6dW8qhdFrtMUcdKHEg6318kyn6uqkb1nQXuBHKZGLTfh7wZUUG",
  "key22": "3qfHhEZm76bScpmKzQSvkErjd6yotnod4djWGSvdZXPJ4Rvc6KUbYxWxsA9Dqhxt2NFxHMqhxRFrMgKV616utE47",
  "key23": "4R4hGMqHkRk7Epjfo82cTpsauNiASpWhUWRqm4vTYitQLQ3q8YhDV41e4v45SKRJL7H1msifRCwht5J5kvvjBbU4",
  "key24": "4DHtY7x8QuSeAB4Qq6SsTJPHkqLMfeJUbBt11pGsX4oX9yFsPoM9EV4AkfrzSpkpxQnimzq5UF2obRni3ZNTgbQx",
  "key25": "3tVtaQLJbmMjRWbib4u1AMgvd5Zia5Hw2LfcoWQfNphSFZiY2868b7EDQfRoHYZXnAY5sYtnnEi7FJ2zkGZV4VVN",
  "key26": "3LtPcD8AYitpySy1H5e5DKC8K9ZLSfqQjES9f7cgWKKNgL5UbSPpC5NJxEfbhTFWwPdoUCzs9YscmmTtHSPLy2XR",
  "key27": "2ogvEp6Z7kYitNXVC9ex9Hn45aH6o7b47qpEofstMc9Y8ytVt7T3GFK4Z4xhGEagWbx24DF5JnP9Cf91sJBEYhSh",
  "key28": "212M9EM5twTotZVHhdtBPceXafAKVC1t931899PDk2e6wyDZcBCy1KoBCnDzJik9DVcCKryPDPrbPi3ZANKxZ3tQ",
  "key29": "4WGYCQkWzxsAnh17X8iUbZXD3cijwGBHsM94KpUaGS5aW3es4ZrAD585gPjhXkrabmMjjheot7TJrFEUaTF3JA1t",
  "key30": "4cyLeCfWSdqsUnFGsdq2qmq4E6w4kNMg9DLwvPyHDoy7ySc17Bqfs8xCLkvrbCiEF4Y63VoUpaJoiUjTJuBRJXqB"
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
