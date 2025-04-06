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
    "3jq5BjuJqeaqjZAK1crDUjwzbvqUzbvi6qmEFJ9sbRFgqkiNEzxsxRVbyLJ8LNqy6bvKZ9Res5HFkPqVpEVtWdft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oK2WPUJCQgWVK6rF9iZ8P7C2kVvnNmeRpgcWjZn7qYXL83u9yRyUt4F5yz9QkzKjKNpuufckxy9jPXH6oTRwUhP",
  "key1": "4xC9py7P21rYCyNrq5BxZhG8xZGPAmkCWEva4B1S4FdqPJZUAoWBnAQftcxte93esG79ozRcprv7WhuwANodR7Vx",
  "key2": "5ePZ68mfM4NC11tyhs4emDNfFwLTxpda2q6K4XExb5ho2Wro2RSyt9QfdKNqKTuaccAKhVG194Nh9GFRTbVPMUND",
  "key3": "5x2HMt2DevppdpkZpTbTR9gJpuTwNBReutFFVG6dRZRCeqQ4waJmPoq8KMVkhDJ7uwJXbPJWpy55eRtsWEaNY9Md",
  "key4": "2vvALoWTGFZ9dvozgJXEYf6XzUyCZhpYeXaDypc1P2gX2VtvPKbRZecDDKAXTnHZniGSANPdGUvdGpt5HXXbL5p4",
  "key5": "66eBsFgE6iF38YwU36UVfLqSxk9e6ZiND8TqiJCGfHGrrEzCTrJm4U7XFhJofHppTkj1UNqetE5ThEXTRjKi7sFU",
  "key6": "mWorYASm66s7dxrMhrbnfP7N2hqmYbuBaRXVgJC8uVADHcAE1HHfyssuk4yb1AJXvQrbZTpJGsdNW8m3NwtCins",
  "key7": "2PA9tg6cMcMeb5F8jg3ko7UNazy5N7gxz7bPhxcBRK5EDmnvNM4nWMAPZHZEhgRx22pc3LzVVix7HyVmHikcKXG6",
  "key8": "4Sf4GLknZRNwTPoKvjap2Biu5cbscTnVVqmLEG3ttGXkymDC83PpVUXPWtoKXGW2Z842kkkYY3t9PMFq1PEn4Hsz",
  "key9": "65Z4zinVkDKfVTmj24d3P6fgPGcq8ti7D1SBzpc8DzftEExfGf6r9mpeSQAG5aMCxor5xaLP53JqHRc6ryLXWSAw",
  "key10": "5bWn5xqrTegyym6YUtSjoq25xrWqzzuTURNi9iqwHdZLBmTb6YLUJwxe59Wq2VsQ2LXqQSabi4wah7DcHz1ZtVKp",
  "key11": "2GvFg1Mu2rFRMr8eywWzvG2t6cKuwVhZ8k1UWDdFWNYjBHf3WGJibUNDGudnwB1Z481GGtLyWWbErt6KJ1RVCFBc",
  "key12": "1Ytg3kEDEWRKEmQVCF45aN8xFhtKQ96UZoNqBpDEfwtKgKkLjZzXJfKeDXosXT357iMYVh86DGNyPW3UjPUmBdA",
  "key13": "2AxcCZSWR2Z9Rt82cJMtF8D6b1YdKWgQkNhCLxYyAZ7mWZ5tGCga6VeV124PKm5J8gSp6wfDWFJ5CntmokNKzfmK",
  "key14": "4ToNgqsSg4dB4BFBXUYbw28mEjgKihWxoM7YHBtqQ2Ubgy9KsJodKhWZGRiLa1dPfxnH3KG49dwPi6qqX3nCwXu4",
  "key15": "2n51Sxz8heFNkPGopdKNADUPPMLJj5PhwZyQWR8tjmVfrcCkDEq52p8bju78BamRqy32zojjD5d6z1jcZszy9fgx",
  "key16": "5tgbQ35QpDBGMJn12nFTZKc621CEntospy79Xi15qQETbfXW2eih97enDefDAun5P3fZeKz27jLC7gdZedKtKtC8",
  "key17": "3nerGv48BdoS6Ch44WTxZZor9iAEF7JFJmBxq114aY2v9FMmiESPxG5u3GdDAkG9Ua1sPd9BYefjRYLG74QKyhBY",
  "key18": "273DuBKdrcv6GsTViofJpB1HAaqUULLqxcRe3gX9vX64EMWjFsKcAnHtW2yW8qrdc2r9xogB9CGCrZYRxjqGEsp4",
  "key19": "4GDz1anjMRR2sLWL64w7LQqfZRPhEabHhmdgSUqE3x12eeDLUcc62uJ1Z7n2SUey5daPRioChn9cGraEdVM4sd69",
  "key20": "M7WrfY1xQiX5ryrha1xCYXsnBHoyfqbmfXWKG1wRPVJF7aXxmKuJfUoeVq4MGxM4ibNXoTm4BMijtf2HaQKd1xR",
  "key21": "5Bsz6m8wc7PnoVgtJrZGKVTZKgtLVnqtJDG3qwDGEzbZ21xH4Qdhmydw6E3L4YqYXsUYtPKjnHfgFY4sNKYXDP5V",
  "key22": "VxBmHxvUZWp8V3HwTrg33rkqn74GjQGyhkNx1z6TQ6u7uP7Fr2Ny2SUawGUn31XkuaCD1JXstYpWQqz8a6Gbjf2",
  "key23": "48EoZyNcNx5FZL1LqdzEH3n4TrMKQR5YbKbjWVLMuXei3GSYxNRwzfkxnD3Vd36aJpqX33eFCYXh9UnqZsnf6ka5",
  "key24": "2cgEUU7GUuy9QRax5zC98gbGfZnTtiwVJ5TQJxYVNL6zcE1DdWWxVF4cjNzGFp8b8vmRfhGX5HHAYpwxQCJFxAEW",
  "key25": "2cdeZt7sx6WskaWCZA3XZqxhbRExFfg9osBLwGrweY7t4ULN2ULRNYV9r3uJc8pyhmNRoPS3TFsYahZKH6iUmd9A",
  "key26": "3U4pRbqawgDF8ANpTzqgBH9j97YfKnY2AvQwSjrydjNNkB4zNTirD9NAr2CPAqhnKQKPbxFZBaQZP25uCqQP9RTq",
  "key27": "5i5Zvstmvguu1e6tCWuxJUHuRmCQ4nTYku7yUWxBxDrusr16NVmK2jtfun8NNVp5LL3JQqcGU3rKKPmvNrRzMoHo",
  "key28": "55c5p42bH1nNZJoe2EcmSePANoQUxkrU1Ge9qoGSvNDEdKSdYcdDEW4v8x86UJ7bJbBnwo77Tu5Nu1qHk2M94nko",
  "key29": "2nvhQBfLMX13GUyzd7ox8Tae3JC4NWjdprU2TwuHvY26sxiCCCek6RvankF6GXfUBZZdQnDkVgcbeVqGMsgb7UPz",
  "key30": "5TXctgeXEcVyhsvDWs5wRVkUPxmGFrjadnfmF3THoAPMC9nijY6G9VBRPw3PscwEzBQLcBt5CDXGgfeaYw7hhuVP",
  "key31": "2Xh8qoNQbcGMD2xw3A2ApexZJHbHDLcXFkiX2N5vHYRw7GYRa1TDC8FLREWVuWghWmte7Jks3VdmwLTU96BFGPXh",
  "key32": "5SYuuFuD3Env9hCprf8R5gpJ3iarHj43qAqLjxDztp9d35h8wNwdfjBMXiFNBVijDQWxQsNFvXX3AgsqQ2quhHju",
  "key33": "5WzaPWkytbmRx4NJAe73Uf2gWdmFe5Wz58zj1BSi8K3XqF2KyZJiMFsToB2tXNPfKsA2LYK366Hjnhi5j1bjdJq6",
  "key34": "4SzLAN8XXaoNDiZfvP2TK1QjFvXFdo6cDhExgdCELBWqJbJA1mfTz7r8axKSxJCMURwczoH7TZvPAaeMXdoWWZza",
  "key35": "4pf8ucgzLJELpjCQEstedhAnz6XP5cxsWhzZ16fhbJM49gGqprnTH8iUDkpdWNQRXo8vArSsKP8MyZCGE2Vwbo6S",
  "key36": "5kqmwKbVNEsa7gFWGSzEbFstNzjAEtgGGBaxzayeLDp932ZNw2VwuzWNf9aB3fHgBcZWCJgwigJCQCcp5LBeDstU",
  "key37": "37di2mMUB2qZP6NosAufH7AS2CrdJxREBRB6KaQiHNYg6Bx5xH5ofcgdfGVHvk49NBdAeguztkdgmxzXYUR39RFF",
  "key38": "2jGXw8zQsNBM2wfhVd3Y5YqrkMLvRAAXFRVdbGxXSzYUSEXsKL2obtwovCMK7Lk7RkCfRmLgTrrj8fqkUgbB7z2Y",
  "key39": "zU9ZQ9ZFL2gFvj2xNK1ZgFbeVqg81aZeGFj96eiV5MTtnrLYJ4rbP7zJkzdaHjLwWWKFJ9HqZhPc3WpWryWJVMD",
  "key40": "4rGQkqa83W6naBXXGmQhV6EqX7JyaiWR4zy1TMDF5ZjxR54zwsfWW1kbTvghRh5hNz8NhJNnvsZtdgaQD3Vegbnm",
  "key41": "2HwDSwQwc8HrQedbaE9SzsfvAZQkx6U2EYdi69qSGjLaCmEBxh4GkToPH5ZBs8mJ44Pis8oxGTWiDUzYvqK1UPoV",
  "key42": "47Dd3TDpM9NFeAmvSwpXskhR6AphsoboHPaNpNXVoJjNwXXMrycdFFxS5SDWZ21uYuqGGXLVUKZAtPAhkdG72Lx2",
  "key43": "5Rk2hWNN9gCmVqt3kutrwj9gUM8vTN2yhLA4KQe4VieTcriyqSB4bW3HGvLVXo51CwZXscs7wXFzY3dWhet6NpGF",
  "key44": "279DYmkE3ZJZUpC4Pr5Ks5towB7DhguFWdkrHoVVZWWhy4ru7dtqE2XTLwhjyxWjcWoY7EcLFJ34WGub7XRgcWeh",
  "key45": "3vcSFGvdm6ZRC6QsaLfzQAroNVL4qu4kGgj8bszN43WQoRh5HMEF6vrkJiH3mnmWBpF5hsGzJu3zpn89m2QXELf9",
  "key46": "uJ2ddazemTKuV3Bj5sr7mNYbN6L1wpcqbj4wkMVGMyUT51JfVAGLByvzLpHoz8LN7hy9zSWk1PtHXv5Q6C1zHUA",
  "key47": "5cpyHMGdwJ7vjdFju1Kv1xLg2pCuqiv8mqA6Dtj5Z4fMeoCzUbCuNNqemW4JJRMqNqABvGwDnxtcYNhb7k6XYQ4f",
  "key48": "3GcEsLnKuJaHyfXBcMJPXxWk7WGJbJMt8NVdWo29bGJ1Zmy56gD2x48zzYxANE5aCz8d77eTedvEbLjDSj7k568i",
  "key49": "4VgzJJWkDy5GePuzgzoqSZWjA2qWRujvKbbxaMfP4PSt5sLcryYMjyUPnFPX4VVUFrreU4Pwc3VpW4oqaEYkBFJr"
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
