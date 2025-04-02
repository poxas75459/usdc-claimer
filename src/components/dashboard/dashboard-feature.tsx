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
    "2JU38RktvNYzBMopEELgb3a4VPkAZQdqoNHppsrU5CX1GG1k6XkLSB6hfASqf26rEhANPjHPKCvecKwJTEQTy1kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVTiZUzDGiFUKpyRK2rpRR1xN57nMZfeBC7Mcue8NVKw3hVEyNpJ4SpaUuqZzF3LkMkENKJ9JVYHf6KcdthDRL5",
  "key1": "2KbGAqi16rRyAZPQefJu8UeDC9iaDkkPqctW514zban67BQyFTqppqcqjivoXFDX2GpCexsjvskyT5BjskeEfLaj",
  "key2": "5Zvje8M1PcocoQpyLbJyFA3E6hV8qdRZoGYb4UJJAfkFLBhum3J4VwPKTHQNLmjWDiZ9qA2ERmgK4LL4njtT7jpa",
  "key3": "3g1Hizs9QaKYqSwtUBz4ZjfptcUvrEeJpcR1HjHii57hNdVmwHQAwfxoP3v6R83H2s5dJVrgUhC4k1ax5t3GGymp",
  "key4": "zJ1bGcR737Doq35ubJ7GGebXMxD31iCkxSMAM4tBLLE12Zvy9XN37fefznSFR85bVo3PmSaA83ne1aguziPkMTB",
  "key5": "55uXpnfD7R1yYoYdAiepbc8TrXVsP31fEyAEEjAeFb1MCuLf8zMAoYuEZpz6etBHXB8n7hPtU3vZf8V9BtPuopbX",
  "key6": "5FX2WmqsGAqcbCYJ1EkVGrGmF2svfWRPpqzDN4woLVu14xUgYLnzFuFqRHzyfVDRJqzUvhUdYDd1gFJYqafRThiX",
  "key7": "dhDpMidBEojsKyDAyxiDKyToKng4NxH87xhbZHmei63PvT3GLoxsaP88rujJQ1yDy6HLu71NQsteiSffX2pFRC8",
  "key8": "4Bf7WBZGctjowYimqchF3K6Bohh5Z1p9KhH5CUYDtCSJ2vhxKPB5cDuBhV1ynRn61d2ZMFRBk8C6MKhPodS3gFz1",
  "key9": "5SQK7wTyzHdtXToxPMQ6w7vyopVH9jXB2rZ2TZ17pLgZqHm6i69xBNsFh5NdayRKjA6ghYAKnuDT1yEyWHhtxsLw",
  "key10": "3xPZqiuLCWG3SZ1qv5vFwaY14Wq6SJ3RVbpQjnqdsroac1BSvmqsohNK7XicAvoz3ieD2qeCtfooxmmsxzi8bpfr",
  "key11": "25MRJjAmyw9EjYkZUDncgGcgw5TBNBFPiNjpGKmGPcb7mCus1TBkm3pjrhv9VPgYQbvXh2wkGjpwkcbZQTbRUJL6",
  "key12": "277kjieFrKnT2b6kypPzpMhKEqmQJDMXRQvZsyU8JKMihprgpkAppc21RVeQkfz7SwmkbDJfaXU9RGofFaWuCEGc",
  "key13": "4C3TmoM6PxoP6zbedtxAQD2AbMdutoaFBDiVFkrujLWkkgTyRZmMPyTeuDkzND58JxBaPYMXkJgbK1U8WYLpsmh6",
  "key14": "3tUsU8PDa58XTUh53gZiswYpZ99nuoTtpb5VWHH9pvE9QJXevEmTYe5URr2L5DahqNyJaWj7grKqmcq5Ye8hRpbG",
  "key15": "37XBZtySzyUu3QohirSuBAU5WFBfwigEtERTSHcAEDRm5tEDG5ZW3h6VAgs6otNBjhZ9A8hr248G4qnVzJSanPkU",
  "key16": "5R7uhf3vtXwGPsoqNkVXhoR4LxL7wzEWU64yfK8pQhriGbZ4Gsa5iX6UfSwtFUwzZZAUszhTp9HXA56NWDbYgBbt",
  "key17": "zJmF9vS5iQR6yVK6wEG7zjfUqAiarZ4cVpzHx5wWKwgefw2A3eouY6hLTp7gA1up4T2NudmeeDFeBkAEqeKGCon",
  "key18": "4Sx6u17icd2jpZru5jcxL66Knr74h3AiKSB4TQ9fN5tnWe7xq6Ni6BBeuG871NC6pUM1gas7sK6hwPCnwqmvDr4m",
  "key19": "51d6MEGk634AqpdEE2hnmgtZ6tZoQjBMyR2StfzAJ4vP2wKsd4yPMdtoaA8f42gNKcwS5addcci6QPZcLMVMduDT",
  "key20": "5f1QnZD49A6AFLtCPWojjspun4MnGP8a9AFAtQWrFwgc6oYnAwQpS6uWPAosKY2CuShoqYYyGUNBknp1zJC4tQho",
  "key21": "y9RGhDQErJqpt9hR9gYaP9zy4DrLtDBNoSNuZcHqXVoSmbGMSPodahHV8m5UMRMKt2kDwNVamwYK7UjniLRJSxF",
  "key22": "2zt4skKkVpwG3f2h2wLmG7q3EaP8xR2dzxS4JEwFHjMTfyS4StLVBneSoeBaHGVgLJPGU1jGny6kydUvZyfvwGxw",
  "key23": "2Jdib2JLrN2Tbib5CFAw2B6846JsYhJf8GNojLpucei9GFMDakuWEtWWQxyvpkrFV7pLeVfyJPdM4m6iabBKSgNm",
  "key24": "yEoKFVZeq8jL8LLEXnJybRbTnV5iN1UWqgqNqcBCfRfs6nqSkvQGWszwsjEjNrzrRv3YvjkALnGRqbthwsGRAwB",
  "key25": "5SopfwDi7s3GUTxJvqhsuhzDEG1ih7nzETEG4qUEWk9czNX4AhiNSiVcmq37C3jUVSsyy4XZzHeZaaiUKqt46hy3",
  "key26": "3J3unQjBh7mUkZkJDTjGsmFoUFXTy4CzjYG8FcvgXaeaZJhwPhzy3JzXAX2qcNDZS8jph4VJQcdgrmWUHyXXLLM",
  "key27": "3Mw2hss1sWdYzLByBkZYhiPNdscrfL1TjCX3kN591Eb29MgETTd3N2h4v6G7qejfFRfWDdqACAK1BopQHaJnbXds",
  "key28": "hPDvbH1GMXtrK1kfELBhFd1vGMjTmoAP2AQReXZDMt9c8YFy88zHLJZGaJfYPmggxjtFwwXjXAmWFiwQStAeEnF",
  "key29": "ZpG6ZJ7SMFxZ9R7XQ4riFDFSCTUxn4ftCQEPWDr5hjE93GPin5bga91z9h3RZXbGJNpdfcRA173UN7KvMPUE5eW",
  "key30": "3VJmPeya3rkJrB7daiueYR8heW9QRWw287vqwgegfra5FLbEUp254uf2EaAVfTqr2GryAKwcBr6hDD9nzvN6pMWs",
  "key31": "cTRPFjfPbiq4wWLbb9v3h7XcCUFTHaPfqorbqrekdF6oZhJg7Ry7fyLJAi69xsBoWmSv6TdHdtQRfsBErWDhmAs",
  "key32": "3DiiXPmNhF2BRD1tAxdC1gBZv8cJ4CcctZordnHri3vDmHgV7tkbcPRzegoEPrshBhuR2GijL6avxPfr7tLQoUpG",
  "key33": "3akM3EoqaKnr1i7HavNT2Dgd7gAo76zfSJiuoUbUBXqCeZhW6xs91otdsji9z1DwNYVKGwxP3d5tHRxZtgYjLB9N",
  "key34": "5H5bmKqJEpWUevnWFRqUK8t8Y2DcmqQ6fZrvye2aPDzDiqgpHaphpsRn1y7ts5xy6VBwNVspnU39kPEeZBEeH8ed",
  "key35": "5AmHkmriqeqXUJikfqq7WQN6tzhvbymZiRbmpWbxVBZhoYYDQREdaBh8qUJuTbU3TYmEDCW1MTdcYUHEEyzva3ZN",
  "key36": "5RnBBqSXKJi6e2ELTmM3DZ419Br7ziSfENC8DhpgJFegVZZsaJ6Rptch8WmjxvtErp4T63qZ1jNaWSuafj2AYeeN",
  "key37": "25ncxJynP8kfpGG29Nb2JVEDmPEvDeeEFArKC3ywBMoAHhTHdFRiQE93gMUVYiVtwWwt1UE2HmrYQYWFPu3jcphD",
  "key38": "3B7DweTXr8qDKmNhzAU56wLXoBYEqRe1DU8eg6NhAnTp8MBaE4nQKCAAqc585gRSRogYizVnkVE7gB2xkKJZqrYH",
  "key39": "LuKHs8Jc2cTQ8NkeK27mwsWJdsACNtQe5mARLJYWckS1HqksMrd39CBqjc5aFF4hKJtCYzMXpn3yjtBpNhkoN9s",
  "key40": "4Q8PJnaLQ2jzqLYkRJXgF4uPm2XbZvT2ySPFGds6cUue8WeKCzfg6WtVAgAt9EoXC9Y2USgX3YYoHDF5s4XpGnKF",
  "key41": "4P1sorgv7bb8q2PSL8pnASMSm1Yeuu1ZazrHEGTWW11yrf9GzTT85SZSfeJACK1sNEQ9JPmrY5EFuVg2b1WA1wq9",
  "key42": "22vQKWe1Pd7GMXBQRR2jUUuPm2Zq7gUH7uBSjv455fqa7ZWsjUQTevEhzkjjucGNFBQvedZRWzrmbsUYq6qDE6Bc",
  "key43": "2nn8Nvayi5QNwSQUyoia9CBXGabQWB7Cz4EFqJSjoKR5PBedUNUzVQ3DUSnYM2ix3iB1tdahz5zSCWcEy3p27UBo",
  "key44": "3KYmcwHtLq4RGKa55nWpGtrHr4kzfkkwF56DyByjyXq7t8aFPnTPfgVuJPBPcAtBtnGvqkxBvFLkSdXRLdjUs4z9",
  "key45": "4YepARWTLqgGzYSmcvBzfuhZP2Bb7kwcD4hTHcRgEkJ65KLKCpx4MY5pCu7KjG3stZx1MsU8iwWjXsfVsdmxUJP1",
  "key46": "1Z8YfdMRu9sMZ9dF28Vob5NyyzRNez4RFdPDnUXciiYZ2EsJZ6U6zStTvBPPd6QWV3489ggxDdLogurpy8i4aco",
  "key47": "3o6Zz6F5Hnke8iqZyzK8Toixzv3ackERfjUXNQ9DrpWdvh2WfWVRRDVQt5Ehq4jH8VCo6VMudmMmD9QUaQ1bnWFL",
  "key48": "4TuPPrj8DjQZXuooAD2RJ5tAnafRAfXbes9tJyuv8nMZZoTPbcABi5oQz4hgqDTNwPdz92pTcjA8VkzpxcD51es4"
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
