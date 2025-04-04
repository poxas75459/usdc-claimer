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
    "2v6VKvTpF8L1TKc6xL7DJPuyFNCGiMGPVxnLaSNcxBSmBowKdJCGe2LbGy8BeqoJjeNpoMMu1ABRjX3LiRzqJuRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqJdSJ8dj1jPMoM8rmRDBjvSpanp3bBzGgugRZ9A76NPymjBer6dfGGWSgbXQHYemcr96RzBKDHNMriyZAxW26f",
  "key1": "3LpWid1JCJCgUtq57mjTEcx9zLrKoV3YrCQ1wme7f5bT5P4cCbvgAVTiZHEmAZTS9zBz47t7rhxYn24usAUcuzBV",
  "key2": "2V9RXN7MQMpqAQ1G7QjZJdFvPnf3HQo9Fgh7i26jPiG4HNt1pFvCFjFhu88saV35ssdLe4QMDSZpqjRZZ7dbYKsG",
  "key3": "5LxGJYerYVkwhrgStuoai2M9kajU8xH7hfNPo9SSxgzaABPPEng6RqtJXnZVuubv9ztXEevFLtEVmY5Fvq5JttPB",
  "key4": "2mHFeXaWmcVeFWgLsgriAb76pRAukep5T2oAMe2GRZNsjM6CZQi2mrK8DzDHtFf8JgMh1AGvy6QMtdmsntgpgj8K",
  "key5": "3Z2AhmR47ebrUz9hJorwU3qurPBrvXQKaXkZ4gxnEdxiXXSvzg1jcLcAoa76SZExwMDxZE4t1NJcBvfTbtNcNQES",
  "key6": "5Khw8EjSu6RRX9TFqFh2UVjzwfkk6fFxcLF3EqkbSGGuYM4k1z9qJZd2bDXC2QWsCcvasf6gpqxWqBJ8TseR7SAi",
  "key7": "UC1UpKvpynXfmQVeCQ8F881Ajfz88HaGSbCn14pzRdR7wvRNTxujY8BG7utKAasAgLXFBXyp8jvRK8aNRrnkvuo",
  "key8": "5fu93pLH33Md8uCsZnWCNXz1J71J5kSbGjAaVc98ce8QowimYTWsQYTXpfJooCWmpvpCoQrPeePyT23JYnfdxaZb",
  "key9": "28v5aue1yV5NquCPKB19XN36PKHmpagH2Fd5y1yb2QhqbT29KJu4pt43Bz5XumnbxPxYP8eBTKCS5dtVDBjSzPgv",
  "key10": "3wEJhgBSd7XDkix69hPSiwimTkTzZ7SC3RqWXtoGdiTPCFKjUh13TbQ3WNjHazqRL1qmhPfQ8ce66t222WBpCtB1",
  "key11": "4EGwMk35C1RtuvipATBtmsXXK1BSbKtMHAcY267jDy4FdQCjPY8pyHwjyGSfGnVqmUNg5dcCYN7eK8ty9xNQoTFa",
  "key12": "2H3M688tqUHFvCgA3cpu869cv6W3LyzT9cAKoh2CL5XXfvjbbFkQA1FkBP7SPe1TwaFtop1HDXFGpYM9NZKYk18r",
  "key13": "2XKQtHg9kAHPsgF7AQHa5kZJwG46mEW2snTJY3eQDbyScAYCnKjbAQDqB9ZvcLh9FtHEWbmYWYfEKC7SpKi64jxL",
  "key14": "EV2S8RCmy2h9CUpujo28Pb8j6MAXJ2UKZu6DwekTs8ZrABw4XkNA6nMDcLtJms9bK8DibzedUz7z75njxnz4hgd",
  "key15": "TpQmPCH3vFyrBhqWPeUrKj1z7Nmbd3N1BtEUDthjBLKPTJ7Mu29fj2D4wi1FmbZfMpnpKT79GaN7jXrMRjbhJUy",
  "key16": "4c5HHRzwWMLMpgsF2X75egenHALU9XTabDFh5cPTCWy8LhVBvsuVfDNhau78YCbmcXsEBmGvHocncysJVcw8rVbq",
  "key17": "2BpuNSFwCuPdTrZGwc2NddKsBN3CkYBgn4Hp4WzWHrM1nfKBxFoVdyfDtEgw115PXH5MqsnpmzNr4LdVuJJKYSrM",
  "key18": "3F48Cea2pRM9nvkrVqHpwAbQBm7kYaVGVnNyxW8rEVwa45zfrRzQZYvYFJk7N5QhN8LzN15uhua3X3T3YUpUrirB",
  "key19": "569XdBiiEhMfpK59ybKrDo8iyxW5VZeVB5bht6hS8yVehUYRVt4Et9RNmYyPcJ4mSuQBwwipjg4wR7h6Jsko8vXJ",
  "key20": "4pbJ6LcUhkuX1yui9Q3NcQoga63e72oHdhNDbHbhjHpjDiZAoSSyXETsb7TGzz4jBUCTboXuSp4PKKUToaD5YZQf",
  "key21": "5Z9kSYLJSrqHbh68CXxPAAmj6Thttb5zbRndzQQHVRbSmsjaqLe4XVuFMKAChJ1fPsGFCqdcmwzYAaRLLChDMzup",
  "key22": "ZQCezpi5geigvpKjHSnw5Rw4PMywCGwmWabXoYXPKugBzirCQVf4uCu7wkDkySD2j2NpgixgNXDTnqn4ih5njgx",
  "key23": "4uwwdmjgsGiwhU6keSu9fhwLz2oNhRkXjo2nR5AqywdYruaRwbHCqVmnMF4prXnPpjXgsFtB7Kn9dKneacsFmfiW",
  "key24": "53hkhAePCZNDGZat3kG6FuAhrczYHU8P54xVUDrF1vmEmB52zcZeV4AfCxW6xhHy4nDNksLSgfF5wetCx6TQjpHT",
  "key25": "5zGbxpERoK47HuoVY6ujHxnNUuN5DczkbXYKVrFyGwbEMBEJUkiEAuUZc1z9RRL85KGZPjKx7NQeHQR5xcKDraKt",
  "key26": "5B3wpGKQ65RmKbipbtrMjtQere4MtepPVF9zUKUpDEwiHMPEzv7nLx4Ewtv9ZGxvvMXuzNA3DWHVFXdt1MSvwiJm",
  "key27": "2jRZBhPa6qFpbJLvjwFTHoNJ7GScMkufkCxaS8ApXPtdoyPn3Y6LiNxFJJZNws2DwKMBGJq2e1xdHLoV2okkpfCZ",
  "key28": "3KLQ6kx1Xrs1sMyJxg9nfjjDAyJn4n6C2fUHhSjCgPYPtpUnU39dXDNmy2JfxvUom7Eo29LcrwspMurinDMtAknZ",
  "key29": "5k63q6F43GE7S3juiFwEc5wWuUYtTUg1dxcAJ4G9GQ9VnvmQrUZ2Lk7FVrYopeTXYcQWee18bjYaiDH6CdyHau4x",
  "key30": "4DbXEM7GwHBWfHLJm9zrt2fnRE8xWaoe4xVbFVtTtaCZRJ7149k45cQmKbAp3oNmdxtWyvDi14Ynh2k1fkUzspzF",
  "key31": "2tQ6RYZWRRZAbpsmj7oLttMSiYanWgh6tpPmoXPNB2FV1xP3Mo8NfDsxbvQqzAaSdfPTHJWMY6X1aKSMmczn2PEy",
  "key32": "57N1KsYZYTnBnMqy6RQcQarsSPenhqRoprfvCcQhcTCTdYAuVvDqsWRyQyDxDSryiap6YCTj61tiLnRKmEQuN7pc",
  "key33": "5EtztNMWe22DD1ZxvkGr6fdiSUMUn54bqGNFxKMhyuto3nQUX8oS28YxVifEtsPhgiUqjwNbqUCZmzi3kKm4ockz",
  "key34": "3gVVYNJMzLihYqRSFeeeVWi3thfmXovG7kjokzeeFhJ1AUv9K5rCcjsGUxx1CuuD8MDw1oXGtRmihYDHH9vcXoY3",
  "key35": "5xg3RWsuk3ojJzivCgAE93GfppDPq4ixVCWKWeX6g1nU65uufiidt3uTyf9Eg9EhcSr37htsf3wimaaDp7hnhtQa",
  "key36": "2DRxDda4B8p19hQY7Km4EqabW18sf1vEYH19fFHQJLP2KWzKM8fdRwifRz6Ujc9Ss5JpQ9veJHvQ4qnMJaR9Cubt",
  "key37": "2NKmjCZN4buCrUpyAFWmr4L9DwH5eemVKhH4Pdb92W1mqdUA9xn8AL2BrHucxYDgeipg83mJx25e1LKL1zWMfqB8",
  "key38": "4Mf4VyYpB9Cd1Z83pFhLvJd8hB96ZG8Uhq4roAMJDaJssSYbq8f24ESe1hgN7FPKHG8UKaEJUVwv4BgkfSZu1N7d",
  "key39": "5DfxgJoygPGMLhpMCg7AvfeQ9fDD4gmEJx2AqsT3JwSnUAHKzeKFLsQ8yxGC4JTYJypDfAqPActqtj6zVk4rQpit",
  "key40": "2T1Ki7MPuFtMCytW6DTqUdpR1WHPdSVkFfKiojResxrFxrCvgd9fyeKe89kYzmGYDndX9d4jDggapqS5WZwKqsgK",
  "key41": "3a79Takhifagtbf8nY6omxJkPvA94LpLs8sPqTpQG8G4JFSrpeqWkb1k4wNk7wnN6eZvLmfAp2WJinkogsbT3Zey",
  "key42": "5KVe3BvSAr6htEM9AaHQgGhSvVLoHRzaNj79fWV596a8m9LM5nfLUv8juG3dVsCYHBXHpCSKrJ9byXizCsLffN7b",
  "key43": "2mRGrb2vP9v3UiiAFn4XS3nA5KvagdbsLGQmx7KtgEPoW2xFWen2iJ56ETKJPXP7LFtBeoZh7zTbGVPxAgHZLmB8",
  "key44": "634kqDnPzBgQpFRyaVkkPBB7MUN4ZmKYWBJSEQsBGVmuzDiyZoAUka5GkWvbJ9o9PxQ2Embd8nz19LqhGzqQcWGb",
  "key45": "2tjFZYatBVDabUM3ah7wxv6Gxp9SUxd5YfkAAjUEVWnrCfK1crJJXzy5djg3VKLPfLNPdYC7qaPafyT2LpgUoRQV"
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
