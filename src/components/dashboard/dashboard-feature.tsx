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
    "3QJxCuHBwqBYRMFJiTncFnF84TNXbjyw73c6Nxwn6SoqHNzGXQHGdL9apquq1YKwGVdgR9SdXz2hsJdHsAcViDr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiQn5dswFysJFxYwyHMcm9UnEehCvEazAdFrUN5iJKeSmvPSaMbfXeqT6Jn25sGPBb4Lk6z9fPUMXvq6Ue9rVtb",
  "key1": "5oYrogfuCzf6SC7auBF9epudLCnWWYivS4d9gtoZEfbSUHFcUWd6Dtwir7788UkqRUDciQL2jBkzXD7eyETKYJVH",
  "key2": "59hjFYH1aXqXFW87XxoNvif8H5MmmwD6MVfjky1xxVNkpCEXN921QsCkkvnYDKJZ1wLZZF1v5XRrw4CmUJPWpERK",
  "key3": "3xDWprwThNxE3Auy3ZUMG1XjXket1w7gzXBSPxLHgb122P9QwGFGpyTY2CW9mHkhe7ZV96tmtqxCXJbbPXT2V3Gg",
  "key4": "37WhXkBiovNks4CuF3z1nbnkN595xjJU1zXW78LHpuuM8hKUuCNkc1whgcvvUq3BXaM8PJjzYWfM9WpSHCKMvNfp",
  "key5": "wbB3yjg9cBDazzgJoYtpU3Dkias8uNcyqLtmAQidZuxjbte3xvkGJHnwq18t29KGN4QtDj24BxS2EEJYS7fi3Cq",
  "key6": "eYWKx4j2cE3tMWRRemGHJPa5czHmyW1BX6g3tRuoskBokR7BozXwnR6LDo9zSTACowpMi7sQLtdjx9FJMrB1buG",
  "key7": "3aTJRr1G3HCKfGR7TXAhaLCPL3wJi9eETffJrQwCxJvLP1YgdR2PQkpMKQNLzX7QKebsx5L66deySPA3juqSqgvG",
  "key8": "2NFbPrRr5vcdaCkS8vY9D8u8EsjxL55SF1fuxBhUGmF7y17LjkLBpobvvRnqNWVfBUP37JZCAnbp5B87CY1dzwcM",
  "key9": "4qcris4PeFMQyEB5bmR2bsFh71QXtwRtmN32pLpL6Ne8zLWXsDin2LNvBDV9dvE7e1AaCeRLAqFrwAJ9azicty7n",
  "key10": "8nRs1fsNJXiJ1KAWQYY7ynyTJeip4i3wnBJKB5C6LyUWvecmBHSbJaa9gC1qpLpBRac7FE3VAXXDBMCcoYqtr6D",
  "key11": "GRWuP8d58QLs1BV6AdZqcgSjzWErvWqQMbYq5jb6GVHqMG6UEbBvXoccHs8tSqToxgAjNHtSD9LFinNh2dtyzrV",
  "key12": "4xKXmMxiAjrQyF8xP7kKNgCs5A1QE3Ags3tWobJoSkXMw93Y9HqhkDtCdgDvJFQLCzQNND8ihfbo4nznmHHizpRG",
  "key13": "2dL9JXi4QDvL5G3UVyif1agMpChKFKGMAezrj9RCCqDa5bEX3ZpvX6Zt1Tc1z3twE53VT9MrzNHqPdLnUXfWwywK",
  "key14": "31Hv8jtVmChZtSLHJVRtwgKK4UpyozKBxAG2LtiVoXidfK9PJMZ42D8BpsMVsDGUo2SR7aCz4LNmocA191RYg6z8",
  "key15": "52r8PCrgAA2k8G4cwQUXZvPJkCQvFsM6w2ai4mmU8KiPasKyvegcPqkvVVcPzvFyvjbRz3FGKgqjG5GDYvXpVj1K",
  "key16": "5h8Ao5JhstR4vQSXGw9QN2kUU25TkyBJtDWfkCKjtxvsktTJcZukMqhfLnUQu5K6ASnmWmJPcgxeTCLM2meF5GFC",
  "key17": "3smejCDwTaeEcqyRgvWYCaZn9rWYWHAu4SvJfsiGHEF4AtFH3xgpnqYB2ipXTho2PakW58w6MoxJSU7z4yJseq56",
  "key18": "2Xjfd97N5c9fBLH1YbbjmHwZ3fx36EybRz8CPdnuFkvZUBLSR9hTQVL9Ft3uja9auuAowPL1y2EYJRRk27zRnFyT",
  "key19": "3SNGqJKgVyMibY2KwFJnDdA39QPM4uiy5PcbFNWuXET8ofN92X1TDLoAdNfCNJx5qDtPjs4NCyhmPJGYeSrE9RxV",
  "key20": "4JLtUe3SE8A4HB9nfYcJfSHttfJ6w9Wd2WaNEW9QZUfunAA5LWnh2yUesysqw6kSDRtJo7P5f5NfBgZQB75WHXpg",
  "key21": "4ABX4LGVXkyLS9oS3kVECKSeCKLXwsrpkEWiYUeHXkg3fZA7zM69cgjTgwY6vpMAMV9HukGbbmiPJyXMHnCgZgj5",
  "key22": "2B1nQWHHsnis2nXvF546vThqPxeyf8W5bxgBdeWanUfLsoo2VQ83ASVH6jXULLYfA4Lzvh7dBv7aDBqfFp55hkA9",
  "key23": "5jUNCnfF18gToY73pWbDaKn6KhJxuyjcVTcpLBmnztH1gdz1ErAekYGeYdK2zjZLSJcVNUsTW4za12Eb8sU9jJBs",
  "key24": "LbEQ5m5NHoVCYZVAsaekgvfbkX9PVTjL2HS8r7HNxTTN7JaVyH6RERKoa3pDaADvhBPE9LwtoME56MwNg3mPExb",
  "key25": "58Y3skmgPxW29yyv8CxAThwdywtX6jMVdxjjrtKsQwRfRA14AH6mEJ4Ecb3UT8xyJXgAcqyyLj5kSPyjZyP4y5i7",
  "key26": "56Eske5pXLeJNi91fRZfm11T2F8TBDnSRVnAewRkXL7G5za6D4czSUJUruSLWEPwn2wjk6GxZezjaQ8ceYuph6zF",
  "key27": "5CX4ujw8MwedV735Zgh1gXVyYPa26Ka8b5vco4WUn44kweJA2UKNVFuXfpwnLbHuamUCauDxw7cYZdQCqTzdeku",
  "key28": "4HZuQpnWiFkPhgPG8Q98KWA9yFfHzPd9mh99oxTouahFNPB7TW4siEEfhzeUFtU6g8hmM1dhdj8CyrjnjZpZJQv6",
  "key29": "uWcUhn3woU1wJmKdF46y7D34h2bKCZJvu3n9ukX3sQGzU9wYGrgqUGBLBLpbDujwoLGyiid7YnwRJHmbxZiqiB4",
  "key30": "22DSj7RYZgNajRvM5w4Wfj4NByjCz6XPhx84gAJBtM9QGvNdLDzmzaVek9XkrnqQhugFxG8E1BmcWNxRvQdFSs6M",
  "key31": "SPSAaLU8n25aZqe1ALYm8anb2LxHTw8iYUxM4auqZ44L526WvECHtT6wf5E55oSyzC9LKT4FwbwHmEQxLy1cc3v",
  "key32": "5DkSatZ2QRWyTFkBJLCTLCXBfX5iZwQv62kEe3fYFU7nSToXkgtu57J5pkaAeqiLCXGkAr6qiZAHnmvekG2X1xsX",
  "key33": "46SH9LxL3wYzNJGvNoJyqX2tiTqpE5P57KzLU86oYMYJaK6S68o35ghTPTDXJh2LyKPkde5vcJz71ioqVhxGhjA5",
  "key34": "2D8rkzrNCFfyKaSBbaj7UvSJpPY1XGRjDmigDCCKqdRzM5WnaRhFQkb994c5EkUrnBHL4FqNaRRx7Hnwd8E2Asbp",
  "key35": "CYZvt38zvhTGibtABbgKwvWA86VwcfUmEHhvKBezVAF72u1ACx6Xe2p68ofFoVioSSh4p81txCR61Q4qHTzehFo",
  "key36": "4ZMipVVu47WhtTwipAnY7dr4WfjmVqgBeXyK6RJteiojPHokeEeJ5y4tmJEPcKXpsSmdtbRU4JXEUE1XMncGSuZK",
  "key37": "4So293qEE5cLJUNhm4SkCTEL95D8AcaoPmbRtiSoKzkKjHbjLzejDTwVLQe6PU5Wc3VXp9VZnb7AUmfh7pQzK77X",
  "key38": "34pPfCZYsJy3XHgZHtV5ZdZD9ApzM1UsfiXyB5tjFjFrZAD9pMh3dGFm6HcoDYi2LZhW84hFiYdskwacHkT5Td4g",
  "key39": "5ShUo8t1iD9Gvmf3L626Re65GZHTr4nBoxPMkNEzFTXPrAVxWUX5UGN4NiZZuJhaqB2s1vyTFJ54876goEsR1iUW",
  "key40": "LKDmWbqrV2QpKyDSTLBa4QJR7f68jRRmhJs2AJUSQ3bzzNVVBANizskxwJYdz4Hbr8G1upeiE9honFW1Y5x4fYf"
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
