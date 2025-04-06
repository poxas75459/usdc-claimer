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
    "3pqd4ewJtFsYM5RMB99yTMc7DPp1YLi7vq5GLKdVxoi1urGHvAPGh1zyM5c7y6HhZnDnmUEtncKusvDA4ZNbzyJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oX756gXVaKUUoazkPHBd4MHHSr2mdT1i6r5ky8yDtBnFioX5xXAPGeFXAAiHXEfWMZX63oo4Qd81A6DiNt1REA",
  "key1": "3zb3oSVubLXU6E6WMGPQbTU42CbPZPWyKxstGQ9fdAkUfThyxxJruipFxrvLLfCGpFWfh7NuN9o4BESStKFsnTY1",
  "key2": "5QYsB6PbMrfmcz779ppmP4xEBHRdUgMJ3np4STxo6H35762sbgWtJhtgAzv5Yf93UZwqDomp12L7mCJqw5Xsz7rp",
  "key3": "3ipUb8YmYsXyrMbsMFEx8XXBaVcYAxyATirKLHXWSMNEJDDVEwNSDE9Dzkr9WuN6meLVoPWuL43mKysyWzB9Ua8R",
  "key4": "38wi843Gf74f8YUSHdBcUhRyJUvefp74m7JkUtCbcwzXYEaRAcrrdMs8vS5QyJmpnvF7L9cPvrgZZxmbUWbrGMRy",
  "key5": "4aw8U6GEUweGRftPUEGbEpim9wi4Fk77BPkCrCg2GEDge6Y89RYoYxjHWZJ1MtcGpHRQ9j7xm7kt8fbqjxHpeaLC",
  "key6": "5PkLfhcjtTP7kZuK7wq9hiZY5pZc9M7jyq6ogCDZWT9zSC9KggJKHM7B2ZThgVZ2LbfBQZESwXWHaFvJrDmFkprV",
  "key7": "52RCDJ9h4txfHqQk2XqdVhoW3srGBRZVLCisxA5EFLqMB8rHDd2M33NvWnHaVho5jxFRs4rdShnWwNuN1fRRE73y",
  "key8": "5ASBitLf1E1w7rR3rsBhxzLPMHPeukZtSaMV3e9zJhCU3UnXLWp4DuyjV82bauvPLNC63Qbgi8zjitHh5NQdmRun",
  "key9": "2YvQFhQ61kRBD2ZVnWwSExVES6MRiMvAxrowh8kKAyY15NF8ydzEtRFqxsoKE1YAQcgPu73WGacCq4iDgd6G2bE7",
  "key10": "5QQ6MiH5ACrw85np3iDhUGv7Gbs51p4AVCTbYaZJsuhRfWCbgL4YAzJwWEP5vLsCv7mec4TLMMN6gJQMMbYz3mmE",
  "key11": "5KkhX3HkYJSxwEtENQiRS1skhxZ7gVWvcgD8E8rj65YDAbFGRdDJJ3pEShHqnpZ6MRWaJcPaxVCARviQ6QzWiTty",
  "key12": "2Ej3G16p4SrfrfDACZxE2GDwWQNq1yrZu9N3mxQLriwPrSm1NXURdGNERMnUV5St4kjh1iqbve31HXUTdTvUGHFj",
  "key13": "36HxVB1XwQrb1cSW7rtLtR2cV4LGKWnn6JYetCYSEmjtgVEdc99JFM57d23oGzuqhTdamihetVLssq7f1KehhmrC",
  "key14": "3hBFKqq664C8H7du9JD7pqoFHS1MuJKUTJJybAWg41pEzZSfip75mG3QFbiyGMH2U2o6XXTRKEcB3oPihFwHVeUc",
  "key15": "UBnQLaWg2vyCUZgerf6FhCTqbnLe9G6ZDx5ePHVt1PwNXpkht2GgFYkiFcT67mKZh1Wt2zDmKDzVqigyuPqezQw",
  "key16": "9EZFHt2znt988Xc7ss4WFkj6pxUDZ4SFiNmTHVJhwAz4exXhD9nAYT6kzwtadLt2ygK4LfGdpfqxDiz1UnrwTZm",
  "key17": "3YHbDGppYsRRLXrVgdMVTvkXL1LxC5uvU7K7MWABX9YEmFFAWBfv6R9E3qQjVrzjMfVS7T2utiYc9f5XH1bz2odx",
  "key18": "3CMBpEYAXVxYyN57f75YLdSkiHt1GJvuNL61jZKP5H6TYeNKLM6yLKa9cDdw5tpEv1gzEPfWs2FvZc8R4jPfVMc4",
  "key19": "dCwnThwp8aGgN2W3c3cfB13tpdvYLnNE7TgBK3TbboaoEAmPL2dKPpD2nYiSkjPrEB4Xj5bWhKKhwT7G5Bg14bu",
  "key20": "2nHWYu4JqwzT3kZ8rmbANVedgUYnkMLdZPAMuxcr4JyB53MhBcG3Zm7HzSny6Hi9VA1ZR472D9bxSrcn4qHyuWQ3",
  "key21": "5f9vbcN6eiQaMyBQiXdFHU3whuxoGy6VADj4P4Th5ZJvWUwGVMGzKgXxaARGNfsqMXnpgEkTNNxWMFkrkG2gRprp",
  "key22": "5YTHjguB4qDmnFUgVUmurPEFbUp1ASLM4NLVKm5LQoi1ayj4Ttvjvn4XLj1Wy9UgoXXC3GNcmWt3C2pkXUxxVEab",
  "key23": "4W1UDUzGdKMmJed3w1sqgLCHWy5czcAPCfCGDCJSwqZ7oH5TYTuuVi5BmS6CKRMUabfMN2hRSw1b32VPaT3mPBRV",
  "key24": "5Ng7745LMaxxrFNb5SKp9mbWQqxcJWZ8QsP49vPQva9XE7gdeC9mnn1KxHcoT7R7soF72pF3chePKGM6LofN4PEV"
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
