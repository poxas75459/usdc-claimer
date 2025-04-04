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
    "4V8xhgTL3y7fgBacgqtQMx1XbXHEMq3W8AYM5rkebPEuaSAfXfAdGHPGHkm9KcbsfezpC1D8QzVAym54qyaULFFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iD2iFSEmugkawuvVoTWjNH9qAXVn9MVi44yt3spPuAzx8mzRyM5SKPsyND9fUF1BmVsdEkmPAopyupkohkwtWXN",
  "key1": "2FUD4Jh6xcSant3iJpx5gZvYKSH2p5xWvFftJPDA1dcbt9mhvH2w4Ykka1wwbUqoyK1AGVBCn399zNmHnStP84oP",
  "key2": "2xXyvceNKyorMFLyGAxYg2C6Vxf6WMm4tbKcNRHJKoLvDey5qN3SGUAT2nGVnqvS5NSkyh5mzbFeG4PMSjL7ioMa",
  "key3": "49C7KjcdCgDtUENFL8SUyNuxVeHPTCM75af4weH1qdvcuN2h24WecJYRKtaKhTTDUEHKCpfn6QMXejvE4dAhATKe",
  "key4": "2CJ89L3beSXP56DvqLfh3qmT1WE9WULwtgMa35vAoAAarAc4t3RitR71sTRtaFZvkDGomKd16judgT8nEsTiQmPo",
  "key5": "B2GJioS1m5KJkWQpUMkLsFU1TgRwxYWbh6eCDBhRwpoKUZZpRJAWCKpk6zF8Pw9MuvTkqpnLzmXWQwbhu4CtUSA",
  "key6": "2KrUXqoeKBGKWne3Dw24dMw5jwCAUAiFTSdhU8e8m9fT968ZVJwJrBkW9BR7bteS9KyCmkk8qbj2T2dggwfLcXv",
  "key7": "Vn6RQnUjdi3ye7vHgzjoxQrW3w4WNV9RXkgaRaHwnhVe6HkVXsVGTBTkMd18i2Xvv6jLXW54evSCsp47cQbZTfh",
  "key8": "5kZErQQUCLNFCaPh7VAUrFGALbPChWGWco6CrampKnUDT9wZPjBPpJBhaLixHht9dYfhZNtKmf6qcJZfNEPqjNMZ",
  "key9": "3Rqay1euagbHSHMFLy9KvUxVsm5h5oJYweXCEUt6rGVEWZTGCdoJNLhy6v8TxBuFtnaS2Zmn22b2h6mJJd37w2FC",
  "key10": "3LFNJhSRkMgtUc3hQQ55NnsAgQj55qUW9P38JAWjccgWTbJgBoNYMW1wuApWSo92atscRe7BcDnKf1THa9VktVFB",
  "key11": "21LK6uJUs826BJRsmRzEAi3tea1qab5BQ5uytR1YzbXAT4hbJww9rR8gDWoGh7y4u9sj1MpuwMC2tcuBfrzmJaPu",
  "key12": "wifmDjVFbAyvCWCpeZvr9yZr2v1fD2b8cWV2Ua9oXsKzUJ4LDY5i6NniHHHFLPdYxATi9zZfSQEKutKejb8FE1n",
  "key13": "3FEwqDhRqc7tuo1wVC8N5FHvWB5tVk6UBkB3vrF8wxa7dqjLW3abe59X47Cdwqtazyir6pYLipFnPNpeBVjBLkbF",
  "key14": "5FrdMQqQZyGNi3X6C3rzoEnmShXgULuJSDYZW1hCeEx9vedfKgn7njEWcaD2hHm2y7DUZSdREqEecjAP4c58uX26",
  "key15": "4xtv9VCgKLGMnUtVYUpJpEAbpQ2FxMSt7QF6z2fhJDHHLVzL3GwfryxDxty1absvH8rC1PfJvftEnGXN7vWyu9wc",
  "key16": "5peQUiyzP8BPRnnZnUNbAdZyxMRaCNy2BGLd2bUdAt5wmgTFp7CYsBPcqaBSZUbfTXkyQTLwvECYn6H5JknPQzVr",
  "key17": "4LAHdzkLz59RMWJJVY7i4ARYgTC2yhL4t9Z2Yds2zwJwnzK5AYc5pjD8pCf7cxkTQp1s784bu2U9ZCkenuENJR7M",
  "key18": "5PBypSoSz7PqAoLo32ctGokbLEzbPFWBLXXQw5amatEWYVxbk9QPThYyMbn8xCK5XqUXKnWwzLpQJ5yBD4wiYED4",
  "key19": "3qjdKVJhaugtzAdJmfCjpb8PFMRFaTMsCGvF5kgMEqikfoUGpo4VEYacuoVWD9UysHMgtP5RqwXAhZHSKbmiHNKH",
  "key20": "REydekKkxPGCBuPbqZZ8mvagx3AheLa68h1CwEiUaN4kEnqxz56xros1jWBo9suT76HEKT6AuoaPowiy2kiZgHF",
  "key21": "oJ3prQkxkcQgw5Kxo8tePcWiMzvanwMmJrfGohrQSFsa5r99faGehMaGNU8EMRBCdjDBffQ6AKYkqABapksFU8C",
  "key22": "5fiVhdMpvEYJaDC75xfqarQcsTwfzCyQyoC4oNEd1DB2nxNBhgEvqbWvQpVGDUc9pK8TEL8A1dWjkdeVbAnn5NxP",
  "key23": "5BQYcPieFDknYhK7N32jGfvdbT7HVHyKbA4MbSz1LiiRJvGC5N36PJuwA6LwAhcdEnBGJaR7ErxiBJfAoBiiHDDW",
  "key24": "2HvidLu4sULF95KnvhyAywzeRf35XCiyUJe9tQWvxjzEEeGr1QfKuovL8wtpjDgrVDJAUstgBhY1zPRQRyhrJHBT",
  "key25": "2Wy1sZyP6JsSSVoLvLJPq1XVfpzJ8NgENVYbVWf9yRVNpFZ6hkhBRHmWFKSQCULkTdRkvtsDSDLmJS4sAAxbTiTY",
  "key26": "t4e1cfYpjBVxF7LbxVV79wqHTteP8BgVF7QyNVWJLWNxpn4Cu81HqZfbZpseoQenhky5dsFLM5erqbJ94MeTwvY",
  "key27": "5vQd85GCfsJi4FcXvqdPrAmYbxMnu62RMW5TkWKrvts2nrDCiL9cVuUCGfiNMg8BzoU4Po9z5rWK2CWmTYs6Zynw",
  "key28": "4gtnf9cyXc6wn6zD3t6dtMYZhPiAwYBugU3wB3HWA9Qp4JyXZ7d8osTcMDnnczWDZveQqZaSgkrrPLHSUNHUo476",
  "key29": "5CNeKG4PmgYBkMiUyK7KwJCu3pD1oe9ni9hH4Mev6QxqE9Zsnj61HJu57Ud5A9muFNv5276JdPKvJCbugsNpfb3",
  "key30": "3GayYyVHXjYhW3wVqyGQUHTatwayqLyxUsR6tRFRV14Utewm7ETXgnQ7iHSL9HobbGZy9umdgm6wWhmpkmaEBfs7",
  "key31": "4rY1T21Q4kiFe78AB5TTD4Eae7X2ZqTiRWKtZ5GbxSG7ouzaorgqRK21YiMBTNKBQGn21y2gGN2KVHdduk2L5Y4R",
  "key32": "5bv27N4ur7HdJr27cFFCza7dbSVYauv4V6EpYy2TLoDm9jP6bg3SHnPS2FQj5qKiJmyP67XE4kq66RrwFTAwdVSq",
  "key33": "BGuw6jAXa5ddJaJvpfRrbntnpAdP28btRQENKWWq8fZmysF1AqPoNxxVaH4WzYskyEpJxHvHQ7sesAjugLMMaUy",
  "key34": "dpGuAbc9vc4oQoSHQrDoNWozbxdufZnc7sm8UDEASUzdSxY2QgqNRuFfSccBL5huVyp6DRVijJfPmCduoLJepEN",
  "key35": "3JyQeQjJxQi63XTwDrJciwdHjxX2FdnbodWQg1kvE5YbjHeayH9WodoWHo967k139YhLzqqYzXTFymLpDiWcwXk6",
  "key36": "5rRTuRHY1WECJFtWMJ1gNZeLQR4gwgpYRjAMJYTvHthZBBWTpMLFio85wfiYyqC8MiMJnSicA1XTYSrSQ1wZrb9b",
  "key37": "4LvWTmLRNG4FFshcdvp7N8t49xKivTT6oeKLZ4CuJfyJHpg3uzxDYJJSoGEj9yMY6b6hZVUnTEKS37isJtN6mjtM",
  "key38": "2eXAVxW93Efm7MR8gXLSZMbQAGQ6KWZ8xHVGhGT836ZZZWXDHvxZZtB2Se2yGh35XxQiSuY9bsXtA5bEYUBFboB9",
  "key39": "4ggAJHEZK6AjZC5Zvf6D9eDRsfD3S4Sjfz6ytw7JQpJnASYweBNu9VMs14sma9HQaiiPvr5H8y71TNv6pvm7wHNQ",
  "key40": "3nfYy9nW1enHiwvVouQL1KTbc6sD3pm65vcun6ZmPzDo2Y7sS4rJPNxcuVjP32fejnHdtqZgmrHDaMVwF7pqkx1X",
  "key41": "5brAGDcXsazR843ie8gd1TQiBhFQxYpjFEka9NJt9ptPUG6JtnfepAzEGBXLSQaGU6SSMWMMsrUi8ZXCbQFqvMjr",
  "key42": "4bcvEaxLCnzewaLnP1ts4MqvFpqnC1y8gCEMuFyLxYHBhPZkg7uHaX8j4c3AXz7XzrsEQgkbJmp8QGzCZnSWVjb5",
  "key43": "36UjtuNj3nK7KAiJBLg9auEgieHdpwoTiiv8FEcGmU3FbybCYPeEGPYAFHxTaGZxzWbEwLDpfqqC3XfBrxgTusar",
  "key44": "61KdMvn4G6xUBZ5Xee2tJtwQKV7N2tcNkXiqAERoKGExzgxae1gBWxSq3194fnHUtRHNzcR1pVgF68b5CzzYyBkd"
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
