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
    "3ir1XL1K5ybD2MRe8WJcSDSXd2V4j7vmFd18EVd29hQ6T7Bzv581s7jBDap6awDzFDjMkRqFDYPHSjjYqMpbnkyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHu6uWgipoQ2NK5few1kkJJrRbvGnPP4s5rNYJR8UsSDwqmHbYET2KRJPVT23jhq5KDCB8wPQfqaWBMduYQg1jr",
  "key1": "4355EtMwUjQUz5wYuL2yYX5RqEemtVNKmVEKSigepJ6owCchzaowAAJZtsxuPnYjDk8rx8ZxWK2TdVxtrCZQeRFY",
  "key2": "5h1uP8c7cFjMwKhRyWiYWbYnRNjtEsUcAb3FYZuVF2FHT1A1rDkuGkRojYdvEJzduDirenkqnXwSekFuHf3vdRMD",
  "key3": "2SG5ffqU6pV3czF8gQXHKpjUK7b7VGRrP3rGrYrsgGVjZmxiknac5GTCfduPNfumfcL3Ai8frC4VhBqwintWFqtM",
  "key4": "23gv6n4kH7rsDtYM1yJEZpRYZsBdjUcud8rBFWodkCVzVwsKouhznkHE4vzPw4NCkA7L8jEM2w5rj1AjFAuiNdsr",
  "key5": "PNqvXsaAmovVjNT89mi8RELxbTWLd1i65FxiLb7jdMUHrpyGqyRjoAJNqFmNvcxbeYXU6gfSWqy5DEvBrDwxT61",
  "key6": "3dS7KtxMzVPCGWeTC9SpoAHAUSwrPxxj8NCUJvXbA3f2AXsPALHiKutkMEt9AJKiVL7LMShHegCM2V9JxCExfUAA",
  "key7": "TSdmXcWmNAuvLXkpjYfhvCmJHvj7FSCjtSDqfnWeUHvwXXxtAqm2kU4PRZtKWYKCJerSn7Gx8HxiKwkJ69TXdoH",
  "key8": "gV4TnkkK9Cs4bwxP9YB3ovpi3tAnvGSm7SWJya3pdDPyv2pncuoTrKLKXhuD62oUBGWdmLZnady3BsaSWv47o3S",
  "key9": "2U8aEDa7SQMvh5G8qoRxghb4NYoJMz4ahG5z13kkah3PqiMsJP3gXyZnSbju7DNKdfzxFY2oPijJcsXL6fNoAuWy",
  "key10": "3WWyqkHpEyxPKVJbQG8Mk7gXzf69Ci8vcRAkdKZsos3QRdrtTNf7uwwf47srcmehzpHob17qrLC1ffy4JA5XGfT3",
  "key11": "54AQHJxkgatXNK9VTcQ9tsaBbXNri2fEuGY2u4P87UK8hZGnrKaifgyvz52XjFcbLt9snCRFCvnxxnVfRS2769c7",
  "key12": "2d2gCuSKZT2boKBPB3HkerS6NTT15rbzUeACdErxw6KskshXA6vHzrPNrJQc1AmgsijB1rao36FJZseUL73Tu3cF",
  "key13": "ymasyQY1JgBS6wB7QuKu4f2zR4DHJz18VdDxrd6kDHx9Uy3Yca5oVhSt1JxjfVDgEmRL4a6FzkgiQ8oGKMKYB81",
  "key14": "3kaGuCpohqG6kz26r3wr12CsSmpVu6RGyrjhZh8R1NfQM5dMmJ2nr7kbdgVXLGZipyZkP3qUyrKS96bBVrAk9wWX",
  "key15": "3UnSWpsLoeAFPizimY6Kv7CwenZGVr5sp6bfXn3KjqZPLN8nUQfvyUD7fz5b8NhAPNYr6TTwxaMDkkJWCCsyz7eY",
  "key16": "3XoHodnj26difk36EbofgAQfYn6HCfk53499GxTbpRaUFReMrS8hQeHe4EeNJzgjUD5TfgTwgqZgXagLNa89Ffax",
  "key17": "213stbABvL63r6mrKVzsuzoGcXbxYakAmodbDRQw8NK2jYReiXL21ugALnhrgznLd1xhD7cb8ZBF1s45DsyP6tDj",
  "key18": "4TCtxQeu2pku3DnXm8M3Bs776u1qkQJEPHvyXV6ArAr3YB2qpjMTYThA1yBoBviLATDdopmcmrNCnGDvn4PXR2UF",
  "key19": "zDiSqwhG4CazW1R9feBQTn87ymdi5qNi65CkBkfrTBQNUuA64ASqsZUGVh3LVSG5HW7kH3LoL8Nn8AUmgqQ7fJ3",
  "key20": "5uKaoRSwfWKyM4tC55eDK9oYy2fB1xJmL2V1YVsQDyEmeNfpHH9FsRfSxS566E33V3M1xzYMc5s1JbffpEintfgs",
  "key21": "4cG3v41bAL7o9XTwW9ZcaBeio16ZCut2b8AxMpHXC5m5Rq7MKQv7vYf1AsfDWLrqdsw6fCjPJ2E5D2R1HaV6YcTw",
  "key22": "2WHbsbhLjsims4wJGkH7kcxhainyYGdLanWArh22aTakxf5u4CBv5nES2eLGHDVafrj16x4UNxmuHdw1CsSJjcRx",
  "key23": "43AyoXmisY8EWUPzVPyrfCcjSyiicTJdcAi3cbJWMorrNbcRgKZS4waGCCzmLBaEyWCGSVHtB8sjJLJRiCrw1CEx",
  "key24": "65a3BJtakJd5iZj6bDvYcz9BbjAUCkS2KQC1DwZVUwbBoEtX8cKDMsCdGK1rz91smBZcjJz5v1B1DRvrwdnCoCZf",
  "key25": "519ykhSBWWax92Jnoj4pk9bkgwLd6kA9zyHDdWHX9eDPU2Uzmh3C5zjyqHxxtAz9cb39muCKkLwYCwTsdcYiwzJc",
  "key26": "3kcxnvZtR35v4pvnkrkRLsskBfHiYBpyYAdmrk61j3erKHzMuDuSDvT6fkkzpjepyuy3GP95yy1qP9Ts97WQ53w",
  "key27": "5TdqzRrEiFbq6JkaQGZ5LCmUrGM4RyMURSWdPU4YiznsginYf9gJby3aA2m2fNHnf9K1AF4UNuQDGufdRA7PhGi",
  "key28": "5Pku9284XUAdsTpBqeqRvVnA3JCsS8sndRRBLzL96rJiwJfCtLbrxzNDMorn1LM3Je8m7gALUtvwFR2nqTtZVK11",
  "key29": "99JhDNsQAeY6CMVe3rLqf3ZcEyJuVs4jsLYVv7Wn6spM1weta3qPANepJkYVC1C1bRxsmfE9m8b6dK2vRcQVjFN",
  "key30": "2iNYEBnFQwswLpWpxEANZgQLkdFqL5VYE4MFh1urJ7a423gvcgS2huyS22Pyjz8SgRKR4Qt25LqfRpq5rKWSjC8u",
  "key31": "52FdyAurGF7urrGoAjvVEn6SyDNiGrw2rEkFcpZ89bMF7Hyyem8SVL7Zq3f6MDy3mGiLStcoatXmWPhVk2EbhFVd",
  "key32": "4mrcMruzKSrJ1wpwp8VGAd4vSzkLXEDE444mmB9f3rjyNKLEBDJ78e8ytxNaiAXHVaRxJ33A8A4x1cAc4FRncY7u",
  "key33": "4z3nTzStDapD4C99Wq16jcn7gJnJyZvwCgpKHR9zGrDnVav13mwGp1aDQoYPhoGgqoP6Cs7zNygfp29fegkpTuCZ",
  "key34": "4FN3KYoNDv9zGdTPExWmYjHHQAWsnv5UK1uhX8gxPQzC8pVEQWN7BFYWCPMBp755CLqytNNyHWocpLMYjHXdyZLb",
  "key35": "65vgcN2fSjosnqRm8HfAuuFgNFmp3PG858NZP9PEimmonWJreQcJhpYoyLwmaNtwbcF8ZhBpuCqRWFevk6jm8dgh",
  "key36": "4tXyTthY6unn26NGYE2RyTgx5XxiWfdECdMWDn29ojgcX9NpTUJAg4csScvJbwoKFVZ92rZwxfrjShD1J773vhgf",
  "key37": "4W2iD6dSSK8XuGdkto4VVTKjttGrCw2MAK2ykKH3bKgL1tbUjWRgJULYvcPDNpwzQ89L89uofP6Lhh1LcBMAaC49",
  "key38": "55r3MzvR4N3FuFenDsaZqqdUvqhCrDEAuqzciJv66GRg5hP8esaD1RoLbaCpYFPCzTQYn4sGHK1pRkJcYwGXds5M",
  "key39": "525vBxBHTof96YTtFYFBgN46V32ehS1wGeaUSS1aLZsQgrPcQ27ExuGRVsvcw8tHMRujooDrP6RUfFoMof5LpN5F"
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
