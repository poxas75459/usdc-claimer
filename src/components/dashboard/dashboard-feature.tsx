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
    "3JLVXtwANHMykDKrcxCmoSuuMiB1vUfRnJ3tYa1ijNHPKtyLjhw8BE5WPwxesUkDuKdWo3n8pv8jPUE1dECuo7V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLhpRSf1pStadeFEjvUCp25m7vbQzWHhwKr3DoiBDcTLaHLrAt9tgZxTz2MYUXw1b2zUi3SjvygPr9RSeNvAucm",
  "key1": "26oxzbdJkiMTcPfPPFCBqQLe5Y5CTRXP9tpyAWcFd6GAf7FYuGBw3QDATZhteKSdtBFK7UM8d3SM2FGk9GUKvRZH",
  "key2": "3uCs5xnSrgLCRFXBk5Jv3ijyvgMQW5PZy2FG4NWqxhe4wGN67N9omdo467PxSaJ2dvqY6FmSYZQgDBUbGyFXJGjJ",
  "key3": "5y7qusBX4hB52XEwxUvgTonqstwPDpiz12TpXuRgnKsqsN5rxpg4VNb8bkKswvie1eKArfKc9urfZDcD3gTzzUuW",
  "key4": "3nU3ZXRefet7XZwQdUDPtoHCVGbyvr2K56qXBoH1GKaWpDDWLFHvgDj27PCLTsJLK8kdUhFLHm8M9DQeRXmBHCkx",
  "key5": "5yvYTgyzUJgBBDUWqodoNZCGpyqGjVGzscP5ZVnHRmpp3bFd32qxBhMKssCXdCdN9CrPVB722LbDe5yPeYLf8qRQ",
  "key6": "2NoJw9oXPrqAegNxJgGvEJVun9yJRTeTcGeqzQM75zEeiioGRQQWDYrE4AUbTUVQr8uuhkaQTiCpJGXztbu515GT",
  "key7": "2robFTaFoQNoZYrmwLVoVhQG2wtmkRVHp8BbtcYhw7cCf42dHBNdRW4tqZZ6A2fNfMmQfapL3oGCGghAE6rjdVMv",
  "key8": "3329VuHHkHF55FvnhXmbpTcaC29ozm1QfLLKvEwNxtoPCNEiuYb88vy7wv7KNRLQGxoeH7zohzYJZX3r3g4pXKKj",
  "key9": "62XzMW2o8BMsPtmepg7ZWWUyadrUghHN2NrJgRDiXrhQZb7YQwNWxs4Mn6QwstHq67skcux8tpmQdvZqdSa74tvN",
  "key10": "5iaWj1vrpRdQQdD9gsn18WUt7K5C6qgwFBkiZd3WrG2WgU6ZtRRuWkQqfhPR9zzcV1HmkZVvxiYGGWkGSdj8qbbY",
  "key11": "4edHGytQ4D5TpqDmGKTwCmMdkGTx4yPZPbNTnP85ytByTDRGAR8oNac57C3chfim44odHzNhTwi2NuvaJFmQHWRq",
  "key12": "364vFL2XXp3sp57L8WZfLv5yj2S3DQCeBP6VbNnnh7YCJTKKQA5d5VvWFvZRY2MjiNvPznez2HQ2NoEiRTffwwjF",
  "key13": "49Fu7fxfu12ERtkZsx8gkUekpqXzG6VFwRXGt7XFatVBsLD4ZDU151WASYBtn8ZPCPHSzSoZ6Ci98QeAdX8ifC6A",
  "key14": "52YoB8Q8r54tXGfFFB9b8NCa1RQScRKqFMmCB2yNYc1VRYJHN2gavFZgb58iC9LC56KMVZCDzc7CeAcHb1u5v62i",
  "key15": "4Ys4hvshivRmrXuAqxdLsnZ43XqZ2mkVsR19TrGWYmRPBt5Es6XYuiQZmQQEJZ1G64US5mKQkpd56WXgcfFQsjm2",
  "key16": "P4phSEA4jLRNhauzTeuqJ84tDUGU3PjpeN7BURqRbN1EP2xScVNQygH2Fq2kySTjZ8ZwAzRgt8HDtu7HpUjmBiW",
  "key17": "4ezK8MeYD7KFiPGQEYjtCv9JPBcfmvqHyNX1GrKzGzrm5wqzdVZbFgnHFhGUKxhx7JCvyKowEF4PyCUNbeXTULLA",
  "key18": "4edipxGUn21MhjynDYTZyDyEPDds2riaEdkTnHV7GSEayc4JSYRJP91JudSTYn6RVqGQxb3fFSviJ6ELd5jmwXzW",
  "key19": "5TcK2poG2NnurnXD9nKiVnb592UjHABFNNnZT7B1nSZUkgbpUbnhWMzp9YsW61o4DJeG7W8ADGAdTjuV66ZNfaYr",
  "key20": "3gUVsi5utVm31qYzEHh3K5yK2KVSs63ZHu19tuN9s5FYKraojRFC6Rgs9VMEy37abpv156sdcFVBpcRwpBmmShJE",
  "key21": "3t3SrMoCAbyTBqrzdTwAW8XzVSGqGw5cwowu12wHMvKUgKyLCozCjNCaGHRvVpBKRC8ZWvaP3xqd7KjyMXV3mhgv",
  "key22": "2VjP2wPnS1J4V4EVWa4ifGidfKdoPkUVUQ4Akyj4QngfrX6s6W13FSmy88D4Pndxw5DedTRMoYCFdLqtSL9wXmFT",
  "key23": "28QMt6Dgto21viBieEDGxVMQEZLYRRDX3zxZn9e3oZmdkQUQZFDBUeF7T99RFrEWhamfontC2s4A9hu8S8VhVXzw",
  "key24": "2Wa1BW8TjUAS8gujAYUz1qz6kdrYzMDRaosJUoUeMwzMJCcxDt1qg3t2xw3AN3GrriN68hfNzpG3tHisNXAotbQo",
  "key25": "NSXsh3i1KewNPcRWKCAk2mzsT8Ze6THEGWTDHnnpdf2PFdyEYzE1LbV9ujEK6a6zdYH8MehEiaZtbUzRf56VGhu",
  "key26": "5nAinEihf6eGtZ7sU1n5bnJgJcsNxvXqS8L3eXA1Muec6YHjKci9THsB9Mg4jzHjtuKiRRr8TUrytxSBKajRSTUA",
  "key27": "CRy985WrS7pT6C22sYPZBpWnNS7nQEUqGJzjj1FD1mi3u3S5Lbq4QzqcEKzShU1CR7ZNpM633fKsFrpnCYYKMba",
  "key28": "BUBpAw2e1F2hxAHY5VxyP4DcE2fTPYVV6YXeCgShCShm2KjBWq1VifTUcA8s52Hgk43LVEM9juG7oyBki4KdQAg",
  "key29": "67GWDGzVwnC183o18xfB9zhyprsxyrZ3A8WkfBTCY7LBSeSRnPDXYWiTtw8tfFM747gz4s9wjRty8fuXVcNGhkXz",
  "key30": "5Ea1uszSGniyXGuWCE2Vtb7evAj6QQamXkN3ckkUbFLANtMydBvNFupm1zJk38UHeFHpHU2jsssLtvgYh7QJnEuK",
  "key31": "5X7jrwmqVAL9ezknMKHzhKKtm7abREJTQrvvQChY4Yf1dqhVeKGEHvsMNowytXdLrF2dreufqqzPaAwRW62qSzCo",
  "key32": "2BtxCEBwNPUJdAnJg3caDrfum8WsVU9EaNNrSEc3vEVQPcvTpw5m4Rwrs1NpuDBLJXqZxduQPXDmvfX1RDmQhabq",
  "key33": "36aP2VbmEmK3MESRsekW5F2y11E6eNQoyLuexT3qREeRoiRzpiNURQFzJrXvkbFWXvHZ6ujXCcp78NSnivXRvCjD",
  "key34": "UJEDSHxqDfJEzMhWfDexQKfD9yVEiYui6VMJX2Fy2jXvTAj9vYQqaW9RDAgB9s1vTo3ACFPYBz6nMeCbmknWRUa",
  "key35": "2LqZMt6kKarpKT2xmiSZ2tB1jUxtmc1ThRbBLzCoNSbsR8EJPhjoM44Z3ZENLe83w6yrz1dAxc7vvBotc4JXcJVc",
  "key36": "5X8GXUvCuW9bQs37Dnvi7w7SSxBYkBXTCz1VdFVUYjVHkq7XsJKCP6sbyKsahQa77FQNtkCMyEreHMTczrNeEpcV",
  "key37": "44DSKnwa9FDdFeqY48vZJVvU9GoNW93tny51UJDAu5mcJAoYiugkbbxmK31FnGi8B2Eg8eoDB129x7f5yhsMGjYe",
  "key38": "56SBW99uMEXJBFHSFRdiGSLFHkCmcCKfVEhzBfrCay2usbfkGdmMcLRcPzXAo5SVi8NfyPdT4Q7a2JapdLhxYhPv",
  "key39": "66BknXb38m88wHG6pfsNjupEB3Vt1n4td2DVKafcRxw7fyPZoBbXK3AabJEYzrK9Aj1cpJFEo9ShWq3tKindCC6h",
  "key40": "3HYMf6aqmhUY1dNYKkiApB5YDnn5rFM8NGxxuFY51q6DBqJDVzRXyS1ssEgt86P7XVPVzC1gBfUBxDhrsyLyvmU9",
  "key41": "2NaP2QL4RBdNirawNtjmezWjnsy3NERGNGfaQExw8GnaGDvnQLZ5thTxft6WhMmrBmkwRTj49ANEw95L87ruXZtm",
  "key42": "2W271zfLuXb9mH9TBpZKYaHVHjHKGdTwpi9uxbWnw2VcC4WX1gUsXNKSQW3CNYhrbVqaTvymkGLXJrzg2PpYf5Ks",
  "key43": "26hmuCZEKMDRbA6yFDAVWTGRCA1WyZznnxmZe7VpmFPjGboaJPZk7tcSsFuz9HnjjmsSXi8bSZ7BE51ZLe28Zowg",
  "key44": "5AyFm3XfaJu5svoFp5TuUGmMeHgvde81BvPdZQFNmqAB8nmp9gR3EEqMVb9PymLnwTi79E257TgaWbHNpq6o8gNa",
  "key45": "42fpS3SQUPk2ZWGPFUyvdysPnDfUSLsFmSi2HcMKSLJSCHX4ffjL3TeBQKoXt8ZPmuQB1tHsaLWcSttEFHmfk8Fw",
  "key46": "2v1m6myLbGLPgBjxms63V4UiuEfJk5PqvLEkJJPLg675hr7W81pyRKa8xAoMf2hwjBx3FYuU7WB5KHePR3kfRaGZ",
  "key47": "2Y3DaKuGMGQczYELi36qj42nyo2WRbddZSKVjy1uRVBVShDqxdcQqcJZajMgpXJxYLBsU5fZFcZBQ3nqpWsVJFB9",
  "key48": "5LCFeYkt1doFDFsifJr4VadwT771za5R6mu3Cyyyb4DdMwD4zhZJWVW86hKhZ96R2TzMEV3pi3MoRRXBgqMXuQv2",
  "key49": "4GBSWw4HzZyWySSMoWUQUKBeeibWvboWiEET9LXKP6P2Evm47LrgmG2AqowP8fqe15s7jUH1DqBm1GJHNxaQAQXT"
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
