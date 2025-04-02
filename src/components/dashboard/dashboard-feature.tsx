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
    "27R2nj9j6trVHxYuZ2JDzErRmKKoVziDvDy82A3iwvRwqS8rL8CgfMakapNeQytMBhNpe4LY5E2sL99VPUNyfiau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjczaJhCeUi99QHYWmRoYQaugY3f4Jg7CUTiyG67ZxtSav8T6VEU2jZ8L8FDFf4tDyf38sMkP75wCLWvyChjbDr",
  "key1": "3GKj53nniZcuxSzUAwVvfaNvJ69vgCGMroz3zH4sMc1FGsT7KjcJPRzMnh1jcharbQJ3a8jwj1amPS773BmfBeeh",
  "key2": "52cxMRA3VpKojHwGqE7vtwaZMiA96zqCXTccePXzvJKMT4KiHtWxqbddkK6cbyFXDc1D3yYC9HtXGFXySMsTYWuW",
  "key3": "4imRxEtNYwjymnj73HPdy42T7DdztYGDSGvEwzsbRHNyKfqL1ipuKbaB4PpsKhs8Y7ntYWZ86ojUX3W9TqqTVWg3",
  "key4": "2qmK6cnSneJ81sncFKWMtvMdj8hwm2CukdViZ6wAj4tHV5Z33kNwAuFJKnNfRmLvtKpmHygs27cFJbTDnwm5p28e",
  "key5": "5GATo1EB8MKwZgd7aQtmghGwsFZj4ixBMrzbnGpc8Tufbq5zULfMSaHNhFnmGjf5Nx7NNQ6FfjtZbuyaTs6Wd6cD",
  "key6": "4Bo8yJeheS92fDDg2K6fe6dgkTiRrbDxCs2EWVB1qRoPCZmUihakPYarQmRa8KkeUZ6khuAbevucF5h9eHU4PFRw",
  "key7": "2mG2KSevtwhWAt7fDAice38UeggJnFirLFtfPCY8vC9G7cZCH12yfVVEvjFVHJFoMvF8E33x7Z794JZ7Chvxjqqs",
  "key8": "4nHxYmHBzdpc9ZGvca4nyrfEywxU9jiJiDDBNViga4tXxZmqHkmQhWBKaRQ2hCnbu8gTJPz3ZAWad1mLrfc29ALm",
  "key9": "434xbuVDKAHXwiKwsAof8v4koTeWpMD68Mi4V5XbJDRyMoGjofrMYQkVo9VJ57354MwHdag2ycuD7rdYroFnwYpK",
  "key10": "5dWMuU4wiZBgAPdyKzFcNPL7Qymbt5vkYqX7yoLpNRZXLyGtWF8Yf63VHRnWSDwFChrVYvL873faPTTdStx4UGMi",
  "key11": "3FxuiKH5jUiLuHL25Y4esYTtEbEECGs8pRhDRdj3KvEdM4KezUqaTJx8Khv52DiiZvVE6W9UW8J96VR27vmxF34u",
  "key12": "2BpWVX2t2B3WGvS6tMDp5MUED2F2y75ekohQwxEX717kCq96K8JW2t73gsX844eDgM2SSb1iQbCFj3Bi1xLGMAs3",
  "key13": "3KYJVdVtUn23dMJ39Qk4NELbskiH5RGi7SEcZToCgsBUHH2pJ5nHEHmZoyuREdZ1iBZ165USUzY7Rn7F5ecDMkEe",
  "key14": "4gQWHZ7PVFr7tFq73V8qZDwiJfQwibZZfgaoH8cegCgXx1rj8bvPiqbNsbwrtXtHEhrxLhd16ShUc9NQA2aieNGe",
  "key15": "44ypd4HN4mRHKMgPa4MxKb5r9yCWWPVN6rzJpgKwziifNaMgMwFsWMmc41vdYxxYiKfzJVgZoKJrPRfah8LeVzQr",
  "key16": "WEE4XNGkiJtTuXif2Ut7FAijvkCcUEcqixx2iXyFcXxmwd8vVgNdBCr2NCwKd8GtFSJX6QBrp5HCGKyknCYoszs",
  "key17": "414vLr6sGScBBF5YQH4vgohdZyxPCFM3QXteJfyQ8cJ9UbhngqJiFKx53CRvHJegs4QJAtC1ypfhBQrgovcBBALC",
  "key18": "eFpu2gWEpsHyEzNVwA2G5z74zv3hFWX3Lau1mnrB1q43vZ9eKnXYZ6u4RNwq7WsWqxKn7a4hNu1QoNjxoqZ6rZC",
  "key19": "39uBST2QGCjXncxLVFaQ144Z25rVCEeJkxMv9faTm22DiDjs7EKV787moAHSi9w7EYJyLd3NrLe5Us5nnaVrxKnL",
  "key20": "3KV4kAUtFpQm3mQrB4JhkLVk6rPns7sdbGG31yhiS7iN5YdJgB95WAAX8wqbTRrQddFoSjH4AyzseXyCAvUuvjV5",
  "key21": "fyzWrGSboig3QBpAK1VLqce7iRxMAL3HU4XdJuTwCE9BKXjVZmSvhwpHb4gzumJnHRM8eT4ekxNxdwvUrB3tTUN",
  "key22": "MKdJ3sftMmvjkqiZkGUeuAsSHXdgCgYhQ3GZf7TrDmai5Nrut2KsVg9wr3CEVrDaxWReB7NkCPHanFYN7CFqHo6",
  "key23": "4o5KD1dTQuGpKMndqibtk2cdWVYN5G2PogWTqNS7Wd7wLYGtyFXsvwMXFJG8nTibZgi33mp8sfZ1zrTx56pdKKfb",
  "key24": "4TJD2AGAE14VUvJrRRqBcFNw6xLcTryjW8ae6rxh4owyhvvFCPtrsivLZprVTyYGVVtW6jmuo468CjhVfiw5mm1U",
  "key25": "2yr4x9mmHCQJ4sx9PARYbyp4LgfCVxGaeKPx3LL8YyUByfGVStBAjTPGaDP3CsxhDzPc52KRf3wYw7iXnL6igXxC",
  "key26": "2RSHiJYXt1g87HrfbwWyA3GQ7XTQfJBRaArkVZerCwGhcQBgwgi7ADqa2jEyR9hNNs56k836x9sb9VHYScuv6Lmi",
  "key27": "H8rAPhFdDknWHahBZ9PJPbAvhqMd1qtY6rYRupbgmaqbnLwc3mpKo977ikrzD3GNx4mJrUZqzyLC2EioDQuaqeb",
  "key28": "2rJfjFrwh33h1RCuFJcHFSrrgKv9akszbCJ6RA7pBvGVQwPCyGeEyc2ZB1nnrV1JchocQ5koVZDBcVJVfj9CwrL9",
  "key29": "4HVZPSG8n8UVNKjyEYbKweq7VMG2Xv4ibe6Haykd81oqCVonc1aHhHGoefUZ8FK1VrnzKQPWdwdJ1YExcg8YYSE6",
  "key30": "4NNdqKL3YvmaLVyKxdWrsbDuAiGzjDhvZSax37WZr7ehTneSSuTSfW8knSnHdhL3q8JNaM3AFDvqXL5eykdVEETz",
  "key31": "2fK5GDEQZ1WLyuGQPrLEd33UMdcanBZNyF6qspQMuiZqaa5JJp6bVT8KHam8JfRwMJx3g4jh5TepejS5B5Cj5RDB",
  "key32": "5wsA9dZMPnfG8nWj67N64TpuL1DCWtHjapRJePZxWmfK4n63A47Pn3BcYqbzRpiW8vqyKQQTmu5qAXMBLi4iaHWb",
  "key33": "43iPFzrgtGZKsDquRZKv1wCL4UzZSF7QkkQ1FkQxVncFGgunQZFR9ws1di7HK4dqrdrCJVP8VwA5AH8V18NRVtAk",
  "key34": "3SdMmhmiGEzT5MuAvLTsQDyNPYp7D7LNyrKYjPchQF75sfLgX6NSy8fzHtfxXFGNrd35BJCurqS1MEq3wSQgpiSB",
  "key35": "24p7SYectiFKowg5fWbYZMaCb6ko2GrGuzeHymTDFRKrrhMYnEGDr16tnWNMEjSxe11B5g1Rig8RMYm5j6mTRpJ7",
  "key36": "3nH1UeiVKLV37qvyQXofJB8YVmu4VLqEgJGAmcVPvecUY6nf2coF6uYz4Du7jSfm3okQqzH3j4ncghvTYwragt97",
  "key37": "2ceKQeL1fCv81uiAWEJRuaD1KkuqZwoq16bXKyw8dM1u33L1sFamWEC32sh5jG1a8vEBGEX4cfh86n3d2f7wNCNz",
  "key38": "4gwmc2MRMcHcxSvzTvfBub5espMXnt8tL9SGstWzHXnyyiPKQVT6NbE1HrE1xNAYhPszhocwWVcZrfYtpFH4VCkz",
  "key39": "3BhmcjFJG4dp8iannoVkEepouC1NGFobXmrSBmkQtihkb9sbA9MR1gohj1svCrMZ1BG3bKg3wZv8gtu6vLRuba5o",
  "key40": "g1V4J15FBn5HTSje9jGx3Lib3qzEMzCAbs1rD3dC1gCa5qWfzfikaHB6WqjJYiiYtNrwZfLo6omLA3XgWnUUsy3",
  "key41": "3bUBYQjzUQX7Zhs58bP1TzD8rAJrzTXkooifjPhHDh4j8rskcp76GwfEMLTamq399stsRJQbt57vUzYxatGRFFW3",
  "key42": "S26aFW694JwWfEbTmone8caaUTj7eHbZCLknUedrpriMzrEDfcEYsmpXAvHpxwwrgtKhzUWBagYczCxjajYCuAY",
  "key43": "5ywXaTJVWVKx3SNSypGm2A5Rv1b2FFEK8tmmCHKJwnrwae4B19nxTJ8Qqn5S2yTGUqabpbVw81FnUk9HSKQE7HA6",
  "key44": "GAitEJmtsFZhEQtn6NoPEJBW6gmpGsSxVQYiTqTjWyLJve9zqfy6pCGqEnbpet7QR9k1b6w5qfDvpVPCGmwiH6N",
  "key45": "2Emcoi7zb5q1S2DSQVh3eazJWJKiKc76wTnBm1NzyzFaupxxJCNy2apuErhsHpuNykcgUKh6jro2KePYprKA49Ad"
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
