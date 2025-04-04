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
    "3KuHZHzenK1r3Qwgj5GqJp9nkD3rSpyAopvFngPsLJL3DQV212yWuCX1YkGPiGeMKW5SB24QNGFxCswRd8BP8FwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ysX1EFbZJHJyabTE43WWCdGqChVgP3r7VwAxn5jncBFykov82zCiqiKhHZxvLCtsZZVuMQDZCX5y9ioNBvguaW",
  "key1": "3UZBVskiy9HTMHwqJhjEksAtYvRrjP4bpTktDeLzZLDE7TFXn2UJhA7hi9jqf58McxiaEXJAdRs4LDfvUGhfCEbb",
  "key2": "48Eyfs2S6Kk2jiWf1J31UzoTYKsiBVFnCYAWscta6622FCKcXfk1xLxjURzfVL4jNFkxDF7a9rrYN77VkJrwr9sv",
  "key3": "3t36ShEZr3DrgWfbm7jj7v4tioqZdyrNSuQztZJMUYj8Wba4YXUnvy2kYp2XiBDyKpi4SkTSayG2Fozqxf915eoA",
  "key4": "upoxU7oktoVBUarCwjFSjyQNaySJABqNnAbPmRzZYrLhBtzKFuEipjfaK5nUp31hqvz2HhFLH3qG2b4G6uxNRRK",
  "key5": "5gUF3rLB4GHzYosR6LzrR61mMtoUjXtzyj654p5MxHHFb5qisej71EChN9RJDYfyyPdcjNtTocYZeUNpS4v4pKJV",
  "key6": "4UVLM3S9KQX1Y1GTYnyEHQNCHrxu1Ycom8AJK4X1cY32wMjtF6WVWmDbN9dPaucjfF7h167EczAdKqSsfwUBGBtC",
  "key7": "2eZSJcr7s2bDnc9JrEieaiHtauTieL7DMzkbg1oV3hAWBAeoq8nsMd2Qkrs6UNBCtd2g7LcQQNMgD79HAuigT7Bh",
  "key8": "4Co4ivvfrRpTnNt1XmCgEm6JPs7d2H66UFzYkv4a6yBp93KVEcuaLyX9am61tWcB6B8ETQgRzHnMMoy5i85EyoDq",
  "key9": "5LgdxnvX3eGbx4fKBsz3nDf2DJ6fKSWMtJFeMunhJRethKczqHuu5tzggVqTMFmzFGNWuv4AkwftabpmUS75dCaW",
  "key10": "5Mz9Ay4jeNX6RTnr7egoHYjPHC3MEfhDVWTMSqw3sJiMzYtYGB9VQxZ1TfNsUCT4tEYkSose6YcTXpdSC2wDigXM",
  "key11": "4d7eT5UsN4N2FQpN3ZiJfAbtCkfsBFGeeLzhnovEpkA6GYzCLzAQQjnEDS3NmpisLrSwaccaY6Fizq9poBnkM4xR",
  "key12": "5TisqTaSEwt7pd7jZ6NnxVt1NupiYsi8DPrJgbLcpipLPK2ESGrTegtXVAG24spDTWao9Y4ULmivjHECXb8WUcDx",
  "key13": "2nias9EDAiFkcQsEkoQdHLnBGHSfjBmt4mQJK5o9DFZjoN3fBvKYVZrmRX3yj6aqLmzSUnbZKdKK4dCheE8uWHh2",
  "key14": "XXBA1DeKtsKAmo4p9qaCu4j2DLegpD82WtnCGG5TPMZUx93yBZKtRX3niPN2V2D8hj178sDbPZ4XmM4WYZBnYjB",
  "key15": "2SAbG8ajnkrAw1wDLCZYQhTfKevakZbEKcTmRwrMemR6VCz85JCfdigyqV6edptP5PwtFfoWFqpXM8JhCVVqQzd",
  "key16": "3YeJ4WNEMPZ3urKtes3mTcv2oPwqkCZkhFejxFtVFaUht5ovhfo4Wq6qPW2wTR8b8NZHeVMDzD8ri5RgHEJzaEpo",
  "key17": "62S5ChKn7EWA3CDTcuWESnMCb6uwqUcAvZ6ZUGrjQdQGyK36vfdn9vZSmxwAxt8ZX3zH2tfKmmfTxAkqfNaNbAZ5",
  "key18": "48b1ap1GVmrFKTtVmMKA7jkTEYWyD4FpTZouhLmyF8DHsmPkA8yENP7XgKpqAxCcUZtEhRJGRQLKYvzeZiyDhp3p",
  "key19": "rtwXZfao8cpHmPqsZxva1JvdQvXGctnU5PufyZrFhd5UtUnqkLqEH4Mbda2Ety6rTrdqpaJZQYb5X1QYUhyyqj9",
  "key20": "4jkLNMKif31GHWRp8sopC4QR1zCQhYp44aj7MpMM8WG4wdbtx6pSWV9YhRN5m31aJEi6NbFf3S5zWzRM6q3rpUEw",
  "key21": "X35HrktbPTe7Hp9MVqwjwTaoeS35oM9ZnpqDQEGDLAKUTVgVg62aCpQEzUTRopwFH1aqTy2kdgS9UuLBvBTiDr8",
  "key22": "QkVhQzzveMbpr8yNAPPW1ZMDUSr32p6xP6JoKamoVHvFqSM6h1E8MyXfhVnaXEsYsYBFhHmsCjH5FNYbNheGJyi",
  "key23": "56TX2qZpvNpEh1sjCQZN46NL98tAnzczTPHuCEVjQvfdMjh4in5AmUXYTPN1Y4paxUwQzqDtPNC4dQmAVokQgePW",
  "key24": "eFVNrU3rVyPBr28gdChV4XfbFJLi5Uyo8UKQ6YNJj6Zqvywu1i7VmwVoXrUAttA4NAahmoMVWSwYqZhJsUbQb2G",
  "key25": "J6drxhRVxAEHwQUKga9PhwgzV4WgvCExtw8DcS4yYSH3YkfqAvkQPmLvhrRZiV4XWmjekHD9JQAEvh3d1ouMABn",
  "key26": "sdTS6qhVQpNvMRoW9vNMj7jXubdEJxkiKFMhGvbKaJKJadpMSqaAXReGKFVLCvRQscQWmHWXNJjs6C1yVRn9nvH",
  "key27": "2My3W1M9WWr2135AgQah9YuNSqftxHSkVtmBrpfmvTJKr4FTh7a6mwpvDZDSCcSqjJ9CMt1xTscHAXhtKXEJAH6Y",
  "key28": "4mf8Jxo3VByjgmWQZJSwR2RNFdnr8LmtERWAKiwqHomR5C4jsvNhxzWgR6MwXt7GY6hHdczor1fsmCfunMrm4pho",
  "key29": "3j2Dy4AmSGqVxznJkYwohryJUCUFNEr9bMkNsPzy3Jg9j47BnMjkrRFMLujBTxsXYPmViMFYpaPd1NXJyt8jPm2T",
  "key30": "3u11FCGXxeBxBsC3zsPXre6aSeDptLmCSJ8onXb9bcVsWjQTxz2nFZUb8FkzNX4pw47FLJihUd49yypAJDTTpkbE",
  "key31": "yYpaczFy3MiJ1QcPxaW5yUCaTzcLNVnCJ6AebKhcxeKsU6qqRRfw96GNiitnoK1pUy2aaj454FSpYUi8CzV2z3R",
  "key32": "5zgzAuiFDtVVR8DV5R27o5nf3q1cgVBL2VTn5o7b9MXyoFTudy9Q7oMi7NerqMJAubLj9DMy9dc78KtERrhe2rU3",
  "key33": "5KAYPgPj6fHdnmx8FPfu7F4v3w4bhGLEw4B2UwmfCVGA2SfZVS8reVcXVxmhmXXfpqwyscVGZYpqKg9wkoui44XM",
  "key34": "67afd5oM2A1TRrg9on9ri74w2c4RdnAu8RqgAF7o1zUA1noCQi2seADoAUfNCAdXaoB2uoyndf25inw3MoG8bD9W",
  "key35": "3tFduzrvUzWkgNKT8gk3HedSFi4z7AEAbUxaLcUNjPAVGz341fxtFRnrepgcFgQyEk97DHnFrhUWStYm1wzH6Tga",
  "key36": "2wBGdTuyQB12qBTYGnKgqWQBjxMyTTZmtMfWWaaQ64RxLbLRnLGWU66FgarXMrndLfwHeUAUXBfwMzkgUz8QCbK9",
  "key37": "3yuvoiWZED1shvr1ddcXtPP4cTVctYtnjzCPQg2xJNAETEgyrRGMbY7DBjZUEPokVWmkLuVXhuwwKeJrZtEmi8oh",
  "key38": "2oKYyAVA274aQ2pHKCK6HipbF17KiLgs46czPHr4pSWh9S4bXeErGZc1cFJFF5hr92w7moQDeJsE58txZPyaaQKM",
  "key39": "5b5ATwSjfUDN934FSth6RQviTspKqyRNBYchQbCdnKNAftBGsW6z1gnz2vBsca3eG49GmCiAWzyjQPbacvSSviuo",
  "key40": "4XyReEL5VpYDBWjAHbXLCaj2b6Qa5gm6uYEgge7n19pmt23MYtEE2TDcYZDXDm96adWVZHNnEYQxyFn8aKY6fCJV"
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
