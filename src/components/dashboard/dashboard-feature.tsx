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
    "3RUiv6nqjzNrzhf2W6JNBi2VWHK7TrmXv4k3MRKzKuXKxycNtWYqt971nCmGQac5v9CDvcaTHQJb2FAPiyRzvCLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJAACNk1XJMaRVo2MWgpx1b3Y4rh3UGNdhZTkb4bAVgaW4jsy3wjmNTr2CnLC95LGRK4txPH67pS2bBmq1dsCN6",
  "key1": "3KM14kKDaZMaYzN9Sp8znFszpMuzw5EQNAu3gNP8SwNL5CsCJLugfieZcWSMJCEsa5yVvCSrDNm4gTTHUBN4vJxK",
  "key2": "2mToqp2NigF8PzDh37FcwKVZ7mWkGGHW8K4e2jBz8sjHbrtuYHLCxRuFoJT3Hg9qeAf4vidHf4prRc4CG3L2K8VG",
  "key3": "sYYeftU8EnTS75Mz78FdW3N4hPD2srgkjg4DxXPXJcMeWxbKNbS3BhcLtZ8542BjKSdaLo4hFZtcUP9mWraMBpt",
  "key4": "kGgoX9KaZsukjFgRbmQqt3DASevR5XEdL2zypbhxSaeQAn1btB9zd6y1HUHZExTS4VD4nDm6FHWdbyVsPcVj5So",
  "key5": "4vja8xfAW45gEf6DbpwgchYtrHUebKBYX1yzUursv58gjvwGarn71RyhM2ADMtDFnU7QKqnQGh3YPgBef9RdXNW6",
  "key6": "51nvY4uDFVEg1VwAY1TB4WCoU2ShbAcHFxUwQ49DbKEGWhCGxVx3ije6vW6GFJN6qrVCXDtD9AWNMNwne47rNZzm",
  "key7": "3b5NpTiWcEhSfn5LcPuDxwM1jzj8EyU1ZzWNpDPC1UunXxdyChKyxQNk6BsX4mc56nKp99qRGF5c1jb2tfpVReYZ",
  "key8": "4FaX8DzRGbvPvwQ3tNkFVxsuh5M6ig3K34awjxN9dwWPBgBZ7iexUpjJkNeptKmxwdvzDgGYDBgPjDc5uSjxy7NG",
  "key9": "48kSY8MtN1v672iF2hP2L1pVkiE7xwT6GBGEY9bgneoNo6DDRUDzgjW78KxDb5aECevLYpJStoBnGrDkXV6U9UpC",
  "key10": "21xVn2XW9C4ACGRZj6TCwZymqDaUZBRHHegxPFZ8wNYNsfXGKtkLZZMk4ahwMCmZMULFy4zLYbX5kLrGKkUcjYDm",
  "key11": "rjegPAoSATDec22gb9i7dawqqGcLbP4oRCZx4zQAJsMefRAtTHJMW9iNNXDeh9veXKYNrjf7JWDKGJqotTdqEcK",
  "key12": "3jC3HyrQFVEMXdbUtvra8sDBx412Lq94wpGF2eLSAL6oL3rBjLjdJ5W94UWuuKz9uuUk3eSt9yEeYvJKCZ9uVKtF",
  "key13": "5JBS67e5XpKdjX1YVfyiHexxaLbkVmbyQEMgp3KaG9zkG97kL3vWKJj2WNMVPHfjwT6jJHQ5E7zz3ioNCWMu4Qxz",
  "key14": "25kBYUHTkj6BLjjLLFWMxbvucLeRjRzcvmvvqvtAN19g5k7zUEtSCRjaSinTSh64xtAD6ZxQy6f6dh7pH8VdDRcr",
  "key15": "5xeXHB9tE2zLxxtpZwfcHTgPYFE8jv3DVXGD2jDe3pitoC6wFVvwUhSuizCedpNXhiH5CH5VnujKKMAsLofmmHbX",
  "key16": "4mG7aVoDVabUYJ3MrBnH78oGReWpqNbK7nZwWoQLexEXjQciGsk5VsEF26ShmbECGy5Gt92TPYsyKKFDkbGU9eqB",
  "key17": "5jx1efhmuRDqQmJhHjm2JwD676noLkRYuxBnQZniRgAWYweP6evdCbQaGwtuBddCojPReEX3aBjvi9zUXfPSUkjJ",
  "key18": "2EdhF2ojV83sxFYYJmfVNP3sLQDuerJP9tns8Mvy94HYnHe8NqeuQpAUFRm9Vhw6wm9HbeJnm1XMb9MxJdEWcCrm",
  "key19": "3zrjLLHDhVNNuQcc7qnZ4KGk1tTWiCMf5RU1z4ptoRJRMBSZVyUYZyTotLvLBsKbXidmMgHA9qdS5zGSvtNivWpf",
  "key20": "2wtSW59tSLi8vvjF2gdCwTXRcmaVcBtUVYRy8uy3oV69964sJKdtPzcFJPJ7ex9EcHCTvwtpExUW3Hu1DEsvrsUf",
  "key21": "4WfohzBBXzo5Hbzj6PVWxZnE3rGDrEnJajU2eP41JZDfL6HXfEwCyb2cnsZFKqavc4vcTGuu3rxTr5tSnzJuLHFv",
  "key22": "2oHeuzkrwbu56dXTbhYCHQC2ZRiXJP72UKr9bQZeFGbRAP1r9ZAkoW3iC38tHoTgjeipZaThANu82LuZAcQjmwXH",
  "key23": "56y1TjX5hRLNGDrHdCa5WAiBnGdgAxSezVuz6v9DyjWbPYS52bEJDRyU3QqRh8C4ayfJcJZWLCj6VUrmxpBJDjiH",
  "key24": "2coAMbowtNJMHDi9rNyVb9YCFmpgeXJdcokSjX7MP8qAmCac71rLZJLyXWDQE6w6aKB4wQEk2ygLvs4BowWN6wG4",
  "key25": "3VsTaj972MGFTJY16hdsaFwMdLAZmmVCmna4HhKwuroeBHAHimmnksQHmNpPMyWYszqpzwf1Q77QhFVrKuwQMXrW",
  "key26": "BcKNFQSvHsLkx4VHkobfrVg3fWKp7xATbNhbhRxttG9dXcKcAW3F4CR7W9KvZdFswJHFuhdC6wswDaNYfq3J7J7",
  "key27": "2uMp3wgVk8nmS6VD9EWDMw6FfFEyZeXQ4de7ET6Vk7ExXZ84GxJEhJ8LsKEFEVWxLqohvX48h7eDZr6dFbtVfcWB",
  "key28": "3yoWPT6QmZ2RdY4oe9UkMtqJnsMcZict5e4JhnE3tHmEcjHiLYGEGJne8U6X8qe7PNPFRACtPWtuYCqMcdUjZMNt",
  "key29": "3WdsLNjpNpCYfwusoH7EL9mhmc5CLrko8vk6Gaf9AZuEysk7pF9P81ZfTxsjzHX9K36SnYzut3tEJbkFN7s75YLj",
  "key30": "4tpZasRSh9sEiDWUR1LnbtXY7YhX9W1cgQuyrQ3oP8XiRvNSUJer5ywSQzgnk9gpeSvR4TrHo9zhJHK3qfSKAmC8",
  "key31": "5wz1D9QZSkhH69MNpkkrYoYpzjqeGQsGswAmEK2QyRUc4AHfjwZzChghZbDU8ZUwYZSgihVkFzCytnf8ECuSJtEi",
  "key32": "4UEwe9nyJztuKuFdvm1cp8H7ajf6zpE1EUaunywKBNoUVRbzymDueSesiZyRC3KRwwq7rbQRzBrEf7vcdRQ3MDga",
  "key33": "5r7LewFbeF5dRHnwjtaopM7zXBYEbvVYHsEnwdKtQkaDr7jVqqPZk41vC9Rs6dtD5Lu7EQEzETF2wdJisFoeNL9E",
  "key34": "5ETnGCffUCBT3r7VmVmxydE8FdVib7wCfx1E738ofe3WA9XP8oAUa4Md8PHsgjajXae2MpW4g6UfzBWcCyqeXD56",
  "key35": "5AsVqRruUR4ghTVPAYQm1mQKXvCwXy7bgdi91dPSN7CiUM7HdB7z3rCF1ZpN41stzhCuzDeBidbsC1E2ZzmgKXLv",
  "key36": "29Kcr3XTymHseP6rT76CGsqiK9seKWvnnk1LDVfScDE2Z5ffzzkHJdnTxBXvF3Swo9Qqp2DFoRu4ftLH9xxLHsAU",
  "key37": "4iep4qPQCmo7mUgH6eXrzkcFS9MBPqWrc1AK5GPft3rAbDjEFPq7k5dJQ4XTkLRXdxfZqh2BESBhQnFhTQsXDzVj",
  "key38": "37aTDY1mQveAdHUsRyt7ND9tzLeKdTXU9sySZRxAQxZjt1sVxe2Yex5XVnYU8Z1uVVcyUb2mN8x2rFsAee8pEYvU",
  "key39": "3Vbk1BAFNLHmNe6tmMMrYiuX3YgkEmFy7wrUoNA9cY6FxBNKnMtjFRyYk6jrQiBJWa2Hi5vMJaM9QEr8WKvV22Mv",
  "key40": "3BhXZjWX6SYDRgeKCJjWA5ceaHgU9UKaTdEu59VonuA2yyYk9ePGJApsHnFV8Xr7KhPLdg5DkLMfS9M46YFeLzNB",
  "key41": "4zDW35ohsCNNixCcFfJTD4uFQ2z9efGCHFYaDUfhtoxxdXFAVvbCKkQihvNymtcbPq7XJF5vEw8NpKiJeFbvrCP3",
  "key42": "22rG7QgEDXjGJkt5tpj8TZYPqL3dkSoNsbzsycxW3WsLu42BA3siyZPpkZGV6FK11dCcvE6YGtdBoTB97iRx4DPH"
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
