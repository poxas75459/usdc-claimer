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
    "642K2uNahGAd8UbNyBuPCXodk4WvAakMWJ6oKPxtKqE1kzNLgYVTJAzG9baeFJcA2avjdbpYt2uXfFvjLYRx1u9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnNbTKkiE5s7uzMtM2jwMXW3Fawi2frBPNcCFybQh9yEfrBgg3oH2h5LNPyyXPkhwSh46Jg3mrEKi4SXKaUnakC",
  "key1": "3TLHPrXjc2oWKFw2aec75iVNKxpVq5154tueso2cJW5s1xEv92t4BBE49NyG3vDvYWAnqYzKa5R1exNk6BKe5Ysr",
  "key2": "4atdMhWmze5EekYYPV8j4Eh4yRHyZxTS3S4myuoMwMiYBsLKBn2QSVNcjWHLJJxutKH6EYdwfc9E9H6RdkfQrw3u",
  "key3": "4px14aSddibfQ5djcmbP3NgbpkX4wi9uHvqS8ek9PFvAjs14bmJR49e82hi8gbYRYvBEf7M9JP1oNjwqsgPpihjR",
  "key4": "2Ph1SFb9KDadisEZ7f6wDc41H8ESEAQM2Jrt6zoeMm6Q1KenR4k8wuLGi475AQnT2n8iuhFPfeEVhyfxRc7HqFYA",
  "key5": "4jSYk3JQrMAiB5XGxH2Xuw9WU8zyLQBW3kv8ZsbxRJWtARabwpBTZ9SjSc61GaXutyhGxCm6jp4DXyatkM2fwFYe",
  "key6": "VW4gzhp9idwNeTsh3EPmL73xzJL4jZ52vPt2KWXbwqKupFD5pnn5HB1BDh48RwNGs17PimDw9NcHsSVYw4GKVjf",
  "key7": "3a1BQmT4XyMdba8A9VZ8icDd8ELXXWg1txq7QTB8Et6VYExPocTWvkuPRcmgoiQu5uat1sK75RK6rL2b4NVWNrYB",
  "key8": "4hKQx7zqVGKSVEvwmRTKgodLzaX2YQbasLct9mCjWrJVSU74ve7LkxBKHWV7dC9TnSDRE9RRgDC6tiJW2uKXekxZ",
  "key9": "3fdcm6gg47jFkWcLAh6YcrHRU69SNKFVYUQVeYMduM3Ls7DfJ721qyK4qSNshzYhhGeaCv8JARxXCuw5y4fLxeb1",
  "key10": "32CguAqWvxLKKhpi29YKV1dP9Hr4Qm39H6HZaorJheZ9smUhFJtDd7vWCT8bgcLKguHdpVFx4DJeJC8dwxkTT6kj",
  "key11": "2yEW1tpHXcuo5QQW5q3777Eg2RcJxgBEcfwGgdSwa3cqTQ1zRuV1YB3r5V7vC2UYQ97TBwTP7W8qY7bw5obBp7vP",
  "key12": "DrbY5Fd2VTHZV6LGxfS7zpvkxRd7GnrsL6rf3g2GyWVQdevJXa6MQVqwdB9cFWUvFxwkb8FJVntAMrmQbC6oY3x",
  "key13": "2j3tp8VumempPp9UfG8jWPfHgj1Po39QrjkvxC4YitEvJituEwGxAKsNwdxgXcF8w4z9qgdaXvnXMmw9GCfegGog",
  "key14": "gHfaYoHqLQCqtpaWs9sR39BTV7bR17QMpwETtUGFchSUdu7VGcrcisvjHxTJXd1kJ7rczVJGFWkw5JxqPb4GjQu",
  "key15": "44BYMAsvZ1NxbKFXLYC5vAHZs2zyq9dfR4t377nqmsH1Jb1VR27KGYsr7vPW6XNZKfcfw6ccHpupBchSRRUjoMhY",
  "key16": "X1RhFm4PTKUyLrByVuHLZSE25GHwScRdM1ZLEW5AnbXeXcZDDy189Q3fQ4ZHmLrtLAXSqaacYMzzQ4bacexZhia",
  "key17": "2cUdXBHF2Urk6vuYfhMukCyaNV7NkygT75zCSEQQ2ZNVWVJtic45A96S5rCyHc8tdHd8bXjC2KY45pjvGkW2Dics",
  "key18": "5v6FgUWfaMsEmSp7Qo98iEAH1JQCpQSQKcTsegDbdjbw1wYs7xUSqM3sKbzacko4FFtfgSQkwqLejy89w4XAEuRM",
  "key19": "2B1LrfpAKSLgu7XnAyNvxaQhMTz14mHBcNgqA5hKvWqXvnpyBSGYhJP8vYevDRkZ5abmFzTS9RsmTjx3Xq9xFH4V",
  "key20": "5KtuYrmN8KpJbPjGwPsyUDRjiirPxsTpFYfbDuTFz9yQ7YsKcfyPsVVS5ewoCf6kxzEEFQYB64CtLksxPHfMvfpt",
  "key21": "4ecbckhBBc2S4Ypf9ihm3u8qbwrZHdJ9aui8VEDF8pzZ4PZNHeJU39RHP3MbSsmm8Hg8YKV8McUSpsvmufKrRCMK",
  "key22": "2meKSKGusZgDYfDJFjVhXzyLNUk3nGGKGH4cZiMc7xDUwTpMDuu8KVBjx4ChFNEr7GkEVohaJJbrPAVHwsPJNA6t",
  "key23": "3yJ69JUzW1vMATBst3bZrngBLFHfWekvr7AJUaXicgxDhZJgikiRNZYjUDp8ASXvUpzjsTxNZV9oMtXYfUqdssjj",
  "key24": "3Q83iMAD3bCH68xELy7JKEeyLgY815Rkd5okzBtxyKTfDBiponT4f8H81FHAqJx45XmiXWdF4tmytzwuCCBMURGL",
  "key25": "5NyHGCzpAHPPxVomobuuAnCUGmRfAgUdXqoAiB2ETBgKpi5EHqtHheUn1ySbnHtCqda2ehiZiBcC2Hk4QRB28oJF",
  "key26": "p19NgvgSgeKyeiwZtm4xsWcvRvwL47Lyfu4wAQ6KrUXfE1BEPCA41uDgavxAHnt78XuuwKZvubU5k8KkyKpkxA6",
  "key27": "3hmuZnxCJk5VeHRgVmtqw114CbhSWLrznzCn7xUoU1fe1mD6Ws4uhbJ2TZ261tWztoJj7G4zua87Jt9DC3VSyGu2",
  "key28": "5DWGvnvLgtj8AXi1TdkVQmvebWv4xAwfmM1kukQGQKbAfp5RiXDCTRjom1hVNMXAVUrfHvqeuZpVTTeXjwBsDCBW",
  "key29": "3gEA8t9Hr5MisuwKaxkzG5VKxz4gWHSvJAMnbUQMG9HgnrjBPxxNrbxFYYJSZhVjE3qz12uVJ1XRqnT5oejPoo7h",
  "key30": "3dBX8Ryca8xCVNSsqS84vr9agegvMbwe2Hpq2RpR6RfGCSxJtyVexrakDntwuVqDARZzZqfPsEUa7czmYmrTDugY",
  "key31": "5VHeDaAmibiUJc6iUUi8SZqdVzQKYxk9Ss8XKiGymT8RE3zyFqTEcZdv9fr4vjNdn5hTVbTrKRFtp1ZSUrgc52R1"
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
