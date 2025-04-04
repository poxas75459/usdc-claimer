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
    "5BB1uDZHHocA88ackRyNqojJaxRXirXpDqxsyGLmhPPuNzQLgqMfb4iSP3DS37Em637QLed5X89zdMoBgZaWrXJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uBTkAJQ3ABA3bNRLsBV9f9GkutdzimzNiWiyptGWfLLdXogGMQ1dwsN6RxcB18fSaVRpjy7sNRw5i8owfeaEWM",
  "key1": "5AfnZgHwg2gAa5kBGD999vNbTXZNcwz6AEq5EPrNRPQXgb98evUNQuJj44kckwKzDapqCvfHQXH1mbAogtDwLhPM",
  "key2": "25aB5XnnLYd38rFTwLptCPEgAN7tS5LZoQ1t13QJZTVtHvrW49bf5MXSM1gBs8qP7xMG1q2DhX7yatfosaAJb8T4",
  "key3": "3KuW4UZTC32kuLzRctMdyWY84cLiDg6Tyoqn1SRjqPAFr2TjzUDaeyhh7ikACQBkat7qsWJ2wNUwoUkBSCMTNXQJ",
  "key4": "3YjdPrcCMUPhh9X3T5NKEyTp3xgTAGByGqcKMrjoab2uvm1yAKybaQn7hGotLATnmmogyKcKdk4SbzKYQdZph1zg",
  "key5": "2xYACDRdpefyKECPJ1pRZt5p97DmT8FGfDT5Tc4GxQhRxVc3imeNj7Cyiz5inLowSNj6F8GWr5DaASKXo1mcw1rp",
  "key6": "3ikbpSeLxeH1cJ2N5TVnYndGzLcTZsqxoffznVsEcdkUrXNsufgPF7Yg9ct9exrj8hkiSX2tJTzwgc3sgQL65bXT",
  "key7": "rySDYLvycxQLvpzUXmC8TohJGDu21kZFugLQKkwvtG2pYjE7mVMxThg1JaSKbMwpKvqutDahtyDwHzLhfTXa6VE",
  "key8": "2uTdx5ZQ6R1mBdt29NiQvNok5CbHmvd6Vh4V4G6tsUEpQDEnPyVaKCfStGXoAW9nhYRS7WK9ePWqpMMqrD6twiS3",
  "key9": "3SWHh63HZvbzkZoxrFEJj4G4tymRubLVKNCxuw7yDuKeDd7MtNtTCuZp9EPz6uAbepQeJkBzYY44vsQ2aCz1yxmp",
  "key10": "5E18uVBgfb9k39SjwTbhSrdjZDK3CvsFFyKuRqjdZNF7tzgQNWSoUxhpyUeyUSzagFZpdgsEtscDeBrzZXRkrt8i",
  "key11": "2KfgFTs3wxu2LvznjdGEdwNZLgZcMfkp3aFgE1MHRi1E6GCZ7yc95arybZkymvo5vYGtzvWsKTDQ5N8YJFg9zMR7",
  "key12": "4uXS9tVkuXbVYjJDNSw76Bi74sf6jUm5fcp33xcwZhYiMtWPpdKJZ8PnzyFqmb2mi939jU7Ynbv1cAMKVbmvV9a5",
  "key13": "67UuEUenwYcS5ZCEyBeA93xUYmw7EmztE1ErLZVX3E5qJzFUPhLTVnSphq8Dbx7ShaZp2bdQyKpMPQdQBhcdtaLg",
  "key14": "4cYqAuwtvFNyzy612txFUSwt6fct1mncdxtG6XJmBtY8smRWFZCJKkGydSHWNVrYWueYTFGwq6fDCquS4qu5zdYt",
  "key15": "pmocojU9id4pagprjvdmNsr2ZKcQkZw28JoLS6bAgDTewPHUtNKUbsNELFU7Vb835QA4u1znauAhrnFsZbETmzr",
  "key16": "3rL3gdLonJVG1Hazy5LACZdLFrLM8v7A4Q9AT6VbRP4CTT5ngL3iqRQR7VUSvz4vtKfiBvwwzAxtU3mEbS5ZMToq",
  "key17": "3ZDspaDNvXqKRjWJ3c94AC2e3RVwzjjoZ2qSueCpmKTYsMw7ZFK9pjGEeZGLfzxMWdV7UqauzcUgV7uYod88kicC",
  "key18": "3oSQNUQLhifRksGktanN5VoveqkZr8bLu6gYndXi3XVgh13F3oMocQxDixKgzkr9jWgDqevTPSQFHsihRxgrhJwS",
  "key19": "4cXAzn1oDtHPCmNHDpGFCChCC8roLYqR8FAZaLXGmM8F6ZwpegsDVyVgJT7FnWFSh2NokJYZjU82XNHVWoLk6KvY",
  "key20": "SSh9i1y3Qk6myHq67NrN4wbbyfYh53D2ZGetvChpZRB6B37qvKmNo2sVY63ijJLUPLXSD8wU8JieJFqFRneGdtz",
  "key21": "66jbsAVHEh9KMWDrR39uss89UAhtRqBVQSfzyruzETvmU42gFnT8gjQojSaAHFnPGVXnkEkCGpsopyhuXvKCiwHf",
  "key22": "349y8D6Ltnd6SaTWXhTGWV4Mi7KvzF4GQaxrCtqg1Dfvu9Uo7YevLj1mDALBG8oXpVCnUCkUU5gLmpfdmkCG2Tws",
  "key23": "5NpvsZXVWeiBzUvp9BS8484nfU1wwNqDCN73eb1ixHsPTo2aWio4GnwoKTFcp3D4Y9UnVHS25vZk4igMegmmYkB",
  "key24": "2gSgmDxuFMNu87mA9L5YZS11uEVPikmUQ9Zo3KXt8xTEhb9VGTgyTQLkR9LUYgyXTSXPYJwXhX9jMjnRobSHVoM7",
  "key25": "2HVbRofo67FMC1SknCJy2tHAZG82XHa9niij3s4WF6xgKpoUk6aDwvMtpKv4WB2wStUtwyUgY9ekSxdVCYtux98d",
  "key26": "MoPqAhfo9mWY8rUzpwmvKGwFT7dbDkEBAUJKq2SQ8verY29t7371gZY475VGnVc2NKrNHnABHvqtr3TeHSZQx7y"
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
