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
    "wEknKznSmvY4Ni1iNLgMZQo9fQFKNUiwXFMRX7P4jcM6G6MULQr9yorSWpVpNGqi4fETteMJ5qq3xtXizgi9ABA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQRn2j2d8EYUJL1cvn6u7BMjSMwAzBehBzftNfKf9EffVviDMaiR3932eSoW5ejtgTj5fvcMqcQvAkoFiZCuPSq",
  "key1": "24wcWp9BzqMjA4p452axu6RDAYjZZTRkdNwEU6srddrvEYPFXAHtNYDdDi4Xck3XreHJfSfTkuth5fZ7aek8ZQW1",
  "key2": "5p3jsnrgUNedYN8g7ajEUmWD6NdfwPM7poouD48rtHm2DGhUgFso4eU79KHnMQKmmTxedwVSaehDasywDMDsjY3s",
  "key3": "381c1WybkcVw6J8gL81MHUrbT3SDUFy9M7RHrv49zDhvuzMJ5887yD3mFJvV63VfHEiuU8i76U7XvAs6NXEQNh4Y",
  "key4": "4X1ojDtAG4w3FpVnFtf2ei22gGgoQKujQZHcg436BXvqwNx12dQ8k4KTNWYgTtr76zHCYkkLpLXG1y3ujefJMX9x",
  "key5": "Nmef8SfYPWXJijAkq5KD245CMAFPQMFV1syABWBqpzYeXXKfWy5M6doRNYwPNooS98Ucbe4HBWvJ1xGQkD9iJfX",
  "key6": "3RLFXojVbszCY3AFYuYhTT2FMts7DVcdvVauoA2L2G1opTTXNsUwc3nHjuU51Qt3vDNuDhKs6EipHoHmX7AfgGiW",
  "key7": "3cQJcFHR5j8mmWjDBVuwrAEQJ9a8jqPUrs9noFGytj7HP8rwa5hzFQchrTEazdcbAiYpYXLRaENj7P5gWcUqGNEz",
  "key8": "4j6u47QKj46gmx7r5yVKoaYjTcUXHbBntUCn3DBrC3dThNK8gEc7CmLQL8EXVrndUEdNUeCo43AgvMHfBpFswSLz",
  "key9": "414R5ZJue539j8SCXV9cvqxHCb7RFsg4nhqLKpmdPknGHYihiJyuwoVBG6wWNRLi3PNbq7tgYHiAoP7xhkmaw7Bh",
  "key10": "5UX32b69oxNtKjYdEtcrvewazEsN9eLCMAVr5FuAX9et8vzmZLRd4uPMKBqGfdUcrQZpjRAUMmLxWSrm6HfHnQ6x",
  "key11": "5WgLE2pi3D14r39QRhaLzXRpMzeYDZiTbM8Q5stnvxDa7eNgr12TVa9aKrSuku4Uxzuu6cN2NkB2CwwB7wYhctZa",
  "key12": "4JNUzFWMKtyHYGGZosNBkqLvWSgFv1Ut3cDNySVnCLjmZoQhYNXbVf2CJK4t3JxQ4HgVYoALW5mVhBHDGPfZtV7S",
  "key13": "26HwLt3YdfpbarQTQAtQ1rxCxtTcH5kLmJgxqy6K9VBZ7edKruyit4znsrsD4orjFrWL98XxEPhvq2jSp4t5ZDQf",
  "key14": "KsHp2EMtsYbGqVaZH5MTYLuNATU3xxutdebkYDjGvyzzDqeoocZDsW714t4V4pXw1zKqhBAAsof4xM1qvKrENoX",
  "key15": "5VpiBBk9xZi9tQn49Y4kFwasd5hxxWQC8Gmbb7f64ZQGrepT2A269gpkPQ9reW1J9CVFccNWhGhxE124CYhcCph7",
  "key16": "3P4FnduvmBDJ32dhD9VmzJ8x3achAkNa2iMMUGLNnVHGDfHgRVMSodK71HZNqEB9urEWbmfrmAsyt4ZKFvS5vfwH",
  "key17": "gawxReDfSubQMsSJSBZq2RcnrMBRtsF6a2z4VpbtPQxBwpbibbmRTLVcnkN9bL6c4hyS9J3r4UR675AF6ck8K3f",
  "key18": "pamavjwhvHijNCRm53KZdgnF1vWHrpcyfuDFaMc8dBgNfxo7jYQNNGrv3Dw3ik8qrci8JGkCpzN9giM3THeDW8t",
  "key19": "31AfRXLfMMVDs2faP5PNG4Cmw38kebkierSszmHyzQJi4Q27HuYgjDv9j5vGpN81FaQkzfQxq9qLShZRYJwJy8Lu",
  "key20": "5BbqrDXChUjD5sBJ4PPSwyMTiQQv3K4brcSrkzBKEfX7d2u2AkhFiVxebkXsH5riGexgmACQiEnaUkFDESSyFg5R",
  "key21": "5obiwnL5XdvkTPq9SYvw1gYeBBNsanRsh1s68NLxJtQcn6ciuhRnr9JptFVHZgQ7ngftzebG4viJzqt6b82JnjiN",
  "key22": "4dqEaP2XpQp9k8CKCMurWMLpi2SzWYbn6vVSmCjUGCby5VHUMLT7re4J2EHtPVavn3w3BWSprbFJG3YS1zqtn3oq",
  "key23": "EMQ8CAUHQ7LmVXuEC8V21mfxFyHn5otc8cFVrfBgGa4xoKMppSS4BixRGxMkWJKEKRo7skyQ28MH5Gf5aBwk2Ua",
  "key24": "y5ioJ6XFYtdV89HX5X5TdN2iwGUk4irYhCJTQbNATm8eWjetE1ZDZLpGt7zZvCAkjDMDihUzhXnf4YmVifxhWKh",
  "key25": "LeQXhV7oUATuYvvZ53pj38i7RtjdVrspuhiBhnSYWNSA5hP7c8LhxzWhTMtx5DCiU2HtvmWA5cKG1wQwvvixVnj",
  "key26": "4w4MvERRHVYGgv8CyLTyLn851Q7RS7htcaq3a3WpdD45L7xcjLahBHVpySBd9Rm3wwSueWrnHGZQD8KNQAeugRVb",
  "key27": "5Q39fuM2X4xcUGSNRmGNnvjMsJViDS8gAJScbZkvvTPuKoPh18N7fbKWkzaSL3Y4cg7fNzCvd42uF7eEzWTf8rZR",
  "key28": "59K4Nw7gWo9TnGXmRX3uKgv3aLpjTvL1cunWNveaEmKtDpq7S4JWXnfECh22Xu87u1QBGWwQHQ4qDJDWBtKKcxUi",
  "key29": "356cJC89FJAYkeHuCMi8Ma1naDiHviKDuQTT1pUXxFgPTQi5oRujgwELwc7dYd3ZTF9KDw4ZibGQa1BPvFFej918",
  "key30": "2eJRqeFySjCuLcsmNSQHH5hUGMkyWS5iB7X6qFgzEr4c6HvRZk15SZRBqbQEBMJtASpGJu5ddHUXAAAFSFRpZXqG",
  "key31": "64nY72gsbHYqHD1z8ofDxtrxWUADwiAhvsvkXPbYqz4evAaCnJFFhjU5DeW2yEEMVmBTPZf3t1TdffGMfWRkdLXi",
  "key32": "2qFocXkDJk8ZKckjedjKepVhaxDbKv8H4ro8jsPBh6AcZizCUg7cYBvcox98odnczB1hMYfiE1upL2K2QfmwgYXX",
  "key33": "5symCGrtsfejn7rKi3ma4uRVdySAZPAmFKJfRY8BHZonmZuGLXMQVcNbjsZAz7gGcZE6ofd4sRuYYVxFu6p3Zypf",
  "key34": "3ir9KtFWxTEcr4QYCD3gymkVNCZWnkg92cGGi7P11a7ST4EhKVSBLZmUdZKSyopHMTSzL1Vs1U8HGFT7uZcVNx34",
  "key35": "3LCv3xRDuCGYw1Qk664cXkBppPSZnP15juqbRkUmHmfuMt3JkG47D2r9mj1HWVxVif5qa2g2wKCuFetZgZwWSLLW",
  "key36": "22V3r3ioKpckuy4fDSX42TybE3vmR7h6QEoqpPDEZi3PS1sUwgPRSZ3BxBWzzhGMdLqshg92hVDwKd9T9xZ3bFM5",
  "key37": "PRE2fTC4iFUjRTsBZNR5MPuLyyXmn754w1bKU5fZ1Zg9EfG8RWSxPQbVV3p4ffVK48vEsrJZjmXTEqsDNkSxed5",
  "key38": "2gsxotzEgUoDz9wzShQ8oGPVMx9KVcFY1TmQsgptojgrCLH2LJLUkcwu7YsgDSjmg83Tcpds9D1PZTZUcoGq7Jnb",
  "key39": "2onCRehaFH1WkmsocCDhLy8xGUqySCLqoyKDTAVxTSALFJMARN3ih4CPcWTCWL8CdeyviAwYpn3ZQaGFyowdA7TW"
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
