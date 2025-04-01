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
    "33fkWrMkL44QehDxTkMLCyLfvpWofH9MmhHnNKEERqWLkAeGDV3JUVc3pr2C4TbR8KJcHq641CcNqtCNfHiTp8qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJQAP59x3cueiFhC79CY8MNFwj2YZRuWQPmoHwaA6kmwy2zCMa2q1Jtn5xz5WMKmtxPDwvn53HvNgeLc3MLCnbH",
  "key1": "3ixe2VpY8L7eP5XsvkSa2X2ZQHPwiu6sWd38uoffVLipTrSDL6JWFZjKxakjMYzKzozn9Eh2d6havR3Ki747mK2v",
  "key2": "4dE1gmw7nxDAuETAkg1ibZRyRgAtFo7mpVVAt3nBJs6BzvAdss5ZXoNZB17T5rNZCJKskymRpWbFTCDiYfUfKTMC",
  "key3": "59UFRHraN4hSBEGNX44znQ3AeLMxDoP3sUpR8NJ565Vedz7V9r9bRtZPrtGZRxKEtNXzjMG5kKKwsZ1Fh7nTGXm6",
  "key4": "4HC5xJ1rEkcQFRnBNARwWQEYdbPsm8qwGq9cPFMmHaTr358tyvxefK6VoGQY9QbSMm3AMwtMG7Y4fUHUFcdRp69G",
  "key5": "2fwXNitQ6NtRAnYxRGu92pqva7GwSg8QXZcUQ5fWY4NhzWX5VTixNF5PXxps5eUtTGQufyH4DuTXXeWGEAVw5EfL",
  "key6": "2W41hkXyW85WB2BMkpcLotHp7RkZ7E1EkrrsGhASf67u8KfxJqLpk6W76ueRWooKQXwxKZDQ4i9neT5aY7LhqKQ8",
  "key7": "5GYkDcLjz6hX8XnKEtjrSrbvvTVvJeLek3jKMmeXYQKBRwLxRnudbopShA2RHWLg3m9mD9NhkdAoGmBEBFekJNV9",
  "key8": "2ZvRJwCdcpCJ4xLTWHBkssijkNVBqaTNjD9RHm3kgiZK4uf2crAuzsQCRBCEXFhRurahdAQavGJJ25GNhJWrHe4g",
  "key9": "5vmDjFhaw9f3TdLY3RLCWFRnMNyJLZF5RQE3SCYSmg1Aw9kzSp73qdhWMSpPGrPkiww7qbe86upziiNanx4wY74x",
  "key10": "47Rz7J8X7niMByhx4x3nBCVBesncHqHEMsqmn7drNEirp665VZqrX3Gp8tSTHKfAnHSYFaWgVG8Sj6As5uyf3hRe",
  "key11": "4RZWYAL4FGJnEcVtMpx4un1AAVrBUWdc7MBaTUB4Wd4u93B5cVExmDu9izKmcxE4HxU6cPuNBVy1E6FNSVGAz1LP",
  "key12": "5uKBnFaYPyJ5Yj1paYex8VwijWE1JHjKuHV4jZHqtccozYJi3FATEmnkdCYm7ty46WB6nck8KR1kwqVWckjsJAW7",
  "key13": "62ZdwwGxZcji5PusvsN11WG89duE97GLJbmQF8fy92SSXt9JYGsJsNsac72oFi2hV2VGbqyYr59gqi7kb6okRUZD",
  "key14": "5bXhJsJiFLbRTgDZdNS7i9MfnZEJP3gfvL4yfzGyVsZJZgLg5UdWix9DB7PZ8JP8nsdDWgYpaTgUY6H5cqXW7kZA",
  "key15": "4Qe76iMyuTn1yA9ZgyVBZdQ4eR5KaaydY33uvs3qJbZAVPgkrZ7gzNXrYGMga6DYiCPAxs15hom9aQi7eekPbdWp",
  "key16": "5UpRdtSJp9oYhd9S7Qvr5T5NrfUqdtWNs2Kx9gjaLJkNy9pPeEzvZ6br2VZHcNyXmoiAmX6ghNi2GXgwGyigovWW",
  "key17": "4ni9m5XVFpsp65CMwjkDkq5HQbJbXrGWKqeJeytEJv8Zi6CPbYU2pnUNgMn3s49ByQoa9wzccB63k8jdJkuDV16z",
  "key18": "jT4SgJe7WE3YNJUxa5C5FBG1FZ5MYPr4jCdYUvTCeJVoNXTQM1AaaT3rrsPr5cT2frmV2i3ZAue2MPkSXqn64oS",
  "key19": "4XJoAXiW2JunVrRLi4UcodJt7qTKDREgn4EW95MYvcCzew3vReaUz5bknX52oL9LynsC3y8KqKB5bj5FjqQVN8aT",
  "key20": "4xw3YZKUUxzDJC8btH4LdB5qHAL2sX2T3PLYPHHmzwwx4rCL8HbrHTy3zkzhqYQbFkoGPnE6b56MYA2kuf4ptsu2",
  "key21": "3Vdw6BrJLg1qhf6Ng4zy9Qda2hrYW61FpfWwnNhrx32QRxt71nQrjfkgvFq7s8Yxn6g6wPdPVPTwmmV5PcrNfYGq",
  "key22": "5pXAb8PdnKMj5E217h8TJ6VZKnFY24EHEsMFwxQvNihq4Qcz1FN1eL3Hd6RmKJdaHboJBGW3mczbdLCYfEAzSYVF",
  "key23": "4GMiZHUdVUVqQTp7GPoAA1HG3wLceusEv9uq1ek8xQPm3yomtcjfzAax9vfUxUnZbYaNJu4ujPvuXN7Rp87W5JsE",
  "key24": "sT8attrnxs5MsQKGMvaBm3WiBxVRfyxCR2BkbhBHzNg4tuZkZRFb9JY4cUs7pznare5nUxeyJk58u7G69WBcyRL",
  "key25": "5MetpxcR71bbBkt21TDRUz6jnejBdbmG1Fn8gsVx48CcJYWSNg9W4S6wr5JsAWEHcfg1RgKjX7kyEFRUeZwWuRXW",
  "key26": "5aVzoDf9A4yTTffJahQugoQpAPJ6vr8fh4NuK6FHHfcndvyJGwHMLDYmXi6b7bBCrkGPvUVdgj82bchaSYM6Fx1N",
  "key27": "4fhgSmiSVHNY3F3wqQTPRyguruxUQAM2MbsdFe8ztRhD743rsAhECzd7PAD5KHCnp63vG1U9m56CQmY7U4qNaDut",
  "key28": "5uX8sfYbq5Swv6LKZwku48GFJGaEQKqUM4oXXevCYr6vLRKNgtnLxyWTPT7LTapT5LMEA2yaENMiFAxG6TejsusH",
  "key29": "5zJNtebiaWbuZLi8bjNBSM3xeTxvwNcSmr4N1AHZADXP4852sHm5zm5WvyqJF6JbQKeW3iTo6MU6h7JWX5TiPddd",
  "key30": "22iydxD8nEUcCMun3T7fs1sp9u1pw7HPXRWXphxiPjKwxsrkg47Zg5Drgy3Dk8cMiLgUTm7PWBTyujSycfcTvKj4",
  "key31": "5e4P2z3tbUQg3SVq11eyV8TqA26NCnfhDYxgUfeG3dUyoUvjYK5XzLk9Xp1qVVeBzf3q3tqF6RDbxAjJ4Kfh1Yvb",
  "key32": "2KKAV7KxyujJTZSqwoYzLZENTp5mRkiu4n3xHbuzxtx1wkgWeDyLeSrVbYAaRodZcWEpV3DPk4hofkruEwnqpUzH",
  "key33": "5XyQufCEBNv6CA9knXZEPVkKBdWbTk2TRkPXPJaVpTJyCEDfnEH8Ns8RTtWRxt1G5KeijQDraD1D9sC7zXqzC8SZ",
  "key34": "38JgdA8rEBMA91BTmjHSGxFDuRwEt5sngczsdG8WVb8rAN6HkntGoFWMahg9uYYcBhHShsTxD9fbndBbLLMs3Yib",
  "key35": "5L1dZ2WLb4BKEL52Nab3Rvj2W6h9cxzrM7WeLfBoKzXzDjo6LaoTFQvWmFMNqFjUzBLqdTfmNhGwUeWEGW8xxhvH",
  "key36": "5e9FnETosVt7Gvd4tmcuVJQW1U9jjhhvss9VGkffnUUJjFsi6HxwbWq94yyteJVVn7MccuTVowTWojmx4GHF9wb2",
  "key37": "4UfLZkfb7qPYxraXDDSxEKVKL86Qaz2UuMrsmmFKuqqHykrynwt6aq8RF1BgujbT1PzvcBqb2Npj4F2Wdzeo6oZt",
  "key38": "2EjbUk21DbMAeXySjuSRMc7Ut5BJ68k5bhrp8ZGw8MKNuBXb9w1ihGjnkFtsrAsYH8NHKQGpxBGoTRRY2szYmtGK",
  "key39": "42yS8FfJsX4QxxtkHDL8S6eCrdEDgy68JA9rQKMhSP3vAG1jgwFCVbwJHxchzze8GxmMBGFQXjJ2BXLxgX3Q3ZT8"
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
