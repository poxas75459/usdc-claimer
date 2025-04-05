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
    "5ezKf9JcJ2gpfpPsDjv1onLQPku4gcg4GU17pVd18jcbUdftWiMMfDjiYYrzRpMn9A8JixFJGUUazTQC36tDi87F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FquBStx756uAD4qvJAqnmak7bMaoDWfUmUzDgc19x9Xa565fxnTk3SJXn5Y68dfeyaEwN4rasXEZhRcmyvoTpiQ",
  "key1": "2qG4uwSrKsqG84vvvs43KvEs4QwJH5cgvsGDrHM61PWn53iXVpJXHpBGzk9Qaxgi3tywdFFdfAojYKBtsPK8uMpG",
  "key2": "5eMV6YJD1JiMTbbhAaHQkEGJymrBCtFzndYx9m9iB1JmbZPpSru5tyjx2MMQtNVgrT5MGCon4vBMDtiAryhoLGrU",
  "key3": "5aQ6iBEbEEgtmdwvGJ985tfCxcWM9EuVf55bvzsBzspJKkryLLPKEv3B2zCQ8SgifRNoaBM5dbDEgc892aiPGqnF",
  "key4": "2heWXGBZdvo4vfkG5SqqjGNFP1dGqCFoVG7gGTJs6yit5vKesgc8me5kfzttAYkcnngzBGbtZhgFL64pN9cAUET6",
  "key5": "5d9H3EKjbjGU5KZX49VB8kP2eNhHt4SU1kUycwZ5cokcVaqBPH6QEpJAh9uLpiEEKAYHthW83gR9cLH5g8vnWMVh",
  "key6": "2tSSCmcfsotLAFRY97pHo5CASviGuz9NJNBkEgWRrB2DkLchk3m8w98bMp6sCybhWiipQaRhMnCTWqqnwzxqPoNv",
  "key7": "2mZa75vnnpfogRoWeV8TjjCu9S81fsf8HXDjRE6nFGaDiGr86ykLR7HXr5iiLbhfNcqZpFuC7zkpAB4KcwxxFF63",
  "key8": "Y4HrjvuiX4tZGtDDpymXWCPc6EEehUV9jLveBuWucyG6fGnZ2kBPeXWFoBgBkFhKDyzsUYnALi7UpDjSQ8gX61o",
  "key9": "5DthkppmnBkvwQ353W1Rfg5Sr92ZPSgNZHiGiNGLUA4Y8V9ZGgoeowRZBuUSHXiJ2Wfzo8Ad8VGk5PGuKyTUypC1",
  "key10": "4v2PBHjHVQmqYH5pRVq7xyguSh7V9afvtdivDEUuJMrZRBi3c6Yn36S8pPSdeBNkQQqkJ1rX3S8Z3KCcomwB8Tbf",
  "key11": "9362hzoYq5NY95Mz2ZJTozvVcKKHQRb8k2kAa1fvpibC5hDpAMqnyUFFfVahwWHM17e8hNyBJm2FKLGJhC1wJo3",
  "key12": "3jSiK6GxHxsMPgwQ9XBqDmqpn9zHZDvuYyR1YUcqyqQBaNEvAKErv7z2mUsWxAyC2eNvAZReusM8NQqAwYreqekv",
  "key13": "664AcN5CLvJo59LfbvFA1z9kKRQxqri66zVeCeC9Jk6pjC3GQ9DkbS9G4KEKuTakw6PQWTycCEMhPFLUwyE9Mei4",
  "key14": "ZuX72kqMcDCDrZsbdTa8rFEdhu6wem9ihJjX4og2DfTQpL4LCUWrxtd2zaTA5t3S9HokdNmC2SwPwk12PhHNhUN",
  "key15": "5BAKCPKwZtU4EiiUyjBmhvmNp4UNKfB9496tbvDno8Lnjitexj6XpnqQLj569UBqtMFvWCsWyJrxkTsWW84qq3JS",
  "key16": "39qBZkS5janRMaCrCDgoCZKDMH5AJcHC2dunKWEDPALswbU7bUSuMT2xVv7J85yn4KkDD9whaA68BzruUpzMAJ3x",
  "key17": "Gzr5kqc787GbTnuLt5WiHusEqj8tdATdb3A8CKCTTkRp9jpYRbCw1qxf8yWXgTh1iEbg7q246hEBPzdfrFCYMNc",
  "key18": "38U4EmqpD4ABQJ2qJyQQqbaJJkW69UHRcykGfWdp8KDLVjhCE1ru3sBZRwyPJzjYQMjRuD41fz4w7XH79pAodAxk",
  "key19": "2twVdvv81TGbgPzL8yMJe2MELALtkbERqhsvW1vJnitMhqRFfNeYLguntyGFL5HsuotWQ9K6tNj78nHRDs2URVah",
  "key20": "435VhVAUTDS4y69mPCXXvXjpFryScDhfecZpbbJ7jStpK7afqbJMjiu181kaG4UtZPi7GHzZwVihcer5xMBvmnLu",
  "key21": "5M2SjxshSmPzCkc8fjjzhGThvVYdevbdx5yptXJ4fopc1dwv7HQzUfZCtNwtBuQ7vs2b4YGwmJSwimfTV4fqSRPV",
  "key22": "3E1HuUR85fQxHG2ym9d6SkMjJvjFDQEJS2v5cd6gDsZP9Nqa23CJM2PMdiUknv5e6u3gf9gYR55JJ6TEYcNSDsxb",
  "key23": "5nCGyjyQTU8MVYPeBQMdKBq559p4Q75FTF5PvKi4hdFZQrwKxLYgj2AffVEyUu2CqBwVSASCVppPqPciSssniJ4v",
  "key24": "TM6TWALPJTmxgbR1fGmjtzgTXCW3oH1DhR7ahN4FWc8vrTBurRM184vGKv1THAgADSLfx1PcjqK9UNzQuLZissX",
  "key25": "TCCdch4NBc1zrVUGfzV9ei3icRvbeh6ySXqE4ZzW68UzdtPbZwxhWdeUG1rtgN5pYVT8sTtkLSmAkWY2k4Ff7sY",
  "key26": "2Dt5mCtNZb8S7vhjYYUiWY8jsHgbrfKUMSm4kSGMLtPGoWtvdRykzLUuWXSzwuHzC9uXVfSoUuEfXfkdXQvDMszy",
  "key27": "2nNSTkU5cZk3T9sHD37Dv6rnW2aKrabMcnARCY9i4kd6Jj82rJfidDnCup2XH42wzZFWYMN8BpS7ociSiLUsdoAD",
  "key28": "7iBtCnCUcnGiUTZmsDidvcaF4AraqKomaTerK5ne4A3HsyFcLgjPqXXbSrRFNKvNvFAe7xCDX6ocSCPmHsT8BBr",
  "key29": "3N27NwssFsZvoNYChkaWuQUo7CX7pXf6Cx8Qepd46yu3wk8pu95MEsrtb6EFqCvyD7S2CrqTmPq1VpwGRycZRTfn",
  "key30": "4nKsNqEJtm1ddSz8Y37Sok6ZGDoqjXNyajF8xweha3ZbjpVPe9W8kfWCWwsTrjxshuZYSnX6uivBhriZc7rT8oKC",
  "key31": "4E4zoiCn5Udub3MXD5GqBaY4xQukio2oebDTjtCn1fM9TL9T1V3WXbsxF3zGjNuesbM6LcAP3EU3v49SzBTbxM7"
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
