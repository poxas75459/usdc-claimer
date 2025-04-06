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
    "2XRgLZkbSJVDs617Sy599eQTH77Y8hsbn9v6ybU6MMwBoGoQVpMiQFcbyXfgT21fDiwnyPxswCjWQtx4Kw4FRCCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iV44pCfhuyRz9KcFofYNwjbAM7BXhdb7VHAaWC4yV2LKbrm9a3QTKpsunrkQTyEEDBNvayKbvEAkLLJmfqrmRi",
  "key1": "vPhwiCZp3iAHhwQNC6axdJCViUy3LkBqKLwYDA2mWdVSaWjBbS7pFVc4tKwJtnJHTmhMZPijr88jeyc86a47uxc",
  "key2": "35aHFQv8EFmH6RhV1R2d8bZo6z4K7HJbJx2odMqhZCrx5CaiuQhFy8a8dYCy79KxPm4E3iKYNxx3ovafhRxhex3q",
  "key3": "GUXdpxnyGzgQgT6fbd6FnAEmAMtenCsDHEisMgtKuNaaE5TXPChw7wo7Ttb8iBppsMZQN8g3PRbw4HLUNfcRYTW",
  "key4": "4eLdFmdmStz8uZnaHQT25zWNhKe87Bvr6hGGX2WoLV9D7BaTtT29i4WvZfi4WZEnHQq91rhuM3uYiP9YefDdiHNC",
  "key5": "5yx3UhKbAvSGPMoS4D4WJoye3hR6sthpePbBa9YFCzUcUzf6w4cPpDoaERvkB2p3WXCuuEPV6PTizFZBmxLye5jY",
  "key6": "3e9JTrTJHFs69WAz5GsWcEEFYVUmZC2ySMh5BWYNygS6nHJctMKGYgSAgKxHA1rw5jGYNxHKU49toFXSTUgSaNbx",
  "key7": "23yZKspJZptWzucnedGqUa7u9gqvQPVpbBEAnuLw3hdD8YSjfzicbDCo8jjUUkyEwg3PUno1f7dNwwaDmWFkaPtJ",
  "key8": "2EjSociT8rXxK6FQ4odMoermokBKztmqU7QUKvnt4sbf4ZHUe62qX4B5Phvx8xLwJQCzfU7xvbADy6otNFXrd8GL",
  "key9": "4cX7VVE8EYEaitxkMBkMWjKehHyrwNQUghogjsSbzrfNeTnP3Uqjq6pDxFaKKYqg3HrwkgFRgD8ouAesB2kiFnkX",
  "key10": "4oJ3LBBmSdtBorc3iBXSFD8DiW4UueMZRbyPdTE3dXCDnssqM5GgXW6V5WGgYZEADYojgys2RjJYbiE8m8kdYThz",
  "key11": "4hdqVBzxgkoVt8akXEWnyWdfn776MtC7emtQdCF2aHNgFdX5pxAzbvGd9fBymQfE7vqEjCFqkuHPU2bUnKNM7wz2",
  "key12": "5Cx2oJ1gYsQXDJgkZGAPNXoFGDD7DyEEaEMtPpgKdMpNXFdkGCnURqyjiL1xYDNDqsMLB7V5oD3XuZ4S5ms7wk4L",
  "key13": "2AdEuKv4zxMo31LUARvV4H6DJEXPWJEcy9UYpkCtMm9AFLyL4yg715DxzJzhQZvz4otxy6bvcHqk5ktygRPtqXJy",
  "key14": "2pHXx5eHbmVFN4Nzm3uNnCyVSSVbTd29wRbPN4CSwxNYLNvZKNGx7kYZyVDPiKkxCghJrTHjhGmCYU4t4Hwk1pW8",
  "key15": "2HSnuhWW3gshJ8Qqbruj5s4xKHbWrcn6MKDUz8fB7SCcP7gTCcsL7yBNz8q4yp1gnq7P2ANTxgkVxm1roeTz1LH4",
  "key16": "5GjijWwB4sFo9vqeChNpkDuXSz3AfLAMdsyRmUwQzisskc4tDe3KdegS9HBxicihdxRmjsgZi4HBbS7UJUMjuBYk",
  "key17": "5zguhEJPCxxAMhfvZMUqQ9VSNm2UDZr7RsNwDe8YMjFVSqXHaVM5c5YbiDbH9jtvrkjpQCQ7JJLKKv1ZYnB7Toy2",
  "key18": "3px3jUNn7hjgDGX2qsdTgpFioZkFWYqSivjjQVS6ESpKeGxUpKzVyRC6WqKXhkxykfL8AZFdyvAamX7RgZBowo5D",
  "key19": "54ZxxW7YcsC2uLLMyL9AR7yTm6Pgyo5EaVkVv2M5mFubTM2eCeKtb5a84ThBZnDYdjn55r4u4dARZaU4tri4sa8d",
  "key20": "4ZNkvhCd8Ky7zxNHZehRzinGEehFFHG7DkRKrJWDfD64JnyRer4VcVBWt4kkNb26RkEhMzFhvcV3427M36XpgLyA",
  "key21": "2yciSKzMy9hc7VLyq94s9V87W1T47QphC46Z3SKRzgh6MGXZFAgDFEfszRGCzatdAEyRqxBdKeBzXQM3FimDh6JS",
  "key22": "3dUDYKgb9ktL7rTVG1h1pHL9d8GppKyzK3fzRAHE1yhz68Kbru6Qnaa3TRtBUZytWrJURF4YiJJsP946rscS8oeo",
  "key23": "25Kza4iuU2KpKuni8Gjyk32vP6QxaB9Ldaj7CjyxDwxEWCk7pYr3dKqrczc2v5SmcoMW6v9UN5X6WCW6gANYJUFb",
  "key24": "5Jj3h24mF1a9nzA7pMDAAJGuRgA7XyC7fZvei7XsSdnaAD626sHrRhB4VZbHbkJ4dKTaN4u8MTf7bko4egZFFm7z",
  "key25": "4zkxqJ3bu4TBzs4kevaoLkWebRYMyLNNPc6tBUjeUdc81JhNSvqeiAv2XkvSfyFSxqDcqJrVXF1XSS4eJ7EFxq1x",
  "key26": "XrSs4ZimLcKim7vDHGH4uauRxEn49Dj1irwuWeH8iXDrcG4bbdWUxtn62Yfqy5FokmK1xHMxTMPXGynhs3hoxBi",
  "key27": "26JxFL92rADmgpaqEUyeUxwpPJQ2pNMbF4QCc7f7BRD8PVeV9gbjWpzJEJhE5XswUvfaddNcrjchSwT6YsJTdCbr",
  "key28": "4PBcKiE2p7U5JHiads8DXCgDnn6dU3X9MaYk5u3cMRnkJKD9W3m6tbg7DJVpfpzSemfV3HWDohwUo9Jo7bcDxYc",
  "key29": "2XQXhUNpmJVPVaMY23eDb9yQmckdQ1ruAfKR2BjEJ51pSUR4rFdaaNscLD5eBPm6Zvu4Wy5CsrsMpiz6SwwrG6G9",
  "key30": "sMU3DSYhz2tpYa2gcmp8t7jUAC1dFZCrtsEH6ay2E5cmSMeBMkgcAJW223xd8H74cXXLj1QyuJenNb3KqTMg3C4",
  "key31": "2Lh58jpp2ryuPCZZYBQjAuQRXLcwRyLei7RoEQzcWCSyeRpwRquo7n1GrWSUc2u1HgsJeefoLSfc8D6LV9wpuzEi",
  "key32": "5qYDTLdMMM25dVz4zXuRDgFCrLepvcB4UjtTggoKD1ha1yX5PvfCJu2JgenSRqfaYGkknhDXkMxDSXSqokuTEUyK",
  "key33": "2KdmWCKsxLAoMe7epvgWFrzzVv3kgaYetoKzgQ15jW9xiMzDpMXq1moD8V9XV5gc5gZPBc57bgbWK7tKWqFHxQsM",
  "key34": "2pnUxyGDEPQT6DJbzsfZrLmsCwrdjez6iuNDRBJCwNwW8kY4zZEoCKEg5wZUsZEfoEDiSZN1JqERggwKCj9Paukd",
  "key35": "4mnvYLUajiVqE8vEPiZoUk48FfcK1eXrKJ61L8q3dN5beg8w6tNm158USocoQMVJbU91avjHuKY3yEcH2RGWN2ZE",
  "key36": "2SAMWLQE9JNai4hHGdaoVe1VwVkGuzqCBgp1V6eUzUR1PZexWVeyEDvhUnS7B1KJFxwrptLnvy6dcjw2KwXxx3ot",
  "key37": "3CnzAsU698K4jJz3HAJ64Zv7VRxZHKpU7UzW2BphHbaeyZgQjyz6k3N9pXiSus1dJwaPVukuosrkgcjDL5ZB7FZx",
  "key38": "3dXp3SAqwH7fQY4Rz1PSDQWk47ejBTYmJuqAJ1ovJ11VCZ8W8RxjF4BkawiYh5J1aqt2opXf7ps2Yeq6wE6NLaH7",
  "key39": "4DhjbBapzJLRkzCuN9aqoTHiEK6YmeHUjV8z5xHjwszgqZKXNttmCJzNQp7J2Ybw1KxueYRinzEmH8HbY5cNVmss",
  "key40": "4vB2TgBMZG9j4YijykT5xrrt4MLbuHWhdxVERQGWoAka1zEPoAdkqAKyjNgjupxeebGVBsZwHpx3Z1hZ9Udq8pcM",
  "key41": "BfbeNLJ82kGwDyAmzUu4ZA8DjtPqrVC4jwGuJiehV1jiUHkoY3Bc3SwXN6AnoWesGZ4g5ayNy1huA32uiQ2L8Sj",
  "key42": "2t5nhMs1DDx1S15ZtPsvD3hsS42mLhLAW2t1zUBFQXsWUkWy7cWgrKj9YHSsB3awHZ3t6LdHJw52UhwuSnLVbA4P",
  "key43": "3WTKcTw3ZAPYje1BsewuPM7Swcq9TPTrv9yUWJmYWYhvXkXnCv4vPqNCGLUxxPtWf6XQiBM4wRJgWesKwVKtYYDU",
  "key44": "2Xc7iZPzG6Lw2SQaBaqNhP4Cqj3HAznju8Z7QibdALp8s2Q7248keY7b6NTN5BH3oboBuqhEWUkZV1jBSatBYPp",
  "key45": "5pqmEqFqeU45JnyhGwunxCejhXuxfXVPtXB1pTg8TyvnoQgJdg8JFjiUL4ixeKAGVkdLBhYkoJMnrsZwyf3QJ4At",
  "key46": "4etLNmC7bQ6yTQiyCR7ZZMv4EUDfkxScnuE8fySK9jqqdyQtpaZ7ChptabBwhMur14GExDgNY94N1GYGB9Bs8Lcm",
  "key47": "3vM4Xg996E3bfbvbD4PJbTbXx3CBE6mnV1HgxMDrrkH3yQA9LQjtN3W4fXC6ywXBcNGwyM6dLsUqFYQ4nFwEvBqb"
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
