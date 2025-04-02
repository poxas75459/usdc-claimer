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
    "5FfXK3KqKN7jtTVjjgXGaCfoi73UTM6h289x6ddEgKQgiKcgeJS2iifJt5F1gWrKgwdz6s3euqPdq1TFSyr1fAMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMJoMkfbQAgZ13sPHAZttWP2TqnJ3DU3VURR4TcwVKxm7EYtEDQfo9kRdY4JZmBTKWMS4ubPUERam8XPpJXV65v",
  "key1": "63cxQEmxkrrGVmPjKFtRXbJijz6s7SWhgAsTQ8vnKNKjTeh9hRyN4uUbFSoBeH387146RZxwErT7GVK4Q6v2uCsr",
  "key2": "4nsSgDDxJwpAjYPuBM3TqkGvSEtsDPNFC22A8d2xxbkrmf2Cg8WzUsesVEDkacj5xnf15QnSodYpUQd9zXsDko7G",
  "key3": "2nLE7D1GCVeMN89vUdLVXHtqoHpYf2FsGDFUnqnqphXF7dHRsMus1DVhBWJrSoiUFDarT9UKgS5oQx2aQ3nyXjbc",
  "key4": "cVQEDCWbvYyhTCVj1o8qdWqAzWdxpcu9aDiBRmXp2rFaQY2u3NQganLnXhxb8wpE5suxSdjv6WSWiUtoMbHHhZE",
  "key5": "63taue9sf4h9yrPGqChf4XwySxi5ZvKmuC8J26ePGywZcG1iWfGcGDdomGr5nMwRnifLJQE75MrhGaDpCpTynou1",
  "key6": "3sR7qCjvyrtB1Rm6eaugu8JRZTmnHEWto55DoT9i1Vn3Fwe4tDPk8ait8d2D6QgxsL29EXS2HCVZrJtPGNbJDpyp",
  "key7": "qoMtY5FFQzmdjm2U1CapFNcG51ynY6Qpyd6mGhUcRrbPwbsvSe27z8CuUv89DsjdaqdVwUW8vnssghrCERHt3RA",
  "key8": "VVu8tnuGaNjPLwvD2z48u5gXQU12cZQqk6vh1g4JtS2tAcxt1nfBgcsNJTBdq7BSMhJ6FNprF9bVCbSbBvRqAor",
  "key9": "2JLdVGdFhVgcmBDgxpBVxWeqNFWmCLMpVLfzcTHhc2MpTkraBmgv2bWy9ifNJu6jDrkbCrrHefwZF5NH5EJSCHCn",
  "key10": "4D4RbpFwAoHXryCvPsnrgh9pkRKUcBjvV4Nsv6UVrocv8wQQf3tNYFw4gEE5DZuUCfXUBPu8s2AK5uwExnN3Jeau",
  "key11": "5Hj2TQN3YvJqv9nmC3iEUZGgwZ8bZoJWkwdjUZks67QBaCTa11fUJWr9dvzVrDmmcvGX5VXgW7upaAxSskp8WJZB",
  "key12": "3z8FXN1jA8ia8UUMyGoxQYYuK7QcFuAVQojzGGcfMdDHUJrpXeKzhYZm2vtW4DxSFyQqEq7BD6xKQ2rL8vE7GAXb",
  "key13": "A6WD3NobR7CHyySTVyY26HiJkLEGvuXoTMYEzWswF8bRGBA9TQbm4bgFCqcFtFc16roH6aEKhqbBDkE5o7ePo82",
  "key14": "UZ7rRcG8zA8MYwRBepai13HDxL2S127jr7VVtV1VayPnnmgpdqbTeau35AFwwWDcnyz1vyTUjXSMU8wD9r18vR7",
  "key15": "4axYEj8QC6XXjVLRZWFak3b52Sk7xxjwYar9bSbrpTg7yJronMwAMzqD3rYPkzR6p7vTwZ54poyTXkiELdJP25Xw",
  "key16": "4mQ299sw4VAwwKrWoU9f9muM8NwQFNsb5t5a1SSBtEQKmUfmWeGLKRMYfpvq4uY7Z4Jf4QxHh5NgTrfcjzvSYzEF",
  "key17": "3Q4ThL7bHdbqBHkqszen1FzJXMVH8EzZwyXEhmEPebNAq2Vcvrpz1T2v4Qk6Z4DsuTtxGmFEaqCSbPXeELRryTQ",
  "key18": "5QsNXNA6dLnoPZwsGFCHZPLtCTHEMwgwwMb7a9HefdMhjEf8RtBbEAL7SptQX2t67nTM2KWxVM3F3ucgyPsN8HGP",
  "key19": "3GPnoksX9zLSsRcsz1LagFNx3xZan1GY4zMMbqgHrWbttBq8GjMZ6WD1N3Wa4iAcbr93CgKxtHzMbQospdXXSmip",
  "key20": "4J9EFAigYWDw5o8LGcMeEjwKwMCB9yAzm3NJn3Zc7WQxexH9QKJGn7B1A1n6vuY9zzzNKGWft9p9153MX29SUeWM",
  "key21": "4kq7RytGEycf1qFTxJUs3P9Rcm3p9kNnkaWZ7TX3TFBknaRY8jydTtcNEubrEcBPjyjZaUiycUjtsU3UQv5NSzgK",
  "key22": "5wzBWTr2DtNKarCitCVnQPkBBbueE4YLWbwxw4bjt4VjgoTBCWTbwjQ6Wfk2d67JUDh2uWAG4uE8gWZgpcoMXqUA",
  "key23": "4mBCTCemMGcCw5wNNgkrWdRVC4n2rGRBFq8XqKru5S25GKYZXVyciuKKAhdrcNfLBrQQ4ULorptcPnHSxL2yFCqY",
  "key24": "3XpaPcGezE6853oJ5fMpFMFFdqSKBHATgDJLcersZeW9h9jVr4BVoXdJ2hMeWV1feuBpj49FykToCYKrh1xuDfGs",
  "key25": "3yrofaJSEd6HrX4XoMNQXy72GcZ4xGFYkq8zqWEVuQ3MkBUBGeSWGBWUDhHDCp3RmDpQqypHBdWAKNgdHDJd7wNX",
  "key26": "3ZrU6tKC94nMQEh2jtkKwsmhyDBJjGp7T27r1gqaA8Fa9akbHtfgx1jxRu695KABgSBn6qYAJ2pHNEDamzNStKDG",
  "key27": "NQH4LpH1KbMHBwFtwGvZxcuEA3Ghr7vmSGsVUueSP9fiVWXP5ESxHbrjD274Q3KpGMsrFFxK5Ax4seB8gJ86PBh",
  "key28": "53vtXDnaEqr9H6LZRCn7LowLVP55ADShADSijCkpkpt8YEWSmmjKvyqUwhAzqRgquJxtBsjRbDjXX5Aezb9CwDFe",
  "key29": "56RfVNyLFyhWjCvKTSb4PsCCsFLKrTNSVmtpCPDJGN8xGVRPy72G82svpijZEzCvhEW7qtJYA2wghu8gpgYLXcoR",
  "key30": "57f6prEDHPWsWx9HTA57DyZm7YZFZ8u8BpUMNgFxJcNaZLodjUTGh8uHmV9SZNJPENTq9efjgYg69jzaNJ7Fi4uT",
  "key31": "3CdRfUjeqaqVQYdj2wJrtCVvUPrrq4UoytQiWAzAfGPC4JkQA6YqeHvEmMRqhXsGPUNGBmJjzTrmqqmhpbywVoVd",
  "key32": "58qUmNTNHmrfnNrqMQN5pECuxc3hMxSnqrXfV4qrqzHGsiPnQwgQ5anW9BsnePfDdHH58KJyPzckCHwgMedrDcKh",
  "key33": "ZB6M5zCvufnVZGD6fUGC169NHAN7d28SJUUMeA4McubRZeQprmuUkdECu8uxQyLnrG4QhhoyA9QWNiGu18L6aU9",
  "key34": "2DCvhnXYBE4XAt1k9N2jZfZYkrCdAqgnudRrwogWtVJtTo7ssqojLewDZFWG3ZYW7yA6yiyUsrhDeqogBddmtwvp"
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
