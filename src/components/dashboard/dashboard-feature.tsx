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
    "5vYsto5U7Pq9Z3FaJnf4ypzvLgDtJ2LcqnJaNpPXQsdtbdCjWhgjujA4dNkmynQChfm8q4mnji5zBndijziaQZGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZbUuyxz6HxhZPZuFcJBycucY3VwupTSTaVboB3YRAuGBra1dthmVinAdihkBcJqXyEefqZAKsNBQJ115m8kpRj",
  "key1": "2DNvmDx2Gyb56TnP76Luqx4hgzE3MByaNqSbARiWzsiLHLfD2nCyhuk7NZ5HJUEifyvMrrqGcFSU6TUWcgYCtmbx",
  "key2": "643oG2EFKacV8AV5nAScavorQauJmdHKWRreySAdSdBQkz5wUhYon7QAPLkaLHrgLBRsGvq575LrkkXXdX9WxQfU",
  "key3": "37D6fv9pLiXNUiuReZ8LwrBy2Q7o58H3y6UiNvNhgWeaNTmUgCu133sNRHUQ1exryfDHFcyL5ZDUocsPK7s6MDSn",
  "key4": "2b4QbGo9bKuhXzZ7knX9Efki1r9YVzjfyn9F12pBcFU4CKHHdYhx8vrmS9gqWwKZz1cLmByiNceFUsZnrXZXQKpc",
  "key5": "CGp6bc5DChwcDEkrquAhqTeAJN1c1xewsxjwSTBbzV2d4jp57TKNjHiT3sEDgDsVb3DdW5DVSQ63EdtLMrysLu9",
  "key6": "4bSzqbKLGmt4L8c1ifWBurRV7F4xtvAnG7J9L3jdF4UyyJ1RGip1EHmD9FHPjWuKDVXbaNxbeyYvJyrEBvFdS4RN",
  "key7": "3KNDfBm5R2YEEP9YKaddBijSAeogTkufvFJumbAkx7ibHR1fBQeEoaf3BoZLAYsm5C2WvNCXLCYw1oXss3sxSVJn",
  "key8": "3KfeE5w79P8PLFX3zjgfFU23CGMWi5Y1Fsun2EHybMcC9FpSGNFUUQLdhQRRkvbPFuj1EcDJcuFjymEuamhqiuA1",
  "key9": "4Z5AEEszVaJfjCCeQasW4juiYoyHC23jBLE8ocaBMSdpu3wboJHn91G2MgyoYp2q6S7WB5PC6znC4sbgxPVKtBmk",
  "key10": "38VLw9q5KzXyY28aozmgU1qXKKdQcELYRPBXfReBKWot6dY1cqf7v3912Emmj9VMXFf8LM8495M2DKLTRqp4KiUb",
  "key11": "56c3SH6KbAN9nFaAAYjbjB8uM5htbT5bBhTXN545TDqvGh8JKUTfRtTUdfHiDJJ2rNkAEkVnEdTdkbFF2cUYANEv",
  "key12": "2LAVmZmcbi4U1szktF3YLwDUSiPNzxGbonXDXtt2QTqWYujwgeYwVAALCGVMWgpiAQZyg4p1dUmwW5rwUexgTyWt",
  "key13": "4KJHzUZBvojUFeAazfnty1wzyuJnPAJythC6S3f6Trg67heUyXBBdEy5YpMsWjMwn28s4S4YuTyFTSznsZsKqbMX",
  "key14": "5szWxFcVLyNPCPWcK9peDRHe22vhuQBgtzhoYVWDqDiAh89BRaoBvDSdNRc46LTE2pKJwerD1JWiPNYdDDJ8CrPW",
  "key15": "3TzxhEQzAEqPVM2ykPsx3RGk5YmCCafV6hejbaZFmHoGjbrNbcN4e9UFGJ2xGt2cME9FyQDwZEuWiyXmzzK6QhhC",
  "key16": "42HBa95DDH3e4uLME5PFHTFwfHPziqXJeqGTx2DAuMqKCkJbUJHcPwythGDqgNyj4UCtZqp7WXXhAcCDY5QYwriu",
  "key17": "4rCpfCpV95Nsd4xhFfNoN4MDBDYFS7CFkxx6XZhY4bdqsT3yRHEJNy7kD52qPWXmdp27HQcKrV8aeDatapeeTFAH",
  "key18": "3W6nqtmubmqVM3zH3GyWAMvu35rHTU3H1TyGiz3QkPhjVwbUAHTK1BgtGoZJp7s2wcu6sqAqK3N4ybfPFqh8dwv9",
  "key19": "2pmPakwrVD2TQeeUUUEGyHqZQpAezZGeber3fpiwC5qR9UXSdiGmusv4jxknRSDd5YftatnQu7dUzbUvH8LKBzGX",
  "key20": "5FmGQfqsj9hdsq8u2dNviBM68cLjUohzaQR9Q4sKm7uVKvgJCxtSP1huY11NFdgYrw3Sor7h8rHdr4kSvndSToGe",
  "key21": "23GPTKt5EHqe1XizpQuzJAukceXrhWyAuVHdnsNncf3gM67S2seLfyRYZXYmfktoXQJQyZcb2QDeZcYrHGKRLEcU",
  "key22": "4QXVQeNNnDoSkW7xJxNQNzCVBJqsewf8rweKjZmgQEyLT8MVqJVjpEmbx3qMxKQ4WmQdheL8Y9XibnxbucsCgfjC",
  "key23": "5JdNZSAjBMVCKwuvDVi1p6dtpTJx7i3L718cgKtUvfc8pkLBAUdEkjmuu2eayqt4L8ssSgKBsWko1Y7m9vG1aJkn",
  "key24": "3uyKWCaruAhGS5tK2jVFRndym4CS8dqBU77JdYu7JisvoN892eYVBayoXvEUpixGpbkG4hRaXpH3VYaPG4Zr3S7H",
  "key25": "3ktP1jzjRXF1Y8DaJ6gEtUWvXEmmYCRPt9EPWG7n1WG467sD55snfir7FRNTBBqUMxAdxGTaB1C6t4AF6NqCDABU",
  "key26": "3P2J5vb6HjFYoEHvKfhBy5J7D1fWfQTi9N18k1w8bkEkGzB3sSUuXLCk22S6PvT7hvHyum31qM9BPFs6v3c9Bqf6",
  "key27": "5jAQc71gXTN1A2Xpmh51Bsp55KCvmSxHHUXefLWu7WaPG4uTP8wPmQ4z3PUQcXQKQk3rJWx4355T5spTqBVpxtFg",
  "key28": "42bPy9aN2ti38vvzkc1XabM5pe9QRrxrp2Z83YYszkWW5HYAAq2rPE1pEP6oM6RERtna2FGHHfnWomkN5zqaCJ37",
  "key29": "2WtnuADnFTeEXPKHyD1oqFBhK4f5aVnMtZu6aTdLamVMAMfz1e75h855yqmU1BkyufUSKy4CVrmMugfByZVFuume"
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
