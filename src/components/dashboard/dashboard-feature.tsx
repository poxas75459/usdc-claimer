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
    "28S6MFqNh4DjyBP1tJ7TuMjjGMck4LqNMYjR4c2BihTb6GXzeAeV2fK1istLir39dApMbkeakiLb1enaEM5XgcY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQCYC2WW3NnKgSnzXUXhZmGjV49P7Ru384TVGdU29pq5EcfUj7GLaUsdYp1oVch5ufkomHbd3Dp7pF1FxWhWghD",
  "key1": "3vVKm5RiVHeJUmk7CJZSHViB8kQozWi6kffjaGmMnCvi5E31HHQjSHi7YaQBqJVbj5FSJ6ktR5YB2DUBrongnP7m",
  "key2": "41qhMmvpaC2JutryiuL5E1KVbeTWz7V7qVPdK4U5CCA2AwZg6HogzexsvP3EJNydmzyGE4myPs3Xam1QyGXGw6iy",
  "key3": "4yrU59vwbDp8mB1ZtFAF4isAgobE13KbHARaqNVCggF261n3bL8ojrnt4MCVhnmEqTym85JDxj19ib5enM9wMkwC",
  "key4": "3msdESS8gpaZvm9hz6x84kDn8QnqDnF9qVCawcLCAAW2jPYQBqKe6XB65mh7LZ6xtL5oaJ6XxhuTWXDtXLXJSvXT",
  "key5": "5r75daL2meXwJoda6YYKDhmaCo7RC5561KCbnG2UqMR1ZXnhNpjk2jH97AaoAQ4c4ejJxu4ok9h4zz7Vu9AJCU4Z",
  "key6": "393HezTVxrXQEHLVRRXiTUQpM7nT4Ej8yd775DDcCBvAjSpNLUjSFtPZcTJbY9RfmmQ8wfoBFNW5vtEzoifinT82",
  "key7": "3e8Ewk2yXvnjTnz92Auzf8m8RgDFaEBXzcrRgivSBV9qo2U5H5CzryMPLm69EDKizrku5omCp5TvSAJSPxovQzh7",
  "key8": "4pFN17XPiizuXJGT2onVk275fH9e5RFyYJZuGAFbvkS9742bvHFeCZA55ZaxhQUGvXfckZPcbPh1jrg1vNVskGkx",
  "key9": "2bMZgWhYYckBUUvrciegFAFeLtCEGdrEX1EqDNg5rgMp2aUHMYFizpN6LtxgP3oP8xZ2tisuoNtSgAKSC4bJ6eb9",
  "key10": "2jtLiwGAnibzWXYoUWszT6jjsFU3UNsQxcdGtgk5yPGcfWNhU3DhNjjfx44yZn7rYvJkHnob4XhhiFB9cVPk16jz",
  "key11": "ysaQ8RueeFDWjwQpSB1P3d9Fxg52owA9YFFbSTD4MLFSwhFsthVd3ZDk5DuMTp2iz82dEHbsWNvBk9ngg189wDN",
  "key12": "5FptEzfGczJRWog7KKmwfx5j7NT5SQKSZ6etyn51s8XmX5ozWGKyZzmemYt9VqPCakLdJYNTt5LvJWUsjfa59mm6",
  "key13": "5idTyF1y4irghHsCBZgLoBHcofau4KhyRecvieNrjj1eyCUnC8zL1btMfZ5fPccGHUsBBPx2Mgpv4okiR8Ckvuck",
  "key14": "56Jeg6M85REo7cdYjAkyzxzMBxnm6Q61Yt1AUc8wdrnEj26o6SqEXVvs9VB6Q1jmWVCUeWYP2a85MqQ7JVFD6WTf",
  "key15": "1iGLRKqJ5DFEwWuKHyg5z45XgYH8YMtRt9sVDzcZVEwB3RZ7vGaxsY8BVpX2FuJskTfTY1YWRQDjKR5VeGvYbnG",
  "key16": "3RVBS1BytLTHQWW8UhjaCYNEowLZB4aCgF6WnncgR3jzeAqhFKiEyUa1d381k3zJRfxyJmTNHuZZfYYj5ugqLsNe",
  "key17": "2PPbiFXuqjhxUXgYPJV55w1HtN9wb1n6spWzo9fQjvyz9pJER52Mn1X3NXxbsSU8yi4wboSbmVBomKbgkQqMUauS",
  "key18": "5CsjV1WaDZpFjMFJ6KGmpkwbYTWMJzddW3VVD7Smf39LPFxFopNLDcjMzUbYU8P3otMUAgWWeQUX4ktgKTXAL5tq",
  "key19": "4joxyWiRATTY6wV91LKDiE22C1nZ6E1pG64FrhqgUhQfKsdUceFtPSqibVpVN9NN2RNTrxidnTT7gBxsaJk26qUt",
  "key20": "HWGFNW64hHUKna4jTbQ7Bw8H1vtyRH1ibuuUTWejoWpaN7dXXUMhebsy8E4V4ixwmgqJguJGxX9uJV4aEshbJu7",
  "key21": "3T6gTfQ9PzdEjTM1uqNFyiCATBVLuUbzYK8P85jqWvgyhsxqrNMayFzkZQTeBa11sn41i5xogDjAZfvkntL9pT4",
  "key22": "23PiwFkt8Wds8FXyfiz39bVj8wceYGS2eJt9hkGaeVsfDQKQaNZo2vouv4oAVE2iMU2ySXhJSAfeTmYUwdQDwBGa",
  "key23": "5VNXPfZfmFDphp2yUhLswqMurLMzHY4nFkkZ1m7yjUVmsi6b7nGQcJeUFN1xdVos3nH7YVpLGz7n6vmKPTUusazs",
  "key24": "3Nu9XJYDKdSfMdY9pB1PcesMCrE8AzDYYi2tJWADRE1VMzMq6rHKziUvidzpGBo2NEsnjJosQESdBvu6DkeEZbQC",
  "key25": "3drjHpS9Psc8vQSe6cGpNM1g3HWLbBjaodYcc3QE39VQ2f15Q4sR8HCgwM4tu6X4SM8B9ZAwvjRCro6ZM2XaiKVU",
  "key26": "3KuGuavD95fsfve6whSmXek7XWCdLZKRA9JBg3ewnjaQCdxkohLarHa6SzMNxE3Yco7YiqZxkGhCSeiJPkEy1TX4",
  "key27": "tifb2BgPPYZ5Jnrjtdxp2rKnn6mSRDgC21sZhyURCDsSnUUa8dSZCZuwV7R2RVABoXBMuB1izHpTQif5EEWrQdb",
  "key28": "353C6xQwKMENKs6e9QhJ6UbPKV7rFk1NdUMfCERcbofBJhC8puw3henWGvEiyk4R6e96uEsMuQZtwKeNRuAMbEqQ",
  "key29": "4qUGmaTrEYKV1PsCErJiLzY3nGxcaaKKYDHnyyGXfhcoVsJMj8AphtzS9wXBJnxJLfmNr1qBXx2bPERTVAfNuY5X",
  "key30": "4NajYChPTqSdvHHEzy88H84pfmnGkCN2LWQb4QuHCK1W2572QXxMkGSdwqRVLzqfFJ3oou5MtTcq7EH5zYz3PPDh",
  "key31": "5YByBWDm4XTVEJpySY9QcGNz33NgMTtBNUEDgAEwgdu3AGPdfRaBpo9apJpy69xri6XDMJatyPw3ufXw9zSc571x",
  "key32": "ve8t9zn8JJizeqyzwitTGzqPsB7m1LU4DLxvBLjEVAYQ5YNutdnBzbDMHq5zkrWuZDbb5LzQ1SHPPyPkYS5yytH",
  "key33": "G1MLb4X1Ay8a9uwf4GbBmyKLh6v3fc2a3oaehAcMcgQtKCTLacy4STur38a6iTtZe6XXMmjRWU5cgf7mgx3D1Yx"
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
