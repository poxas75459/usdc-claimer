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
    "38nRTs4cjrA5V2A62YNhXvnXvbFH9jL5bReNvyd9CTxE7Rn4xAGWzQbQeA8GtJaYscpXA6VRtDjUBVJsc7AbHZbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6fshb1wCgntKyaKkhAD3CbYLwNN3QAWU4bU6MTqpp4L8YWCGazLRY5fd4cJCSjD8dnKPuDxXZiFyESiypDoF34",
  "key1": "2SGiQVHS2qcjVxf3cby6tR4RbdeB6fPTHLsARnF7ghP9aJD4GbzBKez4R8edpBe77iHMQ5wYoAHvFy78Z52oJqE4",
  "key2": "2ZF6rHFoH7RA2o4xji8gmyRcsWT6VCTHBr4WnPnLYRbEfvvc8CEPGu1v9YV63twpUn7TBFf9imZ2Hrdo2qU2JhQX",
  "key3": "2wJ2n592SbaYwsV13B3LnfnVMa6XBecJhBK7v475qrq2gNw4VaXMgCvT8rnsJp25YtWxvWgjnT29FmKG88yoXj3g",
  "key4": "2bV7w19DqeDrQzYEaKmRRYTXKZFjzjc2AQ1dCK3S68oaoEj8kBFQwKhdVYczcJQPCZxgYrZvqHdc5cApo7QQ3rU7",
  "key5": "4EbU5kLPtJ5ymtJVs5jr22wbU6aHRp9ctJyGXXowGvJwRrSteUkKykRBCms7MUaQAw5m7655PLmUizuQjcD8WdL8",
  "key6": "LXLhybu6SfZdd77V7PVmL3GAFJLfiWpFJRmTMns9NgzGNiyeXs4PeMverfwihV34eQNtDKiJ7xCiDUq5wacn3BU",
  "key7": "41gy4NVUBQqkSSXYVeLW8BrDGRq7bT6RPDmVDiYt4n3496La2yhWeo4q8MZBHouLMdSXTyJNPrUzhtR7qBCbaiDB",
  "key8": "4R3qcmm2tyYUjBpmBVdWM2ySWyAAxPje8tWmvJac28YY8KGwD8L9CsGys5ai5T3zd4mtmhgkatY3eWWn5d5taHrP",
  "key9": "GpugGmt7suX9GtXzRrJMkvHmHqNSSYzVYCLUnQNToCkpJvGVwMgJdBw4mQMMgqeNTC2qEqLyRDas9NzCpcCJvTw",
  "key10": "NmmNBRtdiVVNRg6bf2q9tyaK5rPUckq3KmoAgNhBVDRh7MrUrv1NJyPuWyJkTZHUp4WiDZB6P2oJJzDVRxsq5NS",
  "key11": "qy3HPk9EcPDZWGsgmaEkg3hpLqvjQnLJsHYCbrB73HopXDLtZW7Y3HEarch9eAMpAnYXN7inF2so3PdWhMgmiE3",
  "key12": "Q1LJ2n3GuuWjtQSp9hathqCRBFuFeQuwtYH6urGeqwQ6WV5Dyg91E5mYnyNBMTX9323CFiFVz99gXFfSJdLpPBb",
  "key13": "2NogaRJPdsyq5WVXB2dkrF2Yip3SDPgmfEjM3D7EHxCMYUGTqD4me1nM3o55SdEF9ndCKBeEeC5jBkdDnXtnkC2p",
  "key14": "5T7PA64YSG9mEuJ615kCHuAz229YAvFMLdCUrRV3LQ6pDjWc7rXC3ktHwFERtZiYrMejVetETMAq72FVzvJj6ajS",
  "key15": "4FgigtXiya6Aqr7ja5AmNbFafDJYT81JiZd55AGjaWeiaNKUq5w48FSAGtTiNzt39c32qFFzgfNaGZ5Ympp6Jj3B",
  "key16": "4RzAUVfiD3eedfkTCUr7C4Tkdk1Ck9KW7rrZxtU4z7pKvqSmvYpSJvCcG77BPE58WahERRJ4SqVHcbaQQC74qttg",
  "key17": "5MxhhXCJMPzsQC55fDiE7mk4qbyVn94pq6x4Tb5t44TLMZ9Kcsux7ZR7VkwBX3igfdzZf7CGGZ23fBQdCW7RBnKL",
  "key18": "4fnLa9BE5hnoDK3E88q2FNi3B29nde9g31DFE5zWvphZnWfaG6z8G8JcWFKTeMLqw8ytftccXNwmfxtV7cu1ifZK",
  "key19": "5f4pxwMMGKvmTycKYXXfHqcWfPps5zC9CSbQiK9KWv37jjWmZNrjKjk4cy2VZJxmiLFyfDyyHbKyRjYhucQC3KYR",
  "key20": "2DykanwC57tQREhdKFsLjpQFKJ8JbXRhpAsGpRVftxNtp3UuaoAGowj1RYXBV3uCmWDpbhY4z8k5LszwLZQTi6nU",
  "key21": "5p1xEoGJWi3fMJgLB2tQKnDYhciTxvzVrMxbPNwUXjrH9cp6P8dWEJd9M67r1iejUVipCn5Ag9CQxgK5Z96JqAVB",
  "key22": "AHacz6aHtL3J14gnEQvqJTHzfhUgUnJou6Nw5QDELzD7KsKMASNcBuL1TkmevE2eqWDMLSdqUQgnnC37iSttbst",
  "key23": "5hwWZ4XygtBSjyPLUFivDYD1ynYThw42jkSKCMJypLbRhGvJWPwDojvBAkoLbU4RMwgQCZARe4wdeBfwNVudmZGj",
  "key24": "59BfHX1sAZ9BpjGDUy3shdiu13fa65vCWhJUd5SbYBVC7hbTmF4tsNDyXADt52U32bnSg57kskjFMUXXR34ospoQ",
  "key25": "42FtV6HHch4AgkXcKHfBQ4GfsMZka4LvvwqBX8d1UyvnN3MtTeuuBDZ3pmLtwzRejcpSvu9pHoUxYB3ww9Cbh3kt",
  "key26": "255Bo3w6imRmKZ1DjRZdc923Ce1dsihWg157LoThRNdDpYaGKf8doWDYdJni315GaJcxtHQWg3QfhBnZaVf5HHSn",
  "key27": "4NfHNDaLGpXJLyjRX9PfNRhToKm3GFuD6oVuREiQwaZ1JHpan9PmJCM9DiKtudy9GSUr9G3xAQDTEfmKrcVaoB9s",
  "key28": "3G87J8Xjt61W5WvAemrwj32tgf94MyubszpFmdHD24FztHi2UUcrmjAG8QfGxFvNfRqRkncTDzyKYY5nHybzWqrZ",
  "key29": "3baUtbPiaRuCJZxVeHjBQYcaK18WxKmUUDxvC17TEqLBwUGGFWQRfdjBJVHnpyjf6KCTVoce9864nx7YFGgXLYXa",
  "key30": "3qKZvtuH3fcuFGZ6p1TSc6enUG2FLdVmBFyiCzSQpdexueTSfckGPBmGhWh79kG4Ctrwptkjtc1bUxAeZan1K6Lg",
  "key31": "41MmGAs448nSExHzCCw7EMfWMFnzJzDQBoDLMXhNmbjLQoL2YZRcBPrc2Tbwsa1d4rS8tm8eEh3QuXwJDkHDDDNr",
  "key32": "2AWKKdpLCTbnXh1W3HrMcZ9DJqtBsC4TYWtK2eDaZ8n34zSXB7fQN5bY3gh3CtPJfdfw2ZwNqPytZqQU4LXryXQc",
  "key33": "4Cn949EaTLpsDD2ro6FMbRCNEXvefNN1hWK4nSYpu3FksYwmn9HT7xA9BtZFFuYYkrUj7oGud3pd7geSBmZT3Ew2",
  "key34": "5NdrYpkmeFpjsRTMDpBLjVZHkUPPbZ77Gi8uCxnm1SiFRReVmve2k2zmrkw7S1Cy9EUB1hF6WhjrECZ4faQpqPB4",
  "key35": "3YoZiWr3nDNGojHbGKuWWDT4q9Yys3c8MzsfVoj5G2NbZFHaJhgEykN6pUJokZsw5cE78R8SnFSGB8Fhop4HP2QQ",
  "key36": "5pFZT52ZZcBG3GGt1yMgyzjkoD54G3aaXotRQErNX85HVEoKob7YyGugAEXnWjXBXUF6Wz4V6TDbqYtnFawUaasH",
  "key37": "4KypkpVGHQhv4JwPi2eGxyHusL8Yvux2PhHQ31PDZSsvRsDdaX2V73Xb1NZ1hdncg8wkpvkTF9cQ2rEbRVBsq5tS",
  "key38": "R6qW2xjdmGWubRWA2onNxWqJJqGwzrxKQWQstERu9yuaTZwFDjx8CXGaQPRAoEBFLdQiMNQGQqESn17HTRotPkP",
  "key39": "36TNu7xeAhc5QfbC5wsNSdvi3ypAr823eRuP4xzEGtyZnaFSMnZ4EVuWTvWCz42EKmq8iHizgreoqE5qKPvn6LTi",
  "key40": "5dC5kX4oc5FuRG59zteHJtaB8a8MAfpJMxeTwPpKt5tMaixVip7WGBDP2Jix9tuiXQcd77j9L9Zr2pov8jk9BLCK",
  "key41": "5VS16am22ETQuAkPA7AdjHfprYQutKDaD1WWXzgjMHBYmfhqoN3njDmzFuFKcGdYZLimnAhrtSo5TkNrZ3GL3iFy",
  "key42": "4dwtfHCHBCm8gvnZVsQ9JWbPkHwbsgMisn82NMFbXu4bL5yq2r1KJB5WyFYPMVza2ubTCSaYU75jbb4Q9AEbrQSX",
  "key43": "42NMGz6oURwjENh4X4KQTj1SyHGQK1RsJAsUK6Fja7JK9XWt3r9raNuBs3DRDMwR1AinBjt3DxKQuUuVwVcTgdAQ",
  "key44": "279sZhTocyEFbCZ3crTAF5qMbdiNWVsixW8jLwaRy6N17net5SHAwf7NCQjZC9eEgLndgTaKBNGqXnCPr2h3w5Gu",
  "key45": "aPfL4gbxySn4e4s34r3v4GQftPznXJRcu6Jb5yCR4rhiGsWdPr2ss2CxsT5Ln2HzneSK2WKaiHyiJupLCg4BiW4",
  "key46": "4KgRAirUDxsY4XE6Bzh7fjbwPL6aBnrcFBX9mfpz68rHHXNgMzgXDpGqurKEvYRZmbWxDk3G2hHwgWe2BT9md7cA"
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
