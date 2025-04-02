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
    "367BzCczAXSRYmXZwYBxVfih2yPZbphE2k1briXZcso8LpZhJAGafEbAnCM9UmzbHRZPFj9ebb3GHmuhxQbE9Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvZ83wyyUSCTMAhyEBDDsGDCUbCz9758YfSsbog4XdjkhADPUHjTg5ekxhEkELqhWYPR8MTQvJqXHndAMdusWUz",
  "key1": "2WcasrK8EaJrGaByawtLX5ygRVrqQFpukexk7As7Gwn4ELvFixd4XAC26ZhGK8LTzUrHhL3gmStDYCx7sMkmDhca",
  "key2": "3t6WxuwrdNhV4iJVPsy1LScDv7ijgUzwhPpwGYG9b1U9CHn43zuzpqEyiT6B1kN93qHj4R8nAmHYpAhCG7pc6a6r",
  "key3": "d2omCouZ5yQCqLhp63tiVm6NLKZbvkVhcVZ2mTX7EyxY7yd7zyZ3LSK84mXnRvkoeHpXagtpi4o6Df4UwMAnCPX",
  "key4": "66MiS4kfBTR8UoP5aKLPuWwXk4fjkCs43hQPEiqhvADhNBJ8YvTjVf3y7thQtXrCtPzQVNypKQfr8NnjUR9g3Qs4",
  "key5": "2qVxJnVT3CSBtnmdR4uGeFhFfXdG9ViLtjGSAXDR8hvkPmmYWeVPQVnH8iEhmKFkNpoiF4DYLpvfHH3WryJBiLpk",
  "key6": "4MJotu1QuLvbDvYotZGwjEzirXNp4FRU3MGB8kxLM5WTWvrUerVQECMDRHpKpQu5Mvtqpxwnfx677oX9H79w3UHp",
  "key7": "5D5bnCQ9rMXQWuNFa963wXXCNv9K9kr5Hro7tR4bPSDaZxtZHVBLFxhTngPDCGXR2Zitnt6g6zb7MfnYuh1YYjtt",
  "key8": "43UstdmsoBAsmmMLYNtyypwqrMMAcHKnWRoWBAX7Xj2bM4ose9vqQsGZ1QqUJvQ41hKTTzystrg2tc9XUg6fbwep",
  "key9": "5RzDEXkdQpoAysvjLKn3NwspEoDfFZobP43udbLiZqCVh5GNncSPyQiYUnPzPF9ynm4rr1d9ps8ERdLQiL1TuhM9",
  "key10": "4BmC3G6oNuxs2nEBuHMsMVMWXyJcrgnxRkoQK9T19u7VXWvn4gmC4wUvMG6taPFb1SXjJJ8RW9sJgH72hWPURSM2",
  "key11": "pm6H5YN8WgjwpPT9z5gs9MMbMTkETU6XCui5qegryXB7bEfLSScugbYp9Q5gXDncPjE9sbGcGszjnV2TSCYi55e",
  "key12": "pU6ogwCseCz6XDdYYVEKSpZLHtKXbsTd5mqhGkdZw79FWayjTJaL6zHuKfYnPkZbekpcs4QCyVh58KP4y2oaHCQ",
  "key13": "bDusXvCjTowC5je21p5AZ93kYU15jRqox1WSL1MHa7bUkVDhWKJ7JFzSwWwD499KEWVRa8zMKUsLMoJFbCyNiQi",
  "key14": "4b9CbCVwpc58NCGyKu2jczpQSqCkHCoWNgUYN1h5UkpRzy4NDeEqTifEZzh3BbmdVUKpHxLtLVVxMXBbkt3kVQGN",
  "key15": "24DN2mNC1UXMpKk9sV2kX3qbkLRnvTk11zD7W1yTCYidKA4csWpRWynQ8iy8TmB1xEsWdk46gDt9SkEiBFM5bCTo",
  "key16": "3otdQckgn1ve1J9G7GWNVw6MsJL62oqTUWNLVecJmo1pjVjxWoRMohupSNcvCZRrQcfgJJW84ocXqxMEQ1NeeiBt",
  "key17": "QqrKqykwsBZFR3dd6zX8uWUBpM5fLmhhRcBJVWV1L54SCoVb2BAZRo6HHSiuuiJ2S9saftvc1AeqsDbeNrSsSBC",
  "key18": "4T7Cqg4ErfokhFE8vFkTk9xU3uXttrUZKbBAxeptvZ2ngtkXzBXLM1ACitkbiTKxiMZCzRig73NgdyzUfL5H2xRS",
  "key19": "49n2UbCMtjNyAmHF7PLkwP76MZsnbsb9pMYq8Kex4cvNbDVY1aaRBgniMQE3ZSTHTcuSiGRDrEYkK9Tff7sBrdDh",
  "key20": "3uqpyKL1KbMnrgY8xFJZv9oQN4P3hmUG3szmwqpHp1TTBYfo1iJjSd9xfkGZMvDC7Vot4Md94cSTjRet8KZGydxA",
  "key21": "HNomfPYvzF3Yxz94sE7e3yx2Hmrc3yEmXGfR7Tnhk9YMrikzpaenKb32Y9Yf6687gq9Lfoz6uN2kEZAnzDgGzGp",
  "key22": "64sSyKeMyRzqfAn2xsoRKc7V6zWhFZsmQLkpkpV1iNnw4vJYikpffBjq6Q3ivQqXD77BWQuMF6fR9GBNKP8wp4YW",
  "key23": "2MpzQ6poo1UgxgFjoheAWDiduLziYj4GUzne33KDLp7hHEP6pAS5HvfLeyM7SCmJG3xP8tyEdqn7jiMxbQ2cSJFw",
  "key24": "4prWd1SjKHAKhv51q5ktwmVzPdyYHVG1cqi2XC6TEweTd4gSB2bPim8fDLbsobnmGE2CrbcDzkuufYZoA63Avf4W",
  "key25": "5Q2x6WEgwWZ2U7rXwEEcafpUwXarAUWT73d4odcxa4Dkv2VXZWnKzBac8AukvBUfd7zZrwLUcEsb9qkJU7UYp5Ks",
  "key26": "5pbKkh5W4JCN6cWP8ysnH7wro2SZVYz3WjoHAXTrZTWdesbSLgJqtBTnYo66LC2bBoD5rFpjLugmgy3QjhFFLoey",
  "key27": "4w8g9824hHb6RnYaCrxDr1qijprgG3uGeDh772BCMJUWTwvytDKeQ9xQhX1Vccr64R1zUZ8F5p9K5A6LzCH3RSx1",
  "key28": "4a9e7XWEdf4P3tep2xczpwaCGm9TrKqaPpEhCtjxpK3G5NAPFimFKVSUupe4NLysD7B165BN1ZfyXP1k82y9axNB",
  "key29": "44orW94XbBQ4HGYU1jtyVgF2QLXvhNZqM9oH726JrhfLqruvjDzj9mGWZ9BJbNincicJ1FJSfZUvjuCzBXzWMZ9R",
  "key30": "5QHdxtJBuRdqJyAHvFmDbC7AgGACq55yt9rwZKutpaBYynLR7mrcw4afHWPmL4bsZKoDRAyZui23fUK3h2cMfzoe",
  "key31": "3VbZCPR18RHVCYRtMbXe7bvxFF4CrDEtKuQPniqBBxs8RMs3aqd87jrZy9749Mui5fseoFi8yiPVcyGQB8YHRLE7",
  "key32": "5dDUzHgBF8h8fGcnrsksovGmb1UsedDhTS4f9c1sJ5mEa5uUSJybfy8X9QZtspgQDTPWkGuVKgt4y5nFz33Km7yw",
  "key33": "VD18RxpnqJb9Q8GEFy6XZVRQFV5tHvcmE1EzPZ9ZPszE83797xyKR3pdrvreeFrsiq9pjYV79hYqmZCMyRpwj6e",
  "key34": "4bu4NXUQCiTiz4bmuV1VZMwKrnnL8uadZVKGhppHtkngLhn3BppwZRrm9CyzyWWd6YJ84iLLdnt25rXqJB8RMhy2",
  "key35": "3uFYd2HP8nifwLAdLD2v3k4T6WQ6ZGva8BestGeDx4RGzaTrewCWfctewz1cQRFYtK4riCWY8V2Hm26ATCMngqnD",
  "key36": "41WSu2hQrj2ZFctYhn5iKMb8b8NpFTDED8vCNnLF5kDRkuzya7ACPobURdBea24JqReCzg2pjDVbtZr2zABtS8yh",
  "key37": "we9bRAUWbhVdtTiUHnhe8y7o1owfHJnHXRtSNayzFMvMzqNphzmMeJ2p5H4iLsQar6x1JUoJTtxXEUWECFWKHPc",
  "key38": "41PEZyM4g2rBoGRbRxtmZmQx2bkanUuqiVvMqpAmztASWMWXEMiZysvgY85f3ermkcsur3fnVmrjfkiF3ZyCdgJD",
  "key39": "2phr97LPkAwZLSgfmN7S9GABRy43qwnFcmYM2Kxqr478pbTMSvL1sXbVfQJ7byX37Qe1Yv7cL5tHCPddR16mF9D3",
  "key40": "3wRyKCBBedUWLyeDGW7EyNiaJFkSBb6daKg5tkypqPF2oxcE2BNDzrFETqAov6LydMG77d9HwBMQRzRUrNW9qXxy",
  "key41": "3wuX5EMBDHuXKMfqvwBaSWoWihyG62hYK6nN2FPoiX3XfdAdfu6VpMXEqH5JhXcnfmZKdCugcWGjcH7yypBdVdeP",
  "key42": "2s6VFd2A6VKtWvu8VkiVTnUBTiGcLBsTTNNrwaDqCJ49nqmERTGWwoYg2Q6M1tfALU3CuK4GYr44jNtuSo57HSBT",
  "key43": "59z94bq7Ef7LGhetcntmSBzSY29VjF3SCyGvJMZUUyk192rr4EfwYWmwkoM5JgqBgd7bLSzxTr7FHBb7FSBwZTQk",
  "key44": "3Fobrb8krs1uZjWoLDYuhF5dX1AMKGyfJu2FjbVwvooiXjUL6vriS1iSxPrBMGdRfQ3kae4SKRvrCf6Zi8XiQ2RU",
  "key45": "48S2W1htTUYWUhi3QscHHAMgEv4AoE1Ja81mbSzu4QVwJJYn6myRfFXy7KKNoQS8Zn5mwGieg18bi5h9xYiQgDiz"
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
