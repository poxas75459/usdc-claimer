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
    "YphTZprBsMiLsiUb6CF3X8ejFnUFRYae3QTntkDnCpKTZFje8JdKsPeteR4vzXXiYZ9wnYXQ1Uz8dUZ7acHhnsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvzWrm7vDx9fHZ8PKXPQFZ7PXT2PPDd6ByydoY6h3LzjX96H64TL4yCPq8bH16aTB5buifgiFG62nH5vbGjM7f1",
  "key1": "2dDA1E5dqDF2MF8H81QHKcYVpGMi74iapjH7iM1gPqX5VT8FEpajAwQ5ezySJLQkcXkJxu19PqjWRFaXaMrqAdoV",
  "key2": "4iRXaeiLc5sTNVoBpWVC7NWyEraTLPs2XD3y9kq2eQrJwsisCK4TXNd8Kaz7sUK5gXiMKCSms7A3Mpbx27VVswRF",
  "key3": "3yJNxqK2Lq6Xvphs58LQEJHrYxNWRAR9HxbfmiuPMtr6WcnYBT9TAK9NN3xsSzcZWfKEdj29oo116KRwrBxXMhHZ",
  "key4": "3oef31UieSHiWXU9mKnMDGcTMqdDpKmXN2cEcq7cyASc15KnMEDSEiXLg1KT7ZmJQcatt9ECnFDzDSap7xRwU48V",
  "key5": "2MuAGrE8FoWRK3QcnzDwikmTKqY7CpFNaaw7a1hJnjf6ZQKCYLLMCcWqsD7AtGRRLxjjT13ZfAWYq3G35MJbmWJN",
  "key6": "4BfkY2GYJEiEgfhBMbDwWf5mg97KjtcR52dSc9vzxFp5GRBqLDMHygnYH5JQpX9MSXKkS4TBTrounfL2351C7MnX",
  "key7": "4NRDfY9Vefv934c4NSFQs9kR2cD774xsewvD1RzFMEEzegdZKisfZ6GZWVvqWBeK1rF1oe5AqJcKC1cMM7iTkz6o",
  "key8": "4sajnam4QV8sJSJo9rx975UAfG6y9khEx4Mek4X8TqKd1ueQsSu9bnh3omHneUDuQyjPUZasFiMugASb4u2U8aL5",
  "key9": "5hMGAHQAaeQLM6yBikE1VHhk5262XemF5xEBMhtLHwkGq2ziYghUSTsHDDU9hbfhuN5ULy9jBvxsbKuqxS2p1Mbr",
  "key10": "3Pbf9Gbrx4QtJ87arvtvB3NJbef8FNSsAMjiicypKxutcwm91rGJYgC2W5PZA4G2khcEK2aht8rwQL16TrF3VcmQ",
  "key11": "fJfG9SHRRjFLro5Av2MwsXB1oJL8sYPgYavXNoTJqq2qycLfzY6biAxPPy86Z8VD1WP5Fa2bV2bpwWKCsvNdc5r",
  "key12": "3mUMdSn1B6j3FLzomLVMJmP2RaAYZQmnZZbegqndVq9WkTt9k6U8YZoEhuiCey5WLHqsiTr6Y1LuoiFQHwgw4peh",
  "key13": "2fzi1zjLhuW14TsQNgimnj6mVzNXYoQtDKf6WgcXimUt8mip6jKx5FyP55LmmmFFsSt7gCRbLXqwRTWCuCmjRpfk",
  "key14": "4YbVetpUVKFvVEQJHv8TwZdBbUat3dUcWVQ2TnrjuYtJStiJWs7MEKdK9KafVyLgRC1uuALAn4FBPCwvGFKeN9ZE",
  "key15": "4EzrUiNvYXhYn3heEetKA5pipQdKiNy95eaojj9Vz3SBcmSMo88Fb8DzbDww3BDrRwFmEbHeefyirdruMAXTbzjo",
  "key16": "2RZU57PUkgxcpjvewhe18SunGYAN7HDnTaNG1o1mEf9W9m1cA2BazxdmPYphxybMpV2xfgN2pHtmTv5frmqFrnJC",
  "key17": "3xRgiYjKaqtydzWq7jXDbESpb4NMHUZXCtu36oEy48BWBBKaDPtztVYipVF2ycCJfucdr7pDakkQwUwzbvNfJjsT",
  "key18": "3yoC48PmrqgZihTFFZKm5L5kcRGWzgUdmeWHWPkcYxuSgRVMnu1srKT1a9xgjxaeDK5KdBLdj9WmAAwv5QUV9enV",
  "key19": "4dr73Pj3DMBE3DqgWBeq7jLMt8om5L4nz6W9jTzeH8ijGBHnhudE9nBBUYwp4qK24B994gcq5CGRXCvG5zbX8RTq",
  "key20": "2EgNedqcxtPXC3sv7ktU8PSa9NAPwWVrAFAWrnPC9yBJVnfwhBCMV3yBxiK9KMtrhhn3GPAZYCQUi1K8EujwR9VH",
  "key21": "tTEfPNSXXEWEfGE1LvkCCVHJGyPLNwFUoMWbbPPoC5T3Ao19HKhQwpuCA2kcRpmTgVtgtWis1mV8WcRwoZzdswY",
  "key22": "BmDxKQ6F2MCdsahadAEKc6miKop2xe1LwdBZkN9WiDaTEhD9dhkpd96uL2mYQKMXdMd215dyEDHEbfE45dZUcJb",
  "key23": "23rCJQmHrcCM5CA8MrnCY945BzF3Vd2c2UHvKFmehbLD1kzyRGGbojDTsrPo9VbTAYV41Hk7s7aTRubkwHn24LhW",
  "key24": "4QmEjKEg17byhfjatnRxqfnLUGaECmWiJ2hdK4tDfYhCsHieiL7sM4c7rPSiCsta6UfKhnEtiuJ7Vq7VgQKK5yUy",
  "key25": "3JKCrznwgz91rGwPsrHxVT5PtiFHLeyoVJhbmD58CinvWTznKA8fHeaDGZuvpRk71bBj3SFZWunw5YQdezizrqHF",
  "key26": "7JFofaj4rcgvGoaN8hhzm5fkPqvYdjXb7QkJjKRdWTuQWdCH7ZWYZwctaXaZw8HED6b6kEXFDMLnTdJFerh3tTm",
  "key27": "HgbTeTdBhwoiDs8Evnvp8wBtZoVGHqvdiKKTRLAMwqTrtiVAsGU7yL13Zv3LJVfESck7tiYefyTNbuKpNByuZ1q",
  "key28": "4YWRRa1nfUzNStnQmACM8thHx4JVGvReenG3kDKSHUeWZquxj34TMgigiBq5AeAbwLY9itxz8SskbpB8Q34C8ieR",
  "key29": "4j7fYC7s35w1jcmUNGA7qxzh4EKjpBFufjVpiMkzQSfver5dtQyYQAkuzQ4CPdaT6ehaLAa9bJXZZfDSvrCuD4h8",
  "key30": "3mYQrwNRLcMH7hjWdu3TJ5C2zBgcvvsTtZuuKyWkqycU8jCSKEA2gQ8KXnqowjSQnAV1qPRySGDmYE7ueaaruTCe",
  "key31": "3KjSDGWLvkyWug9tE7TPSf8jawMuM76fpDTde7ucSpL7vdQnKKWWwjwqU2s91bFPj3UBeF3F8VwTwAsLfKQsuLGN",
  "key32": "5JouyC4pf9cvdow7Dbk3ZpfhrstAWRohujNgoM6Hu87c67e8gk2tKqnPvwDmTYCQJneQLtV6YswAi64oRuGDmAvt",
  "key33": "5tJ4UFyK55w2kaqi9X64Eopx41ir8G2WUQUXJkggUw4nyjBJt5RdTe5ZWRZdbpXJN7Q8tPoxZm5LjXctq4cJPqzu",
  "key34": "noaDNLrkcLdbyH8dPQ4XoPZ3DdBFFniiWeDpLPgiJkDiwxmSrBcugbFnEUuh2o3s9nqtN3ozZHrybMTtFr3y6v2",
  "key35": "19z1grZEmSPinpxNQPHkUEkx29P2gQHa3WsGsaTX35UmrzUNeD1fzqo5Nwh6ym7E81at9h8rSXmKyFXApzGEUmP",
  "key36": "5roCNfDBUWkEEkRKZ9RRS8vwqFPebrHiWK3o7RfqrJSvWgeM3PPs6uUj1Agss963mP3QcvrfJmGzJAxuMdKyemS7",
  "key37": "24tYuBwueJYHuEPtE6Xivx8ibDroG291CagBML8u1xmdZEdnXZr1W5ry16MqWWjbr6YMVgJZqNPov6GvzB3A6ZzL",
  "key38": "3BRFLkT38ZcRSw3dexnJHfafBhrnEUn9467DR4UvyEwCt2fdqFr3iRquuCgE7PWb5DCxGZFGjGqzw9ToCNa9pc1W",
  "key39": "3o1CKirMMvbwxfAYoj2N5up3dng5KxipDQ1fAqAD18czRPjfDEhtiq8qS4mF6SXCSRbNs35gbcJrjd3W7RtHvuj3",
  "key40": "5LQBEgJNvDdvBHjHafqNwwbA5F6ZtNiDFPojGGkh3zVcdqAgV2wasHsHrr8Y9hiNsgGVva7GG3QmDXdjWosuD24n",
  "key41": "3iYPd5RBNHhPkttUoaCRCRuzhQfh9d83h594uaebxCVa7QctPeNN5ZaHzEBSFnq9VyS98hdETgYfAbRckyisQmec",
  "key42": "5M7So9AVBJWqzR6BigxFUE7qzwytyAWwh2kH9ej2kXVxtkAPo8ohPZnBF7CxAv6EzB8JLjzQ6GXy8SNPNCZiEtuk",
  "key43": "5C3S5YY81JgtH6bsnodQssKLPnXj16xzswiN66yCkdf2jiogDpnY3dL28ZCSn1CNALABqdvVPktdpxJeSX8aYyny",
  "key44": "2wUEGqEVt6eBijRyBkWv3VdXbBxgSeCySxBZJtWSyB4a39bFoz3SoB12hEekALTkVH8jH6g6FSZXvqfgersfgRFu",
  "key45": "4uuXnh5pTZuY48JiRBuFaxmqrzurPxWBxtDLZJaiHMqs1Ma8wrhaDUDjNohFtNrNAFUL2NuCixaH2pE483jT1Yv",
  "key46": "3D6ZZT5QHfy54XaHDNRCtPoBtAzk42R1gFZxWZmHC9o42mWejuj1AwYW2p5L3vaEDWjq7RqosrbiQzJkHqfQf7Vc",
  "key47": "46PjpiuTBZoeyoWiLu9DuZLEBC7qUXXxiMTUGs6eFszxHs6ZVE4hDhXxkz6R1tjZew4Qz653f3LCxB8QZFCYkjqd"
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
