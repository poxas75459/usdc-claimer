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
    "51zk11LoQv65q8F3pDMQhTrM8j3aDDK8R1YpqPYcHjmq5qUPn4EugEN8FkgCYTX8zR1gouh1zvdV57xHWiRMUsA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeYUwrXNqUL9FKrezGQ2SeUkUbSoxd243aRFbV67rJzMCiUQPRDPJ5X3yZ8jAvcCc1ahoLstTmXQpzSxh8TbbLV",
  "key1": "3y7VArz15yXpuoeBrmZXHLVNdQ38FScm4hy1mqgpUN5WftC5YQBtbh9nVfjAidcTm1e6JTPJ8zkVzcJvrZA7t32C",
  "key2": "2jm4Xre7SSSxfkjxgEpLQUBmSTXjKMbsdLtCa7R8vDLLLTQ5qua8h8Y2LbnuxJhCsQT1VFZ8VA3AccN11fy78JvX",
  "key3": "5ynsKvg4dX9i2p4jPizK5BRJLnerLJVgQMRtVVfHTvn9h3QQjeR5KLE3ucspGoHwymGAgzn9SjC7jDqpbA9bcD6w",
  "key4": "qeFizBD9tQumEG1FDnGM84jghWERhy98MmATyvaJ2Rx5uh89ToLDD3RePoULiC8E7AfShtpTetN41d7zsjZZqnC",
  "key5": "7AhkFKbqTCff2zc8TVh7by1h3KpxkryhkA1X11Q6p3vc524gbwM6w9DK2uxD9i1q2hUWPv2wxYKSS6vqwcnDfAm",
  "key6": "4HqcN4ApUBLA5JhuqY3rRvPZH4AqsbrfAoJminRqYvNmgTaAYuXP7cpKbbsopH545hwa21E4uBBUk7GcF4HHmk3N",
  "key7": "5HoRZhCAkjUwWSWa5SDhj7ggkk5hV9ypDSmHRkDxXhx5vVjZYgSkSsSL62idijMqiaL9zARvv4vvZs2VTZMxtkK6",
  "key8": "37xE147v8VRRBCH4d8TDquxoWUvkSm7h5HSdTrsYjGwra2ayxVJfPYQ1fN3sLSU7Cqs44Yymhwyq57w2nZhLcuSg",
  "key9": "5F8V8JK6cUzQZaCubxHS7rzLeMxseE4ooJ3EUdMN52CVSLrwy1v3a7RRymU3fvMGRM32CVpvkFJV3CoEG99cXvU8",
  "key10": "32aFQZBZhmCpj6h7LhApZme8UjCooegibfAsxA12dWbpSEnoM1i59NnGcPX6u1pPiDdrnD8GPHATpe9LWUSn6Jrz",
  "key11": "5hyWdmAPTzEgRCLUyP56TBvTxTte3YvdpujTg1jcCmavYXJJxUQZGg92iyjRMpS4f8i27ydTsAEeRN2t2n2gMPQC",
  "key12": "KEiVF6N58SGNFURCRA7Q9ppBbX7dVt1iPxFqp3LAfmXRJLvb8Hs2LPRsM5LqPB7K231zxNiscJAH4j9aeH9bUCj",
  "key13": "5jrPMeE44cuTddN9aMnXPxLAiSN5z9gpiMNk9Qx2woJCXENHgWQxyqGCNQbyp6rXQcmrw65GsMzg8sdDPXPb6cW9",
  "key14": "5XdvnpUewZ6NuUqZha1to7ukJkhcsmMuhLFrLWHwgNqbq8sB53kqsEZhU2spi4L14cq7NzNeCRCVVFBdHkefmsZT",
  "key15": "64sVoiCwNcgVRHGUNrUG2hybJ5ESqJKV1CnzfbFz2LQP5n7e1Cnn6DvTZQvgY619dUQkSAiPrSE4XFwJFjngzTV4",
  "key16": "626scT3bSHW3C4KAAcdbiDkRkETugCDuBaXf3DAuo7DXctrJwwa3ESqB9ES9WCoMCsNgEgDxtQrWxwKxRnNZj99c",
  "key17": "38K4U3BLut3jN6jp6osQzkLQmexBpEtwXaSepSzov3mjUDDWE8TtVWpvWiTksw2iVptMtVrBKTdbQN9KfxMPhSYc",
  "key18": "7p93sAsKvM1W6UbmwUmdry1JcW4rdf6yHTHQT8WBX1Mt52ZAFxW7DexapgonuW4Cn6wuLsb1FH4gtXyuLDru18B",
  "key19": "3KRNcdjN7M4WyGUwKpAFsU8nV3v86RmhUN5KhhujDY5z4oLvPKMD3JZDENdqcvcP73FVXvfsuMk7RGW1k8R58BbP",
  "key20": "2voAjY4WymeE48wAeSQM9VXkDSTKZFiaQF8qECBRpsikAU67if6QusFf93auEWaFyAxdjq57jA2gtFNrJBZGKMJ4",
  "key21": "5nX1QYez5Mi3NZA2hSUjeLUtsmuNfMyuaTrTSQVe18jG16mQqTpKc5p9grvuZg9fiRS4x2PhCc4VXVPiK6jK9yLG",
  "key22": "2QP8LpigjqPoJJiZxkzfVed98Ps9toDVMe4MPUrqp4kH6UWiLuwaHhfbJUe8KzV6wqojfVu52xLMgzz9Ugq574AY",
  "key23": "3omuNA2rnyh7p3XwYRY9z84wNt9mGgFbkbt94F3PYDRNXVg5AaVe8PafmcgSHgZ4n8oQvzN4g2bw1fYfScNupWvK",
  "key24": "7HMznTWipXfaYyedjJB4CodsgbjpX18RWju16MaN2XHrQZrpMywveXgQ1LhaH7YEehXiesuZYXy3S8ChTbwwQzj",
  "key25": "dnMZBNZ2iyw1ctkRMb3JfaNfDUXc4HgRmpkqeemXy9dXEm9QhEYYzDmLo9Wasii5fHi1PKsLnuG7M2NTn51TcU3"
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
