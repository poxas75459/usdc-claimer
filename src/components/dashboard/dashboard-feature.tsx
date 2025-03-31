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
    "3RHtLuJSZrVSxj9mKvUMjUq38QfyraGN882NQTWnGpNsoNsyZRVrNGGNvvY5zGa9UXGpGTF3Nf9Lq28he39GkASB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drj6B7da7rdb1Eypa29utPpFUn6zLYhgpVE6iZ3X5Zr4zfdkqzuCy1HKouySzH7NbsGPjvj8WwBa58FNaFLwmoL",
  "key1": "38ProgCJ6eE6AQsbVVxSME1NwPxcGf9iEHJMKYoqcoWKMkcs6izsdB5Jyjo7NPDh6Zptu5N6fw5Bk1B421RtqRmR",
  "key2": "2Jh7xrqmCmBuy4EiniJaDe6ijX3jQ5d43jf3Y559Qi6hKD1r4TzgVAFQkQi2ovGx3E6Mc2RGYZKLZ17e7aTnr3Bf",
  "key3": "5wBSGcKuXhUiVRwg1ttdGVVffCmBwpxAPRLDd9fGrbeePa8q7evzYVk6DnzXeDN8uHgdQpdn6GSJV41b6xMMicDj",
  "key4": "2dy2BJnpeTZSkt5nNSLMR3Dh7TzETjEDf9msfCSn7uxjPecNSgGmrRgTWfktnRvvmzxLkrZAcCyiGzXFLe3QVgMf",
  "key5": "3VetjQk9mE9rpFfyGLdCEyvx52XCsLYU5MphVBEpR4zuHvwYRFNWyKo5z2F83WmddMbVmgxANbPMNZ9fruVhtb93",
  "key6": "JqZeBo2RM8Ly5qcimN6V4i9a65VGCAQRAEUbgzYzZ8bMcuypTNh7WRuiDhtsrnMPvRuELmZC1PRKda3JkH2Fs9p",
  "key7": "28W3FcGLLftTSmZo6U3coGjsF3bRoLjR3tV2eiFWqjUGc8vE1DCNoACtW5z2777nviPXf9YFWGkw3UhWU6cQoM2b",
  "key8": "9dSdPJLFqYnstCB34qAL4sEkKW1cXAfMAj1aWT3kngzP99pKk3NDK43MjrtUAKFTH4CoMtUnCudGJZAfD7GE67B",
  "key9": "3z8xDGpb6CtE3ddpZs8DzxZC588HzvWH5fbKN16uaADdztcFwLTdPnmT4krqwNm5XodtERWJtHbsVkdhKLXKBeBQ",
  "key10": "3JR4rfuZs2pLteAZnPCcGDVmj3sQCSSPMTDSfKWSB2JjCK6nb53VVb8SgCDnkhvQCG1cUE2Fzd23wKMiYevvjXLk",
  "key11": "34cCCBz2Gqt8gDJMbkWinzccjiTypKB6n5HBrrAXJaLqpHoDK524UaRLfSorTTkQf3v8MHRVyVKPFpQzrFxru7q6",
  "key12": "4RTDc34wQ7V9rpbuaYJgyuimhi1LNzH2KRP5Y8xqCRmwS2CxpP43aNBoH41K6Gcggs15Dk7UrFaqrzHRiJx2p62G",
  "key13": "2pFifRzGUJFseBNQdw19kDgLfdnksJtYvCbY1fcTULWq6JHbfDDt5yE5Cgm9aSpEPwQwfg2vneNN2zpevTyFszB2",
  "key14": "22KwVUnTnoqPDZ7nTwAdbgzTpbXL2MN8fAk5kkje7jBDJ21dRTYSRkmTu96CYv3xTuKoDJ1hDT2F5XM7q2uxmZti",
  "key15": "3kB9D3VFXiuzk8eZzcxZwvwSVwQM8jUDppP4L7Kw8LBzZ9KA1B5UmVA1gHX9rsztUFGg83J53WtEGSDaLjqJnmDu",
  "key16": "5a3aq4L6JDoeqGpZt6EBcNr9EUri2rSqjXNx8Sd4MZoAWh5hSsmULZpTD17CsBGqenbEn2AaXVWL8vv7Wt1yXSos",
  "key17": "26Gsqv7v4KoYrKmCdjB4njyjiURj2FusECt68h2xHFApfvtFtCoPhDNiXmTc3aiyj4zzDMu6mgukYGnUCu9oG9Eo",
  "key18": "2Kin6cQNMSc7VJipzBoFNRCqqres9b8R3kJ5vEEKBGJ6DfKnQMR5a3j9oJQWKNeRFb4YoTmdG9Tbi69p75g9qKSh",
  "key19": "2gELq4B4aVSwqvLG8PYvhdBheLe7Qq4BHJ3aYcYbURE9GrSL51WE7du4umsCoPrGYr8Ck6UDGW4AN2VEMJCpag9U",
  "key20": "2AU9A9EP4YrzhDmv6FoBoZtuy98g9iw3ZTgesnSYN8nqz1UqNMSNfK7d54txDxtedeteTpuVs8ToLT9q53NCMmpZ",
  "key21": "3h5HSQf4EFrfhtfmA5dG8onoTCjJsXwwEywSAFDgm5E9PbBLN3mnAMBxzYSrDcX4bCsKgZquJfMUCZ9c148vzSrW",
  "key22": "4ow2TbmAB4gDqYqakKUrfywk8mCg2WUhwgqXgWP9b4YEHM7e4QJxxaV6NvR3ZJfGXQFpJwPZBs78jQb2wz7zZfYD",
  "key23": "4yjF94mrqoesMCzX3QgPcKg9RDUvPuJwXDvADEnMXLn3to23Ar9nti5KynVYriP9GZ9M96ofXdMFmG4uQ4nS2Ljb",
  "key24": "2Q78pyQwDpqUQ2Z4EBj3uZAhsHKZB39XWaZnwTNBtxPs9hMUQtj9YBj7Ls58SgsWBPTH2Jcc6nEMwsN1oju9Ln2E",
  "key25": "ZWDK7Ba6LiMoJYhk89a9XQbLTzZWAheksfSjFoH6t8dVRV7H8wd7S14Uc3cnNs6AB7sK7aaLppbwvgJPmA8fDqN",
  "key26": "5s7KbqRW1ygCArT4MiHQnLhCYb5vDB6kRt2gM9bpHa6ijcZ6Vr3BiNmpVyLQvkbhdj5aUMxPe6zjrWYhoYYWpKjQ",
  "key27": "4QgerkX9nEjQemyuzMQrgNWAVdzSVT2U68yU7fjBUTnSbYWp1rUvG929gJsgQY3z9xL2t4aam1W64Hwnam2Ngqkw",
  "key28": "39QzsVEoiixFCrzBEoccPHvvihv973bpK21FL4AtaaUX66x6y6ktRkHh7b17CmFCYQ97iorCez21mJHbvxt75i9c",
  "key29": "CZUeput3oZLZiaPLzFn6Bd6XoyNk3jnhbjbMD4LRN87Ucf2yW4XagBH7YJ3NGkgdrJWkPkK9KcyQ7yuygsS3nAt",
  "key30": "JHsSwf8rRVxL9jJodM4K8M7xGFvKfF1aTZFgzuaVyVqe4ZwQR7Z9V5ti8RYwxJjnpmtmBErimgegPS6Y6HNuHMW",
  "key31": "3y4RCDkxxCjw85uMRN9umpav54VCMd7sN6HbwTmG7ATwijWLGQRfWZecsgZWtcmF7y9kEqXp9A5NPaYQJFfMkANU",
  "key32": "3jvnRzD1j7vD2BDz4Kjj7qVXqZC3GeAWYZPkj3M7Wy5sXDm7rz2L1N4qB6vjsEgATyPDEbR1QH6hccecMYRqmpsX",
  "key33": "24k8APXb9zj2HPLzMZEFmkFGejrR9Gqf1KwQUDvtMccVdjLWiybN3VzMXRuyccxsDr6zs5JxZdgtBewvMzXoaHsi",
  "key34": "4X25ni6QGfSSDZMTLPZWfEVaLqqQGR97oC3onPYPjhMxuSkXL2cTosnDqZQEtzWJhoWGVjTus9qwTeXxnZXq5TbF",
  "key35": "4YCL62EFtS3haYra7CCQ4g6X5N38ZX9trKBPizRCQRdjx76DAAEECYfhni7sMNYxXHAfm1RSdvQ4JEvMhQ21Zegb",
  "key36": "5GabdZperrHAuZbjhEDbtUyscospV9wpPN71cb4q4DxQNHFb1Bx51T16rLuRWhzo6ryxGjZQrwxgZAdA3NVJuuen",
  "key37": "3kmaVt14ZzRZJHNrWXjYnuyhpMPLzCLZDtBGMchKuV1B9tjNPKCJa4gT73dTcFDSxVQGsgKuURmEJiA7gG2Wdmcy",
  "key38": "3bkLFUkb5iPi3RBu4hgUredXzEAsEiFr8wXREzybTpTHBEm562jmtZWHDcxSmg4CGym5LGGpvDvDHbMYvZJGYM8w",
  "key39": "4s8nXk2jwrw2hGAJb7zZnRPb6QHcdPBWFqr5N1awCgEfUeEuhXmVbA5RNjG5YRjtsbbz2uxRPxrnE5TJUMy5ABgV",
  "key40": "4EvKfjW2iPkZ4SPWq7Jp7JTNtux3eqzDRDKc9kmRH5qcXuP7mSt5ZULoTJJsmZYpGeVkF67JCbrodn21rV1BCasY",
  "key41": "5xXnVKaUpAEuuVizJ5ucwZUJ2U13c9CVX35WXVwAxw3jHvL1CraFAAq2Euci78FntM9BLyQvPLyDFWNfFuGAoGed",
  "key42": "2Rx928yrqedbNFKHpXvTGYP9mr7w3HxkzLVbqfiv5AnUXSXAYJGEdHydZ5GHkkdi2PgoSf7PQZW5rkrAafJmhjoS",
  "key43": "4isAgrcAiiRsyPdsnJjbkrYawr3cKiCVncHNhzcLzkyDqRjJrUg7rfywozHzQtcFPzHGSfWCLspjWM68c5oK4eAH",
  "key44": "hn6JFGoRexGU1rxrYjFmvDq9xgmX3mv3AbVg1VUA7g1zAYZS37VdWhdu1VSBg85edSsR8TKULL3hbwnxfSQwkyq",
  "key45": "2JKh1EfpRJLZxuktiQMJS93X79dfnuzuMLDQiq6NSyQaZVBbLCh4CjRhPfXHpNV23SwSeWFSTGdgwYJvMrJMHYVx"
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
