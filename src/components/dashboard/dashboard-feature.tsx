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
    "5JkyCzZNQXFhtPAyZkPA88f7F56YQUrHNwe4RNMc5K8JREx7Wcd7xHpBGiDTbp85d1UZWEkNLqk5iP4bNhXGsaWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HeTByF7CZeY9JVmMhfRrATpZkiXzemppLPT5Yc3VSRo9VvXsAwSB2evk8awsEba4dq1sjGfCyZegenC3Yy3D84g",
  "key1": "4imWRzYVsMuy1jtNFWMbUvkxDNqej9bxWUAPrUrLvj9qBvSgiWQhRDSmDm1sRgTEgDyoGQBpMuXQEzppoVBsAWgk",
  "key2": "3XJ1njQGpbSHTsUDnPx2Xp22C8L5ioFVdq6SL7i5dLGAdsbDhpQTVj9mGfVh1YKeZXoSSr9Mu9X12HMYVkfke5kW",
  "key3": "26idgUMMrKf6sJvFzSg8DYeBTVWFuGynj6kAxHd4uaJb8iRNsgNDGmkzS9J1YUWPM8gaRLT1HiA1mEbv2ZKdQ3up",
  "key4": "5wz9gPXc8ZQPx3sqUpyEZVCyrPw8mbg66jG9BGiarRnojq8Ynjx82mX2h9x9AnPoTyCgzf6wSyLWJgAXRd2XndUU",
  "key5": "4fNAwBS9UnPXt5wBwyiZiBbYSm56ws7CxdX4k6Y4jsAVNr79yrYyvnsj7SfWJA9wJvpGfdktiewt32wdbCPHoUfp",
  "key6": "Wxw95ng2TA443PAiT1uFTGygFEDpfcnes1sTexrHkVB7fyFoa7rdzfy6FonSjwRrmAAkR49dETess5v51CpFapD",
  "key7": "2FCL4i1iCgfjYDvPtP4u4iYSfH3KAV3LEfiz5dpNnZRMwJPkqyqyxWVS2io9pn1KBz2aYp5KiMNTHwUhDEUbfz2o",
  "key8": "3FDNecFi84iCjX3iHab1AM9rLsQZDWeWFrAFV1kaDipnYnTd6363R24LXLrfesHmmXMwdkbfhvfp2YsS9cGJ5D4G",
  "key9": "37eazHKhYHNmjNn4q55jGf5EfCUunGNrTgB8KZw9TNoR6P2eFVGLVNTHzQmM7DH5cZSrdEqBZpWaF6vUrjBw28XG",
  "key10": "2VcEgdTBvk4ZqHLtbBFezrtR6L9yFhD3NMcsgayQ8MCcHJikXnfeQpQWoLeuVjQZ5ZnWvkP8m1hEgDvNEuYxGJsL",
  "key11": "3j4PQopFsqMhL3z2gKMgGBdW8Qn7evPDMcpek7L9eUrCk4w1mRFm1LFhN4C65t9e5FZiVSuvedcjqp59iyqdBQ5N",
  "key12": "AAwYZKeFcAPGTncBGrAsYcHU7zJ1WoMeEKBJhmYmDL76icBGPXmQ6dSaRjYGR2T9KxUkXvPn7TeCpiVfntsbhYE",
  "key13": "54rWF4vHBQwwobdqm9oF58M68yBvNW3dduKrHbC59Hn2exGTzKfCqYCiVxQ3g8bax26MRgPdPUVam9U17pfjmGND",
  "key14": "58gECiB8G3L2uiAwtDGr6VoL9wcNxJVDarSwdAFJyzDEL6JBogNy5UJAQrX6e2jt9SDhbBh7QpT5MD5noWHY6f3d",
  "key15": "4mDXYgHVA8HXnUdRDCRVDqkxU6uCmph7nc88UJ3yU9mo9BwhzTDbBYM6ntkF4hLoLEYeAspaFwGS9YFn7ejaGPSW",
  "key16": "3b2ugcx5o7b3DACDEFzUE7zruHVsjYaDV5SteQFU1VyET7dLjyJPfHabe6UFpa4vPAz7HbU6v5NzCrYtzootVQU3",
  "key17": "5RBqEs3QenHnfNk5zJC9wWhrv5CTdL2c8bhXhRP86pCr17Z7VXsRoLLPhkB9fuyWAWRoNRpk62UT1KcZwf8Pjjxx",
  "key18": "2kZu6EWb5grZ7BhcALUtRH5DiUAHrg7QKcNdPZ5b9m4rPiAXEEma7rWe6SZ4PZxGCDr4Exp9TV3q1ScCdqi6LPyn",
  "key19": "smtEUEejoFb9xMcFDqmSYiYphtveykNPYE5T5K5GXUEFc5CkcCpD2U1CcCQuaHEDXqWVSUhqEvukG1Q5XVK2fzs",
  "key20": "3J876PaiQaKrGyUvnUj576MLUebJA57ji2LVftw4Ng161YjJN5QpJR5xv4JBznn3omZwNLdiqcuxpTnuHnAve6qB",
  "key21": "2QPNF6tYcMo4QoxHWfANGsiXPJRuUba7rGUAKG63dcbxW3Cqjqv7k2FDhDsbvrZbkRDsnacWZJ7fLBahsLyR6JAY",
  "key22": "4iqCuTCmrkaKxySDYoaTHPsCzDxdmFjcPMds7UYsd5mTvbMJSWTcFv7vMWdZS4GVhwQDiHJSHxMBknretFhkZYht",
  "key23": "5SUvpdsFT8bE95oUkEq9B3E4pJxq7zfUou42W1jJY3R4Q79EWBcUeqf2CTW9vSSYfWgdjW4RwQ2tvn8HirY4GfKy",
  "key24": "38jfM8qW3vZnnxefspMtEpRsCrJKRwYuvSXzHB5gWq6HUueP9Qi3UbRwpoBKGXRxeCbmqpubJX1NnNDxnZc9ivSs",
  "key25": "4upcPUxDvoW1GVC82vHQFEeguNevZhbNik2QCWuen7tpr7Gka7HUyASJWfAgKqrHVr8kanrQnTqS8uBZBwfYhzgj",
  "key26": "51BTJzXHpch4gKEAtDwULRhgbo1Y9ja8TVjDTSi51vYCe1MtMp6kUwieyDWdfMJeXt7CFamWzXxrinndsrBVqMbx",
  "key27": "39jWxFzaWkYDmbG2ZTesfQ52RLvPCav33vmqdm98EziH8dAhuoEu248xHZMCHvaZxBp3vukqR27ZFdukkTsa2B3u",
  "key28": "216NULVMy582vfVTU4qAMeFSsWfssUqYbAikm4Qoh5FLGY67ng4ddNQRpxLVZ2UjQBdRfDfPzzwP27nTt34jVtss",
  "key29": "6F7yoCGvjKyAV5wXrxd4FZZ596m2ouK2ncF3zJ1eMWAC93yeJ6eUXZJ2TzvVt88R4z16w61JjurzCefGpjeBYsV",
  "key30": "5UCVAeeKYYkuMRDCUQt9N9Jbv9hZSoUAFshh8bB4g2toiAGBxEqdrPgxZthSKJ72CaoXsDZHKt9aVFGMLW6FVLrE",
  "key31": "3ynfMA2EjYuZMMbouJnceauP8pHcnuTppDq9tBmncij4M23CfywnDeniwJBAbxhdxLmcqm9WyWFFbB138fZAjAw9",
  "key32": "Szh1hmMsFZxUCCHw6j94kDDd3yyZ4CLCoMsQ3Rj6EYF9c8vuu9bCvH2EbkHSxcejN16bbVgn415szBAzfCF9qT8",
  "key33": "4PNwgHLjDbquqmC7Mys9C9WyXLcizAjgjjNqTRw4cqFojec6u5xhgwvv92Zmw6oDN3SZxSWdGXEr97TDLAHhahYh",
  "key34": "cQC6GSC6p6UYeHsA6bBcCqQqUGeqGWqhmq3VHF7KVXV5Y6qzaJAqioMH8Snv2tyBTJ7ReXVSgpZv9eBNUtV6u1N",
  "key35": "83WTvyj1WbLULKJaNUbdLDiUM92SGPQqnkc2znqgtRaKVR9n98KidQaG9YF5xs9gpL8Zh9FYphhd6hvJZ1wpiHT",
  "key36": "5mBvnj94ixcHM3vHdMwMv7maagXyK9XKwBDYmYQiheoaQv5tyV6UnCqA9KmR6LhdYPMvkmSFmq8TnMgw674jaCkx",
  "key37": "2fkYJHPoqhHRTMhEGBGWYBGD5heP7sC4TnqrSYuYAA896BK7nqeHu42FDfZMHEGQJSf3aeHSZMZuNozmbkStTCm9",
  "key38": "bG48n4dLLP4UbekM6w1gBVbSEZbUB2Swua2zFA7jqBR3STSDbWP4RudowJa1rwbhVQ3MegePwmdzapwHVk3o3mw",
  "key39": "4NpvQAjA3nqSd8i1nFnu8t9PudKsyNPrbx6oeEkn17XQMKnrhudVyaJU9DrU5rp1MFDJa5dZEgi4GJFZ9Pr4p94t",
  "key40": "5ggXaPqicx4u4Ez9JYZ2Mr6sSjgAP8YxmBsXobXgCjSj9iYC4CUEgwVDxZ2u4NJTsbnWzwHYMjP9TMYkVpNeUjcc",
  "key41": "5EDFMTUQWbegWysKdqg3c9KrDFmhXdeYdPXmM93oPVmDUFd5NN9TrJWyz3TtFLnmWuWWhNMpZR2PSgnQsJhLXAaF",
  "key42": "64qRE9ZP1yUsgXsAAkzp6NsQSqWpu9Z5Nc2yj5rkyCtyaVyfwGCC7GWVN3u9VrA36LPz2QXcF6yRQi2YvfnH5dpw",
  "key43": "4g5G8PsvkmhiNt3gtcf64hno25QQFjgVj1qzTM61JHkL6BtyhDLJMfscNe5uet944cfJGFDKkGhAk5evDhpReMQs",
  "key44": "3hgQC9UoDYaofory1ZXAXKBSW2wg9aJVVwrqQWh3JmDfw95R2mcQWewA1ywcuPJwsZqG76pSiv6bpZuEweoaqzzC"
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
