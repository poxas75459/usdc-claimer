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
    "575KFGxBp4GU9f1EdVSLREJRj9MPNeh7L3TTHcWvDU9eukPWYCeEXP92kSadR8UMAX3i4tCMULUXmpyB6yjcZenX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2eREBVQEKSbjFMDNG7cNh11uukUWYLVfXYNMpPGmZjLJLBQ7bHobicLfUczJQD2Qf8mRwQz9Pewc5QfqDyN7iS",
  "key1": "3XjwU5A3bs3hZWMp8ucsf1vPm6me1yKborgMX7B8JpLokAmDbD5MM3zusezSHueyrZUTeVg6fJGJb9cDyMerkMGB",
  "key2": "3wGLNtP6zLGyjLrFHuNof2nmwaoBexLXFwkZcos2SSVd5r4LpZZeQeQJKo6HKFisa2SN65qprzNxTmHJczNJrNbE",
  "key3": "4mHUgdEGwtepAGgya1XM1JwKQJZYgEFTys8SzhJSoZjP59xQjrDRZPf9uAFCw4D5dh5GQnt8ytWp1znYu8E6Cgtr",
  "key4": "3gxZ8GdqqxAxu5tNUoQw5rMpmHMKLw6p49kVBCiDxzfSVuJZaY6qGB9MCeDvYE6BYLmHaHZy3dk93VqFmMuxpufL",
  "key5": "2tEAoVfFZLgc1v35KqWru791yMUfupPD3DMpJwPmbSXY8HJRSYdQkkwpga6X5zSmE7PTPUmEnHGhTzNzGwUcpAuR",
  "key6": "GLnqQHmvBXJ1SUY7YGEmPWvGqsB8orK94kEk7VXJkgysi5v9dCoSi2PiR3kNkZm46Jo5A4kQcSxkG3HKUQKsLV2",
  "key7": "53ndhK8UGZVL5fdgG9u14ZJ49nCgNYPLs6tDCLwmq6B8jsa1fuNhsYtnNRdPd5pQi8D7fMnrZvKLjkLKP9NHAq8m",
  "key8": "5PEGcHFTD9sJMkYw1srh5rXjkYAZqvkcpRQWJCTa6T9X3Q27cczuaqZPK9YJ4KLB79jSBhspnpaCQJMo5hDvpMg8",
  "key9": "3Z3BL3BByW6VUBTSAyEmioZiucrQxA9NYhGsLzSP5A8BzHk5QKtb63NuEAqNEz4NJhymVo3rW16vxtscyEyFnQot",
  "key10": "HWxmHzXbtBC2DcNgSHfAK2YEAoXGhNqWmkNLpsQUYqUH41YX7DgkTduhf3zu8pfsBH3hukwkgB5QgSDEYYJieqc",
  "key11": "2KDWmTx9Eyng1nwn6i3wfqHN1GpgrejzxkjiFaR2ChkteJum4HAoLPvPRd8641c5cBLp512tkVwLZ5tstfcjPS1x",
  "key12": "4jJfeHbP4qnFXenGm4YvN9R8tbe9B6Y1osUr41tT83cn5GgPNu9NDoYJqVcQ75BEX38T2XzZTuCQ1CaR9foit7nv",
  "key13": "4GG67JgkrqVxeyczdxEay8pd1Gw2miaW1qq7wQpjno1nNc8rhquFAYpopPz39niRMv4iusyV9QMRsRswfFwAbarV",
  "key14": "264JCyrG9kJ2hcKBbjRD45bqwCaGBN7tVScv8rAm4M2qavip5ayQx83swV3YU1qnRnG1GpwrYTq1jb9VdF1361G2",
  "key15": "49QvmB4k5oX3vWvoKS3Tgp3344efxSGcCkdtUSDyavyh2Ui8FwrCchMtuXhM9Dz855vrg4LK3pnsExXeACKuUfRU",
  "key16": "4SrzcHqssq9kJdor2ufK84Cp3jp1L9sfycmWgp3ixwCzXcsn8bb2DTLSQ5QcYHBZ343kKPz2aCNrGoV7dfJfQ51J",
  "key17": "5nHgBqfa9LSUs68GEAQ3zP9py9zXZ4tTPiDRqGSack6yieTZmQDPZJoZmCk19FWm441sPuzTPzg5fmFCQ5vd286W",
  "key18": "4gxTZG735VNWbFLMcEtcMcdnMu3nSaVuVFAyRJ8fDekskuUUnZftm7U4vQrQAjxngJzoEvaa9T23sp8hkJ6cWCRr",
  "key19": "5rBMjUTqNm7fUqaiMxe4N298iskCtzgiyvkg5DwweVMTCJDZL3ohxw9yAoxqxgvkntWMjyhkAW6Y4rpw5As1LEjC",
  "key20": "d2CesmffZPWtTfCh5SXWjozg69i4YjgrabA4xpKjdasu2FoA5r5Vmjxb3McZcTgd7dMLZx6uKdVsJ5BDTTPy3e2",
  "key21": "4y2PYiTTLSAoiYXgcqAEZ7WonfjFyFT8bJbD6deURFG9EqDRkxSb9BSWBmpRh5RhKCsRuFtpcH1nerNs39mE3kH",
  "key22": "2UNMBrK513ASgACpvJGMXh56xmfy1tQveVGzxweBFRGhKjpvmKqUmVJtGwkzo4VuJDUeDHGEwSXzw8Q95LxVQ6Aw",
  "key23": "5TVFAMY1FX5VttDa3AJp7aNbAjFiUaNxS3prVv9pbTzLFPt5S6uYuVtAnWujEt1YBPztpgVorw9RLHQJumPiJsid",
  "key24": "5ncQRr7epWwp6beCPZMic2ygg5epy1ENuxxDYZax5rhnG3L7Evke2yr7jFeuZx372zPcGBgUYurKWJwjPbTwMN44",
  "key25": "3JWuFw9ns3N882LcM57fqtkFC5CJuQp2NvXZgwTMiAuySzyiSsxoXg8yKqMH9JK3apeDJXWpMZhsx9rcG5qMX575",
  "key26": "5HZHVFPSMwxCzgKazvCQRxAnCNmfrgEALDL1PYFnfty43Q549J9ZFK1F2x8JXaHjgrGQJzaH5Stq9MaUQCXm94vm",
  "key27": "2vD6DtNMtkP1RnnCwPmzFeCadgt9pVBUNMj82NzYHfypEtepgakDSo5DtgxGvEJNsTT8axnPMsu1zVwipMEwQ5gE",
  "key28": "5aQy2nx3HQ2yT1HKnT15Sx4GstuaK3Bg8N2ZqWP5vNWrf4fWKLCjV8jpUf2jcDauADT9BBdxA4a4KqZPV2GcfCi7",
  "key29": "R8QE3ABvYaDSFeKJ4HE8toQYpgbxsgR9R121fDMvH5BjFyCtGqLSKn4BUUHaRPg5o4Dnnc6wb4tYX3H2HncnVoJ",
  "key30": "5mN1WsGhy8jfG7W7Djn1qm4pRqadNG87ZUFe7jzvEBereGMb8ryQawUFHdEy22rzxyw7TTFtxYhMPzituhaWwATX",
  "key31": "3WK1wLKrmh77T5i9GsrdnoEgM2LeU1whfhBKv2T4vSPaBXPECR33nMmUy4x9yA8itkuL39mUJHo2FgraXcTfXSNr",
  "key32": "xL72UtpFjKhjHH2Viw8CY2EZj2xAEFcnGm2DGC2KB4jjaqwZ5msQcHKDWVpPPTpDfsRfVrDxDFeCYGifY9x8n3r",
  "key33": "5ypecgfoE48uDZTdMdaDmivpDaaeiUwnVvMHL5TLy3Rr17dojP8Hkt1uZ4goC4kbvCY2woHXm3gidZK9wtLVGJcs",
  "key34": "5igrrqXxt3c6VsKYuASxWAbEWpsuZqpYQ7L2kjzpxdyRFWmWYWhuSTMaqTofTWs8HkX3BGA1Kzbrp6bvb7JJEKv6",
  "key35": "4woTvMUxNNdfKTXsL3e94dd2mnRPcAUCR3RDqEwVakwQLswuwqrPrU1SMXR955rMU1RMJ4fdVHZ2bhVEdUNdoCnX",
  "key36": "2QcUuJbShm2PWERhMTDogwWYgSjuRGQEM3fT5pCkSVnJnwWuYupj7QuurtDJxJJL16WZcpi2zhLXVgzfjCFvXbsQ",
  "key37": "5wAHgAAuzMgcVdmuhzVSnhLL3vkDjMjYThy455ZVPqT3kohTbHAwvyJxs5T558SjZQxENuR18YBbASJaCcjJxodh",
  "key38": "2SZfuMMZrxe4ffg6Fd3AEgGi9v3a5QFjiQJZe3U1rWD8g78EWJBANAc2Gn8nMxdWhFJYHiyMV7ED1XFK3tTduUKs",
  "key39": "3giLMAD3uZn6ztXW1Y6hXMVkqMBsNy2ovEgCJpdDgZ3XgLM4TwWd2tB3EVEUySR73vLZK4dSrQxqD89uKwsrVKEe",
  "key40": "4tBhyFHkd9Q376XyuAALtaxLSSznXvN7ctpXYD5tFgcm1FBoiR3sNQBRA93TdNhZgMkQFqjbT8dGXm2Drf5f46Db",
  "key41": "3tMwrYqiD7apf56XEo6znAuY9tyxH4SGVvfD52kqNpAqrJ9BZdSqLruCBJAwaSeduoNBAmCbqk4iLzpkFxqeSGps",
  "key42": "3Z2PyuVQ5Zvwg14YMW5hbrFB9oNMqmJ5pVEW7jbWLzbfhdUFTqsP4HF6PUH6aqt8ZLvtfB8K4zHgrRJKu44fgBcL",
  "key43": "3YWx3qrwWvTPB6AaZ2ktoDq5KToYgUKgxtmbYUywfQBbW6Gnx6xzWe5Rhcg2Wvf7zfUZig8mW86sR48eYsRzV165",
  "key44": "5UzueTtQYU52StusJzqeMWWXX5QYkbxe7TZ6XUayHBxUcEbiaz24m6PPJgd7HxkXqWxdZNF9ZJZD5h9Dezoio8C3",
  "key45": "51R1xqCLRK4pDGdVJw3QRbjiGwDvFuKodovUwcnXrDAz5HEXR289VWArkxM4gA2qLXJM47Now5Y1ovguTqQPuDpq"
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
