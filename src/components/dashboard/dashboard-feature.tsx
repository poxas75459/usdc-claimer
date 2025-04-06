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
    "38mxdtyZawfPVY8YpSrwgpw1HRi2QzMjPBJNNgo6aYquK1UHRmbE64uFL2d6EomN5Ni8TP72Uvu6ELXVd7xPuiT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RufCbdPMQ4PutH4Cx6uSFhoYVVYzrxs4jV9PyxKBc68fR4ZrRskqmrBLr1k2TzgnvqYfaoTX2zAMSKDWGncMJMx",
  "key1": "rBD9CDThcUd52FkunCsaPCkUXGrdcfgDshdzxXtVCmnAatd5d7EoZjZwE1Tk4Hg49CPR99ed6bfTrzHXmJD8GDH",
  "key2": "3gSTiMycWf6nw17e4X3PuWDNGshWqvvbgSHmEfV24Jquv1ZyLhxupBjqZTHwXVBnvkQBrHPuzs7zXrRWpka3GrCV",
  "key3": "4XY5Scbuu4MNmnstxwf95psE6Bm8Pu6JPQukWNGqYXccBdMLcEzdaBuYRcPjQd9xBaDhZ29z1fxxAoEYbcTANcFX",
  "key4": "5nFUcFo5qSsnYmp8RCbxB4vcauqjSJy5D22wApnTUCoG7vXggJ4CC8qpAQvLG3dGMgo5FZEf3sZhb9uUkZnzEvJM",
  "key5": "2mJ3ZvVdH7QzGw1yorWXNc9dzJ6Xfe5zBugLj7kW7scae5YpKxtNfcbGurzbVtormmgEfiF49tS2mppEXZvq82Z8",
  "key6": "442WL9qZJJGPBKeGurT7T3Vnw3ZdJ9Jti6NE5551Ru7GX8k2zW8mneBCDJhPkpiZe3wTuEdfE3xqpiUisHDdD4QP",
  "key7": "22VLzdHWKG1hGKmPjAandyf4rYcJjWu9sRhRutPGpibdvkyPKATdi5aHfmszJj8jcMBbtFXHwZXqAmbSAzrujmWg",
  "key8": "AupRPqWRPMB5x4ozTLoY6TCbhpVjzPfFXfG8FsGY4iFoGHHcA3bC39jv7BLVBnxoEsvm9SLa3edHvkqUGPSVRcn",
  "key9": "22j8kLcUb6x6kbSa88yS1aouHqwiVm37Y5eM7qatzNQuCVt26kyZsZPXTGtreiwNvVyhwvSKgrs8N8pnsDBKdri2",
  "key10": "kEmTQqSo39xtSJMHsYhu65oLunZYsRh3M9czZ6Yq3stxMnztSBPrhR5fXNPuMYTF67qB1SvcPLUNbeRBAaxpbNx",
  "key11": "474pDRP4yWyL8tLqxtpQV3giLUDcZvhfYnNADVZmxYCngr8dbYS6wkt4Cqze5irGspPdAxxvpYhDoYVHxvPoN2mw",
  "key12": "4Ju2Nw4NYeXaaByDLAPJ7qMALHNq2zKJk58V4RwE2dboeCeJVRdyhGALJNYtGp3ojy62fmL8txhdxmvxxJx9TCHg",
  "key13": "3BBQssS8yVAiGknXmmgqBgzR2mg23zG1mpVFokjjhMbzwFWrjELHocAkhE7bmSgUt3gu7qdoJCp2bjqyWjnYiQeU",
  "key14": "2ekPWQ3i5JyakTV1kyF6WVHqZWRCks7wtvduuT9SjkE8ziTo4Xj9SH49r1dhtgQwxadrXdKox7DgdLuh4wjcNmmb",
  "key15": "4fE6ppWBU8rmprrkBRCzptkaP9BUZQ5KrUuqSDwtsvkwFVRPwFkbfn8n6RnumiXnQ84R9KE3VWjkiXfTnSgLTKPD",
  "key16": "4bxYGsc3uTedRRHG6fFevePaERweRyLJjoyp6kBYUb5cBpw5aBVHxPBBnuWEtMMiUrCy1ZnmpLK3RgvPzpPohLTa",
  "key17": "5Yb3f4SUe9oPGXFMJEQejfXYG9P76Zb2fK2xYxyj7BjQjnNETPeGzEM8ysB7jSnsZR2GCrxdCb1xWfeSMvaRAWhn",
  "key18": "YA6SgkVtKtV8XZQqMCZFxt4jCwyvSxmuV3NcfpbcSARt2Jc49PDh5YRHnkjm47RPQrV4uxJQXu4Tro7GKdRZjeb",
  "key19": "2k7v3cpwhvQ1XWg3GWYwuDAV9CzoyoDFXxNKWsRVQfuEqMVgZ2xDZdegUAGijBiSPMK91QVDcP66KYs4pLauPxxx",
  "key20": "3gCU4XtY6UVFgCdDoLBFQpzK7JMMknoGxjmNQae1rmQCpCyd9TYXHBceoi5SjeTd6GbRW2G5vHE23FFKcFDYL6ky",
  "key21": "63CUR5ER5vB98yFuo4zVyL5DASLrYJ9fABpdTpBjPnfWvQoNpdpThWhKCTfvEBv9kwz6auEAzjxgVJ2QTwZXZchY",
  "key22": "fK34sAxr7ppf1YnJLgNUXXvDqauFFzsotonPFjVe7dgorDh6HD4PwnmYACFqRovq36jfsxQ83Mnb4BF6gYprx6e",
  "key23": "6x6GSjVWxicqN6qwH6GFMRLTEUrp5E6XzaHHhMkgSpPdtEzckhba6zuqtbaCDJFgFW3mY2WDGoYMR9FA6MVThrw",
  "key24": "VApSzfCysLE1JsycPbt6vbsq13dbTerdveZcgjkmbuCwr2bbvta93NRQaSse5VKT3r4xczPBUGEwP1nisRE9EXu",
  "key25": "2LVGnUrEzTqGLfdxXzYg8mQUhU8XRc1qHbnNFTbPeKFjYVyjkbVnBu4zC562dKUhrXBYeuknRwgTToUSbRsawqga",
  "key26": "5rmnYrxVQCPXDfap4WdoiNMrB4s6GeydScuGr3MnoQMBPs7JXww2z2CU2vnYbkXa2uCqRNFLKhKfk7EHeWgnQLsq",
  "key27": "57MR3oMgxMfasD48g8EDToRXxhT6wyuhVweP5pYA1kTmmcDEzkbtbLQ6Zx9uMZjx8MKeRsa5MEBhEgpE4VXekFGK",
  "key28": "51eMW6E1zW5TMV26FbFQ1cZT7MkRF3axaQsYWeFExG3x5Wdfttg5cQGujGm1mb73WTFFsNW99ux3i8RNBqgZMb3y",
  "key29": "VSwkSKj3oLw7xUWCM5zYNJ96tFXWApKyXGqiZPLy9qTP51wHBJnRkvTqNQjzFudFPeiJe7w2REGA2KtnEgzXEzW",
  "key30": "44DMJwt6LaaYaQQZMXczM8NNDTWixMGD6tXXzMKmtwc3YAWdHQyupXmW3obqjGTkTmH9EDaj5TaVRUiwDcuG6k5d",
  "key31": "4g9jJSRDieWkgMBZgTsn2xs68N8fLwKqYzUf11hiefEWa1uhcayndQjgP6zhppJyUA9u3nt6GwumfUHJr6Ttomqp",
  "key32": "ZA76m4g9Sm7cMhVe6b6qTUSXs4EBP58HAtyNRtNvSfFvnyS6AkmwpnF1bfZjWFk6DhwUaPeURQJeKkVWNBHgQpV",
  "key33": "3YcNo6iWD25iraooSzKZdTSES18V4aHhQQ2YfotyWpBLFst1jHBdzmQtUJ7pKtsuKeZF3eRdM3esaaYRocFv43TL",
  "key34": "2syqhZhFa41UnhnTHiyjAcPcpNxhZeFA3JvocX89KmfokrfPvABEvkX9iLT5VcfdqKYqf1sGWvEgMd6GkyssfZia",
  "key35": "3dqDPexJg71smUes3ey6ULRfWdN6coJrWbuZcyHDHQorA2P3mKXebfkBxCXdt7qNnsSF7sE7ssnfYMP2JdeSRRQ3"
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
