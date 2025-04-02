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
    "3BxsxPHNy9JgH4qjHY7P7W3awmHt2yBKNuhFx5UhHsHxHSGL3dwngftJwrd1svcUbgvdmVrjmSLqVVffnyUvoeBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVNaUwJ3wzGwVK2FyAiJoB74LHK9dKs6QgZ5a45CF3xgiijXBixGR7kpw81ZrQTbCSkQbKicqc1mngMzHM415X9",
  "key1": "3tqxezAHEczcc2gD67iCkMfWBKTgws6kTu9b327VXY9wfUkkMxzwPWDvzWNbbtMZh43C8ruHPgMWNdq13e53msi7",
  "key2": "4QdhqqfBZEo6fM25LCVVicYP1159QKmQmwbMcQndNHM6wTB5yP2MbtwqyMeZSckXgfk2e6NzbarRtjfWgVDF9m6G",
  "key3": "3FsUswz9kFF2vWArDCfc8784iL8SqJYkzBMKVK3RV7yTwEgj93HpfbHyKEuXrYuBPbXUtZoQsUR1hLjWiqq9Aqbm",
  "key4": "439ppvwsjczP2wxp9R7N6nNymDAmcoMYyNUmTfEjUHtfziPrhjyVVJ21MScBbeSUMryA53d8AL9X91YHwM2UJKJg",
  "key5": "5B9LJa6zBMDomsog7ZboiM4ZWjKwMyvD6xRyFKpKNdfWSRL9TdUVkcVVdL1nzR1XdvAuLHVFnKEhuRNxXxKnKeMk",
  "key6": "21BtNDAhZmxp4Pcx3vc6oDwErMA6z8gGfxFCHktPdjJyAhiSucA42dRDfjGEPR37jiU9XTWrk2fnhiCt7uYdKRY3",
  "key7": "wCek28sDpGHemWg4JetNRijHLAJJAdkNcwucGoxgREv6pBGXeeTGhSgkbzVeZg8r1v4SRCBAQFq8dLgUUx1gLrK",
  "key8": "45Ch1HnEv1FzDupzUN7UXYVxhu5bUV7sSuC39g6TA3CJqrc35Ch1BcwnN6ndd5rF38PFuS9xrDU17UfPDVNb4f4F",
  "key9": "4dLwMp5xiun73kZrZwKMqfeuzxeRPGUAkEwSZUt9hXobAdBdxupqQ8nKzTmPV3W2J3BkMJnpbHF6WAmVME8wsk6A",
  "key10": "QVj2T8y6Z3KiSVu6JxrzueVTLTRyzPSwXyyM2xCqP2CKpsmNFarYATs7xS4cxoNo4H5Ufp8f1oFbEZWAojrPzhg",
  "key11": "JZc8QHCJEFPpsGemQWDTasvvP754TuUY49bXM4KDkqJQ45xVeUFmygzSv3DLwyS4STvmV1J5RQu7RcnXUrppdgB",
  "key12": "5PkqCg8RxZd45gfdHnsmHp5oyScHJkB68PkWUfRKUE5YrQmRfBSVSFhKDqMJXKuRJVveJ3WTPQEZuxTsZY9LDLA5",
  "key13": "2gJRm8j7jdMx2HCo6kd2ZCjbNsWt3PwGZDNtLJGvBjTevYZBrGjqWGheTaDrqgN7y7xYC5BKddtLURCu298yQYjf",
  "key14": "4Uma7gNahbyA3H5fK5cQs6eGraJUNdGBF8ku4ApGG3vQZopL14wSvHfzoeMRfnJRDnJacd5cVTZLPu6eLadNq5Zs",
  "key15": "3FtmY53uHbjASBqsUhecKqGvRR4PRASz7dY1wQ1RzACYXiGGJs3x435kvbzE7ye3GRiFmLwUTD4Jq7TsXBhf3t1o",
  "key16": "54cA2rJXWCrWyaFWYbpVATgcEta2kFiQhB3kWsBTqJLsMvqFnYyc9PRTDrrebcUTpcT4nMjV71HFzwfXh1TG3tLJ",
  "key17": "2CrRne2FJRN6Cqt5ihRNzKEiaBCCuCX6QtjZQsMLG8G4tmktGQgH8mcb3xfQST4S8FemmSP9ZmoWFnjfPpKfS7dB",
  "key18": "4KMcJgyPueKjCJtikkAELSLRzdY5ibwnfZGowhWFV4utP94k9SZj4jLuSm1jXV865LWy1SooJMp3UtJNFXk6xUqw",
  "key19": "5DMyBp9xhxzU2ZonuFwMXxcgAtggH7Kewco5xJdGtavCuQyo15WRFLzpBRbyVQJ3oFXi9KsvYBhCisgxm3bq8KwN",
  "key20": "zzeh95mxUmTQJFgaZq43V87HYwM8CxWCcHpzYCECfQzuqEuZbiag3bLhXnbn2otHRWcc5ihiH7kXDzpTyPbMXLw",
  "key21": "2SByLMvxhPjqzxzaebCwewBHX9Ns1RbrvEAN8kdymaxt4qkBU7RMKH8GsKfPrki5pQoc4Linzf2JHU25Je36U8Xh",
  "key22": "3QJ3mLnpvYCfWXTxdeD3UJGJrS64bXKogDKEZeiKMGo6ES2dcB3EY4Rv4QoR4nWUvBexFjZQGTi173GFZyyrgZVs",
  "key23": "67mWVepttoEvGhgJK47ByJs3YAENWq33Ejid19DgPFotDJFPiurjX4gFXSw324zd3eGsg79R2T97EKUFHKC6nuiP",
  "key24": "ELhhcHvuk1WTf7rkJiZpvBN3thTdrDys7kv7VharniUE5E248EVa1SBnPmu8ZeaUVBypm4andeEHYtX9CpTpPC8",
  "key25": "4yV7bSQWuz8vs9FkoyHVsXydgCjihT1oGMQuAv75cxVZqwapUa5FyWaXDfQ53BrkUEYRPFq6PE4SUqR1EnZyYMDW",
  "key26": "hmAoxy21TmN3xMAkzN1gwkYiWsirZKSUcDFDArEQzKRf6TAuDuFkgU6BxEGr3jTRcWHresQzMR8RZhHe8qgUdua"
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
