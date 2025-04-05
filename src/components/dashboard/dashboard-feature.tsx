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
    "ssYGPKkCuAfGjhsoV91ZshKgfwZufB7wCJ8FdDEuXC5rtfLBk4hURBisFWJ8WRsBBHizqucRhyc5Qc5mmGZA9jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGvZiYEjv4dkF6tDUTzrEa2EEpenhABZKDqryF5yQ5hnqLGwWFp5eBHmn2FvUkk69f2iWmcEW8ihScEF7iaTcm",
  "key1": "2EvD4AXo7GwTMCNjZf48MKWvhjcVuVocsAmXPv3gGHCATTeEhRSD6Pcd8FuNR2367DLLVz2i873xAf8HPnwBWT4A",
  "key2": "5T3ohTSJ2xHPyHGDSE8SKq1ZtYGaArXHDprdcMhzQ6ghhSzuSx9Af1PNeVfa2HfveJcrXqmGByUxJ9FXayopAHvh",
  "key3": "3R9r643grmedi5YhTQXgJwckgFzHv3iedoP7JBysjKsBZQf2emiDqAPMmxS1RKSJxwfxo4NZ2DY9nWecceSeoD3K",
  "key4": "5qBC5hY9rzbjCVrKxrRsZ53zXpe5K5f8RsJU5TDHMkkrhmvpmULtzVuyV4mKmDwjxCteLF2we96G56aV3zRLEuzZ",
  "key5": "e1zRDP3tbb26kBcNTQ9L1n5UFtC7NhBNA6yZCSqg57aEBcBJxtYCH2W7gAX37WmABWKhdMh2tDEew8zMNRXEJSm",
  "key6": "4J6G123h8rTeSMdHYAqtBmsMXLBKdxLyNVEGean3M2X5Wmk628kAU8r9YpDGXGQN2r8daNt6ns9TL1xFUibUWiE3",
  "key7": "4CWifcvgvhgoyfY222YeBLXwTkUJCFrMeWWsNaNtzQ4AuzpqALg1W2spws8DJgAPWEcqBXGhJoJjgu6t33ssik2T",
  "key8": "2Lbbha8xsmLtHQqyV4mvmzEFxQhTEt7eXLaBbtfBpW47SqeC9isAbpQ6gdzVNckXN6YVW5vB1YTyLNfzH2JKziQL",
  "key9": "59shwtuHhuiAZ61yJFF4CPTuZLi9pJKQ4Egb8awiWLZRLwzA7Mkpmg9Ah1dyZ632fNd7og9HYpj8uzCXWL82iA5C",
  "key10": "Lg7AHDgnMPQEG8KvMd6vHetjn8ontYJEPQEQifkxyj1zE33Fhih8DZoRe2nu36FshRq3CNWhyd9i4s353gaRs4N",
  "key11": "izp3jJZsk61ZHEDxCLsicBwJFZB1yy9RXga8DLr5qBAyjzAAkv5L17zmmSUXo6GkQdPvpijCdYT39YntDz5c6VW",
  "key12": "4cn2EKG1aP17MiFTKWX9B2hLEGxr3eN9dkWw19kTLpLNb2wBpTVrupvG4bmDF1SE6wwAyxK3HaDC6HA5SJE1pcNE",
  "key13": "dYhPbMUnEQsJe1KeSptRS1C6s63NY6j5MY1vYq2TwQGJhbnGQCqGsaRfaDtAM51vTLYDm21u87ZxixY7vMXnNGg",
  "key14": "WtR1XMwkbbXZFa7S8LvvrVZbqUwdy9YhrXDVAtj4YhCCeo4LFMjgzphM5rvYfrxWQRpVq9HUvjR3VaSTj44JnWG",
  "key15": "4wsMRQSSgUf1EqoNL5UVDjwCRiKwcLNFCEPkpc6Wo4TTXH6L84Ef7woF6Y62Qo7ZrbUYzMbgnmeU35iE8UCbGQx",
  "key16": "5xdXSUZKCpvKEWgcYLteNWPUP75QSt89Vfh41njMFVoHa49amGeJ3RzW1gLNk4R781Unqf9rBx9KHCNJ8GFMsGmH",
  "key17": "Uf35HTf8S8f6NNUfyjQMcQ5GJ7DJW2r2XpuU5MLXACEPcfJQxH5uXb5r29btGBCDavXLBb1R1Ue71m5H6MjFLLA",
  "key18": "5QaBvgsnzqvXEEK691XhmYF4QtV5Qdn5XxMZ6YxvvtyDU3BFe9sz5zvzrGVuBawtMXqksegH3VEgCBuD3dqyT3xV",
  "key19": "5dp4hiLWbfdbqBfhpKvS9podJJmwvccGX2WS9asCWgk2xnGtntu7qX1bNXHHD9frqYus3idSeUKxPteC38RwL6Xo",
  "key20": "3RKWmyPDWcqwG7Z1rooRcZodoeftggYawo39vYLxMc2EvNzGhgAfswfcAseu4AK1nHinfgpYNGrspkuHSqtkMH6A",
  "key21": "5J5E9ThaDLqBXYbTPKehHfkFsiNieZFDGR9wVt4t4Gryp13WsUuin7a9pJXvhTd9PMERygvujT8fKbTcTpmh57Rz",
  "key22": "5Lwz1mjRf3zKpGWC2vqez4vxLGei1KTarKwAcH1BQSikVwopqjbeRvn7UdW8JhFPxeMG135hN41YtygdGmvasjMa",
  "key23": "4vwdtiXKgLfb1kSWnaAbbEKBAnzJ6JzAyBLhtdqAGQtvmrwtr1GkQqVYHs76yvHj9oG21uDDRah2qde8qYDg5fNo",
  "key24": "bH334rpnNDxYLiMoyT79EKVk529hNxcybVvyqsnu8QqonQyL7NiqGSMyCUEsikHbF66PjZVv9YpfjARLbaai2Df",
  "key25": "55W5BKppt2EgFa3veCdxRibg1fAZ85e7sgTgNnqsYLyQMMyafQzhSTdd1GHb6JLCaqEp4csvcWg8vpyVwpV3ZVUj",
  "key26": "epQ8bNPLFVZgZud9N1kKpmpa8JvRPCBoQV9u65sfkfmSjgDEJBzVp7iSNzJw7sgqUZ6uXUA4oJxdxtSUDUpjxCx",
  "key27": "3uhz9dmoiVCmeobkttECpqU23PfAoQK3Z5gjUfSPGYEMbNGXvDdf72MWLcxU6wz2QXRZVjHJXEShbGhWSMrJpgP8",
  "key28": "PGz8KBYjxa7Dhmv1BeYNtV66xsvp14Kq7JZ8F3TfKdJ3WXQXAzmpVjruV7Md4BRzb1EdJfeDPfkjKsLuH2cE4ii",
  "key29": "51q2qt2vEhJUKzjFzGvx7WxtDAwy8HB3pX9jABnD8GYEGhQkoyG91KnR4rHo5zErwEbhDjz6nHy9Rdq92ppvymYh",
  "key30": "2knSRa7NPM3DVFv1KVb3zC87yWGYekyHvYq7JecV31Msy8Mu4i3rB48J44WAp9pwyDZRmv7Tn6HeK7S7F9zgTyGK",
  "key31": "48VEsBY52Vhv72Q7ovmEgvF7joznP3KAUPkwu5MurLFLkQPnCEFvcTeUeEC8QBu7PcM2NtuaEeHxuCxeBNNvj2n",
  "key32": "3akGg3WosKUcA16tLfUYYM66HmeS9LirSC65dzJ2F9vAJL4ejBCrWm48HsPJS6BfcP5SKAPdHfuV754FUYUVvxoZ",
  "key33": "3k3BKg3ym3ZDECz9QwGM6QiCpViGM8Kx34id3MUfes3yKK3YnLEy1hFDdWTFWnHV82sXpUMZRarjD4HufZnvMVUP",
  "key34": "5YJ2NToTmABpYwm48kvcrP62exVwhrXJxdXtZwxwTJ5DKwREkpBGoXorFgK2rRpXF7uFTwHaoa4SiLyEL3Y3utUH",
  "key35": "5PUp1evJbeWrsbhBuKsuQnGpGHVgFGq5RpWDW14vpUeVqDs8ZSJDc3rpAQzm4m6t7LKYmRovAvpkAmpLpKXpixrp",
  "key36": "5YLraU53QTnP1y14sK97ejUoqAEkqSUKjLukZPVbdALD1vFgkoUUA5L8qZuWs8SDphfnR4f9pQN7iYCDBVyz4nZB",
  "key37": "4H4Hav43MxeGoj2Bvfw47o1u2gUnXVyRQURoYw9qky9qEGpUCL3trPw3tVHHBp9MpX1JEr6qZNsibGgyARBEz2t9",
  "key38": "3G3wUmBHSRFVrqkcGHh3hLmMyDUBy4Kejg8c9oLpJe3phyeK3gFuHduDP5GKpvQZMZeRUh9Wq9dw6emNFsfNT6Bs",
  "key39": "CdVN57HaxgsAyxsSgRWKZTeEdcHyJs7VgPaZXpmBcEqHEKzv7KTurTxiE3LWqb3cT7UcLg5SrqSxDaXTYhpHM2R",
  "key40": "4nXLXBBzdN6QsiX3vHKkX855xGbPUSdhZKkZ913UM1SDCVyBmb3H5hUFMq1ptwEE4QMZ2K8LUEcYENggVBsCJGg2",
  "key41": "PtgLhaF6datbZ8yfafut2qY3ng2ytRaYCG5fEodeSeFSNc6gRYvupRjaaeHEaZbVpSjHqRqgPgZCyxRYYjEekaT",
  "key42": "chW2rLtiNS7fHwNKmPonRbd3QbsEMrRddJukawpaB7gK4QLAJFfg2gdP1FVRTeD5vAYt87z5eCS6WyAy2Vp5vYV",
  "key43": "J4iQdn6YrPZyh31vLfy1NJs77Z7LU5ubS3Eo4DqjT9EtFojHd9we3KPki18BujnCCE3etrGvJpsFNwhNFTEF5P7",
  "key44": "4UJ6CZEvaqkcKjDzQgUa4VAFUooCRj2RbS8L8DkRvcZe7KPHMmTQCXWUwZX8UA5aeAHF7e5NVesaBx3uNy61MkXz",
  "key45": "428Go9f6GZyHo5TU7ni8omQj9Mn1kX55JYiUwedBjRNeQF35vRNpAJh3MsMyFurAqCiqWymo6AjX5fCCB9KxZuzy",
  "key46": "2G3bMJMQzthbWzUfemeXiK8pTwaTQEeqBZGvn7MfYeWb1i2VuyMmyiTE2GfQv8rZKvJrDfCshnV4K6v5M1VnWfRW"
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
