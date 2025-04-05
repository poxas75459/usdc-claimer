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
    "2gMHL7u1Y9WhRkpXjPxTfjovAH4tKbMozLiPv7UYgY2xuPLD8MGA2inGknHvUdb68DRBKpLM61hxtTQV9aXqkvuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eQcRjqZiZ6M3B9WQqe8K2Ua5Ri4y5x81k2FVvtahjxSJR2E3hPENBN787rUCmwn44KPeTFqVgQ2on2DJ9ZDQLw7",
  "key1": "25X1YgN6V9jj53dkra8PCas5ycuBDyVNQzqCESD1fRvY8iA6E9tnupZchtDAMkMH3ppiiGzfuQ12Yf39J5hwuoRY",
  "key2": "5mGgGUipSudNq7ZXLNhhFkwg93CGwWWEeVvTZ9ppf2us57rqSFS42A2PLn3jdiNniEpELoSiLUStJtM7LvcMCeEY",
  "key3": "sNNJRn6WttnUS4Lhg8dKUYzRs1TebUVE6WCxskiQhrid2e2p3fcfjjTDMfcitYC9DeeWm9K4JSZABhmx1XGcdkB",
  "key4": "3jSpa2zGMBmEFSNihF3bsGfypz7BhAb3SvHBofD2tc95ASVpMFmZF5VkbhgVdY5ubXTiksaHtVRDwKVYEBRrzLcS",
  "key5": "3coAVXhBeYuLkgbuBSpAEZNiYgbXsf3G66WYNLmKJJpbDfRgpnV6hFEjrYYJiCSHdVaZsjJZKxq3Ko8x3mq8YckY",
  "key6": "3kMkHdtAKzXSP8N1Dc4kovLDdG5FfBuP2zvqaEkqeB6Ddx7pfHDZxMSYiZDWMKLTq8DV1P7Ww2KrpPfajgMr8GHA",
  "key7": "4eFsJGvQFkQq3cqdh4HwhBNu91SddLn7midU2oQbpCZZPXnSABPcLdnKMmrUnQwJfMwMpzuy41m58kmqgnU6TSM9",
  "key8": "4bY3FvzXGeko5qWm2M7Fwc2anbMSPX9cojevw46zHyEAjFFp5eXauBMjYV7vj83MmVaky3G74B4Zo2M3wem6ViCs",
  "key9": "4ryo4p8t4YoStH35whpf4HCw5fF5SeYmCaKZN2ZzSoWRf5so9f4NpiiRLggcM1oD9BzvQiZyonTvVCwUHXsy9sKX",
  "key10": "3Cdu68fnHRRBz9Jzs7NfMMaajMdMxvw9qkYR8qkYbqE6BHaEnxLtXFWoX6w4DFpSv9JxjSCUjWfv42RUmhhAu9r6",
  "key11": "5hvz1Nq3frxsnHvnsFbpEJ7gskYL4eUU4R15SaMq1s2JARTSSh2Scs1qWyYqVySWzT8tKzuhtT7BPp1FVJq3SpuY",
  "key12": "2c5rzeg6fG2oHy6UKVUauWStDmhiD5Rb8jvnBXfSoNQMrrijo1exRNJWTTSqJ1RvkseKt7gGmV8AYwyMj2xYM1Vo",
  "key13": "4zfPs7JYq7muB6BTpR1UDm8DQLKBfgphpEqW8pREzRwJjGvCWCkP6H55b2oQhmaTKf2o38K9sxHzHo8j9Fnt28w9",
  "key14": "4acU1NBW1qxyLYz5pzvQu6LSfAHsJFjJBQnLbHYzbzgSEq712VVGHa1kjY8t7Dfucwqx7K1dfGpfDCBG8HakhaNE",
  "key15": "rwd9Z1va6b7V2stmm8W9WbsxdSAvJmJoxNjWJMHD9MShr3yRogFGzRyfhM8CAD3pN4ifL4Sep3sgv9eZkbDQ59y",
  "key16": "3f5hkueVytW4C6CqUpSJmjZTh49axoxSNWKAT5Eg76kbZ4EjGEwfZAYtyV5q9HkDqS2gUny6nNJQTv7CxF8hvaN8",
  "key17": "pjFvGYAAS2udz2Pn3khe44PA2NFiH9J29LA9hifUfbWQ1e1WaGyrVyBzpNjhJpp2sYjo8x2qapjf7o4Pkfy2z8Y",
  "key18": "4QA1DDsrncgRxc3BZU8JTsTHTi656pSGVHorXWMZJdh6kFfxk2h3q67iy9WNQg3n526X4XV6hv5DhakcWfTQNjx3",
  "key19": "4itCkmAdTUFjytvsPxS1XD7DiAfFWsYtiNKCzTgFEndFXwjV2Vv4jg9XSMbrGUWop4sc6jL6CTqZJEUeyvCKpXJZ",
  "key20": "bReeau9Q9wUhzfktmc48gbe29esJKCpc5aNmqq9HTf2za5sjzMtLvqDM2jqnQo56ShQa5UnyW1oXZmETSWbxPvv",
  "key21": "3vnV6Cci3XackBdoffw94EjyE5f95st4B6jGTbzjzxnRQGXdwAjALKcntTw5TopfC4EKjP8871A8jnVXqJ6js76g",
  "key22": "2KhpPs2VgH5C3y5G9WfbcVW6doW8MbiuRunNfAeTeUfCSyVv1gnQHZFgdJLbZrzw2VA9Z62m1F8gVqhkkFDzVCTq",
  "key23": "3qtYXEJH9L8pkYdCAtnGgShhHTrGN6iE84TZvvyTf4UP6GokSp8mZqbVH43Kmd6cLgLH7qX6btEvNreD9aJufPYm",
  "key24": "4XKYhbUM1DgJMEHfXH42zRqFpQXKU9jb7C8bNxgYJxFyGn9hVuWXnPmf6JPWmuyAAXi2mkUqSGkggDCGxEsgxkV6",
  "key25": "4uyE2WjHnnTjgCs21TyjEnSEerHYZqKrrNWJca9gDvXtUSW9uK4CkYR8ShZRfvz7CzFdNRYrYEH2aerwich4TEe9",
  "key26": "ei1VdKAxjGzjy4TNJKpwAySkvexDav8o9JejCayVxQdxpTwdvswcz4cHmmGjcM6tMg6C6MS9JKR1bZSXJsj87S8",
  "key27": "2PvX2cGR5KoETq71RHus9gTrdmR9iJMymt7oASij8bPswTKHWY1GNPi8Yn11zF6y7inQHBBLHQBnN2e2AN6R68DH",
  "key28": "3LdTdorWG5uudqLXWiSoYGadtNr7C6L63yb16TyjrGcoFaGvNohD2htJAUS3uDM6axaYTQMQX5Uie1csCdsL2Pn1",
  "key29": "5bJwm1vsXY6sBhwRxe1eUgH7sbdawd8PobPgG53oU4qc4NRD36cf5Sp4T1fHfWAHKp4Xpw6dteJgWLjN6LB2Yydf",
  "key30": "2sJgHNnwyKGgxDoJDXE97LDrbrES68D8J5FK8BLpYHnwKus3P8Nw8wnwEB4TkidD3tZyncgLfgYx1KH9Wy1oPuKE",
  "key31": "3avhwvLZNTe9tjh5yrSAmYL5irHk6kWgxm7tMb1ASeGUrsRwgRGxsjNb4QUamfc58PqhazvTzUAvSfMwQmrNS5NK",
  "key32": "4TPcbSRsHDn4jtnt4nRiumca2TATrRwCEJ8xd337AiCMYU3v9H7o2t9T9E4Qki5Zr5J6wkp8GJS3D1FwxDqh1AkZ",
  "key33": "3vAZSjKCb6R2VAryqJxoFjFrNvLerxNGTEmF82PW2dtr8MNnLgjNLgqr9uAPAXnqTd7Tam8cq7W6Cio9W5Gwaifi",
  "key34": "4DBYdBvLkffW6C6N4t8ehXchoWCyKEZF7RwbMyXoqZ4uWUhX2cDe448MoTojJZm2XfxidC5Ac93VM55eESEdhotQ",
  "key35": "4fKAfJMPkXdqkMGrSL9BLmBKxNXrSgPQx63V8DfGXSJc59fc4X4Z3THKXJniJSewhJhFfcCNRyRZA6bBCPB7WxWa",
  "key36": "xRMT94RB7z4bwxkvfeHrJVZvxRkV17QUQVR4wRBzLo9WbxScACCCjfF6QgLoT6h55cX6cvZ9acZu3UraqhcVqu5",
  "key37": "3bnGafoAt7TFmMptJ9dByWj5MgUcfmiDBtus42YnYdZ5JxT4qtPBe9zeGZRtgZLXBvfpuvVCjUmcvRgH4nYpW2m7",
  "key38": "3sktWRifi5Cs7GeQ2LMS3WEuv5sdryHCPCB1qnL8KZPxPqw1jTAcNcfDYfBHDDJ5BsBMthyxoFcgJn2war6QUP2Q",
  "key39": "4VFDEa3xZbmZhh2duBYwS4kLxHtC8w5FQsNsed9DR15sKr3CCVLPQfnDUGVWwuaMmGKVJJWs6ZBS2RhxnbmrxErN",
  "key40": "5ZCBjqZEZemmgeZf5UpV9GxxYtxCAgpBiiqmxwQG6LQbUkZdmtMPZUoPW7TgFwQtA7BVWQnGLNDb8w5vXNUdEKQV",
  "key41": "L1PupMagpKoCQaE9Ns3XJcuKiT8oRT5kK4m71nHxJ3HKRFGmk48jMhwb1eto2HhP1VQv2dbmxpKW2QJtMwNdDZu",
  "key42": "2LoCpr9GxgZZ8SbxT6feQ7tWSELReZTyzURScrGmmpwN5KEEU4et6zfL8UaCYvcWweVUZa25MVnWecApG1WMAY9m",
  "key43": "2hxjzWgJdUNvuqtr53jFz9dgkg3jhxarRuBkXj95hFNKhMWRB5BwpdPVSqFRi699XqBHBkowJ8YZ4MwHqrAR4RKm",
  "key44": "4fjD6KW636EJUk5RmDAHtVVY4xurzsYudmqmd74RjZ6XbddgWRN53Ds2ZvSTrgtcqZSHJmNRGYMYZjVk7krk8Ct7"
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
