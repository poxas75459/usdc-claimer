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
    "35xuuS29XRASGFmcYrNJCu76RL1eRRg19ZjSJqVc36x7vK4ocVk8ZtjuTqRK2DhuqhwY9vSRLcyoJMZi8bpeGZpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yd3VqxB9LR9p4xAfCYsUwRH9kitNiXcMXGMKtaoRWokEXDsmMvHYY2p38iCWLArbHoZenmfRBwEYJVzRHa2eSvu",
  "key1": "8dSNEJ8iDPRexs1gTD8q9YT1HJSRvejY4EZ367eDsbG4SmrwNdd5binpibpmBDwMjhJRQ93ugGYcy96457z5Nst",
  "key2": "29QVpNowFEgBAeUmdmifD5V4oqcn1McFWEZnXbRGfatk85wvqeJZw7jB81dhWAitBAm9WLQdWRaAQU6fsxJcpDZN",
  "key3": "3tH942wNn6ztneS7VD9gufXUwRPFzmoW8hugzKgV1gm691oj6T5BskQqhxhfLQ9ueSag3Rm2hiHPyfa9ABEEZ2tx",
  "key4": "5u1xZDcNUQuLf2gZzitPmFhDqSwcKK5yhDnUwL5RA4kbXn6FZwwWbk7b9SRFqB4FsArtRWdfjzshVYQZEh1st7hf",
  "key5": "qwL9KNZwv9YJh8YN85xWjtQbuX8UrNPJk2oYACdfugJnS2kX888eGsrhzbbxnUAunyGk2oFAtAtP2JpqW1LbPAy",
  "key6": "2y1s8zYwEwcMkwm4eKj2kiowdZhnWpn9cPMCFurBJsvh8yp91ysnmSCNDXoGxsQVNrECHsF7NCg6ahsJa5wQBq3L",
  "key7": "YFKpCQxgfSfWV2NmU9wYnANVb5m8a6dXqVNHaSpdUEt7y2QTRugiKTmxFc3qkg8HTiRSgyt4rr6YyaU1VUmBf5W",
  "key8": "2KJEdCTgTrYJuR2mpiSX41CvYJrd7DYqdnXcH9aHvpJAE7qexQcKYfJMDDkvkr6mF43t6yLmif2GzmFuJfR1S1Rs",
  "key9": "3fBbqvQoiFV55kndPaECStmNRbXrwW4WQc5EFFX8YcEnNDJNnQRi6heixowZVbLkGHenRFpmHn6EVYQRs4Gtadr4",
  "key10": "3iuwwVYK6yN5nU2e2Q3kRYJbCEMX5S3mkHwh6L7tm3akM6qQRb8xnusGNaamBP3yH2NumsDpPouLYSMjCNCRTHFM",
  "key11": "5jd99aJ9bQdRM8aGY64Af6dhgjhPwMYttay9buDFHAsNC7W4m6jx9hWiCVBkmd42h8QdWdStWfe5NTq7z7evfjZP",
  "key12": "2zC33dPFE281oBdCGgRCWhW6ZtJpWBgp2x22EMosGcZsnkNMmfnsBqsYXX5dFui5EWSHxKVpooz89PBTCDwyLUWQ",
  "key13": "5Tf1TwxUH8vS6m4fVxonXjwSbjBMg9VreswC5mFEW25xkGYvghHHjyVBb6JDATrmH7z4Medy7uYJeGEhGxjuunaz",
  "key14": "Hr95CfjkfspwZ7edCk9GmQrT3GzzEiwrgwXpWfyYKcNNacPsDg8hf2aM1LiBCugVK5y4DUVY8WgXKJkNESAWYvs",
  "key15": "5rg5CoUTBB898Egr695HHWNpGUrRy4R7e6yvtdTaC2FTQw3jp41rTPqv2LM6Y6LYwqxpw3oqAP5zHRgsmoX3yy2h",
  "key16": "csFwNupHsW9hqUfdcxhjDHkiDbybajLqAPhThb1qScZiX4Yv6uo2LxaCeYWaX9yYQhJQYWcEoUbCtav4xqwnuRj",
  "key17": "5pAjxFbjmdEYt6nRa6C7ewzeAQpPz5uWvW4oxnEHvAsuAJ2UhqgspZsy3Dt29WRRQpySw2SYLZxeRrefM2dyaDib",
  "key18": "2ku25A5qCb8fLyf8TxWGrvFoCwpsLbgMjdWBqUYtybb8TtpRVhC7aybGrEtnb5ASTCMcSBLMU8Nh77cSoTdghHtF",
  "key19": "kRajpwGt7SefLG4ZJYbUDBgMYfUrsZM79Vvrq3MrKKVfZEtK3ksoKxSDKFVQDNfVJ4uCaYf8KpoZiHfMSBLSH2L",
  "key20": "2kKrVkqcscuLXHiwqEjsa83DGMsHZrApdA2EArbG9KTto3Hy3iGBXRurmLbprEkdTqyazykufTePkACDaCfZBxN9",
  "key21": "PvQXEUaoSb6TXD861VVq4d22vgUsF1bdmcBYZQw7ztDph19vg7MoQSCPaGweTpgSBEAekzaZtPG7bd5gmJo2dJj",
  "key22": "4kv4iG1AG1UNMSzkDGDdaTxXwZwRoE1BhVr1cf4NUpaEmTwJjhEcxzzTmnCuzuetaQscN9ufAd4cRQni7aqufLXf",
  "key23": "2PpYvwMuM93MWqAcQWFhSDipKZU7cv19abG8muKoVUCYvTiy4JC1XWhET5p92gMTpGNXmqZqGxyC8eMRxGgpriwD",
  "key24": "5tPdqm7jPWKAqd9KWnCyrxJQqEb92Mz9WpfwA82vFdtZzfexiPSweGS2mz4112MxXV1GUuu1cwmWoAMuCshakYVn",
  "key25": "44WLdx4KWsSewMLAdhBmkDcWcKo2HvAZQv9Q9hBwbb1QcteYe3QYZHQTN8nHcsCKfzdRoaYnXw621FoL2f51wZpf",
  "key26": "65HLtR1WtRctSy4gqaPeQCAvzfh2u39vsF1MTSbhPuJKDQNtVxeX7DDjgpnvmDrJymM7NHdjtdADowNRjKX9fsy",
  "key27": "4zMxo7cgDnbAMkQe4NhZCsCsVTDXQG1dUNejsEih8YZTgD4qmmiZE8dHZuoZmS6QqUL7eMXr5F8qaqhYXHXYF8S1",
  "key28": "4juHmNJdiMyPpytHV4pgdHdE289k61wLB63LSsJoPHdLNKYupz1MAuo4WodjUpDgZSKBhQqMzU6kbgKA2J1wSRrB",
  "key29": "4MmUg9G9j8pK9AfuxFXiUtJ7xa9jdijim6GMZtzWgSicqourJSwXE1qYmBYPeZxkBYptVkDUn8RrfR1p9Cd6U32H",
  "key30": "SPzsKFtjCLXVUZZikfvmaYgnW7J6dKYF5zqroCeFs5FtRBzPaB32hLcNrgD4KbrXrhigdbP49N4u9tH16z5JZPE",
  "key31": "44WRKjDGVsZ9k43J6925AZjQU15o61TC5oxZXG9H9WDTqSu2T3JB2vbuze6jF8yvB8XCsXpa4bZ2uuXZTWsUdZ11",
  "key32": "s4YU5SrwXGoKAutzsufMgD1UU1WxSNbqDmmJfPsCv5wdJVNYNQha2Gu4eRid8JKAfPVsUT6dXnVuAGmtWp6AUYL",
  "key33": "41AjfdR9LEEGJBDshgnh9JroQB9E5m2dheT72kn61ST3yPFtH82nebBphoxXpGD5QtQb9EnGWMWK6ndUofv1hiTt",
  "key34": "57z7QyuismYK8kVSb5voq1jDLJqugyrsRtfEU4Rbdk7nxM3w3xz4W5PBNW8bRDgWUZfBJoJevF9k9vwiUEN23yaf",
  "key35": "3HRbYP8a9uLNN8SWLa653q7Y8qucyRg2gUhp6im7EPPZuwqsM6JRvi2dQWwtFxrfcCP8L3XboKMkQwTB2B1QSkxW",
  "key36": "F3JmZsnngB2aV6rCxfmdpv22cXkwyh7Z5XjytRz4bpH9TWQ4RLcJjnbBnYJy7AKrxtzrWbakkGkiPqHTVAw1U19",
  "key37": "38zziAUfrDNFass1m7DAtp8uap3BBSApDcBKd46wECnQDehWK7kkYbeAh6JsS6Cx7grqYLPrSqmbpj6xpFQiWoFp",
  "key38": "2iiAMsdUYJ6Y3zgyfyVjCGdN4dSFqgXXsfXt2FyFvFvP1xtcCRV74Dpd2FHTrurnoeqXtJAiykjHCuDMwWdWbPgM",
  "key39": "fQ1Sy2CnbvWkH4vEebXsNb6wj94SB5dbkLnWpCDDjpe3ris5a64hH1uzhbY3RhT1ksAVb12E6hpL9zRbgqjqUwP",
  "key40": "2jMRK4qbzzdCgJvXuZBVSbYwPDytEGCyh4SVuXwdAqLBUvuhE8VYMBCU7GV2MhrM1FXhJirjfCWsftEecMrRAV4",
  "key41": "25dxKPusPUcTjLdfyW5eGpgFsYNmumG3JbKJiVZm3Dhg7XbTiQg7qP7vpnULBs77Xy46Q5royueEE82U33NCb9Um",
  "key42": "3bAZsuUYATKfrFK8atCdUGrr5UHSpawcnT2bs5sPwe24NEmcqDXbcCLHekvEKwyCAeNAexHcNAtNNPWiJqU7b5Fz",
  "key43": "3FC5376kVLocHKiXZCE6mXa3j8Vpf56Hx9NySpchZtejdii3mASStJ8A6MKgedMWXFyHjsqxL6h6MsNTS3rYSB7k",
  "key44": "3ygu2bjJtdNouoNsNe4i64ZQnrvK4MLNSZ1WBT6SEwHFrtACUwU9ekYgngrmkq2EiENUbfQQtmCCLSZYWCCqomGZ",
  "key45": "4bU5tTzDEoL2PNZVzD1fGtdx2CE9Z2QXKpREys71iFTLtbSkZfLzfFtmgKvj6bVz9pXaUq3TRenm1sXTHuDxyY4b",
  "key46": "5TFhiv9dJ6Z1ZL7tooSFqmyqsqvif38BKkbTMwns7VgsngyiVGZU7JsSSDgLrw8LcUTuU7ttygCYJzsNMX2DwfLM"
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
