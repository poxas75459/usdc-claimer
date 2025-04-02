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
    "2QJ5JcR469zB9TJk16CqRmiCXZj5umf2n9t1nLoZqBnYP8m8VAjtKApsCTXU3GbWQLBtRHTTM79o1G4sF3ebnvB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJRZWUbfNfuLnD4o5N4KqhdDs5r9VpWDxcTTCTQzngCWKDENDVPZgCvqGeCktg8VXZvf3z2KSiX5bjpv3sGJ5dQ",
  "key1": "ti8kEzH9F48YT7rk8HmBwE5SyNQppFUzuNYPNcHqFEKsDsmJESJukoM9PbyAgod1429yzcH1PJfk1NYLGPBmauQ",
  "key2": "5ZqCKfKUSwfntHhSzYE1ihDWDPr7Tm87JBeN6iTuNA5o6JtfiJeCKEPktnPufqrGPyRKu5yrHbaNr3iE8Me99tBe",
  "key3": "3XgxA4evm1zkvBwQNCUdczxrubMgfpUoxXHnWZDjxTeVfQMm6KSoSkrSSJgDUPB7SU1WoaBtCZKrDjJwmYLRDtVQ",
  "key4": "25E2yHMoRPf6uWxMddZ8xDDkYTDZ3Kk5UeDpU1Rndnja4E6GuLGZBjHaXGBWGYqbMNwNYDC9yj4mReH5XMaiChU1",
  "key5": "3jWjESGb3CybGkEmrPeWrSToR63gqtBgrmk99YCptipU22n5vtK32xRQ4xiTFcTxu9Xey2rFmdKE8CJ1yHrXKksL",
  "key6": "3SB6FcvBLvLhwh4v7vae1cgv8odBS6dbWABGzEJHVfzvqofQ7x9TWeseXXpX2CoaDemLd6gXVwaZygJVZJkQmbL5",
  "key7": "5VLqqLtKC31zfC4kmHtYjmUwN3J4WKFxZD8X2JDYmN6iLG1b7VDA2PZicEpw6VJ6SGdFsJSUDWxrpavScXsa5WA",
  "key8": "cc9udmS2YWfKQFHPxqx9PeaCD8LqmEAoXoN4F1We1e2RZ2efKoaAcf6XYm5XUWfueSd5VooUqJJp3GxsndzJjrf",
  "key9": "LnY6HgJZp7AJxb8KGQX7PtEAM8nxmeDSwY8p5XFGBJs2WUP2TVTXKkTNuB2fRphMwJY3CCcbADVA1jd46ZSc13w",
  "key10": "2hVHfJA49MbmxJ3yqzBPwA4GQzSiwPJ2hVJEHp9FgUmJBoQ4gPpionKUfqFFru8jfL4ixyicvSyd7nJ9z4CXg5X",
  "key11": "3BM8rEFsCgDNDbQtRi3LA7tHdWLP4renmExsYBR73aRigCHpxm9JF16uDcYHWjWUYQLVYk2eD29ByR4ugryigqTP",
  "key12": "2MaRkxe5WhBVNbLMQgu4ZEef2qCBDRxQVuzp5KJofVPRD9NJKFdNKK4Qn14aDfat8ixTwnLR8kUBzSZAnVPeh9UK",
  "key13": "ib1EWKE11xNXh2bYKtquXfDY7ktgtbe58qvrF1DuTnTm3GQTWTEC7N9BWXSsJXPPfvvkHqzdNVHxjx7XQkaBKeS",
  "key14": "dwxon9VUDCBXBHdhzPJGRs9fW25exiXAopZ9HFowiCAUtja1bTWyLG4GX7JNjEr6pMVHqA5uxfsQmWRSdzoY3Yn",
  "key15": "4N8SdHbfJ1YxjdwzaovZUB8wKXrsYZcAheJa3XES5LsvJRNAQRVZy7LSHLEK62x33pgyRCAb5Cyr4x5VQzqE4bck",
  "key16": "5S2njT67Ryp6Zs5wR3CtU3VP5Pyy16RiQP4B3L2KLuCH2CsNfaMXdMeZxW9pbyURE6k9JWFxsZBkSqMJyV12ftdi",
  "key17": "4q6gPRs5ZGxTydssrdVRmfCzyJwPC49pLcKfyzEfipfoMpYWb1C8FNZxCyucwQMewNHBFgp474Z8zVfAGAkD3bMt",
  "key18": "4Da1KRZjRt93L86GCRuBL2bKWUgvUhHYsrFCzZz2sCsT8kdGG6JpJ3Bq6c6hHP1wuypa5Uk9mLkrJPZjh2AJBW1e",
  "key19": "3ApQxxcK3u7gneY5DcUrV1SqT4Z5kuPrjVizLQv6SYTKnEXQuPQwUPATk4ZwqPmprykrSszS7aUM2iMx5F3j267R",
  "key20": "2EkU22VfmdDXKz9uSryRt3UTsPLX2Ag9HgNJsR98nMvEcyK17t4MQBKj2L1npo8aomaFUk43SA2rjWCGVVvpc8QC",
  "key21": "5VW1Qik8x9Ex2EBZcMmrBGQ8gaiivwWe5oFu2tE1enttR1qVj4JzxhmnCsmXDjyQiuCZxJba7JCGvP5LU2CieCQg",
  "key22": "32cEvvXrJhCNaExGcGt2FvoHZdEU4cNGibWkYQFokxXZNN29La3TmenHBNmxEGoGftZ1UxWCdb86eKaw67yJRTUr",
  "key23": "2z3dtwn16ZEELmd8GCbwHYKenWQ88Z3KLiu88nGYWbLJRH5LE9pCjks4pWVokw9Cdef8zNjQiBWqBWjz9DHSs36b",
  "key24": "2DFoNx1qNdQmAH9LPMk9rdiXxXcnfyeCoF5KJDFWFtdnu8aFRKCtPzWKM2Xzz8Rmr6UY5y4qWHA4FqFuBYdt1ZvU",
  "key25": "4ir141GLYz2aHoZZY7oWRpjUckhnYCDnn4Gdd8YkdsnBNjqDv9ekuvNDnxWkxrzCTw2uS1bvJdN8MjPxPf4cMAyH",
  "key26": "u244ju7nG32PWwHK4NKmVcGTEaTMLpGJ4z1aag3DDCBakztx8gRNPBk7kZHgkvnB1vxUaKLH5E4MydjWW5rjGHm",
  "key27": "32cAqeGR62C1p3v48ENRKMDPooQd3ev2HvVG2VPhb9LhkkK7pLQBmg1dKu2Mh5i5rA6C2FMXG79SBBBbLxpiXz83",
  "key28": "3cDfgXHraBYRbvJ5H2WJkYsJs9J67GggERsQ32X6GRB3cDQd6t51G2Fxkccme2TmFGitV1ha3jHdhFDxrjnZMtXd",
  "key29": "2HZt63TK1EJz8y5uxxh53ggGgki26V3rmsgXA7VY3S5BtZdviskyhbZkSZF5vV7pcFR1dhUHE8ukBZRiRMjY1Vo9",
  "key30": "35WELE6raH6o6AsnrMthaSnB9mPz3MVHqMf9PQcWQB6xiKZjBZ6SE2QLMdNZ2HapKkwHPLBVqnMeHQhGVzjoditm",
  "key31": "2VViVnbNFkT6nwmYdTvKr1rMrQFhLJv2t7dJaYVf8c9RXNzJXUYe4LYFsX6Lu5unqogD61R99WfzV8EGYMUHiUL4",
  "key32": "5AfLPAzT2NZqZ6chBT497ohFVvyx6kxz8RSLVUj71ocAqLdjtjHPJmyug6VmQ7WKhXMZDeysi6WcZstewjQB13ML",
  "key33": "41crMFbLijDad8BhBkXCniQwHs6L4VMuTuPAUaspSTdSAa6e6fbK8aARB3o7U1yV5VhYKavxKmaoBMW2KUJDgxDS",
  "key34": "5kUHMrDC4yBLVRN7ubKRpN3C9USoQzmrPVQZVCjPoM4cAe5xVpyoeDdH9XmcVK3RZXqceawfrr8ua29G7RvS94Nu",
  "key35": "3hVFu1Z4Nxm65bkgb2yBvKQ98ayAhkKEKCs8fUgAYK37dj4TK5kM5tehzTsikrqconyGNcjSwe85ZQgth351PTsZ",
  "key36": "65mv6MYirFvuxQRVcgachYz9k5edcWpxMbh6pr5fSWYFTMRuKmE3UJjjRaGGeXzCUSTboM6Xbo3UsUgKZeY6Kec4",
  "key37": "2e33RqKJoW82xc2T86JbnZqdSXowRPyFhLJAETLE6iJZ2VhoFcu8uwbXnH5W1jMMhZrGWeZ1X4eTnSseNTruPBmU"
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
