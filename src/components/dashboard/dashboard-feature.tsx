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
    "3FqPgsz8jgeGWwead1V9Zkdga9W8ByJ9pc52ZB6hybzmrNKvfXmfot7D8Scxuj9sEN8mo1WAfZ27i1W436T35M2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8UpYaEF2ZZW58tzJUVhY4dTjo7tYGXTvmN9B6FKa8UE77UjXph7R2WKczp9vqHG5KkcdhuhftLNnzWsRh37j5Y",
  "key1": "3k9Fzvta3NhqxKBciLjwpZ5CH5TSRK4FAPaHPHPGuD63AayiV8nbW5uBLF5RjYySWJYQrLZVjAeGH6yBfNtArYH7",
  "key2": "67XC8h4UszzoXGHrN2MhDanj5RX6k8tb5YB55ZFyi5E4iMZ17qoLz1V8Na51SxGG2gV6oMPhg57hFT1WxM6wVGGv",
  "key3": "31sfjvhXma2ojb8C6L7QtTyapNm4tXT9bjqEHCXams6Hywxvfe1PNnm9eV3PWXHE9f8e41rNC5LhZpaeBAPJpbRL",
  "key4": "5pM79xz4xdjRL9xWMqqb8gvKWUopn2VJBWWVxorLZDSPoPQg2Hz5Nho4pzX1D7vnEQYt6cyuRRE57EUcEsZ6FL2k",
  "key5": "5bT7ZHCfZnZDyggnQyfpxs4xVWQvjc8k6uAHAaFWY3omQnJof9HBp3iACoinbiGAADMeWgfc4YCTnN9haysJes7Y",
  "key6": "3Vwtke86DRNJ9TKu2HBx1ZiYPZqEP9CW9WwT1Trd7VpdfVvjmUXcRn6UsFzaq62BPexvALdXBBsRihGSM4FRjSou",
  "key7": "rqdjZRCXRLFt9gtaCvxbo5ZgiMfj1PRUePwyXUrmCn16HJeXcZ3wRvpfA3QP5kT2UcJ3wdZcaGcVdNegfwQRTFf",
  "key8": "2k8FMnRhjJvYcLNG987vps9qLLqj23vWS7DrWTbKiybUkiaPM4qzUADp9n7vrTrPDtkWAf9STddz4euaHow9Qdbp",
  "key9": "avdpEQi9ZhhH1ssWEJkZv3123br6qx3tRz8sP4NMseghPF6dYETkF6pJ4ULxW3ncMTCiH7mCP9qjpecvAcyAA6u",
  "key10": "ss9vqVkTy4RhbQnkJxJqmFYFWKQawAvyXYxG6LRqd4XsYgYcAc8bZbQ5rNviBBETfsUXVi4MCP5Pc29HFScRcLk",
  "key11": "3VPcFBATvLDzCoGga2hybX7GxugkPEJejvzLF2hwLvj9pXvEzTahVgaaFBQDhjPhFaMkCdfw5r3NbqpMyRF31UTL",
  "key12": "2Yk2Q7MWcTzhPJEcrHqz5HoiVJPDhuajzhh5rUCvgSiMgKEyu7G42bvVMpTLP8epe8ixgJBwp6erDaySXT77R31w",
  "key13": "24gz7i6STtVozZzgt1unAqG2ijFR5is4tuGPpXWZdkP96ZP3DEkYfvE4rvtRk4hgmiQapLQkdK14L6LuGN1yAneK",
  "key14": "4Gt6UhsajkikHF8gomGUQD4DBACQkQW5VVuBNUub3pRsGuGs2ST3vHogznnHsaR6WqMscjzBp4gnvPmMDPokLuY8",
  "key15": "3hqpEzZiWJVa6o5DyehhjPdAYPjCcMGHtmLXiEDFimAZGdfnS9hZdhzq7tCq3vA7QTGALdMtoELsANkdNNxZmJH3",
  "key16": "4priSUdiB83NZ6xaRQfYMjYMz6TuJkeA6UdRCjoyjmEUvDLPRg5DxLYcARuafLcPGtx6JUvpkvsUGPMNHyu9J1ze",
  "key17": "4i2Vp3mZ6C8qC5NZRaBMrJnWQzkvDm9ARQBxdM54i2W1FhMrghQR2NGwSLKfB5gnkSEvPqobr7FjAUkNeNqUSKmu",
  "key18": "aH5dhrcTKqcBFMWXaJAP5p8NY4ck8PvMhEgJd6a7p5e27e2EeBD2hCxeGwJY2Wd1RwE3jidYXXsgR1xkEf26uDN",
  "key19": "5vvDXKF8drP2CUqozLpghSHzrLBFDNTibkvVGqprzXhoqn7GnGRjgYqVQbsf8bbNQJ8ZYpQxQnAXdbgNoMEXQY6n",
  "key20": "XmR4j2xKz1qC4gV3pwwfn6o5YZ7GieU1911QbxkD6KxrnWLGwnnFdznWDffaZyB96kcSrtVz4SSaeFGF6vFuJW8",
  "key21": "5vc8SkXqaErajpqemHSkCRh1XGR3S55MJr7fyebTfU6BkssPTfjnM2JiBgg65XnuUHqLJAyNRh7Zc3km3UndK14v",
  "key22": "2nixUFJx1E6wZz9xYZxeH6KX1tb8TF3v2A7vjBbzv6krj5w6hfUurHtnvAqPsiVCHzgnA5ZXSJUBRZ4mJcX8Ediv",
  "key23": "cKqxfXGR3CDYEV6wRAsNUCYyqCu1Frrb6h9tPASZmZKBDatUgpQwD1pEcYchMcroynAbfiKbrAvZTUC44Hi44fX",
  "key24": "2no65CvLTwQn8QmGrhjn5JQ9wkZqKKcrQnVrRjJXNpS7ngopqKRNe4ALhzJozH3EWQ6ZEuLiKrFKMBs4JYeMY86y",
  "key25": "k67HsyrwM3nJoqSTP42gnoHJBkX3ZNwVdqUfHS9LxdEHYr8QPcky3uGDSxpJA72UYBqioEQSutK3jojdpFo1WPk",
  "key26": "2CvmAxnuJehX6PVPrpFv9zw9R9KqKJ8AjH5HJoKY1rTiGMAikTcxZAE91mAUd8syaK6bALpowjUM9RrsRLAxxQqd",
  "key27": "23ffsHVPfQ4pJYmr6msoRUYCTJiPbHGPmXbMkMzV8dQ1aXCM1hvmSVFo3mqDNvtPt3BDGxfS7nVn8g93ktDJpLVG",
  "key28": "29ibCVhajyZfwNQi5v6cTxnLh6N6c5cbWr76sZgC37CJbzCkoFm6RAtSnvRKPZvXCvJEy8kWNYdhPopwTrAEDUot",
  "key29": "5oVvRtBMFbHvrvYaycoRAQ5xMrwBX8dVkZpNLjyJLWD9GWfnnzYgPjzc2CNdPhTNkNNBfedsc8a5YJuphTJkXMWU",
  "key30": "wBXHw2AKeBvyBaRTwqDsqUyDELDUWgB2ebBvExZgsQU3atmiLezP4mgmuMCJpDwvkiz3hA8G94D8Q5wNJAc49a8",
  "key31": "4ab52d1rSHRHR9AWG4VLuW7VH7ELrNN429R2yT69Yz4PVi6q6juVzoqrLmD7f2srh49CqgPNonubp6MBPcEqr6Z9",
  "key32": "bkagDWw6jv4snBDVoEwGtcqbdhsZ7goV6JXrFzyTKNGiLNfiBg6yR2HHQRZ9rbG9dWmGzgGUeReXoZGBFcqL9o4",
  "key33": "3ykyawyDYM9cyWfPeuqpXoVq8H8qqx9WKJcjApZoAvVqMRduzp21twR9zprPXtQg3XcAKSPum4XHhye6GXmRLZLd",
  "key34": "4r19xRMxuqHmugw8kkJwkPi5REoH4QeQtx9S8zV8mPKaupWDQvMQzc5W6KAQ8DPaA9mxXmN4unHfBmu83xUS4QhQ"
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
