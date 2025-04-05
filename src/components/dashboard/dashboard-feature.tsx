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
    "4XmFWofiGxhkUjuk71mFN6rT2ziLvRJh2X44f8fcSSdGtCGdwmuevobkdXBzBVhqxvJEPaRmNZ8KvQsinR3eGf3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akFef31GTqyaFr1p9udWJV4VE9mNgBENMoDcfouS4cwp9jd6TZ5kNGsbM3dzzUaH1FHpK3wo2QkeGq9phEBBVNH",
  "key1": "3TxGPw9wB6QJ8XmtJp2Re9uhS4wrapp2KLjTPNXvvUUGD2JYFvcJDjct6nrazVt7aKQ1pTtaxK62pPzEja4JZP76",
  "key2": "4AtWJKQYMZksseD91jpoP4bkwYkRJ9jpDtpyQLpR3cm43eSMcCZeURSz3eBUTwGG47NcTgVLtKcc6nKqEbgyXnAP",
  "key3": "zGXDL8zDVLmnRV5gK6hu6VJ17iEGCW7FqhdgxqUBR4UKH3MDBThSYNZdjZ8oTehQLcK2TpNfUW492EpBt9HPvts",
  "key4": "bM5sKtLTiinUByzffky8hxP5twGvJPcSUM5hsSjxjAPBaupo8tsgtKFpxwfQrLK8w1mRQnFf7g1CA3cb5DXJHYy",
  "key5": "3JN27nYRUhUroNVhARiK7fYxkBY9kgvGTMmHiKHbYBQpp6fvLSqvK9Z1EqbtHydcAuMgR19o9hcJMhxKzmt591qC",
  "key6": "3HY5UNHeit5TvUaA9MtXbrqUA6kc1SUYCio87W6TZkMkDkhNnVkNXye4V8VUieS2UC1w5gXz1JEY92w7Q8i6oTHh",
  "key7": "2Ei4tyZBZQsSwyjivqh6Ku4yypCvmYzVPMaEDtx7BqLxcHmkrTqLEAHzUDzoxyFUTH41tjDYbCTLoQLMYLBanD4z",
  "key8": "5zMSDzby4VF9CMreS9ozVD1zXumMnB3wzagEMEbjWereGncsgsGxe9DvCYbmU64G7bBJ9wdYPSpmaaajXi19uiKq",
  "key9": "54s5Bap79eejQGRxx2739bhVgiGx7qWjTigX5RYumpeQy5Lno7EKRwLzUQRrnmSdBsqwqKaCN9rh23ULTVorSNsZ",
  "key10": "34drGLQi5bxw3umqDL7GNwNkVnjtiUBufLpi6vspLusCTTmm3EUpNyPm62JaBxkJ6X78UcTRFcfL9c76bx26ynhv",
  "key11": "3rN4qqKK8snrby7fA6Zgdswemz26PxL4mPgwajfhpYwRsaTJv5siXKzrzBTmawy5e5c7yAaADpuVHA4FPY6GqWGK",
  "key12": "3qu5LG2nKM6qhdWfBDG5RUZHoqBKFkgEZuXS3Br6PJQhYWHW4AkAHJs4uBWKpmApvsAaxZ6NqgH3srZDm4DFPyQf",
  "key13": "2rbJ7x6TLc9nBErJ1JQzc1P2aGk2Em7vFJnnRuXAAS1M1Y1xks2Q3uMorsbtPmX1fsbox3frKNtYhMrWNiTBSQsJ",
  "key14": "pKYQmz117ohnntUfj55VtuM9AioJCRY4i6m78f9naYBG6Kq8sxAR3DDgvPDEWMG85Sb6W8fi4PeSwQRMjVH4BZP",
  "key15": "uUjfqrQ813PT83SXdHk4pPpvnsDXZtyrZCmzAnxETyEEr6StbsMmMniFrkLUGofFRAJh4TfjshaUWbZjRKdLvqn",
  "key16": "5jkdorprmrgJWYZZ65jVyt5DJQyzXNeVFxrz5BCfg3yN6oFFEiGoQVEeUqR9pe5f5FBgTTqi5Y4gSACGjUZkoMTV",
  "key17": "5fL2uFVgEquqqtcTn6V6tKcrNNJDq1qSbSUPhUaG86CaU6smCkPiDYHWsFcq2SrRaoehgbQbtDAJQzwtRStJmtdZ",
  "key18": "5kxze3EyWFmHKJzFfGByhuj7fo1voPZ7k9AJX5wcBnCTXpsFCCDq4pftaHu5ZE4FLtc7RGrR1fNy7bGdpECYGyYV",
  "key19": "3mfrijGRCCVkhvwuxjZfF4bQfjehajeyYFyBEt7LuZ6JLHv9DGBYUDonS9Lcpj55xfzgcdhGHkPJ7tji6UH7Bg8h",
  "key20": "3fKxci23BD9bU1RK7bKe7uSYAH4au79wM1FUHLgwKqSMf1m12MCy2XaW9UPBJhEBzrHND48qLUuphyb6QQxe4SCa",
  "key21": "GtRnhu2CXrpuwgsrbjtd37k6pQCnKodmBBXDngZHf63339EQb85ZvXbVrb3iaq5rbUZFuYG6v4MiRJS3WT9LyBJ",
  "key22": "4YQ62QeU2rAMEPApaQ2i7yjPWHuJkQj8GEW9pv9ao2B3xkUWJP1izgYuGeFFcDgymuDi9K94JV8yBLH5ELorjWjB",
  "key23": "5inp5mcvFWhgocAvGzBCfk3EPt9uEt3ZCnTKZeE3S84qPnfMWLEL5cJTdPHiZf6KsarYremCHZLuQeZHFqmGAZCU",
  "key24": "sAykLezMinwnGSzsbfADpfmNretQNoguAqjGta6q74adPE2yxKjm6u2EnzLh1u1rjKG4pKGZJ7mvjQJ9r46aSgN",
  "key25": "3R1dCR3fhASt6urbwijLJFstxcjeLRRVoJcvDhcyJtRR6QbjmxLCERyAtB9bZoJurh4FSunAr2QqpXd2n2S43cdU"
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
