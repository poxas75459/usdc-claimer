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
    "4nap1FEBi6cTwM8vSuoKcZhrn1D5P7j2oxyBemzGaj5G29GhYBkAoNWoSXo7PqsSVDxRWJ4Wfj4RjjFvxR2hqM7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjaGWqUHLQiNvsKfQayPr9rH9tERwBVNfbwgssUiJBu3AcqKxDdAtMYDjh85HXuVnF2VgXvq6mkrn2AxF33erBY",
  "key1": "4vNwoiknpgoyFZ6ymtevyHYtmnNCwmbu2EW8yQyu8UwbMtQCkW6uXN29qHEqTHSfqu5rkoHWDVYpfCxVQziKFWGT",
  "key2": "3xuTcK6RMWJPJwjtNBQ5sVdJJcEPSD3AfYBxbssoURmsP1tx8SmGnrKAtDUmHghf5Z6UPXG2vcJXDYgSazvHh2Tp",
  "key3": "4NEfiv48eeNv5yaq4UCkEUnci9yYAetETkJecA4DgS7hVjgXXKUmVsBQyvgd2RuvJxXNQL28DiDLkHbJk31yrwjN",
  "key4": "4b8NUvEfQqKpjgz5ZZ5QQ2aoNBCuakGaNrtFWogdzLXk2GKers6MJEmmKWASEGiabZDw21cttTToMZyEKGhp3EfX",
  "key5": "5GXSf8Mg9zE3ngnbf2bXxnHqmGP5XmrrDsKNDycTKFWS8VnATjxzKLfWhWe1KC7gP1EjpgkLddatL1iD4NEjUwPu",
  "key6": "41eAEea4zkbvFdT6DnX3J7iqM99d7kgBxK9HVSdZPAd3Xfi1S7jJxVTrjUdXnUyZyKGCm3GQGHc2GBvoV1rw4tbB",
  "key7": "3LuXS5Drgq5KfLozCqrBQVMnJUzHGKC8nFzpD21qkDK9cJKfybUqQT33g3mFABvujtcABSmf8GjdA7DFYfdN7QQN",
  "key8": "57kHPhNLQGsgAGWfwCaXbwJXE7WQmDg8VBs9bAfhU8WmEMeunAbdbKQssjXTty6dmG9i9AHMiD75rRBYquDnHZ9L",
  "key9": "3MnzjA1dUK5Hme3dPdmm4WBm58cmSB6umXHys1YLZ2MrBM5ZSjHgVrWuMwRSYeVso1biojZRvoRwxdTYFUYx3M9w",
  "key10": "2MYyXqoYxpmTAZzVRoitfYXaUWLw8eWC2xRut9eRnPYLW9cNogwLXnkgSyRcVdunh28741KCGY3ND3Hn63iChYJ2",
  "key11": "2JQm37sBNqXzevsRbtzwV6oU2HcGmh79SDwhoqjT5KPQ2scd3ATyco2bhQ7khuZQB78jH5GoKCoy3wUviJhPeMJo",
  "key12": "NCZkt5mZy46ytJYB3mhtLadPNydnWsaX63753Xbhze3Wi12W4rLtH5wJSp4NFXEdZXrCKFqVRkETKi6yz8sG2ga",
  "key13": "3XaEEoMH6iU1tioKNMaqwbzKroeKXdT3wdrjhKRKpY7HAL96EcfiSLDNCj2dMmmxHLWyT7BLL7nGPieTqMnXfvvp",
  "key14": "5XXyvgJSK9F2FuTvLixk1pyZYajV5eCj2eWEw4dbn4sqejPsHFyM1Ma1SXZVnGM6Skbq88SpwzNkFe81qbwfxogJ",
  "key15": "3Y5F4kPEnfzitKry5uPcKKLK86Q1xLZ6E9aDT6x4p1B9YM9f3ucr4DtoEuCBTj9hEVgEJLtVdxQXrThR3Ad2YERQ",
  "key16": "59wXAfRLWMdndLVftBjQ6Tn1tX5uYYthx7uL2cukp4JEQghBb34ePPfhAzgJt4x6ry21As1uU2C7LmPXd9seBfhN",
  "key17": "5EoXCc1XJoedFY8WDzJkPSXRb9nAF7UVvnDNPTh6vpQzYxi9FwqF9DtjcN9RcMN6YXNewDTofkjw1NxEBBRstZsh",
  "key18": "2sTeiNXNSKMXftfFxFx2G2PgjLiBYjWe7FUi6ApT1kKWE7MsQXeqigePzeYfPfiXzxtp4Z8jFvdGqs1s2syr8y4T",
  "key19": "5NDccq6iz3kQs9Yuof5f2tUtYJJwjzHzxqrSrNVT9D5V2yUfxAvnmFGPbnXtLgoX9o7mdX7wCL8YDomUup8Wt1ZG",
  "key20": "2QscN7BkHYRNr4UmFLe6kqVBBBHzM5Q2Ui8QzKfNTPgRVwZzqmF3tmyNYAogNUh8yJfS6DJisAfRYbRvUfvy7HRw",
  "key21": "2rqnHBzAgM7u8m5xywxPCVEG3AL3enSJsrUqp6nZDhWGZyjRaus4SxRPioTfZPo2vjhmEh5ozfL81FRtSeKfnKPS",
  "key22": "3hJ29dmWhERB4Hw85SKMXB7zAwjh4EFC51VvJMmEdstykhehoMRiqMfuH5MEkBxgWiFpuji5zEkvKDmFsZjG4tcb",
  "key23": "2i7Qo9e3q6SmVVyyshbUtmFTy7oN42w7x62zhx9q7Vw7EgXdSKrvcnBAoffQQC9nVbNDC6nTmNfmT477T3EwHspf",
  "key24": "w5bhsromd3zcoq9EDA3Ts9E17ugCbK8uEbmf1YKYBCoEGuRWE3vur7fY2d22Q6uocwAxDsSJohfXUECrbLeBS7x",
  "key25": "4KL6x9zwsCtgtU3XCVQttcA8DMw13AUif7dbZWtpjdEPqCEJgo9mgTuj1VW5fLYceFwvsY54XZEcj5a4tkVJ6aMk",
  "key26": "5HaJma93TRzJJBvbZu8ojrm7DZEDSSZSYaWM11aQRBWjDQst4ANRSvD4KYRQkKW7AuS7f6ehPFW67edTu66oJYNt",
  "key27": "nNg2BJL6SKhAN9nuTahzQUeiCdY6T6c2BmMKm1VYng6nCbG1c5rguQDmDEDm1qC9szQSNnHo9ouPQE2WmfkcvQ1",
  "key28": "quXN5Yhs9j8z29yrt8MpAHm7RwyagrCejkk6eoZ3MskRmGQJBWGFnvG8kAV35NVHiBXjwfhYP89QrAb2kEzQCZd",
  "key29": "4G1VqYgTFQChsQ9MBxMJsidZcmtMr2uebMRhRYQAgCipus2beRiPJ2zf69EBzgvzqjhvUguJxr6upnSagmdVsezC",
  "key30": "jz5XDgivN3AZT7iE3r3E3pS2CLBrSdsuT1Q5X4jih67DfwUREDisPne4ZUKjDgiUo9o6K4Ubw3XMDTBULNrSqsE",
  "key31": "3UAJ7Cgr4pnsNFbnJG7ET7pVSCVvKi8a1Ca4AeA8Ud1d7jCov1E8TfPpmMtVpNefE1E5HToHzyd5shMgQNCwhQAY",
  "key32": "29Tg49KGTbZN5JbRyEMe3KbbqNcKjQ6nicB3XJZzM9zHCzHEQLoL62zCzRGn23Jb2DViSs7bipsEaxRJmBn1VqMs",
  "key33": "jEeSGKWRK5K3XwYibkjznu5DxPqUKq9ejYnmtyyruhh9W1Jtpwyeed54x2khqaDrxQgXeiKx5M2bYvqVPR4qW3H",
  "key34": "3x48wRW59rLqTw8juocXfXpwXzHKjSRWRk7a7zMN53fnCSiGemwQfwEFWejK9VBLQ5mYr1vi9XrZBEi9Mefn6JJH",
  "key35": "qeESXDzc3XiWwEnCERjiAV28o41w4FAuS728yeHh6UYzUQzpKe1habiMExdUpkSm9M4v8ZuyNK6Zv9WFE8nJwcj",
  "key36": "2vY2hJHwX5rsev7WoDDwgdHMcpmXyeXSTLSGmjtNoFACVwotVuGQZCZqjPyTcvHqVATKWamEq4iJsK2noXwaJrXg",
  "key37": "2VRTDm5jA4ncsgQnHWHb7s1W21dBH2b9fgSZRXQYmXVbEnuypdVoYjHvaeskjpAmtgdaGp3AJcPHS54e3YX3fAK2",
  "key38": "Ut9qfXW6UsSQcf9DnAnHTcrfJXpeciBH9FEfCXqwbiEAoMBd7bw9J1vAdbkB4p597LZpEfxvBHHCNZAZjFzc9o6"
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
