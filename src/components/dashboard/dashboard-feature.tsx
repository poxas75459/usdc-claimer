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
    "22iix1sPZa8TqxPr7YrxCFN1AJJSdNDpZ2fSryX4BorcyYinVp7LtTBuWcE2S7BuLajr5HFAYsktQMPZzV7ZHm3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYRxWpisLw6zNXZ43U5EmvTuSJhnydBWqYXELw65yxJ1iqogzv5yZomBqnRtiFNQdrk6rc1MLDn9G8BHMaJJnZa",
  "key1": "2FrK4u4ci6dKSJ3fTANQGJ6xNEBn4CqoQ4UCqNiTsGmVpCSn6m7Vw8wXFkAzywNJyjkTy6MqYpaykeU97wcauACH",
  "key2": "2X943hUutuup8UipH449f48i1mwXyFSGJxxJmJgBj1SMyxfkWkfQfvLPYReddoitVthsxrhvb1umwCCEBN4TpW9n",
  "key3": "49Dv5EYKUdX2CLAvdWeFxV41ebysFNMvziEN2aGYnTgHHcpUN6m8MLiV7Ue1Vz73vM2WG8EtjhXsTMYdmX4brPBQ",
  "key4": "4aMyA2vN9DfYJnNLaSPsMZXt3P4bPMf7kUMwWbUJE61kqQYHRKyayjbWjuTNx6HQqirJ3NTD5gWyEpcuQEK7b8EP",
  "key5": "4odqmfL2Li5c7E4n9owQfGzVmMJx4C2vXVdabggBcftwPf7zFJg6JkShf887C19TwoJhUmrogvqYUxSyjmetFw1P",
  "key6": "3Dd2BRBgjScTmiveEZdEstqMS1Ma3zCjkTeTmPtXGyJ8DsKufohnJ5ZrduP5QpypMBPkDHwghscLsq1yr8gAX8gw",
  "key7": "uFDKzKSVdEjGxNgJXd4eAQSk5rrc2hNRmpDTgpHdQfTci6U6EMA9uyjzxBdkn3UFZXkNXnyFGjBMHd5hhXmS2SH",
  "key8": "2PKZEg8MndVhEqWrh5STNdak6u9R8RtfSniwEeU49JUchtfPtpYfrduaZ2LKJwr7rUnQbP9Mmrwso3vsyQBuc6kr",
  "key9": "4ppB2eyJw8GKH1xYpbkeuC6Sb7meTQYjeAxd3EWdJ18GTNGRuXy4Nfv63zBp4KdVyKgpT7ntQFFCRL2K4YaPHL2j",
  "key10": "ZYRAe6ErP1657fWHRzCrbpfZuZ3XjyqSn7EptKG46GKdFpgU4S8AvEdsTwfE4NLzJqpfqDFwsRpvLRh96AhU1G3",
  "key11": "4tvNCHhAeuNyu5qVw8T2pR4WYaPznYR4c9Q2AJRFXHV3A9bD6JhwEG96TGEdzHGaWDRD2oGUH7Qf8QSDzLG8FqE5",
  "key12": "3KJ13re6TN6wA3kq1etKgs9wKVdjtHPfyVyW9ea8A18tUThMvq6NcW3cLsztt8B1k2KRTyvZPMibS52NczjvDjnb",
  "key13": "4PP3w3vAZHuTvk5zGcpXX9NesK6thHbsG48F9RaoaPJTsTFvDxftLRiTaTJMDiJu8mpFZpCWhoBpGndprEBqmez9",
  "key14": "41nHFL1estvDvXRGUsF2QszFWoXZgoppUeS7tBebSMiQ5a5hg2Eg1FWwrAgdAUYkx3tcKyD4nbdAxyzp97zwNd23",
  "key15": "67qQaPr6KrAYhbnHJ6x7474FPQyvdqssjATDwtunyte6YVpxWQUsdhnz8LNFKptQTq453ws6VdEHmyCCpsEuyXfj",
  "key16": "4HNJc4K5rCfKF2QDM24ApsvHFiNUJ4NEfdgpkDwJV5DxJVPismcvtEp5wKKNAagdhjYgj4URki4oeZe3ts6FyNy3",
  "key17": "5HSF1nr3bt773rnwmtwn2Htyrcy2QTFqMeYnR5wx2JNqovVyjU1vfijKijp2ePJwwCcrdnNegq2WcVxJ2ghjpp8n",
  "key18": "4jLU9bMM6wLUytHUbqF4uEBwbUWRKjVSPsmernc3SEbLtNcW2GxtLKGfKxq8NkQ7NqwrcWHnjhJyMcPmeXt9hsfs",
  "key19": "5tMDe98qtKp75D5jzSvoHhUQ5J3jpz8Fqod659WV2491s7PAU9gGZ3AMeg7b81H2XZBioDx7d8PDfkixgZcTBzUh",
  "key20": "54jc47Zm3XJmfiadSBh1xLZ3vf3aKqYTDgjXzWSRgAG1FSvJdBW9szKXdUQXfU3tZQG6RuEnQz37Ndmb4BUjVh2s",
  "key21": "9hXSfwTroib9ubzFjww7i9Sy8FsqKJqBCDqGtYn1zcBF6N2mRz5gWfQR7nVKfJ7EdgEttKCYRQ3VeiVK3yZVtTM",
  "key22": "2A1UdH4qkbTqtgSuFsMMndzDPebWXKPhcPRBaaVwLkiAXxcmqLTCdJm4Pqq9Ds5sAZ8Wf1VauD1621vTD8XG4mx8",
  "key23": "3gzh7aLEd8U4fGdMq2rC9gCqm1vgHRDV7y95dVjbkTU6XF6aAM6SDa43QgkyzvUAEccrovmeaBMLfQkTntmmz59N",
  "key24": "48s6okyFJAGLXBCBQk1CxC5uLTPEC5yk3eZqfk9gTKetRq8DnwuCvCGKcLC4W3qQBhQXR6pfRs32DEk8RAmXZjrp",
  "key25": "2q5575ZUNfHeLw6Yec6MtzuujeerSdqaYiCodG9GaX5DYAs9iCSzq2RsBGfF5362iYYyxSiZDhTL3vTdH5A6BeVh",
  "key26": "jj2a3EM497BXAYijy96CyoYrDKW129GyaA6Noqf4QVPawfbLvemESCVdez146igzj2yHnrNddFXtNBKLhp5o4Ex",
  "key27": "4cuJc1oVaHRvkwTVh5q9isegaGQEgFvrosSMu1G7p8Po5yzyJbkHtXFueVZJLyqzuMtSWkVtrP1NrQ5f3HYn3BgR",
  "key28": "5gDjyHkSaVsaAbF1X2yiUUCvPRPJFgq4v9JvboJWKVTVNuPGnWAxyv6gHJmrDtHZoA76B723Ui6qPDzvtmvT7TwT",
  "key29": "3C97jsmWBHGAB524mJ2GZNWRJtMJ45jVYkMmUru5kVywYLgREyjVLP5f5FU8YBXggZRo5EtVwK4aPfSU3PGHM6b7",
  "key30": "4Y9VYe89XrN5v2q46BvG7V3pUG5xFnZTW6mVmyf1JcvHMkRGM2moP9g4pLWLUGD7e2oWXp1emSYPGGs5Jc1BAGum",
  "key31": "3DaQNExx6i7B9whjEvEBPEBoDozpGjjugBVS6J8qyUR6xjur7CzuJac89ZckfMe7huA7gN5AEm4HxCErC2ByN5SG",
  "key32": "378oF2wMvztGGAKTnh5ZCzTv5ZQtdKSDmMhWeTsA5i1S7Ehn6qt958XoZUjmmjYfTc2imimqPv4WasXVRGs7FZos",
  "key33": "64HoKX3W35LE6ownmuWR27yeXXvsVb2PNpYtF3kRZiiu3HbUgAbhVACPKuzuXCYMFKBrWq3WU4k3PCDcuaBLtQ1J",
  "key34": "3QPTvJAfYgKdkykhjEKFS37T9nTtjoTAKow1wawX3igQPLTA7kixV4scdxdSUuCKzA4aQT62eDcexHwCCryMEkQo",
  "key35": "55PvVpybBGQfERAhAikQ4SNZfT1gR3kqsqFo5KVrcpo2iZXBVrfsqYKtLmr6jXLeNmdMG29DVLBPo27kd6CVVBXw",
  "key36": "VDMYoQEQKPxaDFRHYGFhq2zGPW1JusJUP3F7q8Vp8YJcxM6ghqMAaBnQ6sfqqvjy66of9uVhK9oQvKywY89BnjQ",
  "key37": "4qFjpB5XUMXJAJQ1oK4jgADpoxa95161HHuqcyAPKseB84XUgucN1uUb4aGRu5RYGGHVevx39Yi1hP7JJgaxHb1G",
  "key38": "2SmApcMB142eedh1W6kub8epGV2DkTarqxNUDJb3XxgByXq3MXuvo6h6MawV4SwBduXfkQoCkS8YhdP3KC1bkC2s",
  "key39": "2eCVkSR7wHYaykB18new92M1ynhZrQs3S2ve2RXxsuPh8vTBxsCJEDJgVEKxncDy7XMLSaM5XUxXeKBDjWTqYVpG",
  "key40": "2y3MCaoVZegK9dFQVLNF4fFXKHxykY3z3AMabDvDd6SbcRmYJfhnV2Zpj4JEJKHn336WQC1QrFsKpc5uGZwdQaVN",
  "key41": "4S4CMN7uPBJVUgmf4tRPXb6rxNgbLZrVEutrce4Dn8KDNDqBAtUSgyv5NPUY14UY9JRGMVWewnB4btKpaYUPaHCH",
  "key42": "9nBWPaAhb1VxtFi1Zi8VzvRVNK5ncLdoqpsSSLuGgewtmUb2WyyXksJpeXKtwjdBby3YVQ3jJWzJWuB3stVxuHz"
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
