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
    "65c1MZmwivins4KbjEmdtZF1WWfm557NgKDC4UuefhPzLbkT5bXELSGgbGvX3pioL78xMkMk2arLU8YiWH6wsWZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5USeZTUaafsHykLddXhBcmE81NxQ1mKyLLfNDr1L7LPvWfeAArfYvmTrcQBJFEiW1VoAQ2zSznaED756cKAarJnA",
  "key1": "tpx9zQahFFC5YDKqEFuT5qqJ9joFboPkNvAhV5nYdCqvw1jgxTRSrRnQJGf2z5TNUusiSGHJVTn45Mgy9uJh8M5",
  "key2": "2qvaUpMifJpAzLTLAwmVqzsvvwVLbXz2fipCvWE1ozRwMudrAZc8EF4HF89hzbFbKw9QHSZq5UjcT3NQbtnD81Dd",
  "key3": "2umB1whP2zSnVj1pRTqWsZRaaE2syKyfC1qVX2Qae2NJgftADDU8T9tgQDf558qYd2tue7ModBD9UvhcosAPznh3",
  "key4": "BtBH12aNNdh4NKunD57Wf4ENrcVDZffLnEttW1TFSZ3eQ1RRADQ5j5kQep49Xgo7KQJqmQbkFeLfEJG1WFkKSz2",
  "key5": "357DcnyXKodkt67AxddXaujb8SUZgGgxVMrHT8WKvwtFYgUgLbVgZc5zLjLnfM8cU1MQcVmHM9abiuiC5rkkqY3V",
  "key6": "3nsF9prsSQGEiUsTrNDA9EX6Ts77W3jLkv1hrG51YgzPYqe6C9DsKf3bLvyQ2hybY1SnquCmNz83TNjWz75dPhfJ",
  "key7": "3nR2poJ32hhMS78iohnEe2M77dMWPDuGrNKWUeroW19WvfYg31bt2Q1bSJyeGXfzhpb5B7rx9pYHw7Wt4zZok4RX",
  "key8": "4s4EP255zDkXygZnU9N4UV2KvmCLzs3nAhEA8HmsJcjAzLtcQxbPcqufY5hXr7NHoyWGsBVLJjcTqkXex48H5kAc",
  "key9": "4Dyc3mELUphnRkHfrE23on6cjDSjPnVx8aLaGpjmwfvxt82ipVdnGVq1VccZiUd9cL8iZyyoKqsje2idQ5nq9fBg",
  "key10": "5znr5YzPtdziDxRseq6cU2FbJMfAvcajBjA6wz8AQzp6JV2zhggPFECM1ekPYxfJeZKeKWiBiLKthX9r9ckpymYf",
  "key11": "GcWZzsHNkWxc92WLpfuo8amqNAvoPP8nrEegh5HWh5pRRVKT4NqfwAknP1CtBwtGm4gyHNh3bAhv28UCsA7Pzv3",
  "key12": "PcXAmeQdERLseYpB6aqRZCEZHXXFFPaQ1c72ZZPPbixHDUUVxHErh74NsbFSuFj4Hyr8LpxuSf8NSJ33AeXf7Yz",
  "key13": "s8wMCqxmtYRwUiGgtQgdnVzSBvtb5FGeaxmTkgVvQJcbTqFxh6hZMsqkWHfjaUiFqYdwxf7wsmRbXkwRVyMLkBb",
  "key14": "4kSBMFeji81Qzm9L7HWsMmFQ49F96x741ddMZtR6j1nCb7sgt8jU678pBMg19m7eLc68KzbaESaZvYaBQvb2pAfX",
  "key15": "eSx7HvWhBwR1wKgTsRVEMwk66q6uZMnbDs9KQw9tTH5sEwArgkXaTNocGKHUAVnBvRL6Zy6e2fMhbD6rJVDdQcb",
  "key16": "5xXE1GVn1zJwpny1PEZvZM17qcbXCHZ4Zrb4fa5JQAGy6uvwLqkbpY7rVvRiadttoHWLNfbXfSc17evx962vebwj",
  "key17": "3bmGUtXTDixsqbdhRfMcyJjzbXfxmeznpMaamqa5tvvr4FwARbbWMFer2hNFxkKKxsLUeUQx17UquNDUs26rTdhg",
  "key18": "2YrwFwEJEGns7S2RqGZ4m8LKaZavfr988QkvXazcrYv8tUdBTRWDSEKdKFRJ6RhDfGDaKcP3QtCZGhk7PxtJVMuw",
  "key19": "2MBMiaK2s83HKJHKkTAvtAT7pTWoWUgPfnnjura9yu3CcSkRqnFF6JssFV6mesiRMoZ41dUwoUb8q8VLnHJgDu7Z",
  "key20": "YfPL17Gv7PqsQadPLd2S4myKBD1rKnd5sXab5sRJWXGTGr3QdFKnBPtbso9TqN8kA3Kzb1JDcXvVzQszwDBnvN6",
  "key21": "3H18uMwxQ4ivETmcMxuaMVFhKhSr6xHA2XJdJFJzmNu2Nv63J2jx7VA4Qjno7mQ9KToiSrQi3TfnSCBhM4yseCHa",
  "key22": "2zNJDnAU6LeExZdG1yHw9EJ33FUGgxycaiv9NJC5TebvuE9EzeKTBTgxHakvGj1x9v5b5uKC4pMoj9kun4CpfyFY",
  "key23": "eqdWe1EpfkrZV9rp35LwX1cAgZkgNtTZrzBNsXGiGs779gequiz3GyMNsqehLA6uKdByMu3BA7PfTGqzQJK69Di",
  "key24": "5BeDdGbSahRdyR1KHRc5ckAGoGbiud5g2raLGdCduM8bQKoLAXVmdok38W3CAVCpDzut6CsbNc6FkvSgKyZBiZtB",
  "key25": "5pfs4tkt5E8MuAvBHp1yzNXQ8uPYdbQwtf7WiwTo6rJTZRW8Zp6rmKAK8rN6ExgF1yrsCwkvexyihYYLKV5xck1D",
  "key26": "2fXSpbuhLWeAJbYrjPYKucmbkH6BsWZZovNqBRoQixQMVKEGojYTK7nsFdKSugyWnBY86LPwggPcyAZWaPDkNN3F",
  "key27": "T3cj1Y26hLnZGDEpnxPzS92Put9k4Sa3G1oPNnpgLmoUJis9ehYprhirX8YapU2qyrCdhdWBPfckvt7piCD4WyJ",
  "key28": "3JvrqWgEwMu9mgvmb12vkRcpbuurdSgcrp8agovMxm2fPpwDNBjnPNN5CanBwpgwJANX9YqdxhBiYMS1cksj8U9a",
  "key29": "4LGPWzLkJaVNVEDLmdf5t4LwetuFTQbVZAeX8kX4enyRKNm9qvDviDKYsKe7mzq8VbypWcmrMBfHjH7JzqEZQPqm",
  "key30": "5BXVcNLSJ4usyjm7ZdDtGhEFeBTV36qfxv5XeASPvLt7K4dnf9y4ioSzwMfuHVEKoVP13AGWn7gNjzE2GWrz5Tki",
  "key31": "4dWBLuY4B5MnaxjrSV3zkKopabsNH4CVQ6FNSadZJMwjFkKtGLTwhyocXYc1VUmuTE5y1i2G8QWhiF72dsX9W5jK",
  "key32": "2u8yarc7CHUkV7dYQNVBnZVXti62eESzFwJbpRst7xYV8aU54Mfm4p421D4tKWoAoZSTwWZa1WK1U2KQoACBbBra",
  "key33": "4nq6eZoPRJRZqbTtrvD8S8gGJk924er4czMwgvnWEs1nMa786G1sBoL5bcCn3nG3FpPqGXxn7JamNcUzoKenLVYU",
  "key34": "2fSVojKv3AuMHCv9BfCeGcVyFXEowJ1tpm7piDFTAR3nRhRnYrJtkA1DdHaJ2PhDE3JLuA9nxkA1ZTWDNoFZv2R5",
  "key35": "5dThRpiUaLUzfVkYr3g8uR6DjwBJchC2wSrLtxSk9jE2KmoRW8qHrfH8aXwfi2NjgftDfSdM2rcaG2hprHZagDUB",
  "key36": "NFsvPM8YwSfW7QTSM5VQHKySwss1iKPHW584tqPrdBtQgNPumZdumyG4MHtraZzpuAy9Y5gUAsAk2co4BRvWJUj",
  "key37": "4Z39eW9yZHgdCRfiXPMyTxQrXD95U82gDFgUv9QB8Qp4cjxbwMhFAG26wW62VrQ3jZodMJXsAQ3FT2Ez5T5abiGb",
  "key38": "5gREtR3xP1kWPWG6j9nmBpVvNACsa2kVsG1iBqrgLT3GoTVkpjsaWVDYrJ1tLB2ShBLfMqCgUV3sGebahe6w9Q4e",
  "key39": "5dpoQ7f1N8M5zojJPDkdUUHfLLtQrdkV5WeKsT3gRPFRLwqoPJAUGskU9S9iYTk2d8JQXzD8Ahzhm1AGjaBoayXd",
  "key40": "24fczY9mdRHkEy2x47R5TUP2SCSk1jgvATVnDkryxjWenXuuvuLJNzwCj36nR29apRt2rCiv8vWt93sb3ce5okqd",
  "key41": "2CvDhHE7s2YPhmqroHBdcjBsPXpx4ryTL8Nt1e7pf94vCmLksaNtTRzXnhVTyHouS5vCakwYBnGr3bK6LUC72TAJ",
  "key42": "gxUje5QYQ2hGGh2PfbX5VKuC4KpuXnWPs6BbduWpVfH43gwWSR4Z49MYgthGrP8HoEbryCM3bgNzC52tuaQLoZ3",
  "key43": "2PJnRWTJMdRjwDKYLDqybbmfp4YrZPLdpMKGHvPxseGYokfZoBtv3g9UQCmYjt95zDUpAjS11T8z27Hjnn1PpV2C",
  "key44": "4GurLhQ8rNkHSDPyZMTqW6qfoqS8wAeKW3WuA2rtdwyMY58gAshRAT87qSngj597j6v3uRQhoLV98ZKhxHTAi6wz"
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
