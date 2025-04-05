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
    "3FhN8eJdvmY8ip4g4oCb827r3whiPreRmTXLVfs4XJvjpvcN9jMoTKpEm88tHxteixvvgeHCEH6shDvTosCateeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvUxXzjQsFxwzhjpoTeThmz8CZKDj7bY1m4VefDBejun6Mp8fEk1my9FeTMpJ19Ya9qrdCEbbW48h7vS86hxt55",
  "key1": "4MSdyyW2esvCPs6FAALja3RZfTNXaTBcC5hZgGEUQDkYCpehCxfeAgRJv6DroMJeexWCgEMbgH4AJ2R6j67cPsy3",
  "key2": "2KH9REHCoQtHBMbUFXr716MAoPC7F6CWbK6gHkaFyNYWdQKQj77816ahdK47a9Hf1CNjWLEBMUxXTPhLrz7pUR7q",
  "key3": "3Bf4kdEyK2ffvi7YAQZL8vcYEo1jvD23xcoBssP4bBjAFAB2iqx45mLsFxgg5XitMWwgFNuapEUpB3fNaqvEq4so",
  "key4": "4ZCHut1awESuvFfSH8FzVyf6Dp2gKfhApsLEFUAeSyvye9miwj7uQJ4JBUPoce6FnTuX9eMWoR61dZdrJr9jMW2T",
  "key5": "27fidHKYEkMfVX7JL3CjRDXNEHVnM51EXurqjRgBouHuBQ5CjCG8xWLD2PjWsughgCb8Pd88XuyF2M3UgpwALWSq",
  "key6": "2yQXafFyDBZuMDyBQdoFjtV8L27KjF3ykGUbhR6uNbcrng198JMVx1hStXpEAM1NPPaRJ4SrDYKqmGDEaruBZNwC",
  "key7": "3wjMmk8peS38qG8WMEUh6aPjhyq2LpdCjiSG59fsfn29oZDDUT1TRnpNmUG8a6bZW1BegputH21e8abToPiWpXKW",
  "key8": "54xvMUjHAvvcyQ1gg5tYEWzVaodNZDLV13oaPbqTN1ndcbMaL5jqy5SMemHKnHFcv4xFx4fXrYVggrCDyjdAFJRa",
  "key9": "3C4rNrDyHsitPy37m9ArxWqrQnZkf7riY4vJuiUE7F7ss6vckr7idjDyGZKvEwe9TNimJ31VduUZNbFRwx1W4F7p",
  "key10": "4GKo96W7vKWq5AJWvDYGtQrV86S3zyP21tCBGazsVoxADx6ku4NXXrZoxaoeBg241X3PKLJMEpY1iBgJeUmfzayZ",
  "key11": "YoeyarNMqjfrdiyvFjRj7E5AZZzqUwc9unwyKWfusZK3Vxt72PZbVLbDaHdUUja3z9NKbP4aLSYSriLyUpc4HYf",
  "key12": "26ogtuCd8APdt8YQkp7hzKoMp8SiUADzfQFbBC4PaNWTDQiSBkmAihmeLQy2ht9bvEimS24QDHkVUZ4TwzSHfBBr",
  "key13": "387fjopvdBZMhguDwWnjCux2PjHaV8z3yVFM7UWhg3KiUDJduQxKVV6X8yvYoMQhsCBPokELt8WbjxoHr2mXw53H",
  "key14": "3t1nuMVsmoDFajVzBEAZW5FgqFi4mYbZLh8EbtBw9uJifnro8mLLj2RrFH3uj7RaYoje4xA92ZcunDeogpUuTnHj",
  "key15": "5ktHiJtYqUC76PsPzA1mWV9psVUmJLnAwJtmZKFpraCVKDJ62C4MqdtkDZBzus8JfDB1ydGFuDiy1V4uSJe8tJg3",
  "key16": "4FCNbs6RoLYQnKbupeCM61S6XeEZhdU8pC53FjFmhnQ5J3jAuSuNmfYj4gFg8juFCeU9oX24izD8aEDxgpnyYZR1",
  "key17": "mWPXC6iAAdvytyjA1tuwzH6PNGA8EhmjNyueJPj8VaTQ28Y2KMnoJ76svBWctRsKiQ8XGx64tVRxJpLquyw5YFZ",
  "key18": "2rn3tU6sTfWAVZXKB2SwntF49ta7cgHRYfVMHUE6ip4F2WcF9EU9sBJdpEzeCQECH8ST3DmznrUCG55wiTEfvkaz",
  "key19": "3SfboCvYhgPgfLFavENwvWXiKCQs82LBvPnntqo7pSd8fv3dYWTQYAg6wrGkasTVxEx5L64QwVrnAe969zPYvgWh",
  "key20": "3K6bRH33aUQrCmmiCzEYTc891SDFPWbCQQqKdU5LGt1NmkjniSpTkDkTDq71YSEYuVwsez1M1BdCtiMwK5bioPwK",
  "key21": "RAqYJVcNiqgP7EXZVWgoLC4gUjT5ZHncZN6sjHLQHisTScZbH49dqSBeRd1qtaTRsg4QaPTY5mdALrANFCtTUn4",
  "key22": "2bs1bLBWq432pEktfuQpEJuaSsWHwDBopkCMMCdjfJgvjz94tDfy96sPHBeDzbLNG9d3juTtyX3mVmNWELy1CWhv",
  "key23": "3gDA3ChQaNnVWDk1PQZFkJqGZZYcd3MpVm7B9Rwca46p8JSDq1FgTy4SQDUtUDj3K29REJ4M2RfmwP33GakKwo11",
  "key24": "3uN1AEaVjoDG7c16dYmcqD7CGBD4ctAPgtKhkmamagPC6uduz2ed4SCfoqiroJzSjTwX2kohdRRjFkE3BQbaEnLp",
  "key25": "5aM8x4qYzm1z1xu21Ur3mcMJMkLYdWwUwKa7WmxaMm2qm7Erm8YFVz6gBJcnLfSSD6x3HeXqHJwXNkd2qtDmU9Zu",
  "key26": "4bAombEED52ZmNy7L6QS5Y8aYv14cAjSFEaUSfn2ZLFdSJQW8KJaCdJYRyF6GxDB9FtiaC3KgWb2eiYzEW1BREqE",
  "key27": "3ziqcAGCVQoxzVV6udNo4MRQCsjDTWM5i6MK4NCydCkkUznytY2oa8zx9pWgmpGfxxju7FfQJLqFJh6bnYGeS7uG",
  "key28": "3hQKf8cTzPd3uzbKfisBEhR7BwnxW4dndb1JcDDDfXW3WPH2yb6PxAm3KqeFDG5PyZWz8SmzjE18D84rnUuEPaQT",
  "key29": "21y5NvTGEgtBFiiLv5Ha2nBbuU5Gjh5yypLS4MizG7QdyzrMhUf438vmvPE9uhFy8xMsZwC99rvDz5xDziAQfJN4",
  "key30": "2RkwKWc94d5ZyrMquC1eLRdpJabY2KAjmQWm5DudSsp7bCbjoTq82wjzZb4QpPX3EKqhbEo7hN4PG23ifdQ6aVVR",
  "key31": "4ZJ2Dvd5zakEMkz7mQU882yWwh8rw6aTuG8Zkn8Xp757CothPBbfw41Hn4Z4NzFr5HfvNL6A6FC94eYWsTKvvQmA",
  "key32": "3UfhJhjJAAzPAT9uew7LavYYFCsWRVLRQb1H8oz53H5C11ZNpConoQx1Mko46g9Rn53GAtcGysKKTy3b9pALHrdW",
  "key33": "34w4WHYZ55uanFQVQ5q2GG8rNqjSn5WVsvWH4wvZercVSRF1rzvkAsG2FcfnCCmbrbQJdbaMDMduiSaF1cNw9m1s",
  "key34": "3FQRu9QEUmjEg69VSTPkXRimKWu9bXWteBkxGtyBN1eGCCF5k7GxzuJmVCuJPTNLgwjesZkhkSDSFGzgnu3UkeeU",
  "key35": "3carPjJg8nATmBsh9o6vvFCSV8PMkRJfgFvnNHXVYYMxtyuoBL5HmKXWkf4AUAgszZLgEzZrMgt6dRhYD3rKADxV",
  "key36": "5aW1WkcJ1Ux9q8LvSR6MiSMmhwu67gLaCuxBxtGDxXTupn6AdTERovarUNKnBaRTgLaTMfHkFJEuj3H78xjndEKF",
  "key37": "4h7P23YFea42d57rfEdha312nsJdwF6QZXo2EDL1dkR94pghfc1dRDx53oKPKCjURksNmUC4tEqbbAyrRkcq7VGM",
  "key38": "5FFMpYVT5NnSVnjA1373E5h6uEDZVe2Fku7p51H2bbq5d6aQuB1YEo3fG8VDUQjdX2h4KwiUx6gRHrGsCzVTnh1m",
  "key39": "24FMPShijvergdFRvBUQywerQfnF9diALAeTMwozE8mo8a7Jf97Ahki4Nuk6JEyXVtrM1kNWVTprPntnqGPCDjWN",
  "key40": "5EXZAJ9JUstuFVqYAbMkisusYJYf9XLn4QDSsMtTJwYMRv79gFhkv7h6rx2WgC5WJqMcvAPQhpi86sy57raCEkRo"
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
