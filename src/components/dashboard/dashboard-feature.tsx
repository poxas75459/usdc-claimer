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
    "KCVPyBq444XuJc1R4iGNz88ZizFiCiVrch11xBuswYHGjgBdA5hmVtjMt64NMerdVTeTvHpQ79oJzGwUtkBrj1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etdpXss3SqHHdKAbkEtvZvNNQNitjTyVjAd77HkP2nSnEDKifxGHZZPyZy1ZqEij7QcpJVXRBnxzpS5NxEheK8n",
  "key1": "5MvBnvDqZgFqPzDQYEqp9QiPnGEBaSZxNTxwCouVTBHUBv1BMuKE5n85vHMY8nu4Y8tb3JPu7vkCHhMRZZzWF7rV",
  "key2": "gP7Fph25dXEUsb8s4iCZJSLw3AH1d2BbdWjQJy2cfHYBhUpLv4c5vZoJDtQhLhXdmYyGWVm4LK3ZqDjZw9isBUs",
  "key3": "BN1Cr2PgYvJZW5GxvzXqQUgzhNn69eTRCYYaoTfNaWQWgbeMfswFVrfpYtX1ysVLypg4efMNQCXShU1GDLhRhYv",
  "key4": "4a7e3EMy5EWsU62SEP39okxaNu87XBd76nVnBaXxvHHBTTmuiNLQrnVP82jwce2yyzpfbUBu311JfKqqaebzt6RX",
  "key5": "2idpWzazm4Qa34hJDNtxnZAK6w26dwvg2Fzzp7joeLngpqJsf5iwBmC1YFd6CEjgzQSZdTsoUDSZfXZqcBapeAHN",
  "key6": "2V5Eg6fFFpXTdtHpWZfmcag23fWWhzJR1H7dr8eE8RRAafAijaRTaYnpaQxg1scsTWrFhtdifHxcC5zboWymMjfo",
  "key7": "Xwm9AfWTXDinrgTKGn15Q9zLY6NTX9nfVKXEyryzm7xdpoGn9GKnBoMLQMaZMeWKLKfaPERQP8p4464rtssJwfV",
  "key8": "2ngVdkMSdCZVQ3MTiqsXonGL2K5u2HnxMU2XgqrDc4C7SH2Ppxk8Gb1iDFqUWe1BfnvQQZaLenzH945uuzpq9dQR",
  "key9": "4DgmGCPGRQu6EfCYRMcBmVKuHm8uw5w63iqHEEPHSF3vQ9k6CTKoKEaTRU5xV2kguF8888tvUyVpgirAqa1CeXfg",
  "key10": "5afmViPrmxGefpJtdaQQbdqnK5aGpVHCmRSc4Lqz5menb34HhyL3TC5D9zFCon9dKukdgiREiPvxd7gokxud1hzb",
  "key11": "QqopHvJ2LaQ1kVNrHQat5KjtgJ9KSSmM3sEodErtU26gcRUsVQsfpLB4yiec9vMHdfygaRvicA2bTxdBYBgFf2o",
  "key12": "2R8rVSzoFczDV3x1wt9o51zugxzdcgUZn5bZJdA6BBbasfNWARoxGFrwD7Rxy2MtMEN9yhJZx5bx71EGW37rbWq3",
  "key13": "57Td8Cgt8v3oRMnsyY3ivUVvN73MTR6Ve4XdMzDvk2yZ34gj8BPoZhGwj4nLzpyKLmCcASDjeHSTPStet86Nsvpm",
  "key14": "3pLsZoR47YFzYDngM8hnsriCAEcSosKKqdTT7ceSa8zMif2znTjx9Mh74RBB7DTf61UKGWFvxmXhwzABhgfoW7sF",
  "key15": "cVNBbyMKDbu9FbmpZSjQUXMoT8LuA1JVk2KDy5MARXqfRnSadYN4BAPSbgJhptyHbTd7ryGyFc8HJ8JMchazhd7",
  "key16": "3B7D7BhmimUVnitA2uRMZat2CJeMNDibtuW34nnuqYNtB7vph4HkghsibBYUnvY4BoASyyeF8J99EiDbUnMzJvSD",
  "key17": "EQdj8s2h9nyzoUsbXWLqMtQCkHE1C3UhKPuSrPkhJdozGq6vyqDHbAy6SXy9yC66rBTaHWoNXQ8mYE9xHhHUZyu",
  "key18": "3a79FM9ThvXG6779qM7auDLMEZPAVjs4zJfyaMxYhiUQ9dZSBsS1D4i1Ajx8AG95DtJTHwyXGuLhFwzzYXseRVmE",
  "key19": "4cYkQ3At2Wi2Vgp3wjLQPfqDZ3Ygib7M5CJAPPRapn6g8Gj78bbucos6Zmb8x53b8ENfjSJZHK1qtkdZq58U5srh",
  "key20": "5v8Mnv7Y4psS5T44aKCN83rWRskCbHbDryBg3mkonFhzppnLzvJKsGaYs4WcaWKhViDL2Q7iFURjRVWmWcGQMJAh",
  "key21": "pDRFK6v5wxqJP5L632CXv7zJByYsY1ePkMDgyfZ7QAZjD3MEUAVyrgqDBzpw92PYJkFttTk3ubfoyh81yy4pCt6",
  "key22": "4sPiCUPx2G4m49Y1xbQZQnti972iy6uZpZ69BygL5zJ1NnDigjzo2ncvwgoA9uebr4dirGyRv6UxJwK5yvdnopY6",
  "key23": "49sVRvmhn976BuJXvUQsjnuGvbQzGhHB8mgDoh9KDVZKsBLQvMSrVWPhYr6mQXETjoSqsPDYRyLseMqQEMg4XsqQ",
  "key24": "5cSrJZg2khCAafC7HUVAZE79daA3Z7jLbr9VwP4mBTrp2LtZGX8ZjrBWiuBffubPJTG9CNdkvNWDxctq9ig43znY",
  "key25": "5uY9iEHaSK49pQoh4PsR1zEAZsYsqPD7SoMqm8KRHr4HD7W7QFyVHxtepmUZkhBRd6S75bgdxdVGC7hpVDLHJCAi",
  "key26": "5DbHWpt4Qj5FArSJR3uLigAGqDUVJGQ8AgfWNohZHyRz2Ft8muddcLjtLi7gUPhWzshGxcDMYwA76zppwkp4aoNc",
  "key27": "2px9pTH6KpRj5i8bT9CpHC8SMDZBj8qUoeVxSBRPq1gb9NJrjPeVhw3k8tbrRHhET1FehQK4YnFqukHkEaEVVRzT",
  "key28": "L8ijToYMtvVneymckLAXPxHjfanYrh88mKS6JwKKwariWVAYtPV5qSdqQCHUjAdmGx5w2kqQXZgavFi7gTPgqrD",
  "key29": "2ANTrV9TnRHCYtjHxj9sc6Lpc6Aw9L5nx37JdWX6hBeQE6YU3Goi9sQJ4UQK11VDEgEDJP3HDKBPjXQxouVn6778",
  "key30": "FPJJLo9eRV3P9iQyLmnhMQ9wMXMXH8cpNDQbnxbc7owSRrWFJQfma5hk9YVXdGa7KJhHpa7UcYqCi95gW3qqn6h",
  "key31": "4LdFBXHy3f4zZ1nHvnCqEZQWh83BR349otDqfUGuVUYWgoq2ZyE2kUTGEe9sTmrbq4DhnUNHGGnNbti26BpVD8AY",
  "key32": "4Wy89Qp8GTnhuyjFUbfLpmhEU3fQWqHmLhRJNS7GkaYN77a8cBXmyBsjwXf6gE8Y8n5KVtvH7U4CNhygEayAUdn6",
  "key33": "5yux8kjHrEr8HDrZMxBg4wzHxB74kUdorbnfX98RLTKewVocBnSPgvbZavRp7jMiky7NnTKwA5jz3g5iNJTrw9jZ",
  "key34": "5CituJHAWUAPYgBLo5P6PW34RfGK4kRqY6eZuR5fsLdbtujyGMh72Kac1iXQukk5qcx8xAEPzxATE4BUEdSSCX4Y",
  "key35": "4Qsrt8rJ4TMH8vjqjAZVAdxQ7Qjc8untrb88D183XerHHvCiTiV4ui15eJ354cRHQbrw6krsfubuonYc1joF2UAT",
  "key36": "2o79xHqx9AuYwJQBGQdxmZP7pSjKyGj6y3io4sXydRVaFhC4oaZ5kxHYj6TF4cZUfb2Eq5SSnmjCbKww9nZp78en",
  "key37": "VsYjcgLfg15afrNSLp124YBCvvByRLQqLY2zvhY8aJ26Qbwu6qnXGarQo7GpGYjJtoHz7W8bDNxrAsr4ejjs4JZ",
  "key38": "J9RDP1ERFGu6BbU8goTTLVC9zYEHDbR9EMoS7NR6rk1ukRHRixqD3KUTy5JHisusfCHzV67fKHjokZZWW1Sr516",
  "key39": "3VVDXxh41NkimiEH6WZAZsQybWsYZBytSSPkWSbhsBVnGfS64FkTWZnQ55kgPjCjrdDDFVo4TkN8TgRtLRkn9eK8",
  "key40": "61i1o9jRcgFhVg4MPrNhvim8ABXqJXamyk2gAeC79iJjphNNx2v74oAYHDBajSb5mVwWhoR8sY6fTm3RYJUReUkp",
  "key41": "2UgwM8DtgdrZPuSpE4SxuXEyE1xMnkgo2MELz76bDb9wkASsedGVrvCkq3uGzvEz5mrwT8cQuHTcDshNMzvKmSh8",
  "key42": "VzUyFF61CNNhmH8SLwnBuqCtc4AdNLdM1uie84HD2HhAYEVN4N4vytHNFUsxtVRNbuFPSXEUanJSUtmxWJmTygQ",
  "key43": "2De4E1oVoJ4sN5jPP8KrRh2At3KTnZqvHm7ttQHpvbcTRH6K2MPjeRj1mL8vKMyyyKrdJ6YJDrihTT2P5t11KFja",
  "key44": "4NqhsDZ1gEZMduQH91dqe6GBnWch39S5wmcvTEsuKih68ZKh1pQSVz7uCWwRJou4yWg3cSe71CavwoR3HLVn9wy1",
  "key45": "2GsvWyCAHnPvgnCTtU3t1M6PHEHrgVjLgzwNqEb2E5gH2jya6fkFm6rz9siE35qWGVX5rs14oEoGpa6RMFxj41x6"
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
