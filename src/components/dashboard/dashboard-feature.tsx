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
    "2zMKPZAdGXeiGhRiBYcyKhXaDKP2tu2bbhnawfqVEk37UQNDX5tTjXe5CGhBYieb9Hi3v9adxv8uZ2HY6wEgiebD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gusDGShNUfKW5DXgeSXt5Hqnph4spE6YW6JQ3LvjPMoxRBXRd7Thq6utwmduwVhGqHB11gqC2okQ6dtvYEi7tF",
  "key1": "36kUYfZCeGmo8U5ThVDYhQKovXiSa85ge6puL1pczJSoM8PmdHdqv27RK3Kqk4vWNcKDKTVjgi9JCjVNp1m5ZVwu",
  "key2": "uU6vsqb4TwkMejgUHqhfditdsy4Nc3nP3qjcxUoZFdPb6W5j1to3kRsmcsVosx8XmB1sLBoKfbbXDqGz82BEGke",
  "key3": "2hT6KfTd7R51UBMHZdEWGEydsne7MJjMJtLEjE5L3KEnAXLEPjzK6e9sbjwtvXKBJBWR3CzityRPD2zrADLCwtNb",
  "key4": "3u83oe4Sk9juP8acpKziyzPq4x27JofcXNVkeZ3PhmsqnmSxVDofmjD19oxMqkEZVmCrV7vXkUsXNtFWV1vwuuNj",
  "key5": "43hSFiQEKhq6GC5WY7AGCSCVgaMZLqpWMoyJ8DAa42xP3LTn3TpDhncbNbLvtLYXufHkhU9VEtxjSDxmqw9doiUx",
  "key6": "61f1cQGah929j4t6KUL7dhEgAChTuBprwos4foSNrf9J9cpxzxzrvXPkTyvMQS3JhKC6Ea3SKbgygsPhr1ojtMAH",
  "key7": "3nxtWx9pqUgpeZhetGb6UQhDBAgZdrPqq7udDAaJDaS3uzs8merWMpLcqLzp7Bk97y1QM54d5wtb1WkEGy9f8cGG",
  "key8": "5JGUM57wrXqtVtxtVsg3qPHwCoosDnJuJKWTTs5XbiLbPYCdniokR1YXLd1Tk6ZMK8g8wok1pwe9kDDZTAn2pi8r",
  "key9": "67K86aiqSAnTiLGqQ1utqRZEPwNz1ReYGx9hsDAJvxwqd9JqSdT3TrNu9Lu4dSMwZvPYsehYKaVF4xWyJsC6TXvW",
  "key10": "M4nBj1bdsxYmVUjKUwsqVtD6E1NGbUgzFqMmFi4v59wQdfuhXRzMLH2AiAdBMPWDSAjQXLNVgiaV4ib2fLqB2pT",
  "key11": "mcwvSDL9ErDmGzbtLrGG865rmKBDuhcih848FbBLgo7L2au65ooRwWWVuZHfgXNCxzhPDRJpDLEMe2rmSrLau6y",
  "key12": "ZEuBkAWAsrgugyeWdEpEAdy5MsNPhzbFqagioTmwWf88gG82jCVmpZbDDmhS5x6V8My7zBiqRYSUvtfdmsVKMzn",
  "key13": "4ehamfrVbKND8SmqXY4ULfym7BTcH2fb3aiHdKkJv9PrF5myECncS7YCzG2PHh4nvYrckH64o5rypuTi4PhaQxLk",
  "key14": "2o6ZbBR7crtb3FQXHyhb44SWa1EXt1tSJLVY8NQ44rJTr43VpCB66ohVPRQTgMTKz6DeNaQ3ZYatwuS4v35CQfgu",
  "key15": "4pHUid9HePswDPEn1oNyfCY3BBia56ADcbTkTkhNhq6DVmQrPL1RipfPeKfoDFMTGhbHXxUWNyD45T65svmvV9qp",
  "key16": "2FctZ6UAfQWkmPY4W3iXEgvLQseAuiwThF6hi7pqoArmSbbh2npEFoLTf5rSjFn1zo8uPAcouyGj6ifiv6f1nJvq",
  "key17": "2CVVNSxuJdsySYnwmFpwtKebzdEPBdC4xfKaea6KtRLmmd1jEAKBDnn1B1SFSQmS7TUwafGvXMJTZkco8uEXdm3E",
  "key18": "3qTpVNshsooViQjSw8oXVrupFo5ZsqrYB7obYTQwjsnLfaiHf2ohE7hj8z8jutMFk8mUS6YBZoaqNn3a2isLgAEy",
  "key19": "5aPNxG5BDkAscCvCtwogwqQEZkyyao1ixzjSHLsGbYE1xVneziYYkaUooZQ6e2CZ2gmp9Bsuu4B7DujR8qSTGvpJ",
  "key20": "3Q7jfhjTwECZEdoYLRQ1Ph8gbGfm11XkZfXuzYVWGpf5EB98QyPTfC3x2Lvo5A4XRS6kxY7zDPWsRRqMCohAegpq",
  "key21": "4izA5Ct7eZCAVon3QUKQZr3XDRCVc7WhsFC9fvYfP8pqSGLN7GfCexvRM1n3azLHZmLZ7Khj1HteMYmnjgGeATe2",
  "key22": "gwsA9tmbMUc3iCuFXftvj6rAK3ZxWNTHabDfVx3PRJy4rhiDLudz3dF5zLuqvNQbUXSvfyUT47oscYeSZYdLBAm",
  "key23": "3pEDtQpct4etW7TpUFN2sW6MDzVsF5DSttcL8xiEuRmB8YSuDs4QkNwgoxERwzWEbm4xJ42buZmLUZFYzBW7Mee7",
  "key24": "wbBB1XJnaD5HwXMf7hbP2fXfFAsMJx9ezq6h7ya684jU4HQtSVqByNiqhvaMqLMjJXAQCEnB3iwtaCK7vKNF6ZP",
  "key25": "4xC23VBFFh8MFj9k557ovD4hSr6b4o8TBpGDSNBSYUZ7VXTr27VmAGnKpsaYNKUee1QFs1e8oYHfMNwdQzAESVn7",
  "key26": "3RTDw7fkN4h3GF6Tf6RFcuHpASpxh74eLBubyEgzVqvi5RyCUpAoeRKJP1ZcxEj9nymYLDCath8ztGCHB5v3KBfz",
  "key27": "3s8VBBVCR7s9hbMfbeerF473ADujjwD5xZ2D4KCjGmmZvDD22JAtfreESbR6Z2Dvgvx9oT2WZBaJKW6PWpUGxVSc",
  "key28": "4kjTBRyifW4ANtUosKfZBetSsocPq8NCkkjMkTAZjHxU68jwXY4iL6rqBGPU9qxdxWbEvJTdjftMpSZkqsH9ryws",
  "key29": "5LQcWdVyNydkWDzpaafNCzfwMMpg2Vv1njujtaKGvwcctLWbjGYM21N4N8TjiJCKsCYVKFwXDGn2ataZQNUoFpjW",
  "key30": "L7JvFMFGA61YTTYC8xfwhaJJkhd72jjvCGPQgaRk1VekuEfxwUozXKjEwAfG946r1Jhq1H83ZnaDrVBDJvWWxxw"
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
