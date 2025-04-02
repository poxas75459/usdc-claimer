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
    "4pUjQGGwAV3xnLj9Fk3mAyNdB7kbry9zLUZaokxarRZyC7aDij1tnRNP5ppjzwo4SWE5QjCAUVzcVNdT1t7Rd1eQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVHim3eT8xVe5GRy4dyJah5G9FAzzZoH8wzckssFax3Qi377K67ccWkjQW2J1miEgy7oedLMbd6D3kWEmDW6TE9",
  "key1": "32dwMWEueorUXezN9aCgkUJsvP86aWjyAx1LP4aZXtUFR9vs4TNSJAStUgfHh1Lunb82cQdkbRKSd87FgKifJHYK",
  "key2": "62u3a7ycjKH4GYQWEfhvvG851x3ywykZmvQCD5dvmS2SfsNeAe9ewFd8J3Z3jEGpLCdmVWwdbCfsWM6827ooAcNH",
  "key3": "2nsVFqceU81ApjHjE4pYFJGeCN6um6LtmthVKNFywomAGbcY1w4LMs4YDVUwFW4P2pzosuV5TdNoy6epLqzpqpiz",
  "key4": "5Qdmian6WM3S4CCvf4SgjE3qF2c1TXDQDfHyLGFnsBrhiuHUjko7DBvVAtrGHoYzZvxgoufyYvXqL3uCSMQxr3Hv",
  "key5": "5yEU6Nt7zivSLSumTLEYQNC2WyGuXsGJ4MVUK4e5CJzYMtnWAc8oez3Lm2C2bEZZnvVjgALiBsqdFs1scmvJZRSz",
  "key6": "2BFYqi7ssTsvivcxR9iEYG6feKbDfN23MK8UMCW8MsYki4jaHTQc2FUwQHVfYf1GLsQfkEQCqg5t7kQLZpXrNGem",
  "key7": "3gC2MkyE9K4dfNfMfdFW8PmNDQigaL9GkLho8tgpLwNaDJ9vrJr2Q86JGa1wJDJ82pSiekGwA4yNMWZeKWA6CdBF",
  "key8": "5dXdy7Uv1bskp9fevxWoSZ4uGxwMXXMNTx5WjjoFqnRYTLHBvafBK5uB2QTmBeNozf26zmCKHprjyancHV71SCgq",
  "key9": "2mJf9mESRGfBEQFS9BQZ9cJiU1aLW6R2ZiCCcmS1UHcP923bHDSYArfW3sPSmuNrXJyF6GiRTnGLt4hh87XDpAm2",
  "key10": "4hfixLHRD2aRt8kpLcTAVY1QvMPvseQBDJ6ynWXy24DSsbwX8HcVpxtHqrqzQMwAGFD3jA2wyvHQ7B1smBLN1ZU4",
  "key11": "2zNbwzzQ4rmw52YsW6GzHqJZGXjPoUrUHhbE4Zj8EmnJtMGggfXhdUPUp3wHMVcwBsdhpdzYQNSJYoENByquUchm",
  "key12": "3eC8UvVZJo9J1pxKGj9NnfzTcUoRjARAJ47PFMrAWayZLr1hWLRhMJVSRbEEEabhgyT8rn5H1yz1LdoXotDPbkrn",
  "key13": "5PrPnQDVrZoCngmYYeTLTfJ7dsovsg2e1kkpVFvfG1Uvk55yAhvzNG7K5jWH5UjZqX8sE7ErMFDB9D6SgXw89xu5",
  "key14": "5kxVrNdqHmYUg5EYBhbMnwhASRT5UNwWEChJ83sbQv5zAb86tTCQMv4z7cgT4F8nxUUuUMjU3zCtCVYsWrC64ox3",
  "key15": "4NNynfgmpKAe6P678s9knfVteKewD7ar3LAWMokQMMoGvUYnhqmksyqzZNG7N4HvrJHLjxJ1XXPEZ3kkBgg3Uetj",
  "key16": "2y9RUpTetsyUyxrfT4M632mULYS4QnCzEnQMMe3b3LNFC9cDQfSrtzSemmZvSQsD2oCFNpxrKyRnfce74hCwYDxK",
  "key17": "jZgvDh6tVAJX8E2BZMKjZZL7pgFMieZ9g21uHEaxLUJbmqEwjzyJmpY2p25U9HTcCrZaLvYzMzsWM8Mf3Cw9QqW",
  "key18": "2qwGQygXST1pDdcx6Q1B98jnpW9jTov7ns5FqZNrWdGQQu5bqV2tVQFu5RnGqrVnQEYui9Ypka2zHRSND1SvhddN",
  "key19": "5VnqGhYmXeE5Xaft6H1wvLbCSrU2Yr7YV6Mg4aw6B9fjq8LZD1WsqzqhyiSUby5H9Fx4vfpw6oryGm2bJy6sSvnd",
  "key20": "5x3koYT2b8koNUf4KCcnVvUgN1eezZCgC2ovVufHtyeL7VBy3n1eppkLswTz7Q9ARxH3JMijNEiigbqkfyY7mjCE",
  "key21": "4BgzrDkNHxuDJs3noq3Q7seK7sQAq279ZENvozVR9s8GYUvXejujeh9gxZ1qFidDhct1YcEteMTydhiHan8u1FNg",
  "key22": "3yEe7W5iQUpurqKodve1wd2HJT8izMivt6uwVKx6E5suU2apGsvztAM1JgjrekuBhCSmin8AuJCv9PeS8Sa3qPnK",
  "key23": "47YxmoU94Cw7wttUT85GcXbgimKZtj3cPgbS2NtsDrfquP3KweaR9G2DasJkzFXhUCjvcKDVnGPexa6sJxbk9wBD",
  "key24": "2Pt9q7G3mdvRxKWEBcC11DJQJ4NhJKLE3WCarLu8W2iLQnf7gDkxYmYdc6zPSrDFwUNvg7SCoCjBqNMfcBmejqCs",
  "key25": "ycJW231Uert3ui2cFRFgQypMo2uXXRVLnv2DAKM1Fjc8JKmhkyS1j9XWH7Mhd44P1VdFbB7apc7ikwo92m2SU47",
  "key26": "s4GKxtHX6X2nWR3bycVW6SKGbAwWAHQjos2jovdPWT4U3xdnfQjKdMDo5GogTBd9EooLpHVEMGqEGWsHtTgAWva",
  "key27": "4w15qz6R3qGsWg4SjvXedVRo4n2jcnYULd4jbfX6pmRMB5KDECA8GFfGBMWak1T1Qt9RS4pm8FEL9tQyq2xkJgMq",
  "key28": "3ms5H4aie1WYNEkTGx6nJDpcybUDqgFee2D71CUCCW4AxaFK3kiiDc82ZuZUqSc1s6scrZgsgz44gHVhRdTcoF3M",
  "key29": "57WE9ySRrhE67u66wQ4BYrYXr5XZQqK1kLuHQAD8CnxWtKX3CjZgkyADL3aDHPRXxwAdkxTwPb8TvQRS5BR2EcoM",
  "key30": "4EHvcdpgPXU8HDCCzdfXoXQ2VAknPf7fYgRkwKPBCPqqHpcaqjskefjnSK6o4qhG1cjraTWsgqdUFq74N4ZXQBpU",
  "key31": "5RiMk3Z9QN8R5hLSo52K97XqYAy6SAyNHR8uT2Fa9AzP2L7YE2Pv2yrQyptocMGzJ5E2QjKtP73SrrcyATLMUXRK",
  "key32": "2s8uhmkqMYHj277Sv2HJmhdM6BwC6YjthbAeE9aVi6EF5cZgS1XCfxVqxNzqXAwfd7p7CBoos59NWtPtYeovsWWR",
  "key33": "5jTbdPkcyD6adZ6F9rMZycAV13Q9KW6a23BYis7NAZ6wfBtP7oGjEiheCoHy5U17wLfMzw17tmfJyWyfFrUyWKQy",
  "key34": "5eEN8ik49GCxQvJdkzYpFkaHDaxQwJei9pubdjysWbFuwumpZwi7Aj6ryu9DgEPh9HcEE3RRWfimyvWLpJ2sABJU",
  "key35": "5krRQZu9FZXoWtz6icmXPRjKqbSt4QqPsQcUas9UB7DBDNTeHC7MwXZ2Rf8p3bwMgh4tzvfv64iZQLADYomkwqxb",
  "key36": "3s6iYqM49oBxFavNvdbNHcuAk8bwSCpsZqLCDyX2yufpfBDMsdexUySQVR7EX4efpNCrKK5ckPKXd2no8JZV7bzv",
  "key37": "2U1k3Gs3H1bm4eRviX3sufDQXzL3awfzW9C1uK2DvD5H5Tr993trzTM3b5vm6GEwgPVhZ4kYYLHARAhM78xFjUMK",
  "key38": "2x4qD5WC6vUqt7YgatMxGAXdxzK39a7L58kbJoD7Lrd46YYaHYr3xAti477jqNLXpGEAvFDCNjhAp8yiu6Wnu3tv",
  "key39": "2K1TgJenXausk6EvwmLx6XLWFK4J4viUp9ra6Eznxd6h8Cn94C1qfG7zMdhuvZDK9ivU2mmVchBqnLVjQJgRaKFQ",
  "key40": "4kieqvT8jDDspgAdvt42BfgweVY4QRqEtne49b5sLwuwHyPQzWiXokxLWUBjEtAaDrCmK6vnR69XcVfEAqDHBcrE",
  "key41": "2SmFULNgkEU4b976gsjgsh29AofXLj921eR3qb1rqymxKsYqkjCR4oVazNYni9iXZwekZBVC5TCfFPfNtutvDYEH",
  "key42": "4FJNnNdaxMVZiGqqf2xSuqG5GZw916bmWBJ4wpcpjufTW8FGg58hVUXWjis8Wqfi5w6CAYzZjG6Sk1GuAkQCLrd4",
  "key43": "2TvUpNH6usgBnhWeSivpaSNxzCJbUXyyUXjFxECyyKX5pPvkMwLYgMU5Seg3dzHcQ3YXyqpKHupVDEmt9o4tiN77",
  "key44": "4xNbn3jEWg2NxCEtSkSfZQtPdEx2g48VQrLTjxQRnq52PAGnnYciu4dDnAQVPAZVwHMJ1pe5C6ZZawpp6FAWFgqQ",
  "key45": "5qvYYjsdH4jYPMgbh3rTxfG9vNQZrYgA6i61TKpYZiEp8qWHDWfux6L8sQFyMVWmnR1XxfFyMjsUnCXsy3XmoBDp",
  "key46": "tmGxcse3xNdC7TsT6kHPifpiEXFjnatydJUajptAMiNgxPjyXqoAwR5tGt25iBn6iV1X9ciFXy4RYpDuw9iiU5c",
  "key47": "3geiXqbhneXN2yhuXumQRxY15DU4hWfWnER4VYh2L9e69cg3T9duK4SAraHKs6HkXKgQ5migaNC9tVaSAhB57nTn"
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
