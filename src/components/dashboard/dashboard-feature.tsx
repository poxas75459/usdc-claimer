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
    "2vPBY7FQpnzMkYao7NnC1TFBA5tqBfPq1S6zU44X69H1iShwgBYSFEKyjZpCEexV4AgHgKjkXeGHFpWp58rHk8uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdYyvGKHFhSnmbDdfT4K8bxJgA9qWhPiVWzUt52FM23SC8J7JxPJvTqP2mvfK91KNL63Y7P1ZXzW1y9PaEoWneg",
  "key1": "eMfqJarJFYTwk5NX5Fmj9PzpVtFaZ9FbemrvgyyB1X9EXrrijP7GyQ18T8ohjmJii1Z6MrNMcAV9d7UDkWDV6Vz",
  "key2": "3k4Kh4czUguiQuvf8hjtAL2DnYkwW6kXFaQXjyAAogJDRmSDVb89ioCeuA98AcGEywQJzEeQexk5qCRfD1Ywvxmb",
  "key3": "67BsUXKw7CmPnSGfkRFf72imA68iAhgp1xoBVSZkqjjU2GAUuTiNEKA4SWGU1EmdyYNGnFzX5zkYb4X9rtUFPSMD",
  "key4": "4UvYBsUMrtoDBTLvbwNMCvPT7x6D7VhhhCeXzCVpAHonBin2pohgoBeeZ8Qk5XpTUNNZNd8QLVLNGBz7Vsnwb8AK",
  "key5": "3iKrYVkZenCaxA5q5xiFyW4ugUCkDqe2PUT5uC22oMNufME5ZDu7vaX2mBnmErPBq36hTU2xSNk3TxWfqCeRoWNZ",
  "key6": "3QVjTwFUvVH3eqivzcigr7QvzUusmjCbTtL6QWefmws8v8X9Y5W4FGVSy7tg8gxMRN2bpeT7AdfiDGSnrbndNxJk",
  "key7": "5Z8VjAXYotNhA2EboaY6q1SXd7gD8ZwiXTj8HH51FKJwZfQGRpAUkrMAeP3vmPKFhqZimVA3xhBwSAd2uZ1LANuY",
  "key8": "2Bi3tHFyLwrUpmCBEJncZdqjUn6cdVkD3M9EK9Lkt542rCJyT9gs9nw5hVqZGPAsWzouc8x9rDiYtEepA2f8M1GF",
  "key9": "2Ho4oSaZx8ZzZKF9MrKVsH8yAoTg81Y2SJDA1DguKUUQYhx7GQV9amSeKtfdq3g3WqrhZP4qoqdd1LAGbkt3Ma1j",
  "key10": "5na4synD1zXWMsSrVue4gkRELqkJHz5mBKrXzQFfJse1wmihPn7avfzdzB3KQKP7UKuxygKfLHbtH6zMbviM1yho",
  "key11": "4a7ykKTFLk1G3zjsRPqpM1fS5jo342oW2E8cx9AZimBhPJp4x9H4BTveCtihJhQKkmcDxMTF2KKGX4sneMkvdt5V",
  "key12": "DUHLGCPeNUemg4M1XvEMCeXvE2nDbtjm5VGmDtn4ZMv61J53tq1SzndkH68WfnKXH3n631fz8NJ7QGZRa753siL",
  "key13": "2A6gRgnfBHSXEd84AocZkb53wgcs2pSMfvXvsccfnkK9qG7jKUvQ4YHQKDTVmK2X1mndw78UYcqXXRDev9Pdiw1u",
  "key14": "2hq4S7RXK4gzfc5Kq5PHrVyjoAMNitJHTLcE42767mRwHdj4srpDQEMYs6NNvN4bRaLDRfiFdo6Y6CHxQs1wfJFs",
  "key15": "1Ss8xKKU8wx1nDMK5jskbYu6WuYM8xw3i5RAKEv6F1YzypnNzn6xvU6jaEWW9MiD3jheur7aX4NF618kNaeaxWS",
  "key16": "4KHXWCLLEgo3hbdPMHQoZNap4ZRzTxLjrRYguUTMq3u4hETRKC64mJumKS7KZNrvwLZbnDPWNktxK7qwgipY5owb",
  "key17": "3XmEpk7n6hCFqSTm5irLvzxWyEtzZ8Cxb8ojCdSFrD4pvqb19xNEEzoAxQWMur2JvcsiLKnFyzytCq251dNKYZLo",
  "key18": "5tiWSqkU1ynhayYqy5BzLNAUNz16ZE73qG2KVaU6wwJ3ZgydiGH9vH4dgyr1UjStgRudYNHbExCsqaAf12WDQsPi",
  "key19": "37vWEEApjRDdQEXM8zZc14eNe2Gq3cJKCXEcvX8qBQ7weED8oo6KTHJwYDLR6gX5KpRDYfXCrCmYonnLSzvQsWDG",
  "key20": "59BW36CFAcQxkn9TpjuAqGXCWnjLuiTa4oGQPeXAPyGd4hdECFmvfJvqmZKPvhnQjDWy5wGf3EcuNrFAChNDYAwx",
  "key21": "QbRMCNE3oDk98mCd7yraD6Gaen9fWHCqNMgFq29RKHGgeyxSjBL7MLK1Z1smh6h526RyeN7jC8AmDj13K2irvz7",
  "key22": "hk8YWwyREKUjgnta8w3JRkSfzTixbZseHM2GjY8rnUrrS6t2aEFkNb2r9JK6BPWvfvBh7tAGAQFKHvP7TooHvHT",
  "key23": "rznNt1P7f7J7FDtx5mNTkJ9rRXsZ6xBjWn2Q3G5UuZQhL5DAWH4NGYNqrMwvQhf7RgLAApv3PfmngX9UGf2Q1L9",
  "key24": "61JedifxpXg7yiLreVazxV4bdM8Q1dFCJbGoVzapXq14h771r8Rmj4BUhVW91Rx7z8U973yTWxzNcEZ3iHiPdeh1",
  "key25": "5otetgXpUKtvuJQLGA3AmVpokkcYMN97JamAAKAwmJdE7AVpHDkQ2eWAqeEUfcxSHzFoaXuvtJxc5T5R2itV6Twi",
  "key26": "3nVzKQjWapNJPdr3xQqSye2aKXRw1TPtj7VL4YTXaZBodj2D69a1aqAabiJ3JX58NwXvwCBBzSGyDHaEhWhApJ5J",
  "key27": "5w9tRbZ3oryFK8uDVmmQ8mvR61D4KpQ35WE4rDUPjmqsSGVidiPpWHYx4uqYA1Hmcschyf6inmtqvwgV4rMcvfBk",
  "key28": "3LQnqASKk6p4MwVARMfQ1b7EJnDa33ajvDmJePTYoWaSCUwrTPZ1dZj9k4cntxMEomo96DNxGfZA2emRQYmNGBbx",
  "key29": "2bL9PUnsdQZUXc5wWVecFWDhcY4TpnLAfJnFMjzrPXySSBZ58LhKNoHYVHv3mNnh2Cdja3sGugJizC8HWCkRoriw",
  "key30": "4xjGRo9iV4pRoihgDM9VJsxB4PVB8zUaY2LTWJtm2XfCCMYPho5sqgQCNfoY7DMcEzdDMGS8bMKbiec6q7hiiSFg",
  "key31": "4LzJr1w9x38C3qM7sK3xt81CSPARivCgAEhKp4iDHRpXAaADhqQydpUomrs836BnAZWcwpzLmA73t6Np8qn8386e",
  "key32": "3ZXqHP1z8SA8LsXYWrb5rbdNesJDNxELcyRkdLJMHEBnKPptU1yTqy39S28xUZDk5mf3b7JBn1t75uo3ine9W517",
  "key33": "67b1wUN9ujCbD1f5WM9FoaY4ybTkm6Hr9XYNKQzoHuYr8cnVqKsHD7DVD3jAy2SQGVzBTuAkt4Xwb2h6Nn5sJZeD",
  "key34": "3xtbF5eRMdGZxVzVuGAWegQJVnWpg4UgstHQmnWBr7FH8pi88uWoRhACyVVRYLqfkNF2UUJDoXPr76kybrVVRFea",
  "key35": "2JcHGc4VLcjSmYdrjioXS8i5brgc7WPNLEZkhaPmZFRCrNqdkeThFU2QHKKnTdgCgKeeDrgyNULuMLmTutwGLo1N",
  "key36": "3iFoVusbhsBavZN7WbZUpn5qR4URVPuCvhSMGojPFSJKWgZwocDrCg6rTo4THfapevGu48Kdi4r3BJKfqJ4XmCqT",
  "key37": "27SivPCR2axNbaFWnA8Kmb4R6ffxRVxbJ7vxp9Zo7o5dB6dvMTa7k12JHLavQFENxfcM1DMNkWLzZJP44rgM4hhB",
  "key38": "41DGP4edgbhryK4Quss1MTLwnR7mjLkhmSMCK8DwTY4zp2xgjRwvRrD86xkNU6NEA53yPKyVLpmmY1G5zcX6F7q7",
  "key39": "4UjbYKmQjzZYPTmfd73VUyN9ZAnDWp9f8i25o3FFNNDyHQNSDu1W3JSMHjprD9eyLFMBoadwD2LbKXMtyh2b5cHr",
  "key40": "c9bA3FfUpxQqBbtC7hDqEDH2HB8p4w3EVvq8Xu7YMxKsNQJnxySa6h2evuA8nouFJkFjQGCvj2z2HKhzrpBxu81",
  "key41": "3rcUwbRnzsAr3qwzay5WWV3QzGpxh2pVBGMAQvYPbDpyw3U4Sz9Hwone9fQoGWrZjZHPssGKQVAcyLppXpcrdN9z",
  "key42": "g8ds7xVK8gA3cAJkZc6PRPvsGCWZnYzNFG6fHADkiQNMeAoBFRdd6GbwzkqwRZHEs7ZNusdfG7kN3v8P4ayt1e7",
  "key43": "5oDzCQhK45itTWAwSqars3fCqWaj4NMnv53bQ7KrP9147U8LGBAstfCtjKF8mERyZA73RRHSuMDhv1KpfHs9zSJN",
  "key44": "4sr2xrE41aaFeTu57eBb8v69SzfJ8xzL97Efiyz8bsWWhyERyKxQWbk1ZAKVWnQUvcdrbv5EgBZYxb8qgnYDe27P",
  "key45": "PTDzxVrRypZSDqjGndBgkKMkXkWdXU7u5XRHWQuVQDXTsiQVxu66gzkDvTUhQwE59CQdqY2T23ut65GqwguqpZ2",
  "key46": "5K4MrgkvX5u4UqudjkbRyymvdwhT2ZnWo9miq2Wc8kfUpGZbM5vPuG4enAgKWSst6u72bPcZ8jngDUSUJSvjH4Sv",
  "key47": "5EVQqksYED82jo8oDNAE8EPwEPoRCpRvbJAyqKTCDXXcaZT6MoxHs9tWimn4Uiqwd9koGHNDKZUUoUnegLDmVEMc",
  "key48": "3mQf2TAQ6re2wkA2xX8UxwNVJThqEVbrw7brxYepXZodojNq92YqL2duexPobH6WkZLB1MtP6Dx8CZg9QRNMCDRf"
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
