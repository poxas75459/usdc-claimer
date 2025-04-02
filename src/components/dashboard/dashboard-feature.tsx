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
    "2HhFpNcHimDKmM3KJmbkvr7vaMqDgHBWFsFAcdxyNP9m3DiKDQhaeHbc744mHGS8i9MAufwoAyfM9G5fHLjfUazo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9mZqwrDfLQBTYey2TKX6xEUDhShR6XQqgBqrocFgRc1MBtvjnPcf6Q9r5NgrifDrP5n7wbRvDNXwaLHwB3WTsd",
  "key1": "4Ljvy72hMDxbr3Ynnvx3TVATkFTg5Wp7B1Qd49tZwXGBozsuckHnxXwrvfMm2YDLSC6WYaUx2dy5uBJvtjdWMKUj",
  "key2": "5rBivwmp6nMWfdd1NgDRrSSS83hoEwGfU3P8aKA6X1yaYL8aHL6srqAvMb3kDXeW4iwqsQRwNDbWbpvs1JqxJd3o",
  "key3": "2bvNu2Kts5qvQuChjr7dasfnnGGASNbcwjA4kn9M8MAxzJtEwFXTYmZFaenpCGYqWRVoAqXvU8uq6Enn1mdwYAw7",
  "key4": "2BgYhGDaaw6ShSPbenAYmzQ1X6B9nLh512Cvaf47bdUt7zH8XzYhhRivYJCYHvPmSkHKJ6HLLjGuGqtkd7qXUvLQ",
  "key5": "2k1Gug8W3Vv2UcS1WoMEmjCs1L9Pv6FfJ4bbvVGPzyeyu7NKwQfVbgkJpzZuGRssEuKPrNZXgnpC8uepWfRmQ4nK",
  "key6": "3uyq76MFTHpM5FmA5XBodogq1G7AMaR6LK6yHkEmEK995QaVCNbEWX7eNzbqPTRAEBMresjydgUxWPEKp3PUVsi7",
  "key7": "2LwKiZUXS5jpWbDmiKh4z1Lau6myFfe9LBRpFfAHMLkBFiYehnazh7L9XFeqwUf2C6GT9RTvTmHtAGjocepPCtPf",
  "key8": "47HygabhJ4LPzZMgFwTD8gAjA2bRSWwmmTuSdjPoY3f9ofktMserFkHS7gsiCDXByMgpNZfc7emV7SFLwTs8RpML",
  "key9": "4GU5ZwKoshYogLLrVFuYfxNyLQBntNYPxno6tQN5SBbwfRsRASnTczFEE3UL5mH2gnoxYRC5WZuuDyacrj4H8WV1",
  "key10": "2JReGrVPqfZYDasS26VthFVctoftkzKh1vV2R5fUmazKz1h5wFDiTboVhhk8NEU15d5A9WLwDXKrmMajZZPQ2QuW",
  "key11": "4fJkYdy84eLfB3U2oHfKXkDdLsn5Ba2oWGrvn7KDRbBzvPef4oX16NHZU6TAoPSWDqY1RU6dhDysva4aPobN5R9v",
  "key12": "5wTiXc8YQQPMKVAmMJwJnf6pMdD7HSjNefBtDmv32t2pD13JjipZyNpyckQtVPghFhZ4dWZ43h5rUB74rgQdAqmd",
  "key13": "PN6Q5civBg4nN13pfbEBDb9aaGTixKNhd3jvW4ZttCFkWn7hrKYCC27sREmBm82HtSEe4oQywh1e6b374xWmSJp",
  "key14": "3nNvQBK8wU7C7V7E81jiSjoSWweUx5nknY8XK3ndb7AXHCdgWGsRbzrv6nmd9YZqq7Wo3bYkGqWngXKkkR1MiCYo",
  "key15": "2qcuWq7G3Rq7fWKCqU5Uw8buXZBMELMX1sECoc3ri7fQjwLvK8aTPMcL9VYEE4QvVkr8b7BPqa4ywsX3V88zPJaP",
  "key16": "3x43BFxGqSQC5tFYFNe2dwchamsDbzASwv8aTkPDWYhDKvFeD1kam6kyJxVLN6wb4nXsixdicB2x2dpcNqccNa5c",
  "key17": "o3SpXhsgk1xqpaG4HrA6FryhujUaPGLzXkV9HfL3wVovyZafDdmFd7U83XPiB2Qm2KuQSiDPAX9VWzTuTYo86iv",
  "key18": "55Mv91Af9Mnkk1Z3QT6wuRsAPEWo9SU5YizuH6scHdiDRCtAjbQRtG9vCm63hr7WBRWTp1qLtoZXeTerLuT6Mp7n",
  "key19": "2vhapNRCukcPG6JvkT5iCoKk1JYLLcEvmBPnbGbPv85ZdxyV1fPQG7ToaEbPms3njYuKWeYzgCQHHsLmT3GzqYEa",
  "key20": "4ppnSEZr6zgzH15dDAmbo7tNjS7yLDdyQP1FLhZkA5h5tjMZkHMXo4A9QWYzJraUExFkDNjp6MdabpZFWW3MiajS",
  "key21": "5pqKXU2SyKq8tMfjgwuWg1zNkPeykGk1ehjeSDJnfhRMdQdF3Rs6DovJTeVePcoxuBjZ78E6MVwWaP653QvTwgsb",
  "key22": "3pfyfzKJ8EQx3DbBXa28YbddiJqFUYMWYyGBsr5kXGmEt6K6EzC2EDDQh5DSpueAQu4qM46dJqFaXLgoqguxAyoX",
  "key23": "ui9eJxCbe8RfjXEU7cwVy6gHhuosFZSrSsMFRTkz2EKKcxmHiSNksFKrqcz12n7ou7wYnKVqnsJpNpaPDU9yNTK",
  "key24": "5439qmJkmrwkWg8NoUDarCTMwWiJNb2obNdiPyhGN6rJRKgpKyMSUME6KqvuLVupaZRFRkgJbBkpKgfSbHwn9iFQ",
  "key25": "3ALwsXR8UK5MRztqoxqa5dEs1GioaPsiQ7vPxdczLM76uG2YtJxDrR2bqtkW9wvgUi4sjCU31AqRDW6z4CThAL89",
  "key26": "355ziEgCU2jj9Eo84s3rwFLUaLiV6mpbrkw9zb8MssHkfuhauuyMdKSkUzvsXTMjXUbme4kAVwBq3L9p6prWaLpL",
  "key27": "hkSWMyNfgveZ5ALFeXZBPfjb7mCL7e9K9m7TobnwBKyM4smS1As6KXUarq2PiTJkViy4rQ1GgVLSQiJmTBrzmk9",
  "key28": "49a3HKky9zLgBex3td7FAq5caTPiVHRPBtmZRpUmcygtZT5Q4Z4DXWutgSbrozS1yAVwgwRx88hQkQabk4RXTzVJ",
  "key29": "3boV3eHjoqVn5QWTBBmxWdrHz3qMKYUMuEduDJXxHPUxqa9KMTyf4rwwJ2UB11p3w2CUW6EoFjWXVVYTnbuND7HB",
  "key30": "3UhowL5VcRsF2YNQtB2uU2YjneQAUYAnWMp7wRukvbYTvTsJUAmDNhwKnbbBJxkJktDDeXnipEJAipbbFPg6pdAD",
  "key31": "3aqWwW4pgyV4Pi3afAtdJCHoVEnBEN4kuzq7H3bGawUR1bK78jd9rMBkSn7g8A5uGJ7NbJayW5vfYhJEgPBH9U9Y",
  "key32": "rFfmFYbgCF8Zo5NnZoyQoZK122iMxU2yQ9XS6fMjK8s1xaXr5YvGmXbjKQjD27AWaD1agvbiqTvsH1nVZQLvHvF",
  "key33": "3Qt4xLsFPveVZ3ms4YLLutsEouiKEBx4LHjcM5NmbQtQHrT8qRzaRAgeWvvSjiFt6uwaEVrc9Kir1ExERfQVqUdH",
  "key34": "bX2zBNx8KQj22dqRaFZWh8Tvozs4nW8xZ6CCK6DaBGLtkiBKPdiM8D3Hrty9Hd56wrU36WGuRGwXX8QfiLwjxGy",
  "key35": "3xDteXbRZpD6UKiy3iwzbyNzFxHid8mv36f2KiNX2Z6PGnHRMfPqV1Hn4CCEdX7k6gPk7k94waRPo5Teajw7jEZ2",
  "key36": "kQrj545tc3wrKFc32kgRQ8VjoXa2Ei4WBVrtWpdL3A9DhaPn3xQQkrpSrbRvBajxts4kwg5hg7Go2JM2zF7ETWC",
  "key37": "3AemanTTS9reRZ2Gh8cLHDijdRYvLxWSn2yh3TxbJWtCodSRu1a5yJ7mxfxMjM1VMZgh4FGqZukPjHP3RD7QTmGm",
  "key38": "2kV1hfDZZ4egdaaZ7hgpHtWAzgG1U99Ra1kmKKvx1ZhVDkU8S7KhwXomNoY9NNgkd4fvY43n6WZwbJeffapTCp72",
  "key39": "3kGxwSvg5af7iRcW59soncFsuWRcPS61vEwQUxkQuA93u7USmxHMaZXiXqHUQ7vvCptqqLz6zh2LoMNWKKY6pEH8",
  "key40": "4sp63y9EZcTV4MeDmht4jsV4ApkSx2ohy9yMAuo7bUHUsyLU4NTf1jrQDoWAkk1XJGZPq2AMHLJaL5uUXjWiDXvH",
  "key41": "PrK42JnpsCPmM5P8Amus1NUQ7eYq9gVz2ebYgYLE3z6Uhck69iBj7K4G1iGYfztjXhP2UXvXovXG5YPTAE7GZby",
  "key42": "3nXShDjbUK6YG4E5xSHX73PBU55kaTrCLTLWiUxUkjYnPxXWvQuM4FTsrfqfGMTVQuoZ9XBXoLcrBH79ZQXk5wWk",
  "key43": "3wsKMETh3rFsrUooNKnG5N5X88eaEGU9BLQYPdz2VLo4StSJ15o6uqAsRcvqvHfBQHrzHMgZxhNLd2QwyqzebsVa",
  "key44": "zj3VVXQ8MX7SsTkyrFvoSczonZwRff4idmQDUJ3RBsi6T8vjpSwGFJnkBnoKFCgVQyWCr6vE6WZ5BvWcB9pfDjH",
  "key45": "3wDk2StzWMMTjqb4nuiDXZYroqYyB4K3W1jkhVbWdiF44KnaCrbejcjUJnWneJSyvFaJ5zkK8Qy4S1FRjQe5N4Eh",
  "key46": "EFQUrC1YaUP2zrGgKHMsApCun1P1haWyjyRjsCeAC4NgSYC79az39DTozviC7TUTbz3XESNQ7EuDc3ok6pf1u1z",
  "key47": "2kk72afDV3i5iWJ8urjHtBCVQ9AwMN9bsP2w2KpWKVvZL7gWNEVh3ig2jv8TYzd7CB7Fa3i2RfRAM13DCvStbU2h"
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
