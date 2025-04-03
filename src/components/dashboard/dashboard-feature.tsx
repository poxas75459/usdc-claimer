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
    "4oEE3f3zQD6aFTe6X2UZRkqrZvdwTdF7mdwDT6RMdhKVeW7mHRfhSbHwNgrAKyfBGn394YtdhpJfKDiGmkQqbBAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFCGe8KZngqwHNsMJgfkJEUxhSdiQd8udcANwFCQHPQV9fWDt9brupXt9AAHCc1uJ98ihFaYuB4qSQaydJxYsTi",
  "key1": "2CgQ8KU2hhdNN1vnfK1BDFyVBALUMYw7KHZeNKxz6zRnZpHN6AbYsSvvUwszdwBuT7wsjHfs7uMf483xFFfDZfgh",
  "key2": "2aoRfBK1xx7fYtD9AebmEkSEcG8xJw1bAVhTYHSdBUQVkLM8NSSvEqp51hiwCNobg1JtJadRgMrE4DxvnZa4YP68",
  "key3": "TpHAProBk6xCj8hTHFLvb837onXfq1kABTr6tav6MDxiJerQEhYa1XnDWW1BBmKw1yE4Ga1Qh214QSAvErnYTzG",
  "key4": "4YpznHacf7iQeTaFsGZRcDrGnhwu6dTY2nYwLMMaCDkhr4SNUEYs3dZa7eLNUR6aCb83nMnQivXgviVrSyQB1CzX",
  "key5": "hS4m9wFqbECREHFAPEwKGgvP8HCtaBmSsdoQvDin6djedNphDWwfkQKfEQKjWhCSVcQM9VuEFnNhecaCA7ko7Ms",
  "key6": "5K4mUJz83pbybXmbCZChM4eDgYQmy6h8kwCUaZJAT4AzDXLmCWmS182Fz1VL25NsG2g5aR8nhwqAZaeftpzaP6oJ",
  "key7": "2ouKAq7txoCJEPztHCEXjrbkNrs1AYTrgCXHirB8DkR6mJ1Gcj23cRLGM6tfutQKeg855mSRiAo346BAPTCo7PAJ",
  "key8": "5KgjumPAZsKisDcPw53kBwRdsZcpvinZWF9fbv75fdPt8VQtYHvNbcA7ABiLSiKoFUCWopi5jvYsFTGBascyyrF",
  "key9": "2tjqRX6NkXK41PbxxRxEfiRH7LTZ18pJSCgio7aZTi4qc7ZrpPqKhVgfiYnPqc2SpBg8wZZkVfN5atCv2LaHEKPt",
  "key10": "6252oGgbLmAoJvK9zBY5bc9sY6weUGyD6Yy1JuduevYnCnN889y2Yj46JdnVB9EHYq87GGPuZ8sjCd6hJuBCmuGS",
  "key11": "4gYUzdyw7z7WiSBHaJ3b8hZqdZ5pnMCeQezKvnGvmX5XCFe2k6d6h6dQLMSwdgoaGSygFrr4gntpu9g6A94U7eK1",
  "key12": "3tKKH2mgQRioqkrenwxF69bycgrJmJPR2Rs2vcTmYuJpMJkPpyD75bJHAUqzsJZaynYuHxfLWWpxyV2J7hQStDhf",
  "key13": "cNJ3xE8FR43ZncHDK3J51s6gy8FPehFgZrkU5aBfBSZX8nZv2zwiR8SGvke4L3XU6gZNU4LhFUGbsXox1dh6T3j",
  "key14": "aCjWMztGidBpSf25tYUEtRS7cwyS5ci1WizrK1MNv2BwuAJ4nE7RkxRe2Z63ypKHDAKm6dmDeFaGZnW8Lq9WTYA",
  "key15": "26qLLspowDaJqmSNDCgkrtwrh47xCkNzjEBRcvz39y4NnBjL5DEBxf9WZxET2hz3TK49CP5w7ddyk1bS5tcPr98c",
  "key16": "4EKhGZCokYhzCNxyFv8Wij39nwThDNZhaznCzAUwQTZrk3ATPzx4WkHqm1jPmk1EyDQY3mCj6Yby7suzxqpASLbs",
  "key17": "2nsL8cj2V2K2KmYbJLZrRVxANAMfALXJJNXFrca7AS8WeqzEHjxRahZDKvhGD1eYUVMxzfAYjAr2isZGULEV2Knc",
  "key18": "keAuSXXyooodTU2RyC7ctKMN85UH9qawKfJYANKQGgrTqTd8vDzR6HceygAsX9P43ND9ZriRwoZT9WE5fUafyB2",
  "key19": "4VpbCvujT6pv8KxywLJFx8cuYpXjQyv7zWNpurtHa9G1qomCKSK8uAbijY428znRTJcP1MkS1Dgf9kX2PgsqXbiX",
  "key20": "4NLtkdDJvCS3JhDVqhjtE4uq61WmEd1WiA1L9LXpVaZ6PmtjRv64KffnfZtPRkW48ZLK4MQmoNNYJZjPDkbDu7iU",
  "key21": "5v1XaB68yCpPzCwaqhXSmebWBSQpnEDD71uyycRriouKftW8fLNqEN1i5RubjgDKBQoCYeyGynqWBFxPtLKUFdvE",
  "key22": "1n7AMZmDrRhgWGXYsvgdThL91nusepqQAw1xZxVmWqp91j64v9sfaJJtM8nL8xbVgWhpGgwioyKbsPsKAW6HBCv",
  "key23": "3pS6zVXeum9TFyv7wqfwypY7xEfwu8fAmLcFkxn9YqMJLSSQmRyNrqy9gZgsAWC8pfXFKeE4N5JK89zndGYuhXNw",
  "key24": "32HGrQutGMv3FFhU5FafwawMNynvQWQXibSK2QAsFpqSz9njYJWtVGA6crXL1nyHZ1CxGB5RAgtvdAdoLeGVHMmv",
  "key25": "4gn518djB4ZGQDUSUP5vTiT3zerYVyebcnuFYmt3nmYKeppxgodmnGebVg21zfWfCRXZNkuopm4aDmgTHJWyXhd",
  "key26": "3kvt6ddgsx85MSEiCoZWTNe9TxnuUFKf9gN3acCmc5RvAobzBqy6b9GVDkxUYzXzZspCpKR8e2bx9EbGkKmXaK2v",
  "key27": "637Y6cQ6akNZD9YKJ1C6KrNFkVccheeqo5mFcngKDU9yAcQ9ygPS47jKHB3r8F1XGVZo8MJcDn9KGDqRduzwq4id",
  "key28": "3va6mmmaVGMgr3R6B9g1LVRMyatGYKHmximQZSxFMBLZe8unToQ1Zb4YDchU8RdL54nUZFAFJyt3Xq3FjBGH2mfa",
  "key29": "VmF2h1t4zG8HzRJjw1nMWHRWpVQM5tMtUeDgqAprvJuBEKsHXijk4kbvXmd9mZPZYv2E8kfcYGfTDbsBdiE8KRQ",
  "key30": "4bYDHY3VbquY3PTbQX5EUyhy7DGxM6wnfZHfjsg6GNn4EmeGPqqPUdbxa8wgzkhjaBaK2ttLL8NA7RasqPKA13fh",
  "key31": "2rcuGb7zkyvimq2LqXrygZu7PjkbJwh64FjTwxb8miQL8uehfbb76hcSTGm5UEirciBVHZdPioVG6vf3BbSk4gu5",
  "key32": "5N6cmCDxB77UwNhRhnsZRvRbcR1fnLiGTjaHxaMrgYKpg17znKs5wLjUzhTLmTdbehFxxMArhePRY2CNADPxDXrg",
  "key33": "5fvA2T1yXZuzrTjFVZaYi7U5PSUUxSjxpyGB569G3xQyLWv6n9KQQL2NnT7hkwwpASFDCduigi8Q1KukN4sRtiRp",
  "key34": "5n8hmY3fPjdweXSCDhkznwCpezRQkuZM98mkJcu3BepmJ5VsgfYf8HtUqnvHDQiyuQTBzvBz4D8a2w9mMf23khs1",
  "key35": "2YFx7HcEV1xFRDLQfpmPMWYDYvEmn6WUzoaK9fvLi3enwUxKMn1vPY6PfV7zbakp4aNMeeHE4aRzeqV1BVWaozEN",
  "key36": "5CdL16EBd6qhPQD556xJEYZPe9AFDymSbU4muknePFSwKiAMZZdia6ozzKpNb14zTYUEK18Aj6FW7jHmbFfq9sYr",
  "key37": "3w7Y1DPuXXPrxJodPFSdjrPBWM2UwbHkgqR7YXhnerfnNd2VG6JU7eVdHtd1PGoPodcQLBtmCHMg4SniZ94KF91V",
  "key38": "4ABMjt4tfH3p4mGp32dQeqcDDzzx37ZLEfnkRGFdLXt8Yzs3KXSzhQ5xze8FPUa6Nk9AZZvCWbSELiEXmRRJZ5wV",
  "key39": "22XfnJFBNMW6kjoRjn9fg2YPELf7AWwfZME64SYru7kAzLFcr33baeUkbFiwvbeA4BhFXxqFtbshWtGfE7S4ga6U",
  "key40": "QJteTW7WPUiGi5HVokEzzJv5UTaxFnEnFx9hBCbkanvWeywXQRVWBzFVziEYBaTPCTYXfjYxRZEwGaJYMMBmDth",
  "key41": "4A3cEgbyXi1dCnk1ntThNPvPunwn2LjU4xVJCuXvR779fKp75FaZBVZq5wbGBBLyUk9pbHgFkBRNwKgciYU1iwk8",
  "key42": "2Ag1CRvrQ6mrU9dYBNYKTPnPsy1qSEMVhf4QvgAgiEREs8KpyZiEcTFxhhpPnwAho6KAmn3Fs43eqhVDKQWTJmGx",
  "key43": "2guUyArpxPZkZFSX6asNb7JdK2U5MZdPadRAbAQMD4wYpjp13rrQRqMe3sw4bWqqqRdvHEsM56vGH3eqVsdvTKst",
  "key44": "24GnTjWf1qvAp1PRf35o5QvYi3GC2CXMy95Kff1N5Ur9dWxrKCUuck47a4Cpcx1PZZxnQ9jKiWyakFBHguE1WKjQ"
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
