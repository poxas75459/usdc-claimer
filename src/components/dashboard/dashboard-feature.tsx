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
    "2GWzfUzJbE22MNnbrpaXV9sMwq5CZFYam56mTciqCpKQJJLpYgc4DXejN7CYQ5zfMPX7NbQYZuEzerX6Q3ooKdj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJfyZbZ8raxCCGJdc8Fujyg9tnARsH9GBJSJrAA4dbBQDPmLUnuCWmFgnv8AsqnXP5cSyJYbFHZGGAevrTqg3Ms",
  "key1": "tw3z2yRjpMULczWmha85p1zrSq2qqyMvRxxue4DjcsumEm6GxhZSdNsjW6Uz21uG516wruRWEvdYWzCDU3ax925",
  "key2": "buZbotg6Xtd9bZvAjxGVXVso3ddsGsCDsgoYMnhqeDB8Lu88LbFF1neb1SGktvEzVEBtbkpnfSJeZaDQvbywrdQ",
  "key3": "3JiahYxPq3YPgR2EyXCznfkzYPHZCc6qLXhr7LR3cyQzBa2KnN5jDNHPqhMFs2VMLT1GD1RnGWUxnqUZsKvdPVvN",
  "key4": "3yyuhL9X9gaUqDokKBCsxEtopMx4WRieASvmGxVnMPkxU69waiEmgwGwn2jP6sSs7b4nGavzkSmqhWbqtDdXBtgE",
  "key5": "59voxDe4cEJEjPNrdQsEwhNHc8KGhvtTWFEyqHuRDfC537a558YjWxxt5iR6YGGKfH32VJMH5n84wits86ZJCC4w",
  "key6": "StUg9eSgaFF8eugNGFhydpLogkkgUHUg6kU3uEV2hEzv6TXq6nTbJxJ8ApSUvdovUo61uKSVWP6VQ7iYdNkQWy5",
  "key7": "5iHrJpqFFwn92Qpzi8TdEPktpQeVMDMES71w8jYEVZkLVaafNG7wxg3z5h4Zm6snw6MYD1j4r1ALf91gf8Tiy8ui",
  "key8": "3nvMVZ7i2gG1MSzg7WLppJPCGff1ue9dDtTU3CD1EvB3bu8adMq4r4vicYkcPREB5cRYGdvSiGESJCqbUJtMhsio",
  "key9": "3npp1GeAZ4CEUJ9DBWqRLmLi6DvNdovaq5NPYjMnpPcAq7MG333KEZ1uQR4V2vgNUHPjedV2mkQpV4VF5robMbC9",
  "key10": "XHmSpQ28EVZDDyQFQjSwmLdaMYMNLM6zGdgQ2VfiESWmwK38XRzhaYHzf1V6WBTKZRdUNh8NoKwa7esFo6j3Ldc",
  "key11": "3Zz95WysMRVcC5XcePa4yi14rtLtZNN5HVQcEoa5SoBeZ4ir49G93ZLCLFp2eHMs7fu1e96eymMBQBt2n8P2rFTh",
  "key12": "1TFChEashsqWVzSa35hiGgn4iVREaqN9om3dtss3carYAW7jUTfEPkE5yLfUaQcsPw8xFFzVyfP1p5p82MXNmgJ",
  "key13": "5iU8HWsraUCusmfmoih94Fa17kszje9uiVffLqu1VM9RcRHm22nCZAeoqAdmCJwethjqqr4JuUnwE2Q4ojfF45bQ",
  "key14": "3Ki6CW8REum8Ump94C9g5WdM1cZunG5mMQh1FsEv5VHDi9BCqxJCTBLv3CL3mjbys5mGpyh4NaarfeyJY2dgMm7w",
  "key15": "2c3tiU3qqazouAgYVBP9nfRrrvgk61rXPSoMsUfhbNXqTo4Z9V19hfmASxEhWeC2suYGkeYX6wfLPfvoshmhs8Cf",
  "key16": "678fJ5eJsQANLohP73sPkkqb2G3417ursqwHP5oHkcWqHQtsgD75PjLKoy2gbVYKD7GoEDJLyPjTC3PjfKd3WRNJ",
  "key17": "31qvD5o9eqfsXcU3HDmgBFS5Zeg9yWmX591Z3MVyWA15bCnjdjUNzZctSRbXu3ifTPTe7QEZPQG47v1rX3ShH5xX",
  "key18": "5twNJgVKXVxCrZtWmEEXSwTKNKoegSsWwHiwK8NxnjV6xhDbMCFvep7i4sBSAEUMQacgUsFaC3qbYHVJtMjT4y1G",
  "key19": "4rqTu7iUWGty8S9bQdADVtrY2qAMAgySjC1gvhmC4Ldrq4vctsipRr3Hof3fFxTJwwhQ2kKVJiuFfMnw1oixhzZE",
  "key20": "W2Fu1Nr5beYWrUaRQMyTHjTYe8dUwfJRe6pP6d7oyBRXjTNDeDZhyCuzcBvvYw6ddEhrVTziPrR2peGjnEhWWFV",
  "key21": "NRr1St44Kk4ZzmdsXs5KDRWERLsqr4epUCDAraLNpWFbi1kpXivgCa44rVRuhT3BJkc6sRjKq3tvbzRUgduoGZB",
  "key22": "5YfURkX8QS2jqgofpFTBqw9ZsF9nLrmX1RwNL1LrkNaZeXc1tX1RcMsAb5KX5kVJZ6SbBsAHT5jWyUJMfLt8zkYM",
  "key23": "4SfYXZGXi7PjK6mBtPfGmaggPMFSReyFT95Ld199vNgCVcYFK9uPy1dWfsEct7djykVRfo2xzGVCbffLYztwN14",
  "key24": "2bJHqG4DuzySMqFypDBoM1MSXLDC4a2GnZB88o5hYSuW54KA1bpwuwGZi75sRC9z7yY2Ejv1nUxntTj21tnbQwCk",
  "key25": "atd5K3D7PKpwQdj5ETbtjpAojB1rTgtL8TjxH6hXySDRXQbe11tT9TU6JhqZozx7pZAhJUJissVTxYifWe3XA4H",
  "key26": "YLNvu9S4B8hkRjPjuJNZ4uWXpeNWpTgdyQoArCdwDwkQwhjSneREKQJMSv9uxni4BPMgkCrdwaWgh8WPLBsUN2G",
  "key27": "2TXfBseCmnDKUY2GyrSzMvrTBgYkxYmBex5qv6tuwaC4hRygpQiX2rbov3mGEZrfADEd1QRnvEhWfKfknS1Rc3ba",
  "key28": "4E47KPcsvMhq767Jkh4cgkrQ2eAkRfasUVkqr9rs2stWZdpBtKf2iRFGKWMZ38Uq27N6q4K2uFh7YEWnctBxWq1d",
  "key29": "5WDip17u8FeZ4ezd7fk9mk2RouBneu4Eqy9nq7sppyrFTrbRAXH8EBAP72RJjRQgh7FtkSGxF1nnVtJxC3eso4xd",
  "key30": "5QREZQ52zCumPaGN1UaUTTGW1X4moY5MoTvthjkEQuifjD8ikq6p8kyEkJhuPrzgzpak3TwXh3XQkzxGsJ3isV6n",
  "key31": "2cRjGvxFcNo74sSrqMcZoeWhtitaVFoj4m9fbFPwG2bYHorqizeQkivLxX5KLHimULXFwQ1QxayQARhkVoCpZehG",
  "key32": "j5JM5pPXpEyRWSF7EGNbS4foQLZTPtk8xu6CWAUFAAjz4vhJPwLf4tFY3Kkr8TcYMwm9Ndt7Hvvp9FoW29ki7H2"
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
