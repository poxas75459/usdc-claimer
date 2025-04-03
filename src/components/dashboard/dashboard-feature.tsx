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
    "2y3SFdsnjHhrJjeCMQeoDiwaCdYeFhhEg4kyTVKfRaevD4P1ueYHRvohisNbwEKoBpY1HmoBkveB6bdWfAz1USmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMV5WT1utnEQdb59QEyEc5ezWMSUjaEBxJ75DNwgRnQ6hypSH3XYhyADJL5x5KRtnKN9ExEAqKSjPdo5aG6nJ2z",
  "key1": "42iqynpspJyZgHXSbVx27iNJhJRv7ne5nsHVeo6GMcsAn6rxyCUfBE8anNRTEWsnDoZa4cuqr4xqCFYRrjigQ3xn",
  "key2": "3ipFhFk56YPRX64LrZhxYU8eNAs2Yf2Ts1KkSkbRJQX5rUNyUp1X3ufrMV4ZqwkvqWQXMMefzChybFDgmp3p4zdh",
  "key3": "2t5Kxy7vBaWSKnB94TP7Rbx4gLDFH55kHxSYGqopg7cdcsVAbxuy6x8DhgPWKyobkdnv2fsAxYT21QJeKYfducd7",
  "key4": "WdDPa8ktnEK7y8Rtim4YFVmyU1Q1M45zbbu91J9UUz2XYinLCmvqMqkkCsHv8HpTByU2khzJTW72RW2dgwwJbfL",
  "key5": "3uyd3GttW211EhS9zLd8VPSVJf3qEqphbSbWeH3zAmiSikabynUPrx8Mvt3NyEyszFwd8ukuXYi1xdagN9BqCwr2",
  "key6": "4YU89grGEzPD665dpzcFCD3Tx5z9MDxSBuTgNkCf7zaN12YWQJmq6rvkjKeWqTcMdyihPpQcStM5dHpsE2DigUhG",
  "key7": "4xZhjfXFqMXSHBNwd9mMrF6oC2LDztgE6FhPGaTnBh44wv5pLnPHKezSVYspZuKX6DuDV7A6xajRrtKkNrYyYSJH",
  "key8": "mrcUpUGDZjSb5KqX4PTjhfWc1muru9DdfN3ZShnzRwqzYVbQ7XJpAS7zhz14CAwhEHeniRK3GPSH7kQx8NGnF1E",
  "key9": "5XiBaAjXp8Xzor7fjDA8crxSDs1WhPqyA5qFaRVivgDwPqJaHsuF84YJjHMvBTMNRZs86pTYjRuiCwuptGAiBMKM",
  "key10": "5usRL63BGVx8wiZJ8kGpzkewxU7GCeVPSmodUobbzHfTPi4veM4JG9VU6cnAMih5BBcG2wZJRNZ9s2Fr5WLuDa54",
  "key11": "5bVVVBPUe7X278TzRnTStRsVyugE1eBkTP7627Wd2GrLAJbxBobZKQFdjCFuci86y5rNYNy71DJdhrPyQaZNAAxR",
  "key12": "3w8gC7pZyLC7ecEK5WqYd2yANAuBMgwJo9DvAz98X4VD6CNe3ii9cH2T26kxNhHdcviL41PyyHm7vr9oxrcxiF5c",
  "key13": "3zrvto3Ms7ZMyWEX9rLUqvdnjdaUvm4wjZ83wHEqPZGYRWzqWAoUNnHwfHTmjUCdMfdmBcmXyqFKpYmEquqH1c6e",
  "key14": "4gNzBYo4UJR2Cq33g2zcV3aQtQJoa9kMU5bWLjjEEFdJaQwoZCHTJLjmTDWaueXMSer5G58t4pzYngtZWDvMxGoJ",
  "key15": "5aJHfEsWGN9nwwnBtKmz9ux699iuy4TLELcmPhfDsgQGAV1M3wsmnfCAzpgX54p4Yo3f6vgy3Q77znTAhRy2wyTd",
  "key16": "4gecgnUWxFT9bFzs18cTX2mHZW2XiJz3CSw1PweZCR6H29F6eAtsJ1TAuCjmk6LCrMwHv3JXEmi3hkMvk818kVYy",
  "key17": "4io8GZ6D2YNapqCzz6k92WvpWosMye9Hk8fqYGM3jqBTFuR7ipUSMCDUZuYNGTf6G5esJw5kWPo8ew9P5ovtw51W",
  "key18": "Nkh5TeLBjLsantWSgHV3LGqHrNy4vH1GYBEiYDxGuWAHeHX7B71W5xC1wox5BXfzunSDBrVB7F6kRS2XfuVrrBq",
  "key19": "5zrcDfgjo3LgY5HhnjJsRKNwt8ijHcfuo762e37PUHaA8q1LnbDRvpiSABCtn7BNDuZGSxVCXhWZg9eUNn8FgEY",
  "key20": "2SqNbxnKFx22izdZQHJbFZat38eDzfhA5XHRHpcFbVqh29zWMUV1XwdiyJUrzmpRHv3soin48NwYFri7S5gZ8vXM",
  "key21": "3SzCbvGPurJTYAuVHKdSRyciEr1G8n9JBeQLzCMNYdJHZeWx6KbWWnJ32a5YDyJNjFa6CTxgBtsRS3KMEMdto84o",
  "key22": "28kcdA8BPuR2FETtJQX57aGqkCpkmuiJAqAJj8Vwt5AQNhqP6pKt7McdA1RT1w33t3rBFMG8STY7C52k9BM5JfDv",
  "key23": "4zSWWSwkAKJ9aZyA2UrS8Ny62qFL2EiMy6UNy8aJDwGjH1fAxpq1urFkj3d2LJDZizqECLzky4iRUWjfYy4HxdL",
  "key24": "3JbcCMhR1DQhFUM5iY47ZW2K2yBh4i7i7s8Y6Vu8dbiZohZzK8rfwirEt5iRrLZ4YUduRk1CYbZ6Tnnonaw1LtqQ",
  "key25": "zcHGoobQqeotvsgfaALRv5cwHKMM3PS5oXzL9aLRPyXMLpsE9fAmkvdRRoJqP5ctGMPadpMMr9Sza5PNWDFD3M1",
  "key26": "5gdvCV5LwZQrj9LLVE3Z49wibs3GAkm5QfuxH79GqV5t8JSrzBGTRojS8QRqVFWQPd484uz7cJ8ZwsvxWB3TpP5P",
  "key27": "3j682YVDsKgFVcXopvgieR8i58WVv4SQtqnM9jBxaLEaccZ2FDmvv62y7fD4KpxSt3CdU3fyaBGqidNw9DfcWKon",
  "key28": "8YRMhDdJ1YBy7CH3BHm9oiov4niFEXbF313gTjNz9MMTrn1CHy9rM3E6T84bLHKYdBRBqMt1HjnMkxZuamkKUP3",
  "key29": "5QL1ayRNPiCaSwMFmSJ76NiRFnVLvXCDbf5zbUUmU7CDNZLrmWLYXQ7ddJDgWwT1iBLCAYnfASxNxSHpDJLVrVGC",
  "key30": "3tjJBfSC4yjqhPTLoZzt6zW2RCa3NxnJFPFKVYuotGTEKEAbcqdiX7g3abSxUc1AatbPQ3uECxx2c3c5fhMVzBgH",
  "key31": "PDSHv5vbi7gzKfj6o3y1LbS1H817XoBL2LrnX9Zqyc7shkAJtQKzyY4NRy4NepGSyQSsk8wfU9ZgnHsmoyqidxp",
  "key32": "33HFbPNq8Wtf4NTyZDEdeWjpewUHioNNr8P8Zz9XG3DsyqgvXae7nwAzqQdbrzTDcWGRBnd3pCY9tpdCofSE8oK9",
  "key33": "3itPJxxU4KFEkvVEb28Twhurswkjjdk4AdGoSBk4u5aVxysRkJz7KMc1ZUChBoQf2wSGGVosAihp6vgobsteg3Qi",
  "key34": "2N2wM3DevkkPZbUwnTDJH5NsFUGNd1qZjPFVmpi7F2oYTNUuJqWJQoDjKMzq3BSf9xpCJevKbhmHCguKMds98Byh",
  "key35": "4z3faAZ5wj8hDAs29Q5jsVUyWZxyEGgUTWneAYtosopkzjoh8mZCwSnm4hjerGLhUZvjHpu4w42Avfdc5SMGseF2",
  "key36": "56vWNuw6zRUtjthravkMUQeB9L5viqbm72yX1WAAAMPVgpukyoqy89mgSfZvh4NYED36jVszAzvbx97P1gqzjAVu",
  "key37": "5u2MwHuZPLazp2zEy46YNgbmLzCgqPvM3zSCr4JF44YGub8FFrmdhzeRhVScRrQ8EQK8TXhfEhjCPWd6PkCUvNgm",
  "key38": "5YCFVGEubA4dDt6rmf4ZgeM4zhWPzD7cwdCYJy5sTR9m7N93723nwT7sCGRv6zNaD5me3DxFwk6fAA2R6E5ZTjTa",
  "key39": "4g2cR5UBi17dJ5Mq54MGHW1uWAQyyt96GRV4B13gusBuuLqx6wFgU8xvhJzrFnn9Zu8DSiHL76WUZtmtGf7wiy4L",
  "key40": "4zVjiepvA7KhtajtngXTUCRWW4k7WvhUJ8bkfpDhEJ3bmF9og8b29PdKVTc7uAKC2R45iY6vus54uhMPDmvuCDYo",
  "key41": "3NQES76Vu4vkYzcmJtxYxVPZAyKpDJjMDMcf9Tj5QLQdBUW2BpuHeYmze8Swv55AEh64GdFYoQQ7MKTQWRym7Luu",
  "key42": "4SJyJwdjnoMJdo7LEL5YZHC3Sy4YKLN8BHypRuES3GR7BNMXBPK7yG4Ei8UFZy2nstGQ2BsSyFsWmfU6YhvGJ9Fx",
  "key43": "7n9WZWqvLkbFLYUHneb1fYQMKqwXoTmLmu9qa84dP3fGSBWPpZLcmw5hHV8nfsYu6zArhb5HQEhn4gcK5oxn2Kd",
  "key44": "29TiEqBsFZW935S7SPiX1koPwxo3JYsyDX3JCVzL4pDW3dNa8LpxFcT7Hx4wZsvtvzoQxD1SXMPb95Wo9ZuNvQDz"
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
