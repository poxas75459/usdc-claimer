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
    "5wxwM42xBZ6J2aV6JMKFuqP8x7jtTmWJcew16ZSX64CV5shmEMxA4CvoNw84PFDahgaifuETtVYVbauSAcuqfrUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHiT3VqScy5b7tMz92nSK97cvpmbcZsRGHxBTHjREho8iZ33DbnFzBGVGTh9VnaAgWTKrksSYwJa5iabuR6Zfkj",
  "key1": "23WRmZ7AoUpfRH9U76j5JnegqKnJYNUpfM46Vq5rb6jtwsaD6cMj5uF5379s7wBXbVzs1hAqo78fz3nbWgt1YVna",
  "key2": "j5qUf1kFX9Vss27qsLchq5zLWKvfdxPb29Pxi5HJTQTcrvxTG1BJrFrLkQBX8XpjeFuRr7R9QPaXpt3gxbgbd95",
  "key3": "3EFJGLZYnXaCaiL1fAK7LBh48u8HPnUWqmCSvEHY12EeMRE7r7g6s8VcViq786RXBiFdq4EMzVUpV7jYmfDbGDXV",
  "key4": "joMMopjYn2qHsNzKZDWrqr37u3Un7FzBLrTrBw31C5DwQnA9Az7tYQwtDXBsy5RVTYJueKPSpZNccZ9bp3vnmfm",
  "key5": "2vTkhhMq5Cpvk52uWH2vVk4ReARd53s5pPh7ZEkt9chshof3RgtTGkhuTD4PUJdWtwbBs7kJFM1DCiisBPPBfcoa",
  "key6": "5AY55qqBN4NRYk7XjE3wbABWp9vSZerrCk1kM2qkAGxvxWMzgnNstJEkqQfbPgrZ8Lekt8Fmc166Xa6KAbmJ6ivi",
  "key7": "3HTQhH6VHhvG7nK5W2K5UXsPYgfjvsNYoVzWS5VmhVnMu4jQWNYjeiNXE6tu11YqaqxTn6zPtvfhvGWhEaXt3DUE",
  "key8": "2SPBqfgrdZWXCSgUdJDKq41UUi5cLNHatSLuJNfQFMZbgog6drkpYpKmSmtJ6dZ2MGxJNbvFW6cYzMvif8hr3sRK",
  "key9": "umJgzgCbeTEfdz2TL5BHfHeAjHnTruyTFJH4ETtJwaTWaNmZPtAZMNEAnrYWEWYov4Jev8UGL3HVxRgq2mDmtME",
  "key10": "52zdt8zBGHy9KzcKifLiiiF9Tt2R8i8z5dnRpnwMje5NqdZ5C2oc8ZBSJn3aN79aVYeEUidHSSXpiuqCjGChfUnu",
  "key11": "3XdXrXM5h9kLrk8RSx1jqutsq8PvQubJPqVoerLiTrxpz8k75yQCza8W8BReJdq3AvokhfH63csYWg3Pe316whPV",
  "key12": "f3wLBgrJbS7boHMZNRKtRsFSrfrJuhnrbWNxipr9Vauw59d3q7qdJVjitzLRbHLzwY1QRb4GwqFYmWtVGXapHNQ",
  "key13": "K5whm98iuuWSYPcXhxNKp2N3dCKK9CtFQYJpyHZk8YZksSGyZYjjNLKCu8hCP68Wzu34yLPYyZJ2HNyR1wxqL9W",
  "key14": "DHYWj37ijMn7qXF23HY6bBwkZ9xfsgLJR2QVL7o6ptm7eC6umYBcpPvQyAKGvzLh7TSMN4XsyF7uGgu1zrH2Hyj",
  "key15": "54B6AkXjiChKQ3eP497mES4Q8QwUiGfMMa9acigAS5EQD6qynGtc9S1Q357H7eKzHW3k4aMvDzViUvViE9brmyYw",
  "key16": "4nJDXwyk91UHNLC8EHA3U3H64Q9oQUo82ef9E1vw3REy1G4xzubzKa5Gri6DJct6D3CvW2oYzR49dL53bUmmJAAt",
  "key17": "2mwnpe7EKxWpYZj1kiLtHaA6cTTN2LFKat8JCNpZDKFvid7cp7vmMRf9w1PaCLp16et1cWdXCXM2S1CWWsNgcUkP",
  "key18": "5CiYwnxe76NxFKezvtdctGYD7ECmTUcaL4kZkc42nDBniAB66av68NJXnfdSYcr5T9X3YmzR2qSnaGNSpzYWFZVp",
  "key19": "2ZwLDtEatfQph4Q7z1dRAqiPuxbgaZLafzsjcCnVVRMtCNmbVACfWokcTwEjHbSZev6X7QTDcJ5oFHwkTsXhDvwg",
  "key20": "48jTkrHsmozamdtCEHhdVMr31qBUbkbL1XkzZKo94ksWmnh4JLrJyiCFh1RcY3JWMtfK758uzo9wfQUf84DQS6BA",
  "key21": "4aqczyDJp7VsniC6B8anntR56464PJE7Sd9jQh1AxYzvsBmZEBNJoWuDFd6HPxh52gTDWrBigwHvuJ61njoKPdNz",
  "key22": "4WQv9sUSHSFaGffJr3Y1cesy1tNYjjdGeXq65wh3jE4L7VWjvcRJwdtJCgLUkDUBKxpqc2y2CA5nQuG25XbezsyQ",
  "key23": "8uhDKkCYoM1iCADrmYNy9aegNNjtGXz22kETWEnULxvdqFGVKfKMfKzunnJjPz1yrPxpJL37Kn8wTShktvVkPHk",
  "key24": "3FHBcFkLyUnoP1CgrdftCZAU2Zf2NnTcHzoNfYwiNB1ryXKqEAybbPBpMBykdqseSEfa4o2jab3hz8LfJbQB3UoW",
  "key25": "43dL2jiimwzzHSFE3hkd3Pa5Z6jQNULZD7Ha9uuUkNuo7zjfFeL3rvhy4Mauj7FiyEcYTZdNucxUXob3ifmY31jy",
  "key26": "3xPJMjM779o76NqaRJqatY5Kn4Hd2Dx1VgKdErRfAzrt3524EFUrhTfwQTZWfTtACwwLxqZLKBZC38dvSwWEnPSs",
  "key27": "3PYxp1GGThWh1XMoC5ZL6qshYo76bBSvAMR3BDTyteZKVwqRcZWRKjkNhBYu2s3pvyZavX4ggWunb999v3rSCVab",
  "key28": "4SBp4UtHpgpkC5VHvGv4mjkjhfB5MzUMzxuBitiFTymcxe2oUjkkL1rZ6xQso1hy6PuYKgQvuBQuRfVCUiQt5TTQ"
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
