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
    "28NZiCT27SzvwcLwikdweui41nQrYBfugquwNo5ZWbGvE63yMYwre5PJRNtmQoADEuBR1fDnnF2NQPxepawy9KKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ba5Zeq3qbvRsocyi8UGF2ahABeTbkUm7dj2drNP1QNycnD71nH9rNjWCS1CZmpirbkkWeDCdJ8By3reBssB2n2V",
  "key1": "oxd3e2oYUbJtvMnn3LzPCmXv769S5uHEs4YrSdjkutsfvTL65fqP4Z8FBH9ibQ7kA4CjnqZ7Wt5VefJowezDCKF",
  "key2": "29JkewZVx7C55RTKM7JckVpktzy8Xv4dKd2MtjBpwnwHkoC5CaDBXrMXA8WebEnjEKYomR1DvXaaAT3bLN3vk7Mr",
  "key3": "5SVVTFcx9M7689UWQuUfPheKBwEQPbiE19huKvnyPtmwzmpDKMuYjzhGxmXEMjgKH1QEZrXT8JoYBcpkG8oK2nNz",
  "key4": "3wt9K91PamNmSNrgMNhrc9e62Vcv1nxveqA3BRB1mvN81goxVcCvPQoE9K13rNfQwrf6hwkmg7NzXJnmQTniur5u",
  "key5": "5oMCHoRWTa4wPkG7Wx7WGni4rGHEyXKN8YTmR4LW9Rtww9JLNAm3V6sCagBCMd3SBQJjeorEaQbRXyFhfmVMML6k",
  "key6": "5uDVkE6owjXCjYAiu2FiFK8EQH8ek8LeADPSbCQ9PjFACfCtdTatWeSvwrjRNbpQqDg5yyGUeZT8bWsstYGN9PR6",
  "key7": "4vjLMfg7LC1hHyYSBxHhpoogfHD5RNBK9d5ZD3tzQNSHJgfLiXMuhzSYQHu1MF3sk6QR87WqTHWN5BVRv6pcRLuy",
  "key8": "492DuDHPquiZ2567q67MdL189yVniYHhCJK1GYxmfXYe14R5sxdNwjrx2kTNFabFdRELnNhGrt2nbytoutNG7Hdu",
  "key9": "2DKcV8dEYsUem6nS7V7MpH8pW89hmjPst9LZvV6P1iCvrGdxtWW1M8rMkXjxYBv6ZNeRXKS53yDxzMRRxFQNWeJ",
  "key10": "2bZ3jLVH7TwzHRnMQr8VoRqQ2QzE19GFcBAfkCLkr6yVDQdZW8YXMZAYPCziFMmFGq89D4FNvEhHsJpDtPrueLkX",
  "key11": "59sDrzuySKVFbhxqfcQr68XNsPEQwQNtUSRvDKVdGxnkQuMUxCoqQ3UGXNUZEs62aAmvdsYZ7QtxkccawvMrp4Bs",
  "key12": "AJko7PNfCaprGTm8YRqifTwxpz7othUWCDSrj77ytv3RkE1WVjbCoSbB5nopEuiwjSkg4toh2GWjMEV6xSfzjDC",
  "key13": "4iuFWfbutSptuqe9VEpHtKLnneT76R7QvRhteMTJCQzCmp4t7qzQEET6gZjgajYiDs6xT2Yjjs2C6uHBBUpZxaMu",
  "key14": "47HPGyRgN4hdJjwKY7Hgo4FftZ1R6Rs3QXBkXNTgGwXeSpsHPtfzzvJ1Wvs22zWxnpEUjTF724euBrGncwc3c5uM",
  "key15": "3nuW9GDnwfgo62LqXTuDs9JJCmC4USn8YAfASVXDwYGPV46Qt5Kws5F1NLuFDftS2osA62Pnurp9JCJLNCUMw8vA",
  "key16": "2UW4RoWeBEjZpRKZqnQgzzZ4vPAMA2s1ivnpc7m7TSrzsRKsk5fpxa4kscGRucMAv26L3HE8YzxVHjLTz867dD5W",
  "key17": "KTqpdqjtFuCnVPfSjoAvnkL1HpZhRs7vwC6ZuQE14hJ8N2aEgPjSDSRfZNFgQAeMaPqMLq1zZy7gQPnZMBsMnrU",
  "key18": "4eFYqFQCkVgavoMZ2MMyw1ouCzvpax7rpdtgWV87gRTQUDZZponyxanqvTMFVXk9m7DWRgqmUrn2AgSujmt94JWE",
  "key19": "2MUsJHPwNcfn4VGRh3eY4Q1Byj1gTkn8BY9VCyUTTaC98MAAgTm12U7frMwvytmMrpZoyNnFaHFf674Atg273fQb",
  "key20": "35gHg6J8sEAdKsbzJuhx9gvKqHV7JrYqMWnj9gTw5aDZvNQx79kBs6XsuGx3gNYR6Mv8WRyrVnw919acP5Ctz8aq",
  "key21": "5eUeo4nevXiJ4UJKt3hLwiukZDZ32jxDGddJv3XB292uKYvL4mT3mU5B7zKgEK3Rc1MuQSF6iJrSB15DtXWxx1e6",
  "key22": "Xot8XTDkdjqRw6KBfvnKcNMzc1noUWxwM336Jgy8dKsFoKDKv9WfhBCDsX2LFWxJt1YxMcKSU8UrxFCnr9efyLU",
  "key23": "xUxJzYjPZJ1Xn6jKKsBNUwGDck7oizVJ9wjfx5yYoE2RhY4AsAndZSMyYdiu4A2FB3KhirfVT8Jr72dDv34UCuf",
  "key24": "5UbuENMWEhNofB4NigAB7QGJcmZGYDZeyUD7RwYR7aFoMw6KrVUpA8GZAWdkbLi6x8aZZgPMoNwqGVKbkRsvdYBP",
  "key25": "q7rTsxxgn4JbzWmgb9jfh6FazKST8QZ7RXoPrRc4sp49XMrPgfQodpJ9HrgFSgfqoJybYs2Yr2KFA8F3EDFtM2C",
  "key26": "2RR4AEDWqQ4kGYb256bXyYC5jBVDeGV5E4d2zBXpvaiTBfRF1BfYLxgq4RV2Zovvhvbkqa2ueeBMuS1tBveCUZ1C",
  "key27": "5kh9gWZM66yJs7Sn9Qro8e3M3EQxgrBfG3zTE7m6drYLnZ86idGDwCCGVBCwecHPPfw6JeNqWYtJgGhebHr5F4GH",
  "key28": "47vJ844hmvtfhArLBHUxePgKbP4JDoNejUqk8AEmFe26sHdjYiEgW6ZpKVXRsoPebqfaTPat1yhFLW9BLAMncK84",
  "key29": "2mYFMSf3HeB8vDgWHqGLJXzPNLkCigJvedAoUG1tdzeyehvsCFNDGHRdM14CB3LbaUqiTQT7ruY6Pgk8csBXccCZ",
  "key30": "4FcncXuz5KqnzsiBSrqKXzm7svY7EDXi4ZJ4Yu55A6d5y5Gd778FKBMnYYJqn7y4oZGZuvgqudQ3GyP4V7QF9Pmi",
  "key31": "5hJfj34CFvgGepkPn9Mwww4VerFTNnBiZrFVhjadgHjpxfqvfjDQZySbXtDzgPow6PCTZx5rGmgGbe4tbxBDqJuo",
  "key32": "2u9jCLLXYKCs2wKxPe2T29N6RtAyBgHzPxQWR9gwMV5zkRkc7ZXfTwudRfFR9vjRRj8VtSt1VYXQSmvqi7htjFq8",
  "key33": "5F8CQAM7aA9wRWBpMhABscBmnvtHxcXCZVm2sbirj1h1v2K1bcn3pR8NmymYWUaRUeq4AMLtG2jtgr4oJ9Hnj5wU",
  "key34": "5CWxB8YW2HjrEddFWC2V83K7WsNNFBCQ9H6ExMMNaebetg56PKoTApX74aUgBnBDyDpMoEdZuEHfdYSgMSisnd3q",
  "key35": "3U9tQ1y4a9xNYQpzsFCu8dWZvANiYfLArgB9uKGqqHmPv3dwTkaXyvKzop62c2Xvjh4FhAE9yyEhfS7LhrDy5TrR",
  "key36": "3vW2vBhp8pnhxzgYBvHCtZwUpu4QJ6TW9w88EHKaQgFnpsDBWtzK7mThnn4Gbsdkh7tKthWncc1R68RZLwC5FdHg",
  "key37": "631XUkSPs8qoP2QSYRrbvxELYHbLjWujpQCafvcyucWMTY4Bjik6c8cEMgrGGEt9NBbFW3EY6XFnGnje2wz12ZDC",
  "key38": "iikjixfqJh6V95bSzQCLy6nb8wSHp5dr8QYzNgYYinXQLUKFn2itwk959KWvvxwCGp9BEHgXDb77SVcWazcPZrx",
  "key39": "5hxjFk4pW5k5WYkgo3iMnSWGgqdbbsfiTYYd6tFETLbtLUE3aS85TnTwFzQ475z4xsat4uoRxx7hTUV67988i8Wi",
  "key40": "2yLfFbFKyVekhLysFm4oqWPEV2p73giWEBo7LuXM4qVyfTpnXDpq8eestqmKc6xinxWGymdc5zMAu44RcdD1TKXu",
  "key41": "4W7gEWj8DThDhij4ck4LQDVBNLW4eqfdnNsuGjnHcXEF9ZLBrqWay9DJTppvtsh1ZUMoYTzbNGWyVamNsA4TNftr",
  "key42": "2Sw3SZPEuKHLsEmejhp5Zg4RBMdv4CdkDYNGbaXsFen89HvcZYhsXYEvKMzNhH4saNShb1mqx2pn4ksFhzM6LDgY",
  "key43": "4r2EqRZTsu5H443hY9wnjekWfHPL1ipxsuXwiMb1e61yGjANzHZHDNWjFnVshWsExftq6bS3x3ykHknCEiRzMZyC",
  "key44": "t24CoMzAwXLT9pRw4XWjpjRLmR5neLLR6hm841S5rMvhdyoJwdcnZCJhMc8svwteCdV6jxaPX7jFZUQaBmMiYj8",
  "key45": "4JLvTMTvgAmtrBpeVphu2wkGWRzknCXvTEjoegkhALRjzwHRvXhcB8Es8iffQcpzZ9ECb53iK32XWqkBcgwcJvpd",
  "key46": "32BBN5kK9XEt5NgfmXpJsJGhxHhJ4UG9E418EDd2eosBw87JH45U7ZtPLmYojPoFsqwFkHDk2dQSvtqbkwgFydVy",
  "key47": "5EwTFAUY3V7YaJpJCciH6CuSTKMPFuASVTEu9doNVJb13mMW81aLWf2gS7kR3Qg4mo3f3yH513qf2hFWwgLiCAJh"
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
