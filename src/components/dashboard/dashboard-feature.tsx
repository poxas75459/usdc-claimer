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
    "3c2cxLaefB16XGe8CESh323mLkbv9Me7byJrbhjwZ3YbvE5k9Pm6S6EGtodQk63F3YJuDpxr6DAzVnyGgrNXS6C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qtpk82phPRE1nzS9v6dCWgEc4ZV1AHhTCdZCBABgFUJKVeEGpqHvRWGt8Bs8oU8tF1SczUdKof6e4TWgwobAXR7",
  "key1": "2Hby3aZctJT5qsBnVgkyM2zXeN91fPrZyVcNb1wGvSo8GssP4Gvgfx8ksPDQtafxFk94rKqBoScCmswQiwBqzLCX",
  "key2": "3WXEkVbAfHSKnNSim27cr7URF76d7RGfmqcr5i6hFg1ncySKwsWt7edbeUCzjon9vmxJHsnjhtpirXqJ34Ym8tLv",
  "key3": "5Q6wnRuGQ5sZmmWJNE9cnjEVapkK9uzvoXo5j7tgtTQprEgEF3YVsxZyvPLqox2e3CscBqrxxtbiNqgHSTdWr1KQ",
  "key4": "63xC6dvCJ5ypwHxgRMUuEDJu9judUDHs68mm4jsLgQdB6S6fF9SkdW7qeyVfGRiuJNfcaW1M6hiteNVzrJeZiiwt",
  "key5": "5yNcsKfAhcYL5Qc47RugZhTQZbNQCUddH7EYxgzMDBqhAyqXmucdWZvaWshQeFM7gjU2VJyjLJe2mDWMrKHxScsn",
  "key6": "3vjJsxZ5R976EXSHU2JbVhbaESEgEieMzbKYRX2GF6mfSQsGFvAsq8xMo3y8Kub3aGoH792LTPYAdaK1vUUzn4LX",
  "key7": "5r6aFy98cNwXX31k173L24ifgtjKTPMPNX985MFxHWqcCbT2VXQAx2XPAgkfsn3DWjTkLXRXW8WJCt2KUeX3SNox",
  "key8": "3SBU5d2ijzBQuuCyqT86g1EABgt2bebCfks3j75wRhNVKTB2RC4ZyxCTGxNJp3C1wcpYYhQRXkTAb4SjXu9vgB4t",
  "key9": "3psfbsVJcC4JH5o3NrDJApAKs118xnY2EuNjAxaKBFtUzQ4KgAY2PNKPs4c6mghReSQ1BSFuK3ELEQYt3BHrxUdP",
  "key10": "N8YLjTN2GxnNzMNktYrepSGDLLqEhBLetTCJJZaamEPHGbKVzKzeBVsLS51dPDG4CYceUxapE48hJUiZeBkE956",
  "key11": "3L4UQYUe58gwv4VXdcJFzQZ1RYZkPFYp7EPRsnbtPmYYQaHrNGxLGgjX84WdMULR9Kz4prNwTxEwFJkRdmQYB8zF",
  "key12": "46SpL3efXFzauS1vyPqDt5uMpnfVtAYqWYfETTCehXMxti3JvkGfdXKi5t1kNa5XwQSRszAr9hvASpapvF4xmqLA",
  "key13": "57HLZaM5aabRzrs2DAD5nRRewCLQNf4HNm3cSgkSnj39onVZgrBfi5XYp1ECu5sTQNBJBy3zLokLaAKZiq86zQYW",
  "key14": "5sGEpAhH7Jjws6kJjnAEu6XLB1XYn9fNiA69mRSe9m7W6inDUM5xfHVTpox9q6VxEE2wKCJGczoZhz4bexUypBfq",
  "key15": "SogvqYTRWr9AkGBhEAmuMN58RvDJAT8hpZRfxQrrFDzWNpGuDCWzKCSowAyVvoL53g4yNQooeaf56zjX2zvJATm",
  "key16": "3JrRGGxSQynyETDHRDFiqprVCiSTZYsACnm6Fqfd4Emom3p4Rh69pq16YDJqkgm3rDbNsKFEEn2Mnv4UUj7CfrmN",
  "key17": "2a3fSbANvCvPHHjWxj9UYyzZqTnKvm9xPdMHz7nXqnR29K7aE6ZthCLgDKJeuyRNVei3wiJce6nYzimeYCPDMG1i",
  "key18": "pHb8hutyXeJfTcvFTQ5LhUPo1RuXKb6pMpbyGELEKTziEkHirnUnFKWybZEwoHgtZjUhGV6acWVg22fLCXckkHz",
  "key19": "UX7eQk6Xfgu7dpKngWPsAZpgxzByaYwbB1HyC6HyuhbEMgAWmQ8dvviGrfowJc8bGDuttYzbBBDf7DwYAyN322n",
  "key20": "4Mb1XevQVjt37MAEoCdy13ZmwzVna5zYJZhXpFBG6tDvE4w4qfPK8PbfbF6MPGKtcoK4C5HAxA6f1s31Ft8TcK1m",
  "key21": "558fZByRnu5EarEvwh6uQ9oKLvAxZJ8weyEkNqKsR6Ty6sdvSAvvFcaer8fzhjx7BxJWe3VJhJAJMrBtuVHfYcW6",
  "key22": "35dvPUdh4ZgHw4JU7mPLVepEaMou7WvHoVroe4mGhAPkfex6CUoszWb1FHqfims7wURWqrnjKDsvKgZjHoJVvvnB",
  "key23": "4FU1AawESJgS7TwGMDCkEMaG23MNMRiMgHDe16L78CBQCPenvHjgN4kdruyxZexX1piXc27ZGToX63Kgz11ofMKM",
  "key24": "3zB9p8BzhNrfUCns4nfS1BRa5D5skabShcpEbTZMCANooVu4WbpJaBHLpEyWj38Vn9D6D1rBdJkSGvAYpGaPXLnp",
  "key25": "5jQuUjdxDFpUdwdY2wnr2ccuXdqcN2sDft2Pirztc88Wd853jRnR71itDVV5fQAKSSab5N2zksmiP3TwBBHLb4bk",
  "key26": "4C69NNyAapttUtxQdXLnZv6pys96DAPo5DqxvWRuu6qA9MvxefEQScy7muNDDfvSBeqe4uWtsWPyTqwn6eTJ9PB4",
  "key27": "utfpv82KZPZEr2h9krSa8KdufonSX779Qrh9FAz66WWa9oHgKCbk1MgXjC7xevxLE2d7nfPGWqaQWXxJi6hyqse",
  "key28": "5ZLZJVedDKaT1h8TKu6Zdv3gZfpEsxqfBwEVeynxNxpFwRJsDfCggSR9bo3vKpdg8yuLAiKmmUQqtHGYX1y7yJnk",
  "key29": "46pKiqaqfJF15CeVzoZys6Db3ZS2yzVEUwYEPxdJCKEy2QPUE3zMQAZSVrVk6pH9PRZmNHuY3e7pcnMPW3KBu8Xy",
  "key30": "5LLqDkqCRjCsEUm4i6Q2LpmiD7n8ACrjWcEEJqbpWB4jnT8pMDpRgqkQiBFnYi3MENDPADToyJBsd4nrwUdQuJGg",
  "key31": "Ah6JV5S2HPZQo1mU1jVDsMc4eAgjn4hFmCVNKdH1Z3HYCwiwfHeM4hcKwasepFbYLZbgn3MUvfTcRWZ9wbirHdQ",
  "key32": "21vMzUYe8hKf8K7jbVRVyo4x1md4HDczahnrxsHLYRLUksVWhfPeaike1J2X52hD9oS3SUZFC3kZmYCfnews1x6F",
  "key33": "5KawaMzn12882amU7HQKbmPhSFEDu2QKgJBSvQMjeuSJzF5UZUVDUTmuZ1QnQy6DfWmtZfBhtjU1oJe9AZuQDcxw"
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
