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
    "5HAw2rEQBNXTd88twTnHvX2kKPMrbrHuVmwV991bb9LUdmbQ4omQpPVS7MB7Cu4hm2xszZf8HeywYMhDNEMw5VPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hS7o9eh4sNgw2th5pakczM3uzmRJngmU32oooJ4VL7o2J6TBdhDbs5SQZ3bCoQtuy8m2PjGAe32NCcUwdSCet",
  "key1": "3xtAFs3LKrd5LSjxcyABm3ztoBAAQ2wmw6PX7kXHZMVHwjv6BjSpckBXnFnmhxUygRNbMQQjSqWAXjJtiDBMPREf",
  "key2": "3EnmxJGhE9NGWuE8QZDw9SaHVb5rzHNa42dfX9HXh7uYCxmFQgmBFfKp3K9diasAtkVJ35hwa8GLABj1rUyhfvMz",
  "key3": "31z8C3yMtiwjBP8E7e92jM3C7KrtrTwPG2ecwNuugFnk3m6QeNZT1eyJzwqQNzkyR7ztXJcDHR4zb6BaAUtXWpJH",
  "key4": "4SRHLXbTtmJNwK76d7vmusZpZodB6Ec9QZiNeVEPdGzUKXcBEe4NKyBJXHxb2CjXsqqfxT2FsGfuzvqb5kVBFFgH",
  "key5": "48gLSYVYz4qnvfKNBcVr8NEfp6r1yEq6eFnM6mUsAfLDiMB9zcgPQfNZuAucqpfXpuqcAoAhv4wAFD7eEgZzjNPq",
  "key6": "2YuXMbm1rbDY3qW9zP8mLNhS3Wfzz6R49cona5GABPNE1K5diepeQwja1RmjU1E5oskBmZv397NRdZcAnnCEP1yL",
  "key7": "434oEooyw36JtMZXAtw4y31JRHYVPdmz6g1UboADTFdnw7vVPgbv7Tt5kxgcq7YkJxScvbtC7AK4FZRrPWAq9o2Y",
  "key8": "pniupvVmtUQMRkYDMfe4mSP9dEZyJtEYWmyTzaydhSvx7RnkmpJXT4zDyWe8Z83oKwiK5GGQBfYaF1gk8oLBS7z",
  "key9": "Xddy9ktXasTGvspV9Ev9gd7uhwaFSLQVhTKRJkzGGSatvbvrSJcKuFMJEa9Yd6SHz2r9Ndv1mSQ7WFaTxECULQu",
  "key10": "2g82jAjGSkEjUErrnu35bJMYuf4qCa68ugYkCzmp2EyduMkxwpRACjHChb8AGkDKuK6VW695YRagKkxLTnsvMLgf",
  "key11": "E4FnrKSo7b3HoPe5Gk9rYF3raArJ2a3sPa58AUioV4EUjiDg6nKnhjvT2sVHnRN2YDZSBGV1WvRmW1zSneCYMYE",
  "key12": "2x2gvUJBSDbCthn7eD6VVcFVU5j9rZsMsDofRC8bSuuANU6syimY8Nsfn7pXWhsEUjfHYupHoDW8nzAEhoL9LDA",
  "key13": "kExPiz9wdkD4fMWhZ8UgpYeKCk2iawZsqi6ociA5aTRwBDBFxcrgPTgC34oVajc5JEfJAD5gjuEPJwaXPAqovTc",
  "key14": "2vengXBVugHPbKGB8iLMbYg4zsa9szCnWKPRpNtw59yaqLtpuDN6Gm3jUkwFar5rQ9P9bfPJ2476FZZL4guBnh4H",
  "key15": "4aYHYnzDebMT4jgnxFHwjMZrVwGbVx4FGDFmjGypywxEjsJtWk4Pgce5uiUoCE96NP3w9FDSYKHa6SMY9kiU2tUC",
  "key16": "4R6nRHdrdjz7LafZVXzVPwWjbTXqpASxeSKQ5atUxWST8T2HoqXaZ5tALmKdBr7S2vL7cpawgdg8HTPpemELwpTb",
  "key17": "4FnymjBumqXmHUMCuaMAxmVQsbyFx4bGDeP6n8Dk6RnHi6d7GYtoEgEbHBfg989hcRXy9Kn58yvUcM33kUXKQPZN",
  "key18": "2pHD8i4oSkAbErZhqo6UtQNtw9VxcBPyHiJm45DfLqvErvXyxnYmwCSB5cREFn6agYJ2sHPF1hNDkFHAk6SAym5f",
  "key19": "5vATi7m39BiJcux37QH4NNSZJS8TRsXBTJpcgNCWd11e165AjhGoDCR1CxjmUcAbE4CrahxPu57mCCtBrYUgTeg2",
  "key20": "Grt82XvXsap1LBFTo6K5jJVrudt355gNUPgryFqwm3i3PpSWFAkKSdGYNLPnmxWei9oC8eTkVk3vPxf2SEYwbqY",
  "key21": "6ccHTX8mYcRbWaHm2cJ1TqRr2xLnQbXE1gNtawGWN9P2EUEii3qZV1qv1ePKYG5Q6xib29M6FcK8SUNsg2ESFsg",
  "key22": "4zGgZrGWZkEqpAPmB89MUjixJQQt9SC1tkn1Cc8L65JEPwV6SoXJE46PNqJDsPkLddfwECtbeRKufq56dswaUggd",
  "key23": "3krue8HUW8huxKegRUNRnqSwiPj9Ahanf6CHYnoUESgHn1dmCgDDto3EYJko6toXt2dRBY5ZsGG2iUc3MCffQPNC",
  "key24": "5A1fUDnWL8hqtgWZaMu1ZeZTGKmkTFBquENmELr7jLhECXGHmiy2pHh1n2TwrowEcLrvEqhusHXRtnfLwN3j6acf",
  "key25": "4PEZdgxQXmBZvMihaLnbt7Qb2GUfFCvmX9UwsKhLdWkJVUPuNdhhV3QBkRts6mzjXmJLuEq4Xz6PkEvHQN3jckSa",
  "key26": "4R43hCFimTnFjZsjtw3khgygPFzwxhTNNePNyo97DtQLCbrCZokt4gBuLjgTzSLvZBr3TS8tBq2gvUWQccPfrDm7",
  "key27": "27F4V23wQ3DUU4zWZ7u9ujL5MvTfExHZAsrxMotKQe6D5Ant1msiyE4y1ECcyUSTfrKEdcv5X4YqR1ZznBXYE1B8",
  "key28": "3JYSj4LkB9nu4tdz4EPSwqoKjwuUhatL7vdR9EXp7A8RL4vpkeNSTQDMzH2brd64dBkMvhNuZFV44ZHeL2vjJiWY",
  "key29": "5hG2Ap9zUvVVgJhsCC2CpMndxGMNt13zD7M9G3VovfH6YAEcnGSwsSbJ6c63cnXS4kCSDufSW4gYVi9pb5bn4s2A",
  "key30": "4xQCpd7c1GBHELpkewSzA1VqxZTbBLUvWA6YXDXseBLd335V9awWTeiPYkYPJGrd8KT1HAHtVJ3iB1rgKkatyZ97",
  "key31": "2ZxPLjj9k3FxZB4eFJyu7xNAduKoJYft4WkFojd2Xh9yhoR6xkJNF3uxtzUCFYcctaLWDZmGim9DeZFHaPAqNHPQ",
  "key32": "3Fd9qrJBZDfEeGB8an5K9a54RrhP2aZaTMBTCkUz7MKANPUUZopwBUGLzWEeerxHX6Xr96LHSw8vA6w5Zg2CEMUG",
  "key33": "3MouGFtMLxpqU9NKdxGAwh7YY1s5vuU1f1U5Q3547ZRreYh9h2xfTtKaat34FkVcbZoKARcsLTBKAZPV2naUZtjY",
  "key34": "4MYKtFBxc8y8PF59KMLbDZMnEEFy7anoQYQuyKJKfPviMgM8RT4PTbqoNnjTmAzA1oYF7K5MGzypn8BFGXrA74Tf",
  "key35": "5TJRn7v8X3JiENFauMqrwpkGjpFeXxSua8HVcpgY2SPyCdKTe9Rm83MruwxvHfQ1ts9KkYBackmdeXPKCq7KovKH",
  "key36": "24St3i5gJnTRsjr3Mf4RRRHULdDpPad8rtLiTKBYwm78bjMYyMmbqofPpkMwGUaycS15jpEbVF3t5uy9FsnU8aZz",
  "key37": "4pKmcwCxu9MfyLRsgo3RhpJSP57ryiCWBsYCAP7Gdf9v3TsP5z3z5U6LMcRrYkTPn31JzR6it8i6q1QzKZUBhtAW",
  "key38": "57oFao3uCxs2DfCoMfaH9Y1xSitdBBBJXM36GzDVVLWuXYNzD3gonE8sQpG2KPFCTV6QLeJBotVVA7T7dhfDYr9h",
  "key39": "JGnjySfuDy14FmUiHiK1qR2r2KRAJvivCp1NRhVMrvSC87t2n48oUhD5hKTmnA1SUoRYJK4U2SMZhV2MLYUrgY3",
  "key40": "2iLtuZgGunmbvishSzH25H3CVrXtSccrQZoxc1G3oNTTYE7nXfg13eAbFP84JPFcuJQ7UvdvxgASNpjCC8hE573c",
  "key41": "4buDD96oazKPo9Q8AB7fXeEPnLRicM1Zb6iUWMnWj8j8rkqt1WFiJSaeVHWRpgPqfzynNM6VmxRoxgipitkNdejM",
  "key42": "3fW4r5MD22D6fiKoftQUg1P4cBMbLivNN87Rz52uzaFZYmNNyKnGQsMcAMfRa5c9TZ5GFziXwiATsiUEhVKiuDoN",
  "key43": "48wfWPV3KKvJw7skuPwvmM15kV6sxcW41VbJDsR9Ex8Swwaj5cg88tkQ7QU1mtL5Qwwa3heFJDujepDZikbmGuKj",
  "key44": "4sB5fgFyayv2fiwT3SbEukh6mjQUTy4DPFLx3UL6paLL9quh4aRWB4cNmtnBcUHLfD1RKoGmHQdVxfjxtgxJEr7e",
  "key45": "3q31tH8uEDWxUKnudbJndLJASaRW6A1hjPjJoPahsxG2SbLfQG5t2MjtAbXe3ujHi4q9a18M5v9nwsEU9t99ixxn",
  "key46": "5eJUfmW51vqeNPnMtzKzrsPjWoDkV3wjJKfqoAF54tHrUWeJUdttVDVanaUSwaSfPhrqeYj82Vc26x6nn2XwfjWu",
  "key47": "3aehDdvQLKNqsZntJpYgBDXhN5rtQBSLMwTSgUjoZWcUzJriGGQjRXH6BEE4e9GZaEiUsncgVD35Z52oTttNubcx"
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
