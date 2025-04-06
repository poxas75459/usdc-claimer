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
    "21G3Qy8dbRvBF8ZU4FEU5QXN8JQfvcet25ffEbBnyuSZtyf53pSSajk8w5V7umps5vYFGaV5DbpguNoG7fUzSxFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBheitR2ZFKrDumfLKkxeanrDWTRzsAfS9oiXDQAsFtdatZvwmqHDxuZqctCuYdMobrkwuyK9zDzFcnu4yorfSh",
  "key1": "2MuQZZpBVMy5SNLhTtGEB37L1wLLapvCcgaSz92FTD3QkZZKErDVWkZdq44xzJPsk4PXrS2t1kyWBZ9W8hr1GVhd",
  "key2": "36iDfZn5u82mZMJWfX6ys7o68BoUGNNAt9NF8YjM9XdWg7CyDpy1D1Kz2kTP9Kj6G5oaZExVffARZVjyJEugoXSp",
  "key3": "5sLvci7Tr1WiaNS76X6ECkmyA1UupGUZ6bSk9PnWh3e2UUTmP7neGnRGUkew4addxA6Q2PNUeHZxdgLRo95JoqYY",
  "key4": "2MBQsSr99Xzp9CTiBhQQgcuQhKpRVnsz2iTVMDvSEnJz32h3TTyZdxMkKQR15YUAFytRBcsYKoVYntEW7q5sWZuS",
  "key5": "39sUCAagK7xWSEG6uUQ3HcwaXCvzSgRMdoP42RFmwXXG9i5ajCXDSH9VtCgwgBQVsnX1f2QqoanNSEt8sPz5b334",
  "key6": "34QowqCGRo1TzCshpNNU6e7TvbMpnDN1J4YtRXb6gQHfDgXtpXHqXgHhYcvYF6GXLUXA9EixatLAwhGtSByTeUxo",
  "key7": "j4kzRBMLd63UsxiG7WydDciFwb4QJi9MrUUEhHyjjyjjXQf8z5r6hd8BdSBtq6Wuo4hpLxquLk6m6eQHzXeXW1k",
  "key8": "4TtWPbwADtaBPMUBrvaK5havuCK41SMrP9m6QWXc2mLa1uCpZp4vYYgSNEUm8cuFArsKA6kiQazAuH8sV7j79TfZ",
  "key9": "5cYRH2F68p6fKxGKGqmxj9KZzb7Yukuu5RRdYxKEJpehDAkMqpiBsLr81J3HdTUHA8Hkbst6Mf94dpnuN74gtRB3",
  "key10": "2ViqgrfdhbLfeJRxRX2jvhYoz7S8JHRnNg2tKRmymUP7YRfrYSxvWvMigZaex8zjtQmNykjDej2JEd1n7FMb1PZL",
  "key11": "668nBgsyKSNuot5RJeZjKexnR94axb6o7KVGhcbDkDbZ1R4mS8P61UkQaBHSMhTtKz7fiK8pp5dmWFez569YrwF9",
  "key12": "3DZctQHNpncUX2UaBNCzppdq6UUFpa5ogrVxvZ6iQSxiKvMq3UVN1fCWccSRgq844779ddHJsN81MCVHzLgJWtjd",
  "key13": "4jftnJ3xf3DJoa5w9mSwFTWQjehByaZw92cUqLkKUie5zfJn4m96mbrMZCtuphZPf82ctHWPriLHgo7otJnSuDsQ",
  "key14": "5fAFeZMmJNzH2HpRV5eozybjqWhFzoc6M4CeSvV9gxXuj8vrRfB1KUvdSv4wTvpPe9m7xxwvX2nibBVbEFhRpKM2",
  "key15": "2PaCTZ9ZQir57r9GqU4rkdYcCpfZP5Vmo3M2fBoHCyYwnYRjBJV9Xtspr54EasuhJnUgywpvrxatmdtgvHQYpv9B",
  "key16": "2MYXcRK7Ea3dfvcpzNEktRw18G7Vgx5m3GgNaki6VkyojKxCMnFnJZyw8vHJQfXnshYs1tvguJVTahSPtyE3c2wL",
  "key17": "NPKtLafdDdbYLB2ZRm2w4KNqhrkvhh79bJDXZnBKhtsNJtD3v5TbiTE4qRaAJSxB7EmBLHrn3s2HvqMK49fKKJ8",
  "key18": "3ngGPEd8ZxaYwBZC3sUQCHE67jPZAahjc3zsQQXGcDTKxmq1uz3MQdtvaLnX4a1f5ns2KbCCnHuswHyrrM3W6RRr",
  "key19": "5Pt4pdbqFcmz8AARqat4GhvEMmDS7NtaboLTz4QvU8Zi8XLLJY1fFG4S2fSNeZANSPGZTMafF6Sqxospm29FhucE",
  "key20": "WvcoyqSFLcMjSYPsvY4PcVmGrogZ94EiT17qCh7R6XtUSVZqHSfVEwLzdxuhpLNMoTURinXrKxAQj89JJyN1MDQ",
  "key21": "sCKRQPue4CEpXNn2bJ2FMuwAfVB8f3fiN4153U4HuG9gjGky9CTSJTCSnot5iusQRtMJDZHNfKEZMZMRjWCKhX7",
  "key22": "3gYdLd6nmXKV3WhM5ss75t6mbBp13xix99pGJKcf2jW8SDnE3cF9mmjbyvt84BLantQKmFn5iAFNzDSvMFWAzXKn",
  "key23": "5hjGMD7JkAF3QZ3cxBTErc6oGUjVAKh3agXQyvoxBniWb2qCWZUTJ1p31dRz756RkSH35ed9kkUAPmRUNzEM2Z8t",
  "key24": "ZkLxY75QzGJhwyeEnAQRGCYXxJH7JLxrum1sMdhDGNaTLuNDbZ2as16adAijChDyVeSwcengCghG6eZYt1XDKRZ",
  "key25": "5GpUWsK9W8hbz1CLLM2E9ARxreZpVKpVQsDV2jYMpATSid2SXRcJ2ufzYSks2hZz9acC8hxbucxvsqoeBk8HmUP",
  "key26": "2H6j3WAaWsXyXzz8deepypFkokHzhhNNQjXvvYQ5Sc7YNwE7gFkEANM8k5Y65mRbkSpTvCCoVyZ7LJXrhuPyZCqA",
  "key27": "47UyzG6zjBGp9Xh1jLH2xkLy62gstx6PXJAmsXZv6sctYgqq9DLQJ2v8QKqBTWzP2M1gLZ6cDbsmk3zbiLtaMfxe",
  "key28": "5PXsmiisGTbDc7AX9rhzFvGZFyKT2db1v6JVAAtHWCddvfj1nZZ8Wv6L7qTWyk8gDXc7oJWCrETskeyg8x6rNLc7",
  "key29": "5xMymr5FpNHQWKSXPY1fA4uviEjYqiKwHpQe6kDuiMkezpUwXQ6N2SQKey9vvFV7R4fjq8nLmLrXHbyMJbUe9FQB",
  "key30": "5ABj3kHUMiugLuNTyhb91u4vyKEgHKSbU1SjcWBVNihoFuA4XbFiqhcc7JQ2gvsw7PVMU4jrVKx9t9CNH3xwCN1U",
  "key31": "i3x5GQ5HKcznCVJzrrbtgyWUprJMyGd5XuDsfo9Wt3SLg1G9C11FdBR8rYv6tJHTS3Ck5h5WTVSUPBiLT4APrF4",
  "key32": "3fsTmh5zqEBQ2YFADZnmYQkaysTFCANpS5RZwaWNFni1vXFos4SBDXY2evEtAnh7WJSwzZMYgU3op93in83ut3a2",
  "key33": "3VQNhgd3rGE41ye7Vs4jsfViCe6Wm2yRNgNDLNVPsGGaymBeZsiX7Cv5zihCzbQkPCQAUA7PyXTcZtXikwwr5zdg",
  "key34": "6CA2WacQ61sEmJpwjL3ESM9tcuZaWS52RTt7xYYQSjWZGKthVTRidm1XZA8mYUJXif6Pd9YjBPu9nB5yfCuqkdi",
  "key35": "5Ut5EvHAcexKezuQ28i3nTHHSoTmJRvyVKdcNhZWpvDPU8a66CcqwxmfdSuH1oEWxPL2ZvfvMQv75Y3U8AjcuFQa",
  "key36": "4GwxTE897TqyaQdHKooHqx9vEJCU8gx3kCqxDzqmTeHVFSLeVndqnW8UQe3UWBZz23gDnunDAZkxnSMvmcwzsSQy",
  "key37": "63jk1mubJQWYbSsofDw7Zfiggbk3nuHAkAVxQBxh2znN3G2WdpdKXhEiay7YvTm4ihBRheQUXMYRy9KVSZcu99x5",
  "key38": "4E1FAF7dUAEk7NTKKo1Ay6mmn8jmtzJrq6euLwD4JZfw7FK4YRfrcMdXdh5qH4Myk27ieamrQ5Db3sn1bCP8FqN5",
  "key39": "3cqa2cRPmfLNfPwUoPBkErTjBhXtoi9BSBobSppQVhok8p1YxycyhpGPUxrLsirAbqYuA9dt4F3FEBrpZ5SUW7bR",
  "key40": "VofKTUxjECdhtSzkKedkvMCEt6ui5fBN3Tsor8bZN6VDUWSG8tWxkRnfLeGQDqQzgYeTimZ3PUZLRxW3GnRcGpi",
  "key41": "2oSCZ9qvTcaArEyR447WyDB9mydHdEeAzoZER3qRf2meAgL6Xn7UKzGr1y4yUWxY9G86WuCmqCRsubrnL9DNKsiJ",
  "key42": "5AQUvZmEDCNGacMQmBxeJxvEAghrEoMTjoDy3wofTWpxxkSBDCkFPKWR1xcRjmivVJCqXjy4uTHN34pa7xyPCMFj",
  "key43": "4J1p22Fige1qfgBcH74WhoqYjTFSStFUTxyZrDuztACi57UpTdNbiwfBYhKkrSQ3NmXnwFdd7wECidAxNiC8Y17w"
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
