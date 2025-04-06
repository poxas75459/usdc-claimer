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
    "tD17CGBojxuzB6Y6ELv3LtungoSuVLjNUAHRvHyMa7NVrPDF4J6DmPgtwNYvphXSC5iru73V8ocNHeiEjXNE9m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5ecxXrS2RVfExSAqgBYqmfA6YiaButpTtUGkkq5qLaD2LMJ2oiHeHb62oQy16YYtMKPFUM4goSVSmyjA1HTdQG",
  "key1": "3zxSxgJebCNFg8scLojD2PgsBbjW9XdnhydvEBBEkn8HdrZT3C3hm9og3wjLkMUiPuMEtrYbZeLNgjTjDKmFpoTZ",
  "key2": "F1t1dyrmR8c8JwU3QNKsWw8RvDZgyq7yrbcNRP8zqJ8j29fo76JGbokqb5Q8rBJrHjR3cRjNGxwmC5kbnQbCbqS",
  "key3": "4WuBvQE7zVWNNjwDg1pQ1VhmXKc2PBoi1X5zJzFV4bTxBie7YUAVGuxoE7e2NuUREkPPJobYiLrtmRAfSbSdnXkA",
  "key4": "Y6LK22ds63HqAdEfEVTyji7oXxAarmRMj1mv1fvJz8EzhrFbK45mAKNhzvMtN148up93MmBJDhdaYevxnxQRjLm",
  "key5": "67VPH8W1k5ZTGPFm7kbgVqfXD4mTEgbrjiyaHzpfgmrVs3XaqtGrPx8mKytEgsX6AKKXgx4wDHjZePdTb1bAKJuq",
  "key6": "nBL5rKKzMy3d9WLgG8CPk9cEThBbcKFUEBCrRj3TkMR3EzTbxacCYAj6M81k4Db8EJ46rS8YXAV8aEKPFKKjaho",
  "key7": "2LNb7me28RjqMJUUpDnsfuios65d4XvLZSLA5aBPjVyx45JxeVAMbyiR4yxyxPR8Q8mPhNqMCiT7xuRev43QRNnX",
  "key8": "5j7saGy15tA33sk5LQ6GzmZiWxxoks5srhN3ozQh7zvBCiDYrGwiuSEDFxEKBEd5JxR3DuAxCqeyVJLeLdvZNeJk",
  "key9": "3RfdwG3Fbrf1EJH532L6osajTLXzSThVGsiJc8B4MgL7r37CV2UDSVv6Gtm49NSMhJuRZs8Mmg7UMhx8J5t26Gb2",
  "key10": "V7mW9qfhvYt6Ymp3vbn16rvB2DGQH1dZ6tyBmTbo3xSaBD8e9Gsqepiq6PPz8gu8YqVgYSm5WKGZTzJUDN9fCN8",
  "key11": "5k2WV81LStwyJgp1qvdb5R13fsK8mjg7uusNaEMFgNATJNePRHsbQ1irBpnkDFQvTm7yrkohYjsnjPp8a4gTCXwY",
  "key12": "47gDTt8FhVBFrJLxsupv1mNnysSwir9TCRpZbmETieWqNue57ptBC7V2jLpio6usthpttFafSppdSstAydwaga9e",
  "key13": "2xBoEgk2M7wJweFNstQfsiozFgH32rEPAJAnQEngMF2aPY6F2PdSbe22Y6sT78FERhyDMcNeSwstTA5mhDD1d4Kc",
  "key14": "3b1fHyFvcgcx3dKVeR1m46AgxWz44PrfDCLqscW9dyHcUfwpgMSS2ePsPNKdrixgNvsdSGRDADwdw9Gu4wcvo8v1",
  "key15": "28QS9yBorLbZSjc8VxT4L12w5VeYPKrmxjC4U9rwGAuEbvJ31tPTCaoPPpsHaur3hGy4Xk3D14gz7dJsMwTK1i83",
  "key16": "4MgcLNxP3TbECuGcHUzCrNTCr3SsPpRTfRG6iCaSpSbgvZTqcTV14sUQYf6GXDdeMzS3qfsZpBvYqej1aSjE46AF",
  "key17": "4LT7pSMwGg3EQTkpkCYMtKHpABWCALTzkjJHbhTHhEFzEV1H2j4K2N5PczStqWpWp8YwS8iEsMhW6LPx7aju8iFE",
  "key18": "3fyqjcESf4r6PvDgLFQPS2NattkJFnGFgaoFud7KfRa93UFK8c6PPeifcKWAymwKTK14J6MDz8xtMKbysWrd7Nu8",
  "key19": "59Lch87tmC71gayNfgi8AKNcq3cJuEnRitF5saCS5PM8XqRbG3UEorPrrg1xNFZbRbf1Ey8VGW4c36nSxnrAWRBY",
  "key20": "bgboDweRccQ7xrhfV3RJu6HpDnisUq3mJfSKLBWLgojMFmqvnpnCvQhBJH2QaSXS2iy48ib9FWj4c55T1GvXb1S",
  "key21": "2JTTgviPkP4cbat82RvVg9oGZp92vi6V1ydQw5q9p25aCVGrCDLJDtK94CCMFGtGSSSQPMYsxkbrkPSumvwghwpX",
  "key22": "ET7ZiCAXHJ5Coo5haXcbnozeTgSLscXMeRUmuwG8RVP5SpTzvLLxPvuwfbhJyahAEw5EeQ7vmNDXzb3WGChLRYG",
  "key23": "2YZJQRqgLrjJpWSzGr4hawer2Jha8sAe75v3vcHtA4AGqRgsLTreUKJKsSd6APHkAbSJYXfWuf35cRpvK193KFDA",
  "key24": "4PHMySQM8K2o3MkBEvKirDTEKvnwDdc4PsBtvJdB8aG7VwdWEFMHuuqKM2fMvxNf69EBTk1c3bUezDoepWasWw9J",
  "key25": "n7bHQmUjzcWKMgXePNRLAnEqtyDPGoB5jbZLm8LguHJqadbEXhH9KhcH7JmaNh5SHs5b19vczdLer9wzzA8Fd3r",
  "key26": "5TbGbdtRiJ131iD9Po4HACwYDLPX3nir6F7zB5y6aCpCJVs5ECCgvJFijbZo5q6UAhRK2HSRKjABJ6o3rfo8bXEA",
  "key27": "3CZUvYEiYBhFzftkUnAknEepoPCdWPrjZrDrfJXjVtxCVh7SdiPtoWDHPGv2ZjrEfHwqzDcxm4AiHi2SVf5LSCXH",
  "key28": "2ZdABEEaW6Ki6EeU9Vqu8B4aNi8zQVDQD22ybXB9eSXcoeweTybbmrcmWSGxjYUkSZ42LpLHHhfGesWjYLKu9FmS",
  "key29": "5vftcdpQfMujYRGSmeokS3oGHuFWGYX1JstBC8FNMKp3K3aBogK5wfXGW6YgboCthx57oZMBRBQJApHVAFMPdmNA",
  "key30": "3EMapnMTPeDikZiutfEm4M4PdTaCQWwKnU6gG1Js6CcQUJpTpw9iWVWWnj97cfgwQ9j9oyvCKMoZAvhJRqq8DJFw",
  "key31": "4irreJ8zidpD2XkMJD6YaNyrhU1G7YDBTcxb79CMSqJiKp1hKZAvZ71FqBRs5D767XUSDREJ6EYdZ148tYBYMrUY",
  "key32": "4dAEY13P6JRKrhfXwv1zzwU5ksbsUoUxgnYhMtmHpbpWStGHxgj7k9ftXGSew9L5JZdbBScxgBs4D4mUdLWsJJAJ",
  "key33": "3jm3XKepC6TcK2gZEWSgLm4pp6hHXcQ438Boh6NZS1MDz9Kn2Y443PfNEKqcFvhPNFA2P3rhEvZPVHhLTdkpGzhA",
  "key34": "2LZhzTLvFkY4gu4UvBgMTw5GJo657StUuERdxZpbvbZWA4RBW5jdm3jtykzd1RU43KT7gsGrJVScvAaSC1gvfErF",
  "key35": "4TjfeVtnMKvsP39Ztq9mGfPLCKzxmAiGNJ9iynXiY38PQ5P6XXQB4qqvqozUBWkcyyXqvymLH6BnGUWgfC7TMcPH",
  "key36": "3YZqpSjrGXKhL5Uubw47mk8NatQGcK8PzWrGuQ77VCuN9nfwkQi31ki1xNQscid8eGxwcaVUXcesRjY9tsBCgtK1",
  "key37": "2AffhxedskbeVmapWW534KGAeMq3TT8z9LvfvrHjVMfVjrCTTMaP2FpVqSExVm4wK13evzf53AChhd2Gfj6LCEv5",
  "key38": "knSfDfvYESGkxEgjC6drcrDLNafYA2y2HBn82tp72jCZdm5a3wGhcoowCo5WatFQqu9t4Mm9jpbqJ14EXm8t9TU",
  "key39": "2CQCDbnf7m7StzpYKAi4GjktotB1gTG8BUbntiHTX68GvF2b6RqtU7br8SdCWN62HUSRWPzV69SjiMLmk4mPVwCy",
  "key40": "4n15M8Yw9rzJgLTFHkDsbYwG2xtEKPR9qs9zpiCQaJZdTGQfrKmEBQZcHgbnhzbdw1XTsKCneaxAy4Chn1CuJZH8",
  "key41": "44WPoeurhCsK2NK1JJCmX6294G74t3aFbASCgbnyARduPTPqLzJQHZ58YPehKL6ZjBqyjZST1a6Cq1U9mg1g2oQC",
  "key42": "2XZ9SxhUDAPRkDJ8ocqsh73a7CaAeZbjuNRSFL9rK4sTXVV4bbzX6r4Qh322w3ydCK51ZJfpM5Lzk9TD3YM8cL5V",
  "key43": "3iUf626zZTTmBtBe849SEZ94s3cQpVPHaLsBY6nwZp4Vtq4E1fTXX9XtJxyXHP9GherHAjEKG2W9nmAU1EfvhHp4"
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
