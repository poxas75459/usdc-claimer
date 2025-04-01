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
    "3HpS5cFkLijfX7XNG46bJ6naQvrE6RVhpy8tTuWroTtEpe5fsEEJV9s8DBSR8rQ4Mm98Yza4bVdLFSz47gZGjo7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9aiZawJqM7EzjPhQUZ8Gmat8R5e4riXjphYtz4xqxjQ44PTHgwRSCUoADCsBEartWTfsJMVdn1afY6aqVd5LaM3",
  "key1": "3g8wm7k3qjhubH41uoEe29fB43R6tQxQVuwRHdNvixYFMg4X7jv1W5erRs9iFH89MfeDaTXwQzJvVhhrVi4kVx9j",
  "key2": "5NvoYmEb2yAZ1mh4njK2qjmDP5EoJjQgSF7AoZvuHD444mBmEncSauaU5BqnssRNx2Xy8mx6oho8zvpdvs7TLEzY",
  "key3": "ZcrHAaemU55niG235cUMqaDkiKdAgmVivsSakdgtYVKDUdtQLijjLBfU8kx3cSU1DVvbjPRUjkrshsWwSqqqmZc",
  "key4": "GwzoXcqmcfERFHsaiZT66iUWsqdZWbsWJmDQkXgTNM9ffcBEQifuHBzNua4wG5ysuUTmN92pyer1rWVm3mvAFQ4",
  "key5": "29CRUpy4fscL5XaztoqzzrMqZDbFjxzjLwYL4QANUDpS7dxwXVb24UD8stqHQxSfK5PztJpfak4nSTMdLoASWAk1",
  "key6": "2Te6XJsNsAsRgWiu1QzxQ97JntgpxgHKCaYKcbGAGczAcEQ7u9rHYZX8Y6XuHx8ZtFkz5JMBT4zsr4i1rnKV3oYg",
  "key7": "4WdJT3T1ru4k7B39AGHzGtBYp24sZqTFteqiPakxdgdTMViF39fEzvN68nqKmt4h2zHG26jwexvRve58pyvVwuct",
  "key8": "62dTDRThepDsSjW7hUVxytSBwXMrKUotdht6gfAXFySkaQsoN179MzADC7YVnaUzQ18R6eWRTZM4tAiGqiTzUdei",
  "key9": "56WUWi3ZMmT2QzkyQR8cCwyT3i5yZAevDcnEu3Z7ARKt7DwYaFWFGGfbhgdWRSUiyPHadGMAqw7vYBC9wP6Xx1SG",
  "key10": "5o585YKe1vSXpy5vcrkFutJKb1hQjYLu7yiiWsthDtT2uy1CBKuEtQLLHJ37nhNrzfjmf7G3zeb7FMM4ckj7qirs",
  "key11": "3a8kCHDaiS7zgv9RDQZJUSmgbjVQs5qfKb2NhtrSz5v3RpUD1x5cdhwga5KXrrW6nsxaP9JcP6wB77ksUv5foBxe",
  "key12": "sGyKMGFcXguWKAbVcoz6f6Y6mDozuGkxttHZQN7yAMwB5M8V8zYjvxdDZgfreQUkwgMK2AtbEDcNWXhkHj1n6hJ",
  "key13": "4VJHqBrnKU1c3zboE7VfawrXEDrnYXPZJuaJKePtJwkVTanqyUN6bRQn8aFpmwE8GAZaaprM1DJZWT1VwCmvpHQb",
  "key14": "4S9nC4zuRkrN94uf8FhVGTzJMQUQDbqFjdxv3qWEPVRqz8Z1iDSaijcA2PVwLwT1QLuJL3mFypiz3FR4n7KY4mF9",
  "key15": "4yd97p76YZkmKosNKtJRxqg1QmEhmFJVPNxN37irUXdkWv944aDKi11J6nwgVhfEZUBKnGZn1zjkFzEG1BkSRoUj",
  "key16": "5652PZFLeFKRFSqcMGKqLTQqrFw5sUFpduJ3uD5nkz2c3aQgDEJupRJjncsB8F3VKHwCTzk66YDZ9LBP2b7hkxbB",
  "key17": "33GmykBmc8Hvh1GmKvKEhiN34HXmgBvqPmL5dCd6uE6RkRvXL9wMkVFz6Fo9Y6KY5zYpDCyKY3VkzEH87nsaWRxD",
  "key18": "4H1UFEwE9zrP2TG7q24AjCUNQiZUvNwLxGHZbRgk7Rg2F3uB67xJDQriAXUGFupS8pV2AobPKqDB3xa8aGGXPzqd",
  "key19": "58owa81b9NhVXib4cdD7DBqpkoZBhX1ZdTCEQSQ5PGsksrpYvh4iSyNHN1RamjSVcsiuz1Bj1oFVb7HqnBmikKgy",
  "key20": "2ukRBMt9NnBBkJMj3BfQ4vtu6hPq99k5fqzF9x8NxLdVRKfRZevr9nvR3nhkRtAFtjXaWA4VEC4EULqD91Y8Chqr",
  "key21": "5UVixDEPwHykH8uTrCFRP1n9iCbCWhd6enavXvJwpUeirvDvnqEcNnVRJWBcsz8AwT6Bbh58aCf8uj4fBwfh3XoJ",
  "key22": "4jQVPzNM54soi8hK5RgifvJgDEah9LWDaRuRvzptqeyg45tH9unK3fhoWtdRWrbq8RbLJUcVRJt5aidoKNLkhohP",
  "key23": "5oKSBV6TrtMXwUS2qBQcFoDhjgNdg1KhnUE1WW1NDDWdQZKj2FQvVRrBhGqMPE5fzzKDw4GttpF2TPWs8A7D71DP",
  "key24": "2xzWjeEwFiib9LLuyoZLNE12w3eWvDTwQAAoRAjoiGVPV5XS1P8xsZ6qKrsQaUrZtCtP85847Qtz9roga1ECXomL",
  "key25": "EBBF1TSzjD6KA2ZickZbR41subePByyGgodAEw1mBea2u1RCAkHFiKtTGu8n6Bjrswq4dc1DFGcHaSUMzDMkwqy",
  "key26": "35HATgtWf7WewE8ZJYHc5jXrN4JYioRnXDW8umTzee6yxE5ZQc2LmcF3CKP3x7RmZiGUCVMEyedcNh8yfUSKWftS",
  "key27": "5F2PFfwgbvMqG9NbtJmgtEkhxMTsw1v6UMtUJNSy1pabNwJUr87tJq8D3mYTtHptM1PZ9DxQJzL5YupstfTSr8Fb",
  "key28": "4Fq7MpNPebXiyDvtZA16Hz3DFXH1o26Y7AnFC6jNRaKyMmrpgwL6gn15151NBCTfa2bK3cshUunhqm99BG1Z65aH",
  "key29": "uUPbaeaPN8QqaLaMiFAGotmzHmbv15pkh7fUgrH37e8Qz4uReh1wKKpAz2u954HaTh1agKVsXPhutZNjZVqaU48",
  "key30": "3FaLBvkffMssct2CwChCdAwMJZaSYMW5vKtpt7JvTtCJC2JGuAEkUmYiVJ2u1RpGJ9azS3H6Jgb3vcqdDdJ6A9FV",
  "key31": "4US5q4NsoP3S6w8tCNo3huPtcYGcznDWnhQ18fJH97fVwLPYd3kPWnxqJkBp1i5dnfS1URPRynGv7h1hz9ieH5X3",
  "key32": "4Z9yTFi5zUr9xdPAPmEpxux75r9MVssi1Jgv9rmaHvzB1gve59yEyE2JDJi8HBfX8zyh1iVxDKyRKDQooDUeVsQF",
  "key33": "4VWiDKHS1zPSWe1e38GEmCdYrKM5nB1y2PiptoQGryZZKJhDuLsbaCv1zctVrcdV8ySUGMYp8jvt1PqHyuGGnQbc",
  "key34": "2LKNtHDWbUWgjTuoQKmqZ6datTpoDokGWSYd9hSpAfpqWB96jGKjgtf7XPfoMySzA1wEr5wAJnHvXtKpeqQLir74",
  "key35": "4TCoMsjq2yX2vcNvBwku4B76NeFeQwsQgh3YdVKRoCqzmHC5VfALDgyfL2zkZTtaJtq2TvKHvDdEQe932buox6RQ",
  "key36": "4xGjjbcLwGcbaaX7b5XPAsPiDd9AJwUEuJDHR8DxU1NYyRfME9zawL9m2RB3moZ16aAJkEUPFYNC2oDSi384kdMX",
  "key37": "4V7UZkcq1RR6yvufPitdUA7UDgSfA89P7fsYXwSGb6cSLCNcb5Ft484ReqUPYwBxm6dKV9sG5suHREa2Jh6kjUF6",
  "key38": "2zUv4yDJCuUrxjyHVFoajmgRHJJ4SJvYkCRHfVz6Hf1GRWLWUJ1N7j8N59znCkMpnWnAMJLfM7yE8rV9WDR41jby",
  "key39": "58hoYiyBvJEJKqgBpGxfJUQgc4ZMn6F3hJ5FGbhSvPL1afsTvUrLDg3dL58UHaBSVbhhiS77cL9b3MS9eYT5oWCD",
  "key40": "3tELmLu1hicTPNPcTNyz4wZsoo4au4fiKfBdQ9RmRfPBaomzhsys8oGUUdUtqsdYvjYFrEjsXmQfebm5CJVwhRnt",
  "key41": "KNDWx4UPDYVixWPh93udKz1AcL7w2viYgku3C5zHHznxWbXKpTQpFF4VaoMeNG1hARB1mvDBKtgr5xJHsDPnQv9",
  "key42": "5XUorYAiBmpoR9jShWe1uJT4TZS8nmcQ7Na6AmKSAmddomnwK4vfG65GVnoPzcF9gaPWFoogBUmdiHZhK5b6czbL",
  "key43": "uvjvseCKUiULosHBrCiVFf5zV3uN4p1ubeDPRrNp7zwfpjUvVXjfNGE9i1ZG14UPHcu1QuqXiqXmzfapYefydun",
  "key44": "xwH5Vq2QRZgs3urZcN9UJnzEmTpdeTjQDe2agnQxa9JWtKQsHTGFHsMrzjq8imwo3f37ypn4wTGvRJKiYqqoZn9",
  "key45": "2CQDcz7HYu6Ziye1dz8nXQovun9P1TLEo3Y7hrSRG27S4aNNuBj778yD1qmKu5bF6SkSDJdPZh8QF25Tx51HFrca"
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
