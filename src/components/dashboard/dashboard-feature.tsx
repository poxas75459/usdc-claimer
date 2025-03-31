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
    "4sSWZmpzKgQ88MqQ485KstfEEdP9katsFUkm72SdNpKiSRvJuD3rQcXxGJYXNnnUKLKgoDWmUmiq5fSDcArgWQqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKPMLcSfkn1cSWtAyET1qnn4fPK2iSwjemDN8x3jjPSjYxcCf8syKhGvgDrGQCHtzSLgGGoWPYByUt6526zXRd5",
  "key1": "5dq8sxV4zHvmTMELjW8m9dcVrqaa2b5tL5rjcZn2dGwLDE4vm5Hqdp7XPFCoGyjYoq5g8hBuWMbPVHNGu2Y943Gp",
  "key2": "eeGtKhz5U8EBqWpqVC4SFg7hgHSNboVwe1sqCeVzXSXVYkWE32Ym7UFws7cYND9oVrSXaMacABEaaMJuJ2izxiD",
  "key3": "3V6cXZSnYRzFsQzBRTXbFKkjTbNj7PuMwRSrMvqBgvYbjqH8SCYmLJjGozHec2tA5K3xzS7YJk8VQgw6CSH812Nm",
  "key4": "VmtkiGGs24QAmKKqihNvfYuKxqe58GhMTQkZtckZhuT9av84Meh72N9oNpg2rv5iamQ41cpQfuWfZ4KBgnDTB4Y",
  "key5": "2aRsXULS8R7eoQFat14gZDQGb1bMjnFdGtthtQKQ2Zt9ohbhSdESgywknnfPhWdSW9k7VniEkqvXsjg7LV4gp42A",
  "key6": "46chY3qokbHj6k37fzstDdWVt48Rk7hyntVx3VmUDqVqSFcXuRMrpHhwvFwW2sTagp1ugtuUFfrjSMf9WjSMmJW8",
  "key7": "4PJNxSwhhsLoKHnXNaDbKD88bW4SZGdhXG5kofL9JUYQdgzGnrEs45hmjFbEenqFDbaU3Bw1fUrdefe6mRUHukg7",
  "key8": "5iS2fsK68c23sopYWiMndkvimdKhbvFh6bkLbpVTg2WtSUu7fvsHEqQhPTTeE1z96CZekrSELdZAweEmrdDd5uvH",
  "key9": "4YVhrsZHoKn2ivgogqyToua2x8rT4Lp3SQSzJZPgj253orh5s6mjTrVbfiAuZ6CDkukYfewDQPSNbEz2cCeJW4ny",
  "key10": "UU7pXRSg8i4bvLLW4mDeVdvvNQ1DdanUHh4xp5cWG4s7fwcLHDaPjGj3d2i2RWWr9geUrLZwGpRb7zHCHu9uUF1",
  "key11": "3mjQQGaa7c8Af8GN7yu9r3ksyXA6Nrowwg31XrLpYk8jBCKKbx4kDo4uZePLpBTKeJuTgsGkDAGjJ2UK1Jdh6hCK",
  "key12": "4u1298mxFGeWbrZtUf7mkE9JULptXxDoVpvQuJmnC7w1kFAG7wP6UpzVhxaXwneLnfJd1exZRrNMeuAipci7cYoG",
  "key13": "XTv5x2NeVumHsSwuKzPT1gE8rL4FKEVvNq9XtY2SzswVvNw86AcJcqB9FQJV7hoFpgv19JYoXQHikJqKFndrswV",
  "key14": "n6AoGbhvMzCujm6ny5dwJmf2WNg78HX2gaBouyiLQDZQfG7Me4eZZnsCX5pjfZJKoUcp4jEVER148yWsPX8nPbW",
  "key15": "gpQ3HZ2FiSEbSJuKLiUwtGVdTwNQC4gDZW69A9SoWMf56z5bnu9yUG3pLNTS2PFbe74BPjrmapgC4AyyxqLEavj",
  "key16": "3d5mvQaL9GmiE53tjoo45dsRCTbzwKJrG98MpFX8Mn7RDaFLteSWgWKX2iRYmK3nmX6S1ZXqdD2xc4gUYGiSE2gC",
  "key17": "4ciSEz6pGwcmuh51yb88dUUqEgZZncoTETXSyzoGz5PQZ62xACSs6A4th9uxc13BoHiSwiarb7qNDFC3qDhA6XKy",
  "key18": "3C9ZdxttWHbWrYvNGizaDgu3qr44TgjczfyvRntsjERgMvV9YDUempi7jTZn2HCoNWpSoaqdr556UZ4VAxHafCJk",
  "key19": "4EpqyRdtmKvkkdasZF5UVj4F5s5u9nn7MxN5LdTQU2QhgtdGeokVo3dCTJjCKu13XEtZbux6SsHBCnj34jFAyppG",
  "key20": "o3jBgQDipEuP7Wd6ZGXrjX9WWBTLH1N97BWK1cRe21t6Wn3CwKEKr5XzZTia82QqqZ7x56nPCEMZZTUyJVM6NW5",
  "key21": "5CJCU5dEw8PSGAY7VysQHxsuNiNN9xga6XCP2z3PLN1TSzN46ar1d2naoEgxgHfBYeezjW2r7wSMHt5kCToQXp3f",
  "key22": "5aNzPSKkrnb9gkbKrucgiGBpybbfN6SjZwKgnqiPmxKGtSvc9EG9ZsJjjhbFUrw4i3szD19vN1geU4jdiLu9hjej",
  "key23": "tDzwTZaMFYDsJEM2y1ymYC2d9uApojzRNcY7kgqt5worJwerwZnasNY1Rr3ejWX1BWsGyHM1K3aHa2pngvH1ZNw",
  "key24": "5sP6k2NUAV7e1c2Qbn6WvvmubcZWZS1QKtzE46ictKvYWNPLhEz7nhV5hB1EK72vg6J3uvy8rqGEfw64KwJnGRtC",
  "key25": "37hnyaWHhNnzbTtZexvmTuQZyJVWdfdM3X91fo7KGtZPKU4qGeoQspqS4n8yyNJsxbpu9JTDmf5Dxv3XG6iJYo5d",
  "key26": "67P1iPoz2NWSPthrA5deRb4kqCGGsKUYy73xKEHfAnDAk6WNxx5Dw1QJxXn26vhG3QuYR3cgAvA6onmAm81W3dNJ",
  "key27": "3u5NKyGyNu6xoEWjdcbxC8girK9mCrUqggRWUUUHAXQzMY84S3XhQQCUxAXSjcFmcVLWVt1nQ6mKPnZoqcnqHGyZ",
  "key28": "5XU48q45uU38Eica8sN6QzcB9DrKr8rkvm4Pbwa6M16cRBYoZGuY42Cn71Lx8wMx8r9c5oYZRY99rGmcVhFftXJi",
  "key29": "59K9TgietVZGVG4TjfN9PzWhVAf3bDTNHDvA1EP73KvDMh34SrF9JrN2oZiGLcteLSM1okL51v9Zxqwe3suSmN4f",
  "key30": "2YLjvXcVSWdyfYB5G8pqgKHwNWSNVXrWbM4aRuBefbEMfKMWesTXyDMya1CAugsf5suqsr2W3NxZZvxRn7oEivT1",
  "key31": "4n9XJKorX1fMKWWYir8kVzTgfTgG3jux9SukvpJ36giMxCcnRgUjxa1YjkVVS48MktSn9CXe9fsyF1heMpZvgSC4",
  "key32": "4g5SHXkWV5zh8HY5kx2ikPfAc3aqtsUprFmMSn4tv6MfZ1v6N4YQexGEQCPkCFZrbPQUxSK31bVGMjf3igUQSKup",
  "key33": "2KVRwe4kcwHq1BMwMJxj33rW1n7Pz3kwLAfboCrqjXbzhkwtppngTGoXfXQ8h6H4SiChgq2tyyGirmphGbwvykbM",
  "key34": "JNhy734LjYVN765p2rsPW5Gq8GFMK1HJrUMrKe3P4HBpbELKJk8YNPuAPqHkEZ2cx5uY752EVk4fZL5y8865qju",
  "key35": "awGJ5pdSzSGQxVMoN9LyQq4Y8Pmb1GQ5wEdRDSgh2EAqK3FE7zKGyLmtzbT9R5nBToFqecXWVo7JLmHoZXZPSF3"
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
