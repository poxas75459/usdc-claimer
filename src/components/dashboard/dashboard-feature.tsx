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
    "2y4gNggmPRVra7nJR8pjvdpZdjzaVoN8mEnRz3TqDyuNepqBZskntKY4xSfce1wmWdd7TMdNZ3VaTadn222VYRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geUX5h7cEhjT9auLx5hPLYJ3TcqnJyCBS5fg99eqetVgAbBaL3brVrmoLsQL67DSsRL7BdNkgVGagXrYqNsAcNM",
  "key1": "66FHziUaW8k6yFGSThDiCT7XBwbyBxZcdZwNiCeArfAdh38exZrtNTJ7wuScoc3hKPPfTGdFG3p8WdEXwJ1dsxvW",
  "key2": "31TzxN2bpU5g8YZvGQUCWkZ9Mxg18EkCKGARUtVW6CH5MGYpNxo6wmewNwWWECT9jZ72ug2TrvNV4CkLLgfwh3xq",
  "key3": "4mm8gynoPYjCwgbE2nFZ4UL3Uby7VNXnBC2iMR8m8oUUcRnBCHKW5w2u5yeXqNCVKGy5AR7M9DKwmjzxyBzrxyQL",
  "key4": "2a8j72AtDJQNeoQrPNkdmRZ3TcBW6ju51HoXqLpsgpLmbGv8pE9SogDSXnSsP9sY54gaXSG4rFDPJ1ycMBbNahy",
  "key5": "H3ZXwEgqsLL3uA2fQR9bQyPeUgtB2cHe1dqX8WQod4AkiiJB1CyaX2mENXviNz92duCZyUaWMh4xFvUMYD2yNTP",
  "key6": "gbZdt9GAWT54FKvx6zAQEYSMJiWvecovBQQV6JCwYHerCWdgiFGrhKpF59MgEt8DUQvMyQFYtRMD8uMHricMJSp",
  "key7": "5Ftsi3qdx3Z3qMHJBp214CKQnPWLZ3cNTSH1Bn1zeSdurhfhFofGiQA5cNPNpwXfKdVAx8j8PxoPoQBw5iiMQqSZ",
  "key8": "4VTVbecNSJURpPu7phHWasdhcvKYHoopVSD2zxpd2vQEZZc7QTVwkWuQpCbuzyvHBPX7KG51ede6jiVukfeft5wT",
  "key9": "6bqHqpqfsHVmQUG5LLJ6qiSS1DY4v4nX5AUbUfhEUd22Y8a316QFYNJAX6FcLRsUY3k6gMupZRW7ymnXyUc4dmc",
  "key10": "3PPYxdoAcEjGAeWhh4JWZd8yi4aY78KfpbWomyMbSdacFLSMUze5NmHmiLxyPQDoE2JmAKiAHejaYih9Jv2eHdAw",
  "key11": "66FqTu6DBHm6jK2nTE7xND3pv73QREP1vMA6A2sk8BcZFptMjSXdQSubiBbriUoWnGEAiNiv3euKEemRitfLVSTW",
  "key12": "3a1B2Z6CaZT1D87Vk4XXQYNkQpYpL1f7ycebdWyDFC7jVK4asPxRjsAVGg4jJJGriWpjHTdW7N2H2osqDmoS4SdD",
  "key13": "3aBfNca88ZPYhuRNTpBpSjQj7wvPzqEqgxcmTETBuafhJEC9AVfhAEgACyHxfz1QdHFHaCXWqFsnhZEkyN1eu9m4",
  "key14": "2zdTYv35cyqqcB52pkJU9VgTcmxPyE8DVrCaNtv76v4NDcTNe59oNrYrtvTHZmbQXPUnNZPdSEjRu7meB8TvNK2u",
  "key15": "522VQD1Hevmvfyqgtq7cAXFnnhQEpjz3Hcw6YMis4TuAm1nf1Z8KUP7Bjn5xcqEYiU9i5kZeB5qJ1UAjZPRQn5nS",
  "key16": "4afPqjA3WWAiZFiSVno8Euz6dbvXP3ALeNCszUVncu8HM2dt1oBMVmqWEJnv72qRCLTWMcHBSsG8iaLFfY29EMXu",
  "key17": "2iNksTtdbvvZAx7583fr5VmjKrpLwmph42hUMZfy3KTbjkFf4eTdP9aNbVeVhy5WFJ5PasCLpDBeYQMJZ3X9nuux",
  "key18": "2DUqjaEYmskytuUvZHKCcQxgLiRvGRQEAQh7brNRumeqtYNzUqqE3UsELZ2Dzof7CfwBY5BScAddwAnZvhhTnPSz",
  "key19": "33VLfjzymJvjwVZhnLjbYSyWAyFvP47SiRvmUyHiqo1V8uAZHALqRAsbm7dRGRbPBLosdL2TfqHkiSBoMmFPRNAv",
  "key20": "7F4g52WBpNBxhAG7giX869BPDmQzrzNr4piR3UwvC24Km86TMgKN3A9KbFbfVgtug4K2Ho2kKR6H6YhWiy4AxV4",
  "key21": "EVw6EgFedbaBMTG8Upg2TVnybJjQ6phmXpZwFhsGdZM9pRPsNhiiLmAxqqCuSUoyCReyrzNP8M7JfbkRKKdob5o",
  "key22": "FZnxyGAFiRvbD99EdDzTuxpVAmqWA6w2sf6awWHocADPNspkF26V1HTVWmD9dQrGpEFUfRRWpzjW8RMi8wMD6Lh",
  "key23": "2VPxLRjV3sSXvroqc9jQxmxrQGzp1Qp9JyeXefNHZ5mT23FRcQZbkyiLi2YLbuHiqi9bB2HdS9yQbuwTVPQ9yYna",
  "key24": "4hzj4dDwMuti2rybfeaEYWpkp63ZF2G5DVwiGp8N5VS4xu78ozKxhXW7vnX6xnet8AdxyKJR3GagTnzhei1FXUxG",
  "key25": "VeELV4Yx8gGrtwfbn9SVCuWyf2eQt4xjLBAh9tcsDvKvxLvGDaA3k31MaXy2egcqW2oxLvyGmqsYtVvHHttpAbu",
  "key26": "2DLcUu2mSkTKRiUP8VsEekK7vzvwtxtEPUTddpzYdKNdVZjF8Z2eZ7iPr2jrPYVAa8z8PP68Tcxz74DJGraF6yAU",
  "key27": "2wSdj35Zt6xmsHE7T8X21VgMx8Nfn46ktFVMqktmBaNcqUZGUxh2JjjeeDwbfkM2FXcHmD3gUYDDgynGbntVp3Tq",
  "key28": "5XH4RwNtNtDAU9iMt2gT3Yn4GAX93uDHEn6ND3ehyAK7Hv5Jah76AaZsrzptAW87SWefeTd8mEKwWEkaoQXG8eEg",
  "key29": "4MTLoFNLp54eEwK23CRixos9asTmwCpZm4pj65k7CFrRuCMaqzUXBLXT3jpboYpZFXoQi1EE2fdti29ks3r2eLtX",
  "key30": "66d8VrPjp52oHZiPees95uJyXHSFgeCnTPowTan9x9cwT9iWSeqe5z4pUuZgbaKi1knSD2HVd3Gb5YvtP7LY6u4q",
  "key31": "4u9uixZatwReaC8FfVYByAbFJHXEufgUNuG1UDDDh19BXmTRH5LWmAxvHTivFCXLz9M7tEZx6nG81GMyyTxfwd3x",
  "key32": "SoHNj26MxKzZGs68XnVP5QL4nNVdi28UkjbckiHc23bNsxAtazEE9LDLyBqCmEvdRKtUFCZkpixVJQfzoE6L7gS",
  "key33": "4UeU2LEt9PRjMS6NsjuNmEFovoitph6G18Krzs8EjqWhjtyKvJQjnbks6PSde8k9Z8EpQNmxHoZ4s4a2Mc5yyCyB",
  "key34": "3WrngaE2HDWTPTJEznZZku9cLbS6R83d4oucwzsSzZGNK1AdpzSzUWtpgkcvp8dzGwhFHvYZ5G89QYchp21wS2N",
  "key35": "424RhqyggY9BKFf886o2Pvh4UiKej53RW3MhkXZ76Hhuf63nK4M9HMS3kM2uvvdLcv5rXnvv3khM5YVWRzZaLr5C",
  "key36": "2jjXX2mFANum4PQc2H4dpFgLKVgRQfDvxkD61fqnFYS9iD1LPqvexXwMcU5g1Q14xWjM9YhUS1iGR6AX8DesV6iF",
  "key37": "LPfXtqpYU39fEZtWAThLaBfH5TSZmt6MLJRfD1PWKcXbi2AGMBn8AZ8VDJcrsVerkto4KTHyFrx3uhNWoLEotj1",
  "key38": "5aLjReYffAakYLqerB36tSdHnEWkDj64wL56maVv3rMypjxNzWgpMdw8LrhznCG4zHUA2mf18DiM1BR21ANrYdsK",
  "key39": "2eXZmJhh25z8aWCwBjEkayw4SVfGxXU1cS3JMpjh4mS6QcU7nSZfmUk7hffdQ4LqvaTvAyms7gSowCoLhYDG8896",
  "key40": "4hcm7B8mxtGmc51RLRZfAGUvajqZww4JaZVdCZfLLfwcKrbEDX26ab1YQvDA7F1rU9ka1PQRdW3YmVCaUdKLtsYc"
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
