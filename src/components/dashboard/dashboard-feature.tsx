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
    "42eaNfb9cZ9ZF99cjC6iz2BacXyCSWhA4mBU3VHLKHr2zZynGcJUfatFVCQkpGjpQHkDHrBknDYhuMWUgu32ZKdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXBZNEov2djFn7S876e5WGwcTVP83ztQaHiFbfncfpMnnJ7TvxeKadaiEppgv5YwqyEQwQbmgkTKv3qBizzTasc",
  "key1": "3LD4MaLVtb9FmVtuDzCwSVjAp2BV3qLCFqJiTm4MTkfE2ozNqEZJSFTFqRNCFE8NYT2GkF6GCaLZKwXeJWZHNrej",
  "key2": "5aUWpBWjH6iaz2WKkkKifq3398Bm1e5D4EhWZxE2cfq3BsCkYeA3ebS4QBLznbaQvZcqBg8izbetqMQpxx1JV2La",
  "key3": "2AE1kn3fhaHNMGFHdgPcTbVg4qmjTfPTCdd5C37Sv4wFXce9M1SAfkajL5r2wDqfCW1EWQWE3cbveVgkA2ycPrAX",
  "key4": "4W7NCKRwRpYV7i1azRohgTEWqiaeetT2G51WK7RigLbFTSt5Jhsj19uwzLcMB8rtQaSryG22ybSwRyCAt2Qid2eN",
  "key5": "zyznCgrSivAzsHcdkHu8KGgAtsdsb8acVURiGvW68ihmETcyVKbzJtKkqoqUN7KPKZrrhN7XMYGa1E6KbJnvK7H",
  "key6": "5t845LayZSoDCpiiDwW9BbjGdBWH8skWb5WGVHmuj4YE29UAtgL7HkV8SMTdcVeJFSou3fDKPzsC793MAWXMTc4d",
  "key7": "2ZnvWgmPk61swH6zs3S5qh8GAJ7C5EQoxXLNg4ibFoem1KN2EPhV6EtTQUWpXLNFX3CHLxG9TvH1GwvjGKWDSvHo",
  "key8": "354TSBQfYfo83cc26bKaM4oxsZFu49ZvngdzJKbhTV8UupB8z8GQRA6YxsHVwaj9SQY4TGEbqzqi688n9k93no8H",
  "key9": "5rW1TuNwTUm3oYXC5ranUjeUkXrAYzvtBZEDx1aeDKHTbS9dAao1Y6xQtxZgUJuVHhg7d7u8y3ZmcWx5om7Azgr6",
  "key10": "24fqPwkgQGH2hrm2WJ36UTgZ81ucoBPDpP3LAsfTL98sQg1saSukk3J9Uh5rVGTUPjH6UFhBugwog7Dt3VsjDJHF",
  "key11": "3QEVfQ5NZrCKyydk7tFVXLQMTjdAeZjdYTwN3iGvV5Ebh8QXFEuEzSCiVS9EoovjmnyUHNepXcu6iqax5b3cZ1ib",
  "key12": "5Yn4fnqeVav8pFRnuYM58Nw3QP4fNj9NjWGhsqp6Gp1GZG6NkPHcR7j6g4ZCUJEsQNtfoTmX8pTChHG7ULvfv4Ly",
  "key13": "GQveJ6JAUVhkkMsA6h7byvEostQruc7ZG5q3sRefmPH4ReFn5S5sUjRkUy67DSfYhXTzRF32hXmBjEtUG2zwric",
  "key14": "5NeizFSeptLj9vwgu4dwV2dS2tDQQ7sE8dwqsmPHJYRijyzNZt68RyY8UnMBa6neFsKFaYHhhyCAzGn2HWFvTfk5",
  "key15": "35KFV5ktBMvbSn99hEg55acJ7jMPZKPmCnryK8qFVme92F2BnzAPsN2sHZqffV25gtnNgHrFBv625ifrrD5ELbEG",
  "key16": "4Qi37sv5ueWUACEZk88BcHGVX6Pwa5EqqJiyNbgDinWXdGSjmQJgHUSzGpSywMT4gDMpW2Zs69fUVGWy8CpLuRGa",
  "key17": "4HFenLaGiiEXzVe3wLPL4AwaHSU6ipNd6sEcYBahdsjmD2hwrVsC1eQ66t7zyws5rT3rDUZFGgVhWvdimuVekfi8",
  "key18": "59g8zA55bMTAwSV5erRNkPY5d1bAbvdQHUK3sqhb54qvo6EsFyvKu1qPT6WnHuisY4UZKBC7i1Sh2jcPnkXTPaBk",
  "key19": "BzaHrv2WXsCVmXz6M3kznNL725ZM77AJSucv9h6vnAFzRHrmbVD8my8jh8i3HKMzAq7RjeDp95PcPh9N6o2wBb9",
  "key20": "T7KdkcSHLDACWbUbdevgN5wbcx6ZV6Yc8b6Zgg34i8xFeRvJBcSFu9MdfJZoHgj2Jjjnec5BXZZ6n7EYAiVSnni",
  "key21": "4yHKhRcwFu6ity85moqhGazqKzrCoMWXa7PiftBEx8Mp1f6pT4VJNL6LUdt4QwxtRVibzxyHUnA6x1VPgQPGfMyu",
  "key22": "3SdMwokEqo5WPG9BwvFvLx2P3PbL4xTbQAZNFEQzERCQ5wAAd1rXFrfUmiJMW5SHoFE8BKCakg5gmWT1NZxEjpsg",
  "key23": "5zdiNX1FvR17MNtT6fKdu5AzxiKZV9P778CA8MY98WtJ28oeWTHykx3fakZCud2vF8t9LFVmzBv8HZ8qMgSesxBn",
  "key24": "wt7L7Mhq2y5dFbKmQPp7fnRcQapQAXs7iA785xH87BEhHFJ15vZu14zUZNSWwoCibJZw167u9abfyc5PyXZA28n",
  "key25": "5LBDAixfYYiL9aHL5wkf7FGB7ch1RDFogkgJzLVTyrZqfrTofH8DUAMXf3TPrmLkNHSSPGEqyYdjs7VnouXNyCWW",
  "key26": "28GfiXfgEUQ3uBwNQbin1BVEYBvAzK4XHxNKzon781PzwZRcMg7uFuQZSsU91oFBkM9ZduQkB4t6qwNciFjCRufX",
  "key27": "5UrHumGhTsGypd3YywkpG6u3a1iyap51epR1jZsY3J72mVhRpfFgpm5hh3mUfMzFBprbed5NhQr7WC8D5xoFqs4J",
  "key28": "38CzESbaZYf4GCRf95AD939Mc89PUwYWMDDUEy3FdszX8Pspv7SnJxq5Q8oVqLU4TxfTS6dGwiRYpBJrwhtDbrDk",
  "key29": "3uDN27xrPq6S63Crkrx5yqnPbvYBf37pALbdxai6VmnndbFGbBXS3VSZrv6nmiKFDDwdQsVNtx74iML6erLLParo",
  "key30": "3VaTSiXnB8xkrddbBzj7ha5itWDbbRAMaqxkh2WJHaAZpYsWJoYGv7gv1XtR7E3SdyCnJB7WkATbpU4VRMxocP2Y",
  "key31": "5AoR5HRJJauzfowQfHangmRFY4RGwz5D2xhwmNF16ua3rvWo9fG5eNPQwtvoESigR7i6YwgN6pJg9womakeK3xB3",
  "key32": "4GekFYiDVyxVTtEpwfeZVnhMY529Hwzi9XGvLJGhSADAQjSiT6RqMUAP8Y4wGAnbBNBH62Zup9e3Uo7yx5gQf9MP",
  "key33": "2ryAS1dLRRV7YkkNc1xQSStN3V2kJ93biSR4L5fzXSXdmQB7RuoBDXSEJKNjXcK9PtHR4TBMWJ3Tt5U9NTapkQAh"
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
