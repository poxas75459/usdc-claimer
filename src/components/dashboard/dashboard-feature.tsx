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
    "5H3ziWidxsbmKujYWcLURSNqb5HAseCC1oPDMym3EWE5b42cgmbu3kAhLnMwFyZJHJF7MDFJExkDV2Ci4c92KXrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ppx9Udf8itjPZyMbnq11v6c6NGvP7yvcYNniTTjDyN6xRU65iuehT25EwijDcGsZEiCofEY84fWx2oHchsXCT1",
  "key1": "5ZYqyM4zZU1ZeTowncHQFaLSyj8E9xN5DdpReyLuNSRwJMwXJPejAFYdSda58xwpnuVia6prRqaVxfcVjTZTLH6d",
  "key2": "2XDc9nc973suayMNPhL1JAVUWRCmpFWK6qUa3MVzgh7eyksJkbim23LVw7w3rmbWJmeb23obib9NGMLyC2mRn723",
  "key3": "4HyzyCgeEWVFZ1J6LnHRgwzFZcbD59BEx4PYZRANRHzxHYgvKAcQgTq8ySo4hPtYM2QZt2hGDkeVEEgebKwPCj95",
  "key4": "2qgXczpHPAA9KN54pQUzaXdsTQM1UHBgng8D76KYmcoLzuGyPe61LuKhJdcrUEi7kMAj4pK3D5ZHuXznpMonyNbJ",
  "key5": "3bXdMkPAwD58PBYQD4WVeUPRaCu4hNxLfR9KDD9um5yXHrvn655oyRkoQiSCwhUvgpkaDTtKHkfU9cY12wyFHyc7",
  "key6": "sxhibcnkdqyzyBpWJ1hLige9bDss8jGECKm6RCxSgZa4vRNcFYMfmVvy8oEseAH45spz9NBTHgf44LyH5QkkEhQ",
  "key7": "2aVPJx5CUFavKfrkMftgkCNqoJuLVqdFAjPWKEjhNM9BUzcFcSWffDgoZYuCT3zjvbZkev4oE66heUVNkfvkPfEv",
  "key8": "2Fok4GjYSnoe9MfSoFfYdyUzYjRo3LC33c5uMKAF8exqtYdVEMWZafKejHFjGetRqu7yV4oKn8tV5gMxmonewnX8",
  "key9": "4S9cZK4Wp7AkVTcukFktu89ay6UvAHRT5LFUiKZNmmfUeT94jp2emmUTbPPk2VPyRB22nhcFFogLtAPvpAhsQntJ",
  "key10": "3L5hsbYELuwniabG74gbPA1bq8UXKTGeFEZrSs9vNMgUTw9NgP5DSvCPfaHG5P37MVkwbQDM6BWA9Z2MDzKvUZkz",
  "key11": "3JZvDKAqvWbaQ7YbQfk4BC4CKytTCnwbToBRohEkh2GtkXV2i7ZEDoRAirw6e8CRfFScNxNewVZD3Nfaydj9GgAH",
  "key12": "66YMwRiccPEw5iKdjtyL29AKTuZpCjKERquNcwHWaLY9iUyYMw7CfNJoGgHU5DWNB8cEe1Jx7pLpx7vQhNuQSgNG",
  "key13": "3Y2AfwC1UAXKPBQ7Kx9Mmh2eUsaJqrHNKxX61FQvRFvSWpzKyN2ryWcJT6vxjiEkQXnpqeADHoPsZHLVQRPy4THN",
  "key14": "JZ9jxW7w9AcxPY6HmqiNNnyAGtvAc23mSy134kHKgFR4tsm37hpjXqXUfV4ry8N2mZ6iVzaU134yPgWKpHDAFNe",
  "key15": "ckNuYgTRrV33tYsV73TXgctsrMfXgFtEJjwsiDP3V2bypVir4941ffnMKC2eTvyTMMtp4YaPSS2ZN1FpqwP97UB",
  "key16": "3obnZ7CiNNGK6F9Hy7vgLXELjxvZ2XdeMEvo2jiaXkD5NGeJFGPGrDc6H7qKvyNqtjCJfN48H5wGBPk47zaLywAn",
  "key17": "4kfgWnitJPKNDwWHDiQEDP2X2oJPLVdC5ks78e3HqHF1KJG4jRtKt8TwkctKYV5CMgcCshbLzFpmMJiQSSinUZEr",
  "key18": "2M59L9457yrYx1fgRw9QF5qFv2TZA5aoMYPzhWB9tZ1r16HZiCSqzx97gjd7WsVdeo8RrkZ59vt8oc3qd7hfH7JD",
  "key19": "3qQPL51aEhSDJE7XL6qhoSEEAU5Lz4Xb2su5ySKWx7qdaC26Xrcb1sG6PQvKWt9s4H6N4YftWxYJaHFNpH4AgdbX",
  "key20": "4mJsrZhGBHTSXQCcdm77WunTpuUFnvgjaBd4xArvZja42PsgdDEjv99WhSt58EpU9u9vYKoXDDo1cA7BRmZoGCrC",
  "key21": "29rwqunEXJngpkQyQFHpeKwVVmHa9gkJ9zhcv3kw7HFzr24g1bMPS8gbr8dLQtbA9exQKy2HryvBDsEZpXQrkhNj",
  "key22": "aaDUK1sdvJysZWRi1UsugTH1bT991pGREKSAAZHNta1V5DugBmBoBkG1zd3DTLpLeSBitmXTupX6Zwvq5h2bsFz",
  "key23": "3YoZHQkLK8nMbqqeCzz1kwqKLNVwn66XtvGafst52XxHmHofQ4fc5yZZdiNbA24e72JUvevgmVRpZFMm8F15jmN7",
  "key24": "2iVECLETT84H51EXAQ39Vpi5bgE4UQyJ1V5hmATFM99VeZR96cxtPVykwsrhodLhGMpZzb9WnCQZUoqhYsNLWk32",
  "key25": "3Zb7npsdupTiREKAUPxFEf8mEQviwpXbZVLqxXGJNgpu9a6pSGjqakrCxPEWuAMAiLcePiVEwcSMpdxKaAyJF1TT",
  "key26": "3xkKbX9AuvxbCDwepMd54bCHM4Z1vaBsZ3A8SCFsSBEK9Cpvkzu3Fhoo5JQsJq72krrsht97SSgjZgQK6aquXB1",
  "key27": "K74GxYvqhb33uRkeTmbbK8SqW6vfYwbZ2tt3Zzhhae1mv1dXFpGPe1aYCDQ3TmZbyPW9ZfttrQ221MMBsdrP6gJ",
  "key28": "zxJx2ryjGwKJgHhnNungihSX1GbjLJDkuhrzA9Fogb9BWgM3DNjPka9Bkc6ZbR9N5orGw7iFs4g6E5RmreKb8ka",
  "key29": "4795BhF9fGRuaMyyXzpuZyHUJkUWqTjhgsZiLWtoAG73Kq9PcVBeYMsaYSZjGvs8BBn23vCvWecF4qAtqfKxcUBX",
  "key30": "4oMLjLudRM4QvCsBCLojqLNPberdSb73jQAGUh9SyguuQYU6LKsG6mdo2VcHNb8Bdu9aNv4Vcg9XifmKvJirgTzs",
  "key31": "5VMJvPFeygS98A9aszuo2xyvKiAHo58W9TNyaL7HLHrSe5Z6aw7sSG1r8BMNRaWZAHEe8GhK4efm62TnmNdz9pF",
  "key32": "4CKS4W7nY63cDsxocjvhaDgjicW8HuPSEwP9jMcBh4FVY21Txe93K3yjdD3j1QQAcpAoQMqvQx7qteXcF7TYm26T",
  "key33": "5Yq6jaeMLbR9KBBLXVP973iL1zt7wXCYbTWi9M2RmrE5yZKxcReh3paNeBfe9MxrBVKq79PBVVM6uSPhMbGuAwEp",
  "key34": "hd89EknFbd7W9wWyCc7UucUKHJ523LKEBQgkEGHTyN7N9Hs4VuqbdvCowrKGduyXTJLBByuLBrBF6pUMLXUbezY",
  "key35": "eZ2UVJix2wpaUXyJ4QrE4tmrcdBbMx64yzNqeYfnCQwFLffZMw56hyizummpodh8AKwMu4tjSiwkoLzggJPaJjM",
  "key36": "5tnfbZc7SrjAzBAnLqMPCP9SLqWdPyKRKMCN6ok42jh1DHqxNCV7FyjYEKH3HLe3sW5yKEHoS73sZbM4miLvvHKg",
  "key37": "2CigRdjWJughx4NJL93e3CVnbP3tfP9uQmWLTKnMfhkix4iRzrPhf3vpURy5nq6ZB1yacxjUu7uhXN26nYzF7U6C",
  "key38": "5fSnnLqpz7zThgMmqRXp5StwpqjWuNi9P5guAqWdLEbkPeetE4BJZsEg58u4TKRFWfroQAXhH4J4dQQxLhBjhCVH",
  "key39": "62rZV7FZ6NMdSi7Qtq6mEzHeVWwrSuAao73uGkzLSR3P2xPz2rzDs5YLEct3E6TGin29u6sddEXmskCPoZxQNn7g",
  "key40": "4EfnhLjD8NTT8tcis1inXbonEwK696iCterVjPHoZs6r35o5e2AxmbP6iHxAehQRXnpXxNkcN8JVxuEapkSk9dBr",
  "key41": "5yJLxDBSyj187PAgfEiFEiqKqqWw5fKERDt7qjX9T6xJm53QbQPbsu2FQGVZBHXd2T8bXqhXBbDycqgrirFAgUrw",
  "key42": "35EmDNcr3NTuakh6VqaozTV9JCe6rg398FwVBBwL8PYFKJ5TJS4Qcpn1g8bWQqFskYsbRBwVYgyoTaaxFdcs2tif",
  "key43": "1jLAhdaVpTrRDPPT18SkNPX47neKPgdh84fbEU1CzZ4Yq6LaSeZnBsbzysq56A1RoigE9Uehj5kUNbZJ3c175PP",
  "key44": "4Wo3F2LyYts9R21pq2rT2XAvsAAsY8iCh26P8AraaYcugmUJQwbe9BsgsSBf7bUB4vciDZnbyyjn9YmQYBtULokV",
  "key45": "5cy3BV4WWe2kUC3wWoSCQy8itt2VqNsZCe7oTSad1dssgw7mHovy1Gc7pU8RCAaXexiGjwqkgQTsNUSStjowDak",
  "key46": "5vajhHvFEKx5Vg97ob8RyELivrMhQTAKTvnwq9q2HgKvULYcPhDckXA5eTixGnq44o8Tnqw34trT5qpmDjjCJHBa",
  "key47": "2Pxdxh8UGfHd6bSN5prN63Z2ynP3PprE6g4GAoq5yePVVUwx9d6TACFME9CVSi9xtxykvHUjSp3n7PYdVB8zxaQk"
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
