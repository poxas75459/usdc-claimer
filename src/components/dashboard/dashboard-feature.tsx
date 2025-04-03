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
    "PHZy7mQ1wsvZwJ6PaaszsNnUiAaYTtG2ijKZLfuagsxBjRtqM3mkxgXd4rJya7ufN7tRSNxMWL9zReBC45DNEZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQf7y7wukjZHfii1cF1y9ihp57Hkvb653Lie6iRtnUwJi2nUeppwXrRu7n6iHxWcZ61GiZb39CtQb9JDJmUjJj3",
  "key1": "4VQo8w9MSE7hCFgyPWvxFi4H7vVa2Fo4ZnH2cS96pbL8kN9hJ1rVZfZBfhWC22EQmEf74MSqwjWRDECvgzcWjuXf",
  "key2": "5ngBceW82nv77RgxRmD89Q1sBNcFsAxc9ruT8Vc3zRU6SZ8CrRm1o8N19GNG2BkgCuCAmut9vzyhsQpSmnKTqGZP",
  "key3": "511mgTNbuQjBye5oyyUHpALXAihByrh2UTG9BYGrdhZ8GmfKFtfxsGTNfqWjHA6w5tgDCeR5D6T1XEwTSmaP3cHt",
  "key4": "3AHniEB8Q6U7TBj1XYrFdA9tQjuhNvYVA3TLmgsVRq5seiDL7S3vjJRTWxA4WdAarY2i364sdBPYAfwLcFvR3aZk",
  "key5": "orGurG68EdPRWdtXE3W6jMX1hA2UFf1QUwic4g13UqJm4SgHBM7vmw9d8A9R2u6ZopzLnRT2nda5hfKnZ5PfEdC",
  "key6": "RqyKGw73RpuGMHaNNiYcTEGp2JXqP4dFwykG1e4pSM3EmqdWh954N2FsXrQrZBHM4BoiUujALeGEDdNEU8K83Ud",
  "key7": "64WF3Zp7ea7LFcawWcFCMfvXuTzjLE7v59aZX35L1r8n1i2rGqXw6Q9ZWssTxP1LGDdqy62CCyNipeNRBduSzURF",
  "key8": "5Ls5AkdBJVMujsSCzQKGK3TeLMZm9UQXjHRi8Xk71wfrJx64zkWD759Xh4dunBiYrhwjLoycfeBkn4XhhxvDZk2u",
  "key9": "5upUYLqHPLQP3uW75z3d2FZK6Bv6qspGpb6fQcDoMY6kY9yFKqLndf74mUagFRjcYvNWc69dGAFJDWC6TxuwBSmq",
  "key10": "2zN5PYsqihVPf9agWvBPk254zoNCGtoC2v9hxpPdt5LewRcgW72zTbgN7yTjpALYoDVeim4V6y8nAL5qZUJLMsgo",
  "key11": "4QhTYwwid5JLZdgmt3REDs9UkH1ghFW7SYRUMAiHxcofLJmhCQqPJr5RLoYzBGvoo8nz1UmzencoKMGj8o4nA8ci",
  "key12": "d4J37SP8rP2sfjRDBw63jCwAdXJnFHSVJrtc1oyxGe5SbycyomZx4g5LhBW6zVqS8hSNS8QXbJmqQeTf6s2yxg1",
  "key13": "3ru4M5ounxg9TsKv1C88tvUKiH5mCqdbekMjRoM9sNvH9VSnoay1Q69MpkXK8nMiXksR2s6ryD3k5EiE26cZQACV",
  "key14": "2uQ3iBvpnZUTHMkKLfx8UBkKkvs6EZnSot9ouJqkTmtEGMCtNkeNv5mxqJsbUq42xYKW8pNDkiyByuCCb9mHniYc",
  "key15": "4U4rfv6avUkjv2ZkWsuXPXxSSXxP9du4TxM7ky9cwLKhy2339BX6QZ5Ez9byBfP1W6UCkL1PFCtFr2ywm9p1j1Kz",
  "key16": "4JYWF7jCwizLTuzjL4E8C1DAM92XJX8pPUPuiKg4mzujMz54pChqgfkGj99wRZCMExbygV8c3f82PGjG8b2vpwiw",
  "key17": "4R2AiAvJPUKEJ8sWUHjTuJz73t5856cnaToYfqMjThjHyXp41WJ2Ra5Tcs3mqZbSMhm6k8m3cmgvQBXjWWDvrQBn",
  "key18": "4qmASt8jzCNjPVFCSM5E7NubsjkXdLhMCEaphTB2XXtcmdFpqqgrDvsFV2PZKBVShEky4izQ2pdxhan7AkvVHxch",
  "key19": "4Bz84UNUu5kp8kSF5tvoQ5JsSKvyj1EC4NXL5xR9vvzLv462216C7qydXZzLGjxSs9xN81ZhCsA8KgSYXqUR85zU",
  "key20": "4JYXDnRfksRZ4kuG8XC7dUpbnbT9ps8m9PcGVrnS2di2CCEu3P91M8uEAcXLbEMP4XS9EvWroEgxnHBmzFMuwWGx",
  "key21": "2fN6G74F5TahydwTBHwP1GeJTmyDSbWZHQNC3A9fXaANFmAJ3bpAoZwfQ9CXe8Xf5pRg5ihAyZtgbUHFCf3bgFCQ",
  "key22": "hNH3d2nBTPLNeYNRrBM1FTmErLksxf7bzvwcmsUSxyui6cJ49vYy4W7sWJnJvZ9jceK36QZrso6vw5GUSjhzvTU",
  "key23": "2NeQJ5Mj2t4FGmjg6LEDQ25thgmbPEQpVBhV9zzUSHfd7ttTtw9XFTVEfbykL5VF6QUS1gJd9ruziGYJSQ8ccdxA",
  "key24": "3xAJJCTeZjZcfkj3ocdbtPsShCB9dqunht9v5rZNFRDSGTnXc3isK8KcTVmRHRJMKH6nbxJRrEbnG4bjauMGTg9J",
  "key25": "E8q6gppaLCqpNsxrr8zXdJLPNqdkrrJWMGdzitdVb246W7CQUCzU9F1p2Y2ouS3GtT9ccjtH2sENocC8h8gvMZd",
  "key26": "2Wc7Qn5kUF9WwrU7b2p5qS3XtdnqVWmzNVrzVNt5QWHT5s5nAN2wQT2JT9cd1YqhaRDJZJXwXXbaNhuRcBADsyEQ",
  "key27": "cYjSBHbzuxhSRkkpYNEr25KYQZnNV3VWBs293UeRuQaJ43JL3Dv8Kb9cyHy2Qcp2fVc7YzLByGiywwtUidTcF1J",
  "key28": "31UPS7VVhS1Gz3YMnoFsZHEQptm8BfazEnMWGq3AEKNU1dNNXtUZYErPHw2C6C3V8bYBKkDeLAzRsJrwacs8iVeM",
  "key29": "338LiPnpqd4BsC29VW8wEYJm2xDwqMULGTK3Ax3YNMsK4mN7euM51R4q8P8MrrcKiAmAnp9WEmZ89yF2fm3q5xUe",
  "key30": "4nXPWwtekfJhptm5s5oNLoF9jT2xqcW7iFzkRB8T6CYpMFC2iUxeHwjcVUyNhed3AfWs5vayJcund2C6NrJKFk4f",
  "key31": "2SCpSiUiaqqhNSbKQzyXq3zrm2DAmEwJ2iD6yFRRXEDpeMeeK4KuqgnkuLBzaBEX2t8w7Y6w9o2usX4npfcCfGaM"
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
