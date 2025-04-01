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
    "4envZEiuL15vBfD1s84upwScxBNHVkGP83Ati95z4hFGZw18Z9NsHSnd6UFLjY3oe8LTJtpMsXsffh7naYVZpF7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a75sVdz75q8jqDxiHkYy1vxY5XxyKiSkmfeBB7pWF7n2AVYzxxPsuQB3Tzxf79mNyXqyQnDKqMxnRoCyieLgbb3",
  "key1": "uFWf59yWrb2cCVKZSuTR6sWYMgoManfTiqTjJvLKHXkszgFeMG94AckAjyxWoYUbY16JmKnqfJeqhC3mphPf7dA",
  "key2": "5zndNtJr8hEFieQmZqsL7AnFAYPE8S5NtY3JdqWNLazxxiZaLGtCY6sWUn2XnPMjGpM9aKGZHU2bEX7ysj7RAckc",
  "key3": "4k3Ton8KKFAJyrtor49Prz65ZWv6K3dyHNTfMxDf399vwTv5WqjFmRi3gqrZteZnh2SyMkkCpKc7ev3Nkq1kAXik",
  "key4": "22LyYjtEH4vXP1o7URYTbMgbv58JFURXRepQZ1FCMfJxmZzpsx9BfjpcYd17xXbeB2bEPxou1obvooeWxAyQY4kJ",
  "key5": "WBPH3DmVzZhAwByfH21wzmJnCXetFu978hA6xosPw3mnfsAXWV2CAHepRdANGV3WHzn1T4EwUjvrhXNYqhR9x3Y",
  "key6": "234yq4GsRsARD66r614xKKDUHAhoC4LXUqB8V9ZrbHJtb8V65AcM1nHJU99Brvvpj9gkuQkuascGuBifdGunYHUS",
  "key7": "4vEzrmPY5V4dKyYXVNraDVkwCs2WTcGHDWYmu1WazryJmDzrXoZ4vTLPVfe5np2XDU3moKSFE1PayDUxqTgAMr74",
  "key8": "61rcNgGxJvGQVX4xMbCfPsRAuWybhFLhNGqokZWVXSS3j59s2T6gM4TmyEXJqrn81DRNT6GAWEMXC48uxrbJ7au4",
  "key9": "32fMnXn4DV5pJdxYc6dGAsjGAhMNeLYcpgB2ef4ykfioy1Qka9f75UqP1hscnts3rrndcbbAHwFnD8AbqGBodREM",
  "key10": "34hLJLWbkH31eMkwUANvzHqTfQFJ7K6JPF4NaSbBevinzA12GxMVtP9fmpL7ig7ksqyJeD61QJq4YZhVpgYSPi4W",
  "key11": "2zy7unmDj9vDRYmLQeJFbeFVk76WzZVA4QRcygG31u9irxdfhjvMzka3j94FUdne3ufRn9rzdoQY8PdzyH3Qb68p",
  "key12": "rgbBcg3MQzda6cFgWoqCKwsdFRuaZDPNwt1m2XJaDeSR5Tpz8PUG3KmStnjDhBYZvmVrUtpShroyzG6HPUtFwjr",
  "key13": "4fUXi899aqcFStwAsrJfqwt71nH7P1MLeQZBHc3TXhc4V8AQo7Qyx8cV4mDhRsfS7Eq26cFN3FR1gnSqXrByyt7f",
  "key14": "2H5yLLD94Q9ZX5ckZnULU4ibPaeWbVKmVt2irpdGKJm6okKqh9AYihxWBHUVZ5AhyBkv1aZM3ob2ZhZ3kBbJENTZ",
  "key15": "26b7QCzXAZh1YRATWA7rrGdjcvgipjKH33Zhra73TBPhp71KXLvrVGYE6jWJ2dbpU9HHFmCaRwFbGkFRA1oEn2Sv",
  "key16": "34uqqTXD1uR8cJM2MUqGivVGRMJtVY1USWKVTM1fACxZQzaeSQhoJn3BGaLbPFLkzjaSwKGhedd5jxknyhQYoSfe",
  "key17": "37sRaLiWvzuRpTmiNBr5sBo53KKwUxXry3SMAtbHuTbGWHxquyDZEMLm7RKYm6jfXo5FW9PihBSCSA9KgwWJeUVe",
  "key18": "KWWgCAoZuob2QHZM7GTL71zTXr54116pnrJvhsMVowNEKPwyAeZanEjWDWRzFh8h34fsGLqftnYKYruiTZqUE9T",
  "key19": "2NA91tjX8UuUNVte1T2AFvzjK345k1DGPYKYAY7GY9js5BFZxjDygrD7FX4cPVBzm8a2gCHjWNnawUwBpmmXcpjx",
  "key20": "3wXS1M9je92x3xtPe6Ft3qEHGS6JT5Vg3H6Udcbu4s9Hzbm5UY9KtWXhsPUE9Qj9WEanqrsds1FCFXk1p9rwuLm4",
  "key21": "4mJWgHyThgeK68y5iXfyNty8LEunBKM3MeiKJshzZwBaWSDBRNGeupyqY9HLhnhFkZgMMLpLrL1t5riejb5b4w6c",
  "key22": "3cpBPT5QL7Wr32n7ENiCCmvyrDFKiLjGDmNbxoz558TCR6iXDH5CXSbdE8LJArGAaovaUdWDoqTuJ6ntoWMVHtDn",
  "key23": "4YShgt5oxcnLzmautn8J9ydsS9ABECUWaMwyjzJg3HZAdPjsaYtyaQDKfQfgfEVyf2mKsW4DBrwEYBtG5JFEGYpX",
  "key24": "3cx74ewTrtmNvPhAQ4rVK6ym34zbZfZpGECr21LqG91turXwJzg6EpRWP7hmdramw7P6ZihDxLiU4ZwPBckPXKQc",
  "key25": "5rUovoi86oXnLATfvonV5iYYP1divrHCoPzgVB7AM48DxgeidDuejEy8k4GseRQc8UzDupcWk24ewCLLPVTgMYHX",
  "key26": "mpJJXhdPgeMuTfaaX1omF4RU6w2wWdB7yQXMCBSmHwhmziENp8SKH2m8Q7rYiNdtrC6DwQRyvaFZgNMCQrApYN7",
  "key27": "37JEtXTCkNCWd2gmpxDxZX2N2VEo1kMDJsRVReBZNzjWf8L49BvnLW2Haje4yGqYWPTysYHwTLPTr4MjeggyNgSx",
  "key28": "4MCdDW6YMDbQJCGvmAwLbpyox8qkGxsffsmNMLE89bZGjisSe16MfkK6UWLCr4L2CkD12JGzkLkxw8qj6TjBaTZq",
  "key29": "euZbLFU2nCpeKS2Aq58owbneJoB5eJodXSWQVSbFbmjUXC6qzDTkn8uXK2rwBCqcq1wCz23Rxrxm6peJu5sknkE",
  "key30": "41L8hf1jSy93Es8TYzT7hwjdTzMrsHJj8CviB9cFhZsZBU136uoXcUXxRvCBvi3TtKVBorvDBP76fCZRT5yESEgJ",
  "key31": "2RN8dJ3wRkUCvWGsotwjgSr74zDJNvw9JvqAACss9sZawU82CD2onaAJvkvkMoRcwGP4vfmLyMgBKf9v4CnKtQUk",
  "key32": "3uuyqv2b5uBjgaysMf6GwnSjNjV8i2nztSCFE8ZqRBKh36c2Rfw5HHxz8EkCysHzeuinCWj73TBp1XHKFkdPfGp3",
  "key33": "23Ayzft27EkaVM3DMD25sFPna58P4BZ1JH1FDVytHaChr8KGLPVWKk1VoaqK3AzBfyobm3ihmRhhpM8KFMKo2HFZ",
  "key34": "5HRNNuZLPZpi8B8bSUuWpphA4wx6XSNDMj4KPPhgCxDmjL2f8umCMJKC6ZQxcurGsh5ZgBa81utgfwUiRDwc54zq",
  "key35": "3ac6gd7aSyFCvuRCAoe4dd9YRB1uSs2mWhrAJAgyo74TSwd22WTxt4pPoR9ZyvM1Tee5VvcX2CMCg4CBYGzAZxT9",
  "key36": "3QrRzdQKL9eyLUbPfXT9LppCasJhdpguw3ExqQbTPTEtte8MLzW7fVUS1cs4qYz9GEMEMekPy4DjKu7D6TfHrMWj",
  "key37": "5Sm2oaiGNXuh8dMLQK3UaTszfViHj73PCZuZJcDtgrg2QKZdwDTWkB5SadJ7sgdnmWGMorM7HuZq5fVEjtFyc28s",
  "key38": "2XDnCJpfdUZLMhfu6DMhRp9SCP2qNqeySGVzrGTFhJTguAxCnTNtrxV3cRaPHUERakLbevM82hJBNxrDXL9Fcjf6",
  "key39": "4cxTUMnyXvGGKAz3FpUA2GZvjSWJkFe9EsYqwwLMTtDZrbRW495qfSzDYNhD8ZXXRRB5dywUbvr3BWvtMAy5SZ6m",
  "key40": "42oDAPhHnyrE8BiXuoyXwECxPyRpSAvuaTvGJ5rGMzyS9KEgCWsukQDUMrEKWeNcU1anvGwq4savqmmryk4gwz18",
  "key41": "4wpaPYERAEkPS5dUtm2fiMtixSMUVpdLekiKpi3NcT3LNC3iiAcW2cVgGcbggfKpf1oUYT9gfzzWYnMkPCTjMrSo",
  "key42": "5JhD5PdN1kKf5YChHinbwvWeoTe8DziNH2j2fjM2kcTmyGjinXUigvmtRje7ZjsNNJpdup6JUkMcx7fyoPsMwcGw",
  "key43": "DFwhuuZJdmoNnuBGHjAvkNvNtfDkd9JwNTJnqy7qaY4WhUHmsbfYRBpEhMUhSc9oSB1yS8bUeVGMyi5tZ8NxMeX",
  "key44": "4SLUEQACaV9ZkaW7bzjHiyBLyFhLAN9HQPmRcA4USskvJ8SBbqih2W6i9b39iQTjR1XMuaAEu8zkr7USDKhoztUo",
  "key45": "3pj3aPgMHjd2S4YPqm7H69hE5pbxRkPq1mC6FCgiADieEftUmPnk5WbtbSXowt3nDoRDtusrLV6otFxYA5mxzFLn"
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
