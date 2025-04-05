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
    "ARTkqHwvApCDviHTGhq8nXw2Wf3R6CorVU3fGRtt72KMTPsYs13z3VVbeW5KJ2R9fMPKtstB1m7SWwU5ykCoKbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zoqMn3domB9DhXkRjZm7cTgGJth7aUiQKtgGwdv4hkd1oU46ARBcYuU5t1UvEUZUXuRKqACLAxUm3nDgfdSd6Zs",
  "key1": "3MLvAvBZyopSFakdfJ4iusKE9FNzbf3wJMmL9keyuFrAzuxqYSWoPs5zq17ykrQJzLMpG6Pi7vNHhsEuM3ax4Xaa",
  "key2": "8toGWRVAihpces9TS1M4U3Uz55vEYtUZLnvFD3C2n8n56WCdx5suL4zR2W3rthqmXbUS4qKkJoeA9PKNzr8h13w",
  "key3": "3MkCFhyvt8r2x5HGEVXNjRAoPxmjj5h84nAKTfsYd1crstC3gz28urjBbd5SqYBX4UxGwowj1Q2xHSdMCNf3U4oT",
  "key4": "43vcGLyF7MGscZGUifG1i1f8Ape3RnnLByrxFwmwBLW41JWQg5Nw1vVSBiYAV3CjdarmSiaTrbAE31FDEDk4Cnj",
  "key5": "5D5Kzf3mTJThiyc8kpdoqXALGKa7otaYanLydP6YkBNEyb2MnxcVJd4ge11NdALubnc6oEKUGHQymrpFy36zwJDd",
  "key6": "54YmHr7PQKhr1KVj8WPDo9RqGtV9yC6Hh69k4o2cRmCNk7UfoPibdrryVnwTGWcJtX145ga3zdaBumt6WoBC9p1J",
  "key7": "8vQYUugybe3znAbucTiyDht6GBKQcHXansHoYvaqirDL55KFunnnE8zaavo7rbweo8w3MoYoWheTnG88D8rvoxX",
  "key8": "3zL88HgVmHp2XMvq5r74oASv3zpTkTetmRsyfi5h8RosmiCdcLSPvcQx3NxNRKCuqVg6rKMSvnoZb5BtPdMFK9pm",
  "key9": "4GQ8rhbJzPe798er1xs7ec1r7HN2HUZKkoqs3NtxL7Um9r1X2rHaNa5b5P2PRZtXeKyfjKxUYnuxGebSvVS1EaEh",
  "key10": "3YTBqqjh9kUoMqCRmsxhpJHhgUS7M4WBycLi1FX7Vn4vqE7Ss8E4Lq89KH2xbkDMDWaDYpPgma4MB84gReSfivFf",
  "key11": "34uwiVSucZFVR9bMZYQhBSJPSqtY6a6VP6cULEDBVhxUuRrrBa6NronsdCr1NTKhFu6HhV9tBF76epXaePenAkwa",
  "key12": "2FGNRD3n8tKhzHhkf9XrSJXQCSnaAPKEtz6JQxw7sqgy3AfzRS3irEaKyLH8nTE9UVW8SdJkMTb4Qu4kjbQvuXii",
  "key13": "2vpXJ7UFew7EbiRi2JRXgoPN3kJZCjSkV5Vpy4kv8h267NyD8UpP7nvgyL1ahHDjJ98rArzdVbjHBiK66rd2VdPT",
  "key14": "5Li8rcfW6GZksapFhRrficJA7twCmqhUT31DyMAzbhaP3NCS5BGuioFzjiw46kME59fcUQmFThvKEmzG7pSRuQE9",
  "key15": "3eMT8UByY6Poz6oyuLzKbe4LJQKCCpJZnUZxPpd454ZnfZmDhVgsjtUVwbdTsBX4xyTr9gqRhphAnqJMDbCPgzLy",
  "key16": "5RvsyU7PkC7geYEsUVX1EMHni7KVZqNaeQrkdetjiSzagAA8kbymgVaqzqDRuMWR1HiZnJTvC7LtioahRpcw49Ld",
  "key17": "Sowj2DPTdHzhTX16bqJ3ZkWczP36axoDncVASYD94ojXEgrsCrgjmFB6NaMA6HHztc5ciwHwvVpCQ2PnwhJ3Xc3",
  "key18": "4J3x6rQw8avCwtqTyEgsRKe5LPezBVgVEHhYhdkwPevqHoLCqTD1qPvP7qfa1bZdvGF6XcQuMiBvmUVV8SEVe32Y",
  "key19": "3TWiTNj4xFD31nYeVQaAfeEtQoefNVnpLYXvfDBdKb2CwByQi3aokTfxmQXVfb8Nz7QVF4owtQzotXqaShQHiC7F",
  "key20": "2exnqNPCJWEJ1F2sSgPA9kMqrLvux84zNyPFcFB3u17gLS9q2qB74dz139agTVqTmRx3Dr4B9y2L2kRX1NruSyxD",
  "key21": "5hBA3FDPZEvJAQHpMGyUs6AjJ6hcTRJMbczc7sFStiVSbLffDYNGBbYMYvVbXYHkdddHWs1Cq1ZXvpEo9qChUAME",
  "key22": "2HMhAuA2SqFGXYo5NsdPtgNFcopA1pnyzGd5tUYQuJtyr2ueuBeudjWRM6HwnXNBqybNfNVraeJobWEsMuG6zHaP",
  "key23": "3GxJLm3roFvUvDZnKttMykWCGqhnkgtCvno1G5GHasXNfwdzKPmWMLdAuonz7zWPZAwizPiJhzH3CAFprxXHmbho",
  "key24": "26WE1cRsdC16zqpcenXT6vjhrRcnRhTeE8X7Udgxz4oU9XRCu1h6SPW4HYC9BimvRUwM9BjWvsV1sW5ha1RWQacp",
  "key25": "5ok9okSwRTUdP55QtKSo9EQSfiZLsDHvqUwGBLixViaRJQ3EmH6g7K8NCVaWhPcUjFDc4UwPF2BsFit992iQi3Gn",
  "key26": "2YQJJN4JryiH9bDV1K9optD863jeQyP4KrEK6tYmEhdAfPDNewSrdfrbgkb5FcfvJ7d4VV1JQ7M6dk3xFvS4pZMb",
  "key27": "4zCGfdV443EbPpG55ZWxohxejGK92trfDousxDSwGgJCxae6ri2BhQX31fT1hA262kLefM3eRwtL8RT3w3533Rn7",
  "key28": "2o95Kr76vKUNMcqSCP5hNGvt5CYQziQPtfJ85wyGwdocpnZZRc6m5fGmdaRAW577NJK5xKznHoMJJxaEse2jrxHW",
  "key29": "5sbBDQ4aqoU6eCU9htB8Vx9Soqaa6pa1VmyCctRfMy7FgrhrSh3xpsoTP75rmmbQN8Sj5uBNfLKMmZkiWkXRHxQb",
  "key30": "4ZPFuKTMJsk9B7bF4xmXQDYH3ir5NcqkszW9qemncrWJtionWHTFRDN3AajXjZXqnJcX8vaFZDSTPQ1bUmCs5xD8",
  "key31": "2C52PPn1NKW7o588K7G9VSoco4fQptH6qdsdBrsBEkTbgaaeXz5KKeTa9m9NjTEQB2pwivY33KNd793wkkGqNb8b"
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
