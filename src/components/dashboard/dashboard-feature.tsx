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
    "5fTFg21nz3bFPEt4dJAGeYBC17KMcGWBD2XbWrNhMbvbBLMN9xTGonv5cTTWHUQ6EjtK8Si4A2YXcVP2BC24L6hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7FqgQo2ARaPYKxdoC9Zezoq5hSPhW9wjEzCfgFXabPHoPmpQ8MaZ32kx8ihpZsDqo8K3UoppgB5Tz5jrhSr6D6",
  "key1": "4QYAWYzHn7DfyYJvEGe1uwSXeF11uNtSAZudgrNFKBNNo16sG43vXnjFsXDe76JvQ3g1ioCLVbxDSzAgeTwdyfa",
  "key2": "Q2V7P4ZEo9ErXvZyguwbsvnEBT5mrFRRd8WhPr2PeZWLr6sAoyYms73ieCqiuQvhD1pSVhgEKVUy3gbkJXz6seX",
  "key3": "4m9917c1pfSNWJs1cqjTw1XqGvaBDceKDdiqWGSrtkbAisguzcmDRGLERg5bxj4AbyB4cL4P8dsXz1HFYcNp9Vt3",
  "key4": "3vpWeicHgH1HZXksfvFSREsTUVuhqSFpEAnMB7LHT3CcmLHVGUi1SUVtiJxd6CS1w9AJ33RffYuC32ntdF29SbeK",
  "key5": "2wMQGfzT9Dct9tikmJMMYpr8X1s8U1jDTGgu6XFmoN9mc23zuDScsqrrkAXtdneE4MbCLc5pBjuNshdiuBa7N9ZG",
  "key6": "29t1PyyooXeVbSZKgiiBjKDWvEDPNmBcoQu3cvfRdLvxUDgdpSKyZrQEynNrHmF6uPUFpJmRtQmkhGM2GRjXL9bS",
  "key7": "55Tgmh3ucppY6n4kdbZMherguGAk8HgEq7WictU2oXmTTnkvcCQ5T24kRFpzM3ddPxL1Hv1ePqzgUSZhM5C4voVE",
  "key8": "2aMGTCbsWwkPBCB1o2k4FfoCV4MmkehsLyQhNfbyVHVQs9hADSiask7ypjqFHHSnxDmvyvzpvhMZ1yyxPezovpM9",
  "key9": "3ftvKXrRpERkFstYyLMdV4oDCb9WAvEcw7nqQNeWxp5cVQiroZNZdyZECufKkD4R1nDf7YMqr4JomXnXQxQpAGFn",
  "key10": "2abAutnyJQhwXwmZZ7btdZ3TFfh5jM1Vsax6T8xntBKbnm9AqBv5KRrvRdvFd63LvMgCnotL7bcbGnJRoUxMB3B8",
  "key11": "4CoYdibVUNzbp1yKADV9dKPBKT6SKhmMeot4nTg2jt3yh9nmwcPYvs4zJ7oP2ejyi9CjYfcaxqgbxrfZY3T9Q9U6",
  "key12": "5yJ48pUyrTxuDYgRH6G2FVMxDZTLnspNQXj1wUB7hv7fhoEJSNj7CLEWX9NBNxXpG1ja5tQWUWxPF6z6r4RUj6CE",
  "key13": "4kiu4q6U4fXEmWu5EjGvXzkheGPX85EMLCGGm9VxBYWoGoWeu1NFyd8BYY7YyG2jsGQdXfSjDR17EiiucdMaaMxZ",
  "key14": "5VEAGQRXJpZLo1sXwc9yK83m1Qi79zk71psCg5BUXzS185weMSJnzL4TxW2d4c3Ry9UtAMFzvu5pRZLvtosuSwem",
  "key15": "4MwUa5BPxNGJGFT7oCU3oZcmzZgbALaUrWU7FXZscK5nLnLUjaX6n53rRaWfex3Yi69bm9GbBenSMZaVd7GanSe",
  "key16": "4gyANJTjbcQ3UFHTCukAPjVq499FbJHUZpgs3Wv1vua45Q8ahdvSyVastwb2zAfgvtag9YtXEnmqKV9F4btUnQ6K",
  "key17": "5SQBNmrZHY51Fg15491iiLCkWH5pZqC3A2bMxDQsHcbgJ6iLPNsCkN6XrxFrQ7V91Bfpia7v9PPhFjBVd3XAB1sf",
  "key18": "2ggzQFRF3HjYHxSkekg92f8Se6NZaGEF6TJPyAReW16ckDqghWPRwRMQNibqBatXif7J4immiy7u9KMqVNp1cMBD",
  "key19": "rpABc3w3ESwBnuQ5QQqRmTLFHbhpbiFk45QexR1D3GYwtnBFiujHtgmfMdyeHLRLyb3TxfVVNfgfiTMrWcz3rLG",
  "key20": "461b9oXp8jkvaUdQjuPZWkL557j9Suqan89eJTjp5FetbkgFBcq5aeC4oRmZdgWrsNviXrbyecYYkA43PpQJdNgD",
  "key21": "3TNi4bixnwVBZabtUHyxCM4qmfoaQ5ZRTU7AySLATmr4p7eVRTZ6H5SMMHZQKB5vY9KBJNDoPNzhj19zRj9cGpNj",
  "key22": "4oRcezp2RFoeVXnEJ5iasMSiVTR7v2WfH1VJofbNEiSqxnfHik3P1YLAcWZBMPaMyXLMSzW413ngs9wSuUFwvphZ",
  "key23": "4t9RoRwnjRBJ7Pkb58x7mtxhScVmNPX71UV3fvvcZRrtXahAirbA9ACwN3paun6PqTRxyx8yf3fuwPEW1YLrjCem",
  "key24": "2rkNC2XVBHbAfLSoiQtsSzziepWGfhH7ELXyuEpESFibEKGqbxt655D1qwYNnr5XVWtAskAKuz7gFxcFCpmLCX7c",
  "key25": "4EHqCYCwur38f77stfvUiWp6PiNV55bZbJuxcLWJ43wQcQxYwrCiEimqvay2eC4wcsyf5pZVN8WxZ452oXbePpQm",
  "key26": "26G9aVPxMv8dycNiA9iFzHjW53LDrC5z81udTbdKJCnEvSbLgF1WLKnFN59UJPzdtAVG2ZhktkZKA7APgxnw9CVF",
  "key27": "5mwgbWisCzqCGQqFpST5bpqSUMhtHckGB8o2nhj8De4irbX5wk68pDQJJVt7D7Ngc6JZcscXimWpgtTQyqXis68h",
  "key28": "4xJcjLPCsjQQhQPfFep5hcSAEiL8aH2fJH6tVQ7kbEtVCxDkhy7N5QAYfVm7LZcZ9kv1iJBTLwDtbcjYbRdxx5B7",
  "key29": "2evH8U6e8AgyJj8atepyBzB9RkdXgD7jgmqW4TtSvA5bK8bq1B6qBPaT2CND9wztPyqHdWvAyfacYTboc2VCV3UD",
  "key30": "5VBqbP7cBpG4qgwUZgZo1G4VD8CBZtdmnQ6XL2Y2h3NDjKA8yjdwsqxt4VPsAfRyCLoCoRS65QfRbQWDTTsz7QKt",
  "key31": "2nZqYFpRkLSsLXiJBhBNmc9wM8hq1wAk3h8sYGCp8QXRcNaYEsBp7HurqreWbbG5iSH9ibSMkiwqwiCPPUiDPwi8",
  "key32": "3XuGd8qTLXBHrBzC4enR8PTQzAqyioCozL7wMkjMbQzy4Pyrj8GYcURDSSwRkws2n8bxFdnrs1nirJ2vwAMfAQN9",
  "key33": "2Bi14KoU2kfS951t7z6Vrmu1KP5QGU7qdXWkiN6X52NAgcXTnjYAosbjZb4gN4xbpX3rNKcBziFo15gNJ7BLRFwm",
  "key34": "3RdVNZUTtCTukQgMEXfnG6mcDv72sVdwgr24FXrLBVjr3UQrZ6bXka6afhPAQ3LST3ekSRm8t8ZqrjA8kr1D4KRT",
  "key35": "KDcct9VXnY52KADNzCTA8ZVrNaBzEjsKNVhQp6LqFSmRN6ifhoAo41Yjh49xmBgWBLdNYyiVbCw24MLxF5mE7gE",
  "key36": "uKjrFENqVkxMCpyMq1qrsFRwsRhruAcTfAdfo5SePFRpivMuVEvTLoRd9yALN9nSaaem3ZFxgiyidKd2qkHZ1wm",
  "key37": "3TuFK6EDoC4UZrzwoC2KigzackUo7FSh2uXqek7sTLHKoJ9mJPsqNFCDiSxcge9EKiMkis8wPBbqvEawCerte1AP",
  "key38": "DyWr6DNuZCsWd6shAZq9LXk6k8fLCgzxSaZXycgiWvQwXHf1mU7JaapLrgCZXHQeaNNmWFTD9ch8o5cL9E7VUq2",
  "key39": "2UtUginY7CEeroYTJQSTuutEiMrCRCVSZHfhtbWGQpyvLPg6CXqrR6YWB4q4M4gYnvr4N24tjJSe5pLcZEwZC99R",
  "key40": "4Z4Ys8VeSUWKRLvFNwDTGP4zdSo8Wah6moYrr8rMt7qMacPFFDCW1cF94jZsTqhsxFoZNPjWwRdg8RWecqpFCQGj",
  "key41": "5SNguFyguG94F6gKJ6MzdLu1VX9x2R63PHnJpp8nYzqurCvAiBPtqrufDqeTSTD3aZbQdRNnbkwjazNaVwxYRHwX",
  "key42": "3BP22vZeMuD632MuYaqTfBUFDmmnkMgCnGHkB6TiowtJ6rGXK3FZr1LKVewaTBFJgvMukrrhXSsZJGwpTFdxo3GR",
  "key43": "3WqbMxaYyfbq1iyaXeDtg5gJfrnteLVGAxqxghZdFuBxU6cYeFAo8XSyzWPdNv75zebiwLqpuJEMoHKuTBnfM3rD",
  "key44": "4YhbPPgbUBVp6G9TFqGLqjvAnXD4GZj14WBuBhWWDYxtZZ29tGg9a2Xw5EyMFzLcZLa3F8k1mTwTc7WWHPcJU1by",
  "key45": "5zbWFsfHYHnei8gFxdNvxyXSrTPj9g44CkN19YnebCc768Qw3kW6ioWtPsdA45ofzxUxxHL2TZtxWtBnBHqDmmaZ"
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
