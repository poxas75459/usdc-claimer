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
    "2ivSgGCbTChHngDrcxW5w43ntoUe917DV41sorrXZqx6xko9AFcHeFawc1FeUNpy3s7FoANtTmaZrD7TbucvuCFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsM4utGw7e3pwqTvjGNQyA1AvBF5PfzYVz3EtNJJ2374VhTk7gD5qVEQLdWng15dAmZGhcCUhQawYaRh8LYBbJC",
  "key1": "4yAuERABumtbXgJgXeW8DA6aMJ88TnyWhBxiCLqWSAb1NZFEvtUgu2S3nJb1VK1oFme32nyRnd1Gbqgo4BFPw5Va",
  "key2": "3RTWaQCn2uWmYe96dgAVdvqhDEN9XuxVspmjEnBBrQwtz1z1BVkDFZtWQS1Ro6qZkAtfZfYgNR4BLkCCyfTaojjk",
  "key3": "2srDeD4rRcwg2LTqEHgmWLjMjRx4DStzhZTi36LUvPhjVjG74b7z8fB5yYqX98fWopJikKZg9jEJHDtXNH9bBxHY",
  "key4": "5PWBHb266ob4yomc5Um5TbNiuJ8RyHwW9A69ReGGAKUU7KbNYvj2qEGaFVKbxr1Dtw2C7mzig4whNLb6dVQgocxN",
  "key5": "6329pFVdTU6E6qjHXN6ePfakZAvzc7bwBvGo6QgN1CkXkEejYPzNxpo1kSXV965ViVf1fRteF8uNimRgETPbTzbL",
  "key6": "46Mm9eAQuQNyRbgks3JPaiCVWR47EF5GWNkUKrYaj88FpQvueiWKzYJsvxMtqrnn1V9cEesdeognW1F7G1isxoBJ",
  "key7": "2C67x6JfC6WmECqRpBvRnHCHEJQaFVg1fYr91CtNAJfautVbyrmekWsgL39drDoNMdnt82bBQP8vQVRKEcqeu71N",
  "key8": "5a8fandtSHodqa5X6q7Ck5DWBsZHaGb2EX8wDYr1U47B2QdCqazdyJ7ohyxyjo2zbsaEK1prFu7Va4hf6nrQQonJ",
  "key9": "2o5tvW7aDJ4mm3zAyHHGzazKnLegfCGvK6xEXoJwEarJx1pCdtTBVGMvuaTBDgeWGcBRWf6yYJcDj6riPr5SkkTN",
  "key10": "4U4PPEAdaHCi6K8NZd1RDjUsCLZDV3Ve2A4LeFrbSV3j25X34ZnqhCwsrXAqeui1Ycv4Yjp7yV1dHo5rwz8kTyHC",
  "key11": "5hLB7e29ZR7vDuFsQM52KLjoK9PgzdF1XWDaMJz6ioUxeybHrmAr259zyc4wnhED6Cg6Q9aNttSMavwbQErdmtLv",
  "key12": "5jk3nDDbu3VsM5iM77NKB7azRbnqoojNJTkRo99cK8ymWr2G7WRQPpvBDw3Ma8AsH5xLWKFJSCaJ7iCSXZDKAd7y",
  "key13": "22chg5QJd3Xf8hwc12VWjo4rEEPmBm5SSuZDV1vbd3zzb1ZfbjzYE4upZrCX9npNBqKTJVMYK2AVc7Mk7P65XWMr",
  "key14": "4WFP3EcRqx8it55hEx8CJXFVLwfB9mSUXQebbRa59QNzciJDjqpviuo1UT9nCq5v3yBUZhQ9MtnTs1H7kGm2qJdg",
  "key15": "2MN2T81pH9fCoonrfXmYQDCkw91RihaqHB9JvPQmcryeSwvQSfkjHFFY3LSbZdAn9vAukegT8eGbzM1MSR7Gw99T",
  "key16": "5qKmkJpMtggMmZVR174LrbkxjkQyFPbnUjfz2DPheGgoPomBJgURmCNobdwMh22z39d3Q4sdksQJS34JorLo9tgx",
  "key17": "2inEmgvZtPc7wNtJ2kycvKxzaG3z58j9x4n1ei43FBShUoioie9zfvvDRT6hwchoQ2VzkGFNTihvPzymibspGzS9",
  "key18": "4nrWXobZGm5qfcJZyw5rhX5DmGo3pXhdoYdkafKV7DcFU2eNpvK5nmmsKoE1guZ5zxe8uqoQNHqWGf7DT7zCtWQP",
  "key19": "2pBGX9d9dRk9pcJPEV56pQcDsCHQxPk1ih4wkRPDqT4MmMeeuP82YBpY9fa5cJCLDESgLPzkJenc7MCGp7QoeXJ8",
  "key20": "65gYbv92AvjP6GtiZ8KuFnqykgcTfmZhyTNKhbE6bDjy8YFiKKQV2WeP76puJeRH8LWGKj64p1RS7Nt5qLQtLtsq",
  "key21": "2Fptwu3WnxrHjWPLoo9686wJb6gLExLo1DSo3imjH11SEhpnXLbZgxK7B6x7aAiPsTVDp7fohyGDiNXKw4JyUbTF",
  "key22": "4WP4EQmJrV6xLJwBCkzYz1hCsz2SpRYnKUDLuXH4nrA2LuVSnPJDQHaccKDLWbJgm9xzKsFn166yhHY7KmqKawiE",
  "key23": "4CUgrg9dq9wDECq4cmQspTifFUhPUTVH7Fya5d8vHHJdSVgm6Feyp22NH9aUYFN4GHrgUyLxWq3CW5LBTEzikQ9B",
  "key24": "4EEzzvgryXRM9SaUkw2UhuQeZFvCXhzz42Hv9y6mTxqBbVyZAWJxTEkrwVeeTLzKywKq9f23DcAcmv6yYvzziwaT",
  "key25": "2GSW7iNVLN81P8DRwtBywpyokE51cWy3yx2cyBwVLS8RBqha5eKMQKhXHv2tyfZzCQ3kupcV7Fs5weM8pCShq7s9",
  "key26": "GojwNUgUkFBHCt7nUhMh1TCKzJkebZVo5UtCoLBAHdQUR93ngNdqDoSVnrGEFxxUBNcfvMT5H78ughebnSNFejy",
  "key27": "3jqSQqBdYD9r2ffkguRoZSWCikBnYPjFreG2zYiUG3doWbvYLYjnWRXZiftJABnZUJ2bcdfzf2TpFoHKmvLrgrrF",
  "key28": "2sbeNoVf66cyrPA2Vx5zMN5YMqd2YTzeZdMWV6AouPZhaYv3sH7VL6FaSoZVdYeAZP8byRUaETUp75pvH3wn7KEB",
  "key29": "3KaqsFaYU5WoULRThPbLcCfbxccs31u4HvcpdipccxxNDXFdoQXxsskMggTHokMWa15TjLhMci8CVcCLAhtEP11p",
  "key30": "2p6BSoDxkrPbndv5Rx5aLcLdPXZ1L5wxVTRRDz75tcutfjuKwRhwZv18qjwcsu3wBwJ2Q7CwzZousXvDFXA8imVp",
  "key31": "47TZZSGdbJRWoYDgux51ZKx9uZQJUNWDDqHh8joa52dAyDLBrHsC2ptveX3CBBB55rN1498SydeV9L6sGm987evX",
  "key32": "2A2j7Jg4UBy4nGik1T4fUizKD1uJ12kThRsMLxtB77PTC6A7PDUpqBgzj839JCx1jxUBUwESVorm6zfYJVTPPLnm",
  "key33": "npRiMxBs7LdZXMa7cSdukVT1kYWBPZE8mxwpLs6PysqL68FdRcsXDsAent34YPkFAoeJHKDHMR9bEJUNj2CozUz",
  "key34": "1222AABocjTZKJbVt1A7ttt2icT9YvVhczGv1X9m2aZ5CGs9GLodnr5rZBa3e81fLdnJeBHQ6ByTctXjve2eipuQ",
  "key35": "4963mq4iEc17SFdpAQe2ubYZKWp3MwGq1sFkFBnwnBKBS7KYobCNHBo5GEjqvXrYEqi5SqSB2attfqiF76p14JmU",
  "key36": "tw2YLBN9HZEaCZBKCwXbWNmJLL284BHxFjJUJGQ3cqo3VzFW5cwBzn3FhEEiMXQsKQWyvveaPzQ7DMfJtPc88gN",
  "key37": "5Raj8Lq21k1HArXJWPQCnyWciTQ9GPiMo2AJtNmYY9LLy3jxSAQYC9zJDu6UxYCS1qegqjDLdfLB9sRvG4PHyUcb",
  "key38": "3k1Z31Zw8CoQbp4WGrCkzaesvxVo5bRHTF3gZM9orDpAbLP7mku3jGiochJNQsemPaRRbtjrrcgZGSm7ZnQFSCv6",
  "key39": "8bWGXXNt4DztmtJ1EfbegLNDYp8dWiJj9UNz2uzxTzkcx79GPp3n3XC7ZBKUa8EPpLeEDUv324hVRZEdznCdEWm",
  "key40": "5bUMRjQ3riDe8JkPYDDbKyyWVmRYCXsBfYBAAafAMXNLB6xPe9mERdTKYeiwax6CSZhp682xpfecwhLowWgoUodg",
  "key41": "27LiFbvcuW6EWie3LGNMiMZDJTqkLZmSZ9MwAd5FRu6FAiBTxWW2hzS48dPYTYVdGgVw58Ww42UH7BRCXkyif9TV",
  "key42": "3wweCaqwetgNvSxMmFMhUzqJ5f4FS7mvm3BX3m3KHjn69BAXEoxopgRpufN5YeDUXJ9Ha8cVqvdbgUo3rGDPxTPD",
  "key43": "3VKqmL7ASZ5YSMqrZTfZTcNUE75BhARrBsvGzUe1u9YSGDRiewiACu6NkJFxpe1qbi2RhREcqUKPTeHUKPXvNgJQ",
  "key44": "4voL7eN1pDQ4oUmRffJXgfWD7fQ2UbQ9DtproP7F8apnMwCA8zesehfH2bHHgegxKuB74vMetGGnNhKichine4Ld",
  "key45": "5tE2q9Vjxeb3NupU4neFfcAFN9sEJqNcZoX5ifowegLv1XbWaRX7DZrY4DXdg6YWg2y1Ey1RZA6RxFnyRJHnJqYu",
  "key46": "2HitHGkhr7GbxJQJPPYPDRzqmf7EzjHPW5RbNyjTwSooWnyMt5YaXMK29P24Ew1YZzmkMUrxuENuuLAbu4GrYhTz"
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
