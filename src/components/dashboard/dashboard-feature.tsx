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
    "5fCefkY7vp2quXANmajdFbTcfXKwZdaL1UDtYmaHh4oVAm12SoqMJJh3RXbUA9K6DUM5DYSdv8FeGJzAVZ6pLyXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iddHFKt2VLGkgeF71fvdzYmGexTbQkC226P7YopLRJes7XW1XGVoiyzAWN2AxFfbkJMAP3xu3hLUD7d92fsMXh6",
  "key1": "4ijBUM3RhxKn3pQrcMbShWScCWidv2XQ39jjGsT7TmDRSqviPNJgiEM8Nc4H7mEjcUMHPwFhR2cphqQnVtDVe1g5",
  "key2": "vZFFkY6Vv2uTWMR6KyUUsvF6nAxAU3Qr9nVuDtUu6Lh16KFvVkG2YFkakJEfrTGqT9LEJH5cL3gdDRvFMDKh1sJ",
  "key3": "hUkxuqF6KZZpPzGLnZGrJS8QsFo9VQYtDCeAQYbsShGrhrX2FLTUTDzPUKrq3fGx89P75YcMRULdCZNoAAqpQh8",
  "key4": "EZunDtM9uYvNw4cf62WtfcWxSYqK8HQ5vV9RQBKsXBa3mFwMT3Y8XFf8mqZfy9xpXmmeXt8zGaV5XASUt1sHfJY",
  "key5": "4M8gRCvBrpwdrDwvD3x3e6zYchZJaM5xEH2TsmyjpkL6R738hpSxxvDsYTdDqESbnKorrXe75XeuQQYANeun2KRR",
  "key6": "3oiHxZeung6R8CxkyGKinZQEuCZUznMTeq5uSiAh8YCnNXZzcwzUNUmMNqZScCBQh3GCWXKKjmarn47y6piDc5iu",
  "key7": "32Htc5DFxEKpKA9h1MoLHg9rZQTtpBaSYge4qFuxwrKXjue8guXVz58LLdbtYcEkXG4p9xYDUxYcCBnLoEK6ZX3X",
  "key8": "5658ob6RLeJHnhqWxsK9nNTk8X74efTi78XcbvyituSxzxXZfQDE8g2h93Bz94hsddoMM3pcyrunn7BPWYC3VErW",
  "key9": "59b6yYmJq3wGxwtTaBtFbWJfuMQgcdMW9UsPccUfJs2wdufxdxxZSThZu6gyYHr7maHpNLCop7PaL4waemoAsGCJ",
  "key10": "3ganiVLhice7M8nZ2p5k7KKUbsQYSZALr98YfqquaUDGmUQDAf4E6i9A3431oRgxv8CfuwKK6WsRUe8yvY6w78sL",
  "key11": "22CZfDEgHvtrj3s4PsYfM7LNqXatFzfc7SmAUBUTCwEBz3zBCdXLTmyuGDv2p3UBLkNkha6ckZCYoWAmBkhuKiKy",
  "key12": "5nxQQ6GfJpAYqYWHpDuF6Z1ZoM4zd6xKDt7SD5PusatfazbELgPbsFxBrmpfbQodjigeHw5AH6XddVEWyE9uSeXr",
  "key13": "vZRUKNStoKpk4o6siAMyYi4hstkzB4kCjZPvMDiQBYs4TvwZpQNpjEUyxv3hi3xNvZM3fn8VcM4z3hwzWXAd3bB",
  "key14": "36sNHYshyUZ9i9ToKSx5N2BMbYgGxmdaT9nGyyeB9MEknUR1bb4jnBYZYChSjPViC8he2CP8J767hCykT8svb86Y",
  "key15": "3DQDxaXusww9t7LSxDHdAyjKGvTaagBWgfxDm6rotuuSY3EAxGJHSBi2Zdk5LoMSbVAfQwayFvQE4gf218TBoBJJ",
  "key16": "4nmobnmezEHji9gtR7u8rpcCmLBaWWLNyPdzD4gYJBw5Kq7Wmthhe7uTTZBvkrmueiA8KYNhVZY6dy298SquFvgp",
  "key17": "2Jx6juRsNwkTPfZMrZUT6w1BAVVkfZRf52vQS1A3gbmtNEJs2jiF546D9NADgJT9wjuViTLQtq49t9FzsKN6tL8L",
  "key18": "5cZUr6JzypoGdQraFRiZN4JBtJi2FUM5nroc6dKYCaafbd9Z7GhGbECZQXtEker7bnozggzgNdmnTRYE1qXNN2Lg",
  "key19": "jGdkqWQ3LRmVpsf3wWACMFNRBcDb3EEJhtnJzGDaFevz2HpyhsskniQd8hdZPT3eZXRLbjw7XLbmcNAVeA6KDAW",
  "key20": "3EKr32kvWHr9Z5TJczVYFd31sCoWNvqbr39G8QTkbx8uuiyjgMdowftgRUMYC8ZFZ9NCFfg1rjHJEH36bv7r3qwv",
  "key21": "3HVVjZwsf1ZYhCTNvr3HJSe93W8cBegFhV9ELRDKSDD5qJXmXzE2yANHSahTYvfqfgQv6ofxkRQZBedpAeWwDLkz",
  "key22": "45x9Dr1ANWo91aVBy9QeJXywqNbB5UvaihT4bX8zHL2maTiMbbkSuqUK9fCiQ5yy6pqqngbw8J5q9K9QTPpKt8RQ",
  "key23": "3BxugoBBYKSknTxkGn8eLuwscyu1Dia7jERUZGouUHxCvpWAVcRCGDdaLpMCGvgJYy5gE7cZC7foz4NmfVGb6zKv",
  "key24": "5ySLxhBGxCNytYsqsqfJRjyJqyUChZknjCkowZG1wfe3GLeA6TzQPg28eVAnq6C5codhHXvh7A5skCTJAyjV8UEN",
  "key25": "4gcjiB6hGRbmt9LsvnS3RaR7zmWPdioDUDSfHzMveKCyTH2C9XcXqHAKPB4tGgoP33CjDy7zGd3UK2MAoyFPRccu",
  "key26": "651KcwDFUvtbKkVaVws9AAGMVQ4W8PwNryV95CPxYazhv9xBWadQv6ygq7RCJVnRBWyZGKrk6BYVhR1GSCkdZQvG",
  "key27": "Jq7PRGS5gbtrYKcpiqRAYXHckEvtrdkYd5YpV3BocCZrH3zNKtBCAzJpuKQPwsi6mhX78dJyb4WtMF9zK8is4Mf",
  "key28": "2xnbcx4AVCo9wuH2fhtJmZZdwWz7xqZ5KBvVxJ9ubbzK6U6QAFpDrv1SKh3HNQmYQzwb2B4gVrZRA6YZpTQjRWBS",
  "key29": "4QKPiRAYkqxxVoZUv7bdoWWx9DhnK2SWtY1e8AAyAH7VZMMBrD9ythHnbaGqw9PYyiUZ9PKU1xiTuvfdZvcfGsTy",
  "key30": "4K9mQYr6dPCkJCrjmL3r77Uo1XWFBGAVtFK6XU3PDBg5Wf3vAw3mnpNiBQog2xgTqSVcGni35WUi2S6ABTfQ7prW",
  "key31": "2N2U1X5Qkfte26syfJHvaZ3JfY5FfJCujpzhr2rGRkn6vGQ6jZjWZUotnAjHkGdi3Dj8LzAmvrqCVKvk1PKVaDbk"
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
