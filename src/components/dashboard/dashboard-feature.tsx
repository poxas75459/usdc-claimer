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
    "3kBEpwhEemupgPdEvau4jtxktaT6kUCP3oJYWiyj8D686yBQNpNu2fix2eDC2wRsczm4MffTA3xknTYtmXfDcf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6U5c1HBsZJZm6adjaYAjEu7cR5ggw57Jf7yZivdB442J7B2Hf66AcfWAYvBW2b6vmk1wrKucfbkBHwbGmMuTFnA",
  "key1": "2GKf3GX3ru5k5RYXwEhappnS5NWxqriPtu8mh9UjRvCdJfzVN4oymCsa4jKDEQwrv54AvNPE7K9mNjF4dGYQTLck",
  "key2": "3uqs2z8MBToNJQXPNj7kt5Hczuo6XvRngDH4Tt25ufYbH2BpE2N1kisQRN8jvepmuxD5QQzHbHqiNmoQfaCY2uLz",
  "key3": "8vouo1mSxMESShBLDkW8P7i3ZHM39RBA1x8qo5EvWvgPbAb9AFRU5LoXrBfhZgYth4QDCF45DR5o4gP5vZSMyWs",
  "key4": "4Lzn7e3566repRj6JwfwDDu3UrMqiJ95deA4xGNPeo7Wp7FfYA99HYokjGAEZD7yZrgBovtVj6MjTBno1n5gLnzX",
  "key5": "5Q87jbzWdiD4DCjANEJ2yVix5qfefUs3aU7TLvoRUsJPrueA6CD5UyBNNXrHyCYyoAueSJwJuk78XE7QhYsZTriV",
  "key6": "5MhEsgBPvQsLt3D7ZYGHbtzzsZ447Bjs98Msj38P91h9pdVR2jTEpFs4VuFxxqn7Q7zgfWMERC6gF4mi5e8g5BFA",
  "key7": "4fjc1FMmTHKKm2rsCkoyRL291oJ8zqpz4hNfskTKioHeb4yTMxHvT17txqKWfsnEmT5bupzQj4wRoYrrQg1DXXPH",
  "key8": "3bgaKww3eAtn5FXHkVpgJ3fxhGnT2Gd6BURF74WZn1kJ4n9jmYJpTFTwjq6YnbqkmNzg4gVnNgiLSF71gWcjJHnA",
  "key9": "rXYzErMBWEbpKLzGZ9ApRKmrT9joRiZRy7oZ8sSyFkLVwqtx9twhvVGe6sPDFvdhDXGKRbJ2F1kPYK6BzCvUKx6",
  "key10": "t3zjgTocM2J9RPF1ZktLCh1WykoTGowQgdtDoLjFRzdQtMULVqvXPshYXocgcqCRaHJvi5AMSHTGuRwy9zKjWgL",
  "key11": "5nAkf3xF3vmg7X3ZH1GXHXLVNV93FT66D2XP2CFQh7fq1wBKaQcP9JQxmgHDRJ9XfXG2iGDwDsLnLKpKeA2AMLt1",
  "key12": "5Zy9HXcNsxXRezNbwoSEFoECiTNnthvAdBoTbF6UGaaLVfio89XUV1djhCh86NuXk37ejoaSjQDFTVf9N2pK7tCY",
  "key13": "5rsJQY6qA7UDv1JuTcn1zdLwbYoJa5rKDSB2guQ21gjhJLhxMAovMLuc8E62a5AxxMf5KcQAskWtJFNvifHk7Y2o",
  "key14": "66xaV6ieLCeNF6PWijgYWr84sBFgcLDFy3onEVV1273nJ7TGPk9QGzvveiRtHpDHft8LPrDfcKggYCQUVAoL9fGE",
  "key15": "5yZd89DfXCGo5DxFwDJJtSRhum1S58XMRvdiqR1oUXE8jdQt6rfoUCCNXtDEAadgTW7tcLrEPUeFYLunZS2UVarF",
  "key16": "2nagMM8kyjXEQq24WXkpeGmgMW6iWEaNGNhNfsb1QsyfJnTGzJ2GBZtHr1xCcMTBocE7DDgexqMCUGRho8pA4MFm",
  "key17": "2EYZBnjezEGisB3Z1thMqXQSwvoiqFtQV59uSawqEXMB9THPB26KSnqVfysvjaTvvs7zvGmWLy6zm5T8gTiHJshn",
  "key18": "2FcdWEQFHzJHx8vfLgnPLKMNeL6TiQ1Vc48sdUz66PmW2VCDgUBRQv1tiAafTqepkobWZCPo24QiiwsELQT9AB3y",
  "key19": "3ZUJGLTADhJFbSr8k1qnVSGaa2ZSVKDdistHMzUYQxPCXHWS5nxtZdhQPoWYbiry7SAAPtawu77niLyo1pyuAqiD",
  "key20": "q6iFvYsmYpz8HbBQpQxRLNw6w4qk6bAdu2mUfwryJAC9GNab3TzzzodK93qqzPFpBGChTVHJLfv6uPZnyiboBAi",
  "key21": "4Jb9jexnjxDRtsHEXCvkfUQxWrtPGQvkFq5nPB8aktaTgs59WXYX143TuTPxeMFqgzDwTdpPkwSxtEe1XtFbJSvc",
  "key22": "3DPcGcoJ7G55boUSpz9k72TJc19MjquyeJEs4KDwpynYQ41JdGkvVsSwJidgwo4SYahxJUcHkUovVi5Go38xKGb7",
  "key23": "3mHNtyeRhzg19PrH6sHjtVLMa8sQP37eh114yawZNQTZQ3ULsjmVygZNrhWLtYbypTfRyygkwbmM5ErspLEZVQN2",
  "key24": "5jmKJ7GjEh3QUVRNqtGAx3c2ynY2fuMWgCwxApXyGebMoFGmZV8Jj9xxEkoA9wsBLZmVep39yYay6c65yb7Cbq4Y",
  "key25": "DH5URhX6q5G46ZuZgq2mvpZC74Pa3hRXpHQn5oVnqwQqArKzJi6rvdbzBnAv3XDfpxgfbnHYssLqrKRJ9hyT6To",
  "key26": "56G1uDMVHzcjqFVyhHbrymqY2ucP4bfz3CPMB3WxHCd1gXXH7hgdA6amCGUmwUMZ7etH9HLe3t7SWF5VKwSP3zcb",
  "key27": "2ggNC9THPxbzrgj6FPh6pfUwAJgfJAbJWkW679SZq17xYWKukeNRXGC2638CHctaHikWSSYsLPxM3tJpcEWofvZH"
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
