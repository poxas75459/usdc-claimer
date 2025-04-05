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
    "42gARiLXCfor4jSXMa98egAFp6jEUcqqdtKBF5bbbE47coVs8cjHia8uX4qWnVTNj5ifgQFsuajqWcZvsLWHZyHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igoXNwSZNNFtr3T2czGiqU32YHvuRR28W5hJbjsRSwSXxcFZieTudNp2pUtsSktRhLVsQ5tyT9hwup9HgnTtAnQ",
  "key1": "34TQ1wt9dcdpd6hRmkeHaxoHufeHWNLzoRyqRKKjQEnQpXu4YhvAm97yUiqzB8wWLBskBWdUKDZt7ufmHWb61oT7",
  "key2": "c6RLYjzGH1Uu7UWd7SjDRvbTmRqSG2aw32qGTkK778D7qb6rCRm2apSC7WYrGChgCUPRfi4bJr3mHHNuSJ21NMp",
  "key3": "5oARSkMcp46mMJA2Nt4WMCuJhsMcqJZCSxbgcyBZFmp5PtG5X4wVyXWbJdoLnJ8D76igAe1qWNYJU47wzmpHGAGc",
  "key4": "25YsZiv3wdtyk9jpMJngnQDBGZC1AVu54j7BLPBzBYuq1hAxR6JoQEbRfA59n5Gg32xwsGFueWgfbtdp9jtzB26q",
  "key5": "5XU35EQPAm7PrxHqhG19M3WPMFS1uqD1v1hXgMRAkaJaqEdY7nWGJmGH4tL22LquQzYiwEGrGq7f3YQ4dmYH1Xmp",
  "key6": "29gWqdZSvxFCrkQYYLH8n6kZtGmEXiXvsLHCvXmmV5CE2XkV79aL28pm1Y8qZEgMbQBxUVw8tLB7sRRmbsvBxx7n",
  "key7": "P1R34E8ZvdUACQvuStgjogL228ZcUdxCCZfBuZwAVuCfsVsNY8d1dm8sSsymFxGY3CE7vWsS6EmjePxek7sGqGE",
  "key8": "5zEpBtJkbkv4GZ9cto8uhRzNKTw37QAcyC65eNabEqL71gdffj4t3qAzdG61jFZpAucg1UojxHyBLyTo9khVH15e",
  "key9": "5eq1FMYSoxnZjT9LwBge3pdt3p1pPCwdiJhhsVEBp9Zxg5KvGnDZmzL8CnzvagST8xTe7sLNtteWwcWZPEuMQk7u",
  "key10": "58USAWGqcTCT6Q1xvq3pvSs1hJi5Hf5Vkvycx92RHHWPRqnMw9hBvhBBVHBBjxXM1sJag3CEcSqF2G2xpskyXwLz",
  "key11": "38uB5NtBXmBE9dNmKg1cTxaW2KNMHDNmyW4eCTvcwumQsEUYuSq3xa7S1v9suavBoGs84RbjNbjGAYgs69g87hgv",
  "key12": "3rk5MoXHHLx9xrEtJAA4hQGv1Cu3Ab9as8TbSsQbh19QZj7h7mZE5EmoKbbSrT8ANhc4oboKLv4KQudxmriJnsRq",
  "key13": "vUHQbqQPiiXYgAu511WZYjFDRsFWtDsWxDZuvzsu6RTfQug3AMSu1GENTf8bnH7NNsQcjixHRrg7Q9fodm82AGn",
  "key14": "4LgmNiJAVUn2SWMp2pFYxpyjT1dRcY7uyFj8qdqNC6K2oW65YKYFcjREfZ32bKjfRQZ8XfwRTtmvVni5mEZdqaok",
  "key15": "52WB7XovNF6iCaT2bTrowFsbZ2tx8fsCtxAeeWDg9SpSX17BesfR5tW6awNGA1s7aX5PiAqeaxGDoqx3dfJEomfy",
  "key16": "4KmEKfoPg1a9bUcxHVRkXfjapNFxRhBBskvkkihC783dC65uz8PzRT5yMNyCfcMvKetqUptUdayUAyZs8KK5RpgN",
  "key17": "2tZuQhJ7WhiZyWANGKmn96RmT5eqhEyMwacKyvJhcAwSuMCWuCqeJV8Y4op4xfnetKnwp5jZATWVr1RDsANq3oQ",
  "key18": "2YHgPjyW7ug4PZy3eaunBQxESzNpibFxGvkEUSMuyPwvkL9jkmBifzqmPmf8QaLgwVu4kTdSajenZaFioPSWJvJK",
  "key19": "42Pyuq41mLZftQkbaiMAnDsdrHxpH4LwuDhxnPSJPqo8eRDWEtdfvzJGxug7i4b9urKhTTcQx4FtBpn6tTN1KjXC",
  "key20": "5n1ky2UAkNEYSZ2Jr3b2g5n69t6yY7RYsb2BYqEWEHgZgV9BxenucEPKhuBBRbCsfqVS382HYi1yywTLt6J5gZYC",
  "key21": "46A5E8Jr53iT32JnQz9KLJujAzk46qsN5KuwmTrygM3zDtataqZBjguTtJAB44eiL1drq4WgPxKTzASeoQa5fZa8",
  "key22": "4pQnEdMSdnrzGBRKrittrHCh2pRMehydvFvfbVtpDBVD8LuMjd5CuLhUQpvVJPFbc4EAcv1E1nzE1bXDgwsRxzJQ",
  "key23": "5ZsEYPDyaTsEqM66kiKYLrxcu2ybWEivELLgi8DK54KHprHGx9MRpAbbaqHnjUzmq3Q6DQTxfWbxh4MNN7ctQdAb",
  "key24": "5BYWkUEkNniuYQqF6oeZaSs8HM8Rf4ABHzy7tcGynhz53G1HPuezucX1Hs3BQi8oTZKNp1ZceNcK4GuAWX5dqjPP",
  "key25": "H5ZPw4Go2Kg4AH17SvQHDMvigCTUykNABn5T8x6ebSN7QCK6awjQfsJnJtQzXQA3iUAE8CwHFgwuqC3A6m2kPsW",
  "key26": "5D8hHeedHRUWrAJynvtiVjkAtcjaUCdTVYMVzbRo3wJMCQ2mxinxo8Lzgf45VECeY2Qxc7NCFFPfWhm3mFnqFW7V",
  "key27": "34UThcqeTvrG6io2UPoP87PYLV47N3vfQE4e4FvrcRDJNFJiKJKtRMzC2HpwMhJRMUj1LWgg5yERQC2NyqmVPzKL",
  "key28": "3WwFa6KuKZL5n3SnJQYkvTHSmVq5PJeZ57FaVmcx1zDbA8QrPMtstoy4Sci8Y4yLGGwvn9gLDgPhaxESzgcMfPys",
  "key29": "5LvV5kdkzGczEf7kDkjNksEEn3Pvdk18N2d9F6vnEVFcx6PJpqV6QGZRwQeJ8ZcVZkgQcXAbNiNG8rkzogCMsmKX",
  "key30": "3Acb6LivvN77AXrH9pjTYjbeqw9vjRHKFp91SaYzFSS3cQz8rudSf8A8BWXHJr6NetCMTCgDsGyUs143bc24FxrL",
  "key31": "2gA9CFmriQxC5bGmFQDV6uqWBMwSnqk9Jg26ugVJHhBUMFjVts6hhsW38tnD8f6xkf7FHovxCiXvSHrCVtEWDE5y",
  "key32": "46bmC2qHH4vuU1hyeAStkKYPwt3JrFmFTtDMbH9yXxjwF8Qedo9hMaKCEhUCas22tQetC4SAteWrhMKnB1oLstoq",
  "key33": "4vvFtXUPUWqU3NSrsj6muZtgXK7pR84yKhMu5ui6uudy9LAQRsc71kg5WJ1o9rp18z3Fv2B8sJPmtULPmZwNtvMN",
  "key34": "5NyNBZEBXzqooT6aLuxeSrPQg8H4teGfUY694B7jHspHyaX2WgEKpNorm63QNzNEZBe6N5k3aCBD97QvCETHwig6"
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
