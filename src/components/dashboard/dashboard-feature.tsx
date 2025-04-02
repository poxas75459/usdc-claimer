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
    "2DQJLatN9ATedpnVW18Zw9V8MiXQ1oTPiDTJt1K37qEREVw6uRpsqwqqA2gWN44NpB8JHBqGKa9g2kFaJGJUZByp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26MKSB6kThPE5KWBYDppCwHPRbsagVa1MLQmHz2GfjB5QkM6sETFbYPNnJ6AsJiTjcE2puHTk2snWNSJupkNKJuw",
  "key1": "PXCg3zhBHkXjzFPa3o1QCnSQotLi5yULgkCTNHnJtSLUWbKsHEQsoWGyCdwLbA6iyBhY45xJ5H4PCYHM16Rn7oy",
  "key2": "LVqhNWzjv1h3yueGfMnS1ZNCsw9WHKicQMwEySZa8KU77B7AR4KUwfLqX6izR6UePhDFe7o635xVaGsTocCHN64",
  "key3": "rKg4z3fDfCg4KB8SMLD6kxDyXG7PE6s9SsJ7pdhUgQVefYHWSft8ZhwoFowSSQiMU49Uvd7cA1rwnaqM4TxcV33",
  "key4": "nTYLg5rJ7sJngB3fNf5VSJRU1mprEKuGGjchJkwP8mixhKgSFyLaToYCQULpy5wXV293h71HTMvsCJ5jAy2WMAR",
  "key5": "2hhph26vjxjR5sRwbnSKaViCRqnrpdzHmVetkwsqjK1tAFBDHc9Vvvh9ARZrRouMUZ8ZmikfkXXix1cPc4y2aE3i",
  "key6": "35JSsp97zn7uJbdMcNfAZGz6qViihysWQ7xcpSnMGoqZfCqf7f2nERcPZ9KJCbnM6zccTWUjXWhwm82sqB2MjMh9",
  "key7": "EZVyRXK8X9a5vVqoEEFHbB7weUoYHgufADBWiirokFMj2YR2hWMH3sE7BxMia5N9HRp3yCbGyF42khvHnchbdwG",
  "key8": "2SQv9Y2bWBJ7okFC5x5YWwPaCVwGcaKCNrW9yNCZkDNrMmbvTwq3Z2WrpVpb9Gh1M18FmZVFJRzZ3sjDrkJ27ZNH",
  "key9": "3sWhbLX34eENcFbBdb74cd3cX6E5NDSN2rRLj1fwhYoiLTGR8wJTMDJ5Rhnp5EGzCpdsodfjiw9teEuY9RmtBKLJ",
  "key10": "2t5Su7sfdt4hyaVjzhBuHAoPEUYU87Abjt5V3fATSVbkxABgcQndN22qAaTCd7Ab9ihMVfcVa6BntXawgsB7TvRo",
  "key11": "2DBgTBm9zofchr3ZaLu32qfS4bHLCja9wYbj3QCjYRApfzrXWDRAcYCEugMUvey28K7WUBVNWDPMamG2SFGUUcEu",
  "key12": "2NwRf9diXuvEnxXDSL1tgo5Rt9vWEBxSPQ4A2L8YnWBf5H22zjH2ktutn8ShkZ4Kycgepi2EvSkU8ggBMJumpfb9",
  "key13": "4WBX3DnrbRHf91L9VrQt2HVZS5coLMSZihJpFEfm1EXmKCe9rSbUETM49KbL78MUEGbnZM4SUhkzLJkz4sJPyavt",
  "key14": "ty3JfhE51suPYZ6ZUd7XpAmL6Y3cxuWEcVvR7JEsfFpQVeYyMerSNDXyiA4m6fS5xnC2w7bishQNpzqaYjHWaor",
  "key15": "3JLQJGxy2auawrp8UhTT5KB8bWu27rikXELuZT5HWWHLiCnwTaLpunVKnkxkv5J82TTWSvUoYNxtsucTdTvWga1q",
  "key16": "4LnxovYzshSvMuSTWkbC4TJdCrXU5s2q86QDioewrYtDTV4ZVFwPve2vkvQJC5h4u3kp164EbDTdAqgUKzShQexP",
  "key17": "4R95HpA8jjXGFztVqTfejdctXyUffujYLwncYM65ioGMCs3CZWr2W1HxEYGZ5e7gLDZf922MaocFATDi68NrBPXj",
  "key18": "3K3RYKCRqzUY7Cr7Ln3CXjk9iuXNqh1BhYD2heA9oAShyAupLhwwd3TDNR6XVR5n6kXM2GYB4Zscc3XRyb2Nn5tH",
  "key19": "JZCwy2VJ17B7GM1EpntLSP89WNYxNpEH3Tm8chJ5iLhCmnyYfcZoRCXVWidSyJEdsfnsNiZcr1AB139QtwUWWNc",
  "key20": "2D2taunGRqJjYFBWirw5b9gUhxohtB4d2HCKBWKuR4Lw4fkmZC297FQ3WfAwc5UHMLJ6dUPr1wQsn8HZKuQqLZ2Y",
  "key21": "3SJ9ftBQmqXMEY5n9LLgR4PwPpCtc32a17ymaDWuKaHVqYuVfW613r2yV843vfGUckVuKA2m52WxdR7Hj4wJsw4x",
  "key22": "5kVgBWpWKg3SHSPfJgaM3spLKEEum4vEdu43RAQg41U3gBEouSRCTXdBqcZiXSyw67sa5k8qUxn8cuP5QTKy4JXA",
  "key23": "5Ne2GpaTaHMrnbChieCGHcmpWZ5HqSPE8P9iksnC3vqXksjdPYRL4byjKMBAyqCANhg3QNbzL5xUimEMhvXn6heL",
  "key24": "2UJQP1Qv8sdZqy8Cnc8KCg2xueANH9uwcGALfpwHpLZPiTA8yzaohs42pbnjoaRGshEc6z7veR6LfFvg9PuCDCH1",
  "key25": "3h6c186tRR6h5pzJsgPcuPprBQAzZ4cipPpRF1tBecywojKv31QnfQ18PZXPcx2zn1F2Pwui8AF8WXZ7ttZ97CBu",
  "key26": "4PzuYGQGiejJU8jMxfnLZYVVTRe2iqLymbMcYMN8pqf6XMej8Uhkt6hSjRVNeQrsgEnmxzpaypFBzgQ98JKNemLH",
  "key27": "PPj78S2Dd9uzpxboqhQq8KCcZxzSXcinephCHKjXPh7VeD2UYm6aa1Q9ki1X3jvDtfSzNpdRUJHy2HU8HpbUKJX",
  "key28": "3vedZevbXxubkYWkykg1npR4QwF8ugn8aetYe3XApapPYXtd4k9KL7P13Xq6BYyVZ8iFfwf2kAabuYXovpKaVvgV",
  "key29": "3YcRZZqUoME9t3q4ie5Z8hbGCryYMrLCcUe8ny6iY6xRuVNnhvusmNQRL7CdEV4j34dGthKG7H9xg2KiPPtF4PKy",
  "key30": "3hzvZ4NrAYBTbFDupRriF8YSuq7hmNWoDn3X7gamGnM72JQcwJuxapdhNBtHiJNWfPdXbBo61K25wx3CdCntRvTe",
  "key31": "2z2NSzuhqrDn9vyXhWyPWM1FHP1YQ2yvfaFpGneks4LQUGJHAyDpqREnNPZH1T9Y6JjZQmkRwHirQNXCLtJLXony",
  "key32": "ogFba2FtfYptbRoqT736YQBhDD7bwYXNxdM1PA3XkCTYGqjuGAKdkktjjK1ph85Z2DFdtLmfvVT16aSUaLFXSh1",
  "key33": "3iGs4uM2ZiA2SR32s9UWznW3WSW5JxYAd4EgoPpip4tdbpFBjYZ7YUmMKdHku2zKQQXw2MjaF2FnMr5WuXJtXMLz",
  "key34": "4QX4cA2i7Bo7n7fTDiYJe3o4ZN3foNymnwkKpiNLPPJu5ZRsjKE9pXNPRhJGqoXomY4JA5htk9zCXtTnhoov5MCq",
  "key35": "3npvzmSkhKzgeJseGJHy9on95mKPnT4DJaEWuGLuncaZYB9oZrfRwAhyeays12ZnUT8oZY6jonMQQUwbsj5Lgj6Q",
  "key36": "4reT6HyUUacV47Ut6s5vFnhcGsfRd1D7DWL2zC7xouHdp7n21HUXeU283WDDrnWV7JVzgC6eKYLrVY3BvE7yDfcx",
  "key37": "o3RvcDbvhbZHBWWwUqz9NKQf7R5iyCtLyBdz9CzNiC5eyNA7v2uWaJmxXpEBDSzYVsY4rtxAFUsvFfL3sCWXWuV",
  "key38": "4LooKD5qTi3CYYZFCfHdrno9ESvhWCL9AR54yYXdoLtgqJtXjQbpnxdjMMVM1PTRapzZ8pBPkPyuJMb4FnQrLi93",
  "key39": "3pXCyUkoVEMmTCTSdZUpEX1R4nu9dm9DAq2sBiLtBLBqo4NFqzyvohf7aLfbmfzbcBofK9PYb7m9wLRXp4xBGuH7",
  "key40": "66bzSxU317wugm6f5RURrn8s7gxY4qeZFModKgZQYd16JHy3u9NmdxBzxQyJPTVJ9UDkDPZe3dX6r82Hq3xmr4nL",
  "key41": "27xg242D1mUeCcZTejXL73GQNBL71zXvoLSq9Sbm7EErRi1m5JHw6pfZP4a1zjqD35spMig4G2kEX7P7AAB2c3bZ",
  "key42": "3cEN18tc6P8E1CfFai7JL6FfPgkRxc79afKoDDA4ZLwz7UnSTaEuwpRw9NMBqVSpsLAJW5tc2WFJDu5Bpr7PUywC",
  "key43": "4XCX1SHtk9R1DVEuMVXAUV18Dp9nPbMJcgAsTnWbxJj5vD7PZrFJQ367PuTAiGfxV2anBESRLeKK4d4Yx9qHjmMX",
  "key44": "4Mco8FZio8E3gktQ7hTLFF43qjDDusZacCTZRx1XnkWUvnQf7Qi1P154BxXWNDeCzPNZJkCCsnkq5byBCXvhpi56",
  "key45": "2kYXcQHPHuEqd7c8iUme3g2D6tzvqNTEkY8QpCEKaMdusbp1c67ruCFnhAdvjvoQvC2Mag8CGjBSbURAwZxoekvv"
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
