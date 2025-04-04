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
    "2YzVoqsiygg5RwRFDXTd3HMnV1U4PoKC1nquN7pWa4QrgoPFNWWJfmuVgw2NQo192v97BomvGVRQGCh8MGazEVM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gj4fNuxNCakS9jiskFBVXsZDc2wVmNfdgth43EsyGNGTvjGzvNUrG1h9HjssESaJ1PmBW2YiSndXCsH5CskgHaD",
  "key1": "2euo2tZR8DspmJHzhb3f9CJNnCFJkEZUdha2nQYgdGLY48kjwhqfcbqXof3AigMk48MyfLqsCLjubcKp2qT2WA6c",
  "key2": "JuiGrCWUw4A4dxCUfrpR2bQF2sZHSZmvwo7YmycUjjcg4icSXZWEVVhLB7kUco1AnmKR8ZDpau26DJU71Q6bSTS",
  "key3": "4WvrwHdcyC48UHwH7iqdYUSLt3xUrc8SPsM3EbbKaVUDg5RrybZgHGsLFHixdf9QBux2ScJ7Vorkknx716idb13A",
  "key4": "5WApuvAs3LMEvovPto33LZGpcgGHHzZcAJhbq6FPvudXKujHm34HzuAo1HAHWrxtYD9goY8Tpzkrdp6YtP1hLoiq",
  "key5": "3tRChyL7K8xPuKYVQzC3Msh1RUYd7eRBjhwerFgJBeQKPYdHdKrU3JnmhiFi6DeLB93e1m4hDaWETLdwu18Vugnt",
  "key6": "3pkwmQ55Xk5M1K5sKVbWyTKTxzjRB6Ydqc6U2p3MnB4omw9yG7iZGXKnj8AnWqV3gXgg69SoPHhpaCfv467UrtNf",
  "key7": "47aS3Hp985tjvCv5cgnRwPToRJSrnKkA4dcHQ8hvWMUwyqZQYgdBtswcxNsxNTE5SrA8SFzNeH56A6JbNfaqVfw8",
  "key8": "2tYBvXWmNwqrSkmccvgVv8PzEevqChWH8XAqt1KBDsmnRQ8J3f4HxRwRvdM7QQhhKZyYgPjT3WcTQL2PU7fqAZxp",
  "key9": "4gVsVHpwkqCCfiALC3bRgCAR6cjGRJsfbbZgNtAjmr4t4uoDCpGvnb84Fvdx2Y98zgzmNhTMkVbHZGdjABVZXYXh",
  "key10": "4eGhzrCkScA3qAKi3v7LapeLJ1benD2TSm13nmx7Yy1ArZVTYBoeSeDCvGg2dT56MAmoqSonXPbhvqpL5k14tz1J",
  "key11": "293FuRLLsB9FxkgtYsnqgovdrbUZXT5MRSYcMGCFhkgp9VCqfcKdKEbVQfczgLoVUSaRfgtddH9qiDK81BUJNCG7",
  "key12": "baKrsYszDCgAGbtkqFR6mNgBisRpKfqpGY8f3jeXwvzGFBWPw5LJPJaMT7J3SGevBgm9BukupR2c79aE6xshaMi",
  "key13": "3TZKJj3if9V3EXDbpyicSy8Eu5qYesmD6SwE9H22VoFDVd6PGepXkWxhpdFM5BB7aMQy2Uk8C5tqc3eBKgtPRb2F",
  "key14": "KcL5EKgLQAwKSE9MeDcDf5eQbjEFRWnL5ZzA7jBJC8cTZAYVpgn2EbjFXSBMWXKRaxE6vVjn16FCPYoaR2r6XbN",
  "key15": "2sVbnP1B6Z2Q8i1SN9ynLcuQQMef417YX3x9VN91i3LKBE9x1FRuYH4JLKoTscFjaF7XYyzkRsMthHt33nabzNQg",
  "key16": "2NnKUcnDQx4UbyhMjxT2tGe57rbBwzkeLMVNayEew8jdCE9RU1vsbg56ekFHcpQ9ghWBuQWkqi6VXFTcB6XACiJK",
  "key17": "4LjYJ5kSBnqcG9STDj8Nb1utrCRiHS1L63omoULAPevbZrP4gfBRZvU41YKhFM19H7PKVvUERPfjh9onTN25ZrLi",
  "key18": "4ng1VQT8kXkNmU8FXMiceAxkQ5bZrtyx5kCERN3EPtfBT8KzGfvDwTafZQgzz8v2JEjSFMA7eaWaPbHqRgggdJus",
  "key19": "2MH8hUSYFdohoPgtH91LJJGDgLfkN7DqdhJLtYfCPwbq4aSHGRyzooHoKtNe9MCeDCqKYCpstLk4NXnUHnzPUUzA",
  "key20": "29He9BQk1pKNutqqWwhzgjeE24WLgREW9fdEV35eNkqXksozLoim9KrhZHnVqso5Rqr2ErQsAFr8HjqZp9GYTaJF",
  "key21": "63Y1trKATM3vMJuaabNth9rXtot9ioqotdU8rshDvcLmbE87huFbbjQMiiXcUJ4bvnvJsuJ3cUp4dJDiiRCYxTgN",
  "key22": "5AbRNGXrYRmcxcreSYkJ3a6zGppgsjxsFbpZsEJKQ992sjCjMQ8kNy6fCBuDB2YVbiZvpEHzSo9e1kNqNkCQec3S",
  "key23": "4TrsokfoJpw6YifPNagfGDuip7PGjddkvbmxueRvnuyiyVQBQ8sxxPt32c3k89tmUmkpLMXauwJne6YmiWyofFd8",
  "key24": "hTr3eKn15rLZ544oJbU1Nhvj28jYM2LbCD7iaS7GbtqYGwcQ4wk4jP8zsF2nSXQMZ9ZY6LzXeLjohUcWu7BGr8s",
  "key25": "6kbGYE1RQ8fUZfX1JVENgAuXLzXvMZiCV1GF6M9Rm3HU5RMuwfvqGCHNGcnMxmtrAxtJTJaK4x4HbVRPi5Fb8rE",
  "key26": "98xkZZfDg2CKBTSzPoB3B28C7bZ6Kx6e55tXAjJy1ru6sXjAepR326DBnDq7E6fy9xa9gHKpphX4wuE8mCpjETB",
  "key27": "DXiAGqJ4kw2ay1d21CDMZZ8FM5WNT4uggtwpW8XZxeMxiCZnyPzwMdSQeCnjaeGEqhbW6FBXyqkKQru8p8YvSJE",
  "key28": "4KBqiDDDrYfjCKZxkPmDY8d5joEkcmihV7UaSiXCYhsCbEHXPHkE25zwExPrhVJ4dxduGJRWxNf7QxK6AXLq7AKk",
  "key29": "2eMX33XJ9AcAvqTktQ6XzuEDCYGBXdncCvv1jkhnKRegVfzgr8sV6Mj5tDvGaQqzegxEuKmy5K5KjM799aT7gZMy",
  "key30": "3Qz4TUZkMRdzb6n5QZpTjYxtzAts6oj796UJehkAUYjnXsT6SJuRdZdyaVYiqtqEkBvG5nxrp4aCRyj3TLwc5JoW",
  "key31": "3K4v9AQmz6M324mk8vZwFn5KGreT9StHDUeaGeRdzJtWFZUZs9hT4MuyzVZToCeVoHqo6zdtkqvcfaX2SWZrh6BY",
  "key32": "3E8MejzNoRqH898s4oXGPpm5MfMWvLrpntbnSLdCAYKKAVQcAan2ZD5s8ngDhHZeQvit8fupEeAgM3tuhk9sDc4T",
  "key33": "5USemw81qyw1SZaaDKVTUnQutJAssc8k6EPtkT8r1Ze7vMrRoLHfYPLeXzQSwbVa1g3SBHJh5WtyZuiaoTQbmz8J",
  "key34": "cGWgymkqnKte14DecNcHV9rnaVXXQR8yR59DnRCXyGaLvArjFYRshD3QBQYDbTMMuCtqsvHwrFnifvroFXNMbsV",
  "key35": "2nYo9frLVY8esXxxi6LcXngRSsVVKvgkV6RAKm6uBe3Gz4i8ypqKTnW31Ym6bNzXgfJtEqCrU13bAQRpSfyg1T7R",
  "key36": "3ut3ZxE3fLdrrAtPY9Pd3LqkGL17c3xGf6CJDo6XthGAXSwfiYvfw5XkaPRteF8jYa5qPtqGuuTs8SCKP2cMLJvd",
  "key37": "55cokS1N3RQnKRjo9AmduV3iyE1jFTwAt2tmYEa9rGSQ82irek9fBNTNtiVdBwx2Fen25r7SDQTmMs23Jf6dy16y",
  "key38": "4RAZAQBp7Vn9EyyX32TYeskJ2ctvXQXRx2ri9RsAjAUgLrMyRxNmTKsVD84DhPixkhq1xsXxzdjnk5xSeptvWWJZ",
  "key39": "ggoXLyweoXiZdNwHenuYESZpmg31D1cdJSUVsZ6z4Yq8DcAAHCdZZk1V6iH7QwKmVHFShVn8fVHocJyKJPKdefT",
  "key40": "3pbvrJK8TicNYaj1XkNbM1iyCuBVYVPsFqH4CCBq7WmWymCjwraTPhkdq6dtims4CDW3Lik6WurrPD7UKC2CTWY1",
  "key41": "N9mknn2WHknegrMrk5aY8woDAoA7DScM8EqXCf9E6BnrDv3Z8ptmTk8FnM6pg5hRAfwdkc5Esqdr6P2ehtgmMw8",
  "key42": "3NbD9YAqETvBgncXPZDWS84QpAxo3bYuvuBwe9pebcrFq5FJhyWEdRT1EFYzEYMaRt9J374XLkK3nBmyzfYgL89T",
  "key43": "4gk31Edd7d6uKV4XzLymbazwKoC9jJa7QWiDeBeQDk8dCTDjWXvjgFp9xi8tL5qiLDPXKrP1FmwSqMgqqh9woVEz",
  "key44": "3CFWvmhYk6Qx2DxtqL6LSqLmjrFj5Lmt1VufEkcYVhzjPSUCkEnE2VAeL6KA4BuPzRg7VEoQhDGDYecuGKGRntCt"
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
