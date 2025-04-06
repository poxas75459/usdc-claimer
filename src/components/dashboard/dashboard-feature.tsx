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
    "5Hr6qYMho88JZm3yhBGPvn8gPjX8DotFZiX5GZVbdVysRzH1amo7SkF95j9eC2m5MUGTvW5A564P64Hu3XswMjmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVrBot7M7WpizAGv1T22LusQczJZ1MokGHhftqTdR6pwaZ9A1SukYrPejLViAoCDZxo2tMufTteCB7tfdk3TQbc",
  "key1": "zHuUw2wA4Vm3qBHVc97BzPRoq6Z1j6Fzxh1DBL6BaApfuNoGEquvU6oPaZtx4sCVJDR3uwRKy1ucwjHVsX5coGK",
  "key2": "5HENDDWPfAwzoy28nHaqJMZFdz9pNSDKRSmgc52Cz5g6w13CXTEnD7fNFaxmfydiBfs6upksH9zaAKHsdVqwCcGW",
  "key3": "2bBqSirC2GYESZDCqK5RgR3PrRMky2nSLL4ZU4ixEFq8u2S4t44TcdKrE7GRJjfjfecSbe2dW41YcnS4RXmT31bu",
  "key4": "5GwXip5uEHjH6cRrtcETfLeuRwPDejLKfqHvmr4U7Pt8jwpwoR3FqAs9RqNEwNQEPrqRBPvvwwrS8tYifJubKk5o",
  "key5": "2QgKQfVjCPuGTEj1mWZcvuC4z46KmcUBxtsjAnDnPSRADQek5mS9cL9zy9GrJhPh9J67SJQJ9SwDi8HecmbkZyqe",
  "key6": "2T4wdxdKb9erztREs54jQUJt1pqRBMeWmrk2JFyC8WB7txZD5dyisPVhtaQyWGWMGNkK98HMzsw4Rea2UHtAMqtj",
  "key7": "5QzgvUHb6zfqWHg3vop43n5V1D7vqBCPqB2nP8Vk5xLnw6VTg4ibgU3pSYEKFADYiMbGAH8Zpudvzay7GeBa2kg1",
  "key8": "1213RUkq2q9tNkpqs4RSwxqEjo61VhC78cBDvDHwG8Lu3ffSRcwGrMtRVneP3wfvwriQMf1nC9u7ZwhMPHpiETxu",
  "key9": "WYWRqMvBFjtYFkYniMyyWdyizvBLax481WeLf4Q5MsgzPmXRZWYtW6YHTj9F4poyxqBYSSipPzAgkMYbxXrmmx2",
  "key10": "49Muabn9hbcgs3GsFwMnyChRNxrooULnDRdbCDoDNT4k4hNUmfXeE4mmpESBysyXY98iBaMYn3Rh936geJ3XqMGp",
  "key11": "kyzbdxJ8vktpcX3fY5cr5hadG2j3HpMYQuDv7N5N3ccRg87rdsFLU9WrbVugntcNfCnS5YbnH4VSKZXUBBnqn2N",
  "key12": "H1ogAivGw29PA6e4U2wtp53aBCi9rXgTE2iKdLUsSBtrKWVNZeMvY5iha34d1Z1TmqgqvB664HEYzG8UC7TMhAk",
  "key13": "5t9AUAMTaTGY9cPBzHXuvsXiQUXMz1bF6o4Bpbh7mdUQh6ekmh3QYtNCJaDMG56aqPQ1KCWHKJX8LTuGFsFWZsK4",
  "key14": "3wh1fs5NqxbjebP36kFu2U6vXP8jHHodK3sMtUpZPsBgDCo2C5PTxM1gNeC4iaCWhESzNjBCK2iUcvcjGrjFGipQ",
  "key15": "2ANcJFeBDkz9oMhSoXoUgqPKSPjx4z6SJfFC6Y3bbwgM6RrsjqcbZtHx4vahxar5v9oquRZ9cV1XfuxDoFs4TNeL",
  "key16": "61aGQSgfpQFeJ1GUrTt1ZUFaBpoQsRCUUH4b7nFc46DThfykjtrkWWvPjS2g3kbnwLG8KBH39UG5G2DGf7KDr9ut",
  "key17": "gQBGGCDE1Yw3vtH5Dd8N9uVTWc6z9o2YWdBqfmQFQKeYLTHsc3mvvKDXGJxXhRuAumeXpMB2dgyBNJccT8AdtCV",
  "key18": "4Y1aoGW9MPN8q2F5MqqNKYQPdr2zUsMaXrEud4hKu8uwGtjZZ22QMb11LqSDdGoiFtkcQ8g1oKtGpy4Z9XmLpdGE",
  "key19": "mKW4TEkcHqRELJ3uZn9Cte7h1fRkfnCA42bGeXA7gHLBTUCsuy58rTqYWb3iMRdLjKQ829hqKbGzpsHzR5qBJAv",
  "key20": "4hvdfi4WgtTZUJu2ioamFb4DyfirBMf2gV6dPSqWP2F2nLSHtzuVyqcQyfmkQ4B4yaxEYxm3SX6FEVkGgoeEpLw5",
  "key21": "3ii1Dar5MaBYLWHTJWATz6bLVPN4D9SCTnyqN9QnKU8yDPGrFuiEKxAtpxJ1bi1zX7KT1un2Jzx6J7WF7ndPCbaJ",
  "key22": "5j7Cms1pHPdexs3hW1pg9qBcMGPa7zqBGSF84QNWfkovTS2C1zEbJ51sXpUE3Tyzb6iGEQQmLfcKYyY8B5qSju4k",
  "key23": "5AEoNFpa9FcizU8HMUrCigR6xoJPyS7QW55wa6dNFhoN62hxbuar5asrJrmHXLEyKQFBRZn3UdfEVATvh6T8nG3p",
  "key24": "3HEoKx2nzJYDScURBa5kr3oKnqzvwHnaNndcD25g6dDMGxT2rPmsDYhqPjjEyhPLy5PLb1gcijQx8bUGSLscYT1v",
  "key25": "52gErzUwDWeDsoVbgyKgcfqTZYprcHHCw9j3epAYb3hxoGhXTR5EsSNXsgRWa4D36jSWTAwCj2mADJwvbLsLA45e",
  "key26": "26HnDbHtoXNv2N2X9TBKNxkGzHEerVEVeTJM4kQVWtAiDooE6B5q1NvU9XpHvu54kW2fbC9u56WCyTQ5ujiYkDSx",
  "key27": "2WFGVAhEoL6rcEtKg1ZYo3uTLBswtYg38s2Wn9nHCW6Eky2WVvJxarxYNXmar66QdBnKzUrJqfbt8PFFWPF7fuay",
  "key28": "56EWbbokvrK6duFaQqZVYnHStTfVMmLWsDLZcShmeNTfB4ebogAod8RMVhTp9669vqiJu6RW9ae2FWSU2ArnggyV",
  "key29": "4wv93yJc6hdzp5aUkuZoZupde5N9VrQDerWsMac4AoFoo2w88J5ftaBHQsT6v4GXyAKap7MJcsEq9RQoeKjGzAVU",
  "key30": "3FirVZTasRpZUtPEihCeJA1ViYRZzKmTXuuHPrRfU8pQ95v72La63HkQudoXzpNzn5oeYKjvUbdj5sUygKWKhPho",
  "key31": "3XipZJE6A7KFjbV1WhyQLT6ZMsjYQeWUVWKHsP9MYNxQMZpXAoDNczMceQpdX2EbveVuiauv8CbjyE5U9p7NQXxH",
  "key32": "qPDdZpoHcHtrKE5TGem6yTNH6XGeVkJq9P8eMtXdA7qUXjGvjhYTvfR1meqm8vH4ysMXtYCZ77nkHeR216eQPdk",
  "key33": "3HogJWZic2SJt1naSgkx7qjqUcvBmLBRzXa43XCvSuEEjz6hcCArmugXDLtsJZzpchoqo5vMPbHfm3DXZcWjC7g6",
  "key34": "3kz87wyg4ARK8uEfRmeeeuE23n4PkcGGeUcjZCfstBuUQFHbsNzhjkC9J7t3YZqTwBy28zzvFck2VswLs61bDLVq",
  "key35": "3Z69orHPRsBKX8U8pxUrd6zZNs5HFJcndauhgDHXTyr6wuFBWvmiPwSRi2gZTSCWGb7TA8RtunQvrKksNqTH4fuE",
  "key36": "2YR9VZu79yF8kw5TabGDsSjxwH1mUD1ds91QqprmLGhD57HkyHnzDzwdLUkusGTbtdkD2Bd8gcfftE3c3qc2TM5A",
  "key37": "5yzPtaFAam8QnfXWD3c4Qv3ZFysn4NTXFsdhamNwSdtWLHu31VVcK9ogNBMJtGwk83HdrktAt6Hz3AXAJYx4Z8gt",
  "key38": "vDhzKpr2EjuC2jdGoTDtFYZ22LoMZJgBvGRtmidKirLw9igptQwE2APgQ1G27aTLZVi8eRZqKNNyiCuY6L3B6Nz",
  "key39": "4XDUUnKaqwWZ3pBMVUsy7VWPZ6tWonpMrVdhFK3xAdJ4no2ZbDXH7t3T2ZZy1FBfKZwSjRug9afWyExTGp1VBRpZ",
  "key40": "47R3e9hjn9RsDqKsTqfu6vRR6XSqG8g7fss5Y3RYBuMD2FYwMS9vLqTpmRGu1jr6dx2Z8EQdKYceh8xwSh3yLiVu",
  "key41": "62cahbNooDcbdvETg5NTiZ8kZRk9APa82VsMUqB8xkJRUQTLqje3izNXztNDQ1ZvmviRDdKhfAsqju2YKq2J5mxN",
  "key42": "4RSgJ9mbDS9Vba46VZ19kqZmAK3BYK2rAfqscHt7GpdUazqLNhFhw8e4WugtSAjCWSSroJpo5rCabY2H3LM7wAMz",
  "key43": "RRXbfSUYAYYQHDkfroCLbqfBeJo4Dpn7ejfFDFQKLpC5tT5g9bYrgMYxn1JPoCDcLqnXihztWq86X8SMKUXfyhd",
  "key44": "2ZHRBqg7kjfJVp7HKWLwZs3tDi5tq8pK1prHDYeRzuedG3H8ZSDoqkpQQ5oJa9d8iZarCmznQgvu65gWftvyoZgz",
  "key45": "3bzsw4zKjXnZ9SBx7gXZt9hBWVYek3o5FCuT8yXFiDkuKAuTaGWA27EiKB8cPzVbL9jaM1PH147y8HkySLSesqth",
  "key46": "2LtoLPDioY2PQRVPNmUjgdfniQ8B495LtBqpvkDMkUzhNKeKRf5DC6z2aZKMYZdbwq9bVarjdpEeL37hsJeBZrop"
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
