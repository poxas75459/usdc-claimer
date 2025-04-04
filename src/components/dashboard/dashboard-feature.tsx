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
    "29hMg4WhVJQUe7sKhLGsJo6hd1Aq5gaSjubbiqVUSKkH2NfAeL1oDeSttvQAyTVoAKjEGqRmdGepQ478jnjC5vCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJM3DNG5xhSRmTjjyUEa7ecphbAPhGfkciGo7LkEgR8RP6fm8mBw2aWPKyVPkMwPkhN4rkeyE3iy1yAMBvxqEAd",
  "key1": "5Ps5Nxa4CHA1DBu3MZRypzkkroW51B6ig9pMLjrmRXUeoFXARn5VaVMzyz6iBef5P9drP3vAVaNBdJ427R8VtEKf",
  "key2": "64nUUp3xowjBqpHJ8ZaZ8BunmXQ2kz3F4VoN591Ln77owiugr3CZ4RNtRbLjHZpTuBH4pSWW5eYeTxKoBZNJ7W3T",
  "key3": "57JxbXB85cVGAjHXjPcHr4Cm7CjGSJD6nmrkGW2QAzE6WZof2prhBRRbBqC8SGNF1Er2HFWa7mjR66bjAtTDoHac",
  "key4": "5BNqWsA22FsesYsKyZtTxtPtcNgWSNoztjhyG593cbtZw9nErHMkicgFy1cCTXfN6stxykLp8i9yDg6GcAQsifJ6",
  "key5": "AYGY3f4b9nmu1RwY5o5WGVErutwiLR3UXvrjZJzDgH2D9wca7xeRkBd2yKCKtNWvNf6RCiAvUs8wdWSSyAwAD5F",
  "key6": "124Zw3eXoxvsbijAUanJpVwFbWaQSpKCiDv8o8C2wPrWZR4ped5X6RffiSBdcEMJBRKXzFhin3MATpbCp8tgaMv2",
  "key7": "4E7qXTtnk3UETNR2qRfjHxDaK2cyBZwm6UYrM9MafRW6Z1BC5p1NnctZtaCFhRvpzs6p349uMwftvmBZTC12PGK4",
  "key8": "4YiBp99WmgZjpwgC8wzyWSfvhnX6NGK47VyWfwCERgDCDTQZjsUoDsF5WyW8fwhmyk6fPRBZH8cUxfHdbeDM3SPP",
  "key9": "3rKFrS9UfD4jqrPBNrCAbqkbDek5ggbnNb66xZKzzLNX2RFKUQD5jBeXj1ZihAjtw32WhgQpszPeFPYqBPUHHwpT",
  "key10": "5FyJN78nB99M6a1KTX23tb5UDddvdNi5syzscjYKUJrxiYhB469dJtVwNLSoUmSYSnte4nHykCKkeZgUawdpshBm",
  "key11": "4QvpcnbsNQUN1HkL6nPvyEcNEeoZK4DnAusvLFpdbV1E2C4xMRbVV6hQCgn9Eph1RqSH5PgVuRUAHMNt8d3e1K1p",
  "key12": "55PKXt5FLK9cgh1odZjDHzhvWhLS1xaDqXjj3mXoAKihfry5sodkBKb5tzLrHDdd5X8F8B6mpa3UQyLob7dbmkUF",
  "key13": "C1unQarTBNr4K6nW65uNrbfNPLf1iWFbswxz3yea3z5kw4QfNqQ2rQU3HU5izp8Wiy5fxMLbkuY4QrXZKKExuVu",
  "key14": "5vWWCRn26LdKLYte9jxD1fjozpbg7QZ7XaxjLgqBqJgm6F71qfFTyMzwFG4oUiGrZFwBv4hK8D3yEw2ikn4Haf8e",
  "key15": "5yGzcfUc44UYFCWCKMXsr1TdjMzfXt4r9jjZKozJ4qR6N3Q4DwwEYQMERGY91DQ4BW6gCNLW9ojk4fPA558SXdgJ",
  "key16": "BMvkH33UjBkVRE5D7PPbRNBfdYGwvKSahmmLDPBBu2UnvGU6eqtNPuDhVqUipZ7XnuhVmCsqNZGY3DpCT3EbMtq",
  "key17": "2kYRdk53L4UENYpp5o8hcS1DJirptMLaLrPTSe4F15XiuvbK8H7HssoZHUKoTTXDoz8TEFW9y83cMg9k7MyWKmMV",
  "key18": "42NLBjD83UxgB9GZsiy6BoZMHNJgRX695GpaMrez6LHEwGs3F5DeB3MynP6JLy8mJJvASbRYx8axJMVEMZCX44WT",
  "key19": "4PAwvwqvEsAwnYWAZ8Pqp8mF1pU2d2dctPqU7yLMf2aSXqsju9yD1rRb2V7MoqeuxwkMhQq4xRMFfvhYeDDMbk9q",
  "key20": "5p4Rtt9fGSzpYDUwGW3MnkHLU7ef1Y6enK42KPsN6BKBdo3FRgXtAZZmPYXJx5JizcUaEAZ4XuUHcmzg2j84eLyJ",
  "key21": "UnQkTqmahJQFF9wS2HjWVLmPc98TjvKzfs5npFQBFxA8TQNgzZZWUhKEHNG3hcAtY34gekWFdnpz1W2QH5nKu7u",
  "key22": "3LmmBwf5r1E5pYFY9jBzKW4o7W44t4EYKmB7xQLxKKw9hCTimxyFGKBoaDVEGJWM4PDoqpniAk1BhJ3EYAGysTg6",
  "key23": "5G3yAcqofx8P72JjdBvWh2dWqEZbc8zsSJ4dXXVR7ermAhSJFf9WijNKZxpZMN2Mu2i26JABYp27EsD1vop2uFjM",
  "key24": "3jR7roRMfTNNpe5BKGczoBywr4g3dBssfZENUDDX87wB5kDMVunj9pLt8n4Swb44nt11mEyNwSN77G2kJueuRHym"
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
