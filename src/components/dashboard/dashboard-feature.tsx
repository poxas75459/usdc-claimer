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
    "3QrjTfKqSPXnHfSdc4FSmskedtfiqzZppq6h9efFoRaJ3z81W5kYrfLZdndcacetxc6AChfjQ7VtiVNRu6HCfrY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z82ajhqvkkY9NKS3kU6cyTLTYL6DUiaynHHHc72HEJSnTpfcEYTPxubKFica16RVXbSvSgp8mUYj378CSPosPPc",
  "key1": "3B513pvYzBeYpLdWZoFjipxtJfgHBn44W5LyRGNjVrW6AGLC53tZxwCBRFz3JrufBh4iRweYtS4SsixiKmeAMC3h",
  "key2": "2BWe5tQ5BGeN3Aj2fa344bGFcvU649gAvm7iCi2JsVtQfPApDeDB3ohEFyrn5s4munxqUnmo7jXkxTVCseDX591Q",
  "key3": "2f16rPvSF9tbfP3HomBkqNUi5yrvRMNTWVn5GXH7NdKLEDoaQnpSYEzopypaykoLDYkJUi2LYRvBTfb1XKZwqago",
  "key4": "572Y7BKKG2B4ktBCr3fQWD1qBbbYvV8teJV8GQsu3iGQGZT4h9bUXoFbuwa57JiRzVU2aDaznMqcNaaewNy6xXuS",
  "key5": "4VUeQyYYjYb6kq5PojZM2XA3vVcAP8xzoTYSvbUX9g7XD2T2rek1K1jtSkmqcY1zkwVt796k4QX2j57aPC9JFdFU",
  "key6": "575AjF1WsHyc5vppYymyjkEZZfS7pNEcQ7yHSsJbVmgFqkbmpPzKHTfueMcr7Ymy8Sd4txmuSVEaXEHfZ1erA6nH",
  "key7": "42Qmri1hRXtooPzE2eRQTAQdDNQVBHsSJ5Fdo8x7Uv3bg9K8kyqZwedtp9HySJsFUYMxGFfHeso6i4sLS1BNR3cQ",
  "key8": "62b8MsURSmqC6kMzzpGBV7EKFx6hNWkFKnrw79WkofeewTB8umeoSgRUenVX7JTn8CXzVNzswyKzJRMkgEPKdbNB",
  "key9": "5cJm6njFE4r3ZmNiGRmMwYMMwaiQWnYELJJcrqMWTvGe5dV6k1XKqp4ag6mH5d3mQBqQ5MqZJ37noj7VFLzg4EKb",
  "key10": "3Y2bnYcRE5ju8jHk2Vw7AFzezfRWPXJSNhC2NLVhYkdYuJdqzfaFuFLwfXLBKrxdCF1vVsHA63XpF9JhtX8sDVz8",
  "key11": "5CKoXH5KJKg4Ta8SZWPAE4nHCWnhDN2ouMXzaVVuGTTnqbeb5T6kVgz8x8SW3LGDYaGWpYKvfoaks5eLJR1epgXt",
  "key12": "5jBdmLddymUb8HsysPtqNA3MLrXxkcF6qrTzCvu8zqewZQ3NGLgaRFCsKHmAAEK1vnAQA1L11umga6beHqpVmbHw",
  "key13": "W6ZMFCAFG1sJuYYBZg7UPgb5tezf9NRXZyZVKGq33Hmi6dv2E4197Rb3Q4ED9X6zFxDP5AuKFnAWjTaVhezY4W4",
  "key14": "4BNDdX5NpxFVtu6uLBvh4tLCck7Q3QVYQ2E9qPwRboa9TuNhvrx4JUASmA6EdHnx1iJ25tPoZyfRRNfRxbtBzY6v",
  "key15": "4QfrRpzTmJAVSyB36JWzXUpWTBfBkAsK7pcVqKYPMy3w9LZjLfKChjD5EX14eEtSJGYYCd8optShpybkjfuhYvfj",
  "key16": "4JvX58K2JeyRWLENM6svWaNx1LbrCdeAYyd78f9Lpujejk3xnmyVufuMtzGYmECqnP9scjTL7bL4hRuBFqVhx9xM",
  "key17": "2YHK7q4tECb2z2G7iyzWLEzDMGth5gJFX7fZpvg48LmkHFoAxzPXsJ8PqxWiYiWEPUTD6hV75gAV6wA4BVPHgxte",
  "key18": "4BMwAX33zL1KaCMHKqhwyJbvP9ySyjMuHDeVW41CePtYxssFqkF6noAaVAqKcxbEqxD2X9CRzo3WE3ddDsSNxc3D",
  "key19": "2orgGUEcEYaZVoTrhzXYunW2yBWLTLU1MAYutXUXAu9umGpcAEom4WXkHQ3yT47xy67ATsZiMrUpHwRF9NoyCwmW",
  "key20": "38aHaZAPscK93y4iVDebX5LVkqqa4uYcWhk7QJv3jn5SwiWFDsnFNZHJ7xj8VY2fojqahMBipkZrpmSLDAZYDjzj",
  "key21": "2yhmfLiSu78UtbaP5FXxeqyUgTJAtcWeqJ8tNoAXbSGFQbpyynBTsSTtnEdCKtTcsZAzXKCyvannybHzvwbQmhuR",
  "key22": "55wf1josdhzJm1ybyPgm2pQ2QVFWR37M29K9cictJhq7ZCxpSAq4oz2sZGRybzp8bPR1VopSkmjYRjticyN8Wit5",
  "key23": "RyJWqtcxzgbzrG2vTHWB9d2FjX943Jv42ZJFWmvGsM7ocACdtyaYpegSXEZMz7ztW177ejhwrZGcxWTofxTYyM8",
  "key24": "XVWVCeqGxyzFihq3g479N9wwQSFAxNcPAbXVmGd8NMnh1cuvweBL8jWovKqGKwZxwydLWXqWsnouxXHnEYQT8WB",
  "key25": "4Sej5fjv7fVxx8uC56uNEaNpGZV1w2D559JyfoJRboG3znzM1kzfgxQYZDauJf9WkoA3YwdLNxt6TjM7r2u3YQ6J",
  "key26": "uX3iHg6n3ykS7PPrZEvkTkE8qSCxr4QifBpFvT2BcrbFHaKSVrGCXfq7SxHohuh9Un7tveX95nFhCQimCsiLp9c",
  "key27": "58ipsMivaYKPC934irPeTMWEHoQif8Ut8dxuDWCzijEvfu5hLbSD14YP4neFmE2VdPpqNprLox8bQQK6NEaQUmfs",
  "key28": "665q1t4X72nCkUx26RtyWJbJiGv4Fk5g23p8jgwrJuTsqLMgWaXtxAXD1S5aBpdj561SCqo9uGQsT8EU2AkcCWSn",
  "key29": "372f3rcQ9JoPUh4LGodFyaEfmpTzYpyzNvGL4je9Zsv4KzhNGCtdVGtuzxCAiuceGYDRswntgHyzuf8cr5mMsHSu",
  "key30": "2QPoGtfQrkJFyTwCauFWDa2mx9t7YoFgjHo97ruBdhRtHeR2pTzfxx2noFShVANXXP4k9TH3Y8wgXbb4CL2tPGSf",
  "key31": "4rhMLZGAiqe5WNjDYAJpDj6cjsR1s771QcMsfBdNHDYdjEU5ymfjvNu5qQDrarL8doJ5zBVwjmmXnA9XMuTVYhtj",
  "key32": "4kFDkjvL4vgYfbPZSapXcURf4b3qcMrEo3trmBtToCHUPdVXzbNFAJvrXXxjkz6JeT8tnJDhJgsGaNN1YEbcpCj4",
  "key33": "iRA5URcX43Vx8WiRzkqQCdB8qFRBNzxordugU7bP5umq14QrimbCvPJtUXFfgvRP97yanv9Lsqkmy1RZL4mG5JP",
  "key34": "488PisNr5fpT1gVRuB7RYEf7oki38pRarZte4a7XgN9swYXpPJ1bXPMTjMJMFmJbaho4skvPdjsCen4d2qNUD4x3",
  "key35": "z5V2ov2QaTo2CfJsLoWyp6MGb7qJG61x4awy8tFqyyqB6A4XZWhHtbTWFX5cQ1agXdT6egEnTYQGW2XNCfHdLJf",
  "key36": "C6hQAsZo5pbVFiucdXJV4EWaC4YmNBPmmDKrmBEKbBgcxRQ3erPdf4LPLWY8z6BJpZ5vNXDYhjZbaQoZdGixQZu",
  "key37": "3tEYABs46QKLK8eFcd1Zqseyibf27nwwwXtyHor41GttmnQNn7xrbihQL5ofqfbmXvZ6sxsLvXVmjcHyQYbWKkaW",
  "key38": "4oJ7c8cxkwpCTAENr98wnx2V4EBn7bPXN6CwLGLxn1nQhVaFSD6v1HaeRxtYs51iywBnLxxV9278EZ7wmA9visNb",
  "key39": "3hZScXYd2iJP7aPsdzLEPNreeAKLw2kjRCmbDjx3UW5ajNUuLLUWoXEZbrPSDGRFh9MQ2kuaoskmTyHxZU8UHCht",
  "key40": "2vLrsQdRtCv12tL3CVdXM6g6yMDcWY7LYPqHaGqwVL9ix38uRNSvri3XA9qBz5QYBu4ro2nLwZTeEayMyHbfF2Fu",
  "key41": "57APjfZZHygbQwV8zpKLXP1XHrKuzq5kEhSZ44LshZi3y3VenWgtguszhBKuuFFXph5Cv9Se7cAePcPnmACZ1Sje",
  "key42": "4R5eUfDrFosy19MDHbvmEMjAJEAByb9F6oMkXfa15VEyn7YzpH9dY2qz387k2syY5hMNvEhHFmCm6KMt7ppKni5h",
  "key43": "2UAekwfCY3xKw2X6KqRubN3WGt6p6ZHSkzuYjW8krttmnuhXsAVjdE2Buo9mMMjAhqTCPJfTgifaCfvFewGNXjJJ",
  "key44": "3PqqAaAz1j1Vgg4GdM4WYVqD5s3ZMcbGDEBQzWHiY4JmJWnWLgmPsZkh3zLr6fKtghQEStejtT8VYMCzKpGRdPkA",
  "key45": "43MMdPkhcJ1HZT3mPHHM6baDivuoqrg5TdnViHyGQuLpsNnUYFCzzEgFyQyABASFMpHZmDcJ2Yk8njWFov1skxRY",
  "key46": "5hTFLwRyVyt6LQL7j6a8GgEMbtwNL8z6zjfo3MCmfw4u3PwBvPibsbT9Skxu7vib8R7frJu4h65bVeEkazy2fgQ9",
  "key47": "3ZD1ZmD2tHFVZLk9picz6edBVYiHHNnU3v6VSBmNtYdJpowkTwpjZM9ExGUucy1g9dp2iWd1phmPsb59HzM8wF4d"
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
