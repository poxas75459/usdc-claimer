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
    "2MZuZToE9545GkbdQ9hY2jhaYqvxRzk4yj1q2Tnq7kCeW5o1YQZS6az9gbLzrSFFdRQCaBG8vs9iJgCqf7vSrRfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wSobYYZzmpDuTsj9b2U81Epcunk1MMzFFkJfFYF1sBfgannVfwqCGrszts9rM9u5Gse8a9aAJSs6wcA3s4jdUa",
  "key1": "3Rw7N2R2Jiss5vBnYdSYsZ1Py9mMm7ea2ngAiKbhKpyLWhRqGviHwve3op92aZhtrdSHcq3K1c57KWvVFUhX54Je",
  "key2": "5xXb99kiDDPHATQHMvAeQfGvvkHwTR8rYQA2GJKdoxLW9YMhSiFEPEtiLzZurDGrJdc6MU72AEFprtzkN7kjX23a",
  "key3": "3di6Y7TwMudJsSTsffuHhT9HaCWx16SaQPP5dribRPFoZe4iP8MTP8mxWtzL7UBsofA2LvWVJ4qc4eMT4c8UQg4E",
  "key4": "AVegHSC2bfqs2ahXChvvs6qSUn4EFhC5rafaZiXHUE8dNDWmBH3JDiaKYyb1uiZxZaz2DWshs5CZ8TGbqqXd1zk",
  "key5": "5TYmDWedXbXcky2WNN7bm7KXMw8guK4JVPqCzsMPbgR7f6ebpoYMaJGJC2Mm9omqJ1kK8CUgAYutTputL7DbxRpZ",
  "key6": "UFjNUAvkSEFtWGDr2uQd4XdSPiJgeQr9JANk7eoMmH1bS596nZ39wmzNHvxeYh3iwYwZLhKMAXrTcBvdFZ6FauV",
  "key7": "2MEi6UvMBTSw7qRVrheqfbGTDarid341H4nPzbYMNMg6229zQQRYZZy3Nch8kTq3Bhi4FTomKSmSP7PnqKJcyraF",
  "key8": "Gg9vzzHhhdpSM3DJFAwLdzGKMTWKdrDctQ65HX9dpD3syU3CuYtu4E92X4FYBffaKxzntXbRwAACqDDnjc7k5ds",
  "key9": "2N4pHtG6Up4X3BiYzpbzKx7LoD2P1teca3RvpEsYxGSYuRJxQNHERsgLSwDJnWJWVgs7kKLCAE4sL4Dq3Ja3fd8f",
  "key10": "3tesGwHpvAenVEfMXZsrmoTK5sUeMsYZMPCtFdqqmoWFBkC47zaCF4vrjQ1m95MRQwEv5h3KbHwP24G8LYUST3a1",
  "key11": "2rZC73MGccVXCh2CzbtAizTtKtzSdx9nfCFh3TX4nhXHysEiFaLPhACykhdMe5Q4vQiUv9FYdHqNFCbRP2sHBA6Q",
  "key12": "4kLoPfdNtPvFNGdcNkL6mmrAnQ3LuT7h5ZpJrzqgsVw2vrZ2WB1Qtsc17bNQ9oEgHsUvrVq9rb2cVtCN7gYSg7uW",
  "key13": "3W6JS8V6ciD4aJ6PC7sGXXYduE6euxbqLNq9YjZLh9G9pwgTxKkQ4vjw2mFx3NTveArc8SGJCKf8eDpeHuGeXNtb",
  "key14": "xYeGo98QKWaQpdDyGkfmyfSwpiXBBKXc6P8w43iJ7vjSzHAPDsrrCnBVJ4EtH7y7cxxVZeZBvVc1NTJYNnMLL5m",
  "key15": "4J9M6SRRoPcGTSgKSnfuD67Mghy7rdJBWrLDx2cXMVbQcfP2F1DKD1meEM8eoZNAjeyoRckcdnyYE9cnsQFXfwSN",
  "key16": "5xD4Y7zqTxYqkEV2X4KrTZ1pVDxgdTHW4Mrw1CKQgvLvZ4hzGgHJDwvWpXRd1HbW6bdEwAigBnrb3mgAJZucrxB4",
  "key17": "5yMiJdoRGV18MZEvkdvNCzvHPRTocEcKpGXgc1M7dhEXdX8ab6T3ttJgGdiqm9e2D2xUBVVQJRCJDP54Y86bSUqT",
  "key18": "24aRZnue7WK4KdDSMXCjwZCRv7hN1KawVgsKrNXyFuMTiRVELoh2pXCn7KAwrY2LH8i8u4aL9ftG2rP7YboWZh39",
  "key19": "2SHRDHXqFpk7H8VEv9kbJA2jGX5iSXx7jX8DSp2b7bKu7E5UdCbfarw6LHUs8UMrMsdguK98jqgyi5cqRd16mVBW",
  "key20": "39ykqRoF29VEZVhpubdXhH9FSvzkEHf66QXvBJD4G8j2u5KhPJ8iQS8rJ7caHwZeDV2J5nL3qpx1fk5wLFizewD9",
  "key21": "2g2E1rYkuEpqdYkdU1DyCGGmZAhpeiCQZzTtoBTgRVfay6BqAcYrLTrmkPNcRt8mMBUn6kdaXTRRuLYhQuwSkUQu",
  "key22": "3YBRhWraXnTBKyAvprMez1UgsmP1BtgXqdQ6xGjG5mmqsdYxkBZEEyD92HTtHVHPPvXU72vhudH1SosLgB27bCC1",
  "key23": "48FEQqqvh9jbdSaGGmwYp41eVgM9xZ2sqVvDmKx6qoNBoVNQSo52Ry3k1qUbirUP4iwCY434Xywtd4dtZ2CM4t9c",
  "key24": "2koDVGSNARFi566jCxELVz3UrkctV5oXsLUwAQGqrdiebqAuUs93QgT7L2vfJJAzwx4bZbuFRygNeuiLt5ugxgay",
  "key25": "2cYBScUG6VQ32Y5iCHFNGyJDQnxSGHHKB8hvH6LtyEz8jKPMuLA7AFPu6sDFcS7DePZtegSzyzkndgKWenKPSRj8",
  "key26": "4DkCGjGWXBFmYvBXQrN6w9394tsZwnkGu2YTtkmbvHrQrCqHoJH9UW6ypjYvqnaZJ59x33uiz81bkgDtcEQ6SrHD"
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
