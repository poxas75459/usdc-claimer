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
    "2iknEBnCmt6KqESgPqdztpZYBYgvNfHs7iC62SE3cKASnrpcPqtqvTi3bMhpFNjUjCgzNyzeY9twsRaETRZoP4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXsue9gNCmbgqpbudSjST8Gbd7xMts3pPRDqGTL3UXtmf7TpeGeUV8BCg1FYBvnniygtTU3MW7SfW1r3jLszswF",
  "key1": "YLRQTzJNc6ej8gFFnoNqDJPqv58n5qmDE9L2q3JmGMn1ZQNVCEzFJEzR1GTfjk3nL7ksiFvT5xsNBSATwnsVcAc",
  "key2": "3utqkvUHA1iUHh5nd4cUj8QwmpsTAgAKqfBEGZBhrJPRP4FRXCkCQPVH8WP2pf9Nvn4pqrp9PurDzSmTNkXbcoC8",
  "key3": "4Y9nHbtLRDCPHwKPfoJ4DE4wiynswNhW5nzwaYKcMQcjyD3bQZPePmn6Nv8Tinr72q5xETZsp8KxyqFUGTmfJNET",
  "key4": "pn7WEHovSXeQ5A96bBiBdCBgXU2ScBkCBiGDahcNPphFrkDML21LgFiQTZJs6ua6XXyNTeYVGKhPPwPGWsCK778",
  "key5": "3i2rkqvUx4xBsR2Y53CFCsyJFCjzWiDdjF6pZhAy69tDDa6tAnVbvCWyGwLt4xV2np4LbmFL4q6SXoYEWJKbmQx",
  "key6": "zLrBe9BtMVEPk7byvotrq759Aa8manktipXWweSkFGHaAppp1TBwumPyfy8RnFrXhUk2PvgMsCEAi1TzUa6mEKe",
  "key7": "SwC32d7MhhsKEpbhrsXpLis5WjqQGYMdWukXNqsPm1RoTmnLEUJUUgSpTVKRjZchq56KcYimX5LUgYEafqNp8fx",
  "key8": "jeMGv9EvCRdgkF3KzHzKPWj5V2S9pPRKfFf2v46VhVxQqQ7LwAigrJEi9tYMtqdQRnhukHCdDP7LHtprvSXBCHG",
  "key9": "34nf8RL5RUqsNT5E1MrJHX5Pdr26hghsTjpxc9va9y9sZcB6E4XNxmtfXrLLSeypZT7TXHdVgcRdSmmZ8j7ja11d",
  "key10": "SVW7TEUFyKHvrLqcLNX4f78wkqNN94nuMDCc8MPKq2ie6M6fjbLhqhff5htMRgLjrVSGgRshDiE2MJvtKevgPQo",
  "key11": "3v95FXeiC6HBP8RCfMnKZrouip29FVHRo3s8gKRoAF2fRDn9LQPKNmPFLuJGcHoXniEsMN6DV8NptaV6jGVjMCL7",
  "key12": "3GfQo9yj6sNNanCraTepG3uTWVoZTdCFwQeAqgY7QQH7hw4gcwNiQNxVuZjhhvuzzB6WMnn8DwRJweNJmSWFeMVi",
  "key13": "5t6J6sF62a9P2tHGt2VsjzzZkEdr83w5373rZ7bR9HaRVHAM8aUqJfcnqDwiJqudgbJ4AwsejgFs4ZCYVgudic9G",
  "key14": "211xWEnDQdzKyuE6ytXyzVpMSzDPtsRF5vKyKmwmxneYwKcbdJmD1Db4W7gwFFAhJB6qzdxJaCoVKkjzo8VQmYbc",
  "key15": "5nXoKQAYgXeTHS8TewwMPk1YZ8yi79xG8FTkH54nhSoTeSdkPGGd2Eniu8yvWZAs16mgkavv2z9NBh1pAZSQA9qT",
  "key16": "2JSoL289LHUw4wxnZYTnkQPQJFciQjMCEmroi8t4xZdq1mxenqv69m2hrsbYCu7f8KR5CEJQyx39XcbRkxnivDLn",
  "key17": "2pHpqKdfJkUxjrUovqd7VfdG3Epv5LDn3bYsq7i5mYUBd6fRakRa3BykYFWSgAr8aHUtkDe3mJ4frvvqdJY3mpTq",
  "key18": "3oi775eEW3AzCsW94czwpNaNpJXHtPexYQANigg1D7yi4XRYmghP646fZFgquLehptgXNWDsgdv9QPKMwcGmpaJK",
  "key19": "4cmNj6PEmVr7SBSYX2dwPd42ETZmj64ZWyktwHRv8RXRZ36aWSJjsSsHxeEJM7UgHNrLvthV564z2RY79zd7LPEj",
  "key20": "4FE7eMo8GHijueNJ74WZ7aREXnpRhLM4AiHG377BZQv7CC5XU9HX9YsUhuX23doAMofPHpgBpm6kmzbnYcKRc2TA",
  "key21": "5dz9MFmxL6cRRTYsMPUT1xaDCn39uFCdSzoWwZzEtpgbBbXnX6hU3sLHckWY5aA7ShK9vhzDoDsTBb8NgFDdHsme",
  "key22": "Knn1KFCMxGWQrNyUpmRhgWS8sYEmKK1gR98m9eEiaMqGeAxJaujbzsU87wWFgkJd5bYXNwhnXt1Sfps6HwYScMq",
  "key23": "5ZyMW3R5T3VwvWN4xKguQh78EWKGgSarY1g1t1YDXq1uohi2dQNPbNkXTwf9AsGJySJtEieS7GwQXBnUgfvtRS12",
  "key24": "5Cec1X7pRnMoT3jwJbgHp5mxuiCdb3UzbNoDrnj9uo3iBjHSLA8Xd4bjUMXQ34Ufc5BMRBhbwzYUctDVUUwyh1oi",
  "key25": "5jJVdT6tVMpqgQ3DCDtBb2FJnMEwe2noB98N3KJDwBh1LUmbzuaeFdX272kjg5Knhm4DAHupDmYinwMi3RsGejkm",
  "key26": "3aE4Z55pg8VZyf3UUYMr49QeQ8LKgsCK6Z8NZ3txqjVnrFTUiUPpmY1GSVv9VTHVfKieMa8rZzSiHhY9NuKtMQUQ",
  "key27": "2CY1CfTgKheAavrYzcFGdcr3dZaZan1xzCXfPrWDnA89N2eTQYjSWJSsZitTfhEFSpnjcxVvGo5M35ou6oMaACTh",
  "key28": "qAoZriAGyCWipqPJW1KTP6r4ab3FaufjWwE4rHsSeMTk2EZScmMDpmzWPogyXvTud4EEoWXzgbR6o6dAL5qc9wE",
  "key29": "5TJmjuuKUykrGeJ3SEw9y7bLttvrDzJLXKaZVN9MxkygU7SSxxfecQfiWvQZ4ghvNxefeJbR1pfE9J4UiD2kdkHe",
  "key30": "5UrwP2iDoigPjotrXzjSYh4ZCdZTPUihv2nyN1m3vNDRGDk6Nc5nTsPnQN9GD8gu864kx1WYfoQ1EALYxE1zzwET",
  "key31": "2ezGcr32QFVBDt22DcBWWRaL2h87hDRH5GKQtVvysZWJnJjVBJpRnvF9FuUMFaQM5yLGd2xhPQQA8ij7uh9Dni4v",
  "key32": "2M4WgGr8pavYYdJ1FjuaZ6ZW3rSCemiZdP76qK2uRwyrxWmmwL88vqBP22aDgj8xX1mtLvf225VRp7LGsAp6kKuf",
  "key33": "4emh8rwybS6WqiB5xFAuTVvQTr1WrhG2tZrPujoSG1i7bo9aiAayrbD2eut9gmmHjWrtpEaUPpDusJFAZXYpw4g1",
  "key34": "62ZpEnFRFbEGy8otD3F5tYsEqJNm7ZPVDz4cJe3XTM3JsNQpMbrsjyi1KJP6FeoJa2CY6nsqjhvg21hweVFimhe9",
  "key35": "3H6DcYUj7QfGdQQwmEHtLT6C86TCd54acUC47grxUTyAEGJ463K2B5XZdGmYbbkfyPfsspJmYSvECtRWS6r8Xuiy",
  "key36": "6vNHyYqfujcJb24SoENKY7pGSVpXQGkguHjBWMqVSABtbaXh9Q7UCVQc8zHoKgGvYGyeToACMEtYyuBVMiakpaj"
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
