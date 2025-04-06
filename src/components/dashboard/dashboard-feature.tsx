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
    "kvo8BLYusPy9o4VHvFAb8yy5yvSqiMDzfeGWnrczHVqgJVa5fmQpKRa6DFUgQoVbiHXpAtficAwi6yvE2PfVcgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25znyV1KdkYMQjt5uz2PJkHUqKDir2diRXDw6CRzmiofpw94hapGHweaeyVyagDwojEq2mkPH4yKrWRBxPx7AEn6",
  "key1": "44uQfxc6ZkeKY5gBW5Zm5E28x7qhU1nZsv5pXdtWKevHkVV6SpynreH4pmWxsQw4r2mjsvXxTVonsHJk1JNF1PgE",
  "key2": "t69qhK9gqXSx4MrV1NkuhkYKCK8Srg3YZ2gckYVwKcgAAChGCiMwTvCrj6JbyEmyYwWUUbgmM1kNfWvYNaSemjh",
  "key3": "2dniYhjR7khkneEoPqTQUv4jjaVMCtg4YKNEY9CMcihjC3iNCBhmuPPLGe8X4oC7Vfi6KynxJv5naxuHHntdsPb8",
  "key4": "5hdvwCnopEAAv8n5d5kwdPG1tv6EgzNncRd3EBVduY3JmqyACFEQztWYWKwCJtvewS92ZtTa5dWHJGeLwDYpPvHR",
  "key5": "ttoubPqNpueyACiQ1WMApNjWjNesjY3ZPy4bMfpmKbMZKESoCeSD562X2JwffW2UKKt7QkCH5VmRHFpt2Q8WChy",
  "key6": "5PrZ8MeiCAFDXfQWJncL1fUmGmviSYT1SVtUVcqEZV9TU9ajEgG36kg461Tzgd4PWdznkZf8zsQ1waFyf9P3eRYi",
  "key7": "34H6CbgB8JTBqPnhdHowaqjpqZfdayGbdcHKG9FSCbYAH52FR9BmgChLhhe2AHKCUzT2WRV2CnzzDyEdUNo3cMyW",
  "key8": "ZbfjjbgyTe2vGsU6BAkPmC4aaf5rhdUvRA7EqCxBsZuev22SGLxSySADZPN3Livj4MutW9fys8LMEsF9Q2Jm5M7",
  "key9": "3x2kKkfCSYeAT5NG7LksUVWEhH6EnBuxarRJPv8d23WYmbLJxZTcWbRyy3564Maid9zHkqMxLvbBZn2KdowzvsL3",
  "key10": "2Fn3TLUvFepQJWM24BD5ncy6Adr8C292jphWpyaZ9dKXGWL9mX7binzEFvrQaRQsCKpyLsz35TvhDH6JuAg7b4pZ",
  "key11": "5SVQAkXLiv4sJiAs4VN3gFUjU7F2kgcve72rBQr6hrhJg5cHx7TnUkKKaqfa6t9pSwXXjeD4LFWWoh9Py91kDRqo",
  "key12": "sbLveLJkzfK52rJE6ABoDyJKFqumQTX6Uv5JiEdEZEJemc6hDfTkyFWA94mq8gupeQDR1ynw2D4D9KTVstqxfjj",
  "key13": "2YawCx9KH2ZypJ6yKmV2mP3kBLhEMuz9wLhQqvGgLHrzcY2nFrNMJATquFmvrrBFjoVYpSsmH31mkADnYp2MUuS9",
  "key14": "41rcoABQhoMnTsjTtbKRNKLKRJqttPcocH15tKimLpS6hgr9vha812VtFXmcuCCRp1rY2GrKGn6tR8YPHmPxk2k1",
  "key15": "gXxFRQNTfqEnAJ6jKzgu4adWEHbFQCqWhNKpLWC7z2TkcumdQMXZSbSfFFELM7KAtVC3pMrMnarUUY32eovvG2M",
  "key16": "38nDy4SXhGafDaBqKR6LgNZfWLXJhMzffjSgLrRwQH5fUqhcbf3LwdoprgFvXhDQv4a7m7NnrjePLEHV4weUU5PA",
  "key17": "5hyrRNdovjUqKC4e8KUE8yRtfZa1mZGG7Lu6yzmutTGWd8ZyHSp4iHEc8xzB4ZnSYvSPaPyn1bZgqiYdw5db3QgK",
  "key18": "hCCsVwBVNiU84QKhkjJrnx2FEpki1Nc9FxheW247b9KKthp3SJyfTcxqQHy5C7EeWwRkg71bmKuTmzJAEsvk6aR",
  "key19": "CCzPAo6zVUgshz3xC4QdHB59PgSmHypK2KWGXQJZVPQ17sPr6GN1tGuWfRzhNLerQgUohnhzDu92fprDTAsA7cT",
  "key20": "3si7FNjhabhuZ4gfK1bZcWiYmeRwuZigvQThxLvGSGMKDJEgR5GBfPbP7HcmTKCWV4Qpj7DmBuuQbRrKkfJpaXut",
  "key21": "5cnBseqdkZToY8bt4SPhMvTXWA6MiqGizBu97yLaQfB59PgkT1QLc3e1NamuoaJq6NQyYK6W2A7QEqsasohh8hpo",
  "key22": "2C8sj8YzLy42srhXkWb8ndh64JLoF2rqP2dk3TqbZu6LSXvXiaPdej2m7cy9WkjaMujvnYiCU4LRVMvVrZj4gLJt",
  "key23": "5KtM2CktfEzjHCBFvwijNqjCmP4WhZv4Nb9355Jruy11xGMkNYS3s5Cf683wdTPRAH22FF8McMC8yGycQ4ebgrdu",
  "key24": "3Jp6L6SxLsUNraNzNgeX42qaAPU4HQyG3Bu835h8K1So71QruvtuSJNCj4jfkKSkuWcAMh6SyNC98wmZZur1ZdTw",
  "key25": "2o1mL8dt9ihheEdGjwhgjGHARn1PBNeD7ArKGqyLSv7Jmr7TpiDPmvLbzXopCWRvJtGH3VNtidn8bkk4R1EqE97k",
  "key26": "4RW91QkQzAypFtdS6umHG1dejofMDKsGamVc739WKQoCz2sDT3qiTBP1dDbqL3YDAs1oqrFz1RkFdG5m2tw8NvgX",
  "key27": "pq9i21DCg12k1b6P5mq92SCp7oqET1ygjpD3wDhMRxu49U3BLAxGzsYGGM5Yxop2jSBZTFeBq4WnZ2B379MbJCX",
  "key28": "2EegXiBGTGMcYXjQDyYNYKgTjjdELskLjQ1MKuq49YV5rKMBUd2qAuPAUvhVas6tFXXjFRB4gmHRb1VBfj54RxW6",
  "key29": "4wDWwtRvnEwK7wYgGiu9ShTh9zyX1RRZnArQXpFoMaVYTJGMJaBaHxip1oK4aTwxhGQ7nQW1WPSRhZ3ptVMaPp9X",
  "key30": "3aBcYBgWxWzu3R4K9uWRQQPd5EptnLavpPg6DN2NPY9CXBmgv43bX6Vvu1YxpSYL9kNwTqfHea6YPJ5raH5LjeKz",
  "key31": "4b1aiwY9zJiWauvAJC6E4xc8ooAhhBLbKkUnm9bgJTvq8MrEQLZkDDKqBqwX8nDUbCCuoNfHWXnhTUwiFDhGNBzh",
  "key32": "3Bv1C8nyEU6NFvFH9KRLZzCLAhqvNASfjvhSndH5yuTQTaVFESFHFe8EQtkocnHQcSjRYSvSqPJm29SQ4b6BoU88",
  "key33": "3W2rKZCBa5DZb72dKG8HEyPZSEFrb6frdmPQcfwpxSqqifTZyojLvsgyxa833bJqnCUmoRuMjgJxCvJZVjGWQvTa",
  "key34": "5nu9RspsoQfsWSATpNr6YHPFYCqLN3jQAa8FWR62kpJR9HMTVoT5KTnCCaXPKt56WiY9KxQfnUc5PNm9Kx6WZcFn",
  "key35": "5WDfhRFaBVC2KcTjDP9sDTEmFStiQkaR7KqnouqhbbN93vRUDs1aCN4s8GH8agthyAGuD4RN2wfWspdG6tRSW5xp",
  "key36": "4tVWhR5TWKihn4Y3QyCgDX5GgtvYuXJY4sfoYDybaUZVMu1T6aQGXBQ98My1fjUi9fJkwF9NbBcfHffTob4PH98t",
  "key37": "5a5tashc4eYw2bq8F2b4XQT9f7ZCRPEecCvYbgnCTS4g2KuaT5HLHWjjipTzJR3fcadytTV5EVE8zLp2Qvkr5Lat",
  "key38": "3XbMQmxpTUacVABxqng9C7qCao82kp1jpmseqWrbrvrY4ZUyZLbALWZ5spweTXqZgVdmEqaFR6bfgso3yeND9Nf1",
  "key39": "3D84uwaPoB47B2VGpW8QeQVf8nrZnZHizFshAAFEkTSC2w69bXGWDQnA71q1kZ6JwbAMEfjNiEgECx8MVEALuuRH",
  "key40": "5DUmdw6p7A4JGEMNwpPDaFbLV6wri2Rq6NtsqnSZc7FJXTtW6fmD7zap1d2JVkf263Yxq2cT11vUzii2FZfe4jaX",
  "key41": "HUQ4rjbGffzt1NuwdpQWPoZYBggYCX1t4t16z6PvHQLBYSEzCBBJkCDie5bESvaJGjk3pvxhtPfxFYRs8uUQPRY",
  "key42": "4MhXsepZMT6BGNjyJWnvhT3agkpmig9xg8ob2NEyWLRZAdotmGu54Yr8Tre7HYV5dgXa81Sq5tKzuML9RcyVhZkZ",
  "key43": "47R69bK37iUFBQvHJ3fCo1Pd9nYwk2TGs8VVC6RuV2Swgvs1bLU9MU2MDVkZ6Ee1fxZivi5WqdqjVRYeEdZgXux7"
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
