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
    "3KadxLrE5bNWZeAaVyo4Tq8xBR9jMmEongcbahsMLrYG3zCkjwH2zyCFSCRHDimSNC1LVGv8C2j4SrzmcpfhbDVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYf9BZaGYVu3zJVhfxZS7xRtt58VqmPig8hDdUaDcruF4Ed4q5P5R5H8vjuHR1Wd7YSrcAy94UTa3SUS1knQu5N",
  "key1": "XQssxUhWqsTLJQfCYr6jMm6Ar2oWnr1xULzdsBfBHW52UL1avmxNk9sQhb2T37ReL2K4QCqmGxFEZR3DqFNprtp",
  "key2": "3nZRPaXT78puJNggsYz9vWZ1ofbfyezBLLHKCdNkedKxTv8VLnekPiVEjNZ1n8yvpeCAsB559K8h7V7YFCTpaDew",
  "key3": "3DEYwfs7LEQJh4fhifjfkFWRe7sHRv6qYVKRLVNiw21pd6jGtRvZB1Nv36KK9cz5HX15VoQ4MZRNBzRys5ZfmpKp",
  "key4": "yUmJLeKxnUSZnGFS8PvyHek1isevBbLfBREwjoGTpZc2aYmLMbtvAYn3MHNvEQpDhJD97YNP66XKpSa9Nz9yPca",
  "key5": "32NDwQn2WJJ5jKYYmJhBbtXbvFJvnAvHezDdzE51FnDmGkdfcSUNkiysMwab3S3z43es67kuQWruMZzYg32CMApq",
  "key6": "4u1zu8ZapdsnADvBDTKBW3xoqMenAnAQr9BgioDsWvqJS4v5s9dz59frpbKXVWJ5nz5Zsq5gY6YXhKNxgQQUhS11",
  "key7": "3V6upFoQweQjLJFiCP3F5viEBWE3Q8R19JM7o28KJhUuruYUZmBcEdp71kq2UHkH1L4fSD7VV7Pd12w4CMYFWpDS",
  "key8": "PNPj1xcRWayaebyvo38kDEXnh4rHzYRaAQDZ6AU5td7khkPxNeTYUUyusmgssLy1TBwFjWE1xihNzw1wcjcUqj6",
  "key9": "42QZ616v16GNhV7L1np8rFnYFFaXn6qgMWZeaBAig7f5P6rvFpw4MoMAkRTpTQmEpfYZzEn5ed2LW78h3btGNdkw",
  "key10": "4niAFwDvUR8Q9oPSJN14fPV33x3Wr21p2VMGBcidPgcWiA4cR65AequXJoJYvv1LwbLpwYiVJksGbwxj9oTZ1avT",
  "key11": "3tCQRqUy57jMuWmF5CaqwXYwCV9HxS2T7rraqaugcgxZVJ4G9DX1CTYjzpTKjKCPhbEyMdX9MRXciBtM9jMaUQ8M",
  "key12": "m4sH27ZNewiEWr5htY57Yo4eNTTfvdFBbEN3tmV5vhKjcRq1b2aNdosvAjC3CCLgwnnpm7zVJbRuaLrZaAg3yTt",
  "key13": "4oH8gARvkrNwQoCZWo588kfZhn6yVcyAUbBRVYA7pBToXKZghirnKgBVCW7cibtiJL5Hp4DnUg7GLKpuaZF5otma",
  "key14": "5r3yGrHAvSGcEwgT3GmooUgQBWVpzcmvYasigWMpcEMFavMvA6Bs4ET8JV9rC56HbyS7M4kx9sAvF4M3qizSnvxM",
  "key15": "5BZCswJyyorBnzeodraChwwrSXj79xn7d33Hz7tKJKfW98m6Ek71ML9xwWgwpuchLptNNUR2pAKeLM9Tk6i1yuqx",
  "key16": "9g1stqKp4kiBZH3mzoFPdWopRaSP4Lno1Fjf5dfij4gJqMDVSGmCzAX7xM3sk1VU9V2k7uauNZExsTHTkoEwmPm",
  "key17": "5JbrQxH64Duo6xk9RKmCsQP4BEAcVh8tjvBJQhPXpur5qWwtv459WUJMSMuB4B1sUspGcnFRE3VcgMTBteHYKor9",
  "key18": "2BM9pssKrv1mhJxMu7gQvFL9ymsp4fBUi2VZrTRr4uX6bfKHrcPy8Hc1ERPnW1tHMkmf3F1txoR4B32VMBnNFSyK",
  "key19": "sqj8TqCKcDtoz22pbbaYVyAsbtRpRbqiwFtg78HsmBmW2cEqJMA6ar8nEDr4WgktgyjAifcQGpwUVNFSE8HCJEw",
  "key20": "2Mdfy9uuwyRiRJyguZFq8LMyPJ4kAuCYwhcMZJMWAAetHzcDpEwR1qHhGiDzf1zkSJ2ovka2ni1DDwX4Lns1dWAm",
  "key21": "ex74jHpszGF6uFmgF8TuYVeaSbcegiZd7WoDJJa6MeRX686MvEnzVFKJSfm8gHRkxbhtMNQ8i85tvyNr5V1YtnM",
  "key22": "31ZuCtMQFk2bt9Yt9CXXgjQqGcg6EhRYjaqNptcQpraxhXcXu3YKcAVXyQmHP388VTBViUA1kbquS6R2kJvGKfgB",
  "key23": "2Wckfbf5VNX1dXLXhK47AhUw2mw75WFoL4Powv9NDu3UFTamVcHCA8kfGDJuLBM9JJz7ErtaqhQKsf7Kz6ruuvYw",
  "key24": "5kV6RtRm9NFarbRca1gvr4QX15ro7qQC4Rhs8Nhj7kDocVrJFHykB7KgXTRRrz7Bb2Uy4bUMeuEMJMXzSgXfvNeg",
  "key25": "5LRtLDRYL2KSGzH8L2SuTkyry21AxDG3SKoHY1FboEHKPC3JuzQymZRcLMMTv8hS93hUbiE1CCShLnd11hhhrGUT",
  "key26": "2F6bUrky8CjseZres9v7fMrCRM3Ltys8FwwH5c6hZ4UC4sGChYipLBT55ym2wc8MA7io9HMXq5xbSVRWNhUAs4HR",
  "key27": "59qBscu4yB8QcSHiYjM1DmChtVVUPncnz6TAapUbse52awRi3Nr7yrDLyJRZLzW7ode3RadA2bvSfwqCMmusGdb1",
  "key28": "4xVxad3EcW8KH7EXxoj2mgEx8cuKoGUPYTRip6NCcWmywHPRjqd66Zdssb8CmsFbZUEmSfzPkCRTnfUSEkJpQpcu",
  "key29": "2P3eYYcsLLQhAsVJP6iPskBTHj71UhAEyYE7LseHZeYGtGtLzcm6Q4jSGcU455FYm98yjCbUgKivtBsq8vgkjQiW",
  "key30": "4eCw8HFSKQ2jRjtSEM1cQNGXrLetTvYPHgwZ6e8oynHi9gLfdsqG9ioKCA2CLps6FjN2ufoftKcguTNQZgVLdc9X",
  "key31": "5pPMesUkCrhqDdQZfcwHj57KbSqcMv2viQhVqsV4pPpGN2GYJaZveXX4B3doVNbM9af4VLeXsSuii2GsMRstciy6",
  "key32": "5KofVmdTgVnDeKMfLNC5rsyfSJuP86BVnaxXHo9bU9G1sFWfrULJ1Z8bFroe8gtpCB6LoGNcXT3ycnK4i1rquWf6",
  "key33": "5NBNULnnFbcrDJ6RUwxhXqYCymZKKDrvZ6wSSEvXvpgyhUUckib3A4W5A1A1GQ4EQECmjSEb6jkoCwcxszKRNDJG",
  "key34": "4jt7qZddzvxbkEfdta1GEXRDo5h8iaprTPGCVGxDG3cAuipVYZ4pWmLpxoLAGptDaMQ8rezhMQdrDxLjMRgAN39N",
  "key35": "3WAn31BdxiELAqK4C8AXumVUW3RQCoKoXuS4KL4jYH8SaRqoh4gVGzvBKgHKKESpGLVaGpfuvbra6aM9jDSFf45q",
  "key36": "2ynkbLpk49g5hMXX9Y9uBAhaTzdEzT1UP8YDoJRifTGzVDJy3BPUDMuYmu4nUhDEqTv1Wfnhi2EMFu8v1CTMTFEt",
  "key37": "4ov9i7uB1uXdtSP8JmVMX2YjeMfT5ZxQ7SkmhK8BYmaTd87ahobxxz3DY6ocyFST5Gr8En3GeaikuZGMvNukW4hJ",
  "key38": "2eqFf67bK4kENoKk73jyXABP67R4aMMcVfNVojvLii6tXRZrsnjEn7SeaD1bQUbaKfKpPrcM4dHAZqxhiFYKpK1P",
  "key39": "3Qb1hiAmmMwJfaXg6CE4KHfYnGnmAapwF5cHhDTiWreWwj8jq9sqs9LtuETfwN3z49tgZMU32EqD8tLDqvxi1hNC",
  "key40": "4gjxCBSqEbQkj9xKxrdyDrh1k7ZHd1thkciWF9J8qctCo9EQqHFEDV3nnbTYgxHVhXuSUBGS7c4Rynbj6ZCjRHwt",
  "key41": "qGzg89y7widdvGCvJvDHL7xBMQy1Fe9ECxcLuW32YAyZ7sqRi6M4aojcJLp2EqrtBbD2mWYVJLTwP4WUz7jx18C",
  "key42": "96BAxvM3xyoPYe7fqN89WkfPoMYJysWGVeemTdXYDmeaWaAMCu8k4WBjgmkYaYzdcwv9AbXvvpzyKiXCoGrte9J",
  "key43": "RWvzBEZq8yRQWJSH1YWdRfVKhDKG4g7DZuEAqpcpe2UXEZ9amyXpkSK87H9jPG8sLK9QeqtVh5dBxMd8RbmVN1r",
  "key44": "4C2y9gAL3dMhhP8a6Q1nBHV9C2vLptQCa41LquwG5erob3tR1KbQhssp2JDsDjA8wcyuRMahHDACrVt7Cr5fibbX",
  "key45": "3rRQHSr5xDjarpP25pXQq5gQapJjaBBME9s87wMLdQHK9KBmDsnFYGpQTDpwfavQxhGB1nsGqAWiaazoC9h6Ud4A",
  "key46": "637Zjz3SSgMTUawYwoc1v9g6UU4emjhv9sA28kvV6WCHJsb5Q3vZpp57bdH8cx5nVz8XynxZbBVahmQCCd9ymxGE",
  "key47": "5DAXsGtPUGYFbYJPH6hkpez25PLKEu2dRaoREsH5FjjxSzTiRtFwxi3nVMTxasvuY4SpWQd5hf6ENNd6o21Bqhab",
  "key48": "5AZc9cSKtynZuiBHsEZBWxm6jdXmgeY5WndciqtYdxHmA4HX95Wvs8Duw5CFfwzMPMFJDf1nZNwUass1DMTEbw1z"
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
