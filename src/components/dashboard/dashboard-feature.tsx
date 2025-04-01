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
    "242ZX8iMGBXDfAbcftQ2vNZBVsprnrj585qKrRurm16k2AHnx8XBCGwrs8a7g64jWXCjkQqEabSozfPJSX6mc4F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SjMvY7zYjA9cDX6rtt6XC3vzF7Ckn82ghfAXKX7kXvjJ2YFNPyNogKNwYroaoum1mug5RVQWTV27BBuGQ3AXrT",
  "key1": "2iVsjcuSxMwP327hVbQbrXeKQcCNBo6yp6FVHj6J7PZke7uG2oU7qcGQbEpy3WaWwf6WrRzXbi1mc2KAWdpCDL4H",
  "key2": "4uiFHVmYC9n8ZT2Mv1ZDpDdnuLmaVHiKyWiB3nSYVroAz5v5r21wkaGrHMyyPgvFGj1V3Rft3YqfWzanYH1yAhAW",
  "key3": "4LDQMWFu4B8ZEMiCENmhCsg5XGrcc5Pi1HfHUf36Yi9yyzLpCD4umP3ea2BYShct88rChHJnRm9EqtsKwEB98Tkv",
  "key4": "2ofxGuiwPa925rhdogoGiMU1NtKrYtMmBQAaUFRaES3wSvBBMsKzFBrC58QHU1wxzSJ6r9nYrPPPkNuLPyp8kP8h",
  "key5": "5ZkeLHjSYpQrLoEWuTYuNhZr1UquN5ooF17FZgvuKus7md63L6MxDYxZ53V7ZWmLM8mnbWamJ468qshPLvcMhgj1",
  "key6": "4ZtGUKZHoiU6M1ya9wmogxKohZzyG7zXZnvJZaeMn7kvsUBGe7KDfK6bQpYEZeMczkzfNAMYJmrPZF2xNy8PKTea",
  "key7": "4VrUp7vuQumtHEoEFV9R6vAbho8KyZWewEfMiYXTBntPgqYduDq3wg2PXcNbQvHJPj76wAktYYtYaSPrWEF6XaKQ",
  "key8": "2QKhpBQfa5T6zsRGkBdEeeFAZWQbwg8sH7fEJb9EmLN8FWse1gKBASBPWU4jF1Y4XMJtMonGik9CsuUuDehvXsGR",
  "key9": "4W9vLqrczfjhtAwiC1KKZjAoCLawNpkhYmoKfgjwpAwHhWrZwp531icMwrBrde7Z7xTfXuAycKwwJNQerRmGFLWf",
  "key10": "43Jy4n2bL125aNbCJB3Uws6ATjdBp9KhTyqnPnrmMqmPpcYP8Xy4o5S1bmZAbq8gENMhdn2NpiHzJHu35mPLGXLS",
  "key11": "3Q3z1SF4BemqScAksCgX7MHhRhpkkBfJqjHkdDyhy3XMcdqC9AQUMYxqkCkoe9oqbZHdrJfwQk5Y99pH7xmoA2tA",
  "key12": "5GJfQqFyQzWcaUTrjKYS1XmxiiWnAXP9U86rPc3PwVVE66sqYTAZRVBGbeLPZRMgxqb2xxV8HUuT6X5opALE7bnh",
  "key13": "3ipBETNTu8rwyDq9udo4ZGN3n5REG61yWwQ79k3tA9y6xDcE5iWvgneCRiF3Zm7fJWcMVUqWWJFVPDA5WiyCVPZj",
  "key14": "4vNq4GJqRwwYRkkzWCALiJsMhz2cJydUrR6sWgfAU7wPEsJvFPYa631H9G7Qz2Ya37P8uL8ev5KtpeLw1bxndhe",
  "key15": "2RiBgVJqwyNsQ1EzcKNFyiv1yJCawNJW1xLyfYheNot5tDAnnyxExVs7yb45x3fjf3ShGiEFBjayiuMfndw4wBqs",
  "key16": "264xXyeC9xVuF8vgKhR3YbMVHwwc9C2h3K6nfvzJK88D6qWwKHPVdRr7QL8zRCRnYKqx4EvjqSPv9gcgpyupdtcG",
  "key17": "2ciBRgJ9G1656mW4DTuAJM1YdaUGGdLJji8vJCdtwKKREggLWVEpEZfiQdRLszDsuLd1iEdEnL3CY7LutoLiQsZA",
  "key18": "4JPddDbd9uN3yEf6Re8kjmZ3zAyYaybqFzrHpypHNFxVn75g2tHvjtEMeegxrSE22rXZQG4Q8BwSpPPXHN4yGyHE",
  "key19": "dn6tukKXKHdUvLhmrpEeRexYRWJMEopfqXMoZebsy2wj7NnBuerQaSGMSE4CdhA1Cj6EzTPSzLCmeRyE35wwjCH",
  "key20": "3Ek17Mh7NsKoiJPfcsnSow5BBUdHKRohCbJbqDbxqPeoKq7VY9odCA5UzP8hx6c4wdPetpQhvVvkM6ejCcRLZYKZ",
  "key21": "Ew8g6BoS9fAGE71CRRPpoS5eL9sXeJtAeyPfCTko85v4TEEKZH2EnHsupsHu14eSoC5CMvAmaQ4be63inYsLroE",
  "key22": "98am1USR3HpnnywXNHAzmjgbBpfR9GgpowMZmYuokSWqM7b6dBugLDxhCjt3PmBvXXhSAHAamAxY9YNTB3HPH8Q",
  "key23": "5E5cdUQqjKBmHvR2bJP6aSaa8n3vZpJd2xEybNotq9zgvk1473QQALgjoLkZtNJ5yq7f5wGe7WoDuP5ZbicHQcPn",
  "key24": "VjZU9AL3rFXc8TUb7kWjFnMzT9C6qNfhWGgzt1JGV1UZSBdnyDR2w3KNoDAw4awZvvTf2LChqDt9NApVJpw8ANT",
  "key25": "51cYgyag6L4nRAivG6VgN84TqbQCYZTojqwdJmRLbGpkRpykwPBrdRkbY1z7JGjnUVUMSKxh5ba5TjxQKGzi29ts",
  "key26": "BA52fX4z7wg2HZgFkmZaQTN7pBnQBZ4haFhpkmtLCkuWfbwvcWfm3itquaQC2DyexFUZsbSeu7EFQrBWgj6FRBk",
  "key27": "5dAQ4WKfRbgxvCfwe2hkkc4EXTXZmHoYUnYUPuvW67hNsCpaB12rhyUB4wauJT6DBL8S6UyVQ5bJNKsYeHSvUkuw",
  "key28": "3YDqukuonpDqERi8NmRE87gzgReRomJgSP57kz5mGbG1Rru5tKHmV2YxgDcU2Z8e67Kvfij1ySVF2LVHS2Db32Uc",
  "key29": "5AWTZqBGzWudg9RHcZZqEZFGguU8aWVDjm6c3ByumLGqkZBaUH25gHA7p6g8qgvpUffTjEfkvjFfeHxFQJFJ1qVo",
  "key30": "59NmC5DeRNHPJ1xypvMKHBDEcRTd1vrCAan8hcQbY7S341FEnf4gc8woKaYrsdCrghH8b44x2NRDaaYgD8Q2PPCJ",
  "key31": "5vtKKaondi4RDsHGzbBMb7iMxbPnyqaacQ6gRzoUARuH3xHt6rMU45nKv2eK6aGbTHquTdNMhG6uAPAdbXbKpngA",
  "key32": "2ZyaTwgMNtxMEi4DoKkGXUuLMms4xaW4SRAscad6fGgCocCCWbtDuZNc8bdGzXmo3EyDd8hy23Sr9LAL6ocwN193",
  "key33": "3b6D3nm2Ap7uzw7fckaAESUbR3Cue6EENQ86bjYJMGiN4Jk4mWydbGhcimtGEsbRUqvcGo1ocyzw3A9QG3yd2VYt",
  "key34": "5XMQU1nVHY3aoUdraBczZ4kRgmWAF8xmSjysrUX9PGKrzwj8AEH8Eu2GQMwd3pNGn9Hth1ETDJBdoHnDywhycro3",
  "key35": "3LcEC6WwWk8rYgacmv8uf3KdVqrbbqJ8hqAYtB5yjDvhWPFfErhtTrqi7fKkR6wN4W9RDgUMDwKdV3t2njpKXfx9",
  "key36": "31CthmY3tvEUzXyZqgiyuFapPTK6iVHqeyCbaGryapktn9eRHxLBZQkP3bznDPpQCLiApQUrF9ths7Wa6fSEbcnH",
  "key37": "3j7h7iCvmowTfndZk77aMgKm14uapPU9hUTTxbN7AgDvHgsnsFwEcME3yMuAUZ56jghfzkmzpaSfFEuDN6dfEacU",
  "key38": "3G6aTLhdFD4buQR2FzPih2ChhjcFE7XUjupGANdmXkCQRpoy6DWRSDdCjrUbVnjVimarig9CUjcsLsusaSdcnKv9",
  "key39": "2cbhF4WX1wdvHiFci6ZEbYxuNVF9UGDBKSeEXZ5XMon9w7y8MDREqTNAwV2UDq88K5PPujfGCa53mE8NXSe3MM5X",
  "key40": "2nX6zPuQM67ttsWWsrRyacUrRPSsEmGBJM7NpCh5v3x13ei4UK21G6ozgtYnXKXnhD6kcsjx9jcxCrL62PBNBvsn",
  "key41": "EfuCggufpA5YQa2XAuEw56v4PxEC7T4KtvJj3skHKcznrFeEr1txZ9XMU9AcVvpLAMTK6djn5KKGJtz7X5azqWW",
  "key42": "PsoxkxgvZsuNR6ZnaH3P6tRzqTr3ZriqNuRCubHFrDw5tQURX6MZVXiqbCDMznmfmyif4y8NEpnsR2SxmswFNvS",
  "key43": "25Puum3vmrrPvRTPxGnopgZmHG1YBjEL3GYSRpPykDcupFRCFQ7EcoQxsTDtABFVMrLSjbWwTv8QrCazzCPBToXB",
  "key44": "3nPSk9XxTCCh8Grh4vphusvPGqWb3SH6Gmo7dGbnc5giHD272G2GCTKD76HgFj6oZseM42L6N1goHm3aNdFx6gDN",
  "key45": "SzqonyeTUcgreGRdgH5qrymUuhBxyjxqxrE5c8BFCJ7XeAuXhwcApqqGAKsLzkQ95r3pizovbMfMLhNU1h98Zwk",
  "key46": "44pF31saw7YssYxECq4af8Kcs3h4eKmwqm5bTBa4sXZpgXz3o7KL9zWKXPVbQpfjdPRnC57pHLdaKdFDJHvvNRyA",
  "key47": "4PTKLKHXYUxf5kpA7kYo2W5aVwHgUhtmhxet7QTLHdChKcAXfrf7TBAiEuRdadEx57ju7tQK4HVWqhR7tSmFWKAi",
  "key48": "57fTjewSjo85P9F961216S8h7eqBbFM9Vj7QsH4xFkpCPMNrQqgQN5UGTUmEgDkx54yoy5V4bdhCgpjehVHwXAsj",
  "key49": "4MsK2cdSNsXRa71XgriHcX1cBdGNeEcs1WLTmiaUF9CyVbKeAJQjNNfofUTfcBDnRyQ6C6bLTVKuCw111eFEyMLu"
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
