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
    "4qX8d5YwWgfwUrm3hFs2mGAWV5KdzKTSD63snYeeWRxbQN17on7Rzt9JHBETTyhbTL7ihdkYAwYpsGVGAk35cU1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRjGZzRLmBNP4K4DXMaZhLTooWZVQtspR4tr2nUvTupwsYJHnvSZ9FEq2kw1kFX696u1g3j53F7BAZtomzHSEZM",
  "key1": "2XiDD8iL3ExetH7wEGMjHJnaQAGYwMaCghG1k6R7QizU51BENokqoerTpB3NiU5PpZWvkc4UUfWM1NiAUNvTxG4z",
  "key2": "dUujKZrcdvpxMDX8cHoc4pNJJbxDWDHF8FnU4PiuEAAYxvHJqndSLyngeZQYRgPF3tsb6eCwmrSyiTcShdUomLA",
  "key3": "2TCzCDaWeb3HuvqHnqUc36zx1V7KfzBsyz8QZJPGP9MfrSxAtKyan8BQyKjVHsLCmrymqxvipRJLqrHwutWaqkFS",
  "key4": "32U2aM3fBum1kGv2WLjfke9NuBMr1V3Cvj3EeAno5jSV7MEWMKURnnscCyUkaToL674KeXzaZySp2NwCdhsXHWSv",
  "key5": "4jhUY77YWd8sGg9daMM5pRw1age1m7QXKcMTgf18bfgEQbULJoAErDZfuz6RGGk97sMMPEgntXhdE1xK2MBTsUpf",
  "key6": "2nWNVcwXiP26iFLEVXqTrYdc31Lq2Tz8odazdVEZDFwhGcLQEhP3RAF3r9FNGrv3PNt9HNy1HJNtmhSU6H8tVfBe",
  "key7": "3PA8HvXhyUzSxjgRw1QaS1VLEE7QmVjEsM4YU5X5pGVggCi394LGxkNGZtZnfaaAYNXsykTzyh3G19Dtqk8SjGQa",
  "key8": "3s5M4pyoFmXgdMimHYBc5tbyUze6K5notebb3uUDjcEP7AfnX3yYPsbtz1p2RuxYqdhtRSXiosaicNdNmhEJ8VQL",
  "key9": "2UgiCFG5GArmztqMhRvcNbnMs8ir2gq8RwZVjCmdXirncTuuj6kfYSapqxqXe9HUXZ83NA919uM7dwZh4VJDJrtj",
  "key10": "2Cz4dUEthZqRid6x3ekPiZZ6D3i4TWBHJU2eECWFuTPte1qA6hQngoeybHKwn6gHs1Hg4gnt8acpPjzdiwFRgdWV",
  "key11": "4fZHivM6L9es5oK4dmnN15YCDgqPH1JiWUGCRhfwUehPuqvsNwDHTpYCTvk2vtn7VnKyfiLs9qoieGbJqfTRZ14n",
  "key12": "5cNvAk1cwfuzbe3CffNjNCrM7rt9Wx3BUHkQxPzudJgf4BVnJvtSbaf8cVbA6VUa5GUfp3CLayeBajocz6rweK9F",
  "key13": "3ygzwvYkZByA3kPfj1kfEP1sjy9m65EUq8KpBZ8a5AGmodZCpm52s2N3avdTSdhhvg74hym98Q1FtrntELoftSz9",
  "key14": "5faJDGCDh1v17LDNqgHuX9PRRzTfGDMg5h1E5HFjkCBvcw2WnuFFe3XW9wNiHX3S6vyEXNcTS4AkH72RB2uoPwLv",
  "key15": "4BLSMM5YJnz6kUYHaBvL8KUiAhuWhpv6XbM8uSeejJHwb8hey7evDHSbKTwCrpdPF22WRVYKW2UJpTAnzZ83EsUH",
  "key16": "JqQi6amDzRnQrLd3KtF3fGLNP3EF46susXU41fZQsrLwwVMJ9epYRLg9P7EapYtxjHMw4iGaVw65zjquWKujhn2",
  "key17": "59VMe5Ho7p4riqr9PfFbQiFY7mXmbYrdztYB7v9CBBNMxKMpDjRNpSkLq7KuMCdCnG7eA2PZLo5CdSivRz4AErEY",
  "key18": "3ZRtdpAvV19M1P2D17xpckGuJEgFRuypUCph5CTSomsdzqCMnP4wrmV6aX4RAZkBkXevWhTM1jMu1N1RKKjfXy2B",
  "key19": "3HjShhDMti7s5oZgXnrPxRQxjhTLwpQrVZtGGkYNA8UkbssZHhF7ZmrZZWLhY9ibmo5QAL1zHp7sAGrMoCs12eHQ",
  "key20": "5GNxQXKediGuoPVGsdiXtWSZz1gk47sV6ipohKV1SEH68CRzfEjL9mwtQZLEK4UCKdwuyxcqC8n83ZwqCUf2wF2m",
  "key21": "3Hy5zcsn5KYhqeh5CqkqqP1y7vtHccHGygERUVK5PAa5eGHdsimBpCsURXrkPJjtiXYuZ1JGL3xkxtSVpCK9y1uZ",
  "key22": "4LVg9KaBwczFbLuzTvxLo9XuLvJ4JbPQK49KboqEgCjGiUpSRAdSQkKiKHMuSmywLqSrkCvwb6TLSKbABEFsmTtb",
  "key23": "39ot3JYWaaXiL7dYs5rCq3kdj8vjkcgfTM1JVuyCGgPzPUsairxrFbqrVEA1wuBha44BDhKEZu9fJ71sANf6tGuU",
  "key24": "5rNPMyqgi1Pz21sVdgZfhU76L4ov4Nn9DS95jJiKEw9qihsuDEQwUoGRnBojk2yqEna2R1yZVZfrkweD4DaEtVpQ",
  "key25": "4R1UyQV8tUdK6J6GMiSxxNoz33WYRaeZ2gFLBJBsHWo4v2GzihQwPQTymTkxSmCTSPao8axmX2uX68edv2jCZMp6",
  "key26": "pAhPbqqvh6gys3Bssaw6i7ZA54QGHYRZEB8YV6mU1dA81MqvApu5LhARAm6sAFcqqEcFu4R1rUa7smRcxscVCnF",
  "key27": "5uHkNjFieTm2orRBKYYXQkTohTtAYuHKgTsAS42GubSrogQcKviyThJc1iryDxmp8AvEC6JyJJAZs7CBvNhxC6jD",
  "key28": "1UVZ54UBmkgYWhQZQWZF1DgXaw4GK7fi78t4x1HDjkXMuTnvgtnVLKjaD4i9yh8ikSEme819gmGmXDY5JaTc8YE",
  "key29": "kbNBSSKB3hAj1f2XXrtXgte99wW7cKBtspEFvoEp2VowDT5eqtudAKP46qRvckvv4ZvaqSazs7RCSsgk8x4JSmm",
  "key30": "5AvgFYFumWq3CfX2xbkRVyHdPRoKpUm9GeCEe9JyWFeN4cqsZm7r3wfu8J4Yy6rtAoJ8d46tjqqyWz3rrWPn6L9L",
  "key31": "4TgMRmJzGvLCUGVFa4ey2cJC9XFY9JjWKpF9DKoGi8UyT4CRkwQqC9MdoHyAJYk2V9nbBRfpThnXA95ZXLwKk887",
  "key32": "5APRFVhCcALTPRpA3NVt541S2jfseDCkT3178VvgwGAyKo7yZHSwE6XJcuEAPmwNgSShLTsHGwhB4WJ3Rom8PebD",
  "key33": "5omLwDLTbwmvrjwqBfTpgqTReEme65G6UNAvQBxPigd8nSXgFGVgE9GwfzfBAgLbuRUiUDCGJHa95EK9c1QKh6YU",
  "key34": "4UXS3ejRVLqP6mQR7efvTtBmAUh8RKxwzwQA5PWxLKhxiurQpXKRZpURQccoKbdoN634xKf5FLHX8p6Dr277c2Fd",
  "key35": "4D1hXagfkZkvgi8viwUPPoHTPxat4N4xg2Pkh8dpcv1BuESS47jdMPKLHWA69ohDkbQMpEBX5CUaRBduQNLNJTaG",
  "key36": "4qmQA5X8C6eWCGXbwgE1tx6vhYAdUgg4v3Biyq6rkoCuv5H8bcmCmsWxaVfZBqFapJrxd7T4AuyEsMW8wy9axpQJ",
  "key37": "4ScVu49epY8vukf5h2D7a1U5PTXCe4WWmFdapZ44ddBHu4kpHGFxnxh6gPBMbfGmYm83MVSkaJdzr75Pf3zCzT6w",
  "key38": "4Zwfo7xJc6JjzbTb8fmChWFKxGz46zh8B6J1CBVgnVGev2XAB8K6duvLaH2Nw9qjweNksqgvmbYTRcPvp84aTPjx",
  "key39": "k66w1CbZgqTD4BVENASQeda1kispjmrKyRTvUB8RrEsqPp7RkSgkdDyh2E85KSQwNBynQanXjg75Q9EE9SWkz3r",
  "key40": "im2DVFG8MtfMKAFnnP39R9jN5KYuGFCLan6zhYr59zvB7oTQ372aY4mPB5BAfs8exf7YNUqjUt5WjVJBEq9W8LD",
  "key41": "nF9KUQUJm9t49wBY8Nfvu7HJybi8DP4LfD3TJWY8ARKiToF8PCk2Fx7p3MBrqU4vx4iywStgxFisJPXCaGitXxX",
  "key42": "5BEf5xUx4XFuKU6rahg39cKhRZMyRMyowowx72bE6Y5L4XMfiAz7QbXGNVFCH77eBBE4quv8J3jgKb38yyFVDoBq",
  "key43": "3EggXMT1KvaQpM6yJdj7B4cBKQSkaXDogEHGty9ZxyxcmYnAaSB5cPpyn6zzP9bF6krdJMqYrbtYV7u5Ckr29mRQ"
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
