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
    "3vv6Nuqqp7jV8hev5XktGJBkCiViHzRpStfagHCmgW5FU8Svj2ttisLCnkCagN1tTv2NVUrvz52Q528L64uKuyXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LoqT9NtHnMZBStK99pb3qupshhej3HrkmnGqLSXTPt8DDg3NuyR4JxAX9T9gGa7LGDQLjUzXVb3MDTwvoKQkb1v",
  "key1": "2ip5jpbBUfiP72ZFhcvtMMAiH3dXUVfJJkRMqRWtjzrSpvYuYY4hu5PFbKZpcLnn2SZwciHvSMziZn7J6Ak2W6HY",
  "key2": "4nRJUCi9x6sXZmrNPXND7JR5Y2kRWzMLV7c7XKxpTuADce5rGnC7RrCcARn2cRyQNfGe1UmFpi9PVVLC9qm57mnV",
  "key3": "3xUmhgFpMpxBmjo4EDhea5kXn3CiSyCCeRu92D3i6nVvhp65TbNb185JNr8s6o4duNvh7n9cfyVLzqc3gFXEXWa",
  "key4": "5a8qQQakKuK1LJYRgwii8Edu4TPbSGrSW8hLwKCLyXegc5ZEicJheHe35pVaYxK7vU4ftBJSuQYuv1721qiXVEge",
  "key5": "hZyzJ1ZALuBmDZMMuDyW9Xns2ppCxHL36g4eP3YGmLQmkVauw8393xtxh8HPgLSe8GByosuSX1CxqNZT3bjjjnv",
  "key6": "2s2EnfBoBAecdUnsRNNZSTrxLeaVxoFMFDaAcm6F5qiZBesaUsWgFL3gnrzPr8nPFhrMvPijeXJgXrrjZo1EeAus",
  "key7": "3Js72edNQ1sQ5RRk6hacwrP5P8GF2bpNP11ZKpvEwJ6Xmv6JdXMYvFkt3i9kHbYoG7RFSzerUvq1tMKB4yN98JYu",
  "key8": "58nhH4yikcSrcUAwrdDPFvB85KUcHJfqcUd8Q4KnRBRuiKJURhQ78A2cRy1u2rnmYWLWi6i8JAsT81E6mt5hQ3Jm",
  "key9": "3R1rpoCWdxRSXVE6FgCiKoR7KWjJs6WPzNfKbdG2Y7D6epTcBvEF5Jcf1LJ334tpp5BqLB6Qpv4cLnT6wuvgEWwG",
  "key10": "3ivLaSgkJArzQRhMWdAALmoR6qq8G32MPPVVWsXPjzUT7UEX9wGnwNLiPpCexDqTypn1cTQPKVNPYKnHv5Nrbh7U",
  "key11": "MAeDRuRfwtcsUVRxbfkD4Xexodufrna1BFSGzzUo5HoJJVTsrHaVvQrYmF7HTwUffnmWTXu7ayoNevZ7ArrrYUK",
  "key12": "5WGm1ThX5jhya8di8c3A1f51ScEeQri61389D46frjiiFVWzwjK3uUgFKbUTCAiePxTkkhK6YPWPdLSW6fzfQXWH",
  "key13": "2KTYbmhRBcrNpPsc9iUm5UmcJtvSLaqRGjf3GxUiFaqecrmxj8RYTmhsmvqRGE2S2CFAo4DWwFUj2mfnJ296QSDW",
  "key14": "UnqEax5TRBeW4asCRaF59tTk45WVKJ9KsVLHfNJ4JLseNScwEubvWSC89k5bp9KBR6Ywtm1J2GdHjhcS1yJh7BB",
  "key15": "vntjYhuterbTVtWaiVovGiBoDQn57A5s2iv9tg7kSxVkQWq88PYmKeLptVa5Z31ynMYB9ymqdrazMyUHtDhqLRq",
  "key16": "4rybe3LK2SdyQccBzEmb8XeY4dSLMD3R8BNBNzGwmqGSoMrHA8veVHpnTryJ2WRR4Pas9iXxZEczmcC8sdbB5sHr",
  "key17": "3ceWV86dkNWugRefRFwU1ivT6JbmRbpcdeVtqpdfKXLtZnbbn3CGcKXrbDRPjxHxpFawjeuhS4zimt2zJhwk97FT",
  "key18": "4Ygv7KGQEAGpnFAi7H5mCyrVX9MdXUExY9LYBZC5QcaLvMTTsQdnqHS7Jg1zeQBTQfdc5BSMyTBRre8SG6hSnSkU",
  "key19": "356naJJdnZLdhVRd7FnWDZR1DDUfychuDXom289LPqQ6Vi3WmRZcUkKp1ALiBxhSZGD1dZh45ijuxpaP43TfDLVE",
  "key20": "39E9HoVUYavjpPhMnjP3KTw5j6orTyc8eirDpzhjaFWDiGqNbzJM2bX6CZNtf5PrcTWDEFGw6xr33QF2ZZ4Ntpt6",
  "key21": "3inkxPM8fnEqzVbUwCvyeNmeot2ab7Lvtav8JiAf79PuniXWYCLVxJKJHp8u3kw4ScG2vhjRDuY4w9vSZi88TJ63",
  "key22": "5411joKMRaY3cuwurT3ipnpSKZCyS9mPKSChL4ojiyUEohJ7znAxqmEWgrzhMa9Fbyaayg7Xugsn5QTss3hEGuHa",
  "key23": "4ZonGp3NufPpXvV8g6f67WG84NYkybh4j21VNTtPTHK2Jie6euFi3edVmXQSxv1r2ZDcTWL6Y9n2a2CjT27epMyQ",
  "key24": "4Mv2URZXNCD7rq7ZT5y8PiKBrkXXfrqAEw4UH4gcf3MVpZtrgQgMQBwxSzXRBhh5KMa6FMq18k3e9eqVDsvCDYcv"
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
