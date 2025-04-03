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
    "VFQmgredKyJBv5wgriQJZ7FZ9HjHTNjXrpynhAcU9H66qRbsac7SyFVECMJ3H4uK7Gj7DdhHPhL4jG2GGPSsKQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wP5T2puTrb9x3eELPREz4ycvGWvMBjrrPKeKTzkyfAwoeGQQJBff6rfv9EBStSEqpcZu7RbXLX1cKk3w8biU3NJ",
  "key1": "cKGA44EmMCMenhycXh1Q4XX1Sxc8XswRR9aCiZ7ywSVfH91dBZ7YNw5qmqxT5Hxb3XrTRtrpSiyG4d2p6Yni4N8",
  "key2": "3ZEVf54mtPNVwm3uTe6X7fj59MyKaiqoFLfzct2SQT1ygNdbqFFDzkdeySZX9gZ9xZVXFzGjgz3qTvcHSZp6ZfDk",
  "key3": "5tyoh3LkW7wk7nws1yj9iJX73NaMzMD8LCZheVnPCezg53aDdK6CFXFzrkj7E5qdU7MYjVdhwBL7oRf35eayVrzz",
  "key4": "4pHzhXZWjzKixqQzErvaXyGDLZNy9sUURATgX25nRfXyV1j85jFbeQ3mKce7YRbn3oAZZy4y4hPvv1BS6Fh9UXDG",
  "key5": "47sTiZ66KtVJPW517syVt49NzbTkkdSeHZBTWBA4Xvo2sVH5TV6e8icH4VMyBBccgkbkoyQ8W4bVvc4PhxUbbsCc",
  "key6": "585VNwu2GNwdiYH1e3iHCRMV2H5FsQTvQLrFSEanhpEJXm9dZ8o7m1m685Auajg4bJTMTxsg6RBJoDRKkB3SUyK",
  "key7": "64UcUzv7yxcqre4uCAzaxWepWnamB4QjidPfB49jznnGSYrVhqcnTfs5jodf6QMEkxoXhxrb1opRKX5d8ePfsaQu",
  "key8": "2RQ2RVTxJwFodqVKXDPHM3Ammm5W9G6TmrsVRiD8TBs5pMB8eNGd4bDqmnRMgrdakiuxuceFno7qKR9JFBxQUwBd",
  "key9": "5Yy7pCTafSjFuqxCBUwfeDcsaeF4RwrPQtqf8XSAz7nNcUR9dzftNjpgMAUSdSCXsL29odqjxFTjygvgP6tM6xzb",
  "key10": "4nboTHUYK8HAunT3xdTz1ZFwE7ZYGtUi8ND1GhQ833BnygF93uVgNnXZMPeBq4HnN9sXCZDmtADoquQcbh67Fs2L",
  "key11": "6z7kPi1AseQYN8eyAdAo96kRPiotGYhcecFifXfNCq3FBmuQzq7rPJwZmYa1mpQYH7yAcTfLR7TBMXcTFuNWKxh",
  "key12": "4EDD5VrRNnGZVrxXzPx5pGbAEWUmWM4r7tRBPyLWMVRDQzqu5qRchrGi7ccxv7w3MCF2fGJqYtVQwBv1xAV622X5",
  "key13": "LuKaZTZz2GJsr7sAh8JDaF5X6bBrGu2JveQZNdsQVmFwD4RmofDECXw8kmqnsmMaHScYjosXCd4U4Nk12cSxaEi",
  "key14": "4zfaNvKWWAtpjkPB1rUbonDij7tMN41m7Us91apH9wpbWP1nULQ4HLCK4pYizrdCuuFR3CgMYo3Pqt2HJNnVfweJ",
  "key15": "65wyu4y6YCi615UN3osnEH5aBMq4hR4DqojWyBHx9FDCVCba4vFPo3KD8ar6YXMkU4weNSJZnGnd3NSv3ogQcRQ5",
  "key16": "5XsWTCA2wkpSYUjRBXkUziPtWscYYPa3MWd8HG8RT7kGsAuDaRV9zHXhp2YfPMQsQd5386925VBRCdrXRH3mxHSD",
  "key17": "3M8CyZUgsbPFZSw9BZGyQbTj64Pdga7tWtXtsPwSp8baAX5dAbKdiRRHs1qVAbzfD61QkgPrgX6VrYZthYoFXfc",
  "key18": "3AkjJpEFHgd5c5q15wz9NPQ7fkSKoYV7m2LSFycosUU5JWaRoRVCtLPXA6phdSZ4KWNxWpA5PDHCrcAibLiQnBJQ",
  "key19": "vMGHiubPxcWYtbCJetWZ7KAZB7mo6iSPNQ93EGpe11NxaryskhTCDATBGnhH7tmnaP753Ru73bifnwjTfXq4ujG",
  "key20": "2ot8bzdPLrUAQ6SCVBvfSoseseuZw5oXVnvpSjWWBDy8p6PjeuMYRWbBWyzEnKxePcZxhef6YD2xeqdkcm2MUFDy",
  "key21": "22WBnJYg9XN6uyFxG4wFfsH9S8pzPeKMZSVb3GZYxDF2uFUUWg3rZz3oy4gW52exFVrd8ChNqHKSKGVwcJcC8J1C",
  "key22": "57kptx8E8His7oGS5piNCNPFFMyMvSV6TLjD7cDh9rCgEbQTUMQbWpv7m42ktwuudGWnJhPdMBGaQzmvc2bRb2X1",
  "key23": "2iWRe6TMPzJnyqcMqE1HUbvLGT6fZBme5mT3VYnB1gMzY9ceRSCH8HnfqeVbcPYZGbRscPZ3dU2T9Es4yNwBzhDA",
  "key24": "2TWm4yVtmEt4zwJnKv7YmpRuWTM7UE89ssa1DRZr6FTRvvXToYKfaeeRQVkKf7WWSSSFhNCtN5dKfUa9yU1NwKBL",
  "key25": "48x36aadoC5czreB1sLhSJSjud6sbNgmB9xzXhmEXjY3aejc99WMsdUGhrPJpZWUtqxjxetoXd4TDpQdFd4bt4NA",
  "key26": "5MJ8njAvjszk2nzD33BL2qH1NiDMawQZ2hH9XvowFE9sN9q14wuYhrHSgrrDNwg8BsMkHTc69FiQujimpi6RTrMh",
  "key27": "4XorrUGas5wH3W5HivwzVjU5C9FRHZHDiQMTi2o6UfU3B4AcY3qsGbVqwdfCwDEARPhzUffM57FFYuaQFfKSkLvo",
  "key28": "5jw36fVPA8gG1qDTe1JZVQPZjqd35d5qxTKyRPC1dtZWKLqL9aLH924Gn8R9kqknMdSVmq1inh4zaVzfEdXadArB",
  "key29": "Yj759VBWky7A5ddjqPv4jEqVAYR5Rkk4xZJBszLXKU58jnGjxdKQLeqB6fFUtf31fWqJPMPoUCtPtMcfakuwjnA",
  "key30": "3tbqLcDLwF6pufvDKhmArtR61KyXUd8NkuJP6stvWnPoLLQgnENDvTNbCtriK7MfNTKB5eysctZjeoPuQczLLwPG"
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
