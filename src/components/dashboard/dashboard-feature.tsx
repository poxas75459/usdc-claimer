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
    "5jrCEDdR532d3X235hYKBx7sWMPsaUrWwuof8bedzCaEF36Xf5EJQV7At66xzSGQtsQjyZAgN4cCmm4wYwTYbymn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAwySriTxr81fgbTEmgqPDN2CBxFZhdzF3ph1TNqfbV6jUQn7FhXF5jvaXBQ1NvvsyPZAMQtrJKySFhAqnKQPac",
  "key1": "48QE7kLDmwCiNAusWoptCoSJ9XPNX26D2fVBvUwz6nKEafmQsbsobHimPiTKTCdR34w5Sj7WnSG63oCib8N3ZmJX",
  "key2": "28vujFFhPjvbAXBGySDmHhmKvZFj5Qp93iRrbd62hvQVkMBuJG3nQxfCNau9FWh4EnFgGkCiYN7mqChAL1xkbzTM",
  "key3": "44Q6LroXyJy8QgsZ93yPjbct7yexEURnqQTCwuFa6VbiVFpJZaWyjEaszxZQB9PrZs266fg52WSSxWpw28j1zomj",
  "key4": "Xex7WypihWCatKFFVjXGtBU95MQv3bqZjWvXjeQDogcqMzTCgEwpjodxeewBziD6j6bRLSCCbAfLSPpacH6bWL8",
  "key5": "22D2yzazks9z2kkdaHdhqvJfSXAbw632NKubzvy9XH9RJ24ykMVU98m8dUM7ceZWRSrKXQyxjJNxWAXsfYXRMAHs",
  "key6": "B3Z4t1a1qeS1at99JMGJeSPa2MwHr3kfZKHeshrRbMkFWCk9HwaTpkFFRTbu69UXZoyjaHYdA8X67o1BcxjpNhn",
  "key7": "4CN5XFN9PyGxnAaXcfbCqwoQkuF7mTbTZNutXynfQXxYZVrVajnTkDRHnGt1bTnakC6CetJ6q8nybAXJD6dm9Zzz",
  "key8": "435diTPBSjVQxGi9StPvtGPde2R5R5FvzEvcSzK74kDuoaMWNnqxyFERucBH1TGEoLkWWgSsV1dKa5Qku9pLMyKM",
  "key9": "8VuvRrLosaCdhsGLKhtisBJx5KaQNvU6HoJAFS37QNfogxC6KfJ47dbqLSHBkpuMj3fCJJJC2M3KgTGK8eStZ2A",
  "key10": "45sDV1U7HEAcyoS2V1T35qnmxx645dkq7dWZ8g64sUnjpNEVKx3gai84K2YULP6j71fvZPAKoiC3vrtzqpt84Fmn",
  "key11": "3De8hSNMpgRTd94YkGg1fZ4yZP1RR1ZRUr4WwzB69B3hXBnf7Z1m1j96EJGCXNFnGAyRi6x32N4kAfnxA3ikBMqY",
  "key12": "kVAeiEjdYYgu3vBeDDxZYGdHEBHT7FGm9AjgtWeoYaFSWbXMddex31sC67R3mXsnLnMitHFTDpBN9PNzmEsLGHG",
  "key13": "2fqMddkcca9hoCJjNPtTRwd7F9LYJgxGHYaJxBT32pufyrmhYGknHvREyDdumcsAph5dzgUodWY43edWcbPoNtik",
  "key14": "3jqFKLsSqNZajDBQYcvQTBCL8jyUgoPPnBcAH2x81b69txhnW55dzdJmjcdk2Bx3hMtHKsvPG4WqY6mGVdBZV4g4",
  "key15": "2eo2ofHBVDVFbqQVj6y6RNfFFQK8BRKpQuN213YXmKrijfiaQjfR4qjZRYTwhv33KypnFkbZvWPpdk7R7QbA5oMh",
  "key16": "3ZX91VVw52VtMzWbmjzhxNGk7t2k2E2N95zRkHuw6QmxHD1hgVAZwYcqkf9JQADcDpGZY94qjS6fo6cwQxJQf2ev",
  "key17": "rUbTQDVMJsQrJc1ikWsRLZYsA4XeqW2bDJo7by8TGtTTh4hBnhk6PgxDhLJAUiCu67zPJSxdEQKXa7gNBKhygKU",
  "key18": "2ayP3RuNEqHDZQSrTrejVh56m9oSU7ifAxYf3CSZdzawL6gtMaXS5acqEminNfcAJDhiUQjkdcHrc1p2kof7Y6ni",
  "key19": "2J4s6xxBKyet1JTx4L2stq8JHjJmsgkV5Gnne2tzhuwyMmUd5nfR74wu3KH1yAVUQhWYzsVoNrsmZp5bEuLcdTgb",
  "key20": "2DUB3xPzif9UPpsCgzHBz8uEsdeMNdfpRH16UseCpkfW8pYabCkf427xYHMR7v18BMbZQeC1YZore6Pr5naNEx5U",
  "key21": "4pcCZHJSihVrb9mYmjveXpsTJmEfZXvCsyXSarUuoVwh7p27EFAssw6erjX2eDuCjWtuq5VqiUQ9GeWtBo21FF8L",
  "key22": "47Hf1q8ogwzXZQ2d6s2pnfvytNLRQLZT4NLpwbo5JKaS7TkuFanC3Us2dN9ZHrbbxLuuEHZ5sJcTwYf5JBtLMytX",
  "key23": "2STRw61DXaTXrTvzemZpD43QZEFb2GJpP1mXZRZ7Rn3xSWXvFE3swxo4YVd2GbW3P66tinHNyueFxzfiPHvMUKEe",
  "key24": "3tuKCmS1nc9nTwzdtAwt4r6omKYg5jw8tT3ZeFR3M9R3oVxBZ3dxerRyJowRHtw5LH9SG3kGzCfkyHU5DjiW82aW",
  "key25": "2cMenwT5HgyjftBCVFk5TTp8dq8HHgf5q7kpto5nxDKoakTQvnG4g7FJZUARipkFhgSsPfEnSj6DHkDETqo5QV5n"
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
