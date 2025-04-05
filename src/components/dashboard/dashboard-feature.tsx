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
    "3At8pdzLc62w1W37PktMBTQrj217yiabqkZobZmpbpGt4cZRBdw9VCjttNEJnAijcWmNmtQjhBip3JcB16HX2cfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "344WcpoK3NyYSF4ayYewmcdttQpnjihboGfAbQEpY3XeEWUTjvmVKuvfjv96d8BW8QQZV14CySVX6EXazPGT6Tam",
  "key1": "3xafwkbP641v9rEYeXe91fGot5Ywqkd8yHXJ6W3T6bmtR39p8Qhrqz2FcZmWpEK7eJiZ22Z84qN12LTwafdPdfTo",
  "key2": "49jMZphLC6SK4aERUWtKcaDgLjHzeEfQ36zRR6T14EKFUcEwcpMjiiEb2etKV8x4BfQwLWMEqn6QmLjyH9viMwE7",
  "key3": "2TfKHgVSZvSFoGmdzuuNgfcLUT2jTojM8Z6Bdo8jzDVX4M7qYuSv86KVvvYc7iYaeWymZ3H5LNT7R9frYMH3VxG9",
  "key4": "5dZagqgNcHsFG62rsu45FndR3WEBBVDnhXMUV2PFkshbgjF9Z7Jk7kMu5yYTTPK2NQiKmsUQfqVdob8ghVDGFwge",
  "key5": "5FFZf4mjTZikANdqRqnYofw4FjSc6Cv6tZKUcDZWtzDic2e1xbJkVo8GCRjH4bkpGLQ1usY1G1xCGqUCxLcbjodx",
  "key6": "2kiwzs8uHcebb7G6k1i2NUHK2Qw1bYRCdNz1wDJoY5sWLUzdvE9fX5sX6VKUx7WK52kebTydNsMwnBgdZsL7GxZG",
  "key7": "CqK9m6rU8xwU5DhdhRPsJrNdvdrMpqR2pWBrhdE5YUfnV8epiLihwQo83YvkzxgS77umUZ9PWayQRUiya7kMzjk",
  "key8": "QtQ4ueGgsM7ijBr1tnEoDuBfyEH72n2SwT4JmaT9D1AJR6or9D2AzNcgd4NTEP7uQraLxFkFT6mrugiqSc35z99",
  "key9": "5D7EvSQy3Ja7ZTLC7Fpc2yeY78xJ1ZALtUMsaRbYTd5VCCrbXAVxa7SaHEcQDuj9SLSfVUEa4ppwb7NAtNwCiueP",
  "key10": "43eBXW8QDAXB7QBeCFQAq1c4iDqNfLDY1V81KHCVwzpPzbFVBFCLVedW7vjvdszQ4N1yyQ36oYF6mwQRMhoThEj9",
  "key11": "5R35UdqDUGXuftrFfJ847Q9P7ieFN2YtdUddzUXaFCyKiD5uKjC64FwFm7son1sC3SxGZUQymBcE2dTURS1AXofP",
  "key12": "2RZa4J69Zr1hhEgE9Y6q39apE5gm9GhbSXLXqVq7KEknbnzabq1ws32kRLtuHSbLPSoL9UagW9fjGwFnfbcKJt7Q",
  "key13": "47XxA7FoRoi5tQTJCFzVhLnUxgkgZXRAcrNDErQ6QUsYVfRALngEiN7Uino1MbMSHSdVMaYLcsYG31minWBkyFEM",
  "key14": "EENmKD6UtMpp5dFNWH9z9HBqRaud71Fx4B1Xfu6byNm2ScxbL1cZ1SshUvAUDCGW2RZUqsYPGQ9zvgnRRUStuH6",
  "key15": "5PxrMXfSCGir5bf2o5tEoQHA7mXyvtDwcams5DHhpQQR2wXrDktZVycCXAs7vncL71znRMYaujZ9UFs2nwdwYLyv",
  "key16": "5oJmZMBZsEZCmLzokr35HJ1dGRN3DnWoRa4UDnZTmq8yRBykRRGTDQZJGxtwmHbr162P617KD1i9xNicmpNcn7Di",
  "key17": "4C7x8DQK7sXxzBYhjqP47i7G1crc9fGUaFd4iULNmzMtoUvApazKsVTCupskqmWrLdXhn4SWNBZ6u7jTW5NsmsLB",
  "key18": "2yRgNi3vrihFHjh6vbB5XnJD1GgiuD1ZHcPmRK5TkhY4mDZijjZjbnDYZixTSRzRedb8EKGDwS2Bgrarp2gTrnnN",
  "key19": "3W4R2EiWBjCVS9xy5bBC4VDaDdTPXuL6fT2wNzjC1uzgK5xXJRzLwRjmX2XbgZsXWVX8CGYPHvx6pwJDkp7PEXBQ",
  "key20": "3Pe1CrbLbD29mojwEahDTmZVvtmTUsW6zDrjk43v4rAzQHxVtJdMQ53zP5sW8WRNBL6uotDg5Ai9xnSfuZ7g2NRj",
  "key21": "3324nHrbSKiotzd36wHP1H5UvbcNkdyYZtcHtnLWaXG5XkLncrVkiuSrVUxU3xJv8DNAfUtA6qQq4spUuyb79SDv",
  "key22": "5LHEo83eukmiGH7vb8es3nhE2KnpQvh4Cyw4Snnbr8pcAqBzpA2JgU51XQUCfrkfq7TxqxQG83DXeidVNysD8GxC",
  "key23": "45MNcwnVhAge1KefydLQEKvuRXTRtM9cH37TvQJqytVQpmw4uaBzr8vAs9J3m3ZUbJzdwbVgAWDgekNv3z1U7aD1",
  "key24": "4dLC6ZeD2qHYq5kDH5VF1kxMXMSxHHYAFuDx2J8DQWLk6z6W7oc7rWMnnZa5EVUFt1yFnY8vj29mQsUJJLNZ3vdq",
  "key25": "3YEziGeTqSTBWFVYWpyHNPqXtGu5CZPahEbSEZVfLV54BrdN6DCEp865aq8wHUEg44SqkgNCngXtybbGEJquGQxt",
  "key26": "33qEb1P8jtyMbryi2oQJbQH2kCRvDqL7ZKu9gWJWdNhyEtkKUzCmkxevh1EAnRnzjRPxRvnRzXwUMLtqHcVpHyfJ",
  "key27": "4xptP5RB9kTjScP5RkB97z7MHmmUiL9TPyyLYdP3rm96i2GY7HPRnwNEbiYxmfCgk5s5w9acj5EJuexSJsLatmP2",
  "key28": "y5mn1jDANMxPQufamSzPZy7CBHQQpFmjJzkEU4vhs9mxYz7eGDLdVi1sZUCeKUBJWFW9y3Sq19mL7M9SjHyjwEL",
  "key29": "5UEL1qKpSyBpce3yXjAFj1HiaARtrF27C1zjjsAs1SkxQF8MRvLWXxwrP9eK84QyBXLFhyj26E6Gom72Tu52uFBy"
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
