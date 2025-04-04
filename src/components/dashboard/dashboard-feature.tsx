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
    "4cykHrAQeD79cHiLCm7MrS8K2tU1evuecTDi4CmWxLx74LPQU41guavcQb5rqmEPT59RDUUQBxEg1fAVQwjFZg9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZn8NsuxsB3tWdbjyuB2a8wEkEJp4xb55M2V2mSAu35k6Tssb5Yi46arnu9ZuBZrmMJrW85XqdpKuKVAwDnxv8B",
  "key1": "5GKpHZwRw8PcFEKuxT26CABDaarySRPvVPcJwyH9vBrsagaHK7z1NQ7Yby9k3gxMZxPCCn1tPKzL2iMf5e6nDv5p",
  "key2": "3AWorGmZiPerDyggZVGY5BeDhuaHUSU4V6AgNgRaZPsGJgG5Z7bNiCJZKF2DGted7ZGer7mypLtqbJePAtxv82Dh",
  "key3": "5tRMo6B7NgTDDAnF2bFwNF7kGVxottipXuKKArU8LAbpwBGdZobHVaGogqVWVvWSC6dq7CqNHXPBgGZbf4BqGokC",
  "key4": "6Q2vwNgDNteTtMWhzMM3DQskzFgdKYpS3wTu2GykZYu96yYdiijY3JBZQXeFzkGb1gwrcABZffHEq3noSdEdHQN",
  "key5": "2BQvto5t5KHRsAGmdSNDryNiF4Fh7wRbeeDcGhVA4vvLkdvHqsymM94wbeB7ruj5fgR8MoJZppk7soa9zKThoACr",
  "key6": "3VEHxh2ZpxKajRafX56VfSZsssAUbnjxg9exbRtTPNDrCryhkFSrHCiRioMZbPLBkbwZEUrnZB2cY9DqKo3cbdgN",
  "key7": "3a795vv91aTRBu7Xgg9Ujv6U1n5q61gzK4u6s8e5D1CbGqVmdaXZWRs3Vj5rLQUwwrD886csRPm2U5wasovK1W4d",
  "key8": "4j8c5jyF9HfQ49q7Q5zysFEDBFWwdHPbRZ2NEZ3ugzgyivVe44dXsx9H5R9nCWryqC7tsupoNi9mauYR1EUra3wu",
  "key9": "3ef4zYMQEGSE7vqdSrxoLJLvRsACBrfE5w2cMGaiD9pmst1a8fF5WL9gBrf6zvmvpnN9YfZonZRwz8JgFfhcCmKN",
  "key10": "2fCrdzTedXrTk8LbCgGFJ5jTJkcaZz5RL5G7GH4tYusu7w3HUDwHJdPiqHZv48vHzRwu5x5t5dbDSSThGYYjPx8b",
  "key11": "2uUgTFbhaxq13dRrtJEc7Xk9x6dFF2fiLLcC6P3N3CEfgw3DxeTodH5frh8hWaT6ZGUwgRvW6eRucX2GXESq66gs",
  "key12": "4zvSoCktT6HsagTCTdYZ1Ray9Y2ykdCEnknZ8YscfBTp7Ud6dVVHSgVr6MMPtC7a6oSSVwDxQ8ZyqH2Qhph6scFW",
  "key13": "4pD4o8uafhkHMW5S23kGkfthgXWgBxSKvtKQxtCBhFV7huCv97ja7wq4KvivGnwv2ZgLsPZrW9b5KFW2bTDWcTCK",
  "key14": "5xyxKbzLi6oCpCEoMwzLNjNCGKD5AgmVUQJS5d1daqSC8VhXNY3gvTBhKPuZWpKe989XBTCN3vqxwC2PazDR2x7L",
  "key15": "3LWfjiZdoDHycF7CRY6WERKfZEmERNd4d2eLABYFbbmuZFaDnzXWhay4eeGB4zWb2Cwe5Avyf6e7JjVngCq8SVfc",
  "key16": "4kjZ4NYhh9NWaHP8YQGN3HkYn1rXfbXihJmTzEX7Z8zwW2LuxgjU44bELLCTXU14uuds2TJmthdZNttDivqmCwvP",
  "key17": "oK7ZLo3tqMHNpoeebqk4zfgn4hShynHALXCGqQpksxccTyiou1Bgaaa6NBhB5Yf6esq8jg9iGSA7L1MxXMSZvAD",
  "key18": "4HXBk4Due79MTR2yTmL7WajLcRfszZrMfkv5ZwgsLt14tjHnnGGyeC6xHmkv6f1N9R2bcDidGui9p2gVJrR7jgZ4",
  "key19": "4GuSBD3fzX9RRfdXoLS5thn89cJUT9CXNhdNYxi7wv7eW73C2hKT2QXBZ1uxx6qi7ttPoQ6wtujWKeNDPo85aZWp",
  "key20": "5JvxMRkvjwzZYzFjR2wJMMVMBA4GzhHDpu6iPMmBJ6JGwUTsF4FK4ipLSu8RP8fb9aBGwrScoWeWuXc4SrRQugTv",
  "key21": "5sNS87Jzwo37RpNtVwqQjQZtm6JhTNJD2eWfwJpLfTfN7AFcf6ktdRGx7KeDe9mdSTUJ8FcKoSWi9tNZokDcU92P",
  "key22": "33eUzhzTjyeZNpmwrgZkYng2oUMUFCn2R7GPGutWY3DPrxxpLo8Yhy1dqtJmTfqUTU2nivTNULgo9MYC4AJHgQQh",
  "key23": "2dG5dvL7AiSva6ZmHBz6KHXfjC2K6ziNQmBDrHeNz26KqH7RsDQWqVKnp36bDCBTPKuwgGyU8Bwc6mUSLt7KWcbF",
  "key24": "4a55qW8ZeqDu7GSvpd1qGnhWrPRGnJjfQHNHeG5EjaZkvo7W4c3FJjDuseWpZg6DfJ4jx2ioY4xPWPXmGC1jBY3q",
  "key25": "2fz6n2rkpteXhQQNeiDEoLava2YMEQsKMjshvYiBtari2nesh5myU1vBoKT8mw5wY5dqTK2DSTtUKWXKikGJxGz",
  "key26": "LumHEPTYJNz8PTk6FfS12JbvcpcUy6Em8HngpcFwjn2aZ8QSi1eiCHozyT5Pz9Cd2ieDuzHv3mAAEJPJ6TaBjTW",
  "key27": "48ifwW6RPDwy88WSNGBRg6dMV81f5ewhTsmZrgrMWHoyVAnbFGEdir7NjvzQ1ia3vrPUihDErmYd7sXdoncagLvb",
  "key28": "2y18XVaG7m8iT89cb1eje1o2GNXqtTMtLT6FDt4rAvai7LdFdVUDTZpB6R6nY3Q7HR17tPqT1Y7LXZTJH6NStH3a",
  "key29": "MANyHkNhbJe9Jw4heb4Kd9puetiLA5L8CdNXEYfNLQq7xWByYHBwbQefxqAuBgpfL6ysGsHFD2PwZNzMRBeV8yY",
  "key30": "4h7sn3xuv4Dq5otLU7qw3Qy5ZsZLSzEPz2WK7pE6kJEGAksuAWvKE6ETnx9LMLmd3fCMi5UcA95FMhRSJ2qLhMNk",
  "key31": "28fMiU7ajbZ2QBHZnzyazPeiaF5XfUdzvNVaVD7DAL4D2FNFX3KJpATeAXiJMJi6C6YsNrqHWWaLeUQmsKagqjKS",
  "key32": "f5rrQZPQUHw2BFyQhfLe2KddzkgEJJCr3hVHgmuPwGud4hmHf1fMGdup6qx3LsSwUSZzNqwMGSo2oAmvQ77SXRF",
  "key33": "5nQiePau1c6pCBjNmGGwqx2nrAwLXfYiKtzUkY3Jr41bmScQyhVsRRe7fBvcBSzCyPp8r9HBoH5oZNnipx4h9vPG",
  "key34": "4wcbKfNYw3jmb1PTioQRRjA4FnfBvfUxSzmgjSHbZhb2kJ8CaU5mgSoxTvQtMATF7TNK1Chq9otbhTUiKkx5Hjbt",
  "key35": "4vusPQQpbxkabTGatwNbVNH7T5dSnEfGgZmN9gZDzBtLi5pikxbB4LNin2G7ui2k72VmfLr6A9id5Dgh8Gei5mss",
  "key36": "5WUaYcgmFCvd5dnTtvTctDbeT2onRcPmbD9uV2j3vAr2T7517NGkUCPdeZFCbWm4rA71HbhugfHSGDRrJ1zS1SmK",
  "key37": "22vzTAVK9YbGm1qtZgRkF7e8xeNkcDX9MAfb9T33b3umKFgZ5VKDNGfLMJHEHeb5omavRKJvvxrHBo8nRi3thpa4",
  "key38": "61igJXkFXSEQ6RGMbPdkFRAqTwbSzFyQZEUFZqREUffTo5RA9fuMv1n8VHVCH3uSZQfDkShwgyeWvcQ383M4xocU",
  "key39": "263BWqHxjRKcKZ2KKDBxDkXWsBGrkV5PzRAtjvEbpBwWABreXeiqdyugjjfiHvTatoMEUwzaEQVZ3Ws2MnGjU2ph",
  "key40": "2HB9KGm1aYnsu2TsNKLYQHpPGZcZLxM1uPvkffLCnW1bpuyiV8MEdAzKsiSgLLqpsqTdtM5K8zAFK6fJAhPZPSUd",
  "key41": "29sSZ3Gu835vQ4VMEjxWYVXJACKEv5rxG2L9SyHgqJv3jwhur5Pb3DYLCkCTy3qo1qhAtQ9chqeRKWUkWdVKookZ",
  "key42": "5wj7Q18D3Rcx8pYb5vh7iMnGSPNAuQURZDhVcXiWHdDCwSv6XcvmzmFYR5Mjsfwr7sMz7WFhAcWHFTHKRqZiwY6v",
  "key43": "4NMzmnRzfnLP5dRuuuWnNWoJV4w3ccvDJPSskYb1ETYQh5id6r6QwHGboWrDg58bRn4SKKavZKiJQTsxszwRTrmv",
  "key44": "4QkfELGn2HiKXuSKkXpm2jGtCSHUdg638K8F8eWSuGSd7xKSqwceAF7ByAqkHMd6KuwMNCtYfs5GhGFZ2rcZyyRu",
  "key45": "5W4JBvRz99qucZg5dGof5zAcUnEY5GxXf9uQYx12fMMrwt7AtSMtTuo7UtdpiShGnHQTyPDx6U3cYaWDggwPmrS7",
  "key46": "3ZaZyWLf6R17Dii7N3BFbquyYgPjmTEgpGntRktJFJZ4e7TZ5iseVe6kGtvbwUqJb7EpacZNrUit1MEw8AQwnGod",
  "key47": "3v3HvhkcdoKRgwwjgL2ESKqwbncCGLT5FjMaJABKnN1oQuCQvzVrTqXKFv793n5XjhtGEgoh4FuqFcwjKt79vghB",
  "key48": "5V6fTqgbad3wdnUob16UM6L6H3885q1ktwtRL9yokcGd5iMwAdvQgu2orgX4ZV1Q3RX8ZmTy2XaJ8863MKzWb6Ht",
  "key49": "fXJDpvJJXoCYWwUXVoeAuyFmWFxbh4ceY83ESocL57hVVDf2GiffSVwveSGb4tzQhKaHngPRDQNxBP982kWSG65"
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
