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
    "2k9pS6gX4n5xaLAL8ShceNsSkMeKUZQFVDcg5EqFXTQM513WF6BEvPBuHYthp7rLUdLXnd54pccVhVQrxWDK8vnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBc5PrPjtz3XoDjvRcuYcpuRZYSLbuBoGQNHKDYqreDTFUxwgQCm87hNtj2MWUk6b8P4EYapi9z3Uuj3j8DMwDc",
  "key1": "YBZRukV7dkB27hfURP32wobtT4Z4FBe2mivfS7f83w3NF4zhDFzqM4bJ6nzoiA1MZAyaV5hQbHgnSqrYfTk2x8h",
  "key2": "KhgiXxjfnrGwgU9tfqyhjZceuv8KKPWifFvsPTD5RfwWoxkeGH9E6PEZu5gPJM7nHJ74ZZtH2oT8fq8LQz1ptno",
  "key3": "5DXUsFeSPdeEMRadWBW7WpGF3SmYL2pdkhf2uGgwWVmRDQUacupWAdSeWxHn2mLt6nxBvKQqAQDrxfPpP8tqJQrt",
  "key4": "4PprZE3KGX6qeH8xW7ZbxpFzLvbkXc7mBrFCgSRNzoneyZUPs9e9jqi1xTu6KAD3om58oRpYXbt1g46RzJ7F2Hrv",
  "key5": "3YTSpUwWL9PmHzL2F1oneSZtgaiBK4eEhbpwLKtyKaRXQBnNMy9ntNZYtxAd3LFSho17SbUG3RgcLq48wSmx1sdc",
  "key6": "5r1qbdwUoCmmmoAgw24APJe8GgKKsqtDfEXAfgs18ruQgqg1or7j7omEJtAXzt4WSp9mzUt2pqrqhefibH9yjhnC",
  "key7": "5yKBp6ZhQkG3cmJw7Bjnoh1uyb8iXmLQwfYe3sF83zxifoDBtQMrs5UzUDrhHCxFfNUgNneNpCfecQRYDpENrhic",
  "key8": "2cThVMPfrUzRcNq7AHiame2o98fd2zjRvhkX2mnC2undj6UNEGNjWoygFSLUUeZewKez2Qfpcfq1RFin2iJHd9DA",
  "key9": "48QkKXaXUFSwdnBGCGMKWBsvvsm48zBNYRYuzAHJkZWr2Fud7ThZjeLJQ4efhhUPYoww14YbyhAgXgVMYJbcgpNQ",
  "key10": "5KwvgTvvXu56NMz9pwfWZhemZsbwpuUdQMjBzJwihHA7mHVjPr8deBiJZFntEDWbb6ryTk1XsGwwpJon9X4dRr3X",
  "key11": "3KXsQ5oQtAEMDpXgTXSDkPXvarNy4tyasrDFCu2ChVhgbLCtjTn2XYUuC1uT3jynFMGhq9VaAQLp2GsjDeiiX9Wv",
  "key12": "351YRxVugFaq42TxSe4vQ4pUJp6mYXKnT7ht7ePxkwo6hftzwfnAjW5GaNyYa3VkwzsF1TNaaKmcrqS9MkTu43HL",
  "key13": "4yubxXe8LZ8SNnSdAtRJF1FbwmXdqv2QDc5gdFwCzTx5CJ5nqTaCLFNDFAk2qAa2ifyaiBStV8KfyNt22KS9LzbW",
  "key14": "3d73YQxJRbVRFBjjBvTu8WkzysdtKs4evYXe7598kkA2Xt5KfkmLVJHZQBA5vFYXytA1nHLst9RcUV4QRhp7m4Wb",
  "key15": "39jLh4vRt8Qd31uBwnNxTpTTPdtzH5J4y1mHXK54mYoqMVvU742AQtZoM61dBQScQW6TXMPH9fpSUuC5qWQRWXVb",
  "key16": "5oY6u2QfcFUNGbDedPmPjmAgEuHbc7Lh6mWFZZyvJ5Ff1ZXeC5ZqRTJL3UiuvcyreP4y8Lg9qSnzqdUuxn3GxcTj",
  "key17": "2Hvhe5S3rQWhiCnUtxt291MYCuwHgvyBXpCZapeW2KKwTBv3zNEcaKHCEfNW6tQCXcfdETUoMWy8KyMxUjdv7goG",
  "key18": "5HKu5JqN8yWcELY7nS9vyYgoorNbUAiFgkwVsdzKpR9cySToRcfuzHhyZt2FL8wViBQtVUo1pdupLZ2sgCcythVM",
  "key19": "4RLiUJcWc2ajUUWvUgCZP9ryNPeC9mHToBN4gPfXGxPfPmM8jLUiCUevKc84ycQAkv6NLwN1PCnER9yTCDZrY8Fk",
  "key20": "5KZYg1CGJmPPWzFDrH6HKECHcfskTyw8TnFbb2uvscGDTDMX3WvULCQB48ohJ5w6D6jxbt1DJoq5zYBSY3GLf72f",
  "key21": "3sJohVxR1aW6k9gVczjYyyGagtb9UYaRTvTBjFuD8g3w8P3aDhdqfS1UEo6mjF1GgUX3EfDDXNYczKD1S3aRB4oq",
  "key22": "4URxsdpMqALkhPimEL79pf6NtSGKZZKJS8Wm9tmUSgGSXsxrFyVEsN5hk6sBba1APYDsLr2SvxhA8DWna3zYp76g",
  "key23": "i5YyvwgJkwZbdDFdiqrwptaFc1L9S5XTjx2ArG5aM4u2bbpiXFnJRvs3pTokj5iN7QAWvjzmuwqGEgRw4q5jq8W",
  "key24": "5sbpWJnM4AaxiCJL7N6JwHieSdNgq6HPdewyBswdnPZq7erHDWDqpCnLTG4GTsE25vXYRDkGCkzgrP7bY4odaP2p",
  "key25": "2oz7TqYSukEeu79UGYHXEsChqVFcfWMkc98zc8iMddNgmquKNMqCvo2EkE6DtUrCEShrWpBa6SkAmHHCr53Dm6ra",
  "key26": "2jyLrTdoJFCjc7gejG57eGB2Pu44gXxWSXBZFcujyKYSjEszJVLHmhW5eMAtk96KpGuCU263nYFFEtMQKKn3rv4v",
  "key27": "51bdna9UGU9CjFA9ygGJfPTgSY7gCt3319aUXkvLh2hssrvgkLgXAM3dxN14eviDuHVyPNDUZnCMYmzLZQQyKZLJ",
  "key28": "5SB7mrabzXnS1Fq9vs2gAKvwwqubQR6k1bG8fvpeFKCSFzKSGyUUvX3ypRBsPCF2eyi6FpZ6guAUWM8wVSL8R6VX",
  "key29": "3mZLaAnvxd6PHQrjChjeZ7cL3pjGW45NymzmVbT5EPwrTuQHQXYJ8Lv7aNRxj9X6GhuW8dMhZDBZLj2EuHoxX6c2",
  "key30": "3bKDPE9ioVBGkF4enafxULkjy2VA23k4rAuuPxmmh8rGkWEzQTwpEnjDayvH91HyT8VrE8ZiJPbePtXFrX8ABT1g",
  "key31": "cFTTJ915TCVtrA7JMoUrJQUPkDR8mW8fK6KwHCb8w6oZ6rTM6VPukKBa8YsuRrxzVL9xELL3ePCmWPr9ZNBkkQG",
  "key32": "4Sdb3hWFJdNYj7jEbqeV4hHfJVWjHSq8fd3hY29JnAXJa1SdQv3PDLHmBKUWaH1HLeuyxHAW51VN4xWUoJa2nSwu",
  "key33": "2VfUrDQo2DqQ9Y7G4maBm4SctyvTXgFHv7T1gu7NRLq8FWkvYWtynq8ztFcaXfUcBfL7avNvxbaCDfrSPX61ycB4",
  "key34": "65HouZo1zJDRbHAUgXSz2QMGPnxiqLkas7s7FJEL1ukrY1asB7FYc8KXvFXBm73MRJurRgLUDNikzXzP2VRymFap",
  "key35": "3NzkFCDqGp85scxHPaxXjFCdA2oRNS7LH38J5D9ocrqNMqypZJtP7tttt9NQGz6Z2WvNpNFZ8k3N2a688pSTKh8U",
  "key36": "2b8MUqCKVac45XgB3KHwMD3jSVbfkjEBa2STEAERTJSzxFVv1qeYmiBoJR67eVuzLrLFET55bW2rEde7XTT9QxhJ",
  "key37": "2d3iy877w2FyUccHty43VmymBnPs8en3CAkFpVEXo8jMNUw7YPxnGegxdhLRNHjyXgAzgeAS8kwtqVveARCk7A1z",
  "key38": "3jH3hAU2KNAyuNiGY55Kdmv4eb1sgAkh3qWDgoUibyU1Vf8abWGuYT5L9enkM2sbp2uLMepRqkDNg3GxRLcY5mgi",
  "key39": "5oqWQM3adL3LKiQdd5unZpyMvYdG6EkjnmZFnwEWfDv8WzpwwjUFAmV8TTZ1xk2RuMWB2Rrpac7AXgie9aLBtnBq",
  "key40": "4aunbZyk1S1CQNe2VyFWzsuT9cAKJ5XMDsKt8fJPF2cxUimh7e57LyxnJmD6DM76eu74TNfLuSPrwoJFg5D5vAhF",
  "key41": "UbFBrmxbjZrrfHzq3ocRpyNbkR1ibrY1SjYSxKmYF7EEy33A8VrkMFm1wd7Vycp4H75NgwM3CxV6ZstXdz3gFH1",
  "key42": "535eZ9hC34neJhnKnZbcvEWicLZZQdAK6JUGK8V9ctWoiyUpY2D49sg4gMH6kgcokoCUVWvrQkgq7Vy7dFq7SUdL",
  "key43": "3v1RruHHwv8wsmmjyk925TEKmVZaprv6Co5rHeJeCCd3FLaJxmyA4z9DfFXrGYFV3znzWq4WZCaTr1ap3nueAhbP",
  "key44": "2ihXCjTD3Kb8EwR1tQqs4JpdBrACASaTN5X84rDhZZrrXKp9SCB4qwT4fFDpapy4T3bSqctqYLcqxzdD4DJivbf4"
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
