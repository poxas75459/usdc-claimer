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
    "5Fph8jHzisdSUudew9cXpv9HL8WFzeDk6rU1kyThy7HszkCZNhdLNCed4rR7DL8FyNpWpvLE538X1r1SSd1Jae9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmRycCpDoSYyKbyNcQ5syLtcxG746AKP8PrHkHXFBc8pi2Nf9eLKCt53HyHMkQcPnUvGSCiDbaFKdTSYnj2mpuf",
  "key1": "2XfbiGiWqTma2Q8ngVpDBesyCxrBkp2QaPDPvT4iMDB8uxTFdSsENSsVscaaLummqzLi4kM2E798V4pDzLHbhZrS",
  "key2": "5J4yn2bvaqBh2uFp6NNixvz4Sf4SA6oT8FxkydiT6X2x3cmCZdmepPgLEh8LQ5s2D4frkvKvQTdgqU3LHCR6TzQx",
  "key3": "LQTjotZj8DC86FRXRem9i9bMzBtcycSPLNXHuYNfuJE4H1iyFZLdoSJ3UZ8vAhLeWtmVnjV4eXHA9HoqLeEmKkD",
  "key4": "5CDjdwzgUqQBqkBkwTHiksHr7FQRJD8f49v3qm8fj91geLrnFQfcgagiNSM2jZU5T2hLaUxgLv7zxUdJoSMiuwqj",
  "key5": "5Jdq4TSg164zW69qoBVRc34H7Jwj4xjPBt4EmQP7o85ENhTQcumvS1bonMyF6KdWar8zGiYj6oXuZR4UV3suUZSX",
  "key6": "9i9g1pEa6SvAmG5jV3EdW1zTFgYftQun5DYirNssV9W8Y9Dp9MHvfwQ3nTksvTF2YjNcGCE6QNoRJb6UJ9nWQZN",
  "key7": "3U1Xd8JUbdZtaBx3w5BmBNMyxmiY7b88n4tDAqPxWndKFHpaynwgtTZr6WFDzf7S9XyAN5iu3ahxt1EkX8kYvBov",
  "key8": "5ganERRDT7HYMjJT2sLa2Z1XCQcFs799KzxRK9dZj2VRTU3fyucqjRbFDaq86GbTD7GiT9TWEGyCnWVc8HYAZ9V8",
  "key9": "4u3VKAEXYSgW6bVB4oEu8wn6i2Sb9ASpyw82A59BGM1MxmLz53Lee2C449hmLccf3wiLHVqDr1fBv2byqoL3cSZf",
  "key10": "3SKFh2VsWkRESM3ycCi2wnQLRy5MYz9c1VRBscjPjnNTLokfNXDAiY9YzmHmw9bWYNdYU7thN9uJ4Pe7wvK77ALE",
  "key11": "51yp6HA9ozTF9YgbBcn7fDpgEMz3ZgAS3rvLBzkKUcLY7LDyFiBGUn6kVTbmGz4h94tnhcNJVkTLzR4cTVFANpq7",
  "key12": "2Tpn5jGdLPHvkpHRWpV7Ahz3yKkbkZ2M54WvVNWfY5gPjEe9po7rVdkGocf4MuV6R52CP7b5RgRNyx32Zx2V31Mj",
  "key13": "3LrWuqGibaXn4vTBDeZ2DGo2KVuxGAT6rbQJCPUq1auQbv5Vru1rQDWE8Swk4McDYS8NcudjgjdPwS8M79eT26cL",
  "key14": "2uxsYkaDMWaDEMgEkzpRKW99Z9pnmHpTtqt2FGgw6zFkhqpeQAuhkMVkfr7wRqCPBxcoMHoMtiKkmHqfxHJfuH5D",
  "key15": "5Q9xzNBwQZNVe9ZoiAXbyKaWihcumdAWqffgF7RuYfSDMNZXoxqVdJ6vdWH753VCQfT2bXoyRyUpYgSzxRxuPmWq",
  "key16": "5YBYzL82W9vVUouC3zrmDRmM7knL7gJvUEBDS3LmpHssEBwcqxxiyrzM6Jj9aBcsKHePo5VZ7BBu4awHm3JHex36",
  "key17": "2sPhqSruuxUmx1WH8eE2qn4y8nj2uaeN4B4qatMTD8DTJ4UCCS1Nuik1HgtxUEmnWR87G7Dahkdajq61xRHnwikC",
  "key18": "QuXMAj6gtUbF1Z6odMuCSyGuwpMctEsCAXoqZ7NcBF4UJcf5CLPL3zpikQ8NpJsbWvWitXYM48uswnpZquvGR7k",
  "key19": "4458uuSnNTSGVfUTri3iioYUpJRE7xEmpXoJtpVNRVYK5po8mrmjHynQj9uBhYw9vMuE4DpuDSH5zrRASURzVtJN",
  "key20": "61fw92HriUhUG6W5FDpT5i1iYmoMNzYEC67NEGEfKHHvy8SDxBkjbyYuSdAoLefye4ogXFxmANy1ovhvroqJBbQa",
  "key21": "3Vpsb62u4kNXbn1qdxLVBsRx4ycWrxQ6Z5PF7B55jn2kMyjrLZsM4a2GC9Z8CLZTiFSNnyBe7LDKvMfsqBUrZ1B1",
  "key22": "3ETsjgEkpzXdB39ZPuuYuofMCUvCbwZxMCxAtoTLWuZFoABreHM1dTYJuh6BkdgJjWEnyTBzCfETLd2xsFKvUKRT",
  "key23": "DZWJM9UJEGTryarw6ubrNRLmaeUXCVCy2CunzVaeWRY8foUZpFMcCXvFq9R4kGgCCWDepN2Khs8cE9MWWicnT3y",
  "key24": "4GQNk3fyaHwFeHubUhQ9cfqkxLk6rws5btiMNi7gtKAmCABw9A4vBPnf3NpmtCjWHiPCScRT1r5ooj5gQ2jSHuZg",
  "key25": "31pAvohqgXcReEGUVw2fZXsDGvTmiiseC3NgXucA5N16LbQuRTXttzq4USXos9wxK45e6LDDwrfsrK8vB58zgpsN",
  "key26": "4oMp7r2sQNXgCiKTpewgqMV5dqDaciGy8Aef7sfgTh266vpEzopc75nQXHLu2VJuh9azvgqTLYSf2NPWWv7JuUH8",
  "key27": "2CXb6q4qG5DXYH873weU2XmR6dEgcCnxHzpFLUAAuYDx449kZaTwQnUbxy1xmFYguzhPK7yAvpXdmBJTJHAro8iN",
  "key28": "4r27odfCyxHhoBUFUouq2aiwXTSf1qzUA9umLBd5W3xwoRbViAESSbU9HZXSwWxaH7sH4NhH6SLouCNg7HvtrUVM",
  "key29": "35qwsa39mzeSagpZfxN54wKnnSfvYctAbY2gihngKe4s5afzkAbTkHt1v58V6fGRQevKMpKH9BpmoeLw5AZho5Pc",
  "key30": "LPdnTcjc2rvSidTfFkaTGACCQvZ1djzn2HGPr5sRdLWmBNnYFyf2DgicnJUqKu4DpEHWG8qunRe9365UFy5rTtq",
  "key31": "3fbC9ftuNASPcyFh8hS7amZk8qkuPdmJ5XJptyiSHEZpeMeqkf29hnDURBgpMMLYVpCkMADSccaKToK6ZLbiXXUf",
  "key32": "4kt1EhZqSaxExPYts1LbghZZdyYktDpUpVBU5v615GXzqz81h632BnDbWAG8oJjZrbhqfyzzRLEFgwNkmTiTFxdk",
  "key33": "3CAh5uX872ueiAQSLcos2XcfSbLTCrG8JAkqUcR4CyBLbExPx9ppWnsWusHFPm6dgNa1eCxt3LqFbPLcVS2uZ1hn",
  "key34": "4gk4GUUFLe8rRvTRXGXtR2WnjUopvCHAPYViW7v8aYvZCCD4P7TH2U3ZN62Hi8C1qdtX2Fh7i8ZvFJvPiNc9hEDE",
  "key35": "2J3ZhpvHMLRjQBhsf767xhitQUcSBLU6PQxK8c9xvVwKMLbXbKErqyT6MoT4R2cWyPrrhpBK73QtepVk1CrhZcTK",
  "key36": "5Q1M7oPz6ptZZWxbqbuSzVSH2ni8gEhBTQoEGurrW3LSAHkyP4AkP57j1U6R8MPC6G1dqjy2n6FQwnPrQXjX54GN",
  "key37": "5DeBKgifLRNFMVtGjw29qUEPqxYNgtjfKcYS77p1cSpJ36zcyy8XGQ9b7JYLqMVZZj4oD41BLpeZazAah6om88wW",
  "key38": "4YpioExfBNTNQaKtwKVE9bNc6wRGpWn6wGKMqRXBqJBkzmCZTNFpKHo7WXHZSJRWNq6kECtuq8peEvyMwqLPvtK9",
  "key39": "2xHF67QtkCxu2jDhkVN9r7NC8vLk317PuTZ2iQ1dNaw4QAAPfNia8QwP9E8L5mUKfY9NJS74Tk3aumBAhxHpxbyT",
  "key40": "3VbUrssssJiKnCseh65wtGVp3s8nwVbinPtbV49hPs3FEUj5G73cN8RstKe6o57icoWpU9iSnXaAyUGyEkFL7VSG",
  "key41": "2oWr2uVc7tdSHiULQW2BoBQLSxm34mqYWaMCRb3k5ggVqmnx9zYXbQBBGrBeii1ypne11MDHfxj1DKx61jtQS4Ea",
  "key42": "2zPZ22HXfNTVcbKNQYZkSZ38TciUxRqNH7wF6TdLFFPMAb4fG8pPXXh9jQh44dfy4Himkmpmjb8mLr6mG1wYdTYi",
  "key43": "3TYK6y1R54mtyZc3AwrYioZEeE8sRUZZpfmQ4V2mPiCfQMH13kPr59JjM3r2hDCNLYvpRmeLM83ZnytBXSzy56Bp",
  "key44": "5FHqS6AiWPEwZQV6ckWw4QVmKsfD2M5M6rXs7pDQFTEGfbaquktMAKQPzErio3qDEKURBgu1yfkWPWHwP7UMefSP",
  "key45": "2hiW3W655U1oxLfQ4TazQkDMgbY8NUUevbKDu78Zs3YrEaYkF61RKNqBjoCYhdWsST5kvDVSFKG2uDZje8sEg6iC",
  "key46": "2NiPHRB8xHSxgwwHTJafqBPSLmDGRALkbntSrpvAEh9q5J7tmkJwq1ctFh1JRD88nmKCzMmR1ybL6qCFbXDwakfQ",
  "key47": "4EuPCkmyuqoTNq5jPk2WxndcYtBwaRmUS7o1c7EfG48Bt4mMHcFgvDdiuDVgaoNjtQE211MpQMYLWQnJFKCxSahA",
  "key48": "4i5XWUa78wfMvmvURvm9w8uGXSEy5VmxFEN2vfeUmGTYkJSgDXJvfN2YbGcZzQRubDH6nbruTQZuvmSTz8RKB8Jw"
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
