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
    "RzynTioJRSas7JwiYonF9Xo2u1NVBoEyJviBYRiMSRe5reX89qi3FGGvURhJyTTQS1emf9ggDWM8Y6AtXe1ZcmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zo2wmjTPNW5BEQyigTwaebscmE6rFhRmzZ6MGdVwWEy3jxmqBoLLF6UCxxNg1hTpDefnfkAt9gHX3o9ACaYcrPH",
  "key1": "297mkr5EeHUSXyxQJTnf8yGuvJVG9Y82z9NaDJEk9EvNSTjWCtQHEj8jGnMhuqGbkUc9xsdpeGEZ1Kfp3aJJmv8s",
  "key2": "4p76cawKPRGQ2EF7TfsnjmYKcnMwjuw8cR8EzXTdARep9EiFpKpeUfENs4So6o6McpN4EzBzfiVcSH1odMHCET74",
  "key3": "4CmUaDAQnSMme67hdwukt7nHwYAArSffWcyf6CF2vf51wv3CKCpBMCZbvPvz1V9hV3wigxVQTrKdFer68zhgxrg9",
  "key4": "fKiqE76tSSjoVfaEo7N1A7xxKm69uJ26hRJfPzNLm413WLKP875RvTEgsMDxQqaaRbUzkKf1yNQ8SJvQwtkMian",
  "key5": "47y3enJV9GCRjCtPnUMfeETaoZpzWdLfUYca5hKTNcM3bnaKdz8eGBC9dmSBgZ6HrVSxDvnU6RRrB9KDKtF9oa7",
  "key6": "yo8YcMQZ7ZbT8p5VjQ7uWUWWv9putTSZvWkDVKDqQvALrmtASWhmDsykNw5EZsSsx27jJaMHuGjnN6Re4keR1yT",
  "key7": "JP9H1AX1fHPvFt9zU1HLZmLdH7ycWGRS4V9RxxXynaewTFSUeUoNKwjRSEYs4fPz2mzFvkp2EcDh61THuccCyYb",
  "key8": "2DJK9tFQVs9cbSiAqDJPNxGb1HrBqYvHgMjBQoNt2SYYLQLhdVv2h88tAD1tRqRC6S3Fmmqm3LZyjvqYLqt6A86",
  "key9": "5ktSeV3CcdBjBxqPYfYp3CP63mrtuYwamy9BDkyVANiEctJr1RBvWLCNLHhTaHex9zEDJszwRgLqcx95sH6mW1vG",
  "key10": "4e6m27VwNry1J7d7feNK5mhtdB3R6pDgmkYERdgMwswMcKT5yM4KmumrLevZ5YZmqLeqH648LDP3BGeWtLDNHkGb",
  "key11": "39DEF4EEVZBUhQUATjHX43j4bzebStSzVMrcQDBUTmbh7dKxE3z55My9PPSNJ5nBKUNyKwe62Vdpa5kNGxcbGVda",
  "key12": "EjUJa5tcTE5AiBP2zTLyz8EBNHVdV8a1u957TgN8E3Jd7CjZx36XNF5Gk88PrWr1KpiFBy73iLhtpRckpwFYzWy",
  "key13": "2pnpbia4fVxiunZpz4z35FUFGoJG2VefnXUzaDMcvGjf1UyLfbcZgHz9HY3asphiCCmnFRyV8Q4vG1P5D1KdmxCC",
  "key14": "5EhnRK4oivPsv2hxLN3g6Jm6bUCPVSrtv52X41AseyejcMWvx9eNyJFkyXcP3YGHZnTffDJBVDres2vCBfdcSPoj",
  "key15": "cJjMALdo1mRTvjfXASrAPPPUqLq9CWgpAwaRkK58BNu5GBoTQP7f3iseaNQSFZqW9dC6ixNStFZFpfdVFh4YwZb",
  "key16": "3XMdt3HoAwtYphNENoYzMAUtU976LFqyumunm7B7bR2dGYTxjWKDw4UrQpNSXfwEd3H1JLAX8AzRuoMZDFCkGnSk",
  "key17": "3ixiAx6s5fdpzpmp8wuTtmjNSc5x6Ba2SzrGMJiLXTQepwPZEUwvGankJetA8SNhaiAf8i611AgckQEsTrtVXFTc",
  "key18": "2o2fFBPB7v8BfRWbqe17WPAivLPxZuQqHkq3YFDnmNDKH7xVKY65vyzi9a5rqeZDw8sxp9Q45ghRLh1M2pTJJt3B",
  "key19": "5Uszx3GFSCwjTLe92z7rhhTRJEbW5yU6N4W5gtFvEMbW7TbZNjx185MiCV9aGkKa5qbAh8872EfMGZ51ZtxFjXt1",
  "key20": "6n5rx4XWcgKAPuDVatRtqmyrhMf1hqyDNru7V2VbA7QWfjcLeU57uBGDnWYMxRPy6ecMqwsY4ByQU3yRoMvfsrk",
  "key21": "5WjawcBU5zMWTvxmmqSEf76ZczckZykipEEdF2rXqrYX4ujq2X66HUF3vfWmXxVopCyxaZijamkLfFQmgqTm6woQ",
  "key22": "5vxV3kjpgS8hv7zxhEUS8VE57AohyEhVJ45hK33XLiw6CZ8Px9hgYsRrwPZoZWu62cPTiiqAFZsL1Fx1fHQjpfSg",
  "key23": "2qW6XHkrpwCcd1nMaQNg197ukbtxwcDer4JCiPynTdnK7ffVroxZgLTZQ6ymVW37pNnK5RnFxMC52Hve2jJvwTtB",
  "key24": "37UC3j7PeV1k8nErKmjgEoUgUP5Ky8TVDjbJThC78fMWBs2LjWBDYT9iqMf1zRYJTcTARKB2GKguj32iEuwFsdaK",
  "key25": "2pRw1iTKpBDptQ7ZFckBFfjTzA4cBzJfW9XdxSiAXSJkPw8PFcjsAMYRocNj9k44nsEmKmfU3bKizfBAW58NeNYH",
  "key26": "4pwx2tfcHgEhgzBHRsJzcGdLZduHsPttpfWGhs4HfgNCjDEKni3JEgA2ApW3kKyFvV3DLrCjV1nDgwXDb7UA53Rk",
  "key27": "4yGmybshARn9YJ8K4EPUUbLWHt5BuFvqjRfygEMrDrKjPE4zBKbaueG6TEhS5iboNvL2viAPGHHZGTaNsxUqRSNg",
  "key28": "2KFdZiDi3nD3s9BfqHBCC9z6E5nGKzcMYAtk2G2e91shxpe6cQ9zB6sHqqzYncv2ivugEWY3BNYL4konbvMQZBD4",
  "key29": "4XKhyGWcXdeG2hUvtzXmicykAVxjFNzeqF7eh1mFrWJKfHKbB5Xfannkb9QzoXC55k7vHtbNQRrdYHKMDPU3p6s6",
  "key30": "4SRfe5BFLHvZtedZuXjHt5Si4ehb1K33sZj63G9oymVi1YzeAyfVqzY1vM4N3S66ZnxNvwUySRqWwU56fFvdL8HF",
  "key31": "3VM21nfFKdHoq6LCEs8A33Q3buzERQPrAcCEoJ3ZGsCh4DSGyym4UtodUqbCHEzJMQPkcHGnc87htswmc1kbATFo",
  "key32": "42rrEwqSmbLuMVgWZiLtCWHusvdR8ZBPFXE2dprFszupVw2G8QpH4bzP1j2c34NnH9mCTLsJgUenEBqJ7NRC9wpA",
  "key33": "2R4r4iNGVEacYBkEsfuzTgMReabiAKPA2ES2MCDdZ1WVULQAkyTL9jp3BwNwxB4tfo38jY7bxxB78eg2BqDS93wB",
  "key34": "5CmZGQL6bUuk6zsd8svrahtakcZnXzXdLSFbXR9NHYGQVv5AsyPhL23HVMfkuFuozzrh6JN5ems1yCJnRUsZQMRk",
  "key35": "LojPTfSuq3kx3AvCeddhPVTkVt9mUvRyHqx8mEtZGAEdMbEBsyhPdjQM9AaT498e4LvZucpqB3dG5D6hNB1bZD9",
  "key36": "5LPnWi3EiN2g6KTNMNwLaoU7kyTyk6XG2XZKb69jKvtJ12TyoMsHmjh9XRh6U2XVbgCr3rKVHQf5mnwTxxzuZ8kv",
  "key37": "5dT7f2SitiheqUfvM9wZDqwVR1EZ7dJNzXGb3kizzoP7zRtemBkLwaDg9nvAur8M2ioCbHuvwfM8xh2TgfGJPiMY",
  "key38": "VGmMhkjkPxTwV4af5GZ7EJqY7XehN1BEg3kxwNPnxSrDuYYQqvjndfjrhJYLgXSbDXvhqS8UGGvF4MwLA33jsH7",
  "key39": "3Mato4uNHvjiGnYMnX822F9ShSEuxkyEu63G7Z5nLGnth1CPv67vSWsPynn7aygeucshTG73tLqruBG2mm2ZT3yh",
  "key40": "4i12xRJcYgBHhD4CwSFHCK1rptZNnxudUQyWjc741YDLnKpkpjWVNZPiJKK9NLtaDWV9Pwv4b3rWYYzHMZcU4yye",
  "key41": "3xAyoFLZBuoGK4bWL8BnezG9THhdoA41A5sNdWfrh5F6bgPsvXjWNgPqUJCWsJZ9qtod9rkc9aCRWrtSJB66QLWx",
  "key42": "5oATqUTbWapBzrjceEqWCLxV7qbMQJXCmEYvMYJ9UGiw5KszXBF8aCskqALMKieENqUJ64oZAW4r2XSLwFKY5AvK",
  "key43": "LZ4T8ggT6pjvxbFT1CK4TisJjxnr5X9PPhQnjoL1HiXsdBxiTr15pLTyQsFBFYdwewEWkr3Sw5C5FPkN4tewaHo",
  "key44": "4BtiK5JRUzG4mAAz8SwkPdXoCrCJBSCfKKRH6FiaSoaBZHukhjVpfMKg7BGg3eGrP9dfi9oeZRXxnHwJNqpTFLRK"
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
