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
    "mxX7kjbVh21vit7mc2ymwKwGzoLEosJezsw2PHh8D2BeEY3qSSNr8s9LK5XV6yTemqjiZFA4FqmPxwhZMXAhiSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hM5CtZ9Z2TwM9Sgxk5FCfthtY8Ze5PsPY1bemhfJZ2UqkEjKke4k6qpNKY7ipKEoFqruAeBWE27hq8dAqwiLwbc",
  "key1": "2kTD25B3FM96hum34Jq3ziNr14xni994vpZoDgP4jMENj7g1xdFSPtVgMDuHJTMsrKUm8Vd5oeJVikMZ2Jvug4xN",
  "key2": "sFA5QCnSRHBmfFKcNS4yzSkK2h8hrnXtRDEzZJ5CawAbX1owPmbjSgUfK7xok8hWrLmQsook1yp4HErApjurW6h",
  "key3": "2Vsx2aBUUU2EzHKp1esnd11Ymr3pV4DqjBu3xNWu9XEsAXaUWSSfebcjWsGzSP34rsdT4UWPHKawUTpCvxzt5HLE",
  "key4": "2y17zyutNALUzX5DQGgomy7qpKhgJWY78zDFeuGCMeGQ4c7hHWLGMi8RcacLJECLTdWnmmnajT6TF9eNPvG6f1Td",
  "key5": "5ub1ZnpQ1X1jC2FiKWMhoJd8w5bGt2gRCeKYy4sEGkcVBFAtiEfuqjwHjxBTCY7UpQu19YrmcYjtx7UwVX89vMsf",
  "key6": "5HR3Awt3WDsG51yiJahmy7YGJ85PFPWCV5HgYfLkWwUvDdWxBrbnBGQgq1Yt5tRP2StM8xViZhaRUGU1JAtHTMdL",
  "key7": "r58sJU5MKkmCDmPWLezinSvStpL7Hit2F4GWq85NWGbh9Zj5BbeUNL8gZG7W4kghRwV41yypKkmczZy3bQihSCX",
  "key8": "2bUooqu324Pjw12oB7KMq7CPS9Rqdx5Bx9sc7H8aVzVkR1qaiTnW7X8ghkUgpNPp2FjaeTSwehdqVFwmeYLBe5Ai",
  "key9": "26uPVifnv2vNL34N62n1b7ggibUqTEiw66e8xezmbVNZm6gakjXLvSmLMkZzJJemZYwhPx7rvRAeog4Rnzye8gQb",
  "key10": "4ScnAJ5VEXRTYAsMYCnCvMAkyrGkD23XcJ88nq5GgofzBqsLN3mkQAhYEu1cNs6Aoqy6WJARTvCu6WRrxMSNFfT1",
  "key11": "3K9nMVWWdK9TXauta5xw8jd3vcdaeBSJ5gtc1ovowXzTxDiCK7hiBnv3vnBTwmWowNyN21u5rPSWKcmivZJX8bsY",
  "key12": "479UbJ9TWebj4Ry2Ph3MCDZukJ6bahke1jszyjGHtNJ1wPYN2xBm4nb3yCqZgA912WykyS2brbYMc9pEeKJpnage",
  "key13": "59udVKAL13HtuujYm1SEaqUDX7wWwDZAoDw1oGxSUcpKRc7LNPrYxEyWeckB3RRuFG9NxhUL9KonAMKoNsc97bxy",
  "key14": "GZLW115QP8DeEjBHKjZprNGJuSTamxNL1FocfeQXRr2i9UkafNns1P8v1x5h87pSzxY1DtMWYzAgi5BNLmauV4Q",
  "key15": "4hjKFSVC1aCDNUhxLUd3erXQF6CMvgN2KYLvKRomzrzAdX1PK9AampbBSPKvip82yiU3ZE8kAAuRcZndfErBHCS9",
  "key16": "3QnGdmbPwLqSBp1rC9vrpMoS88QaeEfskPfbDS2rdCzEDfz521LSF65Qr7RwwREQEQUm4dwhnJ1jZsaLLDHUiYo4",
  "key17": "2ajfwYEcXU17WTfNMtb4gEAeqX53iZnasEfR64CkN8D9F9EMtckcCoppRBUJwvXFFVspXgK2cZbFQqyohR3vXeEP",
  "key18": "3skiH2oZNiJDkDexnv7jMPbmtXkEsNb4K7KuEYnufjEyo9fQQ1Uv6r3RviaPaXom41oN7QXymZhJTZFaQW3jGXvX",
  "key19": "4xLFZetzHebkbspJrh7yduEGdjiLLJhifDSqp73D4MSE3ZYDrzDi8XJeTKBQus9W2K5GsQYRBbT1d43fQ61gaYio",
  "key20": "2aiAd6Vn3W38X17QJQJHwPpDmhHCbfcThKZeasHP21brXZDHapEg2azSwiXQmx6qVqGapWKRKjvgaLYsVgUUjCgZ",
  "key21": "4fNAD19pFPLbdGExFXGpyTdzkLoaGLWqygb8PZHamuq4WvqSMN4oDwUVKB87Qu7cjdDcs63mwmXPWvbcN76TU9aP",
  "key22": "2uPmRUAKDmgPGcf91R6qG6jvWCdTBsmG6sYp4MS86CN8ZUfBZUaP15fnPpd1DohwmKBeFLspaV1oTvE7CHZwvQB6",
  "key23": "2dnzQNxmAYWWJ5rhSwScBUZE9KjtmKsKqeEKQuMXh6hDdkNKm9JWEgjnHExk5DLqnW3wNbTwNdqE8LBfLwKej5YJ",
  "key24": "29z7VgQkY3NrANevgJ8iGs39JHoediMpZmNXW14pucyEMF4yfYUoQY47GgcS6851Yy2qQQDx5zZgGPJ65d1G7iJ9",
  "key25": "39gQs6sFfLHBKBCNDKyCyu4eunzwt3TL5uUry8iDyWpJBmdrDz72wbe2EuPwAGRpRh4khyb83hU41AQE2UtbEdnC",
  "key26": "4dThj9vYyruh37o6ZtMgzfhmHXR6DkzJkk5byZYoh3DCLSixuQ8GUF9S6uCG1U5Y2Lojk6T57aTdGUDsXpxptG4N",
  "key27": "5PXTLWQKEBKi4ek8dsa3RCMLFnSuYyU8saASafJR5BrzrP9Rez6vcPF9RSTz3PbVCHdLcB7JDvWKywYufaHw13hC",
  "key28": "2eYEPxi9PK5amTnYz2JskNYVXrfw2CvE44MiJ2obu1EjU59UhsPfqXM3RBHDhxzULwC5gUBJjfYaYqd8B2wPF1ni",
  "key29": "5aVSsGsEgBndm5FoAHUn8M4AUpoEKWR9tazBAhfshJXbpmb8Pgsm94RVpUo2cRHERBUiHXt5ApNWZx26SdH3rWJK",
  "key30": "2VUuDBvAiRgyfB8tuxBuFKZQqWj5mRdepTCmJ4yq64NjCEMGW6q3zCrinagGKVe9BoZDqgDQ2Kj7zEBYyrEayvjn",
  "key31": "pU4ozDh5bV3h9BGET1EYYnStFJUGuPRigLV33Pv6iFbfXjLW49tWqD7ew7WtMyumiNYCvooSssyCod2sQBdgWSQ",
  "key32": "5WtPGY8Z62kwdfa6i66eeGQU36R9cvZt32VC4ZjqxaCsHC6DiHodmkf2w3m7YgS6Mb7Vgp4QWUDWdiGgM3BFG7mW",
  "key33": "4YBg4fiYDXursWHY5qER2JbvRR6FbndD88jRaPACNpyyECaV6dXRiMg9ackZdwjkfocW4A1KgzZw9ceRR9MdModw",
  "key34": "4NZsD3dQ1ZZsgM2QQ5VFiii8bcwwrfEM27nytCHQJWNRwYk12t6pMfXBMn1WTb6YRn44rz5dGPKqVU3HnyeZSVZg",
  "key35": "rBDZKZ1tQHffGLybcpahCoEu18es2Du9hGa9NpYonqQobZwmu3JSjVkgz7ifZQKaLyz2RVjz8mEwi821iLPU228",
  "key36": "5gPF3Qy6cYcoWYzkVHfmzGdBh7VjA7xuZtS4SnLNcHU8gXrHjZ2hGbHvsWc68VQExjtsgLLhFfHBrg6CuNfaBiDs",
  "key37": "3TJFPF1kmW5JQ5CLjTdVgP5v59mBdjkFvRqszmsTVJ7Xew63Hs53CDXWxPcJKaskyTFuEu8x2DrYvQ9RwGQXeycG",
  "key38": "46Et6gjK63F86winuWxyJAhMnsc48Jptkjvy4cY2Xk9uGog3mxw3QNyjKD7sXdHat5d13Kwqia6jDKZKPrCn6CmD",
  "key39": "5VSU9VcbyY5i6xkDhDZ69YgQ1viBU4sHaxRKavdDdkrV1vf41qkYHtJsm349uY2D6xaqKGny4bZ8ynw5pLgx565i",
  "key40": "2NQDsSZUW9PmRzcB8gzeZMiQeaB632Q2BZFmeh8d6mY4ihEQ2fs1hNBzvDf5bYfcGs9xiv5KGe2xsgPVqrCE45mp",
  "key41": "5XDHKsEEg5izPcCo5NAvpWiKPsyeb8y9NoFLBdYEfRK3ketQRzRajiJN2nPygRN3TiPHfYgW6g7QjDZy4EmozwqJ",
  "key42": "5VZubs1rexPA4GFp6c17EotP8T79nQKzAWQ5ECRCFQvSYcqjXxbnU8kvjBYxuYMFHVsEewug9cgtFAZs1VWkCMjT",
  "key43": "3BDVvs5thWqTVBkLPz74AnqGLoRSoaGZz5tzoN3Hy3qDDDJdS8VdsnmK5PJdGDsHcfQzQNQLvjPrQk2qaJ6g86Vz",
  "key44": "2szvHxqfWwYRjfT7ivRUnbLzk9LKsGaiaey6KokRqvSgpwDzXkS68YBX3GBByrFgGq9QQ4TSTgVSxMgqSxhP945U",
  "key45": "7RXKRTx3b2VszRgLNVKRnvUbBmZgZs5VZLbN5Q4inm2xdDcnYXEo4No8Qcgv1EGZ6ACaQHTfEvxoxekTC5yxRgC",
  "key46": "2pzMimAwfgiAyJZVbzvR7EA94eLBmGFbn1Qo8uQdVyoEaduyedNJRfqrm21Lp71XfDrg235dgUGRkFyqiqdbFtr8",
  "key47": "5QLwmKh2S8fjSUERtr7iLFS6X9dVwdWipTro9hqnvq3hSpaQo6sf7NDA7bd7d2DuRy335igG8rjVV5UKf8nVjDTa",
  "key48": "FcNT53SNMSUKHi7fXxM9yV5U1YguDx1nFWrqj6MSAqZfPwJTnWEWbqF1QsxBcKFpxbAevKb7UXu3oV6KWLuScQB",
  "key49": "SVisCi8Am5MrWZggxga4w2LEJabPx9vwDQvo5uUCcxgt2uRaGnC73mcvgw9G8Y2e3eeJC3A7yidPowAfWyMJL4x"
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
