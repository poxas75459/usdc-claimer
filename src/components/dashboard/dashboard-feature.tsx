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
    "4tLaoGYNijfbZYpAvPCLg7NCG6RsHPj4buH1i2fU5wG8sFSShtBN6KGPXCjkMDWVjZAsSzFmPX6SZPcHqKTf2vBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qm9iHK2BgR5dYmGj6bpBahKzFeqinUsXN2WiW1D9nKoiFw3g6aD6SiUkhxFbes2uuHwZx2JQQjpFSc4rK5jjr6a",
  "key1": "3eEtN1GdVXdFAn8Dn1jxf63H4hTHn6HkMYSbvSxvLfSpgkQkiXE8q7ygnevLW824YA3utR8yhZPGbzY4BmB7enQN",
  "key2": "3PurGhPRihD2XryAKRXnxogxPmEKxhL38wWUXCo5fzFDpj1PddaY2Hff97NuHhBvyVAQNDLp8oC7yaqJFqgiBoh5",
  "key3": "3whFfN6Y6m5LnWR2kzrat195BXUTPdDhjehQY2j2ib8Quj4L22d2Y5K18xSSNE6Ac2f2v2GpxfEmPuiTAm4G1mhT",
  "key4": "5Neh2cNBgYHvqgLQKFEtWtix2EjKVvaSQnV97t2BqSiUUCvJrt7Bnnzo4fCpkSGoNEaX2kBWKGrSEEHf6X1WDeXQ",
  "key5": "2Q1GqKi9baUM2mswaqYgvuTDQh6KpU6UcWJAWRo8obb9mKR42G41xBRiuVaa9AYWfpRjZbgoMkrJ5YqPQZuiLpMp",
  "key6": "5GyfdnKEPRWQkeYKPw9n42k9sqXA2M9kgHwJGPiGCueP9LaW6q9DCbCnWBmCATsBZyMSnCvW8jfAAzEFtDT1v16y",
  "key7": "2gNryjvv27aTzw6TTvD2ab6aDYMran9Km3GoHb1vaUhiKzLxFN1TVrK3LHyhT7EJA1uoaqBJ6raB2tfftX78mXfz",
  "key8": "2h5JxPFqabgW6yN6eJfHcBNuj8kuwSa1vAXcnhHmwVcVKawApJnoayFbZUnrjmwHcGAThQpxuuaD4jWCMbntemcv",
  "key9": "GvNofpeHGN6JWkxj2bP83rRVyb32KGofyqByvKaTY3izv7HQezLxcXXrLnyeEpbuBkCtLJr8aVuWEauFaNYQQuD",
  "key10": "uahVGZEJDRi61F2sHvGBWe4MJFubdLpmyXCVP4BRiqtPNkjmwwFq7s8dgYYCjG6YLZw8royWYeV9VAh6oSqFFje",
  "key11": "2HKADJAhp8UpFMx7x7KtJagqmYCe1DuCqV23U3xYL1LqvfwQzDMNaPP2GCcixx8A9c73soivaGpsq7VwMXaN2D9f",
  "key12": "2eE3rvFeoGp5x8Et9Z3tjnsowzF9nYDuynP3VtWYoqZ3HgxHgvWL74JuitmPdnkEU9i1iXMVQbpe2KGyEnXG4kHW",
  "key13": "657GUr1UGPx1tK1thCBaUwSWMP3jcS1gC2sJfg9tEiEWNaceQyuu855AnNYho571ed7GSzCNtN8c5SkbgRMJmkS4",
  "key14": "ffLbpMA89MCSSEeTRaCyxBBsXrUkvZj5uYvwg5Ct8tJseXPnztwMu6ZUkwFiGHcrABrHSo5Ny5hnoM2DhnVRdRs",
  "key15": "3SebRGDf9L2VEpRdVVDR2c1ryF67tVoTB7pTq49yeG8XeKBfZYLUJdJfBgxgctwVtomBcpa9DUVYm7KYXXyxeCFq",
  "key16": "5BJsNXakCyXQrvyEVqZYAjJjJtQhoKNk5fhyEC14D1nKbikkUwXx8ktaXfa2iZqit3Mumpctwhatmqf62EDE9BdT",
  "key17": "Zv1bYxFnKTyveb3pc33tMDyu4ohKjunKYva9hTbENrPXC2W1eMTL9mb9RdrMjJTms4LLx3fwWXnujJDvB3giyYy",
  "key18": "2vytMtD5tVEYB43vFdbGQif7bo9N9w4LZskbk2PyFL1xLEeHC2v9d9gqJv1cjcmQ3V7wv7aZpgVenpamHLRUiqT1",
  "key19": "5pYCCSBfS5UUK7Cy6YnH4hHyataWMioPipYSP7xxwwMRjyQb36dWGvpTPBv4ir6mX7JKJBD7Xvsy8Ss8WzXCmGBN",
  "key20": "3HcDQGWar6mqqSYkvGwzd9AmrU4yMP13rUaxVyoNEiJoe859VrdTckK1zSVkk8pr1AqyyBqkVZGq151FLPc1ksqr",
  "key21": "45WBuB6HS9CEpRpxEAyX1miS1C4NorCagho6cmP4sSskxmpXbd6ySXrWi3qBU4PygnThL4EnMw3pfGmy2FoXPA2Q",
  "key22": "4tsi5CcwkyDkznJkZBSxzPBUWLeaXcm9XL4drnDW8ngBFQ6RP9PKQwNH6EiNzNhoujk94nnWVNpR8jpkRBZFYFPY",
  "key23": "2cLRcPt213qR768397bWFjHtyAoumwgBVwiB5hrPEd5NPXjvsrdBbBUUWZptKRqaKvkKdRT4WZVeTFkrJ4td9Zpr",
  "key24": "xUf9PuiGqQ4ah7WULZxHP2zsLMAPmF7TFBG8gVpQcBycw9Yjt3QoAwCSMgLtexnxSX1stY3rfm6htF3YYoDWLmQ",
  "key25": "bCZQFgAtXfYdPcSjLgMwZQMzVv9LgtdAqLNygK7WJF9f1o8NDdpQNky73NsJ1Kaov7y9uKBX9eGNPfP1tqTNhMm",
  "key26": "4sPCuMbuVAxQNZ8bQ9onhJP4PA4nQiRHZ55Xe3uTPFmibUt3Hruw5x2kxJtPpCsLSJfbpiX4cjdgmWLca8vvuf92",
  "key27": "5JYJ8n3PASAAW6avh9A7HGQnZu8mXHf7gfDg38ymD1QHuxMRxxvL2kWTVHDtf3xGD6hDpjGekmEurM475XkUreVY",
  "key28": "2YmdW1euRKCvrn7S26BTaLhS4KUkCtyF1hDuTusSZTBjgWpvA1haVLF6Vq7GrsvBC8xKWfM9VQ4ngexHzhgiGeT5",
  "key29": "3x8JyqkH4dkdMJvGD4thBQYxmjeVxvwxMMtUUh4G4LhAsdEkfGM8fehramcdkFdfS1uuFptzWFLLkeW169gtr6DZ",
  "key30": "5QX74Z71s13H6z57RTitFays1epUpQRVY3ZLpCmRGumGtRf1WDtoKfzBZWy5qpTitKWKCB8jrGRCieDbhihJZu81",
  "key31": "qGvdXYokvnimDVvkMT7rYH4hhMZzfaRHwnfcSoQpTWfyncLA2RBmw13JFsS6AbnpnsaywrNuvQ812qAiNDAAchG",
  "key32": "5e9EqSKW3mpg4CqPUq1yPYHMphLNtUGhSZxTuqMwewH5wkMwLg7erpuPpqDC6Ku4Xw2639fRuQxdrwVQ8P8AZwyx",
  "key33": "5uvv8GNhSRNpK4QbtESpy3feabqsr3KbvJFB3U3a7BTfyd4krSgkzLLq468VqYdsVR8NeiEtbPqNanE4cqvL5sT5",
  "key34": "3n8HskyMNYYWg9GXpbEUtsmXS9UUD8GdJH2rN1aZusZG6te5aRmrqJBtTp9mdqhufGBU9va6uAprZjkkJA6DZNQc",
  "key35": "5hwvjxcwsUJx5ZTx7szmNyM7Q1ZpootzJc5VUgbrzyEnvheQAeeJfbwZKkBnsqmkg9582gUgtZuXHBVPnFLdK2Ka",
  "key36": "5cYBC8EiWTXBpAsxY2A6DfZWNAu5Kiwj1bo2rvvXgUAwgHoYb8Jxo55FVdmN2W1igYj2aomcszYkpAF3ZY9WogPV",
  "key37": "59TDahcwVxnHDnxf2gGytQQ8ittcEWxaJ6zLRMHbubzwrKvwS4ttfDkRENnFMt34RbcJGKdQsyDwnaGPUiohNdfh",
  "key38": "3m3TLf89e3Ua3aCPTFhY5ECt4hq3mKAn3Ht9MEL3biRGL5SNAD8SDrRx5gq73HvYtc66s62cSWzsSz8giuCqA4Y7",
  "key39": "4xUyWqBDsmvdSEVrZ1cc93wrhbKmKJ4gKgzwaxR9N6Cwx8myGKg9YebYdoBqp1qUbtgikHmaEHGCQcWQLKUydBeC",
  "key40": "5zEpxYJezmbxq49gZvZ6mZzC1ZxQpctRrh27fYc2z29aewfN4qajGGPU1xyR6YTXQd6GwR5cJfWG5p9oG9d7xmyN",
  "key41": "66KZmvU526WxTDEhw7eN8DTBqBRMr2fnVoD5HW2nSXmY6DhHpNg5Lbiv242TwRka9gcVd3P7kh2SE32AZoiDLnXP",
  "key42": "3kKefAUPLJ5HS7AkPLxEuY8wvMDosegGcvBrV8WQDWSJWeWSKksmGMZ9oTbsARWZ5WpYHQjnMX56HSXz6RM4Pety",
  "key43": "5wjrrg14YASp8C4JcqK985azqBRSx9h26whzZkR2A4PJEHUGAXoZR8qTPuxUs35Zik9Hr769fZZBxdd8Ac1rJa2q",
  "key44": "5bRmd5BHoBnTKYKceyShFQcjH6Ymefn3TxvDFNrMUDSbM6qp3HXhfvpzcwxtivq5mTLntUevi3ETrixBCevZXStm",
  "key45": "3xoJXsK8wbnWdr8yhD6mhvNWHZj2vJPig4SDWuTWH3iDBdXroySYf5GFiLxJYykzGBqse6m6sDbfb1m446drZtpc",
  "key46": "vDkV2Roaq52ub2K7HWonvLoM8x6iGc5hfRozGW6igtxA6xHMbfb2NUFovKCgifV3mRRQUFWRRAKZiHnet5JN1rB"
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
