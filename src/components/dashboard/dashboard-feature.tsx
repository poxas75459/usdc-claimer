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
    "42JjfnWuDUJ7p5crJN6V86cBy3FYVYTqQ1mnm8kDcKEzfNkZnMH38PpTThVPxUjCgx4QsyNJcwSsTHDEJ3B4DFbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tybnFktiRaxdmJmgd9uhVmPT4YbqM5r33a9ourayjYM61jghvCaEePTUARimQEwzn3wsvhz4cAsKPfQQWuahcKR",
  "key1": "7GQLYFyFpNzMbkuw85k2wxCnH3eFMTQgGaPxVfzSNCtJJFnjhAiKkNdHU6EuDDBGUx1DQQxkjdtsLkDDrd96qZa",
  "key2": "32wRwDZqSbLd4Uy6vNvYrR3f29y1wV7FouG8j3rRaEnPt6or86HHBXqa2wh7L2LoBXrE2EJBWGbHtcW3GTkSYDn3",
  "key3": "r19nJcEj9M9RagHRvyFCgBkguqSKLw3keMa2oALexJHXZHB6WVqFWpg2Hoq8JWfVTWeChHQdJNHJmzM4ZFoLGp9",
  "key4": "2cFRCfULaQ2Ric3YnVVxVpM7srunSyizGd2qNyaW243ciSEM8zrYQaNihNsAextASTdHEZYy82yV7fpCr4KeGKv7",
  "key5": "42mZziS2P3mQ8yY283Z1SXxKHL4fTRLoUuhFovaSACSWdb8X9r6xbRbybpa775Y18UnFHL76B8JwmvPEmzbu3GGr",
  "key6": "3TmmJCZjxAhUwnX2vCm6XszCzzMxG5Lx2EvMtNCD4Fx6t9NbXiEcsCf1fxMZT9FzmrdadPf1G1cBYMTdxRMi93TE",
  "key7": "3V8V1k6ixeCwtjDSGTk9fkLnusKVwHJS8t8Vv7rFeu2iSJUWm8tio4aJ6mX8QGyttnntfBvwst9przF68qXYNBMx",
  "key8": "37cnavh8rKK2imNdiGd6wUVDZkcz2yMxxUJkVgZtP8G2impjpoWYViEyWXdLp4RaG5L5jYKCn3EVkNDheS6K6AN",
  "key9": "35CRkUMHFadxpZPYDZGhgyU59VREkycJnWFdpte8dqEM8jmvoxyni8E7kzAfT8XiEgUZzcyLbBAgR2ysrbMRUqwk",
  "key10": "24gQN5hn3dprtvrfBQ4rNuUbpV5eSWhvMd1DnJvQLZKB7Apk4qufSQQMvUR673UpSkMnTjUxgLYQAxBTQvzXrR7Q",
  "key11": "4JZbiEVM7z2oyyzgzsgdwAPsNXj3DBKpZDXEQKo3BwUZyzJPnmcGUNdfW5jHpnLrWHY4Kmi4qRAiJCydWfr1cxQd",
  "key12": "2tbFoVRXtP8r1yKYPAgVGCVh4E45hetAZNSP8hg3yn6zdyurNuFFqFWzDxS3n6bjp3T7hc2A4NkYuRZAg76JmUWP",
  "key13": "4ugBCTeAUuU7WM8D2eZCSN5pjfTJYRNpcsx5Fv4eZj3bL3Ah3R42QwvEZpCmLPUK1K7zfFGEW2Q6Aeth124dFf7C",
  "key14": "3KCNeDv9Q2HareqNXKRbL57zzwoTxHUogVXstM88qCPV1K3aWm3qzMh9jwg6vcPfGjXspfqMj2oXYiDSimRY59Xm",
  "key15": "57MSwunVPm1Tuq2GtLs7xcwbVwmSUAPJsnDVK2NAXrwHqbX3uKaqtaQc3NfVuMb8AXuq39NSjMyh6STRQZv3KemP",
  "key16": "5Q4oG9zRLNnTynUg5i1qBBYMmBL1aQTcGY85X7L4ggPKPteLZ9Hg3v8gecuYRWCeNfsyTmMNgi7EErVvZLmRnqXP",
  "key17": "8rGRMzvesqMYnrdzVwD8kTsD2fVcsEJFAo96jSGS12TqPeTZAqFsLpFXEsZwQ9TWK6wURfwN9DTwsLp4DSF5nbu",
  "key18": "2s1zx1qe1JcZSvt7qsY3wEzBn7zbMybPUM4VgSoYmxbo4wvXNY6AKahLq4GZ3K2Yt5H2BREChkD3NkjLFyqzCN3J",
  "key19": "2bLBL5rPGvv8oKXVkDFeTVfg8Aighzh1eYBJY8jM4LCw86q7ihmwyFj3SdznQZFEvKdaD376i4JwkSabeJh3GH3g",
  "key20": "5pHx7ZaYyGcSswb9KRzUdbgHXekqVj7NAGvGUZAWgQknbCMmh9oYKEp68kRZZvE5NR6c3pa8ezcMRhVTnKPHZhkg",
  "key21": "3RTkWR7chfxbw4yjP4XZN6RyKGeG172M3TYvQq1i7fLbJHqq4muXyxv6Cp2ncbne38nhV8sLd2NnSGP5BC2p9keY",
  "key22": "2f1tYhzY8aSF6T2yZu2kymSLYcremgXuScKcfYUw4p1kebi5mq8ooQuhum2Cbpmjq9hezAKwVaRVetfFaxpqUacy",
  "key23": "4S6BbzWWgqM2PPFPmGwQdN6Q1mSEpGuULSff8WwTq5RnpvPtb7d2phusmhAeSRc4tBczPsNaeZP1oFtN6jeC55tM",
  "key24": "25GhK73Qg5hPqBWG2d9uJqzw3LXNTSf8k8abBe1EdZrB5VYPYdsRqJEdUt5DYWpAP222Xa1ygwsRHKSmeGb4em7q"
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
