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
    "3boThX1xQQrB29Yj71XetMx2rg3n3rV4tnZrLfiqhC5FbuaB8Fi6Pi7ty5j3tCpYhJ4pjuTo9QtjCrY4JQG4TpMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ncFZcZs9eVtZn4feciG4M8SnSt3BghZeMKByRZG4o9yDtKXFBQcB7pXbLXDH3N9GJZhdsWH3LVMYVtcR2D1QDYF",
  "key1": "2Ubv1aS8rcVxxM1qkhztSQRDLdD8Ww895DUBMxmWhKz8ZccnqcvPmF6YaoARz9cdQJkSD3Eh8trEpKBjaEyrHgSr",
  "key2": "5jikfLHgFDVv5Q9xqm433SHYYvUvNVQQxmFjxbFvkN5BLnsUgkQWKJpF3L4TkuSJJCrCxFvaaGA5RXwRP9HZ75eQ",
  "key3": "3JYz9ddTJqCWcpJRDTxTxQHr3JpXbmiPa9qPnTXYuVWrpZj2voaqeStbFwsf91tiqUTzz5211xVvAKi3WiuEp45V",
  "key4": "65MNNpiG5DELk39QSXXPRQyizRpEQPfh2eo7ReRaSacFbFU9uh4cMfDqsFiF87vgEmDdfAji3t3cmdasZJsekS8m",
  "key5": "5iWA1iB5DJZdtV3Ca9fWV1WfiZNyr8aqTZf4G2Svo8kdzpL88R7G1bvH3hHmuVomcv7mpjp7ksE57kurqjkLZTZh",
  "key6": "5q1WcrhVKSYK2MMpMUgikC8WSCXDzzfF43WJcAM1zE1b8zMiSNtj5tTXxC8Kzibd6wmiTHSkTLPtro8kStmeTPEw",
  "key7": "51osW5V2qTrmcAjfWNbK8QK3kvzg8w1eiLJufctQk94ZiqTWDzp6a7vn293GKfUvEQk9MoQ2fiop2uMF26WBa2z4",
  "key8": "5nb2B72qpqVvE4kGc3eGxTboe5yEoE52pejsD8ThNcBdYquKP58kPkLagoBQuj2bDHCW37jmJXs5ys9PvDcvaNhm",
  "key9": "5swp5umxXU4GYuww1DvvjDHpmUecn6nFEphEQRGcipvjiGTu7gq2JQaaMxf2c7PvXd7aL1ZZX57nggWu8cbjskS2",
  "key10": "3DASW6f43fhRHJzuaiPbNiygaBkW9hvSUqqkduKrMqCfdY6trL1GmYnNKe4dWPkCvE5udPChJZcGqXiRKX5eGuM",
  "key11": "3a5cEj2PuEEzfgbM72CnX11NLwDXctJqRGrfYcapxQu6XkZZWKqfqR4d29Eq3qPLELvJ9F1PY6sEkWmZpcqmMbam",
  "key12": "41Q1TAycVoVpwQE2ptm3X49w4oRhjHUG4prb7iGNzeyHFxF1o6gmVGpmMfMLPenu83QY2twmZMFZBhvHhdD382Z",
  "key13": "3tGfQrTxTGL2TpirgfBpSzR6tCWZoeRWfBjXqG1yMqaZ69Pt71VKsvpMWhataspzPtfzBunUEyhQcKsUyL6GFMfg",
  "key14": "5J1AHWM88vg9oWsSPyGHhz4JZY5prZto2w1jBPGMJUQUYdS1epJGtH5aiunbzJpRkxFAbpKwfXEutcTnaTLxFiv4",
  "key15": "3eeVGPFw37wf2ReQAvVWz28s8viQuwvMz8DgGmT1y9LMVq5Swvw8Euwc93DWuJAZoTvmurABY2k6GrV3UhU8Nwzw",
  "key16": "pFFMXuBZQeW6kHLz4wJfpsco3eiVuTeQWQEPaBkg5yn7uAsFeAZKZBV5beacwAodmqau9JSVTfMjYHYUQcmT9NC",
  "key17": "4d3sGRqdPtP6ro7TKxKUUAXApmyod6yqcWJNJReDWfXYBQHtKUiYxNe3X73ZqdZXQwWFob3zTCFFiNGxi8Kt7CVf",
  "key18": "4wFs7tXeBnxo7NRuP1m941yNtbtF3dpVU3SYmg5h7wQhAnLLqYY23d5kKLwAqVosgUUwR29J8LjZrNh7sPfTGiDY",
  "key19": "3okkFhubHK8vJb8hVoeWhnEk8AHCStrgevVBimoUxV4vooEUprnJnzPx328xYDz5A8CEoPaP1ACFM56nKQknPB1A",
  "key20": "2xY9D3bLLoE4zjaXcU652nHbiWvVPFmcpSKD8TwoyjceQdxVEBLQV1umos3ny4ipa4UzfQwD8LRTn93vdsPesCCB",
  "key21": "pQouGUVoJyRvNWDHXTtYykBV7Lp6S56w4NCNFXsc9uh93iBoraDMKKo2EGAnYxtXvU4r3A5yJMDTufb129kvJsV",
  "key22": "2pYVYNNbKQLw1gtQ7od2Sw3kvM8YVVSKMtzHBbeK3s63NrS5Ra75Zwdj7BbDWSNL871eeb9WGG68fWrwvSE1tNni",
  "key23": "5cECaTSquzNCEtNuB3QRTqDjERG24LGRS4tQXsnR9PEAJJShZQRwsHP3vgKRNYHNfxyojDWwmhkGDiux5CvuCqs3",
  "key24": "62DmvjVUAvauEEbkSkNXBRiRDuPtyuxUFy8WCVtGBtZTaMvNUEjLdRypLWSVx69rRvwuSe61U8s1DfszU9a3DGh6",
  "key25": "3nKc4eCzCAqwboSNq62oTn3Aq8RST56zjB6A2VbXtQDjvo2AjrP5ZT6WuQeuDCyP1AwadxXRpLdzcuGvWB2myi7e",
  "key26": "5Z7yMREyY7PVnF3i2MP2KAeoV9n4eRF5jedizkpXkaBgsP2uRneKqF8PL2YWjVb7QCLzCHL1Za7sHN2SwK9XtYxp",
  "key27": "3sigqo9WVgUn8ZKMkZR1GV9bF8wNAp88x4LeQvuwto9znkVFgH6FNsjyERjSJesuMRPEFyPEhApwU7enMREtHogC",
  "key28": "4Vt3A6oJ2a5T5JtZDq8LC5aZry3ZDe4DsmmkxZDqVw2ZL1ZhuqNA7stxhgzKHNdGuofEqL6dfPMWXhVGHVFG1ymJ",
  "key29": "3Ksak9P8ri7ATdonaMjwo1EogFSDLji9W3XHgyXaZ7enzVm5FzLhfxMKjzQ8qr4r3kni5pQxmQEmbbhC3cTjkfca",
  "key30": "2vjT7euH5R4xkS4Aiwkb9aPMLGN3wLjRbNuL56CR8bRgeWGy47BR7j1jtFMtb5453NxScbQvovpiTkZ954sTLtKU",
  "key31": "2ZZdhCpKqXCgCyAXENiuSF6B1ixRGsovpLWhrAEs27HpLSG1C4H94PBf6GsjUeUwf5uLhh2mJdg9oW1gLRsKRs15",
  "key32": "3SQV1A6NFkkPcTZ5FZKr5dYRKoEUBm5g1BsmtMa6TPLyQyDieujF7NMFZisKD2FPQABYnMAja24H4nHTy8JemXRP",
  "key33": "QAETXhw3sBKqKa3YQJ7EUYxRtmuKnNqvau9cAxsXw7h9JeNQUktDy8S2Rithai2mMRhpEcdggoN3Saei4xwTD7a",
  "key34": "3KPFCq7sRttWzcqejrBeBdH3XSC64YvEDiKGKY5iGQxGAmSK4DirFZFHCxm6u9vpaeQUPEBjksYvCDrauvJ2Ahdx",
  "key35": "PXEVP2WjHpxdfhNe1nii7VSZgp7EyoEoaUwov1LZMVYFh9SkyaKn1zPSLbCGqtr8XCLCdjFwsbzZN34TmuePU8V",
  "key36": "zHLMQ3Dhdb1io1JgCmz33HXKhCjXeNk8bvPhRrzVkTgHcGK87xsHtpLac4NtQGMPQqMiBSYoRn7pWnsAvxPgABp"
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
