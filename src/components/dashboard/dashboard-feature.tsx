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
    "5Tn18dRREx25FQAFZxDxBFckGPmLXyVw7CyqmxVGZUbb8MyxDVzoNVUFJwmb3XAvX4UCmqBLAFHeY2NoojX8n3Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiJDGKzwedoCJRrktBRymZUaP297Le5thYxBFWxhv8cKjHLxbBhEXzEnqCMTUTCVabTqZPbXhMQAC72PqNcRXkz",
  "key1": "UWdAFj2yv8xZXBy4s7ToXQjAbVrKiHj91sh6agrM54WeQuMHDFNR5bFM7MdBvTqZobp6X13Y8736Rzy9auLQXb5",
  "key2": "2nLbsVDPcQHPfDYoHbsVSFNHfqz2pLjLTpzMr4VbDFFMbGHbwSosDjf781PegSjpbU8Q4tYgzpE5GPnHCrr8yW1u",
  "key3": "peC1FgyAMToooVRPvhwXdiwb3oS7sz5iQvGUJA73XADfHrxdGBgWoM25h3cve8j48Y7juifiWauS4sXVb3vCUGC",
  "key4": "ZT76Vzbq2tMs2EtgUXEqvpQum7J3qxFyUufXPf7jmWzuLr8w9n8rPigqpcjsthDgrL27MAZr1VRBURU3Hd3295M",
  "key5": "5Wg5CgGmYAoVP9WyS2XfQ4Ci7cxu834tsb1w4fPNMTjqwqhVaudBtnqfbWi2oJyeua9Nw2b1x3QTo6d9XdxFvoXj",
  "key6": "4CDUaCpV8XHTTZYp2m2zLKyC69tQtfqGjne28zSFLsvQxtxhdx3A2ECeKxyU2JkuxJot39eAGmdtyMXqjdkYf6TX",
  "key7": "4yD72ssLapXvFK15DYh5ipu3Yy1t325P4hK4bfZQUJYuERhWvdMpdoEciaZAmuLwbkGj7D35Qv9HoU55Z1VxySb8",
  "key8": "2ewJx6FAejru7LiLwLkBpafiLFkH19EQxRLxfo4a2JXqruGFW4Zsqa9ujkpLPwoCkf8qvxdtuokJmmMYCN1K9q8H",
  "key9": "27yDCQS7YHAKeR8xvaxPSYHeRodiURsfnDAVKy5GRV2RW7wDtZzcbahfE3CQM7djL2ViXBSGKe9tSjZK4Dc7e5s8",
  "key10": "5wrTabS4wiDecjwjhWDcskmU9v7VvsqvuZTUTxDD3Fxb12ccQPsMSZBNC2P4ER8tjuZ4dWLPjbPpiYUVyPbSkrhd",
  "key11": "5CNHjx4Ach6oMLMaFiwEWxe9RRVW82YfYwSWR4PdSYDcQFerAfzSwStmDa1F2ciij9RP7HF1txTRL4T96zqmatRC",
  "key12": "5RKu1pdSyGwoiJLB16YUscJQAsPSBAvyZX9vbo8w978HJq973qLTJqA7KcNCey3iwQ7Usr7nedU5jLkQB2gFB5Qa",
  "key13": "2Sr2y2WwKm4S1EntkZ7CmaQXWwFQUW8ivNn9u4MrvRDNop1sdBaswzJsT7CWiVb6QPFkPAAdVzrvHK7m3LcUiHp1",
  "key14": "PeYjd3HWwpXhZwRjyEeBj6o7Qx1LsoUebd2JccH6djsj5fzxmnVGdPBScx8duoLstQ44RbyPU68YSehYx4Myf4k",
  "key15": "fUPY8oJj6PgHr64Hu5YtPT6dF6ETEyt4CH7qcFLWZ5P2QPt8cbUrxhSo77rHruqyMtns3fXaJXPg7EreVJGUFfc",
  "key16": "AJnWtGSGvvPxz63vUE2o4PFfYw1coxydXffJ4R2xYksGrvRs7uY9j3b8QBgcjszR4W2uSvxdTz4iQA4y6DLz8R6",
  "key17": "4UFsDbi1uLFX5FpP6X5MGaBCswP59W9CdfJtjnDe9uAU6vQ5SUrta8jtNH1VX21PKTtquq97Tcp92xpdcCb2vmYL",
  "key18": "5N9Fw4n9MMQoPCnn1U4Dd8nHrg2tAUz5HWQQ38UuBM1g9mRdJK9zPn2QFLEvNuzurKzJWMPv11GyHcXJjVMCmV7f",
  "key19": "4Kktznj9TFdHqR8tTDa482cWYVvR7BRvdXEDbha2wY6JQ7V4GKGeACWeJGvgnmKaiz4F7YqgsFtVHpU8YBVLMkAx",
  "key20": "5u1B7R8o9Q2rvSsce6D8m4E8hNZqKeDNdeFjHu95QqMyjVwhiSrYY2BUarreVP6DUwqzy69P1HVCsY5zxmCmLSuL",
  "key21": "3qeE9TiSRstKcDwvNNYF6dRDS3uRh3s2hY8VV27rNWaqag2sWTDXHEgagbUjMqdQYbcsJHKwYDC62Y13pUVF529V",
  "key22": "2FprzdTYC82BiHgs65oBt4cGVWsVpNEDZVsWNe7yvMbJSYXhPxgEnasycMeCGHTUVobBWLxvJZzEpAMK51Ezw5QZ",
  "key23": "5ibUrzGW4c3pNhbnsCeLcyeZNjH4d5FphqzzKXR2hJe3TBBsVTGKzcLJmWB2qYYfhj1r2RhkQkbDfDUB2fJTFJaM",
  "key24": "4rgyRVa7B7s4nwL7FAUuMc9rTboM12mksqNhBJwSjqtfwZBuSp43m1p3uwSAvN2xQTL21fQg7LrvsacnG33WC1uc",
  "key25": "3nLTHBpf7jexpNmqzD9HmqenufqAouqtEAoFVH5NLWPydHqhvYQck8n95pssQh2W3cH6nQNRay5skQmtnRPZ9UW4",
  "key26": "58b2mCZv42NV5AskPzjiaJspEXcSi9D7TyievvZyxBBBizHkve1VHyUyk7nbojUZL6psFwBjdx7NmHsuc54Y4ryX",
  "key27": "3TDk6EAHxuHqkorL2MkAdHGRLmZxBwyX955aFj9WN4BVWifHpkMZXtHECsMMrSE2VJAZS2Dp5mYXpArZjfxrPex2",
  "key28": "dpHuMcf6bKvF3Te8q74uURXjtKsJ3EKvreqBHLRatGmuZ9SfdUyAJ2nyhNewYHkEey3tJVpKkLpj7rbCPL64CPt",
  "key29": "4Gnd2k7jpNMEB8Hv7FyaGgkvVmJH3er7KAQDp52HZc6SUzpw13t3aZK78PeKs5nJfWSwXH1HGNtuJydCLZ2g2MZ7",
  "key30": "eGUR1kHKxWrDeWfCFh8p4nf7qo3sroxgN2J3QHvUynX8WfvBRf9wqZMBGeozZVh8VT5evo2v76FUxAm4Lje8kka",
  "key31": "26CTXxMHoqEEnGBzPUkNna1W17DNoSm3FaJ2zBxWaL86k43AJK2S2kDAUu1pfKMXctucVUbMTAChxsQ2c3J3Vnjw",
  "key32": "5xJwZL4ktHkB2fFcu7yTP7XXgGWGuvnGPyZdagKxdEX28LXBaJLbAY8LuDW9sC4P7fNz41Bd866GHPCtGaopRw6q",
  "key33": "4L73dvS7jCPErdq4bC2s3mvLhuTBZpwrkpc1Ctqh4oVnZdc2GQmkQj7UuSds9jfznT2VfNkdnhA6df6D78eyAJdB",
  "key34": "4CRPzFCFVb1PPxjaCRqvPHedcPBxnsVZRcp2tL5mAERiTnW9tyJZse1EVJ4AYkzBKcTr4rVcEEGqokEXNS6e454E",
  "key35": "3H1CYb9QwRE6h6wdjWbb88cLBNrx9yqi7yNe1yXwUJdwq3eMUiAr5a5PJNU397hStXbGNcxQBWCWkJ7qHdYS47R1",
  "key36": "2eJjh8PWT83wQwy9BWbe9XV9qBF6GwscMDN6wXLWHJ5sSNgxfPWvJKwKaugbAFi8d8PTutgue61GniyXu6U3kxCA",
  "key37": "2vNWgUSn2ofiv9DxmzDao5M88Y4pznF9hKGmnAD44HZ5BcYitKwHRQund4Y3jubdJwm9GYgZDh8T4SdiRfGFuYCN",
  "key38": "HYL9XDCUVL9hb4EpRPNWY9mfshw34thVPQhVxBqJPEKaFwyKS4tpBV4vPGmrxWWivErHwj6cz5cn66QCxEygwmR",
  "key39": "2ZkzR1JBUQ6jh3amohEU899LbiWcnjo9sfYZ1kyfTWyzMCDo8QsKeYCEJcuRuG8YHNZDEu94eo7oQdXH6Xy7pzmo",
  "key40": "3UrwRH9mu9mnFqVwTk2fDkCxxqWvnALDfrK4ZSimZoZYVN96QGW6XmCUUmt5PrVhj9UpR6spd3DDBmfnHU8jJy6E",
  "key41": "2DjTc5wNbpes4njuojYxMnGaF8q4qq8zH7pF2YGn4eGGe3eTK8yxx4sK3UH9aVsgVvwoQYp47TxgP99pz8LgV4Fs",
  "key42": "2sXMki5RpDu8pYsGfB8WJUebW4RwF3rSbMGdEbP4G4c8qTw46fwCw89kf3nqnXJq4ZX98k3eJVAardTHLW363Yot",
  "key43": "3TJG33DMYwAq3DFJT2pe57ENUu4WkCX9sVbtxMSAgBXTo9fdL5onWM2zFUJNCjJv9kvREFGVz3jZqUMet1unQwSo",
  "key44": "3FBUhx3CjrJ3cqh9PZFfLCvXeQ3V2dGhxPKfkEHbepC5VCNqQeWtFbbbGUxsaNLgP4aKnENHhqT5aX9nVzdtLZyB",
  "key45": "f9MVDpyVvU3KY8f1Vhi1D18rt3mbZfNx55YWJn4WHb66ZsBS8PqRbWdQ3GSeLYAwtk3bPpCRNwNWEtUmrgADA96"
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
