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
    "4mb45xyqLmQ1QE2pGgUh6jA2iTLPrPMZ3sCoHSVxVGCUcKyDRj3erkSyJvWPzkDLxFB2XdZMXZVfQRPVVS1Seqb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCcDfP9DvXG2g2pTDML9B9Fsq2b9HiAEB2XXSx2Rm96hp4Bn9h2acBpQwnsxUFyqVFE1AZvNkqQt7tcmsTLZKLc",
  "key1": "5RK9dc6B6V8v4E6yAmnEie4YXjzD3CbZTRpHzGKjPwqgYgNTZAW8qzrGJKmaJPPkofAhjAAnuov1KjsTeP82oqTL",
  "key2": "MAc71YnyCr2Y6aKzebV8XtGgA548n4nyVrYFzBo6stUjgwC2VX8k3Y7yuY4Vi45zp66ftWcw92Axs9AyBr9PEov",
  "key3": "2b2u6hkdd6LXE2nzju9UJEHrsyT5UHE7g88oiS7wejYzwm2it1VGsMKumnti6DmHytE8qA6jsYSo9mZK9aGnQCdV",
  "key4": "57oDKBMXf2GVP9cv4owoL54X45LQpyxgP5yenSVexbQB7iK5utrCngxDcUNf8nktXSAr2SywGgXk8FaQHwEM76SC",
  "key5": "3oWd3ABiwTYt5CU8eVTTzA3ttrkqEPGLY78EojMPnmW5SRLcTbpY34CRqes5UgaYQPPEWtMZ2SNHfyiDjBgkGHEx",
  "key6": "4wsiTbVR7jKQT6HQWcXqm9bt7AtXEgYvisoxSB7UWMPo9CiCQTNquafVDye3BjmXu4VN8RYNgz4mQvne4GhvnnPo",
  "key7": "2s1ABcH9rqYPEX1zyUbHRdEFrzJrrkucutymeiso8hCvEs5RzCAX47ZaEy67P4sVpASSAjwZVtsKJG9YtvYzK9Z3",
  "key8": "4Pru1XuG6YyCVcsQ4AWsY4CRY1obuwQxC7jqFvDREvjVLg4ZdJRQzGebKtxoQaDvUaarLabhNewP66NGz5mroAQZ",
  "key9": "3MPZiNHj1YJsaoENziaHwwg5Ek56vqGVWCBNeUo33Ujer2ZiQqg9cxtZbdgFPjmaGwqqR6T9C2GpurNkDWLM7gNz",
  "key10": "3gf2ZRrY6zfU5j5GdKSy51AzWSvzqo8Y4momrAJU5M2FsTLG69ADGacCNZ9aWKkUpNEtAgMu774hyRtvXvVpDYB1",
  "key11": "4CYBDYc6xY6ZRXY1UcmaxgzD9tXcgDYtz7fFcS62gWQ2MJETfFPXPyA2vHDJ7EKtbjHe6LL1a7yWHGwbEw7dzPxF",
  "key12": "Ju32NmMTbmS8xrNKpFWHhUgTg5Wk4TJFoHaVCmfMY77ovzoJ26D9ycpYkGEKqa35wiAvpXkregZK2q4dg9qmK9C",
  "key13": "1Ttmgo9WfLeRKqesLiQ668v9GiNgh71tnyikMWZYCdBK2PpogxLxZAotDPsr5XQGRFAcdGZoChNTCL1QwE94NNB",
  "key14": "5PLLeTsY1p6RU1Gx4vyTBP54fJwznJR2T4CWmGtBPY4NU7FghdsFU4AJdEtF9QYk5yw85oKFfuHHkDYDT4jjwm7x",
  "key15": "3FwA59gzs8ttofuwQCw7BvV2DGYJx6oXtdMxea2tUEFJPAaRDZGBhXoEYgwyGTRnEg51KC3EDTTLtVf8TtVxp1xL",
  "key16": "4hvAd2HCi3jUZAZjfkiBMxTKBiYoE6HdY3qe99MRKX43VseherSog2U4XAfNF5RMiDPFgVUaezRDrduqrxoZLAXb",
  "key17": "jURgLhNww5fYYpQd5i8Q1Eu1arMCfmT9sKidGyG1ax6guLXyKBkv5avUUFCJBTQfQLcux5shmGe5ce2BVdtnX6W",
  "key18": "2Ta3bj3S9c5F6dZ5bGvVmowipeCoJwLtH3jAZpWrnbZ4wTawC5wcodCyqJBnsbwpeEa7Y41cAPqB8E4xHD1YJv7h",
  "key19": "4F6V74wMnGhCNh4VvPNvUXV8xUGPYQSndzaAURhgGysFJ7ScSdsRUKaieeWTSGC2pfJFFwH174PQ9WFE4qyVGwx7",
  "key20": "3dUVLaEuxBLWa7zDq48rYdePfw8cqtj6tRS1M1zkrSRHwVWUQyXqHRphTcFLQGV2AzugQDcq3cSMMnudYjjF1AnX",
  "key21": "59sKf2vptcJmRmTtLJgzEBaQT1tcBiVDTjDbAagLHXBrhd4XjucCugybpW8hZwZQ2KjqX1wgDCA67kimCE8Ypekt",
  "key22": "5vrrvM9zP7yfSYo4hJ4U8PsLKEX2gdJTsN4zDdz5gNC4rHEcThtBEU4scJSNxXCnMY7meq33SPf1Pi4U3mY5kejC",
  "key23": "xHuYmUxhrH82mSqAhX2TkBtKr3zgLL4ab6N3h6BGf9VBRxNh9bYAzg4uQh3A9SUbMTQyhq1UTqXSCeo5kYzcej7",
  "key24": "2dN43owLCC2iNNTxHBFTAwHVKXQZCb4KEvdukzk13anQdcrAUsP1vocUZmWWqzjsx9F6JRh8M7MizEJto9vUhKQK",
  "key25": "4bGc1NeJFHupBM3ixnqqixZ86msVAr7sennkmLALu8Kk3SEV8g7otZWTwNQzJSPT2MfPxt69ymcAgSAGx2rVvWLf",
  "key26": "63SAfPShzCx8MzFLhmHqC2FkvwuspgfYeYooBcGogy4CNCwQzVb9fhYizcwu4c7jLgz7C47gpsudnQJSueLeos55",
  "key27": "5PPL4QAWq5Uu9A6c2cE3wbtTJTSEWEcoi67sMGHxgzo4HKqUeKH8BusdwSVMeMjFd84JR6eDBibU6BuMDG34XkuB",
  "key28": "hpzNAWaMv68eTE2zXDAGL3JqT63ekgnXqGRbUoUTb8xWHquLMM957PJQgysNs1tHtYSsYaQNNv4PGE4a481TGJG",
  "key29": "3jh3owem6QStcE3sM2qp8eWN6QPnGLmKQqGsi88nGepJv7hxPYtx3pvhCcebBnkUXDWZ3i2pqccJAuGpV2SfMXod",
  "key30": "4sPv9nPxivC6Xsse7cNVCGCimVobaRD8nqqxVzin3pjbeS9vmThZo6mWzGHiXRXBZQdiQRx9UCTAjhNC1uiDJcah",
  "key31": "4S3Ec8iVjV9UzevyCKaaDvb7ZBPePUqpQspbJsVmGAeZtmeFbnqUdJBcr5m3TRZwBGknDQhMsLerJyrZ7WXMyPfH",
  "key32": "46vRdkQCnsGM3AzSYxrDKNa6qT6YtzTJZdwGU4go42ZxYQdPogwAdo3P4Jxk9m2owW1qp4snKD6jgF4Hzw2nj2Y7",
  "key33": "5Ns1zJwzkyCyDyTeV2NbknbKPjViXdyUSoTfBx3NNBA2vs3hN5bV6873yuggmKvezrHfqYXw92auFhwAnzw2yV8p",
  "key34": "2BPduEXzyTbtBK7BZuJi9FA23FBeK3sstprfzocsqp7uUDPg5zMAkCCbqdmAT9Fe8k4gYK9zNZFycWY7KF4tBui",
  "key35": "2Fy8uUyxF2Dq1yoWadfm3UfxeCx9EQRaXigUZXjLy26LGxQZ1DueTYWc7B76ciLh8MCbqB6G3vzBqaGLVDnEYTmq",
  "key36": "BFNva4Rcvg3MGQVBjE4YM2NeNMd4SpF5kRd9X73MefPNPZ3nBwVgov3BjjCNQh54cu9v3pvy73EzKcvKgFaQtxR",
  "key37": "FE2j3JG8n1tKzsBb2PwwNm2mWYzdRQeEno6HwVgmz51VfLKhFpiBEYW2fwPG7c575VjXtHjJ4eckrYdUuUkhefF",
  "key38": "3RzUV4idY9zeNVTZDh6mW2rAy57Vapm3V7zXpCd863dxARmqXTz32M7VkBYssrm4gs3kMzdzrjqzzZna68VFHZM5"
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
