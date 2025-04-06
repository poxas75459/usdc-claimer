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
    "4kebQxcZBPS843kGkuA2iKoyZ4iamxGwPXZd6s5HNZjEeRtLJtNi6NhagQdRLymmHKgimofF54aZQerRFrLgcWS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ax22f2dUHivfUvosg1VN4zQ6ZRe86J2WL4ngrzaMA6zDpA9SeK6t5QJppnSa7wgnVKSv5bgiAeWbztqVM2v5inc",
  "key1": "MRKNNG9qcnyzgwt2sGuby5XitktjqJ5VKwfeuBVTqufAFtgh3anWCFLi4U4rEwNGybsspiQcWTvBUUGdsaKZipC",
  "key2": "25kh68xq1bkxxdPx9S4BEaFdBqBWQgEnefPFAipbk5KLtX1M68Nqf5mFaEMsLQvQQdVmguyAi9TDWftncygWeaP5",
  "key3": "4nSzqx6TiytSXbVQdamnUU783Prn8WSDgkCYCKG3cgdgYuaDuxkogJJEEWZHDp4sUevVBrdojQojuvd3xD3BR85x",
  "key4": "5A7rbKo5oza9YrTGaXpVEGGR5Psw33c85hq89D5H7GCcnP9HSMA598BtGoB1RxsJewSdv7udVYXiT8pF9ENmPooB",
  "key5": "fYCaDGNqF5sqQEwFCXeYnBkCAeppMPTNLjdAB4pVQpjCD9SctFgKXUPuiWUyFWharf48jBk8XZa73L1X7MCX2md",
  "key6": "5m4pwE9KtoRYTCCUrPLPvPgvAJdRmkYgRzW5DXaSrpc85enu3hEwUukneV4RCfexu6bs4fpr9LjZkKWqGpQy3Lva",
  "key7": "fRnLpPYCw6CiroUsxn7Hb8Kh3iEVCq2YVijEyrbQUimuui9jJDNCG7ohra2XsFGxgm6ySUnd4vhmjq5DYQsGvL4",
  "key8": "3Ry5vVqzVy5JzkTTMKfoc68DJZHTMMcuYK9v1PkqZVp9V9hnPDKaE3jhyphnVvcvGe5mZSnDn24KuaeKVpxPpPV",
  "key9": "4iWhQjZ4tKGK74r1Tj2uFXJ44t86kaSTFwuCZ4u5N29moRZni7WBK5GhopGCYEoL95GZ2aqkBixQgju8LPEuVsAV",
  "key10": "5Uc8biz6w2WBfWc7F3aTDAWjW428BpQEjG3DxAiLiykZnVYMEcM4zwwv7nhTHBPTMmC6R4kb8xxbAqdicVBuyV3J",
  "key11": "3AiP64JMFNyAvaVhtbsMNues4aNGLdcPFrhHkK7ithiTCjMonnyb7vMYuoD49Tw5CpQEiCeZE8niwzjfZb8gNfMP",
  "key12": "bUdxeVZbBR7YkdUvwP8R1jD1gB34LDijPDAztjBXKiM7FHcayLT5fKYieFjKhiEPjdtLfwyHivDnxdQQuE11d2U",
  "key13": "2zmY5BJXkAHm3yAgTUNrFRHAv3Swj6YxPSD9BpSpZCnwCWdVx4mLphKotoLtVmQzwbVYmHAzuiDx1Bkw6ccoy9cd",
  "key14": "5F8Kqq2ziahEqLr3dQj3RM6LJQ3qwK44sNKnfYywZfxNPbfSFSRCrmLyKke1RRo3doeY5qh3ECscvgGBoyM4Tt9W",
  "key15": "3j7XHC1hZjbZVZrATBfN4PFb1dDC1eyDkZGqkcbZ3Hvb4pXdaq1yiKbrb1FpbqXPFHc6xESxLer8rQGQ9VSbWjNR",
  "key16": "3cmbh3krvzysGPK9ZKbd9R9xL5k5nWrzSFUvyp58AMUwSCVTig5Wwj4XN9ZSdJqfm7HYTFqefU7pDPpv3KkNgYQ5",
  "key17": "vErwP1BuKSTbs5JBtirFPjjCvpk6xoR3Wo7PAWs7SWXMVm27gkoBg4PN7Kb6PUrQX7EGceLsuZrXnYGRPxkAdgP",
  "key18": "2NDmccY1SVSXyL73ZsUmxkS2eVhMV1CspYGSyQAbaZSM7WbDxZ4TndLUivzra1YUMuwZE1KMExGrGGuiZHyBaYMg",
  "key19": "dVyg1cxfLbsjUC2tRFt8BPuQ1ccvSDGpWVWzz3dDZwmt5vmnJw5AZxVYg9PHUY5iyVkFcq64MTKnDwAQxaEL4qG",
  "key20": "3qzye4Q6MFfr7N8dnoHwrswauzBCU57Cyhmprzs43vkAXDyZcgTAsinUpisdmMVU2dH955woGdRNisA4gJXPqDAE",
  "key21": "5pY7wFVaDxdKHH4dkMe9RvZCmeEoWd7F2ZaiCPSbsAesfELd89ddcKooBYNJqBCEoZU8gqeZqerJamkU8R5osPJj",
  "key22": "4F2CAa682B99K9YvhzcfsbQLGprh3ezPw7eSkxwvtj9sD1tPjQ4X7XcYbzLPdC8ag7zkU2XBWpGFMxmBF861berQ",
  "key23": "BfAicBKu4ukzkq3TB8sf4UbREzWV2p4nDRNDZARixPy17av6VTENdGmNQGEjW5vvEGRsapeStGQP3PL3FdnHCBC",
  "key24": "3t7W1UgM9rHky2yjJpdq8ncvXdjsf2W2ZjkEJvtF643ReeMAfKiqK7yP2CsyYfcHufEaqAuVMSL2TPMgPSDqGvzW",
  "key25": "5o2c6Ae9rELeMRmTnW9eH1iVAqsQE4kx6tnNJGLBeWuCqfcVk32JAMyrDgBLaKCmmhHBSzJCUU4nJSWwSuU4GCv",
  "key26": "ufMChujyNpB2DQH74jy4Y8dPr3XZDsSawEEQBy3HhPrnzD34ipaeztaGk4Cq2gN6V2ce6ceQ3bx4XqGJUfGnc1s",
  "key27": "2kibaJdiADKJWxDWXC8ScUyaeQH9af3tHje4RarvhgzjTFjPQjjbbP8k6CmiYaj4LFDhKkqEQPGfj9f1CuvgJaBJ",
  "key28": "5V6L9woiM29VJ4YwKt6SQWX9P6rY2xeJdpJqsKATXcXcwoprkN9Yu5WpFjZ1Pp88Gp5QhD3cF1Evpp8yLP6X6PyV",
  "key29": "55yYddoEzUD1MCcLxvNHRPcXcgiyvDsmALN4txbfgjhfmEgGFm9PoReJxjmwvAPC6hXH1yrRgJty5QNi9NxiZFsk",
  "key30": "2qrRfHKbTgUyr4o87HXBntnY7WF8oPLaiu7vAf4eGrDVcjD45H9PXGHji6h6Gxqht9aj1CRnq3hK8icjjLycjkVX",
  "key31": "3SUnYAvwALYHS3sa57AvoxtgSQ8UY3wwUebHquAZwRVKDGbAMjab4S4aHAKr8WpuirHBjLVEdCzWJMQH3hSxT1Z5",
  "key32": "5aGxm7aEuv5bncgFoL3jZtPP9mjcpUyu3bcLdCcpMu5G7YUwLvLwKj8mxMvgAWJLj4ihaPM2wofP3QzAJ92bs6ei",
  "key33": "3MaGJg9tadmo2ABHfrxfPbLVALxhQXYxMZD8GjkxEsXevHiDRfcYPoTHHKtbpCx7JoW66aKq6cR68iWs5JUbMyrd",
  "key34": "4qdxoA1G9242kn6hzm43w7oRMquGuU1ucpQ45reqVHJhdqeGMEc8iU9qhX7iDBtNM6SBgpkRkPLhar5Vtfb9oEpA",
  "key35": "244ijEgZgNDhxW4p3MCtwYRqqACNeWtvFX5sss58JCT2Jd1k8n31rE66wfNvv2SnD1Ucm1nFvREFUZveAxPegatG",
  "key36": "2V99EuPmta88TmfJ3JRk9LYgQyi4KCZodtesTMEiaK9tgBLz3yru1N5kTnTfQ6nfMbW2UA5JhcycKjpzYM6tbBLG",
  "key37": "2EsH7Pn1erURUyqMcCSspRqnaiVyS45vpSy35oTZCsj1mKE383kGdaYydcAZMHYVaYQ4Rpc6rY5GSweZ3CM3giaw",
  "key38": "JFDSZMpfh5MbPJNzWWWbVVAmVtMko1tQGBefm2YiYKStTzhebWY73dEKuUTi6SHfu3gMPGpVQZdEm46oy25CKcL",
  "key39": "g2RaHky5JMZRxv1XNWwkNjnYzVfdMp7S9BbVpvdB1f9pPFFuTB5g3cX7gNuGxVQcPPp8YZPwcntUFkHoi1Um5GS",
  "key40": "5KsHB9J7SEib5aJP7inFN66au1YgcApi2PV73HF8zW7r8dJDFNJRXU6ntj1HDr45mYnSBJLqQokEjwMgNtaTsNKM",
  "key41": "2KqohWemy4EjoYLfUCb373Cas5JXkTHmiLGmF1GzvW3pzmkbd5ggMufSPj1XL2c5ZWgyhLU2UJZmLuSm6zcHCbjo",
  "key42": "3eNKuEvK9eCGkJs7x714MJXCkyjnXTPerbFKCJ78mgy8yLqjzf9F6SQr5CAtJs4v5hspnp8uG9xQmsfiEEasYPCq",
  "key43": "5iTVdm2kCyGfu2bUmevyiZ4FrVGEhebRAQ9n7Ns9ugepVBuM9VNhyuHtq2Yfkf7YenAPpcpbxLXa2Cf5FfWLeWtw"
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
