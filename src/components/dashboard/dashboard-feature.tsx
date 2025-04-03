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
    "e47eJs1mWLa2Ergznh7zVrTXmAm5j8sQgbnVx98nTPmgbSNDxw5DrMe5QMGbJagUxKdYVfYvJZKrzeaT9joppVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZhxKyYaexk739wpSUjydJE18jzTbgwC38p7jhRAL38VPP3yh9V4ydzpm4qW8Spmc3otU9EfLVh85Q18RZ3NbZK",
  "key1": "k7TrwLtQAnzUsgF6PWLtXoXr584GXfpJtNUw1YmnSoLEzDrHVJQZCuFGNswdbHiH2ngkXuEAxSgFFevCNyfbf6R",
  "key2": "2LeVsM6yLgsxYVtDHatEdZm1dQ5gpjYwNeWauZAHNwWVAGbU5eXZeduPvwiAeFA5TZPDViWiwZ41ieLBugBjL16G",
  "key3": "4vxKdG8QgGadXs218N37nZ1VD1g9a9AKAXjLDUAQuRDbPFyor4MNMgx5jq26hCirrqd1JdUwxan48adSrGMEjh6L",
  "key4": "5sKEP675sz6WymZSPNpQhdkn3Q59UfcNXSswphodg6ZbgZrM5Nw9TTMHSxqjtN2BdewtLC3YSLzTUxbW9VZPeShJ",
  "key5": "58c2WXZBEysSAfy7LuNyWQN2axHihYPvXQYAGNAJfrM54SLn6rZFCyYVfbBNWCiTcfZNjrPteHgraXJv2XAHGaoz",
  "key6": "4H8DnbwQmoVJnETGekLkV6wJ2np6xsM5YB13nz4cvgN8tYxKhP3rh9rwT35QERFH3mDLNqxfEkuDhcNvqURsnfpj",
  "key7": "4aedPwZftdDLyKjwxfhcJuBYSbn58bWsYG9ht7j4R6tsUP7ZBxaNGLH8wY1NqFm9G3TPmipnv8GjHGCLwuLTmhT5",
  "key8": "3Ns8HX5gV8csDjcPt6E2X9Cr8kRVByTJyRcQuLzU1BMyc8NEqYdRkuLcZbY3FwXLU8SupyVFPPFPHbsf9tx1LV35",
  "key9": "4r3jmjtg1AioVAABfKuC3sqmuGSuN5wZ5KpmdwUSSsNALtyDAGx3SXFC6c9b93m6TLcXKuBc1SXcSgYY17Z7Ytjm",
  "key10": "49yNLyWTVqtB3H7BnWU1Ye2bioxzcJUJeiaH9TdRyeTBDbGKyErws4dvqZn8mQKq6ou3QJp4jRs4XLNskWxpJLws",
  "key11": "5HocqfULvxVXhyswXJVKz7HjzDDLxmZBpAn1t7Tp6KEbqMLHW2PTt5sV2Nz9SCHnsBaTZCzjsVqaf359auPo5VvJ",
  "key12": "2KGKXSNWeCeL2F47ykTb2tD2RhTepZWdyjuT6vZBC4HKP9pQf64GwLWZrp55YEEC5dvMLY7fV6S9Thfkt3xXV4Aj",
  "key13": "4cz8ezA8Nur4EjjDMnZoMVJUXNBUEVmwyvxDGkfMw12NqSxLn26QTnoM8SsV5iCwKyywgXqSPCXcC6oQunSUMrFU",
  "key14": "FsJ5B5UbFeM2dEXRAxwKQKT5FrgbJbWwuG5qnA3iQ51Njmdae2f3ZYn5jStVELuBz3uP8R7NTc4i8XLcDhXfChy",
  "key15": "3C2QXftWKSE7ePmMvuHMNifnLgV8M1WGj2KJVrKMngxVmmdU55pNvtE1aDU1aTbMCipeDmThrkruNjeXkRvyUbWr",
  "key16": "5c5XwJvHfN85hN1wpHh96MepjvMoLTTRxXDjZLuNN4rZ6Bd2fpZQdHvGDuuj8oGFmND9F99BUW7YrKWS1bYyZ6Rq",
  "key17": "87KkHaErJd7XNBnucESESnWdA6GjbbuyMPrgw22VkQg1W4kidgpMJKrKVoEQ3NyPaPHsSBTxKdcWQzT3HKM4bYD",
  "key18": "2kdpTbhFpqt13u2EPE4sURLfYD64MPLawb7t8bShbv2V4nUBqwLE7LWaqAZ3UBbh8uszBxmMjoHQYHbbFd9dxJju",
  "key19": "3Mkw1egns2DKEyQjsJF4Zavcv6VFibtTVhAzpZd4y7wPcXGGAjBB5DTdaoAKEcBan6qtkNk2yq7E4ALCNyhwsyW2",
  "key20": "FowdmXj7dAGBmxAFb6qzzDvRS2HDT85qWyDhZqbWTc4Gtm5bCV8W9sUNh48ytmi6Qw2MJwsL7jbPxwvfKwtf6QL",
  "key21": "2JuARpenM7YnBBLwBpCJtepeEmFdiGqBavbsg85V6UhNWpvrdz6LqyxvRHkpF93LJYf3vTg4h5v2mqnFqRrTQras",
  "key22": "5hbm2hSPbzKmaLyrejD2XNieaZihXpNpE9bF9eHgP9AVj5ChU2RJsKYHm8CUyK8pdRprGemhr2FebsxWioQj5tEU",
  "key23": "3on1wZp8e2yTsftXRih563XnfGScWmJPBT6fL3CoecHibsxAkXKa5LxVQWpLCY5EQGHCdJddBZTHbMoFhTehSt8Z",
  "key24": "4VCUMVpZXiqosPryFEwaCjqARVvWBiTX6fhKqaxyMb3YyBjbdDgWnLxmqNtkhPh8mTR3sHfsp4dwdUmt6L3K7iwp",
  "key25": "5WCHABVtb1tRXgF6MAJnbgUeKiyQvpm6gJs3YCkpV5tyf1FcSQkoKQ9g1oBddF5BkWhzYm6J3rDPSb17KnWCg51a",
  "key26": "2pZyXyhyojGsmNWhyKKy1FfyHsSkDnd6zBHWBXLPZ6tYHf5Lhiabhb9pGKkpk9CwHR7bGKisCuGHu6XPS9RWuEjC",
  "key27": "5PgrC5jcuMYmhwqea3KDwsDFqj2FzwfkrcDYcQwsKLkFsX8QPC8jwBMBvz3MAMWyCE4j7wXQFyCNqco23LMNeyCk",
  "key28": "3W1gYykfoX1JdbXqpSNBaeWxXoSVcT8Y4wxVobC55ePoUhTcTveyX9GixZ6PKZYqmRWnvUejKpW53WhEwGasfKBY",
  "key29": "3FfgCRMjCbLwM8CPk61Ynm18nQZw91Wszu11EQai474bg8fYcwC3mspwX2z81jHQx5xtNZxAJdsucgGWjBya7Ldw",
  "key30": "5R4fnRtSpNFgeVvDbqCnPf6v98Pk8vnKadGJAQqejWAeb4csvFhdBPGYDGjfZEhwsnps2SznSLJpTYD11btGKK5c"
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
