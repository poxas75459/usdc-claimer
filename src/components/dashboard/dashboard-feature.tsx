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
    "3vRYPqBUoer8RpNwHViMznnZC36EUtyxzJHn94PaSVdpTpvzTatJ5fBrtvnvemR5jeYKGwBsXT7JmXS2Yu4JcpKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Efz1UsBzS5PBjvRYAzuxC6LLqkMAyjFm9MhennwMJWddZ5jxsiZzYHWYun9Uj4Q1AEey4FoDDKYcjc1qjCcvMyK",
  "key1": "2L75pu6GkVP8bCpizXdjrRb2K2e3PiQmeV2pSFXSywNb2V6Si8afJJSRoLoRHQo3CQde5oqhVht1fZR1ECACaRrJ",
  "key2": "5QMs7q9yP7q6PTiH7q2QLZ5PJv4GnSPqMiiBTPMjfjfVtrVtefSYS7GDNyb7DXm2kdgjKcFahMcszMkqP2iFK7fp",
  "key3": "5MG7sKzSQvjDczkePG6QUrjnGFBuqmP4sPaiBhc9puYDRBaFHqXUkK3ZXYH5UMggG7ChgbLrbSoxz2G3DQ39CQ4t",
  "key4": "3GZDmapWqFoyJvQXhmB6BCdLxPJ272ESdmTbDJu5NEm5Hu5zxqz7ePQcxUkxD8dq7g4B4hbD4m4REzLVCgv33dQG",
  "key5": "5EA69f2d7vr1kqRNUDjVsanp2oWzodwV4ya6p9KoomTHadJCCr9PrQ7EiQqnwKDWRmZXjV6vSvgQfU4AVbugMpke",
  "key6": "4BLhczaqXDY6fzxRXXudzNcZZ6o6GiFwXjoCXNY1WxhnDsL3rtMxgmoJuUWmdyWsNQPKBTCaQzbARzSpQcMWKWQu",
  "key7": "4bH3HYSTBFJwWRJrnsS7LBgnJteKqTp7hsCzSjM6SGrYfSbLpx4ZA9Egh3uzfbqj2xzgWRjHcBdCvFhswxMyhvUP",
  "key8": "22k4xRVqpr8KvwYuQaPqeBMRHBGY1FYc13gLybvz4fYcXNqAp5jvFQLSapKDVzkHx9UmbW984NMaLjo91XGLzEtF",
  "key9": "5VcCaBmmTaJvAGqccTNuEwKnDYoJZFa1GRka1LdYGgswbz9bDYovFBzatgdDAdRahqkkbXud8xvkHkzJR7LbaQMk",
  "key10": "ZmuUA2er8ASEDNV8Bgq166G1ZJQVTcDQtp1ruxkRjy8hykKq4asXVQ4u7QxPcSvkPTf3mFYJJBVEP4jzAiiqNef",
  "key11": "2tdL4AiqgaU7LsTarp9smkGsLxnkjXAuMuPeP6r2Vefn6GYSgbtv48nPj3hwLZWPKjf97vQwXgejG4r5vjnW4pUf",
  "key12": "5fK42MuBNiuWEHXgdEH8ZkTrnuczXxQa7etbmVs4CCnKCmHXhark9yshq6iNipaQLEVsuX3AyNxAXatCZ8oUHjEn",
  "key13": "23xJMjVVh7ksR8eEjzmq3HCXLxd9GnuQAkVDoN2B7iVghTAecNNruFybtjhAPeePx1MBiWadydkDQk9s1R9KjvVw",
  "key14": "4KxyqHRQdfiMPdajm9zCp41VUVW9NcepEXZR9yni4sDGc6UZmzPzA94jcRfpF2z6gXUnupUyN15Lx1xY42EHNZT8",
  "key15": "8w5whfZi6sQ2QY8hymsMGkpY11W4iK5iFtSwNkuNEPJw76d5vz4mVf5zfvmZzx333pzp96dCif5rqphv6m1VMzv",
  "key16": "4YEQKvGdDSmxGMu485DC2Hk8SFLUBzPMi6zce2rComrxdztuNqTjdnHy8MVpwccqMuQHLVFWw6y1d58zPUvAnCtA",
  "key17": "Ssrts2NcjKiRfNDJGHDysR64LLstrbuFWbJENKuED5U8p2uiyEfpb1ZmmPfxpp4ynuZLJtv75g52gjh1am66yiA",
  "key18": "QFDeaL5AnYJNyvaVwxxom9nQP45jQtwaDUqgYigJrKiHYj2TisfTEiy1yp2nBtUcpdjLSS3UmhT6nPJPcApi2zW",
  "key19": "4df2zssH7dMjBsDq2Z3g6W9MJhQQ9Q8Cfso1oiMXBwq8BP9Ub4UhFiLZegdvMR8rMvujr5k9sXegv6WHRgoJSwiU",
  "key20": "37RUBrc5vfPQb4LugZJWWct8sf5S6bQVRkLfePY6SqWN6BnBgTKStWSLtZEZdjm5FbAe5wZTJn3vrQnMJRJ7tPWL",
  "key21": "3Z64ZX8zT2KeVdiSjYDm97zpuwKeCVKChTAEXkv4bsaeVrv3K2teBC4nYgsUpcQCZVDYyjqGieCft5yxLjTYxDq7",
  "key22": "4UxGzH4e5Ku1ParrDhAz33nUtdRfHW9eGcHDN9iA1C12HPgSA9ZGxC5YSbsbbgPHXTx5vZMYfMsTPWvf4wDzieq2",
  "key23": "2FAyyjjbPGXdtn7pwaitTapzam6nzNdTy1xqcjQtkvfRWa3ipgQhGWh63Zyke61TeTYvUB2wgf48JR3euJjdRiLc",
  "key24": "2hC4eoDaD9BDY9LYFTzV9SDywqCKUz5RuR2pKoPkpqTt6mjUn4kPguLFHiPTCVAuZmGFA4DkZaE2pUHbndshGgMB",
  "key25": "2p2Hi4TfcDHakMXCWWviZXkbtUxVyrQAQDMcrzzpkzrZETrssYsfx7YZTLQzkFWKpaAqjVmuxtoMLofzjv7DMGWT",
  "key26": "38zQXiPRks8pMy2xdd95wnVSPDVDukYiEUz34qGrFbitHdhfyZMeymnxQhK7R2kSFzKeqcJfeB7o1PA7fG7DmgBw",
  "key27": "38n8GvhNDXQ7j7LEcFa1KR9J97sWMJUBvsFNDvd8ameJZBBdU1pkVLtxuAwPX2MUj8TFE5n3MY6ieBWwEKwJc4ko",
  "key28": "5tcBSZ47sfifQjPMM4btTRV9SXfZRhemWMUZ1mn9ifsNhyM6cp79h1aWZvPtVxh5GsiAscyYFsRc44UaLkLJ4Zny",
  "key29": "5h4HV3MmLavtkXJKrMftXGvLciSBUzFJC7w6v5FJfQxen3GCvmuNtX6Vu8A58pVMiAGdAKawxrPzk1mbjRcdAj7h",
  "key30": "4oAxUWW8sLF2XLNfxBmN8ZWDVPaLTvC356RHQWa9q3RfFXAUWMJFLTkarf1J81Q8FomPBs33dJwPSKsVPEZjBw81",
  "key31": "RRW35n2ZpJJVE5yjgP5H5nGxcukRNmSoR5KM65DmxZG6hCpeRfFDBW1T8vhQcZnAYDhKdVbi3kn5eP1JmCm3EN2",
  "key32": "2yDo4Z6eEKspt1WBSQcc4SkvSErCWoDPw35SvRthuM5gYGh8bkh4WkiNXoohrFD3Ju4N8Tdri1vcd2zydzQDXsfQ",
  "key33": "32HnsbugtfktnQKyg895AJmK2na9Ec9hQdKM7pwd92yhqRu3dAHgkLAsbwg4oATvz4YPnhZ4qJgq726dqTZQc4Rs",
  "key34": "3ptQoZRKZoYYP5C4bDq7p5486fdd5tRamewPYTaMjdrM26gbDMUzgTZhLG9JeRDoHeg2Dcrjdwe6rvCaX7u1MXoZ",
  "key35": "4Y3qvWeJNMpiyjdjVzmNApNGAJXAkVF4WiGFHNK2Vic1ZfeiCa76gmGGTcoDw5cXHSJVh2P81YEC5Sx8tsXpCDxT"
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
