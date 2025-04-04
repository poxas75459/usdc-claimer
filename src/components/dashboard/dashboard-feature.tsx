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
    "5hr6FKZwJgXZxShba4C7EYYbS1rjJE2N7oSg1jBpDtK3SiAPLcDom6EbSfHe4jBjWkRWX3jkq7Va7KJUcxQDE7j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThcS6ZGom18svETXJSbXA9X2HC66Qs4JyBLex2iucEMhnanDJjZANdN6fXB677sS7tT2dsZpyfSKY4LsQixWGd3",
  "key1": "4UQgw2ngEwmGJKrUyAcXLseiVyWHt2s1FWYuunWSQ2PsAxFYGF6nJzVdZcd7LY6ATnytWTPNKQHdZBurG7fSzvwX",
  "key2": "3v4xh4KE8guPVWHS4q1RaZDSy1NYBPH7ZJj8bJSSFsGWURZTHKFMTUwck6c4DZiC1MAF74QrPh4R7AX6d8TNudmV",
  "key3": "5hUXU5csoQstbcnpUojgMaTz9St7bX3x7Tuoi1hxdwQeSYd6xNVaHi5xRSR9LiiDAXCCcLLgxw4FGoRXmC9BVKPf",
  "key4": "5THqNJoJ4Ht6s8ku2p3B2M3oLS5EYqgN98UE8iAViXgauR5wgLQ5ftvMT2vRMMaY7M65svyjXTnnKFPZTQi8bsRU",
  "key5": "3uirzTrzhx9KWrpTkPsjaCjpC1gaWV8cKtY3VGjrdeMJgvm6pLKd7pn2dbYy8mmLxwDvZj85G9ritGHPXzgyMF1z",
  "key6": "3p6GRzRn3f8izWGMfxajkquqk1abVkfHxrQfdpxxL28tr8krU7r3GFAGFD1nFW6ENC9DQeQQe7tfKdcybyacqFXf",
  "key7": "22KVc2wiV89D6dR6fyHhdGy498z9nU9QVrDAoQcb1Q1xxrSBrvsXGZVHFQ9oiNaYRWCHar2XRgcYNyEEW68GCvEZ",
  "key8": "2wEmzwpE1sy59mZ5P2HvV4V15x7UV5Nw8PVXpUpbQHnvFkVYLY2hC5YmNCj4Q5CUycNgTNyFKhVJsW48nNZp3PA2",
  "key9": "VAGQhAuthpbAkCj5mbw5Qg1i4hPstj4X2s9MvwG5RdiAN5FuRBTDvXCqUBWPGjjqRLM3TrdbjHphAqSbyi95VUc",
  "key10": "4pgwXMgdpKHc8iKCKaGnHW125KRUic1HxZG2tnnu9uaJJRBXPFhCdMLBF6e6TRyxagR4ad69p5VyVtT2qPNgrUS6",
  "key11": "5FhrzwQAKrzFtZ4QvGN5uQGo1rhXdjE7vdiC3P1shJsvtoCn8MhfS3Ra36N99f4mLTmEiyY9hTSMEZBFFmfbdhxa",
  "key12": "3o9KkfWZCwCF8po6ePoJMpbVRuAoJmmPdc14BJK5sesUU9mwCBkhDwtMKNtAyNwP5FKsQq2GUkizEFsqvUgx5Aah",
  "key13": "SRQtfGfpg39hbxmtJyvnbDFSMBEtfQkstFr7paWacu4wgtR1SBNdzPeG8NciZtUtjEUB2B3r4C3u16nGM2JnBCm",
  "key14": "5UbKMsG9tHC4CBifoA4GNViorGp28LEcEKZwD8F8qs7spdVc1QKsMRdT45bRzRCaDPVZBqWPWZsZGQZ5ksxeWfTd",
  "key15": "5ReCbNmbHGGibYGGca5zi5J5AKeDqduJQEV6ijrta7aTijYMYbSRZMBbZbG5VyPHSYcH7uRD5ZbgpHYwquRRmDPX",
  "key16": "5mruvBZLvgmMr9cGfSpfnniKKWjWkWQAm94oVzhLh7mzVVahwt7Ewm6HgUd98qjGxaYUF6FkgLYW8H12TvvuvgkT",
  "key17": "3ciQPqSPhVoXD8ViDryfrmebnpwPKD27jV9Db8H8mJDfAHMxjtufUL14vE9nZSTkoMNWVjjiz2TbZqsm87sL6vch",
  "key18": "3JrrnTaE2U1EBcCvQN2fS61VRDromXcVxHDLTjJ8eySdS2M75ZmCRTExCvxhuRKYaeRYtj7Nsx9a4Zxi8uNtcwKx",
  "key19": "5V4kGffFPzNugcALs8pEHjCXczoVDgMgWdZVLtwgpEwNfLsWya4Wuc6SRe65EpBB4EstPYg38UaF8VbRbqS4c7dV",
  "key20": "5ozsYjR3m6iY16krWrzJE5ZLb6JiGJWLwAZV7LJgXfXfVqjpeHUTqy5Un13bqf2mJ7aSooF1GWwpyt8ddgSCRFVU",
  "key21": "4MdeVUGdL8bQwZZv3voDgHoQiGcWvZpWpzCQfM6qWr7YCWVQsM4uV7VFBPsr5AEAZqc4J5xJDjLXf9mxsMH4NWph",
  "key22": "2SN63YxBdsVvTBvQRGqd8PHZc1KbM2qoKP5BZ84NFrBySvim7pAHM5dyadpE3BXGXvN1YKDXKBXhWNXjjDj8ZXPf",
  "key23": "4XjEY9wwKTHt3eJVQcRKeMnFY7PDfTQ1zp7D4zhrK6qdSpverHWcgj4rPTeDTm6tS9Jq6TKZukjkxns2wNezkF38",
  "key24": "5JE9uVMgpjXkGZraMH1mci9gNtKBp5oWchxULnnJfqhkFxnmyrQpgHfqm56vqwgkYYn3Rv1Fb5uJucPCsRUEiQGv",
  "key25": "32gUSiurUqJwjx44i4E88UiRzhSKg4BJfcrR1FyHYyqdJX54iuHeeQqzDcmpgMnQEG5sftX8e5WYqpREWiLE39pZ",
  "key26": "5Q4XjRFpDQB3W5JhffFzuB56sV1WPNVEvg5JmaVTFBPu969orCMgg3Xb775ERaitytmWSRZYdo6s3Ei9un6WwBSJ",
  "key27": "64krLXcaEd5REjJqb92K5MDt5ppHsTYtpgzFe48Jhn4Bw5KzHWNjUW9YKxTh9NBRyxvfWxxF97DJbq26hS7TSwAi",
  "key28": "39ETwEG8uyscpN4B6yNfmLNJ1Yh4jnK7dYLoZr4TohRdP4ZG15rZFMcFMmNjsfTi1sRhXjLx6GzNYE22dZ56srrf",
  "key29": "66K5dkcyk6erEgDLxC5bLxshZuLiDRkkjFp9vBM2Gt25CUvXBsTtLJqkjRfjCDePDRv7u257qn8rAqBYPrFbUSGS",
  "key30": "4ypenthbZA5c1wqk7CsgEDhqEQYSLtum7hyZqWZwHdQnfJxDouaZorpYpVqMSgbQ6eQd2ebZrn9yQFfrEf3DwM2E",
  "key31": "577imBF31NS3ra15DggzQLecizSUcX464UVtpZNFK9rNpEtgoUH3oCNmsCU93fLB8GhFxb97LWAFhMJRnW4YA2jg",
  "key32": "2jmwFgs9J3FhE471nQKgWJagWGijYv7i6sSmnjxBuRDN7wrnHmRkYmyqE9juxijtSFNHfJHP8gHyJ4inTvscEDUL",
  "key33": "5Gee3C9yBZbFkaMVh2vcq7qDNNpDiConh4yj8zGWLGaKKoeA4qsaDXmwG1h4mLuqpfHkyvrqdxQFZyCUUq1w2Nkj",
  "key34": "3cGMsS1sSQWy9cxMHthpHwmheNBzskC5iRrEjDcvTC4iKipCHVrLD7RpfAsi95Juyv4J1RMVbeUrjSH3KA1ro7Tn",
  "key35": "32K53fbv3XycGB1bMPjVL2jbPJ3NT7DmbwkiqbaRqe1YQaCHt2NJqVKQzddBCws4zoHdhLnoMpmh5GSj8eKpbwpY",
  "key36": "3AJqgTGtRpVyEJGRRajhJ8t1bvN9cs8SRa3VGeRmgpAMoB1X8WqCLG4dZoh8LzkUFvB9fMvuERrP2g8eF5Mq8ecQ",
  "key37": "3VHxjc8qi8inepkuVC9GmuqMmtVcFiZHAk2CH4YgSkzSFvDViivGHm5gVP31vP4GKAf4QTW7ovXcQHjYQcakbuz",
  "key38": "2n59XbCG7SxhNsftxxFefTvVADrXeUpZCDF97Lot3ew2iVqudfZjDF68QBAz4HZ9F1rjHkj6Hm87gEmXZP7uRGRk",
  "key39": "8387toUHnJHVT3xpVMaCy6xV7MYdyjUZqNUk6897MjManUATnjctcAyoSVaSvFEvSfv4fi1XLGoyMeN8DeQuW5N",
  "key40": "5vm6WU15gBBUHZ14qZWPmt77Lc89rif7pqhrAHV4q6U9Ld8AkjXJjn1WiDTYiHC2GKdoPCAsypXMGaR3SGdNhnjU",
  "key41": "25t5xmJW5CdAMZXq1CbHxGukPDX2mKMnoYRdb68CiWXsfPJ3ppzLB1Y192FR4H2XpGrHMqciG6pyZHxwydbDS8oa",
  "key42": "2QRTGGzuBkGurrhw8xe33Tk7tqkL8DHFgiYgNRRvEXX2ZgZqVcuitdTXCL6X4W2K19LAGKUuFhEnekZreWviWj1b",
  "key43": "2qxwj4NfXcEGhm3ndaNjEpD4hTmK72KY8Mj9fMKQTce4YaYQVWZcgz2TJG6zYbMaoBrBL1GaoVQeUPeNBrPpFZEM",
  "key44": "4SKvnDGM9kGt8r8osQqXVubtCCfa4xRuRmAyvEVePqeaP4PhHPvzhVXgbj3mUyCV3VCfADZFDPzd4AhmqQ2aj7SV"
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
