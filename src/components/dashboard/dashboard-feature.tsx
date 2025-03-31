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
    "KEdfz9ck8ez81srm8KFR9mVGbBrkU3ndK36Ds7EoHfgUPmzUk2NNCdMab1Yc5mxyjpv5FcGC6fwFhuzLAFhii9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DyA6Ypv1GvVauhgNmx2933thZAAR2UWnSanmvHKyJDXfh1x8h23dfBdvbs7q2DgU1AfUxMa7PHSDLLQta3SdWkM",
  "key1": "4vwwedrRfyywkuJFD5Bz9zkNcMreZgFMpY3K5TeippbpLd3R1RVCjY3rwLegPHpw8b6W2bHtQem86f8K9bWnXvmm",
  "key2": "4C3MDFPrupi7RxuWT9f2nwyci5V34W1tQPNVoNQSUcyfGiqmK9RTvFeaScumNTPMtA1Pq8QXr2XNVfx9yF7zNbPN",
  "key3": "2BY5Jkn15238fbN964SEEjhoaZvbwZeuq3sKoTcvhz5724M3SvypQcUo2cumpk4HH6WGqD5FZzkzVHRfukXf1KzT",
  "key4": "jWfVtE1Fb7tMXhhCSoEyHUNXNXaMzENfFwWUj4PAQDyoK7Wr2GmscCtqyXTHrd1gecDzDjdaPAGHCXSmeRUzsVp",
  "key5": "4QGRiw5VPZ43AyRChpcLv7onzVvmrJUW5d8NZekhgzAwwTmxT3gVmTrfTQ5fcjDNeBvaLTdKWHB8CgcVTQAJt7Fb",
  "key6": "4E6rpB1KGzc1uoakHuxWB8Et9WtDEgPBKF8YfXA9GJwGeQsZ8gFscx9LNv1MErEoqbqXqTgpRegyHA3fU6YuUkJz",
  "key7": "2186kAii6nqQyEAVCF89ND9SLVeYVJdiyi1vG8jcBkummP4cEgepEuAtPUXGX1oGedvKLpAPiCE5PCAo3yUoRssf",
  "key8": "3dZyrVwiHTwaGyoebjASuTf9LJ9WEpiPzWqYgWSNikurXC9gHnRvGWCrcLJV6cWGCA2t5XGaA2MBKpLjypFp31Xf",
  "key9": "2xsJU8ZEhDiFeAq7mWkFfaiuGRJMDicYvyPPH9gRW9RAQ8YGNmQNaQAXAtXnjY5PVTKncEs1mtcKFoS5Z5m8LQwd",
  "key10": "2LMkxfmh8ZBZDa8jyuJde9qxs9reWuWjUqrRyeP1chXUYTLZU9jaXi1N8Ukcc9r7Kz6vgXVaZjYZDmEqGfUzEy5H",
  "key11": "5KLtpZZZ3StaePvT6YvfST5fqSMcY8DSf65bu546kpKMB4Dr2UstgycG4Zn1RHcXawpZ6cwjoeGrfN8QpuuyxKVg",
  "key12": "JpcpRTJw1jCNrZczTUh6NZ1VMH5FZnEXUryrgnCmTKsb1KBg6AgF3fK1MeKX4zn5uW1zPPboyYVmYmVbdCYWR8U",
  "key13": "58q7zV1KYDceWdxe4YsT5ux2SzsYFxvQtnb4UEv87fRMoRiB8goKoiG2LrEwYroQMoWraCd57j2D7DKQqNZLEv9X",
  "key14": "3VQCHqokWq15nuvVVTkyDxXhWcAJinDEv3GTmayJbvUJNq8oF8wXdanbrV4ipD4RhcXZXHqUvSv89JwLTZxVdW4K",
  "key15": "4aQZv6Xh1BYdjLkugaZ8wFWBWidBrxtUMFfBWmTeqYZfTbYZGfieVz4NFbfpHtGWJBkbU9YBemAzZUkpLJq53MRU",
  "key16": "3z628deCP7JsGneCaPZ2JEQQ3115eoth3mihHHN4CE37Kbs7B4i3ecHRmpTZBkHVc31Luner7KmQ9sGN6bWNWCqF",
  "key17": "38hf9Gs4sJwK42TyycnFAnuYM8CqzNWWuLpaXetkavQMamcTrp2VQ1sfSgkJMugKeohEE6ijvwaTWmVqRobttKTv",
  "key18": "2kpa4FoJnNYXBX6Hxa2honV5jAHPdVenk4tU7t6gHr418nd139PpkC6iEtqEWS7rHuDwm54vAA4MjciRsrPrtZkP",
  "key19": "8xewW48rbsqMkGdHikrb5GBLXk7Dsd7LVZ7PQhmPdPKHJMqZVsfrwJghi53ryCA29tsauk2XKuNcyote4zExjyF",
  "key20": "2Ca2y17BiHcVAN2H3hZDc9RZhcWKjZDKHpfuQCq5jEtXZASX4BWrUvVsaqN6KcyAn83TftgVUG4MxSx5vvPNxRdH",
  "key21": "8gYujqY9kuch4gAp6gZqJHq1rbUKStKEjA9LyK3WFXfBRjkGrSuGtQfbk2ZpyPXKpkRPwMLBh1dZuTTQvsUZ5Rx",
  "key22": "4P36udervkUApsG9F6zwySqHxi2qVNojNAq5cGr4Bo7UiJmyjPLXcUoK5EueqttTG7655bHC8xtT1rpKYr3k2sLU",
  "key23": "m6GhamP23wzsqMJcmqPMVrr2B6saERzGy2nRSuavD3B3HKdt2jVMLkPTbMPKwFPBkAdfkYwDyoApjHkfYFT5NGb",
  "key24": "3Und6KZfLqhna84aYbePBXRB76syWaMYo5Sbd1pUCrXKLnFG5bWqa3jg17Hic1XY9XmzrjyfpkaKe1n3pQEs9aYY",
  "key25": "4ToUitrhbDgwM3kvdTHLpSHaGtELCeDbB121X97LLofNuoCDuJBfuzdcw4qGianrFHLX3MEmWNAimyNeiqQKN9xe",
  "key26": "3jVBvAHfouzGr4FkfYi7VvZp4NVV7xtXSGCzhLqYzdM8YqbAXmwPywNkEQW3WxmU1NqHwFjn6eagxziBXgi6q3TT",
  "key27": "4UHfTu58t7QarjzGXUYqm65SGZoYFZNgVWXiu6bWbv1UdDUwvSrJ7dvqyrujPkACm7rVP4PCrn2q8De92HEw3bj4",
  "key28": "SZq9gE8NkdPSxXFEms4SfvE3UHiVNZNJVdnTqrPQhEc7XnEFPxGDFekbS3YaGJKyKBJojmHrFkMNPRZpi9f2Xcd",
  "key29": "21Mj77E7jZCsYx6pVzTax2deeC5mCeX1LeRbiQLZTDKUkSHqpvAykMsoGECYwve6XDegaxkbuDoB8a63sSGQoKJi",
  "key30": "A3Gh8QXHgRM7jpXUJAYj3AePGGzbijm5NHC8XPdngw18XbpZBkB57fZdgZs3qoEV2k7rbcTEnsyjCRZ5pj5R9y7",
  "key31": "2452dp7NLr5cH76a2DMjRk7q6Gz8w7jwymKr59wkyY6TZpz1aLZS9KgJ34tLfsAXVhkNqoHUTpLxR3FvQgoe1Qzv",
  "key32": "4gDr7X4AD2rMdFjQuNWNwVW2kLvuEEitPDD1foDwtPvQjEmm8dizryLuJAo41CJpfYSkWSNjTEP5w3isRpLdH6HC",
  "key33": "4oPmd3A2y2judnefuWgxAHwKj7bXdWeWAphrk7JvaBogjhLtjNWnTUBagNtmrWFhW3v3uQGSUdkZUhUYgcxzCWCF",
  "key34": "4ABaw7ZwoBzaT6kepLEU8todnEVjrfK4JntWZTavKjgU97xDRAUmHnUmm33SWSFC7CK9xAXpPcMY3NAgYguxFxZh"
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
