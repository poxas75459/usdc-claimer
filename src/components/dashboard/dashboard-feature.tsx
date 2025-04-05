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
    "4hB9eqeKCNKfbLk9yRqW1LVLSK8NfpRgNBLA14Sz63kJc61UUgoqeTwDBBgzzemNix5pWSno9JwLEdJh8VG9ctnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258W9tT8vZtG8ZnaqHzbQ32YphCjHt5w5HpEBiB4sLCB4zvGCXjjSnHNsuKikVv9RcapAnnmmmXTao9hFVc6wWaf",
  "key1": "Pp3tqJpWy6BpJfSxHvdYhrXbE9JpTFnij4S4dUBDAnGRzJZh6xnzggVGCXhUte6MRXbNZMmojk6oZtY43FSCckk",
  "key2": "HcHnPonEWRNS3pkZQVtbH6YgxwJd7N7QdPqPjkTNh3oQDyghnL3XcMa6BfmcR5r5oz3tnDcNGpGmWXLTUBBKizb",
  "key3": "23E8URjkg2szQA2eqeLW2P7edztb8R8fLvD2HNYBibK21N7Ngg4o78r1tXdzw6Gwg2kAJytgTbc2ReD5vni5oa25",
  "key4": "619jrRRGUf9Z71hkHzDdPePBwoULWe5jsKnMYdnZGeGvXJ8rpCzjuNX4uHRJHRrWHGDFi9WUc6qd4HxHkSAsVRCX",
  "key5": "5CdK2uDk5RQa9Dm5KsKFE1dD5u3tVWV835jdDNhxyopWYvRd3WxcWFgQcWFe5eTB22A3cPG6vyozUCkxRzQZ2iXf",
  "key6": "36e6wHQ8ZFRtfxrKkbYXR77DrvHJTterqNxfRPF1iEed7RCWiUCooUxFpuQT9Hi266kBRSnUy87WriZwHJHAHDe7",
  "key7": "4HoqyBH1pkzatj7APii2PXPkjZZpEc5XDRxzex652JdA4xHw19Vghbexa8VDWn2dis6Bn5i8EBkMxVsUFRMkwT63",
  "key8": "2nBfRPwXazdqX8mBYJW8Bg4R6SyQsBosA8Z2YyNtKzNG2z4zJYat25kh1N979LdhTVdRiEEpGH8QX9ekQKNuErYi",
  "key9": "27EMV9FewsZ9HQhsAJS4o4vLhnNHhbCcWuWuRMFmVCTgGUFM1gNLdHruskBsyr68ySYuFPsk8maKrU4zKNbCFdH3",
  "key10": "2QGdCiyCBRjHLUeKvhPaPZwJvVvpTy9bLMEGRFMqxySXc7CFizaEPFRnWG3WioosVvaQmmRc1YbJwLfT2TM6Wt8z",
  "key11": "tF85HTe4qMh8yWiByYMAguxfRua3Tw1SAwxnJp8FofaAp8PWv7E22zU1rD1QeTvRiRxQhSCgys2JJDpnqVKW3Kv",
  "key12": "2XFUh5UAWmwQof4hACqqokVGzr9oWz4mZeqNk2nuqXjDzYJxuNxP7Zo6ihZxTi21eBj8fZxMXJZ4zK8gjckrVnP1",
  "key13": "92vJSkmJzHuC13vwDJ23owEFA4jxSqsBRBw3ZCmBnyDNUxiVk12dUCLDrda6WtBbpXtBDoQzd3mfFg17CnQv2mn",
  "key14": "3Y1xSK7XdeBxZo8T5YnMjenPHUwzwgczEzTwwmjfemNMQY4AyRWBFGhKPqhsanZjk5bsC39f9FH5L4FimYtFvwLs",
  "key15": "4jWWNYoac9BbMK58AMVhKs4QJy3uvV2gecVhNcPoVQsGMKWUMiwuk3oaqS2iSTmqicH4zg28kacydthJLyjUVikr",
  "key16": "2SJrhkDWMDeFEqmYfqY437NGNRqtoWtt75qqSZKVkSJEmmYhiNkWHjFVVfeJAwK6BBgrn4HRm5Y18z1WnG9T4Wus",
  "key17": "2adZb1eiHJwn8UUExynzAwLQmCscVG4rRgfkR9txPKw8LgzvFTn8ucyuBKby9tUFoXTXkrNXRb7bR34vX9Da1Rx8",
  "key18": "3oAa3KxVh1Cczh4AQszWDhbYcme7kkvZh3CndjsxAsjweKo1GmPmSf9MMuensU9wphUonsmYeXBCG4ePCgegmT1V",
  "key19": "5k1T3EhfB4zRCWZ4i54ZJtU3GY2B44tAV5MqT9x4GomhYjdJKxyn49fqhrX1rM45GjcRj5Cc2f8NojunHyt4t6Ba",
  "key20": "4df5jZxTGUw4w5zDnwJMo8zW2AGpwCqiWfitcTMJcUDDJDDeGQKE9n3UhLjjXXp5YjTXxHjKffQuCYj4UhddfGk9",
  "key21": "j82Kw5WMZn1b8FXQ8jCzUduMokgpdG6Abb1wrhByMUG2hkng21YhJZgTj3tC5yVT8RFqqXA3eKmrvZPtFCaA4BP",
  "key22": "2ae22kbKkWLi3vb6CtV8MKiSurSQ9CLpwf8c8WPuqU4VdnhxzD59P8dMnasujAqQdkUgu3SeWudWv4ZfPLpViqUG",
  "key23": "4FAHG4Pb3gp6bw4htKAELUddx9s1wD8CxWPdzZX9ib9J51dLsZ7DrvopKXqHiomAZxrwbFacBpJx6dsRWVZdj3iR",
  "key24": "65awZ7i8KjbPCdtTAxeLrxCewKHTm334p5Ed3kcC178wEkif1245gSQS3kgrGtv3Au6p1HA381QfhXtJgzwDRf5R",
  "key25": "5QA3yLZGZwQ11agh4ux8t4gjnpbA1xaUW2po5sqSJ8FjFVuvoY6uk3ir61rt7SrKGEYKGuf7VzKSLoy3FhPW8tZT",
  "key26": "SCfajuH3H9NYaAHE5AVpoJev9qbLsKxRF81CWk81bVCnN9wqnnjoG3mrh547tdgD1nUHfxiWfKN5rH6zE58xMi9",
  "key27": "4x1DyV4yMjYdCtGEQoNHdGkoc2jMbBof9Zzex7EFynPPAPsfZipSUMC91EGyshqPrZgPSQya2bxbcP51vg7tqaNi",
  "key28": "dJQGcoYJJ7uN87erKLiH4ASoPXYbJbYpZQQbE83XmLFod4LGxHKsGS5vyDdryYtp3KzkYBPwPKnZJLK8gt3TBth",
  "key29": "385bgufmuNFHvcrMwozp3BkjbjdDCdS3i33ecGk3sa1GLZyn9Ba39Uyud1NMCURpLhMgmLa6jEiotWceNMuyADUh",
  "key30": "2PMnoyYEfTzHusgtiS2tq8tMiH2ZMxPoe93TEDxhWiw9rvS8SYm7KQMKwhaxJ7sfJoV1Ui8wt4vjxtonyuc7oDkk",
  "key31": "2C5xZs1sPsneDEp6Q9y5F3upWbetw1tsaXk25A2XokiNY1VgxkbnuhMsedK1FSsojF2WYENpsyfZ3sVQVBQWuoMV",
  "key32": "5XsTtdX7CdNg6aUZiCTuTVgcvYqwFm3EwBA52mvvZjeyv65aVhCis95BULUCarxaptDbBPu4ab3DRKomGLr6FBbo",
  "key33": "5sxtHXcQsrj3KuutYiZ5A6LNRCnyeJmGhF8xzoHP7rkXPt1YNEk71phw4Czuzjdhw64KrtDmZoBfXB44r6iiSx1i",
  "key34": "4yHzXExAR3enDxQar7XG4VN8sVG4wpjcPfiMwqSXL6jnrEqqndzUJ7JxFbmwpdEtaY1DXqcnh2GUQDhKpGUDLcsy",
  "key35": "v7CCwBBj6qGCEeq1QSPjUXirGiZnGRBCA9JMqwVnispoW31jQV3jZ7H1nWpfWR87ySeuKoyzu8FbPz1MDgQkop7",
  "key36": "2Azcjd67w4wZHbZKvFYqYx9Cqm4PSuczQo68BCt5ai4faAZfiKXQNJBPtLHYYxkcP6YskYz47ybeNmsFwEv6dBqD",
  "key37": "3ifkrH2L6AFoEPMv1atTqvaXKyLM4vHnsyaaZnEkfWFPmgvXchf98GPUVbXVbLLdivRrCRprDek3WtdMXos3LRco",
  "key38": "3MRkYFGA4cnLKQzcSWg1nc9wBZjuG6GQF2N4B51KM2QnsCgPkRWA9LSP1rstb1BixcHXpgKKREsy7TpWkEnJhSWH",
  "key39": "4Nc7b7MFtqtZyusE1kZRUQaT5mTjFDHdZaaMYUQPaYcgfFM8jJmfiffDjMhUWcAHxdSXmEwz4J6tP7Hi81opUKmq",
  "key40": "5tm9qig6tEumWP4RDN8APmCtCtL43uT4vTBP8pp5DF3vCRDwVtqtJMjgXS5m3kZgSMQULaskpeuMhqQxATDT81Zr",
  "key41": "4ybwLwkssactGRN6EGQ441DdTsv3v5Fb7UGtFzbYA9MgjB5ds6rba4X85FjkPujEHKHVqsMCLWGjLMuj6iyWxSSg",
  "key42": "PDsFff9XSwcvQcKkyNnh9pYR4GoGKfQHhhWEnNNPUz22DyZyZErgWBTQAyfjzL4mEj3dDUeDQA9nVsNH67ZAbSy"
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
