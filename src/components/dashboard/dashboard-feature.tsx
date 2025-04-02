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
    "3dvaHv1ZEfK3mhZzGD246m9FuZ2Kaih99SeVJyMEyRDNbcUF6nt5d2hejTykRYJfteToYWxwq5ztcYc2BKt8XsDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdqLkvhmtWwm7vzzuWafzeSxt6vqheD5vPwGHUoDnegGHygdoYxfUZqLqjVWVLvyTZwfJYDYPSUAnPbxoEjefXe",
  "key1": "5P7jMbQGoDRaSjPnEjwPAQg99A45bkwie4F2DVn8LVQocVepkkT6F8GpczpwexoLX6V54iUACKAAcSm3Wk5V6s7o",
  "key2": "71qRfp33cTfhw4E6gNz4hGFNyaLvkAoZibCwtYkYXUvM5xF2SJuJic1zt1YLFW9qXyQVfRALdBthku7quZBRu3g",
  "key3": "4GaN84P9EmMjrnq6gVwrr48XfHC2GVcjV7W3L5PMdiNpghsRJJXGEfuQycecxvJE5562Rk2G5QAxwf4PQVkhPVev",
  "key4": "5eVdPdgWUqrhJzSfNzR5SJ2x3tD3wKTfmi1Xhi1L9W6SueExJhAzTrogepcSkQRYXP8fatfochGrnB4QnAraziUF",
  "key5": "3Neo1tXNYFPP54LftvZ133DnXpUPdLR2mvLvLSNtYpNo4CaTHtZW4ZT7knc2onYSUpW9s2xTFVKVNsvBscYUWfXp",
  "key6": "XLSMYJDFBthnPor8H4F52LwjiUdVMCbYc7dPkmyZbi33HE3XtF1hH3768cxMNnmWkDRka8cbixQ7v5sgiWae2Tx",
  "key7": "eaT5wDpiHPqLHaQnqJ8jXQE3fo1oa5qG5EboYfwkLAvAFm7jomyJKgPVrQp8rZdFr31nut9Q4WcBKmddPPgjZsb",
  "key8": "5FJsMXcLPRcVf8n115f2PfAWDukHEdzorppcf5T9hcMNcQooeCk9BYCc37NqS6vvDmgRFARSopAZqQwYUAS7A4z3",
  "key9": "46ugn7dHYHHTWfEtwt7PTrUk3wsJk7TRFa6jEQisNUW9MvMrQGhxTZAjqWaVWEZmpuvRTYdX6RW1aSDn1DAEQ1J",
  "key10": "3Dd9Y9ozHAaQBm7yfGk9CxSj1Ejc4n8H927Bfs9wmJUXafYobdiJW9WGeXyBd1mN5xXhjeW39Y3JUxfU36S224PX",
  "key11": "VC4WW6v7mGW4P8sq1YoUJz3dvNACVMprDqG1qisqKEDJkwsw6SbbdHwbR36S3mhviojLxEYknBgnfTFzkcB6DcN",
  "key12": "2PEM4NPKDkT4sWZXk3iK2mCxLmKTgNQq3nzv85Ax87nEnngRkCfead4gHQnUzPyHA5EnU2aNZPF1UfQZwGXGBEKt",
  "key13": "5oV4J1RnwrNFKUd6TUjSJ7fiNbUj8Eqqtm6me2wcdDYhQaRxTonWKkTNJ5bUgYYitMPjqxznUPZiSu3dLYQHktyY",
  "key14": "5F9eQedA6QjBztfjESvqJDtmJAg5RTZRA5TMbswigUjTk7c6quDzdLHGB5vHtKUsdNcGviCffDcizyh8ypBBW9YT",
  "key15": "7of8W7sYsznYAotaL34ARzs5qSZVBMKqV4DRyLd7oLZXjmriY6EW4NQ3cY8VdYCGbt3pwV18W1m6NtBLEC1FgJc",
  "key16": "26uBRD78d8WbSUfVRNzmK3SEsLjxuk9jNcAYxE4CD3KGUcLi9g5Koz9LwYKjxyVvczEBsBv3NSBJ8kcJPic4oY6U",
  "key17": "3x5B7et3hhnZtqXKb5NMmQRJf9uFwYYfwLfxfzcbn9LGAHvQnCNhtVSRvLfZHqEdLMSn7v5XoHM7XbANMdg9TQ35",
  "key18": "5sVqYyaBPEAnVrAew92zq4N45RPfmmA3W5K219XfikPHWVswgsngLsn8U9jiXZT24CbCBKHJX39BUeHC5MLkNDTJ",
  "key19": "3so2Bwzpuy3SXfh7bz2LEKueSiWCXX9mNe4wKPhz8VfJ9UE5AMGDs15ApmicY9EC6dGBca7wihxm5ohP3acH9yE6",
  "key20": "djzGRRi5eUtCQvAgU3JmkRMqkLKJ4CQAN124v8ganABuqvEiLH7K1grN8CKkT99JpA3gKn9Ukno5x8AkLFg7cW4",
  "key21": "4u9D3wXLjhcDHcq4cXMsTTsLk7kUkZJLg9LeubiWr6P5wT8TiaYqMGe3XCm8e4kD1hxxmGMZnDQsKYB2oUx1rLH5",
  "key22": "3qY3S9BLsY5trXxJoPqwKpJbDLBbmpr5te515dVG2APWrm3GpB78fc2STjRaNbmstEHmpY3k3FbHq9R8jTrFQcRU",
  "key23": "4kdgvK56pZzZLQEVwf53kPaeEgoV57HchLtNgdJsihthR9D9kNR3aJiGh26gRoRzntNDLsQDPgo26kBZ81TbxybD",
  "key24": "2Fead6MHunFdRzqGxTkjHeVnahELPJ1g5UrXd5WwUtcMN38H61U6uHrkb8w5kyCkfZR171kk9dkUzLxQD2efv4rc",
  "key25": "3gmAe1g6YvfHGT5pQZgrQpg6BSew2wtCGmZhH7xaDt3soxkko86h6JZpk62MZhCD3DyBrS42KbrFZuEdMPLsa5J8",
  "key26": "4Apm6tUAZPQNHASGDSkKqAYK3zigu9xUuNwuxHnAfkMKWhaEAcfjGqsNncUCWtW7ckMiX7sYd3mX8c2YRCyNYuF6",
  "key27": "3tcwZBJVQUQShGuHCxD7AVSZ1CGKR6HEKcg8LzatEQsBpou3J4wqH4mTPkhb8gDg7egGgNA4ngsvo98HAb8FvU5L",
  "key28": "3ZiDtcDHyHabPTK3V7sDUW6XPoJyviuDbD5fU3aBR1gLBFoYM6kMH5DXXWV4fUoMPzig3fHv4xd5euqKDJtUmFCn",
  "key29": "4thJVzcvgEqKHBwiqebjcKfD8FUeUF6HBQbz7dN65E3HZA1XLeDrSsvTwEgXh4kj2Tn2WTascMUd4hpHmbx9CLo3",
  "key30": "2ZVpBx57BptCFMFxuaUf28onDUgA1dbs4zTfNviGPDT95SLPz6WFASeZqZeQHyDYjY9HK1Y5FFoawoW6yFJv4qar",
  "key31": "2KxCobJvxMx52T1iXNzbsuBa1dkD4FNiSeqypjQepZXcNDZo12Bpy8ZYfVbdEiCvZT6LEBonPaBo7CeSCPYaq8Ke",
  "key32": "2Ku1zRdjCMHRhRk3aVXW3t8mTvVToE6cVpEuS32TP8o66gjkiQub35vhdPgrxxWcEU1E1NgiooP9hQhM2TeTuLuw",
  "key33": "J3WyDmwcnscFzUd8qbwh5jZo8Qgsf7xHK4mqvCDnTkBFumzhqedw4akYLHJbGdBPyb3xf8cZRiqTrU79VSvgrJN",
  "key34": "2hyYFy2mpLx9exyX2RS1bkoFobUZczb1CBMu9Xi3S9CR8qhPHuMuVGeMrSJLnWgzH4zwxXjjDAHDwCponRQbFTJa",
  "key35": "a22V2SxDzTkj7c5ajVrS679vi3LGj5z9t3zFpfzzgSJHHhHrsPiVBKMNDPizgbodURoforaRQUwuFoe4nPHXb5o",
  "key36": "2HmAx3gTgqdcwZhfnRCHqJpogdd59Xh8pjngR16ZRSY3fejjK6PZDyNjLuXn3e2LTkYUDa3XhCRwdfEJzHdR3E2S",
  "key37": "2KxDbmCGTN4kuLs9Y3vLGA3rYANVmz6fBVzEYSKNXLBrWqTm76efqiunbygawqnPGsVnnwRWHvTTACrESNzhUcq6",
  "key38": "2anGkj335e3HrrtZxh3MnK6xnSFvifa4V3byGLxdPojpn4AExCCYn7qqNFLVeeKrqZ6c14ZV2nFYpEW2H3U1ephA",
  "key39": "2i5pJ7KupGvazX9pnrhzHhrjnBKFuLUW2zKUsQkjpSbKRwuc1ErUNDs9u9EEdQPiaPGpoeZqpYzZgX3tfcV1RGXr",
  "key40": "2kr6sL6f5xmqPmUxfp2WZPLKicQ8YSL5mDrdZUEEJhQ38WdMfBEdinRqjgJE42Lbjb1b1ZaPX7XsRyA4eGYkvept",
  "key41": "hZurbsT1T1ZJVp1MxLNhmJq1ivtKfCXdFbQdbzymZt44dZfBQr2FUuZ7Xri9VtQmbF117jeYtYt9wbr882zSWWF",
  "key42": "T5887mUZiybPu4HwfftxHkkw5JH7mzPmp7tAKPViYCmfLyfqKDUoM9S32arYws3nDAbjTUWgZfBxfwQedxZs9KB",
  "key43": "3ibsPhz428U9W6sp69xg6fq7cCv4bbMDrenhdjsF2HzWHXbvZtAvjM1KBv1eGKnXcJcFB9pKTQdYYcFL9zPps6mh",
  "key44": "Bfaco7SpM2P2YrszWFa4zYkeGkXDp4jwSBWrBDFDzUdmridiRXqeUxLR21KkiTUMMPhE3U2fTgikviNSCSs733A",
  "key45": "41T795zy7Ra4dhgAXeugGhBkBYcGfn6WjrvoMqcDMi46EivNXCzSVHJ53E12keR1xUCjYyqohxbG621c71pA2fuD"
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
