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
    "3qxDzFCWTbftquLFRRgaNXvTLnEAkbUHYWFDnQfRA5NpG4de2ybRma66FNZKo1Pq8jJxpvkUKeSjtaBHQHrDsEAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4Sp3f9SQod3QaCi4k2tjTq2H9Tm5a88vpKKLC1p1AwSKfLaZpzRSK3ybfgKszAr4xTVJPnCq7XjGd2yMr7VRq8",
  "key1": "4pZ4YkdapRFRuZ2PCCnAHA4r2syNQVnpKhffNvUezACoSbEuPuXLPicSioigT9dJL3Sfx9hBKSGdZD4qe8Qtjanb",
  "key2": "QzLjAZmNK6aNTKMtGKnLLLSizuxktRD9LwCEV71Cm2LFDFdmQ5SALcaNaGyGgciMBq84HeLW5BNK2UNzDgu6rU7",
  "key3": "5WxQ8SuDAVVZpnkVZN1YP1CK6Ei5ZyYFZpu3wusDyU7PXPg3tHp6JN3HuUiEqKg6NxcbxzjXanbBfQ81qRmAKMCw",
  "key4": "5WqgbrANRNSQQhHLqV8AJJ2bZxGqtZLAzASTj8XqUjhiBX92ARAsvzz4zLCh1E4d4YyDCtEpbgpXYGqVGLpWRbGk",
  "key5": "k9VDE7sbK1SsthtQwsbtj9UR88d7yLAD5iRnRC3WNwsEUtfhvXfabMkw4kDZeA5m77aSx2VZqVYUk94Hdg2aKD3",
  "key6": "55frMaUsFvz8N17QfYQ83NnfrZyGFjm1LzRyh7uZxf84TZ1FQsns56LE8QhBP91vbLUp6vuXEXCVeiYoWNAMx6P6",
  "key7": "5HeY34LMZ7mRtQAfZs3hyie8TTadmPVsrVKYZiXryhFyc3dXVNGNKfDLxSrvXrDvnKNpq4oEFYmXFmzJk7p3rZpn",
  "key8": "nhvSgBWghyi1YyqMHCJcXj5BeiZdQfmFfV1R4Kiz88p3Dw7VQqgnwuSKQgLrMG77WY69zSJrjCHnTioBpCV2QVr",
  "key9": "3YiQ6dfELbLHswy7WTv1bKwsiGdwiiiDGjogMViu144RtHvZW9vrXUfASDTq6BKH72pUFvDYv2vP71EweQGmofZS",
  "key10": "BZxdyQ7JJy5622bTjX5VDuyETa3KHnfwfTo3ibtCSRUvNKnjGFFcJEXmsFjzJpuDo5TF6bM6rN7zwSuwvBbNPyW",
  "key11": "49WNVzgZFGBTKyFBwX5uRQzd6Uy6WPC28pkVehAsCpVUfHToLirLi8X1RBDdDzrc1KWhuzahGojq2FcxLnjpbwYj",
  "key12": "4GmYLh2iWPBr2Q334ssTXjvG9jN5K2akjpPufv8fFcjiDJZenj4sz9EBG5ewqfhsDoTg9hBsyu7nDPR5uo6bdr8U",
  "key13": "67YC2C2W9rtAQpUiFsyVHQnjCeVDMxqe4qYyv74EfjZ54nM9VqSzWWmd8nBSg5BpcJe5nsqnUAacrzh7SLfLm2hD",
  "key14": "3Lz3yXiJSZ6y7fNLcce4YrUaYrSgKjKockmTsuEYqcTX5YEKqUZPc2NaqLrpwHWBXBN9fVxkNRZ7EM6pkz2S9qxg",
  "key15": "4D4YvQxzHjjvQYto1R9kT29ZzFTFGWeksXQd86NifSZr1XLwnBUrJ4JC917nUD7cYgQMFrZWmQiKJ9Tu8fau6ePR",
  "key16": "dcrrfY1fBXPFPFHj1QsZ9F37xAFbyCdrj6vCGmeJLRYgY56t8oTizSfmK4f4mzDQXzfVGPvdkB6bZ4c8mwfNQta",
  "key17": "2yZ8T9aXZBd7DdAZxoiTbArxV9CN3XRVGCUN9NxfHdkrHTpkZ62m1Y6b8GgWGxhvU2qNgdzmT4zuB8tbmHBTnD4z",
  "key18": "CmnT5gFpRZWCm1kwFhUB3yRAhoUXSLxxyjeewqUsnVkyQiNPNTBjm7ZUTUnxotru3daqwXozqCkFszmktzWw4i4",
  "key19": "3wvcCTJEHBFPAj8jeFgPZXJ1EDgBYkMYcXk5hSEFnaYo4itE5xhtoiAz2FWCe7tCBt6MFbUXk8eeStcUqtw3pEPX",
  "key20": "2NGyqXvyv9htve4qdZVApy2nDexMRYYyVAp6PACo6YDKA6oNEQfWPbueZbv1tqRLCZGFFxcWC8tfLEF5zC3kCcM5",
  "key21": "31DLkEU8QjahRhoczNww5gEP2DMJcEX8NCXXYoRzHRw7W5dhQni2j8qAH2VW6QMsPknPrNyQPHm8tG9k6jQ5H3qo",
  "key22": "9K98XUxRhGP5HWvcPVUAQbvZ5sBugJJWvEHiDZEtkqsFpfXJxSs9yod85MW3DsuDeRfmoche7r6f2hoK5uYr8Ze",
  "key23": "3zyv9zGsSVZEasAewSv1Y2mzDXRRVfGXXAknvzmJAZ4BMWPexjr71Bdue5LoDPGAaTC5iCEpVL3twFGdTsp82UwR",
  "key24": "3ipZmbagCsY77kXfFModa9mq1ugsyCdHmbMr824s4Eceoi8gsnrdokH5Hfpy4o6sobRZxi6SHTueRVYD7rkQ9qsx",
  "key25": "23STM544umkT1sgK8rsKFDXVhHLfeP7X2JTbZNTXSbTzoVBCF35caW81nZLYwZWuAbZmc7rTTdeojUJAGuY3SrBp",
  "key26": "58ChDrcMv118ZumsprtG5ruVJdNq5Z6Amr8mJYsL5Qt46jS5Ram1S4qFtL2cx98tVpCf53XtJ9skvfH93cdVbP9n",
  "key27": "29r5MKubdeffhmmNkKzgSUcdcBAhKr11vEqvdfwUp6A7QjexekTwWLs2oE4r4sMzg5vJSVx9zfigZBsoM14vEANb"
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
