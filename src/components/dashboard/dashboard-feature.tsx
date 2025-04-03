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
    "5iUmVMCPyzpdk9uWihurMF27Qiz1mhATEf9EaMCzMU9xVHypoGDDNmjB8tMA7VgNtgBvoJ31HupXeCzWGpUvoR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hM6AXLRRRB7ixYfKV4J6Uj1DvzMJm9xGWbzfrqzZRBbwFDjE8g5ajmqbF8cyd2Cw7qaTaojzAwpQCjfALWeAy8m",
  "key1": "Ds3qKLRjbsgamiuSCrXtMxWvGgVx5AhU29u5z5CcqHrNx2gK4GEJW6aRMdJb7iyt214TLriHCpk7QH4HfA5XTTJ",
  "key2": "2whdKSPjRdveAxM4HERYSXYkBLGLgxMs6nRQh31h9pUHDUXujoJsg6SERNDTFRFgVwtvGGxXUHdGjVKXcYikRS8z",
  "key3": "597GNSZtFRqoS9sFBukiB1Kr8sLXmvPTzwBLtW4BoXnB8DfB9dMjDPffrEVuGGcogXgAEY2DMfj1J6dzV5RcDJhn",
  "key4": "3qu8SiP6x7ryU1YcUi5sMrtdqQTKuKTjJuiw9fhK7rpLthjYdcM5JcsFqkfwwNhqtK9EDhQvr38CxjcZzrDgUu63",
  "key5": "47uhMkGgjeCPf38x9eiwYFVFWcCirvDow4K4AUGqHs1LDi5xhjjLepQrAXMBgfavoy3p3Lu9wGRofahdWjhx6qVe",
  "key6": "3C2CykQXpbAPR5Gd3owRciv3eBSEQGEGZ4RM4wqCGLyZVpCyHfhujvdKujBstKNvcXWDsPVSVLYBanfPhXpXdMiB",
  "key7": "eBrMRagGXW5M3Qi91uCe336A8F5XzrWB3LgEqAH3FZEEfJZCmYhyB877FTw9toBkBiF1z43voL6SecZSJYosfLk",
  "key8": "29DtsxtL5oXY2SSTDqU4KJ1kG5qnLc3dpURnnbj6RmsSrbBfPHiQHjP3r25c6SobYpjP6m85nRVLCTz9H4fLzV6u",
  "key9": "58S68qpC9RdVkCibBBUpMkSodSKW97UbBe8QYZwxNErF4Z73Bwuy6PnohpEhT1XyLoBtXyrjrSXJbURy4Ei3g6ss",
  "key10": "3JPF1HozNmx12qkJgmKcmb9cGnHr96j91LEQXyRwxyof61QSvjCzJv8sSd2z26m8gjGy3WsrSTyFQ4cMeBUgN8Vv",
  "key11": "VnCyMDmyxcZm1Jvy9wmLGor9yy5hP57N3vbe6LcWkYJVkxrQrAnrUvG3KncmBdY1oEusXyR8Gky4vKgMdUvMNBS",
  "key12": "3SEZgkQPrAtmMQ2c2R7kFsZRWLfLSCRhSVZixH869HTogdb5oDvdoNLQab7TruXYiYsnMVmJxkTMoh1pibN6n2Ui",
  "key13": "2BVCbchTYmooeetxEPakHbN7H5f9hnwUXUsXugzK6ry3La5MJXFqwddRDehUbrLuxihmoFEAdKjMPf5Fix6RvMPC",
  "key14": "2iyYSDc49LkVuaaFz5g1YD15Ao5ntgDTP53zKMw5RSimnkCYTYRWXpKBAKjHAZUmaETAd69K8b95bhgVVzPy9ng1",
  "key15": "37gUxdvA2j1FNPToqoAMPnDBW13CGMkfVmM9ubuwKFfCpt5kVDahHJMnEFLZiEmRgZCXQUVToRPRPctcKFNzFLKA",
  "key16": "2tBvrB3srLuXaVerv7Yyi5S1rZRHASBnDfPTfbLwfCiZzuiP5W8UUuSXAahhNm8t3fTVPChqVGRU6mySDWCmBqMv",
  "key17": "4iEKJ4REcwyc5kVNnzWqeFov5EkuRB8J7QeXE1L16eYjak8P4SksfxQWToFnauHSUBcBDspf5oicCTNdRa5m745b",
  "key18": "wRdUf2DEWMruTJwAj1CtxKhpDCX1gmKvsqkr7ZxMepJJV39AWJdJ17RRK6XXPCKMPZvxeh33EuJe4apofx1WzDS",
  "key19": "ZK4JBF4iyYrH8eVuRYzNjQ6sBPz3XqLX3x43JaKYHfeFSDJNnHA4Zq7fLR36mKwdg6kaMLsBD71JJLutJ6sr1Uo",
  "key20": "PURk9k3sCAG1dhfxjyJX5Yo8PzAubm9eSWH9P8ERArRmPEQLy1vXWr7K4kFUKwq5roVProhvuo6PbVYePAB7NpR",
  "key21": "3Mip6HwouZ5qZ3Hp1v634msM3Gsdov4mmcqubBxSiHher3EoG5JzzpUHd5sNvvFH9naDVTuX33cNLHTdK6PmUVWs",
  "key22": "5ANPjKRBTqJu3ynHiRnRd6rovePDRUoLUETLqCakQD9pYfYDwjgfHvgkdGaVXBFeUbGq611BmxhrGertNvhTttma",
  "key23": "ANLioEaUa6Pdn1TgfpWneWJECBt54WZn4XFuFT5wgZuuGFj2Kzpeg58ZFpDuZ2PcRHi8LfonBfPXYhGjdxDAhQx",
  "key24": "2apz1tWSZrcDqdQFxgt5fQTLkQng2SwnHYRfVDXT6x2S6DPk3g8XATEjeAKEccAgrgmQNu49g75UFu8cCVrxetcK",
  "key25": "4ZgrSF9M5bSpKtLeoZKzEFUjNGuqVbG9NYsDhQhjYoibMV2Ae5RD2V8RqRHiTr7qiouCScQQWRsxaCE5X3UCfjcf",
  "key26": "48DoodJAjp1pFE5bKHnV7wgFAG5soEjSnR4uuQ7znRXpo4h92NfdX9u7U9m5UyFY4PtpMDnRjamJWFeF1dD64u8d",
  "key27": "3RwMWEEPcdmvSaKwc4LdT6s1xKHnSdeAeVGNRnN17dGTRQKP1EhaNLDsKf2PUFgymZWqJB9jEsgUifdisiCTpbR5",
  "key28": "46PTe4FEhgHVWgbTj9dCQu2pjpcuVu3X5m3YZeSmNJxyiExZfVoiQVesgKjxhAZjMHmkswDbnXYWUW21R1aPC9Mj",
  "key29": "5sUXEZqUKo7tYRh3LVZjJL8ZYFHarwhG6xfgdyribdxhD5SC6FJze757reXjxw6sEHbrZs4dU6daBAL3N5JqaM8x",
  "key30": "2h9bZBgs2B6tjsxRQEdRGjErvEoxARu3vvddic6v13dv1KN6ZcG5d492EzeL8CCDRMnsu9ht6Mgk1xoVcFBf9gK6",
  "key31": "2Jk6e8pgSCzC2QcG5ye8fD3h1JBg4hnieyymeMXVsKTTct89nd9MVrJvmmaS114L5SnFymoQFJHZiRw4ZoqNiXc4",
  "key32": "3qzTwphwTP4VHgioLDkssAzcNWMeyejVaRnigvLJ9rvbCWN3GGmAoDg5zq4nRUxUK3whYDTwgRNBgUojdTJRnmHk",
  "key33": "3xLzpeFVzYZwvwZVVjpVusmAhQZJXtpSozKRpNARx2XB21AV7voTEbRmaXNPvp91eEfhBu41uyZ5hetDi9kWKCFc",
  "key34": "5WM4SJG12kUMaufUJAuSMa2UknFZk5AQ462V3gPjTUP8aEt9itGYqFRNEe59sVG6Z1htSkUjXxck3YwqzrKoCKfv",
  "key35": "2VUijmZkSXyEUcXQGmiw5cFdbwYbyJyx1W2ePs5DSPZESJcJ8MCa5E3ZGQgPviFUS3nVXqinnZ5YrdkJaXCkYkFt",
  "key36": "5nKSq1DVCTGsKA6kRgHExGhyUNRmXVJJqbWFzzK8AosDGWSjoDgktyXV6o5AQoEEJYNK5KjS4f5vpj9YA2DeCLQu",
  "key37": "3zYAEoXh7KUM8svvsG9Xrr4gkUFRn8rkHymZYuSLqBEKnnyTZjwLALaCxR88myd7hWHLGGwvA36MpUSeDCL1Ddi6",
  "key38": "2B3tq3jzi7vAFS4BJW58Y4vnE51Ymhp3JwcEcbWj6hnmzVYZsVqzg1tTnvetrht2ZA1Pv1hyf11Ew8mc7BaEvWJR",
  "key39": "4cxmKdKFpKUD8gpH7uh3AC6Qp7y9mZgU2Y4pfU6PTXtVFrp7KNXaTnCW3EqvztVQk7eGUEnvqLfhrcQZM7KGwXRU",
  "key40": "4Xuyn6UA4y55yD1hUyBmjVSLx72Jg8YNk2ka5D7U2AFnXmN9RdskRoyAWJxNkBNw9HZiENtHwi2J2pcwfbVcSTLZ",
  "key41": "22u2FGu56a5ZNxuT7UsHYZfEiV2mpmoqLyqDoF3MPkb428q614c8vgDrz3cjZr75vigrqwLtt1Sfnb3RhSMzVTsQ",
  "key42": "5W4ix5gC4T4zR2M34hiUHuSTrNYwGux3vKGErFPER9pcQyRPd6Y938v22kaHyDjKcHDP1oxiiHpSwDsgZpYtgK1b",
  "key43": "4ED7wBqy8Mpd7byD3xrK3S6AtPuhy8YrEvsRZgkHmU51qtNve2YtioaDYQascKyWR9hTWVogDrMQHfHTR3g5DPJ4",
  "key44": "5sSwk6f2ZWdMJdYFBdTkaCkgN5EMCeADKMvB3QAdNn1zW5ikhUhv3ZQQgcyf88LKqkFcsbThtDwKt8KVdnzXoSHN",
  "key45": "3iomYfLj3cDCumG3CGFxjg4dTzcq53khTxmizNvS6zH3Z4KxYty4HpZEu2M5aQW7BaWPor7VLgCBUC7T4cU4QKtw",
  "key46": "5H7YvnPLeXfXQxcjhzE8SYCoZApQUcozoGpehCojsBuswmRKNv31MFPNkT93xcRbfsMAs6y4A2zhx5YLFH2SPq8h",
  "key47": "3sa3bPXbZq1sdFFVp8r3LUH5Q9rkc5UXK8kfosZCUXaH4RT9X6Tnm5RzsMbC3737dFbCZpao9Gw4k5pTfiNwxz1J",
  "key48": "5A4EvhnxbFEqqaAoTiGBYPP46cpzuMjwH6pMH93n2VWBg9dEHWG4bVcU6UgeiNsKEYMmPFev3TuhRJV4JWfsnDT9"
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
