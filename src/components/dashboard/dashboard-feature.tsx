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
    "2P1m8rvqkfDmTwZFABvUHvjGzhqC9Nes4aQ6KWk5V7u1bdhwnim9irUEPxJBtdHVxBwVLUFzd2ghQUpwHPvdkiko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3URe3FeFHbHNyTzVyc7ZZdHfRPpS2Y3QMyFJaxL6iRzuBw9zfRHPGwtEK9D333Q6z635oEwUQYPvDFBjFyXdQ17F",
  "key1": "E4esa2z8rjfUE8bS1AoH846KTt4X7SZ4o15rYunm29Uoaa7zVswWScN37aB2iq6c7A3Zs6ZtF6qJE7amiFD6mbs",
  "key2": "XHaTswcruLU86hniPAKdf3b5oQWQDN78czcffCRfwo6w3qWNFFqsfGw5re24H6WFKw9ApRc2F2SPNpUbVBduhjg",
  "key3": "25R2EEHWLk7qYtGfnzByBaL2J1GEXCpjAHsqKrodJEcVH9zs8EvrMEwAPvn9fE3qjh4gpSPaiEcZkJp5pMTQDRGE",
  "key4": "4SsmaxiDEMoGckMXaKfXVksfdYp6W1dPhPfR8JkviFJyj4oWGHGHUZkwuuHWfV2xY2NVExE5UYMpWKnyPtVtEqzy",
  "key5": "zFRfZVRgXEPe3GoAiB69a1tto2fKg1ys2Ej93yw7RpMudx42KVawHKoGhVwpAqHqoagCbHZTopYHDDp8p6UQArE",
  "key6": "61GUpp6CQdGni7ZSXUmWmuykx3ceSQpsSjeJAkiyaxVrmaPtgdxLG6kctmpbXxMafNnE9WDUMKPT3UCDyXZV7z7C",
  "key7": "B4aggzBsfUFHHpUsV1jk3m2n6JkeCR4Xxw5mSk7bie815KzM36yigi4hMc7nEgpuWbEewtShbXEJJnoyCPjXJTJ",
  "key8": "2c31MEtBTogK5Dg2BcRY2r98LjNE4aQRV5iYgT1wwpe34Cz4HGsMxGK4ZRy7P29o4CAakt7NMrDGQwzyad39jM68",
  "key9": "4zKYTocJYnRKpeUPyVvMxLaHVtWe3miN1fCZK1UsWdWpgbbNhkrk3qmreqKAZ2CrxWUTTVBnCwVA7DM9kWiD4X6m",
  "key10": "2deUZWfbyVvRssD1S5GVA8d3fNTwv6y9nn6fwHcrGFLjm9PmpPPVnch5pYyqS2XmV3SZQzSavaixJ64TP7GSvnsv",
  "key11": "498Cd46J8dCP7n8ohfoVd9dbeXGdDd9p77rB7yimjHxGLocH7hsRRDihYFUsb9WK7BsKouZshgQMeaYzJkv3iUQx",
  "key12": "2foNNgWkBYUW6VBrjbYYDrRLdnZ76ifi4kFWtGm1rPJkfUetWCtXNAT2CsrXonYR6euPtER78xDpYkZm7yKy6Ep9",
  "key13": "5dGND2YrVgdt8Lp4j8EGJ53sRw4yVCrwp5oZ4RK2UpZcMa3poSuoVgcaw589jioyAwEsPVCELovdEDsS7mp4wmRb",
  "key14": "gCaK5b5Tvy3hR2DP9VDuM6w4bfexdkDHaWcs1meFr1TV3cxqF7nw3UyrVyitbwi3FkRsebxLuZRFqgKYmnE18ZU",
  "key15": "3xPqN4bkfgdopgNjMCGnxEAA6uxW6bqr5av1XUwHD9z1RaVK354FzDPyNJMq2SzgsUxLBD4wmd26MUMb9y1hiHde",
  "key16": "3ezAYKEa9fFGp17GbNW3hPA2ChRL1CCxeg3xqDDPhx3XeJcFVG4hQ3bJ4CLoC8eDLBTqZfBBLRCRoXWzUpzsk4YB",
  "key17": "4FVHsUrX11K8gxJDsi2brnwup8t6KyDFZ36ofCgmMgkbCNeKARY2z5UYJKRUYY4uAEH5AF74FS1GSdmYicQkQdkX",
  "key18": "5Lu8pMQq2Fxo2Wrj9dL2k7ZWHrVTFXfeRkgZKCvMvErVtQbhfW8VX4RAWJGSAgsfwJbXNQg4oQNeokKNzRyRChMF",
  "key19": "55ccsSY7yrYvsRMXgejSJfgpQrhVvpEcq8kKWKsvKrv7RUby8EUBFp4TVAwYj8aMDV3U5njm3nNNUMzWbGKtqKtp",
  "key20": "4CejMgqGUkaPVoTYDKhxqzDe7oANCeAgzi8zyjHQRZ9hEUVBczpYqyA3W5f3wkXDy6PBhwUcD1AetmJjczb7B9jB",
  "key21": "2gcgnKJ78fVHucU9jq7igHrowV7BFoniyb1veeAcNayAJt3FKKjaPspDXKy3YHZPh8j3mLXsditm2sAthJfqSZvB",
  "key22": "2AHkYznBNyhHkH74vEVH3QipMuKwGUVScY9vsA3fJTkw13h7hPVhAVv7JZHfhSKSZhNu8jruviXJ5B3cjwtAmTYM",
  "key23": "5rwDgoWX6SgjBz2zwhJ6svRKX5SRkP7J6Ja4ioiFHHJbhRDdLehv3WCczVjQ7Yn4sCVX8435jMeVSSThCagX4sMW",
  "key24": "3KhQi2TBGYUtS2fFg1EvEmj7t2x84RJc9PuNhTmjRunRf1BaTJKtpsiZXXC3tahojUsySBWTbYZmi5pTqR1gptFB",
  "key25": "5d1QSbqrJ4dWU1bw6JCNcaiARDQa2iuyvFy62s4YaNz8YbekFJvVhLiw6pidnhbdghtxVfbZ7uZB484HB3LJy3v7",
  "key26": "5YZhKJKv1nDahYGW7FQSNdusRdLLCYk8n4th63oeBWHdEnEVqPeaksZawkGqmVxHM3hrU6nJQPhwrSX8J4nxoPdb",
  "key27": "NfU6f6fPXmrhu3jFKJUXrTSFMCFZfVtuC3h6gX2pWvqwVS8qA7jwzBya4cbNrxnxaE5Ld1uh6KfTWTw7G1iKacd",
  "key28": "2fdvEgDaFktweGcThEHat83VNyPuDHBR8cgf5TCroshdtZfF9X7vpKydhuoEev9UvePrNx66FHyepXzptgzDDFvS",
  "key29": "25YAHyPzm7LwyyMfkbzF11P6DQosqPxAfjKwaRGevJKgp96FBUpdaEQBavPQAutrCtae8unWfGfxCFDmDLw8efxv",
  "key30": "2AZtFi5UpYMCBzbwqFwAX2tkvDz9u79Hc6DeHRjCzhphrWC3dbZ6QjjdonKjB56k5VQRuHbBVkgBY7uhtbQRCQ2F",
  "key31": "5u9oEHgpfBZ8g5HWgCLuWQb2uYU776Fyq7SNL8atoRiQuYvhuqYoR7kZXQ2FYgN75MrmnYq3YMXxPJYJc5GNQytN",
  "key32": "Qs6VBHaiUiWjQ58Fb5EePpRZsBCxapxFCPXNCGKvLkjYB48tPh1NmP4eJQyfsMiQKJVF6GMxaa3vB5hibS5Ro5H"
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
