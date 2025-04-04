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
    "4kTrBjE3woUb2mqc34W6Zv2XQEPirErPk6ndzb7U5DMLS2sy94fPuRDpxTGRWdVdEu8FmmLzn1dy4ytvxRAidvir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PG9W7s273UueNs3CRyv9VUYb1ezgrFkiZVd5HHDzg7GTD1UAAigZzTsZHa4B74dMTVomqmpyJoCdAvvsiefhBBp",
  "key1": "3XzEQJgGF5sfkCMogau3Cdfkg2SLRYU6VUW7MhsEVEdRmd5acwVXzg652sSh98bNMzyZN2aehfaBjDZW2p6i4uXg",
  "key2": "3XVG2hE13hvB68cy561bpqjUxUPZoJ8yP5QkhQYizdqx7P5AjaHn4Pmr4XAZEZRM9MY6tnQuEGCQDBfGQ7En3y7a",
  "key3": "4tnoXPKAMXi6vHku2Hp6pRD88GUQRVjCxch7cbFKxJHyhNh9qcMfp377iEfpHEM4xqKtyHSeVMYBydWJGJr9E5LE",
  "key4": "5oQZRKSubkT9DTjWsSHTisrasnU8r6CTYiV2yWMfrjGqqokisoYtW9XSFKAnSe5ztBJBgcTA8WtK7MwVrUhZSFK7",
  "key5": "YXf5eVe5E8Q5nBtVXQY3ZbVT8K65tcyxkCKAGhj9FBTVh1znCM6PE1s23aA9pu1RY5Fxa373bxcGhNWykEN4mjs",
  "key6": "2TXL8sbty2u421cKNMdN4DjJKvr9B6ZaYVDYsAWomLX9gdC7M8MGPSDSffzH9r7wWmoVALhzcs9pPqfne8bF3Hq2",
  "key7": "3txMu5XbjhRvKvXgSRJ8qrJxfMbrc7CbtE6nmXX3UnRpXbne4Gs13cgZVVt5tLTAR1hmz9Qz28KVia1UGrDhK5cD",
  "key8": "4uHZ7Tdc2NMdBppc6LxyCPcB3VjiZAPYY2inaKjWv2vj6ebHwGx6eRyudvcVwaT52rGRPv1wtWs84UoqUnRAeonj",
  "key9": "5mGnJg2a5sPtsjpwiW4WAA4axvFWyGWz7KKuJSZ22311T8hgmjBBLmL1vFKmprD2CjgLUfEJHxArLVaLXq8cQcRX",
  "key10": "3ABTok3ogB7cusrG47MbHGSWUQst6g4nfw4CB5rwWxYWdiCqsFB1HbuKQ2QTubcb3nU8EXqwTwJKHowQPaCuQca",
  "key11": "2augoaTvBknw7ngkxEQzkm41thqtPz2vqHCbCBZ7f2vSRq5AwHyeFZD9pGeBKPN2vyuUvJVkiJDMVVV1W1NDTWf5",
  "key12": "8BsDEDHg3rzqHAu4AHKx9SXHHypTPhBzNLTghVxLKBR2MeQPJwGD7NFdN2TKAh4XCVGkyQ3dju1FU5Aih99RUPo",
  "key13": "5cZcNe52QGfAgGc4eZwJrJtgAkXAHZxan76ymFPXRecy1jTCTzSLTUUDyNgCqjqwuyoS3622hpHocELdxQT7H4cL",
  "key14": "3t9BWovjL3uxF3cJiPdq6m92dQSSRnT836gxZWXGnMSq7QqLdtZkp2QG24tWrZrZwimeGYzjL4DUaJBHdofPbd9X",
  "key15": "3SzVqRS12967B3Df9UN8JvwakLv6zarScXxpsZLeqvaLwC6ip8oeJKumExswNnTguCJzuPezDWTvkPPg2etjwMzJ",
  "key16": "5cjExxivMrm97iRJPWCRCLSkjDjCVMbZ1ZDp3BZXQ9TYPPX9oSHgBKaxZX9ogvoNzG1NAphbPYkShZmdkAR3oFf9",
  "key17": "44qUA1w7dxDFbEn7jHvQuRuiriQnL3m1AP57iPpM1s5KyUQi2QJqiPdMSCQBoCruuRcY3wtzLFBgdUq841LS3Zku",
  "key18": "4fggMJfKbSLYS4MUMagAzw8U65Z79Jvunv1qWR8WqcKkRhhBsgQTeraVTsKdnGduD6s6DVHiXeUGDe3txaTKUuc7",
  "key19": "2d7YBmRDCdEjNf9Yy56UJTiPvux4kD6SDyjYZ5ekmL71xakHV7R3s8PTLYiDY9rBs28mhYL4RKTveTFRaYvGBMRt",
  "key20": "Z43FCa8D9hYSVSqFMaD8pnkKTYshYpcr56At6PiGozoYHN42b1wva1rfoEMMp8koKm8wtzsU2GZfMW3WM6RSHgm",
  "key21": "pEBmF9vAeJ3qhGEWQ2qiBWiTq9Kk6US2ox7f4PiAVpXsW7xnGyt48aMoamboLgg2yXQcWR12Mr1c81N6G5HqWo1",
  "key22": "VB2DnXXx7dGGGnV3YwoowHKkhz8erBewJ6LJaeUUMxbc988NnhJhV23uV1bPjLxuc3TU8WDhSVuQttwULY4F5UL",
  "key23": "2iUivQ3PBtqDhCY4QvscGHiKafP4Q58SXSHq6YSoaNgGBqnMGuFhLHuX6n2aqUcYwAuSAEGDFffQDeQNYvGAkkEP",
  "key24": "2MRFYNiDh5kRrtmMV6Nukiw3q9PBaAQzsqPzPf3tLQbXfs5RqAACN9KTu6X3v5RaeCAJYWeCX4PiSgZzrd5UfU7L",
  "key25": "3uTka8Tjy42jut11QdjfH883wRwUdnZXzLTxZNfHgdLszQFvxY6uKqWCgApxm1PVwuzwNsCzTD2RQ5B35eZpgCnF",
  "key26": "5xUi5xFFjpkaRou598Gv1vxKLfhfmWGweZmj4UzM88v3dgMpeMqT9EcPcEUD9c9PQhEpa7LWNNGXycwK1qd2CVnr",
  "key27": "4bsxwc1MZeUqij1mfUv4zZDjiSAqsC2sKyrXW1R5dSb3Rjy2j9a6bR9oC4A1c4GkdorBV9cFFJhw3JD5MQvv8Qyx",
  "key28": "2oyQmwBfuDzr8TJH7R2hLh66WtTth7kUE5CEYwUdye1CKtUh7bi64toMWvSW9RMWzVdviRM6DRYDYcsyeh2To4Qh",
  "key29": "5rURoaCNStZeZnkXduxMuv1sRvZmf7sbFf2cGb6dz43BzbKiSyN7WVnq3pjsVDLfNFD5TMU4VhAwDYPZF9me9pGu",
  "key30": "5V3w3DpG8xLfbW2w9BV3p6Fgz4Xe9nY3vxTp5XUB5TB77NKHVwzTSzqtG7AfJ5qEGxTo3L8V8in51hZUrAv5MurR",
  "key31": "3PveRJKKYDum18oq5PrZGFwQMv6Nwk747D531ZSrr21iewjeBidDXHrupJDHNdkpyd2oD1tJ2g7bZ2SKua9qGCqA",
  "key32": "2xFij7GjoX3ar46WHi2ivoaTS27GBmaZwttdbQ3wk1ShQnXKWMcs2sw8PrzAPtDZfv7SvEvsHwu6qsGxEnP4QmD2",
  "key33": "3RRwY4yFRarYmRNeGFYG5MomW1RBH1FMDYicZfGYTwzKsYXtoPdaQVPEjKBkBHa9dnsa5WnJR8cxMjEUPbyGvkfv",
  "key34": "3mYaBSM7RuGHXBr8NHsgLM1nx83T3jsbqVoaJX5guFuMKup9ruLZcP8Rqs4zjsJ7ezYUbwhmsEVxJ6zL7Z71hCNQ",
  "key35": "4r1CupnvpBof4XERN2iATqkHzyVs26yTKU9E6P4vRRn6SZCrEcSLpkXAGPFw9vvgzfareaXKnsrYCgKKFbytREcs",
  "key36": "3ciN1Z13woYnjpp9mpvncYihemGpDpYoMaPuq2Bxz4Nf8vPsZk57f8hQMcdQZYUxRiSJDs2ccDZPVQnRHaj3EF57",
  "key37": "66Yas44NXhh5n4fGwof2MtN74hkZJtMaAXJmk6j4UU6ER2CwCG81274KxHeDzhk8m1R9oTwTKEsVmd2jy4CmAoX5",
  "key38": "3GzmWTUDycVc7si9C4WrCP1W24HzGGrdwRXeQ5uuPLmCicme7hMsDxHazhYLDkwomiDo4FKUz9qAHxzswrfkSXxU",
  "key39": "2qrZWwH9RUFJL8sPYS82foaxQX5FW2VYm9FsjZCEaXh8Tk4UeMbdDkRUkUsH4fmJi2V6JmPiNedRj64sEWCtXUeJ",
  "key40": "46KJ8CPyx3MiVt4Ewjc1b3wx9gVCzcAdTU66fU7f5PcFZBYZYQJU1mH2H3ZZYZnemBgJ3aHaeKLpmSCFZUkidN2z",
  "key41": "2CQ6CG3SacSKMCGd49if3L1LD3GHEerbk1axPT1nQqv8WDuLYoA13qbVam6SaArUHp825D5CU52WQGqgcG5E1pg5",
  "key42": "3mjQFHNw2PhwWRcjBrie7qCCYj1aWWVdAwbhkLXBpyLJGjnRPnh6QYAkDiEjrE6LUmVwGSoLafgZt22JQsZT3uek",
  "key43": "4KcHzfLFEqZjeZkBY3DfHUhctHyWSGLBs4o4dhGiBZTgH4UmT2EAMvUkzTmyyQMcxbcLvEmB1XbNXfRTsWKpbTtB",
  "key44": "34bib9YUSm6VymCpZ8xYHXrCHEBbaKi5524HdeS3ukGjZSMM3idXKnEZpByczshyGV3haUPHULwXkg2dkvMJexs3",
  "key45": "2JH5xtQwsHw74u5juYv7L7JB1x817TzPg6Zes6QoMfU1njDXqxfUBHU3oLMPdwXdym15DwGzVoLxtPkLSbrHsWm5",
  "key46": "4UZa2rNDtkdPP1fDQ4q8y5sSwLoGeGiRJczXYFR4gXq2aGVpxHFo2tbuSrfDVVQtAnLs7EsNbdCCuHDHNntAc6Ci",
  "key47": "8ixmPVPJQHbn7sv6QwiCY9NyHjmtQpfAPKKGma5WtEzWiDKh52GBnecHHHF93pWYFHWVeqrhwvN65b7UGYKsKn9",
  "key48": "4vDByJvhgXr6L1VBbFAZoUJaLDz9QcbaxfLw2MXZsCzvyVQimkpkA798BnhGVmqe4xouBvA2hQWGMLN3Ra7g8Eww",
  "key49": "4UNJtjujebiCZ43p8Bn3t8TKHDxfHfxGXxcpahcWKcBBBGdd7DEzSsDHUpEu7FFVELGjouiDZPa7LpdMGhUq8p1j"
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
