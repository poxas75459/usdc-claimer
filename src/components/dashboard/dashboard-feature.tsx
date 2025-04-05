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
    "4R65uKXjx7ysvUhaWoEPALQJwGcZPrmfAYRuK1kSHt1wFcMSvgTPbBKkN7qqnNUmxu4SjMi4icCdgr9LpQxDBiuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJLRfojhtAMeZxsgbpAqEUXF2QkSfMoC3THfbcA1dCv9yAuHP3Zie5LHb8u8GCVKPVqbkHTMo9BSPRuYK3E4PFR",
  "key1": "3YfNAckSPVnhWKTaftGYetLPTPApqEXYB1E3ngPZdxcfRFnftw3Z5t5Ciju5Y9Uq6AjTJTPBJXQMjaPioirHe2vX",
  "key2": "2TeqdG9tFotoNa9rXD5UovKwd2K7XwLRtGNZ3TGLRWGu8WJAPcjuy5QYTUbiNAc5V7QqAT6zqrrEa1iugdZEkckP",
  "key3": "5baofsRAjQU6krnjabEyTFMRpbvj1iqyfPuF8VMrjsrUeVoy9kqX9SMAaVPiCTxzqeEWbqBeYyiNpBXn6eSfzVds",
  "key4": "PPzL8ySnjwfEyind7E8RYUveeTUwePKivTyMMx6Xdgg2ZMmocgHvVKSJmdWz3SaC4y6NkVo2VGRD3Getgo62V1o",
  "key5": "2U7subHtTj5LyjQsTw7zuxxbNsT67ZWipJ63UCQopj83rxYQtiu4SZ7zi3oLECAsEcApiTbaeuN2sVbZ3L6Tggvp",
  "key6": "JwPLDABVLKqGTAkSJ43f1YmAZ92aCfyUoZeamAuRDgRvZqA6QdkSCPAhbFdFfuHWzDAwCLYTQ6w8RMYAZVMHFKC",
  "key7": "e8DpXEh8NVu2rPBCuuZBQ4ucmB8CtGuFSjyqebxEvN5SHA5G3nififPUHTBxzmkxAyoTBoPTcxYuWiiy1dkiWUG",
  "key8": "3LjpodbH7SeNL5RjarJAnvHWKiBT1P3jgA7HEzCZ13ZqZx41zgbuqNbrnhgiqNEWuDEg1MwcVTMtgyoVDihf2QSc",
  "key9": "3fuK24g66ZaHXqjbiQc8P5kGNwPhcmonYY4wjrb6qU49xCpR7pk7EUcyW3pQ8xVL4mUtaHWSXuGVD8KTR135YDYB",
  "key10": "ciHD6oqZGmCttBwNx6kuPwkZEByB6jjJ95SbrbUY6oRPqGaTkDz1G4sCzRFuHTkYFRYdXgZEPGyAEFqWV4vL86X",
  "key11": "3g79NgrbcB1ntDHHEpCZpLRfdBLgX4ABLRs2XknaioaUrYKGFgsLygvcanpCVk2RMHyjDynx4YDcXo2kKq6gydiu",
  "key12": "3VeHVPr6atzyPnru48CLt6VdqcesnPqe6YXLdeW6TbFzKLb9gK4FxaSKiCn7ac5xmWk2KkqaF9WibVGVpeYz7Kpv",
  "key13": "5KJao8iMBTTqDUdxeTsgLw98fKZ5B3rMXKUDb3begdVbtMKtrm9yRz2S5sWEcyJyLWPKn1dKG9cbNukmcq62LNSb",
  "key14": "2NaUkkRASkrD6Fc7zWJ1A8dFojhRuccKxrA3juXTX74LbVP2fHqKbx6nLyQzh2uDxPJfyUAoZ8S4pox8FvFvXgvk",
  "key15": "3s9kxVaBXsLzZ1mHxzKb2Agib4H3bXTdAsgCkuXzfh29hFnHczdt1fk5XiKDRYSUCyedv3Da7kvcGq2BSZWpxv6p",
  "key16": "5rjZxQhRPar7tGgK2ikChtgV7LMpzJumykqc1DzxQDcLJNxQmEq5r68NBX19uKypq7GwDWp75WuxLba1iZcoJnUs",
  "key17": "38xjR1qbuXaGFA4mu5sgNdtorNXNs1oaQthvNBS5S2SfoT8nQKrHjBLaMBsX35Jm9QUs2ZDTWTCJUY9iSaWSnidM",
  "key18": "p9ZPSmHMKW5fnz8HhiJ3YRgJxdKFotw8iARUCL7Asz7Pw1BdUZcxBE2YikkRdw6QJi7d8juf4X4eLzchhcQp5pD",
  "key19": "4ku6c4mgCFFdpQU4vrcBU5wvUnTWFdYrJTfuWpxbHpJNpMUD8GQTpYsXkPjTRqfL7koMtBGrpunmvzDsqb6pMvsu",
  "key20": "33AFYwQAWUvUztf4ym7v6bCh7FEqZK2JZjURZEHDRpc8YFKbdrmsiPytZF5F6CTXRerhi1uVKAWyAr2Qp89swLFY",
  "key21": "2XvFhodDfDkf9uPW2YiTk5fCcxGmqPXAXY1EogwavMAfM8iSAP8iwS9b7sx8S3gNX7wx4YdNSd8d5XWPCQSDGh9U",
  "key22": "3qLQTLwEz3Wpn7khT5UQxFZozFMBaNbqY3dLnhjfR4f48qhMKQvxtJn2qrSpaG55fqkNxvG1UuArZmGZbKqsSqfd",
  "key23": "URd3ggWnjLZsBQrbhNVPmKSdUJ5FTRAm97W3kwsj22xwKuNrDrbb7rzrxBj37Tg21Zq8Jw5Wsny2acHAMyGcsF4",
  "key24": "kWiPQitfn7RyHBBv3peZBrXYRGQ7CZDgDXzDa9oWg437zLNABcHk9Ek1cVhTgYk2YgWCZLbwHhajwrCBSmAKRfR",
  "key25": "2TLSFo1spw74EUuS9Nyi7ui7CP8QBMP2PjJmwu28w1dV8zZZP7xiJYV8V3KBCBGoEvHk8HzNkevmhx5Rskg15jvm",
  "key26": "2EncnnqMycD88WTAA7GEUwSHKDn7Bi4u1NAqA32aMjUVMkJBFom3UV9KzxsP44LpyPsQWYKmKAax51rwqHRr1N2d",
  "key27": "5bE62JFtUf6VbXKCw28SigihzMoijiwRqtUTHLuRZyARD3hyCciECUqjs1ckVjdaVvVV6pmwFo4kkY8ocfr8Dy62",
  "key28": "3TC9WTfHwriM2j3rHYTGheXHNTc9DDvbPAjubvkCWtUXUPRgEhEhyg8xiZ9QDpFVYddEQSYxrQwQA1YpXDRkRpkN",
  "key29": "4Kd57eZ3yVfUgDAiGPfRbEiNndC4ZK2LLwW9EAKfcrQt713o9vjJTEWtubf2ef2WsqUZaQ2EWDZfuWJmf1ZoKTBf",
  "key30": "cU4vUnHL4ZBTxRCXs46aPB4gDXS7CPL1VXT69PJUTMUMiLtWMRaXH4pE4iMMYzF549TwP2faforzrZjqhdyGujj"
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
