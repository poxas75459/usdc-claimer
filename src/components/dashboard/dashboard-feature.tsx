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
    "2rX9WrzvPWypEH5LtLd8yFEbE1fms9EJDZBpgJeCR6DUNrQCm1MHC8m7WDVgWN9SRdmLPik78QsQupYDtur1PVn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dg4xMcsAYj9z9omBTSmMxCfS5SNaRVkzrSEhhYbt192zsPvhAdhtNEsABVXw4m1C5s9wpgtAmNdhkMaxvGv58CN",
  "key1": "2yEHrQKqaEm8G2TikLT3KCa5f3EBp8WsEGXAyEiy67yrx5EgHvmjBZ7gAKrJjcP7snPjDDPYu9sBh7N64gcsA7ZV",
  "key2": "2q6g6qAPdWyux8UdZPoqQ91DTcZ1o5sibhLKPyvhAi87ZnMVzpETAiroPdGYUuv9qGmAKcUWttQpvim9XhNLPLrJ",
  "key3": "5U5n4wso6MrVBPqWdVBPPudsiEErNZytkuYuKBa7sCfnPRiZ9dbWuQbDqByH2u5LPRKDqNs9tvzH3Y8r3oLBdqwP",
  "key4": "4snBKaUnxY62AFoWHMG8K2NR2ey4EXkSbrd1XqoUwPyxt4qkn7SNYp5SDuza6rcoN8LMU63N9skLW5sWNKtndqnc",
  "key5": "2BwrYRd6rjinWYtCtjuEAtkZrjFQ61B9kK4AxvJc4mnLp1pKhKU6GJQRnj1UQkW39JiiyjTCuufxQS9PXVRVGfQF",
  "key6": "2Z8BNNGJkxSSCAHR5b7nuheDnn6Kk8PhGaX4axZPZSmj5UFWCccnomseqRwp1JDSszysXxLFroUQz78keCuqPEQL",
  "key7": "CWSyPS6rYnkk416rffV4t2qZ5dT1FJUegDXhqU8ZidvdZFbeYDyPMU6XD3VtmP2ZUiurrTb3jvzFwih4efDyBz3",
  "key8": "2hfw7Db8a3jspKVwLcRpykhcdpbu5po8oeHmg2T4owWHVjF9J68Tc7jxR6jYq548JvWRQm8yF6oWqx4QKFpxkfVk",
  "key9": "4VhwRyojxsEfdZoo1WkxJiSxq8NdpLogtuLHT9XKTUZPTskfFQGMC5wQsCYfP7Rwg96AFMvbyz18Bvh6R2tjZ7WE",
  "key10": "2SceoEZd1hKE5ogg8ywYbKAirue394FdzsrYAuwCXyQK2zgDA8u6S3W1VTgCeb5KctXgxwW4sJossaQtbg5YrJSU",
  "key11": "5LqMtgom9rcc93wqxpqFxanNCwMWbnKz5UtvBaBj9N74n8bvHz4t5HeuM7nsVN95qQC7pcpvVoF43gt8NWHoqHsG",
  "key12": "3GdtDAmVxhBxkjMoBx5FY7H7B1QShTTbUYfoJRMJTcPcu5wxUSM7heBaTg5eirkvqLmK5SwibJYni9dMHbjCv6z",
  "key13": "3i7urvyhXsBvhocyc3AQ7bun18sci7PdiWMM8yoAcqwGdt9BQCxdZKAhUVHmPgifZNkgSw54q9WiHkMntDTtkbPi",
  "key14": "xsFazg9FBnXjVTJJuMP56JhEPt8iaLoimJqiUBmR96a6tzuX2t7dZxHBSqmydkJCVPPnVZujnCLKj541Kkrud26",
  "key15": "4xqf5BL4NGgYvXYrCViE4ZSA8GKYdHMUYhtSScAinRQCWQgG585MrD9dp7B3motWHqvZWzWxSs3jr3ZYZHLuEwjv",
  "key16": "SiY2EobqcWMXfXVwhvbQLbU5QFnLYvLe4cirsUSZjq8EKUi9f993jASE1eacHd3Wd6zCcUZe3d1jstRWEQXQy7x",
  "key17": "4oxvsngMXpFNffha3Lyyvgvwv7aYwujo8sKAbZVVn9Y122Q6RhdzV5oSFeHLcnxGQGhXR5PwTLocz2qNSdLUXQJQ",
  "key18": "xyQWXxtuCBaaHqJ3Aaaf6tWxcVicVerS2FnM8hUTLTk2kLS6kPAmMaLd4rsoykXVDwauzMKejf5b6C7M3d6GWJJ",
  "key19": "249GoB5dwpHyBigXeqYLBMUMVcZyF8Gq8DAxeWJBDpMuUhDtosBpCvNiTXDjkkArGmr9Ee5FgM1rMzUNTDQJH57t",
  "key20": "464JW6EXJGHbG6Z2K3jiZXZmkCqoRxPaYSJC8s5mwMfSwB6TJYNKy8vsHXBqH7mmZ3rQaXPd5hNiEbEQN8qmk2ov",
  "key21": "3jhzc4CyfL3ovd8Vx6k3Vcq81pU3ef3ArGDMy8PSd4ZHJ6TAxzPZwn937dHvzGDAN3Rivrzk1jQpwBsh68YhvZLN",
  "key22": "3w9m6wQbvWTuzoKAPqdtsAbcATU2xcymdK4UpoNdXwBk78skJi27KPbNmQrG2YfgwgFS1Gwq8g6KHXyZ3W7udoSv",
  "key23": "5aTggYpvKeqMpPu7sUWuXfxpgFqfVJwiez3q2tkTqvjxzz9BhN2cxmf1a4bFfEWXy36CegwHypBcxRzvvZTZq8mp",
  "key24": "thfCWYbHgyHmDa4EcHedDsHzo7JGNkCB8EHbJYzGTEknqpvJq88hpq8aYowYV7pfpaEub8NHrYQ9m3yBXe5cNuJ",
  "key25": "5uhFCvMrcbZUDYoNJmhLkD6GubdTdFgwf1Pcg3s3n1CV4hGDyWTPP42eeCRKSJajzKCX3WJY2DfKnX28vxuj5ZWc",
  "key26": "3CGkXR4xfX1gueWG9pd2djYwtiGVEpXyLsgKwNVvTSDDh7p6WswomcZNQ2k3xzmNq7roQAZ5o6UA46go7NBzJc4q",
  "key27": "2MRGRw24JakRHsqNDNn8Ryt4R7M2JooiT4a4CX32Pe6fYdKWR8EdhFeMWvdfzFDbTHaxBVhSTCYak7zXvdjiAmeY",
  "key28": "5hSyKdGreo7tR23XCYLq37BFt6qRsRUhKKMmX3iBT45Hg37nyeFYJAyVG55G3b2L1jMhb1BdjNUBhvghzeEboCs7",
  "key29": "4zDbppFM4WHCTGCw3jwW5cnwoQfGHrS5a2sx2cTegjfunkr2155X6BNTxQme9LUDUWA9guSnqdkQVTLPf1CaUPCz",
  "key30": "5dWJGSVBJSVNYC6ZDUAytSjRwvuGuQLh1ar5fKEnTxy4hcjvbecxNr2j8hW2CFN2pSdnfo1ogDuMuVMdFVZEpV4z",
  "key31": "2pWBhm7kkjQ4ybyqA24C2AKMEU3DvT5jF2BoTaeQ94rcLjsUWfNv3LMnXmYQ4ZBHRcNJV6Q3vRFks6SWJxV4Kevo",
  "key32": "2L8FwhB7ASipgjKuhmbbHnZ7ox7GPUr68dHkEV26wzPnqD3rBqXUdH3USe3uHsv2x47h9JCu6gpQaeUz8xY5qRoR",
  "key33": "3C7jweGB3yJQ4HYnt7MRgbph3ghheahYjfi8q6kvF4pMeUhQvz7vdZB9ZRyyDcVjWBPxWfPrZgxQykhS7WnqKDPZ",
  "key34": "ziLruyMoCbPsHAHwVKKVtP9u9tBLCnDYwRAW2WDMK1Hg2Gk7eKkG2vNdbGGrAVyMSHJ6TnvdaeYZTPF3iS5P7FM",
  "key35": "4bNRkaSfDETbQVFDLjGzbmge6X9KosuZqDZwW5KWGpNXGZZSK68a9ePayF285oQGMVNLcQckEuWM3fU9EdZ6TuNY",
  "key36": "5NwWZ77V7f6JBLJn6cVVLEhgAJrMRvdiE76AeNGoYUrXd2EQ6htwMNzrpXZhSfWcmtysQQPnBPAzpXTVMfjVuVA4",
  "key37": "3t48pbTgNU2jZA6RdBgDktkKEzPA8kctqZLCgkX435suJh6zuL3RaHToZLNxphragU2U7pFsGQMrSLZ1kPrJzTqP",
  "key38": "4LzJjDqSnz3X2SGcA55esdDaWL2PetzjxSDrxXNivQ5Vis75ipwndcR3ZiAPQfV2k5AvwCofr15xVGMiH5EnX7BH",
  "key39": "5zeDcDUTvQ61doaHdEAfVKWk815n5egtE8T6WGaiSd1X29So7LjmtgFKc3KkfNwRtRh7zgkTyg55vkT6mZuYuJsn",
  "key40": "2T4rgqj6ChGEaKKkCAa7oLGeqCjoCxxv9a19rnWrhsm8CA5MGu7RqaYX6gajBLnBQ9DzPeDswsPbaFXoKXbMwABP",
  "key41": "6vhWGTwRCvioxApWEnEoHV63nGFFqbWKEeY5HQJKBKg4FeiAwF7hmHmsbAh6fPMxt7QTvsCBoGEuPVnhfh6gS2N"
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
