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
    "3s3oBY2xYPCgZoJo9Te17HMzzUV3jGEgspohxZ9VZ3e4K9MUMYzJJhf33gdYdpVYS7PMPr3a4vetUkAc1azEP1Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ums5my4EepWiAryfDCUuGPid9BGJN2WP4PE8dY73GJ7AyK9Hw6dUGFZPAfcudLFvQoAAJL3hQUHPCp4EZtKsoVH",
  "key1": "6f21UwG8a2Qs3PESGr8Ff7hvyRQZ2gbXxuDU8SNLxQGuwoBGt8MGowAxqkiBcdtT5d5pLoBkPTxAMN9NsYX3ua8",
  "key2": "5LcdxRakSK5PMi8RSaUyy7Et4XMQrCZ9ez21Co3uMM59MWnXeaajn4hf8k7mrdQ6JxKhqq7yWHzbdndSESXAndgp",
  "key3": "4g7bwKj6A2XZVBBNwKqCUfEdRnX63uNwtWugZD4LSKqsgcPcQYxRLx6WNpfZcaHRentS8HpKeoavYyXJboTmYEN1",
  "key4": "2Ht7SoWM4A3ABu6c29aDUYRVHd67QPS59AEmU6z2cYg26uQZq1TNNw7DF38EA78xnVsFVnok7zRhzZcYWtvDdgsH",
  "key5": "5HkK6dkVaQaLZG42XA66kWA9owBoTkox3JEtzw7ShebZyVter8V2JfES1rQGuwTsGHBsxHFJkiwbMZHAhsNJkCTi",
  "key6": "qAC9KmFT8SDrJw8HYmsmCaftzzmpxrTdKG6Vc8zokworKVVoS3Yw7DJ3ZvsfrUZw4C5dt38QcE9fFSrtwK9gkKa",
  "key7": "4fGekzcMucbWwVR5pD19DgCxBhbAqv1QsgmoQoQN6E2taGyhGzBt24sGERB1Ncpwf13hwQLEwtSbvfAnK2vd37LW",
  "key8": "56oz25XuynKLXbMoLmTdfUaCTDwoxKeFz6SQfx39FGLi2mKDQy6E9SmMGHZC3ai3YtjoUjohaTivuB2vTSMYLv5h",
  "key9": "3HV7Ay1LCAk8iDitpZQGfxG1bCTHbyo5LpAJDChYwQYcksNnKTzwirCoxsQ2S3om65diPkbWjKuLAxS6CyMiPmrU",
  "key10": "2KJhRfaz2eFcHUctey9G1wWRCS3o3dEGVBDuv5nJgbML2yPzNEbAvKxSfEcGrwY7ZDB2fjiRVWu6FDdcaiaUEPor",
  "key11": "5k6AgzdEPyY7HYaW82SyMzibmw4nLKPerX6a7m9dLfmRJ4DycoMpwwaQbwbpZkE8EtT7Wpz7c5sAo9dcSpGSg3kK",
  "key12": "4pZGqerBPoWChNdtFUtJmVkYmHTQ6bgyZswa8eCGSACnuDzMo54A68b1mFuAWKExo3tw6YYYRadcBkzP1ExdQVUR",
  "key13": "2WM4taX9VPodKVkBEPzuxHwD41ecMoD2JJDJSdA1d3TWCFT6CFfeegmP5Ytkq5rgLGEGcnH4K1pHs3WX1JewMUVe",
  "key14": "4rgxJZfPuuMRxHxCykjLWwbU8oXjtNEEARSbNv953aLVW5iLV77JEySTKQtqXqPJQ3ZcwnHni5uUa6bDehBMDejc",
  "key15": "4NBB9b44sPN5jXZcSuheS1wxnJca4GL6ducTQhnKpr5rvvx1wZmnKVAsYS477N5sxdZTcYTDBwMkJEnKpaNt1gSt",
  "key16": "2LkzPGNkutp2TmKMhvAQiYa8MpQ4prktnvNDGMhADeVMmaDDYMDGXaeypLVytntETZfRTuUa28etxogttB1uJtxp",
  "key17": "41JbUNbviMkXQ6e3x9devcwVaWCi9WsB2TRhJTrwtu1RzqHhDziusY3aXoBdNqUBnpQ9tUQrYim7Kgy7Hgvu6bUX",
  "key18": "47x2yjRGqGx1a9Hyz8CpW3r4RMX3p2bThH8GZxqfyNGyjEJ4XiwCj69szfKnPpxP6KvKKQ13Hus7dDyvXb91iYBu",
  "key19": "325J5MFNvLq7VexebWwb59uBVfMy6tqeHu7BBwf7ZVohz88i2yfDREg23vzkG7XJcAXQnoMUEzyyMqhh5Yypb2dR",
  "key20": "3KpVrmtp5SNZSPiqRhMCCqkuEuuBhAhy7n6Yv1kvTzunwPPwKfjRMMgGdrYortDqtFCMGFSwjkTHWzMhuztjbUE1",
  "key21": "DV6N2AsFQczN9JVpaDrAQsXLgqbFGtiTpKLJycuWcz12RmthmNgAaPEzgbRdCVVR7ZAcYesz8gvdNmQjutLKjjy",
  "key22": "3gsJNonEC7JktSDNbkMYz1NYMTpeh7P9o6AC1cHmPzV16wRV8cmmywcZrfGeJu3Ms4azadPsXTBno8BxXGjhePAE",
  "key23": "3VGtw7eD1pJEkK1yn5dJ9ioUpFcNZm7Pu33HqFtoV3QSRs3epR6cYPGxagwCz3ymdgYPnmGYaPFWivwt5wknqW7p",
  "key24": "4CaSXtvTxJQi91Do1Vdz6gqu3d31r9n3Tui5MHFQpPtGjNcfM2KsToyYjPUW75MQdUWtjBRLJCb5qcrBcT2uY6fU",
  "key25": "3MRYWR2o6VU93tnuybVBpYnUZWMFSp8MuGU2yRkAuaFXUnoxWLcg3HrqErro6n5Um6Ya6yM14p92FoFSaPLfSG1B",
  "key26": "3DxPyfjjJvo1334hkYH35JXySusA5fQmxhm1za2oACyEp77gqpptdF37py16PqftDPiSYhx6B6CQkhZKa56bhqbH",
  "key27": "5fk7XmtiUWWu6J846LNdPzhuNZxeUxKDg7HuDMJ5KvcfUjkbkMgT7mxSK749n6XinKza6gie4LvFoTdhWfR5n7am",
  "key28": "4T2iN6785NTQt1NAZM9LRceEMMUKHAXFK2jc7zXQBBhYh3s8fqhwVWKJuR7yyY56yfPbfZG3wrzanqYjg7iZNTMK",
  "key29": "2MUUUnQYtC9bcYoxhHEWRTcVfvprz8TyWShsrCcKtHFpMBNbNqqAGcmBGuQTcx9aNbNmnZqWSGnJstKY4zXY5dUz",
  "key30": "5KNaaodqxWQbenSNN9fHhJGM9cqnNCWY6J3aZ7fHYVRrq78aUULWizr5ThtAMBzMHuk5cJv9q86zcZuaCmFBgAhb",
  "key31": "4TXyTUWAjpcehsQ9hofbP2CYQaHBWh3fLEjTLmVHntoKtd19LJ1aqPWSAjndPK2n2Sx3Rxt2AWPYfUF5NZWva4R",
  "key32": "5dce9eobywQRPitZmqvVNBi1se7zPmFwPFn8YjbdqeupJob9M6sHsDjKgZbL3mJod8Zt3pbFf6jJue2MPvBbD96Z",
  "key33": "2Ri8Dhid5QhbJsu3SVGiwxFow9M6gcs7ifmDyxkXywkQUURzji2N7KVs8ZzarkdgwqAjPuuVgJKmj4FLAQdfk5cU",
  "key34": "5mp8R5EbGr3yf6f6DKQvKTWhiFdgKURCnYhAsrc9pd6ABhSDL9XB87CDMuRwy6ZV6BZKEUxz7oZX9ARBtstvufXR",
  "key35": "1txdFTc2zRrkcJN5q6kETJCjf2j9wcfHEZwFx8WwwhHvtwb7iLnHVU6pptuozsHEgVRUXHno4w53QZuikR6yven",
  "key36": "hjfPBYKna8D56RFgWpRdVfAXnFsWPcjhSQWpsSkV9q8X1piU6FoA3wUXYB6q3ztRiKmmfnQHgEWVguZURgiQFb3",
  "key37": "3c1Bw1LT7QwqypbXEH3iPsWCMfPXzz2GtAfUkpfHK4VKGkq4HoDybwnTw1F8uTjvAAh1fchS64kXFpQYvzrK47Ut",
  "key38": "2kdYhwT9TGBUT6KvTQyXvnAytQeQhoL6RtmFxnZmS2sG1KUoLz1dFRZCD1aYJiWndhjAxV8BLKCypkanjmHqQRV2",
  "key39": "5DowZBxFKuRmJPfLJMJ8Syw9Xz3Bx6EdywMbzKqn8Tvo6x2VCZ3hhPxqAafEgzEa6rRMuRhdYK9xYrJiXrW3orXy",
  "key40": "358reAv9wGaBGEg2WuFstvTFTcNUbNCq6e95MX8w2K8PTmx7UZBmndPkK1kH7mRekWQFr24FaRTSxygu5xUr4vdY",
  "key41": "XURzCsjvcbA3yHenD5uwNUgDgDLXvmBVRjywYaRQTQDc4qoJYDzbfnPUuEA2pKzaqvMV7eSLvgK212ACKck5gQo",
  "key42": "5A4nsismyUWxW9WEV1UDPVDJnzq914wvNyWxg9XtzNxvF27z4bb9crtga6h2UcHFTiWhH1qwRkgXKHjovDQ4vPMy"
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
