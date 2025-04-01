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
    "5xSL7fGrG1QLMLZgRXBnzVkCQ6aCnAT7ZXg46H6wjt7uvqqEH8K8fbMCqXzoaC8nP1oQpdaKDauqjFj9TZ46r5hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4aw9QdHtZSwjwimeFadcvLFzceSsXjSCFEnAKuVupihziRLDM7NCXBD5DJShaKoEHixSHgMajwg3KsmQn5Mryr",
  "key1": "3tLPwKamJk9czRzUVaGEdJFe1Snw3uVmRirvCNvh9uAg1Qv7B4qsDzfd5JsPTQeLuDiwzkbmPxeUxWah7R6oByHL",
  "key2": "4rLTCWzWExnEUJEWkw4yAVKGYVDkkYs2spBeBtGBZEFdu3DHYvZuFdLteyxXD5J4UovotmJYe6MaTtKv7SJNLxGp",
  "key3": "65F4KHGmAUJvhRqzFoiJCokMPZgvFiM5yeYKxm2BPM4dQrMMVnSLFCSoE34vRVar9XvgbAewRCSC54K2H3xjpXzd",
  "key4": "4sXR4bpM2oMGFRG8UYoHYyqTUYK2z2tPmBW8tLYm1ZkDg539Uq9y5s75tonNskDc7mafAZ2fKGighw72wpuP2srx",
  "key5": "2xaEUDp2TQYgPVrnvi8eZx3eX2Y2vcYgyKeBTLB1h72y7eNbbD495oc3zg8dBEwaqQSswaDqCu9X7aYaMQrfJhj3",
  "key6": "poZiegTptRFa8qFD1PLTaN1ebzFUA1e8rBaQkptK3wfbQTYF3Xqp4YN3ZKGrCtgtuTZi9CzQnBwaw4NohVqanUi",
  "key7": "49mm3QAA1zdjVRAKFWHMZghSoWtTwFj2Tr2vCoLk1ARNHYb4PP8Lr5B9Zzw4hAYh463yRdkh6bbDoW5j3JAbHHTW",
  "key8": "5CEZUg1EDLSK4DMg3eL2Sb7uA4yZE5zn9CqHSMUAwfwQsaVXHbZhEKYqZeMrK34MPRpuHAGUyVKfVQjwrKugzYbY",
  "key9": "2dygWfMQr1cG2ty6DwnD5RtEDVHcu7LuW3RakNdSN8BKFpzvQuGxa3PkabxjtSmRbQgjvc6WR1jJ4SNtWSBc84ei",
  "key10": "5V3WcANcE973tM6riKEp1URRB1KZForqZzpWUvbCzdr4MkW5mmC4FRp1FBCEnxYJGApaMsbSuWaevEc1ayfGRw3v",
  "key11": "r3e8ABucarBYU5y6p7CEHev8985FuPm3Eof3muvBVvmFyxXWN47w51M7sbn2qkU88zgu9Qxy9mqtdma95ohjjuv",
  "key12": "bfGQsX36Af6V3MxCM61QY4AxDEkV7hFRBBmHggWR9cbE42x3f765BAq69D6kBYZJm5dTTWux8QsjyQJ41t4V7o3",
  "key13": "F1shVP3PX6WAebMzKtP8HthqLTmde8RxTCHBxMNsLcvyy31zNMnD7q1SVWqon5DXZQH4x4bToEtCJbtBh7xH6Un",
  "key14": "25c9ByJxyDKELvidtBEUimh7k3JzUYRUsbW3ZvPpC5dTU5zrsRG1xfP1qCgS9bA3x4YtAiy38G4fy8EYT4gwuuAE",
  "key15": "2gg2LzX1AH2FgX743RcNF7zUukwoT3LYdoEqHCPiWz3mJrCK65taCYVeTYvSaNF2uhBdBiGDKpyAJrZBLZhxNrgP",
  "key16": "3hZG5Zk7XX1NNJyD7A9k35R9oQTy3Tn51L2EWRwNM6S2LLiYRz7ZQw6KeDjbQfQnTEb8xRg4C51TokaGFoFu8uS1",
  "key17": "Hzo4N27nvG8wpLAQzntRkwxrCKPVdPJSvBNYyhznqswLk5f7Vmx4s9mtuqY1ugWvdE14F4Lk1iWxuhV9Q1T8ZB7",
  "key18": "5uXwbPbK2Y3mNxQeLqfPvCQHWa4Ha1Yw6VoEjenAJW1ez5EmEXWbenF1PgosLbbfK44hs88rzRuPut1PqXHXDEFY",
  "key19": "2uhmk7M7ACenzKwJXXaUNXS8F8mWT7T86xrYXVPhmuP5Lui46qLwdx1NWPQFXTEQPkEd4j8WWhp9hShbd99nVcRr",
  "key20": "5fjdLnUDwvHquVh4VwKkjXX1MWojtbfQFoC9KmHhrVYEP3Y6tGzDPWEMkwHkgPs7dacMm6xyb6Wd8MvpgzSDyUFB",
  "key21": "ELKyXoEwxfMywLqTB9taC5CRycu9p3qEySuaG7VAqD5CDCdbAYwQJWbkJSH2ScQtyf1XyShLAjw8pebNkG1RfDF",
  "key22": "5zjn8x8Rp34uhRMrg9qPFq15wD7GAEw8WUTChMFaeVtWA2QzvYwQQC6xTYEWNsynera1y1wYkADoRkw7RKAbFg6R",
  "key23": "61hVWGCVa4RZJroWF1YS1LxfzQBhTAkfCTHswu6sxW3EXtKH5mhr9uFQ1qKyArm8uBcY7ZKxgx9Zx9JnVadDsbCt",
  "key24": "45E2dGvN8zh4Ndr6aLVPCseDLETv6xeTfQQgx5FSkKhU8QAdhoZpKZkSbbDgoKdX4HfvciXv8YKKhM8Azq2KHDok",
  "key25": "pwZFrSGbvXgxYJVzrwd8xoNX3WbJHj2j4TjLwaFgLCEbnUmzPfWAiocBEWkvufcsZjVdsngbpYfQdsHXZvKBRfn",
  "key26": "4zXmB4soHWtDWyGjk1WKuTfZGKaLFgYbzPRq1KgP2hqqP2ihgdesnbGswPgyzgqnmmgeHVCSwuesfYz8o7tB6gCR",
  "key27": "3yrKEninYUZkaefhNfkWJ57LokcjDFDeGgKYkm7cxVw3CTjLZGTG78saJ7RPv3BMS88z1aCRBvTU3w2hsTYjDNXs",
  "key28": "63hFodKaCyr7raMstsdS8K5Gk5rmneJZkB26AdCQJENMD3uhTpcYBVWRuBwjpSNHjZGBkhUN3DN9XbQEvJj7hYf6",
  "key29": "4D1KVP4bptGAMkSUzvqKrcPREdYw5fsMeJAGL4mncg5uZVxtYDfR6LZyj9aHbSBxQhTyvmHhWjQQXbUa9uZyJsvc",
  "key30": "5TQs6zMYusgzDhD5BnXFmKWv941JHSiuR9zSFwA8XuehM2kWPt3arKP5hnnrspWT5JWeG3RCEaydpTXZVvqBZFFX",
  "key31": "4C33HFZSghsFMoRiKhLE13nRNRfeVvLNxcRRnHCU3jh3Dn5qpwrcgN4Z2LH2PARWXiU13cXcGNJwi6hKH4gfiZoM",
  "key32": "5jZxCWR92EcxahJhFwcCJ4YcSZ3dcg8o6H21JQgoT9C9WSZ9zUpmEUJ24ZE86ba7pcEw1WNHVzYGwaAAHe2uqUJQ",
  "key33": "Rr21gViRKDQDS4ozrebcbqUhyASPPJKcpiT1iQdosp6ARVNj2nLMPfynwvs4MByYKUq8SCrVaoDnHRLqEARa5Dw",
  "key34": "5v9ehK7sWNrPNjy9eYCj5QC8bQsyjGfwaTAFhXuyxbhN4VYkjShxaUF81zFVwS2ZDDKB3TXZ52aVqsxJn1RgSPJX",
  "key35": "2EDHExoT6PKrE7LaVVdZiY3tDDHNQanZzhP58DM3csr6axNaaRHvzuffr5B6jepabX727TPJ8rTJaJVVGp9S3X6c",
  "key36": "4Kbf8fHib3KTVhwMDPXJgvbtuU4hdJ4s4fcs45ooPakFpx7jup2SUpUaP2qS831YHL6vyg9Do5Fqx6ig4AGnzrxY",
  "key37": "5NZvzDvabQ3674Ukgz4MNyzfEYhHvF2jn7gyx2StnroMUR14LBK3djnnouhyd82xMZYS1JPxbGgi1zEzEtM1TyCh",
  "key38": "2LXvCgux1ahtaxHYT2d29t9C9jLFdn7KL3h92DTcDih8XyPYSDB5vFHKrHjugHxsycndTgLkPV7tpmSJ9YafKEHG",
  "key39": "5RrSvcgQSd3pLKF1Dx97s9hamQmcwHQ89wAu3BpVhxdU5rYBfkuhsjPPrQMaAcZDEe9KX2k6ur2vhhUABaLz7tQy",
  "key40": "3gmQRLndS5otzk8URb7Pu5mQocqhqZGShw2m9TqpqpKqC8XEBr6jHjjsqMiB9u3jm1pqxQNjC7hzkwxXYxYcu3eT",
  "key41": "JeKadFCjdXCvVVMjw5wcAPkch5Txo5dpm7JLGhK43WWNLXQ6J3tuERup174k6nAbCJYVrpXabxBQcagLxgqkXgu",
  "key42": "3bgSgk3bFmaPJVwV45g4wJu3L2ejm5pkp3LvewMqt6GAzwuS7QyeBpXxWW4d9DgL94HqV3jJQaWDLwMuBnmwDpYE",
  "key43": "2E9PHne8VFCYZCD2cFdV3Yne7bz71DVt8uyAwLXKvrL5iUXQJyRrVQWWFQV547v4KmpqXtSLNDBMpfZETxwvwHzy",
  "key44": "4d6JLmzseaz9WuxKbx2ShMa963Eg4FvP379PvviVCMMSSRZ4F5pty5gW7CTd69PeqRPMqidhcVfvhyieS3cHcD17",
  "key45": "8WSVhVVSSKgyjiboZzAG4spht95z8TDshMjk7TyjcCkDzPkXAJ2SG46AXbfhQyR9dRoynJTMtYecy7Q8XohQvrs",
  "key46": "223XcsMjfmw7BfxBaWit9mfuVHFtScsHTqeUHHbHCPYvUjnA4cuM3tuQ7nqjRWgh8HKWoF6pqkbauwhRm2Erm7sZ",
  "key47": "3jz67J3h9vGMbFELHwB14uM1KtSv9KQqaaa4ua9Sh1gzpduo6RCBMHKhAWvsXVPEq7oPo6ttjZJ3GVwQfZe6CJCX"
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
