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
    "5CKSwif3H6UX9Ceq7MH4aPfU3pXdcSDBWQQP95rfYtgr8n1EjFezEnfDMduihS7WsndSdKMAVy8WYqsjMhddsarz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vkfd6R6cFFRUKXfcFexdYgVzFAwSKNQwBY3hcsRjNbyagYBAWWHKH7zky2D4d4bHwFJGWfu8u6nmiRVagLXNmYz",
  "key1": "4V1doHU3mqcYKaGMtT1ZPuHXEGfC4WRdMG6pAoXDZkiQcreUSn5DT4CqUy1AWwb1JCeCFsxQ7UckkQ6VmcFKR5af",
  "key2": "5N7NVZGyYMLfyBjz47g1weXLCsrzCSgQENdSZJZFasVqXCt1ybY7rpzMuJ1XvenetMS5ALGPJZh5avJbrs9zyDFu",
  "key3": "5M3zEwnuSWBgK5aQAKvP61QQnBnMbDopwQeXK7Qx2Coj9AWH54vbmW1Xg1N5Nc4b2iYTvPmsSg5LvX2vbuqkVJ7F",
  "key4": "2jkvJDYJttFCB3AxajNNq41YuAyxUDwhbrmA7gKkVtoertGkcaA433x3vZVmLAxi8qDRLirLAutRGU4vFsC6S5XJ",
  "key5": "2FnMQLCn4bPFq9g1nLgJHHMMNZzxoDWoYhnhv3ucxZa8JosqCEET6gEVeyHzPbFsVoAd6cLjKuwjYRjw21f7pDYg",
  "key6": "3wH9ve3QkicyygVHzHvHkQqRq1oiSdrpYq6p476JDU4ZG3Risq4C2zquH3PQCwpdxw1Yf3cjNWBKYtu97UKqjzHj",
  "key7": "4cFuyiGJbj2jWhqRjg2HKnocFLN2xmbnXvL55khfPeRPKbsEkSduxNCvUKSKKhy8cQF981Yhi6Kf93UiFDfCU3nN",
  "key8": "4jv1rVySWFm4DFP7F3od6DmvNH9VpJurYn9nFGQqphc9kABvmo5qCwNETGifzSQS8Ji4ih8m5v5MGiA2A8dJkoEW",
  "key9": "25Tdmbbz4goMgZvgJKSdtFz7bDdAgvoswy4RfXUrqbss7xwSdfV7MWZ6DUhgocRJYDR3K5cUrJhBZQXoEFUgJQG5",
  "key10": "2EpV6YnhfeJb8PAg4z2vpqow2taQqyJTAjLE4dQxCxpF3EscB2ivxrGY2PsmuiBMpifQqeJy1S53PBFVwPShjmNR",
  "key11": "DA83azCbFrjVmng79k5xDPuy6s83TQzkkp6XYzgTD574E3PaLMMdkUZG8XVJsfvn83frPpVu4PMLoqiWXWtksWN",
  "key12": "55kvYG26nY1UDh1BJQCFxXRGumwo84hzZ6io1Mup4KJ2azqJBkmYYtjgjst5ypP3crMp7zUqq6qKHsjXGxd9hhjf",
  "key13": "3QXM6rrZncbxQ8scAPyAGm4BVXUj5zawtXSmhRoZd218WUCPU3DcoETrjErSMrPHGmYQnPKx1aHKXLw4XEkJxb1d",
  "key14": "RvhZSigfxaodvjYMJkNzY5WXxTEYafqpU5mxjW29T9DYjKewMMdXQ5q8papz7Ntxx5nWTQc3ziYnsPxUppSw3Aa",
  "key15": "dmizTDzWzvbNaPYakJa3PEwt7Zsf4UWXVoGkM8DbdwKFhDLdgQG88miVMH5yFJFfC7rnXiU9kK95qqgbDDEBQpN",
  "key16": "3dnWvF9VNthCWyXA88TBDnrsxsLTxtskp7dei2ZTHG23ugKHXheYDemon6SN14RgrDog8E2NqoGnXmVdZQCMYFUD",
  "key17": "3CnaVRz51QUWNUWMC2aCgikhzu5eURXEaMpDzpVYcDtHEMvse91qccuhcMixxnEHgsWqM5ZhctvdyBmEjYXnzpP6",
  "key18": "2mooLoXX9muZP3bQLvxAp4LxDmUS9jFJHYHtEgejWkxJgynvWPbYkLDneKoQDQSzi7kCSJ66hrtUvFRNmtwZabUg",
  "key19": "2du8jD9PjqvziCnaRKYW7EnarbdgWsn1Tck13JTb5uQWdQxaVUYDqjcETV8b4o6Y4Fs83CS2vkQvAytUs78buJ1P",
  "key20": "cQHA2BRfkMWDP4Xj9XUWaYdncgYyC4K5ZTeRLktjUxnDTQ2rANXUczhqgpQCphxKpynS9LrMKYZVeGRwUEgUNjp",
  "key21": "62KiPpC5DkfKFDyfHygztfuTcz3T7hzvbiw3ed1kkRfhKwfWHnVkwMPAWrW6aihFgGiYuVGdxLtGWwSdLu1dfryh",
  "key22": "2u5vPz4W9ZNpUzAYSknLFNuDpQRYTH7m4WczYSnBBpcXj4mY8quHhBkCjUmUdnSwNStydrn7Wc5Fq6c1eyRhGnVU",
  "key23": "Qhsdt3Yd7QjJyTD8rSaeUpA5zNsiGJYM8TSP6pb2aV3dnwg3f2QCTiqVmCtwm5NTbRMcgjrPeHfcmTzWMGFcGPf",
  "key24": "4iPua4a9brWhUrgfqA9x4Ku5wkEDkY6FxMHdfQTfo4Y74Sosbv29znzUAdFBqkjwL88hvRRBDPkhVPCLZjbssGM6",
  "key25": "5a5Hb6qELxXXXQLt8m3qbo9Xuga6RW6tGHeuyhxNpwoL7A9vgaeQoU1tnDF5rWYvZ9c4ELaHTB6JY27ut3JautPb",
  "key26": "5RZspKUc6B4ohcLqtLo9FDUjRM1LRcUZxZkZ2ukeaso4swS8RpxFPtqzxnoUiSFAVufCZ9C1RT3PrgGcqg3chWtw",
  "key27": "22oYq1Aj67KBmox7CP1ySXitmGoN2EyKAM4ZNrT9AbDNRWGnpeGAiabAMvYWNv3kf2P5xGaNDEZQYTeAtw39MMPV",
  "key28": "2XBoHP1MatF3ovkLRjfpm2XyyxBvZYk14DM7yuW9Vv2TpsrkXPnppTpR3zZJsuxZGEekQPyviDd2zuKCaXpQ2gmn",
  "key29": "54aqchT32k1F2dY81D4ruDrLM7U6rhgubNb11yPvW1iqgAY1iUBzCHapkXjQs7fARkkTcZGu8r4WpRKqMfpjEoQS",
  "key30": "3iGKEvqGfucuVj3S6u1aLfDaKSTXoNq65R4v19YYrcxeU6U3Qf3Z179UmJ9c6HQFXHD6nxPaJFNRHLSobDM1nVqa",
  "key31": "tLHKNLS6bnYLst8R4iob1APTaAyk2DBfR9Kcmn8DpYKfv3SPWLZLezkcgd1cNcPNuG3nG4gVjDj1zsjFmaydLpN",
  "key32": "34gs2PgnaHPz71LPmULZPJ8L7fjXr5KS4er9A92Dtdn6L6yYvHG2DjttgQH5FEb1MbCyxkBCPbimVXhSvsVimW8d",
  "key33": "e8h3BVZ8JxdpN3b8kmm9NtL2A9Z8Em4c9wtKkE2WQq3uagZTMBAnhvFj3tQ8m62hAQHcMN9LKsjuyLtvW2f3ZFt",
  "key34": "4J7zLHz47eLgQU2Ljcgt2yr1EmrQkDzmDuUb8o1biwArYRmSU7m1k5nkaQz5AxAmUPLddZJsqvSuFk7uS5ez35k2",
  "key35": "3WfmRRAMHudG2VFzsUKNguhAA61t7TPcNe4kYcHCfWi4RmL8h4C78ZGfYBZ2EPRfCRKNrwFDBQwbR8VkeMiJAWsz",
  "key36": "2DWgCS65K7WdbxDzUBFt9YTrT26JQ3CfzUWDF3YMfGu1aTKj1WdvnFBK4uUv5pwc6uJ5XXc6oRuQB2no2vhM1Fv1",
  "key37": "2KAMYpTrwg4Zk8FPJJ1jySJq2ytLsFpapUFCsCNxdhtrUFRmhGqzSpqi5KZm6TkoRaipbJV3qe9PibXC8gSdQw86",
  "key38": "pzMB7t5PNrbCsHLG3N8UQr1YjP5Mh1BEJqT1Tumzmsnm29SGoMgxA9QPxxFYy9hXcWgDXUgbi8eCihaixMTpDn2",
  "key39": "5tFdbZsFtU1y2YZxFpySw7RsASdtFtABYJ22GeiU6HNdzgcNLMatAEqLzyqMRnaEdhyCr1yS52LSkPvXECKtxnMy",
  "key40": "3HB6kQNmhgRiH6jT4WVdJ9GQWpGbdVTupFicqc2seerXKZhZDZe78sPt2xYXtHGwomUc8Ajm3WkJeioaoBJde2aY",
  "key41": "3DEqWh7vngkc6vyn6H3F3VXUyRN6wf1wmsG1iG9RoSfMfv9qAsoKT6CjWCBU5KgQQVzrHfnjpFx7ZbAsgxADrk5x",
  "key42": "3XKesSqs98GUTbFQnkg4S1xnpbnsMJ7Wm7jx1RMEugZmKrsqCMaWDmT2QvJtnh8gRFLn8oWY6cXPjYBYwYrE9W2c",
  "key43": "2tNenDuqfiddmRxmPcNhdspvYSLf9jALSZ4VsZm6ukJUJo8fwPbkCSBhxxu9WAEKLz3Lerzw1t4W5ZvBM1WhntKo",
  "key44": "5bd7igMrqUoiF3AtUvHFAMuvA72kqggD5szZajrUT93FvrejMoHB7LtyqVKLmAgndrvXWJws6cXvFniwwuMDvbwu",
  "key45": "26sPsyHaPB6Rjzh7CbzaNgNPcvQaimHuBYMBKv64ULYrpXVszY94FPgTLjnNo851MBdxPia1xYciQZfWF3xpjthE",
  "key46": "5K1AKxFnQLt5SQEb9MrjsRSVUQRxCmLV4c9ADx1EEhZwxDokjPo562UST63q73TevkbAfsrWPhrtDWw8eWGp5C3Q",
  "key47": "Gb8LBfbqcwoDTrnyR7ccAkp4oMg6ttr6wLo6C5HA2uBTpeKzbL7Ea1pAVBJ6HSNuqbKFTJzqyTHXDBsGxxjmrgb"
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
