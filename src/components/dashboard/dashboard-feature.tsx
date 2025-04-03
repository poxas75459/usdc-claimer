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
    "4XH4HqGrxY6SvZniB6BeGjZW4wDuTFtwG9a3sJCHBNGGZwRBvNjURkKkEeYV29BySN41NdhdEWdCCbZYQC8Wp6ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmUmC4Lvt5aWDX8nkSMoaFwLVJj8TdjYD9KspcaoZWQt8xVuZrqm7ByvKq3hThDkVWh8K2QXLqBDh64ZobcKG41",
  "key1": "3yNf6BFExTKAb1TNK6v4siosGxJPQ7FTzrt2uwmEMm3KMVkd5EwfsyHK5woKj7LARpgLiFFaDD2BHUHWxbF1ajDX",
  "key2": "2WfUJqr1SdMXGBCwyA9VWsFnaMtB18Cn7SSmXPEPa8PDyoLZDmhHckYXgXz8hV9rJEzAJ1gYSsZ45RBwDhra649a",
  "key3": "5GMqJs7c6vPxfBXLjpdkvrhVcTndSEzkjXLBgZ9DTwNzx8Qsr8Awu6bt1MqiTrby2yoBU5KuEZADPctPVMtCXB7g",
  "key4": "55D16FwQpHSPSQApy5mVxAJHSfhp4a46E5DjSU7KETn1eWJxCM8pR2VeZKpqWhwAJvuJqofkj67wWiFFzpVUraH7",
  "key5": "g9iprRtK8roD4S7j1TC1nXf39Lf7LDSBitXUkuRzquz5TEYPXPMNQ2YC6sjTjahaen6hnz4YwcehmL1TBaUPcYH",
  "key6": "3rtNLCyisJiVvst8N7RGuzkNsUF8ajNZ4R1kTbspridBWncZq9wz8iJWaYZ2jkhACcjJuWzMin72RspTV32jitsE",
  "key7": "4uwjQ5HqFeJwNFjZDqoU9RR8YPrr5PZc8Q1Z8BBdnbXNRMaXi7XhT2yDFXFnW6UarfiqUbRXgTn8x2C1hCAGvhhy",
  "key8": "45SHZaHFHdEUBrGjcr4e3g9qXSyVz4EX6vVRN6wLQhLhM2561aAqBeLs614biqqXGrSQL3Vqg2uSDc6Uzfr4jayf",
  "key9": "2zrVTfzrdkeNSG5VrMXqkhe7Dzipi1b9ZHkxP16GMhe9EpiApb4nS6ATfZBMSHGQJbagKqKzPzZngJgsS5Si6bwF",
  "key10": "5tSV3xfkMQV6pzjWcVV4w31akS8RJYDPYrkrF6N8WFdW4ynLkaGQxGKSXsSgzxwjdus4T6GXa4FW5Vf7pje5U3q3",
  "key11": "3vgKcAtR9Eb7Gk7verkTK87ksJ4eN44HX5MkzJt4sRyqkH4iU849HssTWZYjp5rzuxTdyR9WptG6UcYJdkGfmDsL",
  "key12": "mM3Tbzf9GJEEnaCN4UL2XGhMsKw6sfwjxw512Gz8H246g3kes1UEJndgF5osPbiLvepUhm7oGrdQcZ1qXJy7xda",
  "key13": "EHQXernSoxtT7n3yJZPwctLEw9c6M3Lqc4xc9VdxjUkmgYNHPdmv59VwXCm7j2aMDWSXn7jb1sZUrLg64pCqZka",
  "key14": "LTCmYKoGicHSNDh3y2ZZKKpbMHxm7kiGxbQkQSv7dv33GfuiESKYEv9GEPfEmq6rgTf8a4UmCHKqMbE9AmNkiHG",
  "key15": "29Eh3osMSvHvsKFjyZsFtWUc6pCeC1qSvrfT6EeUqKtqd8c3Sogf8NjqHbbEad7rsZTe5SEiFCJgwy6UNRWtvPhc",
  "key16": "BBzw6UKttvQHxqY79Mfyq6w55pNnYzjrW9QhHkz4YMMiw7LS75DBUcX4jPM1CpRy4oqozHSnMXDFPTuEas3bNJd",
  "key17": "2VcQFStVXUXDDtMnD1cE4m7N5v2BtkzXo6pC44PFciDfq2kMdE8LbY7juNeQiXcsV7XYaHo1C63snufW4aecG2DC",
  "key18": "2LFpypi7crU1PW1iuTN8Ffi4CYE4jGBJbTcMaUx9V8QnaaGHjpJJixr7SjDSDduw4jA9VLfQPY4gqnhiF9dvpdgQ",
  "key19": "5WPRLipAJnfT8hEmZmP4ftpBfEiwD9vPC7pRjUPPMyYbrNW1VfBgrorAuPdVK7d3VHxuiV51q4LGMLShA2EBKApy",
  "key20": "4vkVkgymcSNSA1RLkaE91ezmSwgyzPzBgm6Eg1rBvdyL1d4eGnQm4NJ4L8ZzCQR7fnxQzJ4fbqcetpdW1Wa739ML",
  "key21": "gFU69s45CkN36sqU9WMPZfgMNKWxY1cSrgZ2iKkrXSUknx4HqWoEGJnx9xxPwCEaWqfrzgSFXMugbRwswPZeDnq",
  "key22": "61GzT4McrmPLh3vysC861K4cTLVnkem2BjFfYueAViVVexYdvdLUrmf6FtuYtgjnCE89rsfKbTFBTGqBMjR13VLF",
  "key23": "2xKuUsvM5rQ9Tbz1GE6UryFsPfxa9nRmDvsnMBf4xopgbXd2z7q9aUbdgAZzt6tsHCJE4XF4b3zqX3rMTdViVS73",
  "key24": "Kqcqxx4rVHiwwPnsC7d2mNSUsktrcAhSFQ8SXDccXFsBsCSwWs8RXSx92indbUFTKLombTrcDMmqQCd3By4WuLt",
  "key25": "26ACcv349jVEowHTWw4u4JsWzuuUJW5WTZYL4PcqPrWZnAqQMU7TaFXdXhfkvm784FNApG7DTCpZbD8Mz5CKQXmy",
  "key26": "3xjRyucT44xhoJttRGws72sN3UvqLNANSvR7XX3qqW1fyEuE7bvKXuuDnpqnRABNwnCCJVbv3Xov3aWyUdAfKZk7",
  "key27": "5NEwoSD4adH2mj25A7CDjyszYbyjCSfncmF6KZ2dqBzaa7G6D96Ag3AekpdLL5e2VcMGGWEekGmz5EZUDU3FrsXw",
  "key28": "3WKptnyM6tB8r5tpciXqrjYyRTXs1rbrVpYSt82RyGravdKGWk3THPdFwgmgA9GEnxVtG3DXKRJdWzhZHJaUQhWN",
  "key29": "3EF3cnccT7WMHqNLdhnAS3GP7XerwASLsFTjAYVUMYswQPPvooit2UYxDGthb2rMkhBpY4JxuTKzJ5qXnHvLkpU"
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
