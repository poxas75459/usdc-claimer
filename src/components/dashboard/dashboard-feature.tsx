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
    "5oHzBCGJXL2qRPegtL1DwQTGHN16iZd2fpPb5FjtBnVv5PoyphQui8v6L13j2eusTdf8QqJfMukn3YQ1KLsRbggD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhCeUS3FoHECWoh7PzrevaDzcNCUvyo4ogMxA8EE8aZrCAYYGhsVBWb2uXoz4zx8iWAYzQXYvTNStv2kGkYMVEv",
  "key1": "2XChKtHM9LCE6E73AL3gTq6RD5xw1uF3f2hmvgiv53HA9doaoCbd2gDX4cgqhnaH1cefA7jZMeMxPQQZ4sUV19SW",
  "key2": "3kz68hiMY9Wfz2t3LkZh7W5tbB6NZeWdAJx4yoKW5Avh2NnqSFtqTnDRHgdiVe2pN5DYj2uiutq58PXo3aS4z5mR",
  "key3": "3cur7gvGNoZPuh9S5LAEZ7mwCWnZnSvaD12hxGcDtLWrF1BCEuiQ3uoynzCTcBW9mxg4463q5sGY4GH3TmD56RdA",
  "key4": "5RBP3LJsaFU1i1jNmNbT3qcpWmEiZaFaLUYBnnog73Ghs56xU3n4BUPqrEcmyMwJopttYBPD8eoBBqzZYuvbYCa1",
  "key5": "4EK6k1r8D3bQ3khtGjHWH1qvYDmfUgybsw3PvocGFivC3c4HFJeCXjbsgt6hiiZ6xrr6WhWgHvNxPXm1vPmZvFGf",
  "key6": "3jAUuAhMHxsuSUi2jSQpR1weSPpSrpxp2mj9y5KYWbEBCNFdAk1Q1cKdeZNKDjdCw76gsqCzNdZwatE4cq8zVHPB",
  "key7": "2YkqAasYtfYyKoHRPLu5ePVXghhdL83Bu124iQ9LNAiCrSLj5opAHmMNzMg1RXYxWyjwgxz5kgwnHkAzu5L4Yu6k",
  "key8": "2A8BgguV1wRaSwMq7jZzJswpFUfc6WcG8BDh5fLeqRrxnP6EqRwhzfCqqgxW4c1E227AuTpMEDCmiwm7CVCeh3tv",
  "key9": "2ABG15KBz43Nzv1GpFQLLYYreRKX24uo1mMWu8bw5RubH9HhFhzHYePr2xo9TYGTjj7HUyG6SKJcco8mYUtYNPmz",
  "key10": "5AYLA9LP25Z8XS96LZaESFnf4RBdQaS7MMkRYQA6jigS89y67pFYXE6eN25Ej7vKwfwdcx5tsPGiKNSCNesDofPw",
  "key11": "4v8kQ6rcJTuJzxntt26BcE6QHxBJvkGQC4WvSGAx5FQzm4U2RWd6kArxQsQy6NRd36yFJHcTpqpEmab2TADCngvf",
  "key12": "372SA6dCvviW6MiuHjU4gVFHnWrMMPdGcXUBrRCBD8XUqTBVedSqD9Pmr1AGNeEkzRusUTMDYW1dxKHTWQ5GjQ1f",
  "key13": "5nV8jsDrJDxMcNFBoFNiV6tdUcRSJuLNoZkBpJjHW7uVi3XRHeMxUtWe4mJGLVxehVELisDGwCMqkGYzFDWJUuLA",
  "key14": "4kEKLr9BYVbV3CN1yebLZVVZDRQQ5odfU5ABfBGGgHiqHyWFWpWFh9bTC1BFAxi11EyNeayRoQE8QPDDSgEDFUU8",
  "key15": "44oBZ2fYJvqDc6L4esNf3D7mRXyW4svq79t7WkEnQwfuBUrGWVUoxpMcYnuAVR9AmdoiyxSBSvJRsyr7QLu2A9Dz",
  "key16": "4ybMuPiByQgfS8Y5MkBESj8fq7JXhEN99rkKUbHrveMR5QqESagmMotcKJqr1KZ8feSifU4GfvR86zXRovbkVjsB",
  "key17": "3wvs2czsB4vDLcjSQKQPcBtoptnpzeTcSuxyEw2Zvjg2tWVYDwnDa8XAmB6P4XaYVH9pArGxgZ3GL5sDVbweUzTX",
  "key18": "N8V865vLn8TgKMyYrrR34s7fwxDvG2aFu6boiNV16RrgrhUPj8K5ue9HjxkZSQzJBBf2ZZbNPsFasmfwoRMdUyf",
  "key19": "4S31NnDZyzCTsbqzGthibj68Tqbk6HzNEhcfjMayyhaQfwm1sep1df633tTGoS2jgm9WUFofoGjGeES3bk65bDfp",
  "key20": "5HuVXPqt9RT9XKomnQpqsbvmjB2PXDfraKwog4PpNyLCWu6AAmSk4hJbh73mjfxAqy9CxnUWqLjk1t1EF2tHs59n",
  "key21": "L4hjpStXt1kKRdpFawkKAHaGfaoqyLFLzbNFSc1yqaQcKJ3uUnVieQZrhDMF5r6YXKSpDKfNDTGTH5uihiDjYmJ",
  "key22": "2dseYmR6FnasEJUUfE54pN4q7cxuRg2QdbYnZ8cr9uVxhhsgxpbEEbonWLWcHJE4gC4AZXZBRaJxXWFikU3rrwkQ",
  "key23": "3Z7mZwH93pdGTfq8sdWFqUuoek2NHTzqRTM13raaZAYS2XGDZVUfivb8yhAgd2EC72Ykq78YDhNCoFRDCzWwaQEB",
  "key24": "2tDUt6bNP5MdZxoEnodVvWzvEsREJYeeqhhzp2pAce8avX6p3UDxbaF7RaeoSUfRb7ybu7PqwahP8WneRYidypGS",
  "key25": "4pyknmtM871aLBBvqSDcA3HCvLN62qQCgpoYBAgqwMaKfUW6gkbn7YVqf8sCz2AAVxfdCGCAkkao2uZRDUuopYZK",
  "key26": "5AzqibWmFoh7gExxrfh2WrhYfy7RFTjuCUyYa2BUrpBnJ3UNvhB42pXcCe7H6ngf4vQH5he2Kug3Dhb9CcMPpTQ4",
  "key27": "2CdbgC83apjE8662v4VnCjjLGF8SRcnn1GwzXK1KqcyTX8s7zLNw61Zc5QZWYmhWtYBjViC9vkb1Gb3BYiYWMF3x",
  "key28": "5gcAkyy5YgVE8BM77BkrBGP4stJXXHcesDbVeKr9LrZtUDuKp6vm5PLQHu8i94ybBqyYMidLucwb9pDDjgvoPVqc",
  "key29": "2rgXKm9y43L6qddYFw8RP8ZdJzzG8k5hgPabwkZpamfpcx55QXxg8yjDfMPdpYjjjEBGKh8Uv18TRmHsso2wSxXT",
  "key30": "5sRm2MHbWVxkAPTCXPmM3vWn9vKtj5TgL6tST9YiXXEZSm2d47nN6X6bErjQHnDST74WqNuH4BcLBsuZ5Qd1i4zg",
  "key31": "yYbrLE2b5qBt7727E1xMhV8rT1QVRTy2bySEUZrwgpmw8YmMBNMEJekKVrv89eJeUboW3x1pXB4f5TVjHWUJLpP",
  "key32": "4tjVFLdp89QgNRxeJ5zoVmy8YrtwsTWuYFo4xvYnaee2nYgearimWAo2DEzXwPZAFesmYUu2vvFsdB2atrmjVvo1",
  "key33": "3XYvhCXycSyaMrGvRdPL1ALRatdivHmUMCPzQM8D32eTJa2wjxiFLqGUELJYtKq64LnSmCgQpSYrVNvfCDH6wBUx",
  "key34": "2qNzfVpMWHjU2FVvghA9Zh5h29DbTTq92eKBxHieMf8t86NhiRhjky21RwM1NwEFEme5uiZPUcLHCUW6UrSdbbtn",
  "key35": "c8CWJCL6QSXFJLLyzHKwLXhpueCTN2aXqJkCg2NtDcXgSnby6iQfm7gEjivytu5vddTZ1NZ5Dp9rSaTp3crD4Hy",
  "key36": "3UNQ2zqmnsEAqHHabkzUAgBJGiBa37nGFez3UNRy1Zy2dRezUvQSBaJhBHGiN6emCgMY8jtJXhMrmRct1svKJu7S",
  "key37": "2fxRyEF23NT6EtMDemNZCtJ36EKVkqjXKCnFwcrJgt2G1d3fsTwizP3UfH5sdyWz4exi5UeZP4nousTS9VfkNn7Y",
  "key38": "61ASQYGWWZ85LpTmpaPRrnoBVtECHPHU2hg3PAB1ZaTMPrhXhkoyTADZEYb3XQkFoqgAvCBBfTa9sgKQbu6nNiBu",
  "key39": "23Np3YvQ1p6jXif4VquXaxXziUzpizravy8JYWSy3Gyf14CLmqZ3mEXfrs6C7gJju6KNt3efYfsrqkw1x9Whq8TA",
  "key40": "2cCBwQcy1ARwnt8vfE6UL8KUrYx9aFXToHAppeg8BeDzuzhzgLosnxqCJrZzzd7y5b8ncgpxtJ2PvjpDPHP7nBRe",
  "key41": "u1sREARQDfe14mvjxYxsdvXpWqgfny5H3tgCnvTePErxKU4jizV8FM2FQQxME2YSeTgMgB3tKzYVJ5WJL7k3tEK",
  "key42": "PFSafG29e55Y2whVUTwZDmrtf3YtThNgSDgKV12f76SXGcHP4vLu6EM8vQDqqd5b3akqHA5vwPMavS71Q8iWhaZ",
  "key43": "43VN1TG24QPEbb8nHPAZjWw6G1JMCxGwju2YoGdcVRqs5b9W4anWgccyY9SGFMWERkQgQ1rGHVDLb5dFgK4HLg2m"
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
