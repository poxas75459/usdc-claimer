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
    "3tnCPTuE9P19Aj4EZv1bg3qFbUbBcznPW6j18q1GvyfcPMj6arsdabvXYsSZqJZUWniz6XtzCPKSeYJMuhHd5xV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buyHbyWk3gg4e8oDtH55Exme6ArhmUnhQWMEH1WiGGGLFVE9kNKSitx5udiyTnLkAzWzqeftqGQ2A92bKTcQjUR",
  "key1": "4w7qdU8mVUXCy7VEyJcWKV1xzwKnJYDAae8ns14cYQt5x2zvXHJx7mnc5LVqciSEAfSyw6H591SCBe8B89owMpAb",
  "key2": "4cYeN2xcxucNz5365rHHppidj33MmhsC4gSfDW918WBRRw76ErWCPWffRviJ5xT6Z7577HkZrNn8gVZNcVw8hrU5",
  "key3": "5S5KE9rcABeFTefFmPKg6sGw1hEYnXyf9Lb9BiXD1S57Rnwg72q9cuAyeeUcQyGHKHhv4oiebtCDbeS9Y6o1Evh2",
  "key4": "2bSTJwR4zJ19J7nkJZuTDUgBJLuMgD5JcJEiapYKWM1mhkP7VUG5RzoCsdW9b95sGc2FNxukvJQa12C2gGsKTvDb",
  "key5": "CYiZGTi4LiodchhXq29thvkxR2t2u9H8AoG6r1PvuaQyToup96Ku9UXxvbJS7CuDwV5H3BUbMVPg48TU86xYLaD",
  "key6": "64vjYs7Y7UfBK9fSqH2fwMvinWnmmXkQo28vxFvbPKdF4KcBS7ccChMocS4GCdDtCDDM1KH3axYVqbcr116y4j1t",
  "key7": "4tEhYbDrpdzHC7jHdd6S5zcCGiDYqHNvZT5xpgqYFSmUhbheR8tpVW1kXKZTf4WCmyT9mHK7DpFhhpWXhCaNhny2",
  "key8": "44CwMaLDa1jJqtvKp1ZySXrYjCZDEfkcDXpeQAPmmbebyvRMnCNzA4PYFAujsXXYHTrucRQas7GtG2UPvTPwbTVZ",
  "key9": "VkhP788eMWse6odx2VJTCbK9ta3smg2KSdEy9imyE18GJyDCTv3YMru9ZrY6YMqC2KCRitf8rKorFaBboxcHVtU",
  "key10": "5TVTBFoqfNiNAxReGMA7ZLEGY83UcgaCbE87xHajVu2XiMXiLLxow7U5LHGMvVqSGqTs7tTT6B1nUHKwAVNQxkma",
  "key11": "4mAJtfDUSq9gGZBmHoYqcjiT2Q7aPXH48a3ocirorBcb53UR7o2f7VF5xNU2nvyrkVNvYPphSF5VP3zPNomzANGb",
  "key12": "MRjjdnL8AxruU2RXeyuBzp5JnbraDcYF4Qd2WQugoHzRg3mTJL2Ti9fNp2aLtzHTCR3rvcX4pSXxYtLyz3oz6ja",
  "key13": "2Yvuazmr2NHt2EQaB7Upkg6LwD4kEV34jkHx4SRoDZDMed7UbvVrNEK6MPugNQYNBwu1j9uETHm68wYDT5vXwRxU",
  "key14": "5rDiKL75UJk9fHC2Q4r1kcEacvbNuZ4bLoriBvgbeME9wFuJA1wJ4hbZBzU6gfs87jV4UAj9n5HuBE7yFGkGMHvu",
  "key15": "3oVGPTAzat7aXWGR7FCuMaLqNK882USCj51dUcvZvqbQRN1XDGuEHkM1tJ4HdhrFSGntpD5D5EiA9KK51bKqXm1q",
  "key16": "5hwB599dYqywuFoVXKDbibgWMr2yk5f4pG1Rmm1k8RZ2hZDBfxKqQS82AZwFDHVzquwjKzEGzFQvkuRz9EejPnNB",
  "key17": "4KHyHQSmzfhJ9LUex5miFbAjHiMXbFQPCyTghuvpK2GC4GMov5DZNp4X57vnbzvi7iEiMY7ouVa5ie76sp2DV7vY",
  "key18": "4dmB38PQM3N4qytWKG9MxDPTWMvYzpPVbPsdUMqevGUZecamvxa8SSdB8eNWfgqLez64TF7HS7tqsr2wayVaE9rz",
  "key19": "2KUdkVwjWmWYKhDAdC69C8A571tBGJ547efp6LWyVNheCNkRFDkq3T691xKE2aQH8tcKdqndi1qDfceAkhh1DBi4",
  "key20": "avdK7vCTWFKN9axBmoKLiEAjUxWj8NYqTdqLYKv8xyLd6wvLSZXFeUweESG3BqyUeBAt5p7PsV6t3teYEmEmNgA",
  "key21": "3zPQRW4GHWyCHm43UunAGLsxt8q1MzfG6JdixE3RsiD4Hq995VnHHXnTqSHV9gdd3FDkEYiMAD9UeC8Ezqd6tmZf",
  "key22": "5vRbf6Ve6zG5GiRJnyJwSMN45dm3rkRgAEhNspFipcSG1SwJwtNCrpHWzSeRyi9Gz89ywbwt4v5arpPzNpiQwkxZ",
  "key23": "RXUKSu3qjgciuaua9ewqMFeif6uiocGny4yFFJZU6HsWXuLiMwGUWubb53Bab2zG3y7qpfJdU7FtBgxjVFEfZwu",
  "key24": "5D8utWwncJoNZWgBrbPgBw6eF14i2T8HbxSrSLHxjCJMCL4Psk8oWRrLFJh34PeUqPmQtyRMq4r5Rghqv4GWJFFo",
  "key25": "4GMs2nHWycZEj3cRXh7HbRtKHL1bFcosbamsnAzzwKkNdnzds2SCnBuUw9CFGT7GFU3Yqo4GeRTho4X3noNdPoGj",
  "key26": "3ArQkPx3pHAZDHGwBtiNzVeBgmZSKtbQ3DM6VrgMqpA25LNksGkSpcq86XeGYJ2jGbt2LT7otyc6dWoeBfdsusge",
  "key27": "5K5XvEPHtRbaqe81XadEMWJefKVG8x6UPGXVfpF3xL7XX3s9QWTPy2ER3FHgnpfsScjpxjEtxHkT4e313LjkCgR7",
  "key28": "gMTrK4KhVNTkZbnyUvQ27JjoaTNqjZgs3MUiRRMwgZNvkxCE6UciHBAHJbu3n3A1F8EBKHVwxqfhfZq1YXkGUGD",
  "key29": "5JkLsmfRHZ6gYb3fmLxXTShYSqziQFhbvSkSiPzKruTDb91J5PfTFSfdFCDcSxkTKyqBphhSZ1aiSSfLkjqF3wyx",
  "key30": "4yvrK2yM7CEsRYBQix8EYwi14yQnNUg8PCLeHnJy9wNQmZMuYHWeKAZaTryAFiwPpbJZZZSRtDjwSHH1kgF9kyQM",
  "key31": "V8BP7ognsLQGE2uuQUX4Kyoi7vBtwRauZtXpTaZf5Z4urvGQAGmchwzssSUjAfV7cauGSUBnUjZhxW5eLc1WsEn",
  "key32": "5Pm675g4FnLEBDypLx7pa4JSWTJnU8Tf1EdHhPeUyCNnpLnT1UXxqVcTZcLLub9d9AUopp92JCQVNqxbotfzF7tw"
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
