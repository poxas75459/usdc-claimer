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
    "2F7MkXMDd7Vw3reQM9ruyFSjM67StSDnK8QRzGr9DXRvEHfLNDE52apjJ8rogFB4tajHSVpErawJrfVowY5JdVPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQTTZXKQ2UBpeexjF2yUt85jsWbgmhCr4WVmjmpr6DBpeE8YZkBfqdx19Sukjrk3YSrdnj4g5eAHUKP6EFaYWUs",
  "key1": "2GguRuoiZHfcmS2Hy9Z9Lj7kAcMVTSsgUHb7nWqZUWw45Pf5wcTX8taVcsAG8yhU9YZGLtpDZAxFu6MDEbHNzSro",
  "key2": "pvLJCwoWw3ruWXxefCRT7t3LtjZUz3QHj5xUD4AUCHHQHsbRVJ9ikZTZyWDzT2v1dKTpcZJK313Hvtr1mbFyifD",
  "key3": "5RjVy1gMscyzCqi2mNT4huvCnEV2Y9BHMd63r7qw5sBiRWwVCz1Jpyw8mmmvp9guYEFWSX88C9kg2q1waS6pe2kF",
  "key4": "3ac1ZPZbVV8cQP9Uuovdi41LmVD7ZV9ZNMFGettjbXZgzUK1pnP57o5cZzcftEFJKP7ZPcihdrLjftUCiu3GG8ct",
  "key5": "22ct7N8gkJXWTM41cnLfYoHpNnuBkTDXrCeV6qaLRM4LGgmK8WUZyjPa5Xu6vR5EfNyysrvuoitg4T6otPHXHBVV",
  "key6": "5tLR5738SS56ZVFaPbW9vXG3mHBGyYr5RDg5YzqvDkjJR8skTRqToBQ5Hn7HZg3S2QT6F669qBfPfgkv4Fary9E2",
  "key7": "4joc8eu4ieCecq8eCcCKZSg3TeiETiEx78Bv6V4Hu2D74ZuHsvqrWuRLQuUPTNes9v3kGTvq4TP6dkrj78WbZcsA",
  "key8": "2pcp8fxg7aRSBB4bVsz57CwZmSnbL3pYeKEinbNQsygr2gkr9svurqCX6bonx92AyVsnvmHfP72beShcPUwYTDTv",
  "key9": "3mXHFJWaiF4hshr5fSeWrRPVfqUMjYCC9XVxZaRXmFfLtJ5UycG67NiY3rqC2FyfmCghDGkKLSvRUM5YetTAjxPP",
  "key10": "AVaZDF9HanNgk42yNunDsqgMbN4fS9HDmSvuNCnv5UmvStWWCaobXiUv8rQdBMcHbKK9dCitPbbUaFQ3Vnc9ZSV",
  "key11": "5FiiTBuaNdiJYoq4hVYaaH6kHFGQwYTTTbaeHqFhaDvdWratAqWf6hfTTaBftQZ2shf5mzW2tp2rME6g2tG7kBDC",
  "key12": "3Ss6YhrsPxtYj7ebdarwrEPgejNA3JZyp8gExbLcByaG4nWywh6T9GQgDmBoewL7WrZMuvquWW5wpBkKf4Zj45NE",
  "key13": "3VWnR8Acc7p6gVdUutEsoNFe6hKjVhhLAh2mEcKqm1ZuFVr6Nsdd4FqY4sJ5dT6iWvoN4PbaiwWaDQNZsrZQ7SF7",
  "key14": "4V5HJhXiLkg46vbEFrEYjYjWsqmmm69mZYeLBTxWrexSNpBwtGP4WTQTa4FMh4rQesnf1mRq5JwYJyrbNiQbiESe",
  "key15": "2jrAx9Z16u61aHmzxyTXvZ9YwbWMJJXY957Non7wr1wDfAtUNihB7YSThYBq4NE7jW9QoZasjiVYT4yxSAzsUHc7",
  "key16": "3ZAaUSoZkruYrkpuPhvRGerhAQAXU3aCDcxdsfXTtJCjgEZn89CCmzLxyDZaL28XFrnMwrP7DoJYeJgbVoubjHur",
  "key17": "phyqkVtmggM7u1MjN1KkCuwJ3wUkSKWRW1RbCU6Tpb3NhZUoGVtZkxvU2kvwbWvmxEMWAPn4dukMAw5jywco2R2",
  "key18": "4czUSmUfEKcm1oYYa8iNMVdaf96QeriAB9KGoP53aBUTbwBt66fzgtmsrnuPp6LbaWUxeJz7eUo8EavgrNN59WAH",
  "key19": "5q6DVsm4supXqGpF7LWoGyjpAr8RcMMt5au4wqbdXQDEs7ThmA2YSNiiVEXM1W228k28qSuVWiGYkf9oqnzCs4VU",
  "key20": "4UaQJK2M931E2oQ6RW9t6gy5syKcCJUvM3vd1g6HHCqvNMNhE4ShrQpdp7ccpHWmtuWGTXdBK4tRRqYE7onSWfcq",
  "key21": "3PM64eMQa4jVBpk2D9e8HJRctdN5rwBho52Bkaqy6XsmfQrGozNsNwfj3Mi5LiyAVEB7nqSjmCXwpfSGo2529BPr",
  "key22": "5FSGfgR5LLNRcjDa8sSCdMwNxvvgHfmN8HNLH2nKbUnzrjUnffrCBxZReJsLsdcH6rrfGormtSQfiJ5pfuXbmCYv",
  "key23": "YyPnoGk2cknToGrfiBkji5YujBVE4NGSFvkfH1bKtHRQFXiZc4RG79ZYJjWBg34WkiXThauEhctL5HZByApoks3",
  "key24": "i8ihP3YKd3kQtMkLCTyNqf1UTWL9Pg1f5P5G8RLGSyZHs7dr1t6DtGJRcGJ5dbQWBo83d4Qch9XAzio26oxAoa4",
  "key25": "3kKeYVubqpLiX4ho3H4UrFVQSEjxQ3veKpkqTFWTtuJj5i1FCrxQzxYrdYeASmmPMvuey7WHuyR9Ph8PpQQjKvQC",
  "key26": "vdGspf7njbHzuecR5QnTA3omUq9PQEbVGDRaEXZwcV8XCmWmc7tfUCCHxAmPrwMpJgTnJZ4VjSKPUL2rd6hSjeG",
  "key27": "LRUK6AhD9DguNjSUZHMiWhSjU6UeqoZhBC6pgHMRBZrK8RGDMWTFL5KUHGd7eUntEE2X9wm4LeLadYX7xcu2e5K",
  "key28": "37LwYG5Le3crN5JhBKE1SuxMTksc6RduVGNtpbXmpDHktuNpNPy1VgQk3VkKt1F11BB1YMgqGEsbDRXgvyxi8pTM",
  "key29": "41XZTyqpJaXP7WrV15mX8KdQMT9yRRjsEnzUL1dukWViW2YGZpeHk61yB5TKjyPUpaxP7wk31YHFV2aYBQvFFEYF",
  "key30": "3NNg85mjgL9m1PMtaiMRiaHtgkZ6ZaFtfLX3ZqXu7KQkoHiGLfGQRmmvaVTsQ5b1xLvaQWGknPMmGJM1mgTHSKGA",
  "key31": "5UaiR8epsSnVshbsxBJsHv69mxEA6zMSvRp2K9xfHKVCA9CgCW6kcCLahMFYXqAUgWdkTFX3p2gZz7ryZFytFmAN",
  "key32": "5n8rDuiw8RrqDsLgm8JAFPiAau7cvE1YNnmXzEbsV9q6G26FuGFVnt1tUeguAHpEW6YX6xQQvoDmwPyuDZ79uJqG",
  "key33": "2pB7Tyy3pvRdUHUmpRc94bLf9DgNPukXKhTQ5f4Zeu7ydfJkRb26BQZm6vEuTg8wFyFUmJgJhrynXnKxECf81rwd",
  "key34": "62j5oMKQTdJLWdytEAJU1bzYtE7ZLxAw4tPTGL92oiUeHc2YGF4nDScpaYAjucNzau7bp68Ew9L1dRYp4e7AZKpB",
  "key35": "67K6pybXH8zfXnCjn9qxC6GgDbwi2GxtWWt2TtFbyBJwDz37Wei48nadrgK8sSvdD6dPpFgGDnwcPjyFhpdfNUQN",
  "key36": "3cUcukzEHzAini5L92Ae4ZickmcmuPrGBsS7pyz2Y23knZTJYiq4453me93SPKsQwnPb4JUDfc8TYwjstB2DGhAY",
  "key37": "5JvMByovuzRmbe2ePa6TwH6xagX76oVVcTqTRJnc7dPgQhSrxDbkV3hR1Py8kzxPiUaA3n92jRvy9uP3FQE6ZfYy",
  "key38": "5Cyzwk4qY5PoFiRkgUyH8g9ETZpSChpxR3YRb4CToTywPjPG8QHLYcZi42hwDHPD6EhNDHDkszxH3Yq7sv5S7yW7",
  "key39": "3P45ZDegQ8TtKYAJEnoHkKJTAVDtJhN6dRARdvgFJiN8LT4LqFKjTRf9CCv5QZkR6iE71couWDb5xqAac6TqCp2Y",
  "key40": "3sCJxfqSpWjinvC3irfQYeojc8mwSU9bDtqHqP17KjSp4TmZgFZwoS5vjovWrunUoycH91pA5rebYj2MSLCd9jJ7",
  "key41": "59v21dTSeA7G5HJgY9mqigrvzjkFAJPS9WcBwKR4zTsHFSv7by9UpRjzPkEyKKfnkeQAEqbS51N52YG9ikt3esrF",
  "key42": "2nfftj66JqQxgNBJtGFyzsKnSFuX84sUeXQi6uNyf71Rym5nxZCzTkZ61eGLbcfbssfxo7eB8xnApufjihyuH2bB",
  "key43": "7krSii8hrDwuXwDEuegUkM5GaKVdBeH62m1DGQBTj4kmNdVpF4Hn56eJmrADHvfpAphTTd55Gd7SqKWYMiPF1hu",
  "key44": "3KK4ng9KnFwKUbZYQiyrivWvdAwJr4i8rhNL3etYu6ps2RhHfAUs3NMkufxDTz6Zt4AhT5rfco3jqZbbRr36pSdD",
  "key45": "2Bek7DaRUof2GNj1PTqNQmSQEX9bZ9RSCbnMZAMXQDFwKP8wutvRRwjJLirZTHrZsxgqXmiRiqqD8EXsUFoZHgp2",
  "key46": "5F1F1iFCMn4EqGJjYWC2rzYJBamYo2PY3WRRqB5q1q1RABur8RUiGpfMNqs9DaKuFwfWA8bZM4Nx2XisDuCwnWUV",
  "key47": "4QwASNXMP4APfe8m4WHZSbiht94sjX283fkDQWUgqCabeAa33eRbEnCthPoz3hxAdT2VjqLCbcBLFZbP8rbJAwfy"
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
