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
    "58W7FWTrxjgJEQRikXwm1N9QhNpBrgyZ2Q5eUfHebrvikSAw6mxjQmXkK8XmGo2ge8yLXwbZ1aBnUJRXBoWYyvM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQtY7X5CQoVX4bnncePn93up25aMMpdb7CZb52kfJfxuxqFPenZb3qTxgbxN4PdSx9Es5BXpN2oHmv6JLFHiFTS",
  "key1": "4QqWNMC2mkykuVVbmwQUuGekfHxFBG7H8qvQgGwqXUT21SRwsYhUZe8wwyhUjSuU1gLXMec3wpoeqSo2n6HhPq2C",
  "key2": "3R8CrFE8AzawNk3hgYHSDi4RkJQjfE54JcE2PhT78uXHVoBk1j218fyLsk6UzPLiw4Z6wYRFNYGvMq8jBDKefpGY",
  "key3": "5Q33sVYNzrjBeSt5DvKNwhyZsVJZSGQ6HgNrZpSqX4oVYMa4Yk8xGGNWa4apTsWY9p8vpPwmu8WFbYRqc81K3SUb",
  "key4": "2si899XQ4AfwQBgh8APiVPMaTmSZwKhQbp677yQDPCsV7WAXPFMc2Z99zEUCwXxao9HZrMEB833WpT4VeSF3ybrA",
  "key5": "2m5yKuBkt4AVPMSWRmiye2PdTJ9hEWVbAtY1Y8u7huX3NJcWXaahY2yExpzbZU1V8nuQBGf1jeFnEwbwZZaLzH6v",
  "key6": "8gm3ayVg9L5ysancHusN9h44ZFH8oGUFnrJscW4WLDnvRuCAsC1UwZ8rQFocShdKH4Y9UFu92iUowTZEd4a4JF7",
  "key7": "2SdkjA37TVz9RzUnZVQdmyyxdDf4rsjhmbd23Eh8K2sQEZY4y5WRMTuCGU4oCvzmD38B75hELdzR1o9BQkDoq8kw",
  "key8": "bqTusScxbt3t79U91sNH6BzTd97YiVboFNRD6mDrFp6wHSnqDsvDVLVAmeUd2CWTVwaKnun5vAVYY8qiTf1FNjx",
  "key9": "4duq2JRK7w2iYY7RJz9k9DrBFvb5ee6B2U12jqDEjKb3TrnSmreNjwwZBUH6j1ENDKq9D8h5kjx13Zv8f4RCpLXz",
  "key10": "5vbLYQQepCKgnWLanV926xwLCv3Wy2RVyCM3y559kCaHYcGn9pR3Y3gDwyFAcNC1GicxqLwHvDgH3Cf94jJQDWct",
  "key11": "5CFet7SYvir7Djt2ZM5YsS5ULWswb4FXrUEQa48yHLUXq6wT9ahNeViFV1QzTo79TTDmgeVTsbcDqo5WKeGzR3Sx",
  "key12": "2McTWAgyW8rw8AdLdE56bS8eoFQW35Xi6s9Qqf5N1BapN4FWdv6JoNb2yLECE8R5vX7DQ1qT4THrXU4UP1hJsHLs",
  "key13": "624Pg1A5mKT1aZwY9WDzwpMpvUAsfK4VKTUhPm8mQdm31dnyVP4rFGobNyDACKTMt64SepNpypTEpeopf1KWBDkm",
  "key14": "38689UPFvQgjrLeREL3MLtade2w7ERcBHuSao2pDowPV37DiVRYYoDiGEKxhyNWsek3TfqoMCYUdbHeUPiErScZ7",
  "key15": "5LqqBGQYK5wsqddYmYbxnPqfX79Lo3CKhL4sZXdtK1ULG8rkXnDdnkmmDzWSBthooM9zFzsvW1qkm6U4U325uVqn",
  "key16": "e51BrHWajnBU3WRdY3DzAGU58NpLxsbC4KXyAbZbpSx96B8ktvmfow4U5jA7xHcD81i19yxXhLTMgeMJuVVWNvy",
  "key17": "2y5oL3eXxqJq7ZTvPeizWKfcEfSGtndtg1nZoC3gxhwBN7qm2nuaa556S5Jb3jCz5nxDv54LMfC5xfNKmTDUhRRM",
  "key18": "45emCuwpiEEc5JYeJNCUV3c1QXF6KHngAKFK7SsmhC8941tzpHXHKvmd3YYdyLY15FqgjuPbcignGSGs4dctT8Er",
  "key19": "5dhh687ypapv12QCuz2kY1mA8DDrnp6EYMgChr8FqXXszjLwstVdy9b8UP7FnfBL266kMxgtEMWAf99x6he5ErR4",
  "key20": "FuZ97oCfqNxb8ahwJc1uRnaRYEouekYFNnEAo33XaLFuf51M3mfSWoVQ4obYxZ2SkZsNuAsAkL613jpSFFNWwsi",
  "key21": "3MkxLAMASC4oqFHTvMjVEgJR4TFzo3WTN4S3a7JwfNroZtGuMnF9JuyShsmzjts41bqEADFP55vGQoEkvUXMTgQB",
  "key22": "4ZvbCo6MJCmGE637w4wQcc3UQTSuqzaMQnNuFT9swXKDWEbJLn3PVCc3X5sX8XJQCXRykGGs1DUSbnzESioAC2Vn",
  "key23": "tzjXhsCVh7V8MsMuBJuwzRsvmRdbdCaHh5SrytvfTNE7MX52LKhySdViFfBx3wVNNjaQ5sVtYNJ8ToykVkngzi1",
  "key24": "4SJZNBPGq1qjRaVgDwh9cWQvaffES2iaJggYn2fB3T5Qn7UvauUA6DW3Qt9L1kutUMfPihbCj55Ex6Q1hJbxrJTg",
  "key25": "5tQtxDG4RFvbQSYfJdeLSKJZS5emxMRNuE48AN7qU3U3DKHLcLLVUEiY4HtxG4d9f5QzHZWQerTWYsxjdDb7d4Py",
  "key26": "4kwVuJRP6PBHFHX2iJ6sEBg5EqgN6fZTnG7BpjV6RKiXWBwR2C4wuuLjM8NZ4dTet1CqsaWpxyRE7xooRGtaXzRF",
  "key27": "pk6gq3vaKTXjXzxTcDo2dt5XAVju8FsSjRQEFC67MVZqWx3BnAm4V5QoNYNMUZfVSNAfWtwcKjWRydkqeQkAoUm",
  "key28": "56D1ayUME5GBtrxHSJ6SsDDoeSLp2WppjPy8TwwSgUNsnAPGvt47mnDpjvVuY6bqHUW5fFCkHwVjj76WAYi5W8Jy",
  "key29": "22SFXSpn5HQX7HvWBnEpGmF82x1BWx3C7vrDnCoHYVX1DvdmjErkqzyMA7RAyDJNt9k6kQ2qNwufpQp9kydfKCxy",
  "key30": "zc2boXsEZnWrMVmVgiSqNmfbyC49uCiiCffWog9zRTxaDsejvgTmXb9LLyi6yKb5c8x9g1kwyKVMdBjPPw1Bj7y",
  "key31": "5Rb29d2VNRhGh75er8k95R25bVXEhSciLtThfSyWfefqFKHQhUmnrWWqEhhQ8PXPsbVksu8BnN6aSfyZxF7hynac",
  "key32": "5egNk6kmXYELDLjqTtECpCk93QvFNToFKRjX2qUXvkbHrTfVdK1Cv7MEV6Ny7JZghs1f5J7W7EkurGfBRztLD5xn",
  "key33": "4vifswxcUF3phasdmo1oVh29CPgUjzAtuFDFYSfudjt7vme1zBY1X4hquN2nFw9NQ56M4G9xaCPaHtLEkaTJeA3K",
  "key34": "z3gUsMNhhdhcQsnqKkADiQLdJhoq7NTr1cHCAses1XC79QAsjHTX8Y7dK1RFaf6htmEKPsqsE6nLe2XMdab5me3",
  "key35": "3BAwXJgnfAapxaYmTfVgt6Pw9cCGNQFkH7d4wnbHAJK6MaasSiyWFHgJyBZTPA31fzsuzDU8giZTosiynEDayRBF",
  "key36": "3GFGKbtWfUjH7TDSh14yd8Z4HgS2LkbmH3HuxApko3GwArdHJuu2mhCYZFYN54PnJrYjbCk3Aaa8XeAGxssAxAzv",
  "key37": "5LMM2TGRVCR3L9qjokj2f2JC8sA3W5vzkvm6rcTxWF7c8AdMYvPQXhukyrgnuF4WekebXZyGxPnv8AFfUyfozSwz",
  "key38": "2mLfm8GvXc6DtBmC5XL1PHYbWaVV1naeMgrv9PsmCswuxC6Qz98GLMGLzBbQDmkUEc1wLeiro46JkgwhdeLhmDTB",
  "key39": "2E9TKDak8ikiu6D5y468MaPfVtMnkbyLgQfWto26PnozcxYEgWVnPr3Udhyppp7MLDTJ3m2MLt7E2F3A6VKHsK8T",
  "key40": "4rPYtM3DvTujDE4JodzhzEAz4tEHB8nprHkk6Xvicq5F54NKjpv86hwcVd4tJX5qCs9P6M2eabvEaqsnWYWNkwkx",
  "key41": "2T8W7xpSnefyzd8wkJLsf66PBVR653iHjNZMCNufUdisfw6vaEL1Az7Va5v3EQP9fpk8v7AmJQqFWLBeAE1ec3ru",
  "key42": "4sfSJDXNr5iq3n5ND74dk69PQVuXNstj1TFQ1vQzsXCyHbLw9aJzLcQRxkmb3SDmb8WpDz7fS3Q2cUYYChuoYUh2",
  "key43": "5Wb1sLaC8AkncFKBKbZrwX4dU8FcRok2GD8TPC3aUtp4TWEWnu5HHmSJ8k35qfgaP4PGTzyph31JSN9uLt3Df8qZ",
  "key44": "fkxhabQ7mwfrXZ9QpZArrNDb7qDpA92aTWoCSNCh4G9FboD6aVevvq1vC82BqXV26atq7oGZ6Dn1LLpXdTgWou1",
  "key45": "4zfbdsTKrCh18kDoVhEUG7ecMAuLniKD3zUKkLysU5uhmVWAjLTh9uVTp9qmyH8bLtnLAE1Pf3BmCgod2wQNCgxQ",
  "key46": "2iG7PWiKDwYKU8S2XGo3cMSz6zeFe56mxoswZhi5WsWumeHRxPCKtB4b9Qek3FneckKoGy113exBp73s2Rw3m7RP"
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
