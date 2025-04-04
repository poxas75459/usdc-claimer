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
    "4CFo7BEkkhp2aitR1FD7GAHuciEQN4CrNipEUK449vEWJNn1i2gRuxQMEKy4LTffX6Nayd3gYLu2vpcJJWVsMV9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wgy1boFy9SaBnSe96opkuGnjwjgcarq1vecQjFH3a5x66TXKFefwy2PB1u4BK3D42WieVgwFwDUCUnV8egrv1kq",
  "key1": "5mFupQ3PTw8zNNWVCAgKKxkaBvucau9JufBTVcL81zAVi61Mth7m3BDzrkjZq7qRTgK1UsNXiRoDMos6AJBj7dvH",
  "key2": "5Uj91xBvV9uwVug3J5nfgaRp4eMeRPdCnqkcMkGmfqqE6j8iK4CDMX1x8FMriCCEpSMkGpS86qa3QF3CZMB2YkEF",
  "key3": "122qQ2wBtZeN5G7fHHTSQnRivhk38Wd5wfL8VfsWMpj2UqhfLLpZbtd5uzWwbra4muFZDJSwJp28B14U8Xegp5hL",
  "key4": "fikmnHBNMg7Pxi16dZXAB19JmvAkCu5Yq44Po9SvoFB3UYbcrciA7RsBP5gR3k41W92Fg1WrE9GpCtTHAvcMRzX",
  "key5": "4CecVzn8vR9aedkMFixMJVLjKsic1y87vCGJVGYuUk3yR8YDJXVQEKqQ6Agyg2N3KPyiF8qDtueccFRTcifzFgMA",
  "key6": "4JXtn9UY1iueqkbHPnKk8og6pg494kAvXSmTJQGPXPnxrsera9rUnZGjXcT3iADnwBK5iphimWGvv8hdSriQRrUX",
  "key7": "4ENMMVM5Etwt5znUmCL8u5MNJDDhvj2T8QNQFkae6B3HGSxi8yNU6xcgd3oMXtGciosVpu2hTQLDU71bwocsHY2z",
  "key8": "21MNmUJMprANwyHa3JCdcaMAbzfbKW9G3hJHuTS62JGiBovKY4EFPSAwgT2PW3XRRAWhCbyKi33aBt8ZxTb9nVsa",
  "key9": "5LNfTE22u8u5GxZBCDiRBqj1EV99GthTnV7DJZNxeAJ8Stv6RBd44jX7rdUZ3t4zeQ19gf8pwBD8CZvFPRF7wkgr",
  "key10": "3fQjjVcfVyMd7LkcK1eDDGoKi2yGfNKA5njyFzkxYu8Uwg4khSG4YiUH9WkMcxgu1NpWdcLZN3qgjoZEmEibC6Pi",
  "key11": "2pQFhYL8hbdEUogBAq3ry1kFfu6QbT6DB1MSgyAwyF8nuwN2shGNG3tiEtYM4PyxebShE3Tx2nmTnkwYo7Hsfh3V",
  "key12": "5BxKDXgMdw4WZ1pqtBKLYuwHmV5WrezcZq58f4cqxhXip4VBH8uz77srAAXhYcAsteJacxPeGXq5oKqa92TjESyN",
  "key13": "4iNer3Z8BSkFv9RLBUb1JLtT4b7AxnUAurA2jNQ1cFrUBKs9e1Rfkd7jQPUcAacGPWE5ovjNCmsBViTE5KxaqhHF",
  "key14": "4s9JJbfwVB1sAmBcSUpN9gd5xZsEutqBt7S1maLhMjAZyWPXcJEtExHg5i3sbJYDBncLRfX5ZecEDzcDr2DkvY1J",
  "key15": "4568YPS3aCMQXZcy1KTDgQ4Czi4py1FcVogUFQq4S1drP41y2iWPNF8WP4cWB9vSPoSp936zC8LVQHGsBPPtcPUo",
  "key16": "3FbAr6YSUTbjB73FDEFqC3yMH5p2Fpmbg4x3Gn83wZiqPsuhSRJBPyc5EnXSWEiAH16inEw4vyQAXimzRB3cWGsF",
  "key17": "4PqSrNL49p6vvAab3UvgjArYSDgD2p23X9YyUiQDHwEMCWsUbuexWj7ZT8WWTVqyGeasVQRxzJcyZuZVVG8bTqTL",
  "key18": "2xZn71GwE8yPmhZU3wH5xBYcH9MkudsneZXbg8meCmkaunZ7QM3UEQ1r2VfQVABwDEuei463tC9CR2t6vTD8Ndmq",
  "key19": "3cGBcWRzVuWjVyu5rTSr9EfZocon4Yf1ZaVGVsru5SGafbD5gCbdqQgwTrnfK5PuZJjmv9zLK2sLoucY5XagU8Lm",
  "key20": "e6Bsen6kVMx2hpB9s9x6WHczyZzSKAR9pFRyAvycMcEdfcKBajZVtqv58AVb7FeZUtzK53Rv1JpxUkqrxtJig5f",
  "key21": "3Bq88CogU9FSn14iR4vvjF6n8tuzwYv3RqzGNHZENTC1hX9a6Nvth5mqQRFghm8vKRuuAkZY6ko8VfnW2mTWdorV",
  "key22": "5ViZgheY22gbeMA5MXM2ytCLd526aYEqRQdvWPzNWqV4GQmFmYYhmjQ5F8JQGcDNRYHWoExrnmWoYEnsFwoRGZ4L",
  "key23": "53QDJwBkqXBYU235oHenFEwfz8gs3s9hNeVq7i85z18tdPuVnfzwZWYhDou6LXjZqEKJTXgWABuo4egS1r3aLZUs",
  "key24": "5vrKGDuzy75enTPhavQwdkP4hkifGCwvwSizyhndoW71MVaRJXX5hgtMdJZvX3nEBzKhAnBDjMRkQgEMeNEhRHM2",
  "key25": "5skvV7VXprbe4wqjKWHvtEXhJATd5Gw4k9wc3hKh4kvKjybMXLWkT7y4jHN4actXo1HbVjJYZ81UvrFYrTovM5yg",
  "key26": "4sA6NLUBBMf94q1SSNkKbTJ5beoNA3vWooaxfvDX81LS4ge6ETDh7E5sAF9VSH5F7JHWSgQr7EJbUoGYSZHYokvJ",
  "key27": "5Kvpy6afJJxwUu5pnwwoGEZB35oyM5NXnCcAcDrjqjU6xELCMxcTBvWPeYizBVdWueKUAuGvs35faKH1JA6EU7W2",
  "key28": "3BoM4sQdKGE76fXspsCdpPhdpJVyKVGxUobRwz6WdeCBxCgP348n2ETWAmoAjsCkKHjvBntboaZhak1YwuMVg2CQ",
  "key29": "2e2sTa6Ds9eVCUkj9u466qiZqYTK4U5hzgtos44m1U92Tngfw9WJXtfnmCpXpc6MFoT1fNPpTkznYPX8JhzgfCTf",
  "key30": "5qhVzYQYAUzumJD1UuupX7yLVtfsH7TuTQ4PeLiCYn5ChADg3mfwqZbutVAgxUN5hy7gQwAZUDV8MXT22kMY9kKd",
  "key31": "542FymAWC4u1xmv1NDzHzk7wKPDCypVbFuSjaiWD7FU2BhB2ZefZU7JYvCgtWQQwxrPQkve7ekLNeoghJmzKW9X7",
  "key32": "3pscay9somCD8Rrcr7HKRGtox3RkzxKPv2iWqdzZJBinYKdwrqFS6FdMRkZRuo27KAd8Gse7oeyxdrmsJtKQ9M8P",
  "key33": "21nxT19cZRETYTYUiW6tfjR8ZfSgUy9KBd23Rrg95KRjM6U4ygsebyQSsFmZPQc3P5PYnSkUu3JVy8D68Rfb3eDS",
  "key34": "hc3unFoWbtiPcgnjCnAeeo1YwStJ5vJowsmk3XpdPY9RRxvUkPy5PdcjQgw7nNoqiyuPzu893Lo7riPJoZTxyym",
  "key35": "wbgcPwmd7i3j6wpyvVG1GEeY4pLYWW763qwJgwvMqXD47jEP9vqPu1MhoKV2U55WwU9CCZvzNkLjLBvCiUEa3E1",
  "key36": "4FXxJBtMqAwXobByvkHSCKMGnb424D2rCXeitWcSgHFAZs8HuGYGPwnhZMegs71671dzDFRLiQmpmYBD8YgkCA73",
  "key37": "3Rg3nyVtLwe9jvuaqi8AV4JVxo7H81aARxffKK9FGaEv9P4v7Fg1cUWBLzW4Y6aSSg6kNN6QFHmHWsGZCZynkfZ9",
  "key38": "3ZXeJAor2E6SCFeubGdUcDzSuRKYR7oFBzdbfYHnnUjTmM7snhvtmd11FiotXMRPkG8joNPv7Eaw9cVZLBs6ZxmB",
  "key39": "oizP2QwXDJsLiW1GUpAthRhf6EWxfnjnxroLo8FzMNXbXp4EwS4dZoise3ADDsFMqJpQyFAayzzNd46X91sEnRS",
  "key40": "3DjhtYWywjntQYvB6bE5UznVPMuo5SdiE9YjbZJd7tyoZvzBxVe461w537VQyCjGY9p4b1JGDN1qidUq9DjWYVJN",
  "key41": "39hqyvbGCgcqN2RDgoA5SmaQ6PPLm3mZ9nc4mQay6goDEa7xK5p1Mrn4UcdPB1Jssd7vbLymhit6suLhYRhUurXx"
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
