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
    "3wbc84sGDXoJtQmsUbmyspxa8zKzW9rhyxL3iuWwUSA86HV8ESQWxLRGwhzKzMSjwFs7q8eqneuzwXVurMYiKd4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGMh1Re1ArEWfvZg219ANz6hkQXx8AyeSa6cTcZrVhx2KmbGS3kJ1jefVkTxhbizz5PCWL16CMNEmpsND88igJt",
  "key1": "4NyzMsWkpCv2uMF49UK5txZxd7jeDCMNHVkGyhq6ySfwyLPJvn8euEEYVCGushcUyjmWnBwUbg7Gz1E9PJ785rH5",
  "key2": "4TZBGwwPPzvhM5LH9e2M6fxie6S7eqQZHcnoXSiaexSKxxAsVSH1CyeA7sfWUZufG3MxEGo8jQQJd2nj7UqSBdLE",
  "key3": "LcsDknME2sEqVgzVQH7fo7MwGVjB8Ph35fbapjguxnqeCbpyKKyGtVsayEJpjGfgSaM2khcnGthXYikqdP4Z1vs",
  "key4": "4PZWVabN9aQF3ysdkuy9cJ9NfkCayXBVwgBKGzqgfLg5FPDMtek5RALEb74bdTir93fkfJBR9h43XfBcNm2iMQ4S",
  "key5": "4BQ4oymgXwFB9Z9xFjCsXBASQ9aW7xKBLyyv6TWxPWGy3VQi6uquzESVmNG4JPHfAjq9NTXfuJt3pTCb4NSegsgF",
  "key6": "61fS9y7nESgCaiSub7cYGKWjCK4yQFrLiJ9C4JaTcvvXuWKayBsrNPUnLrgMiuj5CDozFZDbpZoKkpeEHjgz5TDd",
  "key7": "3W2SgdNuicKHFLHz1HqtwWF1PnEJbDcdieA7geKyzJaCzM4v4oNLA4oSj8SMDE56Q8YFeZ5PKDkK64FGZgUTzMcq",
  "key8": "3hJonU7YFYfG7DmZ5fzfdx2LfCLkEE2fn4zHDgyJrDMTHMuf1AhottaLudKQmwzv54hVBHGCaj2EqnD4ZDGfTG5S",
  "key9": "6zyYd1Wax9ZVL3XNYiEkv4nv2dLgMQ1XWd9jyj1nGcqitChivQSFg7ZKMRg2vVrV8kH4EvjLwGRY3ncxZDt4Nz1",
  "key10": "oGY4wCyaizsDBRqHPJQeQGoAZMAojyqvc64KwQhyy5jqKfmtAkGFPouz4qzifkZor1MM8L9v3LwiRovoJqxBYwp",
  "key11": "5xFn5aPxdjY9cW7x4JztHgxD2eP5vPB3D37Sj2YrPPryFujLZF6tqSpgQF54btzBvSNgwMpGY5wFcg9UYzaZHGfC",
  "key12": "qmEQ6ARjCGD3bhsGdwkmtVhVAAYtzqGoVeea8JJKEVBJAp5m9Km6VcsLcLP94osxJSfFQPRsw1BJ5SNnBupN2fK",
  "key13": "2mve8oYJnxfs2DBh9fxGdp45PiEkFrreyLp1EH2sAZDP32BYYTehkMUGth3qhP1iFkUWvpkG4oDozpZuc171Ydrr",
  "key14": "5PVZrUbervdNUdN62E4yKDtq6qTYS3bTeU4NTj5sZBoR7sNgRNDWEZezG1J3uPynW3J8nDg7jhKLDSkDVFhGZDJE",
  "key15": "4WHzSykCrui8kuAzsgzw9LhWzGdAtjDJVGtkY7KFeZNjJFY56xYYnA9zCCNYMqtJq87Uw5bninHh5feFG9nBcWLD",
  "key16": "4AtvYwyySxjVmjGUdfmdyVgMVjMnH9EypsGZexsizSyENYCtFHLX2ky6ubqFA8HnNL6eNoEAtHx1TYXssgjezqg7",
  "key17": "2DUkvSxLBT72ASvBVUqnPLzeTmFTTEAW96eKaNhSQ5EYZTYQvFMguCEvLAwPtcQPiddjQLR3MMMcTTeEtrHtNJgY",
  "key18": "3SShWD97kcnpvFYup7BPyFPPQJe3NyATLoNq1StqT1UKdoBV5PZP3s13PTqDMJicQC7yho6kCdzpa6bHU6kUefS3",
  "key19": "c9C19Faa2FjXLKjppwhj3QiD97fQrbMjjd1aWPpwMmRsYDSZV8Ccc32uGi1gPrb3taVWikpUPT96oH8zBtZ4TB6",
  "key20": "4TTPbcmB45W1EzRFUoSUrrjdT5f1zPNWvJDm8VfWet9RGQouvRnBwzZjxn9NNA2G6971QFnGAEdeGC8Vpgf3f83c",
  "key21": "3PTHkw6Nx8Q2NDgWGGXtxnxTYksmTBVzVmLZ4mnrV6yUC2PE6Am5drB68ELTABqfHGjXToxbycGJGDd7rZkmyve",
  "key22": "oKtUAaEcVBmwm33UwmQ8gWypBGWGb3n1ShJzXYYoUg468pgTfVszAHUKDmN45xgf8bUUmREc8rS2chqJjbGQEGf",
  "key23": "427Ux3FSEoh52bgbaYbVnKYJmv5VZpqjzFDqivTG1BRy58nPVJc4dPbmHSosh3m5oSW5WtmFYo6cpeYeZzNv1zYb",
  "key24": "4vebQs6R4KteF2E3NiCT62mMuG5QiP9UmTbxiUSobSpuEf3jcaKGRvvfx4v68HBtwnvDrfL6kJkGuyi2Pgxkbyw7",
  "key25": "4o7F7yiwUsjcvhgT2rCs8NdpRVBehExwg52aQAHGu19EKGpiqZnuTWff3rqqbRTZ9gbAyYVpLYyAYVgMnatZqXgE",
  "key26": "4Kr5xv9kuiQBDu7B4Mvu2AUZ1cSPy5hXEAioZNzj6YTxnYe6jTQjZM8JHMhcE754rrBdaPUBoAg68joxrK9DzUw7",
  "key27": "4Cv8wdqtuwSTEBxxy4BDdwCEckojsV3b1LrTZwYouciP9GMibDfKDjWgJTJwkVmrPTpEdDMobFtEKAgQeaUojNko",
  "key28": "3x7iHSGCYBkfWb64wS2nExwn2SFGtgN1m2qfQEwrnCsKVuYv84Z8cKpz68nodo1S7s2BE5M4PsVwsBesuSyLyRrz",
  "key29": "67qvxvPGL4B8N8VuJY9KG7KkRcSCkWBtbDvMjVZb9nBBLpkEDr2L1QGSASrzBi43u5VJEZn5qR31UfwYRzvfauCL",
  "key30": "57y6VCsAAkgiWZX7zNs6EQVPNctWCUv6ovr8S9GkTiofGY6tABy9ydu94ACRxqpVcwx4sBDjWNdKWujAA6u4Z5S6",
  "key31": "5rWZvpXuXjc27KDBETH8SnWd44B17UYB8r5peP1mytLdJiVAtqN2728hFmCP8rvcRBWpzhoTq4rHp5uhxrkLoMkV",
  "key32": "oQhxyGybTiWCgqjXJ9nRbw2tB7eGPv7YYt8crAiHK7gmJmBhdcNpUjm1QQTXb6zEqMEESEgkU5ymgboYA2gpQ3s",
  "key33": "5B9UfrExwDjCt5YiRzCY1p33V1g6vRaMzSmqoCyTyArJ9zSW9fyTKbahZMrATRdH67vLDuMHCihBktnKbmmpovud",
  "key34": "7jkyJSNaYm8bwfUptjMMZN92WqnYsLVVsnHxbh3CXdZXf7jq6igvzzidF78zEiWcqZZhwKmBXjD17wYnLyVhGcw",
  "key35": "8sjuS1HRkYpcWh2WcaYGFfbxn21uYYGVHQ2LDgVmksVWgWmnVKMgYBoyoEoBLXfqrVrY47eoSCUmeQjvCryeBb9",
  "key36": "3VZWfN11BZtYSjppkSMpLVDZGNJH2gFWftLK1ff5VAXGDg4gA9ap4JWbsY9rG55qtfD7LR4Drxi64HsJzQ6L6uJy",
  "key37": "4RjMDBAqpxv3TsikJGNhAZEce3cE7HjigVGEe7CCPEaaxyGitmB2WyPqEytwSHvs4H4vmGJCeBkx3kJ7pQFJL5re",
  "key38": "5ZhcN3JsxkJhB1EZYfk713mBFrMfuYsdewY4gB9xjeQ7T1mZEZCGzWzSS9ax2fTwBVAHLUFwDdmvc5pEgfFZ5R4S",
  "key39": "67P4kpuTJpxkwYD1hzazmBFTWcfdXkJ4sMqSBxXnffaJ8r2BBB7jxcCEXzUPkmqDASjHCzyvrBayu77adnASr5hL",
  "key40": "5yQbtLPdBnJKY3pZ8ngRsPTAjtRyM7VnoJ3gzUwRiwqbeBCAZR81nGMP1cWb6X7gribimEn4FJyirgbWis3aJoAM",
  "key41": "2AgJZpEGPcjsCesrpbkpdu4bFsKVsahNu7yLqPDVL9yEa9d5VnyTaTh6fJTFbfVXMrYVLwR9E9QTm7QZMKLZZvBi",
  "key42": "3hvbroqKhmQuWhmbcrxoUXRBY9ehog6unHQfDJTrqd7Wh25aq8xzABcXZg2tgjrym5sEdPJKHYgzWW8nKydTnmxf",
  "key43": "5mb99Bvt7Lzn2UqhDq8VUBJ65vLPvG2k3S9WvUjAaKfvnwtnrZNvSCDftWD2xh8S5qaqMCD7GxkWNu5uhwniX5KG",
  "key44": "29NpH4RnBzLYUtC4RSqTPrnmECfvjiGPRCYcpdHpd2AVKFmY6umEmk6nJV2cg7n46uBYK9ujvmBCB1YK29nsC221",
  "key45": "3YL4Gx7MbxKSqSxkr5u3E3hPiKy2k5LpLeLjv98aMyrXzxaoJBYhcJ3W2Q5GWZMZG9ZAiZ5QwQuN3ncEiuCM36jR",
  "key46": "63azW6YyT2XjkejR8fwS3NvxHJ7rX4DuiwVtjSDjmuWfachWZRcdDcrBmVAAXDydSvExh6tePa5VMgVhZBBLV3Fb"
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
