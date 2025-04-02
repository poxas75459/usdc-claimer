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
    "63s1NPPyXNtrheg9P9fZPosT9igAQ2zFFgk6QVwSYooAVokynnkox4acEKFvqeWURGnXr3dxUuHTWTGUdBDz2GcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dT9F6QaQhwwSdKSP7zwLoJhRYSMKB2N9QyyS86oisMXQDuCEo5EVMQySp4UqRM2YgGKWcxudiL2d2NsvVNdgVXr",
  "key1": "3tYZNbCou4R6g9ndzsk42gVXfyHKTEqpQshfDFJUbnDSPhBUmQuSwoRVC9odkFfsMKLvzMcgiwSMnfBVQXt3kYK9",
  "key2": "2D2D672HRVoPF9dgm43SfsFA3Az9cwF5eFDC2Tq6spAsdLdaLmcaN5FnwcKNZy3h5E7VE5LjhGxQWxz8GMfupt83",
  "key3": "s3bkx5FuvBqyccCs7cyjyJMhhLBt7tGsCCcHtz81L48awgd6q9YRyZntDQU5sdRxEF8t1T4MvphWDDue3EuXUYg",
  "key4": "5Ewv8ZHd6JGkYy44tGKF1uXSidDHWYS4aDWtnfXbGgmQmGtsmQtxV5JPnpMBpe8G4z9YmRarrnPZojmMjAoaKajG",
  "key5": "3TSdBCQdPHJ8JM7EmcC4UcXkGQg6KW1fwdu3tpohtpzAGVJe7WZhWgPin5DuiMs212qudomoEdbTuuJe9Z8zmWo1",
  "key6": "4wuSsrQ8wynXUxEb1sPYu4bakentGC44GiVmYHn5CTAcLYQs3EFXVcQ7gYVE8mQroA7ytKmfTbZazN2bwUYMFjak",
  "key7": "2YTjX9a2bvPy37etQaXPtjij4A4hrjDofyrFj5GMfPKhgfNcqwmcV6YJyyKTL4idBFVzdoLSvo8JAFLMaQsmBL5S",
  "key8": "3V8saaKBHYEPgtRNgNnCxtAhX8bWjSpoz3g2eFk69FvrYrtScucmJF7ApPynAfRKXp3YLwJ85kHbVPF3sp3VFgVd",
  "key9": "5G6JUyJXYegs7VHfF798FLVQr9tPhgTyrskg6WugKyUHNRdgDNgP2k7rRSMFwUTruNtdydjNmHqweMSrt8ym2GR3",
  "key10": "3YPusphjB7wjidBgZt2AtLN8Hfga5uVHUnxmngoPhN2iY3rXFKuC9Av8QVEWjBTvvR2LwxFBph2HjMdub4cRAm8P",
  "key11": "3ziJNZvmHfVJFF8GvYBFQMUGFZaQ4hCZumSyvErAGNu1rbyZKHriMnQ4BcGSTPxjnmwzzZDBEegPidkSQqxWqFPH",
  "key12": "3pfwEKrMcPr8ZEtDDJEoWkr8HSEyMbPQnDkUyZ1tiVbqpTdfgaD6Lnk651JHZb3BEzTHqEV46f6aFLn7fPCTnKtE",
  "key13": "4wo4oP7yaAkFxcbXVRNprb5vJo3gfPJUc5htpKg1P7RUrumZ2v5uPLt4gb5rpSW9vwvMxUBrg4iTwSCVDsocBD6S",
  "key14": "3Q6fTZKphEYGF2q72wLSps4jPa86cEt9BdGdnzDPewPqX3GQqbpjYq7r6bXms77oTXosjdrQpv31tvwnFivybmvg",
  "key15": "9BJ6Ja7Ns64TMV63ySdu8mePZFoHy5z2so5Z24XZmzZkhsLDNBf3JLZiJvNmTjKFgGKCSyjmX6TUzBNbXhWroqU",
  "key16": "2W5g7SWQY2sacwfNWkfRngjey79U4mVsGit4EVZG14FSDviqg4q97LmTFryt1UygDfETN1YCfNQu8DK9gYt82Cdq",
  "key17": "5BmRMUYPN373tLrExE7PMHKcFyja4T9TVQyVLKfrY6kLC8Jw2xaQtbZQjYcs4CZaX5ySZXGERFikS3p6vJwFdBcu",
  "key18": "3jEE91UKaABHR6wGza1nMABW248HSstKBfC7jhqTTAS12YJreBVm5TAaNAp1Voqr92bYFKmgwJLRFDXmGZQkVhQ",
  "key19": "5VR9Js2uHTdtyevUJDCJK5t81w8YoYTJ4xCuwL7s1zoX4cqg59jxGJYcdfzMBtt9U1QLLRPjFdsdzGz2oABuGcwU",
  "key20": "5QDSF1m3Jt4Q4U3aN9LbzbZRFepxrQJZcGY1vZKQzU5qRZXgf4c49Dj8jFbSwWHKT4KFfN66825H5DPjXVLRnqg5",
  "key21": "5v5SkZxNnaizE2ESrwjZNogeaGP6RwxCKfbMyUmfLLiRBxQk5sgw9wvS375fEe4LHxV2pZBq6ViTBn42R28QxDwk",
  "key22": "52rqr3hPx3yTkAvjp4kHJRQtGmCJU5qTuLhuh1aaeVG4RNrEM3LgHaoRUT2pP6fie4FUBp4v9JErzN2Caba5dSUu",
  "key23": "34C7ViZkrECPRiaTv8f8bdGrvLTCifZeTc7X2x7h3WHecsBDJe5F3rL9AvhSF6iZeVqS1DXcDogqfH4psfWayLER",
  "key24": "HwxJasNKGxBaDw6p7R1tEgmcBnKggWy3JveqZi5aQ7hnXqAq96YjBHD8YmmAeNM3n3WR8in35YwSCsknqKj4i8L",
  "key25": "3LP9DVyUEm1pjHiFDMJppojdjYSWXDMtpoNjJCJBekmEgDMcjRfgWR2XuqtsCFzfJVFLvixc4FxQuEnT9bA255QR",
  "key26": "d6DV2wZ27E7g5VihxQBuY9ijRtEDBSAVzoAA8kku4C6hbyuofjs594K3eB5WwiEUjHoDYe8CvoP5k9B4xgwjpTR",
  "key27": "678KCj9eoX5Lv5CLnuFJedpYg6huvKUPd6QB42ZkDsXrXMSoqBkwTiGvEd6tw2NEBp5Xpfo3YPFRPU7pF1nsqnAz",
  "key28": "2mj8ugun85gFi69RRTmzbNbDuQNp2troqTP483sPfi1esd26CQ5H72KJN8skZ1rmfSPT1i9Xqy8gMLN1H9TnZoAe",
  "key29": "3yhPiDzMwkGBb72GjFTGX4ouhcsmWQMMheUkVezHzxLnraTXHkNenp3XZehbinza7peBsYLBTtCDr5iw2ieP56vf",
  "key30": "483yWJXya9Hh12BAkzGz25adave8A4SoAuFWai23F79hXPJetY6nEvzEzUied4HR3sBvAKxEbXTB3Sk3JBrCwgxB",
  "key31": "4VQbtmzyD1569UqaKqfstYqtYyJgngmiQriYFv1FAwrxgREsyZU3RhdoZwTtnVAnaXitQiLaLzWmKNXSm3dsjSy6",
  "key32": "3s3kMUUt9X9e2Zh4NfziwKysBgciMVeRZUzqC8KmUqLMa3oqo2etBEWCobNJxfadJhzosa7vxPn7NekFiNMfDgHg",
  "key33": "65HQ3bmizFJzwnQ4hDrKcPMPqPQuN9PLUWax87dXS3X281uaDcZWi3tUSaTG3MGtvyPdizDEPy8qDQjD2ADeqMW7",
  "key34": "264KzyimohCp45N2Q7QEFEBSyGKpyFtJNrmL8TV65K4MQtsDxGrKcUSksC2KhSKxWd1kVjsRexNJkTq7N83zDwmj",
  "key35": "uWJ5AZUMJ4s5Za4cRDk2nAtr23aXuPgKoSaSZYdnmqSMcZsLGsSYCCgfNDqr4jB2cTwbp967YWfdWBjni3ux5Qp",
  "key36": "2cDmtphx7eCF9or4N7jbSuY3iknXzn6xs7wxcEpK5TTbw6asZyvTUUk1Kvff4LJ3jpKDYgqrnUtMq3PMhRhSRBge",
  "key37": "4QmiykjZ3Ad2HHu17QjcZLEyX4P3mYp3oPaxsveqvsxYphRZbjSFqt7cxmvpUwNoaxpR1KTxHrfxg5jyztGgertW",
  "key38": "UKMaVNpM7NERVhP7zpRYbwhGUJTTJZoczP8KFr7ycz9RX1rheDrUQ5ctTAhm7dizNofGU3rVfHnshzA8uSnEV89",
  "key39": "XF4sK1BEtUaYneFnXLSAnX2KREoQoSjsErP3PHTXAZpD6LvA66zidRqRAtsuBWtfS3rT2VsRXq4zqfR7gfb8Uz9",
  "key40": "3tDLpi4nPbx8une6hP2WmsdegVCb3trRL3AFaDvmH1QsdxbjGkv9yiPyTcW8vDCbzzBnc2mMNpU4FreQmLfZ5mN9",
  "key41": "4CKxZArVDvaU3XR4ZdB12YUMMCNWzrF4ypmW972vgQJpG33Fn1mwq7RMC7a4UNxWRQ79imLxppFVxzFidxuB7sbR",
  "key42": "2R5DGSpGBgdkQZK7fa9NGNXPGFd3BqTRUSvd2iSgXpLRfQF1yxnpzTKCg7GEdWHDAPM7Kw4thwevYSHmjzjPZ2jt",
  "key43": "t3EbZ49qnDFFZtoQZB1Uqc3m95MZDbyfQZmtjcXRGZLQd5ReMYbE6bgLZWCu8wv6Rm17ziMAD7GTMzi1NCMsQcB",
  "key44": "3Hr63gFtdErGPsevtRymT9dzXNyBfCL24WsQx1orvaS8waHFWBrehysw8Bpt4Hy67T9YGL1TiK3esJK8mPW2pLsg",
  "key45": "55QUqRgqMGuSucF5Kaafha8eiGvv8nw8DFHWtvEcZgcnrawmN2ESwToqjLSNDjjAi3voTGnF3GuxMjqqi2PMUCrb",
  "key46": "2NttHuGrgHk65DCCAVPsnV1dkk2FvbH5uq1jTPxZThtAsSzJqJnAvfqt1veKJuR1su4n9FbZD38cLmoveWLEpG2e"
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
