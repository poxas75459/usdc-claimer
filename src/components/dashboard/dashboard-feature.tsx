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
    "33mXuuksF2WMzU3S3ANLdPvf3FwAFDyPLfY1GG2MjFQcTgEPPK92H8w5adcaTXGXktSPX7YziCVRMDFN2TkpL3un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynXgaST5xFQf1ms7FYG79z2XWjsD9jGBttGRXPX5B8YwJkZYAeC5LGuFxyjEHFf7Po3AWAHKuxnYZuRRowZ56fL",
  "key1": "7LzfaLV87597sn1gx1jSJ7zqfLkMPytm3aqcdodo8JtryTSrkWoT6V96K9XRJZLiQtqicmh2u9hJHXtLNCGsaUV",
  "key2": "4kdtYzcnVbdQJverwg7ntZAWwJWZS9i7ovZa82FoJfXPKNDv3LeDfC5RUCZGFLFZf2Ay4q2qPCChg91iS4ezEzGG",
  "key3": "zeyqtnCdqyAgCHUqmquDQkkU3j5safkvCq3xbZxGtVfxY9i29d4X8CPYTSAaNLc17iDt2dkuewxJAZj17ZuiUKk",
  "key4": "5KfDvtBRyLo37S9J6srXuWgfPA99ZskM5PJJLn8KTC5ocbXaCNfbbSN8zGCDL8UQbY8JszTufSQDxreGKgSJ7Rrv",
  "key5": "42RkrM8XMT7LwEDtQ8KxBMuPwPeBQ6iXJgGLHRP1sG8ePtkXP36bdbg8UGWybwaAZAKU4Q16atgnJmfzr5CxzuF9",
  "key6": "65qSHaXeQWkLTGcxvq9D5XykFhTEp1A1BGKPdo58w2xTriuAaGbhdnP1cY6M41QJb6AoWW5kySur7WiFChzRqAcN",
  "key7": "5SQmdr2hYej8K2E2jxUaMqH9LxNtBoxcSfcvXkgYgovxUFUcypuRXyDCek4eagC6r2yJkWJJ7Xu5Ec3NoBkqWa8u",
  "key8": "2KKAzfu4VbvxzP69RjUcuEk3pWvyiu8kX4J14YHcAEc6Z2kvyFAfAGvT1patKLMFX1X87y2QCptR5UGwxAiLgm5e",
  "key9": "66KtnBfFG6AST9qTEZ6TnFBhm22BiQBFzEPRc3NNkyQx8C24TiUYxKma8WXe2bfMVok6aAfNpcJU66bprC62bJcz",
  "key10": "462wKc7pPYn79JWCr4scvhQfQUiEDCtdpRusdz3br22BVFMSrzW8kjiuiofh2A6dc5MKzmSWCXFm3Q5sUz3gAZks",
  "key11": "5wimAFLWHp3H9goHyqHy1FMdqenfg6FV36Mtxk6VwWWzimNxiVqhTti7NxW5zs4kEwGtYX8VbxFWqmtLq8R2Sbf3",
  "key12": "3Be1yEF99c87Kf38fFmCQDM85kfWH1z45YbrSf9mJrYW1sB4ecUtPzzyrNPLBL7pYnEMWRPSBUtZhCxYJQ2mRvhs",
  "key13": "3cLVBuBg9DDRLrGu3xsHbWC4VHy5jsTQmtX6FnNF3yM4s4DheqvxFctsF4wcuY8JhrxqzsjWKuz3VjHJDvaB6UKR",
  "key14": "4H9g4Ao4QMfJCVfyhgpYkJaUJ24UFJssVHuKkrUhcDgi5MQpbVQqdetNvzttctMHg8hQveCodV57pkjJ8XGQavH3",
  "key15": "3tiuC4MvaHzVXUdRc1yA9FYWKS8LUAKXCpiG7LZfTcfbdMqCBytd7wgokz2ypuCaioA5qoK65afCoSd3q2UAy788",
  "key16": "4TaPQLSwbmPs2LA8imwSwRWGTy2up1dEpemago47Jfwi8HQqjqY7GydD9fop4drJ9pHf4bzHifY5sH2C3hF4bc6J",
  "key17": "2JK9WqHGhgZe2Eihwigtvm3MdnKJKrHiGFCbe1aCSC8W8jzSxNwtAV6GinfXgcw8A5txuBaroi4U546mUMoeCzB9",
  "key18": "2vatfXRga1qtDXkmXHUVMoDQs9T1DJtksbyXvF6f6fvm84q6BJK2CePE1ETLJay83P8VYyAJSG51jo8KuDb7UpmH",
  "key19": "52v6ap3mdwLsxst4MvzJovN5khh9t68FJfqjcp6w7wsbnfHqezn9j81zfcsYA8tVZWf23c4va8qALeYYqTF17qx4",
  "key20": "2qWotseMuFnAiYqF9afjLQZKrj8S9ytUMc2HhTXZYXkCprffzwjtzYUzvNvqPKRywJz7WB7b4xKV7dun1thGR7Us",
  "key21": "2iLSNmK7rchZKvWu1kQyeXPxAmNpXgMk4wyEPv8LaRtFTgbUavfuPf4DVtvbGM2XBmStQNR4CUafK5ExrcyxXPcN",
  "key22": "5QxbCKBvQbW99VQuctET5rfCBGyAhYsn7wKudXuMPpGrhGdkFNuJwsG4swwfJb3G7k3DgryR8F42KETGSEeWcW5z",
  "key23": "5EgLfD6qnBi1pbvmySxTeWCcvsAZPHfMN1Zso5eSGX8z1AeSywvpKRQ1HoWUL29m8ZYhtgyRj8RfVk1AQkRAjz4g",
  "key24": "3j2PmNLLt3NhRCJVW53Uw75UZxz1smvyEhH7jGwgE5oLv4BWURLVWvG89rThpmRxV1HanD8NWkYav79Vzd1ooyeH",
  "key25": "5B4nH6vYTd3my2gSoUpr7DVC9Agzp1khK9rUAtGLzrWUThQX8eivo6j28tBpgqPdFERpn4vatuX3GiFEWTL6aRdx",
  "key26": "5VdEZa2d6ab8De6GKMwbTTqrxruUikZ3a73xRi8wWAGtE6LLb1qbSZ6kNnnv3vBvAwfzMDGXonC6b498uxsr8Bq6",
  "key27": "3szbS2tomPo6jrPpwx6yuM2kNeM3nfRVwh11S1DKSoshhuX2Roi83RCV7tqbKW9LZUYCnuZe3HKUYXvyJuAiy4QZ",
  "key28": "59fH4VzdvtGVejKjE93gWoTdaEhdffLMjyuf1CyTCSRbdPTqko1pyAAS1vohtsVmykaAZUha1V7DMYjZuLYmAaz6",
  "key29": "f5dckiAsKYYyaW5ngZFcLxqbYP4UrmxYhDuYuN4WauAGXTkymwYqffGkopsKy9wiGm9kZR5q8D4sjwUAJKkN9vY",
  "key30": "2gDkhwKjtNbnwU9ffXMVwswsnF7stE6KcViH68tj4WqewQqui2XKWv4vuUtBbp8SwakqaNykSwgze3FvscsFuvrq",
  "key31": "js62DEx3tipdKXQYjeDsBhqwF36PeJV1GCm73s7m7tzZ3ng5TG5eNPn6HMoxvupXAiTZ64YCFmsnhzJLTwPdAFU",
  "key32": "MSUWuBVBRBG4hAbc9ytRH7KJZ3FaacUps2euQtFaCTbwZsaivCYuQrEMtfDa9eX6Pc3q38TXYbmpztC86q2QbYU",
  "key33": "2i2Rk7NFTY1k3SSWhY4RR5oPtJP7yXR1JYcgPTBLLpeBGXDGiCRWfg2D84S5499Ggjt7QhdD97Moz2ZcsrytezMv",
  "key34": "4XbZBVJVRbzsm22U7h7oeAaw2DAHxWzDNmjQGv2HNmSTWmuxU2Rmr1Lvybxx8EwHCAd9uNJShiZf5JHouwnCNh6w",
  "key35": "86nM9vJiQZZgFat7KiSEibjBpxNgeG9MDtadzBsDbibci91ncASnzhpfzKWAREMAkeqR5dCgyP1pfSDrihdHCyb",
  "key36": "3fdofaGaRuzUKJJ25Ej8B9Jb9pgvb7mKeEt8Lo11Z5StqsAVuXtn2LyeSF5aSGBffNvqCg4vFzJj68Zp1iopzjFh",
  "key37": "5zYRPktCFwDQpUJ2JsyGron1fgrgSDwfFuSufDNogZheufVdqecZxj9CZBU6jjrWdsvGVFnqUH5nkxnbEFWkEXH2",
  "key38": "2pMKpasrYHvMnPKdUFnFS8t3Vcgr1JzgTwjWT8suxeBxeRwD7GyhRPUhKfEYfLWkGiLMeJx9sktFUNweTrmBAAdk",
  "key39": "3kBpQRoYxFVTvnnn3uULJWDZaqwzFYLBzCyW7F5fyiNYAKvc8JfDYyN3qkfso67ncXx2pjyy2hjNzSc4p4Wcu57w",
  "key40": "56Zigtt7kW84eGa9nFdrt4PiKQ2E8pJo7S3nxvu4KSTJ7gjk8jZ9Qshgg9YFKrnPfCuRF4DdjHTjhCo1ziStJ3px",
  "key41": "3AwoSWtaYQDXMC2dLVxvAnXJEyTYkwxbQ4TuVDZS9xnxGPjmY8LzBYHzcppweGFZ5UrfSeW7mb69TWLs55NyJKZa",
  "key42": "93VbnEjbcwFWruA8hkZRnrkD69JFXPkxA6Z9WFg6VEChp49izqUJ8PcykeknQf3zMW5zjtH2tjFtjpBAqFHS4CQ",
  "key43": "21jHZUZWSfhC93VcGye4fxanMkHivmu8y9ryC9PCzkv3s7U37PLEnpJr6PPzZeGbDsSUckazXiyC1t4FfpwZu5nJ"
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
