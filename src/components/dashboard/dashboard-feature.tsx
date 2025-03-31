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
    "5oX5je1UuQnGym5v2b2ESb2hzNvhDjGd49mpvS3segMm1hT8uErPvxJqRcoRoEuVPQp13CTbHL4toBdPpUnpZaJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QStie38wHuvBY8ooZof579KzviMxz2sCigcqTpGKprUcjnNktwY1oHu9nonUhfgoqjz9TTyVApVGxm15LrpnRh",
  "key1": "3jT8frqKHijeENyyS3Qr1oFuTSCCcrg4AQ3w9RHyVMk3xdKDQfeMAFwKUgDM79UmfzxETtsG33XjoKXWbgo2V9AS",
  "key2": "4LhBRpZZMExupHtugsz1izSLGBCA3MgcmYyc6CRwNvuAzZkAEHmjsorKEqBnTVgrpmfpHqtDXwxWwsptADkY5Pia",
  "key3": "5JFvDZBTDM7Hew6R3kSXHZkUgkc4EQda2hPyX94jQUZUrs9cyBk7dtgWu4NXQgZQm7CeDq7VixM4Jor2YXsLup4J",
  "key4": "3kE7HT9ow5vR49noSa3qNDy3uDsVG5QLQkzvtD9ZyZxziCVridELCAtUGBCvspg6iMRDWWzUEbh4Vhe2E3HKkrFi",
  "key5": "2AdjUMYAEH7oPJ2NPQyw5epc8rNFprXatfHbdQjSn9xAd44GTL4gSiKunt1XywGWT1FzA766KN5mykihePYaHPSC",
  "key6": "3F8NsEAxhoZLFJ3MsM1H1uCZk7VBpdTWBv9TSpVscu5YkPkMabXZpcD8fFznJN7iMATgseshpvELaBDTTuMsi44Y",
  "key7": "36mKWgVDAZfmzAfDpEW6guv7HAc3kvg8jqGL84DEwcoGrek3x31wLz5K16uKWuiTSUoAPicFWyam3ifGzfkJPaB6",
  "key8": "2acgcZZmKqm8CNj8Au1AW27cS3sUutK47uqLeLVczR8EHyTfMFdbC7JDvPqJKFLk7bFE3dQqETDpDZwyv9XpHn2b",
  "key9": "5ERyBf5h1ZSUuN83SskjjES42gkGzm7F8n3Hub8BPWj4R7NvTHXpycA4DTSHkQGqqn78xB25DH5UwrAgkVB5RcP4",
  "key10": "UhKQuJiNQfcfQ64byS9jnj4yx7pafV9Ddy2AF4X52GcKST3uFsvJQ68o7yQs7Si9ZjnxmTYwJt4paPd5htZXTG3",
  "key11": "3YGuy44JbMCiNkmpS5Jb1e4mtDxMxGmvzF6Nuxomo5TqaPLbegBH2MAJ5BPvZGPj9HJWXc8ja1hXczHows21PmCn",
  "key12": "27pkMWqNyc8tGoFySLz3L76wec9MrKaqQ6QgaGDLxnW3yteVZ3MtesL1jcSn75jYKKp1ztCjcmVDnxmwy1zf2Suo",
  "key13": "61vxnXQUVyBjosZwcznaPU6ayiwzrAH2g7BcXxG2GYRNPSdYdmp8MnjsH68BfYUJMQCdr9Y4yeBdkWuJLZkZehee",
  "key14": "4HmcH7ptmYV4qLTgj1exELjxKirbHB8pEeuJbAmM132hepYjteQpH2zYPBSWdAXVNyhCCvZrcFpxD1TL3uDE5Cce",
  "key15": "5HxijDxmVa2jHoKKWbG8xtbnraS2m1Kb71iuKbSvQh3QbNqsapNvunPAAmCYzMAEkNnA92TWyABxvNakwJ66RawQ",
  "key16": "59q5cZpVZi3brVFXi9nQX4fK9kZzq7uMQ18ym5gz5vz9k9T5fiGBWusro7Yim6V6JiVrhuVBv5GaEhRFKWgSiHCx",
  "key17": "2fx7apL3CtXnPkkjMzSDFRfKLcWNcgmKDK5yrStqhMtTEXR3t1aF9U9Heeg76nmarZPT5RSFfRQ7Yu6XuxBVrNrs",
  "key18": "TNQsSMg5ZpDs75gLVShizwZm1igWoW5yEihq3eJSDqeYAteTKMHYMPdUJ7SL7ym5cQEiJtM2XG2ERPjCJsFL2uX",
  "key19": "4wsW4tDFCVCn4KMUqWJ7fXNL9Cyc6hYGkQotzE7X4Z9aAiYMW7XUYFDxKHUVoR4hTHYMNXW8PsUk89dS3JU18GNy",
  "key20": "5XFfpY11NCrvfE9qvchv2rLmQdPSacHsLuY8thkWxijPEHY6uxTbAGNQiknAdRWM7xGMJ9xugheTPTAobyWEQWna",
  "key21": "54ZpqNPWU711miPecGyrhtxfrH5N4ZCYphuuayCTYQZtJryjmsF5W2vVtjCTX98vZ1bzSGrwrq9JUHSUP8mefnx9",
  "key22": "5dRL2TPzWu87J5yhEJpA4xHXGXMVBy8SRdxRj3udK2KLkrcrh3Wzdqt6JPenwPY7GEevgF7KGpvhQ6xFJMdP86K2",
  "key23": "42Lh45MtVX44rMkt3atY6CVoqqH1zDyh9nsCMbrSHyxGki7dRUJsPVaTUGFepu2eyuKaQbSmfwtTmKyfrou7ivc1",
  "key24": "5GMwM8RqJkLLJRESg116o7cSphEj1nC1XmiUrv8wWP55mNPnmZcfAohWabzzp7acFiWqfeJZinhi3ifQxRaKNDXt",
  "key25": "3B6HwH4dSgPb2PWroXLMW4MsS17XW2rwGHKKjHZNSARG2qwfp7LJunCkUkXZA6CW7S29k9Nx2gv34ufA4wY9Aeia",
  "key26": "3YMRmfLUBXW13RcMcjX2rUNqpsHxYHmiKScims4eo4AHRNqsRt3swhLcngdxN4FXddCkc61f9CMFMQPSU7TkTU4Q",
  "key27": "S6iZpj9N5oS67kiedhZ6QvFbGCSogJZLSykRye8w4zeTuk9Zq67Zy8kwg6RQnHqEsVto6xuhorFRFkqwEQn2iFh",
  "key28": "F7CpD3nSRXP8juBJSbNat4ChsTRUDYGmEsEWMkFXbmvNBNScucQcgRdJpTsXJuvZFmPQ3XWcjYtS8C5beewZBYt",
  "key29": "5bfDe61DH4CfzTPP66kZubz9WD2uK57PxjRXgjHpMKk9PFvMtQv11Sif1nH8qE8UGXdNkhYe2hDC5D6GwEdMC54Q",
  "key30": "61Gp3jtzp8NambbhfccM3FDpTUhA6N3vmyPCYVBCce3fzvoBQFbkjdGoRP9QFv3BLy6ojrVQKws7j9cm7NKi3jJa",
  "key31": "26hjMinApikZ4ZSjwNJPbFzCmM4WUHVXUSpgxXSoDR6tPez2nVx8ThxD3ovyWFrhy8S4L8VgiVWF4Kg2H6oTxuxh",
  "key32": "e4ZwrJDEgYYLvRjrCVZgxfhK2vjeQdtZG3tG7c6okvMozYRv9kr9jzqQUaNeoxqaoNtj7qmoYUTwkka1Edq5N8f",
  "key33": "sZrYMp1zPKTX2gcdD3M6TAziMZPj9Z54ZF4dQWtrGnqZP89C5FEeEermFpgs8skzSox8qZMRgJDRP52V6G7UhZ9",
  "key34": "473SFbUCYtyFJWJP6fe97KbEFtLZX1mN2VhM3fZpmHT1eZrZx4jmjFeBaf9UqZDsJYeqYqW7gcGkePcG82G9DFRq",
  "key35": "6BujfSvZ1GRoehMWQQ7XmcK2P2AzAeEPkYQUaP1MHZdL2juHaL1S8qkNsPw5J462h9ksCvo22Y6ocUTAjKE7vdG",
  "key36": "5ycXuvnZzm5wNdJu1z3KZQ8HRAC4acXXXFWGenyrYQ4LcLaN9QTD4EULGWpsA7dMgVRoEnqQ6RJwbrKcs2GsYVTP",
  "key37": "3dcN1PCWtBZV9hCJv2TBqCV6aQ7GJyLytJAYirwQUL3R3EGVTeqqr6DdMruRXEmS5yWmteWtw2ETZxtEa4jPWaeW",
  "key38": "3FfHbsCbA44b4GQ9h9xuVuiaYHRnyszBnvxZntNnKD9ebv1AcnJ4gfmeAQKpcTxrXK6NHKhALimW5ZhVbGgXjwAK",
  "key39": "4odmXYWrCg6AsVEEpAPM3zRw352SeVUVwTFBtMzAdYFf5X5Fy2kfUomynbcdUJBnANuewvBaJD3efpUecLjdYL9h",
  "key40": "4FhTY6G1RsKeSAqMh54KTi8ov3W2fP6QNpyYfs3eMoWE5sY2bEpNDkPPu4XgfpMLyXhpf18nJRDYtYHvQZTc2sdv",
  "key41": "5BaXFJdaoTiRNUdDPjiinfK376ssdweY1BxkhWiL9qFhfqQYUQ8nm2EbTUtobe8HMxnBrkWZnATkEnVdY2qagBcJ",
  "key42": "3tnxr9s5farb8Sa9Q8Njp4jaYWAQWW5UHwpKEibv2SGzPDadb95fRimjyxLudTmSWpDpBnWcPeD8kHiJUDdxMyBw",
  "key43": "38yAeCDFqxEzyg8exSGmH4stqkQDJCRHkoYd6LQZVaWE8q6TEBJEtEbmQ9Xt3rX9WVfZ3rSMomumEAdaVuH681py",
  "key44": "4HuTKzRHEaJeFA24efRvimaGQ3u6QJKw6uBoS3FyfRgSkSzZL1ZkGnzxk9dKVzxPqpzTVGuLXMRbeV9M15MfbE3M",
  "key45": "2qND2LUn1PhuBmXvZry2dNciVTtEYBotPKW6oTBLUPCuihcy2HutEkgUeTnRMuPtE83H483Ns1ZNWhpv9jsoDUKs",
  "key46": "44Lh1YDyhbfWndQarBcXYB5Eoh2ZF5LjVUEqqWBwtcHDHzTTeCzr5hQXUsj1LoVZHftfWG7Exz2F4Z8Ws6FyuKfw",
  "key47": "WTHUU2UhACHye7UrGfrPCRWnpPwEGXM7rJ95mWop2saspRMfVvQLBRevJELuYGa9txJBnuwRLqVovSUXCtxvqrQ"
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
