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
    "2SxgvnxxrSMGs8ZH57FRvs9MgSQXYxv2dAo32eVKu5kuTqzGduiNdzRLSnSP7uNdd5Nt79MSVAddRPaxc18m9BPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vohot8PGVmcs2xMgyaipf3316nzkVLKRviYvbfdeoCzjDEedoYA4wRe3PExpnfpNtcpvPtWStSeALw9ivM33WUp",
  "key1": "6yuqqwQVjdwCfyWfzAUJneFirDtPzrGKPTmYsNRkpCeBURAgXEMB8Fv6rm5wgSMp3JsRZ8uyBpDPRf1bFosCe3v",
  "key2": "478xM6V4yB5NKYMo2tD3N6CAoh8H17AYQajXDJ9HGBPJEQDXQfBPjMrZC3n9fw8RwuihNZi1nSSgBiBmvfmSwoj",
  "key3": "4PxuHFHzgFgAk8kKYWQXX5CFs8pS1FXkY3TeNWEsqmn6gA5VUFro9445vCQqV7awx5ebNwrkU67XzytMqVknqU7g",
  "key4": "5geGjEjdq4ahfCxCdMkELyj9BQRE4Q9wfEuxfqHRhHcqjXgNehZ2vhxdxZit4FYKq9x2kGsJFXu32EBmNUQjbWAB",
  "key5": "3nqveF3ktGTmABYs8FUeVw14mkHrn8a1BJvAVdVZRWruhSTrQizLahdjJoX1nA3GvJBueLrdLhd56ysxUEnjf2vF",
  "key6": "4tpT6zki6FuaRXW9A6JS8Wcck9iu3ttr826GU2cmMg8kok7ccrKWKNKAWinEejngkHsDimKcQWXwfjfhj8C9QRYY",
  "key7": "54b86LcULZ5FiGqn1AzQhfmsCw7rvYN7gSXgqGfk67f8XSiGcrpdECDxNCN7Fd6t8reG22m2zhhVxttaNgHDEsHp",
  "key8": "5h3sLzQkgWQV1byeGsLtRFETeBUQRkFS6g29TethK1AoB6W5W9DKpdQ4kCGuzzR4W2sfo1nTUiM9hXdPHdC63AbX",
  "key9": "49wt9651WyT73GSez88Qr59eKXWoTmP5fqEVsfasxeU1cav26nPbj3D4mK9xEEi4suSW3c4fREvyLDmUT46R9VWN",
  "key10": "4mjKkxUeMuHioUnpGr1PXsVCCo5rcm1Vink8ZboCVMQCoAqvwRGr7SuP6yxgPJzHSFcjunsFUo7qX5SjTxDwrHYB",
  "key11": "4DiM938XpXEh78QVZRGC4ZdfdisB4pAadzdc6mPv2gtwaedgudGaT4D7NjJzYwanan37RXprJcuqp9aBEs412Btv",
  "key12": "7eX68NSXKCF5LaskavSeiAVnxrcYeoAg8hszYRftBGQNetg9z6T4WrHtExKnfVJCCsHTJnABRpA6GycVLpeeKQd",
  "key13": "3GE9JGrVjDf6iYKj2Le3D4inNfrMkCYu6erZ1VAsukfjgks1ZravHS8diiVZLiCFHsVGum9b6J94yJnmCTXTegg4",
  "key14": "5BbaULUimngqTd1NuKAzD3R1vbybMZ2oaVunG5A3vGxShLbbCQFyQHTH6Po6mbySuA9sxD6oeq9emkRc3fXHMcUg",
  "key15": "4iDfhwLZqoGgqdMS7Bh1Mn8yXNQR97RehBGJPTQjCDHUsMUwXi57ndBVDQ8qyxzdpHgqWjjnD2sYKjNFLjQ2vwmk",
  "key16": "42tdLiYVGrTS2yuFEkT6PD6DM9sf6wQ8dTJgBwL7uWwAZcn9bmUQBYrKs8c35rx1zbtHs7jkZFvF71WqqKN4yoQi",
  "key17": "62tM45Z3hqy6vFdVgFNhMRB3aijqPgCXtfGFuJdfrGj4mytZo6irV7nEioQwVY8SWgYM8APA2yBUDg2aEDJDYfgZ",
  "key18": "4KfvewgoTy2qARNDsEWqNWG8eM6rE7apa8R1eksLc7vkjr7oxuGrBikbfPf9amZGnyQgPkJphsdGh9Yw9WGFZYcr",
  "key19": "4Q43p14HkvoQXzirCGXG7JjLKp8h7xNBanSTy4WX2toiY4baqLduiWzS4nhUqCUgVBndRx1sGDQ44yqEXHqSDJkc",
  "key20": "3MNmoUHXTt9Tu9jJjjJ7tn1Qd1Vujw2euXcoAkp67A5nhtmimi9wZGBwNZ1mvefiMarY6uVv9qQcuuRd5gfPXyYp",
  "key21": "qcc3e76ZjtTgtNhD8um7ihZZraHPDp9U8w5tGKNbWoBrPKRTpappxk9wd9ZXQNRnaQqn8jgKKF1EJ5MYMR2ASxV",
  "key22": "4ioAC7o5XZtDZzR83AWxi2eComGCZW9WHxz4AoQERNuFMKrg3AGfqbS62oxVnYXjjDuW93pLPkuhJ6JPAjQEo9Wi",
  "key23": "2c8QQnQraMRvRgwCnhZBqSb5NVY3d1vjX4DKtWP5rHYqthE5NiF6Pzh6pznVrDnyYyHQipSvdmpt72KdGxMhej98",
  "key24": "5p7zbxnMJjdjD1mt93TCUJYqdxXy71dHGNPLuabkLfbeeXTMoLYiPy1L4vG7KqzCejYo7mU6oUHLFbY2MNq5Fidh",
  "key25": "3i6KYssv1xBWMJ5r8S5o1wDj3hqhonFEB8VEbumAT1ncoTDfeSgyAjiraUXXAZw4k4eaVfSwonzjxX29xzjA8CXf",
  "key26": "5wQKFdStXYHTCziyKqbZ9JAzWGG2LdmxumNre7W6snsi4bvSHmMQ5E4RPqMPCrfN4EfNBWK9tU1ubf3xspBjZqei",
  "key27": "3D7zceC6zVJNJVWXKrgpvGFxj4Qw79ztBhpDXywmKA84gcsmXwhtLZGt2dfDsXUvjo5RpDgMjWrki73XpQzijbKe",
  "key28": "2dTEJsPi3PaAyryZpg7fUtfJtpMoxoQP44FenYw4SJ6at22aCMkoAxwCSbCaEkGntwxii6CKDgwZSLon9Gb7oD2e",
  "key29": "4YfrsbVey7Vfxt3tbAkLNiwPnroEWfs3AxnvJVi3iAAFhyk917jMDwk4d21osZxUpCJ6J7B8Npraa2MUp1zx1rrV",
  "key30": "27xxnAmP2QCpV15cGisLGT7DFrhiC1yEmTKRAjxPJrsXf7uLufy64RUr5NhCtYggXV1538Aor5uqgU55dNXb6uVU",
  "key31": "4vAEcHqnYKPH3yDtMSoZJkJDwijx9YHfifWR73ctwB1Rm4MgcUtbn5F8fHPz55S1QMSrRdcQAgCbnvjTPbSoxm8y",
  "key32": "4gkSN1ryAwarCkQchSwyhsjcvd7XvnYbvhaNncdXxnW5ySLTjBuTMJXNLtGshVd9viBWauqmZGns4cRLnFX26gBN",
  "key33": "2jUF2iwr26D9bJnmaEr2jcYm7f6eZHU4mcvkE2fgxJcmfs6sGnaeKqLQxWmjyKtDpEZEtdYPgWVDz3Z3ksGPaqCw",
  "key34": "uote7M4Lmy15xML1gX9qkWFmNfj3HgoX6QA9HeTzMSPfxujo6AdRqSy2nWQMPxdSfMimuNxTSTqhy2LgkBNWbPu",
  "key35": "61QMVgTv8s22NqrWokC8drmA6HAXPfPiRDqnMj2wB2yTism7r9KcwYQz2L7AkXytEhNGsMxsH3gvxsiCc2u491Wo",
  "key36": "3Wv9DWUKVb5rFiKRfvQCApXxFU7TjVne6oTzQ8gsMxKcy5qD5mqMSmCJvFCekbdaJeY52sk8uqUtqNmwhE6JmQNZ",
  "key37": "5CbvG962VEbHwSCF5uMUK386ANSWXfRG7BQwDtEZjsn3ek76LqHL4DUivr6hE5u53yZ9ppamj26krYwU8NauGfL6",
  "key38": "43fTDUhgduyCJCwcda9gU4gtNnkJCg8BrMGz714oGGmEAadnp2gtwEBXnuEtgXFsNYdq2Y4Fy4fdHPib85hsboaC",
  "key39": "3ahNfPdXCvrFwNJTzCjG2jUB3cpBdEXD8NuMzkSY8BdVQ6Z83hnswDiPByweqAeku4Rr1sFYuK4gwczRrHFMiFh4",
  "key40": "63pv7HdrV9yxx6R2H69PToC5YXhsVcHQdnaBpbEPbc3xCLoKz4g2ypa6EyJab6rGbPQmoSXHBkqWSJNut8FxtMsK",
  "key41": "3oGj85ritBr9QQSdCGPAdeKJT617EdHwdP7Mkp89g9SQU4BvhzkSZ5NubeY6TYhK518PHnPGzLJXcF8GoRuRD2Ag",
  "key42": "2az5eiRa3MmKpuKsCCh1TjdwJtJVuFtanfUqAPkenAuHX6uEzpDdULCioWpZXSeyeaz1i5uEgDwJgn3Ya66zmkj9",
  "key43": "3unsxgaUzap6cH95nru2jvKMGjEmUvqaqCjaa55UU4P4u1todKB1H4bJNWndAHzENNgsjTNoq2qZ8GXpTS3ReJzJ",
  "key44": "528big3XiRv2NWKwN6gfzM9XHM5QCJatzYmxNpMfw6Dk3oA1odHxZL8B7TwNpjpKiLESM68pchyJisnoQoW2TByP",
  "key45": "v2SnJ3vYmKGrfkHxVERSeFPLNCx9NTcL7CkNUsrqYQ3BizR49XsXv78hfQrVEJM2zFSCCagVBRPwst6ZANyWif7",
  "key46": "eZGFFmzdFHqttKQnAbY6t9YR5kRAWkaHaQPwNPumBG1wVjkZ6XzPmoEXWRzzCnEZkUCMRkmZHJrxQaRad7hWHY3",
  "key47": "4DsrB8T6yDhc6RDBStP6MFCtWQEAmhi6ea8PBiGBwRZNGYM1wi4jWyc5Bo9N3KyU6dPrHuxJneAswDakuHyZcrxV",
  "key48": "39eLyEA3jjZ4Wb6yPz56weQTR6eLehAQpkx2HzxVWScRd5gdp9DXpch3Zxmwa5xQsa4HWsHccaZbcrwd7ZSJH6GD"
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
