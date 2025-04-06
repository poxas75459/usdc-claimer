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
    "3RbKgz7w9Qk3gj2n7DMchkPidyEq732BD8E7yfAGoTzneckmKSsaFsaKkLMdaeiatrqbYKBVMUWnxvgTWPBcT3mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gU9xNLhJpAE8RsChZZTNs7Y8eqa61ctE3vH4FFm1LX2F2JbVKhP4AYRTUyD6zX2GXoZTTCs5NB2qfVtqisMWL72",
  "key1": "nez9yV1dQTLykUiQUrJbDdZYwziPx6dW5zgC5GUr6p7iXJ3Z3bLbH4TEbc1Fy5vgjk5EG3vvS9iCyrAj4WX4otV",
  "key2": "99kgpTkNPku4o84yphBmvLw8wrptTtBii88YiL9NW9zAfmvVmLGx7HasT26bzNZmLhgjgkRLKHG3mPWC24H6qwH",
  "key3": "9SsintvPQz4dvF8snLLk8LR9zQMhPkrDPTR6Prxr2mvWNs5NGRjfhpttxQLo4D336fMM4bnsnvUfx6bpvuhdbLq",
  "key4": "4oNs2tZYUAFcv7br7tXcMmFR1JbDyNnQv1uAobgbkkXbAc7ei3k1YrLcbgo7oZ6pNQmM6EbHzUqiLYvF7DGyte3j",
  "key5": "3JJXEhw1mvyrq7b7vitwPW9WaFDzThWCdG5kvp6jawsaKEuft9P1gGPAfJ4E9mVuh3ibNNiiUtgRwuiyjhbT8fHh",
  "key6": "3nLcoenWsmwegjMZq9joijocvzyeNGEvvysSie1wMoQBHs1UDX81X6KZ2ytpyrGFSdFThmVchStFW9rhz5fjdnzz",
  "key7": "28uWMZF6eWrczPVXbt6uHb9BXr2944zpLWjnCc8wbAqcyosZMGm4snTyWp8qSTuFNVTBDT5YdEJzRfY4WqSDtQKY",
  "key8": "29usym1GZTjhmznay9aBaLJNPnwTgyw4Jg5iM3zvKougdMD6QR1PQdrJ6De3hP5PudQQC1Q1Bzrry2X2BsUmHfMB",
  "key9": "5xtkXoB7qtAz5Ub759vpyH1NENfpZiH16yEow4uwVPnjzULdHBUjXrq4eiMpdjSPTnaK7zYzeWupGkzju9B9Wdry",
  "key10": "g8FJiwcrKamTSxQ9ArJJjitK218NEzY3tvHqgLySPZnamjhF4mKXqEd3Jpiy3nuspz8J1e8ZvxUMhhW2SjjDUVc",
  "key11": "5Sw6GDiUUbQXV4a3giyxB15GSm7wmLmWY69Ray6XKgmSXe8JkA5xfTE3qgfjGDe9r2irh8tWpPihv3Z1ghbf3mcB",
  "key12": "PbF1KeDrzTPLCWdheDa3bMKaUR6J3U3P6XQe46DTDovp7UwBq4UCqxZEsGhUWwJfXUXjUF4qAS7WPsX2f7WzR5F",
  "key13": "3J1B5F4seqoCP5SKjfQ75D4NynVPkUw6r931mjh6BTRgGZVQWz7UYUBzMDzqCuj6YWf1r63RbSC1frmhsXmoXyCM",
  "key14": "2Z6inqUo8d7Lp4veHLXuEvbAZ6FzgNcpXhaxfAFXETzHoT3BCNopbJUMq5DyJYuwPCTKsNzdSUPd52t7zLytnLcS",
  "key15": "4ZhVDEnjyHQQJ3KQh2kyJH69BPQvX58xGTcU5eGFyPJjQQsju8XjEQRn1NLGM357sm8Hz8Bjqs6FKvdezcvYUkFo",
  "key16": "2bRFE2TfiJ6ERNUYqPAz9caS5d2Us4bDG1jkhFhCxYKiWxxvcEBAGyDoJmX7jQhU3xTvSp3Bhue8VghbPpjkr67b",
  "key17": "5YK9KVyuiTjtft24qegra1KBvDnqhX4p7HQpuEpkcFYUasNmYwBqsvfdZhVQ6hKzpRDR6CoiYcnDNxkN1fEk9uPR",
  "key18": "51oZg7HufNwiwuqLhZiDmq1WBp9hKeUFWsNoTUmTwp1RpxxuURd6AiqKCyjSh8WtpF2R2rXdAK5ytqacFacV8NUP",
  "key19": "MNkYdbUMEhSPFEpJ1AvNcLJjkwYsyvDZYBNKLqvZkp9ej3XnCWHptSiT4AiUEnB4di1ipyL528DkQqzqqXuMPdp",
  "key20": "2QN1p4awvkmiZ5wxZ5Z2pb4Hrm4zYFst2Jme8aXuZ746Ki3diqWA79RrSxZgpZ5xPZwaDNEZrDiVDuX7UP6d52fW",
  "key21": "E42YyJ5wWvXshqg7Hv2ogbSYZmTUy8V9oQsgkeKL1jXW3hKgBHeSBhfuKmespNbwJZ8NmtXK5kJFADF7TKHDiQq",
  "key22": "3EZpCBZj3eAkKBt6P3C2Gh2jkLF5rsbh36EjD4AhHHde7GQuqsVZXoZcSCa6pL2PyEQP4arW2ZbBhmBAAhi7A6Yu",
  "key23": "HD7htVWKm9AwnDBoo8o49rT3qCRHXtGLAUpHhi8atjXQMrKEEdrxvSoC91xP1SM796fct5WGmx4At6Ac75K3gSu",
  "key24": "5P8mqaFc9ABEwXBDEzVMc2XyNF5UCN5NfjGCepxmYrjeKv7H6btJKdQ8yxXrt1CjsfGTVQ3cGsCecWBnyJTSzjHG",
  "key25": "2eJjk9QH9uZC7GuLW3Syq5FzyYkGBRs2YuoHJFrhG1tefU4dxTJAoKk4tBsq2CXc1eeC5a1fkxp4WrgAPdxzLAhz",
  "key26": "qKGkgiUHK85WRvwWDXfk6tenHVLbY7hmnx8HHtchm4fChbBDCKGB9tgX4a9fY3pGjEV1fykAyghAXBTjbVVwhbs",
  "key27": "5uMCMuPopY87v9GYdPHpWaC9AhfpnnupMCRhiZYwKsQsxRkHGQ3sbAF22GN6c9ZGAHdhaYui7DuoD83SZZ5YsRZd",
  "key28": "5tTykvhrJNS22fByG3YXHVKYf4p3sQFKsSZ64bMjDnBFaWi3xof5Ti8tFNEA5y2TNRuqh7hQzc8HQEVTK3ZfhfYg",
  "key29": "3biGBAEKKDuJd1XwwLcYu88hKRe9oqXms8UPTBa95GfwVkSFYeXLzSmWaN1XvPsDNnfeXH1qVnEpFNK3BYbXx64S",
  "key30": "8tWEQWnAEXGBs8ovGhKgivzfegwwWj3FP2izRyF1oDANTg761wmqWLRsuG1tVYbKAsNE7R5NwWyqABVCegFtTpT",
  "key31": "2SLJB2XhfF54BMaFZsehVt2sFq6Uwgcta78bYcxNxE8VMDcTdEbR14VWwi3UaGBBCmyZ1bcsGpFmij2WFawA3XHS",
  "key32": "5ZNkrjsFm74CCKXREEHiQtSJi921WFw7S2NXFn9RmHkopCRSVjMiXberVbeEwZb7MUZq8FFH6CKrxemK3bJJjhmF",
  "key33": "3S7CiHUxq1DBvbwy2QqzgZkFAWrNhsH5FXXxQQiDRuqGYpFDEqfWRLG7LoKFQTz9nitAMcDY1rhNdFkmCA66pgzA",
  "key34": "yeoxjmJYAnzByCRnF91Rk1CSqAxBRKrBtcSpZgRMPSTR6hTAgpkkAkrtX2XGmeRkUrG1rSxfjru6Dsz3Pw8HwZp"
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
