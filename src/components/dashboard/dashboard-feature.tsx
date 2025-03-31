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
    "2hJHMxMaB1iF2THbWxBAneX5iTPgJAgKym4QrEcbCUjHFVaoPxvXFa8SvAZA24hjJpEohFDCFfRkM9rz8s38nXgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ooitjhgTad3rhdrryCNWcv18vCS95JS9ZEkxUKhZqom9Y1RJ2W4n54EXTyN5aJSNFPWzsqTGTbhfYeWmbq35ec2",
  "key1": "9Z4t5j3BtJJbz1ukxhpe8XyFm61UAaNZb7krArEyFh7zmmy6KmPLaG6auqXx5ouVFAHSbXJMriBKaiTzAkYEtzK",
  "key2": "2cf9C2pnaQ4wEjRCP2gP8FmpZKj74d4nW1gbkEF9CNpcZ51PAtiNmaiwDVkk8Z9qRP7XGEgbs25Pux6iLAaohycJ",
  "key3": "jYHoVwCAgs9u7ujWWYwSBExxPzFX6BZJYhWPW9UtFfWRfVgrgB7kqubjbJXT8nCV4pLvwXNDpjjgNDMGCgS5HnA",
  "key4": "3UVZbV2QekrV9WhWhASDmUU9BGZNxNTSkuwu7GfBb2JtT1r4XwWF4kWVAnmNGhAAmvK1zGamt8hnLosDPHo8CiJu",
  "key5": "3nuvxb2EUvvMkr8ihfHBnGUkDkE1WGCeFrzhhtcp5BWaicpFcJfmmMc1DPjcMsSQKU1GzJjbTU1qYioWBkAWr3fh",
  "key6": "3xWybQFR8trv9a9wf3yJ4ehs4165fLZopPwRPHNBbuZ4cju6Wu5WdiFHUEb3d91KQQgNXct67BrnGAd9jYcvRcS8",
  "key7": "31azYWi88qBHaNGeuRuc2kRnBAii7jNjvQoC8ExWqZvDGqC6LEzcsxEytv6SCgy7hy32tMukc9R9zV6WtrRNWiPH",
  "key8": "41Gxq8xA9j1AxpNf5sMXbzVwZWhGCA8bcVyhibo2ASmm8og1kTVtU98adKtGpAuuBihaT3r5sBMCUtNUYbgFWSbw",
  "key9": "v1eF314wbzJkhAPppTTKw3rdRQ5EAhkpfTEBAxnYRwT5Gxdwwy7WhqVKnPAf7Jd32jf8ZT4XspPuKuxJoA6CYKX",
  "key10": "3KP948ohEZ6buZHFgCrPdEccEqCrzhN7q9zDqoVeovC8L16u2uvoBYJs4hLtHHxkU18Z4VxxtHRDuAExMFUyeREp",
  "key11": "4MTyaznj8RXFSFm2HamVFYch4P394ngF4Dq16e7zCj7QMroKR5Tta7bFDZuYox5W6VW5kbHLWr4SgyT1xEwHQU7v",
  "key12": "2kPqDPxZpTczVk6q7dXviWayNY2yWPUf6h7uqzwi5TPq7DYzbThiceGqBxCpgnSDPfgJ42THTwsQCYqvcVy7HLMp",
  "key13": "2Aud8fspREbZ1RQUHQT3e1f5EXMw7hHYb4ChU7Uyh1sVrptLenK6jsHj45SbwHrRmy6UJe3dEWDCMe4uXeNsFwnu",
  "key14": "4VfQogxB9tsdb9LS1R6rMTugeiUahchhd5kqcvgEKiULMPXq3W4p1jnKyWQbkZ3ED4dbq3CJNqqU31aejnYDzFvZ",
  "key15": "aGrvJ6PCmHSDLpca1mVS2ce4MWZVkkdxtPVyHY7ANPCLS9CKqd3zx4FXxPTzZxmVeat5BqoL9vrBMmSLoagUDZV",
  "key16": "2FV74ThuZjHSPJ9mqAYN6D7LHJ1FG5rFhv31hBrDJcMKb5Mz9GtrZ61LKtG9oWR4sVzRGLMWFkZMX9RBwzj4LjQ5",
  "key17": "4hZq7jFJ7ktYxYvXvXuLgme4VMP33NDEFtsA61sVQHaYd2ZHxm474gvBhBD8FGWGjhjCJcPwsMUHYf64WpC8Ri5w",
  "key18": "46RwQyM8QYThxCt6Ec5XfQqBv9GvLRn3Ci5c31E4Qw2CHFmztD86fn2P4q8DZu3MQGFiWoHctWGzPaRkG9qQGXxh",
  "key19": "5RYvSX97MTMUQDAie4JPf2V5WLr8W9inGEKjdfZ3mVJxp3h2oqntDUHFuJNReoDwz6r8T852w4qUedHFqU6A42Uo",
  "key20": "2ZMZpXWttEHavCvh38YBsHpyGnF1UxSdwZy5Dq9VkVqcSfuae2Z4tyFXotWcQJc51CNqDwWehnNafT6FXBysrjAq",
  "key21": "4tdpzYXCDonyBWgZhd3kYhrcUYr9NkMUhrNUukhAkV9j5KwDdb6DU8VSciAzYA1VLmi5WyFjtMDnEAGUmcXh1Ekd",
  "key22": "4Y6wt9MPe447XWp76hf8WNG9fK4Zzqz4T5AXm6xdgZarnZ2MBxSepPkzBTnG7RcqJqMMmEpvcus8vWYmTFUZ5XYh",
  "key23": "3waHSf3i7c4C3NASixTvXZFPHGFJ18SWc2Tend75i1vA3vody9JZwy8kaahuDMDMBGum6WpvLjfRFi3bsxqrBiLw",
  "key24": "65SgqQBseNiyJTYWM8RFaTvqQEyreu7CFaf6YjvREiJB5yvvXyTBATTvNammP92W3hicb9frDAodEah4bCeP8WDf",
  "key25": "4M6XLLk7iKVqJFSWYjWBVXJDorqBVeiPYmwurri3ur8FZLS59jv9CpTjSoDg4PwdDUyptT1UNK8R2oLtL8LtL4J9",
  "key26": "5PBsDtLhkwYjoSbRv5AvHcXaiji4qj2MFje8XudoQdVedJfck9orQ3cwwRHbts9B2kKUhz3mavz3MooVLYum5gr6",
  "key27": "2Ldiyd5WyN9GZQHrBw6g1tDWFdS24E4c5m5WLHrvNzT7fxZoQfpTaWuKoJP9L7YPwmgv1ocgRzf7rXNxZAQkz2b3",
  "key28": "4TDd66X1cxavCuPrNPjgVmHDYCoQbd2Y1frNAwaMfYMKX5GmjXfkYi3LdcuH6AtwtFWjWJbgcRi8Lt8yTHygn5qd",
  "key29": "tLw5xqRc5zzu5ZKku92XDPB9LQAhwGmjtFHYxhsksKNtwGdj89RsyM2oNEKBcckJ9ivwbTLFWhoHLjED1TjSi7s",
  "key30": "mCcAjJoNkTLMknhSym78uZDQPkLNgFNoYUzbTNHe8gckP3vhDrPKack3ybXCZeg4buBH5BBV4fzQzyicxSPn1DK",
  "key31": "3U78xQg9Tkz1Dad7NkkvnBbKGsJFU6GSUASpLvU5WL3EqxQMKKESpdvFhd9FHsAk2mD5TcRQpWdi2w8H9bTwKg1J",
  "key32": "5NGD4XH5sGYtCBeEBRe6KHYjQkJQVgf2MTLiuTWEMMpK3cXMZik2shBvr6F9xF5uz71nNMG5MZCtnnDPgbHWm145",
  "key33": "5GZVGYCGrZFNGNVzTRXjEgyC822XLC9Xdh9k421yedV7o6gFuaNTPL5dJC8diZpLouhY6Mzw1ZMmwNjbAo8YqnVQ",
  "key34": "CeZcQRTrwXpbPqNdoqLTXhXCP8FgeZbYDfstyGAjGn7sFx5ficxBtdbDSkSyVDC8hUMMoMWugeVesBXQwweyGrE",
  "key35": "634Tw4K8wUAHgLBU93Bo3M3Nmf4WuTvyzcd8NVy5QupWfQP4ZnbQ7hi27jZVzRRfvSrWHvFjWSSGj67smDHBoDBG",
  "key36": "32kUJaiDoPR9k5A5djdua6XLPEc9CmUXC8z4mt578o2gzgYwH881KrCN4QyEssfPu1TzVqKahspGqeDfNyijCjz",
  "key37": "21yoJCJZEZLDfbGYLKkR2Pu5LT5xuUvbYCCTVpcc8oJSgKwBaEd8Ui3vw5ELFccxvgRuERXakAfK5crXCwViMcBK",
  "key38": "FNHSi6tyh5r1LpGQc5ktyHMQ1m3Mwuw21SjhCRSdGNDgz9skX7pa62acA6STsgxZqnNX3HN5Z7VZtYWE1YdRz8w",
  "key39": "2WdForqo8TsbTVw9cJGdaZAr1KASnd3LKyVWjrEuoGp9icNQCftT4aSgUTfwkGdF8BeHWgL4PsjkEd4GjxDnprHi",
  "key40": "tTS6BvBSd4oEhiusrSKV1BoayQyJaUPjKj7BU4huaPXQVkid4RtLTji4ykP5sP8ioktLL93gamhk6YkSibjTbst",
  "key41": "kQJ8RpZ9A82sBsGoZ3nh3GcGv9Xgzm1CW38wde63vvVEitGjioQzi4udPfpknCd8ZxKL13uQBSw82dTwfmeojTH"
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
