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
    "3qsHZaeUuKLEUjJmwDpzRtRMNeUBScGn4cY7EeumXAwrMzqzyZJ39hYzerz8hW4atK5Se3MfZnXP4T3g7zej6Qho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZkEJy2ji8vDG9guZxxB3SVyatU91EDHAef7DBVxGY96n8w9GgjZvWnDnVt31okHXBtse15HrJGEH9NmThJ4CZaZ",
  "key1": "38bUy78ETGmfN7h5WS67RVkNPcP6FwjSbGUyzVFPvUdxMYVrPtDS3CWZM4eoA4HjXi3MeH7ijStPMNvWzmoK7Xxo",
  "key2": "4HTwmrHTo18pHTigFKbJ3LW8AAAb9Y3XBw76Jb5AxTFkFsiYHMRiLdx761e4qx26395ck5VMjto8SJLDWwZB7t7Z",
  "key3": "3hnszZgoGHiuqy361ThnA8n6M5UwMepTp9xE9kzp5jy5NU23br2uJWKk52ZR5VdNcGHwkc2VCpmv6Ztp5qYPHbeQ",
  "key4": "3noZZGH1y6hWw3m6L4k9j4NaSiteQ4MMb28coyBvGyCJLhjPv8MjEKKn46vg6AhddDVMvCLMksvBNLvfWq4rzerA",
  "key5": "eWitrkTbe4RFEAQ75ya6tXhaouy3bf5ZcRpqCTQqjjDuVysH1vqVuWFPpRyNC86yTQo1Amqm6WGdY1ZPKVmsYm2",
  "key6": "59Cu9ViUzCHJnmZESXk5zxnxW6UjKLsBt5rtadPuvZnLg4izMi1V47wUba3UJ2eneZLTxof1r9NpUiYXwqKSne3G",
  "key7": "3UfmGaMgay3LjWTzL2t8RF7n8LAJd4aCT95jZrQSwgtczNfQpK546D393x5u9WKqtRNmsjqhSJVwr8NAeQHKkUdw",
  "key8": "3R6GMo98r2bDapBdEcxMZYuxeqWeD8wp9tBe4R8cgitzFnkcM1Hv5bbZrHNUarJREPMiz2rF4JS3WGouuSQHPag3",
  "key9": "2pu4qwuS2GGLdDzy8p5nhLMZsvHazHkqxMi6f8oPLqiMJVjRbXDo5xKYX5vQ9YT2mrgb3PKZ3XXCTbUFMst33D8",
  "key10": "5BdZdf2hR8UnnKetKcNzUtaXsdu51D5fDTuTLX71tw93Awdu82H1Ep4TBozWvv2jBFhBKX5nD2RNugTfNMWJtC8j",
  "key11": "62TZAcRvmbUtZViwUm4ZBK6iFYReG27RQMGjsiECt74WpyAZBDMaGeCbjWN6kvfYyJydcmAvEU2DpNqHeUMMnsiF",
  "key12": "4reLCaipvrgBV5BVnJUnvPkzRtu2ECkJja5sE61VEsiYhJ5mk2EXsBener8dNFZfGoQYPSiCN48qiNaZv2Hb3QTT",
  "key13": "2wuYQEM7ekj6U31KJ26gySJaFQascXmVMFoU65rFdypBMKumspCbLzzbqRMrk7ZDamJWam3ycEPuaRZcizHTz6yT",
  "key14": "a7veNgTC5aBVVszyEnY2aWa3jzaNirL4oc4yHy1rrSkaqvC1mkTxsLy11hoZznmcAGQsznf9Ffuraj9fi9Lr2b5",
  "key15": "64eTfdfHZntrpXaFn6GFQCkhtViLrXvBdkBkoASTRTCYzPa4vvTzFRZzMp3QkB1oLCkiy2dR3n53rcQumvHCETRx",
  "key16": "4FkEux1ycfiSAX5JDLwkntzNq8PBoEDCsVumB1kvmot6QC213wJuQG3nkDJUkzFZ7BxzGsRa1wb7VRauVmAMUrEz",
  "key17": "5KHe4H2g8ADkaCTL2rQvNakaHZg5JjGUnEc52rbMYuiph6rjYVdy4gPBjVkbiMxxELmD5gvCUtQZYXGHAbY8XCRu",
  "key18": "3w8jnDx7FrvCX92bhkzDqHb8P1WqEKvrTfALhRJYJRdEptbWRVq1v71FXERfX5wQj2RPvsSY6MTKggqoyyiUrdcb",
  "key19": "26737UkKZ9mjHtxuxgjdDtfyZLsyYr5BxyFQ6MkYXF66AN5KsUSjFyH6m5jCETXDFsNvnstywKpjCmQ2E7NXr2oa",
  "key20": "QwDYXT1BQXstoq7djpQPXMqLGj1c3Hkfd4qRaa3DnY2tS5bGUqPS6yudToDT4tfr5gthheVbozSUiorfjCc3Na2",
  "key21": "3exsxdJ9hE3bbvjrCgM7dHTVUN5vMm4NXq6CQVfRbLvr6Gz2QsrehjdA1uMQAZvjjeKgR3fmS8Ft2mRUjTVcxWYx",
  "key22": "3sfhif86mnYN1wuDBhdy1kDcBioyp1pwnKufgB5SqgwQwisAS9Z9GybnTQje7JyvvCv6kAyNAysecQKd3kUXMnBr",
  "key23": "3Z4p5ZnQRGQc768nfW6k4nfZvWM1cePMV9FBXjvcfSpUCUZ1g4bKHXQpxRyytparSWC8yqktsj785BG6adE5Gb19",
  "key24": "5NkEN6Lg5gFQRmzsLqFJv2QwczJDEXDMAXuGNU5NzoJ9EY6DKEhiNf4CoFRiAGHqLVMduZJLc4hJRtL5tWpeo24J",
  "key25": "3ZnauuRMLa8ZdRSbwb7VhCdC9oQ9wkAb2GbXUc6VKmbB9SJvJCnL4221DHgjuKx3DAmYQSz4XqdRraEpv9w3rhu2",
  "key26": "28FSy6mMnsxv3PZvYaZ89PVgfMzGrhLRsDMUDhUwQNCv2p5BLoTcgVcLjR8RDUgaayFwjoTSZ8V8YeLSdgtQ6Zyq",
  "key27": "5vYPDA7umuRD1w77a5ozKN9BSrQody2rvWVhdYBvWWkehAexAveRAH7nCwMTuzdB23HQSe7UGSb1gQVxAGHXaqg4",
  "key28": "4mAHSvfDfnWrZp8Rqg4vLszQLuDNfAtLeS3LXNaJjCnN1xwrbwshpe814eVZTgT43nATJpQXNVWs5gYxjcYhXVP9",
  "key29": "3K15pFAjBYKVyrTBUmApKzVD642faSt6KCzkvNsKF1DkiuyDKKJxsVwYtuNcuqBt7TDUu8FzXw2xGcZ1bZF5mbc9",
  "key30": "5HUVUdBNvvJbRzAfA9kxMenHetqRUdeUcHXJ3cqSs6UkWtHtBgA11A6yo9YmB66T3WMRyBe3GBujEAeNNJCL1MEo",
  "key31": "23xsDhGvQp5F2QjzjK1hN2Q53JEMNT7cytCQWYbxJc7eF4Db3gxozuRSisj8CTUFaE6uy5fkYRd7ZBLSUcTnj5Ja",
  "key32": "2Vx8dadc2tsc79dHMwWRaXuFCK5BWnzpCYk2wvmvHgau4kQnFAUekbyyyTiuVuNErbgAjE3xHN5s8PqLqLHjSadQ",
  "key33": "2g1n2UDHCFXkuNQqDjHfik4gRGBiJXp5jnTBmRfGTWXvYVAPZseqdKphgCYM7spWtBPp7ziU7uikK4hAoKXr3id9",
  "key34": "tYjUo3TGNJCHWAaTCmasEzUmiXUbgBnpLrwLodDrPeGFj4EU1Q5VrsnDeEudWTSdr3QBLJPUtqrq3Tfs1fHjf6g",
  "key35": "4qQZwSBpzUWXZrJ1SuYv3zJbEFM2CtviJy8uS42H4QG2u2ApCTshgsUFjoPFuQZy2UaGLRwPSY2QCQEndqMisUe4",
  "key36": "335D5qr2hgKCnDvF5KvpKoyXHbF34SJgTFcKzrhJpEYMU2R4jvyannTL2Cs5Kdz7hxCzPcJNjgTtBbd8YpNhXwWb"
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
