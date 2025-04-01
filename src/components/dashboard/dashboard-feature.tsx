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
    "3JhpveJMrmQPhhK46QXQ3gfpYyD2bWk3qA8pjhNHcW8bqEdNVTiPrFRanArsmyCxSP1RCaFMZAaU6iGzygDLg9kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUM7mq1eL7FbhA2nCine2z6Vu2Zo3BvpnPZs2zSyNGVmwA9djVfPwJKttWwEyvTq95d5sVpHHktVh1Hw5Uvrb89",
  "key1": "yBRLYHJGr1oPnNmnouzUcSh2YPqUDC7mzXt6umDFCJzEnTr7P2PY12ebXesZjnKDjQXd9X2U9GCyAhPbP8QvrtZ",
  "key2": "44VXPfsUEGiEaxTMxudJRSpMqaXTkgATmTztJ4XE3xVGbGmRsxh1P2J5mDr4wt1EzpVL1m776ohTKseyohMANAW5",
  "key3": "K4W9L5GiV8KDUWbXZiMSsgCjoTshd1yWnDaeWvatg1W6hM1AmQ7fEXup7SSqhKPKbz51dwphoAT7gYgjfJHEKke",
  "key4": "YYhGMhYND82JAiZr5p4tKh1piXNWWpZyp3HzXDQwZWB5GpNuNuTzMqgGfc3NFdSRLoz8YpiJxk6NqodsaRkvGHR",
  "key5": "4VsY4SAJzJuKB3uWmKbXcF6jZXo8H5Uqa7onSiHK8a72kSg5Li7ohBD4UqvmT2G8xQ85JGMZUWiKKTLAR6pUdK6D",
  "key6": "ZC7zmxyhXq2W1CaK4B8Ux8Cfy6eghjminKt8WUSfiUvhkdqopLpfBtnSZaFvnhPHksGDmUAYsbU7CY6UQYP9he6",
  "key7": "5nvvZCJgrH8HdKtfGAQZfJeCF7u24FMZgyusoDfJjyAnWMVZqNtU5vLtYXVQkNHqpRdXbcb6agTGhWVc89YNT3YD",
  "key8": "4jRWuLzFg95Gg8XCM3Q1ARvmebMorHUDG8ra4dMkYHgaiwPb8gsn2kQttGyrtRoK1xnc4FcNPDPT5kZApf8pWrk9",
  "key9": "4Xb2xSzR1AyEUZxuR2u3MqaTt6enro9jguoBZqPFt5vJ4tBsm1xngkbduPabf4NxDZn2PxBASxirLhUTFpUnm7P4",
  "key10": "52KeGzxqxNm5JQ5Bj1XPwSe81L4qyMRCp7XvBfQ6bVah8XCAiC9gF43Y1rdaeiwkpqxzkabjWzPBXH6DTtiYtDYN",
  "key11": "53sRiJrtnBVaH2ouZp6RncGUmTv9RqmdnwRaqTjFJ5sftqSzevfLkoQ8D9yXawJVLXYpnK6n15PkDSJmqtrMC9vi",
  "key12": "ypbLPkpan66mYkNLTxrjx3uxG9muMCzitCw78cbohpG7BfyvD3eMDmardRz37PfNKy8FunKSBEuzg8zB589usEJ",
  "key13": "225He71QhT5bWjroDSeYbVqxiDumD1rTfPoLFnpuDPeyJeEi4zSwGFzCcHygULrfxk6HVeNNM5xFeCwzJzUGjkRr",
  "key14": "5YhnSPXHvThNK4P6wSySgYPkgo7fH6TsHrszPSEbsBgx7bkQso2zjtuVCU6AqGoNXDU2sirhzDWNVyXUZiupXBVg",
  "key15": "2T82CfeeyUGehCYa2Hu3p3dkuWYKRVRTmpVkQ9yhGCxFrE1GVR2CEK16bALBWBrbpftLPQwSK5rnUSKBkkiU8y7i",
  "key16": "9EJks2qqxieokHxymuBCAfg5SKQqTKscJVf2LRb3tQ13EhYMXdxqckYDaHQ89M8y4VwS6EXUhkQ5Dk4pmQxch1L",
  "key17": "A1eayLp7zuB5zYkPyNhgerJEZup4D13UaCuHoAKjSiWFxHEiRGU2W6vHpirLgKjTcUaRvg5PKktsEyweLXa9Dbm",
  "key18": "5jFgVS8btAEFd6aPwJT5Ap911xfhT93W5pUqsMiN4og5UEsqCCnpCfJKFP1B57Q2cFTGKQNbJqMJXkYXN2Q3oiaS",
  "key19": "3ymfUHzdsTYAdWb1fGdPgYFkeiJFzzvzP1eHL2X3XR5kEfhoWqrra8UQsuRtTJcB5vvdU2rgKwB8ipmDaWURY1rw",
  "key20": "3PH7CL9Phitxh2fMaXNQZxbnPGJmDQSNphaT4F8YJWZ3fqYGExFGgPi637qta9Hd4AnyKwE76FYscKVWSHN8bxZD",
  "key21": "2MLLwS4tEBQzxQoi2TPjcS31JzQusj8Muuo81pTnEMUVpb34QfkA4esXtiYZJtkr5xBpEH2wmTsCHHoXF7QhkK6L",
  "key22": "2kcYwkHj5JJFZjusnDdBiQLGsrxPMafSAuPTsQfRFiw79bnd5s2q8dFTQbgc3SSXzqxLH5CSmR91WN5vcJbxwsPn",
  "key23": "5cLLDuvoZLo4oRQRMNFLkGxRJpUH6Gq9Yk8soUEsiZq3TMRdrgA1RxGJbSLj35EQqBcWcYPrpLhCEAadhnbGc9Hx",
  "key24": "4JzUa8tWSR1Rc52mr4eXCCbqPk36SYDC9pUu2Mp3rJe82pUo1voULXjJf3Lmi3qsFrUKYLP26xR2TorJneamYQDj",
  "key25": "4M51YPTdtEydusmF433VsADbRvD6XRmN42ra782PMRJ3sC9UWsccjLSBn39zDKk6ByxDbFnZgR54mGGtAUuUMdh5",
  "key26": "zDz8tFALZeuAM6vpDfv3hNfsBTwT28ZKMWCtt2WUXtq178Xm6iCksq5QnkHkmadusWmea1gsTpF8BLdsqLVfRMA",
  "key27": "3iVX6YnUNeDT27wXpqDSo5wbPMDBHEn1H1uE7mmLkQbAiU41r5UZPMuczWyyEtRNFw8AJ881LSDLFXCaMXFPnRXH",
  "key28": "5SrMJETaG7Hdv9oACWLcCE1P2JVPFYKAUPnAaf3rbMDmRzLsB6EXBcapV3iDEE4S9uCqJM5Z7MHxDP1tEHJs5Ts9",
  "key29": "4gcuyPLNLgvuL36T5BhFAg3vgqgWDM2E6S6cw2Jt8k36Ax8XWtZm17Zuk8uGnFz7HWegW5NQEapB7ZqcktG6PDAs",
  "key30": "3S6FpM6pU9Ye6aNi1dRifQ5iR7pFihgpMQJoCUPdiwxR4DxjncAPbim9ArgbQziKceiSM38z2kKRaYDZuHUwmkSj",
  "key31": "Nf1CXuioAK9g3eqg6XzqnPaXJNvYXwA6KUzj6G3VisuVfvHCqyZdxeb4HoFbmKf1R1uBMwuqYfjLzSBRarjAwFV",
  "key32": "2GWW9PtK5weEi1QUSmeMBv79Xa4YRb8GhXrL7AciNAZg21HX7HAGTdfc9RhfsQe7bVnaRydRFYjQC5wDM72sN1CZ",
  "key33": "5EqJrw1trdHgCpY6UzZhb5HuJeYAke4qkK19KN7e8oZTefJgnQbspMghCM2EU9fFTTVbmbUU9iqvaxTQY3D8fhaC",
  "key34": "2DjqZdoKvemufkf8T3JxKvUL6jhGBN43BFRaDSxTcw8h8Lu1ghyR1Bn3tW4ed5iKqMnKQSY9G4dWpGC3KzLSMehT",
  "key35": "2GyYi2iLwffarh3Mr8XkM5V5za8YSnjqmm54GzfuWf4V5CvopyzRLNfabwAmYDueP9eWXzLHViN7UrFsbqvcfBi",
  "key36": "2HHULTTiYE8KT7j5VNrpKqogEDu5PP6YTh1b7Evspd4yksbws53qjcM71PzadDqL8asYACZYE1GWKZEMJK1YerU3",
  "key37": "4USvSwndiKS35GdtAyBpTg79PXgX6iJmoHUn5SDBwTYMYqFtud1jW4kV175vGqFwehsbrRthjH3Vq8mz5xiBRxkb",
  "key38": "24Wkqgm3QmeKrUG54kWHFnEdDj6XSZt8kB1KVbX8jpMsEoFAVLeDe25HzR2chox8XDGo1WEXnM4xVkkPRqQfwzHW",
  "key39": "4BRJQJWEqGt7FAWQTU6sLNVhBz62pRKn2nvC29aXLtmZJkQeAsGfZ7YFuaiSsP3iKVcN8Hd2qWYk9rTCvPWpQrhS",
  "key40": "5Tn3QebUqHjVCJjD2SdWKYzVFhU2p91SXodxh5W5CstJnVa5E6hiLVtk785fUoewRUzxaKrUZmvmmxZ9vVC1Y3qV",
  "key41": "GuNLoWpZeQFnfR4aNUAwi5Gbuf2X68XYTLjXQgtjCRStKMA2GcW8cwN6fGgZNSsHf7148Nr3xe6b4iFfRyp4TMX",
  "key42": "2XrYfk2YSk3QV482BbFHnPc4g4LcE9qEthraCrX4yLmLEycDeWs9VkifTaEh7aY6xCqicpmLzvNsxemZR6ZX118S",
  "key43": "3ruXXa8JvgJZCrF9j6BT7zEPRKY26UmQk5RqZHhyuvZ4iVQ4mJb98KFS24qY1MZjzBZsxQnpfEdQQLPPpgSeiaQn",
  "key44": "3Now4GnC2pYxjhBA85X4X3pEHS9SPUe2zQEZUh4LUtVoQqPgPnqVykxPT1soU51U3aUoMfpw4ca8478eLwd9WnKw",
  "key45": "2ksbqbZGUBzGD6yK6VPN3YJUh4uYYp7oPwugWa54o4G512mrurqVRP5aUAk34MWFKwLno23VzQ5RMpGsRtd5m9k3",
  "key46": "2CPKSigYTAqj91emrCmr91CFi8rzq9KiyH1zPgjZkQXC3KXFNGZDa4hUTDGMJujYdes2CjSbscCc3YytxhJUBHks",
  "key47": "26YG3ANpgw8CrVtYB2c5sN8JTjU3gkkJFvAGbZySJgascJAMDkHW7XD1d9sBCCd5ncpyHVq1Fb7EUXa6QLfPR9co",
  "key48": "2Sbr1DWqe6MyabMy5Zz24Tcc9iV8p1AB84YsMgG6UrKwpAUTcbfxk6VYAUSFywe175a68m8P8P1AfRZf6b67PAwh",
  "key49": "kyw1h8SxVtkpzAza8mpBLrmWw1ZKTgKnnpUMyvR5sB9dJnE6JWG1Z1uUUwpEcrK2ZHZHJsanpjLvJMtySi5CJaE"
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
