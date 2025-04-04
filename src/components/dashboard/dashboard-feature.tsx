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
    "yzsk4ZadvfMvaNSZGcembGPsdH3kQEa5LMqJeA4aKUQyfSu5Yhm2hBNqcaUiE552nqz4npD4c9iELzREPSnm2Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7TszVYqFaoSvFnn7uSHByGMianWtwvaWPn95AHhrT2jH6zQwq4jmvtCmAGjiZ8FUbSFgMAw24XoEWuSmp1bknm",
  "key1": "2Q5cTm19aMhZd87C7bXUFDWQyRVzz7EdYWN4svNAckZCmLHm2r2bz31Uh52MvaFYNAhVtougQGzoBZdaFShzeZCK",
  "key2": "51ChfuSwjomov6NtUn4ggmW5WkDHZLwfr4rSu5c42XX1SPgr3iUeHLTT2pGszmZrbrArSmoZVNRKsWuDCsR3qAgB",
  "key3": "41dGMjZ1w2FgJH4eAv3o9mhKaaNjVcf7LqyVJWN7wgN5ybYPicgyk4YaMGVFnWYUC4ehc8QvKGBChGGsguCVvGRe",
  "key4": "67eEmjx9o2N5vcfgmQaVGuy7FaX3d4NPoeTEjw92AhpGQHZqRSMfWnu6JP8in4Yo5Go1b9R8bePPvHUdBRYhYB85",
  "key5": "71irg3s3F7u9YrCpWftacrD8vrMUkEFobZLgg55fYXXcgXFrdUiaAdimLG9UfKnX92QW3tBhoX43od2b2j7eUjM",
  "key6": "39dcivDbh4DpDvWiohnXAG2hpp7dmLvv19wXz1P8mh51LTdr1JUjaRZSkRt7WzAHE86vAxGngShixZTCdWWymTG7",
  "key7": "4Lg6rJmZYu782u7Bri217E1RbWSXgkxdndxHuQ6FxuFh14BcP5bKXX4beqFBvdxx72dPc5rKfkK9DY8z7FDkZEcX",
  "key8": "dGzDSUKY1EJirKaUfVvR7z6pDc397955PABzm6to1sFku63SAi2LGZ3HuUcmbEe6snFx5cusW1qmB4yhUX2c8sr",
  "key9": "mcAQsikephNtQwujaeCCpUVaPuXNaWJKMHuj4XRLvFMDTYfXmg27jEhx7Zkcyq7knymZy3nLBWgMxCufg77Nzyh",
  "key10": "3YPhfXwgHSDDnom8xasnEW9NzMEt7YE3C5u37EBC7adY7NMpuCmz6uR8Es3sj8KZzBpdjokP8iwEj38hA5eBay2K",
  "key11": "2zSgSikS4ofT6sHt6BrFrgaX21dLKFaoygaR4qscbTwDxSYNcutRq3vwGo5QXVnXXSFYVa7EX5DH56kHKd5CTQxr",
  "key12": "2r3SC3Rhxx33PuwM6AGDFJzntdNhnjbynni3Wkoi2cNvVn7ZoTEZJfWoz4VJMN69VQNVDCV7dQW7Z9qk1c3zctc6",
  "key13": "4CqRNzUB8aXLE4P43XSLsfQJoPGLNvGQSv3b4ckezq5yTkpNkdfTRC85bzAW77fBezD3pEUgJNCa4mAriP47YV75",
  "key14": "3pGDuYZJLfHWsvptwMBC15vwfc59nBf395TfU8tA7JcfNMHuMdcymyMZmrNHhodQ8ePoK5hYLjzqyBXpVmdmNap3",
  "key15": "goomMD9E1U3WyRGLb13RmtETPZfDR5FJBRvZTdLrJTeWR2oz5HKe6jRseGJtBwwdS2m3NCdQ23tZx3Vu3GAaoUa",
  "key16": "1DExKqx3Pepab8JkHznVE54neH1Z6GaafVh6RXsevv3Q2HVdDFmjsyEaLRtrySvdYQ6LSoyRZPvSA5CsW6u6qBJ",
  "key17": "2BWDHSF7q7vR3urRRpEVw9cLfJFQXqDA3CzdRX9H8QneyuRj3HgmYXyn59wCMngfMEKDw6cQ2APw5pjAu9uz1GpD",
  "key18": "2yeLbFrXbEkb5PQc1MfFNvM7eh457kUkMtC4Vr6ZduEYNy3qvmZBCev6VNa7Z5nWxFyUCTXQZ5EgWQHh4KxDc8GG",
  "key19": "38iqf13jmbjqQH3wfn7xeCtmnLYVo4HzjeqXic1CG7xka3cisskRJRbjVaMaDzQ8NhEb3TCETgn58JTBDfegCiSD",
  "key20": "3487zExNBCqohGWx89hvU5yVxD9ckQzhHHowoJDnj5mewz17SexHwF7Dxzc1vEAxC8iotkUoAfkopY8Ymo5XyLL9",
  "key21": "28igVQptEqBR9sf2j3ygE7LP9U27jPrDCmnkZoqaRzhy5KUi16bH1hbV1mzPVBSnuorTUPjgS8p9HBnPXmHAEPF4",
  "key22": "4pC5MVabW9WP7AknCMnXGzBPFuARYyMG1b6sJUDht6S92muMz1M2tAUnPv1Ei9ex1aFMWkxneDiet6d5qxgaiVYL",
  "key23": "SexmFf8BwAtgT436L6fJhoDnPrHejU5YwqAUeF3P5Ya75zeZ8Zy7C1PZsLvmcE39jjZV1J67sCNuNqckWwutFGw",
  "key24": "RnkNDptx33qpivTYgkYoJSAgUkwqwj1uBfPnNx4brJxWjE6pt1hT95KvZkS52RtVmbCNANNB919n23jj4C1ztDi",
  "key25": "2Z9YrC2Sj6t8iok12tB5HqkYE8bq7wQFKEQcjopMDGHgnka3yXD8UH9gxQ5NwjWx3y4Dd9c4URtXuhixij7swEce",
  "key26": "4qJHEFcBAJwXxbPwxZzczMghtC2eVq3qPFJjTLK2p4V1AKGxQwnWNHGTEfp1ufNM47Yk7MXe93UJoEs4WR3kb5nP",
  "key27": "4rbBv324LdSeiun593Tjh2zESZvKcm99G9Lfs7SAG39chNdXEkDPVHaCXzkpUtfKNnpZNAnkgLy8sF9p1qj7xkvC",
  "key28": "2H1NBZ9knJnzdknPFbiwCPdJXVosDVdDGrGECDAkzCQkjV8rqdS8bWS1vV9ZRHnESVrFpgzNo1bRndxjWn2LCciJ",
  "key29": "2kt5BuAMTBAiLpyxYoKQTYEQnjJv3G1L6dNGG9gcGq8P8hF5Tw1VnKzAsVDZDa46Fs7ZzsqVrwijnK7kFuoNZACv",
  "key30": "53brkzzrr7h1PBKrP5HYSzqmTXDNNJ8LBw9UcdkQTRDR98HvRpiDPZT4A2A64WcvW8sbBNRuzWLyrURfsv2CupBn",
  "key31": "2zUK9fV4r284ozxzHZ7XMQJPtp84qGWevubjs6BqhawyWJKrFNcMXZboDC1vHRY6WRzkvtwMTh9xLowtcYrfByrD",
  "key32": "2MUvc31x1HhZRyZ5bKxusdrXLNcNUHQWLRXYtFg4AqZh3LtCZbsQp54gX1DqjwHzMh7RKENJTdZGnWVAaiKbNnL8",
  "key33": "2hfUDFrijsMvScA96xCT83ePMY46sGDmeT4ZMkbqVs6kzZHidwwxVtTXqvehgk9X5VRkvTMEezfwMv2R8VM143Au",
  "key34": "LNtCFGK4JahwVr9fh5Fy5CUoVWx4HGu2mdbUXjYrMXswRew3M8iPH56Nt1Cd1s3gzReXoLpTQZMLiESF983i4gN",
  "key35": "nxLd3FGMTg8KueqJ5zeEeEF7pJhbXLE4jsUjx5GJqPVGJFPGtU2FxbJTL5mV8nVgYGNwysn2qWMTheBy8bph2EP",
  "key36": "5BSRKatkXNq231EAP4SrJ2aT8Qdtu2Uremcxzha88YBfCSKzZhNZ8Z9S9xnkivsLusYjg5JWcDjZhQGybhGo9QhD",
  "key37": "28R29rKNm11V2AWkpji9D2tWHLCcgp872x3ppYGrstAAkhKjNyJAErCdTFdzankyKJVfitxjXmV4CBCYgjbfAWXv",
  "key38": "44rXjjdo81RwWEFdHDypDsVKTjgiSdB53RiGDAXyhe2ud3nYbd1pUjyKipVrK8g7qRB6C3RAk2Fb2TfUB3EXYtJe",
  "key39": "2JyWSd2MCe9z4RZPRukcsYQaPecWmR1AFu4uTUtEEoaAbGV3x43XnQvUNtZoh8cezTQ8muLYKq8gnjiMAyX1KDBP",
  "key40": "4MEQE9xXFt2v9jBdoX7ThLuye5btukSSjBSgromT79v6zGGfE5BsH779YKtapiVjoQabqvAto1vkrJ9uPmqJtnCM",
  "key41": "4yTre44B6Zau2iEb9dN1T4GQTQxgEfrfkXugM2LMoD16or2Lcp3QKLtwdYAk3NEUC6hzJPSVJiVLGZvrMsHw6kL4",
  "key42": "2783Cji51Ttv5AbLh2yYMEuKGE69AFMYg2JC9DkH1U95SvnMoaxrtLMH7fpu8MjDXKsvmz5hBvTkBbhZSesiZCsV",
  "key43": "398wHfFoQ7ziqWDT9VNEZTe2vX1SUKZhKjBg79yRD6d9A5TH493JDXf3ELbqNrXsZVYCGypGp2UtMoBJGnPoevM2",
  "key44": "5wF4fTcDzebq1PULwimpqxBAfqHjvDLuQZKc6gCsbHM71CY4raR1LJ8gJYKthb4wkoPaX3tuEcefrVQD1235G1vV",
  "key45": "4KY7XS538jrAbrz4qEdUQLwKLyspGPLToThenrE5JEubP75GgQKc5Bk2ADkLWLbvPDbiqadLbJchWRUzjyYVQco3",
  "key46": "3557kJasbH433mmPg1rUri4nA8cwXJZawjL8GAycdcCMR87sJqnjF3sfq4sQe5wJzgeenTSWX7UMzoyYT8zssk9p"
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
