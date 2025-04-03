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
    "4c6yHgQydqwH2tybHjy1VFk8J84MqUQUn8vAyofevfmpVicMZwkFeDmk6BJEEnooSV5tt6K1hqjGAzEJ6dtxT3f8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9YBfayEzZWwoJx8M2yqVRdbvCDTr7nw5HfSLzYmKsDej2awRMCVVnKMYDKHMXRRZzAKCwwnRWpKp54nvewpdHo",
  "key1": "3gTXp56MdBqjK2uKnFpNdRAexJLFPwgSzhcj8DqqrrhufEtZ9ENY9NZvq2TUYYKJxrQV7mHS3ri1gPY6CuueUSfh",
  "key2": "35hGjc4pBSSsc1i9BpWaXp1nQrfF53szevoCiEN2HFJUQGKoe6dGpufJFYiYjiRFwppaSSbixJPeDXoqEy4mm6d5",
  "key3": "2T9miJ1VqP5suhxsMzFyka2C84bn3CXcTrjErvEpknKkSeNFq6dSfd49BgSWPvSQ1DpT8CeZ4yCi9Lz38ugTQd1b",
  "key4": "2UjgSo2dciYvREyynpUuij4118tkv4oriUTrnYNxxhLvK1j3inab5AUS3tpkFfc9HMQf7iG4PWBSxe1AthMHbjHc",
  "key5": "33NnGsbWUt2Qeczee7jm8AjunNJ74L6QLKcgH1tAQVTE7zMo85bf9iyRYP1UoQ5KYQJ5E1z4vEGquYeuRFM2vzmw",
  "key6": "4bSr92xP4ddccTuhF5N5bWkpYJa2QUHHGUTFkzbkP9hsua5dK2TnZ3HMucRSw7ccHnxofuFjBBeKSvza9n8Kex1w",
  "key7": "2NMDaoYrLaJYsV9WDQ5tQjZw1wr5fj8zwRJrpvaTwtnGojWjqpvroKijKnj2SANBuhNWh7LBpXmMYYGwPiMYQrZU",
  "key8": "T2ouZ5Ynf4RmiVyGPqV8ARoqbX5ZYz6VGKefwk9jbJHycbvCAVQLqanG55XY2z73D54yEe39qY1ivnH2U72yDbk",
  "key9": "5g2sKbf5vqbHU1EXhfcfmkyjJuRAjwj5YLNCafyCSiK7hNA5XTtMmuHhesEFdhApwwdEj7yF2WtGjrgGGf8C1ebb",
  "key10": "2Y3Lm5QzxgnFZeyCd1r6XR4KCHHUUz5xyGUqpBXEjG78tRNhrx5Q6xFtaHjyfhWV84LpyhCL3WdaMF9Q81wfZARL",
  "key11": "5AKJvNxzG7T7tUjAmxtXXeFztpdk2WLKrr53ZN72nS7N8Qw3JyyvbSuM8VBMUbymXNXAQa5CoKjiHKcgNY5FsYcD",
  "key12": "2bs8ebGbk9zgUkYQGnLmAyegLeqE5CZ1FceXuSYgTHiHsNEfG9PPfqQedLcnJxJTNtUG6dKZqEH2hgrXhX9CkkWn",
  "key13": "xMWi62i2jYTVj2zJq2ov4jH9uajVTD6UvnUiAjHfiWXJMpHgs6PuYV52PnSdfeb6CzE2v8mWJadGL3FeSBeM8uq",
  "key14": "3vT9Kr7MomDWo91fBSP7rmebkyPUNbqVuQH8ASrjnuFUd4QdKLU4f2TWg9WWf9icV6s4EwGsHZtw7aVGVcr1T62B",
  "key15": "54wde8RhxzVuoBXpSXuHzuocimYPknPssRMKhnf4w52dpr9pHPXmEpKtdvGHbcE22eFUkAXhopsxDmfeaxMv8Jwr",
  "key16": "GPS1Nq2pJSQD35fAUhiEijVEHmANgRQiY4tm29jzsDPsAqwmAGsa6oVFEcWxf1YtPq28wQqCcPHfVZns5ibNqTX",
  "key17": "2NniUCRjy4AnqMQ3GkDJmW3pguhfk5nuANwC2ZFEVUdAapZeH2oQsNu5HHSSN4d1eyHVi3QGCPg2MMNbyaQfVxFk",
  "key18": "2Fe5MGgRShLnr4PVT3XanVQ1ryBGEauASeqvW34mh3V8HaXYfTB1ueWLpC1hUdQe1R9hZNekeq7jrRW4K8UYGR4f",
  "key19": "JEgtFGGh3jngRkbga9eybnuWxyZK3K4qiuEJyaWyWiATZrkcw4vaycmAdo3ypSFFnGhKD6zusQkjAfaUknNievg",
  "key20": "52A6v9fknR5aZZjtwR9ogorZ33iaRU9eeYJQPu8QFhh6PdTcsq25AVCbyv9fzHK5QMWbqXr521QcgutKqwFKQf8u",
  "key21": "2fJ79n1npNNzJT3oeKNCT6zths3JzGuqECD7pwEUkgaGsB2SN3nyK4tPB7Hfwsdzf7KJmNAukfpPese2EtLm9hRp",
  "key22": "4Sc6KvWzofVruvRWift6VmtDiSYdYwWckEt9GKUUix5QdkEzpNyfx73LyknyGaVtjH4iDdKqNCript3qC9Fncqkz",
  "key23": "5jL29uJzyRjBkXCEZHYChSiHgtd28oYvoMYSEVoici7DQC68TJrVdxu2f1jaEeFNMC7ZUWcSmG8RGThXkft2YAzF",
  "key24": "5DSK4QNjWuqGU5jdZSoTDjfKEn5Xxq68kwzqAnKwpdsnzWqLbJGzgAizzRjcRpgZZNom3tJp17qbAXeobJrWubZW",
  "key25": "61TfwwmbgVfuyq2iaCq45r98Hur3e2TG9YDPDmviEyQozfZzihXBEyjRxbwWhyhdyUdFQMo34mHXSaseEuuAKDtY",
  "key26": "UtxcN6E7L2FCT3nTmJuhq5yn3GxZXi26DmXoDBd4aKEg9uBEVeLxKb22i1yCZpMmgqE87rEAjUoYesraiPc5wbk",
  "key27": "5FrQ85Xeo8L2qtVZMZVDTbYdLrJBW5xsiZUCTAZijkuzkvCvYZcw1zYiYu5on7rVjUbJ5g1zn7yTCgyV9HCPgJUi",
  "key28": "5Xi4F5r5i4zTCbEeh5QtDefEDEiLF3k5sJXGwvQCjxfjTjUCeBdBFkFJyWkk5U4zkkYB1YXYeMhW3mspaSC8PaFe",
  "key29": "3EjBt4uKvBdous2pCakHLNVmGoVuCrztGBi2UQHpehjGQojvt4nTkM6DH6jN4YUjqoijBubXm6XZSDoUyAc4PW7o",
  "key30": "3uLw2gEuFi2poTzBUBM176qJNuXVLQX3wSnGvxxfrEN89WUH2FHkPrByyij2PyhTrstVnRL7sWU33bdBooqji5Un",
  "key31": "2LpirfTrcgeWnbj2rXo8FTRirJr46cRDqSVKQCJzRke7FNfhQep1YBL7pZ898aUUYCd2sj7aYeYBRqqnvUWbAwA1",
  "key32": "1siBqhVTiNwYkj5LefytRYyqcFGHAjhfNagcB2Xgmgsk2TmaJyk4RQWrdZDDBzTKTND71iVGtvcz1pjpv2MvCDd",
  "key33": "3ZDWTqdaRhj5iNevzKMX8Zqai8FqTcy5M22XTYNEpGKBMHejZmqGSmwwFwUwYBPqKm9Uru6t1H9A6xviHptAMGUk",
  "key34": "4eVHfXnZ4vXFrcVDxGGNBSpB6caZktGeErxh883pup3s3dWu73yo3M5uzQjX8DfpVVXvHKtTEbjV9T2FFSbe1NfP",
  "key35": "4jmqPENqPWsJZJan7YqNMjS46vtYj1ptQxdZzJEfHKg8gdBxXY6MGzFDSGazFDoPCPjGg7o5LHg575viH68FABys",
  "key36": "5dMbqZ9yVF1VT4g5UyFQRryDFszMt5zb6rPzcPnDPdXHhPb8L8WkmdxLpiXWyQ4bg3ewiGzhQ4VsgwASyazZYPyM",
  "key37": "2TkNdAD3dVTrJPCGFfk9gnE4wFJkk428YHw1Z1G1Zf3eyED9L2zU3Be9gbnVAz6ureT4pBZiJWz6u8gRyGhbZALj",
  "key38": "Lm5rnanDvL1hPUx6zTczWWNq7iV64epC3L97RWfopheHEkUQVHapki7aVZxmkhCgG6ASqBvzBmW3aDr4fLcbn95",
  "key39": "3upkVPVqTL8TCAVUpMvbCSz3vsosyDAdC5xTEWKqLBMVHKmQPAnkgL6yCLPLNWJLFdpXhmCaSEyCVDbgD4ikEvnu",
  "key40": "2Xr4xtwdUfkSjKmNUHbxZx2ymE629P5DJYmYLPUenCovk7zYhvnQqUUs93u1kwaHhZhtit7FdKtVq6Tu8PZ548mC",
  "key41": "Q8uN6fe3cKixnweGvaUE4JYGFwiyc75wn9ExmyDAbKqmkvLnoxj2DNERfG9sgsDdtB5ryxt7VEbRBQy7JiQ16c6",
  "key42": "CQxe7qCtGg6XbFectgrtjQNLku15j6FzLMzjL1DuJ8YvLLNyx4bsWA6wAUyHh4PHQGyf7CrKABu1pZQfmBh36Y7"
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
