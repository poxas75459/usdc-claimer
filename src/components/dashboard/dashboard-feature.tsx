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
    "8uoxNwrwpbtZdT8NL6MZiDksD8ss4mSkioWaSFbrUGSie3oigqqU47pzWZfMhFNtMAowKoBAs5Bekg4rS93VUo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbYX6ob8ScWFYQJM1wr5V5ksUjYWTVRdrtapuRQYYzQLMQpwk479tEksru6wrXBovi6kaiTv4Zf9Lb98vkcWAEN",
  "key1": "54fq2PpLB7ziH4bmhFTwTZiKEY8k8ZmgS3pYmmz4RoT2vDhqcQXuK4zcCYYwqJzq1XcYBUBxPrnBdSELV7BYnbwn",
  "key2": "2q8x5E3yhmQBgpu4FxELRsaJA1xVVCpZN4jhhBnHRkUT1Wfe4Uoj2MHJhV1YL1vzqccm9qXGxYS3yvCGvgJqXM8d",
  "key3": "3Uj4kw5j5WJvZztpav4LpBdcAhgoMZaGPBmnbCmr9KJBLzaRPYe8rpKXvYzSSLf4q5mu2h2rD81vbCB2nXQrfrwD",
  "key4": "3tvkpdkaHBKHTtwNQdN1fFy3m6MDUg4E74prMgCrkmZ9nm3bQ5PkcsCK9CJDXJvFpvmWUDnxTsDjPUchN6wYZ7Sq",
  "key5": "3zPK9bA92s5H9jh1KTWGT8asTdwVysjH6rLhVNouzHdvg8WkK9NVPKwUmrdoSCGKjaquCbCaXyhn2XFHDtSFBYYK",
  "key6": "3Jkm2EaFBqsyKvefW1xXpzhjBV7QeNXc6iWPR599HKMKzoBoSvy7drdETqpu2v7UEc9vtT8ep2LonQbGL2eA5tGf",
  "key7": "5FWk8TD3JAZzAMHEKXQ9cgoFW1SCds9CQPn8XCbVSRPM9wyqPCvJ5W4SeG8pWVtehJU24piG252dJg5YfiRTQ3uk",
  "key8": "5otqxcfJpEG1hws9GcZMvbRS6SSXSQ6D18fq7nkpJa85hWELwz3YCJMAepDkKnqYGaga2vxsgmRi634CSbFuopAb",
  "key9": "aMfEdkn9pX1CpBmB2g3XucoXq2ezKt3sKtCBdxhgKq1iPwBvGdC2MRemV4d3Qvi7wweTLnnNFJZLTy9iDK7QjXH",
  "key10": "nAHJ2mZUy9pQ5nRFQyU7V72hUEbmjRHa8NAw9K5oQnsSTwiaYWAsAbw5ma7eakhPYMgBrmjHiT7p1YwMTuX2miV",
  "key11": "3zmqtRLuRvHuP9mWFVvZbeTanjUH61FkMiDrTCioqXkqsjaZdjN9uMdgftCuc9S3jgSY5zjNyaLX5iVbqmqDHEst",
  "key12": "3tRDSXb3mpMmLMe1dZA7irTd7WRRDtX83rgER4TDr3gmMpgeiLKmi97YzkhkTuNJBRkGuG1Neutm1iWWaY3hrGiG",
  "key13": "4h32vuCJ8mVS3fS6bv2t6dmrpHkBQaRR2BCaLF11T2wAcGfqpSmgMJv3BwRXhQWvkbxiE2LjYFzF7LP7ppiP4KLa",
  "key14": "6nHEp59DgSWtinofxWM2Q5Jyx3YZFBYtEpnBG46WeyGFuCXYJHqt6gsfdmdMsLWkpZybuYGse2D8qaVpA8A13oq",
  "key15": "4hoKymS44vCcpri5qrXRGxhv9E4vxZTc4ZRxnXfJBfWjNQpoV4T2CypZ4D1UnA4rMXWWACicyMJvVW8mPx81MBYM",
  "key16": "91H6H6unjh6dyvLa6iA18aeEgUqKF2CLjDdXaBaMHK3JdynGWEaYPwMNysA7WfNpfnC3RMpNR7gySvxt1pSmxWS",
  "key17": "5ymDNCYX8ayPTgm6o3C67E1gjyfCxC8KXdobwxCbBNCTvXQFspRNqG6ot1v4f3SRkCtaXA1sTfPSQ48zW5i2VX5X",
  "key18": "3jyLe96j6RtVULMjKoD5C1E7gLa5zEbSEh7FaU3NC7vFciNGegjEWdPSEjjEpkCE8YuYp6f546yAxYJWcvfjdCzE",
  "key19": "3jmxCYQyTqqZ4sjNoocQzqFwdHHUMnEDkAMZ7y7FSThLYsCZ43BS4Q8z24cpYbRfibZFmc6A6KcrPUWdCXH58rUE",
  "key20": "5vBJKt148y59hwn2WnQ9FLvHwp7Snf4Q4CfJRhH4inSrUMRJPvoR69NMyKe7TaiYNpNMw16MGXAvd5grhqaJnYjy",
  "key21": "3hSduzQhYp3jc2nBTQAMk1aiop2h8e6EKdjS5yi8KhMLEm52mCKp95Qdfs3fJp9aZ2tobr41ARZC18Yi9UwqGB1P",
  "key22": "4AGc88ccQFz128YMRadnxgCSS8ANnKfNw5FNHqCvvdoyM4SHHqgRfkEuccCQhGhDQKHrTz65jceBtgCHY4nfvhq8",
  "key23": "4uNuTTkknLh6ikD6hKx6V3d9q82bQmstZJR6BbN582fp5q82gCmH7XXfDrW4GRLLRXExGDXFPVAURkbVwVSh8i97",
  "key24": "4Bh5kGQE12E1wMWJ8QyCYN6PAQL3RdQmVprh3JA9tnvw7P7CSbQWNQFrqvtRxuCV8LMbV8xVrWiyygniKgMhaw5W",
  "key25": "XZkCUowbJwBXiW9mnkMFr4i7Ay92HbZH8BuiHFVLqKqSsLudBy4Ed4pTAAYnyy7s1XWpzGCVVJFhaaHnHPjHWVQ",
  "key26": "5wLZ5fXX35r2q1JNCBERBBW2VdD19i27hWHVwRosK39sSqL78DMPX6qX2B3nzAVXYHKo5B4bpQiowsqqEAnAms3D",
  "key27": "BhZz1JaSB1Abhm5JMkR9FV91watwxeN3qXB5pFPVrGFmtBJcpvvDAEkNKKqkDkmMb9SaPfMwAUuPVVRHuEFhJKb",
  "key28": "43Q3uYjEWrjavhRoRZ569VQ8KEGQzTBvRju7uBHYRmtrFJBPyMQHRYtzbuKiogvSjAZvceakiLsdQEXiLxHhTuEW",
  "key29": "5SKnNeWhRerjQB3F4nWo2YQbp9zMbJk3zh6dsWLyWY87ETacnXmEe2sMqZ6G2hKMoYsMsayQEHcKHwx4KrHTmuwB",
  "key30": "2C6kLfmZ4DBirCADTYtoJAPbxBYH9zS1FiubHvgQ2aPh3aiHBDjg7ztBdnmhYe9TJXGRfHHWU2PVmjcfgBkq1LKa",
  "key31": "23yYRpcn8NG5ZT5sa1pnpTNgYqTHuQkKJwdPCEQiwv5BbmgBbvkV34tyW2QWPu1UUCJ5Br5aJoXT8L3pjRBU9J2D",
  "key32": "3LXPJ5JZs7VgxQ7dQFQWhGjUNTU7mr7rsY5yBWnFwh6HHE9KaLs6df3nK7RafdTzo3QPBzoWjcdo6PH5jSyjfF6D",
  "key33": "558ZWPt61k7i2pe2VhcxHcTRyFf3neE43eevK6u9zwPYhxfoC27BCmNEmW2xmdG3TzBLRibkwEwR35sR96unmTie",
  "key34": "2muLgAMcozkj3TX1NwWBS1TU1JjuRyJVHQxnF8L6RQPG65mGKFLoB8M28YDX1tG9TEAWNjEAtYAeHAzCeTFrPEdc",
  "key35": "4Lpfh4h58hd5qqCxDoyqiNSTPvEdqJU1oYUzkyx3i6vCZ8ijeFsuJ8zxvLe6uR1g3dMaGJRXrhF8qbEgWny6hqxK",
  "key36": "5Q68oCbSsKWisGFtR8iZYoKDid4HwS5CesQ8SUW6ioLinFA6YZgkkXCDrywuHQuzCFRgm7vRNYZo4Zx2S6oog97Q",
  "key37": "2NqgydUdHkc2UqrXP4J4s3RHg72iPMYPig4P2YGuwKzNbXnPgaaiDhDmSGgGG76wwJ5hj2cN86kr2LkWREgXxZC6",
  "key38": "5yDZ2R6qy5NcXhpikoCzdTyrYaqGctRFrmnG4zP5gGpQrLMxu9WMxHuGgsh4bhpZPGvts9LWCBMfEMsWhncHnN62"
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
