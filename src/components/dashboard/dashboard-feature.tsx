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
    "55AwGBse8AH7hUGkFNTakE8vSUpLDETz6Gf3QnKkpD3AkLPdWGwmxYBoW1RGd7BraCNZVLjCfQR9PFTq14uJL1nZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGARA9XW36D7599dJh2Nu2XjPA8SKZ1dAojUfogXsTsvHiTpRyiEa7LGn57gUnws3zLKxxHJQYHC81N6UE2Bazh",
  "key1": "4csRFn4jwp731VUtnRHMY2R8UrNV62xXUJNJBkT6e1mc3bYj8hSqvP8zx2hmZQ3NZBoq9eiuPArorPKu98awaG3q",
  "key2": "427JrMCQujYXCmzpAXoovMhtQCGqT3koUoax1mgJrciqfp1Mjw6ZoSVvaoGHDH8feWvgs5EJmYoS9qzZpeB6y83b",
  "key3": "4debRdanJeCyLFvn2oyEEVuWQn9jTTWjYXLZCeARJCDz5g3g6HaV4bqQrWrQgff2fzPNrw2mNpDSSJKvMMV14rEh",
  "key4": "4JQ2ST5mySyAT4Puk7hF1pRvWhYCfA6L2yeqHXa3Ba796D3ZFTXdhPpd3vtuGjCVRDAKdRdQcMikYUYWnWbJvnnj",
  "key5": "2MtTyFGuLJwhyA5zjRFHhX5Ufyk3xCDwP96rxKgoT7Kt9MX7P4pYnNgkyvvPTLcQqtC1dHdFjsvW7su2BtNRvC4",
  "key6": "UaqjPSQUji1fMtjYxZ5iutGDTi2JeravhF2cCHc9P35QMCo2a8oSqEnWXgWVyG4QXm732d9xnX38uQmg2uvRieZ",
  "key7": "2teT8QtSR5QJL24YBg6w9hc8WzRmGv61eiZsAvq5GyMUdyyyFDJMrfFiFVkNfQDJowY9u7cgyhXEoWyXqvvBRQ7y",
  "key8": "4uGW5gCYvToW7JCBcZXJ7dEQXo3H2g32RFBtLWTFfcLmvvc3xmSoWPTGYycxHiUtzBgHZmnerrSERekoE2KQjwmg",
  "key9": "5G5Je94iJgKYekzsam5fCeknnEHa8RLNfkZ2ZqmAHmFcUSbuwwCeUFZbzZoyqTTPm2attrQwCQCBzkM15V3agshF",
  "key10": "4fMGppgZV8YSqo5z9NjiWjiNiQ8v1sdGyFf632sjuSountqWpaWUK7DeR8EC5tcjZC79LBkjDy2ULzSatuMwmyFY",
  "key11": "56UiVDALb9ckVZGmHzF87HHMBpcyUUwis7tbaeSZ9cDYB2F6TS2Sgw3s7NgoSui5yeGAEkQ1EXh3tcNzQk1y9Wfd",
  "key12": "5C6VhF4fBTxgHPNEyQSsfxfQggtPCKvaVJhUwYxxoLqTbWk2Q9ThyMuWvgpHexoBgaWvQEbo2hoEDPRWzz6VDFvG",
  "key13": "5C1sH8pxKCq7Bb6SHJ4sY4cfD3HvenxvEbdLzBwMUCZfYeGsmsyK6pzfZHhU8LiSSXH2b4H9CvpRCcpkLE1CJz1u",
  "key14": "4GQ4Zt44rixjnQsgUVt7pucEAH3FNW4xXE7VPUbsm7MsstBPW3Ezcqv6YXDdsmSWqmso126dJtpR7PDkfWcySjdv",
  "key15": "5sQARRtDkT6gpeGEK7XSmyNyPyTHXUEnGqjqED2H2m8YuubY7JKnzjvMBSsQUv7YLUvR8Hjbi2ZfPJCkhdymyqx5",
  "key16": "256Gt8K11MCMrSGdazypuGaV3bj6NFo8eZyu5ci4kteLnGkKEuEjrfaxRBmanEYNCMovZmJe7ZEiXEELsNStuW9k",
  "key17": "5WwH4f1dCaZn2Msc8kUCK1LfqaEuMH5BvYNGi8LJ2RhNsmPGPWee1s93VM3Z3ZiNTYWiJkmmFcyrMx3fhsgLZC3T",
  "key18": "3VQVcbWFTgeVSbWHwcXwURQ3UyigRUGiXX64AesZdtg8mnPHfSBXugGwctzPwXbsnJLj43tK9LFkpctLmKfzRdvN",
  "key19": "35pZbN1mWXf1zUezFKRek3KdYA8sSi1tJo8qoav5uavoM3k8RHZtDgkGfxQuyPQzs7sfj3Tip3N2j9mmUEavEvN6",
  "key20": "4y74KwfxSzy3FWvPoPKuATjbxGQXeJXwdpbaKHXPLshf6xW2dLCQdzHiQ38Hy9RR6mAwpuEQbxySdQNBWubx1fyS",
  "key21": "49nnbJzRJuakGPx3rBp2B6ch4rggeTG1njgKLqaV7RyLBqAdFmZ1DDiWhMWV1QpHy8qABj4YsKtj6SZvomu5SdKh",
  "key22": "4R4pPLnFLKm6h8qTXTvJQNxfSmX3aTGsWZ9cVfr2xZUdY7UrLDyjsh5UBm1DDnzsE4c3UhSBeGynDgU67kW4qmcs",
  "key23": "4shUcFHBH44aPAfuh8AXR9aMW21PxNtdhYYa7nRYeMZHZyYMAUkaTyJ2YiJT9Am7cwKM9D2bAc3fAopBzgpFUakz",
  "key24": "5o3fjisC9r4sz9cNSv9HbddKWY4xdyvThtA17XTwSNwo35emDVMQATFrg3YaEVP6wYFUPkuwKGUQEz1fsGcovaKJ",
  "key25": "2ucHnETadjn6X6SwzguiBqRFCMFJ7ZvZsCacBySckFXLo41iigq5uU8JwqeE8DCmPYYQQZ5GeFELVexvzPdwNSxQ",
  "key26": "2Sx45tDt5sMbzTCjAsJh1VeQwGWVRfAtwMo8nfo3t9i91GqZPpRZDH7dnpepDJkzaUX9DZ7idmeFq7YpzLbvFobB",
  "key27": "5V1fpyGxSUeVRvGXD64gsbdhwic7ycQ353JaMbVQXW5AAd7VLYLwfF8vbrcDQfJnT9EZNeoFTyZedY3RUCoXbZey",
  "key28": "5fozfsQfs9v5E1ZqQmc1oYpf1eT8ZAoFiwMA5MSaHq5UdXk4L3R3kWm4akhBrXfkY72piXFtfREDe5bUTLjqzPPt",
  "key29": "4TteiY49Dkx93FqEtWKA4eejwvofhz1AVpVaTCi8PpbAiVpz91AM8s6LykyPoRBDkhTbhbZHzijJnnmi8f5qk55Q",
  "key30": "65i3Ub5ji6UJhTPpYngeB6jgK5uvjBCzbMgVjnrWBLv8TZzEBtCHuTf88aqcN9TWfHhYHtfvUMih1fzHetRknajp",
  "key31": "4o2PZvnvUba6h8KzTcARMSkoXZyEduSYGB1zKoFbJoVYSFHUK5cdjtXWDgHSmqHoBtmX8BuKyQVbmEdoZfR2pdpX",
  "key32": "2LUsLrJ21PDp8guy5UF89jSLWsApNLFUfPFVuYWS3yqkP5kDQ7eQjji2YSudRFPaG3tFDjhGnsj4EyC3CemShAJM",
  "key33": "W3PLzcmCySygcpwkUDjjoAkfEssSZUCNyuQHapTyRN6LgaWZbLyhHHrZNk6k7VafxYaxn6JHqaUvXTcr7gJKSTu",
  "key34": "4mCfsfPxJZwb9CSN62DNAw8nRndQyxqHKTGdjxAyCTQEfsDrrrdc3zunqtFJaezCBkvyYFcRjuhzLn6PsFVjEhz9"
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
