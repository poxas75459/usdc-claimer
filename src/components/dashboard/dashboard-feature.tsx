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
    "3pW4nKsSbZMRhwWuYauJMqfFFgF4Mxsqo4VwyxVHe3o1ssRbvT3xNhqC3pc6FBHQHxQ1SUdcuUT9QtWeszakx4qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ReaprCmSAKfPZqGem4you736M2P9h4tULWZbE339tW7diovGhrGisF7Uf42xDFGYxSe9fw1qX9VygTByFh9xdE",
  "key1": "5V3HPmqqo4d7RFENFqnc3bxd97endP9J3xPAqSoyy6Hcg4tEVWM2acgNtc697LdUbRud3t7EkcoEtaofWHFCWkHh",
  "key2": "5pRvugrTccb4j4WQSaqUsJZPGFcFDDCEWRnV39GVsQFHLamMJnYaifUjVGVsuXL44Y5HuQEfZZApk56Z1z6WEv6M",
  "key3": "3NZaAiuUURNz4tMGsFBau14q1PbJptMnKEE91v9b3mCJQuroV4fm5FMS2kGLvGktaMgvJ51kAf4w2EdYfEbSqxYf",
  "key4": "x5uWL1hyMh48WonR82qq2Wg17ppzYpBDEmUZutRSfSsq7s2hwy7b7ds6Wxv4JtJVNr8BkWRYGiCTzdWu2ZnKQyP",
  "key5": "4KNNEeda3MMnwS65s2o7vBxiJZEqVRnjP9YPxkwqUPPtt34PEra7Jv9WrBLRRzSyhfqyd19TdbJsXAp6mxYZd8A8",
  "key6": "51x57RFVXGQmdT1E8vV31gcqLN3tAvNjLpEsacEFQ7uuGexnEMG9Lfc3JudNNjcgg45fdEnUimYSPrTD7EL8CDtK",
  "key7": "4kELQrnVPaAzD9caboju4xCdW4HMMxTLf6YKpnfCPNSH6N8vwEye98q6p7TfL1sJFY9JbBwp4YsTRUmJWtM8Pfu8",
  "key8": "3sLbUEzGdycbehkWCXb4R9aRnco21vaqkjdpkz66AdFrsy6n7xwyGMqeYACJisfNaDAFH3wBB4asgkoy61GPrWEq",
  "key9": "3JvPDMh7uY6usQbGjmFE72ViKHq9na71bLq6NhEuubntK37RG175LfrRCNuG2dipXQuAM6QT6Fpvo82WeUwYiVgw",
  "key10": "3z8wmtw5Wd4NJdV5PKFW8J4aqHhWCcabaVJHXPyTZayA4xdA9Fh3x2TLWk6mGFh65ctgUrBtCCHwV6o6zgJFhm1d",
  "key11": "4zCJ4wiDGw8UakNEbVuzA9qMXufcjSN1vZXGMxNJi8mLPFHZ4zW89W5LUh1aPLkSiEVAm3ntWRS8kUEa1efKXBvx",
  "key12": "4vsmCT2aFU8PzTSvvmRCguEDqmKiQKgkDKHoGaPbYRvYMS8Gefd2tsXHokZbcvhkftM913U4V7pYZ8cPMtxkDmkG",
  "key13": "2CAsSS5QMqdrmcPfLAXWxLYvwipL2uJYjmQR8YHSy1cyVjSGcfqL411fCXy3HeGtEGBvw66nH4zBPvduEws8BHbn",
  "key14": "5iQCKvhEPjYpYViqqPYzCnRDLK3ZXjgqDEmQAtvu1MCN3fZe8vat7CmKvLa85eFZTZJSo68uUjSRFakNvyFR6pWd",
  "key15": "4tQq9ffa94CjiPsG92EDCKpZ2a7kCAjSuRi8RQS72taKJokqJRJaWZRh2RfDzWeWSPq2Ay9jFT9C1vgDwDrQZq5c",
  "key16": "3ZpscWfX5qAvVG9Z4fazs2ye5B3VaxFdbUe7KPiYMzf1rnMmvbg7DMFiL2jDK125cWGMvfPAf7Xx1gED9eTxpM6n",
  "key17": "4x5wxYG5u5F2JNK4J2K96MTFE1qFRnb4QrEoX76mtaQMzveUVspj57813dDaQ2MdCdGMG2FKt2W7rJt2VmwLKWgs",
  "key18": "2MPoN6T4bvrK9rVmdHV11yjegtGT2GhTriZx4UJEFBpiWgSfNQRiSLkV15EhFkymi8sJJNAzZtmUuZbpRhkWmokc",
  "key19": "2mdwjgM59PT5ze89X9ggaS1hMw16gaxH8AT9tSKq2c1QTGmSceGcgRYYT5874BxvoHzGb3RpdmjSXMwh6q3LFLer",
  "key20": "4MBMKCXvg6XwmouumGjuWzpRoca4R6VvzNY8FTKHthhntB3njR46uzHjCV7rZGx7G8C4atUYCgbb2PmbMa2YCHcE",
  "key21": "4GdcRE31Vmptks9JPyft6kTMtJYYyV3hgZferVYgfChykmBPYHuakhgiMKHy4GLXidPZ5YXpefYtXPJxJhotwhzi",
  "key22": "3yRqwiy4eU2mEqmzzTpURE6kdN4RdcBRhWtrk59tGTRtirEkksmn94XC7R4AvGfQ8UnFN9FkRdTyhVs4uHP4xKt1",
  "key23": "2cGxvC7q2Z8gAPd2RB2SNeNwDPgHZoToCrbD8oZ1a7yexpfRrrAdy3E1j4MgqrdwCbuTU7GrPJ9vZQqwGzNNz4yk",
  "key24": "2bzDKwVVHBUT5L6YTiJYCUHPFR5qCASYKrVtMkZBKab4qMoQfmyqMHPuFihy47pMJoZ18DBuhmZPvBcnqYyh9mLn",
  "key25": "5AfvMVichhPQfVK8XMinGPC7tqmTrmpx6pVNoWhhiSdHbVW1iHRDK1USSLxDqTTnv2HSK6UmV1ie29HFJziYfGmR",
  "key26": "4hkwutS9LB6kzj5cMdLq39PjFemqMNptvwT3xaXWWC9wiou1hAhQfgo47dkMc3h1PxzjvSokhB7HmeBknAkFUtzF",
  "key27": "4vk7RnmbQ53QCWFRMEpkAFbR3kBhJrYg3hHthDkq5scnGGCS2m3eeBAgowYEP77vNQm9YYCX3Cb4FiP3TrkNgmr6",
  "key28": "3HjBjZq884Yzfn2yuF6Zhrx8j7Ay9SZgAPUu2nbt6yN6nSc2hK831HFEGcqbEU5WVhyu93CMkheqKEUFLn3AjE8x",
  "key29": "3HKEoYpG7cxB34kWZXfeNxbrQWhyzrnzaKPeMpnRDeDVMgr3qdvC9WzMUDUhxgJPzqQsysFaMPc4jdHLE6vgmTLZ",
  "key30": "4qbqreQSBfkjsht5Wp8doz7qzf2f8ySFpx3uHtsWFHRC9mYzpgZTjBTiN3rNr3qzfDxUvNiJrVFoQM4yvzx1ymDR",
  "key31": "3tLMECQC2g3cZhvSdYS37Ywpj5nav9NAHGMgkDhN9MfzzoHxoQFVhNqRXTN3h7narv3BCx83kKqk7sdANrykV2hs"
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
