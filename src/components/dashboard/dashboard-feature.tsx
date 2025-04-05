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
    "5syPzCpcS368A3TUuYqov1mKzncwYpbhF5H2ffHQEtmGuqpvKFBsU4NBDf5HzmwhibMrhTzWJcHfEtrXGKYNzr83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hGy1XVKYAiBABMD7JPXNUkDE5jz3X1HTw3xPipBpYbXpUXNsdnwtPGdEQ22GScULQev3v6t8SnBYg8iypsqnxc",
  "key1": "4t33AA4Sf7u4EhxfTXnUqrB4vonw33yWntmx92eiBPukAZwzyUN8ZF87w8cZfmfiqFSDrPSn7Ek1wTar8pPR9RFw",
  "key2": "3Vk4keXpbB2WnUap81u6j6iMAh8N9biBfSQCU4SjQywwi6zLNo2tnuajjKM24M1WbSJoWxMZc882JPsvUZVy1md2",
  "key3": "561JdZq2AyEuv7hSxRDwHXSAUcxFMizi9gQtA1G9D9CcYK7eQTynsXGaBArTYoPoTM4oXspAp9iURucRpNHVt65c",
  "key4": "w6ytR5LHXerLCy23vQ32wSAAtRrbszepyTtH2jrFr4oNJ6mct87J3rfbEjYBezqVgYhwAEQ5Fb6uPf7UVXqHT4F",
  "key5": "5HfB7f15nPDajX1Ms92b4eU58ujyggGgBisJ4EKPmgSDqApMThsJuuz6z5KWLmhsRhcLTMJ7n7gU9J15yPqwikoP",
  "key6": "5hYztbMdDdyqSXmthwZPrEeTLaPVvq1PwWD7HAnLngc6dAHy5rRh3i6NZK8gsSNAoqkvR9PYDsrCaUwrw6kv2pZ",
  "key7": "3iEyA4GUrTNXLGrywxFakb5kZFEtNk4rD2TRyt941Rb3S7DbV6TMJjQwBWq3qM3gYqzQ7XL8jZfBULVCo7JhLtgN",
  "key8": "3ZZJygKfV3rd6SCQw8E5Ah3kwTPRAXBud7SH5r4DMn5iA1pb6Phq4kEjNoh3AERL1s67LB2LEyhR8vCiX5W7EonK",
  "key9": "2PqcchPoYJXDaNFQVALJyFs8oY3wJamNgEGXox9akZsFtf9MbmvsQnrgC19z7b4cTNKWXnC16dYj2Hf2KhRGVJtX",
  "key10": "49jYUgbpntRgyuXKG72gGazrWpUBnzERCR6dTDPd23msvR9p3Z9iebBcMgFjcc7Yo3tVWn6qPMKhiSeQ2Dy7xsMy",
  "key11": "PFqhiYDorFdthhUNj9yswByNZB7jZ1zVmMoGP19XBTyL79wSdT9TDgtUJTLdvZy7daA5hPWwHDuP8UNubJSnAo9",
  "key12": "q5uNJMvgWVTvzYe2KRLJfvKbtKvfk43CaEBncv6vHH29F7iQVetSBvz4hQQT7uYVta7W97hCzjDPaRoD3Rkuv1h",
  "key13": "gqrZxQ2oG6YpRqan1DPZ7WtrpMWHVU9o9BbT3baCQ27M6AAh9MnRYzJCbGu9EkjdCdWWWW77Deu5at5G6TNmMUs",
  "key14": "2LMMgzdRKXuCHeLGXdpwoLSCQaRjbPjyPdcQKMsEe5MEWYjeYuM3oG7P7BfGrXpTQ9sx8NBe7reaQ3q1ikdt2Gpz",
  "key15": "4afyc4xfqgCn632BJv7D3FSZK23P4we9m8xRFhKmRjLyDaDnWad2hphEvkwfNhtTxqTC5wXfEZ2qMxegx1a4eZxT",
  "key16": "3DLyzSymnhxYyneUX94V4zinE7bxXQLvAVB6waEJBaxJN9iviPvDA7UwbCPcFGFftY6Co2AXdGBxDwE1XNQV5zmj",
  "key17": "48wzSxMSefSVS6zvLonkiwCie8stSYknxmkMpJqvVQ34BLSyfj8wh9RwaLPJwSx54pGcwbGXFb8uN5HHCJShNE6C",
  "key18": "3LCYSnmBRiPrSY3i2v5krWL2ReV5hKXLHWTDfLAWoaZ2q6EcFyCtVjb4ueH3tiP6MTqjQvmM8GrjZGitEFLNkx1F",
  "key19": "5e2BuiXJcnP8FCak6norSNKJSWP1JiL6bZuR9M5PZfiGCXvo5mokoEDp6f2HgBtMMqCKDYJD1cWFJZbjHnjasTrt",
  "key20": "4e93bc1UWk88GLiSRWCiod832vzxa48BJYGGgUPW6n53AHrdVMsPCoKNdWBpeiw7rLpK5uwKMBTrxXKEjB1eFAK7",
  "key21": "4xckq81RhYEtCxLe5cij5Lw2QKVizbX5eD8ZUfMThe1WR6UF8cyPST64dP4Wb6NEXd38W1ZwjeAhoSHdDNvAyrdf",
  "key22": "4ibmTh9v6XvBtGQBJdKku2AM2gVaiMBEZanKTkYPGWcmXfCUnc1bNpn2mtgkQTW2ELUrvwTfPUHSVhzUQyy9Ut34",
  "key23": "4MpVFM7Xe8qbwomSwWVHq6u6EHUPRoKb1M5kqWN5YqZKEimDZShUAQg9YA3PNKcvRsH6WNeaP5wi1fR6brxWT3Lz",
  "key24": "4EUMAcsQ8ecHGWueFFzxrqQ3KZGqMwnzE4kLefk8Am4w72uK6aieh34AYoCM6uSTjHBBYRzdhxFbQm7sbd6RVghG",
  "key25": "2a5R3vYa6kVWYbK5vNN5GT9dnNVHwU3rbfv8Yo8X652vVXiYTTgH8V7HXf53fMTEBUaESqDmVT64aDrXCkGePkU2",
  "key26": "hFYwxigyG7rA3RxMpnLYm5riSre1vhG2uREWKFZpGMNizJVuAgEadQyE1ZDmzrkU1vRvKCtVkcewRgSLFKvp57u",
  "key27": "YuSJVsr4x23CAt3Rc68tEdAZKr5nDXUgQMsayYWzFEP2p1vLLrAB8gARSPr2eV356ESGKuvV8ktj15nFipFXugG",
  "key28": "ZMtz52K5HTAjsk9RaHUmW8z1WRjzJhq38HDe579LkkieWXfjG9VpNQZxAf1q8KzCLQ2Lyb6aU8hQB4JYuSo3gpe",
  "key29": "4YsWV3RRxfvhscGGNcLWjC7jRWJMhpij6wkg9PNnX9GwqFwpAbrR6EuAwGJx8oGVAMr5xRtCVKAGmWfVv1g1eEfj",
  "key30": "4h8ur1eAJ7sEwPt1UF4SyBTs9Acjy3cDuwJvt6FcymaZQZvFhU2CWHjX5rwyyhvPmTw44ivENDwZkKrCMBQxERZ",
  "key31": "3jfiHYcyuEs7aN2Vn4JoRRnRpQC9MB3eaRFqeG1ANiuifH7ej5vJZhx3CRQs6CAcQgLfeBX8T3pdRqsPN6UrcYbG",
  "key32": "25Jwshn89jWnTmXjnu7h7NAdNFjyCcwnKFKGZeadYSibixhcUdNpJ22EnQrwt1cHELw773Zt8DQJqetGJnYUUAMp",
  "key33": "2JBaL2gYSMjJw8eJFn7qnLMyuxovurT5jXDshewTdL99pbVBSvHZx8krjBZ5sGPdHXYAUccAN5aYDGSpBjq3MGnb",
  "key34": "Yck2SsAgDuY4WMcewUXFbd2NK5yH2xaXQbi1SyW3Hxbtshb9hFSDmJJqSLM7fFdeXx2CC6V2Y31sKCR4pZXmSuY",
  "key35": "5NvmVD9YBQqkw9tx6Hj6bwgkJekDF2L2khnXYy2k5sfsiY2myPNZMgdtywcKZS3KHjtNRVgLvkaLKqrZ4ALHwY36",
  "key36": "28dZAE6C9nNaMkQHDyBF1BgNqB6wpCmmGsudskEbmvqHLDsPoceNdP6PcuV3yorLaxyYe1BwnCMLPwb6bhKeyvQq",
  "key37": "WJABiL2yfcBcqYf5pyW3zxWQZb9VDrcG17eViNLPSVTkwCgStSvm8Yag9iRfPKdAZBSWmX2SvMTCcaJFeShJpKk",
  "key38": "4QHe4Q2ExrGAZ5WWhot3JY85yDgWvtPeBpT12DD8kpDduJB3BcPnV3eoR29ykUvys8MnfDQWMiXLew5GqAbnJZjA",
  "key39": "3gF9gR7ej3sYZk6FG44MSMKkZraHwf9M76Z3dvbEJiJph8e3QtmgNqam5ZT2p38UY4hPzNyKgFPcBEk4kG63DdL7",
  "key40": "41VtGxSjAPbn6gsAFan8cQJdMJXrLaJycfAMjyW2sy3KZrHR4nucjKTE6eKVr9p3xWHYBQYkAhx6EygST2ayJt1u",
  "key41": "24ccNCYrxtarZxQ69ANZ3uGEJombU83TDUiYLZJHC7MrJNUJmeVWhMMTfSh4LDWPEzJRWVUiGRnzHp57iMFq9dwN",
  "key42": "3s1b2rLYPF2uhdvJbxKm5GuAs6Kh6tbbnpkQicDTfKmytHQLWuJVav6FsG4PhGLYQcqQngnr8NLdW4jWrFnCLN5P",
  "key43": "31u49pcnpNcks8rHMDK2AaaJNtQJxHJPggQaWCEKsWLHvm7dtMJo9zm9awV7kmZgMJhWrYGRDKXtCukFxVNiRFm8",
  "key44": "2tDR6ifnztLcE5Ucw7thLRJiitmB9Txyum6P1Y8scMJZiFrKFckEa1nfsS79dsfZJgebFQDR7oimSsDFy4VjGjnC"
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
