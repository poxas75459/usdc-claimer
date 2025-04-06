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
    "5uwEF1LH5x514C7MPup1KgpbKaf2oNKBpStKMCaBgg6gRSVnijjsjDU1SMMcwwRzbCdnqoYvxZ66zVKZHWwAjLhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wyp9FP1GKF3L8ptctVNyhFdSG1qvYwHavKYwQgKcFqKA9x6FKCjnhYKd1BLKxUPGY7tArGdsNieCBmzDtB8j7uB",
  "key1": "3ie2qecEUk22qnpjH2R9Z67qyv5msfTBHnYGWfv3bMRw6ZcgV4jPbRYhJbdorvPQ7oZALcHpXV7Q66yvde2SVoUR",
  "key2": "4d5vCVqkA612XcizH67c9eBsp5DnA43LKHj7SAXBsBEvjZu4LJngkwcvHiFBwfd3nRUGYE84VX2L6PqaGDqdHYHz",
  "key3": "3YVbbPouXLxwY6q3Pr7e7Yf2J9KNPAbFrVypvs3CGSWzGKBeWRD3Wp3TPJGgkxSSNzGShBGWHeJACXWVmxGMVtSx",
  "key4": "3QMNs4izb3t1FEwobd8g8rzyT8xHGocKcrXqXkqEvu5ecQDfZM3UmdcSH7KXZqXw9werkx3Js5zxeS4kHYvcksCg",
  "key5": "DB11EZjwFVQY9198q1TuXvyecQ2oZNTKYi5dMormvqmrrQw69wybckfYHjMqnJG5Cv2ueJg2npx7XBWR21Fgxpd",
  "key6": "229z1jUepAe9FUSdofph8rn9Fzppeh1xVZCQUPrHgDkrW42QvzqEEUs35PCct9xCPkqEpcGdqaiHetJToict1ZeU",
  "key7": "4N5eJaYnxDgyvuEcqunZ8zSankNGgDYd5mvDHh8T7rzZaR4JT34LW2oTMxhjgmm7rjN5VSKwZtxeyurjq1QVbBdw",
  "key8": "2a6UTodbiax1sNTYyyFXzQert3KydLKVmHU9z7eaGVt7QheLYgDMCWyqJGaC6ftxfGJT6ox5Qsftk4GPeeNEDVmy",
  "key9": "4mfyRrfS4dBzgd8uxBgoeqWLbBpGJeXSQ6iyw3cTCayYaRj5WhBcDJaUUHYLjoJjRNvmcv6Mv1mLDY5BXxeMHaip",
  "key10": "3rFprCP9jCpSPbgcAZvfJGvkmniAkpFKkA6L8NwhZP8Ls9E8nFyZENQEDwBQtbVkdGFYjFEvCVRsj3q1jYeaSECV",
  "key11": "4iEKxDEtEUcKELf8iyoX1YMmxqvBCqs9jhgZNnZxBobkABRgUykm7iEoWcVUxd3hwF6cT1K2SETjVEsoWGVhzYkF",
  "key12": "21yZT6UmUa5vp6b88YQT2VWfDwoq59xNdKXq5zMYcmMuSvkjAEPeRRxvdNt5QJt8gz5Cw76HXtFKjEbK5GRqpp5a",
  "key13": "co8CJZsHcgCE2imtRZj3x9NyngKC6tbdZ3oKsRqrN7Ww8Ke8gpiCqZjuHKysm6qcCYLyf4W9giktTA3YsB7no8N",
  "key14": "5cHWeB9eFbzQeHBeuezT7Rst24F28eoo8eNGub6R2EnBevTqPcSb2p9Xh39qQutJtiHFDbq8KPdMkYYxvSLYDNqW",
  "key15": "YsNqERv45qeFyjFCp8tFvQjjgxwxUuTehHbSjAJupn5WgtPRjCW3rmAkyDmkoWrDoRrbEtBZe9jggBoiaYFHs8b",
  "key16": "4qTJuAZEQkaQDiEZmsVA6Tqq3MwsKpXrjh9gwtQpGcBBy25UhC4bMDS3NNFHNYaZSdusWkTCRMavGaV3WdGkdvCG",
  "key17": "4RdjuahRhL6ksSeqjCosxRAmsAP5tEVYhgpbWFf9GdaMtAqveUHxTRXNqnHj6xoCWieQtavFCasTv2Ssc4W6nf2G",
  "key18": "4jCHzJbgApWwqXcq2Yc3sk5gve9r93NN6EtHgcdvFUcaxp4kJHXrnm5iNjFWogGJ8wDsgcLpM37R7pVbSskitu6L",
  "key19": "4zsVVUoyrRjNSjKyjY77414EydYrZRdP1JscjG3YYExCe1vrAwG8CoN9T8YAE4n4g6YLqHbx8DVcTWNtpCzDS9XD",
  "key20": "EJRJxaqzzB6mcBdVDJbFBbtwBJCzR4DwvciH1Wati2BDZRWk1BXHYHeKYfFPS1pJJe26aU6QhcweN4TxtJfXRmu",
  "key21": "5BD7tgUcHM5g7cDQKvzsZ1GvZS1xv4FZ75jj2SFxQooVu4YvUsfJrLX4NCuAGYaamDKREWfSZFrpmza95ohszZhW",
  "key22": "4ijatYpizePLLMyvpSaEM1phJackkhNntkzGw2kjSemhPQHKiPLaQoHhCRSPZmHq4nBsApsH9A1579JsRa9gUzU2",
  "key23": "LDb4AZT9F1WvPxEFLYZpazvuyzj6EjoP1yoW9rvctrPmmKcW7ZBv9MXePWijqXEGaUQTUSGho2DNv4RtCAP2N9k",
  "key24": "2VTbARM2UU6bdS5HuDspN8j9JJrZp9cJnEUH656WrQLb7mFmjgf3hve4w5Xa3PMVtu71uPBsgaowaWb2taCKuVMK",
  "key25": "3Ur1qQhFKkKH7Rh1uNEdVnahhb1TALtz6A5b1zFZRRpQMRcXP9WcqW7NEHYVAMay3dxfmM7NnYbAGoqtznoVRgaq",
  "key26": "4toXNq5fSDCdGNfZay3wwjcMUgfPjmdaviu6ChBQWUZpXoinhXcXn6QFT3Y3N7JCkWYkSpxBn2227zqYiAiWxDPf",
  "key27": "4zkRLshNTr9NmScYHqJ6Gr1eY4SvwsMhYK1GnSeN3F54naEjHvbQbQhfe24AcWcZ4xq5ZvCxofpKZ1HrGo4Mx7JU",
  "key28": "3Ka6uEBZ3ZLDqCCj73bXW93hD5vKNhHTkUbgUvt26AGj8MJD9W75DqNUtRQ1N1BWfG73mjtMwLxyngWbqgVy8ghW",
  "key29": "2sXAf6fU2ZG4JtfJAaGYv8dJpMvuLL3viauGtk8F6iY3TGRdbWx6WVFCTrpAg8KmsPHAVyzbzB6VTULaJqnoYTRw",
  "key30": "SuEVktDnpe3YcJWF3shWZvBHzVQg1SroZZqp9zKLJ697uVNoNPpy2MYANvaSoqqZ3bj421sZw4Q8sA1gK3MiM6x",
  "key31": "GK4PvEW3a8PZraEZ1pbfLBwxswqeg48dZhCpPh7rFgGbzjKbhHMbmoGJU5r1G6x57Wax2786TN21bUCsEUPgqgX",
  "key32": "4U7XpiL3TC8FCcAgWfhKU8r1BJCkuSh9Vt4XLWuTGY6BMGo1uxSnBHda5X812soLGBbCgGQTxTNP2VH2MY9rxQzT",
  "key33": "4rGX1acn2BhX6Ep5JK3ei6qS47rURXFJKHuoubqc6ZQqDFUQRmeAQ41KwKo1xfFaBmPrdusU3TQj1KXdMAw4GMzH",
  "key34": "SMa6MmsRRSiqoqVLPFhxwnMtJcaJctcSTKd5WU15w1a6cA6AZf8R6joSmVMLNFji5xyVu6dWRuCRhdwdQ1aaDqT",
  "key35": "2oSNfKxL311NU1U6X78RWjNDuJdu8D1RrcNtama96eyXu72c9kK9yBJMG7XAkMxsodJU9NhU2jMti6VEDPdEXPpH",
  "key36": "3Hkcanq22LnP4Jnk7ZDMUdq9Kx9oSp4Y4ME8UJZvwFKBJwE1NiTMhrYz3NtbRkXyUNBHeJpfv5HcmDU89sfxha8V"
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
