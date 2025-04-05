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
    "2BiV4HcsYk3jE7fLdumwDck6So1BWAoLjavF2REQoLGB2nQPw4jPYWJzCiBTvVymZH9yTGBy9GwxkevfR6FVX4P5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvXMdPBzjpQAwhTbtYcsgSCcwVxje4NukwTBh9hwNF4m8EdqYRWYvajy6gxBL5zGKo5S7jRs8nRPBjUPgustkww",
  "key1": "oMvuBveoH8HTRCZHFpmw2FeVtndpmxBtZdPzSZaYuZq642GsWChUVFn5qKKDqroVbP9SAoXW8uLqYc5wVhrhiba",
  "key2": "3wrYdWDRewcx9FM4eqkPikenBy1suwnBwVuyPRvgJbMXdpXHaksTLJuuEE5o1XjAPJqb5LFjy5CPr9juRBjyyQkm",
  "key3": "36qwr3WFtrpuRRdhvhqYzjJk3NbRnGFwm91dJs4GLFt2gqcdKkE926YGhLniZ6wEKFjj8ALDE6r2bu69ZU9qZ42e",
  "key4": "4NwSbtkzEVT3knmvc92woH8ZnFSo4iooronhDyhBpXyqFSjX6D7mG3oCRsBWY6FESu6uU3UebUUNdq4e6pTZWvjh",
  "key5": "qNRxny3Wrs1zeLeLL4iXkMywSVExvpuGuqyksRTaTFruKyMySWbnwSw33A96kvrCzcQykTXJUjFBoRumYSwPkvo",
  "key6": "CadFEjmGUqYsBJoe2cxdpwebqsBYtVmgSbyS46ufdELUzBVmgzk4XqkuSvXfA6jnBQnsSL7F8tc2aTcTCdGNPMN",
  "key7": "2VsRpuRL6vBosYPFBgxXgQ23d8kZieE7shw6WdrCc2vbGCTNHQSTR7CwWaL2njmyyMXoSK5stbpMsWdihktMeSwb",
  "key8": "4kFSB4e9QyziRHi9PNDbAHKw9TzzGp2QC3gUup8oYq1USwu7A73EA8CfvdBwCajpnF96pz4eCJTBiCAhK1JhgzFz",
  "key9": "63B6kgJc2soETHxnbYEvoQSSp1HbRQcT2BNhdCe9hkNNxct8KyWAvuhFuZTB8DuMNNGUEERjPNKhNXx4QCxt3gwh",
  "key10": "tt2rz9UQCPPaJesugCRzKbSmEB9ejmQjwH7o6UCuQpN6BpGisbn1d6TYsxae2XYxqmatAnDtVoUBxXDfuRxUHSR",
  "key11": "4TADJqFMRwtVwMYSuxhX1Sg2njwLNboQbcyzM2ZcnwU7gqSYNM7USAjFsh5CG4BUCsUywe6GKUJWGHLK4PHKWJVR",
  "key12": "54kNMgadg3Kaa7JGUfEakX1RXrG8Su9S9J7J7rut2mCFKrnrX8Z91Q98gPsa26eTJx8WwMRpuhd21FPrhsBYyRph",
  "key13": "erFVXXLBy25qBrQA2CLWaHWn76ua3ruCZEBPJ8T3gmVqyj8XMHHsXrvJWTTcSdVGcY9DzThGrD9ZyWyLV4xdc1z",
  "key14": "4D26Ekqh4UuT59w4CaJtjLAngY8yLQ4UgiXjBrJkCir8e1HqQqUTNfJwrghXQ6YrnAV7XPKsXgi5QAH9fL22F1Nu",
  "key15": "3VCyEWyD5VHvbYMBE53FRqVPvwuKaVqRk7HRkujgkkSphakAciuSCQFxSUL111UVfmtsTCarZWWWRry73axea1w6",
  "key16": "M8TdT5ho7K3nUfXoP8SMsgmMcrPZSzQqxU89sPN4gRjUEQd5Z3YKEqqGLs3ZC7a6sDf8i5cvzyPGa3tyhoWwCZ5",
  "key17": "3kA6viaTQrLdEv1vcM1ZtkKBD9LEBXMzD89EYAB98PovwhHEoZfab2asg8Mov9C9NJYcDDz4E4Jhuj6RrQFy7RpZ",
  "key18": "5DoFKsfss3Lb2paSaqJcn3HcXAsYNJJvMf5p9SJi4BrkE1URfSt6FTYuyva2qF87PnDTCA6sDCvS9ZJs96DVrceT",
  "key19": "4fiTVraMt361ZYDu5cc5ZtRPjnQGoTCkhkYcrenmfukUmX7yQYvunuSfhXELZH6YRbEYeNSizU7Mi2MYfh2W5wxz",
  "key20": "2bUh6hu87HZLoHQAYKm2EQz6mGps3KNsLn4fxtPw8MkwkpN4NMD4yP6FdNp47Wus3kKeewdjpp9Ty2SXDXYBiJHu",
  "key21": "3VNTsA6sR6kfoU4uvQBbT3rKS8WD5KXw82eMaPV7e1YeExh4Sy5fzjGVkLNM3yMRxvaRGFf9DMZyL5gheYejqx8j",
  "key22": "2dtseHf5DxKccaCRs6sKJqYKDfySAm6a6owuJ7sxZ4Piuu1DuKTnnVGF1tPNKPFEFgSeEJF743coVoCrJwWGKaWY",
  "key23": "3FqYqR7TmeMb1Xp8DQShoSTXPUSb6Q3C7rgYhZiMTvpBza4kdPC6HEQUucNn6Ed59kdULu7im7BsbtFJSRE12fHG",
  "key24": "tXhirbESza45AGdPRo56KPPqTZ4tJBU1wVyGBXpYuxkm9gRcXqh2FWXAq4n1TCQ7UAdQwKt9TC8SAd9BNad1wtv",
  "key25": "5rtBa58nGRGgntjrbvRNofMPb7WNQRQmG57bvKr2WeZKmNnorLZGsm8UfYWw9r2m5M922jKdsYGe4ijmfc739wi",
  "key26": "MtFFu3KaTEnja2NJhRckZJhii1NaSp3QA2W7TNkRKuMT1U7sWgWyxpZfnb1Fw5UKXX574SGh4C4DnKMXAtutbDd",
  "key27": "5wrcj43JyGq8VxtCU81rpDJHeSqU79ASSwc4hzYFrRYNkDoVayyA3v3xWshvd3t7gNhcwncLzEocW7gnNTCXrgdx",
  "key28": "3jwFbQFEwNoKRedf2UpMUYgmxFesnXSiMgMwF8zX25w5eBK6uP25QuspDFRicbJR2QA9yrY8BPh22XcaLweL86ox",
  "key29": "3CHa3kcpxtn9P8qWBkoNSdSwc6Zg4RvBY2toaMtpM88pGrvd3dLe998yYi7fQyDVLJsGREQiqGreJSdB1bgzwHnf",
  "key30": "4agXP8R3MUTx5gTU7pyCSox9Xp4B2agsYRdmj2xXoFoToKJ9DCiNbXn8hn3mdUsin9eBtbc6e5P7fPvVthXKsCoJ",
  "key31": "2hwenQSTT2MSZS9JKW5GmtBeXJ9QzvCKm55PcG7Cwy8pt92sDyTRZqJ46h6yNEYDWfBXj4uSz7FNCycmqGuGx3aT",
  "key32": "YHvNW9pFyw5LgPX7b91LMr9QoVMkhX5XUn7zBrq4bE6Bs9gBcTSCjxpenfbypixThDWWC71Th5f5GiCumb7jHf4",
  "key33": "4F4EehzZDmLNuMmdk2U4eMtTwWfhwpufa7PUdrjUHxVvNoHg917J6iWE3ov2qTrso9yPWZmfC32x1ZPeZST5kdqQ",
  "key34": "4LRzxyGJRJ1waVbi5ws6vcAUMx1nKKPcTPsX4UNaMjEnWiU7LGMbNTceibTvNHNcw7JajyXTLvUhs6NUpjoDvEv",
  "key35": "4MiAW3T7UVCXhPzwWK4KRc8QDkZLU6EmYCN4YVJzxp22dMzLHKLZqEQE7Ai7byxS2R6dx2TxLCFkBWx79HtVD3Ka",
  "key36": "4hgCfjfm7eDuEKAFFSunb5i3ALgFBvw425R7cLc83VspNTudW1PXNkNqBXAevBNrcxNJ52CqfBBN1bgboHr4kdsW",
  "key37": "38xRtTsR7F3Ax7Gdumc9866Bdi1AtVUn6bgicqko2QyZTh6jkdJQkZYEUt9WkHkxjYe75Xapbb4NG4WrYLmB3uuh",
  "key38": "4y1KDCvuaMdcLk2LSidb1t6FLSbSq7xqUrzMqeYEhULoFPg84JvwS8ksFShqgDLM7Md5HHzjkTd9be4joppa6Zsu",
  "key39": "2uWbZGgPcEx9EpNKiJhSC9uJceFmknsDhWdnroMsVUMq5n3bki1eZXASDZQPHPMS6R5Lc81Lwd3bcuUzf8BjKfgD",
  "key40": "3HCjAWkGRV5fPcZE3ao49JkzhNG8Seurf9NLTkJxpnoMWwpPLwxgMb1ug1sfmFdR9s1PjX1CdctsCVJtcnxatPFb",
  "key41": "5wHdcGJgm7Yc83Tb2LeLxx8ggoKY5Q6n48QsjUCnfAaQxALupsoXoQW88gv7eq8GhKmmXzmciV2vHLyQBJmobHqh",
  "key42": "B7vNWG6ZHGUdLeBhhsPcyBr6hRKezu4c5Ld7iKbghzAtSouTTSqMEWSGUmdHjbNXX49eMpzkXs7CYdxPpBhhSga",
  "key43": "47X92H2h8S2nHHDGHDcMLGtpqWrQpnkyFYKP6QoL2eddGfx8g9fnq3L5wmTdCcvGqE7Jv9uwgF6vtC6b33X4eFkL",
  "key44": "3L4zGP2EJW1WkaUwDhx19PJt3BV3MwUF5uqBZxRYBPpdhxwWSazuqoyioPdJc512HVRYYc5SS9M7NbjqfaKW2fMG",
  "key45": "3zfSSQyX8a8neDTVp8ptZmezpCqgthyDRZEyvohGzdbNQivrvLLytEmzuTmtQ7h2Rf2zUaQf3fP2xHsUzYieSYN1"
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
