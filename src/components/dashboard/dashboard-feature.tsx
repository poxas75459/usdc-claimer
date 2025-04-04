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
    "38SBPAzAKUhsnPcKUFhvRXWTMM1XfJBK2XQ554hP6Un2hhMDWdzaLKJ1Z9AuLvfFdckm6rJGm2EukWLSVeQT2ePY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gAun4CCdo3wgaUcwRnmj8Y6dWsahNC7orWwVugPLphr98BVJ5GB1eWFzAf6dKyXtMzUs4v3wfNV72jkhsbssXGV",
  "key1": "SULr7nVUFUnBSKRG57zxmNRqioLkBwwrXRPSu3rSk6DfVCUQ6iB9PaTaC6vVJTA7GN1iL8VK6emvMoQB9WMRYw3",
  "key2": "65t37c24BDjiFGmz5WNnFu5TwvRoWkPkucoWEmzJh1Auv7JTEfDyMWov77svQc2xRgrNX5oCG1pUeGdWNDdf1jyv",
  "key3": "2r8E9KWyzeP2Bi5qmQk6vheVyyhXuorzyT2Aw4i9KzqNM2ydSNVpp9qLU5BedGChVdYm99ydiSxCCardKbav2kJW",
  "key4": "3rpuEm2e9L2VMiTjUzwocAEhaz7KghnEuxVPKJrf6o5Cy9ZgNkYTpJC7K4mM4d1HLdkUKVWCK2XZZLzw6GhuoCnq",
  "key5": "WhyGPUfRGk9Pk9DihCLBmg38qRba58qpewkTc9UZrnHejrxTpm2sbpxLBdNzbJi7TxFMtAGLaux2VZcF5HDWQ6V",
  "key6": "3ZJuxNuqxuF7ELkXAnn17F3QzzsbQLRTB5ADUeb14F6wzu77DgWf6DmcWkjHPm29tjoLGP47mhKxp1yCTT5cfV91",
  "key7": "Ao7H6eu3FbTVXUWSrc3cV7wNpAQyZsq5Qp1evtVTdtd1K7UNcshmeeoXa77ssaypLUUwkGYYYAdauPkMSPVbBMW",
  "key8": "2XbuvbcgyJUhk1YJ1qbVpzd1keqK18FxspzWcXofFVyoFnN22Rfxm5S1hfyLrT7acqhKaA4ubMwbMcfePb7LJ5HA",
  "key9": "5MDMJuUVhY6MQmhsYcPh1Bg7zuC11X76JRGhNg6QgWbGR8wi3rTeHq83QGXctKKRnMHG6m2Kkt7Gpkou8aRe8k9E",
  "key10": "5zWA3G6Vus4bdgSuTNFNYU2si11T1oR3BsvvUxR6U3irduuuQgULagA2wsJpfna238Afq2nb5ZCMgAhWmcjVnmPg",
  "key11": "2YpALSKodEVnJSptAQ3KDHXXjq1hDEfpXLWexuL7Bte6fxhTMaYnTCjrpBPDg3d4QJyHcEDoJPXTYcFJwjDB6QKK",
  "key12": "2BdWTjSoshXEZQwtxmhXWYXgDRbPtCDuYSDgmYPyErfFr6WGpUG6cr6gG3dMKvZ59wxf1ocxDeMYPtGAZNDAjTLz",
  "key13": "3urCuG1sG8WrvyajgTp5tAwkmNcha7VevNVTLR4XKcMc44DdHmx4e7TuYZAdPHpoQfj9Pk9S5nWcuNdvPQa8zDgn",
  "key14": "jwmYcKPDEWq1aWjHvfTF5oactn15TKdtvqquZoqPTQiNmERcegE6e1RdFSz8TC75xuePCaYpLmXBpphb5JNScpU",
  "key15": "2jGgTf8441h1S63oEV1Sw8qn9kcLdjDmjZWaN9QtJuQnL6SZNgRMhRH2JZkUrH1a8PhzvG6TjPRgMXnTAG4jwTu7",
  "key16": "3asAR7qFD7aFNFN9gtKM576Jp2Feu7jwwR2kdeYpqyt5HQHvSertrcJ7TUPPS4fwtMTcmv9x91jJhDFn1MeF5hJw",
  "key17": "44nv1E8LgnuNQLDnAXvTE2w9T4RJTAv61MyT2KKTXKeV3AA31mhYCao6sGDnsZy9uF3HMuABRWkJ4oJpn27Bz8fy",
  "key18": "2MARVPcG3Jtshp2WmTeAxqGF1TPsnsWEcdpfnMbJEvwzx9XLfBoZqMWMsfGZ6CtpvAgyNisCiCcBUb5hoXgx2jaf",
  "key19": "63Nw8KjyYGz1c84vfL4y2SUAv21SgaZ1Feh4x5ez4DD72pcCxJ37ps1oU2G2KRiFfSW34Hx9aotgNHMFdDVtaYvf",
  "key20": "2z9ztoDhkKPxr4uC2uogxYjTtkpPNnPjcCvFBkbS1CUURfCLRcpxXHxmrDtjpWW9YrShUitCkYD7WYXg1xbFsfSe",
  "key21": "dwNGWRTFsYSyf6WNJMEtNJhE37TdAmqvjG3y1misrTCoVj7PLWyeYBRm9BnHwrHymjHM7AcJGtqgjBkeTJZ74yH",
  "key22": "agXezARCiUpupAGjyXhcR4K3z9UbDiPnz7wzppiHyFDieRLCj8ztDhrciLnRRvAgRos2RbGyw5ebCHq6NDkwwsU",
  "key23": "5sFjYCShk2kavXwknLpfyzhyWXbcHL7VdVoBxLp11oZXVvwr9G3FbosETZSMXiKyWT2e6eq7L32hnRDbZjgSSogG",
  "key24": "2yFsBe9W3wQ1yaDRGdFskGzHA1dRFiLSusJteEP6Dqbr5DxUKCAUTsbNomZ1zdge4bzAqDGWGvvDaep74qkzuDWJ",
  "key25": "jCDaxjXEngKiFFYtkzZnG4sAA8sStA5o1DU2PLRr2uLD1Ro6EbnNfBJubQKp7fFrRb4svjdBsvyfyzP75MkXg9A",
  "key26": "2d4WVUUuRMf4DJ33kdY6rXBszn2aTfnWRXyohm1yXjvqZ1bE9xMphs1oZSaoVoBrfAVQZ74r4RXhb9Pnx2oYxbup",
  "key27": "5e21TjnrDWFiGiGvgk7kemBkaxXFtCh827QPTwPmFBKWSwNrZRxuKgDzu7wdzyMYDdmYc4m8oMWqJaZ419s9HJqK",
  "key28": "2gDrYHosDYw2gnPfGh5MvCsH1pQTwUfKEWYdXz92tvwdAk5nWwq5v4fh117MXE7xA57nU44XrYoEzjMUmKhxbgZR",
  "key29": "YJD9eTKKK3PHEKbxL7e73sBcbBh5795jFVH31qW1Nv2yWCVLa8eM9fjiEY1emyGsWJ96yCEN9SPTfncWjpS7B4L",
  "key30": "2z2Jj4CSYBzKiuTjbpDGS5phzSWxSiy3ZPgMpqeRsQWZFGwEh17DgJFwaAoKvj4AuUbWcjsj1FYXqUkw3fjdDY19"
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
