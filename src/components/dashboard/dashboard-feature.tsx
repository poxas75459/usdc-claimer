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
    "4rWSXL9VozDmfbeBtoJXecSGwHwNTFUHjEiDMeLTLkQvBN6raAoS8MD36g9nPRVtH1jj6joQYViBAwRJfnqrRmMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gay34GK39tGjFAsMVJMySVJdUakVudKNtRu2PT8Ng3X4yX69Mhv87pHCrkQrG6pLpmUMf5xkXFz2xgrgmZCKbeQ",
  "key1": "5PvErh5xqNYwRBMjQSEaU2Cc7hTUEacL5bkStnEJ6diNGi6Qybzsrx7hCkHCX3gA1znDbMwu2Bz5W3XzTUtr4n4j",
  "key2": "4MX1KD8B3N1bxcGTD1fZ7zCQHVMAM2MNftRqbbx4ntgjvFS3NLepQpFzSdK3Tj1RZPJLZrw6Qew6UEsdWfpp6Frm",
  "key3": "3EpftYAuayoZNU7wmiH9yXtuB72UZERA3wNNKrG2F4dNDmVxcsWTAcCFtSwt5zEDzFd2LXqTwZtoJahKUqg2fWoS",
  "key4": "65ua67ws5WhqFsraNwXNTkejQm4qnKBDDZNiJTi85Bf38B9GYjxf1Xg6278ePJhoJtNTbMVpX3ZDuwh1V8mFg3cY",
  "key5": "3bP5xWjydBbXeyP5TYj4a5svjr2VD7edpA4H9xMFaQvb6rcCLkSTrbXZWL8h894NmvDKDA4wh2VhHq9hMQtzWWiU",
  "key6": "5VJ4PaUXhgQ3oqrzQ3Njup93f69CemMMp2DsobH4aUbG8uEG34Y2emVxpf1a8A5duNQqrCv7JsWbybo8s2vPVu9A",
  "key7": "5nt5MsoQgQsBPPMWTK8jFRBNTa8xAruuyQ8UHq442pKrMoS5N8qeFaNsw6uSyXfn9rA1yjsrsdXi5Qy5zJKNSnCe",
  "key8": "46aaciqNm9MxvcisDVKTwoCHpT9PEntShpSouBBD9LGecZneaxzdKZgqHeDHNKV954C9MUu4whRgiPGQheg3ZJd",
  "key9": "5j8zo9jdBAL8xkQ5zS4qVoMWNkpms2AYj14Q2zLKo6tvhoq9RGf28vmkiGB7dGu5RJhgfN7pmMufpCsmmUTjTJq",
  "key10": "5fY9NxiKMwYfiAtdy1rQUsghWDZ5Ub4GwXnH9FAEy4uB3FFMuPhvjcf1Umzrm3HG8Tvb8ZKHNcCoTQLwesfobqr7",
  "key11": "4jteaab4byRT1zokymUzqFN4aRoHvZeH88rgf6EBr7XSn6t6B5RbdqbryuGwoKEbozpjQTDLahmfkBY1LDVtp11d",
  "key12": "4rRKQoEbePrzNFUmJgae6bJfxwAtNTYUf5Vsz62dCEEwdsteQFP85qShpRTbHvmfqU1F6J5WUaRsXv7PAkk4tHUa",
  "key13": "5rKb2jEBBzxVQauL7EMcsskVshq9c5zaPKHCVPhCRCbaJkaueCJSXA7fZbLnFdgRUoxCtkBfhbKq6a1173xSQTEa",
  "key14": "eMU5v13EkCjkBnJZYwTgR5CmPXrE3MPmcb3ksiFjKyEBot4Z8nykpEqVvHwh8zu8HjzVjCbkqqRHrvTeECTa4MQ",
  "key15": "5qknQtxkwg7yfpGJRxx1aJkqdX38nWEXF825481gaWYSViyP4Sfw6qMkKYFC44BrXeFaSnAtdRtYEC9ju5o7FiPU",
  "key16": "LBP37zPEwiSkeAHSTZ9vp3cQoCx2wQawHiosEA9mHtKXTv5ogCCqGuzcR5L2tuFUgedxPqrbF6LnbCGrDUXLJaV",
  "key17": "591LFSzRC9J1vCjTR5DYNvbdmucdyXaiVveL64FY3U463ohc8WRhHZECrBkzTL4nYm9awJGtEb2wLgy2qYRMAcYc",
  "key18": "wTq4SiNKzehoW6qrzuUEeixnUXBFhnGNEse4qnJ3nZUhuihLmT54Gn5Eu11s3afbVuMuECmykY4YbJdbsWPgUQE",
  "key19": "SrQBUgRVrXiMhJVWDqFEooqYf24sp3LNyfs1v5bF4DMMEbbFoAyfQh2YNtXV5m4EpoJByEK4rUXtdXXztjqxKNH",
  "key20": "EYSY7nxuoTiMwx8YTbMyXjopmFvfFAYohTwTp2Lts5jAVypGZdjUJNWSvRZKHWkaR5SgsJdycyLndZXmxWn91Sh",
  "key21": "AFx5z6uVz98UiBtm8LfBPrrWsQadVW1N8jyupFDPJFdtXcuZLwFFWyb42BgRZqmB3aatrbgZTTCURu9nEVnRevz",
  "key22": "5qxt9aTWYQkmC6HXjhPqABRMKQxAHE3AUS6mf7prU6X5U8UrNHoLdatXWQb8eogdymcZ4Lz5qKjmUBneRyTtudCR",
  "key23": "5mAAWEBUQRZHVvVnFmeMw8Pap7VtYE7ADXBdoWcHPvwi6XckRgvWnaPbGegGzUYtBR81cPbUjbB1EJNsUrDZ89Et",
  "key24": "2qnx9sUtRuiRAAMdAWqBGBAzsUwE3LuiUHFmyM7Jjy7Eo4vaiuhX557kyenXE9WD4jyen9NjCWPvugvWN8jXzfDc",
  "key25": "5UakEyTcZGiuj3Q2mihSm2s6e9yQToUB1Frfm4c7Bt9uL6sCnYwJPHe8aFtgYuW3UpFAdsyN21W1dit3ZqASp4vL",
  "key26": "3XJhYSn8gAcTzg22q7hpXynTyj5GUXD2TaW6mP1kf9NotutNAvHfJgHi3fnf2QvmC8uJvE7NCp5EFafWVWKwhMrx",
  "key27": "3X2hncJYXagQSZFfgCyQcj2xZafb634i8fGgrKMAmnkvUK9Pa1EzFtsGY3nwY5jteY87prL9rCdFJruTcqkJyMip",
  "key28": "3T9mErmeVdEEMBUhXEE5dzjiXwtisdSHJQEUfqpjAXsyAAzRjwC11fobgAAQgk3FtXSf19i2Th6s4ppafKbSZaQg"
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
