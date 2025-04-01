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
    "3WxYB8J3y4CfqRB7MR5qben6HpZcEtyfHxHn3xHKTLNpiBLY1JcRtiPzEwgqHPT3dGuVyfYjSDLjf6u6jUrsDgJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8H4tzMdmzt7YWMp8LEFusCWQ6QNtHswXnrXYgM4S7Kt5aqwVeYrceEUtwee66Fc43aGHXjQmURvCVBVw66q5GxP",
  "key1": "4ThLK2RSLXWQGPEg69wfbMKTnzeq5aGseKzD3YNGjSQ6ANFTGjVWqCJZuxpo2Uzdk9bg2jburHC29Act7mBFmy15",
  "key2": "4gNGkzNukKxxptfHBeNiutfsTYFAn5gNNeHK3BviRstwDYNFoxnzo2erzREPzecXMQJmpzEjbqWMnyCwqzCoFZc9",
  "key3": "4j5iz39GACAxyMbntwWk6A5hhz35gz1QhVo6kx3zsX994cGmh4jfweHoykVPJzCsBqemwJ97SsMrH4fr6Jzmt7Yz",
  "key4": "4YNEFrPTZ4Cnr2FAkUDw2q5YwmcJEaoQb5MRetJyDmbmdwjtiAmVngr2SbHbgaQx99kBi8z3QfRSqkVwQX5T99TY",
  "key5": "38628Xrmmh7gTuca7jNDihYmE1DrFYqXyqVxWsG3R4XMBLFtLaUej8TDsc5XWxLpPBKdZNUJAjeeNp8tKdddA5Pw",
  "key6": "3wTBKNa5wdofQy2H1kXbWPicXM7tnG7SzNatmU5Y4Th3Ri7FaHbqGdLnTpzradrLjbS1syL6HEqhxS7qZ4E78PiN",
  "key7": "4jDUJacyMJLhgAxbmPNHteHP8Zc6AhV6Lw3wz7cMcc21gpyDPuaoKnZ9iih3stpxntWPv1mYEXCnT9418p5HZWvS",
  "key8": "qr8NQrdMcw5CgL24WcLNpgEDvEwXH4hpJYYqu84M2N8PfvpxYmvTXXj6NniPq83TgSgZ6SrPB8wk5pDhzkJfajL",
  "key9": "36yWuK3LWhXTrtxoQnDMHZDgwH4uUzBv2oZd9DZgU1VYQuXHd4pZ48wjP3EMU67A9yxAZd4GsNWD1GzCKSmSJYqk",
  "key10": "3gBXxMMbUfjzh7XFuMZFwRQgeXMAgaJGN2VQuVA6BhtpoMin34yZw7VHndvkeEcPAiDDeAUqqXd4Xk9R9AhQkUXC",
  "key11": "5pFAL5CvofoPx43arrxwFLCVxfDCccw8iu163UgLNENKJb7MfhmXbgmKkeJPFiySnKUX959DoT7NfQBzNbonaBCm",
  "key12": "66d3UjsWuThPrfkP6xzZUXyr3wEDikSx9p8qsezzhYEueSb1RE4niw7ikKSCnQ6RoJJg7PaXpiyUMSgGfGR9i7d2",
  "key13": "354xJSCat17cVX6ZuVg1FmAQebQR4nkB8vDmsPC16kZUeVH4i5HEHcbBeMzSj6MjxqTueimDALg6ZCbnSNWjCXAH",
  "key14": "449fuM65Fg82QWYTvdJN6WDWyfddDS845bRA6rwgAYKJy4ddEzJZgUgEStfespVCT1BstgRoyRPce3ySXAYKyqRy",
  "key15": "2CypqQzeWfp7gZEHXVjoDWTvV9tTKhPxjhP59ZMyVSeyh2W6GhpZsbRqxa3zE3CXS2DeQ4ZNn5mcqmmkTrtUPCCR",
  "key16": "4aUTDCT791y7uBfwySUS4awWji7rD2cf5BUnrsvGB5gARZLen4SCGdTMLrRgwGhGsZDz1AqZkCW23bfuU6iimhCD",
  "key17": "36Un4Kv728qpcdpTs5Gv56McXXAqPhna8e7dBqiMM7K5mzuh9WBWrS9LwKTNTEbrXASzF5LYdTdDy8JfeMNKmvNd",
  "key18": "44tZcL23kaviBuVqUsD6FkxSPvrY73ENkFpcL5SPEdkwAmWAd4bRzVjijCThiSw6yrHHCWgjogCdGvaBs3YwpnA9",
  "key19": "5D8PkFvZW9ASJVvC75WT7fmPAscnfht3ny3UqZWtZG9Znez1NSZ1W4ixVEwh8hnau1E9paivt1zh9AvGddx965fF",
  "key20": "2d5RkMnbuxE7RJ2E94gD9gwaZdGiYe3TwSL6zb5Gboy9baV8RpVQhwSLtALdDAVw3fCpwzofnyWcnxVNSyDnP8QL",
  "key21": "3byEWRYFZpeciXxDnZ813LDrRXkLwPTEyGiGStyokhY2iLz1pv9YUdUv3uuUw3Ny8EvUgiW4a5f3eJLCBSG9Db6b",
  "key22": "CAUmByxpBcdTf7ViBHAgucJ485fjFGJAxX832iFxiESWazimFMNQvY3SFnrbEVu8zEr3XWnpoqiXUpHutPSz8tF",
  "key23": "4Y4mHQhrcBe8sSQHRgRHEqk53eELfxfu8Nx615mgk4suV1njiScaGX18juahA4cqUbPNmsTYuKyCfYi6gVDxP4zY",
  "key24": "3Bi3CzBqUDYdoBw3yBEbLhTKwtzcX493DWNHpk6KVaAoujfF1rWERgAgguKAb3JNGHeA1Yv1cDA9fEQrZwpmC5vd",
  "key25": "3UfZPXN99zEoZQzmXGPjtnGGBvMTDo4tXJeuNq49UBp9by5Md1NQEHwEC3zwaCZx6NX895vBrJqeaZyCHonX95WE",
  "key26": "2qanWm19ZJDGSCvBajXsrTGeeb8CnXQwRSwE55QFQ68RQfiGjFkYWkSfQtekPRwvksbHavVtQhd2E6KKPvmG7tvu",
  "key27": "2hh3SqFh85m1PbU547kRx3Xo5iVU298RH9zR4oeGcBEKy9vNZVeAgEGJC59A7TQ3u9xh7738VwgtjYBUeJXkF1cj"
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
