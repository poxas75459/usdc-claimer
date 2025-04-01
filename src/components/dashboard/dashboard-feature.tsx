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
    "2oTZJMGRCvfePPU1Zw9Cs5ksY55VMvZLjEf1wQAejJwe6SjC74wc2Nm958vC1Y99mFMVK6xgs1C9oSKSfSzvtJnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRJTRcmTjHzrj25WA1npwiPPbQgToFV5rkVGXaSGv1TQup9jkuYEVDLVuUMNYMPp6fLNLt1K5ozWVn44gz7fAh5",
  "key1": "3UYi9Umiv6j8Ln2fv31MQH5UFBsRaMDjQp55WRhw8822FqvRq6LHNaz2QUN4zn3PAteaYAjVc8FNfG1GRzyJwvn",
  "key2": "4ncSdPgpCviKUcvxhJR73Bb4X5EGuVZNjPvQQVgf7xGpwPMBf8MbXuK4xhAEvTxAcKqPFZD2WJN1sFUg7gRnUCQG",
  "key3": "4zAFWiqHE2c2qyaYJJzrbGwtmApRbSTfZnsgC6uBzRDVG6iNCobs9zjfGpWtjcRBh2LV5s8xFFbM9xV7CVpd734W",
  "key4": "5NGWd7XrQJaLiVttK6XvVFciMW2x3Yu4nGSKJDDFMWZRYiBEuNH4d1Z5FnxZd7krfyQ2LspReM6UzECdeozSNgJa",
  "key5": "8pj9ku3BhJ5f6e89ApNPUwTJGjyoEcL8a3gVKARbFoPLcoPWRA9uH3qS2ACXRRRokDRHbZuKGV8JyTUR472mw7C",
  "key6": "uU53cCRSJUyE2zt8jSgM6UXuyPHAMkT3xs6o3QerUHnvCGJtTwBwzfM1uFAcZP61uTVfn9CbXGxUmgr2mYtAYdJ",
  "key7": "4oQDWU2vJtFNAZDKQfs9knWJPcURTG2bBfS5s54UEVSz96BUvrs7VCc4a8fJxQxQBwHo2jCBbupB2Vdi5AJCNYXr",
  "key8": "3Z64S6HQnJUqoASJ3FVyvbybghgitMzBfs5xY6wyKTn3A5H12m7WHaMpiLJAB3ikvg4tpbLwaPh6parzSyKuNegc",
  "key9": "3jzxdxtQNXdaXXR3jDmCEHiZr97nZyVGbaMMPHJDCJwmR7mBFYkWxDz2q9MwEFGrxcD9hUjtEoa2MHhnpnQvjGjb",
  "key10": "5Ls2ge1TePBS16Nq2JntdrRHhE6muRKSbELsSqdZtwzSpxemfW9Zyb3Y2xZ7T6Hb2nGufyf5EChxXoXfTwCja2Vd",
  "key11": "49QLT4NjSKECohqagJfUAvTNmbQC1spC2aoFqyVRCQ1eWuTRHcf5Ykts8S1AL2x1nxDWTm3oTbYxkiKDWbj71zBE",
  "key12": "4FafKFimjFLajFGUjjPxvR29ZWjqMM2X2ptb4qEoRoEQfyoxjbcN5QzKaoYqzAkXp9TTzoFq1G8Crahojs2dBv5o",
  "key13": "5xBb1mJvGSEtWXFJwHt3EhxbLBfnv8Xew43d7A9bCSGSQmQVpDuhUBPZnz3wUhzcAJP2RmqsNBWb6Pk463ShbHjs",
  "key14": "3eihB9XyPMG5sqYoPsP6BMbPpCGQyCvQprZ8rPDLyov8Nppcq1W7nEU8fiCj3t9ySZXrRbxvNeL9n4sTAjpgVbLd",
  "key15": "2en9TWgupPVSV7zFjNsuV78C28nRfxZyuf83wcbWnWT9UEEC6xgf6U8eSU2GSJHCwpgDAJLSb5QBtykEaqJsMhoh",
  "key16": "5hEB6UUsvCadTij3iXCgz1fEqY5YRuvwGqUkWXKgFXy7ziHoninGkvBXuFvUBtqvJPCLGdngt9EYmL1goAW8NFi2",
  "key17": "3j16BSj5EMBZM8FjkY7KWEE2T3drbFNpwBAh1XD1dqCQQrWQCZkvxYNCwjTD285JLKuG2mZit8CpyBwzdBWcQm9T",
  "key18": "3Yssemw8f93cT6wZG8SotYeNWZ9oHNZqq6QHn5okSMnvdFZiKGexHCRxVJjScSaHsZ2wmTDkJuAL8oMPhzA1td97",
  "key19": "4cgg3gdvPjDzX7bLYnYjxv9qKtdVtSVH5DJpi3wn6XPHvutpoDNLaQ6kdhkLTKBnu5Kixq3kY9G9P8g7eqcv88ie",
  "key20": "tR41nNicW2qyMEHL18ivDZ98YTmuqXxXzNS99upoM9VnLJ2fXoa6Dzux9YiGTk5iXKDFtyBdDxxiozTRdX7gCi5",
  "key21": "2gLP183W5LAMuwZkjChmnSyqYQAW7mHv2sVY83x9SyWZznpBwXWjruXwhRPwPi2TyN8SxtmHsia9mmTKam99P66E",
  "key22": "3b9jr6dNRLGDGpCmSuUSusx5M3PNg74PW5doCVXBYr2tf3iDDUno8paWB8xmx7kn79Ak1Wh8uTidqoSPpVF8KLWU",
  "key23": "2nrdbmzzB434HF564hJ65MuSbfW8zoVznCXcUtsdLzwgJg7XymXKzy5rVDExAxVSGhm38a6gNU93BkzGjf2oMb4s",
  "key24": "5QoWSZ3QHraEephrYctsYtkpB71TtcoXyEu9s78u4zprJ18aDLT3cp7yhdUnqb9LBqki1jv7J5LuYuQPzAA1jCg2",
  "key25": "5ZvDqQRA9xkkg6WNJja4vDuGVgbYHXztt3hzxfHXUYyYi4V9xMp2w3ZfLU5NFJZyReXgDcAi4ryGhhddyBDR2xvL"
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
