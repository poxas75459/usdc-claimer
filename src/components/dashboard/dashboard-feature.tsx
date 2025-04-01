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
    "2nx1nebCnDZ5GaTpCGVMHG8JQG9FZcFKtjEQwnBsznmEo3qgkWLpUqCDK1TkQfonEhyj2MoAxB9X1xyinTEWpxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZvqpAbGFsqdtxmzcLP6uZu3mnzMhxiqBX5rT9PDF52tuDJD9AYkatFsqCqMDe6v9CbmFe9oA8LiU8wmRqH166F",
  "key1": "1Q78Ks4tSaN3KJWyh1x28zBwdCAR1YuPRbVWUoW6gFSCVofyuMCsYbDktemHNcd6niUnKJMdNVzuWv4DezLe9gt",
  "key2": "3LEUp8tDV9oZzxaHbAfvJuxEkufyCb5bzeihsN8GAH7FB5Cq2mrrX55jQF6tw4z9mFZBQLqufNPAZdhzwix8knRH",
  "key3": "5mWH6qSPhZt845bNeSP5LJ5NzoEVqa3ecBY14DAa32cXqyRtuvRMM6js7h3W4hbpkXdM7oug1DYSqN6Fo8EguBd3",
  "key4": "4fPKXNzvJG9UK13i8mja9veEMjQtvJBBrBHstTKzNc781XyFEn2EMyQyh2xi4LonUGWX4itgD3kSFhVDQb6x9hPF",
  "key5": "5BzcJTcitTt2YBwPG4xWSYhU4nC4HkSSikkuRNx4hft5hxabnmSUcZoE2YJsb4XfBQjoyhTvv4W3WjwLiQVJkJHW",
  "key6": "4PoaB2PveqeduqoyVmope19oA24pTpdC65U84puzQmE6anWC7Nk6u39bmsLfkgmxxyKhHUqFyr6trjkmkP8F1AQ1",
  "key7": "5gMtjXfyKq4FqUXH1fhSSta4EE1pVGdq3Nr6AQDWxGtvrQ2a2CuJVw1AnyRAKvkRY7TsL2NCY1APMaDemMpA5Hea",
  "key8": "23wzukMMqZs2h85mBFP4rcZXmV3gikhwARjnPHbA86UNR3meA1SBqph16e7ug69okiRHyRPtaoDkBZaY4qvXHskf",
  "key9": "43jQBpBzoThB1hkkw4pYQ3rayMdCiquNrzUEUfTfuCsPi6EWs7soaSvZgzeUz3KMmEZ6maoEDC3PnVhrxnXjvbNc",
  "key10": "67E5GeaT6swaN7pkPcMtiqS48wvPvjZUo1Hosh23ybKpy1DsmJXCXDKsh6EBtaFYa2UQJpMTkAkPM24xSs3a1xdv",
  "key11": "3SLfBF28sWyPx5NhwVF38SHdTwL3GLDEXUxWotu7y8vs6LDFwVYbtuzQHs7ELEdp9KmfV8SFkUSHBPSKMZM9bSvE",
  "key12": "4vp8b3LYMrktVANW8jeyMJZBZCc1Kj7Eg7eSQ4gtJ4pJK2ZSuB6She9vEs1KThUf134VhTcnMAJo2BKYzDbvWwVA",
  "key13": "3Z9MsQjwWopKvkR6vtdDSaMTE6oHFTxzWqDMasgWTtcLa2ghbz9XDWUvnTNoAjCK9VLxC62KtYauE1Yktvd6z4NU",
  "key14": "2NpsooFSv6YtQDvi9gzBLNC5X89wUmawjnbSfEboxSAfLNFWAbB8SxnLNYHpCSKxxKJqG2CUzBijrjNcyZn7Fhd1",
  "key15": "3iK4RGVPexxyaFkyk9EpHWTr2Ea9hkcxAvYxdSmitHoXiBfLihz9BiDJFRD4ABXstc31fQTH7uCy92fK73dsJjq7",
  "key16": "5eUQEpWhmnNQmdUwA7QWEVsaeK69WD9ZEev2NKzxftfojdcH29KedxYwEfi4hf3hDyXnKQ86iN5gM7RqMVMdHLeE",
  "key17": "5ATtGVocBBPxN1xyuHX4kn2KNrXNmSdsEtVtZfeb4iCxntnkWybcnAsRMZ3oDcwaL5W3bZpCsscR7x13sFzQRp2k",
  "key18": "XnUZzVBBcEaSA3nmXg4wK9nTFV1fbzmFsviFqVYFeMXvDdUeJripGwGaQgyV8Tvq9hop22bamt5XAzg7gDLMSLi",
  "key19": "4zWp2xQVQfNEmYPaxGDFC4cPFTthSPD3d6J7qMp8PB8qWDfsTsD72Has9L5VTfiThyeaSVud1JhXNMPV9YuMdeRS",
  "key20": "45SjNjdKWsMQ5hErPwRCrkHfybt9ktBYAWyW9fSQc5AQ9HtSXN87P326kcyGLAdqdZv4aAsbYEk2N2zYVcxzn8sA",
  "key21": "3ouYbffVYneyLPTXh7GjKgn2KffH6YyUw86xVDJBUH26zvqGAG1XS7NXbL58igEsQMd3vkVq1WbdPzrPEQKRNauy",
  "key22": "3urf6BPyfc6sJeQFV7qfQmmxnJzuF4goYaKMzLQRERgmbnyVMLaTn9f4DM9TZfiRviLq3FQnkis7RVJ92nfW8dPc",
  "key23": "3nwudaPBRfQDU6b52vANip6ad8eYcad3PqCfvRZzk9vEvRpY6fvK2ETwvjxCYxZ9zAsTspWCZZe4A811N7hMJBEm",
  "key24": "2EyPGzUQrXWMKhubVaArqXnxDPyv4RE9YYttN6WidMomrQcDG9YTXvgYrAw6M5B6pMJrUtUiH2nw7RkiTfEvzfrn",
  "key25": "xzbEmFUL6YMedKw9Axxh3sqJJbusrbCUUxxU8BKk4ZfeDrZrR6HyPC3eQEtuTSHjrSbykfiYZrKmq4iPCDF8Cm1",
  "key26": "2HSkUpStF2DLJpmaBkPQByciwa158tmyHGhfYBJ8JJ8U3mu9whEgMZjMsdxx9DRjav1iCZfZq4MGCNprpnACqwFx",
  "key27": "E6orGHSL91cx8D5QtV39TspmNUBzLoDvCQmTAtqBcvSa9uL2Wg5WU4zmXcDKnw9GBnBy5vP79eij8jqEjWsWgKE",
  "key28": "4PaC94v9uEsdK8GgU9LQ3xCHC7rb6QGCefDS9SVJmWJW98RJ98B29sVc671Uz5BxSQmEgnKedmXJj1AWozn3rirU",
  "key29": "4UvmZH1QopswqVFDPpU8o7Y582G2Gx14nmY7epghgkejCUwMHgqnfZkAqeevvPfrHeUvUEvXFFb2H8S1XR86B3wX",
  "key30": "ii8YUJjsQUix6wURsYkbE1C4co2zeNCsLr6NbQEvMvAQfPrXQNBB3Vhrf6dUp6Qm46j3Yk41CdMyvKe1xpwmtcM",
  "key31": "3cd4dodzasKxKTvS6j66D8is3DmBj7onZiS1Rnqp3xWEZDxnSWeY5csm4RkKbJEjcU3KhZbDeq47u9QEb7RmDCRK",
  "key32": "3JNt2HPVMMcqpNo5xo2zJNuF6gqxnPXK728p6gKusRd4BWEiCFMagV8ovRHGRXkUPPZxVm8sxwvnMTd9nZYs3NRw",
  "key33": "4fGwRV89Cj3aWNrFCXL84T3ETr7envBynGdfuPN22bSzWpyjMK9qGp7oMDrxHNsBpGXmgFAcN3uFyaU4A2AQT6UZ",
  "key34": "5hkfgbLtELAdKdhe2xTFMb7M1WEgCwVXurHwL1zeYrgpb6AN223Mb6aUKiV25BNHwc4eEGArUyHS1g8MQxzUQkuc",
  "key35": "5LKWMZHRSjonpUPFkqN17vK6TADRzDPoyZuWYgarS862qr6197aATyDx9FRugSSUX9HAYUwQEqAh1w3CxU8wN7bN",
  "key36": "2TV9tnVAJKVaeLrSysRNpaWGmKiFaR43vKwwFLrmBE4z9ea7bzNL1z456rrScYyPNDPLGmwWESxjs2vrjPTuna2V",
  "key37": "2CVhdFpPW1jyL7rRqxg8DpYyUt5tb6v9nKGzNCF1YumgpZi9B6tV5GRXMfQ1PsQJ18BxURkDiL89zQ6wZ8Aoa7rn",
  "key38": "45LNkpoSdJv7ynDSq896fDkecRia5hBk1ua96JSB4Ch5iW5XDouJ2G3xfo9YVMScuRWYi6ar4GEvX1h7w2SBuxCe",
  "key39": "5tdH7bALXwCeVaSqbHH43muPH4T48wXQMyZrJdLXQDK3VQvQ3gd1dD77sx11PLC5aRj25ExQYURALsEMZDsDcyJF",
  "key40": "2FbDn6UQWyoC6E6jW57wXccLQk8PzrW3HhYhbGGW6CKXKkGNe7XGGpD1t39kPNzm7BiFMTWtuJ44mKDk44Phh1m",
  "key41": "4LpSF21MvwvgDSqNwZ7QxMfSF8qFZGrUUakbdbdcCfmWfa7Xg6kt2SQba418VzGQMGTRpFF6c8xzpgBJWHqhLTrC",
  "key42": "4h2XsPtEjRcmrurNch8ZvMMsReodnmMZTS9559CcVsegnYmvuXJLBpHbRzSuYTK2KQBMnk2HhvLYyu4bn7zUrRft",
  "key43": "3EQj4stJQmH7dAkBtYj72hUbbYt3EJnu7xF41WEVFUyuNaeALCesXEYYFZJkb6pMVD3yJ5jL426NF9zCPUcEK8JC",
  "key44": "62CL2v2tcUPgHxcgcWxH98gdsrYuzaHCayo8ikA1RHgLTyeaJqzcSVBbGvDFkpvjeAnbzLUp5QegGAk6TGGAXGoN",
  "key45": "4x8FkSeUVKH7PoJgX1uZ6axi51TjvYDNYBoQBFPBNkpyycF5seZi3xGd9XBwdF1y491xrxBLkYizCyFDhmLs4fcg",
  "key46": "3q1xmSq52o17CVntqnLdU1hJC53G1UuzSHueE8No8tbFWULnoNcbKgg5oumeJskeMP9vC3METEQ5cw5Q2dv73Mta",
  "key47": "3kD8psHof8zP4mfQZ3Aanq3c72NC7Q54gsnmfFHttn69cYNt1PCT7jSaBTEmXkesXeDwH84DdMWxFzsEmDgXNpuz",
  "key48": "3nYHAR3P14cUKo9FGnpfhfY8N3HuHCHQrXVReaaBbFdhbMJ1HPj11p5GxtKTVKBaR3QN8oqYzp6XwS1f163ovJJj"
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
