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
    "3UGeQDgLM2MfM29NaMu2tgJ3V4bdHiGbQP5oxmKd6XhG44brexwgHmAe1eQzTc9BRsT7tjb2iPLepHNa9vHonuUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBczcw9CLNNjs5DcGr5EvU7B156hjsYNfSdzifYLcigfFLjfbbbFNsrkZTNLned9aDHQ1dekzGa5oCKcZLCxtHS",
  "key1": "7VohNUCDU6jFgbJ4WSBVxGFaxpioGeqh98dnnoMcMyPZey72PUFFiMo1wd54y1saJy9Dk9Vj6eLvLQrkPGD8csz",
  "key2": "5o89L6s8mgvZJxnxs9R4TDWySkKVnj2hCx7r3W1KLDQ7Q72HLLJwCgWhSkEVcUL16N4HqELahyMZDNL7tmbDjB72",
  "key3": "2zG3gC2Uhcnpr4dcGcRqbPzRrCdHyCnnhXEsVSEPHGXSGafjmxR8xpPPvnabCRWwLCNxHfDxnfAiPn7ZgkJmMzLv",
  "key4": "3nbvWLPmEspM4HuCU3QLPByTsn6HHX63ARNePgsaxGaaxuMeKKztqkprjfX3vEytL71ZBKX8pQiCp9u64bb9pdMm",
  "key5": "dFic8DHoqBD9wZNT67e9zsP4CK3dPsMmmDfjjXE3daXmCm4yYeLPGmpWUcaYbr43u7fzKZUXWnohH9Xip3psQbk",
  "key6": "zRQuJc6k612HqrSp73PhLcPzR9apYg3zvs8JaXyQxTVrRHEic4tRc5WvVkdCrAAEMJUsHjvCQ6WpUYwv5wAd1F7",
  "key7": "4eQxSDUjedn2qDWdm7QjzQMAmJgyoHRok8vg85CQbGtZbdBSqnfi89FQuk66Tiy9o76eUHGCha3aVm9MKg27xvkz",
  "key8": "2ovfFxStqWyrBKLxsFiLPzTECa2U48ewFQk2BvK5goofwY2XHif1EHo9DzMtErzmdKbbC9yMGi99mpJFnf4y4Jed",
  "key9": "3ZG43h7jGsn3gS232p7NzkRE1ncbpizM6VcQAu4zKpTStk9ofgGHZjCjbayha4ssJJh6LPF6XaXKJ2G1v4yCAuoq",
  "key10": "44En6GYYyE6R9oGiqxZSY9Lax2RjgK3Sibx9hhU63EMWq9cYE8f67VMRhtCzy5Z96CQ3Z8pp345bSEWZ65TFRcM1",
  "key11": "61oEsPP4NJKNPsMyDtXggRfz9jSLTEa7xxMgV2YyMMTugrw2mma4wQWGsTtsn2msUTnGKiZ5xYpJvh3b76jEdMoS",
  "key12": "3iF5KhWQh5bYYFkBDTqh18MMZW5pxQSJGsJNNYVuThwPinBc2aqBqsXCTPx62Qj15tjxLFKdjw4C3GrCaBYjtWAE",
  "key13": "2wMBbgDFYu83PoJAPaX2FuaUredqtfjfcWiJadJTiYZsHPkxFMMHSk7nFH54vdhutNAG9WRDkoY6xe1GJbZZTq5p",
  "key14": "3VD8MD5t2n9g1rkKpztM3uZ6W4JN8t1TcEXXpMAAtfQiMaCCpp8tioZZPU6u14XkCSftK66VSLnbqWEiGmJfH4JB",
  "key15": "41asxvgA5Tsn7qDCiibrjm68zGuLozggzv68nea2srtVv1NMYz4wYjp9s7F5tHrauR7cMo7cLYQuWegFLWgKfYCq",
  "key16": "2NwBZUBPJEd6Ttut26UBP9RGSmmQw5JKSGeuFzKYoVMe38bvFds2KJDpcxcPdSNdfLPfDBBGNha7f8ieHQ2PTyWX",
  "key17": "36NmKujrL9yEwXsq8jGSnCiYb7fYnJbMkhXAG5fLFj7VyZGTKbFQn33rG89Lj1f7pg8DciUNPjhVxHSHGJvJFoGi",
  "key18": "QV8uLK5ZY7xxinPkR8JbQt44EV6gmcanqVYZyGfFFUQrtayeUvmA4Hkcw2zaY7orTi3CJMwqp8due98fBLQn7wp",
  "key19": "3zv1x83kuSviHw2QhLUyMopRwxCc2U5oBwsJtTAXn3j4UjMxaKinyLLioe5WfTd6KEym6wn6fRFN1UEFWX1Aywti",
  "key20": "YEDDur5Y8t3Uvatj1PKpzopzwMNsqZPsGV4WYbQr7rfRyrxEVA7bRaTA6qDC8Nvadz3D4JqYBwy6KncfCPg6jER",
  "key21": "2yeTjDhNxGqepQ7zeroH8zCkmARPLFuDnzv2oTkt5ZQ6ZzhuPAqzuHyEdSm22GwYSCY85NVvMhhoQuF4JqeRhq4m",
  "key22": "ytz3iSpug6R4qbfR95UiLQHn6cM6jzrJAJh6gKEY4a7cyVSpFsZNr6SvFceJ9Cjij7JEcKHYqCtzRFcXzXT31qV",
  "key23": "4yKNgWDMX2kpJvjmBZh9GSH9Bj8vsbvNJs3rPJDA7pQGgnpUpG3aVnRp7z154RPR2nTX3kgij4P7ArKT4qmr7fLg",
  "key24": "27TnEt5md1KrySeRy3uwaU7pK9rCXm4HEmRxFUop7AiiBtpnwh99PqmpEo6yN2YzMFDd1HAx5Z4D3KSbBcaZJk5d",
  "key25": "2TjRfssdzn6Cyn1KjXGwdCdSDtdFAAAe5ySUBqpFykznfEJXGEmwF43cyVAkYZY986jfN2ZkA9JB64SBKpfbrpt1",
  "key26": "5J2Z7cViF35pWfqrdCMcpYpU8G5hKfUfMVNRjRLNSMHR8QqKmijigSHWBgxLHTgJXcx5cjChf8FmEK4oqwNrZrnu",
  "key27": "5nRgUspZDFyznPxhdp8EiJzDqQ15RBshht2UT2kbreJHt75iBAv7TfFVMWTcWFLu6xH5Nc3jZbSaAraGdt9YsqsK",
  "key28": "58qKDPf9At41PScbb7kHzAE6cnkeeGQC76QKr7mGDrzCUJPHzrE6VgzCoE7LK1cskWzGn24ZDUaXdDRm2LrAAaws",
  "key29": "3i57qAHrAC7JgHkrnC9sFzdAbEpKzcVprArBK5YATYAYGKfCY8yp8LsYJbFt4SRygK1sTevrrNxyZcGnPVGmQCyb",
  "key30": "4UwXwvb57xZzyHA4PeY4PKzN8wAysDknK6ZDU5685f6LgisocBCYZmQgPpirnRaegUmcXDwSKarPVaUhP6NDixVy",
  "key31": "5gJqSz2veR5bptnykR8vmnZQWepMC6QHYYFH3tRKqP19M7Tmhk9Sred9a9pbV7JkmFuE9QBZy2XMgqt6VnpDMGRb",
  "key32": "wLUY89HspkvkUWcxN5x5m2Zi2wPrufWXW54cvJrGxauT5TtLVqoVMCjR7xYAFWPUkCHU59qjUqLiZQmr41pFyZj",
  "key33": "3wPaYMLUpvezgvd3MejFY3vMACDfG4nUZ2tP7Gc9F3o1i1c2dy4gdTMNY4p4RRZkTQazj67ZXC13UbzsqmxhYUAT",
  "key34": "5yd4ru4RfYM2aJrDS81fcLX6YNJLedP7iWyRyabRsoMW8SPX6Ht1pQdQVHwvA6M5oV9r6RBc4sZrDQAdgSirr1Xk",
  "key35": "JZrZWyZYMxhKWNMbFFhGfJ7JbHP6NdkdQeMwjgSNAP5W1pb8e7xWgjZ3rm3HBFYtdUAg2TeDNipM4AbTMjcG9i4",
  "key36": "35K6Zqismq7FZopbMUiEMTFTZ5YRnGeAnSWAWziTSWA5MvpFi1DqFVhPjUjTAapWi1qELgdZwdUaV6JFZ8KhwdrE",
  "key37": "2jkuwjSY9CDRFdqQVPindAP1KYB356nwZhQcgcquhNMApjU5NuEEkGry9CS8yGmDxMUPw94u7rY7KmyuDo3S5E2",
  "key38": "2fdrG1rEsJmZCChTEZwhXj9zMK7KvBdFBiA3CdNbUetofN1edaXae2gjm9Tb7E57P6pPJvRkWdeRohcUQCZRgk36",
  "key39": "4fEjLHe6dkhHyWL5Wf2H8wriJmCE7DNRCHiWe41CBKVBnVg8ir7b8NzDQeCWcw957YzqzvbnDCBBV2eSNXa6Gi4N",
  "key40": "49v8dkmRnhPdwszSmpHjqnN8xGAqWKFFDmBHBP9o2mdSsUXWFatiQd2duG2K4GhoPruriT9xK9tu8MtFVomVXaxp",
  "key41": "3M3RdqkZUqrMmrL4MmZMd9BNaC6mN1qQGtNnc6j83zUgpzwAiLCjNwPPQaVihrk2FMYpg6KpueA3ELriWNLrFC5a",
  "key42": "25pYAW3w3NacRcGArCA6XWf4NoxJnedfrJGr6deMgizdYoDhP8chF38KyJfkhS2SPst6HsBMKJaVC6PynqHEdJNZ",
  "key43": "2VUBoN8hAPcd7g6m1dJcE6fP75UuyYJed8yEx53224b8nvuqE7qzWSUBLC3W2VrZgxKGPJgog8pbmtgySXzdYhwa",
  "key44": "34dDTh9spjoXD9BPJgjGux6gUj7qAY79S5TcGpfzfEyeBqLfUPrUjDmkLLZTy4yRnmq68WEs8CrRNANXeQPAD6jx",
  "key45": "4HGd4ntFTDuEjznbxbvtZsxoRgSm2JssM7dXkLb5854HYzyCj5TiXgPkbqYoUY7QVf5yKMbz7n7pE8YKjtbuLhuK",
  "key46": "3dMvg2RYavChJeKy3PRgcCxFsYDdZ7qq6shDmwf6R2SbhAJQMQSQ65wiFrVH2orffDHbp7ZkKwgfAtF6ZRUkiGXk",
  "key47": "4eypJCTt2Ds7qkXwyy9VDwoERFe7KJYXi58gBhE4i45PRysDnJsaf2AJZxeDhuYyZVTHQFtSYhdirbELTs2CxvTy"
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
