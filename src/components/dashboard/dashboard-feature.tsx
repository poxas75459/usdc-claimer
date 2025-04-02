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
    "5JaScZzirzTgLAtAf1WZ2vCbz2EfkxahSXQm6P48VyqUecyEmkvPrEmnqHqxAgAMiZVzNPzcTdxSmGCXayz7XVAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLLyN58cziPqTayLyBckES8fRyKFrzkZKRtjM4nEbd2YY7ZKAnTAKA263GDD88zvGbW8LXHq5MptUNZmt6Q9yjS",
  "key1": "42f48jdShnWkcVQwMihLJgKno2SR1haNDLoiJCkzZAetYqfVsAdHmTLfHd6Kf6msc8S3Chru8ys87Z3pNLK6VBev",
  "key2": "5zT3yCRid1sRSz9csVSRw8aXqNRsmo9KDHowBowojvboJHJP1FDa8XDKHdZuK5Dt9yqtFzrYpekLctkoPFuUQcXk",
  "key3": "GU9ZReUnmnm4hRXCFDoE9htwJSKHt6eBbvn4H56Xj4TLNq7Zmi48AfGbKJF79LS9E51BHFc2jL39SFDGC8KYfaB",
  "key4": "3aeFSosVgmoWxsASYyWBxv1xuw4ap7mCQzC1iqADEYnV4TLpsmNeerxrqUR3YLzCwzSEdXasvTKuz792G5PH3zTt",
  "key5": "582b8pjwjnFB7GrvWDogLYiZHyLK474d8UUHrBXASEUhcRXmxvxsXRHGgYp9HREqi5BLLktPKPs4ScpRtpt6c3wu",
  "key6": "4H4J7MVpPUeqkPJnFTSD9psoPET9ThPjMkrQ3UtgkVPSn4VqWpEic3Pe9ihPPeEGpYVdc1wFthT7qFRRHwcUcRex",
  "key7": "3pqgxVSJjbEeejv7Roc1YSP2D8y82tnsFSBewyiFBsPgQhmyb7ouatjRtSq2K5C6uX5YERUVbUizQNgTFPX59w64",
  "key8": "3rXYxcq4M7EtN4gjHtngPG9WJHtnv8EfzsEAyAjTt6y5JVMPGugDTmQhS15MdgK4UkKpxan32sC3mhqgRJSmh7rP",
  "key9": "49VaBd73DLQXvi1hTUgkz4UKnYntNn7XVedyigvxTd7V4Xw1tEexBce9Y8yJ9khEZ81o54vEttoWPitB1U2mP1CM",
  "key10": "4VrPm2LPuMZ4USiZKPxtTET53yDME2MWtA3rcezm4rf7dhZRe6pPx6R9xyeSFdxfogJBVtLNQ2LqwUyu5fdkHWkU",
  "key11": "56r5sbvSiiXzfXfBzQNWLuJLp2TJqH6HpxzehoBWxN12mDAb84EYMdKp4A2hGkqe7Cy7qKBa5DRaE4zZbnRzmDRo",
  "key12": "5Dcv525Zx3AppnFYqXeqLUSL6WbmEPsHr57RQthKMUUueCWEo5yncF2g43VVRN9zJP3vWYrUnsw9PydTcDt3Tsm9",
  "key13": "4t2RZgmb92GH3iNTvtfs1uZxWXDZ3pHafacV1svNcqVuUmkipmoD6fNsw8zt8jpok62ypXSduoi38fxjXT7MA5QS",
  "key14": "4thEwvUuxd7oB87RBrq5MCzXiLMoSueoNdEp5cPzCC67LAYPqTLb67isAjvM42EUqBByjuJUJFPtjQjScd9nKA2T",
  "key15": "3Fy54e54NmtFzzMgZAHj1b8y2tofSdCABj9vEwPaVrsyR4zvpQQDbADFAD8xDb1PwoA2CJGgvUQFPCekbPGHTwpt",
  "key16": "5cBZDeNJT9CWZitfXaRGTPD6yfLdFXYzzkBKCvHLpHLRc8gjfBtHUq4eQsxgoECWobBfpa32Q6hUU6cDmdk67YTN",
  "key17": "3jh3BKGaadpknhtvxbUD4rXvFiUMQTuX7UHSX1M4aXuVNDr9HUDYX8BaRpGknV3PRTrn7KpJraCn6MxLYGkpvXJg",
  "key18": "4ecHWi7nPTSsuPDbYUXxJJnuaRGbh1T8FLG1y5jnzFJ1yVqUzNn4XUhUwQ9ch3x3QHr1crsEm15pz1FnKKjARTuf",
  "key19": "2sE9UKwJmUHtpEZFAfZyvzYDK43guyHwnD4EMY4b116b9bxkrLDV7yaPZA6JByeFgoXti33ys7PgYTsvSC1sVExL",
  "key20": "32S8YobzPTCG3id46FaRCSmSETkSDQotWpkXxShs4hiXiurFYbNRKHRpt8qTzDmqJyGLfPLM5DQ7JfWVEE4LYCfJ",
  "key21": "4tmtdxYSXQn8YtBJNVVaR4kLT6s4sb1YzabruagbzM2psiomfjwetauxGY722ncwov7CtG5w56tr6jXCM65Z3Uee",
  "key22": "2T4wyBPPSGkPTyKkfyGTN4NmvZxxEHpTgtUHphueLCK2UzqWY4RAkgnaz4ST6wmf6Jze1BB6bvfapk351oz2VEEr",
  "key23": "kBJyBkuadQAYKVWXTRTBvscPSkd73i5Si4xVmsepr77E1jTowrUyrgCbZSRt8FrhiJhGBP6uVP4vAYmDz8aRXsP",
  "key24": "2gD1ckaSsBxTtZruXgLutvgAYy9yPsZXus5najm5DTsJ11FUw8gfSuC9eDL7gqGRGLULCJVAxV79a6DophS3jdL1",
  "key25": "4qWvQdCEcqFkoftqjbGkkQTKgi11XQzPWDakWZ4gxoiADq1fGqRiWZoQ7tuv5FYmoxT58AGYFi7X5Rm97DoVQH5E",
  "key26": "4JUktV7cyUS8L2BgMYJgdWwseJrf9XqsHmkk6qmVBHdJCYGDSQaHpYFyj5AaQMThWiZw6uHzabQmcTmkbqJDgPpT",
  "key27": "5vhjeJ7DL2SbLoNvCeuap873mPQkhVZTePti6iiVjh5GaqVsKrytT72RFYBDw8zYJMWrDA2jemjUiQxwRxYCDDEa",
  "key28": "4CvZEZxeagAtesXd1XLN1n1rLHLTkVnRaH5TF3LGAX1MLg7TLG1k3anrdZhHgjyqWeYivdZpMzTY6XadD3aUBndq",
  "key29": "4iR95Rmzy81kfQVDLt1Da4M4G7X5Wjrqc5bZk3r9voJ4gEE7Ejgn2fEnP4mTwGWVqgJsuUch63iTnq7r26dVGeQN",
  "key30": "3RUybLqbRWM4Bt7kuuGV2xMHzmY9STvSVgyeBsy6wBwYxxPEue87rvByxfUPbYfW7CDfjPiXUNfzYGaoymLjNwgz",
  "key31": "49yafSJ7CyYNt35qQZstmNFMuZ77ssoMdGUT96NJbcUvYAnAmUHrrAzHUsmD78nJn9co7GZFzBpKYKvTf22ZACQ5",
  "key32": "62SWRQJ7VaempjtXainMh9SBMwC4FHK5cegf6BzjDgUkmsHT9WadikQGUVuvfch3MiiQHyLaJbMFoowEtk8WtWEn",
  "key33": "YC6LqyEuwcddw221bagxPh3e1Ct4XRXqWtS5JBLFKHkoTpaafnd4X5bttyGi8Rv5FJALkQpWATftvZ8NnaQMeq7",
  "key34": "4cfmMafwvQ9gw6u5TxERNtVqkBvqfJttKJuigaNNLVLYqRT956FZqH3hAyXGR6r5wZfW2BuVerRcYHs4ZA3fJfG9",
  "key35": "2nsezM27T71WzFyUCAqCMpEavKmFeYeiLfyDumr3LWTLE6qvMyC29wfPQ4UBu89am3zDpQNqYJAuXzzUDXsRWyQG",
  "key36": "4cThvabwJcSHVL5nuyVieLLX8dFDPhhvkCC5b2UNoGcFN1BLwhixpTRtWJ2ULEumPP85yaktWJ1p6qExfx9YKjDe",
  "key37": "2aD3qiA9DaGLKwrTKwkhU3w8LG4Go1nns9MPkg7bRQ6uQkz6CiBnoMKMVEAAH7HgFZAfk8aK9CAFYD6SDZuYb1PR",
  "key38": "sWnVwaV8CSZMkZhfC2kotbhZsX7NjNcyteRYdaTSJSbS1C6pcqZdYVmTeRyRaJCbshyJXjMcHna4FE6pn9Z37XJ",
  "key39": "3bu1uy3gEuDugeDkQ1sTVLdtz6cA8kcyZZaHZzyiWCPrvLcevX3GU3ehKqHBuPi2movJ2fkvbWmHjTWiNzkAk2ap"
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
