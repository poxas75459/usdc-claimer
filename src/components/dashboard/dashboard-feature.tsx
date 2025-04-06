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
    "3SeXZLNwsWKmdcVeDEuUqWApajGtZqQe3AHkSvxgjv7osE6uj434mEkSRdkMCQcmnCZHujenwjWNQQE571KYD4Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfqTKZdtfLBzhmZCARxMXRFzVBy3EQA2RvpJiYH512VeyE2RQJLNwbdQXNWYwXYF39KC5ZFdpky3gk39e7Fzza4",
  "key1": "3b94v7zkcB9VUHisniK5a8XHmPs3Gddu8UHhq2UaFyTEKKyAR1mKNbhBkp71416BLwu6N7xJJs9sM9vtEvReh7dD",
  "key2": "5dLgUwxkCM7VRozMyxiw7E5vQsr3H8SmFaiZgGLhTR8UCyF6nae8ZK2d294oKGLqo4jiyWJoSC4i6f8Cb7HsoANs",
  "key3": "4H9nwQTLvN9eZcX6DEuXmegm1xiZVwrS5yyvHgpstzM2WYCBDH1XBoX6RYnBVDr81JqQ6gQ2Umv484GcLkSa7MKd",
  "key4": "YixRRArvcdhqYZg3rEpTacHEUfmGXaYJzwJR5Jfwa8C9AXn8avy3NkzWVFZjCCXnYZ2gzG4kPcqc8ijmbkGiiDC",
  "key5": "2vTNQ9qvcPNAcabXJxVYz2a7ukPifMwnnf6U4N4BY9JbU3Kn9k3HN39mumKAeqShe7e2yxQegmgu4qr1raXB8Gfh",
  "key6": "2uvR2U9m8cydCrrMMzvVdNj7kcpQwUdpt1CBo5nbFw9mpniPosGLbbJCEouYb4mWwoi3f2FPtRSVUstL7xeqk9PB",
  "key7": "3xYtWkPTnGkBicfcijaszhohbfMYQMbmTrV6xg6vTUuDJzKDwds5rJmyMJhs82D6eLoMKTM84NKuTJKQLFJjbR7M",
  "key8": "3Jsvq5q1egvWBpP8WVuovoSV24VS6PdPHtfgicCFUxG8P7rAdzERcrcmp5uhFzGWgDw1dvSRHavDY8LvjAwmQsCj",
  "key9": "4Bi46nRCNMHVLPkhoxW63tXv6efK7VrDWAukobd87H3szMcJhu4JdhbbFTJ3eJdU8rChrqBuzhgHQ8K98f1qUDVh",
  "key10": "bHbqCr53N15eXjdP8g1hjTBKMAoMXFRXLVgU26x1nun6SUpbHkCyHMwd2atobnV9sPABCkcGdfoxALy9u7YKHeY",
  "key11": "5p9YMNjxJBgxBBfyD7VDwygW6FUq7NxeDPhSNTjKiRm4zPsMXxhKnN2FFwHwj1G3VYKCwX9xXb5PYpiguRpepq4x",
  "key12": "2XB8wGdsDoDVKNFR9UkLqNA8a6rppM57RASFekfDPpd39zQSdrLztG784XMZSoxUf8WZenWeoqkkGTySvCUGzLYh",
  "key13": "2MxmiBo933h3bRMcHCRvSTzmaXQFKmauR3ebWEWzaF3zZtaXXCyxYeSVoCCjuZksJf97ujmjVmMcQQ3N2Xm2Zj5j",
  "key14": "3qLrHvbE8syuekaAbJNARWEmjCBhpEPWN8Ytg9Ea2QYSa9CRsU7n54PSuwYjM5dNZcYW6hpKMzUUf4F1BoC5znVu",
  "key15": "57vNn2rWo4rwseN3wgfHGHxZpQ88NAHk5b8CV5Bidyw3Zb7A7PwY42n883QSXh153fNu3ZomnBswPwJKKsrY6PV5",
  "key16": "ss1t8fGb1mi6WFeDkiDm873t1ibYeC2RhjsmumWDtZgucnrjTL8UZT6awveKLJUfQpE56tnznPio3Cg3Ladwpy1",
  "key17": "5bTrwKiLAYEi7Kq82uY8aKkkMMxdWzeAfoAZ6a6DCduFupjr5zDQgd6M7bBn3HcPtWha71vbQriUX9U6QKb5W4d3",
  "key18": "58bEEHY6fRF1SsJAgd3nT88FDQnAgQ4xLbBPU88br23FtW9sRX2rWBEDdxddRMhE7cKw1RaxV6jKg8CtexG2Dep9",
  "key19": "3p3XW7TVtd8K7fgvsztDGsX6Tcv6wcLF89qGTpE9vd9bRNnTDUWDCLzTMPCeyFUCo39StsxESM8obJmNqqePpHx2",
  "key20": "5QbYTWwNMeoREiGaf46iLMwdtdr8WR3DGgPF4jtwiHmC5YTnvqmCkzYFjzRTanRCsqHuzhTQAjdXEbgrKxEJMDGn",
  "key21": "QKJaEcNTLYvQZpH4Jz7tFRCBuu5xfXxoTubsYLb9Ct9g7Mzre7PgAJ8KWvMHn8Cfd8rcNRLCLURScTQQUeDLTrh",
  "key22": "2hYHJSppuwSYZXJLXdfRpsEsSavM7MxYqqHSCbtNKCHsvUMnWnv8v6GSoSXM2kPgWM4czWc14wwmqbkuqXPoD5MQ",
  "key23": "4r5s3wNcQNdfAwqmfGr6uYtMRcSwquQ7ExvyNXG5XoRA8iURXrBGMcKUBy4p1C7azAXTgBmmvsFmJ4S81G8SNSUj",
  "key24": "tTLskQYKm3rDRKqf9zLBdb7wRqsWVRnkzUADjr4c1ejhhmQPvriDtNhc8m8R3KveUaYpzyVPsJajewHyvumivQa",
  "key25": "KjMfPXew5JqkvQLK5wXQDVfNcMdro4WxJxtibjHJytTwwpUEdRSVmGqwz2kNfq9ho4ikJ7avBEpBRfvbSuSACGG",
  "key26": "2cA9jHDXzfcaM7UEE7LAanFHPDtcU9uMSiG48ywG7rtThLzSk6QQYu7gvfvusFTbZWDY69TSx2iMkVm7BQbHURGi",
  "key27": "46vEkyiSwR1scGUqeyJftdhMbWUjGjMxXE7d5EfTLAc5Q6yVN8KCqLZp6aJkBmhL48V5hFYPyrDAK8SS2dnr84Zq",
  "key28": "4cTukWW7Az15gMffRJW9cqTPczLWNum3CFkEx2cwLaEcxWacJxCGLy6WcBigXJ55EeBzaAfnaZpXkE5nkh9E3KW7",
  "key29": "2rkRqWzgsFpvL2N4rQsMgy11rBq9RtKFm33L3b2CQnv48ANtfm3cxTpru3ZU13V49rgwHbPUnw51k7PHR7E2zYC6",
  "key30": "5Ek8vBReA4cv3i9uvVzENWzS8ZcZBJbMMVMEwmEudd4gR9RzMFUoU9KSZQ9TmT6wZYsydFjd3o31JviKAeARHPmW",
  "key31": "5A2xgDfwqjjfjw354GV4st4tta3qwnQomoBMLNu3f41BdCNkzPTCZmNghKBVkgNotABF6TLAbBZ1NNhsJnQHfHxN",
  "key32": "3BkAmPcmbtcB4hFrDehiC5xmLcmKqx4hxQvoMPmiHYEDwYMGqKdZ4tod7ZxSNgAywoRbGMXtQ3wWwC8Qq3iYexWc",
  "key33": "45t5qwYvhTiKC4sxRrNhysogr4QCbjLJT8ELRBy7TNRbdmiojdcNqvS87VPXmLnCbP2rZwwYwhcrmP8vh2Zzvxia",
  "key34": "418KuW53GoSikeQnu8A8vtJhepc9aFajmgZXeCqk1CS35xrKABFLrxYSRna9EVP98ZkJ4HSDBSC3e9o8jZFcVzHJ",
  "key35": "3om18TB4G4w8ykMb3wnXnvS4ba1uJbDJm7ocZzoweTPG7A4W233xbB8mwW1v37BCPgVNotJ3cGCKKRVoVTix6buh",
  "key36": "2TqqWcTrZq1dEc15bhUAjLro4Qin6ZYxF26TLDRjgHjo4ty8zQbM1g2cqbChvRfSXw5jXQsz29SAnEGsPYQCdSYG",
  "key37": "35bkwEGDaw52sfkZZzCxokXzsR5WRJ1pHmqahoU4q5r1BePTpkjY6daaX1qTyan7rLXy6fficQ5pTa4qWjsWnxuo",
  "key38": "4H8RqaQ33GzJGTwam8QJPmDcpNvfWWrYbA99Gb6Co9gQgbuVhdn4y2zWWGXmKud4sDgdg9eukCWenyrRgMAZHcoH",
  "key39": "3g3wsMd3TJyzCEJKHUVNjUQJ7usG5i25ohd41p1CCBBA5QxZ63orLod3GKQES21yoSpecxzn1pdrJbtWoC3WQstz",
  "key40": "2DAEyfqhy1VtddyJyLNatPERHSJv4xnPzKNL3rSLEbHeKFL8RxDFDpPypnmkKDsbnNiyzNVmYMbUrGxdzqeYFyj9",
  "key41": "fyeWEAxBBYH8MTT8SVhRS2LoxXZ1DuFt2nvf1GgctcEX3JYnCcbid1zyt3TBY5KF44LAyjwnifwaYRY32pDpfHa",
  "key42": "3NepZhA8qDfdJt1n38gC66wyaw6BN7uCj55hutTFDHqWQcaa6et5b4A3xrfoVBtLL22guYKc3eHHvZXA5ehW9FUL",
  "key43": "2rh2TeSNMRQSQiwzWgY19NtFed3sFx718Du4irUrpt7D3wpsD4bC2XUPKrFo3qZsL6rrY1Nv3k5qPfG25T6zMQNd",
  "key44": "2UFoEd6oKB4iYmgVpaHQDeFfitVWRzn28NK8KXJRXGGNsgCYStCNBtHQzp5Nu9abVZcgTDhhX59FpdVJJF6aTG82",
  "key45": "48ZSYhonwgCfjR2KgacCPgU5EpzuS3DpmF8bzgSaftxRdwQRLfjwBkHH4idMFCf4R3M22aJ9ke9RSSh8BspzVbVf",
  "key46": "29u8ysZhWBqaKQPYGuC57jyVdZQJWiUUtUfHX3PYbLFMbPD8gYxBZzjoE93HQMSnQrYB8QY1v5gi3BjxL4C6Z55A",
  "key47": "56WufDjHaD6wzczZgc5J2cyHdVVUTkztMX6WGHcwBR9SNP9cjf2vvBtjpzuzA9kwSw3awb9iVop6Xzy9EtwsdrPF",
  "key48": "5kk1cRHzmhrcyZ93wfGEUjy4SbXd8i1c1eBwz33hjQMgpgjwx1ADQbrBZh9eozMGgAYGq2f1AxEgRtdcutUHWYzT"
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
