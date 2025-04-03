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
    "3mNjGqTpHvGfjCRq7BUBMKQ7TaxnYb9o1Yrpak6cfTzmo8GR12X8ZFtM2xB2g9FSJX1VUhaPUG1xQE4wSdMjed7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fSwsYjumSG89nSC8rE5ByeWb4z9EiH3QJdjZhTQAQ6mhEravLuuwFf7KmR7rjRnWgG62ewQMtqjqhPQjLUkAXMN",
  "key1": "316E6bZYKvq6FcF7aycLvFmCq3LsqTxzawaiBwedULkDq859G2JCVpVHNRCePTHiFP3u22qeTvr5oxobaGBDKFwP",
  "key2": "sijmAgvwXW4XH4b8nCLbiJvkJny3JHJBXrfvZ5u29QyXpTuVS92Tqyz5putLnaMJ4zL2bkMvUmKftRAbiFNKM8g",
  "key3": "4A5kMR1Zfd57yigB4SaYQYxQ6NkctZpULwup41eN8qUf8DcSo5LHyFY7aDGtjvTFW4UidnG8wCbBAQjTUzXtN97x",
  "key4": "323anBWwDW3ZQCbYeTk2s8Pp8cP4DvtVn9qA48DWU5gpu9zgfJo5oRFg6t6JSRujCM8F9uqRZ3Pij723NasBqtXN",
  "key5": "64447vwzgSx76gYKFwH11R5P9aRx29FnTLMkRV5VizvE1WgLk3Br5zNNgNqoUjQMKNkXJmpfFSqaNssqwACR9Vdh",
  "key6": "bVzhm7fKugvax1vVDWFwEHiYLtpZ4uP9Ps5h1cRP9q8wj8YuYWZZ4aT7eD71RZGdJdPaABxhdYsciqNFrmrcYWX",
  "key7": "59hqaoBo8MSAJbGq6xYJZfsMHikE9H5osk5RFaKccoDQMy6VWExJ1mWbvTJxvwBbCniKWhEmnFTAJZ1g3mPMR1Ps",
  "key8": "2vk89LBkMPNkutR1E7gQPH5KnQpFMU5gtWRrWa5UWnfFBwAM2RxnX5yeyA3BHGWR8vQGNJfVLpksEBGvPvyGkPZa",
  "key9": "58vX3qySBVyeZzvFArsNns5DGqMeWDyMM2XB4dmYewuFQdtNor9tnu9pc9hP6sYaAeG3AtDfkShpVGiTToLNtBik",
  "key10": "5bszJYKt8kBbBuQwFaBmuF4pe8B6STp8E1MaXL8UxH3PBQ5RykzHFhMhhrr1DoFc6iRg4Q8MA5tATVvvKofAmpz8",
  "key11": "jXgKN89NZtVf2Rm7b5rmh4d4toConbd3h4goJMsKonwzUYJcUYLxoumimTY8QDiFFYjnKukbUNYWQ4zF2RUQjy9",
  "key12": "4ZSVPVg5RDuXGrmCFqT5B6QLnsw9eA5YQ78cLoBYdCVof34ARV3anEG9nexHit3YUT7DsLwTbYbewUPb4Mkspdmc",
  "key13": "27r43ruVkYaYzwWNSgemWrzWjvw3vUEDWNy6ivHdAoxayp6zQPDZ2bRC28uXSBYRw5o7DxJ3MJBTEm2r4e8okNFd",
  "key14": "2yraMgVAMfh5wDsgoMvdJrQ1xgfi9fG3agBZq33MA5u5FNW1pWVDsoGpsZUgufvS4c8yUnNQwNejDVFoc8jFpD28",
  "key15": "5W38BPb9RnnLPTr9LsDNdkmCEZRnMmGxumCei3P8aKJ5gPn6T249JYsQQKUpdNNUrFivv4YFsLL8dFWqz6gXmyaC",
  "key16": "5jZhiN5geeC7V6Muu3h1PMBhdgd44wJBqh8Hxxa2XPpHqjav6xHeH21qp2ciVaeqYjwutWhFRkoAgpMUUDWXAGSG",
  "key17": "27PQAAumW8Dh4NWx8mb32exm4YwWY2WgFJ3GtD8n9NWCxEgaVTEWvN21mkbzYoxoJywDNL9S2kLUi1Vfsa5QX74c",
  "key18": "51iKGe6D6xm6NjcK5FfPiaPZNo3L23FWbKJCC82dUt712vrNbSWFErxHoDCLPgdMXg56XoGkkF6muuNfh2DkAF2D",
  "key19": "4VLuKGC5FuABWpAb1SxLUCLBKaFBfkWZDFE8nyw74Yew4p8hoCeY8GmdMW44oAGHFZkYLU5Bs4GDpYnZSKbKdoVr",
  "key20": "5vkNzZHpmcq8wBYtU5wyjr6nzuSfbjkNvhrXFvbGJzDyE53gHuTjG3Y16ew7qVmkGAD4SCSQ2rrMNrKmTjMVwc6",
  "key21": "4B74kLpwPF2L9iY8GqDvLueVq43Qud9FzybynkSz7N7ZXuY4rhCgkvwHML9KVes9ycJoRzfat3K5YHyKPnJhAcFb",
  "key22": "3MDV742A7wHV71guRiRxbenTcsZqgDrpoMSAyLDdFZ2axsGQSdbpptSXiEvxFJrHkiAvNDqDZzi3VHFumjPU6K3n",
  "key23": "5DdtwVCqyAUF1r4FjtKJG125hFDXRZoDCYeptC9tVs5uwAMoL441qZyTSdJshcHb7J8GeUW1768KcK6XBZEbMevp",
  "key24": "5XJHaKYPGQjnDyoGXBcRQw3u5MmSgVaU2KdnbEC7H1Wibn8qHmnr6GcNfgYiGvjFbUSyVjW99hpvdykPSEy7D9ic",
  "key25": "5mKfFCHZXwm9mhfbQpyGy2c6Dd3hr7P97VnPtg3nt9pvtAMvCDmtkUDKvrjXgnjaekLtpvCSkKxpkf2pGe7phn9Z",
  "key26": "4h82BBJczpK4rpD3AkwycBb8RwrCEW41qCQjjjRj8xHftAmd7Mf1SMwNxJcnY7aD3JScY6iSobF5d9SWGFpiTt1R",
  "key27": "kd4U6fMfcNBiL4VJu7z7TdwAiL2qakHjemmobN95M7uzbndcg9TJfuDUDrYwLQhZCcubcRZCV7mRC44d94U1bjv"
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
