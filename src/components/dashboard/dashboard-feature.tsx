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
    "2BbqYfXmcefLrVkR3NzkH5kxSx86yRNp7qRV5FwdN4gsa9Q9DQGZSdN4VVSwSrwH3BraEJL4536Sb3yhVFV7G3vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYdBuy6fgDxkFb9EN2LVsZXGJYzZEVJAc8SU4r7ddd1k5UPRxWUPaDggpS2a4tsYc9zSbo1zSPKEEJW9CcnqHBW",
  "key1": "3MuZkYtwQ6Tefyz36KqmGMpxzfiVAnLiap2Jpi72BKRn8un4r7t6pfSExpBLR5P4iqpfzh1DrTrZfnDBcoXQfktY",
  "key2": "2DsQiYTh6hD88zn2CAnbuctpEcmE87yfi8Ro4VeXgNYH4Y3aYCpWrHhegEh869XXFh51YRM5kw551b7hf9pVZLV",
  "key3": "5FwmEr59eoGsTotfvv5vQc6d7zJUBMaKa36APzvFM3mkxgDmVXgiJJxLHUrGMudecYy3zT5RdL3a7GiMiijq2wm8",
  "key4": "4us9GQdQoerS85vWUXt8cC5QyNcEJnzcQTCJEq9XjgNeDriBV6S6qSGCQiVSHiUvToGXgqZ3f2MT95rvMxJbQiS6",
  "key5": "3w4VeM38nZNBZM881XByaei1due7FeZTbidPVpT97M58hXUdtLSc3H8ada8fzaEEBPdS5Zq8ozcKjbgYTMuVhNbc",
  "key6": "yRpmAYt5GvqDbv86QzpMeGohJFgLDRGXtKiAzJyKih4TT8KNkAXbeHYpamZYNLfbtALDPbVj7NZRreKNaAYgNA1",
  "key7": "NznEpgbykpRbwqQWaG667fjqshkD8aNY3Rr8fbhtwrjScCnT1oRdFh8gcRrVCsercxrzxVunSyoEiNLh4WbxSQX",
  "key8": "5G8t12ttQJVk9fza13tuPdacZR83rJn95KEvC2Rfs7cyZQsCMXvnNiRPnpvvHjhAR4drdtXK9dEwfM9zGrJJhoKD",
  "key9": "5BaRbCMP1iGVKkCjvc5Ek7xDqQgHHGHmcUqrEcEV3gGfsZhL4QARA9eAkrmz7zDRD4tL5Xr8B4mZSAqcwrwrDXPy",
  "key10": "3RYUwAT52FoewSp2DYeoj19Mz2hnxxM6gq8Ms6gk8THft5wBkUDh1t4SJDPL1Rbge2zxpbwCEFB3oVBo8CySbcbp",
  "key11": "28wfa6XCLKqqGeXPiczNRJZHGrnxa3QPfDkJ1Cr1AGPsjvdP49j9sT31fAzUDkgDxxgtrR9mMdto8FLuLjm59wum",
  "key12": "ZCaVmJ8qSTiWC485X92Le3gXnb2t997wg1SKSJDmxsy2BA9iLjyp8DxbEiYhfCzpUctgfctpR8RAbigeCN9arRN",
  "key13": "4dtRNukETi9B2t4RexDcu4Mm9Rp19WERqKu6NQfnPe2H2NL4HvST9iVyfDfhS7EKm76c7J2NSMmyZKPiYrE6vWFR",
  "key14": "5QUxqQjLhE8C2CYwjZ8GX2GsL3CYsxVkpBE5pvezvPwzyUyTSpD2B3rCa5nGzy9GY17644NQX28fdaKt6FhWfUXA",
  "key15": "4nu1AzhqWjHzgU4wb4EWH6Y2AEQ7YSpboQxmNSTZ6pn5QnKvqJek2QMQ9y9JyZqdAkYCuFpeaoL6gFbmMtUEaFnd",
  "key16": "3yn9fVPiHCR4rsh9z62vRz8nAXRGScG2j8uoyvo7g5HFaoDFe9SedQJSXrt9ugCbPBibZeyARBggMKnBrX5chsg",
  "key17": "66ghUR7pfYj42yYnj5vphEQjPcfVrDWcNpdxoFqgDvSbnJwYRczaYfLQnEvUUpsjZR8eAkpue7VuKWhwfpRKnz2n",
  "key18": "4bTKp3LTcCi5ZpjQLBbMfRpfgnAwzPyUrGjQSYxYR45sDMq9ktc1mgUZcvJMYfpaTPEyq2WhDDwmWUZBNbfGCFSU",
  "key19": "3WzFE52Jy9ektSWPkR2XF4SAn5wxoBHQpzfC3HBegVmeLED3b5DRWCtDodndjwRK78uujNbKKNrPj1kxuocHJ3FZ",
  "key20": "uJYWMD4GxqVNQiVdJPWpGuTuKs8bMFtPvHvhUfmQbjfwgtXc75iYtVr3oeZ4sCeWsRN8oEE2XSxUCiawvHVBQJz",
  "key21": "Zo8WhqHJ868jKJrjZwomQqiWsnfZZWGcrjHrm5BufYG7H9tCK92VUC5efZYiGGruKa3isvZfyceRZyLJGRTT3BP",
  "key22": "5cY88DSHMU5FtXbRFcM1wiCyi8rn63UJZgk4DfUWmEUK7JRZT2uRTzZeAPsXR9a23gat2qFDvPAQtaV7eWifDtXR",
  "key23": "2JYTD2bbyx9piGA5BP4mwP1RhUFrfTC2DpMRMF3y5E1QReTjbc22qwACvmYPtw6o7qJP7DAHrhyJgJkTgBSWgtaJ",
  "key24": "2TzBcCNdusb41JCqdstNauCSui7Q43h6MtqHDECH2UZoAnns6h4yVEKUUFK7gWjffVydBtFKsZo5hRPNbuMVFoYi",
  "key25": "2cmnR7W3RXKCzHAzWgBojSWF7AF4e7tQQy3WKtSszhgDhM23YGMebF32t3Ym3sMGrMzB6yrwACFfLDLQTZaND7c1",
  "key26": "syC2qbnjGEwKGASjEGZKS4hAsEssnN3cPNs92e4qd7G3USAEQ6UESnvEMKUmfjRmgA4dFH8JorPjL7ohRxTfRGV",
  "key27": "4Vf8pbTe72FfpGHwnayuhpRWtbMQ8uKC9ca1VB1yNHSfZT8cuDVNVaCHPqXyo1Wxmdq9yG8GSjHeDaBHqEz7kuBh",
  "key28": "6hMv9z8ffNKuEtfxxHSC58SQC1hUxKc4bsx88mnqsKXdaZhToXq5eaNerabhvYUa7x6A81i5gBQer1WmCNjzAqm",
  "key29": "4S3XRdEgLXq44y5JMT53nzZSsbZuE134d4TxZE54DTciRjxr1FwL1tjpcKPQDVxCG3TqbJmXNwDWMhLR8bHsi1MK",
  "key30": "2uAWoj2FGowvyyFH3PsfzPZZEGWFEGi7oZydZpM6oE3QZRkJsEN8H8VoqwecKim6ufiiMTgPNCoKPe9ceUsK9X2a",
  "key31": "3Vtp7mX4eQu85jEc4XYWZwi15ozyuoEZ4xWxfkkqeU14appMBRTCGVL8y3FeQCWjuViBwKCkQFgoEf2xre2FqXau",
  "key32": "4XmTZuVuE1BVT1UM5UkFgBtVuDMfHcSGUr3g7aQnSaUJkZ9E1uZ3dBnWTctHeu2v7NaqMFKGcMFkSkpYhSyd1Q1i",
  "key33": "3JLVW5ZCuvKaG4XQ9yAa9RCEQj3HEdmEQb7AUXbcEBMEmYqh7cZV9crKVyp7HbM8AMKMvfi3L4ZVKwq5BhZHSyjG",
  "key34": "2K53xhDC4npNw6mJ8wvCux93hGXxWsPJHRtfEX4P7nXhJR9K2iqmnYd1yG5XgTYmJW4QecLj9srnrWbHZeL1ooPD",
  "key35": "3fihqNpUyTtf8ZRfUfE3FLpgdJvsrMyiSHTt5wQ19teCPh7aKGPyeDBtinxGyyPMNoAAwsfDvjcH9BCYM4N2VXM2",
  "key36": "k8k98Nn78xZ2W6QoAHBXBisnTtjdE2pAbJi1WJXcb2DdG5eZRNCBy5ti7fonAeytXYdktqbquvcGufqrdJA6igw",
  "key37": "667c4stZT4whNAkArvGvSUjALmQg8ZxnqANNSMTugJMJ8bb9DNGNfVRHEYAjR3vhXoVBGUwSngDurWph3FsVPZBA",
  "key38": "5UTDmMiF3Rk5kAAiQKi7aFqSJRuKkiaAfsG6DqHQ4k74LeQb5YjAfkURAmY2Cx6dj3Tg1wB7XtEy8kpxQvwiDz3F",
  "key39": "3pJ5xhzkQYKX9i5m5iKtv1GyJpc5xnsNMRTmxD964eDY4X64EtJLBJkvcd1jgaQDUAgbjF1fWAVqarrpQTGmSkka",
  "key40": "3nqNW9M8bgJMH8fwAxULi9m2Ec6njWhLR7CVLLmjSms4zNZk7C4fVA1KWRAvsThj59hf6ejHSKHahXfEWu1F11XP",
  "key41": "45v63TndfTrLMeMSEySMsEKECH5oHuv5JnbZLsuUMJ7RQfqyYEtKAQEAoNdRUvK7yaes96zWm7gV64cYtsDygW8i",
  "key42": "641fv9nGSdMCecQBAJJRJqhP79rz53zCPXY22vmWYtNwXMsnivgk5svS8Eq8Q6zwaEKDJ92exsgkzg9Qga1zdNJ1"
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
