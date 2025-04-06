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
    "5zHBRFJdDJMQKwNfQoRbuFydyKpdFfbmNfubDTa6H7eKdLotCSfk4LjMqiA2caHZbBtdtkCQk9GbyQ79Gc3LqPpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KQaRYi4rX2ETsugqk9NEomnGmZ2hX8SfiX5EvFpKG4GCjV6VBZu3AeYm24QsSqND3mCaSpRQDgGTah2JBriqGr",
  "key1": "4YE54oi3CGjjo5yqWwQmm6f2s14Cw7zKYoTnP6x4jXC5aGSYeYZG3JWrpGzbPYDYgYyAyZNjRftN3WM4njefzCPU",
  "key2": "23S32uwDtj26YwmUZmijyFtVoPnst825GDVTwcSKS9EHjrBvUGHwAx151kMfcA6RipDicVeQWhZF35VxLLDTJsCg",
  "key3": "3yJPSnJQ8XtBEsgijTbxWDcrEC1x1YLKRreMS6BFqyKXxcs91wkxpznRZKocr8ojf25a7X6va5JJz1YccpiSE1VF",
  "key4": "4tGv4Qn34jE118cT9m8eNhaRJZbpfLyUHonfAX3WbCqCdrZhDJNy33nmUyr5tGujeN9aEptiXqXbMYQBEyZebMXy",
  "key5": "7xqWPojJTkscah6HwDoF8mBMc2qm53wp6u9kryV8kJwMRTRFt2ycVprdjPX3NMLdJZXBq2HLQsiQUPcHzapFFak",
  "key6": "ppbaCxyFBDMGrERQEb94Mah23fCxws1WAoKoNbimx2fzTD7Zh3cv8aBA5GSMmQny9Ja23SnKnd6UdXgkwzNNVof",
  "key7": "3TqnepsdK1CFWt9nBpdQW4ZFdAyEKneNxyjVXj4FMtueiLNppMGvu6tB3sbtfDmv5hdaJR9QZGraLCtpg5gjrNLZ",
  "key8": "2U2D7XXKrp62KJ6wB5Q5dqHLhJQwWWzE4jKfVDNCCW8TySY1Q1STAaTpQwWhZPJccghhLGUdmRNXaU4refu9tt3E",
  "key9": "4StKt6AerXwsCwH1e4TyJqT37GQWGPazjxvL3Uqujuu9MQpvxAfJSDxHx5w3XUQYTXeXVxV84dbaaDTjNZs7k2fw",
  "key10": "4t2oAK7piEKF4HtWinfbc8h7R4fMDTbYFattRhwNDiG4Tu7WsNrULorQjS4T5RzCMqBtU3hP9RfU1suHKPiTniZu",
  "key11": "5k55PFSyQyct4eagsNVDKoNuJudYwpMZ38LmuxgZnLGqZJ7VRp4GXDK2B7kxJXniGshzNPz9Emv98pdEHjT5WZvt",
  "key12": "2MHKA2im4gh9rrnJhLGdHR2a8xMBzVoF1QYfM3oQschUxMaBzwPWEJnUq8MbhkqHArkaKz3Vh1Z4SnuokKbuj1QS",
  "key13": "4ZrJZgwG5Dj6ZQR7UMg3hG7HbX9dHLXiun1GpCjGPgRUtSYg6RdSAbHf2TpzvFSzUw2RrtauGLp2BR3E1c3dvshC",
  "key14": "5Hng7xaZA7NbnbSgni2zbx3NP6cnL7xYGq7Qr2kapU4HtqoDFix24kAxTiEZWpCnpGsV7FAjq9wbA4LStgq5mx1S",
  "key15": "4hteGPsDtwW2o7V1aVSZGGHWYfbL62osPuX7xZ8BfFtYGn4Ai9H8Cvvx5xcdpWgNwUdLQeZpSHzdvogSUmawebNU",
  "key16": "3nAMwQ36DibovEauWKbsiBmgsmmSraz8fvR4jii2YXGednCScdcmGXWaJtqGpL5pDcP1r7HhTQghH7fWDWKm55HY",
  "key17": "49u9bi6N4cW4EUyCrj7Cigzj1HDv8XUr5uPwAir7njbTwgFRmRnNjLcF44QnW6bjbPPyWinS8ngKmcHwpGKh32UK",
  "key18": "tXgc5LUPdxVHu6c9w1rGN1KkHYx2rnHXyZp3zh92u9hEGN3qCKJKWwxjV5gqdHHfjL3JpUCDjFnSvhGSBCU2xDq",
  "key19": "4qvuzwG2E3x3gLTb94a4jwXhFA9kksQwwKH6HFCKGzFaL6t2M1szETzBzF4543eZguBdqrkBSoiCUdZAytfq9bgz",
  "key20": "47kPeKDoRJgQtg7spRG3qDFuo2e8hd4yEqhFEBc2V6q7KVDSqzQaXhdZscUNv3XfZmnmdo6og2hpmp13TKqpRT2N",
  "key21": "Q3L75YcVZ1bWq22sFy3EAzctNEz8akdMDKAUZC5XPdUmXKAevF8THgLvsFxUz43XV2JB9YBJjTEg1r7NUB94xqP",
  "key22": "2CDR1QYR6BJQBcfpHDPGtZpywejDDCccdgVVdV5fnnjb8RiF6iLpwtMGLUp6ZzR5M68m66tNPqLoZ3rzzZrqTiVS",
  "key23": "2LuCW5zFYwYBYwJ3iDsGKsX7qeZBVEsFBzUyb3y9Bb12ATfpyU2nNNLhSFVHBCyf8kutcWgXppfxMXPB7euRovqp",
  "key24": "3rCrGAKzeRfXB64LQFR4aqJdLNdTXDQRbrBZQFEcPJieFSsMy3eGE1xjAnfic6G5ZeTvZJFsL8quhLH3kBdtWGkU",
  "key25": "4MK5aMDaAF2k1wBo7QHgZryYgpHwbq5PMecUSh8AiPBkh4b1gcaXs9kJY5Xti9TRRx7HNWrWworFNLopwgJF2v4v",
  "key26": "3knT5XCANES13s2uQgEj69e1TkppPfynrZuK1cjpviBmZo3MygCjaYf54PRLXshtcTkRjHBeHt8W2p9o94nPnKTH",
  "key27": "3kNDCRr2xfgVfSFgMUGfVitpsiUGCwBHfxrRSfxKwPWoH2bFD4NmRcr3Mv3chwj5xJZaVE69TSrdorhddSD3FrKx"
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
