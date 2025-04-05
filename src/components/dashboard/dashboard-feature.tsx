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
    "tXuAFJJreZESWfnh3eukoxCCEAWHAKMt5EMJRLrMURi9XaSgKTAdu3cWB8bZjgKB47YMBz6p1r5b8xC5PoPu3qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvjSyMug2xbniSQbKNSHBY9oqWpQJDVj7ByEYCxUusqt6Ne6FH7n41Fse8T8ZXxJkjN197cB54hLXGc5cqS246s",
  "key1": "5aYip7UmEUUd5GTifJF4ZJeaiuQ4Mmb5TWvwCxtdw1kaGeehaDGM8voyaq6ExtaGFvs2KcvbKXecZv6UVLzYLpRA",
  "key2": "kjAfinksfZwArvcnWGz6SCv9UGFNaie3pBN6iwPGapQpgg3XstJnn1rUg9yyzLnPiiiad7e6iz9KRp7YDXivKiU",
  "key3": "2bSxxWdA57fD72XDtoSkPAbHaLRsUVQH5oGnLZpMmtmGxKJg5eWMjEbbDRMDShkFJGHM9nKVhbnoXqnRN4dcruVT",
  "key4": "i6uSUTZZ6envktpBuDMBZre1WiQpHvcdKXndvdXHSjnHKju59qdHZCKLjJeiUjrqKuSV2LBFC94Z7usroMnmNAv",
  "key5": "5b4JuoGvhfYhbYxJsPmjSTqStu2vzEfWwCHSkjj25gZc3DVSEckQjqjBiUgVuc8srSQctX2ccq3mQBgoZ6DTCswH",
  "key6": "CZ4NRkjGuuc627JSEGo4u4BGiBwjRxJPCKN5bnyKodKUBVevRfASq38tNbTyiBTrgNvzRG3WvLe1tBrC9G1DDTK",
  "key7": "5gBPiivanzsv1H6R9gAYtGQLfP37oyeKdCw7dZaCECqHa2Vm5ZUzjmiz9zEsDrxaBhSrzzzNMy4t5LDZzuEmcTk9",
  "key8": "57Zy1zZDKKF5MdH7qX2XV7SJXq4pTCPWuYiRL7URCZz7ko3eTdktA8wNu3erJ9wprgqeBipuQRBFWfp84p4D9Xxo",
  "key9": "5wrPJw5uGdGJzU8S2dgADZTuBAQ5sV4mGV2BhinW6ZYZMLhGV4mmDhWFWGYVgq2GYFAmpCig9kACNpGooCs2mi1Y",
  "key10": "44EZyPQwN3qDVYA196QovZKkusAMHd8pUemewoyPtjLvFPYwDSW2ow3iV2aE6r778Uq8A3e7eKnHT86eWKRy4knJ",
  "key11": "4KE9kF9wZDPuDTbfebdyQT8fA3kL5gUEwDc4KeSyeXKWiFhopKuKhkFvxqoKeBH6UaV2m9N1P6VLqJjSvsqAb6Vh",
  "key12": "vbTvNrtsJbFEnAgfiJ7e22KiiQbFWy991AVARqe2q3tUZCv9NhiwSe5dgwuQtY5T47Xx6aazJ9qmvEXuHhmF7Tb",
  "key13": "2UPAsjWCwBjJnDRMnCy7fXN25mYd1Zonk8pfcgUXLynGV6WsCfenwoShsgCsi5NcyT6MgK3Nyj3TiztW18VmfEoA",
  "key14": "bKDyo5PvqW36UTgWzVY4W1KtSfhgQi8LkuJWdmvFKa6KFt9EdaiUeoJfF4dyH2q8tXuc9E2xpkRnD441CkbmGSn",
  "key15": "4K1ypaVTetBKHnHXZxv3LJLHWKCD2PhMYjxoyP1qPTmebWbELZqRyhJKqwp2SfWy6yzF67V59Hex9d8Dx55L9pAq",
  "key16": "594UhmsrRcqqQFjMmP7FnsVvX8H41thDM4MRYfY4xqLNW3JeN2eyMVfBhRbHhMTywJwV8GG1okWEsLHQNFZAsh1p",
  "key17": "4cJciHWT2VgcrqF5cLVGzhwiLmygPPyvopBrsN9Y45ezos7XnNWrss5qDJVxvJmrSWPxtmL7uVfziPkaT4Ms48Ys",
  "key18": "YdDpG5kkAmWi1DZjWm9JrV3CzM3oEM1V8x5qkDod6BFW9S5ZytoMFbfLQ9X8y85wwmy5uVNhM9zCZmypeBnxXii",
  "key19": "39MFAdAMku2VK9T4p4htnztmpxuDJ6yatLoZPXC1n585Brrf8N38Z5zmLNoWc99Anea438mLhSHDiuBDshysznKq",
  "key20": "46Vu8iLD92NTiLyAmKN4t7xFETwbtrAthEhqZ1BumrKfokT27f7QjX6SXWADVWDZwzpCR8gk2RNdBhJJvtSXohdN",
  "key21": "4iQxdgaQnZKNk8UY7C3baxGisiGG14dSxgeF9fWfAYZC9QKWuWKZzPaYPJVKyWEghK3npR64xPQ8SccJeWEQbMna",
  "key22": "3hDrPY3Kg1fVCqWma7qXKpiMaWysDFhhpyENKumoqF5u5SnRaEcvu2UEAV2L1BpbzBMdahZmreyjae4vyi7XxZuq",
  "key23": "53HqkkJcZahk4s2RUhMYjrHv8dQ3HegWGJ3pgo5xrwuDQjpDKPx5EUhvEq7EoM4mjiwAipMfpSCpPxy8e6rRBxv6",
  "key24": "5tRmzdij8if9CeWZVcoKCWmZupGjEgBqZKE7oQW5DiVjHwk8uZ5cL4Q5xrJXjTjf5yL3W3XcaPixkJiPG6Jr9mgY",
  "key25": "bkczpTLzCBm76nR4j2bPdtxGGu3R5XvDd9Ag1KMKV9193QM5JqcSnBWBEEtJNsYwLem9UavhbRgzEQ7Pq45WzF1",
  "key26": "4GSpsA8JxiS173vomjzydsnFFKGxU15zpWm4xxEn1VgZGFmzVzVobuWq6jr2T3gbMHaN9tFWQ7dNtV7gQT1bj6GQ",
  "key27": "2P9JhzzgCi7ZkaqRjmCpJca41jYKqNtFEZQDyyKfmELhjWyyouJJ9ZZRMpfRNeS2y7RTDj12de6NYSJdrCW5X2Ws",
  "key28": "dqAK6HYyJf2i1TNWu7aEbVZ9eEuEd9KfjKu6DmqtbrNs8o3ywaWmLJ2HrsTDAYpnxNS5EetSrWaA37QnX3wQUFL",
  "key29": "5o1TVFHhvzVva7jCouk5nMAmrcMQKuQcRWFCYZMEic2nQH2o5Pg8qfJwjbT4TUJq6rsv3MuLLgqrZWRp6EkqM1kz",
  "key30": "5QB9zNNYR4ZdU6yiXWZNp8Pityz3d8frdGRDfmCDbFB79y41Wj6opPWEsJBchQ1AQN6ZVPHTyb8LUvDcpDYULKxe",
  "key31": "2hbU58vUPgfiyJi4FgrEzBFbHiybes21yKtB5fAw7yyyi4xV9DzKpi4zsn7gDnQzET5VFaGEEETef52fAkbWSMKM",
  "key32": "27qarFbQFWzwfi7BHYGSGvrJGY8baKazbaw2rxTQy8rWSSgHnzo4TJoxMPdr8tdQskXWbdRyZKDrET6Guq1Ta4dc",
  "key33": "2qdJ8TQVpedYeg1nbqqsLzkmUEk9LbZwJkX2mTrTb3gsBCcDCWtMPPpmfAvDKjGqT2dYrNKQYbLbVEW2ScNbuzBq",
  "key34": "4vsoZm2zbj4tyubQHJPZkamqfBEim3urhMLCqKLKGTVRU32hBEPYC6B4X3mE8iDRjBPLwPjxaqFqdG5ZZnfK4v73",
  "key35": "3xk23GHUbWkph9P1uG4AnosbNr6L7GYWdcMie7hL8RHq5PX2iwWpTUuz61McM9ccRYddTaSp3FKgHravrS2VX6pA",
  "key36": "34rg1ED9KzXQEct635hTQzz9ssdLtZRjuBKwioiE9Ffokb4JPay2HT9BZQzYnXPQe2G27PnRcXdMxW5cpN4Y5XMG",
  "key37": "WW736szLe7HEkfyWEk3YPpV9hfDKiRAyoCTQTR3Jm2oUVT3UdzTXeuoGZxAv6cAExBUSp16qJeixwJ5BycxDa6c"
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
