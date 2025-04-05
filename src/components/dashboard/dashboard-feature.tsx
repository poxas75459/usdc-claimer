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
    "5nk64Bp9MNEFpvwkpVFgq73hGA5sv7ZnZDvDhwDdYY6X6vfwuhgUgskRF3YDcZcWaDjnPZFDUXP3sHwiK2NKjS6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cyFvCdR7PxDwTPt8CpnW281wrwmqexyftonq9qHmy9nErdHSvbxs2WzaDJ54D6vQrQBjFCtyry7S6Bf23VgPJ2t",
  "key1": "4snHwc2J3joujYT7K1vVN1bULchUB2k8FFr7EgZajZUGWvrM6tWTS523MU5igoVG4XxAEGMiFUVnVyYqmBeNJH9q",
  "key2": "4Q8hnKEF4KM2Ko2Ljv5Ro324E3XcuixXVpmcCGCx4R8nbVnVPZca5CUczCG7XkEPMEmBZdASyDTHaFqu7WGNTEqW",
  "key3": "2z576X4YXjRm2wji4Fmkm1UhNvVPfosyMHXRga5BU6KTfiFLMGu2ZHyjoQacLreYM6Nyd9XzcfgTFRyGPYN58BgC",
  "key4": "MQsvw7ARmZYVSe5GvkitDCRr1tDQv4mKDWDGawLHoudzoLUeL1KkHnNxczA2f95uFopLPyPxzhgbmFDGDHYayfX",
  "key5": "5RrVFn25HC7LhHM6EDrrvGXytygue34eprneX9qN8N2oNZrKHPXbbgqjKz8RGhKD7KwptUMFmJg4CTDqi36Fz4MD",
  "key6": "4KxhTywkzUXDF1Tpr3yP8YyVvAmf7djkKVqDbhBNpH1tAKGG71kgmzkTJM2UaAgWtTF9oNZwEUrnqH1koVaV6oz",
  "key7": "4tm7dbyTFYp9Tf3MxPHgs2VezG2THeRFaaiwbcjLQH6PNfW2XDH5uSstF78NqgwzUCagWyM3i2wX5NUezDRD7Zhc",
  "key8": "r7SWX4cAZ7gW83JDPuJm7KRVjoAHqrfTTPDbPMJByqiGtTcqAPaqifgXU2s6pkCy9kKBuV53wUwFerVnDLGMEmP",
  "key9": "65SDT9kXrhYRyw9Rwq3F23CbyFYSgX4LC5nhGUk1rbEVokdZU3oEXX15bACHmCWvSkT2sGNy9n6QixZXkQgH8aK6",
  "key10": "2rpSWt68ovHMMQSk4niFKAL5sLgxNPhegbRqSA1roHc7fxAC7bUV5DqhQjHMzrBZZy5fyuhJ1c2DfK6A3HNYCCFN",
  "key11": "aieq3cgLMBEG4ZNLVv3zt1PuphboQAjMBs5imBoFnzsZbNf6t5oMRV3yR2UUKBekCGXCNQHxuwiU94uGjgtBCQ8",
  "key12": "2LZjoNtANwFZ4mBgNHv4h91LShWpmhay5eFtcyCQaZetTCRgeiCM61ktVr6vtNh5392pASU9hbUYswyZGRMXjiTT",
  "key13": "c8vUWZuhpqHVBDpDWeW11PLrMQ6gr6QGUaiU8pxJLHRkb98hJcE8XYbNw4vGTt6GDLHVLX7zw3wvJTENSpPwQWW",
  "key14": "5L4fvYpqy7Z3mFYqFiYcnoaqEM11T9q54RB56gDt9SJbaMUasCFRLRSroY37Hx3yzrECoA477yqK9rZJYp9uNBUy",
  "key15": "5WmoMqLycLd4vzqvX7QvxXHwFn7gw7oS7vy9bSd4GM1dmabjeosrVzzGc44FAPXDmUY4dNY5SHHbac2ggwUMg6Jr",
  "key16": "4T86vtFHqnyVT7Pts7P5iuTjZsiJVRbXAYXZt5xpf1auEWVJtB2Va5y9orcV8gLg2EE4n1sVJUWT2fkQf2tawsJa",
  "key17": "3xWuTK39bfRe3zXse2m6REg6iSikVCJH1yJmDDCFcQxz2UdN5yKEuxZfziGqRdKQN3fXFWP7iKVH1rHJg8AYrGcS",
  "key18": "26D3Br5QwS39MfeVWH5QdKb6RUM884NVoz7QzKZ7YqYBcS3bDsrFGTFFg2iu4StDmXm54LP54YkQVYAUCWGNvy5A",
  "key19": "rsFQFxRfjhsoyY8GfGTZjLut9Px8GbUShUELqsYWmFwYHdE9bxBzvBPjWpgCcJxPZvRRKqZUknrz5BFKBGebFvC",
  "key20": "67pvapQaxAQmEPq7tUYKSsyzavmyodugNhdGeqw1QXAuttX11L88sQDk8sKLAmdLdPduuV4tZs8PCgx7qiwKB6tq",
  "key21": "QFDmE2nePVNHFMFK9L1SPqpCSxhdHqNKE7LaC8MWqK5oAETwzXNNNPTR562vShL61H8vZhYq1QPh8csocHh4D9L",
  "key22": "5RaqU4tmMYdRcVspoAS8igpyxf4jvZT5Xc7tj9ufoZZcRFjzKu7rq8tw5G6v4CbjHmnNJmDLNWQUWT7xFPJrovy5",
  "key23": "Z9Jdtfdpv5ZrVYkdZahHMXwv8w24C1SRREZAkz1sQAnPj2uxUjNxrikrVYEzCkGYK5ut9mtU6wXULrrNA1WtiTb",
  "key24": "4aXeB68EE29zz73qMuPdDGKG8AcUfdZg5gGMJ3bCVvQPRWnYmwZBGb8xguKqWNJoSPAjzGrm8NDdAFkW2jre51RP",
  "key25": "5y7PXirY48nZGhxJgMMhJ8FjuadyFDEFyLKTBrfn15yrrjd1K1S98v9qMxERdadTpgNffL6cXqn3tiAud7JLwdcJ",
  "key26": "4ocvFXABGfU7YGCRvTWhsSKbK5BiAD1FHP2jfCsDcruTWZ3pw75XTBubdzcc66Wsfwt8FCmMAcGXGvtPX8iyx3eD",
  "key27": "Y4CK7wwkdDJuZQhht4yz6e1wKj7WnoWBrDyhRpCWy1c9yDiPM8QwfTqzLANb8n3PnNASqxWgvjs3SPCDxW1xpFo",
  "key28": "5gsJbseTDCSew7puuLJDd88szzBCLKKH7uwwV4ieEUReHnAsJF41uTM5CucBymiYiHjpvmdaECfqNZ7kpDPLCtnk",
  "key29": "2mJz2kuCdEDxGMMN3DG8qFe7dStK2n4Vh4MwRYha4xtztFPcBz6kSJxGUxCDvE6NzUTnsdkVMGT9CZx8GZBakpQ6",
  "key30": "5oiPgYFQ45UQyFVRQ2SgJSiDZnnYtoP34BMbzJg3KRkgHTEcWjMr2iXU2FcVgBNLWcrxsvmie3uAcjPg7epUp4xn",
  "key31": "2QTnNQa7pYHK4cy7QmfeGBvN9njFQSmKvW2sPJdbstJbJSDFpioJYsAVhCUuuYNwpjWUvDXrWNZt6sLnZSvNHZR1",
  "key32": "3CfqsC4B3dn9LVaE25NBJHZFBBaBcQrBreFsYPk3VM8DgtSHHHrsjyc3ZovcsXQHzRwRBJKDs3qbonSTobK5BfEm",
  "key33": "5iVi7WVDamoEaVyHt6MRWKZqpUjqoPAuethsiPg3Qerry28QUnNrQSbPAVQHjz2TicFxSNiiso28WJZYY6fCkZoP",
  "key34": "54D1Qg2coYZTdNhpBxXcKyyRz5Yzr9i1mod4y7nzG6yzJ3jPmimEEZhoAEhEjyBY5xLYgQHDHgN1yRc54iaLvm4b",
  "key35": "3CP8Hxu5pHgPiyBKMjzMp2WoUNoxgN1ZuuGXG4GgtL3tFDpRx6pHE3gjLjegmSQHgjFELmcHaSsZ8t1dXrUbvUsj",
  "key36": "4pCW6e3YkfV4yB2xtA1rBV5tg2FzETAKN8KGrbFcu34kx8FpQNmeKLDfc9fpvXLwyotmN6UPptXLqzFnNnDCuMJ9"
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
