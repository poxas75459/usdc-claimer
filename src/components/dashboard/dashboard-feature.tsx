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
    "5yLQaRGjnQ5CFniA8okkN6ofZBGTG1PgZnr6aKYexJY9rkEbhL8bxgy3cxNNhqu7fYgg3nADuSNVZ3GdUGQpZH7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UweGv6aUpuAgQYnJqV37tbiXkPzvDwd7Q9VpD3eVoAfefFKBhpzFwKqyPLxVDYTAJioggnuQTRWPkUoa1KJJa5s",
  "key1": "3KQ3inwqpBQMRjbmnR8gPAoqUXfgDhZr6X3Jc8kA64UFE2ov5Ngs6wF2THdVa2ZqpP25p3edUCx9ozSraKdCGhR8",
  "key2": "Zdjif5kzyMkxRZ2JFw94NPd89cT6JftjXsQkqfvfTWZpHz7HH8PYetjRk11WuCPmRkswkYS1dghvP7ZzAVHvETp",
  "key3": "q2FWnV3puBp2gYu49uPrP2LLmGDxqbfWreVstSyPYTemea5CMFY4BCfNhSrv5naHuECppK5hpKFLU55VoqRdcLi",
  "key4": "5iZ5yobPdZf47AGbpHESsEsqJNvqB7XTpz7hDRKzP5izNpGJfZo85WAvMr4h2yt2DAozBh9d19KK918BPPq5t8Rx",
  "key5": "28PmeGx8YJZh4a2FSxR8XoSNvpV16nUZRCFV2xaM3nVgmJ172KWKddHhky6LmRNopEtFrfTv3rhX4DqwL29ngvuL",
  "key6": "4HYDVQ7AMQ2RvErmBWjByaiup1pNbkegYw92uZRECHN4dUWUamRFRevudNc3fivPGp827VR9r8G4pfazKN4WyiKY",
  "key7": "3k329vx3JNat1gKNeHrE8cvYqKbyRpZB2poiz4ecrEhTtco42ktxWiAeHYPaQj9EpikgH86j4uZsTwTph6SjVTin",
  "key8": "3AeSQ1q9SPj2Q6hUug6Vk9L1E1BBRSo1a1BK2PRwUaJYqiZ2cArmewzJfVfVCAX57fua73BGKoUDi5Wao4KetRdt",
  "key9": "4mP9GUNTdiLc8CmarGDNs6ySPX2diVhYTkn8wVbssuQ9AzK3GTacbg6aW9SWq3NFMMocNV1RNFZYyQboHwJCh6nT",
  "key10": "2Ron4MMgYQZ9RWm7PD4V6eMUQj2pr8x2aWp83QSDveWgjwZE43QK2iJbMiGBktUB5ocCXipgsmbtpRRDbnFZdYQs",
  "key11": "4qmK6Ecc6G4iV5Rnzi11ndbRxLUjVfahV9FcUKNmLgjJk3uDktfCtn2hdD6eLbkn7ACkxy4yyvFmDAaYqLVM6bBk",
  "key12": "3tzmBKxAgLVkXrnaU3p63EKfmKqgDonk9FPTuYjd1VW32AamxbgcE2wd2eh7mWTM6Tbi6pbiRwuHgxddaEMW6aii",
  "key13": "7Bwe8UA1jMGginPZDFWCQExZhciJF6UUYRzTmLFaKZM25wDTjgjEFjXeoT6QTk6gbwCnfiHQLU8wzQMiJfbGCC3",
  "key14": "2e24C8B8HxjJkr1itQFFBqz4gtuR68pCouL79HLBFZCZJfpZNM5E3C4G5Q3igSc6PNXyTAwa9wXRyWAzhZtbNtZe",
  "key15": "5zNpW5JTCxWSf8y92WhdF5ttxfTcQAcAYRcW5Mc6oZVAF3JiEKzF9rqSmKRxMjnZEresS6siY41hx99qRa5PBcv8",
  "key16": "37S1QXWSNzMvQBQMQPCnXw2pwSVuA4MF8EKuGwvot2sgzABWFg5Bpc5PGjoRqGk34bpkiNiK2W5yBRofx5DjDYam",
  "key17": "26B2gMYfXjR11DK1SJ4Xfzy7SFt1paWLx8aEwVvytB95N2ravQyEarHMBQPwZkr15PL6gtCQwpbxRWasTK8sxLGB",
  "key18": "2uhgwrYnwivtPK8KCVTooXLKLp3XAZrV8q3H3kBeDcUsvG1PorPqszs2Gj5hFLT8Z5ZCbuiLDskAEYBYDWcpAGoJ",
  "key19": "3wD5McQU4aMWM1BUuwyJXeR6fYET1mpyMhRsT2Y5Eb9ynhNV4XwdRBmj3QsDFk9mZpx6QdRYwQgwahGdXwt7q16i",
  "key20": "2gmi3t6G9kABCnAX9921TTDqH5tKkWJcYN4wgdDpkwE69tgYnzaewqewrMP54jRXLmgvgMQVusvJE53njcysgz7K",
  "key21": "2ekjsWyjXzkXHAg87rX1GH6UBjgyV9zKcbnjAetsEF5BQg3TAWRN2VKtUibqMTdQEFnjBJSbJ13nR5kiznSs395",
  "key22": "5gE1uk44ZPvYTx5VU8QaCcSagKfeptAVKwqrtvMmAjRZysWgZ9FxUgZ16zbsaXXKYoTfJQKrUjKGTVPHXTd49cMa",
  "key23": "3gm1S4chc4VaJ6D7TwKDYnYWM6krwMaw1dFxZgiWBifz92tarVo7E6MMv6uKnC6PQb4VU7rnYweEVSovkZQznirk",
  "key24": "4oJ1PArpapNZ3ppBhdAa4ydSemU8kstBet4y9sUtJYpqaQKg64SUuhLJdciHRHuvPv1NXuAp188mfGX3Zq4gsPGw",
  "key25": "4isS2tQEZ7YQmAqGatWCMZLM9sSQaNmWp9NnJXNShoJYiyAC4PQhy5TBy9UjzsmCfyvLPeGfEWDZxYisGhcJPZxM",
  "key26": "3SKyLaVKaKN1gGZm8vsUBcoisGXg7R3Yp7h1qFdC3LfdrFptoUrHh33bbDU2K59aUtVLeLrNUadKQxvDgDcbGqLA",
  "key27": "5bs4EiGTnhhCLV3AfTGYG4y2cuHsLcHh3DTsxmDiZPVseCXG7fmHgd5sGjTDaLKrHCesgST9bfH58gUumb7AZeAR",
  "key28": "5U55tbfFa5E9a9JbfcFRfrHNdan3y5JqPTfX85JQGxdq9DP3yh6zDRpSErucMQtLftk9KQCF5Wn8pFYq4guSYEhM",
  "key29": "32oG9rKSnBfRmKJJNk77JvjVbJEHdrH7zQk2ut32e5FMysPkLsnXi2NcjddAWALurLrtCs82hk64uuMomA3fKnoa",
  "key30": "4qxjWAk2KeeJ3nGhCQdsMVkCPPtFmsLSqzHKw8HM3b2D8xPjrBhpQjBvjXeu2hecYBD8jxsGBRcm8uqeGCXgWXjN",
  "key31": "4SJ5vCNJG1yAEgZbCWGPB4S188mKdEz1vBFpABZh8cJiCykKSwgahVxgeCUrambnAqmUSL9nY8JPEJKBSNe1FUYP",
  "key32": "5qPegjSnTYzKn8XQkMvrjKzK8y3GpS7ucd7haWgRd1LaCxbr73VgGAGf3oNKiGBMQouTBAZLWs5KaXGHWt7ih8K",
  "key33": "5pCcXzHp7fP7fqSvp3CoNiDHTNFqbyDNKuqaMTjK4Wt9CQgUxMU6cXYgJe4TDtkhGuNTkXgPM2eMYSLr5W6Czb1d",
  "key34": "5f9To6sWD3cd834ZRK5iXgQB71UzZuszexxQX9x2C7JCTWeCqXiV58NGCrTXjxKytRYyUSsUaULuK6cDW4WPjRCf",
  "key35": "4pvGnpm86AZ1Et2bp1xDyyKG87ag7ZU9GBguxo73T4xP3ebM5ZjEiAP8dVPwtx72k8882GxnJQNHA5E7XmesKusK",
  "key36": "4rqWKSubdfEQzhwzbNSx4R99NuPEFDmhXDbH5LQBZziFi44s1JZkA8wSAKHZgACS9oFpowpZzdV8Az1Y2gj9JW32"
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
