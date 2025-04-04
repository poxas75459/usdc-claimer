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
    "5UesRDXqctdN5KKXVFmzzVormLZM7RXX5KHYDKoEsJNbEttLCjpzwiCEDhDyELtqhrkApfHAh3DGj6J9iQtNpk8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xh7Wophzv9fLBHY5WhYaAWco9M2HTXAPc3tBMm7Ug44SnU8DTkZHG6MLgAkLmZeff5XSHCMWL1hyk7XMh6TWhRS",
  "key1": "4NmV5Zfh5jdUYybxub7szCK6YDzbPFwLHRV3TFrqfb6JasYrknRDMVCfQNCENTKZzKQ7sKFX9giATj42dpHE5Gp",
  "key2": "2qJ9qi1DRcThNVh41sQu6TEn6TMZCCGa64fhDkc1QRdHQXbtMSWpuDfTEC68eesi7qGLkMm4gWamuMpayGo2jC5Z",
  "key3": "4hCfB4uq2Zt5nMQCWwce2RqEGABw3ckVjv7uqyCsBDH1jVy4Hyh2CokoQQgzuMGcK7ypxGMRRmBRpGjMFkBYFZkd",
  "key4": "583c1omfS7kgSCJE37BWYHEvra5p3XugLKdpvW2HGCT5XjrQzXSD926okr8NAYajQVbbWzBdJhErHTQ5yeFEVrkH",
  "key5": "49uJS6HmP8TGrHdqnXwMns4zazXMG7X8APzQ8BnFzjGQSXjK6uAjBwAdMN3BRy9pH7qzicTsSTNrMAJvBh6p3iYE",
  "key6": "1FnPWuVosRkQU3FjCgo46RGioUwYKqS6X4nDp45jfTGy8EEvqHa6yXZVHRBAEF2zbyuQvS28vBe7i7J9giHbEfW",
  "key7": "5WxnqH4kXGg8QgapPgdHuQHjj5X8EaxyXhVPLXLEbCrTohKKxMj2fYfD9wyZZQ222SQYcNQJSTbBmdBChZLV4XRi",
  "key8": "jnpN2ty5zk79j2BKxZrZZur5AVpeVie3Mf2RAAhMxfHsYPjqLiCyoUYEy6kfbdZtnS61VJSk1gXsre5DXBjboiD",
  "key9": "521XqsHcW3TdvS69JtVHzWC6B4ZHakMMdjzYmozqPcAJKkbmKBmw9DwSLBsgX61rhrrivsz5oj7G4W7KuFiSU2h6",
  "key10": "5CKEmfv8XotwjkEA5Ut2ZS7yNxbaEV45E8GStr1dDsVMBtqtWNoScgxC4V5WkAZFtN4EK4nfBpotFEqwJfTgrKVM",
  "key11": "rX2syapJTsvTGBsdp22RweqY4W7sFVkJTZ6v1B4uNKENoyypVsRiAfPwu8x7tFhga4S2UsK3vNozg2znaRrFbwX",
  "key12": "4goEz9r1fb6WQSDGU2JzwcgdnMxi3M23Ga6XVmLfp3saiqhnDJqeHkZpSDd4yncKR7LfAHrfSis1geuHy9NyFjzE",
  "key13": "4ehyrpAG3pUir1iSMkMkTEm8Qy3tLmxHAyVVq2nbiVj8zLTezTWvsHD2vyZDfu4feRjZ5RieJQF7baXat7RkBwRW",
  "key14": "55o2kN7d1AYBfBA33HcqM6grCqu7nC1bazBYJp213xEusniQSjVtG6BiGiBzGUMfcNi8JAQZiuJDji7DUMfuYvJq",
  "key15": "3WVsNT5rMkzUXmeymiDuwfXhuq5Ug8sAmywURbNFHvMNo8UuHduDSS532SE7T4VmdK3vWBnACPH8uuDFyv4ynHQs",
  "key16": "25SCEr8Ve7bX4tRuRMX3aWgkS1bWKKvqeg7ivaWZCRiypNQnAG8txn1LHoVAJULJToHsEqCrwaBs6qKcsP9NYWai",
  "key17": "2yGNdEYL43CXDdBqxGbLErrJjBcb57iouobz9G7AXy7C2xGyjpPVeZA1UQrMCyuGquPPJM9Pky6zj5oLrc7snATT",
  "key18": "MGZMq2BfdgTV4diJXUpLvFmkriZHocrCw4rxEQkEP7g3LqrdjXyXNKPKKnZMpszQXEpEZHSYVHyLMQq1wwe1jWY",
  "key19": "KGzSjFPugA9GVr5XGDc7FyQhaPskeDorbLBYtF84WM3unme8D829SvW9mw2H3ZSjY1uJyXzZsEuRFce6RffVTF2",
  "key20": "3DkqnTF8A6b9ZNkKeNU3qU4UjeiB2BkcvYvq76dPPow52cCfKNx7WiwFW6WeiphYZmGQirak7ByEwhxdgDKWEL1G",
  "key21": "3HS9XwBCrJNKNKU6aZ7oWFjXHRALo5HSqwTo7Emtj7Qezk2CBDNMe8GkqFv4oy8TSDAMEdmiL7NR7XaPvrbQcUHd",
  "key22": "2C2D1gW9oW5kLahBeP9iNckzFdAmbMJ3LRAj2YEBufRXeEdVn4gaBmYF7ybPBLAFpcDAAkruo6BT45RkaSnt1auU",
  "key23": "5vLsjRHqh2o4sFP76WUZt2UVUVb3CyZzRx7uDU5A1VUoFX7i9XgwGCuyUArSwzNs6qm88reYusYWiua2xgYAVReU",
  "key24": "q1PSmBnZfV3XiLyBoJ9e53tEDxRqxbpEWY9sMYmKnBBeL8atJPFcXppj7prtijrxZwmfc2HyAQ9huSALd18uwPp",
  "key25": "2qEKdkyYMHsQHYj2GVYFhrDzU2w4d89jBdp4HD68WW8RqyoWVcNQsqNkHLqfKj4dUQD9voUnS6fU3UoqtL1fn3oi",
  "key26": "D9RgLJGNGa348GCAcC5pHbEQdHaZ3Af4MdgzNLSdMyjGtdEoy9WK9W9CCsjaKJUQhGoH4wjm9LT9AHTKejAgwgQ",
  "key27": "2BeG9J7dVdMkN6a81XEH7uJ2WJkabS68dnVQVMYufnWBWv1wLphBRvhZjbfEH3AZADNEDMPRVSfZe6UHswMqYNZe",
  "key28": "2kgA3qZjaqskNf1bArSZN9RNGbA6EgyFbQPguSp2cX2jiyxq9yx86N4s68c6zwcrFXSFfeNhe5yxqjSJLqNEntZj",
  "key29": "zVoFeHYMiFtoJcp8DYLFyxDvYQf2cKd3Nypth1QkXRtQmCciHNWjNUnpFfWXf5AWqVGzKKxj8hcCHU45mDbSWjF",
  "key30": "2gx6wBhKEJCvD5BYwPhy2AtmSJAHMdUNio2neQn8oj6zRWUMGFHEGjZQeU8Y4dBpShaJxzvj3RyCodTG3iktvb57",
  "key31": "2swHNXJWBUzHWPGTKgvqowgfXaDyCdaaqrUaoAQhPNE7UUVtTKJuCZE3CHhmi7eNCyqwXjSUj4Y8a472iZgK6Y2h",
  "key32": "oEEP3i1JAHys7CSyhemgc22BHRS49AG6dfx68vzeHy1jH4NLXrRnDKUVea4vH2DLjdnM5r8MXh3mVYnoAxaQRC7",
  "key33": "2nwqg9a9QFAkRdqGmDzdy8vM8oy1Ck3Q4sMth75Y8i8hF6B4W3V29Azyjz7Rsughkytcg3h6UuCZr1xGvmgiTQy9",
  "key34": "56QCjbkMNd6rSiv6ErfvJnCuTJvrECwYCvHmCuBpS84uyEZ1fyBUgdTwoBcXSFCVzdFD5rfAPFB7bt6Po8EMnvL",
  "key35": "2co4GobKxjJoHFUYYs2MsG8D9qvoPMvaL6tQvAfFeVSpRPJKHm2vKfnoC7f3SgdoWDnNLZq63ZNQC6X7nejNWDNj",
  "key36": "2V2bFoUnoDXbQXUP3uuQLafqQWoYBwVZFMxSeYjGqryES8RYLP4UzhZ9KZyNNEufCqezq4VZbTSMv22nPnWwUpJ6",
  "key37": "3DosNKGGWFGcszqmseRUU1SGAx81pHAQFdtSxicXK1pW8grb1uvRG2kA6mwDAzyLkVJCXu1UuLzqDqpFeb26RPEK",
  "key38": "aUpFWDLXDwFByV6etg9kZMw4m2YRbDymUNNc1oVWDjqxqNKQeMcaeVcQu69AsWpzFrMtw9Us7VvWu2BShzPcAv1",
  "key39": "KcCK38AVTUfiWp62VWbwAUSax3PAnhcMDkcBubxNN8eCiDnaKKri9ZSsxzMPtun3SNwR7vDsJVxnA2rk1GXHotM",
  "key40": "4p8WgvXvSyxtGMSsRTBhV9MYQA4VYQAqgKwWu3thz3PFZxZzgUCpf7X3qKb3xBhMzjJ7st68vHsA9pxQpYwqGNWt",
  "key41": "uvdN6QA9vybQdh91txpoUWBKfepaYZba1bG7ZzLTweYC333QYzWsGbQnnpGD7ZwY6vfBEVL6oiK93DYsXg3TgzS",
  "key42": "5sMvqAmogMoU72zwibVHii9q3SxeFiavCGfjT84cnoo1RcZen6Dry41TirYjAAozYHANFaMvRZzu4CexM3nVoaHN",
  "key43": "4tHTtw4oeASC6bgdaXkBGUtRsuT1TSqB6svi4U2j7dgkeoVrqLN8RMvvUwFkyvrgDVvVk1N5cwjvgTAsoKhd3hYH",
  "key44": "65EHi9ris6JEMpDGyFjfP3KjQNRnuZKRva2z9QKdSiawcQyQvX8ktkBv1VhReqzwenGEwowEaVqrszmhjFsQiyru",
  "key45": "n2jML3qwLucb1H256C75Gfv425AMZCQfBSrvmvtJG6Nk1CGCtJuRyMCe2e6vyHfPTrWNHLhGeVtbiJpq6dhprwd",
  "key46": "3EFbVYaCab3WrjVNU5DfCvZ6u7Pdo2hhkGF59nyHGsKPi3USib42ccopE8bEzquAtt6qirjUYswV81fGPdvqe9B6",
  "key47": "tMiuf84akJvpvEaYbWAkDwaPLEVwozNCkV7XLiswpLXDyYuSP1PXNRxGbUsoJXxFA75e9f9VaXcP9sdiL5hsV5G",
  "key48": "5GCrnhHLcPb59MnNgxRoJ83MdWWxn6N9JKrp5zkV96SMmmhzNYNCtWmq9pvPGJSWgCF4AV8kFpN4YJa1FH1XbxFL"
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
