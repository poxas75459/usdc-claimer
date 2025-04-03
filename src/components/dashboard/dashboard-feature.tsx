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
    "3qarLWsjx5rjwopr8Q7dBChJtfbZvkjt2vpMDCix4xZ8RDshH9BCTUE54DKU5SMQmxEtgBN46xwLsrjCHVtDWghF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7L1TdxGVySJGHWuSr8PwuMqwv5WQjaKoVaT2RwFJ8q5RhCwLcoZAgbjyLVrC9i3GCYvRNy7mbPH8tRdjm8t3Zg",
  "key1": "HpJdYFVfaNDqiDFDaPKNchRx59vqBS3uMbU2QAJJfxHY1goYNbq5ByxxBRkx5qpfRnbCtJYeo2rfwmgUosw58S8",
  "key2": "4eQ8fEbMiTsgBHVcv7TvTTMqCkn1A9kGSijstcFhUExrEyHZDEZwgw2ib8huirvxHy5gCbcUwGeMJ2ahKe9D3HEU",
  "key3": "UepsSFHG8ETKgP4PJPhaYN164WhxJzjhUXwtN7as1YEotvHsZKxZ7JTeSvEfGuQkYLaS7WSVHTqFnDXFtsHacEH",
  "key4": "51sKuxvYdg3MjoNqtmDhssWmw4Yjacup3wc79B56jGb3d9zsfAdsapkntbASi9r7jDQXy6nmcNtrwYNtaFCwexUS",
  "key5": "RdbP9V19nCkGpteMfzTbPFhmicmnYD8T3oYECupuHgEKbJBhoKCwmaQ3W3FL9wG8ettp1ai7zHXSD8eLQiaaU77",
  "key6": "4eG8d8j9GgquFrEEbGvS6mdonjx5y1d1jxkPETbZRt5KgNimotf65JfXArPJ8eDrp29Wy9vgnxQsSf5PPt3ms2JT",
  "key7": "5LnfcRTyhTBj4MXGYG16joh32VJjc29j3sPC7dRLwnZK3KVNBgGKxYyEiohiZjGEA1reVe2WSbeDZzZJJBRA8x4s",
  "key8": "254bYSCwTiBXDRRoLKg7W9s1y2z9JsXqMvnTm7drQar3ZjHVKRERLKccu4oJnX5nb3YtgFWDcsG9WwBBCD7HojLd",
  "key9": "5yJwezkao7ATfeSN95NsihCwDdLXJEPw6i2smfq34wsRnofUWocuexSFACLd4kjy2fr26JZbhh8Xf9uoMxxTidhX",
  "key10": "4HJVUnZt3FxLkf9kv2T4bhgDUMwmhd5Tp21GCTPEgawARMC8mWGAUr7r75xi64hGydpqFW8V92BUpeRQ3sLn13oC",
  "key11": "438TYGUkLia3DULJD93GWxBbCYdLEg1QsGLQy7RVwqzKXR6jfA2AVFFmZJ6wxrbgnqAHt4jTMjCmYuHSFP1yBLLp",
  "key12": "SdYz1LhfWtC2Bqn2nAJecZ8bCzNfF2EFrhcAFQEQViNzzZhR29zqNcGyo7Zbi719MUhiyxRi2ogu3kYhoCgtGYn",
  "key13": "44Fxq7XZo1QepN6UiF6QJFQeanA1VBqR7MrAMrVkqjgJhe3Bi5NKsMPgh7Sf5Q5CirnEjvNyNgqWm4AurLEuPWUg",
  "key14": "gekQ129SWZV8aNYiu6vkYEzyKA8XkZpKdHYxp7BW3URUuVXMCkofny4yNF22YAT7ZFAxiaDznhnd7ZnTZbbtvE3",
  "key15": "37W16EdpwZVvcAPpUwWc1BgTFLEFQYR122AAbVRuB4tiwbXfSXhojLcuS8ccmVFhQjS4mH5EeFwYJeABVLrRFY7u",
  "key16": "PmrBHKMCQHTfL2RUuZBgem31ANEpcSezR7WCNtEMLkrU9LyXkHiE3CEeTQMMyNqbb6yLa8b7URBTCAJ78Ya48TQ",
  "key17": "3kU4Q2FST9F5x7CkSzAB729KQv9dZBSa8KBPVFKDN3NjEqbk5xLopMuAW6erYZxKVFje6mYYbzeZc674coySFPqm",
  "key18": "3RidwjQNXRuSa4dhQwhAQXtsnjMHW1Srz696CNFgcoCejHtavDbYfCVkqT3Kpw9yDrXoxnuKrgwLt4s8K569pjCn",
  "key19": "4L35X4KTZ1ZWsyKWQexW9fspUR98qDT6Aimw1J5Hd1uhG6V6uPWd1FmR8CA38P5jTEM4guN8zTnqaH2verkyF36j",
  "key20": "56AAV1Shxep6jFUvAKh1D8DMLU4XqAsJdpgEXPtaBBG2AsrDAhVJFJmmPwn7RwKWyijf3pzQ4ePtR6QX4DjQ3Qt2",
  "key21": "4kwLoxQpV8S1W9hu24AuYZ5ggCeUiSRwx7ZR9J6YTjob1YVGrqGRE5susUHGuX5hE9jVnagHHP5iZkmJwkTDjTXB",
  "key22": "5L1dJuKxF89zeKXkSmrbP3eezcFKv81UWMjiFj7oJRmML7SqFUMCo7J8zZ99TizEbyR7sSXYPXZrwTbWVfrTbiMo",
  "key23": "4PgjHRY2UZhByb8wXdwiAfcbv9Mj34rKPfUy6sru6tFwTZyPcWLB5MXuUsEoRZTK8zKNLykbB9jtbxGThSBgMHFo",
  "key24": "2QHktD5CLrqyHUKQkwtZzRhxKFVYzDverDg4e6Xnb3GiXnS8tUAJwC16wPuN6ZzVmcNr2vanc7CeCPFKVVRk4Qxr",
  "key25": "293xU9f2T3MUWWSYuJs6YW6NndYDUaaaxESzJX6vDK9zd2TEHxR9yxYxdfBzpUwuNhg3DJX1Qos4mtKkJ6wT43Sy",
  "key26": "4FFFDqtPJgxqLUW557oEYbyf6rGfNN1se1qXudXtCKTjPC6XvKD3P2epwsEKJiERvvMLY1fgxswGh4Ui6e76j4NV",
  "key27": "zajnTFD6VYrQ5M9x9QZ64ip8fdFHisCh3bvdjrhNwHbTBQ3ZEwuMXzTwUofuBSTjgx5hRHYCURvYZN8WwbqfM8S",
  "key28": "3YjEvqeZS7xx3XcWbVVPiqrQDBcVtajFNp9X1QjbgSZjff6qDiKPfp7ssCnatumboQWnedCpW1i6TwfE2pRc86D2",
  "key29": "mZwZR8MBqhr9L3AWCHtcmpVNBuK4ic36kCjmWEhgQWwGpR6wVzwkgUV9XHspQXs9Egti7SwHNXLvWAvQaYSbexJ",
  "key30": "54YbCYz4dxTA2CQLLGy4dZAXpgDJrbp6UmRrRpW5tLNnFxaaYCcEbjxtMRVE6A5wYdLwARbNS2zo6apcB7nhpZ6R",
  "key31": "4Yb3QD5ixUje1mdaL9582gTAgz4Xd3aaTnHUYevms18e43pVuJ98NNRxJZe2Hz4UktKMJvrVh5Kt5MRoJssKDNDm",
  "key32": "3UMMNACCSg47ukQYdLDTjP1jRWQvdf8JkkjQa9DRB8mMBhLDLsh66yCKsqnqUfBoaoUaDxysmnL1PMJJ77d9FhmX",
  "key33": "pypz5asVFb9nxpDz3VtFU24XPs5FuAJSHPoWGLdoPoYXEN7VwJqX25oopKouzpcGZRQMi5RWBUPiAkfxMrWt2LL",
  "key34": "51gTKQemJxUW9fbe55gfJ7PFzuKic3WHntRqeNMfWgAFT4m5pmLqEJtTKDGJjc2TDynF6LwAMAPSUdJ9yxj9hRKn",
  "key35": "2oSeN1QtkovGGMxwJpi213AaWGHr7uG38NRnhhZ4hPggcgY5ajmKwW4FBRdRzhEWX9caT4U7GWP9JAmH3rngQ82M",
  "key36": "X8byoc2Kc8ihefR1fyqXiXAqKh7xppdqwm2GZYZPya7p4UqCbpC5CiPPYR8q37sT9DG2a4oUF7563kK1c9fdWWJ",
  "key37": "UEhHfvj3wWqNCRNt9XASuq4GbDXtzHYLT1iVooeYJ7PskUipZ1mK1ZUNiyznjV18SJuo1qEqoj3kP6NNwH9mq7v",
  "key38": "4jjRWkcD8zVPEUvVPnGdoVqouYLqnqGnRBGXwnEUZChJpVHkVMDAgaXrEix3EH347jASizgqEwevUuwPeCYSoahv",
  "key39": "2maugb6APuAEJnsdLvxK9iDuTZJ2mwqJdHiTEQhWWMUCezKt7DEpR6kNjqW9X6gDe1BzVRpnWHcmveFPg2h53MJb",
  "key40": "2bT8M7yY3X3kC5bTPnkyijyyV55GMKGXvthCwcNW4SW3fZV4q2cJYYP7ZPdjZ1LFY7tnzFUJfYSU2Wx6RFxsUgcB",
  "key41": "3LFuvzGNRJSLpmpD46nX4YQPUDk4s9m1esXapKF8qm3xJiKrVM44aE6k6cRqzRFcq1zrp8FxRcYjm1Jmc2VzTJJW",
  "key42": "qKtCmjfBx2cvDnhvEtzSc8nDmNMVjuV8SdxqGRFzNoW3EypsQ2XEEHE3XRK276Vb3yB5HwPy3dRgdWnRfPouovB",
  "key43": "JQVxrLuMaUH943y7JUJpfh3mNc7qRBs8fBt7t318Wsj8RtvXQkR4YsPkT6Zkyz34nGztjigvACH125kjhDhdqQQ",
  "key44": "3bpYmb5CzZjLxgCBCNZ6pKZa7WZJRX4jyWGJkG6iDhabFM2358ETpCqDrvZcL3JT8gn9NhLqtXKUPC7SpDvwyQdY",
  "key45": "2izxtMZ1wbLepb28HqtBXfHAkvhdSGU5HyeG4xTehhhiEidjeU38KZHo4BJBbeQU7ch6ooToYfq1aySuhfLYHtzF",
  "key46": "TxCJqrePJPq6af5PTtr2i5DANPdWUfeRQ8WtFdG12RgxBk9gn9vdmZLHC1pW6RUXqEVahhyBjhqMk1QkKtMB8Bp",
  "key47": "3oqW9xwVajyABYNz51wTGDk5UvE4JAfHVoyYSjJHjN3AsR7tAB28uFGSmcFSR3ETHpjL9BeLiEnCsM5MEjkPbBEN",
  "key48": "48u97jLK773cts64d5CRqKxxkXVQZ6KNtFCr8mKMXkCU4W9v3fwKFtw39edZwcfpvoPBeoWgxfLE29hwkmS9ScdY"
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
