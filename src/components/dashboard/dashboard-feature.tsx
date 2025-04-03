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
    "3knBdqFnA8kAdaFHUSfzug4d5ZknRkqBhFebRKB67FEGSmBuwJxPmsgZQJoJpLvmFeCY8VerTJgVJscqHrjaV58X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvVYvpNUopih5LGGSXKc3d7MAeMv8LHMHPLR8z5VXFWwFJpAvZNjxyw38tgcQJsVp8Hjgd2uvH7sazPpJMBE6cD",
  "key1": "44nmncX3z9XmNaDGZMNqma8dD7UZP5AF8TRqu7FavbWFEHfVGzj8PsXCkFHrTineaBRiJkHKwYDF72cwQ2MMsJbQ",
  "key2": "22SD2LxVBjKTiTu7jtiwXJ5YjHCz69iv914RMhoXZN2xM29oy3hdfiFCYEB9ggQBphJvg1XkBrSFsseb9kDLTMCH",
  "key3": "3vgXcEhpKbE9RvCyytbmN1srCQZVUM9UQrr85ETdNXqRohCtnkijNUWepjm2SnqxzxL12mhkT2mnHvWhtjNddyYA",
  "key4": "4MDbv2hN4AWLaBXpTqwoJPWE4CyXVyJUFfSS4z4WPSGdpiqBx36g1vp7JWjEXPMGkkF19L7EM1Pc7oyLGbyGaB6W",
  "key5": "5cR8H2HVLkdSVyGysuimab7nDJK6fuchMEiEcjs1jMAywLnzpgk7zhtTEXNK1hM6rNbfjvZkfKNTSKd7ES5jtpzS",
  "key6": "5j4ZG5EHgpGoE64xsNzDAAi5MkeLeBeR8ybyCnLtDoRzyEAashxGUFZn4G93yhKJqn4VdTZLF129VBUWeoPfmpqk",
  "key7": "4tHoX23rnPGe38JVhvGtNgfM5EYFeuD7biDWyKYu1Yj5XVxmJ72qPJghTE7drT7vR2UHKW4TuSokRL9uC4nU3Xmn",
  "key8": "21HrAAvf27kPv4w3su9o9hPAJ3JRMPJfYUVbux3yNXMQSCHs6iA1YK15s8eozgMbBJeeiwUKT2kKrwDoxWfkF8Wv",
  "key9": "3FPxQZ4BAPbYqenp4uajJ9F7CFCFpExz4nQTTtkd92cuGSHQ8CezxstqvWwHCTdg9FuRmrvARwzHQ7zixeZmSMLn",
  "key10": "5WuJG2LuCgPTdUXwBvdipn8rRs9BnG8VQz5q6cM6kx7EPTdhdmoTnUsom8UuR37rMHe1gtKSNv4pBBhUfosTb2jx",
  "key11": "2JT6LSTRJvefWH4xowpEkJK4RYNbozmT2n2bV6xJx3RZMCyrJi6z3ZHpVPFSYpEqxxPdPqVVCQiQrRFmgFtEp8c3",
  "key12": "34F1PznfeYFwx3Fq1QP3kDEMkeS4EmfvzgZrmUGn8FpbhifS1uDMrZmEBMuyfsUPzgnrKtsp5F26Wd8sgcwpb7cS",
  "key13": "4RaCXmtUowVjigox92Ug6ZGX6fkCBeb3o27dYJ4QcALSKYPn3KtdqNJK2hJqHeQrm8YgLpcWWzW1JZLvzFEoAvfe",
  "key14": "3zFq5bRnvxfuheU2wmGUoTzXpS2XrcZVndWQmrdnQTAmb3gVW6oPee8obnaWxEZgar9Ww6h1whzT7U6GB2pzz2Gj",
  "key15": "23gDcFZBszfYYEX16MmQFbHHWQKFMyYLqKkNxo1AZSjDLSba89sy7bFpuCpBAi3TC9yZ6faVNQsFbFTWG5W1Uo5M",
  "key16": "53MoNjeW5RvJo723fqMjyE6T2vEFyBkpM7vnRcqu7LQXH84wuXJTAPqZwGvqDLiDBd9XhDpjzu53JRTdtiWUfLfT",
  "key17": "3FdjgSfkncxySrNxJs1D2ER384NKjNuoDQDkrJUqMZrzxvLLAFgULqijSBPyGobGAfUJqESLk6xK83PnjmALAWpi",
  "key18": "2S3ge2LuZjwCGMXvmfHJpb16Fzw2H7Z3zLFHMeFHRV5n21Wh1w5va2ZU1moyD4VtToxagnR4aTC49FScEcCscK84",
  "key19": "TZbHY4xkVodk1bstwKXbww8QZTbhWg9xHHCLqQTavGaZGURN3z9EGD6X7Nu6XjrYy8AVzrq1ma6XFJnzV4XRbTW",
  "key20": "QENcz88d8EbVzAkxzed5WTBafMKnzhbVL9ksD4QGiZhxLNx3frHYJU4Tb1houcDD5AiXnuKVDYfKie3aXo96iKg",
  "key21": "5521bnBFdJi9u1HpbufSREmq6HX6Vae2Gj7eTr6JQYNBBfr9heh6vvCLrRcRMJC2uzAnMp2MyPQvL2py4HBQThQ1",
  "key22": "39WfvmzCL8MX9SPakPWrAXvScdSsTFNmhcLZDD8br8ikxHpVme8oHukDetX1UZmg3pVrcfkjrM2SVotZSQz4iUip",
  "key23": "56GSxsVYQN7LvjwCbPV8bV1vutZfAw28isko785ctL9YV3T3yWpKrd76soBhqZyZLX9wfGxnfHesUdCzUxAWGeT6",
  "key24": "63CssCznhevP3z7QMjYBWb8htVMvbYD58WuhJr82gRZ1tnW9Ggf2CagiyDANierX8wCsbSTdWpMcP4eoCtQdr5bq",
  "key25": "2J1wwufYd4yygf3BwQGc2kjUu8ZLHe2QvM7fa4vsoqb71UmhPos6bTdWj3bp5mxrxS5d9amFGCBDELXCLqzFmgDN",
  "key26": "62v3wmfX6jv6VHmc8fQgJLchXaXWdNEPFTMekD7dwzTwbR4w415EeNTsiZemFsbEwfBQLC8EnALtz3dscT7gxZdM",
  "key27": "5XShcBVY72svFmV2MF7RqZVPy5AEoPSS5bX8eYpojoyUA1pL8f6YA6Bi2VjrHSBJVWZThCHptXuR6JniycRVavKF",
  "key28": "4zJ7JSjmWzKY7Mgar2M29fJv5WyMUWFTbXdpViwCGH3eqHs3DdHNi5a9jyeJGek3gouTa9sgU8DQPPDcdcNxZiRB",
  "key29": "2saNaChm2kqpTXLymTX2FAY8RMGBgqVhZ2x24r5Vna4RmV2zSpzi2VLw4Qs6aDiG2GaTshQ8Rp5TZmFYEPVrGiZj",
  "key30": "3wTmd8fUok2pPTjXbeeyHcKzbYp4huQegmHJVPvDrU9FgyQwbKJpuz3ujuM3puHJmknG9CoysKFeBHkKD1PScNHr",
  "key31": "666C5eWAoAfzC4kmJrg7DN7DdXEaeGw8EVjii3oSmTsPfcKWw7ZemnFW4uhFtDM7DnKzRuPWBmvp1tMP6KZyPB5b",
  "key32": "5VxEHzNx1jyETJLnCENJN8bnK58pdGkjWepN4vCmDbN8t6aYuAgvKup9Pb54kHfddN34uRfPNMAmobQE9ZTswm9d",
  "key33": "AzqoSVCpS3WMQ2GRWFQqnawDhRg2qBEBva2i8KSELaHQh4XYh8CW9GTGrr7qoWNHxpbu3TTA818NJaQogZxiQUg",
  "key34": "2qtd8npQYGMMkFTEdhmNA9Ku7toCxW3FtAJmzgShatnWaSqiDxcbE7WtAo7MSv92Qbgjcy8Av9e36uPuPXh9hNvo",
  "key35": "MbzaqU4MXZ6k1BWqaXs7TvKTXfY7Dfn82sBkd1LacZx3mxTfVLjwbDguPsdtsjV4s4ox6fTTkoUb6Gva77HP47V",
  "key36": "MZzHv2m3uzYNZ6SZxqjht2qMoBHiVFF5wqQukrsNk6S6PMYHyFDpFHB4BNwFaXHMzKKpb6TAJMTwCPqZcBcukEC",
  "key37": "3cErYQJKeC1fHX1gxG3RuqsbjKA4XAR4aCUj4mTNokkhXuc95EutiFHDLzeSG9sPQKe9mAmLAAa2ByyEiukFNDfz",
  "key38": "4w6iTTBjQnrSvdDRwoTXP7NYku7gJ8g24orQT918RsLtnnnkukhTmQWDy6Z2gjj4SpS6CSkhLVU6AjUNsEVZAQ4t",
  "key39": "2vBWnjm8VgRTVw2qFVAL7uk2Y3fhhHsYZEQZNi45wYEYWKEAAKFh3FPZBhL48uXbBxYjp9mScuF22d9v1Qs4pPFM",
  "key40": "5MJMRArgxqPjRytJ9c2FgvVXHXJKahAg7Gab6EBhKL2dmgPhhoHaD8XLbXku8ZwwHSuJt73zDRXngDmYYuGZvgYw"
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
