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
    "amB1Z6Ep3YBiu35UKiZ12XmtzrRLt9TQ3R3WUhBD1aTASGQCKjBZdjVod4FmhucNfZixxaJqihtnZXtDw3TLfEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SSRDsqGuimBVQL8f4bTF8qNaerWDa1juwgAiVsQTxABsHQFjqvauALKWwSDyzvPo7d6PGtWsy89NMNfaJgnN4cf",
  "key1": "5mtQHGrKQGKLsbVAf73CqinzHgtwPQZQTT1vdc6TAeL68f7EAvjP8m68ajgm9VkwXfi32aygVCmaA9h72hFKJ6SK",
  "key2": "2ScJ92w291nVEgzvYGYYhFGfLz2gmfoUSmxykvAAWoNcu1hDmxEUtJHEAMewjgjhTXMiuGubZ8VUACfveEoTS7Vj",
  "key3": "3LL6uPRXsBTJ8ZNsZCrLNZmKJPbWrcNnsZvBEPMLKSRyd7JLVdoPeK9WSUuH46s5zCPFo7vRDguc3gmFzN4pcF4k",
  "key4": "4bfwhwijewPT3BKEzPPgrvmJ4ALcCmzMX37fV3EwdnK5J9JBKGMtE8sUwJs7iLECnbwPHudLHSXddW81G7TLD74o",
  "key5": "5111FV52oC1WgjNphstXQM2FgzfPD5gCtJXctxZYMMUL7SViR5Da3X3eXozJcoKHYChw1mqjjbNZ8KwrEkLbnwFU",
  "key6": "3dMxb9soQ7Pe5eDzHsEzU4CK756kDioSh2dPfKCMFekfVfj9bGhqvBWR6W2JXwfKXJ7BWq197hARne7iL2oFUh3s",
  "key7": "NZM2LN1cQTtqNFAqx8GUUD6TZsNy39E2mPbxKssqWPhEGhzN6ujRpztrpUA837pBt46hMhtcrskabFyP6yJLy5d",
  "key8": "4PxPtzsxJVusfUBV5gHDh1tLJquVD7ebAfrXBqVbhuSuurMma5n7GqTa8QxP7iBPafzyv8ZPqLj4mWFKrUj844HK",
  "key9": "5Ub5oNk8dCYYrQXMuiUpuw8LzHYSN5fsQeL8K55ALBbjQ3LoJrypFsdDBEb1g3qSyWNpfnVqAe6uTApRTVGUocCZ",
  "key10": "54SKVGFb6HKrbVtfapcfUGNUjxaY1M5zUSS2ZczP9YunSED83ySc6KTevS5pRPk6K3DqAV9ggjMucaQaT6LynNUS",
  "key11": "5xPwV3QDfZus6cNU3XP2VweKUGPv3orGVyXYr6Hr6DsFt2K8yXQPFzRRcstfoFuCpcPov7LncZoeoj4uKexcuF2e",
  "key12": "57yFho1PUpTYbQXnTv5zabqL1TKNoh8PDgfc55tihxvcYyvxDdivpHiMAifNbYp3vR1Aunqvg2vUZ1z2GsVMuNKG",
  "key13": "PbLQQfZ5Dsq9JUDzTTHbQ8BNc5Ug3i6PMxYQGimrtV2kPQUR7NUZbrUdCef9pkcq9zsatM7Up3LCUiadGgWo5LE",
  "key14": "5NC9VWwFruSEMyUKTtArcKVXHcqwfND4czpf7vwDuhUjMBwYc6FesPGuYvYyxmkcpcmd1XRzjeALuitydZFeDe39",
  "key15": "JnLsYPx2ckJ6KuAFM6QVzMvGS2Unc9mreinPF71JZhgUVnHr7q8n2XNZYMDM5wvuwYarpvkH4GApUWayvAhed3F",
  "key16": "pmX2epQKnZbJWKyNeaUxRYSZvA581HjnAKzB3WHTF7Hd77fCQjp9mpAbVPxoCuR8G8Zbi9KWhp4KbcgcJS2HS2S",
  "key17": "43eAv8xJmbFzzk8h5Rx6Z6hdawWnGjZ6giDsNMc11W74sKdX44cFVd67s1LMVv21G1W3GU5XNTsgE1XTMxuwiu4D",
  "key18": "3yD9N8nkNtiUF7sTTRfKZCTNYxhmdcTbyR8AhQ1B6HTeMuQGmpEjGDFCHiBEG3gQTmKjymhTHoHXginaWPZ8Zhe6",
  "key19": "47UvqDYrnkyQwFn2rPUY7RwqTXHPVknUMQT4ZuDuAe4zRiQ134MxsXBMpFjVXfmHyFquKFLptBrFoniwL126u2ah",
  "key20": "pJkayy7oGxNRG9QomZsBZUvRqzsdamK5JRAELSQtN8cUwnUwUWLMDDzNxsH66Au9N2XsZQ3jWkVeebTiTfRUMzY",
  "key21": "jKoG91E4od87DtkN1QGWfLED98o83TNYbWo9V2tQ38d8xGPwdMmadq4LmVhHNeDPHjKdMSoXASwSNQhVtXLj2sm",
  "key22": "4dazeTvufAfdwMmrqzWfZB4gWm29ncidHJ9J2UzwpZBkuTZFkxuVLXDTzwbph38tghTWHn94vh5GwUoskYQYfVjn",
  "key23": "2SZHazheWqNFD6idftojVoLxpnN2xzvH1oMbDixKtgcUYX1MPK4qBwSX3eCWaWWDDb3ieMMX8U8TcuUTtHa27mw9",
  "key24": "2xCz5q3MQnRTsBfYPHJSDaLVQ44Cbm5vzzZ8HtryK9mtAbrwuApcf7kug2hdUxfBgMUfrpTLYKpeNKbEwg1YnEUN",
  "key25": "3S3tdt2TU7fEDRsQbCjtdV62jVZyXZfsWyVCRJN3qaeAaxhPXMk8XiuiytLGCco5PT6sEH8vWb6AuDNYt6QMkAuh",
  "key26": "5nMjjg6SmKn1LQDptmpA9ywERBTP94UFGLandq5UxVYNiskVQpi4T6iDJcDqFGMrpDC2uRNiCo3KaVC66Ct3QFnC",
  "key27": "vqbX5fmYH3kqXQGZB14So4sSBVe9rFFTfoEgzDwkm9KhJ6qBpmju61n9haQLFkmmTeE1TBTKrQTLjxTVf9xTFab",
  "key28": "5ggVaGxVBhQncuqUSCAShuKBXLsWGB9FweH5jKiubNVQge4r5wxZ6PP4u4k6ShmeZFCycEv7TEPuEAyiCmufwdNC",
  "key29": "3jyJVwDcTsuSnWuC5XbiPGcNVSoWsEo1HohxPkyqWtt6U8oSeGLfMMnZ1QoqLgWKsHFFhX5pG5qmRTXjRndyt2FS",
  "key30": "3BWEagdK7hvhL1bCz2kpbwPRYLgeAhYokhhvNyXpfiUn2uWzLG9ZKvjGerJN2idxMyopjEbQatxNjGbKz69m3YvT",
  "key31": "1hpWCEgGmqM54eU47QqhHCFzkJwRtWHCJyk1Q2n4SHgHu2hpDUTcq7RxvSWCXuXpMKpioT3EYPwuHJ1b1wyRqjw",
  "key32": "4dL9gUYvWUVvXZWNUhLDv8WJ1n4ecfTeckTGSibrpNPfbh3HHP2vmiRDUjyDSkbb8euCwyGBZS73VPURi7c7t3AZ",
  "key33": "2EgHyBH48VLKJ2qdg9R8gsXKvHnZUty3HyP49CPT5kKKViphjQwBfTp5V5Hu1JDk38hpfn8h1yqe73DzRpF4TYLg",
  "key34": "42DKLKqagBi2u4PhogcUkxZ31mS14h4m2JoHrLv1DPJBmjcjmLE9tuojPbMquAwxMmFd2rSU5Fov5fZVi4BNoUAH",
  "key35": "2UuXPQoDqn8ZGJMxDxedgsWkRpSK3b7Gy5NAqK75EQgjjBJojwjAwwPNVuZkSy7WuTifoVgCAtW23eQYV1GVJUic",
  "key36": "nwais5gHA9vbkCMDhwzkTsaEJBmwLfKa6omT9PzvSRsrFXEJJ7T4brGruHa6s1xWWCoCW7AWdawj5TnPv2FNCYr",
  "key37": "4Zf7QHB9X3dHPtPem1mbv1zqLZU5iYMZ8RmWuk4TZ7u2mrK2HAXkWbxog4ybcnd3W4bJskgXU1BFFgs4fYhc1qfL",
  "key38": "2RkHpZi1BssrX26bd9qvRtTbHKr1LLqQortjqDSXcrqj92AUHWW4GJ2Z2MfvjKFV641muuudKHyH4zGGP88HiF2n",
  "key39": "3iTZsTsQd8twt4TpYqTX4txx44GyML8fAbeENL8Sp7ptb9DU39s3YZSapobv9drHGhrELwdnDDLdgafAG7nGXKrK",
  "key40": "5nYScYuprWrGQCpPvcVwgq1RbGvHmE7mup1UhgKA8aCjYETCx4BTCjSB39hyDShAyzkKrjMTsASUJymCA8egtQKf"
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
