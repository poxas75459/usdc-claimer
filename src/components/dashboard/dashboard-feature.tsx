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
    "47tvakFhsqAxFiWgKEPasQMtMUF3m43TMMiVsMCrqEnHoPpcm6wzkfacBGhCKqx2WNEjWUooKkBoDgopWWbADkU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KEDVH9KYexJuwbhJR1HGZvaTnVsqeBq82gAXCqfGRQhqPiNEzHqoc2sPWkMkZjwKq4n8GkRctu6UTmnoENUfvML",
  "key1": "u3NssaeukZASUfqnWQbQRBywVTQXjQrSrzKyaHBxt5xkbz9eoK7GKtYdyUpwyfDoGABc3RqAGZcRdxQ3kknSCFn",
  "key2": "3euS5V1VETa4sA8VDXS4GiVfhm71ohauvZ4swjCdV26TzmKSHCCYz8hi5AsHVvS9ntmYKrjLA6DpjqD86JnTdQF6",
  "key3": "4bNhKFns4nbLz6FY5JWhTssFMGrx1iV5LKCbaMEAYZQAZzgbquPBFw2SBWCjKWRiaihZh7jF8baG49zbbgrR9Wwk",
  "key4": "2t1SFnpZ1RW3R7Tajjek1SnKJqrKD3eLns9LLMq3rLcEE6sPjR8z4dMRhJiZZRG5gbxw9s5jnoAwEqwtPvNT2CvA",
  "key5": "4VtyJA7mVS4fEDKU76QnN4vrU3BQwVboQniMuSUPRSZf3Txsow2chT9F1YemzEWJsefYVmGBRDR3NMVHnC2yLuac",
  "key6": "5AM8QNactUgBvaBXTpxZKibMARFcTwbDuFwjrjXNLvPW2W8o7mvpAEEAW4urRwDDt5TS4Z2SBxi8dohojjvx112K",
  "key7": "5ZvdxfYvQVwyGRw5ucKS3Q7CzP1baXzTpUFENHcCxXcjVPAdLPjWAmpmuAWrtga3ZBtg7wfAwikbUdGYAq5cEow1",
  "key8": "48rtxNdSwPZhC74sPthnG27CtWv7c3tXp8FeerEv6CzS4aFF6jYAkcqnzmPj9oXT3gayh5Simdrv2HATbexfcXj9",
  "key9": "kntF9mnRmYitoKV6LopdeCks2P24hJhChwyTZEY3aKZKsrguUg1Gd5yMvc7EatQuMrzbuXL3PyR8Koz2ivPToVQ",
  "key10": "4EHqpXNPtHXkcW9C11rte2ejkMXFkmyvSD8qjQn2TdJGUSxZ4qBAFnEsbFZxy3SB1jYWaxnG8VWWoJdHHLsUyF8k",
  "key11": "63My5d9dXiF3DjPAVymCmYcZo5Sz7eLGYmx6wqPKehP1dE4rBCb1q7GsVELMeCro5KYfr632urNfPDsDiYkZwSXR",
  "key12": "3rQjFC5xr24YVARbmvzNKfitCtJC9GJb2ZrE3WPLrMJL196PETYPPTeKHairAd2s73RwbKDFUXsMpjf1ryqLCzyn",
  "key13": "5pewEiJ3VykbTWzzFS4q2NwJvFsp9j2ibjJ38H2YNUGpzTg12sXfvXVPSGows7pZ66z9QYuCw354DeXxcXatC7jc",
  "key14": "2XzCre4swDsrR7Yn3WzmCxXVArGBj1jKANqdTaYBU9ggx5CYwCoVSwJ362Zc4htBQ6HCQauHwquN44foz4EGvMAB",
  "key15": "2BLavx5w9vkHWPg6DHHqQgsQ3BuTs8XB4zTDVrbbTapT6sr6K5YATNAELpinxRLpdkTQsviTkGAG7Vf4ax4xk2He",
  "key16": "4dpDw3xXhocKPmujtxk6bokfAkSiedChg6V2F5pJqHN4phfnkHB3uqzyg8vJra8KtKCL7HhKyeQaJ2kwipT8Q47X",
  "key17": "5w7gbNmp2o4rkDS53NHR7Gh3HqRuBAnQfktVSXB4ShkjUGByQ9sjNdaCsoTzkf431KswUjEgr3EM8DGgN67QgECK",
  "key18": "4vP28vLJUHQt9ZLNMvNipeH27GAAEBdGwUzpTRsTF9aFqv68VGR5BHqoDY5DV99zDoi4MuknBhXXrjUa9xEGr8fN",
  "key19": "2CRBKkbdycS2bPrGwfspWWj8WA22TAFN5r6WMzTSAaYvc3qHWgmpaYSRQ9X8TFXp5pEnYpXpVG2tzqwpugdwUXYn",
  "key20": "3JNNbHgFQu7wBd4jQmazJhJdRnEiqwcYaExFSDSgQ6YbanBK5hRwmfqbvnCzDkaLMRswFXRvcvk1vdVeP1S9RdDj",
  "key21": "3vYsWUiay5XdTReziSne2VeDJFt7AimsCKxecBhYbczUvQnJRuDRqfNJqVyg6EfQgbEJuNE2Qf4nm2vmTRTy6QYZ",
  "key22": "3Ry2NYimxqf9N2tquHmcxW7dwJkg7RtEZPLrmSW5zpBbMe5gBkE8n7C8VQe69h4CBRNDdJUETpL4c3dqApxf3oTg",
  "key23": "3Chik514o2tzSiu1JwMub5aXcwdXsNK53xSysXK6FE7W6x6sc8DqzmdY2Po8sDrS8977RtsqCq7G1sVu6jHmL7KB",
  "key24": "5ioA8sDGBfd7JsHU7FvrPQ5j15fkRPGuMJTkFg3md17FZfw3mQLWDXaS98ND2dJArEaPHqfQABsUivT35HYgENKW",
  "key25": "44DAiNctRBYzSbDcA111N7gXAVfhbnh8sowtsvp8R53fzPjuqFPyo6V2XQTT6SG3tc4TxoMikz2YBjRfZG4Lr13o",
  "key26": "5qzXJc3AAXi6WvkuA7KkEUkwFSwMcAYbFRCAq52QZaeBVtV2KU6jbLzNYw9eZYRhuyLxArNcAo2E7BjNPWjivTDh",
  "key27": "46TKuTBzh4PRxf7AREXWYFa9z1pVJqzzCxt6cbmnh7mnTqhzsLFqGH4EaJdNMCbAf7V3Wdm2D5fhRVtyJnY9WrLw",
  "key28": "aViV8KDZ7aKjuD7rB9ZJbK9kkb54dv8fBASLJgbcZif27zHebAPL566pa8Bs6gWTXPUvNNfRTXHzcRFMQzJ2UCw",
  "key29": "5dJkARWnGDEedxYiPQmqEQ4KLXFbfNexwJTxVnHgGL4Zft9tCfE6Um8k8H2bxQ9PTz3hLrHCtWVsByYfjaF9uaAZ",
  "key30": "i62Gq6r8s9CKHFHKi5xvfWP9CD94gtXfr7CHoUoDpXRA1bMa8JisF34kRYeMJqjZTBCKPwvvPyWfRLW6RHKQ5XN",
  "key31": "4tEKvVdq7v7nWBbxzDUt7YxEyrHZLBNjFWXAB3HK4A8b5gXiyKc6o1wvQHBXq2G5V9P45Zqecm7G4QRfhP369U8N",
  "key32": "4h6swa48bm14mVn9aY58PiN7vhDZyaCZZs1CAgKrnWuKLgQudwvF36JZDW6ySdV9afLbi6RyBTJwagdrAQoXQdK3",
  "key33": "5N39FAZAbB69Yx4yj2K9Kyj5niSaWjHv5d3u3EzCrKjS5ofo4xCNAH3VtcFtVzUD3qfDy8UdevMsaekVi29ZUdVn",
  "key34": "3rWwfnvJjcbtqTggFK15sz254CzYt5xnyTQVcxwdsCcoJB5AMNYUUmB6jrsC2Fdx45ybc3BbkSL5z5XQezx6UB44",
  "key35": "44fVJCNn3sFHE2WMwZyHwW1v3Ty4oVGoHMENaDASxJquarg5WhT6HnzbLXc43B7dmEKJm2zg6xA6mkj8iy1pXygx",
  "key36": "4dwTx41HEZTMtWPbUheMjjVgKZPKYc7e4UsaueVfeML2RQCXYAwPehrZYJEg7zA1HepmXjcFpadfsX87FSefAYpA",
  "key37": "4UjGhpXBJcD7ZjN6qRh31Rj64dTT6ff1vEt5YYF3G8MEdp8F2Dy5Vnf3tLoBs2qW7vgRNHxixWF5iw6PGQZw9N7o",
  "key38": "sPnWPoHs51mKwde5q8b2id1u2PbtxNWVucZHThAKok6r6JJ5H22nak2Bjb4MqRqekgYC4xF4d569RuHRv5MbmoD",
  "key39": "61kmChDR5gf4qpua1tc31HvXQyyhastFw1MpptZezHp8MKHukWXnimQpRmCLDpoh6JyQ2sMnkdAyiGNCWLNdbo4e",
  "key40": "51oX2HrZpSbbDcjwe2RackK3JYRaDGPg74vCP2LW19NK15wgQ9gTjbCDrChTdJA2hC4LKh5dDzLg322KeXAK4KK8",
  "key41": "9L95BcFdybqkqqZpV83QX8g9CkvUjM5o8Y7gDG3RqL8tB812rJx2SgaqacL1AheVuzTLDXy1tFisEcJNQTxkHKY",
  "key42": "44Bv7umgcdDLzyPrCp5u9czrqpEyA7CbvQA99zT8EwQp7qTLuUPgn6nZtJY55VwfJvH764rctcY9jqWSzryJFnTD"
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
