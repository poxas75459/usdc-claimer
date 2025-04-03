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
    "3WvqmuSTCY9vxCBN16DfZ3617BnpyF9DDJvDfVPompFg19np1Ln2YCwumoZNyeVpBEp71ZBKxXr4vN2JYyUb3924"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1gtSAWBmnPXfBz46ymbECM9n4ADkpr7X8umj2nW8cR2mpDS7P4fwkyEkBd8zHJFLGukoqLezThgtH7UpdDVcoC",
  "key1": "KhXvarCn4ByL8QvcLjpeFVdTjFdheGJj6fFBiFCc8Gva1sqFSKgHU6g9p4GMHhadH2Big94NbiyLTAR9V9zbh5W",
  "key2": "3Yd6L2zEChWttBgQLCXPixaHqEFxDUXe9ZzBHyFYvactQ5qSNXycL9ajX9CAYTdnrpHkBG7xW2w7fjTsimXAq4Bj",
  "key3": "3P43DtEAqcPJ3DScMB94zbQkKWeKjHaoSgdbrC9p9dnXkHncSru8q1eLb2LVNT7B4mDp9AZfJyuLieUCRNdwfzXy",
  "key4": "3Em6dpQQb7BUCi5EBhVvNtzWu2DtTxxB28bJNzUyg1G6a5S9dxQarQXRcLyiTWjqYipjbxJ7mduSfCgDQA1h7ncj",
  "key5": "4QXpzHhQ4H3TA6r8esPmCXhoX7XMWcL8kA7HuEaVpeGuYumtYf6ooPDNMRKCsMYfjMsfZk6qfz9Xr6uiFcH5waKJ",
  "key6": "2i5jo3RQZB3dasHpGQRNNMazjoQJBkQV2yvgQUYhfUM9uRomkuZ8ydB7qWqYBAz1L25TCRnBj9ZfPG92szubEpXr",
  "key7": "26fmivNopfN1cRxJKp3xMBT8NUtdbN2i39E2uhuHzPhRpWERWHf3FajWYuAp1PqS8cHF62RD2Uv3P8NsV48Fs2F8",
  "key8": "2M5CZBer8GurGqesNPKzc8ETkYzEgjtE54VFQeJfcLktGZPpVypwZWa5bcDA466K2EsnyKQukhncy2eq7jHE9ewt",
  "key9": "5P1esNvXgMDR8ScCMFMAsEyaFDzZKt4bebWvp1eWKE8fLiBaiCFUza3tLsN49FTuSDfhiN9W6jhHsQvxDwBqGoU2",
  "key10": "2S5EG6WTV1VjQyW8crEieESBfdPpCDJs7ttQKkzLbMF3fwUUbSRGXToNsYxxHynJhiFvbnKSqeW59dA6zZfown3r",
  "key11": "3vsdc8DBS4MiCcVTiw3drzbEuLgLAKnEg1KKRYDvzXysgaUcSMmGzTw2FtpdpAS5Ufy434LEqn43xTndhZDLnS6G",
  "key12": "4uaJLTXt9527u6qdYCMynJGXiMFe3feDeZXwU7btZDUGBq7dJfTW2hEAwCtak5S4qftUJVFyRBQabMKwh8MicS7w",
  "key13": "2zpm6ok6kWYuLQrMCcNUap1CYzd9Yw8UrGnTXdz5Vd7xEnuJXPfYSbzw7Cf7o35qz1dz3Bb2oPsUP1HtfAQetFHL",
  "key14": "539tyFD64v1r58hegG71zQU2bksvsEr3JthEJBZhQr45tV7NNuVNnsQDxSDqav7CUT2tcohuTZKWN7QTsHDXuvhq",
  "key15": "5gA475J2nqma2mqBhX9gcyiZFTercamufVERL8EVynD2rfmsV71vRHnZcQfqAvZHToNffXLt4FHyKcSyLFWeUs4M",
  "key16": "3mwg7mz7yf9bJ8ZFwAZKmF35k7b33MGGtDEqYbqVnA8VhqMKXxrk3cMcnBWsVPSzwa3K7UhtitT8J6646niucJX6",
  "key17": "37Pb5Hbp3v54tzD4zYRsASCrTeM6DkurAB2o2wiRGL4xXb7eZPwoTPZ8uddPQUNBJWhtwZcGug9bMDJf3v5XgLEv",
  "key18": "2xx23NiZcXg3LtFEEqRegH2opuFEpvAuLNcCEW1T2JUvk8cgkVAyBEvAsik5X9HsHJWqP1Kt8956h8kkVHF1Bw8J",
  "key19": "5MeqRtEP2BiyHVWyKLZXSc1XYEyxiRgGxLr7uCBF2GfN88BXraADmWAX5w16hkMeqD5ytYuXz35bsdoTmjiBkfhJ",
  "key20": "23MyVgfe2q2PQPf63uPaLCYLxssxPQ8KmacB27uKRUKTG2aonzrxY7aTJYK9UDtYs53sdRGVwtHLvMtn9wmrqzLU",
  "key21": "2zHgvnt5Ds7Vu7ds8YzcKbYEcjcTvLGMweNQoGVatP9SATpHQUvFRk7TLRAVJekPmHdh6vwoDFmAwbq3qKW6vyDY",
  "key22": "3TF13GZQ2NgnArbofWrnpUE8QUTiVKd9uK2bSdCfTzw15LS3buEe6TWjppDc3WK1y4ei9EoQPj3mtcFNYXiye9sh",
  "key23": "2Y3ZjD5YM3fmJtNGTac6aKfQt6ytNMDmrjeSxNhoX2CB5jC2Fx9BVEVi4xwKJQEJVpZt4YaCVRhQg6aw2Z8TLYUH",
  "key24": "66wcpqD3nyfa5WmBb3Ug21Sjkgsc4nrjMpKEgLNwCyTh62d6Qxkj3UJoexidNAHe9KUAN9X12bghZhdvMpehTuBf",
  "key25": "5bCFdDwE4hvVDz8beERsDrBuEg3RKL6cm2gQYuEdhswRQkf8eRDabAW1YTUbES6oDyg64ELjHa4oRcdsqdgD8FtM",
  "key26": "5JNxGyd4x2QjXPy8qGhe7FzfKcLfQg2KLRrGcF5evnvDsi3p9KB6fFESPcLVnKEQ6iGxvnf1EUP1sKtDB4UHxxkq",
  "key27": "2jL8H7Cyx7t7NR8LomoLR3yUC1AnDKX8Qv6BbzbqqTKCoM16xmRhEqgWVQAyZuyngiBtvMKkyMiDng2ZbSVUXK9U",
  "key28": "PWkJLhEnbz5FoAXxt5GyiD33T5BXLBShXNEYAmKi18xgoKTGyC8zrWqitf6uww8WyBiEqgFQ17ar31tnz38TopL",
  "key29": "5djaq6dhrVunruLh8jjD7qNKuSUs2Tco7vAKh6XpEeL8Xt6j7WdaRi4335PLh4kfVJXP1LDKWSWgB1gzFzB26Ef7",
  "key30": "4w2W42TFvRb5hF4BD1GHmNmwJUKqs2eufApGRoWHDZTqpFrpUiCLfczNvvjqYUUHYVzG7HMPKbNBvkV2B7AF2JKa",
  "key31": "2Gxt4ctuvMUWTbrBgdsU7XTKR9rT4dppaTax8D1jqjbFvpovBzLY9KuFZoSN8gcf8iKWKEeXrMuQRE9Lktr9mBxd",
  "key32": "aXdzwWcz5QDBWMMg8BRB4nTiX6fWncgiPjtd9yK6QRDSQgKbLG73B1zpdQszwfha5XaW6oUMrd9SPiGampYMYxA",
  "key33": "3MEjndFuvC1tmLJ9LFgip9pe7nBTTNKQ6r4p87dEANaeUhyqRMVtECuhmPUS4Yzd22EoZ5NX3kDznX6bTgGDb6tK",
  "key34": "5nKB52CfcaDXMTjCx7sLjk2JuqNvwoFFHHGUphYkRu8a7f2rCiiSSGfcYZEtiJ37JqbHrJAn5P88Y9p84Y1uRpVT",
  "key35": "r28xTjFgwwz2cEG1sjnWwZmFhg6wmZoJdnoiU52M8JCYZQwSNWCEUrEnvjh5Qg6stMqqJqJfUoFmYtrYLwXipjB",
  "key36": "5u1VECBp6U7NNJHYfwYdQYNWW9piz18wi1ek72BaPXhAxRSmsvXaK1EV7rZwf2uZCFXrRcpq2mWqMg23mMCkXnVG",
  "key37": "22BohimjVp51pHZ1zNdrhAc3knKnXUA2Jq7UBLSMmXmpZoHNtYSGZVodvaegtBtGpSz6Jeyw5PptDqiT5p4ZpQ4L",
  "key38": "2Ybhpk3HAcdMjFn7kpvuKCnemeGtUyCgr8oNaBuVd1tJusRCihcyaSVUwKa6b8wgVptSotAwGWu1ieRtbUdgDrcN",
  "key39": "xErPrUDuXEBMv3Aoe4ZN38CqmJHPQgojsbuKCyrMGzUk8Xqh7FshiEWwUmkf9yaxxKkN7Fqt9vnkWZLBeosEZ2q",
  "key40": "3xr6EUCYtAZaNT7Vbgy467nJJ75gD5vKk2imvC5rT6tu6jVbmR7WywfJUuu32mBw14Cuah4MqTJpmKBnd9rbNeZB",
  "key41": "3s27P2D9c84FpepBFLUQDRLgV5gGy1WhcYHLKZs2dnm2pEjAiCgh8Efr64nj4TMYvMr9fs6HMJquXQM71M7apgX8",
  "key42": "4p6fynXyuQqMSyC4fx3cc8cfWYXJmrTmfJCpu2awj4CmYa96zz54mHctYPGqyDXVwzJP8iMAtqCDaWQrgpkpAdR6",
  "key43": "2g3MMm8CGAA2eraKmZTuhY2NXbwHinCfUkacWteXRo1gCUa4Ha8v7HRruHTzc4HVPHV7sb4dB5bgq2CUckEbqwMz"
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
