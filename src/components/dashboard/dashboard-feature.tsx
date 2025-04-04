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
    "4GoLyn2cEvBK9Rov4gPVMhZqLo8YJags6jcX23fCNMYSFZWwUL1rQNRc14dfeeAnhi9zZr4nzMzW7M6czjqLeMLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCtwxBLQco2iKRFDzQ3qmTME3harPNruaDKTiyUQaVHg2jT58YM2s7bGsGUqJRqEG4ztN3GJtzzymTLgUHxbVPL",
  "key1": "z142SsPkFwiqW3WxVibmBs8X5dPKvJk7YZwoWb288baxPf8eeuAxEzMv3g9ru6FMuGAxoLrFpDPMbY5GxUY2T6v",
  "key2": "4ir1ZcGUiQBgRruFkh1gKecKKmgCG8xzQizD4vgmSDS4p8nJzsJFAezr5DFqGzANpEN7fifULdh1RDWebYzGRtrt",
  "key3": "MsNdhruka8kRBT9G1prFJc5zAzujxh1a6KtSgcwnEW8xcpuk3s3NMbtC4oxJ93qnguDJS7h7db4NAGkzBAgMmB5",
  "key4": "4k9vH4zjVPTLyZCjeRgPsaJVCSPBRZQUhNP4D7RUAeCaVpP5dxGQK1bqfGb4K5u47eGAg7Z6q8dRyPc2kommg78F",
  "key5": "5nTC3xpsL1u7Egkn1izrKsghPTJbouX7PmJ5KbxFwkwHAUjh9iULjwsaikANR3TsgspKCbVvywBUjZ7NwyJuRWWZ",
  "key6": "64ohcPodpvsqCBarWTMU6tDHjjeLLG8Nqxe4SqhNjfXXPtnLjBiUbuN8coCChJvBpWzqdtg5crgBhUMknfxe7m6R",
  "key7": "5DCDaiRh9qV61jdxjK4gxsZ5Sx2AZWsShtAx1cRtzU6Z2FsDDBhYuFMHGLZ72WvUieMYoP15r81kAHvaPVhe9eSk",
  "key8": "64UhskN2tcyRYP2dqMv8ArmEd1A9HnP2wYmgyYh3ug8gUA4wr9Qtx5KPdNrA1DE9dqRySPiV2KTZkDXJ7MPk3BHo",
  "key9": "5A7N5hWr6yHdYaBuUguez76wjmPqyicjZQAZdKhMSPViCL5T2VVFKc27KVJb5zYHhjhiy9A8HHvHdHK8C1cjapPz",
  "key10": "nsC1B5jJADuBkkse5RFMbqg24EsK44xaQUtPUkPqRcSxTPhzvdUyjatzakEtdrPHJQuHaQHQBG9K4QLcwXoGqx6",
  "key11": "5k9ajJCg3NggaB5gNwncvanJcMhnYf49P8Eh6ZVRwyvBEiHM7VckzkV9JE3KDnMq79pWLUuLoGaTdXkWPv1jBFn8",
  "key12": "5PTgN3UoH1fMzCpctJpfzgvXRLZ5vm3xjykoB1AEmj2jhyWhNg3CagX7cHSrwjQtDMV6FhC53PCVSimWXVozTX5x",
  "key13": "2thLbAYDFkoDbmnjAREEJUyJJ1E82qEQaEykSBfDLnH4B7rE4acQYuBe3TM4EzQku2dsp2QXh3AsGsSfRUZtBrb1",
  "key14": "4XrCE5HuH1kJduBsxmt6pKuZN85SfuqEWPSAh8eeET7v84DS4kDqddhyWe6ynk4r1Gf7Ts2TDTkrTPhCjgum8Lub",
  "key15": "3Y6mpjozQAfRhN5g78mSbsoqUVGNS4RiCf5RTg1i6p9kfCf9SZbWGk4n3cPLSTzkSoy5c5ETRggh43pcNaz9kzC7",
  "key16": "66kPeG9uJJcd93hB5DasHbxoXmF8DrNQAa1DQ91VUPCWrpfnRkhoe6WdcDfN5bN8VieKoBq9182KsGkHa6arXYDo",
  "key17": "5dmxGeykXzjjDwkc6PcyahGuEeStu34Vi5duXUGiEm3JsdQY2hEDDkiDQL9j1J1gQgnBCA9RmQyLniEkZoYmYrLg",
  "key18": "3V4LrWkAdzPGNAjNuQyNZngF5fRUtomZ9MNQa127SSCnoXXE8bUTy3tfkuoSQt148hYmmXNt4QohN9C92RRKRT1g",
  "key19": "4qhSHwntvgMT6FoMcTFVaC4S9npb5T82NaLBMPboRMcW5Z5rBkUECJTm93ERgmJwgGtAbUVgrTA4bqzTbP1FtmJr",
  "key20": "4fbbQu88PjHLdpmxbtVcmujR9EbSGDuYj4BgRm3MxWPJUNok3a9jU4K3Tu6QYrfUZQqc7nYPof7S2p5AH7rfjo6h",
  "key21": "2oszCDVWi4oDiRoCeva3uERdHgtWHNBARDqdUgU5u3cfvw75qkx6azszqxCNSjRkxeUgMqwbDn8SNP7een8mDy4Z",
  "key22": "3hhxq7xMowzB7eCnvRVedfxtX3WsFBpERG5bhr9ZKktFirimsuS1AdL7bhN6BecvVPkt77cpovszMAEgz25uvTv2",
  "key23": "5kDHMxNCpYwyBYgaDXVDLkZ1qBoUbAF5iLH7zdS1eR7ZAYvQeTZBDbQ8xdTRcWMK7YzvWfn122nQfJV7Pe64AZBH",
  "key24": "X3MJ8DUf6Zi5AJvy9ip13LqSZ7sLK1LxYxTUQJcerd4uMsErowCW3iitDQqxsN26vGBeMnw8noGXw766BUL66ou",
  "key25": "oGr4JAuD6pgFiRe8gX7wQJHrG8iJKcSAPnWncMAnggrxzgFMGUAoZUzPQmeGuEqYukadTq7wn91tc774nAaDM7r",
  "key26": "3nKQ6DXXmWVsnBTi72duwqTVexh3HZQwUWCk5M7ZPiuDuK1QyzBfkvRn6AA5wExwrq9noSvA7rFG5KEcDD5xyDNX",
  "key27": "5D9jo2rJyjTmw1HQGdQeKtbN2UCo8vYv2rY2MdcP1gKBPNCDyW4g2aJ3dnyZ4jy6xsM6TZVzDpbp4VBUbRU2XjvQ"
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
