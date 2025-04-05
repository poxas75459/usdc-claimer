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
    "3u6n6ST3eJ9JiccWhKToNm4QQ5N7c9toudyYMvNQQLUVePDRhfKA8kk9YkEMgkLYutL6LYHnVuhuUU3z64ungJDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwcV8EkRyasNYCPinWGvnhgZfLboZjuQt2gAHcwnE2bAipXuviiQRktELjudNt9pc9AGZpBjpqwfjpGpqfj5dNR",
  "key1": "5yW4BMH4WqzdPH5xxjcKFiCKNs8BMANAJ6zDeM9a46kbnEZG8VNMnMw2cCTT3vtFtEgcSs2zyaebkuHMmLuNNxnD",
  "key2": "5vo9KT6bHPyvHmyW8HXGbizJZAiA46fQWWEJySaaRDvvjVPPJ4z5kM9zJoABuGqSvXsxa8Z2Umjpjg4aZS6fugb2",
  "key3": "49UUu9JYbTZAczXLzLJCkgAk8ZqtiX5TZkqe8ni8yDMYsmyXXpinXnC9jzZJADpNACi4t4tMFTv2kixUPZA7nD4q",
  "key4": "2nswJP4YQxUWWu7mwHfa8i8HWyo47uLpnKgpwP4Z12dBmBevmZ5JUrb5xmBHrvmR6z4rY4x5Bg9LptQQBnfFSU5q",
  "key5": "A8ny1DuucX1gfW7jZkFckNAtCYkfzZx9ZpZfMX2Tv9CreZnSU4jG7ta5zD76ZFecJ58d2WiWFwkeAEvnHKqGvu4",
  "key6": "3NFv5gBfBocL94HjZ6UrtKavN4zQC8HQ2jcdgxXXY5VXak8RP4BUtg1WmXqDgAjeTwNKLT8jxr8phFXrt8C7Aodg",
  "key7": "n66bt1YfsWxjFxopnZADq3M6tqgX77gwJgBUh9RTppWMjHYUePYp4zsLN9iSAnSWtbMgAZFY1UEScgyeevCGLUM",
  "key8": "5j1m5gFZ3hryJ71iET9vL2Kn41UjJbnt864HicjD3nZbSkdUs5Tjs6c45MPwJvc2vkuQHdBTfgEjHs1YjfuKM8ha",
  "key9": "38iC7BbQ3kiGExN1fYLZ7jZ1PLfp8UFEyJMaFDCfCPEJMGeJxfuspW6pcJX2KEZpt2A8D7pmWLW7TrWGZdht5K6t",
  "key10": "4SjDyfY6nuF7sKRkvuJyzWZ3ysTeFDD3oH4jnEnUFsshFegCMjjswVXNSz5rxqCBNuoVKfEYHzbhXbHVX5pWLgrz",
  "key11": "2n5QqpbqUWaiUwVAerAQzNM32okMvwsjWXNPEf9iteEW6rwPwH3AyoutjfQEjWUucXpUHBeKDJSh8WzPwwKL9onp",
  "key12": "4hGYQpWsRnXsRedu5vsn91k1BqCcMGAuZUT55MmDeptDhy7Zpu631Bec41374JQ9ECA7me7BXmpRo3ryL18YoEKd",
  "key13": "MV568xfSmJXGJx4bVmRvk4uT3viFc6rftNfXYfE7oeFh75da3KucnGvCeHR9u1M4gywy3vk1UMbMyafFD4w4m3b",
  "key14": "x1Xuy9ZLK532BpDTKUKJfd2jcfJmCDniQQVRBnaTmztxS1jsnGL9mayDn1FCp7zdRtjLg2MCJhLcqWTg27USZMK",
  "key15": "5qybFVMcUtrFfwuBGwxNFjQmqKWAXnDvpgWds4Zmw5JEvxd12zXiesSK4Vs82NMMsNaTsRrpVJ7iZxVwqQv2Pxy5",
  "key16": "5CHqpLqPeeCFbgLzCAQMoKeQ31QcJ6aykrGuBUvMXDX9k6ZFxgfytHAMsVJXwmsAWbgM5sGk9aeJXjWynTuPrtWy",
  "key17": "55UQG747LX89BQETtJr2ccyNqHLK1gnSKSkNyu15Sb9JffYSMyswXFsMq5Sej4DZ5kYSNSfMKHtUe16qgoQsks6e",
  "key18": "JFc65tGXxid6haTvstJpeqpMP79LbqtgKEvB2sJvshfULkZk5XZY3j8kg524zgqLr7cpNEpKv8uNWmqWREQFyE6",
  "key19": "5rkgi3CnPdhvzfQvHqtzYeGRcVaEeB59fukLbMH7Cjs5C5mZpMHp7ips6rs9eMqZJCXYPkwg2ahgB6Nva3U2m7ke",
  "key20": "23uAbkkZy9DYy1gYiDsDRKyVS1gC9YKFMcu2SU64KsvvDk5et9ufGJUgjfQeiB44odMN45z61fPujSavfqqRPVLM",
  "key21": "3ZehNifQNmwYJNJHEytjCdw2KdVy1snvy1UmCg1ny1CpwXsgnQZzVKs4N1nqCyVdDNGP5k1ckQP1b3uP81b642bN",
  "key22": "4K3sCVQvXWdS7vQPuxwLL3j7g1XHfJYybYKWp12CfhczokZtEFZTMWjCP12JUGuS4oyGNvcr98xLZKzua2Xxg7SX",
  "key23": "5oAvbtntVCV1NMPeSmZQdj8ReFKy8HvcaqW8MHMcMb6tAYayeWxJNZ92rbb85HuYzxbQM4sk4DFY3AWpnHQ6kLJz",
  "key24": "5SjENPAmBxmHpDRxRExEVQ79VEsk7zed4AN8UpNbKbpbMCmVpwcxUaPmn1XQb5gnwqfgYzuGVjyZ9vxwG8BsNaC2",
  "key25": "34wD5mUP8Zn54VmGojKfzrH6aRyR6RZD3R9GHZkTkbmniWtoyEQDoRUsVZs8JzBVKXP58UQZzpXUcdHxiKpkpySd",
  "key26": "64Sg5Sk4Qbv8dHGuooTPjK3NSs1q88ECvT4jknK24RREWGYW2t1kfU7x7uHcR2QrPSz24pkkc4x67mn5Bh9JTW81",
  "key27": "5y7rXvPBG2mycbygazq34eVHCH6HWsNtwBXuHdCJdB9bnWymaDWTFRgVEGP65312CrXVijhnDchdbWB3ATijueRr",
  "key28": "28sfPTgVdyNPwdjgZHtaVcCdEPGA1m3u1howdoGoMDYPkzL13bD3w5YKhQXaxXmoLPRZpuvZHSUCv5PovpPCApXH",
  "key29": "viK8peNBhmhr3qZeCDhJq6bxrwhrTuBSVgLAQckDnxVpXEJcDQgAbe3r7EEGFVkN4ZyQY7gmaR4Quqo8t5W3j74",
  "key30": "35yopCvapz4Xvpjjku6d5zsZpUBVKdyiFczHPckRnf4wkb2FeKCqEcQr6yKeiPHApMyoZtojEAucwTFfQEFy39Gg",
  "key31": "YufLBDiudg2uXeA4tS1tJJSATZryuyeBZVb3863gafJF5te66XPrc3kGsnEmHjZkPRwuULunXakhQUoGdCUwYJr",
  "key32": "rTRi2SeTKcX73V3jKmjrTSmFSUKDPS8ncHNinLsrNFf1CRsXXqEgrKd33KVs2VaGcmXKuNkWcBkB3Mkuo1YWe15",
  "key33": "5dPZvqkQW1xEsMfpBjJvDq8X4yZpbUmyMiup13MW73FT2wgqPGVeqVwG6EJZmqGDxn6oVyf9guSrWySCoWX99CbZ",
  "key34": "2o7zoWVfLQqPXpb5ytgqK1ZeLgSd9KfNPEZuQEmKNa2FakcePcy8SbkuCjZSgVcus9RxWhBC8W1WBbgPaLxSawbd",
  "key35": "5sq9qhb8NQLeNSViDvz78jAv7WBftUywoCWeqYKyQysojaXdw8xjAcgVPFSoH1r8KU1NoJa8ecPca7DTiHJQxMcx",
  "key36": "2jacTKysH7SqoCcmCkPweJ1MGffHRcpUBc5oEnojjKw6a7hVXee326jFQiHEy9pyYaW6R7DdCrP7Jx5Zhvm8t1jj",
  "key37": "3EWk7cb9T5kwt1YayFz5YyWrYMBhW1MZBSAvRKoxjtWDiUSUvuNa7BGgwEURxvFC5VqhwJuxv4QqVRr8LmB7Gywo",
  "key38": "2qLjPCiwgRHqqve9L1gZYbiSbTTyXmiURu1pk5SH41SegK3drwRUmcbKK8mv2MHmkgdZTrs4qsN4b2Nw635LevSX",
  "key39": "5wbeqfyWjchRhKX5sFNNQANTx7aZYuaPQ4sCbQPXYPKrjkLdwP8qRqGwsUZXaR4VDCUVFpGmi3tanijwPH8SuwvU",
  "key40": "28ENVY1iQpJ7uUHP2S6HkxTXZLotVDL63YsU9NdBzmgYfbaJoFaCgLmREDVEBS9ABdBoAL67yn7LSUi1eQWaRjLD",
  "key41": "2EtWtnQXXo1TH3aHQ7HZSYkvbZEjbvBufzwHfkSXDXX5qBzj9YPXrYnhfKKpoaMkwkA9FG45QDLXpGqDq5gtuCac",
  "key42": "EavM3EyjwPwEYgqWzpRo5F3PY8MBkRFuwJoKThg6XmxmwqqXN76wouU8V7EHMtzhSz5gnLLNWCKdg7LAr1qrzc4",
  "key43": "5GeG9fK7pfrEJDeC5JvkCVbJxKNk2dUCLQtnsuy6i5bB5vXNwPLMGLQ6aZvrVZMRQHLuYjv9UYLKuziuu3VtworW",
  "key44": "267RxidyE13ZUwJqG3ByvvnCrVb54cEiGQSh2Hoca8YxEtjexkPyfkYfkjBcpkV54gYps66wmDxpQMfJmg7e5uj5"
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
