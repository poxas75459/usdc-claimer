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
    "5SzqGGskBTrkdvRUm1zL26wcZSVmjVUsdHP2GiAWWXGmigqKMSxBs1xQ8RWZdpK3KHH4r6Y58yMAgUWx4djzxdDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tj4RK79pyDiMnGFbvdcFpBpWGYRpkUVAmbUTLYiSQiqtNTuuukWdos6RFJ4eDT6m9K5ofcHszxtM5nEJJGUT6zh",
  "key1": "DbqzbRtCJyfc1bicAtZznvut4uEpe7AZr7yWKGaYEne3z9wyXb6W5pFvhT6SfHfScW3TvwhLkSWu9fRfd9iXUyw",
  "key2": "3vuQ6vdYaLghouXS52mkTBGNpdiQLJoUrLgGxnoRn4xfUX3ZFxKHbD59Sk8EbLV8ihFS8qq3xqKK9SAu5pVh2wAL",
  "key3": "592byg5rELbjF5pMpGQVd6rHvs5zydhnKCHHhjmEAZG3BE6ps88Xwx9HUbPi9a342D9X5iVoZSLwDMUBFmvZkzah",
  "key4": "5JQU3GhdcpAXo5AhKVz5GfMUTCmeuJvy5BLxXCgnKmZoh3KjXFfZ2vdybJJ3cGLNN12zrESGYVK1Bp7CyeWAem8Y",
  "key5": "NsaRBYqZv2Q7BjMKhRpoeWa6B26j6wAcbJPJHd2r4gaksj9XrdiQRRLFoZVFjr34rpCVEYAzAohgMxUXckhw3Nt",
  "key6": "5LfAnEFeaD9e8iyqzjNdQQ1zj5hMkEeYs6Zf94ev97SQkvzoC8Er7kterRchRp6fdVWJbk9kqLFLkJWdvBmhaiit",
  "key7": "2feErw1LNy72XiyRuNtbnSFuYYrwFZS1yFHs1KsZDZMrGMqKtfoHscrcCG51ZALtWnSTSYXMSSbyb6jmjTeswSfm",
  "key8": "63kADzfa82ejEBMF7yru6AybV6QPVj2Bc5UoksWfRTXNkmonARyFnFrJMggESZLVNbYiR6iJrjmUnovoPBBh63x6",
  "key9": "5gi2rUrkbEzNCSRq5dfeUVrnkv1qZ6EAsfwoefL95EuNSbNL4hPmi7CSpqqCUXs7R1X7BCk73JzL2pc6FtNzCbhQ",
  "key10": "5EyWovWZaQpUbmHANeXDKV1Wh8Kv3TQDKxNQGqRSLKjYKYjgmp7yvK44oHiXyBpDnhCXRRxaYzZZXaqWsZYEcgzH",
  "key11": "bFRS85bPqkf6kjRBYE7HfPGsPEYkzyGBPDLU3MJT5XqbPTtsuypSia1mPbyPxsY84X5aLDqp2vmxohi5fTZE3vR",
  "key12": "2SN9JUSpmjwb6U9Zhg9uSTvnbsoAkgLDXv57tUeMTjVaTs8jJLczwT6z5kQhGLufedwLKGMiXbvjhc942XT1HpmT",
  "key13": "5UkfruD1K5WUWeL3SbPrVEJF1aWzkacswGoWBKAGhV9Z8p8JfWiWFv54P4TgMGzX3zoe3CVQo96VjMMEsFgCFyL9",
  "key14": "3SiFdeLBXE4raRh1Jd25wxMSGrTMEcn3Sq1qsoByHobHZ1tPdtsmFdFNLr8uWrBvH5Vz37HgWDXKLx4n1goxEpPn",
  "key15": "4MC6YcYCqYriBpNGsssjdRDBwRDbLXLRQCwhiQrkyFZ86kRJgRdiqgssB1DRBLnYAtscmE85pZTUzd2VhaERzEsm",
  "key16": "3DHyc9iFWVyLg3VyqEuc4eeoxnvVAaJJC9K7p7oHHPUoWnf6Khe7HXMMP42pehErYF313kMUvLFrB5vSq947seKL",
  "key17": "4g44Le3jJZt1hMjaqZvS8L7ao4UWKDspZ7qBm4AzXpEQjwt5oAswhqqimxf6vrXLCBASSvVFsyZox5CeFqLYNRVo",
  "key18": "2SH89ArV7wiuiFKUXHzCskTV19jPisR2ZZPbsSrArCDdo4V7zqgLCamxkqrGQofaciYeQm4pWHw4pXJxKpiHL1tp",
  "key19": "2oK3j11CsiumF97eP7HAUrg7uz4JdnU5xNYS39iQ6Kk9cmgQ9d9LhqSHuc9Gt1Qc2LeWzgzcwDvFbu3VawYzih9X",
  "key20": "2m3qsFHMEUnyqvtM69H9rzaUgTKcZSsJGqYMa65rd9GnDkutJh3iYdJUhkTq54E5rkNsCWTZobEwsGDGA6T6rJqk",
  "key21": "33Atm2RmWERKy34dGkvBfRTKSWg6fk264ER9KS3pefhCUwuWMwQZqPAFqQf7vMSWXWEi1A7wpnjMz9KAaPdRh9jU",
  "key22": "3Z2JwWayhP3GCXMGTcBtcJywkvtJbHjjNs3zAnJ1HdxSipyp184GLNSYEMQdVfeAsTALvQdHpQaHhEHNKuwu6ZQB",
  "key23": "5AJcCN9r3odwXyU7BUtHS2bo5mDgGtidEVdMRdSr7a3VPsosQN68HDbaCoinPvfsbiXkjjEzMSExZrDSq2jCfJgN",
  "key24": "4ok8xJzgP6MunNMsSPV7Gv2JkfS1jtyoJAhTkp5wmpyoMapUaCePk6runELEmBqDQnsyUi2vziGW1e83yuEF3iuc",
  "key25": "3GUP3Es5F8oqbnpDwPQeuJVD1tjxnHRfSMwtLysDPur6xUXuHVB8SUVLiBJh9jTQ9VV7n7cCvH1CAzNfaqJ2BaJW",
  "key26": "4rvBpegzu4i5NapJmkjXv6ESFXP36BhfgRfH1bm8bV1DKwvTcA72oLxH59s7pudk5H91wCq2duLRfc2bYZSRWkwT",
  "key27": "2HdsSnMr1G3cTnH5j9MNSBswx1Gqh4NLWNVPuCJJYYLc3cnpHyq3WME4QrdLHwtD4Er7Cacc2qtK3jSsGQhahdKE",
  "key28": "4SACvY65VNzHFBuwLGqotvzxTQwTpoPsNqXd16ixFnhN5vqdfPaPemRmGqQf3MbRTUabtkPt51oGMRFrtYfQwwfW",
  "key29": "eHbE2QMq63op8np1ZVkwMseUJeVcvLcvF2SXGUZVuBSDaL85oHuUNXNVSxos6xCseidgfd6z36RD9WfKdrkHsJY",
  "key30": "2zbWvdFFmzCBkTzpZAUcdnYVuM5aDbYreoS9xPWfow6QXu63vueTtojgcYNmz7fYbsocKjAqU829S1BPduZpTQUG",
  "key31": "54yZCtfY9yynSfoQrq2DBvi5w5HsicQe9Vk6GyDZGJXC9xf2z5UFfwfPZyNkavuBwNMCW5Gy3E7AobHT4FS5QFdc",
  "key32": "5teYnzX9psobp83GCgMBY884NnRrhfHZ4qrD7otiTtLwJFjh8ibgXi4YMGkZQDoUv2Xnht5ZJdEJgNJEHwqBnhcY",
  "key33": "3SdeQA1vGoawKvE2ZNh6q6Eft5G3rdTJnJb8VJ8BwUmStyZqSpVn42dWSrLRjEUaqUMA9WBoR3EtYsa4xfRjyY51",
  "key34": "274kiVdRrtB7kEsMdGpCrPExiCXgJ2WPLxiSk2A748XhLgx4i1vh71HLv7Lh4YcZv3rz79Sb5Y5YYfExMJYJPBQw",
  "key35": "2sQ6EyyRdeid3CWiATX8NaGyPwijXNH8N6yJWo2zzqwJjJViypCvwo87R4FdG7KDqXcZtk1MERY4EESTTrrYn2sW",
  "key36": "5Rm2cMSZtDjskJ9PrqSUhU4xCW481gsFCfGjj1sEwcdmBgXQoKTpBXNTLtftTx4kopaenbmeFw5fEdkyyPm9ipb6",
  "key37": "5egen9qC6HhLgs3gs5PWCKr3a3jQWFxzoA6yH7gtyB83jRcZCUji1UfkZHrazHw79QAo9YN7LJtadvf2PMHgjp3F",
  "key38": "2eaK3GBpxXoTukrRtDkdUJe1ThoUbppk6kVTno7zMoEFWWGaonvAS4oh49vc3Dhvf9iN9t5sDjUeD28feRSAPnWF",
  "key39": "4wjhowNyXa9vS32TV2TrdMCL5gAAby4Cns3QJ4S6YpmmQWRhaRCSfrkDfdqZtrVLqGcYNKEzTDN8GgmjBxgynvjr",
  "key40": "py3YCdoiptrQfhgmagsZ9KNGoSSZMdwydwca2HpgBuCDK1DYiAgy6AWUtMw7go2t9YtouyrDF7MMFNigYx6hN3j"
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
