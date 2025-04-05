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
    "3FtUFhBs3UGeVpnUA1MUkaiMCa9m9nLiZqhW3Y1rXvMvWK7ZZhE4wX2jLtDVULP4mQ5cTLcu8qZEnUp6Ws74Wo2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44oAswFjgQUXxLNMEZCmcqQcCrGVVi8vArzAJbBPkBmWpwU5R18q1Cc3XrFRL1c3Dw9vsn9heoTxzRFBWcT9oyKY",
  "key1": "4Wx9nsdD74zWGbskCuyJZSN23JsSu4aFZY8NPEe7p9WRqjGFRri3Dei8FbkdnZZVo8Rp5o3NKWWPRbGaswZQJpr4",
  "key2": "67irsea3N6n4zePWJXwEosViwFX83XxFd4gacmuKZJgFNgBfV4SQRV18gh7ZGxVbFLsZU1AjgLnGHgLFn3EDCV5H",
  "key3": "51ZyeZWwHP8NBXhfkhmbXQTBF9PxpgkGWLiGqaN42qsnejL4JoYztzKHGUnfkBXLp6QSK2yab2qqy8HPziC81Qkt",
  "key4": "7PKEabs6VeZCnU3b23d9MH4fKoB7zwxSr5qXRYEh6HaEqxKrXBUqspK81TBuWd4nePAh8hSsC9i2L5aqie9p97f",
  "key5": "2dMCmRqi6gXiAnwJohGnL72X6oKqF3gHom5zfRvNqrHSQotWcEbDuDtSNz6AFyx1NtWqgcgSJcet2ii92QQTUHdo",
  "key6": "ZYaYgjfBkRc4Hpn91D1HCAByHoNfv36nt3H8vCcUWj8b9RZeTSATAg84X9Lp9jyFD9ceghJuTJTH7UPTHnSFDnq",
  "key7": "55nNer2kaJQTopif7GvEYtVUXULoGJQ9ewjryyuxXhqHZrHxz4LKXME2Ucd8x1jXzGrdSh2MsF2unCURFqEBp7Mr",
  "key8": "43Qc8B6PgSTnAqg1HHoc7ijwd3yK2tU4mGEiDTA3qGXyCqcJjtyXH7ipUHi8jA1rAMsaYjqYeePZLgoEz7J7p3Y9",
  "key9": "3EuBaFVHbf69tuvowjnzZbTwY4ykNVFWYfNop2vF7WvEtU2rvCkcoJ9XXhsyPvSuYUA8Ae8kG56Am5txaugHS5gE",
  "key10": "4QGzXcBj6aZxqNtJJgi4FRiH3Yms4eyzTrvoJMxwgYE6aKf9hEt91mtrL3MrpmER37z5dQdix4Lu53mS9gpcgsnN",
  "key11": "369kxBTxWRF2Ltz2HMB3ReFZJn6MpjuoRNrR9Ur7bkUSQYF6HQSX22fdb48izyPzTJDuvKWvypSaVw1ShfrkfhPk",
  "key12": "3bCAFqSCHN2jcUUA3i9KFV9jgKjHQF9J1JMc2EN8qyGu1Dqkm725eK52kpvzVNRzZpsLqfX5A649PpNg5L7GH6if",
  "key13": "3GNRXEV4BxUrwBWg1Ud4CrmqjSbSCxfT75AaQ4mVvZiYF4oNBFT7vdFU5BVAPcWBpppZ97KadkwFNqUBL8T4877Y",
  "key14": "5ur7wL29PonQuJF4pHzgxtuEVSxYhzthfqTUeDuULihsvYEw8WX5xUaN6Sj6wtNqXPi4LEXvxeKo9RW2Ub2S6DJu",
  "key15": "k3PLS4FLJyEaZNzsmHAaSR2tmX7iNaxDghytwa2qq61fwJqCGrKZnXFcbmNZWsbRuYFa1xSGUC5fFKqFpn47ueu",
  "key16": "52LqECuBR8n6HzrdagdWPNpRG5HgAnDbB7tmhP6yAgT1Vwck8qcM1ELTu95RbXxXcd27J2T7sNHpPkvcSnhB8hjv",
  "key17": "4f6ToBVBPUbeE2eHk5NggySzNHYo7tbwEVm29rjjJqpe1GDanRzLmMPuG5gbJMaUBuS37zz3AUQ8eJosnD6ZV6D8",
  "key18": "ZuzDjipBBW2SJ8aTpC1CAcbC7pjeoGucaHtSMau1zp1oGkn4p6Cx9F9y4Sty9QmB8VeayHW7R2kMDBEVZui5TEf",
  "key19": "5i81Qjwxf7rvTP4uM8nf45MoJf6nfWAWQKziWgRYeUoSCCPi3iVG5G6mSPE3k346gwPb7F51R8h7NTX8Eh5U1Zp8",
  "key20": "P95RqUHpd8og4Ks1a3NpRZ2NEHJBcimPapqhB3LMemxrVHVoXDmty9dzDLmocEMQV7VMc4bVuWtfknsxWtBD3bL",
  "key21": "5S8oosJFGudkzF9cDiuZi4qitcFP4fNtLTMuLEFEKYY2ctV9MSne9sDsk2KX25FjdSQ8iRu4XZk263ka4GyvK7eh",
  "key22": "4H7ij6XtT6AP4D7cPCTULoDo6yszDLdSfAdwJbvnGjmXSRErjLcABG5qsBFnxGtrgyY79PUKprDPS8h5oQoRy1xF",
  "key23": "3m6wD5oPnk7sr1yDRxSobNfuHH4FQ2rfYcen8yKAtcjUNNetHVDHiVsQsEexZJoN9NTvcX1HpGwGGcp52VfuYWCD",
  "key24": "46smu5D8bAPLV7D9SgzCeAhqKVgA4PSU2wZKrRw9xo8AsdzqCo2aNJTKf6Zu9RGA1aM9KqJjpC6AnurYofUpguw1",
  "key25": "5vGC6DNY41ptayWxNLSnrQ3JAJpZNk4eqPRD9s73yqN4W9paiCEhKD7ATKpfM6pnfvvkSbraqRzbkzs2ouTvBpwz",
  "key26": "5udsL13DBwnfqzKtTbB5RkfFvibML15EYDvqxUkoxRABCdoaXdH6VVFbxYheRftufKuAToFiDcMSHpN56LfxykzF",
  "key27": "2SBdzfpLdrczgbHssKNXAzRzoeo1d9AtUYGffe3qneqce1xanLKGDNUkJ9UYvGk2ySvDtoZnarpuD1Z9W92YGnco",
  "key28": "4QTqCxYW4en9CuHcumUy8Vo24A137LosVGGz9AgSqeFQq9mUA3durkRqVHyhJooFVGkokajcSWo9N82xi6jVZuxy",
  "key29": "k4yx54ZHBNAmptc1YyA88cZxsXnWCCAKv8KpnR3Pt39rEyNVTMFj1ZLWSt1G7SykHpHMkecTTvD7nhQZ3DtvNet",
  "key30": "pK47CUpqcXD4847dWZFbWp1Hfo4qo3WCfccHMFrLcNv33JQpyfme3t9Rr7NvZJgRo1zSBEtYDXwTwfhBHaCDAJ6",
  "key31": "2yba8SDzbP8SAJXY3hJFtcSiq1SxnKjSoBnSb1qFZUQ3c8LFWyV6ngxxgXQa6itNXeiHvnGUKXQRgcXKMZFiqBar",
  "key32": "2tuGa5bz5neZNt7HNs7qSh31p1hz8jXQtt8CGXbo3ey3d7B8EdGKGAN8rJftKFuUuhVKRucpfYa5RYS4qJGD7EUt",
  "key33": "Xjv8t3cWvyi3voFmTcbeNB9suzXtpNNf3KorPkGiLVhVmQz4h1QBYuvziT8QWgvUfGZns2ThdQ14H1xudLsTuFt",
  "key34": "2xXaNfazK1j4gLzTqTWsvCukVpzBpT3b8dbtQLH79gWX3Q5kLeYGNR9BKJEFUExq2B5xzBfMNNsNLPMgsb3WnThQ",
  "key35": "5KQSvhoyFgxMDahDLpxJwD2rwt82dbkWU76iDZNx4w6kzjX76G6wvxtaWNaFZ81JN8aNvtFcUYY3H5C6ifPpwFqp",
  "key36": "wBrLKt34ikw96EKk3BgXTHwiKZSy6pcUSYwZg7JgBjySdwu9zfvqKRsqn92eddeXqc17cHA3ewh1JZViqhF3ALY",
  "key37": "4o2fWLZoxWB3YiTrd8AJN7oyzpeerjqAwwbXWZpMtqEwfLAR2BM14AHDAdt3czAKG9udN9zyEuN89NTUYgLjtuLa",
  "key38": "3SP9nsYMAU5SN4wnaZrL9pGMWmeVCB4yV9MQJmH5cHNeDS4Vz6ZD3aQ1XFBySc1ANiZFUGFKzaNFHtTSUPLqP4qa",
  "key39": "4o3chAkDtwfsEN1poMSPzC27DUWWrDiPFrzKJAZrxcGgy4Utj6nJp1SqbMqMAcYUsnSZkXFBEeAb61Harw7wogpk",
  "key40": "4LXLQ6xRsNiUcXRNuumFha3ojuaQ8bRts9HADecxmEm5m81WrUZw8B8PjvNCUmzsKzEFNsED9CHo7fVEFtJgSDKH",
  "key41": "45dFYF68Mx9z1LYADknsigJUrMqsfZnNssNZzRJW1KiQhJj7ju7WuRLvP8GjWDbyr4GuBnAHYrEFbBvZxfW72uaz"
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
