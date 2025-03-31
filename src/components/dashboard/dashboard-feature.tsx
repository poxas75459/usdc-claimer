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
    "2WwCLRnZbtKr9Sa2G3Ga8nuQi9agBA24a5jrDQa4TTyfQVmuHJaVjoxFrhqRVRCMkTormnoUHiw6THoVQMRs15NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfEPxXNa1A34qqzgBJUuKSG4x4wpgrMrD5V8Z2u2QXz5kJzqwyX4YqA3nGarTf5JZVQTZ9hrpFViYbwRx4W22AM",
  "key1": "5rf9jWt2nrkMBSmR8L6tKkWeeF6u2Ep7MvoPK3bA86gfcsErPNSEBvuxiqTbzA6Ev4hgu2HUjxyXRVnjTAkeDWH2",
  "key2": "5CAKW1gfSe9RGkWjtQ63C6mrQh1Xh83o5LphJ7jZpa43AQRWqxHureWz5HgwT5VPj91XCQLxkNfdyqmBtSZ9Vp5f",
  "key3": "xzWLdUfMBuSiD4Jaojb4vGEBotn2SKanVNPxzzeBnLs9x738zzMzQsdwkcLeky6f6wHQQewdfSQUfP8JdLLq3CK",
  "key4": "2gXovoKkp1w83YLSjuV6LmtHM941edM7Yqw6wpT3v3XfmjWm3fEqm5RcEwupmyd74Rvip5mLbbtyB426UVhJbDeP",
  "key5": "2q9kGGK2sQzS6R1ZPXEmH7AYaat9V7bdSLzQ8RhqA1Vpp4muudUScmds4JSnhVw6s2QEjAjYaVD21Ck47wx4TDNa",
  "key6": "dwQkwgD9frqwjV6aUTyjYEsAFnGCRvzLwZFNPPPXKMbg4e1Tq79qGo5Ld9BVqkPKsKKwSzLzPYwbmmPbJSwEvDH",
  "key7": "2WRNmMngfXQ4MvnDRC9DRZppGvKgLNsjnDgPu55K3hxfeUhuHUbrWrzQ5DMqLDoZRrQZpxwCEedi9dwiPEifzLKE",
  "key8": "4TQXBGaWMTT2dd2fvvMkmicREBNgT3dxSAsW9BFN4LxRRTXcHbaCQepmBqWNqWKx5awNdU3GTvK6kkmQJqTomQRA",
  "key9": "5WAVwSCVESdarCdjMEyqLWcgovoyTGihEN5r5LnefKVWV2YaZs8Xih83Xohjh21WCEyzw9K68kuoNdvrUATMzv2c",
  "key10": "41kjtAzB8NYLU2U3FWfoXvJhQi4M9AcfSRTFjpSwrVDrof8DoPjwDiaMMT7jdCkSAs3RKJyi7JmbBDX8DQGLHgLf",
  "key11": "3iHNmWa3KDWVBeE9QPnoNnWTZuth6bizBNFiJPQxoStCuN9vRMNjCwLgm4UVR7tBt9wFVKbBYM67E1ehtSLndorL",
  "key12": "3bd1dTx3CgF9DGauXhy3awLiJGGYqDkaCf8TE75Dz2bu1pc5PhcxABR7zEGsMjtefSPscphTqhoRJVcwHA5S1FpG",
  "key13": "NTF9Nc42KBHygdFdqyH6cb8Q7giV8zBxS81FV1bmF5WsBKk8HURXrEqpnMKfLFdT6D89LByu3YgcSnGctk8gVPj",
  "key14": "4FSa3WiV4aLr8y7V1aQt1ZjtdQX9eFBuZqypAoE3YWCBwPKzsj5ueWkYyx4JzaD4WcpCAf1CtJW2pA3H29BE1kMA",
  "key15": "4RcrZBpXMwTE97KdqFX6aBKQARV3iRLcbouD6Q8Y9xSFsUn2PJv1nr794KNt67ycPqMZMSPeb2GvCt7DxrRa4qxN",
  "key16": "3gDpjfPxC1y4TBG1BVuztJANZ2ioC8SQG2skzLYeYhHzgsEFRrhD8q5fSQw34bRnCppTNpA5CBgT95tFFVDJbojm",
  "key17": "2RqxtrHDAax7XnTsjxDJyD1yjD1rDYGNhHZEoJCVAUFeVdLwB4kS6z9o232jxNYoU3FaH33FTX7iafVZiMha9eoW",
  "key18": "3ioApt4uJC7A8m7pwhtUqPCT4YEJp1aEZ7HaPk9wqPPDcisQZuNeo1e317fGwXvYDiE1o8ThcEvbniS4jHJt6mt2",
  "key19": "2EAZevpVokSDRxQYsvG5wZPdd47j9FtF4JowsBjg2935kMc7szbGdcQL2J6fcDdkUhQMAXRnJE2LDNj4Xhs9PaGD",
  "key20": "5RKwC6vUxqmkBXUSFz9hG6ggtUeBDwYkYSGTrEAo6pkSs142ojah18zSps9V9aNgTPe7PoFw27VhKK8ETHKbQWmC",
  "key21": "B44wPqKcnd73A3NYkxtotgUmU6nj5mfAkCXZvzoE2EKSKNRBBJ8JdBp5zFtDq5vEQQLTckQNK5RSsbMtMCiLLM1",
  "key22": "4fsRqyWYLWSUoiPdNtk43GCJnv8AhVxfyhBbhRQkqNvHt1fZDwyW6sWy8BZz384C24cw5kGwi7NyueHmAHcBnEgD",
  "key23": "56cKXNE589ozx4cma2ZwtsYexPq94kigB3xmNcbtFjQ3GHSv2Nrhsuz7awZohEkbdfc6FE8d9uzccj3LKRDZXpq",
  "key24": "61SGGaYyqzhfJGGqFhz5twZo9ZmxDcXE8K98vc3YsVwAq8MvqD3FTGWVtqhn6QZas5CEtvAck2gE6aNKbajiXhY",
  "key25": "3X7CUscQUhzqJFU5biP2NzL2GYi7r8AevAxErH8sKvJjPZV8Ld1cWGMzhjyzKvVWz2r7yQGNDatuwkW9pk8E2thT",
  "key26": "4m5mVUBjuSqDQr7sDENXELbfUX42sqYVfSUQkUNcC7ncRyvCEpJQHg34vj8ZSBGC5yRzVGBbW9NFADDV4MrqtKsM",
  "key27": "5daLouVnbhpy1u8YBY3hYk8vu7An7QFZ2nQy8aJKyNsW2e7HrWdKX43kbFJGG3FiBmgyFb63TM3rCZgvt237z8g3",
  "key28": "2EJBMUHJPguWpzUe3jbritiphEQi2LVHqWgcgKGveWR3T65LL6PbpCfxDiruVc6ioAPTZoPGkCfx2K1QSRDBg5vC",
  "key29": "fhryjUXFMWVBx9b2gPoYD5B4M6JbDg3dpctn3tcFY7eReXXYEhphNbVtBhugz7N5RcQ2JyPVE2SCFyKwwTs4zKj",
  "key30": "2Z1hx2A3fao9BUKgPohHAtxUWsPLV4fm9CCY3zaevahSdQiT4NEWKx2cerFhPNGyiMYdzH1phN7x7TrZStieo7zc",
  "key31": "2ZFMTu4LMAN2mxVWxmwCB4f93VcxsA8jwUuT9vBgoLrEWj9MqTaCoR8aS4HnGiSFUsDCNEDuXCHY1zPg87LYTjen",
  "key32": "5DW4fGbnNgsfLSFEyDkVNQGkiDs6S3LMebvWvoeex2xjNfjMr6tEBd5bTqtUmUwq3Fsn18xzYfJzjUhAgEPpoU2o",
  "key33": "2V6vrfNRvsHLumAqfJ65csJFx5rvVzVVHj3eS7CaGXJC2m9D9gxTRSzoouWEsnnESyEk9HyCbWESStD4mbjmTnHF",
  "key34": "5VEyyTLadBaaPHjrvCrg7ojamZ5DQMENRZ8bCxaCZPFthGXCbR4pK5rkFWZo2unaMsyzuE6UZavN6LTDUA9yqu4P",
  "key35": "4tVL65yAt989YsTxi4ecxRa9QxAw1iE8BUWi7Av2dinaMpq8uUYb674GCKbm1D6TVrqehKaQTsm5c7hww6roEPUS",
  "key36": "5YfH6pPLXApgqeeRNJpHL5EHUvKh7t9HegpVMijwHfTG26NzzZWNao5feTmta59fw6r3xDoUdEWQU76Wc25ybaVT"
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
