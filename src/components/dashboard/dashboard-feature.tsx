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
    "2hinjUnWsfTkdGTZ33YrcD9MYwyeqfiK1rh8ZBEagbbtJPD1iwDptg6NRGawkBYbVjhZE4mm75KSmGnvNZPmXEWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTqHj1ntDhP3ZFvQYx4P4cyKYgjUNTJ3xmmzPkCGEffij2N4LeWYBPd3e8HcPThZGjhVVth1Htmd58HfbSA2mrQ",
  "key1": "Urknvr7HYv74kQuR5V84eBV9uUXkCc78mAZr2jokAUKzqXCZcAdWGr7MkZAMZsuU8Fw6Etr9ocKCEgS3cLQdkvu",
  "key2": "4KaX8Xv6rH2UjR7J1vpNvdRipzz7ZhJXnsUAgdDorm9vW1qtaf6j33LSnbCoGqor52iDznKeaCMt67nmgHJLueby",
  "key3": "2QGhxG7j4qWBY3mK2ERh6mKea2Bo4fj2EMmDU8K5yxx9xKaA1nWHEL8e8Xh24fBGJ8fYn8doUKxYLonUHityBrdA",
  "key4": "3vKfkWxKfhALmD6NzgEkPH6RpXppiJzY1qF2jitDazdgNpgH89Mb7vyeV2XnHp5bKNW3perF1bxEHcikSyXUKt1M",
  "key5": "uw1EpGcM2sz95x3YrGPLa4qpjmDc7VzZ26mExq2UcVD3pr6ePQXttSAYtHMpCc3yPcUNrkMv5tjCNtGrJr2wM1K",
  "key6": "4QmQwCqGbvk7BMd2tTxFBgZ3XHRL3DYskcCg2YMetqNA2ehfu8sqbdrfgGAd3FAi3NbR9yEC9xkmsRwRGNbMhcuw",
  "key7": "5BiCQcUkxK4hNNqAsqkHbqxwT27WBrMPhQR9bZRTyou2oo5oDamws4YrAXNpWWg3wPrE8GikMGiCTbVET1GP2in8",
  "key8": "2La3m53GbQL17mtwHrnviRohjfJUJurwMxif9DEAqux9BeQ7V4xK97rwBFBpraJj4f4qDXX15z91tZsgUxhWjKxn",
  "key9": "5WTVvGCuuFo5dxdTJF3hq9b5JrAYcjd5DmaohmvQKz5ceqr7BUccqh6CGJCMuWyCkKsJRWixdN7JyGmAUFHD57Je",
  "key10": "2rnPEThaRXdnzVkG9qtTZFtzMMPMW7bDcg5TnkPtVzJeemp5zBwKKYS15aRjREJgMoZEWJ6dNVD7VjJDRWXHS1Ao",
  "key11": "5wwY2zsAwoyXPX4PVVgCoscBQo1DGj5wsW4ZtWD7qRbFHsK5BJjUXWfzoXqWSwVinWYKBV42upE4HpsHH8oa23zf",
  "key12": "46jpqwSSsDKgVCn1hGVyweBCSRskB3BfwgSFKcTgtN5hmsg3Hhm77ZQ5cWPS8ZfGwrVwn4ynUh2Bj4eqYQ1SopVZ",
  "key13": "2wVLedMdb87W8DhoTnvFtketVQmjNtf2scxqSk9TJ1wmckWzCAY6xK4iPUzhreGZPB1Q8SYuvfVhrsfCgGwDiRkt",
  "key14": "4PMK2FKV87rmDpw8t5jKXQwgwfpRqBAboDRUjwXNand3nbpDzwygF23Yhh3fM6KYQc8Hfsf2LNNxBeXpG8GkofcY",
  "key15": "64o8ToLR5jX6mfjuB447j5MCPLU3WZgkisb83sdRbvNfKihygePknmhu4uTtMKbzYcC5BxQBCXBEtuAJnuLSBsQa",
  "key16": "4piNzSdLcsh7ErQ6VH7xSGaJBZiNKKiAgc7p9n1WXzuKPWCeuQup1RxbksKycfCnzw6TBpo6qaXSDSiqpYrHQ7Bg",
  "key17": "pfA14TALk2w7kiBoEvDeJFrD6dK16j4thFHz8srWZdbZe4F7cSHMX7nifQJgUABQ2J2VUBLLbNdhWchArTXkLvs",
  "key18": "YRWKGiQXWwnGicjTbovFm8dgmoY8A5iQwDE4jXU3vfMTafsaecjyoF6E9W8dFuNqr7dqvGKoN5u6bQ9wHPQ5eGa",
  "key19": "4wEJE6U4pXRWcUciDC1fJ7jpYJrqtKcxNz7WhuZFNHZ9y7CnaDf8qEjoRacp9w3VFK6VDCRWTZCttwqJ11an3feq",
  "key20": "qSKScZz7zCKC6FZke5nP7yDi9whgw9a4rRDjkR8iiyZXiVvjiMN7tBoyNeDgvWam4FgCy1HsDqtjkLQBQ6W3fXF",
  "key21": "4mmvCXMB5vbhEEUR1sibvbSj9bybCtChwG5nviv187BMkELsMG2Vss2KcxUP7dAqd1SaTkhouQaVX7bRy4cH8RJ",
  "key22": "3H6qmnkLxb8NAPwTQ32h7fGPjFn9SNFU4FKqnccG9s1KV1Ax4z4zaJCnGGEqfTk6hP46cuUBc2zh7EwrUbUDhuMf",
  "key23": "3JpZVCNxwjkxbFHxC8oFoKhWrTQ21NhvC28pyHYDNhqZfogXjL93MRo5HUWSKALx6HNCCxfygN8SzzMwAXi7G8VM",
  "key24": "49iSw3F6bJDuHZWqZsUnZnhuWnmhKAgpCd8FqCLgsHBri1rqoEDu3Nfb4tpcU2VkEnhtY2EJmoVG42dDvQGJZ4Rz",
  "key25": "5eehqSxuyNj9LCPrzdWgHjWGqZ21qeqqiB9CHZwHRSkBUcPJqCeKd4xdVzTG3n241eik7yaoH3RUk8cYtC2gv7oy",
  "key26": "4vKkJAzyQzG5DWBRPEArLvbcyZaL4EdSk97sJWM37F1ixednd39KgsC63DkJ85Wqqk7JSN1TtKrpQV4DE1H7yb4b",
  "key27": "5axofaB654N6VMEZU6yF6LtEnL1dcjFCL8y4JD2QiXgPJ2FEyWMQhxAQ2pWsjDoZVQZTfUrZhDHxwqEdZ6vxoMFR",
  "key28": "4Lt652escF3BEmVkdgUSgmeYoFuCeuDZzT243zvtojZxJFWKqW58bL8rQHsW864WDchS9yBwrEgHdskhTgVc2W3p",
  "key29": "5s8Lcdv5JgAFPr8SbaJnpx3Yp9sVwYBzUpPha7Pm5nQKSw45kRyGttnFEssJFH9MCfSfqt4JCAsuuxSrexmoD7tF",
  "key30": "25Mh7WnSpw9MzkMoNa4CiLbDo7yaj4Qnd33M6XX6d8vJkaUdE9Zm3Sad2qrJfKoTnBcEHjyzLx3m8K7cENawUYq3",
  "key31": "pmyVKBrHuvLHELez2sDcBEPgZhkrdQz7XthGRP8HS9adM25seS4x4ksoMv4PLMNmZmVQeb1HpfEoyyEqnQ7pcL2",
  "key32": "4vnuYZaBp6VxTAmZBDuX87w43BJLM78cSzF52dGNVVHdFJuw3ACmjPxfEPhyw47knd44LmqHesUUiZamUbBYYWXo",
  "key33": "43cgVnyBF1Sq4jKJtWsHZGscDfLszgKzVgrDDL56VS93naV5c8vK5HK6VRPHXvHkBkuytpMbe2kmKzRopd6bw42",
  "key34": "54vnGgcRVJrSsdxugZiriSGNHaWhEckQkUwDt4bkuKydp216wiLwPWwk7Kz2VPC2LC99honQVyZNdeb35uYHAC97",
  "key35": "4bpUFnKhwrJmaTJTpZHVCT7YaKxhuT4NLswZXznFvvmTWQA7xPB4DcCnaFYQf1BmJYS9CundARinWgQPzZz7dKRS",
  "key36": "b4VP6J2iUpAraFPvcS9Yb61ZFGkQR7GCc83PcHKGM6pTdqQseRHyL7WaJ3sKYUhMHqzzriLoWo656X3jsMEQcQz",
  "key37": "jmwy8ZmjoncPtfdkjAZCr4zAnknwu5X73eouZe3Gc6mdQRJBme8MoBzY3cH2kUMzk94rAaYXYuR1kEGkUhhTkui",
  "key38": "2gSxVF21kbfRn9NQVuRmeTE6oF3X9NtjSkoZZoaCJxboXzzPxDtkFBfSeYcuwB7ARkEYGo4ruhjochfWFGERbz4T",
  "key39": "3nzxdQbEFbmaALkr8CaJj6C99uVp4fPr5c6wN8Y51xd6YZZMuumfQNNsVfDH1hzyfP22p13yDv2vrJVHknP9m9Vg",
  "key40": "2uAq11x6znGo7Y4E5t1GkXQcLCnaEC4gWB4hNd4Lnsh12B6g3owiubnnTnJxTBhG59DnNvDFvjEhdB9o9WqJFMEj",
  "key41": "4W9gnjFhM5QpgimBAdvH3g4Xbo1x9TNW7DFMtgTbhS9eFyr5XgBiaChRsZK2deokDKL2xxy3tyTymbqyehRbL1WE",
  "key42": "px7Khh2a76rH52sxSyN89pFdJ5yRnNgcoYoH6NGNbnDU6FwE1htZQ4J9YUA67KRQ3LXLcW8NeAK3Y5En5Mp9n7K",
  "key43": "wtpEfWAW1TwdsvgNKTEfRXhovtnvMMLUnXn3oF12XRp7TcWhUKdnh38QmxUvVxEvPhipbWzGTQ5yC7cjwYiVpY5",
  "key44": "2pkscZH7ZkuZeJuYQ8jTC5Nwxh6uhuA6PkLwSfhZ9i9NUXQZ5tEj3mcNtMHaZtm9nLsbwRUfNzRPG5BC3QjuTMbi"
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
