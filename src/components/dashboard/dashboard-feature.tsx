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
    "3G4EpgW1c9hHgXSWhRwTe3GpvjhnPCVzmPC83ChGsimRcMoh2U7k5cW1GgqRFouedVeg3m8aujNouhLC5n6teisA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hBkS4v7ohahfzAQ5nGUuQh3knjW268nq2p91TYfuAFTaA5NW3SkBL2iNBHQyTUmMmdQPiSywmifeZ4dRNLdJmTS",
  "key1": "MBGoDH1RSrucdJiB1rQweit2tkGAQGrR4feeswxvWWtxhbySpqQ6ZL1ezb2dKQVM7Zb2iTu7EokqfkXivANBmLd",
  "key2": "4X4i4sdthp1uviJmFDebVLvpy5a9cRj5tSx4gutJyYGMaCDbWgRvbDqbdtjdiohYmoUbmRsXd8PvTcVkzQCRaFL8",
  "key3": "X2YJzvWCTmNusvnpS27n3NVbG1p9bkLMKwieeBejbGBSVLHkXpTfV6wnswbM1K3o6QmyenShtpRACXX7KzBP2BD",
  "key4": "UenYsNEo6NR2Q3UYwP33CVnEAdWtSWU8ybfYXGu8WEz7jEReB9pZmdgdJauuFaEzQZGJ2uVWDPZHmUXNc2vQyWM",
  "key5": "2hgAoTEpbmSpEK1wpztNA1MiGCuo2T8o4gacMpESFFmfrxm3ezzVu9KqTHcNnYDYUypbznMtfuGSx4M7bSrzYR49",
  "key6": "5kYkCWukfRj7G1CVU6uQ7cS4iEVjxfxmfRVCHCK9Rfv2PqmvTcxiGrZfTNe6kVZx14D8XRdRZrzusXnuVtEkeD9s",
  "key7": "2qBd9gt1XaMFzkRjJjXJmXwMmYebNAqzAeS4aB97HD7cX2NXP95zMsxpxoXeYYUcmQWXPHDso2aycuaUrBtnmNMu",
  "key8": "4vfo4GLTgJeBfttqrjb65XvuX54NTJHE42VthBQb1sn2ipEU8gYJV7G5wDQW5fJ1n7G4hYg5eNiBGRP79VNrYXa",
  "key9": "YE2FTSN7prpNafHdiZcLxQmkwrhSAEJxEN4CJtGPNAp8yXskNTtYtj7R3cvHd5mttkjM8JjT3dhDWKrGjBeNheA",
  "key10": "53ZQih2AowYhBAFTAfcj5pfvKtYcQy4FFbfkU6sGJEn8yBRa9ftaZh6yUvvxLYvYPSoUefWX3fzXuEqpqjGk2C5D",
  "key11": "3B5kJJNabFgwdUTGk3kW1vARYEAimgZMzqvXGRUXdsVkqWWrcQT4PAScsm3yiUh3LLsuh9mJcZTPakrjgmoGAQep",
  "key12": "51dVL5EfNuUcRMBUrd3ij2gLFBHABLXxEqiYsvjeA7WrmECqupPft2dkDFXamwF7td5bnfoifMsGv1RnWRejy4UT",
  "key13": "3TmyAYiskv6gXemB7yvzA9Do7T1RQLNHwQunDiZjGGpCqqhwaK6EmE8FQToqd1K8mS4WCQLocozm3NWJJc6tvHic",
  "key14": "41FKuMHWkuPTnAD5Ajm8wftbsA8Gn4PQGiWGCp8tCfR3DELPmBAN3AWPTaZu7J9gEZDLzQrgMe2BZA9oTaZ8meJx",
  "key15": "4912e4hE9eRjDdSHUKsFxneAe5pUrRzehk7DdfGjMT3XVPJEDKEMRzCjqQGhQ3mdvZYA5LHpeu14dnYuPvzCttGK",
  "key16": "2KQbVfLF2T4eyw2k2CVUDSfRpetD7gzYeMefNL3XdgMZZRZCyVTKyE8s9ixAkwTEx79zo2dDTmaUsvLb9TnjwzgT",
  "key17": "2JqQNT4TFiwBXx1wycvXUcMa1RX3azdevShvti666ZGMenVwZ45XJvmnL4uuMzVRL8GuFqsrjUjL8PgvzrYFcDBp",
  "key18": "34zpXD5bB3sqyqYZH4LNxDoXQj86SdTnrhJh5tJFyJM9LYbxpsSN5GSCyCz5SXZrP6sZQk5uRZq1QyGtq1KZVmcY",
  "key19": "VEmRngtkUQmKMMZPoFaaF66E6bEffNaW21Bdb8wrHXFUvBzDZkvwztSeBkK7rLmVjjpz6ZgaRb3MswJqpWrJNn8",
  "key20": "yhNpJTyXh35zSAQxVz4fzmp5JkRqqMkwnSSGEqM1xTRG2nGoaVHk296812jk8cR9ECPP4tgg1ByP7qDgzFceuo6",
  "key21": "2epSVhPRhbe3sw9C5DAcNtzD8TKqwNH7WNK7ba99CTD5esb5ZQ63stR8THUgUx3GTcVQfbHvmnnHtsQeHYLeFTNc",
  "key22": "3GiMYF6j3RK6kEkSP4qMj96vwKXHLjcahMsDwXNrVAfz1V185WrqbjwJA5ugz7waHoq1bjAMBHAU8aCHa3uGsrbQ",
  "key23": "3duhL4PBjTPjWhdM2WiuRrPBnzw9mRKjYtSac8eJAxg2PhhCaRY6961qWVfvsThJqBRRM2wP2dnLFFMNvKYB76td",
  "key24": "4G27EwXphGVa3xciM1kxCe7DXwa4YDvz4Wu1bRGgUKGtqt1AHcJBjqwdHtkFxG9rXpKngRRvMkQazY5Msf8ywJb9",
  "key25": "2jnobcjXG6k4u8usf2i2u2VDLs6aEgMpmMGRPSouRCjZJ3ToqGKhoCmvuJXC85YRWRGgP3krLsTRUBiCCtGx9gEa",
  "key26": "Zv4N3M3nLESNczZhthPR4V2PggRvbSjq9xgU2JNScw88aUqb85ycW9x4p4LBhtPfRPDPmtHsAA1gy2PbMXNdVfy",
  "key27": "3RdGZz7wcAYicBoMk4eicjeWXuxpsyvCxgHJpoGoZTKxouYR4DX2WB9o8Kuy9kA1XZFsx7LWbAZ7pmG6yJfg6Db8",
  "key28": "2B7tRhMGsjMRcQwxoqWVCMtqFeHycsb9hEAjeQF6HdL3Xj7wMQvv7vcVGrApLi6hyHadrKZuSzRLdH3ezSytzUoQ",
  "key29": "4ZwRGwZ6XrJSqpjR7Q5dnwDRfUrDoYBN62jucAhLYSpCBvXYAERxmRJdGXeDarhPFUs14uCh62iKRBUyhffv9HQk",
  "key30": "3eUpm1EyuSPVRyJJJ5tpWPujvPQkP1G6BTHNA51oyJzr9qj3kLxTNHALftM89knTNZcCWB9n7LBccK8e5fcXDupT",
  "key31": "3PGgEy7KDLiAcpFijzSGyxMn5anGXzAyx7ndUbJvsbKAZxeoQLhSr3hAqjrqHvAYt6ic87ySR6e4fhM6fBKLS1R8",
  "key32": "3fdqdh4MugCNupvE952bBuZeB6ipuamGjas2fojDuABjccYY5zYcGbkhwdDBiNS9Xjjt3WWi9ibqD1sMRZMSi7xi",
  "key33": "2z4JCPjhoqvMUPg2y3Wi7sUSJg7HjGQLUoUQoFgiE6LrfjfHawmQXNbj2aoEYWbxmWwEuHtqX9hhdcyDxWLjr95G",
  "key34": "62rifenj1doMASLp8qHaeHxJewHzA6kUn8hjyjUJdzMnyPFvjydiMWrGXWRWbDSSuNZVPeM31w89dEXo2A8xBdtC",
  "key35": "5aecKn9BD4s82KXb3jDXhSwfBbVozPFFwKvhF3gnABHAJxoo6R75Ri8ujtiPpQZeZ82WXkrHjea1571EUzCSvo6p",
  "key36": "36PKn1gdGYuyEnJvbGVtE5iaLycNocbbsMYKcsSYNut1BWtU7BofkYDfq89f3hF2nwpyRKW3xM4i233UjxMLgVw6",
  "key37": "129hiyh7L1RgoVX5ugqtt6nFrmkoWZVkSdi7RYB8WAg4thBAc7KaNmFJ43ampMF3TvSVBbpQyaLhARELWvsAEBvz",
  "key38": "5wLSJRVVt4AxL4LMuWfLRzaHAbtitB64UgL5Pm5CZBUrQfBNPgVdFDq19KftcVWPN65P4M6YWjtAmUb2wmGxtpCt",
  "key39": "55WvWWCVNjaXNESSks64SUZ7n8r7buWdMHU2YavGWjToH5HMkRXEBxasTiCzRAFaG1nWykTosPpN6QWxQdJ2dwdA",
  "key40": "57UdovGsnK1TWmXeUfb3LRPLQ4h58YzCU3XM5KfjxxDCgundeukmR2Ps4MmzDFmefSiYB6NnBFGPGVzaHjvr6jkJ"
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
