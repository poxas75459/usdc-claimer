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
    "2XgNWrdfgqcP3tJYDA1dWrFZpmvQmp7Q4u29NfQSv83aAY8V9P75ZJmtxdiQ76EPC3WURriwFjB5YEDqnfqGCoS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMVm7M1qm7wPdpff1ZJcAjsnASCx31fpVX7c2UTHDNPMWs7T4eTSh9aFoEKphyWND7cM9zbR86WSZvvxhouJKRh",
  "key1": "1gn5Gp1TtcWEgwmFgtrZiaNtFnFFkfWKfkeqSDkpz4rF87875e26gPUnKKKDKEN4scFpEqBGLW1SeAJyfR46syt",
  "key2": "48dqWCZhQhXtu7zVJ1B2oUqB6VTVvRBuYmXoQPMYeuQU4TGdcHshraNywMPijRk4CPhqxbfWxEX2SnoHKH2VQTEt",
  "key3": "4FvES3dzEVAN94J2eRFKxejGxcwrgTxqf7Z4zTitPVUCCu1fhr844r9hFzwmB6gL29BTqBrA5ha6gMw4rvH1Cj1j",
  "key4": "5KJDJ6HtBxYy7igrM2sz9icDXjdamNP3qGZRCKU22HbVhr6yAKnYw9yTy6uZ2DwDsugD33K7262cXyUsQur9cyGu",
  "key5": "2Vpc9pypAgtzSXZokYjgiP7FroNAeQm9n4ezKqupFAF1Ckra7BHAzsEMzoVccfVuojMBcaWf2DGXRipEmr5MepYM",
  "key6": "2GgcBMXEqd2s4kVErC29va6Zd1fbuGuqc6uNDMoSmAAJjSZ2CW1Gvnun2gAu8gb3cmrcpSEWtv7a2esKLrMJjico",
  "key7": "DmceL1qZV3zidv93S3qjwLKo3ppabtf3Pf4U5vxgxzgHNCqxB9X3xTitT8gH14Z4TFqZvY7J561ZuuyTejUdnWk",
  "key8": "3E8tdgajpS4hMrywUe3Jq3uG7ysXpQDxoLgajSVAN9w81rUb159FtPMfK9BPsgWoz1YiqR9ynrDkALj8WgZfod1M",
  "key9": "5D8Sxe9NF5D9b3HNedxdWAhLgUra3fQzWgTFP5mocC8mKz1ojVe4799DgXDDb2f49igMHMzNEeLP41rQ4Esk8CDR",
  "key10": "4Tzrqot5UhW955EsHpLYBGfqPygGfeb1gae4T6duWLnsZ4azF6uyJraHtFjhibxZqexEBxBgveF5MKKY3GvXNQy5",
  "key11": "4d88mWD6Sd5Xxd9cXpx7zHNKUvJ9gEfwFpeHRhpZdzeJa9V9muM16F3rX9NgpGJL2YujApBaXabEimzTPgxmdY9n",
  "key12": "5w254EsErj7Fpt1TkMwx1YAx4ZBuPoSkvAwnpWK5Nvq1W8VAxMx7h83LGXTNBj4akUESmASMWR8Ysr9hzynd8XDM",
  "key13": "qhUBnHGuEtMJB7HfYom3VqWg1v85qfzRhTZH5f4hhSAGaKJj48G27bDUXyTZedigNPgtSdtTupU1P2AzWhnnXWU",
  "key14": "3rFPRKjqTjwyXhChFibFtDZFEsGvFpro8gGXCxY3a5ESs6fcWtVFjEdsTPUCjemzDMxJA9j3hzoXfwhb4f7pRRMf",
  "key15": "2d7PS4xM1resYbzc7ZrVjRH7jq5KEmDBzCYDBKCuXRGEzTt4cuFjf7KrdB1cpGZyPKNA1wASn3RurZAwrCBady8P",
  "key16": "DeHKqiRym61q791MYau9jho5Pt34Ms4hAzj9w6rDbxNmwiEaHiJBF74nKpEenVez8yUPevoVuQ8kgAHUREXh3do",
  "key17": "5Z9Jadh8N1hC4qHTQic7rRT18rdsvRVHhjxhJf5Gis65wVGGxRR58SiCK9otRVMGYki8s7p2728MGYcqBoPu5wYJ",
  "key18": "5nvLgYA5eX5ozoGAtoaFrdCzs7gWBe5VAFmRqvugGjGdCTUnK1eeVUNe6nZguzWgaL6HAs5zzKbDdqQ1kABkzPnQ",
  "key19": "2uoLwU6e4C1jpZxkNUHo9naXcNvNQXjYeBDTzdZ2wVVQo1XqjMwgu3uQcFihVn1kyWhgrgr37okvepkCaapHkUPY",
  "key20": "rJi4yYr5CNShxDz2vY3t2ErV5wUHxmR2NqXFzw5yvYYFnxnmGTF9fFR4hjKaAdcnaPNHeVCY6e7rdTMQVWcntpD",
  "key21": "2UfTXCi2aDf7B7GLy8RfyRQhyv7VFnxcDJErAq5gkwwuZkrM175eWyU6p5rZZ6ej9Hpqf7i62mVEMWdsupWeV5s9",
  "key22": "2xvNDmsAi2sUHrGM5NNEZDQHRM1P8KsCZGAHmWXdVEAXj3atChpargAFobAZ93Axmt8Zr2DjU7pZvSMNv8P3h9pp",
  "key23": "5UWmgqwTysKzyRf7iFEhuy51qMWQMR8SHqx3PHySHepuKBcrJAtsC814QCpb8sdwZgpyscFcUxNBYaops9DeS2BM",
  "key24": "5eAYHZYa5Jfkki3EBpqWkLH2PAW7JArQg6KVCX7o6XuAmvAu2fwUB6YDxPeVa4TSkB25nGk1BRV6nJpaTh5QzvPr",
  "key25": "28aAVNCMSnEC1xjS3fKpwscN64AbEXuKrZthqHej3vnCVCimzkQ53jHiqDPkPDS7nBz2qgZAbjndSVD3WPcxEvJN",
  "key26": "2r24DnwobLGWoLteoWp5UkrSTwTuA2T2CKocYcQLeDhLRTCF2b5fg5rm8L2Av6QcLiZWxyMs5TDhTzaYLBBgTt8A",
  "key27": "3D48H7v6msF65CS7rGfTCnBaNipiHkHviQVUWe9RbStQdNtQtQ1riNz8SaQpq5zh8fPZ9a23HiDFTx1BAJUVvGch",
  "key28": "5HKXVJnPky6oyy93MB7bzEXA9fsR1HVsWg66qXAjmCvwgu8V8CJhnQnjM4qY5ws5NRckmx9LbD5qZgTWJRfcVRet",
  "key29": "2QzXkyRK1Fm5Rd3bSbHWTgrrYeZNQFYBVktBynYmNopui2Vx7SUhfDV3vFQoZsLFicca3mLsrcwBr92dvrUqUzp3",
  "key30": "69ixhwpfa9zfgEVB2q1MNzJkKs5oEYB4986BYBzRhAML9FbspNp68NZNCxaJDqvatyLu7rrbDjDDM6YzsTL2q4G",
  "key31": "5PPsCMFo528oy5mYv44f9MDixAWM6AEbtMJAvbdAfrw4bLquBcVySYqERabffkpt1NpgsjgtfJo3xu2fk1pHnkXW",
  "key32": "2xrb5naGzAALHTckV4KL4vNkguu5FUMTtUpPPfNTNWVfV9Xoko7oVm2V9fZAPB9MowsQtvaEgi7YwcDnWwmgUgvC",
  "key33": "3Bjxbtg6yvQeyNEqgaezAyNVtatF4qvQvmCrt9WbusFKkQYPdBrhAcHqZmvz7xmGoP2kiCTqHVNz8HtoTkg731iK",
  "key34": "hmnVz7i1DwnhVXReBG5NYkpuCRgs93Esqc5iTkgrLkzMFWvHrGop7mrTuWLq5SWRjuRHAfnTvnwUt8pj8S64r1V"
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
