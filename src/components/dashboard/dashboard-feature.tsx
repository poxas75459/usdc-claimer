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
    "3a79SJZ7CE9voamuZoEEuL2Dv6ESRvwywzaEoR78v6pBzQ5poXczpKKysBNSFjaibW7grY3fgMe6gdspfpB9nnAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3C3gSjBy6wu9KC7WVgMJFx8wWYrjB1fg9FsFwVNsmvSDFXbz2uDUX8VP1EiJDcSxmKuqXBxttLjuP8RtWQdNQS",
  "key1": "5HFdCQsjGYUc6KRVSSvwGdkbqYeGyXJ8Aiu7VkKPyEuWgjmfVs5Q6BW2NXHFyAeQxuQBUDjZRcY82rAmoKzeG3Np",
  "key2": "eQC4D8MUVxg7SiqAw4n5xzrhimi8qoMu2bc99m9XTAi5aFaskRj6JCDcjeamrBSbZAmg3ZU7ngZzaffKFJJwKTQ",
  "key3": "zw11WdtMTn4weqpcH96zHckuWqsBDJQCAQohbaoqaTBR6Prf2exWTaaNCi7LC8TykGvoBcoGcPSbEGeBRxigAeT",
  "key4": "3hM6YXhdgKxuLQ2bpHqo8XiPErvWzhmgMYihEP24Ufs5FgKcMbxpBU8PBYmu7rznWxA87mVs7RtcSMKFD1yx4Pqg",
  "key5": "S5cQFinmNDiyBX3QJmrLspWmJNZsCWGKzmXykvndC8xou3wtSveHXXXvtbJWjg7nYiHWfkrazx5YWFGmyfQfQsR",
  "key6": "3qDW1hAHur9uEAb7Y7db9mWj83ceDSAt7UbZirDP526HLQBmNmc9sbUH6NhsWXR1hJjDgHYVSYNiZBWRjn15RqSf",
  "key7": "4SWLbCY4hTdAnrkBLUKFDXy6Q553p4oxDQcwhRd3dJU4PmUPZ9pRxJciWBgEY4bygQeyjjWUC3t9r79TRCmVKzza",
  "key8": "3YraRFFxHnzUJqo49cLDhqPAefkvW8SesbZv59ffFujj22w2JCD84KgkeH2DjHjazMcoBDhx4Zp5FvuvUgo7q2JT",
  "key9": "3GMFByhF3adqHiEvxwixwwbCuVN5W8kVHWZqDzDGg5tHq8pwtM6W3ktPfTcom9eSz2uQr95BY4ufaRC8WGhyNiNW",
  "key10": "5SPUBS6oxriLxvb6sh1jjphV8XP9aZ8mT8GUyvbuALqXTiQJ9jXkRUiT5YFue2ZgpdQZ4Cwj1qU7oaArrXuRk3R2",
  "key11": "2hwpgE55XhtHME2NbjKGZhRi2He555iiHxfeEaS2WjkgB8G5KjcADYi4gQdrjr3ZjYqrN1o6FQNvKMJFDqpnEUm8",
  "key12": "4ok2m2KNKUfDTshrEVpp9GDPUmmQeNWmLJUUAATY9Q6da3itGEbXKdLmg9pdq3S9Kj7GkoSW2DzTc5ZsrKE5RjmX",
  "key13": "2YJri4ENt16hhpynLhDoRLjQCfUbw3XDtttkZy8HHBmdxqwYktsng1DaPW1sDNLNBvGBvWSQTW8sjAXedYf9PZnQ",
  "key14": "4kPpKJbRFXZpqp53Mqkxojg4kg6Hf23vqNcRY97Ew8VDwHMchAZQwxgPCYeXFdESwdRwSX79apJ7BBkfjYmPckmf",
  "key15": "2jxUYB6PHzSNnVVRbGjpfnbpM45vRGjHMMRkE1CKKmKofyEap5JeR66yJMSrM3EasRLnCd49xAJBXm5zmsgRPSt9",
  "key16": "wqCSAyqQrt5TGWNHRC3sfs2LiXgjX19EzppWiDvgV7rwmPtZCJPV7jnJeDibGmtmY6ttTVRFHGFAJnYZur8aAuU",
  "key17": "4v1ScFFy394DcBunXKa96ds8m175dWyF6V2JVfapkaY2auxBc21FH6efrGWcTVqR6TePaRj5UiKo25HJzPCbp5n9",
  "key18": "2dXwTF6NNH2ATdfm6Aab6TncFv1ZLiW6pbprD5znKPgLzLZPxmx4tZU5Z6hevoBqrkcB1rgL4RYsUQBuGfxQ7Hed",
  "key19": "4kFiSuRxqBQ6Lbf6L5SFvCiGzRPsnG5xnrxJXsTjCdHZpnvYVaSMsNmN3dfiBmTC1SgN5cepsya9baWA3Ef22S7F",
  "key20": "FvAgxDBamNEmxPdQMhox5Syu7Zc19QMgBGNy1aQh1HndQGKxovZyXGbaSSvH7W7KpWk5QyVbpuJZc6jme2UbUxi",
  "key21": "4AsWeEsHWeV8Z678viP8TkvyvczJrZCPMfpHPjEWzcK26KYaZf6wrpF8cmSzy1M6guK3oED7b9TLzyv6A7paxbAn",
  "key22": "5zo3FiERa2Tpjpk758ExNUTRXa3GP8KJLr6GKTVkchTJquzngrm4in1JtujUjdaXqWTpokWbHe4CYKN2Pdwj8qYh",
  "key23": "5WEfFgxD7Dt4Zc1Nq898aocZA5zwR6CDJ7BCdowrfJQnLQAjr3ApUBL5yJ8ewCFU2eHxFy5ouAcfMxwzsFiZVmnE",
  "key24": "gHSkWtza4YAWBU3niJYSWfEiTUPdZVbzKsRZhyYS6Jb7BsbWa5naL1MJWTbDE6JUTkm5WvAVXdmmbU8FgjM7GxP",
  "key25": "49iHwuNKhZv9GmmZHxYRkAm4rcCcTyoByKEite5yczmDa6SksR3dmHz8rUvRhNKufViRXjKjJEJ2xLPNoj93Ukff",
  "key26": "5sCQYCahHxVnMQe1S61vGVxNLHBZAjwV6No1PGqvPucZRHwYRPQPvPyrARdscsq38DWf2wEVgJhLixWBYb9rkcSi",
  "key27": "5BU3qbCMnpYBCDgCzs39x5QwD4ivoCpAtenWCv95qk98tD1yMiM9NvQxeeYVGM8TG8JdJ7gBarbeCF6E3EghVeX",
  "key28": "5qm1nXoM7WQ6xNbzeFGS6Z6VF5CkktVrXSJwkee91wt1wwwjbWvQZRYc976VJiyFoMKPARhKM7QnVd7bbWukSwpt",
  "key29": "43ZRAVK7LmgWeEaFFfdLKnkxbCExv2SymSSFQ4Q7CopXmC2Upt5dPD64aiaSnsp3A4KWhPtWGakKwh3LHnKnMMoG",
  "key30": "4iYUUxKUjmscPvkBapTDxpFSsEfJYrUFThQjAdjcYjeAbNAt579cVqyGUxe5goDRb6as6j8JxucexdaaxFfttM5Z",
  "key31": "4s83nAvEGALfpE4EjVqaY6xtXAfovqoetWUkTAQ1LFWFeaAHWoSa5qeGYcwTULmBVCor7g4hXYcyEuFJouya1Dio",
  "key32": "2mJde4V9yh5NcgKYmQ3Eo8jamsybxXK8JdjEvQpSbrLYFiVguHuTZR1KAtjb4iouSf4roaqFZibTPnxwAoXVeyvd",
  "key33": "5wDxBpSp4P7DFoBgAkRS8dYzRfMeWa15H2GDeGuek8Vp9MgH7FeVgo2wwbFf6VPxkXcJZFrnKo2K4kgvzGa2Bajj",
  "key34": "2qkagiY3cfAYpNynt1ftoUhwRuokGLowMwFgftjTmDfBBJoNdp85o3xqwf5wyatc1NPnewiD1oqNGeiW2umU9JKx",
  "key35": "4MQBY4PWo5f1avThZ8q387SBD9iid9944AZ7YQAMXHJFHDG63NirPvY2sSvsayUmMCXiBB5puFt8TNfzsUG2peDt",
  "key36": "rZTAvarEX2wxn1CBNidwfEoH7HZ5SvBgC8hKGbEwcJxn2o5iMU3xHKrbs2GiACUTQ5RutKeEoRTbr8qhYDgGCLz",
  "key37": "5Gm1JE5VqGrT5SZQPxEHW5wc8r9hxRmYiRMbULbL3MsBX3HVLjifqh7kgnQ4d8D8PAfT7obZ11ejp129RzNeSgy1",
  "key38": "4AmnQmmCfkmJsMVErsmSo7wm1MoQsqDzVzngyjRhkguyHMfjNwu428ExyfBDBpxzjLmg8hGgwZrBdMEr8atsyFJt",
  "key39": "5fKtGpUMMani6LRxcFXbjCu69Y1yno4ANxe3jvGUV1kz6vy7cBgjPWGurTgybGw4ZfyXthguo4t22nK3SNNJcX9g",
  "key40": "47CdP8RfKE1keye6jHZs5H2nDJg8eG7rDdupHuTDzn2Dds1o4b4kfy79gugqvBSAcn8jdgh3A2UPxPnohJfxeT5x",
  "key41": "2cWq8iWDj7FKtFJ1RKW4MpmwUWkNSTEqCn3kXsR2J5fanURs9qSZrWcXM4BWztWZNxcP3u16PUHFUxgqHQiMTnRV",
  "key42": "3dCuCJy6P3acjmojbVwEKCMUE9MxKuTAzRzUDEcDMZypWUVndj86SLjJ5mn2HKoasjtYz1Wckx3eFtSFZUGGCBqb",
  "key43": "4uDLDPgUKD543ebf8uL2HJULXaBtffyqus2WcAH6NncRjxbuRz9VUK58VMg5MTXGysxnrkh5FxYJRTdXWAcimHZh",
  "key44": "3L3g7Nu7pzMXBWSm2arjZRpphEp91UTp66gYUEVPa3JZCo2JbyRbKBt2oD8HjtT4hsQmJSsmqtSsaAzpFjeNztmF",
  "key45": "5T1Q6XxW7jTbjCvVAcLy46RpNvVKXT4dnUM6Xtv3QQwi7dQ5EpvJyBB7fHzKikHTTB1NZcimMTHcsWay1PV45MeR",
  "key46": "4S474eBrGWCQKVbpGBh2WHQRyowdPF273Yuyz4QgXVWCnTPQNpPb48NGrLKDCswRsthzHCsknkJGESRUpjEUvC5Q",
  "key47": "55k3DSrN7VtcJLoCQAVHpwA1MYpkXZFESb1zRJj53ZXreEzJAxLZACwNRjunvQX22QhD7Tr6NruC9NfEkYg7YbTw",
  "key48": "3NxRxFZGEbgqjmhJeUQVcu2gPbngQW6Gk4tmbkvrtjrZoK9UuAvNNN6pCzVdirx9ANHLxEp1sVE2LucZbexrgK68"
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
