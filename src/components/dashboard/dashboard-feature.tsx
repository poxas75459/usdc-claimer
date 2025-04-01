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
    "57EiBVoUtq7Q4Ec1234C1yueVwVoYUK1wE26rRkmbQ3wYy3m82BtTqmAzPiu55xD1oT9vkh2arJ7Bg3mD7b7C3aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pe7ijNsDjusWuZ7s4yMGbXKXGmY9uj9jvuS3MaKyAsYPkaiEM3fdcroBMZF7okmgVmsFY3kCe1ivn8GXFRa3ifb",
  "key1": "2XcP8pUWyHGCLTnYu93iiMpGeP2HGAQ48gTpcM5QL1Kg54roJWBzS5A1L4zYvWnqxobnYqA3yLy2grVsQW6vsGET",
  "key2": "5ZafJBH4TxYHatTPYFCLPRnNuYyi4GeLJnT5aLNdm55Cdnu7TzdmhCt92kkuTZYQUgwCK8z3WwbutJrcg1zcYoHJ",
  "key3": "5WVMRba9BnKau9qBFBX6UWN1Dm3mcYf3oh1uveKtazRxTkcH9wCsQPsDe6Z9MwTkwHBkchYtBteQYQqjNDi8Jtc6",
  "key4": "628Lu3hqqPud94BmRopxy56LiKi7g4FGxsjcRWUb47BTz5mT3kLBctznPWkuS7eXLrmFqvgeTJz3GWY7zPi3Aemu",
  "key5": "nGYbaNRgaaSf49jrocsocRQfBeFNSwgq4BSybudML3SNbkZpa51UUNaUazYCk5iKnpqv12F9R1hEUDKUTaCwSdL",
  "key6": "4BWP6Tz782JXbjN8kToXWB5m1ouK93emgMDrFGEkpM4ToKQ4zS9WTyWifujyxfJ52hZXQswUSoPDRstipqCYy9jV",
  "key7": "2X4tDcJqx85Tns1HKPp84wNMVNfwBYRsk768bicnp67RVzxMwCTSUbXmUdP1JmuKNyft5HLZuBggXJbFTGBj2urG",
  "key8": "rgXawGPQYapVnZzZZWs3p1qcAAf7fCKpWiE79BE98FZmBPJSvP6QkQ1RCPHDwcKw8QWhtgraaqJBMYZeg1CFNvg",
  "key9": "4KAtUgea8ucokWhvJ7aeykLKoG1MBMvkkQFvXniaVr3cJjEnzCQdFoxNxsEgJvRrQbF2kLbtv69hVPLsR8fnrH8P",
  "key10": "3qbsrsduGxxuJdWWZGija8mBRAUhcSyzgrHx5JujunNFk3jQPmc7QcxYTGxaQLqozCvZhbAwWvtpySQ5KRnHAhjN",
  "key11": "3RjfZrhY1h9jY9Udra5eqhbVKbmxfppaoRnWzhKNLxD3S3rWF7Nc3XTX3Co8emyn7nPwVTjg4LaJdSV1XavkBKiP",
  "key12": "HyXfKhEBuLHALfd6rrNMsN8Znm9Y9ieaLp76D5MikuEb2rcwCvCLTGD62ufSKdg8ARPyL4ZaMkZTdzrXnJRyN69",
  "key13": "w5ZcjF5YzHrkiJgmV32VwKoH3DzP8RVNZALRHYSB3esgoB4MGT6oNcgMziNNLpSNsvtJ384xC8omUWW5TG5hZcH",
  "key14": "4QmGBV7apVVBNNsqLVZSFuSu74sqq1jkQLXsXasvPZuE9pXg9cF4TPZzjxQ8bWHFwXmNAzhXorpFV7r54BBVgZGo",
  "key15": "5rt58ovtuphMQQQWeNxEcrcBFygeFPDoXQvGQ8qE3iwZTy8vA7wCh26JikjLFTapQ7ScnFha7n5FYhRdVjehEz1C",
  "key16": "4xK8jA8pxfsNUfGUXgGnmGEAifvAFuBjVTjbqJ9eCJ9osbcvJKGqeycJ1MeNUMz7b1yLDy73hDiAmaWkqbp3f2bA",
  "key17": "3nhPh5sR47Dz7XbLDJH2GLzJuXKnk9jT7qMjKzFdGDL5URKKTqB5C7HQnmEyLQX1MuD5o3N51KzH53hb6GoHu2sC",
  "key18": "2q16ApLyV95eLYFmE356boK3GtCbry2Jbi9eeqyQDaTpWVWT6gwqXh4fS1PBkbXLRWHT4Xy6b9SCL46PGWgX8xZX",
  "key19": "3egTacsnZV29vFVqSkJZ1Hg9cHQsKfzmcK3sfwCRnjW6gQ5LPWakVLjTtBJTwKVoam8e9PHjf9p2ZFTCBmZ17wpd",
  "key20": "6235xzVuYN7eSf61wJM1uwWgi36nH3LrfyJ26bhwCbGCPe1HvsqzjdZpLeQrsWCZRLE6wvA133XkPmBQn48AK29b",
  "key21": "2v4eV6pMQTH81qw4meRLSP97B3nmGg7gftEya51NqbqjngVP9S64sKMWYYKd7K79nAG95pqbyT4tWBYMGuwL55vL",
  "key22": "2868yYVNBFMVZNB4LmnF5s9iKxzv3raMKuzZjXkXscXA3b9obBsna22knqLuPMQHut9v32BdnA6kBSkCKQ5Bxpcy",
  "key23": "4tvY93GtvvQ12FGvnmaynhVtXm3jhU1wTGuaq6zPChe43cduXH9Uddx5xJPv9cbBh44PSnw1EDKMFBdYyHsY8ps7",
  "key24": "5ysrSVryupaRq6zuXxitjH29Z8kaBTDwKWNQ7MUu5KSBZVoZiJV6e2FYiVYCg7nWB5BowBPWZKjw83Dfsh13siBj",
  "key25": "3MAtrRbpmvxUncA7W4vfSphwEP9hhZW7CVTzsrXtPZkb2fnosmvzZ88xBWf2feAYyMTdom9dZTfggLCpWzHnGEx9",
  "key26": "63MCEk3SqYdTuGGLE9ER7spw8ckWYQqaFHMjgTmH6647FFnH41sa8KmXRzkU1J2MN72dGZ3eKMoxvztBbKc7CQar",
  "key27": "5ERnwE7QuHHqcZ4Xb4rhs5nnZbPd2AvoBtCHnK6embsAm6uzZLbohUVozqSWgZ1EkeGh8EZ1fcjyiKNHZjoVdbsK",
  "key28": "3CDNB3r3d1L7p6a6r8TXNgvD4XemD1nMUPdxkeNMrLYQcmJzedggBYnYGkCpBtCdk35hzor2azntE76Pogx9tuuA",
  "key29": "4WfZMWUzmiATgrMjPGcz43x2PAymJtZXkCJBayvU2XxEqUdye7iwjQtBm19RoSJngKrZ9PRtVqzPQyHMeqCPddmZ"
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
