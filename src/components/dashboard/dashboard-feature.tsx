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
    "46cqwU8EQjN3LvJAhS1VQoMH1ScDhfV8VXYtfRxYpyvzemt6Vc6gYrMYV6C7tm2eTaxZGurXXYXkRa443XDFTM4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31E95ZwSX4tMr4p2WMxBiwBMRq3DdqK7P4HFrC1Qmpfe9Kppj41bW8qA2C3XxnEMLzku4f5prbVw573hZnZRxChp",
  "key1": "2rEger3Qo7JRXRKmq92MkWrGotWxLLdmfAi6kkGwpMv1h5rJLvhKHJVTus2YLUvLxHEpC9j2sE6wZ64RrdkFNxPE",
  "key2": "2coJutyLkhrteRcm9KEX43WmQhyatzCT5fVvYpm2sbUvR9Ne8tQ7mjpUVQhGGgzMo9qevDZXpVBNxXiccpzBrvFD",
  "key3": "5W7WdCWLPXqumnqCMu9CcdNsnxLCQSgycSRhHN7xVoKNBK3EBAJdXPfMdDEoayKbJTZKie89em649iGfDXHdaSwX",
  "key4": "Chbvpf9yoFt3yq3gUqG6LSEfBsAY1ExjpxgCKCedtCJx61g8Q8qiFKdgifP8ZSX8Dig1JBSsDjZeTPYxi9oVWZ8",
  "key5": "62TNfRAc9T4Zw1RrsDaJ34cgtx2YbTSXATTWmHZ2ftgv3ixen2TyUGLWg8iarX1MeVb7u5eyYJwCLmBD9VJAvrFY",
  "key6": "5mSNFoyK75dFNokLfAg5hsWUU9JVXxeB9GfTE58CqTVXz2EVpxmYWDTNYsisWx8BkFkSkFUgYtkeyKzxMkTrb5Hg",
  "key7": "5FoYyJhJeqYHriqozGAzM6yVgxGtiUhvXrCN7EjbfnjqS3cDrfi5ot3eDQgA7nLs7EKxe9NWPfM71wGdcxEEmjCo",
  "key8": "5mXbYYvjB7diUViJ92qRcwx3naCdHW3TFGjjVnF98v6qDo8xp42Jm224GthuAfCavgTE6CfswAvJcHmBqYSxCJuJ",
  "key9": "3bCr9WtkWUYenN7XWdeGK43j4yrw22vK3vvK6H1FpUuFowWkjpUtyv2vxGXoxRpNX3k8oHFZ4GCEVpSWc7LrgK7e",
  "key10": "4zn2VRj47zyLA5Fhzz3vBLRZdsM2JvfB9nj6NHzRGZwGnH7ddjonm1wJdx4nrZ5ivN9YtFh19M2Hm6zJgo3JSTDs",
  "key11": "67at9wz8TC4m5vPd3YXEF39mXJzpSnNqggLZqouUajdjauPr2STstDEdMYethnENXNx6vJwoawDoAS8D9WLSzvn1",
  "key12": "5oEoSbDPSSKRhacyvt5fRpegCEBy9ZfbF4X3pzWBS29PBt6XqurbtHL2jLSPAciaMBwrsfmrvq6gKZdkCAuLurgg",
  "key13": "4mPTRnYvdBHSx8xT6tdf3vhN8gwLjuNTsCpK3WVLtBN6Hb6QnGi8rjYmqLB9dRATBfcvG7P8MdkBAWvmR3cipfkn",
  "key14": "4PWAFNXZkMTR8hLFAFiUwSovdY4Nk6Y18sNomRpn9CnD9S3DNE91LnHaGnNGVJwKgxJ8QccHe8246AQ9fKUZSqQ7",
  "key15": "2vYEN3jDJV1E87yDfByrb2xk7Ga2H8n9c8jrUYoEzKNwYcbdzSd5RRk4JzqadVRs82fLRsbW2XgMdKfnvCk9pgiV",
  "key16": "EFA7Bxk9eLjFf3iUsVF3wEaU2du2kmFC72oWtaxPyAY1hS1PakNGQUze1PtUTJzKbwSS5wrjCYXZe976eGvqy8j",
  "key17": "3fpRgrGswtYkNrjToSqqAbV8B4ztXeeXYjMLuuZPHeGdK59ffBKezzPc66dyJgiSz1c9quJwTJ4fKxsjQw3BuNj9",
  "key18": "2LzYay5nMi4vW6omKCnb66r9k7AUnTE3CGDQqavUNFVBbsvzmJT5jpUZbDcYfC4E4ZZZTXw3RwKsJvQt3QAkQyMd",
  "key19": "3ePDLzq7FdomQeiWQTDuFpoLVpjJ27dxtAG6E4tNcrstCAFDzj643NtM3dS3uxwkmfTh8wUUDxujJejfLJ42JjQf",
  "key20": "3LNiNXzwNPXZ8DwKeYRaJHkw56ZTX6858SuPgY8wrrfkHaAWvxVLtcF55Tmy8HjSgRvVTpDTPW5ozNrDRZjwzm2U",
  "key21": "4AQniaEVUMs6qZFidbEcJe6TK3gLY1RYGaFrwUT4psAzyQj2tAc3ank25wrqP5THGrvF41KULnqKTEukWU4VTFi7",
  "key22": "3cBHhxygBAtGPs77NLoD13VwTENo68TURkno8GRisWp4hyX22jNnsV1n4DHUQjBQkFKpC7CHcxkCjzYP2XjupDU4",
  "key23": "3ZYBfLTgMLfZHoLVAPL11o1M89Ded8vw1uZCi3dSpK17J6PtSrZJwFSeuBk9E8sCHdXBem1ySje6wFji6jL9cKib",
  "key24": "3xzFLo2bMS3jLnTUxNWkapTsZyzisAsPQC7HRi89mCNvaWVarBULKQgc6y7RoraotSVPN4Lz4AktVowN5u3Dcj2V",
  "key25": "3et6genMsjshTahEBWm48Hgdu7JHWvvpb59hJQ962VJdiE3Dj8Y3AXv2CWSrmUJDBxhnWBEL5iiXq7xvkSyX1Npb",
  "key26": "5bryEADdSUH1TRErJizYJxDHaiuqyuPKRqW9PAnNcEmLgQ5DZZFsC31YQ1WANWgtHhCsKm9SBg5jtqVRw42UwLSj",
  "key27": "tJ4h99N4uQvzAu6XPWALR7wakBweXim9YxcYYPK9MvD7684Uiz62TMANaKzzBzXurXAiQfpmpbPJLhNt9sE6dFr",
  "key28": "2ECefTTAuuaeFwjzzfmqfSo4shgS9hp2dNp3QBAkUf5h3Qhkcz4RyYxkH5sf3DaMWTbrmza83HDAZ34BwowG6j4",
  "key29": "5JgfAo8CqgnPLzJy8F9HBPS9SCZmXEgYYaCCmUx7z7oM3Qx191vV2T9iAVm3cEkypj1ZyfJoDMuSVqZwMqrapKDx",
  "key30": "kHLiTLG75hwDJfipEcViQCesWRfnbzZjLwWyUmSaJhzH6LhpVs5XuGUn5XFiroEVQ79VJ5CiH8hAJtHe8QRHRZo",
  "key31": "4ovh5hgtmLyx3wsq9WG753KJQ834mUDgebdoA52rqcG6roGH2u1ATh2r1eLSsqNM8AHNj9CraxV7qVrGVzv7cttA",
  "key32": "MFRfjkUBWyFv9s93veQBmugpPe19crKrxxSmwLZDBqE8njhx9C5jwBzAWTrUfeTfqZwNQQRLdFEpaZhyBjTuea3",
  "key33": "3JJtMquegzGawJUFxWyrEiSwgdym8s5rzn1m2MRtMDPmwE7Vozq1Cud5B1ToDkH2ZaE3fSRJzawMYUerT186QKAP",
  "key34": "5ZB4uy3X3VQskdKWvp5cE9BPKkFR8jiqqYVtKZg7EatJn5x5PRFtYu1T7WFoyBq17vjciH8TTAp6vGt4VMFxNGGZ",
  "key35": "56orWqLAyBdotM2HgftxW2du3igAbsiGX12c9PR7vejJHn9hfQ3eCPF5C89KLgL2iZJtoEuqgwCRA7ds2pcUqFjv",
  "key36": "YuGi3bwC1A7BuLNaaA9kyoVCmdUJzy5b5rexLiaE84aDg6mo4axLUhMkueUeKumKexHmVAFkTi51TxkceiTTWnw",
  "key37": "2DQPsLm2LERAXosnXQeGuWwM2boFKThoAGb1qWsrMcE1zZwvqTgGXgQfdzQMHvkPNRUAjMaxiVeFzQDDg7TvxkdN",
  "key38": "4BarLVGkqdkU2DhHxZdXVAqJ6XP4St9of2pa8ECNVvuPKxhhzPKiAqYqqsrGvuooSgg8xpRsSYN4HpBDXZrAaQ6E",
  "key39": "2rVDs7spQQaZ4A95f1iU6fmE3PipVDV89MCfjk3rUtZLw5nHf4i4snnjSabCstRJq2FpzZ5e5uzdQ8iGaV45nmz",
  "key40": "3Js2uQS7QC63fjERizPKF21DfstHpnVx6naoHWPJofzMchMuXdiJWvPutH2pzvu26gpk5bvJDCMaU9C79sW5sZmU",
  "key41": "26A6FMQsaE9h5ue7iveBVkqrdd5HJr5J2Te72x5dv4XJEJ2Bhc9BuSBf6QYVFgeNRG1xUECBfVPpAf1YUkkAt8dF"
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
