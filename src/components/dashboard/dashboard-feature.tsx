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
    "XF5srkhXE2vaN43XdZJ6MD6LcL437GKTYs2AQy6EkYnZDFRLawtn62XNH65X9CRjrHKs2JGxe125gLsk7zUrkKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZ9TxNyau1gGUcTmASTGwks8kR2yLSFW2QmZ8jnRVktzMx8UcZzrYmsMJNrnHoizfMBk8wGKtqGr4dacMJJBgbA",
  "key1": "2QCXw2aZ52RKfY5NeTZqx6myCQzdXKcgEgSFMSjK8CSbw55KC8Y5mXuMJ1D18bG7mxWrQPGdN2Ff733CikGMyf1E",
  "key2": "3biV1zacz516VX7jAPSoSgdDEDiA56AuAsGUEjEGt6Ab6j66WR1Jyd9yfwtfPC1aLBLyQeYGzTVu4vpuVxzCWcEG",
  "key3": "5nKCj8rqcYA6CfP5iPRaw39vayQ2Weo1MWW1tdLHiNPBmw8fmkFTyQScdK3DZcX2qNGcjstvD5vGgydqkKGJp5nM",
  "key4": "4qG8V9vfwjEhjec8Mp8UtUVafwvxn8xefak5PHvwkCskJrjwV95SDPrj7GmvAXXeGbSYKbgYwFNpbmW1K7ZfdjNj",
  "key5": "3mpuReAXThe7ywhmpw1Qa22i6PjsnNxsJ66BvykG2PBGit4SMUQBeearANGqBJJrrPgjuc4qUkpMq1kV2kuRKNW8",
  "key6": "PVpy3XZsxQzvkLhAkU7VkGP3EjmFXq5XQKkYk1Ay4rPuJc6ZqQYyEbA2wJiwsdJD75ZDi32tFRT4Y881g8dgWNh",
  "key7": "3YAQ6qzUHgfU5Z4AXtoeo65vWHV5UDyb7gp7KDyNax2EAsnZs3tASitfRkvmKqzSFaUwfGRN2iaxJ3PyWHsAWjMJ",
  "key8": "4fPetFrknatTkiCh6WfL4hyZcyASFkoVb94pVjYjkC5JJKh81CTzcYeNwkuLL5V4ZWfFrM5x8PF5rsP9YMTokC5n",
  "key9": "ybJEVKC8GVtWfmYcKqoZ3Vo7RDriFxUJqqVMkh3xDex96JgEVejqQJ2mkMnBwA1pdCYLhcBvEGtSLdFZ9fPBQej",
  "key10": "3hQRaNbQ6GtW3LJSkCzEqe2LihvzHqL2YpdZ5b7rzhg4LDyuFELSFnjJuhsg5WP8M7Lkkmx4PteE2zjtwhi2AJ3t",
  "key11": "4pxhRzqGrEqhwZRGizvWAK36kNyor6h8G8ub7nHnu7j18n821YpQ2TdLUrGHLw1TX3A8QqDZYbJgUKnbckTFr7Ej",
  "key12": "5H7ytNDnKchpYjjw7Vowp7oWd7Pgo55EKPfJwMpEmqFkAv845WEaXcAaSSma9C3gTTCSRUAZXrVYPuvTThwBWTCV",
  "key13": "41MKPVzHcURiSgXbwNczF8kGHCXjZJ1HbqfUeNVyK9yAu5SEGp6FFG99ZLRU4Lp1vVJ34zzqaFCHMeGSPWR4V5tQ",
  "key14": "3XHPWii6bUGKDUvJ7M9aC9JmYwh9azQdtT5NZPkPBcpQNy8UG1cBXbBrJbAmNKXCm1f9nonBNCComPrbcFgiHyBp",
  "key15": "3UfDCyzxMFHkRQHuDzSkVRZHsxwBfczQq5zSdgUJnKSVBm8W2a3JTKBS6mNKHUb9eY2rxfWa8RZxafuMhrgwQrvP",
  "key16": "4YRRk8485L5XHatR2pYDN3dmH5SwKtvDEWJ948q4ZxzxNzfr3DWjtDfgmpnDpZEMx7FhBG8xN5d6NFCUCsoY4wCh",
  "key17": "4rG9gFvUwwduL6BJAg86GPjBKk4kUcyJYLv7xT6tNEWbAtQETkmbFf9Gw3ExvPCXXc7kQK1DkRt7Zx4gQfUFR6Xy",
  "key18": "oD9939mjAptzU8Zgxi2RSD72QxByRPZq1FN9V2MoxWQvPCPVZr6UiUiAMZNJv4k3XedmmJ6bJ1aL1CeTTzyzfqi",
  "key19": "5t1feJRfXcGcMDreS4HjubRuvd7hsQRWETarKLrcmsXaPbuoykyq7Qc2ETdqTxiQppCHK38pJWzJoszay45TT6kP",
  "key20": "5mGwE8qunfuJY7HB3USwXyxhYiwAScmZTCUArLXbtmdgqHzgyVoyjQ9SdSwnFJMkCohCToAFqSXjheQoKrMwnZR8",
  "key21": "2VGKXB8H3igYSYVtjXMtSeDi3YJDtXTNWC3gB3W54KsHXWomBzxxm6B3r6E1YKgZ6aEKHz3wUAwu7rQQcKS1cuHc",
  "key22": "5LGQDyqKRU65dFBJ4fY1uf6DLNXSxaUAvvsZ6WfgCy5zsDbfYjVjr7Zdio1XiVdefwnaZwxLV2S3gLbEVp3dRiK1",
  "key23": "4skgk1ekwmdnLT3Qf2UjL1VrHTqhF7ohM5dccRMZSYbKkRqho4TQnrizE8dAipjRYw6XbYXBmbAXVHk1vvoh7StD",
  "key24": "2MJgVLsxZVWXZVz4BGgHZ34aB1VdNt3WojGdqtFHN26s9k8mo6EEC8Qp6TcnYxTjX2EkzUNtKKbgCkMaczs85NyX",
  "key25": "29TUMf1yFRNmsQ38JnanbKEC5KeDavMcN8WrFxNPgHdfUsNJVJqtJw5Sn5FhjngeNpbVkyQtDJmejsmMpKt73cyd",
  "key26": "4RLuxo8bNSb2eANhiawCNyqWw4VGKKrtN6zEGBNjRL9Sg45io23vJSyA1jiKz6UFLHCAw8uH5YxLatdCKd6dRSV5",
  "key27": "3E5ZDCD7SJXS5MzTTVrDWStyQ4QnvvUxji58JeqPrdJRNJaPLF96its1yFUaLFEigJxy7NE2xcwdkA9JHcpwWpNb",
  "key28": "sDsy2XsuM26rn5GkgmmobDfpnr77aLXbXGws4uVsnYVVXaq2EBq6zzVTYiGs36sk4yxyj7EmRZVQPFwoTj8HktB",
  "key29": "ch5zgExRSVzh5iVuRbMqAwTRBAJH4xRC2YPGPLDCczjncRN68JuSymZi2Vh871N31NAsj2dzgDjTE3WmKuj1LjJ",
  "key30": "51nMpAZTUtqLBGALChLZ1iL7obYkDhoqHpKWcgFkrPXLHrzCNRhwsrk5UcRsDu1sDqJ2m5ptKmRTw7AXFk4UjQNh",
  "key31": "4kLWdux5e43ewTUWWeR1QR1LYNbMdEairow9RRp5JmdGywYg5EyJhfo7mZuZPCJEs3ViLmdSC222qz8ZDnkBBhqc",
  "key32": "DGPhkMPjL7FnS1cxHZBhoA2enpZyscjBYZeHweDMmVNjRegMSGdJSQUSLGaqgf49P8hjzhzoFhCRJGBJVx35VNc",
  "key33": "29vZQHceEfghbVxw8Bo2RC1c1q1ovwKKRJXDCVH1rbjrfh3HeUteQshFyanzrkKbp6HKw5TzrNXLGCKFDMpCMoM4",
  "key34": "35XBViPZcBH8cJg61gK32T7QTKzvfpiYyobUoK4nahyzG4hzRguBRf47AvXXYPnmSF66NMkqgCw7rGEkiKBrGRmT",
  "key35": "5XHHVgW6a7Yy4raeS58uZWoaXebVxEtqvgKcgHiSaFG9fH6gmTHtaELw2hxmL6m7VRo2BiohfxkSkhuS7hgVmBkv",
  "key36": "5qVXBoJFqJ5Knro5pnSkYaqkW887T3W3AM7bGBcTz3QjJUKbpSoUAjUBVzEysntzJNhzSAvwWSntjo7uZJ4p9vsu",
  "key37": "3ye414dgHwwniVDtr32hAFu9i4KgoNHWRFA5s6imHB2Gig2xbDZkBAXdmLxzhxeEGdVSf5SteVTLEpC7fTisShs6",
  "key38": "Wfjvh8v7qGXspRcBdw8WvnJMyh4sbZKJhkAYXR9z94PDHgvoCuhFBPM2Rha1HpdKob12z9QSZ3BcQRcjcvNRn32",
  "key39": "2F4LbY28HZGX6NXc752UmZszarJ7E67C9s6RYFfThpMjnhporTBrPhZzjcbsww8ACfyB9SHkuY3QG1aLwpKJfpT1",
  "key40": "4DGYgEHbugLK1AkiuMmFib7MtTedmNoCiDGZojbBEfx4JFeBmhv6p5DaUF66V448piFa23Wd8gLY9JpXAejHVWkz",
  "key41": "4rCE3oKFYBoh9orDi6xn9Eq4srMjpF3HZVkkmeFxzE92Ss4ADze4VX5bV39EfuZ3jNRMmEXn3RE5nnCFRHjdkQfq"
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
