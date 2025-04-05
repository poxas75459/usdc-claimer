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
    "5KygPzXmQkMHLX3SXqjob6gNKUgsHqFL4yEoRQmZWfaPbcpRxUz5WhN4qx4ageDhyZfCHuvavaYXtpytPY55GbRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2wQtLVpu6XK3ET8pHDr5enXVrEPq8PQEu9N2udevKaboQABWSsxMYFbuP4pR8TqbXMR6xmm1QjEYbjDAWTGi9n",
  "key1": "5jtncg5m4gBBmYuo5Jk5JgPaEs53CTpM3QefdqjynVooqiEErJsrCYBmHE5b27mB8qbPuceuS9NgmQ5R8HzNuzhs",
  "key2": "Wz3rMTAxa2D7AhdBGXDLw1s5gFu9uyYrxNdeBhPgw5oKLnTpEfTWAFjxMkeuAijRX8hrkL6cM7Dj3SuvqmKy7F6",
  "key3": "bBv1e1gFF6KgR96FDTkXWoqXL1zKuReyh8JwiqSBGCa99Dbe8PVpjMLNT6LQR4r1RgUeMDhz47tUgiUHtEGYAZG",
  "key4": "5dc56D1hrN8ZyCfA8WBzcboDsykbGH2f9Qew9g3Qptee1sW3eojHFb3PG26aL6oSi2nBKmsVJ6knYrnetUKoZzZ5",
  "key5": "92hKY4vtjd25QuT4UdMp8TFkWFy3zPrzLtd7YYzrzViK6QWFjhFWgyok5K6tohk16J3TAtoy8NzhZWSomP21TBf",
  "key6": "ikme7hxGQFNT74DYbGKZAm9qD6Rj8G78gpnsMe8hbKaBUCpb978XYDQE9rTUbKK4VkNuAuiCekNUiubepz4B45H",
  "key7": "5nC15zzhBLQDX2tvmWCCDYL1MvssRn2p378WRULvMsZzihGZyp3W37iwvppSwmdRkfushMxSigMF1dKZkAaDZLYW",
  "key8": "2hKLu7ZxmcgAUkzCU3g1suFaedsgjz3j6t3R7wrZnsWBQAKSSZ5PSTinFMwb5Ch5k7NBQbqv96ia8FM4JGhjXoRr",
  "key9": "3tfSnpX77aiJ1Quv2qeNpzxqVnkMMWcsdqRvr6XtZby9miufRzkcV5yreryzWPSswgLYYetE5zaPMWwwj491Uszt",
  "key10": "4KSgrbGv4dYrADETxyhfnXvJUSKjhr1DUdkzyLvXog1MEJ2DYdV7Bvb9VJTw3sSgRB2ZJ8Pgoj1S5yCe3mEVv8ux",
  "key11": "2UW1r3knmQRQFpvzcPa9WyPGrG4oCNEf7Ucw1i1ebRRPxXcpCjy9DSzwhZ6iN1yRcNfCmUMtdcub1KL5y1usvbTP",
  "key12": "2ceUGz8qy8z7NaWeWpyiLL6zoxYrQXfX3Q9w3Yiwrj9WMZeZ6rvhe4LkR98X65c1mVibDX2enmrk1JHojGpAfRjL",
  "key13": "8HtA2QZWKbr1UTUbazTFK2dqDGPEBYxaNpndKw1yt7pWRGULqPzgWCf1nu2ypGbSBN6vyD2vzuQrmnZaNSwt6ew",
  "key14": "49EaBg66kSAJczJM4zcUGFJcYW3KBYasii6s9rGDDgoy1ExLD9jXhiXxTW5chNVhegJSVS1241U4cCS8NyvS2c93",
  "key15": "4m8ytd4ZeaW6jmaHg9EpFLNcg8F9NfwZz5x2p84xjyiTKsFZGkE44NXPnHoPfjvwdBezrXoK5mXBVqxg8DNi836Y",
  "key16": "RyniC77SXgLbG2BbxutLMqS6dGgmUnonC4uvS1XQvWbKerP7tLL4UV1icX9u7uwJFbaGpw8MJTMyLqvrN2RW6QL",
  "key17": "2JQKZTMD3Xnpt9Skos9ZBhoBDAdBuTABxi7K7XrJZEWgeMGkupWg9ubQ9a28GfNn6A43vqfLAd63zsKCN9eQb2vC",
  "key18": "5UUca31kFdAHUft3qQoKbK2qovHPbe29bFTMo5amckWBvTErE1Yq7gBueWXMV59Uf87VZYNpyy9viRsuueKgEHd7",
  "key19": "5QLXGmRP8igSFG9LpB3ZCE5UfDLp2HeK9uCjqnqvp376QDiGEUrL9MCgFHeitsJCDiyeCeiCWEd5c7Ffs7jN2S41",
  "key20": "2r6FGJ9RrQBmwzoh4fyUcGpjUssWWDqTdMSDVf6psf176bkCx79GUeeoXMzw8Yc8oPaf8TcSEnzYtnHBvj4FBXd",
  "key21": "4ZgbDnrE3tyWgo1HrpkWJiaPQK2zG4XdxgsA9zVc46oxz5akzfMh5ZZEhgJAfuoGW2DwKEitrfYCP22nUnNbGgSS",
  "key22": "3WJEjTogc4Yu35MczZ5xKMRAvdmevk3oPctCpPaT1UQFYgEHJu1TjxyTFuuYykfZ2Z13WQHobymcvDRER8vrFHRr",
  "key23": "5ZTTzxSgboYXqbUmFyEhss48v2msAMh5rtFe6ohR54BM2yBb1MAwwt9otyMrXonD4wMncJZ1RZJdVM9QuNXu9tBE",
  "key24": "3E1C34AGRxRNQZnFfHyGW1PZejKuy9cMeKDrZvLN2PFtbycT9TrvnrcWL3Nahtu4uSYTCtQL69uAXnqr9FSKKbCM",
  "key25": "3whAxYMphoSwCGahQxA2fujkHNmWwE4umgZ8y1RcakPyUhSWtJksYQNDpk3e1bpsd4fkSL4L9tBNCRaxVJAvdSZB",
  "key26": "WetMxpoJhEHnSF49Tdc8X8Sjp3YuAJbSYgLkrFspD3ev75JP3yJcj7TMq8Q1f3FbDpwoKxfz1MFYcNRNE1PH4ur",
  "key27": "5tetejafQhfaQvwNviW9vrK8wEFa3DnPaD3JGQZSBG5aKh3Y2gMBtXq6j6gbcQKxJDexCuvuTA7SJfFPTZBAC9BV"
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
