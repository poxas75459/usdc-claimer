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
    "ALjeCcuzYLDUqbZH3capPj3PosQFPUBadXYgEg69MyHnAgz2K3qamkcRamkyu9YUeY118o4ehk66VeZ56pTQZBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NJNYP2GnxxyErQYkXoakKMmcfTneYNnmcoQPtghkVURdYksrvhGkB4Kr5vgAPKzfVbtTtE9Tk9MNUb9JFpbhxB",
  "key1": "hwui6jRPVCVexYkTRQo7NV3JCEziKN61foRzmB9bT93RrevteXNx7Vy9DdBTvt3izjoWfge8SKoyF8d6fiKKEJS",
  "key2": "SNRavutAhuMogPM4xgUMYPT5yaWgxq2g4HVBqKjeW2SBEFqoSGpDrQif6AMY7KMJqpNFV8X2WLzbJQMW2M3iKxh",
  "key3": "489obK3QmrqNfEqgzSmnoLVryoEGQTLqM1DihN5cLYF9oZExTRDcNVgNUZgcE3ZK8gqS5CZCaBBHeKrujdbxkHHV",
  "key4": "497Gg8c33YrF1V7GWyRSR8nfGcW7XufgnGqkgHacDJX254AWfLeHgs7m7Pq9f5RzTDrTUq7SQ8Zv1befzjqHdKJJ",
  "key5": "55KJNVzZSgL4eLnkTqLAiib6fGBy5K9YuekDnwm3r4GLPefe3FCZqAwq4zg8LESR4ZUkCeDnbiaW7B1h6dKrCGHC",
  "key6": "4yBnLsVA5EniqdJi9KCmr6YYc2FymJJL51o8smeSgp6Nyok3mG31ayyiejxLrsWWyt3AyK1XCWmkGTnmicU37g9j",
  "key7": "2mMjvRmjgyCW8BqH1wqXP9gnFfJc6u98A5M1oQA6uNnXY7NadUuY9dj5EVXFM5VWNGoV6pnmiWLbUXNx2K23UsqX",
  "key8": "3vcXKSwaXjc12jZ97VBwydg761rNTFaicyHNvHyHYcsDqjDk4Gi86JBKnvq8Bybfko3RUdsFt39PNj4AHA3Zdach",
  "key9": "5uS1icF2JSwXvUHUPDxFYZbJSnv7ZKaf1KYg6pyX1WNZ4FCmA2Ph1aHhEmLJgrjZFNcTYgx8jCz117GVvMzG2eKj",
  "key10": "2Ut7Kt3g2v3Qvs8qejpJvDRVqDeap2dMN5JUXMs9VFy5Et7YR4MJiEWWy4cDt9ceDMriYN4MVcq5osQhgVmSsEK4",
  "key11": "EDdtuqYsN6WB36bag6gXVZ5tfStwQEEjZ6JGCTss5aWJFKDDZBGAA6H3rrG786Dh7wGJUb5ztJ6U9wpKdpdagDG",
  "key12": "4zTSKuKseQbrCb4SNYLWSjkErcoTLXjWnMfqSrAh6TgVZmfjrCuqBETznoDEhj6VvihJVeVjkxi58pDu9BncpKzZ",
  "key13": "pF4fHz2FUQTgMQPYuzZHemHu4k1Qgn9NexoK3xzsdQmPgYv5X2NwgQmV3uCjvAT4QFwdzND4yB4Z4ELMQ675Z7s",
  "key14": "3bTxRGH1FUoHkFoVntYG6MGn9YLmyJZ5PFPCEcbqpdcpzwJDQaKaW6YgcdsncspK2DT7ZiD3cee1DF3pyanG78qB",
  "key15": "QsiAT7BWRqz6SjUeVF9H2siqjiUzwCcP3454FGKuYPaeEXKCLegkowknmtFcwY5LU8TDsJMyHhEGFicxrvVhN5F",
  "key16": "2V7ybRhrrRR8tM4R8gGxjxWdbX9KpNpbgmRCaqphb4K2FRD9JB1owq2rQfcKB46D8qqApFiWUGAjiHre5MLtQNFa",
  "key17": "2THFAcpYPLQ4YvKUW5ABMep3Y5gc4AaoRtgV4SwmoFPkKyGYzJtj2fDdWM42TchefX4RJYmXZ7mA5P3Xzse7ges2",
  "key18": "5YdF91pNH9mBXRMrsi5MVUXvKvhMbPod5Qu7GYsPyMGwycrbCCQZABQ8Gv42DHC6Xfhc98E71togjbnHK4WBf4Zj",
  "key19": "26qeTzmo1eWYwVEyKj3aqbSTxm94pN7ZF2FRyH2r3SFC6YUJi1GuiPzbLpC2FH9YAimGM8q17nquv9k2h3JRwHYQ",
  "key20": "jventDCgx8p5nwcVV5RrW47DTgeix2WG9wLkAmegRqqeToScGcWAVpfKViBfQtjcLykJdTWmGsHrg24hCkx25C9",
  "key21": "CEcyA49P3Fv3quikzBaVUobRbqJZsFCdRC7Q3rgyDpR9JSJ4TcZSntjVrNVk36cNRwwJTnbZznvuzMoiKmb1xXk",
  "key22": "3UnX4Ru2ZRWRhcDJRKTMrkfeZHn12uMLUf91h5PwSDKTQyPKUK3Cc9nNFwABxsm2QD8DBUMBRDHm3jMBJkiSdSgA",
  "key23": "2nC4nnCoRupdNp5PFvRw6HMBVNaiAKbdCyy6ZWdRK7UdrtCMeaPN5rmJZ1QpgQKAXqeb1iG77Cfc6baAv6WqHvkr",
  "key24": "5Vrs6gqYKHzkMUaBWQQRCSc2x1H2phoUZXn8MT5U1SESFdMKQh6wdwrLkidL9LMqFtzxBih2SpLCtReEXKdMiyS3"
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
