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
    "2NYGLBET7Lgw6QsY2Atx759aDpNi3DWozRZbgf28ZVpg9Kr5cxWWrjx59cEpKNDsgGHPjYtaLffaSrYCbzdFcKYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upB9pcAVFuE1eQi5LFhjDzBsRPtzBYaqH9FSbC4P5pRqBK7oah7AsRgQSGXBNB1CQ2Jp2boUx4RVX17RCkwzaAu",
  "key1": "41ATc8yTUi3ZwoToeqEWYVecvT4obtBzzAX2HA8rkpVyZVPCuSVGBANoNqL27oMRwTFzMnPEx88MdC2QfACyyk7J",
  "key2": "5g8Afnu7NohRMxmmMu23ehcbFZiGCVjpt9S3qeNQy17dZJ7kddY7k78pZJVv3wt4goGVjZJtiP7TUBqPkFJie12j",
  "key3": "jp7y5r5fpcqVy5cZMKqC4dRnRW9wyJ6EuLxLDKJ4tnW8gS3aa8fCBSkHv9S3FCTKGJ2uuH2Jt6giYbfPA1PcmL5",
  "key4": "5mjAgRx1FzpMHPBQsmvpeg5da4TzukGeyTVTbAq2RvmMUyx2hTZTjK1cBminViPAen5YrbAZxR2y4SCtmpFLBbbS",
  "key5": "HmTC7ReT4eQtn5ZY8QecEYJFcfNLTC3ftLg9gxiEda6zFyzzzCzK4jpLJ542vxmZSuVhdY7QGPB8EG68AW6Cxkb",
  "key6": "5e8m6Rz9FhSDuh9L2ynxsgWdkPdhQq1NR7zLfY8hcnzrKLW2Ar6DsQa3fN4v6f91MzbtcuUg3gDG1hN7iTrXdoaT",
  "key7": "5rtB8kPYq1SD4LZExkBGn8QnXvqUMwRNRRQKEy7yqnTfN7i8RcV2eLrNP2Q7x286wtzwkjortTMPGaeeDYeHXUMt",
  "key8": "4dv4WPfs146xy6YHjFJy8pMZy4iAsdG76pgSpuQU7SZqMYckFgrcYdFu7euZA2Qj8cjxUQkHfQsesNZZqPQvqcJT",
  "key9": "41XPJvFwuffWuvr5s9XivJswmGQ9iUPxaQYjAZD9xhePTC8nn865q8xFrbqA8joXatKUwNKvG5o6jGPRkhZyLEDZ",
  "key10": "WKPibV5RWEt6tvUFkEgFTqNNVwWhjkKPKJoTa69PSx3gkwYxsNo4yJwb7pcKjk93DgJk53eCS4wcN36ZKYH4oJn",
  "key11": "2skJQdU6JkMXcLoT8dGLFJEjrkm8TE5h78S8q73yf2QWtFhysoaorETHZfXts2Uw8x8vD7k93PWMYitWJoHtUQmt",
  "key12": "DdTVkf9888to8DHkxEZU1Jk889XYsUfWZ8pRogtRqEXS6KikJLrPuLpEJa8AmvWZCrB6LhAoSvgvybz4U7ujuj2",
  "key13": "4CdEvFCXU6KN7yFn8kioXS7ABopAQbWuwZ5T8wTJxqbWPzF2hx2deuxk4upxhKTxzxKAbXHi2aFTsxZMXUvVUa4b",
  "key14": "5pVHAYqtGMJDNfXjSeVBT5eWqcvFYVTAaWSChhL4SPRXyXUzXTKKRRj9fSah86yUfcYKwHCRVBEob5qmHUEQxA7q",
  "key15": "4CaDHP86qvmn3YzQG5mmftq4r7yHLCJPPabfxHoocH3KjeFD6EeJxwSEyUQEWGQdhnTLDZbqVgonqBfMmS7bXXP6",
  "key16": "5TFSt6kSN9fdys2HqrYJrht1dN4U4h6w7uMZCPLGko4dVdakFWGXiDzVi13j9FWxUSCj8ELLysfZkxLt3TCP5FV2",
  "key17": "457ZzZZex5vAj4yhed1MTTeA6aeDrHe3g3DrkpDj3c9fEWFCCBPT12c8bCNJGs4UcJyrtjgms9CKeLMqKceYbMuD",
  "key18": "4tzEE7wmJjXTq19VLQMFDNxsWT7VCJzs5pSxTxgbaCeSRj4mSLmAtMeNPE7Gx4RfyFP1nEugMUpwcceEdSkUQJdv",
  "key19": "2kZfLKbi9sY5zrmj3vRvbpYiR52RMjK6mEnPuD6FzeY2TkJviovz12ksrpM9C5jWfFUB4ECkpoingpbwVjZJPFRZ",
  "key20": "4U24tG1Hq5kfEcmqM5z6WaJUM7ZyjxvynSSh6tV2kMAq1yeKn4LvtvdUJsWMD8XaF6n4XpBfhHzUP4g4HZQpmYtB",
  "key21": "49tR8dQJqYHMJTvMn2HY68FtoDBwQimti7iEDF8kX2zkEZ6gUCg7FBAkhf7LHipQ3G5TLQSX1kMcY8UNexVAJYWk",
  "key22": "9XRDHgD9JVzjskU1uFUSikdmcdeZL4hBnPqVxVGPctkmonYrFq67RHaDZsSusrxdbhVRX9qnga2LVpNuo2wzYMD",
  "key23": "3mh9XUSrHLcQm15uupCsQcWGB9PHeSar8LJwtYz8suD7JNc4pep6F4QZZuheuXqPCkFD6oSzMwJr1uC3tbdy8fXW",
  "key24": "568uAK4uvhbaLbF6T4hvbUEbHFpH7AZQGxtQCaoXnqC9GKTZawLtywzJnFt4stLPKH9nVBj72WLgFdG4QWr445Aw",
  "key25": "5gBvEabsShA5Z41PiPFMkPEZPbhg3g3mxc7V6SGd4mYayDxtAB1sHAMeBfY1wVNzEz4c4vn9qDqR9kQs6vzqvavY",
  "key26": "5KtCCppzdeB8fWNrRP2E4SZ2WFchJ2MHDcnCUK3nERcoAVhRLemwEHCMbHt2eNScQDJ2W6nHEh5WfgL3H8rMoEqt",
  "key27": "3SvcjsPsxZXMaKygL9qWapeJj5rLDnisyZgGKyDtnRE6AJ2tCtf88xhE9jkKUFkiHkFjcqZUZ588Cs3kzzZ1MqcY",
  "key28": "LP69vxp8bJ8C6QzCyVxo6FWXLB3yt5fSQvN2bAD4Pa7VQobCjoG5VJB2Bi5GP1TLvN9cRsAUR6KHSkYkpcUhyxN",
  "key29": "33BWdspQqPgoMp16XoFfAUeEfrUU9qbsSRJ7CHHQV2bC44HkZToPDeacvQz6fupC4PAra6Aptp6wgyxY3Khs7bX4",
  "key30": "45acbhfpfi6exVpLe3vB3WNmEgFyhWWPwJz7Qm5cyzxb4AzsLEnWGCvFEutrdVzssB9sRuX1GHMYdrKR6af2GWsE",
  "key31": "5M2HmmhRrteJnntEzduQRFiCg4yTjrYAMnZZuvKhzhMT8fPoFFKnHEgopQ84LW5c9rffHp6PoJdWA7cFjtWduUiT",
  "key32": "2g2DDP9pj3TP9HfgbbXBV6QYyNaBFZ5DDuHhVWG7Qn5V73pFZ7JagKqpsypb7NBHjj4Q5oerWuGkDUCw1HUhePv1"
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
