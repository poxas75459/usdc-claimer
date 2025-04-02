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
    "5PmgZYuBTChtxRPWLEgp9fAbnSLGUsjVVccQ15JWxvEBAAYdn4uzjsn5DXpwxWEU4eW7Bz5AYxiZfqpxGzQ6gKwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTFsBFgrVJcuy29WNhV2tTSnnf6TMcXGh19oeKaKajmwkmdwW2W6hAtzXgksi6zbR51FnU17B5wdpVEbCabHXbk",
  "key1": "xuXxhwZ1Awd4XM3P4VBQXkftt3jTYdFTJgftqMuvpC5KmyyEL6A4Nac2SVd48TsFfbMpfWeKCrtMhVfXQ7SuWP1",
  "key2": "4a8tJsWzCAcZ4W8okPUVBcF2UuYiQ54xrvffdbWDDWNaVybBhLsivASbajStsNfBea3g5QeauU9Ee957esnFsxBC",
  "key3": "4dF7tJ1GxEmVCuk3cAT5RGtPoyAtBFaqNMt4VNbtdKmEEkAH87TGoKGuhbwDDJQYAwyPCeipzFbfN3oV5rCeZX8h",
  "key4": "25UErfKVgoxGUrS3kEzACe5DgZRZPDWSYmXESZ915T3XQqNmZJhKYAH2szKt4Lj7mmCTme2TTrF4zRWCYL4scC4w",
  "key5": "4AA2Vk78ck9ayFdnC2KJqzZpPA1k6qs7iucp3NGNTxoz5mwr2ynQ9KvhsmKFAMxJeamgdhoNkarUXoFKDicDw41P",
  "key6": "2qUa2VGJVNCDPzbcc4KvuwND3byB9FAVGyVGTQ9LqW68es3pd35vc2Xom8yBQEcCRekkS69dazDTDCGR5KVh67qS",
  "key7": "3FcZqFQkyyVTCR4sTcigmPmYZ8D5JCZJo23MsgWSWTf6rH2NfGwWq8WgAseF3uES3CavjH19RkK2P7AJaDQKLv4B",
  "key8": "3724sXgyKvhYuQSSqYZBBHLB88yohhhz3LL8cFLW2X64BLuKcVRGjQ1fTc6CqYrexS7sXjiBifWkU1jPAV6aCesK",
  "key9": "3HaCwWXJUTaqcCmyXVHSBSSq4yUk74e7AEnaoFuwdtbLufcPJtmT3pF3bhKFzszuaDghpMNvm45XvBnbAxgLH5ZD",
  "key10": "5VD4YxE2GjyLe1TfTxSTc39aASg1r3m3prV7D1WgDpCuuq63orZcNjQzkmKvZk5GqgfCNap74vZKZhvQLZqFJoAc",
  "key11": "oz4aniWBtcF86nUUnkorHyyu9YTsSj2jWTsSuhd1qS1crxKwntkXGs9m6cxpCS2jVYxs9AWipiJ6EYU1zNEy5zx",
  "key12": "Tk7gBSwEVYY84Gs21BzjDABpiRYn99kW2rCxs2hKD8WpE4PVNfF5Jn6B4wVPKmJGtYHTWnLfAerGAbmPoR3FQX8",
  "key13": "3p1uwqQAForC1GpaHLBmyqC1ohJ9hCrePANx1pkTVLX4eMNqp2t1sNPgGhzGUTXifz3kWnSsejW4L3Bt2ddBq3G4",
  "key14": "4c9DJyZkSGKNscWhYuQNRam5H69TB9xMP3YLmvjJu7prJHtwdEevXUDjmzmJC27nRw4KdwWGgw1kBoRFKLVP1BCT",
  "key15": "7NW4oDuhg19etk7qXCYWRNbBdq6bwi7LJe65SVCoWKS2HtfvL7r34bj3Wr33czJP8UP48V4iG7caALN8KnxkFFF",
  "key16": "29qaHZbLpXjZLQT3QSLZ59m8oES8Z5S38k9imnW5qV3yYTK8YQTnMjSpBvk8QT1JDZEkiBySWE54U3Ztquq6pT48",
  "key17": "3y7wWQfairGZJjecmQc9Z98vmgygiC5MWfczopWPRWQAw8kRurLZBWttyqNpCLQxDA5vkPPWELANNFXUo4aXZb6p",
  "key18": "4XQqkrX6KYPSD9LwWWUh1DnUK74qu4yQFD6SM2UdVrf2CpWM3EnBkt76vBVxYJfNRBsWYVn4AZCNg9AHBozn4tp3",
  "key19": "4j5XhfW1Xg6hCuSFsBNQUBy7pwCDQyxAr1C8RD9LKeKpxRrTXFsUtkSM3YnFkJTNPM2wbYGqQh3DckBkt6zJMkkK",
  "key20": "5zxvtpt699SukTLuokPgnDS2FxCXPJpy3x2abbpSA2QGLRXeYyRTXvNuSKp7VHsgs5aRTrCMRmQR3WZeRbfq82H7",
  "key21": "27DQ2aAPi5nMUE8dXvGP4ntHG5CpMVQGJRcjoLXBjsNeBD267Q8MowKDLnwiDDSpaHgHgH1jTrXqH1UAbUsS4brz",
  "key22": "yUxn35sMpP56LEbsXFzjQWfbqMBpbdDoDTAac5Me9k5yZ2QGmbLA6w7ZDkSsx2ZyVTHq3QEFRa5Mjt6wrpsuEzq",
  "key23": "54kn7syYtSVth6NhM28cJtc3EkSbb5TabhyQHvNenVnxs5S8r9jpTr4AGcrARws15hEVUvASHdLUNZ5LbrU2HiDd",
  "key24": "3mQy48i1DakowZkHiu7wFUY47jPqU3xdQS8msUnCuGwV6mYLG8y57zvALAEKUz4F2WnfBtA3ScT6FEMaqqWBrJZS",
  "key25": "69QCM5fWuP6mcFG6X6ZoD5dAqyqZmpjWCp86wDgVHEKQwm8wn82R5KGvDujr9z4BsHaDzMAnnxFw4UvQZ8ZrVxf",
  "key26": "3bPt76gEmZTTUgX6DB8w2WvtrSGUNTBvLro1qau7ohBZyPxuTQunL6qQRBhdn9EudV8NvYEFzNi55y5wJzJHGu9Z",
  "key27": "Nfi96TygSaFMjirL3mtFTgi6vJCtygX82MvBhpj2KFU9KhrfW51CutrbT1sooXhsHg72wfNvhv2Nj1xUhE7oXQK",
  "key28": "2zE2QVoDhXxHAAtsnTgFQGzfC5h2DhTjfp85NudNzBeAVbwsqJPPZ4rcStjETLmJjPsh3ZZhvzwk3W83ddrBVsiu",
  "key29": "YoUhZdnJEMfPCNfnrpag3YqZTE1sVeJowud64Zxubqu6fdZRxY7Wby4wL9EL9yyXYFNt8XP3nKFhVVq2nW9fzXw",
  "key30": "3R4T8quJPYxCcSYj8SGcjjAUi72YHPSaEUqooN97sDowM8XpNJ6gbAjN41QaFamaZTdY3MEQmkGBtdma8Eb7x2mp",
  "key31": "47jatSoK28h8X2h7Z5swEpFwgv6uHWU8o24E4wSEcFymrf7HtcCBSwGNCSE795KcM5PhNMxvwo1pLcJeMJfyQR4Y",
  "key32": "5Yp4WAfyiYKMmrVHy3Lyz61YbKBcqfs94z5HVaKDue2dZ5MkZEPsUccbSrqwEHWDxpYBjDrKKQtMeEcqmQgRn7gG",
  "key33": "xF13WF9DVWTebaJ9UCzCA9XUMNoR3yWjeNwd5MXTW948g7AmMnNJ42ARmtygYudMjnaxnSLsospq1Qvz4SobGX1",
  "key34": "Fuc7PCdzjEhbbWeMcMsQsgRvbRzY7Jmzm5vTDwLCuNTihxAutJkwqi1nxJ7T9yZQ8gE71fGXQHy6g4Ct1HWuUj3",
  "key35": "2inKZUejoGzJKk2VkxDoQAXEpKS8CVQDSULruhCqqU6tasbSmCKrV9sKfrjcFzwv5cCVw9HtXdaARogQnWpoESPv",
  "key36": "61h61qKzv9rRpNF7CpxaX9JVnWi1XA1eyeS1jav9EbG5RUHnFa6uSLaXtyXmRQjXdfbD76ohFQp7V3p9T3B4EsbK",
  "key37": "2JTWwGiQeR2iJCeHbTLQnreSBrBiQzoRq5Rt7x17UDq4RzN7T9GoKcHrck4HU1a7QPr9CVXtQQYmQDB3FoW2Z7yP",
  "key38": "2Sbje9pxE9vEAbkxTNJRG5MTRvSbt2sU6brGQgeRX6UcdeRa89Zfu5KUjrACrVhsHW1jNVXWJhRBPqNBXBMGJdka",
  "key39": "57EeH6xcAxboNqGdorGV8NruJcShAPvc3AFt38vkdmeB6CAG7TqudbxyLUq1w1Nd8znsj2AaMKPxaAzXfW6YZ9Ra",
  "key40": "43bUtuS4c7fT7xFkFi3a3i5xLBeGhkyFKLVioMAo9LK2beFGYMTXjriPe1cnneTBp87dzTnc67d5FWszpJqB779M",
  "key41": "Z1kzHTfXDaNUa8MsVJ97yFXtdMXheXNty7ddxVmhGWRm5twWFV6cTZvvnSDAAFqCzASUQRmgnL5rcn2yTD4obtg",
  "key42": "WwFpFQQSszEVNJJxn3mRY11rARqeUHHZXarmdFqW6zBvMpaBBpSJE91X6debHnz4micDAwePffprhvnSUHVoTcc",
  "key43": "4wTZyR9RNU8nCZR3nagGYFcxut1JE9cY6efpftRGeFEs3h5y8w8GxNbJnQpwgzP7GQZFLuWLoSPh6PjTkZVUxrRj",
  "key44": "3go4ntsoani2y7DnptSvQSqK5au3nDfFzoPkdr7zy3xsjd53YztJZfNn2SkbBK9QmL9xmDBveMFWsGtRYJaT1XgM"
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
