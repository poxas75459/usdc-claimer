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
    "2KTkyLTAscLA8RBgrMn3y567pAiMAP2jwZ1JfCAToe1McrWdjhnAFs6UZDdpNoBrsJqS2HGnqLD9G2g33s4YzrVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bPvce51RNvKqxjGURMV7nVoTSSzwx85PUXZ61hypwPJEcawQGU12gxgo12aybbWrZLa1YbPtDuUrkHa8nNjMyf",
  "key1": "5b6JruB7oBTSDrZb8HouwmDitpYo6WKBmtoV1STknVLECNGK1uknNoswbvQgEEkK97r4z5nMNLCsEBVvUzsgFboC",
  "key2": "5HFtYvfWUiojDTJfVbEzsjvWpWqpVXpyKsW2EV6oCNvVie7PaGjZ4BXVGSSuKHRBYEvXKZ8Dv9BFzinNj8o4y9p7",
  "key3": "kzMKGc1frcJFqTh9ToeG7NJPr9ywT8jgctPvNk3mY6WfXNQRhY2wibvi3tCSHFRPtQbdsoZ4DRPj42HVoNYWDVd",
  "key4": "4dQ21Zwc4v71gTGFpe7SCSJE6rTwBJX6Sz3msYpxAYHPxnBpyjYgQw9L59ZhVN3RYbqsdmM8DhqnkatWD1dSqzXF",
  "key5": "4JhKgrC2fSQcQ52C74GSy3yp1xveNiy55hoJAadifgSJ7NzrmHCCT1ujFsTxUNSQA6t7QUasy58D6NKgcXaciL2t",
  "key6": "yEDreG8JWiw7HTzzaJ2kpe7nGhbmLZHNi54G5VdbxFDPr9YUv3KopC2djXpxt7bQZfaEtZcoBMUb87MZQ2v9E3p",
  "key7": "5jB6wFHzBpPYSrAyJ7vRTniNVw8fuSxqMrwRosAjZeo73hjhxtkWTEMWmmErjWKiJt9Rdo6ALsWPVjffHwFv8NRT",
  "key8": "HTPzp5Q7MhXt9nLVTo3CQbSV7qZSD2Efwa7NL1GUZD4eRB6WNZiGnEzZqB8rNZMhPhAyZfHHmq5F7eqSXuJxGtc",
  "key9": "444JpcrkG3ATb2xeao4pRc3wXp5uCFA9NeTTvKAi6PcuG3dhzKCZt82CQ8rNRLkAM2kgRd2UX1yPML7rc7DwCQk8",
  "key10": "3BG7QjfzBXn4XFM4zMLTHJoutQPzxH7e8EmLT9N3FSqkL4A1koLcbKkJPjvWMJb5WeLoG7Lgq8LsL467SqdsC1DM",
  "key11": "2UpCRQmoCq2RoB7AN4qs1q5aNaqD94vgdG2t2jKcPtFa35Cdg342xJorYuP5ruxzuwwYuXTN7HpBWWjBhT5A6wtX",
  "key12": "64eNFXmAqJUXVgTdaR56e5gYwdGNrMiAapEmSMNWMDgG7gNwPkCgzBo3AQ3Y4nAxZmn8cvXPLHsy9vEGWzoPNnQi",
  "key13": "5jVV87xAXLy4M1vucMm5ZQKqngXm4N9PS3Q7ickefRMWBZaymDruf2iLcShW27111fcawQqdah188sGdPRSuPZZC",
  "key14": "49TtzkszWTM5JgZV2SZ5r8pUxrrZDq2on5tFwk5KFwC4EHBBunLnixaNYtrooGu4rAk3UZt4Kk3esjm7Jw794CvA",
  "key15": "5EkhZt8uK6Eai5ckkMQWvkanvisMMw5giEFMa8Qtnv5PigpgeubEFsdLaGSaeBMLZtyJhpjPFi65uATgjn6Z8Fb",
  "key16": "2R8qWskiRPJ4jzCDELvfo7466nATuTzwDuMQabqM1i2USd2psjxGMBJd23ogaywhzmWwrLtUH2mD2AsGqU5mMWT8",
  "key17": "2B5Q1LcFRnPJsf7hR3yJYmRf7eDuw2mxwtQGbDSZid675uyC4kuLoVLV5dGy1McHauYdGLwgxYYAyL2vbDT4AdAC",
  "key18": "4nysM4186EgBXUqbYW3EbEbKVPSy9gcHJBkw9RxPi5BzgZL33cL8JjBDiU67amP9oefdoT1xpbYbdUS8eP88kJUD",
  "key19": "RihKQTwPkbQKE5WP4yuAqaGMU1giT69yvkX2a5KE6mzNaaVpHTgLNCkrBwJM8pBnHihAqXAFKhf4CjcADy8T31x",
  "key20": "4DaD5g9epaijFo5SKNL5FsbvZsDix9AEEoiqR98Az9QfZ8T3rRygaXn32YST2RC5xaj9qggVSkDtfwc4vigzM7hZ",
  "key21": "3eJZngbfyV2fmwxRFVhr39cqrzQCrB9616E3MJXPAnuwssmYSzJba5g23W5hD4SaXUaGwzQx9LfFYo7KQTpUB9VZ",
  "key22": "42mDjmbweMKh3vuzQndr6ECVwk7BuNeqPNuxHZQsoQzqyEDKTFDoUn2eDBmDmLUYacgDWVTEc4ph92S9vuZREiaT",
  "key23": "4LUQF5PPYyBKh5mMSTDvG1pVjsZQdvuTMZPv4exdQL75mfjNynZzeXGLWcsZL2zupm2UwuwKS7vm126Gw2bdbbJz",
  "key24": "2pn8EZnpTsAq1BD69visQtsPhG4oZis9xggaiDVuRZZRfXgGG3vL51H5C4FyLQfWMi466wNZz8wC7xRBqc8ZU8gr",
  "key25": "2uvwvPyf16SFBPUzHjuR7LGrJX19TiPs6W9Xc4SwNtdCm7KbjdEfyeBE3HtnHbPgiYuxdvbecKmw9qQvFFpRDRVU",
  "key26": "2Nvr5BfWpf3ax8wN8fLv4QHQe9b7xkbMn9mBwLibFA36pQPSTmAojufFvuferVsDw2cREMJR5WBgaBpKxr4M3AJa",
  "key27": "3eiVpdytjrcNj4gRxWpUKyXdETjrmg6Dze8WVzBzkgpQnnnrPL9ffqD5ua9zPYbr2upc2HdjKSroVREgK7Dt1Uct",
  "key28": "3reo1LmvAFEHTN8zgPyNX58BHG9doiVp2JzVrXGATh9d4CU46A6KMCAGy5puRz8vfd69cnaTRsW5TzCbJkeYar6D",
  "key29": "sviVpqW6wV6i4GTEtnPXPxsYbvgxJH8JiVT659RAD2Eg6W5RaE5cXWYvu8DQ88R8RmuH4ccVZNS3Z2PFsjkjGT9",
  "key30": "56Eb7mxaAuHXKE1jnvK7TmkKX3tYpjFdt9syuuSVRGj28ztg1RavW2g1caEPWjTrnapyiuvsZbBKkkvo6TyanUCj",
  "key31": "4JcF1q5H486iJw3dNq3DLd7uvBH19j7EftDHhimBQJUS8XQrvLWtEkDgWkUGcihranTayKu6aHcuhKBKEsgNqKKa",
  "key32": "5CXC7wn9LKCyEH4M4BHVvCYeggH6XRLVS8JpSG5GZwGMTXb29bqeTHi5Ja5cCPeogJMgqwdkLAXTtqs9hHbn1pep",
  "key33": "T4G9m5DvYsi3Qzw2qov9nrZX9mLzAN2GAWG8fYUjn7xrRX2xgJegyCrM2AYpHSZ5XiZBZBBuNDK26RSeSnK3fNA",
  "key34": "44jrwpcbDt9gJHC2rkNf84NJudGCWVky9BfZJK7YGLyJ84aBooevm8vdDeP4mcKSkmdZD6WuBu1LajKeEDLuK4wa",
  "key35": "YV9zd6YyFCR87MAewwZ4BNdYJc3Z9hcebUV8h1RXMD6KZyxN6WfhhyMcWHYifmpvWZpoHuAcvtb7XxrnFyvXdDS",
  "key36": "45RJ9zKRaBPqB5s3fQUbAeJq7dAi6Hhy4ykcE42gfaPfiKkbnorRdzn2QqbJMfGe6ET9SjYDwtyj8ykN51JFczZ8",
  "key37": "3qz6zP19jRmjpyT7TYVwD61w4HhQd1uuwebxqveCfCzCkTLCUHPzsdL2pzRvT5GtQ2YwddwEVHzvfknd4vhW7uPX",
  "key38": "4ugokZ3d3MHyv3QVTqnfNQrqPHqoQpSRHx12ejouG3u5tpv2C3FCtTJUmNiSPwx33osZUaXKdZMRmnqbMNSvvvvo",
  "key39": "3885YRW7xYPdAB1BTKtLsWSKT188dHB6CxsMacBD9Ev58Z9ckYGR5yhA2jLsND3Vtmcr78Mnxi157dFeqf9bexww",
  "key40": "2fSEzQ8WHhUntaPNeJRiWu7AdKaBDpFne4xFHBPkhDTXmTSoGowTde6uTenBbnPXJb6EmBcD3yAGDZ7vGwLidLy9",
  "key41": "5E3aj13HD1PHsb7QFUf4JcQmJX9Pu99cnHR4vxD2NzqBJhag67EozMBFznPgQAkmwngKaNXoPNq6j2eViZY2fPFH",
  "key42": "3HAC71vw46TxxGkUzohhgzkgnDrhe2BMjBhbMz19wMkeqCJcjGr4LouHPffYVT8guPxV39QifrJdeHoaJ2EcAwmy",
  "key43": "2FwzjC3XRnpXw7kuEAtQ2htQi5hHbAbYXmb2ZyeKeHsQXAP8PBnEoTgZhcvkgvh6HFEG5EJVMC29iTKFiARqtWYq"
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
