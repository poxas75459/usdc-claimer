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
    "2YgsDyQBzKjHJ6QnKBBoN7GaFSXHBFd26yanA94Gajk3gYwymR83RfVWaPpGU6jM5xnQKQ1akebzJT7pdHcDFAWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dYrkf4mgsCBKFCBFCP591QMqnU1AB762xzmn72ukZSCaLwF8kcxQZgJwVBiEX84SZ3V9hJiZBt8HScX4mRPBvL",
  "key1": "4uBx6AvJd8nLqvUVW2vW4cDZ292n9A8VqwXrhzgqMrwh8jpyLqL863BYtHqMs1pyhqdngU7SioekvvZ77JUcGn17",
  "key2": "hdBjx7VpeBVzDTBtvAztSegGXT3ieMdK5vZYDGwEwEZNHiK6sBr2yGjiZpHA99jh2mrr5ruLwHMiZBQrxhELiDn",
  "key3": "36XhUtFpp8jDoCAmWozk4E3drPBk53JrRNVN3Ru2q46mFDYSjkrDsFqHQjcXaYLiSgyj6gK6mF2SAG7mvd6CcwJk",
  "key4": "2aYm5VWGTj7jmXbM5mWYYvLr7r24Sr8P39hdsNvvVLCYbt2uiMsPSr3BDPmrUKWZLPe5ahbqbFAhSRGnw111tvJJ",
  "key5": "4ma9XhocnZ3FWk2cCmwvpic1arq9NTidmi5sF4Fj5HnizqYw8yvdigBBbMixhAhk1yCU98j1KzTa7PQzqjZCv3yk",
  "key6": "29wVzs3kEDp84kVUmWms262nEmCVVZJ9KeQtwuSSK6PMxLr9QA4AkKsXTTh1pi4dBjycsc42osdJ2XJRNpVCKzrv",
  "key7": "5DqnJAqjZ3gbYSfHU2gDhgwUC78H4sQpVwusDEzF4ctYyo82j2phTXsSAAJ58p5oXZVacPKwB8Mc6Smhe36A5rJK",
  "key8": "3hBdhdXiaaSF6dd4ErrEAgNogHtGiR12q9933HZeKraHZDCVpTFKs1xu6mmmKqawNcpTD5j1ospThV4ntA6RSgi1",
  "key9": "4ummUiB7XQav1MjybVBtdFLpcAy9ANQ34yWL7k4DvfrF7spRE2x9RsvUWuaK4EDFKZp8YviWva9Vg3gQVcDvnpns",
  "key10": "57CpLvPmuVFdMXsFGbRgQT8W25HqZqtjAp3G6vVBhH2GaEssypiKdMJ9Lq6Bnf6kpDhNB6bYrZSJo8SBPN79iueM",
  "key11": "2B4HsRksjyLPp773c47Y9sfJ3rWp7Yq9sNKMSRDQAACLrSRaTfphWL9fQTx7wyRkDVr1VZVUaDKaxwaKgbHDQbUs",
  "key12": "56mzDY926ajU2Vvs6hiDPRVttrjqzj86UnJbUGYSrnPfNZB421yczakYaQHbjbXUgnNmdsVW5R5vgMnePNT3eBjZ",
  "key13": "3eJwr763cwpTDcn6FNsxuVpRHmgLNGQt4eqgwzD89E5cefrUQ6dWWJZMKkeyrZKRPsHUPP43XrimpsMyRNeyFwxg",
  "key14": "XSbw5qa9JQSMWa5Ha6FvbbyKHnuoBqysS6XtUjY3DYwtidD7oQpbzhNU5puQSpHjQBVEj2eqDDJUfNecVU8NjiA",
  "key15": "4BDNYCCuzDovdUscvcjJbmQ66gaxmcHoG9hy1buntB5HkBQEqnfWnoMszHZj11hxMtspdyGW7nncVTLuBdAurEwu",
  "key16": "kfVja2CrTstgPhibqFCUWUniDfN41oXBwan7BqTZCPdkMpUBG3PDjUUBA58L7Vftz5dwiHfAemUhfYEFcj34zan",
  "key17": "4vyXDUg8J4qNDcWQM5PsTzqWU3Pah837rJc2CugDaeAbm1QiZmUtM6fyjopvsGHyRYJCKGXwtmnnfetPHDgdR6ea",
  "key18": "7PmsKJQ492GuaSANgniUkAyr2oymxTV9Hp1YwFY7WeocUKuzjcy5eiBxxEyAM7APxKhHqgerAENrNnoehr3MzPf",
  "key19": "33b3csYGCj6obb4qP6hnxbr4U8X37qxvaPat74qfehKQkSKaENz26NhcmeRm27K92W35ZQc5iBxFGSksEgbNg6eA",
  "key20": "5gPSgsDquApRoSmMqVRqJJNz88cv8ifmNLFZhCKqRTA9C4DAupCPG1z1acKz1sCAw4qYc5JwG1C6nB1pMgSm6GtF",
  "key21": "2pUzEafg9cMw6AeeGxtBWRBsy1xQX5s3XEP3vZ37kL8SAwxJLySNa9DPQTbmcnGi1ih3u9nxbBFc5YNxzvLWMKkF",
  "key22": "57wqppVUNNRu13gH3R8NJUjGVkhK2VXCBx3PUEzcmiQ95FD8EHUkCqnqCtTvtB1foAK2Pj8E7ZN5PYVyEbniA2rS",
  "key23": "36FNKeossiHJb7N4WGkRpRoFDKbWXcsWu9CvXYMaTfCRRTATAGyhz8PvFyVscdoawg6mWGi4QRVNurtMeszN1zy4",
  "key24": "3B8mLzoYAeTCbyqs9XaaoTSWYpg3daL2yrnTgfqAdVmvD4xp5iDTUy26jG7GhGfuKtpCWdiSavRpQa4b2dbNaaJM",
  "key25": "3BYyspVzqdpduJNdJi5mQHFdqDpkja1AHnwMayQJQeUDMjpkYJYXtAjBRS1RjM4QnUpDXxGUw4mkXTxG8BUkVQZC",
  "key26": "21Ko6jyCD3f6KUpQUZFkAjY3TqjgK3FEEhkB66ds2uczPp1sDRnM1EnnSdG2Zby9oPdPSvfzb7BDcLfe1rpd3DSU",
  "key27": "2id7cWzfUS9gkx5wfZfk3VUiE7H9rE61W7hXsD7ngvDjs152RGjKA4ueJf9dB1vwWiDirE6AYee64aQ2pCr8PZ1T",
  "key28": "4JSfhhMH4YE9Y8WbUDk19vJLgo9uhfbHjyU6Fx1u8BTnNXfgaagrfB3Y4MFheDV5ti5aJetRF1ArzdxLNPxF2oVV",
  "key29": "fZLjd8KWekMfv5x9TCzVKvRGGd4KQRvh8ZtzwKr2Z9vCse1HVLyr7QZ9pm6VUFcm9qt7caP5zazdQKCJpwBqd2d",
  "key30": "3mx4FAQtYTnz4hbXZD8NmRH7eQ7SrzfoL4q7AU1tnvP9sVUVPHETLHFMAZiPZtNh9HaUQKfA6HvkLKPcTHMaH8nG",
  "key31": "5krYBvpzxpRTynkbS5mZ5fH11eEZiud9v2Y2Pgw96ar9hP2Nr2k6U8NXzBgxkY9gvbV3dLNnjG2Q5VonXiTqfec3",
  "key32": "5ksqcyvcrvUYrLC7eUQDuNydJawToVnGDyeSMYAQzQGRrkyA2txqQjm52TDZFbnrLuBd3fwgi3EdPmdeoTW6pn3Q",
  "key33": "2YQ7rtmGi2UZw2Puuqr11upHgRyi316iy9qeNu1VkSH8cp9pS6zupAm9TnAjSZAP3SDNKLG8Ki29YQwiVpMB4JqR",
  "key34": "MQVFMTADvNX1t4taTrLn5yUVW3NRy6MXQo6XNr3JrFm2QA6BbgaDfriAKk6JZTUBpmp25jRKsUUhDJtpX3gJ7YV",
  "key35": "41efSkjQYySQo6LckXfGbsnhMdYm57EUX7FhBoUQs2QRrqFAHoqb5m8LHvCDSfVAchHSLrdxytadCqktqmYy5dJZ",
  "key36": "SududwbPbvMBJn84emQA7AaLyH5EdMshwHMv1bVWe8cN6icVQuwX9WzkzykvQWgAZPwbcY8ub72iGxMHw32fXx3"
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
