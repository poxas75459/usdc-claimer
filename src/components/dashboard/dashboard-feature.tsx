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
    "5NK2adZPJ512M9U6P6uLene7C2cjs98RbvKHr3gx9uZ7gd7C8zRo2iD4KFvzBtwQjncefU7jbb9HfHeGFqteS74d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJveeiC2sk37XTXRcQba5CcrJvc5w5SpBbTCwRnsC3dRcB1YADuzi37KALu7cgQDTRDqZueBrRXJKUeyUE6wSKZ",
  "key1": "QqpcfqimzNjVr8A52P8rL5Xy2d2b4xu1Vgfe9Hz5ZVPMVtrYr3tQZEyazWMnBKcGuyEAqRBZ4WZnDfMRYgnhkuy",
  "key2": "4GmvRVgiEemyfAScxVo9a1f71cPGXjzdDHQVf2g9ZX9YsTMf1T4Xsapi456dCocLiEa4SrZxTXsS29aknrvH4Poc",
  "key3": "2M1EtLiX18Knug5Sv2MB1vvr7UiSQW3fRmwHYKMCwAqURyZpUR7mMW3prbFu172vxYanTcPr7NnQtCGs6rxge4Bw",
  "key4": "5RLtjTwtkwr162RiM5KSYYwBDDrnvtbQTeUuYr9Ra9Qs3N8KX7QwdprQUHLMy8p81mQomTM8ESjhCZErGjKiWN85",
  "key5": "4BBs3EAhoADemobtZb2VrfT8NS9WRB1aZNw2fhQWrq3iGfiJRCfxvDD1rfQWcopveYyDQjRqbZCjZPrkWVmV7DnY",
  "key6": "4GdunCEtFMa8UTKXnvdpqqfNqDxaAh3uN8EEfQPpN4WxpmqoZF6oyG7hK1EKJovcbS6DuaouKWFgY1neecysdFGF",
  "key7": "V3iC1TmNmVpdkuUSKhAaHzpkXGnbNu4TKm4FrQzn1rkwrEEYAbFyKg2rmL8hohAn2mwuUNLB4KoV2sNnfGGayBM",
  "key8": "5Tp4AxWHLhyq1qghPsVuwn7nU32qRFViC45k4aErAw8KBJD2cGwbXLQZEgmJAFYMDEzAFP2ZufFwzS2tev4JTqtv",
  "key9": "5sq4jqUEqukUEsqQhgcWsQqPBgpMpJh2KdZDg49knwHbSyweLXkTmmTQGDhE5eCgmDnxK4tJESb8dqWzvRAFNZry",
  "key10": "ABJ8H23jFtV6AS3Fr8wpYcu3fokeWLBGrx9KVyfCxkBgXKdDSC3HGQsPo7FtqwDdK9GSnP6AadLWYRSS7sK6P7h",
  "key11": "y3A35ZKb11atufCGV6jRwuD6FFAioP66s8dsDq4Zu7AXnbhCsNWdaJRE8qS43BCAWUSgSMTiLqFmFLWkHW9uzue",
  "key12": "3F68fGt3dU5BZctE4gsxpJrQqSDV9M8VpuS1aV13tFtkdjiBy7CsPbX1g9sh87TwYtsRCE4w9DKvm2FtUcAzuwnq",
  "key13": "65Wp76wVr1kwe8fXr6Vk5mTKaNpMFwqquD4pNvbLRSsZzR1UFeEw1PieDopqcqj24T4XwQAkV1RovUnUHzfnSWnA",
  "key14": "2i3Wk4UZxvNEHhrfe8oG3anYWUeWcsco73MrWkzqsRWyHYoM3nSdnNgjgUMPHCakdmS6ZT36zsPfRb7kh7YbTYxE",
  "key15": "Fqn5i4B124ErfSUFhnRH5vPBn59jNojRZN14u5JdJ96imCLkyR3ra5b7fjtwQMWqdn4PD6d8zMkNcM52qcEUkTR",
  "key16": "46KFikB7B6duaDDUL2c1ijnLVXjN3rQTHeCKoYKB5fgUGeskp21ovis21meGpd6aMXSoXfQvDWVVFhYzz8T9QKtN",
  "key17": "4o7CvThEAB6pLYvumrGyb3EPd6SJM2F1stqEfRJ2usd5itSpMgzoCbV6nuSWex3CBfUt3ag9cgEyaFRNVhDM1H4T",
  "key18": "25sAx4WGd4Cq7faPBQrGEJRH1mNfwhjFn9NNE3pbVzEgmbAbmACPv5YB6j1BjKVA66hr37f8mBafxGapesXvsA8M",
  "key19": "5HVPmJyL2SUKifoWgaEpsGqP2AK6TbfLzn7M5xdF5kgYNk6qjqc9rpaqsJervBMjUNLZPMFd4t34kQ1J14rh1Mz2",
  "key20": "5RjJ2yCsGHRaJ4Y7Y5CDtCTSe9tUGnZdhDLowPFe6ynVqVVw5dn3m9ybhXGhWMnxh2nAiueqYUo8VopUwLUvHsGM",
  "key21": "36ZwwJ5ZSMxwCn2w1kKc5cvcfXZQKPKg9Ne6HPujiNM5YjPF8scJqJADnmxsAmFvkv9ETeA8NqnbTaTy53b367rf",
  "key22": "5gegBHncLHyJjBmVKUxXDMAWsmJTuKY9SEppxSnna1ya7tc4kNFJ91GmuH94gSpcNdaVxBN8rz9msaKLJaE44zFq",
  "key23": "3oR6fHvgyQoQQhJ8hBECp6aXYPsSw79xn4a9omQPwHmaVeFxQoiL9i4aGMpf6izwYBYZsaqJnY6ReSY4a4jG5TVC",
  "key24": "4Waw9pkE2sUiSLFtCXrRhT2nczFGhpZ7wJZaqkoJCYjcDqZ8cFXiRnx6eXdT1skaAHtrL1kVE2GxDd4CWb9ypHz2",
  "key25": "Qerug2LxXhg6tf2HKBict7d77Td3eSXkibfaGMNbrWmYU74bcmyC485uxfUkGKiKAJr2y4y6P5maPN1VTnFcWW1",
  "key26": "4NDLxVFesad4FitBxqE542Bb3NXcY5BBQFdiUnve4Z5LBnPRNomvr1xNvmZZBmqWbHr7Hj6PsNR9fwZsV1GR7uLF",
  "key27": "4Wv2LxzSr6NaMfaygJMdrGZNEKWjQwojaoX47JAXwhuhAHdGzSF5jtZ7Z6Kyu8gWtdsRkWNm34JEDmSCx8V4stZk",
  "key28": "3gPTUNhH1asrjQzwTMyt7f4BMQanxcdGSjo9z6uKusQUaLGXc7ygdNa7uCSjPhhuFXW3zYZ4wA628UUBJmM793A4",
  "key29": "3PbhxrTrkqH6xN2NFhSnnUwrhAHBr3Ktn61EAdm5qok5nSJ736UF1t3Njp988CZ1AzTVf9yo1699nETLSjtAzpeD",
  "key30": "5bPUBCyLu2JrMPrxvkRaPV8rWLc4YfyZcXx2uprqmPc7aEvVhGeaRxjmNqfngMvL3fSQBMRYsxdmLKkYsXeKE6VM",
  "key31": "5g93uAqrkCTnPnwJsAQSjw8pG2zriWC92H7UyWXSW8mazHrkngtZuzRRZRFZn3oweJvg3bi9Tdxfab3jfYe9vW4x",
  "key32": "4ddtjRk2Vn8MLt3fy7uc8RG9jAStBqihk7G4H2rU4boUb4kk7jZ6Fp2Exd7Cqpeot4jY16KfERKtodZvLu3V4yNJ",
  "key33": "38n6i3RgGHsDDWUDdANDDxKkf3UvD5tBaHtaHvoxJa7MJYKWGDE5u86gcQK8qotVvif2MVpX5snoLmUjJVvsyAF9",
  "key34": "5hivZwP22aQvS5Y8EhAZzag6GT2zP4SVo5RgCprt32e7ucc9xiWLgdpyn1mF841sxsd5vYptkssUPxXC36rP3dwZ",
  "key35": "5ouBGvDM4ATwFrBbCeSrH9CYUkX4YodjEotrTs3pijEKVbviiVohKHKA6YLB85erojSDrKdEDZCetsQ6vHBTkARn",
  "key36": "3pCHiGvKeewV4e8aXdawhSHxE75k6Y4HqrqSkBrGhoJpbYwHnPjsYVk5xi1t4chjAwFfVWBP5SVH9QturC5E41bS",
  "key37": "2hY2vW4yCpghH11Cwu6CEioTkVu1iGqhGpBnQNfbUjgqU3eUYQXB1SW2DVr8mMThgencxUqdC6hPqocGKjE8mvfC",
  "key38": "5RCopcJSzL9SqZ6WG9NwbuW2TJXh9fmotoEEEhV6t8uRpprL99dhyQqQjLUESF13gAXHXBGKvwrS745MZCFskhzo"
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
