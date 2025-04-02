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
    "3UvQaKEypXEegxfweJqqoQizmsc9qnEfSbPUSWx7NacpyengghhUC4Q4Xpi1XnQRu3spiVArmUxGEp2fvqDBu2og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARW3ePrZBSYevo8Gqmf3ZHXeKfVLMo25XQscwGyNCYWYNvKaUTJ2RdXRuvwqWjjZ5uEW35nmf59m4WmUH6MXQhU",
  "key1": "3G1WkwTUzEdWsCiQoF6HU3izfDxDK5wTMoemSk8oTpH2BqKGx9nu4a9xYoD2MdDPdVMUtrDpZXP9WQU3atUyzHyf",
  "key2": "34nkPABF5GyqVPGp1Qu9AxVaBJEVvAV9t24Y4UzJdaNq2oWMdpbZszjjjsRAY2cgL4h8S8wEmKDfh1GBVbQaSAEm",
  "key3": "ezQwWQEpCGwtW9Dfg33HdcGCtXT84YUZGLJs16zU354pZjmLWpnYBxoN3g4D2RuhAU6mUh9GCGdVhTrUVKW1syv",
  "key4": "rRdtJhWoZFtr51dJBtLqqTHzfHqiV4MSYZXYJxywVtwoahqzB5aYhQshsNfv9nrTHBYEBp49G3JBWF5T6qcFQbs",
  "key5": "3z1wTPQRo2BZsWoTxtxqzjkaxHp6WQNzf6pz93FBii135dc3Q4iHwfGWrECwGaXFqTraNiFJ62QFpzQHmnWsZ8XD",
  "key6": "5iTNCMw7eAmyrM8ZfvuYZspc4VFGh4xqpNCrW5PF73hDDMcPhZLrfLUTwpVuMr42rKqajhjg5CRWK5adzebqWZkg",
  "key7": "2n2Cn6kYkLiCVwn8ok6xrhgwnchyjDavSGEh9NNRRd1NwAQDAimUsWx9GW9NzLoP9XPWaUYj2E4DVd9iKdj8sbKF",
  "key8": "ch1rK8tt32NGogZWfTTXCV6gPijYmmVzere5ekiTR7wHS3Vke8gGohUfA7cKLqtLu45oX6VHfcQQhRFSxqL7NRX",
  "key9": "tZ2qTnx2PzRZQrDyfbn88fktpuXun8WXXdiim5ZChtPgD7MdSTqn2wrijmBts2ynJDc7uGSW64m35kVZqTRoeMk",
  "key10": "cY69LL9YQnuMj9GeAfynXwdVPd8NE8qhx4GAnsNbVKbDAcS6HW6enGwWHYgbmWJ1p3zdg8KoAXxs9YYbiP2dKxC",
  "key11": "oqw8bmFSEB2nwNPb8JtrcjmzDGj43Y53vaZ9W9MFisEc3bc3gTfbrGPrWQ5ZH6qfx4XY2KAE9aLeryNZ6dqda88",
  "key12": "2kEo4BYEmkWNcWCGpRxjmF5PfzvauMeNJdG219W9Pz65Lk5s5q196ocnyNFn5CJhzY9GuifCSF8yYkz1W6DotuYM",
  "key13": "5m43VjsdV3XYtEKzCrjMdZUsJHcVPpeuXHoTYkdzVuHhrEKeo8qmboYYkirG7nqTnS6s3mDMrKiWUV9QiN2pVxyY",
  "key14": "4UAN2G2X1HHUNvP2XAPUkUAcGj4TrodvdZL4axCqghkLK8SukbzkkfRBXksz2rf1Ry92gJxZj7dJv11D7VHEKH6K",
  "key15": "3C9JTQiVkRMLXSBpZSmDymNC8ywWqH8gEr1Yr4LgFxSNxUf8UYZDTgcSarZLPcttZhkhAzPoDsHaorYnWLReigvt",
  "key16": "46hPttdsqMxwdHPj4RxWs37EAo5yb8LqVYFimZaoEonoZi2TTu5T96WkoBhRweHPyk5qxsPR2e6gSHVhsc5WspEd",
  "key17": "5s5D1WgcfjLur8UDqcFZQ94SGzeu5kPcNt3p8JFBrVp6pB7nuBfDeWLWsShuiQY23HY7PtFS7ZhJzZsXXw4eigju",
  "key18": "cSBd3zAetq2SJ7FsWwKXa2go7vBBzJdNLFLjyLJh1kDyXYmw8BKtXNbn5ge7ZY2sHL45uQ9DtNPDtF6Gq3cnJDg",
  "key19": "3kFZxSMA7bgqu2yrLZ3CPg7PNR367fyZa74soo2jH8cu5eszNFTYHhn5UqCAWFKcZuwHaVo3hxnCQQzKVtv8XHCc",
  "key20": "2vGkDY7H41qWrowy5ZKmQPNvNazPMofr4XVDPYXwr148fS3Fk3WPavSPPdavUJkXLzWaz9Pqh7FgLvh4p6bBd1b3",
  "key21": "ZMGroC3MkGjZbRMPrc2AAsqkAVb75gXjqjnRPt2jQnuY9n9dCbSppwkaTZKb33dC4d9EioEzC5nYNtGqEzaQtYQ",
  "key22": "63ThVoTBuMmvFYHhbMa5qFzyvSDYs5kT7xKHYFdBBb322y4iL8QxfXCBtxZjALDa3ytJC5SCUf7BsZFFgbwoVRrX",
  "key23": "2N5ApUrkYX4jNQbD2FFHucDnESffYe5TnJo8etiPpgkDVWmkBQLZizpNyhiK9LRhFEaBzRSrYZwhKYbhoS53T9mx",
  "key24": "uNbZ3B6KpQoQuHk1vxzH2JiNN5a8VEM4D23cics7FG8pM5SZX9GoDhnRfQHACDuJMcQroMHschRF8PjQ8r7NzNt",
  "key25": "5iZqy4n7x6TK2h28yFKnFKZbh3wpgQjJCBxUs8X8F3WJoBnsMpkbAcNy27NM18hBkQu7StMTMhYBakxsEat8zZxD",
  "key26": "3JstQcGjLa32bZPUwA8u7SvLTmiUo6qYagz3RKyPrNA9HMAvhv5TMRYW3ZpW463T5jtjja5myAV3koehJgLSX3VF",
  "key27": "4Q9ebpvzkZJiioUVQqaLoSLxhFqLuWvxVRCrNCpYr67npeDvjVL6i1LPGidco48VEKoEvPAs3NM7JDgsh6jgDb45",
  "key28": "ByY63zaEUt4dA6agKN66xapnzFfo8YCiN685843CsXCwKQnjwKHeCzNP4Ppfk18ySQt6BMTLdmNVf9Shs2uv32s",
  "key29": "3TENnDp68yg1YMs3N7ovsk7aZ8vmTywenvXZqx4SB8nRZqw3hsskN39BcQwP3Yaey45MzdrfqRacgb5JWJNbihLj",
  "key30": "49zquVWgd6ueBLc8ZUdvkzdhQdM81GHU28ZWWTZePYp5yt6ZVL2hhJA4LMdqFZ3KyqB8iUJk9jUxH6GH4kWvVtry",
  "key31": "3QL6rXLxJSkuo2ofqKrH31HxVeoBxgtw4wq8wUBZy9pUywedRCKrqKiHQA2Vq6TywcvE9vY4x6xFUuMnUFBAego1",
  "key32": "2jt7zM18kAuuE3FK6UpAzmj3Pj9TrLBsacgq3cTEEyEeG7Fjo9UCcsrKPYVpgEN878XY64F4zgoAUvdZQd5p2R4N",
  "key33": "2bPvrW7WkCK7k41ssTEvHstF2j2yRU7vjySuo7Cp3CMeJ8pLrtdMJmkKqdudgitPmKk1WjcG13i4UwNzi4oxaUbE",
  "key34": "2h5Ju3M1Dr8DW6gAVsKdFboVHdAGRF84rvXPcUyqDxBNCKMAgyseyhiu6oVMVuvzDuf9niTUYKF6xbKkXxG1wm7a",
  "key35": "5Gn3grjKPE8K4rXaJvPkpXdcqVjcvzUDP1RVkrWc44vzGVby1p8CSz5Maqme46QuQGWz94cXYSz9KxJyK7AQr6no",
  "key36": "2bTrvfTbPwvA6TQ7QYsqGXPqwYz3DRQ8cdYEN3DWxJSyg1zkYSJeSHkHkbH518fYR8vYWyPx3s7iLh6B87jmxoHU",
  "key37": "3gjPVoJuJUSfR2Ksfxur6GPYpZrToNdtGCQFSWpc3Qm55qT4RgNRvfGZvnRhsELxZsCFhbNMipa9oRgBuWHuypke",
  "key38": "586NRtwcSpsTuCifE5ZhUx6D7LyDdb5fjJ6u97UcbjkP9KWv2g6jLEzoW8jngTDeJUQ4QYcdxDNeKVHgrhfydMhd",
  "key39": "4j8bugABM9TKWX1qcXXSBvNNrAML7W1cAA3hDmfGhx4mm6AvQXmNZ5gYUz1WsdLXUGmBTucpcbQMEVec4z5Wqhsv",
  "key40": "3v1ZoFEFUwQyunAFNDB5Yyb6mvxWLx4fwrzAeVSpU9snmKZXvDogjVPirZjHSLUCpi9kguRraVWWkkN1h2fCsqpi"
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
