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
    "67YpKCm5qKJmPgNbR1Tf63Y8k3kmKpc51PsshfeAukSz8NmFeoZMhDpCt8Y9tW83T6E7mweo6yYxoB83UXFyBEZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLMfqTAmm3Gy4VFrcDQ4StWanb611cTjqHE2jKFVEa8snXotDhuvkfiNqFvmzjUcf6vnHgk8AaPHrDVvBZJMB6M",
  "key1": "3Dqj7ReCB8LB3yJMGoYXyRHbUX5SmPwKjT7BMFHmaHNrs92atDazReHv4KKYLWDgCeEQwESFswJNYgy3AN2ZSZim",
  "key2": "2SrreXNSMBzZC1m24RkUJoPfMz9hN4zHxWqV1z2HUPSKuj8wXocngcBWyCasbiWrtYDTB9sXH3FmA2YWLDs1yPBz",
  "key3": "5DtTWyBDYDkwnZeKgunhxWKQPn7iVuuNp1tZoNUEuatfbn3eg4ZTzS72BXyF4wXf5YbSoyAuKqraeQMAShGac2aS",
  "key4": "7ZKdi2NNK9q3yvvVdyvPK8nzGAsrKZ8SyNXxrjLPDaipWL3bBprhA2CbHirGP74ABoY4ic7YLxE1e5WT5qcnfVh",
  "key5": "2vumNEzfbnk6gVGT2due9QfsoQhRCzWPCYKGHowBZrsNPh7Bs22FHbGfiHzPqgeUraBarnR9KBuvMNiVXnKD7e88",
  "key6": "4nRtiQXyWTu5rKxnqr7eU6LBrfmVS3DUCPayjoG7nxoCjvV3fbjgB6EtxEGE7XysBDPhyZiUUfRfChrVPud5Daun",
  "key7": "25Yk4oSbMnofZiottrZvfHc8NWwcsEUg5n9ezfmUSvNk41XaNMnNpKZikQcg2A6LDtrX71Eze4BGKZTTfNQy2znE",
  "key8": "3oM4SvMPcR7S5M2VmMT7sBZyLBmyczYURHMyJZ8Di6pkZ2BPx1APvPAvbtnGJLvbp6sMxs1BWxP1yYeoWSrExKW9",
  "key9": "2agDe8bjarhHPU9AzX3GQ3FwzaQ1mG7sexRFswjk4oCt1CB3iQBS8d94rxTybmjDJw759zoQrfuqAxEWwS1pUcRA",
  "key10": "4L6gD8ewG6VxoFN3SnRQCM6gW8dw84NpLm9iTkmVQyTPfPBs24JxxfMYp3Fn4BvHP5UzZ3iMYH4NDgyMg4mgLwPK",
  "key11": "tsm3P81h7fqakwdf2pvdpSUwxAdkP6Aj1R4xYk6CmWprACGQzr48eek3r8R6Z93jW4ivCueFjdCCYouNZHWzyAn",
  "key12": "3XQpmEVqaZdLUAVAfRrQwTmd1emZCdu2NnjVm2dDY6NkCFMG4eXAXH4Yc3fns5b5n9kRKTNHpDwkWhHJnMWwgc3i",
  "key13": "3BbfzuWbu8ZRbWsg5ehrvW9b9rJm3fBF8AaJ5L1Yc4NgLWwXriFsriYVtbQQckSpjPSQHTxs2pVumQGfKp5BaEXZ",
  "key14": "2BagAvwHKp2so8L2j7Ao7bio8GS2Zyt4CN6xZLuVHsKfhoXx1bgLM7miHQZReEYQjtHARd8hS9wrav8RQRwYaanj",
  "key15": "4EzZhFDQfUui3JE9YQWjk82jLvhPER69N7HGMzgfS8YbNUmRrsEdSXztiaJqfT4MdFaqWeDrDxjqe2j9MSyLAuXc",
  "key16": "WTWaBvmGSWqrhMB9raNDLSSYi1ofPg41U8PTJQEWswTfJqNE1HWNjmRueXcyAertqzZV3T6mSzdNJLDsfVKZWxW",
  "key17": "5ryTBUZJSpPTNXqNK4XkAt4jJh9ozn5eNqDpsjZSz3TRSufPKqCE2VooY5erLoNznJLV3YsuseYz8VVoJ7cYCxjh",
  "key18": "5onY1XbQh3LuNEXLw6FU1SxUPJPjwoBSSPqpPAvg95GCYsGLbaxUM7VuqHnL8DyqTzxGqF6n92WfHg6iBbDXBEpS",
  "key19": "dJGvGhaV42DXfAXEmWvz1HrQbVrczC9fVDTgRQ9Jeof4GecUC1EKATyezQQYWGk2wRXGJwoP3axmJax4r75WWGz",
  "key20": "8Q3nQV8ghXMGHLKegNSXReJ2MgWi5MWBzRA1sGps1MyP9HJc917eRJjSbJGJS4WuhtxXHwabTrjGNJiPPVg4x5N",
  "key21": "2P14BjjBJhpaqnr56jZB1ey6KnRiLaQUpZwBV8HiaPX5DnpNP6yohcvQHd9JN3CTQboukq6AYMwqxSTudo97GsBn",
  "key22": "294QZaFxsvDTQDzxA1wUmsKFmkZAGMHh8maxx2JiR4rCy7pXhhUg6jHXtW431vSW9VKYdSt7uhWtApS3NHiX7kJh",
  "key23": "5H6ekRsfXrsfUFGpqkzQaXLquLLZXy4Umh1hADrQc3CgMkDGLWCMmyzenccxfzGjEhDqFbQ1bEZ1AamCKuipygsj",
  "key24": "61FBRVwwGohGqKwogovTD41cKJWjrVeCVamj5kLPbDHAhAd7udhNX3rjM8FgQrgdjX2ygHmagWe9g45J1JddK5VR",
  "key25": "5yhbeuTXcw3hW2Aqp1HSvd2AGvHJqYhWYxBNCXnxuCwcycRPvAZ8vTKwenHz9KpCMAerVMNF7oBYN2B5NaEv6YDz"
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
