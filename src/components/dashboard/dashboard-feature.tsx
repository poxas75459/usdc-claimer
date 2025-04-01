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
    "54dRKbSfsXZqrFXGVxBR8RK1ipqBtGTcx65hDF4n3JmBXHB4RNLrpEQBRtJZGwuoJs8XcVGvuL7RQPMY1WDuGmAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjYwJcXP4dta1dBwFAm2SPdAqUaYiQdExyEhG8XBJWXnMW35AXAXXWo633GbrJyWndnNRDQsJX5Wdj4VeYZ1hEf",
  "key1": "hDRrN4KoWMEyMfifDtGxAdudb47s7T9vxpsngW12zKtTtqhRyzXnFtJyRTnNjjLxtC9d4tVU65BBDvP86ZFGziG",
  "key2": "omP6EU21DZCABtrryf6KEoWAQXodDBMsFcwBfrehJMQzEPQ42xdM8wA35MJnu12p9ABanEdAVx6U4dF8xww6woX",
  "key3": "xuPYNGRH8Ut19fh6KPjuqioBVCid6UZTytnzynt4NhRaPFDeu57EfBVdHwmmhtVe2KCWwLZWajPuuxjbJMa1Fdi",
  "key4": "2SJFtZoZAG1nZWaY1kKPff6VcHBc3Np4JFEPrcu6sWHkEhbhJwQEWG6KvWv7BGuxzzCRxvPidpt2yQQXPEo2TNNr",
  "key5": "uhFabguhV58jSXn3NmMS28cuhPfLMirmMzfjcMASAdxoehx4gpaeu95dhXqd5nCq7zfFLJdJ2w5joEWRaMBC6py",
  "key6": "34MQ1aQMP85LBa4TJaXHzZCZQesLwwhf7aVNijwA3dLGBuLrzKB86FdnFq2fgTHZzt4WVVaodKdaJQ81hb1kqwSt",
  "key7": "KhJDoRf5UfdosxaymJL2jZyuGxqhs1RUzMz4iiVXRHZGwvqHaP9xp7dSHWxFrRFkbiBKFWDzgBQVocFkJNzamm8",
  "key8": "5SQ4SdLTYArL5zr1aP3Lg3BfPvopL6t56BjYzN3iyV5k3tymEayyMUBHfq2V2DpaTiiG4hvhZW9o8pkPK6EpSQ45",
  "key9": "4MzTJHyrpW3THRYEwuQiW89Nms1X5sop542Qdv5VvUt8RLFNzdRyKQzK3MdyHu99ywVS7dQunP6LPCrbdiJe1exv",
  "key10": "panGJBP9RsT6AsVhuLrNU2isYBS9XWHxxB1628HTqzETdUQh3cGLtRRM1Q3mE9HBDiE49uEsmnazPGFiqGFobtW",
  "key11": "5qBCxkGQoL17PfNXXD8j5kYc7aKM2iF5ZrVLaX1YghAP3mUaLWoJayRbUHBgskarML9nXEWtkA3xf7PyYF1Aij9u",
  "key12": "4co41i36ePWzab1MK2d6r1WbVZmAi4grKryzDEAvTWFGTSDbRucCEshqjGeFKKeUm7LEMtpvb5BzVoqzXSj9UABK",
  "key13": "3yNXDFCmHSQWbqTpqWwGpSLZbPr6SSPj4nT6outvgJBnL1745bgUrikyri52hgV1Yn6YqnpYY688Ttrmb8szFtv5",
  "key14": "5vHspJW7aXG19zavyhsCoHu5geP5pbRdarss9kK8KjR3UNBZBnYUADah82J8c9yDvJhEMa36zivnmv6YEChNufQn",
  "key15": "UCfuurb3HUm5DCS3hQsEqEnBdhFzXSpVtMGzGaG3Hmqgiv3qSeKNF9Jbgueb8y8pDJNgmCdLDFDmL6u6pewP4wZ",
  "key16": "3XpdBJBixLmFyhPxXaKAutcFF8AysqcugVRddqTEMPPR3p1q494YRuetkiUDpCuCXQYLxhc4qguHSq8SJgfLXc9y",
  "key17": "461vnGfPXsZD1cdqCTzVhYgeZmFk737gBfa7ej4S9SQFtUCsqp9N4fc8hgZf2LsJEj18UwiCSFShm85adoagmR3H",
  "key18": "28Hmu3ANu6efeVSigX87c8Aa351ynMgSgizrmPPKG8mnnMFTpakWZe7JgTctBFfJ5u7d2kvJPjMPnWi9tsK4NkdP",
  "key19": "36tT4FGWRKcaFC5Nitgjmat82H1SANGD1QWK7r5pEPPCghmv6JwRG5Voi6V8nccDEyihS3PpcaJF1UzoM22sEaY6",
  "key20": "4FNajUqUVd7PMQrQxvwZgejPF2jjuciKoqhUqXBbR9XNC6wSAFaB91CDrSVmEfLzFNDiaMhNLa6FvV4AGTPA2Cjy",
  "key21": "bJMzf24wxfgbdz7mrTvv2P96ZsDzEsTmd7kjTM4CL6BDPmB2pPZe9FyKxSckyid83sPme3gpUYmXKkekHXVvX8A",
  "key22": "5KYkANhMFzNakpES5fm4n9yT7FwXWUqFx4bnTPzhERWkkfh5we59HTbDiEpZ1fbyLXjQpWGxYEYFmc1edqRFgus8",
  "key23": "2vTxmv45fph68Wn9ceHCzRvdKonSk9q2yDhDmzQkcih5prJnvEG2WmqjdmzrATz83iMSEokgouPnd9iuBiKzTweD",
  "key24": "4DbStisCHgrr97TAv3TBNSEdRqhCWf5xNPUk5wYay8SCCnMUTrjEGeKRjLbDuKiyAJYWFdhez8Du27CWnvhJYE7y",
  "key25": "ErTn2UjD2amoTbvj9i7t4s4jfvKKkxf73ZvGcSViBdDp8pPqSsivNFoSQ9Mh2WxVxk4oUK9LickQJ1xJ7aR4ywk",
  "key26": "3KDckJE6ZBKQwaEBtGXMuZJYzqBUtPBez4xJgPkQTG4Q79rzSLtRr7wKY68x8TExGKXdifWPWxuF2Kg1SGh5GTih",
  "key27": "3FrVCnf6VgFmq1VZnTasTFMkYqW8KTQ8MRAZqqpmB7DxHjg5Y6KudULAX3FqGgCKsXHDfZV5jtGpEKSvMacaXWN3",
  "key28": "4b3AijZK9PSZneN6Ucekw1h5eQyCVAAJYm6aq3TqW5kj4PfGNN16sjiKMjpRua45cVPQyhU6i3k1Hwa8HW7AJE7z",
  "key29": "48PBMNfESsT7DUZrreFtmivc6waqV94ZY3cz18SYU7DyYTMt1xKkUQeG3LXWxCBMvDjsrrFXhvhEgTr7ZArcnJFK",
  "key30": "2T7w68fkB6vCWxgKgTHr5Wbyej7NMCi9URsQiZ3xv279asixQ9hwGPPxYRDZsjKfnZrQgpZ5qq2bBecoaCz4rd7y",
  "key31": "53qudouVufNoxfzBsLphsvAJuDmeycEU4KW8uMKfF7yMfd4AfTzAir7Nn2fWaUEpbTzvEvy3xwJrE7AEcLDS9n3T",
  "key32": "2mZMLtPW16t1hUMShFoV51gqkfDLN4wuXyYPTAgnaNxXhSLecnePnHomzTtY7Pc1KBUkVuJCy55SYDzeHqfY4WRj",
  "key33": "2MfcnaqhtkhdBcRE9b22U1sGFBMixnzuzZAeCF2Le4Ai4NPKgRcSGsbWAnDsR3GVifuqLXWkdfb7HGn2hYL2ZZTz",
  "key34": "27DFXmm3C9UpB6qvV1waRcKvafQeHoE6wKGUWEygFSFqBMtWibhg7m3TkEuJbdmWohaP86AuyczTn37i7nrpkdu3",
  "key35": "2nDdDt9z9wcFWLYuoGwx869Qf2H1MKZP4ZnrEfBik3hWexxYauv1ZQdye3rbQRf2THX2mXH4LLi3Vi66cqiau7PV",
  "key36": "3ERkTbFRYfdBkvEhhfkwCrjZyiXD7BdqYJ6cBYvACHqu2fCgy3KsdgajHUVSFd5AwDtYQUk6aYcQhJgY6PWSE2vi"
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
