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
    "56fLyxqgQxqsoTtjc9dQA7CqYA328f36YW91V3WEi7MXBxmnGdZaGsYQGMDj1CcKZbLPuKRS2kcpDuqqrXnM8yiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDaMrCme6aaogBBKiy1LeMcnmJCdXxCQ8oFGREyyPzJWhJCdWigxBGYLEqxmVYNQ5SwRmJKbb4pSfHM9jma78QB",
  "key1": "5Pf6QRAvXESD39tjPziPkzUwX5Syggsgno2pWTujmh1iFkSxjqNcQw41CozY3o6e1HKvNxKgPxpDTqRwK3nhkaC8",
  "key2": "3P91QjRhY761osBWoHV4W6b4ngFkC3TG4Ct4khtViZSa2a6r7oEUC97tPk5RH67hrURyq22Te4Y8dvAxhBV6Smov",
  "key3": "27eozSnDgSrjcBqrBGPiTQFHQubMjgiJN6KpTiS1z5gqgBSH7j4dCJ84mDA1aNPnQbSreWLxCnmMHFzotAY7xu13",
  "key4": "4reYfpqta7rMQqWMU7VHEHsZwU67RQ2X7Gr3Vp3VaGoEw3NcnUkVLoduBnep7mGs92ka6W55qFqW4bdRFFeocsBS",
  "key5": "25dgSQyKxNwtUAjjzoj5c6iopX34rFG8eBvev7SStuMt6v6TswmjAuZsrNcjEXinUjXwcKHTrJtuoKjDSTUzx6C2",
  "key6": "AtHUwKiZM9pcRpHPCQjqYPVLpLh7c3VmM1Y2XuorVkyirSEeCh2UKSuK4LKF8KXyPBUFBPrKJjKjSWyPT8CTtAt",
  "key7": "2LE8igjrZkYw97q3Jd7t23SN5eKgvv5JkfMdorwCn4CUtL147kXY4EWXDzXghCKmWRVeRozzFMKAkHxubrZ1M4nL",
  "key8": "2ez1Q4AgTgkeDHcPQUY8Ag2vJwxZxWBHnxHyiQFJA2fMWHQeb2r5kQriHjwfGo8DiU9s4DdrETNmJH58hD6aXrEC",
  "key9": "2junDDmR4mrmeHgcXj2bJhjSSZ4J3bVTdxNfdnrPqyfovKHpoMKiSLL2vu2tYFABksq6hLUP2imsR2wsh114mhKx",
  "key10": "4jqhwTq1UYQAv3iu6UsNB9ggjfh9eixmJD3eMiNzVwWnCPK6XgvEJtTH14T625GKzVrDfcSkEfQHD17EttKGBGL7",
  "key11": "2trYnxjey4y5tF7xvgEf9dVbTz6cmJ3w3SjPGCJ7aZZe2GZKNVdcdxjJsr9oitkQ9GhqfaqsdgAfwx3D75E27k2m",
  "key12": "2nQ1ioBVmFAqms45QYeCqep5VGYXU7FPUqaUfQaiLDcisHTgGAxa3GKDVAFkarRLLfHPXGDS6TezmNhpnt5wesXJ",
  "key13": "2pjDY6rpyVazCLLDYA737798jeg6Wz7KdhSLBKX1UhV2J71ngSGzXnTMxN8Z8wGmxtiJRJp2AxThQFReRmxBWJAj",
  "key14": "5c3a74v57ADwrZMMtFpPmf3LsiUR5rAP21VTNA2HDuZkYMuRge1W1TTJQvzdRAQCWgwxwKT28PmZ71BCpkFVuoNk",
  "key15": "sCKUMrtjJbXGWV3Mbe7wmiEDmQZt8cvo39qgpk2M4iZGyJB8tyLdirDaper4XtK6miisQDyp5NNuQ9tGkoc6X9G",
  "key16": "ATge6w4cDJAX9omiA42D33EoApejK5w49RAMQRHnXGqwbhkqPw4ezYJcjUDZKfrzzxi9t6AC2mUWZFxJZMT9d9Q",
  "key17": "2NPyrDiFJ642sz48vbcUxS72LxKWT8Tm3b3HgevkdoDBjUNaGc2bRdws4UzDSQDgTVZknL36xf7ogCNAj7ffHJUU",
  "key18": "4d4WSKCUQSE2L1e8eZhrnYip22jvBF6jtqbvaNKvGUrZ33pcqrrEdUZWJB7pUTM8EErTbeNG83o3mJBaeM3bMsH",
  "key19": "2XxviLiPsWZoaZytzzjFGCUZzcyRqmsnB1zA7rbgguzNyJVkSLy8aURhNUhTK2qA9kH9aXodrYxk9WBu1mKywLVL",
  "key20": "5rbhyQNn14LmYd2RAepZLXJSbgqGAZmCQbCaBithQR6L2YktK9FiQ3jfBEXShM7M5LD9pLMvds4jAnotVgNyoika",
  "key21": "3t526DDhywUDLsfxo9X7FvQJXziz4uKVotzNZTx8sktHjvJwiTt18gjKAHYLwXPKcqRexxW75rVrW6PZGbHNaHQF",
  "key22": "4zFJNqr1kuQ7en1bcfSfUR3QvpTtCAXNY2At3jZ9nEyM8fR4ZoEWSEuqUDUtSyRqfnuR5SV8DfRdHvJT3Uvsd44K",
  "key23": "39Ew6CFmzc37sxf5PMeeQ5DSG7BvS5npJnF5TW2QJFtTdZHxnXSf5QFSn7EDQpXtMgQmhvstxi3utPD2eETbzaoT",
  "key24": "2N6dsYKRYLGsatSoRC5PcRtVLWfxfP3EKNrBPA6SFvA1wg3DcQ5w2ovNf5tXP3BMA8imzgiMV7F5NyqyJca2jZrS",
  "key25": "FP8Vm1ReqeNQmQHz38waJfUEGuPJhdncPLxSojmzmzHXvnQoc5ffNgYSox8L8BQFDDVpisdDfHP1rrSwPAFccys",
  "key26": "4qLZS4ybnkqGceo7UUtgMGS9Lyd7VUUBHTecm8eD4B9tv3aHMuJDJuLbKN6F3BqN3UoD4LFgFCCDPKFzz7c6BXn7",
  "key27": "5S1ud5LASKj66YrPZTUeSk8gdoQHxYM8FNXTx712bzSud6HtaALXJWFpRLheoi5tDD5ezAurqbpFsGAw5hUikMBK",
  "key28": "3RU5ncFjPz7oPwxSqjsyYMVibchHvhKqGnMKxLQPUHaw63SSQfFLinyUxK59mXwrBY3822TYjjHkKR5G5gp9ys4D",
  "key29": "y8m5TETMLF3PK9biAieBH9CM7HXeigtLyJJonznAK3MWQy4DGmBqUUEvuDN39UUgb1rkF1qb6JnxaFNwLe5xByp",
  "key30": "2oTb1bNYG3C93gAXonDc3prmPKLdWev4sn5VLfBnut3CyFwqfBYtWimE7B1RQeXcv9MvDLGzgknUUsUuJjSnqek",
  "key31": "3EgnMT9rKtMGpNhhjNJAuWtEAfgwnsxgShLSVzgpVdaLfswJ7jN656jbPMHUkuw9ny5W9sYbKAsWUoDi33bhYqDP",
  "key32": "5tuUX5rJvrRUpLZ5ShNA5T7tyKayk5rTT4EyC37WXo66mvTK3ac5So3Jpm6ntHehxZ47DnoFqbHA8rG378BT6cwS",
  "key33": "26q65JZB1a7FBiLtUW4h7mGM7mYdmnMWGBLH7KRBaiXmBX1KCJ2D2FEeYn6SmB3TjyEHmXBDq8ynegQAH19KsLw2",
  "key34": "3SbamJvPEspPTFb2aGPWxw82vBoooATd3ptQpapwbfvtvSkJqapgRukKoJfnkjQzXiWtjBV6nCGdNEk7Tr5ECmQS",
  "key35": "3tNLj53Jh2K2jE8PpSvyB1Xjxz6VhFiWHaJmJjvhtqkU9sEy5xeSsuVJszt59dmgGoze2sTAS8aVQDTdaWKaUcsR",
  "key36": "64q3A4kXNWaMX1aKqAz2TM7kdniEUL6mrCMVaRJNCcRQAKVGuw8DA7Z1TSswQthzCEoiPcwyoWkZpQaDQBSuUN6X",
  "key37": "28S6wUuegDToDqpptjyP1orGmLKFcjvvSMtftwtxGV41ZFWK3imq1Ko6ndiMVum7ABFiYWozHTnm7c5yttPRDFCQ",
  "key38": "3Crj3Hu3k6uACRcuGoEuHUH3XUMktiemWF4yAnhpCK4ZUx4HvoWGBvPcfvoaQDUTjez74A8xdb49wS17UbchWSdX"
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
