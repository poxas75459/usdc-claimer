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
    "4gKut7khUiHCKTUgmVFUtDftf4AFbgdDA6hajmvHAFqoHCYsaLHfbHh5c3Ab8kf1M2ZhLR6JpZHi1M8RiDs2TZJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYakzcfougeCxC8NAhE8Xb9yQ3FPNmrtz5rQ18qsDMTNwGU3Mdh9Y5iodGXBLTtc3JAvznJPrfwzUbhPDXwSCrh",
  "key1": "4FEhVbvSafYRFDMuYGHeYhAfmy1PCJHGYYnQG3txtTVz6yhLrRB3Nu5xo6EQvZsPwH8nXFRnE7edppDpWR7nU15D",
  "key2": "5dVreguNKZSmbVMhbtFdqYCGrZSqx37JjXK3VYkJyWebFAr4yFSUAKSeQxqsGgnBMU8QEKoDqN73dQ46YtCnTLVL",
  "key3": "2NAYSYLiPJKft4ZHr9C9XZWvHzbMA15Hpu9fziZwpxuRpvxC1RV4F6fpLPD4QfdUcyJe8cvbFxmhLfbtX8r7hfAD",
  "key4": "5T1VjqnEbjaxYtkciu5VXXsUiqP1378auENo4fYGkUC7SqsBsH6fi2nQ6UXroYnGWawurk24nirjVm7URzZ5F5u",
  "key5": "UBNXt1H9DLzf6FR5XG8iBXibWF81g3E2zwFQyUv7ySSLbaM64K8TX3mkRsfDGoac4GQabhwbuzKQH4wRpvmCZxk",
  "key6": "3YJ8jWSREAeTuFiwyvVLawJcTZbij7WwjykhPamotcY1kKeVPVy5RgEAnEhBCANC7CAzNoQAALQmf5bPHaGveoTL",
  "key7": "5boR3rudKQmwYDrtE2GzqE21HZzTQGRnHMqV7eVZa8cKbegJDCyYjLj1NpcwHswBsDcfsrzhG5aV1ueXvpXRSKRQ",
  "key8": "2yj46wWbphh8ARJYYQjTacjPtXFfmjpzQ9fvx9H6gAkQztff49tkynmCKHsjeXh4GgkNjAv25rzoFNqWTeeHAxPD",
  "key9": "eS6P2MgjNwBFBJXM9LaR1zH8QHgUxnubcPstqgvdjWKZqX47WvbFVMzDK6nBEwjQXrFeb9GKnEVdMvDG96SFgXd",
  "key10": "xjcSX1kyoddaF9PjZZAjdQENWP772boVRqQkZBsLwqyC9QVED6KrFBeZedJRQWfDJnYNng3UGTZQbgFb8DRM83h",
  "key11": "5WBgYTu8gah7Q1xF9YZB58o3RPe8Xkac85uAf38GrHEdGnyBPS5YvCYBMtu51nyAiXHGzXu9adq1ALjbdgCWu9Vi",
  "key12": "3u4vU4zCfKGdP87MdaZRDEodiHMMYeDNrAQZigFXpcjWP3V1cJpdPw2xf5DPq4fQFrn6PNvjjNcaLZW8y4LMykYQ",
  "key13": "WGhEj5hWYjS2GaC9EyGaHMs514uHpLc5wJeag71DQaRjwfDNG72H4ZZxtNRQRzGhZEMqAisyYJXXPkHMmkkVcE2",
  "key14": "5Y6rLfYTgrhCUR6unKm1CFwVwJuuP5fj9CvM9ScQv9UeDFsPtY38mv7gAu2ATzpTgHH9iTCsXpujo9rEJTzVtHhk",
  "key15": "3gJBdx8aTfBZ29GqN5gcYbAPhbiTn89aSUtGA9rmBZUCmcSc9MK9QG1dbri8Ny79A5ZHpJJ1kRX1KR4j4nAParAA",
  "key16": "54i1m8RjHw3QxSg8fnxbdFWKupU9kUgWw4obyFotnUJB7YhcoFg1W1WobF8YUzZJFXaV2KzEaGwSCYZrwp3YsEXV",
  "key17": "3UCWRkDUSG46WMYck2oVnu6W2N2recvLzMjyHoPyaKtN2wDd7usB6xonfGDFeohgf7tsgeSHZqsvXwJwSf9NgMod",
  "key18": "4q7mGJQgAgW86vnVb4hb9yvhSdzKcuDunpeBb9fBCTFdbQRBhaoGkFnbKAPbsZSDFtTVqvBa9pqwEqPU7wmAPcW7",
  "key19": "2vLE8ZatYe7GLyq4rK8G6M95w3S8kDYadGr7HHcbT6g6okzpakzNVYBy3DNC6pLYrTq1t3K2cEQo2nZG7NYe5N9g",
  "key20": "2RmaAd5PDXm2FpUaT3AAVgUY64uuu8W2a5vRKD57Knq8FwVmn9CajYtNv8TeoTCuBEqwBq8j9bLbsXL1Q7D22g5w",
  "key21": "3MRCV6AyhTuPTc7uHgnAij9bcRTE1DohaJjBHn2bNipyLyBPyq73UR5wsTpwAeM4VCbaEfY3MVuhpcfAaa9cdHCm",
  "key22": "3RnmmseA98hKEArqsCJvgC5c98Xx45EZzW6af4iWwR8JmGidxWsPC6GtvWNMV7Hw4oyDtFs1o9b1zdRqL2t9v7xS",
  "key23": "27rpV7F7AmETe587YAaFHwQQ5y93gDCK6q9SuM2mbssCyjQVDbupdRGH93EWmevtw2o4dEF2a1bQrRW7TmPS2vrB",
  "key24": "EJd39DvHatdv7VWGdCSCj3RDZpb9mYLy2Znh4XVNzSP5cx16jZuGzC4udqNLeH5UiKHnTkN6kjPms98GL9dq8UA",
  "key25": "5xvyUC83UZ6ST5xX7VwPJic7M67LzRC1CPKn9Bg8ABib1PjErr7WhuYFMSvR8GmDJZVtJbwyo9UK9vLGYN6Ly5sP",
  "key26": "tKKku16nno27Pn8bojkGt4Z9YmjZ9uYpztDHXmA6FwX9RPk5Hfk3RKJ1Nq5rsrNh5Tuw22MkgR1SMXVPF8nW1KR",
  "key27": "5MWLxgFwHgXEBUWZbDXNoCFX9UMx1jide3HYGiqzNJam6kvj5N1DWLTYAMAYwPcAPmZS53bBvjpxiWhBYuPnwDkV",
  "key28": "5msCoqSVgWPjiTsm2Wyjea678xCg9MRHGjRTTRMV5gNACGZQwUrKj4QHpDKTcZ8bCeoYLaVtc4aeYEBy8jFh8Mf4",
  "key29": "64RPnLTNVhKQ7gTsXq13DejYd5g7CMuqjs3YbDRR3LoN7YC8kjJnWQv8wNjfzKnvJwy3uW8g1YtioBxiCbhAy3e2",
  "key30": "3zojS9yEkeG5TaCmThnEfYPhQPcTKWHbnUqJ7YQXaCT1HxjdsXrE6NHtHqDgz9bRqPL2dfoXbscRNjbo9rzr6Nf",
  "key31": "5nhndZP5vQRppoq4omJri3WcGv4JWjRbCShFUk1oFusQgjKvXDx8qbtV8h33CLGnTBY3Y7aD63X7S2PnTPVfoXit",
  "key32": "2f8AYZhGve9Q1CnM9avVLtRaxZFa1QUE1exu3zKZmitUwgasFx83Dyr133XDmTcEp6nXPEc2QP4vRcwqNzyQMzHb",
  "key33": "QTEiYAAeFy2Buk9zeYR7doj9Nki63F6ZYJZatCQGFUyNpQXZGG7tKbZTuR6sCC8ot7rh976dbDcmSJj9XaiDG68",
  "key34": "58da67oV21NgUWYCdnKYFJkRKmbDEcm6opTsWsEPp3KiZvCg1Hq6MJcVENigDxsaz4aYCG2bxZpEeiQhNaxAza3U",
  "key35": "5RuprpA8PkKXFJbQuoxbAb1cYxhqbW8kHqzcvQpTxhsLfb1Gff4qwfcZDk1xGaEE5Fdyyd8QnnpGHErMR4ApbUwz",
  "key36": "2KQvDe3ncWLVVWvR8Nv6size2D1F6M74xP5TjG4DjTiAexpgW8KpZ66RjEx9bwULvY7unmqGmtmesmt7w9HmnNgz"
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
