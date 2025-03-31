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
    "5BeYzzAdQs5YKtERhR5w4d6AjSspSUP2g9W6WrZy8DmLswNTCcabQxE2dNM3uAvpVMUnLm7f7eqQH73bnFPa3LGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PgZ9Z96F4muydUBFoahMyh4aqAXHPkSkCfcMGkfsbzKYYTEhRiwQWoTwvpf4uSyN48FNezHf1DQsaudLiFxWUG",
  "key1": "2oqLsxpJ8tEpHNDobHPepHjbfCwMXF73FvhrgsgyHKpbTsokLDYPGPgCFJgWrZGepgUK6zArDTmpq8UjtVtJc1jD",
  "key2": "5DNBZXcdLCjKed3LaawUeHFb2S3sq8xeK2VSwnxxX4dweZTEyC4wdK2wMfu62SwaFr1L4TNtuPusThCBPCqkBiVb",
  "key3": "EydvXjUTq4FZS5MNxUTy4rMbQtdPG3vjuiXRY373SCy5Ho5o3r1tX3kAAgdmJM6AByBuxMKmZ9fTYip7mYkDhdw",
  "key4": "3yipE2cGvmGFtn4FmnHnSMpquSYV3i9VjdRwK6mP19BdcocbigMPDNg28gWd1qam6GcgcTEL1uqSruH4Yai8qyx6",
  "key5": "21dAtXgiV6ZkqSjiHQDBPbpAL2Lq3mJ9VvNQv3tZe58eCAXhWLqwknjWbK9gwDJie4SEzN8Tb2HabbwqeNgJnYuV",
  "key6": "4JSQr3bDXeAjAfcHhHaimZhK2jnmmiCgyWUWbK8bcE4SDJkQB5ezZWoWeAvpSf5m5sbwLxrJPiY5vG6oVoh5ShDE",
  "key7": "5zkyuvsQZbdnZPRtaC4GMEsdsfdrUCatXrinsHiBtmzVRpz8PCvm9Ubd1ftg7kMHwAvcTg4oUTveQDrhQtmt8Kg5",
  "key8": "YMjVaeq9rYCCaSKMiVdoohmp2QAvqMhM2FcQV7GV8Sup7zKQciNSz2hEXCMT5rwBbkofwnq7PJtnfJUY5shK7bF",
  "key9": "4Z6LdgtYs3FdeFdNB71wT9X1GsNuCwDSSUjxjAJoM8xgXLt5HdPavfscdGWJtTiTjZ6EEt5weZFPzFcjPjVHQGfm",
  "key10": "rkMwajn55Bg6bjfhzhwTDFhDwVTxjE7Ui3qGUYpkBsPByCY9JoKwb1yW6vcDcJKz54wZDYrgcyG97D1ks2e8RUW",
  "key11": "mpNaeYivipjdDhri3J61qH1GZ3KxAQ2hSdT1UvistfGqNcAeiyFhUrj157zhwdsbXyxNHzVLKT2ojhwrZNH37MN",
  "key12": "M3jTYjke8SqXjHnogAZiEngZ7eAGiAWoDGss5cFt6WS31LSZmnZCo4Eovc6FFLR1GQNkivi4QxwHH7LCekQsgY1",
  "key13": "G4QioKNLuKANvD8tozQDiRXrXV345mJZfRGwA1CFShfPkRvHyLwz8J5p4GykjxAksgkgZ1EY2PR2YBsoArPjQ26",
  "key14": "4snCRNf9t1sN9UTuNRkAzKWXCw5EcWnpKAdMUPT3AQ3VV1zbWK19MeY45WSN5cugrFQ6zu1vujMNw9hHSqCYRfLj",
  "key15": "X7CmsJMPR7ZFoPKrYFVpSpAdKiP4PbTEyh5xYEsqKNpJp5eot2UjFR1mZ5hoQtLJTXugSZj5DfFEXLar7kPbJgF",
  "key16": "5djPX3HjcQ1q14DVU5oeb2GHnN4fUikHVT6dPyWpYEJGAVzkqTYRiPa3TYXTTqBQApSdKXS27WTQnZorJjUgbiGz",
  "key17": "2wgpxYxZeL5JeUXtDiQX8EC7BA9mk8MWMFt7CNDjL4fcTzuV6tHD7cHdEPmeBdmskvPBHCuHmQG8ARW7KTApndaQ",
  "key18": "4QLxcsp6MnPGN2E3RmqveZYmHcADtha4gZzdiAqcjNc2fYeRBGkRWs3A5Fm25bZ8kcxhpi5zHR7hMRJP6u5Gk8e1",
  "key19": "49iktFqi1C4K8sSsbTaofThNDnwH7hEWNVycLTuLG7S4UQpeeZVKBBpTm9WwfxAeTosPhctXK1vnJ8Rm8h1A3xnU",
  "key20": "4Ut7YCU2d4gHcQ9Gjan2DpiAx561GReQqUM3zytumESmagounegTe92GdNYVVY915fLKWpv2J1RNJK1YGkJgTd6L",
  "key21": "2P1egoCu6KVwBfoQXyhnBhYxyQGhBiXsHmkdvFm7y9rx55AARD76ntU6h9Yfhrszr2V8isWpArhnmt2PFCvpyQyY",
  "key22": "3rpSnDix1h3DdRN5CY2Y6gT4AHVhhWbKJvSwcYCGEX7uiX3A9kQF1Y9chsZuxbouGAcAYKVP53FiHA37HnZrAZqy",
  "key23": "FogAQqHKdfV6JEjEXtvv7fFMA1T76tZ2riEjgtre6yTSokU8Annh7cuCXRxfhwcdEZWAeFLM2BT7SGaVUM7tLoi",
  "key24": "2iFJt2bChE2U7X6VfWfw1K6VK3f6HETBpv9SKna91BvXhbc7AmwsdhdqLe2yhLMzZpRGt4ir86ANvqMhG4AiqvDs",
  "key25": "3yYFFXZyEw8KkLbHcEjo5MibzU3LDNLk4Fp47wu73c9FdXoCmAuBxmY2xuwAVqPB1ynJnRefFmDLAnr79PNdEtuT",
  "key26": "YuFsZ1TVE5KoEA1jLfkxJseMCWuiSa8vWuJQPgT6LesVNQ31sxVjCvdmeYQPB5xmQydohAjVDo7DdEFW4RBj2qY",
  "key27": "5S4K89RPQPRxzFGaW85NAXeQENyUZvwL1MkzARDrDw4KYgqgKDMwUDLratQxcNtZxgE67StLDWSqSLqiAVBbpSou"
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
