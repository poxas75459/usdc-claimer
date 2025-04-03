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
    "5hN5Sxmf4S2BfcwhEkp775v1RPkVEafuTzyc8AnYnk2W2YRbYyXJU8MPqnLm7yPCyiRM3jaBTVLKoKAGssQc93hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PdMWDHKfeuBbpsQu8j5t1uXPgt3KcMTfy5evLmbhmzNYjU4z5BNpaZEGhnhNFqUotJwJ13zTqTuPQmwDENVQyY8",
  "key1": "2xyhYLJD2NA9sTxQE2m1ZVphqa9Xp79X5Evk1diZvMnYRrFqXBKVYXdNUB6qR5W4GdZggtLZfTNuzc2PNPigM1Cc",
  "key2": "4QCQ8odPdtTnwV1yMhqFGKsrRM4kZZTRunBCuLB7u9y852jpThwmc5TamMX49mK5opTRPEL7NHSU15oju5HQMgyd",
  "key3": "5E1E2PowtVMSWYfvXvvW9GiAWLixRmriEtRRNyks2wmvnsiynV7Vuwt26AMmNCvcPFv6QeZakp9uebi9Laqsctd9",
  "key4": "bRpq1XuqHZruskDWvkw6jtVwGSMovNdt48hDojwrtZUCSg6pn4njAEK1XVe4PUNXQZ2nSL7D22m1Uv6movuQ9Dn",
  "key5": "4SQrxVNjwTQjCBv5VtxYF53zZT2ni8nQSaxEaseNhdbaCnGCPq3cj1Yz9xj2FrdAeUX3xzFK4MH5uEiZ9PMXgaxs",
  "key6": "4DoASKqSncSphuaCcd9RUbmTiGdshgcMh57x49QUkvncXWWHkhDBQ4BAox8ejMVJEwte97wGQd1KoyA58UMf7eKy",
  "key7": "3VPTwMq2CTD5Kbi5ymhAeGXukDaathPW33sjYqdLLnd3vU9vVY91cNcquoneJijjUFE2E6sccTTTgC2b7JHi4QBv",
  "key8": "4uh5uPEvcMBZLsrqqjtnNyEmnM1yEwoL4D5qtg1BtbVJ4XJpB4SWvkccRRwBX19ePxcqHk61KqSe3DkNQLLoY1VK",
  "key9": "2v4vapLPA87ze6Rx5g5sEBW2RaTQQY2GbNQ5cdkrrJVw4fUze472BN7BmadRAYcQnnx1rzCS9Z3d7d9qVZbimy7M",
  "key10": "5utugNwiBkrYyoeLvptakSMmHxcuYKdbfRYmX1aWFj9JySZFwmaVsNLmb6FopgySp8SknM8GdG9aX5mgqKezAERX",
  "key11": "aLh3xCLd1uxpivXDwHcB9goMqVrBQxxCrnj4JoCxh3Ds8cvytNmLPsJ7WynEpEobJh5tBhEv9kTBALgQiEMF7gP",
  "key12": "2cVRhcwnrAhEUp1MbUAumGKFcnLbBzpd6mZ1CQYfpmp9iN1eDYwrz4BuUvKRM5CM1ThtmLNu5feSADm47G9JJdg2",
  "key13": "4pMDeaSWQ4x7HvFqDsonN3h6fLMEo9gwrFa3V3RqxMjpNzWuVGGwCrdWJ9hWpfgzdMeaDpgfRYHNBhkBx5CSfUvW",
  "key14": "5sveC4drZx7g3D1HowskAzJP99zDjxTf6yEsZZZryFMctmrKMnPeDXyiBc9S4Zb2K34qkxMUa5LAKYX1c8NUYPX5",
  "key15": "3TDjUma2Eg7y42bUnpKgz2PJ24iL2irj2uMNutbxgBNyaJ4K5BN9ZfovHbGsfGXZ25ZVdT52spSj4ngWFhqi1nAT",
  "key16": "2PqkJHy513dNwH838LHGatUsZxgsQqP3sMHsXXeYEs4BVZT1YjFAX8y6oxb2NaTv3k3VtnV2DhC1TgXwGXb6BqWd",
  "key17": "2HZkY2xLAy24RjSy99QP6uquAUVbwq93US9kaZ9HY18goiXZdxEH92xRTDDNQqLqtRu6XjKWka9Vg6sLViEpb57J",
  "key18": "3zCSauS5hqRWAi6VCV1xygaLCBf2giPt5k2yTMFxMz8PB1LM1eHZUgrR8nr8TvXEqwYStBqnZLyurrLwBYKB9Gbr",
  "key19": "3XrToJHs2VAq6mnnhcmV5GCnEx5F2a72MTfvCLR8QUBJroaGYSEEeWJ7gNeJKG4rTK6PwyPL3Lazj8K4kxUvcKoL",
  "key20": "gWi82z77vtf5E28gRLNnfM68ikszgjpQyMycaWwgnN4jKkUPrZNm5FJdzKmULaqh3Vepd3Pa3rFQyDvTLbP4Csu",
  "key21": "2aJuCyuBok5X9B4FchDidESqLeh2iQc5YuXJt3jcwbhoHDJAR5E6V1dC7tHPtEvHjtCTQWRemvMurmr9WvY33tAA",
  "key22": "Vw3vHDZAFQmeCUr1yQGFSrSuvc1ekCuuU5SPzoMfGMDrbkuS6CiM5fFhe5RCfCSLdTa8cREK1ERGcrk1BfUk4VJ",
  "key23": "4mNkMsKeh7EQTAWqeoybHWoTwWkMXzz3eDAtzLZwsDiHDe4s3y1VA47KVZnt2Ut7kFEAX9AJ991b45cqwU6kDjPi",
  "key24": "2iLvLjUbkMr9G6LqhbHm9eaQRXLBGP3uqrXmnLXzP6Ye5yamBLHfKgUTRvYcLZwj6tEY56ngWZJJFcnxg7F8u9AA",
  "key25": "3vuHbeqmuhdHgp1xe6SJHSRtCgNAoxfbhFMk1hPovxaDanatdktQgSgDCLeQ55g4hrRtUGSa6J2xMFkLFesJVydJ",
  "key26": "XJ1ifB6ELFY3n4bdswJQyfFmgyy4s1jy6zCeRPJHZ7eYnULyqtvecN72sLm45cj4xsuc8JxMoVKKydntiMQD5he",
  "key27": "3EGJfyBjsqRcrCMU6DeGr7dQ3DueyZNzGMD9j2VD2cxDhwJuab1PT15GACZE5AdxBLptdZ9CkrzxrhMU2NemkJr2",
  "key28": "4VPurKReYApVmpoc7jRVqc8FFuZqq5Rady4ZUFqyUPYZ6gfY7qJ3Fdmu4Ui46kgGk2Uv1waB7YbkFVUZ2fi3hEnL",
  "key29": "5CR94JPjvEgR33mtCKSGyvRW5H62eaFjMLp4hmvSLSTBqS4qnLHvQS4HBtTyURcc31x1PkULjaQANrK1VFBDkEpz",
  "key30": "393onLxi6gpSCL9MUskz7eTxkuB7Hwjs67XvWNWc8J17N6WqXhWyUgumq9sSunhZ6pteN1ahyVDmeMPs8BQyF8En",
  "key31": "5RVN5taEuQeAwSiLWR7y7Jrz3zZS91SccHyBVBLxGzqf8PN2Yocco6ARmKBsdHV5H67dyLEscdCaFThfAvwRJ9sZ",
  "key32": "5hNkmXFhvj9JGLiG5x3DzizsGwfRFmw6348GffoYE6t7FBeAMc4etALgGHPN4BBEVH1zFJpMga1Sm6tABmHh5xu8",
  "key33": "2U7u9oSwYqh63aZpscEffXuzPF9zJi8oK9MPCM4wKVXXRFHrq5a2MmVGRyrix9ML3hMutNCuHoUVYTjQXygQ17SF",
  "key34": "3tWTaReUpbyFnhzgXfhMh7ATDQEWesehFQrbGBUfmgfRFs2VH2oj2v8YuDgFeq6rRKiSE54w1iSCRmSE1eyXsy7A",
  "key35": "cFnRzF22VfHqQwBRCivHxNM5M5XPKCAtgrcYYfGxQ5WgC7CLyUrp4MczxVxP1mYhDCQ3Rkdjf1XAYT6d7QcaHcd",
  "key36": "2pBoTXJvHmEhGmS7vwfV2fhWdFM4dBgX1XjmEHBs2GsB8bFHE4eZvtfkf9oENPrXq2RosK8RQF417wWnyoUwYrwf",
  "key37": "2rCjb8g7rmdRjdCi5v5adJ1Vka21wZeSPDPCNhFfyAi1ed1y9VQm4UBzHWUjC86zsDGnWgEB1rSMgdYz8YoUozYF",
  "key38": "3bW65JHPWLXsCGvm1uSpzkgW9USrgyP1HbbLp29pRLK6K7rRgAfGjGPRHBYFbCKceQoNjFv6r9MnR1kN2u9JfhWg",
  "key39": "xwg9BRAZA7aVBcnM36tw9HAKVUY44aULDSyipDu7VVRwpbH9BGuBErS7T9uMQK8mZNCRpMZUwCvaGDxFdhrXjjw",
  "key40": "2EjRBFKz7QuSok6w1hLvNVfQWccJD4CmCS2SjS2WLQGFjNr26iyoPDS2MjFXUGBT2eS9GCBT49xFhpHKBgZbdjHn",
  "key41": "Vh1MN6cXNCzN7yioDQoxhrTQhG8TJ5d9mDVVKoC8ibcJmmbwqLhCJByUgSSj16B8EkDDBRXU2JyQE19WFkcEpPn",
  "key42": "4PXraPiMb4cFeLsbyhm1k4EckNgbpfWJ3DxEaY47U3eqtPGxnskWpKfz4pdXZ1mvxHWdtxLDLEnuMB1RKiadg75X",
  "key43": "2siRAY8XMzNeVRYf3BGWyc6D8fV2r3vQTRGwa2xqURFTL6p1VcEiS5mYWG1PKe4wPjbXxuNfuhgHuAuE1AUMdu8f",
  "key44": "qrg2oobZ5wNdTYhi7eysvEJMGk5S72EWJYEM6U3fQ7NhQEw5qp2iafb8g8ZGSbFEbkFwhp4YBsbEhBoApbxWXNi",
  "key45": "5extMATo92RQtyjubfuLjqKGoNS6EPA3YQwGQSfL9zLFsnuhiomX6z794ByQZ6uzkMS65S1esVafzpD8eD1gQCSe",
  "key46": "4LWfiUQDUhrvq9FbZgAXQzWoEmnjupEyNcPezCU1TVgp7UY7eyLamfq32imMxWfZQpAhCXSZaxFdHcBgqa1bkGFV",
  "key47": "3VykJAVHX7vBLdPVWQJbpguj3FYLBTspEK9mVnBnjGy4Prek9XnLGZhNvG1UU7dw2ftnGhUUMyMMoWgzeNGVUvYA",
  "key48": "23VJDnkq3Fh5hdpJtrSibQoiG5CR9vPHegJLaXmxxiGtSxksrHYEAZVuQJBrLagX9K2oL7V25GmQ7UFZyAxt1Liq",
  "key49": "4KUBbpCDRw3zHRs95vCxXfgMmChv6yqMt1cAUFbrXxmzDCXGMig6ADP9kGCt2uRJVdWwuGj3N9tkpQk1cLnR4UAb"
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
