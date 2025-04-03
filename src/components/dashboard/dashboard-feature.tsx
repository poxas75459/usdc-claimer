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
    "5PQptq4iUhFYGKeL8E4h7R537GGK7oCyMTmhU8Qp8e7FgQzGp4FzwvSW7iNUTfFzmtKiCDNxG9HsLJaBnZhAJv58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLpmdR7wSxDfiZjWUuHLssX2QeEGBSdjfAtPaMebpMDhimnaiFemT1gmJJz3iNyiAUpjEFTV22CLGPm25akGgNC",
  "key1": "4hKhMFoGJDqiFMkQduduEkiHpcVa4AgjyjbsKnCvq85gwb12y33qs5snurBP7Lc2gXF874nbdYJg5gLBJVQtWrZw",
  "key2": "2eYVGPzy5y7xtEV74PKiJQDuY66LxAFvNNgpFVShbLWaJoyVf5CkUgWDhtKTKZoEUeouY1vxwmKBLjW65xA35asH",
  "key3": "xHmZrya5hCtwKhAfZXyMTFJPPySAoBBdrbDCWsFQL716tDSpWbNcTDbmT7fmN6M1gHWuC53GxTBNxAwwzeQkq2Y",
  "key4": "2Dq1JGzL8jqtwCcLAsh6T4EoXddN7vsDT5LSDsUsyd4AE1EGGrN1BWXLKmR1pJCAAPt3iy6yQbq7p3CjWzYAJ6ge",
  "key5": "3bCJLa1FzLE6mGVYsTyUFq21Eb6sDiHssL95THEv1NQ8Fse9MVzu8TmknSYe8ZMxfzHWwLEJHmXeUZ4SJ24YgE3R",
  "key6": "3Ryq5PVN5cQTG7Wrho6aoho4eqnUBTmFTy9eTr4nPk65FhcTvNzN5NhZViHm5RfHCoBErLv1BpBS5krbp6LMM9rR",
  "key7": "bVZEBX58jU3Y3XUsWUEf8zvuF8KqinHZdE77bssBe1xhA4ccwLQryXnnxtPZRxbju2ZmMczT8SH3m1b291EHm9y",
  "key8": "wv5eLuj1gnAWAtBk99MN5gZYTC9kKvhEgReB2HrY6Fxp72r29MSp6JWcfQG6Y18kskzDvYwohhuaURBFfN75Dm2",
  "key9": "66bu9a56fTyYfcWzR3wTbb9GS7DfWBj5FvWv9KvCqHvdQWPsTNLjRMCKzsYrQaiecWMnfLagynXGVjQaeqmbsjie",
  "key10": "3FvoK78LN33G19bp5723yietz3eKBoakqPQwZtbUUgkdhJ4ucdTBmeMkGE8hBXHVs5pmRAo4S3ftKMwMqxcT1wo",
  "key11": "3Aj95Sycu4kgpLghF1PZJ9AmqLrrj62jydp1Xd8BNFHWvh6WmU1RWWd3eD9iGa6pWzh3jqGh5r524WFg3oo9s1Zg",
  "key12": "7DuwffRvNE4eMVA3qsLM7LDGU79EDTRCxMSNqvFsk8wXTRfaFWktZos8Cbw492BAbhaMiMKq7DYbxXnxWa7LjSY",
  "key13": "4bJxdtSfEhvNZeiMc9JgEpHpWUvePJ93d1aps8pJ95yZGTj88bBw9y3ENcpPXkEyjX9CjjH17X21tfunshezsX6M",
  "key14": "5UgmPtukYMsGgyriUgCKv8ZnjmpBeznqDECzhnDAY6Qtd4ebVFiNQEA7YajTcorhC25sUQQZFUKteBVXFzJgqvrh",
  "key15": "4i55p8F3THGh5V3aCXhD7t5SoLpU2ho446Nvey5ohkYLU7Da1XK8xiwRz5UHzu3PestKB2WNmWYJ7z4dttiuLM8m",
  "key16": "47brqsJS4ncxkGBUA9MR7hQcB1b1awntEbgUoyeCXyq1vqRe1bJSe2u4Do9iuyG6Uqq2m9LAWYd1eMR9zUj5mmpx",
  "key17": "45QLE3ozbzLhjbKJuFuL8yXtUBPwAY5qqPQmkGa59aEPWH9SLmPnxqtseScoDbgMae8huyGvMoYGQEYwhp2YkFvb",
  "key18": "5WPXLMwTJyykGh4mskd2QiMxm9qmJum8xW7jQcmvvu4Saqu4pwKFaMwQzCe2Kk1vawxwvBqDzUVppprbTRGApt13",
  "key19": "JLnTgFmb4Bi8yw4DGw5d83XzjXvmiZ12pqh5dBFpk7pYmRL7fvgCTBgPj5g3d2NqJSvX81VVrxonhqmEoQa48LM",
  "key20": "3o3DTYf1cAwbSvMpEQPQ51RHfP8NCdiXsKy6bW4s6uowLTM1a423W9z5gXam3gj1vqCVAHhgtKyXrmS2NcQvKVMP",
  "key21": "BGs6ko74g2rvMjFrAbPDVtbVBqoj2AypQK3mYkBxVbVahLAnTrFY4sDPzNPrzDEfk7zmUhoUQXSijkLhhHGDpVo",
  "key22": "5XE6hytf8y1XW9jiMNY6NDrZmbgfthWPH4NqmwURShMpYZWPPYzqMVNAbmWBMBPEf3CUyy4VM1qrcyYytavpo1zg",
  "key23": "TnbjdgeLxHNPkgGTWvRS1JHzuSZM1ANBQsnAysK8Rx3w1B87i9WUHaNg7HVLdRmY7aE2simH7jwJXwLQUM7Pe3j",
  "key24": "4eYsvUb8WLvzWFZkobrnbwADoW8422Fr5ZKEY7MVLQtW5K8ZJnRet4yQpj1aRjBZSq4R6U4pHK9LuokE7cqdm3jj",
  "key25": "3f5K8QkWJkHmJLge44L8Y45jbZFJ688k5gYip8bVk1z73ev9BRrPWCrpV8d934jRkDqoqHBqMD35WHkanK17JNda",
  "key26": "4BkmdDpPFvwfgyf7hSYWFn473RFgBZ8xZ1GT7S8fexPqJJzmhPC1PTgrgdTSf2bQee3ojL4gyYddpFhZYqbC5NoT",
  "key27": "4ekvYVjJDuB6wRcjFZ4DSCxYpXqLHwtTVLvNRTTePzKm8G3S6BUDfmRcZwSRtWubKwmqfBRYem9cQvnp2wBkdzhN",
  "key28": "4wKiiPHCbThBvpzqWczDGM6EWJUcY42sb8J4sUYHyDgccPprBSJE23Wg1dfB4oD523umibrvh5GMBa7goYmuhRvQ",
  "key29": "4r1iBQNRD2zfZ4W23vrPczeTDjZsq8Tzgv4ecUcLCVEi5ughyCPQrTGwx7x5tozG9NLXdbjqwkzXzL5iRfq3QcZo",
  "key30": "2eEeJZjQoPCvrfypopkSMzQNCqQGn6Gn3VQS7QihG2HroUJ1cirsPygZ74EHoi5tU62PtYJ1nGX6KFWkK3cYdcHx",
  "key31": "45DmcVYipT9kkaDa6g5dEx9DXLnWgXYyhxRjntV228gEkTXJijrgFa4XN8ksZCyqm9ohr4P3LsyN7KjdhPHSF1td",
  "key32": "45M5fcoh63WFUUaRyRRnubgz3YyFF3FVaP55mm1zgeJrBJAXn5amSwce77phDvKNaVPn9YmSaWfoBdNm4gGwQUbC",
  "key33": "3jQsVbsrJ6Kn1xZcnPGQg57mTqLvXfmXPtfzMPee2ZRM4o9vCPV8Eb3cK7EeuEpFXjgvtKrtCyqEsEWtg74mzohH",
  "key34": "4ZyYqE6wXWpC4jgtYU1TVGLWbGji2v82NxPRci9WvSD7zQjNAoyv8Lvsm563c1x7T9pSR2vMuqkw821JAXq61rPH",
  "key35": "DWR8Hr1a5LPSHFEz8uYqRQrxXqo1tFLQmNFTw55fUhMRLDURmtWqCU3s93m1CeksRLumdATtkiS5cAxEQnE5hsg"
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
