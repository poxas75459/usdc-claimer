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
    "4GjAd8LSRZe3a1sSYC631UZePULKB3ZUHhtK3FSv6nT423iakXqZNGYLhr2xBWq8xXEtmc4L4mfGPCyGhcWYf24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrnZrTavrBoWmRY2pRczRma8HGJWXAppSmgctRiCgwXRoEcZL7ewqmvy4BAWgiJJduPEYwncHjkpvmUjgKTsHW",
  "key1": "rJWNBkuTU68qUBfjhAepC2jNPsuzBRcFoaukHFUD4Heq6NdjKTfuTMzcht1qT9Kf6reV9CLrecTwRbKZaPocTdG",
  "key2": "3gpqomtsBrk7mhRajNYtLf8U5UWafTJL1SDuYBn2mvqE1V76VH5j69MzUdaL6gNtwjYNX85dwMDaAUS15TbPFAoz",
  "key3": "324LhJPo2HjinbMqkbgSDGGojnfog6wbx3pq4VjgVxxRHnJ8Eh45NGdiQgEkRhg1F6NcpDNVRaaqVUnX23vJYT8W",
  "key4": "XyswLC8wyE17en265qoDn4AqmU62FCNgCn4boVijZqtg26eakEk7aDnYiW3AZiZSAMDPfYHiYmzV55HNxCiXVnH",
  "key5": "365sgDS8i4SvHCFA9bKDwBjaFeXgRoTnTNiDYBKVeFmmSEP8cBuSJcHWWeJQsrJGpUFbpkm6BWojMYVZ3bffeXto",
  "key6": "2jevjGYrFyQJzgyLA9i5hJByiVJf4bync5ASo8EQvQ1byhLrxTxzPvaaxB8Qf9ZsZs9AQzSYpR1tLHPP6Jyv6qCp",
  "key7": "5bgsAqXeQaa24i5us4c1Y3uvs54WGbA8ZCeQuitvLG6vyHf5yHCTXR8JNJ9F9S9hFztm6wihNtLpxxi9anQgMAzR",
  "key8": "3UuXosXUuy11185e1hhCUh1eVTypj3FGhmZuKmj4bQHsEoAGohm92Cu5R2W2sCmXETLH1PgMWuEoWvUs8tVRurBj",
  "key9": "4LX7pfon4BjJPSrzSpFm3WTdUhBc1x6v4DhbLFi3zAfTc6u2bCjvfVb97grhSZ1HQLJDpJbxDyXhGJzhjN4EJomE",
  "key10": "2rhu6Xt4x1AGoSaFMPLDhj6AFBM75u7eTy22FA3mxxYEvK2ZfzY7ZkGZtcQK7tjEn4kykXFPZkEpFsRpunw911Pv",
  "key11": "jaCvfzeQ6kUSP7TsPSNkZPpadTFdgaPbyR3ZytK6jCrn1NkFRF2zfcpV3KC6kKhdpkLa8rvG5YhsTCyXrcRFS41",
  "key12": "2itw1UMwbPYJv62MRyGeWeUhjbR8SH5JVovP8oymRPHmWZTMEGcuUtJEZPU4MjKs9Xhmmm875h7eB2pPxsZc78RT",
  "key13": "2wJNExb6RpERbVs6Ls2xrqqrxj9NYrE7mzHn2DPhKVAQC6bhT6yhbWeuSDA3KeUX2ZYbLUqWVWapDo2yaH1SH7Ew",
  "key14": "3YvkS7yiJF6D57fdDBV64ks1XHfRUFKhHgBATLdUVaLdVUejznNSru78hGBdRUtCqUyaBXFsHwEGmSVYxm2Kmfwn",
  "key15": "5QyFaJt1Gdo7qeJjcu2pwTELFBeL7HJRt5i6g1bWndpDSaAj7y3bghtZbQYE7ssLmDhTSyqQVBk1EeRjpspJrucL",
  "key16": "2HpDvfZZMfqE9Gzwhn2XFWyLgA8RU2DCzbnLSARvbgrtCjGLUXYt14RiS9g6iHVR5CweNAaNkXbFmuGh9qP1HiFo",
  "key17": "2UUs6q9QY5YnbTLPeXwmRUZq3QXkbXtDZiP6fkRcHY3mqouqQCKtiQ9RcsWtmfvgDsoXLnug2YZXwwYhpiybLWBx",
  "key18": "5ahgxJKy8wrJ7Pu4YLB62F2CcteGYdnsmLEn83BMSdHGKncgMfvttPFp1Ncx4kVzXK8CQehZ1SkgSQ8oADJFKJ14",
  "key19": "2tVw8UscZ1JG2MRZ8MuBHZQXJGYpqNC4VtgHyodTcJSkgky9r3EeMQnXbQaKRhuXGksj7d1WJ9cm1d9AxpCLxAVH",
  "key20": "5zRSp73nvyZPXZhaLoaiXa2516QsiozSj9Q3jT4jzeJvMUR632rQK3LFkWbqbQRhFFTDvk3ZujinnDGg3vSZRe3E",
  "key21": "JoTWNoMmKY35sjP3DxcCSwJq9f2KfxVgFPAgbq79Egb7QLnDLXZpUuRiiUnZDw1w6acdh7rDCktHW2cthKoQMqS",
  "key22": "5krjQkntHZSwQP91Kw3oxEG3XHwq8bFt3JRMGnvgJknWtyGmXDzfzx6jNgT61vdrSvHbLW6iyyS5bBp1PCvq5mpm",
  "key23": "KeQhTUzPTCYQQBSMWVE3iSYxvu46VPCxiQeiANR4mjENqm1feuyFCtSHafwxCJ21o2zsLecJ6Gxzjw7dbAJVULu",
  "key24": "kXaWZ97MsWCYQMyHr1gh9pVWRkpbPQ3JhSBkzUVJ9ru7p9urpBxg3exQeQCGAFb1wsMVEs7777bEa98xN9fXEQn",
  "key25": "2HDdzcSdHvjM6MBQd6d83cKcEViUZVgSdtupRYgLaCSfJ8mkskAPj6HjYnifuvUPCciEkcyMYSjKwfVp216UpWy6",
  "key26": "2ZC7mgiJA4SFBuBDEKAriUv8ru23uvTuxEBV52dVmp6MJvBi1WRarUFvPmamZqZrMYoxqosAdpUTS381MSVZ3tpP",
  "key27": "5rxpJjbHKpFRfB1pm1yhTm6ok8Apcu5pU7wEecUSidcKx3Nqc9fMahYaAzLYwbE86boKbGfVtX6dSxmeV8P6r8He",
  "key28": "4FhgezbZycUk2784m1seP6aWBNL6E4hVxJgtZRnADKuw67UPJrnuAvWAHXmbqKzcZBavQaqVxHePDrFhcb2gq7Ti",
  "key29": "2mgV9TQnU9pXdpmmq8kqHzvhp1L9hFkT8qUkPQxCfxkUhXknTPFz5fM5ZnqaNL8tdKwyaeaGKCG1P2CSeFojfw7Q",
  "key30": "2PK7HALan5e5k7C6rX3QcCjVyCnsDEeLAwq1eYdBM9mPapuwY7yteiYvgMpBcukVrCTC6oZBy3vgfhXuKtj9YJ4h",
  "key31": "zUwVunvkinhudotoi6HcevL4Yc6qzPN8AHvRdNaqJGqnK8uewPrKYBrajtSz4UTu8MMbzv4eoszBVcxFqJofksX",
  "key32": "26daXgRB9TbQxCeut1cCVmfPKuUgXEca3RRBZcuu9y14kqniGvssvG2qJ7WGk5PZgxGiATc125nkg5Cg38syG1xE",
  "key33": "3NJcUxQ9Mcj5MnkwmayDmH6tTmTENpNsNzMv8TixFyRNVZFQw5CoRrF1DinhsK4RBPGNoviSBCLrAv21jubqVZJB",
  "key34": "3uQpXCpmqBaoiET12XRjEkrWJmdPNukFQjwzXfZrAGMdURbXCPF5SSHbE9BBVCp2PefU6huoEbmjtwXywgqKUdj3",
  "key35": "W5KxFjmHnuQamVQopntn4RD2g7bcgy4cHhwNXdfDNrwwRZGzrU5x4gudMJ2JYXD2xAuti9nXV3mvPM7aEwzrYre",
  "key36": "4gr61hvN5hYfNbtTVVhAjQzTzwhNBQPXuRMVARPPH2wCtRuL4msXg5ZH1ZtmfmnW425k78jspw63mGBf7d3HLEth",
  "key37": "htbYaqwv5bC52vwBURygGEVykDWJiUs3KeRf4ftT8pk37Rav8ej2V7EfMTruXcv3YkhYuCYFGPUBb3yEZLybfVj",
  "key38": "4A5UXqdTL4swKn9z6tWwaQ6u4cXi7mesxqcvLTBBaGQDn5TLf5JejU7J3g88bG1ThETMRU1g6VFSohCstaAcNyhr",
  "key39": "4QHSPwEhypND7Y4HWYkCbw5UxNwGuSs8ogpmLYn4paVogVzpExcfpBCeKyXPFSPVgmjwzEV7LkT4xHWSrPBCDyoT",
  "key40": "4oNWuFbBfqjAyTsdNXhLATvCiRS53xgGcpj5BZ5yn45n4sRZznGhmyhqg8y5qjEYRRA5BpvHgN6AQcUhSWh2joSM",
  "key41": "53ZhCBrVESXUguLfBEtT5bY8as85UNkdPbLZ4wJunnUjNfhJrnMSuyzFUkuhBYxQaErpxwpfcH4KkSi6YRkWPcg5",
  "key42": "3WZBCqkJuzJLnjzLuuSr4agCWqeHXgGAgp3UYozgYMED1otV1RRH3VhnpQG3h3SadPK22bjtep1Hus7Hsxt9ANjn",
  "key43": "5p2iDFcLLq83irhJs7oWLSaNERQBTWwWEwqbE8xUQCFzuvG1nUVbYVBGJt1qEbfgVhXgRXCqyR5P9oyeRh1mAR9u",
  "key44": "4Y4XGCVwPZTTqjxbbHWo7xmc89T4u84euYdFjfgrbyvmVm3pB3GWcZpnEQkqeYbZv8zP4dmox5sH7ngUDcxbepm3",
  "key45": "3MZCSzDSxiKi67k8XyzL2jCmRjSYirggh9GP28yWbKgz1qtR215WFCb1F2oifjtPBd2GTy6i3VYWdj5dw8rAuxwz",
  "key46": "nADr2ghG1qwSYD6R7W4qLmWc2SKdeppij7E8ZZ9J4sCnyVWTTDX4KiCcyPEywQ5ZY9PQFAhu1Luif9uymqhDJtH",
  "key47": "c5trXeAwyaUU2rmf5gF8UHqXVD3ZjWRzXjhpSVhGFpbDcfWRaMF7GQGAVD5XgW35YfyjAjUVmG2VmwXTqzrax85",
  "key48": "2z6nt89wGcQYxifdMmiXgymr7AVAFcfva8G86tQdP9nFYWWGVLjSdNLQwGS1vDoXfseYqTNqiPmM4vfjkPCM7eYh",
  "key49": "4YqS34kyyChwmSHXRiLMtGZFeF5Lf7HcE598rRU8ag4DQDst4MxGoGeaQqre3xNUyHyqWNT5sKhrSu1tCrmfypz6"
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
