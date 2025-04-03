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
    "4qxAWwgKsSF1yiqjHWrBe9mehtg3S1EBmBZypg6EJ4UcZBR4qKw22JBt32gTj2Wjqh2ffugnHzWDvTp1zYt3c3gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDNMXGRcS1GBkxv9KSktuKLpYCuHdMk7oK1Z24PWeFDQaEuyGErgimhjxM2KtvsLaM7oEG9Xp1SncD9d3abVwa6",
  "key1": "4eUgwyFCA8u1fT5VWpFyijrFuFKTfe5ztkMEzfEjQZ94zNkyUmiPonUmmCZhSwMotiHXuD4eXvcoK1Wya4xv9Uyj",
  "key2": "4KMbEYY2tqHWfry7KGfukNJpuctzErJeHexCfSaypuf3BLSNmUzWxxNWMUtboAmvjDS47KYAqAiMCDf2YJDdxJTm",
  "key3": "5TdFrVfAE8KG8mthsdswc2jwikjutcQf1GiSVbQxR8pLkpbid3zWhdrGL7Px8p2rvnLqia5LYcExxowUeyqRmUJ6",
  "key4": "4HFMTzespc5zKdzzUuwcXqfgsmpRZhcfPY7DCFbatFGQcf7pRvhmpX6GuyBe3keuynVKD8dVY7k36kJRztrZ2Knd",
  "key5": "2JcJg9nLquEeK85NgWQf1GdCS1vgctjjUBf6M1WT5kXWvyFsY2svAYuk4FPpZ4fWQ8MewWSLHRkXKah4pz3kHeWY",
  "key6": "3iZaTexHUGoCvhHtZH1U62YUjxVySKqWyfEKccR1uj4DyoQP2c6emPo4A63NiGm5gbVVDrQEBkNTubVSg3fLEMsM",
  "key7": "4Fg9LiTcL1tFhgqXQwzrG8gTFYiR8oN7xp6JszgV2ZgsmwaSaPnvJ55jWVAEVebiueDJU4NVPjRn5BVmTsBsjoGy",
  "key8": "2uXcJDK2fDNr6YnGrbc3g52e1vbv1PWZDQoU4CQYyiwNLqmK4ePxzGKCwnyZSSdQDDaE9RFUV7GmTWGZnKCf7oGY",
  "key9": "36iBBLM7QyLKbKuNTETRhJfePJhqJv5JqcFoL2VyNmMdeZagR3jY48J3qJCSsEDecfzuvc9rJ1ne9Em9yJUEg6dQ",
  "key10": "57i6hcBfyah1xDE1BP8uATN6T5RkHjAhCj9oYzm3F7WbcQfTEKXA2bofmZtUohsPi9Ae7ZBkbA7dnkVkULR4Er5j",
  "key11": "zvVjSEkpwUD74B4SrCRQsCochVvVGFvc2mRK5HKEgoYfp52cEc2ipjoFHS4D2YmcinCUF6rpn3teNLN9zfB8Fug",
  "key12": "2qEPL1JPUbfqqwfQrAWqEeMu4ib8648StvMuvxqpdanmr2U5fN4FUNwMeYegm1nvekBAqY3yqrED3BcNV641CfA",
  "key13": "2QaWgMtEjWgxtmeiRSVM9Fb8MaK9hVKZdEaH5u5qAdmQPWpm8weZSwnZrVQYgXx3DRGpkaRXReaA7bhp5AQcGi8Q",
  "key14": "2x6vPsTWNrm1gE4QyLwY47HAs4ox7eatSuEmjAunu3PQieTHGd25VJzSBcP21p6XCsduemrzgzLmjWRn2yzgqf7X",
  "key15": "5zEaKJLr8Fuqb5R9K8Fdo3wC4mVhvxHRS1hzbt2nTjymnDWXrJ9QbUSzzdzCsRij5fKvspAixWdpsLcsSC6Peq3x",
  "key16": "4RdvvMnXh1wcVtqrdpUiVmTaBdRTgW1Y9K9MtXq6kuQ7iSFNtC6csAazAuuvjPqH73GQvMFKGmuuasPRu9Leqip3",
  "key17": "5jN6GKwQzpnX62uLw5AKbQ261TGTZNPo2puQUU6cbQ4bdU7FHNENXJjmgMkYE67GWCeZN8kpcAE3FQf46JdDfEQR",
  "key18": "3k9sjoqdQtxk6QqYxjPQ9vgL7gQSNUUYDQcdpnsRYVMzSUazq3YPLNhf2drTDHeu99KVEtoYmbgPtcdrC649tKwy",
  "key19": "3bfoijNtgJN44RaKBbtFDSNefzhu5bmFfm7wuUfHA486pKQMTRvB1RjASgZNAtrfSDDxpz4kXn9SEvnF1FKoXBYd",
  "key20": "56MCrERWGj4ThFLTtKxi533kYgvn8ExbwZeEedXtAPBQ2mV9bjS7epEKmqYN6rhLhtnJKZMFGh54QKdiSqhaRANK",
  "key21": "5snNN48v126yRc624AE2zd9zErwqhVFDM5wQENyX6cd47KJVVUirjMEwZ1Hk9nxG4f9d8KtiVzg4NJQPsfMbpxym",
  "key22": "23MLgbcrXR4ziP1PsbkjWHs1SFKS68mVPD7iUSC31MbSa4rEJwoZqdLtV8e4PX3H5MMRoDuK8cEue6ELaA4C4JXd",
  "key23": "Jz8AUJVujnyoQ7cUuLFK4fL2pxguzQhUqnhJNCQLg84whMp3GzUUC4tSfhtmM2TwCTZ1GHAA4fYJeHPMZmqt677",
  "key24": "SuAYvr1hcLWqTM5gya1SGKeA2zZgWuJ9XbMXB2vAb2aypwJuS4XrudsMox7vveLmoNJMpMyTB16GSSrH9DcEDeH",
  "key25": "34W8z8mzLj8Y5MdaF472EhNbort8gVLgzkftXGjCVov87o5EvPiE94iPLU2yxHX4t4ZPV744vwRphYJqCXuhn2Le",
  "key26": "3i6aumPkFWBAiVw8xPxY7e2wf9DwFyGbSEd8xjYUs8ZnQqaCgzDjg6JAqeQwUVUP6D88YjEvh6WPewSo9yzHyHc7",
  "key27": "dvCJkcN2MFtbFvWLrUxNjt9uKDGL3AWdQM3aCUfWzpDo4udWHz6nozhjqWjA65vL2YtfYx1h1z9qXZx6uutc3YV",
  "key28": "5wEEZ2GyCMmag4nWATThWDAyi8tCNty7cYNHa64AMntRQLp2AssWMD8MbZNXqSU6qqBWUYHyB15gU9TCaeFigXxK",
  "key29": "46Z1qNdjxMbzA5cKVwmsVcBFCr5WQhPwgn4mqdX7c9YSJYMyWn2iti1MV7CqTfPrrsxbNkNP3tUaf9YTup5fKHNR",
  "key30": "5VD1JGVGveTuPdfrL5Ca2BQNCK5n37tuKdR7tGVdzHEvQqBu6amv7HaA6RYc5AoYkr4HJRjuro3GMCvLe1X3vfC3",
  "key31": "5RBkB99ciCrjSTXY8cmUeDzYvNHup1ihqkkXYTYyAvF8zrwCNCzyj4wBVyqhqjf95y5GR8jQ7AcKpP9xvZRNSGoM",
  "key32": "2iyQFR93EtzD3i9fc789KXNZdvYRpUyCMMUaCWyHaKLdm7riFPiqrkjvDRdjGNoQR8EHxe4Axkm8AGago4rEyPjn",
  "key33": "SHtrQ8xxEvyNo4jiYyRs3KcXtqcLCDXuqdAYDGLdEXSmJN6H1Cytni2sFgGg1DhFRiTNzW38aK25Ef83zmzi5KC",
  "key34": "3dy8wScUrK6PgBtG2TWiD36Zos9Q8YbMas1Bq8ZeE9cHfoi8VysbQrWJgqeLCAcVBSPeZyvTqEWfwKVjaK23UJ8u",
  "key35": "25aBgWs7Le5Bk3nvsJwCn67yb3JaKD7BjXQhMiETH57VshtR3hyhDaJdfFss334ELGa3Yu2jVADVSHubvuMutoKc",
  "key36": "2YJ9UPwFiruTzRbLier5h37gLnBsXKBhtEA5GeXrGiQhq4VdCwGRU1imRk1dX7m6zF6bjG8QwxumJtmjhUxCm9Zs",
  "key37": "4sWLUxB2tW2qihGZrsjiCPWtoB6wC4NpaZqYykM95a4LvMXtrQWsTJqpXzNDKxU3zqcvyygfXZDQZ5Dn61tFigdz",
  "key38": "3i84ATtN6PEbxPvEKSLtSfzehGa2RHYm19wAwQrorRA9uJzFX5VNJ98rUMgiwhhjhgch79Y1L5KAS49BQsQuQrsi",
  "key39": "5rGroTa64KYGDvZ9HHFtipw7dRcnHevGU8w23D1hizwCV9Jpce29mqJYHkRnFNsFqUEg6mibTj9pantZciS8vQhf",
  "key40": "2WZ6fpARiucGAXbp2JBWidPGsqmoxJ4PMSCuyFjLSUmMygWShZuAKUkxYZcAFDpoeA7WUFdTifvyKX1w7eDx6iGz",
  "key41": "dwMh5zQsY8wkG7JgYNChZtcHdp4gaTjuACiGP4MNBzMCDYWcaR6onE7jwDWdSzSvh2tgkYKo1tSkH3b6tDebjrC",
  "key42": "25pdF1BvT2X4y7DHzhi9wVTdffWcH9Htg3GDFEEs88yiX2NfHTKSKN7L61DpnYwkm2Z3hrtM3BT3hEXjpVt2Fcqi",
  "key43": "4bjsQFCgRV6kf8AvCj9PNFcEaYZJGk8fiEDk3kQ2q5YU7BTf2PBJPX9HaafPTFQLoykoiUBEPgtau21cDuVTY5dq",
  "key44": "mntA7UKykTEV6bkb4MBrYSHKbWgRyQmD1hmVcxwmDkWH56TtyXAxKiHuRJHwqjNB2NjSk3J7aJ51HWo2V77gBzm",
  "key45": "31KNcVgXxrQVP9pTQM9ZVMjauFmQ3qwcMBBuExqqRE5jiGZkMYyLx21Af7sH5KQkUoY3JQi7t955wt4Jq8rUaid",
  "key46": "2YbEAHBzfPXhvrAjCFYZThYFjSBX5c1DAhKF2JiwYXTohAnaA2GDHf2oyysx12VGYe2WR9mgX1nTNg5AmRyb2bnJ",
  "key47": "2uJwfUabWJWRWuMtuo4KPCMgZV5iEhyp4usuSd9HJWyhhdvB6EupkhsbW4saFnf76ouhQYLu9Xrn7LoPLRVFE7KB",
  "key48": "4KxJNn3y7gyBwGJrTJsYVRPNemEz9U1fgyiyCitnNfh5fAunjQVebwBGAPkkBwaMNRKKCGS36GqhfYJDsCGPNTz7"
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
