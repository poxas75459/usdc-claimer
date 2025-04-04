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
    "4dSDUA4fmijYe32G1ZZDiqRfhdJQqzsjvW2ZijRyfFoyQpoovQhoUJxw98Qm1VxgG2eWH5f3M3RZwVRTyAo5QE15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wB6UxeGyEbeJQrz4EQ4sWpnSHPbXbuyLPViJDzy8oxqoQ5LTV1Ychbc3kss9RqdejzAeiqKUqmzeyjDKUMyQCi5",
  "key1": "6uNQJkb4MNxZECiLrcviqbGkXq2Sb1zsfs7XGwdBqiKzkfeNkWjoN2q4vsKxsSHvo1s3mVmUAcDZ5E2W9xMYizK",
  "key2": "4DwFG3N3oeqHLEpjRwbYtDL5RuCkHXuCet43z1QovBQAek4GxgK4nouNUBAAFQqTCxsf8W3FRRCf4Fwxfg7HA21k",
  "key3": "5LVvbQvXHbjKbi4iPRD7gMQx6sp8z91c7k6vn6JhY9hEwSJ3V92HMD5F93ssihVkSzfShSRfeL2u5m9sQNKeYsqc",
  "key4": "5p7Q3mhEEY7tDR14bR3wzjsbsZQPGbDBUWc6jcSAiTCFQw8c16hj1d2cELtf4Smn7odnVwHNxbJSef6Mv7HnAhEt",
  "key5": "47c19vCJmYrPXSUJ2Auma4iHMcs8kv5e4AbPbud183ruUeXPGxTTRJbBT3K2Nj2Y9r3FHgZGhcme5cCNst3bqpxS",
  "key6": "snFYwgHnAo4xLUZNT5iaescPmWcYkk4DbfWbQonQz5asqJbi3U2D41dykbcbRXcViRCUsNkmUSbiuUiokBZFZsF",
  "key7": "3cdxGA22NFt5vvrcYSD7VnU5t1A6Jn7dba6soUVGwkcMaBesZE4rPd8kxSkUEDNn5y9R4TdomV9Ko6vX17Jc5xaV",
  "key8": "hizwmoLbKN3TSuogBB9Ra1h8TmrteytjRBD3a8TpUxom2LwSrZ6UNgJn7U6maukoNLUewYBEtCdGQMSCHD4YuEe",
  "key9": "4xsRcdRnRSSzo2YTKuKRoEnCc5qAJrFjyCk6HL47w6wageiyN6eW2JdYGrrHwasqZq3qQNvrWs23WDX2H4xy3wQ2",
  "key10": "2RfURJBn1LvF9BduDy2YAWxot32mWq7HNfkwEtnf1ZEvxfYjTpiXR4wc7vpWS9fHXwDucjEfX4eJHGHL6JNzJiMy",
  "key11": "3hYrT5K8zVj1mw2bEhwcDmvdCDx7hAWwr6DJGkpfV878embRTi9QhffQGXAALUFSqWV4dKxnv2JxqF7Euzs3P5r5",
  "key12": "2a9hCe7erJy6iw4J4z9RLbNVZZxdjBMt4j41TAH5oxyxfomuDDzrLnYMokNQwPEHcbo5vLWSGqLLYYhXAXPDhPMK",
  "key13": "27XxKtBxCfrF4kX3oRRhKeAdQ3LJeNegBVVeo4uu3kWDq6LYGg3axWW4Qp647k7A7L217aketVdTgPMMPXQeGoLP",
  "key14": "637HU1f5TD4xgG6Wgey2TEN77zj986P8E9JecFD49D4YgnguYHk6eARgePG9rr7cyy4MYMSuvW3LENyqLw3qaBTz",
  "key15": "yRb2LjoXyrRm39sD59rpx4yNo2we3fT9vGvPLPHQx2PNBJnetngwxwhJyeyRV6j2GycGDtBiDJLyzvkYMEHPcjy",
  "key16": "2Mh5giGJgkzv4Udib3o4NDTFdxBUkC9eLraDD36SMsnXp6aY6VfEFup1YjTcKxvZonEHAHMUKcy7guwd9wBoBm8q",
  "key17": "3BjmBBeTYDTtQQM7Ai9Xk5DevxBNbSwDDUqPndP32w2Wi6nLQ2QmZCMk4zrzdh9RXFcKtiZoyfXL4uR5cyvgXXo3",
  "key18": "4Ksu294NjXNrhgmCfaaH4YC9ruXYrg7ikVDAYNCb198iXEkxa9FBALZQ7VU2K5aLqyicnGLTXFx4Rx1A8Ct85AQv",
  "key19": "5xhzdqZSdjiQf5p3V7GMPT1E9DwdPatyECG2sih5YVaCTypGx1KJfF6ANHML2QcEZFLQNYSGBFsw1Twrs3EYzboe",
  "key20": "ajtevN19Fib2m5KkQPhAtizoS5te7tkRfo2xU9SDyuuAJpjLGbj3FQq6GdiWFTMKA4aH9MjnwRjkMTw9kneVUq9",
  "key21": "29orLuf8E3h3b8VqE6hG4hQnMsZe5FSEKZ5y5SsZYwYXeFeKCtmstZuqz8AXEtEg6iEFEVFsAeLZWabCKdchB8W3",
  "key22": "3Un8jnbNccAEYtT3Ke2n8RN9HyuJuWm5C5dzHaNFae5s5YCNCDjgLVySzDYkMwftoMMzfX2fVwmENxjHSAkghHkz",
  "key23": "25PvRfshNdkyhH6wSamYpHC2styCpztN7bxX9cbhoWN7NanjZQUrtXXHJctsnDs7jjsQoY3erdQvxiP5fqzBGw6y",
  "key24": "5DmiVzVn4C6iHHA3vRoU8JxVKdHSJGUoLWLmJzV83S1dxbsgXvjUoPNaECTJry69MjikPxkAKALho3vubkyzJSAT",
  "key25": "XjbMmuQn5J8upr248W3WSxzc6q7DDcaHE7hpS1gr83sgQBu6zceP252PiyaF432CrQiKATizirBVhw5pL91SkLv",
  "key26": "Ty14P8VHQ8Q3hfrpJniGD3EGXi4kXixTShkN5uuw5jwBCSm7W93xdv9LqRzmAqnkdynaBztbLHhrm5Ta4EfQNGh",
  "key27": "zNS7uCjg6KNNi4yAVxbHpVThMZyAn6URycU49weqwTyoTbfbaP6onubGJ5YxrnyZrfjx3DmaxoqBfZ2hb2KCySa",
  "key28": "4z7kSRi9EwkwF6AG7qYGwPqHPmWpTG41TyNiRtednvADaN7h8mk2AMdVt2UVD4q8Di9ML4cbSnJ9U6NxP11TuVEf",
  "key29": "4PFL2dik5GQ3Hs2TD56rDFPj44o1agpDX3LYpj3uNzhrn2gf5stA3GEV2c81ULs1xifh97mgU3DZk6Roc5D8FAhT",
  "key30": "CZq5hv7g1e4NcBmy7ZmXunbix7rkEw3P8hdJD2vGohr7ArzdHxS8QQJf6LNX8HrUgdm8TEW1aevWTbwnWenxaxv",
  "key31": "4ZrnHk4tqTjJTity2g6zemMdP5yFVKpk25fvLnbgeg7SiNM1QmFvVQqeSLBS3padSphDTezUbtrjF7ShKbR52nZY",
  "key32": "gEYqfWCsVwB7B1GMuiejaFhK39NZ7qSJ56VZNphCugLeeLYrQpHWHWGWE77eG9sHYDyVcf9qAY9fRFtJUKNbJRQ",
  "key33": "4VAVTRkuTmYGZaV4uJJEwaFLuwZmiGicKcH4Xu4dbUTEE4E8kv1tCBRPCLdezCVSxJVSn7BJ41NunRq2CFU79pNy",
  "key34": "4QFb2TN4YTRHpbH96qJS9efmPPWbmcP1QEepBeTSzTPwdGWxqd3CBMtEpfk3ULeJuURsr7KDFePQDvn2k2fnWHDU",
  "key35": "2tdcKHWYGfPfKnVTj3Kkwf7zkgiiU5SjPQC8dfTh2xxKbEYmD3VKYfBDKxjzZdU8zLEtDE1XvMSFi1NnSYbxpzAQ",
  "key36": "33k2Ct7WnudEzP84uPbyxBjxoCAUjUpeBCG4fVWBZ8ayBTNawzHprfu8ADoaCSRJpgTRA8jhKq2uVJWUVEPjMsLd",
  "key37": "27ZTiqtS1MRm86EEndjrqpd28rQXGi7Mrn8LsY1EmsFMV3KwGzj977iMZpYUCa1sFANbHjXVLPw4Ujq11fv3tm7r",
  "key38": "3go6tiS8TZPSKvGKw8y5KtkfhzBdTHEzhFUrdE6GWWEQFj2TiVWafEGAupJRRfyCGkn9pUgHKUbHsvDb1512LwkD",
  "key39": "5dur4i2mGNDxJJant6YfGQQpD4g3hH9D8veu15p2AkeknXNhpTVnXdWWndqVz7mu9t24tqaizdjHAP5EzckyF7Tx",
  "key40": "2wrvHTVv8aT84anZhvPVrihVBdDPTpNf4vHcvrLzTQGL5PeoVuaXs8wizHLUBztB9p9UVrfb46NJQRZnVR8UPohe",
  "key41": "574ET1mjzDbxk6HQJPuCZNAFbJwFch92xrRRrudUdzXx2cJhZLZZn4GMnNfiXrHEsLvQov5NF6Sk4jTq2JgW7iWU",
  "key42": "5Y4nz1xErjYVMG2H2vbVKWkKkc9Mg5vNea5kcCHsZu79EjrntevoDkWYVGMgz9sQyh75ddGFzaALpeCxjaNh637u",
  "key43": "3ipt7umjvNQJiFrKs4RgfM9X1RkRoiPZXK6eHxkoZ2gmP28FMcg9TawvYjs2Qz6PbTkWbqkZir7tjJuYdXsjzMKL"
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
