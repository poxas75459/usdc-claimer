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
    "gj9cc7dBXvps4Vy16jB3i9iocpRV6Ah514VsxTt56fFEjtaZen9jVZuxkvfHpoTvrUpKhHy2B5chUJtfu7C47xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCmxjVFhfPy3EuH9qZAcFsPWm8bEhUfBbyuJqpGmHAF9p73YMs8qdhTgRgifGEFKyaCppiqiVMDLYnazNntt3vr",
  "key1": "4EKPf8Zx7zNE2dqdSbXNZeZwkRanALJrLD7npEayT4kkuAowc9i4N2Z6r7dyJ8xH4nBCax3Z4Uguk6BXRT3uqMW2",
  "key2": "2S6GMWZpaCGmDLLEGJvyB1Fbf95JtbZCthnHhHFZeqXxTUxboTDrLLHib4byKoRdCR73BaSTPVbAiL5vwypnobv9",
  "key3": "1jA62DZ1WnrmJbbbSCmZW4cxH1LbrHrjLi8qurydQvpv3SP8DQSGyZ4STjdt4nsakxgfzxoojufs5pmefXThjNd",
  "key4": "3nSPQkkwXAMedL7C2uMokqxgYV595GEGCjC8EQ1Lcn47fZp2JbUWhKo8S9PDS8Q8KuEr17MwxNuViMJrfFnoqeMw",
  "key5": "4o7bPpZivueLJ8BSecQ8w5HhVhjgDaPxogMvQS9CrYJtBKcmJDfDio9W57kYLrZ4CkDoFGAU9mQLhvLD3c7DgHmT",
  "key6": "5asFm6insWKQjP74L6ies1ZFT1ztzJB2nfJR8Jbomb1qkd8RDnQ3FjxFwDLFK47r37ZeVqAT3ddYc95PMjM1K2k8",
  "key7": "FrwHZAxWaN174UEQcD3piihbESYp2PNMgTtbxaRyCxmCcVC5KmXwrADz6GR64BHgo6a9kgXXpCMmsGwnuGbWQwL",
  "key8": "2fW9hREcLYgAyBfqU7BzWfvb6GiVrdZxoykqfDp9a1FP6eKHtyq6DMTqDp47qMSM21q85xr6BqKuT8FKkjLwzJhR",
  "key9": "3SiyYt9tDsb4AXfVuwKYXNWEwq8zUBunwDNySQGAQL4WFZ8hmZrbaS1wdysXnc9pv2gTvCzgjLZpVQyYZVWq89uu",
  "key10": "511kcmgL8VbpD4X6eoHvphb9VbgHE8fJ7Jd59gPQ76afi6JiCxTuz4RzwJ9e5D5kj8v8MsyzLopoHAirHopaGGWB",
  "key11": "3vKN7aFfGti2JuoVayWss7h4RVLmif3U54L3BSSxuUDM5ztas6uHf7yT1Jx3AsmZxcaj7FEjdKriAkBm5GXQBrdW",
  "key12": "3sfBymDdRx2hvBMooPYGFi5zgqmVgRi4vMY495bZ5wjXr1sTmhWh7tWEKjJT25qSr6rhBRvMLPEEZfbN8vAkDZR1",
  "key13": "5mKCU8LzuJanP1UP6qhDNQitdUrU6oqVp3ffXwnhgXh13a2oA3ug9oiV5WYnJKR5ZhAw4sYoW8HJ5XFMiJg56S1J",
  "key14": "efidP97LtwV1gjJdd4SGrtqhtJ7nbN1xfwiH57Ux4uD9naug6vm6jJStWfYBERR7rtht6zfsWLMyzAK95VzrdQh",
  "key15": "VmjHh2ChvwW36hc8LeBkaFRm77cDLyuAaD2TNFWqiYSpBPkuyuB7WMnhvfhHs7Na8m1wJjsuSk6k6RDuFGm88Ma",
  "key16": "44ioGLdiBKhE3pbmFB7AruXhWNheAirjjNxvSMzqSypkWwJKhg9zmtNydzsqNVp3iML39wCzFXgEr7tGH6oDQqp3",
  "key17": "VFoo4wnx7yK4M6MKZorcDaaxUWwhKwpXEHa1zhqNW5iF5tbwyb2WPcYCHZTDx7QBtqQtBwYd6y3ZihkEzYfhdeq",
  "key18": "28r4mzoSNKfZwENMihgn3Kpz9yZpMD2Gfy37rJZ9aC7aaDa5FRG7T9A1cNdKFjQkCe8y43eZWtezB1DYwGYA5SzG",
  "key19": "2Y5YA63XQmiNfAd459G5pdeCDtyT8Fyo8JBQrqU91ieb3sn8gFhw1fY3RxpEPcMuSZFpPH1yHCeRaqp2jybnyXZt",
  "key20": "StLrrJ7A3fYYXcRUs9c9wKyGnRCYj9Msr6xGUKmkTpdVf9TNPxH6WJKcCzqkQgjUjR5VqiiUo9X9rj5QwkygZXo",
  "key21": "2D6qmGsrPBkVnDMWAEn97svqhNsW9Ka6PS4viAYoSja8QjdUJTjK6VHgdmERspUSxkE4gYabvFqP5YZQrh69MZhT",
  "key22": "2vQmV9zBWdjn6DkixiAGhUrZGYJA4crJTPTN7BCVEui8G4UvmD2hW5qbPuf7hzDkBQRe2L3wAM6yPo1aBZMTpVox",
  "key23": "65CE6ZLsPYWF9um1hrC8sUJkYhQk3PgAiQmuxbFjR4QJePrepBEVuWwJoBXyDv42AWU6CQssGb2iegreaGyFoxrE",
  "key24": "2LzH2PBScLUthRFRB5JLSTjLPVtwRcAvoutNFrxBkc4WKT1RL3o9U8wCSnNwJ7LCoxfSpkmECNRmXZoaQn5Wm1JS",
  "key25": "2LT8WgZ8msYhhVhL4TRYPnUX3ffuZkmzrENb3dhp4ByyBQRSUAbxgYFCyyuWmVwM4qntq4g1j9AhYNSgzffmrcfc",
  "key26": "ZAuFHnx1xUF3jJFCXnCABLgugZZVBvNkZsbnJHQwEC474QzAyTzFQ6faiCDMN1jXpt4ybecnWTSEE9hYLnGPHmc",
  "key27": "5JhV6LLSe5AenATBzMBdp4EV64ufw6zEPwd837dnSKYZqboQwMueY5gcxHL3x9pg1Q5PgoE7cMad7PifBSJJR9JT",
  "key28": "3Be7pAptP3Rq1vpisRigajwhW6onSyxrAELfuG8762j7h4c8xtUH9bxaAWbas1fFREE5FLfGgeC645E6RrRPKPcw",
  "key29": "36SJgrqCnptUSffYpJt1pNTrut5PJVt42q6inGiazz7RScpthZd5Hk11YkrPioHjWsyyJiTPaV9et6C5b4NsLTaF",
  "key30": "SdMwsh7dyVAekcsmL1Hv83TbCSwy8s2qd7vuamCohv9V18yNt2z1KRQuGxGKrhCQm1csCL8QdyAWXyWRefzWxYW",
  "key31": "37v9n5UpdaSr7PnCn4E9gyE6jXjTx9bhUg1Lx5coBswJ97n3rppogG38Xgn6NwW2zJ8tKBssoJCtjTfprrECZYDp",
  "key32": "5LEPt9hirhunhSid696m9pKWCSwYyRKXhDBEuS6XXTa8vshDCVGPqEFKUqzJirxe8cbUvRVR8QC1vpV52zWbiBC6",
  "key33": "3ZPK7dzY5TxqAFQJQ34z5b8dNMk2xPWVJRCK7HMkRE7mhvNsduPfviW57SFZYYtHLNL9ZGQ9ebcJzE4CEHqQFDvJ",
  "key34": "2UgzQrEqUoe4yy1GstyXNAqf7qPn2n3GTeyX7V2uibNMQmDJenoNLXdhd3V7p9UPz1sWH4yH74YozAxwfJnnPjmN",
  "key35": "2B2taLXa7JL6Y5VDuWrZLwRamEfK5SEex3kqJUEz3bNZm9WptPMcWS7m7w8DFf6Nb669ywZtUXGKgsQDmqs22sZx",
  "key36": "2Rp8cq7pndZTE6U4L3ZB8drv2A3dSCU6kuFfK4uLDwGMjHmsdA4xiMMS8anjSEjxTRMZNtpkBHHViySpeHaHRFoq",
  "key37": "3jXBcbHvNfF1Q8zxuRRARCvte5n2wYUbzLM9eg6PgDP2654MMP5BWy1zKTbdsnJnoWzg9z3TeU31pkm7UcnAGcH6",
  "key38": "rXAaDVXxJHEPsQLNT9EZ1cMM3Wtx2KnoWerJqjw96TZscLD5hJJ9tUxaJLrSKQWCLrsSxgtNQmmgd1goE4aeUmj",
  "key39": "3aMHdhGT84TFEMU5YC71wKscZhamQKbk9LDGvq7TECHBkmQ3ZTvnhdEbV9UVAochDDRJFijm3yN8pN8b1LAQf9s7",
  "key40": "3Ud12Zu3r73T4WZDx9xHv3xPiiv8W9fcSdpJXSo6ZUTHD9ie5CgerKsiRuKNPDwfTA6926dmddtSPqgipbnppgh2",
  "key41": "3KTAWA3XEzvc4YfTa6UP4i8SZRw7JTULw3H6R91q7bGSFSVYfcAVs6BqtR1fLyvS4Atwr6xZj9GNmeoJZBEgRmwz",
  "key42": "3roefjLWgQBaVbeQLKfwV2gmWEatvHUXhJafWjASuVXo9RNW9iSKQgYTmm4BUn6iLGQs5byirY7VEYr8MUqwBMhW",
  "key43": "5YRcHCpa4LvfXgphfPTZcHzi3CvrGCBUKK3UE1zcgjZxeYyjmcauuuDfKG3N5p7JeJJT4R4uPM7kkhMwx3zNingj",
  "key44": "4P2KnMjknLuX4NKwFiZ1pJEViLxhF3y8dZe6Nbxvt3T4dvKHKGZrjXYN989g6TRPU5kuox5Sn46iUSSLyCFZeewd",
  "key45": "3EvKctcLqRK6fdwc56Cap8KLmakYXPxnkFraBdJEKavQST4dcWTR3Q7E6jnFYfuz2we4ZguWhaSXbda9HsbYgRjb",
  "key46": "47gMTHWXLGxu4sorYv2rU8tjnwxQ1NdsqN6YSxr9G6ZRWa1UPwk6HYjshXHzWpVyTXqas9cbNmPcEMu28gmUxaUP",
  "key47": "2KRg7MgJTDDeQBNr2A5kUhqVGSvo36JqPN35pdTz2aTVfmzJe9PZ7xaJeCj8MHkuVyTgpTn2crCDs4Lpm6He3e6a",
  "key48": "37oVcAxJ9s9UXY2isTod4R2WGSkrvQAn5GZMK437GZRcvE9EyUivcjyu1mFSukzmzpJGPHgyyXeKVTkLzddVGYmV",
  "key49": "4zTAjTiyHHJV8xGRcmgPkNmCAq2qwYKiogU4TnZng9ZxfBbt2JantunjMUBrAArZX6soE1ETWuAjBvuMrMbrKeth"
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
