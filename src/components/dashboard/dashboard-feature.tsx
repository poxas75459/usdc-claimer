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
    "XSgdc3sdVyY5Z8v6sXbqqpNQhcmubLQGquKMLkVaE1v78jzCdaDbDS7vKg2EkAVTKSZFxmSNdjof75vJ4JUWqMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEjAMyj8d2pGJyU4nVKqCRYhNjFZhASspNW3ShS4unJ5nKZdgUx7wgKqNjMLeTL9g75vYHcWTPQcMMybZVesp1y",
  "key1": "2pHinVY6Zpm4njHTDVWq2nwTR4asWpFgPFiJtbgNdev2MeBDsXbT8MQFTzbyR6kKTFC5mWSdi6wNi3k7uueNbXG3",
  "key2": "5JwwbeSZDFerGkYeHYzbyXxeTSYZ48PJ2rpeJL5Pb2kejNa5udvhkKLWqu8a4XKHSmzGdmTF7pLBEbgt5FFZizAE",
  "key3": "3u8giYBYLP6yH1NiozSutPZr4mMPajsuE2PXF5XsRvo34Lhb3u2j4rmeLa9z1Ev5fuvJoJpyTCrx5RqtC7uof9ti",
  "key4": "3ggBj5zimVxkhEQWZkLpUTB8ATPmfDhh5o4bFcvRWjYpPutFmFxpyWeiHHmrXHibK7uKL1WGNPwtADEbnsCMVJ1K",
  "key5": "4NTRvzCQ2Y5FeKG3GR3uPFZtHJ8SzTWktpCEnvDawR3AUBk9i7gdTCv23qkZQDub6jfMQ7HVDCfCizn68rrDQu6b",
  "key6": "31xeiGZ4HGFzzXnRooVb9nU6YtiKX7nVFo2yibnPURLMfxL6BcmVW7dZBVspxNfBKdvkVeAjzSqfLg6FELJSDqhB",
  "key7": "rmgwwwvwp8QAc4zE4gUhRUJUDWcgKEAS8r2dudFy1U3BKPVPy7asi6f3myzmwd39SJtkGrvrhJuZcK4r4aqgFvJ",
  "key8": "tfFuxhUjKCtad7qxyqyv6uoVuaSRgAmH3fHkCgNnQmYretRta63vovjaCnDR1pCRfeNot3ztdC29ZZu1CAvz3VV",
  "key9": "477E4Zzc5eSMS1E3n3QWvuVptJgDGRrE2Ege4FQQyAP2SLYGz8qXui5drXcD3TndGzftV3BpFKktHTq3C4xutBno",
  "key10": "5X9r677ARBuPihTwjiCa3i3pQxauB89x8P5ujR3HFEvc4xKnWLAf6kZenUwC9FBKiHh2Xf1xKVm8dB97AQY7ydfe",
  "key11": "2BU5cXieg3hKmZu7pkmhGCxjbU4Zuy2YpGekpQHdWWirP99GN1SZBM9xpDysYTXNfd1VUEXBpwXVfuer7yWshaPe",
  "key12": "32fvCL4MwCo2W8QmVuWchGyHWz1RMYzQS7mKbd9hHJykrBEY8X5fawHL3r9W3U5By4L8JXaJx6ZAGgCiQ8xTJB4c",
  "key13": "3gfFo15LsFnTuckLB5LAofMdceQBh53QKtKHqx3t7xeYdUvn3rTQZgncHuusJyGteCewsB3vCF8cMwPdxiBpRZgD",
  "key14": "48K5xGYvi8GEJmUJjZ6qN27ZAmknZyXVeB3awVMzscgtQRbCPZVyRJ5eEjWMCzyPGKXEA2tipT8DkxoGjAy7x5Ue",
  "key15": "3pYuzMbL12gkBzDN5tYers3k6nF7yYr327GvocGwTPjxPb9ibZuYYJpBJQRYhNPGbeqW9MQLeKBSdvSSo4FToz5V",
  "key16": "3feoqMiSHkGTim2ThwC3dtXm5TmGYErQUtsscwMMMXNFWL8TVvwjSdgbKYeb46DHYC1BH6fLj9fgZCCtnEYfKrsq",
  "key17": "kA17Cjfb5fHjeyPwH62TsE2zJnQHkquBJSvGQtaieXPooNsVMj8NfXohd1mf4krB6yJ6qj4WrWtKC2h7R3L7UBi",
  "key18": "2EMK2ocncmfR72ZPm2uPnQ2keXR9DpEorBPWCst4oqBktFjA67h1oxw9wTqT2gtfauBYBRNyytsE3t5YQcLMu3Tw",
  "key19": "b4vKwSxFEwREPT9ZA9EGhcNZ27dYNK4USyem7rTWahMKbFokY88C4TD8GJaQbYLk1iTYvPxU1xppYKtfX16321Y",
  "key20": "JzdHdpU4DTB9drFSMTohGJdJQjeSwSCvpc8rUL9bQtHbPnhw1bHtEApz8AjJCjJDmhBviviPPnfmKpZdFtt8wVp",
  "key21": "2Ekp3d1F3U2EZaw8Lpg2gTNiUPxeRjXkgWVRz5FQaQTZSHupAai91N8zsL5JhGtzLCAYvRe3345bGnkmmfJfUZQs",
  "key22": "3YmygM8R6FC7WXsiTCHGVB5vrttjWEeCiR9XEcHFNdhogWuGB9gYt9QyQTZ4VD6SLeBhWo8dTR6YbwRusr2whbv6",
  "key23": "3pN3rSwNXHp8M7otwzydyXobqKM2T3G9tpbXsp5iJGmqVP8rgba6nHB1hFy4eoDFEB6qfnLqvmYj6bCVFgpriafh",
  "key24": "4HZAPazm9BYPZyjso8hL9PgRd7uRPubD56N3vz4b9X1NUS3QSh5sDLrknYS5wpYvjfBePZWCDeAVErFV3WUWm3zY",
  "key25": "35U4riT3AHBY9C2VZYdTnGpJXd3CQN1qydPJoJLNLNnnfntPnzo142rPeyxtGGHng4Gp4uswahjvEAc1NBtvfxVm",
  "key26": "2BUiCKS5QAskZYMipKdEwnTF84Fghf2iF3BNEFEanwS96WAG8zSU9aUtoMAxu9mti1ASWLd49aJUfKoac91izpFP",
  "key27": "RgEGkZJw3pUWhrEhKEZnsLGwQ5NXoqSXaDLwus1WVbidFVXiPN4bBfYLeTJ45z8mQtxR85HyKoEjfbzbmXnaBT8",
  "key28": "w3YgVNS1ABEroz22x934FQcPqjadkQJ2DyXNj6TimMhtdz1XC1EPVPErn4NY3q5XStibNqpfkoGdysZcCRK7Qmi",
  "key29": "4v1dBC54bFeCjw8YXM9fxhmLSZCxMTts6fdkGwTjNxbDcD2nmhQXjtDaEB3GJxFT4XsuTaajbk7kVJ4D6oimWdAb",
  "key30": "59aFSTeLnQjGGuDhy9GuXV5dAp8C7wKTc4MTb3kY4JgzUeUxs8z4tcr4zB5sLNp9xVbcFPg1tNekQD4Bi7tLVN5Y",
  "key31": "4AfhbKPk3YRAT68CGS3GikbW524m1SXkDJcevn5PspUnaSJTmWnYMr6rqH7QnuX6EWGpCQ8yrn2e81rwdG788r6Y",
  "key32": "3WHxQm3wciNLcozTQriZfaHB1JzH2dCWWsrjZYhGksMiC4HBKQBbBJiapvr3zpaPtdVaNcNwSQruBmeLkyrPE6PM",
  "key33": "5U9Yxb6C49ACzt4do2MVAycYvUbnPPXnF8g2zX8ByUbxaAhcuHCajBtW1a6n8egdvFM2vxAazFcJSvv1n6MEW9hM",
  "key34": "2hmC2Gumzo1T2u5bUuBT31zQAGbSgMFVndNvrE1d8znk9MA7eEtxPVBpvz9uJG4uJKW4hcdM6ccZt7mHZhvmqjVr"
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
