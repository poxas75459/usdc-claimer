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
    "2FwuRhorsvcPQzs7hsGsSLdN9wkf2hgFZoNjJpm9DPz7QwHSUQTLDw1ZWr7Bj28Hv9ygM2NNthcqU2YjyNSNRGWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6wY5L8DiVGXGuikmqfRdmmWstY33bt9FYjjqi2pTPKA1hL2H4TJwnJQFeLdQCCBeni9kaVYsQVPnGMx6YuXJkj",
  "key1": "5BYuJn8QcD9YuCvgmQCqCqH72g37vFSx4deujERKPYFM81rgBWrU5mpPrUwjNgGytZp3vEEoSxsuaYyDANKhAy8F",
  "key2": "48ZwDgThSTWFMeTqupsJrCbZ37HEJuAZhBp5jNipbCcqxAAY1WpZvLVLgGDJEE2nNmozE2skJkF9muggjBkFkSzt",
  "key3": "5RTF1jYWgqMQrqL9YrPAexTXkqUvhnacSoPq9gr2sVmTJ3hsmKNapVCJdsMViuY7yqZCo82phx8XaXUyiZRQwyqy",
  "key4": "2ECSzM3Fg9JCDtHJUzNxoZv7Q8dAKR4PafPGmsrZe94yAnVMn9B1V9MvEStJiP13mUP4KzSdaMWUrQPVmha5kWFT",
  "key5": "5KBL1qG6KjDCc3hZoDXQJW3zXwCAcdqcDVjuPpEHw5EXJycm2T1egCuwdUCdvN9khBVD12RXzAhP72hZiKapyouz",
  "key6": "4MH1HkTV6xfF4UvKJmJsMVVX9LMwFju4zp1QVS3TbxWSafN1x8XSCwLgCwqfo4Ww4dDizXmx89LZ9SRX75tNG6Qv",
  "key7": "myuscofgq51NEkLEA5rRoZeDAy7xpB8qzk3fAGbWLF275Y3m3zBoDWD6up7nVi2jkzBkwLt5iCdQsQxASyLovPr",
  "key8": "2XaB383e9LPZKTtGK2iL5fGRUfY7NqHz5t6fzh2pGUWvCK2cFnGreMRtc5NMD3AFF8XZe83auCznroJYnnBafbHU",
  "key9": "66jursqTSCqZFLU7tAn7TGTSstiU5RcvVoCXDxyzhNPRjHYCADEzY7kMyRbTjGwqGnX8YG4m1s97eLbFLa3RvNWF",
  "key10": "4jadKuX9hx4AtfE3NN9U4nkJr85DsdhoyfcthXeL85ViR292TcoQoQjDFVwD9be7yBvyRwEyNccUqr9DAYTGSDxc",
  "key11": "5Gx1zC8XJyY4A1aXLQRjVUTYTBW4pPVP2sKvAyb7yaP8To5BPEvob4Xm4wBi5vfEFxUKxAki259QexLt8x4oehqo",
  "key12": "44KnmNyg5qSvePCon4sXkMobfx9DGYYWnHLMCgJar5b8NdmBuudam6qCUGSPYsE4WJGtW5fiqAPZQ4Co5CZud9ft",
  "key13": "4t6s4g6MUbneXudNSdzgunbytB5iAuUmpTs1fEWSihnpKJgjRCNF7psPMK34rnWoadSPSNLLBFmzA5c9PGbzn2nY",
  "key14": "5NJMRMfQX3k8qZjgK1JohDS23S5XgmHRyqa7LRju4HMTm7fBDqPPvGQRvtwUfXSouyrfHbNKWb4r7nA7VqBP1HqY",
  "key15": "3Fr6tPow6846sdEWHpyte3kz1osgRAeQXeRn9EUe52yynXVppfDMJzTRKGhCS7fnnfEgtd3MuffetPXubrsSx9DX",
  "key16": "4uzeH3eFNH3K3dEKih3N14Srw8aYTmcCsSrdC7yRMywdhXdJREYN9CBYiGNABeK4YcfVmVCQhj48HYH2V2E1xyXw",
  "key17": "4Y2bUj23YHDXAR7AqKF42xHbu1SkpmueZZm9zj8ZxW52kwT4DZmy3NcKgmcAMu5rQ2dXQTbEVQFFdtdp9NaxKDXD",
  "key18": "a54AVGuyPwTnbPLf5pikue5ck3ZwYWnrSYL5pbqfCQoEkbpFUqF88mMGjfGS8Ras4f3AQy3JyBsZUZV1CF92iiw",
  "key19": "2bq3nPAmKVUGp5hvKVL9J92v647itsssQUzGFdubNSPB4RmpXuLGhRuPaC8aecQzZF9FRRtnawi9Ap97CGAF6WGu",
  "key20": "3ok4YQjJdDEPc5KHPQ6LjHaWVfDsbWqtVKapsET1mCRqd3tftgWnVn8xCXet5GzH3rZ78gQBgwzKGXU4MfSnbiF5",
  "key21": "2xYXpSf6wLAHpGsSZwWxvcgpst9Ahb2MzTSGGUZBkdngJBzPsDV6fvTm3pccNwT2Gi4umWndm5ea9VdKjkZdyhsv",
  "key22": "5NFjsWVN2NpcKp8yNfGJzv98Trgn7VPnoX6UrQVjcgqmmoW5ThF5WtSXruCvWPdNxppmfbvPFR18Tb9E1LxznAg5",
  "key23": "2RPkXBjQVP9mQ8No22bVhds4Q7dYmnW26tAB7A284pnHyFjdVfUhYiK1YGGWNXbfyivwzYDNb5way6EWjZCtE7CQ",
  "key24": "3X1wCXrudDs7q2MKvvutQbrmwrSCN4f69gRJ7APsf9XUSZMskfnr5h5dFt3Hs4hNhNBAk5jZijk3kHjCMgabTnEX",
  "key25": "vUfGQ8zVvm7M4p2axTxajgaegnbhYk5rktju145ybsJokGGfWD4dDUskz5eMjDbmQWpkvZksio2i1eD4zq566TK",
  "key26": "PFd9DNoCKtHzHvA5aiUW1y5PJcCw1Zw6hzsQDJ4p1hTdDBnbDPcTMa3GnSz2qyHM1DzjDeMZrj5zBw5GE154pKr",
  "key27": "41e29uo1f2HvdMyoKHSKAQ23YYaTkuULQjKK346NdovEEuYRnMuesXA55xawnjxfSdyfuGR1Pgbb8HrFcUj3gM27",
  "key28": "499FnjQbW4SQPL6UGjbCukpCUSwzn8RhzL8Jn2crBn8sZZc3v7xJmzCbChqKRgyZRkb4CBeDjNDr8iZK92KRqqrj",
  "key29": "irBGrGxQitohBMpAGimT81Sbec9bb66xT2hqW9a65QBW9gBouVGH8x1hspzWN5ktQ6jwGUMDjwv2jEW6hmPPYz5",
  "key30": "2oniGoKqJSeD36U3kjeYYBpEW4kgvDQK7ZRkQAxxYA62kdJLkSMMbpt8AT2NidhqyQxZUKgx95tEuVr7gZQ9emtU",
  "key31": "2rAYfhiQMdz1Z747PZH7KFaZVtfRAuarT2DFWStjkdy3XCcX2b9GjWGNXx5GednTVHBBzYF4eY56hKeT7AHL7zS6",
  "key32": "2kDutCCRqz8LNnjz4VAkzej16axJmLZw69dzThamoXiGsDXhFVqkAutqFVoERXiNEhTNDhA943wiMFGphjZj5mR2",
  "key33": "3LCNggrN3CMwNxSjMiaBdSD6zD8P2qZtVwBXXeusSyXzYUQAjyRRiWa5Eh1pCwL32Uz5opWAL9RThT5Uh7QcioAV",
  "key34": "2bYSkdcee8Zk5TMLTrFcfUdszU5AtAwrFcnutZwWgfvR9sAAEW7RsgtTFHqQprNyCB9wDLcM1ot9SGEwmkwWC28L",
  "key35": "2UjVC3Wf5TEaYvrkYskXAeSL2dmQfEGSzSgc14tpzGtHXdd4Zo7gkP6X6Ah7QoqcZG7tyhNrfEwdH5WonBytsw4a",
  "key36": "34d1kgLdDvYYh3xQEihg5v3NBCna2kLDAY9yUhSCnHGDAD3gEUNyi2vmdT3w3NAKUZeW8TGyDspXK6KeRQsqbC9Y",
  "key37": "5C3F2QKuC6ypZoT9itMxB7i5M7npg9fGhWPE5BtPNrSrsBUQWZSZ6EA9mntD8GVDsQ12FffuUUdNo2kH1y2sUUqZ",
  "key38": "5BnCEwtuPTQpzw95ZkaCwsirD1iocbJJcRXQQQ5cK1qyx4C22ctr3q7okPMSEsKVExneHxKsvcqL7tsUDHZfEKpM",
  "key39": "2g3APcFWPworWXh8bTMYFac4VWmxcL4oVzDqXns831oXiycp1F6MDf5mr3Hfv53Re8ARR3YuRc7dbkG7inWZ11ZX",
  "key40": "3Gxcf5ue92L11Apmkzb4CWs6wdGWyHneRHpfdmcdF9EHYk7h1dgzzaSDqxHw5qup6ZCrAMsFp6kSCKtvQ6o41Y62"
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
