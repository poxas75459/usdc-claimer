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
    "5BjiDVEMy4xxUtL8LBudybmih3fc1TrC7h2mbC2BNw3LKNSV3uXUcSwVZEfYPUrsKVFWKK2y5VKWQV8mrPHcj85g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7KGrNmswKKcwteUkx85FEBwik89ggtn49zeZL1YZnM6i1HpUAL6ozYR114D4YWjRHZVR7FBzWBMzszfSxwXf9W",
  "key1": "2ndyMqrbBBoFRMtfQ887j5SqY2DfFJYaUTwkRaEjGZKcoCHEB3X6UnmVkwePbCDn1CV9YDE5H7EKpw7m1c5mcmYP",
  "key2": "5LP8ncb9jqNLBHZjH3HpH9mMdHyx6CFkRxQfdv7x1SnoYhhPPED5fzf4uMDzMFQdDxQithnzyA6S13NCTRrabozt",
  "key3": "DuMjVZoAeNhUk2fQy5DN5doXaZsd1FGZfZutdy9QzVY7jbkj9H3yYjXA8y9Jk9eZdcnzj2ycbRKn4yS1UU9uPsH",
  "key4": "3WHoPe97tstSTZ7LWyg343KgNq9mRoAUKaPTi1cpnk9u1UUpezwZkdpMcBPuZdiiLP5QdPuGR7nJU5qVFHZ6MXFK",
  "key5": "gjXdCu91scT5EgroU3hEA9EKBkjLsUmwz5zmkCuEmziiyYZBLrDvZPhGB5yEiACedShHbSf74y51fja6cFz4Exd",
  "key6": "XjGGh5k3Eijp7RU7sT6ufRXduHMeDTmURT2S95bgGkDizWfKuyKTZgr8Lf8PfMBmMxgW4PWNXe2qWEfYdSMqkja",
  "key7": "5JxB5fXwR77egF5ncZu1Q4NdiorCYGW8JmtTWEASf4mmDzY2pkyjWp6qWw6UohXCBu1ceCKjyXv1Cxz4NJfzm5Mj",
  "key8": "JN3yFGG5HtqbaBjbpkVHocRz8ZmsmAn55FY5TqQHTAjsnd6dBEfxc5kFdr4xxsyeN9am5o5ZmL1cAroVg3mEnhJ",
  "key9": "8c8zXRPT3tRzyCrhsZxiKMXawnTEVQweU6v7N2z8z7R8hUz8Ft1bprDxf6WbJ6espNW6X3ZfyKWftCifMW4Q8M6",
  "key10": "665obuZxhjfX8GhxTMChiKqyBVSLjHBRUMLjnd5j1mDvqBkgk29JQ8n3uGZXjpC1bHv6BLYADNkc4c3aYSL6WnMG",
  "key11": "3vEhUjHx3h7v9hq26VpRn5q7eN56bPDLDJvrkdLdr2PCqeZDaSesahxwcpRt5Jgmrf8s3Ptp7bYtCiEkZedWXVgH",
  "key12": "2pW3EG32xhC1yxceGC7woGYHzxLiYm2s6ySuqMR4DvVS2n9PWUQyzwohurzooDq1ZHuwL91gEFM2WVmv6q55jd65",
  "key13": "4avMHGWW5mUYVDkN8vVcb4FEZPVqwNQv5TesDJ9ztbdQAVh6eX5R2dwqy2SQF9rZ4PnDTHt3jZS95op4mY53Z37Z",
  "key14": "4kXJT1BpjaV2GbrzLHeGEZ1AhiCUij5z7yNGNhA5e87G1UU7QfmMfb9LoXpVYGUJ3eSgd5xJ7EiGyX26FMiVF7wc",
  "key15": "2jG6m9kHDHTdB4iReBrWYn1XrYKyGwKVazbBjmxwuMNZgig5aEt53hr9Z3Vp3SWSwnYWUZRwvxGCRJqzb15d8G6",
  "key16": "C8VZypB92VeNneSTyobvC5uvQnmyJp5YsW8B2zGWUxAGyUguTPEEWdKEpU3BSmdtFbVi8jCYs5VkxzzwdWsSB5S",
  "key17": "3hZMzwvLXjxHXTip1UY8pFhZPHWpwoFVEjyFQRC4QkFRJmXNzLYN4rAbYmjQPfE2n4EMGGmXxGZzcNfxsTmpKD7Y",
  "key18": "6pBrbdtdW2xGt4yAkKzoi9w3ehPQJ4NiT4oqf8C6pXoZ971HpkVo4RFyeD3gVHW3xo1DRBK3gWjr5SZDeVt1CJV",
  "key19": "4TuaJ5qUoFnNZexm9ZmHvJe59u4qpemooBZLapCexjCdeN2qwZZwYrowo3g3ghaiY8WsHiCnV6HMS5mjLMU3oWEA",
  "key20": "3xuHJSSNfmdZ4vMK65ZyALRhH3VoHVN44BDjKFDyC21nKCVKtBSW36DVP5tQiXgcuu4ipGrMEhrFru3ZuEjVFf2E",
  "key21": "KMXXgK4mRnpg8mDyJmtXpFgv2haJQGu42vjXdStGLrRYBCp9nFJ1pCqSEcHbdNqTMph5V6ha9shENG2HBQzz7XA",
  "key22": "5bXwbiscNGY2VENSBMD8BmGhTCuhEgEdREBx8itRWGRUxRPmwJYmGi4uHdNcZMmapyDEiWbwX6jKoGvoodcoNu6M",
  "key23": "5ftNmAb749RRy3khkMJquZ4PY4nE6janWqGbWTfrtUZsoZXVvouuCVeXCfa9VsZrJX6WTid6dXmrn8xUzooyeeun",
  "key24": "4h6KZ7uQSnjaM8ALnUjPvk5NmGmLR86qbETA3Wazxb7XiCdfp9mjWPvg6KVxjQqetWdZeLTbzh5aDnPPPV1KcuT1",
  "key25": "5baDYqNrCyRcHpLciLn4C9E9LkhcYwyapQDTaawcQddKfy5YqEy8NZeGofxkUDNeYkRuEj5a3J2GUrgQCnLGK7Gt",
  "key26": "2XvxwrNU7696R7sSeSqnoX8ELCT8epqDhyum2dBdxXeSmtRJrgW3JDrC7dpkxxmRK7crHPH3VCWNYCbuM1Y5FFnm",
  "key27": "4VucjZPK1vxbvoBycZ4dUdFT9vinMekuUF5Hj3xLy5xmM5ARrFY37PcNdnPRqgvakMEaex6khV8WCTNydwrCkMEy",
  "key28": "STwZbChtF1842YKuEKqzCaektzAZBefAwQnx6H7EauQuLV3paTtoGQJyVgdQS23XaQzMzPjvZSvg53iECUver5o",
  "key29": "3rrJG9Fqf1UgXfQvpJPH7BgzNJAkjwXhUGQrtDo2UK3LgQKeMUoKJ1irXiAqZkgDVk4b3k1C63cqd2H46HqE8jCc",
  "key30": "7SH6EGfXm3Z75JLXjCrNFNj5KjxtBcJGhVwoSGMBAkYkcvjD51Qzj5JVsng1bDgiPwG3LngdtWFMg1CPXbmVehf",
  "key31": "24cC2AuAtBgqh9CuEX1iNbuWa6Ch9PGo3cxeZpDRU8e7sSQvge4fYcbp62ri4LBD1f7yze7p7yUFV5aiKURK8Mjg",
  "key32": "2naJuJ2acs2eZsn9VbwAxYECJMwhf1LbkQ7TSEiTHYkWuem19QK7Uc5yVMEEswwPpabAtKMKqX12u91YATdYiEyJ",
  "key33": "5MCsKRWrfKNacp849RWJc6fys88SxEMugSMPjxvhmeEsSxP7pwy72gacCCebMc3UBvViAf3y5EoFacMYSSxNCXt9",
  "key34": "3ywQdm1eZnVagLcc4tEK6RoPgStACiuWwUXz3qCieBarMyjw8FvCkdfsoFvbRAYRnbtpSqM9JUHpF9HKdVgH9VTK",
  "key35": "8RQMm6RFtvYpyL1sVQ5VugS4X9GEthps3vCY8u4pGakyjnbn4iDLAVvavwJoroZNdTv8kX32Fpobv84DAeeebxW",
  "key36": "3F3xzW9TWid4MudzhncZSjMdy26SbDMAQyWV3MFtTGyw4JTnyYhRTkFLiPJBvSY5XrtZ7vX4JFfYeFGE6iphKt8b",
  "key37": "4CpTfJj3LKxYj9kTu1UEEqxW7B2Apj4533UT7QcSYQHRbcgzq3QgFQNinGxqibJBGdT7JCAsVEZoezfEke8gZmoF",
  "key38": "5LmU7aE8h9oQr8Bny138qhi13y4mnuJc9KCf5THQnedTRosjbW2VGHUoJ2H18wUsTJEmjiZKbUyi46pctNwc5hMt",
  "key39": "2oz1Ute2K8ZNTTkfhGivDPKERvbCbYMDmaaees9HabVBrLwiNqto7LovGszz5W4NNcuQUN1iBTyTFh7UMDxx2fpv",
  "key40": "oWv9izsbJVw9XrjfHrSC2P7TxtWavgxhukAjwaVL6HUs8H6Vo82VeXi8zFQ7Mp8ZkGn7oRPxXuSMokPgiLdoWhU",
  "key41": "3i6k4uoo7si8Eww7abZHcTs1iTFxSnnj8zW6kNmEsXguLrqzXyUnWP4MwTEigW9z7jdqheu43vCc9sDwxz3kZ6Pf",
  "key42": "4rFktsEr7tnamog3SiAGKEiWfQgLujdviXpZK4WeCriK8hywoviPTuSkBA5xpBCjZEPkMEJXfMwoTT4nGRgicZBn"
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
