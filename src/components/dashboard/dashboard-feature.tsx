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
    "4tCFUuvgtmB9wsFdRxy6VeBZMJf2M1UDg3JfPTcetYtEfM97iHqmzyxVeWYzfn9UK8mp7Skzoy5Z64SfLkbYptUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoHXky6QRNmD1eFfwAnKcB2EKAdevbZ35VHD1apbNse1tzY1wKuTQ8f8gsKRH28dPd8JEZLUQrVeQtHPEZv8S5j",
  "key1": "2PY9rSYP8y7JVSLeg8r1qdwtUPmCjHWbohSNmCeUfXFNLZDBfSGcRKFkChVDYTjowRzGftnXdg2Fu6whN8Zc3K3Z",
  "key2": "5p4CGD1TxJ7H37QPUgyAUxj5QRiopZi9feicvMdNnrKPmDi7WfPPWwDkN2odAwtLdRdxRqXhs581Y5eetwWivzqf",
  "key3": "3orhTFCbG691Avf5mds4PARrvX5Y4YDmWfK9puXiPoF1ATQ2j6FuqqCE6PpFxmb5kEpejL4RghasuXMumNNwz9Mg",
  "key4": "4MzLde3QKvV3HjfpGAhJq4QNx6D1m333fHbud4m56wwWLvygbGNd9RgRp4uwD88Jv6tCjJLbUQJNdwjTLDJMyRh9",
  "key5": "4xXMpNGu2vmXpmjsNLEyvV4JAHkiozzgVVZwKawEdZkJASTZ1Ntf9gQygmC8V7dRMZCsMWQYT6MqpbTR1tftKVZz",
  "key6": "JHZRrnKC2pvwTJnQBE5hynC2FEb8YUfu1TaWsPyTVQtReTm9zvMA6k94eoAWdDPbtuj3NtWUyj7aAw4kZUy3NRp",
  "key7": "4hXiJsPa8C4eMQRZhkdGYELUY4ng3oyuMGhfxpFfTVjkS85njX2vxPLiuBPuZEeBCWyMnB3whyzLpHrtnJokmueN",
  "key8": "622cdEWCxTTkXGzEFipRcNPmCaCeQKLQ7YxEStrBJzFonj82rq5bkKU4P8uSUQv9yfbszihW5t9JzkmTpVp3BzXV",
  "key9": "NBqrzW1K2xzneP9NZSc8bV2rE5cJKzDktwEUm2J6gZ4WKYqSXM2YFvNgLQspr3uWM6Ew1cCCp4MtYjCQ9hfLU9Y",
  "key10": "5iinpypQoLWBi3TRCPdKExo12CrobogbzUzwJB6uqK44uEVzM6Fqg8zpF2mxxfKCUGFA45CxLyVZfeLgvdjYBkxx",
  "key11": "55SwL9hjaTQojLxSDFGnZZqHiswrZS3BMWLyj4WZoDfZzDbe4t1BKihxBW1H9rHxioywAdLJZBcG2ZFsEZGzLJJz",
  "key12": "2b9Q7h3GZXTnQyNnKeRtbX3pJAYmCJVrLhuL5ZNqCetUuUAkLL4i1jPU5GamukbATBPB6j1siQRwfukohMG3jyBf",
  "key13": "4rkoeAUdoxBCGCBdSX3BooivrMiyfFnGC31uAG7x3pMSeV4vdTetVfDiWGKnEkxiNqH4WStY85ZdCzvyRRyt2fuc",
  "key14": "3NSQKBHJVL2S1M4ix38a7BCpaALEJWPBMiST6762C8KCN3nLEbj4tFgtCTyiYNEmw6Hhgs31WwipU2wa92ravBGh",
  "key15": "4CJT6bciN1atDgXfT89Edgg14NHxrh6mdVM9bRtj3sWNGKTCpKMed51KZV4MAnqtFSMwnB7g93Uzim4avFb9dy1v",
  "key16": "5XXTD5PkK6ssH1H7oqQvYtKVGmJhRbpuQrFFq63AK6z3zH2H4hMJpGpDU8wJLwXzX4oFFniMLmdxFZkApJn3hFoH",
  "key17": "3DwZPFM47bcSBB4iT8u7TX3YmqL4qKqwqohX3kvNF8V61C3qru3EyT7rY3weVJdc1gHPtKTEqZSX2Jm5t8Jhojfi",
  "key18": "2fQzriKfpVsLP5MtF1etDVsXasWzf9NFCbWWoDwWNSUy3c8BVjdAbDm6wjaW5kM9dZAztnLXmhMsnJbcyc4XMBzk",
  "key19": "64bsvyAhoLwmA7nhqeExsjY8KdFgiH8w7hvyYMFyrJt9b85bmxNQBMABwCTYfFprs4DrBuMuaGvcdBwiPmWeUQea",
  "key20": "3Wfjwnb3Q8JwUPnB91h1dXWK9GGCBzPdBKiG2V5Z3gHtEfYqSwTeo44RS4DcdDcA7c3bJqYEerCuDhCpyajRkPEY",
  "key21": "xcp763a8rd5rxoCbk6XsmPmevaAwdyoMfseRatFqmNAGNzw2ULw86UnBHWMBZjFnjkkNgKMVWDZt8M3p81VWmXD",
  "key22": "2Ln1Eif4RiSUcjqsm5qXQ4of1PxCkWcK7p1PAshXMFL2Xb198BppfogTXJsaMeDcemNtW3vo1cZ5xVyDppRgBscK",
  "key23": "3EseyStiXMUrdB4DBPU2ozuGq4LnL6uyynk3TZHzpX5sAYEHW4fRbPtWPak8iabhSic8HEdAnSkGWtMJBiCJBgCz",
  "key24": "3HA5v4cfWoinxQdabopsZgkp8dkYmx3LUC4JngDTX7wNAaqpc6yKPFecXFvZLtohGiSmZcUQbkZ89DLzf2biypFP",
  "key25": "22iu2Xb1RYr8NcvJFjmX2X1PEBtxJxy4av5mrV1ffbS72jiMgQL5QjdgYq4KHrRwT9HNKKFcESCQ3jruKQowrhaP",
  "key26": "5pYaxj6aevNh6R7VfK2v7RPKqU8ABMw8pmVYBJKE3wED1XnfckDChyj23FfGmzM9dp5X4iaVKJQ51i6DRmUAwxbu",
  "key27": "3mwAZUbLcKafonZETeqKExiLV9qiWT7fFm9DPYHHjvbtNB1c6bLjrDSi7MTCNGW3oyeEsBFE7hYiiQbphdXL6ohK",
  "key28": "4Ltngf4RA7XmQcrWKdDNSbNN5nvuesRiyb36XvxbUoox3SdgskuFLSZ8kSYTCFsp4VzRxk59LgZDxWmCvthgyX5o",
  "key29": "4NEmaagUy1TFzuyLRMsRfq5JaqmmPRB72WnQtaUXprVEjw8d6bNx9aJo8SYAtx3zifPtMoWpPyNvFTwjyfvrvsCi",
  "key30": "2Ag41a9JyqtFpvSLp6YSuLf3EXLYSnM56t7WUgEd6v1LnfwfkTrPwfrHsDZJyNruwHks4hKzUevUHRsLwcG29rHj",
  "key31": "T13J5n1VizDPRbef2iHKwj5tcjyVQY3fsUkquX1i9MN5Cn4E4HQXmWBwMQn72My4rbknbof55DomscMNQiZgSCA",
  "key32": "5cJ9scmkvKGdrXGaZ5n61qSbE6Tk2UDmRN3cxhu1m12AMwBAuogRUvsyzp4vMPBrJ3JUH8pxDQjfu9HUttLAjLb",
  "key33": "EBjcdqA6QALHyt7LANHmcTYN96eq6dhVi4pi8CdcF3kEeMJiJzxuRmLZneQHmHsm9Wh2U8Zc3BtTCR7bJdhym32",
  "key34": "9TCBe8xmN8DrQebx5rFuR2bVUUCKU9tTExkt1pmZL6Atwy61bh2Zng9sAKWqeThiCsAap7yHToZs5gtU4GeFBvP",
  "key35": "4trcRCLGVBRzoDeidNptsv7SESYkuoJN7XpZ5UWW6Ks7B5DhAAf2XMnyXFPuLW7WvW3EpWKdYPFhdnWdUGmKGycW",
  "key36": "3D2Jv4WCz1pEGGE2R3oCek8dACi1CQXoU9aXffiUcbo89Ajr6rkZWdcfkkqJ6SuPV2mhhk6yito3fxuZhA7SxiyF",
  "key37": "3d1LXiznraaHTePqdAiZeX91Dsa3bRpLNieMbB2T4t7V8yNhrK64Mcm6MSPqdMyKaZFUXhmuQW7sDVBJ468sJHKa",
  "key38": "3h1mVvpJjtHiPdFnR34rU8oCWL99R5G8kfXvTiRNXxnfwwTNHUo8FjCAwy6RYd47GaZeJXNqDafjBmdjE41SXtt3",
  "key39": "s7WqvPCwAwXU5dsDo6KBjGx74Uhyr1qoSyJUP8yqGbLaDhdWJ8AECjACrhHTJAyw4RQT4mRa99TqD3EkDCKyD12",
  "key40": "3eTtoPVoh83eQCqJpU1Lc4gKCiB3xW4Ledjj1tpkN813VQUewBn1y6cdcbCmpYgNJ3oCVZ7Z7i5KuW5kbMirACxB",
  "key41": "8GvUFoFJu4T2SiHX2Y5a5LWQRdT6Bgto2jswy5jMR2gHocjVs5oEranFYS47etXGmGbBpGNizmWsUAibzqRnEiC",
  "key42": "5PrA7z6ZDWrdKeZyVQFg5ppZ9xXMhSC8SRhpmFsEpyT625qhF4mXXcjwr2y2fKSqu5G5Z91d8bzYUeyN2Lkw13FR"
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
