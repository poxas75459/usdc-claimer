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
    "re4bPmtA9bbBA68R92AdnjnazpFgzfqMeeSBVbEFMuAKS2E1oKaWb7EFzXTpTQ8HSaM8AVU4nytMHMGk11XX6Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyfba62e2sh7F35D1sV2XQZGyuvGaGgHE3RqoXp3Jt9NbyPZUjzMSHA2BdvyeNXKFouUuKicgrqcgrqQjcbEi3v",
  "key1": "3xmbVMmLJMKBsUKfAJs4md2tgJCXRRtPkrcw1ZmzzGkC1iMiMrRjc5SMrSuXvU5LrXZFRwdD8Q7oeT7E5YQ33u6w",
  "key2": "Q7K5SijF84UYvX8NJtBP8Kbs23X8SWkv1U3tBri9uYsB55CX2pCcHRqjaTXUy7XhRfrPb7znbfp2UBMq4ugkYx2",
  "key3": "4gSs3qqXxmeKc7DJA6tTX1JJJsZKgRDW7rq3kcYJNWc2Gg8BLWwmbaLuSVfrkUZuzi7tVDGA4yjNpQgnxvFU9StH",
  "key4": "3MRgc8wAkXL71TidmZ23WDg8MUB9jty9SxG1LZNksNaZzRefgvkm9VCwMtKVyVUY2CEkEAkm2CdteeRkPUvE8Kx1",
  "key5": "4u3CeNZBVLSVNS7dLrpJXEMp3mpHo6Dxo7G8WZgGzkBFFKzJp1knAqprEZXNK35bBsediGDzFPnPQSZNazMDtfuv",
  "key6": "2HUtA1bfADoyohWYE3kwqQnMBpe4wna1W6mgbFJqdbgs2U896kp499FxwjJ5Zwoim7TifFqFAeRdKp99HbM78PJ8",
  "key7": "ZWYW1LqtxWf79P4Mwpz9RwxpJq7ZKtkxuKqXxT5pWpZgPApZNDL4K2xz87s76NyMoGMzCCiaVSk1UXF5PkAPEBh",
  "key8": "3yszULyjowBzhUxKfb1HccPHSC8wtUGmAEHa9EBYnYZPyojwnfP1oJePBSrzn2C9SD7QCJu4ia733577X1QFnFYw",
  "key9": "4doJyJuNWqGQbH7FtKwHnywzV61Rf1yZWohigekSpnB8cQTY79DxjYrYEKAMz13n2VQzDZjonDGPntF5xCjyNA86",
  "key10": "3x4ZLmtCzEWaWBawiNiRZ7JXQF5CABYDGs8oEAQcev4EmcGvY6tCpgA7n2PBUw7YP1nxVT6qANomKF6Z2w8v5mbP",
  "key11": "2QdCfSLX1nEG7KE2fy3Qi76Wbx6tR7ZeDaT6ZUTvyW7VcFVUEpJWmwW28iEzkZuPBsbERE34myDrZCPBrFG1JmGY",
  "key12": "5tUUfsnfWHJ1xmfoeVEwpZG7nKRAuNJbipVT54TsAqYRuYXHLJPjqk4mwmgHhy2cf8UWv1KZYkTMSpF7zCaoeSit",
  "key13": "3yUUdvf762iUiC1XxT81Y4tsELS4s1Mqr65xPb7GEU87e2prMLDRgtZLHormdUDvQUVHQr78jfviNf3gAsNSNsGy",
  "key14": "5jeb63ruK6pbqV6Vcozx3UpTmAidjXWkjuJCHA8JNvbXwY6oE9ARmZKuSFZaedHVp13cAjLGPf1X1BGZXQKgrkZo",
  "key15": "3QhfWgFt2dg21JQMK6oiuP6Uy83ZJUxtY3PwyCSwxoA6KASi3zN22y2adWYwvHJsNBfdNgp7pAubdNLDum2qVa6M",
  "key16": "5oHs7GUq3ayFD1MUPpgSjg2sF8F6Yg2Ppmc739EJE2Nbke7xtZAMoQma8JKwwc48g4SAMJCL24o7ktG47SuBzthj",
  "key17": "4s9hHiV7rVdSeEb1N8iueoYnaVExhTS7FBTACFzvBVQW6kwqMaALd3BNnjzWJeFq8TgRywHfRka5h4VzvRhNMJ16",
  "key18": "4cTsSpwc79Vjw1u9P3cGbPKrGYBkedevsjjLYpkb7btmdWBerehPgyHmJDUm9HdgNJ9jA8kwxLZtJw95qGRF1gwu",
  "key19": "3yTg9L6Y1h9BvWXPxRN2QDdGgfU9qExNuAACEgp4A4gKAEoaaHeZRRhfTzQXymdjr9nn7FQm16H43vKKR3Ueiuzd",
  "key20": "v52hfszJjCGURz1BDU2ZnBAqretjHEZN2tfjahUPDZj1RdFQwEz8pvwwibZtwpGJi5giBLjHF3pTJfgVgWxuooJ",
  "key21": "5Vi8akWPS1GDdXzgNss62Jm9MgLF8eqd1E1i1LmSEbqCbspiNXJDdwJNz3zMeYua5poU5AZ7M2wcNFP8uaEfvNMx",
  "key22": "44SgdhKuoK3HLtWjBc7CeC9KR12oAKVZqP8XhhdhrpdiXivSc6W59Wa8xAdySRmzCwvtLBCGiUnUu2XdzK6GVYPN",
  "key23": "5rrpLXWHdtTzRe9NCsXzfwvwBCtm1Qj4TAA2QDFbgubDYqZ1Ray2qwLJzpyr4ihTeh2cTSoiHzxRKjtydWtDtCQ3",
  "key24": "kestVRN2y4mqPUKFLt9P9d36KN5QMKSrTc1rvhDaqabbh3SgnP1hACmC97N6CimCi2YMbmbmQ3R2YTYNE8vdD6g",
  "key25": "29mhN4fUF2fdzko7B8EeTJnjHuNgkgqhjL64a4SpHLWzhihNhdRmeFWwMq5T2rWby95xd7irxo1Fc7QJt1XBfXGB",
  "key26": "2iPS1t1caBkqBnVDgGRmsLybTA5SzEysYfhhSWCh71dJcn2caqNRbkD9BJVkri8XAHU92F1Fx8g1SaC8dLrwa6ee",
  "key27": "2AsB9vYz8MV8ZXvwyaH2SftqXE2KXu77L6t2B6d5mdWihn8shg2gkhZXXVHZFeYopzYRPX7nKZjWHQZdwgAwofq3",
  "key28": "54Wkdy1P3J3d711aGpyeXJ2mUhqMVUL3f8mGjHjabkx2Nj4xVcGuwbRHGtA1KW3FxLoTa8MV4Nm9ymMnbHdwHCWe",
  "key29": "5qrf9FwMZCUZoVmbqhcyvwA1aqfxMNxFJMXKSCx44LwHn2Mqnb5sT5gHsVN2kLYSBvExXdzLcA2sU8mfjbzmWxgn",
  "key30": "h5phLwiLb8z6imRBtA36JtFDwqXM9MdTnqnov1fUetHB8DqSq5kkHd48kbK7nuqh4BdeyEDyhCDLUR7t2MGTWHi",
  "key31": "5X1tZ5KsMg1uB3HNPFV9x5VffhvysUAWqVKg3h9H2TYgZJaj7cKEFJ1ERonRyMnzUq6jvyiiwWF43jDni8mbEncW",
  "key32": "HpLwVqU2mfcNFp3PfHssWVhF5T9xZJouK9fv1tj5LCrTFzMsMbmLiWnZDW8mzhEfoN4AuHkQny7xfto5Dceir5q",
  "key33": "7gW8EGyHnHGayx6CGYtpSDDsrERKo49KCDaNEYTQM6kwY1eS56ggNd22ujEo6gKLdDYZfP2YC9WR2UC6PZ5jms2",
  "key34": "rr31ixPgQXGS7ubA9WznkG2DKg9TymSBdiWAG3Vvo9aypDxPebTQLDejteDp82vfCNGWLR56gQJ3KVtMHySGeWa",
  "key35": "4sGX4Hht6ftWGjughy3HXXFnGSy4swJk2PmtuPqbDhkihhS8CBBhBUuNmsJZxH8Cc4JbqLPwJ4AcjMaNq9RpSpmh",
  "key36": "64vCB5k51EGvLALuTtsK2Q8RfFUQymdJ5TjTxK2fXJ7gxN75CDtkZiXXaHQFCjvvnvo4sEc8qUMgvehHtoe9BVBY",
  "key37": "3z41wn1bnTwEaX6QWw8Qg9MgMAVR8cLZifw7EzA4wzssVE2hTAeK8eg4aZsbQVoYcYw5zPBsPBv3Vvp8KZNbhDvy",
  "key38": "4Yx2B9fWK9vpugvM7M4JVVdX6qM7ihPf1qEMP6qhnLxkVgzvhmzzCbspqUPCezCHgAH1DCh5YdhRvD69ucL4ppTs",
  "key39": "SeZ691szvi1dScMRqw89vPjwzEY9196ztwMN9MVmqowmwoDxeDzesZoTBXszAsQZv2XbvAJ5HGPamvniU1PLrgw",
  "key40": "3R5jCuRHVkXu5o5MmGCMHmCcb4EeTR2Atnmr7vGq2mDey6odEbVXTqjR8sbMoGq8VGM5SE2qys2oqGuCVRrrczrc",
  "key41": "5xGQSEhmuGHHVjMGWVjB2aW2Rtc8cYMWE8xRHWsKPLTdPFgGRopTXJue3Lb3Rny2PaRHhsrzQx2i6f4BbKf13UMv",
  "key42": "5YD4DsQ4nAnkjWsSeC6KHZtSryJSu39my9A2fMLGXjc9DniPcaT3bCV3p2KStvLotVdwmesg6k3uVZSmc2yNcegT"
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
