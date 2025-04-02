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
    "2b5JB5bqWo1tQcr3b5L6HNY8ZqAWL9s7VAbhc25NzPFHb2t8Wd1nBLrbW4C9yi3v745wq59H4dYrGTv854ivfZ5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2scWHY8qNfBT6Fufu9CRsRmvYVYgdt8hyer2wvawbNuqHqprwkbpyjfkEkZfWqs9qu4bVmNnkpd7v3HcB5SUj3As",
  "key1": "5sL64Z78yQt5i1hrCkaQtrEmDBciq8HSudzfTzHPxHbko4VQ6n5ysePFsJvMX36MRRVypiAmnp5RRHZwR3CW1PwW",
  "key2": "b555Ht5aRrPcL5SAMXgbStV3LGBVohnUkxZbmhsQap3Z7wWvsLWBewhcFVJ3AAGtXfSKuKjDekquAR3dB3dWCsK",
  "key3": "2iFnTJQsYXAEUGCKq6z24V7TVb81riDaawZEJhm2HbSkZieNjdHJDkB7xC9FpNFW5q8iXDjhmTZVMoKSQDpHzfKX",
  "key4": "313RyeUhirFyVCVXXfcNz1FUhEiiaBL3gQXKf6H9iS4ZhG4fn1LvEcTwBqXJqg5YCoT4JNw6xjf1K41GTQRFv6P1",
  "key5": "4Sd27Bk4JrDg31r3UWyzc8XFuVXnfmaDqPEDPAGedLB53NazzuFSEAyq3TLSjuU3at27g3Qan3YmaLXrFfbLZg8",
  "key6": "qVBNdpqRFrSCsAYjPgra8iReMkBjtpSrP1PPo7WY81gB6gXUg4HYxPKg4evqvBZy5L943o1SdVm2jDgdd5JgrDT",
  "key7": "629yuwjXVAnwZ6wqiH4x38JTgw3ieBrNUvMv23WYJQFXkQFB1eM117aMjnTN6txakRShiiHhJuUagM7xDvoGEGNn",
  "key8": "3Hgm8NWgv9yV57H5hSgcEqQNh9tednmFTx5EhwwwCix9o3THr67xQk6XfEodivuWhnEbrAeKb84kKXuJazEpk76T",
  "key9": "49a3Sc5F1o7UA7srZjueAV2RQPKFWASD3sj7uoi4UF3gpAgWVJf3QesjGoUpd46WfC9Q98mNBW6qmDhQpYbVVUQq",
  "key10": "5zmFexoJN534XgPZknqWFTDu6J7G4DLfiDjviPNwTxREVdsgwnTpiwdM9FxMLorCEbC8j75fAeTvguFUaS65TbUx",
  "key11": "2Pn5WSCBWULzj6RjBsaejSV8wqkCSm5X5AvQVvQKwjVU7VWBwYtMCoPPETnpzLrqNmsX9zZ3Pe1cu9mwTA5E8miK",
  "key12": "54Mr6kbqWjuyBePWj4aD7eXrxNSBHpPQegPxakXctDTEXvudGYJcS1zkLeWFGT2StwhZyG8dqMYYCwCPfxw8AWoZ",
  "key13": "3BYFzAkWXs3hTVfnbZu4cpG4sitUMwfHfsK2hzwWb4feeDAtG8wqfdjM2XJJkMx1PHnFUX15GMDTX1yo4gQNsaHd",
  "key14": "67SdmdPLf1oq3fvcrLDGTzEXdAUd7wea44T8BSjdVdZFhPuuSRMsD5wqQ7mAzib3kbxedVLjs27yHQYRHwk5w9Su",
  "key15": "pDJ4tJUgUBCy8GsAonmYmBnqQNd3eN5WFsK2cU9qWMtqnW1hmn2UBUwzA1EdabNBN56s7uHg2RLx7RUFehVF1wv",
  "key16": "YtQ9QBPeQTeVE1vYrZYe537PQNGudNzrQx49HZWppnVJVPjx1NfxXLfGMEjUQzufdBTxdq1BuRQ2rcc6eenqK6m",
  "key17": "4MBY4GYLbnK5DNPjTzjkaDSHd5ThAGZQrZMWq9vVACLpz2azhroBqL5Q42rAq6hCSvwvYTY53GtmBksbjAaWFAgv",
  "key18": "vP4r5SGGu912y7FFd17Jpo3jYyqi7ytfqhCfFdPjtTzPV8RVgxWkr57FNtKKHwxoyuUXRVYDdb5ixo8PaTQ4Ujt",
  "key19": "3Cxi6MdCA3ieZkxXJBT7AGGNLym9uexxdVH1nGvTaLQR4PFDgMUrEnNNh6FoWbeYzGLGXaKyzGcxeWkStXxXDm1k",
  "key20": "5gP3DErBi55QmTy6A3RUnRTnpvQ3BEypmcKnWf2f2SFM4J8JV5ZCzkLkejAqsZ6MYSSNZgPWyuEMb5n7RN3aNUma",
  "key21": "2wVLdHYwN5PzsRSw2hRnRfJzTrWfavzbYVwkw52Lg8Zj5PwXDMjmnKSQr3YCoszr6PDqywmyfEzZNaNU1WD1Sb2f",
  "key22": "3ZLvzhrerM4jBkJ4X3SqmPZihTp13N6hwSqkzgTWxu6bz4Re6Qw11rNCyetDPSDRruAftTPWUS69mQX8H8ddDbJt",
  "key23": "4d8Aj8UH6kqqnadoJVWufc8PdLBDu6DEVZhSFSkYuW3Fa6HZHX4gfGQ4bmf2nwmftx6cree6krGYXXJGBqbwYzCR",
  "key24": "3c2tM2v7dP2bJZQFSHKNXfmDRtGWtVNuDy3v92Cad9xcSrKzLFEieX9C5RBKWZkZWMB7hrRVySnxB5gx8YcxZp1t",
  "key25": "nU87rGf3NKeJR7ggHQ7NSzrz8DdfasKBfZvjkZm7gcja1bkUWnwxL9LNAbjrWNwyBDWBXbKxWtmBZnNQEKatVV3",
  "key26": "7mWy9oyiNi7Tq1pM46g8KA5V3RUy8XPakpYFxq8o1Uh1RhErKd756nG4X858Dtu1vM1Dunxx1jvfQoyvc77ZYQf",
  "key27": "5H2Hiyv1sNBCjxVruuDCzcwDQy5doN48EZxdNdCrgCwedr2fGfcvc8a8YaMyB29sy1WvW9sxe6StR5SGoSWHqPxY",
  "key28": "2yMX6s8y6JD1LP1grzqA8skKrJCDcajxUULApn2W4JXqDJuZDvBCrLXs2jqDBATYUWBGffi7Vpmg66mDm8AnTpss",
  "key29": "5WL8map6hXb15iduSV17ocmt14hPVo6RN5xuhHMzVFHweYNSwNpUKDpqef5F5FeviD5t3meVoGvbbhymccj5eqp"
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
