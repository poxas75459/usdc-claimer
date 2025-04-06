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
    "3caArxcoS9og7Ag4MqNsPvqcTtyrbqjPpLE4S1anFS79Mf9GLx4jYbtbEVdj9EbRNgLZbnSKqLZdBtF3uonfyhEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33acCQvdafqEH7RnTGVYBDWt2GNEoBW9PyxN2b7tw28a8QbFJjNdN5FVCaxDNnFmgTkAdpDnhRbbFKK3AiUj7HVY",
  "key1": "3Ua7j6E8oXo4rMDh7BcV99nZ7nothyqXzUmXsyRM9DKVsFEnGESFWooSRrQgPMCAca2pJzuEt5tjdRXyYYxUh2PK",
  "key2": "5Y6cFZLmqnKXRuff4sPEVaoNC9CoVDRFgSKdTeth99ZPoNQvbH1UpK8CVWaGFvtrhGkvZv9BC7rPF1g3tEVXfk8t",
  "key3": "4QwmvR4tjjZ6CDK7NzTAQ7EEeApTT1cSyRr7xdDmeMxDdLBup48boo4A5NgaE3Fhbu68Mz6rZWpprLnR2cjZCCDN",
  "key4": "3P8ShMJQwyGAi5ubvWs7sjYQ7K6CDWigK3dX9GeSj3SddZfxprPsDD7Jcuh7G4ZQFM31mPotCpEivrhRr1KCnA4C",
  "key5": "45ZKuFrBkKT8p1gq24TNyk7cT2k2a6Bx65hx4WdEfyhqc33AC2kGV7BPFxGwSVraDN8E7zjc2W4yLjxLG3CRLp5T",
  "key6": "4tKASKNudToroRSHQbEkGaZTA9iHUSk5rVaU7nBrxsD4FyAADNqtofiQNoqu3uL1AkS5o2sXqABV24RvcoShj86d",
  "key7": "bLbQGM4fMFmEN7yNks87NDE4vjF56uWoavrgjm8T1J3xnhW25Up2Y9cnXj18Kg3vKvZqyxv7rvyEnBucbVo3mWi",
  "key8": "58gHLsAMPcSMjjwYiyKaZFDVLgMwTUi7kuupTq3u14caS9nVWgn7RMaWT4wdbEipEtfVc21cX3gnjE7ic2QPSSze",
  "key9": "3qaFLWgq4p4bTTcGcsc6GMk6p3kMjwrohXkJxATk2mvR3wUZcQmuZF3M2i1YqpJh3AeGPfuAh3EZjPeSSQcQhaFX",
  "key10": "5bBxpnNSVoN8TiKv9QPr9ah8oi5EPnWJqBJ7JTQkg8ufEL2sk2B7yjpEG8Cg4jV1qiVZCQaR73bnVvyHR7tDnboF",
  "key11": "3sTHieQehzr7dQ1Ms7BouRst79hgv37hzYdYYMfTjc4wvnS5mNZ7JzgDcrEdgAnfaNCa6DScbaQa1vXqsNjbtN7G",
  "key12": "3reJVK65J6aq2Vkut9z6bG8Ko8LJLVjVTY3qNGD27ryr8Z5TnYz9PHcyRQHdBiWj5NoekFCqcGhFhNmCL4JHjkkg",
  "key13": "2yw99qsz8BBbVsxEccs4Xn5kb8ZhW2pDPj6GKL2R7rCz2jsTxzjX21pZRb5SJcr9SsLZQh91uD9smncNtJ6ESfZ8",
  "key14": "4sGRngiAxEMWJArojvNLqVPEfkauYk5SZsAHS9q2eeMQ1q8UiypDom2KFNv6v15U9yDP79ZGYXuXXhY7V7CBqi9X",
  "key15": "52Xo6xhywjkjeQeqvf1Y5RE5SidkTxdcmZdJGnnoARZPdQTfS6vFuvkTSqhFQY8goMedHyVVXXMmcLHiPGE6pN4z",
  "key16": "41VBgcpPfTBgq1gsPjL4N7KS3VrA7SWmMKYu7hv7PGuL3q1FzKd2Xtfn5UdLUHsrbHX7WWGg68SbQYt6GmpPXCMY",
  "key17": "5aoHxrqiM88ugtPiFTUDHRNByj2zKdP9QGqTeQHTLDTS9dyNbGxy529C3kFEYbepCbnerSszjnHQ32BtrvbuuzgX",
  "key18": "59yWV2Negw5p2sHzcpgDWz2Zzbjv2oLsGxQfZX24qcRJkizwWgHhY3QAn6emUGfYG3anidkg9XovRNohMAKDsjoe",
  "key19": "3pp8x8LTLm3EUbdwb4d6o4qdJyuQsYKxLa2oM35sebSmDe18T4D7SumVYJVtkGv5ENKUhYmi38hB6RumqJ4S7JwV",
  "key20": "3fTrfEQxkUSVALQ1BKyxwB9nVpYWzg7GVTcjTSLJSzrjXXUMMQptwtq9pp1iuCREd3WFFvu5ZGdhs8HDa5JYxL29",
  "key21": "5QqpDo2wf62Er4zWULpz8Zu1wLFmESCQfgxxoHv8GZkKV8tskPx7PT4Z4QBr1GD7hKQbDTLUaz4yY4xdwyyHEeHK",
  "key22": "3H14UZ86UUrMdcJPDqNqHtRtQHaTEzEpnBoJV7gF1PCPKd5dq8f62ubLjuXfwVhzk3T1wnY6u8mSmYN8dqVecn32",
  "key23": "567NfUgCi521ghz8Qj7VwmhhFvqVEmGjrpApuRsAu4JDY6XojGAVgi4TnZUDGSPWmF2rwwfGJsieWFA9xQZ1pf93",
  "key24": "2rvsjo4TZ8peHRWT6cUqKgL445Kud7WGieqrbzagu6MsuiTxgEMUrviugeWnrBKjQW2EwXHwJhah3eLDmBxprZ6X",
  "key25": "4DPhTNzRKqpkYR3FnzXpg5HJyNRgtqu1qjyFrSm3YjRfMJeocqoG4bmWdhzVdJVNJj1Ws5abkYWszRAzcecvZyfw",
  "key26": "2PKRcN57UJ2BkXZCNcbRa3wS92EQFmZBZUYBikrbbBTBF8Lv9XgcBXq8ohPLySMXqxokV9KSzUt36ujhMnhk3Dni",
  "key27": "3uvw49rxHxr3F8dsQADTAb4UwEZmTNZQSkKKQi7randMjkr2nHHWjm5VNk2MmrZLYpMSpTwLK8WzmhaX1SY7v5uY",
  "key28": "2zjkazbR3ojQ9XLYPPq393udEoHtCe2CTQCSyrMngp8LBzzMm5tQa2fcJLvVNwj8WRb8i3WSY9P6ybwmPmzGgZn2",
  "key29": "3qhQg2KMsBqvrHW1FyTN5YH3Y2GvprSG8xniGFEVnzfwE2edUfXex1GvLqfzNSQ8EjcVHEksHSmhQcrjwagy7Hwv",
  "key30": "5VmemkojvmWFjjo8GUE9udNqqu7L4YhRvEPFWYBzeM2sH2vC3EpMZNgunEBPoeRSJqQYKrsyfbDBzrstPcebMm7Q",
  "key31": "5diGtUPPnjo76rPjXdLeJ29ELhXWCLDArnmaSQtPjo4ZemUDwBpQX7vvYPbmt63BTk7whWb2DizJd1iPRQEVVRCN",
  "key32": "5pZ8Kv6oHi1HyRpurkdbGNbX8Tp2z4MAzobhxsGfAtgGdSBERBWcjmy6qaWCZZBiCD4Pdpso9GzPMpP7v6Ce1jJX",
  "key33": "2RqJ6PqqbALKbVj9GSK8YY6omE5kvPDLrYZrk3KQvx9gGcqdSPn5CuiA9kr755gqDjQi5tTiv9VJFo3z6tGqF1yz"
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
