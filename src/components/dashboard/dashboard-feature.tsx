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
    "4sHcFZS2V497k8pTszu8Jz7SyA88cLpzRGcHgjdxC7ZsCaGHhStz4GM8oJACbfTNwSSRtQJCPLf9Tipxuhkq4RA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "472kNB4XJBtHs1R5TnwoixtSMcsBmBd7BfAC6DerwJthidt6s6xwpxcTFANJgnnhoc4zeHEZLj7GyBznN1e7jy5F",
  "key1": "252SBn95ryvtxTmzzsBQtU12YHoQ6MyJkcwcpZjBm4CU593v5qZU94FSjHVhQBA9ViZFSJtEHG2CunJkzw7TLX23",
  "key2": "4iBQtQDMNCVxWd3JkDZqraU1Et7Q1voukJ616QZH2ntkarxNHFEgunTDh9hth4BnPG65MgACKuj1cM5y5LRJcd4p",
  "key3": "4jN6unHXtCPA9LWCVGbM2tBJJmu8tns82QAmske2vCtLrvDSAdfMLfvtnc4eG5inG8Jwd2zBoUhW64DG2JDTVx35",
  "key4": "4batG4XD99sKLusk6VS56PTLSqUhZ9ykdUrSEioaj92L2zhhBSoxHS5WaqGqLVbZDsYdyUKH4Sm55VAkYSTb4M13",
  "key5": "4e1wu4KdVZQX3oaNAMJsDAxXzaHAq2NGTd5M5UNUYbbrCByR2KSGPPwhCpwKZxVVNjze8YZmi7hgKZxtSwfYqtT2",
  "key6": "3CV7XAEYWNrXru7keMXjMe1KHTod1EcsWotR58qzr9zZyP3m83vCHsr3FZaemTnSazVK64v8S473otapoMig1ZPc",
  "key7": "4bBsQQiJL2Dc1FqmsBqU5mjHc9p8zoDJSmkJh9vTEuEYjxpWXFkUzMra5GdVxoSsmWZEdKo83URgNukCFzsngbv5",
  "key8": "okGA5RctmbVwoYpmiYMWHNdvzVsLfzrz1b92nwbGdAkoN35AoCaE2WgsGcQWwjFJxnq7NTR28JRemvXMLpGvKJY",
  "key9": "4E4NL5p5EKN25zncvhrfsrSAxiT3KXPTYy8LuoJfmjRBEutwwHYMk6gyab9wpJTjBaV8BJto34VSLwga9MhQzZBm",
  "key10": "3CcydfneQK8Lt3WkuAXGmr9kbpZc8XpfFPv19WddFmW4TjWoGRN3FAB844hDjVF5geDQrFq5x1TimPmqaz4yM2Tr",
  "key11": "3Pdbe4xKPGNQshiEwVbf4U1EUrhvLwvX6PsW14iVBLrGi19Skm5S4Uhz7CEhSg6z3ogg8ZXQSNFaHHsZjaVNWPjy",
  "key12": "5F2FiJ3mtXRELJkj1HPiRRMwUSxZ9pqecBocACoEKzPRNeqBcNJYHXxztws6VYz97KfRXW3xxwVvSQSzz7YYsPFo",
  "key13": "3U7NYvqM8uUTb2YCAZPyhWhgYhRJVQAyFQez2ZYDwRaBUQZhwkYbtcVurYmyy41GDFYDZKk3Ym8zx7KVzCrrRhfV",
  "key14": "3XssJt1mBivsdcVfhvFAXWSM6tueN8jfqpSNrDQPXQXHbQSe5mgaSZ2y5aCuY2qiAfJyovUwgEdJVehj65zmo8Xs",
  "key15": "3XTQvm8cZd113dKN4TXf4enYiSM38ZiKJ9FkE9XA7JqcEZ8B67XWYCpqgjkYKsDwrKmndVXxSAt5oE8pHtSyXSFW",
  "key16": "3H24eFoQwoU222SyxMQS9iaDGX9ipyAxKhLMBgs6pRmYUCNnQ558yKvrxAqsJkMdHVe9WKzxEJxPcHHYyHr67H5h",
  "key17": "32uzF7Eoi1Vru7BcqSgrLRREgcebGnziiRECwq8Mki5mzW9Vo3FSgWiSJdprq9mSATCUkN6uSWqUCwn7v5iip4DQ",
  "key18": "gV8Gq1XUmnCjCX91XejN7sTfjMC8gzF165A3s12MP1UBGQM5LfLqYXySPCaX9Xi34qz9PgSABa6Zmu8ZLBDLSJZ",
  "key19": "4Bccgre9hqHVHMzGcnkUeap1svAcG6TUt2RZAw9qjzkCVUt2pLHL68S4ArzYYxDHjsFs4hm9pk78zXEpSyyovVKK",
  "key20": "2bx1tLdjQupnULkFbZmgfEPVrUyvX9tjkig8x2yD5PpQ2dkQDhhDX1oo9rCJzR6JSBkE2VpULKtrt51TfMuGhBNo",
  "key21": "4DqS3jtQBHtfG9GJj7JSE5XXc1QYFNQ34B1rh8WeyseiUW2gaupq2k9t5TECct48UV6Ai6yTWbYr1bE4eiAgGC6y",
  "key22": "21ALHmA5fw8gr77ESuevr7hPC7AarHPdmSBmcWYp2KERhnUurzLtysBcMWGKkdsve2nrmGX7gEbXgCjMzU523MYR",
  "key23": "5GmEpfxf7zv7HJXXrQVJuYbhEM87vz9aexqim3JPGuc9xJK6BxrDAzoVAwjHEKzUY8u4Kne2bTYZ2oe6nLe8qbYY",
  "key24": "4RJfKine6PvhgsAtRnhK8x5yvpmDzTzqyUhw6bwJPEHnozSuvXjT2SWrcXnDsXns6sJXFr4JG23RKBrWn5uVwAjS",
  "key25": "3J8RuDtBrJ1q3YrqUJh1HqsRyXfgyd7PK4PsnLk4n3zuLvASK5H6JY1zHn1r8VL3jcwn9hYZZRxEGRXi4qgyxgs7",
  "key26": "3i8ReayuU8k5KQhvTbv1p2HKNK8BtoLzoToAjpJ3bWeqdH4W1L9ktXFU3yJKmeSqWhbm8wAXhSfq4qcjybsRvyEz",
  "key27": "QC1fJWnJRGDGcGkCgvRqpK9kf7k6W38rFT3TPuSNWWqG2hdzSCrriBXLjVaU7U2UPX24aPSa7ZLrqNrgwwsxSsW"
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
