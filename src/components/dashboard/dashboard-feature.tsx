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
    "4aRoCmBKQBxr2Pfs5opZB83KXsRjzwQRhd67gD9jShUewHRcjhsZ4xVjJogut8oQxaTa7RKDmVxmtJF9t2ZCphba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24RHAzeKPCPMDUmv36VbRLVS4nqruHiqXWZkyH5cG7cg2QMbFxKfah1vP33jqs3tftwUYufhMLQYcTBTaUxE9Pwk",
  "key1": "2fc7ovAYKFgb2qMUNvQDZHyeTvqqo9CKJpw7raHQrQ2NZCn4Lg1nwPHdgez8DJBA2mQ6Ddq8isVm6v8srDW1zLpG",
  "key2": "fndKkMWgqwPT5moTnvQ9KBGET6hxQptWmJGh22rwqEkGwrCN9BGAWT2rhPCZZX68MAxC8rA4V13YtVWRAUATKdh",
  "key3": "3XcXPmPESHLgrNYY22m9rAvfKN1xUH89byjasLWRd7mfS3AQJDnZW4vkYCSmj8L7TcuBJwuYzgbaGdXVDSd5atQC",
  "key4": "66EFRDforw9HrYtFtojaznLQcAYRSnav4qtg2PPzyTgcYweAZBhev49y1eLAFwRGhHdCSWUx8EM8wHNqhXN16P4S",
  "key5": "4GuacRreZTUzthThyZHgzV5bbQuTZZAd7PshL6mAMTbJuQN7T38yemsiWX1Lxvpym1YzspiNfZTD5VNNMaA6cHfj",
  "key6": "4MKoVJZT5RBaoAtwmmGuuqvUpznQkyRnLPhCKTeZAhiaUMvFt9PxjDwBsjVUPPnJnC4X1HQnzx7TEQmWxrDE3VBU",
  "key7": "4YroEsTCQYPKRaJ2ZfwxtfizUfGExo7nsaZkMTV5WG4XfWxWs32gfW4KNsnfhgHrkLE7STGCd4UPCvgedJpRbSYQ",
  "key8": "39EyvdXVMvg4J37eXJGAovxtKJStc2dE7jYn3iWZvKBpbDphFc5kFphVFRuvbeBW4NyKJPh383PQznjG1Cogqhcf",
  "key9": "2DHu2n6JdKzqFUm9egtgz7KJqKp5uyokoekyx69AKdk8HSBxi3p4UM552tYGzA6XdS3rfu3UiFuegtnVDDjejoyw",
  "key10": "BV8939dC874XAb7U64yya6XJTFi4R2WQqa38Z8LGe3xzWHYsZhQ7NrWCZWHFbG67H11EuXtQZ5LcZGR2u8g24pn",
  "key11": "2hBic97Stgai8ervCjHim6dh94u6MkuWuEji3sMi5ThZYRK3aPrq1rDHGqAXy36hZ64sckqJng2WMNEdQ656cPQ9",
  "key12": "4WoJHNH1MwH2JqLe3fkttMctihxtxttBXzJS9T32uYTc3ayeUfu4dTmky8cUbVKvf133ThXVxtYT84iUiixcirnk",
  "key13": "46cY1CMBHgdWPGDWjfrQhQFU8DT3bPyVBehmzD8dstdAnwcjYwQo2Cz38KCKgZ1AZs1qV4Ba1yU5kVQzH7tWLHvy",
  "key14": "2a9rQdkrYpgRb9J4YZCQpxJNdrn8wDKZXv7tcWoXrqpqBxy6aErqiBYDLn4aE5jEeWoKPGR59cHqFa1GxWevreKM",
  "key15": "5yEpsWSejaYnxV9GYWGgBq2sG1KRTK8Rmkn4utjbg1iwcknF9uKjRsbyTG5V2vcd1vFEVhv6F22wFiubUCh7iQP6",
  "key16": "4ZukeAcWHcHvJDBKLUc2sJC4mSU7CZVoQjvLCpE61qkVsWovDTqDNPaZpju7ELtswtxtH4gtHLhbVVta2YNkgkbc",
  "key17": "4fLcff9rCF65dSRoTBpsXTRhZexanTkBzevvS2Jsmk6fKpGJzhSYBK82g2xKi3PwwJdJzVcVPouHJ8fZvPEbZUtF",
  "key18": "2YhnR2JiMpKRaVuRgQckb4rKjA7An6i8xVzMu7ibwHyF5ggGKW7mJFsGhXQzij8vJjwNDYeU2fxaikVwTLJEkVKU",
  "key19": "4V4ZJU67pH3pL3rZZBM2iQ7Ro1yTQpq7WLSpLKPkz1rMLAikT4DxCr9BPGqWPjv9TTu7YGZ1dntM1XfH3RJudZCF",
  "key20": "3AjKGtBeiHG4js3cVyjt4wtG1wPZwkHmmMX7hzB3okXy9tNXjXLKYdKfm9cczkafwVYHQccZcgTcdbqxGgMhsh3N",
  "key21": "2wmgyJnu9kiL1XXQR2tFjSki5Cd2g5Bpaz8hkn7ZBGPnLr5c5cMBpmTUPEytddvVmo7Q2rW76kX7ugw2VrDiVai1",
  "key22": "mxz6gXjUkdm2Xe5B7vqM3mS9PNgKaiR6jchb4cq9SKc1Q6k93scVwcGS4MfbGXFRdNVVj3ejFQp5KbkDGNWJy8F",
  "key23": "4xc7SiFW73d6ngF8X52hCE94vMtUZVjokwoq2GDjZS4MdLDHP8M5P3qGp1WkDGrJDpXBV1EywGrsCxTMsWvpuaUV",
  "key24": "53JRActtWnwA2V4HWWbanafpvqMR1ZCsSugdKTpRuaN2yPHuYvdKrB1fG6L9TrM3uPJJAz5MEzdFzEn4N6maQQH1",
  "key25": "2XWKcRKpAwm7CtxFVB7Syv1Y6iFb46bQyvvyWL5uPPB1jwidPuWiJ8DU6ofivfdXUaj49fQKazrB7RXq1KkCddza",
  "key26": "3FcUNHqExtUJHUunTDwaTvLScM1nkTs9rSC7ErzZgxQwPQi98g8KTEbDo4Xj6WRnQNN4k8LUZSrBddAsV7x7eBfq",
  "key27": "36tFHSzyrUvYUB4EPtvt2ceGf1kxXQVtFg6zt9XC3zHCVvzUjczK7AjSeq5yQ8Mz96pivJbkHCSAgmUZ59TAbuZK",
  "key28": "2PTYXaHWBuUWuXDJPNv5qDd1PzHMYNWzn513JUiufwSMLLskQerVJ5e385CDcfvhPGdeF1KZt4YoWEzGn2vEF3bK",
  "key29": "2Rj8EQbynV7LLS7B3sdtUQsyFVpV2oM5D9rJhWUHfP29UkQTR3T7oyqis7FUCpVTdUXeyusX9bG4BGeyiN2EgLe7",
  "key30": "4TTqecsigjaujSk9SCC6hKsS9JrvEKBg6y2j8yzmnhbpWxFznannsQ8dxdQWUXcTodcggHQH2ftjrJrNvKvPAAjs",
  "key31": "1259Zu56ptr3htCveh9vtSaVvHxpqRqV32K3DbM7ysL3mgoJWnu79nrYwBtchaxJqEv6tVgGsvBYxQYywVBEAV6k",
  "key32": "tCwHksrmernRMLLNAgL2NXrCdyP1oxawNTiVJrLtpk374F6yuBQkCuxU5114xTSk4kZuYDnTVLbL9LU9MKVGZfi",
  "key33": "5EHRgsiKruRNEfUf2z9FPU2rALcAmyC26tHCg9VM9UQBadxjghKo48DedXUsxucB4FPEbP6nLojorvLv3Kv9aADu",
  "key34": "3AVHV1XqVZdXJ1wDMcrYAe8eFj1uMmSPqyzRgy8drGW1jb5zboZ2RP2DFySaBhETKkW5pFsrejtudiSKMu87QU1g",
  "key35": "3HFN9Rbj6HxcdhEm5xWfY8TS5NfXpN6XLg7pa9EBhdj9w8Zu2mMv8rt9NTJQCF2ioPr1jycRJ1qYotKB2gHWveAC",
  "key36": "2qhWtXg2afkz89cjeTFXG6hfSd3YoFPQfdesVEBxEMpiJeRfx7QfnAoRBGjSHFE9cUJvZQHyb3VUf8bG1NTBT8oQ",
  "key37": "4AMjyjjg3JGXbDsbHsMeeVshXgjhcmpfpZc29JyTNg67wXUGkQaQxSL45qyCSScL2QpfdeQWymbrJi7MdqERgC18",
  "key38": "2edmh5zazF1Tj1GnNh9ay7z57ckHGBGYterGxiSUGNAVDP4CmGMwAm4pkwPKR6iwUWZwbGE2C7Ag2igh9ZgEKeuM",
  "key39": "2ZZgP6RfX4Qug5B2UMLrEGo6UAT4Xij4RH1zmfrR12gLsbAS2F1b5LgSeYeVDmkcCyDcrnbE1BsATEDmbcGJUPdm",
  "key40": "2ysXp3FcEjeVFtryfuT9Wbm7rWdLREKhMMyR5GkYtSLospZsp2f4Jvh2bCT2C9YzRqEamuDhxu8qFX7Hv34QRYCh",
  "key41": "4kzpGhU6dgsLwfqEApgT1sbLAYXkLmceomFJN4E8TMHUYqs3BLRwmewYTqDANRqajnp1p2UWwRAp85PH6Bfnqfr5",
  "key42": "21SvT4Z1xV451MDR7Yt3JH6PbA565yBuV8iFg2Hy42BRQnqt7J6TujKnu2dnFcaqkAgEnYG4XigxUVfnC5QJe7TN",
  "key43": "2YzaeNbbcPrtN2dz7L2J2qaKpXcNk16kZko1YsQB31CCGmdJW1SnicDiLoUCapAPTe9FXa24YNLyb93Xizo1Fubt",
  "key44": "3rRqgNj3JHeUNgs8PgusnFnzzbvwixAhyHCk6CPjNKerKxFNcbbv8K3twk1FQfBS4vUzHSF5hnuSoPBiMewRsy1S",
  "key45": "53ikA5gqSCgqEaxQw5Zu74qg3szahSWcxbUwLLZxMYaqKcYsoekGdXAJ9WPZJN1DxUjFQkQyskxkKcTgchWdMJv7",
  "key46": "41n3FU8Nvj6y6BBC9LWQTT512wJZ4YgmffjjJw841SdCw4a5SsRnWvD1gvcR5m5i17Riy1i8TtettFK1FJeueU72",
  "key47": "qDsPWQ97HCc6BeaNrc7Zqa797CY1RwkMf8MCo6c21v2yBA96BRnaQJPyH7eMa7ZpQ7aNQCWXWLN2Pt1tFZkZ99y"
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
