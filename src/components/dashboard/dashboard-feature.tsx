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
    "4SBYJ3UTV959Vq9vrTaR3baiF9M2UfceVxsG7WhaX2ApVe9VPJGGRvoJBxecWhcmpdkQkEARUh71JB7VKZjZLXR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HicjjrREtvhA9M4T8LBem2HJM3tyuHZDz8mh2Ewc5WdRoLo99jyp71nyJhTGbmj8TqaggCsn7NmufGxSDrjcqua",
  "key1": "5AAXUXkoYiRt99AfEopdYEvRghXk3VVcRxS3mMGsUNQXZiUbrExJcvPzmwd9QZpuYsPCGrV7EnHGd1Z1r2c5rWBM",
  "key2": "4FmuqdwdU9nBw9bPoEYUGXY6UmQ5sj8QeCQF6kVk3HuoakurRdQkKRChBh36dgwQn1omNt9RSAzEfowNBgFJwMzE",
  "key3": "4YntTfNnvWUXwENoC6BiS1mcEasJiZ6BJqKRDw23ogFbgcy8Z5CZyGDHZVgts9eVmSoiN3peRwh79tTeGh82x1Cb",
  "key4": "53c9n5KXP2RHRDS4ZYy54XZ6NL8CYrz2GFHEDC95cNT8sKNCXTVvjfNiZ9NGWwZDC1xR869ySoUoexq96YBJpT6s",
  "key5": "5i2z3jwwTW6UAvcDQGm6dRYjNbH3p2u6pkLXPisk3FEXMLkJaXHjaB4Y2cyQenuPjpDmWRiHEBD9ySzG4HR1Y8eo",
  "key6": "5pjSFLuKr8WdT3z3ncEiCUiLMC3qmLxJB1ULwsoPFo6icGWkL6zMmBp4rWU7dtMNQJuN3RHLVpEc6NyxfiDShr4R",
  "key7": "2J7Gvp8y7W4ec4uuSXYCBuG79bvbzamRzimaJ53UHeMcqCR1JCtfm2cc5URh45KWSg3yUMP1ijW2fnc3St2vhJZQ",
  "key8": "5GR6AXtRh6sffWxoV5cMUcrycrfqr7PMXihtafczVgHAmpPw33YKPxLn74SZR7nqkept5Ms2AD5XBUj6sWvLoTNS",
  "key9": "5VeG2MGcuHqorcViWjMP7DQLAxKAjEYivgJWzkd2evteSyGxrwJgHexUbesNA5t7SpbzxhVqvz3cryyYUQjZefZV",
  "key10": "3gPkybhjqeyBa4n6Jq9i3jkhycYpG2TtUXrfRf9H6Cq8SqeBwgAyrDiv7TBy9TBoogixysM6L1LgVTY9CufdpVh7",
  "key11": "3675vbG2WCrHhowEtnC5ynaPfjTjUk3tc466MAFFZZjgn6PQbK3Vn1eZTqE2ozeQgTnt7QayUrMACojWrVkE9ay1",
  "key12": "GKGUnxjeRs3N4ZDfYJ8exZBh4Y5bVEGt5YqxUovjzYRFZfdmyf5vAcXm3q6Pmzxqh2C5PHqbyuBmxqnYnMRPFL5",
  "key13": "5irqwgNxqDWEX2naS2auE8YSPmxM9bgkH3KwSsQ2LG3eQen8iPGrHGLZk4NXZBjqh3tghHvPZuhDobJTuC28fNWE",
  "key14": "2YXA9NByVG9fvaAZJJCBsJSenwAhLodGbPBmyyMu42bMBJDJGMFr6zQhFZUHAnngottrjSELLe59g3diWtGPL1q5",
  "key15": "YbKZwJWDfXtNucPWnukGcaQ6oaMoRRM6BhpCSAW7iYxWrb6oJPa6psdVJNiQLUJQLRznWTfY4nk2EM7cgtf48sQ",
  "key16": "5v8L1RxLn47RHixigxisfsm7ufqKP3DaKuaWAWc2WSbR4vrrmwvqRRFeKEaJmjLSrDxUcWUoK5F31pMomiMMsnmY",
  "key17": "xDogyK2oYWM83q2q53RcGDQixaeHjfURBmJGdeJU3Jpje7ENuFxVAgE7dcLhyDTeApgUnmXsMm8mF7YkC6P3Jkg",
  "key18": "52ErT1oyjvKrVYwCH9DuENJoKZzMQbe2mU3jyogLLb4qNCjJhSk5gHPFpEL4NHCgkK4zoXdizdfPz7zpfXA2nLx4",
  "key19": "4VHWUZmsJpTzUXGeyuS2dCsv78DeGBSkoTK1RVWVcnJPfPBxZhjp3KS4PYJLrttjHr4EYMiVAPr8ZcVpgKanyfk1",
  "key20": "3SDU4MHZwPUt7t8Vt9AUMNaETxTaPjfq2AVHkPiXFRjQjdfP5jTjV8u771GUkLX5BxRxhnyqYaPJDnXegp7LgdDf",
  "key21": "3G2raJA8piypf644wtohtXRu7jfceviP7WT9UnkRmW7nJqc3S2B3AsSZtCfD3KHChFteKwgYdntGtJLMAdUht3Ru",
  "key22": "49Vtb1peeuMN4kHKbisAqz6DNTGvx1qmhP5L4LQsT1syWHaBWRCNzrWuqPS63xybTD4iQWJxotagoMH4oPtbkBWd",
  "key23": "27qU738xzVpsQphTofLi48r6TK6iw32X8w4xekjLhy3XkK7nGbbVMc8RTiN8s5TkXvReNLCU76uh4g8F64vqppTk",
  "key24": "3RuQ8rYoXzHRGzobRcdXswoV5Wsq5Y6uPXv7KzKrVhWiba8HUd3R1NWLXEK66jbngxxnCySzrwYjFmxtpDUErNpf",
  "key25": "61gcvPjxpbc6wU8HDk5ntRHzWSsEorX5jadqrnZa551FCBBQadtkkQfutDnF2QkdazqAiCJ6gRgS3geH8p7FkTHn",
  "key26": "2953Xq9tg2vZ437rMuZjaziUFyCV3PxguLKKfqHnwTZCaJ1d8X3CdB19uFrRmfuCtasg4PMDZLFDE3AB3w94KsE5",
  "key27": "2MkDfzVbEziBipPChz9GUvQ2rCUTXBuManHVrgEeeCPAsu7woQQhTFb3tUvgodkdiDdnLszyuh33tsvmKv5Y9gab",
  "key28": "3oRHJh7WjLDjmjpYBHftVMtt1ri5KRb91qFMMpmnznrgW8W3vHZQtbn4LtFFALzXW99PEgiRghRQPVUEEcLADbfw",
  "key29": "pMtvwdDc8NxhxStHMjzgjUFaM9gkvwYHmGjboS82r793SmUFpKTXooHuaTBtAjVeoWWQFT7V22weZno4HtuXYWz",
  "key30": "5W8mN3d5VtwGz6rvGEVRitbcV6r7AE6Fk2FdQroSNBRipUoDmrcuFnWKVEdsykGLCC9iabwnQtRqMgFNzmWbz7pM",
  "key31": "22AQY2Zd661zT4fVAEZeAY39kwJUiTPkF9o3KQBAcnhb1oRY1F3uJgfC3RxoGZh3ACrWrVN9ycA81qTjPcEBVGb1",
  "key32": "E9t9z6f26HNbxeyFcCjdCZhybzNnPWQTDcBhHCjqKXaxJ2ejmJHnCLbr7C1nxKdWeppu5Gr4hT2ZKux8yjkNA9f",
  "key33": "23sgEWdjqw2i4pKP4EdgvuL4igUf3bPPTiKKekBGWwpExknv6vxJmctnxcTxakv1mMP1nG3SQzSap7TszYuHvnwU",
  "key34": "aFFF8RfLkHMR3L3H5HgLEy6xR6vjPitZKDyssocsphcEqzy8hfEJbp1yrJ4xPoZ2no4wFZF47z9hDturLsTo224",
  "key35": "55o6spiFm7gVVQA6qtZsG9vHQLiFmfDy5RYSH3iDtw2KZZcVkA4Hwj1CPDkT4xfTTvUKUnD6QvHjr38t5yBcwmGY"
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
