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
    "UFtWGKaryaEw5CV8y8qeeJerDUVX7xGRWrBhyBif3xpn6bMBki8dvRgK9H3LC7edhsMPcfWaYuz88U563TP2eMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brPnXXjqJYYARbum2zXSKGgx47LdS9ZgeXYnH4Dd9o25hkH7PN5Vo5XzESpnu8kaiLZUizPk4P6RybUwq19aktF",
  "key1": "2GQkyK37k6d9rwwKTNnY67ykKz9EaQfmXAZH7w596M5gjsrWL9j5dz1kCVW2r3arr6sy7a39HwwnFFs5eSmkSZbg",
  "key2": "wZBdmFvWJwTcjJxMsG7anfb42xLQmste3B9UWRu6oinLb7XGc8Y5vnZZKzybBwuPkp5wJcW4hjELqtKPp3k74MG",
  "key3": "3iAoyg7k7rJ5Peis5DK6ekAoUM4Ao4dn8yHdPBAnLNn9u2wmqFpbAutUWPiiWjJDgfPKTxVJnd1vjnVRvKzhSBL6",
  "key4": "3tV4hPW7kgew8BDv8SwqWJP4YB1PGTizsBpbAPJ1YotQ6NZLpKi6qDWpm6TKATrastJCJ5rMuqvJ8TS84e5iKHxH",
  "key5": "42uGLCa4uBPNmHkmtCjRR6bM4U481VZLjsoiBFX4Ma6nEq1zykSMzY9R3sgTxZHbFVf9L2GYk6Vpq4NgghWxbA7o",
  "key6": "2r8BCP7QoLmsPadMmyzD2A1YXzJtqh5mGZZ5yBv5nMhC1WokCWSWcaR63F6Xa3icLRExfCexYjBJpvx4tEXNUwj1",
  "key7": "VD8HoNh8xoS8jY7hMa4WWTQ4CTpmjNrqwXGboMBq1MtFGgJZSVk4aZZrcoPY1SLjEZj222dcFHkZf2scK8hLifM",
  "key8": "7A2a9Eukue6a6tWdEyQj6uxKQ7uVkwejoTTP2UBRTprVSNSSP3wJXrCMN7JzcTM1Z7Ms7rJ6SV6pPzEhdfZ72qC",
  "key9": "28AYe52QyRDTD8947AD3wSEsVG3M75ScN4zz2TWGKbpfgnUWCBWXFR2YnzZDotCeoHNQv1YV1wBUqNSxFqh1Qy65",
  "key10": "2Px8UgQvQMAZEbXhu21c7v7kQYgVtrGR9bZkfCucQwFcp9ziT2zi8qZXMWcEP5iezHXKbnbd81S4zGxQx27YoTf3",
  "key11": "4eNXQkZtUdH9R7Cuf4eAfm6741rBxKma5wjQ3Q8JP7DKniBZyWma8rpc3EnMesfuZxM6xs6hPJwgAUCwoCzrWyJM",
  "key12": "CEc3vvBidHvzAZp2QtpjpuYABhtvvE5n7DZmnW8myYA7TgEhzkjwmhn13yiBCU1dveTPyDEfziB5zbfqKpTZpvJ",
  "key13": "3m4izeW9M5ZYyBafyeiULGk6yXapLKHYuiAEeYRmdNtcCB7PJxcF4KDze5XBHR1c7ojVxpvgEU2t8JVqfYkZ3FrJ",
  "key14": "4SzmJVyhBVGrq3cVkHHoT6tYsMswxZY4fRmgtT8xW9Yt21ia4sqhcwVeK8Z3aEVQEN96GbggXx7Y7A3xEWW5RYDs",
  "key15": "2cRPAkRcZCxbPrd5Lddd7KF9FMNMmPDBqBQTpLWSuxMf9LGicKEcDJiHmfeFyZb5GcL4fQW4AgRrG6PKNt2nUQD6",
  "key16": "4P21tfwwfPsN1GHgwXvgWeqm6bH9LDosBAVHALkWRLQXtXPTKUwDjsFsGk28KJcfKpYk2xufLLwSXorUniCx1EDz",
  "key17": "3gngu8v8X5gxQWfwPCiL3UWQ5MzCH3S22QNegmHP7amMqFmjr75Aezk1yzEHEjKxMoPEtGZUkJQt3uqjLKmtpNmh",
  "key18": "3NHndTRGJgaHpzbfsoe5boikMQDWD9gfXBdxginS4QrsDFwqyuCFxMRTVmL96e76teLWGzHxuNxeCTk7C2iwnNwc",
  "key19": "5yYFiRD2BRN8XBL5zaH3e2kauRGQ9psgmqe8cAKXTtEJmm2kn9MxarV1Wyt7wKcxoQ1mardZ2gRnnnMhRzzA8rUq",
  "key20": "2ggDLp7TE5EBhNmDoGtfXCR8buQqNpPwuqodpywZfrZ4asiy8NBPWSJVbTJcwrQoQPbEV1uZw8o44ArZpRryyojZ",
  "key21": "53QoA8j2oDXhdQSJ98dUi8faD6oD8nTfGMJE2rCgVwQNrXjQyvUC4fFjRmg7KRYThacpTF4Atwea2JePK4S9CANJ",
  "key22": "4Dgm4hWRVCaCHVJMUcvGoyxLRxZx7oDrPDAXz4MYFJnzsTcGPma7t12JXH2p4BsghwmE2gJyF6dgRcmPPkezseCP",
  "key23": "54Zd95uP4j42XvECnrePTVEyxgBZogTKXVFqDazVk6VHwj3Hwiwe7t8H4FGGqqnVRGdZ4D1r2KNc3PFHGwZT5jta",
  "key24": "XqgaAVDUw9AhUVjHEqiE9jESnfxPXiTR1BoFFCBsg6GuG7UbcejBDHy8aJbu578i354VbmVonPdN1qL4KGtsDow",
  "key25": "kYSbSynCyAvHgN2AGT3S9ddSYmVTN5DEFz9hQKxdgJ4HmLsbW1rhVn1C2o4TvqmbRXxok6VGioFswpN99SsbEmM",
  "key26": "4arUVfPp2bgBdfyNgtGKhvVDDJat37szkk2r1t8G1y2W82PVDLBLsNJVMWdGj2fFmm1shzhKJtXiJ5xFa1ZVMueN",
  "key27": "35ZA2rf9JrsL1cULpSrA8AMeD4gTpjmR6iwUmVG29THZWk1uJdyCTHArdXRALZbMZLUHqz415aHTdLJChx1N8L1p"
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
