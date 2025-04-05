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
    "5curtgqen9WRGhM19ago3r1N2B7YcX3Tvvt9pJi7sNKURmUJKNC1vnXqRSsFbAL7XDXXXN3C8tx4mFrrYadFuVfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UWENHh3vTkX4SQs8qCVwHRP6XsBDeSygWpomzQSnNxoLSckDQBVkfRZoHTXwpU3gPmFM6PUoQXiAwLLv4vUF3xv",
  "key1": "4EzX2Ta52U7GqugdmhsoqSzZLvHtXFobMYT4sDwquvPnUXyPF4Q1GjAdovajJaRPPPupuJC7s1Y5mJ9ZMW55ENZq",
  "key2": "4m7wan8TQzTc3WssZiwVMmp2kXcrHHA2CqCuUm36YLtnu2EjxPc8Mow5W9PxgW5VBdPt6gnssrD4xCu2xhG5imhi",
  "key3": "21TTyi2s6n3Z5fFZVdKfRjcfZvSnS9omCzuK6mRxEKkhdFDmQNwmZAy24epzMUFbjgFvSLwZLqgAQSdeQ5LvWCHu",
  "key4": "4KyZNm6ikxs5jU2CYFza5NCXWA8EvpHgQKb5i1fuSB88dRo2wpn1X4paWrTjGZkYcR8jkMF61Phwp4VgGzeVMt4b",
  "key5": "33b1hccrzYi423FJSnmjmSccHN4bLzJASDAN6PFQwNYGF3o94YkuiANGYedXphyQau3zS92Xg6fqu6yz6x1KhZuM",
  "key6": "3xYbGj2Ujy3FhnqZPswiAAhPahgiSF5QSpjoti5hkeGCmhKz9DbmKLb7tLT7vHD5UQDLBXKNia5BwrETDs6dMojV",
  "key7": "2w6ZuK5tWZNftEgdyePdoN9UBeYqsj3dM5Ebu8vz1opyBFihiBGuuBbs77Yxxhn7NXPMm5N14Ud64SQm7uyk5HUC",
  "key8": "3SEGbu8qTrK8VZZkHzLcfFbx13NvdJRRV6CRL17N4pR1FLtqXuZc3MspUP8wEfHE3JvHSefYGLcb7kiX2NSqcack",
  "key9": "BrNmKo6kc6Bj9x1Gy4ur6CxCvW9LBsmhetxwnRnLNjKRzmuymUv2793mFfQifBGsAvqbHdKKAvyY9nuPqGgzQYP",
  "key10": "2PdmtiVQAUY9SQTT6D57nBCLwFAyhJfxvu3pmQ4saJwqhe5tMazcZSE8v79tRz8p8fC95xh4jQBMHM3Wivtho6VK",
  "key11": "4JUEiR5VwSR4kRKFutYEBmGhCVyboeCSFgJ9XGXhwvHneZPW2DsasziEq6PzDfpVPd4QLosRvfiCmumY7JajAVes",
  "key12": "4WKysieWa82vfwvHnML2KTccjRpmxxkWc9V9WP4XpUGUAqeoMHfK5u3ecBUhPkX7jvmiZbcm3qo1xwVaEDgB1u8c",
  "key13": "2aB13gZrKDNkv6tRJeWWcaE5mwgH5EwrJ8w2HdNgxEhtx2x8MHpo7tMXKavCcmT6NsgB9Yjw7Sbky1wmKYX3zm7a",
  "key14": "5RcddubbY9aMAMBrL77C2T83NSXcim3rkB2wzycEDgvgJFmTbdDsz6CUiJpUK2S9JySiZFyJjbu8CV5XebsXdnbR",
  "key15": "4dkzURpjfaBxjxfRqWwnRwg6hNfzQs3zHdgJWHwMictGSp5pKYQqmUaknBnxCDfD8gjMqoHpHopwtT8JNny3BuMW",
  "key16": "4dH4yZXJA6naDF82owYyeydm1dxseiWnRGMP88fY85pW47quiQ4ZRjZKDtMo8m7CRELUe4paZJDZsrhc3w7WYeAz",
  "key17": "4tk4RhbjGfBk76UzDvJ3JmCWXenTafUTkHbf5n7Vf7MDUveDedvGR9wVT8bjGikbv1fHbkGWF1otVwLszYXtz1Uu",
  "key18": "wkMNtLqUqzRzfBqwYkHMjiBu2RDW5pMHNLB2bBAHrS1WMagrkYQ4GA6fBdbbMY2yfXSGjh8ohSyfKr3LCefLSNA",
  "key19": "mjPsuMg24m6GNKLHxGUKXxQYWCbbjGYRPHXfisdjEa9FDB6rE6BeGRoQNXJs2CNddMNsXzVz2BadmyEPXmijYoL",
  "key20": "35cRyGqWBVdhaKjqjN9ExrQnVQqXrNs9Km1bMvLxAUafxqEV8dTK9rPBE1gRFxeGRhrPAx8zKeN48wmiDpvUMUR1",
  "key21": "3DJxvXMCDpC7YwydRWdvL6j6fCD6LerteVFebn47UUwvbMmCvXgVjDWow1P4yCshjmsWyNwMdyNBZkJycZGNqHCd",
  "key22": "45vAnTvGukteXBCQ1PfWqPRzwpE1GsGfwjzgWnsWrmTan4JpySwrHD6aAUR9csHDLKHMfqu6BVbYfmGJbVNrKi1t",
  "key23": "3fXBaAhztct9bZp6585C2Fi5kP3z5LxJf2vQr5gvZbJJXBYMLsP7FfmEmgw5XjxAaGhyvg1SYKTQiSXJ1Ym6wd4x",
  "key24": "5QZhEuLuWYKR72MGKXHsUE2VyLTYFNA5RP5wXtGKh4B1DgGuogi4jqCVm4JhFpyi4LVpthAo44VrYnvLPzr4sERz",
  "key25": "2yEpQ2DrzeDpks1yLKhKc52vsqk7f9GfFQCGwVovTX3dfvaQmVhrMFVBDZbS8kYisLg4e48QqEmrjrGwkm7ntapz",
  "key26": "5QsMyj7JhLFbt9UAedo3UBXV3Wj7SBTcpWu6TR96bbDKyocgfQfXcHtJaZ2i6rGZpcZfvcTPXNGXj2j3LuYLweRs",
  "key27": "2RAhB92B7hMWGwJMc5NTNipK5LuZKuiD7Z1K1oAcVY1t7NabJ8FPaCbWFQsKiRayss2koDvpZ5ZhLgE22iQntDkV",
  "key28": "5y6w6vpYYYraAMymN8YFy3cp1iTUcg1NYHXR8xweCv4jV3wDFT4uCf9AocJJGn3AKsMCoL1L1cbtc8svSJnWThdc",
  "key29": "TkAdQuMSfEYnCLSnuQ9asBf9Ve66NRUbet8FnqP61Cqx1qwqNfMboz831yHYkAKYNkFssKfBc5JzMkHceBnGfz9",
  "key30": "2eCauETKEhBdQBpqLwcfaC2USv1QYqLwhUYyADuHosP2sFUVYBXXDyaASiFPEiUrYFSfgTnvSPTCTQz5muZpmmw7",
  "key31": "4dSBsD99LLfmdhXGL3gMc8zZa1GrCNBAS7x8BLSZETS5dtpNrrrHkMEimi1fqZbwbim7TthysVic5jrRh6g66wiE",
  "key32": "3yPPPWDpomzS44N8DYuJ4QJRjF6cRTndZqx1TNWg8fZRUMGNbV5ri9bHJRobFo8H44WFT2A9BReVoee7YgfosmE3",
  "key33": "3fFZchN9RFQKSVALFL5dbQ3eJ8jfcVQRvD4EyYeywKvbBB3ipFZNz7ohu7Xo9CLKjCw1jB8t4DqrKFMZvVwMEtxy",
  "key34": "4eahaHsDG6iRkeDHDrnWndp81SnYEVSfPxjKT8mS7tBN8xGqadqLq5vtLcxMeLd8RDArK12biTRueWchuUtAp1rB"
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
