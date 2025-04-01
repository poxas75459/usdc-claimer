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
    "2XggoKrxJS1U2WyzUwedzB5YaQbo9VPLevQGvZ7KLfj9xZZBKVm1kPkXwKbty9Crw2WZmbBhX1DXpWxMcWsi3PGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGoBbGxr3roh2QXPoEtL3uHpDsM4e7pomJ9u56BKb6qbTaxxE3YBFtVrpYhiD25TGq1pWnBk6gCzLPtowgDDApN",
  "key1": "3uXnqXY3gpfwgoAmd8XGg5r89NqyAMocbtJJcwCD8wjUyyaz9ab4nrPw9SnYyHr3DEc2AKw4FRe77PCWxpKdYJw2",
  "key2": "58KBf4TPDMPzfahe88tbWLT5Xi96YS9YLjbLvA5EFzMQze4oxtYVcXEPMdHyhWNEzV1S8EwqhS8EKnekfknfMmkK",
  "key3": "2ovL4e3RKGu896tzuzsqigdqYxGnS5KMtaVP3nFQVW8nKcPJzG7ahsULixUzT4bxGxZ7oHmdzpBC1bNSj93ZSbZ2",
  "key4": "649X2EZyy3FL7owPTD4MxcMBfqyhpyMdPstwRZdUWiraJ7B9ZEULt72dwkK852VEzAkzNg5hkUSWUvubfWj37qtY",
  "key5": "3v3XAAffm6w2R1h8C5UBndaAqVCBrPi3u7CBrjaoZKc2i4aDrL9QQbaJ2ktGBshBTBuAx8M9qyHfVzBhZ3i78zET",
  "key6": "46EwYsjezKQc18JDLUHEYfNhwFscSudcnSRR3oddAmod9bHxzYaXyY5Pz5tmE57N8DsTLTXcpP8MLwxuNXgCYYyZ",
  "key7": "2jDrSuzkPw1FHtRT8MVNFND3HHYpR7my3wL9TXiEDtfnpDVNQqyNtZkxaYF83Qxd71Vd5F1BAHXMT93u78v3QWEv",
  "key8": "5dVaemZgKXt5Fj3SrZSktXWYosA7HKoV6aquym7wdmsFtvhyVxamDYKzh6Uj7qPoiULSJMgeQa9SceTV2jh2fbH7",
  "key9": "5FxFQqhNQ8L9aWTQCVyNgtyodmNHc2XykVS8G2eenrrrKcXcJoice2Fp7EvDSkxT4EyYa297foCppaCsZc5hrnY6",
  "key10": "Tp8D5YwY1667H3vn63AUHmp9xTMzYQ5xWnyj3W6FGQyoTExa1WowaHKqwDkgQgxCFABM28nxboJ9Bnctfnzy4Ti",
  "key11": "3xreKgpFeFY3V7Mbm7b9kFwbUDiXg63J7hiebaJZVLx7CxeBEhjCBwWrdtj259xSxS1caGBQcyBNyjgoe9snrgf5",
  "key12": "4sYECUCjaDtukS3DffuuAYVAdTK7VwmHqNx2gSQDGKbpyU38B9BMwjEycpV4t1NfKMbt6GggGCqrfqygzvYk8ses",
  "key13": "2cGA8vRcycZuF53pF86AG51jAAuZT2mf1gsCXszZnUjYpYuhu3fcjUU6eRLsNbsHNrpAsupMXK65neZTj6sbCeCE",
  "key14": "17xb3kpf2Aha23fcRaT3GA51YZxpEuWf2yk3rHUGC91WonVuczBdFgGVZTnCUxpzogBVsorPweMN7jxH8ZKzVvi",
  "key15": "55URvASKNhaCk53SCXJNLufn1xqHvpDRuX3mKPDCY3BDbGZ3NrfkejBgxvqM5DhcB7HWKDaQTKdHtfJWJRzHimFQ",
  "key16": "4oAbU51QYKgfXyA7gTty746gb5Shg1299HUTmqWjdb5ANvUr7aT1QovLHhhzgPAWpoXK1dsdVCYSJwpxf9TRWreD",
  "key17": "3Kc2u8KgpkWazuk687QyQxC9Ko924uChtQChhYnTTuvf5GVsn6hjxT9nzMwjybAtBjMwD8uvzLvuXxzGdU6jRfcF",
  "key18": "32bZ8THfBwfBakLpZUs8EeeD5WEuoiB6Ev27TW77xPiZH4HNwGT5xwZXBN7eqnpRrEZwAMCTDQ37Ab9uYinqwWuq",
  "key19": "4yVPHVTzykNiiYCT93fN69p3T5t5zYfe78Yik6FSMWmDr5c4DsN3A9gfPogFZf9Q6w5Z2pRgFPgwjftN4W9vxYfR",
  "key20": "2GEhPkUmdEUEcw1xor2K9dghyeM2e5N11HK5CH4uh9dFNAyZ2n3fBZuHjou3yLoNPRvaSf8naC5eAEAe2mwPLuAf",
  "key21": "4diVtiUWEG3KMZD6jHSRpRvE3StV5VKqX9dViQPViWqV4E27kHCbPh2YHUofSWC2qerJUiSNZCGp2gajDtkYhaaP",
  "key22": "52mK3kQf46hkXBUwJ8GWWu5BS8CLpv3wwSxaiRa9T2d342gTndq2Z8MQ6Wnfx5YwSMuvG2ywJYAGE7tvG1bwwH36",
  "key23": "3eufzsvPAuAyTpQBbhW1Pn54S2VQxMKMK45SrT9QC2yY5M64fCkq6wvuaTn6MZvYR9Uywz1Pn67kkntfH9fb6T9X",
  "key24": "3M2QHsc6qC6N4wo9g7w9rmcupdSowr9tVzTWEc3sLerJ1pL8AMxjjEQEeF1EGytDZxV8V2zMh8vXcSUPq4EmP9fL",
  "key25": "43nTrVFsjgfedHFqv1d4w6uidLzTcbPqxgTxy2hzEefYjqeKkkZ342ECLHJHwU1HEHiQmGkyWiDc99uGuytxPBZ3",
  "key26": "xzdw2MPriZDjRWyv9pCHFrQ2Kv9qNuE3a8eRR17CHJBUMX6LGkRok7KB9MaiWbpEBb1ifjgpkbg5J6ADsUWD3Zc",
  "key27": "3iGbD5Zz1AJ8Mr514o32wg3nJUGtzh2dbu7gBZ4zCZqKBscR2DLGCehSfFGPBEKB6SERYfKMmmGFqfPcHfkTs2hF",
  "key28": "3APycpR2esfa9aHn3yzw8VvgCJdsYFo3DcLz8Xpcy6MRfkZx2mi8WHdmXQwk4oSSKHUpQP292gEQa7NTk3c9kMJB",
  "key29": "62tE3umtz493pvFbJshvTWUL9Hn1JtFkkv57VaVoiF1jxhj8xABX7EwEuvTyto3Fi9KHacENjb8if5ZKcKyZMNte",
  "key30": "4LdqKHtdPtwFqpAbewdSYyAhLtVLFpfBLGjnmt4Q2XbkDMri21Jbd66VyXpa9EpcKo4fkAbJ5H8FHkN4KebzJPBS",
  "key31": "1f1CmsMDYMU7vVmv5vqthpwBDeNxqFori9ZLjxoK1pikZV9xgJ9bBhEi7Yt4mhS8PgAaTgqJaxQ2LH7jtPHwcGh",
  "key32": "3QeKRHrCMsmjXMyAtYVkZwbm1fhhADUnmLjkEKpBRFpftgKTV83sjrihgv5PW3rFmDfM4R9cniyMSUD1LCEXFJea",
  "key33": "Pv9egiSCLdcQhrGtdjw18gG89dafrPS4fZHJ7KF6ZSUB7DgoPuxgvxrYGVBkkc9xzwmF5zCcGDN5ZtAr7Nh4udE",
  "key34": "3qkj4CsMuby9xc5ueQXAXJ6NKz7ivBMRsVByU2fhyXBsyhWos8DacLy1GypCjLik8GCDuvZdFPEHhfXkVqDgYHgD",
  "key35": "4vFUtg4rfJoudBU2ZM3yFtLeGdMPKrjrqVEDUnWPtWSBrK8SpJmjHHH42wBqfEJWiZR5DAEsLiVbm9ztSV5CaTiD",
  "key36": "2EWtfFf1gX7jrNJvqComTjT9sx5PfqDaWaWzeUpkvXCJktdCrKAYwWhXt5Z64V3LDnCBxhMntKZRLt24NXdEyfUK"
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
