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
    "3ebEFjJzcEgxe9uiwQjzvqGKsBTGBYUVhXhk5q9G89o2JNDTyMBS6UrGxNiivQhZf8C8HQua2Lx7MWKgxzWfApyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mut7w4S1pBPh9FLjCKMbt6og5PLjUxgZ5WFMZZD5xjM9jxc8fPS9s9DhrUNTuzn96vBoZQHQsrdeCkoG3mqxVMq",
  "key1": "5Ewfci54VnxHwtZYtK2CrTWySp68nhUxtEWd95qggmVDHNBzC8ZtXtToUxWQyAMPhrEJDqLAdjCBbBEf91UKtHr6",
  "key2": "2rBBKxPy9HpA56Lx63YYTPJE246zvBuYdAX9ZCHxwAkDbeEYeP8wKQMTpRsyfQh2kWuzAApeYLkKK5Khk9M6cHYT",
  "key3": "3nyhS4Gwguw7UwrnmuCD7pxzurfW1d7rubfLGgcN3LssUbAN8FgMTo8E3d71GFadwRuSpYCsizbUnbXk6cMTES3T",
  "key4": "HQSB49qbTX1A86KeMC24fQvWXU8EQP7Bw1AFzjVCMXQFusLpFqraAfeaYgnmLofboiZBv3ooc31j4a1jGSLx3ee",
  "key5": "5UwTBuGpDmZ3Tqf6PTvtMkfuEmG6ztdvSLMCb2pvKKhjhXcbpN8CKtc6VRupfi1drHK92ZN31zQs5GMnR5tSoG3A",
  "key6": "r8PzyrkqiMzJhQQyhbShMpX2UJqKQJToanmvcE5YrH3vZB4XTdyBXSSGXeHQDgNpomy9zgeZbFS9jB3aPq6qRdm",
  "key7": "4uaE6t9b1drofT4s2MprnU47m9jHCosABF1kE1HUS8v6nyTk2Rm9uEupZVhUBnygzWWHkjzQq84YJt3dCHsMBwsx",
  "key8": "2GgrFyewVNmyVvZs16D58pSqePVD9LxSSH1vYLUVTY6QrsK4niqE5UCEkBy2kuqpmQzndLd6swazQb8FE7VK9PQe",
  "key9": "3LoAQ8noB8VsfjitPi3zUQTAhwCLVMsN8YhrYWLqPnkqX29wnLtYwRYcArPi3hvP1V4V6eh9sYB1n4B4fqMMpZyL",
  "key10": "5o2LQJ2G37DW1C74jUbW5jye77DBXj4x733ndpSMARoFkgZU1K6Fa2VgaHpYn7o3GxcsKALq8XEkR2m4w7pHk37n",
  "key11": "3vShydeYmWSwScCqJNwedcpKxaoHsCYpNqCeHjszKsosA7oamZU3wQ7fA718vtiKcPeA4kCxY574gG9swowD5BHh",
  "key12": "C7fSXZfSpZyuxirmLA8n3cSZGdfTjweTnaephc6CbLjMVBvr5KgH69Pp2YbbnHVB6e2yDgE42iU91CgEFZUAuAR",
  "key13": "4CM6pCKPQFm48b43GSbyaHC79eckeV7BeyYcQCTKNe4dfSH9TjFgeht4PsR8X76k9HLkHV4aWjrXUa3ovga4HoSh",
  "key14": "4Tn3XRbrKTgQkbkxeLAjnTjQBWQrWUhzSW38mhKJavMMjKk9yHXfqNV8drdi6HtGLtSkFjLr7vGM7izcaWgLC8Zn",
  "key15": "L2Ez51AGSB8fhspmw5CQ6Vtc76rtqYv8t3KYG4JadoHHvxb2Xvw6GQhbyNHjBrUFN3hpvFCyy6rdk58nCrCjBJR",
  "key16": "4XaKTAbyDB2hfjVTLHf5MJh8X9N9uubg8Msg9kA4thrqp147LmJDuUhC2SqrrASPLc9KuohpbEApxwRE2zdVJjr7",
  "key17": "3TE6TBr18BodhSQD3ThDdEhqSb36wVyFhcTD294mvjjB3Xv9bW9PvzEh1AUVUhNzQ7XT4KDDJSzsySf8L46rcczx",
  "key18": "5mPXszcJjnEzzQ2fLsEwq9GwZfiXXRZdUfBiykBgLrPHQhboqeXJG8D7mm3owtWVb7nntysiQEn7kHJHvmEqwJxp",
  "key19": "5kJ5RpCSESvSiP6DpeKt8NmF3csmTTCfn23EnAzCdQWCbrT7kL7KktNFkpEnLppptzT7RK6eQD5NZyx1Pec7BFJk",
  "key20": "4TW2ohsGVTxParmiyoT2WC3Z7iB6vMdNF6Fdr8Nb23oriE5zo1xfLY1JjqKvL8d3MmcKMazh1V3zqqitM1nyJQFb",
  "key21": "4KcrPzAuk6t9zPvwzWJjnCmkjJdW385tupKUVD6cW7t9S5kG5niBAz3H8bDHXkNVg2wdYnfHiGbSoZK3AByCTaJa",
  "key22": "4kgxijibB13H3pqK1uwJEsWDYxMyzVmKnnqbRUFm8KxV8YdxwMhJ3fezBjMntATCnt1bZsrvpFrHrd6D3PXXZf4G",
  "key23": "4PNCsZ4Moy8y1Jomsft7w986wrU3nDnjrRbSZZodi3SvpjeFfxKWEJzz6xgc9UcyB8Sg9MC1ouHBwXZLNbsNoF82",
  "key24": "5XYqcShrw91VX6wRhHBode3h4ox6AeHdkG5FeiKcDzTYo9VThhEndwUGnH6Vu8R1XgWhsXtCXjgurC22g6GAnah",
  "key25": "4JY88dg8qwqYAwgDSnSS9SoA455DiMwb1H7tDQ8nM4hbupAeMyAkZJ1P4UNvMELzA9t7bazzENqCp8J3c1m9eepk",
  "key26": "4bHYXXVW9s3CSs4Yi4vKzMb55iML9iNsirVuAqBVcCM9S1FfV435zW11XUxocMUGfs9a2grE8E8q5ajL7gUZACVv",
  "key27": "5djM5fucLwrj7tHpuNCH61UuBraJppRzSvDTwNps6oqK7hifJ9UbC7291TRFrH4SbNTMrazHPjSpCXBkgzrAD7A2",
  "key28": "2T687PvWCcZRBUYedWBKcuwqfHro1vMnHthDKH1ACkyRxkRNouPDwZyLRMdAVNcuZdHXWaEpMegPu8gQQ9dVNyTU",
  "key29": "4zmD6ZCX1G9fJ845gTJwVXqsL26jZfAbG75v2JiSUWXXzQictksr1DJNenFKsB6fct3NAKn2oaGqxzUCQ9oHPpd6",
  "key30": "5TTTcE1H82qN48yCHBPz2cpwEdsAKqUJ6ijEt24CTonEDmZV7vgCU3uY6SrApCeRvxvnpPiLJdk3MXq3XqK9n3or",
  "key31": "3T9UsqQwLd4Gjt23JLrVmBXxYMUdHgKAcejWkueXv8RH6UV7nMa1yCZdMCyQf7MoTHVuvJ2JG1MWowAvjvSdKaDv",
  "key32": "XPegpCQjxdto1hf38CMHHWS4e26Goo8NHbjP33YZsLgKfhH3V9DByVjLCQG5uKRsS9P87XBZLf64QcwFeUULLEr",
  "key33": "WxQ6SRmoiFYJCaXzD8K8iiC2Hs76ivFKFWfCZxJnCjeWF78MCfgKZHTJeoAYLtQxCSRphm93MKRLmbGDPivh6Hw",
  "key34": "3c46g5oDQrKKdGT57xs9G1xiGRy78HUUTCzKNBehzsGqFpCeTmtWJLTfKkUNjXSYUsXVon9dKm5JvkcBpnWJLo5K",
  "key35": "3toy1YKHt26DJ4tE9GPU71JmtE7mbNXi8bc6DNuKcA1pxm2UDwjYFxAQ1XzB7tRLBtCUazuuNou5rCizRVozx4VT",
  "key36": "5QUTDujyT7Zxu2hWXJKqkEBL2KgDRhhphcVxmJuvhrtyaSEcxK6R7BCcapcUBrCUW9g7CXP3VauXRGY4DAhCTL2B",
  "key37": "PWwGiWWjgMbaao3N7rK1pFGuCwaWLYcgPphH1wG3ijrfQ281Xn94xBMSbtmdGd3trhwpu2JdDx8E3mDJhV2UY7G",
  "key38": "4cmWMyHpZhU36PaJCQrVKMg9NUEMM8huGDEQFqQKNsu74z46zjWfC8sWmiu1xnXzCMZeKR7jnBSB9zgQU7mboCQH",
  "key39": "3EdHe7inDd3GKecm5pSKioVCiTX9hkSLVKv1r2uyLoyhJYJzrZgkYgjD5sMomcsHeBRMLKY5JpCvjT3SaBnQzT52",
  "key40": "i9LfhFiMVdcWZppTKbyVAaapBBSqCH9y8BYARH7QUqg1dKF7vqRBZTsV4VmjTMdtb2bAGYq4cDDZgf2eqjSQ2ve",
  "key41": "4uxzKKd2qFRURMjpYrC3kGVjqMQQUNhF31A8tuHSzPPU6ea3BLjN3vV7AmR7FJQYe266eV7nrSXNEB3r74DvSVRi",
  "key42": "4TNat9BwyZNgxrHMtzpS3ndankac1h6B1zxRz3WPgjtEz2FfxQnqLa9k2VGAQwWzsDnj4saHCdamvoGPYHutqrRK",
  "key43": "5P7RscUiChZaXA5Q44LE3QrCQaUqocAd61nFY6eDNjig2ZUEhG3th9687vjmYwDp6LMdPMDWoAd1v1w6ke3TMJsX",
  "key44": "4qMTrCvc6sc2DoRAu8aCQxV5aJLY3VksTnJqBqcGxyKfMAYeyLoQxppDpEoNtt3WFtWLtRpisGAev3PkxL2aQAGP",
  "key45": "44JuoujTUR6TzkXSAfhfunnga87XSUVgiSBsRLRnpWL3H3zCaueYjVB2wpb7QB9fXB5Xkd4QxfMe7DWNKiTJ9ent",
  "key46": "ePekRvwyJhEza91Zn1vignfhQyaJEn1kWEAbYRh6iud2JfUFeDwVobHVv81y3x1t6yEbDUbCfk7b6uiX64dkSNv",
  "key47": "3NjRE6wbJgxCLyZ7mDFAJhyAd5kGjMBHWKkBoXMviqRoFKo47d3XcDYmgJweFQ5q5tzQEV7Ent6djb8Kz4J6Ab7E",
  "key48": "3bVFX3T68r5UWnPC9mmX6GLZE4MAc9AcJaEh2AKUgbWAobEfeBvYcoMyvZpUtvEuD4wFSCPKJnNPGdzezK8xarSd"
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
