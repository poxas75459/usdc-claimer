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
    "5MxiVSnE31EfbfLc8AqqN3VBcNP3YHCEDwqJVUHyjd2V7PY31ZrigdJv7xw8oVoRrTDufEGnQTkudhaNuso7Js4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TzQquWwUzUbWvqnG8jenunc7nQjqAiUGMUxUdaowF5Npxdr2rZrzqjgjJUkLTmzBetCjHxxwEKpPocmuTu2XFZZ",
  "key1": "5ScVANzzP3dcJTmkiGebdXfdUDjfUj46GyDS1qhSoZZfHcFuX9BZENpU4cNoL4EjbHgdHUmscz5v8nkFRzHzzD9W",
  "key2": "3vHa12A7QUdXAeMVTiqZTdFJ5AiaPNEU8d7EVeLCF4WpRNQhXvDq6bsL2TMP4AaWUxHazB6b3Qnkncmh6PpKyJ67",
  "key3": "XR2jCPDT9PNLuJo2HG1duadVUG8xEEe2aEJqeZcECpkbX3N7diXacPwY6zJXjUzSSB5FBmq3cHemX6D9eQ2762K",
  "key4": "4KGWFKKwzPXKVZ4M8ddXYJX7xBGKm5sLjakmT8NbYUuVnzuFJiq9NRmfXca5LdgEv1jkSEK3qosEkpueU8Wrgz5k",
  "key5": "2uok9LBLowgw8BTDjWAsdcaZ3UiwDgGbzwyLSbAGSMKHvjo3JsQCoZaPvtCCwtLubG2MZzRaxkSPKqEzY5C1W8m8",
  "key6": "WpBX8QpdaTBRk6TERE6nCytKpZZo2aA7krEyyqhLZ5W7cUkfWCDEiK7y6XbmVHXfoEUPdvKUGdLofMofxPuP2oW",
  "key7": "23d36CA2raEX7j8ZoYVkS32XKtVpb9JdRc4v8kVkXZfgbMnNBEi9yb5CdX48D4U96aAUuT4tBX1w38ZLAW5gpQp7",
  "key8": "2BecneDG6tXqPkvNC13A5eg8S28oQm33L1NFUunq7owirxt6nJPym2JBBbKE2tBy4LTmShr5bfCVAB3YCJusUCd8",
  "key9": "5A3tSfpUnNpYtaqAhZMfVkuwoDjiu9wwCaieJgSBxA7GcCgSjNUGDTeKCN6iSP2XS9Y7YwuMX8JdB1bb5cJhwsAj",
  "key10": "3PPYwbL9728JBKdLXqptXHaQo8r3JeUAkEKXQtjU3H9RSqABH6LGVrAH4ir4iTnWNKVrbSny87bhozcjMM5j3iZn",
  "key11": "28ZHE446idvwSSHPRMTmXTfAAJZpVxvJnwA8eeLKMyCj2CvRTxoDEtX3grG6p7MY1GH9gD7NuWXNveBZXDt919YY",
  "key12": "3YFbyBfP8cJbb8HWWmLe8RctJSHJ7LP8uxQViQ29oVbkYsxAyE3MKru9Knrha1Sb9owUm1iRWhf6QTEmVQqkozBY",
  "key13": "gQAGo4W3r4ZM7BE8gzh8ZiCam9PsqHxEe4Hg5ZSdyFvADCEcx2k7MQhQJsHNzXQpPWsa75pvvzbm7EFY7ZQ4app",
  "key14": "3RV3z86ubD2NXeXvkJ38TMquXnJzxAnBahrd22y6PtV6zvGwM1zVTwFj3x8Awxy7Aghon7gfB4KdQnWm6hPkmtE9",
  "key15": "vp94rUkBaT5sknKUr3MYMmW32YaLHXAH7rh2ch5W6kQpJDsLb3AASt8LQ7HNjFMvE6Jo4zZpz29egMoqqR9VYLf",
  "key16": "2z7T4Be8DFeBLFDBcKXniRRjRb7JLbuY22HkaEJWBJRk4jcMgQDFtx2hPhQuP6EtuyhsCUfKMSR4UJGGG4Uq8PgQ",
  "key17": "YjyHZWxLpqyQLKDq75EjZ2PBVowEjS2JgYvJbyyma2mMvQ7Yp8BfzDT9jDhPGkBkLDF4FYbgKBo7hA4tGMs5DNQ",
  "key18": "dQyyTHp7CQkiQLHfpfcSJqcfAKgZ9ScLrbdKR7wAszrh4Gb9uFZqHE1XnPJKWvDQ2Ca2Bvbbr6didoLEAoieWGC",
  "key19": "3jhn5gHwxNEC18rGDdd9cMobiY8vDZdiykG66tkFRSuVCZXz1v73xFDY37z3BgWtukiwg9dFXoFHRgNqNwnScZoU",
  "key20": "56jyeEqAsgMpsoaVj7pTz274ftTeMN4ffwuGtRmRPZY1bDzH1V2Xxa9fUGfqs2fSNXMG3sRVCJf6Q8J7mjpPo2WV",
  "key21": "2TNqyUtyK7VJP7JSZyaUw2LfHUULoLmiiKZH7vdVgdjX6TPhccVy5GUre38DVRBy6mhwb7HyjisR69WH6gVsa98Y",
  "key22": "3WmEt3o5Lgn3TQ3fXr88PMWytAW3ys2SMpWceT8L3W2mSkNdpwxLJQpSZzcXLeThzxd4W4mkBfEByTvPtaVcWbZ",
  "key23": "4cqQDDn4mV3ZiyaoU7wJCqFswvYZchPGcGhnSjv3DLcyeZDC5x9mAT4Hi99ykBv41gWSks24JsmCDwSSiC15Hacy",
  "key24": "24Tu6yvDjeZ3HqtbTXPCtVuaECJ8uDmCckn1oyDqtP1Ytjr8VsXRZAYmCMvHL3abEFBvtuFkuccUcUAf4tPQ6X1V",
  "key25": "5MFg29aNDmtqYF2B5ZtDt4TuvZCqBvA3MFxSr1MmxSzPacnMA2e7Jx43NNCNybuo6huVjYoucB9L8ybFgbMFXD3d",
  "key26": "2QhbnEqMg2jrYPG1wrBB56eUQ2WUpJ1aaXYsHB2T4bAE9ecJb2GyW1duGponhrLZvJeg6nGPqYHbJcYQnYhU1K7Z",
  "key27": "2eYkvVb1ZPLQLbKsU4fsN6xgFXqBD6YgMUS6VvFd8Pbetojx1MDTyy9261uAu2DuGZ4LNhe8z6HgnqkRWFKqY12w",
  "key28": "54QkkpKmRFjRbnvcaYxSXpN2EAksXt927bPecs3ct4PKD1dsppXPLxX17gHfjca7QjhmbQBKBjnY2zrmEjcKX22A",
  "key29": "5EFjiEHhKeqesaUhFjeLmCDrKPMFKvatDjLMGeCy3fgkGyD7AjecU6F4EH1HzpKgJYiBNkMCFUyrDYe24HXiPMZ1",
  "key30": "3DrmYXwBnLzEqUk697AHEUJqTk5t6vswt1tM3rkDDKj6echnG7cepZdDUoxY1k5uJXJ6oZUCq8hnFq4oKae1HJhU",
  "key31": "gztsBLNBiMV8zcg5U4UVKA4VUDzYjUNNa214VECcqRPJiHWpUzJFtCR8MNtdQf3585EjhYdz8aeVHwnNiubzZyZ",
  "key32": "V61obLn9ZNk4PuvuusgA89RWACUwsnusRU2EjoYMhQXpjdv2JURT7Ky23GhnMyq7biE7HtFosrTX8m38X9XhLdV",
  "key33": "4kYAsrA79wpVEarcrMdUXg4wPNVVxaLupLWLSFy6HrAP69AGDjVgTEhP25bXNFZ6fekuU7E8oEKYRVQFmPDKtvNA"
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
