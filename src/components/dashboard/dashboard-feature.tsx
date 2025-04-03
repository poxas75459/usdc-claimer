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
    "4kMC3mDn3yMjTZ7YkWPtnHxxTDctBZrx5XXmNG51XXu4sdVTD51GKaFZaxJvjEjK5nKq9uoYheUt8GnVetR65w5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eh8WC1PQuGHcyJMQKWoBUf2tEKExkf3pM6dJ89AK8QhcUYHv2DheLzqART3jZqVUr9iugAVdBnJmJSwD6AVDzBT",
  "key1": "65qNeQ1dYM5QcqfPkVZUdGc9AftKcDueBGMhyocEwqReDuPPMVFPY4iXtwFt1JkgtywVn8H3Ewun5mjoT9ksR41Y",
  "key2": "33rbMAB8XxjiLsPMRPAfuawX3WJe9ryNVHEeHFVa6EymoftByd8NCTQurFvVAW4F59WZigCWjtqNfyNhB7mesD2B",
  "key3": "5K1c9NcovocGYRj3xYUfbG5Mv3BYspSaYXHr2b114ZyYx3ankkaA3s7QE4Qbh4fHUs97tQhWsKNuUwLM4PFboTkN",
  "key4": "57JkSQmVfJ9TVZn2QGACnEpUiDQtErc8Vimm6asGCkNL6ZizkKjHRWVNFF9TA6M4rEXbmP1asexgnNtRuVqSu8o4",
  "key5": "4BitT7QdFE3wy5meJCqhdfXvyYLhePnumaKhYSrRk6y6u2A4oUPD8Sp9VY63t5EyWLunRZzabs715sm8TK68tebf",
  "key6": "5cWhMf4be5mYbTjFdBiARR1oA3F9wrBk2hRrw2zxzzQhi37tGADCDnULiu1ncv7vJu2fs9fq3DPw8HjJYw7qm4i4",
  "key7": "5PTwWDhLLLxy9Fc3JnSFUfBEUNjtJyX5iMjgbtqVFGFVPD7TppRXnsWBjqzGEGfQb1ZA8qf3JCsrXoDSaoiwVT4G",
  "key8": "tztSF4RuUB2ughriXjh1CXykpPUWeF24p2YBhfBmiobwMM3gwqpWEXxNg9dda2zXauzD7msQ2HgrVC2KuzP9vWg",
  "key9": "zuQLfEWXYGUQvw2koDxkBGGPac8HfvVvp5epaUCUqST73Bn8fqDdGiMozfU2S8PEEvd4NmuchVcmFt6Hisms1KP",
  "key10": "4ZZPGhGA9nszCz7h2fPVvobGMA1v8tvNLR26KTV5FwFEaAHmrmsEvrwJewFfHL7iudr3Nnbszmzgnz2jSfLtvgH3",
  "key11": "62hW59zLVg9c72hsuDCDVKRS6CXot8TwpsnNH2tKb1Hza5PdSTh3P4F1XDiF8jne8Mnx3ZYHeBDzTXCe3h7zfpe4",
  "key12": "3QdBhCar4R4jYkqYKLVdHQmsqv28Yu6GqqSehk43hHdncpFtMVynaF6CzfocWW6JzD2UNYnbmEiEF4XFw24MadYb",
  "key13": "upYPWsTrPXQtzTkDgde5QqwhyQcxUcXBZZMW4aeHseGZy1k5Z2WX6roBJYmpbe7yZCC7rMjk5HJfipv25dvYFn6",
  "key14": "3cpUpE7TyEPuf8g7oFvHAixko5QEWfiPUNwwhipVqEs8vc53EavQkMQNpoZV8U68ohdtrxf13wm5my1Hk823yp9",
  "key15": "65ZxyaFLLfMDWpG297gY1djtvb3qxrsuzm3VM9oRmFvbanMMrUc1E5AZuedg84JfQUoNvW3atCVZpa2m65CpBggE",
  "key16": "54BBe6XexWPjHQVYxMcrQQmsKVAtRsA58bArwHjxqDDBZjCDEYK8nxHvNJQoKwaLRjRrQ76t5VSLHrCSiHpSphAq",
  "key17": "9pYNPuLGz2GiHJxHpWYDpUhSG3LqL3M3w1uoE66y4ugN7bYCFoAgG3h71m8RAQcidr88QDWdqEEkj8PHjXTYEAM",
  "key18": "4mSdMgk4Ax3YohmtjS53ciXGQTToFnCCphcufSdKd83z2yUEWFpbvZ6CfqJVarm1Tojk6GJomizWs9Krq79gUw9v",
  "key19": "tchmWHyPb2MqgPR1ubq7Yzb8ajX6tPUQXC4cY6zAUrrARUB49vjjwZhLVjApUZGPNzjihP4nCvFpASuh4mkD1Cc",
  "key20": "52vtxaLV2dnWCNtZ9tAS7YSYkmL7aTMHdDzW52fqFx3M5NhLE29AbcZRq2bC1XaS3SPjDLFdAQndXEAuhzWngVTF",
  "key21": "2byhvmZniNXWoiWXJ87r8kEKLmKdN7s6B3ZRqdoaSZsjLbWwG8DRDYiHDZUVJDPNJs4QbM5FXdihGfpC8yVdGVgq",
  "key22": "4ktYdUMEQZF5JXyxK858SUANceD4Y5seEjCRgYXTQULQMAMWHVvX2D61yk9JxDAWvyLTZXqqFThyQLZzz9eZQv52",
  "key23": "MPE5osMFvZs5VyeUCxx48VneXf56UYDUFWvwknyvYGnyvxDdx3KteGhXvUSB6DQxKxEMyepswCnxwUgAgjT7tgP",
  "key24": "468phWGDmHiipVHTVZKv5DE2wwWrE5wAo3XmuGVegK2EBK5nqiw4hMxw5wXZY41nnZeCAUFiGF327278GxHVVkj7",
  "key25": "2roGqK3FvGZtbLwGM4b29XfR9t2HKR7SuU1ByqXrY65pbuaTamEJzQcUWCeSjqXPaVpMNCEBH41pcYkLPTM7APKm",
  "key26": "5uYsMNrp6gmcm7eWSmmoXas4m75tadJx6mmCPBpVvrguNEQ5xj5kaXtkdUJdbKbxYxsAm4S283NqhKz5EdkRrUrE",
  "key27": "4V4tSwRi9WYrDXQTXh3gR7gPboca1hEfVaHULBRWmvS9VMsHmXLo8gBjmfVW11BRE95AsMeLANnQh6sRWFqftfmj",
  "key28": "3RwENUEtLAMkapMkBrn9Z7qyHwYJNYrZL6HDST2gQgFyXvSRmTURprx9AMTFajDvFYcUHXr5DTCdu8wrwYwLkSLu",
  "key29": "2XAeRDw3aN7vXxBozWCBBADLKAKjjzNgTAbPPbM8ZnrNUzXfB55zREwn7TPcZHPfVCEs7PgXN1YpY5TE51Tt7fLp",
  "key30": "65ME3wDPrVjDMAVXBsQcqax9F1DCuHTnW8kSgcXKJptiVVu9t1c4axSR6RiHeBNRsnTdWRBoGusN2Y9NhMiNWGkU",
  "key31": "2kijVUcT84GTg8pHQxGem88GxLWu4V7hPaLjnVVgG2hvxZpjDBxAJAFwfpZnt8m276E9H9zNrqaD3QWM9ouxPzp9",
  "key32": "2USgpoCMCWpxPkD4Tfj7qoJu17hBBkUjC4fmCgvLmUmsmvMFuSeChw8MnSbpRJvzWPh2TmJ5nk2H4Z6xdB29EYiV",
  "key33": "4BHXjQvU5ymugUGQcafbTFJ8kPSM4QPy3fAjGXm7bmBACVuQbBFYhzgGMpefi7R4gAR7ueLWBD6UZsEb3UJ9KUhu",
  "key34": "WV52TGNG2iy4JUVG2ih5Pkx9WrYrQXcpyZCBPhw2RTmLZg7JYS7zFHrFRtiCyob3cvTLHAHZzjPJZpZ9ykTy7Hr",
  "key35": "5SgdVM3H5kYe8x9WjEk8MfBgryMpccVR6CxU9vrLEHS98QyWGAsVPTsFkKNhb38aZJy6ja5SkLarxrCa2V32NRpS",
  "key36": "4GoJBLe9cs4w5NAbetgQMX1Wc9hmMDtVivocPvQ7SHhmXXmHWMAZ1kurwCE1oA4WALmAQzojrbEv64Zn14eeiRzY",
  "key37": "3AKQWuNaEDJx4LhdkuVPkM8okyfeLgkKG8cjiyJp7dvVPd9UzJfFVPRZqAghEZkrDKAnSzBnUbtTuVK9Cj7yDchP",
  "key38": "3LiCHdH5pux9Va5vrTdAfZppjGZvi2PuyK6Ey84mKDTYXhSoGhzRMz6K86JngTtgM8QBbtWLaqbs59byzYPUycQX",
  "key39": "SF96TgXCyeHG5ic22SZijyJ8vBG1s42A11Lh8QYeCCvmZv54qMyjeihGgpBtH2KycCmDymgYek3LG3y6h342L4W",
  "key40": "5qHQjdESqdTwjBPzGdCy6NeMmNiFi12eD4miukKUcc1aViHC9Yy8HajAvHwLKFVR5NST9bnhXYcHVnzgwKJuEfWM",
  "key41": "2SLHZ3A2DkFKbcGPtPXcKsyymM7k9FwMAfivNwyVFXg2ZxMrPjUmJ7qarHVazQvDo3HBmZv3FGmGwXnvatb14PGT",
  "key42": "GaNL9H73mTRB4CczvfEAu4K8zHCexBRdHNEa2eEqdSc7vCp8dxDbZBjZEqoRH4xjUAnbJCuNBtpP7FUNZTGqFpL",
  "key43": "5M1GvFoUCYWZS5ef5C3qKrX487TGzgV5Vbd5QNvk3te3iN638ZAofzEiG7MpEmWK4RQo5h9iSgf3dLd8d7mNyJq6"
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
