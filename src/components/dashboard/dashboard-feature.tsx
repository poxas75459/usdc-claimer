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
    "pRqp6Le9cnm4tmXBBPvp7ddbutvabnsVTCTibDWVRrK4adsnKDR91y6xdGaduv9ggm9apcpYxhSfvJvha3pd8Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wLZs9DgGuLsmygiJdvpeXrRmV73LJUAKANsix58cBccQ1ojjkBRBP6N3QjdCxT8KvqT4YPGAhQsgrpMQiAU4ou6",
  "key1": "3PTSbejaptFgh7dvpeDjbYxF1DXqczqXm3rmwTEZnjAKsogzRRxYSGMzrSRoEZ6fXnSXtYPCTJLDg1gzDGE3qpQh",
  "key2": "4KvUb8fDydx2VVVkfGRr7s2ASb1Acspa6Sw6ijM8WVGc1awAqqa58GX74RguvwzDWi2M97JvyEUwCPseYcL7VK6",
  "key3": "3NwLsyUD7qApF1dMZQeKHq2bnCregidZqjkrY7n7YLboGX8uXBMCQp5boiY9L22mrEbFnVqGmYNweVsswsc2daMa",
  "key4": "4rNLnFfJeqbybJ4eqDrq62C61d3baM4w8ndxkvhSYcYb1T2JXAvh6XXqnTxbx6edqSdpPBMCc5fMLdPwcZPWuheQ",
  "key5": "5Exqkap44r6J3FutPgsNvyJPka68cRsSp83Cz9w2NnekmYTvis3XT1uh2szAjn49KE6HLmWSHBfjgGXLXVq7KGpi",
  "key6": "cy1VWs3MC8pu1kXnjbzRU7GsrasYL7tQ98CV3dPzP2uqnzMb6xTZq142BgWEZVYRYCnMLaZURgz8LfE5uUXemkZ",
  "key7": "4Jgh9PW6hL6mwedhuCYZHsNcspyWu6GJm7AoF8Rp3XLNsrRc2VBagPKeeuBp5tYAoGoBVVn22EZuoNAnJqR5b5Hp",
  "key8": "33prKyQTG44UJzLXDQrQ4DvqoHcJqRwtUVWqzpbBieXNzaD4xxdY4skUtsgBGaeQWk35Jw67w7pSoHe7uwFGzN92",
  "key9": "BhSS4H4hGb9EsFLL3PtdaR2VFJT7yQcHj9a52Y7dRd8b6NGFRfY4Nk3wE2xpigtZQ9Pi3kmdeuUBJMxUeoP5TNX",
  "key10": "3LDNY6XQs6E5SFhPAabQhKpbuhfduP2jGU3ak8HsC3rLJjmB9LatCjZTBdtmNd2LzTyd8uEGSijhfnJTh6cBFZTM",
  "key11": "3j71ZudPU4xbDT2m7Ea6Z16VHfbJL4wvvEsnSPiH4FyTaRYUrJX4yEzzySfmUC5NVWRyWACmEtAGk7nfN3vrwqa2",
  "key12": "3fpZTbJeky9wjU9wibt3XpJibeqGzviDkLwnQSTvshKqThbcAbBsdD21NGvfqcqbeVRRYAesnYhYASrNCMFjAfyD",
  "key13": "2Kko1j6pa1XvHemxNMJxLrRrvvA8sdunu1X6PShPsdkCneHryCDctg4EEjFAKeqKDVU6HBT5EmNGtXWPsiknVT3C",
  "key14": "3ktiAJuptJZ2KyKKCimLzjBJkLG3vieEMLMGxc6qkLzqeoAeXXFPnweW6yvPfa1nP1RfULKsn5LfvsshwkayuYeg",
  "key15": "5dwVAfCp6Ua8hRPss25hdEwNVCvZ4UYQjDkXDWLrZVAayJymsrxsSpGrSySNJED64L7UTPQ716KxDz5m2MAmbVtz",
  "key16": "25yz89FjDVGgRQ2y7P1azd1FUxC54w2qFuxNQSk7n6FAcmDTVstre5F8GoXob9ieBGBz2bubLLbnMRvFqjcSs4Cu",
  "key17": "3QwfVg8QnX52i1YG7zHp8GexrpaQJprghe9vGikdPWRcf3MfVAr5mvT7wG91hHpcWRxtpUkrUMcwDnahn5BKZQ94",
  "key18": "59L4L3hkGvBMyz9dXnWec2oT29U1kqPycrHrLhSrh1vjpk6S1reCehBLip1S6tNK13Ng7Bav5ssPppcPAy7UXuju",
  "key19": "2ZpSRLUphprNkK2Xxsadeqgs1caosoqjhrZPLqxaTaZxYrfrhwGd4oSTSvC6mJ6F5dGzjM7YMV2VXev4NBYCKvgR",
  "key20": "4A1wjzc9J2MTF4E1PsK5Uu1m9mdGGB9rBxw2jyYV2F6f2aPkNzX6W1tYLkaTr4hPdmRDSTg3ybXohrp7qFxbeCiC",
  "key21": "fHredc61xxranWQTwXMBcHfrSMnvwicUiJbrbtg3UxibY8biV5em1i94ahGUA7Z56vSC5kvUh593SdvBJfyJVga",
  "key22": "5rg4L7phTaZ7gVStrTQ4S1dGjdYsPxYchUzPgnU5iwvzyo2HTktRztGDRs76vWEBQ1p7H2gHRVVsb7CNCCbnFMEr",
  "key23": "5BjvUerCAtNGC4rA8zEBKbZSiymVyM3SRRkg7waYFjgppBeuHktyEL93EHUCjVvmDhfDutYHUPAZXNYgZE72qhWe",
  "key24": "3n94rJjtXKH46LJGUSUaDTQXsJgx3zUL6UEWcw2gMj45gSy3Nbwrx8uihLoqVrgNGmomVnM1JuQwL2Rbze4pQYqX",
  "key25": "2hvBoJncbKu27wZkH6ar815hP1rMq9Damnzhy5E9opeZA4m8TKbpDhwD8K1xGqvCPpH4ZSTBEyqsP5w2KDryNbQV",
  "key26": "4jTSNU6wcg1Xj919NQFZNPgJBh9R6nMPbsHLrHWFCPfSqMuQj4yQRYxu7qfWGjBUmqCwS1693GBcwRpYEQPmLgvE",
  "key27": "2qZxkG6b33MjEA64oWWXUwcdn8dqi6WeZCJGTSuqeD75qZzgw9AGqp3VcysHdnofsGTMhRqeRRyHJXKSxKjXEoBA",
  "key28": "3bC3KSmR6PVdi4LgEdgFofhV9vy29oAeLFfRDxWKAvc6WbPbB2fZJHXf1QqWwefC6PuFgg9nsBXHP2BkYDLYvv9v",
  "key29": "Pn381ijUd8CM5aopKWbw1qmSpNerNFJBWX7UYEUeZQi1ury4yvYxnWVij1wtB7MzLZg4FrZJQJM1XYN9oh2tTpj",
  "key30": "4D8FnFwjMyTc3W1YpR5tmm8sFAxkxD4ddmcuMJdxb7pryJxF4q8i6BFjsThSpz9hDsXZK1kerZPEJNgAMzKJ4nbp",
  "key31": "3ZYmNWBNDM7ncxmnusKvXmz6RaNU7iHJkvsbFfsf2EhNu1qzruSNzZEd7QMk5wYX751AG5eWhQKmbQu9HqtaHdRU",
  "key32": "39KoEPsyvpCwgpmuS7shbtFb8LB1sTGdxGSz7PEsgxsC1zMhTordNmu1NKFoPGHejJoezWnu46UvkKF3DXxZQgjW",
  "key33": "3nx3SJ1mhRkcqEQFGMoJ9PWp5Xvhm21MpmcuaL9qBj7SUZsj7xpgysAjj53GxjyeF1Ucgp6sgxYSEujw1mFW3Ytj",
  "key34": "55gY8kWcytYJSk8BXBM9PwQoRHB4MC459CGjo6EYpaazF3zDkvCvGi4a6WLnW1J1FiZ9okV5MfVwx5HrtPRLBfFH",
  "key35": "54HAmwVKZHuw2NhmrPBF8pbMB1gDEqcn1igtg3WTydvWin318vFumde7RkuVSJi66u1DJ8vX5YGieJBge1vYXib1",
  "key36": "4Q8B4xtTTP2PxyERyZa8ECYVaMQ44qB6xYLFJfmJCrwS36hRnaJZ1pgRpLXHtD7EyZEUKUYgzTihbayzrHecpg9m",
  "key37": "2ngc1nkw4mNx8XdJ5Jp3Q1oA4kLUVcwB1s3rkVxLzLY93yMZ5ZF5WbL8TCxM7qpw713z8Y52RXqP6Qo8BPG3RCDa",
  "key38": "2ddAVP5ht7KSpEEh8PfAvZnsRRWifiMtAz8wM7Ekn6DefxrVEMD1Hu7uz3fBwQh8gfgUy9ncX9aasQRrb7cJM94i",
  "key39": "3W6xGjMJbHd1TouwXur7LTLZvMvtiQ8id7dR9YgXqRUnSZnb2suBVtEyRFDM4AJQm3JSdkVpuiea9DGHLqkdFg9F",
  "key40": "2xTUEiPg8GeW5e6Yt8JBJGYXExeUst5Ri8ykaEpkaTtEyusDUtEE7VBCKL1w4A5nzZREYuZDxzDL8aAUj5X4B2yA",
  "key41": "296y6bT5jF93XuNq7A1yYMU3QQKTDDZJTez6LiP4dhAHHZatkF4a2WyMxaVjJCrDUT3KKdnJEERhS7kGYEs712zZ",
  "key42": "23ZJPXRoRFRzqvfJuw3JBCJnxW8HhSvPJoAsePgCPNeYiNURtvoWmMdz3LYztwko9mWshL992J35keey2Qp1Rqsv",
  "key43": "5h1N4WDYj9AmLQ9c5tvtjhuhYrm89Pg1V7kqc2RZb6dcQbHCfMBgARRKA5KSSRkt3jM9hTaKojA6RuG2NXoHCoTk"
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
