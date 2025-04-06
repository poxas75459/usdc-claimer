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
    "61YdyFKWJPTo3tytWWJscodzq9kwzFkVKjGEnizxsSbHKYe5CdcKAJ7dsL3Rbe4rEGsyZkJPYSAzGfUa2sYym5dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUnGr7HVW4Nyt4QyV8kquveUS149Wu35pNuGksHXreh9g2cAyGnpJShPcoDrfMUvui7wiKu1uWe36fdxwcTMCqj",
  "key1": "ZVDPrcp2aHMCGgPaB7qMzoRGGJQc83kcTaxrMLxrLEEYxz2Q3hTktEn6rtN36fDoUgZzviRsu98iv968xXe6ncp",
  "key2": "dwXXGCFErYQSo3jL5M9MKpmTqaLkQDSYgqeQ8x1WjJkwSZ1uuv8fST4Fwt7p4nPAZGNJrt4ojgpL3odEokdHPZQ",
  "key3": "2ftx5cmzuV1WGguzABkDmrR6MrZh5M7PCz6wjHg9Ri6SAr6TkcdFnvofR1r7gtwd96Y5NDqaz7SU4qsxNEMJ8H1c",
  "key4": "4sXCmnKqymXCnHUmUM6EgnxXdPpUw82UJW2MgusHuxZ9vqtG7UdkCHVP7ju7YKNDUK3UHpKMwYPbJUUn7W9sVxH2",
  "key5": "3SBDRtDP6qR4nvEw56Fiw5ndmZzc4XnoVNVUKDr4SVvLRmyERjx518yhBmPh9mU5xLHrLY49i4PBwSrTCCwsSNTq",
  "key6": "5RtSWSYfcADeFzQh6ckwsWKaGRGrwwq4aZgKg9izWBLcv5VkGDjgGksKwLBbCXRK1x29JVZbYiR3yfw1KnpgR4Uv",
  "key7": "HX2u8Pa9aLSsKx7mNDtZxThjkaiVAQ4pqcZ6KXreovKn3usszfkoaqMjxJ9b5GMoigf1qKhi9fttHcXKkmozzj4",
  "key8": "UG8VxzZ9E5BAa3QUxLVmtwuFY7127Kg8E8AQxLAYRwARCazQMzE7gNAFnCfnPHq4iGw2J67C1gXFTigMsQv7sMX",
  "key9": "4c1rQ7vTCgp5Rmo8KsBtByj5KCytpbDsbWPEMaqNyphtbZiwRuhuZSYUr3FiCPcRh55nVuPFsByztDKMRs2uAwLq",
  "key10": "5D7fAGDDaPyXCcXs5y1tCU7Xb2rVVCs9fPDz8t4xyQSyCVFGn24ADm9GzMvtv9NaccqBzctkBRkUHrbjkizAzfiq",
  "key11": "38T4AEKJoaZtj4bjLy8o6iQ4due8np8j5kHewG8f5gjGqRwDnQxCP6EEAFP8rx2oNKunakJr3G3oVCb1KCvzcfWw",
  "key12": "k3QK9zaYTUK1GBPtDze3fghyvEnHGhmwTPV89dR3UQk4QpCvrdu3z8XghA9rdcXejTBb1D7rmbZ5HpXpizbKN5i",
  "key13": "3i9pfHVRwHBLgPjt23kqq2FEop6oJezBiMgqLdBStJwCRYLMFP8PMGEUcmxchEqJUeCogehZ5rQeY8wZybr4rQVm",
  "key14": "4mikKAU7eYeJv3KSviRz2QSQWWXHNkPtFfwvzxDBrJit3vSAqCRqxb4TWZ8AXtYGaBRrwktttUDmgKRj7or6uvJh",
  "key15": "32c17Md399ZPiwtXHktMpFJyeP7iXtnHz2DWz6FWcAr1eVhWXoqveyoDggaMbZDXH3ie5aE5LtD4gJhe5n9Km9TF",
  "key16": "2GygbjTKkpEnxyxyeVqD9Lod7RDUKFsuD7SmccGaRKJZvVpi8Ai3XcVw93tVXdgMDMFiBeZWSrxPs22hRjvg3Bk7",
  "key17": "2zrjYxhdE1EMYMA63GcJMF4EAQM1QFHPagiN94ZQf1ZC6GmCb4BwuHJsqNutyNeyFdsiQY2netiCzr5cgeAPexin",
  "key18": "xhBRVZ7LgyTqkYanfSM3KNAvNF2be5n7EFe8ypbNgc65zoC73fqMdZDoLM1746WjNNtSbzeWwiYv7JcbRvBQE2M",
  "key19": "3dpeBAAGp4z3ea7bg333E4ZzYUbcrVyJg7YXB5AvtjfSqmmxdP1Mpxy24bLGb4fBUkhMTqxiQA88gyGVKRiDYq4s",
  "key20": "WjKz5hZvtAwKt1FkUUJAEBjqnHecZzh4phj6fzbKHGayMa8rsK1CbC9SrDTZJJj6C6RKzPhu9daLPQCjXhJhb6M",
  "key21": "4dvA6bnQZDswYu6uUDXrvZcsP5a91oQZAsL9CScCy7gsomAx1C8FGKyc8bLx5BLr95Tye3jARXYZDptnxETSyjyN",
  "key22": "3exhzZGAXAsZhjdKVkXcmWoLM82fcgLYsmBihyew4zVWVP2GbPxmCik41BUfnxGPR2c53KPjjMMb3G2gbM4rCrXf",
  "key23": "8S72KmmXSpr7obY3hLRTvQZbArZUgh4FBi2hADjfcyiDBoEJr3zuNuvUzgCpdUjXVJ5yVQEGVUWZcSThGaSe2ZN",
  "key24": "5r4bTEShr6cY71ZUsx7tYQZ6q4fHYEnKkfowaxo8PKonzzzfSL9qP5DMUBWHKVnKcnnrmKiybnyJuhDr7wY6PEnn",
  "key25": "nCZ2mxkX5DgwgM3uHHm38anWYveMnBCGqgVAqVX6RgXBZzkh5fFQdZUcTjP6RDbbbeMdvyixEQSMRXZJHSHVBqK",
  "key26": "LhnTDiVmwSKwk3yVvTzK4EJ477iRj9Fzbrqc4nCDXBhjguD8qxSc9kpuVnbvtaUNYvvXt9bzRNUi4TEqwnriN2q",
  "key27": "5N1eCGxvJo3eTUAf9M33DyQpzMp6wnj5QTt5GsMU6byRe7tkE3w3yGcZ9XXGcKrv1TyCTjRDyEgTVrX6kivgSEHd",
  "key28": "48N6HSMj6Qo93EjkX98sQ8S6tFdFELspuKaKrY49EsW3Ma2fwYQGpjjEg1r1NosQK8BwpTi2KBCR8Wc6rm8LYwvV",
  "key29": "4b7r1HhHSKmTdPDW9eK8qYp1fiGSDFUSit1zcpyyCtFxquqdQg657Twbu3RnhqWst23WN9Za1bpbyBqN61UszBsu",
  "key30": "3Kru3SqWyGR9XEcsCNPUcNCxiqYo1ppdkKRErGNTF1cAXd7ydFYnf43ESm9kRVnVV1vTHHTeYtfWgdtwABYk7LXX",
  "key31": "1vRpoPYWKbCLbnhDf5VvKqkScXLYfnQ7wpatxzSXFKrkLgfsKXm3FWKXwJgLumnb5gqEHHfhE5Qax2BUgcnbt5p",
  "key32": "4AqomsCn6XZvFrETMYhKsRyS37uFamqxXiifrjpNnBsKuvN5c8ir5kkowSW2cVCNdnjT4qqyDh85ejTnEyBCrwjk",
  "key33": "4RnP8HDzHtKJMHhqavxV7AJfJfcpFsk6cD7FdEBpsP5i1wrMsJbBiKaSyVRSDcibkFe4ZuwowWeMR6iZf1qf7Bkf",
  "key34": "3R8me9dd31HG6JbHAZEG4yGVC5pXLBeBJf7qfw8veFzq6SVawTazETmKPfkJ2Qd79mBpNPLpkyqTP5bnzxstdSKA"
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
