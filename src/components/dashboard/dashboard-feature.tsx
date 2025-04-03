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
    "53qGRWbJUe5H9iFmnazyrwEeNtv6cJUM7i8W8Q3cUWrVMUrbUCo3F3pTaP32dN8U2Pzrjh9WcakCvqHdNFw8JVVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMMGSJPJDCJi4DBUkKRWH1gs3CL9Q7YuYqdH4bZ3sfAxr1VGqTJyraUaNFwBTBAdbd4c45E21SBVusrP18TEo54",
  "key1": "3WWVd3tcZX2zRgfkAsutxo88ewYhnYNxe5xAgDnxao7krQbjLnBVBe6TQdo6oUYJ2jeWPDKmFQeFpoQiViLPbMAP",
  "key2": "zaeyqQL2a6omNUqLQB72BkqN74YZVGFsiRPiUgKFz1qswnCdbhNa8cZJS8iJL3mptXHMwc4n6nzezhddagxZuS7",
  "key3": "tUx7chkgMtKiLkL6k4mb27S8utyqsY6sBMBMbtmmZqZ73E2MrjEk7KfcGQLGcg7GMzaax1V17dQ4MLHaFwxVhU6",
  "key4": "4gMpQntJCj1TG4yDWviBydmShg3n7CYCaAdKC8doDKwCHWyHBvW1DsMV7fkPqGLZWj7TnPM9WtwTAARDzkqrxdKd",
  "key5": "4okzJvhMZYas4q7Tgvd5ChE5rRo5qSU61J7YwuPbpjTCNcbQJFBxoFSehHX8REeCg7FaNNx5k1XDAdZRcWWJZZor",
  "key6": "3agbtgZBfkSeMCyy6o8LMrVuhdR774yK2feaJhdFaUSKFtVdGbybUX4NZaLdyTWW9QK8p9CYWvZWW2rXydJaZiW7",
  "key7": "3ziJBytYmtCJA3EUH3qFqsChYUhn5fJSRDDXJYGRxnrqVMr4Ro6pb6NDx5ExDQD7FxjWMhDuRDSSDYtSMXzfKP4U",
  "key8": "5J7i8zqksbxXCLLWwzHaEN9DupQfa2wYkiEKjVrskNESWBKi373u8ge5b6MTEmJUSu275XcGq9CbnT1m5SKE8qDb",
  "key9": "4vnPRdRNhFqjiRjxsXuffUGHHFkFoQuXDKTnoVk33S1WVGm6f9uystwvAkP8M4AwVUqLMrAge3HArNMq4k2CaRw6",
  "key10": "H8rcwXD1MH6CFnk1Lqw7qbTebuD2aWdM65okijf3Z1P8V3VRWDw42VGTVidy4jB7DD4hjHLtCn7iuLt2rVraP2J",
  "key11": "G7te6cuyVMutf6cAXMuPC8esPwFwXassDeoKNFcqcAhQYodpKL28HhYc9nq166aTXN1P82rKbGXsVTJAz97gHfU",
  "key12": "5dHZvqKCEwsGtGrzbCAdFWxK2EhjMbEjozXfc4mxzhPUjF4XKYxmUtB6YJ2huzvwqtiQL1v9Udjq9jd2Ln8b5UGp",
  "key13": "33sM5nnvCNhhAzcGqvP8bFdUBM1y4aNoA6JSxZWzWJYJsj4h2ikENuw5cFd6gnZdCcthjAkqX5HGGhV7txij6tKd",
  "key14": "5ZGyRwJepa3Xj43xuAp6ZAH3pBQ2yibYSt3CnmdpYmo78yz6YjNNN4Zb32YmWuuZtf33aLWobRRcM1GsQzu48owR",
  "key15": "2VtVREGP5mwbbMoTBEDR2dHH5vG1DcsFkFDEkrSkHDKJQam6Nb3CGiGDi18DqvrXJtwJ7UuWoJ1Q8sEDUQsf3Tc4",
  "key16": "3qZVT1ifRfwTsrZvhuFu9uXQbFNjJeFQcFfRePvJ9F7S655tFDrh2KzxcF4yNdpVjvU9SV4dn78DzdR9ArnxVz8U",
  "key17": "24mNh77Lmu2Xwo2Mscky3y9CCREbSTVBQvEQJbKKyX4u2mLoWmV2R2yx6kZPpECprFK4uw16RrZqUzERpPaLas1W",
  "key18": "24n5CQuq6bkvaerfDsxRztmcGnZ2QpLkBQHWjM3Sj14J6fmEtv9aLCYhRam7QQYeopTh2Q28sumsuU8jyZdk6oZf",
  "key19": "4TmfX96QgyESXXqg8nih1a4NNxBstWKwk4T9hzR4WmxDRfQBpty3Xex28H5SmZxANuq3xZPCqq9g9kyQcFQUxCfZ",
  "key20": "4MQcTLtpuBxPrmar1jojgXVSqRFmHVuPwPUbhyaHeFHQHet13LWYGg7AH2LXnjwmB9kNJfbPamKVVqGHdpYPVXc",
  "key21": "FXRhXiqpJWMFRxQFywQATcpH785W5fp3CcmXmdDJm93y7BCpYQ1deJPHizJYesyA9VZrWDJbrJYPdjBWZNCcTkA",
  "key22": "xRevKwALARpqxwKXHA22HLj6wBzHV7caY2uvBNvyvRtVLvRckRXxs8MJK8EFazMY2v2uPYSb4zsQaB6qDFknAMU",
  "key23": "37Q5XH5jTSa8pXQSCvhpNPZUrSMQ82iZxWZosQf8TyxDbKSboeFnUbPKmQn2JtK2Aye2fBg7CEbp7eYdeNALfYGh",
  "key24": "4sA8KR4gQNN1VJkZJBeHRaUn58JLnqcgbowSqQ7QVXLvDrNf9RACXtWgnPf1MPvkwjHzwrFxZmB9bFcoSv3X46ha",
  "key25": "3aPy2urwknEyJKHX62jHbXEyuzK5mKH6doRJczxv1JHaSfZTvtfFZzmYLfNsHeXZF5bbkCHZH75X23yhUeCZx52",
  "key26": "5kafFBW1ZUR6nWn2LEhCDUzK2EgTS9q3ek2jY7wtvVafRBHmt2cJREzij6xVLr8cY2BM6DvPMHKTW1ziWEb9FQz6",
  "key27": "5EpnwSHj4La1VAQiq8VQCE3fggSj1Z8FA8nWKh4CgiyWwfPgFn6ncRbbkNTwVqJKMpEmgqG8QLviCtM5E72XiZut",
  "key28": "EHGVKrSCgxRiCHrBhLXH2LtcnYChTBixMw5vPC2Ra1oadd18gA1XwRtQQ96BPXpZ8Wqpdz8iWh4fAWfhhFFuAxm",
  "key29": "4cf4hdrF4BV4EAgiNg633aAf2gktaywrrceq7X7FCrzZaTDNxNiB3vWAe3vXdFixKfSFghDn8sd63GzujmgVeBw5",
  "key30": "a7Z8pChyyFdSyU4nP3Frd7Ks89aKFSKYiJLNZYjw6x2rXP42r2JvFxooaVXMM8DvxNA6WMbdNwXfZqMjnB28Fm1",
  "key31": "n4m7BtCyPqbPKCenJchHC5XatFCbXcVLARUbxkjFtbhaw4h6SBppks5hXxUxxniREMFbeKGkgKbLTKTD315EQa7",
  "key32": "5RSheBqCopQ4MQb4HHYLPGBsHkUmzuYTbKaufcybhJCYBmqGSqhLH4UaNkLSFNNTkQrbGSnVy9C5K8NzQozKH8b7",
  "key33": "3tFaNLu4xfbd66a3d1Bu6ACkjXriB1eFftmQ1m5KfdnjN8H36daXV9erfincvMNqPHdw5EMDNyhuBYibUkWZ48e5",
  "key34": "42rEhYQGKF5B3q3bgmkAy6h4EyERMH75oVymjeFjCFi8W6r7qq4UmTyTZCMEJhRRZq5w1ChP6x3F9v5Zd4RuLQfg"
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
