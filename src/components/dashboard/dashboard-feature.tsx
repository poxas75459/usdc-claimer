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
    "WxD1fZ4uSZLGijV8QkzrPT5hMcJEp1LHs9kfxLjjCJWMG2SCFy9ZHBrxepwopS1m3JAKAPLMsJ7qoGhrXrCHy3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mvsJyZoGRbu8QLE48DKG6Ux6itbBnJPtiuKSxwc9bWZ61gU6mZXxWy2Kq9iKe37KgncP91karUtLKJkSVkY5Dqh",
  "key1": "5CEwTNcNaCUcBmii6GKTssuHKXiQjfEp7BNfGtJDpCFGRAkUVE8dYThfH28SY8SwsXQ4jZYUgbQhL6VvpmmZMDHa",
  "key2": "3b5bt4JCHN5Q51w52CPJrRbYd7DTxghCG4sZ3rENYzDZstEM2KMcxEPA5CY36oNqHBDg7jNGxvegavf3SruHRjB3",
  "key3": "X1eH7hZ2PcWE6L8ABSLErvPS99XTdo1SFYXWzX5PmrPjHqJ64CSVcX3mH4aFZzNAVjJNLekvs1ACEVzebjinBxw",
  "key4": "4JZ7o8VtZx4r8f57LxSuA5qzJWzbweSQZb9cj9WpH5rr1y96N2zjHRHmdHcQ8qxb7ZpBMoPSEu5oN8fW6rsMpNbS",
  "key5": "2QrPahcZh1DT3hWJSwE7viBaSFDD3AJxnXn9ZEmytvLnvcEdsRopvJWjmMPvKJEcKbiWGLSs23aYGtAjsa5V5imY",
  "key6": "5mFk5yNHFKK8LDdGfnzJPncrn26cXJ48q4FwCmah4MaTGhckJA31nKUrnQW9D3uThRkK39iU2zD9HJnttxJpwLYS",
  "key7": "y2o2KcJcRTxhFMYzVjxyM1qFHBptoBnCcAHCNpw6EnK3hdwzWe7HdF1e8rdEaf4ZQKdedYeyovCd4ZfyCQZkgLV",
  "key8": "4XFPvAjaP4Ukk9CBSSpcFbe9vsmcXmFtVpV8n9Q9AJFWGRQF7chg2sc4SL1TXAQeQvPPM7U15MJ5xZbu5HShSGiu",
  "key9": "HfLRVLDoJyXUGqo4CvdnnwLjEWMhwTZQiYKbQjg26965DGgaPCCpRT2eCK8bn3ZBAaJW78tzmQhKCCXMsbvRgW3",
  "key10": "5MjQujJNBDUiA8ZWYzvpxMpUPrnRehiMUVhdoJHoiyP4g9ubFKiiXmsTm6gLH3sBEDcExhm5xTpLXb5ppLRLGC9R",
  "key11": "3LMfm53hxtvvY1TsLRQjFq7xSpETdCjnw962UKkDsqEVaiCShy7zsZxznESKVVVwKCxu2tiz674E9BESaS8gmWB7",
  "key12": "5t44HKdXd8wVtgEZ8pjuByKPqzLvtBTAfnfZxvchK2GJqG5mTEpXbiWdKiYgBqki51wujehss3LhT2H3xqrc1joR",
  "key13": "2yGaVQaQp4kENgh38x3sST5muFY5jZqNyFrQfPQm8KDdFwqWMGM5vicsxDwrsgjmjjyyr8JBE4wrkywmZ4LSagan",
  "key14": "5z3jcEAzfQHP4Uwiv71Fs7UgTHtGbtZwc4MoxD9TuRMHaZHWEekV9oaTgP6xc9wbZtVLt9ECdcS87TGhiNCdD1Ra",
  "key15": "RkLLATHpKLRHJQ1cG4wBfXpm5mEQZAZgDXUdMQSZs7kxdCS6XNALXGyErGDM3T5SFsP7DTcb4q9ejpVd2Fpa5Mw",
  "key16": "2iZVMD2h6CASoWhpxN17irbK3hSMfu7s6UsnqXUHx1hkh2yuELwLjUeKMmVtCPG4yuEQ3c1ztc6aTKgHoErMjrTU",
  "key17": "UDFoH4nDzZMAgTUkXXwNdUf2KVVs9rn9WS7dtU36ePtedNDJu9eYKzaR6GREfNzUFBNt1gWX3yvxftLnSyH9PPv",
  "key18": "4txf2zMNNrNUagTFCVUpGydHUdQ8m2JPiQhcDmMRfz2Q7ctB4pQiH7ydTL4MSSZ1zTFSqvaPGrmsesWXKQtmkyLx",
  "key19": "4wvSLU8GgAuMoJswWD8AJLemWyKSihWQPssojsU82WhMwaoENQpYRFYTGqewPqp1sQdiuL4kuyBVDbPrLC23hED1",
  "key20": "5eZhgr3NTWHcV9Z6W8PqXZCa1tkzcYcmAijzNaXzqx9iJQgo5qpsT1HUCMRuUwWjSq6Jny66q6DQyJcfrHivvP5Z",
  "key21": "4cyvUqehkEiXuxoeijgVnc3ZJzk9NgYWyZkFNsRAn7mRTJTP5RyHoa2mEDeA8964pKEmQCfp7XqjXk7CGpxeSCN3",
  "key22": "4NJ9AD3repivjf2qVftynQ5tJZhWa4H89gscTsaBgiDiSQJSkNzLKYRuDH2fjamqFZvKtEf3NjwHxpzSxBggkLMv",
  "key23": "2Ai95ooDmVXPvbuyb6A6bWirS3465QAGFC994bwpNqFYBcjHSv1WRQha7cPAtYAAu613ouwuk5jWQtSM8HqJKU2",
  "key24": "2HCNBA6TRgzwGjy2FHcX3vdKCyiifRLkRikfC4NTnJGUYmJDvzEw2Ud5B43zG9kx1GP2bWY5fB7nogf9csBxcWsa",
  "key25": "2RheMNkqVVTQsD35Y9fmqPXRRhAu63tozj16puWH6b3dwt6zNg4YEB3BWhHLr32obL5ftHW4tb4Mk1DTL8ZkH3am",
  "key26": "56FmHtPzStrvsnq5EJKamYYBYpdv9QY3tk31memSkLV6DxFmwhVWTGtnnZgBAMSMhp4dVfhtUfY8gRs3dY6jYWno",
  "key27": "35JaBFpNgATZ4vuyT9x6Bmq8Q3oVGZyTfuGSyu4QBY56cy9Qe8S8FJ8Dy5Y6eYhhf4zFniJDAV6QUd4a1q9sfXiD",
  "key28": "JeQ6ruZC8CPSnqaVEUNnZB3idrp5yaff1QDUeQ7gjMvYW7pmFqWToSE5ePY545cHr1DCGja2b5aXPkbG6maMbeW",
  "key29": "4JFtqFRT899RDeGn9TYNG4EZv4oNFofPc3dhjApKHWGYA36bJkUPmJuSBCKzf3JBMZ5MVnogsqPFiDoykxM4ptX3",
  "key30": "3mbn5NEVQYp8NEK6uZJuFd7oEaQUT149hQKCpe6AXMdNvJ3UBz1VU8kEGN6U2cyTVvFsmwGXmmJK8d8u4AV3tSLj",
  "key31": "4kMwfjh6SVBKcQG5t1wHpuYJ1zvKzR3T7CfdQXjLK4rs4uKfdjt1zGDspSfVmEDhqVG3jFR1UzgntXkQavVmRyzV",
  "key32": "3CBxtjFD9PpB9DUiqcARJfU4mNrAp3mgPUASaD2DtbFMtyBQJ3tZwLNQiNFwyKbJ89QgkqrwRGSoJ7SEA8wqmPX9",
  "key33": "2mwjYPwGvw5ASVP1dopGqB6f3PawF5Z4qqMtHCtAvGnYyU3K28RQuZi8iV3aydkoeudzznX33bN8YYThoXS2Kg2b"
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
