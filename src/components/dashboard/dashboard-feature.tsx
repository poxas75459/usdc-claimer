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
    "66Ba7QmK7r3uFUufx1C3fDUvgmbL4vAG7cMProZVP6DfmLRip4R3WWJbKoHeXAgFKMuvS7ZzZ3q7Xnob1i2HeUSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kLALHRA1J3hMgL4JamU9FLjtnATKbcEvNn7srrHkvUHq9EvvxifxhRZZ8rdzAd4TmaaSvtmbCHLCd7ckAA7uFk",
  "key1": "4SUpdyCXRfctwMET5wZLa5JhrZkoiW9EG2WLWSTxLX1JkJ27Te7xyK77VrHMDGZut9pDa5BsGnDaf9oFjysfweMu",
  "key2": "4qAXSSnj5GSpQE55qZtHAiGMJqcvk1KAfk3zNootdDdqbajcShLfosgBYTvrjB13rGdvkGFtLLnKQD9kBpvdag33",
  "key3": "5g82Pip5Jg1Coxj8QSPq7HD6nGfnkhXS62GKDG8TYRxDe6qvsLFK6YdxzoZBCDmnPPyeJBL8z1eCoDK9zXZxqT8W",
  "key4": "Rzrzm2mbb43Pr79srr5dtX1HwTgw69JEryPcFKFCouG1QAi4zgSVqiZeU6koFaWR5UDXzabpKMvtWeMgRinxtus",
  "key5": "5iFKsKbTUUN2t6HtNdkc4QBiwJDJFL3j3r1ZwgRgnqptPd6YUFKHotgFr2Xwh1MXAYHLF9D8GSdTtKWUgvegZdxk",
  "key6": "47v3g8xksEsVc3KrAtCk4Am1CMcQecX2AiNSNyw6mQxshoDCzCreqFwE69sKtLEmw4srjaHewYGP4TFSmwAVGgLc",
  "key7": "3WNDXcykBLqZ29dL7ssdVSc4MTA4rpjVQHxLyfU22RcVwzhDvc3R8ve6xsLkcvTq9ZsabUWvaeHRGuYRJBJsPDzT",
  "key8": "2NRUjZxhwy1ovPUQ6DfwP6tgWJR823L4M7fL2TB4ZyumabP1GCcdgahkUDHr2fjtxSMJZ8CJM8CnaTMBa149SD1U",
  "key9": "4qs6pW3QBtVqXHugcuwb1CtM7MDtHwfvSDb9ADbCqxmxtyc9RhmTx6AvCUCs9dBimrYWGZKjyRMgWJjV43tN9CXZ",
  "key10": "3ks58XGHjK6qnnw41b5V4NdSLedwj3QuGeP22mzYWJLfv37s9acDxqCH4K4NZ9YtXqq8cgHPB5ATKBgMvnq5EDg9",
  "key11": "5J9hz47376hFYwHNWBBFgf8N3gKco6yhe9opHCstyomvnV4KWvwFippdBi4D955aasvX8awWWSUrFeFUkGjy4tV8",
  "key12": "3nK1L4GJwbb1pCmNjDfG2nwazX2z2ZcyiGQoJrhS3hYMc6SaRNoNN2rSk91rRp6Gn2h2vxrzCd2QLoKTr5H15Ebe",
  "key13": "5qps18mBLBQGFTLCuseQfCmfsniG9nVRFPfLAR49DBE74d6iBwuxmk7r8tKKFAvcgXLwpoRSqZE9KZGqMuDdqDTG",
  "key14": "qs7P12txNBvNnrpYYJwNkGRw66yTiPitHgZagBSEnrs423xYsnQ9FEfiZvRAhVZUxMTs1nMSSsbW5mKcEnAgAyV",
  "key15": "5RJezviy8nki3Y2t5Ud4KqCcdRCvRa1d4BowD9Syvwp9tTPm3WrPZzUSszLrbBrFndHUfANGC3pAsiv3T8wK5n15",
  "key16": "3vvqAh8iVNk3Zot7xPR4ZCiqrHLVmy2dVqHH9WZ4ZHqubTSD1FSKWE2eXyMAcNXaBqgcEDnUd5JeagFDGkdWDw1t",
  "key17": "64uzSLW8YgKF5CwbKa6uNpUyxS8q1w1mBoWGoqVe5TN2gS1Jm83Ljo6M82uWTGccrK2BX1ADL3gYiBN2Nb3FKKE1",
  "key18": "3bgL1ZSaA59MZ2aSpU7jX4spQKW62BieAcx6Q9citE3r3c5KqJx1MLzpGPkyyBpopGYT5e3pev5PqMro3XNfjR2i",
  "key19": "5B1VPdwpKPSKjQMKCcCAdMfRLTQgsA1nKWENQLpmsbM7kkBxYcbvCgAxxfp4skssyLxFuWGqkkXs9vo4wd97YJ9k",
  "key20": "45p22rgamkcphM3PCGBekpvYhCFxcQGUBbcadpeiet6N2ALbUrpy6jaDTzrjtyefR3rg7tfCDrQFQY3WD1mqG994",
  "key21": "5uuk66vFme5gswxqNA7b3cbtNauvXFeepWnYtvxEuus3VWb9yQijcJqCtTDYh9JrUtNoH1gLLJKtHeMa8tim6pSf",
  "key22": "2HKkvn5feAJfSx1LJ8T38DfTxc28Xjka13m7WhbeS27k3EbSC5Qdmf7tnVdb3sZ78yH46wrY68PZsUzuttGBhggm",
  "key23": "1eARRpE9pbtuh27NdYcL7quLJTXXA9gdQgjCCYF7t2DVn51XBwtMJ85yFs8MLC7qzCBSjkwWVF9pghx5B4cWaYV",
  "key24": "21bGvrVy128hiUhHJMKjtomWdYkmMZxG8bBapqpq4DwVYkpqQJ54KRwuy5QexwF3scx3r3CzJGo5kAVqspAFn6ie",
  "key25": "3brHSdxeCNVWrqPQHdvgZvWrRkpQJCqGMYp2ksn5J4JByGCMyF2y2rFEio2XKrniSSazFcgpX9Aps68dzcYkkNT1",
  "key26": "V2qhoy3mAXLdw47TMe6aSqTBBfMZ8nuNWK789ejeF49hTk6ikNPFcf5ERk53fq8pN45gNHzAfbsqqoipsaPZBDf",
  "key27": "pVLrF6nqNbz6AHbf6h2LK8BqxCrjSqQsbPUkcttXwEASFNk2J6i5Mv1QdatYmHj3BYfiNEoTd2cMG8Jtxp9JYyX",
  "key28": "36mqzdhoz2ZW6EJ4KNg5u8tMsguDZP8fZU3RmZnTtSujNxNrQXcNtj3ZRGGNBFavigUeBEvczrW3cejsJUqbEAWp",
  "key29": "5JebD9XbvMgffnLWsto3cDhqsnreC7tw9wS3gsWfNuzGGWLs8UDzU3dW47ogDwv4frjadLFMNDpVCzLY8PBfPxKK",
  "key30": "55qcSNEmQKfnZAmHdVaDvQWYAYX5QQos6VtvKvkcYhQ28x9q3cqfikDZ8tiXUPNDZi7qnphAJ4SHEY424Lud2nNU",
  "key31": "ndA41TjbKRVMaGMe7UtAfjLJU5UstPdGMq6Bwzjjx34wVbAWPeuMGuathYK7Jd4kcvuo71tnNCrnbWmdFbimkKV",
  "key32": "FQx3JtQ4kXxmp2AHWFYRnkMJncRMZuSZexC55Enihriqx14WwF7a4xijesV4rwq9T33tLAF6LjwUkVJRaqW4S7g",
  "key33": "QynYqDhzcxx3vXLMSYUSh62JhGFuJDVGdtpp87gsFsL4VkAy4WqUv47d66cjtDGZEyVx38DCwAwrupPFKwTUQNB",
  "key34": "3cesBmGjFVs6DbWje7ZAADjCqTedmj9FXDTWSBnRJePwfHFu7wQ9JBn3WfdXqazZ6UZjnHVBMQ4QoD98Fvyu6rAH",
  "key35": "2CFXQBMjY9ZMweTEcTcB6CoL3mcnx34jG8uh77JjB5jXSnLe3et6vKY6F99AiXEaMeY8oQU3G8DLQ2bPjUHswhxM",
  "key36": "3zMmhJuxqXr3PCqEcfzcvBguR6fHBJnEPF5xuCygxVtpPP12VLNQAEGi2WnTD6hCqHZXpcgZNwRLrP3Ep2Z46Cf9",
  "key37": "35nKBvy6HQ1UBnNrbyCzdsd2DuwhZxU6M6n262LrR1pDtW6Aq2k4kww477qCJC4dx4dpRFbCCdN9gVqsst63RMhS",
  "key38": "Pp78WLi71nvZKjEJTCJqa9qHZB9MXZqGv4aGj5m1TbdT2ciux5hrCBNxv6hmUAt8vmwvoS4hR7wZRCgHK9ST8mK"
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
