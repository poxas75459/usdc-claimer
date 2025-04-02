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
    "3RRU3C3ULrqcXiyUv6veX1R7f9psC8z9CC75T5zHM3g2CaAKPoPtRTuiaPanPJptfC8a7aYK2AQcBiXuJaWhRVSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vzdR7Xntdgi7EU6BgLYeoEVT23AiyPXxF2undy9GxGmHsNGfNQfDkxVg8wJHjEGXZVwv2S94TpstnYM6DNha1ye",
  "key1": "4mPmwArZUWBN2qAsfB6jm3HtASfjV8ZHvkbt5KRYy9XrErMyXjRwfzCiNxK5Va68JDEtFp6vjs1yrZAfcDVnutCF",
  "key2": "3rnisoUfuWuykAeZiC4z4sU2Xc5Vzxhpz21epFwwTCDJhACZGVLX9v8yxHN4CxtqvXjbNCtdppZKSXh4Acidgkww",
  "key3": "2Up9QGHR9fVMZAmirvtYRUL13G5x556kciuhoe5bNszDapjPvzgxZ31XgCsdHesxTCyqh2bMH41ty48tDSbboHiK",
  "key4": "5tsY3QMgfGtBqM4A2sUrkjcg4ftgsychzomBbwLwLakFysBTxxkYnj1VMzn3mbZdvJW8FxTkbgn1xUnuWK1SUmri",
  "key5": "36Jav9YFyEs5hAR4qxEtYL7tDVzQmxGYwmvpU3nF8y8J4mDC5eF2gT4SkoLvrxQTCVU2T2rVTHbXfwDXykro6bny",
  "key6": "bPj4zn1ZpHyatD9p963cyj5KhzG3DC8ysSV3h7DUNV9iQmafrh38YsUKXgA53ttABAdS6sLLrwACsA8TCGfUBzW",
  "key7": "44MPhAAr9SEGY7o8kaBDBB3wLZH1QZTmKpTsuvDxjZLpEXf1uho1aDCMoJ6eBg3MfzBmVb8mGNkUddcVw6ZZJAhw",
  "key8": "ChSbnHQyyC6dhziexwGgTe7d8guYWZavcHXAexKCmxrjQWwbkzhf9NTBbdMw7LtbedYuJseeeGZyyU55etZ74Ch",
  "key9": "4LT8Tj8oaLVJedz2EPdYnFP4XuEwDiBiwMyRADSed3oeDbn1HUWNvuvg9nF44g5AijCvQ58DfnTkmRvuLs49jBGd",
  "key10": "xon1cuLYqAT8yJV6VykwUY32MLxMkS7Ev7tKW9LzfFnBb5Trcn3hxzcTJpUQZU6C4PQnE3Teiv7K5nK9xvMsMk4",
  "key11": "4acufx94GpWT6Tmf2NStg3Nu5m5J4JjWG2qyoUJvUZgevinYeWnvy4qwvkdMx6EUCVZoM87HFVP9ajVJbLiHA6s",
  "key12": "3ve4pKi1v7tdib6eBA2uSpFpcPXQUJcmiZyMsbKy46igo4cKZZxJBZHvj62VtUosyCfkkDnYDUPsD4D5TDEjEscb",
  "key13": "2YfkXU63oWyzhaEuQAZ6nFZQ7zMeYtNPV8W7MxDhjG7aNHy4rGvSUYNsPBJwPEd3e9GMYu7jXe2uuKSDcBrE5yZ3",
  "key14": "4ZkdsZoP8BMWnttSSoMjKeDMztgZfSxkyjZGm1cLWch43ekL8Bx76nTZQE1heuD8CJfQDGamH6gippzh8KtbzFas",
  "key15": "4W8Stad5ggCYydyNSKogyXWT1jS3MKFcpLGY6th9SH9fZUkpV7zN9b7VmLmqFqBJ7vSMb4wpPSwWMcwChVskHUSk",
  "key16": "3BVjN2rbX3KzQh5oX9gqesMEwXp3uFhCRFyPVkANKiCt5gG9itKZ7VKwPFgFD66sy81kAM5sAWA8ruWcrDTrCueX",
  "key17": "aqwWweU5Pkch39TxMoc1Das7W3zyAAB4vZM15EzUR4JZNVHYp1cXTMiLkT7duFDgNZyvgkd2XycrkPS6WkpFNVy",
  "key18": "2ufuNjHSeZcxnspBRSex893mBQDVqK7312xWJcGo5GFpUtFiK3hLLsw4ShUHgjrrBHKLGn3zS8sYYYTtiassEZ7h",
  "key19": "44RTG4Urj5M1xxTeDqYtLPX7CAYy1R2UFfK1TkAhZyaDJ6X5YZHQCQnWns2DaE6sT9vrfRUGE5Dfgbzjk1LteNxy",
  "key20": "YSA918tGMbeCjJnMbnFhhkQ47PkzBG8fKzJ8Ub71YtH28fyy5X6mc2fsegEdMShZiNBbTshA4vZjUHb9YKzYWRS",
  "key21": "9LwZdCrUgNMWnk8J5Jbfh626jynWTTf7r3t72DWcRXjRmVK9Z3JqrscTETvi3KGpPEhoenEE5dpNDeUXQrLEnUV",
  "key22": "364yVhfQuyXsRYYfgYbFa4eMGeqEwZBxerpmFLoQFEw23hRntA4yH1pWmsMxc7GKgLxMR6CobyMaDFhfq6RQH6Xj",
  "key23": "57xNRCopKykBnvqVYBCEzaxt5MyRs7WiU2QrgSfsqc6jjobDD9Aw8gEWTj4nRYAYyLRGQARXFuGZc7neVbevU5W",
  "key24": "5qFjfvCunHtXHPLo4A2KZUfbX7aCSoaJu7FiXoBJo8yAWqP8yFFy4mqZZTrJgXbXfY2m6W8TzSJrNkX7v5dBCAFU",
  "key25": "3QJnBXQhnont3NnKcer7PZCtZFYr3dDG6E58EPcmETiYxqQbaxWktpvr7JAE115HkmHrybdLUoYxmWrU4yMCayqV",
  "key26": "5LSMWrtu5TZYR8bGYNeB3Beew9KY6aKaAvWD3ozbr3XpzyPg8jEDNB6MWHU2u78VKjU86VvfjjPxcWFEAsyVKc9g",
  "key27": "2onCkZU78KJ84XQXmi9K1duQY8NbdHy8npvrKvKyMjjGbrHVTZsxaDhfk1a343wJfuuEi4gZZKc1a6WtER7JoJ3o",
  "key28": "4CyEraSFFfhAnrFJyaogKUxBHDBj2NzV8TVbThzpgTnJdW3qkGhtz98S7nnG4qQcXR3gkGTGykRnebUtpvuBRwjG",
  "key29": "1AQHwFzCv5Xht15zgWji4NwN38j9SELNQwpCfvbGhxaRr8p6YN31ZHBEmnjK4X34jae51Wc5AkR4P7kZhQbq1u9",
  "key30": "4NygLCgeDTtxfDHxmpEff869CiyFxCN3DgVep1QudPVotUnCj9P4eRAjr26RcuzPFTs4emYTfwqDe6BK3PhqXyny",
  "key31": "2jjDAYNVBsDkKqoWgpgjywrkBavSGESwjVVHKLsto7QzmQ7imiW8TQy4iC4X11WBggqK2CcfaSWrs6pym7N5guQK",
  "key32": "2j6FGYXcYyDEPUdX4QU7DZiGK9XGuCEcM5zhPvnGQ9LtTxLRmeTGuKfm1Gv1etHzB1jiV56P3LxgAK1Q9935bMJL",
  "key33": "4p8qDPZSbjmsJxHBtvJ9jwXencLXNtRVP3RD2mZQfhWwq3noD3JgrLCqCJLvzD549voenUQ4ZaRFQ89QZgSaiizZ",
  "key34": "3T87wAuUzDLkk79KumveYTKrBqAtyidGYCkHNuBRAMikB5Z829EVdQyVGt4bz4cCrhdPvxVJSTx3mLCSn6QjjU95",
  "key35": "3v3u4QseoSrxpfSmyGmYMSVM3QRa2DJnTZ38dpnkWkkVQaSrMDQdmdmb63zcwgjMPY5yoB8osgrg2gPoGvARYoca",
  "key36": "2gJxYAT7y71B3q1Dy6d3dpngTEumSRLWtKSmP2xToUTTEGyku6qhx5M9HDEazLL8siiifc5XXJxHCtLPwGp59aBa",
  "key37": "2qQrnpp6198fYvzn2yDzuTMKJba43y3AKmf4n6DL2pjWcdig8CuUSWKrJXEz9YUvqHscJsPGJ6pzgzsNhENRykyX",
  "key38": "2s7zDakwAupr417nuBCx6awa52K28Zs5vMVudh5xPBXdB2mR41EMTJzoBM5Xido7JGTvWGSTP6T23uRLGKMxDvEp",
  "key39": "hXySamzgirCegNewo5QA6XMbWZqpYSL1dRjJW94FfZxfZux4MC58Vh1786CdQJ4ageNxkLxAEsCnrDW1uMvnqje",
  "key40": "EHqB6NnDD2xrdaugUZJ6uKJVLG9MzVfMLZvnTmaqdDCxggXg56veGrxPyvC696Z6YHuyDiSYdLh2YCiEiYfztUm",
  "key41": "5wDTbSweW4khpZBnZ8kMkLCaKv3yp8tqfR4RhWrWw1YR268K5FYxDZ42oNQQDQbspqzQ6KSwpoagHivgRBk7n3v4",
  "key42": "be7ZidMpQQE2Z9zHBigeCMjXjqKdTjfQSuHmoFt1nSfme5ssPGy6368XmdxheiAUWAPkFhvbRytzvKmS9HCdeqs",
  "key43": "4AdCZ2gpaX9FKvHnyfuFmRsZX3Jgr1JuhpwBRdu9fhPrdwDtqYUXQkvNcZk2vpDW1fcTvorcrXQLCSJKdzuDMHeP",
  "key44": "39R7o1E4F4QQES7SZKX5K7GELi4zoRjcyEJjuCJ4tamoiErUXCjGqNqtzVyu4VwzUDnpZQvTzpsnBbA8YfB2umGn",
  "key45": "4WXk1aKgfBcPiE37swfyna6Wk9M2euqFS2WWw7K4tXw4CVKqVv6rUAkTReQn3wBKAAkZugfw2Jh3rxkcNhJ3xWmz"
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
