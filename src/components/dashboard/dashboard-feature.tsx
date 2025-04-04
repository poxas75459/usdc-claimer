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
    "PZ7pAHGjD6aMsLkCs5Dfbj8w5FP586xHee6ZQKkSEz8vjmHsYFN7fqTngpkkdsfR7KYZHEKBiqaEEhT23kT8F6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yPNBDQizsbHwHhJBbtJGQfdfkXyBuctttXcNFmKEveBtzsoYoQQA2KgWsarFzqqd5rxR37SoAJ4eJe1YnEJkUGF",
  "key1": "5HK9bRHYbDT25aGYqjJfDeW1HgasER9BmtTiupRWMH9441aaULgXYCAMRvF8me3s6gE4vCQT3NBUgc2tSNWrF9zS",
  "key2": "3L8Eu3QG2J3HCdstpo8apbu2hhKnjBoDZ9Bn6zZDaFvE7gwrDJKwNHCi8VXptWQ4cZWsmRPwtXMKH1bDYuaZHPj8",
  "key3": "3VHiykzozbL5rF9rYxHdzjimTXbj46r1D4oV9XDbdeXAYWsUEFhzektAF4PX54GuEmWdZPU36iZsZqgcW2Nnijm6",
  "key4": "xJNo1pcU1Ptue1wDbRqmQxhmBLKMD4ue7Vhx5PTTRsUAEpnjAGE8DY1nZXu3BVh4KCwNNjEpr63RMcg7mqECfEo",
  "key5": "5gugEbfjCpndRvzdqBEy3xezpBzMgUVDe8RAnHk8SrHmBeTT8JPuPKw1dDndUEYRMS4aaVnLgHKyE27Sn3bbpWE9",
  "key6": "3ez2QT5aj74LQpPwq7BLBX6fCkACrZd26YvK97w894TjZ3feUviaNcNKnzHcx2Aee54ZMGxgfEQfAvovEHandMbs",
  "key7": "55RUoD6gNbxY7jLqmgRgmwve8pebJWdYsuKk38P6kkR9JEqG7koKvEyEYhoz4skVsyViYaWNU8qbrNrJDqtodKuH",
  "key8": "4opbDpEUtdbgFjr4ahVMbR1nkcKy6wDf31huT5eGoACdU3wWt3fbE4zxmtiJ28UN8nJ9me2Bww7T9eoee7DtfY5y",
  "key9": "2ngj2bcE7mnG7Nxp5yHoMqw2Qcx8PFYb2EaAWz4DPAKskBSj9T9KiJAtCYwZ36RTaYrM4GKgswwwBgBj7V5ZvoV4",
  "key10": "2cjAqcfnWKjaPAEesAkWgqZ7SywaaLX1F8M7zEtUGqKm8L3g4xDixyCYL3mH4M942oeko9uAPbfkRCGojSy8quEg",
  "key11": "3vYr1CU6dbomJDeJhoZdWUP1zayV8Pvbq2uu6zZAsTPUnQkrqoVtHTZDtiFMkUag758AJs4T3MYdtpnja414fAc3",
  "key12": "1WAYf29G6rNoZgtUpfm5GuhV4y4d6sa8fFmQ9W46b17HZiBTg7jqCcjgBnoEJE917fC37MGP8FaQCW6mo58c6Q7",
  "key13": "3BYH9ajK7NobGJkTQGnsFthaFQMXWqedubk2kgSTKYnBmAzMH8GDjsmVo16a7r6ckPVDrvNiG6B8saMsoUvWTmo9",
  "key14": "4xB3uRuAQGUnRHr5kccX7A6VhmGqhnBt9Vj1zjxy4GmfNiP7nyExb5w4ZRUehNKvBiWNDvPXzXXtWGHyF3L6NbSy",
  "key15": "2zVysgXPk5PYsyTz5ibUqRy1snH84Ck2AhvoBdX9qZ5LiHyXqG1b14hVBkXvpAnpS7FbrikwismGarHNRB2bZbfx",
  "key16": "5syVdcAMgg4JXrFAGoVz7ypvJqKqT3C9qr6Th4PZpZy4iDVicSGAvDKYZsYeXrFTPFSVRyNTENq2Vbcjg3CEmyV7",
  "key17": "2LYxP4o8sENqxbQE4YWEgG7YeGEz4ffr3orHdaTSgoDGnwbqqJ8sQmZjK3ZLckYw7XYmS5ggtogAg852WAPfVLj2",
  "key18": "3Eyemuj9LnZ1PbkSTZEBV4ZzpdADvuR6XKvTaSNGwyCAaNaN9oYbHPzNdeaV3LLZ5Nc58KrbKNwpNBoiCrKWbvJy",
  "key19": "3sGbGxEzQJSeSaSRnCiAhADXxDJRLxYH7VCPKGuqLY6nZHWFCMR8y4EAK5svJtwyau7QqCXBonvb2QXcyRxfBN4L",
  "key20": "4EJUm48A15xu2ZEAo697RmgYhVb67P2TMpruTPHU76jgGoc6ZUU5tsYNsNgV4RdqVpMazSSgF99WrZYepvUnyCjw",
  "key21": "3CWzuWCbcGBPpAazEKeC5WoXiTBDvLFVVFBNpgg1i4VSmiGiN5eSZt5k5neZZLWt77vvUgAHXJGsKVmptnSpoiDa",
  "key22": "3iKTAgrxBNKjkoh2y4Ha6BEDoBMrfWGtryLYafR9PZrcRiEQD1rYJRS4JD89qKyqjs4mfH6w4NJdBZsvQBT9WxQ5",
  "key23": "TS8PDEdfv4nzW2xEJV9jLVte38XvoFryERDbWHgkmt8vAN9Nwt4tqVDSgZQ9vFLpbPRGBkq18B2L41SHpqt3UHC",
  "key24": "AvHmJnZkaWeKMyPg56v9YKUnDCgz7BDu2CjgxBqdybTdktuRWxbvsu2krCRy85oa6s6HSyYUGsH2cWS7dLBoYNH",
  "key25": "4ResD9VALzhzmrXnzDsR9hjwttcENyMiou1Nf8kivxjHHGXABsgAGFwZ6bPA3zxreqhFZW9M8yBCoohDyQ1XXFhJ",
  "key26": "4Gw3NFkwPa5EHu56jSYBH7hAg6S2bjv383h4UEFzGEurRQ3YsBQ4vQpJA15fN5kGmDisYYEZo6iT1BkWQLSbExsP",
  "key27": "DjoFPaKPj8V7kcG8aDQAoT6znLsFftJssJZWjkNaZi1K15JFoAootYVWthzezfSz3mPYSWWPvj8qTkBS2Ca6P4o",
  "key28": "3zKJqXXnuH7Uz5fZpYcbkmWcrGZ4kHDErxZmVBjsewuLrn347K4v4WdrZALANG2GKw9zJdftSXs4iEnGgE6P7k33",
  "key29": "b7D82xikMoW1Jhxk2dyvirLqbTqHVGZNsoGMsr4rJF2RKXkNAn6GAfznUuSg9nWhFDDmywBrHPsHS3vbAxKW3Gz"
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
