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
    "5rqkoVVWVrjEPbFtfPCtKijZKnvJG1VS3Xy2AhV6teDc6Pk3cbGY9Xnvu9VmcB21vzzZ9tmGXfuFc5N5KB7kzGts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNuuwSwdNkaZt19ej5XeomY3jCSuPqGQYWEN8yUcLP1tU4tVNm2RdTghHLdWHZCgGdd81qLdGn6jahodS1xPy3d",
  "key1": "2WnvMoo9W8i5XshnwX9w8sEmC9TYbGseDTtsY2GNwPFNSPJh8Rp1Yc3ycjhxuRxEzzGB8wva1gpBGyi1QxXaSBS2",
  "key2": "66ANcPZxvsiGSjAv2PCFasATiNha5bd1G89t56kBEKkfQqaQvZYs1xutCFNJipokjWfqvj74t5e1nv3pPwH5dsUf",
  "key3": "2huSpoQMZnbBATcw4bk5FV3kTR7CikRDHJ3RB5JraeSpQ1EjUbGhQo9pFafqmeYAsdowGmfqMCvJUrcMrPyY4dW2",
  "key4": "3xidqbAEtHzRJfTYZo82LbNkRULq6XkvwjZ1uW7Yyac2YwDiyw26TP2MBhxdvaKuUzT5Z6tfuRsue7jvQZTTGYSs",
  "key5": "wziWvkoNahgCiBvGLdMZFs5jpJdoMswpqcfzcTsiX5PrDciiZxWZoDgUnqnLGPc3hWwXtCah51vmVs7yz6YuNqJ",
  "key6": "5ZH7UxMBQTuV2mEFXGyD2vkGRgBxydQSBzScBpKMS66qKosnPN6PFy3dxMMjet56cbN2wiSdRXqb3gu6FdMbZK2n",
  "key7": "3qTMC44VKp6wp3yutvciCLSmMPWe1ndCrg3jxCVFPpThT1u5MbVsoLeWsh9dEVtPYsys4HssdSypDJSdXMS1jwG3",
  "key8": "5AuEfTkax3yohXVjkP7ypgpf5cwhLkWZyi15MyCteKc2bnNUUbFFqMgNLsEQNacW8VN9gUAwj6kRtk8EA3RfMMfv",
  "key9": "5TERjfs9Se78ymZv2dzybAv1DR4chL6Cmp6HD6rndXtewo4QXrN7WbjXmAPx8891yr4kex8p84hDW8Ee1x6zEDbN",
  "key10": "3oCoMJbKK2rKcsD1CP9SHtEa2auigU1m3B811pgvZ6Fghw7CY67z4QLZvL6jTLJMWbLCrkgnMg8nex1eg9dEgoLw",
  "key11": "3BqK8Nn3yWZHxRUzt6aq8dUKoxmPYAcW876mcbBpywHmtkXLMCAqVtrRoJfgaxoN5G1ZvXjtMmNTAAfHEEZiHPkF",
  "key12": "4VokrEtNhFMh1skySSgtw6z2vNtnDBBNjK6yFRwnfoETVuPt2bLxttehi4RFbKVXXhSZkNMgFBXeVRP49G5X4xQz",
  "key13": "4iAssxWZcmmdCYmq7fd8QRfCoC2wKuLYrvXQkirWUTo1A4GgMivmahP4YEq7cTeVfSVHrRBFeXqcA1uwDpJv22Vk",
  "key14": "dsGXDMev9HQLnjyX16eHkCANWVKNu4tZHWrUpEHAawz3QKSd9y2fBeJziDFHP28p8NTQGHoCmshGr8M1MLRT5DE",
  "key15": "3MiLoWHDTh1oTzACrRFiZKrfj5BvdVGmgu4n2ND9tn7TjYCxnaZjULnPAeinigzK68CftTq22pTCQRFziqWNfAgk",
  "key16": "1RX1QDRJckNRMHJGLi5P3TejhUpAXkVmVXHhiZ7AppUoPVkJ2TJpv1KijAM9fCxGM4wwWHyhvTs9nNGWNqGmzVv",
  "key17": "5fceSzDrx9mp6ZhGptujDNNMm634rmviWR9Ts3ERhr4xv8rXZt7srioq7Z9Dc4j2eg9sPUeJCzVZ14ZdM99p9asa",
  "key18": "5qMH8Tq1VsHBogQkpkq6Rrspv5p3c4SNV7TFB5ZmVDQ9VCncc6JTTmT5P8XgPcJsbFNVeLmEJ48nnmQJPhR7p85W",
  "key19": "3JzToyv4ZUqRJ62nB4AC2Xkojqjt1Dz1L3ihiQ8EDrsaZz7wTm8yDy8Ay7mmbNQ4XvVLdtg6k4NCNTvLmpi1n2ar",
  "key20": "4BujF7tsxK3EEbB5rQpawgSFaQzwu9ycMuSNnzq37Rv8VYdGBZeSryhXuZu4URZT2BXguJbGhG4GPtdABSJS3JUQ",
  "key21": "2Pja2StFinDVXQ2iSqc1fmGCuMKbyfC7Fh23orJ7m872Ez8FSMEYxukNWTqDYjrz95CfKwgJC9kJ9BGBvFVPdEg8",
  "key22": "2GRAzDSWtchFh6TpG5iMVcHLFsWEq5kDTASB96vFSzLHpfbC6Ufk4KffXTBipFRyDycjoEonf734w8VRK4j4SRp8",
  "key23": "4kJRqWoAYWYK4WeFVW2Msb6tqmDLiZtPA8rv7ofZWwry6Nta6oE1CR9bJ7S2ysdWGsXSvJNB15gKpSf4toCMbgns",
  "key24": "5JM8f6siu1JRoir772gXi9doDRoFDfUZwLVriMJ8wQNeDyy6wjvGYRQocyvJDxhegi322uZiWjD8HdN1K6Yme3x5",
  "key25": "57z1nT9PCUUaEv7PrkQihBGPzzTmx4DkTvp72DY1MQaRNCnyDU9nPyEcBHXPSk9DztdnuwwQMeNTUuZKgsBXZCEu",
  "key26": "5ZjwYfvGc5rDdrufVLShBia5XFfNtgKB7E1jHgF7WVpcbCoWbWd2459tEvzThgAkqmdpaqb3uf1fiy8N2cRDJ9p1",
  "key27": "53QzyXJjbZFh5eoqSwsMJT2mnTaHTGH8Rg13RM9XRq2ZxX4gYUjdQvzTffUkDkEGq6xVwf2m1jexT8siQFttpyAP",
  "key28": "4Zgaw6LYrtzggfaRGiVueHhZ6Gitk7gGBaFqVvdQwkugGzShewn1p3iBfrkb8a3EqqkxL1yviXkTiyGt25YPjfJp",
  "key29": "3azBreJAL1fcu72uuVuAAafZhCvg2cD4cfNabFcj624Bexi7ThsGH3MzZD7peCJjUnqxeuB4PbZoej7HUKmRKpK7",
  "key30": "67EkgZyWPHSR6vLs2bQc1ihaHk7hKy8VD8BECoAPKnyiaw93C3Reg5sxApCMTH8afx6CBQUHYQfiSoX9JTT9s5GR",
  "key31": "2shj6aH55YQXqLkpvNp7twu5wDbrgDjHtwUeKwxfyjy4MWauAnf64WZ6P1fp8yg7bcGTg4GZ1Bnju9YFLe3GivMH",
  "key32": "n5sXJNpCZZFPUTNboeLpiSvKQ3Xc293jRmkScARj37A8B6LBUuiLPWa5ATVFyboySmnbaJpSiRaG371wxzzYMd9",
  "key33": "64W1fNP17qF6drz5E2X9ujpyjCuL4AGy5GkMUw34zp7GrBKSyuXnz9xm1Jrp9AM2aDMBgDuW28ojWLNSUdcrbPaZ",
  "key34": "2QK3RK46yWCkamt2Jf23H1Ft7NXB3bvkX5ozj8eNUuNdDhLb3vH3njYwnWkZVpzBQHFtCusM8Cye7ninMi6zNwoL",
  "key35": "yzANnCi9zBduDmCHj5ZZgu7uF5SZ5gVgDZXKCExs8QqQpCrGgAsLkDYGj1VNNh9KVHNLP52zdnm9MStzxpheqin",
  "key36": "5cshCgabdXe7EQaMvcvtNWuUfwnAYzQwMkENR9aWmAmo8NpC5c9Rzp9YVjHMvqmXUBRRiyDWWigJkGhVKeWNuLft",
  "key37": "2a4AR8qyby8g3xpVyAyDZgpuef2Dddp62Tv4gQmxGJiWG5JzXeJuDPoCstSSNHRf7FrK3Pw1n2NoAnBtw1Yg9LgY",
  "key38": "2Vhw69Z7oZxJ7AEbkPgjrh3n7rsPRxx6V5Knmty2Q3AcBatkkm6eZnmHc39UtqGhFibE84NsotQsoWKzrHbU9yzS",
  "key39": "2QwSsogQmU19aPVwryvEnezUjXj9WSHxU5FvgVnrmzoHg26uguKeP66bBGcSM82Z6rhzcsUk6ENDjctEbPgXsaFr",
  "key40": "zg9JAnzGGhKXYkgmzAGiExAPvVQ4kA72NiG2nf9bkGsKratpGXxFmT9LVAWfArHbczD8RVEapaGphN9E49NSvKz",
  "key41": "XLhELQFuKBqLQQbk8Umi5zgQdbvGUWxN4mZdh49qZu8e4rf5Tw7NyZbNmzY5NxjB5ALZg9trLMoa6kkxXaPUGn5",
  "key42": "3iweL4tx6a6XHtYxASTrzXF7PWpWHRSsjsDWTQc26iWbSEA2YRN2qKW4J2gAXa4RZTCTiJrw8ezr8gLij7BuFQkZ",
  "key43": "2WeZmwWZpBAA6Cux532SngV8tdau6Kqk458eqkTTN63Ha7MNikPhmsuCdfoL2xBC1STkXd5zdD1T143PXLopDYBB",
  "key44": "5GR8NioG6Gidc1SzjYmpypnZr4Bt1C1Dkq9w7HHu6eQgHPc71jXTDiDHkXmDCfzH2rrk6hC1PBeDZHg5jx2L276n",
  "key45": "hdU9v2pbRdMR5e3mEjfpWPgX7TXp7vgTC5iRsfR4mEJd7jEt8FxXPdiLhfZP5HuqMnpnVK9X8tw7VQnQFQJABTK",
  "key46": "4NoAxd3CAUbLhyBnrqDo5xT7puN593B6sCyUCifV9ZqDaZ4AktYmiqhnZeHdxsPyjJGGn8Qofckd7wP8rE8os7CR",
  "key47": "2eSvLePKEzFqVtkUEfEzRcrnpfjSUXp7b6unBM5aJ1jtJkqLvSoHh2WegeUMb2XqZELLjtBrX2F3JFyr5fEwfVdW",
  "key48": "ntxJnWA8N1dZJFKHe6y9eymu9spdXKGbL3Y4SFtjBvxHnwtVCg1FDdND6WwQ8TMZY4dk36WdedyasW7wDq2QGMP",
  "key49": "5pJuSo9t4NUUt9uAXetZohBmyJBnrjjgTceHzefTWYv6mAYVa3U6LS7csczJGCT4fnxBsU3AuXSawgX4yrDGWS77"
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
