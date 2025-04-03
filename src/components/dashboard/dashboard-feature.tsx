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
    "4MnJNYyfsWtPrqpcwuo3g8GpQe4yE37orkoYvKUtSgtvEF6p8pQsEV6fq6iLV8byfV99DTi6EBx68TQhCTpSEHLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyqmXvHaLyDfHwLVwVFca2ai2jdNbNf27PEZJQMKbVr8jf6zcjfWMjcCxtU17ConnYUKvJqNLc3jqjZgo4Y8afs",
  "key1": "4saxZ4CJQHqjSj4omdcDuEq4zfE5SUL9JDcc7xqg8pGjZEq78dumfDckfJTuEnvNms2VnFJzAkDXW5iwokrGbnU9",
  "key2": "3UA2ZtrXfdD3zCdBiXMyzgWWctYQ4jNuFoYB9wMzPLQCDvVNVZXYS5MadJRTTrwBb8npgrkeW7jLywiiHcuWciup",
  "key3": "3WYPkU5AukoNM3c8DJD8YauXoB9da7eRWgFZ9B2NqfVDs7tPoPRDn31kYLy2XiZjexBbXL2wD3c7pQoR9uafCcxZ",
  "key4": "61TfEhdtdRySDmhiXvdseq1QtFrgg2BH2MfrDZCK284CLQNaLJoHqkUyTnxmXpz1ns5x1sMRDVBm6442t7UbkzJA",
  "key5": "4oWPYKct6nGmYhnpfYCraTLQeqVN2abxjWdwXeVL4Yi3wnKJA4CtRxHBb5cLUrX4vbAqG4twiMAbGPqzQKVgnoaE",
  "key6": "3kiR3cfu9ETnnFFEQs6x4k5js3XkmjchMjiUC8S5ZhFrJASRbCEa3TiaiYgxyhFAmenTuXkFN8pHZJGYrC6MA9em",
  "key7": "4JPqRTWHaV6koqzdth5NQDNPzPvjAG19uDxvVaxkXcjigLRL8TYsLYdV5AWNTWWChp5dTgtCMQDxpJAXZH8qiQhN",
  "key8": "4j7ZdYwtJpJ79giVMixQpY7NhxKjWCe7i6yQBHbEBdZNKATPLBGcJAGjMH5G3Kea73EbRaTRsBs8jQLAaeQhMEG7",
  "key9": "2aXZCmPaYPbq4JgkVHBLcMdtPBBNDAgsjJoqo6YZc614CL466BCSpXckbThNE2ezK291iYhhK8Ufzbhf4Kr3a8Nd",
  "key10": "3soZzdQZJUcWMUBTH6XDmpKXvhNa6FheekA26Zm7Ss88vq3GwzgWbUV31Lia3bqnF5iHWVugXYeKYuyX74qcdmLB",
  "key11": "3z82cT3AJkSYmaRfGGqsx5GW4jF9a35785LY1fArxRMEnuHf8QTxDFqC4bMjSb7AZGjTmiEPmazD36bVXGyfM7Kz",
  "key12": "4QVGsPRuVows2J44myk74faHPJt6MBuJtGP58gHXnQekmE1rJGujHqZUexS2Q8opsS72Md9uyU3PKjAFmtHtHJGw",
  "key13": "5whPUg28aitX9E3Lz3Uj2DiFpzBxnPniUbKAeP5gWSXokE3kiw378PtGe5jgj6AGXffRGBSGR2FoL21m8yk7FHB6",
  "key14": "55YAyCpyq9xSCYnBWnouSPHNZCCxSN6wFdTJgW3Z3oj6YNJDPLVisJhw8YPfxwrKRxa61FefVjfi2opqGcqk7f9H",
  "key15": "5cA4FkqNEHLNes1TPdS3MJ4Zzn8yFWZ744J9cgCu3h1Mu6CEGSz8qfa88k4pmsK4qZNHH8QEjJQUCLJVfX4Fen58",
  "key16": "2hm6czt5JSoaUry3BKgvP8RAZ8Papsy6atFqkEihp23XZ4h5M4KnM6bhmRNkmLXKmRYNiuMDPEoaJSj1ChYgKjU7",
  "key17": "GwLDdT58RBTp66wzYBv37QkuJ4KmrVkNoQxNuhJ52okmQVqw9rYF7nHrGrsNTpXhys9KBJWiAHed48deWAVZ4nq",
  "key18": "4zE2YPBRwjaJYMuNPLxWqSNfrV86xerNwjepTewemARmW982uJYoegwgDdKpSCvKg2NYD2AFX2t6C7j6WEuToWHE",
  "key19": "3TnVAfk6QbL5i2sKfGcbE5Y11zknVZYweCu4uvG6dHA6Scr58j7rkyg2Nye3ZwnsvM7QKKdFb2nPTAQu3BQpJDwr",
  "key20": "zxttFFgCDGPVAfNadaVYzZkp3cpfbLLSt9ybdPEHgcnRz68i9kfuJF3hof1AWD5yBWBQA8SHFPU2epPQQk4Ka8x",
  "key21": "2qRpbXLCRr3ijsDH9ahPFB2YTLvpExn6Szeu7BREgeWuuTREp3cqacpEMXSRnAncvLbG3tuxTDr6nUwmjxvdwdiq",
  "key22": "roV6CYZY4fHu6fDTuLVwJDe2qCY8ptixtrzVzXYD7uPC9fkfCmeWsU2RgLQJ5ghrkkyuVjjJqojsV93oxX334yb",
  "key23": "5dizLsV4WjESrEfS2gzSN2KFMUdA4JFRC1otrmkMxSFvFkv5LfUTv6ckZivCa38rZgpAQ9JJDnQWRcQCiBYrg6np",
  "key24": "4EhRXCUXW6BKPZrLajxZ1QdpcT2iB8rVz4Nq5H2jCfMC1gKxtjj9PCnAqUFZyCpuAuAnHBYwEwaoZxjepAbRGnEd",
  "key25": "2s89tfVfe3Vkd2ET5PKVezBoGmnCv82Z49uDcve6iFbnNhSrugjfTuPkdHdeiYHUQxvnLbebZWfCdjK2egFzaEPv",
  "key26": "5oRUFEWxnBKFiqqSVBZ4WAkPqnesC7fyoEMDLwueRWRf79nGhkxroCRUmnDkFGHc3HLBjEdxVeVrq1ib4bP83kuJ",
  "key27": "JHBhWbN4Fb12bCURWYZNZ2W7HVrdC3GbxRGQSmUkXaCARLSbTmX6hRvjCVvBV6aYgozJ7JC51fq7eUNjWkHvXcb",
  "key28": "4fq3G2QiUdH7ZF7fad1JXZuQPqwZDE2SAovSQQULiGUEsRuA4q9UsAoqobUmTzkmy27c6hmSpD6S5KfcnpurjYMQ",
  "key29": "2BoEjZY17X1P6JdnAjQHbb2zj5i14j2ErAv5eBS9w8LVsB8y1gVyark8vvuRskgnXviRTcPzyT7xeLdm2fR5NJsX",
  "key30": "5tQzaaukekxjYY9Adw6Y9orsRhXssnUDiWS7bPvvKWUV2ZBetZjQVSLxbC7rChoC7JpccUqVWzKbebpPMNeDZoTm",
  "key31": "NEB3eoH5TpRKjkircSgGVNaUQBXHtFN61btSk2Kxd9eGeCXSizQYBFpJ7B3g924j1W9xEDU224b1ttkNtjNtV8L",
  "key32": "2dKwpccG2u3fdzxmjPHbyDESAXzkeCo8TmDMGdop5Ck2nym62d6N23CYToyYLxY8jLwcwatuMVgYqCVURJtguTE",
  "key33": "3KM4VmqgK2HSW4UJZLZeFaWEeBtcDBeqEUcgzmwSCdi9MK49SJS7oNMAPFJi86LYrkiB2nAE718KWfMdkqPX9nQE",
  "key34": "5etckEH5SP4Kqob8iMFANssyFVonZcynPMfLjnGyYt7wQRsWnS4J2Qdygd3ZTxzkm61Z1165MuMgVZzuS2X3XUCT",
  "key35": "5EtoRxGL7CnMeZTS9NinKwNXdVgKyiFxe1tKzLHD5WotFHmGpezht3J2NWmcJNPETy1abmTgrMY9A3x4VYwri4Kj",
  "key36": "3vMX6GHEJ6ysobeVisCyRH24aP1N25etrNdLEzsik546v9gYz4NqtcunyzsjWzxxBJkSxWRQ7VdhGS6ZdpYgvUKo",
  "key37": "qdFW5uiJSvurNg1yv8S9TjhJ26tnum2cGjK4FZ3hdgrwAvBYeCqWqn6guXDCRSmzho9cTPMqSGYxcNw6Y2Xf8ht",
  "key38": "21weEGAjw8X54rHP62Fjk6MMTisXDZXgz3ZrxM7TK2VcsRXJZ23q9oQQM8kpoSTfZcfnVhgZWZyo3mFXubFwFJiK",
  "key39": "kejLN2wsGXpVHqMytnDUw9b5fWDMKt2bySEb52yCcaSfJrgbXcZwrFx4cuTYsGdndJJwYeYeUoBKDHswkGbLQMp",
  "key40": "4gVpu6NAK5FSu6QNTfumJUCg2mmm2vPxqQgUXEjFmzLRxdXNEGZwYxwyfce2PtgT5MEzLxi9pwEZbDCq4R4oFKb3",
  "key41": "5Lb2re41TyyhEQvSiAMdaoWUS8eeCa6dxqt6FD9Cozm1WpSYhQGEpkK2frrko5SucNhDsUdiGRVDToDRoAtpbX4Q",
  "key42": "2zPVWL9tLbpUQ5qxMKQ4nJ7xYUzEqtSZW9yhWuV5c8KnpA98bREtipor68Lt4yBijhbKTKmBViVhVoxNjrhVXRze",
  "key43": "3pWXJUndKhCddfw2ZzU37k6LcxKZ6E4XF5L9dqiHcHU3T2W9uzsUvqhBsxRxLDDMQ4EKbvNLnqqz1n3XGz5mePCt",
  "key44": "2xqCS3a7KTyJunguTNAZyo5arHR3FwzE5dvxndjSWyx93jRVpkuEoXk685y33n2b2U76ugKe32NxU8gv29D2YMYA",
  "key45": "2iYjH4Tz3E3wmJQUiPjV82qoc1noYQUwxQEnqQzqagYWNVUeTP3tGMiFPJRdJAVbYR4m5SFhPXrxcaYW3htS5gMv"
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
