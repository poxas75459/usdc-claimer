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
    "4kUybWrLZwQHErEPSaqeBGJJLi5YDCePmjsVPT6aXzDBnA8PR4cs496yYKLYVQADTeoN2F7Zjg1BVpS7fpgqa1So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGCHjvGWgs4o63MEe2donvoRVBqcjKKKGRxu3YY2RLSZMeRJBZKPZ77cUdfbJRG18dKDZvrvgTsnc5Y7Qmd3hik",
  "key1": "5kYPu9qEbV27pok7S3monS7jynk6vb1gTUvrNuwGJSvJYXm5Hh6xgJtTQhaoYJAomJdroBTYeJEkZsYxVh5Gnh6P",
  "key2": "obs9JoKKkQGFpXRP9nGBAc9BfCRtQ7XtN5pL8jZAj2uZsS9aA96xR9ADZurRyyHWb3yDAmyMbXttzppXEHA3mQT",
  "key3": "4Vd1oxgAz8itc2ZAYNL8WUViBKt2Pq14Hw3HF1d8JXf7sz6zkK6EqnEy7PhAkv4RZLtZ4AgKYtHfgRvTcF43xAq9",
  "key4": "5fqkfZsJSVy4Scau7xD4D79fQDDcWmDM3m16uvhrRAMMywR9w8k8pLFUVhMkSbbniwqcuZT5LBFzcugzvRyVxMeg",
  "key5": "vdJ6gJmFYQfkXWTMgaf8pHUgAphgiGN1GmSyqvMLxjmvterNQwgAo5VAxPCeaRnk86twnTu1yB5SEMwK6Zzcv6T",
  "key6": "3GM446kB9GWqmDyNSyxZwbd8hJECc1VU1svjwVgJqRZQDKZW4rjcxT44bcANWCeEB1AM1rLSQc4wHRx9vDs9X4pz",
  "key7": "3VJyorLgP5Tgp3VsvXemyJ3VazgvkwGcAG8iAMkzUhBLjXS8zWoQjyuewzPNU5GyVikE2NW14dEnBdV6ckSmDxRx",
  "key8": "3EkQJEiC1gRq4r9LG8M7UiPBvajpqPAFYZ252dk376sJxKqiryz5hvJCtYkz3tRx69TPABCJVrTBEUBWCcGSTKgS",
  "key9": "3JRfDcgf72GUdYmJG9iZMnTHF2MuZrAGcW17XmCBsUyqjitSTxWyn48ZggoMftUTs5zJqxgNAAQtUDiuDWKDoNYB",
  "key10": "5VqK6yyhvM92cHnUTgPC5kYMphNKYN8PJEgmyAkizsp5jJ5qeYfC3nyCNw5jBgrpCPQLrDfgQxGVeH62FxBm14Tr",
  "key11": "5PKXbFBFLLJrc4bfsYiUUy2YhkCRgFeoyVp784Q95K3BR3LTDXHZtW2F8rFAEqoovcivxaTkj3c9NN5X3fnVLiL9",
  "key12": "2ATisKyUdpdP1xiKApQgTShcmRM5mjo1cSMhP22qNCWAQpN4m1dztjTS2hs6rqsFkmBDCECsjbZkRzzFsgq8aMDs",
  "key13": "S5HhhMo4tbVRPtiq1vSPvHRGwjQEobKZ85YK8vnsfjmjZY6iHi4WnKXuesUiPcg5L5qsEXunzf9NaZ353HJ9MGE",
  "key14": "39RRLvdeaSLGTfrszwxZ5bUEJSbzypfzE13iixL5hU29LjBQpkoUCeFivN4nX5aZc6YcWqgZHS1MFezmyJud7h4d",
  "key15": "4YqCb9JvjscTpSu5Ss9mqj6SrJvA8RK8Ve9Bv2CPgd1DwxsG5skBYaJ1yWuv9FxXwjBrqbR7Pzz9qknZeTo2HXcA",
  "key16": "2kg3sdyGJcmpz6YcD4sav4UCMrPYxKd429L78ngwA4z2p4Tfefad3siyPGs5RxxT9YTEgKCK7SnJXqyn5LtmQEdE",
  "key17": "jMxRhzavTuZxFoKeR9dxWd26CFkevdP74HbGdyfSSrpGJHidiNhr3jsGDDuaa21R7PQkv9QMR7f1R7vWtzDpTe6",
  "key18": "59xcQevP1U2SML5pcrHPJtphpLkA9ZxUy1bvYF2e2E1Ce8Rea5fxJ68iEzwVaauJaEamzGL9Q9jHKGUbZsmX7qAk",
  "key19": "qvLyiGDd2UvKvcY5uK27WhfBjfQiztS28La3jEmdV77EEj7qwYU97R8kbfZwfMCBYKYw151gbkQW35WayU3hi3N",
  "key20": "sKLhp3nuY4puxgjGkV4PY6YYdzYJ6CY8agTmUYW8hdtneRrLHiD8LNGhGthJ4cDS7DPNWLkFTou2j1e755Mmfvu",
  "key21": "46i1XrHSYw5m1j8ov72fapy5U1g45cvnQWELqEh84iKXT6GPvRPrVy9SwqTnjoBQoVdjJ2nfhdYPdzGEJS8N6UJq",
  "key22": "kUs9R8iNCm9Ce1o9me2rp54Jnpi1Ym9jcqrbnBADEeZmPhNeRyLJiGswbRMLz6tdtninMgb9gR3c5dQE8Pe8SoA",
  "key23": "G7GLFR822r5esnRiARE2WyPbQArqha7hei8jC7QZD6K2QziFU4H2nhx7AGHUY3J3EFWrvhd9gBLqe5hZsGvaX8Y",
  "key24": "2eozp5uMVeMD3UqQPbdphCs3HpEQPGSm6f4KQvMN8NtXvya4LpkBFYEx4y8cqUeSyknmRaHaRVt9bMPPSJt6dXfH",
  "key25": "2BMnz59fL9qLFTu661okqmymrepKfBRbGWgWHpGknqX1Hb2besKzHXDtE6dX7qSqiotDEGMRRYjwmev6Yyegg6V5",
  "key26": "5oTBs7pMEu3HToXE57J678iC16LQ46whhxfGeoLvURvCCKz4joU29bFc5ev9XWE3KD71KuozWghf8QTK6TK5JcTW",
  "key27": "3t9n6EKaz8UdCUqn9jcEafktEnw9FURbdYQ14YQj8svPGiEtL5Mxdj4ASDhAEUAgH1nxQajHGjEBcj8PptfwBqTK",
  "key28": "4sUH3STWukGLmRJvpHG7KdrxSznJNLG27u1MHLoYygZZKsAr3G5k4z7NUtPnzh1k8nbefRSe2r3gVV21SUihdXgc",
  "key29": "2214zMZGFq5vG84qNEdZTHnJ4srKrJicF62j9YdfkA8szFQjZ1R3aDhfy7rSbzxFGosmomNxBgasgESrHidKq3HT",
  "key30": "5KLvKEPLQ2vwcUk8zYwHnKqoT9R6ksUrEjMsuacS46qLkfXSL2JRwVtQudP8VK9f6k7aQtAQcCfYNYNLBWrg1KAK",
  "key31": "4ATfGJGjY8GFqc3qJ2NVDjijkP4ZH2eHTxf7CbiNfGn1oGY9wB3JjxDB12rahdow2Jgho8CwH8UJwXsSFwXYT5nC",
  "key32": "3qUszSoNJFRMGBgPjGtQW9MXfN428zC6imu4Fpkmow8qAEyfGYAewqxLtRVkyQ2EZXgqDgpcZAS8DGXDwxBEMPw4",
  "key33": "emYbqawqfD34rmowSVp2NWAfbn9qWq8eL3ax2GawYheaRfyq9AC4eBWaRNcF67xA6WkBj26W8faCdSrMMKquaJt"
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
