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
    "5YPe8A33QnbXuUfQStSeGASy11W8apT1WJ8XPp3pgCVp85whq2UU8rz68iC1hWoA7hie9BKetSryz55A8bANU8PN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGz9vn9F9N5fiQga69hwoeRxdvi1WAvMuWcARZDC5w5LXx7DS1wzcwpFNN8gUtz9VsdaFvjkjPERW2aimGyRQ4k",
  "key1": "53mfceoetAYpfKqhkWKC8eTtA5s5MUo7zv7dFLgRV8fjsm3oS9YQGrCUYK8nwcdRhdF1YoRx92rhBSUsEdC1CrhC",
  "key2": "4hA9kf8AbDosGqyLFPCufqn8wVVVY1L5DG2Het7WoST4GN9B6rTREfHayXwEazYEGsNPNdotdXsV54yiMDq84596",
  "key3": "3CmH4vVjrU2QonVKGc9pHyLBgCpjkuQK8DYSXx8zaacJJjnqggjfC5feRtt3nxxEut5Fisd5kTC9LdnoKB8sTVqr",
  "key4": "2T5ZjXP9HsNdXXhdYEaLuLgsVV18etQZHDwQDBhLZQvg1BWhG3btC3WmKK9Ua3LJMyQRDHpgiRB7HTEq4L8C8Sgo",
  "key5": "3Cs1J5T3n2F6M575JEW3fQPwtAGkF7Kcyj4qoBtwEZrkncNB4CVG8a5KkiKu2Y6inz66DRBLBxGMRQhnT1qw74kb",
  "key6": "taPC79vufE3oaWc9sjEcgjAjQtn9fELXiKhAxmNwrcEw5YXdDKPffUo76nt78HWSBKh8ba5zhBw5RUY5Dmv3FSs",
  "key7": "3aq2LZaEsj9QFjvG8tDDb41JSjyJ9HbPFo6xzTa6dMYcRLCDda51F47VtRsR1EwG84vWmu2HcBJAUDmW9efr7m3y",
  "key8": "4dqurpP4jpZZccnXjYZt7rh5d5Rex917gdVikxFTdE4Fj4wxNW4xchDaEuWUQV3Zn6v6M9YZPaH8S7Pb7BWmyWE",
  "key9": "262eSAh2Zhw9yJiw9zevyAMxzUSq4mdiSzef9PP1TdjZDr2ijyFjvMSNSZaZoh885S9dvmy3eYBfKzsdUdKnr5Tj",
  "key10": "4GCAx5jLyPbTpJy6BhZrRweiHZ4eJwP1DM65MifqMcx1Qss6kWGU4obud5fzJnhrW1TF8EaYNt56TrCy6UxhaTPH",
  "key11": "3eHWXpxwxgMh7FmJHcJ7divsTUgjFhsP6SJHfjRz7KLuEGqHynCY23PPxGR7S29FBQ4rLYTsJ5yqBvrSnpio6893",
  "key12": "FD9wTRwGd6t8BLBu5KNVTJM1Ue2DDkCVGW4NJMUN35GRX3AuURUjnSYsnmtk8T78fo8st87E8A7E614vhMf5QhF",
  "key13": "3vgAFttbiagprQzYZ6awi3rdKHJTXvF2dWYwh3hDC3anCzK6c88NjwKB2eUwz2efeo4XErc7o377Zba7dbmq3ec5",
  "key14": "39TtDyomhpUqng2pJLXBKuiESQttQv6ocE1VAmxa1m1XQHJ3QnghMQg9WbBUvgUfP2WNVVrpDuzyXQ3r2xBujLbZ",
  "key15": "59UGAd8iH9Zde7YnUgsyxaaYfW1SFKhauH4GSUbGwtFX9HWCTUq9ojS9RhJfLtXWo4L8pVse9auJMgzxfyx4Z8Hw",
  "key16": "5G892L47yVY9AXXFagdwa8kFGZcBSvU2pP4Aa8nLykKcG9YYyrkaX2LarAwPU9hovBLT9rifYtce3qBLB5W3PtBM",
  "key17": "5bWjPp3Rv4fagERRQNsFDmmjPR6mSRMGNadQuqJ7a4S4bSQbQZGVVUWJv6zNmbhsYXtn3NGV9JdJw4SwvszzAQBV",
  "key18": "3eZDNzPAtsFGgCDwvy3McMTgUsHoB58Wste4bCgJ6eqA5DFzZX4CURYmmsyPZPSRcDtacWAm9PgGoU7Yzo1AZH6R",
  "key19": "5Gt55EwQeBaRXsEu6A1YxbHwro3fscHQRG8VFkNJNV1mvniVk58WGNwhRd6QuwY9hU4SLQAiR9Xx4SQ1vLJ1mkJi",
  "key20": "cJkXmqHobMt5GG6yLcWp8oQVBcp5FXatPh6ML82z4sLc1bkBaEgb7c518ThcdYZZcjXvBGcbD64n3fb4PdsP7ek",
  "key21": "2ZWJ9x9ZxKptB4C5GDN2dkSKttC8wabFzpAQYPtXbHFbdBiiDkH6fQtXRj14pUXkqt8aR6vsJmotGZiF67eXc7Hs",
  "key22": "24KuNQ4FNc1FdoQiCLZqtKAjevSqfVNrpifjaDXcQ5qi8knjAg6X1Ndahrm87P2hWEsNu3Xqs3LHJG5hfQef7ARf",
  "key23": "5eFTzuMxit5d7ud8ancSy7wMaJemCFFdG9kxyagRLt58eeFTK5J95cy7xpFTw136KRyaVmZWYkHdV8734KZHwbdU",
  "key24": "SKKHKjTQeiKPdMvZvKDf1LwrhcYQxjFUoAQAeCeeCAGB8y3gb5PFjmEnonLeQMcuHgVbtjExU6DePBg94WcfP6Y",
  "key25": "28Qxr5i8xVHkxTBJ9GZiFjmMGrexu4BZeZFuGTP5WrNAsN99BU7nRCmPh4xZzqzuCPobb4HHxN8epnDJh4E9BoAt",
  "key26": "63c15BNSeUbYsN4QMApv2DTF3cHdQoLQonExyDyQN12kU3EiZnszhriCERGJHTNw9u5vkd932ccDAAYfRxnzmUYN",
  "key27": "2kLYiUoyJrChq5Y5QeGzuxK3e2LJUhGgPDf2ZQ23eFGDJZHvuiLnzgXYub83TZgwMpVpwps6D5vtKwg1pydh3Dok"
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
