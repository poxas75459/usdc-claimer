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
    "2WEKXZBCUQYt7mjNdbTUX1twhdiyFrd9ZTgENCVT1wdmWHvoNsMrZR5y7MkW2CKQebLSZRoUDMAerEimwzfRcvkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwufXemEVuDfjAiWZ22mdA9iNLqwe2iVijqZfpRW1VwRHv52SxU8xnbtdQgwF13dh5QC141Kjbinb5eicvjodqh",
  "key1": "4orUPC2HHoHoNjZikvgf8gWPY4v11hs2z5CeRhzWdoT3r2RcY5AAUXFcUfLd8NryQc3FyeTZf36fHeUi9FT7pKQV",
  "key2": "5xrK5CrShCtTcsi6MhAeEztySvDefQnALWpUuiK23cKkdyMc99zBr8qJpCY7tyaXRtLfhRnHE4mjoFdorevxia1x",
  "key3": "3APD5QVdQPY9tm7XRngTjDVVkpAE8dN67jXijt61MtGVaadtxyfjG8nPzi55HjDwGPeWDBNNGgXxaLEG2DzkTCzM",
  "key4": "2QBdUTRiad1vCbZvzkf8HuXFMgk8ZxuHuG9HYJUbg4fZYLBT9ndwFxpQAbMVd8kVAhaV2mV3wyLXNQhP6CPMhYvJ",
  "key5": "dq7p74BrATUZZktKJ2wgDoYbmotg7hiayMCM9VbeCPw5jN88z5ZtGhAnL8TwEkeEZwBxUpCJxVWkCkTVCmnnzvT",
  "key6": "2kSuE2q7EPCrWJGpEWntSW6UzEdRUBrx2N4H1Vp8YsBeFR6HN1M3qYw95Hsv2qcFA2vw8vMhk3KZ94QiLXTL2nVw",
  "key7": "RESWVAR1wdx2tc5cp3tdAHVxkfqxrS93Xp3EFGBAM5zEajnXkpJhj5gBwZAn5Jbn1zRjseap6VFLnHZnELPcauA",
  "key8": "oZm3pHnYoFpSbJLhtBbuDjXGFeKH3CfjMd9jKqz26oB6MyhsBpT2iWYLdbSQMWiKjyn1xPZNWfDovsYUynjJtft",
  "key9": "4XoZypKo8yzCNGU6yMbUEonpKygJQGHoqLszXJAKPuukmoChv4fCnuTcP37RkGxDM8i4ZLYuGdGJP7tQWYMxuubf",
  "key10": "2GPK5s5NuhZWpSSt6FjgdVqxmG643XDgFSZAMqacEXWQZmR6oQhmVqW9DimE6jURPqRu2oZ8Uv87e1gtTBzr352U",
  "key11": "5SQ7gRCkgYuskcb1B79RshKS9x6o99KAeeRbdHH4mWvbsDfPy9g9TKyssghWe8AR7qjMvgM5wTCJNEjtEu1W4jSY",
  "key12": "49q52mhipcg9AeHpt1fBZThqBPrS8s67tdYbPjvQn8d1Uxm6ncnWUXKvRJL1JUTVTjzCRVWWL5pe2FZor2yA4ad5",
  "key13": "3YCsJfak1kxJa9aiAbwk9YSAZHJ57xGXenBFVbauDEv7mtXMrLLdnQU5YJwYTmeM3u9CmHxdVmXU9eBWMhpqKvR7",
  "key14": "8zYm9aACzu8q89tRBRWCCak7XQZj36Dut7th8xWrKpU7oKCQoacuU4ZEg9GAxQ2tL5vQNGnYFJBtqKLyR9fqtU4",
  "key15": "2LUATGVSh1vArN8226BAHpcX7yWVyq84KW881jXQcqaLRgsTJWUJG9sjck5UrAKGka84YJVwsFhRgoXL71FC4WD2",
  "key16": "5fmywUA4qPFpKD4ZW3B3wAaYafvEtXat5esM3rvLNXBEbBWPn91xmbN1tJiBH1WFCwktkV81tdwJNazdk2RMSkk6",
  "key17": "4aFofv22kVM5WXHmWjpP9C6jg9Fd3Do5n6FpC5BkY5MAVoJzkunS23LRKsrDNg8tAFhw3JznnDzfj37cGrzxaVmb",
  "key18": "2TJqqKs1KCzqvNgzaax2KznPM9YvcTXqvJTK2VkWbmTwFWv6bgiicfHCJwTzsR5ggz96iEsBNTYuFhqNK2Aj1zDu",
  "key19": "aTbsgfcLrMQmFiT5ug9KVJpvmvHR655d1khcT7GaQGBwKBrq7qGDcL9Zb1AZWBNUtn2716senTntxCf9obXjCfQ",
  "key20": "3faEDeumQFwT2FGjz9FySGvuUvc1dzG4z5Az6XwPxRpKAyTXvuamUbDJXrG2Ajc6S51RX4VPmS7kpKN6jN1fpvtZ",
  "key21": "3SWBdhMEB8Ksv6VLY2ismoH2RJXD4MBcRxjJPsXdRKjZfi8orHQPsjS1Y5wbhjtbyMcfue8JETXqgpr8nk3zxiq9",
  "key22": "43vKD3yQmg9oAiajkouqxCPcoKFSKGah2HQfBT39v47JzB1p4xzM9UEDxJmPSqQNwMz4LkVFucKuEyq7S9uzsLi5",
  "key23": "4g2PeoJgU5DzuYkAJdHJZRVvdXQ5xVujc4WuLSLiRt1nVP9hqA6kYgjw7Mtk4Ds3ZAkvYQ5aYCPhedn1yDr7LWYv",
  "key24": "2YepiNq9MnYo6VsFgmmUnnV4eqBWWQyMtSsbV1sSt4QFkHGfb2UsovbP1XyK9p42DDjESVSJkSsyafn7uqYdKtbJ",
  "key25": "2wvdJCPNGf8CZtDnGRS9uesr2MUTeza9W5CvCuaNiqka1MyMbR3V6BhKM5KqhJXbLN6rfTFW12aEDxF4qm33v7Ue",
  "key26": "4CKuADiE2VNSQ4rzVMXYubgumkssZEVH3mGRrZuuuUBQfWQzqUxz4DpMMshZRkxp6YKnF8sdQnXF2WUpxtaVB96p",
  "key27": "2ZBcZAbLxSnqo5roAUSCCy8YbHNdVkz9Qf1pT11hCUyXeS6J4LBShTgeyhdkFNmpWBMdoZAz4snozorrdSkFrXnC",
  "key28": "3eMthkR5fP33hPfbgDP8vbcE5gxJXRaTsScyByVwF3MVcWA68eApRR1LixthLHeNZtkobDvrF1H9nxTS4PuN4YTM",
  "key29": "2p23BiaxHUGhD6ZVU7mnMZpRiGSszEkuuL42UVP46cyXUB1Du7dTTk9T4NU6c8vaGmh3jTayfMm7TZjkgUGUUBrx",
  "key30": "3SHBPPa3Wmpy8PdrYftMDdguYasC7PY4hxydJ6PLmKWQpQtYwV7M7wJP4ynHcMaCBFYznwnSJT7KreCT1kpuz6TL",
  "key31": "2c9stHYnpTFv44Tzk1rfyin9jz93X1uZn3zpogapEjemFUmBcdj2W4VwjxCJzqmqYq5fiussJeUHaFp4qpLuh58z",
  "key32": "5fvEAzV8NCLyhgM8s4JctnHad5ZF8h7vmCCt9fKxVB3gWvZWsnthMf6gd4cmazcHEB8k6GFmdVucgQA4nsroaFLx",
  "key33": "3nWSZBZK9CJyHegdrm2aGnAX8Ptd7ux5CxqDoKeWXD3uTWQmcGfDNJjyv1C8Vj5Kty6uya9FzJMcmUYz5sxXjPF1",
  "key34": "4vzBMFa7GmoN2a71Gt3sTYWFZbNdKTC3746PVcxuGewK2g1DUUJjRhcDYRUH7cENPB3jq4BzKDFvc2F988Q8btp",
  "key35": "4Myo9rgBcvkLoF8pVp9YUG7Z45S44NR7Tf7snGxdegw4poj1rqYHcmSodbaK6DbUAoKr26rFofr37TdemnrjC28P",
  "key36": "v1oRPxiwHJBiBtxuqC5eGrFCXwxs4END5wXmXFcJcnkY6U9uzE8cy1gnoEhvDbCdAmgXSAoDfcStx6Ac7axB9oA"
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
