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
    "65JrWzUsoddt1EwhYPFFQpEMYaQnDp1iFpLASDcdCwoNqnDZK5oZ2YBeuQSvEDvUmM518xvjguLSMY5kKZNWZygv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RuCh6EPBMmu61xi2NfgdrJx1cP5uTuUR1BRZTnHCdLMJ5UbvtHKWgcptHoG7ZRU53veAuQRSNrXZMTtpbZxc3yg",
  "key1": "2gsJQyGUT3etpZn4GiM4RGNFHf1ULTtJr7qBLhLZDD2KzbytgfVVEufNT9sUSkPWWBysvTKdiX9xPrXEh4joJztV",
  "key2": "3jhakgToMHm1atn1ULZbCkiygkbJk3owZRYJo2Fz2oD2HAEVida7b5bMaqHKEPW42GKe7GSJDZTa5hJP3H9C3DiZ",
  "key3": "52YmNxF7TMLp5iMST3TA8Ae33cftuccjQBARDM1UegXVhScQ9ugAEVnhdLkDEXDps1mY8vU9LKwLYWej3ZF2b2C1",
  "key4": "5KyVcK5DgtwW6mzTi6E57TZk7UeKoqvvj23LQXn51gSSWeJAHBjbsp6i2MebW9AVzrjmaMdn6x1jxGsFZ5cCkVyr",
  "key5": "5Q2XTSzJ2vivW6AmoQaWeQ8pkrriPG9Tn1VQfyud6zqDMyP9Hkz4Q2VxB3xprrCv6VWvvhQAiC27d31zDxsrhM3C",
  "key6": "3wK4bWrCPtFZ9UJmjoKLQ5WNbgKwdWxHjwF5VYVM24vyZpZSdeakUmm9wY2223vihQSSyHkenfKXvASTmVEwdh9g",
  "key7": "5Nt4wALure2Q3oM9mBFnpJ24gDShzvMFzsri6dx4r4WX3vHNaHJ2fiWz6bnSXT9Z3ULquEKAVhmztD6paGYj4GkH",
  "key8": "4Zqe25NEZjCskwQZkdKyDkPDua93qqAsNR5JCZG1F8JRzRxzHjt76DkuwEG7JFJ78MyuSpiYC41sAdvxDhQBjPMk",
  "key9": "KpwRuVnMWMjdhYdn4pzGX9ScuE9vhF5FJVsWBssBX84Dr7JBcxUTjqsGFvsWDNWj5Cs4KnQRxY92eJjmyPNivx7",
  "key10": "2h1uTMcPJ5R7EAGtqCi1TJ8BMQMksYRdj1HTjif3Frv6X5Miibw4h1qiXDT44drCc3VSzzRe52t8e8iUcuXQWoWW",
  "key11": "35syaseB1qA4QS8HKBs6tZ5nCPZMNoQxvtNGnnHgtxe7XAJ74Abf2KFUHgvBv1xJ3TP9xryV95CJNVoCKkZuZ7hH",
  "key12": "34MpQvBKBPu5ixCBbfVKQCMHskkw7d4MX2oqSuFH5pEBQjpsNokMXk4sVPWJZyrYnUXQgmUFygVaSoq84CsMarAg",
  "key13": "299BihU8Gnf6Vrn2L3tsci8D92o5Ehj4UReF8ma45ZxATc7vAbYvihLqMJ3SGaMv1Kdc54m1yfwkBvvLm98T1ccv",
  "key14": "4cbmCCWXmfek6MPcEEZhX5meyZihJrhFnZZohsqTnNGuPcyJrWQdEgfFFn48Xt7PjnoJnBoHp71R9tCYoenGtwjm",
  "key15": "3eLNFNG7BxrUiHMQ3D93rAFjHVCrhWSWmefMfKSCEh9erqzdvJW2BBpd7TeXbu3Xiz3e2zXBJmzZRq7tXcsxWjfo",
  "key16": "3jykpYBagyDybyJ4coaB1WMYH12TDGLJPiTYFdyWvSk9c2vZ6U4NcRFMCaesBuMmfXr5XnNc7ZmBFjgeQFqPtp6E",
  "key17": "43QjRL41y1erJL8GcoRovai6kREB3p7ZyAj1H7Pg4DmZr2A6BBdoJPoMZwp2agVz8smxRPhqrDjqQvZ1SLaa3pL9",
  "key18": "3Dur85WbxwNF6m3pucy3oC32gDrUBBvxviFXhRp4Y58WNutJ4ujkRP8cMMPC7QQfyQjAcjdsVLPSEqkxN3rEnbDT",
  "key19": "22GAN1G6LGKfFrgQ6thQYqNksFxzAbp77rvuHtUZ8VNwVFGizE9hzPToB4FnGEsaegrRejCs9iewGi5Bw5aaha7N",
  "key20": "63sdM56EA4hfAW9WybyqLzueWiyjK6rZUYfkvMifbZur25tbKzftsxorNAdCUKizotYC5Hmm4hThVH9QGm3Av4q7",
  "key21": "65aKwffELcemBbky7vaw7vYXP46GPAQhMnGDS3dpWUiRkXNve1nUjbPKGNm8e9nq2azTZAXmrT23hg2NH5qg8Uov",
  "key22": "2J9ZEBgD411MofxnDKUQx1HsoCMXfNgzbp5HxMiBvL3AHfp6YK1LC8Msfv8L93kxGkjukupbwi4Q65Ra3saZ1czC",
  "key23": "1Tn2pV8cwqspTYCC9V8ZTgUTA5PSxkKnMVVUS8W1aw91X6j9fpj6T6tszpejZkQXGY6AUxtcg66R3SCRNdL3V9E",
  "key24": "4G4ujzShzdCsVukynswXzvpQEEifr6LTKx77G8T9gmPDfVsKMQZeNyoeZabnJBiop4J6JzwdRba6VTNT46prquts",
  "key25": "2ribsb5e6twTPjbyyaka5iqEx5dFdY7eKv6PC1HCt36UnvNViaoQy7azfxbSmpNMDapXgT4vzMGKRekvC81ixPQ6",
  "key26": "2TnqoqQUav2tGG1GeW1u8Q6h9UqKnt9TR2HbaSrQwVTBdiAhpfoqhJBEgJAVUuT4vPtDfM7LLkqUhE6Yd2RYX3Lb",
  "key27": "5W6VWHnHMkFiTv1juJeNB1iT38gLiawsHyssxkCMSEdhKncU6obL8g9vsKgBpaL1EGm1TV9VPyBXLdjzhGeZkfpX",
  "key28": "4zCPZ3hwX2hurVRaSQBsEMqgtuCDSvDAtRdApxypgEkprNG7FGHJtkRz6kiaFeKNYa3QcxWbSMjdJXgfaXqYK6CR",
  "key29": "4BsEGjNpP9XLu6uiBP2nzNZQPHhAfLpRp8RkbrWUioR18DUQEBEgb9mYsYaaW93sfEqVZn9pRThXg5cXUue2r9PN",
  "key30": "jkfyacbHLwCRHXZUoZnB5imMRsAMxDNNT8SpGNj9ZXJHcGjAx5HKKLuapWBX7vjynFtogcK7e3ii1AE56dTdEa8",
  "key31": "CDaJZtp8QtqfyooSLwQqcWWxxEQrD7fH8nPB1wpZWiqjnCer977exwK1QUojoDLoXSCuYxKdoK1h14QjeZbU83N",
  "key32": "5UPRjoNJpgfyiAHY4T7EBJuFqgL3Eqg7FTVpafkaxeXapmGgHxrkxu3EWtZbQp5LRz8Kc9EpfNNtVp1jqJX1zuRj",
  "key33": "25gdZZiTeqtdCKGjQ23HoSaEbrztwWph4MkifPMJqHgymMDTAWDgu2Ta3gWSqdiahPLtfDxtQhRkdVrk6XoULyzU",
  "key34": "5np8TNDt9s7zwBS7tQTJFXcLYsGbUriCKZ5oBzK6Xqn2BQVymETB7hfESgmVSNnw5jT7pxpaL1Q6EgSoQnP9wUfe",
  "key35": "3mPZqrswpJAEu7dRUcKwRuFbPnYMP9VSssdU9kmsyLyP2NspqbgFTZcmfq6UAtwbwtkdHuVtgxSHcDmp7RGdTdyZ",
  "key36": "46aqGs31Y1o3bFHRDT2n7pmzPsuwZX23qZQU1dyJorsAr8fFBj85MRN6tXMaSxcEivAwjbZB1DymUg6vksYz6XFG"
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
