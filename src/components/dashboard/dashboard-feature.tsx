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
    "4a89Mv9QFaURgKukSY6ZeGvvNij7HP7BLfATLy6Q5um6HLWkkLYxsuQ6bY8mSLrx6RFTbzGi1FcMqBLDfTUwTx4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2JogRM4sfm8njRPuLeBZckQLoWwKQ594Qg6esUKF515yTBRVXkdtoN3jGXNh75Z142Bpdsu6mLLmuE652DYN91",
  "key1": "idcKfRSnzKSd4HGzP9qALcsxMfzdPxKSvFFfGjG4LLKCsEzxpUW7HLqMM4ZqkhMhkGcZ1V7KNDqkjCJ4wQHhyVp",
  "key2": "64wGt34ZX1F9PtTSEZv9aVH2XGP4Jtbkm7gWMMEwNoCAgShVAVnQScSGzrfBi7TWBEwAzFitKAdhEcjwGBjd9wHx",
  "key3": "39c74M8LYeR2YEwfBvtL1dNszhxgtXojcDgyWm5yTAHHZFcboDamekM66yuwZiqW33MaWPZqTMzqqyQqRYfcDAbQ",
  "key4": "4W9MsfDgUsjRBjNBpZkHU4sK2p5AedhEqxsBaDRJGe6q2uNQdhigoFiKKsCr5w6fHdsp7SAu6T6y9AVhhnWicNe6",
  "key5": "4Y64uMQKcvq5x9TR9HCzc3NdRneCeGxen4SSu84aDXFLrNjoabm6hqJq4N5voHknQuFYosaq9B3b3xwXe99vT83z",
  "key6": "4ZdRkThs1Z7p2TKELRJqR52G26Tpa89ozy7A2rM9VoLYdPUW22SzZPycR5CjrQAqkkwBBFjJmVrVs5odSQ1vuxtK",
  "key7": "5oRhbxYZKMdQSTP56zfpgMF8Q4g28bxkXTfoTbJiBGMaC3rdw5f9qUvw92WgWdPh1d8AfBESVtNWKCesu7H1z4ut",
  "key8": "2Bu3sHxjzicPR6B9hCvBUuPA9dBT9sUzRwTg6v1GW8cuvW6ukoAnCsahXSZrkF4ypcPs6btQPoM6m95Pr5pBKsDP",
  "key9": "3rgsESH7Pu1FPuNX3LLVTn4iuo7Fz6S19GrvPmAvy9Ksv9ca7BkzeB4LANwxhwDvhcdsDoZBEGMarRq5Luc1Wvsu",
  "key10": "45mW8BkEVgKjehdRigtFqXwhV9ZDijb9pYA2fss25gr2zyuHweALQimA7vvuUBm6vJV4Ma7UBT36RqJrZ5CjsaHK",
  "key11": "VE2n5StiNJQexfqwPfcfsJ4Dy4cGfKbmYi3VgFEi2pdkpsieAKBQwab5WK77hhEuYdXDBfQyNevkKbMHJ2Vz2Gj",
  "key12": "5CfHtdEymtixcs8LgvGRkFL53LrjpubtwnadPGDTSXgZCrkNHLqW5Yi9Ud8bMuc6DcH7J6bkc5xPsd9APGMQnqcf",
  "key13": "KkGpUZ4DwzG65pK91psKoHp9RQT6EcHTJB63NCfBjGb1i1Ef6iCG8r1mxCgrhHAwpM3dPndxzYpfj823994iwrP",
  "key14": "51kbZnZ5awfLqnQr6tHNZeCuTpRA4tigMPYGNtZVvVdC6EMBUXukZSTW29a4afMauGdiczRWQNcvuBcF3XQkCzHS",
  "key15": "5LnVrXXnG7L264YFUWvE9DZAuYVuY96VJhEkqcuQFCxHRsREmMNqwBMTjPMo1E6odUaukwVCjN1fcFW8Qo8qZxUq",
  "key16": "4pXtwtkELxTzWaSRtKJyFJWn2wTmbJyM8Q6ra2XwhcSsjTbJSQ9nfrCyrZwxqmNxvr3rM3HhxyLXxsRmr9J9M4Wu",
  "key17": "pfr5dy6xJGVFhguBapDq4vuV6XFkD3yGVzrjm8eaxc3b9ETz3rbv3bnXeL4HMEKHiXKPTccFgwa9i1Mq6sqH51t",
  "key18": "5wHFedxZt6VKbqY1Q2X9er5h5eVZRCUnS7rW1xLrmS2x8HV8E59GTkEFNDh35E6whbsEYtg7TdrNNK6LhLq4TkvU",
  "key19": "57ko3BTLW92dxcfwG136Hpt5LWt2jGxQsm5wda2E9pZwUFWTv9sVC9jzbSoY1iLn5NWAPtMVgaWBmUE7jenKBBK3",
  "key20": "2o6MUXYfrtDPQdjPeLB53mi176ccu32uw4RMLum3o1sJfzjtFdYK5x7YMVRsnJ5SrssQ8po79drEx1udLabZL5gc",
  "key21": "GTv18nE6FdZAxyjtESbzRQYHyFBDtoh18k7UmJdxnW4fqwN96CXYthYBdWAUmBn27Sm5NX6UUUAZgh3UYJdKzJW",
  "key22": "269rqBe7CSfrGn6xj7MssTFVAp7BDma3UfiUvbiLpjeV2PQLrVveNw9k1ebLgMBYFJg9AaZ9yWvLorfEgcKafdqe",
  "key23": "kmQas5vYjGwm3fgrrhU3LDRS6NgH8LHLtgdWWV4cjaniMFEceb6HQHES2PjUmNRXU495GMD2uqgFVBrkGLjYLGi",
  "key24": "2URdZsyi6SS8N8YD7THnkAQ6jG4CC3YHHt6d3xcepDTwF3Agp6YtMAsvHagZ3pvGZG7Pygt6KVDPFQfDSJiPKEZN",
  "key25": "4CJAWXMLhnptAYoLxCEk9aXgt45AqoCmZ31hEQDeehEgJpjJNyRcnwF9LCtDvcdUrv3XmAhFvXVXxJ2KfgnjxWme",
  "key26": "3SUDyaYLgQ7RBcFZs2mH7fiUHb167kSzS8vBUT6ChQqm5L5MSsBC1SYdGqgMdHF5U8BQjrohNUKmCTqCyHn1ogND",
  "key27": "4aDRi8Fa2NMxysZWDtG3eoRfKMwGATHLaNGiCKLRDb5XnRgKXHiRzKpMrQRa9MPXf6BK8WpQNvDf9p9rgePB3PSq",
  "key28": "4i54U37Li9QCxgTrxQYAwhmdSkDbnvrD8sBYszFi8ijPFQTWYJzVHZJjRyH8c1YXkzjBCzGYKPZCv8idJM1dUFXm",
  "key29": "2iogcV2WnTMkWDUxDRLXbYCfECyL9yEvCNnWF19FQXcAsYyz2ELq3DrQpZQk9DWDegDHjGkL6X4tuBTifRzETq4H",
  "key30": "4RRvWq2iDuPcr8RixVprshfJyJ4ahaaQoxoDJNooUrJbyUyjXdckgcm3Vf8nFZZfMpmdCEm69Tbsgq7jdfu3tbfn",
  "key31": "3BPijqiJzxiPTJTBpSTERBumEiUDGNQeXKcH7qnPBMz5KHKzF49cz7w28W7XgNZxEqoSFGtRSmBzdyLLu1XvgasN",
  "key32": "3DX5Ac34XVbbbhKzkGWvKgZygkhT7mLLgong9hnFqqK58kahtSJ3rUXxMMSGo7soZpusgcS9p57BWn6WufsKhMiM",
  "key33": "2k2efvgYDmprb2JT6ufg47hdEeToJ2KSpaF9M9N13WYmxsdkHboEuSE3rSbwN1tivFCC13P31T7wrqZ1DWRgLqYY",
  "key34": "5V9hkME4rhXUoLSspC7fzcdTCsc4orzKqXLSfdE8wedmw1kC3mhZ9U2ier2qA5j4Y37DSWRpRBLo7UHzMbTwdmir",
  "key35": "vNWzDQ6wdk1RF6734fLSB2ax2fmEmyqbNFcjh8e85b9E7WviGt2m6ZZjkNUxdSMdgmCmD4FZpKMFMZpKNXDDNL5",
  "key36": "jG9idQcmmevrQeYjyqB3142igekXTsoLTLKvwmSFBcFBsXVgFnpkBiHNa9NFRkBSmDEQVknCC7s3AuWrmoDu7oL",
  "key37": "4ZGHPc5K48nxi5Ht4sVyThHPRcscnd2aAouaoPnB1a7Kj6dh2X3ix2F8pfMoLYtCZWBMKb3wsygQHEYNv3CPew8C",
  "key38": "5pdfAJPfYG5Wqkf73mVerx86VNtQZ1C36dCr2gfuzsT6MhuHRyptEhcsZizuc4cSuerAd6A9N8BR5XrMv4oxE1ey",
  "key39": "62AJeN2NmU5HnwUo2C8mmfWVmQBSg9rDGKrG4hudeqfYa51W8mjd9erw4uzsVBeMTRiAxuYVBkAVwej6HCpq3mM2",
  "key40": "3UvW5me9KDmwxHqdgMGUxeFoHGRud8h1hP3pCTWgNojoBkoZspaxEaQ78g14W4HdyxK7wM27LG12soQpxnCGcn8G",
  "key41": "4dLf15ErZSqCHV216pdbmv8fPcuEj7KELYUqiodkkLcqFEwp8SETjk2321niqZ6vXf7Ju94HLTLzEMpwswwcK3jw",
  "key42": "JVwrjD9MYkBYPiAZpoc5CyN157eAhirkroSgiJqNB2EACMv4PzueBPGPKmPgj3DnbNr3fLJBgz29KVLVvkMrTi1",
  "key43": "331TVDbju4vx4PS8FN3LkJoKCrjMJNhXY3wiBkxoVdGG6jZ72jQ9opfgitWaBik3FNYEVowXL5Wz6XEYigmboDVu",
  "key44": "4WcCA826XzrTjUjtukbtRrZBCBfTU2yRi1RcA9frDCJ7vUQNQ5rdx59rjjnVukJNTEqrbpT8XcSKYfimR3pstn3R",
  "key45": "3VeqvYiPdppV8Th5WwBHsgyBkN8cyTnKWeA5nsKqTzsHj3rQUwptB3a2fmfU62jTV947afkZXo62wzJnV4TzCs6K",
  "key46": "2bJ58GYLhSipsVhortMKQ3uAhWEoPySj87wBAGV5v7GgDMM8GYTHoDU9h3u43LvVgYA1XphxYFYz9NPvjDqXJcMt",
  "key47": "3nkSzP3BHpM3fbL1zntQt6d91ESXjmRVKdXKBnyaFs894Kaw8F5PjymkyAvup1VVwiTX7JuaewMdqCHRHb9LDQLn"
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
