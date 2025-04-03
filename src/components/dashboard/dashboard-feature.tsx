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
    "58jbQGVXhVtPRRkkwrcXexdh4BCQfQsP92wx8XVU5a2PVzcnhHgdeLTmoWbVfZHdrFbGTr74QSFtTMnQSkVeCK1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEcsTPuz61SYFvyH2mmPhp5pjrf2bG47dFkhbuRmMoYDBdMZhMxHvkUFetKTLJ5kBqVgi5KV9uJfGmR22TuCzqd",
  "key1": "4R3Tdwub9r2VKmtAXXovXoxhJM4TTMLSHTJKqyG8ezVdKHYpQnD5kzArghZQW98FC7Mzmf8CE5Dzhia113dtidxr",
  "key2": "5ZoU5mmxf5otMFAdywNwn64N7DifG79sM2CAaD3CPb9QqRDYehYcEcQ7gL3E1n57z3pyHEybB2WQyHMdK75N8BGt",
  "key3": "cu1Dbgr7YdY8SskKwnYFABh8SuF3M7xwzP53bHzZmevspJEdwiYWRoYEo7b8tcjuKnDb5acKYsmUSxEqVqwQzrr",
  "key4": "5G8qcJZ3ouJcbkJysvAWWG8Suz4ZfA4yfZEabsohZEx1j12esDskdVKVsfRAcv9dHDHWTLpzzc9qmwc3eCwNmS4q",
  "key5": "2sLfYUF9rwYJ5iSkDZNPXvAJWQpcCuspLNeNxnhgjhegWfFtSwKMkUMQZBWPWHAui6c9radMeGhTkfaoMsW9pyii",
  "key6": "p4jTmRjXosMnroizqtAXyBhWg89H7hhNFjyw5gziz72VJamvh34AWKy4GK1wFHnNo5eQShAVF1WXcTxE6ixPbut",
  "key7": "2r6yotz1faPvToERKw5xr48Y3c7gsrp7sJwYXh2zhjMLF3mCoDyiXqC1W92F2K2DjeJsMD42FKmdvVXUVAQ3oUcS",
  "key8": "FNkfzhSbm4F6fMgzNcZXmQKQeWDWjwq9Rjje3Ju8EPNvfoDrBrjG9Q2wxmkqzY8AwCqGnfC86pdAK5Xfw2k8NTq",
  "key9": "snaPgVbLStsxkz5XBJ8u5MosnacLh7ebwyAAXJgcKHDBvnDkURR71gud5k2pLkmDhcWF6m9mqG2XWbU528JogVB",
  "key10": "4FZqHCSXb2U7XBTq2bBa21absGohtakfPCQRXNLrmWmfLVcHHcUgkK3dG7SVQYFh9VNFX6zmW3apnEQQhLZvy2gL",
  "key11": "4gW1M77Xj8P5ZfivRm165UMXW9ApKg1b9W6bYcNN1eAjrt7WNobpEnb8vpq1P8XxmQ3rxYz4j6Cshco1e1kmEBoQ",
  "key12": "23smNuySxA4rnLcRc2aZFaSaKNtszENCFqQoRZycU9WoobNoQWkVb22vS1ex8zgehgEwvFcr3k9eXmfjqgxi11do",
  "key13": "35CbiC7AYsQ11icizzy8BvzXEWdMwJBRPLyLzQ5N2JqiURmvsoaCV2ti97TNdTUdCcStezYyafHWVBY5dyTWi2zf",
  "key14": "3ZG7B6piKL6LfyawBW5cQ9Gc6diqrJXA35P9FKYKQYMSHkqgDtF4u11bG59EMtta1rFu6NytkpkvJPRmKgHRVRiA",
  "key15": "28k7okKxRxHy3eamLtnr2DrgikAgo7zWEbQgA1dezQdeUDtLoVDrGJafxwbXbZSCLrURdrcji9PJcHxzDHADPHHU",
  "key16": "2yLmJFrSjENe2SmNgawe3BWsQsooYwNJ7iASJib4vgY5iu4dwwVVSuwHsF7m8zkrXVZGiUgx1ay6AW8mpd4fH51t",
  "key17": "2yQhD6M6NUDVcEn9YbzzEzAE43VA9oMVVobwmRjD3Y4yYYvFPL7vFJu1vxfSYdqcHhZAFhg7mmgyPv6hbnqz8bHm",
  "key18": "4cmHAJ1KtNdAKyUuweZmeK6gGVQArq1hipXZaYHboNWkzxvWsLE8ms3tjAcfpzuBJqm7nke5apZk388UoDG8Tt5k",
  "key19": "37DZpovA7YBrggSGaZ83mbv2TpWnX7rxiEQG8Lyngru3VnchzgMPYyLm836FnxobGPvNREcpTDTfHCozAuyrsMQy",
  "key20": "PGJS9cEoJcEoSSFs41Wd9syZR927veUaVbpCKvNKTRByUtGE7NGGyvjb5VMwFhFxLFosyVsHSLBU7nK91TTeCha",
  "key21": "s5PP835uSdcwGhocYSf4jof46ggyp4zcgQZEmib4oD79onDUTcyDDTkCU9sLpkbPyR6FF3CrutTGraeW7mU6d9D",
  "key22": "bP3tQYF9bhEhHxpdikYZoffEX2enca8usFi5M3au4AdPV1uUAJ5sYkATpXrZnNHPzWgEcqagYr5VGsw2pwHpwL6",
  "key23": "2Ao2dd9trRCr3YUS9zAp5G6i92e6wNHJKRPZAtqe3mLpnHQy2rfKhTS9r5GszGwBRFFtMd1fChskBapuj966EbEX",
  "key24": "nJCKNzLkbpxWNFEAcPahXwsgmVmszqWev9WWLp37YLwU29HFVZMRgaPqYhAyNoYnhsrohjzYzhQ8GHn7A98w2zZ",
  "key25": "4xqporKrUaFQL91VwHNCgwUdMQegTeK918LHubkB289k46HMzqdFYLXD5tfWJbTPJbcQDWpVbURpjoh6QSvznJ8e",
  "key26": "76QpFpvSKuPGBXyoZyaRHH2mWJThBMS3ffRqmPxjWLvQDpyT6zkZHMUbg97inPCD1Souf7fjEBTTQK3oCxRscuW",
  "key27": "5mToTzYJpqDAf8BPzZvfjUYfWracWdKDK4oaqLNMMYmQ3tiNvo2mjvLm5R9XqWFnfeTzcFaAAPCo9JBWWrVeJYNU",
  "key28": "2LhMxWemXTZ7py1EdAUb976kbnorANZ355nfWmDsmZtNHhz8ffpm45cbeP1oYbp5dVJQp1rtqcAoCcVXANxoxAR4",
  "key29": "8YA6My96LfuZ72JBELBxyfAHEi79v1ozCq63zQGwwotXMkSq1aGGyDWB9hC5TeV8poXoUVPfXvTC6AFff4DNMsA",
  "key30": "28pXvx8iKAL47Fka3aHBTuyMktJ2b17WUvUQMniXPjzNJQzNxvy1hRh5JiZ5bw1pn8NEiSp1baWsARzVkiW7gkrB",
  "key31": "2v4V1DN5BsbxQDraRtkaP3TTpTTZTms7j33KJAKeBjSF4ztCZmDrJsCV5haoUKegMje8qGJM3wnqmDpbX6Vt9ueJ",
  "key32": "3yjmUCu73W6WrwhUSq94R7YBWxujN7PTurHQgaDgpDU2DWRkFxbZLWJYMbr3jPR4TBzGC25DiGFELmpjQZPKqoxG",
  "key33": "3rgzJFmZbgoG993VKifRCeL1uw9s2MeXzFV4WXBN9wZKMzjcuZuTw5C3KqoRLtaGkdyERM4NQNpLmsFq8yb83fAr"
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
