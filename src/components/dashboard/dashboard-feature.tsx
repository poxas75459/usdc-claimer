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
    "5rry8n1wUQaCu5D1oa98YzhWDrE7s4KY5Xy4tq1WdezyV61zQgYMatkp5S7drYMrfQpthauA27WquLFmrjEciyXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356sG2KWDo7qJsih8fdC8bDmFoB4ea1WcofaYNX5wPXjQ2sRVtKcpqh7oQ8PLuPsCs3ezsSHyZPSBxVUvSCFU2x3",
  "key1": "4992rv3coFc4AGsorWqRSsbFV6idEQYiByGX5gekXYpvj7Jsfzw27NocAeQidZibC5CzTYuYQ7yYKDNWK48p8tmY",
  "key2": "6gHCBmohs5qJzanrNkP3NuDQEaWqwGyr1vbpEZV9MkWsgkKcwXZJukoa5sC3tQ8GdfvrnMVvuztj44CHLUh8Pxp",
  "key3": "oMiTAqH7eGSr2WKskN9rAGQ9u5sbaNmWZ7q4favaYddTxzcNoNHg7xkSmehqZcApL4pU3QoW3EUZE3otTCwFdxo",
  "key4": "xqiLhndHSQUbgkut6KwBzhVGyXEtAq2JbfdNXErV4nf5Lgh4ZT327GYzrVwYNQPZPExAt1R9gKgWXvNhHCVYZKu",
  "key5": "2Eq7uwhHBySs9CYed9BL9g3uNRT5FiVgXa5qVrXr3e4zJAcqkXXAi9Sp3p3q6V2kUjabpKzyrDAVmHR8hzqtFo2m",
  "key6": "2dzq3x5b9GWoG9RfqcwTQo3jTk7kN43AXdAns51HCGdnJuweVzqRXbnPRnMmJqAGZBbY3LcftA2vr6jKcu8t57vM",
  "key7": "3yYoCKeFUyMY9YXWYiy3QVm3gBp4y3xAA972AKjC1jYcgpp4Ch6pnmzdHdk9w5nFxBxcdAj1dCfdAstAuUhkRBGd",
  "key8": "4RJddA3p56CZENK4j2eSfX9Ag9bGaDuydbvY8gfq6TbCMFkmysa6KszNTmSBCqmAUNxLgVwrieEobsYacBaQc7Ja",
  "key9": "4UjJkDkmkp6okpe1vXu5zaaUM8yc6mj9eNMK7Vsa9tQQsMKxE6yawskR45aJRs4M1thB53SXsLQXoyCjZXQX4jXv",
  "key10": "5FSVxQ52rnEwFN9iEPHDCdDERpR5Ce1R5PoRp7bSqRtcMotPhR3g3ys8rtzs1m1toLc4BjJ4xuoktpo6jHqAsDDX",
  "key11": "4vfnXmVirWe3xjtHd6QJjJAEXwCJEio7mGkSb3aFMFiUSMzEbkBuLEJapLV6SFy6UEpcfu6njzM6drh7a2y5yG8k",
  "key12": "3BwR3ULpWkEM6rn4ZVCunA5psa7bQxKkrq9D6VjXFH3zd3oQ5TJ4ggJ3GSbbGtKmxmKsEEYJYXeYUHsvWQ64VUQ7",
  "key13": "UEGBVchUCYWraz3WtrkYJW9LosmEGksuUELhecYGZ8fked8h42Mak49MbtwDKgAyFHu3PHtanZiB5LBXBo4GpsX",
  "key14": "57RC6DnHjmbxFAE4hiR99hAxFQ8q4ETBCnR3eGxeW8kE16futhGajJFAN8hmuvN3ueKjHKwporewbfhBYvAZKVhr",
  "key15": "2pzWYWd7jL9Y3yuwuA5nk3qTX8JzYW7NHrPxYHWa1JqCW5KT2XZV7X3kn2gM87csKEBi5quHTfsFkFiqjquS93QM",
  "key16": "jspCkiQRhB66KSuterd33PiDciYYaQm8wZszhUZpxyeLVSYMm32pwW3CVDRg9g2Y2mrkdeQHUAFK4REdTykKgEX",
  "key17": "5Xewu9uqHxKoMG38x5UoPY3Z4BLmQuP85XXekmrs1PpMrW9TCSyEw4bN9yBnFULLSkVcnKQL6Zc4GRCmpLhMokU4",
  "key18": "3RQHSEUEyZKKamd5dPwsHfMi4ELKgyxJN7d2RUwGMSjKkNhaiVaJMY5fPBt1VkG8Li96TbJUTPDy6xo8p5RPDPPD",
  "key19": "5XF8evHu1AnaY9bNtg2sGWxRiBAKWb3t4yZ8vrHmUZP7tw96m5YLwV6N9cVJPGS54kChs8Egi1PVY2nKGLPi5D2z",
  "key20": "qnygTPx5GtrcVsqpxQNX7PR8TdNXzT3nkbVDqHCgtjWkUzzXJ9ieh3j226jL4cFNqriTDurKskBMktajxURByuD",
  "key21": "3i3HhM9Xj1KLKEzAhqtta6Rsutin171UdeHqYCUv63RyGFqz4cyXjRBNNfGSYUYtuigfPmQDMnUF5CHJLV84Uu5T",
  "key22": "2CgS1uSverS1bzsYMpjxNuhHvqW8prENefAAe8bXjf5SvkwmSDhbs1R5AWyub8D42DcAsa2QPeGMYvGFtf5HT9LN",
  "key23": "58h1cRN4AgPzR9vLG9fV4HmP9q7YoA68KVr5gFDDhAeVVts5TQrZfeCALAMr9SkUQ6wMtkXdZc7ATLXDBFE1p28n",
  "key24": "66TA9ujp8Nyh7kHbTZujtfD2X4BGWtjiHudtk1kkudUYdZL3rKS9YaXCWi9jpbAWpJZpgKdseRUwZqiFrFCkM6NG",
  "key25": "58vNNmJCfup9uzHV1v9b493MDiPYRgYvZ6eDEcTuqjSdsMXBp6947icK3x2c1tbdpkoXzdskFhbPodHFKFh72LkU",
  "key26": "4GKxjZgnFi46PpapW1wha5aDEMi2MULvHCySFKj3ai6fDfZKuenZdVxQXCEKaVVC9PniP6WFtGUwH1UkyBvwxnn9",
  "key27": "3VVUzunaP7JC7rZBjf3wFfpj2BrqCWMYTg8nsGZchVCr7FiCRc82Jh9LAXx6fGyQRSgzULkG1h4r8GqtpJz95LEz",
  "key28": "345nC68sYH1kZgZF9GDv5TzhenMZZbQrJmEyGDrZAsytJ5AXY6o4UxrkDuDZQHGXNCUnUhru6hJbBkBTzoH4CqeY",
  "key29": "3VQstwcu9RmE8RdzkQQtJt72WvRdadFizSdPBN877zpRhAnGkwJh6cEyt6dNXYi2wdE1QGd3wCHZLp6C6DsB6XCM",
  "key30": "3fdrwesd6Mbod6oQBTjejw6AbtyoKyP8g59rpc6WAVreikyHHr228oEaztBskkVwuDpy8EBa2aEEb1eDMQRhSQ9F",
  "key31": "4zra4PsRa57dtn8uc8a4ZUeY6S9FYRbPJ2csaWdJxJG5wiLLkM6qhJC3KxwVJ6c3V62tiSCf4xHhbShoHK1mfPZ7",
  "key32": "5tJh8cWwV9UuG6aAA5MoCQZsrcSAbbYNTxAEDvQTn61m2Ysw9wR6zfEuRM367kUqBXdqbfnKHoVAbwktwgd4tzD6",
  "key33": "2CfuwbnYu2LoB5cseuoJpxefeJopzG6eUrVNb3wUGuWAF61zwk9HhKkQEEAVdw8Y8NdHgdqft5NyEzMsVUsrXhjG",
  "key34": "2dXsKYSucRnGi9pHD9j7xPorkHzB21ZNpecMfvax4MW5anc86KsfrTToG2eihbxk1nATG8auzB1xsi59BbmBSC4p",
  "key35": "3qfgs3cN75QqgtzK5CoW2av3oEf8WMxB5BvYbmgknr5izKknxCdY9s625svcLNT3RXvCM4DH8HjYYTboH33r3arT",
  "key36": "5PCr4VnSzGA4xjeB5su9NwdfiHyF319jkaCiphGMjMJPa6Vp5HQTQZ5iSy76oLkJzhhD5gJgkdHEK6yX2AJbXLBe",
  "key37": "4gTby7ggBwYrnfPh1CZhFVe1yPcy2GzvRcT5wByK4fHuYyHxhALqy9bABjqLFRCJ7TEMTcvabkrekDKWsn3TcLw7",
  "key38": "3LNKM9Ycfeg8YsjDWz8TKiGQER2GkP77KhUg4SLhEk9tYXjUtYBSvLFgpVKpnUjBdnuTHaLSrbPLpyV1NRup348y",
  "key39": "gffZ7yXW4FSMpp6o37Bok79tMvv4Xqs1fJC86a9AHUS131fjXKFZRjXBcfLrvD59z3XH3C6xyWsBZCxXYT9i4WE",
  "key40": "4asjt33AFkbL2z7SU2ZkkKwZfU6sdwBD7XBKtuohyFTaubu3LGNvPtzph89wugXxiHaiARvq46QQaM3pgMZ49Lk3",
  "key41": "2VTSrPG7grFBy8LJ6fCGGGBdTPoKxC8TWaTcPXrrtCXiiXoyxUqNKPmZCP3VkFeA6sP1dwFJdbAyovjnbFBTZ65B",
  "key42": "gzXrVeVZzx1zdzCBzuutBdTFrpPVtavR4dGkm5vyhUs6sh7n3TPqmuJnwvrsTvaJLD1JLKoSwjEU6ruCVLR2Nv6",
  "key43": "5Awb3pM8eZmfVsxMnwmMtjZ1uag2KBQWFH42jivJSBvA4nMRQwtL7jDEES85HZ4JgEdLDq5FChz8mBw3hA2PZuy1",
  "key44": "4mCLnEovmEYZqo8g14m555JpBNuT5or7MnTCGPW5aGLJ2Gjjii5KzfXJoauv9yq2ktt41NvWrisn78btigfqw8Y"
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
