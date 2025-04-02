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
    "5kykoNXiz4ikVbaBkqTjF87yBpHtYBd7HjXJWnVFWXk5us6Xe1MJg58ocdhodyymoH8NXbYcbM4NpQbdMjgnHCYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQjFvwBrAybE86T27A4gdSnkyK5mKBYuRVPjASZh3zN7cAfZZeDgwwix8RJVDNppopMq3EJ2n7FugA75J1gCSux",
  "key1": "3VNsLvy9a2aVRAQ23cayRi4yied3n4TWfHwXX9BKZxRTiMPLEHrohTh4VRbbEPzZpZVmHkWyq9Qoa22Uixo8NkAx",
  "key2": "4h6XmfhkLuNDQamwNvUYhfJgLT4KhxrDTJwyPSTnRAXwHdz2kwNEYAQLeZxBQYXaooFamokAbG33Q7vjpAUvkmjK",
  "key3": "3iZi9yCeQaA7LndNsEJWYsJ4kWZq3REyaGkLYkGsiiwL2xzSDBLUe9WMiZKcEXFVgK8554anGEmkBscLHgmGfDF8",
  "key4": "j5Yi4pooE3NdLyTgziG6fC14H7oNvbUHJbBdQBsCpGhvwZqjRJUgHfAC2qwejeNDmSje1RLWmsp3npiF4dqmpUT",
  "key5": "gU3tHGmkif7y7vKsfCqax5FuBdSVxwsncC3MaFHNroFbhr5wZ6ryjdhveimb42GASh8MAdwJ3N3KCC3aqVpCagw",
  "key6": "2hTPaVzWiogLu9H4FjDJjMTJEfU3tgQKVzVpfQW1DaF6aZZVxbT7h3CM2dqLssRPSBesSXCiTeBxzpvky1BXWg5J",
  "key7": "4fGB4PkwZGaHhXdJK3kXGYv74yzfmnUFMXB5zDrh1QymW67Q3TJVpDGKeYBWRvJui8RyKA5AbFtvDu3S8daLiT6t",
  "key8": "5CsB5yG1qCUByS3YeXtfdR58BqdnG1eDkZKPTaiv1jqykY73fu3zDSEqv1tjB5JVKdc8t9HCqB9aN5aPatnx4Fge",
  "key9": "4W2ZXn7nTr9qvQshed8K36Y7bXniw3RQiSktCxvWmdGZDZ7u8Nh5DMZa721Pbcuu9i6CHsbLFJz8eepSTYK5PCrp",
  "key10": "27NqzJdoetdza6cpPcYyfs21e2oeTFfm5NqfBhETLW6mP77YL5oLwf6F3nj5rUkmdDvpGnZAhYuTjzrPvhsWzTMG",
  "key11": "2VBH3DyQeD1MWafbqiD6t6Lvn37dtcdgr2HinpAep8UT8bKVoAGCzkcinQTbMUtH1ZkSe9Th7eGhZN1yMThgjkAF",
  "key12": "3DkvHcjcrKLkBqUTDF5W6P3otsvc1YZrDcEK7KrnWMW99vyiAkBEbohMp6Bcn65V9Rrfn3CkmSm6Wc5xCGQkZu7m",
  "key13": "G4nmMyr3xAuhfsMYHW5osUHm7MFDdQRD8caHJnLyhyqAtvqohYNP74PKFSA2uDa4cmeFZY6jJjJvdvAetK6Tkyd",
  "key14": "65a4PZ3JuQt9PkNP4GjS4Gq5VXzV1adCPVDaoBvLrb5GCqa5Pnrn9zZYPZTnwa625ej2Tqj8QQY4pS1CnKr94T2K",
  "key15": "3VzwwubFpGEYfomdJfPBc8yDmAUYnxVPbHMW6Tg7uywMnp3Hu9EMtrT7mGKyHuKoaqorBDL9XRXHcKjpXpm3RYup",
  "key16": "4HZqzYWSkUhbdLcCmkSbTU1yAiumsAPcwC6AhKYb5gtgNicxB37XfKTj8iKjmyny282nwbq6WufR3cM9LmUDyePX",
  "key17": "4PgoZ1DYasRYGJzQQYdEeVfiqWaZ2G4UL8UcBNaByZDFZRkXLGKbqKh5WXK8reKQ3XFBMVcYCcjZP8uCJwG4id5R",
  "key18": "NrPaZ5amXgwcqCviQB23Btm1j5tHN6hoEBHuKeTtPMpXRPrCXQmLEj6PmGr4XWn2mxcBwzKsgYG3WDq3xaQyrxW",
  "key19": "YCqJ3NJGkB1ZHTuXNyDe88PHLqfLaJVRz3wMEkUMxxGjY1nBuLeyzW6iyf2PDQuHpj1Lh1GmR1cCBGNRTJAPweD",
  "key20": "4i5Y5HofLTFG3peECpQhhUr9DQbo5wpoV3rYAUkd72ibSJrtpBNZRSyjdFsd8oiYHGcEpUdYttFyPUC1sU5Xjzd4",
  "key21": "2MUpGpdMm5NqCV4ZTheBHxSkP3agUFE6ZLFMw7N67v9T65NFAfLVD9fYXzq4qYQJ5UE8CJ51jyj9ncXsEzTbpnWr",
  "key22": "5afKJxRz5ecVgNrLyN7U3hNK99yQhcZS2kLnJCFcTTt32Hv33PTSLwyiEJgdB8Xs7iUFRsrHhAmst8gonHrT6GaT",
  "key23": "4qczvJuz7YFsVEhnT2NafGevxSBX5LnLfctCgUUNGhuHsorb6Y3cbCseBBmsmifTacxqf3yNzFmygD4gvhZiYwet",
  "key24": "2YujDDWBMRkNsKDtKCvYEfWJhuGhgNWW6SNjm38hgEMhxqM7Huqweg3WGaU7fCoT3TgCfxKFubjtodm1Dr1yAN3z",
  "key25": "54zoJgsKGnHHd3YxBAYVYdyrNDgb5gAoYuMAJS8zkq5SXXFnTE4AihdeT1aFytfJYGNpwDspc6LyfJ5F92PkNnVP",
  "key26": "2RcmvDTE3kxVHHRdYYtT3yvBiw8n29Tzm1jRgwjwbG3KibwBiTFPWsFdHWEadfaCKpT5ndQkxCtuQMYkrv3xiFDX",
  "key27": "35KKPvE4YrWkLSJVFn5bXAqp4sbTVzLWviQvch3RUucvEBhq3Mr3F5BdDEqzvTHBdHbZzoKqL8sEpciY3B77SYq7"
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
