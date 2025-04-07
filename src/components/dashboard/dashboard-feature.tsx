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
    "EwRWoDRvLVJ8PY6GDiSTtn7s9kUkjVAfzMSuQn49kHh2rBB6pgNj1wNZmBjHmyrUnXVwL9yaqtsoyBARBesx2Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQ2fmEF3CrgTiASAD7CsWdCKwAacxPqpgX4JrRHt2PhGJ9E8b55q3jPzgmGJzAPCXepcuF2887rTfPm7M3GTx4v",
  "key1": "2DmeWxvzwHxSMa4cfvKwAwPdWffWxaXokJwvcTBFhH9hhxYWkvZsFZkFt9LkgB1NzE1pUgwZx96h9PDgKwWJoZH",
  "key2": "4Cbdfsfi4fvY1RcZhpmcfBvjrfkyc6pyverSsmdsaYxuyUe9owqXWBL51yjD2hywnnbREXNG6iPSH17nzy8xBzJm",
  "key3": "3MwGkzXA2YfbaLRCLkgEaNJXS9XjuiS2YToxQSFoQEYgu2JhJYv8BeWDcdoAaswp8vgTMLDRmvpWMNkNCHeRyE2a",
  "key4": "2LynBbx3oj1NXfstexg7eMqKz8MwaaLrN39rY96Seokx1FeEL8LQhPfQuZdxtqTgbERUxvM4snYQm4gMXPTEGr36",
  "key5": "3aEc38zuEuhk7CS55K1xAG8ZVdjHLMYYYF1eM1VoJft5TRLLFeM1ipM7FFm176rtWKteUMA3XW9nXjE9jEFSygY7",
  "key6": "5nyXL75ES4KEFvhDXBM3Z7B8ETAjNQWv6qnHhgorfNWtZKW7g7RLZmHe5KHG8w7RtGYB3hoU2TT4S1ePyCDtwmnQ",
  "key7": "zJ45ENcFYszGrvDB8psnPqmV5n6hArNdz73nV8LjGs1CJpuAaT6aDzJGid5PhQZTohoZPUqaMBPY21W17Qq4yCM",
  "key8": "5H45dYhr1Z9rpYSNYPZh8mvwv7HdBKHyRAEu9MPWtWdh937oLN1zbTruHZcfjR79rPaFdtzDSHGfNRur91eQ6fET",
  "key9": "4sHhrgJcuC3M4Ns5zSCrzTi5VvVEbXRnAjeqLtkqbV7UdXrK7BDrm9FiZKHp8KqSVja2XzoJFiGT3sEP1NBWw58p",
  "key10": "v4PyQCQYxJzY5WD3crcfMPunPNUdp7fwmWU8kSmVDMfkoV1TcUkpqhH5BQC35he6HTbaeLcVs79XmZCSZybcJgS",
  "key11": "3Ze3LFMwDZbGDsVFmsCm9FgTSFbqmuFV8dLxSUiMWW8W9WsPTwBNPUCx4rFiTH696t7fMnN2i2HQtkkUWLTcAD3w",
  "key12": "3MtLhFDrLmc2fpS31K4YC4CVAFXznzhPbdmz4wrJoXQiN3UAF2njH4kR2jyVM3e1oy9oFkyw5kYT3WwmwJLkasiR",
  "key13": "21vVJSghKsDNGc5AvU1MCJNPoKEc11aRbmDSGpjTaVa9PJDWLj6Qn6kGd7q3Ze3B4qY5MozSSyriEJHrLqEdqLxX",
  "key14": "ry6gjPnKtoRWBbC15W8k74bPovSPQywoLTYsRcTfpd951n3T4Bzfw2hLRc1QTrJ7Xb4Hz5ZriSeQhAQFMU8MzcF",
  "key15": "46Bs8bj52XxmgBea7X37shBsE1tQX6uy99HqQ732NoGmMSPXSn6YYGG5LUoV2sRr5DSv4j9VWFe9vXrAELL2jXrw",
  "key16": "3k7r43K8hFbGYGTB5hoP8uyEB7uxRFF22jLk7v3PKY46WoUa2ifbFkZgqZeyPZ5aqxKvez4vVwuQuRjJKsbuB5Gw",
  "key17": "5LCdQp7XNWxbSHmuECJjx8TtAxU2vAwdbSGCygSNWM153FKJhuHT51K6WLMvHsXEzHyQdFThRPhUYreftS5cNJzx",
  "key18": "2wHuvnVRnG1eEzPcEWTbwyThEgiXyxMX1J3KqQXRiAdua8VkF3s4r4EeP5vLjGM93gkgErKBq6FnQHYTicAmx6xY",
  "key19": "4T1gTon9W9m35r1MtL13c2vTUzYsx1EwQuUrhaKJDZLchMe2YxfRFzGxxgHiSpgF3NfW9nrGPDrSXRyU6TN4qXLa",
  "key20": "DSiJ3vKaC3bEJL7mjEZ2s9bJWnXV6Pp6Stf3fbMVJT6SWiNtcEWRtQ8fnrrDzBPGL3TMLninaj4QaHFx14BxJ9K",
  "key21": "5ydiiMwh6sxcdm663fZYNjhJaJwJiXFbVmPusASrhTh22izJsS26nzL2QPPzShfXLAXigYefC8GWbyHsDFQTWQbH",
  "key22": "5a6BvdU4P78szT9uGGDvcF4RLbVDdbkswXuHYQWGWEiH7Sg9jJRDZvheWxm2grSf1mQtXTdZzWDvk4iBXZGfhGsZ",
  "key23": "3jMNs5NTPC5Cpw5GYEazJCX6owUFpYuVDjggcffyHCzQDphzsJq9jgSBEgpZ18BBQ4AyEAQL2iNLZdvEDTRANyav",
  "key24": "4uPhP2YXcvBftSXZWaXLbdqaUxvPsB4oJyM1R9aLFV6Kctc48e5mt3eHyEdv9HnLPwqVaEh9tRFFoTqUs5nqwhgu",
  "key25": "kfzbHpvgpDhrxrWxHuH6B4CQ1JuNDKjwtYRMYQpGgbeMuDgv3UoNbDeFhbVUJH64NaMEaxyv86ZY3rmkT351EEC",
  "key26": "3o8jkjbcY98HVBG9MvDoawmaC7aek7HjgvmzdKACTxjhYZzzN5VSRryxj7rmi8xJd8gnWv2eTVUxrsrHRSvhBn8c",
  "key27": "2Ak2ktsHWsyCfmdMP8cPV9iJjtwwtjT3YVTYTquG4NKqj7oBe8YkSdbZwcJFcNk2kANwBqbyPcW6Pu9EYJus1L97",
  "key28": "3SuNK8wjvcGzZ6bpjpj7ofzuza9vdk5NZC8cgyAokqQ7aeh5ZEo2kDr8zjfMf6R8shpQrHunztWBun4NcCuZ4xUq",
  "key29": "3s2Z1CgGasVwQpKFr2LsByHg6iufR9Et3GeKDKD4kdkz4ANFEJgHXppBE4GarqbEiunKUDGhxb76biwmqzcxFBL7",
  "key30": "3q1C4xK8Yf8X8STDmfdV33u8JDV4VMMvCYzPhiNGgvXKE3ESmF4sicWvkYW15uqqywuvdCycL1JKZA3koehUy9Gv",
  "key31": "gb8pc3z3MHx1ybXSPoVHzbrXUjs5SMErBVHKHVYRCQCmaE6G3zSMtK6XgpXZ8MU15h1d5HujajqS63wt7UfrLqB",
  "key32": "4i6zXfCK5QKMY9Jt1BiMjtACQfoip9pY2Cj4Q4UpTnkXdo61dqq5uMJgzjfxZx9Ry9LLQK53Ke3wqM9n4qJaMr8F"
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
