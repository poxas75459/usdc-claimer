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
    "RcHjAHpq7rbKj4sKwZUYCH5UW6Q7h5ET2VdVUmNZw5S31nfQ4DcuQXPRZm81rrgwAXgBXtynBNxSotJN3KDzUAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BYW5hVajJNCkwpa6nrVQnmDDGLeo4oNaijf7LroDxccHBqqJzKuc3ZLFg2qykfRtrjxMfZf7ec6q2536fg1uoD5",
  "key1": "3aZvUpCZxgwabuFJAuBn7SSVTPf11PZYXSUtLdRPxJqHWsrZ8mcUftAVFM5RYWuMSaT3MNLmnaKzLgKWuopBRtAw",
  "key2": "2BJ735YVvaDdqSJ4njJ576hXXo9SZxkRDpKCFkq8LUFtZ92HRftnVkqFkS8CGdgnYXveUGrRR2V8qGLjzxSMDPc4",
  "key3": "3ryKSnvf8Dv6Vgj3rHKycGX9sHcJTXFpVzL764p1QqqbQhARwo4ZD7Wq6ACCZPBbEwEsLy5gxXp4hmKX8igj5wEr",
  "key4": "j8r8HXxafXm3REKxfGS1UC4zzVoLpggBnA6ufsqg3fvDwxV8HwdnPYKTfHn87EzwUVZTjiTdTWuJmD82hNJPxf2",
  "key5": "4C23i6MEEvS3hmnsaujQYL9wnzc3hJojT2aK49u3orf4PnH3SemHQikL2xzYFrZhP3xDdjQ2L62rvjUUnLBapk4b",
  "key6": "5ozoETKV6qebZsREADbkhAT9xB8KWM6fKPBLrVhXzTodDvEB47HpWm4bDnMjz2m486pNopCETNzS3dB4bv3BV9rQ",
  "key7": "3xGaCRMF3DD1T7kMsTxJaWKxM4Wj96SZFk1XEzGGEesX7UUAdXuHW4Prw9fzwQAMRSF3kazD8eBBMrnWyr3txgzB",
  "key8": "nejoyf9cMquGmpXCxUU6je2YBoSX2im57iDNCc4yCAizjRyYTHrxJvSDfZTohxdzz4Y8Yva7vMPqtVh1KmCJDx8",
  "key9": "38VDtBSKvVP2JjHV6UdG1wREXfkEqT1MqyNnYAbHofpQHhK7AYFW2dVN5Rkc9oFGJRrcC7WhR4Qu8Bps47cZCbxM",
  "key10": "56zZeDpoCEaTqtAEeu3TW3J5jne5wducbioUaSLUWoLCLCeTq22eQmkc1zAamQq7MY4RXjc1XRKxWXUZrbM6jAme",
  "key11": "A2MhRYMkJKtPBZ4jUkQPqfYmkoFcXcZN5hHE1e3ZfrFAUmdijZ9xm32hkxKmBUKA6xvvwoELRqr1tCTsDEx277C",
  "key12": "41LkssTvnRWkpX3Ye31QB9g2dc5CxFMvcY8dPqmJZ8AHShkwQkoXBFDG8FvPwq1To12t4EDdmJU2AKTjc9FMF5j8",
  "key13": "3LPRY8RUBzZWLJSdmxaMpNc3ZrdUhcoV7aNdHmmshsM5f4VB29wEAYtyAFq1HuAT91ahW6VctYcQUExTdLnatp6d",
  "key14": "ZKhA8vtpmJGSyTqZjFNGsn4v21Hi29zqod4oC7iViNibKhE3U8D47ygQVpSFB3noTQ6qb92v9NF4BGNaih1M5Bo",
  "key15": "4mMVLTFSG5RFCBHBTiA4nCMPUtkckWEtguCNTkhELKS68t7qAcW7HVqaR5kDNAjBw37evrNLAjehjCiXkrUGTjFs",
  "key16": "67heipsUPE2VKY2iSZRRsHLwpEnMKTUXWYpVYqLfAYJyret5fHTDSkJCC61mzNrwUerFhHF6AJTT3oHUEdd9Ja57",
  "key17": "2fFgGrwzjBnXUuHVJu6TGbipd7XeYsE79UgyrQMt5mKdqGpZRS4eX1wauBzfHNhE7rULPGxtAyZsZaLe127onRGy",
  "key18": "5wnn9gpJeiPuSbj2w7SaCcwVkSmWjtihBTXucq7gwR2Tc1JF6b7qSdD7buuEXbSWA11QotKjvBxpmzYb2QizVPgJ",
  "key19": "3LA9xBBH7rP6AXfuZpT1gJozhdFcLAEPw7iLHzVbKNKyJbSRHMYn5wbS5uh3huHV7tkgK9PrFP76Yk6wEsHctcsy",
  "key20": "4daZXxHF8J38hLEmB7znhmQDoRRSBeTUkQzLcsC5XhYrPQXEcnauPi9HxjVDfCMGwtyNk3ty38ZrcmzFLRugmmVV",
  "key21": "5Sa8JdHVPgQdSGab3nqjHLor7EoUcJFJcfpYiBRw2cTX1jmTARw9wVPNTyiBdt4ipYJzziryEuuxLvo8BA3W92T9",
  "key22": "2b9LU8qaGDc9xwpXLU1Efzd76ptH2pkVRu5gJ8uwGcphwetTQkqgqFwWFcZGnteiWH9edFnRKcMiBtat8s2FmyWU",
  "key23": "5yN5HeajjqTQy6kvriA4ncE3ZDfR1K1WZfnJt7Gy1Lc6DPMDEiWjqkrwnSxHwXvGuY7FkqXBYaNvZG4mnKAQi5Q8",
  "key24": "2scT9XBWf6eeFTHTvsfCA17mtZDxhvQRThKonaQtmgZzgiqTEha2gzGdbFbrGccZ9doxbQSKDmTd6H3MrAR5kqhL",
  "key25": "4TDrF6KhWsd1RUxSi3wecpfaLDEEgJEzRRue8xqFLk5JReDgoxpquZMaAamLnWCxAG85fnESQLurU32NBs8xRcah",
  "key26": "4NtLadxJwnbZVX7VfRq3KgGhYw5PcjTkhRHipd4sdoxSpcLrKGKjDCzW427iULJ4WZFxreq5FHfaAMFTqd8NjWfS",
  "key27": "5gNfsDzACxgDWfSMveB1YBDwNB948jbSfdTWeSYuWCw4p6jzXb65rRZ1wu5ZGgB46eyezJKgHGJTxVFr1SH9feB5",
  "key28": "3cqqUjs5Du9t5bb2mgiRKRQ7A9qBTRFbRFRAZeHr4bGwM6YKqHd4mdm483FfFDoTY24cRbfZJjNvVQ5eFtezDLKC",
  "key29": "3ZhL1ectHsqQXnEeGhJuw4yX75qid1zTpmyo4qRYrTkR1GaTCQATGob7jMyYdSyczJZhfWpHVwo9qwAcXWwZuMGm",
  "key30": "64K4eVkrGUsqBtD3kTbRAZuJf9h4P45RyRwvZcpqwxh3YhtVEJ62T3UqiaAqKakxuBxh1ZNorMFG8DGD3UmRSwrE"
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
