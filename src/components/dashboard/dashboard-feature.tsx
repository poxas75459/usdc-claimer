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
    "34PAiZfTiAFc26f6rMGQ8MkRXNcReq6Bxs7LYHuG69MbWuXE6EQ4mUhe9nDY2t1gURa4PJLUo8wfumdMVUQfiPUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZiqEq1rNKw3Ny3wt1RbE8RbxRmmQVcrrDjvWjhKKxYEs67qTcu7dFwwTE7tU5ncnAAbMQgH32fTq3ZTRB2jTU35",
  "key1": "3K8dhhSmYCwrdetYNceGL83jPc2BbaN5W2YS9YRfctDZ9YMwi6oDa8RFj2HNV2CikXPMZUKDaSqQECeK6xsbiRzC",
  "key2": "2k1DLb2L5ppxJPvVVtjyj5bPyJnoqRTJDbCHwCCrZonbfeuM9a8iEDUcUsiyfPwdsRpEVqF3BziZWQ3gKdyBaVuH",
  "key3": "46Cz7AJU9GKTbiJBKg91kMsFc3NdRhQEX7tCyecrMYUXCtYZDysdaXaPkz8nqFS5Rqd1oNybAVF3UngGSmA7Utex",
  "key4": "5HkjkADeWXjT8Pdqp6QVcmLq9fCEfVcS4xKgCfvUznUbdQSts4YjH5FNsnkAd4q8CkHcuFEBs3sTDpRLqgtuNQgq",
  "key5": "4NBeccKnuWrzmjSz13dX4ER2aGro4n6WqkoFoKMZ6qJgRejrkc3zNcYfqUhzSsMfe63zvsbbd6UrePQZCF2UrWLx",
  "key6": "66S4P9sQGT3Xyxb7FcnyYJ7JaXZYsnc5TMQLGQm9NQiVAbZEXP2UGmpLEMG47A3BJSrPzBbqsaA61b6YFRGMvqdE",
  "key7": "2vanmt45PH3PTewjiASccahHLQsh3MpyUeGpN8JwPguqfaZVQ2U56dmpLCpHApSyvaX7cide7P885JVGXbwxHdAG",
  "key8": "2Tdbar22T5a9byKutjj9VKVj8TS97XFJLNmWiVoR62CUhXYysZAqP7ZQotcacmgEz4hbgRSt29bExqJ2DKSPY8hx",
  "key9": "6y5xLZYPAZBmyXFx8YBqUwuK7WQD6MRvsjNnE4QvAuzRHMXCauS351cWcm1YoYMm7E7HVNZjURrhjK9c46975ms",
  "key10": "6qgSnCgJSk4SujWSswKfYrHwiMtBAkhBXMMuLkgZhUxBJqJSmSqwLjXCRoHC6dRHBP4aVy8HRdKA5NFGyorqTLT",
  "key11": "4ZrVYbAFyAfRZoT2pDu5S7JdHgFVbXVDw7AC1bpNbLd122BsKD2KKM3fFAnHHMCiqNKUBG7eTjTDynoEYB5Y5QkF",
  "key12": "5hbrtiZZDM2YfvZ2b23G7g7erT41iSiZpnNFUN77CgitQRSWarTYBNhzjL7wKP1Ap28V2JHu1z6j6v5DyukdNpZ4",
  "key13": "4mpinM7Mpy1hjrE994Qi7KXiY4ao4s2a7p2wGRZYqiHbPkjjMYFCDVR2oWBotiNjqVCj12u22VV4YDPjigspiVGE",
  "key14": "59F7vxDwtYooyJdxx3H8j2vmk17XMSHodB8AKmVhibXRwWrscyPgdSyVRYBmbgTffD5DZYYTiSca57RGra6QAsSy",
  "key15": "42XTSifFDLDT7wXJX6UCU9it7VjCNRSi3zpX9ybjdnESX29ARhgcNF2BHE7qQ6ZoRLtY46NKYVJJUnx6B8rW3WuL",
  "key16": "3YLDRcR9fjM8HneE8LMjEyfBxLgbpYpJnJymFCzNjg6ciKyGLRXYdkVyn2QLt3YjCAnnD9XgGQta1nHxV5cfzJwK",
  "key17": "4x6jfzrKg6pxmWq2iQsfMTk7dgUhzWZjjDmN4ibG6wXm7W1nAVLZw89aBaMPQMUBWc1snEJ8gPmcEe6g3184Fk6t",
  "key18": "3UdpfzxrGXgLZ8bg8HCtrV8Mf1ENzWKsceHxTtDThiznB26NVyTzoCS4YwqDsX3zefmpAjx1jCunotmjrmxvNR2n",
  "key19": "2N6vRS5anXEXq4ReshmuVhU8pYFGtmnEzProPbyQjCviQh8ZLFKNtM3WPgYApTCHUZfNjCtggGuc9RePUka8pd7v",
  "key20": "2jznsisAhTG1wBug8G9ohaYz9qDRg25xigY5mZxcq1AN7Ljtc666pjCEHtKbPM5peHxsE4X9qCu2LLuu43MLKb7N",
  "key21": "23HNh82mmLT5g7pr8bZsLu6xo5xmPQfyHUR7kZAfmLEwvNPJWnXiB9P2KkxuAY6Juo8wkvQTizQzvEztTKm5wAvm",
  "key22": "5FYNWXeSEPm3xFe8WEYG4skip7kBotGhFdvdVBkBNZrhVtR7XLfxXz4LwUHFhMVvuduYxAEvh31evvoQ3twao3tp",
  "key23": "3TSF3H6PtTVCxBiTH4P48pvYKT2nBVGiE65NGuFGBhXfS9DP691dHht3RLAbg3M7qJmtLcJzXm6Z9B1yFwQ3sM4m",
  "key24": "2YWhMv9T5cqs6NpBfKUqgktArALS9KMZo3itKQER9y9RrXGZGU3UczpYVBNdAurkzQPG6iCh54eh43eskfrXaUHE",
  "key25": "5Zf1Y4TVQjpxAioHp3Lfx5xG8dgANnVU3Akpsoib6Nnu4nrL5Le82ZAcWYHj8WzBNrRT68ZVdm4H6ogL6rbYFa3j",
  "key26": "3wDx3gz3U4q6bSVrm364NGVkJuMDtuAfVBNfMm4EcNTsQm5LSjVYGFtVmZ1GMBBafn7XdRqQ9EcKkprz3BZb2Z7d",
  "key27": "3oK9r9AjBzpDTiJpXmdfnxHGvRYHpd8RTgC2TmGiyP9n1pBmP2EEmCAD8AaE7kLDnWTh6QAphexg6ANNh7cDmArz",
  "key28": "5dNMTs4CmSEdpLkz7t5VECXwjx1HfxSmBgJ2SDLkWvQbVyKtPk3GUyg1DUukEyaGbCW6qS18oogsjfd85A6949ff",
  "key29": "62dTH3vYepej9yXxmCLWMFkRZi7SiZak3kyNdw4d7o6a76wwkm1fQX4NDGY49C1xYpxygW8mZWkxgU2Z7d61ivuH",
  "key30": "5UFBqziNMz7CHpc1juM2VBGkrY4hykc65654T1jJaJzPjAGkA2YU2aQR9K1kLkpAgQyPVBFayfowzYKxacHd3hGZ",
  "key31": "3AvU8UZeHipqohofiks4M3cz3zswXtGHgrBaCC43yUsqEpsTbYaVU73MZ3Zxs3y6mwxZXQn2tkLrr5dVkqhC2uir",
  "key32": "uyXfBsYhyczRzui4ysjcH5EuCxfFhAjdvGPAN5YX2jWvSBMtGUsoYb6JKudj8zs3TbvoSUWjeLUJpDyBN48ob9i",
  "key33": "48EPoeSrrhCoaAwqLMXiFwGGBkY9SgLHSRbXTBeX2uq9SbT85H4T1tqWu1hLvBXF7Ru2h8MKvb7UF54iduvma9rV",
  "key34": "5Guq9mYEaM1SqUQtw7G7GLM1rxs2sgVodn8U1rFcAo19hU87uL2qiSzzVrcPd4k9EYGtkUpCnpp8XsYz8zNaVU2c",
  "key35": "ALnzdHYPAjVTixDdFHihFTwYe6xZzfaiufiJ6QStNyj7SWhbUbjtkMbR4K6pTeQYfcGydPCevjkfWW1tFtV1oPv",
  "key36": "42R8wfjZwSGpk3rNMnZrNAPSAiM1fYCtFFvydWpfXAPbf7Td2XC688uRdjZRKLWPyK1R2SwrQyzMxFQj2HiiVv5j",
  "key37": "2Noyq4tkwbYWcFcy1KQ9mfYDUP2o81eVgvmPHhFV5z3pc6KmiY8RDZ24ohFyAQ6upNUzEVTYXuWJTfUSV9DwKUc1",
  "key38": "3dsTakouprtjizseCtDQrYnEu5fyJyCsk27UmbNJYUDrNCVbydJYeTDeQtZYviED1ZDaQkZzccQT5XyAgj3RBGkB",
  "key39": "4i3Fo4aywPxduEHUSYCt2bvSHiARn4C3SzfTT5ew3BB1BV3raiMRiiAaXxGucknWtwwxD5P6hfaZA8cGGbZAtj7E",
  "key40": "J4Nx5mDnqm2koRWuRNdNQ9KtFiFH4BmnG4fUbEtPwr69PiZRbY7U8KpFjitLXmeSKSfZLvvftU1JEW1aDy2obNy",
  "key41": "o1d4Zq2ZUEip5cmE4vQnNezn5C6grPTbxBwMwK6XmAgoNnwccfRJjLsKShZfJE29cAp31mwr9uCkn2z8Xe4RgKi",
  "key42": "3PBiF5DMKU9WPdpKveoK7Z3L6fzmaamcNMiyCMJ8eNZBBjyTmNF72n8XCKUgoZFd6v1TWCHh9AY463vyrwHHNmHG",
  "key43": "4mv4zopmeYoYMYjM4ws7RNDwRi7UaxmD13ngk6BkUUVLN6BVJw8Q6o4xPHxJMGy7pa7dmC5zknzopaxkkSQLoMRn",
  "key44": "4cN8BrnSqYMSUzuAhgxmXnLYJ9UMFAi4wYy6y89toY4zFPgKZYcDdwppvkhwHzu2gF9DMerWFo7bg6hW5rcRe6md"
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
