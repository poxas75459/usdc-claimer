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
    "3zdD4zEsp5bkiho3cPZkRBiQfMdtAGXViCeaS3Tgoe5uHdZ5nA6dth7aRLh5iGysCjP7UDff5M7VvcWEBr5j2df3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBY26mVPaLFsuhEJYs8rfCAKU4nb17tJVmuoxLMMVS5kfDViPvN9uKNHz9tywJqP4XpgHuAosdDy3fDJw8CAgSt",
  "key1": "2bjeGJLWFZi2gMXyACKzEdpAqMF97tog4JDH8m3ySyG5SDRvXjwnJpBFyxozkiJJhMPSq6JJuPrTTsUAA5SZs1Sj",
  "key2": "2mzMBagMF8A18ErSMo7unk8HNDR65ekfnuTvHRsfz8edASBU26eZ5mLy8Z4CUQVHtvsHx6Q5vxRLy9oMBF7S2TFq",
  "key3": "hU5qfXZxTpcHPyGcfgXWCcs8mVj82BkDB9mnhZAs3KKdVX3tLLJwpUAXx1386aMLC8uXFv1gpafv7pQ7hdPqVJw",
  "key4": "3BUcsDX8wUfExCY35cTFh2kTFNFA3MpTdwQiByaZnBMZWURReWT2h9z2cPxcGvx8tfVBfs91SyhHytECRTYjNFSh",
  "key5": "2wA3dzKZQ1YSVLL6WubioHxjHGc6U6AW9oAdoDY5GNoGg6nbSmeLZzc7oNxdWgG9ShBXYDymHdQEzErXpsbA7XLH",
  "key6": "2o29ZHJuAbwchyeZHHBcShSJg8uLxhQzpYyNwhQvw1sXuaRT9bccQaJCGDS1UyL4bZxHLMfCfhnLf7V4jCfbsAPj",
  "key7": "5BCRiX9GwqU8aBefrBnk224KczZmzUE3zMfKrcaLohQvgGnZYpuHRt8SVMb1r5o4PhkvFQkaxoSjrtKjGzEibAsE",
  "key8": "3gKTsU9HWcdSxKcsGQ2SJJ9m1gC4M2kRnqhJoXpVALu6PUCpbpBjSGPazswnigx6ExwfVRhxsKBkDPo1D3oct7KV",
  "key9": "GmijZzBZvJVRihhCZsSxTJqbf8rgbKeSCjdbEdnkqqMSFGPYisPUAe4B88BXhRkMarUFbJA6pk3svLMzyY9qJ2E",
  "key10": "4TNgG54hnmtefE7hQfJ2JT7xxuab7bz2oxTkZGgYaZ33EAyEaEtGCFwTqWsT6utjdaH1CUmjCUHXw9ufDgqbwyCi",
  "key11": "4a31AkjhFQoGvtttGtmXq7RY74Jrv62JdXC3kxccuU7NobTWMKqihygnEjtAE7QD6roizfMvJFW9jfcZ2ouXUM1D",
  "key12": "241U9kXQzksY3ngPCiFzHLPPkpwvGGxUPTv1qxi59AapAM9brhLFdMLgPLHwqsSEQWM67MUMR6UiFvGfUir7PDo5",
  "key13": "4ig2x99Tv6oFk3LKj5g7mDHeScFAr96pHEoNctrXqxicubyhFPfwe6jkwd1uCWZihR21RbABETG5voXhtx7446Pu",
  "key14": "36pR9AxV9MZf2Yqav3PvSYEzVhxvcTphzBsGJvCfmeB588qAonAYLx2aabZrMKdGkneLkgSvGgHDDKN3k46zBvXk",
  "key15": "jtCdrNPmFqEkgoTVhxfpDrkpEANfvoVEWo66eBSXmdbTAFRgNquZrca6iqwYHHx5wZzBbcmTpeqMbqMbbjbhF2n",
  "key16": "4NoLXC1K6x65594GR6zscBjaC9k9w4WMNXCdDE4yuRgiXFhoxGnndYELixnurKBDdEQo4o3uY2DspPTVQAjVFjFN",
  "key17": "5DXCokDmdibGX2UeFLFrZdYCkGcrWr8CHNmX63z8YowMxaSwicuV8rYm96VnqQaEPgVmzASjG7eJHDAW1ZhesXyd",
  "key18": "3jmkBbUairZmWpA4b6ujVX5JTHAUD6d9CNoi2MA93Tbgwy4UnvAK2imGT5r9j48o9MBtP9pMSgvp1Q6U6ekjFqzz",
  "key19": "5a44LdV89nZuW9iwD8HsRm3qnpCmq6zgNmEXW2WmcnqtEbR5bj9os9LaqSFtpUc5rErtcnqrS4LTjbijVqgiN9Ya",
  "key20": "5rrV4sL9cAtLuKmwrh2cLw8jPZiS6HzrKKTFsGGBQG1woNXwcRrWHypZEBvmkn3EJMUtbxoDYYps2rSf9AfgqDsA",
  "key21": "2M5CrZhqtFp4mYv2pRHVWWqxcSVkrAiUnsJJHyiKgkTKSqNg7kTZjtZbG8kDQC4S8JrGybDZ5wGuNvZHojv4beoM",
  "key22": "2nPubijdVP8i2GAmuB7ZhFfqm2QkvRLMiY8yc4dipNwCeXtanW9i8XyzH8abtHFSFj4c3SrcH5h6DfxoeFwhhYRe",
  "key23": "47A5nBcDYBJZyctyUuM1VRSqKDZjY5NZSBJaPrKDDTuYCexNDrpoedYUTVuLJJyxCPEmHtwZeqq1Z4N1hD8ih27c",
  "key24": "3Sv7yzZXqfEHsnYejTVSpKiptKCA2pMSdvM7VmXqdmDqtQf1q6njnrjKuq4k4fs92jmn8HaxxzZhcVHzJtndDcVe",
  "key25": "3H3ppgvh5QUBv7WMqZAt8QLwbeEp2zMkYeb8CeVLAJZ7SoTiHYCHLn61miP5GXMynAdrBUN9kZ2R8ChSkK2QVF73",
  "key26": "2xv2eiLB7fvvRQLcfE6Zpe1Tasw6hMziQXY5k9hUNs5ZkSmYMBvesLbouz1YqDFxQiSSf9iRcN4q6auTw9KUsP2z",
  "key27": "2jfDqUnoe4fgpV6u8GPFP1gSvjHcdGN6dg4qHD3mfYosV9YwCjTADn6FnsKrdUEKxrTEqWJw6AwTf19e1SMzUbtB",
  "key28": "2w4GnVE3neudUc8rzmFaGFaoRbdy8g8Q97RFwULPEZizebGYppjqrWxJ88aFg8AaRT8CReU2qX7r1m6SJH8e8vVm",
  "key29": "4c4nKahsi46Ufsp4ZUvxbr9G2LwcybUXhEM8SkxmKmghgiZcoWFQRuk2hX4tptkeo3RLEV2QbXCjyHPEcBFbmogX",
  "key30": "4zMwu7vH1UFzsGm9JMgtfah5KfJjJQrD9Tep9P4GSBFK6TyXiYRCMKavuS5NNYWoeWdD6pb8qttPbptUTy1R1MKn",
  "key31": "58tuiXWG4R84nf9f4VsN7kymh2JuqcB154PzKPkb4RLemFvkvNeEdQvJoKGBM4wrDbhXnQWZZQUtTwKMmLsJ9m2F",
  "key32": "5eBNFuAq3Uoehp5oVPD6WXfbnLyCb5Ea5BWKTC9zfuydLi6xEZQ5joXxefG2PjSfA8dr5YHT4Y1NZXM758tkikQd",
  "key33": "4XBwStoxD3A7DVjKsKMnriEQmXKg8mDopUJM4jgghu2x25sNpa3YM89NAf4zwKEEmTL6aT5wFq2HhBE3TjkhggYr",
  "key34": "5hwjHqz8cucfciFoYGbopbp3AtdgXLuR8K2Ws3bdW564thmatYc5q6ACS9BiQryY6AcpLLRGtVwqmhZGGSuWGLjw",
  "key35": "4t9oEGfGqpFHHWm4hNMytigbZh1Hy67Hus3mHDdvTq33dTfpQg9fmcmamXEtdw3S3hqkybgUGsC9V4KS1cAvychF",
  "key36": "4JRwSWuLvH56iizq8tWX9eWKtvtzEPoBrhmuCokWN57DRw6FBUdJK8hcHYHsMHDrEMxgBBAgY4Q8ekWygcMsnoxf",
  "key37": "2nLuPsRReehV9MMTFBLqfWjpcdDewENJrq6mcpJTtMcDz1AJyKoxCQ1iHT5cukZ75uA1TsbMccKKRGLb1rawbq8C",
  "key38": "3QRW2EGSbEdKLjyzCb65T1GSeT9GwqtbPRZHo1Tgs7dTfwn1orEKPbwB4jYsqbDjksvbgbKP3YrA3yzPuAphpir2",
  "key39": "4cddMjKMCZ6LKyXQGQFX1odWzt2jaFFikU9EyqEZ4jvQ9GDH4sLwzXve1qtxQeFzzTcfsYoXWCshoEXLRq6kVPee",
  "key40": "3nQDrpaQvjKYWNxcimuRuJMZb5GFf2KMMoAgdQqNjg2eo7usenBhb6zpQf6Fo1bK221RR53fgkRPuJMvswzn3e2o"
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
