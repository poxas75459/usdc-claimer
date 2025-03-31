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
    "4wymJYoANfwYXsRwQtDYYWCGYVpPANYzGPi3hDS7avcNou5thjnFKER6JRZqQjA34THGsPWTK3ra38nd8kFuPZ7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z13vVbDpSWLbdNequNY4RfpvdX4LTqy91Q6XsZGioNAQEmFvsNAVo45HM6hcv6R83vJvxVzqpfEevskzhtdZZr8",
  "key1": "WWbfN9sG2HHgagZ88tfywDaX5EorUb9y4mHkuTCM4hKfrb7y2YM52PiqYbQHH3zq2j4bK7bTF3B4Z6njZ5jEbam",
  "key2": "2LzCW9Nx9z3qDAQb8QS9SMGM4cvsBZbjDCnKgbQX51SvL2AbeDvSvdEXWYbW7hj2xftBqC78J8fM9jsFVzQfHjmN",
  "key3": "4PBjhBhVThDvcF1xdGYtxZYb9cmtnT8xYU3gcuLs1o49ZmH3PbdL32iFUCX3KtRaSQMtSA6UhdKywAGuLJcxcAyH",
  "key4": "2sfLwsgrmmCzdYDhXHJtRwHSefbxH2e76UnfkvR1Sk7Bee93uSLAywVCvMd3AaYrg2Zh5ZfP4roHC9sCCk6zopUF",
  "key5": "559C17pjnAEfZvWW79ADHDtDDqEHn8FUdforFrqHNtgSfCh87dzr18PQbZ4jZNRnG2ZWXpoKjiVWNpmqQLjAd7VZ",
  "key6": "2d9SLqHwNiecCR7UhC1PLC2XnnbEAyx5mEx7kWuDLkufeyvgZehmvS66XpiUk7vVP5XfGV7TQig69nuqxngJjzkX",
  "key7": "5gKqYJ9hPYrV28QYWe51Gw18Ro5eQQzhB4iCimmBDbjhGxPwSdw1zuk4RkLbqdvD9XXPTvAXJVxQwEuDN2zFThdT",
  "key8": "5Rw6jRgpFQFBQKfGE74vMmQCe2fH5D2VzneQtXoosqKR4DzckD6T42n5yWgxMHz7fu5egSWNAfh5rnGML5s48pmg",
  "key9": "65kr8iLRwqf9rJf3JpePsFCYrotAiCMrhBqQVVgkEnsfZD6GGvzQn9SWKgJ7gc4Mtcdrgf1PmBjxWjHrD4CNH3Wq",
  "key10": "3xHa3UuWk4abGh1qnxyFThkStUHjSwq2iVGLVeTKZHSLmkMRUFk64bnUc2rvev8ctjahCz1mkPDEpUbUtMRH5syC",
  "key11": "3SVVDH7kHYQVdpddVbdzwxdARso81GUtEkN9Ke3gDUj5sa2jbP9Q8D1A4euNMsKdJzm1NLHuqM1GPYUDBQ7Ww6wi",
  "key12": "4HGeJ3WayNLbtsm87ddKLqhbojaff2NYhvR47N49pyFovbHT4jtCzzcYF9cJThVLPU2nA4CET1a3f7FuvUG7Rc25",
  "key13": "23JRL1BqWpbLLsacFrNUCXswpTBLwvPdb7zTAXFXf99GabZhJJgeMbFMixp6Fsi8xgQGAk1ijwCQwTGckd36NSQ9",
  "key14": "3g52MN9qwm5t8AyaQfGY4rAFAEyAtpMW5wdFnNJu65c54NUSmzpiMSvPWxZu58uEsJSsak3o3XKGXtBLmSXqM2fB",
  "key15": "5qDuUBUtdWq9rdbZ2aRJZ3iWGhhDLvst9iBKtfV9EPY59Vh9xyf1XLBaxgWMtLMdGAU8uKd7qLvRGsigf391zFja",
  "key16": "5kYhyRppmwCtZ6BoLN4Jirahrw6uTmNE8w4Kv9xHyfQhqNmBdXEcgWMAUySerdPdUgLhAui7hQmRtPqnrNH3jhtL",
  "key17": "fF9Fdoj3bUBRHQmo1sccAxaoQszQ54JJJGG3xJzD7ukxnvg7Vw6Ldc7m7mBSjQ3qnk7ha4AEjfwDwyavZJFVmud",
  "key18": "2UUs9gdAWPafBDkBVEsBRs611jydDVU241AtJPxhi7YoKEt22Pfe3eaPEsXAb76TtqibTMbUfyn2bWUSjaiuxZyX",
  "key19": "tWBd8eMW6ZwwVcwaGPdBfEpAE9uQ8XGEtdZZPAAku2rEkjGyZQXHMpGGwUq6D9TVRrQ76M48N56afmYrirLQKbx",
  "key20": "31mxhPsMs4RasM54PjnPC1N6AH3VCGzG9wS4JPUYk77XYXzj4Wn8jFomSsi7286Kgwr2EUSZMLeCC7F3YnRXUAiR",
  "key21": "5UvpvWCb1a6KVkWeDDTTFaAWbYVF4v3jVjuiJTUq5EHFj9ZGqviWCnyytM4upsxPA7fjM26QGhf9b4kMawcDTCjm",
  "key22": "5Jn4TxJQCq5rgv74v3i1Uxnb3hxjXDKvmsGvo9xAeqvKgoEAEVMLjg6ha6z3mQUSgxvPoDRqFvXmGTzj86Z8Nsjd",
  "key23": "wkGCX5xwyKm7Xz9Ro7LHsDcKXe9GKjZkBz9wDRSP5cjfraeW8v2TzVrsQzJHvMFydftcuagXy2sMvDmymt3FfEX",
  "key24": "t5aUDFfgoaAa6Eep4hwKh1sCanZwhrvz8Vn6xRmDcAi83qi3D96Jo9nyA139AYaTJ3iaigEfptHV9owbr79up5L",
  "key25": "fA5WJ57qKYF4uV6vaTaEiJERUfiRfLpnsDnZ7VqaubyhKKyPewcoq6nLpwBLJE8RdsRgBLCA63GdTQtwoZPWDQ3",
  "key26": "3CNXtwAvpa3jTQQzkaPAz6kAhZf7vpfR6EJavJFyPQ81q6TMEg7D6eSedy8d88cBwnwsZuXN99tm9EypyhL6uim5",
  "key27": "4Rz9nnSDyKbWci3L424AAWGqqhqbBMy2dY3gAx4y7hEEYh8Shz6wqJfWbFmFYfLANNhwFbqw6Vxv8gAqmua9ir5v",
  "key28": "3WkTf2pgyXr88k9k1FuKQ7f3wTAbPhvvQFxA8PNN7XrNVaFedEGXnuwsLw8apjL3WiSVU37ef5rwc7kycM7GC3ES",
  "key29": "33Jaz1ACZVnt81XcwYBbWTKjXzofd5LQnCCsgz8HMw3fK37KqHg4VPhSBde9WzpRyomkezQnaJhivfrMRKoH2sDH",
  "key30": "4ePHtYdZZLZNgcWQDfVBpuxMmUpdJorah3V7PoSCGGetcrcmYHhxP185wbcYaJspx7isJP5iEuZXFGQAJCdQZMKP",
  "key31": "jCPCHqv3ZKsYhDwXNE9He7NUp9hnVj2UsUNN7nGa651fstUsvDUGZMjYzJ9qHTgnZ2MaBcq2LwKQeWuqPkWpzkP",
  "key32": "Hb8L5CY3R7tjhnWjmKbrAsAQo3mmE9TYnK2WAETZ6kA5jqedAFVBN71UhErScJgChn8x4drMMc9CmW7WaBxuYFB",
  "key33": "5gwVVBPGMxiw28W9JNJa9TvqVBKsw3KPcJ976vqpsB2dCaKj4Rd1hvhM3MqpmfSAbgmzNdwnb3TMHUxT9ifTHRNg",
  "key34": "3g2SCSVEH6kMdZvF4YpS3RNuvsG3gtKSVpBGucHqoSbgZhMkmUEbEbv6Z8XRDSg7S7qE1RPKwA8tQGGccycw62x4",
  "key35": "5NXPcBGorpmV8GbkjnEjqjMoYSwyEZvpGK3vPEfhrA6PFqakYRuBZyHrvvrrRDWpoVkTSkkouRCDJaecPotgyJ9A"
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
