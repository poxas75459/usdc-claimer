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
    "2g7TN2WL5cDEchxiS6ikb2PQJVuhCuNderTRdWU5iHJvezQrBuCpg9SrSm2WKPntxidyvK4qPVGabrgwy2GutiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UCs4vJQMrxYGbHa3WRwp8YRF9r29jKP2NBHUcox7DmzuAgcs6XNEYP8T9mqqeeHBZBD7EJQURjEsA2f2eS58B5Q",
  "key1": "2U31iUDrn3ZpzYkwRQYrL2zAoALL3jvHowWFYgeAwTnAgNUS3K8RJX1VPSPmcrBycULdW9DpiBUUazkBsZL6XpNm",
  "key2": "iogzAiG6pHigJHbodEqU5TRGo2cWMhJxnt8BwpSUqPS5uzk2pX1cTfZYUPz8PBZzsTJ11fcK4i6Nu9Xp7hcnnrY",
  "key3": "4av2evKg7VRNSQ8VS2wAEGJK2yXk3Zuka58J5vMLZc2XoggXtmA6nesJDwSojWMNBTY4ESJmtnr4dVJgAdm4KVHZ",
  "key4": "55vVGJsqabjfQCxV5HVk7iEhjRNEC29qf3SKZsSTpTDoeKYdRRWJ8RuGFMa5YMuvan1WHiKNQdp3rpAhg83etihE",
  "key5": "4RP2ts84yG1xibR8B9uoX6RBWNsEmb4KnwbZ3FqMeYrdS76M8JeZxYUTy7VeFVZmqQi7Hq86EnoqfpVzkLoeLd1J",
  "key6": "Tc9XtMELJr3VVXwgtKxcSpxbtykFqUQLNZi6gKwgjtDj8Vd85nFfxfuVBGoXagMY7BcDnDn3v8aVZhjxh86Z4E3",
  "key7": "32Js8ENNg344CLTLVLfnzAampVneaNvuA4j2TvEPXEVZ1scriJHL84amYwZAdfFEqp3hJ3zWfHht7AAeizRV6ysu",
  "key8": "5G8NFvc6VN1WwcqgEWp8oeXU7WeBt8TvvCQXBe25fpZZfTVAvtRWrNZDydzZNTkxpijYcyVNRvLRYzCqSzoCH6sF",
  "key9": "3iZ9VFSHjfZPET1QDAT2LwrY1vydMbxdQTpxWw4DAQ9jt3t4qHGXw6fmJ6x1mkU81hscNLi7hetyqtFTTEW6jY4s",
  "key10": "4yz9EYJcTm82reLMe26TVcHTXrbS3Gv3Pz33CppdgnvYTCm9x7eDtTAgE6ea2PgZEJzfDVBRVJvpRcqYmo95oNWJ",
  "key11": "5EPnJPoAwaEUWEgWyf5wuMQqLN5odggL24sGDEsnpQJFpBuwEVdiwWWbKxjb4hYQbTL1YUrN2mkdCB85xTCN6v4N",
  "key12": "5zTCQEGmcQTn4M9kUwYT5i49RxhPFwdveYutS5MqutLwdG8jWRsMr5a8VgrVp6A1xjk8HnBHbdmbKBTe7i71vweb",
  "key13": "5pbqqc1hFGTXbhGAT5a46dHHhpLMovLFVCnijZP7gREKvb6As91Uw9ivUR7FX2jS3VbxfrsstQhWrxqLrL1wFdFu",
  "key14": "2XvjEj8arUm73xqP4PodD48McEYtcLwjSCREfNS1cANsUka3m2QL3FFbJH6V77QCF8c5ahGGSc5KGA4L9gXbz2gi",
  "key15": "CQxgpHvxE5BYJLWHRD8oMuDxuTQtmzFtooAqczdnsLpzhww7NZKV4FRFccdiW15CkB6u7GJixQWFDG9voTB9Ygo",
  "key16": "5FC2i4NA3rn5Vqa4D5Jvq3ymsu2gKKm3qhXZuEy3pivLgeY3A3TUkr32QgBvq9isXnwMQqMpnwjpK9HaERPqRbrD",
  "key17": "3xHZj1mLkqzKHPZFGprG6B1J7rqAGsXLkSNGm5o1ty8Egf6YDyRFhX8YrzfQt5yr8D2N82u7cdfCcGCfHSTtBDY2",
  "key18": "Apm9E4UAqBCqu9uw82pkRS3GxrNFST9UZtZS6X4usa5f7uJkQZWZz2Kww7ErrYjsovCiKNoDqsCmM8Y6EJYXCRJ",
  "key19": "24WDdqodXR5Mnwz1jr3pmQmVhr4RBGXznMYre4L6FgQxFMARVksqpA2N4RN5yok9W5bUVuWzK5y9LR3tCjQTpmoT",
  "key20": "39cv7qwagWEBwNg8mFhvGLYPnZZoKEtVc7yMeUdgEwkrmh8r5Fkw7qABW9EwFMy953LUoZHgr45Ai1QXHrtrxnhg",
  "key21": "47YaDNZkyd7PAvJK7Yi5rczvyZxqDUMTYQLkZtc49m4txc5UoMkJsYtyXSuKwdLEA1xuJKxXhmgvA3ZFp2pJQw6v",
  "key22": "3zBTcUdJtmSt68i3rDLDszNvdhJmCvBtpzdvGkET1XPjjn63EbrbakAka8wTg2DpA68fZjErf3cxW55zHdYD4riR",
  "key23": "2agGa6YB75iASTUArHc274QAnpvXMnH7nwAdZPpATrmnvVdF6GCkJrXhkj1DfseRWAquLmLBZhpkYvEbB7ecv5Bf",
  "key24": "4vnSQqQxv5jSWRBFUAfAyaw1cBWdjG27jz9fvhqYxedCtYhKw3tinLYXWKqfdiwZDAPamMWBcBVLqKjTnaKEUHnt",
  "key25": "3tLkr8zvZxvgw62hvGTDqHAurfBbyQ8JEErAKh8GP1UfZnx8m1avu8NmyUnEtsLwamhvjSPKRceKwyLFCp9QLyK6",
  "key26": "4KSQ7c3WKu9rS1FsNHJMxUyjneFZ8haupL5XUMvT9hLxxd4QaC9zKW9z7FoK4NpZdXoBWQpfrU76TVxUCVWU14jU",
  "key27": "3ZfZmicqQv22pvezzDC5KQVcxrRfiCYyc6KZvFtDZ72NKG9mJvCFNYuWatp3eWvxjRSmwus7gzyY2ZEt3Jcz3hyA",
  "key28": "4WpBjqr2Kfmy3ATE6nbsoPuVj46ALFfkxLqr8zRe2jFzShzAWnmvn8zgXPJHKeMH9pUHLEKcc1hhyjnMMCwSn7Pp",
  "key29": "2D7Cf8jwpLnjywD7R6qynL1vs8Uv1kBz3PU9SBnutC9GzacG5LQw8NwKShPRFfP7a4AgEv8p7W1yyazHuDEsfLrZ",
  "key30": "2iuy8MsnWUyDAdQPSd3bMk5cGiHJXEZ4ECL9MBRHfGxigNtx6Wu2KtzP28AXkif9gb49c4dEdZ46M4xEaiuU4jey",
  "key31": "4o71iqifKtM5byMJ1AHADoCe6qovp8P27Fphb2r78VBChvEf8ZpqFbR35jVCMfNDZuZccwsUX7qBhqwLokhXbCHV",
  "key32": "5MAwjErxZ78qLhYk35sCei8pkDPqojseNm7R4ip9VEX2JCeUw3znXEooCn7j3rJ4cuqzPbXFFjwWCZyREoY8MJNJ"
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
