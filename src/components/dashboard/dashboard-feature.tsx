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
    "5RGkUoCKsj5811dgcTbDwNyUHNXTGguUoBFLAGTLx1fN5FexbZtuBXL7bG8bag1kWMZqmcmWpCykfYfMeLYvyn4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqzDKFSesD4pbgkY3GaK5UJEW9qT4o7D37wWTxxfZ2857CXfcBmL9pmp9Pkb1MPbJPtb512c18pipgJWJzkUwZN",
  "key1": "2M6QZMsvdgfVFd3W6aQkvJK7BDzX8rt9Z4wWW275H9xQwSFXqhXbsu7PtR9r3Qm5KSwhniVZ5VPTu6A2WB1SRooQ",
  "key2": "2Wfoqr7DjnRVQwkFHa65UUStq6QvXsQ6vc3Cv8w1KFziGpeHfRXEWTfQg4SSkUxbTwCJatWrwJh7Q9BC258MsQGR",
  "key3": "ESytQpN4SyNPb2b7Z3hzsEmJJvS4rvxYjLWT9wbMU26rju1LHLSnxszK19XwC8DEjsh6as1FGPrEuXnaL9hfpd1",
  "key4": "54mWDkiwNKSwfp6bgLKv3fXuccsK8RtWkj7Pf2cFP58gr9QaX7LqY28j2n6diexdqu3E1DaVTp8nK4EGPAds55as",
  "key5": "2nV5Uxv9wAPLV3zTWcJQixDq8q3BRU5DNPkBhgU5EyhKPjS3t2LnSzSRKzhd9iNaAY3WzyWzob7nXEYoXaAovLQb",
  "key6": "3GHDQtcLiiL8iPspVWiP48XuTwBgxUx99xdLJkT38FKyBo9frXfTiBgj1bkFGW79yMBi3LBsf9D5AiN1FKdkxeKu",
  "key7": "4DjDARNeKDRLonhmhB1tFQkkZr9N38d89Jxb66nkY5yNy6g8rqEq9w9WdEps9YEcqh3jjb6K83bZrhGmakr24qkR",
  "key8": "2yFsB5mFikbjDnRbdcFFEwy1FCrWG1Q4F8DwvGRiva6KhJwHXWrFzEC85eUmUTUtZUTLMFnCQ8h3ZiEpLh3EudQP",
  "key9": "cPXuBgJsZqfcam7XqU4jLfYoNMM8aQatAZA6b2hKUobE6Fwpgd1ceCNchwy477qHAqkNn1J787EG63WBL18bBbD",
  "key10": "4ASXLN5oYkjdWxehPEo4zwuKqfCMdPHibwaNUbY9jtRscSrD4hDXagenskxtpNLMnPUYAKEKasD7BfYvDst5Jpnb",
  "key11": "L3QA414xFkMjJyVcLhsMmus7eG4hzRJVh8gV6nypKu4P18HVwQXZ8NMioLvaJ3AQXkPUh7W29oXSRk9n9RMRh4L",
  "key12": "66aReNxykkb4JHdyZG9UhktE2fXY5HZ7HuVy8u9ySiWkXnNaK7FNHpB5F1DzQwWBobjD79bxtcZVMe9LCig6JuUV",
  "key13": "3dFGHBFDyJmA4B2RhYcgAwyNiwfqaJHpbNuY1saJ6f2aBTsySmXxr3C47eeYoQ9yfNM6zXE4DvLPL5tawZywS9Tn",
  "key14": "3g9U9FFMHg6Nq7EH1uKDoBmqp42AkmSzhcjWR5zRYBhVN44xDFsLDrKxcoFm164B2L2jUqJW4jhSyuwHEpywWLYv",
  "key15": "5La4uM7K7sHFS19XgQGkZtVFJLuS6hxfzUG229uMJKJjUbHTyErh3DaK7VU7LiCE3Tr6brPnmNtFXfoS7TRyB4sb",
  "key16": "3i1qSRgzPGYSNVB2JqTLKx2eL7RKZWJCmgQkaLCmNLUAj1SBb76YuUFrJLQd4AazHvetBn1NrA6CvbQMm1XFntqx",
  "key17": "NZWMQjDhp5YgwE4bukiYAzJEvjaVKnKDokyrWDVEqycRNzKKrb1sUcpDg2NS2hraRig6zBs8BqHMhgfoLXjPaGj",
  "key18": "3qyJvqS8AqfmfyhXnAgGrUXMbjyWCncQRnJ3Tn2AJf4omAxBuK2yNonHP8pgx9vfwZQPddai4PfWvTgzSL38hfJi",
  "key19": "48D8oCCTwKyoum4Qs3fHxDbo2tW3PwhrFB7p8d7WgDMo63fTABy9niamTNXBZurGxWXq4LLmKGmZA7BouFNCC2zi",
  "key20": "4WahUiroMAhPKCceh9p1sGguu2SRzS31vK8xQjUARndZwZNpyAfUGAJ5JMRSMJRkCJJXk4zoDXUipo4W2twwXjyH",
  "key21": "5ntE2SMP6rt8Ra4n1Sqb3ySjwje287TzNxUJCuhWwfxowGxyeKDoVH28Q7z1mHffbKY4Hfm3iw5A8bTN84Xbw6ym",
  "key22": "SKYGt2Ta42LyGjuS8KtsPcoqTuQg59GumSPPW7CZJ9YAv6gv7ui9sEAqia2SNAtRiekZZdowEDitLcz97mS8Bcj",
  "key23": "9QdSk9cg9zrqN8rhUfZypd8pw4sSzDsa3ZNZRshudLcUU28yjF2d3zJpBcpN1eopgtAZigMnVYPyaGCiookWAAp",
  "key24": "59QjG98ybVPrA37fnFTvfGS1D2pnoqHhjcjB1uS6NLqzXxZ6g7Nj2kVb9hivfnkAJG9ZyrbWWDmxo5jjUeBzSmgx",
  "key25": "4kqcSEi15S48VGLxWHiEzSbTxGZK4nR5kxRyZG994ZW54DsQVipMmERZuhmrScn6kDpULQZYJBUSAdhS6uze8JAo",
  "key26": "3LSDpAE5tMAiV1EuPC1nbNAuwEG7tquvfLmTwReQNvF4iME7RSMePmZphPYd1a77AVbM6qod6n9oACYTf121CYsM",
  "key27": "4vX3jsbdF8hFrG5pfz35kmuaMkYFGk6K4H7nJn9ZubU6QyEMdycQxURatpwaxADTyqbUETJsS4dn36niiqbdxU9c",
  "key28": "3G8b4Y9c86c9YUaPdnswa4rZVkf29iiNT74wTNFJT8WDE7s3vw9ZaAZ1bTfZABPqyfWbLdoFjAEiJkEeBvzAx26H",
  "key29": "3p2xyr2NYHiDozRWnsQASHjHJJykMHafZ5xD82NxTuQDVsAxp2oLfKoEXQbgCeLPWF2fastLrpnELpgXQEeArqbM",
  "key30": "4y929E7RqPUSvE1BscfpRWcPJSTVyTNTgkBBhCzSSmvDjZTs1DmQScatB1QoRYVzQymDJZyFdW9Z8kbaWmvqFRaF",
  "key31": "4UUXzqSNSQMsybmFTeUDjdp6rZTQkJNXSYcj8SZqSeJeLHs5ZSQX7TnKi7mJXYHedef2TZcE57E83kDf8G64HwJA",
  "key32": "4V3qCwR5n9njjCDRArAKUF1bJukcBipxpF41cASeGGTXinHJTWT2mZXeDQ86FvbCifgGDsvq4Y6SMN1VCZdFPESH",
  "key33": "5eqK4KzpRQ71X9rY5AVx5955sVTV3jzmY9qWi5tz2aiCD4nxf1M52uxc4rDMqsqa9z1UVeKBV7M1zSan6y4LNa6Q",
  "key34": "4pdxaaJeB9DrHkMnUhZE6WmHSHVBNobdZfYqmi2kaKbQTzJ9mvNNDY84Q23hKQ1xguLefZQwgy81MHZ1sTyqBAa2",
  "key35": "5KvX8HkJWLzcrrwZWu2ZsEjPBwzE7gHHw4LZQ2EGRc8L9WgQ24vMPL132p3ZhSKCCYuymhGjSLKPnp5UjSFvqNC9",
  "key36": "4yTtSGH2tbox1Z6jkETBMiowNBWDMokebPN1tzxkJUhP58VAySGcuVRKDTD6so7sj41P813Ksi23n2UUgQKKSmuV",
  "key37": "3YW8CEzZwJnUWhaueANrcUM5tUUgNgrUZfLkKJzETKc619pEwPgA4GvjwRRB9RENrRotzo83ZUdP4bwzGXp5GKxJ",
  "key38": "5SHg4ZdYRRHGAXpG3bRnV5ccGTty6z17ktmSuP5T5wGWzYmccovp72V6yWuAfupnkExdJHA8menG51NaZfSEzd1i",
  "key39": "3U68u3mv8GUfAwvn4sX2ReYzhMAph9oNfVuwCyhD5FeSKj5eteb2d5ggPsHTXaaJty1QtmYstc5eqwWk1LonxHyR",
  "key40": "5o1pewgBinqzor2DSAaNshEC3XdxCrVV4wxfWTU992GhcMHu1uLXWspFdaUd2CYRTBS9WaZSjpkXjStW6W4DN6DG",
  "key41": "55hgPEjGCsKwkeYGsfd6Ui4G6bPa3Gh4ibqQ93bhK46f6FSYTSfuFyuM8TQFytKiQtjqPrfTeoc3gMKpR5pCKwsn",
  "key42": "j7F8g62Rgk4XbTccmeqXzLiRSkRKYuBt1YE4K2HUbXQt3Wr2GX2XbsmJnyj5G9cczYQEsrzDmWwuCPE3LWGmkf4",
  "key43": "5vLwf7BXCpcQWtmDCYxS5rtT5TanGW9U4BWvtTF7LHuoDnp72YtpAmfZFufjYEomR52TQbnm5JJB5kCQwsknrFsq",
  "key44": "5bZXEMFxWjRw24npfg8NCP1gXyvo7SSmd7UjB7eqBe1RRcLFyj7Xp2xLfRJ66VUgvpViG2prtkK5k37konuHBqz5",
  "key45": "3eWgdKv1YEdWqfkE5qJnKdjLWv757M5NWXUYHDtCL4YJMW7Y7SxuPNarcrRfHWFojKWXCTsrrRguWTgKHxfQGcve",
  "key46": "3KdpLqPxHEXq5pYGT6VjDLvv6nAk8b7E7cjX9HnaUN7EXGVV9qtehp7Nuotwjp6UFg3e5yxXjdbeZqT2xgh3HBYa",
  "key47": "58AhCJgWkjPe2UX4m7VHAHTLdCGLfKDKercGxMjeXvu9f4p783VAVE7BAy2pBLfhN4iskiVarXHoxG68ruQDuJ28",
  "key48": "4g2STuPTRBTZ3edrTWcc899KD9YFDVVFm3kB368NMzYzX9daCiLYE4tHdXXUb2YG5C4kihorEFsvfXKpsaTeXvqG"
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
