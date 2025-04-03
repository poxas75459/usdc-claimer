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
    "4AVbpmHNfWmhQ25Uq71xsLer1EVFXeqZBrcm7s9BEi5eeokhc6zfMZQb3DDZzMSE91Bp5rtByufBz5TDHpJov62U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W97KX7eEiNxbb7qJM9C9Z1fYq3CZieLYmTeiQW1BMRKJ8sTeKenKWoiuuaJ6nDefFT1cJGS5RBkFe7nRKWTaAK7",
  "key1": "4JRqvL1zHB8Dh3yRkZuupnhVzYxMbEBXdxSmRsbBHpM2a4DdrR5qFZkLE6oNACYZxDW8snknc9hCkA1aPL2wJMsi",
  "key2": "TKFEhvuQpyaYKGrrNx2qyBJmzoQkhSJDoa4KLdMV9NRkXeWQVe7BEUzsYRXdiL6NZ3a14az5pHSAqTh7WhreWP8",
  "key3": "47WMQw1tXk8tbyRYej2qFasUeptCecKffCqPExrD555qFjAQCm5aQhARday4mY3tc7ZKDh7DVk3bYUTTrfpkufnP",
  "key4": "5qPKzTRccucX2Dnzzy2y53gA5T9HdsoELrQUfh6SpShN1Nx2cCz4FMR3Vk2ny3sWRNAgcyDmqku6FUbZCpi2PNPY",
  "key5": "kCM4KUSKYpovYNPv49BX97YBgxrHgannqk7AcqxqocdAe3UHbozG71YubhN5SyNmLqmUcEkFuqwnrUBvxJHJqu1",
  "key6": "5zrsytLK6B5z9RN4jvuJnfFdLf1pFtrAUhhUJ4MRrMQb5MuPcmSonvjPhj1EfeNWJK83XeQU4vryz4yVKVi5xrxd",
  "key7": "2xuetJGn6YG9zGAg94DDFpzjTX6edbu87FzXKCqpdMCuzyhAq4RB4sjEMduXEQgRyC6gbUFCdcq9Usdra2Zs7BHz",
  "key8": "NxZ5tShT7DD2JQ7Pme1P9yjxqqFcGWR7Vy55fmnCnPRgxGepZMfFJ3iA4tTzpRhcau3Zimd1mpCDmMfd3AiHajp",
  "key9": "4R1QRhFUWU6z484mDPbFNCpMRB9GbKWPRb4tn8WWwxJ8etNMN7cQDVy3d4Q8aQMPnYquim2aFyxp7JkwdKm4jVnE",
  "key10": "3wxCVZWzZLS8TkcSuFyhqpm66eLhmX2BAiZGwfD5n5SmwHPdyXPB1ZGmgXcQ5x5oyarttus4NKMhgjfDy7VaRkWC",
  "key11": "5bTMVUhEE5qV88E8T8NaiSSYmKmYcb4NbQgdkEnuXN1cx8qK2t4Ammd5LT8iuFhtt9CcPgdHdY1hn86r9BXKNH8P",
  "key12": "55yN4my1SvpA8HL2mhg5z6RVab39C6qH2Xc4Htp44nXSXpWgtzv7YmhdDvWC7HN8cj8FGxgKi9VR97ViyDSuRFF4",
  "key13": "3SJDqqK7vAFmUHGJHfyGacePVs9bfpv2V6FdnpoEHBxsN9WbLtAsSBPX17EXpQnaKcDoe1tEfpnrk2rWDRCBbYEr",
  "key14": "4fM18t2ZSJgHLEzfkqqDhk73zCZkTF1np8WrfAT2iGcWYXXGoD2QfHain8sAFJMNey2SkgoG8pdrV4EDZpH4cNJz",
  "key15": "yaa9a9zqPYZ3bd7RPzCJykPXS6ELnYvrhJzBSX2hQBQasYJgQBRjVSnjtUJS8bGDwuJMQXEdy3YWjDco9YhoPyo",
  "key16": "4RhbhJG4GcP6yabPdzdzwisWvxveMgoyXScXBYSWDeVqsRbD7eCqptd1Hu2jWZDp17B1fw86FDgHkYUsXairGwFN",
  "key17": "5zWWGHcCEx7RqpPkK9jS5CcufxQ3uo6LQEgNaeyiL9R14RXA2gPfBFoSLpBJwgDWhd1gdoyvG1wnT4pZUivp9Sb",
  "key18": "3a9q1EqZCngdcJjKwbSkfvc9dzMH4QHobdv1tjcG6kYvHJ9Vq82hAPjDoGajW6JL1X3NQBXrAk2dQiEk9twuN4is",
  "key19": "2TyYR2XYmc5YTjsdTTVESkUPQjAetto3uXNs4dPgnuy3gWPL1HVhUWm359Wtpfv9UUrZ813igR5KvvW7rjoUXVcS",
  "key20": "473r4SuPTRqeCGxhcniNQQjLmk66f69A8eQoR8T4qLHRdg9rcZok9xxdCvu87MRTEQ55qsotoNKs4iCFJT4RyVNd",
  "key21": "22ZAukSa4WbWynYABpADdnNiBZTzF6shgY9fcddnTcGe7xs7SagEn75g3CQUVyouuDNTAaP26vafSDZTmk7VT3Ud",
  "key22": "8aDUPedDEcF1GhHujkVenWKDNo1eL1zbSojT8UEbDJoLwzArvmZXsPtGQcfyvqGz761ASDkrg1qCknuQTvhQC9Z",
  "key23": "5L1ScFSEaMrxL9WiZmR6mcNJ5x4Hc9GnSC7aqoJbrfFeV6xjdYwvM3ZHEzs5y2mA5Lf2cj1Su27dJ2Gr8UFVfSRL",
  "key24": "5kfUwhAY8Yga5s9GeZ24Umqk6y7Z8iuj4wkMZFPQehtesxJAaP8E8iLTdPdCC2F9QwwGRVXhE57wE2SE8LgGUD3f",
  "key25": "3AjhYcFgp6QrDM9PRhke1T7pxSgbLD6yEGbW6MV8QzKSXhWadjcvxdyDovPaK82J6HRaKQCjqXHVJEnYoMVrq14s",
  "key26": "3ezVD2rkq2oJH97Ece7JcjHqgUk1rLhykv5FA89iqjag2dm8wrYZg43kHZgt5HU5kgjYaok4j4BatR7vHVPv3QUz",
  "key27": "5EgUDnAqbpKpDJtPnFLLL47NqSad3CqtHqZg1KEDdq4RmZ6q9bYCb75KJQHtzvYtAqSc1wK699oJFgquatNv96fn",
  "key28": "wPgjY5zmZNr8XoYkF4mn9ziakVYqPeAKC2VfDHMcxqxZWPkjfmNJ3MHRPqcRfmDh2bTr2kPCfE8rAnvouq5nrME",
  "key29": "2DmUMrMQjsqtJ3SNvmgicvrhAjBUxKTA8ZaN35HM4PQEeCjj4YgMiq5qUnUcxmFDQUEwfiYvoMedz6Gpxrd1Nc1J"
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
