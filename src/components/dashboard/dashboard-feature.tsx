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
    "3ShHm65V72BvjpRvs77qA92imx6voxZXUxd8zyBuCfcSvxVVFuG4QKT51VDjiwZpVjDpgNEvQsitQdDCA8gBxwUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omSsAJRC4tkRVkJjVt9keEze1d2zUxTRynhM5cvVHje391ay1eEVzLTK1xYYKqHeXNphyvo8HCkgo2ZrpX1G1JN",
  "key1": "4eCheFNfR9PXafSzAnBg22h59TnSP9RHEkQYsXtT6R3WKrxVaXjxj4Mr2Hn7T5hF4NQ9jtCrUwBV3XkpPnyuS9io",
  "key2": "4PM74r2GbrrkD3ZR4r3G8y82GHorY6GwYzmkGXapSYY3mTjqQamsW5xTUX8Qk1Y3QtzrdSvD3cXA6Ne6DK8u9RTb",
  "key3": "4zxNFqBz2S8opMVVx2UaC7CFw5serMb9gbgErLWe5gA9yi7QTNZN4jmuUdmiyWDocKnWBUwBXJhQxfRQ9AqAqKY",
  "key4": "5Z6GFBQfDDgkoEjN42uC6uiXgwywdDZvEYA3Pi9XxFLJNCWBEZMw7GhNTANEZx1v8oCMW4D4s3gio2g1huGR1Har",
  "key5": "57PiaTmCkX78y9WY7UyqxZzQ51uhfgcbqCukXoqU4GpBZovAcbxWLfo7Ft8SQfnsXt8FetGUaSFxLnbcfrT1LavP",
  "key6": "4jDezdaqK1wCJszuiMomHboHtn1BXmxp4gSzd5PU5A3oBbx1WTuJ36GDxDBhknNSCqQJBLG1igNdJXkjnkjS98ap",
  "key7": "3N56X7YTLQGp2xVoNGTiJDBxFLusAkuxkfocDT96E3xhhzt1veYSYn2K2cvF2ysxENyG91kjMwbCCQWEn9KFAf2",
  "key8": "5HaMtHEVw7CJfWGdviPznD9hczoAKYuAkr8KM3yCndh2uViWczNp21R3tUpqgZUTa4wT2PJCD29XyhuM1txm4ij5",
  "key9": "5GrKHLdbzE7PoQyPyWNVwA28evxhM4DEGNTGAqZuEGdjGAQA354wK2oWeqv8nvkUTWegvs2j39tgSfLfpR5dfBPx",
  "key10": "Fbq2F7NK5jZmz6hi5ikt1ivbDo4ZeNE4YWVHeGcKgZr3ZFZGb5fU3T8zYE2xNarTfqvhVLvFZPmPMN5eeLbXAcF",
  "key11": "376StNELyP78R4Hjox6paKCcN3wivgCciWWwtfq3LtwLMwzMXqcw3qJgwmuzEHEiwvZyfgBzs6uYBX6dWEuJdipV",
  "key12": "3DUB3TVqz8kikmL6W8Vn5TLGTTcGnbA8B3fYYdaMLLzfaYoH3LAwfLyYhd7oN3wzfCxu6L8Q1ccLwDhUfF7Qe5RB",
  "key13": "34mz54Wzhzi8ALA5EajB3yzJ8CLbcZaoRAjZikiCK35FJfWKXjx2JysHY1sLd6q22NKq9BaaJixvFCkT4P5Xa8ff",
  "key14": "Qr8bVMfNoE8wULnF2YrBqssZog9otE5dYeDMiaXH4fbYdEUiSaPwSPcxhCTnxF6QMcsqCPV5RWvnuYm7twdCoK9",
  "key15": "5FbUJWuQwfDY1okx8YrAmyKgoRB2asaa5as2Efdii5bU4cRro82RuftMAGArH2zTh7FZb18epJbSjGAr3aTSmrD2",
  "key16": "31gerqFSim1FXSgg8HsPgMnJTDL5YmkG8gGaHycWBPZmG5roaTZQzTj5Noi2ARSAfA8QGcUmN2jWQ3kBuoNC7GB9",
  "key17": "P3BJj8QEkC9kkXd8X2WYv67FBo659CCpecn6umSoTV9hwgeHfbbYBE8tRuu7p5tEapBJAqfwwPuxwKNg3rP5Cw4",
  "key18": "3Ga4iBc4Hw4xQwjMwuS7D5wC5NVVUBwjsGmZm4idgZFMhCLEpfSJXzPBDkKZzTjBeb4iQFAkpG1gBvwKehWgqK4N",
  "key19": "18iVAUCbc2m86UsLCH4wqrR7Kf1Tt7kW7yNuEPHL6kbut926ciMD9zymQZ9gKmtDwBe82RY51U2HVQXHFpZ95KR",
  "key20": "5DnGnLVbiDx9GVUZz2VosXZsy5VpG1FuB1zo9yKuSpUr7FpsyJPPMdT3G1rwwBGYK5JeRk5rUM1fqjaeE4rqff8J",
  "key21": "RqBwBvixbCStMsPxdrE4mKWN7gSQzFewjTRYfmqHoqY22AMmUwJkPXJADKW2eYWT1h9oNUJC6T72F5qoZ5Up5bY",
  "key22": "4w4zqaymCemW13GwqDEvVo6s8EAWW4JF4UKL1EntJ6fqoVkNBEPEfC8LT9q5uVboTJdWjUgoJyRkDt7DmoxZguDQ",
  "key23": "3xqLwEB2Ky4xHmpzSKAR38oiCrhpgJDqY4bL1xAS5ncePdouLiNgXmTTqnvJg6AqoqE1YLzXvbe6p5iAeWbact3K",
  "key24": "3qLeNCkcrhXrmPWz26W9jEN7CtxckgowyYMyQGgHoYhCsogesCsedLxkxwW3QX3cJccbXf3Tmeqb7NyuGb4PaUyA",
  "key25": "3yM4i7GNAzbMf5HHzkqGhSUBA4xF33MTK3eg7na6U8v2Nvqr8ov4pybEq6DcZqzRwtdKnNPgfwC7K38JzboYzHkW",
  "key26": "4xKZ7ux9rjiVjcYAMnAACoSFdqAnEYqYC3VkAxeY7CWcGe9WaFNj6DDBuzVvYTPLcoVtYPPu36xhEVyt59vqmLbe",
  "key27": "Kkjd9EyYeBshNhgRR5FVNtp8wLxUTFGF7b1kwRj2545NnWffZ4kuKUNh8dUue3EaRQuguY3HjsoJhGJ8EcPYQj7",
  "key28": "3pn5v9Lcd84ybET54ipeX7nigAuNgH4cymArAqqwLitGfg2Q89P7AFwSyAMo3BLUZTabbwCwQMdi3hUNKKHvek1T",
  "key29": "5jaktyfkiv9ycFb85RZ1r78yFPPeKRvprZQz5wEVd8khRdXmkYudKjJYpFKEAQFKAyD62xRaRGazwWt4f3PNgdVX",
  "key30": "61SFAkfJijmATumn6jcNLS1LikS6QH8DRWrb5JmFt2mgB8n9VqaTaAakJVduszmN4J76X4gMZBFPMHcdx11vMAd1",
  "key31": "3fJEpQnqLarvPdjU65dfjtsAfv3CJSFgqb7wwm8VyRrsHbxDtwn1tXiZFGH6BgmkG55fsG1YQMduGbac4RqrgxF5",
  "key32": "2XFSiokRNPPy7hMQgmKsywUD4aEA6TQmwafgowdKHEBpUbKkM99n1uXRBXL12rp3i7KoQ3ayQFRcrxBuR1DtVhCD",
  "key33": "5nrDN7HQxxQmir66NqfGuf7ugXGABtQhV5HdYY9SZasYnCuoxVWE7VfuszVquGTHqVJbPH8is51afH2dwZrXaVtK",
  "key34": "2UQ4MCKdmabiYdnYx7KVen7ydyuJCp6HfpaC5VhaQ7RG5CTCk64B9aBX93Mkr1AtYRZEo6CBHXT2Lc7ECxnddv8u",
  "key35": "4CuWC3zwQVPEJ3aFAfQzzBPAfUwM8ARtB1k8Qbb5q5MMCov397KmBWZ2JkeZpMDvRKP7BBrAwHSMFuZoxjQid6A7",
  "key36": "31EwDtjSg7FYBqNMes5xiRtz4rkFnSrST8wTWkXMAxv2TEjmBgA3gum2EJtLh1rgzNDpup86sH3M8wjxNMEsvSKo",
  "key37": "2kJB2fmo9Lm8r1gUB9YhBJLAwxfDNf9qNQBF3g84hCBwrzbmBYoWwTvTe7RqGAmGDVYgWbpMojWmjLDvy7V82SKS"
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
