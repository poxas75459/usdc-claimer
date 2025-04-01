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
    "3DAbJPHYkdvATvFwThexroMgeb4MSFQdp5v5wFPggWhLsj9x6mNNLQvvZ4ruMZ2n1zY1ZNANqsmeq5qxszjKzsvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5ew7t38m7iLHQhqRqLjqcdb9rHTwYmkzetHP3NV17p441TLFK3nz4mHkp1D7VZd1BpwcuadSFhHJxKiwFXEUf7",
  "key1": "GfyHeUabUZjjRj94YB2NiV1bsUAU5PRowaHVYZHNm5bLBafA19nmQGUji7KPBYbbQq5PVPHz9nw2gESTdEzfWog",
  "key2": "3ZHuwBn8p1CXsVdYJjTRfLsDsXp8e4JzjYDYNG5PHzghS76RXbXgyoswCGRjJcTEBUVHRHYbRQ63VruBLaENtQLs",
  "key3": "5WBW9DngnQAKmYMBz8d9VuhzKyUh5nKwREismPcRpbSyLB3QjPBHiBGNk7tTE2JzNusBgMxphWH24QQ7fBxJSANE",
  "key4": "5zpCXjUDfntykBdmkBHZRCaCiYRun2o9ZjDXP3Z3WWJz6Pvd8Bipthpx8XGU1BsLwxMCwpMLDmxp3va4rCy47QnC",
  "key5": "5qMCY94fRgAvu4QxzfiHUDQ7FhMppoPxHjfvxBBgYVWq9P1W4jXb6hwS29aPEwg5yQCVs1Rui51uVEEvvrT77Cmp",
  "key6": "4EoKa7rppcza5h7DJz5yfCnkHYDgLuUPoEjL3oVA3DidQjGjXaMNqGUaLqPo1CwzeBehpQc1UcMnzbiPsMmM8fhv",
  "key7": "4wf9k6u1JrcrzNfFzviieEwTYX7ENxmFw9gqfncPSUEKoU2fhAWeR4XgUpvuRnDbqTUw2tnKqMPBd3euWJmG4Pom",
  "key8": "oGsaHTGiGWfVbKWQvdtNGc8jEDJFxuE4RruzSz95Eg54DEGnmCAZ8QqyCFKE64qHkddHpp1Bz3z6xF8RDdirdTC",
  "key9": "2h9YGErm3gJSBWXQZEx2bLRDHjN6EsjRWKqdXkShEBqsX1sC5UndGef1fKjrqujcvBNEi5uE1mXz1j4TLFPKCvt7",
  "key10": "37FaLkueyLPf4usRwvmz2HHFbJ5sgZnkpKtSJ6EHhmoUQPKuaEgapnZyHxD8nVH6XmFb19S2vctTwjBj1ttenNeg",
  "key11": "2fsoh8RQPtLAAizYdrpMU84kV7EtXfzs8azo69jvc1dPokwee3h2WRiZaBAqbKHeto5rMSXwdg5puobWEFqCuWYK",
  "key12": "4m7qctmx1uCNiBsGKwgvDYMwRTwPQFDGo6u8WvSVPyKAaj87W3Y7ALgDpW7E3hcACeKyrkz7yrbrcGxyPSLh8Lhk",
  "key13": "5rncTJwFz2nVrQWaLFWkA7WwwYaG9mNN8LhkjGiia2mUViZCHjBNSJNbtjre5QHp3e6EdvAfgYzZ9jv9WwkxdJ6s",
  "key14": "2oteUXpNRZXCJBwm5faU5bGnab2Cf9iKbbhA5EYtLSjNX8db62cb7duaDsXxhdoFE5iv23bgozzyZHgJJ8sieuYt",
  "key15": "3mRRtyHKqjSgEJdwPvTWshdREYXBTe8L7KN8W79qi8aem6NJgr7e5YGXV5vVF2C43hQBh9L84Q9MKoxZsQtigBtA",
  "key16": "4szcEsuBGhXvtD5ZTjX3xodQ6sJU4XceG1CQsfcheXuWMJL9oKrY34LGuoFSAMpJQgMMgQJ4t8MokAGLzK39JEuH",
  "key17": "Sm5okAcLs7WsciCJu8ghSyKYfHgVJ4JZgo8ShGGv8t2wECUXoL8vUMZauCZqisELzyCKm13ZRPhAWjSV4dU6YVj",
  "key18": "5qLsLzNtms6nxbe9Evzzyti9wFLBKymQ22M55BTURb4y1iK8ksceJxyjNw2eQTK77u5Cs1jAqgby4eniaYwso86s",
  "key19": "2MToDHSW4zbHKxZ3cJqLZvvEjYo1M5q4ZgkdXJa5WdFNxdMZwyUC5iz9abHLfjng51hUR4iCTp6Z2SnSgvW5yG1w",
  "key20": "LaqB2B5KnGNMsoadr9RzqBNnF4zXWJkGW929zPibtezgxqdarfRHLMz2GQrGdEgTefssuu9bafhapL85i3DtEWs",
  "key21": "5hbxajkww75R5kGMjUQgbdA4eS1FWRppM4FCjrsKj6EpTEBRr6FXS25mDADzJWfkFV7FugD2XXQqoBSV947Ndvvg",
  "key22": "4M6JmNWtPQyvosYfqRPvN2TkYWekE1FDMQFwcePJedDdwHb311rbPudC5Jfa5YENopZS1ZCjnBEpZ5SdNWUdM2g3",
  "key23": "4jfc2dvFWoCmVyAWbh7Wk5udKrtnYGiwKEFRCNK7Q3MXsNvnDxjTF4YcKnmsuoxoJrpAHRKM8NxKVrvEbrCgj2YF",
  "key24": "3KbapZdah9TK4whuSY5moGTKqXqff55HU2wPTpgauE6ujjtVArGgwAZh6cA7c1CMrJ1kffrThGJUWkTFmHZ7dXgt",
  "key25": "5sWTX4c85dvg7nJ8cssJXvNMkpbUtmWARmiQ51EhapAPUEcWSQhZkfMgvkLwjCZEG1DHMjzRGjmXn5sLRDVndGms",
  "key26": "pDGXkJ1kUzYz2Se9U7RzwYYAX5PG91mg9msKT3CmKcW41q3GpAhTFWqBJ2ryRt43LacF3ygnxW8w5SYzNttpG74",
  "key27": "2SQb1ZV3v5SGvhoHcowSpFPuF7agKK6Ddd6WsuSSjpPbCRuAJNH5752fSSX7vaDsgv12NF15pnQdnjZ6d73QSmF3",
  "key28": "4zsoK2oFErBQzPRouSnWksQVFwCsHBx9Nj96ZtM68gHs4pnzjK5yMhn2DFCbE6dmgHHVb5zHmcdEzWW7jgsw1d1z",
  "key29": "2k31phfatbmBeKiHHudJo7nVbSAPMMCy19MWxgiUKfNMn7rtzwLce1kreNPkdhf7k2yB7w7VHNjHGEg8jbhFVTBv",
  "key30": "3sycLmrvcFKutpFxZjSM4VJXVdPH4NF1BZfF1JQCpgdLiZhoeUFonfFyoxP54uYxm7tmhEg844vZj1sKvDf2EBVm",
  "key31": "5MGmxEmnMP3fqXZDNV8H6YrSv6nwSVD1BuN9wFZikhD9LXs7m21PoNK21jGEaZxAprob49TedueoVRX6XNVBTr4d",
  "key32": "EmRPTrCgJkpiiFXmMZdrqkLUrFkdepvzrsEd1gsCyw7cwZqHQwQEcuQ6j9RpcLbijGe9fy54pbLxfcej4A7xqx2",
  "key33": "ZsAigFH6WZriK45DbN1ybp4gnEXHF457HTXG9Z2adAQsHYyY7UQ2BnuY7wmR5r9zoMdG6tSnUfTSTPvzUUQat3N",
  "key34": "RyQAxCEWE6yXbbUQs5LgH8TEBLb6c5EZJfBQB7m97wYYwdCM7NDv4bs68AygcD6sxQoiHo7BbJEJGeV5pvX76Ux",
  "key35": "3F2vs3VoAHu62q9FSCP4xVKewE74iiybKB5VDE5kuHhvAXAWMqf5mBC68631k8gvk2nxWbE8651kwjKK6SRrgYWA"
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
