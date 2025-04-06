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
    "2w2zqLdvgN98BES86BsoNR5jZ8x6W2f1JzAmZarLzLQ9b1ga9MiaFKZy9WpFUgtHUVCocKSaDyEZigexecEMwGh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqXcjswePtrMebEQEfD7RLvQRS3giNHD3uhvUu4ExfPLt32MFbaecvwfp1hRcsCG4r9LB6GRjdRp1szVqdWkRAw",
  "key1": "3A7TscRZdFNh4ctcS5zDro3n249z5JEumZ5pqoEQ1fsTtepCEePkDihaK4LE25zTAoLkX7TpDgcbaxP7Zsq1PTZz",
  "key2": "3hKXXiVT9KbwcSmapxMSJ7C3yQFH93deWwpKRfTZmrFEkYSyYWbLV2Q9HBJT8CWLCUfNctGGjixkzkapfR3KzYrT",
  "key3": "5yScgZKafjiRPMV6JdrR2BiAMYKbRDL3VLgp1uE2SDNqiTDnaN8PiKELdupruwec4ku1hnk2KdZufYKPXsLJPe9J",
  "key4": "123vTyu7UG4XLgss6P9pi812utsCuEhmvwpyJgVxcBo4hzPAj7MJxjVM6nBuusQVpf57QzEx1aUbVEDQjNb5xBS1",
  "key5": "3RGDk2itzKgf2CjEveuyEn1WrsEdPnK5QjuQp8BrQdCQQYYcZjPghQZdNofccNF53qz3SBTBcJysbL6aHUr3y7xA",
  "key6": "S3x1VA3ViuHpA9r9VqWsgUSZkh32Er3jB9TkSKGzciRuHtmUStzPananHq3W5c2nBRPZNc9cAfviQi4vxTggZ1T",
  "key7": "5RhoJ1gcUYLV6HDt4LFjVMmNBs4589GcjT5v2qieAuuB1zZxrTZCL8p4uZdAcgPS2Bczc43651C49yk5fwNLGk5n",
  "key8": "4rbKSTRUSJrDfntEtxDeqtmtUjh4dXw2Kcz7AM3mzQRjkjVzfkpD3GETjajYspuuhV8Xf4kbR7i3M4mRg2fETCaY",
  "key9": "vWhi2VSvD2MDaftHY9L9zK2HhsRpiKyWb63nP3K1AEiqv6yEboBCAF7aost1B9epj2K1nSfxhUQjrSYgdYZpkKg",
  "key10": "4iDrJLRApt3Vjotq7YDba1faVf7nG342fyadU3x9tuwrevb3cfwBXHUJ1i639VPVoHLWc1puuRvJ3D7e9Bv35vsi",
  "key11": "7Nzn9peX7Q9Tzyhqp78iGB3Gt2nqKwtnfQpV96W8rLRVUqC3aGnKDGSzCtvX8orXsYmf4MZWydvoyWgqDRSGnUK",
  "key12": "m9kC1oUradec8Xb9Y1vjwQeC5bnsNBfdQha31frQsGJaDSyUjgigbzPvN3CN54dteb27EJVbQxQqXqhreK15V6B",
  "key13": "3YEhfZr81gxPiTqZ5XbBX2kFD1msKwSTDQjKUADkCauTfFDEiXCFZxySJdKXKaX1HaeD6VEjiQcfbp7VhodEubLz",
  "key14": "2pqjXmChTAaYnhdfT69aFr3NGSJ4C2unc86enhMaZGdGqTpfx4cyiZ7zHt7ap1s7QLEtbya8iyv22L5XkmjbCaor",
  "key15": "5LaCgk7HCYHjVmujyzqUUE2CdwaaR36kXYiSeFoyLY2g8UmiWAoELQmg5BBfP5iok5tGBWCHRdUJGFdGfmvEx9Qn",
  "key16": "4v1pPkLMoZnj2Kmwyn64c8EcpcCmgLUujUDY6fFfikRQu3NxHYzdEmxiHHjpeYSRsEAsrTR9cVe1hUQi8Qsjhups",
  "key17": "5pfh6ZUUarEUCKZ8REVjtgXZG236z7W5rbWCDqweSQj9i3wnHkMMd5s8zLKAQmqNrj36iSHVbt2PGRxUcnCVYbLL",
  "key18": "5uR2MYqWkZ67zdjoTXsamz2SveFGn9wziSLTmq6d4xS4J6jNjHf8HrzCXacmNQNUKnGHp2BEa6B4fzXSq9TZx84T",
  "key19": "4gETy56vC1FdBwEd6QAcJhUXWzUZq268mNqsQ1N3MzcEMf56cWU25t9rfek1Q8K7LxxXpUEpinZA7UMxJjNvcrLY",
  "key20": "5N5aTiaWSZfeEHQ8DTfCwuC9fWtLtEUt5J5gPDTqj9Pqfgy5TXipjUdtePbtEjhpyEaHHePxz4QPJpQgHhGjPN29",
  "key21": "2vRE1v9fZEAj4zChqCYXcux3ffDLpbd6zd1WZauNtxE8mFz5FZsQ7uM7ASMqLixGf4u731eix9bGxF9iUvhGHDeD",
  "key22": "4GsrJHbVM4uTUPbFHgrs8n6jHv5ncP6MQUGYrG9DScRik1MFtPZJPzdhZCHtMSWeYQAXT8HbAwN6jAoadvwAqxyQ",
  "key23": "Fy5C85BSRaeLN6NjHXYb2gkygrBC1PqnGAHS3SJ2qbv9R6hfM4Rpt1wQ5YtZdrLqveCjR2aX9Q14eGHCsAXGx8N",
  "key24": "5JPdPBJExSW6rs574ixo3SqStSeGtErfQFcZUwbJbY7CkMXPcMi6y5ejVz4ajWmDE6Bt2hTdrzLYZd4dQUFtApKo",
  "key25": "4muyNzZkuZ9E5Md11J5npcNXLFhcGCXSf3xY7HR3UpsSZXU1i8QRU4M19Cpv1N35gxFFn2GhSHWqboNKZr8a3ddP",
  "key26": "8XEWcs9a16LS1ABti4FvUdYM96KBT8N1dSNqhq444yvfQRowZ8VVUhrTnnDw1tWnLGJW1oXLCP1EbrXbhXtAEhx",
  "key27": "5nG8HqbSgMTPnSCGPfk1HDFz2DyJiSk8jPcsFWxWXC9GEA8EEa43sTH2ysDuikSWcgLhAQomsCpN5v8jqgDDMBn6",
  "key28": "3QJfA1h7HSjYxYjoPJE4VQtkkSdVgGYKPyVH7gBa1fz8UwofaGJxSK4iNBP69axkyFTKV2x5XpocYv1xHJXPjTNk",
  "key29": "3K9KUoT8TV9iKRXApSQLpUp5burihZ8gU1X4fofEWwFoyZ18592U1LGp2zmQyi8pcoWJZCXLcxdU2KV6v5VxH1HQ",
  "key30": "48a4xyBnPqNNd44esca1wwNynLb9zV19RmAeqdgmmi3XK19bMSqCrmar35c4MsUder23i4S6QqeSN2PuhGT5Ro7p",
  "key31": "5dB4GVCohDGcBDfMuZSae7jo8HyeKZba6J4Kox3NqGnPBDPiEtshoZ7Npq8KMUyyg1bMLDNifCoPFQAp2wYJsT2",
  "key32": "2vg7ph3L8rvBnSS2omvaTMdszYvw9uEQ21Ebeo127es9XKxkSW7VTHQnttzicznFSKfZjC6ruvQ26syd5c5wFsEx",
  "key33": "5b9oBKi3VHFGSbFBsCDDYhMAavBzfzFU8HZSbQZbBpDLkdZF13bRFr82dQktW1vUEzZRWMwecLc4F7jjvDvvL5rL",
  "key34": "5Kh1XonfuN9mEJFUHHnFH1FrLV5R3e1aHaQYZkuNDBBbL9AvEsru7MUihHPGvHJ36974BpEFimkM9pAHcHf8WoJm",
  "key35": "3AR2jZcxeYRTikib2nhPFZTFmhhL3F9FHSohTD3o8Ks1A6VxLLNVANt35GfrcApv7LpuUyDRNgEAtZZobaT5StD4",
  "key36": "aiYyYUWFqU4gJUjw6hhEKYd5aTTcgP6sK9ZHSvzg53KAfPys1LoEH2hGEgNx37WPZsfrJ4De4bVRGvtmospznuS",
  "key37": "9GRGXAM1MHsGtdMMHZPFWLdcAJ4cTPfLDX1qGamFqLbtmTCj6tNNjGohxevxVy1P1enHboFBd59kVxkbCVRh9KX",
  "key38": "Xam1iHyKWnVmwGZWqGHLzeMQZbcCoN9ssKvKafWozQFF8hHRZV833HWSHf7jKvaWE2pZStNpYyEsZAwZpBNAbBp"
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
