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
    "3hTak7HmDwymNZiPB4QNQu3Q764PSCRg9Pw16nMGFxBduQaqMmSrmvkKMExPDb2wJCBy6dezhMCESkyDcaDCMuo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpdKSrs25Te56GsWsJLgmd3AXZ6u4HjVgBYLBHhTZL4tEfUqQYwdGEUj7f1RsWQDn4DArpys95HyUuf6TQT8R7e",
  "key1": "2Z5LoJWUh7SffJDUBQUqri1gMzqFKqpThej8V68gF1gzBLhG8sWzrLhE27vobtEn2C8sF7GBcR22vTMjC2HPv628",
  "key2": "5siwmyQKXNrdMtrGrJMFhjaP1CPERZWqepv4kU8cpZrQTGRQ1n1mL5fBjBhe5MjSsSgcGkyAkWHTWeu5PPaH1oso",
  "key3": "ggpXn3p1JapjzGzqcpX2rU2KArz15KPjjrCSGyb7w5syquzQuieQHnzc48HuDtLamRVp8jU5SqmAwq481xLvQD8",
  "key4": "4XcEatRq5opuiroHgmFG59XFTVxf68yDYE3wrQJ6g6PgmU12cpEXasDMWgvB4531XsJYYs4pkuXqGezTUPLByrVD",
  "key5": "2GQvPe6Y3KqtffAGjGCE4Gqou5CrggbyycqW6E5Y6vzGurBuxs2ajSK5RYonszSfGMYG77Bs35vs1uiRm81wtm9a",
  "key6": "5rPWKpsnm6ym6qZ9QxKDJfkDYMUDdJ5Ki2mtDcyeaRcd9BBYBypW4HdjUzPrTkirHVDsWC4dvwUDnqBKYS1MYqy2",
  "key7": "kAYTm8cCTtHUCyGdoZPfzwk9eNWu664tcQijypnibuMgSMkNGiKQQ5mjFkmwhXo2X9CqJ79nqHB2v78PG3uAefR",
  "key8": "u3rm1L2reog4wGZVgbHwuH7kG3hHExKeA9bBbG7gh9LrouD2KBNZdorVT8CY4SGJPSkiENDPJYCb7u7hQJnLAQu",
  "key9": "3awKHVvGBL1JbJRxm4tkE7iEMcqwsBGduwvnsHhh7kjGs85T69n7G1Q19hspN1iY3gaXHTq5FQ4ftrN2RUXkKpMs",
  "key10": "72cxRvyfFrmjL4ShA22cH6sfyjsY4d64kjNbvjh53EAAKVFARafxeApeSq9TMzvLU7Wx6ZnhozKhXG6xkXwGPoL",
  "key11": "zpT2zLNBwxDc8oos7N7qxLn3Mc2pcp1m1bnbtSMrARTvanTp8Qd9cPuapT5R25qU2ngapz2W1TTLDPjL24Ax25E",
  "key12": "2PKGKQTmEojcKg9SgFwRhSEH4JtQGhvFDZnGnuEEEYnzEY5MWqVVmWAD8EXKUT8HfcQjSBrgUL3oSCd2zYj34r6J",
  "key13": "5Eagq5nEUTN6rE6WNT6vGqKNxxKLXqKaty8KksBACwjaQdJvL7cvyYJB6ftmvdPMe6hVWTmYDB8a8GJypAYhz36K",
  "key14": "2hcqFyyJVoS5T3CVLPaKsB7sCVTpkqMDJc5VTYLxWGp3WE9V5gxL1cLDN9w7Hr1F8rhupByAv5vjVPbUgpV5eL7o",
  "key15": "55xKjsPmtBJZ5jheS2uvU6TZ89dwXUHHKXjpVSw39GSRkZkUCgzBpbwgHitmFGyDySmYDTDn7EbWm7AmFV4ydcWM",
  "key16": "Ls44MXU2CZR4parkLeqjTwwMTdbFkKDeXNGNYUy2VRnjFD5rB1bn22oxNjiFHkwRNCEeJRbpDqckQzek3i98ibu",
  "key17": "4hmmPCrWmd8xYLuVDfvhskaCYRsqreUz9MyehZCr4qqYcfXaYfgZCRtEBJLT74Ymeqrxa4j2Bytiry9VQo95qJ1A",
  "key18": "4ikM5Qnxt2YV6ptXt9GCBoaVjFwtbCU9zd9N2BibNLrXdurqP4TX7JDtMojZTJLiA4xvHZhWVwcAUdB5jSa5ETLZ",
  "key19": "2QNF3PzvQuTBC9gGwcdb9QPWRNFcrvnu6dpudWKGFtr3mVTgPekUSLGt97UynA9yCrMRA5mNJxWrozCGPmdMgF65",
  "key20": "LAWEMdxbDUMjxY4dMNzHNky1sC4yDjjzYvog7cUnkJr1gDcKhxLmFzGrW47bBGaCChwv92aq9czVXCB64d5wAiL",
  "key21": "2FL1XTAiRcPzhG4ErHCjWafLHqUPVaFCpawQD11dYdeJeVkMCDSeBksgJzrX1L7NWFK2K2nQhLz2bbDJcphM6ksq",
  "key22": "3dCC6rFdrDRUedm9XuaKdHAf1zhHugmbFYAmeM1Qenw49nWjkmVCAis2jnmpbmzyXFdUsL6D3UjwwheEnomFHqsL",
  "key23": "32zYmHvdND2r6qxYNr3fpGvNSLEWphiLw6Ma6gJHC5iogEEJKUvKU3VWprwRmiMEy5PzfhM2e8Htopw17YJqiTaD",
  "key24": "4FTJvtPZ29oY6qshok6M56ydJCuMSB4HDtk8xPTXgQ7zu3eVHDFg6Ttf4XP9u48ctGHhQsDQ4AMoZY6KoQAnLeeQ",
  "key25": "D6Z1u2HetRvsejiMgb3wTVuegFrks1ZUbZpnaRmyEqWd5iovuNxk8drcbWSPJMTQkRfnX8A67VU7gxK2py4s6Vu",
  "key26": "4N5YBWooCLdFen9bJDFqhJGkEuy2jDczEySd3Xip6NvxFgLmPTc4GBVHNSmX7PsVuJDg8wPJbd8FUscE72pq6EJu",
  "key27": "2YaxCXQXj4N7ct3kmApD84kfP5u2HVZ6Uxr7P5rmJFxnTULMH2PJFL8e5Jr6bVmzAN7ECXP3ZoN79zBSovajAgEW",
  "key28": "5JDmxj9ghgtBWTNyyvRMVsdmcSPW1jbZ7YAnYd65oq1m9xbHyFm8XjeugKoiK9NLmkEbTRoo4vzJnXYxVGTqxNmU",
  "key29": "53Nm9Q68SkCWH75GBTTsNKRpnyL7ZRf6nSdiFxteRv9cTD5KDScBsnQjMaaVBtSVU1mcwnMwhkPaKs9UMX2RHZD9",
  "key30": "2sNVyoPTq3RjNZtyf4JeyjuGt1Je1XnQoL21sJhJNjyCEDpxtvdFDwgU8Q53bYeXwuuPCsMZzNN5dWFDSJR33R6w",
  "key31": "4XUZ7tGW8ARqwm48ia24LisN49hNxjaegSVYxfAdC7euDB5Tp4aYuGniDYQAz6SC3xFn1gQYFpUXBq1gpz9iFU28",
  "key32": "65AXxVRqLVrDdFrFcEvdKF1CmwKVjNwwAF4zpT1L1kbr69xEZLKFNpHiEvoBpjgprDTUUMz7GJhAbuvLnzNrd7Ze",
  "key33": "2fxgnbMwvoJp2F78q1TvKtXPEsnSmyiAMwSmh7zf2hyL1PiCEfswXsHYgRCvqYcreNvE5Mp8tQAyQqCqPGe8mRuK"
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
