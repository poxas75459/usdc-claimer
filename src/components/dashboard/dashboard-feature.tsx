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
    "98iML5S6uytrEwuz3KoeGHv4V8Kb3JDWKLbcA22t4jYrXbSXJrLA9uXYZr6mFEfdbsDyjKtFrc6J8sgAdBNTfbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jknT4zBwrNkEZE1VXVMGRa9bRdiAkoaemyJncqgEeSpvA68g68TqzD2RKakQhVPEKb18AEQEhqAvnzwXPJecbAR",
  "key1": "2xhbKXgnRryrSyCwk9VdMxQHW5dME3r9rZQmFLFzS4c9WR9gyMpVW7cg6Aw3yi4tmnAh5QNVzeriAtKaasjXP129",
  "key2": "3FZfBYpV242ej6Y65WgJnP7zjTSbPo9XERZiYiSBUks9PgTCgbzdditk62iUrFVoJe634hBYjeneHqsYPGnDVH99",
  "key3": "5gBaRNPiwnkahpeRvuLK68AwU3bH4D3dPRQMZBE82YvbdKuLMfXfNwkfNL3K9UWNdTby2y8GEsCbPyw52yhSmiUb",
  "key4": "5XpiXbte8D5dMjY2GEsJJt12JYEwm6QqzzNXZMVgSvhBr5W4jy422PgGEgTuHvhTJLsky6JfjyJQ2j8Fao4NYr5L",
  "key5": "4xs9Lavu7fZk5qhdpChxSPnPo1yLW32fguNYMPox6Ne3L3D1QRES63rUKZGW6euTRcJEDNTgRirNYU631ZNJ6r7Y",
  "key6": "4L8fBGD7LrqUjtiLuREetZS38jY8GuUBguteSqgFcPFVwXyAkkrer39pG2H6rhZnCtbnk3DUeFu2JK6PtEbMUj6p",
  "key7": "38dr2JD8GCihUTfpY6cijpesmSfZwhZvQpdUuTBU6pK6CCSSHq1Twrh8Vnk5mEJhPGDoZsmDqXxgLrqzQWzJTavW",
  "key8": "5grNUEV6XkuKKcNtaRD7wBUgbzM9dWht8i245Si9rhaY8XNzvLVx7WSm6idKQ9zFiZphonZ2wFJqKWWfNXtcaAsc",
  "key9": "4TAWWMzrxqK6pmcnQSrZyLJB7fs48gHjYhP4Ln8g6aVKTnan8TgDJ8hPaUwxsxS9tPk7ix5BQ26hqKRoBFzzqbZw",
  "key10": "2341hUCBwhjEpYNjTTWT6tFVnT1JqNQNZCGkG4WqyCSJhbUkhxeJBA6wxRcvBmnm4eCiKZKMyoc2wAaD3nqCPYUK",
  "key11": "4sSB2mkxduHKJmSRFtQ5d32esisNzdtKh7W9xV5M1VbpHod5MUKSWbZh5gvHk9n7cXzixMPBXMuvNZE3Db1fssFi",
  "key12": "3v6xe67LRY2FM6XkAbvBeB9QJhZVGf7k7NGztnDh3AGsuMbM5xDyAiTQhDuc2hJHnir5VAQoHyjQTp99F8RakHQ1",
  "key13": "2vT8ixVDVbcqoH7QkoGPwTYMttVjXoiE4qSY1rWQzvdCRPd5v96eAqLo84SyZ68EB6UYhCML1MGaJf91na8kCmpX",
  "key14": "8uoviBioZeb5hVdMYWn4bCKF89uVeJzSossUjagfe5eReBxMZe5XP6gr8tkAjUosgemiNQayVBLQaSyR3FujfLW",
  "key15": "4igAKvoFNnY2sGvy8anYX1gVWKUvj6wqzR9Bt8Gype4RaKyRDUkYZS5xKtHnyrVCwyERiDBKyjBp7AyHW5SRdMQp",
  "key16": "4VvNL43Mn4Hid923abUakApiLUj3KNL1YWTLESoAu1h2EvzWwAbMiS9uh4aPXzkpfYqC9b3wfr3KDPvJEFY8oScP",
  "key17": "3o8CuK9KhzcrBczbetNDjJ3PUt7giuJYVthmoqaP6zwtQXeTdDXYwgZ53TtTaczs6axY5EhhhyzvJkPdrhwoz2BD",
  "key18": "56tQ7q7drxqe194Xg2ettLm8LAJRfyhohVJyP4HpKMDxCx14iVwFmGNomPqJ9wNRjPDS5RsNfP4AuGTnawty6nAi",
  "key19": "3CfEtCBneXkRgbmVF9Sjs3aoSryUKD83Tb1nvuvXBbM35YdAGqfSdQrwB2xSENN9RpffFfBE9Yt2bg6bi2dmSE7W",
  "key20": "afdzsu7znpkYNmgThbYxR4yMc51ozV7hMqvF2sYyE6wMNFxjUrrCjkQZiDg3wkNfXx7nmHkjCUBQVW6PvEP1HQd",
  "key21": "4vgyNCksPWB8GYcTw4hGTd8v2G3NZC3NJ5CEa219qM3y4bHSpqHCV9USAKo2ZwvGdPdbgoAZPnFT5n8ZikvLD6PW",
  "key22": "d4exPHjR784xBQKrrcqTWtWgYiJKcDuXYV8fVU71R5RnZxgCGZqf46D8UY3WKBEoHk44ETAcNKKz41F963NEtBx",
  "key23": "2xvX29tXVQQ3fJPLF5BqfRY5QiTyurk4GiQKdjrSxED4NaTbfntM2UXPCizZ4ERBfZoioz2YNb6aaaopkm9vDHeG",
  "key24": "5th416cr37Fa6jy7L82HFTFMaFp77m8ApqVskrgmpqNiqtqZC5kDzwLmCiaeAWHjkyaUAq88J6WNLr1Yu2Yoz395",
  "key25": "2V2GTvxdox8AT1cwvPCJ9ALGK2Mu2YFGQKnkoRGS7wYECuSBip5CnFoaTJVv7yPzyWSTqbTS43oDVjaDS7U7BZx7",
  "key26": "2Gj87qbAn1ozGcJiD5XA4MGm5kzYy7crwZBmetivLZudS84sA2Pz3MgQCj6NajWUWwyTD5qminypxaPmb7fWQKSu",
  "key27": "62tNAqvdvoAbCFEj1VXTtmPzfkpAEMsCxBZZyUCrkTysFfnKk2mtoh6fMeR3J58bNe3wuRFLV9ZSiHytWvPGogZ2",
  "key28": "f2pFRMBpkeWqC6Ua8HwwGAbMArw8TM5xrAbz52GmotHXbS3mT9GDgj8dmXpmd7iLHfyfroZcg4w8oGFy6Ciorgj",
  "key29": "2LQokYsTeZU5Fx48ev3CvLZkfnhpAJhPXFcGxvKcSvJASfgr9kscWS24sW5h6mjHnvJ1idcGrUXkgXWzVZC56ws8",
  "key30": "5e9zuJsEfoSRNbX4Jfp11wzqZWDGQrdy3WKi8PSJzBdyWiH5jj8bUf3AmFoajnKVwVH4uw5s1iQ6v2aXqZushjae",
  "key31": "3UJPi69VZUSpygeW542AGLRJK9ABu4NbHnCyz3M3v2hAmcsg9mXJJEWnAZeJnwEAScQ9iVi4cc3osPfHEeDFRhUK",
  "key32": "3PmdgBtLk32dv2rn764cEiR6qa1LkQq31W6PUMfgR3VUD7qycNnnC8vQrYBe1dVH7rhBRxx28TCEGaJfUGxNsfbq",
  "key33": "4Rj4z97LVZ2ddDwqxpjaCTVxzTbMntwL3XmZZws6cALE1TinGYN1cWoSJ2KfPV3tKu7Vf5fhER7qDNhhi8Kq74q9",
  "key34": "5ixxv2q2AegMrpk6z2nYgAisbFJW8R483dSRnadDk367PVsF4o1t9Z4ejNzwozuLVHVzaLtaZPYaCroydug2Yhfz",
  "key35": "5u6Ce6jaNJnNgRzQfgNEDaLqgoFDSbYozwjNkvrfi123DF1Ji5RdgdndaZ3DLxShzNX34EmLcGJtrTyDx1orjeq5",
  "key36": "4TbXuC8pE71LBHMZexxKmybabwqWJrHMDwoB1Cxv3CyPBpChF6R15Ab2oNRtXkPrxYJPw5BjdNTkdnwHJBCQ4v8X",
  "key37": "SnU1aKJQuxJvFK8hUsDNCepYiKzrk8jkNz6wz2nrGfcDNw36EYsN1JBETcPdoPJQSX8ybhRG8tQZgHGfuDsGEev",
  "key38": "KpJ5CkLuLf3CJKaoJt8RXFSm9DG1jULRnuDjVf9kB5DBTVhX7TysYmfaJVQjV3JjCdjP5w11kFMSCySA7bCEqpS",
  "key39": "3czjPKDmDvbJ8wqdvtjL6vQew1H4SW7ixZ2YzCtc7B3MTUVAr1QGzimXbSVh4wUoz2Qmu64DzYtiL2ykv5MfNiDg",
  "key40": "2oPSqHYWwS7FsY1RczXymyj3NY3Urjzz4SY2zoNmg2qNLKkzrpjFMr5UbnJqceVrpZfuJF7qJquRwhWJWW7kphuG",
  "key41": "3yRWkqLEqqihWe1aQZX9ae3LyijnQbF4g39yroc5SNSt5PiWsy1QdxA5piaUJdxt7TJaq6HM9zfFcR4SXE4FuVBk"
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
