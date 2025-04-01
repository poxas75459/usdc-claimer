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
    "L93V1cLDL5f35KUjKhPm81NPdR2BCuB5wbNTpZztZjfVcNoBes7vet4xT99UkMZLo8kysEbHHdKcLTHa9KuimM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orLiFPumUhyZinojPLjjyNM1fJpPR7qadAd3R19zuUrX9NkXKCr1pA5H75t5TmZGEnJtCwbsXCGcXrZ8LxQpyqP",
  "key1": "5XxozCHJx37CqYi1oYqvmrnwTdgXiBea5WLHqJapFqwZusq2tNNyJiBntFG9gGFiW8nLAHqT52xyVSFuVR2zvS87",
  "key2": "5Q5Wks5aPDuHtw1D52GWtUq9Dd1XFdvGaAYRdkwbsN38S8B34GaPJF3mBmm9TyQcPVUMiPge92sspD5qjVNZzrKU",
  "key3": "2L3i1U5kq7gcNH89Ynai9xarfhLWtvCFbUL8ac33GX9n1E3y6XWEUcHW8Bmj5PC8RzBT86kcF8umVmdiUURKVJ7b",
  "key4": "251XAjCseKpCYvEsG3uTNcmZd4K2jFAre1s7Agda4kboHBRpexze8K9KzBLV4ATb3PKdzagR8spiwMDbcadkwam7",
  "key5": "4BQ6Pe6obEn9ZV4ooeXHvTs8Z86xqobATBWcxjyBHhcTKxqm9XktbkU4DNY5H6op4BT1W2wc8ptWViD8rrxdQbdY",
  "key6": "2Rtc5ZLyxHYzfpdNRJLxBcihiKuUw2KqsMcX8nJAKFtmLJygGHjVD6QHPUgKhQZVGuFy7YuE92c1gZQgqX55XruN",
  "key7": "36GYthznE1EqAJMMogJGQxNL2m8AYNLeMMeT7ArTShrF3PVi6S7RW5wZNdcvxAZukzbajXkuaUXcVLhkqmzAtvxE",
  "key8": "28eedeCSL7aBS5pmn3f5vPzofSsdRw2ykViFzb6H1SZmcpNZ4bSvziy8pyYMBAH2kUH5vAkAyjjpccvhiyqZuxVj",
  "key9": "53RgY5d87e5EGymBSyyD1aiQJ5cQnaTF2iRtM9wf4ge49APAjVWEfNr2zuqC2HFVA2WQJUoAm4YnM3MoCCTKKRYu",
  "key10": "4oHjWqbEmVQC2GCe2C3eEjooFz5MVHdBzUkoReiPUcecUoDc19JMyUJjnzJXtGRZecaNFpoicFDkCrsS6pFmzaYP",
  "key11": "5kauq5zk3jSRBDrGU5jFBFqvveS73o2SWtyiefZ5Cw4JewSJergZop7xJYw2pj5zfPLjvHfYF8ZMo7hq82uYT7sW",
  "key12": "64Edf7FT3L4UYChay6ynvkLrs1eBZ1y4Mx4qxqrJKXghJ7V4cVAQX27Rr73Ah1tTwdM9AeQVYcrjkziKvmaXYp5",
  "key13": "QU2QdZLCFeNBXSbRunsEZDicS67QdYxJrNNhUBiGDhVrCfw9iRBdCQSTd6bNiXno5XAq7y7UUCzqCLHegGeEkvx",
  "key14": "3Ss6QpkMKevf3q62yAEehedwh5been9495a6w2b8zVJozTCTaRLNVq9DxJkmAfqWZQiWQZCfx9gx8bqnrwsi9fjL",
  "key15": "3bjiVVNVRRBLZmubTjNoUPBrpmEayTp7AasFGMHpUm2ckcRaRxcKfhAEXAYoCTe9m9kU69NR62bF2WdsvmarRVmm",
  "key16": "2PMGYnhm7gRBeV62cJvsb78NSzxAHqinFEG245mAfmataKuMkNsy6Et4xMPP1GHiAZgHGTYchnaZ8JrsZXfHKRZ9",
  "key17": "66BFQ8dakNaLQqKcvmsJtrT2Mizq2irEoFNHWE8knP6iUL4jntteiv2xey82yJCsCQv4WCriaqKKoB2Df8YcgZaG",
  "key18": "4VuGPaTRLLKkj1knheM9g5ompwSpwRseJymrTVYe4KWDAGbT1oMGA9k78mhMeXY1FsHnSGrj2j19PQtEPSVdSXt9",
  "key19": "3R2gKzDpHfmywBNFPZTDegbLoyn8xAcVh6J4q9f4vMuBL9jVC6JJzGw6aEqPFspiUfoCLfcfWFsXezbHVwNXnMpC",
  "key20": "2Mq7e9quVA1TkxZ94FS1ffzfRcxHdNZKmLderCDs5Av6sj5Ad5k534ATQ9LjxNqQgZH3dtGpzMdBgmDkW5UxrsBA",
  "key21": "4ZEY7iYpR7z4dgpWbJUGQZhozuZctpTgeCwq83nR4vHss1R2Cj6GHkrV3dyXHj7rBV3C85m4Gsp7UCWXJDz8PtSF",
  "key22": "2dMyyVhisfkJoo7XTMBmUywPSexDfNjA1bejVUNPo4FnMmtZsFw3putc1bJzq4XkGG2BuHzSPdzKqmJd9uwsgaSP",
  "key23": "hDiKQ7VtWgN2jJhMVLUNXqXypVcPCcGzzvs8iccdkzjenDxHkyRrE4AaqrF3HWEZfNnrqQkzzb4FhSEdmpLtj6q",
  "key24": "LVJUrcKndPRhoWuAD8Eo89DuYcM2QAyNdDh3NQ9DFqj85c8gaGGeBgMJv67heRzwt7vyTNuBX4QxMa3aBXSTC92",
  "key25": "to2XHsNzthaVSXaqEjT7Vu67XUyRMEit6oohE5amqEfx7nE2bWgUy4CsRr8ZQGcpLLrEq97239Zb4bLFhHrwm18",
  "key26": "zoXpg6yv8QQx5opMRwLpk2w1LWXGGcWraZS7doaCy9MJpqCVp6rEJf2gNMx7xxkAvtXLQp6TRzYNNTuCoxBnwme",
  "key27": "chY6NGAL35K1eqN3F4v5QQE8Wp1ATz3n3iDT5TLqBc47Em4HwUrAKyDuK536PKbM9G7KLFHU1tpRUXosEbquZQ2",
  "key28": "2iG7E3X8nj7M7zLiSniGc2zwtryA8s84osRnvFHYuopuNTYo88YJXRym23NEbKNwgtR2AEdMKuBXfM8xajMuWWi3",
  "key29": "4bne6MuPWyxBonhBcfKG8ZdaYNtwJjobinggaXKqmrtFVcjgxZutyfTwWDrNcyTUqZufD7zNEpBGFARxUTEbuyzg",
  "key30": "jQ7j8wR7JFLXTmAe1Hco77kr1upUFccc3Rvn1259VH6CcETfUGDr2DDHSdst4dWVtSTHRLZv8ttRZWn2ZmWxQYX",
  "key31": "5BLwe6VQ4gbQBVTzsfEaitRJWMC4ND74ttCEZKUfAxE6FCEv1wZCjSMEFYue9RPnvQPkXiKJuZX61A52WpZ858sq",
  "key32": "2bqZP6G3dM8v7m7Lsdf1wDbHXAgU2sUeLWrTuT1shxSEqh6iLvtbtppaJ5tm7SrmsinQ6tyPSbzLvDYrjsL9ShxC",
  "key33": "5XU6xuaXHR2dLMqdyv58Hr9ybfTZQ3tQrStbnsYbfGESRGQJFhZtub3pCj8kpwAw669kaWbQ5yP7pKd2h34R43Gf",
  "key34": "4Y8gMWk8h5SJhg7PEiqiQDhSPgMG4WfTDC6B2Sgz4uK2UD66WpqGcsUjWnwowrqqHNpuoPsAL5zHsq9bKZSbxuGF",
  "key35": "4NUMp6o9bsZtTjE1dop7PZwoU62HdAtbT7ptHGhj9zwBFPYJf5yM7qmfMm5xWVneWeUGSpV2c3uGvtR2G3QPi18i",
  "key36": "4mG77TuWB9DyZmazDjUpjMBQ5zWDUg4z52sctzRRgSGyUKWcyEuPvSjFV9dWKh3QHhCAdcEVBAEMdUZJPxS8uMXi",
  "key37": "5azQLwyptDrJepSvwXVMxkvNh5wYG94HVAnwvjUJJ6EV4B1HzbKvV57dj1t7W7wzm8uzMzHqNuHs4zd1w4MWbtXU",
  "key38": "pNjygKi7R2M5zH2z6qTLWmGTVVPca8ChBjCDTDGveE3Y4vvVep17yJ8QKLERE2tPLzxbJS5VRXWbZeNcMa1jXxz",
  "key39": "2ZgaqBZ6Y5MdMBvb4vFpcsnyJxpQ4z5PiY996QJF3jaXthQaRBg7c4d8CkAQu2ZJamxC6HMkzSvoydnVBnzfynem",
  "key40": "3zpUTSN4uwww6xvRqSZZMeXkTfgWaKLgkX1EqaUhmpuQtL14yGdtozQw5aqmHmE6VFsiWxpfKzocn1HhRLiP3yqT",
  "key41": "612GvawAFxKmdYkXkBxP5wmFw9d8BN13zVXfmwk3wvUW3CdR9cAkVYaqY37hsZTp5zQigETa5MyK6Zfv625Q9NdA",
  "key42": "2abJuEAPM6mx7ti9t7W92mbebr5n4a6Cs55bw5kgCxdXTFhBR1Y7R3AmrBjusSGWE7iQ5rgZqDjekEDj9sUUjGhd",
  "key43": "4wgo7AxfaXPsSEHpZ4sbS2v7Rc1SyeG2JvCUSRsRrESGvYdFsijfUFTn1psYuMzSWsH64z5Y7LXTNhd2xqi9rtrh",
  "key44": "28Yhnv61S5fSfzbjTmK7vwB6jjXMzFbBePU1dt2ykAT62DLTNem6xsanaFjqqETPGfrKBhCzKAt6tXyyW3r16s4g",
  "key45": "5a9pemG8whts23zfh3AtivGKvsA3Jf3PruZRoq5QB1GoC46tfjFQnRTVbicZg1RbXoL3AqmjMGXsCUVvVc5hXGm5",
  "key46": "3ijHk9XygMFPPTnQKXJegjYQZKtUF3fCP7xxZCiuGiogWj4VR8BxL4FrXHXRqwV3T4LUy4AfH2butAQ8Dgds6p4h",
  "key47": "3wmotJPd5JEVX2QyWocZ5pon47AmD8XqVz8uCxEqYoKa1UmBZguuc6e3jZuBxXXBGubkgtpr5eWfXyNiiA5GG2Rn"
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
