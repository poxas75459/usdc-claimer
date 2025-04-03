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
    "48nnwwyfDS7FmrKhRosTR1r2QBNprp36gBDz6EyscRsRGoniDGkMBs8fQRb4AwMBsbvUm9SaLANu8Wx7mNsnP8zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkyHvnnHhoKKiposJtGt3B3ib95UAh8tjeDfqgggprKDQ4as3YJsu3hqRqbmpVttvezgTRnXHuUCM5WfcmzRRXX",
  "key1": "5pPcmUzsWa3U4FAhK3Tp9yozgTQBGQXu6dHWhUofafCP9nwMZR2erMznLPCEMxs5MGYJsWA6UsV7rcyrPS1YV7EC",
  "key2": "3LHRzH9kxfD6TzZXCqhCKtqLJ46hopsChrt43hekapLWiUGKxvzaR9tq14gpCNKtJhC6Cbh2n7hr6J5mkmE3fvo1",
  "key3": "2Nwspp49QumJQ31JJ9PfW4fL6xb5YK1t1o1SM2AzmPTRwZ5j6PDmfERPxEz5ZaRroJWMvHqNxDtBQxUtuYKhR7Tk",
  "key4": "3tvrFwXDGnSYaZk49eR4CjgJgev65q4t9HQ1WHitbbzXUa5RXtkjJ98JK6ZjbBrfwzBFxY4CJthHfhgVHegRY72v",
  "key5": "3VCEgY6WdQTAzPFBbC595mG5mQy8hGiyihwqUfw4hgW8cDLuWdo4YqfeiBGKgQVed3mGvTKqFa2fWnQ9BjNRdY8F",
  "key6": "2QqkxAPchbPLSELNBcmPCpCMvY9KPx1uZCP9NnkK3zJPmCBJ9dFJ3cadtqQuHbVYKd86tXhneKoYut4iuhRmAxKi",
  "key7": "5Ya2QDyQxCsU9JtNZKSXemWRwh33YWaNg8UffkQtH8JCB3Us7myRRGyRuW7adJ6ZZ81WaME9e7joMzCW83V5bnDc",
  "key8": "5wSpTWhG8oNafRSbXUxHheWG5Vhz9PfQ7xWnFV5uaX3n1cvZ85TyF1zHdjfK7TywnpbNu27oKb6AiCNqUVCoJ2y3",
  "key9": "4u1CP5nWDNXNvGJYCQmqHVijuEvcnuXc22XFa3FG7nGnwvtRMhphCnCndLnSkXQJ9qS9QTwPfyDbGYun6KJAZS7e",
  "key10": "51Um8cjQD7Yu5aa8JxHRscxv4fQE38A8AokXGpjn5gGkR5jBq815XhU51uXyJ7miCi39JGaWvEdpn87kAzdA9v19",
  "key11": "2Jxq4gYHDpik26MnyUbGPXrNhrcsMQ8nynNqyekK7DSMTcKjoTxWbeenvFLWYggjMcBq9Us5RjxmyH5nS8pQ3QJh",
  "key12": "keUxSo4wf4qerYxRkAj9pNSoDdvMKj2jZinScpKs1jdY8wiSAmq52KwRdFubuojpUVkk261cUhgrbr3TpCu2xNk",
  "key13": "3ntADbq5RwsJcEB669wfjxe53v2jDuES5oQ46c6oQXt6TBnmxU1L5Wo8Htj7Q75FCS5uy5hUuhWQUWodZbu36fXH",
  "key14": "4G6z77KviFZZUTDHCqpwVsFjhmVVvktaZHu945CpchjdeWPPzmihckucyuGC1p8ZMMJgGd1dTqP4km335RZykFj",
  "key15": "512P8CQB3CsUwyzLRzpvj7oVYUjaAvcztbL36V4uRFuf9vsQtBmatSZJo72EJtxGpkCMgsguf6DKQnUcaEc1fpCh",
  "key16": "4FoY5hpVHPxCQJoTdA5CdRX8vfSzvkFH674V3z6sJ46CdUkQ4SbpDpUzASox6T3BiPZYvqGDBUJjcePVFxtiFjSh",
  "key17": "5Wtd6BMjRVksrEussmKSb6wy6eqcK2shWieZn143jJGhUde58HrZG7p4vdo82rgyjy8WGkYHcU88j8kUYsr8LRNd",
  "key18": "1gYFbJrTYNj5d7yZKmAJATQcBxsqHPpHYyy18W6uNs2c96QCgCSUH8zpJVuabocAoJJFGFUQuxtMhKhqQggT8R8",
  "key19": "3aFrKmGLCAJtAvXZALsNa5UhVYUdwZa2ktgSwoRtnYcQCw1eX1GtZ6ry62Nd1dv48bStwkZDYqHEqk22z28mo8J9",
  "key20": "bDWhebTGrDVfYzzSZfrcvRW2AysDDCngWsSAuMefz5tgbjxoqtV5bN2RQ9aGsTnGvFf4wQNpbTEjqW3x3rg43ze",
  "key21": "4TUNWCGvfk12ukU1XGV1uj7w4tTY3FRrDfyexriG3oTu9VqAaadn2TKXyosFz2pg2CY1FdTwfC57GQHzKTombUkd",
  "key22": "poSwvXPqBfKmEaDket1pBgAbjFZQtM3BKJy2WsVPg7cD3it1pGS8FmPJENF1NHYzsxivPauPKXVagbMjrrVsW59",
  "key23": "2U3mpqeZwDppxwgaSuqjeeyfBS6NqAekjaDqxZJ3MEeq5onGsQek4y1JzmXu4PpwbaoyMsJVeqHjm61ShiQPDLvX",
  "key24": "4kmJcBdnU2dh9eMSbzCeQABsvd59EpeVwhM7eDPtbi8N94tgMJqoqUmkfZmv6duQGoYgGFun7FT883RRs7Y92g9i"
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
