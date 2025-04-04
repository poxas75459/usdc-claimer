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
    "39TwG6fHFNbEpEh6FFJNsynnBVMFVDZQo4ERrJ7TpLLV6hwXazGPUVwfi54wpxcYZtpNjpEeQfAsU286PTZkJvLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ypDemxfGZWX8BBDNXazCAEwB6PAf8gSMX862i6HH9x8sWtWgpHVzFaCMErvNAm5PRMmZARLrJNQkoui2qzPHZ6Z",
  "key1": "2x5n8ekiR3TxpPaRoj32CJGYU7ynbm4fnH785CY7XVLjrPRQc4FALfN5AVcc13FnuzMKrq2U3VEba2cMrBLvk5Dt",
  "key2": "4uSxjT2Sd5PsteCAUS5qmkezic8UxpErzx4QjWJQsM15u2dA6xHWQ1WCCUxF17qunGaGELPqJs1vnvjH7zzPMRWP",
  "key3": "575WhEDkjWd3L5eqhh66nwShTtfAMVrdkvj9gjojFJG19rStg3Sd7X8DxnLhw5wtLk1raNZHEb9z3evnNqKT7Zji",
  "key4": "2QzTr4zZ5miSXJgaydJz7BTLWEYbu9zjjcUvjvE2Dbxu317kE3cZBdcQmKhJAkRPeNh92fu73tm1DnixCzQ1BCAf",
  "key5": "48yFM4sZCzQ53cLeRQ7iFB4MHG2TaSfPQzuy984MeYxPXyx7CaoKAmeChrtnvDAJACZBWnxHbV5RZYNvraBR8pyB",
  "key6": "3vZQC4vV5X3fkMcsYDSx4fh4mobgFg4zpwWQZF1itqykSmHjEDyR4jeGu8vkPymEwGUgMQHx2FLN2QG85BNvfEhs",
  "key7": "4GCkWkQRzPr8ythLDQx3BsKjBxjWBKLamwqtq79hYeprLXzhwb1YEYTLoakpbVLdjPHYFiwAtvzgufxxn3JQJQuS",
  "key8": "3gfcpyrmEERMuVU67QGFM5vrjfB7PXj1kFuvNXr4WJabmbC18F546kXUSd6M5fRBCbeLAcsHfrAaUHHKQMZRMeFp",
  "key9": "9XMaEUtZyVvP3ff1ocHuuGQ1QdPMptAnPZpqgnzM4qieP8WHLRvpqxaFjaCiCgwmyTNUMriH48JzVyQynkzAw5o",
  "key10": "64Rreo7HpibUoNXDzHiuie1yGnz6kYYFqvxzZQvcobP5cEmUkwoH54muGE1FD795YPJnhqyQCEER2cRhdYfciXPG",
  "key11": "4GExegznC361vi8gmyMjY6eVjrG8r4niBn8wKHGrSiKzKg2JVymiyfSJLpCHqoQdVdVassXZ6HbrbkJQD4PprsyA",
  "key12": "4Be59oJBdnjG8FqF641sz4BpaWDTcnWY45V9VU8X4c17SnsD3zJ1ptXisgnThRXWf9MZF1kh8F1fhGCEpGgxHVV",
  "key13": "BxUDJ4D7YM4QkerKGutXALaKUfLT1e7JGjVbgUUqawfAjc4zSVjoAoBgsshH1m6wnwANd9yFsqQHSqkeH4ifTwy",
  "key14": "3NUhLw9D6EYEJV8vk8WbhRgDwEMsqgVzcAkGbMXvn4BQBdeJPun77YX8jttveLN75wtTCsMEuj9v48C5EBXt6jiT",
  "key15": "kAMSohaAhqAVWWFt6KAHv5Gfggg9BFJQoWvFJrf8AY9BfuWE4mjQ6f6jtqnVw7PDCXNcdQ22Gr2ctnfzPznM4Rc",
  "key16": "45kbEg7KHcVEkHQroCLS2ZGzgfmcL2eapfuVEruG1TdoE8aY6GX1evaAhHestEMasvztEpRKyDfrbZi2SFgBJYTG",
  "key17": "KCjfDFdmdPBtPL13TrHGMjuSvRAGS4tcZDpiYHxknzCNKHWDxVSkSwP5L1BpvfYA9VxxkEQGJsGbYBmMKFRZULV",
  "key18": "4GEAmwhyrB2res3ArdvGkyDpvV4oh6sX9suyYuPLy2WTnPLcav24zSc3bedYhAnGqWEdjtRo7bPu9RvpXfAASnPV",
  "key19": "5vPzyArjWGbb8uwvSE3o4yNESQF95nx2NytiDNTbUAkSznQBijhYaJM7XH3dx4mt5Mc3wJ4U6pgzVvs7te3J5y7Q",
  "key20": "2tCoMPfXtVHZMoqKy41RZkXoN58tmrtWoRvgKRLnQyAFREfzWWLBpa1dg1qWwWwPniuzd7bESAZ2eKw4HQSqbomq",
  "key21": "2azDnUzPzBdXedzjPLT5LyJUCFYS8nuTiL3TqJi83yyfmSHKuarcSbjwqKehHHFYpZfB58Ak2hQdYw7jD83EPPia",
  "key22": "4xR756Bp13XG9aEHdvjoP37zfYra7wodrA4k1zRJx76gQ9L74r3mNVA2rsugHDVDXtdZjGtXWk7eyGSzXP4iQqCe",
  "key23": "2HGj2CFun4LaXtzvVhRagbUA3e5knAE6Z5YqCe9q4gBNAutvEMG4sZipkJbEpmEtszmDfgr6s9wNLNzg4RQxQ3Xf",
  "key24": "4fMHHHbDqkLsjEogWVJvGj9qPZMk2k2CuJfDgz84YBzmueyw2ZPQuasoprtL3L3eaKVRUKokmuTgnodvyfX4RA87",
  "key25": "48UTxxGiahXYKTEbJTDBWccjpLVu4Zh7mKnNXWGmphPTQDWRR1LQs4TP4usSrdebTKKoewSASLWfCC4mQDvK6HKh",
  "key26": "2DTFJg23Exus5pAxBJWQJkF4yciyMZRXXBwC82rbKHA61LPzAFZKYJvcjYc6qbFV3G9HANY7RkSVLudPZmmFJCuR",
  "key27": "51B9aP53YNYF3WpLAXp8WRpVTfmv3BUYcjqViovNJ6e7kT2y15ThAoTYHoYT7qbrdQqtf9vpJcKSZJdmKW6L6sBB",
  "key28": "3EMajB56uqqDkPUAfwMmZBe7w29SCddPvzMLma8i77nvy8kdXpPuAVAtV5MoEPEu66nvrPtcWio2LFfBqnuYLtoP",
  "key29": "2FnZaycxsYGuvjKeBG5VS72bKcALtNcY8MoT9s4Gtixaati6sbBQ77dvDJU4rZejaGaxtEYYV3KkVBzdeo3bznL2",
  "key30": "3kQeLA5U1uMpGUUyL7ZXENgSbkDkdvzjgkdnPfWNbW1G27v5mLAMz43WMk26PKX8mV4nuwyWgUoZhtNg7cYNusjC",
  "key31": "5xcJo5V2y7gc1kKTayyuD2tUQZWWhPTBZbyvdx7BzS6wwRMFc361FZ5cvvUeFRH4FaN61RsLPesAbQtu12cE19VU",
  "key32": "4MbjvexyyeWZYSeAfp9Q7kanvzPgW8KP6ye75ZvLzbfvjdMsteTt9ne8zh7KAa38u7dsbWz7ASFdHB6r8mBR3nip",
  "key33": "3sa8CZgU7nA4MLAPgxq4vD47Mr3FP4wrFpLz5nvfKDzZQR3p3QjNEuRB6Shm9pFN2eJ4QNKFfaH1gBidz8JfdWVW",
  "key34": "4SxivGDGmfqW17kyz2nbxJSmBBpQLkTPXbgLQrFYEGG5smU7q4SYwFWSnDsmYf2AQB4b9QdsGLvRrGC2ADNGXifY",
  "key35": "67UEpTHxmctBNAhDZZmbB4wTvgQuva39RFGmVsJJRzQz22VRboKD2nQL1oL9qZUSC8PNfvKs7oeSAH7yxzqz4e4L",
  "key36": "4jK3dVBfmhm8BuNayawTfmoLtEsaoh1gM8zLossgy3wKomz6TU9uXxwMJXm23aWV3t6mNF2evrWQwkgbUctnQzbW",
  "key37": "4VLqdkfotwrwxtKeiPazcwRHgJAqd3ZdtA6k6iyJFFa1s2df5dCPi2JfocTyVJftdr5NYWfJVRz4r2ibNnBmNrhh",
  "key38": "3NkwMEkiDDtB9jJKedyNSFRBLNh7DBepJQejjn3R23W2fauAUAHDLXbjGxs9P1VutzpTPYvKPAT9SjeHPo1W22Av",
  "key39": "4ad1HbrJ8rxvhxAQTFSxyNo5i1dd3j6mxcyNm337EhgqyxBfMuLG79cypCkw74YHYfXSNZXktG3FFJ6ZN7i7cCHd",
  "key40": "V5dox9ri32qcHSb9GGBvvu7pPiP3Vv6ooXCbxGGXieHApWmGp5KzBKT2sDpAiTnt8AeokRT9CAKMe1EEyoh75Ge",
  "key41": "5d3xry1G7oxxy6LmoNZVAYUEgiS7rgHk2zEgffV6TfHvD43NdCnxuNYcFkaLH7PTqTFwcrNXkn4uekA2GWSf2oau",
  "key42": "4ALR4go1qUkfhDYQ8vawvzDgms7zsHyS1BYTn1CRf9m4fAQUa1hkGnsTj9D6nxdWvMZn2A7J7MtrvzH2Bh5XrFhc",
  "key43": "3katAzbwiALLv3aYVCSJGUmwZPehnXLThEsXPTKszeccmcsuSj7D4DTPjXYgkZgGGAPezGSud2aZRZJ9ppjpFURq",
  "key44": "YCGpxK3X4iqdWeUGfvunC9UAszB4gjcqJZcr9Ab4CSHhCzwJj5Q33iSPvkA8gcQU9gU5YZHZCnvQ56dqRmF2vKK",
  "key45": "3Ukg2CjgUZcN8int9t1VQLB3yM2qFsq7TbsvuuJTjAaTR5P8hhR6Jo9aKesA4LM7N4DmspiUCmih2SsnTq7wASCE",
  "key46": "4WrjbhzLSiziV7PsUuhyG82M3HWya7WLNwB98o1GSwJKF9ymsMyhiccMGyTZhuHSjfgS3hGpTUsHDqtHRoRtfUhb",
  "key47": "3gZyhBvcnFTtb73dhN6pju28TSre4ynASWKpwNdDGXMz8HhJQCTQ7zwcDVj6LaqiZR3SRpvn2taCMU9A4tWhtVbC",
  "key48": "3rCiQHMpA4ptjJbaguk5Rku29V4QyoaLskYVwrqEHPhniVgZRrMZAj6qHeRJ8HJdj7kgWaBiWitNLzK1gb4DwvQX"
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
