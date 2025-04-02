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
    "2dsjry6jTVokMtXWi4meeEn6PiNUNbiRr1kdAM8DjM13hZ8v3MmT1J5pQbhHSYuMRnEtzbejyH8HUMP6LFkxjvWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3F1DWp1do94kSYwwdwncJkjAWpTwQkmqj9Q6boU4aJ4s8yDZjMGv9ZiN9dwEERjNaQoPqhMpp5wg4EqK7kBMV3",
  "key1": "2ndWqbEn1x8nSoTmVnXVYmTZ6U1pgiKz3MqrYxria3V6Aww8ECd4TDPNjpKviZL8A6YVec1Hzt4GyQdpW7KKPqUQ",
  "key2": "jRQho5F9pdX1BRN5S3AEna887PJVeMU6Sw28rKMKdERea7cCnkrUcPmX5UwGuAmtrmP7bY5wrARmgUXZD59juN9",
  "key3": "5Fb5vxiLD2h3RAyY5cpJSCPCdWWbznVy7TLfmLWyhAcKDGWbLEKPCyvnM3hzARhHyeZ79KxFBxZ9EUbVhkGD9SPq",
  "key4": "WK1AEHJ5zpVFa78VXiEmphqieassmd5MXpjCHDfz88FFKeaD8NFJyPEG9ZHhh1ib61qc5hLoB17eVqxkqMc8Hxv",
  "key5": "kW71AUf6jWSYu6s4K5SHS4RBJmhnjEqnpYbtgAj24ot2kcm5XGMHYDxqXAzgSaj6kH4b9SKA3B5N7VDgZHoQf6g",
  "key6": "5qhtdUZ3YBiToLjdpg5dxVxdqjssi5rrno3bunYjdwagpsDRYW6uv8PsAGsy2CC7GPFTQoLDYDvCDQ5vQNVzx1YU",
  "key7": "2CKNXWjJg8HyeggpAt1UAf6qFCHxmPzMMyww6SCEi5zrbCAKRkhDaYFisqfFqyufHgh4HN9PRqnCMV9JvRibAWXX",
  "key8": "5g6DGms3aSD5oTCZ4dgyb2xuyC7fJaL3SFBGAUZn9zdWUM2SgGf5x4fkNzGAXPUgxDPAoPZKgCgSHdY6Ht4iEtm9",
  "key9": "4GLub3wEMY8GK248DTxNjfnTgTiMSdgQ4xhFf8QPRqxExRFuMkQmdTUYE6AwKnGxb5Ds3tedTz8dBHYxTL9f8FMJ",
  "key10": "5BebnD45cjVjkik3gsrrnBTjx3GsHBBQzRXiWFoDBkhC22xN8eSTosazAXSQUXF25j8EDyaBMhnVXLG1w5j33fuj",
  "key11": "5JL2Dcp8DsSE4youi1UmkkAkhC7emUso1y7agRjU3pLtn4DuWZ68XzxC2o1G8mb3oJzUd6pmbaCzkgdnerKb69Wn",
  "key12": "2iTrDAFsMimX5PQTEvkUUfdGwNic9FCZSaahcH9EB64HFuJfpKWK7Sywnx1mYJ2euZNycU116MNeDYecZhPmJf5s",
  "key13": "4fhRYSA9v5ALiEc9LeKnRZZ9nojdWKih5QyYmg6HsavVh6SH4fbhADfmbPi6azW4fZuoC9ykFJG78JFhVc4cE6Ao",
  "key14": "2hBbvtK7k1VtxUcwZsyaAU7kAEL2U5KMkaMEKddp8wqJYJCo3BkwYzGk45Z1Fn3ar2bYgu1KxFNWLjZ7caJfgdCZ",
  "key15": "4y47rUPLVvxXQhyyzGnQfHLrfve65bxXScmcwjQbftkbB4Yez24ZDsJJJnmVZQUDB36yjrbV7jFfaDWsXTVMKnM2",
  "key16": "5MU6fiswSYNzifwbwPzBmAvkmh4iFi7eueT9tyaskAqeKXE4TihbRi4NYX4VJkqjfC8xMNtbPWF3RQP1pdk2xF89",
  "key17": "3TsjBEMZCVoBvDFYCKbrtvfzfffDhyW7Q7k6HFXWfHRdJwm6GaVHuc4M9Pb3sFiReXTqxawTrw28U4cS1WPhKQeg",
  "key18": "grPMBamk6AK25z5mDJjmN9MGSXtN1rHjEepQied49CJydwvbz6gxBXoAz4pzBWQrjWhU2qwwNCg7FfS3BRbDkFR",
  "key19": "sXzcADGx5BHXiXQr9bAYkeX4np9KAf733h2wcMgp6mTE8bDjgtVTA2i39JxGjQ9GqTCXUfoj8ENvsB6oc7RfKyU",
  "key20": "5N5oiCc77ydrBw9E8LpnvfSg9nvV3M8K8bCxxeDCV4UiViqStopMbHX2xCkJEpNdWnkuznKkopqwjWUcaBVsBoyF",
  "key21": "4bgvd18utYRw9JaLBc1eB53VLDaMcmEMLraBCoRUTANyWvwBfrUHF7STu1sQ5yKB2MrhnV6w7Ryfni1sSWqUTiq4",
  "key22": "44nAbSshCD3wZ5Pu32wnVGjLYrtV1F784XgzwZk3B1aBoqnmHTgfCpij92DTJUbDoHxQUCKLH9XBSKszr4imQNaE",
  "key23": "3h5UJSmbv1FspkuxfTKHdRCcpNnGfpJuWq2KE7E5PS3m5h7TQGGtWVxtaECy5xuV8p3hBRuXJW5uWn4DR8yWKrac",
  "key24": "eNRm67L7XPnBBCsuFb7UNBZ1Tg7HxkSpCTGe69h6smCzJQ61hFcvMDG3fA7XvBXWTveHAKzXGSeEx7RRJDb6RZi",
  "key25": "3mPuGRg651n6PmnDuw4v15Z8ZTdRi9Rk57qxhwRgEb4PQaqSinuzBQuFJzp5Ve6K1KyKuTFTMhqANCMTrmAmTRav",
  "key26": "5hpH8ndxkQkmHsiQry4oV9XEN1kFYmvi2f1WbbrBEoPmiqL9Gxc62oKXR7x2BZXvW1huimHHXqq9SodgEhHPERWK",
  "key27": "3ZtWRyzh1RKeM4yvrCRJai9VmP6ZZDKXHnfqcuM3sVFaQagzsCvUsrSnN4UYYypDkNLw1LSqyTm39FYpwBDE4dP1",
  "key28": "3pqWMc2GVMxCgFygvLjWvnALgfZK5Lr6BfZdC7YsEgXQJJ4iDnbHsrVv6QYByed6yx6zKcjHRmdM5GrtsBDNHXi7",
  "key29": "3JKeCLkXya4UVX95dQZ6bau7Zdd7Yg7uvav8XxLXKhyrsKM9xcx2yotFevQhmB6gvtdBgWUcnFM7U9npYj7ZzHCz",
  "key30": "duWehYCvDyd6BmqBwgcwQBzLogFYDP8nahMtxRznM5PC1mna1TsjCyYfx2awk5hYbVcfz3ph4Ui3jCdGicuYbhD"
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
