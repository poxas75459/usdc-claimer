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
    "4cRNHscWXsyJEZTMsUBmeY7nEE45ppxP4BsB7Tcqw8Q7wMznL941wmEq4VmFMgdzL5zSBrLuxChPKHFm1nkG7cDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TY2bsFrwsphRfaNDpHDcu1wzM8TyhedjnSdj9LGU5kZ1Wq2F4NrwLwP2L5Xd6YtPCfAds2J5fQTZo5s2ypQMBSq",
  "key1": "3Zehoj5ypeUWqYGmEPqc9LoRRXGmYiS81puxrVbreQVL4fzhaQYtWFCT22vKdZuDbRCgjWwSnVsoyLN9ERqGoX6Q",
  "key2": "5zEsQnyMikGiADSJ3GeXfUppV2XMGePvnbPCGz4m46icJPF4B437hH6dVav6Z7eMCuBoTxjxrTFqohB4iLgVANkR",
  "key3": "673JT4rb1HRnYjDCkNcS3KxtUtxK84o2jtAGiqxrnKZWQDLQ73iYpqRDrFaXgSfwny3n6SewkXSy2HV13UXZqkwT",
  "key4": "4kfchBwB7fA94eHmYCZZ7Vg1WUTFH1wiX5y3EVTyX1rS9NPxZUjmWntC2bzZU19gRkYkofckmpmUGUbSGufYYLKy",
  "key5": "5dWPoyo9SgRuZ6dNGMfyQhKLHEBJuQEWqqtmtLxpzdFK7Q2Yk5fiEuTb1xWcF2djLHKCfcHWNQyt9dwqqQeg7d2A",
  "key6": "YnsCaaHWfhDzdqgcbo4fV1qtkY5DpfQYQpe9Bm1ksseYwVwGhBv5kvCL953Yj95Ks6UJwN63J6nfEmaoU6NPoqB",
  "key7": "4r8hTQFKFcYzNWcPJEojP8c8Bp3uXw5mpALY3fraDzPBk4SSjKxC1Ej9o8jobY7KgvBnFkrN9Cshwf5Qcuide72T",
  "key8": "5VUZan83CT2ze85szFAPYsNtFMJxrnJDCxam7omEJLFeh2tnwNd4xgutRrqJc4p7iY3Zo1aEzCpdZwUgoK8CxnCB",
  "key9": "4WqT7CxwqZFzU7A1zV6sh3S2gRXJb1qDiVK3bxLanhMxBYpqkPD6wZbQHqKwUTuqfb7iDJ1YQWcPRSuVWtSReME4",
  "key10": "5AbnZNmhS9fi2PYYL38mKvakJJW1FQHhWviSUouZPQ6ZvQPNEnM12Gbptu6LQTAZyULoxWDkmj2QQyH4yKFk3qcy",
  "key11": "5cpxVxKamNPbdFQwyzPjqPtPMFdWQgAtMf9yoXFMMWcxDDscozQhkL2oDW7oVBXswyxFkYFEVYLEMdpTda57huro",
  "key12": "x9C8ztFLoHnoSAK8dkbjB1DNTgUFKjr4xGEoUCiWvUgw5xMw7R5dmL9zw7rxyPycJP9d1WJBEr6F4evhJQ8egpc",
  "key13": "4CrxzkZqLZnJh1VieGcHstNV5WKQDUfQ6StDWBjymk9gSJEGUYppgUZQYhKZqSRp21TqN8FewT5ioBjbaKT866Z4",
  "key14": "5rcJHCEMGdhXrEPFkJU7xoYcNQfsD2nET2vbiBBM2m2ZMVvpNUSfPknvcPvwkTsZEM2oNbjeJfSFxygQ2K8j5qPZ",
  "key15": "4rREpC74mExXW48AeLdcaiWNnP8UkDQ6YKp5MbbzhKgB3VSN4iMSEKjKSSJE3imXxbp582EiDeu2gqjn5EZPWNh1",
  "key16": "5xVA8z2cwSVkfSKpyPTeUYM7pAdb2yCM9kDL924iiA1wscbiyS6FVqbwME5p9Jm9o8UGoKSXYfVmSWHgBxWbjzQV",
  "key17": "RVaL2FeJ2R2JTQX2dPBWGpfsw2f1KVqfBhNzHifAkpkXWT6YbfZeXRnRiNAvRuZX6ihm4K91WrmmdPuzhcJ8rye",
  "key18": "2MJkvQL6XE9xdWNZVEoUbBLQCgt2x3v359u3bgUrQ65QEsw7WvdjmUjUtAyLwg1w4XL3yiyZstP2mf9X1UjfqDbP",
  "key19": "4quXTnjncbQw9QVoGXDdisGLhxeGx4TmR9ot3oobyiCjAL3VZqVGZgGdtu3pM7EvymhcvJp4RMQroYyAsKH44G4D",
  "key20": "rUUgjyaHQooL1zBeCzehTXFRNFcn2qGsutNfbfJkm5nP94Fwd9UqtxC1qatzBA3h3tpDLXv6kFjWuZgzJvxgK1a",
  "key21": "4Debf7K4Tv4cW2j2sGjNHWsnPVVSipLte5YgdCYd2Zgq81u2MvUMYgaTmwCD3qRYy6ExKGiZRvfTdC3CCbLtH4zE",
  "key22": "2KzHdop6oGkAFN5MSYkF5tdtzxuyQw1Nvk2JAc4CnL9Fbspmnj2raRr7BnLeYTC9HbY8TQ8UyqubVaM6MyZy7rAE",
  "key23": "543hsCkusevdB3h9YqsTp5TRh6JDHLFN6ybmCaLBk4CtUVDURetDXcY7jEL5w8Gpe6nQmwYVeZGtWNW8FGKNnjTm",
  "key24": "4tnc8HDreVRFvbfVExBVXcUfhm8coxXtWFkUGaccnnNxSPcoBYfz4U1b4mmxLhWQB7GQo9wucbjN81nwRGH5s31y",
  "key25": "w1SbmbrxcSTENXFKe6Q7BiGSutQF91gpRmCLCgptna82YJADhHSU6xjRnbSRwYS4XXhttkFv1niknbrX5tf8yzM",
  "key26": "4nYVsf2L7cJurRiKMAL8DfY3hG6sH3iAkwuiRW4YSKsVAhHUzQpxqHLNamLTpR3EKqwgX5PeXG5b8ibodtDcXmDU",
  "key27": "5dU1KTFBPKLkT4QHvJ8K2GVEnFc4bEiLoiTSn5qVzWxwJNtyReExefE3QwUSwyMZkJYyKGV2A8fcSWZ2Ex3R62Py",
  "key28": "2nXhQs7VYwuCQeQn1vNLJvaPkP3N3jPz6Zv5oh64oWSpaRk4zLc72bPAPbGUmaXRYZg9BQZerqRNDTNnq7FUQUAt",
  "key29": "4tKogHDrjjYLGk8XELkqH7sErJ9ymBiCi9urtowkDkTFzqsEq8Jfv8tbb2btyHuDdw1Zi97LNYfAWnq5Ke2x4FM6",
  "key30": "3MBmmJbR4W1xhetJa3ycuoQgE8bFxsq5rgYjehCnaT1CGN1d7GBewvyUoTytGRQWCbX8cqFXRdXpZxKwa7sYKdxb",
  "key31": "3yKW69jYv7E1QQ54amBFuLFgW67mPgS8tssBzK7L3bwKCzDQtffcBrBSG8tkQqf9J4MCzknLLahbQg61aL5hqUxN",
  "key32": "XCFdqag46NA2iWUCeq6rAbYXxELRTh76JhXo9zvr6uUrUK96rhpFNe8yYGE8XipmsGiZVNkX3LqtnQ26TzjVzHn",
  "key33": "58DHH73DkAhe3CyoLXcbEk8RNW49SjSgRYmXwUU5HSSgYBwSyKoYqRfsRVfFhhWymugZ4sL3cptJUAsuLj19JE4P",
  "key34": "38jr47hwXr3iVPxaxQwASAqZtEjvHSpC4BzxRqyhaNC524mpsv6jEXJcgb7b7WtPFNzQJZBEvsxSb1NfoGAGatKb",
  "key35": "26VtVNhzbxHoEhwiZdwVeEkufiE3HoLDJ1hcgsMkNYTWxBhYGYfHUH4oZoHzkQV6CP4ww5kKVZMZkb2ggw5x7Qb2",
  "key36": "b7NDiXupKjiDTCece5ikb6PRmZFKkVuHraFgofsHHRyKCo36gdGAxumB7xtbMD9LkMwK6Hxgc7PS2LRtdF53V1f",
  "key37": "2CYUqTb3ttRLT9ZrYQ6xeyUuNhFY8RqvB25wKGJ4qmxovxeExqCKbhr3MxeWJVw554EtfkMurgRL8VVjmf81YADF",
  "key38": "4B8FY2KiLbDLsP8MWTj4Jp7DCYy9R9CiGXBrU24LxBDBsuPqBoUohvPVu9LDMxUXpB2pyEJ1RqZjPgWUioLkLDmK",
  "key39": "2ENS3JTAfz7xY7p12tjyfzvsTNkFRGdMTMmY9buEk9nPxrQjDte2yoRex5ZcqiF1xFGio6hCMm35Us4RBh1BwRxv",
  "key40": "3ELeCb56KV5Q13wGKffvk6XmLk42tk3aUyz7RH4TKBxuXv8vgz2hRdLhX1nJ5RHdLpjPhToJprdFLPjGfFSuQcrL",
  "key41": "wMHAJLM2iunAWrqsr1w154a9bpmEHDVFqBQT24WNPzEsoxK3Sy9TWaFPScZhADHQfoz427qe8A3iBHuykKca1Sp",
  "key42": "VKYdym9rKM9veVG324SkwG9MSPiexvThcTaQfmSLNWC6PwirBGYEVr9Qea6BUeuqrsUes7kLGf3br6LsaN4tvKa",
  "key43": "5VCAtaLfo9THmeTjQLyw4ZTR4TJ6i8s6jkeirkT2Td9pt2Euc7CT9Nz5LDpYgVFtmRKcL6aHpU4QKHwY3uDiKZv5",
  "key44": "3ZXFwwJatGTMQvwkwBx3anRo2cu5ENigxLzh66nUxXy7BBQ2jpNwxcoqGs1Bb7Pfw452QPZzfeh2WGEiykwupbHe",
  "key45": "3RMcRWyswC5uVKqpV7KYCFYafoewuQKxLYEjTLBDu34pteA8Lv17EX6GpHoGB1hM9jwiyW9FzBu4uSDtD1Bbs1Fe"
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
