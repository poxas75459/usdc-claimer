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
    "BCErJ2t9qi2CqaNiHrzPe1mpvKeeUy7CUGxMSFkizyxuMbWuUtQvHQcyiudziLmg9p7Ste2BAUssEsgkqC1PNBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RY2b53VNZKoaB82kRXyb6UEjDcPwQjoiBmtMkk3SX6h9hwCLU7fhTMWS5J1nGpMznnUZUfNhELQeeRNYaa3pttQ",
  "key1": "5z4tb9vXSzFcZ6eXhnpm7NvV7gtMUUYEoUotAQTEirrvZFraPh24keEB5y1Ysr8a9CsmaHPFVgXn8Lhj67ngn1sx",
  "key2": "67Fi1asbwQcDwEaU5rjWTLtiiBPcxgBxTMtShhrbAXGSxh7ucYyjTXEWeMSfi6vBW6yWrq5Ghjkxd5VwYi542bf9",
  "key3": "2irDDu3cAeLhCoEm6rWT5vzYw7P7rM7Hs6FQpd2rsrBc4SJDom75va6desSxLHr9op8FuNg5UzKH5G34nc8hS6rS",
  "key4": "5ctXTevSV2cySbBAps4RNrCFFYSnp2ME5CidqGbUKxrGbcHDhJMEA7FfNSFKBemm7BEHbiMnxREhnzTHaTz96vDZ",
  "key5": "2nMY7VjXsr5RUgqnVAmu7m7YJowhaLUwMhutb9sbjhYqMAgoSscKZvD4MPk25i9qz1ssZCUCCdyLTkZcZNWQABWL",
  "key6": "66FDnjzDS2QY2aWijQ5D1CcPw9obVeaFTmwUeanit4c2Rxv7r739sa6rCVk2fGC7XGSVGH9YsEs1hoE4TQz8rvjd",
  "key7": "2CE1G5auNzWL1vQkgfNYd5H8BxdVAWRrE7GXWgY8C5jKyEVn7Z8K7CUgtFDfwnxWdWjW9g5CUau9tZPh7B85zQsk",
  "key8": "2eX5jNAo8y5T8RUUVqDTF3VeFLLxru8yW5znyWmN4KqfSpQbfRavGTdnX87u9Wx3y3WTt9WDvZyyFPbUNAUirmpD",
  "key9": "2qiwtpAnk9Txw1BodbwtEdz8EHXFr3ZkzGUoPERcttxPJroz6T6uxaTTiD3bz2P7CjuyZBNa5CsiW8zc1A13Nt4P",
  "key10": "5Dtjr4nnGdtT4a5WrVBQ8BunzpyQ1uJyAo9mQVowNa5k4cZak4qXoGeTkp87Yf9CVQ4yePPxCMRWGCjWC7BNovoy",
  "key11": "hEWciLqbn4mcUgN4u4ZCogc3CprVRXPPf9vy5R52JD1WAyaLNWPdz6DqHEXGnkYS1DbsyoV8UoEpxVh6KoyuuCR",
  "key12": "3Rp96sEhysZGux6aLWN5zutt1bbaKPxErqDPrSYy6jJ2u5m6HgysdnxvVQU4SsQnypgAKfbpdHjYQvam34Eq8pKu",
  "key13": "4N2gDbh6RwBXT9JxDfNwdqJ7ouYEXx6shwjSL9ih2vPB2X6AmiK9Db5wtjMh2vFLqDn7zrLNnVbEFc3MQri3HToY",
  "key14": "55GL6vvSbzks8mAdc2xTpZga1VwqTXZWaCrXv4xtq8Q4BHFtY28eC8ZQn4evjSQRGjyiKJPBcQxMsgihbKnGsL8C",
  "key15": "2b3bjCHGmgTSjfBtq8FjDe1JPmtm47KxqEam639mVmb6myXDMmisPoNui7RHKVWhpxkL6WwWQjG7j6mCHDhwWqf3",
  "key16": "5MqmcsZgNFuDqWLCgxBFzrcUfkopdhjYHoohBGYrW1ew5bCeV3Rj2aLPogme2ewB4Vgehs73HytiNA1ZAZweaY67",
  "key17": "SkJydUqCLpZ7CDP9CdQQtfL9TY59pt2n1PSiBFM86Zspymq3vMg4NckNdHCzsSPhq588ZvwPzVwt27T2ghD3cbg",
  "key18": "ikzr8a12j7E21RBChRSK1ofaW4fKAZ8DwoSto4aHLnBw9pACeGA2NBDW3SjpFzady6GpBHPLzDDzsPDWGhE22Br",
  "key19": "23RtcoXFDJoxVhNVwVXjfACU8rN4wyZEEttx7ZPjjgznHd4sU97a3fvGpJ7164eJATWVSHdCaPgVkD2ve7kaVuvo",
  "key20": "3oYNNEd1DuBFeVvcZmvvoeD6JNaJz8ttRfoH3NT8KLtVwQz9TwVBLqQPssTRgGbYsBTTdvz7JsMnxKz15KjMLZ1k",
  "key21": "61b4yCgdNTLR9fgAKYoK6oG7ziLhgYuyjeXGpdVsWQ5sPCSPzNnHovcBfaGCdhqQSVkucBsAwYP2tqqwkRnUj8S5",
  "key22": "CFDo11j1TUg86SR3ToBconPLfT8omCqPPpuyydzFq3LMTgMVyTcbAAhMQYawaP8dXf96qWGBNdLmSTjXevqNKVT",
  "key23": "fgeFvz8DNKgA5G3UC7wWvftihmFPjFLVbaRHwb2pq713gZjbPnzhZjRtzLkrso1MxoKzf7QCRvK1rpdDnf1Pr9r",
  "key24": "55ppuFeRV6b8dCbMiGoCAEqcEdxTHCzutARRr48yCszARm36PjaAsZ1HujY8XDsuL6nfUAg6Sx5EnUQMPdvCPxiH",
  "key25": "5rSQo8fncfngofdkBU6VqMY3T9m9BkPtAybTAN6D2odJh6hHn6LeKBXJmE5DAds94Sj5GXp7bVCE1WnfqmSALEoS",
  "key26": "2PKo7GBSTvFzetMFY9v3ociVoixo7aRmPQXpw5cVnSKdzfT3ewzdvNyG6iYejF3yrroDfwjz49MjgFg7Mh4zsT72",
  "key27": "371SuEHMsHM4ZpBhpTtnR9mDxmRdCULqQkAq9GLhJYCVmMmhJgxNS5GhXzfwBUZnR4LrL1r4SwQuFJJoZfb92oK",
  "key28": "LiPeMASRpeqcw1diRqwUCSS8Sb9fwiEC2WUJaRyzii3pWmNsa1X3cGnA14Wt5REdK8whuf2G5mjARsbmLLdZs88",
  "key29": "4Q45D9tqYCJNcCG1ENz9f9qDGbH2N2BzgbTPa8dZcB3YYGUnx6si75LSs95bQ48uAq2CpaL8JcNM91AanWZRRZdH",
  "key30": "KCZFtWLGmhMFukXrZuTYeM4ihBL4XXmC4CWpbLUNdQropYxypCj8oQLxUt6RnKgLPMfawbXWnyg6w8xaxAfrthA",
  "key31": "3nCkuYL6qjN3gabjFTb5Hbi1EN4WgDEK2i5T2yzSPqW7dd9iNEH4Qp3Lku7k3LD6QywvBGWXWoKfMXHyS3UK2vv4",
  "key32": "5LsF1BBy36CJh2yKSPYbhSbVPgbGeLivqYzDeYg9PrhtgNFhLpz6SfQ2PNm49AYPrZEuoHUm7Kj3bm31mpXvyqWY",
  "key33": "3Zh3QGMJ5J1GgP456BnbYdWiizgszsWH6XSFXqHnxg3vMLajhuypzdJunC4PRtZxR8aZGdx7PRhLEunRrZ9SeL26",
  "key34": "3j8duVR6ypUcf9M5ZJA9MEPuiRccGuZdmpci1C24XAqVTZyQwSDaoyBUahFe4sonywUAQ9VF9xwQkGqtwtD4zigf",
  "key35": "NscfDirSctHPAxux2KPeLgT4YATrFiDfF3KPdx5hZtSMF2ZZSQYxAG6Vh36UJK4DLWHpMQ4ma9douJt7wTAmwEd",
  "key36": "3rTmG8s9tV3jTPJpBseGnKvBx8pETQKXjh5rRfSMSKfMyfScRfbfdNddXP8qzdx3a8VyY6VnoMNKMHugf4kfqryj",
  "key37": "3ksLMFPiLp3bgCHyfuXK4xFS9jYXGo4VsGroJMF8rt9uMJbuPLLxLtDhqdK1yjeim3b96hLKsRMe5jfLv8zc2Cyc",
  "key38": "2gp5NXxidABmRx2YF7TMQRsx1q7YAa6WzP3gFJDAyzzt68AyezWFiyyfYNmj1t3MXbvxGu6SnUxVFXp5BRLv3XN",
  "key39": "53HQojNvYUNW7mW58riwcx2QA1bKhi1J8WwRECaKmqmLTfDS7TQ3AC5JXoQgJWpuSMCv1rPHha3YxbMxpMWLEP2B",
  "key40": "RVa3m3GWfw5XqTogTy1fZSDXpX6Rz5KbWCn6WWBcXSnzyh9cfpaipN5BiEbLBL2jJ57t4bhh1y6ujpanweupfU2",
  "key41": "43tzCSbE9Mx4CZvytjFAAFE9fqrdGuaQFoxocK5UfGPUXhBHCir5bsQrwqc2vaRSy4ykwas5LBVFgGuqNpJWasYQ",
  "key42": "3KwpKEfhMc58eshZLZQUc32wP4hySF89d4j6zFr5oEWVVzJfsV5R2vFmkyqiDdFVdqo9oQj7gerJQYwEBAjZF7Xg",
  "key43": "55471J3mgLCYXXzLk68D57ByDEHBntpTjr1LgCCdWRbWAgpzhLY1Bu9nc94P5tK3tpYa7qP8qqrmuYkZqCJA2Cmk"
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
