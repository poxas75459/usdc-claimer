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
    "5jvoVNySJnNUeMsTM7aBqBLiWSKo44muCtgfrycr5dw9wZnAGxwBkZK5m8LZmeBYG3fnwkiN9tx2QSGKSQfTfwEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnVb1xKYdtXEBfiEy67zq1GExtS2ut63dcj3BjFUi3Qwpy61XsFZoPjLHYwBmkarFgBepYF16G9pNoZQQoSWtqY",
  "key1": "5vHm7ThR7DJJTFN3YHyXYLGJtLB8r2HgCtazq2hQEt2jmNSQwhU9Eg8b8KgfmwyRUt8tF1gejRZjd89EedjzZiGM",
  "key2": "4PQpGNk1Az6gTSUE5jxsJiHbVaxRjhATCgDtLtm4NUY7xiKsqP3k5gW4Z9iCGmsVdfxNi4WqGsfFzC6Xamnd6LN1",
  "key3": "3YgjTqSADWREmvu1DTEvCPdsymjzW1dbkK9coKf4RXhmoYmo1EpEXcWNFhLMpTxaMCFyfpMjxivoVP4z379spCSe",
  "key4": "4quZrr8WC6qbMKiyNdLXyj2n8TTZbwYTpiCKxqTYbBCLhpWFXd4abJma6u6T5yQPPJsfzteqTHttHQKtRJxAZDt6",
  "key5": "7RZqnEzZa3cvWKvR1sFUp9K6Zzg4pMAh58CBdT3RnowvN9ou5tHoHNt8Te861hVrk4ias55P66cB1JU1ehbxFRA",
  "key6": "61XGKi6fMDaTJvPjL3uzzjneRpyHmMVMUqycMVjEpL3qDWXpErQYA45cHb8FZVdPi9zmt6Y6DRsAoptT6tqdb65Q",
  "key7": "3hZWLTtpn9pSN484gUNave2AJDroTBjRb1rawRH8koTRbhtARdwqPbEhu4BZWBJrjz8J24c3yxwrH5rGRtW81UAh",
  "key8": "3cdbnS46evdjiHBNUggnZJ4BUu1jq2CLVvT2E9Qy6qMxRdyvVJxfhhwrgjyRktZTSzrcVbTX7WhPYCzh4DMg1vB9",
  "key9": "5LoiMoSDUauLcs8qFsj1gFu6MppsYzbfiEbJh5gmXaA5oQ8ukeH2V9gAw5gPH6jrsyLneDcVjsbBvxaVVDhfVP5g",
  "key10": "5JY8rZRLqwArPWonh3s3mZqkZMDntCrzffEnyf6YW11Zovhr4hhiKMpAuQd4f38qL9UMBdX7p6XP9ERdZBykP5yN",
  "key11": "2dRV99MRTmaVm2Q4DT3jNWM2Mr4NCAwBPU9M7G8Pc3mhqm358yfkWhNuQqvu7HLfhRSH2aYfWcuTTL3aY8XiRi6A",
  "key12": "3Yf5zntmDmLPueqAh6iDraQzHKQz8KfyuHPNBNci92pZ3fKtFFfgHtXAtTLCg8NxQsrYo1QFmbkm6xpkt3dbeNAr",
  "key13": "4z4DPRXW8h7UCoDdu5xp9zWAMSaQ9NWSYPsT4YW7JjmDWhkdkQTnUCcpmVyeWDe3nQRbrsusxFzD6smV7LoDT3qq",
  "key14": "5pSg97xx9RpbWDeyy37P3oAsitxhrU2N2f59MbdnZ4m9BntohBotX3ho7xCLQvMDGGgtxkmhqU6Dydof8h5Q5QuZ",
  "key15": "4BWF6yUhQtuY7jMSbZQPYndtVW9fBKMbVGULiBtiZoQQK2ry4Y3WzGmz9qb3xmXQsLjov4QuTbT7xj3Z9EybA8oR",
  "key16": "h81Gfghr7V225u4kYpqzjVo9QdVAZZW5cRwNdU75ue24finjrrcypucvQMBN7Cfa5FLBh5YZ5tqdB5Q8RY1uy4V",
  "key17": "2Qh9aQ11LhDdjBqze3wvzyHxwxjAbAVGS6ttgcxPb25pxHosvZKiRAv6xTFcCNTq6LrqczeKQmf6uervdN7SvsSP",
  "key18": "4TuMCk9qEa1EjqFBZgpT8UWwkcmjx7mrSSyJqtWhCNMT6fvVQPDXrBP7xae7SiGbUihqXKcXXYR8SgxZhywGBLvm",
  "key19": "5tn7yaURURA95MfAvxjySGJP4zn9QFkStEsD4v6rmLVfYQoXdE6HQ3Rerytwcjmq2EUuJpKuQAXQfDsyTTcCf6cb",
  "key20": "2SCtPj6JS7FiBqUeoeqc6bgt3EoCFr8B2sNFiHcGo2thQyBTvP2HkkH1X441HztN8dzqvzTeovyERsfXcLLLqPD3",
  "key21": "3GQ7mpCsSQKRXtKtmbx3GvJUNHKJ33kHMbdxds7msaH6cgbtKuDoQZthLqM4NYKiXt61W3gpS8BN5ec4TvpHJjoa",
  "key22": "2KFdwkQ8267dQFezN9vAWoFJ1QHn8htn44deB8kcS4zFsREqnVoERk5NKEEjUrx4KGY8hVAHmaDaX7LZ1phZTfUq",
  "key23": "5RBkrD3dbDRULHmxPweZoeM36cGr4oLPg5mSWQ6N8QKT3XQDzggRTSz7iuK3EvNxpPaR3HhegxaNLgyKr1X5LVxz",
  "key24": "VUK4GnNk2KXdgpYE7gff6BN871AahBbiGV9NyM8gzfhtLXUkQND6izJqGKFfRK7YQn1vwwCWgWVa4Tt59HBNXsy",
  "key25": "5j6yVvGQt4QvNY4pHQkFtqffAcxXkNk3zHKdn5s4RsfpoUbyD5cChd6oxt71cJcM3q5tGgUg3eHdSG47ndKwCn6N",
  "key26": "BBnvC7JT23k37TZpmXCHFf3CxMudXUGLtVyfnqFaQmHP9zcWWEGsBLSsZjnGcwE2vaof659KbzvSUnXH6YR9TTZ",
  "key27": "5UW5Xxun7qpKpswmP4CajfYMcCScMT26Y4YBBCpDEnc8Yx79eBWxRRPhcMiiKFa2PnG5BRyjU1ACdaqwREJuiMtw",
  "key28": "2mtdw8t1H1qzaoPbwkLTYKCmn6gkSRAV4wJodCXM4x2HZ9ktqYrkJm6XTdgskKUYVdXNqpypBouEDGibdCu2H8oP",
  "key29": "3TVHh5Yand6s4vhY2aHXNadu4Het7nNzCBpM4tGf64sbcCAcMNZ5zK7pgiyfzLFsAsbwfDVt7ystyLEA5Xt2zGPZ",
  "key30": "3JZkYBHjgT82z6og7xYsuHvYPnexdznZQdkrogs3BjP62FbV8hwdJPusMxpwetRvQ4qd9QuAR6wryP8ycMuWcD6A",
  "key31": "62MHfwrMEbErDA3d71JHLXUHawdQRpCaGHgMsEG9iwvmFQ2wL9zCMRCENUeeJQweRjo632sCCz4wkV2xQLTfp19r",
  "key32": "2rgUo27jW7miPVSniYaPJERdhuvnRcKgwNHW7gC6z7TucrRAzB9rsDVnaSpQ174XoKRQwdPBCZokmf3Gj38FJwMT",
  "key33": "kG6ABJnbJfMSKpSS6EYKVz2k4GTjqqBRkQyDLvA2juiYeW3hcDT6fLVVhK8raztyyymBxFrsqTVfXjQmBmU9MpP",
  "key34": "3vMmXWCSBGcAWfbGpCiX776hzFbMMjEwhWUNpjdkFhiPQ5yEEkMZ2tBBFYLmC27PhpozgFwT7kawhyk6VuBMkt8E",
  "key35": "31im2znvFyjtDdnoBSiakDhWmghRL8keaLo5QtCoLksocdZ8QHuzP4PjT4tt9bpgpneJttASDCjZKyQ8XjbhUeK7",
  "key36": "G6SFudffzEcX9ZkdkpYmCAZqDbhVs1LQozUBccXfRmRAevZZgtJKKprGppUu5JRZmpgRbkLBTq11p3NDvRugaXo",
  "key37": "cGQmv5A94n4tavqijnXb4F9hJodk4g5E9HfPtRZPrCa3aZUZYrdjzxiGFKS2RjPqPrgb4P5JDSUdn9mCnayk5Sa",
  "key38": "4voUDoXT1A8kFk1fgCxf2YBtyUyRmMA5W6UtaRUmzaZVRRUttSXomVHhcukLdqZSPpYEoYN3RYGspus6a1YrXnDJ",
  "key39": "39pR8QP7eHgdiamnhfBAwtY8ax8RuDLfzp8ciis2HpjEMRxfZuAeB5ieFf4K6G5vmMZfioqeX7jrg1rUCFFaVYX3",
  "key40": "CnRVQGjZRFTHbtCvXEUgd2Ef8TSD247FSvcPtyVTa6rEaMLSeA8XWJJKsTjqkNYpyBFHNBb1QahkW1tAP1oufKC",
  "key41": "5Jb3Ce7ojXmJU1z8kkYjNnUSJYTKdd4R3bn6GLxWWfzzYAQeXYRjfFge1CWTDU87tactEBKdGusWMNwZxaAFu4RM",
  "key42": "3bNvGMH3JRUm343tUjfBgjoHLDeqk5GiygSVBZxKr3Wrg6iWKewRZQQ7oupofY35i8QXyudoqWJfRS6uuT6BWiEd",
  "key43": "4uoPYaFTCghbWnKA3V43PGNkbuXdJmn2JUNe14ikSfe4LL99PMya8mxdhETjgvKm8MYsNjYC7288xMi847BDtR3f"
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
