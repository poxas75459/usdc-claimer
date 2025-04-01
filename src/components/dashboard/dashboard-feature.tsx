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
    "bmMf92fKCXMYR1aM7pGJ2npxt2EqUKWMH39hVmDYzvdWzAfCSutG8G2NpMoE6nuw2irMbWRZvNx9RAe17c2eouD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwxE9tfp6JTnrZg6AiLmizJjHjrFKWPxWrmyZ3jT5NceeMdnN3sU4D2mFGrtTXEhaqaC2F7j2HwzyeJ1FqoU5w8",
  "key1": "yb7gfNENFRQa29AvaTkeAG9n97Vv3dCqVVEafWaBWcmJWhpVwNwCyzsTPbjLtA5u61hf53h5Qqks83kwQYJF2GM",
  "key2": "5UDfN4EWc7zSr2Vnav5L4d4xuyH3nUmeMvpLUas5vUpeYNPsps9sCSK9FG4ptuhn3eRHkuJgkg2K2kL4E5nzNPVX",
  "key3": "2ojSB2MQmMiJGirF8Ccvq7ZC4pr2FbFN1zXffABuaXE5pBBFYXwpgMPRHHhhun4wfYwJvBYBHrosGZLiZ6PY6L3r",
  "key4": "5Lz2ri1BnHvuAPjRoe2xywFm5RbHKbRBZSs4fBxLzA1qhd9VD41zdRH2Leda7ax3tVz7BNLZJ2szhsQNwungqRA1",
  "key5": "5cer23XkKkVJHQLiKUp9M1WcR6EYuRdEkYp6jo7jGQXw5nyoCLvs49waiBNSQYEmMWdEUnMC7KKMjxCAm7zhkoEr",
  "key6": "3MyZjcBLzBwHpBQCkBN48pcRn68xN7jG9AMNyQTe5KfsehDPajHbfQVa2anpPKVeZYtJZx1XgWwWssHqQ5nyE6n3",
  "key7": "5BUL83MJkk6TEe29XMDnSRR41LTPjfhNWLofytvFz2dWvJFbQxCZJvWzHFvNNPdJv63K8PKmL5BKJWUpi86t8QvN",
  "key8": "3TVwXsEjyFkUMGYoLwxJoXWCs2jDYkcYP1hyKEUD1SnG4TNsaCYu7jHRDWrH2LHDqyS9K4kKbMawzrS9R7VNVyU",
  "key9": "5pRVdYk3WiaDCrnDZkbxG969fVC6pr1wojH93AacpvpER84XSPUqSxt8TVMEJJBANQDYGW4xFWit6SaWV5WSq8DD",
  "key10": "5Bk3iHZSTm2nuW4y8Xpy2cs4LT4NFhtfHfPmMx1MBXxucg7NhdctLVVVfkdWixhfFFDmiQodRMZsUkxKTFi3Do2i",
  "key11": "EWrTUZao6yXhRi6fF1LGxkC7qmbggBViMcj8vEofaqRyFz1q3V1FRKX4tvL6hC9ziK6gEu86pzfuWAcnsN8p9HD",
  "key12": "nWoLQRJQeFQU49hnyLunuJhLuWfSgT55Ao7cexbf3KGhiQj4MHSL6Upwdvowb7cMUkaiQZvV6Mj4Vg1ZKiyJG1z",
  "key13": "5SnvcYbyJ85abu55cz2K6oTEguZBxfxZpwKecQtSFpxiYKQiVZzwGjYAU3a9hYkuRDxFkXkVkguSSw7VdChasqPA",
  "key14": "dGp3L6Czhb5ZXp11STFatFgZ6vCtYpTXAVGKCXWub2N1CqtATJxwsvrj6kR1gnMSucfXhXAsFNQnigEbjodtiNo",
  "key15": "4qtnpfxbaEucZzS9AwgLYs9xqwzsktJYf7pxH5JArS25tgwLsmJXyE2ktmQBgb9RymHSqCPDVzJZCHn1gXaDnjBb",
  "key16": "65nL2vgdJ2UxVkA7p9Yoj7ZUkWDoAxeP7SV42KvtmT5zNqnM7Gb4RtFdwDBaCvZKYi4dhRjXrH5uPykPmZZhaxAh",
  "key17": "12oNsqtD23UYyYnaqycwWGPb4twDvyZFuEsRBpZ1wtBGJhy6RGgqSGnctqgEWNXV6o5SWKL8izViEUVq8dmttyh",
  "key18": "nG4KhRkgNMUZ27ZtiaPYB5V5LmhMpbw61VE2Et8JiZh4h29SMJrsdB4bLuwpnLBeLgPxSm8mW9SWgsBh47bMWVN",
  "key19": "3zyCxbZHqDbsu3oML1VqRknnRFcJTqPch3WkQeHHzLDbTvdbhg1msJgSL9mz461z2YCWfZju6NyncwtJQDFBh9Qb",
  "key20": "5vDtFpq1MbMkALU1yKbQxeAcesq9BExu9McsUi6ZwobS4EHNd3V6ksYTcUkRH7MY9GUDFFHrqB7txQQXyzcfuYKx",
  "key21": "5tvY4b1CmJmecnuuuwD6Js51BqyDkqFggpwFz7TVGwdnbPhYjG9fhM3RtSHPidWFFqpAbNLJjLxvd4zafmTVfCDQ",
  "key22": "3HmRCbp1YoxFRqEoEiJqwJJb4Xn1ZKjV2dwiQihpitusJXhpN344HAERZ8d5KsR2AgDGwT8a4NRkZTVPUhjNM2ct",
  "key23": "44bitx3veiw6qGSMnDS3mp15a66RmxceFU3bLW1ZFjdkQWDiwmCrHDeeDUiTpHGma3eCRVUvGc11yYxMsx2kcs8h",
  "key24": "TmrCCeM9M7KFh6vUJkBfDF1MBsZEDZM9PnXQjUuX44HyjR7quPN5UphrMShnaDuNUaSGdd8FM3y2rx8rgtC4HtN",
  "key25": "4gbbjavAyKDQ9BdCVdKxKyeAXZ2DwqnT2cy33HX1LaPeu1mJsoEsc8jFWfkWBuGfojDYwQpXFLcSXzpxZwSuE6oX",
  "key26": "3tbDKJ4JJXQQXtxq9EV5ewWupViNnLk8RL2AhMGvd57opUHvhPMoM4Rk7TyunK3NeuwF12ehTNurtW1eE1gWEhpG"
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
