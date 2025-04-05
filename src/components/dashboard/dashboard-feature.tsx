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
    "4KpuEkLBUqhmMMXrHxi7EQVSzQfu1N3Xqz5QmdTTYrqwnamodj42Ri9ZZNjaQzKonamiMxtWouQha5ewyLcbCpBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pb6ZdrfFcvMFUeC1GWs5szBBDzZv8HuywGw7RxmueThxMZAa5hKU5C9u4JeFHgVZS8RJh22SbLi2KvHwRM5VAtH",
  "key1": "24wU9ms8UexPb38XdX39Q9sq93c3QysXwSPCu4tNMqYNCiTFwKC1CN6Mzo3txyt74Lsb75TVMpmLKjvdk6ENENTd",
  "key2": "5mxJdTmpGvpSgaCuPhYUQWerQ8dNBkHssG4Mo1gRWBs5fMbGx7giETGvpFCHxPVFzbFQF5bpu1mEZhQeooZiCxbP",
  "key3": "5mAnyb7ubdRuiafvrhUMVX3VTTshFeEhPoSwoJiShuuQmGzdCDh6mMdmP3aUhXCV4Gj8MnbfRNXASi46FtEA9e8m",
  "key4": "29DJUTzwNMVP8K8rnCaw76CbAHcatYs83DtRJAU9JHuN37wPSLT714ya2TH8uVmgrtcr5gBeyvGNBJxdZVBnttKU",
  "key5": "2WURrvqRFgeThtDB9a7DyqoiZPx8uMATW9NfvtyTjUStCqeCXzoqcq7kYczJ7RHwuu2QVVtjGnViQ4SU13HrSBSA",
  "key6": "2uGZhWEzfhzp6CFyzhPgJzHTumAFikZhN6es3DMqTavkHUPiXJxhtvF6Xej9GjZV46N9HH6XxRRnbqQ9sd2g2MPT",
  "key7": "5M6774iXL7yhc2BPYn94FSCUBP2ZJC3QrLwV1DoiYKr2Nwek6muSTHjDwdy1FMifKzhskjijaA43yDpfAV4W8VwY",
  "key8": "327MKDU2e62hEoToZk1yX24aSP7J5fXXSsGnVqTyn8mKp2qukkkup4AAyCEJUUxew7G8g5dfjhoh2VwBSpC8AUXh",
  "key9": "2WVZ8XY4ibHJUG2QjBP3V2ChbXCtRKmRsZBxX7qrfzApDM1VcJ49RsPdZnqDf4cFV7TUZf9du4DfDMqwGVr7PGv5",
  "key10": "5EfXYEyPwtYYz7bnDfd2Q4ATN6xX7554HLePyyS7oBRUi25u9ee461ay3ar1yYAQjNZdt99rgyuisF1wnBwoZJKt",
  "key11": "JUwgGXiJnxoMWvbZjgoCuFkxVseaCrQRHJws6VtYMgPZkhZjDivCoAYkuAXLN1ggB47e5QK4g3Q8zmYMNSvKts2",
  "key12": "ybhr7QkM3n5gXeaPQwBtNzGa5yZu26J3xgyj4nX52zhN3ZezyW8eLFpui11bYGZWJyowzTwoFJsYXNZgwBkzyGd",
  "key13": "4bHvaaUvhdwaWW1t6aDcfh6aAyjBbV9rWFcwryzZiQYzXo4dAxvC9kwB2BWfiCVaVNRzSbcRd5aCUw79daLWC7g7",
  "key14": "59NPZL6JajdMcUhMC9VEYT2vU3XUXcBzZckEC3uUaeY3cfVcmsvXyJf7hbgTG56bqbk3ycc1xHdkR1Dh3EoYjWd6",
  "key15": "5QxeGqDbm6fnd7YNwTcPDDfs3EsUVuiMv4xHpnEtX8FRd73jwG4Tvge1M9goSUiGkq3dN3GGNnQKkbAHMmBG7ENk",
  "key16": "2KoTwMrWqRiiVkPXhvKCUjqtrcdzYLnPSbXuBxFMj8gsHJyZ7MUARZg7YN5sgct4x684K3oqwM4ezQVjBk5ZWhRs",
  "key17": "5t1evywVEpM49aUTt48VntkEETkFXUySGZ7uTGpeerrUXpq4jYJ1XZmfPZdqpcuWULdQbsbiLU9MRj8BibWZJtpD",
  "key18": "5bVzzfjUSGh6ip2aTJ7oT2w1c3FnZhUwb7FJHrZeKBwzL1N143gj2BcizgPVMuj2efTypiFjsamgUQuG82GP6bCR",
  "key19": "4qqC3f6CYBCyKrMo1b9oi8qiecwxsCwBX27E8NU9tVuU9sAx7rgao3SrWSh1U3PZj59wECSXW2vCgSdjWvegJZwT",
  "key20": "2QDi9t6k7w8YcvskL9wXcnbaYmP7dDKYzcUe9pYWs8ASsMaXyd72b7hNLDpS8XKZ5PpD2qJaqyZXF4Ehfhi6mxxk",
  "key21": "5RGrQpPbbRwNoJUMmugfPFqpHfZvoAEixwvk3UnBdQ2BcXiyYUdiooK5b5hi8a146RCrim9CkD4Jzi5b18q72FMX",
  "key22": "3i6z8SjyQ8a4ukLUtFwkGWEz9LMAZrEXHxpYP8T27zrLBcn4QbEXsWKRxAn4DQqVnQV9vVoVzD9CRfNwnzp17keb",
  "key23": "63mcLnB397dR4pinFhPEnLzZU7pZsyVL7FJW5G3ZU75fihBNfPewHTZW3FY65kXXkEyfVZKBjuGaZkZpzV4BASeF",
  "key24": "3MtP12cJrGXcyfswfqfpfaKJQ1wtEo4yo1EifPY1WNZKp4U35r3SaFJTkg4ziMQZ4wJiM8tZVghVywwbfDLbxA65",
  "key25": "58teLPV2Q1gzRyqHwApRdK2XPDsZXEHYpRycRY3nSfGSuRhxVsN3xwDKG4h3sFt182kub1vJLnPiqNnik6gmcySw",
  "key26": "qJ5Q51ZZAEJZ7ys4zEc5BvEqJyn1maQ7gJvBniqyo7NtbHKV8xu45cL97ecvhcwNsZMkvXjmKBDfYGKPPhXeMeV",
  "key27": "YLtbEeDiE4SUtPJvrHCoVSpauNUq7WuMGwrB7xmr78FHLvbgqJZMGBgr7nS9FaCd98yhNnPtGTYsGopBU7rg8pp",
  "key28": "4FBHkGsC9DDe1raDoj4LZK2VcM14V7FcQuUBmP1bGwDAJepYb7HNZ4kGyphMT8hj7xZLxRteZmLSJVKMfx9vbJqU",
  "key29": "63mWZhCDZxVPbnHXgtXrzWAzH6PXWkarin3yaVnTsRGg6QJcXiZRzkge7JMzvwrt8SYhrPFaiptZZwxeMvubMurT",
  "key30": "8k6Rsf2B5xoYVt5cXbvCKbF4jiwFwqNi5RXDXZzF1JmaENn1sTxF3hczF9wxdGwPFBG4DzdLg3AM5W6v9HSj9HV",
  "key31": "5XWD2q3toavbnYqHMrDSD5XDR8uV2SapeqGoiTPkgCS4F3W87hTyspfzQ4nREfhXHCRkasvSDE3RkgeiRVgQa4iE",
  "key32": "3eBk5wT4yoybo82mPYuQ6ypSJnBGSNHXDBykpyNcwiWo6qBYQ9wXuAnXQehSWh7TsvW1xAhevCg1zoeDhHS75LHC",
  "key33": "3D8bQhrDNXgDsU5u2Ypjaf2h2p1yj67nPkpGzaisnGrAX1pHPYKqDPAG32KtV7chhPsL3Vm6U5mDJPhEW485d4rq",
  "key34": "4J5T8SntDee6ptEVuZAuRscLkTYcy9D2kbgUpUBNtLjEBuJxh1C19KmCv1dDNWNc65CM9ojKQYWi5ozHdjbkJUqD",
  "key35": "658p2ySYWoZTfyM23m4sbsp9vym7EzaivNmDsKs6bgf3o8HKasDDye6yiBLdSB8Srq6oN5Pv8txtiLQLF8xPNLK9",
  "key36": "43F2f89XLgrqtTrn4zbhFKGv6BTNa244gTy9C8PZGhSQCfNXo8Z65oWhSHr9QvGghjKZrK6m79k3HP2kfooQ4XjV",
  "key37": "3YrWX8dVtnuCgv4RWzGEvbs3KiXzUkshX3WShrmLxGqfwk5KSW1UCe6xpe2R45wm7YXJYXevdKhyStxi7msPJRKt",
  "key38": "pw7vJUJohi7NHBeXmTvds42gH7k3aav9U2mMGqqthQCnoQHeYyLqm4LbCkcFGJDbxxNjB5T38ZeDvXJyqXFEQYc",
  "key39": "5ZLoJiEwpjpvbqAzABrz2WsVkrVRu8ZLvd3BgfP7eVgdsLonR3QD8Rm9jGhbFpJrr1i7K9Uv5g5kfVUxqCFQDFpc",
  "key40": "RZ7tbCTMiiPgPzrBNpfXhKkEcU11s3aAguDkdymapTfVuWEXz5AaRszZZ2ZGbNaY6K5dik1zmkmJBhWmsURMXeX",
  "key41": "55QWTLxy7QoGJdDCATAJ16BKrUa4aX3pZBa2pneAogav67XadZ7Wshpr1RjNWwaaPH3Z8LLp5oE7puecxZ8f4Ept",
  "key42": "3GnXW5s4qHCerhiM2JeDeZMbgMsgKkaGs4m5UJZ4VPJESof68LDuaW5j8UEYPDAWvENYKcw6VRW9kpHPjQLDhoMX",
  "key43": "5BpEVD6UAiyYv3GpiVidudRxvn2W5KDNR6EcJKi8XJcfBr1Pavq6CjT8sUFBe98ZPxFFuUFmCApyjtTaXpjRBzup",
  "key44": "JT5hM5VJjgEUJzM46NQuTd3EnHoQMpDXQHaYqaCUUtfeynfiDTXt6QJrE74pY5jWkmCg9tiTUciePtQaRi5UcBJ",
  "key45": "ipZRiy19aKtUEyvYFQRY87Cf2UdBjgXZYZtUyccDyLCUBJyZmrxJH7Ew4TTADEMb8cCfnzkHguMBqVjFcx2JVKj"
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
