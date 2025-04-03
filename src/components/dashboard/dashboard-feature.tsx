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
    "4TiYpzNGGqTnKbsQkLtgceMUipug21PhueeqmpA5YK2sUmAEqo7wXjCeKZn8fd4db39PEuGeue43S9YrueaJaxsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8aaC5ScGS4Hgbww5oLa6kHZimoEGo6p8WkchXAvF4rvxXdq6ZGXDFsrgMPzTADpoEpoc6QNNMAUX5qcK3K7HKK",
  "key1": "5SPgheLYDgmjdHj5qvh6nZrJLzsWFFH4xohoJo5gU8T988DFckJMLDXNQFKpXaV1C7V8eYXzdjNC7Us8C1tGTsSu",
  "key2": "iwTzZdBJ36XJnY1C8BTLoC7PnrUd9SPorDh5c1XTyWbcEZrPyVxYp1x1nrWJJaAQV5v8JZtY2ir1hinv8Egi8Ps",
  "key3": "3dLiQQ6pkwgc321xXC3fF8K51cCQ5TbEsQN4zHaGasrjb4VLJqTfkWfSQb2vDwNR4yAXenueoUrtzw87n4wvSNyH",
  "key4": "5d1c3LPxtLqQ8pcAKWj5DtS8QvqzYP8MwJCkQvm269JTHaTkrH4xQTui9uLtEsyYqXjfnjJwoZv8SEhvTKHn6kzS",
  "key5": "4s4uBShc77UuTwZkkNUirzrfbnBzoSJm312UsPxWviCDA9MtX2G2tBbA5vP9MqYMr2gzej7PvpsQZjtpd4dU95VJ",
  "key6": "367UnBAsYSoWpZFkwwHgH5AnfjXdDAWKuQjYCp8eWNRG4Z5u8QHsRKLn7T98wpwtjmp5XYinfLYCXDV8rMfuPkwX",
  "key7": "af4YZ3rfWUTWFY5PpcQucR25HktkyatB3d73Mxhk7mDQyD5UpbLL31MF94AKXNiEocC9XCpNchELVnkkrKAisLN",
  "key8": "2SqDPP4mDU8zbjrEN8pL8k7UqPMDBj18fkoNzY7tmgsar79i5xk2TgxxwSX6MeYFTttK9wu4t4caUGuEJNBFitoz",
  "key9": "2AycxpGGkKWFrk8T3ATM2cJhp2Rmi9yQSGPXLABmxyJMvuLzj9bZY2GeCB5qAfh1ASdadJ4YQKhGMU9wzwAB9mch",
  "key10": "4Tz1eopcHCk3MJcpzg4tGfBckfWMCZ1pfKAoMAV4M34P3wTFZ9C8edkC2LH3sP8fqrk78S5rhaxotMFg5HMa4Uvz",
  "key11": "62YcbLAYSYuk2vRAkUxDgy2ztkGFJaNDvWWZpT8Z72XT4NNxiWQFu9ydcNkd74v1raDWC5ubWYF9Nst9vfkxFg3E",
  "key12": "jsFSQtRJ3BtrQtsagMw7LsezDcWE9wnNY4F9KvqrVkoKURKstL7Ew5AdmQAYfQNJE1uUjt6Nz9BQgLCC1rDQSBa",
  "key13": "3SWXfJsYGkg71d4uihzobWd3fz43cifwfemZJuV7qgvrmPjf8kVN9jJxRC5ANjkiy6Zhi9U6vL4zEQGHD7CTMyQV",
  "key14": "qcExZVj4YQ9RNTpGB3RubUwtgcnzMLqspZDxBheoBCRd3VTJ9cSpsdq9cEVLhdBWYkLrqQQjnSGqTgUMCqcNrAz",
  "key15": "5EKknLVK9X7orJhh1kGWiaUhDbAzCNETEjXz6RMXhij1AE5sJ9Xx2MvHzAgHobBY8BoLkHpG9figQCNFVrUBk61b",
  "key16": "493ojuTwQSM5gDbK4dK3T7uGQReez2EM3JnBRNman79gftBXSYZ4ubfi3SRdeFnWNmU7EwDk66MET4XFA9wruezz",
  "key17": "uezDZKPuCW6thu1Jq6DhjUiBFT1UpL3Ec1xBAQcp9spG2P5s5yXgB3tuSVBxrS8QMWmAjCqmZqoxvmLNpY6xc3C",
  "key18": "2TYMYm5qFWmwqkDmNvmQkDZLUmUTTfFFwfHRt284XaVoFcGTaHuVM2CdQPr8ArZKjccXCYFvPSaLx7J9zQ8eGCHB",
  "key19": "LUHqJyvwQLbxW667qiMzhv4bCUJMQQsnNEMAioqxLhoeuUEb8WePVuLiuu7AXeUrQHe7KP5iKC2SR5H4NUwRiTq",
  "key20": "2t8SRC5izjs5UDeG3bSY9vN1i1H4CPAM6VKec2RXfW6GMrzQDvozmrYR73c1N9ysF43y8L5ELqS2QWCxKtKonQuw",
  "key21": "QAuUardkF6GwojTZax4aEmZoVHutPqQRXhaDAt2ALuqWHkbwDwr2XajVcV9xhch4R1CtesNSD3m1PpUSW8X84kw",
  "key22": "4uZ5S1BZbzJJdzTm1ReX7E3XHSFUApYboZpgE3CiPCGm8BZPUpAqyBwjUX4ZenZkmW2dC7Fj54KDJ75DhmF9PVdX",
  "key23": "jveauVQzB1AoH7fjLBLz9tKAoQYCj4ddrSQVnXzFc2v1Wz4AaXu8M52YDidepXMhEwJQcU9usJyiX5B1fu8SqVr",
  "key24": "2HvyeRqkiMFsamf5GF1gmarfcPPrg17Zk1pXHwtk5qePpxo7Lok4E271VekCD2Q4ex4FNWigianDVj71RwRLzGvq",
  "key25": "5TR9GVZDZimQxrZBscAnMXdCgiXARz5LPV4DujcMTMh4uV6Dfa5n3jh3Z9RmgEwsz5fWjjEJWxjpDHc6GVWW9Wc7",
  "key26": "5ZTdoZs2rr4YFVzsfzpoxTbDqkcQL4RTcPSm3EDtHw9xXPFgEpevoFxyZdfYhey5uxm35U2i8PcNXieYKUF3X3Gd",
  "key27": "4JqHhCvGVXD1yYWcKXiTPdkUmpjZVSGkGx6UeDXygvqU5DoazCtNCpWa3UMWF5aatrs1wF1Xxo4xyXXVh9ZryrRW",
  "key28": "4jeUxswmMHvcL4wZJ9RmY5nQqUDv9C2wwsGVMJLmieBgvSMVtEWxK1WyEH3UMe9XRpnbgbxjjbTqMLBGMMaShMc2",
  "key29": "38Ki5LM4pNsZRBAghNB8PRKat83pfgwpb4QHUkBbivVqof8ZpDqVmYdAhoYVy9UQJU6zrN1x6x96LoTkR5dCd2Pk",
  "key30": "4NTbYjdJPHw2jRmQddZyxcSbHr6wrc1t94uw2xqY2mfS6JPXEeG8vTEx1gp6virDVqoKZgaFPEgNJd5Yn7n8ug3P",
  "key31": "5jnexKCyamXBnMF1UCyB79G1EVBEaqmGWkvACpsbyUW6LtPdv4G5Mp9SLpp5DWDdsxuk1Geu5SpCNTpqYgrMMrBn",
  "key32": "2qLA2CGGcMKfVPQBRw7DvYd8ZLteH1iE5dETuSTKdNGaV695aVQXi3dVSzrMTmPFHiGvjhSPpPx5SHkWboBgiBrC",
  "key33": "u4nqSWXQVHrbKsoC3LKnYgzXMxEDmKcikFJgjtJexzep7B8S3auR2Xp9QyNuNnU3sQ8c4dq1skztqqLAiGGMeMZ",
  "key34": "521Ac3Kjc8wd6C2bJcP1R4sC9FGJGHWZXoGZmmEsGGj59wSWPV6kYteB4b2iGuN48qx6iLuDakd2dvfa55sUwWSM",
  "key35": "5LTp7ZFmzoDezY1NizLW3Qb5mgmADDW8wvgw4arCA6zMvevc2PQXXd8XPSBHbzg57crFpCwhquxV82tj5YMxC71g",
  "key36": "D8bN1rSgMA6aN4V713h2JwE3n4ykwSSAFzD7RvFPni2ao5UDi8EAuU1J8oQp1cTRUiYR4Ry3oJQm8F1aCby7yHZ",
  "key37": "49mXBio6xBZw5QfGWfDofwerx9iX6NMfEChxtJ3Ce1dTZg3Eef9kqc9EopDXCv5Sn9Mf6wh1gNBe5o7rr6yGr3sm",
  "key38": "5QenmXCQc3qd5Xpr7GoaMvqmnRKdWWS2zYq7LKBE5LaFgJPrG8sNz25UomzQAExppDWLAYqEsvQEW8ydvVFMbUti",
  "key39": "2ovCpoKMHvVnnZktHnpohuCv6hsC1jMLpZwXU2ZKkjyamTAXUQGBNqcLmQJXGWePP25WKhdMLPDAdKwZcs9RC7rd",
  "key40": "3tBEWxoj8aWZiotLd4p8PnFo1txcSkhk7U5hiCmt7oytuRE5WwYgnqneh5EmWhZwJESceJ7QzjqmpFaFgeRdktSz",
  "key41": "2f1ByvwEkvAJckQwZZgY5GebVRSf1Wr67s6nDEihQUtW927V7AV4CQtfsJca9AmqE4U4s5iAyzp2ewkG4JDcHZit",
  "key42": "4rrUSBk2vZ3oxwGV2Qa2vP6MHsuUqk2nGu9hFpv7jR1p6c3XcgNwn7pEExj7K7NPTGjPSQCN2QMpzCSySzBvJhn",
  "key43": "4kD99FzQarAbMmjx2zJzrcsvf3d7Qf6tdHJXgHMNhma5fniGCjC4cun9A1zoykqrVkpENkPjTphy8JLJennvSzxF",
  "key44": "5oN5MtXkVSjYx3ViM5J3TDByGMsWaHEPrZviqWadzKRuZgaak6QPf7rmjD9uzmhPu4LUAsLoye43SWdnM3BX1vMr",
  "key45": "3jq3v4JHqusqNSJm8vGAAz1YAcyfxRLTfVXAQdhkWspcxBhz417S5op3GmyZTNE8H2s4smrVyxDqn1dwJsPV9384",
  "key46": "fwpUYEmQDrJQqVA6o8HLxuj8WggWLHJed6AwyjHB2NtMNYmJiJERTEJE7FYZtEEKuJvEdxRxUbK6tMxkN9auzYm",
  "key47": "4f5bXGARNC87GRtJyGzZTcHgaHEQoSJAG2JWbTtgDrM8budyTuSidFRYd2Mac5DBs2vUw79dCfrnoK1WCDrnZrMy",
  "key48": "5ZkEA6TfypN8EjaHoBqLStLfAWqiDGPrsWQsX5eq36dP8ktThSwsxWy6oPgcz3tvmT1khHUiH3ugdjMCd75gPe8G",
  "key49": "4ZNzDdQEiEqxdSdrZ6sd9sb3qhHFE7hEz9ypUumHbqtFXwkBBA3AaD3EeGUepnGk2jWxwDid3iurKgHkFRm6MwcG"
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
