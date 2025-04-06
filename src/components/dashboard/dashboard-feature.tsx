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
    "FtpWJbEdDYKF2bRWxcqZnuRLcVPphBHPx5ExDDZm5eBxYYTHWMYp8TTYMXpaqA68jvxK7DwiQEnNqK3oWqtWJRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovnpf3mRzu2kbcad4wcT6tNnKdwBfYbnqvgXg3x4e2X5e8NxBCf1DCVJS2YAC8DZLsQmzTvVM85QnsLVqSvAEPL",
  "key1": "Ueyrxxec5mRBZLAN7FrzgBHhVbFWn5UjhJNFi2mF3YVPisfAgzmPuejEuhLZ9EbEecrMv1j1R4xDxexKZfSAiic",
  "key2": "3Wht9jbC5PU5CCBpsRw2PxgG4d43Rt66pZpNrsGKU5PzYtiRGAfAxGBfwspue8TVUN9tLYrtBkfH4rm9FZjGodt2",
  "key3": "53rRp9vKqd4xg42btQ4eRPqPoUohHu3Z6dNgnmFGyKnH1LtscmV5VJfxwDKnYi7AMeDf38K1oyn8DHuh4GkkZPcd",
  "key4": "3yE3g5GiNkkgw638zZPDCpX4VHzKDYxGKMaccDMtd1RQ9NqBYC2tbnJEAbQvcHiWLfExqTrJHkLV2CowGPcj7mov",
  "key5": "3C1XgZJKhLgpcGQRznnGU7sHp8gD5ucnA1EebYNfFbkQ9A5VjVbeoXi7iDPigyhwvkzyL78fxJSNcGerVufGL2ZJ",
  "key6": "5kmvkX6L44DCiqCKFiRmo822h5m8RdqRXS6xjWR9DwJMiRQTm4T13e9GAw3LBS2svkEEXG2SyqjTqYX2JDfx8XHn",
  "key7": "2NGapQRSbFKZPfnft9wc9QY5iPMHkpzZgvAgx7C7bK1QnxThSh9hXJnKcD5wJ3Lf7k6mAp414eyJnVCowbzM39tC",
  "key8": "2Do7n4WFw4miMa1W3q5Pto5BWtwcXFjPZT9fdYogWztNf8NadiFyd3DpPTTnKMQnVvh2xgtBF9NrHA6bDp424wrQ",
  "key9": "KhE5ChwWCrkwXFy8GxYNSHaYET7ZVpaupv2tSQJX8rqX39JB7NfC6i6ENidjkqpb7y2x4yA7NtP9nNfKnmMtW2D",
  "key10": "4u5dYvdHFAboBfPXEwUJqbhNaEi8YV1NBGVP1MjoZF62TtbWXiqzxMTm1ZzRpXTiDb2ne7sG5kTMunDdcv5bJAUU",
  "key11": "3WNNr8kpzAmT5YubLX1gQxrrPC2fE6x7PywEci4yUxyojTRXrNohADTH5DTLhT43bTCEZaRsDYp7v72SMcxMzHeu",
  "key12": "4hW1LWr9hRM3FPB1ReHwVDcFiXP2LBzpoxK49GrH2sE1h2dxsF8x5gUFwXc5NHYG3hU8tf3pysABH4dFsP2ST9Hc",
  "key13": "2zLft1ZntX6kBi22XRM3mnu7y8PVhdnD9rdiQuJ7ZFEwBbDmsnoGscAteLEcRmvUiSmWhyQp6a3z83Na44WyaU5o",
  "key14": "66SogA1JzcnFiouMhUvy8U8L4payYMbNLp21euBCuYAqUiyQwzPAppaLfrPQiMpmPWovWm48TZscFG9N2zxWcX3H",
  "key15": "Bz1Ana9QpApmEJeyKjyxBNekk853FSUPVs8ioKvSAa28wmtwWbn1ztzka4fNjcZcUdSh2wQBa8Eeauu3a2FDhQD",
  "key16": "FzTotNx68eyTGqYVVcZv7UAP54vb9cjfMZCvrqjoGmxRqY2mmoanXMCegKdr8ePLCx8nzSQTvFTJpibNXLGwmEh",
  "key17": "4tNxdHrXNzpaqnboyMS8cxZfFYoEKVsBqmaE7J4n6aazFvWT57AdtE1K2gjYdNvrSmBNgD6vSgEYwX7m3ftrKWZ5",
  "key18": "28GypoXZpBbPRNPXPvyuFcS8kURAQjdUokptEopGdYG91v9nHaVv5KRvPbu5CVBy9bPFtAhwsQPSsy89sJoeQzUx",
  "key19": "2cusV5UowuULNZwGezyBdvL341D223NdmPWWomP7P6mHGHi8jDiASThuDTKJt6HsAUmrWwewrDpg8kKqt6C95SLt",
  "key20": "5ikxPqt8MAgsKmBCovG1oR66nFCT2k2oc9QaQkmrFToiAMyeTMKduanVsynn1QhLz2P2DLzcAKQvkqyrGxEQFZ3C",
  "key21": "crQzSMcVnKs5WXs5XFYmiDH5jxod48xVHvXy1vRvasbYFmMUAgjRb9FbSLH36cSAfp8HEd7wc8NYfpWpF6FzRi4",
  "key22": "2trWkMUjS7y9DFMSJbMejGiJhSFejCGMbkdZbBt6csaAz1aMuMhsBUUkRY4mKb73HFssjtuWZSPYpETc2SU65RaA",
  "key23": "TwjgrRtMkgHNZCkgENZGDdNYuzDKPQUktQvA9vgfX7EBoTn2eBQXKGvgfyeo8VUdea3s3vFj2dUFsnno8HdLDKY",
  "key24": "3xpMg3Dmi4EV6NSxfqStsKCC871M4W5kwiUaoLjLNDnoLyANLUR7yFk2h5HoDofbFjGMGSkgoyYFgZsh5YUZmmwo"
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
