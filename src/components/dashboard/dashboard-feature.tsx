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
    "3Td35byccjU1No44XPdB9QMa62u3pYDj512mhwTPrszvHB14Sc2UKy5ghvUDkomGiPeZVzBWPqSwc6hs4LNtgfKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXK5xi7gpMq86AL1Fe7DR1oegRmdpWymozUTftzJN5sXFdWmhSZ8i9MXKzvKpnXPMtpe2cgjtrSGg6ZqHXUky4G",
  "key1": "5FTCk2MWz5P5YA8o5STvg8GerbwBKy3Hx1JNweLwFjFufSn2Vaxavxg6kD7BkUqinGkfGKSEgeUnMosSZGLiLY18",
  "key2": "3pcHasADEgcfimqFvDwHy2fCVKiCRJA9D9PLYRUHkb8Sf28FBENGqeJDDZd91deRFx1dwAg1ZABy4MiVZzhjZYdJ",
  "key3": "3kuMFitz4L1aZW725eXKw8vQ8dDSQ5Ub7NhxX3RPMYKSRRPvLjP1Wu5BenLXq2PiyCVHZ6ZTg65tgsNChaqk5LSa",
  "key4": "8pTiHLe7fvdNDNfYTJ7ddNn9C3rdrMQcFqi4NbQfM73t1ogLMQBsMqEMofruPKmhvPvvUYUn32vfTeBdG5wQsGo",
  "key5": "4eZFEPbaTPxE1er3dcxPs3jD2K1Qz8c14YGZeJqB88rJLASCriZWUEpV6cRgeBHbkpurLvCYLQTLKXsZvi5uBh1H",
  "key6": "5vBfHW6NL9hFxn5gK46ex2s13RdcNT7g7mPoQN3rZUzgkP4zLuK6Rn1UB5YYrrYDcZcfznG5jf5ufRQi5ZDg7oT8",
  "key7": "3znQ493XFx7uTECjfQ7NFDeXjMVe7dHDaWaPaJookFQkpJNEdZYhywfA8U3V4hN179o8mXCXqqVv3udsc56JZ7FR",
  "key8": "3gniENhA7qXLmjkNymxEdY2msE9XUbRn2Ja9zaMJa8gvu9V7QMiB5KRg7RML4DQ4YNJbKvtiRnoFt1uhCKq65XEK",
  "key9": "2sq8pBD2iqXNkV2UnEPLzXoRX21CSAXm85Z8bkr44ka4bWUFEvX3nggtR3HuUj5oSQYwJm1VHhjGBMwct5n16fxh",
  "key10": "hXeK24RmbiSkgndcaP2ckk54pQ5Db6ZpKKJZFHo4X7HESaPeoZRqjMtz8p9Phh7QHr34AD8xLAMurfHzG8JzNaL",
  "key11": "416YLkF7ZNkhcLuFvrK5zEqfEKrZrHGreYzSXMaQYtxcfPWiodqJKRddzZbdqvykhaFJjgxpM1FvHirweerH2fu",
  "key12": "674c1fLiQxuuQZKkqdCFg1gmpaBR6qzAdejqstedGm4Qdz3dwCwS17riVixUhZMu2XeeciWcZfVwbwiQDJfWaCYu",
  "key13": "B7djR6gBTTSaVtacYKyvWefRGn5ENZ224nuXSY9q5WQuiALsyDTY75dM5yCMuBJKuP1pa7wZpFzbFByz1d1v1oX",
  "key14": "3h4gu4yHp9buWftYwT57Ahxu6h9ZtYqcyYozdz2NEBqiteXmgRpTEU85B7wiKLRqyDKURRbDcHPHpDocbwfH9fig",
  "key15": "5bzncLuEAbU2dqRDtpjE3UocS6KDvJrfvqQnX6dC6Wo62AWrmzbt491TTtR6PnkgvcQCZ2b6enKb6vH7NZ6N3mRu",
  "key16": "3ZhL8zGxgeiJWaxJnYrWmfELuhGpY2FJwHfkqQcWnZmRzKozXykVZTMB1arkyJa79kicBW1GkKmamne5VMDRpDnK",
  "key17": "5HVEEdPJUyDQ2Jf85ZbaRQ3QnekS867n1Q1eZdUnTu7ZHiyRCFvrRC4W9fqR3dDL3vYjqfVMkmab9ZAHpuFhEprw",
  "key18": "5kFJTNNu4AANk6mR9E5ELP9rfvTwpog5Lp84qLBrCpEEMx2sAn8fL9qiXEhtmWcvteBpjEML7dPbr12JqVxs9yYt",
  "key19": "27CPNq3SpZEj8QgJ1kXbUUMbuhMS3wXZ1Vq64pXy2xTLNwZ8po7ajSXa2bJJhp9sgmMeF5yat1USnsXpnECi756H",
  "key20": "2F5NHvr5rb3sso93Lpt9aEM5bGZjtY2ZTJipykT6beUy61jg8L8fcyFdzxpX3MjsvsF85FHQfn8rYa53zjNEcHC5",
  "key21": "4F2eh78UsRznXaN9fHXqvizTm4XtCZAtcsMqXhw79cS85wNBjzyU84gA4hK7Sn2nd3EvEQKkkKSCMR9xKqb2Qk3H",
  "key22": "taTrpx3g77XpHhcauYSs7cpmVyT2zhJ6QjVnnYWc94dBe95bnJi2oN7Xy3L5sZeCZaehvtCQQPeX6Boj3C1dXPo",
  "key23": "2MJegHDVZQsnACisNJwoUYifhArAeqRoNtQ4WEkT6iVZD2Hgrcm1pJgRTrthzdAPmVYdsLuJe9KKJNX8tbrJymgp",
  "key24": "3J1PGAE3SGZVKDZqmrJNDKYW5YpMcWjNgRaDtauYvXeYHrPaun2FxJDapxVzsZ6464x4b8SEg9tQCRFnPhEeCMfA",
  "key25": "5N7yPWkf2NwN2GoyaSprNBnUqwQ3Ats2FKXga2PDVHeLLpHUPhyBrNZhfMtBHUSF8EVaKcQV2VAXqoU5MTNZ1AEP",
  "key26": "4c6TEeVWYMd4YAQZZYTs2EqrEQFvvJJeP9crwRFr8KsQjYs5XQzmXQGdjatsTN2bYS8ef8ncevkvx6s2R1boCvtu",
  "key27": "qaCpv7ZxURJgBPKHZ6dUKGmytGH6ic3DDMmJRN3Kyc84VgyDuGDZ3z5G2p1h77oFJvyELjwQjJkbeRPRnECDwvQ",
  "key28": "yNsEDMoDQqHAiDviV8nQK1dxw36gn7RqBrXTVY4SrhXvgkm9U7NKZ7ojyvRiAPEWKJznW8KZnb79vrn93qwP9xS",
  "key29": "63JTFqfyLqNoAyZ2W264jGfLNNagfRfAvFE3civoZ5gfdRFRCyqzqyzf77g8a19X3GUn4nGyQYdhn4W8TLuuzP4T",
  "key30": "5YJbU6xdsSuVVDy2R7kYz2Axndd3PK6drFY2p4Et4NYRD8Mp5kTEHu15ar5ipe6iCGr5c8ZFYbAmhvsXW3JY24fk",
  "key31": "n7dALmBNsby4D2empsUCutYNfoKY3B6m97Gsc9QQWmiTXpYQDwte6fdCHFKF2ixxjVwUfHBGKgG4QdXbxH6Vn8k"
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
