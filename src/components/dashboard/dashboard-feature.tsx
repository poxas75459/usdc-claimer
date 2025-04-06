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
    "2BD5adLgiSF7RjKcFHUYvenSCLYzXizX5NasR1nGX3oDJK36owEeZW3DCKHgeaUsQ91rUM1wnMPtnNo4jjmPxn8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V12t77De98yj3omfYYAyjYbiMggQghTyLojBqEEqfP68J1Rwykg86cYxMeKq18pW6HDQn8F8cdHSA7zupaGhFDr",
  "key1": "4jyHeo97SDLizZiuXZe8GFejLeSaofmRfnCGZ5321j6HEdEmHUx4jvtPpgbgfRaiLER7ejiM18wPni5hpF2tP3zn",
  "key2": "2oZTM5EusLPQSjBJYPiWyrjz2rX2LCXJqFo5jTiR4nyyywoCETUMVBW1RkUrCQpL9GwifGpVTWThheX3TEUYjHv6",
  "key3": "5Rkk5zMdKHea3CnhLFMzXoVCxuGaRyKRsygUGDbPjTUh1AGfDWE8PFfVNeTvK11AnBijHdog1bo1cWNPvD2p5JWG",
  "key4": "3uimHawWpe4QZEC7Uf3LBgMqrGUmywooUecQDR5ZhD2AStcDbvurMv5PHDULi6jaEhqFUGGL44hX1izLTt8yncEW",
  "key5": "2eeNnC6u1d8enUkQn9HHkvYdBeickzd53wQva69UShMWea4oHwCPJEkUg38E6mSNnyLMuyANdTsY9H1ckDrH91Gw",
  "key6": "3WhgX3KZNVxjc1rvhY1uJog6PxJpTempqBWsLKVGqm4tcsSXX4pcVsXUduB4fRwwN2yJoXtRRJHqJcaYrnXQs7Bt",
  "key7": "jRMtDo5emNU7ybubAJi6Ka74xDCLB7kbjiy4p1HBr1z4wMWVW44Wi4vjgG6kDHVujVXvgnFe35qsaHwc4JQux1u",
  "key8": "4HKSoczHvMtfrduehTe7KgJhfxm294jHWCJesuxo2v5h3muokYDxuaVx7kpk3aJfFpnbPBMwUZnsoWKkKNTWUQVu",
  "key9": "4umdQncZxiXUjNnpmGsq92RfqrrKJLGxfLdiNswo8godSVKawWY9B8fMDxueGpxhihXrRQjM3sQT42y8ZTJEskG5",
  "key10": "2qX9oaKbfB7Y4AbAvA5tyw3vkxfU4e2jZ4tKYinjVPLtPxscFkiRsFNGZJJbTLWQZioLru5ePaG9oTiadZ6AS8ko",
  "key11": "eCVooJPkxuTquGu3QjGFGwzwdzxBhX2dzNFF8MQY73VAkyPVCMr97wbn6nFxvw6VQyciavHPikPnxqYkKyQpMhQ",
  "key12": "aZGY8DxD9PqAF6e3zbTzK8qxBynpX7pmY5DEryAYnww2oR537YhhySuanUaecEweJJ6vGkJgG4p2x6NqGKeQfEn",
  "key13": "3nGpHFVkomV8fLZ8wLBs15gomxnJw3NP9MMjmq3gz1LCpxsDgSJ2oRQS5GfhB3MUSoFMaJ52eGXNveVmVTcGmJ6B",
  "key14": "2iDL3T6C7zrL4VbxWqTbYkknhCbVjQyTp55QwxefBv7htby5VpM5FgRPi1MQUAV4n3E84MutUZayJUHz8DnoNZNs",
  "key15": "5UGadcPvhxqbpXkzWNAFN6ZuzCM1i8UMELbYJKt5bjksbMHRNgQzQE6Me2qkEcz3G3Rj7ihDVH9GhCdp63FivT2f",
  "key16": "ErGW7FsP4toRszrAzZkW27f5CyAgLaGYpnPGRgvsJTrjDeDLswQmmLvqg8viyPUqSgZ4xt6e4pmVqkMhXgnPnU5",
  "key17": "3MToc7iKbiVDzzQNAZzZMPpfrwsszQtF7zB2LKcmmXpejZVnx7EKpwk7Cqvr1que2cMwnfBUQ7k1khcnyJXum32m",
  "key18": "xK9isx64fq42SbJfNjWXwDHPEFQWvdnacqBcHVVWBPHVCzmMju8KVfLtLt4eBNmgFxYEhDfC6eC6LkVBJf9EMFD",
  "key19": "xcxGhm4wvdBL7dz2YUxyqQQooitAmE3144Q2uZqqqJ7UjCYz7tGHphxBDNxTqvFeYjRpZrEvT2YgF9inVviMHRv",
  "key20": "5Udae3oKa1fiqy3tbYZKJ5rQHVvZX3CzJ5ykBiYkmz4SSYPNnkw1dQtZ4KrZ3tW9e9HfsnmfhtBM9tja8vRQYFJZ",
  "key21": "3oRHy2r4QKjf7bRuFp5tpWPEHBiRG6K1h4X1GqyUeGWrcjS4ccL1bGNiswBBYn1qQa3WDSVVzygGdnDNyeYi6EvY",
  "key22": "5a3dhV7kzFbJDfcxgxFGvHdReH3wBYNUdGsgfLk64B2L24ppx2AgdKCALAuXewJvbd4jbY85Mw75mr758cmsUXMr",
  "key23": "2MSzJBAe9AM9wXhCt75P9JzSQpUMxhupmfF6tbgH6wG2cstFkkVVoYnna8phHdgnSVTcwYpgFo8iwnWTk5B9uSTm",
  "key24": "5AtKPyCu8Fcft2CrSfobi2wPEVUC9sJkRBDSbaWYPxXfFc76cNTdYVr14UtvfKDxw1EmxAY2yhoREdvdEN9o79fU",
  "key25": "SpEoey4pX9xroHrswsn7TBYW8nV6xSKarfmRYaTgsToMaYuBVyvfQZvqZ8gswiy5pdnvvCPJEf3HmT7gzpMcKFu",
  "key26": "Dnfn7JcaAzRLSmiZ6dYNnBwPpkALtktafXRgFgFAFnAikpeUQTtpXESdW84LnLGNsAJRiDH5hE1tMkJBF38ZydT",
  "key27": "4zJtWCsQQhi4asWVvcxRDdqcDhBUK9TJZraAP5mANjBisjTESTSrrePZuqNBHr4HZFbTimE18q31fFjQsZAsmTAe",
  "key28": "3zwY1vjDLraXxvivvVfNjtFTWeGSrc7LVEgfRbAhF862hgo2vRq4T6N2S7iGgrK4Bf9bqiZATyyDEJkZMJTLFjme",
  "key29": "ZXigEVao6Z59qqmuUPm6tA4TvKEvjLeauiWAewHUQsVXuduceHvcECB2dtTwo6wS68bTS9eooeV4qzm7kN3AdVW",
  "key30": "4XNt37fDJuw7qCsnE3Uyzn6bjQvpsANPE4shSMuzA2jVWLaLCaKC2e7KCXaEccMma22MJMoNPYyv2e2GFDCyYzJ1",
  "key31": "niYR9b7dnuWJuAZk4YRNft6T4M57uRCE2rVWp4RJce9W3RHTQeLpsKEBoGmJM5esFf94TH571uSp75xESzKXbtu",
  "key32": "unwJ8mxBFt2MzNedyDLRvuSGUV4ZfGttnB4JTXZc6YEwCdpefzsfFxkJmeH4Nb7N1FJKWAeDLoPx4AppfqXdqh6",
  "key33": "3mPXWuNTYJ25Qao4TK4ewUZXGQjGixfFPRTeVMBcpMds3CHfA9bzPoqgVtE5teKpE5FcjSAmwSdiMQGsHQerKnUV",
  "key34": "36cZeeeyVKZpYT9Af3UD8cyvgebZsCLxUDdBtxBxL5XfgrVznm2CbunSSqpR1JUzQtAd8t5qHqKLSvuTRCzxBC7B",
  "key35": "6iZXzXQAeHX4JmtQvMGG4v1T4LFy135MbjmTcT1EnwyFQjcZDcB1RB16pfDwdghmxejde7AZw83pCy2fnmKMTaA",
  "key36": "2s3Ybfwg3fZimBNew6LPR9Bdcbfrf5Xc8PVmCkRMBqRqyurY9rRffykEGtwcqGnMB95LJtBUbcxzQeAaqJwwwH1p",
  "key37": "48s49KcDyxW1ztMW41PED4vYbQKKm3LY66nLtYhxjUD474Nu4RqSqGWuURFmUG97ajyU2gb3JRQ9MbpNYy4bUbZb",
  "key38": "56GgtmwXzUsLuLx8aHWkoGB4hr7j15T4sqooWqYrAVRuRmEeD2KK5UPfCkk6sxqwBWHho7DsVMtKRjosswLvrakk",
  "key39": "2VMhscbz2vdfcwaCyMFjzoePjSBvzaevxkR5jAoy4FFegX2sXNcuS8B3Eue9uXCnDHV3nnRihURyt5SuLtaETCER",
  "key40": "4t7ts4zEYGobGwCFKhQZrcon2o6kvg1o8xWWC7tp2JHWkgRhZZ1ty62Z3mhxxPxcRtRZdcX4LJJ396yDnpoGihmg",
  "key41": "3hogE9sxGX7mnvyQT11a32pvyQvPeBYkJu7GFTdcxtN25cdafY3cFRjWzvxqr5784v7Sr7gfbpYrJNADehkP1UqC",
  "key42": "2EBBv7ScjYP6MqrWUC3Ntqx9BHMUouPhxCrHjn4jjuGj7UVrWmEBwAbDMdCz7WFzcAUve3rYTLjZEL4uTrQShtpc",
  "key43": "WVzQb5Mo2dBbReWHoAe2E7SrwFz3ynDhro9CckFCTazX4TEvWCoo5rDjM9nQ5t2xRKiQFVXfrcku9CXZVK9JyRR",
  "key44": "2UAz1AJwQpzmCrMDcQK7cvf68HcBwGF6YHVCKdYgHGrPxYbAyiKrRboqbviNpYwX8cNFbY2Wv4dYiyqkCLwBLnAm",
  "key45": "2dAJuDXzF2nQAxNRn45A84XHCV8zHqCGo7dh7BDKb9ApJ1epxVjohgXBKuZh8tHSqcp4K4DqeWoRhARokYbYWJd4",
  "key46": "3MEfCN3JoTW3r326xc2ZpeyXVNU7LWU46oKVPev2fDbVKdvtiwxP5Cdp3MaDKRQVCLVsp9NsUBZgJcMiy26afQbK"
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
