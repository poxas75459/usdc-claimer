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
    "66f4PKyq8hFS4ibv2o1Ws4Q6M2PGVgzG1CYka3JdBfWUBk7x9o2pmCyti2xNT24ZyQJrGreeoDk3tzCjxDHDtanx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2Mu7YQBWkuzMFmzsjsQzP3kRmhuyZb5uhX2aNeXeEq8vsEnG8pwyuV62jPLACS6h1Bcp2HgtRhr9Nhqm4TrCvU",
  "key1": "662PRSJcC8pVQu14Ntj6j5ax7mFD4KR7fyFvWPuEz5foXKkvB83bq9t4gLu7vubkjcLStehnNjoitND2RW4Pf33Q",
  "key2": "5PurhzWUBuPr69JXmERPTKFYBHpBCBi1BHeXWQiaCQFmG2uCgaT57R4DAgrTGLfg9ymjpYMc73LKcHuW2LZwMXtV",
  "key3": "4cC2vUZq9LqZ5RUrSj7VJSVh6CYw2QczY1AEcMq3BDxB2iYpaeCxMHwiACHPHboXt4zmmwvKdVrxEqfah5VRCzcY",
  "key4": "4DC8ibd5Jc8yq4grKJEBHGyQvssST6qG98BDmt6ErowtWboAzDY2Z8E9pAJMApGa4trra75d5urBYXLFVYPEiueQ",
  "key5": "FFNCna9XS6xWmE2AmNoCNoADZAKLR3PB8Ap9b8N1dxHJXKgYZQ226YfYJ69rjPvfkys7Y9VtKmvXBmWjCnLrWpe",
  "key6": "uX4WSe3NDTnMLLFKuEQCXbAjwZJMcYpfrDd6rYXFagGF1o4TAhMoVesdhjFgce1X9SCFgPvM9gmsLgbfjqFanFu",
  "key7": "4h7SspybJexLUKNQAFPNQjECxfjJaSRRPNtx3JGavNbLES443ta3QFYbLx5AMaTYqrhjZw4KbvjY6MaE7dZPM4Hb",
  "key8": "3mZMzMxHh68tvRkQs1QrtjQwqZQWbC9LR6gX7B8wuDKzsAL6gUYNqoxH2TnzXLZpBFZvRTBMvoupE28LKUXs4ftq",
  "key9": "3rRJVwAZJZVzhydiuAzY3t2JFnQvG6EZdDYNB9vCSmDNB6r2KAF2VvuZE11akjEC966MupLAXBG8Qdgw5mmZznt7",
  "key10": "332VYsDYUVCGPCEFdRKMMQqRj5dKc38LyEtmVc2dsk3XYz6NaVphc3SZSJFdjX7ZycSZtvRMQ8y1iN9nPNSHfHwX",
  "key11": "5dBDo7CyXDPzpBH2VHkZEycSXRnE3sbKbQKtwH7gj5RvfNvPqi7GVLXXbcdqMUKVeARx8gDGadASTs93LRUeCXHg",
  "key12": "PjVzVoCsHT2vW62MmapH18MukJGf29RUix7GHPKqS8BUHQzKy87J6ekqSorSWqqG6oMszhEY5sV4jFxPrf87PR7",
  "key13": "5zem3R6R1rLHuorHGi2KSU53dEVGsz5vxe9vXAdPHa6T1q2kRis1dYDZgMj2AcU345xtdCZs7xtrAGv5ztvzweT2",
  "key14": "3pZ9fKnsjN8vYTZWq5JsHeJmGbxhrdyXtN88uEbRYz9MMzPMC8ovAJXAuUn2dRGiqSEgNjHBhT5Qgq7qmBTEBNcp",
  "key15": "2AVJ5yTfsfFYFPUP1GS15E7LtFXdgi5b8sQRBSyFsQe5xqJpEi5oj4HeMZUk2Eg5NWfkuJCWWe6SFgq6pTwLibHh",
  "key16": "4iqdZq9Dcj5wmPGCVkC97SyNGt9dfLdpb8yfrC1LCyGzpQw1qo6TG8UkGF2qXUkenRXEvx1sNyuJ6SVG57d63VBZ",
  "key17": "Q9hEZ7Xp3TzWW7yKNq1PhDxppKmPEW7woXMf9q4M1gw3GT4vNfAXZKq5xRDXWeskfzep6yKWPxZioLXEC426bVF",
  "key18": "45ucJY49wVPia6eDa2rU3qyUUhXBRhU4whSJvmxYi3ZRrq7FAoTNtXiyMW7TiuNdGw9jwaq57mP9dHcTAvh6Uaas",
  "key19": "zxeqqoyWpADEtL64mLYybNcdwXQ3v4bHCZZfb8z7vaVHxVV5uV2tuWAjHjYWi3MDwuCrZ8WogErVAxTtTEvs4mZ",
  "key20": "5NPrgT23Czg1jqvsHKWyiKUUksbEdL12FQDAvh7m3oAQeB8b6p5DCkqnEKaLiaZNPpMR9vdyE1TBgwZJ6vGtSCq3",
  "key21": "x9gF8CBtZrT7NTLdKMu8F88F2WmehQp95rqgnjbvoGVocQERY5y1kBD2ejdZJGVvMKmxALogGxNSL6WRtbRVPuS",
  "key22": "54VwiYJtJ483bTrgMTHZRG17EDPexRQ1FC2TTgZoCmGdpkdaA6bJEqoEfFqUAv6FfpHf3UowyocmgrsHwXYXHAjY",
  "key23": "3QLhjUNpyTwMTvz1ha5YJLaTrQ3QMuJYWRDsiKdkdd1nwiXBvYKsBH69bq8cuKNKjmo8AvWPtJo37icRwNv3RJzB",
  "key24": "4DkoisKoUEyJEzHEtS8mj4HMkb1Ed1xiFqchPUWiv5JmKx9aJa65k5841mT15NK25hjUHy7uCuK1oujr7v35zT2x",
  "key25": "4vVGyEp58oTk7kNsn7ADwWfcWGoDHhTBGARZRy7WbGnhtteYqRrt3JzLFTJUhUeyvTosHGuFHrdKR8kbaNHHWgxV",
  "key26": "5DG7A8jjJD136n4K17WuNTiCCV1MWaax6iN5mBhz225cXpedRSm2xBfieLrZoARi1EeqLoL5cMWmf8LUMVrJkF7p"
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
