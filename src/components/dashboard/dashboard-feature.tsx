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
    "4xu9M9Htr8FXg4KBKLNfYs6q16wHb49E9585vtqkepNiqmquCGM3DcEMTEiWiMoZHkYw8JUvbVpXQydbpBrujDFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDM3okfPmHWuEox2aDC5zqeV2SybL6x8jRbtHCGGfxcNPytNTLWdFJ6og8WNjfE5QtZG3zmnfPNg8u63X2hYbj3",
  "key1": "5FaG73HqWojgZekDuhCXUJjFWzeGSuK4o4vBCoL9FbyroxM8nBUJAiDxeCtFx7py6Ljiv4xHvXz1jk6ApmjZ7gP9",
  "key2": "9b5VwG87nmnHaSNzxw9CtFpjMDsBM9JTBF1WeTpXscTPsXdYFNem9RJ8zGrzHMxAriMCHL8GNz6suTyRRgAnHvz",
  "key3": "4Uy8Ds5hXAH59CpZyYxue2DbNUH2uruHD3reEz5jf56AjofWpNEc4hnP6wGoXNnYZAMJKFcwcpakLauQQrmrgBih",
  "key4": "39AgxMYqwErJB6bTQSBfo4WTKM4Sea9Di5bLEE35L46MaGLKrJY8TezYobujfzss2iaS4iwgNzCm9Wj79vWU6gBf",
  "key5": "4nzgc5Z56YCS8xvAxk7UxghKgUNDFz3LSEUFhnPzw15PzCNC7J59i8q82UDWiZHdZmdoy1hQUqfCcHEsZ8C5EARN",
  "key6": "3h7XSe3mNP4DVBRyHadfzdFsDuJfdvfsN2ba5YRP6JmJfhGjKKBG9KqendwZ8kuzdueTR3CxxYEpeu25V6dM5S92",
  "key7": "VWuAvrd8NnkbDAfbehXquCF1f5eUbqnfVk6nuao1bgKtPaahinDdWpw9TFiRo5gt88ZCJbqtQfLoHmRfvRzqvWs",
  "key8": "4s8b2n6VD1NjC1dsq6JZhxxiydbQcKdHoz3muLerk617M9iSYsXSUpHMF2HrqWhL5y5jnGQ6LhgycF2wg6MJawo2",
  "key9": "2Eavpgb9UQ8m8p9Dywv31U3rzhx2Len1KeJoEUYRQsyZhPeUGJHi9fGQ8tWE2gVfXNBEt5muUSvrrS6bG4wrPqkw",
  "key10": "5C9qPHnswZHg1kxPFgB6tz2r3iWzCrr5z8C1nGRg43CRp3QkiUE3wXg8JnqujE1bsgwc31rW1rpPMD5Vut4N3djk",
  "key11": "4f8i7i8YQYVsRKvn2eWacRUVorcqfEXhQr8ibKA2rHE64Vx5zZsEM5WVWn8ZP7d9JebdwoinnvZGFXF9qwbxPfwh",
  "key12": "2XvVmDXvHP1piEpmoP8KDgbH8KkjxtQLCej923H8Ye1Bj4gHsRxyr799Lamu4uadwWMmMAfZKwK3j563NzAMDCiZ",
  "key13": "35qSUbjqqQcmwXmmhsUbtCV1u3nReSUTLb5bFbAbUwLbF4p5kFewVyR6nLJbELB6Jjah1GxprMXi86CjrBR8aY2V",
  "key14": "3RqZ64wDuydqEYWnLP2kxd3PjytdBSYPwPXYEDf4bWJpnpBGigErUJ21HZAkYMWE5sYMKL1Ebk367aQgTv4BPjDt",
  "key15": "5MkdQuX3aBruWdg1ZVnBmB3LquBXnTjWcjs6mguWFdzuVMwKBPMGrVwKKbBEQsBA6EdYG7sNtNF9xPEe1vNxydWj",
  "key16": "57rnb7NqthpCXEUXqQ8kBCcuDCzmAc477rKiYfzf5uZqGQUtQCND2bTE2VGjTPyqSBiTbv3157scvr56PTJ5iFLc",
  "key17": "3iLQvjppAsh6Jr4Q8zQUZXEghqJDa2UsJsbTnTcNNdCe2Ha9FfL3tyc31y9raP1ULZV8nPT7iAVkQF7AGZsed81V",
  "key18": "4UsxnkMZoE7gWkyrxuSn87WtpLB4MLhdj3rbvSYLCq6exQGUL26tBXfNSdXj36ysoGmTQp7zfp4ygyT8MwWBXJ2Q",
  "key19": "DTJJTXb4zF5sZdoJ1mVP8KJntYyW6hZuyKk5UTeo2yxBVep4g5qHii1inS3wkVw8yjEphxDLEQcdWvwhnXknq1g",
  "key20": "2LVs32cRKfKeMZCYZozUXPNEsqqgqvxir6rgGi2MS5VmMMLcEG6iZJvE5yrmpytaV32nUqTRryikVa888pdj9x9T",
  "key21": "63s6935aJjvXsdinTkBj3pso8sxrYvYkyATUnY2FZyyEnCYrv812DGQy6rkKUGu2RJ6FH2MpqQoV6PYxjgcuV97j",
  "key22": "2VQLBZraS4xx6PUswQXgfVS1PDipLPMoT3VqkTEhffsnjuuGuUQtVQEbxWAQYSLGFStTL8qGTdVcur83GRti5fp5",
  "key23": "ckfboFJS6rD7safrb4RWo4bsifmk7Br7CLtvMMCpmDEj6QvCdLNxg67JULRGQ3Z2Ez9RNxvgzKmGjidycUWmY16",
  "key24": "3RcKFTTGUn4ag12KVBLSo2brGURQmfeFFb4KTPWMbQCWL3jcPJFEVT1KYWisL3qn3oFyHrctbjMKmtiW2LJvm1W6",
  "key25": "3yCzVdDvQBhZKc1TFGdHAb59JZSc9GQdo2CY8MxufH4pjJ21cDCr5qE9P2C1GW1MiNrSgcve76LcWJc8d88E28HF",
  "key26": "2efczdQFwajztGuczoY6uJJGT7YVpKpyNM3PjveZYm5fyBdDmdysmeMbcShszYyDxW1rBe6YaWar7FmjrbynJc9g",
  "key27": "21nW2fPwXZMD2NAUJwAMynFdaREv1XYHHbCyhQBcCEMK7N3vQV1uMYijoTcFGwyEHxC8Ty1aV8xmFhpC4onMf5te",
  "key28": "4D6pUdDDUCXLtzYojjoFTzEmQRRBXnKrqGmJJpbcP7ocR2wTzu7DPnj8v1Kgdqvcip9Mb8AsQYmLMySTM3QYvqys",
  "key29": "5ff5PkGL7CSPCEwAZBtdKHJh8pRvqJWKiv7QcGWWkvDeAgZ2qVibxDm75UkgngdcuN9sKDvgXNBWbfecjXxUFAop",
  "key30": "3HLHcorpW74gpyN8foH2cT97vsojGxwDJUuBhYxA9wFkxFMNgiYY2NkQHSMkwNm9FK1Rtw2R1serM4M7GY5uespS",
  "key31": "4naMS3eWfYoV2Xrqg74PH4wbhC6YCjuGGSvUEew5UThncVfRZPuKL7NwLWsunW8nQ1jbJKAtMDyEdTQgMbFTa7wJ",
  "key32": "24emHepS3PGAs3N4FfqKmiFXhMcGGHmSbK44K8uw7LUwGKXjUvWHcpfbkXDTuJkaGMFaoWjjX8onN2HvfXb2cUjG",
  "key33": "3PMHT96T5qrZfs4gUqgfbbP25RFmzUVUPc49NYiawN2CPV79tD9RXBsNjohBrqiZ6STu7nq15XprZ32zJbEep5gw",
  "key34": "5wCq7BsDvVHDNC247PQ8JahTpa4G7T9btQu74aoJWwVhneXiz3NfNXNRNxDVkxCRckbZ1HSZgi5WiGCwA5574eYZ",
  "key35": "3k877CyftCvSdbExkYjDkCAcwmzLcCpUG7KCXNgXyHcmWWrNtswn3YSTJp6HRsXEeLpTsnJ7F6jAvnUk5HSzxMxr",
  "key36": "m9KRNW4xwFQhSMXK37xyGNFudLPG1YyeLVgk3vm2znc6Gvd9ZAtx5BMWZ6FG3jS7D9RYQyq7moBcGs5Lg61srrA",
  "key37": "5SqbyUdraFtDLKtX6R8njDGCkp4uUwviHSEQjNq5nUoatm8XvZyg9RhXwFHBDWKwGcbpm2cWRzbwDx3Vb7HXdYgs",
  "key38": "FrjpkE8TyiN1Zq2JHbsDdyvJK5CKj8khZjk7eTij38j69JmxhUhkKYniqrcDs2mc7JgHCZFnNP5g43vH1X8Ymmr",
  "key39": "5PWtTsPapgNQQFSs3JoSm892Gt3uKeZFBJeaFwby1qynJosA7RoUqq3GDXTExSgjYa7ZTrZZSBjsw9PB1mEEUATX",
  "key40": "26hYd8G8ZrbnjnGjm42c6hV8aziRmDm3yXFxUUD3rHE28sicab9jujpTvtiJLnJ8igDQ4AAuxNCyYkTixi5PoGVK",
  "key41": "9Dw8bnw4wD9VXQbvGqiJ4ofnAbcMCK1sGQFZeGT48JoGekqc8a8QuLmHM3GL1zedagEH7bbk79dqaLd9rTtFyqZ",
  "key42": "5Jpfu3rah43PGAvskwjZvD84hjgdtT5WRc8ehMsfjbFFpuAAEjcbpmLpGDb7QLbJcLyp7BxtgxtspuAx3pAeBwXq",
  "key43": "5i8Jt95bGNVQL1unBF7U9HadSyxZe9eKfYrcGwHdH56P3t6tLTfCjMYW3GCmKRk4TZhxkoz9vBLDrUoddpxsD32h",
  "key44": "5XAnH8xwcHcDksKwmS6cu5Sg2A8mzXRnMMvQDd5kmT2TQkiW4hT37YLbitahs2g4LYX5kjZdQPQqGrtWjRqVzrDh",
  "key45": "3deT3FwtDGG3xb6mZNPNuaqL15tn5Hrs2FS5KCe34zKcymAnuSTRaqDZ5awCKnhM11n1YpsjbHk5vtYavkA4aE9F",
  "key46": "5ngDcBz5FQLByPErCP9cm1TDAghszQWMYo8F6ToAipH8At34CxrVuac1ZByUt3ivGkYcYKyNBQDUkHR6PRcPW1wv",
  "key47": "w6RirKsmszzpKWzcY1MZ5TJaMh7owbK532PH6dJqjFTvaNqyTq963guRgfak4D2K4duuMJ83p3cGc1C954gcxxC",
  "key48": "24inzZXyNsEfJuHZWFJoDFjJsi1EjwxdPdPLvojvg9VDsQtAKuyGLrJSyXhjoTMjzCtHZMJkF3nagj1oEC1VasdF",
  "key49": "2pqn9YaUfTHEeQswfSPG8x9Df56YEvwii5zmdot6niW8HrGpR9RcmMTa9f9gwsWiK6R447QvFmJKGmfvsoKsHyY6"
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
