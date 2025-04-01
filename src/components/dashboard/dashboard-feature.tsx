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
    "3DhtsHjNVxmcR6Jr9w9e8VZeJACAABiNKCxbbMQL9WXEtdNxkTRbqrq4qu2mJrJs3byA7ztXnj6m7zAABb5vN7fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DG214b5KjT6r6N82fzL74q9KcDqg2vi4cDH6WtYMHdCu9zX6Kv8okV5CcBjcKRRpCWmYSDyCEpg3u7NW8Jn3o6p",
  "key1": "hZj5j3QYe1ohZVMmUhCSkQnVLHCLJhcUpmXKmMCYQumm4kGXbBuMYxXaKhvCVGSc4RH6QwFjfZ25gP1hPkWjxXv",
  "key2": "23wWuyrxW9FLE625U6TCAMbuPgrZ6z5DWJaNSGufzbAW4uk1Q2QwTLS5DR4Bokz5sP4kqAxaf5btBbHo1sg3yByj",
  "key3": "3fupLmQ3bxCVGXAn9eCkVEjktaYsdkr54TWCx4rfDKgMqHB2sCULucyb5hWa8QsP5PHm6RFg4aaxDh9yStxGBb1A",
  "key4": "2Sjh99huFn7HPCU8yTWPW6Peg1NPKoZjEG8RTqkoh1EPnwt9CJvr2MawLBURrQMwEg9DL27hytxB2wajU4Hsa5KP",
  "key5": "5Ydmowx6L4nFCgDfTfC8unBJi14gaFqhLu3ket4NUPcbwyJz7AcnzCtQKYGEzHWC4NmzA7dpjT2dXxg88uKk3DgS",
  "key6": "44249NgzmfRn4pxzYSKgd8F2chz59N7rhChRqPipBkLqXMF6mu6aUeYBja4RGCvS45sugNP5zX6yPULnsAe47M2m",
  "key7": "tMWJZ7fjqrG7idVuuqkxk5eJsVsrSUPHRBfogukZyd2ixkqAEGxMYxZojA2MHxUPdwtSUKPmYBEQJibjTokKEEh",
  "key8": "ZQg6RkYZY8PMwYwGdaGn643UYaoCj4QJSAEsJUyFDKb2T2h7vuZ1794YoeXeGxL9f3CkVCFfaPXVXLixgbVVGBp",
  "key9": "47NMTu8KcGx6AhZim2A2EYcbxW9JVbu797Vf3TvcT1syuFFK4XEF12qDu2o9RC2efebHiizyx1vjjNf3ANco7EEo",
  "key10": "3inpRq3M4heanmDNNRB1pK67Z6hrdatEKPkSM5GRYhypoXRCQmH8hBb46y9whrb8kTnUWBWD82KhyZ8Dpu4doWjW",
  "key11": "2Kn5pSeuz8FiBKrWA9orF9vxrqTW9E9iFshauSxfqf4Nh1eG8YrizwMjSmuc454dipGdVFG9HVqQedowUxDsftBi",
  "key12": "2rcPwSDCfz5GTgqy23AJCqdiV2EcXuK2QLqUjLqeN4kh92SSDZGXYdCtEi8RxAKCfHLca65c6wnTeTEQK4W2SN2K",
  "key13": "bq7VDkUW6xyjSskRRsrEnD3wXweesExYSwQdy6Z45Q5tSXwjT2f2WougxbUHNupSfhZnoHLd3BHHU8ecoYKm58t",
  "key14": "3JNTBTkRbRp1QMsuWXc9YLHpK35FkLaiQsR6fjFNR9Xhh4jx46caKe3T8npAMehJX4PCzy2ZnjG4wrWUwFXuxDzf",
  "key15": "BMNVckajHGwRyUsWae63qwvtSmz1XShUhzkUSCNCC4Mi1eu7kyu6jgHJ83qAGdhLpY2VMNu8FneMMHtBJB7G8ri",
  "key16": "5Tujy9RLJnHtN8P89xt7vSCkuhV7KcVPZ9f81Yb21ooajnSQoykMQVmrizwT4s1Vu8yXqNAPy5McgTtxXdSWp1Mf",
  "key17": "3CWQjGCgdfJq1xSJtLzGfAW7XTm6ogY63p6adYw5KtysZGFHPumnh6zJhML35HH533J3vuYbAvb2CFo5J6Z6cQzE",
  "key18": "3MQywJcaJ7cZKBPzSdW5iandzu6F3GW1zgF7uiQyg2SwPNyoW4T9YUAzhJNF6YFsvF2o3U71SJbdFqW1ak33mjSq",
  "key19": "3EZz1fwd9pZdgH1Hg2MQz1jyayJrqW9MYQD7YntyEq331vgydR6QfqDakfXuZh9oiJiTfdM9MhKCqVJaPsrjFTSU",
  "key20": "592518U4ziWHNiYkpVCFwQKryrnKUWQD3Ca8EJeUviH9LRiLzezpq8wUgiuXoxxWmNnQmiWGNRZGKyT9ox5WLBFW",
  "key21": "4eRJX9xGF6GhEtBmABn5Zf9hEa4imtehWjiFUxCBRdd86ophRKng3oqguvLUDvRgmVE2qUUZabr6s7wr5brpH225",
  "key22": "G9ikMhnUAHFJ4AMmPHVrrLboLvSsTeXF8TC2LNCGE6RnmMgvfEmYwBsQjx5WCQmHstxFPYR2qHQEz4PeoDeogx4",
  "key23": "3awYvfqyzM36ZMxuaF1Qu8bpQ59LMqCU4dUL1ez6ajZq1dezLzJR9ymiWy6Jhww2Kyns8A9YrbSy1qmXLUV7AzTB",
  "key24": "61g7cPd5A8WMzCUEC8Yj9Kkue5WsLXmZyvnJpamiu9uB6FxykzzzeiWpw85q6isXeGT4gwUCz9jZ2SbjjdQdCnyG",
  "key25": "2qM3LCQVQEPKWkc3JrUnwCMPoP5mpwCY65AkfuRh9To7JBNSbN8Z8n3Fz8VdZQsmsDufxMq1eEZYTKqXBQHpVZzU",
  "key26": "3wQvKYg5RDpAwANhxGanGEP6rPg5FKakz7eU2yZ13msnMsZwzGZtkZm9x9xDPeNfugjbXrXgHEGbdi7TGizdpZLW",
  "key27": "gpLtKyt5bWgPhp7dHDpJw267Nm4nMW58KRrtekQrJFWQKZ5Y98qzdQ9HD8dh8qMxQHCFzaDWnw2evoxSxfbn6td",
  "key28": "wYgrX68ug2wB81TMaSu8HXiFEyuSaqyc4XTVcbXLwLkAQ79BAQuu5Z6DtCQFUbM2eun6E1MgoJhSDe6UT25Crbf",
  "key29": "5MNoqCZXcbDQ8V35GFrfDP3T9tFXdLQnE1xs39BrvaFbpFrnbMowVwu4mSKbYewGRHyUWX8Kp8HWxAwecQK648MC",
  "key30": "X9QedVgRsAiADRJyr5RAnw51sNN467MhxdYCK2XaYJptT8PnWxuepr7Z1cxdPFbkg3YQ2xAz9S4DzgkeJDVyY6j",
  "key31": "4UTMeFEE4mZBB5r3Rav8Uf7gJtqTLBPH1Pvef3motZ4L1dKv9bs83gsR5h779HREfHQXTLZvGQXA62DgCYtxqgzC",
  "key32": "7riuJUSWnoCtpCJ46r6EeXundiv2CJ5Yp3whsRLPYbL5KiSJr3egyadWtBMPkQrZf3jd1eXPeh86z2gS1Uix5VN",
  "key33": "3w6Fkp5nzqCNPxsEfK5aXFsuYGWveEvWPSCYtEb7K6UHE6MxpYbFzUzQPa4jDaDRFy6Q63nkbZBjqac5dDr9GZNm"
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
