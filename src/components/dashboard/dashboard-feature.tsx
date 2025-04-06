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
    "ZQCBbqdR17zoApQVjWu5CvjZRyndpozAdKn9KY24SzWY8KLFgBArirGLo6zrToZUyUmFaHnF1i3KYXio3wxr3dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9gqwvE49S3kxPdGHYnTQdvoMDCaZSv88JskwQnJa81ddBtJijVGVtgef9Zq1LnsGSDFo3tUDRkVstJf8h9UqDp",
  "key1": "a4kTEdawK2ypQy3cL64rWXAHRdzSndAAJso4FYpmLGX6zoSF8feXwVCzBUbggcj5mY2J9qrqDAnmSVeJMrnas5W",
  "key2": "2D1ULoSRoXrobrrFKRyKbQ58LfgZqpbiwVNqfWwRHdY9PwQ48MHXqk7MKUKTV46ZSFBkngLhHxm7QQcPYc7mXSfH",
  "key3": "61SZJddiiLJ72Ke2kQDj1GwJ7dy4NbwV8ymqAfXotdt9LMPX12JU5hcsAxTCbNLKJt6CgS1Z3wXMbp8Hfi7fwYNK",
  "key4": "4LpLdmnBH4RBdzLFGaage48vCJCtspaPRzXefRqSmQuX5ymzFqH8D7dNnsNUKHv3MgfTykSTaX9hLmyKirjJX17q",
  "key5": "4JCygbrXiZriXCuJsCUTEfGUPUKBUWeQK3GPNCg2fSXLZvdr4tLPAa6Y9bLj6XPyYxRd4xtTzEFK27RJnxKLVBjV",
  "key6": "4YFYtmfeSEyc8DRRAk4L915hhvaLUVfu4M9T5ZuLmBiTuccta3YJcxH8RDwoU5LhJExPnvhNdF9QSxFj271unBUh",
  "key7": "4W8F2RMw1PKmdpdrxBZgHSj6m4YJpA7zNUTYwwAkBaHBtSPHz1yQMHV2DbCKLVmmiTa33PzHdvyuZBKWoKio9fRP",
  "key8": "3RKPXEi89t8GmjmiePQc65WvU4e5x7vmnmhAzdxGJYT6UAEsJfgQLbog9p7Cksy417z2qQakoXagNjBcQRsjg5m4",
  "key9": "5rFHW1sJpJoctpPqNQZ9AS2sGdRjLB3y9q5Kfg9aPj1iipv9w8F7sfL41owG2Ln2CBGixdEeTv5cXsi5ExgTGCir",
  "key10": "5SMWxLHG5pu6R2XWokKVsdzuGnnCerH2iDodhqEixXumN8yStdEgDQiu37HHVn4RWt668XjNV7oLhnDrw4Uj4eUT",
  "key11": "3LefeaWUYyadi675ixTHYN41hyHriwLfrj6yX8vLq7dsfQqrnSLEixPvTsJo6BcgvE2g1V8qUzpZqH9TZ476ZyGH",
  "key12": "1J9kbg6tX7DkwpArA96yxyn9PGW2y9auxNuV7yv7cMExaEz5MJjQKMy322xBkWPQUsxRv5CbK7DYLASKyti8w3y",
  "key13": "49kFTyDTCjioT9AcJyVzJDFT7FmurcmdyCNkHox9bUbufUiJ1X9z8Qy6DWpXUWWA2RgTyiNut65U9bdW6pj6uTTa",
  "key14": "aNHBDSV4bZFKnAsE9mdgmfFad2eLxUF7z1pWbjDLXD8mk5sSDo3adgbqQHj8d2nbbUQKiFbH99yLfFLRTVzyvsL",
  "key15": "5rpomQaB1t2NwMxoK3vQ12qFG6PULok73Va9TBfoiFYNwUbR5emzPUYEi87LhN6fuCPP1FVPY95Gnjy1b8cc94wR",
  "key16": "iJw4ZCdVoAwsUSXdfPcGUvo7DhZt5UJvAgik1Bg2ufDagPaSAChLSDG4Ce3qENsYh4L37vex2za2XmJemMuhtBw",
  "key17": "oeNrv374bZMV5DqNjDenN8Ex1YxQQJ8j8b9d1HpZUMkoazEUy9AiCfMAaEHgPLvJnwzP1ppEaJGMZuQB34eF37t",
  "key18": "4sWD9tWWBrbGTvs6kKFddRhc4hwemFNnkqcFMWau2zkJUdZCMMg8ZDKSyVY5EMD8bmsqxvovFTAS5xtKwfhuKHnU",
  "key19": "PLdiRAS11KnNXS9Dut6TvHEvjqKcjnyFCX975YtFCTNbPeZjGAkP3ei3JVm64WiGwgFFWDtKRgJXuaw8puTpqsh",
  "key20": "3efbd6C7Mv8GwYL3SM4B6dkcP8bqvkRQ3HGg3WDsx9SVsf7ofa5wtadT6BBdufMh7R6c86hekr94QFixM6jpGxCX",
  "key21": "4J6s1RFoy99y27cioL2vA7jvthvkWZ9jMfQvDYArM74krsZfx4SBfmpwRwYtcZWMjwX6YpmvcysT68zSocCiJaLY",
  "key22": "17VwhXimAnHvdCB1uLKPtiuKGD42iHjUA8uVxA2R2PF5ShBw8b7Y2MjXv2au2icqL2ff6eybgt94pBSn8xu4diX",
  "key23": "44knYfPdZnHZA9PXUMuBnGMZVc937Y821HBhWWFrxHnaw1J2nxtVoG7gqyezyrqA3dmEb1qM9NNS9wb8dS5AyHVG",
  "key24": "56HqZcSTwbaiLyXUwB7PaaedscNRu4Vtr6bZY439UAXtWWopyTZgAJsNtoN7pQS4GBWujtbKerY1XCUoAsB9y8tQ",
  "key25": "2wwTMJRmzE5MHwk5xEvTyXn8gPymKV5QZTiuHpBdbq9cKoz7xaYpbCwN3sVGRt93L4vwQQ52fj1Eb7fTFBPshDMU",
  "key26": "3YwUnUergSmcekvmJmy8FKdAKbeE6tVP3bRCdNbooKJi9oPiXAzNdApt8HqpNEZeF73pL9jbAJ2jGC6RhhAQLny7",
  "key27": "pnXW1djjTgZeGssUyug6E6XbBfY2tfpvzkMuFqs99yM2ifc17c1fELeL5b6xWZ52r1ax8dvvBA9xLB1aqe43e1o",
  "key28": "QqNJ16NMTtu1q31iZDmg925gqACMhadHBnkveKj1sDL7Y2domx8SDgsm1wxdtCXtYen9PyTqw9t3C8B84GyW5PG",
  "key29": "3u2MYL5Z2bKn8GCS9z42KGitPaB2ShvjF6c4sa88t5B3NATHYqH344DPnUvj5i2B2braDVKVKJi4cU8uhVB1UvDo"
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
