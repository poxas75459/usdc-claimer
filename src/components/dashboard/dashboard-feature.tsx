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
    "5hcwkPtutw6zwLWvuDTg2Z7UBqF1zx1BaWyjBvS7byK6Etss88U44E2TBBYtZbSWXkb1cUDSJGJ5UH7A16Ykh3Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKtUC5cGzw1FJ8SDAGKzoJ3b2jP8QhX6zQY6coURXr5rU9xorJ2kXUQKznyJ2h7gGN8TNQnDdREettmS7r1tNn5",
  "key1": "3227L3ngZSygTWiWqWo6V4Et7s8FsHQ9kve37jo8ktu6LmJXCEtTkibWY19Y7irUTxQfZeg4GSSV58jBsfx6B7Q9",
  "key2": "3JRKxwBtJfxKCFZetVZkuUj6ZVtyt5t4axZFVy1chg3kE3sn7Dfp14r52pG6wJcGU6Gvx49JJVYnytXF16WA7RAr",
  "key3": "4bhmQmwN8tZbM1np1aapM4SBB2sY84R3YEU8XtY9bbRi36cswsy3CALnzRZZEcqv6RchDf6pZbwAd2gBhN2T6nHi",
  "key4": "2de2UYCsm5gZCVqwgJQ1kdc5T79H8ji2dPkZRsb2uPd74jyhiyWV9tqdtgrHhAZYcaPSjNYyr8kUzFTaJf6AQhEq",
  "key5": "2op5qZzmxG9kK3hfepkvteFrCzAdiV6AXCD3GsQvx34DyoetCSNUbY6a2PMfnZXekXMhqhqKHor4VPhD8idkRFMC",
  "key6": "5mUqcFVJPzuNxA178xeJM8V868SwB1PZxj8ovXQoac46FRaP6ueCr8gbnoYc7RDceuLdYFF8LuERh28p3xvabf8A",
  "key7": "3jQKcsunan3E1RmLSRhmecFK63rzw4v5VNd89oKpRKYiZn7a9KAGCZKreAwXGGDZxn66AZXqbvi3HrRnXwLirw1Q",
  "key8": "4wRtTyuDYzc754osh2RwUFbAYx9uDe7Ncpyt1kMT6JmTbBUUYcidLVY6qhvsNBVckQnduDMQDJQ37Lyz6eXMkhs7",
  "key9": "5pwWBukF1MZDsYy5dWETog9S7h7pfDrzcQJopBy2BV4nkddsBZiFcsFJBzUwj1fh5tZovRXPKHK6v87tVzL4SJX5",
  "key10": "3e7zFMst5KNh5a1A64fKdaB6DJigRbr8Uy4yYLbq8npSq2MftshrGfEDtLcAMN9dP1sHXJNucb8bU5BpjgKmzsoP",
  "key11": "5Vf8Kh8o515ZxSKRETa89FUwDNMWzW57cEewVh5R7By9W41ZbS5Px3YQMmWSvPVWXq42RyR4kdjp5rdMbbcLYrQg",
  "key12": "zFfGRpFfaGNui23muNcaAxorq657RFVT6dG8s4YedTiLhapHTGYJcwGzc29XfuQ2mv1ZbfekkVG8tuewcq2TsNg",
  "key13": "3mQUUPbcSSvHGW2cD94hbsF7WBMeotBKQ7v2FgTTS9TDDZD2X4JZRKdMDEntCd2w6nTYcEKvu1VRV3ushpkJV9DM",
  "key14": "2krr2RNjDXMFnGJEfZvCpPiRETub3spAL4CY4PPke9T33TqinpEsnJonWwr3hREPv2xq1NNJCfCnBpV5cCuNJEAf",
  "key15": "5g85B9Mpo9s7q9a3zgANHHTKzdASjJoQD1dWinmXbbzU76ZMNkZsuAaFeyvzBJukncKyA5n8NSkb2pwxjbuAz8Nh",
  "key16": "2wWHTFpVeUyZSivQ8cHHjQ5kTftoUqT7iRjnXgUPP2NSJ47dDb4dXpP3LAQGeuyeYys28g7t61zipnG84FtnAg86",
  "key17": "4roNgXCZsGwfs4SG19TqpL6jj3mdryRYN3rfisSuGSZffhTpj2quqfN7MfmF9m91KbLuXerUAotUDFEaEeQoyUjL",
  "key18": "4GPuwtjAdWsPu5A2zGxxyZ84v3D8bF4kXd7wBXgx3NZi6WFBD2e33rewjtRpa3mJcPUrDx9qp3UZqyq5og3r9B64",
  "key19": "4xnkFuGfq2KJ1PtETGs3gj8KLBhNoKSxxvGb8JcHLtwkP8nWS47HUuzPfq2RbCsPSCnLfBau7QFJk9txC4y1iEoh",
  "key20": "2j3NNdXiu6AFToUYmDUv6rZ2TK7eBadDUGELcm231nW7xQJxB6ifuZhfgHzEXdgsJhHXZ7mUArmRmzwWvP1z9gTt",
  "key21": "2pyhmMkbFCEjLLupJNSWJ5TgBArtZEzuzAGvcAuMGai6NsGfHfPJVtFqVSMVv5rE7otrwFvziFaDrUpJyWM4Qijf",
  "key22": "2LPgFxkyGQ2fDxfDHSii5vD6tt9p2xv5UtMt76sMr1wv6khgUTf1qrFeDjXT6p4NKoc1CBQokECn38UrSu55f37B",
  "key23": "qA9YPWMQejLcsR132SxDz7CFuvMFdmASznc8orwCQLuwSAMZRPEPmG2kKdLdwRyirPS8zzxUVXnwYXmSE8dUykk",
  "key24": "4fNoDKqjmVtqzTzTt8XDVkXC4dyfBprPpoABbqb88gX9tiA5FMwb7V7KznXa8Xq5NFjx6QKtaaRuP7629WGgLNmg",
  "key25": "2SnHU4wWtH3VToopowSDyJ8ZktqQ99rk5m7GYEYqyjk6SwQZs3F74ocTvn9hFwjHMrrJDtWUKNnHojsmb2vW5V1N",
  "key26": "a4mbz12KfdThrch8Mm4C4BZSDZaJi9w6BmxWpjBi4fgdGFwiwPrKSedw2TttbL9fdGNXUXrP8FxkYSRUVLMRXNA",
  "key27": "3U1Gis5sg1hwcYUmjJBRGXQH6zg4f8S6c56HdJsJoaVXxyoiuKgdPPoigaCp57j6XKWvGtK9En2aZgJssSGJxDu7",
  "key28": "C3t91T32qA46ViZ63mHWMQ8YNhoBC8YNZEjNPynJxUbi7goMX4bZd7vFfjionaCA8as4y4YhgQVTskwtSnGgB5B",
  "key29": "4Yiqq6orBaHE6SWWZKr4EwQLjaqd748jp9cPqUY1v1CJ8oC8XNbAFao1hesiwkAbiXmwc9EPZk4twK8hUp3rKYyW",
  "key30": "5zxkNRhS6nA6ZYuRGXsyCtb5AZf85PzaVzXT6ZvQcQvLgDMpSSrwgKdtTq8jvP3zXdtpwhtXYbD51mNwUMU1ar8x",
  "key31": "WoU7Derx5kQbmkkCwNe3vs6U7wj4dbv1FKaTjRsbEcRnv1EPDd2DA7KgyabSKyErnyivWuZZSACFQrhhjZNXKu3",
  "key32": "2wbd6rRD5JZ3YgSUWjA7ENDjW9n3c8eSNQG7o4Zwu1njvYyEpgHbHWYvnXouQhq7FKtaftxnwwQpKfCALE22Ant3",
  "key33": "xkacEmEBCnvMYFrEsR3FPVAcAC1XAd8tYGxAbU4dX3o7e6WbKFRMZ4g7J2USopt4VqZdQ6f79sS9MY2NXfXc2p6",
  "key34": "4HYa9TSs9YqkBLyph5KtWJFxZuHLJi94oZcdp7ZAFezXeJhSQNVkVYQZZQhZaA5zfiKbLMUPkYP4RkHsSeCw77U4",
  "key35": "2d1bDqiLadqndsPZTPqLFRK468QyXrfHy3QGKFCXx9SXVndj52zzDBU3zvVdj62vWutE9TTAo9FTgAVLvYSDc5km",
  "key36": "2nEM1auVNPGHxaRUqfp17tXVhNzHK2caCpyEv7vpCKLLQ5rC1fSpz2swbhQhodN9DRemCCWqPmWTwk6Z2c1Z5JxW",
  "key37": "51y3MnptGT5JHYmL2d1UxfYwmwyyEdJhsT24xav3HaYvciVXUNentQf9XNuUbnBJoegWBXDt2J4SgxyTVx1XhoyD",
  "key38": "53DhJN8ubUCTVF5XqxLH7KTpcnAeoQbws8PJcYzHabQVKFTikwxBumkhNksvUucfjfiioZJJ3cq1QxRQgczsxE3a"
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
