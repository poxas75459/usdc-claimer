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
    "2eJrgYuHgFBLnDWntDd6ND9ttP6cFAuKEZs2EZPDNdqieAaW7ZnmhmzGjvV6CxbkGnLEZvGWqknc9wa9hVv7dHtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTfehhBPKyb2uMw5bVbsirNwKgfW1stzVzi7jq4DZ1gtz8C7wKg1AWMthDVELyJTqHdB2TBCAVLk58z4EzmRq6Q",
  "key1": "4JN3vCxQVYAfhhaCQ1en1iALaYDCBVy4P9pJX3ELzSa2SHFuMen3ik2yAVbxNaGxp8P99Guhp7cPdL66Z1KhfYNm",
  "key2": "2caVG6Ru4HioUwwzFaRCQYXrBcwahfM5Bmq4Zne4toAuCc9qstSpBMvFo81EsMyZ9PEAg7afsX4Ba3MsyxaBgr55",
  "key3": "2HXjz5VzD6mBnpRhztrjfsSQDBvoHQEvNWNvfMpuUStVuFKnKFL9qRpMWk4GmBLiDSCvzGC3CgkqoywzuVJTuxVB",
  "key4": "3ewXa5Zn6Gjev51pxJZDGVjFDEi1qfeRDzhStCGb1R7yNv6Hx7Lt8SzLtsvKu7xvXZ9yjGKErUL8frT5EgWCtUNC",
  "key5": "3L2UBNWFQjS1acRKqs7s9uL1wMKqhqW3rxaztK9fUUuu7TA8o9mrKFktEjdzRLqUEsjjwGixdmyA6M8VamLqXjJL",
  "key6": "5qXGQmLLPEywEWJm5Bdfmrq7coZu6BREyAdtwoKGn84EYpgPLNYM9M3SeVLcQfQ5GZXNyDXWsHtFZXmjRxsTTe22",
  "key7": "3U7QUmPhgzoFKyRNKRMp9NFyVGjiinVScb9wYRa2uq7URPxZ62uGxKhudZzPRSGc4g1Ygc296jfW5iVYJMeUoAoV",
  "key8": "4TCSBd5eQVsoeaKkgT3qM9ycZNBEmv8PRZnnZzTfpgyvJvP1gPGQPiqMxzocDbVAyN4SgabG9E3iMLkozAWwGjKz",
  "key9": "5BjfX6DZPrmLB55HoNDAmYQAwWKBV5e9pARPHjsYNzKTtchYxTCe11bSpWz56HpTmAEwGinw2umKKWRo4q7MqUJq",
  "key10": "4rkLfKqaMXwD7HumRGsURgyCmorPCRFFNnB5SfuNHwA2xA4ykneLsAKqTjJS79V917U18YtPjufVzpRwtat97cJF",
  "key11": "WNK9M1zNVG8SxbK1e2NyLSwazhj6DSfdgdiCB3yV8UHJQ5hYP4cdh5xyvdmyRWxQ3Hxptb3NJkLHd7Gg9cFg4W3",
  "key12": "5MAtyMKFxppzDdY7B9DCyfvcrWgaV4zFm27k26ZstYTrhQEz8SkfZm5kpfJxCsa1sBZPUtw5eTBrkYwUzjrBdm2N",
  "key13": "5EPXhTvxfB51cv3g99j2HgVMBejo9dYWyS9sdXYXWrTxVGLfHcjqrjJXNPCMgfy2nGvjhEZSmvSqc9yP7Zao6u4h",
  "key14": "fJceAkSVFHk2QxLHh2cBuRY2LN37VXfJa4fMAnDTA8kuobY1WSvnUCaP2HJWNfZJoYeqRQCnLFz18mWuMb9vSMH",
  "key15": "2ijN5a4ftPjRp3ci5cL5F9tDjZSQHFGLDH7G2YTTJMjESr6xL6HUrGJRvkFvCHVrmLqAZkjtWqE8NAjiCnoqTWsE",
  "key16": "2FmcpWcEBZBKVUVFws4vZfLVTTpWFk2szCxyNWcpu38suoYP7tudngeyLkJjcJnqDJEbPdUXJ8SUuRdK6WrbXBhF",
  "key17": "2UrqZeaKPRpVoYfvxUoB2kTHPW76MM5BNRV5wrEEVu5Y7DZ1PHnHoWpX9QYnEkSbBh7a5hybzSzv83RAab7Enaue",
  "key18": "5dVs4he1ebQ9wZjnP6EKaHGFN4KxMU1t7oWDy1NM5S6kYTqfiVPxy2PjqHM5TXsM8z452GidFu26eyJRJsh9M3NN",
  "key19": "4GeHdPbFSaX2ihwFsrc34dZJw3LNqXdM8AVp74HubUoJivj5UeNFDErw5TXuSZBokHWZe7T4UrL5u9aSHzYoywPc",
  "key20": "5VR2G7JP3LW9tqiXYK8sog1nwnXQjsiePF4XJXYe67xaoGjxn37RrmNuYYXxenemYVcTikaVUEXawVNoSF4HCDra",
  "key21": "3S94fsAyXU2oZ3zyK6wev2ZNwAXTNL7vQnXSTLhvrNAASM7MyLxvL4uR2GJH3RyzmwzTBUk7AUcRcfS8NY1Rda3Q",
  "key22": "62d7meUdwrakX7QTgUCK9imhWypEdspuWD4i24z5tni8YL9H3szp1Jbx3oX4d2XfdnrSFhzYiC5EJDVUqXWMTJdi",
  "key23": "5gLZiPJYVP2Uq3AyNCxfLCkGy8Wn5QY68cMAgPPiQSAyEycTQomburA1SaCZpWqr3U49txuW6UovYPCLDpivT388",
  "key24": "4bMeK6y63oq8RTddjwnQVDLbcnmx4cYPg2E7DQ6SMdnzyzVARD326noJHXGZQ68EecpcAknfyyEtDgGrWcJ5LK7M"
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
