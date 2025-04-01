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
    "heE2ESPC4zXJZXRMzTU17SooC3zhxEjszZ1ZewegKmeT2ZaXcWHqBvL5Gt77opMqXdMra1v1CdfWAjyEfeZpjQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGVAsMZy4S2Cwfa9iPKUSURbTQkf6tipnuob2FMYUV8Zz4scQ5raa7p62qc9eLAGJ3WhuLufz4bH6m94a5kawED",
  "key1": "AXUYdKhMoLUqzr25gf3P3d7LcB9qtPhWSyEv4HBFDuAGX2dBTgHCRPCRGrh3733FjW9DvqPctXc2jFAhs7iDBVN",
  "key2": "98He5gbakd3L5dWuvR9QNg4qeob1mr5G6qWffNumeYyL9khZQRmfFkcKKf7Z92uTXLNLKa2uLLfasMqEbPBdohC",
  "key3": "3qyZW6eXx5ZUmrKnZRafq55nBjKPgAKYPjJYnr4kxYTihP35Q2xL9rNTLMpuD1te35NS87hWCPimmAexQrFsVKGJ",
  "key4": "37GReEAn1EzGzseVr5EmAxkC5Rx6i5VnGpM6a1DUSXrTtLjEUCrNAU4aK6q2gxdQ4hmMSD9zEQjjumn1x3VFaYHK",
  "key5": "5QUtmieLoRVAdmDPaduc8NaqTCPjN58xwGESpFNT3mXqXjnF8rY8xxnmDBqUsw7Zy4EQmNtoQ9yWDHJJmReqYsTP",
  "key6": "3W8QMs4PXCNKNuNSo1EHUG3dZrRABX5rVmRkfuzQvXrmFzgsxkyRdTFkUcTxuPQGW7A2ktcbX4ZxRyJtCjxU9MHK",
  "key7": "AHu7CbFRT9dHXAFTfz7pD65FX6N5UXs79T5A25nUBu1qUaWLR1Rohykwy5HS8nLFFYoseaKAxbrPCt8rhbNErfM",
  "key8": "3sm3GGaeGXJADLB7qgXumTMFN7bPXZiNGX4wxDJ9KyYZaNZERJbFkoAD9Nmu1MKbnunv5GvnU2cudzZ9teSuEVPH",
  "key9": "53XfrsZbiVmTNXR1mTHu2qPsQ5yCLL1Sqi4yxXpzFs4buVshyBLbPhwgMBUoXoFZKTAi3WpZcokMnoa6LwGA6c7N",
  "key10": "5puZBYGTmWuZEwiHbe7ASq33opwyCWErF7z5wCfVZStAn5FkHf2txjiCBrDDW8LmTtbeZJrmXG97RFgJxThAsaJ6",
  "key11": "5f76mbzeo1bMcHpGgj5VxGpfeaMDGD5Df4ihGGRQw2zrUUKiriSc1HABnkVoGMSnTiJhD86cUoTYcNarHhof5L47",
  "key12": "2Vs6G9LZYnttiR2sRSP9CA5B9QAHvyZKTLswnzhteo67vcrxyozbmCG4bnp5rMcrwUQBX5ewVbptpZJUpDVj4RVA",
  "key13": "3hsZkZXXNbfqbm8dUfHjKsazdWRWynL8ECK4erjoRhNvEp5goXsDaKmkNMfM5UBVnp64Q8J56FrgGrSMVBqtVi8k",
  "key14": "4Nymi1h33JXPojNKA6LfNsDBkK8GQLaG4XchgMUATXqpMPqMgUaaBYDvNpXnPbDwLSPgWKKGGYvj2JA3LDcoqE2o",
  "key15": "66toQrx5PY4PqGxJxBnjzWugEYtADtN1pu6eoCrMKKYULUnVx71GBkta2r4n2BiwZGYakf5cssh4jD6RNFYxAZhj",
  "key16": "48wjDwog1zSeedA6cnhQSBa5MwTvhvhyGX3VDhjnxG7yUY56DGTeXeBNVJkXVgLSBvaWwLnQ7SiLmsvspBHiSnZ4",
  "key17": "4mTwHNrgFTFgmN6Cu1Vq7hWX3M6Ck4g2bDoqtWXjrC5BHP8vpJT3GZc8MVkS6sbrDeCNoETvAYEgtXwxACPQAaNB",
  "key18": "4hdYSVqKvV7FbTeei2tCyRCCVgRptNpTd4iANxm9ygSyxYTShSKgtFt21eBnjLGDwrmkLMhhtXBzFDzaw8RRpcfn",
  "key19": "55xut5PXJogb8Y5ETaqZM8SAPJcYogVS6VbytWGqiKTtTamxgy4f5zsxzwZcBCmXs9cSjKZ1GmGWQR5aM2gVx2pa",
  "key20": "hb58rpQbvmcetjUgLcABx78X1muWh4EFC3jmiDRcxdcxevwfG5PD68wGpoSMWQGtkYcNyEqx7paRLkB21hcHGKx",
  "key21": "36KB8jeip4eyZDEVwWT3uU9gRM8NTz5ify1x3gQqyZdmzfMf2kPQH2y9jLGSecP7wFt37AyRDzGiE47PyMJfLEie",
  "key22": "56T93qTg1iocRXRBUR9izcixcBtF9A45SSq8SuJkzMxY7Ri9tFBUScrSHyx19G5EVASAPvgcaUAnbr2uMWcyT8Ha",
  "key23": "2L3NeE1ube3rvs4dLprhgC2211fJP8gx3Dk9G1zBvpJTP969TgVWQ6UynGQfKN6XkEZj2SKvVB9zT8TqQmnVpezb",
  "key24": "RE6NewuybcDo23x1mMCz8st1EomEvLPxwr9bFEEdG9tRdtCFHbmEBph8ES1GX9WVqqASRo1iixvV4RnWXYKDSQd",
  "key25": "SVKL1izV4HSp4uKRZHBLHxtp4YrDCHrXu6dbNMuK5Uk5GNALoyfgTEiHVP5TXWsWR8qnfhY5w8gMyRpvmbXZcug",
  "key26": "KRLL7irMbWjeDCszzeEKHUNZnfQCjG6jUFzVuEmMrQCQiiypUopqiwKRyiWRzFJYj4oZp1QU9vNctFaarEiWie2",
  "key27": "4UKxuXgmD9UszzoByLiqRTzR3rni3DPJr9g3SRP4zbcWoTCWQGVQfPBhuxUSxDfnp3FwAvLPhd93432HxQQahion",
  "key28": "3R8874oAPQjTAP3a7w8Z4GYuvBJLhPUioNuiCeSygkmZBj5UUMQ4PHLpfFcGLzyaZ1vkdWjq6mmp3Ep9jckenfa2",
  "key29": "3gjsQbpYZT8C3LAzEprnkMcu9YycFS2FBfq9mxkw5h7xhmdRPcZA2LMSadYdFLrP4ypJc7QAn8EdJmJ3inobXPd8",
  "key30": "5J1HQYz4NffVHH7N2JdQYSBZUFRbNn5yXPw8LMgYoWcYjDpNKqnpq6zfZLk5RruTtor6rh2SF4aXN2uQWfhkZSoM",
  "key31": "5E5PVDuJvRrabexCBx6NJtNaT6RByUbchsDM1KZpzcDazsvTuLoRkRA3ZQtFksrMXuEGXCdquN5nNCMhQJCcrb6u",
  "key32": "48SAex4uikBZF9fotTSRH8DK4Y2S2xPS4hW4gKfoQPafkZSVXAQ7Xh5TsQ4P1h9Gs155xDahRCHxPYNKALgdoR5i",
  "key33": "CRnbLn4UbTw7rmMUievaEsQTSJChpEmScCTRBdY4FUNcnvucMisYGUWCCedKtm2yVppax2h76MZC3SF4cMf6ecY",
  "key34": "5pUiW9PoN3QCanwGAgETTgbtWsMwdFyNBgGFN27wUGBpBRBk7s2hiCJzKZ5NcniK41PfPh3MRqENULyazVUx26Mt",
  "key35": "4wAHmSUWuit6tzf325zsueXsj2cVrHTUFbMwy3LVrW7zjhFp6Rhn6BqQkeAKqThU5u8At7zoy6QWHxT4Pk22U9cZ",
  "key36": "3MoQTd5M89PKVMQSLxTXpJBbVGdJo9afxm7KosMGzXePNdMRKGD2Pbsn3juaPKbGWHcn2fqUruZrUanLPhZU2vpH",
  "key37": "5t2GcNLsNs7CwE8qC9eiQ4Y3pcY1ppVbfLx6dDTPMDaEPiyiPwuUD9MLZp9sZo6rMShgQxBtgo7h8sDYSDySnfEU",
  "key38": "4gXeJzZEx6AkfehkCARV8XqnKiXzieuHVAQZKMC4sCfH3Yd9JVmhV27d4o2HqD8Eh5czuUnQidUaLXfVmhsXkLXm",
  "key39": "Q7ZWrbckcQynWFMjwdqVNrJSTzxnm7UGjmiUTKtFsZYqiH1YiyvnwqMjDugHJKX9Vctx9LX6DYoeLJVnU7cEpUE",
  "key40": "jLcybxVqkYoKdNHpjTdHHHQ6W4pmnqrtF1pYhuYjtukYjjEVNBbAk2upYMrPMWpusGE96C9S7tqse2PLx4PjExf",
  "key41": "HKGJ4w2SnTx6ZSD2bZ6a9pLCCsk39CJKre3C2RB4z9XT6y15BnXYyhiMB54zVT3cvsgzk94NRkgU8zN5djHLrkP",
  "key42": "4LDdrFxAWfDDXp6euWTbMAN16KkTHat2pq8ooFAC3PognPKPZhKemL7Ww5DrinHBXSe8h5Wn5bzqZRgYk6im7FNM",
  "key43": "2MV6tUBBw7c2nEpf5iLv36jQBXqSFrRkd1KWGDMSgtDf7FhNXhuh68ZnuwEFsAkt9zJWDADLDt26jL7KtFpqUiVe",
  "key44": "2qMriqPRT2ByNLqdmBLttbacnF5pACxY7x3nRUapBpFPBypgLRqDiFtREDCFEUXBmSaEppnBNST3YZrGytPaALN6",
  "key45": "2SBNb3F37KMdQmUrjKoteVd62QhTxH1mktEfq1vNHVBREJa7mmzCbGRWPKyzZRLkf7XpKPE7o2insQJvxfxbwkUS",
  "key46": "fJuQhkb4GXBRuqFfVMp9f7q9pMtmkUDYTV3FnP5uAyX52fRX9z6DCtRLhdjbNSCinZTQXAHFk7mDpxQoQtiTPBr",
  "key47": "44VqYPYUB4jBD6b1tsoukKNe1osx3ut1BoG5r58qM7WpJQnVhVYFzXoZQGJLHedEdSDoMuCfqiDt55mYXjCEEwBU",
  "key48": "4Chc1sq2JFBB1MngwaXdwkvapBxCU3Z7QoK24W97JQe7CYiP3tx5gPirLkeMmakMTmLG9qDx3LTN9sjfJt731Ljy",
  "key49": "JSFkWe57RaqwprfvA2B4Z7gLQ64mP4GBTKHv148knbyK6wGZE2gmW1THW97S5V82HcJciaeZ31X3RTpW1P3QJCf"
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
