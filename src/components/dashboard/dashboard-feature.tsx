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
    "4g8YbWEDHjWEEaRpPqvToVgHgP6C4BreMfgab97t9VP7X2zPd1hfdPtF7xBG4MmajRySXfoH8HnKUf6iv66DA672"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nucPPggwrfbrKYVPPaZmmMs1VwyFU9SuvBjUPwax5TeUZLe2BXibxR6yKpjrF4ujdgJfNdkpS3uGi3ee3Ui3yFS",
  "key1": "4pWiWNaMwi6U4EDzYwYNp9C4dN3T7L7QQ4E2cR8zCxTJF4VC8UAssKN4BSAXbcfqPnHHFgARGVPQcYwiGd6PsSpf",
  "key2": "3BWVZCYkdsiBZ4P8a1LmqmHDxLb8Qf4nVibhR7yewPtAc2hW1VkaPaqphDfqQwS7jCNqDyoqXTA8dzpgxqijprVi",
  "key3": "5J6ZjDDtyqZ5bScQrhAxvncbY5pfdtetYW2BVDzFHrtbNBQsZm1ZMaEj74RNWGeV15STBt7NbDijBGW5SdqMDgJJ",
  "key4": "5Bvy4pS2BV94kVvHdtqCN3yePPFignEWnBARB9mZ3Adast54bBiMMxrm5uJpBgbjCKTtxCEgwRb9jGQiGeLZMYFN",
  "key5": "2DB2sKofgEq6YmVxXyxaPc8AvCzktJUTZGoVNaFW3ZSfxG21Br8JSrFcNaGENZYJHFZS5DE2pfjRoZPeeyRJ3ac1",
  "key6": "5JB4DzwxHon949H8Bx2Jrm1jeHHohoZgwa26QX2GetXNcYAvvGopXvyM12NpPmzkF26KDPSX4tr7uVjtsQN1ds3",
  "key7": "3fyvexZx7k1Qe4bUAwJ6NnRgrLaZjPeoL4cn7QR8AKvH4ts78C4PnM1R954LC3qEJopSsix4TnbpLhEHNAYyNJHu",
  "key8": "4HbQde4r8NAbegap2wqxStBq8FBxygtXX7qUY1BB3pb9fZTdtkswnn5T2vEcgYwZuCUFx7RFymfqsX9zB1nTb4Ly",
  "key9": "2VDrfL8fnSdm3ukunQPRa58BDdm1ZzLpkkvp4uUkhJ9W99opwkvmLqbgJjx1BZVEFbJPUSj2i8HtdGXKpWbhKSsU",
  "key10": "23Z2k81b5xdnyWwLWVpx9MSF2qAQ6rjc2fGTi8PEbRchga4wPCWAYshs1T5p37K785w7p12JgQ9Dis2JEjXo8GKD",
  "key11": "27eihD7QH2jWdoGh3aL9Ptn7dMXU4CCN65wz3RUDVsV19Ae4Ppkj8PahEMUj9x4FdKTcDHwxCbvjez4trJBJ5c4G",
  "key12": "ueZPXACDJYsyHFbPnTcK43HNYv5W19utH8bGk4DXs9HzBZBtgdwjd34sNQUv45txvn2xrpG7Z4KeSieo8SkNtYe",
  "key13": "3bVokXKSuGjPQLv7twMNxSFvCVzpQeRLTfKZW4nZpGh8Thy1Sbe6ZdV6D78gWzbDqx6Fqru5vQVfAAsibG25z7dj",
  "key14": "5hwxFkCa9WUKkVDoQzMZ8eC93YSJykD12qY7yRyEG7V1uwDFz153oaEzDWDV3EvaW9PndndVsYRm3BnfsBoqfSqp",
  "key15": "3RaipadYB9Y1owXKCuGJ2NgAgzq8UYiMUhTaKRAt2USZKdUuEugnuHKrue14ipRUGBJegF4iZiwtPiLQ4bxsaJFR",
  "key16": "4WtjxuRFStP3veDmYehHzmFE5bZoLofWa3BteVHWUQeAkM56FXLQyELbNvqyKNmGo4MhPtpPTykZWhhViCUcFhWQ",
  "key17": "4VNwGjeaqJXpryascJwTEQgQWRorCfBJKN8oFmrGtafyLsx4ob1gMjSjMrNCnrUoQNr9nGN6sXtxZNb8W53xzBia",
  "key18": "5tEzaBTBdjZxYFQPXqPKgpn4k8HHeNeKBnjMvrah3wwavKxjaCcFfmcPv1r914F3YmjpA61jGCuc6PqmH9RpCXyn",
  "key19": "kdkYxTUMK97289hMFyGpBcAjK5SCaECKrAnsNv2ckKm3GwMegsNGWnoZzjM6NJaB81iKBYJSX3GNET6852SJtHo",
  "key20": "3tGgatZQbrH3gKjF1zX1whT333mE9PEZh1qNiPc4adGdqZb63LGXeG2goWtZCJRVroqCqntxzTgwziZF8MFkLwm9",
  "key21": "4KQd77jYnVduH1ctfcJXahfQeogm2JhaFqd6LgTPpiqM4TzgrXSSbGY4KqNBHfniuGyNbDDG2UE9FbxC3mhZG8ML",
  "key22": "5Cr3ncufw9sgmxfxr4BL8GwpjHb1Uat9PSGRqKLTfAw9AfFZbNLVd5wy7fEjobTvkVS3qArvM6sfGQejBYecptTm",
  "key23": "2QyaaQmTSW4gFd9zpbn7bAb8hBfNyWsk3BsNWRXoQ7BBtN9FL6fACVua5QLyYZdDAvV7a8ibdhjEsWXzVpDVZsQC",
  "key24": "YiVNJZQHXNpCWswEonJmvUBenZAywwX9wJaQ3PkjcLYFtB5WbQAc6bSKrUWsPaqZboA9rikHJLWsPBqVKVgCUNu",
  "key25": "5P287Pkj8JLxCro9eFAc7NtgkJUtyeazkLRm4jiDGf9Uyxr29ZBBkijhm4tiVNPHairDrNDfqDieVD3vHeqaCWzp",
  "key26": "2GoKsF8Bst8G9FSDsEswXoP1JP8t7tuuoSjkq23eRiMfPkXY13bEhVTRDcCctVuuSEq24nPhmAV1XNxqa1td4wMf",
  "key27": "2jXnsTNygKkmscHyuAdCodsEN468kFdur9k8GjKkFcXRsb6qvaFc2kD4jw3H3Eb1vRN6eWfzb2NKDVrcFLfx1vWd",
  "key28": "5ZHmJchsxKfhWeqaYwQVe7XfnXhZN4QMfRDeoMpV7RLGAZHNVF1PVKYuodpjzvvsyYmt8uxUCBct49RhwKpZ4756",
  "key29": "5mYurPnCzbrfjwPJAe6wmU5gAyYxcGUnfbnZ35STXucPS83xA4yDnzuJptFBvHLaMnS1ghqtNvydXJvffwkVt5Ak",
  "key30": "41BL29dqWdSNrV71mdpKJFYT1gqMbMDCddSh1Z5tfqntrraNWqWB7oKmYavATm6eCSwhtS47zqiDmnPsND9Jm9Cw",
  "key31": "4Z8LXEpvr4nFUHKFtXLKLdzsgCaaauNVEY1KAgGh4HXJtTo735tXowg43pE3hQyJGDConp58ZMJ2HNG5aBmjVNvF",
  "key32": "3iupHHa7qgdygmWVkNNxkyLBSFyP8gfRD9TFMZWWSvGVV6Qav6vStrL21bPh3jVmLNewEN8jNuxTfvqacCYjo4Tg",
  "key33": "4DfF1ovjSzyFqEih5sCP6D8M6Yn9gVY998pieDw6WjL4bg38M22H9uqQppumMk3L8h8aChAFrXavyoKWUWF1QexW",
  "key34": "L7ThWUNx42xnW6C1QFmz914VVyiX5tPzQChmH5mbCpFCKboi4hqLe2f6ehu5UwzwxKqZ7iuYTdnqDLQjHsWRbSx",
  "key35": "wrcd4U5GNQ7PyG3Kv3Qftktsg79qdMhhSBa9Ee1QNJoa8WNCP5Hfxmr1DudwjFzkknopKfayYeJqqhmVWxXiZAK",
  "key36": "KZvCZDHU2Chg42udP7sGpuCczTeDGfmrv6rPh2n84AXCs3TxeW3T4jEzPpf5aK8ma6Nsm8kd7YyNYCskwsndEDH",
  "key37": "5aFr2Eh8R1hYDcVWsn3BqhzHBsRqMY59LnKZBCg8SiQ1YUZYmdJLJ2BsKGQ6sPjKSnzECCSRjG8pFtW39MCLmb6J",
  "key38": "TJKUJy6oYHmrkWZ631FGFeGT7Ts2YBao6Pf73x651KoxCuQQ83YSbpxsJs5to1rbck7NcnzhNBdpfN87vJwxR3N"
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
