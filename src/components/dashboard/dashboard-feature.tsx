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
    "2F4oU9AvpRV3Hspdi5fX4RAJ7oJXy1aN8mac6chdRQt8RogLdrmpbD27eHjYX4j6PXaSvc8riBThNvCewX8CknhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHzjtrPpspV5Uc1B3vgZ9ykCexcewagKVkNbFC9eWUkE2kNpp6bH11e7JAYFLYXWgPrMZTdR2qzwWFpHKVHsW73",
  "key1": "3Wx7snUCpNxnfCjy8WgcdvRqLx8VnpN6bi6bh4V58QcQXeyyucdjXpaz1Y9SmQgbwnATmty56kZTh7HbxRFm6wKU",
  "key2": "2CRX1cAHJXjR28U8pWNb44LXq2he3oKT5J7JkDh7AgdLVqhvpweu2x6A7TFCBUmsvaW6KXznuSdnbbtrhdigikGF",
  "key3": "37YYNJukYabvp3SFibqDZ1vwhcLdabsPZJarUArTn3s8QxxQkiqNB5s7MLNKzCvnV1fc6D8yADgBkJDTg96P96w9",
  "key4": "3Mk2mhtWEBPtyh4nGuAY9VNjp5z3DsUWdpESPVjoFBYCpxMvSrHMscreSVZQ8ygB755y6F4FvBPBrrf16WssQR8a",
  "key5": "2csCf6Ppxcp7W6MXijTPGpQahT4BoU9kLwC5zcKqdyKGqE6L7UsWzohmsAWzTsCAr7de9SZWXWrSrQwxjVmYCysv",
  "key6": "3ad9pg8J6rgPe4MGooqJ31KqPkyZX7udLvT2pksTLURRUESTXw2YcygyPAfY5KEcPSkaP57hcDK44YbW6BsDnwQz",
  "key7": "35ZP3WAE4LV8ia9G3EBvYLhjEb74wgYMMPSHzFFTb8Bqy3A5VxqAHXo4gxYZtTDB3NXBhGCjmzE2p5rcNP3mpJT5",
  "key8": "5b7EZitR3x1WeehQqdTJFXcZefJ5ME9KBgC2qHqUCYr6jEquXvvzgaouxpcew8RniXf6K6vpFyfsSBMAYQyrsNMX",
  "key9": "3gJHm8qJUR1iRmqjrmQMK16B4kDTFy6r3EVzNJzMjSviHdMQBLacRjDCRusGMh1rkCjnaJYs52aPuLZdtokstt51",
  "key10": "2ETZbVhLFiVNmdJHySZzF79A5X4smdonSdwsqtzEPsom4LxUWhTGiFnN729pLjbLLM6Kg5Bj6w12jH5yuHe1siUv",
  "key11": "62L7NKvcxG8oXN2qdfwttxxW7eD6o8pNNHLvKv5Jih7QNTq6NgvyAkc4M1KUCzGDyU7Z8sF6inyU8aGNUPWFsvwJ",
  "key12": "4pmHow2kUqoaajJocMsfgeaWCtGXAKaxXVuqeoLL7u63YEmH7K3VGjL8jNTFWdgx8oLPD7Jxv1tRG824NjyJTqig",
  "key13": "5Rpchq7bsTGfqJmTAmgqpaKvSDymh63hnGSjBSm9KALnS9k4KLy3ixLhRbfWPJwRmHUSCGJ1Rp6uiETJDpFR5ist",
  "key14": "CrxmBu61DFJVxqGQvUk8dZ8SbdUAnnm7JrrHp1JHByjYySyvT1o6dpUhzPJULJ2E7Bhqko7QsQ85FbywiJbqWpH",
  "key15": "sMrgdchDsxR4LCp6M4bJDevdurAFPsHxfUfDwzToYLa9bDrTqn4Je8zP9FaiT7pHkHecaZdWdxskyRMaYJGo7gW",
  "key16": "5Y2fkFUjBszn9CjkCxt8T4UAQLX3vDWcsPntEx2FjwKQpJ2K3SKDLFnbqjGhG2964dZVNy9yyAiKEeA1pkcHDDRu",
  "key17": "4Y6Ncxgmmwg1cdDHVMXxBJMNa1MvJT2AWTbudC7piApyG6TdZtrUz4a5mAVQiBrxXv1GWTS7F8Nks3MgiQ88axqh",
  "key18": "5XBzXSaBwHLwDB2bUx5KK722JrY27jUTexG4BcnFcjJnpZNpqFHwWzC5jfBRdoZ5wxYw52UGi5uTmXcqV4sUK2f8",
  "key19": "4MgydnVHyYmq4fhU1WVTzJ5juytwNUQcYfUGt7FvLeDyE95YkKeCP3uuEcuAv1Wk1pGiRhWLsLVPirtGyWejadRR",
  "key20": "2m6YFAvh7r1idxD2Mgg4QAzLVLC6cR75s6iRwhPqLv6rp7FwJA4QHXH5SchohZJHjtVG1iRQfmc2qLrq9JvJ8n7C",
  "key21": "2s4M7Do9KzaAXnbJzm8qwdAEAxA35ThKZ5Y8LXW18cboSkJK2gxvucmRz15iG7G6KJ6GLQd6uVLm1P8riWAYLoxv",
  "key22": "61HG7ino15hpoBxfy6F7oS24udUVWvRRGcojjwMBjAk2eoH9YErMTKoq8TSMCUfMxFHeDDWtXtQzPvVCud68uA6g",
  "key23": "26AmY5CXFLfbsG2eSy4ANnUT5H1FaMJnoZ2pDbz9mpVNUL2JbbPQ5bini4NcaSF9N8RWCykCXC8aj7qebAVyecLm",
  "key24": "5H1aphPzJw68YjuqheFwZysCyTwPBnSzn6TSMXQAp85MhJp8ZLxsSW5B3cmRBbg4LnaFHaXhWRxyD9TrHrJJJVuT",
  "key25": "5zF7PysEjCrUiubaXTK2CPLGyRRb3163dqeCS6nGjKq4vpArmhTdCghtCDRLvsouYkbh18KpiCJ5Wn3UsyrabL1N",
  "key26": "62bYPUSWA6wjsUHEUPP9acpBzxVGnfJoaYUM8j5P3x5yrEer13DVAUEZEgeygJGKtpGDVm5GF1Ph6DkBSWyM2Ymj",
  "key27": "45dWFezAz7AJFajNfjC2f6F4emE1Jfi975TfHS4VuJwHb8b8jhhrYoTd89LcfrXLotMztnyXZmWtDj3qygeJR8hr",
  "key28": "4HEjYtbsJXuZDHSLdKCTgCpbnWoAqkJbmhVemeupmB73hGFjHq3u5EwPEWuUPLyi3UDb32zmHcSRTsDQ5Q7mqMgT",
  "key29": "2vNBLBrW8UvwEp1ViNDQveWbGG9Mu6t4mj81YLnAJWKqbyqHr8xcxy72fTXcwTuB6mr294JvqW2W2vYVH74AKZ65",
  "key30": "38QZp82i3LZbBC9f6HiyXagnDyyJfwfMVDdt6DUfMrksYjPCNbQyukqmEtDPp8JANbu8KNgMBstMMrAiuprAbvJF",
  "key31": "5hVXiTb3YhFyCJgdhRj2xMYio2wVN88brtnYTSNATnb9duSGxjUedJ5USxa5pyneJq42vsXonnaZahejEan2xKwx",
  "key32": "3aYMpJY9Kya9dmjqWdoePvnkwGs5GsbcQtk7Ep8FEBuDEDSzYCpAF6ZAuNfw5LHkKsRLHWxoZcFRuLfWAGLQ5ndF",
  "key33": "3Y6Bb2RgGNd7FqqiTwFNs3wcnT3gHgtP7zsXdA46L28Q4S3FoTjTvYjDwvpbJJNyiULmHTVDJ4b4h4LfJ9p7RUBs",
  "key34": "3ZGhhNahi1o1waSMLb4NdtV3eLNzpV3FE8tawTfg9ovpouVUEkzLLov5KNuXoF9Ye4QkZLwDJ3nnhp7KeuWt772U",
  "key35": "5XSr9mv5wwXrQ1qnf1KB4upcuGbmWRwfHVQfCd9snc6PEzkfVxz35kNDVsSRccJw2A23xegAM9K5ra8MbssE7CKy",
  "key36": "45eKDD3FiqCq4CpKuY1RS7QHXWcsVtai5BpQpRqgShwo4BL1xYVLtLe4QtpSvVhtv5UfcVJdG7xpWfwjcWN1t4Wz",
  "key37": "61CAixcY8TnQFkDgF5Rubuxa2iE32na8GsdfR7DicF2KTrzNXnNE6s4mTvkexKDe1zeTidDJHotLf2eWj96um1jR",
  "key38": "5Gmf16umcCaS4B5ozMrYfNhaekXFQXfk1ELLePf9MvGoYsWz4gzNhgyNuSjYg7zRvW3L97vCPUgwGsEpuLRzP7iR"
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
