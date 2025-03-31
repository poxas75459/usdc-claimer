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
    "5LkC8BhPVNAcAYzD62EkqPeacHBdRrnwGBndcsPzx1NBG66F8C5pgmcb3fU4y9NEwtwa8Z4TzjHhDRjVnnD6eGHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XstQvonHgbMGjuzVeFk2TqnDwkcmTAbLdMbfjHkkk2ZUpFp5WmcJyBjzRg84xXKikyNVhNacSy65zEMteVNTV3Y",
  "key1": "5CLoJPVurTckDvWYfsoGeq6EAVnhn9UdMgFEY91p2bx2jhqsY8VHRkRPXqVhSSPfmNFX86gSjo3zQERRq6gzEGwo",
  "key2": "5xAqahcHU3M5R9j421qxKeXEKb2GtEhvqxsfJ6YkgMGSENvKzrqEWxCurV3DEzvPmaLaqmX7qFMUV8L8eFW75kca",
  "key3": "3enV38qiaKFfGsSWLBfq6JjEqgpXM7kQuJdCM4WgD8bQgJah76zLagvAVxUxFKn3MRxMeDaTNejG4gyXsAQmGXfX",
  "key4": "3UruBtreLD9Je7QAVEZ3Qb9RXuW3ffqaicwXKXnNFxfWyzLNvFHsK9wSitDycgUKwzzC97e6TaNPnAPumH94kbts",
  "key5": "43vViVCyzHfmGUjaaPsx2jggNsLwEhEkBJnSKzXWveatEPtP6hLpJ8ze5nN35fTnoU1UjEbgByhH1kR9U2VKEZ2y",
  "key6": "2b3nxcfKQUKoK1Sztuoxaz9KDwK1qXdbuQW5wLCZaSne7S9KxZvPVtFXfoGqrbyJVkijopdDzTvrdfKL3Mp5y8Je",
  "key7": "x13nuCiV9VmAziYDaQtb3H2d1oqR9os797g4xALDXFMjRtxYLytstgfV74sdNSgGD1GgrqSZMJi8AMKEiBseoQd",
  "key8": "vLEMGCQfiThdUit7uu7mgUU2i1KvUgXK5r246QXjLgeZQebtnqFdjphqJhvbxMVfWz7Zis9zXhGZ9baUKiHCzSD",
  "key9": "JFn1jQvaBq9Wbj6cUdLaBfdH8Hbdex9PuSywHvwPj1TxjM58EpMhsiC3T5qUmeR5mS3WXzE9JUYoZVgYzcky98s",
  "key10": "Gmw8QW6qAqRNoYuSu6tvB8aDhfoER4uqbWXvK7HCsQPLghTmVz5xnHo9pr6WbS1iK6zxV4nzhnFEsZbzccGZkwL",
  "key11": "3ipwrgGQrVuW1Xz4E3KQrU5Xtr3HjnQHsRSCopfcRxpGWmgENHQEjkm1efoXWUpLK4c9rJZ2tgC6nuWjzswja2e7",
  "key12": "5CBrDQwRy2fYy14UTuKHmaHLUeZHozhwYPFw3XbRU2Q4TmmmarZJp6w5tdvvxEjpB9x6qcz3sncbgDhCVcvGPfZm",
  "key13": "sPnpWgZhQVfnwmqGYD1BVktnsY1BhtUXZoHXaPp7CiLyUhVvcweBriGqAAkUPNfoYVCAUrV1rLXsQX86pq4eNRz",
  "key14": "31ci3m4E7UwgV5rPnVdTYYNoKnEd4XGLgWC4ompdthLateRPW9Lut7mRPgoTamPK2faWAcRVVrWspHhB9pfcAnjU",
  "key15": "66DggwuwjiEuL3F1Dva71id6KCy1eJFW2kKKuEFLyxAxnsVMTZysrtSWAs4XYcj6LaG3s1PukSnPReasuG9ckEfE",
  "key16": "JccbRhwRYnFHyJXeGyUTMNEyqUUEWrqpsvKXyG7EW1BQuFukBv9AD8VraopG1b9J716gAaFWLnFPxgprvVVQbVw",
  "key17": "4K2J5UHJjyyNphuXZyBkcYfvGY8LbHehwVVRS97okbsWBgUFU8X4CUJ5fG5qy42Yfoov2ryvWYL8UkhxWwy8y2V7",
  "key18": "bgFBGbXHpdxDZ7vTVdbPJxhEbiJgZxEX3d1bNxY8fcHe4yXMMLNp1VA67EhPZfTDU9yZAH3UAJs9nPP1f14JZmt",
  "key19": "5hBw6CVpi2HcfTkXuE2o2dP25Amswcuhqb2fRtvLZYoLKMBdZew3wrU8srKDNveCZ8gbdsdy4H1YyiEkUgErZPKr",
  "key20": "2wQoHF7crLq6apnbXRvirgJAv6YWARrqjzhVsGzUzEYLb8t3HL1rdAhWPRNtNvpF5q9BuqnMqxosaDbNWFiey1ZZ",
  "key21": "hVr3Zp8qTje72BAajjiFPEjL9A9JRusQ9xz62ZGY8emVuRQR1pueSVh3XmHLyegDzLTHqyQ21jfkabQfhgF5ZaT",
  "key22": "xFGYPhV8Pm8NevxkVJUFojYx4D5tFLSoCZSsDjsKS2gaqhYUepAV6UECKVPzmPdtztLYLWgdq5wuPfpgdAGUbrz",
  "key23": "4LAkaQX4PwMzqSRzDZ41Yp3BxCodF1eWtJoBXreW7p7NcMGBRaU2v76VKpWc3G7cf42VavgKfS3GCVb34ucDn7s1",
  "key24": "2j1uG4C9JPYARkoGYUK3x33tm2K5DsHXE6aP7f5wBMRcW8JURW92EDcdCrksZFojTr8FHdCtzqHc1xETPGo74BBq",
  "key25": "5kuqLSjqKR1JkkUeAg1wSEu8zjmH4VDn2wSg5UQu5qbv1qzQ6t2Q3tjSa6RC8Lk2B6CF6tu8JTRuazrNtWFW1ZGw",
  "key26": "3FyQmM9vLqDSFXPTFPQ6cUH7uq8X9F14Jo7k1Ts8LPKqbhWJ65fYdV2cc6pgazcMhvdaMuvJY6nDnyMUp6PXW4z",
  "key27": "5p5ydeg8r6cJu9Lg41ZQASoRxyS5yQgwyniSJbB4wf4VFMAbf8SjdR2ABXrbvGXDCrUetsfG9NgsRkbVPhRBWdD5",
  "key28": "4nrVwb1RC1bpB7aPNZVFY9BYMzuZX9v6eeYCmdQetjLqRLXPfchzAnkHU7A64F3HQxcoGUkmVMExzz94Smq8XkxB",
  "key29": "5dWrMMFbmA7MKfRHK6Zc5UrcJgZLSxeZS2bJ5iCJ2ji6KoW1s26S9ydYsxz2GPNxgVQnWcW8wxQqJNxPCSVSHdnf",
  "key30": "5nQkxTMjXuGSsb9ymVuCh6Wy8vZfg1BVurnbES4997vKGt1t7DVbjqektbJFYQLMQTDtKZLHEnycKcau4V6y2kWH",
  "key31": "3XP9GuC75M7t3LszV8dogr6e8jk8JtdR5wKWGog1jDuNS2r3YuX1n3wQdfhoKWmuqHteiUt3XC2zzKeoffnkZWih",
  "key32": "5mL47cCVbhgjBV4Em47qcCx3GfEhnUTEeEikJ6XNZ3SrLjoWzccbXU1Nyw98nTiWqzqZGon4Ww3nzXerdTjCfDEF",
  "key33": "5Ln36nGYnhcw8swqZo7biQfnN5Je3pBr7qqPfsVeBRHJ7VvaSZmtikHJ3Nej5nmDxPi4Ud2c2PttHHYED7Wod53L",
  "key34": "4NFUxsH2249JW7DgyaKVQkAcaDFxbcCzBPTAtgos7NjT6aKXd2ZjLz4fY1MZ2D61gWVFPLcFJ3sKYgi8gexzNR3H",
  "key35": "5bG6uZZGJhxTBkxRFkbGpvCfMqvtbiNy8QvwmRcjorFkaFJQSQXR9PhMdknMGZGD6mUh8F2Txu59vx6JundnpTc2",
  "key36": "4NTrjD8JqpL4nvR1QDjmM49UCRTnWE3gDoewiWbU1kd4vFCNz5G5i3XRfaeootAPivwb56c83FUMXkXPY8DjRvt1",
  "key37": "GmdoM3ZDqp94CHRKLNGU5axYXuLDd31PLMXDFeiLNxFTjn4cztCyMoNHaiLzjtzKRSaeztCTdEhdmxCWvepmL6p"
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
