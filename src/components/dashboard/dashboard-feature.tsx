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
    "3jPaJJbeHkRziq9xHtJAegnFQ3wPFmYv6HuWehQrspwC6ps738AYw6dYkkfjLLHTecAYcPub1EfHNUUtRbb9MKqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkKRQ99i1hHNqcpqXrt5rSuGKNhchTMUSw3cqkytw8uJd1aSvZwNKSPznToYWJhRBtjWfsq11GqXMSYCpxkveeb",
  "key1": "5EaFnsXgKEP8F8HLd1T1p1JDXZjcpZEwiqNNFjkT1xKJirFksf2imxJj7vbUkGjd4HAiNf6v5j6HQNUDM4WpC9Yb",
  "key2": "2YWhK9GkvudjpU1bCPaeN6uNL5TR6oA8VWjx4UdPBfu4Z8jDeGLWthZRtVoGet8wMcjhHNfHQoP2vqpHNW4NVtE",
  "key3": "2cvhFQ2TYULRbsJyd3udWLTJ5D3eLG4wfSH5uih3gm6xh1EDfJoGRCkBVhWPupYpYtrcbQ3X4JknLoJSNVQdc6ud",
  "key4": "CmxThKC9XMQX8e8615PoWrqQfnSi187nu5ZwLxk7cQJxgRqJv6yv63pTmS8Vsa6X9aXzoT2yoWMdk92SbttbC3W",
  "key5": "2H8g2SkM27swJH1TQErojvVXryx3LQ8Yf3tLbjVo9ySwcDKZSMtGJkr6Bi9UaUp8UaNBGo5ERu4fQBzsiMiSgFA5",
  "key6": "5p1yzsLUQQ3zJnJUKCL7UsLdSRTvx2WkAhtUuqNMoicZm7qymsPJ2DQFskFEgEYNh8HKLEGZRuMSouYatjdfb2xZ",
  "key7": "3bAw2DPjKaDgTgjnvXSQJmRscaEWWib5G1R2dQ3BMvzx5vSkAhgUYPA7o9S6Dte3TgoTGrGZuAp19Lq5ATbiJSr2",
  "key8": "52BvKKy97Qrvp4qfhkSoKR6mZWGY7ztiuRFzuzZ8Vb1QSZnWpUnmQFxZqrdFDs7ifCeFmEdtF8u3A88sUMG7KnBt",
  "key9": "4DdCWeaP5f4Nt26Aart1612VP9XPF7VKpz8VDuVLeWUSkB1PwGzDDS8X9cNsuLfz5axfc44TVdbWJMzVq2iLRkdd",
  "key10": "3qXfM4Fm95iPierhPM7fc28UsSwW6n3XRr7PfNFBS9HEpwvnj9BkeMVDJp17fEk4C3gkpMDCoC4mDuWAocXRkkZw",
  "key11": "3sgRX7G7qo3389XNYsyAkoiGffdCQBviwGKZoyUgsXueq7nDxvALsbxJW9EtYSgiJpM2sW5ngASEAfBkPUxUmgnx",
  "key12": "5WTeE5kH9CcsQLyYaj8GnFF2NYev9pQYHZxTVQNE7Ui53LXCf4hh9Kke9nvFqqLQzf8QGkChqvkvazxAJGxxxDBt",
  "key13": "2dqGow4HfEtyyTW62sQubk3xyT7MUfWDMggV8Evdyvcu5Bhsr3PwGb8UP2VNMTtXbx8G18xzGAd2ZhcHW1zwCYWX",
  "key14": "3HAHHFSYaYu9ivTCD6pyEqJFz58kf48J2g17SNw5WDpJHk63WMro7qJ5o6yVTGZD2uWqjsKUv72HtUDrQGiraLh8",
  "key15": "3tyNBw8fGpmvNpfPFSf6cTVCe8PydLFozTbHJUZVqT2mmWSYuzVKfomHZxKjAA3eS9SWc8QLS6UKEPK2mxRLF7jG",
  "key16": "4vQFhQTib1J1pecZAiqjBMoMnyg6gBGNajUAkr3otnqcBJWPc1YmmooBrKTaAK9GpzPhvoFh8KRJyRWBNQSNbXDw",
  "key17": "5QY29AhRh4T3MKNhPZMXufRMwdGhmZgCMzpfwzitKKpVtxfxZ5r7btp86WAkYLWxC8HSvYgDNrEWWzq4TAyLcAAh",
  "key18": "27n2VPHRP7SHuuJLvs6C1GFsrtUoeC66PJSSsSkDYbjLgyMo5o6RcEDxLceu1eUG4AhfUwG9Rwky5fB3FZruq8vE",
  "key19": "3yf1aCHubW3SjoGQFcRqNPXnGk6gp9xHWT33gvWfedXYwyaXngxb9URgeKxU6KUPfTLvTpCmQbY1zYkz61ijMrV5",
  "key20": "2C7rzCWoypHHvdopcZ8whAj7NPHoxJTFWJNr7XLHYYxfh1rJieuLS4dgvSAjy3TkEJV2HWCU8Zxhs63YVXs2rQUX",
  "key21": "F5VkDrVYSGLgY9JzwzgxBtKjst8JRe7RggKGhWPnpTGwDP44PMJvGET4qjNiAN2FsKgN2WkATuH1M9orB7Jf5r5",
  "key22": "5Ct6uASU1xoqRwCoe2PVASTimKRGBVWeuNe1nQ4xKsabqHZfvjGnUQJ6teEd7ys79HSaiJtfsrSJMMGX4YorPA9",
  "key23": "5MheYPzJLBVAh5qzp3a5BbdvLC2mkdUU31MAC59NJn5FjN6PNaqQG2Ba9kcNPa571u3N3UTNMwRPr8FjQbfXZt6f",
  "key24": "wsCP4qCUmsKZVjrfJ7ismY1zLEghogCVoJnt2aUoP2ktxjaA7U1SMLuVa6QRxwLWfD8VXZ5sYXqyhYgy53QEn5K",
  "key25": "3b5U3iRGQYusjEJNeXTfpzBSzFvtZB5SRm37UZZWCCb5kwfvZZX6gWuDfyoPLfKcxshy24BMPjwSWo8KdzVwkRsD",
  "key26": "6ZdYMu6dN971eB3unrGjconx21KegzGZ1j45fS5nJ4TrZKtrWFKcxGzEbkKiLWoNSPjHC2mxdHyD8Aqqqe7NQE6",
  "key27": "3G4DpJ8K3fYYMP94rCCM1syEYjCQoSn5GwqFjkgs7qGw8JW948oMDppZ1CN9wzmMiNS2SK4tEujph6uS8R9JynTE",
  "key28": "5QRXYvcMke2wbCxtYDpFyksuHXWYcE8dw8wgTv1KRGSjQwrYTNWmvisk8g92RqmvcK4R4L9xjfwpYAsLxwjV5aqc",
  "key29": "3FfBf2zXCb4ajPgArxV1yhARKwhaZQsB3FxJevwGfMJ3f2dj5NZFP5XMaugKCWrnWM7hGaR1o2b9soi6xS1BtvuC",
  "key30": "BTw6nVgRCqJpnnyBzCFjx9jA8zrDgeXSPFKpuZKXxj51bUprgDpL9UuS6cgg714h855xzszgANX7z515qzm2Aqg",
  "key31": "TLhpA1RajMXY6hShPbfHWJ3RVF49oUgDKf3cXRtFD9DuKiEmuuDN2o23jiYmz45XZgPVmaEDJDjt19jysuumTNp",
  "key32": "2h4Ci8JFDu9GaBiJcaDxbsCiPginePsJG1FWWAynrryjf3J1byaZV78i2awZ5dphs7VJWPkknHtbxUVrCRdDXa9W",
  "key33": "NuVt38m2r4jeAHbQWGJFH45qJc15MK2yNHSy8XqrQKonxX2L44x7Zyq9J7X1dP1v49iLdxfNYcPo9QYkCGQJooP",
  "key34": "3ZT8ci47JBxoyiv9SuF8QdgUUBJoxH4Wh3EXTWukTfKtx2JnENRC1a4s3frNuZNQmvgweMC1a9ysWC41ub6YY3ht",
  "key35": "5sSrpEBsg9RZNHTeByrbL3V4Wj6vELCiY2vShPvQySGEM6WbAyF1eiTrrdxoTK7K1koAozciTYeAVMQFwqLAHr5U",
  "key36": "5aUpfsUxTj9GFTZyEx6R4N3xxvRUnKDHuVgy3v3vCKqgmb5YBCSNHEGjS1VMvwPeYjbkKuSbv4zZcaEPoiw9VsD5",
  "key37": "37gtbsv2v8N8w2fsZVkHFtVqG657JokeyDyzT1qvwWntn5qoeeeA9NriFZwn1Tf8ftrqzzC8geuhdWJ6G8VycMZ",
  "key38": "5UGkpHRcjfu6ySpwEJjfEDV5kXLw6b1x8J96A4TZ554upzKXBXJiHAwBiyUZBvvBjmECEi25RZHjRb9RmtSV9rTZ",
  "key39": "2JgYFR3QchSraTPjErbRmMbg33ZTiunzUaUQnrKgGpwQHU2u3N5MQJfpG758v6UATydKaYkWsjX2ZLvtuqR238oz",
  "key40": "Hwc6Zf2Zwm5MCpdKgC7aNSjqB6ndzYmt6jEmWT3zeNhi4MNJfnLRREABRKETuqHnVCprZXEqKyaAXfJHSbvQRYv"
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
