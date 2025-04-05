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
    "3oy6c3FsonqbN3s1pbNGnT8ebhU67XUw8qBUNRJS5eXxbJCFH8PeEQcw5rpQkBnT9ZRPe7TMxur6UYFaqG7Qv7YV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rExAdrBDUVdHCKpbXZgqhGZm4npGDWDjxHiQBWr3H6s1UeerUG83T1L5XCT1ZpHim1oEqpKWfcghxKaA5iKsTkL",
  "key1": "5XPzbQJbSnwjP6sXUsnqiiSi7eJpb7PR5ntpTUtaJpgTTpRFrAv9WKHVTmgCcfEFXZdjoTQjfTknVW6YxEmj3Dgy",
  "key2": "5YSqTGKVkRWmAAkvyQWvoCpJWPp5dDQW6KT7WqTgbyXVBP3zVgX2T2B2n99jQzVJHBPC8J6nesW22NFcuFJiNf9P",
  "key3": "4X9X9pasMqh8TNiJBNo3tnhHbbL9suX8wpns2PjuBhAXvZLDvxXpym61xTyJvWPcRKUY68FRFbgHpUMhYeAXYhLm",
  "key4": "54yKigeZF919bBhxCN95pupTHJs8TJqLGxPZarbSMWP1wQbAn2XherVuNseXfHFAgD98YxpNQjs8kn6Mo46z1NGz",
  "key5": "4SDYwijiA6pvjXLn3Yd4t89CqUH4RAqsgEQJGMKiAfYuhTzbpqSZJWiWVy1PYiQKB4czcTbBhk1JBczqG9c8Euag",
  "key6": "5gKgym3EZKJBRsJaskQLZLqht5cFmuHUqoq6WVZwTakLXTyNk9hCeyr98AtA1YTH5zAbKq1UysZLMa89GV44pfb5",
  "key7": "5xnXt3TF61mvaJwupGWrjZtKonu78MHyF8k3kDqKMz3vjNUWT9TM9y2ryd5pw22LRvusPaQcyFJxtTnk51FSP1rF",
  "key8": "5d85bTg6JhkbtAqcdPkEUDWGCe9rnz2K32R6grCMoSspnUpQ5KXpokwmfucbsRjmvEpsyVHyTVsgW1ASHtrCDdda",
  "key9": "2ACqk4uiLtpcB8cf2taa1DGMGddACcH1ULbHyrYjkdbvyvTmRZ13t1RRcvY5FTYBn9BrFYW59CQ1nJx4x2mixjsY",
  "key10": "1FQvaSKRoEpodrAX3nDuEKtKSf5kYePR3ppRr614464FcHUZnEBPTFZitTtfYv6GoWCdzYy3hUPgMa9qYcsgHu5",
  "key11": "5yXC2KJW8Vpmc9SvYwWQceB9ZpVgciYz4hrDiuGVovZSh5Wd484eYgyrwo31UP7HVrRC2zNfEkyMURATvyecgqvb",
  "key12": "2jrw3kEXrABuqV1jovLyDRMfMPUbrYEBAHMTA53Dgg55PLHwAkU4RzMPqMbyPki97urQVV7613FXDU2kAf2C2MeX",
  "key13": "3dXN7QJBxyDTTmFWFaG9AQEuUyvy3ftJxb8m3nVq8XqVZ6Po1x4NXCfJLuiZXC64B1g9MWNwQcNH2c4aaQkgN6QG",
  "key14": "2vQgBGyUNXdXPVw7ZQEjN43SzN5kSmzeaGksAZk7DMyrZUCf9gCTDJnoWis1eygwCd8jN58ULBmiwJqsQiyH9hMn",
  "key15": "3dCqCiYJL5mJ3tstGJC1xkTmrP9ckNvZqS8rhMogD9FwXSbN3SJ4nC2gXXqK91GMGc1QSwdkPmoNXqUHBmR89t9c",
  "key16": "3KUqfvpFhv2fMDhDb2GuiWJK8RUzdkRcB4t3BQJkJ2fuyoLznmBtPwnVSV5Wbn8p1fhapBP37iRmPoDTo3rYuNmC",
  "key17": "35rT3beiNMkfj5uP1nm152C5KxqASZkLM3QZvrVZm28ryDC78svJqK6EAxjc4iPLTAEP2ZGzv2QRZ9JLj5ExTLze",
  "key18": "221i4L5vsU4ADih6GNQrmGRjeoxqqVfcBVWT6ThHpjBz2uyGiACefSUNeJ4JvaqoqoKxB1YTdaGyggcJ5WexzUya",
  "key19": "2BqUJkR3LPSxcA14WeVqYkvfLyErNhHkzrpvfwJpiA26p5X3LMMLKuoYbvs8kijYSvS1pZ4QiJyvyvpmTURo1Bjt",
  "key20": "1kmmuTyHp1QNw7iUYLRQPN3joR7cwFTE9jEqrE9vM69Xua3R222dCozPV7yn3xNn2d2iLkhsiktu895weFXpzUg",
  "key21": "rsXcRTdkwMiqu3PcYPwgoDBvcwdVLZZ8XiEDgzSfDsj4etgQ3M7hi8yDiNsrXnegw8rUpE3ShzU6r3xfUPMk1zK",
  "key22": "5sCUSVGSFH3btmHYe39RnbkN2EQpc5nEGKh3HVVaQJQWgW2NHZrXFLuZz35dCWbCEmyjCsxpjzKpNeoPD3x7xRfU",
  "key23": "4BMYfjMeSgyQ8KSqHNQuMhT2jeK8yNnhaP41osQBCke1Sn8z7izKqPvx1Dyjh9H5CscTeZGQRokCHzLdmjmPym8Q",
  "key24": "5pwmfDnxVTJqRtmbinravZNN5ZSDCCLS7WfgCHsnGPTBymdfFZ4ToxiBQVGyrTFGxYki1mbeSNx2JGfnxBvYS1DM",
  "key25": "2YiN1H96PScxApVYHh4dzJvv3dMbJksjmX6nw1nhkY3S44u4VbesrcJ9919xkJTvMqL3bSjkN6QGu57AJq8iSfRt",
  "key26": "4Y87SAXv86L7pUwoYvkcf98JYiXaYmEaTTRPE5RGSYkV73E3mN9zaAm8phxFTDVgJzjNdA6DVMW5mC2dWAEFeoSZ",
  "key27": "2UtsTdDpTTuDn77htNTLFYaw3vGoTbWDDzgHZYFwJmhGnWufJL83uyM5XAzUWsv5GQzCPdRKSWHB3JSnZyjsBhBU",
  "key28": "5bbyPupxU5Cazqn87rSZxMxhugUM9CTRnzqja4BsYn3DKgNUKr7kLoCqvUaQuKtaGFKC3Koz34hEgmzPUfc2sAwq",
  "key29": "TgssgKGb7ioF3G46SFbUEEiRYMftwkpFuYyeqiMhmFBMiFLPPxZEATGpGSMS3zBtrgwXL2KS9kH7ZsuxPmituAZ",
  "key30": "3y4h4Ld4YvmiXELCSABDHCGrA8oEyMsh2jn9qf32McNntg1F8BcLL4m7TWfpeWLbihLiBqeoXJuxudyGdPSKiSnX",
  "key31": "4kP6pTQ9rJNy8E4oE1PUzbxfbvErAj11uZDnkix3Jj9YBuPXsD4rmXz5aGhNJpGZmZhcKvxod33m59dTwHPGkojb",
  "key32": "3Tjedv1B7j13B95uK4A4gdDJznPFjBpY3NtSyzZZe1KjXP32DbhYYU7tyxg8AwaPrSt2X3SaLsyXjDFB1jyB1dPk",
  "key33": "2snt5crYhfXALAKkea2wFYZVysKGZDgqnoUdHSim9ovN4237aaUS7oxC2CTNVRtUD3JobVM79v1XRvHu1Grdr9rf",
  "key34": "3a8iV7KqGiuifNg13qDwgCV5xzRm3Wa5qfBBqajiECDBGGQfLvsUtikYh7JVTxtfb2w3BB1oApejiTnNrbd37BGr",
  "key35": "32WvfVotDFvWC4fvodC14pCHtDhLY6TF4QwNW5eNDwy2ii5gaoseyE9Kb9iUUrKj1WtH4uiEFWJ5cconKfN2NqVD",
  "key36": "27JG5GbbnQDN1v96kfwTHR5z83HgtTkU7M8pjNX37RTd43vDMaNAfJb9Rio7DbKEqEHbi6ZBVDKWkzJobT7WHaJn",
  "key37": "4wgqHKn9vvjD1gKU6ZVvGdfb4sX678YWkSmPDm2GwnLsuvcA64k11cZpfnyxj4nHhQhHa2HykKCVq92qfNFxE6VH",
  "key38": "3eQsiGY4bc7DaMCDUz8FfUYygsg2RLxiMo1TqGuzRYreFvAbjPsEzRzJvUYGVNVVRLZLgozbZBzh1Lrn9RLzvup6",
  "key39": "666rsxP85kyayYU8pfDHBygE5AyboeLj8dyohnQrkTo2VYY2KfTHhF2YXmukWNYNJ8xUFZ1nXpyV8JJDS1qv81BN",
  "key40": "2dnSWcXtAWqqDQM9RCMkwte6RaZaL3sPRj1QAcEibAX5bGH5KNC9m8qnwXZDjsMgBDcTJMRfhnyhM9k7sFNTbK6L",
  "key41": "3nixdMaqNGxX2RqCQ169iWn6JpcQx66k7RKREiRG8Hx5AoAtRGmasD87RU2BW6UfLB9Dq8s72yjtc1ygR7SSdoJK",
  "key42": "5g3aSt4XcPKVifMYjX2GWKoPjT3UbuKAvuQDvZDZRyfELPUoZv9uQgW7EoXChuG6SEXfzgp1xemQwUGSnF7J87iQ",
  "key43": "2NTRRZV1AR8P7NBrxdKSTQuZFujPw5fkdErMfsots1QXn4CirRy9s8cxv9X8w576wT3pmNzyFJbD719KTPWNdYTD",
  "key44": "3suDykD6PPECMzrj3gvE9r2CmPGfLwCMkQQtZgb52Ksxw6RGebo54592vo1y3rHPn1RDMdDAPkRmMmcRUSoUwrJH",
  "key45": "2qRxQsost2Uyqf7DZrqBtXqQDvQ3ZGAQ3vZ5Y7usVEodNhxzaK6m4acNpo4vK7o5Cs7zBaoJUqiujHvnmkF5yL92",
  "key46": "vFqWAx56X1cb4ssYoWVKH8WfUZZFCJuZTbNEPmgEwqciTmX1xoyRBU8BtrmtogLuycG5uWRbAYeYSGAAsT8wZ73"
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
