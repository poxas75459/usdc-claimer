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
    "45X71v3MAtCLvUkotQCygQqFWB5WBWevU9NH4zTvzBXRUbQzBfMe3bD3woZGi736MtYSJ9wU8BYPHVUvZketZaTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545qoVBaruT5F3YJaDsyuwYeBm1PkEZAo91eUzLC8TkmNDwM1QRR8gMJGsBYBpwJfo87B2ynptc5e2JuVdBU9DVT",
  "key1": "4nALozGu9muga6rYiEYEVx1nBZ5FC3GVaQRtmG4AisE2odUPmXqFpCrbWcpapkRGzrZGZPLBfgnK8ByhSo9hk3zr",
  "key2": "2hZV1qrfL1Nzz1LhXMNJTNB8qdyEEQofrFYj1AoCTwFX6vhbfebC54xb8Q8ar25LwowpF53Msfy69NnLxcFbLaSa",
  "key3": "36NpGy5cVX8e7bLCpcrRL8u7LxygHRhJ44pKkokRvs7yQdkAQVtfFsrZ2BouTnVy5yWw6vKgWex4p7JoaYRrAmoq",
  "key4": "3sZzfNd4r7s6Cmx1hNDNZBtKTtnRNdEsN6draexQdMYpkZ7pThdX8x6145tqu4NdjKYSpbGtT58niayK1N43tT4G",
  "key5": "2ewJ89YArZdXPPA7xpYMLfwzLvQTcRnjKrJy6ZA8G1EKQY5LhrdEHgWGv4P7EBUpRpRvXZv5AkUe89WCKPBWuoGb",
  "key6": "2YhLGqP3a38BcKABUvfJbDDuhs1eiS8kjUfah41rHLPy35ZCRu1bLUULKk7m88wZrE7fRThZJfF8B9jrdrUVMAPg",
  "key7": "hGvhaBqSU1uWYf8mGSnGXWeyL23QrGQh3EGiFgyk1hLbad29ZfghfAtHnqp3dYFe5c4EcyrqhXSb9xBgb9tCBSD",
  "key8": "3ZxpSWoqTRmXtfcjYBfSvAjdPd7XmQKu6Lt2CywJPqoSJyav2UtcAKHWVyN1qt1eRBC1k9tg5ntaScuY64CscbDi",
  "key9": "3LbTV8M82AbFY2u7Hic1BcWLrvo79j8gtsG4Vf9ZpoXKrtYh8QyZwTD7wuuiUx7JAS2nFcdqNorZLXFxDytJSLif",
  "key10": "44mWS4tN5fvsv3uv7PQNaL4Rpspm987w9unLTCRKsARfuyEbv2aEfkz7w7AESfDou234AywiBzeApuvopaEYfrEZ",
  "key11": "4w8T6ppCbCBJB5QSv8yfVaLvitEq4gHNbWXPq5fLeyrXFXGqgSHxNe8arwo6xh5TEwYaZriExTS9Nk2mYsYYeEvX",
  "key12": "Vpg42XYZFQS7m7GwH7ECdeAwmrvqzeRGSCo37wh5C8pXf219ZrPRxhzwssnAjQu95zu678bVnAR6RkPxffsqgRv",
  "key13": "AWiMrwxqXqbJvZkqotEzUXv5UPhDc9uwZekU8tEZWKaGgRoxKiyqP82yUZDWy2C9utypy5ACk2mDniLvvVBUPPb",
  "key14": "iXKv24qF5dQsq93wZzwmP4M2Ex2JcJ6g1c63qzDdKWqgKYi3yg2zYrw4oX8hzUnFfJLWbFVzXTSomr3Kg3vnxeX",
  "key15": "3wmUqJJAkYHsxqwqwfS8Rczc1D63ehpGkB3BbA5jKEhroB1bp62CTaj252rQgTAfkuaT5Vr35ufTH5LUNjPzhg8n",
  "key16": "3cwwXTiCX7W9sFTYW6DYXSUvMMrT9mqPamjduvxGGiiPedgws7qKzWcZ82NEMhkXZkcXi8QpA57NJkfaUa5AAPon",
  "key17": "633YArYy379vhuDGYLUwmtZbrr6sHaoxCj3AncrU5tFSoKiKhYhCy4UGM3M2DKEWPprxsNtc3NtsgWT6tE38Kk8W",
  "key18": "2DiLYdQMM6vvy5B9Ar8g5wCXdqRpQPXd3Fjdg7GH98AM6sA4VzHcezsk2xrz9oGLLHWojPDNtx2AQv6f8tm2wQdF",
  "key19": "JCQRqWZY472LYqTnZNpERJYzgqMRFkRiztyyZbcZramNdE12wC25BvshLnx7wBJp5BQ1MSE8jwrTVFzHQ92XjrR",
  "key20": "NF1FxDZFBAe8v2BeFFrKooAzsViJTbQzcq9qUBaajj1LoKMNkUhN5yviGfK7qqLxe1MXE9sWH2D9vDHMWeePBHp",
  "key21": "cbhDrqETiNXwes4RoMpiQNJtnyiHDQRvsKHkG7ndfAFRLnTrETYhU8MYEKzsycUD75Jd8oHjU4uDF4ihTsA2StX",
  "key22": "41qmzs5fLvZ1rGDH1NHjHxjFB67W8XYtcRF3oxWEovdooyN8z6obAUEjEVpnWoVTuyzWhAuUpAAKiGf1hGqZbMKi",
  "key23": "r6pDGf5aGxA8QcUasdCFWgpXCV2QG53APuUWy3LsWj2A2fCRbmdJwv5Q5N5jPdYwe6LdkbKxCqXFCtnEs34uDHk",
  "key24": "5HmdDQaVDTF1pJubz3FDXycH9airjAiakoR8oQqfvR35YwWXirmvvBhj1nSBWaERSVN5WkxCp88vVxQc3Kt9HJ2c",
  "key25": "op8iC7HxRJDhhxk4NmYF8ubw5jNiE4H5avyZyFPy5pds7KuZ67MSzn4ks8buct9LH4fhj3Yer5GYvHsunuBFWci",
  "key26": "csgAB11vz73sBrXfpBxbY7ezBwrvpnWhpS4UFomVs4rBPwumqZ4Tw7bPCXkueuXEGrkc8kzHtwZAXx4CDLaRLwV"
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
