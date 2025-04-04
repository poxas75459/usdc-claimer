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
    "3UyRWx8Gpv2mCJquZCi7Lbf18oKVwxB1SVWNHUiFjoc3YEhhSEir8spQJrragohshpSbLiaHRwZUJQrKM2Qq9hQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJKeCkhBA2NXfiiSj3rG2RtuGdL2V7ohssATsenD7cbpWrbM1ENVZFMrNYSbY3qwoskLRgPgPYkaBv9u5J9g2Ms",
  "key1": "LsUeG5ojupwCun4XKmRtZhTDbjrJ7X6b6e7mqivEiSYGprfkbRfDWYpQXzsT1DzTmTga3VPjsrViDAnVoi1erg8",
  "key2": "22AeuNBGHdkrF7nJ3izshx5vkzZsiwmybkhVvKZuRy4ZP7igUKfBQHqaTT6fpTesxCq9smTKPL3sy3vaLKBby84k",
  "key3": "5JowrnWPAf7kC3iXn4Npir6UTmPqYzKMVXoPnLwwbibDkuBpPKhSErmRzqyohu3rQavLqyP3vt2qgKjdvL4qS2Vb",
  "key4": "3Fo8gCjCCskucvfvG3QQqN1wyRCgS1bKbnVERcKM3ACHuvoJgi9WMPtoPJdhbXSu1cHvfGGQZkeBG4PeBq7KohSq",
  "key5": "5hL3Txpz72YVcZq2ezjfZKDcKNBS3UfagRKsX5pfDZZVyHJPTzS4fbwVGDRM5PNx7fXNpNzUa1yAGtEVRExHbTBi",
  "key6": "36LHrHcNE82k5aKTZMgFqpArXdprNVFq7iKz2xhbppKYT1uuYhE7T92EtUk6yc7KVEaeLpVas8EAnkZMgHtdFnYc",
  "key7": "2WYWbzPaLjFfue1Em61FsyuntHgfjg8yPqguNq2bv7yF8RqpKKBExQCDHxjbd72V8DggVfcJKNG33xViY6gJ67o4",
  "key8": "42j8dNpwWjDRR3y1e2p9C6LUSNnEoxVsF5TY3MZSHykqi6XpDAZgazkVDLBPRfSrZweM8U3LKHMhSZA69RS7k7P",
  "key9": "2cgsA5Axb1yZQdFGFtSBTyYLen3fRwQToFbPp27B9VpqfnumqUNCK5bqqe7F5UPei2ghBjrz8RKkuhgzv2CT81gb",
  "key10": "eZxovfFga6VZ1VwSXaqSxM6oFuucw3DsVYZf6koepAFP8Si7UPyVwWnDtvTihYe3RgbGRwKBa7JFTzpao6XGUKX",
  "key11": "2TPrfqJgFEFBJRAnGvfgQjyahyi5f51CVAZ5SRP4VrTbqpmGhVDJJQnEgJbFemr3q71wNBxgb5Emtzmvaf9UY8dW",
  "key12": "4ehdaNpStBNnUVzqCWArFZjTgJshWS1e5BVKkq6xHtebdNrGbB7d8dLU4pR7EZugbFNTkFgTfLGSjKUmNbFCn33p",
  "key13": "2wT9WJLzpQ4tJiGAcJpngRXSqw9VBwniNDrEXjXVg6V2vJDpxMtjN2QmqYmLoi7nTVw5w77zaho7LmAvD9Du8c13",
  "key14": "4cyVUGbrHbdHmf1knVBWazh5CTq11pod9gTCQn4CLhq95T5gRn8jXWGw54WbH9jHCqmFqgyXLxZtQCNnG7oe66JZ",
  "key15": "5TBWb3mRssCNr8Jf9YEuiEg4hiutMnutECu8q6QQiJ4YcwVfMDKqmgxmyQDXSini6LGBcxtFpgoK2kqXWAnQkZdS",
  "key16": "2PqdxDs8bSmM76X8kpxqfTZ7cHndB6xQq6EWpzoZydGcoPkpks8yVtZLz2tScQ9sbMXbu3wvkr9BgEJMNt6Evo2V",
  "key17": "5CUSquesGh2sST8xF9MScCdnHY7dyzk2FZqsswjfXYuvTNzZFz41hYd3jTT1j2keNGjFhdxsLTseKYZMQetgT5o3",
  "key18": "4orYjbHLdZiMP3feGNu9oZqAGFKLsBStP8Z8Vmqw9cKybbUMMMSVGyvnZq1isNFaS9T9z6fbXYrv52BtB7aLPjFT",
  "key19": "339hoNPy8FMQVgc1io25DwuaPHeGYB618qhMKkiontwvWB6PKSDrh1Yg8L7N4qRcrs9RefYeA5wetLC3D3Dvfo3K",
  "key20": "4A34HY9Cwg2xqV6TqngRa6KtVEiAF4B3qwTnwS2jwBHesxqHpUHV2Gwt8D6Na6vKwEzG4LDxcqc1rWWBw9e1iq8K",
  "key21": "3HBDtBJ3SVQ4R8NcZFksZ8ozUA6Jp6CRApYg8wE6uGozLHqdmZ3rvhWPA1yb6oJKMupnnG2TGuGDrLrrJd7YoRC1",
  "key22": "4VjNkmrjVLpCbBfUWLLRijM6tU3AQyL11nFX6tNGGqhp1hzF5DwqodSPvkxwz665P7ecteTD3bwhRwwUQU4Tqzu1",
  "key23": "M7c1Q2yiCvDrWpJTNFpuZUvEnXnPhJeZzMiAwCQ2Mq4Dm71suyWwPh7MJdjWJqDfFWRKjDSdSrPpWdSPStNPDP3",
  "key24": "5C6xVwfPoLxA2XgGQQM5CjhCvbSRN3suQJwwSom6Ure9xgLagrQcG8s3ChFnKXF94d9MaRb6N72LVGKRhk1UDJCK"
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
