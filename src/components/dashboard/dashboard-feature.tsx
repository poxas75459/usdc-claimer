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
    "Ne1EyhnMELg3idLpTVpNzfep5S2XAD1zV32wg3UTtrD6ioEeBm44jcFesnJ323KcjPfhEDLbVWjEGnddT6iUGK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwE5WU4MgHtN3X37ifktzbwvUsBr4UZPYFHGsNc53yDBMQTQriSuGpeVmusNkC68z5ASvwHvU7Z2yBN8C9fyFm1",
  "key1": "G7pDVzzYSs7EQC7FNoYZpCLtqwQqj7SqRE8o4LurYUwEQXrpZaSgZggUzwNycZAscsy3nvmeopDPTwDzjTzL4TK",
  "key2": "5zn9T9EhUTrvugu5e2TEjDoyJfSutHJym4L5eg17qVtxjUWJjVqnvqicUWsWQ1y3a5nYHK2Ks9fVt372az8AM1gT",
  "key3": "29rvjXoYeHNsZrN7n2dMQnaWPENCM5aviwYcnVgor963MU3HEREN4ZQdUBzW7XrermSiLpT1UhmwvvB2ZsQwYk1h",
  "key4": "3QQycCv7K17RspGC39guozYJLhFKpuycLnnX3EyC8VUi8tcHGUtj7CeS5J4so3kPp1poHtRUU8dmqbvhQz9oFysj",
  "key5": "5xqSMw8QzG1fUoijYbk3zcvcE1LLgrNLH6Ht6bJajS7TnQG6fSMCxqEcZZfP5AgHEUnFEP9ynWy4F99dusRhHzcg",
  "key6": "3gvGjnKthyAvizL1LhnboUueQ6AnncJGvXcx8tFrvQeUDW8eidu73WFQ3M1sD82BdHe8x23LVQK559ErBmY5yhvw",
  "key7": "3ikNjGkpB2W5e4KWFhiqzaRPaWBtDaWPJwWfuCkWXkNGXQwJQfLbBseHfZ3uWZKteC18jjjaVkrkRPe9WUER3q1M",
  "key8": "3WP1cUeuj6KzzkiAd26GLC7RaLQd5VbSBLDAqgQeQo4eJXm28A4tBqecmrRTJD17kYin5TGfzzevzKBtsJv3pBT7",
  "key9": "3HPg6M9Qt29ghZELYXMxmV4SP3kU6Rxzx3Cs5krV5YxmvjQZzHhFqSNkW6pR5H8JmGndczZGKPi2d9UxEzriBsUA",
  "key10": "5C1gWsDg6F9Qkfsi2BEXkDkdehRQijDdVroXskMZYPwPEWEwEwZn1uhwZBmLefRnF2qeDurFZ74uM4gYeuxkjecS",
  "key11": "2gEGtLwF5Uh4UgfogyuZa4KNCyijYEGm1ohRa4A7whD7BF3v5vLRBxKqYCBvaj32BphYoiB3L4DU2SA8aKnXm4Tv",
  "key12": "3UZi52wrj4hG7pFfWsdNpc7iZYN3Kgn4fZ4wz5k4jG8Rn364nTZhtGXgMUkyFT7CDxRaY2K6QYhVyRJYQmQsXyyE",
  "key13": "8o6ViAE8uobNXauwUuj63MZX5xMcKpCbPApDbjhZ88vJJmTdrAgUixwpo2CehwHVs8XoCeSQXqaLvke4DhRDaSR",
  "key14": "5wjURFxxmZWjVc2ZHtZXtQWZfRzm97MbFdFrWkZzo8jZHAKsu2zmozcURXyd353wYLdGTUBHu4BWFSarrqJzgvb9",
  "key15": "3qmhbx92nQnScKNRhcsHKUU9fAyVUsMAMfU6cHjRNQZFNTwQhMdS3eEHnyTaRPjr6aMLsFkP915PRjmy4RXL6xHf",
  "key16": "E58AB5i9Lg6pojnaMuQpLhVRMpouFdvozavUJSjiJ6hcLSdTKxVq9QbaWDdjq1jnqzEiBBHcxfnkny4evzbH6Wv",
  "key17": "56roXW5iiqTCRsvUk7AEziKyL3PePfeQv3jfJZ1LAXPErcKireE1E5QARMbsPuv4yo3GmHUpV7gtbwq4WyEanpNr",
  "key18": "5Uvu9g1KCXuiCUg87C1wFeF23dj2DUnbbHeTBzpQYpGgEmYXLnMxXBhhQFLJhV3pvwurTdEeoWKowFsS72AWEo8w",
  "key19": "swKoTsXMTnPmLBEu7sx2bkM9MqKedmajYt1ZZx1vYo1pj9zRifnvY6XJ5kHiLbTbxjwbGwxbg1cZqmyPsKuZm9W",
  "key20": "65NHx7jz6MBUEgkT1YU3CwNFpBUVgFcnt74HCfAkCoRVAv3SsfVBjM9j4253LfoTSMz4L1yQNKFfpL24gntrUhwR",
  "key21": "4VgQvxnYHP3p3nZK9XQUpTmdXz5fMYUsEe6dkSAnyxuYihW6NRpzgUAqSythpzJKk8LBBUdwkneCGH9niyRoq8LG",
  "key22": "2FiWxZ5NruwGuyScFhG47HfLfRx6E9nhnz9qM4NFG1wvECcxm4hLWFmbftkftwi9cP64zNKToZpNUQCahKsPJG1E",
  "key23": "5jEyMJ4Jckq4VkW89MdZ5u5AbqEnCKoDuHAo6kYNec3xwYcRSiJXduTiydqjBmzHSGXLW7Z6YfBsEFtgzUnDaQ5Q",
  "key24": "2yDuLpJXodbbZeyBSvcStWKT4Awr3rC5SXwvbMcs4JNn3vysfoWtcfDtCZADsUqQAQoCh6n5jthtPAVVjL1Vbp1x",
  "key25": "2sSB4ukoGcySWUXYWgd8Q9VqppXcaCZmm1zqBBpwAkkmtg92czuQ2KfDYGTjJCKdcNLFDtzXh1zKsXGL5kd1Z9Fy",
  "key26": "4MLs3QfbfRY7uku7kYfynqa5Cvq9r9uWnyRT42Jj3rUiFZodD5YHkEeBQPXRQCNUWuUz6PLSNcdxVD7XQhMYBMTM",
  "key27": "3zjbiBbreVE5CStqpHv5SkK3dGRRDDg5sbDtJo5bT1uTzuRTq4dj5CSGS9auBT1naxmcxQaPBsghua2jwHvj5oPX",
  "key28": "4kDUV8fqiF4zy9zBDMzdg6oYFsiZjnmkeMvHfkiaNwRvEqiWjg5Ls9GAz2x7WfjWK6hKu1NhkiuLiEPRvg8Y32sY",
  "key29": "3DaUhKRA91PkvhnK3ie53SKuJmmp68fV8M28b14miPT6QjujemNoWttB5tpZ1qkGcu8bMbXZr2m3uKupkYNakFy5",
  "key30": "2UmpP7EPsxLJegx8WLijq7oTJkwxDR46uWTvZrzQXQSoiAxJSBAfBDe8FZwks2ZUE2VVvXGZWQEUyo6GHFcYRYLZ",
  "key31": "52ekMfmmwGKLkGqwYCGZgrD9KzNkcmjcWJwfTASBro4zim496aAs4xmSnKJCXvozdjJmfNN9S7kjS6AxmtxK7uLX",
  "key32": "3nHEuLZD8biqzeQ36jdB8P8Z6RuhCpcG9vSzSXzmpFCZw39iiTmYfQgNBh5icy9yqdzWWkLqbVwtx75ky8pUFcxU",
  "key33": "4XkxLYZNuopx65C7CqUqjYz95VvdcsYbKb1iDBNCrRhbxqouwxBUQc3H4ZoNrMfvbyDEbDDFcGFqyXRBvcoCYXuw",
  "key34": "4hEz7SapEW3VaVoZbcGKNSifY4kJYpjfbqQZDPjtbzgYGe4TWwvh1R9jjBq5AmCfoTQHnNZQsFBQZJgECGhHE8qj",
  "key35": "5v7Tdqf21CJpEJjYKdXXdfs4ECUnYNWsG38Bo2gqrYf4fY8r6RCPuVtpza1vv4as9yhzoitq5eCBU5VMXE4p3XNn",
  "key36": "3JrP4ZkQd5qUBifVtvtkKdPqCLTauZtVzGMZhP2gnebPyEGeaSEr5DBaH6P832C9LxF1r7E1Btdbnrv7A4FsApkf",
  "key37": "3m7EG4SxC4SBVuLufAP8ZkQvHYzotUE6sgrci1hZ9ePU4eFNjT4ieNYmqqpwHb6ghFFfjwBhYWAzm5wEMxuHi5WT",
  "key38": "4DuCWSwrXwZthFAaLiZTu9zrokBCoALfMPPvSN3ra2hEUYgL4TCPKub8v2iZegMm15iwf4toGyb1VHFq4BM6FatK",
  "key39": "3ajnBFaSEPpxcz8BJ4jpEvmzg3t3op6KqH511snNEbgPsc8ZGpfzbVVPGHx9bms8ndhgctDoCB8yAXAEcWFapPbb",
  "key40": "5FaiEHt9L2c7yA1Bb3iZdJLWJg18wsyEyMQ13B58g8mfVUGYFsZS5yMcWQ4n3yvAN6QcE1NnagTfDSo84aV1QdSC",
  "key41": "RUHiq25p9B3f899t45h95Ls9LdELrwdT6FW1r4meZzuJkJcUQ5P6qWCQg8Wu7edkcwn8fnARKTmHZF4fANrnzKC",
  "key42": "4XKz7V3PFdUXQ719dHnA9czbvR7sakwnnWq8nus3vzvFGYFYDhBYoHWbjSh1bUUiCjxbGL1qBjjN7PovYsK6Le7L",
  "key43": "4A3SMXDr2Lc73CBJ5GWgZCwkhW8CcBswTvNHY74USNLhiH7fQXh1HLzbTP39fWoEQSgD6cdgjDce4UkVaEMD9yYN",
  "key44": "33FyVYGXfWXRKgJyMmtRRuxqQWPScfAqZ37RJzaXmXSt1xk1q4y9bpxbGXrQU5kuxTXaN3xhwFmANNYjMwCqJnkm",
  "key45": "26NHkYc7hhk5832DXCkqd6VdpZvZyDR2UPqERcAhW8smyoBaEU1NP5bWtShGvmrk1ukZfqKaJ9f7WG3f9c2nN3cn",
  "key46": "5ViLtwcqLkBWGMKTwDh7weNeX6DNwrzGrvxS9JJgz9W8uAYyU53xBkQhdtY49QwcDj1cYiimzhfH7EoS447hMtVY",
  "key47": "3geKXYALxtds78zuwKXrohDjWPJkcURToUe1PDDP8Wkizoo85dnPA4MuGEVEE1G4meuaN8YtMZ8jcvdydAHPqFSE",
  "key48": "4Gpmbp1y536G1KEJNhvob5pu7uyQBFgqUDQbXTcxwxWSDfV1vQF56RnrBds5khXw7JDzXVwA33bZJS9okbBZoUdN"
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
