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
    "5dsyEtHn6n4esTyVo32ou7ErW3Kkv5rrdLbnsvZ18nCWEe56KhvR4hfMLCiEaLuwi8zx5vtFNKcej1ziasMs9Vf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mZ2QuFGfWL38DVoRVy2eMdyTb1U2JZWGAketZb2WkRWdYvxK6968txCtBEBY31b32ZNwDrYJAZgXWN6qWPUw9k",
  "key1": "2kmnHtfw1LWuB18fuE1YRUfB2XJxSU3NjgG4xBfCTdp1XeVfbZHSxKofhuFi5XwUtYmjoehEHzZcBwZY969FbZZw",
  "key2": "5Z1qKfks7iCD8nKkfzuSrpZUcHowuCEZBTziZnUpn1v1uaYPCD3rgLUVrBZ7n59H5SfmEyyFYZXA7MsVoKmq4D5A",
  "key3": "31rkbYV91eeUHQZK9Jegs4zo4g9VaHyBkwipScusp1JwzEdWLUNvwyNUf7faqVkt9QWerQfm47Ehw6ALEEGJi9p3",
  "key4": "3xDnEBxQ8vzxQGY1xgCPnF1VWSp92iszT5ZZ8aqro1BxNUoEoGeci1y7bw2dixXoUhJ36LFh9MGLK18KFUyy85pw",
  "key5": "5aLjHMP65PuUoyeRXWf9HPhsKWvuQ1GV6reDUgFraXkDhiAqseTeRhFztVpQFxc8kmaWqy6awekzSUJbahpD7Q6h",
  "key6": "4j1tebrA6o866W2mC9e1aRYuWdApYq1kDQmZRfM9qgg5zjoZ6cSRbmUDMqCMdpZY5cri3oCA3GbDvcLe5ZSCqvQe",
  "key7": "21FZ6GjWsj4aRYJDrTGR8SFJq9EXyTQhd7bFbHsT1eMkGnkQrrsag3unB2omEZQXnxUsVxAt5uDHVSftPMA19h9m",
  "key8": "7wgh1P41xHsZy8XxZn5N2BZgnAoo84hBFri444DiDR4JRgkY9sgb7dL6XkH6xE7tWonGHMg2hdB2LApAUK71sWY",
  "key9": "2sVtEKWdjg7bFzXnN99CC2BiL1DhvskAvF5zDpBuPcf9TNGFn81CQqTz5nCmbq4UK5y5Rsk7XUYSjSdhrSEGGkGg",
  "key10": "BwYTmqcrULEG7iNRH1EMzCDDWtik3gZMA6Fpbn2XRMvpUyQh5umevgxdhihd4JKY5aTZjeiq2RExbYEq29KQXKJ",
  "key11": "2K8kDkmDEuJVf6nQ2PWq1PQwcm1a36YdFMMc8CNTCNz3tK8G4iU6XF7aAhLraRUzNcH4LVPCzTnHuwQAoGTV4Jb2",
  "key12": "3ZkjwU6yB5Vk8yckmrmCrWUf4Q325Duu4mMiW3gEqrBhRExGeb4eEP1L2RAFoGbqPNdVwJ4ws3hzLtZRf71RgupC",
  "key13": "fQd3o1ubaDN47KQVScmsqteSoyPYeTmsUPx2NuMppS5ULsRTfGPM9DrvEMqQoNGYjVvJ3WkbfiwryQ2w1i37XD3",
  "key14": "3AZXMrMdSitJSH4AEqztpgozDjEAdVeN81FoWtsZwuQ9nDVDzyUYdz1eanEUDjxYKAV5zzdZ1TxjXLeNvj9q8EQX",
  "key15": "h6yCpBd9M5KMKwUEM3WwiE3iWxm4PvQf3kYojRWYnj87CcWNnEXsCam6nTvv77oyKKCjoYVhRQfj6q7gosjQnNu",
  "key16": "iW8HbE15aHkN1TsWtikesLCboiMeBc5P8AZVGg6vNPmhV6drPkECvhEhRV7Uf2BLL51xA28SDFb5XoiS1zjo1iq",
  "key17": "5pLMeEAcQC2Prc2EW4pfXzLMjnFBeA9eV8g75h1m9MUPXrmkXYnAwNNDtxHPmawU4zSGiCVeQydnhzDbh531UWKK",
  "key18": "5w2t2Sj8L1L7n7GEuPtb3yWVarMaADvggD7gXxzSWiG9DuJToCM7Ftu38j2ZzHWyHYRZKxjbCfaWRBXbLzQBcExM",
  "key19": "4squfeWzjnM13waqrfQDuaLGTjUDgrPf4DrESvRBFNFh6SSWcM6sntq9bvqRMDSYzVDcvXMPc8mLXeRBWM6YE4Tf",
  "key20": "4JU6PjXM5agesjUg5F5FeixsetAPdP2AF8qDDsdKJSVNzqxeXNS5aAqpcozvFA25EXjfKgdjeyXSCF9r4V7uoP6B",
  "key21": "44pbYpjiWNBrgZMKAnwVmM3MazkRUKF9wMyfX8KeVC3R1oGu6rsr9id4abiVPLccx3FXeNStnq86oh76QenSZgCo",
  "key22": "57v2jYkBPWUpbkcihTVkSJB1ZoS8X5unsL23MR7NV7KqR5DVPZANq2F2ZSFKJkD8o7TVDpHMKUqzxkPzT3YqT2Zu",
  "key23": "5MsVtyeXpnXTvC4EquFyxUkVw7GaVrtpbu6f1b3LTwWgn1bcF6DNpr9wTPyKr7JC8qxm1RBrsHHGF9dmTGohRNBk",
  "key24": "4NnMPBQsAzNE3XauHNR2evs1THTYTe2TYBfmLNR8BAviGvDnrRTTDZdo3WkWYQLTWaUXDsaHyjTJyb3MVj6JbXfK",
  "key25": "5YU1mbA9mZaz2RhtHvQmy8HTiShHnbngRUZzrwRdgTyxCQm3LukT46q9apbnt8JYQmmXBEAj8vcQNJNHNu7qUpy9",
  "key26": "65PePvrYCcWZ1pTGTCMvSTE5fE3vGaCPANcW8Dry4fdNeoy6ZmAvn61KzfWiPkLoVQ8C7iButYqwUEEqmdYaQVv1",
  "key27": "cbaeZ8MsxNHd7vEAFzyDjvVnzqfBqs95hodLQXFKFEra9wGa4AkDCgzpjZr7g1LQvXEEGu2EMrRcdtKfCPMQqLA",
  "key28": "4BU9vm7w9k444KmzZeEvQ28mPMLn9VWJazJvNmrcyZU4nQhCoYQuYhqqdRufoyHapFiCb8VzmrDm3k6QYEgSqY4i",
  "key29": "typAWNQtnPweEwV9wWqkGg7hjh3hXe3mpH3eyEZfL1KAK3FkT4A9VVqK7DukHobMuZxY2uPm5zUa3vTqAQ6H3z6",
  "key30": "3e6s3UBee9A8ubEHM24ZbxnTRGkbfBXgJCg6tJL1Pfut7kahfca5ya7q6NUB1BkFyX55hN2FZRmp14Hg4GnGR82J",
  "key31": "5rAowuECPmy8xtEsGnMo8F7n8DwmU8GsVRiAYKHEg5TQ141EZrj3gacmvBEUJB6mUjaGvxAzX2L96Bek7ZbshqaE",
  "key32": "2MnG69j6C1z3eX4GQ1nAc7HBkqsgWo2at11zEosaswizWE7LriRq6JBWUeKgHniVGTApbSm6VQ4SLfCJYYNcyuvB",
  "key33": "5aQ3NQPbQfmtA9cDfvu7oV2UbmPmr61pLA3ugbANSHhdB48cVE3WbMytCKY5vct2XFfAR5sHSy7BYaNy7SahxQRu",
  "key34": "5SxxBBrYCZ7a2PmVhYQVTFRUhQXYbgaWKan5PgMvrf6aMj6Kx5DRdzMgMDrMYTZ4RFr7btZWPnpsBWJVq8PGHMfN",
  "key35": "31QWoTKGktXKbX1ar7JmjijWcExFENk4YxhcArieKYs6LQD1gbYqDGc9wUghYcdB86VsmXYoFdw87BS2bqkGSxcv",
  "key36": "4aKyzxjAvNLEj7ZnskE4ePPbEA5KcKpkDXAadXn2sYSRVCTEbR52PbTD5sFiSPHMGTF5BMnYw2hQzQTKc3rJhQAm",
  "key37": "4ajMQfSbXZLXZtptuyzbaaQWgpp7rXVjoBLhywmMActTx8tTqUGdAq7CXsAKzC8QV2u2DpcLWZXi4VXqZZa99Wym",
  "key38": "3oCGKQQxL6yStwMf55UBbgXWmtvyCcuNLZnoe7VLwNyGZLt2gwXWWVtFhFRwYnCD6VmpSsuXL6h2con35y2VSEaf",
  "key39": "2tDcg9WsS3dBLSdNoLqfMcHPGun4vUWCtxDaHtgkv9bM2KMZRMS8s4E9ToqDvPPs1zPmagWzcvVM8mvP8Aj1kUXS",
  "key40": "4sBcf1tp5CZyWxc6dr9qYwtmc6AcvfstYFrH4cFsJatb1CtaDKq1ms1qWsqKTN4QqdzBdM2Xid6rkgV8oB1wtyj8",
  "key41": "3rxrHSr9XmuBDY2jDzS4AwuxxGwC2N4H6fNqhMZ3mjWogWpad7FRnHKnM9LmiHkANBkSmxiPGupX7K58ZRMQWbWg",
  "key42": "w71XYpN8CgQEy2tZgTfS7MUqppmqw4xhKutR6bQuiAd8yWh6NHVZw7pjB8avWHHsXVa49DUqhXtX4J8oj4HYTBK",
  "key43": "3212Yk7UPSj7BWVakqBzY5Yrv9dCLNKFqEMw9gAfJMdoC9tSdt7MzeNiwL5CdnHvDGe4D56o9DD2pMFyFBbVLGZ1",
  "key44": "3o125x6bBRzCdcEMU2CdDLJLiHmGBsbRuWsS9f9SAeV2ZmCyJJ3V9h1te6RLiTKgRXbgJnofffyH5tm56WUL55ug",
  "key45": "4ivrR8maDADMxks9qyV9DVVezJ1kjkzAACzQpPCreYcgkSVV85yb9yZLMDEo2JYQr4bcJ3ZBT3Yu8JS7Fqkjnqy",
  "key46": "4kTrVB4TnE3KRSqRaj6oiHz6ZpFeR2248NsfXF7pvaSam7RGs8dm4Bq7a8mQJ6HyEAfo8kbEMdxsqdZj2ssCKxbC",
  "key47": "HMsuHUeQtdHXtKheAB65bAfcqrGAjfkVVXcbdHraMWqKCpZuvwzo8gWKHaWAFqyfRq98yrBHGJNktt6L8gvj2Nw",
  "key48": "27D4janjUwYaVgQyffL48xt48NwtQe6rRGwZQEsLwgi65tG4S9PuMrZBGGHJoG3jxuNqATeLdamuFkA1UyANf13w",
  "key49": "5gXJoQSN1GtaA28Skk719uPrtEpbyQnZMFtgYS8b1GvPGD7if4bwU4rtcPAWcCa8McrU75aXhHPJjhJi145DJtUV"
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
