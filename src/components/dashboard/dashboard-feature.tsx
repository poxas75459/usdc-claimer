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
    "5jX4xj9TLFVQ4VHau1jc1LqpZFUDKYsaGcxWwQkK3zxeWXugDVnW7r3LNLiySrHij8fToDSQYNppuMU1L2jJWeXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByAQ8qHhTijenNGeVb6ti2KAM1YBH8TQo1W8UevZMxSSBsQa9MnEeMkJf2DbHwqYGXrYew8AuFhWuBxUF3iiDbb",
  "key1": "59myhESdopdMJrZaLDwmjr42g3R7XkiQrA8z3mEp8ZnqCAPFhJaXiQnvzKyws5h3SacqfuKseTf8rjU5bPSbFHVs",
  "key2": "2prRaepY4AW8HF4ke13WTZtJrxqMrvLF6GQ7w7DDPvkb1t3WoXbsFxb4r4ZpmuYG2JfA8NFpXVgWYW7rE5VLn7PW",
  "key3": "3PZ3qEeSpeUqQ4p2Tg7EeAqi18DAUQUbTw2qxzN2XQ7GdDENy3mouXWRcYDCg1Uh7jbo45mtDfdK8siWpuM8Yrnb",
  "key4": "3VYjMFYY9nEoLMFz9iPXTf3kSdyCfg5AjmiqDgCabhfMQ6h8kvASH5vnr77mWsgZYa5LXfx2FHtMeP2fXMbXhwPg",
  "key5": "4zzL7JLJn44UAhvjoa3EzzxxGxZPqHAtV8xmXyi99muu4ev1WhWyijPT3Xo36qpCp3bpoDeebSQAH25U15t1TaGo",
  "key6": "2vuY3Mh6wpTZLCauvDuD88oqvPB6vRQuKNgzYyXedQcBeJ5nJBCWmDuxFSgmXhLeLpVSD3gz6TvXFv6FReaR7XiJ",
  "key7": "35CuXYEfne72LtFrnjrgBLTEQXjpFGL6JK3ysNbgdt1KzUa43RGT8s1JxuetHfQHWTgny3idnC82m3Vs4BwCDrCS",
  "key8": "5xtSgJMcaY3sm4Bs5WiPsmeoiLuqoBdSFodstK6LXuEH6Kw9kk4xo51HQrxGMs2PXKxyKdzGH2nZHyBew2wGdUnH",
  "key9": "2yrmbVzyqRH8vGzQkjYiXnkcukh1NoeHHTbL6431gpL7Tsj1fUTkBfcnV3zg1pLGF8GYHBBdqhYpXuhJ4ve6ukM7",
  "key10": "44dMiQFnk4D4P6sAEi5KypcAt9WHcKTZs3LQA6BZ4CwBK7t1CNueUy5G7xf3E6n71dM9SVa6Q2mMMBH7xaJEUX9U",
  "key11": "5cTm246ah76DJaXiC2qXYQmk3xQQuwYdge9nbV7nReiDKFfBXgJUFjczJSBvxwWFkfcT18f2ov6RHaX442x7zz6J",
  "key12": "5rQvjqqH31DupogypH9525SBaM7oJLoNdsuMQJ4MXBNXizQoJeoRtQpGtpXFcrghNFdV1kDHuzPqt1p2mtwkfVX5",
  "key13": "5GwXeGfbxBSXdfo4tKwk2v2jv8b31ThK25ncptxy3qRSvfq8Q6hD66SKzBaQHMrGNWjfgdEzNiL8V52RcaayC93j",
  "key14": "5C2tDZ2HSx4vrSx2RffeevSm4hdhvCKpwbwSHEeEZWqEwA55S5jKXz88N2AhHSKvB1kxUjQ2bwNhsfZdyi8Favyk",
  "key15": "2hLwTZtqRQPQRJKvqeK4GRFKqgwNycbn3ME5w5S2HjSNiJM7gTaMao6TVGk6mshcLN3srkFTUCe73dQx1qK1JMAD",
  "key16": "5AU1FgCEhfWUqocRq4qpgERmZJuxAk1SufpGmXErVGLnS9NqN8JCJWnZ3mzu7ZQcb6f1y4a1Sspmky29dNwSsto8",
  "key17": "2EcCxQi7oaHXZWUZwJpoirpWhmrbH8Mmxw4x1jGUcnsVbx3FF2jamqUfgr9ybeEdWVbVPeqW8pxN6LVsxKNk6dwd",
  "key18": "4Zp9uniQ5HRqUzf1tww8SXim5qpSKey1DXV7o3hgkvwShW7pXECgJfdHu7sR6Gd415qTK5fHUSLTVQbDjF6TqGcQ",
  "key19": "59BA2s7pci5Te3rgPTTxV4BvyYxeC4xH71cH1r2jTVgtYc7J6YrKQnRoYDhefCAxpX9SkLnq1hPh3GGFCixjgb27",
  "key20": "ChV5KCwkmxxzZemszQmfa8s3Q4sKqZMdgwpnGR6o2mBRbfnyyCh3DTCN1jXqDSNgBpUyUPmu9Enw4h6Qt4N4Phm",
  "key21": "2zqfSnhvCD2e1y5Dxp5SjGdbn2ugcC9inpGLhvy3MgdnG95azovcr2XVfPTZHeX7bjqzQ26HYoVDJ43AJuH2dSG4",
  "key22": "3RMvvgmTmYyELTeTuSc8utBCLP9rHS9NhdxnPUZLMdxaURtz2AHAHhJQjkn9uiKoVe6otuaxmq8uN3mrWMqyqb4o",
  "key23": "2ZPLmGEmhjo4mGTPnyapubDMukC4CGXfSt7jsmtrMCGLHXaqd7e3zF9YWY6SauRj7WPpqR7QM796qnW2r5MR6kxr",
  "key24": "5dswnLrMCVvC4vt5cFxbDAA7ch3whNnPXobUaQJKpmq3pAArtMwnt8kJaFEkdUZdPe9Uxk5gBsLJCNsTogKi3nUg",
  "key25": "Ec4xSkmGER2NWjRvmtgU5kRr93vtXXHnYUmcAzwDzJoKy2328MFYbYziLzMdJeBcwu57aCw2HKRHavUCR96R9hG",
  "key26": "2CUi3esH816M7WakvAnwEpkbcJsp3AH7sjpBGBaxcxYHgpAEpRD7gLqD8Z2kyJ2sbKMAHWuRK1RQNWzomjCbUXJD",
  "key27": "48SSP4ECVSfqAeUToFDoe4ZjraqnjKHy6sUxjdDSYAoaAw3ZfDwR1J6XKJbjTb5Ao1qVFFxY5DPRYEmYQBejn67H",
  "key28": "5cuKLwYNpEvWmJdrEQrEmvPvxbjDLPocxBRZqQUGBsUksK1jh529RUAPobmDy6APEBMGVUY6Q3nCEpoEscMXK32j",
  "key29": "5e5tw7zUQtd4fefPNEcixkh4aRbskPMT6gvMemqQWgbfwTh2BCyrsJuWsC3ZYaaER8UkkS5ohazxd3fo3oz87PDM",
  "key30": "54YNcDgytkaaV6BmCM4qtjBwbUBay3GQrczW6g2Znauk4EMkPopGR1rYUnymHFAb2dQpm6kcQeBVdxJAdSgXpHuN",
  "key31": "3rFhWv321bYHqbaiDmCT5XHsbHfWHXDCwAumW1t1C1KUw6tJAyEST2B85QGJAW9in4HVfmCZPQz6Dv6FwktFKR31",
  "key32": "53WV1wPcwtmF4dybgQGS1eEkpNEtEvsR5XqQHCz6E7fWsDKXQVj1qercTeHfkUgtBdGFjweqThGGEHTyq4bAbpoQ",
  "key33": "HMBvhDveqqhyw9PZfLMytDwW4aR7hGfLLfSkeB4u41brC6v6r7FnBApNrMptUpcMVZkjaLdEWXJCnFdwrCaT3sA",
  "key34": "2Liw75WBUkJtCBfURtx97SFKuB7NQ1SkD9nMo9GHXMzYbSLCUnAxBCG42RcvzN4Z5tKfqKBu4fhRLX4seN4CUm6o",
  "key35": "3YVNrJf1nqaB8tgEQ4aTQ76NfHtybJD3HZMMzmnSataDbsu5a138zZgrKeGXynTLhfhii2aJ1c5WyVg1rWrEekwJ",
  "key36": "3BVc8onqiuLCk41BAvQNVkAT93fdTjXGviNCRaDoKzv1bFQZuPTsVEVXHy9DXZcf3SyiwA7a26Pe811j5Luwm8Pz",
  "key37": "4BZCoR5gBWhwB6r1FCLqeZdfQkQiyenFTWJFderS9ZHnvuoyYhPxbSnCKSB3SjQZFosnuFhxEBurPUSXbKLErhG7",
  "key38": "TuENvzVdBXuTeu9nh56c3PEdgQ6HuxUx7U2HkWr9L5D6hPAtKZFQBcxvDNkLQt7x96S2jJCoemoccsLDdubehU9",
  "key39": "3b9Wbz7cdECiemA1jQnz8NavF4PounTztcxQQURFRUpX2Cod8mxkJoAPzHJT9WHqQkaqXDqT6fMmzVgW2F23x7hi",
  "key40": "2Y77gAxaTEtiZnXQKXzyga4Db3ouRGc85Mxd1cpgwxfsyvEUAa4HUgeNJM3HCh9VTJgdhV75rApRgM77qPbcvV9J",
  "key41": "MZbYzuZF1bXTXKfMEDoJiuNWiR3p699wtiHZwbS3iJFVQCRgpaRQwPR9kZCntK88FSUddW3cjix87JnHEFLd8dc",
  "key42": "23V9zj8vdezYX9xLDZztBG8VuwJHPKjFjqdgNmNzDyTBRMbwMzP3kWTSQuHzZg8mLmS3TjabXJ372UNjM6ZJmrhJ",
  "key43": "ypFPqM5Jm6hA8Fnd3nmoG1kgP6G2MDJbaaai4zGi6siru1n9WjW13FPTcqupnpZHpRLGTDBPKZjT6gr4E2nf2Z9"
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
