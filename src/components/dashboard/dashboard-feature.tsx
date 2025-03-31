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
    "47tWUDftckCR2Uv5S6tDirqguQuro7uee7rATBA7qB5DzYnPrU7aUsESbB22zVn42FNCSYzqTF9gQWAGgVTCNJ5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVcQFGAnL5TWjmFKxcWdL6vwhifviaAVbG6yq1eKJ9X68fEpdGx1WXEisadTDoWHFxN6gZcvD4Lub8qUc3oTHty",
  "key1": "64cwUagnMQ6yhJGZ9PqRVi7NVWufZe92mLuuyBRFcWCVdi3VxVdeFRL4budiqhxHmu8xpy9HrwMgHC9ui8c3ctqP",
  "key2": "1MRTSnBgNqPWTVA9xxj4SDcsRV5bC39kb1q5UusqiZYMCGUJxQDGpmQb5jAAdpeTvyCxyszHCHGiAUkvWE16EYd",
  "key3": "5GQBtje3GohNJzWUVHYXbFoF3TTwbSjnmiTvmzk2q4i3Q6WBJf3wkycGQsJ4X1SkwWmh3zSY5YBhQnhe4pvuLzrr",
  "key4": "4aGM4Q27TiKeDhoSdf7PRnePvSfj4FHBcS4xQqnHcfKJVR73jXqCKdFCJgBmbtF1RqYeiZeD6QgNMNMznu1zobfr",
  "key5": "4WZy4Tz3kAoAgexTMwzM8FzqvRYTekgqkyUVdEeG9kCSqE1C3AfNLws4T5H3JsdTfdcKULPpTMSa97mCoec7pLzP",
  "key6": "2UiyUBb33DPhrsBcmpjKkyJyvL7bhjhBGcJVbZmaf5DrVcp8wpH16YdMh8WB8so9qZuPMhJFXzfd7FDruv1oqtKU",
  "key7": "2Dck21A2vyP8hH9uoJaM4nUdFx424NEfw3uN6SwzTWKwPKUXoWpftBSacfRJQLjVMyGr4HcJqf1z1rZPuWjtuXbE",
  "key8": "3uXB2Ezj66NKNCwTNoY9H9iyhtm731SvFn3qdaBhm1By3ubStTZtvpvZscKPhXKRXY9Aht2r4rAjirvxYt4N8uT2",
  "key9": "1ZpxDbbzPPBsG2ec1hSdaHs14kkZbANDiTaBzLbAgYTvVKa25YGqBHGhU1MFRzhJQzMMHn6cmtCMfiL4Rt217GV",
  "key10": "4Kph1ZDtAeBP5bcGEv88a4v7LyNVG2aqYHfSYs3vq6LGn2jTBTrGLeKYnKhFKWu3K3PxBz1Mt2B1dsiYvVovzTxv",
  "key11": "3PAb6SxuqniFxxTeBRHfQ8bTfrCLVzwTLZUZtP4Ygx9oyc1NSZrdCYc9CJi9bqHufvACC8CiZXmNBvorwxPXSU4o",
  "key12": "3ZZGhcaCLGpKFpaBCb7kLiTX2VSVMSA8ByWtmwMG8Hj94UsX81PLVrb5dvagFNcqQ8kkBwua975qC19YsZh7DBMZ",
  "key13": "5Ch3Tk2tatf7pWkt6qGVVi1C4fp4RSqTzZwxEppHzgP1TNRdAag88P9p5maCKX8gzUB2jC35YRgJ7Fa1e8qkfb6o",
  "key14": "3Qx2KB5Qs6fqcfiL64SmoF52qfQkFEZ2ExW8stkDq198RwtpigY1EVs1jF3rUKMCNX4kMZZvpsC8VVJmdZxHYNcy",
  "key15": "C5V1ktaezWLk3RF7cXibTGakfRGbUzvYnPRZpB3FoKzUgeKSCzgLjjFDseVvqfB7TnjGwLTs8ohAX4H9UicwV2e",
  "key16": "3kD4CCjJwwWMjQn3vxemc11ohEpPDYYEs27eYBNxwfiaQ494S7VBEtWw1da3oTFPmtmaTPxUurSbU9bH27PeYbJU",
  "key17": "3wJdZ2WYuXeFG12meAqdMMEC3an3UtcjzsgbGutfBpRhXu4bUbLKvpbpmyNM2k3feqcfTQjF4hFRV5Zfsgb2b8t4",
  "key18": "268pPssoWVRfVhL942jYhciBQzRvMnUmiVV44MutCAaBsujyrbYPjtrgVcwF49fs6TPVyY3iHTfQVPNLfDHBRYAg",
  "key19": "53vVhyxfezvSD7VoAz5vFmU6p3nNrsc5TRXWFqJcLn7dukqraD66p7DA9MHL5pqyDgq249ZurSJastJZZqqEoQuX",
  "key20": "4JGj8MRWSXqNMRkKRWr4zd9wtGDNG2FNDJLsXpXkd5i4vjRVjzw2vLbbwkdkzdCTQCqYWRtpUyZbT6UCJerz3Dfy",
  "key21": "5jRvR5kvbxVAmrkX16SdrK9GKgUvS3SCUXhAFtf7TEH2B79SUYcU8Ndd86pXzrAwaWZZL7ymxhzT1X179DkYzyHK",
  "key22": "4NVQcPtV5fcUs7bzSzJ43fsw34juaR6MDd2yLZ9k3wNVR7zYLKyzkBmgUaHFoFinUAeTvWMC3ZDUoPkvN56eNn51",
  "key23": "5DdCoeJJmiujGnZQueX1B3PdesY9L9F7GWxRufqtEzhc8vDQu4aqME45qVuVvL9pBnHvjJoqPvsZ4fUPNQuFyoKL",
  "key24": "3FhS8B8qBzjAwrNq7fiBM2Yy8kHKZukD6Z7eG6A3gLtKC7SYamnmSJoaGQZn8hQRuXUdtZvtrkLNn271LxfJPxMT",
  "key25": "5K7oJwQvBTXwJLeP3ytts1ws1oGSoYicaLwWZsUt6JK3BMybTJ1o3qYcHoNhFF7JKDo9rbggMZ6thoLKyTHikbTP",
  "key26": "3yXbyE4J3K4UahG4aMis6XqfRYy8HgHZQw9fMawLorYHECtERDhLfyut81aVR3nTPQUbo5eyvGbEi7ZqfuKPZHei",
  "key27": "2ZrkmunsUoobyvvCEzr3mAukmLAvZthCZfqreQgqQxkmAn897JQRmpSpKnfrxZo2E7uvvB89vrJ6T56WA83VUs5J",
  "key28": "4BCP2uYbUkKbCAXypfAnkXwZi959aHzffparvi7DMF2t9cje4UZBDUahMrHxaAgFwxaEkvRJx6Hf7dHpXq79N48N",
  "key29": "4ZD7hYvYnwtR5aNuuPtTxY9egibi6pnSpB85DjdoJtWcf2qn6GEmk3FZpRJmyCZ6UngRCY9BKsomMNgyjueaSuqN",
  "key30": "5t15jKssuPi7okxpq5uS5NTnboYNrfubzB6ycV6oAJwWH2rQLHdVTP5xijAYnSc8poZTQscyGUfpSyTHnLuyZWJJ",
  "key31": "4Kx7NoYtpDqi1BvUMEAwyJcbTxZFhav9i94iAYRjG75XB3sXfh6M2Tg6d5HMieiU9z2QLvicWeiUciqhReTF3ZGS"
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
