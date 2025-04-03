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
    "5uj1yioua35Vb19AL2bX8RtSmXpxJW2da1HjYyc2bQdR3cMVSYLF2VxnknFw5MNrevv46bFhMqU5ZaDa9spEC6NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKr5Kz4eUbTwY4vgvcxTWbWQejCqV5k3h2Q2yqShXVakSJwFj23nFeiCtppVPUve1K1AJUDCQkLzn7xMuL9tmXA",
  "key1": "jY7QkrinzAx4rGvSyFKvP1VoX5KABd1tcwbJNN6sjfauc4JwKAUD4c3k8aoQGGF2VR6AjFpJQgG2kYw1Yepeorb",
  "key2": "3HEEU8V1kwpouZ2a2Q8RJkFJkyVX9hRScX5y2YS1ZCiC2ar7Vrd54kFZ9mL2qSnZ4zvyoufLEcz2gcG5bnXwwogZ",
  "key3": "4fj6Q3k7SqRg5tcBUguFd75SsnygU49owqvcQ4gpMfp4ddg41HrN1km43MpPQUV21NQ9C55cqe58aGCBikcmb4fT",
  "key4": "4gCyY9XTei85QSXwFppwRrRvADSX6tJLhw828VZTPkAtZwN2j9q86s9Rz5y4mJCKsfVPonBWvY2x2ds1pNyo5QgN",
  "key5": "3AEfa6DFkv5U9ep12tPuQcQKgTVTRvqzbtdYg7b1tKFumJM28Rx787TnEMpVdiYsGayVhpZjiJzPePKtuFARKzWN",
  "key6": "Xji9BHLPuZ16uUCPbuXu1gFz24jKyKFQrp6anCfTYqrNiKqAD29NfDLg9P2i7ob6VXzAra5WKYJsdcvwvTmZfmG",
  "key7": "3tv3diYPxJJzbCUDiL2JAuEUH3syZ6ufvhesvq2aCnXvxNYD6ahHd2wM21woRJN4qtCWTsMzu7rH6dSKxtTzgf9y",
  "key8": "X6moF3VH1oesRMuZRRmFDQJKFWkcEgScpQEHNEQCg1TYUS59v2MsXKsxUfFaxVLV3swbTLmesa4T4MD1mXBspia",
  "key9": "5JMS6m2WpMavkP8eJeRkLsDZVNjxHP6g2YB5JjkTiBsqzfVwriHw4sU7D1KiPHT5KArFwptRBqTwg4BZnfz3BoPb",
  "key10": "2yjyNBWMLjJshymF2PQg2AVUKf7tseRJLU4WPPnLqk7irqXP1gfNemuqPvp1Tt8cK2CAFz27h9ooMPdx6B1M2bMn",
  "key11": "2SGp91fWov24tHMgRyKwVo2yTVAmcHsxccnuEe2YVt5Xpm4tQ6uLoYeYA4Fu566tLJqFfPLzL8t348WikLgG53GH",
  "key12": "2LFvhfksPaCoapdXBHZ7Wj5pHQNhLwoekG6F6wGZPGMnKw2oJGGuG4xyK5gTBtTbASDxtpXncQ5FvTXJBB95dGeA",
  "key13": "5m68s4gLKDydKM5xtoHNRTHs8hbAEG83xv9qabp2dj2GK6QjGiA4hXUBvUadjDWCDazk1S2zjjFa6r1k1ZFRnMeD",
  "key14": "4viR5i43Lkk5hEEf5qxRgkWQxaroUwTYiswTJc2jY2hNDNMat3aHq6CM6ZDC2xwprbrVRWJzBov45DYMVT6jSHwy",
  "key15": "2D1jkZ164iMmWPwzrVSwRma1fs4hbQ9DwH8aT9bCrYJVULUfeNNVmTKvZnBzg8tzvn64hHGVASqqn5pKxF3iEwGS",
  "key16": "3H2NWSfJY6rA7LhxnEp5utp19cfL6nskVBrq5o7x6eJ2JgxDQ1KzviifmQofW7myz1vS9jGut717rJK94m2iRbym",
  "key17": "351bfsN5shUY9DbS6NXyDkoZRmbuqjJepReyngnLvyAoeHfRGnuXhf38tochE4wfmAxVJRvzAKhDFRvv4wuYwoK7",
  "key18": "3QYJSQTFubpMB15BAr2YqEF4ASBgeiLuYTgrZXH6rRUSPuuJNxirZeN5EGzVK7T4osz8EiPu9P2izauy7qfuFtz1",
  "key19": "227eeeffRJ9zws6N2SamMceugzPAgLRr9RN4uTV8nJU6TFdVFKuf897YBs9jq2jxEhRJt9mwbPmxHjwcxgvoVNhu",
  "key20": "63Fbb9nJ2NcmRqeFYhjCRWrhbTGLcwPS3iTZZ3wNaNHqBK68o938TGnmHYoQzV3vMBeryiCSruXUf63Y3opt19bF",
  "key21": "GVDSadnMGTuphqYgDr1JsAXjFn4Wjz2j7yw1fdSFvvnkxBtykeHcuyQXyheYLdWtRRxsVTyxCJrvEnNLeMh3sbh",
  "key22": "5fV3BdxitbsbpXWqMRJ4eDTm8n9SY6YSKi4ttrrTLyUBWgAXkttn1ikgoZXuzDKXA2XWa5gEeskKapZuRmEDS6zR",
  "key23": "2rexWWJzZw3kCyDe8Mc3rQohZawstGomRauxGrQCxPNS3RNg3McSZ1PoVt9KcmHbCg47CDNLzmAcRU4LZAHUf7Nu",
  "key24": "62GUA2Hz9XzfP5u8Ft9AHj5Aua6a1iKBj8BDogPsjY45igaejbu8LHR1UKH5a237H3mKBvHMvFhfmjTnY1PBwBUL",
  "key25": "4NgRVdgYceTe1c8dSx2v1S5tXD1YdA19JVygpQwH7qbiwYJLivthHdCQWgTzQVDFJK2oN8uM4otohdBTrJeDJgw3",
  "key26": "4hWYoscyEFMsQZfpaNrK2C4zpz3K52oqLsjruj1KiHJvvzu8Rc6sHm3Z9nLrApFmhiH46j5gUmUnTCcvAf4GHzW2"
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
