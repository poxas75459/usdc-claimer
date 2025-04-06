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
    "5QPWEFVK5xNz9XLCYRMW8mzVK9rzTf6Skr5c8wXRxLikVC6bUvpj9GpyEEGdVEdixZn5G11z2WcivP9iHVKAbKw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VX1c4LH6JRcABsirSL8o1Dxa4vuHiSbTV5TSwMuCg66NhwGgpm9oKg6H9fvVMZMvocPW8Q2zrS3PYsLGtTuDb92",
  "key1": "54r7mvvkBbfyhTt9tpr6K83WLjEQe4ZJP76iGhfLoY6BRZ66V5P68NnVueRE2dKhjAykMhJKnh7beqorqTAYx35u",
  "key2": "4TGabVAQDe167TDJAapm3RV5G67vT5eiB5h7SbSCu3DNyeWnYZJPJZ3asYa1aw55g2a18JjTZpxUb9gVkXX2dbKK",
  "key3": "4eBPCmVzRgUs4qLjPDd5sk1pxJAWzBYCiahcfDVyffPVH5x8BXL11NFNtuz8RGGAHCSTSVUMMUw9F5iy1Tjk8TGe",
  "key4": "5uZpb2jNJvVtBrkn6UhuKX218oSaw4jqohxvxHQuQ6dJeJ4WZFbhArR6yhWWPgeT7LGvUkQJffnx4skh4v59NY8a",
  "key5": "5rTwtKr4qWh9zhQv2zhvEDLHR3G75m62EnA3NursvAQ6u4jvqs5xJNfamEDRFAuuFPRDAdBVgYuVu7NF51msamkS",
  "key6": "58kYYMrjbt1pUrfmWCpuykiLMJ7cseWZp9jvCAXRsy65nnjc2AEhHAgf7zdoKS1nZ457vpyKdZ1jAMHPyDxZocvN",
  "key7": "4F1U43VikeyhbiTJMDjQtxmAuoPVZDDnnAAByjJsaN8bRcpb1PVwnbGgob2sFvohaW8ESS8w63WwdQETAfbdZx7a",
  "key8": "5xiGSjBderDXgBEhsKLoBb8eWhDuBtYhFkEUCVYk44noyNhtAYqB4FzWiVwXZzbCsQuSghTksCm3o3qWK8X6iKL7",
  "key9": "3M3R2YVcfek8cKJha5zXKztv2Jovyw9Y7KQwz5fek9JmFFnAhfzsbjvSySrZSaQwVvMUfrmZccp7yHtWLhpKQNEh",
  "key10": "3UdQ5RbawEXP6CNiPhaoyEBvZECcjGaB2jJuucEMfVv8CeDMAW4PkupiMsVEGNiGm6bwMMFQtCpHTQjfrLzyExH3",
  "key11": "28hqbDUazJQJoQTG3ytubFqMZ8zoqUcxdYAwzGHkRfKN2t1MNv5RoxPMTVXiE255KCtZDdDsvBwjEsHtCbusdwJR",
  "key12": "PaPDChcS5RZW4qw34aPZZcJ9h1Bqv8dYg7hpm8iFcMr9e8MWf6BAoxg7RkvS1EQHZbRo8VCjnW5wgn6YmuhHqkm",
  "key13": "5MNSmHB6MwPFsn6uLrMwEWpyqZnoMFspyMntYuSWYgQRdjKyLkJHWU7Xx8qvUE9AFzdvni1QSC7tpp2DbVsfrkgD",
  "key14": "5Deu1a6p5JWP6amDW62AwUEs4c7Ffo8BjGPvcRGLkNgD5EbbV7jFa2g4iHFAm3qfZzG6MWUqoW1UMpaVyPzQGR9L",
  "key15": "47jaLFKjWPFTRLdzk1LvW4vdadZyvMPStBWaaARXbuXPp1GgQkgUF3DvzGBTz7gigf4D61WUFbGha2Bao5VSLiF2",
  "key16": "2v3V5rbRUeHadPjDHyk7jb2uUBkZuJBeRyv1WVFfcuR4zv54PsuF29Cdfx9FuCUAB5paybRokAvT8xmsyaNNVf4",
  "key17": "3s2ioiUFJHbyCqxXwdYPTUDprUcvtfJyczZdxhVzMHpUv4mDr4MKBGbGScgQex1NjHHXvjuvXACqEumP5a6nWZSL",
  "key18": "2UFj7v9MUMKofYQ1SLSffBrWVWehZwopZCiKtpreG6To758iGtspeLmehfZkqGxcV39cbZYPJKnHZLXeKdypiA76",
  "key19": "cLSG3XW2qsfzsWaxdEqvmbNXpdg43HTD9yxqXfQ233asDCfGwnBToA6aU5UxrJe4zbf94GsjNEqKuzaqS1xAfmh",
  "key20": "3bfKEGzDv9iBxUeMf2dnz81jvYn6KZpAxTgQaBQxkpTdQfgSiJHURpHH9gvpphBuBToKLubQToyhY2xKkUCgVSaC",
  "key21": "4jQRWndS4DfLTEdjzVopBwiBbpy6xJvNa32QDuktSwUg8QJHtWmmVp4hWSJAMYvj5b214sL79YdmT49p1P7YQEMP",
  "key22": "4Wk4kLGCSh3cg8gtw8iYRqZUZ2p3YghkuNjRNj5HUJ3ZNLqWTma7yKA1Gnvphm4oy25wcvjMitzZ75FARuXbZvEB",
  "key23": "5RouMm1Dc1CVsQNdxD6zn4DfEzPHZvyGxvmV1EEKJoTZHrVdjKiSKijmc82WF9YHk4CatTxTRUEM2fi1REWQdaF",
  "key24": "4umc1TRo1Qny33fEXGFbLUrpguek2VLJYhb8cURpL1otKrH7e1mpNHoy9C74K1PwcQhgvx9xuYtEayzyNQ4njF8u",
  "key25": "2NrCiAvWP7pcjRdFTnsy1bhr5T1ZfUduPMVoDejDGjxj9nRfUQU9V2MTYz6Akryis5xzPgfRq7Nn2fL2TJdECpNN",
  "key26": "5WNFFr5AuQ2K48DzwNiR68C8KoYXi1UfwvFqw8YkKYr8Y3CQ28trCLhqEktVit49cRQyXK7QKzaDzM91qjkKgsTs",
  "key27": "5gAJf7gyrCVWkxdSuA4pbVxfHw9aov6turwtGfiqnwCKAvX3jHt3DEhm7zGMYJfWce9DCgPHcLbcRc3v91LKar6J",
  "key28": "4KhetTKBXGAyCagZHeSirD4SxaP1ty6QwUU6KTApodyQyWCUN4khwNF2BttN9c6CgqcDxTjRoRjiGb89oQLe2zNv",
  "key29": "4ohkwRm2qj7XmugDbREPFQe9KBBLJkrpJeEc5jmbDq17wzWbueFsPeLxxDDedx2oTv8Vq4DBQSd4AjEY46Msy6SB",
  "key30": "2VFCeqnUdExkfkCyZynXCM4FVgdywUZwqh7EH5KTYR3oUTRfwd5cCvRbMoQcfAcmagsGbEMXTHBqEzeuwGpHatPq",
  "key31": "3HjDcApaB9vUJobTyfC9bVGfacstrc5RmQwJzpWBNEL7jPZPHjQtqu4LARzKjmKxKL87J5E3zTGdA8SqaJGyr765",
  "key32": "29YqS3WKWaqDzLcnqmpEByrVrU1qRH6r23Ev4VJj9VvmEvGDbFY1rVQrNsFqwULXDFMB19K9ZkheUyGtFTWN9RoG",
  "key33": "3QjgQbuxMqaYkJ9SmLV7ocLUGW4qFsNr53D6BBFHJbhqNedQKWiqt4N5j3PNz2YggvXKUn2NrzAgxgMNNKFydP3J",
  "key34": "4c7sniUNaFWNQim9VoRdeWwbkXoei67s1CW9UXKmxdBzCC2EixUrQuuRaiQPLoC99rdZPBouLpWAGetocEbrKPLT",
  "key35": "2hJQ2T5x21aaHwGrUsFo94KbmR4Lkj3ZRtrG6dzzUczAGeeNaHJsuSX74NzeqNUTFBUSQsckWpp6t2UirBG5MtGq",
  "key36": "4dtxmpKFBnShhV1WGE9KZq3eQTLV1YN3VndZGF2neMoyL6yaEZvZq9j1P2Hi8ygWfpFnYf6AxkeTk8gka8cNu92T",
  "key37": "47CAm82oCoxBbCD9jE5TQZBKj1G5jCNDnBZdbgaSPPXLLcwRwLC3R859aT5AgZ2mST1PsgybJmJsp6WqvmVq9S4j",
  "key38": "JJ6hUxYFJuCfiCPjT1VuvoL5stiBa3d2DdeAcKPSno77RUgJcQ7k5jXn1hxQxxfMmC8qGh2RFEoRNjPMCoLTfgV",
  "key39": "5eZoGNkdvHrpU9E5Vrm4caim6mRyXH8AfhB3S67J6V28ibU3AAauzLcEZTc591rxzXu8ytXJKqLDi1CwMeFhxMxs",
  "key40": "DPjyk3hUv6f9pbJ24iCcQTfSFWwLS94ZD3pxdkJRcEqweinEHcADq56hAn1rDCqwQUeEA8KgsK7n4vQYMcCrTmo",
  "key41": "kehs82dKmbj369SS1WarrsAHNDszwGVsRoJMrormW9hmVsuoaWsFxfu67XhcbLrLF8zJeoak5SibraTSxgzR9QL",
  "key42": "3rcELrSHoWTNxHWi5vWuWnVBEUPJdm8PyMC5a9siJ7HBgQw5EhPcnQeXBzvpcZERqciVz7QiwV8PpevMdVmgbbMP",
  "key43": "2mHyseBr8mxVwaz1gv3vbTTdEvFf76jKD8oJ6JFrL3iuHgg24jQ4XvRoqxpJkq2wfn5woW1eMHViWV9k9aTm4Hkb",
  "key44": "36vAVeNr4W4qEnxM2C2hVmh5mn3Q4X4WfexznEQbx93FtajdZhGXnE1xSiL2fMwmZznBxj13Z71XdfDRB1ergk1c",
  "key45": "5jm4T1zNv6MCt8M1BifEYA6sq6dNb7S5gyvVyCrH8ninRnM2T7fvVJB7JddjAnbBQbTs1Va1o96dW6Udm9AxNySQ",
  "key46": "3DbjfTqePxruwqooKLrJ9n16DDXPU4ZTPxGwNnUSsRHi1nZU21GGNeorzNSXmd5WxMnLwvU8Q2VdcJoLn3Aqz4P3"
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
