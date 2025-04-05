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
    "2VP82ihYKDZ9YvzjG6THqshQ9YBFtEvzWcAgsNZpZT7mzNmdRxuYFuJRTcqop5SGvLrbqBGoWchAuk3gHjS6jf9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMSKgvFwMxz2bjbYVwr3MD1m7TpH7mJJW9H7ox7kWWcG3Jo5m6kgXCArpGCWxAHYn6kNkNRd5ntLESNiBr3urUa",
  "key1": "x1qipKN7JX3cA7X6tswFFFu7bq9XXoPWvWCCw2rhGWaCcJAvsvdvp1wh7fKe4FnDQBZ6kU4NoYqqP1TRK6r3k5R",
  "key2": "51cgVciLsvnsRa27YtBQKfVBKv6rDfPscf28ThX9W6mGjCzGi9n7NztHt9Pts71nPJWo7Zrf9bT33shk8a4oTWsM",
  "key3": "5eBQ7iTK8CkcQo32tvaNGXYcuUFX4jUPevM2rnrxRTbPiJycrNHptUzqF6eFwvHFYw8BCk5Qec7yzKjqykqJtJjy",
  "key4": "5F38KoUXNV2G2q1ob1rkkYnS4RYt6AiFKghRr1HdqwnQYnURf7Mgn2vd1TixD2t3gB99kS2Vm71CkFPkLvGNMxWp",
  "key5": "2kLa3RNRkQguCYjNbL72TL6oALSPnTrK5sdpKoQ8hniD1ngGqZ5A5eXHLCvm7LAkhSDXNbNYaxme1urRRbMuu83s",
  "key6": "aG8YpTKhdMJW7x7vaC9MnNXb2yZurkrAvCjrUZbruzSUhW7h9JdVPHxCgpjTgNNVSw3vS21vi7rc3iEHk8GRrEL",
  "key7": "4EtENoJcfY2yw6sySQHLqyez6iKrmVTh6RNc1T7LpTcHjt7en7yNJMohQPowU96oUocKpb8rGEPuj6myNDG4BmtG",
  "key8": "4o6B7Ad5r8QDRTip1pmZpdaS3AzxnTQ8X2z4KknDXLZbPcsikUxhMAy489Wvy53Nw7K88PXogPieCETNC1MpjtWr",
  "key9": "kvJAPc2RSH9LKx9giizdsF3UvtPDG1Rqtm4jRC4kD9ec7J38jTfiE84qALWSV2sjiSuWe2ALLRMaUiet1qtDFP2",
  "key10": "4zPj49mHbY1CZ3YcE1kBWWhsCxVGgCVc7dsVAYuDwrAq822sz8cWzp8hkAJ2yQnYCNvXVpLRNThsF22WKtyTqYBr",
  "key11": "3bk3Pjn5t83gH2eu9ahEQvTULUWwPucDLLx383WReLmRYaSaxyMYBTqVTDAy24M6S9WAaDrGffLwjvN4EvnyarGf",
  "key12": "5CGYGQXRSpY6qnMhXWXBG1ZWMVJtAPm1SFx8yvahUEp1tzE5Dvy4V8uZevk2Ubxsj3zjEbzNLq2EskaC7QqzcSTV",
  "key13": "5eugfmth9f5KYbtoqAioQabi59G39yhReu6vgMrHc2RNrw6qSpVDzfmjPQWoYf5ipyTZsontPER5hKnhmd2MAZXb",
  "key14": "5AJJpd6xXJDKLyqNG5qKpuvDwu3bmSoxNLEcHPPXsK2eiQoMnwpSB3FWQj8RjJvHS1VxaUBGQWGz5vnftFAA1HMC",
  "key15": "2J5AATfYrALNNqBfdNSKurD1mriF2As2PkoqAbYKJVTQoLC2pnmcxBb9ahS9uVnUFf5qzbPZs9WFE3SAXeTNLUvy",
  "key16": "5Uw1XB3eEmEVZXCQv86EB81XvahXxxNpfXQJskaC6y1uVBkASGtLz9zXsmuTtHPizFyFaSgm6ZVks3EYUoMsrbBh",
  "key17": "3J25mkzFUXAG1dWWy1jqKxqmBHfKX77WaHGWmcfNmDkBtENQGoZ5a2bPG9ffEbm72wTTNA5wA1JtZHKcnXnY6Sj",
  "key18": "4AGzG9VpveN7btbH74p8TbTzBs3pMvoqKiDjND4UYqSzQtSsoRsZUHCF2LRNcCb3jN87iWxbdHmk9RMU29yVrMRV",
  "key19": "3ERDv5TTJJrnv7xM1hiPq9nu1QTw1bDPSnjWCiwurduJvcP26pCUV2bmkERktinWT33aM1Tbb3nXZTQSASs7To49",
  "key20": "4MNSZqJbBDaiozjG72zbuSA9pShKZKas9B3VwK4XgQRcUQtgWxT5oUm8eiU2FbHZAjCPfL8y4oUMUpExYFbX9zpA",
  "key21": "3axnemjfRxwkisMPKJT2g3c7CBS51YkhVXiUFXH67YoY8ZK2c15Kuxiie7pJWWpyJZrfEDm4JQN9QPaYRWMF1zcN",
  "key22": "3C52MTsLtecofPwbtaRdh3rWWXJ9ysao5V6G89TweVtSB46qzSmXwvdPzpTBEQrDyrNRnAXu4xFS6BQsdaAnY9p3",
  "key23": "3UMELjcU9UwTWPaXWhpmdYAjpARz3wsMBFBun7qvRdv8tLzF6BXWfKrWQk44v844gF4YpbNwA6NwHKbCEMEKjcm3",
  "key24": "Bs5CAhFmTEpn7LLCj4oN2LHVnbNpnLuLkiJVGTALTwT9Sho7D4xHpa33ouYGMpMftG4kmaNkRu4yuPU3wFzVaUv"
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
