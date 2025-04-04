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
    "2kWjJsuhVAK6Uk3X3Tww1SWzV2u1GwBDQmrHtvwuKKVAUDUDFkBSc7eboUFwS4L9HDnjvAMcQ1Cw8sJefoSPGYuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1iFJtVq6M7aRLwcKfGbXeDnt2r5HNy3pxnRaDAzrCPJsMZZ6mM3T4ngqmDKw9jzuAcxJzbssjPnYrnEp1zi3R9",
  "key1": "5b8jivhWpqBTWdMSeZNiTUuK63qMJQKZzV4hqnZ8vqVUt1fUdov5PwpZhLVKKeS2pPiKtHAae491NUW4uWAYyeRb",
  "key2": "43Lo51LTeeAo1c39xRo7V8czfqgKNB6ikTBKTnRiwfFdVPTWb14jFE86b3TB4WMZX7y3RS6EHvPHXyYHo3rrHHyv",
  "key3": "AiH6u8Qv5PUAo87kN7f53ojS8zScttzLnvTkBnUrqrGGoyMNgGvuB4ch6yhhjeV5JFiHMx1s9YGpCHoHUAFCktY",
  "key4": "4YCQy68ZnLm2ZR7iZCKkNa1E76G7VRmo5hq9JhfVDpWvnqdRb4Pcm2Bmnb4CtyXRDV2YpToS4jJJGadY8rpdT1ep",
  "key5": "3o92cTMxLanqwZEqhEvYJ5cegDoFU4YbPgKSqzWJSkLcdzeTp8LwZ5F5eUKNEqsxncvKYTL2sncrHSpjdA5ezsrv",
  "key6": "4JLuEyUL4nPz69iwX9dY7sw8UDEL6YwWGuDrFTME3FrN5RgPp32SYCRxdoGZbtD7avHsCTrFmb6U9EQWmwJ5vRaQ",
  "key7": "4NQoU5zSEjuwzJWzhVQA3SWFo3guuKfLzeYvzy96CQkeAau9q2nga9znw5AB8q9ZNqkQfieXcNH6d25zxu4dq5JH",
  "key8": "2yueDgkWxwjr3EnzxA7uRwYpGcp1mEHX5gbwLnjFyoRxuYgrdsgvXdn5wxoAzryhY6mVVEB4f8GD6guhnp7tSCuN",
  "key9": "3tGJc86KNdRx5Q94ivwp3zBGCxYggu92wXkVHjfrKnb2YoQHagKwrA8QbLYmYQjSh3Qae9KwcV9TJCuXyNjAFrnq",
  "key10": "3ZgEPLUfPzS8o2736V9yGtgZP2cQp7aVxivYvs8MeDUSgwy3DVp6yrm8QPjZBCH66H4sYbdBVDTSLne1dubXvGpM",
  "key11": "3GbCG8DXwkWyQAkCmqU8aCb6pHocvDKrs2nmtuCaEb6U1M867aMJZLisGxXjSUfRrzs4rfWaRBE8MiVfqx7JgiwK",
  "key12": "pCPnyCuwfhx6453ZeJDedDucmGafVidBMT6PigfNdcCQsEooKVrp8WajxVUKt7YZzrhjRi5FpjdUTXkdZf53Mch",
  "key13": "RboJ6vPC5k9K2gxGGAVZh1G5wRHngMiH8sVK1QQDENmfh2cdHHncYBGt6XxHfsy6wBMYTC7auRDQoSWpmufcQRG",
  "key14": "2y1c9zAa3k1jdbzqywRbQoTp6z8oWmaK83MmvMZzJmGQ88944SoVenuj7SAxr4TBnq91nXRU2JQVZbkmUL3qXUZz",
  "key15": "5AnX2CYtXaphaZHaVSKrkZATKdBLtrXSCtC5uGdUH8X8Wbvn1DSv8f81tCsJ2b7fCnaBLBmHPnX36uQQc78RBn2t",
  "key16": "4Cv9vemH6dXJLcY48f2pWKs2JiQ3no1BRWJEYXSEMSf8hSf4gVdJ1gbhBguDMYCCmrP5yYDt2Jpax915HRhnEh8F",
  "key17": "3UhDeVcS46GSdmYVU3jFZczcaMuMHvtgG3kxBLFzKSDyWDV26tp7HQF4fAdzZSn1WpKoS8QqcyTcjchZJfj87Ed7",
  "key18": "5R7C5CcQ29gp3sVnwirrhneS1KLXbKHNabPFHmWR6MF8xrun8HJ2m4MSLotnYAtyLCbC1WNwsvWvSArfYjH4F5zu",
  "key19": "5i5v3dGE9tQgCdDeMedByiqejcBNQrbbYbcHtSy2by2YQCAhJzDS6NHyyyc2dyjcNdaawS1ygCg6nEFUpQNvxjoK",
  "key20": "2UR8GVZTitoxJmpkhA23rjQjwGtaA4c3j8KCfjXNdi6y16nhda7eBW4CDoCgC3DwRE5b2MMmXpbxdiPCudSv1NAd",
  "key21": "AtJXSctmM7CTv5rkKoC6FoHH5fLuYMoVrmdS4MgXregiALoVq3YCzmDvL5CnybSzHaUYrtv6LRmCmxNKKnFTaGy",
  "key22": "2abFJUW7KzNL4w7YUXt15sWhMtNgsowpCJoKkQrjPyH5NfXU8Ccpej56L1QuccTaUB7FMTSjpVoBLDRjtcpgFs2Z",
  "key23": "5SanutQJHTNjWv9V3mFEadReDPAZEEGTYcHeA3TditmZZTMxo66rEkC1HhKuFR5uKJndTAV8AuQf2zKFuHV8YEUS",
  "key24": "4Wx8qMQY6sB6Wh2FLBiuYGregDoU9GPidKeLovxJWvEisKHoEdsiUdRFUKCixNPM6cve4b6fsLTg5J9Jb8iYMj1t",
  "key25": "4zCFvH4wdLRSVATWEsbrwm86YD4U92x9WfXAA58Es88EPm5CtXEQRPhLnbXxZAXn6qejBE5iwbmNT6YhdcgHnfsg",
  "key26": "Xu1qXV949FGmBsGxBYtDv4YCr1dTCj4WKyGtQWQ3CHdmn4u4pRryDPmrBsYNXag98jfyyqZVetMthUT6Fzq38f7",
  "key27": "Mi8DgxBdZvzebxN3xi8p91Cy7f6tzmYoSHUtL6dvTpCFnFYMzAVbECQ5q8giejCkzTJHrtDNc3zMkkWBxX3tW7Z",
  "key28": "3QA32CqAEKkJhjT7Sbm5kq6UviGxTPGYYraDPWqoxjbW3TRAPrB7PqTNt55Y6C8DqLkLMiZXNLvKmE3QwsC6SYi2",
  "key29": "8U7DYNU3bkszKkfBuJHBtu7Up9YTjsqdSiBmE33HpSkoLtemsiQiR4pnWzohPwtAD5p4rRbfDBhsuJqDVJTfCR9",
  "key30": "3nAAq9bNywXYLrtgYc2ZpttaSeL1i3yUBwKet9nrza5cwcPBHBsMKz3wy6nBYms66KJpDL2MaEcnTU9G9gDS5Cru",
  "key31": "4JgmjNYy6HjbAGwooqR53R3jJ6wDY9gZR4LFBro2eezi3473g5sUqjJL5pF6zwbAyWDUnfeTEW9sY9ZDse8NNGns",
  "key32": "3U3GTdjbybBczSAng2j1J32dJ87XcoqEzxveCrHcHMcAwoehaheEkFr5XqUnBqdT1gE7TtNjdL7s3ByeMAAyeS79",
  "key33": "W7YAxJHygu8Qw2hPu42ov4TRzRxQu7tUMgqagFM7HYB4zW6HzhAzAYmVhLPqigj7ks62ZvipFusrHbwLhFQU8MT",
  "key34": "JxfidwnqdD1oiCDX4vF6BxxK3rpgTFHAiiCgxzmGvVev9o12UN9Qr1Fn9x2KreCZFuyaHXJ3irSoaPjwRDd4Ghv",
  "key35": "3pex5kBWAc18AABnnZNtcXu7vfCt2ruLXKCbR55Nfpp28fticR2eiawseZfvTUJu6VyUa6KvsBhP4TNQFKHTUSxu",
  "key36": "3TKqpZQbktEyN2kjEmh6YaCtZ7MGuX1zqrJbZY8zC9GPNsroS97b8M2QBrfvgS7KJJNyR4owQ6K7pG1gjpZyND35"
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
