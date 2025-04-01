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
    "5utGwuCFbWufzjUtyQd2H4orxJhL3Y8xgNF7iXC9eYuxneUYDTPkvxNBHQ7Z5dp4F4wFjTRTjvmYFzD49uXGno5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YoAqrkgFkQsKk8zvRDWVGJtm4RAxX9WxEH7uCYcGt2jZGEL56aqgsyWePLe2wPfhA3fqomcpe1kRK61XJCR9sC",
  "key1": "4YPM3V1PpsC8pQFgqn44jiUtpwpcQEwUkaht8LAZVTNqKKz4EYGoiobRywiCjcMxLTP6yXfFXziHSVqb5aCtfNVU",
  "key2": "4dZa3vLFUVmdrkYiw5g28KPWLaRMLs2kCZX2EEjh7zJxozojhRscUTiBPhHhRVvudPVubnNd1Y2qLdmCPSfevEuk",
  "key3": "3YDEgtEap26iWB4R3ZsdveghMx8ZdtEsbud1A5jcdeqz39KoZXBvcijDkfcfUUGH1KVRMdEH82SPg23mDGXzn2Kg",
  "key4": "64AEB62sYkXRVugWpqMsdG9oSCM3mhbSRSHiaVUCQxwPS1kdU31ztDMwrbLoXWgTHzGK5822JHrhsJnBUdps63Yn",
  "key5": "47Y5XtjV2iHCQQUauN4v9ngaxJPJ2TfeHSVrSxwTLb1JZPbjcty1cY5GU2X9Msk2o5JxC2B7754bv6axouP4K9Aw",
  "key6": "3ASWNYGhCg1z1fSWQvZaammHKPwpe7Yneknjv6VCS7Fj2pxxvFBCRuqfm8vKhAtjYjYAgVUVA9eeC1TY9mPTsSZ4",
  "key7": "cULgGd7MaaTsXgcZWKMNKcfNDPEmEhBt7r4AaVnL7LBiJXMDC3GPDcyQ1PiYwvLLRtYRrRL8qok5gganarJAAMX",
  "key8": "3YiNvpsY4cZcsLewY7nXcuBcturXyUXGg7xzhbSDdHaEhpzuvbDssx7HDaDHPchzSpJX8CWghLYBZq5s6KzVSyeG",
  "key9": "3NMEx1DsrWm6EjGsBGTYifvGRsYE9H8ZqeghnSCdLhGeGfFNJ6d9KEiYoV8YbJzKUxt5irqQvEYkbbzv1rn5KsZ8",
  "key10": "3CATr5T7AcG9oXCw52fYhWN8qzCJSqD1oFiCAKFd8TJzr5oQpecFx2b7qr2b958RBCqb13uNRT7K3kfqcBU6hF9H",
  "key11": "4PjnDpujghWNPZn2dBixwosADNsH6iauy4zzZJL26qZ8gryGXHxXYY1NTZkb91o24VsXU8SFnwy5zpiQC7t6QzjP",
  "key12": "4tLYEaTBMUCzVeQ3DFuUJGoKBrvu6FHK7AbTcxzkraixxJnLK4RmHJynKjApyVcPxqSrTQkx8g9HRoXwQ5caGCLh",
  "key13": "5AuEduWzq7H7Cz1rjoBPDMLyC44iXpbMLGw4Jmdhb64mbgfX5ykV3HKDqCceVQFPgCFg2kRvJSpyh66e4Lj7F9H1",
  "key14": "2JNCcArf2tpT9CgGSwQy3PR6vbYA2yZfqTzD8MSmrMXQpt2k4zeR8EAgbNqUfGGHskcWyaXnDPqgS49K68b6Evk9",
  "key15": "3X7AgRPuB9kYurKWCq7HEAN9kEtSzT2Yczvg87tAdCc39udvnoPTh8NK1yw2Gwtq42AhH1VWj9gzgBVPPupw2vdp",
  "key16": "4DgtsnUph96v9LBixkqZJgm4LmSVyifB9emDbkgYKKHReuunPyWzSdfdyMQ9Nt9h4mztYexnkjecsM1oTsUok3Uc",
  "key17": "4GRgfcc9qn6RxJEZyaGrsg4DakWY7FokadmrKSn3kwCPA7Jf45LSqVhvCmr5p89NgihBD6ui7X7jhftob51v6Jhf",
  "key18": "5TtgMAAEq4kT6FMSejXMUMWY3jbwGd9eAtuovzb7Di6e7JoQzGmaYu1AEo8LGQRfsWbKtqsrwVqcfUirnhHNmMJX",
  "key19": "5QTerXtkrd8a8Yn7kFGgHKsPqdo2tv3JA87ojAapu4h46F6cB3D9G1nzboVQ5EguDwuzUsbXzJkGfZPLGx1RiRFx",
  "key20": "5Jg9CcAwroncb82Vrm1wLbw3M67RJBpcHLFTBv4ijijT62h3iFg25RLPEV2bGt6SSuAxnXsbZVjxKfH7VxnbSKGS",
  "key21": "37cjHxgJbfHEBD6DNbdXk8Gk62CtKkSGVfvqxVMuqtmxpv3Wk8F2vB4kmGrai6SGGC1zT5pGAEp16YiLkbh415jV",
  "key22": "42yd7SqFjtFRHPscp3YYZGHUVnUVT5Uiqw7sPvwdDfsVV4ojAoSPt2WMTGnjxjJCxb5JYGXUqZUFRLzMFUSWVgZP",
  "key23": "5GhAdowRQ6QwUF4F9qabjUQ4E5APxjMvRMWCiwjFrTH2urZDpPe7zdb1PAtCA3trfN4qGsZxq9hX3xd2T6xC5pqN",
  "key24": "5zuWHbn8nwzLMcvDg1V9WDLmsxkmwYK3Dk4TnoiZEmgwBRGNzHagmUz9uDDnHRS8eoHA2SwtDrvTQvKn8KohWEmt",
  "key25": "4G8v6cn2vTzA4SxbpNp83GJUJSYpCDEBHdLA3qYZhWdr9FTw3G6bzy8v5dkjSwXZjp3Wy1FG2bLLnjvpDAXrdsN5",
  "key26": "4bisW9khEgR3q5ZqVSiH6cTEU4oLi5JLi4Z4cWd1ixmWS8YcUWuaJmTNrAFNGPVExQtx4xH5zSWamZ6BG29rqvYv",
  "key27": "3PLuxF73uXw89yDrPmxN38GzvQ6Hc7aiXDP4qXEMhgKm6X3faz7PDL2v3aAuga9qXPeP4d49S3xPwfb6cWhtxJsh",
  "key28": "4ag5mcuvKtkpP1E9VmGyz2uceMMz3b6Gur2LYRU1epW7cTrnFDcHV4FFeRhEixtcDq4mPZVfRf3Bn6VvVtaLvPuL",
  "key29": "5VeQqrAeiSn6cEayFMWjHjfNL2QX3oX7fBjcbyoJ14BPV7TLPWNdpxem4J3o2kED1LUhnuUrP48NDCDuCU1aPsea",
  "key30": "2F5Z9eo3THUNCyiJCXg2z1ohs7mysbpPo3qRp3UsbZc77ovnCYFvuKJWib1GoQ1rGrcKjDNz4YuWmxEUpBZSsCaJ",
  "key31": "39iDdGFm7duBetNvzqkeSe9d5ALT95XKJH284VnMZAyX8bxLFyQiAC6F93q3mzrdxg1eZS5EjYogPfboj82NrqQB",
  "key32": "4CD5oNyujwMDwStcGweBhK2fdR2Dsgvr6hhxtsrXa5thW9QHFyYJXsKFsr7JEcBNgzeW2eRabuCfrSwGmLyKG1Tn",
  "key33": "42xtdrDSjdXNFcECZz2zJcB4eJ5SyNhY6tDEFRxohf5KvrUJMWBpoNk5g1SBps5u6o1Ns9XjXadFJhEkGEBBKUab",
  "key34": "2ox9Dyk9tz2AcY5VbhcWaJddcv7NtCsJx8AsgaifLJ7wRcLbcb3PVgfWZJKmEWrhsbD8t8SWTooGX9nQLm6vobTY",
  "key35": "28XCZZwfP5wpAAbeUc2Xz4nUfvNuM7vd2yxBfSUfqbpejv4jHMkuGz9XeRtTb2iT2Q3kGE2XcgzWdiq8cFGmJkTA",
  "key36": "5cGM1oyE7H1PAERJR8QQJXtzXDLrUhTMgetHRSnk9BWrghV2spC6UXXcHbwmC5QywX2hwYDqLjGbHNZPknxpcnLv",
  "key37": "2pvuwwpxWQpmCfgE7E9EbeBd23ohzSM2r7dm38MviWZnv5uodzGHckqrHAxmAZycJwZWCBS7VzNYQ6Sd2VorpP2r",
  "key38": "4mifzwaw8wpLyjN42odoHj1qpgdyhW9YoCxAbW9dUEx9NGsEAihqqkoQTNM1kiQj5FXu6DqtpHB6obQdKqRN7gsL",
  "key39": "5mZvsmAEJAsoEDcovpwFe5znoEWd6hCNWmxKQjwH1h9f3ds7JmFxiqhBW8hya72jqpvZU5r6VP4Rs3bNHPGAwioL",
  "key40": "2PQ8iQzuyz3EYN4VLsiMHFbKxHPg6wVzjowqm27DqyT6hqkY7KZtYQKHzyCycrMbe6AR6vtyzr8kGzQtj4dmN2i9",
  "key41": "2m8MNFPEfK7urkzfjoqYiU34uFdQDmbCnjzEyrbFXCkGAzZTz1AAWjDLNsn2LxdhaJazKopifQx36NcVrt789zxx",
  "key42": "4bjMtMpNbCGBdYuDJxvyfv9FDh8Z3ZDPA5MqiZAYJ1jWvFXjkzqmhsgS9AvHZGK8AJxVwPJ8MFtts2MLYZfWKywH",
  "key43": "38NLBXRniuoKVYP2dLiRKafa6EhSS17jn1guk46pgUCVRAxjz3MTSxDXMTqTdHBdkX4beUSMJFjrHxVRNe5NxvPp",
  "key44": "2rNUistah9oNvRwxr5LBRff8ZByFyB3e5n7oXbvGdvA2HLK2st2eCBoWX5C2BEXHuCDCq65gYdKaD5X4PpNpn6Cp"
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
