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
    "2yuxz3ibGxrA9njphhry6gwFbT9wRodkcv4BNMQ2yce42QRJnn8KyawTE6dKRDN4ssaGz5VSEdjVSyfXWwALknTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4TJqpaPm9px7gZgZZC87sNksnvPa1F89dgTKQigHDckShAntv8dCqHpUkZ91FQXQnaGRUdcVJv94MFRA1dieh2",
  "key1": "45kzvZJDtEPzGDiZojkouFpJpf87yq6AgDCjLbAMuhWAJcvsJEsmGid9AHufuTMDjHSiycjL4NUmKrPjB75iB2WE",
  "key2": "SeCaw173fTP7LjGmn19Yve8cGKEg1BcaYkvVpQHKXAc2KRamCqn1GQ8PFYCqCNntkuBPaZ5YiC3Kz9gkWtMoJ3k",
  "key3": "5P3UHMjQvYYH1YmH9gkSDV8Ei4ZDad8RNwd84yhBQ8UzZA3cyhYXWcKv4PTyawW5SkpT6qwia9moWEK8YvNjDEaJ",
  "key4": "5SNLW1SF9oRYSAkDDbrqqidFA4csiV1nMuvCeMrQWjaFwza2bSvmvT6qaWwWgwJnTN7ifDLejN4p9JEfbNeP4Tc5",
  "key5": "4otuuoAKo2H9uPan5LtdkjPW6v5TxraoEfL5j6zGrWEDrsEvQbwZTuGNwqbJoiXXVTAHfaFKCLPvsvq6ffHETAwt",
  "key6": "bkBi8YaqsLWzDBxsNwXfSYHw7SrtHiMEgGhCbMsbkGzvnd98mjuzFZ38MbtjxSZkbMsQ7PuecCPCBQ1xQNrdRad",
  "key7": "og5t4nnzE46acHk4EbFsf6caN4eYEbQkJGdQ36SsUiPfzfuo6FVz2Xs4YXqtUskwGPxt9UDzqUef6vuaUK6v82Z",
  "key8": "2iCHeJykpNMp4f8RNJDG4Cn5mac12zJXEnQ7VDnX1royRnEBzRb6WnrgD5TZj7pFH2g272Kb1RMpUbggMPeJwiqZ",
  "key9": "2NWLVZ5et1nzc9kFSp25VJ8sFp8zUqUVbZUuU3F7sZh3AqYeSCn3YSe1CA7tYYqA4zr2XjQXUvUHfCFf2FQe5nHj",
  "key10": "3bXvcCgyToZoV2rBd3GGL3ASS3Ap5oXMvfXzy6XKrjBo9ocHu8FzDMDJ5tndcf8k3bW7YuFGNRMxUWJuqCjsipUJ",
  "key11": "h1Yq1FfYQssTgARnKJiquQHjQxjR3Jhpxs2v7J6yJE1o7H9D4QCdR7zKhYaansZi9EZi3zqvT46XguHGcDCuijR",
  "key12": "UosSJXxsu5zRktMRK9o8RWD8EggkaXvTC5wtsBCPk2hetPSGTpUFwKE5nDawm46oGpo79FaVbJj3mf9HTi5c8Ej",
  "key13": "43Wf1JfNL37pAWgnh9mEx5P2orXfK3ugNJbAucL5PVBzX3kHbg2FHrXytEaTNotKSegUMh9HHSGTWYfd6YmPwL96",
  "key14": "4ybByjfTVYc5ErSqBVJdbC8xRaEDDxL1oWfskvGhJarD233GpCNwjnzceetcE4r5oqoUYC8VYb828PLduFgjANp9",
  "key15": "5dyREWMyb7jTLQiMY1mwy7qXF7mwBCP2kARB3ZCytqmMVqP8DkQVhVR7QJrxwRcY3skR6jvLKt9q6FPzrYex9aUv",
  "key16": "3Ne9BPNGj6zFz3UcDx7KVbLbxRGZ4bPzVx1URf5wiqfB4EuMr8tjR64bdR5wrf8jSbgKiJdN5wdQS1dsf9VjX98c",
  "key17": "25UH4iY4PJZLdxq32zkzCpjEd3UZU1rQysGVb3schJkCnrx2oKwmejkbFBLkfF7YyekfpkoGTUMEvy954smoPkK5",
  "key18": "59TCXxWBUGHgYx2fhxvXtXEX8tfnw5KKctQDqmy2dZsX2VtitCosgy1W18pDMnzgzWUuiiWZQ5n8MhSjxxAv9PUb",
  "key19": "4KKhtoeZ13UxXnZ2Xb1VhvTbx2mdWgLQLTfvC3NPiPw3bGyBJjVMSbFcRBvqtyd5nD38GS5miEMEV4NC3Jg3Ten9",
  "key20": "5Fepx1zXFFYGHyAPFfBXNxYTqjGWRZiAepPkSXyyX9KZqmpcTDdv53weXQX6c2Wo4Y1tRCn2sN3xf2b1WACkwaZF",
  "key21": "xiA4be1an9vjyAsM71bHfcvQ5PTCXgKtFLnd4TvWGedrvcRKEHVB13ySVvnMQYGDBb7pFyqSXLmUgZ9t2dAhzRV",
  "key22": "DtRsyFiwEzwaXw2DH1MUFuMq1pJBDNpc4RahFhHTByXtsWwdqkcg4pYP9kD3TiPytfkLCfdyXsJd5rV1dex9EE8",
  "key23": "4qjTb62wpwWvHV6HLBy5jdHQHBWwHXdk39VGxk2UKvCak1pAqF3SFRBHErW2pHCdDGqrgn1cgudmVTJYscvU3vCb",
  "key24": "3yS3HKfDe8kUp1hdppRWrF2W3pT4Zr8xXzHVDPrFKSXfertn1BMeRSTH7MyZeqK7XnRGnfSrgigeqKTUanE97ztE",
  "key25": "5j2G9PdmoEwecv4dVwtWohPdDXvSwzgw35x4wyzLyAN5u51em32JtfE5dJum49i1qpapKHFAqf2xh9myZXBmfTh",
  "key26": "gr22qFeDGADnxsPXPLbxSPx7ZKtf9dTZJjQ4qqLdhVRgbVTGYdgaJhKLh4ADrwcG6c2b5KT6QH3dwhjNnX5Cc7v",
  "key27": "2QdVM4Q4zoHh9SUe6xiG9bSGPjA2BEKk2TAgUVgvYiDPebSisQ2A73KWAFD3ViG39uQejPpM4o3uw9bxdFRj3zbP"
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
