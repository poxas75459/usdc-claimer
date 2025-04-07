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
    "55snaRuZAn3FqkoyL3PGoqVpBNwLDynWaNxsjVUgsF69VJztUrRgiA8o49iNfBGsVYpRmejtZqpJ4NRJVKiCPAxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akHddCP6d2wp24X5tTFp3PK6zCqcSUFdJqi5fTc36oBNqWURUcbdGoUL9TiWzZZNRWw19ZiWnbameRq4MQkEZTx",
  "key1": "32d8Xi3AaNsTK4Xw8opveHXvp7PH9oFG1j7tWiiCCEHZiK2FL9QaySAT3kYN9XVyKRKPkozP8XLJmZdzuP5HLHgM",
  "key2": "3a6o9a6hk8EMNRc3rJuqRMSQn2bdS8AfkFGStNtrzDS1rbjrv4KSEkWs2rTgRns5JpgVvM7QP5XLdAwtJLhv7NB3",
  "key3": "2wZfiqVYy1xn4DGhCaeeC4dN7LdRkGQiRpdwxJtMRFgW7oZDhPq9VA4PDpexVdSoegwsgerDkhqSgvpXmsNvsGXF",
  "key4": "2wv25r85QcprheJ7ojbwdTs5LjB347za42Asb9RU4TPsJGsF4muh7kJ21e8m575c9KZQYgAf92sYkw1RQvfM8J4a",
  "key5": "5UtUSniSZrFgTQrHdiXv1jmpD64QchSfDkjBLBLW9ZJhNSL2AAgDGD1wBaXc253jcfoZEhU3MZsMTCoZfGNf7PXk",
  "key6": "3ihH2u8kKuQGBYQbeeuuVCmK43PqjKK58X4w16JcQGnpbGWaSRQJmukWtZyyeRQEuhXBQ8kU6Gcyvac5VC8yaLfF",
  "key7": "zmjSENx2dMw8cQsT8DZsJospQjqs9EYzmV5tvQSU2szmCUkoWbZcVMQR1Fma1NuocVDnPWNuAMwvKwtN5J57Abv",
  "key8": "4ehL55jv7XbKNR1JGoD5iEFeWyVXAoy3hMJeGTue2e9DwMhzx5h9bYgcZbfGzrktxvmamqumEdr87GHHXyCpjtYY",
  "key9": "4BAEzMrX617okkyGyUC5SmjJL475fwAp2RCqtFMyNxSETELRer1ZopavWyVzw2ucYT7cSKaMvs7fJjKvHFooscLe",
  "key10": "37SqmQ6qBsD3VJrr5N16req2KynLRgsJ1pdkq2sb9zbFtdTuoUskuwafPeWucMByXsfMmoRWKWedWLUVG1jTFQz2",
  "key11": "2XV2y4j47Rdv9cp1NFteKRh3FFDT1FyYaRC8GLMBDBEomh3D5yyM6NHGgTJRp8Cu3XQ8LbUa7EyRCwqfrQ9suRKj",
  "key12": "44LBx8rLtTBPqPQDqEp2P2FAZF6d5kXcHK3kHaG5yRd66zAwnqTesod2vQ9xGFMDh1mLU9EuGAuugFnnNScPJz3B",
  "key13": "5jQ6ryFhESP9pXD9mbVniSevtXFf1PXjTdBNjeRKkifuH13JJ9bHoUhA2w5s9jdGPFjuM1HDxfZsXtrx1KtFLyNd",
  "key14": "y8ZuSmsiBHmMbTPwUN3AdT3HRRu9t3XLqzEWLUPQszLZ3czZLEJBnyVVkEFyjLVaFipE3HkoqFWba5M7KoneEGp",
  "key15": "2N77cqo1Nmc5us2xF4DAUfHFdFaeCRvLoFn6xbGLewQNnkDBDjfkXvKM9c62vgeAsQv6xTT8P8jwPPAZ89c9F1xY",
  "key16": "5LKYfJuWEFPAcW9JygNr1q5b3TWRegQBXCrVVxVTiCL5mW495GsZyc75sBtq77UGCAjMEMy6a1qYd3hcqrrHu5AT",
  "key17": "5Zwk4X7NeZCcnQ3cNkzeJ12ApRFC3Uj1cte8WNVryTyvbeh2kYeA5RVm24M1rB5qVgDvedUceruaWGjfJgYt5jjw",
  "key18": "9bZBRQC357sZnWtyLRmUfV6i1o3Tibb7RWrrfUF7T43Xwx3tPr5AbMx7WAv99WdphNhxPX5oGY33tHDkMLqvYT9",
  "key19": "YopKkucsrZ4WHd4u9EeKEx6Ji28QBhVd3QXDBY4SLANZFLYnRcZMLuGh54VKdkSjqdMokHKedSzj7D4zVkLbF2K",
  "key20": "Y5AWJNQ8qgJaySQEN6Jugs2e5JysL115PgysjbjTYYktMncikioiyz6trbZLeZSR5ofeLb9md5ocu2NAHo5wwNq",
  "key21": "23qDNCjoD2uyTEyy7gKhnAk9PrJmaabQjt8NQSqS2Gk565JB3XTfWmnTcbpBTM8FsBdeDy1C9vYG26jrupJqJhCo",
  "key22": "3zUZCCUe3SiVqzgk7omhLz3UkCPPGdyzihPbYmPPFdNq7K8aQ2bxuSmK33TksQg5pGcHwGAarESoqRmHBBZAywn3",
  "key23": "53n1TNF6z9h75cjpCrEyVHYrCgEVjrJViPFLuX4asDFwp4uK335mcdN7ZvAo8JDpK9bvMmFZVo7NFsa5YnKaCfnY",
  "key24": "37Qu46t1aobsvYPE15gC88UyyfcNKhFut3wYJgFhYtmvvK7ZvJ9ejChFV2ju2choSEUEHE4zAKvg2HmnoLMmpkZL",
  "key25": "3f2wmrnQDiUJv9EWkPXHzJuVAfAMXxrx7dYVsaBM2NrpKbF3etS1uRKvLKNiNy3FQRbRQNoykbsWibjwvcycDVrd",
  "key26": "5sqZyg6opKGph25wff7p59Bd1EQL3eipH8UEYVS9jV9PWQAkdUn43LTzjGJAExCvZB2w7C55J12iRA25v4GqGaTc",
  "key27": "48HG8fmUiewxTP82nDw5iuPZuZ1BahMU9qkBVcw827MxJgmj7maRVKYjjogjaf47VqtHSPVjSsBi4PS3k1wg3B6D",
  "key28": "5yU7AWBvpRxQPk3MX5mbcNDXzbjNRxj7wwQdwDgpYFigNLeejHzy5TdiSCXD4Tg2NxU4SrRAGEBmB6sHjipjz4et",
  "key29": "3USBmtppTWA2MX5Yvs9msqm4ZXrCBPRaJSmitRPkWUfbqym3zuXpJtHyPCnFS8ptGUotHm1VBdLuTHAZWsQ8Lwzp",
  "key30": "2butfKGPTgfRKEQDseFWYh1NQn3img4vKjxjWhabSYtQTMaBAo26VLarR6aohGHXFk9FNqokwAH6vMu7YiwrZiao",
  "key31": "5WRe9ow2XMTqUfnGwnLBP1Kc4aYjiRWHHwsifvFNiWZyjBCa1Tr7jEfbofbCFJmbVtFzESWAfNaKk9isRcAMASEu",
  "key32": "5ZfX2TKJrnnmpaL2QRqaHcXFdzJLmZwMRE9VRuyaPuyeVqqhvsqd9WVqJErDySafW194HNZxEsTUrgSDnfD1nCH4",
  "key33": "5kSANQnetAHyJ2M88p6ecK8yfVxbsULSEt31Hkkno1oe8qA4uws8QaMz8VUkcgKvMVy4ZjujQSx5MsbV1TZnsteV",
  "key34": "26fjDtJ9SUKkprDw7GGC3sPSKRZpChMFBSSUnA2nqwWeE8YhbHyjsT9Ruekbxhr8hRmeBYSqPr8NSUZ2mWbGUii9",
  "key35": "QqcaT3DM2DHS39yMgK5bfCE9nkJYn4GPta9CBLhikQtYw7VxjDfxciAw4p3eLH7Y3RHcsBCTC21KwUZTYNGrxrm"
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
