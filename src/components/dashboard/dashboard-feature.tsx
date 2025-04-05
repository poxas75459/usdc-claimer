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
    "4mJXu5DYF82PwpinDQrEJfh1txLKBnbBQ7epbJ3Ez8qNM8o6YrfiJPFNiv889LHY8HLtt9TM6qrM82QuEovQhzAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTeeSaHKrfGgqcKXPfgd8DSVLMpSbW4vwtjuXC2qAiZ5XVBqhGF6v7zGGBVEW572PJmH6fGN8B2vuHuMc3Lspzi",
  "key1": "35nesMJKy1ve2u8ftn1KNYM4McDtdmXSsUy1pz64bZ3WNMJupPMPey2uJrj6ancj9iRKevHRJ34dJSyy7v6bo3zB",
  "key2": "2Un1vNpazwS9PhjsypzcksbvR8csuzU5pmoaREwSrxhr8ABk2NcdtyMgxhd5L8voBuRrGv7rD68Utju4MaaebwKD",
  "key3": "5H1Gwt3himDSM6ug5R5KGcqw5Td4AxoGt9CeqqFkv2M2bWpwz2gJZn37urs4sdqumx9qQQsGzAop7MFyT9pvgrDB",
  "key4": "61b3XjdenyePSfxMEW14MMVFdhy4xpNbR6PmsVwARpNhZWHjM2BkfdNf5Tqc3xjocL11K3fitqd5kJRLqYHCzKFg",
  "key5": "618dQMFA3V5JsC9wuVU9LzTfmdvJSkABgwRPazwedCebrh6q84k93gUGAzvoLdNNiU8B47VNWbAFoYmJrG5efdKp",
  "key6": "5rQhfYX9e96GNNuKH3s8NBzhXEEy49zMvGmzvXPp3eVHmt1smauReTfUx3A9ZeeZdgiHBm8g8aa1ozQs5XZgUWyk",
  "key7": "qbF1gNpJXoyRCE7Ti9MEuydobsEzQgV91LCZArMZNYHWPzNsvWtcYA3dFVf4sfkKPzE1TTWfjyk8dB9NgUr799p",
  "key8": "DdCSxCjx2ZSzrYtfdaPnx94rQ5pqkFWRNGeSZEPKVJYzLXz6LENDYUfEJAyc76bpZbWYBaSRYx965cJtsgLLyUs",
  "key9": "pv9evYEa3GCEnPLiYeGtwMJFTL51yjhtbr4tsHgy85XRgiDwnX3A5Zi3QAMtPsQx2TaSVdLBsGTPm94qS1G4MRa",
  "key10": "2ZrXDquxewZ2AiU6E5SNwV5gMfsS1tVM8uCwsQBEskfxcteJW8xQQf3oKuLcgjh2Mwgm9bm1kH4iuZEGEt9mmdNR",
  "key11": "3TPQ5FioE9eoUVsAfvdwtBupnxc2Kr9DVDMHdMaNpqkpnvr3KvwwnT32XiV14YjgaWCU7vB6JYZPt99fe4sRQDWT",
  "key12": "2we2TvTQNiR1XRvX4ALbvuJ5JHgmZY1k9zTnFPu2CcxsCUjuUxVRPTeZ5U4nhw5n9c3TQRcmgwgHnkK9zyjnka91",
  "key13": "cYpDyDvCCKUdzNge2z27Xq3N2ekpBbpG2nLZn248PwZc6LyfU6GT9vpsZn4EYvJcAVjR7P7dX4W1AyTqPGbzysT",
  "key14": "2CeAJ9mfeEDY45cd2DT9FH8UNfWFqGr3wuDSbkB2ro8dqQYBCWGv9CKgtdHC7DYbaqLpBkQKsgbAB5Mn1JXd5AcD",
  "key15": "3inbt5sDzU2LbNc6St5kiGvMUnJhWvfGy7stxTR3oBLTQki9AEigcTwNTQgLovMWbEK5cQJZQ78MFYnnLcyLKNEY",
  "key16": "48MW5KsTEUfSGhX1tKJamtDD3Mif1D5Nf87G43mRkewpwguEZqWTWGVpcz58i65LHZuwdVBn5r5o4H1DwxD8hkzG",
  "key17": "oMCvmuN8CXQEskWgtaDQA9X2Abv8pyGcfyKLT51u5WFnDMpprLGJPCWMeu2K8v9Y84PbikiPdicnrTffLt9ZMG4",
  "key18": "4gyx26y6CmHxiTN6ZkAWtTtwhuNqmTD69nTqCrmWt3Jn1cbMckzvhTmDtk7RhXAWRjVeY2aPuRPpsxzXnTjRo1pk",
  "key19": "4giwYQk3c5eFH9dXuudC9BPZRAY7tFepavcJx5zkZTy4pnkeD8hYUdeEDSTe2YqVULXPM7YX4jTfmeMZkyTUNtmY",
  "key20": "4i8yKV6CywkMsWz32YerukZfTECARSBbttB1TjkLZVWi22pHL1fQdasKncVKL8So3Vw6xs6UmdqzdzTBEanCiwYR",
  "key21": "qZQbTW5f4xLWCuiCVK5ThHYPAqvnzqLh5yx8RF9jVUectRBLVeLkqT37vNLDu97Hv3UDQnvKBNLauLgzswQjd9B",
  "key22": "5MjbPkAa4Kcrfnog6gF8WBRh1wu7pZijXFUN1bdAk5o8aghzA7wo8q2fApcYjXBZjg6ki1XReg8rsWXc1nnVMTzt",
  "key23": "5gdUUBWgbdKf974ucDRRuyUwBZsPoPZRmCg9tQmyz2JVPvUUzbJixr9aHU3XkwbbKjrcDWeXg7MwEkJZ7cdKkpmM",
  "key24": "4Ep9GZeEoP4GCTUa3z3L3oGPLHBUyLqijy9X6Vuw2ST7E6yhBPiWRXPSivBVNyeoaZdWYN4xQU2VbNbwHgVPZLai",
  "key25": "LrdSGd3Rkk1P1kTrw3jas8GExFDCkg5A4y9u6c5VJc4y6CZfuUF52KUDN81iLywHTEYVTKAtSegDhTrT3AaTvUS",
  "key26": "2ySvisoKJ8NYaTvDHsT4MzmDxqz46Ztm45hyBkNmgWxNNVD7gcSSRGfUTjADw8X4tdJjnqof7eTvW8sA8yJA1365",
  "key27": "3a94uKVENvLUSRPqhPrb46EsYvNJPHJ9i6rVMTiuYc8ovwz2SkbxNR7QtTyi4B2hs8PsR8AVJ1DvsA1eknQJLBMw",
  "key28": "5djJtcFq1L1eoQXrte88h7EMPoadew86ihrpUjRf4EGsnCJQyWAqfXJuc5tJaiBmNn1r9aYnqE6pZTyUgePHSEaV",
  "key29": "5ty1mja1z8bBXHNpjMArD9qrR8gtLLVumed74oDr9bZtmSy1Suxbb1FDey4erGUyDhb9WNaNwxpWo6X64HrYSVN4",
  "key30": "RCTxaKPfGrLDw7dCuAUNKHPWSn3Y7mCv6jeUcvb1SdUUuX6r543KSbjmDYBiWZRtBtGSjMWhWXbuPjVdyY4xdKi",
  "key31": "5UYdhWFaaMVtqeQFeeaziUh4eTb762pGk4DnDPmn8TvF6eXkHApSNA5QzR8Kf5YgXr2Yu7PZCvHKCdaXcekwtNkW",
  "key32": "5FEKy6uqZuTiuwnAXzRDJe4tQ5MHdutNbxkgPhdh5TT7Yas6tVwVA8PZJqmySmqcrH4i53CBnyuQmRfCAjzEk1m1",
  "key33": "3sitp5wKywZgyMSGXNhSsKmN5LeQuBR6EkYHY8UqGsjzQP6dNERb9HLTWUkm3dSyqJVPYYbM4H6dmoAPk3nGBFah",
  "key34": "3tapVd2QJm1gW8AT3zwyNUCjKTqFVSHnAxMtzgkUvAE1vjoU9aWAMRapBpcE2rHip3pqCt2fUj87KWDnyUQrfnKA",
  "key35": "4r2FWnrGXFkwrwRtQ9qLWWJhFD71QKv46ywduwYp2ikWt8WqcpfBtAaixqymuAwxWAxry4o8gNECAEbqFFQfREHH",
  "key36": "51NvyHBVwi4npSUfW13VggjWQ1H8Ku4CExUYoSMxH2gZzj8m255xbsieVhtydbDKUrHNZawu78jNpMyMsi5veT56",
  "key37": "3Zuew7zbG9rpxV6GcytJSBXpV3ig9fEGsxhvfYCqdYBxvCr6yDPMKqUuQSTnGZJWJwDUZv3kzD7Lu8jtjf9dSvV1"
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
