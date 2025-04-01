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
    "5hYRCD42RLY7jsMfurBWdJ4gXMuEzBoJzsbAnrJN6eg5McPAjtvR5s1PSHHd9EbhTQiSNZ3C3UsAiN41WwyAky6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtdyfFr1eMNEV4D2UGkJGub9aPWjTt4Ha5HoAunzDge2D8kpK8QpZBqJShK5pV1GLE95iM9sGAYPiw9PtySt1gx",
  "key1": "DrZwnsAM5srp5Z3nEjhJojLSc2xZ8ZnCyRjKeVHwt6D2QCWRhH9mnT5t6DCAsv8PEi1VmrCimahKrVMY2MLqEec",
  "key2": "4nBm2kHSJBes2qcypfCiBmdggeowmMJwdmfbrzxfWytZRWv2cNCHDMyahixdo6zN2c2W9MtPVvV8WjzXhcG1EAbT",
  "key3": "38epeXNEjf3KZ58pS38rn88QH8jgHHHYVDbBe8PiBo11MbS5Xhxqw54JrCta6MnXuxC9MYG2icTZvo5wF3RjiTYD",
  "key4": "fPAmRzhS9UEZScy9dd9mwjqWrbgCd6ZkDpi4oKs2Dhupk7sYJkMoRZVxsuRuKHCC8k3voXqC8MWHP7Z1C3xyfTF",
  "key5": "2vWbJuRguHjwDnjuutM1hKjMKyrLNgbmZVStKt8wawdML8aXxqXsnRPiY38k1JA3eBdUvgHdbZJhpUcPSYiZ8Q9R",
  "key6": "66S8uQSNPNPwDSbo4nJgqm1TbiUpEEUAEZLgDjoegu4n11EJ2x2Kt71SnXjRYWxb8LRb92EWoHRGMMSUhvRBAS3D",
  "key7": "3U8TE2BRD6eCsJRzka6JC2BBgckkViCM4sJXzkwqZPegXaVmVQocotzJeGDtkeq1ZGTRi9bN4FojWrMRuGjWbLyF",
  "key8": "9wSENdjbU6WzCWWEzkwKfj4gnxEEB5dE6tZnZvj4ooo5r9fsFccu2YSNewq7iHaunw5QSetWGRdtDKwd5iY4Fgx",
  "key9": "4NfsvA9f5mRGbC69N1Tg2igvjR5A2jAeLJQvtWZgCodLt8FwZciCaCDoBUNKTePUziH34MBx98W3yQghHBrE9EyU",
  "key10": "JdebD2CeXa1csw7kF5rNdubNFFafXpsko2zcK6wbCvjY8vY5h1QdQQ5ddPxmZZwD1iDwDGgz2YjE5swB6KXLvUb",
  "key11": "5kJUvayYWEnDYbwUA1iTfb8vZkTy6KKkkrrfuFZbYzXwoAEkj2Hs49kHuXy3bmdS3BpdSwzKgsMWjQjxgqBSqh6d",
  "key12": "3zZkzaQtxFzYZwvCnKkN7BpV3jY2NvWoDSp1rcMHKHquDDCDgbXv2xnMrXArnwNJMBXyNZ28uC2XdJcoVp9NbVBm",
  "key13": "4JaFWGGbCnnx7wqWoqz1xyHxEWFvzzLDjyX5enYzSghudVk9z27vXHmERBc2JdZ12iijz16gYCxb7u1XaHfdJfkj",
  "key14": "5d1HfeYfjt9L3ZDGfhZ5dUqwfyTGwxHLqFN8KW6zkHcpaZaMec8YjkzJNuD9oZvkDa3hAzx54T7iZfemhux1oDgE",
  "key15": "25pic7poV6ruDS2e56wCc8cQJ7B9jLKzxxytAzhZPgssHzRd3k69AN6EieEuwUaZ5fZXGtz6Q1JWrt5izxNBVvS4",
  "key16": "5FJjn5a1xon6TszfgwFYAPH6skvgMeSUg52VTmcjbx7CP5BRDvU1KWBxpj4tqnBkmLce2b3t6uG8LgThTFrcKp47",
  "key17": "2pN8L2syt32jc2NLXDpsZbHcXvfVaDTjT4uYyuP8puyRr68HERU8cXXd5FDewhMNpHFHPKStEU5qgRr9dMPR7xcu",
  "key18": "2RyF4dHKpmANPCZYhGvM5jVj7DEeFFh7awq5ThCX3S3zdSTkuEqon9B5NWsMPVJR6WZzdi5yvfLbqcqp36ay3cxo",
  "key19": "61jpNsZpSPM2aBNwF8kws3Y5kFCLHvTXahi7sijN6kdrhBrDL5X8zWE5niLk37Tti8cMFv56UBpSa2Ej86qZo2kL",
  "key20": "3Hvh3dUGzWRt3ALMPxZQgREgC1mMtXp2ggE7GfoSrGcSbx8p9fTff6EHZaDQurRywVVbCz4QefdsPhcCRKrBHPhm",
  "key21": "4hDLeUs8pqNajt2L1RvrPXYPXSJF6ideY8oiKJmc4g287gdsCYa42oxNTWGKjF6BCPvcL8eeP2LdHVtshtmbh999",
  "key22": "3KxKEG8Ngj7yomJJuNDV1oxaJXnhfEzPsFu8vpqV9vTwpFzxS9CAMBPHg5scsrckT3C1ZYHef3kCjtZdTqg3c8nm",
  "key23": "3qAKD1UaDaY2U4VJcksVm5nGCpp1srmpUXBmojY7CRkNHveehg5W6Fdk7sqSSj1nfUt94mDC6ajhziPPCXxK2MGK",
  "key24": "2uWaeqPfK4dThgWMbArdynn4h6eJ14aPqDFvzsKEqgP2oPru5MAnh3RFCLQoQrndGGiFt8H938CHvPxCbo65ht7c",
  "key25": "3M5aopgfkmCJ4c14K7hh42D1pgPb6YJqAMq9NJ9U9KXi2umuu54y4fhEJCNWBTiuyCdugfSWumY5w477qW7om29z",
  "key26": "2nt4jEQsTaATRRsW9czzgZAdrp8JT77D2dyNpb6ZDnPUREcV4AvNjH7KasvNSWXDJwCir1pY5kQzq5uizqMrPhhi",
  "key27": "4Fvefk6i9YQL6RJih1m1PsHmmPnprYpK4yRbG72CRCsGFrpehBarrkScFyiDARCuX2kqJyL9ukYppX3Zz6LCW2Gh",
  "key28": "4Y6RfUAAvt9bXY4JuGMRyLKXpARDmjsPW673Kip1E1hpVypJmgpsGf6WAjjKgoozPqcesDEHQHR8P3DpsKyyNPR2",
  "key29": "4FFJ9YkaRA2XFbEceoguKwu4tdqJXtP4m7L4y59oBVYRxPu3fdT1C2xxsKMYxzMKn8fiy9GY6Xq4ZqgFmc4xCjmJ",
  "key30": "5tAGRisGMfKPedUnCpKDT7cHtStrfu8it7aPqQBWpLWdwb1TKzcMZYJrH1WYJCKYuuvMZ8aFThk34wsmZEVghrbT",
  "key31": "2xfy7Uf9AEdJkYFTvFoqFfTgc1iZYLaRvkDpZisz7uuYbGkH2uA7UqFbRvbLSHtcnAKWwWGGXhVgKcaBh57p9bWC",
  "key32": "2Nn3YjWRAupTzztiAgRMNSkBLHLF5P8JtHyNHzt1MdHhxWRhR8C7Gwf37Jzvv1Xm8uPK2uh4jAmqU11vrEzmKPHJ",
  "key33": "59XPvgDBQ9JS7uwNaRNSbkSmXWHSvBxezKzBoaeU2mGty8B9DtQVostcptsWigyzKczHtRq68majuUu59AbWEga2",
  "key34": "3GGft8y5RZZixpHhiZNottoAUHQW6eE89psN9mzewzkSMAqySfB4cKqmSjNC64W8Q3rqG4ny5Ex3r1tA824MXvYt",
  "key35": "67icmE8PDLRehr2eea8WWCC3QpMXZupTBkRuZsMXz4NAQGQPDrsnqUYSC4JuC9RCrb8A8RJTLVrQA98ksUHhc1Xy",
  "key36": "3dhjvxvyjFsCUvZonrZiyHombNMvvoj6Yo6XkXWgTd9XfPPPMLyuKBq4VmQZamwAEKbaudhhnk33et6qQstNq47T",
  "key37": "2YfwswHC6qknuakU57ZQqETmp58WMuf2N4RpcQviEAnxagKyc5kKHhVTUxn7CfaSzZk1sFsRturDAmi71dn4cmpu",
  "key38": "3SwKLMPdHwUQbPRLr5Y1AGKVEJNf5DK9VuRb2C5yMT5CaCRQGWMqu4kgwv5WCzrqHcU4jYm7GQV4LY2GzZ286TVh",
  "key39": "5TvdaW5t8trnikcJWNHGzyrtcHQSAKM34CmUCNELT6PQQw4mMef8WTnejnDsBZQ94RwFVLUKbZN68qXEggNCVpHN",
  "key40": "4QGCKBrigmR61L1b3E69PaobAyMdKLYHQfFAWgsPGFVeM2MnNEVH1k9d5MNQyEfD5q4ahVMpCuXCwi1wGz2VW7VS",
  "key41": "yXa2DoC7o47f8kfraAG4Tdfg9qwjLZ6cvrkpcLN8FpsdXL9HmCKnrRBLNPUpewQiaykgMRBqsbYEMh1XGAFwX8k",
  "key42": "33S5UDxi9naYEQAGxvMySmoJUPRMr74Pbhvt3ZoaBwVNS3md8GcMjMwbfz3nZD6cfJ5D7eaDznxtnM7oXK3cyS95",
  "key43": "4A2Qaop6pEFAdhSfBENRPJkyyWHmEBMqtJ5MC7MgnzS7iSio1CpaNbRPgAwHeyMc5jcXoctDkzEJzi7zQuW6GN1A",
  "key44": "1NQQrA7cw52x1n3QauQJ1g5G8RyJE5udGVAikcFv1jcMsAeX2qycmnCucJnkUgu7ReqmqgipsFtBPEjvrC6ZjRh",
  "key45": "NqgWVoTXqs6Rh6GzuN2kNzZYQu6ShWBxRXc2yhWwfecpwc4ZesYm5dW1gvnSTD2Pa9u3bdJpUCv58ACvHgNZXvx",
  "key46": "2Xma3GZyLPucZxf96jRdPVoUpsckLtud7wc1vzdqBkjZMthZpPdSKRCesYcezuJKABCcFaFTF72poqXUGqVn9sc3",
  "key47": "3imUm2to7Q9miGFCjfkrM5yRqYoHfqjjeDZsSUCccLrtfHyDi6damaM4ToJraw3DsRs7ksQ7zTpXpdmn3hUQZTiT",
  "key48": "2aKn7kudfwApLqPJdw93xPqNsF94iyRZ7kDA4kPjSWkPYf4MYfMTsEwaJC5TZZWvBJHFmpFphP3toocUsury5MZf",
  "key49": "26fL63em6fmr2G1YUtoYc4rTJfUqivKQLdxBM511HGQEUsV4x995ie72Gd9ZPbAuZKcpRHuSymZiiacRCWgk9cBt"
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
