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
    "4HFEbr3TCxiJRoFxpxtei4w8jeZhS7sAPcKryd9y2AD2vakePeTRdpmgPjJAFBg1E4rLzedDrRAcv2D6sdP7V5eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9x2yay95fdvUJn8njDy1fufKEFqEuJWBf7H9DgW7FZYrS5Ux2PoS2yfPMwVSJziC1EXbwjVZAAmr4QYh5dSpkP",
  "key1": "2nuTVFuSWayZdvnEhUqdLfDw7zyHaSFZmj4aDR2wp38itNfUcfrWjpgej6VYKoqKbNuuM9Rzr95uq2mPYys15zXJ",
  "key2": "1xWFFkRP2TNTM5xT59etNNehcsCcpx7n6QLBW1Go49AoNhnvfx7SJ2ntfcDZYrEGWVxXQYmasLH6biqyQvft8oy",
  "key3": "3bX7Ued57NwCJdxrCX2kMVTTQxnSspcJnhzf1rSrrg92Xb5VQKVUhyG1yfecF75soM835TELySjqFCnqJ7EHwiGx",
  "key4": "4tzvqBPPHyCxpcHPTfD6Zv4gbuJtaDhsZzwWkNJP2RgrLLH9ECwJiqJJKd7AXhaYvHo2gcsRcqcYns8jjPzdh7KG",
  "key5": "3k2skgnf4vKEyPvctnigTQkVsV2GoVCXTW29h1i3gsjMsUJzemaUvE9CgQMe1U6H3d6UND7Y42Av63trNkkFwANH",
  "key6": "3QP52a5k1gVMAgx87iSdakDcCwB3oF5PnKi2Y5sAyH5LF3NX7Bm8TH9rcenKMEEG28x4nqbynUBr69avYUiYHRE2",
  "key7": "sS9SiCXiCCwPkhp5mAYe1kNvEMVy1AN6xSCdJPpXVPztRha91NV8TDr7U6kh6RETHV5E98bMSS5aE1BSvK5r2zs",
  "key8": "52oMJrmpehM9BYuxLsPKbcXUzCxj2TXHT7ZE1ad4mqziLKto9NmP5n3zq1ncjX6K8F4np176AsbHcG1DWpsVjfAA",
  "key9": "t8mwEYxtY5kHjz4eGJGkAoKfai5FcZqfam1jaJHUf5f1d7nT1QurEp6nGTK4NRLaBGAQpmaQ4AMkonz7cKF6Asn",
  "key10": "2Fhx96RBKJiVTGPTFgoAMTdFAjMkHZetchgu4mi2iRpPxzvJdq9pcxNSbA38aVkJSJzT5883Gz8SKHFbPyudBdBT",
  "key11": "3gD3UhPZPAjNs6d628PuqGsM6PUpnzcEHR1mQs2ZiECEdNUQ9g2HUGaht8Z3DjqpiW9mcZd3JBF6U2ZAqDCgFXcD",
  "key12": "DnQkmVwhA174BmvoV4mbPbCMEKoswfFcbegNNaNhkgo3sREtTHWP673ZQwh4XpTSR5p61G5PjFzNKFvshYqdXVJ",
  "key13": "9xU32JpFYvJGQD5a4sd4LzkVbFLSXiRZvky9JhCKKKpjVRgwkWVRJ7DjMkGw9kSBxnYwSeGWoKyyUUQtEU7kzoA",
  "key14": "21R4832Pu2qmVzA64nFGVNBnx5CaTQzsEQLEmBEJi396kBdbTVC1n84B7g2WjsQTYes8EtXGGXga7EBG8zpLCRDJ",
  "key15": "5cSLhL2kyLtebgmLxGnvYiWTMMDgwKA9DKKh9j2aqbpN5VfdTqSAp4DZNRhBpqA7cwJGwLEuzUw4mQ8CjwSNNtSA",
  "key16": "MdxsLE4pcLfKxAduxuzz6ETXyXgR56ckGyHWteipYUqTSMqYfiC7KiRadLY9NpyMwFdMzyMtdwk5woUsU9EzfpS",
  "key17": "3e4G9bXXreJ9ycq8fPaLpt12yag1DHioh4DDRKc6kdDhSUvXYfUqjce6NAVo3SRBuuH1TaRy84STLaLeXoJcw6Ls",
  "key18": "5fHoPQqftB4tmUHZSFGJtqverb2snigyaPfm2u1zhfLoki98icgAttgJvQkhWgYJeQnn2uUVZZ6fFs1yETbVpbPE",
  "key19": "23ggR3QGH9AX2SEFHHxC47UxZ258SrRLf8iR5pGvWLzVV4YvrpvcvYAt3hhtBf39GmMatEHxc9b96zEDYqP3Y8Ha",
  "key20": "3TWpPUBjYxdTW12eYgLm3xfoooaCUXEecnYMXfC83NUW2ydWLER2B14knB49JSfh5d2V6GuJQdXugW4tT5MApCfz",
  "key21": "4SJfzMWhaXA1B8kXT8Z8S3yrekzqENTNsXthmrqYmJMZUMcMeQ6XHQ5LogpVc8kYrknRAKLyKC77g8jemkEbWBFv",
  "key22": "5J7Y2VgDXutFpopXj7jaRKkXWfrTRVBuzZawM4fTgLRh4Vg1kBJ7TAykj9eX63gETD1gj4gNz5jFDdxQKnjzTMff",
  "key23": "39ZxwyCdpTmqNbzqfQVPQHfQ58578U4iKmcHowhx7DdeFCHvoKw7LwGDGPTkTEJdRSoWQBPkYhW5VHtCutPfHFVT",
  "key24": "5VN3W7SCq5ZX5dmYsijJMEUMfAP2U5yosx4o2ExJLNtntEDJbY3TT7WEtYQ7KzrXW2kGteMDocvEisD6iXXWoKkn",
  "key25": "2TXmHJ3Vz5Xh83LUG7VhQgD2YDYiF5KNWv5vfeQ7qTfK93fWBgquCv8kHTwVevNxCgFjH9N4Y4u7UZa53VCdgDWi",
  "key26": "2qX9QDjCyWh7nvaHizoUhwtmSFnUEa2LfQBveXeEgTy8MjELHTDud9KuUBVMrc4SEz9E8d1rNsWTCtvnWM4NvpEE",
  "key27": "2LCaGFvczxpYPKv43xCPVddKa41bNsXgS8UTCV4ZtV7QnoZ1A2jHggdPQmKqHXkpGZj9UkzwFzAN8qQHwb1kwvVq",
  "key28": "5LsHc2nMdSxBsK6zYf35cRt4tHb6zsXcfpFGiKjtPVHeimHWn2Le89zpmQT8AdfKUSx4djTWzrqE2UzCnkoiz4i5",
  "key29": "2BPEMBdoTMMREeVeS4iyggYZMDkdGk8k6HUteq3DYbFo1V2BBuM7HowP6GUxXym3GQKezFUEtvbmgZigYE39FcXZ",
  "key30": "5cxK1CwCYaMP1CjLLYmuTH5CvDnDVUxiXkkL9ukoj5Trrp6B7TiWb6giLDBYqhvws6m8n27MEgvfCp25HBBAqsgc",
  "key31": "2Y7xLXA2r9vagR5fJz5E6KFdgNzfYfGhGPwgxxqPQjqUMEgPRM8cU3ufuAuVECRRoXukgn4XC9a97ePeGZBzMqmW",
  "key32": "3Ao7hynsb2j574NnYZxgivnpAGYkcBtndLoGsNC5EgCya2V1xg4JojcTqXwqWj9uzYF76u69G5U5J8JrLM71FfDS",
  "key33": "4RZ4LTv45RCfVJ8uzNBywTbXEcShG7uwZDNryV6UUZopu5uWRqjNW4nifjUG8xYwW1QhC89KqAVCBBn72hQx8wim",
  "key34": "2sRpX1qaqCAfpMJKSmUEfsoA4wkqz4TrPi4ZExgsu5qtsw4gowDuKuVJYZu9w7tWCmdYJX9XrV4uMKW9v5nLC8PW",
  "key35": "41g3grcF6r4B1nugc4Rhk8BNS7mTjWs8F6zSYMsASLe8GDpnwsmh6wey7bPcyLyAYZrn9bmqCzoi6Nb3YiUPHa6C",
  "key36": "2oPKCH1jGN94679FFTH1sDxuacCo2TwoaHiGhDrt82oCkFSkj4KX4sckHxBPqsf1aoyNbJ7R3582V5AVHLXsU5dK",
  "key37": "5eEzLoSD3eZM11MweZ4QLkcApPuscJwYLCdDA84iKSGXgyKMyfYfHaYDCtLASgsrMvHFQhJav54HCZ6PsbhQcZ1c",
  "key38": "2xLWP4J9ESKp84jkUiCZPeFL6ZPsFYU8c5eZbd5ex14djMN14pgdULy2cm7cJqty3y1hXx4iGmfUq1hpRiysrYqM",
  "key39": "2q4akNpinUz9ZbmRDkcxrqTKj1biC2ZM8Ljr6PLeuVyQpVHKmvn9R4Wa9dbwAnXMd7wcMXGNKxDkdDjLF4VMFxLN",
  "key40": "62jUopeGNPnQ6RHnDKCs7mJtfWqVESoesgQkvgXUiARdhvgb5rpknNBTXKX9be8aQQeN6DcjpDSHfPPkxuDdRKwV",
  "key41": "3FJVW4MVPRt17bP8JZYj7bXDgV2b2A7dEV2tVtnAHwros7dypf7CNyowJMtVtc593f4RDNUvb9iNmCREKcnusSwz"
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
