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
    "5712rDFpiuk7DUum7LLR3tNtLuKj5o9RTAME22VKrkaXG5VS7UsbPMRMA8dWjpP35pLpCAZu6tHUf4LgctrNsTqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgaEJYsATs1iPFVRehq8Bom33dVopQEyB2nWVzawwEWCBtZPGkb4h7KBhFvXU3hqs25XqF44CXsmBiZxnFQaPAQ",
  "key1": "47epJ5vjLS3xQbEn82jvq49EvCXKr4WRxDep5p9JXZEpNyydeFzZbb5VUXPw5wJfcHhZQ2USdmuodUVv7bSJQkWQ",
  "key2": "2RqrkDPfrcmhHvkv3Zbu2pPhNMMcege9mNUWmCSBefRfuLsGRcWuESPtE6wtD6u8rFTKRzEDyG397opMvGp5TeGD",
  "key3": "5mweRhvmdxeVAwBZsGbuypq7xuYSZ9xvasMCeUm1e3DCj1a1QdJy85mj59qDwM6txZe9w6gWCbPqg1ZM5CFNWJbu",
  "key4": "2d4BHp9TV1SSR2q9e8PH9QJ75dxy38fTzevtW7syhKjxLFpcV1DH7MzZspXBiqtACkRRX1a7PQC5MonNqFRMVeS7",
  "key5": "2f54otKHssSj68X5HjMpH74sBYtxUxRGMf15a4mHwnXfpsQundoYPc3uY7hQiehQRtGTsYBDuFUjPppVEptSgYvc",
  "key6": "YdZu4UeGgPBcw4TeeUjfVYV9u3qpB2XPmMAATf4Eyy3Hn7RCWn4hB6MtArPUsTeHX3f6tjDZAmbc133s4k3wxoS",
  "key7": "5vgLTEbTBAJbzMRayhH7WC5mbhqbxT3CfuG4Vg9akVDAaSFhf2E13W4PYfQgWmC8GpVFrdK2rGSS4qaGgnU8xyKH",
  "key8": "krxdfjrmtorHir1QTYBip6CZWiFxTBtKoMgvW1CAEtjmJmHJfsgNDB1ueFXdY79odNnEfq9C3S4oicDZibw7eGm",
  "key9": "4pMvUc8rRk2MGJe6jvy9vsWNTNFgXP7WkXnMQABYydNzmXNqbmCaL8bcapm6ZJYFKoKNbYJVEF4zR6ouFzSQGnYq",
  "key10": "5AfNeqmgF1cE2bgZ7UofrxRc5jdCsqq6v3cemz3BFNMaPignFPnLwV3sVrQyRPZXBHEae3KWEMih9WsryiqFhgNA",
  "key11": "4Qb1tssLXhmpmQRXqf1BrN5KfNs5YRqQQZZtWtZpriSS3vAWxsZ11tZW57SuWoPGMFxmwzSDdjLhhPBdpHTE6taS",
  "key12": "5VZH7i7266FkEutKJzja91AsZHyZMV773oCKAhWwMsbVQKV67jCwq4JtVossUVuMLWX9rjAV97XepxThFnCCJUt4",
  "key13": "4GxuF189FxBeKkCiXdahwHtt21zb1XJaBJh8qXtRTLqoTAYeuUQGtgT4c9ogBzhx16ASAFLXM3UkA4uwMSasw2mp",
  "key14": "5Mbyjou6gcW9QBEgmzwDSD6qCvRxZmM4taVz5te7d16CjQLY3ram4wFDwgfZBHVyhNy6XYsX37JksobuNm5zMZFf",
  "key15": "5hsXe5FuZLWi6rHPkE4au5MiSNpR33BJKfD7uyFXie9d1PooLsgHVNT9q3ccBmVJH22y9JaStLcoemEyenDLtzik",
  "key16": "3jC8pxbEtNaPG5jGVuAinPEfzxxoez7wGK7NyWFtM7hZHVDvk8KtBkg7hMKS4B9soWumjb7gp4f3GtWxcezj7JhF",
  "key17": "7GbJjEGoPjwmAegQdT7oY3hzeu4dkiUiJgZefJmnEPXBCErVMa91Nre1xFV3dnMmnqT4c7zht7vDX4CWu4ZNaHK",
  "key18": "UU1L5wZrypGuBvW1F97ft65jW6TSzWjzDpsLwj7wtAKiRUNGSKJtnM9747yD8M5M2AZuVAy3BGqHXum8eV9UPhZ",
  "key19": "477nYgC1NumNqBESDLXxamss5W5i14T3SMD8SXBJkV4qXCPmmHpBMaeY1ZS3YA8C8YJWk8EYfMBmkyshdY4uPQS6",
  "key20": "5bSr6kxokt9tzfWmkCmruWjStQMj5GVhAW8LasB46fbgngDCr6oxM4wjSVmxzFWsgE6xd8tupCqrV8wA5NEFUxF5",
  "key21": "129DPd7Qu9c9Ayj2zCvy9m9zff8QHCEC8C5zE9iBT6rCQiTmszj5HcGUWMmzYwJDPwy2vHajpYtUnUcWkpB4SzaY",
  "key22": "5JrFmHAkmjw6yuvJzgjXEM9UEJnXc3rTrQpd9Kex7LDGTD5HmvgWcv17LtjzCNCpi6RwEXy9U88HCPX8fALXKknk",
  "key23": "3DZoMyogf5xso8ydCbEdgNEorZ7pjruheps7YyZX53fbxrX9gFgzNXZLir9WCJw66EMpmwSW3wnAEVhnuDKhkeCz",
  "key24": "64CM8zND3GVa3bnD3EZ5qh5wgW1kaVNYprLRN6L1tbvQtemyjR4D2AJr89p4KVuw4p1UsP4muHcAJy8tkJV7QjZt",
  "key25": "MvUpDERFbzwJq1mfVyyj69Zh9FUyqbii8UuA9uEDNobpSx7ZMyBzv9c2u7AqCineKtQfN4v8kWQukUbnfZ4544M",
  "key26": "3G4uRVc6HgKkb8Fg6vE18bmeXmdUghjKb91aNKTKxDoByPsgWK889GDnugR9wZUCy3dZa3BkBe8Kwz8ybzQ1fxmw",
  "key27": "4WZbjVyFLQXK8Ej9KQLggomXbnSDw9WopR2bgSPJ3U8BGFiQ6We6P1uN95vKLm7aZHNR3oedLjkuVau7qLwYeiaU",
  "key28": "iteRdEFR7pcFekvftyN1xpP7TYwaiE12oyiAFgZAyvsxDyBfY2vbsLyJ8455ifJRksdcBuBDkL73uM4tE9DWUrR",
  "key29": "4G71ENFjTAok4FcjXXnnT9rWqjjstbpQJvUELCF1Px9SuMYNW3RWCfNfQctZieqXe6KcyiuKVyZcEtNFfKAb1Sqa",
  "key30": "454ayjUmoBxAQrP5mm9Srhb8CDXFCtxAFoTS4TjBzXJcAS6Y1AkutMqAbd7tD8uq2rEMNruUKzqsGNhwJsWm2hEf",
  "key31": "4wLmAw82wEdGxTjfpq2cuCk7jwm5ZmjZFtdiKPpsEUweP3Xa75Hr1Mjo7TwN6mHgMQbaWe8NBSsnHrjyFYGbDsv3",
  "key32": "3RppPPQ2ctdPEVz7F1DH8Trr1bettXRW5jDKiY8dgYtBzLKtGAnJajDAHjZiTKj3EBkxMaWw2v9RSvxRDFXN1K3h",
  "key33": "4EsACPXEjziBnZzCxuza1YGUsgKPQHqbC1r9cNsws7BMZmBQoLeK4wLTe2MASMTAkaCsFj4yeNZRhKbhtk7X8WFm",
  "key34": "2Uz3snB23V6zbn3nrd4LPpvyehxxWcvFdP56CpEYssdfNA9J9Ru56o44je8FxzsCiLuDVWisMDXY1JspSmEEqVnA",
  "key35": "Nx4odrcmPoYhoizyLZAVNkmXDfzQGEXR9xqU6pcRPgzjXCryDqxsFozFWyWWnpgEuxfJrVPaCXNKSNTgFV6YZSP",
  "key36": "44z6QVPMnMWsXGeUnYNTv8PaB1rQmobNmSvzcBHRGgttKJ6KA89MYKkoo59nF6mcUkpejPNpzuiVDktxVaRVzkLh",
  "key37": "2SQUNmTHrX9Vpdf1fq2vK2nbmdF17EMepBUnnD5iiKEAq5ttY5kBciZtVc5KnVXkpscj31i1oyJ8kTLaK9yfKtUh",
  "key38": "2PvKmrvMau4aNn1mLgLKRiL4XSExyWYUA7B7GfmaANgB1oDDxWKfa5JMLeN6upY81rckDcDgRaVqCqtktpm6xdMs",
  "key39": "3Qug5wwzQPuLr9x99LPqfPphJhvP3DyyKeK9ER1rHVzq71oxmQ7G7mfYx4tcRTigKJXK1bNkHeDiRw44EdGjLVGt",
  "key40": "2TWhi58sExU8XKuJrbpRQtQfD62qrF3JUEjgvqnzyjtBWCZKJAj848wBcbo9iMuipkgevo28VSEAQHVuKq4fvoHr",
  "key41": "wjQpsW4DH3k9ykmfq2bLvvD1DoSveBPaWj19SLNEDTVJwhNKwMR9QAYSheRRV1eZQNsTWYRd7vcPEB572Qj4wKF",
  "key42": "5j3NcX5R1sQmWZEzXM679u2aRSXSiJVFbhgdLDwL9P8LFXn35qEX3KTamhgkE6XKmkkQzVoZtBPDVM32TEyeAxqe",
  "key43": "3pdb9LPzizzVPjX3hDeVwsJRKbHqPxvAfvbRkFBNWBVZMZzDZqJPpRpvEipMM13m1sJk7toKBWnGcyi38Vt5G8t3",
  "key44": "2RhZ4sHfVrtgLxmQeVpRk1e6HyusDPvDEzGfwhGxwCE6JSwMiogveHEjokvgjDNfJpnM7crwLP631EjtavFw13px",
  "key45": "4kvZDSmrrbtfyncuDkWs2hZuGRvdAxBkTM9VEMAhAHJHrrctyox23ePuknQtEX2VdF1SSjbPGjz9RFzqpVXHi5rv",
  "key46": "4cjWr2P4bNXbiLzT6bHaHxFnsD8BKVQC9tetQ9opffMjLgBzTskgzjEJ4rSuQVHdUXm5gscNm9B8xHjg89SPW3nC",
  "key47": "incYWP59VA6gexv4BqKhW4ux2Ztv5kqi2xs96bzqi3Dme6GmcPZMM2RcbNN5Y2ufhpxGV6XJJDDkzh6HyLevg7x"
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
