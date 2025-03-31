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
    "24uvx6ogqqEcKmcgrQmCvhCvUsC5w6wfDkrWkffhK77Sp6gh2iSPuZ6WYBAaJAw1B5QnbUydCPbyeyt5TT9qDcvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDWp54yF31sH8A1LXedXsUh7XP82sqt2EvBouN4sksitMZ3GLVbAB23sbpgrB8HnVJEmsRPMxKZhHKdRRx9zEE9",
  "key1": "4wXhfJow21XggUHnfp5Xg7Ey7HasdD38viU8hWzFFZo2KzHq1WabAqXzqgqVJLgApGsi6ayEtgex58Rkm7Vu3hhA",
  "key2": "3xVFFqjAcsRyjjrny7r3MwHaUPhNXT94ecMAgCifvijY5ux5PLmGNQmxWjazxKWg6yPCC8MoY6HGrAxrPYfNPm61",
  "key3": "4TBJ2JQZJo3Wbj2qMjM4bvk65cAnQh8SDyG888dgmgwRhvxdn7Rz2abQLKvqRVSdztUwW9rVtYMixLZfeu9oUKAx",
  "key4": "2mZzqL9TxSQBFDRCRZtneLCXp1Tr5D7tyTW6z33U8VoHoQR6ofosqYkgSNMRThYbWnfm6R88Xn4P25KMJ8dHtR1h",
  "key5": "2FCzJ6Znd9kpiAnr6nR1UAcPQJDTjWwzqGuH84de36Fb9EvE3trFYMi5JTcEuyycnQqK1BmYXY4oVd88hRZ77Xe",
  "key6": "2DHNqutcgY6H4L8juToPBWEYLmscLXRm6tXStuhTDBSVRSTSwFxZYmMbCKuANbcy3daRJiUerJYvm4BJ5zgbgLKd",
  "key7": "4PLffkPiPPHT8nG7v3pZ4EDqBchfMT2UvnRu8yb6Xjj617bqdtewoFKXzg8rT8ZaTCQM3gdbhfnzEruETUHDDu3K",
  "key8": "5zgxiuvGnmFH2DgVtVpzyeBUhZLKSWnVnwFT92LR158TVqw94FRgj4XFmTD3urAqvtLa2ztW1B1h5cAUVZBFXTp1",
  "key9": "3fdtpJsAHCehweYTAHEtBXjhiUUz5LZu8s2rGptAU7FGsh4TjquUnxE2fJAeqa4PttMzMgK8qFRn17JXaPtGNaZX",
  "key10": "3KME1dt66RsiqwedDw1w222Zbrd7vrBYWqgtQGLgtgL6ZdhjRZVhdnoGFNVSXZ2MB6zAno2kreoj6vASr3dmKHdD",
  "key11": "KAEQqoK2g9JhrszuoBNMSUFUEfNjL4xGe97eSrzLnTixHCFFvEfZPy9zMUkozfUPCaC74C2EMVH9Wav6Pf6X6Xb",
  "key12": "4qbQVFsV9L4btiZ6EZF797PEEuRoMjdvwpDDovHCwdaNfJdTmk724Jno1LWBn97UmnN3a6CPVErKnzEvCNbwndF4",
  "key13": "59FNgDnXzckTqJiDMV8uESxpsUopXm151EhjMwk9Y6hxyFrbAd3rRLvLHhpTjs1TLgtGv4UaTbVvouAnw5JFauP9",
  "key14": "3b9pjvzP7SmrPKM7kS63ruVWA4E3dBtShdq1RQZqbuYZtugQ1L3nFdQGiHiFeQjks6DmkyZyWbWA8rgT7z3XQQQH",
  "key15": "3SQwKRBGmM3SCC74BcLDDCXHS4fDtQdScgrZ3R75KMkLnexSoJ4T8pmGLLfzJcksbKaiQwhNnyb71jmUPpJbpc18",
  "key16": "3upqfrypi5fRr7BqfMHbPU2vGf5Q74oavtS5aFwPfU2UmGrrTXxRf9bMydBzJ7T7dGdwvReoYoWNFoTKE8Wx1tCG",
  "key17": "5cLk3NFe8UR19LS3wKAc9a5FggLXxykrbqTu5EaZCND1DPNqcBpGgwCdBupXcCwUvWVysZBSKTNctePGzGFJbbbT",
  "key18": "496zEXSAQzWYJsmz1PxaUuRJyf4beNTqvJkLCR8Ct49zoophF42AfWQaS1qNcX1a43wyMP8vahA3x2anqvwYxPPB",
  "key19": "5SWSYED2TraiJDUkeWrErL6WDzwjQVJfWtEpzALyc5x1nXTmSNiQPGXkBvbb6bi1o6bfGkQVY9qmsjbDPcxY46Uj",
  "key20": "3yuG9zvEk9hBZVg8an2Lkk4kQVFFx6jev2LvsfNfLFwmrxqnMtH5VdL1WdaYKktp6dkHo4Xzu6tt2VtCubba3r2J",
  "key21": "2V7hpRjcGrLNzQmWjLYdAWiexPrL5bB4zjsR8Pzjg2S5W6mQ63HmRM6rMsTp3jEE5kAj3vqwv1RK9qzu38KGqi72",
  "key22": "3eNzFEwgMvt1pbtameVheqjC8QXEhhJTo42G7cvLk3mpvUH5x8oXPprpL2B2VWLXmhyLAHTvuJxDdBVYbgvxaN8g",
  "key23": "3PQFPiHKKjL44zV6WcmTTzuiYvcJnFgdS4ELVSZDb4hHsVFRTUGcHJnvLmVcWLe5Hc46LWZRxmoKFWGQ4hZmza2M",
  "key24": "2Q7i9yU865SHYoY5LnGsMBGfNqTXUNx2qyCMYxx6UUHpytMnBQa4f7MmW3UCD1wwdKobqC6ptvoQbJmcPN37tjCz",
  "key25": "xEp966V2TFa9YtB4WMQPT3zHzQVfW26DWGBRhEyyGQP9BBA5veh8ZzGLQHdSXykzxgEcJzw23puwU7BAdNViuDs",
  "key26": "5JE3GAWA3boBP4SJ1URrTtm7zVj4upttbj3AJPTfjThq1Ttk9ozKrYFkpE4zjXqobN9K7J69cQYoDd9DDVYrpLZR",
  "key27": "65uz7Cf9CqDnhabPGR1caEYg5rwzAtcLP2hATwwbWCBpszz8wt2AAm2HYZP1GhVddR6BeJrumZ7NrimJbXkmV843",
  "key28": "5k56SMaWSuamoSBkEjGXPnggdkJ53yUPvS7a8Y92h5KcmcHNAk27Qg6L1dZZY49f6UUFCFhZYF4LYPAawhBdSygs"
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
