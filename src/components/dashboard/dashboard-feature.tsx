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
    "35QSTXZCBe47ynvw5aVh9ihZVwDdo2GLWsh5b8Yf2ascUgWXyshWUhRiMX8FLrcjHoBAhH9QBPxsAzTE29XDQhFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfqX6PRqyccYnqSKS48pq5qVbUuFT2RVLogTDT6h3Us4Eidtvv3wSDmpgmRxpKmGiS9LcUpZwfNGgaLVMCPgdEU",
  "key1": "5VFgy2pyw5idmPHxN4miBHZPc8b48LFixm9cT6eC2LRLkHcq1RAGUoHsrs6xe9UzW75RrZMVTv9xqeVSxiYWUyjc",
  "key2": "4yGZAihQs3LH2p8WE26CzLuigyohccJRu2nSwtFjmheEs79N6Q2y5t2MwEFKTb2b3L68vwkVSW54yCYvEzPkqEzB",
  "key3": "64eg6XKkniGGVRQUSYmqvYMuQiSuDArMPrQcfQzUde77oCjpKir55NeENQsZNgJGb2ooLQVSuqGBE3mTaQvAX7Cj",
  "key4": "KungBLa9fsnSghNQW1sjkbGSzQRzAFGAwkcGLbxJRRFsdxcYLDPiaHpc6KUzRL9ULh13EHHocSet1QBzm2M8teB",
  "key5": "3g41fd7pk9zNfEyYq21bMrtF9eukf7fcd19qxvBfmzJeE4EpjJmj2tNfB82ULzzVRKSTunKEnTd8szL5cfguqc46",
  "key6": "2gzparDk5ekAJs7gEEUjowCv2aSgKSjv29vxNCpYhYutZtjoB5qpu4qbmDzgmwpVazbDUHaqHtL3RXPTxy83qKT1",
  "key7": "4xeUEbf6Dgo5ZJ2Rz923MAkoNzGyrBy9CmN8L8fUbk2xPPQCqdW7QGv2sPSqEsWgCgUcAKtEEkFk662VtnQSFBSb",
  "key8": "4essnSL9bV5NAuSVDasUZZQuKbBHQS4UpNpNriCQ5KAHtums47fwJELivFaSWZKmrc6xsbAYBhovRHUS7gR2m5TC",
  "key9": "5kdmYPEwyig2RXUEyCZqGBV6PShVz62Ltc3h9oUwayj5wyQ4fGt2pLjn9cq93beFqiutNgzFTpNCwZifNSrMnPB3",
  "key10": "3c8KETVMdU6mA67tLYizv7VcE8EZmccAVicQoN8Pwnbo6EHwda2t4MZFzAMtPdp3ibxodoMsT9HbAs1m6pBLR9BH",
  "key11": "oiEvRrNEvDnKym3MzbKDAPmKnbpPrJqnozxVs9iL4eZa821r8qFvrqm4dowrXSNzLKCLijgnCsXf22DkfVpNkUc",
  "key12": "F2rsHMyd8E4TvMUJJm3HYdZf6oftHVs2C7uemn5kJbYfoSywjfqkmMhSVnmQ5p87REL1FLhF5Vu53aCBY1LqbFn",
  "key13": "35CowWvfMCvRYbhRFNWa5zEU4KsvzpEEwAFVPQhRwWqrVF3tWUoQ9oUPg6wGjzAWMNXH5zb6kW54WGUim1i3noUf",
  "key14": "2oWWRoAbnFzYkGPhpxZvwr1HYuDgMwU1nzvSYATVsyK8qjfzKWb9BVUbXxhK26DiN7BwJthdX8UQdYDkAHm52zoP",
  "key15": "2hEtkdprWVQpCX9Vjnin4NyyYAauaWzn6sHbUZ3ZojJKo8eMFheeNo2oXyZcEkwEndU9xktCdDjVWJsxwB9QS2W",
  "key16": "5GEFBQeEMW6ap8eJYgcytapqVfL97G2pPxeZ1EBtr8w1KpTSSwTm6W72bY1oj4bMDQReLD2goqVYs229N2yDXeCs",
  "key17": "2c126PGQo6gMvmnrNfc8BbyD9Nv9Acz5RWRvibXy5h9ZsMXcbfSVfS4bEDxJmdV9Ex1LZrxF2bvL4JcU4DbhPSw9",
  "key18": "ijt49hJ1BzwvKaqnBcan7k3HtGP1B5tmjqEso9Yi2NyhZycJmDviohwqmg3PARfcWLugxKLBmGXGXsuc7A1PnRd",
  "key19": "23mg6edvNPBgN6HyUWvkytnWi7xbQRnWSQJeCS8Fpa8xX8KvhDVj8DaSGp9TyN33P4ftUR3fPyhB9PBncdWMaYie",
  "key20": "5KnUhh6T3SNnNxHU86GBwdPti3D3RQaVMqic4k95W4q9MbnnJoQfF2n2AQ8phnubMCL2Ap9Cn52X3rk4h6HJ2Guu",
  "key21": "6LX9sCvumbKQ2C4whS8cGcQwek3rZvvbeWN1NoHybqDGaX5BbHm7iNhwVgETzVWpoki53EPJwU1GKHKctZysMqN",
  "key22": "2d914TdpQW6F9QRoE9J3Gtc9jJd8pDEmc3eJdvgPgCB3KUCG48yEvSnSHMv9tK9wHmJiTUve1QoCNEEgR6wpJt4M",
  "key23": "ihxAbYo32aBMb5j3CqZLP4CpXpjripGGaEbRZHcfewnFwocmcdBR9AEfAsRH5vSGUd65WeJGY2gRE3hnY36J6J6",
  "key24": "5Dd9YtHGspoc1yrtdqVRu6cwPYT2jpjSt8cFMVauLL2bB9V2dkPE2ADbcXGJiEkU3TFqVZJzMQ2LnVjP34FHHmM9",
  "key25": "hAhpzoNjJ7Fb6n6rxJ9Ph7TjkVFQQAniHxFsqXZhHKvBFKJsu7KJC1mFuEE9Hd4ViUvrGge1fQ8NxRbmVqN2d6X",
  "key26": "4CJP79daGRLZG1BpHcfi5mZmCRC4BkExgAmdBNUAb1jFwAETUpNkfWk6GcvzXGvJRmxZcHEeihXj9mNCkmnNMTW9",
  "key27": "2YpadjonBhwdN3dcZBQ3gygyNDytB6xdno11KBLBKRy9G5q2a21U6y12vQ3cqePVbsoChSoobCNEQ6dvbPkcmnwT",
  "key28": "M54nF6bZE1FkcFsaBC2EVRVtL4dCD2VMrkUkuqqoKtkaWghnnYbEktcTjUWejwzcMjzTGhzsW9r8qdmcKpyzjEq",
  "key29": "376oNKRyCkEginYdZi5c696diRXDFCT6nFmdng2PF81XQxBTW4YUzdvdozrM2L5TyxT2r6iPaLTD9nStbswcDKLT",
  "key30": "LSnveyXeDC1rkAVpXufpyLVjFaShZmndEFGwdkNFxp2xzU9yiThV4g2oHcDXy9GYhSyH448jno9iXTmjesmpkbZ",
  "key31": "3n9oBVEEe9DADmbCcdYV7n2fcNsXHvXPERy5sRpCkWvoA1Vt7kGcXUADDouqUYPyrBvVZ26RbdhicMUfcQmo4Km7",
  "key32": "4WrJ4oRJVLorN8ZYqwHk6K5Q7C1k5xusdyD7ZDzEveJh2n2zCvgWChUDssTRAGeMDNXQ9qGwEbmG2p2F7ND2jk1Y",
  "key33": "Km71kk72WYeR6kS3FAV3hZDhrkj6Xo6w9XpcALeoxUSttNmsjuqoDwbSreNoUfAUD8v2RbL73dAmEzNpxds72m3",
  "key34": "3L6icvmkLSHe74Ec84byDEA6UM273LMJgkpbdvYfg3W1cq7KYKR4YWdSAAEj62L4CpAnngSi4NzCVzeBerJTGUCX",
  "key35": "57r91HBQrYxXis6rnCEtThu7H7Yn1N2StsseLMyiPmKRVRoY4xfENAQGNnttzD6BkRrDfwXNchnXbKNfPXg4WzPZ",
  "key36": "4mW5GJtvqTGK1Cu5ZgMzJY55oWB6Qq93HfzHwXk7VkjZJ768dcHVbmWKbS1p98uvqusio3DgwBJQD9w89bWzs4Z",
  "key37": "3Nvh13LKuU8ubbu458pKC4fbrQV7PyEgHq5gY844RZmms5Qs5KNALgH9hg51hgQzYLgiTM6oaEaLMjVTbf1KQXaM",
  "key38": "3xLrD2UnSzQcvwCbci93NexXY4yzhmpFxZm3ENdFQosV589k3zyq9CtddkbJYJHbcuBnn76CWkn17JK3K7xi3sLA",
  "key39": "4AJ964x4QQbgB1LNFcSrtmRoMG1pz18JqMfDydwRVwuZuxSNGRUyWWSUXE24YWGzX5AS6dELV86a8Wp4hTkcrRx5",
  "key40": "5hnzCW68q3j2MwpFRu9uFCde2VKhwPTWGzrsh1D3h8Y9de784dymVA5i9f8CYAK6612cFSsyb1HrF8J9Z5PCuKT5",
  "key41": "aADYsVGyveqa7CAWcJRinK2Z3jaAz4k8KC3gfvBj7A4Pmuw14TENXtPm15RkaLs2475ukvyEXR3heXFiNXi2UUZ",
  "key42": "5QLJ4eNBzdk5Y9Y3Nrbvsphagx5r9tsuyoyGVw8iSCbWzy3qSSvw1mmBwWUobeFNCKpNJzJVbjLb4pGKqiU12BHZ",
  "key43": "36M7u4QVFFKQzDjCAhmYgyCKCbLNeHYNVuN8KdzuscZyrb4WetggLKuWdg7x5MUet38aYB2kxJNLMtwckqTfDLye",
  "key44": "4xsDeFsxPd8DUnEY9jbqadVvqmwZwghvUdmXLnm1CyMVGyWWe8rUyRVBQv8wScu5c67sqCdzfNhLtrAUzWkpbE6n",
  "key45": "5S4K7KmUutZeWfmcBDSJ6jBpb2c2QK3fE5n7AEHBki4WvPcF6xkXhBd3cLgRYufY82X6LXun7EDyZvL9RQ2eDSLB",
  "key46": "4gyo5HB2GDFWZqQDAaduT3LGM1Wr435UNZTk3SvaZpfG5k2Pn64YSJa7nVWTUc9dTNwAW7VL5Zdvt7ZkUbdgscjZ",
  "key47": "2YBgPTZcaxWCfgjjtYAofScJhwGais967EavMXsvYfiAZp85SaKFC8gYj9wPEnwa4GChzZewN8tC9wLzGN4uvi1r",
  "key48": "WbuKNWwMiUFxmsaRVjz7hzV2eZwcvZ8KHyBhyNKXVMSgLKng2nGJK7csRU8XpRNYvY6DKHe4qWsA1t47cR5Tjtq"
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
