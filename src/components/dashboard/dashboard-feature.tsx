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
    "3ioYAvTpav2VnMeLJPHjmauuSQyu3QjMDqUmB9A2CYmkCtHUTAS78RruUpjvkuL7CYart85Abhy43qbQctHe6dAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdoSNigS4JGRmwPR6irLjKGgVgL15Pf7LL8Yn5EGjC3n5Rz5s4wbgkzHqYgBd4ie4xxU8SyvPzSEu2jZv1fUqaa",
  "key1": "23NegYEoYh6wuUAaXNDHzmRFr9LwQEjGkva15xBe43V8T8FtPLd3h6UA2nxsUboP7oNKfQxFaMr5JZ1GJUVmpDaW",
  "key2": "62psY1SfHYATuh5QG6no5CcoMcNE2XBwonLg5tCXYgU8DgyafaiL9gxqagnFqa3Ui2zMnsW2DoFrtWFtYZmHxsjD",
  "key3": "KKBXW3Yu2gJZJ3efeojPQXekdNrhUNXBnXFUmkaqp2c5xgks6ZCm5LFtRfEm53kRqSy9ByoxhQ1rYAQ7zgMdWSZ",
  "key4": "2qfTa3DyHRZKU6x6zDq6xARz4YT5EnArKcS6LFJfjyAi6Hd1N1EnubwMhFKUEEixdh1QcfAvXSeE7wddbR1btHZX",
  "key5": "uXTC1zAHWdSiJPGLs9NzTCZKKVGNzLTyU7P3F7PPVtds3jRQCLRNjJbu1BnLvuTx2eutMBjaTBYuhfWJx4Kf5iz",
  "key6": "dDJo3u4VdaRPnPW8TGAaSZM6tfPmHvcEPqCD2Hgujj9EwtFyaHxtPmvkjkgCCRM6Ld7eWX7PRoLzB3bf2yp4zx4",
  "key7": "5A2Re619WA5GFs4QP8vsYRjRtCwCjbhJdVCTk3nwRD1dov93mU8wYtKATa2gUTST2XKbKriPgKgeYemfdY1Y7E56",
  "key8": "2jMS54oCb7ntDTVcav6mrnCCNRdDZeNwhdArzgpRXxQiZQzPnYdig94kBMdhWP5GfX3nvAk1CoWS3PkSfQUSu3Di",
  "key9": "41m87SaTWBTP1PpexzEs6FBWRittCDtyMauHhBgE8QkGA9uvuKV2mhtZx43gGCpytisbuaxpxhemhPDkKkWPxT3J",
  "key10": "42rUuQAMBbiaAuyznSufjEho7cH92XkEV6HsWPvwP8NeZkbH8wPc48irtLmuGfAoxwEdAjvTz2vp6Jrzc7CiSygb",
  "key11": "2raV2FjEBrWmMyz5m3bhULvBQrQVFzsmxNkamNMWNJ32ZPWvdmFPFYKRf91jVFNpN6f7u7WYaoy73tCw1yheKKza",
  "key12": "obHH261Ev6QdBnHbQNtVQ2LozJdtDbWqCu9amzDEHkkqZhu6Qr91diNWAL4ZQsJgLVJvERaZ6jgScu2fqhgPF9W",
  "key13": "3GLXdEJpEMLkmHMSahHmUdoXmSz7qUM2Q8ZKn6i2XiTGtwsSXiA6ziihEWCLG3PgpR5zxN3vTnoNj8BjHfmAiXhK",
  "key14": "5DF349mvQhYxBb1PZYcmtvM1hEy3MHw8yKXh8mg6eJKYJt6vp8WJqT9a1RaschPfhadHz2obABriFwECBfekS6pY",
  "key15": "5oawqkLSbihkWYNVsXGHnTw6oasAuu88m4MKpuRd26Zd4DpXk8ZAqN5Axc2SPefcFM9mn5ixNoypiAQteYpusPNu",
  "key16": "4E1nrdFivB1B4AF9RjKJRFtjc6NexEtrZokxtfLCWCVpaWjKoRKXsoZmJNSWMYByv9SGhdF15cT6gftBGjhg6Uhy",
  "key17": "3EsDRfytY48ZpQbFGqN9HSp3HT1cvcbzefGGCzF5QNTatzvWUmMNDsX3fXeDb6vX76nfSN6FghU5jRBV3qPGZrGd",
  "key18": "469hGLmXkeQtnLg8BgGZM9ibSVHv1oPtA2ovea4TvGZBLXmMTX1oTTADrX2GsK45Go6uZWF345a2Xk1PnYC21dX3",
  "key19": "5fnH6qsUwoneMKqK2SHUGUS7tKGJWBVxTBcjNL1XktmTM71KKwk1nnNeNqZYNAeDjUyZbDRu1i6RNt64zz5F2Nom",
  "key20": "5CuBa6SADN6L1qs4ywDwU6PftPz4UNBBHghaZK1RiW69wUmtUoGygqxY8hPuU1fxxckTv7DzEVh4h5sK4HpeR9Sy",
  "key21": "3NMCeL2c4AKH4QthxEtNm2DpDbG78n3wMw5B5QwqzeKohUu3Sor3HavojbBpiffkaQkoe86iAsLwpsgCzoDgCcjC",
  "key22": "515bsdnBhTKcm2G2VHEjaQ7eQ7MbbEQWh4QhCHm7gDGTUDu4iYwKmdSg5SiFRySmi5kk3cFmVqTneHpg3wzCtXjP",
  "key23": "5T5VNC3wXmf2yqZz5UN7t6tY67MWw8LQKBRUnSioY41pkqr3eFNGEWBSKYdNd4ZcbFWcasmb3Zt9T2PfDPnSSxV6",
  "key24": "3GW3VyqNvshhgqzrLp5ZBGV25HQyLecNWLqAvPu7p9FLG4FT26pJsqumnmeNCXtHwdKhYyLRb5UQq7gjqa8w28qd",
  "key25": "4a6ViqBAaCR8jixNwDnz5iirkTzdHTchX9xyqttsA2RoBeBouGarnyRL1oqCD73C4SCgdMxQBk6r7kDzxyjAsxA3",
  "key26": "G7NihQNkAchbBTcoTfAbS6rzXC6huCfxdTvU922JpEusSQ2qefpjEVX2f3XMjADKR6mutqZU811E6ytG1nFPm9V",
  "key27": "2Smh6vBJaoBsz33Ss4JTwTBv16NP727FdsNi2aRwNfrk6uKJTFEwENtauHFhNdUgdj1mMeHYJxNQtMuAHRnNosSc",
  "key28": "NbHGzyhuf4HcNiYSURfWbduSeCF9RcDiugRWf5baVT76bbLxCkTewr1A4FciipwoGcgSRKzkpYXfvmVBMZUgG8F",
  "key29": "54nvJUvD8a8Ds62Xjmgk7xhbNsenqasgstpA5wqCpsEL7DeoXtBRMFYFDpnhpwEKpEmTsSaV3kvCpLcxCGppfXnt",
  "key30": "292MpQeytft97MdB7WzfBcoQkQus4uMdSPRxxvvDSvMRssKUW5BDLJJgAL5JhQc7LGGmsH3baqrwi2CzVNG7N6E6",
  "key31": "3bPJJJHVAxWvdwtV2VaNnVvwMoMmTJCNUh6HMF8de9GxLCtfuMJ46sFvi3MJusTehuppFuQi7yedKBvGyp1rYR15",
  "key32": "5g2cpj5hUmvg9UrnDL1NDgmrp9CSYxEqFGzwKjAbjJBNHWuBRxYjromcwyArFz6JzCSgNxZrKFzeUhCiboNhCCU1",
  "key33": "5QFgpwirMXH3kB4pVmh8oTgck8fpkADYTNid8JDFL6ZEJXPcECF3u68XoR1RvFxQWZ6pTvReysvYCiA1K1QZQdwB",
  "key34": "4JfXdEwwUAxhRSnSdomwzD8PJWNJ1fA1NZsfAaP6ZgqKntNiucXgsM2AELzHgwY8hR6cGMC85EQ2TmRsZ8f79RcR",
  "key35": "2kQ3LEtXLJBnDkLWMKzHmQ5gc13p2ekEb7skispAMhAxcbA2XnfnEhhgdu2BepyyoeyCkaEAnUKCQgQEXUDiDEmL",
  "key36": "2iPsqRUpRxnUR3gnPPjR4heCQYYsh7qsydDJRHr8aQmsnaTDJDYYNaHqm9neeHdSTxyU3S6e7XfomQ9k6q3jHZXv",
  "key37": "4og8cBuGPtkEQr1pvEvNkXVXenxe4A6i3NPVh96FqifHQJ7hF8XosAmswBQpNfwv4qKj2XXRTv3FCms3xbG1Zo1j",
  "key38": "5aiFXC5ZiAd9VBVqVSMqMTvEHveoKv6VX23qfijXcm4Wduw1E3QwHyKmtpGS3SmG4Nxc7tJNTQAN86QY32zjgMzw"
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
