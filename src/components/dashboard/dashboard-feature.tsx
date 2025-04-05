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
    "2549UXXEmCfZUT1NXHytfkz8TFC2PnpHTtvuc9Gav3U2HdT4tkS8qzWp8Pj9gHYFyZRPe3xddGir8QQcHfzz2fST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbdBM7YEu1LcTS4AksEVK1uJhQEqoiRA5knTz7pJY8huGfwUnE79HuXU2Wu1NKA6EjBtraQ54M19KmLy7tA8FUH",
  "key1": "3TdLmobc2kP8tjCNNxXnAvGjY8RRhpQDanW6hY6V1b5kbQnq18Zq4JX27ozci3KruWc2KsFZr5FzGPuQm6gS84Lz",
  "key2": "3MUtLCaVKp3j6UDHa9c6f4iQbA1Ls68gLc2ec9VtrpZGSw9wJXekwbseXQxfkHckfigsp7xQqNvV6aqzbH5Mya46",
  "key3": "5qo5iCPKD5LLdXAauw2oCxa4zsBj6LELNudHsus7tTtLiiMkbh3S1LKBt727qPQZtPKm9Jm1Zd3dNjF76MXENnWB",
  "key4": "4NBEAzUNrpxtbm2KJsTT7D2xd2TdXhG2JCjKxGub1tJsif9sCT62ZdLBGeV9rHZAY4bVoep4DZktJfmRUrJ3JvSd",
  "key5": "4N66FWzxfZd9joXCLor2zHpZAXKiyeNKkPeBddmoPWGYmcFuziGzeowNTJFrVR69eavwfzBSEQe9KxPAtNHykBn5",
  "key6": "2cWJ1SCKAFTmrJeT8JPpixydBWDC96B5JkW9Z57cxitAaWrGxMnecQXfBwKddKAJsim92QNbAzS1LXN5P1UsEGfi",
  "key7": "3gWzTfy8itUPmDscZDT5dV7eBd5MXoWmwmxAVA5zt5oJYjxrdh9R61pxLjLZC69iHaQ1kt2JXUadfhsTRoRCaF8L",
  "key8": "q9FyeUXpM3RupEJC38yeVmdSHw6rGhsZkPUQCRKPoNUwAe3mdcDPrnwg39DMQVgPBC1eg1Nicij8uAV245NTmqc",
  "key9": "43rEZFcEfcJAdhc4zWNUqC399c1NhP4r37TuVPC8w4CKTHwr8FzFiKNpQmfweXM23qxo5Q36nbAfQLj26aptU9j5",
  "key10": "pwk5xoJQA4ntAukV9StfFZQpYg8DUrWb65sM3R1w32u6WnjWWmhQgVTsHzPpq4DAZwWhzS3UJs33p6F1vQocwtc",
  "key11": "3VF271j4opxVrFsuHu5CidTLrAbKnSnCCS5y6mAL1SNziAGTbWkWPCkyWLsf32buq8HpnVnMFjf4Daq2zksSp9hW",
  "key12": "5yPLXWRuCd8iV3wr3Ban36XPNaUsDZvvTc6WXw27p6GcLZKdsGnqrv4q91xcLC3sLKHWDQr3uR2u8ebp6tmGoHvN",
  "key13": "2fpHwfpReWGYKL9KveC3LwUzxV8DrzAK9FoswVHzcz67ZLhb65K46K6G6LkF5mu2DchCcay9osP4C9NnH3oeumfJ",
  "key14": "n4WiM8Zg817niY6cPUsCZdJyRipdAhNhBgqtWNDSJL9z5n3Tu3Qm3Q4W8TpsQjHUpbXjcCPUqm8yXdJHtDbGJeG",
  "key15": "3pSbaAyBmB7pD3a2zaKmrn2YT5tGcGGU3KCf42me2TYjT1NjsR5N3cA6AkjMeqMb68HCGh3eSSbqfsVuwrkEnw1z",
  "key16": "KX5yqMqddg72jGtuNvJycZVcqQRTQqr25iiMoeGEZ77jk6Te7kogVnJeGn5bwmwZF8QVyb96jH9i9tBkwVdqJzW",
  "key17": "2YrFoSkUUtWC7EYDXoAkGZP65gSj4q22hoonz6gDthTK7kFLyQRbiVcyRk7zat9oM6UhhM3PAoFqnx69KjyDFD9H",
  "key18": "67gaj58dNpex5tkdZedeUzn91orkRP4iJnJEJuVGqEvkfa6FjjZPxMEDhPUHz3qgFHzbFVXZgH9x6XpW3nxmBjmQ",
  "key19": "5L59dSHdsuHwg6KX9u1LUV4ifXGcfkkJYwy7kxkEA37K5Gmv171gLCKwFpCHCSu53euMARkPf8EGk6qxSyWPxehp",
  "key20": "GPefmnBYyv9tVxovgizFzucZioz5eDDENkHTbzKkTKyDqFm344T4cMxN7vkzMkoVTsDX8rbxHA3rRg3mg9e69Qv",
  "key21": "5YLzuQCNMJuc4iXZd9jfjvKMRHMASWYnnCceQihSYcbotjcBYPBmcJP4RbrXgtN92yCKNfpqeTevVhZztJ3ciLsZ",
  "key22": "JEMNGfmkhiwEEGYv4HEyHfuJTmCQRo82RR4SX4okamv46uTp7jNaJcGD1L9u2Q6evR1Kt7iwp8uy26nCPGMmFx8",
  "key23": "4to8vvxbdu7aDqGKjc868zc5HjefZ6PEWQfAQrv5DcMtSm3iqmH2AVYbeXwc6U5bWc9cSkNoqGMgNRyhPH3iQfXP",
  "key24": "2Zi9VMEJhFv4smcN6iGUjSDo12vE2yhvkSysYsASr2G7ovPHQF6uto12cv9D8FzMMnJu5aGnkVA85m2J5byEHUjo",
  "key25": "5squ3R7MeRuoimwXTwuQiTVuVJoKrKqaHdP8g2FWiZmtRYAiBVr16QwyAxqjARyRaEEL1VeQYyn6UmEf7wGXZKDz",
  "key26": "551P1EnWDipbKQtTaaqiga9yiuFy1WjGHBPuKGvY8pVQAy2p2S9eMsUg76SVyCp5r4UwwN18AR5nk7witrVNYPU2",
  "key27": "jXq2n6kEo5TXWhfKGJ8ETbv4k8mYdPouHEbcqrrhWakaZFPYJBPvuvD1kyUSS1NyvBaHNdLfum15LchQEkSrp5F",
  "key28": "3Z967rTbxsSQahEjv9chLsbXNjB6hJ9WpZidAp2t8NY94mPS31TpD6sJNjsSQbxWbTTYgAz3cWcVnoyFDPf5RUsc",
  "key29": "qxMNDZvyQ8tUsgaQwWYC8e1NNyFKSo5L1evkmsRhHhU1BofhaWptFTdJQaeFXVxayVTayLNsFdZLMmLd4aZVr77",
  "key30": "4wS4Avg6cWwDhrdcTabZ7e7Ts6AmQNkrZHTgFiYRhdM4KcgbP1vhn4je7kNWivwLeqCUizTgW5Zwu5hELWpwdaqt",
  "key31": "3M4UDUYzhwgnZrqnsFxhD31fjJVysFrg57eHYLUWYeChv99jXNp1aNihJXomhfs9mnquXJ75kNR1wzTKoShxXQ9d",
  "key32": "gK4sYEFULbEeko7htQkyEg4hrBMjsho6m1NV2ANebm7LCXvmBtfqKGYL8VUaDBgaVncUX8rcWkK7bZYcuaKyJVR"
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
