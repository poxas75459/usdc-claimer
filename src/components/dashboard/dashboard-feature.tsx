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
    "4uRr8c5Vwy7jpQrz8qPeRK6CSM7ZxZxju3MJ9CGmiJug6rgckRmU5kob1fKhy539tv5hD19pNa6sMaB6ZaBbYbGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKhsHMcCTX9RzxEzzreijweismaZRixEVTQPU4UqTYHKj4KAoxdYqhSVR8wHmaNceb1weodqJtQrz9wMtMfKigc",
  "key1": "4etN5p6RNyfvHN8E42itH4SimFCXSXYMa5rbbMmzEv5zdJZZqLBnoiBGiiq8Dz6t9U3VopcTRVkm7zj48j5sShyk",
  "key2": "WBKGSxf8Qjr69YJDgTVTuJD1tMido6u3tcQ48cdSuEbprbscdGPNFgSstJTawMoanRKMdHf4qXxk1qKjSsHQqTr",
  "key3": "2ziBYdxbfTm3ggFQ9rQBdTuyGpv1zVxBQYj4JMXMmPqDEUFmepsbXuHD4Mx7MLqvgVMj2jKAu8knY2BL9wNFk3Da",
  "key4": "2XUPwf3uE6fnouXfR5kQhwXagRYHEiWabMSSRaM9VmQWVfE8b4o9JnhG2nS8GLVmU9D9YEyDZnmqjVxLGMcfwNSQ",
  "key5": "5qCJbSx5UL5ygZdgTGj4ceWrTJhSQmDhVBtqGJtyjzrRVMzBXbkPVatGsRBRAYoVkq6N3vyPkqMgZpya6KZ4xCb3",
  "key6": "2bqm4CERywPuwpuSE1geo8YE2H7FhNQXWZX3RUQ8V3qtmdVERBqfLwixipFrfQdLuWN7uWrc1JzYJcrGTutczKGT",
  "key7": "zeApkguuzspGWd6o7dkjwsyTzkQVQLnEEKnTPDEGx7MM9DN4ycA7pjigdoLUHx7ofSo1vYK24VZmfGZAuPohB5W",
  "key8": "4esv61RDbZDLF2JrAoFSL8d7uRfh9h695quk3Kg6YkgSNyzFmWw45RqaThLxyYDbV2muCE3qFygy5damNg68iWMQ",
  "key9": "5kUnnaTwph4ZtEsrWV8obKGxczTa4XnSBest2H73hEGvbgoMR2GXetczhAKPH9kv2v86U8XxhRbSNnLsQAmEEP1i",
  "key10": "2iPLw6N2VkuGDzY6vriAML4vchVKZxUAPMdopWREEjMkTRonMteLZMvJekvadcv18fGtA8yt5tmRDtd2kBgHpNz6",
  "key11": "57mrdgkhz7ph4V75ovGX1pPZUeyiR4f6hgvpLnxorYWEGdh5hHWDaaTDX8Uq83cTbpuY7hQBnvQ7JkwsD5cxxN8n",
  "key12": "4Dgp4Ag94M2AXsaTywips1bhKr7dyYn1zpbak1sZNHbBZ4Uhvxpammq2Q8aNsgfUhVsHwzxpywfro12Uz2cjZYLn",
  "key13": "4pjq9epX9fzNLiSs3agfCwLsebt6nzP6VjhAzo3yywETM3CozfeoBLLHE9Rdoo6DZxhytk8Sn6h38D5awdVtBiTw",
  "key14": "2c5Ar4WxrZoQDcCs57K8Nszo2HQhsGcVNghqNb3TZdFMLhveVLYXuHsfkSSTJbqTJfusHmJomaFX5BPJHasecDcA",
  "key15": "yJPFDc9PwVRGPNyC8R6BsPtDUFj4vZBbD4YX2K2gaZZaoF4eN6oB7PBRzuztU6x23WzMQijKpqMtKB1ndExN6B2",
  "key16": "5v1oRkUG1B7ZubA8KKsZxHVSC2e8ttVHpeNbCvAioZhdxZ6eoxTKQy8CirnEFZfuntM88MPgtW5nbT86ny2V74TY",
  "key17": "nW8Qwo2SvqwC55AcJw2GqhxMhFZbw7C5TW2hwG4cA7WJGZhTXVErdt6ddHKhjvG7oyADFsVaPV2qcRDqsUJKxGL",
  "key18": "4qtgYTLEJ2XzwXoZWh73d49wXQ6CkHH4BZkWgosmu9WxWjMdY13bBscnHrbN3WAFyvSX2zJmsnKyudScACV2H6dA",
  "key19": "7sXUakjPFVYc2HhsQRwJE1yScHUCLwaaacR8N1TUJEAYCH5DTzvceNuvBkUTp8ZamnreXwfvHHn2R9Rkb9PTzYn",
  "key20": "2xxr9aJCAAD8zdk1MNgXCNgWmJUApL4MjbeM8qWHQWU628sVydx5hV32dJQM5kjDHsBFgWxnz1J3YXzTfF37DS6U",
  "key21": "3jQbQEoCHHLckC7StypZDPbfrCYxNX8uCGw9c53MzmhzGoLnVjReRVvfcbPX9r2nodk5mwg9z4GvZdBpyY61XVVy",
  "key22": "37rmKHwmkhr4n1VmtPAGx58CkpZTBL3U6bGEmiSEbSraWrVHQZDZRT4HfSp5vvs8eTSGJbE7qBwaPhUoXv1upDjC",
  "key23": "4qW8F8jwECwSmuUR3g8dzjxqSgCnK4LBKMh6tHMP8Zy6RZipcshbiYrZxFwD8G2WgCjPkUCkh2bwPER1BePbt684",
  "key24": "nsn74KUTqqiqAQGYnKqLe3TsfpmFVmSuqZrdCkZd9VJY8xQpdyZZxnTUbYSFqTrPActX54gVkjR9zgo3D8qywpQ",
  "key25": "2kiYQqJg31U7b7ak7sMcC7wwKv4JLNurtdsBjUoaDk4c6XKunjBg3SXEvwnn1SvRVC5pWgzjSiowh5JvTNLpeoeo",
  "key26": "5o8XL1Ghf6ACA71G4ZhQPEgTtAKbk6fuR7ZqZ7TamevRpGWVF9UBjGp58T3BtwFvjha6Fzwdxu35pskzMtunuciK",
  "key27": "mnSERs9QYPKimFS5J5aswS6vwLFk7nZDrrveTiCJDRpy7CfvyfcPY9mDmWjo9zxYmxMYym2dzMzSoEHhaQACQ7U",
  "key28": "emKQuEXuu9fp3th999gCipc9xsouK2grTvJ7N4L7LFrVnx5NqVfw4KzzKF9mt96bwCjWjWERgK39X4cWR8cFqAF",
  "key29": "35f1tLX9sYVHGa3nQKhCimqozjH247Joqc9rbH8vpZALcxG4T5Uy2x2W17DDQK3zHZAZefzzXhqymLd7ffgwAijL",
  "key30": "32u8L5dc7snZaYLNwpite42dyHcLHJjo8MaTDDsDWcicJL7ZF2drGGmZ5XCupQtpdSxs7UWSYjac7f4nqMfFwixv",
  "key31": "36mhFoeA1VdjCj2Fz88q1zwkyM11hh2B3sCEEFY8xGTeh2t8PnDNSH6QSbbkL1RiFQVs5yaMKDM4grnDo5HpAae3",
  "key32": "48kZ24KAkpRdb6Ki4g7PjmwuiwdbhmEu6BZqjARVhhvU6TdCkpXbERs4E5SgE9WA3x2wUJSL6BEcfsjrog9Nagdm",
  "key33": "3dmNNpMPCGWXRmxcxCEubsCLWDoR6wUc7xiqGm5nJ1guM7D3gjiZaDMsvTJWAEN6NeHP6ukAHoFPmZGrLf51inii",
  "key34": "4qVeoSLkFzr3GoR4eJMyDhpCjuPMFb7JG8dsi7WT5hptxtHMnRM1Hi7U9RwDjrRntdykYdETgzqnpBt4sqhLEpsX",
  "key35": "3Ltet8wK3NkXFMyWjV4g5yiEHnvDSj61omieGKqysujzoheAQ3Q2HD46q3VLNEBSuBm85icTFUNFjc4GkpnqxhLg",
  "key36": "3n4o457Ny7FuwoHPwMj52tFUCFBX93KBm2P337hwJFzT6Uc54Ebgc3ALcCbrer3h6L5tVedmVKBzFkaVezn6zZFm",
  "key37": "V4sbc23b7pNZ5is4P4A9rQDvRTHyC8BJsFCuQjKBrgkTBQhJfMysnhvf7hstZS1AZGhBvQTJ8oD63eV92HgW4RS",
  "key38": "44DYKVMGoV68spw1R9WsgfioAFtQwkh5S1tThuFM2imsKLApQgzpiS7jKCxfKQFbnG4dG67TiZNFvVZKwUcnTcxs",
  "key39": "3J5zvXfBHQJXUNkS6JMZc3SpT5caZQ24FgxXx8TdCrCs2ipFRRN7MLpkammLLH843J3Z4XLtckqC4dJ8EGfdj4E8",
  "key40": "Lx7Miq4jYN83WwDdf82BU9nxhSREhmox1Wysx9MnTH6GDjCzBi3Zqhoei2YbgwJiWL8PjJW89mcQbDVkjU9ruTq",
  "key41": "3f792FZt3z6VFbdfg2SqFFSj7LgxZs99Rwv54VALz9yfPL2LbSig5aV2VLrW4Kf3uKodd9HiBR75Rx1v1nmLRsoo",
  "key42": "3H8nqgntfEy37h9UJZZAQDRfLGmd64ebPymGUGezUqbdvJeAmkUxrEEww19615dh2SXnxd293Zw8bouFiwszpA3c",
  "key43": "2rtmYAoDq2X6L2cdUdQvdxjMT4StuYPadqyowr6NYjKJhdZSHdwS6TgHNhoFvCkR5rsuWgT1yS2fBux7iyn48HBK",
  "key44": "4BNv2M6ymHfhisiGy5tgpBNo1hKdhpTxERnRGU8JvnF35JqJDN5V1zhE3wLEY3BN2HJc4p1zczskfDn8Kxd8BuBQ",
  "key45": "3vj8xbinYXGER6rrFW7hPUAeCrrCj2aTDRtdQkaoYpHFZfGk2M6XdJTGwhcMRtGaNspGzqXPScNiXbDFqf5fyFwm"
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
