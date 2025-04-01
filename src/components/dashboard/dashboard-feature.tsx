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
    "4URb7odTiU15Ys9PmCA47NaxSX6HKeVwftmgjcsPmfpLxNkqaxge12AjYyxZ7Nyism9eQpsfViqTzZmY4vh7hYjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w8XedfGmAFpvyT6eXxYbe9Dwk6jSVaghmuu9Z6Zm8qPUoFm3rdCnesfdL9PaGh8YEMZbHFmUraBe7bp9tnnvgvh",
  "key1": "56wbega32Jw5MnHS5d7TrFqPiMRaDbPAi1pftFCHZZV42VryaEkKFKdN3Rp8rJUDeV6rSEoJRngnyNKQqHkd8N7s",
  "key2": "62Nt4z19GCroG4nKBDK51XcAhWCKnyKXmuXGdzoHzdCBJCLXYwukQtR4YTuX6SvdFBtFGHHdv15BZagJwQS4V9Ld",
  "key3": "jMpnxvgLiZMVgwG9kKQFHzL1K2sVQXwZzE38WLqWh9AMj7qizE31Wj5eZuGoei5PspNYmJGKvboidmEYERoW9hj",
  "key4": "3BUHs5siED4X7TkREUFaj1tMKwC8fzcgAQ79e17YiKFdiQTpYX4eR11Wf1yFTxXNdRvYzfShVpwexXVniwyGAw6L",
  "key5": "3VVxt75A3vAv9jan4R3pK1r1nQiqqNGAvFiiF5dzS5DyzSyXHu73edZipzf4cPNCdjGy2gVLHXv5VF4TkSvVopQh",
  "key6": "WkW3dYnjXZ2isvSU5TVgiFnAaPDxHNdBSsDJjjtNx6YPjcuJPdfj3ZSAWcc1fKjogcmqDZ3XS1JDfQLiiP8RpZg",
  "key7": "4tL4GgtZyy4vby1TkbqaXpf6E29DqeSHqDUFeGHNhBcmWpgnaKmc6u7e8bSo7XZVst32tBC2BUbqCaj4Kfvf5LPg",
  "key8": "2iMx5mr1itYLCzEkRYs88rcdERtDDfziHXAH2YKadf2hFuKTGkswWWE85FYAmFmWGtNf48Hpe5mF24U4xenfgZSt",
  "key9": "3TMM5ZkFxQrToNQ1add6NgqcF6Tgp9P1UVjEiWz4CnTy7kaicU95ytEzMdA6sktrQ2NBZmwkR2GzV3Mx3oaTT5eP",
  "key10": "2jeWgcou4VcNo5ZS2YBLQMSPcMVNq5hFbdndoPa7mZcJwGrDCeRPjLwmVLUbm1eXW7vUswdZsyX5YssmJtbcc4rK",
  "key11": "3cnTk2YgkNrntyb6EZ1ZbveEvoe4AZSyggcEZEo4ajcbEL9SjfVoPvWRzpTcBn6f8N8j7TTRBYpy22sUKFsmt5PF",
  "key12": "4Mfkt29aPy1pxV2Y7yxfgfkQJ4CBPZju9cBSWFahBDSkTpNFcUuL24fNd9iimrQTjKTNrCwwB9Nh4fVTXJQ9FYTT",
  "key13": "3sBupSJQFmxqPAr3RExr3m6z7iBzzujJieUSUkVoQwvBnr9zj5LjwkZXrukXwKWJHB5zDWExqbQTcHePf2amv3oe",
  "key14": "3A2JfAc8ADpwEwXDg2XZEpNHCPG5Me6554xN8rb7cysX6Vh2NuZe5tHYRiTLmUz8NZfNM3sSC1Y9KRMnfBRenjUR",
  "key15": "5Y35mFi6r5VYaCzxKPKWyJKM23MHewEKg2ywt3uy3kvn4msZpNRsT4T9ZPC4x6ccbzgGUcZmDBdvkC3J6MUXrdNC",
  "key16": "2zGFW434aUd2pR1k7sA4wi5eB6godbBVb7Mrv2gQbqGiekrhjT8u495dsTHSLT5Q47Yz6ewEHUCjkeWHaAUvEte2",
  "key17": "5HaWfaaVf5VY4oPMQnFHAXM5kdvkAEHZTkYesY8ywcS5iouJrzsDjerPVL68UuLNCdhffTYTVq7S8X2SfKhG4iqC",
  "key18": "4J5sfBkyTDnpw5671D2kVB9EWxyoGDLyexShSHTiTcPAHrSQkWFiYAXtXoM9n9xg4YWBmH7BTMDjUDC5AFUooZ73",
  "key19": "3mZyZW3sFyxoCLjPbDQPGHE393q7oWqg9EthcxrjLcR8JWE5NGGJeZLuMNjknpLQULqsMV4iXRdkW83TmgjnbMu9",
  "key20": "5DcFkwH1zjbKd7hh6qRwVP9AmqQvCWA59pM6CmLj7pYShd7oqvBSX7JZjUJBiPR9nieEmfAkC6eV2o8g8j1WnjRy",
  "key21": "5HrSWULhXYSV6odMC9zssw7Q2zGCwJ6yNRfAJpjRU6jK8hNKoieCUXbbQJ2yTx8chGUEiCGXktQhyTn4mpU4fHZt",
  "key22": "5muU5foEriiXmJyayX8Yh6PW2FwgzH21mY6M6B5x8RJLtgdL5ZWUm9jstpXVb33uV1GTMhrpkq5VQT8NkD52hixa",
  "key23": "5EmxgGk7jJe7SNVu5NSv3kyUqfZitGTLF6N3MkXuEfgK3jyqSVgrcd8acGKsSZLuLSjUtuEmnUnuuwWuG9CgZwME",
  "key24": "2twEJxYjvG2TaGC8pyKXScTRsd8FhbYDYetrjX8ecaknirQ9r4AUQYpwQJapNxRxDVNNtr6fdpKfjhL29TPbuku6",
  "key25": "2RivyEMYYiPNYhzZA52xjieGeAvcFAqoLLHhgHEWkzDoqcoLPYhP7YJbRF8kCracgTW2fktCoS8VV91Liz593a59",
  "key26": "4TYgwy9Vkyi1mrZcRLVbv8qgMNAckBQC8S5W5u6Ro6WxAGioHaC191JNa14ihSR27QA2QKST1v4EPpPrZ4T6sEPY"
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
