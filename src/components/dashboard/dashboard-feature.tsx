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
    "4s18zijqksLS7S7hUWiCwCZHwqW8TivmqPJH9UH9K6sTLm2NjLYkPfQwiCBxRm16xth4SV4ghDE1K57k3UV4ZiKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxYjd5NQg7cc2U917P6dJ1nTj88kLRysexqzKyh6jZ9eyPWss4VNko3DTgcKGY23QgTjrFhvuDrMhfejmHRLaqD",
  "key1": "4dP5sS1UX8V37W8iR12iRpAVmfHSvob2u3fkBQmQW5WBx88cgRucUxBCok6we8QyXaaoyYgcDBJFo6gYno9Wn6wA",
  "key2": "61pXvkK6yBg3S3RxXFiuRQ8REAnwPrRFJ3UXwkeneKCheiCckqoe8MjrY3RowBH2AQwYm3dXwe68unuLSrsq6ioD",
  "key3": "2oz7j7VFakiBHv72GjYTzE7PRh7BP2poCDxhFvs1wzgtnHchL9ci6d7ypyqcGeLFsooFDiKfRsBZygqEEqUrayS8",
  "key4": "52Wdup1UYrzt1i1CEPnqcwSEQe9AUACLDBN4bgH1fDVvg3Fc3mrtDaR5QnF4yJ3RpDCnDUzCL2DkXDrc4bDLnoN1",
  "key5": "47KHxwDbuGHb82xDzZdcZDznD4LfbS9De7S12XZo8US5C8wY2bUEr397yt1BtJEFXBjHtg4VcGSWDb75Q2iSwBZ7",
  "key6": "54DPYjh9URhZGtMStmdjwHJPsYQrmHZQLwPsoCaf3QVxGXbpwkaZA8eVeBTv9BgkM7KxcvP6XqfHYGoYU5gTd14h",
  "key7": "2jJa43A8aAbLMQRztkxQCtgzkchtHJVE8YiwDvM3sc6jbbUW6QR1VKP3knVWMEwjk9WQ16oz5RfEouV2BYJJzRTP",
  "key8": "5ZCeYQ5NHFwDNQfa7miAMF4YbzxgutWnJnLRhmcXKS1t6PQ93Sb2EZ5h1ahbWoQdsL61HAnQu7FRehcK4XGAGUg1",
  "key9": "FHahpCdNqVTaQDngo5M3FUZgBdxQLDbTgES2xdb8MArdL7ie5icgDWYHvWpuJAqv82qJ9s9Y6Mj4TvrM6FDhbeo",
  "key10": "33fBcfPrvkgivorTG4boQSBiEFyXLcEWTrmECfG3iy2CL8xeaAczPV26s6BmVUsbS6QurCfzzSsNcfstUvDEN3JL",
  "key11": "LatyBbDj17Ytp6kKtKVownrExtueqoRstsEGrdkA65Az7KXVLPsS8EqdiZjj9W8D5tRgXHgbhnaqcQgSAMmMHdL",
  "key12": "2VWVQreuNT4Zs8Tvgbb89cJPKfSWwtsyfn8uia4hZbnh7tbJtc8MZ6m2cLdaY59vvvtED8xoaygCmzR5VNrbE6Dq",
  "key13": "3ySLLFfUVAPZmc7aQyEiNPd5Hi8HmKjEQK5t366UyxiBjNf6jQAST54ez2P7JkBq8JJvVwHvYNdP8nvpyzXKaQb5",
  "key14": "wpuJ1H3BXfksmiZStrff8odDbvJdmUF3BQRjosyhkCh2CW9CndJChTJHeVwKwp6znNUxPrAGubfxipReukXJtEc",
  "key15": "otHVijuDRMmKiCJDT5oSfMnr6MxPcL3dHwHCESt7qSQby8sR1ZBGgWcupxBhGb7ztQ6z5QvexjkUFXcNPQxncYy",
  "key16": "4sg5GMqRPg7sFX5UZSioi8i1AXftb8YvGxTh5c1xJ8YBmXKKtLD1TEfmd5spKqTPmqa7ufjd2RtzqhxYjHAdxSNG",
  "key17": "3dp9Dqp1HpJ1m8oiefRXbtEFjbghNS8w7UNJgoTVB2p4XrsGqYY3CdnAQZbWwWhiQ3n58348TRW24kCSjxskwDrQ",
  "key18": "2HHq9ghDibpSdVKsTSn2Jf3tm2ASy3Hopo7JpqLWcten6TupKpbfSL2z8cqgKdsvhYGd4wWhYbmD8mx1pRK85h5E",
  "key19": "581ZoDPqb3fBdaZKxPHeqMjWaoShJbR2fqbe4SNPzNefoT2jkJH5nvDNaG8fpdXDLqCVmNN8z7uMd6iTJUspTFFx",
  "key20": "nJNyjWAgNpCSLC7P78pboGdLgWFArwPjLppcHpi32N5dmEZABRMfF8N3fEF5SVmwRXUGKhkRhMf7f3qwkKXZb1u",
  "key21": "3sEQZGYQUoKvuo8bRvLzNhwrjnZFpa1gAxLkr6SR7iRRyYQUhokG5ZbhrjWbNiUVaoi1vv21pnZV7vKX6SNaoV86",
  "key22": "4rYhfMLbCVX7qzVsmFRqAVs7Z7cYqmMtvDakxv4fqgUckoFfpRbNimSLGhbxm2DryjUjnppU6UJByTZL43wSRSYR",
  "key23": "4MV8ZRqrXCuNjqYcb5cPcdMU7MAT91yQL5rF3aYywBkoYgzumpNBNYkCbaBAMhwBHCZrzq5LhvPmF3nA2wYkoQW4",
  "key24": "4dcKkYxJx5SyukWFwUEUAuAKJ86faFhq8GQuhcF7fQ8zWTzU8HUzHfpXAMXtan7sgcTwGsNk562rVqWAjypxmjTs",
  "key25": "2xvuUWjbEEvmkgXAhaWcLUbB8bCb6qAebd4FvFNRQBJ9YpgRMquToTQc34EPKrKddY7GesJNSANfrCUi49ZX3yjZ",
  "key26": "57vei2y27R9i8zeFXxNx8JSUaeu7bE3GAELNYBPs8TLVuSQQT79CsSDMjgatfvX9jpCjPfNWcJb9rrsUz6Yi6scS",
  "key27": "vMfZoAJDk8JKPhWgQVg1giRHB3cLACoufoZi1miXrqeeDS2GtL1KP6yQ7PZiiRVu4pjzywHf3qyt4NBfG19jVme",
  "key28": "2kxYciVeg75jxcA91rAb6anq2Vq8fuSULAEJRoPB3Y8v5EjfkDmq8vzSUxa6MeKnaaerRXWc7uagPQLtJAmt9zLQ",
  "key29": "3FZGsFf9FRpFZ25T9DMMg61VQv3VgGPwzfezrGEVPEJBRGaqXwABbyu8HsLyk3UncxDxFbgwtFwQNwWUQKzcc15T",
  "key30": "2ph5PGRpN9cx184nDhKHcUEwKSUZu4xJazirdn8TLAkEjCJTydDyEkFqDUrfdKemCNm6xNytWCqfQTuZ48fH4Bac",
  "key31": "3EJkN3tVz4HhciPLbmtqZzbfu67FfaZxXK6aVoXZAG4GPpJCK1CTSvDkohcTwJ7LSNJaPf5TjiVrpi25qapnKcBb",
  "key32": "cjQEPKCxsd2KGsWRxjmjkMdU5TNnnXzLVeWMHsLSm8mUjUujUD6SZ59uguL3yBcwo1dqEEDregZn4Ab575F1mbr",
  "key33": "3bFqGfGkbufXonbMXfr5Jci4Rkj1cGu24cL6e1V1FrdP6SnGWNd4C3dNAqVdmbdmSonrkKprn4MxoCYeSduowB6H",
  "key34": "3XZfUvPBkSBTsmJTBd3tVspnVhE2oXGDZTkfNoqnv8gbsNDJaSxuGTKwPqLwZa9SCwBgdYsqi3frUw3zJJ4nJJKY",
  "key35": "3fLp9RgMZmzShA3MG8xf4EQXVMJja4nduMKkGhmCBaDbTfonk6SFd28V45dN6x2XjP9gJNrD8ZSLiRymkFxhR7ZP",
  "key36": "5GcxC8dzVmheEXuNSKT6yBKfHgu1Zfve7n66br8kz4ULBjxcPheLtrdPKZVeejX6rFWmM55CwsPJEpYjn7on6onL",
  "key37": "5CxHAMoC8MRFiiQpDfBjLKfQd6d1VxteRAQMJo67pEVcA8xPet6JsB8gXt2Rq4FLDz6k36urKeaJbkWQtiqDP5nr",
  "key38": "3vU8NY5PFFbwy4vuT2cThZmArsoZtFVTzmnvkrGiLtcZEtBbnnP7MvTLJgHeUx5qmZHM4cX3kHPiedsGDrDg6Xy1",
  "key39": "tptxUEv9Dzc3VAHGfZmtqCtwksED2ah82jdBfZM6E5Qp8m5o7usXwmXC8yh7GEn33Ynr6K7HNcJdep2kt3iZmRt",
  "key40": "3qjBa27TNyzrpNM81pf6q4ZyXYqWmBUpZyJEK3onhruJ4uQz5PjkTL8MLk5sMJQopdAxLSX8tk4xZhU9LTNpahRY",
  "key41": "3VBWYNgZK2LbFLnxXVtjUZpikoMRWGx7v3YVGm3JdFGs7So4HTVMVSuf1YHJGRboNwa1WGRCoagCFX9p1D8AbgAj",
  "key42": "5B4kHdmyS7bbNZ5amRJEUdrz6ZGLc6hEKBufHkNt6Hjbn3DVb6D6xFSXiEXVfkkCBtrrVnvPwPgGdD7NpNNkhLKy",
  "key43": "4nLpwHV55c3FTD2G4RYy1QbvTH5b6SEjHqqsGrKwDCHMYViQ38cL3Wa9gZrjSFakY2REgSYrYc1pgo5pfhrpCcnA"
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
