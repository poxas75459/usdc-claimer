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
    "4cokndBN2ssxiskMydgdMhF7UqoDze4RE8MQii4Qu3BR5nxaWR5QQQhFidx1XuKUXvJ2ZdaywcG8cMMaYYmQic3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKanUAWtePm2Bd2NFFpN6fBSaq1niiisD9Dk8dmvKHT4bhqVKezV9m1ueLdqcWfjYsZDGsWczF3JHGbNbJsnrGS",
  "key1": "4BZcnbJPgqAH8w2g9v32LDfwuVN6QaPThQG5ZLrMtAfFYdpfnXEbgPBzUVR4i9Qu1vcBJJ3NaFKkPbQXYEt98fLu",
  "key2": "e4BLnybcMMXGus6epSBmFJ92aabT6veHsda1B4sS8K2PA3FrUoheTCoU87Q8xQVbCL7Vn2ZoSGwKZ1FboBfEaTv",
  "key3": "61qWiKdWDt7DmHv2d2JpmEt5Kq5twdwWcqhd4hH1FeTgyp554wdTDaSVpXvHxcuJasu5VoLsiL6TVMhU9XXsWUm2",
  "key4": "2gzzYuRwUnV38g8p5R91xwzf7nd7yHuPy6MsmnXGnak66wSCJFxuTrVntssAEq7nRko2EgeKPHUQL797H8UtnpGh",
  "key5": "4wrKDHS2tSsjYxhyhnh1p5bToQDvLvQEeg7vteadMi1fELK7Lak268PpRfaGF96XyNWdQA25Smxt82x1FWmiyvUw",
  "key6": "HmsEkUDNqTo2uzhC6wfXjWoC8wn5JuAMp9R4J9mTfBFrjSyR7ZvpBFrq5xym6uYMZBmaFAJQquYLRcAVe5vBqgt",
  "key7": "5GftQbDxaqhWzdBa8WDiWjbPrsrcf4PLKnwP1xGZAv592HZTdza3ECNbUjPjJBPdyjr6JCEFYJ6Lw3cGbrLtBeQJ",
  "key8": "8yVKcoXGVhoPT9vyiU7d5ihdboDiWgwK6XMKfSnAerj3f2miC7inQrEgECJ2zetNdNcusGDmwRXCemzrXE9BkAw",
  "key9": "54MZVjdsfNBX7vfVfYWLii5RQ2vh9PqHhuBqQBt7TZndEbpv2edCu6hb6fsz9VBirExUM4HrBxxP9mGXWTFdLktt",
  "key10": "48o2QXabzUMoH8mvjZLvCwWM368zKZHqRkHymB254QWwK17dJB88k2Xn5hFEmZiGtCrWJHBHG6CgJL4MeLoCXcoU",
  "key11": "mpWVf7FQLUcaVBMvpR4HGGVpCi3pZDU292i9tfXFWZEFqGaAUCxCvVtA6rmisCxMft6sSHREQkMnPGv3Ja1Exa6",
  "key12": "4HZcc6pub79QfgebViMETLuGTjd9qwQinVW2XFznMTKf6heerzTFNwNx1HTVyvvSX5cVcb7n72yuX7yLmUqCQZPQ",
  "key13": "5eb61F1whFQ8FfSJrRjJiiL72gVC7ETkf7iRSMDPf5CKHrwiMaDJ5tdBauTm8AsQHij89J5i9BVX4XQd8ytc9cYJ",
  "key14": "3JVBTBJ16ru2Sx3T4WwW9sLuWq5NWdEzD8xy4zgDKdC1CqEpKMaZT4ED2hK6e7FhME5CRfA5nS1CqHdUpt7myMxQ",
  "key15": "4VtsKjBc8cVhbMagGAKjiwFb7TyUNAa3aTvSbea8kw6vKLrLkwmZpAMRtNejxGvNm7jyy6HZPGy9jp1TChfpCHPM",
  "key16": "2RDpb7okcoakZGfso56snSfBbkp2Z6PQeraNr1Uws9V7bu97QKQxU5ShEHfgXvpbCrbBeU3yVtBpxRHdLwdrWu9p",
  "key17": "4oE85uThQELYhMx1nGBCcwXsxx15uY63vaEQGRX4bYCwQba67JZoa5YAfDVbgpeQbn3mT4aWgQLq4p8QM6KvQATZ",
  "key18": "2irVdSii6p47hAbxpa5FLRQuBwFnYYVL6T4p6VkYuJCYHJJJi2HTT2CJHQoG9P7MB2yPjPSYufUk53t8L7KGfM2z",
  "key19": "2WbSQTGDh2gqhgurnzGmExFuWYoLgF36aZ3GFBXxLYY5NAkVA2Rcxa81xyjQH8H9CqjoCPx9er3xVUhxb1nPHRkn",
  "key20": "3vn9uDbQMMYho76sQzMAU5nzzeMAQB1e89JpJBndMTUy6E7Kbne2mFejuZtib5p4uBfQ7hHY8qG7NuaR9B4uGSN3",
  "key21": "Eo7A89CVN5YFD9iBp78kkTrfnDJjBs8uEbpu32ydqEaodwatgYP2oCF7LUnvZz1Mo2rBvRtwq5P1LSG4Xv75Cmk",
  "key22": "2RVoKYBp9PRRyv1KpTTmcCZui63ohBdUJ3jn2i7JSA6FkNt9vSf1sDWmheCdNHs2DGTRqDF8uQP4C7uyEuPJ3ok7",
  "key23": "32wrTpGj3LBuarLiJZ9h2yYBwFQUPhXk8WhpABEfJHEntyJc7nd6MaXgN8fqcgZscEzPovdabbANcMzhMJdy7tHd",
  "key24": "5HTTv3StQA95E731yhvmCGE598f7sT3A5hj5G31GRbkWM1kYe3FrNQgrbLS4QVyXKYH77MjmvkakCUy8puPYkRWp",
  "key25": "B5iERAom6jShgMtrqQnWW4pbHUGCGn1jqhDf6HmBCZNycJgRRUoft8YNp4zB6mY7iYNLbJa69eJ12WLb5uNZnPz",
  "key26": "5MJWCNEq8hqSh2iotczFKWGnfV9AnNxDu4p81ccWk7m6YoSnz7k4ctvfW723euaffj7i5rbyG8wm3yZckwRLTAzc",
  "key27": "4rsc5ZbSw5VFSXAhdGsZzjEFWUefTtbt1qbGuGTCEAZmh9Mh38kgqGMwUMyXJih9JScMdqtaL7Ab9BDx6EjW7eE1",
  "key28": "4efuGnkdZdsMHKgf9ZGvV2UtQeQXiWd7mVfPQuthRd1JPqHqjm2m7FYozY2shXhWPmjMYcsnxPvKk5C85YJYtKoK",
  "key29": "2tod2P5JmFmamPRQqe59uceFg6DEPgdTiBYsuh5D1Hd1LRA4qvwAMJxu3SSEJKScs551YDFYk7FUfjVUT1ev8m8L",
  "key30": "5a89QqL146xDc8ttedJU68n5yvj9ynsTJHy1iQq8M43uVkV7UCsrejQeu7dTAMkkF3VLsoHmCK2RVPBhatAJdj4D",
  "key31": "2PpfoiaAmcDvAELFXVSrqosqntRp41LmrU6QFgfxKuuYtNCJqQE7GSBuiaFWRrYsx1CqrkdeSLd27CFrm5B9tNwn",
  "key32": "7jL2vS2PdREt1gv7LDSHGNARRo2CzrRPeYuRD4DqYajRvm9jbiecRGYGMdwfrmx7i2fbDDGDpzzs7ranr1vjhW1",
  "key33": "2Uvb1RV67MhgS63KMF4fWjGR98TL41TiWepRy1NF7N3DsCBwmiVB9wGmvpyJxo5rYoPuDEQ9su2SemzfnhfosGSj",
  "key34": "3e3nDsYXU1qSnmJwJ3XjNJEhvgnvoqCiyQ9YkzdWAXBqcXqwfRVuFMqpb9MFvnWNWoWv82DfSyGm5qwhoDnhgWUh",
  "key35": "3tzCtMgdwzypr52ustRyoCJbeBMAmiHnkcVnhYmd4WwEAasBeiiukj9a1G7zdaDEGm8v8K4dGvLh19WXLedCATM7",
  "key36": "Syi3nmCN8GsqxDdUhU1H1D9A15dz8MgwVF2HY8BzURdepN84ZdJCV9cuPhFEWFSZxvUuUo7RU6HsNQQoYuQWAZJ",
  "key37": "CMooQnjLjXooBMRLusAggi7SUewzFdDdAX7hutJLR5VjeKqgyctAP6VmoNBppd2cLeFNfjyWuUWT1ehDmKPeAWD",
  "key38": "cHba9mMbLHgbtfTDKzacuXoPvMF6xTLAxUExukywrFY2hmFj1JQLQ3pAELgrjEogae5ganxYh6Vrg1QmjfeiysU",
  "key39": "29q8EFNnhMxhdWXJe46EUGGNLSdRzfA6wVrmUPBJ4qSA8rkxK3dhjsmSAnfWVLyQBANak7M7kQwrBqYKJe8atvHH",
  "key40": "5romAR63kcfzq5WDLdcXoJaBjFE9cwexyrpFakYZFtPQ8TyTXpAbbVKHyhJ22UbwUYAraHeRnUNmr2p7FnCmgzY5",
  "key41": "63PHcoPHcYqGqxU7GsZodFTq3ari9CUZf2csixb6JbhCECK2x9gqqF1DieZc2inbAYFRDTJkBGHLSmmAE3vZC7mu",
  "key42": "5o3g8S6u3kHyRczKikBbK6r2LAmTXSMom8Xc6neNktrSQKPf2VhC4FkzxiKNLTwmn5GpZ2TbG3dm5At6e3wChQBm"
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
