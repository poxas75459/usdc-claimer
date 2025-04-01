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
    "5BmL7ZYVk5ZzBYcp5U8qcLio861Kno2V2dRfWm4dLAd7A4Hj4shfNvkqjUPmDngkdEd6wdsXi3cb2jK5MJkdXm8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhpyXztkJVHVj8JHpk3BAUCbM31GyKqLkN4MkTRFCzs8iD7N8tnWnEWm7EnzKdtLPszfEV6UcwwYLvanuWKsT8e",
  "key1": "brWMziYvW1XveDSfTEY7GG94wACy8TwNgbJAduNjPCgr7Fg3XzygecBt4WVAqWVndiCrH3BSKDwnMAuAgHTekce",
  "key2": "4ytHkgzcA9qmTa4E1gUohY7dZ9rnxzAmvtFxkw4oS3VcVpEpatEWsEBJ4V2kYyoektpsUvm8VR3MbGxuuYjraKGa",
  "key3": "VkvhJ5cBCqp31cBJbMWRsJjaSMkbLsYWreiyXihL7xjdhWmvUtYsdbWctTmpF3BUSqGN73J75gG494ZiqZH9RMo",
  "key4": "4wHsBysKwgGq6dn2DeFhqjEyRzURR5PHherFjqPHw3cxwgd3GcQ2EEAnsdUvUfezwb6beTixe7rPLRuzabkmSWvA",
  "key5": "NCbS1EY3YKBm84dir698hUURNGUs2udpCJChjKgjiPvDfpoKb3HzEFKGcTWLUK4oL9WXxpJJj3163pA5Zec5JsM",
  "key6": "NxoKFfj7q6MDj9vbt1oB942bF36ksi1oqfNyYiGMK5mN5yGhznAwg57vAxt55aoLi49BHE9xHc5SQaoBXNbESv6",
  "key7": "2HcojCbPx8AnQ3tesFqTeaVcCHQn7exPHgyGYbmr7NonFrLT1S1QZfCDWsZTrrgnEU8F2fe51AztiYjcGVGMURQt",
  "key8": "2xbFX4FUmw1874YvbtcMHdvXNHALKBLRVRnZqpJw8SkVwMqvf13XGYSbuPNXsxjq8kr2NmuiKpzdSKb2UUqakRXZ",
  "key9": "5PGTYgGzoNJh4rD5DQbhbMBGG7YGx5jaitNEA6d5meovf8Lbikfr5PE1PmyD4Hdqm5CN3K8UwWFm6awpwLwaW9aU",
  "key10": "59TTqJ8uDrm1opusMxNitsBkncbzZLPunVdWvRU2c98giTqUHWQfTrzrhzaWKMpnpwAqUQqxTEHvC7pGgwLouNsK",
  "key11": "S11Ls8BTHbqeXvk38dsCRb2yYA18bhDhsfRn8PZ6n6yraGRttq1RawWUX8BhoKaiZPYmVD4n1TSsWnjfMthahzT",
  "key12": "2pSQHvX7MFzVLb2KnKm72RmCBFGhHJZdAexhdH9Ls7uhike9vKqT9fTFQi2ozqYv5i9VGaUJFdUtPBKsHdvXxJB3",
  "key13": "4afF24smj3UrKKknzib5VQkQP3MzjNnJrFaoCYCn7ocgzDVd71dYGAK7f3NDUVirwVtevRwDMgqUqYoY7aXuZTgm",
  "key14": "2Ne1NFFnaxCwRoGu8kD4UHVzkttRohvxtK9dqd5wqidWrKTo9EYzKSyeueVVECfBg4AeBN7NhfsC6BGijfguiHaX",
  "key15": "3fGgHfarRbXTEYkCQrH8W9L3E9xWT8W8sd3Q92ksTud5BreeUFmxMXkQSa2YFa5Bwd5BEFzBiuKMXnybwCLbt8jU",
  "key16": "2oyMPzsxpUNzYt1eqPkPCoQFG1hAGzS14oCPA4wgYmqDcM1A7hD51oHSRELCWuXd8wNDRqfG145XAbE4yCRwt196",
  "key17": "3KAtYZ7ZboNxj6AucBWsSh4K68nXtBfQF11hQjXZGEUxKNGcvY4SmLZWqTTfNedcuX7YXrnLSNgvJWfUd2vwRLP7",
  "key18": "49frr5f5pZtEsp1hTaKxJ5VkWb4FRFvbYS8kRuYNL2W7NcMX5RJrkP2yjjnwj5QnyTuSfZHhmAGT4urL7NPBrND1",
  "key19": "5Bhs9bvSX8W6wiUKydqMvu4SybeEmXaybn7trd25gVnyhziiFoP7BuVwJpU7kACq4e9QJC5PBVJ59EQfCogChT6p",
  "key20": "3rWGP7FWkwYKYUhG8irWB2JMsXnPeyENHXZm5aT6aa7inqgUxrnt4FFrgNhptAMsi5CC2HZMFceC9xZFFmSkQUEk",
  "key21": "55r9y3ir4HQfw85Xx6jQPA5628Z2A1gSaaBSZK6gkwvXaj8MeALhtrXso5q2LkfbT7YEMegT6ZrjpDqfyePKggfQ",
  "key22": "3oqjA2M33xY5fKNXHgRQkhqmUxpJgsdjLNghLSyseBCM78jaNVJXNTqrhaMrAqfFua4mEhpmbLYttnkpRmczx8uJ",
  "key23": "5dJthYouZbSsMjqs2uPg6fpmNyXzSwBqSmKLTKLwQMWHbezdy3kP8dXfGs1x9RXyHd86Mg8mZizNJDqo9XCnsamU",
  "key24": "pyz8h2yGjR98yXCzXX6cuEvUyzr1aRisEMHRaFXN4A5xUMBGfJeheoP6EvD3zLEvGaECeQSYyiV7neAfRh5HAin",
  "key25": "5PUoLRPy8thZDWgwHNt1fXvefTLj2ThhTQHQNL144RrDMFUJfNsG2eCyRqNWdbjjuBjj7DmKgAGpHjBrQ22gevHm",
  "key26": "3paEhuphbBQiWhAiSvkUD38z5JVJXLS5vyZQafcpVCZPfJipLkifCy1oyLuaPmN8LrXtBnf6K166Vf7tbPanhNno",
  "key27": "66WwFAtpTGA4L46stnFHcRfyxtvC55MoVniKdwJAkkh9GeHX4CDpBYXKnzP6B9bxwHHro2DXn5LcMx2UN7RWrBMX",
  "key28": "HNXoK1DDeXU5zwmgL5EqEyX69GTmkAt9S88DFpqvF8wbrASqnKtxfRryFxiqdgkrBazcjM1Hws48gBibk3sr6Gt",
  "key29": "xuQC3U1p2TnaU55d2UdNEiYPHMJckGNhZ1P6obY9kKB9HM1gk1ZwpEkYkXYVfZo4SkZoXoLW2Rx9JmwHA4PKgfT",
  "key30": "65adbjjfMW68bvzbemYDKvf7wL3TQJC4wDbV6M8KpVQyEQK3obArNaN9eQdAuRrKu1JhoMjA8dbqrDhMqzpdVvKg",
  "key31": "fKWUUAod4PkeWHKUtE5sqjzSUCAihR658g7o5tBjN1oiRYAMNDegqWTihfMhxuUYghL3LtjHpKCbsHiTFaAQMqw",
  "key32": "24PDwwB4kSwjBeqfXEnE7jFTGgcDanpyWJJGCM2R3AFBCR4RTYvL7BF7ZnipA7PP2nEcvSFn6unVjrTZhHqaEuwQ",
  "key33": "2rxSBuEHyhWnA2jUgEsk6DewWaGod6GumF2jnrtCiAHW6g3nCGAtWfYZnmgoF7ckDY3hU7WV9QY2yXjJKbFpkfou",
  "key34": "5aSaT3EF3aRH6mxxEdBHpWuVf9QcxTwrGoqqpDwEPkVyFkWwmuJ6dnTCunJx5yahJQHophdskTBT6VrMEMhwi4hP",
  "key35": "5ALb5KCb7CsETk4GiVNkZMfG4FDHxJZmBU7ahCA98rKAnLPQYY9DeJgP1xcBDiJvCDK4TBBnytsZLMfFVhHJWREQ",
  "key36": "3ndgR3TX5GHMG19iH2k5eSfPaTK889aKKxUufdY5qrR8msTu2SUfQPigyeYPxrpNG2udqo5ZGdxkXZyXHrCELik6",
  "key37": "4rR7wD9E5gxjys7ezB7EfnPP9hXfGFhea7YSDoMagT5Fb3Z7acu8tM8d8WRj3Qt7syQquryVaLH76z34UM4mHtEy",
  "key38": "4JoB8aMSnMPmw73zFF9u73FnPiveJUZhYDsZFqNxv41E7ZLBPLpLgbov1sZQzuyx2eNEQLQhE5kU5ru3ZkXQ1MET",
  "key39": "4zPEQDmP2WanQpK952AAxCTT62WySanxE81LTWwiUMqyxDes4o2nuoxcVN8AaY2um4psFhjMsqnhhxZofqkzAu2y",
  "key40": "3YRmzVdhp7t4EB37utoovxXukJD8uRqf1GJ8WTT9tKZj39iE5oGadNUcBuAgQjq1jqmTc29zwAiA3j17z6stJeV4",
  "key41": "2fjo8nSyQcuzMMd599HUuasAA925Gk2axoKMzV5Q3XakmhpeJUttTXtUcE4dEHvnYXgTP2x2BgZxEoKRE2ZiWGMn"
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
