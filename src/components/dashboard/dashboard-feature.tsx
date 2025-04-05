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
    "2PQ1oamQnc44tEHynU22khgpKJEPyWhsgdrCsmasUYAktLCsTDtaCr1tH2DD2AnFLFXZidfyx7VJCZw8pcDUSV13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGaT7iBfuqKfvexkSgj1vwUfFpV7yJXHedGZNpANC5JTSL9J33caPVPs2LJiGiPh68UBCVW412LGx12nnptAYP8",
  "key1": "ZDP24nvfESikhkj3biiEMZ6dUGM7thwFgjmfxmoYDN8XZnbBXN4ZjGjToGkrGA9egJP8WcMFMffR1TCWcHkvyua",
  "key2": "53Pfw5dEEoyyWi4NwkgKSYfp9xUvsvGA8zQhTL88pfVV6NT5hFtLKX7r3xWQjsyE5NDPLZNiqiuBAaBcK422UPer",
  "key3": "3BU7zabxMpc6RDqYW5ouXBPi8BeLfMHRc4j38eJrQabpjsxCf6z2jTMR2U8MLLvKzwCFM1Cfr6QZ86kRL5vfyxhA",
  "key4": "4pam7AtjWujpKMjYAJ4wzeBZfHVHxaQAKsbTEAtqzsRELZNWPb3esZ1uGxnNd1fPdvwHvoxbQhsi2SQvLCxyVRT9",
  "key5": "zGL5JzgjVrBxPih6u9jdyjkEiX9ng8DKjTqGQ8sbZJV9PZH37GG2ZUb4Ez1MA3kThAjQYTPycdjUcamnZSZ3Th1",
  "key6": "5ipAoptqxBVUqdRwMBL83uo7pA3MB2ecbCa9aonPmvy3vaU8gywF23GP9ouNSqSSyEm2VN5WDoC6aNC4HmqCQWnx",
  "key7": "2dqfqGJUAThHHRSLRvgSszx6tER9d2dPCPrWaBufjhLuMCaTuBagJ2xkGuycDLX6st15iHdWS9MwZv6LtT84mN77",
  "key8": "KUgqCCQnYDx7umJ9stXSGiQtfMJSdYouDsmPMGK8DfmQaKVBsqZzMFi79B3EZbS7oDEVwAzSBPFqYamFf2W9nRY",
  "key9": "3EzwGqqMrkmuvuQdEA9A5EzPPLX7gVEkG2CHenv8VLoApShsWk4DbkxU4pesmk4wC5NJHSsEVzZ5DGYM2Ren5FEU",
  "key10": "4pCYFN3qYWmpecaDUF2kfG3Y2Awrdg4w15xU7fUKPaEmqvuL4ZHMMRBksBbGKnSzswUziwtxqYWoCbLBEyPP77ne",
  "key11": "4co5wddVVyUC2b14BXKEgwBU6yALo2N7PLLVTbB3qUqBYyfvbvn1dbLZQu9YmPWa8aAFRy9oZAwf8Go52F4wXpgp",
  "key12": "2tnzV89mjz51P5ypWGnpSAZ7tAjg45MgH1E6CwzeoWfPDS7i5qM4KDMGi8eMcufkqYa65gznSHxADMhnrFcbn96X",
  "key13": "5e23modqNeYydecvTx2xsXobotkH2k43zMLxSQuBVE88JQ2jYuZbYRu5yqqHxcbJ2EmJsV1z1s18aztRqEqhPsvN",
  "key14": "2kFbVmoVGQgJCX3voLo2a9STRPyrVX6o4S9xCL81FNPw4iUHguywsgWvbiQ5i2Dj6bho3C7xVWyddh9jeq9FdUyt",
  "key15": "pJnATVBsD6wwVq1SUDx4o8e6r4T9w86XkXaqLD9e2yRq4JPTjXwTSr7Jt71HUDUawYUNsJz9h8k93Y6TbxKxU1D",
  "key16": "2XTbHWrfbgCthV5JJcLumeBF1ZgEnodLNDPZLnhzC3HmFYfSuCfoFmjYRGKsHatC1F2UoPio4U5KLstD6bKYkqkJ",
  "key17": "H7WJaptTE5E8KMmsomzHJbTMjmYBaMUo1yeFLHKDpDjXsyMczodmsjxHGLzxueYZuyVQuFoMDKsidZzr9NDejhB",
  "key18": "3FFSQkr4Sujh9nf3Uot3oeGiGYUVRLNf8bsa4Ap1uSB78szZ6aGwmFJPpfwb4LGnFQ2BZbcYHUdUxmB7S3yweMER",
  "key19": "45U99DPYbH9BqfiATvvKGApRtChNVd2Q5N2J1rcTNU9MvzmND2cXFtCnaz8NrCxaQHPvz8HSBgLz1UN8LNZspQMD",
  "key20": "3espCBD93x2z9qKPwdj9ZBQxt9k3dSAH7eZ1D5GXcUT7SrcZNXvdQHj5AGiNamEAJ3ojoNzEGqi7XnKBmBLh5aS",
  "key21": "4JDFDnBWRHa4c1KnaUbUySfCCziHQJNS7PNwAfpRnZCcQaWJwwVniPbmAfdzNbzj4XrkJ9TtkiyTbJec9vEjAD3p",
  "key22": "2RoJxKGPmqP9Hh9KNNmTqoCzUFuoSpm8fcxwXB15dsMVmbTpMeXJqQCLoGEJvEdW2FANKbces4X61XuSK34sNxE5",
  "key23": "2Atv8SugYyHHgHVdbX6iEkfxBJxd5U9XAsgFByue2akXHa2VB199pLBAupWmYsSHmiGWBtNVjrt7oiobZu4vn9cQ",
  "key24": "675TdfYBaXuuMxqHe7PrRfnZ67DLysAcZXQp1tpihqNBMDfkHhRGMYbJcdVwP4Qm5BsVUitdQ6w9vbVY3ye4m82a",
  "key25": "2K88GMNgeM8EDFNscQGfFWT5bcXtPyTiEBvjMxsEYWvLHLKY47hZeurLwksVHcFM3MjmKxDoSXomWGg7aRTzqrxW",
  "key26": "35T2aoYgh9iQ2VrHiCjxCQqFXzXEVERVGVumekmC5r1S5JeMw8vP8pqgDzbDYU5KcxppLf6SD4dbC9CfH2xK9tkf",
  "key27": "4NzGkYQH2npiCRpT4gVLGDRL3DSmTSXGvSJTPw68A1FQWjFfR62Ra5CeyC91Usu2xpX3NZx6y8GLYgpg5gSASPgW",
  "key28": "EayB9BHzpZ4hQY1BdVuJJV49gBniD9kBUGQHst4QvUPrsP4GGNEBwEEMRWMHdRyhhoUGuW1bBP77VUTwCXEMuce",
  "key29": "2Yvkz82pqff1EjVCA3MFehGsHpTEhudRrH1PZxtSHZMaDSaA7F2f5Sy7DUT1wmrVbhxDaL5an6MVE6emv8koYpZm",
  "key30": "2Un1grho2XTK6QNCyoVonYK7L3VehGxzW6cvzh96QhHabZoQXqfwv48U8z5iqjcsv5NAvbPvukezAz2HD7ZRbKcU",
  "key31": "4AvmMDuTdBMcNxPzWP4MJ1tB9AvfnW8EK4hiMr3oER3DFUUF1rUWVAWaVkZq4S3wBDp6vUNtDhYBqdu3ohBaYbNw",
  "key32": "2bmFwLjdYg63KgSETWWmvSdEqZzc1RtYJNqaSAehxNnJg8BNA2MawWGZnKDY1qf3sAvGkbgWCypqhKuc2Y6UnDrB",
  "key33": "3FtcQq1uVB1AxvV8Zn1LQr6WDjxDn9ExnF1F95FEUXhupQh1RDTSSY1bSK4DaW3Txb1LSefnVZSSDtShgdjcdjFB",
  "key34": "3AptXyPvXppt9ChY3sGF8MxKsGHg216ozfQtG4haHZCyJyNMLPvzXPyzeohd8cVYr9S9WxSeBM2mkiLfD15Gv5wB",
  "key35": "3Sn7MTW8ono1Zgttrx7rehf3ctA3wMNny6Ea9StARF8xtUB8frL9amrzUmvPXdQANj6hyipSw2B8htjhyJ1ezWBE",
  "key36": "2Wke4LbQYFq5RViEatVmSGKdmHGE77UFjbTWZbJrEadXePtmXRhUduFCY1BD24Go8HW2R8RPRhqAjNHfoLSYH7Qq",
  "key37": "3xqThTSVrzgHXPdtvQSxCtk4bTUwQy8zdiAH2r2MieYCBxErnCTMNsA6afsRWA9FKZu2TfXUWC895iYJABVEe9jd",
  "key38": "PaJxpjLb1wg5NupnFd3AjwFeHKZdAd4ygByxXMFFDkrgKNo3LWPwm4WeGr2ggsDKF6tcUJWsw6x25FJwc8vGup1",
  "key39": "2v1CfDXDHbVLWSEW1Hag2a7xXBS5b7avG1S5NFDurxaKmKqMqwLCch1mGkoR64R6b4mGityDjmr2Pc5scQi8TcPQ",
  "key40": "2VS1mqJA1eyCdKZAfVcWsTQ8ALsVmdqgW1HPDHVcaxDGb6FcP3RfbAd1Exy1MFDXhnVNyRDrrKgAXLAotEXwPDjz",
  "key41": "5YRRJk4inS6m3Yz6YnTA1kAJ9hJWNZKrxFE6iudxY58AT8fDHihTMYRCAgfUjsP7X3zLwK3H7XJRjbcm6U27Xnqk"
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
