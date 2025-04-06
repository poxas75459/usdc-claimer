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
    "4wR3JseXU7M5YPwwLTFnz8pRwZKeFXAzA1m7U1FEtvs8syyX2Xo61Zp3kbt6LqAtLFBUwVpkUSUZ6vTQzJKSAfkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9hu2odHRJBSKvSkA7Cxqp1KJKc7SuN6zzE3554Du3Dj5JtnzEG17WfLQk6CxHgf4SoNbdAFWRizWaATbGULGck",
  "key1": "4Jc9ij5ynwgfZoaWGWSUTi6AcMMyZUv7nbPtbjxtbcqFMXNViSFMyAHzVA5HjFJadhgVNLkJC8WVkVu5Ry5RYtwH",
  "key2": "hNT8vDpmixjTN3ix8ADZFUgxqCbHsHcCrrk7R1xEQyxPfNttcSiVQcRztqV82nTZaeRBRHGmuwyn3fMNVYw21Vd",
  "key3": "4iccP5o2zNxfvAT7DBtjmnNYsxDKowPy2qpwc6zWa9DjQJeD5W5bgzuh4aADih7u8s5a9axxyFhVcYzqVJ35HWXz",
  "key4": "2pefLYRc2dbo6FjienoMEKeqckdZ83s65dD8RTBxtUHvGmr2KYQ77PwkLujiwLvr4Rvuvrr1GsJ8epGkDnhm9bxD",
  "key5": "5jvTMEVUKJo5RztVtrBLMPYnyxspthTazCK8RGUjrB4s3CwXaR1UURiRqt68UGcJMwGjidosK61X85BYWaaK2jer",
  "key6": "4hkAWo3gBz2BZEYpmhinac3YJMUBRpdy3VjLtnfs6PmM1V2ZKC1DqhTNBwidufp8Dh6hKuXPCv8i5c77FPW5asGd",
  "key7": "xuMoVM1LKHoaNfdt5JZSKjo2P33rCXBEj8DFnqeaTz12hvJ124rVy14rFrAiGmBHvFJ5497vQGrFnkxKredx9ir",
  "key8": "2soBDevtKQ7RPt56LxYNLn2rd9WhFF9yX1vPuAznuAorgizvANDafxitF4SnAF5WEpsHGJHuBWvZonMwKuBjw8DF",
  "key9": "5M761vZjWuhkna9edfZ6P6SXMj1SvHUbZCYf5v9efcNMJAGQkgMpwwjAnARoEZB4vqyyifcejt4qEWxxqgvzzZ1e",
  "key10": "5jcSQSbVkUwzEyQCM8UgKMTjV2dRswtTtXu9tvhD6D5RwhFyzAkha5wS7UWaC7NK1DcFF9Ez9sUhmoyvjp9d7wuz",
  "key11": "4AXhkT9Dg787f3viEe3THqU9XgFM8CFvj4pLHEdSAkNqEJex483KMkv14KpvLf9N53PgdVEjXE4jjdGitW5se7gs",
  "key12": "2K31hF1yDY2VhqyfXxtMykJHhfL5AcKDzkg2TX2mE8iC6Bh4KpGCzxNSe4rTroxMHzs6g72j9ksoo2BxzukXMr4b",
  "key13": "QgWe2uD9V7b9rSdmAQfDNChdn5dD3PV3eZ5JowFdqoAyey575UnkPZcKzT2Khv5e8CVLd2aD7rq5hH6v8wuyn1K",
  "key14": "5rXEiVnfFviVu6cZ651KsCSkT9prZ6u8hawUG1XqsyoyCTpr5QGvNXXgKkaVJNVCYM5PzTvR8LhxZq2PrAEwMEYJ",
  "key15": "3p7nGRJ5QEXxqKBpd94Bwp5USrXWRPTQLy7TajdhiwhGhA894hfboxKsg13mgtk5Z8KHQ7CxNto6529DjvTGx4Av",
  "key16": "Jo1t9zw45AnBJWfSjxDpjhnq6RsF3vMqDUp2W1nXSjDdH4A12Dm8jujpi2qQjXnVGDzPewqfFTw279y5853aXTb",
  "key17": "2wCnKsfXpFMeg18FvmkAaLnxpYEGVXNjheBF9GS4W2jDRwKvu4w8Ae8n2HRLbDFJPV3hHPY575YssMWK6TogLt4m",
  "key18": "4d5U7GGLwU5sprjsuimpV2uZtPxa2KGxCpB9v8LX7X857K1z2HGi6iNkZXTXJYpSmscmDbfPc7WNmQS51JXapRsW",
  "key19": "5BAs8jh1JRqj42iq12UkhUwy5gY3SUhz98ogE7itrBz7Jgh6ksFkC5gJLtBuW5duUvT8iBj1K9RT6mSv7134gGjh",
  "key20": "JxA2mNxjpvVATzEbBG4pYLpJH7PBkAxJXAwgFNteapRZVaAYE7CsnHNqitMHy79MRJTCucSQeewS8SEt2zUNxVe",
  "key21": "5HTRNamBRwgS8sfV58z3Rhws2pHzQfh9BiCtFN7E5vQm14a2Bwnrn19wD7UrQw72p3fikM6TFDeJNkVbyhjTSXDQ",
  "key22": "mmDLc87DvjvCgVt45SCvZeV1iQwAUZBpvUTBvW3wPmkrAuiy3NQ58uHs7tbZS9HFm5DJGCK6PMHVHjFHLNX157b",
  "key23": "5SGXhw5HzKPqpigssvJQ6Tj5DKEJT9aMh9vCvLHBMvmAEQhZB17tcSB75bQ5WVnZpB9GG8PPFAgsr8qyBgxxvcmj",
  "key24": "2ae8sVr6ux7VvrTP8zLJbjJe2zwdJBNyipABRVXR9tzHbvCjfsM1Nh9G3CaMwDXnpKPRannp2jrmFjYbQBF51qZW",
  "key25": "4hs9E81zejCjuxSbjuhDytZ59YUESRtvTHt5hZvorJNZZp4h5gZ6TAvGodiwpcW9Xbo7y71U13Zsm7u9CH25V9Bi",
  "key26": "BtHrjoHha7TtoAq2oQFSmgbnRdnZrULj9Jv8nFB6ei9nUHuq3APecaoj5RAHt6vFV1F3mknVpCstu2sH9cDQUAo",
  "key27": "ZbYmo3BWHboXpNpjnqEuJCYiZomh2cu4LHF8GjjSMgT66E2QazfHgLzwg1FKtoT175sbHoi1qt328UDaiVFEy7t",
  "key28": "3cvswg1aHctrr4u3b7CKwDDJ75to66282DwReZWjmoSWAgS9rayg9MRPVgm4ef63PtfVteqdyWXyqk5NFPySQtND",
  "key29": "2rBAeGbPp5Dq4jHxCa15xZqAe8aZuaKWuy8VT27MQmdR8WZExza8RVNjMatzDdps2x5Kb12MrNvAQz6XH93sAMdf",
  "key30": "aobN2TVkkVgpistbDtuLjb5RKokxXg5aqNgfx1XTgxyLaJEAi66Wrpog5WYNs4kLX1HmR83JC5czdXyA9LTzDUT",
  "key31": "2WpZ2W7KMCRyghyYXRk3KG8vPgENHF7v4cYKGfE5nHQ5GJsrhchLmjRV8PuWir7a6JkWCHUcJbYTuLBeSQqCmh1J",
  "key32": "2qUpokKGXt6ujUJDJp96mrsdJkmbNFoPUsA3YpYuobp3GVdCArvP4mpi1wygBP9H92oCaEcoBajYafgsfGuLsiTu",
  "key33": "8nYxNv5w8ff8g5B3D1KrN5j1fUfs6fnHgta1FgGcRUMN3Mkh7ACeEQG99ihfKtHJjAKqB9hBG5moWQoXxZYmKR9",
  "key34": "2KgcDtnVmt6dq265GGa6eDU26CPiGGxDk3dXP3CmRzJEGRCjGA5sKYBrW4CMGdQVnAPS4zkRp8UV94FkJBZ4SmbT",
  "key35": "4UL1bgDhH9wiQh6xUan5FMxhmJn7o8UUrEA7ELYzS14EiWSajrejxdwNQUyJz746zWDmGzWTWXQrhbHy5dA6FF8s",
  "key36": "3GYLQ7ofBYMZQAmcyYV431Yw5q2dG15RdNmKZ2mzgbtCVLpZMuPm53JLjUUmmhLCpkYDfPU5aB2CDYaPqfqZHya9",
  "key37": "4sNNtqcqW8Kg6kDYsP25MEeSK1wxx1g3hwTeYsKtvp61FBskpj6skxp1QTCBUZYMuGL4KRsU22iFzTZGqmCvae27"
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
