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
    "2SWswp8bPXSLt7ic5vDbxL68jXi1iypXrdYbxY1sTLNBy3bsDp46CHmxfh8qQksFLh6w7kZwzq9hXvfniBJaN7UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oA3LRtjXEHcDg1rjZ15bpNZjRYhE1U1zG1vVQ6Nb2piqouB67mcfTr7YTUt9dEwHa6Bb29VkFi6rCTbrPGtD5R",
  "key1": "5H1pzKDGcRQNkCkmAj6aB2um1zoKaBRNQgoJ2T1KAgSiRhzJ4ATVDDQgXgwZuASfoBB4suqfexAV1dZLqJs8GwBQ",
  "key2": "5PHAFFkrGz5Ths9FLjsCM2wdnddbxHAxU1SEQ2wGbDczNC7kkV2v4BexUtbyKZTsdaxSFpmRWRZwnY8NPF6qjvwM",
  "key3": "3NsNP1U18Bxa3iuDCCwgRiVYUYzwXk4XpEY67g7jpNo4L4taQeSGm4soJkBBZPkbPbnNjiuXM8CeT5rsqjwVz8MB",
  "key4": "2zg885SQLpoTFNcWcv6t8yLcriYGnqB8DgAraaYAqrbyuuNVVSjEvTo8P5JwjPd1aeAMm34ktfK9Pd33Y5wb6gA2",
  "key5": "3tK3wDspYWsQCemctCDzugoX7Si1A7Jx3GjcQzrmHfU4yuw9sPNb7w6LBjNEGBCtRj4qKTtv83V65XBVaHmrXjaw",
  "key6": "bB9mLWUzhj287j6fyX9Sj52oH9YkNEDbYRxgPxfkvEV5r2hr52yNf1brPSeHVi9mEP5AdmMR4VY8z7q6ChFe1SQ",
  "key7": "CZJXFDjTR9pkaHj8pZKw93a8okq2BvVjEqpFop1R3vgMc5xPLwEBizcZ231QWpeT2rVof4m7YrJKB6yd3fFSLfa",
  "key8": "59YWPXdEKKaHVhXnwb1fjgwhJstzBXh5SYEjHGXPZ65Hm5piHGFZv49FQc4TMtXBNU4ka13xHYt2VFJih5WYecXm",
  "key9": "2dfxB3uiKsGUxztXfJ4Tkoryp9PHQVsPmu4UfsoDrMtw9yKbYSUGiLsj32YjzBhE67hBrvACLFE54AGb8bGVrWyr",
  "key10": "43pjB5QqDWAF48C1N2uJLjxgU83H6eJ7w3s6GEedk9tyoxMxoRt5e5Qne7g1FaZMUiVkqRwNu3ApfH9dbFfabaxz",
  "key11": "2J48aHhnVnVQjgBzegmjALPDp8xpCvmfXhcffiGbRu8eA5FBMu5UbUWT1yXWAMifmSnstLC8Uy6yVuHhSeEpiBsD",
  "key12": "4SpiSR7cgBKsqU56KwcSo7Kgg1xC96srr9RkXrQeKmaZxCCYYhaXDvsQ9vSZjMxYUj5huXUCrqMoUNx4zZc6W2wR",
  "key13": "2h67dgt8exVbYnLaj6hKpCbyJzCTGQSvdrhrnXTxyzJCqtCqbsGWeHgfvNLf52ctUU6SnbB2jERFZWaSQ2xBrXF6",
  "key14": "3i4te6Z5myTzYk1Ji9ddtTEdJqGXkz7T6HDcot45YsQ7HSJKquUKA8UPxwhXVc7iyzdpaTfSCZsoFgB7YDPwtoZ3",
  "key15": "4BwwiZAp3fDkHd3tquvVgWGk3TeJq6ozzHLd5RfWkRFe2gVj4SmGK4Gum2TgzXc2iMswvbL7tiBWcPEUNeuY4v6R",
  "key16": "39tAmFEdaEPspBDTyA2gajTSuC9Lfe4VvzxCvuv9kDnv8DnakoZXhyDGeSHHcLhBcicv5y7kbyuJaDbusuLrNHWg",
  "key17": "4eVyvARRmAQqWfz3unjkyL4QYBV2pftoVZzytX6zsiuNpk8grTUBFj6MRzUTDFLiRiFSWyvooHyfEdQKoaqrqB6L",
  "key18": "fw6Q9mm92i9sbyBABok67nGQjgvSCyrYQehX2AfuS2kN7MHz4q16F6v6cMvxSUihJ456R9SmtekDnArkWh6aoYi",
  "key19": "3Pzz73bwSNsNd6wMksHSmAULxcM3BrTHUCWuKeP22SBmPwc2dphJmzPtFGokzXfn57nTAH3AVkBqfsziDvCaWXgk",
  "key20": "LREEE8TysZHwme2cdggPwpB3wC3ZqhGngdDBJqmddniNRPkzRn1RMfNaATh7XFEUEb1NgLQdkcpqSQPtj9eB6yd",
  "key21": "3LGAR3Tbvbrdgdtueoz7jSVXbLZTCLwZHbBcwsJgYgHkhru3ij4q5H3yUcKhzKaCPaj2ZCgw1xVqvua48ArQkQHm",
  "key22": "x3WGCjoBZ2zbTB8ZpS4RXLgdh2LMRFTiKEBjYPQpjN6qmw26Hzu8hN3fW7E343LFeBfzXinzKBZYb3bu9KEZ5Fb",
  "key23": "47Ujh5R2KaPvZDyQJ5DAEQdzCigqHRbvEFw4srPw73MqnwhK6JBk5MukZV2RGbQEGp4XyKuya6aWMVZ7HrbPwP9h",
  "key24": "5BpM2XfRTHGxzDVg9UUT5Aq75QqpJ63wofXbJ746Udf84HyivNC2VRqLgsLKa9uV4tUDB3gUJtVCFXFn3gm315WU",
  "key25": "44qXzWK77YZtcpLafpJ4cWFmCgD9jAFrDQgVZrPa91vvmtY1ievDpapJx8Gfw1xVsMX9LtrmHCm4XdeMr9YgMQwz",
  "key26": "5XMij7BtYPLKVun6f6PzbfSs8rY1boegnc7aLVqfTiudtweivw1rSp9dpRCTuEvMruAPQn5iLJ9VSE2UFX8Arsz",
  "key27": "5AytbjJsgzmDXHgaYTo1uj4RsyGqsS4yTDbgPGC1kszPngCATCuuQ9NtigY4nmsLtAYFP6Xg8JXYhpNuaeMS1Nbh",
  "key28": "Zyy3q5jF88i3TAXTho2nchzScXFWvAFZA77TP1G54S4qrhC5qLrBCm3FhKZ8yUZvdFKbB6qD5AxnabJSAZPcioE",
  "key29": "33CbqxkvxpyyHZmv56dtcWnMaMfCAQqgcW8z35yt9zs2Cs5BLrbXh3m5Fpxy6o32YvZW3dw9mNzTd1wW1ruZQB8N",
  "key30": "rNDMUqC7nPyWqDFHmusRbaYBNC4PkBPwbTGa2QUcYHb7gVzeZdaaurXX3i5nEgFCBgpij1BkJwHcTqqPVMGMNSY",
  "key31": "2rmgLrt7ixXXoTftHCQx4b69cu68wA3e8ve3S7hLtLadSEVrt9a8XCbqngbJhkFn9WqCXFMwATGeMo42kFmGKFNu",
  "key32": "3UQFds6kK9c4toG8oSNGTWG9FVZ2K47bYN5qKutD2rsEQNzmjPSp7AQ6P2e7GPj99wqafSHabWgnxib3GY1eNwSB",
  "key33": "zYAQvXxm8ayrYTmDSxuPM2MhgGcERYRw43v9e1YX25XwajMtC1xpesZciNpGdzREhKY69k38SGBEzbnHEQNYfa5",
  "key34": "9Dk72h91Lo5DtnqjdZeh9mrcznEVkKRErc2hi71TSGqArqSpxcasniWzBZ5VDMoZaTgC14ay2TfbpjaNEEqLDZo",
  "key35": "MpXfbu8bvNhDoRtD4EWZHS8z4v8VQc2uqi64pDhA7V8SR5Xxrp2v6tsX8dJDK7VvhKnPghSZdwwsc9T3Av88SYj",
  "key36": "Vv7RhigKWWhdY7avUYNic5vB4Q3MZyV4U43P6A9ahWLg7ud7GRE72V5TXTGPgHpRF9C2Bs54PXa1jjWdoaqfvyf",
  "key37": "4NxgRpRr9u7At16ZQHRG4n79zjyrmbEYEJyftaKGFEECt5LHCTZAi61JV46s5oGtABmEhg61PqKSsQjYm8pq7DZ",
  "key38": "3VTUjLkFQ99mzuLEUTXffptppQtd4fS8NG3MYQfY8DKLRdSWesA1PZVxGUeN7sZ5yVS9ZDc9XutuuY2fSqz5Ypnm",
  "key39": "3eb9J99HcnSTQmpxdsE7GLXeHFRHdFH6Diktboc8SfKqt7USFchqhpC3GLt31P1ZipAjFcjHBmYHoU58xbCgwKBk",
  "key40": "3BFXA39ipn7TzV3kNvMLazLojh9XSCb1DqqS54fuFsmVGD9VJX6mFBoacmrMWy14th9hVcUaA3TXAUPpUebwcd8k",
  "key41": "55KwFCDginE1EyB6tGvSS3FRYLMCqbRjfHzYJuFzKXyGM8QbwfrnRh6kQZGBpYhjqEcYHunEhDNiYiKZ5cf19TQ9",
  "key42": "3qD2QPiXonvEghpsgz7A8BGGe8TQzuPPiEN1mToqKku7V4mmhzXWySVqSVss7vZLU4kk4pZt7cqGHhPKBxHaikMr",
  "key43": "5feTdQodBr3nyyyDYDCqL5DDNjSjGvyVaUrcS2DmUQ68Cw3wWS6iJHxh4SKgMvcpZ2KG9pQs8vvMS1gsRTpEWYeQ",
  "key44": "PTyk3rQN2TPnKjqT3tSUyPwu7SQfpFXBiZfUQJA629Stp4GS2Vjf9m5Tr4rzKg7X9m5vTRj2np1iRicza8sT1DB",
  "key45": "tZnXwzVCHcucrGdGycUuWnRNDnqRw2huX5KL5NXP9JNGKPQb4ZNUVtkW37ssYgWcZkXyEDNc11h4pxoLmgxdkr7"
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
