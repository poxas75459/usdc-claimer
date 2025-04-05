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
    "4p23Gnbet74ADXJTt3zsJnxLw1mzjPVpYzdW362jHEPycDvSnenTL65DFSEZ9Xi1qfwSHtRvaoDNBRaXNqYWyiPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jw5eoGKQHB7NvBBk6m7ACUnHLynoWwDXQ9kPfKdadofjrU3ZKUEfha44P6d3Jn2Wz63CWvQyAG7HsuWRycJT8yo",
  "key1": "4DdVd7cFe89ipr9QxQAFEMdEf4U1uBQRqRUTMJYGd962oVUDPyeCemJV5dFttT2yf9heYfo1crviw6sGDsKM87su",
  "key2": "32BzyT6dNqpQJRkDVPAp3PRcu8XnEcteSkpQCq8vSUQaVwNEDNjhtiPhC5EsA3SGpkHGv2wD35QYAMqd1jjVd6DT",
  "key3": "54X6wBkMVUV83KiLXAHS4YCEU1Qtocjt3a1hf74p697BCuDLgmQqmShyCpEBUztogM3k5GyEbnVxqYzZqGCZsFGU",
  "key4": "36ozpHgbVPWd7QsB7Bh8VR5B3iY9A9vvA5yuwcyQSk11Y1dYULVoGYqAbCFXwuUCndpYvfmXeam4gAfnKoKDS6yU",
  "key5": "3yoRYCAJ6LMKaKxii2Z4AeYAx2HipQE7HYK8ZzJsyu1BPQgYKBmnevc35g1E7gYKJzZ8hkdQPDHtkAor9gysd815",
  "key6": "4VwBYZ6BQQeJ7E1wDuwmc3jd78hPXphqcUYFYjPoFEZ6DNo8HenXx9UVut9mmnsk2XXW7USJAzaELC1nA53KAUgF",
  "key7": "5wa6vFaBG88ByrULYNxchQUoCB1f2QoHN152QkcGrRq1TAkiq3PwtASLgzpLWqcTAjMutpfewbPEZkybUhvVtMFV",
  "key8": "4sYS2W9Bf7DeWSvgHk4nyuvx7bAuDiVqNkCxkyQF1vTFL8X1y3YVASWjye3NPEEVwByj65FpWJAQ8ncgVF1cd2bm",
  "key9": "5xMwwtjiKGYU8W2VYDr8ym55rJ3rAA5jS946w1VAogUQ3RmWVnxBfyfitP6nD3udzt23vLwwsYDSt6wzpZoiZF1v",
  "key10": "3t9JhFN9fVfsTLd6rxnUyfc26QvPUuUrn5pLzVe5jXimMigSUSp7kfCFThp3fTTzAhcJAcz7itxuBL1vUayy8Uft",
  "key11": "5b12SLiz1k3ssvg3c4AuoivvTxTtqGeH9c2pxEXqnUn2Cruz75Usmj7AAGwZbSFkrjC7zkupz4uyv8vjvw3VewnP",
  "key12": "z7tDtMm5oKuph1iApa71i9PjKQQHDdBSofftJa9FFa1eyfzRD8JCrKc6DpD7SKfebjZT6RfoMoKYDz2TqjxNTuy",
  "key13": "VkJ118QtMYAiAyKu1p4f3nwFzoVFjuQVXXhSV4XzNtY99tENbE2LPnxSTodeQPuKGdZH3quo4z8qkQVNNQWts2m",
  "key14": "4cYk9MjWdxaNVv1nrgzE4ThqhW4JbPwHnRB2bFVt6VHt93C5iEb9HKgVQzVXDpHp1cCfYcRyj1bW1NV8W7xjYRzX",
  "key15": "2Jg99sR7JvWjZefjr7vjUSfbqiHm8akFF2s4Z7aVTckuhMWWaXKNmcB5eRjyQtKCNuja3aUXjmyN9aN2TRZXg4H6",
  "key16": "2ipbAd8HuEkamW6eUHame6Bd1saU7437E1bLNJvDNgLYrdNKqVdUbftmJeHa9jdqreDinnQbQ2J7ozfEsGiHXf1K",
  "key17": "ou1YbYytFR7NN7kDDpeD14WUdR4SuMTEy3k7BPiynnpLzM6o1YnPzbX5CbWa9SSec8UC1xkbCVy8Ve5JC1GZ8dt",
  "key18": "4Qr3pJ1wBs7EbTHQPoVmB3L4HvQRYKdgrMBpJDyNzMxrEjc7KK5WmAeeoBc3Fcx7LyoLb686VXLwygP8XvZGbeNi",
  "key19": "63JjKuzwfb2V4BUEy3cVa5pbWNQMm9tfVSaQSK1rg6gDmZvaUYZfZU6Rk5TzvCPJAPGtwFvRmznKPXQf1gMBpUFH",
  "key20": "2Prk7aEsZjoc97h9dcxtjMPXtKeJYeQCrKkkeuQLdxNtEzQWsWJFydwUJwjW2AX3aDXY3xamNYY7vfSxWVqYxtiE",
  "key21": "53gVWEd5pPWgYt5EcsXnAMvJUyrTSHS5kMdXDoZbWMKSwHxsNhtzDJSbX5QHWyw62n65SvCkkWnY3yepJbNMYBL8",
  "key22": "3GHCHS4XT9EWcXG5nmWd5pnbE8dEsa5cBFR19PegiEmb2mvMoUwCBeHWu2fhTSwnF8Uob6SQ1uvi4oVQo4jbCiRM",
  "key23": "4V1EpBmyNHEtvxmSwiR2uGxUbzHUzQq7gJfUaekTmQ57GsHi9z4y7F3TK4Qt366oLngfECmFVMJoPBVYayAmzwNK",
  "key24": "5VWDbdGjrHU2Aux8H5GNGuwkUcL4PC5ZrQwrqoU939kCYVQ7YRPMibxWH994rEqtu7wUsrvZ6D8HGR4V6Tzdag4c",
  "key25": "477chseX6g1oXTjNw3f2isAmS6s3e6Sv2QKNCY8iqapzeQaKrBbc9o6wJ4nRFr5miTWzVNJheqXREP3uSDJdytVe",
  "key26": "46QjNSqsSc9cJQNAwWwEpM4Tgv5veaEQXL3zwobMqDakcDkMSpxKUaVKM3HcsvkewyG2jm3UXYg2fLRA82BqSnqJ",
  "key27": "4hXxxnaFC2vap6dSQjSc6kS6qyhLKh6vTfXuY2Asgj5P7uLGCwYFVkYqakkyf1ucVYEzxANPwun42j8ZWJNkqJAC",
  "key28": "41961cZ4PcV6dVsPGKboFpLtzjkuaJr2arPw5Pi69c96K7sFXYnUKS2xDgi7o4Bk1m7fNR8KSqjQTESpSRZmPG6v",
  "key29": "3ZAKx8VAzNdPBXJnJ6W99bLm3oHc5E47rwTbcg7QPZTc4Sq2EQL3GGE779zVUDnGxPPm7rcSMrLNKkHcYVrjppQn",
  "key30": "3fd5uALNJJaDCuBFYcFfcajbmyWjNYbZ7vi9EQTR4zCQLiUHcJPQB9eoLPTZWkRBJopGzu154qXZxLYWqvt6Zaxc"
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
