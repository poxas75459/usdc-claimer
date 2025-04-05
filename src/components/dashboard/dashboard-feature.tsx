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
    "4H29wee2e2eQzus7Up2K7RoEWGkZH61VR8TgcVkoSqJ1LFofTEKC3ns88tt1iR7j96mS6s22cK8QUuddhRYJTsE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qN57DPC8ysLoVyUemzcFcgt7hkvywAfj9VabBejtiCFs8h5kfBGbDdvd2oV2ukGwHJFWqCeJiEVS7XH75J3JFuN",
  "key1": "4HquUc91wmAzGX2ckvzZB5bTkRnuxunL3NsQkkJpZHQ53xUKQcjiPjJLQDZFfzSSsevd7VP6FnWkuPdnwh1BqdhA",
  "key2": "4LxxxJh9Y86A8CpP2mZVqv2t21rJXqotZPoj6daWBorrbVUGqjkpLreUWhoLszyUTovqNrtX14MSiUyz3ViEbBJr",
  "key3": "2sLWQ4xmw38VW7DEG3QUc3oASk4NB6pG1r22tZV311yfP6PPhU5GxuUwFAgBJYqSsiUd1SpK8T9ANHSjRPaYB3or",
  "key4": "jfvgKPFtgvRr2eTUG9QarYt8LBvgFY8r2qHW8uoDgXCGAF8Xvhc8ywr41Kd84HcGFCfv6jaYULfJMwL3pMv8cxK",
  "key5": "K9MvM5tfB9jAHT4GPUpJG3LsUcpBBXozjzyaYQK1mR4qNJ1czsGN6sNFy5gHFK6Y42b2p5iArLDbatSN9axWLa9",
  "key6": "2hsqJ3haKKmtY98Mx4evRe4nbfeMXx7inSxSHQgjsceXXKhvFpwxztvGUR11cVrA1fQtpBHFBYbpH2o1ybDpaR9f",
  "key7": "4ZKjbMVMXvfByQrS6APsWaFhkCWYpfmVVSAQq6ZYTz3XpyGiKFVDTz5uCEs7Su1b2BLbF31hfumtP7ra4zcKVbmC",
  "key8": "Tgt4U3ng6TmKQsQ45RFYiuxTrmbXHt23QFZtVyppEuv43xaHSSEfeM7HC3rr6a13bw3yT2SjK8QHn3UXqJek3MX",
  "key9": "47WExAxy561Mp5R8Kq2bzUj8nBv8LJtnPqr3SpGnhxjd6pNYbr9QeRa9EpnFeuJjRXxVXf4q3gfssrYQiqs2AuHB",
  "key10": "5RUoh4rsPs8dSDgdSwskp4Pigiq4sQ1jUupK6XKdWMWCuPfUnRwTV1biu5iAXNS3epztkkZbcet6ACmQvHACvTkm",
  "key11": "4oc9jYRRue7FbQ1EWCLDFG8tB2zRPagvBA3h61YqX4ELda7RjQdNjX68h5Mjfd367eoXhixwEm1TWqFK3zvuzWSt",
  "key12": "5MRYM7oW95TFGXcajWHruvoqLLxPvF4H9Q1h6U4m9gdMvmFDUawD8tdvemHbqEggRNkYxLMhf7wssyQj19mTHdwm",
  "key13": "45rotmrcTbQxg1WUQSxnfrm8T4yNJbvcbx51j87NerPBTrwFzTZfSeGQoCz1uwhUGoh4478DBABsYXBQqFTc9LSc",
  "key14": "3AcUHwtb5G7vr1EWzXeMrcWoakxHykXyzr1Je6NvniYfq5iqh2uKebaEcchJvAiaf9YAc1gXMjUzFgdeFATcZKQo",
  "key15": "4BtW23PU9o35CTxHGmDkXCYap3FVQQyZBvJJc7ujfy8PbgQYtT4yQGsMiHh9E4tcLup5W8nTyAMwTpxq98wwt7A5",
  "key16": "2t42Fjha7ZzLYmAUp8iK9QdjgCeuhyxmtjWM47ycXNx2ULw2Dtyvmbc93AaBoP2tmWUBqG384J1Rgu5gWpHX2V3j",
  "key17": "4wFTqRqHrHfTtEQHFR84vDWM4QT29grt2MK6YudBna13YEVwKBPXnkJWggCtRdx9uyVGqLh2PBzkAEGuG2pcnG2b",
  "key18": "4KaPodYPaNC56uAycekWksjGchkGpWHW7Gd5VxiWzJDSCYxKkxmMndqYQRaHj1PR1dVzQJKUX61doFUgDxr4o5ts",
  "key19": "9HdVabaPqutpTTrVrvrwNL9EwHYrjJf4XrNcd9ee8zvGZzLeJCkHcrwm7JUvQsWs5cbMnXer7Mt9sSoqgeTKxMz",
  "key20": "YjbM85f7dzT8fa1i5Dk9rZ5KU26WU3vcyP4XD9ZW8RWEhC8T5hzZtwyTcXCgrnSB9VEopAW7Dn1cdufGjRhXFN1",
  "key21": "NqVFweQxoimaj3EwX63knDQvtVScBrNi6GxVRnZn9zNVrBqBas2HaktyeX3X21NmhwbQxV3hNzxJ3bgUGiCqHzv",
  "key22": "2MaxNrzBuAzLf4ecCbRfzu9GhXKDzXZ7ZL9VWxLpPJ31FtDnCBYhkw5SSMfZmgwfTvDzChDaQhRua1REiyQ88hfw",
  "key23": "6hxAbA87o5eEhJnaE9hg3aTStwcRer8TYeJQDDWrTjJUVuWmNqbp2BzVibKxpjG1s8dRpmTaT1xJwT3ekud8ZqD",
  "key24": "5AQJA4bhNL6HHegK2GetgA51YG5xREyj1MfPykK9G9SLP7scnj7LUJqjAfJ8Z59w6qNEHZQqLD8YstKjTyYqFzDN",
  "key25": "4pUaw9RToQJ3wu3VDKJfU6qrrdav3N8bszHuuHZAb1iNiyj4WFMFj2Xfy3xSVBFD275zjvLNKjrhiNwUN4doDhpe",
  "key26": "456u9N8J2irT2Sa629DQfCjEoPrGHDbJNsJ2VzJLQbj85mgZZ4fHxefaAhBqFjiG4P6Fuc9TnityAzhiYYegSJgd",
  "key27": "3zEB85pHxo6Kyqs8iqmbJXnCkC4vhVRwZBUHxbnkVQA7NDX8eUGqPkbTQWrVRg1n4JRypDJmx8KWbgVXSZqRoqju",
  "key28": "vKaGtkTiQUSGPfJbBj4Ny6naUTGPdHj5vJDoEKGjFRWezRbcNMwsF3J67td5HVyP9nTaLtBi2iexXyC2eTpuJts",
  "key29": "56Aextg9hw21hWtKhwnQ13pZbXQ342V31qYJgCRfBQ6t7VoG279QFSYGyweZDcjPpgkqyjCK1sJWBnZbxQbWMAym",
  "key30": "DN8xsoJ5aDDgqwBmnrYuPUmnRwhhpRAEhNHtTfBFGxdLYp8kgXgB2afM3d75AJc2NZxpmMBGmBGqvuZ8cJWNFQr",
  "key31": "vUQJaS8g4Qza7ch2mRTYUadtzEwzGK8RPCa7RPjCP5TUUbXAoGPH9MtvkNwX7kB7etgVV2KQHjZkVJLn7VXBg1y",
  "key32": "4KJBcijvFd9Qt2VdabBs6wYkQ4bqvTRxyTGsq9vRmHcbgdxp6fZawq2AME7p6dEuCDLzAEQwBK6KvjCC65iM8pCT",
  "key33": "5vhC4yAcZcsEUGgbMcaUny4wYE9pa6BMCc3t4zWZc3hnZ98vKyfU54oyiZDNzZhctLXWUnxw74L3bxpMqaQtJ2WW",
  "key34": "3hR4YhFQU6SaZpSsm5bwEXrjzGsUSM6PzXmUwE3oRxHZ9aqLN94Zn4Lvimp5gyw9ySoMi9QJm6qVifn37SoNgefv",
  "key35": "5qVrAVqigFJVGQ9pyQeenZuB5WDLNkmYH65evJPd5MBg4rCu2SfYA78AeiaVThRYzv7LMrAV6srAuYA8XhqUuZFP",
  "key36": "2Jdimd6ckN2xjvvqZcBcgFiJrefeWYmwndTivFVSQViy49hPaRuMZNw8UZpULikBJvgjG9qcaEb78JByH5nGZ2g6",
  "key37": "5Ma3pFMrWccvmkH9JiakCtbgnHgR2pRtvE5ih7cbL3voU6FnUanumcYTibVjW99geznzwPqaaYXAwCjcPtgobt3e",
  "key38": "44FBzydNxgvDVSbGzKam84DZARs1CrNyNJS2wzvnhBiCarKayQQLyhVreGBWxoeu4yrqjh2sdCTau4zT8MPYHikx",
  "key39": "66fk3wNZyKGkNE3y5di7oeG3g8fKKrUvqesgURSJse19qARF3KyyWcpBMbY2VzQ1hu4a82TriXVMoXyJ1Eoh3Q1m",
  "key40": "4DdGMqkZ2gr19cVUkqLL2tbNuDsrooGWmAwu6HFkmkYyfi9VwDLVREkvcjEZ2UrwvVtYovzNWdUd1hWqY4Tx4i2u",
  "key41": "2GAos8Pnfvjcp1i85vmPLoczZ4pbUeXaPhUpjqS3HdwJEQNshJ6L7tBgjLfuW51Hr5LybjQoCg6xBL2joZAozkox",
  "key42": "3EurqeJYr8xmnk872avKkxDyVo3ttL4gUmkSLJoGEM5kTPzeNjZi9qAhGUWgUCtmDiknuYVkvgxLHCr1sUU933U6",
  "key43": "WqpguU5kddt8ahAoDzqTANymxVADQxb2RXv8myk3ww4bywczm7fvvMgvg9oau7GrAus5NHPzzK6zeEM3HVfbkYS",
  "key44": "2RBNpMQcRYgxA5QKupFJC5EvuU9pXWR24C13mJuJRJ4z1iFxuJdJBGWu5qyx6JWrtwHup2d1Kzi6kbXkwxhhHx4",
  "key45": "Hcmfwt17radLyVdvbA68bqFmP2hgFBKH73ro7GkJc5mrZmrZA1mVy5EqamBQ8TpCELXkEJq2Tu6z7VJc3K19EnL",
  "key46": "sWgC6m6W8pgfVmixRhXbke3NxNtpSFoSNtE6GEQriAM2N5tpBFaiGf4cDVCEhy2awzPUi3WnmoRAzTP79tejPJA"
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
