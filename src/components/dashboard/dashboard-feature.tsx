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
    "4A8hf7HD9xcAYd1Lbw2yikbKNJ4Xgtwtd4PodbfBQZBMtnWp2hbgqhcZnDp7up8Bhh5gWapHXBUT7vBQpxVARfyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNuwStEmghenjyve4YvvtkjHqsijYxfKY6AQBmUGeomJzLQDz1LTwpJCDjfZe6ignpMX36VKEnuXujmWxapocpo",
  "key1": "5rP8HyYRWQxdWrW5tXNwx4uQ9uPYtKhqdukgmKH874gAvXCgs366wkNyTEGdQ7XiPttxqfxh1t6ZzxRHmKCTnb59",
  "key2": "5srhy9jBbmSpCmZSiFRJqLepV88mqBdHGEsnwcFEMvoyXjcCymHCBrj6cDRg8nEXZrgBXhvwh4y6Hru9QFKW8kTV",
  "key3": "3ECFUBPsFPaHP586QpofxWDXkZdNEcGmj6vSq7GqteJgMCdRAdKqJBc4YU92uimrEopn5UVWnoxH8oFzzpe4RQMG",
  "key4": "cf45twuzLHahxworjs2UKYuQCfqC2KtYXsBhRpWbmFUhNaegD3iwuo2NPSV72a9zq9asBU2AAKG3kLEpjP41kQX",
  "key5": "2UiAYu5QnJxDf9QZUhzDxrEcjdNhPhRThJV7epyRHcgw9HqRrRtaby8Pec59zXxVaKtfy2QZNqQYUTG4c8Jbgs6E",
  "key6": "5ejro6ZdKw8D8dGTKYqUVd53BFQ1hxeVjvVW1rSMEYzP1EYgDwmN679pmzuutuo9AQqcVNuRRSt81QYp7KmVijPY",
  "key7": "333e9YdZoy8nwBSNGDU2Epm4zq3hLbRjkYxAKjRF4YqeZYmj3EtbpT7bVRJBnod63WRcoTrP9hmQwsV7g2KdPHaC",
  "key8": "4BSbPq5AjyFEpTRXHa43BZdooLJZMzL9dydUwvNSvqYJQs7G811PTV7tAr3Kvx3kfeepZYepzshooX8VqpzrDPXd",
  "key9": "52JtQuqrc8SN2Qr48SS1w5xVgYk7UuvKrZeCDbLBG9TXyuvwSE3kBt7KPHyRfeYUJqhGbcs2SFF4xsG23qPpUsUL",
  "key10": "359aPCmPqQNRxZ82f3QnvKfDUUoW58kUpFLD51x2Qr9paTz3ZxWZF1tM44YkjKEcgZz6dyP5xkJcYtfuFRvtfugJ",
  "key11": "2kJzTizfFL5HvYBa1UbHs7xgTjic97YLDe1fyXmKFiAEYeEoRpqtFsEpqVTSZ8GC6cgaVSDHT7X9umRLpd4LSkrJ",
  "key12": "2Gedt9phRbwCrsZsqKoDrLcEq3VBiHfnQWyE2yWhL1kcK6Cm2RJ4umJMyApto83c3wBuop2zAWiQXJKrBHwFNxoX",
  "key13": "3jPapSZiukrWvTCq8HHYZvkcYtr55M4rm7cNw7S7TsH9TxwDbDvS3AiKKVDotayovAW1FdYXxFSXGnyVh25D5nZo",
  "key14": "Hx2bgasc1DbdTnctVz9PN3jpxgPamcPdQdQpx9KXvjAmSgwHyY3dh9KeHaBS1oG4H9XxHL9Wj2E1MFvqG9wRRCa",
  "key15": "5DkRzzkyiv2VmfQDYxPvRyKu1s8samjj1HJsauzkds8c1mfeguhbcvgmfSssYWgYWzX9ofBUpoParnXkTAnEEkxn",
  "key16": "4pzKv2iQr7gVCbDkFJDcWacpnpgNL1SzYaiKzV1ghpTsEyfb1CbpSFkxq231Qc8bmnJD2jefpqqUqfiSe3jNKsKZ",
  "key17": "B1vDEtjqVcXrw8EXwVk4yniXWU9Zruyc78WAr33q8qyiY5ACnXSi2gbcr7SHB8rSyxKxGFkQLyLiTm2KsZ3kn34",
  "key18": "5S1LFbGebfQ9rFRRRFbDSbukKAn5DCXshDdXAaq5QaY4CmRqfU6LsvZYBJekBcqF9zNLsc6Az6t92u7SjjXgMR9L",
  "key19": "59EQ8pABStpSAyJzgEj91nqd72tiqfdUQbRuVHMme7Tztj327s6N8X5JDVYtud5UuxfVSyqyyYUfwRKmvNktkeCJ",
  "key20": "4QAqbXC716wZiLk4sz3r7UbtQSmoJPA6gtkWHoripWnmHfCvUEdnnPXJnTTmD21cDmYsckz2gMX3aAoFguu5deeW",
  "key21": "36Pf8R8AeMjwCW8ZHoaqFNSQmjsavm1c7APkXd4BaWJT1UTqDDpHXYMxr9HiTigDNAsguqvHtN7KZ2hJx21dpJz3",
  "key22": "37iid4WHKoBNdrVHG6PUowoxYSu63F8fMruiDmxHwW8CwH7Jsbfv8phR8S5ho8g95uqqBZzqnRBF4QFKA9dUCqUh",
  "key23": "2wTuNJjSP3nCdmMeXMi3USfaEGbamPZvdGhwNhHVcfho5uMjWw4yKNNvL2csXYfnU1UFGMeDz7uMkig6jiQPDe1a",
  "key24": "pph6ZMvMKGKhcZiF8A6MtDA1n5N2AC2vykL83F7ohHKRJVPcyz8itiWfqHMXeXFqcn2JsZdf3RtqPR84wUZzWyo",
  "key25": "3wU9biqcRezy9tqETNRntNKDaDRYb7E8vjZ96k7mKDXsMuTWSixWPRQczqAoLKe3TTYytvfBKphFVCipW6pYBTU3",
  "key26": "4zreqqjt776TGLgYj8VtoZGo7d9RodQeJ2TF7gsYsLExTGbBcPZSrLVQ44Bp2T4diaMAoNKzuM9UgcpWwnYDP3WT",
  "key27": "5hGML89KndqxoZudV84jGUbFfgiXh32fVBTT7wT6oJnf7Eud5wFVvGkx18V3Et9mu1fXrBonQXw2iPhM6N1Ui9da",
  "key28": "cQcpw8ojZ3oPxJvbH2WJYeuKFpSK41e3mPJWBMKwrfi9WFAYAaBVMjopB6ZTrdQsDWb3GiK4x4yLLeY9SeXCkUC",
  "key29": "k6Txqya2mhTJfiQHMUgJLQDFeo2n1zY8fLF2ehvQSCHsYkaRXwSvp96TdhBnehpr2EmEyAppfQMkzTaCriXAs6c",
  "key30": "31FwX3TSmYWyLF44J7zi4gV6e23Tt7NKPgjsTB8ZvccP5Gfb7n7Mas9GQHkyy7M4mcPWbCisgyMX5MyvRLvtEBt4",
  "key31": "2AqB6LmmFFKcCwqr9y1WeLg2hnxPCw6H5xBFAg1CivHoi4NDbJtM19Y8sDMmUi77dtt2xqYa4C4uZTchXvNNMJzp",
  "key32": "38n8YRSB3D2uqAYh9jwM4RfrPZjyaRmkaDZ1AcPeLgDjX6fdW2NQEH2aPT9DxsLMJf49FMYem4khQKXQ4rMSUQec",
  "key33": "2z6fnJaXJygXZtekJcxPdrDYLCGSMS2fd9GnLEf3ebthQHp3E7RBVCk1vkcqqA1UiAhmvofr6DSPUJQTSNXAbuQf",
  "key34": "27NMefEawHgk1ZBa1b3HBS5SvqnpZdHqwxbLCakBMkioseuAD1cc1zV1GCpakjBVEa53EKN7Uvh2sdqUNbA5cJYW",
  "key35": "4UrZ53Uq94vmK85P8cfDPtR9ZBmkgpu7GK4gucHpzErRniQES4HfCX4Y4fcvGgcp6AemnrztuZNCA2figN3tC4yX",
  "key36": "4BuTM9wupNQwLuiU36G5yHjuM7WPvAtgXkD74CdPGjt2XqKrABakG9jKRQPBxDmmzxK8krNPnjPsw9YpPa8yced7",
  "key37": "5i7sHo9DhVAXZmhMj6JRXkVHQuX5hw5NNNJeLeBYHVwUbiYHzX6VmCeX6KZ3qx2GT4GoKhvpaDkbPW3zqb6dy4yz",
  "key38": "2CdSfJZyrEVEsv34BhPMkAdjKNkjSLdNNPd6oHmRrvSy2WVq15noGCkJtjLwgDsrHmEzF6NzzqFBkn1fGMGGR52S",
  "key39": "2qx5KF4a7zieEWnmgKxn3VcQSK9uSVCEAwENofV2ugicZvwKRAb46WDRi9KNjJgVwb7ExUMgQwWJHRiQXZVZYVTP",
  "key40": "2bjHPSG3ojEBWmfqnxmLbE9qNxnABET16bGcDZGbErbmk1BCH2nVxoY7DSimEFDQ5mH1uDDdfS2bf3JfaN1r3EzL",
  "key41": "27BssuYjH7jzdt63y1ijdbkPssT1ykmMynNLLvXR1jKXdVA2NYHuufw1ZQ5XxtgMmTwJuuAoNS8gbnGPnB8AzYfK",
  "key42": "57twRxPd6dXqVAM2aRRtQnd57M5mDhKznemW7zy78quhHwZJc2yJ1kQSG9enNuHxpJonZjw3GiJr4bzmTuvRiZyy",
  "key43": "DaMrEgKyab91RjnGfC4tJz8JFLcpQR2i6BfZaPLneeBAdsZ4u3Sm6DGfxu9tS8jPBZjCD2trazUxjpGF36pRLD3"
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
