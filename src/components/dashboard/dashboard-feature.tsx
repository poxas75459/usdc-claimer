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
    "34qjsSeNVcZ8y7ma1G3ZPHrqhWMeL6maoKBfj4LusXGkzWHT6GSRG5S3SNUQz4ZQvP4mspwqUjBTZsBZ7KYnxP2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTVFu95iCffUa1iB3hmCDWgghCctLE4fFiAxxyaXXakbJKihjfYm466P5Mo4ciZTsUPz4RW6R1LY5vYyuBRtzt1",
  "key1": "4WfMGkkuEgKuTuNSeqjQnbYLYGq7GaTLf4FEBVyuPbmehXwiTGW5yoMdXb5SqiU8ckwjWP1Kba93H8uD58AeRXZy",
  "key2": "4x26h6RiLVRJzxcNmSMJsmE5jqHSwbPi9yDcxXqNGuUm2Gccji4xnnv4xeUKvZwMDU1LgNabBNgEA89PhsadRMB4",
  "key3": "5w4mopfMLbo3rqzQufqm543ypqi7hi9EfuKEoc2yVs7U4M1tvkumFUM4WxFNH4gYStc1LhWado5ENXi7r9dN53EA",
  "key4": "32WxcDfiDGanLQXHkL7WHcGodRrPYaCvg9ontndzEdw7cjzfDK92pYk4yimcrMynZ4DWjLmtqXhx7H2ZoJgcAwtC",
  "key5": "5f5r7soFvVGHaHdVox8Ec15pfHWaTkG5ZfGNFXjPem9HoEGMcEYToDKaDtYHU4U9VYog8cRQFdnDuSws2WJDENkX",
  "key6": "5wqcsjyxZ8j7r3YDTdxpQn3fvS8SbQtcdEryPSNFwhQgz2PvTy3K36KV8AquzGEqGfWyMm6iLxi6GhciYZ87Zvyo",
  "key7": "4MjPzpAZY4VsRXQEL95VY9RGBdYZwb8nKJLVdxVDAzXXRZbZYrZMDLXJoj4Xk42Y2CvoGwz4DecvVYhbbyGg3Axb",
  "key8": "2wPW5mHxmtbV9HVuJvvKqH1F5apRk6L6FW8m7M6juj2pDCJxWq5qGBdDrMuazbRN3nwj6c2gJ9SfP6rruMpyr2Ft",
  "key9": "4kiz9LM2ApQykucmfC5bxct9hucymGCU2BYRnkis5ZsH317tisdXhc3JrfcyfJ5rRgQijSAEwWTyGekU8ZSMAjRo",
  "key10": "4yiyWRF3NQU89iLpCgWkzkGEXSoEbJHY456XcU9wqNn8azrsA29spx48KAyscYZBSgbX2abgrNYc2rakUMQchj3C",
  "key11": "5dYmdZ3xBi7phsonVnVwwvGo16YkGJJxMdRcEq5H5SD2F2S3GKHB2Fdo9wgrmzm4rt3H1TZtsxbyXNDLFJwKUyVA",
  "key12": "42SH7Mdjc5LaJ9qkzge5UMFQunHJiKJuU1K7vJQ141gzizxKCqPUuUctVLaQefjoQAM7XZBjv9nufMtFr7RnDRE7",
  "key13": "5bE7ZPW4yyTBPKoHEi2CAgzJkbvEM66c16jGPRXZp8Bm7LhVcvhQcfHKwW81w1gi4gdGfisfHi6GzhQD7vJSvto",
  "key14": "HE33MLAuTG7yzYeBWaiAedaFor78eUkviCJM3euD4JFzQCnn97788tgZDpc824My5WZtofY2EmqGA4i1y3mwfLN",
  "key15": "3MKNc32wf2tmmaeab3xS8Kn55kemjtjQgRXUzwr1XyDpuZRDuCatx2ipHbbqXCC8fsqzrAwQM7eWZRQzX4SJDGJ3",
  "key16": "ic72TqDPxzknCZVfAWCW8XQVanYRY5zG54MZzk25wv7kPzuPNb5HKqhdzw5sJLH88ZFdpuN7hntTeoqSQPBa2oa",
  "key17": "5gjXG2Gay5ZHkVDPmwFLJUWMzoRLbr47XaLFo9f3nZ9rS6YM34KqwDJAdFAfZky8MYum519CJKfwqWVqE41KFtz9",
  "key18": "2UXZ51PCBSYLzsCw6AbE1MHwz3n4WMyB7WfRtRKLYEnarPNGj4iVhfjav9PJAvVigMjyrLySATCoZFuJ1ZEPaDCL",
  "key19": "2nrvyvdwW2HY6PbLAW9difaBDCSCaDWExpuzkqrZKU92zVERw6ampHj6VzbXP6QGQYR7BDEAtMuFbiJKWXYNr4iY",
  "key20": "3eYY7t6AarUBbBzoa9tr8q5wRwAMPjdLQ1Hypcz7btoC9GidExv6fdmgew2MS9bCx6oNhYJegyRvzr2qUr8KxEEK",
  "key21": "5HP9RUs5NwC5JmXf7T7PJZFQZE7ru359toyngRwWXmTdMXVG1TqUAWFsXfb5WX31aZXAXGS8L9VWmF2pvFWZdRdm",
  "key22": "4ijt8wv3s9AEMnpkznQMDHxSPpTroXbsdeWqUqpqNHPtGreaEi5XcLkfEhNMHsk179RYLSzGs2ikZkPaLWXUDF9f",
  "key23": "39e34Fstkx9mVjfL7cMBZywBf3FRKT2kyjoi3NWfvDMz4zuWjSoujjoLAekWsd4enriuaWipabK7dJzpdZjTq5kS",
  "key24": "HEqUeeBkmrtWcF7UmKP6EULBVJSEE5C8Eeycoc5nwHs9MuGckbWjQ8fJDc5ncckiogDx2ZoChUvuk396pHmtrrd",
  "key25": "4uH8hd2VVwr4TQysVsuUR3kYVpZmY8H1qYf3QnNLekH4vSopQ2rptxnWvS8pTveR1sCBLDpu3TMT6SVom9Lok3Fw",
  "key26": "571qfL1nhFSXvbByUtjYka5MM78expqY8LLjMcN85pRPU6HvL9UtjtGpNMeetmnKgDX8sZGTfyLTFTzWLFt9TLqm",
  "key27": "4xKauftaLga8xacfu4xjANEDFP82nnr42UAJQNLATZFKBTntaeDn5avQarqCXqU9YZVc9cvJHxs28CPQCdJsiMq5",
  "key28": "3QtVzVvKpHKvgZxmvSMXm9mogGSrsT8mKUmXJcXq1Hbgb51A1HdLsX5BoXNC843iKrwUqRH18NTuyfn6DYouH1Qa",
  "key29": "y35Mibw4Xcsu9Ayy428e5L61NsLgL2g5JFLEMNCpqsua15QonsQLAwD2rcjv2ajft9u4NrdL6n3vRW1cwMMHDvz",
  "key30": "4mtZkUHAocDtLcXrGdCW91FeFqeJi9gspmb67Yg4puhGcxTu883MZmuAwGVrdW432DZxbCS4eU6h6bbZ2ff6QvWf",
  "key31": "67rjFeB8KGW9s9gq9eP661czEKvyXLT12nnZqDL9HRFzcKKCuW1cbi1D2ayfUNH9ReyMKtvTUGZasd9goYVHm6cS",
  "key32": "3XqfaGLhjLxAKfA2GwJ8fcaJitWcn2vceMJsmwyZuuNNtPEo8EMHZykRNJiwqkA72H4DPf5PBuZLh71Rw7Vh4VAM",
  "key33": "3vP9ZQby66AU7K3dPynoKb2LcdKsMx7kyZBqnrYyusGtHxBwofPGC4fLPufYCaV2M7KgR7dVET1zcYLGoRexzoLv",
  "key34": "5ZvpKD2rqrBdhFnje3jUxy8VJUYZAc5L1BwQiNaEPoFYBmSiphH2GsTc9qk3TpDskkZ6XC6CRezY7dLfCJh3Bd3w",
  "key35": "3dsCC916VcEgVemLKw8fSKeE7CUYYe1i6maXNirMztEHqCAHiqmfFNLAhdPyCPKjuD2kvZruymYfdgY3scYUqnhL",
  "key36": "54iScdnZcHVKwaFbuXS8soWoYH3FD4z76upR4qMQAxpkBhBZELyFnNwRyB4mBpv9j3y34bPQ4fxivdkENsqrxRFp",
  "key37": "4YpfnBC97VFgYk2QqaMTVWtyNsNg3Vom9tAQ4LkosEnsUfqL5tMCnD8J7S7DrwVKXNWKceUhKJz7gngDTYFUpqMh",
  "key38": "59TZfqUUrypqgcUhh9CLFt7xmgVnBw4GGbcFyS8sH7FZmTi9QW4ksmQgo7qrUvyyrnGFVtYvV6KJpSKBZm7TTubN",
  "key39": "2267MA9yGEHuaCSgibgwaEAGK6qipVeq5a8mcXDCzEFgxLms4hFZYJDa2WimA7cSyiKFk3GsbTEFTkDcYrnAnbxm",
  "key40": "3yC1BQ8RdRHnGaFydA7Q2ifQwoAwJooVgjZe5mpfTfN28FFMVpv3Nr3tLmRvKprQAND6CCg2HH1pwisenozEnCj5",
  "key41": "49q4r9JG9ZCd53yy5svg57TDEiMfBULxdJ6UzH8vCJDg29wajQkWknG5Vp1YE2qwqVzscHjib7xX61K7Ko4FdJRN",
  "key42": "3peRYqwMZgmdhRg2EV1mTjMTrpdKoZTfG1fHrETLmDXR5i7d1dqwUPkFZV7M4nPTaNgUYgrAs1ac2BBPQ67XQGQ5",
  "key43": "1VkZ7XBFUoetzPpmNAv11xwDgXwqc8f43rBYsGUpyVQA2PcNDwRg5XuJgu8KZz3hueqWD6WY8u7mTne6VrJGvGd",
  "key44": "4AMKnur9ZGRhZJHffACMXB4nNGpSAwgHrrXLpxB9c1SwASpmLSnHLEyeFQ3uUMAzHjez3sbbPQhFispK43h8g6WQ",
  "key45": "2Ck3dGKudqHySBvKUrQntNuB7sBf3XLxVU8485Hki73Jrf2f8b4Gqw8cewV6vfoDFKjrx87PQCcRWbonEhbjzVr7"
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
