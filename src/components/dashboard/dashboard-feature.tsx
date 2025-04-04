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
    "TErn1s4tiCmvQwdy7dnVQA912mryf2vtNK84gDx31e98bu5EZh5sDGqtbty7FDXNLtYhk8fnYgTtJwDV97ykKSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VFUhgb8Yrr33kS9S3QFRQBx9gUP1zqr8sBDfVX5vMDrojbxTB9Gpb844mSxxXJAaFRsiQTDkoTpjwGhcFc6N9R",
  "key1": "5kLHMMK5WfeEbu5rTfsCWdFzMnj6DP3ZfkRM3RkLWesu5pqWxr5Xd5CBbQbzJYyXVSyjg8tETJEHGc6doQ9YMSbD",
  "key2": "Pf6gs6Ru1fBpUaBfWbokva7atK2Jsn3sGDkuEgV8KS183xzDMLDp9H3BxUukotC46gb6e58fvTK1qG9Ew1uZ3mg",
  "key3": "3bhFTi7dKhMVWd7XpETvErZ89cddK6mmp61yRiuSVGg1qB6Cf9YBaPXyPgQVLZSTg2jPoiAwfkLfu9SrRNVPeZyH",
  "key4": "3mmJy2FC1ic8vo1naMb9LBYEopBtQW2HEJzkauVjnMsSreDzgjKk6ncP3pPbEofwxVoK2dE55eQewmTjPHGwp7UQ",
  "key5": "4hAzS22qAoAftwjimiQeoiu6WnFDgGxEtJACwxpNYN6DTmX9CaZBGNbXKUMY6VhfZss9JXCL3cxS3JtTBPGiBz6x",
  "key6": "r59ZZxtZEiUBZB7RTyuDjf4mK3pRrmYLJVnMCfdsgoeeGG6JJAftxjQbPjpGtTjSt4bz8MR41CYnwipxVrQmSZS",
  "key7": "Tv5JEZStjHVCiAPYEPqyqpGcoye6SiFXqp3BrWekPq6T6R3pqgRvtJPwrsodCQDiZwSt2FUPqWB75CkV1Bj4hCz",
  "key8": "41B3nMCKGpBjntwtqEvq2frp6ETxP1NcuWuMc1ivikanR4QsEWrv13D6PZcNv5T4hhoUPWMJQ3JZre6bVRVUqqEL",
  "key9": "615AVMnVPWnhwziDLu9nnrfy2HyYTNrCp1cgBs8UraFLVgX4Nhyi8xRHNPact3FHWr2JkaExNsnjLbXANusMD7AU",
  "key10": "66ePGmuGWMXBMLW8WTBceuL9xYGDVHaHkJHpfZFBrvgRcHbBo85rKxTwWp8VKoDb4zvU3NYwZGaPX7dDrkhUVy7q",
  "key11": "5DEhETL7sRH6nwjwUuE7YyQiANmhEMKmjQHCsrEEMkCYLX8Agn2nF6rdLhhk4GwdrtckeqZn7zBKUAYKAPxt6Yqd",
  "key12": "9QG3VSPASd2Ukx6bokWDXXMWa4tnFufoNuNtfsoVU177s98ZEKCHxUiuofGdUScsf3GZfbFCzxSCocMdhe68Sxc",
  "key13": "3jUAVEPvTT63GQzmk3BvZNr4TmSmAyDWkzUN31vE399hgzdQHqoPoV1m3uJqqAYz7pdLsjPJBqBBbabBnNJK1qpc",
  "key14": "2k7RdivZus3PYaeXtQG2FV8jJrD7pPGQJeyem5mju7mM5F2K4KbAvMtT114qQmWn9ZKgAxMDeVqrNeX5xCVgHGMW",
  "key15": "2rxRs7wiZoZQ4NWA42u4czprcxhDk4jpufdQwUBDZAzmUcFnJvdu3RdUdL9FaSjN1T6erCCRKbM3HwAvLvNSdkA8",
  "key16": "TruMS5qSRQAm1JH986RucScP1vVHbCcVxgrPtL7hJApep8apJPx7VeN8oNVTd95edwhnxAJbdu5trX3LdrCtnTc",
  "key17": "4u5qw1hE2CVbqov3XmbCtAGdX8qmRjDt4qmiLz3zwMSLeYsRzUDuGirZDTiCZRVn1NBxNMEMqpB8jDo9uxy6rvJj",
  "key18": "2VdoGMLQS8LmAYtJt6oBN6562KdGgiRfRqrSAp55ABdt2Lt5HPpLac7573ZRGy4arDHZo6DByYHATqeN6xkoJZrF",
  "key19": "4uFwemLranVNULjMq6JucqshPZoh8u1zaFgXsWgqTQRYZ14dpUJtVsfnNnuM1nj3y3qoej2qmeRGaZPuDwjwqCwJ",
  "key20": "5UNHo7au9gwNkWujjDgm2XY1prj7JAubCC1G56BcVbhVDoCzpy2wbMFwDv4pwwThwHMopv5yYwqWsHNKd8ouuiiR",
  "key21": "5qyDPo5HrnQhF85qi8ESsRYBkunVZrWE6i52vBkuRe2fin13v5DGFq4mnYV6H6UQcUQEviZqkvU8Gcmug4rST3nx",
  "key22": "hTXhptdv32woJcNPkKGreqBcEQRfn23cfbqCtys9uuEXWSvLxCnxWkKe1aM9RVSZLfPALQQRpetwo6AXRBzoLRp",
  "key23": "4uBX8wLjdhwNSZeWNitLHdKkL6eme9oQyKD6AGkSzJUUyXNjWmgj6xGPschhw9XYAKgi765aW5eK2jP65XQvWkyS",
  "key24": "287SMaHh2vBoQrgrWJoKd15MdAaDqFhRxcsDQ2iAJA8pDxevRWnBfoz8RMuwuNVfvNoEwJJSwpXJ7qLfUPDMnLTe",
  "key25": "3ju51eMKJayx8sBLZEELGfVN5eismtK9xAgvKCfv1AaG9YWbRmdJxqY4bdLzgseG5h4wZo9vxdFKvbJFLRFPY3do",
  "key26": "yqdXgxpYNotLzvzVwQUMQE4RzLqtra8ku7AeRtByu3kKYWgWreNiZJtcGZm38WpgeXaN5GhiZTsCu2HeVGpS9Yy",
  "key27": "QXMipqwAmTupC45KhCpkAbQwp1KRJa521HeDcm1XRFnVgtB3B9ie2mPHtVQdD3vCgzi3TqoELora3AqrPcHiWju",
  "key28": "34QwhQdRz7BnURYMvst4yMzofoy9PhritZTv8BKZDM8B7refv3NerBAuXZo6v1PdD6ERk4L9q4jt7BDFSuVBkfod",
  "key29": "4JHsa7PCGdzAgcy52exp9rST4Scb9WunqfcS4nmq3akJXFNz7ewYfuekhULWfUUZhGqDZzsa49wRkt7i8oSecG9E",
  "key30": "4UQ6CZwktaRSoV7J2qMGfpCQ32qzCu1SnAwDy5bwps4uV5qiQWAUBygrUDp5qtbVnDqBNTPP9xskxTUG6i6SgPUh",
  "key31": "3YNLi9wX6BrCzXtKfAnTRFvtowxfLxmP5bG6HhUbENEocPDoeou2vrxf4TyDBiZYuukJVE3bNjSbfkYoBg4cT2Hz",
  "key32": "419ku2Ci52mwokWoTX82b9Dfq1ojzWGa29bR5UBtF5TLxnsuAvajgtASSLMpBXh4RHZjry2vRHdo7HiejE9x28y2",
  "key33": "3DjKNeWfY5ntdF6T7a6t3u7TcJEKxXVY5BSmBLEWbtA5RgqJjzgppoXt6tJWYXwdnMeP2f584qjzEw8ExCFQiwqy",
  "key34": "2mTqt4NN8K2b8MUGPEKbvazj6d4NtLiu37tj8pF2NcB2PpJiEHo7rYY7C8gbi211K2vgaM8Vc9DAE3yWQtFqVPZS",
  "key35": "cyPoRUobhBTU21KBV8cFFJeeK3VX2gd9tx6HqPH1L5yfuGHoUgroEGjkcSDkb4tc19A1yhtYt4r6zUB4kmVCo2R",
  "key36": "oNDryKHjYcrt3GmFJ3Q4Pt8FFTzbgxyDcsbKSYDsCSXJ2KPJZkKuyamXd3oM5uY7aDnd5iGUwiCSszKvWvayEsK",
  "key37": "4owQKGHfodiJwG3VeSuqFwRGKMDK4MZEWskLffccJgdsMUEzu1bhiJhypzFCPrXPm26FL6YD9Xa9KnkeJXSDcxmE",
  "key38": "4LdLgztprNztKTBPWn3vDcsM8L4152Cbtu4dN2jvfCaqAtGr27BAko8US7eNojjTCHr7kBqT9ZVX3sBuu7NgShiW",
  "key39": "3ucyfsfM1dkcKTkBjCemAkNDdZDWExgCwE4BBkL6fnUuiWjYM8R8acw28NAR2jN9mvR4gEqvNxbQt8eqZHw2qTv1",
  "key40": "3BrPVnFUqKVkVrmmonCyXcdaFCb87pXBhDm1thJRNFMEYR4swUA79Gp5c4EVWvWkQ7Sq3MB4my2K73PnTe2VPYns",
  "key41": "5PKrRWXuHFy9U6VXqsprw1sD5sFhKQJhnTai1rM5YBR8oSvdEzRS1EzHAUwdtBoqKYBQGVmB5jFDcTehpM4ZdykV",
  "key42": "2CMJFAiiQ5w63FFBbU4nDw56Ykr1RtdWeuYNwrdp93ZhVoqt2t4AAB82A15dV71RFJzuVUnDMboChJR6u5svqa1P",
  "key43": "2bRMKqqrXWjNr4qc5YpgnykNJ9ZaUQzw47nqxfNgXxafEShDnisdVZSVAHTJnBGVoFidMEfXR2h7HB2pNXFJFSoE",
  "key44": "wvp3pJN5AsywQEJcATvBm94Ka6ooUSzHS6dKKm9wUQLQy4J7bVutLspKQxpvQKc9mwfKED6b83cA3DEeQ8geD8o",
  "key45": "64k8TdjLvkEedWiHHa2DTC7B2e8EBsfzeXSd6Cetgj7yGNBsGP4nfnyppTQY86R4FUbaxCyPwdtXNPb6jhPPXLoE",
  "key46": "3fdo8AzjA9DjNjQ7RYnoBHKuHYxxv6Jtn5RVN5UYe9fMoqB66Eisr4Jmv4S9Xbx25BbaF1YJiKxdHavKt5GroAEw",
  "key47": "2qgH6XVSHTgxo6zAxQuovVmM2YRefm5QX3nBWhh3aeXUHyZPV4TzRDmAsBWRfaKZ7h9aSAmbHa44TqfDTZbuR52J",
  "key48": "4RTQB5c3hQJeFZGYuhY65LHr75Rs1J24iSZmmeLnYQ8CiDA65hdzGnXNxGcLg4sZXuqpFfX2tQhZb6QeGFsPibkB"
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
