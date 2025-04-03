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
    "4gGURtM3CtydR9ttoLD4VYhXyhME75YLsAeGmUvmSUgJc7QJsDxMb3fseVLQHcoZHNJNEn8A3wpWdSSKRj2Z7bCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycXJbuWfYVfae93qoSdY7mVBUHZQHi7comY62fZruymVV1Q8nkRK9tzgWhD7dmyYbmWR2XYs187ZiBVch2N4PoH",
  "key1": "ThRTG6XnV5oCQc7zcngJdvRMZVdqPhREHT2yRdpGfCJygxKHeJuW42vBhghfooX4iQ25XxKuG5quwnmT7LeoGaj",
  "key2": "5XA6g7xbRxwqjTMU4HGJy7jq9arEDFDEXbLKQMG9CSM2Ji8RrPq4JQWHzgnopDvu7bdPqLxAWWx8CcPFD5PB5fsr",
  "key3": "3PqxokD41rsmAnHdjGCxWSY5DK2NBsmhAho4LN5Ayh1oksQDW2XEDRW72roD8pZZDVM32nALXRnsduVMMfoFixqm",
  "key4": "3fx7k9Y1sSXmF2L858tYod8DErSsmRjcPEPmJj2QMAaJ8rSkdZcVcEDMeiFiC94waUZJVS62Xp4XG1Z7UYeFGitg",
  "key5": "3SsheZGvLkYeXHCo3D3sv9L1cLUaE4LK1gLLXkZzkpo9QpLtNhPqRpp25zFZeEA9EHbYYXbtV1i4h9aeq3mD8y3n",
  "key6": "4hjCnSXPv5Qn9uuzCRZG8yGcYPChsbn6ciYh8p3DgKeG9ipzcJhC1hc1U8mRH6haeazmYyZqNh1DLCvTKuoLmVTp",
  "key7": "2YceFtpjRSzXeeAPc3fVovXaXbww2S5Tme2aCK3H7jamDNKBQ5hb21qjUrgy91F3c3XK3VoX1idSNTn9Wh2XzJtg",
  "key8": "2fC8SeBJcXi8s2QUG5RLPDCf3yMLo8whGsYuEmyV2A7bevxJ1PmvW3fBouwfoYTRweusQAj3fBFSJiQAr3yHgZ9W",
  "key9": "jbjafi6qiwV5jVhrb8Y2kYgc4ybBxwPqvQSw47r7iT3kQKvaeGiXKuGM9mqLN5aoAhzfKt8EtG8b4KuDuhhZE4m",
  "key10": "46pzfWbi2kHyszR3borXG54nq3Bvs3XDniktZjFqrXpEv9CDhfM2Y6SqokC3AkRqeyb45s8j2R9VSBAF3wJvE2Tc",
  "key11": "fgWCf4MbJkdgcTif2ctTYUaJhnFgJ2KTp7kPmHruFVCSA2MeM3m4hstvHZVmikxoDetbNxErXPorPhxWFNhGy6J",
  "key12": "4K5HNsCxyqvoG2qqV98bjB8DAqBFxBs9kWDrMAcs1yr5SzUbyackiUjgHM9LFbymAoFCzeVbm46uWVGsNgVagxpJ",
  "key13": "5HvAM82Cu4PUbgYp83Z4hRonqRFx7qCVpQga8gsA2jZodQL2RoV2DswH4k5QtFNpGdZv3BjP3dGnwb2MYQGcevGU",
  "key14": "2iqvBBcZikGWbsqwTRGDRix55Xy1EKzYqCKUFn5J8LbW2Frac7v4M1FaWeoQQsMp5DUsKDcU5N2kvJRJK8pfMk2j",
  "key15": "3hDdAiNcgW65iH73vtjoN9X4mmBzmCPDnqDu4XgNA8f1U8is2czNgfMvYhHzhzSrcRVoZtD1RQVB9bHsj9znZ3Na",
  "key16": "KDPsEDkTvLarzyN1cHmNPHD8DLKUKisNVGaCy71PSHvgAGqPcmXMv12nTCDoyZyqC29GhbPWJ217aYsPaRF6Axz",
  "key17": "5uf95GwDijpJbRwwAvdLDDp5pz3q2zctcYuwQX7K7AXSGxbNpQP3441xVmX3ar9TM64eQd7g9rp781K6ovEoSxCT",
  "key18": "3vdbSXAwkjiq37oMSosZDaE3FEtFbPoC1Cpt3EwtfUE2BNgG7MCdfT7rcXVBytQhT3gaBLnRmXAZUCmuYVvtQCUu",
  "key19": "5aaVN1qVJoxVDrHjcZdxeTvDzamd95SdbcLEh7JaHDXNVwYe3hmLUqjhNQci4uJD3RjKc61CR5wiXbgs7vaKxKCF",
  "key20": "5de3farQWCQj4VNCB1mTb7tShS5meTSTcGFLwF5WYuVRDUUrQdY4k9S1jTN6V79Z94AZgvsuhwxctCvcZZARN2RX",
  "key21": "4WuTUSW2wBP1MebsXE5Mg2EMCfCM4w6G9fEroh8NqgtcjZnJwMiDQBeDwiKsGz77RhokGury3FxiakA8cDSExfcv",
  "key22": "5wKhfynUBMxVyBHSx3rSJJQwwUgGZQ46S2XJ14EKBzWXmpYEnqzZuPqohBnXcczzccsn1C6ysBzubWyFALzSJZoC",
  "key23": "3C5WfKGH6xsww8akQuKNzZbnx6xt96YrDGe2JZgrGCDGj8qRQnbVPAiUgbeaJMWP4BNrxJD5p6sydWRXUui4bBbM",
  "key24": "4NuaTj9gp17Q964ocy9CYW15MoqLPGU5rHX8A4ogRik6auV1EgctMcoG1LtVXm93ac7U8N6EG7fQoyS5yqgrecGz",
  "key25": "36H6osMnSRr5yoj5UkhBx312cSfifny2tiPvNA1cCUCC92VvhWodTem2D12qrUuLppLeJ1ozxN3hKNi96z6Pw9iw"
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
