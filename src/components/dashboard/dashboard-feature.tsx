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
    "onY9zPNfL7yH9R574Z8SDqifQuPM62ETcFbVimsiFwqm3ZyyRB839nJwh7ycVV6Y9MBFzAe1H28y81BrByqwPpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXTmFsQPo8fhvshqwK64AzvWfmksp7DD5x2RxUypn4rUtiBcwLNRECdfBFC6pLe2HZZMyqhBPaprhj8aAkXpupE",
  "key1": "41y1EzFmFNjR1MLd7wzF1j5VZnpD2CUsRxa2sGRRriiJgZcyeyRKJY2ALrEq42dr62JqdsssXfviawV9zA5b7TmF",
  "key2": "4d5ATBGeDZn78hRQKqJDxe5q1fs5rMZ92F7WKfAuWfx17y6hTs3AzCeeZMKNZe4XsxaasC7rwign7PMT5Ebmyne1",
  "key3": "JuWZkthj31pKtuH1PXm44zhgBouWFzcnmQocxeAbJCbQB7h3gSSYJPThjVYJHzeZufwW3rSMMtaEkyoFoCbZRR6",
  "key4": "3F5yCWidqL3B58UcunXBvMHk3eAHx6XTXzH2dCh5ZBBWHnSc53KqQPYf5Kv7Azfhp7VAB3StJX4rWCTzRXUQADKL",
  "key5": "54xFa2Ert31eEQBh98y97TosLXuSycDe96cZte3iLG2sjiYLdv54Uw17U1rbUVPaSZ6s6YBcnAxQCAwVUGXudZUD",
  "key6": "5ptk5DdwwfExDNdqRPX6B2vZ4KedH5btHEproFAsJj8rFGwjUp67TM8GjNcbdxqGMThNSfkwkfGjimQCyEKXnpZf",
  "key7": "5ruSkY8C3uGoakURUbLUuVaJczZUhTo6DFfSi7mNteneAEp5UZF5RDLVCu37jDVS2tee1ZwR1FCi5ZCSf8v6UiAj",
  "key8": "inMwUSBs4hurusjUrKSDxPAVcrPtoUM1qC23skXH4PdwjxEpWu8H3pZh8yqwe16aS3ZaGxGY2zakRN8CvTgXMkm",
  "key9": "4da7eY1rEFCbcm7o7gkWd1h8JJd7mkHDXTK4pJ7vtTLazhU63X4hWLNy5uEBxTUM2ewdfSd1UP8HA9DGrE2sQonr",
  "key10": "5RNgDNMXoquqidc7S7tV8Qi1FN2k7Hifk8biDJi4zgR3d2sqdYQu7WxzY61ggT4p4Rv7f6ScWSCfEYds27WVe1rp",
  "key11": "3vnPdDy91dioG7JEfWGHvA1e3L3nVZRhVxqAT3Dpz2xzVQdnmYotu2ALvHQiCbHYGCLSwB7u6tLgw7dwnAVzphcG",
  "key12": "49mSjSZhBXR94skqCQtPvH4JZv2Qk7tgQ9WuFJEdzuxYsfVRv9GVhAKhaHfg6gky1jEx2tucBEuVs8uq569f8L5G",
  "key13": "NNCXmozAhL9et7SSiR1T7aNLSuErnkFhFndPUmNqDeQwLs2ExX3KwavMdyyhw6o5UizLt6ASfEpTZY1Do1YLNDx",
  "key14": "6t1Lz6JWuB25gkat7PVvfiHH656iBgG76FXzzGhWy71B2CdJRPQ5Vj2Suf2PN26APgDGSFAqhmkNoHFr8GzHa6y",
  "key15": "N36xkpkpEBuKzzgKdWyVkdwPHojcSWomDLvzkofhak8Y8R9L4zBi37oZxqMcLqwftnseApjunNYvFSqRze7m4uh",
  "key16": "38sGgHBWxY8xmT5KgCBAovNHhzpdoU3xDa52wMqGoEDrEv6jD6CTZNAxBKe1MYJSaRhdbcoRzx6k5DBTm67k2iph",
  "key17": "2CptsEDyJMWxQNL2h1gaoP7RCBqcekfxhqCn7NaNRTx2C79p23qdvxAW7JxXyAWGAGEzyLBszsPR6tTEo1qXcZDp",
  "key18": "5HsNV2f6iqQvuYqLRzNUQt8VkX3bfdZGatiMjMAe8391axXwtzNU7nmeiwGVy1h9gvjopmgxS63q34W5KTxmk8Mk",
  "key19": "31M5TULuB9QgnzVjvpFdj4hLSoAygF9dhWit5Yanzd4VT74EExsKKheKmPxhQuXCTUkLTmD4GNDcSJPCEGd5XD8Q",
  "key20": "5QfUWd8oZ72ZuUkbEH9dAaNfRtyQZtTnJHV33gnJ7UNcTdK57NuHtagNTpRyQ2gs2VedJ3jetsg3RvjAJsrmU7Pi",
  "key21": "4a74fxFbudpYihZ7QbeVjykwPumSYkzNrvjE9tzt2Akic21zYaKZG5wrW6rgYxAw1L9d1GY8jjYH9jwnmAEsoHft",
  "key22": "2YbgKbKB4HspHEzL4ZdxnXNdUZKxtNPNMxvvBUpczQMD98mciX9khDNx9rii6xVZjJe197khrt7tkXfpYEWnGA5e",
  "key23": "4LVaxatJvsfRMfAcvsgGG2nZXnWppjmMLpTyPmAS2t8aokXpAQGGHEJxcvRRLnL3JgUCMmWdQjfCRBn4VRcDbV8Y",
  "key24": "33zh1Yo4JfC5xvMgu5SJ5xkBoZpjBiPiuXPqhDKesNDZKU3norNmhVicGVuK3EeGkwB9LGzzoqNygtTTj3iTRTZm",
  "key25": "4uQqXNXaW1fTgMSBSmYPtHfGQm4YxprqGuFVJ6TT3M8kTRnjvTNBb3qUKYGLJL2xyASAPDFxyUfGn2uijSU3CYAT",
  "key26": "2oB3e3MnfHuyTZFQfdPH9HLqHapuoG61sJY8qMkrjKWJAHYHUXCZhkn9tPY7BBTcatuLCEaKHEcG27dgLbyJwF9q",
  "key27": "4vMDDTFyasFkjReL2KBVrtJwacFjZavuUK8CHTsvWZFHcN7Q66CFtoDDrw2HVptERjraCXJJZZfUxyqbe7SKybxS",
  "key28": "j8VpPhbb5upV6qG47XCm5WmGTDg4r3wTHrrftjZB1DC3zCnqtuHBE1Qgsb2zdfaSwiSQZkQYW5wdZN7Q5AwTzwD",
  "key29": "5FNHFZHLXt6DLm9m72M9jtrnKQcgQPUtSqUVmuU3aRnSpLR3kZAH6a3Ueo2qa5mKKszBcDAZrbeKcZiwGtLEjLTQ",
  "key30": "twSetj5ZR7caYMJe3xZBgJWB117Wa8xMosKN8gsX9AGVM3ET4u2GG3FvhDxPYswxdjj1ism6e7Dyf5Vv1w13gac",
  "key31": "2XZExQJqrtVqkxj5rsi2Bg1oZeEsMF34h2iNeV237TAyF7wLS7Hj2utRVH5sjdcshQkLKd79JMKWiU7vNCWgZRJL",
  "key32": "5y4qf5Zwy9H79dYjTcNSy1UdLpoEFaZhhPPFsQ37ng6nSYhi1DGoKpN1wH8DherKsW5ziSd5UVst8Fu5Bss2A45z",
  "key33": "AYvu1x2Ry3ZSYHSq7w6KpgCpdc3LPub9PtQbf6YyBsZMsy1NqBujoxyca384WAYiSKWvTSCaibDXg9LaY9emuq1",
  "key34": "5of12shpmdGfewwnnDvnCRNhRkVn8r4EsiqJh8q8X9JMPwFkFYykCqTeYF6jJsxzAeBnsMiRHw66WMmRE5xqxAJb",
  "key35": "4K1vJGdctjEXvysBjeEtGReBfxAwjkA73L7QZJ6zXLMaxVgGNkZjXnzj3HRqfKSjsVHKZZpxtySUqfn7s95dgFZL",
  "key36": "2cdskBgfkC7MSSjEdE1oBKYMdvRLAjXa4MaGtxSsYtkxp8ccib21yuh6kGqwTA5KTAyMXNUhFNANJgywPw2uQ9Y8",
  "key37": "4Zbgv3SFLTUQqprz3gw5zsy4BSny1fE2VRuTrs7ZNDCUkhBddGxmt3kAEJ1L9WeRrGX5AhyT4jNBuEqAYiPpyUzT",
  "key38": "4wNeXnFaCdp4mJqeP898FzRbbgTfSBhrsaE3CmfRW2kaBL2DE7rGQFf1NDTys49JMLaUHmvugnbs29F5QFDc5LYr",
  "key39": "23MxBpghfMDnk1Xu7uBkyVvcQCTgiuJ6tRjMcxaSCCQoieSxQGzQAPMW96CvpoN6yN2iHJi6je9ZSn4F34Uz6Mab"
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
