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
    "4dAzjCPn2rGVdGEWAdGLQ3uyFkwbcPNrhSyXA4mhdkTJ1nzysrSkn8b7JNJxpCQ9P5LNhYGHAWCAtA1Cqw6zP6fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63v5aQPGfvdozxLU22avgkrR9w37FSrebgzDasxvpNtfRGtBgX7KhQSJDfwuRKMU48iQavtG4THhEZe9qBnfoJL9",
  "key1": "4V1GpkpJAwC3BEWVHKt8XTEa7NnNJeem7FUenqYCfrNqyRA3z7t472UPbJ9PFoCgJVqw6GTKgKRJJTZEcvKHfnAn",
  "key2": "66A8qpbkhvs29sndwh8cYZrpuAmaFazpJLdkoWsoeFDFyM83BbmijixNBvBCaSMf9mn2VVx1hYVhDhwf7WAdFbeR",
  "key3": "3W5MUXRGjg13U2MdfnEogEDpVCkWJ5dMyuHTTbjXNoBZqYsX9opA75nx4uTyksB4eN2jUv18zbLN3ExpeVMWSW7p",
  "key4": "5YcphBdHgyHEQAFBVNsm1MUr63gkmy9pbmWaYjYupa1K2VgU4SekVgnrUZr1r5Ax76kEGQUpFwe9pWVPjS4jyJM1",
  "key5": "26GYsuNaWZFNRSCc5QBJk9MR4t82ogP6oQJJwtojYrBTHXMSb9kghMpScmgm4GCyjV856dX8LPA5b4jwSPMsZ41L",
  "key6": "5nExhFEcXHeyeotDqa5kw5saqAARciuBMovvA1MgrNx9uhiB7kKj6u2dituKzjEFynZhYwyCj9RAzHyV2LKoojk",
  "key7": "5LLX9y7TtBJ3iYJXA41M1ZLQW4NuyLCHqK4SuzS7o1rwfyhkvh1hEiGuJsPB76cMLwhPt3qydjXZCZwQ5sYKu2eo",
  "key8": "4fKeoAwytiSwN1zCNTQ2puXphT6E13TcowF1aBGNi9874uP2jfvUoTDD9FyubrQc6fJKcn3uHrPewiKnNFYjbBDx",
  "key9": "3zZ7ndjWJHLieaNL1VrxNnvbT5TdHioQQ1G3tGu5apwzYQ55jvTKDAV6xqG1tEVNR8dLGtX8xRoyAwWVsRyeFhs3",
  "key10": "67ZG9eqvpBmnraLghhgf7x36jtegxeRHuBSXpvyYdWt2ZiwUM881ZeJDQz6JE4DuURxVoKbvh4aCRabQQu573hJ2",
  "key11": "hb5ADT5aT17FQw3kzdFy643cf6NWEKVugMp5JrBaZLkDKCGMHWFutqDTUVbSfLbdf6P2Tt3XKk9izfAN2rRvPbc",
  "key12": "3TAVZ1nnK1AZ9TRTrVoydjVPKKZLtfn9mLSpqJZT9FtwTX7doVCrrKi6i1nhuXCj1Wqt7cF2wY1NEXKeSFNdxr3H",
  "key13": "4bXUWe5YcBgJ4LMoFko1trox5fT24H4tWzkFMUax3TGvdxPqnVJJAGffc55j8gHjJsrkMmJZ9NtTdZgKteTvWZKL",
  "key14": "5WDJs8kbdj7BUmAb7Qrthime98PL2wx9ymvMrxuxVmg96GASpn7HDDPUMse4JTsugbBFBMYwShaJxXuHEMdnLuhG",
  "key15": "4GkV6GuWjugFr8croS2hk2NVgjDfBWCAojxq4JqxDMmoMb4wkbQiEWUj5tZT2mHgzL4muWD4s2aUXVHryoic3Xne",
  "key16": "3JYf8mmY2g9dDe2bWnQrzQXPXrREeo49zt72fvx5aBoLwPpBAgraNViTB6P82Bypk9VPxkTsuHhyzVAczGx8qKD5",
  "key17": "ZzqcbQx6itCi39XZi1rZQitAuvLSgQHNsQ1ChQMBqYFHmNMMLxCDYUJBUkY5XCa4TCeF6Vj2xRwtR3Q8AU52WMd",
  "key18": "3d8ZpuzL7wgG1QLjJsbqSxExy3j5NrMy6CUR2w37wVpfDS3CtKotSbebAgQywA7osXc8T2PXnkYSsrkHh9D7vLgM",
  "key19": "4P2jevu4esqUFKJvDVRTsADsDT54PYUQzZg3a9gLu5kyLAqYT123Afc4Hqr2wTmqUwiDPSYeUWPbo3rX5cTXLT2f",
  "key20": "63jzM3q5nCz6Vf4YoEAKE9rtRR8XLAi1UpCbTdYpdZipw8K1YJK6hUpAHHtgezrMxrMujWLyeNG12FafkFnWZqgi",
  "key21": "3yEnPtX7bJzDGjQrFxDyy8Xt6rutueyZG2wV4nLXXx9Nu7NB1iUJdk1jtjFwbEZAqAesqRwgHiPB86oEPCN7aPHP",
  "key22": "3gPSeiZTUWsKcZuHLCYAcjKc4qviwgryq4DpkJ5WQAQ51ybAXdVhNYbi3CPwnWqbYoKc6HaQ3rPymx5YfVwtXNxy",
  "key23": "2vR3AYSeupJxDWnbu9X4z8tLn9VZ1H7bL7PyzxqgaNp8jjTDr9RAfV3tNoECo81bQhEWQfdtfmaFM8f9NQesR71W",
  "key24": "5ftyPkf3eP2rFNnaxyXGjD75FmmEbJRytXpjedtbg3adNN2rpFjVaWCYN4oMpxXuKNMSJ8eHNaAyiTnvtguKsxcF",
  "key25": "3g1ybJG1fNZTYqKSBaNRNayLpBpRKLLQ88taE1M58uWp4dkKUTyiAQ65pdYRwXWv1Em4StUMH6A3yw7igWXGV4yS",
  "key26": "5tKgTJ3gCDJYUC2bhJtJSpNnGUPgi3aAywfh6rShACgUgwGGvCzDeTW9r7GTggT6YvU7ZEkxcQwSNmByuRUxugbS",
  "key27": "557GCo1foBqheqfxzNM9RyZgvzivYjA2JBwtMYNn56TVJhXuZJpVx1k7k7KXZ2A5VQMadAeZASqZpWC2XukxSxRY",
  "key28": "3iPMcLQZCA8UipGUr5ECHPCPoG9jhU2Mz6GVZGNUKH85Pq13ywxCoGAghztEFRygAyTRzUXTjUQQJu2EV6qDK1Pw",
  "key29": "5YSTB5HE3EeDiiQVuThugZ8ec33qpLCZwf22L8ADiGtF5nCn4t1kbvzko8KwNs1pt5voXyGLrVp45DYFcL4ePv9S",
  "key30": "522R5dLs9oqSw7SssST9aXt3mwToWMcGBCCG8XtBXqrjKs1pLwvcXk1FqpTQ1faBBcc6ntjfGUW3xZHNzRuA5CfU"
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
