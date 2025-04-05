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
    "3H953wwQJyFCkQU2d4M6Buh9Mu9YxdR4wyKhw2Ldm8m79H2EUBFT655mXbdd3PoJgvCwKwebDVSrghERFFE9WPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRLuMF825UYw94uZRT4e7ZN1P48aWdfe2TLMgay1Vmq5326kvJ5Pvas4UUfBmVuMzSZrAcZvtbjuikh6CjSUDSw",
  "key1": "3JPSxYpFNdbyX1cHy46Ym95FgDU2q8Yc6p6t3iHWPvPw51nz13XRQ41GURcDaepirDiEqA7Lr9wZcZDfv5QQB2Hk",
  "key2": "2dbuiENCfG9oSFCn3zgWRSZuskUcst4j5mfjZmTYVFFjN1Y34Zs8RyHQ3JEmcFJPz3ysMAsVxXXpBWspi1jBGK22",
  "key3": "2g9KWmJLyUHdSVqXGSCnzhfj5SbrQQM1AQJRLvFkeybRkPfnTpE9vxrHFohZTgRUXdnbpSV2fbNW7Maw4ALgN3GS",
  "key4": "4kpKRBGfExVsitoCVuzLcnpR68F8tQcoKHsPhv7iNm92899Ku9oDvevaJYR7vequZYzeCBSQBTdoScqRRAn6U12g",
  "key5": "FwF59RVPBBj1NWUQEnvVxvCnymxH4JsJud57zA5nHaNjCJzrdvdsu6WCa6LKEzzhnn5Yn3PPqrcq3GCcFsbJEkL",
  "key6": "61Gk4U5dyAyJg1bjpqYAq6JVzXgFMa7LFSAy8FP5VCm3EuBkbuerRTsNmCwE4rrVgiH18s8yJYyLo5qKoZ52hRNp",
  "key7": "39sHfCiWJjtY2rGxDG5g7zVyryLcSMyzsBFRR7G3wbwtwJ31GDyyvwEAqtGdNe8CTDSFbvX1LARtmLR46JApuH1d",
  "key8": "5oMRXuKVW5YMxRUeAnvd6To8XUnTs55vEFsRsLChGHrMgd5g7qwmytXPGf2YtWdEpiSxsMTbtJfbEoqDyxjwonGW",
  "key9": "4MrtWTwuqvg6vBM5p4pEf4WHBPcs6HB1HP7TfLoUpwxnGgCEi1TvNCA7QagXsk1PSzJKqhYDRuRPx7qmHhqGdbCU",
  "key10": "2fzG6pipvVVywKVNmuRmJQZg36Lr4eviAuckuiR6LrEmqzNvTxPa8c7FnnG5obMVVaQVaWzr9kDWHXi5ywev7xkg",
  "key11": "5VDEH57pdGiqGvvJAhpWz2GaNV5akU5RckHpNLhnhyCvCnLPyiReC42hpQdXmR91Ss4oFn5QdLeDgN2T2ooitDcE",
  "key12": "4c7EmJ2zsV74EKzHagTmxBpJQQtWPUGnSYV6B6QXahQdoxD4uBa7QBcaVS5Yr1uD9tze9mWZhz8LThTBsTySxcyr",
  "key13": "2LH4ZV2cLo2nEYuBGmk8udWVnDqLomkPYueV2gGa6E84kPmsdxzFVbJdqy36ZMjioURvAiMH9CYtU37x1uC5wVt3",
  "key14": "28RXK474zbTJGtN9UKxahU4sUa3kmJ3bX57pwHuhm7RDBEsFpHtNGa6dmoc3V32XCQGH3X2g5jxNLf6NRU4SWfpF",
  "key15": "EXM4Qv5HstgLSmNa4bfTuqTxnfi4mF3yFB8uVB5nJGxKsrU5ZjNeXHytKAkgaYFvwkALbJkqDSt3moUd5BZnWek",
  "key16": "5S27r4Gw4A7uDGNWTCjretoCgmBEJuc5UAyRwwKKLABvapWVSuuzBSBoUoKov3GpwTjdKBtsXwBZnnHE39qmV3Y8",
  "key17": "34x4zahedtW2GBLd4TSumZWCsCNjMpBWnCxv54mhZcknWbWzZ5SeiaiWRU3GuNszCW4Cz6ufiG3zKsTcGGocjv44",
  "key18": "KKprGfvCB3o5H8p3bxaVGDg8Ti5BRjpZzLthq2gCMwJBhJyniiBX7KGQjvtb31Fw4ua76ckAocg4dk5KeFn8GBb",
  "key19": "2c5Z6NuRiBPYdeS9eurzZNbRaDWZzYQYcskqh9FKaRMdbs6PYjdAUEW1iaXCZSYydSpAY9fY2ypdhwCvX4KDmP2A",
  "key20": "4oTHJGDQtoRrL6Svya4VM6KwMm2ybMTYtUmw3YThPJc7jADBoBmTbVkUDk9SgifHSiAsxZwKXaDYXYmDmdaxB5Fr",
  "key21": "36btgrEcYdGNT4v1JqjB3BQ7zd1DB58r7Sy6qXfGNdaWZ4vq6DDeevUpDX9eroBDwdRK4bc9SAhXS7enSbSaCGGF",
  "key22": "5WtigW7oUkb121o5noQR98xzXhS6P4mXN52BDRF5JDi2Dapkfb1kGCPqjjVpUbviszbVh76DrzNYJCxu4P1TZyyj",
  "key23": "2cQHHzkFRARVupEC6CYyBL7nsYkBhkmWPmZv441tKx5MbxUZGJgeB7ZQA6hjkkRibgzUFGoc7KNMvQWsUgA6KdBA",
  "key24": "3zXSzBRKMYcx65Gm3jeJi3sc1LNw3dNr4YAXvYuYS3KpDFEtdmEo5JriRduw1weUKwq5dWhjPRWx4A49Dcijry3d",
  "key25": "4TP3xGWt1YWLfSJi1LZDovPfVWqRZm9Qpry5SGXrFgCN9pP15nhfXKNCsumj46GMJNsDav1C6ToDoxGywX6Eeszf",
  "key26": "tJwCv7vvhFhn6nUyZokHszkRDrAZqtYmiacGTWV57VR9EKswiJtHNd79TePaqbGSBcrhLU685ZYBdPX46NJVGRd",
  "key27": "4LgGeCaJXJ2yDpWZMwc9xB8nUtTZou5z2ojbScTwGEUQYDF7PZBswcuSmpUSvJ4s4zU5Ce2FcMGdT4dFucLjZpd1",
  "key28": "zYMpWazTP2cuV4VTaHSbkgSWPG5B19RuoMVfA8RH6k6WswMXvDci5b3ihwDVhgWFDwoqhgyc4qycZbcMpZuLZjE",
  "key29": "2gdo1XSFdji7xo356hcKAbyHfhofZkiN7wD2R8JbFzE46EucWEp7NriX6ee4K6k6GvtU1pzjayHNWaiLfvK7pfjD",
  "key30": "4zMPANjpWzTA1mCtzXCreDEL7697bPfFdLiDTe8HCxGzD8KXGR5QcenK7jRnALGavfb8ujCdv6MaNQCYkD6E7b1w",
  "key31": "sGhzfA4xBib8AB9tcMoDDqa2mNr9T79WE6XJUWDh4Lv2N6X5bGTq6TZqjnms6eYtCTV9sxzAFkdY8YaYMmvdLJ6",
  "key32": "3DK2wHvmWz85MQhvySJB99VyLjDFPDp7B1G8ctUMFpLZn8bwPNCAys12wLrzrpSVUYop1vyUzeKJEcips4y4hohw",
  "key33": "5gt4vH9Jj4vQy4N1AgpDXDzr3MZNERftsnBiaM9rsyH2y5uPuBAyuicJdoRj4TVgY93ZqqJj66WUmwDtDbXyi6AY",
  "key34": "3jcR2smsy9HgwVK7KTfaQQ5UjcLuRVTwaTPYLhB8ng6RbZLSC2UzVUHnYXo1krMjkhed5RMHwzy2cHjWTKTQ7Gp",
  "key35": "48mwJ2eV8724EFoKMvvegcDmUFAkhnLJCGYAiruTq6vkzX2ukJvzKqhZutyouJ31WD1jPVSJa2nCgP9uyjEX8bLs",
  "key36": "36QQpv2wM97HVTCHy3hTSd8CQuQ2VuHP4iRMeh4jxqZdiBK63YPEu7th6oU4p6egffWk2GqGqTj1Nqt1oTXpMGaj",
  "key37": "Qa6enmddX8BGhEfz8bfyBqjfj57Qe2zVs9RFVUX2435qoZKU2JQPCDkW1LMJ9F4iGmV1aAsmnve7NYnCLHLvqFU",
  "key38": "2CTWmd64XiU11BmCN1i6GktW9h6v9CLakixG1ycDN3x9xsQo57NHwB6BeGmEwDdp2C6CSCya8tx98wgGTnU1pL3D",
  "key39": "46Z9uR3AFVZxPLuAfghhVbVmsPunS4agFYnE5nAMiZN6sWynm6XkqReWF9ywR6skUtRtPYAzYyMvdESoGo86u7AJ",
  "key40": "55z25p1TsMXp97TdRMwVWGzm3iZpgyQLYoMKnAFWxxJ6EwUjyR6imZY9gmUmo6hvt4MkNES129GxP3zyaQoKvpV6",
  "key41": "3DgQLFkeyJyndpAvGVQiFgbdM1LuSSpf3vymxxF7u5bbcgoSiL1emjDbfyxmNK6mXE21tPBmuEUrsYe7agbbKLCZ"
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
