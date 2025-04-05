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
    "2SdWkwG8xYfGZFAeZzo8guMn84HGSBpKy8DKs5zkkA9YzK39vzTsiiFtkje3YUKZeRDAtRiGEWzfrhS5upRv4mpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPFttvvMbuwrX9oAfRMarEnrrJY6UdBQqNZjSzq9sDgxbDH1PmTUweqCTfjo62o8exCfgmGXDUqTLHFp5CYUQuo",
  "key1": "4bMDRgykdriyZKiercjdN88aitf8Jnp34DL3KpimjvRsHUE6v4TAeyD5K6wZfRiuP7LdjynEpo7P1CUKx6DnXSFf",
  "key2": "u48Q8zuS3vDPHi5TM1igs8j7MFAP7wn8UrszbFEcTwC7QK8Qmrbkr9ncxuLh9c9hn8mbU9kUT7it8qiSiNe9FKg",
  "key3": "55Z5S65Aih19gTHhqb1aFRaPJHuysQioR4QxsbwUtVFiN5ngmqwx4MunJtbBeoN43oS3PHtxHG1L3XaGxtzLmdrp",
  "key4": "5EBb2zpV4f71bz8F8iXnFPU5VTxknU87Z8kiZcCx3TGayW1L8biBUDRK93GY6Kao5EwaFPZdBVvAucky8T2xw4ag",
  "key5": "2YpSSKp6ZiL3zxssMf6WXkzNUEyP5ZvGDojT7GZKhKtJAuHLSHrZ49Jyt6kmzdoc83GqPBkxBKjRQ64DPxJqZ7Le",
  "key6": "43KfSSZCdgJuRYpbo7iLUhj9EfvkmSCqQsAgwjPiT59k13Us3eZbK919omuradLbPppgfLAQUS4Lq2eQWzyg62ig",
  "key7": "UAWuFhyG7Te6aw9cDoCEZGYdnSkXH3bsjrMbco2NkkXNQ49zmjpoK2SSbgoTY2aTznGA8cFqdvTxNFuz3wjgVso",
  "key8": "4jeEzF4uQSe7WfvWcieuFMPPRXs1SiMuJZjf6sJe3z89APTAPSWQeBBy9dHzmSkRBqYFTSjFTmrka85iTL6SM5mw",
  "key9": "r2coQks1iSiBTMMDHgLx74XsN1kMCJaM242b3VcxKYkffFkb6cjvHjMkXTyH7Q7ESSzBe2rAnV1XS8Vhnj4GEvp",
  "key10": "4oLEHA6i6DsTdEzCBJHYGjaHinkWH4XKBvMP82HC59fqx94dzp1NsMkbwSSKBP4mSLKUKeZawaiukKaYmS6u8ufJ",
  "key11": "2pcSXbLJcGtECE99zrau22PJ2BMLn2aa7pHpUgZHt834zfjGbMZg8U1tgp2tmwVDKWjcLs65yapU9XgQ8ebEiyyQ",
  "key12": "2fLVw8wZR1XgWv1JRu4dDSeiz2C5YpwVih9j4KheetiXARg6pFSH6LdZ38JdvSbjoTWTeETFqEs7CsxFe2t9XNLU",
  "key13": "5xjVs4QdVhjxLAJXUCzHXinjzQHirMPqSXUMiiwu5oJnP3E2g6R4bNV3USrh7jgCtUrLpBZg6JEVRoMofmA4txRr",
  "key14": "2fn2ei7gWCpKM2BkpeYrop9Cx4944AzgFTAR2fjsQZwb7SRu4BYuNFpaUPxbghimEw5z5LzT7PFGcnVuErxwyhzc",
  "key15": "4STRwsNs5vDgCghb3YHasQ6HJKLjiAMhfZZ2vck8Y3gcekuupyKwYxSi7wAxYYa3zFQQqPd6Pj94vmmhGu2V6F55",
  "key16": "4Y8hymwxowtWvhtpabhtox6ZEP6yTv3dH9re5sJLEjKzhLNCgwFDd2XbQKEntajF8LkDXSWGLeE2xMJYP8MV3w9N",
  "key17": "342KyLz1obDKZpd89LFayhZjem9DH8yUU7m1bLuZmJU6mthAb24ZPwfni3iKsnc1qZ7hDETLM1UgPopyXmsw118",
  "key18": "2XrzaRFS4ubonudDhaE1ruTAb4B9awnpwe228VZH8nQBws7MzWaKHeNrMpEJinEorAPGyL5NEd1JAmm16xEqMeH6",
  "key19": "2iJa6n9rtSdP7PtPGgUT2xStmBm9Q5aEGGouvyTEca9v24UopdvaC2gXweHW1k2NFPJZqW1GnQnEQRKVtSuoc42i",
  "key20": "4mRtazKJEEWJfmGEkZnhyjJhoFoXR45vyXsyNLbG9qswe1NEvfPL86pzTwywRBgLjbicaPupG24ZG4en8t44mkuo",
  "key21": "2XwWQCq5MhAXHgxXiDYGN4oCbMmUVvJa1MQncgsYv4Uf25TrFJsVcU7daQFpxT531pa1NJ13bpFsoGAuZjCkR4dW",
  "key22": "48N6wCjcteAM1D8qChozj7sZnRF7oyTtAqEkoQSkZhxjwomu168NRJAicezbypGy2WXa7goUAqsLbWEVHYtvnvdg",
  "key23": "4RH3u83RAaPANRoS3nCM3ofuFQ7QYEmkC33FWoS79YCyCfD6XQd2tLp6tcgFarH2Yofe76F6ZT5ppLm2KiaeVxUD",
  "key24": "2zRf2iReAkLMefKkMziYc3QCvJJqn4QyvfZQpBrNqQLbB4BzSMchrnqVbhJpK8CoSUMaKP8UGYAXcmb5RzoaHAnZ",
  "key25": "4XGPw8QZDr2Bv7LX3jJcVboGkw9ATy4hg9LtkyWWWK2XbSdBHo1ZoQAGsiKEyu2CeHbqf7qj9WzLSbdytpLKmuRC",
  "key26": "2AQnR7HSriHik8rviuejspPwMBup4f81r4fBN4YkBQu6LqDGDngLsw4pJzybjzJa8hSrBND6Ke3Q3eUVGBoA4twr",
  "key27": "3XNpTa88LZVe8k4vejh4MT2XbzgsgwtXgwASXwiMRAcADUKP4wL2dqrwcumL1zAoeSUdHZwb4m66K1gSocoX4Paa",
  "key28": "5BtPecAttoyFerHMXnDoi5EQJ1VZKFcRYptW3RJG41fpibanvigk2PELm5v1qQ8Wf2G87yoXs9R1UPM7Wy9vathM",
  "key29": "2BQMpKFnaHskP5G3WAxyypHrPwq2Cg1eAFG5NfyevRQGCqTKWTMrpAdjxg2LEcbetZqWLpuYcrbNuY2KgxEAW7G5",
  "key30": "33KxkSbKhkGpHzdNd7Xybfza1Lv82urNRFBsUh5br49z3v8VBF9Pz7KZUzqgeErPAgbu67LasGUoMWhJfPVvfkWE",
  "key31": "2xKnM73x9ATDZnj5NcLhcjFBnN21C8otGmwL4i4jPbRempARoSJsPjT7PujMmR2SCR113mkufkMEyVrMAs9jwkDP",
  "key32": "2RhZRVX4hdAPuCwQVuMww4VK8dmGSMN6fNbvNvZe61sZQxamRRTjSdyth7psZ6pNTRJeHsZEqef6xcnNBsespoVn",
  "key33": "Z7TBVvaX4UwZ5Hju9bUUVAfp1sP6wgY71t8jtpQnE6RDJH5Lv3qoAxxazgWcW9WtxfRH43Qhh75Cpx3zFZonydn",
  "key34": "5VmD8ZvTK3hHdAxMsNbRVXYy5QigRbfyFAL3UCVuRCUX4NaduZNVdbqv93MfaFW2H2MLi7xGBGPt4QFnqBFSzrcj",
  "key35": "Tbsr2W8rw2UUQiuFYdVHgWdMua9f4SnovKzPUKhCipDUzVWxyy6TUZD5MoAjP9Lp8EmSsxn1uVQZCA2kE7CsVh5",
  "key36": "2LdE2xtqSDHrnNYUtMoRgS369nxqzVBtv5ashhirNZMyVAq5zx6FXY6hVDNRrZPgrwQD5Kf2JKmyTDjeY2Hiqex7",
  "key37": "JhdDmhkokoisYQEUKDLmcB64qjsVVP9BqrD3WokdMNxiUA2hJhzquPtLkMbUCkdcGrhq9Z1Xjv9L2D9yrj1dHwz",
  "key38": "3dhwJf6Fs65mRGgmSs6QvLtTVPj6i44xzunr6ZkKL7t6o1iComDYTZQMWCvkTWFfd7KMdnXNHg2vHay1VzjuHw7i",
  "key39": "rQeriKFNGkZ5VGC9RTMCFgmnYUTwdpQiUuZyp9BeinS2AnqDzfeE5wRQZg4Z5yy3n7TysedJoeRDVSCNaVRAQ7b",
  "key40": "2PxENMkdwY6Z3y6R32FZ7xJfYwaSZwbJ2skxwtJnf91nqkWFXXuPRhW93vw6HNtqh33K8PJ73WpaJaehnc6tXyZV",
  "key41": "tdyBSQCrYTSg7RbyWaSU4YRGPBaAP6tKxddFWobkzoNGDBHJ5MqN2o9Mw5gi2hvFGdkjJZoQHjTZSdGXd77ZQLo",
  "key42": "5Nxyb2zd4uDKRRpdj4WXx39my3WpXRWQNXvrguHnMq4gTh2fxPDzcebkoeR2Ke3XWrBj68QYbPZ4Mb1vvtnJMQbG",
  "key43": "4YXtVvLtXZqFf8RGtAwwCYSeFeakTz1144naeGKoShX6WjBe5FuxsrNNLmHF9fWWQnAkn6RtVEtb2GDrNXHmgWdD",
  "key44": "2JkBkLYQ8fB7r2asM2hRDbr6fsVtwpE7Bxb98ciwBJ9wAzqW73VdwrCh8YBwufGQf4yyop8ATiQoYCVcvgKW1wEq"
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
