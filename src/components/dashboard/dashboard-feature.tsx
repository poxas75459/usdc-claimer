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
    "2y8EVJa2T5DRtBgBbuC8qmbhcePwGw91aijCRPF6UkntoGZtiiGhHyG97jQtnHMQ6wRUUAT9m2q2VCW7bYLdaxiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cu1AwvPFZkJoEgHjP6EjtR23f2L8n7miVrxagzqw8cFk6S13rUzdbjEo8cwhwUacqPYEysgU1qnhK7qu7QWiKBh",
  "key1": "4dNThFzaCtY3Jz8G7HGcBwfvXTBaVFcTkrqfTdqfuDpzG7JUChSoEKp7J92BcPThj1vi766dBMyjwJWpfayDXK72",
  "key2": "mFeyt3T5zZabe8GG3BATJfF8NGeMfojs98it7cLed46MaBgCNoFLbeMhz5yreCuYQrgzA2gYHR87SKsnqD7J4uf",
  "key3": "4ybXSRFCzx6SUZNWegSvCm99QFhGDjxRZ5MjWzLw4n4wHevGjtV9x11Wp9BDAK4Fh3nd5gPSp5Ysv9AKZKJA3mpB",
  "key4": "2qdDLc4v7RcCbNvj9pUPnhYvLjgsyhQuvqZfQyZL141m4xNEdZnqD7BnmZP8LdGz3YhC1vGG1dqba4J7CAB5RBwQ",
  "key5": "22gsC5PEGQp1FqEjDJU6Qh3rmbvrcrqrbLnnJt6YkU8E7EcTp8DMrSe1Bvhdu6ApHimCqUzv4ohknEek3AbSzPkT",
  "key6": "5RGM2frccP1ADBaF9MFvfRvoJ6ifeD7gZAJHE9nFZHREmrjyo6gytGwyajQU73LJQraQMjRV6HsjsNURiDcFKWDL",
  "key7": "5zsiZ4GTajGemY7AUmTckHTYjwTwZwyCTowZF8nh2MnKk1yXZ4ykL5aXJY8XRR2WWxczpJBUstQNGYzWLDTNpUnC",
  "key8": "43xXSPqMWB8K8DMjjHLKckk6d64BQLeMxjM2eXWs25nUsGggPy9Y223xprBpNnGmon47fDrngs5zsdKM8MfijuFy",
  "key9": "5edMztAotmuhrVbfrmDnCFiPenPf2UF73MQZYBiqNfA9yuaq2HtpDk953g2KJ1pG3v7kbrT717vUa8PHCdJUNyhn",
  "key10": "3u6jEmW9a2W7sK52kCd23X7AzbsXLbnJabozFoP1mNi3BpjbhoQyEfd72wYXWq1CVy9r1iGnNMNBLuGAoujKHmCe",
  "key11": "QQ6foLTgZw47GRUKD2vB9XRJbfGCgKXZPbzxojoKzDtX1iSx5o7cPpMRKfYhL4seft8RZBbFidEkLABNhux2mHn",
  "key12": "2eDrb3PacpucgkHG7uT6TEwwakEy9zFYyozTFpCewX11qGFHAF1tNHEQJqCbnLctE93QxzuLegRqcVMPKubZcMMB",
  "key13": "4hxDEA7Q1B9X1JYVK7kEWQ88awVTwVbsGnLnFRaANzXtxpkiJXrjAiAzH7mJ4aTgRckjihdQUkE5p16hyaQkdqzu",
  "key14": "J2FsCrk6WSBkpmdaYPTdq7VZDno8ecsCA3cAmMjdq6rYLRE7q2e2pyJRQRChJR7pKbAFq4qqc2KnzrJXxyFCteX",
  "key15": "2SZvgjQnPnymQPym6niPJwBzaueooTxEFtnssKkeJAwZHMv4DXKytiMHUpp1Vvc2tWLiRnAsvaeCrsEkTNhezNMB",
  "key16": "3v1hL2PBmhLjSHthjXh9n1JGX7EzW1x2jPLR6SdteiWRUS9Pd3i7cvcaZshkxNpoZYqwK5EC87Jv4qCNir4TqXnX",
  "key17": "YP1zpyhS1zyWHzmAeagq2HGj2aqnWM2omGD6EVAKdAxXWofx6Y3EHxLGCzemQ47VZNjq9zbbZicXDfbEjZNcmyG",
  "key18": "3a5dLcMzNudjRTRMjmPaRaNgdfQcLfHxbKFMdXtfL5n2r6dMRgTm5CadNgt1KBP6Z44VosWtMUVUMQKkZ2o8PHLH",
  "key19": "4nT8DcA6dHcqh1dCHfuSHrtJx4iBmTU9PvsvfdyorJoUxMs8F3AmNPhccUSSt5yaFhc4ZT3MkdvK7M7VLgP8CZju",
  "key20": "5YtAwzfUGkJ8m3M5bfCQCRt4fkHvH9846N3L9hfT5Yk11EuxA1Q3HGMtrrWSjT6whD4ENm5CeEU5pUJB7ccfPFkR",
  "key21": "3qVrg6JHktd41kq6srLnHupN9b4oZCgsKZct5EFoviGLSYfNV6hTe6dDMXQ6g3Z6rWC2p1evg2WgcdQR7o9ibQMj",
  "key22": "21ZRGym2tD1pm4McmCdJcmZVc8t5ahVRbfFJcYxQe1RZEhmnfALJJ24PvXmwn3k7MaVA3LTKPUH9gjXShHGV55Kw",
  "key23": "5sC1dBP2wSMQNCNG5WJrQa18GgBPwLn1Hw7NSWozaF7ceKHXmJ7zzwi7JzukncbJqP3RsXjzZsSxyoSUwWTxKMEX",
  "key24": "4qh2knfx1rYZutK6dEk9KeFYDK9zP11FzcU7533Y6ZoVmZBYneS6PHSRWawsgordNChh2z4tn43Y3pk5R3idDHV6",
  "key25": "4u9k5Ag16nCyn6ySna4Bc1zxFPFG1K1RKhPx9Hmo4xT1D49SmbLNvdaggvrGZKvGJzmfXiAfCZBw329MGgGTVSsh",
  "key26": "E6F2unvti4aW451cVG6N4AC2d85Rf2Ke3vDPb1KsZpDnBUtKHsARCGg9eWSWvkEa1wjV4Jov7rnpiBRS5wAV4pq",
  "key27": "JeVS4LZdXyQNoGsEQ82JJnDWjGuSCRHY5UwLuKXj8APinbpL6wd8zgokxLm3a8oh5YKR1EKmBGNYSNAvzAhFUzk",
  "key28": "5tdvSZ1AWD3GkF5jWYmXwJRjvR3gGBCbSXLHy3Zk89BPPm6CKdc1Yewqq5BRouiKh8v95kr5DUk4HpX9hEdG9Yem",
  "key29": "53mq6t13HUhSZwCWWTY9EJUEkcfXZNDuByyRbEGNcADe9FSHwJ5p9kPj2AnT8wGbJ7PBuEEWLB3YdN7oS4S8BqzF",
  "key30": "3UD7YHZpxf1b1omvDEtBNfuQUazVCBdmrSTB7YZnYzrxqFn2xYaeZBHaZcoA728csZ36THMh8KKUsrDNLfL7oUFg",
  "key31": "2CHyZmyMLFxCHcKSVvUwRsuCJBEac4hWGXTe1W2YZFJMg7Zes1DTm3ciqYBKizrpdJkRiFdNNZaDjurcyedZeWEs",
  "key32": "3jfYCzz9YoKU1thoTTrtb4EVVCc9aRwci2rx81GZQB5hFn1aet1FZ4Z4qLYUwPRzS9GHKsAB5jg2QAnXAm4gVA7d",
  "key33": "4Ds3f3A4koneWkyjHVWDmdVqLJzncZoTfpukPDEKfKsGKJwqcJEzjstQtfKFgvTgvmTwnhVt9WTe7wo66NYuHoid",
  "key34": "5cXwDZQMMj1TdmGLEnpKUHKqSn4SDR7cmEmbidiScGerL75RFqKtsdHijev7L9Pc68omycJ2VxCtdCF1tXaQVRRU",
  "key35": "7t5GqSXiAaPJnhzRwYrnckkdPikpftHPw4f9hW8hiG2f7VcwKNN7dRRdPm5NZdab9fBdB6C6JJDRf2ZogJ3mqnW",
  "key36": "1c2SYv9nuYYQx6GuH6kVB4X8MfbbdTgYW3Vz8XBBjUWRhAsz51cZwSocSuSm9WRbpjoJPyahEcRHtUkiAWQcFuA",
  "key37": "2TcGsT7R4z2RFazwVtLVZziDCfhyywWM9DdfG7VMAFeKgtgN6gYpQkPMKbbEVA8pqDu53rrmzPfihzhDrhSAn8Ag",
  "key38": "KZdYs1ojhgP62JeN4vJkQMWhsjq7xNNXsqY9bg7iR2FGaVSN8ftfB6fjqYAkdvvsRpBDAmfTft1MGnmhxAjveD5",
  "key39": "45XDMihJdFLv7FRM8xfeKqG2VxzQUAb3qjJ3Ao8pPjcqzabmdEjgtzKPzi6H2DVL1ck2KjdgX4RyNk7n33o8YQhy",
  "key40": "5xwTBWHzKjDTaCbyJF6ppRaEVFTpAdSzKkwYYBBxsTeiYYpokEFDhb9E8gufJtpnsaK2hQoJrNs9Q2TR2ijeTFRq",
  "key41": "4WcRFEJxY95iSoBAzbUgciHw9KVBRDbZLkKxCpZ5mrXH1tv4apGRudLpnzbCubweXZLKT3XemAHYqZfspN2sC3NQ",
  "key42": "5dZS3J7vLMPc2Vi6qcVUWTmwoW6LGobTf9yCQa64jGvfGMVMDuURVFi57zwXyeEboEeD5nEVMWR1LUNyamy7iCrQ",
  "key43": "4R9nyFZnWSeX4wJxgepm1UvgFDJBbeF8qG2W18j2fom9jUvj9quzvU9LbwnfpTj7T3ifjFzBqyrq4fbhPDG9cSEa",
  "key44": "2dmpX7orjgeqkvk4BPbXb7ppsYZgcPCRiddyqqbarLmJajR8ixTNEeAjyNaenpMM9qnh2Yk4y2Hn2qCf4xsUgFQK"
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
