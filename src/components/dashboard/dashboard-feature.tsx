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
    "54E8atbL9toyiLBpwPgiYqphduXMMyTbXgjtugDZm2uMvwSTAECp2MdCehMEuAUhxwYBB4C2HreWY8Pa1sjg2vE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2imyP1dwAzJ5yRn6734N5tHLo4p3ZRYootDLrAQcmhBevaK1wK448Vd85pVcj8qscL66iK64qUBvpmqsTyyhDTs2",
  "key1": "4Mud53r2VHdNzLpwkuobNvk3MkosRrvbcBC3HdbqzRWBkV2z6Tdimf5g54r1UaYQdVXbFuYz9hyspEwCk1VbWBAg",
  "key2": "LBb9b9g7eUzPd952UXgYeEtZgRAj1BnAEuQo1ynczyonmPyjpvHrRNED1KSr9gzdFhqqQzAJYCakBHkZ4nSsXNG",
  "key3": "3ZU5PyuUppzDKkJuJzWEoPsoj6HjBnJ5pCmL48R7fEHpwva92c7XZLmPSbEKuUBeZWHeiyjz5CgjPoRpEqMQ24Z2",
  "key4": "RFd6pzxXot5KUoMbAMvYF1B3eXn9j6AoVM5DpbWayZPvBkEkrLQrnEBgehdAq4AwNj2b6C294TdDuotGERFHrMH",
  "key5": "5GDE8TizJgz2MZoDrU3KZ6nxViLukxUWBEYiXFPEXttoFcE3ddCxjsVPpLtNLtp1MKyh2ERD8oePnDMAWmea83Jv",
  "key6": "iNQDNe4o8LWcrWd9T1nRTsgWwaKkcUUHydaqDdRPFDu5j7EtLqXQBgKW95XmTz3GVfN1B69exUcK4AK1KRGEtkN",
  "key7": "5yBXvVDi8o8Nqp8tq38YQp1YoQ3k4dLR8GWjVh6H8FVxXHihevchzvtWrLRyGZYAELFfnpALZW6srdUjETkFm1Ui",
  "key8": "4NrKDJTJXobspELi58z6Bmj1W8R1FU1ccCGwc5X1a22qowp8vwqBYP3RMt7K33VsR2X1PkmAqY7qgumNPKNiN2vB",
  "key9": "4ZJPEPQefonmSeBbx87cz6W4H7yjwVVTKd2DTDmjmEE2XJQZMx2sNY92v388tMNfKRgbeVVqqjoLUoYMEnAjpFWU",
  "key10": "4yVuA6iLidEg2vCmLmeknPuzWoL1PTKQqE77obPzouLkiDBhr7j8LQkNXps6XXnfLiR12AULZG3udjZtGDjxrdpN",
  "key11": "2cgDRKkaoGSiA9f9LJc7rd7D74dM6cg1VEGDtMw83MtSk3MEa416pk2wvdRK8MrMyLtR7T9yMWW8wLjfQAAtQrgb",
  "key12": "4TYjQjU9yLg7fZaVytyHFbY42TgDnxFiS1tZWKQnHXL21AjhYGrZMGPv3cEVwwnJDHNtXaAcZWerLUd9KE7zuL7T",
  "key13": "UbLrkncUugTbAeYPAPegaqo1WtjjACinJ83Veo3rhuStitAbH5fY5UGdaNkxJeQ69XQD2BDvfEDwfsLqjvhCFEZ",
  "key14": "3ogMiGkrHVhxvGVB8gf1omEizVSHADMSCe7LggjczgvjdDRoXFyRTHPNoz8CqfZhC6H2fqWDBFT9Saq666PwYX9Y",
  "key15": "2xSPnXK5kgwfXkZ2A5aEc3t7ZrwPTVdwd3MsHXcv61mtvBRGePKUZLGjaGgjtAFfCDZ7eBkGWaC5LWR8goqjYXst",
  "key16": "vaKLLwVFyspXkYDuTxdreKskLNWR4n21qRGNiYyiDoU9uVq2EoyvWVfKWFgnT1Sxjbnzeyg1mjoCPC2NogBjQ1s",
  "key17": "36AKnf6swrX5qxYTQxK2g29wThb1x8QLJJb7Uyym6ne1aZ9vt1wjyaMiSJLWXCuNgd2rJi3S871puEdc7qozg1i8",
  "key18": "xjjdzf89qCBpiy3iEMoVA49joG3QwZik9NBJ6DWBiKZRWVEoDCSwKWvagRGfMhW9XH6xe7KYwZdGZap2jevCpYq",
  "key19": "4BCjBU6aUM2iYxxzCEUktxMkW8AcbMd5QdP63JQ9kChuWo29846mRNMUmjhADona6pfvs4hUD2iWwEG2XgWzetoN",
  "key20": "ox2cLgfYNyh51xM9P4ecAcfn5fEQEfkzhyhz3fGRpv1xJRUuTpV48aaHhxmsFybr3XYf3kK5EG6H6pWKmSHatMs",
  "key21": "4cgiZCxkDSAhXqqFSrWDsagaCbsF9hxHfiwyqQY2eXsvxByCP5orC53Ggf2YvEkZNF6pg2s4NeY1hfpKJLU1Riuk",
  "key22": "67VfRmdue1wCpSVL93xkPbzVdcLwAZV2f2mK1WfA2f4YauCeacQHcvr5BGqy5M1LyYfkwm8q8ykV8s9qQDzkRi8t",
  "key23": "25a6HFpDsp4myXFnLYbDP5szGtx6nLDby7gp8oWjm9N7TCgzxaXXebxmWbtisJKx5puMHgZh8jfuj9vTDx1qyvwf",
  "key24": "3bZ85iMiemdz258EvUzoa8RDVfMWkUTwZCmFm4mXYL6CBg2YSUYsiBEensJSSATvVXdD1SYo9jwB1P5hZvU7J1y1",
  "key25": "8Ag4quK2EVp9JxkhFXY6GrLKscLcbMTPUE83LW3n3tBjURUg32i74CgMh82AH4fj439tkQe7ypTq9pNsL8KNTBB",
  "key26": "2zdSRpGNtvKGpAbyXX6e6sZLhThxhGBPa95D2TX63S5k5vUPDAYDn9cxc41WDFEtb6LCC7jnzMPEKk1fj6sniQ9N",
  "key27": "NZEEA9auaj89astuFqCcnNp8bUwfnRL44XkSu6JrvyacbAhvHJdTgDBzaa2KryaU9tP2KiuHWCn3F8f7oyr48rf",
  "key28": "45cWb7yMVnMvhLnYbn6JLfbMYoUsf8wK4p4QFxACjJjKGosf2ta3mgiGrPGzzo9XyGdrsYWbUfK1qq9RXc3zJ4nz",
  "key29": "4xVUJZz2PqFH7WkzFtFVL4dVVf5Dc7au5Uu81Db1Wwpb4r5eENmP9dBArBKFN7LU6L9BiJc3v7eRxtpPxYsWDsyY",
  "key30": "2Pgc5KMxwzwcdQdm1QnDhcUN54BPaWZSAh3WMkhBVyxW3oA6nXbqpezJAbtcsgp2TLiL6fCYfa9FgqaoRiGXeJDk",
  "key31": "3japJvFsgBBwvKqRhgpmqSz2Sb7ik68m6zoWUhcU9rn5uMnbpCVdNJefHzfeUstCfoJDZD4kPMukUcVTN4vK9KP",
  "key32": "5NnDu47ccr2ftG8nDXLcj8wMFxkBXipJ3pVBoKVDNiAiU9zshi9pX84jmqTaM9g5sADrePQeDu1L9GLRR7d46H4n",
  "key33": "4NAk1k7qVyvjG2CdmoaWCUADPyitfeuDrbVX3dKvKgn81hitAovjeqSoYLwWRQ4rbYHxsqjRJV7TPTHdQgmGeRtM",
  "key34": "4edq3zkYT4Y2CYhgbeMHFeGD5AbYDGKkREdheVrR3QjEHFcMLYHWrcDsuUh7bS7stnvLYSXYBiSwpfwz8obzsMm7",
  "key35": "MSe51XV4hTtCPhy2AECyQuuxfRWzUHs7pXdNjw8jEw9k2xxDZGETMN9XN7mQ1a9fRszHQSzAs8RsechoEsyQM2i",
  "key36": "NXHeNy23aZYCHYwgMUQ97KdsRcna9wRqP12fazmSdUP3rQHyyvgNMu8NySDBhATWkzLHJvfutqdKgEfTkim5Vbd",
  "key37": "N45gihNYxYQL15Duf3a6VSZnDz8FwhSiTEsqmxgdYasbBY4EbSrRtEp6jkRjqayYfXqEDgseKxitx2JNQ6Gzk3t",
  "key38": "4EJtmFukf7KB5ToTKsZcVop8YhrMar2bCL4oQHSVRGZXUWuQFYHxRwadMi6DPb49g4KeVZy1jrZ8YuDjYWNdeG8k",
  "key39": "vcMiVowSubgFTwyAZ5NuxtaUZE2xUv5BK7Wdnd92MCv5wj8cMMx6wQEpufB3niNS1fhEEMRLXx9KKUWy3jXDfwY",
  "key40": "3CQFQ3SYW3PK6oiWLM3hk4NC5VTU7PceVfbbz5CUZHbaPHJwtLp2FzPqduKFynguRCixLnNTFpqATeREgjhhZ8Y5",
  "key41": "Yyn1JWoi7ZcGfXTkiPEv2Gymf5S86Jg2FaLLFP6FgggUrx4nwZAMb95gaZ6KLiTmE89zzNvzSW5possNxXvRD8M",
  "key42": "sx32cF53vUaECAsQW7e4J3Hg3DGN2rPEBinERCFEvXweJv8L738SPfvK3TCcNz6ffi27gV5Ld3MqVkAEwGo2gsu",
  "key43": "dwb52JZHiZUMKK13zHA9rsw6CDMDRouaGVXBFkjSWrDBGgbm4nLxCezRyTaGPtqnQpvBumiY1uxckwpW2cvUtKv",
  "key44": "3a5XjmL7ettSWYgcBAsAWBvjBTrQnfwMLKSg7MFtNktMZGdMjix4oXyaB9s32LSP6x7anQwD2rQUSRHjjp5MJP5X",
  "key45": "4D6oWfsnHAaSiwbgWYBXgHEcQLsHoc9YnsNHBvQDuVttK7S1vaVjicvgpt35uyeeWQL17yi6MNpU9TSvnkjJmhhQ",
  "key46": "31QbPiKh3kmxQTiYvKhjqNbi8JiAMycTeWYqURc93CguWgWpeTjHXMgwD4FSac8sW2VWZfptE7qyNbYupS4CYcz9",
  "key47": "4FurR2GPRzCktyQrosEhJdgsufzpaSi1ji9reimgfHNxYr91vsuPmusd7P9kbqwpXBWyFn6KcUuWMPk1k9coo5df"
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
