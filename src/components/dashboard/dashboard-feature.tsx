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
    "4dAENkyQUo8cAn9sb5a2iZB1sgVDruYpF4n2MMyBAQfdpAjuT7A47yruWQ35pPx2ZRmSvxti49dPH1XhVvkwDdTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgrRNa5KkmzvqN3gCTmsbVugxJb17hDuig79qDa2gRFyj4phUftbhq2HWY8vjtPL44y2g9fYEjyLZVELMxkgavx",
  "key1": "Z5kFEVthfnCUxCSq1K4gdUbdhLbCeJVaaF8F4rrjZJVmdA3LRbCz4ocTL5uSKo6GHEb7EVNWFbwShQNDRNDYLmz",
  "key2": "5a3qWowoyBhtoch8gVVgedVawoJ8ZL583aqkDpyvPMzLKQwejgbpXK5NoeKbbse4Pbjacd7WLqd1aUrcZARReJjT",
  "key3": "RrV3547oJPRXkUivsHtePyNshUYjk26vQrTJ7ASKx9swbTZKgXHeBfndawsMjspGUSskc2oeouwM65tymRvgNW1",
  "key4": "4UUMB4WxpEQCP5yXsRpVHPrNxkEbu281nJwTHc7UJ5WkoXDfDu3iNuLx5fP8aC9cK1Y4EfJLqXFXn97UNCkbEoF2",
  "key5": "35UTEa7wGb9TdJcWHopPQjE1oMDMQjw8cY8g1miMVe5K2UXUeUmVLvxUKsyZ958GHNUjAcLDBmUQcsGTm6JFNPh3",
  "key6": "u843coNHHsBF2Bdy4beCqiGq4JV4ZZtgWfr8WiKKjTPi8UFCujw2vHVccz6TiNgN2k6CXZN1ywG5hDSzrd9qXVx",
  "key7": "4t6yBQt6AdDoeGGKXYft97cDghnt9MkNbnoE6cdhL9SsTECQw7rJjGVwGEqhCR69ZUCvnwEtvjwSACNbnVpBHhvf",
  "key8": "58e6vmjcwGNm8NwNTFtyxZyCh9k9NxQB9GshA9aqwapWVKDyoZXAbihH2XhVvVGrFTUkhY34tjDfJcDLfjJjE2Wk",
  "key9": "64c4zscSs6P4Fpqz7P1fDLh9P2oD4xsCy1rbBsD4ztkdxysqKDcCxJz7Bf9wRQfPPwdUQ5e5BTTV9cQVa2mNmriD",
  "key10": "2Q8RGJDWBjuxrfQXDoq1gSxRTAGb8s32DE5KuJEu3fbeZVf7rRBfYoGNjsG5zGqjqwskmnZhh7dANygLt7sLBhVG",
  "key11": "371oTCW4xQLEhvMaxzR6GrZTgpt51CCtscRqEkG93LqdEC56KdbvcfNpuUYNzzaRyz4x28Btwfr2vUN5GG5ZWvFK",
  "key12": "3g3DYrqErDGAqctpBDEaLJ2MPd7wtABqpMbvaeLAahATXHFghKq5EyZUKRKTWW5Wx4uTuw9nrYQSGff6GofVuwWi",
  "key13": "4g8xwdBLGYPAuwDWv4wZRsyTprrh5ZZ3yZXNTy4YbAxXBvy8761Nv1DNLei6GEgNMHTaVBLu2f8DyfWLT9YooQ7z",
  "key14": "5uJ1adQnKqZm7enVS4ABFJQEuV5cNfYDKqZW78KP43pL6kxMx9ok54ipKgkaeE4SNJ4UDCXfoH7hQH6mriG6Gjvo",
  "key15": "388QRfrHGt88MC3Wh7vaqGeaT2LjZAyBMwrB8cWyMBpwJFohsJrhgNpzrd23BBdiCnBNsY5e2RKJHADig54LPN3r",
  "key16": "395nxPh7Knqdu2D3y3wE7aEWnKNJYPYMSHKhuPuX3BuNo9Jx9K1UzxKyfC3L1CxZ1kNU84VLw1D8CXBfUZEF7Kzo",
  "key17": "3JWvQ5eCVatBfLSH2hNevF2ffZ5hV7KEWf2XajDsDAeBPKyEm7GTAxuC8amJ2WdyAmKn97VeTAHUgvaegDNWzxgi",
  "key18": "375zxteQUFvdxXAJhwitrAv1ZQoTicvRvbN59LMJGSxtjeSAjYDKo9MMx42hX73gd1kkc47dPN8VrJgKdNDVCMhY",
  "key19": "5cm3fgqeEvq5hghcFwBAuFYgi7BsvpadHRj8ayKMjuSB58xmzLQJX1YsVjT7JXAHePw5nVu8W7LtQEEs3hC9qicP",
  "key20": "4GXgYyhUX446jusYzMFVVpJrooHbbFM8YEgByeu2ZD42NN1Z9DKd1SBhmxZJnDzxQSjbMrBsaPA7QCegGAbaXxnF",
  "key21": "2Aq36KpDJfg2FQybHx7r3mt5hRo74S6vMRibsFeBxAuBRN1YcobcMG8xp1BCkzGSoNKcv1wN657n21GU2pzS9jNE",
  "key22": "26Dv6xdCHKPXEXnMvq4E6ErSHbi1Zc5LWSeHntMtsdb9dg9C7QdxRKPR17ymvccgkA15jrRZReGzzU5ZFm2s49ZX",
  "key23": "5sJudTt153EM2erC28RQ4gwxPuhebCoaJSDGdr3tbCSacCeLqJyhdGWKQv1q1hXACk6wkzcCvF2hhZwSB1DRiG3S",
  "key24": "5rDbT4BretCZx93exxtisLmDCBKQoq9MWw4ihkMdu4BVoJGVRxd2YPZjs5C8jWtshuGBpGaMYHrauLVCrLGHCFMQ",
  "key25": "4uwoE7PCWNKJuzDRtkcqLCuNrncAbLpRw2C7pcKu9FdvLyJ9ogscgTnnEbbN5o4W5h6SfpXBudjYubK8zCSzkrg3",
  "key26": "dFNWwvjrJ4wotCHSjj9WjdbRyqCcFgWqsyoP88D7uw7zS8Bg5WSktfJ6V5NEHCsguqDdGmJkHQoqaTdUg1kGgm2",
  "key27": "2hdcxun9UDL73Y3vniaefewQhjjAKrXXWyPDop59h8W4BTEudWENa77Uhn2xnbvBFMmF7nhxxPMeVdLTrqygBYLK",
  "key28": "4M5r61jGp5LLwqqiqFvai9LVdYtF1m5GB9zibSpicPcU2NKWS9yu3smXyLYBYU5UuKq9KSNf52mo2NhAR4pWfacs",
  "key29": "65xozyfGAt9rSAsCNWw4ATYP38bhCBx3KdGneoEM25eccqcX5Ejpd2qw8NjiACr99YDRd7t5WmP8uNcyzQmRGUP2",
  "key30": "z8cJ7uwxwvpRZ6ZkLsjim42cfnRG2UmKahuKckBhDHDRMV1XcKXSNH6y4GvUWzuEspFKvchnq91nuFCJbxcZdxr",
  "key31": "5QUTpXpmthtqJvf88aeNJVRwfkGK1vA2Lt41BTaDdQMhLWGiNr9j9Vp4fKNcSKQHRdTkZF6jBtK1R1dhaBFqpZC",
  "key32": "5QJNKyHG9citS4LQG29N9KSgHGgSj1Ju3pTHvGktzC1uPXQSVfKk2786wmAt1brygZH61JjxiTH9fQwJNzvSw4G",
  "key33": "5UiePHXovXG3QYxrm4Eut6xNWzj6gwgxDAUK6zpDhuM9Pt1rd8hbjQ5eyrk12CLDyRUA35LM3ZU89RV6P7mL77i7",
  "key34": "3145pGrqNHn9zopjKpN7z1FETxw8DoR53Dq2fDZR7N1WCAThyKaPYBwjZcRk4pZEQxDYwwj7QyLa3sZCAbCsVMH2",
  "key35": "38A2SooDEDEcWpepdfewrs5Man83RpPhc6KDzCr229zBbDYKsTnk2kq4oroJyQSc3TwQncs5FtEVrLao5yHSPHnL",
  "key36": "59xtiMfhtzRccprtPiUoCEvtiAtSoNzmAqgxD6cumjHbVtzstq3Q2fxefeLwFd9vsyLbGz81gVWFvw23Fwn6ea3E",
  "key37": "2SRdgVw9XT2mUnzyyTWqPDDNDY4iijp2BfC4UKz1dorBZKN8pra8ouPKxorrPnFJXxf7PK5ioinNWX7AY2yvS28c",
  "key38": "4AvTXzAkt3UZ5NwnkXzWVKKwu247EoMyg1ZR88qgJz29g1fvK9MLS9shc4ahHAdYNuLz9NkQMTQ9cJ6dkqdCaHbu",
  "key39": "4HYc9m6rXry71WKWWZMUT3LULrwBhDujXJDRJsac8Hwahjc7jHkqtH89VFUhrX8Nuxd4KSwuoE9peuZkF1kkrGBR",
  "key40": "4k3VpaJPdDTAVnWihn6xtUwuY2ihHy85FwGfWZHnk5Tx1uW7otZ2WsLe1zi1TDgHKmQmJVtG8qcFgiHMcTUKC5SU",
  "key41": "3ForTUhpveNzGkMca9R3VkmSXFZFH5fpSSKjXaV5X6jv5cTBZFpKsuCt6ACxYGgLamDMP2DYPbzPuUCrZVPphDUB",
  "key42": "2kzELx6kby67Wc3XmCxyATJDx12ciygqePQwTh1EqmumYM3Y1PKXoqzbCWAJRWbK6Et8J6ys6RYnWGdheQHvsmNK",
  "key43": "2bW82xXfxf6iX5j91hMd6n3PxU8s3LzcLNi5adB4VhPwEvCxsKSRPQe7orUVXNRWDXVLrGFMSccwgmXmJ612Nsfi",
  "key44": "3W2r9cNuxqXwh4u1RDMYmbUJp48KnzXs85cpz3LMR2erwH4fCF1tQ2w8wadJ8mneCCF2ifqRGSUNSAALTXEmzVVa"
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
