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
    "LvdQ15o4gywaoXyFnWyAVePbAwtejhHwrdT1fpR8vQnvzjnzeB9CtarJXFtBbQYubhpv8frH6fiX7CJdi4TCvAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFDisJQZz46KQdPkwUeLj4QvkSPvuVooMf1SLUj7Muf2iHQJdAWoWsafuuEVoKXLv1aHrzozTgUQ1vnTs6oRYYv",
  "key1": "Ske3SVm8EpJERp79V9eHVR7L2bpQgtFkZmpCBaDrkj8gtrmpSvVCuZqF7sdHNVJUdzYQHsfDvECR7sDhLJRWNZB",
  "key2": "SwcNVxknNDS41APh1RfAsUxzeXJyRnev1MrP3p5Pc4YD4SiXFVSK7tJNGp6QWHcJo49sFr7u7CEuaJGCW4kQsJj",
  "key3": "3HvBei6xHJYX9UcGMbutcbVfgfajnH3QRDk25gkRMESp7z6t1qZmf7Ww9xpu7qV9S9J37LA8VpKeyW78swto3Nth",
  "key4": "29ctZ7M5jg82HaD29rU3EJ2hDfJ2yJb4tYg36GfeMrrEeqcFJ9XVyDEnUnc7NkNnqtHY2bE9m6x9XHXRaUAu73Wx",
  "key5": "61jFBHEE9mzJzoQK8hqbqRDoHJqkAvDWSH5hHNVn45KDrTgxukKdx3DKBJ8eE7zBnUsDE7goCfJ7GrC8dcqE4P6t",
  "key6": "3HH7KUJuCyvdUpmjMd8QsWbsHAEeKoqqCuxeJqoAhTU5bAh7e8RH1umQw9Bq59hL22gmu2dm4tGK1P2Wb4Lrwcd1",
  "key7": "2z8GxBVH4oMbZpBH2ecf54CbCaaiYzcZpUaQN2kcDzsBSYx9A9vnUxU43gMer5bLM7uPf5zasv8vMe1YcbyeX5rC",
  "key8": "48Z53uu3bdKN1G68vhxC5HK4UJmPvgyDYeUKchTrcLFajBEHkNr1aHTHJTcauGeSC4Xsr7QFTia5xSGbSL2JYfQH",
  "key9": "3svfkGcbrzU4igP3ANYA6UTFuuJsegLHuf4NZi5DUTnduTjjEkGqUisSa6DVjRbcSEiCjfaGoQ3EwUjWumgi474A",
  "key10": "CYViT3pq1ndnafniHobuA8PJtmmnkqiirNZWe3Hri8gtFaVkNwEE6Fw37p3gBCe7ofFqebjbn8Td9H94H6mXN7j",
  "key11": "3PK4RHBR78SaDwKrYADzCdqXkxxSqYcWJZ23FQdHXTnHHM3fzYqZrvPudZHqh4tw1jj4s67Mz1c7cNdw2HGA6weA",
  "key12": "4WMMoNwDaYsMNMYUkj5fi9rTV1h3cGk6yp24DEwMbaniHuFaTcFwgkPnmYmmgJtRtTcc6HtyqT6bcEGySKnrvYC5",
  "key13": "2y3uppmQvdu7PswzawH45cyLGXvWHcURvGtNYNjuKu7KUQz9y5bEhvnPe9icoC3nWJnQWHtaFUM1tV7ayvzo3cJT",
  "key14": "4oVy9TE67FnLj7XHGfTTACVfVnaWp3DH5yW18SHTPSwcZ6d2NX5FWyNiYMKsyftXaCStsEh5F1mkXWvT79kqemPv",
  "key15": "5YS9cnZ5Xf22r6QdFAwzp3kESfJVeBLLoe1iRjGg8r6y7AKhVhzHCTC1fHTeyXwNMwcH81F66EwwS1GFnS9uYRjv",
  "key16": "2sdivNogS1rnZ3n2VMZ44Z4kG8YvWXcMoh71ijqPDDux29kLjFPTeeWsHJZTS5t3evDQYyv8zNR2aa9BMXPmTXPb",
  "key17": "62aKy9zBeAVqJWEuncyNHjnKkJ2DGBf8y5G15qGUnbnhumxVFsFte5W99HnMMKJTQ8sjV5mmNquvAQReV6ywVUzk",
  "key18": "5DX5bvtXJgusRWitMCyeSnH2K1MMmweiNHkXM9S8NFG6kkSi3sNMygbN3KQeeBWBkPfnyHLXLdXoB5dkNkExKBjN",
  "key19": "7yC4p2qWRBGWaFf9qjbriWLrgHUpdSN2yB6xLFr5RyeFjwuLkmSU6HAdW9c9zRpkpU1Cqd6sySWRcPTmWxRC1fW",
  "key20": "6CVqCTxU53pCv6wVunLFbqBzbbR6xXT6gi1tiydPaR6aEwqau39pBNWYv2WEsMcQUrrnxz736oTfoEd1GiCYtwN",
  "key21": "45F7mEfrWbvkAz5ibGRXLsnJwdHe5KzjyXJTHFovuHcU6bbEBKojr8nEFTgXN2fE4gVkWQ2fwFeWKTw9HCok5Wxf",
  "key22": "2bQrR2rjrfNogB3EtzL6fnzyCVauR4S643nsFhGewSxyw8reMqpFS9rmTurv4HRC2eJWyxX1xMHasGSa3qN67cbJ",
  "key23": "345qtZiSHBPuuEEWSFWwicNt96txLqW3ZGCXjHhSkuqUuvCqD8sdF5uUdHUTvtgacxyAU3jEZ64p1moBMQA3iQa2",
  "key24": "65xRpqVzHz6fgTbK123mfukFdJJ6VMr16d2aqcoDj9Yaf234rzAPStXPbzxhbX22rYJKJcyKvChRs6AxyQ1uCGBL",
  "key25": "MSPBFfNwbKWTGseAaCfLY1jzLGYgQ7rPqLfLtECRYy8UFsTVuia2JVSVxuL6xw7X5kuEooQC5n4WC5HxA9mu5E1",
  "key26": "4m36T7VLP5Z6C9XRQqyJv2Ts9642D9kMJmmSCG8ezbGTHmiB9ytkrpY7uMjBpN6fcztqtD5jMP21rDK3ZrR9j4ha",
  "key27": "3CHepZuS4fBtguZaJXTAwT1AgHvJTvJseQxuP1dP2TZ9BNEoYknTgU3dSoWntxQXQNFBwWEAUb35EcjVouhWuhA5",
  "key28": "4u7Zj8wLjRVtxepmG36y2paUt4frXpmPJaDPosSc1fUHhv5yyasaV5nQwgUq5HzZqktynXd2mRSXYy6NyffNiYFp",
  "key29": "4Kf9b2ytLDTrxPxP77HpQVwFotvfdr8hwSTFKpLthEFnSRW1DSHTa19MsVw5Ra37bJdtHkjfPtcg99vv5BFBQWPr",
  "key30": "23Np6AbbwMLuUydS6c8jA8zNWTo2YPNSxREeyNwQAZcQvDXp2z3eGXzrhbwavMgXPeu7DgCgDv9CMY72eTi2dS2W",
  "key31": "2Hn4M667UDt2YDFFd2o2qrHs88Gx6Ma4A45JLdps5WBx7GF8CjTuX2LRzR6axJ71UXHu3NbXfpnfJnV1ZcBi9tj8",
  "key32": "Qqdzrgdu7pjb6mCYw1rgubXV7QmsWpwfTHdrtaUmgURiB88wvh2ZXs8Gi758SHi94Fs24ChTRfibc1UrFXmb9gV",
  "key33": "yebJcAstLBh6Jd6HJeiTxXxht3PbhwqJBdr7cmvD8bQx3STycMvjyzNqDyAY3H6vBfo4vCuBEbwrf5F6TYTxQYd",
  "key34": "3MR1o2T1qxVg9DSCCQTWX6sf4LFzpPLX2M2tSymFfixqcLKrYGtNE8YKb6RKrsqCWu9fnWA9R5HRhTa99fMqGxyM",
  "key35": "3JrHdiVtQSw2AvKaPQfnKJSUibPgmEDQmtD6FizF7PfDQeiWDayHF3d89JETQHwG8ff2gA8Rc69uYUXZbb6Mwpoo"
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
