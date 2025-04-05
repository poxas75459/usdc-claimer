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
    "1qogVsMLHvNS7Zo3FbfDUha4854vCUG4z4cKQRjEz1KgtTvW7Z28uz8hyi3UKnpGqqxXzYS471tjqgL84vnGHMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkr7dPqmCkXJZvs9kErH1nu56ZNpbjbbNuHBbNBZ11JDE2kvcA5EXxHNixPxdcN5xtYy9zp19L5Ys55nQj5QQp3",
  "key1": "3DmZrBfF9v6CMtrCsK2wxsWNPNLZVBpHcs5HmJsTbqXNFq4pVBPRGRFjWcAXBDuiuK7d8Ce5Ku9P3n6wwmBTNq1B",
  "key2": "JeWFu7ZPXLAssjDPQ7zbC4LYF5eGFJhmBhKYMeiwzQQmiUZTtuaBseTrWY8pEneBGtmPEynpn8o7yvtPESFEKG2",
  "key3": "3GcK4t6tS3fAeZyXysfp8zoRBWGsb9RBoH9RA8Wj2Bfjem25hnjfSorx7oCGDE1EziZW6CyaDVzgBX4n3um4aEpK",
  "key4": "5werzG7rHx9WiBnTBvQ1cQGA2ikAfYoypsYw8dg3bmt2aJQyn5HBKptTixUkdaSPHqBaojptov4Rjba5qLkVRfpE",
  "key5": "hWT9S7XdXX2pHcpSjJAR1BodjtQ98n8gimdnbtQCuFkMeKoiFxYKgsxpjtdoe5jBrktYyjFaznrkdrEhE1HqqD9",
  "key6": "5dCcbgZeUeHkPmZfqUDp1UUDoNaJ38D7ES8Z6DnFQuYyfyADnnYJncN4QTvTs4cZxgTy6gm98AA2qovnos3oJn7E",
  "key7": "ZTAM6SrEcZkj5xtYWvH37jizsVepGwXRXkpsbVYCBXkVbMHd8rcse8rJMPaXuGZADZZZV88fX89S89FDRbdxSBD",
  "key8": "5BHKQ3aNfZGSKQXA9bhoBzuRoEXX8xmqZeQpzFhBMBsGHx5vnTnydd7UPCcEuDU49HNjwAzeswgYH5yirym7MuX",
  "key9": "2oRVRS7Cjy1v6roPoo4haPeiUcfS1hJbALC9KfhYrDxrxjaYuALzoa8bm9DwNFF9FopbCVEEeq7VM928sxAa7kg2",
  "key10": "3pf5QTJm6x8ximjcka4YsZ7eLG7okbUG36dS4ufxPuzyarFANhBNB1NSZ3AxHwPGoupEgJ6xRKDjs271EWHdhvw3",
  "key11": "5tLr6JUfTCAxGLrWVQvCxUqb2tBcxt1c4f1WUwFwZcaU2Kfb7memynq8vxqTJVUMwx4vFauV38D26Ar5cyZxo9NK",
  "key12": "4KsmnoCbERsTXg18LT1tU72cw4xLn9Q7gmNbNMZnt4VZUQGmfPpk9BoQwTeR581k16MTTYD2QExmU2MGkjKsqred",
  "key13": "ES6vFVW5kaiHPwx3fFGNZwHFy8d5v7eKFzPM2S4um156JM4tQfZJrRSjeipnvR882yWEFXHKjS4zUeiwyP2EjEK",
  "key14": "33GFYEc73hKnqQE7cL9JaEF56jT7gEVWMiN2Rbkr3HwsKuuuxVKEUSsEfV7SPUXyzxvrjSNVxsVujWd7o25yymL6",
  "key15": "YSCiZT1wd3gMQF56J2Yj8gVCqf1o1Nj9BxDGqfDFMjVdR7YRp5Aw6zokWPCMYJ6kwYHB1sZpxM4tuC67WQX5o3X",
  "key16": "4F9AKJoa5x4m6Q3aky6LoAASSZizabw5xqG2qGfwgz9PQiBW2PRPyh7yoBvMQ7qFsKBj9hT3cWKMutcWzrZMJquR",
  "key17": "fiNLpUYfo7trqXbshQqqNMAL3bE9egXzw4fj3QLNdmvzumAF9ihjmxJMJ5aX8byJfgA8WRAjsBu9RhHrchXY4XR",
  "key18": "3ahQdgjtG47oLYMpwsya9R84injZeHwy6otTxnnazn7gMjq3Pj5NUNx6eLWcJ5GNSujAU9gk6BzPyVaznWhmU6i4",
  "key19": "3ePU9stAF8yGTT52hT7DyiPJxnVWMUxPV9wFeyrxKmxS3Qhhuh7QJJ88EXp73Bf53jmB7Dg2R8q6qvKv7LjgFgkE",
  "key20": "2djtBxetEapXLyK73X1uY2KY1xu7ajBjP17jY1KtbsNSypyi98gDK7HEpoVAEGDnmtunyVoCtg6H4aUXzskJ9oyJ",
  "key21": "3gL81nLMLV3rLbFguGq6bLqGHuedbAjQQt6QRJfHc6DQJRNQacs4YqbV2BcHuwrpkWtJvRMTc4uJ2sgKVN7xVjLv",
  "key22": "2xrgBTYQpZayJPHpXpGXsuPo61vnksbWBZtxda93oAL8fd3n67BHomL63PQnzM9P9YoZ3qbNfN7uPU56ggrRdaSV",
  "key23": "3mJYzGy8LLeBU7L6qm84XcauTFwW6zoxX9dV2R36UWa2gj5o7KyxaCJFp6413pYiaWr1khmWFGgHoK6pVX1DaY3Q",
  "key24": "5w126WydpCGb1JuXpVm6oo2wVdqrgxLB4S8gz94yHY2joHZbD8Fs2mpFm5c3nuZq1UurirxV9gzRWafuNLNfgqqN",
  "key25": "3zcABW7Asd7KK3CvNYyjCbRUmDrLWQLYgKEW57tPkgkMJd9oNo7RjjATa98xKsx3pAzs9PPMnp3H8yo4Rax7qZ63",
  "key26": "2RHEdNfKdaoL6qWjENn4zMAoJ6YvZjvUrYeg8G3saNLUAnCbac9tYhuYPKokyFSc6oeRdfsWxJp61e6LAc3VvTzw",
  "key27": "2qC1G19aULCY4w7ysyXKzRos3HLHCL7qmjiS34ezQ2ZzxBUzRfhSYWSYVT6t9ZbgvNERcWrVaJKHq99WMCghxKAs",
  "key28": "D7ZHSfkJ3KzWnSrGQh3M99xs6wkqgPsk7iU9awC3WSZt7pSAjvJq66Xpraspn5WRQ1U4qmnTozdJabodUFM9pnc",
  "key29": "67zu1KYA99yRjxCuV6jAg9xuwCykzsLNEiQWeMtE3c1XJ37LcHEGAfC45rPTmKrAyydxDxFzobNUwZpBPLf67yE",
  "key30": "3ftwPXZU2BDqfBF9V8oWWjMZTkJwiz586jb91VonP7Mw48vmPaBWcEDxNWZE1kitpnYLfELDAjJJLZX5XYjQS9Pa",
  "key31": "2xJLdRyLSsaLtK5Ajosmd1LB5W81R4tGicxdzdsVfiP2nSUQG9WdeeBsbmcXBBfshW9BkHoYeSom4FndXFZ33yzk",
  "key32": "3cw4aQWX4692DUxuP2Xkmg1YQJj447mSSW4PW3eKaBpZjNZQ1WbngfMgQxhMkT9GHo3jskV5QPHvEYhnXVeFi1q6",
  "key33": "3Xn2F23zWsPWb82wwP45vWtgryBDugFi7LXdqShSTnTACPM4JfyxNMbdZ9FjZuPnCHZD22xaF9FcBrGNkHRZgzZe",
  "key34": "58PGfvoXpDZWRMGsKSHSZjAZwR9uLqcgYMYeWbqiBs8WK5qRqsZRpkfbmasz8gS5sHRqiMLqkx4sqAVqxC7HFWPn",
  "key35": "adQsyJSMsj4fPBLRSA7NXmSiCt5dJUFYdmy5sajowVXQARD7b97iS6zfBHTm9STwq4E9TgH8aR8dca73DZK8cVK",
  "key36": "C2P6RuCMnWXdnpxJtrSQjugYpGbuBFdPTUv98mo9xeZDBKjNn4thKiy8sbLR82REtWxMKA2pjLyUaUtn3uH556b",
  "key37": "iBqUCxFZH2qqVzQVYQBB3Y4Qc1gByLdvVa11Y7vvNNzq1iigUrp2NEh5ahNFNxbCVCP9cYatuaHgNqVCUcVovEz",
  "key38": "582ytCZvtaweYrYKdFDRu2prW6rbdsgSWfBF9X7kC43fZUmnHc3UZxFWa7tLeE8LWe1AkMu2qvVpvgTYtMdXZtUM",
  "key39": "4zgARocknjSRZyGkAQbcpW2Ued5jwLwp5Tgd16iZxQradyVt8hqZRN6LuAwszy6ghW6D6ZBjrivegWxepaxQeQxv",
  "key40": "4GJkcxFGSghkX8uHCWAFRaXTx53EjBGRMMRKTciT2ahXcfTeUasFpMVa82oJSAr71uR43iHhJfWvoi46NFUUpXiG",
  "key41": "3b9YG4WBLhz1TQAy7oXXpann4SMXJnce5fsNcYRvkPDarCm5F8aLfR6oeGb7RpnfGLMhd14cPfEPZ8gJYaWumTsM",
  "key42": "5JxFpcnYLbw73HSPXbXVHhC65LgQuaC8PdPVpeafp4rkUtnkGa132k8HFFZtgKH9gZFDScZxRLkBPycxpRQez8F8",
  "key43": "29Krx3WWNT15c4qmsVxHLpyuK6WhfLXsFnSGkoqrVF3xEQmKymdzMyYXf5vVNBPQQbwsHeA3bNgYxbpZ8qN9RdSV",
  "key44": "4dnwscq5vR41wtpZ7WVtQEAWTjaq2mXMPkQCMzdrKUBmWUjT5NaapSSqeRt2oBqjNk2Ym4ZveZqLVgBewBZZyAhg"
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
