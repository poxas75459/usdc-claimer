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
    "4pVdDNn4oq9sCDcZdZEs95sJV5LEjeG13nHox1DzwgTVb79KjS7pngU3dEK5b8o78GNDoLzD19uCHUUfkaGtr5GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uwymmgrgobyrbLZAB9jcvz6B4axkSBNcM8Q1fkFCFSLTp22dU3kx2NA9ShSv9yLjtphY8bVyePaewo2MZ1Pte1N",
  "key1": "4NAy6SoGi8a3rVCYrkrux19MqTEG83oqbtWNEq983PFNY46n9YBFyHw2qLUyFUmNm3RcYJkhyBgcTNexygnqrnX",
  "key2": "314mNw7Ugsy73TriC3APpi6bLQHgVZBunXfgDvfBqGK77JJWPgQnR3ThZRweaHNLG7MD6puMmzxRU9FmLGERVQd3",
  "key3": "65UCZjNPW6jW5uGoHmH4mu4i4ZVfHjkHFu9zBy8mjGWceX4pDiHuDx9ysnkeGciDXdfQLqsy5t4otiQoNjTpRqhC",
  "key4": "3fskcwTDWXk7mQLqANoM2WbL3qFW35rP86qDndKLxUvAcsNYhxPain46qP2989AF7nHehUZzpFbhopwmpTSuZqYG",
  "key5": "4gTRdGuvFGR7poqo4KEQN6UpXvD74BDSpf5gw9w4xo7NzdmuwP9DG67sZh93AvLJbPYSbDZG5puJ2hmRDV4iqKpk",
  "key6": "tJgcCotRamEqWdMhKCyMj4Hd8kM161GoXfy8b4ca5hTaE2H29x7ovZ7RWn2Auo5YXS66WbaLwxzGJr8UaEf1p6V",
  "key7": "5wsf2osbyuKVvN6MNQhWdPBmU3nzxnE3vxUPBqvsoFHmao76mLhkYQtqLYn2ejNk86Ums3EzRzzNHC1VFKtV2EHQ",
  "key8": "2k41mD6S4pdaz5q7fTDbsdtatAEBgWEdPuVwM5yZmYwLXVQkLqvawdoYNaKeHfVd8zGWFJtJPEjJPn5QCBaVZNFH",
  "key9": "2M2wcDJK5eyFv7HpHmmzAc8kuX3N4qc5sVJ7QE7PCPkF7x5EynRiVz5psRj8cMnS3rCbk7bGZuXrsGo9xXfLWWLR",
  "key10": "2feLvxm4qzUwk6KiR7ct2V6kVV2KqCndsnKfcMR4SB9ZiasfzxSYZyKuHy5LLvQtf9anL9drzFoFBBRrwd7n2LEa",
  "key11": "37fsy6Lsd7auZ1iZsUoze3YJLSERvf5dxvqxcobHKVjGD8vaqxsUFFYfQQP4QUUzFFUcPV5jW5rxQg8tJ7dSQTrx",
  "key12": "4gFMCDuCtYFTmtn849Mwoau5zgDwTB5uZPNneRN7ceXPYxbju6szb6msgM7fDuewEJAdqRYQAPk5TnQ3r7q1Z1jz",
  "key13": "5sa92majsX1HJKom9rCq767AqMjjJPMePYWBkdXtp32JGTQyjLQtPFYi7nv2G7E1bNrDVs81tgeztHCn81ejHbp8",
  "key14": "5SzJB1FvBq4yyNBM5nvsPfXns44kfWknG4YrHL6xrQHE8vKPrRPFMWUycGksN2Ji5NCd3zeHNHA1h4xMfZotgtTA",
  "key15": "4Yx5HCWgzQ8mvnPR8CCFamvegmkDdtnNURarsdSF7oZtgykaTKh3X5heDw6MiexZsnJF8doRpha1NdKntksCGZuf",
  "key16": "5piop7FBFWWQg35uZR2pRSE9knMXEjnXvzsUec4g3GEh7VQRCAjKBQHSR7wRTPZYXYAm7ovdDriPngk6SYMyK8b2",
  "key17": "28LwM7Vvb3WnH7uqvC3ne4Sosf5633JQDQ5S77fq9x4awEiue1EfjuGRpAz4xUfqMToMrh4mWgEKcXTyyy6eRLoy",
  "key18": "DqvM3r4b6jB3H7TvQJrfjL3VDpC2cF484fzyeAgFxxigg9zPBAGz4gzwctAssGQZKRKFF2hngQnvvtqZ8kACHJr",
  "key19": "4HksBFmpCSTnnPDpMAsAzcXLLXCeq8qBoDd1S5cYXHaypDh6jec1SMmqmK8kgqKHexKooys2WLaBGPzpFCfAka8u",
  "key20": "3toBtiKFbPKdZaXqLwC4QWL1fHExvtrMegZLEgSAPYzP8YVmFrrYAhihHdXaiGii8dthniXdHnjqfGZu4UV5yTVQ",
  "key21": "47Soc5ytV1D3VR23Ho7MQvE48oiSUFyYDpvB7jTeL85vZpd1bd2h142AADSDavWbvmVDnFYpvsccEzvo9ifa2fMT",
  "key22": "5m33d67F6i5S44mB3xN7N4Ecj8j2rVGEYY8JEBr17GeMBJ4XuYjiBWmC8VJAqAzxhz4E3ARPAdkw7gfijqLqt6hj",
  "key23": "2noAwk13Z1vjgS3XfD1DwBRPE5jPei3bgi7vecR572X5feXvVsEKFFjEeNSsdxYJ9dVrV2PdAqCaucCwNKTedMvq",
  "key24": "5XDRtMA3pzBp2fdvbKEnbLGZTB2yrCjAqk2f546sSeW7jQQNE1uQZmXKtRUTRu1NDUJWjV7chdtMDM1WV12NhJQV"
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
