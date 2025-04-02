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
    "chRadTZdZVsuvPBYcD6wrwb6hP4hmJQ2BRZhrdU74g2gCbxNAAMj7vbh6baq691DjeP9gyAoUECSBo6ZX2hFSwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usJyg8ov7pN8ivVawjUp4Sc6c6Vp6RcZSQq2hKCPevXGWu4NjBP4Bu4qWgoixKTNZsbHfmsr7oSdSevLtMrgtZY",
  "key1": "2vYoeZ8jzZS1Ax7XBTWxHhMbmNFQ2kwBAZBD2yZmiRz2tRF4SLifpqY8NtGPJKUUHpZkS45RTtTiuLPDGxULTiK3",
  "key2": "4mEHq2wgnn11NQXnDkNNeZj2VNps2fL6K4JJFmy61g5Q46WnooSzXoofTHmNBe3W54NPTzeThtcfns29hKMFjobU",
  "key3": "5oVJQJginAtYFgDGftjPDkHTHAMEvMsp65HWokYPksyaUmL6f7Wyodv6RBEVnqm3PyrRwK3KUDzwNA94VUGrnJGJ",
  "key4": "4pactZ1yDLu5eixLetVnBcR9C5TGrDbPtRBfnqrQYo822PkAZbcYqEAGfun4SNmgk9uUn336449cRhteCWEEoWfV",
  "key5": "57VjQmZti9cwkWDJ3k6muYymB6zRpupUwFHkiVRR2MyMCDmyRo5KR8D8k1v4aneZKiCc77o2ERBeBgD7DRBPLxF",
  "key6": "5kuzieMucNwpqw9X2W4jS6HQUnNWBtDsHSYq8gaowFq5pFiSWBzJ9otydqKSwVTk7zDPZ39XBXXjmKdUeKe9hov5",
  "key7": "488gYsbyw1y16a5VLtX9SGLrNHkGCVunmos6uhUktoPFU96kowCd1Jcq8aJkdXpSfuxh7sLWk5XDXmq5AgHAKYc9",
  "key8": "2vpXKr9BnsDD6jwKCsZmiREJ9LBn5xVnnRyHosgnns4njLgQVf6Ans4tBrNQ6qyH8XVoxwam4euamVkJSYiYS9Pj",
  "key9": "4Wnik2Tf8BFwTNXn1ZD3HWyrcLeXHM6tB1uex9GNSPyfPrPWrRKBas489bKHyjo2hNixedfin39tmZsKToSk5Csh",
  "key10": "5qaatuWmahc3ZKk8sU8QUYw9TQK2UddLMAUzt1kEGfsuBZYuoYiV8i2ngU5dhzy4teUGnQFh1c9kKtTK68ZweP5Y",
  "key11": "sNx3xsqg2tQdwkdx7raDKzbZGAJmfRCZfn2bPmZSTXrMcPkJPpCjgyAjAT9QaLq3J2y2MbhaM4Zys2SsMchjDce",
  "key12": "3181WYMpPAzHkVwYFKBotHJq4P6b1qA8dP2ioWeSQ1QmQEG3ZsKfriw9S9e8S44zrWr89hRGCuTQNHtCDw4yQyJf",
  "key13": "3rtMkDJZsXmspL9c5QJPr8R7VcEAxMM5qhC9u8XZBfMVTGEEHRXRddXcqCNTzHXckbKKXKTbFvZMKNCYvDZY3hmr",
  "key14": "53i5ETJ9ZEQ5YWVYUB1fU31eRyKBv8Lhrp3AwHhvbJY7KundJv3EJci6uExD5sWTRzFU1L1ZEn1NGg3epENkgw4N",
  "key15": "4MR3nHA6L934iNKA5qpRmHF4QRDDkQ1HzUvBPSN5awRxgTBV1GW2pqucMaG15Jg7aMb2aX27WeMfR8TQFfBUWiro",
  "key16": "cMchgcQPGysynZBEstUETjMuVxt4mnV5H5orsZP7Yn9YMcQMAaxRppE1FfK3pAaweHzb13aUw9UTVLRwhx75dAF",
  "key17": "4BkhYM8EDyFTp1mKc5eyjJNJ6VcwA1rdTrnL4Rq4ahQu9qp52VN2sqhGHAJAH7vEDrSXbUSoqoT9m253DE2K8oA3",
  "key18": "29GCVLwjB3AsbbW3ERzGUrukdJQnTZDyLnaUAFmVhNXjQCst2mAs4pdpYR7x3raRdCXbkYiHcyTGnhaSxszmAYut",
  "key19": "4o47TGYYay7cPBHnXVgp85VJJuLkDJiL5QYfKEPKU19iMFt9DqpCAWWSkx2D1XgDdVS9hvDCp4opW5bEfxDdiZCb",
  "key20": "PP1mLYrg76kZK54G3VEGbtmrAJvHXKRBRqPLmsn1PWZH9j2coHYC6D8RidfndEHihtChdFBaJRoMTbZXX5L8tHm",
  "key21": "CmBaNWVvBmbb6a64Ez6HofAVaGvktKUi3ojv1aZE3iGLvayqkP1YtAhAinES73mpvsic6V1XGhXAorE8yLjH78u",
  "key22": "3mFahyqzhV6kDen6hWkEtYDobfESuxhPCi1Vtj6qN1QBxN97qCCN9yddv2wvYddimz5e45BX1nsjCQEUzjSf1kxo",
  "key23": "28uSAcm22r7SxxKjUsPpTet7FBSnvZEU6GHAhPvzWgWPi4FzQsfFgSeLjfabsyKg1938rUj6P4ckV5bQLYM8opvj",
  "key24": "4Fux8gu9rhr2KkuRz2qxvo3QyHsP7Y8svVb9xUaKsvZnNxZKj18xVn45RMsQvH9LG4s92aUp7pq3ER1VjmubZ8t9",
  "key25": "5bLKGbB36vC35zYinsxwLRrTrBZBmrJc3dQxV2PZiYUXEykm9a4Qjy6v5V7VrFxWaJpFhVXjdJbn4jfhwzGD7e7Q"
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
