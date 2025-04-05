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
    "QHuVDnzwXmV1i1sH2kMJsuPUARXSAnoxnW2Kchyn7M7vLoF8DwoPfwSAhRLDwGcKKng7f3XjT91246V9TZ53rTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ARpfHCrzGHVRFLEFE1bXRvPz432cVYz45gNnkFLS8KjorbvA23ZszyJUXUDna7yGsAJryR3ut4TK9Ex7EkaF6N",
  "key1": "6277pdGPJVdcRSCgXHNJri7TiHzyWsK71HMH355UiHzgiGFCAxAMc9Ux4QUAiHzcknTLZtH3UXB3MrPKdwXxVGeN",
  "key2": "26mXXDHHJ3533vLYrgVvVhZ1mjjaNxygxRSHuppFbtAGGp8BGVPS3q8mzNC3syGrsUE3687udFGWJDNoAUHmrB7U",
  "key3": "3JYDCrthiUWSp8ZxASeLYWUcpC7iYXMggMsyEThgY9PbofKMGaZ8C5P1WPe1xkbadD7n5pDYm7XBbKQJGmHQxeVs",
  "key4": "4gSyzjRmXmNX4FFHmZLcK3Hz46YDiNZJDRgAJfE2BS4KontcjHReGBY1tTcvi8FuaE8g9oNtA2wYmL62EDjeLKBZ",
  "key5": "5rJZbCHpbUVoQbZPzcZtXMT7rFxyqfgeNET4gDs5SWptbLFUC8drhY1dZRaMjiE5eV6xtgSoAGLoGCFkE395pZoA",
  "key6": "X7V8xKhAF3EdbXd7uV4vXqeeYvDS5RheXg15yrMqJLn6cyjmLXiMSXDpyBJGWwLmtHrTCvEgLKZLAQQQS3h5P2J",
  "key7": "2Co15f9Myhk85TsYq2PdgXuME5KXQBeNPNdbh7jw4xXmQ779KKAqf8WyfwB1nexQNfD58KazRxiypJZ7WGhz29yX",
  "key8": "hmb18Yk3wzTeimSwL9ytfZetMb7TxYJ7zpr4YAQrM1ZtsjDy3Uway9we5Ggcr8g2Wsr7gzMmngmYTCfpDeStvPK",
  "key9": "2XYUKGdgzoW1QiMz3yeCFjwhAyhKnTWuWmgp7bwWPrcC286qN7iAHHhejcYfGycAi4astUaPsxCkN2JcoMQx1rpe",
  "key10": "3ZAS95F4btN2h4iGd251k99dAwgokN935Z7ReJqeXn5XiYpvGsWx2Ri41p8XMaFiaQYmjArZuJM2ybqHseWTYTmu",
  "key11": "3DbNyfMXqg2w7YSbLGuELaHLYKgbAEHb6bgM7eKVdEASWBgts6o3uiRdVd7w4QVr1PLP6XNsSBQCYc685nQ56jeh",
  "key12": "2haydb8izmiD2nWvKr321vSqp42xKLqSJUTL5UW9K12pisqk9eDbsQC7kweFnhRJHi9X4FvAAmwsMjmbN95zY95v",
  "key13": "5tWmkwv5JXbcbs7WzqekADdKqUeobCnzb1f6cEosseiryCk6bB5qr9bGZPWBQLd8MMtNqrnoNbp1AdGCLABxoitM",
  "key14": "2dRHnYjkxxy2h17LZoMJeyMr62DgY4mzezyQJGqRmbev7AnyjHPxLMF9VzT5KmT5C32MDdCuaFqQgXAbnTii4T6B",
  "key15": "4Ajbp7qs2Z3m8Pwc2piHPmbqAFNwJmKDfgwuGb43FD374rhKGgBy9besF6WcFTEFJ3EMF8PVgeA7Mx1dEERnsdFx",
  "key16": "5N8YAEPpSTjtoy2FNbTgMyM2kZMPsVpuXbRrAcFKTty11BQM2YXLc4VVJwhgj5ZJnDW61r9RmDsDNrQcHdgSAnYM",
  "key17": "55QuK8pePhZDzreuFSv53Vrq5jFEqREfV8HZWgc8tsSNHavXo6gPJS9ACZccGBGp3DrrLZ4xg8xWxwcKmjsfDoxy",
  "key18": "3Uj8o6Mo5y69mAVaUfFv35FGeEdY12ygtYU7CCRRGDmpqdPEpkfCq2dZzCALB9GGYtnvTM6BfMTNv4mLT1jChnpn",
  "key19": "629nXLTawTAbfxanuyjVkrVTrhQ3cttr2KteCVuV4py5MhRwNZWGDcSdG4ALV5bMCn3NBa7HVeUYFgtJP9mNLa6S",
  "key20": "3fLPNZWYfhqGNkSioFfaVkWGK47hKfqeqrqcMMvdojLwYwdnGco9VA7GSXJxRwh2a5s6zUWSyHDa3oCCDrs42abm",
  "key21": "5a46mypA4uuDZb5xD5LKgPmaSBqufPZ1CFVe6Q15gEtAVZhjty5DbZsPx5Q2wR9frD2VLdn11xie3EyRjWSGC3K1",
  "key22": "2JXpP88KHen6QuY7dhr18QDQ7edRxcTFrEDEqJ1Req981AJ9HvJSJG7drafb5yNxApP89GpGoHDruzdTg6SyLWwL",
  "key23": "5fPnjGUpEszwzpPcbqtjWcCdmJz8PwaGKhKCiupxJPXoyw3X25KtDDUhfWBLag3t5fZ1qg7koEbDotMHm9q925tj",
  "key24": "4kfQZ41hxmY5TRTf7Tqjhgji2sy8CYkHMYMBwZVuPxJ91kSdAcRMtouG7VrJeuHTVbmwJnKPjQfC3bD6okywuHfj",
  "key25": "32WaKVAWWx4amoxTJ4zJ6fZAqDCqc6qZLeYHxCMEmr1stDw6gbVFAbxVW89ToZpjZp2nttE5EnPWBz9GLBTuqhLL",
  "key26": "5nDKzTMjR71Cj68ZAXergvNC8bQ7rdqifUC1ts1bu6DQKdtBatVJrwHzeuz3vCJgNP51XPNDomtrumpApAGQePtt",
  "key27": "2oSfSiuZq9c9yW8E678heT8RgM1NmUceDMfLNqYYVNCDqwox4LN2o7Xgn3q5kFguo3jU5LvvdrajyD96P3duEGhx",
  "key28": "481ZKN2mzHKYfKCguzpCpSwLcq3yjZkj3LJmVJz3doTrfvWt3nizpXTQSWrfDsCEWddR8StjnQgDNKffqCZyP3a",
  "key29": "5eTaiTNXaTZsEip6FVUi5qGhxj4NzutRUL2owuuStRcS6D34ZgfHsj49dvUUwYkQy8Q22WW3YdSACzqzuYzoAKuh"
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
