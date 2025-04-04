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
    "rAzmaCrxCdCehzaeKBQ5DAZTgDGSxZspoqkKQPrQdjLbwsFr8xp8DPo3L2xcLjhUXeUrKx2FSHc9saiBksDubqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xk9EMYgboYhNiNbk3cjcffXu74RDTd2PNPcdCSFxS1UG34rSRhwvaqdX4b6VVnWdUSiSbi1LZCdo2m6wBbLPoiS",
  "key1": "28PqNQParqmSsLUw2RSv4YzFCG8sKHN6bs7vvkGnHRRZy3N6xjPGy3YUzCxRQGszHud23x82AVKW2A9JCTTE16Ze",
  "key2": "5BHWzmskGiYGQzw3YqwYSX6jhiMmBQLfnnhLViX3jRjoPYeWEEVymxLozGyubtf1dzWAzxfc3CGJvVLJpyezm9B2",
  "key3": "5ryZ46bjAw5AfGc57C1oAWLekwWgAY6qEa2GTzhyTo9TQxmhocEdZhPbit2eFrpVXLvUu1bNJWuPGYrsdiuCDjqh",
  "key4": "2Z2tYnzRc5AeTXhQEKX3gEB74Su8DiU9K3xGYxN3i3TusCRuZEJJ45kWhfowLMPzRwwXuDo6Le1fnx5zR6aaPy6P",
  "key5": "3DJWkWcbo1CQiQrbRExXVsKe83gaooG9rkx3eXYzYDVhEZrkzAVdoZss7czVicDci1fjnBKfeS6NxZusLq4qEPpD",
  "key6": "41uSgwRFckNYBrC9dsxenxTAok32sk6j75vPD6p269u5wLhM8rj6ZmTZKAyYXqqz6UCu6bBTEiVkXd1hnuiWuNKd",
  "key7": "26RYCmyYHAXXnMq9rqSGNC4oBotZ8SrAKzr3rKnM4g6uX5EXCs2LeasnZV2p4C7jz6WbLCeepAR7NvM52xpb1CZ7",
  "key8": "4PkBQMUqQ3giBuavxNHXPqqFEuu8pBCU7s81qQ4deUj99NAezJ6esQeDnon6aYegEPpivxGYu7b3b2ZjUmWx6UcV",
  "key9": "2j51SmmNL6vn1hzmN4hyrrw1ShSsxJYE24cXAf2bmkYJTt67qjweeAuz8aUTkFMxsBuqJS3gN5saAkWakWavwd6K",
  "key10": "cvqowfdKTDrbu5KTSxVt4eor7pgx3vGuH93DpT3FGwRK8D4rsd5r8yowEgTx4HNWAH52kowQdJsDAv5N3Gy6bd5",
  "key11": "44JVxK2LrBbY5GK3qbmz1dGbxHf7JcFPMZLmPmHAaKBbBru54yem18vzRwBZx4s1fYKy7LwP83MyjVtTFxE6Rdsm",
  "key12": "5LSnrYuKhLVjrv617XFsgCfUzuJvBxVQGe14Q9dX4DJik3bWk847rkRAGt7HGiUXyVLFocrioPPBEsHUUJbeWzSN",
  "key13": "2kkYGSoYVCyXsNXY33fD11J9grWFv7RNudam8rXRo3jciNBjxdffMas8wWnuvNHsdcvqQ1oBxMv9kDDAeHwq5WRv",
  "key14": "3BX3L7brYGeo4ogcVGsoPJmKmSm5Rav1z6TEoDP3C8CJuczPNZk95CpvQTuyT4hhUE41H3Upoe6Wccg8x4Ljwiy4",
  "key15": "WpbEXwfsSzd64remQtAJsKCqqyN8XYRhmYYZfW51Sdpo39MhM5eiYcXkpST3EeXpgmevLseSNgc1B2thQDPrEri",
  "key16": "2Ma5dngZD6GNet4DuCK7fT7LoV9agCe9Wco8EKH55GWvqhnq95zSKvKcFTsNDEZGVgQVyXs653FBRW3QKdUqcRbQ",
  "key17": "mAuWxioGLcG2b66jGVoDGNpWY4CjHJuo1oAbcr5yxZLK6F4JGvr73XTwWrDX33BVoiSZKVUbPp2GHx9hvhYHVD3",
  "key18": "WhuEWfbeggDsLoV6axSkEXBHaRDAJbBibW2HLH1Zt7HKzafJHFeQgqF2sX9fq3PeWpeVVRe3VhCEdAWFSeGP5oq",
  "key19": "4PtWUHxD3XqNmaq1SogDkapPWJ2UyTHYTVAeuin9MYEwChX3hr5nuga6VP7YJ3dAJnd72ivToGtYLE8AdGsbHh4H",
  "key20": "277T99vDL9V1dW8HGFK9oH6A1UcAJyMQryqjeifBXQhSrGhV5tACjhFekyxAyjTJedzzik83aRG1UQZXDsm69Mjp",
  "key21": "3X3tmhYxbP132uFg96PK1kaPf2sjKhR8caQ9Q1Zb633b3b4NAotiXVsj4YYbmrpHeuRiX9knEDi5Mjp5dhCD6Yz5",
  "key22": "5GGLoYAS3mj5hwBP3etZwwWdJjY8dRZvtTcALb8iPebW8nnB9g4SfBP5kcc9SULfHyURUHQS7sAisHgcJb3rsGCJ",
  "key23": "sbSezMUoSaLFn7uUHbvPEyJzqu8MEXmKSFavD2EJqRetVYk54srZk8rGM88sJbnTZ7qPjir1iv22HR7oHLyEFKK",
  "key24": "2VFPfowKxn6RCLCRBmYpc9gvT14Y5AUWpgF9dTAe4ULxq9PfxSmKqwWCmDJyJUjchoyGi6XX6kuiLZDQWWASjU18",
  "key25": "Bk1b6ggWhZF4zBNReLoCY64gCgzr6VEpUpzMXNMZHcA4o5x5BfTe2AApeWv2K2egxGKyfAcEFwCjLrWUWhTs37h",
  "key26": "NrVwLncFQaTJ9fjF6tA28JRmRGkZhBp1yVAwkHsPyDcykzigThczi92PMdr4ofE3QFDGfEd6oQC8AZ7rQ4T3CkG",
  "key27": "2LyK8VJpTEw6wmAkGjJkwkNtvtaYSkgr9rrPdY5PCCtGohAUhFF6poF5puB6GHL4n2G1ca4Qt9e7QFZSfKSir9Kj",
  "key28": "4n3rcKJ5TaWCiPkhwwKDr4dD136JPtnuPNfo3VK9fJipPdp7nQ12dAC2QFzMnpsi37nfXrY1CJ8G3omYuBLpbhoy",
  "key29": "2VpiQXhiykF3822kceZKE6KRn9e9WaFdo4qGNofCShCBuv7dBcw9Mkyz3JHe4Fy8Mr6Ue42YoWqznsFTG9omAACQ",
  "key30": "62Rc31x4M2siqAEVZFB4xJee4Q8ojeKPsRyp5jbwQUopanhruwR6v9uWS7zkje9uWzeq7mXRRow36p3qa2iq1WD7",
  "key31": "cY2PGx4pyKi6wKrhLrew7K2fw4PB9fdAR5b2pDbTnvoCubSehm42sV1X2SePDWzYtr2cPPVCAhv8HFffuRJFEZc",
  "key32": "5xKBLwHJ878Bd2CSV6mvQYrQZNRrhYC1aPvvd8KYn3zhvaBgofifkrz4XyAgckpifbuQfPViT4b6xkfRNDLf1x1a",
  "key33": "3Npb2Ce4s3AMxTTcFaJapMjyyhCDH3qf9N57eW4FfMFfTrK6egCT8CfYnH5NAfq6bTdAtKKy5neF3DYhkpDHpFm5",
  "key34": "3RQ2asNbUdvaKNcVsTNgQZSW19EUm2G7oCNqH9vh5adiv9S99G2d9wsbJ7SvNFyRSiVw2UEyQc2ZUZ89MDiFeXuo",
  "key35": "46hFTn3p6VdjoYfrNDGBYrEmizVQ5JRiSNDBHdz8M6HjhVorvx3KPsysGSmc1gQtX9ZVhpgy5onZMiFvbPgUzXuy",
  "key36": "2SE6oR1zj6U7HsJnytmfAphMG9JgSqqoeAb4EFfqD26ec7ssc2Uimt161tVD2CtqwFyxntTuBwJgSLqGYcwmwaoS",
  "key37": "rAGM5mAXcFVRMwM7MJhmzS5BDdz8w7ueXf8PRMPfgiPe1TfEYWb6WnB5WkDxiS32d5peQgXgHgf5uwVcVhN4XuJ",
  "key38": "2dpvSFpHoJ6bmsJFvW12XrYosaduvavTrrg2UXJXkcTMVMkJjL5PPkC4s36TYTba6YJxZUowabn9hUZGQqpYaiAJ",
  "key39": "2Z82otmHN89eZBQ3nRmVZgs2HHQFaARAXZ8F5wCWWbPF5xHUEegt4rEAtLQ5m1K8Mk2ZeWguMUYGVvLsMMNwuJBS",
  "key40": "246Q2KkGk9RUVhEwVWw7BLiXAWCjUif7pLtAmHryg64PrdbVq55vMvNpdTh72skh91fpwSd28PJ4hQYw1vfhpr89",
  "key41": "4p64dakYnFqWyF27KsYCysPUnaoR1bK8mEAe86VzysiVdgnvEobHqVwWhaEFJY3Cs3Xm9y9CGDTVmRHz4bAgVqqq",
  "key42": "3VtoESdBsuTzQ2CNJT1DQkxnkoipmR891UQYbHPmDda9cUXeroErqWR3kBUxMsKF8Lnh7wrcsYjjq8Q6RezGtoM3",
  "key43": "21THrhdGtCA3qXtVgEZbwUNG43jPHguTkpXUWDhs6tPbxNQn3UZURCdNVh7GPNk7uqkbc7DmGDgxY5kSKGE9ptWW",
  "key44": "D5sEFvKSUVNLFCHrMQ2SSHbdK6D8ER27DeG3WwDHi1mCXZa3EyDs32ebEXCu64o95unqerGMEKVZJUkP29CtHAc",
  "key45": "62jg7DBUDpFEDFKDivCr7eoQ58jE4sNYN3BdAv6aAN569P8TrJBNhuvf6R59GgojstysYfNiuFHDgzQgEx3rmpji",
  "key46": "5LB76XhK2t7L1kHvM97PSuUYCPzuEprWuoYjmZFW4PyYmNEM69zsbbjvxzM5o4YXML7TSs3QdX6ZvnCEQ4iLmHN2"
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
