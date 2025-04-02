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
    "3XDaEFhinBw4NsZoWnjoqEut42eTLtVhEpYkofjGTdG7w2MQKx6FFw9nSnZQmMHdHE5aMJ3xeb7PvgE498vuBAEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hR5QmmpZkJKU9GAVNzpphsRwAe3LdURDiVffQGJo8ZguxKVatUQ1pSazQCxAiVDtWVV49yCvZjKMvzBe4ZjNNEP",
  "key1": "3kbQtFbbfDW2ZfRgstKa75iFwTAZAnrGmHpJ3Q3bUhiZYZ1X5bkYuLTiBa6RqquDc1CQci47BKtB3ThY4JaoPRs5",
  "key2": "5XLgvFBhbXjRzjmr7bL48bRhD8iKRj9gj6Y6MNWB2UL7h8yLJprvPyjBHVcVM2QknYeH656tUntfK6AjPhjBCmH4",
  "key3": "4oBm4sPhHRwQydYBSuQoxPfH7bbZMBfAFA9rrUzj55a6tWY6RxgT9hgAf7ZyNKnZpk8AWukyDHkxi6TuxmEZzbay",
  "key4": "3dCZRn2TbU2NXrvgiZ7NCJ5cxNrARAB5YfftTPtcYzzcuvYghqYd5SGKwGmmwLF2GQQ6jBKgihyB8egKQFqyZcbe",
  "key5": "4Y5J2R5hm5jkWHT3dE3c29USZhwCpRKhpxhemnwtSs1ZGukPe85SDGdZ2aTF5C4DgiCmU7Xqfz7TKyUiDyRb7kBy",
  "key6": "2aJppYms3tX6sLMUjnaQJ5JEdsUQHSb26BEdmvowvNcdYbdSa4MZ7eymMKh4rbcdmZPUU8Ho8NU48HKFZV3EjSBH",
  "key7": "4iw46x96BXc2mhtvovPWbUTgQoHUSjHi1kwjbC7TmdXenB1EzqUY2cyqqu4W1CkD1FHssnVF2Rj4fu4ok2sodr77",
  "key8": "3JfrHVrgzruwTXpRHJTMAGjfsBwJvtG3L8Arg9YXeby9ZB2jSbAPevUitrPdsT1DL2iaC9LamEkYipcky3F2Y2Wj",
  "key9": "REfHqFobkHzoNTQybCCfiU8RMWQmS6LQeBNovEz4LzqhUvPLzYy7n9T9YVJkZzHjwH8ihj76yphzxi56ZzN95yH",
  "key10": "2h39UX6VSHQRJtL3FK9AYhzEQVZqKoUoPapi3dRcsADNvV4i4YG74CnonwX27CTfmbX1usbN5LBpLM9bnDojMS7f",
  "key11": "qFE5ifcn71u7q8SbbRt8ZXvab4D37V1wuqJ2HyNdLV6kCEoDGpnw7eQh1E2GhGQoKpiHYR2JDRPP8amCQQeuxy7",
  "key12": "x3NMZwM6vLyE45JVhMMJdtSQadcQF1T8hL8ExWvugwReTxNfC2QFww3mFEnu2dBummawvJewfrMDJgunVHmpP7A",
  "key13": "4iFowLrL9HJwtmYhoMS2tsb1vfVNHb9akzq1tiuphA9vZZ8XZkcocDWoU9GoTPjqzzY6JjNvMGocrnr6t4AZSiV5",
  "key14": "3Eu7AeAxxWE9uxMR7bZMjMcRCypp54q4JFLgp2AxJ3mBUosHSnJRMF7EvxgVdcNPFhJJoqNRvbUhHpL9QHU5RmYR",
  "key15": "54TcEMuXSSacfr58V4aCjsBCy8g9esP9Hw34RTaTH15SSBxypJxhcrhErvAgG5ShX68XB47FXCjxSAQSQ6YGLo5f",
  "key16": "53PrfsRyNVPjgoNMEGzG4XBtC92DWyLhj6HmobccPXvAZR7mdnZsyKed8BHSgsAKbRxS2t8Dor5v5iwZ3EGg9U2k",
  "key17": "CxKY7LduTPDbhcL7c6KaNx82VwD8aweks9x5mFYosArbNDvJZZetSit18y82RTLhwns8GY7bN6mXbVYkZtKcSmX",
  "key18": "vuotyge1WgrPWPBkWbvzpUFHyHvoWRS98AJoENFAkPNe591NoXHEz5eCuHz7Ti65Z7dcnTp6bbiZtiHEQqE9WuX",
  "key19": "5Kw9iWCtCu67uwPzW6Lk7S7PfSSpbjL7ApSAhKawK9VQSePauqWJDpUGumNXGqJK7hVMAxf6zpjV5XNB7LK9RCjH",
  "key20": "3inSGAjHcNydyz2VazUdTQV5KBYopNzec8AAn2UmhnAacp4E8afXXjTvCjfeRGvCRKtyNLr2LDQ4UP27YJQs5d9R",
  "key21": "23rhgp3rZHQPPRSGuLCxXGvWeJGAqxRpFYQApBCNgcv3KPiAeiqhR2L4g6Kz5w4umjFNoxCCe4MnuixYLVPy9dWW",
  "key22": "5m8KALV1QFuyo7tLRUDq4BQPP7wojDzXVc19TKhWAVMwYoBSASkE87rFyixNLM4X7nnW4wp4sh4TD6HiygfhE5AC",
  "key23": "3sXghA8db8GLiMw8qvrw33PLdRQXNx6prWZTN892t7C3inEufuCLuwBvKTiCnA79TCuvai2h1YZfB6E6C2nA89o8",
  "key24": "vw1f1hJZ2cwbU9oWUSq5UCY3SLDuWDwjNNa61QwQNzE62tmME8FUaWmeokeDQTEHo17WnDp2av3h9zq4f2eEamG",
  "key25": "33s6xCM8rfSbpW8teMRQsdk21Var6MRPwwpF17j1rNVJsW8UCSV2ukHRDeyFtxx2r4Z7RpnsNQevqZBafX5WSDDA",
  "key26": "ZyEkZckjeMpSfksNkyt4tkWHqgdwDkR4sby44BepTXDUBCc6DPW9YACLpdborSN3YsmWmTWDbttQ2xGQj1pgek3",
  "key27": "3YrV1T8dSRuGngqozrm1jTyVZzcT5cozkC5BdMtQjaHAb5eFhUStT41Z2sdxt57SBbgxL1y7SAY2X8CYAK53Wx1f",
  "key28": "4jrRWc4TiNxkQ1tCPzTZWponXos4GxF27zJndbMWtLai1XdHKf8575Fe8aqiFg5dffwEuAVsZQJMPZXVdnRfjfgM",
  "key29": "4iATDWb8xvnvNauABmd2VxWf6E3YHN5E2zrJfLifwwbnD3Y9WAbbg8WQTSpKf8mdQXG8SJcGfLPASKWdTXhyn4fb",
  "key30": "5iNf1RWQXqMXm5EccESd7YrdYWBjQPWJf66SgSotPP1Sks5Bb58HzCW49sY5GWegmLpwxX7nvnKJPdjPhF1btp1x",
  "key31": "4drP6Ac5rouF2b8ZhQCqMNvyDdPxV2tPRpbrfiyL4jAgW7UDYPZ6dMqKoxUJ6PnaCNSeKsbXkjpkLm8BA7a9CLvn",
  "key32": "4Xj3da9eiSbEdAkcCmN8s5AWUeKFxLaF256P2KvzYuhtezAyVPXoWsbDdWZRqf8yS44QC7kqV6MYA6rJFjGrcehJ",
  "key33": "3JPKYPYU2boPciRUMkj3UrQ6CkAhdho5WhqMDTZVsQsviErMuycQkhGgDVp8jQ8C8kKgFpy982u1gxjcVceLuaig",
  "key34": "4tzhpSfRdZfnb8kRArXZJfJ96y64Un6zC2rnkACzeLGMQKngkZgt6HDgrXQU3VqiNdfYCQzToi6LAsZUm8aJ7daj",
  "key35": "5VTU4FfGnDmf6KEuWgVoyNybL8omipotQRP7dAWrukeAPKeHCotr6zajUBQMxPD7938biCoaMnBZHtbz41snX8us",
  "key36": "3gBQ4zn1pG4NBCRKxiUagDbZzShdgecLPvCQwavPnn88KQJ7qpqJ97DEf6kD7oLefrNWbX2D5iyteVsEdEUaCxBU",
  "key37": "5YyWkSANPaPjAY9quFTvxXarWHqVFcc1XyFf7DSyitisji23QLsq6gAtPpyA2QxwFViWrJzAh6MkFP6GcvoAEJUn",
  "key38": "s4TM8wmygi2xFozaUm5cZNqWBwpzcwNvHRxgFACkpFqc8equvcF2gKTQ3jmyLpAmb1kFPeMCr4JLjmAvbzyrmnT",
  "key39": "TL1EhWck3FHorJd3Q5dzyUYLgXvCVngLEEVUxt1NNM4P7fzG1ieApQnzXmaFMSiZs8uezBMJ6sJxRuNp9vEwGNw",
  "key40": "38szxWSNGbbDcukvaieCPj2pKhJTiCpHbDrkKooYp1F4DgCmSmiVJikmricEDG8USQiEVcgxKigzEFZERHcJR7Pe",
  "key41": "pruQEyNmNbMsqoLoAxCL5mspq9ZFS9rns9u8MQQ4xWkEfZcsjmT648QP4YpSw8mzyNicuqnsyguSBtvXvkcqUU7",
  "key42": "3VZotw4jdiQCc2ZUHGNiLRHzUrrXwXFQDPiD92jYndVafjwpGeUew42yDq4eUZNzo7intBxqGzvdRWeF3FhMn7ey",
  "key43": "3BEgXqaQzA6qYGe1UwDdKBxW5T34NMwTXeQu2SUGfPbKV168nezz8cSZ1oVsBC2BRsbUB2Vyu6258eYENZsjgYTW",
  "key44": "3NwYriakcVHQ5NLDxeSAfUbG1wf35EMe9yDhaJ5CaME9fMeUaV5FvT6P53YDbjgbSD5PV35ejA9CsDhys7CmhDSh"
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
