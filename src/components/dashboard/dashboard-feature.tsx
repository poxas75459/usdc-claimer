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
    "4yCJPLHyDH73ua2cfu7J2FJR3JzEr8QjguTLzoGqxFXhpTUCc2zZcSuppU68HEGPM9TcnVu96YpxAQTwSAVqDAPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CuW9wwwg3N5okRTrUWexJWZdYwzE2Ve17cwjH7SujkHYxfV1VKmMFws7mEM15dEfNBmKkPDV2xXn4M4pXfuoSB",
  "key1": "5FbyrhS4uqr3vWVdLXTwsMduepaogvYbhgKiD2SRyS3kBfYksjihBaZhPjxkPfvZgVuMLdSHASEryUmohVSY6kE3",
  "key2": "5Jg7zdnJwd9U9aak49c61DFAmE5spj8KpHYx4C2HrE25XwWCo3pBgqdb6j3tQsAqJoA6N1co45ipziH3M2t6EsEJ",
  "key3": "5BjB317hZTNtuGfKAVbBT58UZwUWx3PWpBYPBHckAyVE3rfD9isvmg4Y32h1jCqjpNYQJvdasGdJNpzWT6aw9Boz",
  "key4": "4gLESMvpvHKCckjA5vEt3cmwpLyNLo9hkm7vSHXNYperzWsxKio3RdgYsYuyzkaP2PjQpUwtnmrPFbrVLDqhPWPi",
  "key5": "46jE28D97ugyZKjfu1BBCeq8dMjVSwmEhjAE9RZ4C87MjPjf3Ei1NGVXPettHYSLumgfjhPF7fogWG2SH7u86pav",
  "key6": "3R8fCSmmGWrkXrg1SdQu9s2g6E7HnYdYttzGfMTteqDxnsY6bn3SLTe8W5XPgBsjttKy4tnqETcpEdMZ1TNWt2o9",
  "key7": "xRnWhSPUBJ8FqR5du1ipYtGGLPZAXgD5ojo1paSEBiFbVyCAie7Y4cKPFZQf38iJ41XDF5fB531oiTsNZCuFEot",
  "key8": "33HTdECETeBmTyUmiBDfLJDp5KhjEc1JLBabkVwT7cJNm5pp37fUhQ9Qh5611e8iXdRkM4TUPCNXfM2XbJnVnCe9",
  "key9": "3o9su8sd2r4j8BGPhkBryCAo14t1wdkFtcfxhFoWj2z4xd1AfvZnRk4Ut7r1d83oYtoBfN5t7DadUWJ5g8UvqjzK",
  "key10": "mYUqaotWcRs8iqy1xYBkxhvMePB9CfW33JMr7Z1mNCh5fCeJsN2o38VH54wQWbXcQEwuecEvfEUcNV5Qmv3ANoT",
  "key11": "DRWExEqo8oJGNQrAH7Ys2ibynxDfbz2H1pvxtvCAyLF9C9pYucxoNdmHZGF53o8BKxVMpEPhmLU7h7jmUYKL23f",
  "key12": "ACM69h91hyyQhYewF1tJJZrtkXehkCtib6snTHVnPaPvy3Kg12uygiQACAVGXssemzNdKWCLb7asdv3Ff4ZEEwP",
  "key13": "5RGbmogaUuZhxjgZzZGmmevJHjeB4ejiQAEF3A4eCfTa6AD9kUTKuZ2DLaGZzCMSPgTcEzHjXTEtoTLPn9VjoPmG",
  "key14": "2nMATNUbnLAbYRr2mkotpTQ8hpFZJi1UG2L1FFHnbtfXZEUryDJ4A1rJwhHDpQKFtzhQPNEfr6p1jymYEgrUMRjK",
  "key15": "2AnzmckkyZpyb98tgnpQrDE29KmxiLk36ciT3rkftboEhktyZBApetHRb6PvkRUuDARZkYEGAchQa2zJ5LWcNVez",
  "key16": "53Tcpaua8Q74nwRzL399Fh9zmX8SwseLeqCLG1ZvnuxR8JdHbY5os3aCNgxfcH725tGgNCmkPd3TwQfnAYiUV1vC",
  "key17": "4qinJZ3auBbFkFhsMNyzpV98z9SuCXUgYcEK7FrFi4pD2oTM2bZt3CZ5n6ckA63d5DcdfHotwSrCV5S8G6NtD6AW",
  "key18": "3weqZQ6P1Kormy1fQvDUQcoDSkjJ545ovUpNcxjzScQ5dgMSR1uqHd5qRJkdtFS7yGPNDVoNqEBT9GKS25v3JGn",
  "key19": "2eMu26asM9jjk9kgYYMmpnmdYMuoRhLrn7PDVg6oc2uky8H3tN8KenY9yHxBNASVYNWcaGegqw1i1X46wBBYCe1U",
  "key20": "5aYHQz8RjNdH5RLKJfJGNXiZGbphcP19oSL7v4iazQyzMuVqN4x6VzoRkrKCaCvR2DdQfsYMrquRMjEPtUKFLR7R",
  "key21": "38982jhDPjvwwRWkxyTFM6gtP9cckAMm9mem8pewEkhnSAwVaRLRKyiRTq6rTyMyArudr7YkHcYYSfHrTKeCfWis",
  "key22": "2qP6xpyJKWM6gvUnqYeYt8YbQHNMspNmHg79ovNYX5VdsHsqtSTu1HJGVyZocFrsGczJdd8dbwPn7LXCvXUksMtg",
  "key23": "4BkMedYnS7cjjhZCwH4B2VGKxwPTem1DESJTtBXntBSW4HVrqMC3EsigkNhm6XauftX8qjGPyH32SDvnZ58uZo1e",
  "key24": "3WpLdmpwJhHYDeWggiXy6z2wMhjtuTQwRr1M8PyQz2ZtG8KaZaP1DPAunetQErXNruTiWfLow66nVzgthL8bmLSm",
  "key25": "4Z9WJbeCZFwbyc7uZXgoMe8YX2jDCP82WQwZN4Qv3AwiRpoxQhD9vHrsxamYZP6hz7t9GQfh2jgH7U2e6az3UraC",
  "key26": "3jSdADw4TAGw7ZJuBcgvqJ7jWrsRui7sXNbtrBW2sNZHEE8UxEq2bjx7z7PzvouHnrLFv1aBWCjLWpU4yBiWYu61",
  "key27": "2TQf5t9gJV7tRhZ2g8hBsX9kXYywXytAWAbZ6cXPpgCqpWLZna28hHZzXwre9MqPpUxAGudYFjFgwqbknzkRCiGL",
  "key28": "2GSkJw51Umx6rAe3VA5BdG9dbmKP5LwEJqrPumA1MNaQ6MpSMVVJYSZg79QvA3MeweWAhNG8UuZwYC5duUKuGv4r",
  "key29": "5TotFvyAttzUN2enDDupd7JKTpqWmQP6CwkJYiQADxFBvr5zZyC7yG9m9PoVMoJmFMpJzfC8Hx5oPETPHa2q9nCy",
  "key30": "2Cs7emBfLHBbAqvqRBD2SSkLFh3hwNXnHukKkYWjmamFz5M75kw2D4grvsUDqRisbz9pMbwcWbnLFWo9mkcHE1bG",
  "key31": "4jSU8WJHHxQnvPMvpBS5ZRprQ4CdjqZz4xV76gy3ni9Dx9Q2eBNHM9da7a1K4fRTRfVuueJWvtPNtEprnc6EYpKZ",
  "key32": "V1VveeGNBxavH8vTNGiiDC6GdzofpVMHQBo3NaaFQ2UYMhwzsNCYLzAAWs5w6j7sy1HpjLAFaxfZZ3WUSFE9YKM",
  "key33": "5cr89KYaiX3ciR8tQRt5Di1ci9e2m93y6caXjoevGZ3w83xDtCKDZXs9eDwySonxgvnhfQiHBU8MH7hnzUvChVhn",
  "key34": "5kN91jyA1eTC1ii9e1L4zZLk5bBLG9ysG1wFj9HR2UcLEemGaLs46xR21nmgmzCMoJ9Cj9GhT59vxUvgaR4oKPyc",
  "key35": "4pynZCAme3vgLMsthPM3fkYpJ4R6CkwWynDToauq2aE2m2o54J2ShwMBxAj4RJyvqgTyHmkuMKEvgy41NgFkH8rB",
  "key36": "4tgadRfChhriWAM8gkhm3BmQwLi6emKv4e5u7NMPhb2fsPKxq1V5xgvjAF3d4aLrnSj72Z6RmqFB5QGUWuaPZ3nq",
  "key37": "5Zt36G8YjgCsUvgDnScvhuf5ZXeUGBAuY7LJzd3iebaVFRHaLiVufL2GRTUHn9Xcd2KwzLNvGrbXje8cBtkGFQMx",
  "key38": "kc6RjfGSZEmowgbMjafiMFkKFGz4SnmYjuY9hbAgQvAXPQ9rpwChTcHeHL37YjEeK6Fenv2ZLev1ZDW3yhhD8NP",
  "key39": "qb3cp6PrXKTnaDSf1teyAMV9gB8CyAsJ93HtFtS6YMApR6aYDC6NocBgi5tbktbwZjJCyZmfrZxbfGpxHogYZoP",
  "key40": "epRM59Y8ciXWKNZpGg9tPihCzfR823C7JLP3GSU7Nu1WnaPPK37WzDbkrayLqKCp8MH7K5wKdiRYBVW11pjx9ZZ",
  "key41": "5aUt4j8YRGNit3XRuEtM552kaApnWbWk9WgKRFv2DHZTRc7kHefD9R2JjC3pAUXvCX7Z5A9f6BMwogY7PdcrZYRP",
  "key42": "28iXbAueexzURAvt2HQhUTNyW1bTXCeEDR8obHV7vxdwvMpyAJ2xaVAWSHaf1y4Moc5Mb9bQx9vc5cgaFyyRBhUz",
  "key43": "2PfP9HgoAdwMRnV4jrZSbaxiPnQ2FM5weLoEa3T2J6M4Ao2vN1G1aiuiTNQ7ENKMR2o31oFKgNSrEnN5pZujwV3N",
  "key44": "5uHYqqCX8uinjnwiQf6WxSJTMS7yy29rvgW3ghQhKtwQz6UiFuK1Z4CN7GHwAuofssZTa28UgmPiohWLLx2YcNjd",
  "key45": "3HJY1B6fxaAEq6UE6bCWFPweT3a51Am1mML51nM8z6wGTbUbBb3gs8Ewo7xFJUZDgWaYKnZximLn8vMo197HCFxz",
  "key46": "bjHj29bCWt9Fh3Fyfx1AstHFte52V9kTVp4mYgjgVzkX9kNL4Zt1wPmqCtoABVUez1RHQ37wSZnwQG8rBF9X3AA",
  "key47": "3ZXmzYVr8JfwRwMDTqaQzwdo5o5CNg5sUciwUze6qdwG25mVPed2TbXD7wQvvfM1n8wqmdGvDY65WdRwMzBhcpUR",
  "key48": "4qQcQj4gYtAuv9ZUM6KEnXWJ7jdpSAm8krHoK2jAUF92BSaPGnRxveTZ3MRtRmzch5hshvok5D1YDQ84KhMoXBzN",
  "key49": "38ZMw6bu5ooxPeANKe4BXTAT5fYzkBdwcPkWUAv1AwEmkjNuYXKNVAvpa65v2AVCy1NxYbgZwe6fk1PhnMrGN4tW"
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
