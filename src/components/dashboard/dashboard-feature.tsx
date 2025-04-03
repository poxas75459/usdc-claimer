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
    "43aJpkpoukvC89VTwBt1e5ZdnzJ4WH6o187uY1BpcbzYNENpRdQ7wVy9rtTyxaMyQvtFBFpwewrJi3LZSrnavuqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pXWQV4CdBE7RYkZjMEgHHa4jgWJksvtqct7oNSRjiNc8iYAanWcAveJafi41gr8XrwAUo2ezpFFNUdu74HWZ2oM",
  "key1": "56G2yStCWdFABkBuFYBjLyYJXnAZFjVoKfMSTsp17i8AMS9s3E69LvtANHGBPa7ckvgBrHS9q8SfPvfqXKayGQPW",
  "key2": "A1Dnu8VUbb3oXY2435VXwG3MBoDMaASYsveRgtpSQC8VxmypJBoNDW1PN78cPvaJ5xsPxDH66VtYQw1VYcVQdyS",
  "key3": "579AdeaWti8qoXvyTXmePXpSaD5fD3r59yhRxXrmtqqwiAuejwiSxXyZM16JtRpSvzJtXg6dnqpnmtVWawFcza2w",
  "key4": "3nA73PsmifqTnANm2r7TGZXJ79GFobo47syV3rZqRh7M8vRsY1xt4TA4e12MMQbQugfFNp5k7AUTPLw95NhFQV7V",
  "key5": "3hAAbaGkK42eSRoXe18N1UcPrJ4RYGTwsCpbsqwSnBvX9zKPt5fuVv8m1R2MpWA6Gg8o1ikVUCXiEM9pEqwPMr9r",
  "key6": "5VxNWhXZ3qnUooXqoUm5ALNuZt5TH79XJYmkmw4vngWkQUjZpmNecxhxfu9euPAT6f69tcqd7pRGh8E1zfvCv3ca",
  "key7": "5CETSj2t9yTgVdgaEMTY6YbnubkJ8w2Tg4QAD1w5Qbb8Kw3i277iXh6vBdzo2xUoM1F2LH2S5duBSax5eUkYLn3r",
  "key8": "2cn2ZVK6PUvAyEU8NXULx31KTH97RWGYbAcGLTzoGiLFptUGZgorseKmX5Eubf5UMLFhs87JyegxBzRzAjvicpA6",
  "key9": "33ggQR3AVweLhxg5Y1YGHCPD186dqiLA4TQStE32Ypf3uLEeyoskqT8nmN6avfSwSub1LvpSbiY7hZBMH961QKxu",
  "key10": "3HoiaBE3Sym2mRpzbsk9vnGe8zZd2bp9Ld1CEBmK4aZgNdUTYjMAvRbVVwGDNQiYriuizHDDZBXphwTMmJVJCZtC",
  "key11": "4Ke3DnDKVFR3hdfCDE5BK7pSWRttqauvyurVawbbN31AfdDFaTvPT1dtgQ4HRBb6cJaZyWdWZ7FBzLAL4ixaVQUS",
  "key12": "4tPVSJSvHhMeoiY9qZGB1oNQhJhTPGZ2hepwoafq3LCnjeAr7ZLXiZuJg6YvAVEyrZXxKwiZZNBWwSYiHT5QGPo6",
  "key13": "hu5Jb5Ku7Tnj1rkCQVF982GA65KR6jGabcDFdubyF38JdS3STrXJPJ7k6FUL1k53inUP7mjzPrw1hf4ziCkxUqP",
  "key14": "3iqogNUbfv15oFU24Ux1BVwQhREXFkWVRf5pD2yXr5eFyM9QWsrZx5CJD74v17XiCD5ef74KyZRUJ4wLtt5NTECE",
  "key15": "4GfaQK3gomyZ37B3UgQJrR1EBoeQ8RJ1NeTATs4fiYdCAeaec3zYacpeR7ptJkthQi5qU9PypqKARWokLs7fALUh",
  "key16": "36q66piDXEsH7bM1bm3j59xGb6cPqPriSsvj5sWLxrhAvy1UvA2pxgssK4ya6ujhkjxH7T7UCkCYCLtSuUmdMFk4",
  "key17": "2HcjABRgD2n5d4koCmxfZxBdB2PmgYKCbXcHLLnRiC4DQgLNURbXoATJeKMnXNWx78urEmbM7UsHaxqJ3ybtpq49",
  "key18": "2y6kAogqBQoKuUAf3PpAQCNSQVNmmmoJUj1wqeWn3t6RN7BSuSrqKndG6szCD6fFQqoYuXMUUJMsht5WprUKewgD",
  "key19": "4KCd3RWSZFQCHYqjKyCSEQCLgV91i55N4A5YPtTwSy3d3NpGpZirusJkyE8LoPZ1J2MkL9WEdWgqTLVhPAqgG8DF",
  "key20": "4QBcmNMxdfgaNfdZQBUb7eCcy62wr229yfbqMvWXv4iCB7ZhbGwoQkd4vNPtXiGzvPWVYb8WgM7B5R8SZ9GFe8aH",
  "key21": "2TL1tTMRJYi5trGK349QU2aAvKnTLmWak924efopaFez9KBhNW6p4AY5Gzvdun91Cxf1NkSFpJ4G4RLwC2Dpiwz1",
  "key22": "EKWcbdm8Zmk9C5eGRtNCHXdHbBeDrKKt6TwFjpCqu6PCs24nZaYnqyhjUmuMCmb43CDnYmWzw7Jj16CdHjUR5s5",
  "key23": "5TEZ28jHmkgsHETjoPPC8umGxJ4ihYStb81b9QsUZk6gRBmWRkQX6dBQXSewm2Mrx6nbJdJ54nw79V2QRx3Ury6u",
  "key24": "fiC1NuFQQUq5PwQBM5ASyEJxdjoDH31w2JwWYK6ZbAD9epFkeZ9RPGSSocfh4Y3nkroiPii143SiGcg2fBHS4m5",
  "key25": "HTsA62T34d1DLSxw3ka6z12fTcoDMPiWUKkLpJKyA9A1W72pZN1aEXjP7Bg6vEzCNS6nmtX4GtYkYpLLVH8taiz",
  "key26": "4hTvBzeGsfa38petWfHtM8R6SgXuCyrz1EczLoTddGDyf89cRPH93BeewXdQNrU3VsMJWSuZqgkQTrXurYYKQtjf",
  "key27": "3UNS75GFSYioX2znrC8mp1JLyL3VE142JBSbYzmVcpGD9o95GNACTgeV3nwAfXg3v9axgudoFDVztGBx2YT5Eq5U",
  "key28": "3CGwyxpjVNhJNBE29LJc7g9kcFb9kXLvTPECmW91yH87nkaER1h2iKYcyQAZQQ4gAArRxet3zFUuGhcD3hUDNru6",
  "key29": "3Zkuo9ReEss4qMRoJkriwibQepqjaW37DBMZBY1B3CARksxo1B4WArwUG2z2ZTWk3z6ajTvTHVmsBksZ7VyDGmQi",
  "key30": "4DpoBsVYRQ9y1uiwh6hzmkuTRgStXHdCQXVfowSDb21GaojpPoZ2fUPq6P4uUkEZquYadGshnsv9x7mGq4h7YT4R",
  "key31": "31qw3H2bxPbN2wJUdPtEubQdsEHdrURgYiKnpxxU434CP6XDLjumtB4uw1fecJrTJHeCbamSS5oWjxY1SqG6C9vu",
  "key32": "2cWNvJDoZV92xwrUCwsVhvFGfnJjcAKUxUuYgfEv8Upz13PKb4W3PPxFzGVH6vRFhv9zJYUE4G2uyQVPeFKYpNe8",
  "key33": "SjU8fB4s2yexjCEVmYmdaoHFUbzpPVXPLMGst89AcyW6iydtAkUSs4A4DHvK1C8JTQh3wUrFZziPmJqQkv5FAx6",
  "key34": "2m81Y9LRbMVFKnLttn1sXtSs5XmTwgX13m4NC3RhpY43Qxe6W3bEDUGPuiTJtJUtuMMLtQBVomoRQrj8WMPrwcc4",
  "key35": "5BJtrFS45eYxyinbMS6ePgTCXkAN9fFp7WTpRqfwmxDCjyz4P5tukgAwCfEP9MTPTwQdtGchoAbQkp7TTyeUsEk2",
  "key36": "5reNNkEemypZTnQp2mSLmXJUrvgLk7Q2v9RgN41mgq5EwSr19yQv8BQroPHMwjpRLyDoMPzY2WPXhg7aBGk7rCwk",
  "key37": "5Pb6Zhg2yAJv6vitpwgjED4D3vwYuzBfg5an5BESkB1KNuUHGM29FQ9sn2PhHCQ92NsD9uPyhRkYXMq6Q2ZKHDvY",
  "key38": "2PpRuaRPx8ctQVZLeS67mx71SQbkCqWMjwxgcsk3NqsJeT6ri6RTBsNDWdSG8hNShs1cTX8JMrsP4QiPMvEFjV7u"
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
