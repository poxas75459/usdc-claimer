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
    "5MnM7jvtm9RdL581VYoRD8NrRED39nGxoxmsJmuRLcwx81RBCLDENkJJ5S589VfCkEyQh5ZmvKuvqDfxKwxSCXvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7V7JeT2iTC4cQgXZbcEoxrhKwcbeLB8dvojDjXDJGKWhWCMafM7iy1VncnXnRHtoaRfc6VaQACxhMMfhGVDqjg",
  "key1": "5ut7upwTpTN7QJbkAX844Fo9iQK9Nys5WZzvjMG5ey68Sdtiab8f7mAqrT4dodhBq7Zo3qkNwFSfhn2mF7kXqvEh",
  "key2": "4MVYmwZtjJa1yUyTBkbNMXXjo6BDZsBu8qCH8EW7aA6xyr3Wk4NthJJksbSfixw9PeaHXb65RzQVrGrkfDEetC6X",
  "key3": "5nozwSRWQRPfG2STJakPfEhAc4ts6onKMBBtNhtdx2yYMzo7ELousLPwZLZueTx6z9f3cECwJh9cRCr2oZt8NMCD",
  "key4": "os6XiJaAqr6TgNUUdjMSey9xD1mBVZMbQcTmp8orTbZPjTyMGUS8EmAd4gersYrohCknWVutuc6FnsF1ToCvkyy",
  "key5": "CeZ4hG6aTc4fxamt1Nt8HZRpEnkQ93J8DN8e99ydKw3tDcGFwxsGmnconqQZCKwYJevD3BMPJPH2iMTmkacxTu3",
  "key6": "wQryacSMMgjV9DRiNypqi7Rt11zbx3ASsnkjSVRBySMMhsHhk4CJQLTypSQRxSb7WYFMvohouqM7zMHUa8qCow4",
  "key7": "2v6oXEKoieF8DahwheCXH1mVtTexmBayLHYut9MADQ2xWByJsitdzQaGyFC9qeQJRiNTmzfTDnmFf5CqaguPu1hG",
  "key8": "5yKwRiotuVSvazQzHmoi3H1g6CPjQCDWZzwGGxAhhjaACvc7wCamQd6zLnPTWoifRB8X39vFh4Ai48ZC2WpMb42V",
  "key9": "4w3sMNy7pTxqDfFUVN4UnRuJ8hjFPTqNbJHD9RZhKXTi3V6qDpzoi7bSz5XzGLkLpzZXmNU6VYLnT7ZTNFr2gLmt",
  "key10": "5xEfPLjjpJw34R6X2Nz7QkaVxkrBSiCCBBmRzebaNCCg3LxWBgwoWBs2YpLSCXEVqBxcWzamsDZQ3jiM7CpEhwEQ",
  "key11": "Lw8Err9mu9NHod3vH8jGNcmNpcYb56ecWhUe5cgWfFZZ8QHsCJj2ar28p18intNh5B43WjmLqS5NnYUGqCkmmLW",
  "key12": "3assNkCFUQV8VHbeV6iVqZ2766EXWAhDidmh8N3AFi3LCkCBHAciKxZ16wfKkRqYcKV9GPaoVzaDy7zGgtDJnECa",
  "key13": "3XdkdYBt5MavUag5sZF2iKxWjD3qtKpHeS4UmX2dWqvKHxwLaMVYtUM9gZnwxwsLmc4akihiBMtV1WhkypaMVHf",
  "key14": "4CwyMhJRL3qvPsY77uB39ysDqyDRKDK8bwRYxAL9GEWTMt2UKx6p4coZZyFHD8QwHHEhdWmFniWRjw5eXJKoPtLD",
  "key15": "2DT3GJqGy8R9rpsgpmMM8JVZ5NTpBgmzcP6Mf9xq8WqGp74xHgn5RoW8UNXfUV9dBK1UUsyHqV3mypBF248mG3Nn",
  "key16": "4h4zPnU2hGd1hkJqnXXdM91pEZAzREtsTF6iTJz8xpagCDN34st6XxA2t89ho57yQEhYLZhbuMZf8pBKrG2dYk1Y",
  "key17": "5ftuEmo6gbzuprkdjGxBG5xQ5KfovZ4geVPPA6qeKNVK4AYABq7gpDERejK97VEninygutPBtasSL5BRJiLdiY8q",
  "key18": "4BSCDPfSxnaHDC4FvPUj1kVRLLLZMojTQBa7NCGJs9YS96o8UT8sPQjw5u3odJZWVwYiHUrHZYKxJpebNCTStMJ2",
  "key19": "2daPrvvN5Cm45vr8t5LYtkvaQikLmoRdQLX6vxHQd76xNg8P8PWGyGrcQWbgrWfNGHSCX9LTP8Jyu2zQrB6aydxR",
  "key20": "5DfQcRAgU4DbvxuqoafD4ix5iaT97vTN492KeD4jCTsBNvBf9mQckPmdLwFFcRqsNKvE3U8rGXJTYDmRJGeqzuoc",
  "key21": "2pAYqrmA1JWsqLaREJuJkZEnzBe17GSsRTiRETt6CdwiuxfWNTu1ngytNeA8TxYwukFta2MjpSaY5JV2e5wbfGBP",
  "key22": "2pzNia7emiXEQyZga2eTd8idByFgR7oFYVF2SEFezMDfDLiFvCkEfLwMW4nXWYexQ3ddxgwgrLk8DWv9HSfmsmm4",
  "key23": "2tEBZQKppcqrQhiyQZCTWL42G9is7YoBz4JqMsDSZSgbGZcgZC1Tc7CbApddgkBpPEsmQoWqdAmrtbR6syfhmQKf",
  "key24": "3Gycqcs12we2f8rYJ6E4W1pFERegNYYxHUNSe1ytnG8CAz6CE6DxpuYyLTA41fTsimcAGYXXdXCxsfXjby1tsvFE",
  "key25": "51cmHQVCootvDG6FLMRwWtMix5QufaengfRRtyMNLqtqu4RLEaypMEXrvn2gBPnxbkJdUK9gunzo58wt5d8hkbCb"
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
