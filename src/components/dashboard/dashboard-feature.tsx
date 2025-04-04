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
    "5B6yFSADFtqKNBZEVrFweEv7dmgLMgArYTk9FqE8zTMzKtWofQ5gPP5wGxLNMYqXCoC5QFcHRvcmaJytgxecEamx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxNXBz2o6LoEAgssAEFWGsVyimMwQPTKiqoBthLnqf1xP6GKi9mirSn62gZLubQqEXFC3meVRKc5aZ8C1gUKrzf",
  "key1": "5ZuiUTDjFZUJo9MdxeJUswCfKdH6gkbpH4Q9rAGStdfHYcGopy5yL2zM7sy214eidFtcHToDHXKGZnYvYMkTPsMo",
  "key2": "2awCKZET6ELammNBafQVa1uguv9p96MfX1xt2ML2S1QAr9GPqgoH1ZRWmeKgC1zDwAU3Ew6mDF89beEZpRdwTvTt",
  "key3": "3xQUfpiFMvLdU2PpAd9p1bM6gmwa46zG8N5x15zphPMdng8D1xS3u9DDFnc7Rgs9q5ygEoSL11jHJTYiZ86EeD86",
  "key4": "5VYcmKk85Sd2vnJtnDTbhpqSVC7jAVb2yMQaLjTUoE8fwBzP98q7XSrxNHCkevsobmSqRybp36MghgUV25e7iy3t",
  "key5": "4znv8GtoirDMqpyuKSKNBs18KLDo5J6GVZ6gDBumRsq89eHyd1pQZHYYpBoRj9qe5yKgyjzdEtjy3A2f4BDTMf3w",
  "key6": "3w95ZAG6pQriCuqCHamXouG5GrjT9DjQowrErHUXyUNTfzi4AXCXSUStzVTTbrpsWZ8phqmBEoAms93WxinYAS36",
  "key7": "4ryVLPz5uohPUnGgjTohRpGByJ1rzSfsXsx2oF34GsuSsVL5s7jxrg7QRyWF2jRGYm43EbS671hG6G9qPqfxzYSc",
  "key8": "2zZLGtkPqKBUKddWGdQmXgrpgdsjZPfH2BNH4PwPmhUeMsCkxoudwXg77FGyfjeGEKXm8ZqwXYFZLfVqh9sK5cGL",
  "key9": "2X5aaM9xC2ffFLXmMBKT7XHKKidGtc9eup82gE86sxEbMLPs7a22d8d77CTCwDQ4PgyEYW8tq8xWtKfZskKsRVa",
  "key10": "57sYc24LzKZvqie1T5vXE2hyN3CnrZ2CUD45xe114cjB6UCmN6ixmnsnYmA3HcFwSDMA1gPgAUAZM93CTxUXr98U",
  "key11": "GG1pjZPRreZpyNEpehLXWH1wcrDyTeMEYBNdi328bmZbPwrL892FjGwCpgBw2Fp31rk1AQjGwYNMSumCwWyzG1T",
  "key12": "2zvSootXWan9yW4AvTWTCYW3hRm3wRFAd5kSGfqWdLUtvoU9rhGUT2a1oXUecrNerd78vwakQNXqxuk6SAZ1f1pV",
  "key13": "4GHjQr5w9KRe1A8sakuPNFMDsdogaQJqeCBmppS1uU9SnVkeDBKQL52sRfhXNchCdAZuCqe7T8esRww5FLqAmWK1",
  "key14": "TRgPpgaYxy2GUf3hrgiCSrsuQLhbufLEuFefhzuMcp5hhU9dUv7CwSDPJBdFh14xns6Yd3QAxqziyaZgkiAgEHB",
  "key15": "4MUBZLQ3rQTYDiFJWQSkqvrBuKq2GgrLn3eAm8gLiZR3xqYRjiGF1o3yJwFQmideUUEm78kf73P2wJ6LauLt2Pg2",
  "key16": "374fshnqdM77PSdCx1G5XWaD3GymByFvM1iwoWs5CHhe8WToK6JjScCGKFtmCmXurGx5VwYH4i1bvYsevfL1ZPsY",
  "key17": "39DdCBNB2jbRKZJBHmpj6UKr78xcoF9M1AsmNzGm6mZGttfW91ZBLju4dizWt2dcfzwVSTfMhUdsTUG8LPjM6NDX",
  "key18": "2A7vpT4EzaeDBgf3ygZ49xznEogsbbMpaETy1vuZYwssSWZPfSe3qEo1z5uieNtC4yUSCv5S2KbEXF2FXcdcwaWS",
  "key19": "oYcT94vP3s1fsZbWqeyRvfvxV6AcyC2X5PzDE27USPABoohNTqDEmkuHzfjTry85TAwE5Y8khhENGYQcGDZ4PRj",
  "key20": "2f46rHXHjgaevFAB1uf1hYSc6XMtLSbbFDnZeKDNRSvkAUwbHtEnPvdTiUX4djgo4zd5BTkXw3uLeewrd5xYppbV",
  "key21": "5nUGYvCPbjrvAF77DjSGfDek4wtFfTkpNGWg9yJmXKWLKagGap6U7HQq3iDTULhiPUxDT5KqRpKtgJTRHjECzQ7o",
  "key22": "4MeRnHDd8RrFSZbh1cqdjdBeaF5anNdrwXyWPRfSR7Dh9DVwkqoqnNociobKTbish3bG6TzZhMtAcEWPJp2tPjHF",
  "key23": "5bQfcmPD5QEPcW38PLjByMae1nEzKc56ixYgWMjCfh6q62Fd4YcsmAzA8PM4KYFdRUtPMY9NYaHdfJhVdz5cYfQa",
  "key24": "5KJErJ9tY4qPwWyQL9yuv3osGB8Bj5i1wBNgpeHyMpACwVeQ254WSJ2yH1h3E48VFBQfRY9cyrrwZfWwKDojLB9w",
  "key25": "K1f8trUos4rJxrnEEboiBegWGJbJLSrTFEfPrpDB35PCehH8fME6YcaiDMXxzgz83JzvkJSd2ZWMthBk8EYS9Wt",
  "key26": "4kHvsf8XgYExeUc5ukF7z3cBtPYAFfwehxtWXi4Bpu7EpHb1ppvRNbuMao49ZWydnHYKjvzmHugxBwZYYhbhJ5TA",
  "key27": "dSCHbeT6dZq8319fHPZoNnMk81TW6mpkJeBgQRaaZgohCfz7EgbJFwwwihAc9ACVaf8h7V8gEQe8Vov8yPfvwGi",
  "key28": "3Ks8BCbWUoF3Cm3SzhnzP9vcNPAiaYL6WUNw5XSdk4vSarE6VwaDH8NASceRbLA4PhHe1yNMU5FA7zE5j1ZdQoTP",
  "key29": "4TdG7ZMj1pyV2PXC1GKsVVKrAMiY6rAx69LH5qBSrkdiueVSTJqdmQkdUWAdv3n2SHTaGr74c5AiTaafhQGvjCWa",
  "key30": "4TVyMmnbWEP71v8H17qiXhw8UUuCvbzHrfm6U75ahLDcaZ2raAZQudRXDBZqTc5kFDmnGgoZmhZkgrAM2JL2PFz6",
  "key31": "5ZuvnzUVwadY9eRuqHJs5NhSh6EPxwWVtPk42owLKmtkjm9qawcbF7NgQZ9LNRa2DZvJg65E1crVuApRCPt3S6oW",
  "key32": "4P3SgFEwdEX7XHpZnmKqUVKGUSRKiVYCYZEN46fxK4i34D4PkqMpjnyECxU3dA8qYDtoo3Ev35a69MevyUu9VhfP",
  "key33": "2pq31xnthTt5GNSXGik3hMwypJzJFsvQUb8VRsvnoA789fceTzw7qn33u8LJYqBvSbqE5fz4R5CSQjNYCADzmyT9",
  "key34": "3pBSehw7kLfjLvLyUGDZw6dfU6BFq5GwCQNKVbB51QAx7k5HzxYbMdoBqF1iWrMUDVwwarR1zL2BFZpfqqTT131D",
  "key35": "271MH6afsjnADeskSbHJMvJ5Fu939bGGjCTfBPSoJZduu1XcCQmPVV8HFi6jKj4rs3PUDM1nt7Q3FUqRWkZuim2i",
  "key36": "Btsq9yaKcYJYZHjXzm5odMnkGND2nngEJ9x1QkrB3aQTj6PBp4nvF2AJwC8q6171qFihBnK7q6tqT7ZbGXAQzPp",
  "key37": "4XiV1WrKhrZeUS4M3QMufzQA1xLmAWwKGFb1W3bjUEG8MtZsMS8qAaE4BtgKUxNx1RcD2C6avVBmhfLoNjoPBRzA",
  "key38": "mFdgBB87cMTxAdvE8A6aTff5KzaHMnuhA9Qe6xYRpLNyAEF4Q8KeEXom68vDV7JGW9RBsV2oiZYAK9jNWBpdjnC",
  "key39": "44bQiQarcGercv4W3KNh8u4M42bLaZFZJG7zq92YCytWtXZdPtWAJvnbimWzHAgUMHt4xbuWPVx2yB6jsJTXo5LW",
  "key40": "49uhMVDYoAtv8E8dV4W3qjJnp7GTFXR8CPGwNBBacE1Lbhg6i4pEWT3uyAJ3Sjp3Q6ejsooMKkhkctzkNNdPiFRg",
  "key41": "2SHuSFwbtUg77ZamHY22whoCYyEqLLqMtwTrBk3QQWEYy3iZZ7eUyiTURKf8FmzHFG3Yax8MAmCr5g7d5pafDarJ",
  "key42": "2eJPbJ2dKoeDxjJhX2t4CjNvKm6pRwZt33ccW6vu6DygCWMCtnQUPjTqZERnTQzP7JSe9iLbiQWFRPGLSJ4Dvov4",
  "key43": "5fTT9nRGAbMx1SymLtXRS7119nRss3n7ypGUmXARuzuo8SFfnShq6Uoh38cya17Nv72FqEeCY62QndJgn4Sx6mUg",
  "key44": "Q1K48YdzYqpBaqYnH4Ep5n4MPAs5q3wFNnEo4qpcRiBdzUeyF9m5uyqCvSqzmwzwMqrNHExxKAZn9eDV42qN2eE"
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
