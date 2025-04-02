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
    "TgvZXnYhDKpSuvbEGXngyWBSvyPHPoe8Ee5xu9RLLq7bz1uqx2z4J5MYhSz8TrLtPatpCFvfz63kBCjVwRUZW7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ffE56WZ4btdZij5ncLkuRVha1Ub2umJDhQqtmXra6aDLnstHFxnwndFy1sZtQS8Zc7rq1oUwMq2HSejcvFao1X",
  "key1": "31mMYkE8U59CH7KC98N46yodvP9yp3928brYC1FRkq83Wdn9MARsAhuFkURfLQTFoqQHcWmXgaMZ6S8Em3QxfYtm",
  "key2": "2BktNECHr4qDQgottbimKb8AcyXySsY8NF1ACK7GtsrUVP1hNqbNiKEJArUw4AnD7o6vcipdgAFLjfKECQ8SxEx9",
  "key3": "4QSECFLqQrDSALYsNNfGUHwWSXPXSLmW6ECYZBALjMbTWpfWr7VsTXh2ePPpgfffpSzf6fzVtumj35jdutoiTuQi",
  "key4": "2h1EmuTEGHxvGV18c8wkn6wFCSez4b8mUexbcuN8vz3tL5P7ZbtkEYcQkYrf7TDk8FNVyKNQucQxeaKR5kT7K14x",
  "key5": "5R13E4xUPsZddvLb5xUmWtJ2K5HGndEJZrhTVYYmKtKeM8KXA1D5zqwqj2rgi9dbv41bU7XgpfUvaTTnCC4sPBRo",
  "key6": "5ALYzE7oXrkpud3cv7Sr5PZceqfXzAp64iZjzSzNK9dHy1vnZhfca5aMGhWnBL8ySVGeT56PrpMxaJQhS33Xxbf1",
  "key7": "54AYvXGekg3FY33SkMAHTTPNRZXywqft9sh5CEzLU1LT19SrqSroNWRMcbpHm8PnMmdr6mqQu6Vzyp1oGURJsC4g",
  "key8": "3uw4RSjfYUXK3rZw1ZQvovwEcKUaBDpbQvYAK4Jp81VfSAdcjMAqnDRc1aRu517ArCht6y9de3CUmRzniK77b6WD",
  "key9": "4gA1LVmJCaKzoMQEEMXAWQh6hairDF1Mjb6dx2wUMpC1nXs3uNsokApmozGRofDvE2PmiUU4zmL8r2wFvAjETp7v",
  "key10": "3np6rc6fJDH5GQCRZEhjrDF2y8xAPz4XqwRsYQieCF6m83QS9MPdk6yQwZzc9dxEe35hHzUJVDvDBUSd5PMt7iso",
  "key11": "62XXjTSvCzFtos7nLxa4vHrdZeaQLXshaYUGNqEZCdW7J11js3M7UXTHozPiyicyPCu5trfQ9dyupJCkCfNaU5hX",
  "key12": "4FCyKTKPY2YFAEuXh8dR3v93w9uZ85P1Kh1GfaaPPHXb6xKoLEcbRZULQyC6ZYNqr9miCZzSj35XyAvKqoJvTL85",
  "key13": "5LDhiZtrwHU6rSRDf2EtfAAVAiB6iajXq3ZVr1LZHK81Cv1gyMwhtMm5CaMRRD2JSbnWzqRvfY7N6GFxbnSrqhpM",
  "key14": "3jxpbPoJTKabdAp5Vvn2derArPPk2ud2nr11Ae4UdAkn7hLgWgZvfm4894m6XWU7esd2hy2EcneDZYwvJAJgMijh",
  "key15": "qtg8Z1S8vZP8DM3kHqKguUbXN4HvyFdYpst83ZJkb4jAfWdB78NcEaayafEZn1DsrYUPAvuNAPkCkSF4Ey3ydJr",
  "key16": "3rQQy4XPxudZgp1U5W1VRssBwbKGTQh4ZdB6VyRTDkSHFTVG6FWUencs375zHhyLBiZTSuFmsZCUKe4dAPDoqJYU",
  "key17": "CrkUrWAAm4zhzMYVCx4NmE5gb5DgNGKJACygLvu9EZS4Dim4VnuCywtoj4F83Q7ZQRJfG24EcAhL2Y7h8dXsyaP",
  "key18": "5mNbecipSkfnAoaY1hZ4KcAEoZJ9mEMsXEWjVnjF4tC3WtT8Z1XD5euavrp1ZuiRw1R9KPobLA7CaRnEwgqmZcr",
  "key19": "T4GcJCEp5Bv1ZN9B69opS9sHvCQdHXZNMHtDn7kWxB5wfkZYBVRo8oQsZ6pzqDhyVwE2Ux9K6L68sC6ZiL2QfNJ",
  "key20": "bHVLezJA6jsvLv6yF66Wz7VJ5GajiuhareRPmWExTMfxNjfPQKQ766ZrsGiM2LfszyafN5Ha5sYbN9HSsLZax9h",
  "key21": "KC8mPWrGVsDYEhcvBRtkMHbukvvYpkv1MtQvxHhwfXfhdArGs3uSGx9rhCpVwW4i4WxsEqsUQqJznSy7tQUQEKm",
  "key22": "5JNr9bScqM2MPPeSrBXN5LN9mz2uXvrvu2vbBx72Sq8Qg7HcBwjg53ydZVSgdTtri2bAG3QuoY3ocjranUEafDv7",
  "key23": "5zV1Jxy4vMV9ZPUzy3UpCDCNNx1isdSb95joxDXhrL1BuW8W3rWZuJdwkAzHEB9oA4uLX97pNg2MoCrRqFXYrnzQ",
  "key24": "59xXiupcpxYwyXRvjkRbHnZrgjXEMwg4g3GevJfyncbL4qXESfWjCEqh8TJpNJNJuKAotgcM6hHfnnNpBFjkkWvh",
  "key25": "5JK7P1k6Cjey3J2FCCbnLGsJC9aBmmXGQ5Phi541NDPb2EHANzgBFowitN8xu9rdnRyUV3JfcJiLFfgi8uKef1vM",
  "key26": "3RVrkwQD6cEaWyvb1sTWUXKrigsMCJQrvdfRVPanyR6KRNXCiZWmSNBm5BEYKaFTT2eEC3kMHiqJGVweKyoKotEw",
  "key27": "2SPdQH3yCH2Wvg8wSq8ECxNzupehAWHvAUFP4ScFYEUJRWSJgQfmNME12C4Dk8Y5poVZerkb1GRRpyfstiGd48XF",
  "key28": "3aMrXEVrFUb4he2gHcUHxX1gx1zAkK2eXRng8QQZ8SFkTaXGJFDFZXPQWn3fzLJzh9Mz4m5EAtc62ARPSsWZhVE",
  "key29": "F6qfAhfLyUXRmnEaBmb7QhCk5ESwR6Cf8fjsMSW51GZA6rbi7nSiFLTgy26Mx2Z6NmF8HTKdUgyNhjs39yjKe92",
  "key30": "4T11mEN6dFcFqAPvuTAY3fEBHTEv3GHVBBeGYZuF4qvxW2nNKcpKhon3zGX4BsLCPnp7hYn1jHZr4xs1bTsHTphi"
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
