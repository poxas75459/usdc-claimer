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
    "3zh66Y3FEwprCUYtK2uEw43zjAvEkogtjP2L1gBpSMAgeJjp3rvzaj6f1eE9mQ8KGEPv1bFAp5zwjeBkYqaKKcXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4V6PwNd1nhXFm2xiVtuJ265KnczjYXQ654QzaSHtcSWfxdTYog3dYSmYP1hySU8xTEoonkGPKrdK9L7r8UetdN",
  "key1": "4GuaN19WA8tqfKC4hGRa6ekeaYMroN1WKJWgXy7wPgFr7ftLecGsYFgxgWof7uDMatS6eGQ6Txph2BcKTCPpUjyo",
  "key2": "ELjagiXkkTp1Bew14PV6kUWduMMjgxUYU5KomeBpqPyqkQ7xpQiCDg6bqBvtAybcHEdYeRwYy6PakxDoSVPrzFD",
  "key3": "62oo5G2xA6wBRwtWAyQRtcmAimH4FAVSiLswRMjHGh3nSh6zijrV5nb94xfYkVuWqo8B5FGY5e5HWpbaRxU8e3Aq",
  "key4": "4wx9nikLoo4bLgoJBCc9ZQ4ppcMLbYN1HTNtEbkwRqtZUukQ8pLXieEc6YunZjPYZuQTQ5x5mPRbagKDW4oSq6DN",
  "key5": "5TUCXEyGao9W94thCHj29BgDgVKKPJWW6akvK8k64f7TgtzkLRvHEV1cajBE4MqVUgu4zC6jevD1Bhsrn4F9SGWX",
  "key6": "3qwjbG8Y3GdyrGM7kjXm5QuNLsji6JhkNfepkYX5GAo1DTFjXhTjQmej7ECLKWYLrGQskBZ7uo92bR41fQhiQPSJ",
  "key7": "5r8JnXCFQviv6BEAfonrFpK2HcCJuM83mNEMv9a3PXC7F5rfUao92XsQehQ8vo5qzp9aMhYb3FkCGzKwUmY3uNiS",
  "key8": "TMuFgAWt6jBNH5CzLFuMEJPficYeS5QgTs8QXwb4zA8Ykp3CuXMAkAG44hvmW7Xjc8fwEqZT9escjW7erasUFgV",
  "key9": "2uzBfwceVnc1G273g9H8CgrS3cTsXkeV5H8YDdibTg8W8kUGyguADDKpo2fR9WHQr8sBHuVHY3ycqRSrFmtCGr14",
  "key10": "27XLjntXHxNewQJziBM3uqEH5DvwAta28DavvGVje69diHcAUgTUbAPmWN5rPKQKHvpZFXZ5mNVbp4HXknrx2SSG",
  "key11": "5wT1qNBMhyrqHFaw19cGxjZS3kK3j3UthwTWTPThYrUkNhAKNmamxR1kJts6SXFo6TdnjUZjBVRtDim9rX5qz97C",
  "key12": "3ZuEAgHvnH9ZruVA1MTuVHyi2ZgeJNznW78GRZn19rtAmnkbM3BpX13SLemdiPycMCQ4cG5R7KRNiJvkSke3hHjB",
  "key13": "2NXravRmoka1p8rzZVrGBMGW9n4kiKF6DTHaXzwrv1QXNL6bZihPeYdR43r5zb8xwY5vzkfhKHQB1MZPgDGTXG3R",
  "key14": "ZE1e5bNXHZorXXAfti4mro1FegAgxKJ74XHoRq6nVFQjgTdiMhbTk4mhbPd2sn9F4Gta9CqLnGnrzXeR562s2fJ",
  "key15": "4Xi8vrNLYhCUNSD88e4cyZYFGFqYJ7jCXfG7as5QMzwjQtxnbq9QtoTMkxXP7qWbBfLnsrPAA6RYdeejAuveG5py",
  "key16": "2eac2mk9mQwFEvvt4JmkxRavX5zLKUmiBzh9Nxkm2gbf1CQKsi4qZKQBXQqxWzNQb5y7aUNBrAnvBHqcUFFz11dH",
  "key17": "3o1ceKAAibhnRyztqNLJDmTQhZoVRbMisf2bDrpY74SmAR69TLUXF3NCCRiszfGf69UJWCrWydh4S2o784jCctEV",
  "key18": "2AdWu7o7PQgvxQeeuPfrJZabvT7jorxzRGozubybvJFr59zkU1Vip85ia9G1JGm9cKGk8Jy3nuoBXseh4S73avjP",
  "key19": "5LKKAysQ5fZ7Uc1xEZmaPKdgFXuaQdXfoVnAaKPbSvdHzvURo8a94KWZmaRtRLSB7qUbqbujsiU8W8CdBn3DbCJL",
  "key20": "Fwgt3sNSVid71GKB86E1AJPGx95j5yc62pHsaJgkyytLfKX8jtg5B1yMaBA6GcoKgb82eLw9KVnuqmQXSfd97me",
  "key21": "Vt1BicnUqTULvAP8ZH4xdTQcyaRmMLTaRE8a3oxxnxmmB5K6hPRWMwqKn7TSNzbUbxYsf5AkhNuo8tYedKpYv1T",
  "key22": "5H3cXBedgKW1PGqnHb8xUnMDdcEy8ukPosVBujcz49MQtJM93PaEpAQCjFM9FoS6HF6FNqE1cw6ha6AAcXMr2cT4",
  "key23": "5jokxgXrQ7aVnTqdDFoeaWsLkEDzejycsXr1S93pVhPkKJJuZz7Hv9jRtzsCHLvZy7NZRAvR5c6W19xXhsUiE3SU",
  "key24": "9kETx67s7eCdXSePXGARh6Q4tzkQueATWUthAjLxyRAZyyrRzkqxUBkB8i4nAxmumQVH8zaEHPknV9tBJZvEs7z",
  "key25": "2d1dL95QgvWA6pyfUQJ1xh6gvxHxoSiCFcCkAZZaYEX42c4jtQiVW6NAnRUM1PvvuY6GMLzL3w7Q8J22R828QwHp",
  "key26": "2hc8V1uX749dN3wQCCE1Mz2WWAuBs4EzL9GWmtt61K6Kpe18uARjtXfgqRh6yN7aJFpPAngSfYySdBgXxH8VHnzW",
  "key27": "4h52stu2b6NtTi55AWfQUxKnCLwU81SWEGfpR6W7oBijjJZhiFtYfpGkMUaB9cTbTPNnrJtsXnJmDK8rBaffwrqs",
  "key28": "TSxx9a2uk3bTQgu65PKXsfCp3S4R1nwSrycjWsCSFMWh9CenJHQWp3YEtvqKFmQJRGm5csKYbrJcoonDa5BRdK5"
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
