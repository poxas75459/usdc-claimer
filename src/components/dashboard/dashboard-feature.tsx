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
    "28aWhUESNoUEsbvi68NVoRgYXf4jpm4Sk3LfqgmCpuggJZGWeaeHHGgQjvrxHN2f7ZGTkb89WxpsF4VSgCSW8HkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsgJgMrb6kozcYPrHAUYgXLDKZmR5T93WpJtiBvYZPUgQuBiEjnLiJZebpGcqrXpWra9ijcjbqeWSge1n2gB3hn",
  "key1": "61Zx55RbgvVJxV5UugrnTwUTcTz9RQMEWGahaMojoVrHY4GXwpSeqpzGeUSAgLjMS3qa5rTMD1tYrvZQH6wBFHfm",
  "key2": "41TJUuzxLkAihFAJQDvfGYNhtpPBL2Eujm4QmzPeUG9b2jmGhMt4z6hkxSvVQWHjEMqaPNiA45mUTnnNXkeohZPH",
  "key3": "3mewG5vjx1X81M7jGodwbSJ5p4BQuUUvmgRHRKYbzuz5Ss8YSKcQRgiRqPLMMf6TmxHbL3VHcZ6rm1Vvrd7dU7yQ",
  "key4": "2qFAxBvsAHNVDMeNLb4U8zYZBCpKVvPrescK61KMU4SfWPb36i1rJoNHBsLWmsBz6uY4Z1B7aZk4uMbA7wV1xWgR",
  "key5": "4BExQwSeENCBF32gJdC5AKTj4aCX2Kri4mkkDhpSpWQJCMFggXKqP9srNCnegH6skcc5dFvNymDDdZyAzsHg3y5q",
  "key6": "4FYz22uPzekX6FG97j4JY57GFv7EZxTrsBos4abYV5w1W3nQh794WFw1EHa4mBzvWN3S2bcXC1jeiR6dkpa48fAc",
  "key7": "2k932AtNKKVE6S9JzLh3tKq19vquX6PRYebX9vomqBpuMorDEK4YemsXkbvSqRRVQRM1s7UzfNMJKEFsDYgtBAzd",
  "key8": "4NTqWKCT2CesAzU2oATTnduF832Ah7F47abZmATpMT3g2FrqJMGjA2fbUKL5XQjPBPZiiVpxmm4SLQseCWeXw8iL",
  "key9": "5zJyaZQvy52Ff61okb9z1H8JMWEsW2g49vRKT4Ax8dmAwd3LfLEhUXVPqrNVa5U6uhtFC3REL3mQzMAXiuwj5BWZ",
  "key10": "3rFEAdygm2zYi8HL2VKBmdoYpKR9dHBRoVfeRQ6UcKfiKUSNEbSVyZPtHDjhyJ1NiX1GvkWgcyacUWnWpfReCsHy",
  "key11": "4SUkYcPM1Sj8kyRfqKqYAWU7kMZqCCc2HLziTumhsx5pv2FoXnjwhctNK21UDPAPfMihsxLXSupW968jaukp8QP4",
  "key12": "2jbjrG7g2hy3ZAkSmMJfUBXnRBTukTmkbXoWrgTvFsyeP1zNDsfPkPo7JeqzWfZvfeVV3q7GD2Fn338dq6AzhUya",
  "key13": "5XNdok3mHMU46txnwyopmVXdgFLTsVCGXrLFtjRSt1DhEz8amdBETvLy7YWgk9bWjoJ4HeQwNcsnMU8DG45ijBqu",
  "key14": "3HXQwjEFBzExEnEy2CqyLwVqtUD61ZryMxuSiLUZBDHmFWtvMKSfE5ETq3dSaythU1MEhDn8Q4qhntP2Y4P9L3ju",
  "key15": "5oJ7HvbeemTdkEUM31wuVD8yERQVkUEP8a8LX8SU9zMqiKyw5paSeY6wJwP2ThVKNV3kJfwE667je958M4vdabuS",
  "key16": "X4wHYr7QSCtRGzQT5msWNj7KELnhx1SNc3PbEYUzqSQGBNACvZUhx8LLyWqzcYcHuJF3C6Bmrgm1dCNt664JN6b",
  "key17": "65Kxrepa99fTq4LwMyRgSrVekcx37fYp8YKRTMnmsPjy5fg5nuJWvxRUnpU1xM29EZv5BDZk4VFM45ehruCyctRY",
  "key18": "3QKjcQ7qyVFjttnQqGey8cxUbTPD39arfC7WS7nfWPQEpMDZ6pK5fk1LViGBibzr7yrnzGvpEpVsuLND7umtwchh",
  "key19": "XkZWJKqCPFZsuNJpWVciHCVTGjXdswHfLGMo8WPYv496DPcFhMD4divGFQkMymEVFrm1KjybUdJb4yrpR9pv7dN",
  "key20": "B89FB6Zr4Jr34pizVj2EzuPUbMyX3nKU3quprTzcGYKgF6YSTqeUsFvsqghKQ5vt3a63qmZQFATz3efhVsno3ZH",
  "key21": "5YqeCoJavfHoe4PuvqivphnV5UCCniqyAawcx1n61dguNbph1tNBya4wJCDxF4CJf3LDX1gKszRFrYeS4MXgBnZu",
  "key22": "BqrkUrA5AJCL2HMAtmTCiKz7Aia3qPRmCBd9koDPDggARencZr4Gkidb3RaD7DHvzSMudd8MPtQpRHsydLDSS7e",
  "key23": "273Ld2LeBXorthx3gNv973WqYwacCamp1iiuCYs2aXLy2FHk6i1kb8oAAkMF1thgi8RmbQ4UNgE4yxtCx5ftFQS1",
  "key24": "QqLtLWvaRrhPkX7J77SsMSThTH1iUYpTbfgeVR3kGjaEReqT8ER48DCBAPjDHfcmN8kbyhT9UNPdmQQWr2JZv93",
  "key25": "t25hGKSgtwZK2bj8D9hUNt8nWELwf6isTyMDv7WThmamg97BrJSUNrag5iD3NaDLp4XU5yhhSdz4fJmYMtezQ3C",
  "key26": "26BPYxj5gSY6ZWDvVwPgaUiQ5Qh8e7t2reYksUMPencEB6XcEH7TLTc7QKuPQ5Biqc5P5JoUKuADdJheW1V2MuRf",
  "key27": "4ST36vT3ZG29XFjSAa88JsEXRTYmA7SYBpNGHMa6yXbMNfUkHQWy9oMxVYz9gePMBb1ZukpdESqdWT887XsvLFgF",
  "key28": "vvfnjtvHBYrTB5eQg4diA4sMENU4hj3vVjsJdAuv4FyQWKhh2b8TXgsaZWaZuXCCxXYKK99TuHVqHGxrQxeQgQJ",
  "key29": "3rxb4ScKKJHgxLbbAhzsmWeCBUPrBJjCwo6UuUbU1LdbE8rpE4zHsmepYDDoR1kJ4KyWLRXAQ64f3HgnH682c6F5",
  "key30": "2auTYqkCqM4kdcic3TgFtGkEBmVHz2qqRnHYqVqUnFtqYcaRaEhMQHMvR5nk7CdbbLMwNWdV8uaVZmRdE516jAbN",
  "key31": "5u3akyob1JuKeZFmf8sx6zhSNqWjGJxVa5MLn2jZJuNfPSp1JnoCRYVi4X9nRhVkSSSQovTStDbnPdEqjaCpQxX3",
  "key32": "8ih3dDH29h2f7yG5wFfUMQ4bSvff4tEkVmqfvC32DtUrAso91NMn9TfXfUemac7LUqhQeWMAhMU2ghuMMzBcmhh",
  "key33": "64jGLDupbBeTWdqs6vLcmVoRfssfKbPHPATLXEmiCMAyB247mCpCSizbCbQrKefS3eoNKNQQhfXSpkUfJqUCKNNa",
  "key34": "LiKhbZQuXuhTBKpGpDJN7XSQv3yeJ7wgddnxjDgkVJxm7tYBhZJsLhAwEWZP4VuJD7B4VMEjtPnwL9pR2C65X7t",
  "key35": "4JhHpLeoeTC5G2REkwV8QCciHiUU6xKQa1bwGUow2nDr5eCeYxDNPoUWKrVF4HMa4MaAc1897PSu51fm6P3QLccC",
  "key36": "5XPUtc4mX39JUKV4PTMFskR2CbyXsB22kdam3gtwExaUvgVbqvoo7CatWi8un5xjqyzxKQJWKNHsFHeLe3imhzFn",
  "key37": "4aAgAuopsGhJEaVcWwSuW489N4MCBgNPwi4syyEB8oroanrzwdN9SRvmceMPRUhdxbYTunMAEKwKReJzoKMsmgPT",
  "key38": "2X1bBDSiU1MciZvRytjVu51Twas2gxSFTXRJ7fUauHDvBBTgJiUaadV1jqpzDakTP3saFcqE4R4ofWDLZGgEZDWT",
  "key39": "66Bv7pgDjgVAZA19nGh8SKrfJujkr3HiSta2DVQhu84V7FSj7nKx4LML1jGUdmA9NSbMtEDWCMnMrVJCcopPfLAU",
  "key40": "4FmCf8XYxt61zFPNJnzZU3KUu96UkM2qePg8mEnorJ3az8xVQmmmA9NKZ5ECg7kj5ybdGboGQUsAk57x8FsFJvLe",
  "key41": "4EmnEXYp3DzJrVeG4fE63ZLQZoKBE6U57biFQUhjVLxJEhfJNvgyK6geLfpeSm7af5CWbZdmhQse6B2v6Nn7AvVA",
  "key42": "5U3XDDVLAKAjPvnvcnAumQqQLFGNFQcFZzb4YNQvEDkH4Gq9b8R3jqsBYUBYc2HPatXdFVPWjrC4kZrE8fHXMdpU",
  "key43": "csddVsPQAa2NfJVhq8HJHeC7sJryrLpxx6Hn2As3JfqjRjEZpoFwHToCKxUS52Uz5XtmkvM7DtX7W1taS4cJArn",
  "key44": "2XWsCieBEwjthdTg94uTWz8eTvmCPTVG5ZqiKNqmsnnsiCxmgUJJKTa1D7kZEBc9aeXG3oQHj3kLpoScskftJdXJ",
  "key45": "3TqVHWt6XmUuUpJktqUwqun1fxF5oFzAF1SvikCct6UtJKCL2BUCwug6Sr1xSUtVtbxiAWy7xagwDn6ZMC583vnx",
  "key46": "4nncPLwRy3HjZSSikqhBtoMgTeoPHXqrGSECBnoN4tQemv5MTKMj8Q6FwRKSp15H8Cb7T4YXz1CmisytFSz13x4i",
  "key47": "4Pa5MBuVtRvc1nekM8PNKFF7yjegF9tNMG6My62Fp6HHe8c6Sg8pCmXMUGv3E9yTMS8E1sDWCFbG7vv9kGwiEPqz",
  "key48": "5h5HTKY9iRiRNs2nghZ6q63zFu32hQfmHNmLcESxJ56d1fJLqVGuiErTxbgfAf71qTRRsVGQMmSBGLDzUECSKcZ5",
  "key49": "2ZMKbFZVaE8mSAxjcaawLk2BVsWV2ahF8NYYbzazaGpn3q4fNZnz3BR7H15GPTHeka15bKNKonyU1TceZNNMr7pt"
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
