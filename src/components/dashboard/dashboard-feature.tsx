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
    "jvZuP9wE4WtGSPZL4HEHaicRXdRunQpxz7V9MwL8x2s7htnqWyGWMVkeyiCfQU3fbyFURPPsCJ63RCAfcem1omj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyDgDgBHGfgagj1N7VEWBAoDS3sBjfqoMFE3jfWCSBmm946U4cCyUdvNYqv12PQpP3ytYTAEGQbUjw81zUZXzYJ",
  "key1": "3TNfRL5t7h2eiXEdNVu6tZHu3JUzT3bG1Ae5sm7f8RFUngqS4rhxHjs8WDQUU4jLmnuWoCUpH3yon6jKMsPdr6uV",
  "key2": "4CvBKKKxC8vapks8b1zCoQ7ks4v7HJ3hMLsqcb5Uz7McwiN9NYyRpK8LVWc8gMSunhb4R9An46w2i6qLp4q1xjgQ",
  "key3": "Tw4VLsNG166XxKPuNLmsZWJ9e9RfuQgDQEWTLgV3sch9huMEGrgSgNgx3urYVpa4kpoFfo9QYCGxRJiN1fgBt1P",
  "key4": "5WcjSK3vKhXnE5i7hKzVsCFCAHLLM7zJeHozHGBvukdokMFREs1UKm1T4N9QQFs5iU4KgykyTru2vTLfn5oUmXre",
  "key5": "5Ne19ka399RWHRkHnDPm5Vj56YnWZYLRK6wX7n2P7BhhVkEWJFrpEaWwNyoBmbN12n5zbtCM7sohGTo4Pd2iBiL9",
  "key6": "2qaRrTfjoz1VHuYyhUQqURezYF44sx7Ga8CGt4rmchfT8GLjeidmdXgARavnTm7NeHyBUNZ3NAJ9XbFFFGzfirbw",
  "key7": "2ZScrjjw6jaNS1KFGoPPKDu2aUuFJ6894SHCw5aUPiSKWNDDADiwQYdud6KRdHezsNp3YPkVr1tEtMms46XwdkBC",
  "key8": "5veima3piqJmcdSY5v4kkhVm7G2SP52579okCzwgojwbr4MHAVPsTxtvJse7H5zfdpXkv8y4oxJuLFuW1Rckgc9S",
  "key9": "4utkfXdQ4AvHSvDgWcJCPGuqxoS7Vf71NLHeg35QAK5Yz2tuSGHTRFKtcmP8cyF1EN8SDYP5v59MbTgV6nsQYCjj",
  "key10": "2kcRaC4XzQBbjRr6TEyeSdFbpeUu5adBPfDoqzLc7hD1rdh6jesR3JxAUHurMwGszUYo11o32EfT2gVV2JPZ5QCF",
  "key11": "3VyLEc4SrZ7RhZUdYxSN29QHdnpbZKjCFXaLX3Zko5ZirhXbm8WkzHMPeD5nspw6HhhhAm9b21GsT2Pv95hSHo5E",
  "key12": "5zqJi7zbzu4Coqe7fGfCVYqxVgnGE2fbfNTVvR5TxH8cdvx8LFhcTbw4A35j6i3Sgvy5xP2fKHVB348bejjTw8di",
  "key13": "5EbL86ALQjeDCh8BfErcZynq74ShKz1RFrX17MKvFjStoUKFadbjiJV4R2GhKFHppmVUue63bk8WRGYJ3btVPXMt",
  "key14": "557zvzoQDvn9aFZ6gucBAadbUuvxA7dBoLqh18DBtGY9ZvsAbGy1LmTpZK8vyCon4DohNQiCmaEkVKWyjKVQGrSu",
  "key15": "5AaQYHG8sGLr53Y7ssFGwdfbnmYv8Z9qib9fsR8RHsHgWw376xyKiKTQo5kdTHmeJ4FBL6pVC9sDiVF6E7kmPJw2",
  "key16": "56vU6bjsD7DEdLhnbRBffcHiFMeeUw8796QiQA5dVSTcbRdALJcFvcngtrBsKLodLpdRvYWrBCKUpKHQyEDMiciN",
  "key17": "2kDaxvRAmvC65WUUTJ7Fiv5dhyWBqU6a7SgRhnUmmsPQ9x1rxtUg6ppTHzgCfCveZzoWneQzszGAt6GQ66bPgLAL",
  "key18": "5Wh1E9hvJMWdepQdkJjxwTaBowkZ7EBhMzfKgZ33ybdUTv2LRPCXrSSBYXYj4Be2jENPJeY3qqpnUys2kZoJL3tC",
  "key19": "4dmnwRRXbr4f6KBnZ9omzu9W4NMZw1jgXL2Gciv7FwnsjJDN1cGWaJmWr7tKNzKVXnYArJssitfoZ2STrF5U5Mcm",
  "key20": "463Svj78NkGQHqTvbQtFX9PgU1HMXXgxzXkMwUqp4ec9cweHkPgKv4ZbjnGQtdxegMcXjruMvmYgxqhXGRD6V5gi",
  "key21": "4FwTXj8cdy8NgZ6zHjHjohQQKkBnTtJ6ZJyr3PW4qdCLWwcRuZpmERHQpVAUg7uS5dVcKYDR3sW55ddyL2zQh3w8",
  "key22": "2Go898bBvpBsd3Vwd5jcUm5reEaz8JQRSgbY5TskWb82RZg89TUGdHMRwbUSvN6u6ncQtjJA9X7NQ438yEqfgiKJ",
  "key23": "49dCf37EJ3Q1gtHupUyCsmYBGScqBRCoNT3RUX6wYydxuFna9tTkhnk7vZZcdPVEXDia4gBTbaJqKMsvU9RqTBSE",
  "key24": "4ofHVKmFZD1iD6sn2NhouxfeR2qxsc2927fkSRPCgtxtyRTnaxdJrw11Q51SACLYauSCPvTMPrZbWKnj2DbVLbk1",
  "key25": "5qngb79RRUo91M9H8XDWfjDCeFBCNcU16pEszbosWXJ2P8Uok6czgEcyGKHhPZ92g2sb7raDJoBAWQU3jjxKD9Up",
  "key26": "5C8Na8U9AQVHtPfvKDLSUuPfQsx8FmxKgupwkHTijKfqwcVhGY7RW1e9Kdcjks8SM4aak8TttMpJkCHeXuotBjet",
  "key27": "66k9or1cC8mvyRcBz4qAPg8GWHuN3K5n78hovoPA9ZnRfHK8Hypgomq8gSoJaU7xcZDf1sx2j6LgzAna5A4Q9kqY"
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
