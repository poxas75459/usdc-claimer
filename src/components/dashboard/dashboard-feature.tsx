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
    "2BwGqcqxoJUr8zp6uWi4CKYBvVCdJkubPKjch1rvuYtmRYRjj5u2a2qCht6hck8p9XpQPCQc52yH4mfAXMtKYyLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qmf7LtdB947PrFwZSzasD5AfqhxgDBSauRv3CTynwsgajgsvN2oF8q2adb7cg24g9zZaaFCW9uvYYnPMkP1mZ6Q",
  "key1": "5AvynAYseNqSRQ5hZvFaxC8nZC18j2jtuuNjVPS4viB3HAmrXQTnJKtnUxFuvyf9Vw4jpPstZ5PESzPoi24tWeVe",
  "key2": "2vwG18kwk83EouhxNgZhjppzRKZ3gSBtz9oPy6kAzx8UGsaYAycA2m3pjnkJS1ssNA6WtXSnheW8rDGECthDT6x5",
  "key3": "wEXdJY6VGhMnTVZaKP54siEaPjFMX5BFoBpkYJ5CDpzXHwyuowFtgqdfC9zU7Bdfn1PGmVia8zSivUMgE73833k",
  "key4": "3hBGfVv2c6Er72x1CxsysMytAVH9hKoDvsVUVJka8BfsZDzq4XgpFk8bcopYaijyTQh4pTbRmQPu2nrJmXfEexJ8",
  "key5": "2JitHPEwpcZSz2Wv6pgwYixXzgNtHksJALs1NVmuNGpYpzeTqifRzyjBtrqrATFpEceR8KAL1PVqkLBU42ffNPR7",
  "key6": "Mzkbg4FnvDiSoU7EGyu2P2wzuBAD2QFfVQyfmNGdC9HhbthLyCPBq544Y3jLtuzuaVc8XahYTM3aeVDP8bJT57e",
  "key7": "7Vde5oKuVWy8tV98QS18TdHsLQTs6tbCzzvg8hfMLyWShQnqv9bG4izTokzWXh86jnrDkoQJP44vdmh4wR7uv28",
  "key8": "5r2nnWQEGcoxoPb2TLfxJSrNyundAf5sbRnUJ2njtiBXLFJNxWxec5DXJZX1eWEzMMm5uiVQws6Q5ByGF3Putq2M",
  "key9": "3tmDrzw3wv9auHecn4xQC7YVXa5eLmuYD2ocpYYP33Zi81Wg6hxboofrApthmCmBn2QCrPjGCZmC9Ggdsb5umh9m",
  "key10": "tvU6XUmEQfzy5ZR6wQgT5uqprwY5WpL3JZd7JMmbKkW1pdACiFmR7vyw6Y7WFFoaENku9Y1AbowzgBmPa5c7iAi",
  "key11": "5kSHPsV4ahfJk72qy4o7VPDXZscZTg8dmNHYcbK4wbwFkXCVnbBcfPFqMqL6tAhDsKciJWuo6cqH3nSpscjAoD4m",
  "key12": "3Sm14wRogdQDp5rTeTyTt8sUQ9VQ4PEpMEdwSSuCDEMMweSzSi2MKKG739gQpTAgaSWSNnBVqaXcsBCNxxHGLKuW",
  "key13": "4N6te5WGqFsV7Dn5MWJ2AfcV3j3zgutmgRseUyEjBirvigLQNUTEVzjyKuPeNHJWxoeCDzxWNsuNTcbU2tVfmRQm",
  "key14": "363Fc4thA2eHVYPJEGYfSTNkYcV1AuzJ1Rm55QA5hJUUvbQF1WUYAoYFAGB3M3wWgBoEYMx1PrSQ7xYPjNK5K1Y4",
  "key15": "34wCDyoV5YhRDA8P1GGSh3EewPK2a3FzjPcN1RYF188j1qs8G5SGY1hNzz1KFZG51TebVyTSNLjw6Kn3Cg5xtsKs",
  "key16": "2qsx4KfqvCinDjyzL65qxdaTcYnrpuPQWzDbj2E8nMx97SSqB8fYZ9dQfR77ZTchK9WBAcjkSyEXcFgLMUCNtNB1",
  "key17": "17R3eUDj3XM4Xii6cU4kWqrUYccQC1kX26MPmGh5kE5z5WV2emeTEeLaRnCAnnF7g1oixD1Wxhm6fPNnE7fwwhZ",
  "key18": "5YjuoKnn8resPTbT8BZNXJXT8W7GnXgUwE5PeA3vcYj1gFSBtETSsrrMEg62yuz8vMATpqebKpT9gGBBhVtVvnVU",
  "key19": "2eP7tt4Uvj37HL4uBessA6XrBNXo3Emzz5orn8b8JnW3tGmuANG2vnfHRwiKiHvoi35x4FqV13FfL4fwFkb1T1gG",
  "key20": "3GPsJpRMpB9a9pRacjKtcC6bVQ2GfMyeoVZR8dL35sLtVvoopWSxaYr26UggLFLYVcy3tQYFztLdLeYAiyXhahFB",
  "key21": "2mSk1Zoz7YiEbP3RR3wt2HvnDt6U74aiR2iBadFPkx2MujZfxruRrZdohcLypPEDxhuXwckynUhWWCFJC1Ak2wfm",
  "key22": "2phg2qYFPtvjbKTPV8y9kL5gvnNWy6PfWXz6ZA2e5NKBKuQjrYYsFvKkWwf4NwKhBpMYU3kDZR3CiYtsQTNseDxQ",
  "key23": "3RjfnjyiNZRTqPoGa6fwDVCgKcoSYif9bjsLvprfh5mf7WbUioiij3iSw8z9bSC83QmaJvNFP4Lu5d2UP5xckQwa",
  "key24": "38onKhQ5ag5fvfQ8ZbWuCdMLYmzvqmKdijv1HQ7EknmGhV5A2A8KeT4isd31R886jupLNSHao7P25xh52CZAo3LR",
  "key25": "3sYczaVnXGZxW7McgsaEFoewpyZpDEYaHNTeYYxx7nkMoBCy8X2fbMFcdqMu6485f6pirBYmnLf4W1ywmepTcinF",
  "key26": "ewjvWQojEKeWKZ1V49is9ieGeF1uhX7UtjenoMjq4Ks4YVNTMVuSSdgJ5KGi4JFuQxwP5M9i48FBPvABjXPrabH",
  "key27": "5qdTCHv795oEi3xRA3iKwFX611rByQgkUuvYfgycGioUfFHhaL6waLwsPA7dWb74FDpzLDqitBe5RrFpBxfNo63T",
  "key28": "4v3EeA7nGcshLYZr6PTaLPAzjU9JGqUrco8ySaQy83zW6jCH9UEppUnx7JjRZJKcoss6Vt1WeQagfu9uLCXn2Nns",
  "key29": "631v3H9nLrp1Dm56sf7ETMXGXQCMmxViA9XetibHcfy1VUa8KijXb9ackLvCVnFjtWPTm6S61A8hS43qtVyFHiw5",
  "key30": "pTA7XaAhxz8QCsYKLWGSMq2uMTQKusw5dbmPwxUL8ZMXVGX7XBDdMFUaCi3MUBUnnDXFh6yJErRoAZzFBYtFABH",
  "key31": "DQdvAvFCo3qb6y5bAmWM1x9ZMLaAY3U9uVDSAdxUcQbFf8v2U4PQLCU2Vj4KbXyr2EATCKmMYJMJ3fnq6Rae7Fy",
  "key32": "3rTvczUEFGaPsXQwywaW3YPdVeWyLfsZwbibnaxMCi3y6V9ULn26k3mNQgJ8tSuWX32rUJus12X3VVezo9zJFtfz",
  "key33": "3mPZLzvgNLS7mBF61axE21P6Dh62R8GQSBhsBew27jh4hrQkpZC7wGLTZqyRoaqMkFt5qeSq1RHbZcGE2DFRtoej",
  "key34": "3UM7oqtYXtEjWEGBn9i4ZNSzSZhwcixTvg6uJUoiuEmT7zxpcDA2F5ARWDDqAHWWmjLQYxdcXBiQqmmtzosUWE8U",
  "key35": "9Y3g8VnjhYao76XUHYvWWc4CPHRVpnPM967nb7KQnJguD8CyPmnizN6Ptke9JyHYafdqozLHnwJCtFMMsvxNj4z",
  "key36": "2MdVkLF1mY7WwZdHgxu6pgA7M7Vp8mpoR5jQzxra3Kkkxn7teifHtZLTFK8CeNmNcFCT5U7w3o757KXjn7WpbvKd",
  "key37": "4z24AvfVMHKA2nKUQ2JkarUeTvMfBfanfZ8Gfe9uS6CsjLbqCD1NyqT18ZiL39rURjGhZJeUDCFaabRLaosV8Bf5",
  "key38": "4KRj1sCiEN5wyrMaVtzv8WvcjTuJtEvC6eadoeMWu8CtwqBFNwxiiMuZjKvTcG4jxHCQQPRnUXmt8UDqRbn5piFd",
  "key39": "5HFW9FUB3xgvoE8TVAgMKU9FA1L1qfarXA6XoiZgHaagewjHMbEcx1YHHPgRAVXaaTHFmqPvi7jycHGFWeQmGZyE",
  "key40": "3TqAXf925KrLphqDhRoFCToEHpRi5KZDeCuvWG98uhr5LKU4y7a9TG5tJa1YoUMzt6n9DEuA9X3hUdqRsMY5f2pc",
  "key41": "3MauqrnFfW6FrPvaxarJwvih1r3pYd3S3oQPKsibyGLkZUnMSMXg3caNqenZVuviXPv6JwN3fQZ9GYzmgevABFSi",
  "key42": "2TLrRdpX9g15H44qqNnwLcHCBUpsMWwJa891MdToAp44xZKzX2WK3jAvj8vXbmDT3uBC556QPiei4QRqxUn37x9n",
  "key43": "fH78599qgUzMG7uJk2igH8d43efzwL8MrMDgKnHpBxn6wWdratpMuosCsSpWJtf5BL13cEEdSD2t2WwV7etA4Yv",
  "key44": "3Mj55GeeDxuMENSBZZoiKm24jyrSAyzc5wCw6yTXgQM24z4cLZ8LaMDCS96mCPp6MRsWrANrFJ1cTBCZ3u2joGkB",
  "key45": "4G5sMsJowZbzcuTJiH1jhkwo4hsnV4aArxfvRrBrKFXunEVKrQcUpiKph84VSR8sAiADWWkdWQ3wW9hkeywiu3ro",
  "key46": "2HPV2Cm8kE45iKYAo5npcQSf3LjJfH5zXyNQf5Eyy9cZQ3GQjK5X3Mgim5hHxwaCK4s69otCE7DyaF8m6JYDx5ih",
  "key47": "3z5YaF48kGKoryuifXL898ALDR8y2HUwQupfrYhEiD3eUtCcuTaxU5idmV1xPsnV4vouthXhUMbxPtbW5EPuGY5b"
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
