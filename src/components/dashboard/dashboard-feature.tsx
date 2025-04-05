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
    "2AUCpHGrdwd4DWtw5vbi51ZufgrwCNpbFCfPJ4VLT89HAe6xgS91okeVg9jvvZxgoopy7Z1hYJzBpG1n33UR69vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4ZvxS1Rsc2xPE54azeCfD9GL5va39jjrVAS2kTnRiY1qUDgPMca4zX6zSi2XqureFmLKUuswuR4DK1yQp2Ndh3",
  "key1": "5TZSisfBUg4XTZRHTVQRzVsvVpnKdX2PJFCDYpPCH82mVNZWAVVUhByALU9FKeTr1YVfYdDGmThxtEkMXjzs46yv",
  "key2": "4SgEDe31GCGwStUFRembjKjnJe3Pe2qj8614XDaejnSPSpJvRyJDQfwyKAVkzSxTsgCePZBSVu9XwTfXVDPzv6en",
  "key3": "2kJV28hMQRwocBUEZj2NYBP9rhN6sabKmsQasuyZ6wSaHAH25MSd2nVki8R2Npf53g7ELUbQHc82RuMpfa9VTKA6",
  "key4": "6KcS52e7keDb1iFrsZNJ2CJpNjP9GLSNaTko25mttvKwNqCph2s6CyVULXdj8M21DhoWcy87NpNpWKdjUaFAK65",
  "key5": "5sWpWRocGoNqKpc4nC7GQEmmn8Vwim5AszX7rFtHp1j7nSQaxXQbjb2EudArJ97cx5GLMBXoARRyuJ5woJjaE9ny",
  "key6": "3WKsE1TzH8bL1E4USPLTdNFuf5kjP4UJAaUT7sutgfTUojrzQzgwkY7CWbqr51UKixVZvSHY7MxDwVjfwABGwVKS",
  "key7": "6UqJ8NTTL1ND1A4NeEvJXhrCNxugxGzZhWHEC1uacZEcZPFWjsVhzasf6AjQQXeBghAe56AprKiVhbHYNVUM9i9",
  "key8": "2sr3y8rRW4nrgtfQb9CtESWPAQZ6KPGGg857EpRsVEKdou618iFBFmsHN2JZTWfDsZx75koWzW1VV7fAYenk2iDJ",
  "key9": "TdNsxvZvTc6W3v2Y5PJ4AKiYYfiSA2HsqeYRrCx8Rk7ADrdNLGSeduo41rLXXpwmZkV3376XuyWYbvbHrLC8bmv",
  "key10": "kBi5jXV25Y65j2wdiP3LPBoYQ1miQa6iL2cBVv5iJswwkT1ck4kFWKJ4zJ4DWBa9CXrjkbsEu8NUyU9U6KNF1cJ",
  "key11": "54dZkQoGjX46fmK9zehJA4XuH7T1g6aC1LpyH5fxVTQPfkmw8xMxwzi7Be3rMCDLRPXue8Vhqdmdf9FGtQbXkhau",
  "key12": "VjevjP7rDkPkDzbNXGJWfACmuXzs63C3wR3NZHE9pK8JSqxC31KBD6tgNKDPFxBYrSwBusHdgJDR6fsnCCtU156",
  "key13": "SpbgNQwSM9g1u6FBGmZ9ZmysDjrjm5J6M4cvL9thgGEYcUWmQynLqWU9bWMyoWjkoH1XSqtEVe7wF34ZXXNeHPU",
  "key14": "fQYm69BzLuEUGQTJxMvbH9kgH4A8vH2SjsZxD8nX293Zw6Ky6VX7ri6pEVJE38einTUGpuePGH7ZjZC98HpTedh",
  "key15": "3KYB6mKYZUJVJuukWhztQ5cF1RAeatHQ9LeRWzTpY7uoqD6ctmf9pwms6Q2VNpg6S7RBXT8cqEeqfuXNceNtqgUx",
  "key16": "3w2aDKyLY2KbMF8NvJwM3WvPivJMNJPQhh8BggkZe2FV1aYFnDJHNzyaQHcowBDprsmpAzZTAs2DwJ9UtN4HP6EN",
  "key17": "4Dpn9vZL2k3wxN44je4nnLBWarKcFQw3kcVPa3fBwLWcmeqduFGkdBqztBTDrnJNr8mE8pXYTgbmNQ41ZSxCxSJ5",
  "key18": "5FXAcycpuRFSjkVA7h7WYANyTB9QLNLQmoV2oxtrGSUQ9T4mkQuyFP58UvoiEb3kWq1YL9A9JWyrQ2NSwZjVcXVf",
  "key19": "3zj5h5gCHoCGEhaJjBVyPRHx9NtifWJsu6QzAPchjC5ns85A4LB1j8hFBDYUNMoo5HJuDYXC9tT5TNab76oSQdgw",
  "key20": "3SjHXz7Ccibi4YkwfsjFYkDZZRjKfiuZZ6UVSzyYt7z36NSYUMPE1qJU6QbqnXLgyzFRhLQEqDEftzMenXKxYqCb",
  "key21": "5dmELzU52jAGgr7RjgDmbPQCDxGDnWwxMWsM7EMkGzQjBWFLXPw527pgeqMdPLj1Az4BbWoXote3dghCeGhXGZda",
  "key22": "5ja63TizSWQXpCNs5Ee8JUpbfhrbHt1MRddSCb52qwVNgGRboNxe35xLHUKRypVk4ZRzXwFXwpXhdtJzGATEgCue",
  "key23": "4bVidVcSbeP8yH71o53S8ysxKTeAxDesEJK2P62CZZcA1bbEcz9AQRBTmwqhBz9WtsDzLHjnFvjckNvVD8uy6Xcd",
  "key24": "5R9SbKwgKVJFsNA5vpkj6C2T46kFnE9yzxUNyrf9hyaS2ocsP9d9YRu9uCvMFYJZd84vwAWEf2xqqp2msnswckvA",
  "key25": "2V6kuyuGTVTM2LACdmRzgaavAQMKxW6BnMSDe2Q1V2epc7aA52zXuA4aJHWw1WwavHpZYdQrJoREByYBET84JSA1",
  "key26": "63sSCwHiELj2HHJT3Ys4q5k7RBSfie7hCakEkqdb8WPRCkJX22KdqgRC8zq7uP5NNpWs97nBS8zb88wDyC59vPnk",
  "key27": "4fvNp5y1SkE6GdVvUUsSYJLY2UBNVoJh4AjT4YiB7DqmiX7XwoYxZKPepiDqzebhB1DAKguDWtrsw2woHew5g13y",
  "key28": "2V9XPZNimrXeQ5Mx7Wun22fbii5PNJARemDkjgai2VBFkXqToXjmyLL4ioA3UdER9sRtB9fQhvMoRxHKGZWRTsbT",
  "key29": "4uW3rFKQZMLgFSE7hnA8vRXjEQ3Tu1p3UPepama7NouMmh1Yx7CTQBvMzMwVUL3cYhHiV4cEGQqwqN1tQukgLoZm",
  "key30": "5sNejhMnwgMAbT9pKXFrYC5mF6Shy7uPQGeqvxMgkW4ozWhvzMEFkHiBtNYYneRaZhBBYwytV4SiL75u8r4pS8W3",
  "key31": "2AdB8FbkoxBfpZVzHLqiBek2CKX9bxNxRsrMmFhsyvHPD1pPAoRcDaThHqE8FsnoHHyhJ1cSbh4r61rZcb1ejeJu",
  "key32": "2W1oEsjRN1m9Xyr3Zx637qXNEPJjefPoQUUBrFQqr7pv6vo9rtZWL4M9zCPDms7fU735uZpCU4XEMByAeQAG5XX6"
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
