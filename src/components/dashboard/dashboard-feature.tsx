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
    "26ynHZqi2yo4tUBJwAfqSqNsKWRrNL4zgE8HdbfNAkCjmBRRqJdYpipffHutPAvoBApqcyj8TSFeTh1irVfwNF1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJfkxMkT4icyQHP2Hk4rpSxrXNmXfdpkEB2MnYzehZYbke7bWgG7YuBuutuH9HJLg3nJagFnzg6pP3dpczwRpiu",
  "key1": "2m63g3U3KR5QaxfNqAePX8aN9mTU7GiBRoy3mH6TNc6u5Gr2XLVXQjZvgpa6eqS2tx1beyrEuc69vFGAZMSn9SWY",
  "key2": "3VPKdakb58MhBfnm3o8bB97xDDaL8vjgaK6EWeyuB1LzF3Mi3TCoE5wpskHJBQRHvXbKWEcwTkfQmHZzwoygNjTT",
  "key3": "27adV5VSsuZDa5Ma3FH9wLXDPhCCkJ7zt1hsQmjNJAa8S1qURtoAUXbnnnAw3Y6dnnQLF68wq6YMwcuX7iSYjTEw",
  "key4": "4qgHFp4EGvvxcVfe5WE6PUd5Mjwu2xvUA3GNdLDAxAiY6rEqtGnfq1u2VP3muJsAAMxJDnr3EM1XBhUrkzgtK3b3",
  "key5": "4YXKBwXF6CfSZDqYCDWVxYR5qjjpz5KrrG2bXqqGX9Y7vE5NTbykT2Et8x5ExwKE94qEBtaWirfVkaoDrLugXc5B",
  "key6": "4JkmZw4FXQDpgNmS12Ya8wTLzkBrFfeZo4pWwhJT9i8uS1sW5pDUxi6UnxhnyZemezWQn3uCKeVXE1faj3v1i6tk",
  "key7": "268KpHcdEa4DREgDheHaJT8BC2YpvXvdkUZeLhTKmxNiS11Rhhb3dS8u76fVtm4azoyQzeEXMuCgfvVNAFELHdg2",
  "key8": "2d1bwyitnRgLiQd8PVUMbJGjadBbjTvxTuTd4cXfaio1sQKBkygC5cLHaSgJB6qxKhTB5Ar5rde2SSwrbedZoWtW",
  "key9": "4VvYwJZ1YyjN812yz6aJ5T5S9ZfG5whEx1E5ConykMmqACxCcfpWsapKnk6fzYzkTTbzvfcR3UNyJ6x1RPvA1uch",
  "key10": "pGcSrASMaFJwZctr34sGf2LVKP3c7ZB92hkgWDQBdjycz6GGc4zYJx35JarfPdM4XSVX7cNUWxWqQpWtRzjAHs7",
  "key11": "2Vh29cz9rSQMKTTt64RfCYFPiKNd73MAUKMhhjZDUFtPJhBtwautGCfKtJhGVt2r4sVk9B1w1nvH1qzcNTgyRpqD",
  "key12": "5hw7gBaNHa57UAm71K1bH2dPeo5gcPrA3E7Z2Nxuhypu59ULm9crAKQZzTNFBkdKf69qeDYxqrd9VBGCW4szDqda",
  "key13": "2jqS47oLoJrYGjv9476wD7BniEwpXCw7YEpqVBAjqGspxKP3FcpoySHNYJ35CQ3qDYJnFPuA6UZBXivogr9WXxQQ",
  "key14": "5QQ5V7ZKrUk3DcExuSR8jkTongC45JGDAnVjpjaboyCARt5835nYHiGhRxn9JW7gXQkbRCU7jYcqrbhuw3wcByqg",
  "key15": "4KCTkiP4VFCm1tcPtjz2tQsGrMHjCLZ6YL3d8tgBcjDdqvncnDYoN4FERoVS9qrfocLmpnzg7PzJiGdybiakhZj7",
  "key16": "3WtnqxqZmJZP41iznf3dUaKztGgJqjZkrVBWE7zAtnSekgVKYHxehAr4gYYiWgSEf4kKfQFN7CxxXPRYjr5djKDo",
  "key17": "3YM5yqqWt5FA6makBfy94fchcYzKvk1PU1pcNz28GpN3zudiQCfTqEJJSS95A6hfDp8CFj8jvBgWwDmUzjoc2Kfd",
  "key18": "2NFptAVDcwE1KDUfBDMMEgehjwMaGWc6buuYmfUTwWiMxBNBR9C4FYJjjAUKFGGsaoEtcUdR74S4TkvKSW6ws8zn",
  "key19": "4Ao7ue6ovDUWMXdCriGsTwhriZq75h59VjuY3QFEJhc1pFBcQ6XgkBxW2kt4NZJKWdzwRc7JVqAoRGDdDwpAxxWY",
  "key20": "2Xr2b3idsdFzEAFJKAN9YS61vZSpjZhNTQAj2f6Hskv8uMkvJEG3R9UyRamBXZVVmdFYcJd266DD8JYzMaqPwbfC",
  "key21": "5RjGfkxxmAttvDtVUB4UxbHKQViGDymwTGqiXsQTHmzGDQx42wMB6Pu2k6Cm9RJVxYz4qbEZyPeeQTnP8LS239VK",
  "key22": "hkfUE6KLum3jQRA1rgsYVbdNzMhTYSx62Q7RQDeqoynZp276JJeRyxBzNALBKcX2xZPxnRQgREikuHNuXe41Zi5",
  "key23": "djJWL8hqkL4LsComgush8BxN2ZzxnXwazea86pbYvqZL3ETmaa6HgEF82yemfVR98Z6v8BkxrW5hvWLFs7YoPSa",
  "key24": "3ynodCefHRuqPk7zXktENFyzWfPanEvmJgDJQuQyGLHB6q4kknJ7BSGjGypvwa6UV248uYAyfJiUqW2SghAdLmkN",
  "key25": "5FBNY7VKii7AQMVy95HnRXPFSJVydiebyWyG1KcoqBD6k1PN4SBJRQ1SHau7PKNEGbvgLtatjUgh2wWBsJKcdy6P",
  "key26": "5HiBqtoFk4abU6VnSq8wZDLPESjGR9G58sYsaRZPfeBBqmzPWpCW7m3SfzXgsESYGeiGdH5AXHvPxfNqdF4TcTVm",
  "key27": "5Y6mUu4h2DNCByGYh828DUZwzDP6d6cJHaeH4tdPNG1TYokofcEvVC29ZT9Z4AgeSpyamiPDRsTp7owGEB7V1q46",
  "key28": "iYgNP1GFk7eBVD1ZR6j3NyXzFzcww3w3u3PVtSZFHjx4tojc9aQkrM66rveGjW3AXSdVb3KdZCQg4VYhqfRCx4X",
  "key29": "2qKU5mkZvdJ57NPmaXBQKJPaAt8cnQ6fGsk6FdbPbezRXL21cG4yuiA2cSoA7Y9KyRGPPWGy3yv5eE7zBfQL9LMJ",
  "key30": "WnxqLqjGQDgrYMfmLoDxwagMhRAWojbrTnPxpSTitbNcmuAQAs2sXzeLnCyGpQXETfthtz6M4ZtkqmK7LX6Euhe",
  "key31": "Eb6k2R2Dk1BfdHyZm79RZbprq7RVCJy6aqs31XX3gGSQSFb8cyMG1S6XvnJstyZyqhdKz3D3oBXDvznNLdEidqv",
  "key32": "5oRD4m58TFx3bt1SoVwsmuxNrcggLmQyjGCiYJbfUbu4oSxYh8qxTEs87E9uGVNnY3vhDgZ4NLuQaWTPxmwrxt6M",
  "key33": "5vXZD4vRepixZ1yJrxRzZPwkahGmTcgrEwLYru7Jb4B4qLMnsXH9kyD7snbhTzz1nFe69aCwMdotCVLwpKweweCn"
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
