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
    "24KaJcYE2t9HM86pGwhhw33qRTMuehRtKqtx5s9GNcN5bzuDzZkTQ3MC6XjUDvyS9HJwqMw899h3p4HAsf2cpxA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3AKVfSXjVHAe7UTEXQbNisVR8ZDKqPAAY7JUhod46Bnv2hTpfiPba2UzhhGfQTbA9jQxRT33TuCSxfe66AyMyw",
  "key1": "FQPohCeG2wr2tAjcTMCFS15EktF31gLsWbNySQEnobgcGBwzPutbZ3kViVcVvHuJkcorFSBpfhS6sb4fihDfuzb",
  "key2": "2e6XB4gncKEicvR8PRornZ5HnanRYZP9z5fYYKiU1Dxnf1jaoJLrPgKSKxB3BSihzJmicG7TWQFSEWNyYmpLc14W",
  "key3": "4fScPqigX1nnwjS2aif4DVu1kHAqDHXWfkNx97hXHPZaFX1X7H7o6B84wyanvbx4Mz2C8UEQV9mbdyWYeKpHRoVv",
  "key4": "41v3XDhsQcBMwwvpwrHYyzR26Tzr7AZ1nE8CJqjNuZDDWd5BEkDcWvZhy6MaLU5CsuGDFm94V1epLjWpPcEf1Noi",
  "key5": "5FR6JziHMXksScjoqi3suHzXoD5TKNZkbUyd398ySuukETGQA2SLF4GRx87A5vt9L8BUTW6prDaXK5cDMDDkQ3NF",
  "key6": "4uqGM3aY5DUjjdxPGmE1a7PkUPdKgcTtc1Vfnrvj5z8ryRyfKXwQZbZi78mUcXAsDTossvsJ3xMNnnNaFAjNRgVQ",
  "key7": "45iNyBVeLMCZtTZKfGR8hgefgmGEDm7awaKW7syudFaCDC7C5fR5vKeXbCWKQ6QP7mggsxeDksv9sZ8xTobmyMYC",
  "key8": "mDngjyYAuhqLsAtiXEGe3hpjJBU9sDvWMu1NzNpWaaGkAHXEsRYsgBSBUYkMxCQP5KY6mH6o9jhN1993KaXUnPF",
  "key9": "4t8iLfjDQnEZwAP9zRBfwLTyx3CznQR5CgU5w6sHTY1F5pnHxwSNpxzUjBR7Jsfv1k748hGsksjyw57GWsFRtq7T",
  "key10": "2yALkqWXV4QWpQXRhkR4DpBrHvdntVuDxJ5ahxpE99oMAmTkQ9FDoF7x7g7HZcbsqe1xgL9x8UotPud9mdTXLkRU",
  "key11": "54eVCZCNBuj1ga7PWrUFPV8QmErSbPfiw4dyPaT6dPYV46P7AKQ8HqFTNhqaT2Kt3GJsM9DLkY3zKoM7AUmRwujn",
  "key12": "128pb8kx8bFpTArG7xVatLh2H4hi2hSGZpSSrFsGJPZDpZqX5ShwGg6vUr5Au7oDyJ58GZPtqZ9VXTS9xrrvdBQ",
  "key13": "2eC5NatcZHoxVe46Dq39WELxHMQGwyrDUYqtHph7qPq27ZLy6i8GzJdJUrvgT3WyzWetcfoqBFAeHyLG6KYfxRET",
  "key14": "2g9jydahYvTaGnxq9HEHvTCBfF5VJFKgh2HsbFJSyL7JqnXhTuF17rpKqxp3GRcdcPFVRBt6tANL6JbSW7p9hXcr",
  "key15": "4wHF7NQwKTdtepPN3raHErfEf2455ceBhZZM8wgXcKe2sdXn2N3rtmeJfrf6uVgQkv63P6A9eRWaatYZYMDBfZa3",
  "key16": "mXa15eknknrHrmiLh6detu8ryqCPtw7xFboGWQjyxKAezCtPaPzzYAQQNW5Rkw493jAu7uo1xNyg5kVFwb7yKy2",
  "key17": "3umkAXnxrY5wcZt1YyGHirPr8XPZAVRbigYTCKJ18cWWxCv9x5Lif9owm3D8RxGSuVbshqz6HBLUp4xFr9JpFzUp",
  "key18": "5q9jwvDo5DF7oH9VcAiv69NVqxeywJiLZC6Jq5durcS5zd18YAaoimtb9eGYWGqKBY1FuBeAw553doMr5o4gAeJk",
  "key19": "21MoZSTwopLbri4ggJKotMVDZFKXGmWLdtj4MCbMn4W9EVuECXo3Lpq65pRtxmD9hjLYR1FjAEnnffwuH5MSMYwn",
  "key20": "5dtdeijrzUD1Si4uTL5TRPB8X2UjnkWcnXHJSGPyJkKQdJrAQEheFxC131DzfRPoZWCMxQBSqjbEsjpGJETr1fV3",
  "key21": "2BcBfqm9VAWA5pxY71JiWyMq2rEwew54uQZtkLHrQWwz4Qknr6dhkNezuSx7KoXbSS7VWePP8s9HHMdN9TXkx5pz",
  "key22": "eNQuxgKNGv7xENoVehaMCSFciySYWNepinr3W5UWSB8tyw1vnze6VaSEbZQbeCYKnG48nZn5FLY4rycTB3PVJ1F",
  "key23": "nSQhygSB7NCUFzyEh8kSBXULUopWepeDupubDg6H1V8GUXveL1qtJAkuZzSifPST74w8bjqepNPNwmXkrKZ8fjr",
  "key24": "4Sf8Ljgrak6Fzgdey4Ph772YvUc23n6fo8UyduUwgtfVrbeR7tsStc4vYAA6SmA8gBaVufiXcEEeZ5gDPisJ6p9v",
  "key25": "3FNTaxJTcLY7WgDmgbvCXc6hwLoSsBYrwB25F4VVR5BGpBhgdsBKcA7u4AedfBdaiN3azY8e3MUsejbx4rH4GQq9"
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
