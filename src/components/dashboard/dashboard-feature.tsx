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
    "4ZGnYrhAWnKtm9w1BG2p8dBeGRWYxQfyqRdbRLvKqA3FVUit8PzHasQouaydQoT38BhpQhDUA3UxkvudVsSnLRd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61c7JNMyde8QkWFKNJaY2gvJCbuqAgoxTTeSvy3F8oFNSQXPi3KF2ygkE8ghYXmxTyWNvNnyhSXBkqKwngS7bGRV",
  "key1": "DdMQxyHxFcM7AbBhCXPuUD5w89ZLzvQ3Ts2oA3MjPVkrAMNuuJLuMDyBxjKvCmQC1dRXy9dWFbk1WUU85yWBuby",
  "key2": "2AP6qN8cn3wfgy1opkUT8jCfb81pni2N2ULrU4XVYCHWhnmMCFrMmLjVvdSnyK7Dd6BNJsoku31t776htDiyNE7N",
  "key3": "3ZoEvpKfTCHsqsWW75ZDwE84qbDN2Xr6Dr2B7JirYQZeCHGANdpsbyDJRHpnMU6cPwLuSnUWhQG7eTdJDySVSzXr",
  "key4": "55eL2RCMkXGX4NaB3mjY8RwV9tS7XeVtDyEpibGEfqGcDHwT1Y3xq13A4Nq1ogFRcQccgKvsote151irKDore2cZ",
  "key5": "52d2SDTNTCX4oYaxfg9upvcMddoMsf9KeGArFyST1p3TtRijMcjTzv6jiFNBDvcnfmFKtJ1ihC8vMao34q3CppdE",
  "key6": "bccpi5SuUA58dwPkHo9LbASZMPpnGxjBQ4q8VGbvSfemj9TVQTxzWrxCwmFwwkFuGBfLRtPQb85rC4evsjdAdeE",
  "key7": "u5sHjp243bZcrNnujCciJUZqQgrxdQaDQ5MEPig7gSCFRbn5MHnNDiQ9ZTPB1stf6xE4NLdZDpdNsWiT2dsCt3s",
  "key8": "2EizjXM63mMVgEaXYH61PAXpSvxwhSAvFosi3tk2XtBQEwYn7yAUrSuMHut91m5WQmyNrNbyieDgE46X2xuatJPX",
  "key9": "4Y4AjVU5myKkp7DrrAbFPF7JfHMHRjn6G1zDy8k4i4MrLg1EZHrgY9P63TFEzssrwh6YEPG6oyv4HTFR58sK2WFo",
  "key10": "3MiFM916xefnEXe1EaifCSCEf9mgFiVeUk5iHWpkr4U3zE1WU1tyPZXPYsb9A5Uim43LinQkXA5AoCWGwscitPC8",
  "key11": "3VPgJYvzyZLkMAPVurQJG8D48YW5NcuwMWeopK5XmcYWiMEwAsaFqCSnFuFxJJLJeXN6Wtcrq21CU9e5aDx9Wvbr",
  "key12": "iBqLgnJ3XQj1P1yrA2Bk3byrwsX1fHfQdLESq5GbU7ysKwtKLFxjt86xrTjQuYT8hb9dPJscpXF3z9h1shvzPqa",
  "key13": "eGsaHVH8B49T55WLnKmkEkhGd843BSyuNLXbSUS8t3b4JHpM9UjsP93qkQ6XysbCpxHsszaP7JsvyiJTfiwizbZ",
  "key14": "5F2xdZFwvh8Ti8eoySduYXZREgDBAqP2D7UxF2r9RkGCmLLAzwcsi3XoThfTjYZtPHggq5bF2ZpsMCgNxsL4ZUXj",
  "key15": "5tGomkVemigvJRWkr4GNv5tw3F8cQyzTqV9Rr1afxm7hqtTUPguyjzJZ4UVDWpVcKBqnC3X5WvcoHxawEyLEQHL3",
  "key16": "5U486Bt2mxjuzCZUnsDUJD3VvTLd6cCzJ7DCGZA4ihG8xJXV2x1qcejcC3jjpsbinuJJpa5TdMtH5wGPBdG88Xb6",
  "key17": "4SWUxqtDVYKBk7rfAJ3SuQguFuZyhmYxAkkV3Hx7yBZmZDLcLhzbGeNCWcBQCkw7R1AE78hPjEYrAVrZM1mjSBQG",
  "key18": "qmgKz6N2wquqJV3P6BCRcnMa8ya3Vrx3ameEkyduALzer43MrDCQcF4xDsExuxKCg9YxN6SKEtwrkezLAC1WpjD",
  "key19": "63WGYsPP9Lvi4h1gTA2t4mb9MUwGzUYm5c6D8vpFtYqQgS3wD6EHVfz9sFmnth8V5Emq5GADXxrbMu86DJMXWPj2",
  "key20": "3BJED1NS7FRDqoX7M78UJhDTQQQLberCom89Jdhrx5PXiomnmt2r3tJk7qjtUo9cb4z5wTVBCy4jUBufZjnKvPEs",
  "key21": "5GpRKABUR1w31MuZ3tMHyEV4YyxauZ9oSwyqTeB4emZv16FZmyNqKPVUvavckNHr7VurTxGXQvFh7y66AqMgqRbM",
  "key22": "5ECzesY6K7RCLrvorrES8csb9pXiR5E7pxMjGqH6nr75HutxpiTXSPMcPEg4aL9fCcRFBAemxxpW1FuzRAHMC5kL",
  "key23": "qoHsqcpo5SRm3zhTeDXcCtuSHaoJBux8hw1YLRfhGtJ7xoFY2XSZYQAgGBv65r7DrkTvm1T11isXnWE9QAAEKbp",
  "key24": "3BYvrXFogNDzFrTcChscYQ96FvSdubWnhfaG85xVp85snjfYovH8x3HJseHf139oXQPVuz2MLhup5qMfiNpKKGnW",
  "key25": "2qydyHtYQju27BfVYfucqqXmC8X4ABao2RyPA8j7D7SHdH629yfSNZDYyQMsZ8wcoQYo9Kq3o3CDocv6h2zEKpoX",
  "key26": "L2BBgiYBRx6HejGHHSaZvzgsLBTUvZWMSAy6ZQ35sDSXf3Kr4hSbQQ5AgAtECVYKvkKa2nfKUDf2cBWEJLrg4Ae",
  "key27": "4nRTfFR8abMznEFKPHijdeP23gc1vs5LSbywpCQbZyk3rHuVh82EXQ8MhTNFQLcUPVseg9yo6gHrp3rLwnh1Fh2A",
  "key28": "5fsHkvgtngDwtnQkcAzSfSBjQEJU3MN9GPHKvg4vpGJQHYgwuPLYd54LsixeamzmHee1p1c1N6CrsWRPc79Tk2ZW",
  "key29": "5PYANkKPLqdfviMaJuaZnX7gGHbSzfia8VuT82WwQTpZ5yGgs5UCYtD9czDtB5NNQqprLe413K3RXuX4LT134RDL",
  "key30": "Vy9os55RYeYmaNfqzgqxsYGAK5TUmb8eq3HZF3jru4a2tm1pjno5Lb7wRFntbjwYwLTkZwrAPg8cpo2NBgCJJGd",
  "key31": "21qiY7tsQ6g4f9h5Q7qcK1oZ3fCJNUS7M66eBQ9boqh5g8esXioQdswnMXDZG2YrfbyYDkkzFcS2svmB2cp4a7fx",
  "key32": "KggFaZqUBnP7gnuckNn1b2Q2UoiJcKxdzrmCXFUsmWbPfcQ47MJmcwDWusnyu9yesjDxVFN6jvN92ESi9DTYqGX",
  "key33": "42ZVW63VvAGWSacCZNDLreMJkLihcShqvG1Mwzw3J3Aa8agnTBvZW5GS8WdYwDfTepMcxqpbkZFiasnjFSLMixGL",
  "key34": "bwXGp7JL5uHb4VvKdQj39JgYmqnhoDrpXfm92Hu7hT6NPcaTAZNaVpM8aFKZBcFw4teeoQWiBgZQvnozvoSyA3H",
  "key35": "5yywAevnThE3kzh8QFvi67r78Y484thHRz6JfS6NAWbh2hLr4gMvenrw2tUpRDMB4QHgRbWb1jebbDdoMeJCaWG8",
  "key36": "63VmM1fYM5tQpP7qcEQn4eX8777gRNp7HcNV5LQLxkkpj3E7GDidA6Mx4Q1uRDyqBLyCoZQexfAjujusZWjpZSNX",
  "key37": "4nK7rPgRSpTgyJNStLRKDsELqNEdY8VgVAXY3pZQM18717TA8RupXr4NZQHeGsxrE2rHsLRixq1PskPpjW8PEyzP",
  "key38": "4DYngkWLhnH8ahjR6dbdC1nRCLtXtPEhmtUUFRzdsnB2p1VrVcmBYGrmYPvL9zNDfETS1hLW2uY2KGHP67JzQTXB",
  "key39": "3bXneLLXj7ARqLvFGdU6qbxp2dnpAMKzchqu6BzWwUHeTyPhUuyfhag41bMUF3Wgv5xYXZvMoTBeT3gnPMMVNJGG",
  "key40": "265Jbw9w2s2zThrrpgwR3YLYauA7im39TwW1udKiEjRdARSfG1jpKzopfKZt7pVqczzNxDBE3hnP96tLacZGXJGr",
  "key41": "3NTic2tYKwxV5fUkNfMXyTnS3zUrcgowGW8aWJQ5TjmAdKB3Lhho5KodkosuxUuSUpAwBQNCwULHMeBUXaH5K38e",
  "key42": "F8DagA5W26bwCrWUFcwVhyoMcQBptudiWyv25XZWxbMiKR2YVcm2bKXNZDWZXo8fXJQNkkW6N7Kp8stHLAQhkWG",
  "key43": "ZJQQaFL1QuuDfYAvhSojzzE6gGBNYz4xtjQwdYgQr6Cayy2HjArBkxsaUnx5RT76sSWdY9GhuZjDo5eGE9AjPcG",
  "key44": "2tuiz18qmau6cyvWTWzcDw6yjCr8fJPFegiawqjBukmyRoS4wPV6Hcq2PRmHddA1UQEwjZqfaaTxnMJGz9amKn3",
  "key45": "3CYC4ui2GgNh2PDuxtopfdw8TxcjN7TZUJLKtigJYYixQRVBVJ1xrBNudBnAqLrmUFLue5uwT5CR3d2rnWbrScef"
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
