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
    "2mmUoWED2jQah2sR3mMjqTphmcdh4r49uhCuv4kET9LvuCaWyQ3go2Gs51AGg772kyet9y8LSCCZYFf8hRK1XyK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZHCst4YL5EmAub2fKv33yBCGpmPxPBznbNxTkkCQyYZVw87UZV1oLWmgfUR8cuwdwvNdtwbbRxvJg9GBYH637Hx",
  "key1": "52wBLYAE7om6VodAxWYCGXYYDV8kCv2u4kEXBzaxR44a44rB7gh3prvSnUCqyPDwm3MPbzS5xgVEDFdFQmAc9XfZ",
  "key2": "a7WrkfwSnTGEShY4XsGgm4nWZM1pwf9B1gDerJqtU8GdaFJdYoG6BdbYmbF5UprYADfhDZnQLqgwdEjt7Eg5Zag",
  "key3": "4jxvEjqi5WyGShapoask1YLyUP359eqefyAcA9Dw77GkvgyoPm3SnEFgzsjo2drLwWdUoEAoKnuwqpo8nJvWnbX9",
  "key4": "2Q6iv4mtvMhdCMkZP3W3tHDdmSQbzewWTyLmhh8rf9J2iBwD1zZY5uxHAsv8YUd7585JiL7kVLTF4bQciAJcV7VH",
  "key5": "ygozYCK5Z6V6GoCszFyjG1Ya1NwkApokg34RU46iGwHg5SP2CohADtd5t73jBxfh2A5c7Stv8zkeJy981dJgFrj",
  "key6": "3dFCPen1JQULTXyWBGhni5vcgSyQBuxnmim2XvRuN7u8gQYsXUwAta7PfYuae2DbJEWYrZiwLW5mHNeJv6BcNBgo",
  "key7": "5aAVR8BsK3YD7Px3BU1i8dGfCvBMb5BY8LobBzdZUxd4o3sVV4SNZiWeUm2uzY419MyJtikvQGjEXc1F4JbcPQRV",
  "key8": "51xXF2wapX6tWjCfQrzFBHSiy3NfAn3yTTJHTqWEMVoxh7kEUmvcCoA4HjLemCFUYAXZ4wPqADxubJPhDz3aPwVu",
  "key9": "K4oHJSttAJEDXnHehsT8kQtyDmbST5eomMF4raFiumw5LbUkw8R4w8hu84Ua4xYMnVz3BrQ2zDw2f25UuLHtuji",
  "key10": "3J9qBLwi9XrZHGtBgJGq5uANxranFZm8KsQ37gyFRX7BubB2VnS8x6uUyP4utsBRXw7GpfVxTzfPyhLKJSdk4xcM",
  "key11": "bgm3U4vK8kpp5MSzio2svRuhRXmGaZhvTsmc4n9KzoR9KbwX2HjwCcQeRnqBEDr45sWB7Xm2jDBsBic7gJKMtU8",
  "key12": "yW23tUxVF7PqNh29Ytgy2v7rN9DtyD3or5gzvpDbE52R2ausFFW2bnwd37wQPhxTrsWDV3DEnvpu9xbxfcSQBpp",
  "key13": "q61Vhov7ewennwgmMqiRNqNdJinMWA7J3YEBR7wo1NbkjrCP1o1AB9ToMuNruWQcuTHqxM339FqK4W4erH1cNkX",
  "key14": "3q2eHri9u21XRv5qCckuujHH7YcUBqSfDJ8ZQCv81mSu5t3C9nMuCEpxhq93w4MUmapv2XDViRtXkGKM8sniXtsK",
  "key15": "jCc7BdjVpqRcdSj4q7bNeBJbXit16nCuSSytNQW28nuE2anR9UU6CCHF9pynrEM7Vk57cDqQmL94FegsNmeHf6e",
  "key16": "2A5fHS5Q5NEzTxGDzwEmimN4veFuJv5Koe8eJuErKHwPp33Zf6t2JY2kfLRCpiDYFLpfM1x5WVcDdZFpcg3RU8mb",
  "key17": "513P8t3WufJUakn54ApBcF4mBCTe5vPAECsi5dbsmcn4fscNcQM7WDojJwvxqgS1UYJt9YC53vcLtQ3Rh3sr2mh",
  "key18": "5c3w7tQYAEDKD1ouz4XNSWAWBAVuV4MCoYioaMXgZ3t6oMXtRsNQj9q8rsyJ7BYbAv2e8HUttuj2pg7Kh9CqmsRc",
  "key19": "47pZFS85w71XTJtm8abphdpQYCUgC8F2Vd2pk4UeT3ckGx1eLsBWhW9X7TR4zCG4ma1GQ6R8sJwSi5k6QToso6e4",
  "key20": "2hQ1eqjh6W27NmNxjKJo9YewQTwTqenh2cFyZzWUxdwusbjuENemoAJdQsvVcChaModDNh3jYArWfoeeyBqeYU5s",
  "key21": "4yScRmKiHG8kXZwKzWBtccXmKyVcTMDgc3JRexbnKrpRwx9hA6ERBBJCSSs513s6N9oqRN8zf1BBrAoxEgDXQkqV",
  "key22": "575yd7Zy9uQ9XwdatzEgEvkgvE6hweiFqpnJDg1PLCmaijHSC5BCKB6C9Cq7hMbWqFK6DxGcy69mdPSBmPuyQzeY",
  "key23": "yZspV6aZV7tCLu1kyLzxPV4KjpmwXjCYvD8BC3nYaWMgFBzwKzmCnFRnPffEKgoBoknhJ5jD2DiF4VFRsE31fUa",
  "key24": "3jXe7DRxcouJ4WCJ2g4NXg7AFQasMHTFeHC4Je2pRKYHMEZghb1Rip9PEJZ8uWUEvTgrTmKwijyWn3Jm9mGyP6LT",
  "key25": "4SAkRxRcrnCkJxjHHBjQxC1viMxGsa1oiqMrVRSP1WiSdzGcrFw8bQ1zw11Pe4FSf92wfTT2jhRVfZKcEXRpQHp6",
  "key26": "5SQZFeEojfCrobsc2uo56XNzh37zWi4XyMzdHe9Apbdkz5wqLTK1RVwsA1ZFRcQa19PTnso2JubjXA3ddgatBZSX",
  "key27": "4Bs4b6naqTPpBn77tD4Aa1RayBp31Rv719mfUT6gRC9pPmm5Tbwu7jmHvPdv3zqgyTsFsyqsrcso1PhwiiQpeGTv",
  "key28": "2RJEU9QubZj2st4jxV8SatuR3tTdr11ZrfuGPPuMCqrFqdGQK4a2ms3nyjGPW9nWtMLeZU9ja92B7gaSHgcKQe4V"
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
