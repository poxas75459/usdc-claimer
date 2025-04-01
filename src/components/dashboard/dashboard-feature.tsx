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
    "5MY3SVB6R5APxHN4GkY5FKEFZQ2cq2LfHoFj2LQgoP1d4Fk6BpGJdhu2TAzBWBAzwb67mugoUepVgPo7nUhPnmTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npMUzHo7juNWGJYwf2MyMWTWjCY8WGPosSSVQdo1UGnGphRzHZeuJA7Dp4qa81H5G6YidqLMgCxijWtzChqqsAQ",
  "key1": "MkyDp5y65J9VyiXNNcQ1pfRSBJx3dyWxHnpqEoUuasQkUfV23FSiGSvT7M4dekeTS6WZctZGC76irXTTmgzxMXM",
  "key2": "5WmuiJAJS9AB2Wr3kF3Vk79RzwLNnGyYGhAdu31HYsUndSWkR8x5vP43UG8fsdiTpQ2Mq2Qm27HewanU7hvwmnnn",
  "key3": "65pyzwDYCmeo8j9JsXuCo178VY7wK9PVuEShrMftWjjBUYHQ3UiwtkpZXzrYaRdb9vTZ6KAKgnqVX5DkCHY2Qwk8",
  "key4": "2rpAEcQTpbQf7gdz2Djf6vNc5JJmbzEnorRoT1RFpZRTeWwzKskD95jvgray9AB3bu5s1zCN4iYXZXmeD7HfrpCG",
  "key5": "e6KrjCFBMgqJnJ4sN4pEBb6o8NVgwQ7yKPBvJNXTX2Uac5mPRGHJHsCXL84DRSHjcscq4dMFrzUS1yimFxXE4YM",
  "key6": "56ZRxQqJYLe4AqBZfwEm691JVZFaf9bW6hnuZJMdf5MKUPscp9xWK15np427o6Y47p2wd1nHB3insZGJ5Edtmi1y",
  "key7": "54Lavk6p2YWbcM3k9T1Q3iN1KnKNdE7iWts6seJxUeRDUq4UoqYUymp9QhyiJSLyka2VTZyr4VHp7KYUy96G93kA",
  "key8": "2dEpavYYmhUGqgJDvk7kJQC96DrVWaDgEm45m1C7MYHtQmx77SgcRx41LedmPBxsRPBQRuf5tLgb1ZQuxYRwFokp",
  "key9": "mRpwoNRQcU7wy6mbFj8iHf1AqxE5usgkUoPUpzebpyqaQEtvZZZX7Lq7wAL4a3bBMnzbCvUN3Bzwvq1zp73qXJR",
  "key10": "64FjTYqTmBVDab5ANxG1J76ETA23zkbw3NgxbzCDJZeArVtsVeqRF1L5nq4mQBB3dZzYmUQCEyDEtms9CvBzTAMb",
  "key11": "4o6R8Lkj1yhXZJUH4cY6wDNCLiBEknowhVZa5cvgndaDAnKvaWK3qhSon1cWhCQN9c728KWWtP1VuvBkiz3GdnEE",
  "key12": "2AsNFZuefTq9xzCzEan7qSVQMTdpJAutXUvsC6CE7FnuEsBp79QGVJt74gxZ8znZ2gi2vfdFbyrBRyHYguuZiZhY",
  "key13": "4BTDsbYRXMTpD1TTh6kKsK2KxXDUz9TpBw33HJVAruRHzkyVz5PyhLNjEYDa7qEvtAiyfveFWU7LPrYEz7zjmoe9",
  "key14": "2vi86n49nGX6qa1Ckd4omXmq1auwuZMtptY4awGBafnikxq5mRqvUd3nqyNNrjAz5xqhk66dm6ffiLT19MGneksE",
  "key15": "2yQHEdH96XwrgpKMVrnAcfaPYGAajc8DDXAaaFyAkWULE6Mog8RAzKu4aaYnF9B85Mk5UJKhGGX4uEcdGs7DF5dw",
  "key16": "3pSXa2m7tjzJiGgqV8xbALwMwUUE8ijKUJFcHBCShnQErvyB16em6ZLNXWbar5NG13nLfd4ote3Z81HNUr7F92Fi",
  "key17": "5X3rDUUSyGscJeWxtTmYF4z6zEpXoPzb8aZ213gCq6b7zjQZ7nQDfDWFdQXV586GE5zwTAiSa2uzNUDn9yHtvw2X",
  "key18": "4NUXmSoRjwUbffHC6wNxQKuGoKbhnb8C2neFvrUDZ9TEqbxvjuMvSqvYkz8ebuf5RR2nHr7jkRAq8DUMagPn4vKx",
  "key19": "2KkYJVYyvFVxSSTViqy4Cj2dfwVbnih1ozKrTUaTNcZhiqmYCiP5SBMjxsTYNLU224HULoFnWDa1fpJ2RNHNYSSg",
  "key20": "59ihxBHPXpGxwq8SVmoESxKsMEvBck8rpGK5jWb5Bj89eCTvNN84wJFG2addZqKjbTUd2CzvrK8egNKM5JSDNfuW",
  "key21": "i2PadW7JHY9kpS3vcztMAtjWh7MAuf5JHKPg5hR7HRSvFWf9B41X1mcmn6wX8kvTRr33RPY2kW1Gg7SNNRgwUFo",
  "key22": "5e4yc5jAoouEdzmEzdDBuTjAG6RBaqYE2coKLMuSbPBVm4tZRwW3ivHXV6fYGDaikeCYBB3HcnirXUpfdcxoytqL",
  "key23": "3fFjVeiU77Hfa2rgaSBBi7Ndk1tLKruHpuZSWgznK79MiiNW9RUnN32mV9a7ozFuyUsfi95PgWQR4M3xavkzLUf1",
  "key24": "2AfpnpR8FqGrAeYtZECzQgnBGZyVg6kdQJ1m7zXUtUWRTdpMQwjMiV4yRaeuPhgifbfAqv1WhyWZqqBsiJqJUNzT",
  "key25": "2KupDVY4Ld6U5cm19Qc6eN7BJafr8Q1bLGYpzrLaWJcqupPghjVP4PCHFt5jt3GDUqEeBTXDbCqEL52rXc2rf7hv",
  "key26": "dME9SvBfE4WzhJMWRxNz2qrEWnmFFeRrQBbPQQgivRBAqRrEygDpYpNv5oPPH8PQC54aw5oiowHdbwMk3HWDYkL",
  "key27": "4fRBvFW4ios3Ko66EUe7RAk5oaJ5hdpdLyfpKFtKBMpB7E9SKnyzxyrasUi8JegQ3Encx4bFywzFj6zMwCTowUQF",
  "key28": "39VRx7YMdQVh4SHHeHSfzQx1Drj2nw4Bot8x4tYpER4N7xQgaXPKViJANEv6UJNdAShihFMcZxxmL5RduDKw2mqx",
  "key29": "5kvpEeVVNfTTqoWk6vXFNPB1cmKqSSJkr2oxmS7mYjg1tEZuM38YjCLwmhoq75Z3UqcPXorp116SaixVKJSyhZog",
  "key30": "4U1GSAqeQrWH1ntdbLhEtosQySYDndQC9dUpoU95PLUN95qKkV51Sui8rqDjFibqHBH9gTpWonFHn399dHahzggE",
  "key31": "2buJgZ8KmYghMXsJw25j9j1Qy8wLk1xiPC8vw4B1ZR171oknx5NXemeENHZasu6WSapKTk6W1Z7RGyAtAB1oLKMh",
  "key32": "3xajk58YYRMRnRuwYr7irpgaev9TNqfQpSnzwHjNN6uLwXa2BXt3YaikqrZaXrobxKNy5bL2UABanBNpACRLiK9w",
  "key33": "67qapig71MXzs9Pnzjjw4eUDxnHgGQnjyAoBSNVAbVPuwqUEJSwrbi7zJ5N6TkLJwQ85MsSWTeT1dFSvbWWNj97E",
  "key34": "5T2ggfN8THb3LHW3Ujdg1h8AVR7Unctk4N2vH655ASHRM2DWH46qzAtN9hb8QwxbqmZsbRZcFHFnveZtdFn1aa1x",
  "key35": "3jXxZjRAVkQhTmmfYUmiSiffpQpwCWooq1EFzpXsQ74uLmNE3y7UeEUCQ3ejA42PGgG6M4zcCaZdL44Zy7qMCNrw",
  "key36": "3eGx6VP8zhfdxskPZAo9KdRKzjLRrNDPRiHphy4dsg8FftoVpCq3BamnKxEK3Lzwes7kCWrCjWqhKZRsyU4dCe5M",
  "key37": "3tZ3mwEuufiAo2SEeF5AmWfzBmDjwvFJVzN1YJunuwB1cgr1smYX2B7evdGNeV3LDuNaw5uJx1gyydomEzHMeRTW",
  "key38": "2TvGbLu2vKezfqiWcFKTuQ9khp8dnidGbchbMi83L7P3oxnuqr2heJ85xRen3GtV2w6J5dgyeeHTxDxCHrbz4qRH"
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
