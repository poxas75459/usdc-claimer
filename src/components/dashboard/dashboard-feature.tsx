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
    "4q3i3jJkARenTjkizdrevqHf4QnQVE2weJYA9Lu5TCQLdAYdwjHLR7kyM1PvwZKY4Hjajm7tFMJab3P9tupiLPab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZPYuppUTRVRvGEuHrbG3u14bSD4AKazLtCRuXzNAHJne1etzcd6PVM7o3myzQZMz151BGAFreo6vvBrTur7Mte",
  "key1": "4y8Vz2R2hayZqaqrD2KEhz7S3etDV3shG7wzzw9eDV7Y1M8AQrGpDrWV28eTaWhAYEpqQ1Tjdav5Y6qQuhcAnng4",
  "key2": "2MG4RksEuA2oUVsbPPjxsA6MVxftwqU1oUedmTWZjJ6XMwGpvkBZdb9ZvwLi83hBb4Sm4QD8tqyCKKEo1qBSFPFv",
  "key3": "YpCmse3Tx9pXpucQG5M8KMekBA5R6zyJE1HFyVeKPLzywk9r6g76oAkcA5qXctUud3jrjcRj2KtpLyFFVf5PpnW",
  "key4": "3LvRNgLacLMoZQ5DmrobzZHPJvNtzdjkyBbzZ5vndSs3DH4Vg9ULJvxe23WkAhqTtVmv1VBPaD1beyurCsdT5pT6",
  "key5": "3WC4TFFhP3792ofwSc3EBfJjPJWhRiAd9J7tCfVeGyVctqV42hjkpyDauPgTXeeakKuxvrsfCY1qzcX68MaZq5ae",
  "key6": "39nmffYVxWbR6RTsnMB9E5ubeta1DMfpAPAkmwqCdczkh7EVKvYzVz5CdQD5V1Kwt7EVKH4K98BbVtWXu2zQA4jF",
  "key7": "5cgzex2WGUtjVDmdSNTwfJ7E3D1HE4B2i7Xshu1B7npAn2tcaa5EESJvfsBrZftmxW5vGUcc83fW1kzU7szE5129",
  "key8": "4ERdB8DvEDGA4tRnL8n7UKJPVvoAYf7rpx1i9rxzt1EkvigDatFkWBH417sPGLMijaga8riWksFkFSEHVUrmbZZ3",
  "key9": "3iL4hz9mc5udo9ac374JVRzdbFE5BbciSF5WGzkJURBYd2rxCf75ppxjc1NZqbQUHxVPYDVZgiC5R2RC7aompvQT",
  "key10": "25PygprCwaoqb9SU6wMdx8bWixMySqDzQ2PiH7f7d6K1jitVcU8ZcxYLzW8xMf38gHuBSmE7j9GvN9wthfi8Ej1C",
  "key11": "3anZuYtHWisG91dyhkbiapiTBW2ft5pzo1jNdRUuP8FuZQRfBEusMRLXGVzhFcmqTj6ctZGN689X6Zemfwnes1Nn",
  "key12": "3bswWxDsj7HGgRPWDQP3HNjBQm64BK4ifehboxmFm5aCDa7dfuAhnyqPHETwXqxtea7BHfD6jYqujHsD9KMPjLJH",
  "key13": "5e2kE7nRbAX23hfMbCXsNr7vsmwxrYuyijtu8b31EUx4PokzLytARJqV1dgYHtjYsbp9GDk9ZfTpmtTEGLRGwabB",
  "key14": "49RVK4t6bt2m6w5tmTa5uWW4P8zaJ3Fo8cyXckPGZCmGE3DBsGmX1JkRnTSH1w3pVqdhT5eE8eeWqWZtu65Mj8Gg",
  "key15": "2GQAWBG1QLBDCpRF6YqNJ5cBDZRBEFswyojzqGdzBhfFCstcFq8w1bHDqJSfankgd1Q7H5KE2CExVaycSUFmQn6U",
  "key16": "5evzNSAWffcJbxtPZVRAzCFgtStUZ2AKq7Mym1ANrgedCgMsQvSEg68hjqnX3CyvKzTVCthPAkNxbtDY24RsUA4a",
  "key17": "39mFoXaHrgiA6Ebd6uQVcpEQwQzXaqcKxAJcLEYAJoEpReAUvWidvCGXrmvWma8dLQfcEk5KEnhR5BBNoWvFtmDw",
  "key18": "2fBqyuFXeKZpxfwAViA9Mgk1edEwKGLxUUVn64YCx912jXdCMikPoJ2nCiDxXYRQxfLqqnrjGcZPHw6XKirPJ1XE",
  "key19": "48bkLvqsbWzJp2yWcRhviEsqSj7ZXiPpCBHywju7W8e2iMAtuXm6tWRhrZRdtxn5L3Yeu6ixsP78tJ69ziugtut9",
  "key20": "428iDs1QnGiQMvL5Ydg2K3iSweiDaw3vAGjPmCw89XymTUFRP8hj5nVXSeSQEhefRdxxJRW4mqvhTzo8mHx2xpZR",
  "key21": "Mh1uPBUsbZbUQj6Bxnp71vrRqF4k4YuxYbXbPFoBqWW4kZX3yhcvLkf5WAxirQDpfnx8iSWMpbsQm4Y1wgwJwST",
  "key22": "3YfEoGmkgHVo26g3XEPwyZioTKAPv5jhTCbosXdXdWJq2rf4TDRFUSKGxHtKZdf1D7FBHjfbnirQSYNL3SB2W2qf",
  "key23": "2t6WXgraney3k7jzM6daX9Ue22su7UfhZDy9czw3n9BKggPB4Na7jevuUaYMs9fXwKSs3YgLa638uzX3zhPUgFin",
  "key24": "juq7cJxG8rfg8ZKXwnzeUKTgcZBqJV81KAagVQD9EiPuDFQtJQuZW3o8ZGbt87JvLPahrLn6NtS6xNLZoSNbVF2",
  "key25": "3FtGz9J1DYhCxpry16gqE9rNhKY4ZgLLbSxuAAN1Ry8jjDQykhYHFNY4tTtvgMaVBDB9uYtY8YBJe9NGmN2U9TQY",
  "key26": "5ZH5AtxkkDjNayeiBq93piVLFXgdKmdKMXViKDBZEnCDB7SpY4Tj9DnLE5XJMCx8QQWPxC9jR3wLg3VdXqX8NoTN",
  "key27": "4gcnvhTEYWRwnhfeW6tgWGGVzu2YBUfSQdaxGdVY8uXVNDA3T54bhCedLmrrJmRUx2Pz3Ft1yuDt7SbX6BiPfEPD",
  "key28": "2U8bFyAaG49jDb9nbjN3WvZGDbn9xLyvXiyfZ3TeuHxmiQjhKqcXTT3VGMGeo6XENcysFJHnTCvebZB5z7oEKypX",
  "key29": "2rH4sYNdaPG7ERTrTLwPQqfYJ4gZS13qJLM18yvwp9s8ScPSRAKNBL1LUkJcSsTZcAp9PiGPH7KxScqKJQi2Sowu",
  "key30": "WarTgTzja6eb1B6L2HXjCEUkCJRzqgcJoNLHAKosGjpx7XzRQm9mbsEU1rSbnoWHmre6MXNrMiJsajYqTF7PkAb",
  "key31": "4gcQkRjy3AKUyPGPq5wP5EaW1TrVyXBrhAYmfAeqVqWndQ5mNeBq2a3ogDGYEZ8axVfbLB2AePt2DMgYm3jBQfEZ",
  "key32": "264kGzpoGEr5AtdgGBBR3L2L1r68Nrqi1D4SQ5ZTTTfAYzAoEZYAk7sJSrm7vqT4sWJrsi1Ytc1RL2qQyibyGojs",
  "key33": "2pTqmgc3yJQP64UfLErau6LZXmwypmnwzw3cGesxUArma3rLhZEMFH7q4DnX8PF52UxSNDmRb1CZJqYoD47gobuq",
  "key34": "3gD5MaTo4QRJ6XpALH1oMJTcrfEUZydirMRcvAic3UG6XdeREQG9CEJBaMm433cpcnJDdF23xYXgmg9UxmQ94pLK",
  "key35": "2oYGLi1N4gghSpxPxCTB1nY2Jq9BSYPWtgajziAn4ECbV2JFS6bD8uDH2hFsGykWEzgd3TbECXBeZDiXco34UeVN",
  "key36": "2iMjQa1osnd6oqnbmUQW8ex6txm3gt6eyZyFQsasmAnQserNJhQ9HNPZZgrCEcuvrUnXeHqS9oudwszM1ngi1KzB",
  "key37": "3c9bkDPAKYqrCfuofXP1RveXUy6q4CachJgMELTYbExT3KeeZd1JUnKD1GPTg41GoyWNWkrtN5woWVb4u2tEfmVS",
  "key38": "3T3SVJmbe8ZTSJe35KEeRpAecjWhzYtTw1s9tPPhHEg1v6diP3tSfGYXiuhybcnmTUXVEfdthx2TAmJgNMheEoBt",
  "key39": "4PZwqXqBzkrgE5jykFgZQNTxEHhXLNLsHViTnZFsJfDAhCJgSyNSUibr1Xt6SjU8csEu7aPAV1cXr3z3weCLyFjj",
  "key40": "3fLjn5ZGRdQg98PmYvRSVJu56vRwXtEnvQmAhzDWPbvyBA4piaUMSF2Ug92Rpn8DrDRrFPg3ofJAmhJKmE3g6o7X",
  "key41": "47zNBDxP4k7yYupn9rMKBZvMVnKyNpWR73UDYHhCGYCNtBMY4QQpdV7vSjS2YTZ57wxFmuXYQkt7PmRKUe5agA9z",
  "key42": "41chioRZiVHgUrH2Btt77W3GacUaFih5TtvVEuZw8Jm78JdWGoxbV598BwKcyjf4CtSQksE1XpjVUt7h8fC6dHrs",
  "key43": "4Tzr8ZhwAmcQCsmfV53xrgC5n6WEU9R87trbtLaN7sRtZrJBgqqj6ZDrjiH4nDhx2JNScKoQd3DVzT13kiSf9rqm",
  "key44": "4bRuoyWuX22fP6Bqe8QdDXRFbp4asje8j6xsrjsbgWCD5c4geXqhFMpPnVjw2FwuxrqrvnmwJZJq1pLQ9y4ukgJ8",
  "key45": "3KM424kANt9Fsvt5YoDWcr9kyj4RU439trKdiutRDwo3EsVojn51GYi4Y3VesGWn17GwdQbGVzviTVHDHM4AtzEo",
  "key46": "5AtDPtxBEATt2K3vuEDKdiPgA9dQJKccW5LBS3TS46Zt84G8FxfV5VDKu8D941xZo6QfGUu1DvQddGRWAPvM8LY8",
  "key47": "3J5QaZLHNzL4fo3F3giFm2z4bySxmgEDQzXHzEFaa92YAFx4iM8CUbrRLckogkRS3fz9TNMgDLPYk5rrwEEEq3kY",
  "key48": "mtJvY6YZitGCq15WHYbUWZGrSZCaoY82fV65Ep9QmUwRMtmSXBD13hL5D5fuqhuPLV1RVq2nY6enYHmsndUmpP7",
  "key49": "aPNujzxXaM8CJu1GkG32Z13arbpzdwP5hKMxhcemo14zTYjsQaBUwoScj2cHkmiBRe3dqMC4f6FoLDhmpfJ2t4H"
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
