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
    "4PmEqwXMdyg3dQwhwiekvN9q2V5dG4e3fg5nzztRYmQquubBwDonbjTmxBRftUszZYGVawr5PnBnpbGNX1kbDrkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bv93irdq8jGdwap64TP6Cr1CgYFsWm16Z8fMBYNvBwFCmDQSxmiw4DWA1VJv3vkoFCySKqpoKCY9SsEdTVjYNdb",
  "key1": "5L8hSjFXeuXMErAmcai2TN61of3kaJW7AFdqNVueseupiq6rWmKrCSLDDXx7PBHpBid2AnWaFnkQufWUpTzwctpA",
  "key2": "QM4km5UxrBQJgrGMQgqHTKfwXwyJX6tvdgzdgMM6XckwNvkAwWG2P13xaf2ckZYPVx9WoyCkmaWj7dzy6XwzG3V",
  "key3": "4UyY6tm3N8xwkNWW7wpxYooPSmazjQpwTBUB91txXsaPvBun1RSVW6842d7JKD24bEJzDWQ4UFCzxS2YVhYXgYMe",
  "key4": "2veqm7EY4iTacFNeA8P8M3zk28vQjZHBmeE72EFEGHzmm3CoYfr5oqDvvcyP13t9L9pE8KDa3xNWQt7McgdFeDkH",
  "key5": "3r84piu5i46U87SsF5kExf6VGxQRi8RHYRosLsWbNvoRc1nwk3j6AJJyS9FDkj9tgixNV3J8a25MgtzAnzFaJVEz",
  "key6": "4KnHA71FHvRXQjeaXT4LdRvGxjUg3LG9nEu8S6U4v3mKLRMWdraD2rKcEyT4wp87xqBhBqbcwXDNf65d8ozGjEf5",
  "key7": "33vK63cRPkCuooU881TEV4HkfkZ4iUcsnWYKV8TgiiBWef3X9VzEfJatftz2tKNoD2K4KcWwiJcAuFoeryhpREsp",
  "key8": "23VvLBhq3unTdJhJtCu8BABZiGXgQ3LfW8RSNoe22zhsYDTtyp6QgJfFpPQ6stYKmSm1e8ZuMQcdau7RhF1rHB25",
  "key9": "5qP7bNHYZuudtMahmQT9pAbjzcP9gLmx1zA57Q2X146hGeMK9kems7gjkwJTTqafEAvMBiYtxKDLWhjy1HQHowdc",
  "key10": "436wJHezdXgBvvosmMHvZhs1emSQvokznPVQjUdSSd6ycQ2W1iNC5uuPqWbrqUPqz2dvtmJ9GSPdz7wRHDX3kjZG",
  "key11": "2mp6pWNTfNWFTTgt7c5MhoU8nFK7tx9FnVU3LFqBXB78W1C3TRk64dibfYuG7JstABJqBaRDVpcuuW4ER8EsEwLL",
  "key12": "Q1AYxpo56VJYHW2zZPdCVcKjYAX5z4J3oTjnXeSfdPMf7TeaacFuZ6wihi1LmGYvz3u2KXJtcwvCUVxDq4N4vh2",
  "key13": "4J1Qzejf9Nak3Y7g7Zh8BS7PaLJxHsX15cj1xXKxCiQosmk9oaN8nxDwUikikvCHFccCc6wF9fYUUsFz94DsHQAn",
  "key14": "2G3vKheXsukRf8HoiFmUMfxRr9gnprANQ41XMVeV1kQjHURWvm268Gvj3pCyYx2SVrcKbCTXYr14ThDnjxVrPeem",
  "key15": "29eFaPfsAeWYioMYDbKr1tipXU1miGyRasU25fHR1DdfHRzJJ2BMEhJrGpVcpzv95DxzjJ16skp6R9Fyp73g3qAw",
  "key16": "5n6FT4KASGcUUqgbX34K6u2uhgZkGcnaywgjgPKhqhseSA3cQyy41HnSDxADbXAvWP7MFDgg7ta51bRaR88cbuxR",
  "key17": "3iqtKXqiZ6jxyg8uMFYZVBLG8HqHzpPYYEfCjFgKzeyo2VNFcij5uFm5WeRseDQBmDCJFwDZp3uHh2CnsKYUXh1W",
  "key18": "2Q4tLj2zJwfbVRmEmQ5MssUJ1N4DRY2pKzqiZmr9wYKfC33Fw6eMmgMUqT7CPAs31CfueEgydjggEHLc689UYgyR",
  "key19": "3MkPmprAhVyx5nfovK19AQ213HEKfsD8keVtW8FXBSsSdXh4wuKLtKZuQqn68e4V4ma9FavxsfFVCyFoouDacJsf",
  "key20": "5GP9TUWG7d5WcfuD7PHheXvYrJSDUF92oBUnYWpt3AVFxvxpeL64xPFzqCAujBYy1n1ayA2rvvPDDy4saHAyDJ9A",
  "key21": "5ZmMMUwov3HvRiM89HKd3p7NtkgjKWcqno2pehduTkHS7zBj6PXd3YQBxr669G4JsX3Q63dSKZLrnMGS6EtT9yH6",
  "key22": "HPpxgaGoUuZEu7DR8qZ3k4HEjH3YRHUiPazKbgmVedMvczcFDjtpDJdtJwp8muTVWd4zEQvqwPxFxAKzWXVpANL",
  "key23": "5cvCTZP8ma6FxyrfrDF1zwFzza7dx2QuwGCPz8qvD2uPfpbDd27KjVpSW5cXW1E6drfpKRyXu57GSfSKpkDA2nRM",
  "key24": "2ZYx5AdbdoovU5uJD9Pk1qK6Tc2nM8hj6Fhfx6zpCn2d5XLcHqW7tSEa9DzgVsmQxqJbw26tZ4ZcNyV4ZS1gcmzU",
  "key25": "xLK33PX6ziUrsm5iUKoGPmHKPXHdYDR6mnEXAbnAQ5ELWdWDn1yNnzR5KDsdgkKwcWAT2d7RmgfxGvEGTwL1gKb",
  "key26": "SgynPwVJbNAEZoSvNtF53GCeLYSpPHdqjhy9zigy3N9gdZwDMsML2f1R1ZRpewMRXekHBqAHaSRBNWAQUuHyDKD",
  "key27": "2me4ChUQsg1d2fWBmZhwpU11qbbR5yKz2VD5MzNFmrjnFVxMs91VYeix1ZTmmndd3bCQ2gn9b1u2DAJtRFTHikw3",
  "key28": "k2skBdEeQuAr8huwTKJqhppr6x5nUJKqA1txx67x8BzyGqnkeAc9SxLcXycQ5ioPL3TebeEKsLh9SyfuUDLhPTB",
  "key29": "5XSqgARqW8pDtswvUxJtQMaWsVxFqxfVtnwxBQuxCtMRyzCMfVK99htwoRPDsiFeeYzDZXhSL1R39T6MWW7rHzAo",
  "key30": "4eG765HpH94h2zCp8BNuCgBN99pdUDWoGJkcoWawvosvDFBp64RcT2ZrreNguEups2ZWDtWU6JnaSnvpMWAUQxp1",
  "key31": "2fJ6aU5vHFKH3t1EvyeQxrtg3UWjYGqzrcEjf66mYcbLR6yNuG756iqBweaN3dXQVsdutzoLVhqrtSyfB9F86hBS",
  "key32": "2tKPMirbQPz2uNybMCfA4sLDbfCpaC32N1i7BxVD27Z168q5R3rwdSphmKaZipu8EAtqDuP97vvsDDZXfWH24HCB",
  "key33": "5F43xrzNd5ZRQ8bhFSucREbbBaNuFpyvXN9q6JQYKVUPAzwv4CmQeamcCGJ4uaKo3cm1MirVQjXsUiyH58MXDjF4",
  "key34": "Dmf266axcbWvW2zEAv7NGmBFopeujvELgpwfrLBw5o9a4jBQRowTthL3eYNxc2R6YTd3p8mgL935jZMyoqFmsQS",
  "key35": "4dWPszdGUJc5wqPhbFYC2fu8xWcYx3axMXY38xNS1bL2LpejLMyo8Zt4kve4VPZkKVM9wKjd9VSUB6VQpBWscV9u",
  "key36": "5rnF2fX5sZaR2yWnRti672PMiv1xqgJwjRDeEpPYcvbQfY7q9qn6Eha5vwgaL5Axr6D7wzjQdPSrfj8xJ4e1A7c6",
  "key37": "5wTtLjtNYKSkQKmocm1FW67VB7YGhqNgPTdK5fTaczRhQAkQhGYZkHpfbtM7cD6KhnV81TWXEbrTz9U8Q5fSdNBJ",
  "key38": "2TTM2uFTVnhvqTqnEnQE1aDwyboCnrTBNb4iiCqeiDw7xzvFAotQ3bnUNtshDXvgqYDdZyAbzQkH8FKGTsdzQ3Gb",
  "key39": "3wj7kVVRbbueSgSATbmieNcCr3eLUCxELRAKbGfKQw75T6TuMoxEVK51qth5fvZjSaNsMKiyJrpg2cncqRkkaeof",
  "key40": "59Sm5zu1ZDkx3opipUDtCq2FEbxUbZnyJPGajSX28EYf55BPUUaWTYHVG8haHiUbTiwXzAaDyXE6ATtrkvyVNPQ5",
  "key41": "3KragDgDkavVpuxAtYqWbKER89gJR4NNgdBKJWsnfiK8GbdehADSTbZ6Sc59bMgQNHbVX2j9iBywpUjGbTZSZCF8",
  "key42": "5MhSwbwf8xSrM5pqYzMFGSvK5jpankKgnA3C4mtoHQG2ueDD9u4yeZWTcnJoNeuz7deJKN8w3qCJ4HrekTGhMaFF",
  "key43": "54qkurph3JiZCHfjJPZkfnBAdjajZk9qWCAvGYHgkKzywKVemVVEqyBsuKUfnwWwLk1kAsSJggJ8WCxj3ooAciUf",
  "key44": "5pxEdJWT6viTKsvyZLPyMgVBZKbcC7UmFjn6JQbwtzEnH2MAKBLJCwxvWLjc9sW8bVqNdAWKQvyNe2nQM5qkaqSZ",
  "key45": "2zHrtCZz1AUevksS5KM4gepFg4GQ2FsGWAimThDEmzKnpuxY9MMF481oEzNWikhBPNTmmNVKtPGD3viDrzi9aiV1",
  "key46": "4iTyvWFpjWZWjQrFu5CxuaFwhBe9iYCBKH6fhq9mYRHTZmwjBVQKFmC5YP3D1z5bDvqH1MfyPqVeJmNFAk2eWUY2",
  "key47": "42TnnHYh1ptixuJvQAHTTvaKSJphZG2hSZgpu4GF26aMi89jQAJfSpNNiQY7gUNfQZYGi7X8H8xFE1EwcEhamzV3"
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
