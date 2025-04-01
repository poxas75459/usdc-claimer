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
    "58yP8abgAzMJuZoD3AYYGbywpCPu76wXNAS7t8kcYURmYVgaAu5krc4Lc1PRjPG9rhaQg4dw4KrBV44ypd7zwXWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38bLppXQb1JkhsfpvbtCbdsrFGxFxP8f1cTQvfArXKyPm3jACUZPMY1xKjJLEUgkV3jRgv4FWL4LA8hhRkPY5WPC",
  "key1": "49y6fNcKx9GQQdENCBEtVPpMb5anb5UfydpetosBoak2LTakicwG1F2TC9H8v48pU1MsyGuGqzLzsWtK1KwvqKFv",
  "key2": "56Pr3WPeJ9iZa1fvP2HjfDcbsVBXE4mLnvUcBQqT66G1b6WjuQona8ZXVGNu4twyVGXQ7JM2FYUqCbTdEj5cwtRm",
  "key3": "4dmos6y6HHYsGWG4HiXjB4xMzzdstmYJK6wVCGcGdBEfgrYXHtoeSem6ayBVg5NQTW31aiow1vCpBtHimRq9VEnm",
  "key4": "58DQ6SpTL8EStWVFXeZgezAdozysJroUkX17jtNkUmSYsdvi3MYwwNfxanvAbNCmqRYmoBvJk8oUPNzgCtyNjkL1",
  "key5": "stbm1HSJxmBzarKEFeFt8TGhfMLPufqt1L5s1bNEQSj8wdhyNzFDookLi4YY4yAJ1wMGgABT1TQZjYPezuRE7fp",
  "key6": "2TJ5XMt91LgiDjAtN6Hpx3U7XUTgAgpbkLKuCM143CDtU7gzfxsJXHHssog4GYjM7QBeNGwLv3hbDQmYjnGY7NEC",
  "key7": "vmfKjbBSu56DKz4W8kZSezm2j2aKNN1SPDi1DSA6ve7AAPrif2NUyXk518jke8cJf48CquXuMCju3qapHbqbYdf",
  "key8": "4aC5uBwt9i8E2Dcgw2NG32GZwkRP9QVVbPqBocEgaMBc1DpU9Tic8AFKoxAvwCYgUk68poiRmuWAk8inrooWxqWC",
  "key9": "2f9p24DwfZxgoLSZNWQP4KPivWEYgVv1msBe5FsmDpzuRyvs7mk5aN5aKp6WqN7n9vqeTsU6oVwiePUJX6Py9wYt",
  "key10": "2BRQe36Jm6dSsjPLq1AVRZfTmCd1GiDKeZ4931GgB8QY7bvXdu5Ni4owFctiaZ2KsdqhtghpKStBvGZnLhMn8ppV",
  "key11": "RhQpRg6r7q54HpZfFbA3c8CdPR9eRNKLwZDsc1XXubtdkhjpRQLLVrK1SQdbMEkpzF3r59Gy45stXgGadJyhPTH",
  "key12": "4kneaJ78VxRakz1wjzeqfWj37gx4ZdHqydibmVLudhf1ruLCc5xXob2BqFFRLWLmCraQBgPPajBCcpFmp9cywwYc",
  "key13": "3SGjDdCC6Bscj2woXBpUDfBSz4QRGeEjSBD3QYnvEsg738HgiaVc27sWaaWgpNNsjgBCoMo2Vpxns4anuHnsYLss",
  "key14": "213VT6wXab16EQ9TDekNUuK3jLX8ctNBSvL1PkD8nUx2wHGyZEDbQeRJi6QhKv8c6LUifoEZ2KDX5oGQAj8dfQoV",
  "key15": "17jVjnr2kqMFZEkhk8jCuoCq9MKqLnnSxNskv7pUSpJM1DEwsEiA5U3kdi44ANGvQwcMCvYghMSgS2H6VHVZ5E8",
  "key16": "33JViqSfRXJgBkqS3FkgTdcnwbtLdTuSSVnWe1WZKdjsUZCaa5qmr3dyHvZt19UhdbY6BLLc76XLPLpG5VZmPS3x",
  "key17": "4F5RtVGFVDxuH1Xj4yDkTVSxR3Ayh1G3Tunk2XfaxtxBmn6YqXQ6gM6DrsYqYz8Nk2mc2Wm5SbBxxv5krY62kAoz",
  "key18": "5bj4aFi5AjiGhvxowEN3rGHupaKzkFAqiuTUBiKGEcsWrm126HUwRPD2WsstXCDBZetHrdHNBUwn2XdBManUsQU",
  "key19": "2kDsw4NXa9mWAddoFRvMzy5mrRY8PPrXSNvPBnSTfbpf3Uzv9gcdqb7NPF6mFBi6wFQ4oqYrMGEJuh27TKo5CoYn",
  "key20": "YhJZYx6WK1rJctHg4xmNeg977no7pBADRYEzScAyQXUBQU3sGZ3teyyA5ArTPSTTruBxheZV5CbAdRhNbvoP5i8",
  "key21": "41qGAoEUs58VinRBgFDmt36GegAzhyLjMuZDR78gDkz2UEiHe13cVYz7F6dAZqyVBvQFxjjPu8rDrVhFfQH2gNu2",
  "key22": "3YQHa7gRNbwAdaVzofzXXW8SpsqdCZxSY4bNCddipHQh2Wo8LJR1fB5jjBZr1srLxmmqESixgRhYi2XSzYekZDdd",
  "key23": "A2U1HYNd51FQx1tBieo5WKm3JCypMwALMtCNtUbUx4Zz3R6bJnTzdZYZGBAWfQ5LxM68AiBAv9MpLdxrZQrXV4n",
  "key24": "46n77JseM21xexvPyk2D9HEjzC2xMsEiXkh7gS1TGLsrDi4ejf66v9kAZLfTpqF9C5eshkbpetoyPswevr8dR3CE"
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
