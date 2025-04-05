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
    "4EwCW1HeXjePvpgq8FsL4mpTSwKKLkox5cS2XKjg6t35Gifos1dEkbC7UhRKtsiWYHxcgkFEqEU6NZdtpKqNuiCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rf8aj1hqxjnQ6qehGV7TDscSn3DNhi6rjUUnXq8kZd4Vm54oR4JSXAteRp7Jiy3MNrkEvKobGAGUzcBAiqKNCgV",
  "key1": "5PmgE6m92hoNkux8cMDRMoBnPF4wtV7BAwtqdQtuH3NJHnxtRZstmfjpNfa5BeTyPC6G3juQKqETwKABumXwgqXw",
  "key2": "329Z7sndsgSmpmEzDUrGzUfQEexM1JjfmULyStGLdnhWfFDQdSz9JjAGwoNgcwmzSbRU5LC1KiEyLLyjyfMW6wdP",
  "key3": "2AqoSvd18rvayCK5vZsbxFbrX9syGKdTsMDHSScvgjjDtyXSCPsirVqtpYsDWbQpyddy3bpFn99YexaZq3ubAtxv",
  "key4": "2ef4E9JexPneqXeDnbKagaBnbcErWpvFPYRrjQaswMfPaXMub6tWPd7zWNiJEzBmwknuYMYpQRBVUjTtwjUjyCzq",
  "key5": "kV1otxe7UGPamVPC5EGX2WZUoH6FooNmMsBsN7Wkckgqjg3AXDc7nXTtVEXMTy8q48pbxahYUePA8CGv6MntUVf",
  "key6": "67dxMpvnCGKVEgKaYZbPuvyjXN7AZWg5N78EwAVXJUc5EyDXx3gDTP9k2ZET7JsKeXjhafgyv44oKx2PofmaioNC",
  "key7": "2jAztb1YdYJ4KX6euBnWGn7m4SYDU5iitSL4PC29EkywwDYqhrh2FfHuRSg8w5eJV6X91pnU4ARTsQ5VA5Ums1bG",
  "key8": "2dFtH3eYJbQpj3vmFTJ6zivGVrJwBEijnaptEc8wF5zpxubSZ9i4mbeX5AAqTMfzy8BRtvoudNz3XYM299Aen18m",
  "key9": "26QHw2tSkvCdtpYCj4XfXwmqjBpWBobXszGTHPC3oPYdCBNufKSSMTMoGigRMgeEBCgzQLLZL41F7b5c5n1zyLKg",
  "key10": "52UfXwpJmtCuQJmFVLBqtoUBcaQZ1c5E75i6GkSk944fsDm3kPpXenA54SD7uvF9KH15kytUCzRAEwsscACBCbDq",
  "key11": "2Q38Vz7Ec1Bhezho7jshc25iWqXVwQiDJFvyuzSy7wVuqHqFDQSNyhtSVNRAkwbghxF3UUuWpTerPBMiUg36LiaJ",
  "key12": "4dUUr9YacGb5otUWxdsrGPd2enDf3C9hpSeeNH5K9gZphRRbfVzuReAWYdwUkV5M5scqm9frT5prnRnh2zTjocru",
  "key13": "2XqiQJ2sh9oY2SajGQfC1X3MjZs9brr2ANhyugZmLqSXKv6Gp4oPprHmaiUog2aCBSRmTj4VbZCwf75sQwBmU28X",
  "key14": "3GE4dsDiLgZjRLgMmq2PhhEgCVEbpaC1BVFgL2mRx4bEvSMwr8G1EPyPok6PE1rDXox24U5VazMwc22ZoJ37MTXE",
  "key15": "5yjsPQuMDBPbpgX4vxog17DZssXXoLuRaQSZsF6MgyauKVVRYahFYAXjLmAb7eTsqgUyUW83b36YEgm3LoWerr35",
  "key16": "cPQEnvAgjMLrpJagKaUs4rQANgGtxgCtoxoptq78rh81M1ocsAMXU2FTVoThMU6ZGREQDASk5CoEaojwoA1w9BE",
  "key17": "3cfY6pgL24a9Cwo6S47hEGT5v2Zv6wKVdQfg6sGtM8rKVv6b8UPMBh4bedLwYCreKTYAiKNwracPWD8i9EfJtKgN",
  "key18": "4w4uidPgsXuhctx1Hf37gvDZaHz8X7e7zupCD41mMMx8JsBMRaSDRq6yQfcMWtorjfiTs5SBPPXSVVrVn7TYzWoM",
  "key19": "3KiAUikcXYaaYEjreZk3ePMGXCRbhorDFdYBfWq3cX9yzvyNKJWPuRjNjkvQyShSq4EBvQjNJyBp9RkN4xeKrNWG",
  "key20": "2SXcJhS5AZCJZ651g8V2BJfTf3sVFesoh9H7Qp9sG7mftcauQWGdjngcQNE63ojxRjkhfQ1SPPNZpt6o2Z12Cpwu",
  "key21": "3GKTrTmrskJvr4papQ7DW49B5WPu157fyzUu6iEHmcN7RThbsiQfWn1PkGrdAMkxBa3Rp62UMqAE4mZkSyd3rstv",
  "key22": "3pBghceD9T6G1aosSDQ8xSQ9y7LK3TVtQBuz9N5NQ6LVygKocWPiS84hcgvAuWyS3RmcScUuxr9tEys341AY6vzE",
  "key23": "25wjdrKbothtBsyvPdVjXsL2HvAmuYa74qwSEwwcmpUyJZm5FkG5pEwRnKDQAaoxW5V55ZzwcZ6CV9NYbFf9FYm9",
  "key24": "2J2rjY93Fm1cVQB2c7Ym2rqGdHYoEpLUgBgR7sscTp2SxwDT3F1DYqbHJKih393aWxJWV8wwfUrxXoNurfnUYrfn",
  "key25": "4iMk2BVHZmVKUN6Ds5X1WPq1KqLHSkAnRFfPHNCeTrz3BnNbpkv3qUwpgkp3J97weVn6WhSpiXNX9EYUiwuo7h8v",
  "key26": "2q4WvXfH3QQx2kR1yFnMHCivAGXyQFCyq8MKGjhbGmsqxzXeyyf61fgGp7qfkSdhcyaxRKfJFyxnYwm6xvAkaecA",
  "key27": "2stDhXiEbzdrwpCzQHea9BkjRmLgfgJUi69JdbWj9WLbtaSi5Lxfvua88z6cBnL98dh6sUxneZBXBFKbPrdzhJEr",
  "key28": "Ftzcmp47crVT6Tfsdho3DySe1ZUgzkpUU8DkYrvpqjmM6ibKiBk1AiiCzJXmvHUpxB5YRBpE1Sg53387UuHCKxD",
  "key29": "3rKrkxfqyY8N3N4TQy5evQwGithoHjx9kQpJHpsYUxCHt4K63Lobdx3dPY8W9FMyu1r2X1PVtEDsPh6J6QZBQ8dr",
  "key30": "4A3DKTbmudBmSaUp2QxdxXfnwBK3Rj5VoK2sZyvJerHAuRGUiVtkwx71RU4wfjw7RihDJhx6RX5Dn3iSUt1H2r1x",
  "key31": "31epkkcjxf9ahoeHoNCNYjueMoCwVxhKcud8FhJjSZThDUHJw1YBhVsJrbyMx5DL68msszpz8swBCmzYQSfcUgrn",
  "key32": "31WSpmKeRP8CJGACvWFA4g49sxedtFe6b6tuZYWreyGoxf3RMtwTAfNKhe4cYh22jGnHdKbh6jVyEUVd4uGYxgfJ",
  "key33": "4aAXPdQTCKZmPppgxe2z4wez5wCbicrApsJTwK7zXAAr9AcnVT5fGPhbHF4ySnyVcrPbo1g6efXLriuRsA1WUsyU",
  "key34": "3JvLhbUZLwHtSuwEEZQA5p8EBqCgX5XyCsAUWvfRfH4tiPqC189ER8uHdTg3fvF2FFQ8JXrt25ygMjTP87tamee6",
  "key35": "552xdAaaAqsR3VwtBZCe6cuosRk9pATJBznSdVYNSRHiEJvob4JHBexVx3LedN3JfY3Aj2yRkBWQpwnGWJvvRm1j",
  "key36": "4NBhqFYT5LK7xLEc3Hp1EJZRnUgPvUxMZhiB4dhDWqTXLdMKiWGd3HSTEAKcA5J9E5TtqgUTDdHpSr1oAmABXFyt",
  "key37": "27rNPk9utQoH3DFqpquDYS5tiWsC4LRjgdq48w9B1HUJmpQNBpfkfuSU9Zn6EEbkjCHpPaPmiC94VhWx9DuSoJ9j",
  "key38": "424oi4qYgVi5HNm8ggxNjFvCTXvtLcsqce3pnHLJTpe42Gw3ZGS8H8HgubLX152ncERNhnwJigzmw1fzZ993Zzu4",
  "key39": "62puccH8RpgWBkSpHjqa8CmDGzFzFLsNyMBZgYaeF9udwJy2hgB2yCqZsN8iK5uUzi2yLyUo9XVweQtXM8ERAkbd"
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
