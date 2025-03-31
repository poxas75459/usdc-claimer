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
    "23AMxiTrQdgHx3grrDQZG4WHtUTGhJ32UoLM92Gk4Uv4k9jZQjgHUY5GGfQeRJ1dsYniDj8xYeCxi5RPRWPvh3x6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Li3aCojvK9MGkAgEaHA21bzhANJ5xC1uqzBGTAxxHRjdAttkxUxosg3cQGzBYSFjtEdY5Zwxbm29A1udGNPvdt8",
  "key1": "3Y5Gv5u3cN7fqr4XWD82ZsL5E2NgZS5FwBJtQ27CTYwX19fMub62pVfaAGw4smDuY3AWZknrkSzDH1thw4AmF8bp",
  "key2": "3sdG6nfHVeoXYioXQPEErhHvMzQAkeedhVqjbbYxbkyWGG74SLraLgDcaVczryYVFJrCMVcAYDUw8i59KZWA3U13",
  "key3": "ycumrzQqBSbhepPtB3n21CL1UfcuzXcj5nHGSJF7MphkcVPn2pQsgy5WJg8qPnBuMSR82FFEdXSnUZkUvctrGCn",
  "key4": "3WoJJ6BmaYeYRr3uCacyowTaMbaksxC7JCryiFaRgYXkBNmq8SG6Cv11xvW72TrvmVqgrqLxXNHM1jR9m9KxhmUc",
  "key5": "MhkhpRDjWBEWeur7J6stUGp8dByWbuvu3CX4TxPU9nMhnPnxXGjh7zC2UVfNrjoTiqR9qezDvZpYc5kfVoHBLNs",
  "key6": "3DzkU8rFhYLKA3K95Zy98ydev7cnE87CpNJgAx6W9M5Nm75VVr9xGLT35ed9HDzuK1aRvwbL27JhaEhpHhbCmRCH",
  "key7": "4DwpzoGqKN3tLkcmM5EihMxDasvq9Fh2QtDaMzB5fkTXENXnLFVGCDbbhvEV2AXu8mUnPk2TpzavL1Qu5oHbt99y",
  "key8": "5Qptg2kmWJAZbXZgPLX3pVuSKy1AdQH1LnBWV28UtEU854XCdQLHngztcuxqH2RdCvk3vZMSmhiW9DzWzcgcbwXJ",
  "key9": "aC59F9FD5smt2gM3nFD8BQ8fJ8opUHefrdCHYGaqbp1gKV5WQMPyR9gopuaQZcAgAHaBPoyDXx16QNua3oyHEsr",
  "key10": "4nPi1VqVZhJivUSfMySYqG6RSCuS7vZowietbPAF7qZQ9XVuPVa2vMcaeAt7udowXiJYW9A6BPBwxLhs8MDsspDU",
  "key11": "49hXYEUHZRoD6o852FecrhCdWRv57z9kiD3cduENbVu2nsqMwZ2uR6wPd2X67JNQUbtf8xnLWeTHYctPc3MDUiZA",
  "key12": "5X86CnjkZmeawE6t1kd4xiGR9srg7DTdHgA34Cqzz8nmL1rwwrnJT5Bh2tT2CSvW7jvxGri6JhLeE7ZZJ5BXdoqW",
  "key13": "2Xk3YvMo867qeW37uZWcnWthZaCWFdYKSugcRxEiKybe3K29mQWb4DzZPGkz7iCZ5MY3bQAEzQxAPdkytewA7KQ1",
  "key14": "rBedL31rV3FYS9QE1zqoWk8paaxSzENJqJrhfAJSaSp1KkRAXWioWgLKSbokrHgHSS9y9QGb4kWpWBa1WcuUPQ6",
  "key15": "59kEpqi9mRVNWDZKSTpjGMK2woY5KUmWYAFxeh4GYWrLizvutGPZFffD3GrLYCY8sRTESLezMZw9JSj93gVvmGos",
  "key16": "35NaW1HTPqXrj8ETc9sejqhf4nL12qrPt9LGYPSYDujWoHUunSqvQYRLT8h1DSeRDZEXeaGJkpj9tz7J5wvbhDLP",
  "key17": "2y5WhPx4DnNh8WavrjeuN97rqbo5FWAQtUA4J2VkzFDMGgyMa5q3iiZVWrfftLbCTtRd69AnmVb3pLUhPGtCjsxQ",
  "key18": "38PdGrQQTLFtwpddfCjpcnTK3WssVD6yCt1MUAfGQuMsHVtKfD6SZ2U5tEm7XWzPXJ3b2VQME2LbyHXc5ZkZkkdA",
  "key19": "LvjgZ6qaJnGSNeuuHwtwS74cdM5AMjvfbRfVaN63hRX6AvnbHyARrFBKGWawh9SG1BwjgxbXo7VjDhPE4CbTq8C",
  "key20": "vAgiPZjecbq77DyMJkrRNHJ2BmuXhteeBkmSg3FjpgwCGT15uR23D1FCQZoWT2KFejvadPSEdE83QYw81yGo7ap",
  "key21": "3brWi3AbxMaVMwKgemXuYC1K9kWr4tZwVegQogqiJDASoSRPL91qZgSyhg5TGpXU23xEbXtWRfrDfgYbYC8z3szj",
  "key22": "3YKpStNLfynypBt5ZHA1AVPFpRt96QRgVfjYymiF6si6uyaHmQTx2PghZ4AiKCLmauesNSat6UsC4t3WoWrMLm81",
  "key23": "4EDZG3b7n42DhG9C7xEuBAUor2iHMougpFGquJDEqF6v5Qym2QaShhTVsVUY2B6opTefsDvU3dvtMTgvw4EW78Yc",
  "key24": "3BnsvkHi4peRFpK5r6CqfSiagQt4PgTQyYRqZ3iSYwrEGjEgukgVNDji7Y3m99w6g31sAfapwTadExscdNEgT1Rx",
  "key25": "5pSTEX1JtgNXNihKCMq9mqAERQhFSAhvjANcXz7qTwMrBWN9aUaqokYHFLxwyU1TYVKthuTUwm93AX1GNBMJLDSK",
  "key26": "3DVtRVHSbqHwk9uwxWMhtr9BNXFWHbfqwBYnv34CsfVVbU2VgfoU6BU2fg8bAGiH7au6aNEnPavpu8un7qr24F9y",
  "key27": "McuDPe7Pp3pkTHjgQc196riRWUZzCGQVeH88bLXYkQACqfnJuiH1AdysFCVJ4qEoKKuWAcTbb9CcMZA6T25tWkY",
  "key28": "t4dLiKwdbCxUs5KmRjxTyRnT1vqAs337VzbQi1fz7QUq4teU3JnYDV1QQwp7xdHoGiiDtqeKLGHGMFDY5nBRz2D",
  "key29": "3MqwmUpoJtuTAj3bjcgC3D2j3V9k7jzMjee4YDSaZGL9ZHGwRZ3W8mShhQSpTZ6vNsazNsUXVXyRy4vULCE9n5JP",
  "key30": "216ebKbo6JGzNjHuq8daDj1v8JhJkaidLugS6UtmZ6mUgEfwXRZVtymbgXjpaq1wKR5oVRHXSX9GWgHsL4uWhLNb",
  "key31": "2RtRXUHq98ryHrkrdXXgtqXeb3BCXWkWeu1JnDnyqJc1mVpHR4U9VqS5zBQrxNiiWQSUyPbzFHdunQoGr84LYQZH",
  "key32": "HoP1dJMQre4fiNi1bzEWH191cDjpcPvn8Jbc8BCN58zHzZwccdEwxFBwMuRzhdkhU4GgHXsq8kMSVVMNhLiikAP",
  "key33": "3YsEvNMSLcwkGRqsBbpHoRKPZn9J1dkKXqZTxUMdjQe4wAHTFDSLJ3TyJQhPzMEKhyvvPxDHGZsSmYL8zjQw8vmw"
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
