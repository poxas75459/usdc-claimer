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
    "4HNiU6fVr521Mc3GgHj5LhJ7Cin284i76u24u2hnUeHvvs4dhhbxYorMJ9uLhmtxURGpvH2uBwVAbSLsRZZ5F67d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ysw46MkRiEr9wQWFjBa77KdkfMN97CgF9b5Tar2bkkAsnWQEPAfHZN3e4jWF5FRP62SBon5xyXduZ81o3EqTAU",
  "key1": "2dvsWGQEfRXpkcJ514xi8n1SYnkJHzseXSjH1Zsg4r7jfkhu8kLUeMEkyHPsfhW44WqmEFph1TSRxbEgBZK9BY3a",
  "key2": "2CiVh3Qd8iBoruWE8HmSykJHetHo5jGzfeJp64zdXYiUBGptMRrLN9pCMJcgX7euZEXCw3JVnsGdjYCTnazdG2no",
  "key3": "5MtPvPkwgqXCrjznLmbSPiJyL2PBQmgvmNcqG6vxp4r4No1R1bsY5Tf76hYYfE6b4krLKFs3uL1gcGCeJHQe53ph",
  "key4": "5BJqdA91HEZ8cHsDP9yoCCZyowTNiyJCXJw8q4axzM27wWrnawVCstb2c3oA2hX9M8WVBUVzhT1XYu15qm7w3p1c",
  "key5": "mYfqyNLEtHvVs6xFTb8PxtgkEouXwJE9z7uUnkSrtgz18AYLCKxwTPxaEtkbi8P5sR5gHc5R1ueKncvQxiakiLN",
  "key6": "2Rh2qGPC4tKEr413SvkjMb4uZbVtyXB6gp498GmhdGSReRToCm8dwrkYdVNoXXD1nJjHSH1UXGG63vCLginHQaJR",
  "key7": "47SeJ8TaeBubg1QarWU7znpXG7SAMtaj3RyXvdeYLvq3bA5usHrTDHVUHqPF8hFNsr1u3CZQHgAAcDJ6ifmPctHj",
  "key8": "4B1KNQvHNZ6jrNXmNkJFLfuc6p74MfxYZmdJi3yTeKKwGHiGK6Wv9RmqtcS8Yc2So3q4Fh3n4PmLZQ2tuS2qQaoe",
  "key9": "4f9RZaJEAdVvWGnFLp5ywz2p5iEveq7YUBb5nd84uE7F19DZYKHL8hyVzMJNbpUixD1JjN59WU7wJjFsB8zDFr71",
  "key10": "QHHC3ywH5AL3d6Ld2XjbSHiEK8duRWDGEjF5wSxuSmR7HecAwvDJXqksTsxGHsNvx7UNWYFebkn8XuXaqM6Xnp2",
  "key11": "38eSwL8rLLY9YhGtb6WDc2KXpjjofPHypyf7g3EvL4bh3x8nMwnB9tzgxcSALwNim3s1JtuqXCmmi1AiKVNRK2Ei",
  "key12": "52J6foH1WnrP5M9FtU4KpxsgSEjLqQDgQJLBZsCDBncDJKkCQssY4hrQphPRPgy6EvsGN8Q7eGcCSrBr2bFpzwmu",
  "key13": "5GDYU1fGiWEEmFCbgummZe6FCdtwKJDb7yvAhTYdJFixJbAH4kbd41zinUkpZKpJm2anwt1ppbs75T35EGeVnKNd",
  "key14": "2wbeDXspsXsXdUCyUQvXXcB4g3nXkj38bYWH1szZQ7vi6JDZ7sbEW9dZ5upvRK6HDisbvj1jtTeadvySCYYb3VQb",
  "key15": "2RZCATrqSWR4izYxSHZVfXQbnMaJnbUr84UEC6TtoLMsdZnA5Fhr544NhcdMiH57Lk4swnfB4uUvZ9ULidd6YyoU",
  "key16": "4oYLZJpnPFYyreqQBRUvkNB1RM99FHeuWNtBSWDVf1RQgkHvZ7KwPbkmfe92TaUYXTn7MyteXVSD3hhVnjNcUAhm",
  "key17": "4jvBTe2QWtqBwHkHebuFoXmyBmKpC5UymseEbhECKNdu5jEn6svgEVcMDq6CXKmvYweSPv5cTDHovL2wCmvNpWHS",
  "key18": "2wc8bJMp4wYw5vk1x5ta8yqa4xsjmKgMHW3AEvKP5n3y1yKhQb4bTVrrUtt2jNpUPGd9PHyQorFJB64u4XuTHnHM",
  "key19": "3zdtgPH5dzCHNCfohyK81KzLZsFmmnk1imKyi4Qcv2CrAAaUFLceHU88UdUM2safPbLNJrMiVmgjrFLZmL9iZ8Rd",
  "key20": "4CBcAXST7Tw7sFf5yvPouH1By1zCAUhXaF6Sa6MiUF2hR26hovLWNiSDsSMFy3NQ7oVvR3DkrW3YCGpb7j4nfVGv",
  "key21": "5oNkEJLAktkHWS3SaK5bBufNDXBaNPSwf92PyCHWYNZiBt4rbFEpmmKChUEg4hzGVWv6ZGjU9GY3yDAso9YptRuH",
  "key22": "3rKXETZWy1yduf3gzoRL5VYXrV7Ybm3NmRE6Y8AcGtCiYNvD78yFPbcRQs7gC4p95KTAGsu6NrbGB14UqrhaT7Li",
  "key23": "2AjpSzXNSd9bZDHfFYJ7UCZMYUZvqMfsZx2d41jDnGKtXEmPpd6W6Qt9nbAqDgwnycmfcibvvhEoUS4rNrPAVTDQ",
  "key24": "22RsRmuJKBodby8Kq8yb86ijx1BsoEEwxknzmE4NRq9zatVWCEo3i1nEMy781SdszBQHvX2Zum4XrNuMKRAd45Wk",
  "key25": "32WKXxj9UdHz3Ln3xApbjfUUxQAXze3TLpk7y1K3x33SPz7bkP89TgkAGZpoYyvHF4inGaZcb5QCGV7khfPbKmzT"
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
