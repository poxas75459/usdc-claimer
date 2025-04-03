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
    "4vX9j979dioDAWjENfgA1qWRA5kK8kKp3d1w4RozMuUJfGSuiyGiXX3JKi75LNPDqCACSS15SwsWptpPWjmEnrcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1JKMNX9xYhoFaPhNv72szeaaUheC5AGSf43mcgnSyn8dy9GLmZoCKxrvR8sb77q348Me7tLuERrzq1s98zPZV6",
  "key1": "3WUfKyxwrKmPUZ7TjN1Sawyt9ZTXBJAn9ySZiiJ7WYAgxZ46v9S2vKbMFsHRVBomkQTYNcujffvQMpbcXCaXbkRQ",
  "key2": "7uGp5JaCDnNnbW8NUKwGrn6th9E897458FdWScKwAdLMJ12XSS2EMy5ypN4iNTmiFgeH2RUBBKAvCVhavwUML4L",
  "key3": "5ajPshHXBZyXgwLQUMiKCNHTfdQ8ny8v4Jbr5Ns5dP3t3aLAwiAi4G55vB5tjpmcNuSA81btFpAmf8oXpnQXJM7e",
  "key4": "HPP262AzBcg4RCcV9JzMnyNKjGFEuc9rWSX2zg49BtNRVT43PrM6bX19EiHNLB7YFngCo7H9MJufphzhhYXGtJf",
  "key5": "5jvwVRw5preMyN1ZpDgbigG3edpSBFTh8SLKPDcQKwcyeC5PFFHg1pcQAm8D1VHuWBETPm6cPXkxzoyEK9Wysvxr",
  "key6": "2cv236JRWnBKKSsNBwPfx2UaLmQ1h4YjxeKJhZCysRora6bp6DfJ9h3XJT73ZdAwyKb4jWXbR7d2FHKeVEmTUHtv",
  "key7": "5i1i98CFsq1rTisp5xgx1yZGdwCZvBriPoBBoJKAKpsE17KnZ2MdefcqkFkMkBQ9q9R8man7eJLmsPm5u2hRAiNF",
  "key8": "2M9p3JriLH8tgxnN6VMyjdKjk6sudqwHmYdrkhoFG8eyeMX7TPNBoqxyWqggBFTdGnXjKztMJomqP5oSoRMTBLuH",
  "key9": "3tMagYdwcBNTdR8b2pzy8CTWRAZRXk1N9TvXYzGBav8QyiatPpBQDu3s681PLYqhiJu3L9S7gvYx6PmtSA6oJ21Y",
  "key10": "5m5oUzTWbEyxHECLy6axcH6ge4C2Di9U7VH38t8jVrkhqimGYjDiPJXwBxcMwBwGLsRTmoS3qEvoPjVkh1mp9sh4",
  "key11": "5H5eYzTb2Ef1fgKfDuCgFCEr82ZK5XgppM2KrRWkBx2tyoxP1fmU8uVu8Dvv8uxJgVLU9FKLGF7ZdD6sqkwu3Xjf",
  "key12": "4XaYPKao87ryibJW9LuJD4AnzvGrFj8HektNM1aHHBHm6Mekyj9KFWDyqVxkxfBjrd9KCWrSCF91tkfTXnsDkcQ8",
  "key13": "637qp7KGx7VVMXxjYNqc5WRK8BDTw8eof5gwmWRkn6fiPjHgTzU9dfE7EK7a38bQgqEdT2HXU82Xx43wBm4xemWj",
  "key14": "4Rpj7HzmpUGD1pSBRCM3wLnAEo6qhw3AJKbdQ235fBGBj1aFbm79LGqDjBx6f64xVaF4uwRsRvihhrKRLbJn7Y2f",
  "key15": "3MFbTqes2ywXeav1ibT7aUioPpGkA7bJAhQFhh719n7fia8zCbZymBqKThJYEupTPGGsju5pQdX7oATp8SZCFVv3",
  "key16": "4UZ411xTE3dYXHxBEheJP9BCe57NQjtLLfd6zwDEgWvmne1yGiuM3m1WdGNzBj6DJtzn7dbRcJUYe1zkvcXqk7yC",
  "key17": "34fjspetanDpjbdXD6XX3SijgmL4hfZjBMdJwK4v3W53714XomuP4iQKJ2cKB78GkDLfjwqvHaHUxEXgWSYTjWqo",
  "key18": "5vG8b18vWukSQ1M3zvmAczFCnzPnNk3p9CQ1R9hxUBp8QY51rbs2ygJsUMNsUC4ERsK9m4PakiuHkjDqappYunBx",
  "key19": "4N1qUo98HEDd9D8QBUk8HodGpJEx2b3KrH1J966jqLJdur6V5J2iVrakgsA5EuNvveyFk9x1bSfMc9pg7BEkKeG1",
  "key20": "3XC5VwXjmukcTNeFSWBs9Hp2DaevY9rKwqrFwYk8xNsbZocDckghw8vjmKobp8Y4jHmSbrTjtprB97TwqyZTBBv",
  "key21": "5yZMNpjQEbaDpfRCP1MzkTPuX5HTAX5CfPtnVtLMSbiiRqCx6RB8T2reLwSix3AWGCB6A4yTqdjEi4XFdB3FG6nm",
  "key22": "5NA4XRqWAYBbyzipHmY9bmw9D1Suuu3Jq8UMj4eFT36YZSsHbRcNAuBKbyTBjSFKtLuSMiHgYBSQN1cbdTd3HYXM",
  "key23": "3T1qbn3yV6hxoCKivJeyhoQFmjVe7U1EKBLSqXrFVRSx5vz82eR6vij64oHhMAW18vzVYny5CqnMGhhpXbNiXDkx",
  "key24": "2GSwtnszrF79Ez68wgCrhCEVpBdHRTAoze6dPFpipbMWgRd7app58yiA41j6zhjvD96cQ9m5WQQwWzfuXk2ppvGL",
  "key25": "3EjBhc3wePFx4kfCFrQX9o7PGKMNkejuY6RjsQ1DPz9jdz8mRku54cp5oE5As9YvpSQz37RGKCJJmrdPBsTbz9ex",
  "key26": "37URXL2zztuDr5E43KzgqM5oq3wmGQSqc4QsBFAgvtfXgroD7Yjkan1Spswp7hVCM5c7zGWCM1nMmrubE69bHmRU",
  "key27": "5obLykpCtscTkbFaSKERuBMPqLufzr12URT3GGr1F75XDUabxhXnweFPsFYTwjYjKQaToEUTBtNnX4J6qiRCMtWY",
  "key28": "4VYXxV3mCrujwtGRW8MQSGZdm5GDjh7py2AvX23eEWmUY2dzjPhQNPZGiuDbMEMmS8SKcd2g9yeERMYNr4jZ9ZEb",
  "key29": "2shXqxty3LZxdjDeABEgpyF4dNzdWT1PXhECBqN7EVbCFhyBhJufgRkCfKeJF3rTFZHUCqtg3K9NdyXB9KTP1Pbw",
  "key30": "4ysJgJZgdkWqAbAqrtpBHYqZHtCGFKGdPiqAQx9KYGh34x1kSPGAw31sCkDy8uCTWXWGLSQBwjENVXsvk6PuWDJJ",
  "key31": "2CsLc6ERncznMbjiXL9wjEedbJFVkhXjeMxzvLMP93XEPTzwENyrYjq7kKB1EtUoqG7PP9vVikssv3xVTxd4QmNq",
  "key32": "4hZgDSxupZfG4rKWbTtukReJG66Vg8JW8gvWkpHK6DGMiyEt1rTiZp8nPoZ9xcj4DhMTfUZjMkVEdZ93BbFfDfKm",
  "key33": "4763F5rHbEVcNBjAt1URcDbBHoYv22ZQG98nVdMQocuuoTVQ7Jdp6AHX1rzw94YVvUNV5ymAJkNRs3inSzswXF6J",
  "key34": "4H5SMdMgq58sxrd1FgXbHkcqZ5wb46VgS4Pz6JdbRJVd2APdKavgXcuZ9rkuhPK6kBAyCHLRVz8ea16gpdLZd6et",
  "key35": "4PhvVHL9752Xuv7D6n5GhCJJg7C7jZwjhWngs6eRWeaM8Ki8SkuamJZjgzYgp32SK5PUTrUtrTSj3rfLLxAWMash",
  "key36": "GmersP5Q5YsfmdioHb63iRLZCfzQ4VP8QFfZjnuE1uKF4FX8Pq9aHEts5579Sk1TME2fCxfaN4mTybum73Mmurr",
  "key37": "HQ5iLvZG2j8xkaVMsXnDTTYX8bM4WMHV4B3i4QNBRVhY9K4UZDqn6V6XA1tTZz6X6gkaQVqrkuwRtM8mTqZqaJH",
  "key38": "34fXAftReQxHLAvBfBmDDAbtgdWASCASAjYWWGHoqAEek9mjK5FB6wp85RcJ96bRgwhHjGBdoFYxAyyFgBw8mg5y",
  "key39": "Miygifa2E6SdJMgRVyG8tmgCm3vMAHrEU9vSwzT5Tf1XWDTMzaoBZDDu2mqDWAVFmWqHxUgmrV3p6K3biQhWi1A",
  "key40": "4UZ4SHdt6u8tM3TosZzoTQoPjtiWuJm2XcKiJTntp8RmLL7huDbxvL51y623Em3RxWDNmxtRZc5Q5QHWRvvvsvLg",
  "key41": "P9coLiEy7hChPNfr5RKR57MdGZiWjJmmfDF2AngEzDRE3JVZCremumdZYjqyKWVPeteTZ2LFb954Xkqtv2YS7gX",
  "key42": "38DKVcZp1gLXzH6MtqEK4namo8137TXuhU6qjxhyEKiXbTf7ywfHTom8SVGDtibCxYgq6zso8UTWhLjyNA7rdWwr",
  "key43": "5QNggvQhoNh66cLLKGJNTRyGLd8CYrjygAgxax5xLCoXJw2ZwVbEMabMTnBfigXydz9wRdB5US6sE4jNFwBEhn73",
  "key44": "2QgKDQ78XyX4vmgbHLGBZvYGehCpmQRt24w5QuDHCmxAz6i9mkrUwpjVKL9AAdsM2jfqQY2tbEz2Vdu5GZiwLVmD",
  "key45": "4mEgA6T8prj3yDdjgSa1JZu3mepM6chbabuQgdyBSwAV2VAizWKVzm9dJiBG3KRAdCmuqUMZKcz8cjFtaexLLnQL",
  "key46": "4pTAG3w5nZ68o8u34HUB7DePjz4iK2gaREUAi2qARj58qrVWTLX5y8oAEbELie4Th2VwQDoRQxPPyx6ajjDZ2ewm",
  "key47": "2ZJrfj8GP85tUkmifDSHZjRodxPRgzM3eyX3NKCJ73cXAza1bNdupyrfdU19Cb5bun1C9YuniPLH3Mkiqf93Rmcr",
  "key48": "3GMy8B9ThTo3QD41LtNZR5RXbwhW9bYKmtfqRxFFgdYCayUCKwVENWGPe3EXGxkUHzy11JALEm1FaSZDr6fYQBk5",
  "key49": "39PRGAEtV8Dx2UASkxHi7fooGceFt8H2CyhMa94tCPTDJaqjWxB459irHZ3WPLJ3ZCcTfBRrWLkZsmQAS19DSSb9"
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
