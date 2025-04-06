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
    "5hAQYaE1Vb6m94UPcLDUaZLmdQTHt432mYqbF645ftb5iE1AUfRQQUdZQSvckqzhCQz1YBkk9uJKRBtx9tsfmNBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCRyoDzu8wvSyvT3vXcsDV6AXUkdEWrnm26oeCp6D7rZsxuiCQWUC4jNDBrGFsEezRw6SFWVEDeqEVo8s2uQPFb",
  "key1": "5ncQ5Bf6NRj2jkFJweEUpLo9wM5P76qBLKN54SsabGYDv1uiwZQwWGu2zzMiCHxCmAuwZQjjJrV73LrU2Tdc2vBA",
  "key2": "637WsuryyjMEVZwZECsM6wrmopqUonXDYpHYxMf6vYs6YkKF6n75MXYmG2wrxKspdgsukGYqvGpTuT6SMceftcsg",
  "key3": "3jgF5CsyMWZ7X9cbbJitxAbjMxz2Xt6kyezSGPayQoJ65Rbm5vzZ8pY8ekm4gL72FFaob8i4aeXKrpvhKGNqBcsq",
  "key4": "GGQpsQNM1uvfDvAC58pXBLktq7QZMzFC2hGmMSzxfPQykygTdf2Ht5gcDDLAfRCyU4h5J7oSmDUHkLogBLY3K7H",
  "key5": "5DGziSU1EZaUXwQ7LJJMbkE6DWyL1QkT3ktJacGyrKKZb7k2PfYkShB1erF3zEyopq4Gx7uJK3MXMyxn7N4gcKKC",
  "key6": "4293sSz9sgvugFrxdR3xFiVmTvffRxdJQRPKLqk4W3PSUV8aQHyWmak5udUcZrbtM2ToLArPrY8drSxs86XJRdQg",
  "key7": "4GDG27FMmCcPRH9YnpLnEjFrisV4K89pREVWpQxiduS2MhGDVt1Amh2W891aRdu3JufqfJTgj8X17ZFP69yfjm89",
  "key8": "tHAkP2U6mTL4ReC2oDgZwkN8BXJqwFxz98yBgbBGtY3CNwN3ZbXGMTqzfFTtPekaXUxHd79nnt5MUMS1UAcJ3mp",
  "key9": "4FPGt2ZsF7ZQm5oWLxba4qeZW7LT7Ckb2Y3DDzoboedsFmXo79emvGQa9gqkoZg6HQaMvhv9ahpdjHeqUhwbpj6Z",
  "key10": "28KWFd9iJx2Xk6kvPLs3ztd7LbFYYMrUth7BszRUqE3kYeuhitvtpp8j38i4KksKTNvJ35poUBioFviCnmnzazvH",
  "key11": "3BeLRH7cu9a5A94M7uGxhHxRik2yqPUqq8m3mkSMRVSjQvJVbFSmia4o1SrtDxiCfkywXAcVK5EoFLXD4fwq9Xbz",
  "key12": "3cY3uasR5rW4yvKWb7gv6mVuFX7TMF2R29HFE4Z9FLzf5MnW38ukoNnfbRdm4srcmWYCc1apEzomAmvs1J8WyC2Z",
  "key13": "4yAC68VPMkdKAifRAJrqE1UCzdzirR5bFeMMX25B1VEK5Phu1L9LLKZhtgHMhqVjqxYg3zrTuTTF2VSYdnw8BNrf",
  "key14": "BmiBVFfw5i68fLCNPcNXGRWR5UKGVk82rwSWLtJgAPGTXw1o956s6DuuM7axCnotVKxENC2vcWhvRPCYHz7zWzp",
  "key15": "28g7fjMyJE8YigVC686TAF5MeXGzMaSkZQajU7G6hAiq7AcMwcMRrXckdUG9sTjRY3jva9vwbvw1fdwdz385X4Zc",
  "key16": "67dKbJhxizYPmd1mzNgva5fe3HyGQbE23qs2GiVybp12Mnm89jZBPRyBFvFtHvTuFaG7TxRR6Pqc6PK4uGhHeWEV",
  "key17": "5mUacC1ovCp94SDCSXQKJcAqfWEhsgAqjKceUAUQBP7G12CVQYjoqgLPNS1h4XLeTmgSyxPb3gZojA6Qr1aH2R9a",
  "key18": "2EymSG5vkKzLUVQzXsKKor4cNNtffDPuy4kkYUeQWpweb9bbXKyMavAs5eZyyNowrTZzv3YKj2g424fXeEJZ6Pk1",
  "key19": "2iKWVqryRKoYeRL6yGhHhoiScTnX4KpnktRbzV4cFp2KBLQpGhnNRUm9YeYJiT6wLTp2urc7p3mAbh2jgpMcs5Hk",
  "key20": "4tA4ZRCVwwu56VuTXzUJ8nDE7RVdF7qPvp5Lvwv34YU8VYSQqtdSGT84A2JUwSRsTmcV5UCBr7AWF5zbXx8qVLNM",
  "key21": "4YwUnuZsYpEhTxNB5vbHcSFrL7sQfVE4B5Kw6yyh2SPrMyxTmpA1ktbP87btrrcYShEmxh9WgzFwRdjsddC5WUww",
  "key22": "5MovcN99DK1QeBFk8USpNHjjpcWtMy6jYqr4Ju7zCvDgxRgeqfBm9QghXUhvpgjP4dM29SvmHtjg4vHACm8Y1G2Q",
  "key23": "3TqFDB8LCxKRJbEVYKzi8FyyFNXo199bAjpt2NRJMiujdUyaaQKQNXyEFDDjzAPDwaHa3S7PhFXKFJdFPiDkNxDy",
  "key24": "3v2rxEQ5bgusHn5NccpFYnwPWGH53QVMRq3PZkHdXivwoeXALKdAJjZUjjhNjPqUySZAnh8vwajg2Jsc9XphyAdt",
  "key25": "4FBKpNcFCYY1anTwynC1E3jzQbQHD3XULgV1PtXkzAQNbmTNaQoNEdcyWALyZp19ePDgzSvG54xVVaEqMJ6KJ6NA",
  "key26": "4bqWiE1S5xFrxv9Vpz1UhW5tKjpB41p4TQcF4R7U18T3TQJ4LWKcy23Y4VYtfvz7gx5si1F7Puu1ERzWkLZ49jAW",
  "key27": "qYFSaM1EbrLVj43G6rHHr3n5xdfaSBk4rtTuXHaGnGwafeDUD8qc1k5myxeQCzJBXuCjYM29Hchvqvt6PTSWEN1",
  "key28": "2wv66oMddkwKhsa93kyhz93fMS55F2TeajzWJwhadaX953K4iQFbsjoj76D4xpe28y9ZAp3ixunZyBUK1nykbDTW",
  "key29": "24DL9FeoGUFtsX5EUosTTU9VMKpyYgV57daq3GWNvvAu37gyh1CohELYkyEHgA18dyNvd7A73WJof7cfpW6gvP61",
  "key30": "4B4TDctM4kVf4HCmfwPmgJQEn516vi8pufh1rSBMeCw1WUf9PjhwhMiMWpaD86BhcMuPt2tnwXrmNPYrjjr3HSDB",
  "key31": "5SyERv5pGQb6jNZa2xWMPCUcmXuvT3ntXsPztx2upabDzCjkxNi2FwEyTk2r58jMTGTtUrjryEKVTKkF6c6c7Y1Z",
  "key32": "3GnyjQBuASDJNk7CKVwmempR625iy3jQ1MboyFSrSa22J23xbGXecrxLHnLAHqf1osNpjRArLCPN7o2pY4KzoDDz",
  "key33": "3sYQhf1imwZeW4BCEAuMzqoVrsAvvShqkBKzgiHNsbd8Gjav2iLnyY9KpcwmJULKYKN9EgXLLUU9XfDS4vGR3WMd",
  "key34": "4ZUZadgpDUzfgT3P26wUPQZptEE3cKYeVMkQv3KGqm8jsEAL2NkB1BffFrvXMu7EKUBo57sNPTadyLCCQj4itn7F",
  "key35": "4w6VPmGzEFy9DVte9SHXr81tVCuWjhoRqx1md4Qpq6cVG7mrW9JL3bUPqyo7GsMdwmyMwh1teWtBUsJzsYqqfnwA",
  "key36": "2ye4KsszW9h3CsPxanRMoi6NuNx4i4Fmn3ixyUr3aowAUNRBNkhKAGY81d9kDyiziuTJYGmjJ6UBBoFstkVrgBuM",
  "key37": "29KEC5H7z51LAeVzWAaabLrZWqw4MJf9Mcs1FNY75BucV9gYhcCZtLaSAFZpSEcjv9ys1u2gr2mrc975dSeVa522",
  "key38": "3NPaPDzRYwEZjC44gA6NZAZBaA89R9omNPhGmTv2Kmta6DJSudthd12SQgQ2Vw6L8KZiHvvKpjxXyKXZ83W1SN7r",
  "key39": "3DopXNUrztPRQXyxoxn4SV96Pu5upqHEq2RUUnJT9iak4ZPU484XRcyV8nZn65sgN2hDGpNih46c46FUJiBKnijT",
  "key40": "3pFZwGqGhVPtkJojk4ZzNLHpvsfJRHrWXxrDd3Jz3KPnQ5m8MipuZ6h5MgoF4YZq2EyCvX6LAFpiWjYkA6Fsf4Yj",
  "key41": "59bd8tb8ztTxrnATgTPdavuq4ZAth8UYzHxB3g7MxRyjxzFLWqYnVHF9bjrPoLhdpoGZGtRoaC5d61J4zTQmEBBZ",
  "key42": "5nDtVZNi8jAkdUZ3uteiFwcAP6eKS2YaLrpuEEekSwZ49HAJQrqqKYtPiNr6uqfqMtEA8exZ9ar7oJxqjgDu1PFF",
  "key43": "4UKtBFvQpSJxkWYStfCFtHY5reoqb9dPaWSHrKnYUna9iHn46YSvWnsN97psyooDGsMsT5wT4wb4Rt8JzfouQdpp",
  "key44": "2M3ntFgmFc5FBbNciLvpZ1DyBYEYLx47A6p9q2nnJMDvAy2zEpZvHioC5Kwy969d1kcmhb6ZQUaeEidHXB7Pk3vy"
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
