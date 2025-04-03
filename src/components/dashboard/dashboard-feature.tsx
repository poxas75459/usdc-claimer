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
    "3V5NfAYrFtr9JzbKXifKYQb5ngBReF8vgovJwSdFyky3fkWrZLnBAMHgEQs9nufQSMZB6gBpXSHkHJx8SYKAu5RZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6ohCRETYocUCg2A1JPJAbvHweKHV3jo11TJewnR64nBs3idhrxCh6qb34kAnxeFkY9L2fbxnLqZ6FAQjS6mkwG",
  "key1": "2KB1bgqceg8HdiUMK2kESY1BmYq6jKjakEKZzJj8v8fqURWXxENd81ixPe8dPSS2Yv1wa6GoUW9siMiubzDjy5Za",
  "key2": "66EBgk346xU3BYX6mbUXYGsKqkFoir9mSDDiRdFVgQiqxg18P5QxBuRYh6YZ5YL3PejeP64BjeqF35iLUhxAy3L6",
  "key3": "romq27dhBikhw82TVzchEg3Ci9WnFnfV52B5rq1frSgKZsMF1vHXDkKZ55ZjrnH5U7q553hJ4YozP5soy2fAGv7",
  "key4": "49g2qaZnjrTWQJqmVCadyLbpn2Ktujim5pNZRtfUdjkzmMjwoqr1kee6hST9DYLrxwpGaF11WJQ4Es4PRnbiUV1s",
  "key5": "2UQxgR4zDtMieThMh9ASeNA5q9ZTYUrzDx2iFmHCKjvF1NRYyBdXEZmPLCQKG4SANsJQerYuUM2eLZ6nddKFqKuV",
  "key6": "2Rv8638PmQoHkEL3iMqSGaZUeoNQ5yQ9CupHYodWWXb6BTkS6KhisCaad26MFnD4Mf2zNjyocaYWvqepYRVxoaPp",
  "key7": "xhW8TdBf7uw25jD4HZQPjMyjTLPXU7oMKoZYxVa5Ti34keSSFLbYxsCpd2iyducUKp4oRyKjEtWp4RbUjeTwM89",
  "key8": "3SVhhMYpHoBx1E5o8KTmVr2PatBzPRys8izq2ZVvJKsso9ZfouBezJhA7nqB9fXpJWgivUyAUvyiVZED8zmJ6w2",
  "key9": "51NfxHKF46HBeM4ecVuqfdUvbY6NnyNoUwsXFx1GE554hDQh7EcWM3E6M1bnFRUyCp6N96pQjGnBN65yekNZcCZJ",
  "key10": "3ddbUpepFXzRGYtZvy1tkZ2cWi1acwBgUVbXeHCCMUSevioYA59ciDaZLjU4rowd5fhys9VxKB1UmbURjUM97rmM",
  "key11": "mC5pHgHP44hzfJPKuyrcCgDq46SYoa4zFPsVs7mXgMXNSBEH6eo56N6QRFohPYvjfUSw6rLyJ2rjBDgQLNRzXAB",
  "key12": "2MSuyH4BrrpAaVnggSUfF8tL1RAfb5RHzcm1HbuYubVRcJTTJzcrtVxFK2MCkDkyRG3HMbF6XDWUBGsLyethFEGQ",
  "key13": "QbGm58aJSyF6J4E9eSdNe8VWh9pV636WApziZQSSu4J9RKuhbGhVdNqTj7Qppazh3LPbXCtKzmpGjbuToBA5JVz",
  "key14": "5ThAY5wgRFite8u9meAbJcQmZpN92eummLn55L6iduuVN9JJ9LFvPxaaEEvcnJUtzphgrheGfpzxdL2CvQo33ouo",
  "key15": "3q2h25cm7dSheswMuj1oSZuwgewesPA3FS1yENjZKC93Z9Em42c5JX7fku6CHwQXFPD42memBiw3SzLQziskiQhb",
  "key16": "22snPjyn6j7R7USsAxRsW7vf5Dbg1k4Vi5Gw2xqJWYqFoUbtq8xhoEsVxdCasS2Xp23MtjDS4VKoeZaUNuv8uvRM",
  "key17": "4S9kiRxdesBuowam96y9cEjmYrNUWeybCTsbXSk5Y1HLjzX2SdHBi1zTRzASqd6L9GGA3c3VSY2WNkg1yLBHFsiU",
  "key18": "2GV5q9ofY6PZM5Li6koFDxwJXFcU28biRcZXemrpjCy4vscUrK1XUDtQCiqxFC8dd4ZjQGazDQPmDKy9PfNkt3Bt",
  "key19": "2LwPCT6z9T7ULD57jeWRLsymFJofmoLGwSheTECC4LGfaPnQrnZ7cUMd92NPrkZ6oKKE4BDuWFkVC6wCCHAyC51V",
  "key20": "232avS4VU8o5veQrpohMxHEbRtokbw73bP44MoiYAD6EAaShdCkkMYxNuxi7EPmd7vjM1cTY69aeAYVqatfQsnj7",
  "key21": "2PLEGXni7B5XMCApUMEC7tXAWS6wbkRoGVKJx6b55eQb9AMTJBod5nSHH6tqZks8k14DTJjUefkkovd9Q5ZvJ9EL",
  "key22": "2QTUbPTx4pje43Q9BMkg3rAHmtcKYVkSJg9tbw7iPkXbJ3b8tScbCvQybJ7HpWTMic5DBPFybXkaXhxqPAXcipmi",
  "key23": "56Q9UYnE9AV3fYrArgmYp9TVhJKXwEggC7tX7ZcFm4TqRrP9xXuhiH2VKaeE7sVXxWYEkFfHYe4Q8H9tfzgijhbR",
  "key24": "3aYzX7g18a8erLZgTmiL7g9mSDa2zMbMThAMoW6ub1s8qejknkiCsKYcqmd5KNCffah17Cz8LmrLAjzYyY8YHQz4",
  "key25": "sgArBvgJwzYwchQRfg6NgvyNvq4wdnKNCxeyp3WKQhXtzQnWrseDer4uLu71tDPXXb8e8KALakxhe73GaphCUht",
  "key26": "cxv1z7ckmADc5ZhcMYUnR6rABXAxS8FaGfBqJnWh7ndKzrrt1DsqkAUbySyAmuML2taREuR78fVGxnJXpKBz5GK",
  "key27": "tJZu53KioDGPtiNi8FNefNrrW48M5UJzJYFzHquEABbiSZT8yUsUVPHGQwyQugHJX1MQACCrSLU8WxDSasq8Gei",
  "key28": "5mtZ5H2Tx7LgP1VukTfqZse1sftEDSdnrQpHC3jis9e8Cys2rDUJ1xsPP7kpTgB48iEkVXSYyi7TXGLA4dG82162",
  "key29": "UbtTaAN8a55CiNf8wJANykXVBhmyNCbDYCtjcPLD8cccWcjuwA8HhQdiQhW3RvCNQDnQTtM31v1gJ5Lh9p3wsy3"
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
