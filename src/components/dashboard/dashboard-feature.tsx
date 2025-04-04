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
    "46h9a782yH8UiXyAes6y4Zau1oZyGRu2YJY9kAiaiZnEuCk3EeTMmeMYwfpFUVxsV6kv2dm1nHTFjSYyMaQZXgwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lw9kqyv8WvzHManvkJxfNVhaQjt8f1sj6uDC71WfdsRN7spf1WhvbiCeYhgWT5USiP1jm1QkGyYLSfwFRnZ1VU5",
  "key1": "riuKTdSjwrMGt2Z5m6RECrjZaHzCnMHdXjeUiqk89YLSudHJ8EMLgWavM2MLSLUibDojweG593daQqRwfb86cPL",
  "key2": "LubXhK84yudnDCPq3onV4qY1Jr8o72ioYkP7ytDqxWYZUxGfien8u46cb8Kydva9dwWznt3BADd7SydM9dNB61h",
  "key3": "5Uz3wyynMbwNHwTKNFrxKjjiHyn7R77esmJhvwzKbs5mSnNCpT2MtFSQZFZvtkRcXXAASUxKFUJ8rVNm6U1Z8KZi",
  "key4": "3iZshneMyk7pxvFwjq1B8StzbcJaqWDRJAautkG1yE6qfPpGrxbYKPHHcF5VFi4pVo6fzvQd6vPZdBfxVeCNx73P",
  "key5": "229KaUCsLAXF9DaMRzoFY1t1zRaHxyp6tDqtQCL5dF4uU6faFHLZpX4hQ7zF6VQczEHfwC4c93evwhaPvgEJoD8j",
  "key6": "3kxyUa2ZxXhGBoTQQDZJSD86Lm8tGqg1Jr1o11KKUpj37zbUvqnJMKR5DVsNU691a3vbGacWMr3jR9jtqmzLUajz",
  "key7": "332p9RGMiFYjgnwQQK3xTiQPKqpEN4RHt8TapV983fjrZJjS2TtKmqcp5T9KzQNmrD6vCMfcMVHwQm7G3Z8vF44T",
  "key8": "5mx85prtjn9ftDrtum9vm8xbNYmopf58GdUQ97NW9WF2KUwPTSvdK9NFhstjLDa2x2WX4dBp49G7Et17M7gZZ4ub",
  "key9": "4g9ovzQTQ4ieCko4AKNYcrEXMsgDD4F1snTj4YVDhEvSiGn2YmJmBDGSQMCvq9SRXPWsGdHq62tJsBvN8uMEJkmi",
  "key10": "22AhkuTw47V346HWZJXARST5XGSqVZmsDx23EMC535f3gy86Ti3nBb6y6nCxSE45pWgj94LQoaRyQWX2JCrZBHxB",
  "key11": "2bSY1hvBpFeN4gB9S7wFDbF4FHnfZ7re6SprJdNaih3GpGQhxLdHhPSLYsWQC6DM93kx5MtU39dBu3icoSAdA25X",
  "key12": "4tqXwSS7qVhDWDDKwj3U75qCEusdTyx64QxWvn7EpuC3QRKhT51MMETvrZkfmif7KmGq1qroWFRQHLCUdFwmQLh3",
  "key13": "4ieEYzvYiFJNYkBAEVbXmJwaguSNqAaAv78BAxfuqCRHaUh8mFH26i9Vq5sg1rA9EHQQZCR55fgcd3SQkVY7k5xX",
  "key14": "4h2ybEq6LfkGcfmBhiPBusbxqdN55UkT5kDjE16HH31Lv6idVNRFnuG4TB5NbSfsdsqYE8scnQ19oCRpyjCnTbPo",
  "key15": "2Nayas2HQTpiriUqdBV9QScZ49QpxQCm9hfmG2yUr2HGCQJV8UXqL3K3pEHJS588UMH3yutr86sPv6VAfSjKT866",
  "key16": "5KD4Sf8QSigYN18pTn8HZf6DtCwSGpoeaAs4955HeKyv1Y7tzY1Zgg5e5EZaJxyXshvue3sPNfUK8WuitFnjW517",
  "key17": "2sJD6XHrsPMXjXsA3JCmYjdrEcvain6zJVWXffwiNEEuJqYpDaN9wZ7KSxoC1fdZi5FmCc8wodvjgvsrnr3XeoEu",
  "key18": "3zVVabMFi8KHQWcmU4yHEXvTfgpdn7hRLKtBV4Pp6tQ1T5o9mvDRjPJhGyvxaDytRrLoJKnovNNx1wq4FDmdY5EA",
  "key19": "zRQgxBH17dUfw2faoQpTBBENUFC71pHy6sghap4LBc3LShq9NZJ4uZWi4Vjw2JPPrbFbWwGDRDXbnAJzZ8hpWXV",
  "key20": "tE4v8JSv7rbmqEp7P8ZruNvbhjrLSMSkxRrtgbeYrmtgJvyXkwB4m3mBsLLDDENDWu64ezufhF6LuQcsnJyu7JC",
  "key21": "4X1muBjDbFMz6B4qnfDdVXwqxv7nUFmXY2B7ZSewDvcFY7zbMP1TkkDG4oWNRuqksfdzUHJuvK83VscERUGQGoun",
  "key22": "5vzEz6QaUnbZDne74cGh4srTzDcCKZCofoBwtvYJsTBjjZpNHSuqSduo54WABpCkeYgzz8HnMn9S9RQXSCkPEt1z",
  "key23": "43u9TKzwZmnTW5auHt5PwtzoQSpDVGKEBh8HiqaRUBXxPTkuZbXndp87knHMxoAxKMZKs7U1maZqc3L4YrgpbST5",
  "key24": "2pHv4SepKcPNv9aR5cnpbGCeNWGzPcPsCjcyYSRBz6YG9gs2YEUzGXcrJViQbtAkEENuix9p9XP1BTxFhSS2WXLw",
  "key25": "5LAgqNrbRfxHkjCyraf3wG8rv8CrwXk5VGaE4Lu8kYUmfFdNr2dqFj2pfVBUhGVxPkzrnHhVyVkzxuodPpswsskP",
  "key26": "rDZQtKJieMPWMn6seHZ2hKyv6KUsg9F7kDXfZCjoGzEB6ricKRW415PHWHogF9ZdyU4UiuipmqCoxh6EJDAxUvB",
  "key27": "Vrnf6VxGhEkRJ3zSZ4B5qBcVD9oWiw1bzqa3rnpkojKUcWKDeXNhWjx4tGTDL8uqc1CSDopJ3FaQ4QGhH2reT5V"
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
