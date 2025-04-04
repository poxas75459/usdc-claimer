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
    "5wTcuWrBtwN8ruAavM51B3bKsHkYn9m5qB8ZsMdm8WHtDRL9yqCWTiMR3h4sMBgPRU12DoXSsaGhLyeRK3UgX7Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHmHsQ64FDj9pqNgkzmXe5o1PbdikUARLxT8WidREsCRKSThQNj66UGinyV6nZjsA1Czk1P7sXQ1r1txP68tXA3",
  "key1": "3Uqab5pQSr7t4AEiJjNnRs1dsqmhRxsNtgjfVgrrHyzoAwKKSv1PA5mLGTDaVcPpBWxyrzd2yCCFG3D23zoyLYe3",
  "key2": "LdEi1J46oPwbEL77vCdG1BysxnqgT5iEdcacZV2Adm5hGJ9DrR7UCNUPJkAGvx1T5oUKuqXmfF6A5ZEzRTuJxc3",
  "key3": "ESSkYhf2FiW8h4KFd7q37XZHAe8DEYgCTuPKWcvtpvXJsECin17ZqHiBkMukLR6Uf4MijRbbjfwzcKinUePMjsf",
  "key4": "34pmpdruRHq6UMvnXGgHxc8srtKjY58rjTGR9gHLTrtSaPMHodtVRpiaeRc7rEwHiStk7yJUqAmqffjEYPhzApmN",
  "key5": "5voUMWRNXDA9Ab5t4CBbhBy15vg2BxSyaDitXE5K62RYBV1P9XSJZeaoDCsHKF65se2NQfPKpZxayn1TPW6fr6NV",
  "key6": "29hRjR8gFLTAKTnRsTveVmEorvwbuBF4eiKybMiMG7yMWNRcNZr8sp3QYV6QuBYQtLzYL3GoDD6WC2aoBuyitEkD",
  "key7": "5T2yyAk7rg62FMpCGry9F5XjTCny2vUQVbmJDygoMtj2qyem8vXRshH84rCqLUDnmH3HavpZJuwE5T1chyxqTBZi",
  "key8": "Tk879mTUiFR319Mioq87EJJBRcfCCMr18DoaTcjh17wRzVZi3CEjwPc5Sq2CvckFqZ3rpR1VRZQ43kJCqMheQ9K",
  "key9": "tcjuN9SGyvXBd5DDXUi9hL7M23prXueVNLQPqmm7dTgANmBGFmHMAdx16qT3MDM3LoGnuXaVRgD96ytPwUxCKho",
  "key10": "34zUZiRT5vcMdgRud8wvbhSe2wp3a3ecYEq5xTcoT9u9mbk9KrjGLoxg6uMtUWmurVziYM8UM5piMcYgE58BHod6",
  "key11": "66CUu7DrNS4y6Z5kfmBNsasZ7vLkdsJJEPVAynBpZX5CcEPSP9yFYmDQ1eR8Xxgqk25jaXBVKLnVLNi1HLwhS8EP",
  "key12": "3AY1GJ3HiH7AEWHidJXg7br2RR5urbE26RVjQKsim5WqgnVdkXpRro6RazhC18ao9g9DLNSJJFVhZkQ7g7eEXuFw",
  "key13": "4o3D2UiGYQsg6UWTfDEtVqSUD2NPg5QY1mpnZgHZgpBxtoAo8AhhSsQrhdw7qVdwYuWHso2FPUr1yapxpt7DaDPq",
  "key14": "5yjWBheTsh2bhKrgQz8YhVYZVMp4EZ9zfHKP2cJXzHxUZN2Uo1Cw6UBhSGPkgiJcut6VFRTUh38u1zRWe7LiohC6",
  "key15": "2mqq7vxWWaeS1MxaGUqsgqXDN1E4hDyjrWT2i4wToMmxbZbyUGzq2nR2VbHvJ8sX51erfb2U1wKd82N8CRPgoAU1",
  "key16": "3UTogg3vz9yKJcGKNeWE4xQHcf2yHu4aJ35chMDjqkeufrttH6qiDU6h8wQBUM9ozBEGzuKGm12NK9RwKEnU8gYP",
  "key17": "2iqXp5os79TfUBiE5uEWQbF9r3KG8ukwXSHQrtXap7rF7N7p35xhyRbfWffgXA9VTiGZ5uM8QhZGTjym2AeX7KM3",
  "key18": "5hESTrn7s73VmQm853atbCAWrBMy1YQVg74psx1DD5bvmyyy4aSEBeyPPMQhn9pJBBXEubXDWA5GFPD4hQBy7HRu",
  "key19": "352SfzakzUw3cspcAoXgS3Dh1HPxiGnFWRjZvvVCZLzGevWyzKa1heZ2wWuKEJD8hxPFAGsbng3DQNrnjf7ymeci",
  "key20": "oWAsQ9Rt2y5Qtn4bwmePRsULYg8cMQgNr7TeVj8busDWvaFTCHCWAFZGh8NSChVcVW4h7WkUmrbK1UR5uZ7JnDi",
  "key21": "3JJBqTE4ddadyuSfXkTkZ6JDeR2ZScUCBupaojwNd5h4Kgtn15TzNmPgmnW8Gh9SsoYd9H8MM4hHRfFbT7p1Dq7H",
  "key22": "4dtBijCaDQMzirXZMaFLfJnZV8BfNJw4ng4ZKrm3G1Qr7FM4dL6iTAhKnaDyNrahHEB66c6yAViUEuC2z9HVj6Ks",
  "key23": "FDmg7v7tQ5WxjRXDNyhTdJH2GnckmYCQyUPY1WzRFeEcag79kAYogUJCkE7CmCEBCKBNvUbfrJZ3qJz1PbDUBMB",
  "key24": "4TJnr8rvy8bdRyvwzHCoGLNcLoKw6vT4zDY2yLphPqBnu5Tw51qcZXHTE1rGh7sVbWhfoHezZmBBciKegiFdiNdh",
  "key25": "5fWtihMGtK3gcQWVAGxcoN4u8N3fgKeY9sNaGMbJ97FdiJiEREV7LqzNqkF9hTJSqBRYu5Kwv87BXrasP4KRtxc6",
  "key26": "2rKxScphoBUskwVDL56ACTvhigaAwU4kZG2ucokL5kZJMY74kt39dRPDH96kmRp5CAuZXG7rGKrbe3gKqY4iEWEB",
  "key27": "5m7WCy1QzgBNasNy7oabb3Mt6uVSwXtJuGaaiqDQkjgV4M8dwh2jv5xLp3CvAF5mAyZvPMyqLgrXmyBeXiCzEmRy"
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
