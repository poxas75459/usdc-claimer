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
    "2qHRAhUsvxd2nqoFGuVDibGKgrf6op7boyBZGQiSkR6Fyg7fixf9bi4mCDs3eFCkUQRMJ3JsiRmuwLj7wGVvT6gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xB6pi5nqeH3BDyWgy35AhUwkJKyn5QgNLxeCLgF2FRxtudg4iAhRD3CVNNaSVHp8QDa1gmBk8AMobKC427HnXq7",
  "key1": "5mWZw6mc4zYDhjH8WdfwqUbgYngaN6qRGU1zapsSnJXkTKyuTXz87QU1TVyJEZsHc58hgkKXjzr6DB3hSzEtBWRF",
  "key2": "369byTi9KJHoLxV79BvTcD87w9bUaqgG7vsxxKFVm31BErnzhcH3q3ohigJnj6chrxmYd4CibfYB1du6YNm8B5Gy",
  "key3": "4jy5x6szBBUrb7D3MeVDXWZAZRHUGbNsN8ziy3KPSsQ5GcczsuLic13MAJpkuSNhGiZ75CLvcBqcyUu2vv7pfBsf",
  "key4": "b2L3d4N1KQnamw3T2EPre8MZhzymg7YN2KzKDf7HPkaLDZhFbvrbM8Yg2LjnA2ooLwjBFnoZAEMwaRazQ8tdg1n",
  "key5": "2XsYKsZWeV39j3xKjdaURrfMdfnPWPwZBdh3tGFVNP3egFCS54GLjuXQNZMXuVYsCFyYaM1SxZp7TypTVsSrhs4o",
  "key6": "E7MSTD6d2NoFuiJFurhH75ZvmPhZ7v8kbxTbRrP2CqYV5E1jYkedwtcwCFhVd1pAH6sdh7i9R3Xew1i5Nu1mzEa",
  "key7": "6znykskpwUPJxyjGYy6agZDkVTbJHCPGotW6CZ42Hv7YKKWEGU7AQw5LHJBW9DdgsShu2bq6fABsCp2JU3Ga8SP",
  "key8": "2XSMv6FgacLRjiiw1ELgh5DSAb8mJdkWVxKZjBGoaoM2viuPFqYAGzadWg4R6Wy9HFZZXNrLN7HafvkpRmXegzcS",
  "key9": "2XcKrgGaEieSgGmwgmS7tGA7mBTCix4JggdjAzK1rPsB1e7cN5458A4fNyb6BLbTY3cmJEKdQbzhZWEe2VX443Ep",
  "key10": "2eoVNvyx9uCcSXN5nJ3iR9PnMSxwTntQvMjH58oDSRuTBnZM2vxbFrGSBA1dxUw2sQMVTk4bQez5jHpDiMirC9Cn",
  "key11": "djrqHaGxaHDteuUqKYidMZHwa59emp4RrFGPBv9avMSyiiHt7cgMTXMSRNe9tECFdRcAf1bzAbZds28k4Ei1a6t",
  "key12": "2XBtjXu1UGrMWb5xjNZfKtPz7PfbbRsnZJZVrfjc1ZSMUUUrpxyaYBkJ1WADBcb5QeRiKDtCd5CryRQWrFNwFkZ",
  "key13": "5fYYj5FLZZZv9cw8YDyLBqfCEL2MpoD3AzuehoMK8Jq87cKhV5UWEvuhHJVSKigbpSfVmVSU4FYAF6QNjT1ooPD2",
  "key14": "3Up19QhdjuBKoyHfwYJHLHSaPu3oCVJrTE4oNpPryGEM7kEDFbF8nm6EiLRg5qL8UjyLgC3BiEtCWHemMf6LUxTJ",
  "key15": "5VCXeiYc4xDJVRjPWoe1Gvbc9njjxUqsuDGqscRPa4tnW5CEtW7YhktzfKsLTM4QF5tmBfRC1irDCMWVWS7tsKzU",
  "key16": "2phPCxNA9J6TUJMv7a1pNoiDeZ2wtqF3XaZnPfuq2NqJb95GCuJt9kSp8mZqoz2M92efdjZqHbF8a2ZfHq3DTMas",
  "key17": "3UUECNDHnYmi7HdtyCBWD35t64QWSbK7Q8phBa1aqjxVdUVNSriYCiBm8HZd1foXQp9WTdKjissLiPwjE55GcTrd",
  "key18": "G2gPY1iXjKGBmEPxdqQLttEAgmMTW5PuVmB5TpNApV5GV5fvH2csyQRxW3oAvK3oEAnhGRn4hbP1CZDQpgF71fD",
  "key19": "24NqWLCMSszNCDYTcFVEJDB2itxJf4FJ5NJQoB8NbQ41bqdyiMutaqtLDiofCi8v3J1R3CUu3yGTeT7hcnjAMDWJ",
  "key20": "56xjR2TaG1nMgH6dVKoojBRKmSv289C2JjNEsm8hy8sQ12QPa2uNc4gRwm4KKH5pMsTpQ73D9taXXjPAUq1u1sS2",
  "key21": "51ciRi3KxCxK1hJ7PedGNPJyC5UzpbvdH5MnRY5Md681XVFadEZKSj8ZVMVeGR3r5T4yN9C4mQ7gQuh3zjKMBK5t",
  "key22": "45mB1fDsG1XRoc6AUa98duAmAL4ivYs5EYP3txXkawu9Pn7oULbsBz2iU5sUHCQqoBJGUAqjq3v8BUh1DZVdPm6J",
  "key23": "4zxX7sqZn3DWurk4ydgP2cEKx6Nm9JokTHzLdSRe7hjhUbzpQV9c75T8RJHDGCqmV2GweRGVZAkvUTrdWSgcy1w9",
  "key24": "4q7oBD6VRKBjpxhT6Kme5BJxUpsgXi63GfZ4bqiKdNj3JiTCXbzxYB67hN9ikbZvgVsKwjpAXkybboXA8hSTX7Mi",
  "key25": "4rr7EhXcg8fjJkrNA1VycrrFpB351R3NxXkwvNPWdW7vcdeHfeMg8pgnyzESW1M39JwwjgetHe5CS53q4DWVXDFc",
  "key26": "49c2F5gBkgV9GkqCftHsokHvQvAVPaoFcfx8KdmVL6tG6SjYgKJu9j68ufARMuN52ZwU6YUBYEYedtZmS5TZQY37",
  "key27": "2F1hYf3yC3WoNLKdo3av5SezeAdstRr5Woq86hcSp8MpoMYbFd6KXoeijuGMrPwkpNnag6Q5vH9e8PJbG8ruSQeN",
  "key28": "QiXiCQXhwXpdR56pDqVoPrTp21ajvp9Eei5txcZfBmdmYP9kN2SPJ5ALZms9HRuna4kMKpBPswcgJoKCbCTMB7q",
  "key29": "28gx2SQV4Z1tFyi14MyoVmn98tKeu4PQANGayoV1gmqgQX8cxLgshm5gF78t2EBSGKMszyjZ7NfsxXu1XveCyth1",
  "key30": "55iKRF7jSkyDHGV8qZpjfPPnuFMeHekQQH8AMDR8hzoVAoRpK37cFj3giA4FqNrCT45njx7T3V53AYEPNzLAkC5x",
  "key31": "ARCEEV2ZVf4tktsXd3EL5s86hSW4U2M2aGEYxi1HrQvnJMxS4ZAkvYaHnDd1AVT4a2WAg5DmxKJM8rRALiRBm5d",
  "key32": "5Y3frKugimzjb141Tyakt6pyd1588Gy7Zzy7RajXkCKHgGW4uMD8vzJ6iGEN2tZzuzffszyMzT2pc9PE1W1bTUwD",
  "key33": "3oXAvrn5aYuk4QVc9Es1hCp4bhKArBCDhfSu4dBGkMa1MrG4LhXRPZYQcd1C3yfToem6cqQW8cc55Ep18Rn9ViUX",
  "key34": "524nSMp1umRzT6Xcc4s9JrDqMNUPgP1WPpdLnKzy5r8nDazLFWM5WoxyhdwGiQVSwzgM8Buzihb69vwZ132yXJc7",
  "key35": "52u8yPEG1vfFKPH99zJBFpoQ4c5xTfmCv1v4qv62ZUcFnzhzQ7TuYaq4CWmbXTgobEgJVgxH9Z5kK85rCVrYuMzJ"
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
