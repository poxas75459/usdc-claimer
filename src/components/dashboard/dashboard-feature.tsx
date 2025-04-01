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
    "4XVad42kGYeLfHyW6LnNGP6DPwg6UeK1dZibo6mbsAjvxZNkpYWGiNsC6BxD7wzLLbewdzkjzJvzCBeFSBSXNEAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H74aitzdPsubhi1e3YkhyrYSkoWftbXCCu7ZPSwgYkeckX1zwvqZJeKVoaJfsEGFpWFjrfgbzQsrt87p5XESGYK",
  "key1": "4s9weyQr3nZuB3z9bd3oTfkK2zXg1gZqgQ6dhRoGvte3GY68cXLtkAv2EVMn9ZUypAuW8wS9tgHQpA1DARxtuHqq",
  "key2": "4oN2WBnMYXJdEyNZ7F9VorjRaL3QosXUTdqihaTZ8Lei9MhqXU3tqUkKcdYRF9XDrkbqk7T6JRzMpbJhrUX4Uj9f",
  "key3": "4fmKau5r28gDdrddUyLTFpNnFtHWYk41qHEWUtgfxbQcmVAYuiVBWHibWZFcGhJFLeuDhfkq2myBkZRVoVRVu6pw",
  "key4": "2epQXX14HYFrAsUgqHsd2fKz8o6s1oGyrNt9uVTyZmBdhWzkYi7gCN4dS1GoU68xbB5vFqyPhRRiRoP1zSzHyVPn",
  "key5": "3yG7nhc4wMWE4MojQuR677GFy9yykHgioWfxprqNJzksH7k24dPgoAvKBjkPCAoyHT4KK6noNYH3Urd3EGe1c6Hp",
  "key6": "2kQzaqe6EtF2CwqLzbJ9uuuWKPa9yXVA9rqGgEWnpgpoYiaiZiURsKwMjrDyu2q7fYngRGMwYruJwWsPYnVQnqeo",
  "key7": "2rafzAtC6BcVniFBgBjidGkndxMkreSJCBEbAS1RiTViB8eTjsALMtj1kynSmxkdpniafvpm9JRAr6sZEpaz3r3y",
  "key8": "4TTUfyYEmbAvaUHDPUkJUzAq4JHuSYRC623zdn2yehgbJ1zoUAoNx6b5dbE7wyzrHoqkJXdhs6RjaPyNqrQBLCSC",
  "key9": "3RWmShShfuXysfAbvydBt3pFGi7beDi7WkmgY8wtvJ3SDySGednVjA7QN2pNRWpC4bsUh32noWPm26EgRDdBTtDp",
  "key10": "4EANwwRFWj9HXftZkYBv2pXTG6SMtFtbjLpddsySCdLePKNgd615K26pNTCmYkk5ndHpeqRZt54c4kDLmWpZWikk",
  "key11": "3JiANZABuToCAaueUnHMWqWpJ2PdmVStvSX5NEsKPTyyFABoyQqoJ8MrgTrfNfqLeyapb7W9u156PHKVde9Skv2B",
  "key12": "4aYELyoUZm9RX2CG5bK4mx5ETqPWJHAjQtVkg9SbS7xsLzuCDYKWoVXVFWujxKBuG5tkyNtaWLPMSeKyphxqQKhY",
  "key13": "5y6Yg7d5hMCdLHhNS9YN13GLTrqPtsum8ox6dmiQx9mJg4MKVWgSpKyVWQkChHhuKWu5XREpAPjpQmQeJAT38LVL",
  "key14": "4yedW2irdDczezLVNrHrxE1tGT4iGSwnBv3YaN4QWwX4icJqb4BqnRruy2N6mDc7CSrFKHynraFQXbT9E2yGrBT3",
  "key15": "2EPEMygEi34gH3t8WbwfxFEe1ZEncr6W94zm4BFZRnGxpUGT2r12LppHZjueC7Zg9wUgrZdQf8fNpPAxrTM1FF3U",
  "key16": "45dfDnbmMXcHvdaHDRzwAqjjtUTSuNs9ubcaHBrhxbsPp6vzeCycqUxWSjpv2kUvSn66UBEhA1KFR2d5u3gnz2MJ",
  "key17": "2vKW72yMWciM8S6mB3k5qDgfaacQBumK591uxtP2wM58dH6hXYyNa4JJjD8JWZRrg4xdiYEujcTQz2aw9nyUne91",
  "key18": "2zF9AppoeqmHgo3qt7F4WVAwXPCSuFmvRmXGWRPSLrCvf9mKjNBPjheSHhRmFTdc4HPs7WzRooa7K2Makb7eANZh",
  "key19": "pndiu2SCqyEHghJLwq2PnM62NjuCvdNoB3v5fEohYcFsd7TWBSfoEr82H4nSErkpECFxkjEXNxHFwwNZSJQwwxb",
  "key20": "2apLnZer8AKZPQuHQGfmSjQjKvmmAu6ZsFrvrpfibrnpiNqnFjM7Tkfk5DmYHS8HEf8AiPoifup3Ww9pWr5Rhxe1",
  "key21": "5MfGfE8T4QyG1surjNXD7yzhCG4QCMwyFkKHeEQykxfoUMr2Urxs8tsqJA5k473WZs5HRGpaS8oDoik6niKmZZh5",
  "key22": "TwZ5mRfVsrFYYTZey5ihR2r6YckDETsLXMcddjah6nk17atYwywL7zCo7Wncs3XRq1Xq2nHWTZTYycq8Lt3QBJB",
  "key23": "aV82jpkR2ivmjsSDbGZLEGvHeYsQ27m1C69a2kpBpS5xVGGwBQQXwYCSDMLhn9QBgNXn1JPa7wXJ8tqAiBP6NEL",
  "key24": "5QsGB4qpbJyRbD61raiT8baz5nZTLYYmbaoRAzrHWRuAp3XmPzmioKjkzukvThRSR4fU2BcTmEpVaNzEPNUHrqBj"
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
