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
    "4D3FWDzZDvk3S34tDP5VMAqPaAGvmD4JsUE8F23XNcBrMphdAWxQMHaSRubq27X1oeBvuHjFkcaQSe2vBvSE7nmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aovf4cq5PEADFY19jc22pbrSeENi6rPbqkFW8xqV1FkR4DpKuE3UufRasxAYQs9QivFEp3JYP9KZCRTDujtHWEQ",
  "key1": "3cQRUzuPDR3BSMYRKT9miw6nDr3dfq1YdG95ADSnnZ6cMyB1h3W2uddWVXT5UdAJCCSATZ2yQf4bjPCqi8EHm29u",
  "key2": "3BozyL59Ji5Nwp7LrjPRPtTKB1ax5L9vd2tWJthbU3oJvp52sjcu4kV9zyfQLgiXaef7qUzQjf5dYWPqiQ2LCox6",
  "key3": "5irzDCrfJbxbJ9BPQbvdiMjm7E9Dgwb9xsTVJ4m3gZiE6NjjQw7feeRiaJRcot2vhdZcwtjtEG3PCByW8BDKPo3m",
  "key4": "NJwP1DeN9aeERLbNjSDCVY5P5ADJ4nfVEytMtJArt7jvqzN3YYyQi3yN8oYtAKzUQQLP2i3xZsCJLdFGC7Ey69R",
  "key5": "3RrdqZB1nzZJ7UXAQm2HeL53mF4fXUx1ra4sbmrZXBHw5D8rWp33pyLwpE1Tp6qb8JNAcdHSus78dUPxF7WnV7ZW",
  "key6": "3P3YbqeLqJH6be94Fod7xQxTsh6jBJh2oaPmyW6A1iGTMAReVrEd8bjZx6buhXgxdKbrMKvk4PhaXcGFgwCgogLf",
  "key7": "9yXXwT7bgb9F5nwasSPpczXGCmN7E6sS7L6CvxYokhMgD1XjdaMPvT3V8R4J4UUYfQ8i4F3WXvdr2ahQbJ2T2Xc",
  "key8": "4ZmSroNWwSk6vbmWWAsyU99LNRyDrpU6cfA5cKZqVXGvvUFm6c2pveGDQcrXCt69nUpCBqbs4iia5DbgqZg795a7",
  "key9": "3okF41GnbV5QN3AUChwEHvLUxHnf5zzA3xuoe2QM81gW3gDgakrvE3rGFyQJJBGmsj6uHL5oPaBuipEK72txsBr9",
  "key10": "i6znAgEKVdjkpWLQhvsVCcHVwh6L9x4hhLPiy2122Hok4E8kGzZQzanZfdfTNULssZN9KqjUhvQsC514fWfRFk6",
  "key11": "4PP3af3HMUaH3u56C1xNPUsQJHjcuhwjtqinkeTtpGtV5wfYxrkTa4WBU7V98CBEjYfB3iHyMkS2un4jHorRB6eb",
  "key12": "4GhLTSRcRGDeVQ9g9EHrAn8qHLQ7ZsHxECCxCwXyHLwFaTRAkpDXYS6etcNnS9GgYKJTpi4tFCinExNMaiGhq9xn",
  "key13": "3tyDAjVmg73mppzu4ug27tsAPG9UpDLrdrwgZ88kEicNUvZeTipkWvq55jj6dwQVmJmoPpEhRUnHuE5RBNA4Tcv3",
  "key14": "3XDEzX6cqZNXi49CVkPMzbFvRUG7a8C9ibfq1gqmHFzq6G4mcpgx2aNAcjLnfknkksvYMEKGLKZD37AwUmmnYHrM",
  "key15": "AyaCEAci2MouCz5Y1g656iGdUeVKANcxgEJL7xqeizAJfR11G6V7dXRPLZ1kvsrBjMCJNgrhWKGtypJmgzfUzqi",
  "key16": "5LXVyZi3iJp5yfTgLXuUApcE6QfNLGokN394JyJynUdLGMsTCMQrKrjGk6pnFQ3T7kvXpMsJ7SpBCaNzFtiKteiw",
  "key17": "e3D1SccUDEXouJnDbzZ7LPhtJGGhzB13XHxVhrXXvjH6eMhzdNcfvDfx1CvJCRmmYCzCwyUsWTCXdzMik6wy9vF",
  "key18": "58zrhAz62aiCv4PC6WhUk4YsNCfZC3SkJpPcM4wDdmszqhVm23g1qePR4ey9mq289oXvhYZrc36YJ1UUCEzuKjdC",
  "key19": "8AYzZ9YhCf8GdpSpDM8VSjbXir6jUsy76Cd7a8MGUddsvqV9dsSt8ymUgEpLr6ihbGZ9ChvJdzeS79suqrv695w",
  "key20": "3TjFUT1vaFgV4v9A3SySSxRLGYEW2XuNYGFayPK6TZP3hwoLxpFYQ7oBYG5R1cJMzckbL5BEFXAZbkebxXNxsEqd",
  "key21": "5JJ6MJt3Jzyq79Ep7KpmtY6SzW4NFbAaaPVXKiLGN8MbU8rURLTi6r5PPP5BSBjfgstvUUfcuQ1buL6CQYFaV8Wx",
  "key22": "3XTNYnVYb27oBGs493z3ergDZBhWYv3aa6AWUr49o5wq9rkG4PT57gyQn3epknMREEqmH8g8DxJXqF7ZCa8hcC4Q",
  "key23": "2PrwbThBsa77smfuxf9grcJGrG2CHyUVCWiPGzRTTzuKUUJpGaH8hvGBDyzKzaiWSTdv4rxBGfEZFroZvAHGgT1S",
  "key24": "34zoPQ9F2vER7c7MjMffvnCUQ8pQxzeBnmxsZmr7h2W9MwuP3yCxSe3n4x9ZMZpH8yvzi3gNzakcEGzcLvzFNy4m",
  "key25": "5LenfbEyWQnA9sgWftAQ1MBAkCqBWVuzJSd9nZfuNq9BmDkQAXo2x3sWhwAqyyFyCZyAPiSU559PJGydCuWKPcni",
  "key26": "vW3T9PTqYPg83C4sVDPatxQve1gNXYzv25oS6bivrK7G6HrGmVG36VcQtLBEmcS38TRdCn2utSjqv277kmBiPQh",
  "key27": "WFaoszHvkhaM9cVZUPo97FsPYHMzZrnKqvCyPe2kvWEPJ4nanCceujgHAJt2a5J44NKmaQ47FNFW1R4aRYGVD9K",
  "key28": "MvcSmEQ2UFxwr5tQoXPNoA8kBNH6o1R49j4cm8YFHZBaa6GVqavcr2pp2ncEe7EyXyWm6CTSedoHQuEJE7zscdW",
  "key29": "4uYcqCiJzBUjDaLrn5jieprzZtC4gmr9tJej7ExUrUud8S5CnMLoBkzft7a3NEJvsu7JLH1PJ4JajePPWgP2GfT3",
  "key30": "2y9tmxpf2uh71drrcbhneAgQZ2iNeoXWLtSmYgLVAxYKL2tKsrLQcxbaCecLzhemyBQP5r1iKnWMzBVeaYLyNTYK",
  "key31": "2L1aqv1H5D9oo1heGMExZ2Pvv5GRGvFjEuvMnk9kocZoqQo45JNj515PWwit1qWMCdBB2HA5fLidc4naPcB84wyk",
  "key32": "589GH4Jz9KS9Syp92Lk66xQUrxv5AFEzVeuNt69y36tBremF4VDeQorgm9WauVzmW4j7CFMy1EUmv6xhV3Taaczu",
  "key33": "8t2MzfQhySEaifnsczC8aU7GAUEbNGtKvLwj3MuXpGwDRn9miPoi3gxRHSscXhtBS6NnVZorZi9vjnDfX7uRntq",
  "key34": "3mkjdpYqDpjRVU4SvAP5gPdQVqjQPNFGAQx5KpsyCMQJTv8VT5nMogJNqMzhsDBM1EzKEZJRx9NQafejQzaafUKz",
  "key35": "3EDEo7vtUYSTr3AdszYcUpPBK3dcveVJKyuw4kCKmBVHCut2ZVUioXdDdvdf93mEn1P7hksRfz4GtmNZRgVfZZpZ",
  "key36": "DhjT7Aff4p4ddBusYrKGzskv4LtpnDLktvW2k47iiXGPjUEraEVqbLNsgL5TbmpppLFywQhTHNiqkXKVvudHr23",
  "key37": "iEDUgvM9aBCpZPr7GSZTGWVmr9kbW9S39E3Yeva4Gs62harbjwXgCR16kEAJnRrkC7AjFXoRh4hVvoaA92mcJ8Z",
  "key38": "4FsQBiTQg7oJbeFKxzyeqAnZqbbpL6khK4v7qQhF8mc2fT3UMgxFT4zo7hvex1B7JkVxe3f5Fsz873ptQngtKsBA",
  "key39": "G67tvSgbFsfXy33tTn3G1TQdN4Ug1DcQPeTeAVd4yWRNA2v9txb4rVStMAUC9arZfuzgt889TpTqCyxfgeGtPMN",
  "key40": "5BvPWjGrRzcZR65MfsNaCt7pfquKf7Ckbpgr71zfyxoxozho85Wcn93B8QNBSvajMXcbFP71FCA7zEKk7BmAyE6b",
  "key41": "XdtAbamaAoPWBtTq8rcwe1Abc8k6JCs6TSjVAFbpzEJr4DpvGiSkw3xhhxHhAafkXB6uuqp9JeGBLx3TodY1Ha5",
  "key42": "5mVFgZSdTrbhPa4ijP8EqJEVSrBWjojevR3LQqaT4hfcVzBRiqxg2eB82KntLodNKcPYS3sErtErszv9uQimzsqj",
  "key43": "3RADQBhNQJFcKHkCw7KXFPKTtAJ5Jh4DiKgZwpN5WiUNX8nS4oSRMpSUM6ig9DDYC9SMdjf7Mh3SA6RgBgDx6js1",
  "key44": "57WiYb13XtJERXddPYTfbzV43pMwZiuAyFPZTVoaYskTT7CY3RjKh71oLATukEsYzLSHXzAvAGYWf2pAPGSyiaTe",
  "key45": "3tfh5oB3w6ZL7crMwXxGaF5N9TXXMDq6s5GZwaNvJTMccREvjSaUvu8JbHApJSgJJVAvJ1QXrreLtdVxjywzdZeP",
  "key46": "ZEwowbGqngHRPtMDbWnhhWC59Hy6MaXA8UKRN8tuDWnppjUxPMZcHkhAZAwYUj8dYKjpdudVvuGmWh1YhXx6ZzV",
  "key47": "3dBAwgN15pSA4ymcbfd5UydtE6HoifmuGYDYKRQeY1pYXNGM67BMy84z6YUF84ESvakMSntqC17u9sF9rufxDhaP"
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
