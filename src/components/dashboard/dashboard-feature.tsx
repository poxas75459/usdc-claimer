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
    "hKLTfNeW41JCamemQSDswiRTRr2Jt67mn1eyEwUwpcm9v7abPxPvpRMPac4hH62DY5jVW3qj5pMLLU1X8fL8cjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiNmvJt2npoMxKEzmdL1AsdEpHCo4pHFvUcryjvEFvUevjgsa6xpJb9sbTLQTRdAULq2r5UqZEDo4ehr6aphnt4",
  "key1": "FDtWFjC2JpWapgkU5ZHUw8gQLF2S5yp8knsFavtVGTEaGdhEycwVYhiRqgSF8AwDK1Yfh5LUsmroYdE3TwhWWQ5",
  "key2": "3PDyTmncKe8DeDYVoEMUP3bzbRo7EkuziwZqzTocJFA7ZNbhBcxc6saSsMbutUg1Vd8VYyAmGyPeqrMAnupffcoD",
  "key3": "2me9KdT72tsPSLPGPKKQsLmdgGXCQ3SCB4fqcA7J8wgh117PkxqyUNZDTcjbw6UrvpfEN6f3AmaCZh3hCVr44R4r",
  "key4": "2DBovTQZM1tRqvoZFYhqbq5dy1EBY8NMVPkKCQZFZLAguh2E7DiygLric79j48P3gKAmNszFCrL3MRqTduf76H4L",
  "key5": "5jRQ6avx7bjtSsgyPDX2hNmEThQDei7AYiAvPzu5ud4tDb7zwWgHDcQAsQcS7QScfDeks4ysNrKXhxUHsJonUZy6",
  "key6": "4aCmhFjxgfsAAZE3k3DEzZB9HNMheXhnbJCesEA5k8vJSUFLhU6ftmL1ysNhmdSRY9ED7ZQpxzZsdpB6GAzUTie8",
  "key7": "5bN1za1nKjbpx7opAYiWVhRNfogSCujJfjZfEcqVXsk1HeZopdeKagWiPbcVT3eNSzxPXDvpyGZd5a3mLjFLqCPy",
  "key8": "33rdmvo5dRHLKPCgjnN5LVef1ZZGgk6t1taGwDg3yw48XWxDu9GdX6CJixjZWqXNvcEBrgmkgi5XPK5dkqzxYoqV",
  "key9": "5fiwxrpxcByWGNodPkosuhNVg4vKYzuSGxhhRMGvi2JZkGAReDchZHyMr68BhEdxnKHSdYVh5nFNMh2BtFto7UyR",
  "key10": "2W5xP5n7JzwGNPEJ7KLAtN3piCDBgku2nWxvL9MBj1WJzRXYQEokX12MsFEU6xPP6xhaiHqFbfkEJn3yTmMyvPct",
  "key11": "3SfPwWFSV7eKWbb2He8b1S7A1pjjDxxqpNEwUw1hWe4YyZMbwUmY2ovwbD1yocNoL9fUsmNuh8P7qQsU12qGTVB5",
  "key12": "8dNAwcrxdMZoGD9huuosXcyuuw7nMZUigjSzMo3oWnJpp4K1zb6qTMEX5FvQzkfFdHCSKdzhKKRuiEKj2nRUZAK",
  "key13": "2DeH4wc4RQqFtWJAPF21UBdLvkonfttXcyTu6j9FskdgwKTGnaAZRyXd7AhRegFgXcfY9R5uNKH7WXXLg8NoWgue",
  "key14": "5yL5HRwBH6Yxd8MUJ1KGNs6Aiax6yLmPdbJj2gt18rdoCrA2kiDhXN847aCBfczFVgKXFsFfYzEG9rKCBrBx68qG",
  "key15": "2pfoP4XktegyedArgbk3au9R7jKHzqBqNuvE3oSa5AYrJepAMAC6eSJ8fqpHamqRSt8JreBjW5TQ7t8UVPaA82r1",
  "key16": "4Mse2KiiUxWRvWn821JbMCBtYqhxJrtuYZCfaidELrqX9wKcZCSaxnc21zCuwC2f7qKVzKJhXAiXhyxPjUWSQLre",
  "key17": "4guBSBdAwZcGRhEDTHeeVwVMcdnav391uGg22A6fGVCSEhWMzLrzM6m8ByCxPDG9p5nEDKiGPvAWXSkVk1WUDxWk",
  "key18": "5QoGH8wxBMm2iAoZDzqqQ1p9tJhkcg3RMFYTEHQkajxunsfhHJt5knSbDRY7whqFJRRVTMG3sDcBXM92dhN3wW5u",
  "key19": "2apuXuiWqTFDAXApqoop5yDPBGFHN2DuUBshPRfuCT2VbwDQyUWVmF46bdWkxtHLjFm98cw7kjjyuFXRXc2SwVza",
  "key20": "2w9CbXSzwVAfKhUweAhquWiD4uKUAw1daLux7a4piAgbRAe63T2nRdaSMcj5JqCJKAvNewzagLm6JpKy16pg1dbv",
  "key21": "3QGrebyL8Agi5bWsjXRBmf6fvv71MTEcji7VVYCBDKGsfa6YDCH24niAeHuR8HqrbQ5iU9scB1av9xyAuKGynoL1",
  "key22": "3YSNyL7vuSgmQTEvftkhq1ctQANoWEvNyW6jSGVXVx1ZXwNWWHtAcTADQ2pdjB5xoUYHNWmMMSDHdTxLGCc95Fse",
  "key23": "Dc7PG6JKx5fxpfBjXGC6rtUYLx7cSJ3bGydGDBiyKXZnvtCMTHLP4ZX4XtzYoa7aE6HPKF8rETGcD2LtbcJDfx5",
  "key24": "4uFsksF4HrdrKvXpqxrxbaCTrFCDL19qVwhXJUdxms9K1xhyfxfKu8u4pALz98MHZf5ohL9SP7JCSRZa3nkVMffM",
  "key25": "AAQzG6yb9jAQa4thQkTj6u6JPAVFcNf24YezYfyfQhYSAeTtJHGTr7Yt6b3KcVMkAGpSiBAAZ7xAaw7PQEmMvub",
  "key26": "2mCgDGBPR8mMqZJ8JDNFykR48QhvTKmeYyDBnAjaWzMub57Vyx2Tb5w9SDSFBPpMH8z6VXUX9aiVBde8KdKB8Aiy",
  "key27": "32tPsenJn7vjP9PrA2fEqwt9V1fghHPUpLQKj8ZicXfHEw174LVeh2M4g5u6i17Uv7vAv37DPrZe2hqMaDQkmkgg",
  "key28": "3mwzbyX5bqYQ2bNJCRZGFvN4pMoJGTPtK2QtQkYn3AUpQBnRNfVBVHjEb8XKSLhoYUqiHirVu9jjc8crAkFfyGst",
  "key29": "4ULbuzrWEkKW9uKJqhFZtdU7fjjsQveNAn1ZagQKNDevU6YeLbV355t9PNv74kEZ76WfJiJ4wbswT5d3KAcTfV4t",
  "key30": "3Nh24X7MyBLgoXmo3tqMGHrsVzZ9bdaTpPGcMtCoBD4pzhWZgVsoV6iorWp42n47tgv1hL2rULwYJGs6KQECt4Ac",
  "key31": "29VMixChcJiGJqDKiXAytP9sZDeXerpp3V7thJNhEY5qtjBs7hts1NsQLs8SLZMrfVxQFTptFp1HMFMS1gfh54J1",
  "key32": "2XXRTkJCG2Few9CTjzny6b66eur83AWDMGQrnFKZUy8XK55VJayp7bhFiiVFBGbrW5EbEztPEBQ2iApQfccUjwis"
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
