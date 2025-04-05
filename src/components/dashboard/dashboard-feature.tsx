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
    "Tkqww4TRewKRyv53wgVJ75CFGQXsbJq9YBAAQrTogvdXeStWuCMi8Kvckt27J1SnFyaWRF7WyywTm9idoZ2mSeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2eeNY3EHuPGLJbq1sJT1fGHfaQEbJxigDM14y29HPF2vREFHBnvB3UY7yZsDwX9LnTeu8PR8oWRwXM1NSKjhrV",
  "key1": "5RDanQumchEwUL4oGexiaHsy298qeAJHvdftMEj9JqjASB4GzvvUeQzQs4VCy1FXxyUzVWCWTRzkjWnbC7tSBBm6",
  "key2": "3KsfPYMHHugaEuwaEGirUryLVKJbNRFbSFYnLFTStD1pf9xpHf1pU1BsNQcpCyGN1jxtnKnFU3uioSqcwyDqdBYk",
  "key3": "59KQ4SmRWDzWUGMpeuMmJ8T88DbMZBGB3Q87vDYPuHvn63dxqqvsdcEmb8Bvh4q7ykK53ZjUAKxDahpQ2GpXVwEd",
  "key4": "2BDLrKm8yMxhqedmCLUgyW6vh9BeDYXMmATbzjqbVk53yvbhKytPJYDVnmSgpw6pGUtP1YCfTs5qwW6pWY7iXQHW",
  "key5": "4RK7g2px5W7WrUqNVAZ8LUjgjVw9yozStJ1fEuWm5uDgiHYrBvBfLatdUiaS3Gi3uj9tvtSVSZ75eZ5HTT3NxV64",
  "key6": "nyA2Ff8oRxwgoScWKeoSw9MPUJgpRX1QzBJiQAQsjRGDzMwnMEqKnZDXcK7rxNZKbGEuC71rKXf4vG2DnYEcu8s",
  "key7": "4UmxAVF17zbGwc71sLhPLiNn2rExWPypEk82be4yHJF3WWK31SikoWDYdnEkLwVFQdqg8ku3vJxNM4xPu49Eetr5",
  "key8": "5aRKUQevgwZ4L5VmvVgYB6dgnGuoxKFjxWHhVNvHmHwEjaXRaXo2MJi33gqgzfy12wcPPTXwGnMqL1o51WJ9QqRV",
  "key9": "3AMFrpd4Jp1SXWKtUWiuPDr5TGkNbmG7891BePY8L9df8SQEZ2NCPVCy4rU5AfSK2etdNJy5E1fYQ6VdeH53zS3u",
  "key10": "2gvyUCAmTb5F2yi2YxuixZC5ocsEUQyyMzZyerpSeCFq2PpmTiCuNRacFp8kXEfWhsKaYWwcM9tbz6pBp76HHeFm",
  "key11": "3gS3t3mWxFY9BNgf6BP4t7e1PzkrQfgbAwRhDvz2xxyCcxGgZyrnJ67NpVumNe5JNsghbTd8S2hWEFss1ovtizSz",
  "key12": "4MQCiBnQxgry645kp46LUZ1XBENXGsYPdVxrug5NRG3spXSQSyaJCxseJCEcUY9NHk8FGDUjEbvuMuBJcaWNfS23",
  "key13": "5AS3BJBwZB9fyPcMwFUAdSMgvgC1PyWhZ6b3x7DNBLM5pD3rTKqeSYA7rqMkd58V2jLPPtkRnkUXELhrH7B2e6LA",
  "key14": "4sQPQUefZ6YiR7kXLopW3xxaJ1uraRA3UQUe8M3PxniTW3snvHm5n9bkrKRBx8zm57V16x4yP9ZqyhxZBRiJ3cDM",
  "key15": "2FqhJYk4t4NA8B7yJLLoAYzqaqfsrSzwpE5wqKZX6pbxkB82R3aWbA8CtZQPsNan1cnMDreKMW1dJjoq8aNm6zc6",
  "key16": "3ERAdkTa1bQEidsZAPfotdmmHgaJmq4Yp49P6SpeE8NuzxwzGkm9rTycikg66wNbpqy1HaNM7mdxjjw9LkazQhKC",
  "key17": "4EdQqT1GHgqytYZBDCEAL56qw4Sjq7cFdFkyGH1wbULXTVWZGTubebkXzZQtnF9oXNBYvGkFYbb8ibVcbomFF4xs",
  "key18": "5ZPRKwxDBeyfLNRAhVzBQt75tYnWxJoMu6LfdzdhZsLpXM23jbSx9xyCs94UujAgLRhy2KxePGGEwGisySSuMuif",
  "key19": "4CXCQ18FCjBUggzFyaV97YvSReBStZaJPKEjMRfCYXGWSb5ky19NjGJRW4hmg5W6JER7NcbLW6rs4rEUh3Lo4DAM",
  "key20": "4qFGWdsuSvggwXzRWFykQR1ovQA7geGYzrz1wbw6UaBZ9rMj3UKa3oa8LubCWsYoNNay1BserGqw9kjWmFtuL72P",
  "key21": "eFYFQJMzgCbw8tqCSbhXA9PEHXKxFHJyxojF57wFfipChXYsBgZ5nsFzAGt1Mn9uUQ94qqbvdz3H7RNnNPBcbhR",
  "key22": "53v5syem86yNNC3SAhMpoPgCSXemQfCfLTUxg8e3iuzNLo3GFpu3pYCf1mdvLWPUqSsmSwi7ksePdEi1kYiZ9EzW",
  "key23": "5HqoBevc72vVszWtVPu4PQWnzy8Reehz3Xf9efqFLaSHk6zG86gc9cS4C4S5VkVr7dT6n3Cmo2sSFct26psHwzqn",
  "key24": "5QzAQxevkDQ4QKGsWBw8yHwGq5GLruTXvNp3cE3T4HzeRPTq5FaRVpSjVBhk2jctNBqnDg9uou76X4krJ3i6zLoz",
  "key25": "129jbudctFzGXmxJc4VyPbeMFs6Q6qYz37Amp8eykJd6r1GgHa613SQ6Y6LZMeJPcbcRpqQhvpEieCrQXXMJUY53",
  "key26": "4T9oK6YXhhGt6eGMbXQQK71B8zVSM7sMYnaEPQaSyCogikTe5H66p88pn8N11JuU4uWmswH3WSwdVMfV8aTNHag2",
  "key27": "53XUX2SevdC4tnMoXGhAxgwGmcXAwfmnrAivmiCNAsY1YyrZsehHFASygtPtpZykKdHoDEetHri9ZPV9iAGDQXhr",
  "key28": "4XgJM2FEeUH2cAdK8UKCYa2cCmetxe8LYfagtspTFGQyLstWLYwCmNwQERhkA8t8UwAMySku6aSMYMvHdRqRUffA",
  "key29": "2ep5rEmX6yV18Hx3KwdyH2ZFxZbSy7o4fGWypmxREFS2JW6ZxQJiMmQuwkjjt8KxwLaUYm2j5xcE8mzMYMfrwZXR",
  "key30": "1GAHL8yUKCEnMv5qUBd9UEdH6X7SqLoQaquT98Rw8LCvS9aX44NrnL1ovBU1ejy1QvPycPwv4yuCH6X9T6eFfyu",
  "key31": "2fA3CxQ8hs3aDUzxmay8Qa1LxqwoQLothFP8Szyke68Ao9m4xqea95Pf914UsBggXdpfBfWG6AvKzUegg37XR2sR",
  "key32": "4bpneXWQ6VsnfVsdLsHVFH88A3s1tLRawvAj7xpZx23wJCW7i7onAoDvnGyN7ja3MLjqpGLbTiXj3ncQMHbDhDVo",
  "key33": "4dujvUQqZmXu9NaskkgNi6df2uizQNUdFdMszxyvSdjAg9XM9fiVT3dZg6ycAAKgH5KAtWYCx95fx17ipNcWM47K",
  "key34": "4VBdVM7ybYXvs3m61sm1DiqTpXvXHfNmnnMNmNkUuT9hcsrcPh6VRXzLgqKATJqvHBe51FUgkgeGYugjgmRAXBKM",
  "key35": "4QbodZhu1CE9GX5frgEEBT13Fno4PybtUNxAwzr5PmKkx8JuVPKF6WtBcXDrUUMnbur64F66KcqBZovVczMhbZHg",
  "key36": "4r3kVkZd9fnsdYApBmPKiDsAHgwKpV8QPcFXSBiQzooAM3Mmk2SwmYmC92Mp8uU8hJVrHJv3Z52m3bMzFHQSxTAB",
  "key37": "32G24fG7ijFj2fqZtpe9pgq5VRzkLudYCpPMFoboGkRiNPWm8954SiA6sK7Q94LAaF1s6ZmAVxYRXEwXw8SVYn8C",
  "key38": "5PaP9CJp8dXQwdj5GNfrP1S9YmFPmg3VQv6cnHkYzumiMV4AN4qnZuPDW47H6kBAD1Evq3JFH4oL6MF8caeSwcbR",
  "key39": "rTuJsEC3Nxmfdr41W67BdnUFF2zrKjRFEjMq22xUoVinJX5n59CSS47VB7Kmn4ixAaThLnwhujKriHvDkGTA5cR",
  "key40": "ECTuysULgAKd2AFazxqTP3dEP3pu2FK8q751oSLmzpnxQsmqzUJFYmP6bsAbPS9zLDvwvfPQerRRP1oRk2uABCc",
  "key41": "53fR8Rt6jfr1MjMCgCanm54a4hS9D8GGE5iudRXtgGwirYU4W9jmn8RaEPaYbQ1zEZz83s5EFTPUni2trqKVFNyV",
  "key42": "315ZPqFrGmJ7FR9d7A2JRiCbqRQN9pYGVkQsdEmZUbKogdGjk6Ey3zZobhxdxhaxeqXRJthbgPy1fqp1ZrV7Dj7B",
  "key43": "3P832MF5TvVPahX9KpuYDHrT4uzNUBKRzYSSTwLefDbq8geAmEdKxyhFPxUBbAmcpDdw8c1ts1qfzbj2BeQBQzo8",
  "key44": "2WHhmzrAtHWsRcrF8huJwnfFd6Wru4umF4A1oC8SGZp6uZj4BzqTSJp8in8rfiT7f7FCNRjKUs6Fn5F8dECCaifM"
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
