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
    "L4isHsA6wjyAoirnza5HGzixtH7x1rv6D43jU37HN7cfXLnvT6HmWAksAXXHSKhwY88hKjcrz7DepiHGZDxmgXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zcjRSnvxNzccPf7ysSWeTdbrxcDZg92qC7gxS4MQhFinECyWp2xX6vmX5xuCsSW9iYyCzjuWe3U6EED68WTybZr",
  "key1": "2WHmW1MfeXZxo6QSwHFj7teAMnCfyGzjuMqY1c29afU2DtDg1thsD4TqxpdpzmrcD1NRLkh6fe5vQhqWjVEr5XLX",
  "key2": "3tK6DvN5i5knAkb2L6vtZwNUbK14h8qNbBrpQLd1g8AwwJBTHHwCzQ3XQiToHqg7KRZqDF6zEUqQCQTXqK219n4n",
  "key3": "41YuB2AZzV86dSLp8j9xask2HbyQzEHfePDzirU6AtBWGLUgoapjbdXY7qvUQ6yv7eQDAG6MW7ywMUXhuYgWMU4d",
  "key4": "36Lk93oE5fZPvg18coSNdbZvzw5kWuXsLWSeSZUgAJXFhjs73SR56xtQUVxScq1dqfPZ9dTFpVfLin9ydqXyL7e8",
  "key5": "eEvf2hbEEvWREsvCf89QGUgDSZALmJBTmEpTB3hC21EJUdyUzkqnrpT3YhT7nXJdE8oyoVtR1L5nQSdxUi3jxYb",
  "key6": "63TR2viq6QRedGEFnbvMKXnEyfRKaAsVCS4zLXE2RTPmiH6Sv4MTbLRBat2zXHzsxejzyRpCvUEsqQ63Wg6NBis4",
  "key7": "5iWCP6xvRJCPmLV4gHENA3jvmBbCgzdzbKoKq5otnGahW7b8zbeL42PYanCw5jfbWaGnb4e6z7gbWf3A8YWxk6vx",
  "key8": "2rPeKHYPx9GBHkxMQ7wWrH9LSJuneLwHGnivtgXYNPbFvStpWKtnjd3PaswidtvUSti1SykfkBSAqmAyQfoAfoYh",
  "key9": "4q4RS83PVdatXtnjNLzH96W6d7KCjcH88E8pDxKCd2w6wH8Ued7KQ6oQ9vEDMgWnrBCkd6Kce8oDHQEBEKJr8hVr",
  "key10": "2SBwfrnf2qFiPgtgBdShn5RE2XBBnqF7jd1FEDorRDGAb98KcdzoxMMa4B6nPB2uUxGTDkSkXpBBBQAMppSsUDB",
  "key11": "2y7RzWDQs46EXM8ZcfPYr22SkgaJir3vaZTUc3EUrK3J6QG84YuYyLLm35jwXNTs5PvfijVogdQRR5kM1nfuUvR6",
  "key12": "5eyGrtHQdddF3gpMChpVNBYZrNkSwtEVpPhbfXsLLezzC5RjX8GjJi1wmsqKEDQQEfaaYbhBFKxNjnRpNqSm6cRd",
  "key13": "tuK6HtqALE45T5SCgXmAeU6T65xrqf3X19b2nJvrZs9eusU1Y2pKyAPbCrVa2YBdvJkpQTyL93aTq4eD92rsGgE",
  "key14": "43CrWAYEfGtuh8LuT8nfX8ppzSgr9ecSvHRZW4JCQweUcoUmqwNdBSU4NAh6MpBnicd6ojKeDPtnD2xHSukxyEvv",
  "key15": "djKFrMTCdXiQSkjYhs8JeSrwv5XCAiKk6L7ihXC81oNnVzPu3TusDXM2iKtnoNhpze6hE7yjUeW6WQ4LrYfsSox",
  "key16": "2vjrwdq9TmuKcug3efMeVaAvNoYwhCPoBEGYG6rM7NvkUGepSLqzem6sjmRvvEsWLsZUUpivLNYKaZEUfCgLA84Z",
  "key17": "3CpUSDv7XuwgMzS4XNXzAShJkYC3AHkcTeRR56DT6hwMs4RmseqprwHcWMjnzc2hdXKXhxgVx9X1qNV1jLXhHshy",
  "key18": "f3zQvrk2dF3n9NQPHGQtFUHi8pMPJnRpaBHjg8g8ZsUX3vQq93UNTcZnN6R91gmYY85aGAVGDCvAc9redHzqSNi",
  "key19": "5cTPUx93j1wxxDmXYdYizQ1noUeHqTMtdCUnGVdsCZHq8ZbX54WZTxNm7q8PYxfb5fjwfFKiJPu7vig5LqDQKbYs",
  "key20": "2gScx6s1gDZrBYeS1e9AhhWBSAdcgCQ5r5F3VUcQnbJz3QmeMWywyZtBPq5No4bvFNC3gF8Ym64EkxT2K4pKf92p",
  "key21": "2AS2P38zznNXc69NHbFKMUBuC3VT3BsLyiEuH5EsH7EtPrsESiVgFha5hw7o2AxemjcqJQCJgdrqb5QLwNmmnh6u",
  "key22": "5nxdsR2Dg9GseYSp9oa3MtkVbf3CtJRm48QgJsUogdiSgadmYvbHmUdeJsgrGcyhocBQf9cFk5s9c9o1jJ3bRAtT",
  "key23": "53Vz85V1KV6C5zWNyY1HPFuHqML3BgNMzLJ8KsGCFwdJ8eMbstPtvPAh5eLL7N6e5BXdi6ivshTiJkA3EpeCURhd",
  "key24": "4zmArhtcFvNqhmnKvujt7HGsWtcpFizVipJupvTt2tyufrQYFRz214jMhS6S8SJLjqpYXEkhHrt9TzxL9yi6Sb1W"
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
