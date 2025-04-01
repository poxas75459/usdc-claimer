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
    "54b1Ee5Dy9YPeH7VxVfXvGbJELifm2EcpWRdxc4FKE9dhV5svTPqe2HYFT9LisKWhotdZ7hX3TaDyx8sxUwDyF47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gc7iNhuerQUWU21AKH5bicBMhBpaso5voLsKPufMBi3s1fesWbybNj1uxNT6dYa2NdG1rp6tiDojgoTxiSCPWqf",
  "key1": "3z4B8ZDbM6hR8sQJCx4jAdciaVoLgTircot2TDjbu3Lmg2mFQXkChKMwSktVyMgG3zgBqfcYaT1UF8YJEgfCkMm5",
  "key2": "5FXsd8yz1W723PDeoReztAPoa8iWttvNtyEDHh2JwtrTSJbFkprYqAQDW8XrPgnz7vQfzDruvjWz5DhsABNNvzLp",
  "key3": "2iVqwiMZ9uq34QAEfHUMyTVuzzGbSSMoXvz4Js8n2nXpY8e7y1vSuiC5Hg8qNUBdruFazt3EZ8SQofhzKbbgEcKa",
  "key4": "3DZESTWTgbxTzAtgQE3KSr4FCV2WumGu2YYwzB76pJ9xaGsLE6H5PsBojK6PzfKAzxgmL4qFM6wgnoucd8EkSfqm",
  "key5": "3ikUEh6AbJedz5npMB9MguQMQBzg5bjVyM1qKYxxVadxUrQhumUfuzmkVdnTH3KRwGY3dcKrprC4bRFt8ucM9Bkt",
  "key6": "5mu1TmgQfPxidVM5BsLJj5svmzBn5ykuThk8WgG28MqTh19GTfKHsZPSnskuqFUAoYpCVGCRC4EqnCjdPy9iX3Ag",
  "key7": "SHixbrKdfqWL79Jm3aZNrxUE1JMvrhHC8bsdxAvhguRn9gNBCbwfu6jB3UXhAupfWSrbubCn6s2qannBSY9qxGE",
  "key8": "4Hc6VtMLQYLHVSh8HyS7DH5ywx5uTLfeGanoVhM4WXhKR6G1DujpTDBGbgrxHHPB9WSumZNSYBsLnZ6aacfit85p",
  "key9": "31m9EYVCXvidN72qod7oZszW2Z63SGsuRb4yzjXg3owmxfR5MJfNzmnBr7eoKPw3wvxrMxdYHqDydwEv5kKZjnvk",
  "key10": "2cxVsoNHt3CYAxzgqTDhv93GDW7BN1oqNSpJSC11BSoEoVxYr9Gjf9yutiLXpQscuhhj5ZLWxAVo1sCECQ6XunrY",
  "key11": "2zGEherbaPKe73dPg77s7g22wKFd3J8VteWsJQdriTXUtf5qrgyZz41zeCQp2Q9sFtyZ4M1isb3yKnqoSQupDqri",
  "key12": "4qGxLWa4jE8ExcdpS4RpttSzXBNJjSCZXPVzkRaCt7k8oVQkcmt1W9v1T2ZNqjBHfnaYRpUz5AN7t1oxzNP2Akzn",
  "key13": "5VpdGnpu5ciePeEg5YVfPuVe7EtwLSFMqGzwQB4xE58UXp28gUT2xNRb8zs3aud1dZmJKfmhhJLaohcdG1N7hzE9",
  "key14": "3RttQDBDfEopRpks5m6wcU3w86saj9CLaoHJvgVGPKMQGVAxjwnnqex2WBw3gHtcV4ctgwvd6r2tAHr5E7CCNUXP",
  "key15": "5Xu4BpEJWX7MGeRKQMAx4m1o8easjSq1Uq6AJwdyEHJ42iUouGWPKwTswRVsB1pTWWAZypY235FRMqre8uf6K3r1",
  "key16": "2EnTPfUKTAMTrdA7wKugn2pD85WgYiCpPXXLjcAVcqbUU8ZB8hevLABnRPcgXNBP5uHWBziA4QWaNwvPHS2qDLyv",
  "key17": "55rtiAooEdDAfYNoAMZVtUJakFkrhg5eVLT6yWhz2GVVaWjQ2KTY9LpiSsSBGt34TpdW9oasGpDdEuAKDiVgQECT",
  "key18": "bmDX7emzebu6UzmjfhEJiksHTofAb3k5Byvn2fSE5viwPLVYq1REfLX8y12EggUJP7Zn8rLqPwTdXFjHgF7k6KC",
  "key19": "2mdXmZicKZgFaAmLxUhNs57xvg8CJ9SvXXCVshjo9pzLFF6jyqqdAra7gtUhATB8SeNoF7KaNzzC4JRdmCePVX5Q",
  "key20": "2JrLsUJDvkrgTfenkQWcnk33LUYVoKziVBXzm6UYqzonhkMRpsKScqWBSTYrjLP3jMWyZCXWh2gt2jwQvtuL5cMs",
  "key21": "5HLYf7orcFKXiw1go9k3VSiSqPiUEjkkVNAHMhhELuMgWPsydjvGHA86Ac3Cs7kuzNXtRF532MdLDxkLY12fWCWL",
  "key22": "5zbt472xPNVE3AxRt4y8XKHxQz8GkiEscFxKpxhGXjiLkGpKkLhApW72uFbyw6k72RHE5PgH9TghV6VtYNAwoNz4",
  "key23": "VT3ZhCM1PKNVgZseepup9F8FmA4jhRmpEMVJ8znUPVDQ6xAc2S4GCeAHGTsvQdYN9adf5HrvXvukjHZKcpuQ8LE",
  "key24": "3w1pzU74F9CMCtpqK8UZLGHrVptHsn7RKGQKwj3ggq5E1mPJUWHwY1pAYYgFhWnpo3DmpBJ5mqKw28fWUedch3T2",
  "key25": "nnMMUeXEZfzwmXLBb67Tpstqk1soLk2SXS1AyWp6DnGG7WfEcfcPgMJNxRz7an9ebw2e6ZjDyfXB4MUjF2SbBsJ",
  "key26": "4V8M7VrkFWgf2GNPaEqdKar4iJSQGEizfQ3Ryp1BxMUfpNhHFzL2VD1922r8oGk8qDWfSG8cEb6CwmVGRSjRqXy7",
  "key27": "GGmpFFxDvDLai5UkrU4qWm6rjCrV1wZ7eGueZPPo6QAKHezFfcPkhfDQ4pcczw9B99p9jggeWHpn5WHCDypYbpi",
  "key28": "2vMDZLZKxgZmDmEZrRHTZzB4roGS4ojxKqgDezcJmknMsBgEzwkuAsk4Was72qse5m95paPsb1Wf6Pjj55yvDGQj",
  "key29": "3oATuEXTe4zQezJErPW7oH8bxJVarpFZv7Lid67hCY3rmHhteAYAzW3423UkVTQgnbH524TKSW6CHKx9U4iuJC38",
  "key30": "3dayxzBkEnPdparpvdubsRQTNZJnLrHTPjbnNAzykgSk6KhndDSyGdSwXUbARWYFPJaUnowL5ohMDFF5JMkgdQWC",
  "key31": "3dsZ8sxpXHJ2dEhXjzhCz2LWJtJdg5dvEbi2jVaHB1q8wsr9GBFUoy2cDKJeYRn8Ju3g9pMLAqYySL6VnXogGGa2",
  "key32": "47XR87mua37VTWYL1F9DZYU2Evb7Mb2NiPm2q1HVRdPxcwFRXE1qHTHcpy57hDCjpQEoH6cCwPdsREzcSBmQy8Y"
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
