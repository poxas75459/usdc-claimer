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
    "5y6NkpjT4zMrxJp1pw2mw9w445wAeEj2gAUThiDrXGqP9WCVkWv17LPg5K3rZSZ3Bk7u6U4nzUPqA8ieZZtATitT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y8AqrNZDSipxnDRGvDjGtZd3EuuWaphj9VkJm1qUM7owUyXrHisp1WPvfCmR75ktAwQuGqUwVaN6mEg7okQbuHE",
  "key1": "5GAqe2i4SCo8zUCenjzrWPbDJc1AHsLm4umaiQFSvV7wmrnenvr5DTU48TxbGp7eTKGk9hmWfLQSNvna1Uh6iPrH",
  "key2": "VX67VHW2bXt8VCsuUdzsVuP76isa1x9318aCzDqS3Y2Y8nv8KLhv17TT7xZy1Uq2J7adbw9MRuGruRrULchziLA",
  "key3": "3s6Et31t74SjVR14JDtNsufECGkwu2nrQhdyXcWf6z9vUv5RtKXpGpVxk1f5X6gdJMzLeJ2PsSGkSjYzxbiugttH",
  "key4": "7tnGz5cJToeSMESky4gtjk1eNjwCKEMrQTTrDYWNQ4CcHRW1By1ggPX8gzpJWMa4gGJF3aiHuYPdq2DFcmS88un",
  "key5": "43cm5sFrV4UJdVbaHMRYgorFNLGzzPKcv3jbTmzm94bhQnkC8cEwuwtWhFTHscAHr6RsgKrW2qibRrkxHYMxiF4q",
  "key6": "3grfV8euMRSuATxqmtzAGNTePsCKu81Jwg6zxzYKyqTBBF8AuGNneNKpMMRCGDTX7NRBffNwnTU5mFon4XZhXrEV",
  "key7": "5SyfrbZcp6RzA4aaNHaxa3z4BbJUSri6B8pjnCoYLBpQWpPDoYT3yZgtVLXxMTuGNp5PJXFbYNMqTsnpD9EMeXWP",
  "key8": "4vyY5a5hHWmL2juKHXgv5qu75tVouuwzacwDdKeMReDdc7ShBqGixvDymmqAzACXAL1oK4fXbFkYGY5RGaHPPPY",
  "key9": "81Yy9bSkRqRjxryS7yLDB573CTAdsZp8xCjRPaSNRGKTvutTP74YsbdWCKnnMacbx2XWxGtpcRvBZeJLUazyTJb",
  "key10": "3mgtcJynDioZiET4KkdeNm1gNqFPrFPWjrvLC5dCzCwgJUAbJaubeMWfRtvuQaUVyog8kxhjGmXTWSEfXCMydjDw",
  "key11": "2nJYLCsbJAXDuJCqgPrHbYdXvfShy6M5mwWDkTukAzRmpLQofFjUJYvAXKiX22bA6XSBhoBCZmNywTyVsyTMSSK8",
  "key12": "64Hc36EHCSPuYbzc7Pv2FWsusHeSt4G85fhBX432SSBTKmquHz94hPZiFcbHrAq4TdFSBVJjYH4F2ryMLiEcz1P8",
  "key13": "5hWf41aod3zfm8BUbXhyzytCgCR1pNiB6V4BWsZnwBrsxYFmYVWy9mrKFVyGRo2tXQZ3rciRCkXp1keAuAd99h2U",
  "key14": "5XezNYXpbJDatqnsnfw3zUzjBbypvHdfD2ghryxCPf98xCNWUEDpqUqueVSqBBjW3cAqoZh47HRJx17drqh77MCB",
  "key15": "2PGEWRKorQ1WA2MCEvxphtGpVZvgqWJN3vrGPCiMugSyGEYiT9EJLBjzhtzy97jbb3U5zVtXttm2QgKKBnPaJM22",
  "key16": "62ZBocafHEu3dAGcECVytzNhPxq3F2cXnc1k8tPbHMKU1PGiwZi1zF33jnPYdtoGmevL9ErT6xB93WuMPagop2fQ",
  "key17": "2XUDwnoaYP7FWnPcxKCiiC6JXAMKE8rK9yvrg8ZxQXBP66cLGNVJxmcUJZxRgGdNRqKX7PRCNZxwLBrGNG3rpNDj",
  "key18": "oQ3SqSyA8mEZSYhwjY9Qcwc9qjYtr5VNP8kEt17qnP6RD9haNsLtAoJUhSnMMv5vCGq7q3qwkA5SETRzGBR5c3U",
  "key19": "3iKHWkSekmLqhWhXS9F8apApXMhGoiqRjUQ4CHmYeJiTWVTpYt3PAv7QC4MPg971DQtiMhqiRzAnouinFFcyxzUf",
  "key20": "5MY2eXAuxrU3cwHwf9cQKBsnGtXf98CNr3UkCEDg7T8wPwpZGuMiNxhnjEqoqv4F85BAyjFfhVsfkxSqpbL7juRH",
  "key21": "4r2ZhJEDh6uhwymoYNE6WdKLLhpJgwjwSDKGoXfPde9iCWdsX9akQFn2KxJa7Xf2cYZmMznNUuKEfdhyoXN7Qx1i",
  "key22": "KyyZiSdmqcTNyc25P3NJoMn9L3HesBsMFD8LhaBY8SYyohkFu17hwCdBpTZS5cpZn4Wnzz4W3m9th3ppeFnho25",
  "key23": "633o4R5qibFqhtax2AhkT9F7nnNBcXyeg811GQumf7Ekziz6XTsRkdpXhYRFhsNgfPoDP2xjLGdCAdYSF21FyCdC",
  "key24": "5R74m6v245GX8FSfGhYxZDi4Uz2isXvg2gP1fpXDhS81CuidVt2VBZtamffs66KVGkpVHUWM2VKsyv8pQDb4SZ81",
  "key25": "64gXj9MmDwMXdG4docxd6LnYPvfFsC1Em3X4oAWskTiCX3DoSu4fGKxQVdAUYh5tQjKNXRJLypfEiLDV8EoiJgYe",
  "key26": "2VQR5mbymbyagdBQJdjxY1omPih6vLnpDn6dCBUbUsnF8Rc8vKaQF5w96jyoyv9oixk8voz8u11YJNxcM4r1ogGZ",
  "key27": "2T858bD9jRwX9zHUui3Qb9Q7toZ1akt6uDun76itm9WJZHuY8KWxf9EwrfjjLBwT8jfb9RqmG3B5heLNQ3WyribF",
  "key28": "UBnG273WPLKNednReXo8BJfEyNRhJCNeg9ZatMvoYA1pUCa4ZRmz9gcpwhXGHXgvsdhsuewXHWy8yhx8ZgCNm5U",
  "key29": "eCjA9B5nnt1crf4vByviStpQ9vApUZXTKDzcJJu5837VocQxs5SsnPh8Z2kD5NbSPrSYiRHU6Y4oCAucinBG6Ve",
  "key30": "3wxj69LmtDqDWfawdkx3whdCmxrnvJzYFFStQ3kARuV6SDRMZaJLy7nze99PhhzjY5WSFQAhxisEzMTfCFM8B1Cy",
  "key31": "63PHJWamBGA8xzCJKP4dguoMvwk7bwnvoH5FdE4Ks6smjv44pexEFVAyiYv2oU6FBZZMgXFbQ8Y3J9u6odxB5UVJ",
  "key32": "5maVVeR6Js65UFUWzxnkRtjJxDwnZPGHh8jKCgqxHtU7pMBqJoZxjmCwdY49bN2ikGz6Dot1zMLrBwD8cptMdYCz",
  "key33": "5G5annk9xTbQVHhBqTrXLKGaS4ULH9naJngViJRqnAKrX8Ri2MeRrhTFMt7cXH85ZbJhpXCTzaxwU4exhFnKkVM5",
  "key34": "3D66xrrRFVHTA63ickPEPLD32smXHUGu2GcmZJvYNpyfJf5zvUjbLXwCYahMxRbCm2YZwTbvJRrwwo7mEUbRxpWo",
  "key35": "5ijgF6x1ZzvVm2BgyGYMoZtLPAHaGgQunNFGXdSY4fSCoVN9Y6t4dRQatq6vViDbx8MSkEc8DXtt1omgB8YyfsL4",
  "key36": "5khgbCBJMfdipJD81F9Tf4Su19wKJX994rNEb5TzCErPvLqQqo2XGHK4fhzNa49Ai8PW96BjG4g3zMSWMXAh24rL",
  "key37": "c6zbmq6aegFQW6PZvZwsLFTQyk8TCpPST9XZhgamyUsj4NkGP9ZMVXWYtvAt2hL8FKATWty6DDCvKQpZ5geKHfx",
  "key38": "Xu3yVskaN36joVgwkGZpvayFzhXJgsEGTg8Kzia4mPoAAuH8QnYRK9sqfx2erS57QyuMxLZ2fqqs55RrGgW5Br8",
  "key39": "4aozaPfJJaRb6Fp3WhzD1Z6jGqfMP6KgA7k3AmzbXY3cbXwBGWpbRyXULBJoN94Bzq92JePeFQrc9qUqUe2dEHyB",
  "key40": "62PUM3hgtGLNmkQD7vMt1XAvhXBSPLkHQ5MBhXpam3aJGVW8AEM86cE7CJWU6WeziYs425Y2Fk6u9xbzeurYPBRQ",
  "key41": "2CBuR17tcKkSETgnoJBDb2XzmcYvgKwvJ3v5ki86ukETzbFVhQmPpSi2GQFcmkC1wMfNSVdHVWQcXehxXxZxX656",
  "key42": "25taSDJLP4Kspy4sximuNaRiaiKLjVaiCcK8bLCQr8eSRuapdFZte5sY8G4gj49w57jQpwhrRNYmYbwfsuic1WDn",
  "key43": "4Y9r1vCRyvvZyQfHd59M73b5V5ekxxVNC45W4C9p7CarEfnhNwDPzpycbqWdQBKKTB8VbQzXxhyHZKx2oigSWPEi",
  "key44": "BZMnBUHRCndxMahpLgtPvqME17GGcj1qiCmsNePQaL5mqkFFXks4KRuyNbf1wrP3wfSsdKUEeoK8kj3UWGB3hjV"
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
