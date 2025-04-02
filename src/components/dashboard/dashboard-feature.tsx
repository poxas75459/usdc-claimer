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
    "3BvAfC9hnMQajrTJCLZXPqAUyUPydSYxz75jr2jk3dWiNGZEu2EzvusqZuzEPgXDfUYRQ1TJ5CA3jUUsNnKv13m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDWxzcRczGK1bVyM3LjX4EgcjrNiJotFKdUc3HR1KYEsK1t4FJsK2ZVTRcm3fXpiy7sY73gLa4ZNfvgY28mkfL1",
  "key1": "3MJSYebzGwVMEE2R3GnX5Apv97FPwRERAowsEHDETdnWXEw7WHgNRhYmuGW6tK73vPMXiuNX9xBrpoacS9Dshoe3",
  "key2": "24PvKvfGtyek71NvZ4H6XDABNQDWRrBMKdUEcE67vpAFbk4XuPkvsEfQAcyHvNwoSBHMkGo81XL7qAH2r4UJeaX6",
  "key3": "4R2Z67Ldumb3TRkpoTzUYrkbdE9uU7D44C2gA8PWgUDQT96RbbodmHV26UCAtSszZMDcUAkVow2Pbf563TXnBrzV",
  "key4": "4UXFfArRJ4EbpDkovjGX7Cf7SJ21213GALM1bnFd6PYkkUgd5txfWNwRrrMZ1ERtYmDvUXexetBMufJ46yeTvZXu",
  "key5": "4axh1keZFbtyUj7QMW6P5t7ejL426VsDSxxHsPK2tXqWQLPrHK8wEdWRt3m1V7779CCvacKN6hervDSSAtcWrnci",
  "key6": "26Wy2dgqUYXEDG2qNmSxmhcabZv8oRuTjxHW2LVrtbFFYbaWQKEf9bkmAky2cP1b2mraqyVu1BMxnRRntai2YkbU",
  "key7": "3dJ2wwXTkESWqu8pPQ9u71bfgxDat6YYpe32WSVkbnrDQ1FNj9RW5sjLUy6G49vhSwhr7vpwbGQRpqS9s7CXeLYf",
  "key8": "2EWc3rg9zyDTVaan7gAeGHYPqhAm9h6ESu2B5FeYqZQgJHaTZQXAPX94nJaDhqEFnDjRb4seLm8dknurouJ5NhLB",
  "key9": "2c3U6qi6MosMRjK7PQ9QxkjXMPZtzUm6qQRfoee35PYdGxi7BVXCfLr4P2TSE4mLosrz4TpCHY4qH9jnZ4BF7LJ8",
  "key10": "4ZrVFnvpEfXnrTk4JqyCzsXHsG5VRVkn2cnUsQxWGu2PrfMg6CdmfBFXxkxWe6HeSQLcBCHZo2rYHTUNRbYHa44v",
  "key11": "2WzbDajyRCJwDs37VAScsqNPTqnoS8SPNgB4M2AsTktkbqh15PRx8WdKKctgKmRwTja9mLZMdVpi8TXyRjX5amAc",
  "key12": "5wPQ9hXwesjpzVRPqgqjyBTRWJnvttLCuaQC41X2uAfsFpc244qYjRmUp8VXX2GrSS244d28Tsv4sWtaWmej8xAc",
  "key13": "4LUuY7x96HPHHQ1ppf5LutyhTtb3fC5SpSvgUgDYE8yqi6XSY6zYxcLVCSWyfsA4LvUqLWEzuDkPwCDx611J5sw1",
  "key14": "2fag7BLG82CNDENTMrDfLCnv1WrFXEAESrGDft1Qear6R6dawfXvtjSsZxNupbwAUDYWRJW2R7LLs4AVyPGWH69g",
  "key15": "46nxMjkZq3N1DzLhFbMmAUfgrATyadsPYvC3n5kznZBLf8ogMJnReMJcL15PJV1tB7UV3d9k8EwFQUSaELzayBGu",
  "key16": "2UdHEdEnGUrbH43qbe2rnxZV8kYadFPd1qYbsAbwsyfsw9NK6ZGZyNdZYCMDSuFTNQ67ZZvnXMAeYQkPvRz56vdF",
  "key17": "YSs1ABPWEU8KthFB2sHAsFTpHbRYchyB8CDeUomQix6A7TXmoYY2B3qKRk5DoWuT4T77wqEeLbZXhigKoW4hSUx",
  "key18": "61nEiejtD3XXikTbw6NovHaFyxwUXyxB4tj452x89DPJxPSdUKRZWUmgEaJ8nqUgq883DwaECTpkp6KVykTLs64o",
  "key19": "28EtgT6VvaP9iiHj57dvHW9seHsWBAftVqXWeqcke7Pvc3fTEzExSWRwBhA1CQbdqyQkNjJ2m7RrXA994D6bnHoE",
  "key20": "5oyUUGsHoff1Ej6GL63dgyj2gmxDdVL2xNvgukMGtPV28egx9pXFeLSg2xutxUanjKJxfBfkfUyio4FDMTTf5SMx",
  "key21": "3AMfqnibCQptqoLWaYYMRzDjekqcTEfRqh1N5yo9pFYFRCmpXm28fnss22cqhUmhPxwQTQCZgjKvRFh6qts8smWo",
  "key22": "5UuM2M3Wq95cg79tUUuCnaRFf9CwvFmq5pPqrmDWyK6efQ2Z2QmM9awBxms8oDbNWwoZzeZ6kYMrHRKhLofrdsax",
  "key23": "3pYqMNLYWRxEHVytDEe1cpYtGfWnoVXxFcVBfDamTgafUfHzaU7NNtwmJ63pcEjocib6uj9tYvAtufsiAfQnjB4c",
  "key24": "3z9ToGsifYCfuKH7Fu3HLA3Yk95u512z5ePXARB2vfCrKdDxg9QS19bA6HBwxhoQz6rENRYqS6SwMXiadkHHvzPi",
  "key25": "2jgPercRJUFHtZXKytbZwvABnTyjAhu4JAnPbncxQ6GUhUyuFCrZyxJGu6nmSDvdkZ8Z1hziBSs9Upb7hFbzq5gw",
  "key26": "5KFQmzXJd2AUQjJE2tpyiAMz1vbXzushfJstZJj85eh51DEyMkQEZMjHPMBEAWL1wRMn5H5uFgi3rYEypD8pXxj6",
  "key27": "3NYEkA6CgMhWSNfke8o1FgXqhDGPXmt59ME9WKQBkFr6JW5VNZAc9dxD8sBY2jsNhzkfraVEmwi1cNFm35KLd7SZ",
  "key28": "2Wf3LF9QvaKxRwJgTnAYaCYYJiT1WSDfP9Wppvm8xWYJEfQBS6czozu2BHrg3kUa76EV2E9mtzkwdUDwTDE7QjNE",
  "key29": "2YL9mumRj27hdzQPzh4GtvKuC2kyLNEUXx654dCWT93Cr8RTZX6ihGYse12mjtvdSmdWSuE1zRBvANHvwQeJMLvp",
  "key30": "4UDYf5wLGGAm8V3RzHibjSdsKzn1QqmfZDBaWaVN94AWHLFnYW9xQLQDDR8T2sQGvT9BEe4dBe5CVRjvm115sFP4",
  "key31": "3NSeWjuTAMKHaJsWsCyr6zhYXwofwLTWFiioyvCfegW9FTk2LzPhH4kcp31XoLgh66s7Aj5wLw11PqKjfmuuDmiG",
  "key32": "25PmY1PTWyZxyvbJYKrpj6iaS5hrtttpDmawmta2Te2Nq9BoJ32iSNFL7Eqa8fFqF8E3XszA3Qn2yPJgTcv2pUH2",
  "key33": "24TgfByQkJAvjJsD12DXrj6ZPvJgMUKpvRR6hgvG7efArR2jTeiUKQfPM8ZdPFyR1eJqipRvmHTwpMqCZ6Ytv53f",
  "key34": "2zXG1hARfAahFdARDjtATLFrkSHbSNKMTR4izquX6yUiabr9XGFqwspSgZ2ysPt6zA4MwPn2H9vub6bqjLgXorNw",
  "key35": "rrNa5qcFwViPXvg3UcSfDoJMe38EPftvwJ5sWvaRuDU9FEGETf2498S3BtEnydUcMhjmvAJnUD62uMNXTpFriGx",
  "key36": "5KAvnbmRH4fnb37NCJVDx62wo16NNaSsqAAeUcbRy7awnBvi6dLVJe9mTE8M7FeABV5o8oQMobtynNZMF8Ksj4Vo"
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
