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
    "23uucB3aCYRVfdEU3pB7TCawbbmqrNNEwPLJFomQEZvpgxK9dCAYooshAih3Z4EquzuTLf6xtK69qQ7MotkCbQ4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHjRdNjQLbBKFiVZ3nueJ6YSRVssR221vrGvRb4a9Nyzh25neqweQSyr1x8qFXNkovnCMu7JG7Cp9HyjPeg2EF4",
  "key1": "4p1diXbpFXgy42o9RZY2NwgapXoFcBM1V7QkJSoGVuyQJD92wwCe1ntvVnCzPnRo5jpMGUae8hwrjSKwuFzGUdcV",
  "key2": "3fPkfDwVEa79C17Xyd51hvyMUDAZG73DSF9TNZe4DLxUHq5t65KdKfpX8KhwNkDMkaDSY1AV6kF2qruNXSruxEbp",
  "key3": "4ff3AcAUHhjrWP39Jv5FNYjo59jBmEA9FT6gbgEHgPWWumo66QYvomqrtbAePZj3HmijvZTshjtSdxtgftyzyrpA",
  "key4": "3bo7Wwgsc6hbT4saYFFZSQ4p43KbkvrQdkaFCU2fVX6UDVvtLAwUDVmDc494hVasuV3CWCtp9DRxgCAAggfbWLri",
  "key5": "5cSx1oxE3X4WG37WP6XTCdFPzH9PsfbmCwvMvCVqeT8jkQamvWvz1jMwScQPcuEa5mVSdUhCRVWcLtRQjZjoMw6P",
  "key6": "RsVDJf5UHK7aLkUo17wE8Sgza8CmLYyR7L1txpJCJT1rBPfgzxSGfyFaH1wXSGM62haXfx4gtVbfb7DrnvLjwq1",
  "key7": "jCYkL1iLUjT6YnwhAf882Kf8vaMiNfztVRnAMVMU4L2xmdQxiu1dbFyjzdD8PtyfaSHDgrWZf7KM5fp7LvMBZJm",
  "key8": "3u8phqRADsMs4yP82AaQdnadeUUD45miSDEWzE3s5V7dmnsYuxhj8RDBXmLfJwLg2GhQzRf4yUbDzbPztWSzUL5x",
  "key9": "3hyo4FcvwM1Xs5wYyDMU8QP2rwSNEWUJCQ3Fd4cZJcpZYUz6gkB23JWKbSJwFK1V3Ji7rHojqdpreRcPx6Z6hLgY",
  "key10": "2SR1ryNcNVsNTP2GXQioqRWdfHRC3fJQfq5FyZ4LjCbJXVHxhhERXE1LWBLeYenBQ2HC8bpCStgdyt8R1UrQfoWk",
  "key11": "4ype15RJAgWSVeRP83YwU8JLoDcPFCJEJJnG1nSaEXu6G9o5NEmzN6BVV1FM63EX1ktas9PuyNUPKja5crZfdhS3",
  "key12": "4YTnAEM3GS7cWxtiXquAYfr7LeyXRSLGrJunuxniiNd5C9t9yBG9zXsVChK6jFRWu1hqmBvh3MDMjtpsY9kQrBJY",
  "key13": "5WGqv97AaTFEAksRfLKPDC4nkJsZRf9EnQTKSEtsUtrsjAfzz2nFDFgxA76PjfBvJVVKxiUss7f1P6K3TgytJAL5",
  "key14": "48hqzgwkmhyvsjsLQ6SDdj5pHDkM7kxD59PUF84t3MHe42LAAySNCryEPPaH1r4kcpn13mWsTv3kKV63rNJMiRy6",
  "key15": "yGTtTjPaVooyHiYMc61T6TF8BK93Yx6THEKsn1ba9W85gDv7yDf6ufGsF3MLDkvpcw5zFtjUZ6bGmBTcHxhcFBC",
  "key16": "29vxW5JKp51ZeEKAyfpon5TAU5nakB3wxNhBVBp1vyFLJfd5coRnzhkAzxaR1sc119475xwAGRDq2rJRV4e4YC9L",
  "key17": "57FfVTtDMmUvcjhVbpEHtrrACS3MsDo5yYriP11ZWHqeXjNVxxe7HtkfYurvcTxi4cbMj22Z1VsYaKrZqUH46iGw",
  "key18": "2e69KjtKrtcN4e2U7HJk3PWaX658CNHxTkJGioSDY38f67E6xE8f7FdXKQKjit69LmGDR1SuXahm9wLT1bzitDfA",
  "key19": "3WZqNZhqCpCtZEvuLNVrREX4Tw18eeH12YXyZVLNVGHSK5J4UDYSsGtWnLzAWSXdFyuqSCaHpfSQFCeQX63whibU",
  "key20": "5ywxscH5NSzBzE4vVQegyc3jmm7CPHtowqNz7QD4T3p9Qpaqw2AXLGJB2XM8d38b7hKoixBx75XZgWP9TFTcS5rv",
  "key21": "3XE4swh61iNHKnCViLMABYV5PqH9J7woPMC5dXWSha8rnUj1jg3wzW5yLEu2KCapkvcfouGmjqWjkwwQbzQaDNi7",
  "key22": "JGMLKtZcY8M2rXhUezmmWbX2PeZ67N7g6CZ2kKcc2VuCykAFfnHwqtEjc95qfp7yDhBWBGY9njmnrjBwVidoQkd",
  "key23": "3CEdb9747iNNz5W7KkSDN8Tr9fsDh3dga5sRxdfQ5ese7v5JVkTJ4rhQvwx189cPb552RBgP4SeYHTU7RxLpfs3h",
  "key24": "322ovYmZEPmrRjsytJ55m17aCidvc1qX9eX19Rneiuppy755pUFKBM8PavMqVMeWcbAibr5e7PTwqC2fkfeAVHea",
  "key25": "2LR7qkrfwZVqFTu7pW2z3CzWACmXyg81WDr6rDLqSW276jyvVXsCjbjYuKBmL12SMZgQwdfKf7wABtuvP65g3Q4r",
  "key26": "3T1GCdJKXoEest1Gqhyoe7cKGhwhVwUjBdK9WMM2HNiA4dFkxsBNV2WDunRsMw9VD6wuM6E3g4McipxU1Sm3runm"
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
