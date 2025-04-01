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
    "2vEkQj6JBXVAYNt3ruCW6schtoofimVyXmGVHz4sG44xaRbzv8iHpmFCAzha2SgKzFo9ENf3mC3wyPoLkNnMxm1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJCLQnq78g2m94ZRuUt6M3oPJ1VhJ3ALQivYcdUqEpgVE9QSxHV2H9RJheh6wh2RsJNgK7yHvSfxUT8UYzwyPTk",
  "key1": "NBUh8YKzUHoKyQQVDHtCerzu9B33XTmv7Y9yu1rQbe6TYwv2UvG8hCpHLPYFTc9anW8kjd625CE4DnwaN26zSTH",
  "key2": "52ueeYfiy4rxRNnQtvGCchotTdPnPycgaapiQofeMbbUPDkYDLtiUjyZ82sBhJHPaL2sn6myXnBHggtEjqmhfwSf",
  "key3": "59Cf2ThV2pay7V8vP5wckqw5HVroz1n3M8Wk7m17Y557QS2HNPbPd12q1wm5HWDiJty8HDJwjyWTy8x8AZdwMSGE",
  "key4": "4yZXs2kX41cDfdx1nu47GAP2hDWjdbnTzWfAjH3vqTTteMUNQaCzndpJmTDNrcJCBbEAJgeQdJGhP3eiHtziqCPe",
  "key5": "61QWQ2F1J4Kcb9oVVrYZ4S3BLmfBDUyuxi7QKTucpELFa5DJwbF9A1C1RT2kUq7qyp3pppaQVf7L47pbW1MBjmqt",
  "key6": "62FidFZwfmy2keg2bEaGZxsHp8aG4iC9N5Nn6rEDXTxkXHHU43hX2Py1ZDMMR875BVzo6icN1h2nUV4VGm8mfXzM",
  "key7": "58crqq9hJe9cPvzAgKyaDzapZXC1G94DEm2CAax6ppuw6AZRScrvDdnyZeMiVpFkyBpXqczeBQ5ctURiKbTcuHRa",
  "key8": "2W6f9fpkwvT7TFdWx4VPFBT5LvPYTukyJPsv3pBTobup5JJoRxkqnUu3b4qaopHH8ba8acVCAyDeNnY1oRDyCR5i",
  "key9": "heq2QFm9XUv98qtJUTaspDYkskFDbyHDN1b6YWGaNtprSZ3Lge486tYAunqJ5qgs6kBrVGDq2JNU5Hibh8bJ1sZ",
  "key10": "23YHb8uRjkPkNrcrxpT6YVQkDM4vgehuyFEKFLm4MupJT6EhKv4eSKyK6wHfhhUDqV4xRRC1e9txQ1tzv4uxGTuG",
  "key11": "3GumiP13BfAfP4pfjPxjjCf9fJw76gs9DrLbnp4te68KRE6p7Vjp6XcdUHtpJUPms55H8GkePNWVexaTbbjc5aPN",
  "key12": "2UULVjoeiBdtkbHntN2yUMvge1bFfYRrUs3gQYssHpRA1HE52iYdDdxngNHWrobfewDe3WF4LA9DAU9RoLfxxzQt",
  "key13": "2ZRccNpZa91Ct9v6L3o37pfiNgX6TTb3ygMJPX336mCwtDncHWDTh3yoX8bCjQV36YtgTAyWV51w4j3SSencs8J8",
  "key14": "2M3V1Mk6QJVwGhZRsx431HxG3okMyioosgitTrKLUEerbZkzFYGyVyCfujwAdnw7P9e5T1UwRdnoZeytkLqNa9Bg",
  "key15": "4fSrX4DSJmKGS27ZE75aEMte25rzMAUCZAebZsY13vgAPBDwgthjzLYfXAgaXVH2LWhg8gy7KkRTasiDr46GZJ7H",
  "key16": "21nbsfK7zTQC39hbAF5KyBaYhMMn5Crzu7pvwiVsocS6EU6JMgMKyMq1tFVjMzAw5WYJwHjUj9XNWSNDBdGorAu9",
  "key17": "5Y59whBFnrUrWrvinnfWdRkJSGCe1owzVTJ2qKgbNt2U9HigB41dLq8wALuLcAPqdaYLYAoqsYJ8jdYukaTAmjE1",
  "key18": "5eAtrdCP4n1qw17p6nnn1t2u9LYXwAZbtfXTCJcwoaQ8g3K8JWHicydET19QGUZ36KfNPxZsoFxUWTMHLmjB19s8",
  "key19": "4TjkdmSgjxSvgdZvXnqGiFAckYFbmF4xc7EFXiDUVYCzWGxHaLGMHshMkaqXRyCVT1Fm44cuYgQ41ZxTAixWhWVu",
  "key20": "4m7hUyiiRpuKBGuueFrmpDwbZRmvCKZZGQaHCpMuZnp1Zo6JQ4conK9tzJgYfxY6Fw9cU3HhzkMF7796HAz3rczY",
  "key21": "3qnrv4RpVD2GTPbCmzjN3PPj114cLqK5pNJueCSk9xL7jcELGUMmTBCbLfBiDAtgPms2YsSzVe69jeoWCEcoXbqA",
  "key22": "67NG6H3cj3JJNvMNU8WV57UshZeSjyhPmggmCkHWNBBfUqvFmBKX3guNkzN34cDfKkPKcYvGEZpEGfUY5m4rP6uo",
  "key23": "5WYJxNqQDah84ymHr3YzP8K5KmZnx2rPibKUQ5vV5axWwPrRfDUUXAu7vLLkhovRrfMppd473oiU3nQiaQkDAqtx",
  "key24": "5duXcZNVBGsUoJVcitzwnZWU3eHSSqX7ErxC47NFUBzgcwoL4oDvVJ6m5nv5MD2nNwEHcdj1azcQvUksVh6wkx3b",
  "key25": "2i1924dbuTPxvpz12j1NbCfua5KGbLgkvYuW81NNUdkDRtBtRAEZx7SUipcimw3oQtFVesNdfD8qXh8y7a9ZVKpu",
  "key26": "2Z5JAgeAyiAgj4UEDPYD9YDTd6dwwmfFwVXMstevU6G5jSkxv9sWxgdNHP4uYECvyiAuxjZXSZiidrdroaWW9Mi",
  "key27": "3VyBHQSzA55SFcZHTPCeuTTE7FhS9161uWD1AG7eLwUimvrunrC59s172xnW5CJPgdXpX3cSqxV6cPHqHDPrRgrq",
  "key28": "2JzHPMzApWcoozBWd7vzJDVrYNCpsLoYiLW5Ux2bmEXTPtUX7xHU69t2yoZd9jDUF24xXSQwk5dPK5CmAyzxQXr2",
  "key29": "5ZMD1vrgA8yNxgtFNrqsQkKe32oQ4xMxVhp7WNzfNq6EvhyftxnVoQGtJZvuFSkjHqYqDrTaiZNUtLbtvtZFJKvE",
  "key30": "5QpeTirN7pACKTRBqBxCNgc4SPsfVsRkSaBPJsS6mNQK8tSjTPt1Xb1v73s9hg3GitWVnSXtBbaH279yjTTEvnbD",
  "key31": "63MBbzC2KFJG6q4EDMfD81KUNhyqa7goBjmQPhUYKyqCe99nkMY7MESPDTxYpGzLNwJ8qHm942xqS8eCaziMY9Rq",
  "key32": "2MsaqjNNkfRGexMjj6f5QKmhDuUDp6ZxFu3GMvzXyK2Jg5yQvQDU4sbAsCLqinkXp52YWzfZHEwDdNWtQUJG1gKM",
  "key33": "2XAgTBp53fDXCs54F2uXXnTGFEAWChyABnpf8o9n4Nf1x1CsrrKbMLPoUEd1i9um4GXJHu2hX6miyn5fTPWGFNMB",
  "key34": "qPNLEV4QaQ9iAt7pNZrEeYWuMrC2jMUj1uBaZYgu6CCs6gtV7XQnzzSXEiGjXeXpsALbo4Co3T8jCTKDpTkC8nX",
  "key35": "3ht22DWyFCNfbzThc2ASL7Mum13irQDd6jyxAJ9naYoRhyrejN8swjVCiExB2S9Mk21o3YJNkHiCyVQB51datQ6x",
  "key36": "5zKcLUB6MYhkZMhCKsHTiTWnbAvncBJ2UC6C5bpqKms9LvyL3yp4ryMSbR941JDwUyKvTBrM18X3dbFpVYmBQYXf",
  "key37": "3pyGKxHJtBsnFkWp2qWXLeqnpxJGEVz1D86CLxwQBDCy8ApZQ89rRACQWAupSx1pomagQNAP2HXDLMAASspBhxwc",
  "key38": "2yvukC2TEhN1cMGDqr2Q5P7vwjJp4HzNH6pfF1vqkJNuV96KfL4DebzbQiV6HJmPGwj1XvCJiZPsAfXYSkJtkEBX",
  "key39": "2gpMVCanfAYqT9CJM3n2vuUGdNkxopmD7EgLQ5sJwMhU6wm2TsxPaXLpbxepNpDQ9FCLuupTCzncZeMDMEFpvESZ",
  "key40": "QcwgLaxDYEejSdaZegFdGSQN6wggcdpRGrxQRsPVbt1t4xAh7nDMwWiKbqS1trxnCeMyAJzqsjjaso8ryeuxLNE",
  "key41": "2bjiP8qxsycntrZRrLGduwcbd4RuDqSyKm2jezYtGvBvDS8NW1f99tyUTQ9pTMrr3Do72ir32tPyF63AAze6WrTX",
  "key42": "CcVnWDgGjRsHVLZaKAV5D1Y3FhC1sCBmgBtnMozWDtSTNWV182sKRmATF7ohqjArzXRJnaQcPrFpdBKBLp5RXNi",
  "key43": "653KGSsWiaokxomBHB5wXxjU9LGKkomY53qzkkziigX8vESSXuSbGWEHJRQdXYz154zovDx67cdsvVVCW1vCi2Kc",
  "key44": "4ttsHUeekiTJGe62A6cihdMngKJx5bUNwnx72iPBXxUNmP8XAXAocVr954uxoXYTWajrnZePft92mXWVB5raaPa4",
  "key45": "36iqDoDgVnUQFbThcF8vsMCyosVNxmsuzAMfNZkQa8mVP1wsccKTFWgwNX6TKMYd49aU271mU6LhZftHd9p13cx5",
  "key46": "2vViFzXbY9qYHQJ3ihaDYBiVmP3nUns4ysnvwynhemQnSj69bx3dUJD7ZbqMKUqCaSN2W9Ech45mDKuQAaQA7bGw",
  "key47": "58ZDffJnjW893D2KEnv6sWQqPKTo8jeSggZcw8WevdcWbtpFKrCJN6HG226vHqGvSCWA5UXu3Czq7h6AD91u9RTM",
  "key48": "jVgxooceFZn7Uxue3k1KVUw7e3bnVLtSVC2DpL7ePHbm7keo14YaKPjxhQz2yaALtbGHpQbNE3FkneaLrJbfktD",
  "key49": "483iUwr6zpHzfwCqysGS6e5NFGhf1YW86Ew4DNoE6nwXV1vje1ebaGfQtppp7RfDCQdQosJzb56voG2XLV1GbJJ7"
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
