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
    "Wn6FbRDfmKsYJ1m4LcJVqdzR4oute7dKeBgcR7d6K1kq3zbnoK5QHPq2FpkMDcdCWtq8nk1NEdCeoT6pseDHbEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpYAx91xtAQPou3Z8jFh42kdoZGWZJbUSWmqBYWu7MmJrSwKzrBWLvfgpbRmmnAVJHUGNAdKmskPRStyV9daFkZ",
  "key1": "67RCVXPpdxS97CyRWB73h31Z6oTdZsxhT2xHY8RLBtEiT9iZECX4tPL4VnP6xVSCmvT15hmvzbBBMbLMPQbxaob4",
  "key2": "4hsLrdrCN7XCgae1aeVF3V9fcmuirJP2eLwGTeH8evRneuY4U5LCdKZiRWuXUbdiC583zXf7p93vbUs8UMsG7LAm",
  "key3": "38CymtAu8yvqkwjwcryA17S9bJcfo7kM3wzYoszxkjzShXLLs8PDHguT7d3uyCVQ1PohG1hoyTRDjLdX5EtvxmMq",
  "key4": "2btYeKpKWSpTngih5nzCSqhqFWSwFoQBpAfhiZC1AXmgmcs5HDbm6pV8wUsG45uGEL1f3UjwLBYymCfMjNbftXL1",
  "key5": "tj7kcWtL8rKVMJDo8K9sFZzJUmcrGyKaAJs7W5TaKS5Bq62qHVobKjJykApAz7EMs2n5N5sqNGMRqEWbcPq7GVe",
  "key6": "2WWztW7d1tBfAtbPABUEdjChmSiLSk5knPSK43iy84XaT12rSUVSKeSgHfGrzQ4sKFKT7SdpJCpEiPfHpjQbaL2R",
  "key7": "3ruDbCpLnn96sptJzZ3ARWJvZiYGhcGMGPqwDbxPkX7RH3FZedsiTQEFJXLMXQHPeSVXHzEUjRWb9XwANMwmRSp5",
  "key8": "rV6VWhHAdfcbrinMQKk3HPmbpx87k72xMJ9mjuXvJCURwvEAevMASFvohieLUDau5EZjAhTaMqrYFfekfN3MSZ5",
  "key9": "4rn5vyE1tuczHKzGDAC2oVPJuAuMetMc37HnmenSAU1hnkD4PYJQ4mPjG4k4vPv9DRkQbrNeQUHZ9ehTWTD9LXgY",
  "key10": "5zs54RGTcUfXbEKADgorEaRXoJGTZwKNyisSjzZK3xgx1G6Hp3AT7qzjDFDkkkCUjAWbsTwjMzCUAj8TdVKnjFhm",
  "key11": "4Gd6s6N88fy9vAJCLMbA1dVkvk13qt6khFVBg3h8xeNLYQdKNFnVYGws6Gqj7APb7v3vykrmvXs11rtwn7Xp2oGo",
  "key12": "2AmNqGg75Z4WHLD5RQUwRyVbANsWRHW4DgUSxBVmKJmu1ajjyfHaCCv3uju9C96geR17eQjhN8jcFU122EXUFG47",
  "key13": "5GUarKspivC7Mmk6BEjif1v8tYNYshM2uPAA9kxaajYx3nSzYb9ABaCvahWQsAqbUvUp2zHXUk6o22ENWTru9vrE",
  "key14": "e6moyUpzB8nUyukLUy8tandQUuyMMV134Uwk3mbug2KG3b7aPAubsLnWzpG2qGsTWNrAvcnYQjVdH5ExqBXmZGu",
  "key15": "2qxuHoD7FTo1vR3oc4EUEJZMdUXJtgj1BQ1VF19namHFkQ7se8w1F8fDV66HbofkX2o2Unr9QJZcGHGm6MRybFQp",
  "key16": "5MnVhotK6xZ7fGZvkxxWxf5QuBYeXp33rgzafWjxPxnzVmduNpWNbzrRDFCJwWFk9QbqBtRsAtAEicut3WKpAAhx",
  "key17": "5RpP9Yq9Y6WCEqUebe2ho1r6ZWDAcFHtRzfgUta4GA3MGdptQnGUmKvAWQGBzh8izGLf92BzAsP6cNhV6SCKYJT6",
  "key18": "27Y71nVrsvY6fGYMieATbY6devZQHZmTdgWmJBUvff2eHJKT9p2W84dXqsZazwQopCJWmchLob4eNJHuoBzC3AWM",
  "key19": "5jLME41m7orwaTg7SQPQdMWxsV9TYBf4UHdbtgMSwJdL2NtqUaK3Qn9CaAZFZ6S9KB6FifftfgdVknKkaSpekH82",
  "key20": "2XpKuL2FrmbWHAZutsPt5qVm2y9Y3owrGd7eZVEPeaJ5nxnt93rxzRGtwf2wQw2iSiecwvJgd733uba4xWiG7VVj",
  "key21": "5VshE8yv7oo8sg4V4PyCoKRqzjQUHWq1WBWfuYkzsnnn76Q895DV9gjY2SDbt8uu9fe47LEwgCmXRnnr6AWB8BcX",
  "key22": "3DJugD4rLjHgRuTbtVJQ94FfX4Q22BVuuXB57B3V11WtQeae1cVrACiKj4kEttkARqWQbDjZGFXKLqmuRFc6F2r4",
  "key23": "5mgyjujfnKaVhNjDLXsF5dhkhbKNb5UQoTCfCXpApVSxejvav9evevL9Gt679RcPkf6sMcFYEXKxauBn3oKx2aaN",
  "key24": "32nrGQwX7kXozarqRCsGn2BEai4nEpW2m27rv7P4mJhvmiG6CGHWu6rJMpVCamT1Niv26GGvMsXber4b3FUKVa6n",
  "key25": "3RfzLMLVJrWk7R5tA5wRTpycg4gDdy3QSGw4DVduRxfYPrgu7pvay2QvcA2DChAJKsG297i6z1F7q7LCxtR96jd5",
  "key26": "5SfVtWG6ZcvtCZKvYzh3rRRCT4ka5v75owU1djtk7rnznZd1Cw2XbQWkT1KqiEHYgHvNbULaUmuD8MpkvbiVa9nX",
  "key27": "5vMdp3ekz8dGBWAXJK36YBkBwhkrL7V6eToLiNQrXjDsnnoXRa7wr8jGbEctmnoJoVwDMrjVxb2kiZYbYErkwQEk",
  "key28": "8PmKY7zcCL9xu7MNxYTa75chA5EdvRbdEt2FaxTCLXGKwB8N72h33SyUeHityoMc84aDgGSUutZPByCjCJrwWNJ",
  "key29": "5xtgKUQVwjReg6jnG8urzKEUxX5MJPwidXXLu9R9xnntbq9mp5tUkf5tJ1iK76GKLygG1Zw3nFe4kcNsFv3tmDxe",
  "key30": "5jmnSMXtTcZyUDdKSLefzVz8QMafJSF5uZoUaWSMVenMXjDjt4qnPrmrcVmU58bBQCNtDeYYVKZKFb3UYstMTRfS",
  "key31": "2e42bJ24g7MUgmG7NkzkHbUp285d14d2PtaGisN3vm5iLpn3HrLraWTbAskSvCLgJZzi9rZ5VpeyD4bQmZnH5UfC",
  "key32": "14H1sBbN9t38nN8ZZW34p9GwX3hTc7aJpokXFwmBoCV7HYKsGwLvFGiwPjMZFik4R8phHSJs6mQowbfjngRbgqT",
  "key33": "3uwGGJj3jXcGuys2LPSjVrpABoD5ZiE8P9pQATsArKcVyHiRV2YS38wZ5TsdkXcAKxWf92aoq1x2XEFQTuPZvMS3"
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
