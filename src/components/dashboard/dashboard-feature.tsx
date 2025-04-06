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
    "4N7KX6xtNubKt3HmeqrFM7KNjxFaPmcsMQv1wGLscBUB8PCJawbgF1X9CBYt4C1gsH6cMV944H6rJmqaPAUbwBqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rRp8bFyzeFmdv2Xfi1YxxrPPqgcapQw1MTtrMvC1gmDJSWTuBijFKww6ts7tYjteQwh7BEy3qrvbxWiMQwhGvYv",
  "key1": "67oYx6txvqohUiAgFejYtFGDi3a33qxyK5qGxN82otB7ZCKqBYmEUk39M1n4G16g8u5hqNzHqjtjgvmTy4G9fXz5",
  "key2": "3EfQQBhoHwpY461h251jnsK1FuHXJnkJuV158m5taXwRrMgxDaUgKqaafgBHXA62ajaM5sFLjbPqCAVPJEVcBCsV",
  "key3": "3sA1bEpKZNzPJ14kQh7E6ViWFJwBXD4rEGxaPkxPveDXukicXxvmxb7iHBT9Rn9yVikrY3m1NnWEpbHr8XbDQsBM",
  "key4": "2jRVTf7577VmScGhNDHdDNGK9nZ9qt8agzzmG6AbqwnsQW9JKSFWZ7Rz9UyYYAYPDuCdCP65JVDZ9BzgAcv5eZsN",
  "key5": "5bEiQMXLgvGV9fC3DkaatpbFGva2AH9uCAbk2x7wuLmkJ74YF51JNQRyPX2YhxMRePNCUm83ZpZSSvAgnWKdTHMv",
  "key6": "65r24gbQRyxa2ZJHV9XC5499BPSaYNsrUwTmLep55C7ZTDbsxs85ZLkxfGZNstopvXG8KTwan7Hyx9rMwEnakfSw",
  "key7": "42GFcfiTtH2w95cUWnZk4KANy5yDqDsx9SEGpdwQ8PU7yNfpqAhrJLDBmhPoFPCpuzjJbt4AN18L5KGuDahEZPDj",
  "key8": "5BLFkwWGF7bScDGFug1MJA547zv7oR4VzPcgakYriAJv1SMTA1nx7PNGrTafXCFGgba4vR3iEWxuJ7nu6FN22aEo",
  "key9": "2RhaYjDuVVcUME6fFUpRYEse9JaSxeNA5cJ5MGGMBqLKtoy56BrSrkxZtGUPpYZGmTJdt1tsWTE2JdzuAhfJ93KN",
  "key10": "3P6SHAMqKsosk7Evj5A5m36cGJi1DXkcFFhq6ic6yUbA5Jbfnf4MGxPEayBFc5yFQwoxSKE6Pg5wcsxXh9Kap1VK",
  "key11": "33VKf5ofMn4YUkLcxio9R3Q3GACJWAeko2etQZwFA5djrrBPtB4GMcqVUV58daz7aM1S7dEJRr2mydT7h2GAoug6",
  "key12": "4kPXR3FHwwc6kbrZxx2hkmV977xwYxbriUZAmjDDghCSEPaHX4x7NvR5HkRfEY71kBpJQnBN3UVuTutq7Ed2HCwC",
  "key13": "2jRQJDfk2icJGEJzzAfqoRvRCa3qhKpESxEEcRNDUs4J9JeavejHVg8K3SZG97HhbJD6vUWEM6rTE7WySeWw6yMc",
  "key14": "MRSChfoydJoDxbEETZ2ihrBJiYHLzg2qGZW3SgZ16x4C57wahkzCLYwuX2XSUMn5zKA1ph1AMYA12fQCtGsuXt4",
  "key15": "4qgRFRXPuZWbd4GjHdX9C6MwrV8e9rFFVZnqRakT1cu3cQ1zjSWRb3a93skencA2EyS1i2JGs6SDCJeFCUJsMqw8",
  "key16": "vqzzjHjB22KpUDUpPhkvwBtCDgZaG9BSFY6TR97AGMfubj7Dz2rRAoknjZr7FetrBrt46mkLqfU31uwFBiYxUe6",
  "key17": "3zMCrfQqGJVvVqmWWubzTSRJ5TNnQXrBNSZc8d1Fub1ZdP4UmTaqtY9gmfdSV2bwtrMR1Aj3Ch9MfyHTbDQVBiJa",
  "key18": "2Gn1fLuMDkPio31p2eyNvmck8qyHchC5LTyjrU6QcEtGB7dLRWDvJW1xg1BSn1xAsJuHP5oKPArKrsiEJvQCL7P1",
  "key19": "5iNHBW8E247fGAp9WWya9ibxoz5Ws5743yXgu34juW1oTUJsC5YzEar5whxj5h8keLGNtNbMjmRBwCnNtsboMZok",
  "key20": "4pbGTgAap4V8vHPnez5Q1E5e1m6zVA19qwHbshhmSmz8m3zqUpDFP2m5VUC5BkjhhwbqyoNQ2Ny4p6GuTsNwCDHs",
  "key21": "NirnsZTnbMcJ1B2HRRKyhQ1gYZ6gzvuEWFj2BP2dBBx8gVtgb4u1HPcACCEfn4gv5rozReQVLYFS3uJW9YyYWoz",
  "key22": "2eDWYD3Vs5vJJbeBUBizTGBGyvMAp2iJDuPk1CAt4EEXCKPUChppsP91FUCrZKtwVDEWvQYutsshLF4st18wpvfi",
  "key23": "2WZkpkoo5UifTBJFR238jaULDHMxHtXULCESo9wu9MHUY5GN8Kys95JCFACytB4DQ6csAGuRVRWEwYzhXXABKKCt",
  "key24": "4YMu7hNX8F4Sk3g79QGDbW4HB4AFhh6ok4UvPLfShjvDwzK5d5G5qNEgHgZ1dH2WnuegZn3xnci8cfrCP1GDa9NF",
  "key25": "4X4ZjSfVkhPL6jJSKcHe36aPzt3GKJE8LWG6gZA5HzuWSjnwUHhm8BpkXNpiRj8tRoC25Y4udGH584WbgYLVLQLT",
  "key26": "4wr9bAWsGTuRhfU9TYXHivHRSk3odTRVduZPsxjGTEFM3vYBpRD2iY8hcCWkXyoMoEv6Uqq8h8fsiZaQYr4G25Lq",
  "key27": "36E1PZ3mrVTs3kgGrdqJkXtjWfCDmnz9Jmb5uEkZLRahqNQuwXU2f3idJYVULodZfZSAuDeDKPeaCvVT3z7upeqR",
  "key28": "5FBQTN3DXG8AX6SmoQ4bw8eHLojDcWyRd6uEmhL3YVZFyT2WBjHBFfXmdRhWnmUagCcs3gd7ibqVUjMAgtfHxvLi",
  "key29": "5K1nP8uFgC8BLRH2J8H9Pxip7nYu5Yk118DDgWrdbmicqST89gQev5HaUH1QoPcGL4YC2f9ra3CoPt2mvi49xb33",
  "key30": "5bHzmeYccXHDRX6XXSUNwhxAiTS7d7q59SPRTr9PJdEJ96BHbSJWXEEijNVcH1PMssXnfuwJTgUCnHFK76SYZvDd",
  "key31": "51Jeq6PmFpcM1Nw9wDLDCxS6HKNs6SecZTNyps5d6Hamvt7WVgt3J4wHHnbhRhyBatwr6L3vzvEUifzwebCf8vnM",
  "key32": "4ZdWAZ9FpFig7c2Dj7c26XP68LHmQLmwJppLc9dyrhAcnQCGsTfXiWD61MzdSJUPSdRdSXxyRJumJjuUjVsPTd3Q",
  "key33": "qjTZzGc2e26UyKPkEgZGEGyD9Ly5WodsPgRM6TQ42zUhH8beaaKhCVyX4RWGtisZ9nzh1fvyMwh3fSxx4Dx1b71",
  "key34": "5KMxtCmPt7sa8EfCSFUbJnqK3L7kC1ShZ2MFKSNQ3PRLeD7jhjTVYkYPCvJPGjXap6x73y7B5EDXX7m1Cv9N8SiT",
  "key35": "3GvQGCYoM2ztPxTSN8na9vRBnDmVWrTXzfBNPKBGrCoepbnmz8d9f2kuQhoa5atjwrQLHbjNK6rza4G2UTq1hnjk",
  "key36": "5X8im3hfbKTMeQHbJMpHmYXfwYtqs9zeKGfHiX4jUyaqo4LV3hW1H8fBQzTJJQFiLrNUJUML8iAmSRVnzerHqUvt",
  "key37": "2C8FKMZLuBxuV6cZkCC8oYGNDYJVUH9qVp7gZEsLtmjRmsiphZFGCNN1x3bgeTLC4WzQRmJp97aHnikJuGn8M3gp",
  "key38": "5VXmx68pQ8sgaTqHxXwCtPmWPQ2s6yNMhRuMwDm9NdS14EQ3D6Nn4YfrJeyfSGmLANeFoeCccG8dNnGWoP6e4wJ7",
  "key39": "3DyPuYF1yn15pLwFNDqBr5J6DyKmac3cED5pPKUA9dnUDeQYYALnHo1FzXhGSo9VA6gAa5RLQA6KSDxCE239vhx1",
  "key40": "5xTRPSVGtPc52Mieeft3rmAkMHUvK3a7LHB26Jjf2Lo3G82vNe4iypsZU5eUy4TWv37wLR8TuvXkJ9oQBPQNqPzZ",
  "key41": "2Zo3Phrc9W5hrEQ9KrVv8bUAVFLUu2dNEJMgaw7Lh4bd6PNYReD1M28cnqJH1iFVscjwjKevhoKpj3T2KmYS9G2U",
  "key42": "4WJtK87eY3CKQvbWRfyCkhUSkZ4F6puC4C2etbwerYKV3xP5zmXz2xKXtRo6b9gNQTAStPwFRTRySm1hGNAqxtx2",
  "key43": "3RZjAcs4c6d3GXxyBpYKNVJF4T8NEB5hcKfNR9XCb1SDcgi1kHR6sPP4jPAYuua7mCtq7NQ2qrfHUx9LWMmkkXao",
  "key44": "5LxJQWs4XuN919Ub7PMsqe6BYNykxKrRbsMC1LYN6cMwgkU6icFqxM5wx6ZF4fzB5y7x1hAjqoZ4wgaeJx7xDcAb",
  "key45": "4x2mYf7MTmTS5LFP4SiyBuJTDBCJ3ryH8aY4cvmthaeiKi1MFBBQWq3MUZ5r1Rv4oF6mNEtVHHfPD1LWi6SQMxcw"
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
