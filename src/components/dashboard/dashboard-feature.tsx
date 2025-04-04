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
    "3k2TucX1opr6SQ6rym1kDDYdxS5dsPhtB2zMy1uopFGuUj3h9sMSPXuw5Wv8M1H3zBxU4xB7MSbV31v5qTe2kH5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NM2HB48oGYcsL8ZH25j8VnxPh3sLr93PV7PzWKdMZeAtvCE58PtGXWhDarAH6gDM7gpHCwrkgbiNzesSLTPsWf1",
  "key1": "59S2NtezP6Pvqu7p4zq8XMcFhYnggtwC9MucpzAHVRn9dQTgQVpsoTTLSCqM5UfHMnbPdxPAR7xWdM2CMhjBr1MF",
  "key2": "hv4mF4daS1LQDsXc9S6EDHreuKhrdEHQRNvuStxrCaCDAd6ZBBmEveVs4sKVQf1vy929S6yZyWLA6xvDfSeoSxd",
  "key3": "3mKr8Bwsv4gNzAp5CRPDrsSxhybCVi5b4eX8hajkaHCqf1X2D8pAuCiavm8B9yfhjJwKWTW8H7pxS7abHXDcWveY",
  "key4": "3US6Fr1FmDGHP9AMTSvNLJVqv4sXzawkK7i7nUfe4XoTvUJD9YHQxiG6yjxq9RAfyrZZ3shUJ1w9wVZ2EmFHV6Qq",
  "key5": "5MuNL4NS4yi2o31zAMMhGrkCU71zVJxsYH8CddLiXrtPmy6hfUtsj2cAtfdB4RZ2FYurS4pfpcqebwbwNMT6WYcK",
  "key6": "yYHxRh67iAeabWbPag8VCWV5gV3GGx5EcEhNCCPFpTDnxuXyGnB3H5ntZkfagHNNsb1mD4QAHa5LvP4fo2NkJ6b",
  "key7": "29jY4MuhERn6qTTYrAqyTCzUXNqH7zo1GvVnkoa2afT3XpgGMkFJJAFDzyEMLTDn6iCHGEvuMNRqWzFxNk7tpRPb",
  "key8": "4BUjtt3MLqRVLCPs1DUiCUwK6djqpg5Sszg6AQh23vwQKSecGCPsti3oWkk12mTq4DFEJ8sdbcKUTp7iGNPEnJ4C",
  "key9": "5Pph1FGaVJFgcQuQNgRwTX3wM9YjW1avhgrh5b92ULz1bYfioCMqAyCsnG7MjUyofmUC82N1ravGzbu5CffABNLP",
  "key10": "3Mcr1eWtt37jYVaVeqKcCLxz3YgpLsNvDgZhragjtaBQHj7cdjyNSyekb1nDECyQdQwqwbjmzrD8h43Nj5bUsXVE",
  "key11": "5fX41btBqJVBAWcwqHTnRCkZQ2SJNNXo654oKw6677svyo3JdvUm7mNShTCPUvs4PQycWzMDHVuWN1ytU2Z7v7a1",
  "key12": "67KGGeSuvkE7CWgRuunjypuKKuofwXbz2We5TfY2pXrFn8ogkEdKGVriF8z8Z8SoUrnZPxBjKFA28ENqiU85nFD3",
  "key13": "GrSVLVuJ5HHajzvgecBfXCHMaq5yeDkAt3tTDt3VmAT8uG2wskBngQ34uNw6mS7ZhxYj5er4vpnvPcsB5yaLTUz",
  "key14": "kyi6LDzv8mKEn6VurJpyDFWscqMZAqvT4yKNyG6oHuqbCJi2c6ZDz8anAMq3mTjwZq4CQZankvws4BKURKXXmvf",
  "key15": "4NoD6zRYkCQvdWunPrwHFVGc4h6zZ9bNnHZVKznYhxz3SmTM4Yg89gLBcDtLavW7B6tcJQ88ffq7zDq3pnQDcVNf",
  "key16": "4GUeuqdJ4KMBG9diwCAVp44Vy3cuK2B8N2XStgpGRbxhsxTrgEHqJXYc8G6bMphQBAC7Dt1Hesg4LCk4j5dMoVR1",
  "key17": "7f2iBV4WWbux4ZvhNBpz6rF9kejtWBPFSJEM2LqnU8ZahYFCJ3iT6zUVUwG55LtxXVApjZUxFzXx7dPVLzK15A7",
  "key18": "215uM7X8UJ42c1LBSMq7EVKQWjDuezjbWmDvfCHKeMzBKsbi2981zv89k2wuhgDSifhx76KSUgxKj6btdKSMdckr",
  "key19": "xiYGzzFxNsjhNViRHVK2fD93G3oD1H682DZDr6pvNmPmdybr5kuQXPR3MBuPMZDdNoXfKdCb9hwyVxW87SYc6bp",
  "key20": "NxVeg66Ua2x2y3ARs99kJJHjQQCFEtrTcNKm8ZwyPaBf6JrE4FKALgD5yrRirYdKs6ZSmPgQN51gEdoGXUVr7K6",
  "key21": "2GFsDUZFuTNxKXQ7NssrcdbaAdAEKSDAhB91QLHJpyajFP4d8wNgYaAZK6L4wKbifjdU6JYghfcnxpEJjQVuG2Mn",
  "key22": "Hcwgpk37nTtoAGDUq27dSqW1uqGnkpxUzRL5i8rCCZuaaUq1XqcH3QBaNVSymgw1sgd9YWpBYT2a52shvFMb6rq",
  "key23": "41dvxAVkjD9KZeY2igVdtjxqU5i4fkfEQ4EzGpetbj86afHCRaXiQTaTV9wA6DNmiFLVUwqfPDxstJRHYz3RLctT",
  "key24": "42sxha2QdGjvSUCY37hsAzqc8GWGJpzet91GAED32oFJAf36nzYs4nQGY5DaLSmAZUFAugvvXuiCh3guxkWn1Pg7",
  "key25": "2mLy5me4WkGDpuP11UBKzqh5gwRCRcZ7dL8qgosgCoLVqJCJyvAC1XkQkZfDXcPdYQgsuzr54rLTu6C3xW41GMuy",
  "key26": "2rgA2vyyQRi9hgV44fCzE6MjUmcw4QueDSw7XoW35okapKQ2YsBd4QXETNHxuAwHfJR1po43JEW1fXp2Ycu3SFNr",
  "key27": "4a2kuGseAzHF87tU4XD4LnGwUGPsQoWw4BcWbCafKJeRYNJmoeLhzJH3irWeAadRq31ofNiEiKt7kDxggFQ5LS61",
  "key28": "84QLFWSb16s3niLjoKoG6Yszd5SRugQBPCh14tg76HqwSr7KaXfStgbQsmky75MbU4Ak9a2PS4x3wQiEkU3nmZ7",
  "key29": "5Kn7VraRqjiDJHgDLsde4yPswkJ5BC9Q5KQTk1q3PB2fZC9HXrFUNjZf4BVRoF2KfULSMi1LDJ3Yff3PnsZ5Zzj",
  "key30": "42ffGuvsEnh1igY2kni4RFSn1aReo87DQTrKBrspRkjjwReMmfK99gRfAocRpA5Gu85Q3dj36rSbyU1TEB5qrrgY",
  "key31": "2vQHqBFnrzvjuZNhetugnH8iNGmV9WXHryseZSXn8AjyawBs6iZtfp6vmHc5iAZKFgwsoWLudX3BgNGEgfwYVfGd",
  "key32": "PJsEfZeHRBVYCKePoHdgKGTQRgpZRUzaNozRASJDpPgVuKxKSAzZzsG5qTfELodCjggda1S8cAVQpLiBqfkUa4B",
  "key33": "5dxowcjGJxcvQNuD3HkHdr7NSbpxExoWRLyxfshzZp8Tx55MphZZ1LNVVY6jhbFpKQdCaRsyyNUzX4fzYSDxV1V3",
  "key34": "4nr8RvuqUEmRtoywyP8U7KpwyWtzstCLz97J4SFFrzrKSKcDzvnAJGCrjhcub1SXokESUPRrMWjvXS2kGXLB13NL",
  "key35": "3VPfS4Pe1URkUEaXBA5bRykZQFwjC1tdxk8gPLuAqSk1aazS38nGZcQ9vQfnPSvoUbJVvr7EkZWeRVtNmVsdZu5j",
  "key36": "3xQ1iesrH8R2z26uwaA4wQSyqmh5Fc1ppAr9LfHm2EyHuLFxcEpziH6ggYe6bnknwjNWi5mxvjH17BPyjYmCgWqf",
  "key37": "47FbLH6kV6wVRkP4iiw8rRSZjAMDDk4UacXzFaQVnEiaaffdGEiBffGZVkYFH91j4a2ytkB7HAS4Zdz5WupZFqcW",
  "key38": "4Z1YtErrwVWLKTucCfmwHPJRYCEixsZsZcsE5ZsJiXmmyANUFGrkysfRK4RHcd3ZmaLv7cvtUQRTeSWgb2S4PTFu"
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
