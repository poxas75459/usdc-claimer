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
    "3sw8sBQopo3LbSWYDt5BktGsARqZZyK2EoPWXsdwgRWNNTErvVxXmg5CXJ58dpd2SoVUhhwm5YPA7B2ESoNzV5CQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjSt7xZ95HoLjvVS48XsekD5d1pz23UMLPPcwjHjnmScqZEYYA8cpjV3umekN6SbZS8ntwvpBjmaQKpntVitqgk",
  "key1": "4EDxKQdtrzbrNxkEzYY9WVP5i1u1iU2532H1Geu6uBSw5TcM8UBFePS7rM4eS1PVieLtTEJL6VZw7DNjxo4mpYv",
  "key2": "62F4mUj8Jj4KQ2JcjZzWCnbQoxH1R8F6aErYXq73Q6z8nfK8TbfYdiykiiqkECFrp4j3xv6zVMy8cWmyQGwCw5Uf",
  "key3": "4yc2GWcYaMrL5gSm1mrd2QCW96UqhUKRbUwtRepNxmkEiKfkJW6owKiTHPb5q8HtkxHxnLRGBQrY4Zu1tsJHYhpx",
  "key4": "4LnNrvubSXkH8xFbYtzxbshMMNCRL8jUKgBojb4tJHoLWr32sARPS2iinNhb4VDPoQKy38PAqr3GjV2U6BtDq4oA",
  "key5": "3o3vgJBJzixc5JK72rdfcCKZLertqotKmjV29Uucods7iPmBCjtQXPC8iFUgxu8BPfpckfFadKaybsfg8ijiwMph",
  "key6": "3FzqRkzxeDy7LgHHoasw4U3CHj7k3FpNX3tqzjBx4izGVXGMjPYmEn44a3ufgjjqdnJxof9SN9ssxmQSQUJykEJn",
  "key7": "52CsH3QcFTAWVabzvTg91BbECsDNVuDV9CcWfcUFNJNK4qqwvVtJrFHwEoU9h773P5TYSnTG1n8cNrkfVGTir7jM",
  "key8": "5nLNwE9rURNRRpqqa6LeTxXnrnzWgNAZFSzLTw9cqGm8cjsZQbggN4m4JUAjD8jJUBJ6eYLHutyESAv4RGiom9jH",
  "key9": "64W2ai7ZL325DgKeXdhfMVCqZBctUJC2P5Dshno3YDdmq5dxnq3HC65druM8WKgMmV82UWq514o4Ay9qtWmJXazJ",
  "key10": "8a8ufeocSR6WJfEzYXWpEvAsicumey1HfQkpfJJ4XuA6BmbRS3coovZhnR7h2DjFWkNoWYYACk8zjHu1W3mRjS7",
  "key11": "3CakAFDCDWaAN3mJeFjVbU4mairahKDL98YUkgFphnBKKYnameEouDpAKgeYEDmVM1Bt9URunCKBa1AxwnZb4K1c",
  "key12": "5eAWn8UMqbfBws6SW4jTReHK1ViEpjcL3uNUzm7JSHnkSJZ34pFiwQdrcqH8tC4uxtcKCxRa6h4XLapD6JdGrmm8",
  "key13": "48u3FmGrLEV6sDm2DYbjgdEhMmXpcpWoZ7EPHXbwNuJVhziTZxqifET2iC796APtALkLPh8y51KR48QAVzq3hhfW",
  "key14": "4s2QCvJsWDvLgTeijN54FZXmSeiVk3K6PLR1jBN12CzKRpgLemoz1H3oKk964yQzMin57YiDfCtousRQXVDQDQxh",
  "key15": "UGsv5sYyKWYWLToRutUP3qS2yfiqAWoZBWWi6dHdrZSYipSGR34R9c1oMSbH7su7vHXmvGxbiobwLzokBv1Pe9a",
  "key16": "65njS1c3od2Rb3imzPKVM4AcKXHNKZD6AGbab6XrWPy11tHCwXFPtncmwZHwt53Lc42cGmqeH9QJckb4Q6KbD5Lc",
  "key17": "5ZSUPezPuG3DXfEpvgDmDgCumVxAdUZBiax1HUe2YnE8VSo9FctKiWTTQuNNewUz6t4QgBtwpSCHatNzYQsyPeYA",
  "key18": "2nzNF5LLr1jN8hNex6pnm3ZmJd9JQXqB9VE214cb8HP5pdyPpEbxnrqCKqYpHQBTUsSiBH6rKcgUweWA77hek5cW",
  "key19": "4UBEg4MLDGBfL5np6B7NCBFhxXk7Tq6j6skjFf6SCUupeQ13xjpbD1aDg9kfNECEFkGsxaMBUxBSCzeMKGcKqZN",
  "key20": "3LKtnQg3GfoGcCCKQPgEvfzWANoJTMhFgi2fc6YxvdYvLBZRqfUs2xTzRWYiqMisMmCASNEa3j9UKffckmxBbGbU",
  "key21": "3VCSrdFmMPVJHVAttTUoXnY8FzGXW1eAXxTLBf5VfsUYpUFvyjv6c2A73Y9a2zqj4ubFQ8EUTZ6xzQaNPUwT7NaM",
  "key22": "qbnaYx3TkvKi7fAo1imDY6Ger5MkgJbmCebUKokm1Jtp7TkJ2mp1JDP8ZKQdtzFqdoM7X4EdPfA1ADkCTahMc5a",
  "key23": "2hvGvzPKz34SWyX2TbrSoK5KVWWi9s1LhgFfgAnnXQqDVSsSscuBzH6Dd6KgtubAd2xpspCDQYrAcjDySJdA86La",
  "key24": "2wa2yRDVZzM8bREBX3Uw1d2o73SVRH3puA11xEZSNvXbBonXv35d559jX8mNDSgocgBPtFhuthXoEVBtAQaEwybq",
  "key25": "66HrH6UjWTjBrk4442G8arjGjW4Kg55v8VrvuEsCDvuyLGAG8gUiAkSfBz8SyvtLX5R4RqqXR39W6m2G9GAG3h28",
  "key26": "61eMML2rrdgTsmG1BLNNSc3twxsBLEbjWUkCjDS9YKfhdKpbWhueFgRD7VxMJ3USms6NuyfJ4qcBkFxUy825DRsu",
  "key27": "2cZJAdfSSZYao5ExJcfF2Z8hz5NFv9qK1fGbHhwDUcXjZwoH7Ki8YqppC8dCMcqfGBaqDH94H9FNi9MKtN295pTP",
  "key28": "62a5CHyWR5ZvACC9r16nSEzZFxter5oN31uv2eiejdDNzCg3npe7WrbXfyMTmKnoz4MBXgeWBKVbmcBrenQd2qcQ",
  "key29": "4MSGYP84wSRQjwKwcbGjHaJrcuoAWoUVkFNSRZMPajWA7RyWzQypqrDjRiNMWTyq6uVqpe8HH5DHdJVkcgm4kfLC",
  "key30": "2CFPvwAhQfcCYaK5cWpALYCuXoEZYZmPbtNdccEMHfhWY5oBBr8XHoeexdaa6vk5x7HRFK3DUg8v5ZGy3PkkRMz6",
  "key31": "SyoF5DxXXFaE4LpThDfmYTs2px321PZM7N8Why2hB4XEwFom8c9HR54aGPqA66vcDKrW7hc2hF4d4WAqqFemKA2",
  "key32": "3vfuTu1VyuMBZ25f8XziruX7UVWtoY6mAv9EnvdQkb9uYxGbEb3az8K6xQVKuT6LXxp2ruHkV815RRzeQ6zy3C9s",
  "key33": "QM8T1diubPGwebEDSNrAUaFeTQmBzWAjSVxuLa6TkU95cBsRZJJStLFcv348D2SmKHDhYAuVe5gGSceDZAQVpcH",
  "key34": "3gi9PEEVT5ooPuZwF7JMih81c9kYmDyZXr7ZNX75zW5yErDg7SvMEepaDw8T8EiGWEGduwsSVM8Ekw41CcPBeHTa",
  "key35": "2mSQj2d2SEsaC5nFStRSpxnz3iSKYZzvNPXMvNPgx85LVhXDGCyKnv6yudgHnGnykChN1RsE4B1uH3gQGmB8KScF",
  "key36": "2q9bJSWPWFpPeUnrDwuf9BEsn3Ey5fBGbNfUF1BHYZVZGz3neUjYLwTkbEB9c2cNaTotAaP7T8mmv4C2ZArreBDH",
  "key37": "2mTJxcaMzuFhTDvKTYzh43GCA1rP2BGBL9spzUjuSysXPLzNxxWav1VnzjV41KH37CQeQYHT3AaqCVXMShfQn4Pc",
  "key38": "31eZbGtormivH46wRmLRawsxqQqpCp8rSiLYk8JSW613DAq2fwEQWkBpvBANMthpTQPF9MWcAy6bX1sw2Mz8TPTJ",
  "key39": "4KUcufVArFYG8athpqekiBLRwgSHzasZ2fhbLRo55PbNKoHkYEtWvpUph8vS3BsTmDTQV5229HvcDBsnRtyHEBmp",
  "key40": "3wkcQsKJhdnwi9gR95UBzfQqbc3bnm6iGBAZPohhEeoZRXSBWkzQpykWXbhqNwL4AKrTLvaoFQp5XxJ5Ceznsfo6",
  "key41": "2gLzhGd6oSpmA7j5rSjL86mErTRCrWLiVd5wXFjufR8HzQfWQRYGbP19PZytB621bA1QwtBSMVKRqACTaXaMGGrt",
  "key42": "5zQg46fKDnsxBbxojektDfVYut6H65Fw1euuGSF1BtKfHPvszHb4Q4Maz6VNePvF6Wj3mHZuJAfytPENxrtY6iWC"
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
