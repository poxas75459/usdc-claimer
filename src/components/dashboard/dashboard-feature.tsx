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
    "5cYRTw1iGJzfXMxkX4U4GgA3YF6NPAVf9dZLgGHXYLdWfCwZt5QJznLY79N9mtsYvNKF6iYoPTBAnLpP6xdLS9j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWTaBGSWcXhCnzffhoTAEHNrptwWL5uCsP1cdW1FByDayGs8VYmqGo7631Zhd4A1VqPz5mTZUfRJC73wDXCxLMT",
  "key1": "2TsXYVjVPK859d86TnJh1h41BBVakpd6ch9GsawyisYXGBP4a9tgh3kusjjp9sHrK7Fbj68cKpCv461B5D6gX2Zn",
  "key2": "k9gbt7rNjr42aT2v2F5WyZrSxG4CgBzFDw5TGBApXFyv7DZDo7iTh9k98KAVBgVKvMkxRdWjMWUUimMqdy6WU1G",
  "key3": "2cVHUmvBvv23sPofWYVKAym7PbtathMhxNZV7YvLN6WWnmCZjwadDGNisHyiNK6kX7aS4Tw8KNvZmCtGmeH1BnNM",
  "key4": "5ABzB8sPLyx28BsG3WPD3K8BfnBjSgCpYbd9ivkVaNV9pQ5cywngtwpaGQqa226PiybSmcKLmSfr5MuyhsZfWynF",
  "key5": "4TQpHZxvH73ksEzQxxA3S6ykaiGzj8kax5VrbgjjrcNvkRr4ndvFsn31WmmT3zKEWVWZoPceNZKpeV5WhffLuM3w",
  "key6": "5barnotX6JTP1Y6qtZMYKjJdrwu5f7q3G55YVBaHvW9pLPNcdnqCgMnjk4a16L561DySCyymD2P9ZkcWyTvV1CNk",
  "key7": "4xyutMRtJwAUakmMfMCKvuigSzAmrkF8zD66Upu8vsqg7NJraS1FWgK7JbGX7xQq1wKv41PJX5XSjyc6hAzezY6J",
  "key8": "aAc6dcsHkQCKcaBN8s5zt7Wg6HgroumpQ7cXdXBdvZUQDKSDMbaGwPuS1kzJVg9QeTjfR3FSpBxmnvoSdRJ5MMr",
  "key9": "62yV6PmkYuALp8DJeUxpm5BW28Df5kTckY23UocqHfNTUiPjqCYtDoUttx1UR4VsBDMsjzCQXTrJL5VkVAhoEY82",
  "key10": "wBT8w7wrZBXmEw1QJ2TLRY4t4t1FdwJC6bsQHfvgZo8d5exuUGd1JQn1Yk39kV5yf3hyg9mt8wpe8LKehbfwFKa",
  "key11": "4dLCfWJDJ5cmXNnCvHeNCzw4FhCsdpudyakgLXGxB4Vc66ZyMfg9nL7rzHGWNYeFX4dhQyYLeTXBakqDFk1aFSiu",
  "key12": "5b742u5HXYybibTGztRyF5TTGeQYgHSCECyq1Ggk3Gc8f4wpVxBVeqQjc8qMRodLw5behp3VT6SD4noeXcUaShpk",
  "key13": "5iCK8CLAtPKjhxjPfjDeijkD2xYPHsFt6ULKBrBP6n73WprsFk4BW9JN487oy5CznaMvkXrfLPZLtpy5eZ23GR81",
  "key14": "2ZQAA3tBUfnjkBSC5SVjaTkNukDysxCzJvJkZkxZVvFjH5X61aXeEAmhktiRWeenpvBGR2RccW2dctUSgyLZv5rx",
  "key15": "45Zsds7zrU6Cw5E7tx4uVasi285hgF5aYZRAQSAxftZYPQSqGaHeWDzXpR19m5SDLQ5o57pVHCq8d9u4uviikE7f",
  "key16": "63ZmPxGzVHPUkBau7Rt2YKdtmm7zQfJaC1g7Ra6c8h5oJ36AsRgmnwbXh5k2yWZowMMke69czzWt8YJeydUsJgWZ",
  "key17": "2Vkp24DTrMLHUoD3KdjyktL8n1CJYYHRHiQ7vYn4pg6naPr1UXZm81FAEqAzAv9Nqy3DCDS2yk5nJx6drHWcfBWj",
  "key18": "5KUZdFE9qvYpG2rBhVCTRAJ16V6XvHDsW4rVBGcDQauZtpSt2sKTghb8WCBgUxzU22R6E8bWRgkZUNC6MwbUUDG6",
  "key19": "4Hd2GpRoRN6Q9J3gHQgo9GMDBhyBPEhwwkcziRmLq11yx6rbLiB8qyqeURbV2kyD23AgDicg7hc1VgJXr4Cqt8Fj",
  "key20": "2RR24ghRp6tTP1TQZMVJ944RbKr2wJGFjGcaYFuGHWurbE2QWH2FpBMdD34YHS6hWckfRVukbvTDz3EhhrdakWHY",
  "key21": "55SHLeNi9mFSFSbo3mcAgpSmbp9QvFSVBUZ8zhjnC3ovM9qJM8Xw6K4WDCJjZMXxh8tJ91Xbinj62zhVpa24UzUx",
  "key22": "5yTLQzrMw5kkGM3qwxmVCnpo5x7sCoHF4ghtp9E7wa62xYdqrqvjYUZBbpje5CX4CPKwFsA5L2cBaQ9Hit8gELYt",
  "key23": "3ef4YPJKJvEBJRCmSDNYeG5V4oqB61Z5uKz8niejgxdomnZw1qYNAS5meAr2NL28Rc96P28FihHR8oys1BkgrCMc",
  "key24": "3VuF1ABqSZvnU1MGxSzPxAxCe72Db5PHLYTowx9T8UbGjbRmSG7dj1hBKVvzXSTLY7tNnnjaVvDwp77HFBtmEtbb",
  "key25": "y3kPezBFKygXNGqiWAtPZ4Sy64j28W2baqSr7kqcc4x361FZNz7eJDaLfHBHpxQsMwKD4CMxGaniMCGeCj34ojr",
  "key26": "BKrFktXEV7ciCi4j8MWGmvnWurL7rVejbEdWW2auJuABZJiZghwNYaofNSF7o4MwkAFy9y59CYeVoCXyyNL9XyX",
  "key27": "53r1BQySWXJDaeP7xU2wC62qpG3mhWgdMcXof5knn3pVfd5cjN5NSgWEejtdWcv9zHsdb5GASbhtY7ZatWsvGFVm",
  "key28": "2LHgZbWqiqHfR9agxfkjAYFuMK6rjwCDni7Nh5npVrfN9wJZkVBxpYCsAVjB6PFG7pXtqwLvUbp6YiVsXWgSGpi4",
  "key29": "3NUs1rGbxdt8X9Z5CiydSx4mYKaCFezGQPVvMc3YQh1iKnkjQur5jH7qZroMpxV7Ypsuf2UgVM2dQiHDRQf6fH98",
  "key30": "3TWnFo7CPqUdff5nfKrW38PLMTwbB5BCoFfTiA8RZRaCESBY2o5g8Fh7XDc9FMpgEtwTuxf5bdgN19DPX5nDLn2m"
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
