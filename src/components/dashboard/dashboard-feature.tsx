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
    "ghrskXQDdMeBa9seZLCM8SiXcSF7jDoqztPy7hKdkzFP1M4HEM9yaJWyCHWPhBkFsfCYGFvsz2Ai2MyjbmMjXpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRDucfDdqDebwuwoxukzvdBMZzAKcAZE26AufvgZbs57mGSWAVsz9oKJvEEpWomWqZ1b2VW26PtQ5sBZFYzzo1p",
  "key1": "56bGSjKKgieNgRL3DbUHoGAdnBvaHKRSY7NTTsxYUR5dxhnxt9Z1cEff42rKYvbirEVNWEfSWtGmNmuUbwkuvBej",
  "key2": "FBj4vcyrkjNo5cHL93b59j2qFsdZHs383PEALCBPNwvcHg1JwBGuxFLg1sTJjGKEFLL3rj4eqCVEcK7RW3NuNYu",
  "key3": "3X3MKmZJoZFE1464FtXjydQ1N5EWzLfz42rSKpnjFR4xai8BFks2Gy4h7TPov8LkgU5MgECwWdCDeU5kxNNYY2Jj",
  "key4": "iQQUeJTDwn9R6g4L8V8w6eMUVc9D6RkkYqbyBHpXSAHoGE5kBRHrGSvb3TQtXgj9tgbqgJQdjvtBABwmwgWZWmr",
  "key5": "4RtDhwVvdsRJGpB8964mXXu84tZJVsHaQCccK3ksJw3AgwqMK7XFBZnsUKVgBmu3LebMLhcWmz1xPseVAwsaFosN",
  "key6": "2jY37hXm2DGbfV4hvpXk16wrkCcJ5mHcTrMzv4ExpyapAg5TF32x5JVhhLRLANUZf9XugNTcoAfpFUwWrDsNHGWo",
  "key7": "h21CxAYW6cTLTHPqfSiL3Lg5S7C9xXnVvpoTvurrBNUvWA1XTB8tBZHdBLR3nF1mZRjakrWjYnEviuhWqckRzww",
  "key8": "5UinXXgmgLBDuJ8SNzahQwev5tBqKB8mxkib4wCzXZvx1jXag18G58Kq9kK1Lre2yeW2nzGobd49WpkGu4gE4mV8",
  "key9": "46ihQcdQxsqSh9EZDiA4TviqqvhwBejhW2HSc7DeXQzu94vo92xWNEv9kERdSYE5JUx2jknVoDh1VxxypAaLSsCD",
  "key10": "2sVC1UyoF6p63QKMW17QWC9qKUWsoghQ1ibWBp9KFYZUaWx2Vuiwu39oC2ZwjvXZ2RE99udAbdsfW6Pa7CUKEgVt",
  "key11": "48LHeFC5N5Xh9SJ9F8Q33dxUrAF2rrcKnLeSGm81N8neey3THZsRfSJaHju8JY7RJ8a1r8bSbe2BZVRDRssXmA9v",
  "key12": "2NnRwPWJshsbgKt5ou2zvF69nz1GYKy8pjqPnfnV31D1awrAaKJ6575TnqeiYDcFqLTDdr3a4DZF8HDNeCgGyhN8",
  "key13": "4zegADhhNyCtPpvQXasSSBY1GrVYW97GfZa8xXpepXg5DokdNzuz1VbqpvjWKovgff2rLXRgLEMBqeaem7YS4KYr",
  "key14": "RYPE1NoRhRU5ikqwuLobzvG3TaAYsb2MFsCRiZwSYsyTYcHGdqSLWkueUBKsLZpVmrAXbzBXDnf9RiL6SbTAYEZ",
  "key15": "2Gw7fySziPMcaj3mHHPojj8FaKQyumtverqgnU8MKacQU9zZYHBgFxEf1ubah5jX8MRczsN5Ujt7tEnW9MMJHWDq",
  "key16": "35x7J81pKLpX5fSsc69n7xUsWGXYPnGFfqmej5Q1e3xqe1gqJGW7hUGwftazZJqxfLiTn29sKbvMnfrSTmMd5P21",
  "key17": "nvYdfHtzYid4oPHVrEi36E7XvqUVPzsHN6tRov2qiPrxnZe7VnTiYRC85RuyzzkWpguJGbvgX687UFe8BfEhjXB",
  "key18": "msioHhkeRVt2rZTFWedDLiJZe1YbVcXPQLAWYwA5bSzPo1Quex7KhThJyzAXwiDidQUuiwJxkGrZVAzBtYPC2F5",
  "key19": "3r3RoiFLfciFo7K5hTjJqi3AzvnRJjGUK7X4KSHabyctJuwi7EtXH7u8dpvtP62HXqKDoX7NJRmt4s1AZcqx2CDW",
  "key20": "qyhDszBxevFCiF7KqGnzREqjDDYYMtdYAUVzkKg7DfTgwo5rSiQNAoG8bMKXwrxcaQ34fiaXhaw2bhmeA8pBf3x",
  "key21": "4oSJTrABzPxUHXqCH9UnKgY5UFQLUNfvKH4UtqzbFGzUNechfqmyWXaa1vaGi5tuC1oxX2wzEeYYsA2wsGowZiSL",
  "key22": "4pAmzQvKX7p4EyryY4FyxgZqBopvqnJBrwfDi7ZnpuYLDDWbPMkMpjvnH6639FuJTScyDeGFJxk3pLJxbag1cpan",
  "key23": "52mRBwES2VQJpGiQrq33LjcNDqBaGKpCgCcMBpvy1CRY4E2BGsvByXy2ZKaYjKCMHqkuiNSPixmZzvMELhCBjfLq",
  "key24": "3oqbFK478m5tA2p6V3gRopB96TChxJxTTR4QuJiJmGPeNaiMEbjk2hgMSxdjfot2dH6TLVGPHeZNaB1hmKmV5tCg",
  "key25": "3NCq2hxLUD7Jy4wmmAf8zg4HbohpXwGQfGt2wPBFBKbYf599wJ2oQbDXP6xckJMiWSm6Nz43xzC4KdQ3nAGWft8Q",
  "key26": "2nhuXbqatGP3R9uWREJsPqGpFGJ2RTK6zkQ4XGcExkWgvChswi6dLQgQ5GCntkUo5uUCUh5VFdX2LFLTMBkGYdYN",
  "key27": "pQckHdP1AKKxGK8FDrDzS5S5CmJ7HWZedT3mw4rYmfKkRFbiMap2ywncHqEZKwj2XzAhsVQpVS4UtewXZDTXAtp",
  "key28": "3m5digrqKHsxxkLaE6yRQb3Rv9ogzNTvMJJnki25AEBW55LAbTh15dgN6M4xohR9XRwpMJf4DW7MQqCUqpwuLgGZ",
  "key29": "2agsyWtM2fpxM8DYVgdVnwkUTekTP9qmr54EYRWB6PkKkyVN8FjHPUD9FRY1fJ5Nm7DYYsBPj1btQJMGsupwAZ9n",
  "key30": "4vspFb6HSHQ3NvuJGcJKgjDwj4M4abGYmXApooadK1tJSTmNY4oXaqegNbfCaXS5QH8ihDehe5MkShCWW82X74WL",
  "key31": "4bxNqyCQcWqiLmjb2NKC6BJy7BvPufKrqRKsuJch4oh1fNAHuZu9JTjJA4QmCfiQwxorae4Z8nzrLqvDQ4116pBb",
  "key32": "c6MJ5AgAiVYkvF6U51qcDfxuDH4K9TSxNGxWpDrCXguFjqK49dMy7TRF4JLjPsBJHxphnioupuW3nmjmeVuc2Vw",
  "key33": "3kzFsioFJ4BZCnHyvH2sis7aCJHf5NeM85sJrJmySpxLBYojCTMMvqh5WRARk48keXa9DXrXovKn5GrRfbxtZVDw",
  "key34": "4bmej8zXkdG1shU44v5EQhaxzPgCZ1tLHJCzRabi3hi8v1CEPsSpiFo7j7tjGn8iPzBEm3Sm6FtW5sFwsrQM3SP6",
  "key35": "HHe8rGDMGfo9DKi8hdR2utNFajLUzYfaterFbQJkSdJKvDfU68kv9kmfD1AUnbsg78W5xciPcyYVN9kGPXTfnMF",
  "key36": "5LTnQSYp1B7kzx56h5DJUqvacwG8GyPTbx55LDjokb6jawA2z87cyaECvcvz8PmNFmtCNUWyR2HvfpVimqycy5B1",
  "key37": "5y47a1ofWtrrq2v5WvGEX8rSZNWGwwVGQ74Y3RYioGzmCAK8zPPQq3A3EqWwGVaBAtAtuZcYLUifyt6Th88AQuyF",
  "key38": "5K9a9TWFQKcuRsDXi3uMH4YAbuwUqfN4zPfJuWEnc8JYJqZnSjw9ERdMMq61j3mUmew8wQ1Kr3UK3RGcnswJ6Xqb",
  "key39": "5cPc4yaV9Rrp3pgxG81ANPrnowLqFzGzCbaji2BkYnX553jdd93vf5LFfbFsJw53u2WJ8fC29uFUc1gh4F6r6kmw",
  "key40": "4BvjneAM8Ra2AQbAT2T1gSbNxmLW82pFrwB8pA1W9mMZ7syPSAXEiVBo1jBxEBsXxS1x15qy6mMab7WzgFJcBTAX",
  "key41": "3YmRWZuyTdBxFmY8AS9VeipXGxvbRwi3LMvWrxwC4GjtTuUk64Zmm3QNZBFK91xzR1kfXb9vV9uxi6xS8n2ubDth",
  "key42": "51mEWraUQ76zLXhAnECYha4WYJZ1TBnSY8zTatNCH1fhQgPme4BgYo4cc4KwnVw2KGEsLSgPAi1XAH9yex7s5Qu6",
  "key43": "3YDFrjK5Q6XZ6rhx7C5n33JvNLhoJyh6jo1TfxMaXarEm1H7hsbcmt4xKe9wzsStZ5rLNoViSNBXa2TgFUCtPj66",
  "key44": "34qVmACRLnG3mnfZ4Kpxd6c8UfKDwMd1S3kUJ5swgavXY8EXow2gzQ8X7et1nK2TLqrB6b9fvbFCET3sEQLkCrBC",
  "key45": "4HcQVhEQUee4mB2CTqEHQR8tBhc4mMc6wBkLcyVtmpPbLqdSw2TfVdRMCE6tb7RPxyoL4bwBMxWAQGZiwcJvVFw1",
  "key46": "8yN2gLLvTzXVWFbdnEGMfTkNCxk5qCHsPyEExrPWu5itmfej5QESNyNsBzpKWxNyito3BN8gccVkFwPthjngBhM",
  "key47": "4m1JGcgi2NwWHMDfPDEDHj8cRWgngt651kXGjhohFQFoEvJ3AGMuDzFH82AJDUw63oGY4y92gMPRtx9nNG8FvVjm"
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
