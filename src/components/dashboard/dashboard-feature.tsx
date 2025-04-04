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
    "fTto96cSH1pJRS2kxJV9y45RMgtQMguSNwCJufzJTCVtTSFcM8Abqye2m2pNBqWa1d13k9ZExcyiak1KM2zbgDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dj3pFWgNKqcPYpJy5a35YMp67FeY31cddHH9zPFuvhAGq9WxQ4aLGb8pUoaFbppxNg5Q3iNJFCb1SVD1eCj3cJ",
  "key1": "2q24EBtk716bBrRRee6AuC3ehLDP2FH9WxDNDTz4Zoio5JWUH8u5JGVw8QjvfAnbS11JPsg1jsKZdejsuvkTyk33",
  "key2": "2YxrmA5Whif1t8x7MBcCphJkubkL9nMVWdpvz8vSjPKcPacswneT1L2pVF3x1r5Aeci2ptqdgZdUT4QGwWcV2968",
  "key3": "5Z4HkmZ8VkNHZAW42jGBVd6gcmb8orGd3qBDqXbSYLYYU6Sb9njUACwQHkghgqxvBaCBS1e4AJ3HEXJX1npEbtgE",
  "key4": "pc5bxSewGi9QxqT2sJwnQMZtVpQjzjnoLGuLrkasnEE2rY6Yff7S8ZrKPbxKf52GnVyWYKpnrNGedfUMc9yWoSY",
  "key5": "3EJoFhFvTFnWeq2iBzgNEwRezgK97uapwhz6iNh53oSig3sRcdsUcGaTQEVCwk3oTUTiMsgkCXg2J7HsE6RyCh6Y",
  "key6": "2VBCFafKGcvzMarJyfcBpL9JZYTDqiyQGNC3cSFAr1mXVaNV7UDJcG5VS3BqScVfW2KN3CicE1f9McTdoyWYrKHo",
  "key7": "4fzZk7rHUxh98GgvGNHLu3CA4wRdFdQuDjziSuy1d2NQTEH9wdLbrN8vQutkJ82U7Adq3EA7nW4udxdv3uNpAHdS",
  "key8": "3whXScp7gThUEksgGePftY4hoowF1uMQNq45V2oSqgPVWcXC9KXjefVxEdxaK1iW2f1zNGfAR6TZF1g4WLhQJU2a",
  "key9": "49hVatTSz8xvxRPpAfhdcPWnAxGUXPmxWNukmh6cSfonrbSxBUyVg1CXxTGwdJgQQ3mmGFajMUjD5NhGLvoP9Av9",
  "key10": "5fXEQFpfrYVV52tG1eqXhsWuPgXJ6HgC5QWg9xd7KfFSWYXZ5sK7FMokpBo4dyZvnCiDG3qtMfp6A8ChuuzDudGE",
  "key11": "5vASmFFgqNF5EkNfEpna5DGU6BuBSuQJgNgsHZAwJfdT3ozY7ioWBV8J6tiGrrpCTRaK22QBQzd6wyRZXi2dsHbR",
  "key12": "WQmyQBvUKCYhA4hLamAMAZw4jSxW63LiKjEMJCTYtGwABzSySh4mtKKQafpd6peV5z2KZeZKMaiYCYXbFoXa8on",
  "key13": "3DNqweaU1KUqE9Gi74ayTviJPHmhGGxftuKpUR7Hhi35oeR78uXXvn8iqrseo9fHicmFwCjNTrhZagBu7GMMP1FQ",
  "key14": "5DkygnkQmsTfB44gsJJ9WmpJaiwo1juUSGYaWwVyprseFnHnGEnEAWrd5CGfR6gJmdNQXkmCDVUJwrJPt8ez9QQR",
  "key15": "5eRGEjQcf1ADDsKveqrj4TE7UmNxRapuqeVEHzxJn7MCE85BU1cxvhx4rxGyaYkbrpfkkgzoHqP5am9C8rFmHMjq",
  "key16": "5dtnu58z58yzVUAeuumecXcdknajmTbaW14fVrd4s7TcpZXev8o1yyyYCmHyp5zEjE4oaXazrxPuot62NnnjqAcP",
  "key17": "4bH7uS8YYWNRBuDrfsEiELLEKE5JqD3hmjNReiF8nZ7hJ1Ne4r6yvFK4coyjRFb7nePW7SzKiQPFE95prVsHvJAX",
  "key18": "32CDA6krt8M5Uzpgdwkqkz9gJmzqocvnZYDmLmt12s9PMTDAy9iWqrU1qc9k7vRZ4vgrSugBPENaaF9dFUkQvysT",
  "key19": "5NDoV7BL7xsCQN5arZTprf4VNn6mjex2vChnz2dDWA3wb5P91suKM743NouXdBwpM9u9knMSV1LB91FgvcskJZxE",
  "key20": "5qEme3b2z9p19mun1KL7KE4PTNZUN2DHthNJu9VZCKoosxeXSZfMcc3Cc4ztkYa98kqQk9zcvZLEGi3W8iHJMKf2",
  "key21": "2mjYPnNdspV1zuxMXgXRqzoX3aqVXjGzcAMZPwXzg5fFpnL7KzJvpEtrppLP7sDBtkwK2mqjY7qZLx3t8moNvdf5",
  "key22": "5sBvqhwzqLVzatFVxHAtxoKLZi4B3e1zYbFgAenfCRrkQXXhRTb4o5AgSwREDgD8eJu689cNdjNvLRSaaAmGmcT1",
  "key23": "48b6oZygaZNutxgahHnQWAVvkNd91Kb4MiHBkqpmqZFz3yL83TTsbnPRGrvXgGUWfcuBkuhPCYBqgoBzsc4nLcR1",
  "key24": "4vEXiF58FDjFbr3kctK5Xj3xdduMybgo1hRF8S9WvapPsT3EoZdPmE3ABbLp5p4ZEGgNKmAc34SQH48zmmosKkcw",
  "key25": "5qELiahtt1iVQxAu27Px1jdyEYpKs7oj9miFg6pvGsqBuosHeegMBBe94qSozurY1fMycujmhsJeTKo9xX1jgiv9",
  "key26": "4uvSbVnE1NRckx92bAdkop8bAnbPye3W6PZ5eBhkidNE1SSCCAixA5CR7za8af4wmKZmwdkz1RR2rv2BubWkDPVx",
  "key27": "4fbGU4wJCv8Cot7vMmDWmvHSH1YteWhp6JpKP1c4BEiJyQxRz2Tkhay8m3vd9NLDYEXRBmTNeuqwaBs3qRdAPawo",
  "key28": "6zG8q5Qi4RR24mDWdu2HGJMkKVNFzvGEeJwv4KVAtr2fpiRXXVA4XvziLGJRKZ6QqNdVynECMo7VfNUxLPCZo1S",
  "key29": "5535BUyNWtWi76oARAN1nx4nuFV7sYHFqPRNK7TqQQ8JHeUPLLQNqPY1QCW3DycqV1KjLGhvzxkTCUcEnV5CuVLH",
  "key30": "3KSqhYVRPWcukF9jWDZgiqRQmNWEHHVoY1Jy9mfvS5QapHB1dac4qjvRLn69pNWwNYKpj1iLZWn5bkduVeiisbM7",
  "key31": "31e9u7CCbw8dEHJdjTztDA9NHH8LNRaFHTrUzzfwmoFNrRh9cm7xFxUnRMJuQYudyLvTkLL9C3mzRk6ozDKS7hbo",
  "key32": "3nHNHxNEMgh68fTDNuQjTspXN5PvvdzNJJE3oT9ac8x23kXD6nqPCpZasdnz2mHAi6Rhuu9v7VGsZFjwXCMMcYFF",
  "key33": "4KQEf3113N4eKaRyNh4udKF3vUmab3qATWtniXhJMXbWtYf4mdVcuEC9wYuep6DD3VS9HjKRMV9xvwh8JbLrp7gM",
  "key34": "3bwCmAkf8rypoNLmJDvm3GSEdJ9rrx314uNbJhVSH31NUKPc8NCycCwTt4cLFT7vnYRin7fc7frUxJ6zThiGKWU2",
  "key35": "3Yjouz5WT9HH2UvswQV2aMuEmRHKZzCHEkTkKeDh51NLYHKiRm4jUyT1Az3UotLPPR2FtDH8Nhv2jJQA9ZDCTJuN",
  "key36": "pLgzZaD3Y2Bba6LmUnH1oNSCmig81stfaLEukA9W2KU3nGXSpu8isUa1GgDTE3L5MjQoS11haJBPRDhSSbHBssK",
  "key37": "4yGeG4jutJUiobAM3DbjjH7xxPWG8XXtweSgCMDwqCUPNErRHKjNbPFB4MXrxq5YPR8KcUd1UyNP5VTTjtB2p32d",
  "key38": "SHBytgd4jTAqY2dNkXTwfsV3JnJP3PWESUQofJNSQunCGTdb2mKP4vLDXTWWqXaN9CvBFewVZUHN2drKRvjNWyJ",
  "key39": "4buBQvfRoF5jQJzUvWaCHQRsXbzvmidmXYnAf2EQTrnVQvGGTT8RPahiE249BfdSwRK1gUEvAsUuQA1T45VGtvbB",
  "key40": "4fzSyJ1SqUFu7fAoL7GDtbrMERUCjcKJxxdA8N869CgkHdJ59WMgAt8iGvkh5GwA1eFiTxs6eB7uwopq4feh6EcG",
  "key41": "48MuByBwHwughGdtQuhfa4xgp4qGUGdFLZSy6T8xy8z6PRgLSGUheBiBZ72GgwWr6MD1cyAn2gZ9Kwvc1nvEyBY2",
  "key42": "tA4SzqsWBDpV8w1RX57KDbPTQ3o5YxcuzGA97ig3ABSKyDQRGbCwqHKYWHaiZb46N7m5hrNTmtxserfFue9Q1LC",
  "key43": "434xDFLW7BQzR5XxPTuxaosmKXLWE2Xb8xfzyZiVyR2rR4NKVtvLiGzjhoF2Grt8WUsWquweZFk8SBQSHZ31nyuz",
  "key44": "5xMV1XKUcxEnTifQHGToSDf2SHn9ZikF3xRSXoXyP8GwG3RBgsuDDzypF9PBmo7C36ZH7VdYWWxt62YJxrkPqrmH",
  "key45": "5PU5xdAUk48zjuBcQvjzEdudPsEeUi79FcbDkkEyofhEadzc7TbZweR5bGsCEhfuajAZjexWnD7AigwvqAAvbbvy",
  "key46": "2b9NtVZSaRVvL41JWZjTqRYkSjgMVEaspTBsSNm8G6sudHpSbw8uWPyFBsmHTLoRiLCzC5r6yE5cimx3MXL4MvtW",
  "key47": "5yMx5y1AcaiHQJXTDtw1HjpmCKsw8ySPuxFcmwNWa6JhhcaNhu2zXid3fULPGzSSDrJk1Pjarnivda9D6xxo18Nh"
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
