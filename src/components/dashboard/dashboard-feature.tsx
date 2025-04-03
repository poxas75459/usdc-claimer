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
    "4kd6SCzPpepdh6BLoNDxsnuePeE9AQxAzYBcW1EBXfwojd9BBFBsS1VXRWNBRVN98DVC4gwitnNXMc7y8HuANKaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhebAxtUkSptrSb7KkrUwaWV9gtWqbA3fhnTJP59NCXBhT2geouNpJP6uwATX6tknk1TGQXsPi6NL3y25DA4dmo",
  "key1": "3BfqM8qH7oCzkjMCi8fEBNayVVaWVm84ySszQCZm8d1jQa7oQgH4rXAyKqefyPrLiBhnzgiZ934S8y3BbPScJ7dE",
  "key2": "2wno1eH1wdSkGt4FdwgDforJheyndFQJGmBWaWevoCTirYs3gkQSqaSMasF2JDo3JBg8qxtD83u69mmuwLzg7fj5",
  "key3": "3E6V8eHzCpfsMmXmpJbvu9fA37skMpAuRHuJnhTeE2G8PEzMvaXR5hSncvZAMcmjHftm1dVbmBAMYzbv8g3qXTEd",
  "key4": "2J2VVojWhjnLp5A9g8AoZmBSzQwHWPRpmAu6Rxu8FsCMeuxptFufzC7xgyN25N3w4BdUAXvnqSRAtJUpKAJXVfrK",
  "key5": "3492hm6iaedGDvp7aMMKhnqWKFH6mKvsGi5fXEX26qxRfZKvB8P1bcWwmfK6nwwprXCk12oFq9zN33mg3YVVUmLZ",
  "key6": "2GXkGCGT1Y1RMG6f4x358UZVK3ZRtYYi9FZfSofEN1qR3t97avD5fmp9GPjxp1ddAWhKBGWeSE8fPVmoiaoCvq7R",
  "key7": "4A4m1MTX59aSMzXwyNknxKRPkAMfNMTCn3YiX3uaEJHnzVn8LtxX9nyaGPZsWNMuBbcaFKPnyyjJyBzM7ozwV9fJ",
  "key8": "4n9zpoBPbAZvfUyTkJ9KneehTxGaHsJPXxnmDjGitZcgmkuhRxUua7pVKfKQj5RSwTNN2fDy2udhUxxRg6Q9jL2h",
  "key9": "5ENmzzmrhWFDVHKzqpWVz7fdUtkSgRYJ4aCDBCdWM1GtDfZEYFJQcyVbiwFSKL5rRgdZbL8tpxqZhohsSpiZiwAD",
  "key10": "2sCb1ydE8KCrTx51QdDBX3ycoGaPfJpiFrHU7WthD9G3yCNzALN1SerCFCvBMJxrcfmXb358fHSCv1hfv8FuwneA",
  "key11": "5pPEqfQCniouJ2daVr8m6UtAN81NFGgoiBJ7NzA3NaZs2DoVU7mvAWgK92J8DGjK32gLypQjEgv7kXLywfDnnGp6",
  "key12": "3fCn6ceuoocg9K3zh3N4AUfgmjYqtNsU5pUEnbz3Nv1BQVQ32j3wKJv71UrioqTESm8FuaCMHHruQJABff8WL178",
  "key13": "aU5EkvsEqFXDDKpDMXKtvCFCR7bVpQszssez5kVBq4YUeFvmbWec6hNBtQUYFEjFMi2JJLed1TAJTU4Y5XGK5Ta",
  "key14": "JAKgNbZSuhRupupxH89ErbGwmPzMXTuQA39Xb95QwmAMPR74Nefco2AsrnitsAz7P7PaQR47LBMHLpwmb3o9oRH",
  "key15": "64J5bThHQ868GGjJkAYSuoW8BoBL3cAJQNcoQ4ANQ4WTMBYGFiBUsFQh3b14v9x8G7j8sAYrpKJzMrnqnRDQQ9UV",
  "key16": "2yS9da4NsrdiRYU97a31pXaqGhscXwn9QmeAZR241wMMLZmGmQAYhxqpL7Sz9ULfBye4NFi3doPwwmKpyt6KHPvu",
  "key17": "4B6doEuqjt7GrhzSarAajmPwbCnVjtc8QjPMq9ngoVJzXYHnCAsJzcxGr2W6pF7u6xtx8CQr6S6JG7B88vN547tN",
  "key18": "2Z9PxBVR6BKNbkCuzWcDUCXVk8g7QRY4qQdybaDYCx6X8sa9zQTCzeDdaAfDfY82yXHfvU3LPLBCWEdYxhPoF99J",
  "key19": "N5t8Lg4JE7QWN7Rgyx8zVurdrL836J497VZ2xyvBjQZdJes1BDqTCTv1hdVgjzracNRYYHZWVNsViQQNguPiHe2",
  "key20": "44jChTUs1Mm7Sr2JQpDhK9g77vsaU9q2kt7ZEmD9yTBwrw1q2TcUpkVD1ZaLAEDcRGXU17Z3c2edrWdnUmrTMbsN",
  "key21": "5B2nAkUCJXPynmF79jbf7QbsRyJx8ofSdpeU2wPaHuHfkpjaSvXhSrZD8VAPF4xkfEjYd2Vwv3Q92S2V7oPuVPDS",
  "key22": "3y3r8F3vBamTYsLdN4AiNJQu5pR2xWwrqFj4ZPqUERyh4biHEiM56VB68PRgE5biV5kcf65LgFpzqD6hKkkjES6K",
  "key23": "dXDEMsGmfQzeT84W1J4cNE7dewq7EY2Zy2qQPJSostcJm5a6Bj7ML456wRch1ZPVEKnd91WdbfpUg7o77MkzGJo",
  "key24": "2LmuJDK9L42gKYseFaGx61dys4nRag3BKvUrCTiwaQ1pLEdsTt94WAhW3mk7UJCMwQwPL9cyyYaYb538AWASPYMR",
  "key25": "3TDexothYrVm4moraP8gHUdzmeHxjGEdvbpnv9aWTzjWwVLYaeuArZYiyNLe5rchf7Db459WhmG3xxuBTb4Br7Rj",
  "key26": "5xKZMpWFuba7uK8xixk8WLcKqbCyFmJcrnTh17DqSw94RtEHpCF3yHWMSbXtvWqVoawtdAEuZUyHmwdS4wLgLgsj",
  "key27": "3e3U5cAoMThx9jGbfcCkTtvgGrCcwXwy1x1ptP7ku9NZaDPhLzsbTXpnEZUhx3rcn7mwJnszHqAy3pG1eMyPf2BR",
  "key28": "64nJgJvD9kmVqdmHCD8Jbcy8rZXaJrWRzLL5urCFVzpqtQki71FznHBjRVNatX3VDHQmdzY4H57Hs8YpUTn69Nvb",
  "key29": "SCBheJ43NjYycZ82SD4N8N7HwM85YQstwrDaL8pXZmcecke3aXrm4s42L7ukAjcoY6j5jKmPerWhLcPAKKJBCce",
  "key30": "57b3DVg5yNgbScxzPu2uRY14XGLAF9JeEbGhGHKTegdwUZBXUoxJpPT4fZ11pXpikGJ7MQ3NbWGnCARCL6F9pvNj"
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
