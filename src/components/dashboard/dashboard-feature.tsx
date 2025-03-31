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
    "BgrV5L38z2Mwosv7M67A8cnAkpXrHb6K2cms8G7nJUFJvX2KkWEBcagnKksR6zJzh98mDuu8iz8BFVPb1BiUYuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ecde45HzbJvny6Ro1yMAMUhDv66WwRzpnznXkETeGcQwbAMpct1wECQQCg1S5rQLq3iaTpKu14fUNGmi6G5Hb3s",
  "key1": "2xFJZhrNDVq9VW7jEhYWrPwfsrPekv3UcWgoYPkM1hqQbREqto3xxVoDpT2NcmBYfGgwGy3k3dwnBrvj9vjiH5m4",
  "key2": "4wepUKY838BYgCaDdskHr613M9wH4rhGcz7SARpjdK1CmKFkB7MtQCECc9virdyQazohR85maeyw1mftBmdFgwiG",
  "key3": "2n1xMPmeHfWdv96D5upVyDVw6GXFutFQFP6sfSBX6J39KLXETXNQsTxAtxMXDMb1fn96FAXs6qqyxNSKR8rWhYV9",
  "key4": "3j5NPLkeJjJNQLpm7Dpctd4UBc8t1kagZf4ahBPABpkCXRjwH9vEC4UFW6JeDUCVUMsfBNWM2qJn4i26at6JXeKD",
  "key5": "3VhBF3fj3CdkPa5Ja6CA7Kztdxq2ztHAcVcoUAt5AmJxtUDop4Akw2ZNgX5FXNPrNLZj6ytCJXxZ117VXGZduGCe",
  "key6": "4nBgLXRwK7L6AxNj68QaUXosNrH8kQ8wTBUtwv3sNxrAdwB6RouYE8378qQ8bbHyJp6ELGy9U6dZ9hPVAP9X8SvV",
  "key7": "3F7u5hk268x6KEFYYBDNF3s3PtqMpEqfMNsGFULePkJuG9D7FWd66UVv8SaTSv7LizXqWk1coBrsosshqmEbyZbQ",
  "key8": "2nxHyh3GUMkKD43eSNtMPAS4xHuxoyc19MLSHoPSGZab1sW2Q4TB1Mz5Hx5B2eUHTjpdk73qtH1Sap6aBQxrXGQD",
  "key9": "49jTtjxZdPkF3RPEMhabzfwGPWRakv2fnF5pkh6SV5NzDo25KCEoXyn1UVC1jvJuk8oBv8XULakrqzt354GRjiqK",
  "key10": "52kY3H5p3jT7dMS6LPeaN8m3hm1u9oeuX7Z39cSdxLpQMsDdZiZLQiXb6xcZ73c1Mbd2T5rTM7xXjLhcvc7HrF5K",
  "key11": "3cC98XduFJNMJ4Gdhf9zbxdHTPAPETTgMhMZzvGy8ntUZrvJNGPgsbGWKWPwPv9VYFXgxNDUkk1JAKRRoAnBPTyB",
  "key12": "bFH9qnzGEJyeZKML7nELPvb4faLEWeZcJm9jUC93hnrQqA2B7Hz2i8n8vchoT18E4H5Yrn3apEmznhhLRdirxnz",
  "key13": "5B6n4VGr4duTQe6W1SKKUXBmoJDjQt9APCe1JHvdvvAoBM5VdU4HXEFcptKs8CS1aGGakvFbvoVPjuKixJxKXyPo",
  "key14": "3ieMUjk7yZANw1ua85vJAg1U8DW1zDSCNHLbHBznxvftfgLZjXdNMeRXQDp4cchVWbtM5Kw9RMGTke14xofwGg2e",
  "key15": "J54es1uyxTmMcf2Tz6jxQDwSxxpUW4QmxWHt4CNnxpWuaTu8i6bQ6zCfiFLhwsiBzHjDEPu9LhYEk2ojVeydAZr",
  "key16": "Ms6up88uW8oqm81HsMsqR1ngtzfLUob7vYmekMDPmd9jaAFCH9r8ebzUoirzgbhPTijPB3RB4fsAEpoNTNhSTzD",
  "key17": "4XoBh2L5FpmLRQmhkaDtFoAMqbVQyUZStXggeDykW6KUY1fjqGDPJB98uUioFww59GgGHkorna7B5pAz478HKGr7",
  "key18": "5YH412pJMg851v1Gs2TQCivzKZPLxFnrFMgzekFfvWACuDvyRYyLWyj7he8Gj2GrsMsZeCRMV1EFxueU3LxNEYDn",
  "key19": "61ExcLZPFVoVxksbFeMSkxwEEY5yL8P9JTPVi1haGMaXP2MXW1vr5C5mJjN8HTPgMgQi8Pz9gpjKADXWB8HcL9qw",
  "key20": "5Ez5GZVqJx5kucrKrpW9QmfCkE1xqhv5QnxRNfzTNCJWshcWtnriGrUfSAFbg6E6t9aJ1TD3g8Tpk3Z8CaKsKgJY",
  "key21": "4mmjmy4quDdZgoBkx1tnqGg8iGgoPGLH3JxesuyVr2rJCAERJomqbLFWLs9RaB8iURpbbCN2TyR3rLT2XVeKgge9",
  "key22": "5ksK4i5wXsuxCNG3av92qRd6m7u2Y7Xju93S11GKU68opKL3ixdBdUaQdDxAmQMwaNvdkRYD6X5SiDeLM8E4JxG4",
  "key23": "3egfvS3oKYvgCNMVeC3w2srduzoYedM9NDkSjPuf2GFGHNdWFmzw1hkBYftdNnXqAu8GFdzAd1omhv4FZukfAt8s",
  "key24": "3hSUFaJMpcrHyS7yM6f2RnkBKhaHwPbeS53h5AwoYQhfchfX8TfJdGqz98zaDgG6yN3rw6oNKMkk9cYYvzeCtsQc",
  "key25": "26ZvwbB7hDBHXt5CJErmLLNru676NP6xxKjejXSmp6gsq42pHbuVfjznn3NQP4Fd2NRSYYj19nSBVtGBBV1XqNwt",
  "key26": "2FpaE34EbopKz9ymTVJjcE1XJWLPMa1Z7zLo1JLCZjPkGGXXEjsndKFM7pwNw6bNhLcfHKU33ferPVum2HwJNsHd",
  "key27": "27g559H3rKwPwVpNsGroVZAemxAzdB6bawhtmUFxdsZHrtF49kJcn9kpherhMGAa9KUFcopVHg7ixqDe1CCKNNBU",
  "key28": "3hYyNrvHuY5Uh8Fai634khJX3dPV6QnioJVuEgdTvh2dbyA7nimpCttcQjyoobULU9Kk7hboAkYhByn4BtUtrHrz",
  "key29": "4MrxGDTjxLdGCqA8DZALKc27EDs1yTzonE8ErgT5sXWJx8pB4Z7prR85FuZu324uuFD6pjBVHFERRYyiDKC1nwf",
  "key30": "3UQnt8wwiUv5qHG1QLe6cRY2aX4qgovo5h3PM5S81vPd4RizHmEUbQQJW5aA1THjHFtAoDCJ6ma2iQNcnJaoX5yK",
  "key31": "55gVnmPdv3y4ra1wMRmbBdYB4j9yMfDfE1r72Bb1wrNZmPEgiUVFyjBtnu3iur8UdpD73tji4ovnLq83AksBR9y5",
  "key32": "4cb9oufTchc658go88AZdfQ1WqpwYqHQuJJN9qEEgya3Z6fZK5PRssmxv3sNu6oCqznvpEgFP2YmduxjxsAQVU8N",
  "key33": "4zt7DdvW1wbtFo8WbwPwxT31yJeJ4v2mBNs7pJTUGQRyY84mvU6tMSSu1Zp16Q4KgiWz5L1TkLTxBrzUBJ5u9EMT",
  "key34": "5NusvBybhFfYhfWgddBaUmLs5W4ekbAhpmNatjvbJj4uwZfDW23gwwWkss5TFXUeTme13tndMKnxbfxwD7wTRy4x",
  "key35": "3TsE5Fjzo41EAHH6HqCV9WxXdSDG9cyQp6sSWrXvJtdTANoQPWrxdjCXMBmcYmJcHRHdX1ysrLEWw7UBrSiXdR2R",
  "key36": "43q2GHNXrN8Dcfj9QWSwL1Go94D8uaxey6sagTeUk66FtGV2nKZET9BXzBcQ9wnex9Wi853VDvqK924Lu9qvu18M",
  "key37": "4yjTnWSvQxD7vBBWS3ykrB7kJWbtvu638DGhmV7URd1LotCLn5MJHHV1rfDqNsVMwt8cVhkWLRiaaKQy9r9ihzkS",
  "key38": "5vYCCBxDKR25nQnV6h78ZMaVxDPbwkiJSX2SAFRFFpwKjpEaF8okFtRh1FKYaDesxiUHCKWRe8YBGFMURr1mnCo",
  "key39": "3CiiofTLhKrj6TqhyzkahdVk58ccRPPxdNjksMsaxhjsuvvu5ydgVCKv6Vqtm8Dt8WNfUMxPomwHAhkktvr5FQPp",
  "key40": "47y8vDJKt2GAXuSEdDRpWaNb5eb7XTK6ujR9Diua1WVQ7qRYLnMvUBLDCEAo8PpcPqarZB3y3U3k9uphKjqpbKq1",
  "key41": "9zAGQoUMAtVu9gpGZmRXevHFAPFsWq5HSegJZBBfBisg8oC61PgsSkt5gbGC1uvXom4gDjsmW7ZcKL5dzCwL825",
  "key42": "3fFbtHGt4dv7DL8iJ4UKJLYzo67qNWU9u6ix68UzstKcEsMVw9yMzP1KPzDvLktdpBvcTCjZpjjVGCG6SrhVAZyj",
  "key43": "2B1dZUSBc5PtgWyDP43ehkVMYwxqSei76HARHsbDX7o74SzJ2Rh4n6fcRp6JWzujBDE3XTcaAtKH2iAD78BU7ijF",
  "key44": "5YERHFDJ1m3iSekTZEEhJHyjkFxx1YBaxyCXUZWFfooq7EC2Nb6HR1q8pSi6Kg7Rrsw7AoWCEjvrt2K7i62Godxk",
  "key45": "36DjbfGRcWPKPo6ALiPg1ZxFbfd26WyQ6bDaxB5o2AbDRfbui2vLMd88cGY8CrWkApht4HvyHhNYaUsUeFVym38w"
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
