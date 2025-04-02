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
    "5qAAQowX7prH7uebG2GqyjutYw64HC8P2JxgSJkYC3Y3RgxT9KyDNLsSSfBYUsqaJxMam6auqqaSDQFjksvEbPio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vX7V1SuEjatp3KYVL3Er5HWQdwzSbZ7Vw3JRzYZMRM4JgoXe238hKuHJNkLgC4BkUzBxerdczh8j19SZEutCYrf",
  "key1": "41DpsESG1sLiSZctE1xhzNpuaZu4cQPkpCWEZ2UR53A2dYwvde6Kyrt8eHHmrBAUCndMAibR2vYvQ8XVUkPc7JhU",
  "key2": "St7LgUqF4hKf4DpQiX8nbd266ZDE2F9qdqDGUrDJGqbHniUNm5aVZp161w4vVRy3aSsiyVtoPiRLdtiuC8NBBDp",
  "key3": "2qcJjUAt4jtMY86vbVRzzmwekH2U8UgbbYbPustjJmpACujNAQ8wLGs6Rerxv9HTLzy13hVkw1Ct8cYdCVyTb13z",
  "key4": "yesRzC36DGWA8BrcZ7qD6kqgZ5vSAeHwDLoji1moTVDSsGBYDa2nxd6XdhFw2LmrCThHmRSMo3b2d7ZwradvVX1",
  "key5": "4UZTxoJEH8d2pYBcwrnGRWGoJ2BJC8Ssuib6mKCMEkyWXCnjkcsXxYEpxQvBzCLKP1MAvJ25PMDhJQq3S3peVVqL",
  "key6": "5qa8eW3SCdSt7vTzMZzr92bC8EnEocv4Sz5jCZeA3mVgVU5N1vVDgb7SmmGvU3gwUVEuFGBCpwh9ULCA7HqXJdgw",
  "key7": "48Rh2nfzVt7Ze9LBcd8Pz5iYne9tdjnANy7JkTdVA8CnJ1JnqWdFGMar1ugWRmnQiv6DFjANxJ6yCtdkwxyiGybQ",
  "key8": "33G4sDdD99W2Ze3tnAXnwCKH9CF9m4Ao3DkNP2oRR23Gv7P5ruzzB2XbkTTDBaNtCtWXLm3gymSQi7VFv2KdzRJc",
  "key9": "3JansRGw4c42C811UC8gvCzackQ47kEiMtYiougjwZtLzUQZ4nw43ji9x8pevmA9h75wMHW9tabH8qopfPpLQ8Tt",
  "key10": "2iLGkJ8qAfAYX7fNb9vtM299LUfF2CJDqzJM6mugmH6zQErDnHysHivxf5ThUVkc526UzgwVp111ovbWsTfJitd9",
  "key11": "39y7LmbUXL2ARcT6Y2J943ewJkN37cYLSrEAXATmzD7Xgn2xo2GAWRof1QBnL4bV1HgPS48LBhEsJm9Kj4Duyqga",
  "key12": "2xhFsw1fiscerR4QyhAQRdxk5DvEa7wGdbentzWUaszyUSzzYhoov6gD74cWiao9es3RswWBh6z2yREX3rpJUpTh",
  "key13": "2PanX41ALFNGhZSSipuyNQe1cx2ffEgofMyjhRaqnvh59KDfrZPGQVMzSL1u3E9iEjQ8G8oKXC8yWG2zmUac2XoW",
  "key14": "4qcTYsFjiBJSBoPNgzbbMycsoeosCuzxWWrwsvFmY5YrxBW1spbfYXxps5NwEGqYExGHWZuXjuVxwU5ekKUwnvYb",
  "key15": "5pxnL843LmeCBqWFpQHiHLYqHmnbEmzzpYGxAjvX1YWikU1Fvs6krfu7d3AspDRkXodSkm8TwnnDBio9TkQBgtcx",
  "key16": "2g3cZNWnergzkT9Kn88jroCr87W4rLaf7PEUmhudKGngLy2cNgbYthV9xnQEqiDUgV7AT47bWcFz6kq6wsAkniqd",
  "key17": "3odSi84WBRvUNR6cV8SoyzGMb3zMndvpU3AdTwEFAANV41VwaaD3gsFtgKKaUcMuvJUy32uqUpS4uSajmtLFtBC1",
  "key18": "57mhiGknGDKVgwL9qmqSAt6weq5JNt9LatLfKVABx3Jg6c4Dg7WcWug3ys8GqMmxrjWi7A3uhnzWJSQ5YudQCdRp",
  "key19": "5oi7PJuLSKjvxBPkVUb9uNqgU9FNTteDbhzPWCVuakrFMGRyKNUrL1dX4bKuqCV3ZwoqCpCEcS1aNsLTRZD8zDHG",
  "key20": "4euQxs9qrAExSxiJCfaxPmpTCyhPdXytoiHgZhU1cLnmeDvnP5fPGEsFkuHxyMVKzybD31hy68ibDe6rixywQ3QU",
  "key21": "9pVR52rcBBeFhhJtMh93VTfZ9KX8JH1NZJwULBkoMJtw1Dqdy9HauMUdnhvdRp2LU7fkbrRSZ88GFqK4YKPNL4G",
  "key22": "tKpkqqWZHWBdgaa2NqcjMkcaRzjSpdij4Pzsp1NfsA3iXXi2yNy4W8eg9FUE9M58P86drFqrfzCffH3tMvt17Da",
  "key23": "qvUTYVh9uy486FrVNhhYWbrzw2GLAR8riuUkoms3GS1z3E1K9ef6E1JnhaKkR5imTFTrw45PaYRTm4RTRWcfCU3",
  "key24": "4KCzUm1LTGg3Do3qhn61CRhTFsfCFCXEaDKiywuPJ7X3kU3Q6yW6P85MACaGk4khAVoPGqSBi63i2N9ffxLYEHTV",
  "key25": "vGNp2LmXvAESjKoBkESSjGo3X2dbX2rwazYTmPLP5WEA2RDCaatkErd7dTP7Xs8Z6RmFvRZb7xKb86nog6vxREi",
  "key26": "4nHZbS9xTKBpvzL2vvLRW6LHksZoJMCf1SAQ3S84KgAeD3VSg2egYbrq86rZd5WUJyC9ANmdb6nRYkiH3JfgvgtJ",
  "key27": "5eLnMmJRDVu5M91ssFXYJwFWwiB1NvTR7SwjFMAjx7TQLEcqWcFBgUnHvQEHBT4iASVVMMFfMy1r4dKPDgF51EER",
  "key28": "47kTCF6G7qFryYVmA3rhUpsQwAamCLD1ZxMAxEvYCwmFnSfk2PswszoKQGf69ehp9RPd7i4SHHhtcw3MwT97vDrt",
  "key29": "4zajVVB4zKoFS1W8yNNpHgZzoHZFSpP6nX6oRtGr6wWwL38heHM2WL7xSWdUcTo8wtxgtDoe7MwCC3Mtz2jQVyV4",
  "key30": "5KPegzis1qz1TGYt9FpVGCohY3Eq9vpZ6ji4iC5eShphTJ3mggCrM5jFgQiXUhoAwQ8CZFMCfjZnoJjEkBaodPxy",
  "key31": "3RtqxbYiqtdJac6vSfkbro2PaZamSuFW9aDzw3TQu5CvTWG9UoCXagbJJWXzLrxL7sEqouq54psxbnQGvBUuKfV8",
  "key32": "2LjzC8BSUhLm8XF3iv3vdsdhg2iq3JejTPbz39SCpuGGKKB6XAwDJcDMEmCTaSeVW3g3K3F43cfuCC4VKZr7wtFp",
  "key33": "5tgCzRTSR3Pthkj8D1H7A3Zd9Fn3ekcU6CyTjV9KWEiHjwtr191uoN9wTeXQqUuM2oEueth8bboz8YEahPVivkRo",
  "key34": "5LbyFPEENeo4eRv2gfCHkh1Ttn4ho8pQZ3fUs3wUnJmPebUkttUgWjHcY1iREEQnXkCJopt1pfaAnE7mAVZkVtDF",
  "key35": "2bkGL3qtcGMvTWc5JhAnZM45WECjaGyKp4gBixhF4r5RuZjvU1YJMMVbiPTDq38PryTahG4QTjsMyREA4EbLP37F",
  "key36": "3FyhEtEYTxuMLb9NZM8JHkfUFTRfmZv7V1NNAUyw29hgrznCeYc2acMP9HtjJjhFfekV8LdGY33mAGYNcCYJxVcW",
  "key37": "4hpPU95xCXkciBQ27tAMpTJYNqEiuxCPCccRhk3txkmaiGJWQ6hRKF84ETHdZ2YbcYFXkmSboFBnv2TN5t4pC8Zg",
  "key38": "39MJ9Gz1Mnjgz6MkH55zrSXHwVPs7m7AP6LFj5vadaH6huh8R2viVpSxhJ23VP3MfUSxZc8nTzeNaL2Cfuu149cj",
  "key39": "5yho2iH3PBVrgp7RmVFbiREPk4q1wJg6XDj2TtN7mRaW9xfycddeixWWcautVddhHh35nWyk93ZnbigxPUkrNJbd",
  "key40": "2sQyJMFzPi2pTKVma1jmXb12FEBVWfsMgZeE9VfaQYPgjtDZNSnTHumGTZ2SqC2Dq2mP1UCL1cbd9kPN4joMLbWe",
  "key41": "4GRQPVE6apCUGLBiVLcoF6rX3nPA17d8HqnoocV6Fajh2WVEhxxxKm1YUmXwiHuWbBviaRF9pDQCWBK4Yx7j7i7b",
  "key42": "2KqPQogocEdNfUmWU96KVXsSXiFQ2QEq6zP7vfaCGBYcSEFAvixPPoLZ8zRRnn3QJvCP1tdb3o6iDANvovjvZLov",
  "key43": "QgBij198mgEqxMR3WziMVx3Pq7sT7aRHUaavUdp7kuG2mGYpGGB6pgLf8T3CPKSa1h6dgxWg3Y5ZSP5qxDH4dCf",
  "key44": "sX3FaqCU4jX8q6j9p8r3qiPFL6TEJ2cjWiz8MzB1QQBbJ5QXhKpwwz1p2xKAZE8EYWrXyuszcNjnpBZUsQ4hkYf",
  "key45": "4Y95hxn3BBEWjfN7sU5dsqtwqZjsk16UAfep5WfU3Anj7RdJB5bkGzGB2CXG4S1jfdSVYuUArojrCTRJ23Eh74mu"
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
