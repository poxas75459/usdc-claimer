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
    "3c3xqvvFfvyBMEqnhkYym7PXP4kDmmUQbBMDYtyJm86ftb1pYPDy79fY7Q8Gtr9S6pNmwimGizyeVzrRV6W5M38B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ksDcrLB6XqyT8wyck5nBAqGtzbHdJnmQNf3ZuyuS2TPX1gYfStqMwqo2qX44LLtghHdzAmz8dPwGiivZQn3PjTf",
  "key1": "3MufjSZip2zgHsWoaTXoSEg1Nxd5Li4fj6dzKLvYfKLqS5CWbidwbYHKoizANX8qcMYnLpTvC7fVVrPdAouKM9UX",
  "key2": "2ogt5XJTz2iiAZTtZUZPu1iBmerjgqKKuSQKMj6nSyZTZMEdAebZ4uuM7bw1PFrUtXL41inYS3rwz4L1tvfHC5Za",
  "key3": "2J7fL7gdq5jGanpABGKXFwn1edCz3qeimQE6Gfnecp5Lvis8bnsoq5m9Jq7DbZ7QQpeQQins2G3uQFj37eye52b6",
  "key4": "5hnKHJTJ5n2C8NhABpndErRFoPHYsNL4H2bE6p3XyPaqG6ANhvUNB3xP2pPc1Mkx9rUGm6y7EqTmrR5rXaqYCNwH",
  "key5": "5pyFADx5GdWHiYXrmktBar9yrQ7Qaz7RsuuiGVVmUhLw6qyMzxfoxtEQnprF1tfkU9T2tW77HBkqw8Nn6Brwn1dz",
  "key6": "4AXL8gz1qTQjWNwxbSHnjo583FRK28ANBjmdTCT3yfoGcts58p8kxPSpSEHcr5rPC7asj3GRbdcWLpLJmzFGhA8g",
  "key7": "2ic66MhXD6fSaR4RMTnvFwjLJYgWf4h422eWt4w6futsGisq3wKeHReNxPbwxcqKFrWGVHKwaGGMFC3w8NrTAMr9",
  "key8": "3PVDvG1EwVD1nEPkwZtPq4tfcd4fxsMw1AfpwS3W6wrjhXcncoZHCJFjP56YH2mnzmL6NPLT3unZeHX8L18v9S4F",
  "key9": "npyyPiEXWmLx9KgvyH4CQfTMcLEz3vmraZG1e4rkNHt7kqBMRHLysqwgWCXygFmBP8sg9rHRD4HFzBXfRQ7XpU2",
  "key10": "2gM4n4YYCVbWZNpHA4QZyqdjMn4BDyWqqkX8QmLU4RtgsQiX1atSUd7BQGhxBGCMxwssvdqkMRXBcXpLa9YtL41r",
  "key11": "2SXwnsQNUfjy79tvrNB4qYgqhmKMNN148gbPLnu3qK8myK2S1Y9GUxyrKmk2Pjn5zEkjDcVLBFhJhYzkz1nDG9Fx",
  "key12": "m3Gj8Lw4FD5XBwBNuVwcYR2joKPntSd3ZbXSMkjpspn6JB1gtmZy5PjU82En7CE8znQ3H7SHB6WEpLUHy1JMfaP",
  "key13": "5CzqtawkcsexP5fQanA9e1DWS6QgMHgcbk4fzqYZmnT1FSCbZb1cp4Gv78Zurk3MMTY7T5Daq2YMc6B6Eqj4WyzR",
  "key14": "5MDzMBauZvWucqMjA2eFkSFmveSrhRqoNC9UbTDiBcK8zN8KoPG3HcDKrdVBFtoE4ytNBgGgjD2r8m9MCCu53GZh",
  "key15": "3R43YavnDRejZ5sV7aCqzbhgDuHtnuh25MxF6miHLsZW6sMPYa2WhmPERchrsUcMYNhbpV5WC4gvx22tbiVTPiPs",
  "key16": "3p4GRLXaKCDyQ9xvkNRJHAF8iW4dTDpL9zy9CTsbid3KTvj7wBjKWQ6vQer3k1jWpAMwPiAWvpwuQsC5bMXPnEdX",
  "key17": "2tnadYrVTL7VSCL5DPPxCycJtbpFqqgvdWWux5uBMDfjRvDqoZUod4jSnSYFd4LVciXsuZuDNcxpKsqYmZHJsY41",
  "key18": "4evreFE498JbKMY46SXj8Y8yqANZqJNdiPB3g97WBUHAqoFMmAQKFZcB35HzbpcdNZNt6Zrnb4AVcNbdQZTQgEDm",
  "key19": "BB2cSK78uELyk5CNUdW9nEG3fZiMooXoNhncUjAK6vpMs9cgEoD43x8MArvfdkmbJCGveriZpoknunh8N8EAn1z",
  "key20": "2CSDGqzM1VeRPpufQrvVipUT6pTUZyfifoS4E32DUtoa6Ly9grDj4HBf17JdeJoyama1mQCm3QDHiu7qTgvdxYgh",
  "key21": "49RvedBmfRvpDAA8pZep7TsXKAgSEMAt7CUgKbSd9vDfr7qjkav8BULsjzg8Mdgf2v74j7ytT47uaL2jbUPSr7Gw",
  "key22": "2XAzyRsovzgW325WrmsEf9nngn2pPqBv66bSd9ufx8unMvHE65Deqdr6PCduv5KykzAyEJC7pWq4fqwGM4fsuU2N",
  "key23": "2MsV39QQvJzFzq4DCQVUukTVgtEz3UAghWKpQeojcwN1VebgG7dYKexn3sHFL9tSfGXzSgS2MGdMuxu8Rnxe2nAv",
  "key24": "59PHBhWi5d2vUcZURq3JbxGZhncgghdXeqUYri1dfuAcAe98jHbgDDT7c8PSj59CdnkuZC5ucogpqmK8foZKNvnC",
  "key25": "5E7hFn9mC2XAyDn7akDpiYhWFM4NxxS4Yt9aqPGm6VjShFYnJM5HyKru1sNC26zu4V9ua4npUJkFMrgvRcXGkevk",
  "key26": "4rNGRt6PVQY97gWQraa6ecKLeMTL2HhYWMXFvCdXYCdmPcQoz1Qan1wD9wSWak5fHiaABcoL7xqPKG4upD1RUFYb",
  "key27": "55gvAtvPuzcmghm7qa5cLGND6CmNgPK6U1CKChtzuTmz38xHYfbw5ukhgvyCrZ1ejDpD91mKwDRsnj6sVKALFYTz",
  "key28": "YmwBKmDkRYokoDz8tUytq3G58WhFJMh7e2jg4XxHpg9eeouAHEGA7wfWz1hwFkz7N4PLjGCuVetM4RNmcBAqvvQ",
  "key29": "5tVC8xvy3Mpcszuj76sVtb9ML9vkZsnzpY6EiJXtUwjce3c4JQ5HadFPBvqEssnJXuohGM8R5ZGEzaaUHpxY6FhG",
  "key30": "x9xTM5kcyN9T8UwBxtbhTJHPVqHW9wQBHr2zTxJXZ1amWPXw3RFDyUCw9jDtfjEUmHLS25ZbnLNEt47LUKKgc8H",
  "key31": "4kJH6DzQ2FiPcF5a7qor2TcpNMxqiZGxoW4ZZ61sGfkZALA6eiyjP4Mfyk5LLn2DmtSAueWgJdmmyU1jL4YPvjUk",
  "key32": "39Nv4VTJaA2wyuvRL4bSYwxcmH4KmuXSmegMVydErd7fG8qxQtAK1DPNned5eYoUD4HT28LBUNRq7RBvMQAKTTZN",
  "key33": "hV2U9jireqVhBemJkS7wFdT14jzgeaXRdkmnQvV3QBoJH5pCeJAqJ7gHTu5tXdjweieVi5r1pZLiDbFwaSgvzxQ",
  "key34": "24fY77Y5CsxaNLVLJ2vgh8yk5CbMNQais9YUwwZZk8chhygnVCqiFCCtA2yZR5KkAHNqUrZ5Hv7ce8zZiBzQ3Njt",
  "key35": "2oJzKofg43dvhE2QWcs6Jcjh7KGTENJyBALsw9FNcMxut5n4aR9LmUeRAkMyr4Dsnwj38z36bZtHyXNShQtJNrM2",
  "key36": "5eJ3oexKxMf3SioF8zXmA82FhkZ4uBAhf3MpPBgwyFoFQYbxtxApjT2tbWkMVHSo7LkQixb4mrbPb1zd4c7zALnL",
  "key37": "zagKQ4BPpJLPkcVnTkreeYhL7GAEWUUfLBuaLDP8cLk5VMpEJmHLPCmi2tvi81QoYFxvfkGTzGQyJcDWwJdS4kE",
  "key38": "25y2SsfYV3YysYqgWFuNoZw82BfmQQ2M1rDSXoYsAo738UarXA5HZ5zDofVimAXh8XxqaNAJv3fmAryqsDfn8dqy",
  "key39": "3iDxrWyG5kRzKpP1gYEmtcw8XGyAs8y3Lj5puuWAjQWAgQVhgrHv7S2NgYLLo25xWkvHFxJunB9whECkVk5EYAqa",
  "key40": "VVbJArptgkRY8jNS2QLRucFU8TNGMC4quZFXUZafNBihVDoyX8vBz5qyJmU5hTKvNs1NSiQMGkFoceFWirRkXfL",
  "key41": "5pR5cAH5umL4SeWYTRQaxBaJdMW9NpHWsbPi3gExtMzywdTeMb3h6HCMDVqW2CHenQop2tFXL2WEGnfKBm28wzFg",
  "key42": "NyEq4EJCu4vMFNfJGRCVaaC1aN8Hnma96ZW5TvbE1RDfvcjKWY5TSxpHPPfnTX77p1eWnVxxLoMRgCMQx8X3MDD",
  "key43": "5iyk9E3ZDwUyHn21mYsimLL5BphuZwuSFGs4ctKzAJ55Ksv7VjXUvyVUax4RY8HSCRDusxY1dzjzPujukhCvvv9E",
  "key44": "59FL7mg1JjniMscY3Xu8g2b2wKtE3EoykgDehNDS6zrnMkudjeNBAZuQTo9Dm7D44rP3eiBh4TM5q57ntWEG7gmX",
  "key45": "5S6i24g1dYjRRURNWuGUBqckzjBFyjZzEQeZhZCeANgTo4Kbgnn3DWCJvEnz6Hikvoiv4zDuJkcBVu7nnY8JvPoE",
  "key46": "raYwkTHWZG9dCHNfUS9WCQJWSMDMEfk8hTLiYpvi332wmHVazyRUfyGVXevsM9T8LA5Xi53h7Kwmob9NaPEMqHQ",
  "key47": "3ynq1eVsFnMnFs7qYsEWQBaxPtj3DRjvmtdjsmmu4mE8fvMNqGxm6N8ohqjHxj2ssTwCZrWh3M7zH7Nw2XwvAJWE"
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
