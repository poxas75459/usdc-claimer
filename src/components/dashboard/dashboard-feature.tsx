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
    "3bcCu6bHdtQi5nQnxxGxgQ53w6ykaK8DmC1fsTghjyNUacmfvxc6kHRzeSnjF6Rya4TH4Av5ippxAaqRJrUrpawA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sfsYKezzxDQgF2hczb59ZhzQdh4ypS9V6oQoYCwsDqkCtqFLqu4Gr7JaCmiKg2eyPhAKNE6Tp3G7PKGXjEkVde",
  "key1": "ZToD2bm7Dy2mEEcPoGemGmkdzCmFBvKsEtBradox4EEkSSPbhMqPwaQtKzGjAMrfw6mkedv3MH1dfrEc7FdE6jb",
  "key2": "5YK7qY9cnC3E8ew6oWJhuA4ZvfKQZNtBzAWiHvG8CXjrfpF5R3cv7UEwWpTayChSCWhAhsicEyiEdXhLCYpJhRcQ",
  "key3": "5boMsTDrXJZVh55BFjZrUhqv8LjfW74FmeNTfLLaC3mZFVf5mva45VjGyJyGpres3s3D73oKGMzYc9UXee6mKbuc",
  "key4": "22RZjL4bcL8XfwMWLHctH8bdFJQSTEE9YkRVP5rq73YWqcSiH2UZaWRwD42ppLz4uY8XZqep9GQkQnQFL7tPtZ2g",
  "key5": "4z1eLFCVwoJ2eoTmKb7JGWUGN2fdhvRctUDoBzsTBa1rP6buZKy9Yy25kiStzxY9Yh4TEM76L5kDSMX8yPJ17h6E",
  "key6": "4zjnYin2PHEm4NqxZBXcpx8PHVKoN7r265RPPXUwgGEv31hXReF8apPQdsvskpnYvgLa3k91xuVJpJKibvPDBhGh",
  "key7": "bcVGyZrcFwA7TVgrAFtuXoivV6bxZdaqpC6xkwhZNPCzP9zwbNAgxEDk5oWHszmJxqMJZeTC3sZhfnLfDmgyZwb",
  "key8": "5KicBQGe896JXMcAW9iFnb9viQLXt1QZShA9SDTiS3v2RfMR7BmdWartec3edCZuCrfMg3HdGSK6T8cwKoKMRXYJ",
  "key9": "3tJaquZKtu9MBwo4K47jZE6P9wA1XMrT2SvcZCt6RWAxSvwqT9FhaVcHJtHL4QQGdeC372o3gEQ2UXWKn7HEk9cC",
  "key10": "2d3YpGdgCjV4U5wgDH2EHHz1VTCuf5Tx1o5UeiDzSZiKwniP3QZiEfUynJb1Yb49zGnVpDiv4G5UsPdUbSzYeqzo",
  "key11": "3aQMGc6pT1deBgsrpRNXAoWcymTiwpCApwHrcrA8yKCCVN9UQbwNwwuNKMfpP699BCfuP62gKBa3xcNHq1HL8aHT",
  "key12": "vJof3gs9yBTNghTrnqD6ipjxnGoi6FePs4p9pomQUrACoUh2vCJLJX2N43kfDwiidoyzmH7FbNWyqP7rb2Q6aK8",
  "key13": "5XDR1eVc3cRHuXiNwZmoikLfpKy9mYcLdVqWRUL99yWKiBmwfSBRuVPhrnHjdj6q5nkJDsrfTQUUWb5hYs7Ugwzy",
  "key14": "4jFxi6bZW5zNFtVtzo6dEUUMKp6F17Lzb1m1F5cR1H2T4hL3uXcXqsrtQ6EsY6yyQHco3rjb3SmCW9tXHQDXo9kM",
  "key15": "4W8Y6sFdHRLHysz4rbVZSCmB2ViuWwzumZGKid2nFZmSbd6fubfXdZRp7QnYUJBTX4vKu1xEnenoyEJF1hEUWbm4",
  "key16": "5LpxdKwGM9VMrK9K8vZnRm8sdfxTE7myEn7jXqSszPyUP8FQ1MbHFyt5HQs6uwFz7Y9k87btNTF3ju78Fw37Zs6n",
  "key17": "4n5M5TgfyJ45MpjfNufttTA3F3pnmv3Wvo1YVbC5S5TtbGjCBSi1yqWgzn7NbJ1LqiAweMjyD1n3FLZSrLGaaCJt",
  "key18": "5navDYMRwK2wZrV59UXss8obbnEcn41BPaN5vL77w7WEJLm8EoskjaBAMTZqKsYbDAHKQdSGiekbv8gmoquXdcJz",
  "key19": "2D27XAKH2SSCYKHdNKanJMPsdrgqw9HykXxcixQ1wqKGkrfBhxMkmLXnreYRT3UzRGG8Qafz6Kd6EybWy9vFpx8B",
  "key20": "67GkFdAegiiC3JdjZufjFRGKhFWAoqxsqG15f9TsawaMkMVoyhcvLw1FNx7ByaqtEoyVCdCcCJ6y4smahRHrfayh",
  "key21": "2doTodt98Fudy2aATWquwxCUUkbqwKFWYwXJt6RXwywSvnfH3u1mVKXcsjF8hXxYL6ivkLZdVZTRC1L4s2AYe5Ew",
  "key22": "245ncmvfgBLvZrzQ2yqMp46Mm5rt1f2tzUQFP9vP2Gyfw4iLVWAiUUodfn7SYkWUMsXqMPkLB691tYun1Vk13wj6",
  "key23": "wPHCzbr8GVHd1BDGmeZjCsV6vqCzMtSjmkzjGJy6jvSPJwEHKAUnUNZBiogbJ86q7YAg2sBvAKPezdcYjtn1cid",
  "key24": "5qh2dNzWJQZgRrsWSsf3oET5yg7NBiQPCrT7BYA93QsJCUS35CPuSLWRzk2PpdSD2wxu6V3dVKUhCueYeCEyoYqu",
  "key25": "43HS9RU8o6njkTejBRBgq2NgkxKV8JqS6Cibe3ARvYB8w3fnivMQyEUtG7ZKorMv1AgrB8y11kDKSw1KDda4NpkE",
  "key26": "3f61npUMV5hxFZ6g5udnmSkrHynzdd7i5r5wbynZ61n7Yev1gCoHLUMi7CjgA3Ef2752H6bBqBCin3dWkkqUWBMy",
  "key27": "4C1ka9E3ZbXJZeeB9tJuHKy75Yik3C81Xsc98AMV9noUP1xWtPCbLe13qHBGMhAfVNJNrUCZbFpRCTBT2TZGupv4",
  "key28": "5w13GKbc4Bc2NEMye1JFejd4Lm8AV6sKxz8pqFpcPtJvYKePt2VEP3moZ93eEneqBcaAurCJo1XnCJwQDEd4n8KJ",
  "key29": "5HafE9xsuBAPxwthNFS6Ct9vh9bz6pzqY4uvdKHUa4cBD7GTT9zix1z2Fdh1Qxqa3MosrZbQ9KvotoPZ36qhdXcj",
  "key30": "5S1ABUyp6ToYbP9pZkk9SGZsSfpBPZFuyfxby19hhsggSJ1d7HBhPuPzgfoFhcibruVCmofoSAcRjUsGn3yN7wUN"
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
