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
    "5z1ppJVbTpsdZTEZ2FoiHMnEwnfVkAaWrRfBvmRjedfMbmcGBQR9vnP5GxRTLbjDix9utwT2MYUippNxcTE3CEyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JsxdMPfeFP53oaLEEGWfyxSb4KpK1BteDkPzMwqZgHsmUZ7MMva9M9xAdatb4iGceL8grU5VnMiFkTLBioNa33a",
  "key1": "3WMJw1UPMSoaJUDj2We7rbkjPuY2WPw62BVmyA38E3woveHZmn2oaL8XR34iX1oGU6JqVDg9dY2rArLhLxrXFVQ4",
  "key2": "2j13cm3rLsc3RBjgXnf2pYJET4mrPkRMpiMU1nPYGGKhwrVM6AxNfczxcyxmnSpZguiNS7ZpSpgJJeZ836SN8S6C",
  "key3": "51kSFpEZUJvkShFsBHZWrak8ZF4ijDaR24Sobf7QcSEH3kv97X9PotDbAs1y1rZzgDzspN8rQVWoFrG22mx9HVeu",
  "key4": "3LgRxvhFp3JPiZFLrGe2wHZzECxaAuX1gbcrgEGS82fHeU3JizJzwEPxTJa2TozyvjZTNuPLu8M6Cc5AgwntSNhu",
  "key5": "49vS9Npbq1PED6w3WEXbxZpR5w8HoBcY6sKhFwShuF8VvxNfUjCTh9ccYjk7AY3pGJkF3VnqfQaZ8iWxMNgfkrHG",
  "key6": "Lypyti2zDz656kAPNdWcySTepthaSCZJbxrVSTfuevdmzezey9o516uPhDv5DZmregXGyW8KTPppoMKhsJ35AH4",
  "key7": "2EWoVRyZdxME8QnAac7jcZd8ZwJJ5RvcMatTu84o1FLiTFxjxvNHAwFE1jQ5Y6PxTe7UUBpjApWMzDjqdkHENJmX",
  "key8": "5aUcfsECcsL28RLQdxc6NRnSLDbozxWibJwyR8iDEWUF67CxqAnVFZPn1chi4QQJMxrY1qU4gnF3QHcyofejvvR4",
  "key9": "2gPvFxHYvNuwMVw99ipe67FLryGpP3XRziP6a45kPxDpTSQuLvD13zPngGjBnGVAQkCWNMZRpDjEapR7R31oNDWk",
  "key10": "3BPWPmWwzLVoVCkSdyhhMx378BLcxinNQcn2YDazhBkFKX4wK6xP4JyadAximz6tN8CWc8Sk2nRcAtwQBkXpmsUJ",
  "key11": "2Nuziw32u3FWjGmQac8uy312s1LpkFefk1s5HCohsnzZF9WD2depvq2rqqjaTSGEiHys5FN7FrxgTTu4Vmzik9hX",
  "key12": "uqmYdTAW3WJTUyN98Zm1Wg8hsyZ7vnJN8Bqi3P2Budtiospvm2ZaBmpvWUiKNADz7qnHiS4uKHYSNUwshVohx9X",
  "key13": "2RUTg3mQ3A4voyhpPoDNYxZURxy94LozS5F3eKsBkE6JHhdNknhKTb2Q3SRyWurQUVHXXuvVQ3GFNUapWVg7Up4Q",
  "key14": "4VrNAcSzDpFbWoWtG5iW5CDp8zuZc9MbgzjPvvP8iPJPii7pCTu4nfqvGgmGnMJ6KjZGgbg2g1DKz5eS15nzPsgF",
  "key15": "3wSDqaKorNq4SxCSSGt7tY43SwMzW6yEecmJsGtKY81Mg5V11kV3JHWcfewEtvaooWxPBD2HQDtr2SxKyt6o51xd",
  "key16": "5u2WTcXmnfJMsbXiR7r3w2ZdhceSL8Cogtd14Kt7nX7SaQ3R9cn4j25pd2Nfxbq3au8DqJA8tnXJ92czSC3ZQ5QV",
  "key17": "5u1j7ZKNGJ3mJMCoyZpTsN1nTE4atyjWGBfTXZJXtU5eiafhsSD9iLoWMdZTZ5mqwG9ubDAHRKWwHn96BJcufB1B",
  "key18": "5JRcPaC2DythNZxTengJkqfbQLmFx6pq1S5RzuL9AVXng2KAFhT5PhJBmjACHVxRQYy7FvyfAvfD9Gv1jAvozgaf",
  "key19": "5JSZaUwfRNustE7XC7rySBof6CHhB8mqXpV3BddWotkdPHTQskbPww1udrKEA6TEw5rpQdkRsuPiWJa7pKfCmnMN",
  "key20": "2NUgHbdcmMnDj9YrCkmfCWf4sE9HiUvMVVTLobnMNdzZAdjg9kH6yYrPNZiZU6WdEQ4gvvRTjSa8VvRcdtuNd57Y",
  "key21": "57ptJhzGXMCvH46pyNKdEr1QhtwpJ3mWFR8pnD2WoiCZrMWD3moKzyFqi72VsPXQUEtFG51iffe7wmngye4tnhE9",
  "key22": "4HmyZX2hHHRz1epxPyyQU4hKfYuTarYUEcRPssjmz3doTYHf2sidK3hv9R7Qwpt6b3Tc7oCgo6E6CXfwmkvjv4dz",
  "key23": "2i8fWdPUCg4EYe64g7Bsr45YdJd4X3W7FAVBmwSS5pD5qsdU2vfDeNhz969hcjc3iARuRLYAF65RKyA9SWpUYRFG",
  "key24": "PBtqkuXpconGRmbCGWWnPpiZTEXYCKoD5E1U86EHtFNuHwLphYrJ1JFLVDnNUmqaRByrzyhp9QENsWR6AFoUikL",
  "key25": "yfEzESyt6DDa1RtbSmAMrZGW1zuELDKSupVejjMusucQUxoTQz5tEJShVZMVdZqUMLs7yec8cCFSo7H9aBQKZks",
  "key26": "3fTapiYZzjQ2tE7CzX261FzwxeJH16aYQbeCjvBgKMiCj1oxM1yyhBheXpiN9gn62U2hSqKok24CCeB4sZJMdiSn",
  "key27": "3B6FBtDJiZXhsyesZ86KMTepUsqJ7f637tEskto8d8NZ7njN9zpyoYHrYkUaC94gkjs5v6H3GsyrJH8QymQjuQKc",
  "key28": "z2o1Ry7ptoc6wABpeT1HdYmChJVPfRaYgHHveFtHio8qvqfmCPoU1ScXFnsJSXAE8c8aZpobE578yyPFcg5bKFK",
  "key29": "2Wvfu8D83mbnLi6pLhrZLArttTzWdiNbUrzu2G4TiAqXZ7YwGVdR19ZiZFyMuHtySJwC4gyfaSaKmNtHB7Z9Yc9J",
  "key30": "4WsdxJBeLoytp9GqxPFVF7qLxie5PfiVTNDTp27M1EJDFPYjTrP3qFogEjKKyk7hJrWbjesVPxrSsnWhfBuCkyZk",
  "key31": "2EfvtJFtp2F9436odCHLsXacPaphWK2721GGErr94HmNHNPXmVDPisKq86qEqpWQKoGyuBTcoATLT8zvH4Wtni8W",
  "key32": "5XHjmVAaVs5q2zNLc6Pf1hghN5RDAtL2k2CDuyd72eFXzZhbQfzUrPgDNRPaPYRRWmyEybJZjyc8hNHLBGMbam4Q",
  "key33": "qm2sZFFX7EVFt57UayFm7uFGN4xVVZ39uQqA9AHjvL9LAHtH1rgnQ9c1iDedWbY4vmkzfuTyTdGQKvdxHrpXd4r",
  "key34": "5reBxv8yrfiz5XRAwAFaSNXd5BgTY3Kw2agLGz63DsNTvFqGYVdRbPgNF9AWKXmhTEVUV4oH4dbjyJ9KbUPdSoyJ",
  "key35": "3SeEkQuhA8TCnhYmA15xfYgW8yEC21B8cJSJ5Gpju5kUzZNfPckLqEgvkbqBJH84JhWSHKWip4o1rPUMmSufEgxu",
  "key36": "3uJuimQafVMfZ8umC1qXSiMQZqKXRTfMRAmCMWFovhFrkREUodZdT4iHpqnABqMgum57WNxgCcJf8MJwktZz851h",
  "key37": "5yKEcJxutmrA5BPxZrgtzfYjVtz7HG4j6SixEKpi9fF9NYnaAxN25CGbeJjELcEaEdHj6MVVxL4sb9qwPVgE1san",
  "key38": "4FzvCaGbckWT3kr7rL7n246bMCH2s7rFAxBbpKsy15yfPrBJjP77KFsCtCt1DiKi6d31he8UjFAWeB26VkJfzAUK",
  "key39": "2x6A7rMM2NSGy3SxjTcnSkug9GMXxSNbFKL8BL6qTZf4gY4x854NnYrCGYgmwpSWPJdGoSwk54kMhaHawsmdRUQL",
  "key40": "CpiQuFSEM45T1pdqSKbRVfDmXUJcc7z8GdquZDtkZUQULUTatr7mnTduym5pHPiyAL2mmXebGeo3Z8TTiDubmA6",
  "key41": "4huaRGboEddr5rGWnqUvMoEPNVG9GAcVirDJyEbXFGD6F4CwwimejuzaFeTgGr7kQcYm164U7jT7taRZpmJhmoNu"
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
