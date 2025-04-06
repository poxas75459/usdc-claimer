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
    "wrJvMPGZ3g6qn4AEX1co3Z3NrZJPPMeN25HuyXA1rEVtWw3LNxcTjafZK7CYkLoUkRNNBqzJyiHi8KC6pNyJGTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbKje4VgbHjn4XiCd9WWWjMJpZo6BtbXcpAc77BgLDiez4NXRb2rAm9wCc3WVntdN7Km6fngv7FyiDFGPXhJkUn",
  "key1": "448HaWBzJB6gvnaHHFsH2eiKJzaCrDYjq8DFP73g8PHUPZZHA1XDpkYn7fQfSkJ9SgiPsvyWJXPQHkvKwHHRixdM",
  "key2": "42PQUnPvY5EkptutCUBg2Zzvyi6ysrQDXdwepu7crSbAZg25q7dh9UiXCim3Zmcu8UL3Ack63QEmLuxKmyNDUx3K",
  "key3": "2ruJNw94MESZLvQMyaWb5FSVKEovTm2VbarkmRMXwFLTqG4x6cWpmrUhDtuVPcm2J3mgTpZ7UU8hRz2CEpXtrDdo",
  "key4": "5LbADwSDKnrx5R76i3iQr1B6RjFpqmf6G2cwsjfh7TY3mTK85iPXxGr1Us7CEC29AJNe2KgzqDMeUzgpsU57s14v",
  "key5": "2RikE4DsVtBheRLyyr69pgT3oJzPYRAGaVtu7ZaLmyNeWqC6qe4rQEA93w9UsG8F7DmWr2vzpdAvDP8ygu1Udhd6",
  "key6": "5LRuh52cffNEcRDtUtFmdKQMHYTC1sjRpTz9i6n8Jwr52Y6PKqCD6yrXXMey8pRs7FN4a47FyicGa75Djo2Npvp2",
  "key7": "fdnFCzAPR4fDctNp6YySGVq79jFoUFab6DELCVdyDMZbrCvkBAEiLsJDhKc8BERLECDKUQFqHitqwdxczNp8a7M",
  "key8": "4eEJu4UkXgwpjWfk1EGCyDUY74zxbE7H8svxnpLCGSnWPJcWQunmbPDyjYektzPY2cSswa7YYDjaCgUEq8mkSGw1",
  "key9": "2NgTpiVz8TYkpe6fQH17AiazN3oJJ2aGABYFMZUA6fvnqnbX7QYPq3C8nxZZDguF6oqTraGkYCQRVV1nt2A4zbNK",
  "key10": "5zmCx42MdhqVvMHGm7Bd3nYn75ekbBPLMk9Bsv2yswc2R3er8gZGYxCpbT7i7mjuszRXyMBpQMWgNUR79fCX9iYN",
  "key11": "37KoB7XtxEnPMfZsxBwkweiApeE5Lm3nK6xRJLE8XrdweoM8i2pHJDpD5jLSf8ihcMUuAv1qf84Nj5DBsAxTrwhG",
  "key12": "42fGyxYqBFUejeNe81RssKQyuWqdW4Yr8muTLXkzGPDPe3epwTxf63M9adULJHGvkxiqCPgfhx4TQh6QkXVUhpgM",
  "key13": "4viTzYCwVeNE8BXT3hT2G521yuomZL6wQkrPR11Gk5goQgWg9vQhibgsaK38pKFfmLoF9d37mdxwkZfq7kghZ3Wp",
  "key14": "3MfTF7vkQfM7Bn1pLQeXKQJ1bKN8Lm87KEJfzmGe3ygRF2tb13NC5r7qfxTR3CJ9ygEYGrZ3BpnNcfLkXCc1vSd8",
  "key15": "c2vF5CPZ8Xmf6Y3LAiX15vWp41sjTNx3nyRYEMrVxVno8VkWF9mbJfy6KCZkrtHHwjZRQMfRNXnrSSkTcJftGog",
  "key16": "45nRQzScfRrzF33wUnec9e1XAD9C7gNAfTPHdhWYh2fhLdWxuzmDsVy9nH954H1hjEhiGdjcGLb5EPyUMA4oU3rT",
  "key17": "4gs5t4VqHQqQ8Ecsxsqzvr13LWP4ehTt1Dkj1CTK5h7XM3PXxyhNQJGRDAyWPBr3SnQ4cg7Nf3tuPFrgSZRMyYN2",
  "key18": "2FDsZgqzgMBP4X9XQ6BmgM4yRqVjSWPZjJztUUF651NDyHgFL5eGuHZKwbZDjoNwzWGuwb5M1VTta5Rn4AzPiRdQ",
  "key19": "36tRZMYLazX8zhpHAcjneb24HJatsiBMVsvVg9wJj6r8LEUt9UT6GicCiRKbMyVNVyQVwH1v1ZmEHuhkc5ioLNZP",
  "key20": "41RnC2rKWRqkVgahrF4Y8s7SEaYq7TfEGWXFffnTjKjTxvJpC95knhL4EH3t9hKn8cTtfm6jiSFpziWqNs2NeVRr",
  "key21": "WoA2kVqMn49ka62fafjMrecucHGmkdv44bRUY5BMa4NhJU3cU5B949ZUou52nqmH6czdRc9x7mur4R8tuia49DF",
  "key22": "jaGuPhPenAknRgYAVgEVPjdsJ9oQJwA4aQDYzsecinyFLo6NvHLza1WKqyLCwaq8SAyoSE9E4fgpo4yrJFZQc6r",
  "key23": "2D5bQiC9fVkrmTfBSuRD6JLCfrUMV5RbB2afiNT1rPZTSFiWeEa3bXue8iXRmFmf35U3MgitmvqbANTzCq7KZEG7",
  "key24": "4zp3cvXbZpPNrrdW6iEHxvAvd8xu5cHJMYhR7bAoNURgoKKN88dALnC2b62GGMkeYEzpYwSaxSMTsGTbrqLQ7RiA",
  "key25": "3x68YzprBD3opgT7arYDFhfpMQHVwQ1U1KF79g23ipV41pbjSWGc5uAtk8BPAfpQ2Lc8YJo71vxAXhAmf76WtSVP",
  "key26": "4aw5Xgmm2M8jQey73mp9dvzMZEaYi5mS9SREdeHHqsnGWBU4XWwvv5w7JouapPWFTTEZ29SbNxk31Stfo2Ru8bBu",
  "key27": "4MXN8F86CmEZqFtYU1Z32bo4SfUPuZsTKtGFyf4qcfTo5gS3uC13uwNvmHVsDBtsCHm5TKFWN6arbbjhu8X4L9xr",
  "key28": "4ygiBfZC4kEnFxQjDDfUPSZR8q5v3gesi76D8WZPP3y2Yvd8X7eFRPbbRgXmR6Au2byP6q9RB8Dka9dUGrGvH8so",
  "key29": "EbNUxKawWE8ez7g3B6yfquTJJqT7Vg7oHBBMhDyX3ye633ahZ91ufG8AjVmdFvTq4294qovZiiUYsHtzuL1meBE",
  "key30": "51esX4b4rmc8eSu3rUFMpVqH5rsT3HQjt5Sd4ABuhntCwtKmwuGxQ59JLevpgHNqxhDuNmzApxxkSNjj6pXFRqcE",
  "key31": "GjSGUm1ADzV6dL9G3QMyu28WpgGXB26cTfHZfTQaWZXpgGQR8fGLuqszqgQ3yyGTQQbrYKNUwzPhKsNxHsUsZmc",
  "key32": "34PMNoU8WkANKhAZfVdRR8yU9B1v3dPorPLBBpeLBDqfr8ZDM8j5DmZ5SP6W7mb8Fd4MyRBXo9WPR17AedM2gs3",
  "key33": "3qTrVt4BVaNZedMinmmSqo5obgRCN73A4NNseBBoZRFXJkEPtzMVBVFcz5S3PUZSuGPEDwQ5ET62v942sjeoYBFG",
  "key34": "3yxQrBQmNf9ExkL7Yi9JXra2UFs79hszhqGxz7j6Gv4tTC3wWAAxbNh2CMzdP8KcNZ7werrLA9dXgtfw54Pu2SZ5",
  "key35": "pwdoKr17CkV8FJm8frHNUs4yE94YiTiaBZUjCtF5Mjv9ToDefW8Q9XpA4Prny5kX7At9qJmUceRZDcw8k4b5Lvr",
  "key36": "3Ga9qw6ZaqLpE2pxQHvqVxUymYVEsLYQnzyJL6hUWBrwczv7EDpukEj4NpBbTENSNcKb67LPnrCFD8NmN9gfGhsv",
  "key37": "cN715Etqcv7EbukFocsMTuMmFKz56niFzDeu62wzoL4e4qN5BsRq18g5fmZcd9baSz66TXfvT8Wt7YzCktWw5ZG",
  "key38": "2NdProW5Aztj3yHPtKXc54zqRV4PSo4RwXG9ia3gtdwVKdwExTb3g5ENGMmpT1noG76BCDLyui5vUkVHwDZGdGyr"
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
