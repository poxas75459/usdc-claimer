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
    "5n3syuXueH6Mnu2QLVoE1jszADLtPyU2BpyvVfzjFxhpStZMWkbDU9vfsoayy3enzQCKjrufREpF4Z2ZeZqAwyLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cVFKbDL85hia1iusAUWy3BZkELqtiKdDYZRkUaDF7rK21veTNTrdzVwnst1cUFfYdYvaqeFkP2nCkFypMvXK1V",
  "key1": "2xcm19VgRukqzwSVEAMruprvmhaCU389WKZAu9s8kjWNJicCQPWDM7qm1SrMTiv4ieFvE3LBJUGjcg95EhHoJpcK",
  "key2": "2KNhQL25nBM19Uvjc4Ym5AVsiuJPb4tSm8ZNhdXmbzNPyTqmvSJyFot4yJRputLXYa1BM9bycN6SYMWp6r4dNv7L",
  "key3": "3iQXChK8zruaaF8PJs4KvnWoqyH2i83AAE48mBm2w6J9k9tKFyJjh89ww9w2fRzNvmCL3YgZA99E9UeARYBoQdUY",
  "key4": "31i1tiVgP26Ethg5sYeFreU5aifqVF8Hsq1unFCMYeXuDQw7q665wPZzJfiCtZfKZoYgrY3yu7ebqyGXfm52UnNN",
  "key5": "3S5ZMjhdKb8KuQCJWdg8r2xRFyKLA6VHrYn4HXdryeTVvdGyz35hg6UGPANYAJ21sf4RCo9DsDCozXZGgWjsxGnC",
  "key6": "54Z63bDXzikpvECMpiygNP14W8dVY1DgEUmuAS1iGeipH4777iwEcDtmMFuepUbBojAfLxKrpi34v7kRHXxhHJni",
  "key7": "2bBDuB8xSseqN7nUQpKVC8ciw3ygy861vYmJ3jfFVJviVg7xtuFEyFxNEshQhq6ELBXswbCtCZZaFVXaSizTwvEQ",
  "key8": "2J5DYaaJzkC4hdmP3f2iRPjDfAtKvovKsJcopoSfXcVRjPUVtmjB4cE3SN4FB7kAdPD6MUY4rWVHqH3nVXN6ornr",
  "key9": "5Bi7qetahLdDiPswSnuLKGogdLhhSJuyUWR4W6ZMiarr42qjYG584ztY5XsMeNeHVKGpLVMBBwvcUTTGxuSwKaYk",
  "key10": "oeAxsKpgAv3ugpJLJwuAKx8y55F6sfDvLsKeJBK3z7vrnbYGhFeQpD7ZbH4Lg9mwpJyyGrfQYHLK6k7opSNUQF7",
  "key11": "2ajnJfbc5tdKVofEpTGpGCAQ1Etvvf9ok4QnpVFfBGMDrcNJGeBBtCwVH2zhDDNR9ywzqLkikvZrpGUP4kjH5Gc3",
  "key12": "2nqNZE7j1ySEFnf54rQWpeQELxLhf5bTWKZRzzdwpPnxqBSpsLjj8eqUJvEw4WKEUJMFVjGUuMpAMiz6R6ZXDnCw",
  "key13": "d5cKGeBrzsMUZTMoFd6BiGDGo5dFq6UCm3twKPD6PL6mqM8Ybxkp6mrit8oKWzpUDZBdModXePFZnQzggyajQuW",
  "key14": "29xemyy7JHU7k9w5LZJ9hBWqxYGnr1wTtmrTUBNE8PsA2UQ9qqKoLNH6BNUvrGpnKuFRgkekpMA2F5XnwwBuS4ZC",
  "key15": "3RdmYeDUSCJx6iDPh1MxGci4TD3vRkgPpcK3QFhrkXxfj4ZG5xT1ex4B7nd4akuDijPUQsvwhaswq99DS3WiwQ8",
  "key16": "46G5z7HUSuaELoWAG4iqbnBjK9vhL8eyat3DqdK2YpRLRRTFcURUfeuvB6jjXu23x4vZb2NBaHR4q5trkkrqHtb",
  "key17": "3x6jhLHWBqvbdy8RQ1X7kCApHt2KWrUMXhtgHn79yqsj4uVfTfrDTiCbnW5mwaMhNYitYdR3tKe5bRzJFFMsUwhS",
  "key18": "66ie1Ce7hLrhYt9wWZnWy1zCdRCk8YfkrtLBsEKzvdqGLn19RcBtj3bBgxL86SuGcb5tRKrt7P4xizCEPgzQKq98",
  "key19": "22Uamybrro8SuAeBv26NeZZNuLtnXjPktjJUN5zasTc1aoScTmSfXPZkv1RPnK2s4q9FCA8u4jWSppVGRjzm1tnf",
  "key20": "2JbfxhQ9mxGbKSuwhRCXrZVPD67sj5CnQeRVctJhATKt2bNCHX8kdxxHSa7UPYqssy8w5NSFTHpGjgnkPLZnZccA",
  "key21": "5KLoFG6EnmhZdhrGFReRDJnbuonjnv8WGKnPq8559dNNLnD6kJxbCKN29XnXsLWk6BvBpJc3NGyKZ85USmPN7CU1",
  "key22": "3mGefPL4U7kuUY342est13PszckmtmDRvXur2JxRHRAwDaDHCU6QFw3EoNfUtSNuMR2ZH6opnBerrARLkNF6yuA7",
  "key23": "2vT1xCCrrZPfAdMAkm7JSwBMERiJJiujqjWGeiPurMU4JW2SASB3KwcxBzg7MdCUVBBhhwFkh6Fr4FnweZSEWBGJ",
  "key24": "5t8yfa3JzUM99NAeu4oQjPn2gG4ZrAmpkzELf1WN3AXu5BDnW56wSzuDCHDCvjSUt6kPj7yAyxCEsKVUc88ZXAh8",
  "key25": "6QQfayWY5mV5DXhJ8m1s86WoBhRi7SAsx1LSQ4CCYSSU5jpQMYRjUbm96t3Lu7zXagcLxWoUtDVgZ5UqTsnwhVv",
  "key26": "vKV3ibpJWgVQ944bEuW3NZiDVvq6RvSt6ayERCCm4LjkcnZHVxhJwN84jEpEQJz5o6wjsKDFQqSgSX4RJwvhjwj",
  "key27": "bBUnsqvELkQNkcjwGvVKFtVxcWLVJHBAc4RyMSVoetoLBfR47V8KrD6f4THVqzoc3T5MiQxmDwukair8f2c9jSb",
  "key28": "5dfX4vYcBmR9CcDmQKsuqfnM5XHSwz4TiYp8kpxoqxvz5zFeSa4NaEXRyWueD6U5WL7ZoibC9KrPk2uPezsKEG3Z",
  "key29": "3RZR8JruDP5QxRoDRH8qBhkoVxMPK9heTEmyrtxy81vqBk8GxhzuFrie4wvX9N89TPC9roTcHy34bzJEfwSaFY7f",
  "key30": "UL8EdYYi1eV221QKaR48zXMcDJZxRYpFDgdhFWTiHUtrN83Tuzwj5JjbwNDQq4VjMZWFe6bzTj3WKRF8igJnbrA",
  "key31": "2XwsnnVc75AxYfZKbx4KsGftzHHR3Kz3DbCWWHCbtX9D4stiUZZy2vZnu8rJ3SfYunairCThCFPDczYS8uQzAhko",
  "key32": "5o3Uxkhs1CuAPZBQ3fA5fisacS8auAuympv7XdqcJ5EWWbD5xjVAuTfLuW9w3dL1X1BoXWVUEwqFwoS7ryHqWvvB",
  "key33": "4ASxtszSbtNxB8Ef6iEZuoJJyR7vSY6mXGH5mVpJPy9G5vZCN8A6YGBJFvpZJWvMk3u6jXGbDZuZbFbfmLZpsqMn",
  "key34": "2xCT77DmHR8uxU1DawTrJ6342TmSUtru33f4FAXeC2iGeiXQwcSvWt4BsG987BWbGg5bi1EZcnwi2D31y8a374dJ",
  "key35": "4rs8UmFb5hojTVb2DsBAn4PZb3EpENwasTNvd1n46Zomr13fmTZP8G97k9gFAyhcEo9GaL4EJbcWfsMpcTRWspEn",
  "key36": "7bpPPGTBRXTtWHeXeLMdjbkhvCxM1Ee2xeiYwUHqDV9sikmGf9nHkh2E5MmYx2Gf1fiMPvR94BAvwCyfbXgtNVn",
  "key37": "3VGkKTewEPN6HemdKisJkFCe1THyLfkCNBMrV2xPqzzLnJ1oWgEYoYynian9dLiK7axTJBtwH1NTxrfWe76gouU6",
  "key38": "213UQrbVtjjdLxBrZ3Cd98o5rrXgHrVA3UYG2SVj7rkSsAidzqb3LEcDQUA9DBAG4CReG1EtoeV2mNfTH4JaiK7C"
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
