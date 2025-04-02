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
    "2ZDFztMUtiYF2f5qg4cQ3fzUkiWjBuzcQJtCwE9V5yReBK1u4MD5Ff7oyL8eg2ZqkYHk3cxE9UQhoGU8v8vUQTZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYMWaDJ6XicBuo4Xeh36PcskeMuLAgaKuJzX1C5iGYdHVipGLaNTG19JWnRgeRoyL9aaNirV3e5pYqR2PtWA2fB",
  "key1": "4tpo3Yvsona6Ke5sDXasX6kHDFhDLrpEMWQDEYZCkEude4C8dXnAN4mYRj6jL8d3bo3WEGPM1R5yrmkiP65M5L3C",
  "key2": "2qoi9vwjfVtTtzWPK3Dj7qNp8VgMaX4ZvZML7NgDUJdd5RgaW62exAN9zA3kNVJbagMKbUSMCuDRPTYjvuRdmnpL",
  "key3": "5rZ2CJ6xRaUqQWxLmkphWSBfw1nnirREPxLhu6LJz9jL2YXeUj3jFjB49xCEFqfX1GaoiHngGMTrKknagynPTDdg",
  "key4": "ZY2Y3gmVEycg3Msow7KobXGRzAqXL1LLTB3qS5iiZ6MhBnt9y6K7em8Dx9m83jQQtQixtocmXSdUCWhvHhoKTwE",
  "key5": "GL8jjTR2r6EG7SbhoU76TQe6EHgyLeMytDZdgBFZK1TJ2sHKYw7FxwFY7Jo8kK4pwfvuahgjwfdYnJZY38rdn4N",
  "key6": "YFsJLMuDCXVeyN1fi4UEABnZFFdRsP52V4pJ4pdd4swKYtm1dUehtZN94fLp2nrXkNLS1NZhrw3Xn8e7TdrFsjj",
  "key7": "RDJuL1hiEytYujnAVxSzwUN69fgE6HXAKMayzbKR5adfXQoxFS1XcQVxd5RiCgck6oWuWkZYRRByiA5XakXWfnX",
  "key8": "4615YvzdmRHeKRFRYy2cTHoStssPfqFFrzsBXAUsLgTatdDsUHFoxSefC5sor812cf2pU29uJHwXPUcZWz3bLEMF",
  "key9": "2uG7PHjnGCsCM2Kb4bvwennjK8cUPy5nX6cXPvG9uDrQVHmYJdWRoVWXaQctvWYoZqa1wKWtxmkwYdMeZEAHjxcB",
  "key10": "2QU74LEXAVrfE1hVGNw2FFfjbxuccKzGEsxtnzEJoeVXqcKB1hyQDF14huUCrxx4Jo77BU45UFkTuDZTroQzGfW3",
  "key11": "4TYRBpVVwwQ3DCywJdrKswufJxocxEWzbgoh4AzrmiFVJgr8daZX8vcXuve3QvVTXJ5YN2g1Ji1BxK9XJ9KD4wGH",
  "key12": "5hMrL6swmxF5Pg5tpMBLYWJzNzBuhnikwGLusVUvrAk1Vx9yiq1cxZAjmW8zkgAJMM3n5ob86ygC4Y25SBQjHMam",
  "key13": "5oBr32X4boYuMaGHe4G6xvuNzkHffFko1crREz57s2X8fA2qGHRWYLNWxF48zUukHyZdhDNgDFCaWW3J596YDzmS",
  "key14": "3RzDMFXQTgEQNQviE8nN6Dg1hHjACFFVfkob889jpYm6F3midBdMbybsjfKJQsqPWDMwTQt12NU8k4BchKAf9uAJ",
  "key15": "3frnain7gAZte2JUeoX9Y9Ard41LUz8Rqn2Mz44iDSBMD2Vx1q2ZYGrsQDHb47VJfrJFiiEFiEW3Wo3rAN7ZYxYF",
  "key16": "qHcVgV3NbbixudhRRQrWo1QH62n6h64gnmay6MM3R7wU5JiKGvmXYCV5bJrvrtPHxkQUkFqtAtQSopw16EwueFi",
  "key17": "T3ktSFSEKRSoKsUhiB8CvF9U6F7EexAprQC9JQiwqJ3mJ98tt6fPQ2cBRxATPgk4C3YhSAu61RxaBH7z1hAJaHb",
  "key18": "2AYz3dg8mkS7bMJ1DKiu6aD19njRWWaAx6jPXNyMuUvEHoMGQv7UAgqP1aWi9LpXbnPf7zGFrYepD5RjAtxabPgU",
  "key19": "3g89aBT7HfZXzMpzNAUC89Hrh8i4SrJGqZQez1bJZbFRzEpLCfJjdL4ZqTgMsryp4Aw6xXPcRAe1fasBkoBXdttK",
  "key20": "kRUt5fSa2moALb9yN2qymU8d4i2J9MTsBiWVFkPnYFAGxsEuc8UW477br1CenyeNbuFMMXf9GRVVXnkGwbKLsm5",
  "key21": "3xFaFkkn9Aobfhoxx8CQbq4sDm746QJdxFkwhfejSsE5f1YWYEiLvrvyLUMmSL4th2dxy9wigHQDBkXfe1AcWvSZ",
  "key22": "eypjutdTTXb89oUtm2LXuTxSTa7J9N77JrmeUH8AX2cQ5SmSgdr8KNQusdEyUorRBSitxuxkTSHhKmXuisQhfJ1",
  "key23": "3ZeDYHnHA9iU97d5zTi3abixDe62fEhb91Vaee2K42fk9D4Vg5pbwLHtxHzQFrYNeWy46NFDDZh35ELgV64hVVHy",
  "key24": "2KVt6eCRUJ9HsU91itQ6AzzBmNB535oZepHZvJoPEyCLrfjT5vKxM5hgmVAsrVR5wqGBN1B6VzuxD3rtuj84qMCM",
  "key25": "5dW6D11SzZBPw5jskehua2FtZsJqtj9XZ8G4odnPwxS2APmwfdLn3onvaPF1GEsFjn2BnU2JMDStrnzLaLyVdV7A",
  "key26": "5iKxSwuVct2aN8YBMT3GvZ5W7Yj3LEkVsj1tpGEM8tY83bxboyZcHtH8VB3mgGmH3DJX3WXWHUcnxWRHqn1tZMRv",
  "key27": "5opH7qxDEKFxgZg31eDSVatJH27aUs3JNkBTGvfsoQLQAZjgVAfLLuoG2qGo4GHpqC41aoRfv5tJAk6krznirt4X",
  "key28": "3mgFKZWHkGBM76Pz6T1BNbtKXSxPGBCwwfcJ6mgQDYTSJ2RxhKGzdBfFSfAGdJmSwjdvaBacPUi8jkxn418a5tpa",
  "key29": "66gWgTA1DBWDib7h8RYHE9ADY31urMD1GWqLkahfJFu3gLmtye8JmKnHQaXWrBgsLcPC18hJR6JsmEHukMTPG6NL",
  "key30": "2qqRwBW6MtAysujZXuRUgPBFxgKKRr7UgYiYC53xqQXT2jcnJGj3RgnCHW86B5bHpSGgEYyMWUWNZ3VYvQyAb1Xe",
  "key31": "2VHkSjTBR4kNQJUyN1muuNMP5UxN7Lb3QaYLxUEr3GnvNCAXydAzCzeGVvnjpGiKY3TZNhFTHV5VoNWJA1ZJVz7j",
  "key32": "561DbSFCBekoKmmfpEJuoxbC5cMy6Yn1ghJUmoQysJxHQaGdetwqupLAA5GP9qE5RaEMabuXLbvDuNjp8bhbfLhT",
  "key33": "59jnENchHW2C3179CufkFUrS455gqiVRTZrGM12DQTu3xjxrL9tNnCo7oxegqvWsSKy3df1BfxPbERk79Hp1ygFM",
  "key34": "5izqn8NWgG8if5TqiWGZLen3oGvp7UGYszpvocyPHAweCgqGDPptePy6A47FuxyFn5Datv8GjzM7DVF6ja3FG27C",
  "key35": "3PPFZZt1daGC4dMUEnyRhP1mQUyhkRa8QJoLo9ZudcNVWi7v7vZ69YXgTYiHrd1KHTsHHTsZ8sPUu1YXL3cap6Si",
  "key36": "WK1Hn3TkUuKpX5A9KHrAeDvkiHgGLC7Lb5buxeYXGZ8dDUK38zTdxuGQ7CCuvXPXMuFEPVL2yJmw5M4QMLv8F5J",
  "key37": "39oqJt9Ea1yUwz5CDK64mpEDbEFDy5CzzivZmtN3SaiTscsd2nWUySxTyY2zjtPgE7wWFLsJ645wFgHqN9fwxvSP"
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
