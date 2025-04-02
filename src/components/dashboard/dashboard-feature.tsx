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
    "42YDL24b7ZeH8iTF8vCLnVL2sJqDJhBpqCXabJRfFkwrQJweJtoCbDBjaoC2HtAkZDDnFL7uZb4564HJ6gC2tjGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTQZqWCxKbEZzKXKTxH9qw77P1G6kJHuHCrqq3dgoBUJiUf3VdpYSJYeXvJKeuNMHhRHqzWLPnN5QmJhZ3sqxoM",
  "key1": "i7iDUiGi1yiQ2twsoa7oLoqsZ9mKwfWRKx6KMQJHd5FZCBydRWAQN7fw1Cc6NZxLwGCaKD7zfpRiKgZzqb86HM6",
  "key2": "22r3Nuon9JBDBtunPpNW2opwncKvujwFyHEbd2tfFyejvnEqLPhvHjY5KqhRuH8oZDJLi8bnCtpRMoQx3mwWwZiK",
  "key3": "3jwxGc1rWYzjpXh8gxgRW9erpSpLdHM9eD7c4U5UXL4Kr37h1KFvE4R8aVGap9GgDo6arPY5ZqFcYVgpHNaVNZnJ",
  "key4": "4FWqVovHEpVxowQ7PHoEmKccfyTKdgwK2SbucWL7dw3kUsb5Cpi4SpT6jRZBSY9aj2MkdwjqijGMF2SyFKGMtTpq",
  "key5": "5VPrP8jSEsbHLC59XcLhsCH3o1JWQuFYvQFKowGjqfaGE79kmGHGHAU8g8Zy3QogjsfiQJqJDCVfQShwYV6ocRzb",
  "key6": "4EhvXuLHiUWPpq7Sp1sjrdRqvCDCuN7eQt3cZDiaeoCGgUdCCHKWz53oRSwdEiNJVrPcAhTDyW9ttbWn2nShDXtF",
  "key7": "AJrHK3NoBzcF8Sr9i4opK9y6p4o5tuEwPG2bhvBoPrtvVL1vvSVGrjmEfpZ9dX5BujNn19hGiyezM2Sm72qFGng",
  "key8": "3jv9HaE7dXzMwumikqv6g1X759tredtVrQtp9XTvsYByhq64AM1ir9Azgrwkd7Xy8oGPzEcYwux9XZuxhUbw1JuK",
  "key9": "5cAAtfG9gqsDKsx5ubB7tdRRAo5Ef1fxR3adFQgggWyogQcYUcSLbRYddTAKaaAnkqRKYTebm1bSRG4nwPiXngYW",
  "key10": "4oaFW2wVaFBJoGtgLvWpvni95RMHAw4F8YnP7MJDxQSV3xfyME5QXpHE2x5bNG8Za1x7H2TDcJmb1hJ8ytZuQP6o",
  "key11": "5hxGwpaptxSRDDTHvSoNh2iEePzfxN6mk9v8S2wmsgYkunbdun3wCWhxCCjMLLqNk5kYSoHfp8f6XjKbzu7ioHCA",
  "key12": "26KQLbyvg8s421hcgQj4PmULnGZWmQQdevHj8yHurHk6fs4Ft3geJzcLpZQDuFZXquqQr3gnDjBeoT93sqqhDqNy",
  "key13": "fnAUPFCc7YyYYf7hBchxaCTYNz2qiu1ALn89x5kZM6Dp4MWcEBHxgWwnZQFcU8oPV8vLbDvomyJc15y5mAQJf7M",
  "key14": "4eQjGMMuVE94kUfnmRCS3TwPJHChpbFEUw8NyUkzoGe4Ko5tzAoHsWsdVTGdwoApf1vmynBvSo3Cx4vzJBu83AxY",
  "key15": "33uZb4eMBuRGYpNjeAkGteRQUMLzV7B7hejKd3LaybhJpomyv2AmhGons5TLPTG86F15sSrcUT85AzLjHmiBUPVf",
  "key16": "5JGXP9pkvJVdcSBdbE7b82Xqk5voWW6YUbWYNmXJJaFHFLgEwXQPDfo3eA1GNdFmdk7ZrWgXEef9dg3NEiPnoYQg",
  "key17": "3MqKSRB2FA29yN1uxU1541ZhS3bpNui3TAM6SSYTzoVqQLyUQfJMJ43jDTNzZZniLpcZ7kvVRBVTMXmrWSSbJE2b",
  "key18": "2fL31cwdVx1D1cKHRfvSV86CB4dratnGMBwwwwToE2ckrNRWpGzebGD8Yjs3r1JNuNzmu5dZp8sVwU5cyTyLZpns",
  "key19": "3sU1BfJ9FVkzWFPZdDGFr7BhZuhAHYJqxpWMy89LWA8AKCA5QjcX9zHzpULrGsD6hANip3fsss91kBYLoaEDeiWn",
  "key20": "5ySS2bFrwizSgvxxaDXz6YAhnL1StBhuDouYZoR5ryV9y4tkvjDGJcxghknjLi6x9NXkY89KSA7niK9ejJ8sD5Z4",
  "key21": "sKWydjWuwEQWw1YE7dMcP1HqEZNx5HR45vasvCjmhuPX4K57UcMSNYPq1uxjGeW4ZVTK92dTK6BCfDiVXZSYDLt",
  "key22": "5GUZgtyzC6eqbcs6YxFmg9kZLaA9673iFfJUFgpqAeHKoh4MygCNbdXB5UoZJWgLJtsNW7J8RsqCRetANaXvU56A",
  "key23": "43xA87M2Cum2myJEMHhjhV4KMybXQFhPur3ZvgJ285fGPizjKFwyfBWdN5gPQwSBz5Mae8UgLd5VZBcRPGwGDvxt",
  "key24": "3XrKM5TYgfE7QyQph9X9jFQBY6pUsBRQmA4pvDPtduBGBZx27Ehhg1UrkteJwr1qJp1nmM1L9jJgcD5h1bwL3D9t",
  "key25": "4tGkxdzJL6dQzPMCtVUkLA7JKdr5Y2KPRNAw8FjXSMjebYqi24xLtaH8F7o9UE27qQ5KVECdP5X94TvbMSx1qxen",
  "key26": "RHvyiEkexvZh18H9k6KkkgSEfYvJpf2A9TtAUp2xnkMNft9RTv3F2XXTVdsRs4q3vaehcKWWxx9P14Y7h6z5khF",
  "key27": "22sEifk3Syo28cwzwYovAywTUj4WDbFdUUG5TnzfZwgdDtRtPrY1D9AUZf3sMYTY9JrKiXgW3GZuZmy3pNDw8ZWJ",
  "key28": "2HiEa1aymwDQLjqxBQkj5Rymf9BKoAYAbXC1T4hhXwAfhUqs2LXEJ9V4nrjt43W6BYTWcXU48re297b2HgRw1bkC",
  "key29": "3XPrDGbHxEF7pFr2Uq8RjZorzmtJgXU65tNXEMkNNQ1wBhMTmXSCEZnTtTxoeD9g8HAP839dNA2sgMuTrSaw8Yr3",
  "key30": "2FpWgxdzWU9esnVVt9xC7jL8uwnxcsUWTe9AUz4ey9kc2u2bjdsg9tNApjnQibBoLojMS9wR8HrkVVtDxKiDbiX2",
  "key31": "4VA3qjVH6MAn6XnSVeK4AWKu9BdqWX1iNc42oE7XMgNqNJoALKBFWAcyrv5GtRzA45KbHg4zvduza1pXVpByHNEy",
  "key32": "49Yovh2ncExWUwe2WizpvrUrHRw8hnAZ3kepWaCRfWQbrBBMCXjGWfJxZGruodwttNcghCupPvsebSkhy9jN6jD8",
  "key33": "28TDWzs3sb1XM6Mny2YUutgTCsmcDCufikjWKc5cp5XkGEYbEAnnq6HRkPRgcyCvca5CSo8nXk9mJZU7CghC1Z5k",
  "key34": "5YTBYJxGWRgg57VxoazYuMpQoByb7RpyntLXj6cWvkrp87VeoXwVKaspt8i9NZ6Nrk5c7PQEwWHuPfebU8FxVqGj",
  "key35": "3qUrJXFGQXbdWTR8iUqpDxF1jkFjYrC8Wuh7QRT2pLuARLrXL47Me21PtSwf6uyyLv7pEUqV61uYG4YM8zpwZxNV",
  "key36": "3nRJe6AtUbyHSVmCaCEyGqPK8QfY4xfzwUDxhiPDoPFeaJQwXngyuVipYMmfavhQxYSiB7pdARSuLumiGzxCQHey",
  "key37": "2rC7oYiCQs5utgq5DLmotH3vsTTzv3sE11uAmpGPXMDA4V8GkMct3qzKEExH9hqBHNbLZpRrZmkLutFUXr5aDHoU",
  "key38": "5xZE3GqBfTBHmarUVDfz7F8XjSuPW2jmJBaL58TvABvep7nVToG8qfGn6dCSMWJkbite5DtHHxF6vXaJE8h6KhAQ"
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
