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
    "5dh3CWuyUE7ZsLtDW5PoLzrdz84iZ7uhBAhEXFSY1YyWCxoWXHwFu29BF6JTC5cozsC6buVXtnqZy9M7mho6LHRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h18Wa2NtmtLByVzLu27thzh5XMM371hBXfh2MZxUh1KUTbivzg5Mxfnyaikra5AndVF3HG3dJfkz5fgyXX5SAjy",
  "key1": "zqepyk6B4aRZcYQW97MbAks7JpVap9WLhkALxzZfj35rKua2dKczvPCbCAjLjJnexr7iJpHydhVrhVpcuvXws2M",
  "key2": "4cAa9RNr748j1fa3ybaW62A5ZefaX31YxSXN2M6qEcGVQhBeeCXPNDenr6tgU5ugTmRP6ftEm6qSeymeQm2zUuZB",
  "key3": "5puMeTUKA1QWGJ1TER6NDqiVF937wKCxMxWpismdstNuDyqESs8P7BXCUmNRkh6XFHzWVFMZy66ir46EUU4an1AE",
  "key4": "2AxHrWkXdpcGys8mYmM15j5ENobGuvHY3mAVqMVmii6rEMZzQcZeCKHN2daTvuuwzsZ1Cm67rBafKr5E81dp8ip8",
  "key5": "vMGBfGpdLzp3j3wAtdnrfixKkEfKxSxnx2hc27CHsuWMAMdKYgNniQ9HujGkgNsrpdHMibZXXzaWh4YEtT8Snck",
  "key6": "3TaVk5A9VUcjHDMBPRfbUHkPXsmM11KN1x7RQT5cFtsqDQ4LqbD5z9XyHu6aPaeDn3bxvRdaWQiTf52tdHkaG692",
  "key7": "5Efg4JVTs6yb3wucoMwjLFKJ99DB4ECQVBJikXXTSkoqt1uoyLYoy394k8euPmHFicBHyy2AsNRBMCF6jcccTJhD",
  "key8": "2SKbN9kcg6GZmXFA5uuGfkFEpy1E8wybEVxY1AWRMPQzNZ4P6qEZQqXUPV14hJ7pnY2S4z1Qr81itQP1APFwfkkt",
  "key9": "5p18utySYL435b1q1v3JK67cCsXsHC2k63a4H8xhWGfgqwGapxSp78mtxiS4nLDrdT9pGLBEJB6FxNyprJD2a8e9",
  "key10": "272x8uJMX6VAGWXMus4tZDGVsNmfjh2MotEonNBx3k1oKAZkYZoc853Q82eUEaXgTkLM26jqbchy4LwXHMCf1sXo",
  "key11": "4MBYuZf7Xa8btXgxMbtLUY3pvwGRYG79qvg5PXRC94ZioNhKdy4DHB5w96KXqPEpDCd7UoEWW1bKv3M7WFmv1M4j",
  "key12": "zZBzBPmH31jQJuvMbFachoeuaTW5J7WfY27WJemeqpuGDhL7CoQZpZbtiXQpqkUkQwHEko7EqWTRwsKraFj1efR",
  "key13": "3EtiR3uPz2asynBJuM2tqhsJv83stF4zfwMwZcBAMYBrogKtsNRT4xfMeRJ5SUEDx8YdX8co1nyaXtLgfTYmkTPf",
  "key14": "4ys8K3tPLwXqFLR1GQ2GZNDC77tjAvBq3dgKUBh6DorK7n2h2yYaZbnwd2JuRPB6ZXnRcWQFzotpS8YaF78BJgs",
  "key15": "3xBy3BTrZvTQfsjGBvMjJmWza59UkqSpzhBxQGPan8c65g2X63WhzT9fWHkG1ZqMDRFimemDaqpEyvDoatvx5W1w",
  "key16": "3VsGLfsmqFQwQfJRndUGqyVErCdfqnDyi8zzuL16d2bqtoUcq1sW4CkWBDcy6criPJhr1Sc4UymwxFYpGshqSHoy",
  "key17": "4vKuPH6xBGHvmGBNNy4fgL3emmyaEqugSXkTZu3LXK99txG38b3FTMSHHynLu9cGehBVo8jAVXxZyANNp9bp7FVV",
  "key18": "36DCmkCm82KwrUddBur2T3ySNTtG7pNtfArNXhK3FT8GTnBhnJCeZLJ3V2X2G4HrXKD9vZp4GWxdCAX55yuEFysD",
  "key19": "3VG7mF5JjkwcD1xYhRZknUPnQHBtCz8PMAgDET762gEdduVnjPKxrb9K5HWiAmx56zKNox4z5WyAkqGTAX49oPRw",
  "key20": "3cyawuV1Sr8ocPBXHRob7MkEcqHEq4tCGdnvcx2EdHaF4DenLktzrZrpQkEN86tJY96JBRiioP7JqDopJbXZq57s",
  "key21": "4wMVgBwDkjAXBZFzpmKWVr2fQXuDxteFBf2a7wXd4fvdfEzVFP3B1uf48JSL9pRxe3nT7fzwUiNbK3fvfLFCPTvZ",
  "key22": "5DBfvYwEndwZg3iniNBKbQAjDhm8AjQm35JBF8zNm9ojxaennEmLMwAMU755hHE3zvZ8Uohb9CAxNmMjNiDNx9bS",
  "key23": "62CeizUeCa5Kx1PHQw4WWC6sFA7LBHQWQbDu1zLRWgLQgFYSrguvVwPiPGbbnhRMVQrxe4UFKiwsB2pGRSb58NDM",
  "key24": "59MtGtT1F5nnBpKZYw3NPwLJjcdCGGDsXi1Bf3XKxL6ee9BgmAZUVmmFeukuywU727QqDQjW6tNcNvqLAKWhVKKR",
  "key25": "2d7TUQtNjT651WgSDYoyKCpnquo3o2wwJiErySEpgvDQXBWHZFb6LpFaj6DPK6QnDLZCGweUja5yqXdwWSSFEWtb",
  "key26": "5RbLPPnPmtr8jMJx9LCAgYBeKvFdgNGSuPoKW3U8t1VxdYYLujPdWgG2wg9Ki2q6rxR7MjQg7jaSyBMxN1N4pxfz",
  "key27": "3AuMkym2H3CWUzHX71wkGLv47HheWFcpPWuc13AxsgXVh4HLLAaN9awkLyVcfMZKnquujE6vqZYL7TDnHYvWisg3",
  "key28": "35TJyQDNphC1Rkir6EEB2BtEMiJ8PPuq86xPJm3jMoVUqP2aqJEv4AJb6KCEQKPU6giVRESQSLeRQqMgnzddfJsH",
  "key29": "aMqi29fTjg7MLDsy4YJGEv75q8xU95CvhhjNscKNdrMHtHkF6dXVdrDAyS7saC55xEDwMqoYp1Nb8fm4u6u9AZ2",
  "key30": "P7v6CRVrXGkgBdFz9tc6jJteMrmPFbJsmitpDG9CefeKaWsGMgtFQ2s799iGQbQYMxcv9EMHMrwUzndbiL5tTTX",
  "key31": "oQs2AUs9RhhfWk9gKYRWd3bWJAgSchRiNznbC9nHMgUS4mgySyhcFZjgSsUxjyqSW82sQ7122K3JGcSy7Lmabud",
  "key32": "4r2LNtsNsDi1jBbnpPah3pQm2d8PzbgWgWAcK2Y5Hf9VfzMi6QoeYtfdRHnysVrC4thcQBHjLkMNjdtqJHBfjobA",
  "key33": "3gPSXPqDypvz9eooonRFWGwW3bhXeHvQceLDZmtajDAHXehxEz3BpojPyDB1446HZLeorsqd1NKLWhs3cRc1HSck",
  "key34": "4sukAgCCSJBdNVZ2731siRBwWLMKVyFY3tbs6TzFbeQLB3AzcxMQRPvz9cKEGAq6pJXJTo6FKtfcXGNkyxP1woDM"
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
