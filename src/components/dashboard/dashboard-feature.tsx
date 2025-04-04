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
    "4Q3fq72KnGLPZJXenLaKkRYSN3pwHPn8XXH2bS5zfWfupPUwz4WCPZREGZ1WQDJr3vFg4f8o7qHiSSUb2qgzdgE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vebGub3Q7SvTUvUUpDQRQKKaXm53JfvujCfRVCpyNUD6cjzNTj5mtFdHUEgb5yQnYeYCu1RtiPioHymemvBzTVD",
  "key1": "53furU4YepNgrPKWgwGtYCNns4gTr4syxBHyqNnaKmm5aoDM3msMjvXWz5srCMvUAMJkyLBsAEvvpeNC2YA98Voe",
  "key2": "3AQ4UnjpBn3AAfvETuT54Q6LuDjSw17ZSnbVDbeSDnWQbddf2de1giG5gzi9uDXdP2yed5NVHyYyAZKEKuQTrKsq",
  "key3": "M3CG2knEEqNwoSpw9tq7u2o6j9xxyhTCRjjbAgcKUUN3zpiM8agGUu1hJvrAKqHDbA569rNeC7fypW8bwGXW4GZ",
  "key4": "4RLikifm2wA3tNYptETNUWx7JUUcxSD2h92JPZigvsp6Hc2xKrjNva36bBa61Uf4pVktFk97MhpLmQNo4uBtA64s",
  "key5": "52PFsAc2MJU1CZ9wiX5UPhN1auEXm9NJbX2EDrhTGMyTgTSttVKQy723hdvpt41p3DGMjcE8MNJXmmjK9PkV9UZC",
  "key6": "v58nfdQfnjk2T7r3BHetvoNsoumEuPn5cu2sm1AnsgdzTrpU8G2iHh2QaA5ePBK4f8Tai58uLqDa7bkN2meZFWS",
  "key7": "3QiCsPFiSwio9fNPttpuxq1R2GbsN1V2XxtTX2HE8p57LrLn6fW8DWXDWaBTrPRkBzQndtSYTr6cK2UNWBWUHH9R",
  "key8": "2HuF4Xnjw2BuPZxg4q3y3c8a3Mia3YJnY1dYxYo5tt7k6Pg2HFxVaUfRDyXoJPRYnn7CozuugTb437LfzksZg6zr",
  "key9": "3a7gLReppyUu9JsnSShhJA6vbURy5XMvwwGsnCv1q5PjmPQS19j4AMKFyWXZPKaufdGUBn5sNAnbs1cisnkXqoQv",
  "key10": "5K87SCvKfop1MrbAkJRarkGrbm6VBxyCwrbSVSYpN3yWuGzxDCdA5y4GXHhFThhCVzd1HfwTrFpGRBsKuTXR9iAJ",
  "key11": "LGj6h3Em2Dr4d8Km8LGtBXbDzyPZFKyKjhChm7ESi3zgCPmPVsA7RdtYUmcgZAjX1WaJkL2R2Lxt2K1mzbzQF46",
  "key12": "kgdkc6whwrH15HN2YnCuJte84jeSkQbsrjsjB4Ktj6Z2fKJhKc46cbp7giRmVksDUewFTj5hMg6Sg1BAQw8cqaT",
  "key13": "3NSBtYVF8p9bv4Dfw4nSMbtdLDrYbDdzesnH1VtV9nT7zrMGmY18xbKyaZGGPuP8Q8TMzY59Anu2voSLxMYMQrai",
  "key14": "26d3h4SBzVujSMkPkvTEWHGoT7jcXKMCyYhY68FckF3wBvs5FK5yd8soiE7Bn3K9qY7BdJ3JXFf2K6QbxU7BWsn3",
  "key15": "3s4BRQoB2yb6kAtgGX2UmFHUmWZy59cq1qMxH6QBiRTCq8GDbGBfoz1BFVurBhGwhTq5RNm9X2KHAKewzVgg6Cg5",
  "key16": "53kSiWwJ3yha8Xng9jT2Mtw9tkN675WRjvAiCPcYSENsCwedKy4YT9MmBPBb7svUVRnQ5HSPetwjab4GkeJvnyHa",
  "key17": "2jkQ8EvpVK4fTcPTBEEBZ5z24oN4wLnY1jR1zBSpQpZ9RpVNhFZ4PXxKvYMxLtXbGnW2S1drdBv64Nt4VAh17vvq",
  "key18": "4x3fxHMZBDmzo7g6jxxUMsRsnx88mYe7B1XCkoTKmMYLqJUQcDR1Hbfq8deZR5XDrjUftgPf2jXAeZ86dxVouD4A",
  "key19": "xMyVheUM3rV9jGz1de3HKrVa4THAsU6youyytixvqz7cJmLdcAokYpDVKJB7jVF8BPRXvvA5SaPjb7KWgeEhbCd",
  "key20": "iF9UUbzB5u7Ti6nVnVq5wPXEvCST9z2TRqdC1MZ6ZKtfVXw9Xfk2GmHLsFb1itbxQS9KC1PaYka8gp2P6e1svNm",
  "key21": "3bcG9ThTWuMtsi3nEtMTa8oaMQ2fWUsSrCFijYQRvgsRsfdkdz7aEU9a1xGAKozY9kwLJqcicS3i8ns6FdY4xpek",
  "key22": "4bJaJZsiYHER37Mz3nNTEvn5wheGJ2FtFguiPxZfGbyBiZDwPD9uNioTnvsAXUkde41dPCszJYUeyqpQsusoTyJn",
  "key23": "24fCzosiRKR8JxMPP9E3a513NatJ5VmFgtYmA2WvwM5DtFkREPNMJtu5EqnSY7yGvWF3GGsrbXxDtT4aowMVDtjq",
  "key24": "ims9vc2di5B7NSBhkSRZJ4gPeko7yMrtqkbUZuHYdwnVB7Vtc65L996myTj1zDY7vHzVe9K1e6gaLe8FjQ2C6YG",
  "key25": "4EtY4BrBixUwjkrnvMEukctSwK73MiMKDMHSc4Wv1vjd6i9UUt8DijCVtyKX3mpC9y4BaEPZk1U1FaDQLrJuzS6c",
  "key26": "3DkcmCN6XRQqxgr3kK6n1T1rowsQKmFdnonAMp5Y56KvCfWgrCPZVMCCL3gzEvs7iX8uD7D1Vo8wvAkoq53Aj18J",
  "key27": "55JUtckz2kGP7q3Jye2nJam3WfP5DunKxRfSgbBou1f3FxWcBK4XXtGDbiuoQHXXzpPs7F2t1x5BPGTUhmx7TDg1",
  "key28": "3nv7kC8ZSSLab9dGby7pY7LFYEw5BfvUmhB9Puz1B3Hg9yMX3S2q1jXq3f4adkqtwzYz6KPMTKtvyjf8Tppit3KA",
  "key29": "3gvGGZmsSCHenyKW9QxapxKWcpQCqEshxHagsvV3uQB1SJvFLau1CE5cTghvC1V89npT97XtmSQmMFTDGcnqiyot",
  "key30": "2pAmnxaUJJhbkBVgA8qKBTBMWCnPXvAGf18RV9bxFBGCyGcAdjGBSHd3BF8GJrJu4q6Uiv2GymbCCGk8S253c4D2",
  "key31": "4uMed8Um6EGSTRmUfWuvta6zsTfpFcntC1X4McmrwME8PLYrcVwEubXjTkt223H69SnsY5RDCapMT9Av5iJbC8Gn",
  "key32": "2zZL6sFpVFeHCarfxYzqgzmUMBAe4ypzJLtW193uhtA5nTLrjzgwMDY5T5rUXzzapdhsBDQ8xiKW1PQiA7GJKq5v",
  "key33": "3Jw78Jao6T5cTuJEFD43f1MSH6rkYeKX7PLbkVXhTDPnHNuWsaqic8cFEMCRw1LPG5pgNz2QiVJMGbTojBCbac7e",
  "key34": "5AzhUezNqKXbKBrLv9Jo8qTjJ2UpEBCVSqWBckXzQzVSWLRCnhm5QuDin8PBZ2BF6aiRxaHvVupgUBiGzPhpvjrB",
  "key35": "izMmiZY5M2CoKvfLq5hphGpZxTeoFnic1H2sBFGnZPqLWSHmYm7WY8UP778vY5unN6c2oaZLDqRJfcpQSVPi2Yu",
  "key36": "66kwncWXFAEa2xfZwXxUS91CaaRY7GDe51veUtb8ebm33jt9S6X8pmRHxYzEc2PrkZr2RT71ctMUu5BxXfqBfvsA",
  "key37": "HHXLuaByy2SCcAw7UTb3YgfHoZuB4FXAdXCepCq6oM4Grm27EkgStMMCYRui36S5pWHdp4x3o2UKbt4ajtTnsi8",
  "key38": "275H2et3MSCHqCyiMQQwwsHQZKfnyPm4fYYMuqRAqMX6avMp1MjwqrJRNW1GMnHooXLSSaoWMqijuVzQJebgvx1z",
  "key39": "5uMKVEVyFQytdoBybymrZ5LkLgga4LZaBqtj45PtxKM5rRRnkw9f92ziJQM4uTm1KSxLBuFgDXSL4hg6WJPtumni",
  "key40": "2Ckcc4w7FVdd8vmhte1YVATN6GCxkqbEwvzqvZTGR4doocxXrpmTVAbUyY14hS4RmavkosZJvECEXs4pTggiEPcK",
  "key41": "67VbJSws9YwkM2175c3BETqqJ9xN5NQ82n5uJ7gvP8wRRriV1Bz7f4orkNuTS4rxcX75iTgFEmzXp4B5CCnPLez9",
  "key42": "2yd4WubKYsrqkRHde4z2qrbBwySQrrDEp4VGSarniwHgHkaGoba7DXVKRRsiQUecgiUrh29CCZ84nDzwnytKSPwr"
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
