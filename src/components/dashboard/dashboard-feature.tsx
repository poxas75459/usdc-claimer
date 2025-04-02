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
    "SHV9VJU9R5dJr1rACPw6iWGKvbqYWik12q2LPxj2weYLUYvNHWJdxYqRF1s9AEusgQyDeRC9BZm1drFhbhmQCMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCA3ZYDNnbG6WxquNfZsMLisWpTUUamhmjLH4i1bRxRxe1KTpSvuogbEMXqXonnUuTAgzfVotW2yhDKWeT85rPm",
  "key1": "5MAiyjL6jbBrZUP4zDg9k38jeMZ3Creg1627gGhvDAWTSfBCY77SAFU3DSVDr4ZXLVQV7UCWxwFcanSFtrayp9PZ",
  "key2": "5z1R1zBoP3gJr93aDmPkpPkWELWyZR5pfGbBCDLZQLup72FVxN2L79C3aCwaHDgghJDruNrFP81AumrckJ7vz3yv",
  "key3": "RJX5GqERpDf5USanM2FopLHbnMJyytTRyg2YuF4EBcLdjD6Yn2e68erXywfB2dLKbYxdGnPUX2RvSKWdPkvLTQL",
  "key4": "2ktXAw6moaHA51E9ffochSKoZwjPnLJ82PvSeAnVQ7pLxLJD6ymitpAHePB5co6ZxetroQyrFNg63amBLHWLFZBH",
  "key5": "4M8tZkFJiJ3YTJx76K7DdRnL2ZjhAKT1Ubh5X2eF8Ronhptr8dVzJtvkK3KQW5d7uKEwSMHpiUezGtke9c5BtxrK",
  "key6": "gsXnThFkpzBy29X4aPU3BnEmweGKQ5oMQTfLsDVywDvRjZZ1jV3KN7DDj8o7PemRgsURGa8VCMT89fsoVREBSh2",
  "key7": "3EJoVWzQwYVUCBGnBKWGvP6APTaMbaa75hZ2VAXUGrD1aCn5Gp2AoGzCq4uk4yq29M8Tn46jTGTgCjR9M4WX6mQP",
  "key8": "vnqbvLiVWmbHND3Wimty9CKsi6L24YfvfgWHrDH4YVwWuwFHmmXTrMLqPtmE7QJBVh3614agVnK2XRRwD6iLHYt",
  "key9": "2Wc1n2i8gjG3CTNKBJJE9gMd1hoVoPL3bds46NFxUJwwCHezZwtH9sNSFwTUhsj9j6sK4eysKTSgGg1DftbJjYc2",
  "key10": "5uEMCqnz2YbFCCRaDYCKtzhtGpj98PFWD11NwrrczLqD9WSaU52NhUmAeqckZRwmFLLpYL2ZHBTGDDfUeMFcQikv",
  "key11": "4xBCbbDkMLSXH2xJ1nMHoTRdb6yZnQZiMrbvreR2KKnynLwQGvNZkzNZ1fTfw7esT2YRq8hKPkAG6jjD5CYYj4Jm",
  "key12": "5k8Jom7SnRMhqUokQPNwsEdgsiwzTv9VZNeT4TWxWxwkDQbWR1FSkKCyfAU4bg5eb42v6choaXqX7AYSsp3HrfFv",
  "key13": "371phMZjw5mddp9oCjegJ4tWYjhJsGdNL87vCn42gzKmbMFZRAugDzGLSFLoQBbTVixc9nwqmgQgTs9T2AjcgfSq",
  "key14": "29ErpEi7VKch18SZDDTm4NbqejNLu2JdRWn8bJ5ziN7szWNUiz2YNhFwU3FpBgguTpXePCCJHpL3cZ1hdXaSkJFa",
  "key15": "2mypxtLKHFDZbAo59kABKRMLGCo9PXN21EuGQgWAnkDpS5HTM63ApDrfPrFLgpykBzRjyiutB1Ks4bYPUYCY8NpF",
  "key16": "5gKqgktw4bX6VVEAvZXKJQsLG8MnYy1qo7xpDt437hpPVwQMbzPn6U2GAgxMcXw8pVcHC4S5zWtToL4wbMurYofX",
  "key17": "rLosGAn7uD691Ew6mZJeKveuMUcrku41GG2SRnytm3ygfgRYcV29PrZx6zizS18KLpurhSS1rvP9fmXpehJuzbk",
  "key18": "3LnzrWJyBobjCpAWLW5pTq2KV5dPdPQ5ZfUTosSTMjUtEjdP7twptEtys2TkGRfTQrA38cS1GfgArDHDmE5VsgSE",
  "key19": "2KUj6hqZHq2rLch7UZbtu4bbBVqNUzuf4FHLB8xQrMw1vyKKZeKh1ibDRRqrt2gdz9wqP2doovWqnVijETzz1Lcy",
  "key20": "5HZYHsUYbmejdZJcfT9rQyUPZtu5XJVRaZk2DqLk9NZ4Svkodfy411KtuGNdwtXS7c5MoRasQLNJypkANFN8Rxa7",
  "key21": "4CqasTntMdYPbNGT3ZENVxPy1kFutqQ1b3MujpnQGr6roYoHT2XcYgLvkkPp32rw22HLPjTJWRB45xWn4drEfQkJ",
  "key22": "2ivhXHHVSZV3mXgBiMpxFK4bPcj2YzknMJoAmrvwMm2iAVHeM6fuuedR7nU7YEUf7GY9H8XgBrDnj8MkcM612aT",
  "key23": "2ownzrAWS6Ji3cSrNdaxn2xNqqA1Fe4RLVsXBzmC4mQRDvjpAbi1mrzxovHxbTSQfdKiEhzBMWVP7SXPEvKfkok2",
  "key24": "3oSi7BAdxr1b5F17URqnEwrkatsNTgVXR2DLjGEypPhJDhSZLWojVgibSsL1GrdoMZ2cutN45ynKUSuzQYZWAPtW",
  "key25": "56jfPMK1m3Yw116VrC5JGYtZqM1N2FuTauHZeBtmXoABZM4xGts8tmuHdwkaBC3eGUe8m1kr2e8CVPhukq2xPx4s"
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
