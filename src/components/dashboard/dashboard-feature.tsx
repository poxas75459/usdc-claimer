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
    "5kPoEHNs5d4hkyADv9z8L5bYS7WF4b5ooWTU3QsBw3FjN9TWq2DxdDXSWHpyV1u637qCb3ajK9J4SryQuDgBmWX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2fZCEuLSyv4qpoaeCycBRXLgwbuot5Ehp5W58CyzrS4hMskpfruaNUxE6J21rdXbYpsmhJUiYSnjE8NeqUt946",
  "key1": "3LiUhq3XgyGXGgB4HiiKpgBdutZDsbTdcnV75frJwj2h8YNNwidysEFE3gocVsYBm5tWU5eP3XD6rDPreNquwsEW",
  "key2": "258AgarkVdEg441Fh9pPCWMdEdzf8FokuKWJyLWnwBKsA8MRf72EkSyiS56eZgwpLd2dXhCLgMSX8LXef5FnCCCL",
  "key3": "5bSJY1nZTrejcgVGEoxJFbyoh9Hpzs49sUJXMVmxZ71smLkFuuArx88ipzTRokkwPAxrkRwjXL1FXGkyHw5Jpk5f",
  "key4": "2N1Q3GgoJyPYmsTCLqCgnBbqickUzyFUet6LVkA2WY6vUsatUYbKp1mMeZYaPtL6KcY4CFHcHYZi3Bq1VS3Y3FgW",
  "key5": "5AQzXC73Gj46pGNWcWHNBkYz1fZnrccmhzGrsK3gPJSAY1mEHTNxF3PuRkAQdxky9aZuemnkgZD5u45mKgT63Gyn",
  "key6": "3ZYT5oHUu3ajFxN6WUUtQHQC5VH9qxEB48MWGg7gUx51ue9x8LQF5hYKuyGzx4fkkgkv86sbMFyBUrfwWKCqYTjP",
  "key7": "4xjJ3sj5ETyex9AP5e5bYQzN9UngHDvxgWujHd624czmBEf4NuoytnQLhgNKqJS1yr24b7vDfsN1xfQTxochNKQx",
  "key8": "5pme24mS2KmLW7kptGP3jB6DW9WR9QN6wXeVEj5sbHkyPJR4S556DkAcW9SKSzdRXSB3HhuBhMxMySVmVDEcRr61",
  "key9": "4y6h63rs3L2RT2p4AzothNzLub3ww8wqCkewzCTQs2eNMKtFrd4hqqFSFfqMGn28EEP1PZbp8zETV25GFePYqYWp",
  "key10": "2rwW5K96qNqdjW7Xjse5NhneYccGtaNP1DcBTQBUkZawisshhyiHf8egUfmqJaZx1Xw6HM8MD1iBSnqBzicSYF4E",
  "key11": "goyKZGe5WBMQ98SBCK1abHogWo8PgcQC4V49PNRnkBovhNupsY4a6eRwTy9pXdcnGpc1T3vHg2BK5iw3wfanSD6",
  "key12": "4SYuYAKSQVYX7AzpRVWAPep25VeNkjJgmGfMA52UjvqKGQiFXoUT8YqwvPyz7k8bw3D923gzcnktt7dLVZLnGSTG",
  "key13": "2JwMUv9xXMjwrrhfhWG6MkMY6LLjzrZZFcu7rvGvU5bZnxkFFkBe4MZWfeC4ZEDhx9NCTXEkEapZnTQX6g1USnaN",
  "key14": "2HbreWSm2ZBH4CjYdYfW3D7t8mkePsNfRgD6A2oVTrtQwexsKtpNcNKmCPMTAvk8o8WNyk3oR9bgmcChq37WZ3rH",
  "key15": "2hiLL6842xZzu4a4ni9eRwcQTRtkLuXpuWMXPmqpJkBErdGM1VyiQqEBnRNhzjt6Z3EQVQsy7WC9c2LYGePAnhfU",
  "key16": "DNXM3M6oTaWmxZLvnPb3BD875s1TZGQLz3T8n3T7o5aR8J1XvM39z7WrZPxBKdo6NJtV3tNr6YWH78hxryLaCyQ",
  "key17": "k4uoFL1NqPvqjM35u1Kh7y5Zn28LVEMkLkJonCpdJtB53V8wtbE9Vdda5jgZfP1LwJK15nvik15d7h8NvtjP5Pa",
  "key18": "53ZhEeHxidMMJCFtnpKrA2ifbfZJnWn9nbNVmGYirCyhCXrfu7DDivEUprbcHNAzw9h4JTEe2aqWJxm6JuGN3Gv3",
  "key19": "41Nt834J6ZaUtDgNC6G4aTityuFRztn72A3X76m3QNqA5zs8aJTYoD9ejcjjukVy49a8wDcD3KQLuBEYBQB6riHD",
  "key20": "5dtpQDaVsurztvA1AyjkhpurFTLP87tu7PxAaTLaN2kHGhXoog4oV4wfiCRyxgk1kSJUAyNepyZGwAPuCtCwESVS",
  "key21": "4bW6p8NmFCmCfg9HeJkksceXfcrhArhpzXGeC3xeL1U7k3fBjkB5geeEPadz87X9ou8wV44LpwSeX9rctomhxdfh",
  "key22": "5uWmJFNC4aYh1qScMDzDfmaaciSUM1ksHRSHLHBc395xbbSVrC9GnWQWgUaqNtyi2VKCcvrQw6sa3i6o2ES5mSaT",
  "key23": "Fiuaf6vrcpXLxR2wWtEXakMq1FX3V6i4J3k8zQqnfE5fpyKf8TFofV1xdRFUBfovY1VcLZ3itZMpQ6rBdN6gtnC",
  "key24": "31x6V6HFvpi9n6SqVZTWZhekn485nLJNTtoumMeFXixNuwKN6JosfTT9C9EyZhN9bTXPjVr3UMPh4mGGXBvDdKbL",
  "key25": "4TmfCL9j5aqUqs3frYXvKJhMvuvAQ6H1EZziP2AqCtzW4Xj2RJGzHadBcFGjtMPwdUUkPczeyP7B5qXcewgg8Npk",
  "key26": "2DpU1bGuFJTHvJjoHZpUfEzuFbiB8Zvv6N4iVkwq2uDNdxuPHTWJ4829KDhuNZpbiSYkLVGvFKJR95X5NzPHxCHk",
  "key27": "4uMkUxEVMM43CkWqj1W3moz9aYHHsF9KPzFWSKoJucHx5nxvThn8eVBWTmm3dieoxzNZpfpT161uaKHeHRscfyUV",
  "key28": "4DApC4bFXndZd9E2FcZNcCz4rtWBfpuzSwLLdew4mLye36bFtfjyMTDhWojwxdkrMDZb398Pf1MVUUzTc1Kn4z5u",
  "key29": "5FfHumojW1fKvXxkyAHrPQx3RcK6WfK3QseAvZiiqasP6i1FqM7AH8J2z7SviZpUsobxLRwRYofHQphN8kHg4yEu",
  "key30": "4ajD9mTqwnHjuw53T7oNufAcAH6A38zsXnC45FAPLqy7aGj9zLeUk6MUFVyD4HnCWnSCAQPxFnCR7t4VdR7En9Hw",
  "key31": "NYz2J1nxPdNSZhqQAF7RGGtoz5ua4Z5W6bxibscbHFPQchk6Txct3Mv3cEXdiDu6uLxV2uBz85htraXDoFKL8H7",
  "key32": "3tjxdUitM6RN4PPcaMCeUPM7i9qtqgSwccv42tUMetpsK8y1izKwnNNTHuaq9cWV3KQ8WYuZ3A3kvy7iLoMUfRxi",
  "key33": "28wPbjJDTc75sMXnR4kZ13AwBJVU5WPCeYFfv9bzbKFD4DaFBBzFwWwzpMPnygbv7i8XKJgvQbVxcsABQEFwuc8K",
  "key34": "wKsoQAicKTJrmgg7qPeUfK9g1XPH3rjGTtkrCmqLACGpreiTzXTRFXiQryrAo5keo5skBm5Ryw3K8qtpV5ow9Lj",
  "key35": "2DbN5NirRvM2nUFNizEfVF1JgxFgw1FFuJ6ZtpLz72nMT5MgYuVD2kNhA4h5sTsoizkMhwHsMeA4JnDdUkjVx4A9",
  "key36": "Tya1E3cfReaeyV5NckhbVVFNjzK5ZaGHubyQbpWbBcYz6eDnmM9Q5Pn1VpwXxkAeSVzMHKHC2iC642ELstKrLoP",
  "key37": "7CD96o8pdeVfphdUnc5F8qdcrYsTjEkUpaeX1YjRA2Hf3JPUgRjrB5tUWHCKZ5EBX91TsrHAZiHncBuXY9ZZ9mK",
  "key38": "4nEgCUJQqH5JQkgYY94EgBtN7MxKnMNpsy3WcRv9H6VUQ5wh3UAubNPEzcE4j2Qn2BGvDcqSjCTAo3jjdiCXPTiQ",
  "key39": "5rXmpkHCv9axw99MvXWvXXTC83vtFq6TtMgDJfVwJuFB5a6gy3mmncsemAerLFnsNv11E5d9fsJzEborojRkfb1x",
  "key40": "4BB4j6TzDNUvxyxxW3S4tiipMXgr7H8NmdBJ6iXgVxczx8tNVCffJNFgYiAa3wxrUe326nuoLRNkVN9Gyfvn3Kbj",
  "key41": "5WHwbSoMbBNdEuCyQaiXyhibzHTjvimJqi7M6dsAsBmFw2862SmbLKwQA5qXNtkNFe4XTVjTmwQURvJ1tZDrhYBR",
  "key42": "5smmVZwbx3Y5vYFhFpYdw9PEbBvMEdaKkptobLoabfHPgLaX6DmvboRk7gkFwpb7LLgMV8Jc7Rdgawta5xHD6PA",
  "key43": "Hcomd52ufNrdZ2YYYaQ4ooFLp36BGca6LdWvXEN9zkn7iL6c9PB8ofeB5GYhkKWnr5RguPugZpnBbkFmTWmKB94",
  "key44": "3VZaznqUFJNZztE9XVoSAiTEXLTcopbgQ4Dzkz4npsEQCTnAYsxQV9SZzitjZTaxRd7bzeyFM2JPD3QJXm5qJ4Ly",
  "key45": "R9zWyQxYKTqd8uTsJ38G2JWi3swaVneiHbejxLqApnM3sxzvgAgBkVBHJdknhYqtb6AR1swyPw49Ks4ypdgetk3",
  "key46": "5z9RdoSjCe6HHSyHXX9ktWhgd5ivnXcFKMGDze7xtnvx69h2wfUPFkeyhNbyZwsaoxwgodBraHcuEGhJw15vAyeu"
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
