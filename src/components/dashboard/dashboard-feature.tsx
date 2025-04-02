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
    "5UyqUnfWo2PY9EMoqkZWffqpbdn1uYgJUHjMN23rbk1M7A4Nqk6sq7FDp1T2ULSvo3wo8DPLpX8xQUgk6oXdnSH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Lorkq6WEHUz2tKni9ATfMQUHowYr67p4vHVsa8ushZABGwqHGQfRhbkyvLAaFccrD5LqPCt2cDyAfcc13Fce56",
  "key1": "4tLKkdEj6sdTmjqRHCcqKgdyrCVX2zRaSnLwp5VZ5LrKcdTk2gyZCXdXTWRZ1AaCNjFQLX9W2zKtcFGjsrKoq6iW",
  "key2": "TWf8CMb4ixaZjZBnTH3yt6qr2Y9uis1NCfqnG9mJt1b6TVn6N3CJqmzE9DL2qqqV2HDAFy33o6B8HxMRJzK1XsT",
  "key3": "5hYjR3fJTS2Esix9XawrZj6P1yPbC1h3x2NyUwTe9N2HHKWEjaxnTf1V4BGJu6kRpucSuSNyqVeAEVQnz6spTq24",
  "key4": "kj7rJYZERXSm2TMVfZiSyES8zhzeGm3EQUpS242BxYkUJpJ9PWgBHwoHtdNFkpnAL8B388cqj3xsnJ911kS4rh4",
  "key5": "4wRvi3fQuZpPFbtRdsf4F4TEg4dhsMQFbyJFeG71oX3uSDJjiczdnZfcL7BEPVtxiAy5Jie649Mw45fgsVBmqbs9",
  "key6": "AcxmpKofPAzXbeyYi7oNbBG9HTZTZ6XbXSeywRHRz4M7jmR5rr5W1gFRgxykN7HBvWgrQJSN6nNPBXsoiUbwAf2",
  "key7": "ugH14e5o3ju7SuPwzAnMhT3cAZwz7s1pHGpsxNtUB4WqAQzF4cXV9dThjkciEwR2tAsP2sVujt1ymHmiqAi9dMg",
  "key8": "35Qiozrun45Tvy6K6eWBp8XcDrGd8BAXZJbTxyXqZrniYieCaxLsm2HuFZ8rJCGRc2CAHPy6eSEnTgMc3q2E1vXy",
  "key9": "4bEJEnKnFqhqK7uSYW7bJZiCSRf4yJ5CPMLU65jz6A5M1fBKBDpSFT844i4cV6dZjPMxSCXTsrHEv9Xway73CLk9",
  "key10": "5tjvfJAedHdvyQnZsGn49hRW4Xq782m6g6JXTCYpBaEpgoRPfMiQ3nTTkE1peGzKMSiKV3eZgxv9u9S3goDTbm6U",
  "key11": "5uk5yw6aVtcPcs4UpeW2kBT632Rp1cw9nRCq6ReEBJVoby575eHFZ8oRQCdQb8vnGMhm2qhHqzsMVuGRr2J7rBvY",
  "key12": "eQYrBQFRJ7kDCbZyy5283r9krACyTsZTZGuVabtsUtjnhukbDtCiriETtGPCe3faJYjvnzQTrAaC3bD6q3i1LDv",
  "key13": "3CuKzEWnY5tQQFQ9YPaSDJgPDckMPUWHXHUntWtPdYRP6EpT9pnUdkRswqXTdfLH8P7qGHXrGU6zqG6XJCco8omH",
  "key14": "WQoSYE2mZjJgjVMe1Ew63QT5p3jM2yZMtihbLKaQwwgC6heFtYe6hhhCVwn3V6Xg4y4MhthYuuV2MPH528gypFg",
  "key15": "4TqWombtD2W8miS3AGJhhpzVdrER8s22z2cCvvcummV8WcTTxw4uuF638FeUmK6WCpUxbhssFi8MP8QYtvPZDpQ6",
  "key16": "51jnbAvM1iSGNwYYrg2Pf16TVNoYCd4nFsPGC7qDT1KPUjqQc4r83zGmdb7r7WEKhdwP4TJzCybmb5K6JJuREet8",
  "key17": "2BFwPMGAAwBwcnFKvrq5MY2zuk7ZJMtTki1fg2nfYD3P2jxCDs4bmFWB7zJvL6GUs2VXFjxAMBpGu4WmPTzfgQ7T",
  "key18": "2SH6V2deYFWAtZ893eM5SX3n2ue7BV1aKFf2HPaAzSVB7wcniBqppFHE1QmNiMYsndoZRjkpxZEf1k431cLm7GNF",
  "key19": "1jUHyQoxEvksDZQxiqmHa8AtnC9jxh37UXotH4avTWE13w6gtEN6FB1CjnG9eJkTbpUpfXpXcXi6STTsY3ykZkN",
  "key20": "uzJ4ZNPiNgCJWN1hYLgpWtX85mR4fysuEKcucD3rcWvDWiv3dDKn2kdtsM9WsWtorJTBibxB9RoDaQcQfAYczdT",
  "key21": "3HZtV5pKTjnsjwrqWy19UPtpQ2PMDSrfNQfWHzhBax49ib8GpEqsWtwvrEYFMARr3MMYzDa4Z9LJ7qgJKJPZWHQV",
  "key22": "5xCQVjeZ1MmM97qLnzdMniozm5CSN2QV9NXnBH64fNY9vnZaix1yVPzB8L9sNedsJe1SRBg5YhQV882ym7zhW1by",
  "key23": "3xv5uNqvsPMuWfUFrLMEuebnN6rFpMXNJYqDXv9XAQTrikzi94GxDoeqPywCAKsJ5Qqtzu9DWjyS2vSv94maS7j6",
  "key24": "cTX7FgbF7RoC4yuRC8sMZirtcJuvooyKySzA43pC2bAVMfWVHe4QDrQxrPaozsdnebrY3MXN6Dc8nJyuq7MQvvY",
  "key25": "28da9NVvcdFM9hdGYVmSGcdjNvmTxVn8rD8N5mHzF7N517owyXjvcMpsmYAypaqEBD893oQeyvbviaTLT8QgvcwP",
  "key26": "1yh5kjuTgu34AJqF1Hg5ryAz63ZTDu2A8P6fBz4NqTby8KgvKiA3ergMt3Psmtq2gxEmk5U7EV451eUZ9JCFwAZ"
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
