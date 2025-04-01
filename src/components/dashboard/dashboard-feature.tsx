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
    "XkGjsME2eMTJhLRHqJrdBWYgtR3My1aE7cmKq5fpHG9fEWfzSi6JZfXEWT5fNn2kP8w34oVjp8EMGvP34PCReA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhYgzYwvritNkZA8KPBxR6k5k2Q13WHNiBT6wY28foKaGGqvga4hFMaxfag7YWktxk2UKG825t3qzzRZAEZaPgz",
  "key1": "3hMqS8EAy7TgNvzRQcLpFYjocXkFoVqb4XWzCCJbcgSmmDzcsNHRmjvu5gscqWmpdR6nkNf1ZZLcgNcAXvss2mXL",
  "key2": "27Wxf4H2v7zkStBmt36fRRU4ZEtdFkEbbGoCbTJUKvbbswWYyJj4Rr6Nv1R7fcsPR4UQ7tPtFn2FV5DyEYt511WH",
  "key3": "5b6PEsyAUAaH37oo8geG26xQpqtHuSrLZ7xTu9AFMxEy48WRE12tyqWT1efhrvWQfWZt83zaHgtfAAhyAWRtWTj",
  "key4": "7TC588n1bSwaoJUSqUwJvaCFfcZYM175dMXcSWXqNX7xdmoyhgFZqDFD2BSuDuge5Vn3jSV4xVdQP8MD6aY2zvk",
  "key5": "5m7KYBq1sDa2SpErxS1eoTmtvtQp1Gnisjnk6rp5s9nYYeXSV24t6JYRWsQU7yNtPq12EwrWzQNhSeFvuebMEjta",
  "key6": "2ovFoe7qQFompALZY5yNj8UCCesJzVFzf6JpeyXKKHAyQtTurTG5zkZdE8iv77qjEiZzZrsGLnNmF6p5byqEXgtz",
  "key7": "2Q4XCReGBDUb5yt2cXGHQ9bXaa4SwvYfeSeJwjeHSTYN4PR26JHa1SFKjQHAsJDrFwKtZcaWBDPifknRnLQxbRbf",
  "key8": "4aT7UJXu6q6FgiCkiWiRi9PjSZPwNo8v6yjKhch8snJK5o2KSubKuvNT8xDFt4oHw7QWE1BQ7jJFuQL9XQKJ3R2x",
  "key9": "65wdvgQWHPg6PgGxrcuYUqiVznbrzDm3TLXYgsWR8cdVtGorZaq7Mg51f9beNsQqUnDt6mqyFidzgMprcd9Wucpi",
  "key10": "4FHzbzm1QnzZztZDsY5ELbjy4x6D8ywKhVEbTf3BK6wmzmacP3fg6R7groForCgWoEqgxQcxuZbReYNrTn6SNjQp",
  "key11": "4DzryfoLYUKhdFzvmsrP5URMCAJt2AGWzuLbkJTu3ueg9DkCbk2jZbJWk8gQkTckE4DmtU1xB2b9dQYsvfvaEdDh",
  "key12": "2xMWboAxGEWwBKj6Ns1jCrKaY7UMbj4DFE4oEimW1J1pJt3oYmQ1wxFhippkvNQBduyL1kmR6hkgvYvixvrdC7kX",
  "key13": "4Rh7AVkqwnvTauPi7hUv4yBmUGzm8fRMNwgPZkN1dWbzhWXx5VPa8YjnqEN1wGcJwyfZFX128AWLfRzsTSDyhZV3",
  "key14": "5odDSD5is4vz1Gm6YMgU7JBWJKqWpqcfSJK5spAVFtCQ6ApCYwN7L8pWQnRhPSikkMZqouEkkm5wB4uHh7QyUREE",
  "key15": "5g6VYQUDFtP2NvE9d2ZkejhNbQtoJbipQsQvLqUbEkuroQGepqBtWTjtPRdxCafBSfXZuWNPr8Eh5p2RXewPQSRp",
  "key16": "2bLEQLRrZDVF2weaJLHEmyJKYb2v9C2kuU2HWBFR9UrGDtw6LwNakGh8veP9fkne4ZDUcS9KZCCNAs2ttM8zusB8",
  "key17": "2M7HYaczLM2TL6eXEpqEJ7EfdLgFg6d86Zjb9Wm2gkZRLJ3LZmAKnTmdoBYN87xoE9dwy1Hd3rrx9Z5uyAft7tFk",
  "key18": "3EUxceZfZTZBKQtWxerJNvewpzCGFpuHepwsdtkuUN8KfBxn6fSSBcEBbFzM2H7HQRbLHmdfCoufGwi5kav25Z82",
  "key19": "2KMEkhUcK47s6RoxUdFdKfpVgGrc4FpyzdGjui9HjznwyZHpmpLxng5CYHsqRhj1ETGjTyFHt26N6XJnvmr8YeRz",
  "key20": "M2L9UddEZjNnfVMiYkj441hjgnfufomgYfvTu9YfGbUNMWQAr5yYJ7ePk4d1k92nKUqhcRhgDnhgZvaHaF5ssk4",
  "key21": "3j5miMk2wskJ4JaLWKzAE2pm1vTRYtL1FgnW5ADZuyWKfGxpXTxjKugB5tjy8zjyfVsp6RBTwoMV1bz1oD2JCPYR",
  "key22": "3xjaiqKxPtbTrKfSY8Gd8YUMDeBfcxJBak3G3MXjNUDcFuN8oDNU8XRhELzNWh1SHva4K3G1VEz7kGxNWc885CTn",
  "key23": "3ZdP656i7oV1Q9cxKwueMypynramdfqHUHCnznvkh4aYqDEEhTVwtAuTDbciFVDNPHZtEppm4KPSCNhiJysNw5u6",
  "key24": "45havhwC2uEJSXQpXtwfPvRujkW9ycncXJWHwZEv2L7ioqTTdMT1RpVKqzh3Vp6q9RQDLW6nkGyAPSwkYfAG2cYL",
  "key25": "DyMGfdeNztGHABHoiP35TKN9oVr5ieUNpYNWZn6PNkSXabjWkx2HTbxHF6pCmF2EwohWkhTarVJLzJTdUBCny2L",
  "key26": "3bjnkBKnGcLJrS6DktYyVEYm3Akoyb2sbdH5cFQAiFXjdSBfbHACFA9CxbtomF6gcmhqtZkn931R3iS1rPgHPcMr",
  "key27": "28bv1XCknap3LifsL6p3YxGJMTtnHVH5qZ8aUWb9JHrpmYyMND8gdPDtv6hx5NUZNAzuXS1c1jQSVf4EFEQy7F4T"
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
