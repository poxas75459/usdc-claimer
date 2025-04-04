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
    "2fNLFvxE6PFSq9ckSvFD5tCEAUc6MbxxMgcAskazzEqpxqHc9puiDRqSEQeXvqLveGo7P4i6EhEDG96upcrWz7nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488terbpqRx7CmrVh3RAQVpbPcs5Zqe5SjpWaYPWHp2uCZGB2CoSTXhASCS2mJKdtomeay8EEfM6E1cBq3G8zdDb",
  "key1": "3CUjAiqWbNc8J1mCx8wQdGhNMeHpRQDgpULDu8zGh8TWW7fytkLJh98dADHTHoQ9XG3bDqVgXqa4RV3nFmRXMoRr",
  "key2": "3vY84EUCpScTtwTgREyDtptidGq7LWJWNNjADj4EwaTQPmn8gf98W7whnyzjHDBTnasX4HvhACuJumPWzPnKphWz",
  "key3": "3MWbyRWkxp78qbfuLraaSYKkNxBxNBiQu136dZFo9DyLokRewVwy7LBMiLEksELPaknS4HLupbjkFWAfBen6Aa2K",
  "key4": "5PjN45LtCZLjvaCC6N9VU1fWdyaHEGA3b7L2dLKRY3DuyfH4Bfgs5yTrbtivEfeRvoE3Zp3qWzimE16YPWYQtiN2",
  "key5": "rzKZ2sLZQap6evmZrGFdsX7dQ9HPACTMo6W2NXKhaDrEiToTDXvGtih77XuR5y4MKFmwt86YxeYqqgZEPiwrn9X",
  "key6": "3ZQS7BmPg8KEuS2wSGgZ8QKsMUHxd76ATpE4eTKNjKLjcBuEZEKjfhwJac5vKje1tk519v88n5qkV8HYsrCpZciE",
  "key7": "4PKsxgKGTmPS8RkWtJWGd2jyjF6PNzsRoUoyR9zvPu5nYYUnp1Fo1rFELBfDV35gyTJocwnUrhCQykfhTmE3VYCW",
  "key8": "wxJjgdqhWGTftd3hVXURoudz5AjUcJkHz267vke9SWCptQYKCry6eHNGykyqvb51WqCXP5V9u5JUrB4BDwnxXXW",
  "key9": "1h6ACaaHzZWmxoav9hrwM5xxQE5Lr92kYbij4mcd5f75jajQ426x8Csz6tkqnJbpMqPPuQPM4xo3CN1AEb75onG",
  "key10": "4E3PeR6AYiudx1hPorE9LPVoXMheieHeqP6oRhSX7TxeAnZgMgthz8vdG1ANkD6DhfZmr9zyrzN526EBpmWHrnMX",
  "key11": "4vzJpwEsk9BbGmveJxnGBuUkuvmdpJyN9k9DbnEVzubtX8BhcyK8kCXwLZRaL8rEARvimxf1DiGGKDrqPWBJr3Tg",
  "key12": "nz3tUi6fLQiHnk7drFp6J3pL5R7ZbuvHgmQTTE7RcGKasYvSSwPnopyZVUUtLQwTYHxtpcNdx8cQrnMGu8DgqH4",
  "key13": "56CrGW8doDtKuDccb7aRNdspvos7EAwobhryVXVw1xJRSizuGNDfZLVH34Co358Hb8KD8bLwZAeK5TTfNk2zGdeR",
  "key14": "3cKTS672P2rbGRhchiaNvJhw6FxhFwX9KEmTZaXsgheuGPQiFA8doyQzdjvpSnrM6QVXCmdaQz3VzRUorjjCepah",
  "key15": "21fKKoSoaicWSPMiJvD32jXtpTtgN3epT71hiozENS4hoaHLnDGgC2VgvB4eFaNwL8fAGJUKLNHov9yvFNJif4eu",
  "key16": "2LXNLQYekXFKeWUg8uXvkrkhWWPc2qFrPD9sWU4uV3DzJvFStb2Sgyp6YimFj8ygdJ5SWoMMj9ouRqRxWk6yh6oZ",
  "key17": "2dhJyfQq8m7xtrcPDX68SUWLh5YzaXKU7d5xxGiyRDoZvdGvbjNbv1D6nTqguEss7jV66xbeYpbTbauBEKsAvZUt",
  "key18": "3WePsQfoytT7UCmvzHYv9oGbQCAXNy96knb2XncpgPNLgv2sy3iryMpsQyTwZJVG1Eq96ERWwtVNnbUjGGc5fnhC",
  "key19": "3XV9vr5JYuiQe5HTD67F9kreGUiSsncAfBFUJicR6XGE5v9ngiZL3zdrzGgYJhScWgXG32f5h4dPvN9JGdzfBtYL",
  "key20": "2ghXTN6WsPQAqVgB1rNBhzngx18vdEmUFVnqPwn7epHnV2PF2WMeJQDvtASu6dx9aX1VtTLRxzioV1PwTqE9E9LH",
  "key21": "1kaHsDE7oyDne7VkfsxECDM4rLNuBDsiMZ4Wf8eq4te4839BpN47qa3ESa1ec43QEDM3MatgzvGBwiRPCDehWxL",
  "key22": "5uXf5uXtdVEoKLgTEwZPxa9LygwipkcpV2VofGazWSwUvbhk99S33EWRfcTJA669txUJrrQZbtjyLeZ9EkfT6QiP",
  "key23": "5rikqwyeJTA529hjUHR3rEqPVererj9C9A7KETomobt1conToJ22FEcxjE9QK43UzXD6eaNgNtb4JVbhsGB5htMn",
  "key24": "2pX5gyQ7X4Tb4pn29fF2jiM6KGYgcFg9gxxryxubPwpCLzk9k7QnbzKekdsCxvJz8QmLVMnZfcL5L1qV5JGe4C1a"
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
