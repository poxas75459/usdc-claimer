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
    "Lv48B5Vr9ALzFiDwXpR3oX5CGzwEx1sAZeZ9vpGkK5bQfTNSDiuYEsfyLuM9xfDgemDqYCicvQJgjco2ZSESp7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPAWWyKj6A58Kvxyvw4XVpwmqjHMr3skMGng9S2b2z4tVVW2KKctP8sdpwquV7zBv7yPngXLuCZA3n9KCT6qd9z",
  "key1": "5mB2hwnQo4VRR864khiHF25K4cejC8TjVhNijuMM7yTDMk1haJ7XUFKdTGw3mEFec88baMkQBjv3G1FGx41QubgQ",
  "key2": "uwvPNJnR3WbDxbmoz6LbWhBffu6MErEosiPQBY6NBrRZuWyjnkieN3UtdBUysZ1whgUfopseyV6ZdFdS1YwYMwA",
  "key3": "35GXFYe4VWe1PZuznF1ZeR6Yge8yZ4GNbySAg5Ab7hQud5mXJP3AHTy7bggubETKXTBrtQ2AvdkZodcMQutVG1xc",
  "key4": "4d5VdBa6ygUFeRsNDEZcK8SU3amv4kNpqTZVa7YSi72LqLvYX3KfsqAv54YrsccZW3FyezqCMpKy3sY4BKdq4KZm",
  "key5": "DXydoGEBbzgw8dKcUQzsdSqiqPoWmWyFcswKcMddQ5XVPjUFhyh1hJPtKmEn2S53v2Tkycaj4YoZqqd7qHkrdNX",
  "key6": "2tH6xDsFjDYkYzemrAs7D43Cm8Nxy9cQpy4rhYEEhLpHEg3doRPsQr6KALpMnzzAFq1hwzZvGyFRJsXnwFmtLtEP",
  "key7": "2ftkPnujAhEhpYRLf55PJ9PmmSXiMMpePjnRGYteEyjUArMkYysFm4uSUtTFVuPu5nJS9aGMdJEqXsfiLy3pWBfs",
  "key8": "5hSGQTvRczVZEELpWSvKVMZUAbnvKMpiqskEiuoeYvX4buHVAuPkJD9tootT5YmjVFf1antfdUZYp12dKN7f1Lct",
  "key9": "4Xgabt9UzGumkKnC2K2AFA5GaYrJJQrNtVM5ktYLFNePBdrUG1rj6yt9NoqWcbJfamaEucvx7MovPhbU4H2hGXTv",
  "key10": "4arw2aHjtxeEr4yx96vrN5WJceLUiGzzXeeiDLaMsUawtt7xBdwgcFzUt71EDTgsVTE5nVfq1cfrZggf2dT31M4F",
  "key11": "2pGQXHdbWa6R79FSWKYvVikEvTnK5Y8Ti4tv5Z245priuZrGwC4ecke41FEf4TTMuNXhUsbVPsW4mC5aYhihV7iE",
  "key12": "sUh4NPRQAzYR1CejR6bceyAruEsoRoNm7Zwh1CTtXmzqoDV4NR2y4KnxvFxzW7X5BZSjvYFknWKzXJtZo9ZJkgX",
  "key13": "2EjdPE3VWZ8UyUqWKzHEk6EM8vb2uCVJGC5aJj3EC1BYQjMyo4baRnHw1LnF1k7FPxLQrG2wPnrqksuUhnXC33LV",
  "key14": "3dss1gyj57SHobT7mKUZhqqujtEBXrAz2fRPuR54opE7v63H8vJvRqs8cbzkDi8mrpxZdv2jVKT9TVhZfXvnaaan",
  "key15": "2sTWBY3tnCBvZ9uCyP7JGC4yhjMJx1tPGQAeGZikH7wPPLEZnieYfjMUFZELyZNGDdYM8XGD9nCYiV2kic8ELPYE",
  "key16": "34SJkc5KS57Qt6Mqwmy6J6VPiLVkPmGP84SQNjQsXboeYjf6sAdDKjdgipNizusUkyLwc3hH241RSEbdBBDMLyDo",
  "key17": "4zetd1kabBgBVBZXdBUxfTp7WfrrDEKogHDcxFSdUFyVqKD7AcrJaDWXet73YBwKrDrCyDYYMPUgKfmTLDiv54pb",
  "key18": "4ust5P62wRri574ob3D1ZAKcscHp5XBhPWBP5UR7JJ53S87nEMZejkcR3FzmdKrmnVQiYXTBDQHgzNdPvYkB3SzK",
  "key19": "2LQozZFR4yr49SJ2TbjEvTCAKqxC7q11Z2ED3sNS3gMhqduUD8Go6ir4a9J7XCfqgpUTZcnsU2LuwnkXZYxrdyT6",
  "key20": "5zyBLyTmC43TVBYvNYwdv4E8rMZ3omKXUqivgqEmEH1m9x2oY3hBL2QQsHrNzLuXUupP9e6uJF9e9Wfcywrc7wLc",
  "key21": "5hKDSrAqCdqAVWoMknu7G1d7aeE4Rb3R1LXLj3NgAG9vCssBS2c3emwVhuHYCqivm9PvU17V5vy5yyUfgr4vfNrS",
  "key22": "4uRWavV58VGKau7HJhso6iw46kKNg4iL9aX552JDDDKSE5kyeeaYVzQkFQQW4kyb6kmDDVnd1toU92PqJ3HNto2U",
  "key23": "333adWFcmbUmiunFb7xfp2QzrFs6sds8SpHbotGXx9RRGwNumthRCoFmg3QEauBNuqzdh5nN81LW9kTfgv75ZGxT",
  "key24": "3y9Y8yY9RaBHYBe8Cm1B6jkJw1Q8q6TKbiVY6iphkEdauwcPrzcG6UBC88DoH9mQ6uKGGpqmLh5fcDrhLjmzj8iR",
  "key25": "5gVDPQd67yByETCYaaXY7ztZqHghHXQscNAxr9WstquLDmrEemv9wG3sBs4aB66eN8fGuG1hPuVRsQenfhBkSXrs",
  "key26": "5no3i5nKAmmHsZHhgN76WCtvEVeMxueP4h4gXgGiwUdkxjLXL4JL5iir2AryUbUX3RUyALz9JhCoTJ9kRt7h546i",
  "key27": "3kvVgPbLgPsRzGgebREJqLzTnGhm34L6qHNEaDM6h44fFn9RJsttNnsAUQr1aMKWNjqhNLTUC7hafaKjo1aSAXsp",
  "key28": "3w5JZQUmq9kmCYBtCodBziZknf4emjr2E29BHeyi9ygqcYVCGP9PmPWfLvcJjffa3JbkiuKNgVe6jCh7CvA6qBrK",
  "key29": "myY1UqFi97gWRBuVyPRgXgdqKjfc9uZGpXhLCkY93xbugRjAm9EWY2kk9TorsAbv93ew16t5JDTCWdUWKuqnUXg",
  "key30": "3NSmJK5qe26FzQmsWHHkoZLA39kDUoMxSP4KnYLWBB1WXqPfLbAiTiSqjdyPKXvjrz4yvArZVurG5MY7G548BbXy",
  "key31": "2gHbK6hYedNBnG1QbevYesbSdchuxJYPchxfjjZKaF535aEHxZQ3wZSJRZGWuEUPzY1QhsPN9EbpkBdfn6wmJ8c3"
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
