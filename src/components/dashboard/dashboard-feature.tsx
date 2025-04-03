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
    "219ymCd5QJEs8xMf7NViL2f5YthUkCh7WthXqnbmuZvweBwjGaTmKyKVGrJk2fwyJTFGbb3qJQ5dZPZUM9s6CPni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rScWzQL3duD8U7pBhianTD5fhTmLhZD76pVdCcqG4nqqHPoLcqbT8wEaeoV6uop5BM9rHRQ9w3a8j4sccYbcLcJ",
  "key1": "YpqiudEZTrKYAUtoLMV8rjHaVXwWHSGhvq8AFj2S6VXaMSJ4nTDkQetCntASkxo953vRYkLxxojVK23x1ss5ATg",
  "key2": "3fYeJ6M196o2XjsKqy3k1a1ku2JMr7FrWumFveJupvqcGtgiYCLAZTW5gyEDr5utmjUnxDSj95vEjeB6jKpivXrk",
  "key3": "3A6T65MSAzCmx4mhCe2Xj3eBCKpi1aioHKxyt2ev4W2vfacmgvYwHxmQoWghpgCUQChzbwtaiwP2FkFST6G78wNk",
  "key4": "39D1Jx3PbQ25TpU7U2QK83JS1FF57M4ZZToLTvoZ6YFjv4CcrANYZk1gh6pZ4n8aT9k7QNwRsaq6z9xUNYP6UZFB",
  "key5": "64LDNUuUk5dyA6bMTwL38pG3uxtY2sQP9XyxsBACV47mEuKe16RS87zFYiaxvYQwTuuPkcw56w4ASudJWMnj54p2",
  "key6": "4ipY2egsffRxfkj9DRYTSYYBYz32knhn5amzgztFuASWcesuveyPmFwJutd1bDyE9KLsFvrQbjEUkpeBAETwAL2x",
  "key7": "4MZrktMEb1JkSBN65eXs4HEvn41ceSiTKLH1SKicnoSz6RYxZg8qxKnTZFdWHAUbDc3UMUDbAwDqzGKV4PtBEiqf",
  "key8": "EyJcTUjy9xy77NdMhZKqujS8xjuJy9W753gRrbp7g7aQQ9xbuzpMShkCJSq2LfHUuejDwNZMS6p4mPkKq82BsZp",
  "key9": "T6sXtxnLjucb3dP6uB2CmYoK25B6GAG6tnnGztBTKRjQWfcJcVC1iEYcLFmLHUXN3dBywbhYGW7K7no4rcFNhfG",
  "key10": "4gWpkUHJFd1MAXsq1gbUkRRvNFBMfNUh6TUXbN4mH7BhEUMBtQUVQw7LHzeKYd4NaXDBn7Lratt97THkZG2ui8w1",
  "key11": "2DAqcgjpq17M4fXw3FxqRvGuDHRtFrK4hoFYwcsjTh3DFTAwPxmkMpJtnN2qksfUdc3KPjYhHx4bs5pZu7azF9Hk",
  "key12": "2bNaiV27GVrrZRofK42qE7EjMnhvSRsBGrTpRqeoBs3gXAbsGtdQu2VSuBt9FU7zf7gXxGkGPNA7vo3AL2P818R6",
  "key13": "5SUZiVFzu7UgmbJVCB89DcLL6Mc1wZDE9Dy4Lu9gbZvwNhD7CLa2vHLDETRcpHfaHJ8raTrqtdbTYSUD6LaPysus",
  "key14": "3DfEq8cyRUCXJHZWnkUnw45FzYEmApxiAZTFKiVvvts9EYLzJWkTMRKXcMZLNMrTVi5PKEF2S38z2vczS1nHa73T",
  "key15": "3ERRQXxYAoudF32CMuEkx4rhwwmrVJ23tbPhWHkD89CWUTukEqej78x6TsvpbyG2FHKtjsHhcHinXF5TVQMSyU5d",
  "key16": "4R8WhWj29V6w3x5Tj4hoYaHaT4X1acokGRYp8GyAVf5BdjVfSPAQqapj8Zw6kXjiTJV8ZcC25ZWazRHX9B9uGPAe",
  "key17": "46GEQhVFtvmWhnWhjvRwXqrU1bKXLqQXq1YybjwZN2ZqKLexQaDLQbhrYwmrPN5nS2nceZffpMEXUMJRcnHQhTxN",
  "key18": "5mNcAS3gjoWtM77Gn4cAKmyeXoTosA6wtuFuxbqw1YVzUqCqxYSuVBtiJsiCTGcexkSWkMjmpve7FZoSceRqrMQy",
  "key19": "5ZV69Eaw2gygmxMJ9BMP8ZaUcvTHcqF5XHkbYgaS1JeNmNUSj21SvjZya51Pdh5sQYGigRCWvDJs7CfjcE9jPwW1",
  "key20": "2vDacSh4tuuEAZ1crN6Z9UdyL93w3AxsSyVN364NWHt1S8aosoz9jPRBj2LX3iLy7Xuka5EwDrruQyVWcdm5JFUq",
  "key21": "47Mq7eCwy4cnPCtYBHtuPUptzFXbUa8JUUkYciGeaDmR8NENDdGMBMq8gDdoCq4FRXgQsc4nxboXf6Vnh4WPfFeN",
  "key22": "4acU4Xzm8CDDqEC98jvaVWJuznqMjY78gwFzxFiLM2Kir51FgoNpKK9n6KNchsoTgqx51ed2g4nQCH252fbnaA6h",
  "key23": "3L5tp6vNUrFuKVx9dbHKK3BFT751YmprxAi8Lq5fRZ9WKLaRgzbcwCAZmV65u5riaGH2pHF4X3eLFtHEjeJyPu33",
  "key24": "raw4PoxfsQRQDA99m8ZEH4icxjQtSjcziEYUV8BcP87ZBrsrPq518XjkdDdwJyZoDPjEyJj93TA5xjd2dRPXktk",
  "key25": "Yxufdum54NpR2KS4f4SR8WYT6oidnUvGY1HgujFuL1ToACW2V5ckLir8tH9GNM73BwwrtukhKf9sMkp6AFcYrbw",
  "key26": "3swmojFgRyEEQk2sSLFCXtTeBWKTGwHnzGLGtPPqpwgNRhuvnEsvR26US3dSP4ipuxq9CiAQJZSHkf69itXMTpjR",
  "key27": "2JUdxckCgmGfWoGQ2muB7WpoMy1jZCPhSHYNnvJxCA2L6xXjokM5cBY8ahKwiv8139utD9Lz3wcNoBJ1EpN92v7K",
  "key28": "B81ubM8bcrcjmPLhMnLhfKnTcvic2Hrvo3Q6H8ndZVZGgKHwLFnLi9UsxRbwegcJSMQkRXupat1nMBCiKVEx7U2",
  "key29": "51jFgnKD2qeNi1BpPa6qfePd1fiQdhsRYoVjQgd7tCSmghqzeciN4XzrWirgD84myvRP8BpEPn5HAtJpWch5CuHj",
  "key30": "5kCFu2jTzAUuSX19WUKszbt888LwxMwguE1kv8cngpR1i3BZtXtKDj3hvbX9gWa3aKgBhmaF3qYTjyF9gxztFZBV",
  "key31": "4HdG7DGLnE7xcRGdL1Ht8pC7Wd5ihangXYp8xsbnuT7rPWwp6yC4uoQn7FNLS4qXc8B3qWATWau5dgkW5m9NEXqx",
  "key32": "3NSbp3tgh8oH2xQo4jTbK6ULzmH3mdNXWpeAu5uZCBx9DLyTpVW33jyBUkqa47Tes4448YETvos3Wi78ibUHa38Y",
  "key33": "4mMkHdQ9XEhynm1ztRQpjyiUgqZaXpB55bN641f6SgMDWtDsL6db6ZSEYZf1WK1qG8vxyMKrEc7AHz9ycoMt1Xa6",
  "key34": "3NPei9p8mY3zYeP5taXjDY3KQAFDyrzgyXrU3ejVB4poMybT6GQ2qQf1j7i9GmybineTsC7vghTH7aygUK9DCFtp",
  "key35": "3qmea2koXKnyzfxtaKm1pgQPeGqJjum91V5zKzg7NhoSmhtaebX2AymrjXFLogDgHx6AtExyQ3yvkHJYXN3wqY7h",
  "key36": "5RgfYn73dsBUakRqKgKM9mqz3kQuWrGJ9vbjyPPET3PstLjAfhXvPoA3fkFLmkw5WvQfwGpDgZnXwm1ioZ5hwUvg",
  "key37": "413E31WkZVLUf5dpsKKZjwu9ibdiZu35ZZ5L9VDt4xc9EvD4P41QZAM7iM6LTZUduGzMZMw4G298hnAcPXc5vPM4",
  "key38": "3VHGkNd7g6TYouE9h7fd2gt9t1DcRwtMgS8TYFU59HAmdtzyz3xZDv6VkdViv1FUVKYQVEBmHSWHVMhYrWuDFrkx",
  "key39": "4AUvPL1D7kRtxHHNxgtybbHwFr2j2vXwRNwjZ7nDt6cCfYd7pDbBsnKdmG5ueBHXZ4ADp5QA5TwsL2L3LmfHSiP7"
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
