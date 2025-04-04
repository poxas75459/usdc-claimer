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
    "sucMLdcWFz5hEBYUCLY9zy2uy3KGsuc1LLayEUuAwukNZuZCyBGEHB9BL2BXvUf8YUZHMdmsZ1fJTVSiQB93Z9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jByedowAEgLc3xaXCsdG7n6gPFPg5X3beZkzF4JuHByxyG4woVs1zWzdrfZY7mxuyoTyAhxT9ySQ44X6B821yYd",
  "key1": "hLZgtz6YeX4wxMEBGSwu9YUToEmKCaYgDhAo4j2bQJcJ3pk7kDjYuqorD38gNcgrrc9co723adkCXuuyy89AnSE",
  "key2": "F625ub7jUVJnk1fHzBt8NW9ErvvVY6u4LgPWB81D13DJjWucWaQJbTf9uKDK2uziQXgBNDmfofgSUWAJXwFczNw",
  "key3": "59bb96oSJBbjP2149zt9Mvu6Sg1HTfM455NFCEfVRt7mED2nFnHnyHMVgZLqkk6meycrzp1KVaEkoEfXrgKaXeqR",
  "key4": "51pnyA9pecBSLpz3W962AmP69C4iimwfFnXWDxek6hmK4K4PBMKGmBcnVGaLSoET5h8eRtZVrVARD7QthCzeFoEW",
  "key5": "5v39TCyyaZgBrN1VoGCYhCGBRsEkzHX5kNHKjyhu3G6YcgivfYrdvVoLGSYVGAR4sYmvtE8Vh4ZpD5Bwbzztv2qa",
  "key6": "5AisnqQzS571YCALosKropyromFu68fexbzTcm3ickTHS9WGh6f1Yo28pbf3be7UQJhcJ9cHZUijBhCziXbZDs6w",
  "key7": "3h3YUrVzaYez8RkgPo66y16xP3np7cccqThCjdkQz4oPyQbwdcEvfHxENw7Bpo9VYfg3hTDSta4dKjsvGNrfYxTz",
  "key8": "4EfQ6Vkj7STx7dvVZ1TvbM7SeAx7GG4K77zMZrb9yzjVLxEhdFPWefmTDikGgND8dDtbi695XTjzhDLMNksAfA9o",
  "key9": "5htsTokFfXTkYzW68MXGwzWJthJUK878pYodBo5RPYESBb8AqVf7XsqrRkrdrFdkbLbxSw9ZAerZMEU5eYfueSQi",
  "key10": "3E6KGiMbzHpfAp8fnouaBnpiYrTG2ZeMMTK75BPtpUiuc6gVodujVUp58UnXMKpYLaYFxUBD4rdk9esbKLqaZ6vR",
  "key11": "2AtCkA4CgTk9zzCFjRLBZxPDAtSvLeGzfajJJqgiQrJnnAQzBV9XrcjDkaB3ptvp4No5Zrz1RP8yJzi9V6VuKmva",
  "key12": "x6gnNMsyLjFNdaHMgPgRC9QDhQ1HXQi2jKriGQAq5yMqYszuKbEogNje1ngJEJm42a9dJp1nbnsgqpRPA6yZ2VL",
  "key13": "3B3dd5oM4hqgKDgH58uuJEMXbUikq2EnjHoeaoConsqkWGuq4nhbG78zecvgSfBDgs51UWybpJ6Whfm7rqpw3A3X",
  "key14": "3bUYX9NAtRBGKAKadtK12XXmf32gLXDFNGP4U3ipwhDb7trtRPbCj6wxGigwSJS5mJ2YMDo5boJNHFDB6yYxyeKJ",
  "key15": "3RoTYRGqrQLb2a3kjzuS3xGkaADkCzqpeZtxcsp7fDAwyH4KyDLS7DFjfhgfhQSmX3fVLqquSPAmThcGUfGF9mWT",
  "key16": "5UfJxEHujuzggXdtk18QidZrAbL4wb6kcBcuJ6rJpqWfDzV98Czc81fYz9DTcJ17yRJJVSWYsVi3kWgz5tE27uHk",
  "key17": "Lom66cDhCooVXhiXwQZghxtNUuoUcqLqtMQ8sJsQCceKsP7s1bCynZfTDiNt1ohWLEZrUZnFRtWv4kmUxcVBzbd",
  "key18": "22ahAwrAuc7QLq8Qo2nWsNdgccxsGJirR2Yx6xzCvnYRhw3Gh1PNRcroShR6XdQJTPSWKyXtM9cpfdhHJHFMzaJ1",
  "key19": "4miQ3dfVwrkLkgiDqmX1L6KLyyR7GNdvGE9vEydNA6cZ3aNCtekGFjZZRuhcXgM9TZSoNp2gRooqwPbwZAKzbGAT",
  "key20": "3q6yhtpgwttxf5tLoUA8fDLnrLL8dCdy17XcZbj7mjcLDmLEsymB82pYBpATEGsFPctViKSKj3Pa6HJykeLV3Lbh",
  "key21": "5DVhp4Jx7D7ubmU8KgnMk5rNs6CgSzP3cyw92Xm61Habj7oLSucPj8VPYFNXY3R4h1itCvwW9tK9TspD6sfYXakW",
  "key22": "2iLP28DU6Nvw6SUgFwvqATD86n6KVzEv2ZWS8jM5Mgtuf1ZR8S9W5xjUoVxraXxVq7B4Njq83pKVX3WxSPYk6ouD",
  "key23": "24iP5htUGP2eZjgZjG1f1ocx3VRvSudLoZfSgCmcc5WmcRMVyug5AkEgc43mEnvRS2oFYcbFdcqbYt3k7CjSxVMc",
  "key24": "3dfReSh7H8vPPVCEMaaUjcMoVgCmRgXqQ5jrUuMWWSj2W19EG5eD1qSEQfaKwPibmVz4B3Qxjycn3kTq9eD3gKoq",
  "key25": "317xtTUYzDKVM38H2p2B7vrpjJF9k2pQaRMMLUggNawxHpE5HmXMk6NvHuuFSM2VQDpX5KduwksuUHK738AVkesM",
  "key26": "4bZfyZM61TH5aBbiq9vhXoD34TFEPK6gaEArkBZy9nTYGBqWJKjfX3zeuELpc6mQSK2ZhipUCNxGYduntqfeAGyq",
  "key27": "44jiwvfn6MLjTMmPwKAVtSm4TzQDA5JP7STEjwo7sDMzwtQcwTPw3Us5EN9PuexBpPMNFXinTpaUkw4ZJRijGvaY",
  "key28": "3ECGKAtX2W4m9bDmNcKePqUmCZSufCDqeX4Ky3qdpAhBpFKypCmq6ryQZf3YTCCrZN3ZZH3muKwYCSMgeG4J8Wrq",
  "key29": "5Sk5USS1DwyESqVUm319BCKQVZZDbbkvsH7viaNh5ckEWaELvQAHkz8JFpKKha9tNPbWhV2GKowaysvspvJ2K2cK",
  "key30": "5sSoZJYh8sb4k3YxTA1NPdTgejeMmohHx5cq3SNawWe5CwLJB6LwYpvP4TBCE7JtQiUurJusZN2SWouJRZefw3VE",
  "key31": "4BVk87uB5fLV22joERViKCEJS6xYZtdC8BiGcQhtT4zNk5gv5xJRvVK1ArDDEfAEz4AyjveopJhXmcpS3a7gQ9JT",
  "key32": "6YJAWs7ezms1WSEzHghzKW8whM1rtVdbxKj6TrKRLSPcpiVt7n4HaaRsNVy9PDQHcQfUHyWrHKoQiYqG91CfARJ",
  "key33": "2nuiejULjdpN8teTkPZD2WL1T35bYy3apKw5ENnMEhENVwNXACacrmwmGVcYTUDX4H333KAbrj6mKZCEwjNqV922",
  "key34": "2EqYpDwcuCT7K3W5tnEmjRJpmbJi7iGek9kWrsKsJ9ok13biVyGv9MWiHy9rUQKvxeaUSH7nHtjWZhgwnjmeGy63",
  "key35": "4Y43QEBQJo78GB9nqB3yv61V8jZ14raXkqxsawgDBc31GaHErYzmuSAzhosCLv6yJGcW6ATk4wuKuBV96vTU1DZN",
  "key36": "59QNfo25dRxWXcLoYyH7u3qzuQF13tqA4rzMgPdAnTtVA4eJXBr6NgfrnuLBGcgbU5pGZkeAbU7wJXkYxr4h6SoP",
  "key37": "4mNZuHsCX4CymaMu9YqsiLKqRP3Us2FeVjGQijTxFRd5VzH2rWY3Q9PyrpvRbS8t1WRnZNMzgFuiz2KSh68kYbR5",
  "key38": "5Ed1Ze7UHDmL238mwMZaj6pbDqDXyydonNpLdnrebaZBmA6XYM5xgcTFcCuLCDwnPUHJp7zXUJooiNcjQx8uVL5z",
  "key39": "4yupoEnNQ4PXS1g5BdBFZbhFEGN2QpvYspwzZbQyKh5UbjMR7b5Y8Ybo67k1u7m8qdZGG4dWKCAaQYQ8HYWLoq8e",
  "key40": "aC2JgnrHyZ6CGbkGn77WWVJow28iz5NB2FfeNEyjQvZqPJtD2pjVt1VA9Nm4R3GXXaYhFYSpPZ8Rweax8C1jGjQ",
  "key41": "39swDscgZHd4FAzDsVWqW4rA82YwCwGwtyuyF8J54aFWMK34kxnYBPetWWj5Fub7iPDaMGFLnSEkG1TLexUgUKmT",
  "key42": "4rWkbigSk1CyUYHqHzAiXsptwtKW6cbGLtz6C1ZrJaFeHweyd96ss6YdMhsmUix58FJjgLK5Zanc5P1YuKQQWvRc",
  "key43": "3utE3PnSJLXAdiDUuLgsnczjTFEYBi8qdcucoMxT2FdMHCMDCnnKsaBH5c5P7tYehH33BapHiae1wJ9CLBShwZxg",
  "key44": "4z4gvUkCzqM5cv4Gyhpd7W1dh82uhNV7WvMeLoQkb5yAThk84UpeQYqPJViWmPtR1agtANh8Cu4Gm3DzuGX71Cx6",
  "key45": "4WgdSc6Qcotvun5a4BCoPxNh4brdL5fMtywQjALTFvt56K7NWHhBX2sNEUoRftBWybUUMszUVU3wAWD1Y2pRkLAP",
  "key46": "2fFGzURTygChbEa8EoVXeaQPKhHGRofWcVubqNBJhnma2tUd4fjd7s617EE7X5e7uNSoh6eLYWcZyEp1DW6uH9tC"
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
