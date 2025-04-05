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
    "3HgrbVjrBXVoW5RHdr3bzJLrqAU3xMAj5AKDFBefsyFWW2rfQESz5GZsD5PTskNwr4GBBUppJXMg68aKe5E6tPhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4or8SeXjpFEEJsiDBbmzKS6vG9Z8MxdiAFZXbLxyeRLX1R9K4D6jpocJM5V97nbn6xDvtZRQJ4eMCs2oD4XeZiq4",
  "key1": "4ihNkXV2qXXHrS9VwWpGW6qTAassP674wWT6aR76JAcoMenNoyoG7Jhq2q7EDmbazPKRRXecVM2Nk3aaAziTznpp",
  "key2": "2BwprJaR4NnxwWrDj13NXgoiZHKhf8YJeRPTJNLadTFJ8qbUnczXxYHk1gfCLFK5RiecSA52WwChHP8zbwiXNMWY",
  "key3": "2VKDjbCwrVr6NT5sd9M2NpW25RdYFDDUeb6ryiRppuE2cYvdENDU9DfM1MQSXEqRvwyxbvZXA4zXiZDEx1MqFndv",
  "key4": "2B4SrqDxJ5ZFNJnxwY9rxiJ219cVLii7eVrdbfcWRpic41APCbdcAxzf85oG6PafqW1jCYpA5qxLaE9yk92TbBkG",
  "key5": "3NtigxRFUr9wt2iP8RSfc1DvQ9xTBYcZ4ckZRsYF7XYeo4g1D64F1YPeQvgfLhFZfE5cr6FGy1HgmvkUz6QsfKQw",
  "key6": "nPNNLepMBYErUh9Ag4j37d4eeJNDiop4cv1pUf2LneFkWhReKDf3XWg85m23YwYMXvexFdiNmLWqqrcJnEvoxer",
  "key7": "32PxbsESJfvZTA3cvuoeiJd7PJyNMGAQRE5kjVM3jWc6bjP4XZkMz1JwZPJjbKaZ9P54w8eBRWifJBEzv8dJZrMs",
  "key8": "5BHDUL6ph3Q5RcWRsVRkPMNKqgT9KjgJsGm1Z7pZhyYAtABPLnA2CE15ykAqbW3hXqCDKz5iMkioWr3KgqHNxpyk",
  "key9": "5y7x4HotVXMmdhynJx1XfaU8LU6qx5AV5xx1JGh8LhM3SukUP7RUn6rk2YbrxBnazq4XJqW1dEMZBMa4MGWL3pfk",
  "key10": "5iwvQsGW3X4tPjron4m66YKWLbu2SCznsD5vmymFWMGat8wW6kj5qxfRVLG93S39XaqdMp2wLawtEToY9nLmWdv5",
  "key11": "3G9zvbmAG1QgRVCKkm5Ym6FnEmZzitJ6jhnMPrQ6KbtEX61uc7KaniknFdesfQquGzLC1cncob2keofJiqdn1YYh",
  "key12": "2vDycsuMe3yBZAiQcukCDumKHE9MBDNCMnDeXdDrsAwbW7BhxHDcX4dyEuEMvj3qbB1rFxFg5pkVtBsbwauDE7FK",
  "key13": "5yDG1aTYcdnogkZJNd5SpVBHhyuTStoSrxgu47KLHuFCFamkYWF5C5b9MAiEtSh3RiupkGTNRUEXEh7rFzVH8JmD",
  "key14": "49fVSUeaSbdSKUx48pW7sAPdqXaAohpUskiq688s5Ws7rSJzoB5GwYrQfm1tEBRW1PDKR6esj3Y2UcKgZvjabRfM",
  "key15": "2cidLzzPPRqvPGesK8xRF1r37AEtAgYUSaNvZ2HnR4bhRZT8nD1g4wQkvEosbxNcCDe2XTNYj4YAXFMQZpa3M29S",
  "key16": "4Dd9MKwjTaQp21N1gcW7FxNUgGPKP63k6DhDj8pVp3FTSp5RA6jxeNJnAvdFUECmqzp85ErRq6p3f59MbTULE7WK",
  "key17": "4Dpzav9gqELT6RJt9bXZG3PXbENw3T8ZS8dAGE9qBgxfzpKTTrpi8GA5gB6HWkr2U2kzaJDJ15NfbkwDiBFoo9oK",
  "key18": "3Yxrjof4hip1qGMukmTwWJfcm3GR7psJsYG4aNGGMca75PgVhBFEf9ZBSDem8YS6rk2vSGGJMVpYDKPQifRC3qFS",
  "key19": "21LVBbp9BAYGdtqeHcj1AHkX4LF5giC2BgYhg1FB6LY7xY4shC3f9pN59WjgazNC1WPbesbiZUL8biWqr1n4Cwo4",
  "key20": "4dbRLLuqajy9XSkjEDVNAFLs3Q6s8JoxssrK4AdJgYfs9qhJ6fKbZg29nU5i2W4JDG5y9KuWkHW1XaKfy8FRtTtu",
  "key21": "4Fnq27yZ6iuLXTmDwQwAZNHxRhhALzyPt23wj9JJcrU7xVRGX9joMLkwJ8pP4zijNkvN3nDXV26SmgsS5SK2KStV",
  "key22": "zjX5c5CKNoHNVEM8Cw7hT5vH2UYZVDqg5vvUzQKKtebSGLMLANybghCzchsyygozsPZnqUqopHG7XuEdA9HrZ2t",
  "key23": "29w3BX8tHExyymf47pTYoYLPkXrymC8dXbhf6Zvm7cMmtdvdBqBbaowMwMDcBgB1snoh7K2uPCzxKijpy1yx1hBS",
  "key24": "65CsFXytxHSs5Mn4uodaNDv8BVqaQkXs3LmnVKJMv5SbvmX64Lh4HFsnk6xytwJFUDeW6ZpPc2FRGGvhiwJgkirJ",
  "key25": "5uUDECK2pXb2cgvA2bapeFsWUiP5ya17eay2YjVypo7KFQJFQNptV9T7tbxxzVSztumg2fY7GAPKVr7WnkpVyFVG",
  "key26": "2jdRTXTp1fCCo9CmwQfG9sFK8NGpbw7J8BmogdqUoyiuf7UD6HiggJgZ1z2YSPCtUb3yNzQaU7U5k2ZYb5vVZh1x",
  "key27": "3TAbXpY4SSKXJZCqAxSP7haPB922BYVZ8mpWCfBZEQPqjotKJhrigY9XMj9gibR62jKtmyTp1kGP9Az1P4NMWfUr",
  "key28": "JaBe1VWXRTG33YqqnqUXxqp9Pu2ExTpVWAz8Yf6ita4QHvipTVpoKppJvfHb8cwyLwVL27vX9KNU6smPRDNRgDc",
  "key29": "5ChZusaUHCtcdSdgzqCpZbQicJW4zXARZTnzDi2Unbvkg9ATh45K1UsMyXVh2C4BTapX3tyJ3s8fvRNTwxEyM49V",
  "key30": "2HRdaB7Tyayn7h5rgttG2hxaoPudCTaMWA3HpgGoYzY8xcprg4741ckMwiFtmMFeX1bfCMPeDBU8YDvjPLRLTXYv",
  "key31": "5Ln5764RC1MPZDr2xYm8eR1FU27sQdm8rMhpbLT8KQYyGv2b2qcBfrv4Qmbt4gtx1KbjVJSPu44fg6hqZ6HPeTgk"
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
