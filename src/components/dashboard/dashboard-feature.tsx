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
    "2sMCY9mc9c36J3SUSAY5UKLi823ZHRdf5cFzh2TkYhqBgq1qx536bLxuve5xykfSRLivxXNEmr5wuPK6r4ns4SKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqikntopkJE89b6wPwpGdeLpmAjneqEWeNsL79eUz7vnWHxncWYiJukgewyZf4LAfGgABJ2A8NKtjjKNiaz7t4S",
  "key1": "37Thfi3CAnm8mRZMTVQtNKuyY1U1B4TnfHm4ndFjh48vTnYpXNLSbLYCFXUAWZSsqzbtmgXwWfMbM1U89TcokUWa",
  "key2": "42YaZX3AJGmGLHfbJHuA6LzBxrgjdNA5E1NTXVmpowzYDtWnbizy3HKDYGWWjnTSdWY9vbePpUGRWktuG4MUuoES",
  "key3": "28rjck2U6v6XzECLopizkEnLFYshx38Cm8QZhHYELFbFtqByEKrVtk1R9vLHHsXkWnSWcNewRiPzwZHqDiUms7X4",
  "key4": "rcw4MWLWkJ75YvoMe6NPUsMhktQJQoTYRTTcd2BiyrA1U2d7pfrJsqxmtp19WvhVwD1iUkUAELiQQKWvrcdDTLG",
  "key5": "AnrWXzHaYWjxGGbodBfobxbNJmocLWijnHtFFy1KfbP1tayYUZApCcx7JrEgmk6HArH4tpWePWUnzQBWFkS6F62",
  "key6": "32BABQFxtHSHPsKtJkTW7xLjPZeooBM4TPtHR9pie64krnnXGNbux9YwMX2tQjJpAp7PsdTYvaF3F9XEqVK1Nbcf",
  "key7": "3xfbbT3y9swd3iM2KoinPC3T3MUapCavoieDjHkaMnfS7hXU9Dvghm3iFnFctgoD2STaQMZLK5gSxudg7yyZ1YUT",
  "key8": "v7WXNwzTw6ozHgWx1aGZpd3iVAuFgQKxH8Si4J42joPdeMYknPKaUq2eT3aivhkfy48jAh1xdbQ8WF96pU14wXa",
  "key9": "2BNWdZRWqRscZqa4CiH5nRqBYhzGKCzz35ERmdCmFUFRRnNLcecE2fHXz3MS5kEE7wnXcK7N3JqtpWWj1j6Mz6rP",
  "key10": "2eVGZAYXiKg5Mgv3FRDERfTdwy1TfF2H8nZoeyzTuz7FsQXdCggmpmfGkZqBtgniNu6WbgDqN1gWnW9CHoR7LLiR",
  "key11": "2xXRn46d3ojZpWmc4mm5uxKhiffRe42ZXT7LAhvSr8fTvKZAQXPTtjBCwZ2NcuFYY7D3kxffwmbsjuqzJh7Ct9YH",
  "key12": "5PA1upJn6vnRfAxrDgZixnBqJtxi66NCipVphr5yojQDn8fHKq8WX41BZYnbMpDgvsDu1q4Vb7a8UC2ggv1JYpkP",
  "key13": "7eFMo3egYd5etg7QkmPBsE8hkLBoyTadYcaDpuCYGkpUo8V9MjsnQbmhhd4mUdkhEvJLRqZxFYFDRX9vZvGUgWz",
  "key14": "2vhwmSn5TK6pPvSQFYKPfPHFF366n7WGo1WHXJnN6WjnEY8aDf4tyVkSVPPtFCDaHKvd7Sz4BT4tYHFCr7CeNzRH",
  "key15": "Zu89x5eB17C6rnq158EU9m7tED8Fh6NBtSRo9y8vWGkRyLP9rqjiZvFNfVx1efVQLbHBM9zHPewzpFgMJXvjXTR",
  "key16": "3Ay5vdVQSY9qkRH8B9e9hJt29y8ZARfNGniHXCTTeH6uoJK42YwwfufpvJseLSq3zan8qS3KQVDtzKXfm4T72dyM",
  "key17": "4xr9PeWZ6o8itWFTJqBjmCYCCVCteXMW2aYFG5kumGnz5rdMawFwfcXEqu5cGSR32FhhEZkkjhmeGc7CN4iMiDo2",
  "key18": "4CbYnEaXJZWDW4Wi3GiDP73dswg3ct3qAdrd42KPaY7nUjBXLegbhgRBmiEipLDnaHhJGHXWYqPEffwp4KHNixFG",
  "key19": "2wniCwHafuo26UiLckD8Hzx1LoLfGb8KP4a8wDV52yYW2xSKhKvwcBHYBFKJap5L4i3ibtcdyE6K9RrqrH7rbtUN",
  "key20": "vyEPJRGxPdZptdMuJXYE7EXAgRFhz7oKfGdBv1bcK7jbsLbUc4BQ6juiCbSAu2BY7T7QFjaPL7CC78dxoRtWLHC",
  "key21": "121yuFCnUE41xu13HaABEMtHJRuP7K1frG6zMaz6UxJay2LzFxSroYJCqMno79vnDBrMMEc63Ws13GrFmcanp5Fy",
  "key22": "4uHUnuVUFBuHxrzLGdXnAjVC3a6VXKkHTpTkGDhjLyv53tjwhFN36rNH212ZpX6TPZFGNqLAfXeLMCE1daD1qSjv",
  "key23": "3z1vTqDYeuK6ZRcXZvicQGZXshbfUDdFgC53wDrDKGRMuESHepx7RAVPMhNJQeX9sa86dY8hVScF7ax6dJzNckrE",
  "key24": "3xc5Z8NVXYAPNaszu1eQbVMRsvQJQSnwkg7p7WRpFiv9wPUhavjL4VDaWNfDMR2NyjXkhTGrxXXZXJtgAcH5nGqy",
  "key25": "4pqansdos927npErN4Y9GjrhxFXQXYJeDzWKbjoCGzLDoMDmEQ81bG82sTc1Fv2NNxNoNu94LWdLxhsixz72N99e",
  "key26": "PkEdqW5q8nTbA993eAQmwrratkn9EcQFZRSbpuVg94bM6KceAJgMsAW6uekEDpbGKrC3Fg5DNto65KGL171Ywjn",
  "key27": "YH2fHVreQQoQHattMJnj8Nmeoe4TDjttJS16qMWqtp9c4mgCqX4Li8Mz8wsAPB9CHbiNmcwWcNGTFCVRkwjBU4U",
  "key28": "3cgNxomtVT4daoYkVQJ8fsjibKpTNTgTjKptfeFuB6Hvd5ELTqthBye7kj5KFjWfv93aF4yxD68NNVEd85AxLhd3",
  "key29": "bDmPd3n81ybnnniBX3X7Aw2vehYy3DnqdYRAkyedV62KHsdHa2V1Qxf6buEAQ9icLP6XG6a1mDhM8sSZirvrate",
  "key30": "5N55Gic4mHUe6q9W3aEDw1h7P7kPLBGfmz48N95dhUs4GGhJ9PAgLiPYoVsznCQt9ygp1EXBHqiP1f31qgQgpPXE",
  "key31": "3TQKJYdUgNSCsHhcCu9eNjh1qmMRGd2Qrs5ZPAwWiUG3Xyo6HCnLoXkxY6rN1x9vteJLRAiD4dYShiUCHenaeS1",
  "key32": "4VttYpMHW1mowpvn72GavpaebMtARrYEU6UwRnAj4fP6aHf12ZFd3dAWafvEK8Lj1f3KUnXAd2qVBbhB8Sd1eFQp"
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
