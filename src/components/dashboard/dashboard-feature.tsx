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
    "4tnNjp17gSuFuezWx7CBD3jMTKAdG1S5jLyYgscrR6idUcPhPFFbY2oDxxrTwhnw711mMpbc2zkmzj7omgkSJxnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdGPDG7bECQJ6nTuD61jrW1CtyL8Y5q7To5u3CeGgdnvqUeGUHDNb17L9dYe1Buy95a9y7FwdLxzpnsgCz5mhjT",
  "key1": "csBxzgDWo7PEZUuRMtRZzVeovkxT33y1ZymUJ5V86x3H3HjqibTBEryyoEBXhgcXbQtPqeY2VYZvJLe1pxLpY6m",
  "key2": "c4n8nUXkGSp9JED4zT9X3Mjy2PhnicQ7nH5T9pUa6DFttyPa4KtMCD2ZFkv3X4X3LFKhorVegdY9GpVjs8AfBHK",
  "key3": "5DhkRzPprPbe1AN15FXEB8upNCLx8Mjbutih4ma2F2q2ynqPVrfUuMPdPaHSKem5Tyowsf9KqYWY8oUHjSXbjnam",
  "key4": "NBr233v7ZqjnjXh8uYN8KbJQCh3PUZqyRvdm4AhY69nqpTTaKHkvocVUzQ7dFPrqHnatcwPMdxRBPVQhASsYfc5",
  "key5": "4AqYUjfyBRbNq8wQuziFmd76zYpowbrCKTPpfbMKji3pRzhsznMysgnKQtde7cVTu2GSNa1kqrEqtXJ512j3myr7",
  "key6": "2sxZbPS8641u7MVT4nTWomMKuD7J1bimBzD2fwz96aoBAXuwJtMN4tXwXNVpd8ta2wf2vQ18jNddF6RjEbvBB4jp",
  "key7": "2iSUNxbg9NXakgoRTwiMBBtxKXTgv8FhnaEHdhAcyHe43rnTGTCYCJyfXaNsS4Nbv86ngH17t9kxtmyQiMd4Dpja",
  "key8": "3okt7S8p7bFVKS8SUsrZLS7QNmvQvNyyKMKUwQ74smwZDzHaMcq3DDLhvrrZy63crFzMrBJfWUJJLBGuKW78Geob",
  "key9": "2dE4VfQyXiLH76SgPP1Uivj1qUw3ZWZRwsAs6KvNXB47tvSHMCva4LHwLDiyp7oEQjH6ycCQBsiCf6xmDkTFY7tJ",
  "key10": "pCfwLeNetvSThNgUd229q1G6Viu918kJCfck7xYL9ZZCVagHuWdMaX65JFdcDMvDam9kKKLmamdyLA6P9sD6HL9",
  "key11": "mzdCSUFdN9HRFGrLPAUJBBBV3pzbAoMJ7fZD9UU9kn82PFhJBTM43CjAuZYSAtEGYf6gx11NtyUvg1wc844CE4A",
  "key12": "4tFhR3k2bSeZNB82fhSa5E5R2uSQBfVWuemesEcYKHbufBMnmVypHDYeMKtNFwvDSCfjHexGg1S3zstNuMqP13QN",
  "key13": "2zgSdKujSNpYttY2U5w7ixYTtco5Qt66gwph2gz5kCazgrwxMuM96c6angz2rPDTdkyMVhkB2NDX92sucbuS27Ex",
  "key14": "2GJfRSnFfuR6Ls4Sinsor5vacFJdfgp9WXG8GVvKARU9iGNLRVjmdcgyTBBUWt1RVCwyDut4fzxSRw1M8bqskREX",
  "key15": "5djaXxBUdJ6WibaX1Kv2DBtXm9PNNvfaeVkRzW6oVoRBWZwVm1wzdjhRp4SH6fZ9tAPjc3L1ZvPJdMeBB6uRiymm",
  "key16": "3v71pyiexBgGoiYYDF8mrV5hUhPqomLBPPuhnQW7fvn65A5Bm1gFHo7FFguGy2MYUpJaSqwqLtMHuzZ1pz5PdWmp",
  "key17": "2FD7TE3SjULDxekNYuEesbk3JML3mxSshxktE4Q6fi8scmHHqJXGWRCMRA3RDLZw22hWxpbajLgPgaNnyHunTJkm",
  "key18": "3Hh5WYNRhqdrRirvxba48kn2uGtqjNK7FP5QifYuECzY5pZASFrPffvDLWSBPihphxhJVd4T4zZSHHuwJxSbvuXG",
  "key19": "JXnURsGkrw1ecBmiXfKs8MpiEPLRUkAsJ9PZCN53yY171W6SBpKRDnGR6hWt2eJsDZ7ZyF4oCWbK1ECF5BxawGh",
  "key20": "2JGVw3vGi5RfQNQWb4kojP5qZxChB3jQDiz7C95QN1U2ZXVxLZnWrEWkg4YMote8yjk5uECDD5NmEfTAv4LVraGb",
  "key21": "59yNJR7kTXnhnMPVkjWAAgonG2WbTqutvHq1dUdSTu6HHk2V7oxPxyiCKvTs2i2BrZoukcjhBjbg1Uitq4bjEQKz",
  "key22": "2JZRZmpsfDdz4Uk1WUPifms24yAxStN9GUSwUCZzPq4aUWzVyN8jeQTCRtQsGrXcriMcBYJqShxNPsx5XWqihLCJ",
  "key23": "9hNvbdn34rvgWdszL1xTxhDkdemY1TDX1N3gUpfLa7gsdw8tYfpXKs1eW577YiFL7R3fj86w35K1yddia2mUf3y",
  "key24": "2dUtmqMCgssdqSzz9R9EyUs4CkCeYMxi5ReiMSHUCefavDKppSQwMmQA27sFcc7fSPBUMAKb4zASw8tzHaTs6u28",
  "key25": "T9zHDTZtaDDLP3qdE7rJUcEbaXQZXD7wHQ6H6H7PQMiXfQLRN4NysE1DsujPc4v8E9a3zcGcxqotVNEnq6THeZ6",
  "key26": "3fEzj16dpgyevMLhVKSG72f46o6aSQptqiuVrKcx4z6z3Yhb8NyybYo6FQs32qQ4trnHWEtsDNu53kHYUGKi8pNy",
  "key27": "4yv9Hh1odn8qPxB7BtNFQyhSPvAVz6HwrRQkDDicF7g8eg62C3uopAvTx4nP1mvWKJVTMNi5WNKtTZFTFsh2oYNY",
  "key28": "JrUmd2K2VoioEUdWgHKCU2JwBekLtvnEbR19ANrrfSb7JxpkKN8XYc6ZCR5Ve1p2WfRQkStLxcTwu7hrCsthLWz",
  "key29": "3kcjSSEzfAWVadk6wtrRWoxsPu1R8U8HBJYAjaDA6Xc8Gx4jFcXfTbpR4fFSnjwao9D1kDDH3KfAf5H5KuKPhqXo",
  "key30": "2ZaSoDB1m79gUygMLFSVysZvyDcTKQr4mwQW6bAnoWWWYkrLXx5xMAdM6jsSpjcXq8UrN6TTj9pua2hbNjnb5mNF",
  "key31": "5oL4ctDeQKjFLGBEyJ1u6cM2vGDhjuqpCiyXZWyprCmimwZoTZ6Zr31KificsGkSmafESk9manHTfCrBwNt13hq9",
  "key32": "3v5MJCXWYy9LYCmKbKcr7ftPBzZ26NLuU4Wzx2yTs9bbunKerixNcuRhWNrRvQ87A3j5ciV31SCcwZ74XQ3znrsZ",
  "key33": "2y9H4YcMDtfxW94yionh6QvrmsZ9mcubNdPSUqkboLd2GDQZUfGqnuLvveDvTcLsA9kQX6ded5xwJTmg8xTPAoKZ",
  "key34": "2XpFTzKJvwW9GaTSay9txQEZB6qecj1oVtHEmaQoZWxUuVehvpV2JLbmxRMFJVvkxPFUeHUs74rw5tEXGvnWopns",
  "key35": "5AU1UNTWyBpJfYP4xW6CkPMGBAtmXqPBb2jCxMpkFi66ud5AbC5afUnAxmyN3JaSiSei25FbqxBaqxXhWxBPEBri",
  "key36": "VnNyknGMuRHdKE25k2HyNmwUKdDYqWTsZr6uBwJ41Xi4kmeyKq4V2kf8K9SjFqkEbqkVJNBAd49yw9kpHe1PEqn",
  "key37": "NqPr54hapjxHDgtcCgG2dSF8JjyWUb41AKH2m2mynqtHUtMtaLygDLyBq1FbYnfjg28vZBfTyTbX34ErUgYQZs4",
  "key38": "5tugzeYXKUNhpxnaqkMdXrBhze99qxQbW5W48an54X5hrukEo4DSPMLbxRWoSRnctMpSfL7D5Gmcdry74oD1n19A",
  "key39": "37bQN336grGUmdFuDiJfjMw8Gx1bSJYmkLPQmnAzMzmwELgHa3VRaAXxAHNKeXGvMe1bsrhGfZPZvZDMf4YU5yp4"
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
