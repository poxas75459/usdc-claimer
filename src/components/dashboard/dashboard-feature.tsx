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
    "65dX2Wzx5TxCvRVHrbM9DPFaXYQfsm89XE5nSHng8M94sH4SzZfTAFTkeNs9zat42RYGjfTgYo76993ZYX6wYN75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHpTM3XsSkDYYKdfNwWZz2qdK9ttZXZkLJDReNWXqpcMxbjMuzYQbYhwyNuf1yx9utLbkdyWuWrjQghKfqE82GY",
  "key1": "5BmLvKhuMjyFgnJV3Yuu4r4gM8peUSyeCDyrPumiKr8yw228dmobeB6o9joFtDRGzGVnjLskiHHtSLYwbsVFDWS8",
  "key2": "3kso1mptwpuRGwqiW6AKkc7pTLKXbTXPLpPWoF7oBbpqySuBvCspzkH1mB3gQyBC54T3BD6yZicQoLs1nx27uabH",
  "key3": "5GSjfvo9fqN3tMQoML97iezWhLDu54fPoM5b6c76FTrqfPJ7WEzHKPGygS3X5p8PVULfYXFTYxohEvQxPwfY3gWN",
  "key4": "5BrYmfgtMrQrbgPSrT9XbXFo4dSDBEFe6L34GbSN1YMFHETCSdZanVcskxgSrWMybUxo8xYUmoGxttsTVZHwDunk",
  "key5": "rh8LFWE8Sm8nKbuVbwT9j4tvkfHJsS1V2nY7gfvaENfRJtqNP9jpwkEPVTBaHRdTvaZkeAvrizsJ754FpFH4nzF",
  "key6": "hmmjRVYeTP4JYWwVey5VEW8jvX16MkMgZk6xH4drgGteGhgst1t9AvAJUmh1v42S6wKJbePwZHVm3m7B3i4P3Qc",
  "key7": "61saMrpadpwYXEwncP5MBvjoGMfiWPGRptZMtVKAJFXSrv2z29Mm7S6bVfkznPEde3M4hTXNXEN3WnRVMBTFBEG9",
  "key8": "37CuisfrFj91PT6344kXSq5Ysqvr95yg7B2crJqYHgeFmyy3JC8ptGnyKQWCBC7vwdEwYzDCYGC4wL62AJFzdKHw",
  "key9": "24PRZMJfHpmJzSbh23w6JcXuQVUbc3ygitC5kV3MX8FiVEJjYuXyPXA6igr22dListqybunEJQmBui23NWck4pcQ",
  "key10": "PYkvLxJDwEhxk44sVikBfVPhguxsQkWp6sACr6g888zpsmXydcBYzuiqdhp2Fu827K5u6PY9Q8qYSfbaKe9aFKf",
  "key11": "3mGXncrcL6rwXQ3kKxNCGYsmMeTUQZKiBXRF4N59GkG91Dwvmyxkn47UjsBbTBfnUuTbD7h6yRstRfEDgN4tMyN7",
  "key12": "3ZNgemdEVFrRomNbtAUQfpbqMT2Cvt4efjjzvGsYBuczSs18Hi5ksgVjwYxmbLAB46FY9ccA8k671d9pFoNW213c",
  "key13": "3y3y23HnEDymqhrWnE3cgEd7DppitDgbbifHATEVbUiLHesSeSwtPzupfXJnyijoJ6jVUcU6oX52Jf8u25ok5J5t",
  "key14": "2p6FKVjA4K8oqnYWEQdaVkMUi1m8AcdpcvKPbKCY66jfLdyetvoUvtboN3BkoCCDiEReLG1Dk1yf9RV72xtVsjNZ",
  "key15": "1pZhc96ATyVHyGTDUNgD6GW9wMwS5zA9nxqiSf5rEwEJuL4uWnByEwxx4vtfQpdvSUaepSDkBqaBgEoyusrzccs",
  "key16": "4k2UaGrLpVE9rQFBGGw8Mr6VooukZ2tb9MZ49pxePYWSu8juMj8DXkRvGUU921aMw4aje3a48CkTSo6M128PfT14",
  "key17": "56e5aKjhzKJhfxhAge97u6FBQLnteMr5rbHPBcpG6wbzj5dJ4eJt4yUxk5YeF2UiThPKvXqbgfpGPArNAG3UVPsr",
  "key18": "4kPf7SrdWo7CwgxKZeBHisipoUnewxjeMEnuJyQHfv13TJAmZA6V5p7hqxdG3KkD4SUfJFsLDx3RfNcSfexRDXPK",
  "key19": "5svMsRBu8q3ff4orZ9ayECXiMzX1vu3SKvYShbiYUDnNN4kB59EpnzoBMMxnYFryrwgrFGqKfoP6Xf7U3qB45b91",
  "key20": "3v3aHaELUU6CsLitJZfmZGJH1jbsQaU4Y7foD2gx6CewNHMUdeyq7pefirAEvdVdLgG7JfvuCW5hNjXjw933MgYT",
  "key21": "3dyhgNa9M8F5kC7pxHNH6YLnS2DEKfigfThdTCz7DjGhgeo7X3n3LQ85oiwf21ybDjNR7P2Gw5bsZVoi9fjAHasx",
  "key22": "56W383nTjynMLv8yzpfGdqWWDbNVCmnjhzXczonmcGNBQcwrG4MjizkqXXpHjNTfur2m8T3MmhKXSLPLY6kHTcQF",
  "key23": "3XKPH1MseegL6sg6ZXprmfrvibC1jYzsQshRhmpwtzbFEmBBAs2vhLqLdm9z7eo4vMco8SNtJktiL3WRZQGgMenU",
  "key24": "5NLA9i9WNMkL8crmZWmSXJwXiPbRp19M2uawKKPwKjP73rLnH8sMf2ZPdnSQkRZGc4NnWKE9uXBhGoFQo7CN4rwX",
  "key25": "WxDKF9ELi6xYAo3yP6LoGEDXKVuYkh4v5ZczGbSscX45r1qjCQS1EX8KAruUVTWnDQo9UsD3VFeRkbVX3RUnmeK",
  "key26": "4tWdkTpxv3cbcYoLPZboKwmTtTdcUo7hHoszkYaRAuQNxHcQPyZxzJWU331jfGH2kFxiBA6uoLPXTpAiaGsxk9xx",
  "key27": "4K33CyjAydzabvEtzujLJP3eUzYnBvwDCeqwGuDp5U5VS7Q47pWyT8PznonXysKHdmKJAxqs6D12G26h7rVD3Rhs",
  "key28": "2f54UjDQvrDSM1L6XHZuAKztqG4pmYhDnpAyfX65qxwcZXqyhNLxQJb8Q6cUYibKHGmKaNGuFK5huYNVvDaXYHEM",
  "key29": "M3YiHTbgbvwTQ47LPyJuatFoBSmJTTHCERkhesAASQQ2hEU6YRVX3ERGzh9Xx1tfwEtawZvank34jmg72t6R2h1",
  "key30": "2BAfnLvquSPnTdjMY4FKfQCo4oY7x7CSP8kz8KjauedGgzWDfxyWuopZR4MGs3Q9AnfXhgmcn4moRUKdXXJ7mJcM",
  "key31": "3uzDHnxVWXs63o6wwtdqNMgsQZ67cmyskYP1fJ19DQdwtvQVZvn7Z1hcwW7zvNFYvAzTzBZQwrhe4TNtdF1fHaSP",
  "key32": "62TjxqHxSYGDn91Ys3Ma85zAQgrTHnDrz5jYdE4NYs7Uk4t4o2k2cKMwg2FkDjnSmD38QchnF8tSnA1tgJK9QTg3",
  "key33": "5ZVm6PYNNGVJN4NgfWUx18E8jds6KoutC1QqQvfq2cBCzvAdMLZtiHTSC67Xigr8MpfGshD3mdoYfeR5zk6H5Csu",
  "key34": "4rYnMQTGjhrED5Ct4ugHHexA9EyUPasQRTt5fCwHJQRJdC8njW9XJqxJnJCrfNfNLgrj2mB5rCWhFMNQ5GjSZpb8",
  "key35": "5xUoMCthPHB1vePpgke8VF5g8zaPzorBDFib8uRnk6qkLnkZoitV6norahoqx8BjBL523yameUbUuUAP61uoQniK",
  "key36": "LBDyAwhKrZVxDk6ngzd5adp24TtGgXuT3J9hrBKWHVDhvpPSqCHXbAAGAC6A1CpTdeNZQxxBoYkrPsurm8F919u",
  "key37": "bujnJuYGYL7MbYcM8CeHmTt89PRvciveHGZX2u3xjnUWec4habyQpFdJgD4b4N3QLveKV37rRkpPZbjXhk5CXrg",
  "key38": "4FSuSE93VhCYHDc2FmEkDz48MWijuLCmeU6ApZyDdrrDN53TmypaekgVKznbdyDbBfDKFPRcM84yvAV6UpDA9Sff",
  "key39": "51JcnAd2oNmjzCR5Wxi2jggwnDSgGi96z444Cw4hfTLW4v1z5LgMGZaLqgFrvxBkutJ59U7TZ5emWm4PumAifwR5",
  "key40": "4PzqogP4qxp6JCaf1MQE7NrWDu8Rchn2JKxNhan9QYHiQb3RWf9m8BKxGZrrF7CJEQGeAhyfXVJhQny9qo3uFG3K",
  "key41": "41WkTE4x5mnREdwmWPhcG1iin4xC9kJVbESX2tf9jUBeYwjUvo8jKA31HSd5KS5ngPam62aGxpL3UhGryyN7h2Ge",
  "key42": "3fgQySHR4HqH2fmsMzAVyZQDvmTF4iU1Gwo5WVKdwLTfHM1uH7CLpBYkq3rYhuutYwtMctbpTzKCeH63mXPzU3Zx",
  "key43": "3h36ckrMhsg3ufwUT28MLFiAb8DMzUHBDgnp68hLQDkReALrWqVz186DMJz1kpHvs8oLvBBQpGz2agPVk6fNsFRb",
  "key44": "tHaJqCqdi8q3uUCpFRGgDbssfjtp7vMFvzNYLiPfyGCy5zyN77MFSVPKZWEw2KnXcDQU2rQpXr7b6MxveeouWWG",
  "key45": "3MxSFAEm24uvV9iV1dVaXRaUnPT3X97QagNY8H8nNpRSm6TEjZRCcqfhtV2ScFQStffPJ1fZUJmoR32N2pwrP2Xh",
  "key46": "NtXzi5JygpgQ5ncf6VkwJNu5M1eSJnfoRYFnLdihzbuh6QtgE9fyB8mpNZWgYSzfNVb3Jpt8zcJ58SwEG7GTQ4C",
  "key47": "2QC2e2YKWcNBkgi6LincTA6iUpaASXSiv6Rtzz1ujfR1wfUupeDRxJsRkwWtpswURkeLL5w3gqYv6wr6Tp3jLVeV"
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
