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
    "4X9wER3MPtHvXirNYDTUT7jcXiKVFnNiM6HfbE1oouJXvpeHStAwUK7bTGcnwCQUuVmhEheM6NDCEg5ErRZU4Wb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kjj7nCR55PTpvonHm4CP8ZeFoHHfJq8d4QtEnkhyimT416sCJsQG2CVgKiuDAQaA5wUFHWJrRTLc1XcPDEjSibB",
  "key1": "qs8REAQMYnhSFr38dazVcctHNMQDyC5mH7AMsH5YhrW1VrxN3naJxhm63pxWwD9GQQHYvAzmaYYN1AJhE4yKPiV",
  "key2": "3bfN4CNDTLWUgUHGLr5hMLuV15drhhS9cW1ajQeNQAdis5GgPVZTBXPp4iTQwxgnS5MTsDibt7MT35ufhWEYiRKn",
  "key3": "XyLzrpn22meEijpwt2pPj3pA3ZYTVqgKrK3ZooM6nEw418RgHfZCnRHpdqDu7h4yFUCPR7biqN1evrWeMZj4i1A",
  "key4": "3HBeqnVLrNrqjPZXEmUMbMsAk6VKXWZm7KETo4ZMJbv6Sfhhv4aL5jMhMbhVBpXB3VtjQMuDBVZUDY3sYK14UMsE",
  "key5": "2HPkXz78CARiVPSh1CYjYMFaXbdnoUFckzAuKuv8Ua7Q2dKGBiwx662a3Ekf1z2JeVZtNogkNKWfms7cSnVmaniS",
  "key6": "3fau93NApjLkyC4snnQMie1vJakMsmeRSAF6uxEvdfbGNafgUWXegrP8SLo5TXGN33dFvdbzh1NtFFFQFAUxV9Fr",
  "key7": "2FWbUmxPogGSXR5NznbizwPgqGAq93vMcmwdCvbK6RNkvpKt7sughtWzG2pGF9yzRxhhu6W9x8goDDerKhCzPJjm",
  "key8": "2u287WLqt7mD86N1E8nRh5V8ybHDCmaxyVJBcVjDgQtc1n3zTxBd4nH9avbeDV2mJoo8pfMxuiQFrjGcd8172CGZ",
  "key9": "H46hGpLRqC56kEHFaRaytqknSk6PhptDdFejMFJXH86xjkNrrKHwMzyauBnexUr2q8EmfxkRWnPWidc5ymk5FPd",
  "key10": "4Hsveg75xdC4fu3Qu5u92PpWKu1u6yyxiMybHFXX33twKvaRmhxASCGf8e9duwX4eaS8QvZMbrAmmcMJTqAxwkvi",
  "key11": "4qG3iFeraU69NJSDcJZwFRfwyH2vYaAwFpo3E6aA5scZdRyDNKzMWcvtgzvtMgNqjpYb1SzegmnoobLGXiLNrqiL",
  "key12": "wtXTCf581kNKqHKz4eJGqtKPo5m3JgAJjyeJy3SQGkXzFNaVKoqdPgaYGjMx8mcJdvNjBUzmLUyVycoRRRUHwKD",
  "key13": "4QTm3ViVUMmAVUKx6p8NKAaRZXP2cTssnMUino4GganJfXEGqpLjLRexAjRiL3Tnu5ePj3bRBXo892GioPyEsjpm",
  "key14": "3tBfd57ZF3roALc6y1Mo9VYtj7nQFeCgDKbmQM8T4LVKDKdjewdnNaRxagSXzs2iXcTF9HNqKB1na9y4ZpgAbYXg",
  "key15": "3hWFwBhxWFN8CmcGB4Ph4E26yFoaBmyNGW1BoRLUgnBv8XBSdsnJEwPwguJPTu94CQ56HC2DAvx2TgJ2zLnEuSRv",
  "key16": "5j7qTrbggnyPgL989eCNXvgGMxJmVGsbWBduXf8UzHXXr6gC8rg8N77XWjvEi3wXmJNR3SUPqGmEL4EKbwZw3vbb",
  "key17": "ZFmtbD9F2HhwNq61LVkTS53kSaFbRvr5C7rgBXmWMpFu4yLeE9JdxMJWEsemUB981tpsG8q3X4iFezc2kDqPxyj",
  "key18": "24HD6SM7PQ2gCb2Zc4VUxFHwvbFZv1z4h9Snmf7SmeiaxJJqHYMiKv8RuGsav77soxPWXjRdhCjKZdQn6zMpMZAf",
  "key19": "22hM1uiXmjdTjFeFieSEvPCvyGKM5XXF6VnLcmuNPsD8rmKo3ZCET7oyzvSTfZKFPTMgtztSJWQmjonjsivrCgtM",
  "key20": "3hsgm3rDnVSBtqjgNt4ZcHkms9TGKyQW4weoLcBeQWPobmFMf5rjBZh9tjenPuFwuvqpjq6AAWxWpqYCF1f88PLB",
  "key21": "3tWmWekeFk8UMGwpX4yF9fSXM1JAmJTKVi9vLWBBrD4nSexbm2HYmsthqfa1MHXFtTxTQ7FRa6jjAyNf17EBc6G",
  "key22": "2FcQv97ka9nn9TW9pQ761sC6AMKsxi42tdeKGSAky67kyeBxRtfao4ns2u9TdzU1Up3sQhb3rxxYGoKDwpSksJvd",
  "key23": "PPf8AeBdTAQQyML4sTLgwHCTTPmC3GhV2LSmRsa9xX4RMKqBB79FMiH7c7odh3FYvLpJKPssRSXw6GPKAUUeapp",
  "key24": "3oaWhgvWS6CMoZ4KCLHzTBsH28kppVN7Ag6CPgfQcXe7ckubkMfWZw9Wqsq1QitoDA5biyvAKcmZewjt4fvYHX82",
  "key25": "5Lq2ZGh6LL5gAnGWuexb9oYKHrVYQkughTVEgaZnHB6L1v7pLwq4PQ9QTApK3qKFd9xLSsruFG5DnCRu4eU6DoSq",
  "key26": "58e5eTS7dW6jpmYgDMRDZmiy3uS9tCwVWZ5x2Zfh15wCUPmFybTb4kyWvSaU92JXZuFrR2TjhB25fg8w79zSs4PQ",
  "key27": "24AWEphYruNbQvCjFJL7tP1SmhoZUUNrEAQfTyqyusyf6wX6BmV9BCf1pCoQjud3erj6oL2Gc5c1XigvsPxRfuDU",
  "key28": "4aBbhMEcNvGZAJKtJwLK4Enxn9jBd6YAwvANcmKPvwRrrCtQE1RjmAfe8hEEW3Mr969C4JRnzsu9uAdryQp3CuL5",
  "key29": "3szLhATNXB8L5LAmDPyfkPYPn1WecKrwMn1MeajMwyaXkTpwxbi8XVofoixJiv2JC17VutfZgU2zaTYoMaeTwsip",
  "key30": "55FU1SrS7iZ6LQsQMHqYTALxoBLkDpFNQUMpsNBhbLUpMJBEASi6Bu5jMxxt2RRAcEqupFC3dW7S9mT7wXNBuDEp",
  "key31": "2tbs5YCiEoqugxg3AiH7TgiHfReTGR527WLoekZq8BoLMvamMQTY8W441DHVuZRkp9kNFgb8T21uhvWjb12APcN8",
  "key32": "4WfVUehtktzaL1QhGrQ6qKNfpdLKVaS4L52DW8NdLc9dk5o1wcN3g3UtcY7kCzJJx2c7HzGDHiPb7h3LHvrJ2pWz",
  "key33": "3ARLdRisLoVfGa8UynVsb2GcvUV6ZrrYQFCnzkRgCD8DWKNBsHPKhgbgDRNzkn9JiDbEk5BT4M6jBdUAETy693Gn",
  "key34": "vtqLgYWzvbq91wshCzsSUK8morMUbin5cRMYFbvNjv3P3cYc4FDpTGbm9Nd3R44aM7uPBfvktSThAbcvbnPsdMj",
  "key35": "4fDMi2MAZWb53rXYqLghBDpADxtE4y6PL9CgWnQjFwvHutQhjGgiFWrYoTxkyC2tB5EDfGcJBNZLacExzoT4pKAS",
  "key36": "2uivw8hBNWLtynKDhwYgMWJo3LK4PDnKRGnc3SrwjyQEvaZsQqtGcV67HBGjA3HCWmn6pYs9rj5cWP41wgba58wH",
  "key37": "4pLoH78skWGSWD5LDpJQPy8VEjGWCUdJVd4fTj2T1X8bF9FUN1qQBo2Jb5KMa3quE4sTPVE8H2bKJeZdF8ijWD4P",
  "key38": "3pb7GN7jw1dknxTe5ka7S2X5P3uBdYper3aMrefveu6ZNGvnnQNDBL16thy1DE8mrHqYvzmLZG7V83yAxdLkPsQE",
  "key39": "22xoEaiEtNap8YZxshZjdttNVwdNzYUiNo4L7sD4jLcP5U8pQ7AFcDVE3YPpgBxqJNdRfb2KyqSDnWneiABFKA78",
  "key40": "3VahGzQqGvKBQDjfeMW13tbzMDnQjpFcEEeWnxiank3D1dAhvKQcRZ8gHuMhfisVPHtsqs29ffva1HayYFCWRCNB",
  "key41": "3nDvQWYrZ3bMvkrWZS627sAM3cDpoupk7ce1Jj19h6cAGiV8R3qHoKCKp1agib3p8pcwkDUjffMZEBd7bjL8L97x",
  "key42": "3mvF5bSq4jN6HRRcBQyjEuChCV4YBc6xWZAkRstjPKusELd9uFrr2xjPFcJr5rEdPqdivPWrwT4VTstCxm6kotPt",
  "key43": "2JUBW5gFMF1ioan548Ykrw1LbykFd9uftDNCZHoVeY4dZkux7sybiZHEULKwoz4gLgmA6fBFS3qNb9TYheLv1wX2",
  "key44": "3GWj39vr7NCuVT9Dz9Dz5WJ8UkJooMEMwdcM2YDE9U3nEt17ycHVAe56YCirpqThjWKZzphhViEQLBUn91ywc4yT",
  "key45": "4EEC67AMr7BH5nuepg3v1sKKg11tKdNt9vvQv3A5dxMktwH3o7DZz1zaSMJWQM5sTJgux6dw5z23yQjgeFz35THH"
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
