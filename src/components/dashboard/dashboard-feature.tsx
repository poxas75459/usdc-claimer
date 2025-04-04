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
    "5RUgdwYF6x5Y94LnnMXxLmHPhBWVKTAbtjN8XiJXPEKEt1HvXDomDXhoBbUuPRTYrFQp2s2KBk27jN32mzv2YPVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57do9ggEK3E8UCPp2RTjsuiTsqQuV69RNoTTbKYE1NLMN2EmCbs3JbvavfLVLgGtk4rGHXiTLxF6TiEr7JjRHiqd",
  "key1": "4DHA1zfJUzuBwnp61yWs13Brtc98NTd4Y4ir4Jy5FqyEgD5bu6TaiXt2astSznAS1SPwsVaj7R6tV8sdaiyrvdDF",
  "key2": "5upAbNXL5qTDQUxWKQC3Jw2BBirJkhX9d5m28hC9sxJmdxn4GCuxKTBW4BATgnVPXFMF6DrkGNudhVip1AePap4M",
  "key3": "5ewH69GCtWrpPheqGjs1KczphioCYKgTEYAEU2AtzaMMEpdUvX1BCi12tMWUZNJxo6v6MZXWhc3cQYes5qkFLCnZ",
  "key4": "2ErTe1dRHQuYf1qDxs2mxZME4N7SnEmR3pCiF9DhUpCF2DNMdmxpLAJXjcJ25tkNWE2zizbzh5VWo53NrooiFwXj",
  "key5": "5xhJQ77dqt14bHV5XnBxXtM1FHVuZjGXboWwiN2XiHDUNn338dfqdb6FURpZRn6aEfVTW9aUiieXed9SRyhdgXbG",
  "key6": "5da5Sw1funPVncnSJyj18N58EwYqhFp6MhVfXQzzpaDcmUGtpozPNbhPBFRnWWJCyiYnR4MECkw9kQRaLxwTGZXE",
  "key7": "2rf6oQ1JjWEbG7ngVr6HQwxGihmqAmrAkcWYMNJxhTFGyiyvBBBneY9hKGFg3MLiyWv4nSm8mTymRLyax6CXYnsK",
  "key8": "5je3gLzsm1dTiSorTBiByRia3n2KCGzHafKBfhpBjDUy6eqBHdmdo5CFgTB8HxWM85hHSSjZjrkN5sW2vheryLkt",
  "key9": "3X3KJAp7baZEiJwjBx36WE5FTs7byCKtscs8zhncvHquYvjWS3yykCFHPgtLqq6AnYgRcGAY2YSk7SSZyc5z4wCD",
  "key10": "DneBLPPxvchKcyj4boSdbKS5AyfD3TaNjkaSfrK2mLBLtXP17akYFogWYDB8mb8aRiXByQcRhxfMBiBXw95LaGG",
  "key11": "QDLsWQEZsbYmteJHy928DhMueVjU2k5kCYsLKie1KhZtJR3s95VPLxFPczxNdK62NxCHNAG5hGjwGRa4P71W47a",
  "key12": "5E9aDR8i1gC4kwG45wcgmZzyujAahpeE1iADZxHkQxHtYtN8Y3GcSMnxRDyCYr4sjyosxjzZLp6WN616gxZt11C7",
  "key13": "5c9npPPMTdMqSZAagjbvAJG1wcvdLNBF2cKjZy9LAgJv57eGQPJvyGm3KS6kpXA2Mt8AFMqC3uiJ83U2eBihmpV5",
  "key14": "34tH4CE5uy65sgp1SYMuUwx6XGFNsyBhLvN1Wk1AVBe8sD97M47eNb5XSxdq3WTSSWhG2CYokZmWssYUbEjjXSvm",
  "key15": "5QAJvJ6qBVAYqAbmvGCwWWRAgsfAFJBixPszhSS2xTkK1vFAXbZ6dDR52LEJZ9KVcz1BY1X2iAuAsprHC6KcVKWu",
  "key16": "3uDeXhMCu6aTEyneTtXYzhPavD1ACPnE9kqKEUU4Dk2y6LRfPkCqbN2qQuQjYi3wXUDHTRSY1FEqhhgE6jEYda8Q",
  "key17": "33htBkjixso5WwoKNswiQQQoqZFjMFmVhGjxiJSxD363AtvQazm1Sia7e7w662Yz88seA1JaUGkCp71xcsS2nuY",
  "key18": "2WMyQ1cVZf88mKnDLKw2ohm3csxPyUPs1vhUCRCf1fbethcofDVfZ9tWkqRJ6pMNEkSWGtszpNxbGigfs9NmU5GJ",
  "key19": "5S1AMioiY3vpFH6MAmauYqPwdaPnMs98WHTZnJGEtnpG2jLowrcQ1BMP2b1i5sekmgmagoxkmVoiLnkCTtNEntEV",
  "key20": "2PKXiNtoN7vtHperhen1LBdq1wNWYHQQZSeMe3ddStZk6DyANGXDUx5NKw58WRM1fwkUpXLDmCZuhjkPEnzWX3pu",
  "key21": "48donC68TN56JdrKs8mFaoavAbhDW3sSihHo4R6Lkxvg6GQBnGV9onJedSBSzNWVzfJfDnyXyZTmnff5QEQ8qZEZ",
  "key22": "3hnem3Xy7gnj55coEchafgfkc2wXd4DYvW9SsFknx4KY14WwHAnULBtVS9z34hgdgcbcG5aV6tBFx88NVDMGjwz8",
  "key23": "5TqQQXUZLedVJSK7u8w32XDd4dUfJTWmo94c7bFyJTxCPa5GhdbELp9BHzBWXyKA2Rd6XEC2hUdzRr1tqKNSe7RR",
  "key24": "614Mdihkv8dnAHc63BgKM7aWvoBNRNTPLfRX8UTJeYtwQjXrCba8Vy68YQ8afLEVX7gGugtsQHnKnFQvwf3h9i3F",
  "key25": "65i1fpR4vqAQwELqEfvkCSvGjHGMCWEJix2ZM6gHW645wr7Zzs2JQjVSyurQLkNnLxkvCkT8SSnVmhHVNpjsBvS9",
  "key26": "2t8LZ3CfqnUqXYDJ6HdRLXLeHXbZzs5q2UAU2EiK5KbxUCm3EWKqg3JGZzLRHT9c7bqYriMhDuhnHZ5LAuskvfkG",
  "key27": "2ReSUFEWSEi1J4d2fteCPPLK5V6oaGbJefb7EBy6To1f5Zxz8PKF8MQs85v36nNajveMXq9KFtqZmceN9a9wwRvo",
  "key28": "2G3UxNwefysqW7E5cfJvBvVNrRuMygkrmqajApmA11DJytgFFtnzYbVxfvXST5SqYcUjMVzj6XeB8PG8PRNKPBvv",
  "key29": "497jPoePScRXswNvtYiVCUhgFwKu47fsREL2sQSWD374WMYgVGXg74NTR9a9M8jBw2Cc78TnWJwDNh9iBMT1dp7w",
  "key30": "4fpaqHsfPvvAz6Zto6nySRsBLteer8JVCovGXieDgvhuu15VGxT5qyC72r5HFsn34RtRrYpYym3jX44Dp9R8WByo",
  "key31": "4ghRGsngHcXRG4fhy8hB988fTfXjKJUMuQPB4UDjYHh8kzQ91GjizYPLqdRpcmpqyEBnAAoyzmLZuzWFgw82uwYK",
  "key32": "2pMibd2cJjfCbfivnkFcVPnThWLSbKut6VR2c8Ey9hKU8GhYXQZcw6HWv655eYVSh1SeMprFwhkV7YtcAafhc93u",
  "key33": "2izywHdw87TtQxdpkEsD8Tvyyb2fEdx5Ytjn8GPjJBeBhK3Tg7Q7MRxApZ9mZkG5ozosVW4ckELUYViQvpE2ERW8",
  "key34": "43eTyhN4AEQ6L8GsmZe8UCQL8VLWmsnriH8TJtS8SADUvN8QwrkapoPFfrsWaaFQF1o6n2NSAqjyF3Qj5vhWTFBB",
  "key35": "P64RRhMD4JmkzVWQzxjg7aWX7s8riERYeEuavE2oPeT2c4saJ7mevjYSYgRsXuxJLR7rvBng67nH8PJzk8JCLEr",
  "key36": "4NFxasifZ6CfNud5ATLMyvmQWj8BwA97AFezFa3DAaE8MximGHCsKBy25kza8qvWJNkhQsR4oW2Pbm7AxbnJvSqd",
  "key37": "5UXELTyQ96RXzA1K5FTR7paoZT2vjq7ALoJp7UrbsDtLaDiEMuv6vTjqimaTLR2CyaE9DR1dpL8Kdmhf5ti2u2Pe",
  "key38": "5X73snYTNEmh4ocCNY1M87yLo6LeuKyaKP4D2Mhmvgh5vPtx2EEZj8WgdrsYQq6fP8UWuRA7spXw7VncEsz6sf7j"
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
