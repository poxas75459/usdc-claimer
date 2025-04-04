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
    "5rXjKVGGd64tVfBTfoxsrS2Uz2Bz568qGbGyocNLw8c3iRFEZREWupqRG3FnqDaL5zh4qzSF9fZjXiassug2DCJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRhnCZBEGesXPN5uu92KhdpWSdd5qcCfnpkDEHiJMcvfxUX3BDBWw1p228rruM4wQPK94KrdQtPtvoJ3iHp2QSu",
  "key1": "67grKJAc3cqFfXwTFv8SVMp6kr54pEFmBjcvHL9No4sT26teMNZUsbdRbXdbopCL7AgtJAooaRxCbnWTLsXViuur",
  "key2": "aQCDtaBv3xzQ9MUZYpNtvvKuiHWcfSVCyJNwJSoVKQ3VsBgYw3G8fTkhQaEbC7XsAUm7sbWGQpUL7Dq2JQ6RpyU",
  "key3": "4HvvUcyCmS6VKwktoujNLyuaNwXasJfdbRaMa56qNVTcciuEt8zpJEGgDuN1HGJT9axX2LSeQFeVkDFbrhro9s3M",
  "key4": "4EUc5ZfpS1XvHfHozaC9CvRNTFUdqittZKxzWR5GKUifx26o7Y9XVK8tr4GUJEPVQLdGRfty3JwgfaGm3EeU6tck",
  "key5": "369J9JJZkTwZFQkAfuKgSGgaqurv8vifmbhTy6cYZtU2zR89cpsBodxaDKbQcWt2hToLNpKRDJ3eHhBPSamawxR5",
  "key6": "Xn2CakcENAr4rtowFTTh4rV7faefzwvTpp1T8Q9MJpqTikE5qZie33W4myFdohVDau5EFN4BkFGpJe9jqvymsmV",
  "key7": "4JWFQsCG6XyDKVZGniZd4NC3KjoF4FYKAiCpt69js34gyT5WEBNvBsaotSbrAMSGzrTPzFvAhkcquLxEJ9igRgMk",
  "key8": "2Uaiv2JekY4A1N3tzxAdPjfxtCNqpJ7VcV9uM6nSuSZPFUfs51VXrAj5feoV5wntiPfT1UTqnKWErfodrK6dzvUy",
  "key9": "2q3Z1PXTFftGToXyWHNA7MW611NU2JfegqegNXLZGfkWKRa45HTD1WTmZu14SemdAX54oDh6yqoSTBerYEHmkPoG",
  "key10": "2bNVyKKJ5xZYQcqNr7CiC2zPZjotKKaErTSCuVsYswnGa5N1zFC5xoPR7vJ2ebZfXtBPHTQ5NDu9DtKPEZNoLQje",
  "key11": "327A4FjrjE6vAWiVTRnmjVXYQ9ANcTwqhXctjEvwR5b39NEWkiTrdsG1AuikfYrAxB4ff6bs23ecGFXpCuesBWYx",
  "key12": "49EVeZo5S5xTG5nvwjjDJ1ivNxwwbCC9ZjUQZRzmmTxvDA6Jcpxhxfj5BMLBKURymomNscmpQ1indUyDbA6neXPw",
  "key13": "58gACxgLtrEmnVFNDjmviuhAYQZ3iBM41G24qook8a29YxeDfQQF5wKwRv1uczRQAayEKo1o6ZvEfkcybJMFgDag",
  "key14": "5HNFvD49USUioL22Q8ao7zyuNNSJV7N4SBGMxrdwitTNZJVUdY9VGMfFHtLFDimShWD9VJAQobt76YAKC2sbteDG",
  "key15": "55WuqLE3q4aeft1JkkawVRUeRBhtcV4Tci9TQ5ymSak1b8UFFy5Po9VcUKWf1MUAN8cjLJqXwnLNdJVx2gf7dfqb",
  "key16": "VauTFsfymnngw7FFPsAA254qfFwjYX57Re8yNbzpqdkPzhyctpGK8L4qc5kDRQ4jeaPXp5yWhDgfCpCJ2ZMbykn",
  "key17": "45iCTwsqZkCiy1SRbfdH7W6o532fQLbTzQ5ZJ9VLweEZ2kKgYMR8Kf237LevZfxT57Ld24i1AaWWP9WchchAvXKW",
  "key18": "X4kAYg4MUqxqq8L6WAj8ExL13VynXcsq4hc2yyz89F5g2DWGNJ8D1ybA2SDwtUHcc4YZufQgSTcerPpzqvGYESp",
  "key19": "4gZYhx2JUpBkznx536TWN9YAqJfqNZqPdcndakSdk65mKBMuLfdSXqLXwkWx4NedjGknpnFH65uL2zQJPhAUgSQP",
  "key20": "3KpRJK5o3PGqf5GijzM5oEpts6QK8s2T4u9kXrFEZ2nNctCXv6txay64sSooDih2ufsJWavZ8bYku4Vnqi8dEJ2d",
  "key21": "2AV61tvhayb4HMEqiQ2BKcSKvZG9pTPgRRETipf2xMMTs2jTt2eNxnYEMbQ6ZMWVoNvoNAcvq7ZMHzRWGxHYZYfY",
  "key22": "2yrMKMcNQnXgcB9RpmhsttMQ4xzMNJ11duw8zZHxEhru3Cw2amtToLkRqfBRDvDeMEpTuhJDH5PUfau7aKvdX2am",
  "key23": "2Ho5BzhqWsKegjoayn1DE4VyhMQ9c1YgLHK1ZUAQZrsArHyDf1MTPsAU5V9mc8qwiQmmfjEuGgntaMyNUjLskNBa",
  "key24": "3thvmApypWNvE9QxBFK56HGdrQhrRc4Fey7yqWeeDTLTBnRfywVEgWNnR9VTAFWNRG3PhGjrPwiWXXGRV1WKFX9C",
  "key25": "2Af9H9SsGUZsHWiPkPxxPtM5wnGaG3Ka5LCVk4RKZDKEhgFVzARp48yTCbswdJ5ftn9ecQzbXnzxmgNbx2XHQa7Q",
  "key26": "35vJn3DKuKDiXxMv5ZWdSV2JJvKfVXnaG2Ufw52ceRjLXa1T59dm351gqSMcdVUZ4vvY3R9p1aLswW9rhSmV8HGq",
  "key27": "5iSm2zxEi4UU91nAhRxbbhSnwg5X6ieZTbz7Mn6rw7mgmchYkZg1xCyQgyrpZEeuWVJ8ED7pfZvVSdaaXwNcjkM5",
  "key28": "3Ayb9PbrYTedXdnBQe6SBT48n8AXXA4efCwSvYrpEKasfpW8fxeXpAGygbQycHfNome1f4jzB6mYwR1ekeKAmkbG",
  "key29": "5FdRa7hLeUPf3YSgpezdUHVnyPF2He42sFrXDDizVyLjFnNN69LkNwtRUjqUGS6voJSVj6pG3WVFhCdgLqRqw2mR",
  "key30": "5xSYjuybtY73Hjm2BjWCSxmbhf8vSYVbnzx9dSeXnLhNZsNVzm5ag5PPTKrdahdWPjpeoLrT1zA3TqcmDcPeSHV3",
  "key31": "4gt5ASTZFAXztQ3UMHn1cGXWS1EvPPJD91pf24iicQv615hhSugEqweCBqpwcT7498dATozrpAHZ8Dj7Vw4WDr9e",
  "key32": "4t7mGPgPtzGmtZjnpzDRUaGebvw3jjUaZKdaNarbPskSfRKtrVRPhbRjVPcVKFiv6QzH5gbEEh6mhib2Sz1xhuaw",
  "key33": "5ALaLvmhR2VqYJwhykCJ6ZSDEBVoconn4cPp4a36pMa34ZTLuf4G4jbh3LaTVTzdGaP5XssdSpJFB5VQMrDTFBnS",
  "key34": "8LMkUMQKKTtjQNwMxWLp7yaV76g11ncboNZJns2MmorEVekBmrHTMx4x4aUNZsq1QKAKdqeajiqUJhZGqWYx6m5",
  "key35": "52bGTXFioKFN8LBEKcU73KNAZUHTXDMkbbX2K6k9pe1EJCukebaANP6fV6ioCe5nrW6rT4R1Ac5nq688prmvoKVf",
  "key36": "hsjM97R2p4fRx9dpKtFZ4U2xKXGBFCbGn2P85H4TS9X5KL5HcwCHcSg5Uv9BbXeZnHb2RgwpJa9PYvHunfp8wKD",
  "key37": "5CBN7F1Jy7UVTSXmiZLWRZUp4J2HhMLoRQAFjKHaLtEjvexYDAZJqmfKf9AZEYt3Lr5VeWtkzK1P3x9brwnTogAQ",
  "key38": "61QymKRwqfKNMFeYXdpe18HvZqnTRU8k9wcodwDB1PTU3orsbbQKAvKSzPLesyaA6X23nYJd1gK26C2p2zK4MznD",
  "key39": "TxFhL9aWUKvK5RDmCpVMsxhLvNV8C6umgc4y5XQed7bPFKjVMvZWPcFihPs8x9ubKd5i5kLji3bGfAp8UptkYi1",
  "key40": "3fZBxmjxzgSMGmrAHXdKiUou1bKT415Ao3yuuSwDjNAKRqDrHVdnebadPuCVoUth77Pur2TUjRrq5zrKPNp2xCAj",
  "key41": "3UkDiGFuzmu2NU7oZzaGWtKv9ULYViQfXggfAwSjiTWPuKJSTF2PgRnbJCcev1LQQswXtea746treYU944kre9Be",
  "key42": "3aDomnNnPxET1crFa4dL7Lujq6C5bptiGr1WdrwuwqXVhv6NJ7Di9ErAyuU97xCCLGVmPfhqbANEyRoZXZLHBLuD"
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
