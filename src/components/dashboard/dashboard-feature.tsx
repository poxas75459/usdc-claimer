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
    "2EUr1f6d7iRTjXcZCKaUNaHJpQhsTFKfExRYzeXmEDLWVKajSKyGL3MTS15CYW1e4BXsm9i85k6dpjrq1w5AUP4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqsdWCZ374kQ4jYzqhExAVmx4o5HeaMpsnXs1AbHnAs5sh7EbGqqmJYfs4Yrk2dLQjLWB8dsv78qfa5jE24oBRG",
  "key1": "58DzhxV3bddwzbeAr7XZHHfFc9i73gU2QhXEJVSgUF9Jf55jQ22N6aS2FKpaT3EtP1SymjRKJnx8t5Q6q2NgJPHh",
  "key2": "4LxAvX9uviKxyND4EBvTr9djSM62sdHWTVxQFTKsq7DxUWHpEgpWh8BQFzjNUTdBk4vp4LJmgsLs3PJZUQisarpJ",
  "key3": "V5eMDdwV1mvB9Nr4AvTGsxvehkj7ovr5vA2gFjWBWfAYp9xBu94jXshUyKeBfJhhoio9VyfxJPcvXZzDmHR7UQU",
  "key4": "4T78EbmUZZJ2YpzSyKjHDYBvazMgzAmkrteyfTKYPeVDvcw5P3an2reMMz441HyambFFtVqeRkJpY3jfFeqDkDxv",
  "key5": "2okWwij5LyR1ap88EcZQom43vtGbpmnFfif44juiER6iAuXwg1fLdNVVErFQgqhyk4K9s5Wxft7MWNJ6dHZD75jp",
  "key6": "RpSxVTuUM4KQhHzAtS91saPLWsTvjxcif2iaUy6tfwMyaZKCuCrBrd1bQHS1qcKxB5kVbeKai7d4uMpMsyQWLpK",
  "key7": "5A1K1zCcshbtt2DSfRf6SD6eEqyteiJEkcbFRTvEDDReUtE5pxt5joSzvtvBmRdStX5dNS2NigmgfUcZGGoauUP7",
  "key8": "4hL25KxVcN2a3cUBAveT6BK6m77k6LNkvd3eMoSU9J3TGyCYYak4mB3ux3uqqiKxyzYF1gJG71TP28DW8o5ZRNMt",
  "key9": "2V9bstvkSKhyGmWCMJvyequ7Tq1nYqeuoLjNTRXVRae8MYhK2CGhR9j5nPQyn6LKZwmrBHwrwhr58sD2x26deXbA",
  "key10": "63MgoShQaqW7n3r3gr682wt5sfiYcTZu4vEj4QbnLSvf3M8bEs399NzwbBwJi1bmGwtqs1k9qMq8wLxASRVRNdGA",
  "key11": "3wDNk5Bn5gGGSymWNURMwbAquitqZLZgUmAK85EZRYQh7mpiMQVNrseCLGJV1ZBkfG6AmDWhfwuzzNgEX7wBrhVn",
  "key12": "3ZSfzHKzGtq1Vv4p5WcqABnt96Bn4HwzGxiqhNexFdGiqxBQiFvYqMyTBjXUCvzgHcNz6byabpuDe77crrun1s8f",
  "key13": "3KJDRyVqWG8kCyAEDe7dnKRJ8oyL36Y1HVx9ushJGEdW2gHh17WoToKVR2YqB6Ngq7eq2yNPZr8VHmRnsG2RxeFH",
  "key14": "2ix5wzjgPd7QDhsD2JjRxPFkSu4WykZRkP5ofN5UjAqkhBh6txTdEG7tiFbE4jbXxLAc6mhXU7eJzvJTnTH5UPQ2",
  "key15": "5wrAsGWNDjqkhxt2uLdVGvCRNVv4AWFjmoR23rXpfvXpFn58moixsjXgpKdAMy8RiJTYk4YP4NJxVBxN6phNo76S",
  "key16": "4M2dco8za5s3pf8BtCjQT8p5J8e6vXWevBfiwDiUofsaunBAMfiwkRydpGz6hrV93HN17HD5kwTe9THa3LWpK6j1",
  "key17": "5aVNq5xY1CNHGcYTC1YHk6wc4qirvd9Jkdf9voGQ8BkHXJiAVsQMtKG2dxFFxLcMkPQns91tqGTKPJ6eYqRbo2bM",
  "key18": "4GKmpyi1oDfGHUp7GXTyMJwgsN6VKgFrPm5jchf1qHXMpn6pZysBokjN8E4Y8zDsSVZAYZTrpr5d6h8Vh3iCZjXK",
  "key19": "32JMTkFymm4s3SZ1SUVVZhMQeix2ozpjv4ovE2E6UnKW6UciYY1ud6yCp2joW8TdfAFNZsh511agfE3ErVVvTgaj",
  "key20": "2TTbJCqL8bBuwjTYFr1rscFcRqrsSiByqqLRreLW1xAF5d658e8rpRfbMGz2tsYcPvnm6jbtjLArpfzSVZxaJzcx",
  "key21": "giNqpTyJY9pgKE3LPYpZmAsnA7knu4oXKHe7tygPig8u8GgzN3uSHSzTiigY6TsHm2uwdSBPPJL7GvXxJobPC1P",
  "key22": "5o8y6Ah6aBgyo9LAdYfQqVM3XPxKz8bMLrLXFgJwy8AZtM88fZUDWckT7tUM3ZMAHU565xP9vff4gykE19DGbRrM",
  "key23": "TSHt6GrhbjxrektjpSFk5Bn8c9yjJo4E1Tp7B6Z4VWWwgEjUo3GgYDzPGcsZHqq2PGhu3GciXhxxxtMheh6PWGV",
  "key24": "2hTwzp6H62cmAXDhJHG9Y26rh2abJ4m51iG7n4L2tK14RyGKYHx6ZT7xXqANkPr2f8XR4x9pP3mNNTD1dJQYmQBs",
  "key25": "2Mm9ygcLK4wLCPsAQA83Fpioy6WECNZFXVFJZ7TvJQtJNerJ7VA5omWwP4Mmt99skm7xHp2hptdgP7HovT8gEHyB",
  "key26": "5f1mKqrAsjgEbyGzRC3MWFBK5ohXSMmGzde9dxih7ZYnvskV1z4ELqRT52Sm83QkaKNc24oBMJpuaKTegoYFyhSA",
  "key27": "2kYH8dFVngR4hv2CfgieWwXp6rYfej3op5gsnW5fC8CRTnYt3EfMcRfqNYdRUAnFZUKQ8ahdgQycisyhzKSoSjFc",
  "key28": "2dVHLr5MYjnpzepKRQTYL9FLtQD4He6LH4kCaK8a1X7T1TeDjutCaxxKaowurGni983NWwSSQdRuJQuahPvwmhzm",
  "key29": "45aKeg2DsxiFfBRyAUYs3oMeHjGX4QmpoV8SnpXq36iAQ9yQKqEM5bnXEg4cutDH3Bmd7tqozc8dra5SY8wbKJGF",
  "key30": "5RKiFmeyN4t1VJyJhaMV42bs7eynTWg8YsTZXhzE5KUDT8xVzQkc2MnMo4rG6edFpexvbViXaRDxZ4AVfQdSd1Fm",
  "key31": "P7ZynWpUuTaza3eSuXn3SG95vJnnz1gXDSyG31JCgQSMqf3ppGsAqYnafJbRCUYNjKH8JbDgGNKs1FpJMBX5u49",
  "key32": "5VpAzLE3BEgeL669nekzRKamViJTnBhZcdDk2yxmC2kcBxjxf12RZLYPqSrbdWWHstXSuFxmX9Qy2Pv1PcyCaCnq",
  "key33": "65TLkwfYSDuxiD9G5ZgKytQJ6MTDH1RZknFXAyJUKYhv2ABvqbs6K8b51UqZ5Lm4jx22nrwThgSBB82Cf6GpJAQR",
  "key34": "2rFXdCtXX2Tvqz7DN2zppDmaZTgYPuzpwHqqk5oNRrsNgwx1cdkzmZZvw3RAzh6vWmsayb5ws3K98oRug5ephFAW",
  "key35": "3SDi9xe9fB42YCNHszqGRAM8KK22Q4pRYcVmpPh6mBZP4ZChQtp56xmQDsiStK77cLHAYGvujf4zK5xJ4Bp1Azxu",
  "key36": "5Z7MC8CZPC2snfwQ5CGhiXVyLw7erKs9wcfC885pjfZYEKxw6mWeVUxjigh5XTAyMtB3y1cCE9nc6SCaqMMTvsSm",
  "key37": "m7eCT5L8ULt5Ug3y5GCPBhVCJbcidfJKDfZ2vJmLGVJQxBkruthphpfKuahm1rBcXacistVFsqqR5uN31ktG3eN",
  "key38": "4BSUYKe4unuBETRzVARJyyuRWQqoLu17jGvAAZXgm8j8HpVNUEc159M9TB8xuLqAymmUVcsAycAwEtS2aki9RR2y",
  "key39": "2rwuA23wXFGHBuc13zHmTHsJpMZBzZDVQefFZh2SF21JUaGgbPA828qhyN91vCJ7BLm1FztaZwdVFDoDRRKFTZNR",
  "key40": "5et8tdWUFHHJAqs99Nfq3SfMHF2G3hJnaKZL1D685wYmheSYABdcuJuYGUHrZZUBxswGB8V2QvMLsLY6XiHdmt9G",
  "key41": "5PtjPipYu578gX2iHjojZMQdiY12PjSvSweF3fFng1o6r8QYE9ad9gvJCmmUQy3joPXHJ7PFWPYyA7Q4DN6ZK4CB",
  "key42": "3j8LUZfVjh4eiESgpURiSjxhHGR4nMyfDjhKidDuQAPb4GgMVkf61gXHeTDK8H8oQe19c2UGYi7vW9hHFAYtzzdf",
  "key43": "5GfUTCaesBbrQFBkqJU6v352FpvFWN7PJ8khemwnpwviisfi3qGWik5wPGhgk2PjVBCX39K1SmL81Pi5pQiTGnfn",
  "key44": "3arVjhY5WS2oSHSYXxjVQ6gXWurjFFu9DBE9i95cwzzkB7BJsShwxR4mgVdjMAEYpf8NNj42EdRyosguXHVVSdmG",
  "key45": "2zf34YRNFUvU7ne6GGwooRs7jbamcqkGHGKL6Zvyf6zyhc3oUQkzNSdeqX5VBJNmfcZFeEGgxXHvGxyBy4fkaAyF"
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
