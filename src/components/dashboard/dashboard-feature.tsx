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
    "5ysVNkbQX3DKXJwDYB3K765E6K1DXnKPDsA67TCnuQxq5UrtMEzqYzasH6cLwAq9wSbBujCxHJYm6jc4ZzRZF7aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCiBnyVRZiWEzkh5RWc6qJ9MYjjnYir697dmjBuCWCrkaXcz9tZv5jFKKzLjLGRNVMLXbpwZu2CdGdhyUjKqN9x",
  "key1": "5CSz4LF3U4DkN8a8QAsQmPLZaZBJMNCZqeWSwJsTAp1Uvd1vcGcXbSLEehPaBHfLTpWCbMvQn2LcSabUZFVpArKi",
  "key2": "3kfMS8qw5KkmXo8aEfRVvg29nNXuhnA55KMH865NhTygg6ZsLrHnH43LJyMC5h9nRJQqZq7wxfF29kaDvdzw26VT",
  "key3": "3AHmu95qxNh2tJNVz7pXgYkequUVrhjRCbmteYHtuYPrNVnBYo3iu8Zknn1xRR51bmVyeVjsT42fYCVNKSkqZrrX",
  "key4": "46tEqbekuPmq97pgBGB7MUcTm1CZDdBErfyRRy3tcHmihU8F9LUBLa2XEKSYZ7zNxkwSj5ifUnyp6NHTsbUc9mXt",
  "key5": "59ZHr7C3GDatWBjo47nFxDe6Vq5e7pxUuDNGxYd6y8oonWgNYok19vQ68WnThfFJKTWovyvBmjmK5P6WV3ZqTXHg",
  "key6": "4CbNPXj8hj4oVEgysxfHNSS8d6eo8zs1VkTahgXHPrfpXnF9xnv4nSau15wXJHCnzx7A743pioeqUT6iaUFyJ446",
  "key7": "3BzED8984TJY75iGp3nuMZos9oeSdcMuqrZFJ8EXKo4dptpWkrHGV1sJxqCUMh4ejdsVbYyXJX5XHtkRmhmys24P",
  "key8": "3VjBLXaFHWDnHLcq4Vx8HygcSPrsjgspdpDMR7aFTm8d6TN3jrB1DnaidXyCGuxe3X29CXfWQaBg6Kz5rNfQ8P5P",
  "key9": "7pL9tuAmgFQN1YXyyvYjT3UjDa4uvkBtvsiCcPiUGRoc1n6GYXVp7ADsAmneieUCMUkgAsBPq2c2qZVGtq3uxMV",
  "key10": "42YHrLgeRd6xkRkReXGn5mSAovfiRyHCWhxkkBGoYAyFHeyTn5ga7xyjsoSGtUmVVo4r1UCPKW4XSAnqJhZVrbUS",
  "key11": "2hLJtmkZPsmAiZssZ3nCyBkdVzgxdGBUxhsm9EQDwPFdP2fZyitUiKrdyx3LNE85aYSCgy1uzducRB1VLy4Ur9xB",
  "key12": "Pt7X2rDx3tUJLg28bcfipN9p86HG6A4Tq4iaCmhJVuyfcw6H1ndS25kD253hDcoWnjjaBhRH8y7cbVB1agQa72X",
  "key13": "4JnHqztwLMhDcoYXv724cimajPPQbQ2AJWhne5Ne5UumkfMFZCeyKeu5CoYhwxQxAtvVerAY4dbVTdDCG16dK4Gb",
  "key14": "Ab6KqtmCCxn6bdHLKoaWWoHMVPdC7fBFVwViEhNEi4ZiQJkZLJTZQk7VDTr2Ko8a4rZPnocNHkZ3qcn4SwYtdeZ",
  "key15": "3oaXQsxxUEjwJv2LGQA9gEJd8sBSSRcww1CTMuAjgz8F6d9Dzyu57oQZS1PXUShCrJzBduVQcJawf1Gh5J1AYCuY",
  "key16": "3ChUpEf1nTukcE3uSKnXJLHoNBdKZXnkMTfBEYnFZj86TkwP4ebMnK3cEip8URJBFb3256SXqTW5n3uxEbFa9r9v",
  "key17": "3ZrvdmmqwzZ13sfibHa6jjAY7FDoQUDUimGREVifmqrhwKvzpV5XXSZwB8o86uo1jJFx2mZSiWDmg5hvvviv5UkV",
  "key18": "54Df6sk9mxuYyCALHojyqjPUqHvhA1JhDH95bzMXGRg6kpG4E7j9F1S4aqioVhX2pUP9PuMh54Tg5PSNrF58Nr3B",
  "key19": "5AcTEAFJiP2bGLYBDt2VCbygme7AioCK2aihnS1guKHXGp3VFoutPXTqiXbB3sWwJmJdDHKPh7QHhKzmaKGo3XnE",
  "key20": "3ALrpzfbJY5SZ2tiA6aQr3oCrHW3wmY3Ez9CcrfjKww9gjkbLK1QBefGwaaVa7VTkyAMBx8ENUhzjHNC4VscrAhW",
  "key21": "2c49hm3qMWhBrperovC2PgPcbuEi8TSStXrbgRzausMwBgB2HGAneadksukVqpXteY9Ubv7VyVNXtBZWtKVLDAhX",
  "key22": "WuNRRhxQnojY5reDZEHw8MzYLLfda8ncV5Ae7aWJPZHUrKooNDosSF8ssxHiWN4Dnb3CANeWkTG29KCEL12bE7b",
  "key23": "2CQbe7TUSAFYfHYvrzFW5r4PmqpnovQTCqAtATodxt35Khj4HQvJXKboBeSREi7uLj9cHERZkGGJjChdE3uroLNo",
  "key24": "5DwBPJkubLv8WSu122dH2SA3Cy53fVjPV5upAiJVBpsZ2hXCrCTXyrPENkq4N2Yy2Tvud6wascamDTUxmCE36vLt",
  "key25": "3ytHdnHm43S4i4kYpNdYDoto2Ps1Ep2xhsFB3ye7dniS65VjEa6engqHHV8AhuwJBAYPvuiUviNE8TGde93WvBbQ",
  "key26": "2mpbP4puKhZmrkBnbBWBtcPxvgGrARV2KuSjx6MTE5VXGc4e3tYAtCGvtTrzxTKpHBPyd37S62MDodSnkYEuDRaU",
  "key27": "ZwpwsbxkotVQ6YFpCs2nP1WLp2FfAyjeaXSRsdLk6oACqDQihWLnRoVC6snmPhUK6pULtCE9tMG8fGZopkGR7CN",
  "key28": "2JE5SH8t4qxZ866gt1NfXzpvZxeu8Xifr5hPtSyWPXkWVBDFihX7e7EgurKwn6cnExWNMktXku5x1vXXdQqM2hG5",
  "key29": "3n8QCksGR2kVd7GnVSqcZ8z4dq4NALdoqSLg8TAAqAeMtH5NbrRs2v8rE7FBd3biVHWwpHXyPxDGfH5xgf2ZDKXR",
  "key30": "4j4F9ZrEq6ZQC1LLjKTL13FAi76p3vKGs68aTi2rzDkfhwzV264CAQSSC3fpWNPGC2Dmcdk92nrfwYt2DMZHEzDm",
  "key31": "4jczzGeHFF1Yp783PB1eaQXeA3fjCPSzLtLwhHd7hcpR19p2WRssxiHwgEzLHFcfDyu6x4EezFQGouZq1Lf5KZkF"
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
