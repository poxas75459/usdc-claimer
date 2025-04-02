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
    "4vgHWZcpiuouHWf8UF1zVoHhm2sfB5ksQD1nSK6BsWsZj7r9hwqu24w5Eaon1bgMhUxpb7J1oqe6CYPLBmyjJv6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htvyTyZcaoGbsju4SuGqkfwY9sQc25wTsUa8uoLZdkSssvdTWAbdH5NyK6Kpr5ZUa5KNiG5wEwqdFB3n814BPBJ",
  "key1": "3xMDoZuLDwJ1Ft8bsXqetnKzGzJQ8bXppR684GAvYD7mbpwwHnY84699jrHydeM3711qhAk7CGtrQpHrZRFiTjE4",
  "key2": "3ZGPB3Dk7wHs769opiiDGvPynry9DDzdmNqrSw5eCr8ewicPdq793vuQRF41WbsY1cSAyvrVwvERipj56RfwJKHu",
  "key3": "36SMhLxE8f1E2UBdpy9uzaJQH191myMvv3GvtcQry8qMi85jjBPVdNGu2Pd5Rmdpc9WTdvRoMQ9aRuosgeXWDXeb",
  "key4": "v5oxhh3kdqABidFPYCjLQs5zPz6bKUt6MPsWSQkb4ypYz1zvE6posvsazyLTBn7recwY71fk3gqrt117rj9ixdx",
  "key5": "36bcaivWmtfR1ZykM8X5ZwVQ59FgfiJ7Nwrk5fBnonRtJFeT3xXKPnG57DMp5moPfYxMV3X24vYpS8DDdnU28E2k",
  "key6": "4SRdKv8vKan4ayBxE5bgH9LDYhxrgpkBppTzkmqFPKjjuzZTxQeLmEctYRvkMscGTgjyDKrp6n9BrY1CfQa5VG9x",
  "key7": "5ZQszZMeN567Gc6AHBuHXquhV6sFQwQHLYVoSgWpKC4MHTxwJjNAa4CNcS7cQAd1QK1b8QTwQSATNThZYFHiLY49",
  "key8": "wS7biGteCPC1dDQb2h9qhvitddBQ31z73ThqpgVsaZZxpHWHcVVyTjnwEx83VaMYitXRpvaBgdAtRFbAU8S1vrt",
  "key9": "VqHovekbCgkeJiidB6xLKJDyc6MU8jTnm3FazFQzdS7vWuP3A8BsstyCtFP5HWFoCDXDmqJ6ua4BG8UdpP3NGYg",
  "key10": "3vznnKrwDXiW6o9gCniZVLSobiYW6HHVHfqby4X3w89LxjsKJHRawxBtcGTYwgCKbv4xxdgTUePXEpcigSNBEUjw",
  "key11": "udRq36vcT6Bwu85BEAoZd32DJ8Ggi6CJSPcGpDvgXkduXb8vzDxodhwbWnfVojCNmMpc9jFpPsG9j7v3u3mvsaC",
  "key12": "WaHfyLjYkJreEqx2oDzq5Mb58bNhfsYwtfousRFA963Ymm7JYbbSmm5MyZd3D2aG6DGuWfsJTooU8fY7oE4ztWG",
  "key13": "3pwAuQnxsxTYFGiomQTRvg4YMDaWxtjDWGDhfhMh3eWD4K5Zsb8dsk9k3L6Nw2sa8dQmj8oPyCRN55EMCGZCRYkE",
  "key14": "4McqHiqniuA4k26e7RqMjbV12Nigcu9KCdMjsXx5YEJyvnHu9T17cW5C4ntUxK5qy5qMRUCAHrE94i4wNLyv3DBa",
  "key15": "3eSdSU1Qwa8oqa8tAb7bG2UirynCjXpirsi2FBcmR6jg89wpWHU8LnKXzNku2bovWBA1rJGxWFDgmXxzGFDJUEm8",
  "key16": "3bnrfAs7NHsJ1tZgBDLJpGB5GQHuLgo8iSswzviywdDJ67QcLR3gXbESjrhdJDvEgcUCxsPdmW5GMs3eAj6Xyw5J",
  "key17": "4P1p38w4HLvEvjgcLwrH65ArvKoUjUSvAxudY9zRwvY3sF6AvHxvEgoFaaVgDBW3Xi4wfqei8JTtzzyMxFH5RaDW",
  "key18": "5sp5rQM76GLvbCgHCA35ZqmMpaECimQ3VFKJrnqnCt2aZhazNeAyQeKRbDeFoNX8C96z3vDZR6JpNFQoRyAnSbEH",
  "key19": "3rKxbTvK2mybi6am2BbCPuRQKQToyGDzQJsoAfjCA6aNEtvyuod72NLCwm44ehM1MKfzzYcEuoBzDBxbfjGUcCS6",
  "key20": "3oYwGhjQzdUxVb8JD3yTQ6bu3rveHDmwQ7E4mwwsufiDjA1kYywLtKS54vX5cX86fzUe6kwWqiMkPEw4YYSwwaeR",
  "key21": "27PEMjdRqnbhkNCbQDqfLLGhWus8AUyjWZNpUXtseHau8HdeZZi97hyiGrrEYiqeBY4dWkAidzhh5RQ1f59w7czf",
  "key22": "4s82eD9aXSuT3f71gthNZj7yGFpCe7X3b9Pwze1WdfSrzbjZDT8ZyZ2tNa6cm4H5D6zLEoFMte1TexfbKzsA6kv9",
  "key23": "5VrZ7n73JeD3rSCg6GJE2KrVjZXtZrijot3bDVMw74omKg34a2H5J3i83TJhCXKW7tvvZwC19fs4r9ZGTxVr4rYg",
  "key24": "5pnx2QrHsLehrXyrjTWv6A2jZ6tVhWWcghAr1y3bnPcbe1bMgBCXwGZjzAdGvSZkvicjBzgGr1iSpy8KdtiGYFc1",
  "key25": "4HieJ2LsYJXMAARNBnFtScqJBzDZfbNLyimAk2xbQ3ZSif5q8ncRtWxmSgNY49Lf7ZLe7H2wGQntxo5w5t9153MM"
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
