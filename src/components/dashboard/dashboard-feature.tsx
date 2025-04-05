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
    "2Pu7fpBX3FaJi9uKagVGi8oDKYQzhnJyG6k2sMow9gsLkMWohBLnr2ndqduoM1wm9e89CiNSBPchvf3HYqTbmQrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTrAohK2Np3U2jnaMwwsBcuon7aRR9oBP3EyWrBrtdtCi1kvGF5w4Qr7Fdtt62av84j4FLvzKMLJ8jxdAWBcYSi",
  "key1": "4pCFN1vtkk3evwnjTrcHQLMuMuL2U9nQUiGhCbz5AducmKLcBodjDaoG58y4bktkN5R8Q9DXHt9DqsgzPfWaGbnu",
  "key2": "ksXTiUsU81Q2VktGFcoHK6Aq2WKSabbMiYFVz47JdMAuofMtGA1Z3bFfxA8P9c2EdxLiBDqttDyXt9QDmRsG6Yu",
  "key3": "3J6gnYh4jqxLKsZedTga7XfFCLfVtG3nuVwteRFonfw9NwXfWYxpo18u7g4qw1HdKC8QN9hiP1M6rbNUenQeJ1D1",
  "key4": "5pj5rdrc6NUthw6fLM8sYbzin65mfrnX1aCTri7BWJ4efy8BZF6tt6L6oKP2HFtm9n6mdZW1HxFbxo3eLwybdyWd",
  "key5": "fubYzaCZiQ9eh85cQV7NJ5KBuCp1UwzawYb7ei24hUSxpZg7hKE322GstLFzwbzG9yJNg9gWnpZYtn3koBqyk88",
  "key6": "2a7HKf4hpqi74UHFiSyr7mUHscYqRFrdu4pu5gG4EbaSZKjbHhaT6xycvqzEocsmqPRiBHupBF7vD4hwGhAdLtEv",
  "key7": "4Nn5Est5KUpKxBusSH6VKcsbjmYz89nrarWccBRnpmqYZfwr4faWZZFpzJgAAKt5nHy8EtY1eHRYJsZfYAq3Xc4H",
  "key8": "4sZRh2V7xrL2pCwMGh1tHqBWyqzHuVu3KpxFQ2hx77v7TSacPGqpStSoYun7xkDbbJDKDexYVMDpcFZDgR5EcXtg",
  "key9": "4A8KkH78wnn51HQL5sMXEMqmuNAR14M2SUv2sGc7N4ZwQSw6Y6do8AQW73oBENT33qTMQWgSrFTkmYiDsXmBYbgs",
  "key10": "3cRhHp4rLRgg87e7xUQfBGwdw3FEbHgniYNz94PfL3PHt1VB4k3Sa5SzQTVnnAY4DCpW3ZDfN8LSwKqki2XNbyKP",
  "key11": "3D1Tmzz71Hp1p2rWVa15jQ9kvimvVaZMsmZtvtjNxkEm664p1tKrzkctkbZyMYKBmBqev451tafgtLvqMv3CTyzA",
  "key12": "3SjpQjxwo5VM27Nnz8HvsFLCjFpkXNZhd4j4QSvK6w5ARz6qmiAdrLzoLcMrwBDNwTR3LqkEobCcGAa3zf49vUKh",
  "key13": "Xyd8fFZ8WNU9Jvd6jrQaNAPMRpgjPEMfUTFupwZ9pEVzdRJ8iXhugKxqmBvjfS6iso848hdeq8pjxBBM9EWEQpm",
  "key14": "4ma6f1oVX7hEXpeqHobTypbZofnK9k6ucti3WB5SRL6aWkj7cDwh4CaC9SD7aAGAitoweZ8sXxT5cz5e9wQqy9Ho",
  "key15": "3S7CXcufGa6xH7aWGW2Hs7zd3ezVZwuQqeD4tnVgk9GEpN9A3JD8MF1U14WLjLs5NQecVUoSQDSRxfqmGsSEXjKE",
  "key16": "5Mm4LqhAjKGhiXKG6VMQyjgv347VxyDCTwrypXVhd46Q4GXp23EMmRKPLADc3bWS9SkRyKC6N8Th1zMuuzHh5qC6",
  "key17": "5BYWc6MiSA2sYvXQYZU1E9DaZmKsaSre663vi6QVVUwhA4r6CRjw1TtqT5z6tSA4y18uchx9cz8W2KVHvA7DqiVe",
  "key18": "4JnRWSWCrTVSptBcbaqfVfbVkdjxNfidSPiQGKbUYV24uFdbo9mAwwFmJMfWZHGr3zc3gxNzejQ9wrq7GFmfQA8B",
  "key19": "2o6C5qU3vKX9zao94zFpw5NBSaaAt6HYEDRzr6btPKc68hj97nBHyfZ2YLtvzJMQJGQC8RRf2YkE49Cr3FsMFcmu",
  "key20": "uuLzHwHXrD81s9ZzESKmkrw1Syu3Q5HL9gj6uu6HM5K5in1QvH8CE82y9QaH2DG241aQNUrbUx9LainGQXGsDiR",
  "key21": "4e9Cbn34UqvSTDwkwGSQjT1ShMdhYHnDRdeS1WQvteJmketfDnhWy5g8MEhJm523vfFYsyv3M7pGBUYxjqqAGn9a",
  "key22": "2By3f6wu1d3AJoTrfPC9mXfbR7vf3eJZpTiNafLCKDqCZEG8e78SRweTy2NUSEM7KD8gn1cCbJJkadaqogE3d694",
  "key23": "5w6z1dubHKgTdac8xWBYzQ9dgKPWvSBvUSQPEzBPBGiSzdkFQVYRZtrkjgrYAJqWMHEQ9kAFwRUZm4Qx694fcoSX",
  "key24": "nvZKU5g6z3LLdBYmvfs9hEVbnngEHqt6Yny3iHdh1eUsmfWUM9qCvGzN5TzC1AoxTo9aZpUcbr1ASjVVsdaJchc",
  "key25": "49GC5aWwJmWs12beqR47BCCKFLRcvw3C1GSLjPLFUerwF7hiWB9epWoL5NwGmV9WHtYZStSByEhsKBk7sv45b8Do",
  "key26": "jU51e84JwWvHPWb2fNsNaHWTQ9sCWqAqZ7tAkNECUCVYHBYwtCwoqXQuWdMVv4bb5KbLgQu82mnxCTML2ak5ckE",
  "key27": "UUzBjDXTAcNs2qxa6zSd6KhyKiuiXdKFvenmy32xhPmvTkeS4P54gdEhov1YdVjSFjow3TgH1pLz9uTrrxD6UCc",
  "key28": "2yvstm5dTxCv4RR9UgFBfnZff1Vap1Lr8xdU3T1ARMHY6q1vuDk9jhwAkTjkWXrsy3vUAWyaGPpBZy4E51LHxz4F",
  "key29": "t4xF4Ty7GyiNL57wLuMzrUvof9ccAago2sgEefB418kRm1vAFzn84iddz9WfNQTg997XPTKk2Bxf4GSELcMGA98",
  "key30": "3Kwbhub9VdA1z2mxLisKiDAXUxv37AgaQfgHoTiVv7JYdXXTNW7LLrxRqT8AFBeF9aD7CHXLgkVSA11sHBVFm11g",
  "key31": "57Fn8FCCBkt4JrjU4DrAMtJx9pCcybw9Rn1VedTxMzbctqbaNDT7zaRP4LntAEXWTsKF6b2oa8VpN8msZi751rit",
  "key32": "5QnuiU9pxgYJHyKBdjy62EwfNYnfATxPvjiS66yQSZ7eejsLzveNVjC4sZwoUeJFc8nujU83hJVkxfds2cwXZhPT",
  "key33": "4kHGd9EmFpRi6f3aBVia3W4gWPmVQ3ckScSEZxCmnCyytNVh2VgJ5KUeJBsfrFHJ1ieAhpFuqoi9gC5tkmfiCwQS",
  "key34": "23i3jhNyAJRwu4yUrLiQ1PRrx9og85gKrHTtJeu7wRznwoaguuj8E7mAts74XGxWNrP7T7xMjUDKHwpSoRXh4eST",
  "key35": "uqupkMc6jSb6z49K9cvnntwRa4uL5pzkVr9yMh3SD4tvcS4VNwM9sfDtYYnzeDRK9tdJfV2e7V4wK2y6g96A7vG",
  "key36": "4RLCkVXikpe4XLXivjjjJDAdCAh7T2PvsDwrEpyP15DR1wUXw2kosM2vJAG3EaPYii3AMh595zUSJdznCo3cen8d",
  "key37": "2FsXTs7rEJ3uDF6pt465cyoRtsKtW5LDYKyNkBCRNds5h5HbnmorXDzrhyU5juqU9B8ZaL4qPHHWKWkRLNjidcfs",
  "key38": "4jQZGkMceuKxkajpsD92SnX8aeFqQG95f8Cg1hTHZKRmGTVtBy7NPk4Lku4BKXtjFtmgq3YDUujRQgFPVZcBe6D4",
  "key39": "4iJpGz5T2m4uAUkyusrYhVg7AMUbdP8hTj2u2X3oxQPd9N98WiyzacygMTnuWMB46BkUsyrMMaTCRqv5YmBwqBuc",
  "key40": "N1q7JAuQi3vDmAwkfXF64YHY5Rn39jt44cSNVyRVqbRsQ8vpF4z8oUHVqz7ca7umGeY1iL1s3B7LecLZSgvMixx",
  "key41": "4az5otzZRuC1a84soqNdtzAQRwj6eRhXwKeHU7XR1UNoCE9TVq9B7RGkGfpoXivVwPNRsafeQBVyNq5ffk1BMJqm",
  "key42": "5GKdHESaje5L9SSWLpvDPczLNnz3BzSiE9T1dQKmcajJEsjM1AphDUcgrYxh1FzGMYBBqYdd89Jbo6g8T7BEYSca",
  "key43": "4qEbHWgcc9siijWogTfHXcjEfp7bv8GYZrM9Hbdcgbg3DeWE8cqfG8r1xmehYyk6crXvNsjPHadoXZVVqaXf3r6V",
  "key44": "4NQ2jGEMwC2uQN9duvibRWdtGv2tD2wA268ncqLQTJpJHJHJgXAwBiZQPGo11qFf2j3moNAnUSCoGzLpuixCHHZe",
  "key45": "4JmpdahJZh1a9oWZfGJr51eEtJmjNAfkZzWGBoCUhSkCxnRCs3VvRc8iVU1ZS5q8Hdsyep3qypSNpakZKWphauqw",
  "key46": "b8tahxbbKZPrWRopPHnMP4M9D9yonvPWjiGNqotmmRXJvPjWaDabjG5cZfYjMevA4TJ7uA6kQqMm5Vy8uFUeBBx",
  "key47": "4Riwu5SsVFGW3UJyk1KMVk4GqSLnV7W3KXiGDn4T923MFczkZ8JhEGHskkq9yzw6oM8D5fxhh57AzRudUCRTz4zV",
  "key48": "21W4v5QV9zvVj6W7iVo8N9aTDkbb7vdyuUkLepPPykdPRzSoCnXW84UAjvxDAknYVQMzjM3ErzkWp8S3ndcCRztd",
  "key49": "5Tf9p6UnzeSUwMz3zHfMcr1FQzkws2wVDqcNfBozPaj3kTkLoeXpvCUHGFugdZ71BGqYpfiaRiJjmmJ4GMxY3KR7"
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
