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
    "5yisNzLtZis8zHNB62LPbxuF4YESWpyxkhrQNNnq1vPaqDgpQGUq1gUWjszSnRfkH1382qG78VuJUTPZHkN9QG33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsvtT8HiM7Vi4kkE43uT9msqLmuhaqXby9qaFkvfFerAJ8pr1ZYKx5e3V9C3ZoTfxqvz5kokULSH7txD7DDnAC6",
  "key1": "3ZsZhezx6DhTgLFSsz78qyoRmSrBLhYLwFtHqUzdAw8cGW2RxZ9yfmPZQYu6BT3t2vDToLo2q5qMVv1EpRf6t9rF",
  "key2": "4eS3xvzc1uW4bE92T6s4yevEosz2iD688zjgtBmcMZhtN3CBAe45FXeUtBMobA1eit6fjGjnp9D6saBJdawVJ34s",
  "key3": "cUEYH5CsbiesXf4mbLpninGb3SW5BbZAQvz3RuHCWLhVU5bSpcACxPrGArQFXsAi3d93x6VbtzbzNyHAxmPjXcL",
  "key4": "2mfL9hzTRsmtSj9G534Z3ZrBnSCVZ9B6AmU2PVUVopBp3TDVojumV4iYKLW2YRJQJ1sgztK71Q1nV1RnjAyeuBcZ",
  "key5": "38MzreDBNYfAzjirT3qA7G5NGP5A76L6YHmiEXQkBUdyxiXBarb5wH3Hg92XZim91RT6XA3FugYEkbs3ivwARdVd",
  "key6": "5bvPLgwMjbfPkAQg28roXVzunUfn4pSc3mmuWumMzPgKXGRUZEczm3wAJx48q6SCEBEYSDWzCanCtUScod2cb1rC",
  "key7": "52SnZ7tzeuduV7pxNjxeJTfbGk8pJ5sxQepgKQTsEAYWf4o44uYyT6szptjhNYdBjQ3CPsXPSBuT33hRHvteQX5R",
  "key8": "4YjrWRFSDpBowP68ewjZTsX1LQVLrkgq7xaWmAWNqjLBGNphBdG4zAKWBJ3AqU6cNubCdjCE2BZuQTLw4KWqzbzn",
  "key9": "7D4DRxYzwmeqPmoCaieUw14MX9hse5N2U4jJ9CGcb5xgKdE7s8NUYvwqxFjWXGcdTqa1vzckD1x1dZ5vBj43xMb",
  "key10": "53pKW14nAWVxnzcdf4QM7wV3QEknnAf7W8XwKXfCbQqpPKn2iXsdoy6Kw1AWJUUMgMnNm9ZKDPybHBf1XqFSicA3",
  "key11": "3pETZ76r7UQfSNhonste7mqZkVkpwAw2zeQMhW1aQBHX1kVViDxJjqwFN6kdM3iNr3z6YHGVi5M1aTStBycq9nhL",
  "key12": "izy9vM6tFuUbent2sPhdesAjkm2eczZKFKyE1ocUqTCng8kWJocRhaa4TCzjrZp2hx5XxLjaY9QfiFWUXsbhGLL",
  "key13": "xKS6zt4BvKV38WE5pgfTR9JEJqSEPZ489X8fYJYVodyUqJyx2xXCRpNyuofGvUiDQF2MK3y6DZh2MW7XBHx7bhC",
  "key14": "2uf4VrreGHrDg2auFSMWBZbhgK1eqiDK1qnLTyVwbAb9MpHfBgVzMbZpHrTstSv5EJC8SRaQd4jFnhaz2aC9DHLF",
  "key15": "5cHt3US8iExASY6N9HxQHVhDPKpDzgB1DN1G75evqH3sUAZ1vqDEVrDUXgVTUa2mAQfG5cXnbaEEPNXuNM8cTeLU",
  "key16": "1ufcbtvKedvhVh6zzuTeYF5ax84gGEjGnckj8mKKRZcvBXMHmUzvA1R2eJzQFaUAG4FsU4rZ2DpNVD534JmnMqA",
  "key17": "2zpgErf1beQrT7tbhfsnJy8Mhszm24qHn7MscvNekxvUVNd3982KQS19NVRe42tf8yLTQWqkYxxcUQSYeMuNs6tz",
  "key18": "3qLzgixjz1eKmoka8dPyZ6GdCBd5KXcnkBZ78x1yK2xDBTkq2Mnmry3Wtv5YicjjD7BUp5kefbUtSFcDUryYXyaZ",
  "key19": "5WJuM4TxZWjVjyVj62oVvsajqG5bNDRcGfSFvWaa7pYKzqwJUBba7WY7jS1DDP7YtcUDn3ap7mXBSWRGLQQFKWs1",
  "key20": "4ZVsu9STZiPuncH7KYATpuXZGKBp1iXmZKowpn359kpnLPEW2mSzULdjj6myohHXWGuEjunhbdWb8f93TWhmtgbE",
  "key21": "57EguQzJPftynPJTovrFsxY43C9haChiRuFFZvW3SfZ4emwNUo6ZNXmKCrBDGWQCZ3N8evxkH8To9x2ZcphfMmkn",
  "key22": "e3jkW94prQj1rDQbDhHAd5p7N9pc3S8ZCmBjsr6fPiBWPpDMMb9mCs59gJT267Za4eiuPU4uWHJ7s6YJ5EPCAPt",
  "key23": "2sAdQmEXp3viDWuGWUaN5TiCtrohRHJChSsNazsPWumaivCnAHdwX8jrwYk8PydX3ZiGzuT1hdDTX9hmAZkRx8kM",
  "key24": "4ao6cL8dxjTTirxdrTUyAnz1tJo1gbUFA8Hk4roaLTMYrZsr5FJm6QWr1s4LhivRypySwRC2MmnCEXAEN7KzaJuH",
  "key25": "qyKVu43AUumaN1phES93hWHALPtbZwEo8Es2AXfHtMnZAYRtVCwBfKhm6Von7xCsoikjqGaVfehQTPSfHXVoMVq",
  "key26": "5cgpY5P84jQU6Z1DwMesDhuRCk1FVVBDUiLP6M5bDDzRzVFXrsYm1TxKyo2kA2EZjcxMUXNvj2Z45g4FoK85dCpm",
  "key27": "4XpRk8YpaicKCyBvCBHkG1TNDksdwSBXpibZ4Mch2aJMr9NQft5H5zpPemv8abveL5yDAxCfWEg4PVJnBeLnhbYN",
  "key28": "5i3vinVpCDR2AwHBboBuu8pdNeNnjgAfc6SzeTbeFw9QeXtdkYcZjFw3kasTcTCCjiGUHX9JYM1TsibUVBDRYZUi",
  "key29": "5VNzevTBp2WDWzcAnRJCYua2nHz6MqmmZ67YyBUAPoCBKNLoRTsy9kJHLMV4A21n7BWNTQ2B1B7XMD2X5p3RD5Po",
  "key30": "4nPsHDg4FB4hbaCk8UohakfV6kdqdhSbLUEKBVx4GQ7iucrVrZoj9FPXqWymXWufwq2XpgW7HXuLxJequHTM4k61",
  "key31": "4gXXjp87BqVKp4krKn4NugMbf7Cc8wzyEwTMoQcu6LMQShzTV8HaCCzqybv2rQDpSucfJcBAnk94rtgossvusQsi",
  "key32": "3jGBp64YXDvUYAWQTy7RAHFf93WrkfBfGZUgrXM8oRDAaKYhancgMbV7fqZ4Ysbxh4NBmY8B3Haqz2PkrCewJA22",
  "key33": "33no3aoB9HMJnQvJMpBMojGkqcSsV1qs6qyALCQXh1ohpBZwQkZSWfFqxtyQ2jmM85Pp6H7SdabVkVWG9BeYzKbJ",
  "key34": "zHgj6koGvENv1TvRM3dX1cT52qar7g8ZkX5PMiWykSc841jBKCVtmuejXmDjg1o6k1onEdMsY75J6hCGHegCyE1",
  "key35": "5umpCTLifEtdhzpkoAfjTFPnfdVx4bAPZfAKVvHoZaNrHrKUB9Ngr85gaeyn6m2Cwxbn6VB9VA3HaC3qppyHrVRv",
  "key36": "4ssfSnDG5jsakJqfTsjtaKCDeyzj8KtRa6tgSCnGaaFXhGRM8jdqHgcVmrNMMJoby2Te3V7UTUSQz4fir6tP2e4u",
  "key37": "5YRJivzNmf15jbdR1E473trWbpVxqbUYP2QbfxRWooLvuFoCGZHNaoeYbWfTg5xQfHSuQrRQYnbnuuAufCtKjcxa",
  "key38": "3utSnaADKBtCZ1Nu1YKhQoyVYwwbTC9a3kZDEycxwRrQJoon4wkWJHQ14SgdsCGHzo4bHP2gLNAkJRTfanFShhg4",
  "key39": "2cgJYADm8b2tEsGvMe7UG96HiXRLJL2VU6J4KuE6HeksjUpkuhEASheNbjnuezQPe37sGkwwdhUCFfWipkRGeLgd",
  "key40": "4KFji69XY2oiLGuzS5Sq32Gu2ArFQSZkM2opBSsxTsWgExogHuaY98B2fy7oPowxKQKLmVDL8RTimidXjNi7hZDG",
  "key41": "3WSFgzpaHLhPPBAnMdcHV5Ks567iXN3Tq4uhWLVWP3aSPnCji3xZDxveTuJ8gzdnXsUKqmxiYbg4A8enSFdRywqj",
  "key42": "4rNvn27qzDfuokhdhNGPRJ9EaA8aSvkdjYcboB1bXVryenmqyEXSadviEmcSKs7iXLsvaqVaaVEGuqNzRpzJLTEh"
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
