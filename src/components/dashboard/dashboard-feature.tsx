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
    "78L2LkpVoTtJwNuYZQWkuvAdaK8vx7kLBX3JRw9tQwpFHKej2dBB8D6sA1UhhPRAMXhc5zpf76Qc4FVYStFGDAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGLYQmhPSvMKww3utpfbF7vLYQxCz5EzNew9EcLwDqv7KpLyKHL7C45ECj1VWavznV9LSQbtUG6zqhcAF1FKdSD",
  "key1": "3h6UtMg2mj4rC9GuiBFBq8MWnJT6PyUfH9ozNU62ZyMuW8eauK2YxoiKdgPUpxq6qHW3hX2gbszuW8bmQnZrJDCq",
  "key2": "5mPsjG3aREFpSA9Cw63YsjB9zSD4Lf8j35hv85WwmiakDLJs6ULXj9UJVqttNH1YbaKLqU3QBX7dnsErbMgTqDdL",
  "key3": "42qJGoTmhWF9LNLDcJHBK97v6EXnS6BTvQxSYgCywTpkSuy3BHdfzMKLHatddPgmUvTUvYRujdmAYpfjvPWWCpXQ",
  "key4": "npGhFVVzDmMn3xzwbHGf1W825ddx8oVH5cmg3E7iyBbz7fwajQJCvjngvfzhYY2gGj11UZkvoUoK8UjVbaTn4gq",
  "key5": "PDugqP4fyReKaPmpNKoQtaDcKE78HTYNcj48G1es8RJ3T9yu8WX52Tphgf8G6y4SeC3jntQUAjM3jAL2vR4dNSc",
  "key6": "2djmZjUgGV3mu8426R8MNSB2xbKh81EUNUi1aJa2bzN4Qq9J2iZE8A8x88U1hUd1VpqkRhGXAbyxp8Ek7fcMv1pR",
  "key7": "3qM3sxjPwW3n5aqsCbsDAPBNo6DcTo8ageMpa4L3DMchexK8LdZJx7SRh94N3fKhxoGB8WZkYDXZr2yWYdgQiNFD",
  "key8": "31BGqJfrWjehRD6fWnTsnQNg6DqZaUY47g9i61nXe7FPg9Zt15gULv4zc3xk6EB2tAFjjDXvYVXvnSkyLExBJFRE",
  "key9": "2UC3r91HZTmJkC3vGJGvLyAy3RrRAd5f64EpYcm4Sn6aij3PFhmPwd18ghJT2UUVCMTMG4S5saCfxw68g7sBr5HA",
  "key10": "2JokSrTZMhMtkz1E7bPXvpT9KQ5igF7cchPopEJ41cgKSGh3UpLwCRijaMhz76VXDby1V62FjLwkVwsKV4n4EgDT",
  "key11": "4FTKWx8zKp9apGb8inkASdAPpEvUmZqeFNvGqVDN1XW6E7VQ1SHqpML5vEGz6dwwW4C65sdNWdC7no6K2zYdKoHK",
  "key12": "3fPVeSZzGCicK2McV5cZiAhP7gnVQtE3DPHwH14wcnp5up4TNJZfmP33e6ocDXjfxJHXmcBJCiwDkD3MGm7EfxBP",
  "key13": "5VGWcF7iMJfkboeraUMQdLQ6zhoFPHB5axEmV8sH8Td2wp6tb4N97TDpUiG76uc3v6FwExsvu1ESvBYjr8rNpRo4",
  "key14": "vqBqy8hPtwt2ttmnxmZktpqqWCnmXyA9ixd81kbiT5UbSVNXDBKdgrhnfKypMVciqRqHq8NDNrXWej6ijExLNmk",
  "key15": "6QCBFxMWBaicZNY5nZ3hkM4DtxwjGSiAG1eBokbyCaLbRex2gGj4JWbMEjekJU7FapQEhpMQpzpPch6JcnWTupQ",
  "key16": "3KU5MKY5vgxh33sdTJ9Ye8U1UpLDoXijygzoPsURfjFGpE5xQ8uMvm3QDwMULURCidNozT6YMnmnU68aAk8TYwfF",
  "key17": "3a4Bs1g5HccYCCEzUv3EFpH4KTGctYz9sf2VFLNDi4dwbeWZJBMBpKMvgpzCgSyaXRHPeqQg3mLBJi5wZtSDvKQG",
  "key18": "2e2bvSwRSxA5hkbmRyMQhAuMeay9ww7HrXN1xW9FHBtsBzVuYKt8GScHSLEfUTUtjGydMydHkuSqL7yXF5veAmoc",
  "key19": "6Aqrfyd8Uvek7z7Vy8fzS6SNA6uSM5GY3sKo2FCg346nwgsPz1fzkSsmWg5n9dNqMTcrvwN5TGHR1oH38naVMUY",
  "key20": "5bc3iUrZpPx1mC6t1cvY5K3qidhZ6HceFXGX38w3G4aXqHoqdRVk7mVCqihFynyDQCcVQdcGoG2o7ZRCBnWFFsRq",
  "key21": "KHEiWSjaWHGJaGrJobG6Mcq7uW2vMapBAMxdwScRBMpAsH44zjiXxhekRkvxbPMGwYyVA7a75kpRBA4QYaG5Cu5",
  "key22": "2BUcr2DR8nHthuK9LzU6bzAMxMQWFm8MLVRy3Ms77NQ5fsqX3CfLzpZ6XSt2WVnNNU8YRmaywtxwyiTcJAx8FAdc",
  "key23": "3Y4TBBW4DG1KyVEWSqfJbSyquzEFL3F88BUYi6bK7Fc5KQMG7hApwiVLwe84Wh18wLWPjoKo6vTBS3oSqRbhtzuq",
  "key24": "3eueWcJyFu6j77P8DrKeg6J1F1GMGJmDPDs4pinXk7J4gMjFFpx8eQJbQQ1dfFcdfBATDcfdioqRfFzWAF6gqFJP",
  "key25": "3jtpm5jXYArXhH43qXPXC3foWVEGJZiSd882YMv2XZpJhsM6WFYAhK8DkE45FjzgHSMMidXRvphoQuF7F2w88be4",
  "key26": "xPWyQfhR9P9w1HzRt98kFh7cNu2gF6qSxkwJgwNxDzgsz7gqk31rjvAAbiGuapcgBe9Q5W5aYDVAcwP5adAiqzY",
  "key27": "Hr1FrvjAE861MkVCwCC9ps9sHmKhf4JJ6feQhKdUCKao7rbRQVVf2djE4hUXZa7fwLZeaL7So9WdfG3rKDtGq55",
  "key28": "4HtSC3e1zJTUjMJAdtm6fAQwdEZgzBJ9BaFaA6aGdsrTn3JmzmC3RHYsvzZihK4A3ibmkw8uNJNx5T1QhRbgbhAG",
  "key29": "3YkZcvj85KTzSsrrxt2eSnK1kbLutDyTYhX8S6JzCCcybLFsatt1NzxAMzHiY6AzhCSvBQ4HvLPbhVe25uYj55j3",
  "key30": "3SueaovgBTdp3W6VAvnQ8uh5q5ptWt1S82JvBVutE5DVHWio328VRVDeUpHuBJhZbsee1oo7JrPDMcqDtt2GFC5z",
  "key31": "31uTRTn5oqtsWMkKy7rK22NeYhLjVyqL95WxXV4VoT5qEw6QH5Rqb6Bvkt81KSYHGjUx1tRzoXcRduyP5xEQz8eY",
  "key32": "5nX8LNHULcJvqNzR2XzZFQ6BBGuW6gCPSaCw8znknxFCxjfodCC4XKM22h8Hz4Hw4KXD6zQsNsb2cEhFETG6USW2",
  "key33": "23vPNxnuHaLt5yewA2vmqD8qL5wkVJnqQgQaJpWxHLhUJL6YZNx6h6qYYyCgWmS1BmM6oCUvLRCZkkQNo6NPNB2q",
  "key34": "2HrPxhkW8iUiR9WhZoWXptR9pkZFRtaBUdF7AopCxiKXwoiGAR6VyUeN37ycAqS8fujq9Yq2zmZwAp1vV8xWbE8g",
  "key35": "WkUtmUNXJKbdenZNyvJ2KYzu8HpU81MnCxxpsDJHSsxLDJGFAdvJmmmDnUkhjdMGAKzpYjtpRiLYuyGigh4peWt",
  "key36": "WfLQw4zVQsA2XvN63arBB5csEBpGFkVBtCkwnnvrHQQv1A5rnmMWafWV4ghCCwJs5iQTNZC5PybnyovG1BspMuk",
  "key37": "4D3hNCZJa6fwRyTCwt6TnNEU3T86Gz8X3ZzHpZeELPQ8YUkySS6du6HdienkK2SWrQoywqoBBmUaKtRorEpKgzxQ",
  "key38": "42QeS22x5cx8apNPdjSM7KoyhhHdaytKoG4sxLBLLvfAALPM7K9A9ufB4m5jRsZcVQyEzxHKMUa8eeHLFgLfPtHm",
  "key39": "5TCTpFwxZuJoZxNsjhHoqfxmm9vBcLie16xKSvEzdoKxh8DXb7mcYffdHbJUEDFhzRf5unMA2a8bjz5b9Q2JnB8d",
  "key40": "2J6jphSn9CXXSdxpnn7HHXSE78eMgLonuTFt5zGUCMvgNrN2g4uw5FUziJugbjmVWmeAgrnK7xGsQawkiZpXGdAT",
  "key41": "tDyLnikaCWPiFHWbsbNPqb5jEgKfe2gdPeyMLtGQAzwGgogcuNvt9oUep3VNFe86dKKrnZyeusVdeiS6puSkDLH",
  "key42": "3KWWBvy7EKmg7HPbTZxac7XWwyDPB5ed4HDgJMN3Ho2gR1WkCvBXMJHnDULrjHWXW4BpYDM3S15ipzvvCxicLHdE",
  "key43": "3Zfmfoh58uC6MYhtU82qwiYM5BuiK8cX8ZDYPxDvX44G1N63MxTgN5bHTsbUozRHAaWJFbejmWdVNhfcZsU1WuXh",
  "key44": "5sWYiUDKmr5gM1zAWjoqHkcNrz6TTnr1DXe5W3X1MSuFgm6FQLyS6eXNgr43VjXFvLkHcKTJYrySE22hLmyg6ss2",
  "key45": "5DA6RBEkaYSHDYcQwxuhfjQTkVXYP1ydXNEtSNQ9ueGi3sBMjBx72LsJrXtPQwV7tRM2yg6pUS1u9kq7sBWJ6dpa"
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
