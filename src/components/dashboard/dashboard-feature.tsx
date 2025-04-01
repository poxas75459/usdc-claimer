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
    "4JBmuwmXgyYNUxWuG2QJeFm4aWK715sYy6WNtPnALDrGR1dNkoaGSSQindkQ5XJMgtb7LSJBZm18R6ap6274TZEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ffAk68vt7is6mMzjEhMU2zyMm1E5Ei2jTdcLFGKD1syqjgCVGN89msF8FQXoQ8FVak2GknRGqcaDLahn2Cagbz",
  "key1": "2JJdn7gVVdy2dTAX2rWx7DiBLs8hNPwmiRNMg7X1NnUDLy7STepUTg3HTtAz8EN164CEHF9VroTdcgv2jxyqsygr",
  "key2": "S2Zr5e9SFhDkBvd2LFreDVTTtHdx2YuE3VJFURTfH9F4d4fErj661gJDevWsS56HZdaBKBKNykMnHSWf4dgQEgY",
  "key3": "39gKXtAWeBiGVSkwFJEoNMJ5YVM3vJRmJ3gST73HX3zua8bcvAzvHKrcrh3iFtbA6f7t1tey77gmLX4P6BjRJgrb",
  "key4": "4aRK9tTxgRzhtfzY1jwRSJxHvin149nvqBxudoQzFnjgGc8jZ6RebBoJqghMHe8B8oA2DyKVsXXbcK6qB3UBQMFy",
  "key5": "4KXXzbdTJLaG4Ay3DmBcyPCzbZys35Dpes7p8K6RLoqgYQrCMAx9Q4GvpZGrjQdz6jaAwdiPhsHqkc4mLpypJiju",
  "key6": "55xRzP6rpwV3Jfp3KaoUK9nRW8tkxp7L14vHjRm6k3C9yJRjjAraAEHh17TpMba7ohvNWjMYqb97UkEn2sRZCUdt",
  "key7": "2hSBRV8S2SGseQfGahGefzdFzVoqqRU2usCgmZFucNdUPdQzymVpkJRuhdzybXkxfx1GrBSPft3uoa62eKdZhXd2",
  "key8": "39iCqQfUJszPm18BYnXrhdeVWGXK4XyCXc7ZzEPaHYbJZ27Nmx1SJ6WS3TCnt8qULYa5YW13xvbjjycqyVzAcbAx",
  "key9": "4hvHHv1uoGvLeTYmGZT5nTGkjJ7ZmjFJESmXMs4hnoHXcrRUXnpyKzUuVqt2x3dWLLGmgKgv1aSrwNBLZHK6xfup",
  "key10": "4VpM8W3AH1yJcQWDsF4hr7cs4hbtnCnR3amz9FbuDy4Rt11jqabBCYWwNCTtr3UL2uMk4yXkhz7QH31PKEJitKxT",
  "key11": "4tnCLbxE7KXa2DeaJ4iRJsvgBjgBDXGk1K1jP1nSpysENwj9rx7hNqDjx6BSw4GZf1pvnhfzTc8rkbiXQh32aSLg",
  "key12": "2frb86qFJs1S2ywzeVw6b1AqJfVF7HayhJLEpz3ciqYd6v313iDCy97uiuhMn1wxcXRVjNogVCDZTwZpVnvyS7AS",
  "key13": "55kerkcUqeLbe6haUVKinBCcGfRaemJZVBaSV39g417YQbvkwjaBWdPiu9ygqCm6icCxNzTEuU3bamMrsHcGRH8B",
  "key14": "4m1u6GM51sUYnanb4m2jDX1gBFJggQhchJauKbB5Rk3eaufRax52FqDgYorFXZWFTa9bs889iWoh8nrxcSLEHV9n",
  "key15": "5NPxLGBj8Gcg3eXGY65zxNhXpAVoURYxCkcPPRdzvUXKRTir7exZC6dcRFXk5WGisegeXMXTANSi9hxciaJqCco8",
  "key16": "2dtYEbtvBnKnZhxVhJwAhDpNMfngvsnKqqrtArfyJogGybc4i1fkF5iy7R5qTSqBooERd7LTNY4EYsAnjfF7bYWE",
  "key17": "4Nph2YuPJV8MS7egUSGLvXux1CWveSe3DmLDDpMQJQm9q8yf9fz95xDVajAsM3jxks5oUqtPfGgK5SUR1Qivx9mL",
  "key18": "5mVpGt8hshnz7DTAUBdF63Hdb3M3SVRaGtNygE1nwq4gJzPyg3BuymiuVQb6YD1cVUcmYxovsMxFHUhD4RxJowgF",
  "key19": "4uFymd48XCgEuQJL2Ho3q5eZRE11DkwbUeGqxjjiU9vQQYANCQUvgCeyX4fQEcHmcyFv9opkh27SS59ZKza8UaVA",
  "key20": "3y1KaouHhscWnaUNXXq6s8iM4zZ3B37MD53LrPZgy6osqRAWweuqPCeDaSsVxEgrzkjWhGwuvtQr3pPKcpAWiSer",
  "key21": "GKMtRF4XMFWr23U2benqoJpNX1DfVVmjZaPQeEc6WjjdqDQB4L9NmHMuNKavaL2hco3NAGi994mhEc3wNHbwfcz",
  "key22": "ScQ7vetHKVBpb1FTTkc1eZ9aDXNYNvUtUw9j6djMeL3uZXoVybGudWa7RBe6nQYD9pqgnBoiW7iYwRHmRr4k8qR",
  "key23": "65CjySrhLqtDL5bUeqyxKb2XTjEZqfr1f2zund7wbSCB9F77Kyayxh3smVPsuoF8zF8rasYuZHNRrK7oNKR46QFx",
  "key24": "2dzq3uhF2k6ZE1sBX4dm4E8Q1WW4ka1VKgbWwbbw4LMWRb2sfRjM5hoDbWzzqPn5qQq79KucpVPbsmixfG6AcFch",
  "key25": "4bggmhXwttLQsN22bS4g6ksyThJeZz7F4usSqNm4njHBAbeRvQ7XKBDougLwiHUWfTFYshTR8axiD4q3Cw198Lv3",
  "key26": "rP1P7QSgsnrC9N6TwfX61CUQYQwQ2msXPvQh9PdxoCUSgUAvgGV69PJfKkVHVWadm4YHjbVDuiZLamZdBPeiCH8",
  "key27": "2eK6vPtkAwcHp6rS29gTWmx8r9qKAv3Us8CP98tQwDYNNc8X26bY9F7qsyHAopwyWBd9DxBRHxnKukWw99AV2rkf",
  "key28": "GpZcsFqNAZ5wBG6RrFb8na1CcULzVfj4EXsBbu56Qy3aJmTJius8sN1PRiguLkiLH1WMkVA8nX18S6cu2WMjVNo",
  "key29": "5dHPgmTX7dAG9WHST9NmZ2PynG24NmQMDgtdfDRLqi4sD8mPU6MVdSmYodcTJd1DxvWz3S7bb7eUJTvqkw1PZxji",
  "key30": "5JB39BUu5TNAGTeAScrbGdeP2bCUrtYufFtFNFrnXU54FK6w4V5PJBBadzpsBAoW4Re9AgwestUYMoaL2AY5XWBW",
  "key31": "oXC3mswh7Uru9GE8pSaMZ2Kz9JVWm9vVQgJrWkkkecB1YubUMUTSCpbjK7fAanBRu7RqN6V47iXa2TbPR8ix47R",
  "key32": "3gjDQrtQk3cXJFd7FQhSTB8iXiztH8wP1kV1Rn9RY1vzDSk6jMhrcZvDY7j3MA6Dh661B53RBww2ppcwDxsJ1ZR",
  "key33": "5ygx142hoFWzAC3tFAKxBnLnVphxwDngEkoHETeY6hHFTa5vaoGnByNRgVetfA9QTnSajKvotyrAvbjdMHK5a1DJ",
  "key34": "3r4CnZrFCd7yVnAsTNVtnXeXHaeiF6KsmV3TJTzqfAaBmbtbaQdWNq5YCNkhJxWgMJkfKCpB89Y1HHjc8LhnFWUn",
  "key35": "4Me7gDv5MSN9o6tZqnGkJKSAeM9u6QgGE4BX8xgsDzr1YFnhg9PJb3fXMWR2FiQ6bCMh2wg6kb46pQxfkrc3oH8e"
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
