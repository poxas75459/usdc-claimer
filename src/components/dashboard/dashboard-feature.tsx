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
    "5A3397zxVNJgwNCiQbmPxw8ZjcK3pQxjNhGZtPkb5gbP38zYGS9fwCrNvThW4uGNwgD5LjUEtdM5G2tHpJEGZMid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kix9Esb5JQihXk7nd1FKi7WfBjAknFNjnwnAv8jZgW3HVgBqgwbj2HtsMPuU1FRapnwtZc9e2h5gZReLY9HeFKu",
  "key1": "5M6apaAMSmD5cLJYS6nNiqbqH8xBGFiwVgqzLmAzRs3M6DT1xqTPyQKUfHfDz6LxHhQHWN9pEjaLwSs7UEQew7Eu",
  "key2": "t5DPMTeivQwFkPzyu6cXcJ9jeFk1ZE7wWPYzuAT7YjTv1CwNuzQEW6GKtgAGnnJ5Rh6VAsqgcyjtLJKZTaYMgQJ",
  "key3": "4UzU6JjBm6dsDTC1mYCQwSynmt2qXRA6aXW5Ft7Rqp24AhyfG7EzgcZikNpq3UH7gD6MDzy1u6YNAxYUJGm8Rh8K",
  "key4": "2AzTr7z4APUwYfDbKhxhgv9rw2TLee2XhgUMuWsq6UjxbTewXBep6VbXijPk4hTSbEPjGEvNV2yRjmgHffMBAtDc",
  "key5": "9LDzp1zy2QwApMunKeyhrh8vP49Xqvqw2GhczG1mH6G5p4HyAVxe3Ui5kjz75gZCrWVVhEPvncaekTHrHsaBZg2",
  "key6": "5McFRDzv7YLmg6iALwZUPpeRnDgEdkRiszZtMQhfBrh8CG1L3n7CEU3HNHSRH9KgPR3R6v1vrzEjQU4To3XNmFUi",
  "key7": "47Ze4F3fnHajCNXjg28MJyn4z8myGYkeKYHwcffCBgRmhKjEonP1qe5LkFXmmiT9Z4gttAhXW9TXVkf3A43GiRT8",
  "key8": "Vp7UNfjsBYH5jsmpBf9ZRnYTNCPVEAQEfQdhKcPWQwYiEXSsSHsL4a2ng1xaEpn8rExNMQVZWnNEqEhts4xeACe",
  "key9": "4nFLK34Nydwmru9RWBeHsAnqye1Lk4fx54xrsHVgtGJXnMo8hTmiRf9BtdfAMk31q8g2os2dWCnoCrPmd3euEdi2",
  "key10": "4p5pAP5bYRUwUbNFAsuBcm3hKFuWUecPNJQ5342je2ZFEm4aq3bbJEcRvktrFDZDAbxKYvUMUX2WdWhPsMT2ojsp",
  "key11": "4f1iToB4vwh8BhHEgv5jZiyVu421JGGqvZjSpZLcKL5rp6NoX7oxbgx8163eo6uvb1jh928X3n18nuRdbcC1FQFd",
  "key12": "WCZmsmiQRRRTUpuvk6JSiyqJpPSE8ePkBx9vyY82rke8dpTH6DwLMMdUheLQU2R9wH1ruyxY7mcjPYMjErqMh7c",
  "key13": "36j4HEvQrU6BBjv4gEZX8x2edb2EGa4xraMgciXnCACZ5DDfrPiiBaWx7UxxENnVihMh2JQnfhRbAv1cANW7gnNF",
  "key14": "4ufjELMNpMRACMH97Dh5b7QDk3VD6ATCRSsBSCG2MfKsCpTYTSw8UqfoQYFfCEmLSc6vDyvqd7rhbr2MqCY6wQJt",
  "key15": "2Pw7FZY7QXjFAPavowZ9i2D6xKcw6NMVHjHi4rpx1dHK23W1meK1oKhyg7gwQn9RBw9ig4p8SusfCpnWhA9ZDkHx",
  "key16": "2QW2CGAnMqSiYv31P4UfzUi4wLsA1sUz3ze2ZkTrM3kN1GhhZ1zbzNXFurnPTvVFrmPyS41iGu1dHM8MrxoQrcp2",
  "key17": "3n2bm2WAJgdTw9hjZPaFWbEF1kibfx5NB7Dboa35bnMQ6XdAzK4VBwcbhL7TUJH488kgPeaUSuqtP7QBMDcnCyQ5",
  "key18": "4LWnLDHvmbBkU4dG6KCsyemVbins4Vd3nwezRCk8JRzD21hRyvRtyNdGMUS6JNwNAcy5b3FMUDshnXBuBJMh5TqT",
  "key19": "3bjLLMyBjGTYAo2XZ1ULAi9Faf9GPBFrrXBGrBQPe7mpA66CFDNRcS6WVxcCoDC5WG8t9CrWqcBKZSXvqZ19oi44",
  "key20": "5ayVvpZfgLqyg91eqv5dDnaRU41ZA14darSjcDfUxavLp1oZ75RjVeRjpnogirW6Jv3JR2zA3wS5rd4LmR4fxL6a",
  "key21": "2sLU1QyRDmnVggkCegmfi9iK7oTVZnuqcToQebd384fyTNP2u65n8P1HGYRfY7yWNcHiFicWEN8Zx7P93vMBF7MU",
  "key22": "3jxKS97oGxStZHPcds9WJYe7QioYnhTMx6m7xkZMYh1zeHsqbjwWtzShno2MSHEdg5HtTifWdatstHexP8fyMrra",
  "key23": "3PZVFwUAvcCEDJPHCYGGtfPAp1xF57NzEQwfea4wquDeJRaDBdtpVBpAdqAofRyshvQXZwjjXkLtJMJCQkg9xa6F",
  "key24": "2jH11VUcc35nUEPBofN1fD72hLb7vdbPkzH2TAYLeBuAtUwLeoxJszstitzToqH8TeG7fAaojH1DvC978EiBJDqu",
  "key25": "2u4P1PC4cXnrUPt9YEeW6CnS38m3oGBdGdToBE36dpDP1i7XyLSp8HRpeWX5vo5mdcShWRvJtbCBfdhZ3yBq46Wx",
  "key26": "3bLzUBcQG2TtdVrpM2fkhjAf8xbq9GeixqH14TWaw2vCGGiogsWTZJyncQy6HqcnTBjadSsYUX29fBg5M2qJoosq",
  "key27": "5eyxR3JYuK1UMRbK4CFFVBQH32P2DJDJnxCXPUvBJFrZHN5ntr9jvp5vMhAN1NMbhVJFwwX796iecGnre5aE3Zpd",
  "key28": "35f9xeo8zL17CFHJRZiWTyqvHCG9vbsbVsEvXN8UKUebc9JaHDHTdwJTXntbdmAjCNNaL7ZjyQDtqPzC7KNjnhoB",
  "key29": "5v8iQJcDdxgEWVDkBojC3Dna8n5g7EPPZJjHQ1mh9dnCTgzpacwm8Xg9eevhr27VqiwdUqMj3XsoQ8AcwGtnUMsh",
  "key30": "H9YMMba42P7Y7uuXAbv8TXYW4ptcjGArykUU2F432ciNB4NcoDfVZ8KMCExaJXuCNwhgQfFgrCjm2tzPepmTsTL",
  "key31": "5EasvQpxJH5L1FSzhjX8uHrFCXfZ4ngGXzZquFma7QKiVt9NGLv9HBYbkRH6Q4MWWPGRPGrCNuqVnMwxzYxpsM8A"
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
