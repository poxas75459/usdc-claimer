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
    "4GvnA8Dvyad5XqMJcRZBEtgkHEDzryibHZjDrGe7qaWjiRuFZjfWoQRBG7UZUx11UXSvRQt2nokCsrp8itSdYik8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDxx61aGZbKp1Jn8qAXgumJyqwURxVGfoAmzy1uq32XLq66kwhhscsQnFpizmGnB5a4cGjhJrPpw76jWUNgv6GJ",
  "key1": "2Xz2FYUJKjEa9xgLe39RgfNiGHHU3LFwvC6NrEmPujB1aqWpmoAEoSeNb81hmeNfbLZDB3UfpWL4JDhD1kxm5VNN",
  "key2": "2oVh4dpgSq3J2XX1CwEKcykUM2k8KUq7G5FTmo7CtbUv17RBB14WR1wSBFw5sHWtDWxWYovW7jKbfnhXpbpC2qLd",
  "key3": "5nWjq761dP7QQKuHG52h6jja6mo4dy3kiVz2rk7uaXuTs8Kw4WswkjdddwZahxMrTWn5esudXtbrPGDGsZQFASVQ",
  "key4": "5gHiceVtcTg8dZGJEEF6p5aT9XW9BdMZFm9XJuxyize2NiooMNjXSnebwjkDz5Uiy5dsaYFiT5ZpXY7BG6TrCY7b",
  "key5": "33K8LzuPfZA4o9EmTuLvA6JZ9HfRPaj5tBN6CWG7Zu8MJarFFLXuXzE7GSpxiqXCBFrL7XPejFtLs2vhr2hRCjT",
  "key6": "3xxtnUqmNUELFFpGpwB9XSTRHZhDJduzFcVLABrtne5aJdXCdaozUeBJr7G5yQ3FSdNs82NRh75sXdJzcmpVsLi7",
  "key7": "jzLdmLNnpuZxpfPboxGruwhryHw26rDsdTPyambwUVaeLGNTUyNL6wVJYt2rNQWUET91hAwGufgpv8SiwfkT5dk",
  "key8": "26PFdB9mdhtYFYQmG1qmKaqT318urLh6acE5Nyo3LyFDB8ZwDk9t5z2qfbtF18KsFgovdoi91KwS5shrnXaiFAhS",
  "key9": "6wNtTpy5WZACQaHexNFaWdkANApVhwbZpKQNTnWVVYDgyjQU5yjD8p3fFpYVR4TbPawuYebfKkqcXUi96wuDeo5",
  "key10": "2g9XkS21i4NGZtHzRApN9eTQrVSj1Mgtz7HkhPKB8wRTD616ytwf5x3NzkkFJmks6ZPUofDnVh4LQeJ276QZ2NhQ",
  "key11": "2uXnP2eNbzdM9WrhLmt4LAEMJqPTk38D3iLchr5zkRMuX4TMFho8itndwSaR195XodpWbNMaESifhZeRKiRQByHT",
  "key12": "35meB9Yk9EQZwUymPjmmhqpBdd7dUhmNodJer5rTsCGBmvNVQRMDAcdEobpbCv1oqP4cfajAKRjCFgPTMrFmV7Su",
  "key13": "3gbnuaMPpGxYiRmsWcQ1s3NJ2RQH4eEVnyDbkWEzBA5Jj44C8Aof4ckzgnj8vtXMEqu6s9ePATarhW8VLp46JaS8",
  "key14": "S3ChuxCSjjatQV9kYfG64BXXU7kNrQsTC4B9jhQWzVgwCXLk3TXjw84VDFNnyYPRLbx2XdiPsGzdjfNSyeBnYDb",
  "key15": "3kyoqei2Fe3Mwiutb3zQP3VYCAejKAUUGW9q7qcKSNZaj1wZUfePpD3dD7VUzbwcCsQKp3f5Q47578F13NixsV6n",
  "key16": "35xPy8zeuXtuxtzwGRcAyCgdYx1iajPZcswQbi84YX4gpxJeqnQb22NV8AghH28FhJXJkSUBBE55DJu7CQgD7PvC",
  "key17": "466sDW8N17UbWisNkqSxDdCdrRHeh8vhTe6U4MEbmZAvkNrjNmGe1HgSTganoTmdHhnnJeJdaoXBfnRECoFXWxHZ",
  "key18": "444JWwAkGt5NxaCJatcabghs9hQ4zvPJ7ooaVsLTwiqExsJKUPtWxg6S2TQEYUKbBBvoUQPNvGZvLEwYYcMWyM7L",
  "key19": "2tX62bUkc2eM3Gp7Wq9gnHyHkFhyPEinmPYguN4cnejS4is1RN8bSo4y8oYvpdQibRgkms2rLmzx7soV8zn2UhwZ",
  "key20": "43MSixhkuQU5qfkeTFHVLoHkEz4zvDdwbbVpZhpwop7NDBkQJHDH9dnbeNeYqoKVxjK5MHdSJa8tBzDdaFFANqPC",
  "key21": "3PsFBev9AkXXwRaWFgjLcgDqhHVYcx8BCQJKNsuxDxQEhH5ALeo52YT6hWhN9iAjKUC5DRtqJrhomWDofo8vx7ek",
  "key22": "3ZKYFnsV1Ue4vPtu1yog5kd5LssYTkaTgzTERCKYMwUHDtjEkcLpYpnz24rRpZtYiaPoaUqthW19wjH5Bn15MAE7",
  "key23": "5tcdJvgT5nvmoCyfwMnuFGnbnDQBXcWfhQFfWsQw1QkohLFr5kgTFWTyVNTUDxWL1KffNy5jJXpjDNEAA4myoPqD",
  "key24": "5xuFk5u2uYFwcQSy9CqCThNughQVaVRbnGx6GBm1GrKVy4VSgCCbA6HEvhUqUa48TZyDfwNnvogkLtNDTaD4JSM2"
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
