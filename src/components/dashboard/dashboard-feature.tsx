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
    "5mCCZjEGL6EUYMVAxvaCLxtbp4WxYMZGVGgGyJWQhuVSsxswcS918mEySqvnX8Bwqfvu7L38doxkRjgrRQSWF2UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GReDQ48pXCrzzCak3GXvDmmTtyVvW17DHhxEyeirNYdVJsYZZ7rrYLQXg8vtWKDsRDB2sMdpY4tQ59ZZJ3eLRoF",
  "key1": "4dgK63Y9oNn4yQgKcv8F864V3qYNLe2JRpBQpTPWhsE1eErnCJ5rHDoE7qB39uRXkaDV8DbaTVY64pwVX1NzEvZQ",
  "key2": "5mwnVjWR8LtxwNUD8nV1oDVofrCL4ZpGAznzQhyoX21QcDVmYUXQsAozCMxD17H6QZKzcFJyte5LxsnSM9Vgand",
  "key3": "4ohAyexovb7Ciir7cMvPPkutfG6jc3MDv3F2tfYwWSGQ5rCuWLoC8JeGFYuGLf4nqeUFCNRwqxBdccFSiWzBQEVe",
  "key4": "2vkmnewkE2KGejEK3b1hjFs5o85gxVvstzpwmBfcs9JdWwbedCoYW3CxWPZmhD3dncDTJzsZKXDNG3LtziUqrMoF",
  "key5": "P9oETrHj8Zd6LcZCkgt1MuD5EKar72XFGDBGRFRYATyfg81xzfTGRk1JKrNqVu6YQGrKLTfXRnnQriqD9Y5gnm7",
  "key6": "4YBxBzr9Hrv4TPu3tL8ksP1hjxQQ4ztvx3PAvyTWvLL1jaE7pdfL4BiJYZpz1MLQ3e6GPfZm9QvE4WpnwWkRqjT9",
  "key7": "2nkxXf41VxS5BfgZH4NXcwJ17DUsvvGobW2tXoG86LRmnzeXG8H3YntgHPkcKFG4WjJtbNSYAcAL8M5zhbJUCXaL",
  "key8": "3VrGLJkc6rGUbgzKgsTNAyfTTSGmaUYfe7S7xFh7uH5CR8m1MfyuHEJYVLee9ktT8sDiX8WZFzzkdhcKyBCAdiFP",
  "key9": "3fPxNXQ7zwgz8LwU1AWkyxE8yzKm3t1NyYPAu2GgydoKkg2b5VHT3nA2g6uCiZHV2XMEQbhj5ydJqJnTmTvsnzKH",
  "key10": "4r9ZxXzXFkhFEFFkGUBFVzRCT7BnRPE2DmRYNwa2AwzJPD9v1KEmH9coRanjqbHhNev4Mnmh49WG46WhU2oxTQCC",
  "key11": "22iFWNFs2ZVasjcxAdbrfbeH2aDPw4e9JjT3qBywy82XqKB1xM74XDRQQYoSodufoc4Sn7bHWNecrdmPdsqqEEwN",
  "key12": "2nDcJcDJSMdHQhTJZ8XxZF2AgzGRwX5f8hhu3pfsb9zQz2wjqYmxThTyywarfYsQsdz2qJAbac2eBCQjgkRSQ7Ph",
  "key13": "2kX6dmwKHCNHSzLhx2MDdhWtzRntuUGVnTzid8euECJtrLjWmC72H2LurUStjXcbdkqMzo6gPhDp4bcRNvAXNRTx",
  "key14": "fbYbR1T6XhTRnzUkBvkiv2xdgJvV5drVQTFpuTPwaVNkiQGx78UHstamt18LH18N37vykYUqDveysY6dDeMpn5H",
  "key15": "24e7yT4J6fbRLqJHu3pf5vmej8AH8hwTRyRYbMT2jPsuiSWnD9bRfRwVo3uZkmx87UPPs2m3rNhNuQFSNAxM1sEU",
  "key16": "5atHBB5fpV4tLjYW9gVL26Jm1vDxdsDSdWh55cedvvKcr5SwThD7LPUtzN3m6wmfJEYb3xEVBD9qkYpfdrdPQnMS",
  "key17": "vtjq5nYoBx4jXpkihrYMkcq9CoVWJhUBZAskPELdrRXJXLa88XwbqapsvN72kvfCjdTm5W1H8i3nGMpF9zxD4f6",
  "key18": "3msDf45YgQxsPKsmtWeTvReUSKj716nHoA6BPgkVVhzsVb97JZG8y8b2WMmnKFdf7qSxFGeyVZ8mt5oYE93XSCgh",
  "key19": "2dvCvLqaotSRP417ivFSTNvNfp2THrnWezvgB5cWkojsmtCx4undcXhbN98RjikrYvYgD1qyebxbczp3HHMpnhaC",
  "key20": "5A9usKRu2rrG7Tept9ussZPZ5DLZmrpNPZ8qkgbUr2jXQiydeUUi6odctD5dyMA86AfRvsaR4X96SLXX1owqDuut",
  "key21": "5MtmJbVxZNvd4wGfanJyVZ4gPTNGF9HD7dfnAX1h8Dw2CovWBiDkjfa1HEnsynb4U3AzcpCkDbx1DWYmT7pztvdA",
  "key22": "4Uew9i4NSnmviBU5GLn4b8NApEVkhbT31urw7BaeREdEEPMxd8jqRoUNTkNYJ5yhqfVrL1o7A8iP449h9CMp83Er",
  "key23": "3Be2GpZMeUo72M3D3qajvFvgj8S1173xtyhVvhMr1MqvXMyqXM2ZvvHXwkZfrkbCmwXetAekHsHimyjthinieZwY",
  "key24": "45GnB2pyurczFCp9qyixNEhYZi3TK7EAH1UDm8MC4wsVtf7TZv9wueoZmB6o28BNwHQSXZdT2SGhfsfN8b2PPdSq",
  "key25": "3Pvw552HwjRFVfQJbQKLh1R9x5DwyjBBibmNrDKVcvXHqe5xHn9fcPqWLqNG8YfeGbTon2mYnCnTuhpKq9a584Pq",
  "key26": "3VcxAfyH3VG85ijDpiFV6u5rK3W6neiVt1jdaj9BdSTdoCKMGp4xb9oFEMCzpkRx5AV9riFC2o1sT3SxBLCn6gUC",
  "key27": "rZ7GvtieSj7xfWV36vcNSe6rkg5CJuWJ5BeL7FBM1UnLhJHY6MjMd7FxjSCAW6qVSSq8DGHHkQ9qcFBvFJz9fBA",
  "key28": "2Z84xq83VouUfnjdS38fHr8e4NByiAGaqhGtDAr1HjAUr6yLN2dLvuGxV3cvFY34y9aUhxu1Vzvvhiq8aYi5aqbL",
  "key29": "2LrB63K1arMgEgEwD3BBiFkM82AAbaj1q7d4zGQYjEiimseRLLeXjr2sETFhAeA27K54YfhjGQU9euqN92zCnCAi",
  "key30": "5UEWnLy8iDTELWe8rBr7wQHE7bzs8g9aMs5FqyNiKonRKPpBGyeU7dEcSuGh8bHjv5gKWffDvCoT8eXiGHuoxfeJ",
  "key31": "5aGBwvN3oUY4BL7ULXSWEdoe2gkUmdCvBrc7PwT9pCwgwDaEWgbZzCJsRH489m67J8BbXiQpokH5oHVhuDTSxPk8",
  "key32": "48wBQEBfmuEb21u1d9NkFkzX45cb1LyKpX5SJhPRs7JVNqwFrwymheGiGrperzy2GLGMwBuec2tBujh1zcBJeqWS",
  "key33": "D7UujJwM5SGhpUbhXue7iAnwXrTaLk4VmhWjd8vaLPhCC2cE6ggzZk9D885BaUEACqgu49fHiPBWBgm1GsdriAX",
  "key34": "QQGwau3XmHkdY86Qtf7a3XDikNrrL8Mr43quSVtJBE36cAXRV18sDGH8zbNQSQuuQ6E4GVBgTfsTnNgmWSx73jH",
  "key35": "41gjfzFMNs5FLJTedFBYfRzGCkKT6hR2EBN2FCEFPAQFUvZzr8p4iVdFtB4vr25RQPWeUXXMo7b1neFZAogLibE3",
  "key36": "2FJga4WTUfcMKPSFN7mkgvtCbmfEoYAuQBNqv49Zni45qZY5itATUdRV9VnXjbYTA6Eb8zKytYqQf6YsmbHgaRhk",
  "key37": "59vJGy4DgwcRH1M3AHb82pMjAKQWQ55NJYa75LvYBH2jzr1tvc1cdHBqci5YdWV2QM9Nv5HEzPvQEeWDehFqhxMH",
  "key38": "4TNst2o9FZK2fJDYy9GVMX3RK1k8FDK7Spjbux7aEkisbD7kosusPjmA4PqLUTPpXxh7p39JDGHqh3ZQX8DcFVRV",
  "key39": "4Sipey8VTjbrzMP5HfhgBje8TnfNpAXSoPn3pbDNZai9D6mZWUnbhNKWMLqRgrgNpSV1hsev78RWDSZ6wV5P6vzB",
  "key40": "67B2b4jtSNKGZKUwKJb4v6vcoNk6ihd66jqEupcr2vKyhvrBsK2o3fXkus8RSZcftEVHaSBYG4J12ESqEEKhgyQb",
  "key41": "5RKXkXNu55XgcucWQGB4wEKeAJsQjf8vKz1NbEhAaNURtmk6tL6zYFa1YkWmsCUEFz475hpWii9PHv6EXqHsm71W",
  "key42": "2Wd93RRQ78roW79GJwEPopBfzTXwt7LJFc3AoxvYmaQ5YkWBeJ1AdR4U1ZrkRxBCM2EJjZYy2df9thoHr4ipAXP3"
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
