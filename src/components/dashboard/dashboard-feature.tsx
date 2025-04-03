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
    "2tzVvyyLYMbRxHkAykXhzDFnNDxLCEzGqRsuMi2jtUDjFtUZypK4SP6hCrBk3H6xtCob4xJP3sQHv6g9gZ51hC4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MySEhovF4Q1G7FQU3161yhvwrK1UkzWaKx882KnAmHuEmiNrHHsc35iDjbQxKKn9ebgH5dezNCeB3nWQN594wYs",
  "key1": "2oAgd5qVKr8J99GShDpM7bgZ9jnSW2HbKLh8vCKFUMLP7V7w1NkpTZbjhgVT6HjDcnTGAC1htBw1NMpspSNU2CAD",
  "key2": "39bmSexfMrJZU3r6kSRXZ3pxZ1f2km4aB6GPTey1DDGTjnTJAf6bwBfMvLiHVB9gyt3vuVj4UDw7HTo2SjjzAtjB",
  "key3": "4B8zsfRbGHrhk3Pp7G2hmUxe2dbNsimvywpu956jpJxYPnfqeCZECv9SEm2ACUgo1gZ8Tano2UcefNma6K8QjrPh",
  "key4": "3jYaVgPzWyq8qt6gGWTvGFHh8H2CNgmb1d5KXcV9BabF7kg3d5qojKpoCwcXus2ioTHXPZfk4M7iE3Xowi68EN7w",
  "key5": "3CZHrbbr91kzi7AsQpLMcZdHcLAZwZJ4Xjd2D5Tw2fNySy9ZYs8rrauCczVE8EmUzQLqDyPDpB9amrKs3MSzNSx1",
  "key6": "2tYYHhKy2cyXsgutnmvm95BHko6FgQBt78J5DGzifKQSzeRa7tRf7b4SqRKHfmZn8dJET2VNmhfxAD6TWjTdHPyt",
  "key7": "3MA8ohtC6H5XoFU19qAx7TN7ctynahbRLLQRhgh6Yqj8d2r8z44wkdXRctVERDwuiiRi8ECPLRY23CkzvMnSt7Cs",
  "key8": "2paQc115WEtqEuTKP9Rq72DezXEtsmfRaARTyNNKee2MUH58V8d3sLQLqXAyzqSnRLQBcahzxnb2VhV4chADXJmB",
  "key9": "4LZvSPsXEXz9V2uxkLw3G4HV13pk6bPdsBSesSJLTZpF6u32RMFkNGFgy9NWrHrBozESTZNAMZ2aF6pLPJn5gsrn",
  "key10": "3aeAzoaVxPv7b4Y8Cj2KW6kaoG1tx8EwaVwogWFVjZKT2wDzrELkwUPhyBD16rPK33fauLpoZxTFqe7ub3PB5go5",
  "key11": "4oqi1VrUrs6vCc9qBdqcXb4iSiEaSY7zQwYULZjT4uC8QFvLGrnDDuo2Q8nACLfjSWjqarSknfv9rGXekZxKcfpv",
  "key12": "2BuQ9h3G2xbNsetqHh793nvW8JGy28tqg9wyK4UwcEGQkMrU32N3behnEF3ssug15xmWz8z6jURiW4DP2pe8ULqa",
  "key13": "4snQPtx4NtL5m5VdFskG2y4qVgRTuQA5fjPoaS1xCwryH61aY8LWoP5x7fYR58FAZi3phY9pTxqPpBi8EoSu5W26",
  "key14": "CFxrMRceV9tFB4Ab4JHUGA8HDSqMSpQ7EoYn5HwfDimC5omEttydZfFjn2deMynciiYL3UKPzY1eYMPWi81LbUB",
  "key15": "5idqF5dY8fB1emPkX4rBuZUSVvk6bT4Ej8yfNJhQGRtq9ooj5n1Du4GDqjpHMWgTiqaiAjqJZt9hvmpw1fi7iWV8",
  "key16": "4RevRYGsW5uyEHP57C6rbyTgvPGQDgtpQCKxatN9i4PT9Gz1GrBpvT1im5uCHJgaDWLm1rR6cvNoSrGqNGN27zmq",
  "key17": "2Eu6sSCNRqim8B2YsDt8gQ2v5hsPegc9UCB9vsL5Q9rQwJja9qpm73xR497YgE9Kbtygtt5vE6XQHvQs7Spvjmo4",
  "key18": "3bzLk97oL67TKYetKPv2P5DC2jATcZPHKtt4vVZoyhz4Mxg5gDDdLcf1qQutbsE6g53jWwS6YuC6hTgs3jMKox5w",
  "key19": "zYjLmAdFE5RMmrMSPFN8rEZTmbF7hKJyNPkVwUWQTwD6jedmJYcSKMeGE9XNFsoUXTM3eN3JGRLTdsBeLTQkmZQ",
  "key20": "9VV9Gfx9mvkif7UD837uzzxVLVyi41gcX7F2rDan6ucxwyvoVqVQF6YARbfW7WmJvwgivPMGBZDP38tv1A9gf5X",
  "key21": "4ANNwVwYYiEckQwfftKVGnJn3PTbSwp2rpL7shL9DQpn5ktyZKefBRHvSHLC3gVWuuyqDysd4Q4b9Vwh8KTAeXN4",
  "key22": "4izUrQiVXoxVuUrDGHnJEjtbQGYiQgUNquZiXxCptSrQGgxZK5rDJxDTatSG2aVsAA8d1vrXYGtYyLn9nNF5TAEn",
  "key23": "3F3UT8zuQ7NAL8Y4fZD5tA8hZHVDoSKubDH2xXn4YGiRwuUiE1hwS6GreVAKo3xpL6Cbqwj75XkKbeHtauQFi8g5",
  "key24": "5gEY7SGCAiMVBpXyju3AiGxggnHDZnyXKKBcmoNLWykzbCdk3ptvvkVCidYH9s9hMGsRdiS1YcGu9pDxBQkYsiRP",
  "key25": "5NKmyaGDhxaVwtjN19ZFTJku2NhzGwe6ncP1PqC1Fe42ewb7wwUE1NQmW413C2yu5wu2FbSdoMaA7vhxVipcaLrD",
  "key26": "3bxFQj7f2AwH87czH6dY4KwDnXvQM4m137LigiHiQP2XTRHXSHa7SkqN8HYpGmM8QNbYSnFDFxSqVi8aLZVEvboZ",
  "key27": "23sWxfy53NUNqe9p4JcieY2hZuP64zVxAvLEJSVn7b24tuKYgPRRWaAr4guGYEQsytiAsJyvLR5aECUEuEWaPDcp",
  "key28": "4DsPk2F4T1S1kBpZ6H7kmzNT55wuw3G9NkeLSoJsp5eigYmtJTxtvnWBEppYFWbKRcE6P83UUspACs4FPqDaJNte"
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
