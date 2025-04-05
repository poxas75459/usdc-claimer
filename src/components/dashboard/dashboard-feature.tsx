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
    "5nTCmA8H3dR1s9RQVQKwBnDMNGVHZrgyAKTDnYsrVAH9tqjtTjQiWhzs7W66r5KfAvS82PiRN46ZbXDsgzvo8TMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcHdS8y6ZHz2qUoJD49MfLN66AxCK4amHdZzRZLU1cNUsB8JX4B58ANcsdbqTbCADQXPRH4PGPvjwxGw64niHW2",
  "key1": "4CKHmhESoUptuoGggWeY6UrXDKu97jsYvKyjVHnEum6AXD5Zx2ZN7TtqV7mrZmH5Y2Dgy3vznTJ8hFcHkxnCeYMs",
  "key2": "eAJ6dQsQT7pnsAPxgBCC8c7saCnJBabh5TXgsyS454hVyeHMKL6gids49o2cmSQJCmrurGjTb16F72iTEdg6PgZ",
  "key3": "5BDEcmAJEgecW5JxuiXtCAxH27wAc82844V1PFZTjTEAeZjxC65a3WR49peWPyByuSZ2uEgtRQDSaCdvnwegEXuV",
  "key4": "4aF7XcAqGyYs2mhMWYzwm4rVwxey8VmtwgSujJmgmgB6ME2mUgVnugtp4nbLnN5BNCL3yiWvkckhKsSkp8foGhwo",
  "key5": "34Kgd6eEovHAavyqa5ujEvwo7kGSpo619sRpQayfSFAytujgK6rDbBEqNQ4p9p9Cw3fqUgDQuTdwb6MH9geKmxQu",
  "key6": "WfVs8n5NEwdBfkcXQeAujnQwSbk7wyEuBo9Qzmfe6cYvS3AMdjF545UxmdLyjiFpkMtHbiGDnxuRFx8C34DYrCK",
  "key7": "5BmVDJ6KxuqgisiMvumsms2aSzT2ygx5bC1RHHKyPMQwkiLLbasedLmyDgyvTeRCyo3C3ZPLkXTkPxCLYD7LUycw",
  "key8": "3vLSmSsG8bEnrNCdV5AAXZvcQskS2ihd4fSc6k1oR8QXAmWYqnwsGFs6AM2bpYZT2EwamFFZ5BFy1t9ozzGqCD68",
  "key9": "3MtPj2acvyFsUbbVWodbjeC2xndi5TP5Qx97FpNMsroCKWDUDVq2BHTfsh843CcqPkYzGfGCFzpGRHU5qWBvwuVZ",
  "key10": "4E5zCsgPq8YwRujNNcomnt5p5DNBR7nRpvReNt67QEMAqXuvK7jXPtWP2veMppE1oLJh2oZrxK3cyEjPzKhCWGr7",
  "key11": "5FXe6xWscoAGXDZBNu8rzgnbcSH9g9cK8vrAUyp3qwRRaj9xHQdHmED52VGMsAZLorV9JCfeNGicLWunc7whor5S",
  "key12": "53AcfeAdhpZtpq1eQCyewCWGNTCTTkADNEeueVtFigFqBSL19hstn8uwJGKoBukVsB3rK5sgVEksJetqVqag3Bqq",
  "key13": "2iUAPdwMKSdaP34ZAe9CZk2rt9bkE9U2FX9HckuXEPdpZgiBipjk8NmHLAdApA9St2Fd8wuNZpjRaEEqK5EVej61",
  "key14": "3Swm23sgLJronFV754iP28kifjcte4RhvoMEer4xSj7vsmbGejQDy55qGZEDoVC1vQhZbmrUptekoXZUA4ydAR69",
  "key15": "3JcngVjizrSRQf1vJyxxoQLDsV4pVLAa5g57omz1xCNzFLjgh1b7htmyTP1JKtqs8SkQfZ52sNwrYGp8gQ6Jw4fM",
  "key16": "49magaAdoQFEXygshWQwzbKnSeKKgW9sGAgD2bDtGLAtjZvEtHok1zxR45VFwNMVTgNDL5N23fqQnDvs7xuvgPir",
  "key17": "3KDPhAkAb5xSXAQ9rqCYFrbFTd4XRJ2RDNTrEmxRqUY1VzA1wnw5ubdfpHfGECScoZkhZgEfCVUNLvVmdpfRCKGF",
  "key18": "4V5EJB5MpF5TRbq4o9og6ruFJ6LGrXfFSS9RscH2JcRzBRAvTuSB7vNUacm2tgPXaccyJW6T4CRCtgPuZzU5LRBA",
  "key19": "4AxkoBhAvLeEvAHwYWgrFTTy9QGhfa9oaAPoQuAgdhtKXhGbhPdZbJPGNCLqfVYCCv2aDVh2tXfNBDCrMF2xUGYA",
  "key20": "4nvHvLBTZkmk2KKt4qkFd7BogDGcFeWncFERXgmEwubUryMJiGUbfWCfcKz4gANTvqKxny9odrBYnCm3DJqhfLR4",
  "key21": "4XPVJZFgKbFiEteR4pe4attpyQ1EoHqhV5sEGCsocacaRPn8RiPWyiaDi7Uw4Z2qxPMzGQnhMLPS7ztmwjdLUi2K",
  "key22": "3S6MSrunRXnrgwoeo2YL3XwwfLyKjoXxaJenE8g4PuaMUebkQsy8TFvqWQri5jNns1JAth2ZpugcS1UDhL2pry9C",
  "key23": "2WXN9JnEa629258TtXmmbFZo7GEDAXTWC56xXxW7KpPV2rJc2naQzd4j9uvpmYAbZjCdZhwyoS1MsYGRiuKMbFx5",
  "key24": "LDuTMQnNkZsEMhBtv2orPW5HgLGHXzvepEzXmBENKSw5q1vXRZj53pEyoCskTqpiaT6bpASvjRvr6vZjMVrgh6Z",
  "key25": "4sY8EHEL64nvc4P6PtDR8xN731PxLLCymRYpFhLANn6AbCLsJCpyJXRb2oBBVTf93CX5Vxh7gQwhWQ25EAt2pwpW",
  "key26": "4PFwmS7D3RwAFRz89r2TXBJacU6zCVvS72o4PwLCujwzR6GRzMkQKbfWVL9ndrLcQKkq7J8yR8Ny9AhQ4w1NXdwT",
  "key27": "4AFCXZFeR4aNPvpjwa3TrBXeNtCPcWmxcvJHAYygvbs73WtSVirUbxbTNh74T1FfsHUnvfnCtfZuqB5ZyNnZaTgy",
  "key28": "59z9NF2b8Qt3ZYJDjX6jb2U9D9YWSRfZXk4bJYoCeFM1snkt1W9w6JNWJ7pXTopvTYa6vBU3THoxbFBocCRpbYGB",
  "key29": "3K94YfAABDTnw2P75qnXfmxENiRfEorhCJHcCsHHM32svHqYav4TZ11X3rfHV8SryWS2WxTmmryXkerYsVGyjiYQ",
  "key30": "3FfPgEwSMxTtTBGbuN5WjvL8TfQPYaYku9N7jCoxhQZ25TiKQiNsMfsJ7mimPMx5NFVPvDTMmCBcXEDyTpawxsQa",
  "key31": "2rUfrgzp8r8bJH3Fcsn86gP9VaT6GU978QC8jpkBzqnR8d2g3sxiPDXfwit9wuAN9XmCqbokufdmjKvAsjNCpu5D",
  "key32": "4ZKpPh17DxXuatwhWonyeU2TLGSGEdBu73SuhHfJkH5DtDRXX1wCrUCf7hDU4qaGz6MRzZ6rCNZcV36R8JBgJwuT",
  "key33": "3TCq5MDAmV9MBgH7LMWLMsvPgEbvjsj7dE8NZYu4WtGqwuXsXdwG6TXnLiQ6SPkEzDBcX26xne4sySc7JPmAgxVJ",
  "key34": "56SbC9gNvNUtGdnEoKRhDHRyvyEnF22HruMP6r3sm6RdpVzvcU7X2uEEsMD2uTo1vLW7LWQwwZZMAUR5JNNrUAp7",
  "key35": "2mzJDTdib9A55eRcZK6p3Ga2UcxDqGM82WVKEX4CUJhER6JdfwzrxCpv4DKnS8BrCtptwKoAC9wqBX6TVM28GeJi",
  "key36": "3dj4W3PsmPhHtxGimL3EkDmdcmeGdRu4G1JTerQKHiJUkHAK5xZe9e2w1i4LRSm5H7fqh1ebqbD7gvNptp5mMnZE",
  "key37": "5ghdSw1GmXVQzNxfuWZn9mf4J9bkEc3Ng85iTk1N38iqpk6rnsHtjHiFj71i2JENnTvSLnecKTBdhkPqSFCrCS8h",
  "key38": "5JJgQAggx6icP7etE3SKkn3RbZe9YjQ5pt1f3omwMcdT3vJihvQbzNDvfA92Mf9Ufwn6xEsCWfKUHU6s6raazxJ9",
  "key39": "3jo76PAcpJBvUdnh1i1JRUyWoErZJYMszz4wJ6Dd2Wr4xYq97e8ENJ1kTd9pagdCTDh2N1aqxEDA5GCRrXfEkMN3",
  "key40": "55xdwbPAuezUg643WHAi4fdaxhXC4rCYw8Lx3ai3FJ1YvLwezpnwvdBspgoLjQyvWMCfyBBkyweJk16W1DWbwGoF",
  "key41": "4WRKTp2DyUAc9TB35edtKnwHnAWANrTRToZgMPDzYYNpHMwwxVgyJbvNYBNA4yM32EBu4wP8RmEaLhTJjXr86uhK",
  "key42": "2BukebNMpLgFFpFZg5ne7cJkzVr8J98HMW668wif3D1wN9YB2MmXejmEuis9g7xVpctH67jjmFSdW5Xf4NjfPS1Z",
  "key43": "2tbU8o1rBSgksiSnetpRwKHE5eGnz3PKSp2Bt7UBqqoFUdSoTbu5xU2TcijJqMitrfHgYK1V3VEu4hw6bEcwHjkQ",
  "key44": "3QdPXbzkmRse4TsQRyshkwatSwAHrRkDWxrU2ZmqdDqJfozzC61KEJrvqZPEs7swtqEXwJmNmLpfbHLy9EZda8uG"
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
