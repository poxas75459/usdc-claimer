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
    "4YM7E3sAmKGZ36tKQYsTtyANgiwafH4ghNcZw4DU89aZNhsFZwR3Zhj1Ku4iauXhS6vZJ8iW9bMXCDhfzJUjPggy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9FS53oxim3Z7A6s1hJdCAQXUyofvrn6uiwYFXcRp4XPKyX8VQE9ixvvYYcJgSwWNBv6S5GXozZjY3y4wKNh4xq",
  "key1": "2tpfsqWFPXzhpLKUAUQ7DB1Ua6zC2cYZBW6Uk1QCaAk5grMoYNo7L6sr6diXZY1ynFfwCpRM2MMQHwMjH5h5RbvX",
  "key2": "ZAMexmduNT8SfoSiCSaDN6wxSWtZQP84wT464dfec1n4fnNHVZsYhLsefEqNsBpJPEPtqZQkB6Z6ux1PfDfegQS",
  "key3": "5iXiXH8hhBotVt6V4nyzZWUUnGBuLfrXxx7ZeK3cELn33DFFF1kJoCDUfNPywtHLSjiBDUUSuT8nusmdMxwUT39V",
  "key4": "2yatJ3nKAj2EQbWcSco9N9pEeeJbj18JPXcWWZE5qYQYr5j2UgA7f9MggVRhrKgBhjTyLu7UqJoRSqqi5SN2FjxK",
  "key5": "2dzGx7w9sSysF35W91txy3ekYPGB8AcyvAeDJVNDegDpnMHSdLY6BEWTLBYQKicUMU4HhCdh5CuUEoHBERWeznkp",
  "key6": "5jGs1bj3abj3ChJuSH8LSnEM9jprANAFxkFDf32zrongq1iLj5HAqPewPH2evknjvm52EnbK3X2HGkki2XFr99LK",
  "key7": "65VDPzP8g9gnapFyqkynGJTxmxXVLM3pkXFNovco9DobaCW2rVv1HkcmyqTHrLAWR6Du5jNbCXnADboeKrf39DMf",
  "key8": "43FGLSv8pEgu1bqLwdgsM1ZLh22Z3FMv8DDstVBTmJVFssYefE1ok2WwTTfWnv8oLMZafEc1rBa4NZV4GnC9KEx6",
  "key9": "fNZPYMhsAoyFnSR4LbvFiswXwTkBkBrRBAT4RBFvQxawVFo5425trAMCwyuNdPmvoYWnbk1cFDhcxYCNns9m4Rw",
  "key10": "3KJh4gn1bCN3hpcqqHozfftpVMqTTCzuqVNYxSLnhUGEFYqjdmVzCh8QTo3LhtbwBeM8WB4ZgaueQWg9ReP8oEse",
  "key11": "3KPvqXQ1pUmqA1GveTgYEDa3LZ14XE7hZUUB6heJQ5uSw1fL9VpPenCsAfKdBEGRTZN6ZLYWAXACTmBcWwz7wD2U",
  "key12": "4MzAne2KZpYYFP6BQ1WgaRAA5QpRrad461Dajav7uGF6thRhoetYxJiPqvxPMsQBz2nxuS4xG5AuYgJ4Kmwd3aCV",
  "key13": "2SZF83cX1SwEnuChgGsNv1HCTu46ZQTWNVYxGDVMqJeWYruUS59wWk25D2cHLFHSKigWVqDCnwPhUk9spuaYjtWh",
  "key14": "gTkot4fkLWRDXs9Jyi92eZeGkpSEHCRpUP8j12UhMRrx28dBccTQPVvj34pnuPMrgUqNH1PugrAdUBFFSvtHBBG",
  "key15": "4XTVqWuuzTdnzgGyaNc5jcRaeRFYdZuw97kdWZHhxnoaP1UxDtCHUQp61JikD1Z1VsL2NF3R3ZLLFKaQdeWcCE9x",
  "key16": "4KWz4TKCUJpknev9YPLw7ziwGoKBpy9FfWiPm5kcQh9Yf3cVRSa46dNXQUV1QEAhnSkeoNJuycqKMom4ZeHtvv78",
  "key17": "c8XuYeceMGHVmSo6zwtrPk2P2gKByS1jxNupLkJXrVGngqRCHVA2oKAa2z9rxJfoc9eeFPC7H36vwJaJfZvm3d7",
  "key18": "3NL9cJoYpEkxSPoRHsL6k2MV82g7k3i7nH5tzJFwLHcAwP57ufW4bPH8qu3BMLCRba74eiEgnQme1jWDi31hNc2G",
  "key19": "2Ktah9UVCPHR8WBky1G97E5ATHKUumzk8WsipQ3dNAnpnUAYiP1GAwQxXY49xEG1TBaPaygX9sGR41RYH5btyUub",
  "key20": "oDtdi7dCsak39sFF9H1DPD4NZ2V8VqbbzDFZeQcwriwTb9GDDjajMV98jLVsUsjqP44B8fU5K3cx33ZCpfcoUL9",
  "key21": "4iKAo1Sb6xXXhZJQ1CUuSD6kgLSiRrLvEFzib4CnPku6XNbE6Qx3aRcXdzzVcQFWH7HdHCFSNmkF1jS4bUrXMHTf",
  "key22": "2venRDp1F1Ag4TfUEhSXwknT3As9qxE1YkrUTjRWPSY9iXbrxfz6k7FDoYCRvavQCt4WFMsm8bMmWMWnZWoQb7Df",
  "key23": "31vQjAxsFCfWF99DcLa2Gr6ZkefzMUewxqwZwwazBjsL9r3qK8vUhaRwyaFezvREKyPdf1JBaVgWYWMRbFNfNbV8",
  "key24": "4TV83cqLE3PpcRbrz6EWvJ6g2DGNXzbgRaSxhgm3xYy5k9GhXpaeh9YZGMNMFGxM4bQaMAqpB5iYD7Zqzv23MHwK",
  "key25": "4dvdMJSheP4d5xrRpQe522AYNEupDhgoHJMs2PEbaYddsb2Urs3Q9roQ2jneqhknh1SWCN3FTTDX9g3CQG7Szrei",
  "key26": "4psgjTBWF6knCPxDWWM6dTjEA6iTu1PHqi2yMAKjnuKA3uQqE5ifNc5P5H98uk8rnGqxCSAWZk57fr4ppCZYaYhp",
  "key27": "2QpB5GLuiHSkxLxsjJxkszDjPKQT8sWUBVW2H6ebkmD131ZFg5TcsQzzm8pq8mMJ9N85ebBWt44XFtCZunSnN9ed",
  "key28": "28S7gvwrPuLhV5Uu92gePAojkP5fQr9kGBa1vjuFf5DAqc2EZwRPafMavbpEx88criTWRzRCKghaWzz4PiRSw9Cf",
  "key29": "2cuZpV3qzJndLtFWoBb5pj1p1cgS3huzQv6P1KFSTeAHrA4dYfiw3ogU481DdG7xknBjAowrHBSM1fCjJBCPh3YH",
  "key30": "63jHFfq7KJcWGCQyKF3h1bAHtWCrdTckv5dY3WqxukmVMKFqfWMrGurjwP9zgvKZXYQQ1yLd7LFaN6jbjLKJM9oY",
  "key31": "K48kuG9WTF2td5orz1HcsgFBcF4JyDWHqoafyS8MX21WSapCyo433bwH2UUsLhQgQgLxJ6vYnVU9gJKShnHtJqS",
  "key32": "3ZEGg4bQcXJ7GFNP8V6CGC7jnQUqRBvo5sra8F91rqNGe8H3hMP2AFu5xaVcoXm2vu6kgJYdqCuz9JG6BDqHRagN"
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
