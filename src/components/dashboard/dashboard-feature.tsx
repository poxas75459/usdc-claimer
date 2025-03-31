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
    "4BM3Ayb11zusgMgFtNeBZhgFQknuyRKbKVJKCGhJ41zLa1K5AYUqNSxsFjBp8E6Wei7j2ipNde9y72FATrjSVkvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BUXqGrA1f4DbGvKANEWp1zMTyuEP2iMCziMmkTf3Bj4tbqyLbxiCDViJ9WPoF7f5wdT1VjGpnLb52XCydMTHfg",
  "key1": "344keGw9R1S3TeCrPyzkTrCfEozAg2Q9Wb7P73f3veTGwAdrpWC1evPWGDyAXuMJphWnzi77i7PMvhwG2GT6V1yE",
  "key2": "2M2ua5gtvSVe3MfMRLA1xANgjmgrd7cat2tCebUWrSE9Y7rq1CVWPDfr1DpawGrpACzZbitFZk13ehHH8gdf9Ubm",
  "key3": "FrdMom6z7abYLu5sEkQjfyYAmxbmY5JbmuHx9nRWCk6hffFSsoNnjN65ZHcmsxq55WRMsof4JVPMnbJ2rCQy5gJ",
  "key4": "56XPsU8srohBMfDYvmWLD8V2k76fMQxWTKbaUpnUNX6vjRQQtskdNcwCypK5bPQWhYT1xtiM9TEKvs6JPGJwTYo9",
  "key5": "8gM1ARLqfki8kN9aYdevX4pcz22sGp4sv361VHn64HrNAKSLJBKirHEyLJtwYwVF97kEz3UPaVaAN6FcPvzm6RD",
  "key6": "2rym9NMPPM21Ptg7FeY63vf2FijwR4wMmcqqiQ6BMfCpPN84JTF8mVenV9EJW1LtnfwZoz9cqUcvMoXZxMB6gE3J",
  "key7": "5fNpvH48jEw8Bpwgc7vUemzkn2eoJRg2L9PBE8qSbFevxNpW1iSsnKCP1nbpG7awm98hXL6rLqC3syFDMowGgYM5",
  "key8": "2WhjPFeZc5fWiWzvkdSN16rFn9kLKFLxLnqVGrD6kto5E8rtz5goS7RAB1hYduxW9AeRzScys2FcMsXSwPCwxWzU",
  "key9": "2T8S4CC9FidrfCUpKeVhJsN4esZEQWPHRNasgEAf1A1vQoQtWRiieq98MbNVxq9dLUYmpx9M9eWJakZutqevG7pF",
  "key10": "4KKpXXzgJS8dP4LvtB5vB5gLHDA7jDg5V7hWq1D5qAdMGkr3bog2YRqpPK5PV5T5Yqqs3nQsWGnrj2FyYKZ5NVWd",
  "key11": "4Y1iixKoFomriP9fSbHCbVhdcnJv5iANW3s671M4eM3G6eLecm6Rd4upQ9bFw13aa6PJu9w91mdRsmhbDzNXAoGV",
  "key12": "2rTK97AageJpd91b5Xio3yUR16sLuhwxoRsmgNKpL5Mt2wp24m1N5JKuk55rVtU7fUKnC9Xsziug8LnQoS8MDoia",
  "key13": "5kMcmSrhTWqZpAR9nWbU22pCJrj112igU6i4HBUSbk51fFJWM3TF2i6mexPZnttvKVmUBRv2W6Sqtq6hXMUACCa7",
  "key14": "2jDN35oq4zRmGhf99NnYz8B6EB6nYAJBTyZyruzFFCmXkVsKVAKjyLEwizKTWYeTyVKbjWbjGzAUygtr7wkWp93R",
  "key15": "3e7mW5D8RyWp6hnFknJdEP2ibGDU363XQHEuVBENVBr5u9SXJ7cMPj74SoBi7fc8J9L1qm53ga8PRAxzADKe5Cwg",
  "key16": "W7LDQPGBBqp1QZRFUjQDdX1CdgtAEbLdfEZuE3vMrBtqMDVT1gsphH2zgmdS1J4KPfnAv29uU5cFM8QVepw91bP",
  "key17": "47DPrY51FTjFTm2iuaCGtEa2ML64HGYEmPQoYS6hBNX93EFgFZ9XnHADZ7FLfxLh4qwqxxkuNnYEJUA3JaosU7px",
  "key18": "36xK2csLnDTjdPG6rersGt4WvcMQcfb8vtv1EE1zLxfiY749o26Yy2j4vmdqkPAKz1KaufFvaEGFZCThqCLW2jv4",
  "key19": "2HHZhYGLw3ojuUXPAogk7wkgsew1PgYEC2mU8sySypbPFejWLnp1pt2ufR93QufudJ9Fki9BmDdfaeUWbcvxEqQ6",
  "key20": "2m4duZkqW4dUWb3KQ5K5fFGAUWRaz1QWhQFDcGMCcWSsj6eFfq1zgZQiU8gdFWLw4qZX7ABxdFjKzGhV5TrqSyjL",
  "key21": "3rxypq27u5bZuQeBLDswtBA6ipc1J2ZcKjtdQhtkWCqJSBkKso5TFvfQcdy8w2DEtPryVbe12sQSs6xnSXuY6mX5",
  "key22": "43LMWbTuxzm9NTeHiuiS6sPcrAaUTFSgatpvhszcnvi1VBFZVzJ1arFucJsmQwMb1TJYDqgCyymhcGJnM3qZ8Qft",
  "key23": "2uXLFesqt6Gr2qSNbfoixJ19cxXV6GxzQeX6AJJMK5w92hmZohqosa1a4arTC3LdjB6FW9mNcBFXEVh13orQ1ffb",
  "key24": "4XcqALFvJaG6YJSwkydqtNiVzbAknfp9Zcc5gbwAtgAtN561aHbA4WnE96CEx1UFVqzE3AfcMvEJH4uy12mK9nzc",
  "key25": "4Za7Y9LoZRnUCD5iMxcjA47jkyyFNiV34ipz81st69YpXr2hcj8NQ8W2WP5cy2UX6ipqjeVFtaPRwx4o26juAydU"
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
