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
    "AYpmAuzV62wxeeZ28ZEYHPCSmAY8KzwkH3TX1gCifiM21tCouvLxRThFg3GuNiH4zbGmCpn4u13XX5N8yMdLTbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEVQaUpTCtGB8RaQusZRGkqcZxwrdHPHMdijvpY8FE4BtDnU3UdtcQ5ZuXu9EWPDUNXcVSxUbqcNzgbE8ughFfc",
  "key1": "49FqteGdiAaNM1SGWwwWikjhCMpQ9tMVDbmaPY5817zAqjsiokazV6g7KgipCCs26ehzTuQJabYKazbKA8H1yge",
  "key2": "2rWGU5Bg5yM21ef34VYy2Q5tA2dQDwH3w6YrBKF5LCGNiiyVCaD8yi4gCnAec6Yz7YTGLjiJxi7W82aMunTsmr82",
  "key3": "2yzEX2hyjJSmqvzALbRNCufCUpomiveVD1MEKJW7ikymSp5RiN8bgxEme4KAGS1fvnaLRzJPCwzjz8UFNoEdBgiX",
  "key4": "3b2ZdRSgfYvQPuxUi8e1ecHqSxMcTwPEAaifhmJBH3hroXJVCdgu2LL2j8dPusjCyLXktSW1TK5ChTcv2hjmCAdQ",
  "key5": "MzLSHYfUEDmCLPSadjJwynHFWNLABXc6iCKZ5m87RXgNECygPHGryS5hRNZdJSAUju2WYF9VCXcivvW9ad3eF1c",
  "key6": "4MdChHdguok2LuhT8BFd8yJUqhoFRn8EFnnnuTYCyfdGqcVaNnY5Pj9qa9VwVEnFrt3sXHkddPa9jf7z1igQviM7",
  "key7": "52pNzZqxAoxyVPoh7gynPTnNdo2apouC4XAYTXRM4e9DZnwwtQ8hhTCF75vYZm8BwpoeSZ7eTSKzs8YvRwyxwRFP",
  "key8": "5mwYLo438L1C4N4egdhFdvucEAq8rrvAs7wszbvLp6R6c4FXcyu1CLQgoUiHe9QuEvM5ZseNAVnCfM72EWkKYhac",
  "key9": "3fYELBakr48NqnW8XdK1GsdVkxz2GFcjdVm4ajUTnvzonV8hanEC1GTNUAj69ZaZf5TYjTTF9MM8THovgKf8M6hB",
  "key10": "3XMptX78xVYNzpnErAsG1YFYCJTneNHLSypYnWh6gKaxfosGSNKa6hhaLUaoprQPjGGsYvM89XJkjitNTmz8ExqB",
  "key11": "2jM6xMVuozYgeMM5hNEFBGfz2DqkzyN8qqFxjjMAdqsUDxLsk5gse8jTNASFEj6CQYm7nK48JEp9V2Z2sfUd1tvc",
  "key12": "3WYDxasZgSU9wp2ZHhPvXNoj45REDepKUa2qyqaR1R7PSGhZ1MbiFpAy8TKckBmx4JYhzA9sAVgxYH2L6qoegBSe",
  "key13": "5t73kfQjZMFrBqVRLSh4fEDRAeCsh7JQZHAENkNFzBj3ozTqRUiSk58FLF9e46XoJoEp6wdkAt562JuykYBatc8Y",
  "key14": "3Qh3wffhxwMiQCapRncaNxXHnub9cgm6R7KddoWjXP5tBVW4ty66yigtrXbTTkvVEFjuTGE4T4vzeCUKAtVkd7jy",
  "key15": "3D581Y5g3MbhNyu4GaptuFwBk8TxcfkC7W1ncQgvaA6Tp1aMAdhCk8he5GysRhqySJMpQ2YxeTbwoxqdj2g5Qa2R",
  "key16": "xKcho6TyvCB8SxuqnBrjS5cM3ZCYGDyaLYeyXbdMYEJCMoXWfNpVpc3aZF9XB8m6KQGkBmz1gy5NMs1Ae5sMyRD",
  "key17": "4iqhMGjsWoWqiksb1SEd1rQ7f3jfty4UapoS6ApacBDoZNio94JmdHja6tyea77RiQkgHtZ3QqKzQJmNNnmHTyNp",
  "key18": "3um5qXugNLSfTH2ZAc1fchU2JtAx2mKZxFdHWhCMTQQnuDdCPQjUZKUsNEUztB2MQnVvE2saw2fQBZ3Q3TS4Kr8h",
  "key19": "XvUE5xVBaocqjoXXzNruVaNAy19U6idyFvgj9epaRHwdSKAg1MNpZVa1TzKR1PC5W81nbAB3EgE3LHQdQKfxzcK",
  "key20": "5sJXod1edY79ZQ2kfUwY25CTCA6hVyrRbsNYBmK5WNuhDManhuKtNrTy7gBwZmi6CB63RqRCXNsH2kueATeLum6d",
  "key21": "29Nti7q8ha7VoeqRAaBPxLfFfi5763bWQNBTbUweDmwrFu9FX5cbM8vU9rsC9uZuwnVCdwJZj9Vnvd5LwSagEq6y",
  "key22": "5s1r92JTaEhjqF9oACgbf5jxPSkf9Mi8TeDaDcX53XqBX7HQ6pfovFnvEo2bb8PGrUxTibSqsj4uDhv7ng1x9eeH",
  "key23": "62bJtVYPgvD64GP6oZf3SfzibHzkoaPMPWrJM2m4TRm3obkRWR7neENxNLTHjJB8zVL9FFM3S94js9ZeWzzuUtk",
  "key24": "3YBuC7vYV6Z4w9ywiJimfpU9n9Krpxam9qNUPcPHMPWa1EGmLZkpyAwHgWvgp7Ph9qt7h3JkDyTYkXMEYzsgJmvG",
  "key25": "3qRxN5evDhvbiJCyKtBsE9kArvZhSKkLuPVKwrwnaoR19YnjFyqontRUiRdZ9LjX7qYteQb9tDoZYsZrM3ixBVQJ",
  "key26": "41MJWBGEFcPZdPHKCU4s1G8x5BuzVxfCxmR9jbDvzWVB7XxJ4ir7i7kc9pYPAT1X486PNMxbL1nMjVf6SfNknR72",
  "key27": "461Xe6b9bFaqGPTPZga53XTgf8CQEGZ7qymiKRsCjLsYAVGNE8go61nQCrqPC3hpHuiBqnj2gLUK3wworQtQspMP",
  "key28": "3uvTiQrF6PvnnSs2zmuCwjmZoQNP8cZMXKnoJiYgVT7d6uM2SzkjgxSStpPdCZ6F1mW1E4BzncFsztexeqSEpvRX",
  "key29": "4i78tzt6QBupYjCy5TRTre9WsT8RKnXJXZcTYjX2VVBEdbM4zcv3Z5P5kewU4ZHScjRxTM9b4AzYkXYtCSLsv6ZA",
  "key30": "4mGXzxoQsqRBvTSkmhv7u1T6hL1AwxvVXyqkfmJtvsVfEfHvzUT7xNK51xkitBDTBzHhK7WVuzFniYLRDsUtDNNo",
  "key31": "2u6wMJ4mSdpJjwJBKBzgVxPVBsdPsuzmmL3YgxcTdpmyBFW96Hv2KZALLJmJngb8Lq1M1cTSoSWRiC82DVCwR5x2",
  "key32": "KV6T8bQeSwomgKZujNx9rTa7vKaFWLLhieTcfUFbfF8fE3QAqyHArQZXioziX7n2cb6Xory7xRhtSvCCinvEmMH",
  "key33": "3GjGJVE7esbJaEFnD2cdLQh8rZkxg23TwYqDKNh8Pyx8RQq5zhi7no3EwpAEMaCenpiku6TXQiJpiz6mHDyXyFkt",
  "key34": "31cpK6NsjBf1iBdzd7oAxXrW7TLfNQjq7E2V5xEFqiL47oPccYE92fwTqHE8PDP4qtUqhVXzjsBCf1fn53Nv3vg7",
  "key35": "znX7gT54KnKcqBbuRA7cYmfMjPhVenEH6jtPAtRHUxnUGGgh4mtFv2Gqrn38Lx6ZDHJPUV3mwGZFQnwbwBmLSKd",
  "key36": "3xo7mdaMogzAQHXFrnUfFAoCtoSeXJtSiiqfkPHYSeFW3zC5HAwnJBdLSS7ZGaezifc89x19twyknyQkJ1BU4YuB"
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
