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
    "2DPJegwzrVAvHHJKUymeoJQ5BmSzyQgEfr941dDhJGVJ9GCX4QP41MkWHzotdoNcgk8nDr7zSkh3UZFcK7XDEhUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snxcwnR2MTdHS2uGLavs5FecE6eSXFbQ5EiCEHLq6qxk5TfgSxrApoGw7RuW2M9htLkM9B56WxbzuqKb7jbqP5V",
  "key1": "2Vj7nCgwatS3zzddsVzvnTF3TELNnLwsCNaFjxztP9XKchhfrDjGvAPohuYMVr7pvRGkLcCbWpLFA1rDoQ21Lw9A",
  "key2": "2ecwPk4XxGXLdr9gN8oY9VvrRnTozgLnoPkS5vVHg43XVqnyxvYroD395uxVrUHbjnDV6Qw9LkiBqo489W9RoAP7",
  "key3": "uCbPKi26umpaC6hx12V8aKKGD9vA5PAESkPv98XGNzTBkF5FS7BtD8dFRoWdZ3gsunPHis6fsZdCXMzRTaAEucN",
  "key4": "3bkdjMckxmx56sdJAaXQAz4mZ1NQ3aQyEVmMseYA1QjNqiVnbXbzP361kVC8QEtnPGQmsHMXP73BBuyv3BCPVFiB",
  "key5": "5Csx8Te921Eyd8PSoaQBFRuUE3WWgiC1c96BRUw4dtJ6Bs9d3gy1JqSjDV4mUfkXSTo9e3riyveG42B51Qjrai1u",
  "key6": "3jUPFvgqDfMadv3C8hJ5Ant1jj7ZLXPmKpDjnoHpoYzDVXCshX4xFaMjzBZPZDtymHDsTZ4TQDMwHzHsxrBN8PXi",
  "key7": "3P9az65fP4BQFP6Ccveysh87bgpHVpmcV2aagKfzZL1f35eHLeGwcj2umr37GbmN2r1AH1QSX4Em4ah5cpecjQZi",
  "key8": "3JNTCj33An34zoX8ZRTyZ2fvwmxxk4ahWCSnmNXdzb6a3VBD9ugQ36gW8AqDRjFtPtfc8FcKeFEoh7RCjJgA3vQQ",
  "key9": "3wZBVSE7NUGzUVnCrQzU6Wf2YhjupVXhejoaRfZUs4PWe7njc1BuU6ULuHJTNtCjBZKbXKqdtiFoKiBGe92TuiGR",
  "key10": "3jmgfDLzV4PQaB6FvUSGV4jWhsnn4PUBfNayt874kr6HNNH5LsRADpWdaJjzvSsDcaZAaTyV2ooWJMPWEZegurZV",
  "key11": "5WAKaZNmRm8nuUUb2m7fo5ErmZBKkUtFt16RB1FcrjMduppe91tNDFKdkUSoG3iSjMtbxRXLGs3VqyNH73YjDuke",
  "key12": "44zqsAj7E6c6TkwMxcLShjjQGPq2Lqt2uMoWJEefJThf7D85AgH34JAd43bMv79QJcThEQ1qZPAXBxPuXb1RY444",
  "key13": "62kBmyBhJAHfRGiANA5HuULrVFgUyVjkawERza92RRn3W6bsS9QYwLH8ZM6PhQbkFaaweww5QcS1WfLkutSaF2kt",
  "key14": "5JjpXT19146iKovPn6ArsHQmerqstSmSD49ZPhAsujXNgE1hjePqJJpKBjgzMPbu8F7SJeC7sb6jsHYkvGSXujtR",
  "key15": "29c4A4rQB6meKve2q9MrtzGNQRWCFJ8beAUHX5vPctYYhCJvAWPbP3EXqKcxnfzwMAU2eQ3PDXWrBhmq8q42eyCB",
  "key16": "5m4cCTZ2SiR51TvkUp9FLTpoq2oUY4J8coeY6upisYJ9BjbbhxyaghJ97LDtDFNwNkDDr1tbct2UpSuEvhQxuNAM",
  "key17": "9R2BpDpLovFAxwCq8JSPFuUTwQtk7oYQYCm1V1DPgVNcVvpzkxNX3pRBTVy6n3Rb2XayRE9xZ7RG4WtCPJ8Ebp5",
  "key18": "53JZc2k1RaK75hjc3PwuvnVCXZsLZZQg7PPiMKLW85tA6UzYPwQdczZcBkcSPQPuhbcZs2Z4FwTVfNcU9hKgv78o",
  "key19": "34gpo9yi2stuUCYdtiJYZzc7H9nADXis1nsHtGnkSkGw18LjxFnf9QdtvXcsnyPVVB8TETM32uUKTLLLMJT2YJnX",
  "key20": "32BEphUU6ywMH6R3jCPrUV2v8vjsfQBi89oKx1hjjKxdFzNihehgSxAX7pEs2QPrVieZgrB1A4vWodYrNAbua2TZ",
  "key21": "4mNihz5XqPAs1TK6tCG7fdzsuVrZLoRo5wJ8b94BBf6iCyCift5mwMUdVCdJ7rEfA8AP8XMMFabSKn6hWaUnoyHq",
  "key22": "4BA825KmCaTtshCJJdh73NzZ1ndBgHk4juSZAh9ejN6heBRHYQ9SXAdW9bY9wb5dH2mtSz6xehP5UW3KJCZYnJRL",
  "key23": "5CJaFt7GWJm5DZZpXeyJX46ogZwu3rKEPFoxy1oY6mdURAcH74M4Foa3FtZQqcCj2PFsqSTK9CAhA7YGRQEDjziN",
  "key24": "29kaec5v86mtrGMoZPGQrfJQBAtxTvAi76Be8osvYJNq4Cc6L3EwKai2C9jqHGkng8KA2oGWf23Xen12PtVANd1Z",
  "key25": "46HCXF1yAgBEfTx3u9jzgfpNyHzU1AX8F3FUdU2SnFcvCbCtC7eMkzxKq1E5pSEgqv8gwNdgXLsfLz5aeAdzDivQ",
  "key26": "121KVqZzJYeKRmZs7ENwPHe5nQDEmHPjZNgGNRC4HeHdWvhrS29exsSQdGgymPyM4Z66rcrWBwVooYqirEhgDjiw",
  "key27": "UhKnAac7LD67pGaQBjRHy2utrRJzxnQ5DG5pgU3X7KMZY2m1m96kSPPDNn8isuwUfWoyD1r8CTEAbaMKtLQumNE",
  "key28": "2knRURKDJeQnZ3DxL3dCAfADv1pS9miaBM86Vqm28vks3NHMwY7Kxtpvqsej6CAWvQ3VBgC1KPNHWBfSc8uBnMAL",
  "key29": "37HpssxDZfG9D2B94YuBnem3ckWrJrbzSCB1DdNoRPeH6w4XEK8RinQQdZJHpr9kf4q1ADKo4r3XWbEmgaq5fxKP",
  "key30": "4E5v44F6yYvrxwD4vHp1BpUdXYcGXoBQhcDGSZe8zmVAkssAJim1YyAQ8u2onvPwCmmHAHsM243FnDqBzdsSmhXj",
  "key31": "37H35qCGpXFcKcU3qEzSW5Xy88oGu4Fz7m5tm3DMfP6cM6G7TDqEXmy8JskED7eSwobFJBbpr6QUgZAJ6pds8cH2",
  "key32": "3K9kN8SPNeCrgdMTL71YzikTYLJPt1gQsQbPRXTPC62nkHoQW9XNPuVMG8wxBLPXc6HPtnWPLfjZ9meMhZwbDus1",
  "key33": "5GyUZ393e7c3N2M5XYrsrzoPxvdi5mPsBWq1HN9b9usvb58U7Mh2MmCqEuGzxZXEkFpmCMobxgphKWXTgMyDfHgW",
  "key34": "52v6drj92v7PpUc4zzJvyggZNZNfcfJAU1Aog13udw6UByKGtF1ACr4UMTHyKspp9X4yA9QncKcuj8Lkxhxq2xzA",
  "key35": "2YRmz3d6zUQEQSFcsdqi8inh9CSpmLZNs8Fdjme9M7cvjtzm9L7RhbBbMCX9bhiP9xpSCjEfyhydHJQAEenF7ZeL",
  "key36": "4s3QW4BKR2Lt5ffXrBUfgjDDuZqUuERYPhxAafwsU8Vg5gTPcZEJHYgsSdGqxyws2rEoQPX4F5gpqBtfHaVLPdjf",
  "key37": "4qUDmVgiVewSQcvrfVWrqvbHMRgVF8yYm7CPfPiwyr1rn843KrWsMsaE7FuhrGdWS5KjqttSbPH63TihAiCeU2oH",
  "key38": "js3zST5zDHMddRD3AL42B9i23q5qLQK65Ud4GNHJxwp8mc6TVcnvzYZy9DL1nJ8q6N8sDToVuuBPsdgbrbPLmTX",
  "key39": "3Hjxbac7nwTuoXmSjn1EuxecwpdcJewsXHfJn4f73NfW2v9a2zApoRcrQRfC2ezKwmhJshcigzfBE1kwa6GVuu89",
  "key40": "o7M9XFWfJPBMbwZ3duqZmd7tQP4RyZM1YmSpCPhP5obSKGiWfnYrgAnuQc6bQE9qGEeFsFuskxYb1yeLGMYAfHW",
  "key41": "3KENrxUGGYxCC4NyzeFmEZ19weq16tc9VLXo6BX5vKsdiUJ2ZCyUkSM8uJuuynA96KNv7gvo7dc28g4MpRhzGGM6",
  "key42": "HhueQEKuJFahw9EGF9fw4wzYVntGqcSBGxHgo9muhj1ihZLSmPJJu7Ws7zhn6mvYNzW6oU8eTnUEHFJDgZDRaaZ",
  "key43": "63XiQzsnyhMS2iP4WBrtmMRFkP8kyqo1ZmFfrzNc7ojJTu5Ma9M6feST8BAG8WksqhcUchiEUeqgGqXogg5UssZ4",
  "key44": "2U9DZtXtEVwW6G1GCX36bf2dRy3FvUth2LNM3FqVWVKe5sfQskUuFP2CdK5v1aSgDmsj31LLqK9EPh2QTALReaw9",
  "key45": "DWngRJUxa7kPc8tatt27aCm6P6JZJCXkDX7D2UnNm5cFajE5B6BDfKjMSmbwahEUPtuWCfvc3rCcSWoAjeDCSce",
  "key46": "tEfcNexAC7M2dpFkFJpmCfznkcUPfJSBWYy8YBHLyrBHascQnfzBjqAi2PVA48RKvRMqpukgaHR63WXqBqt95TW"
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
