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
    "2ZJ6gmt6Jj6sd3Lv4BCq9rEqKm15NygHN7ja8faocNW9SxVn8karFqxFYQ8q7NkAww8k4syQdgWQP4S61QCZt8sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53RQwieVE1mJeR7WtA6X6dNncDLWesPnYtodfge4KTUhTXAgBgMahsgB5Uqm4vX3ygtsZ1DXWWT1yRL2MjZLJcPH",
  "key1": "2AhEwtbapQUdiofvXRGuiJAw8oPKjdNejN8Ze3JzMT9hQK3ueu9VEP4pR3CeFn65W8XPWDZKm37DSFurg5R4HyvA",
  "key2": "5peS6iJrupS5sPuDuLt1g96Cnr4ayVwszWrv7GBxLUFtnwbDLUQizMBj4JCsZ8XPKLW52BXtLJAfEVKD8EUEBEZ5",
  "key3": "22qMXA95YVRdg5uhgmjxrKhapd2bAjzTJj22Fas1AWVEtRPUuQrJ12LuenidGa7HNPMuwmd3GFi8qYiaBz1zxSjg",
  "key4": "2aPA64rtpiW6tEkaGb7NaNWQjauaoYQRH5T8R3kpnRR8tJpM1Zx4cZuYcJm9WHzaAi4K7qF6qmvjC3Hy4mJMkbWy",
  "key5": "57LTtvDcyH6vHrY19UJiBgHR5tDuK6B2wh2MdRd2pzxTMJRUrpQVLza1keFo84fuGnmmqF5fp5hrvJP1KEeoxCcE",
  "key6": "4H98dnqSRx4cjMh23qPUsjswDXvaduXtb5F5xBw1aKdm3o8QM5hcZqEqJVmC6rjLALbmqnc1eKUmGcf8nSbH5ZD7",
  "key7": "ZvfdpjJeNjrWRBLz3oc73demH3BGkqYjFBK3WNWJWy3ZcVCZyYr2Re1W9HzkZXhDZQe4WMQZjtVmwtt2qWsFihP",
  "key8": "38uAGo4dCgqHFa4SdJdkxd6S81oP3cTo9McvVQin7jnWmUFVkrsBjqLiHCsEoBLGmX5hUsnoD2nnnssjzRks2ufD",
  "key9": "5PsNoUpK2W2T7YW3ZnvpcFFY2Uzc4scCsuhJTcHx939qhhPfLTT5qNWGGjUnxtJjyaqhtsM3BE5H4Xg8VnkZn962",
  "key10": "28XnACwABF7bwTod7ZjzquUePQC9VWzPDx8U1Kocj69YhXnMDPewjsFx4PUBD8pRaGJdBmWf6oRu7fhMtbhQXP7B",
  "key11": "4JTM7wPjp62MBkD3q5YGjYynbQFWntwXqtmcv2rSuKFivVdZNmBU1V2KvTpUyQBeDTVvq3QbPwuXgrGUeP3LaHco",
  "key12": "5RYY1V6tRh4ePEHaWpk1PoxPJ2Di1gCJn5tdqvWqwkvy3gFgLz7dkNxsr2ooXq296MqdnTfXPN8YGKDddZaghS9i",
  "key13": "5yCCKbpBJ4oP4HixtW4UfuNG3cgAyVNwhLYftZxaVWUvCu9f74CJzcEZz66Rapg1sCyEfMJzhfmgfuTjH8CgMLUV",
  "key14": "4f6SWzQeXMgVhfoHtR9728gsaWYjmkA8p9xpzo6349Vkwh49uzT3QJ7N291JTsf3Ztin9F7yN4aZV3iLL18qa7V3",
  "key15": "3UWQShoC3pR16RmHvfVrEfz4aKTjQbqTHBP52qPv3TrbS9RYNaPLuQCDqiZXtywsRBCrChP3VUAn5mUTJz9KjKrk",
  "key16": "fravdnPBt6YqCyWF4B5GHc6ajiNfHRjXLUDuQWmr5Axa7fKJhpv6bAhG5FzACujLu2Q4BCogivhG8j591e2Q24Y",
  "key17": "2eMpjjmKDVycNPsdo3dahBovALhm8GunWiFNiKDiKwkoyRZdPjfsHYcbWZxsAJumLkBpK1JsspNYR9HiV6vULDis",
  "key18": "5rUuwCjGnVhsxQeqAbfj13833epDsSNQea65gvVxjavju3QVXwnDx466iJ6sEY3s6zNy2m3QKnxFRqcTqdU31YxD",
  "key19": "3TRym1UhEACL8MmtLxAELSKoGWNV67wK3McLa6U2JkR5Gn3HUpkJpQ2kKJ8NfoPtJRpXbePY2wzDQrFfkCHdHRuL",
  "key20": "UNFZr7nkcqveASg7wPsFwkFrf2QboRVTjG26hMAeUhcNo3HXmL8CfbRvZvirrQ54KwA8G93piS39ifxLt5idD8f",
  "key21": "5AEZktB4xvGzMzrAMnRKLuKzBs5afe5sx2zkHmJFP8sy3S6wPP1kES3Jkt9kWnCMYT8YBaQNDgfQqeQNfuivQaAg",
  "key22": "2K6PpJeEgmStq283124SVEckTWRFoWJj68LHpyPzKd6Q3CM27zCMdQzMjVg8PakcPjP9dTtVLcmuB1p6siNXFj1G",
  "key23": "4XFVY8T7qEga7tcPuJLZkkC596q8Qx9GoSj6AaUMeUUZk8VwUqsGqFsr1tj4tGHvQJnBmfAkVcU9hyuo3nxfMGXx",
  "key24": "4Qt1johr7YkoNK6HEuPEEfETsDfDdNT9frYWw8cTPr2GGVaV2rgY6Cnj5KybFnFZLpcsFAwTpesyEZkCpTQp6qDu",
  "key25": "53RVM1ShMPo89LE5wgwu1NZMzcSqiUabm4Ve9NfyBQpUxJhT1C4t1g4McjypqVAn65wWBFfHAH7rJVo7iJxdKsUc",
  "key26": "4asAjcZJiJTNLJ9ttCDMYVZpcF6CNRr68ATBv4zvnZXgX9LVPDw67ZLFir1xmH7JxUyxsZPS11jea5beKiQs2gxn",
  "key27": "3eNuVFTzjccFx9Cv4pzuFgNoMw4vunvANsY3Qyzvgch5GRLZ2abruJTJ4xC2ZyqXNm3HK4q6BixUdSWD69qgs4ie",
  "key28": "2TdNv7WixPcR8XPfwk33Q9i9Bqox7Hk8MpYry4wy18MjPoTNqJCwhkyjmGVbYgPm1TZ35fqnrnTUzQxNZK9JLknT",
  "key29": "aKSJMRE4QzEeS3WxzEFr3728o7J9XEuvHKZ2ywL54J2PgsSUwc2G5yh4GDHhBjPqViRFNZyP2vZjuNbN5LugkV7",
  "key30": "2eScFKCd4MYCSASyXBmaPZRYhELkfKq8zmdXk3GheqEoECqw2EJFuTMfyWAqRAqgMNiy6fDcWfWp21QzPD3EiFhu",
  "key31": "2UzWMkHgXS4Gc6VQ98SCRmB3nL4XNLgH4FaU8UevUqgWnHhYz4jqU6fsVp1Lkhx62AuSZAtvvfQwz3NvsbhY4uey",
  "key32": "ucAhW4ebDpfwgheFfuow8qnQ95Cgfsikv8wgyNMPp15ndXTmmDcKYdN3dMrmfxxiTpokWctEstYWJDxEfqg7Fqh",
  "key33": "4LgmUHRHCgDWFNUNrngpwxFfv1UfkzcAWDPkQ3gmSMWAqVEipL5wKMDacerwidivw6vbnJzntkScmbwnhDibrhEZ",
  "key34": "3DZVSNfd4vfehGPWMaCeJijEzbTx2cT4MsnA84iQGwgy8LSQTFGhH3sLEEu9kBLYqWR7GdqCwdhN3m7kmdRdLLqX",
  "key35": "3hqszyKoueh9CaQ8fZgPTjoereVLPKwCZnw8GAQQsDcNyC6E3ieEW594tMwCk3bmPnKi5rRH5a9innx3GATxZ9zL",
  "key36": "4xiTPHZCj7vXhnmzaBpBLBkbcHVrtNJMgjVKLk2NUwxKhxt8SmPbrbUp9LgpYQKxYzkqhGk6YfXVMkvenNYqbXgK",
  "key37": "31xDw9RQZ8C1wwto5kS8BDMzN2XEhQqhFu67PaGxqBQaCkeKXhvac2Q7J6QHaPZ2anATWrAT1oMVhgkKdyXaMWrY",
  "key38": "3ug3ZxHBAb6NYegk6NzKGDgJgxXUMpCa8g3bJPUfpGgcZ6Dhg7rKG4PpG3GjqaFkaeFMEgVFgtMrsSQ9aFfwQDph",
  "key39": "fXu6PErMurLdyP92pnovWvGEJFVHDP4Qxv7v4Ag3a68d27vWNb52iRq57QD6vqd1zLwR7DNox3wBSfmWpdpZapG",
  "key40": "4NBSddYFCTB9QQSUYBGyLj7iEBnaF6kXTUBHrNeQciHhRt8GKNTKwLfBw8dpZR9o8KZToLTqBPN3gkHTj6BC4Bk5"
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
