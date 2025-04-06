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
    "5czi7rDbGk448DRfiZ6PrjsupLbAta8H32msPqcLLwFLo96gpVecEGynp15mxU22V583Qhz6Xp14yqKRo7EoH6ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TiyWamxG5aRbiBYWAX85SatcC9Uzih4QcnqPCx2PKDnJGYdCmQg6JmEKqS4GYv1zmaDMAcAHDkDXF25NV1STacn",
  "key1": "5uAEqSieU8Ukg4yocV8eY8YnG4oXyfLP6syqPivgEwTh2J4aqQCs1RkErSD6uUMMyhAyCXT32ehTecEqsZHmkgRK",
  "key2": "nEdG5iHrLfpQRDBzJNMSnpUWC2erAErsPCXR4NxcDVC6pVoSNZrksxGXfgwcJ6Hag8rjexkkj9gSKSta2ZuuWuF",
  "key3": "53pPHptSmumL8fJ1hP1bCWWrhxjNGhFL5Mcoumhrkm93pJiLAdkJmZSEaExX9KbY8FG8LfWL2DYJBDUthEfXTTt1",
  "key4": "3xBH3LWdYpX5NUcpCpBNne7MvRso5QbNARXaFC8n6TFjNrP49wkYgh2PNGm2AVstGEYoci18hXC5YZZrefUnN7xh",
  "key5": "KbED3e7m1o6Td7CouopofisHyopgkSVfk4jCZVRBGnjrxCyVCFfK2DcQaj572hbzxaSWx3qfxjwkZ7PywwpijK5",
  "key6": "t4ywpcggAKtvLt8dynfz8heRTEMv7x9qNFKGwRxtpjN5j5jmbQBCXLB811eZJYJqg85gfptp5CPR1NHe8NrNMzo",
  "key7": "3qCem2Pp2zsbsPxhCYrwqVrnLcYqtvMKCSEoC52UKUYJ3GWqnnSwNm3BZYqUCSbtDB84SVaH6rn62RePfCoGyxgE",
  "key8": "51yB6eP6eyB8aTUFBd3xEwD7eAnP5Uo9jV6DRRfZDQSEimpDmLYZSmaFbDpjxw6EU7MgWSs8Dyr7UwWV2vgi7UZP",
  "key9": "25j5tUW1vMtzcWK1Dy8wc2zjY1GuApD8dbp1zHRhVK69ZTT5cUNKSJkcAvPPqr9tiJfh2GXbGDNvdj93bT1KeuY5",
  "key10": "5q31utz4XNGhSp48ydxx5fYBX4NHhgWAJYeW3qN9Ee4pshRx6NyVabJDQ1ainEykZUnmDkBX44X4bCWSSXEpdMZ4",
  "key11": "92gy95mM7F4drnEvYmSDZUBTf1HWGeQa7saeH7NBNsPcy7N1noi9o55qBiLRn7iwZs3w1hWsR5boAxXKGWF5gjh",
  "key12": "sKA7fLyXMeFuecr2RWCxnmGq1iFr7PShmvUMvg66cG8XLWrLxcws94kVd6ax26f3JZXutNNALSqDAETLH7zkpgQ",
  "key13": "63RCV819KYT6PxppdhWiZ2PMKFjut8BLzgbg9BGtfAVGLpi4FSnTXgUy4XqVvo5HFcxfmjR1NHP7ictwAEVrC3JG",
  "key14": "4yhUUKZBsdhLny9XoxmSEjt9pjKJjov5Xqsy7R5oaP9dZaeTRDRbEG9nbWFZuc3T8gRaFk9SbiyinKnzNi5qedjA",
  "key15": "2vhVeqxFFk6gUpzUPQSpxRnjiYZ8MQTkiC5gZNwa5uKpDHVfKyU6Rmge2VcSDgGLENPv8Rj3CN1MyP1dEcztrmp1",
  "key16": "4trfFsZ3MkSFNYaUi4PuDsrnYqyUKVp5EXGRBn7abCBUHZDfeLc8RRGF6WUMLt9dsMdyKhZFvVThUxRQQg4w7PBZ",
  "key17": "ZjZ6iHnofQisBYs85Be99GSgAguKHEFo1by6GLMpcqGd9TqPYKqk1AngvUrKVWiP1sXAduo1MKf4bG1adXLnNc8",
  "key18": "8jJcamWpngUhMeLFvj1XjYgpHyVmpubLqeH4spTf6mgnwx8L5Mh8WkhrRdoNpeJPX7wr4XBaysMp1Aj46fCsNKj",
  "key19": "3fHjUh5n7H1auHkyGMojrepmePPNwaZ9zyNct5yoSReuoeQZSvRMVGkf6ZD3AhwGyQqVXPLp7Rj2bX36kfasRqMf",
  "key20": "2vsbmRVqqH7P455tqxu9McQ52uq8XQGPGbi6b1qrCwsPGePz4nhMf51MR7sho2eth5nhEKEH95bxW8Njyh2GW1yU",
  "key21": "GEEzHa3tLLxJLQKrCnrghxFWBLSf3186zonyLmMcrspE1nPF8mocxUD6QcQvcuZRwwHi3gDgWESP7Rx3UTpx5wW",
  "key22": "XK9v6sotbZN22h2CdBGyEe3r2cxwNAzEk2eKQqmooPrK4aKL1Dn2RQddJKsNmJeA7PJpow8ghVA1bGyXvQT5NLc",
  "key23": "5gELC3nrR3JzJJep9pxdXcorbXjc6cWHY4k8aPVoZttmoTL26NexCxbWPTKyUCYzRzXGVCSEgUmeQUKxyy4oG6xj",
  "key24": "3UoFvpXCD2YSc1cuqEhrJA5pkqk1CTvYYLv69zdb31PaRX3vFPAssmhhi7bUjUyhsDR5LdaPF2WqW39a7HXAbfp2"
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
