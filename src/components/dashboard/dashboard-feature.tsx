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
    "zKnkkXSAZLvpwqFqyevr4C5v3rtmBpJXcUMiFy97Ma5WTSN5evjiyeyy7VZcQZAjRHmgKwPvhD3Sqgcbwpr4RUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5w3yNJY2AYpLfLQTNeQfKSJ2p4HFCqVeUfqarckz6WDSmT4kbQUrbekVx9BUJeHox43ohspAsT3VwPPLcnG3dX",
  "key1": "2jZZ4eAeniMt4teAM9w1pZmLHErVHvKjfzyQeN74Fv7ehCdDmvaggmgWiz247CH3f5hB8VHn7P2NmoaHMQZRvxq",
  "key2": "35g4pHquF4YwcTneRVoUGcLb9sePBFG78o4wNKPXKSKa62W4ExPqrSeSrq4FnKtMod2LAnjvjrNLv9Xc2UbAttms",
  "key3": "aVbtGCx92JHLahbEhmdsLVXcj5ytcQQAsa3UyShaeLAM7nBNVAMLW2gRQpWA1jdDbV9QmFmmgVjf1gbq53SjzQp",
  "key4": "3aCFKxWuZ9VgzdaNtLVFHgkZfeoRYzhtD12WemCUfKTJgnhPnrKLtFCXu21xRUG7DW2sFZ7wPdMxzQu2FgTU3JuT",
  "key5": "4d6yK9GhV567ErxNuPES4yPHKYta16QwKGb77yuyoxmh8efDLNhCodPS2B5auCrund1V1eEcyjaUTa7VTMzaR41e",
  "key6": "5ZLjmWLGqtnarKnk9S2XeCEBtr5rNjapSoZVKi3U49mvzFzXrGv49s2zYKNiwvExxevrQraxcdWMuG6nq6rAjcfW",
  "key7": "W5xn3UwVcADJAtcrN53JLyzbtCRMiDEsvhmCuw4Axh1cQWk8H3mHdq1JVjKs8QAAk752zXN39Vf2ZvztSJftht3",
  "key8": "2x6QkqyGoDBdWQrv5DsHXbscGNZsmo7xh4yfyKTiSJa138tyZVts3ZhAYBZ26VssmEHTAgmVAt74Wbnr28xS6bFS",
  "key9": "W2sPC8bAz73AEh1LryfaSp4UhRTguu2isDk6nkEECfqeTmykUDydpBnUgZ5uWETeWLozqdZH8dgWhkDs4WzxwDB",
  "key10": "3GCwV5n34Gnz65Xpkc2KUqGPjxVSF7N5ymnVQD12g6Lb8iB37y4saCcasLtrWB2ovoTyh79dG95Hhsebm5H56AxR",
  "key11": "5RWM7KaE5Dw6wp8WCjgJK9rbPQiHvz1iRuXKjCj5zNNWEUSochD1M9JX1DLigA3XnW8CD1LStUdMjpzKi9aDbXqa",
  "key12": "YjqiHXCzETsv1orSRULwxrfV8ost8ntLPJTnNyAFVrGNw824g9ty3fZ5on8VTg89wQbnt49Wk2DiChGsopsK7jE",
  "key13": "2FYiSz3JbWzBBSTouN35GNMVVFAmSA7Y1Wtpc6aa86XseJVQqeWR2Brdj7DDqUqsJZsn1nZfAjSMLK3j5XPhqgqm",
  "key14": "5DAMsvypfup4ub46HfiQEWse8gYW1B5WZP4uHNqduNjwEtmtNWR5xFKTw8qev19jasnMmiSQFbMnAMDyVBog1bDR",
  "key15": "3docViWhWiSdKbpyv8haCoA1hkrVKzxnMZY3NkkHE9EnQzXtKFR19hEre7GXRpnidgJ2Nhc9dNgw3mv2khUonTQW",
  "key16": "4q5eX6ecAzEpFJYSjUpGE9QSXt8cJ5wyN4HtbfG5xqUDRFKwFV9zerQ6bmWYVDV4ghrypCWmHvY7XndFvXGkBpiV",
  "key17": "p3nPkidLSR7eXd8dY7PbNui5CkUV1Db1mkdfAHB9oHvD73W1XXYp8cwww8ukF8ABT9YJsscvwEWHJZ1BTJVML2W",
  "key18": "5PNL6rWodxiiXspShCnP5vfkvdCvntpkxyBQEBL99YAGCNQyZuLNRBFNPhDtDPvFWC8jbDhApGPDWXqcKTvsEwYo",
  "key19": "3UgJ3biRhGqb68kPmCxFd2xTT22ZzziJkM6sp2xr6YUiEAtd7EVjM2ciqyCY6JXX6aUoFVnop6dUXY1uMqWvnX1K",
  "key20": "2di33FsaevZV78PCYTaJfDu78Gt6HPG9uPASTvXWwzSsxAgBG9tRyhyf8HjspMdP5gxdYsVN7JWNE5amhoU2y3h8",
  "key21": "2PR6oAaxE26QY5ptpjYEkXk6KKbcjdKxC8GbtBAVhahR3dFh3WKe9JwCjrs35ej4j7HvsicKsM8YyjGRBU5uNtVq",
  "key22": "4YwsS8dAdpxTs5ytCcyEJDpfkcX3f5y5wwtupB9gBCSneewwzQGREX3q7jEs4xMVTuFCdQUbMcuKoT8JMFanodZL",
  "key23": "5roG5Mw3vTRZWvXZTA3EJodBZw6EFhT9rrwAvVNZu6p2c8U91mQPht5puB5bGPby7eDw9Z1tiPCVkKDvLKfBwK1W",
  "key24": "4KMo4ZK1Q9fPsChhWKLymBYukmhLh121LETvWZdZsAryFT7vG9JTkeoPUdTu7DAmP6TNhGThYPDxEWRh9J3KjeTD",
  "key25": "4QbcwnXxyNA56MQhESBC35xW8ZGhC4jyuxZyUtSyTLc2HedQWaXo8YSgd4GdKAkKj4RGgao6sdBYLdvA4oMHb3Pm"
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
