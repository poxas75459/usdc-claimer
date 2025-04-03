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
    "c1pS8LEwwA4Jqi7aCP5q22rpe4HZSR7kJrahEpinzH1eFjxc7DZfNZCP9m9h4haZo8uDuUka8fD1G5pSKdeCxnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sw9MSP8TReDLccAKLMBQTXoeekiF9m79yzzxjnSV3jwb2YBM4hmAdcBdc73HQFBvykXmmbJVicBtKgY3LKR5rub",
  "key1": "mdVNJ5pybFtBE27bZ4ynq6orGzK42Kh348iFS2gMn26iXHJgZ9KVh49yBuFwQUgzsK51RD5duSKPy85uwcobHei",
  "key2": "3T5ncVv1DsSzx7KY4rais1Ex8F2ktdAGyU3LErCtt5SnSMxxdcNYibfveZJMeJwFLWs5ekfNmTw8H7EVcQz17hL4",
  "key3": "3u1Ga7eoHKm3gwzaibp6HWnGvnAEyaJ41ypDd69LAxp4LKzPEJgR6weFJKVZ2cAjaqzajMhjzKSnC3BqB9Ye1ve9",
  "key4": "37cLwXinpKf8n4nRERUb7emcnGfqvqfA9NPwEXnmrCr5vJAbPJMiz7HnBcU2jXrLENsf13777dEeZoVrRGUshq8b",
  "key5": "49W2Q2SKuJQwyoGVwVz5aNqmPuaed7VNVXeksduEi9FjQEN6i1Np9gRQkS4pSSZ3w32pHJLK6cHQmSXk5zeXAioH",
  "key6": "QEJnxsWDTHvx6WwjXnB3NzYAPivBdpZbc3J4E4QT2cgEEqyYgsRQXTTsk5wFffQqzVCYSueLG3CXh11hUkMiBAP",
  "key7": "4dNTWm5PqX28Xfc6Ly6Y9qvVSWxrnZNzFBr6Dxo9mzY8vNdHGUS55W4hAscwFP5BjidxnZmVsy1Lha3zd9KMSekZ",
  "key8": "59uQrancQScxcQEoFfCo21VcS6pj766BkE5gLFid6iiWtXfV7dDwuZAJBzCLGiiqGzKzyP8eLjryWRsCqSmy5Rkf",
  "key9": "5eJkMYa2kmcgcXURmdstrwU7wdbkaDjE2kbqMLKoZz53gt2nRWw4xj4a5B17yGbwSd6EqCkacYHvMZbQJMKBo6Up",
  "key10": "2NBcrYYtDLsQprrnzfXuoVowEKku1rutcfgDQR2Vg5H81pf6CdVWjnt3ye5FN5uNp88qFZuhuBmJiETiWiE3Qhx6",
  "key11": "w9NmC26fhAoMnU3uyAuV3zNy8cNvMibjGj17whGEyZ217w3cEFpxJJ5j2xRUUsfWKn7ZMgFQTuDmch7w9zE2PCC",
  "key12": "4ZMVbRTfikDwBSoUw8rvNegzqVGmX7YwzYtPM7WvVNZ6Lq15a9TrdQ93xww8hEdBCgJCRdHLBrhfvfV9x5GJaUAu",
  "key13": "49T92EzbADMetK7Gv85QzuMJeddGCnDfqqZjHYW8wrQWjRqQTkb88XonwN4fqtUzU3y2zdru3HZydJyzRcLe1Gp9",
  "key14": "4qtdLWc7JMmVuJsZqKbGJK1JbwQAh8JKJtXg1ecTWLLhz9DGLMTbWwV4h5wqB2pEMdwLvsgk1dss4tUNg1gR2zJg",
  "key15": "2RKB7VPGkswQwhtpLtp1rwQQ4gqzo43LHTspuBUQfAYK3sUND9HiV6zcCLTwEGGkSPFP8oP5TRwNmCS87hX2q2cD",
  "key16": "2pQV6TnEtmhSYdaR99hkqmW4SHMdYoCeyTrSqUDK4YbNCSCHNKQeXeQR6rJfnfuDjJaovn4n8Cuvv9Mi3CtnLQ8e",
  "key17": "2WCdG2BDfEgitTAR8ArWx5AMWhCqDvetMDGHMfbriD7rfLg3kAWrrFhjTUyr7DMS7ArE9ZUsm2KcsWgvvW7st3YT",
  "key18": "5s5ns3ovUhxCJRa3WuQAMrqMEs4YJbmQ6tx72uHDucjuSwRpwMbytib1PXKFxvxBpZFBPN2SAZcTaxjCUt5nVh6n",
  "key19": "3L3eYhiB25um59Y6ufgYZoTEbbSrUfT9VXke7ZupfHRvEjFQ9PaqqkNi7yR3THF5X82d2EiqkEXdHSU2u7T6pk5u",
  "key20": "4zWc5UeSWNViF7xXQNdwY2AXajqghNuSsDo8yQMcKVgiPZQAT2oKQKc9RMpEADxxbqzgqBFsxDDrnWX3reoFvXn2",
  "key21": "5MXZmCa95rZhFyULXazRP3g2yN9CzfvRbMja6epYgj8EmuwF6N2RDWbXh4mvMUV5oTQWAJi5uj3TzifWVRpMNMma",
  "key22": "5zzUPBipVAfYW1GC8h96oa9WZ8CqNsPJkxrtmFvZeVpQqFp8aEVcRFfj5Z1WxNdiL7L1d8DyywXukxado9idFJ4G",
  "key23": "3gQHLDvwcbmHs2R8QH17SQJvn6GorqzMTrt12JwXWi8TVaB9RhjVWsfwZjYRtADagNz6rg33aQsTPPWNeTsrmmPh",
  "key24": "mGEBBLKVZBhjocxivsYGEKwGU7dhjnk25G6QJdc6HCemLuaukzwVEnxitRj87qwzSott8kX6ex1CL7N6N4gEfTg",
  "key25": "3ps4j9cWnMsmjJNBD7HjWHT3zixDd3ncu2xztmUk7f21tvQf4NyCssFoJgjP5LeyFohp9KDK87ia9xjCm66dkmKz",
  "key26": "PX5xMe3Zgwr1vFoB1Ardd8hWJetYYTZtHC53eo8bjnnAgm9bP3Dg695orNPMu5EprjdTAqPdM2R6n17NQZoHGag",
  "key27": "2b1mAbmqiNG7MHoRKf2KBfnUvpWdWjiCjjecLdKWKinnXfLciCEJQ2eZoMDVLQdFdAX7yKRyrZSGdZP7rFUoyKiz",
  "key28": "4oxQwW5kufzThkUASQvXpkMnpRXVnTqtkvSbbEJS3Ef5qPrRjpU3Z7L9E16CyGn7zowUGhs5bMGkgGF2RRZxr19o",
  "key29": "2BS2SNEwb2mY1sWxCv6pEDBEQbSTjzuZbQFH9vj6bvkJRqk5JDam4FYedDMJPUcFgXei4K4ioNTs2XwP5TNQEqQR",
  "key30": "5yuKiWt9fZhv2csQcmbrScmpaoezXzuxY8B1KFmToGFTWbwZen2h62orqE4oQwVczCnRqtRHupxh8kz1xjF4yZev",
  "key31": "u2XtX4TUA4kXeixhrru66uqb1ye6Uk7p6jWVMyR6Tcdwwn5u5Eqwd8e9AUE2rtmPNqHz3Ln3tk49mcgHj4yB6wM",
  "key32": "558XNgbFg5yV7SSn8S4sqtJdh24WKu6d7dnk3ewczmWVnHLekRt5LvFdoaCoVHatDvL9JTb6eLThG2fLxSvHd2bJ",
  "key33": "65ef5NBymW7cij3sSNZ8m7iJscSmzKBS5URX7N1wxtd8GsBK9fMbXfz98PSEMoVzNVaHExxEMgN9PA2TxgTN8rUj",
  "key34": "3pBW45TFQAWorLayW5xPUfVJpkLYJCgu88p4oWxWQLoW45v8XnFrMjwjmZwpoSWwdKnJzpwc9tcFdKxr8Cnan71Q",
  "key35": "4M4BWAdiA4aR9Ub1YA6kvyWJp2Sm5h5UYrNNdfCshQ2LiXEQv3srg1EPVGRmjYrU7NxXkjqrxL4eC64KUMuFA4q",
  "key36": "4bKpBaSNDQdFfKkSLDmyJXx7A5uzmq2BtoDv2cg98Xbkg4KineqcC766iBL56LrmfPhNcE9RK7fiY5gwLYvZdX8r",
  "key37": "52Xig58pghC2yQXkwnCCnfz7tXAJe6Aor2UjGQPzeQ1NBjYnddZTLDQkvYKgo6ysVRY7DbYmaqnwiDbki7BFvnX2",
  "key38": "51N6SwJfqW2sZ182rQwuMF3HzxUN1b1p5nhCaR44GVfHKDCkFfmbcc6uTbGDj7JechmPQobXokbbh6UqD1TCUs7M"
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
