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
    "38i83BCFRcBJe6T8brHY9523G2k4PqhJowATnGZyuQGz3gBSTpFyq5xPg1vvvnTz1gepApKkzixBHesG2AEX28FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Nrr3cxJdu2sx6zgtTdxopxkMSD1J8s7fVD7iq8ch4cm6wFiAFr7dBEcavmgtRoUFvEBPtsmRpZue6HkWK1JArV",
  "key1": "3Qik8K8WNPNbXiaTBXvxpyFSANAZS3ohmNqVzcZoPz3xV48aiv9BdU7XwUNALDaGiG1qTeniGzkXmwNUdJZ4PwUr",
  "key2": "3y5TSdzBijSiTXDDhHq6EtqdmqvZEoxXTAi7NyCWNx1uhC2a8Cjie3cFkRLfKeMQYex8JDdo2GmCbZYP66bAuZBA",
  "key3": "3sJavdVsJeBn4omHu9WsGG9dF187ZZ16hCDGLhNTZjAkVTUA6NLTnjrHB9rfw4SYAb3yzD5vptQNFy7KgrY8FKbu",
  "key4": "5uZAoKn1FcFLKNs3ybizacyfT5FGr5A7TCYP8MrwMmRhiH9B9rn4SbnrojFFJg8CurQC4rY1LntZaZiUgLTtvj6i",
  "key5": "4UDRwrX33nRDV6hggLtdXS6pDGGYuoydEeJyGnc9WiFrCJsURE2igSvVfsddjaNCJhHQJQB26o35iZaoMuskGXs4",
  "key6": "4rZx5HeH9eWM3nt9ucfpPvm29p73GLyJUwn5PC1DjEBa7Eedrbekv6zxHerSkBu2pphzbPAYFFMDyK1Pg2f4YGV",
  "key7": "2CzZYGvWg3d9oUqEXKbswZM7EcHkZ3Z9tibrzYkQFWrN6bNdvKuLENSt5xyQ7Bf3dSFrrnjLxZ9qc3KAaTkFnfJw",
  "key8": "5mrLD6e9J3cwToPUd5TR17Q3c6wxsni1ZCBfx2vR9T4QLTK6T3gesBJNBt46eKXNapSPGQsUhsNAdCXgBCawr5CL",
  "key9": "5QaLqpskQuKnwHD8UkN6TFvmyn1M5HWtr1Wwds9QSMh6s99sfP1JfQtnX4Wpyk3uyMhS5ovBvWFmHosfycYnkVfE",
  "key10": "3iFJXRb3Pd19sHfSFNziZvkfQvpXhNELyvYxUzFG3XozWv8z3ZvXX431itRnoFhjxJfw5F47kqcdovpTM3HZ821n",
  "key11": "4Pfi5EiEFkwifef4c1gTTMwXni2KMHWgeNYR87pCdvH6Q4GzXY31jJJbdKNTnm8q6YpAcJwRSvnvRCzkegcZ3cLF",
  "key12": "21Y5Md9G17m21mQbuFz7waWQh4q28Z8C5DJ6ycpBuQGSFVZXyStxD7enNKz9ya75B1ceqQ3dbVDHvG1NYRHbZNha",
  "key13": "5koo6LVvHybihBEjnmMKqBLme8JDrCYqKPVxvGU5kJpKQdfVu5kyXQkaAXkVsGUWA95sszayZ6UmmSppF2ptZN19",
  "key14": "ZnpheE4CAx39z8bEb4sCQaqkQoJaH7VnwmFzCcVQ2rEDvXHKcfJSx2kZgMYV8JYSjiWPNPghAWk5fVLdar79i1z",
  "key15": "4qmwFUiK1533NGsxp6tqMfT64MLCmq2Y3TkKVcuHXBcvkwQ31PAqiJLc8Ntdj15Stquo7AuDRjV1MYRVDUw9rwDp",
  "key16": "CbHArLHRMCZBNDoEXnEsjKgwgCDjEoWrzHJB1mV4LuHK1V9yHNtNEnbTye2QfYdEBpnxfsFWffCEKSAhkH7Xy6r",
  "key17": "CQyCuXL5otLKCH3rNVoUtMbNh9WkoduCzrfhzykJXsHoNQumLVyNgM7kbjfApC6hvxLvcAqMJedNqiJe2DE5Gnb",
  "key18": "2HrE6kXfK6uT4kyWzC9E3gMj2FYinwocQtKcToEyqu4sxLBfnq3peJjMSD3rMUNxv8qSZwZ5MNF4dqFniDscVWeB",
  "key19": "3gxiYDPFd53bB4RnJ7oPm8B3RhVbtEmdyyNeLPc1kasVySnqU9ii9s6ZB2XLnWNPRU8M5qm6azCT69kcQ72nktqw",
  "key20": "5Vs2fwipcATAnswH2FrEMMqYcMLVdNsG8hvB843EAjmxPJ6Z23K8SSLisy8fMtVvWpX2yC8gEgAdButyLaguGtAL",
  "key21": "3aYYneS4HgQHR7ZLjMoAcnf19g6ZogFBXbeFh2GrjHefnQnW92Y7zJCM8raLodTMt39uW22bJeHM9bcfwQaebjgJ",
  "key22": "5UxSC5dr5duUGHuXWbJt1SmHcydvsMM1wC2PZ3EhXy18eatCnuknBkcKanFWjXoP9ZcsCvLG7vPqo62QjfrDQEXY",
  "key23": "5KFFBqbeSxV9jJVV6RjHqiiYA1MPCmB6F9CtLuoKz7cxr6dx7BcpG5vYoU2rsL7fYfBTK4GkmLLX9R8xDo3WsAaj",
  "key24": "5iLv2zfGJwra9zfy2Nu9xmxF13c1KjfHv68NxRoYGgbZ4P12RHhq4gcRb2WDzU2xZhKgRTgz6gaZaFjmnNHw512S",
  "key25": "4a26Ropuc1g5Erhrk9pQHHg4yKDXKERh18RrUM9XRnpfTyuPx7is3fM1corJwBPWEXQipVMJN38PgbZkY331f2SZ",
  "key26": "3kZZagbPutc5h8HLvADya1y6jsggcq86jKWW8fDmDY64yiJXfvRGx3D2XJUXihxRzxFrfb3irzZc6vUMhG7uvSvU",
  "key27": "xJynBW6H97Muv1coGoQSgqcCQy3HjtrfqVriEFZ2pV9p5jiFLLE9GSX4PBjNsxfNKT786sF5m3Yape1iMiWPCi6",
  "key28": "4dFU9rCPXks6tfygiGbx3KXa4mCNribNaU8Z9sZbFGx6LTFUe15n3TiSgjhKyqBAsett3mpxmz7mC2bQZtizYu9b",
  "key29": "49KE6otdcPxDPqjx7J4Q4G9KHzVdRMTNxCDhdNzV4cR6M1t3xKd7vawT11PENiWjA4DM5zHuHSYz1KsXPyeST4PT",
  "key30": "MJSHixqni2Ti7BXtb3XrdJesC6mXoVroX7xkYX8yVx2YxjSggWAQQReSQtHcooK4UNqaqiDYMURgbqqfgkZVTok",
  "key31": "5c2feEYgyZn7GhdzCR4L5cCz8jf2P7x8HvakPcgpiwgVtmATB4qBKVbq5myFoVSP5YnSHECLzk2y2KVR9CYZnyF2",
  "key32": "47ueh9bT72wXYgDbstMzTKVARmLEa9zFNpTnELsjd2z65kh5ZeDtFvhtYn28fNM2rA9xUQTaocXd8eJwBhKaiTTE",
  "key33": "3StDneD1CcjhptQWMrDLpJi1dMGazwRawQkpSLDbnhGBiHej9QNCniuH3Lq8XDMtgeo1vcHLN41vmXahQZWkn4F5",
  "key34": "2aR7qMj31Gch6FXe9cVvV3T5CSB5EWxScL9rPao15ev3vVsQE3VL7jb2wGPSCcTtHgSzV8S7pVp8rE9jJMJzdssD",
  "key35": "5FNrc14FUP4vVvvpsyq4kUsBvpEZGQUD2Wrz7cXEhJ54a8U8ZbRbc3R26pjsHof64ebQX18Qhi8m7JVQNSKBUC4a",
  "key36": "4w7cuYPfJAV6v4tdtNM4Sf54fEjFDRxk6w2Z3z6V39SKPVBDuKe2vhohVgybBMYmU6BVCiCiGfwf4f9LpsD1bis7",
  "key37": "9yaodbihNHj2MsSM98R9Rtms9k8Svz9XofETN2L9xF1iNdadtE1X38xPXwTzFRGF5bqnVKdN7mngkN6q5LzxNRd"
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
