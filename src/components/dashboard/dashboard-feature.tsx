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
    "2SQ5MQYtU81xg9ZBHh5HSBuNqSiDcX3ZdE4udmSMnhixPNP4WASrk2DtrQVpWKPCeADphfnzmXEFYUwVGGqJF7Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Dy8GHPzpdART1LH9QFbPZ1pMEW9uZw6M884vKdvGL1Xr5NonUx4ZoVrtrK2eDMHQVuaioN8CTngJphecdstZTn",
  "key1": "5G5tgtCP7fZiKoPGz7L9snXvoRZobFi2Rnr7depBLDv7NxpZdRbYmfVEEQHb7W64enPiRQRePnWwZXUX16sV4FmA",
  "key2": "4sDFLWXbbSKkTgCWdEoropuzMuiYpxPEbsqFhBe5X3eWhRH2vXELBqVNQJTBJoPSuG3Vtiy6yW7GpyEXUXkwwGnt",
  "key3": "2ftj7enwqdKhqq7p3PFnHGVJtitqrde7s1PHTmoQqABirT1eHx38pNF5aoJynQxkxCT12KjoNidZBGnJZfYeo4Jk",
  "key4": "4jotgAuYMYH9jmCQA2VWK9HbnSZAd9PGhrrThYGuety365ukyPmHCdKeM8MKhH8AY4P1qLZtkmWYrJphmUcsMCeP",
  "key5": "2z51KH2oU9TBZTpQUWAnbuNKgyqgrYBuzUTuwpecwvavDF9TGRWzc5dGKxzr9Cd9mBtegvPeNdgsK2ttraMmmUVc",
  "key6": "4SXVcTKVLpG4Sp8MtcwrkdgoRbQ87cRpF3uzgqV8xppZrXA4KT1EgQ62GG5wZ4Q5BY1kVRJMZDwmBFgBo5nGsWF1",
  "key7": "3eXuiED9XVi8eid6Dv6GxJuir2Gg9uAPVQwQivUW1Ap744zDbrtnhye51v3YFhCED5pG1xBgGXpYa23oTk69YYqU",
  "key8": "2Xh2xiecCgDmSZMpU8Nt45hPDK8jHUcJLcja7tCuWjGP5jKYDkLhyAzSb39aDQ8yB4LvtPDH6L9sQRtC3QHS6d9N",
  "key9": "5geri47VCxmCA1NyzMKHjEw5vQkskTXHvbBQvtUSq3vddCBHAq3a5538ES2oA9dTBQv1rfuKA4RL1PyUP2fseenh",
  "key10": "3qr7YjAcXTvFKTdMtHkXqaN9SFjXafE29L9AshipBSTPxJLsWtnyQJg7XDxGjsFDjQ1vpbWkYXk3yPsj8ZfHDP7t",
  "key11": "4XdJf8auxuruMTrYrTQ1rWzF2dKJFjhpn3Qjm1dG1QfQPZXgK4Eym7qqx24pCK2VzLRXTpm4nrd2Lsi8saZFonjN",
  "key12": "2TmNv1hDHJ7jchC2DRSqifnUTdKVfZ6b3dgf5dUxaCWdTfWKkkKcvAYbfLKZsAUNWKKZCfqwKyCckQysJYWgaMa4",
  "key13": "5sbvAHCA9PPcvabogBD95BQa13UMi7Yo2vS6AnGaom6dVbUhZED9U2Jd7f1RmU8u7C6VkSzraovF5bk3rpoFpR9M",
  "key14": "3gzSbdqeJLMrr5A55GM7uNosXxCMPF8sFfz7EBQGrKyjqpAPnKSnLrhS35mAZiK8ossA92JxjzaZyWDU84ydCZtL",
  "key15": "63GKMrCepsb66JjYD2z8TT14Wpjc2LAsdyeTt3FXt4v6WYZ7EmzD2DaGjAHjzJmrN5ApKot2RgiwkfdsHCVNBYJD",
  "key16": "3yJwUpsXfk85wvjjyEPK4KQHgu3GZg3Z9KQB1JbEqHQ9GCpdnnCWaGSZdauxmpJK3g4FJ2UkGRZ8z796eqwvPT6d",
  "key17": "S2PcrU3fdxctWb4BfjXXLTZ9yzwtRF9we9Fjpbs8jMu8vmkBHoPRZuKvyh7mQAjStzFbHtreHZq8EMpBj4RbzGU",
  "key18": "2dFH71dZPaa98yvVSDh2BMrWFvJsfwQDbsvscv9eUEWcyTvNA58bSQSRJ7AoKG7ChGVtiLTkMQXJzsiZEMQWSBAH",
  "key19": "28mWZPdt3MUFQeiYuiX9in9wu8y7noYhedhSWwEWfzePtuvvvZeyBbZHLgPtSRGtQfuns8G3ivp5EEb4wigaXCi1",
  "key20": "4RU3ZNpjDStwTC5eNxVNyfMaNQQBLY5jeEnH1C3v84DzfqvvHaVXzppJ5t1abkwhfaTsm7eB9iMPccxoJkGe3DdC",
  "key21": "34TN7SMfWqMvHQifkVwTx86De2GHs7oxXfSgJv7tFg2DgctPu8QNv2B3yrYiF4qwfRnhHqiebezu9w93PdWVGWJt",
  "key22": "2oQCT71DACnk7suruwJpheLKeHWsfo1xUQCmL8nsFWwfHoMXH9wjCXYc1u6Y62WsX2bGBB2UV4yPsWSYB1c6ZQvT",
  "key23": "66ffJJi7zs2XcKTXBy9g7kc6HRnB9fMHxuHQxQK6dWoHMBbdS52rP7DN7BR9URtWxyyxdyRNtaXqQnd68HfSV8Xy",
  "key24": "3NFLMQffiahpo6UKoQPynFssZUZJWE7NuFT5oXAQL6kw9WQjeJpiZ4sT3nD356mG1rzL91nEfnHQcwmwe7pnyA5U",
  "key25": "216PFsatwRVAwwS6h6ATx3vvLFRd3NYA6XdUMSSQAv4wdoZpTWteV9LCvoRtSWpBcBA58iAtrqsVWRf81QMWRphS",
  "key26": "5oeVncqyK6LV8JN69kzTXwJpkbvB6whC2aYyAvPmkXXZbmb4iFukdPrumpooT7wDM9RXC5cvBDTD8YLMKDwQmoAf",
  "key27": "3wqPktHk6HAEZu1ddGWpCLhwEZcVL3z1eFJVzyM4XvBVBJ377KDeHgrRJXFhKCqZ43q7eUBMDU62UtPSJ6NqAyav",
  "key28": "4DNHJQxHXzow7Tn6sBhDKfUVtJRm1waB3boamat3PhMXr7LwPfJe3QjiioyMyQEQwQw8mqaNCLXew6KoEmesYqi5",
  "key29": "2dFA4pvREVgnB6FQUjt1zM9ENZRyRPL5m87F8BWmTGnswgt7NGVqv6FqgQP6cejEpjYMP8EEe1wWis5pyUcicAUi"
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
