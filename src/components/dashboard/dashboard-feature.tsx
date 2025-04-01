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
    "4PG8fcvgWJxYpp6j4vDW8uZkx69o9LWky57PLqqF9EbZqS5kyqYSTEUi7yi97VqDAYSHi1kcq7u6iUCS2tzBiC69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7vHjbRurbfPZJcrZk6rqX9wq2nuw38jnaez4XaQ59yhHrGUrFugrSrYrj2psoJiNzrNNdS3jtCU124BK9yLegM",
  "key1": "4ugvtpZjFY5uQGK3xsmKMVRWWcVwiPjHyTP5zRSPcBNcpYjxpWK16QQ2x4xmveK9Bh5dhNPLQpD6Pi96xz16YWmq",
  "key2": "5xNXGfE1xBFx3kcXxxpfqQnbD33QUvukqqEjzfQ1NbRpaSSgvPAUfhrjTqZ37muP8H4mJ8E1PUdoHYLRNJ2eHmiw",
  "key3": "JRq6qP2wyykzTPSGT5pVVJKQmT6FpVbjHq44dEQfYeAkFNX6v5PtxJFa2n5nc9mQvzRmemcRMGA7bPypdNypigt",
  "key4": "2jwngz4XKuh1K5oNLUoTKcTPVDVXqHbx9r3xno8Y4b7LiPWPYcQfyKy3BC9hcS6bjTbD8iHu1Rx6A3Swj7zfYKKm",
  "key5": "22RyaV5h4Siopcq1a2XVa6RNsa2XvXrznL2bXy75o1QB4vw8o2kVm8sLaSbSo8NGtJPtgGbD7wcQYFSDFoPAW8Gx",
  "key6": "3YUzj2RvPf2ev3s3BSpbX1KLnVCVXA2URTqZ5P6bwNRVj48H79SS9FpCbuHoapTEusg1PP1oBudA6MTLiPwGN3bK",
  "key7": "4ZrXwVgeS7GEMLY721h8cN54KAA1UVqTKSnMxm3LRmaCszciQ1bGo6xtZ3XW6bNbLeLUz6oQA7ev662dkV3vZfZp",
  "key8": "5LjrvMw4ntVXbVorooZ9f7aXXKzFxmKtcoRtAdHKoJYvuhdqWEt3JHUke6R7wG6wBkLz1yfXmDtTBKpfcVcDsx7z",
  "key9": "4bWvMRJ8FKoRbfzgyETsNVK9myv7eHVHYzKbi84vxedFwVdRmbNpxxTHfXeUut3uCQJhopVftncfxEk5cDhQbynz",
  "key10": "4bHGnhHRL4JWhuJP3aLM2yhNMUck3EnwrS4Jbf1LgpBNX6kLXps3xWsQbWWTNzZZkmoXSTRFA4b7DQzu2vNT33uP",
  "key11": "5BHWKTbr8DQQHzKT4VDF5hARtZr8BAbgisGU6rbyth6HyWxPkngPGcQFkbV9K2MZx2dS7QkG75V7LttPkD6gAC27",
  "key12": "4p1JE4vn6aKwmmiKoiqjwdYxtJBCAaK77kfDQfVekS6VNT1j188YcbWYuEHKQBts2cjMZcF8Z2w1yekBGDBmh8zS",
  "key13": "os2qfvRAPPfdX4zjYFnedNDv7ALwNx5nQFx19gEgCVHmZuoeN5Nf8vjAKyxbG8TEREP1Kx4ZXv6w2Y7Ti9PxJpj",
  "key14": "75oi5PAtvCMpvXTA34hZLhbMtcQySJqkieTLAyMZu5F4bGhFQmBPteQYFxF8BGDAvqy1Sx5JDipk4J4YixwMgRL",
  "key15": "5tN6reeHZbqBdS6Z8yaj2p135itt6AHXLoJoWLymwmGFGs8pWu8oVYXsPDXMDtQDnuXcyc7bnU1DyVc9yHA6U1X9",
  "key16": "2EoM7C8EMXRtRstccrSV1ac6cAeLSBzwTXoFPhewUKdhdxkRimDgE8GjKKLYkzVounTNCpz5rdLeju79WMXbmBjQ",
  "key17": "2tgmbSkKSM8mLF5ujWXts8Av1dTihGhejgBJNcKA7greuz6xLGbM6E9Qc3YtmkHKfAdWZdfGU6EU5kmGcM3w6dwy",
  "key18": "5Dz7k3jB3Gspq7SWt4jAhQWpdFx1FET9syr141jLxm94qAyUU7QJVZuKEQe1j2tLV7U17bMtwzRMAXbJ5w42U36P",
  "key19": "3HAoPt86oFBoyMNbEkLxEDqMEXegDsd295D3CEwHu1zXwxKtzFJiEgFf5xvrV64gcL8ypmCyHzr3trWMKbEfR1um",
  "key20": "3d9arDNCvKTcD7hLN3YTdZPBoWJcz16phmsnQfMDjjNGSPZ9FbgjLaDYDhiKhL8p8A96hiMWU8kdXwV3HmhSRTag",
  "key21": "4EvQDsDBtVJQLmasL1gS3dpQ2FTDhdyK7D1HaGknHQrHGq5UEtbwSynKc7xaJHZD7Mk8SghpBZjBk1aXLySNn59f",
  "key22": "5XJxdwvNUckAycVRtquDerRCFynkxMR7Jf8droZFcGN9cBUyFe65fJ8pwCzEjD2H6TgWAa2zgFC6kXMRKrTjwjh1",
  "key23": "5fnzVCjhRGMAmEqRG5fcLEeWzLceeps7Kh79J3vWrF3Zv7BzWYqv8LFa6PLashXiQKmtkuDzh9ZQCSkSxQfi7Pps",
  "key24": "ao1eqH13PZkffeQ3KWcRgsr1hVrzTajjMi8FGF9y1CYhZ33zRjniVc71inVRKPakJPwvLYybN71dR5M8u4WYgzH",
  "key25": "4mVMmfpApnSK42ERAZfGkuFfwY89P9j5JhCYGz1wqX1PhUKifJPiJdKm9tBZvcmnd2RTVUNy7psr6T44YPCygyJG",
  "key26": "5CK2iKaSnsTjTpdd9QtcjG8w7moiDzx5Guaqh8yus7acoxPbdtH81URL7jMxHpGYBeKDUJJzzf2VmTrZ9UPwTAFP",
  "key27": "3Ck65eToYJcB1XcNNK3fsEvVwYgSk327YuLczvcFCTJ9gMpJSjqgR6MowqZnunNjZDqQfSd4VqaV9TTjp9A9Vuow",
  "key28": "NEMXCoVdaea8kaVMJ2rP1ujyNwQLWAEQoQpMbCXeDdHhqQisXr21BRbYhtfUyQKEr5odjaRvCKaaCf6WLrbshf5",
  "key29": "3Ait3LqkP6DHjAGKkxiJFZr7dLZXgvDXfPaxE7uLku29c6RXWeLiTJRDWM66oN87Q73pWBBQxJVdcN5BcpPkxLQv",
  "key30": "5WwEqvB6ZGq13wcUtSDswCHyVcwCp1CLn2xu18Q2T5CqNVASSzngS9Ckd6ATrWXCiHdc2UHVkkjGSJXrKHDc7Cde",
  "key31": "2PvtL7YyXJMt1yhbBKbEhpZQ4sNgg4tpJgh3mmBz5ep6srM9mbkQmYNrWnEkvdbLk7ni8irX92rhU7E6BLN8fTHG",
  "key32": "3mvhiRtpPArAmuersvGU4DEtVAT17uZSN6cjNFxwzWYSDgxSbwZ2iqZheZHbzRqHxPAxoxseVcvAGPDg1iLmnSXx",
  "key33": "2nAC4fqHVudJQkNdEwDgYqexJ9oBwsArcS2mVtQAyuwWQWvjprz2rvaNsYQLY4uZ5hda1Tnf22HV1Nn35A8DU3zN",
  "key34": "5wTLuZHPfN1ykj3TSVKxRVoLaBUMYCELgWPb5R4KM1EoMuuLXBJWC8qsakC3KQy8NcGoxwzKsu9mKttBY5aK5oAz",
  "key35": "dD4Qx8DjWhcZ8eHku84z1izTrioofuNvfqC8dvXKCBLxAkLw9Q61upgrdyPGi54o7HjiwL8kEUkxhWBuhdapKSn",
  "key36": "3DRP3UWfpvkEmwi3jmMBwLHaa3ifWGts3pTUSpU6UvUz1Ex5Zw6x6TK28vmat5Kfj8iAiKQLZJfzYahMgqqwLXgy",
  "key37": "9PuirXBYqPVCVgHsBiLkNnBAJ3K6F1Bym6gPepQhWFGY8efwduqob8GJpafMnQNS6Fwb6Y8Hzzi36j399APX1tz"
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
