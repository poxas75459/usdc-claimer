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
    "2U8AjkMy45AaR2YuWm6wpaZn8TCAUiss5s1yPbmPjpLCbbuysLKSiTBMwtyHYCAENMHwTrBM5zXQoBh53bfC6J8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8y3fMNzSAWCATJGBAsUqR7xMwHzVsrdE98eTN7AjEvF4wvBU8YCNtm271DwFuC1dCwYWU8kHxiG4ThqGsbDSm8",
  "key1": "2ugbucdb5yqutEKt8awtUvkF5nUjW5C2RG9A6ymfCE7XWWGgtS1vPhXE98VTV1vcHD645PX57pTyu1S6DHbqWbzf",
  "key2": "3buw1hdTCVuZf45oGNufbTKy3UZtuY5woBzqTmn9gL5TLMpshXXKeEJxb5gQsnNUWwRWLQqQmmhpeL7AZCcBi1CK",
  "key3": "5nEdcJPhmer3iijesDSqd2PKV1XSGZD823HpAeoi1Nnz7kJ4z5fsx3TNp3ndBc5bW3222ECGmaPsG9VDMew2zLH2",
  "key4": "f5a3fcB9S1mBABLBNzm3gDEUu8k7D7U1UFsQVzkkaFZj4L2j4qs8tj3JKTD1F5cJ7bQu7G7GXzuKUNvRSd2HFdG",
  "key5": "5xnWv8gmb7wMQ4KwrrZgdf27EyRQFgiKUnZQM4ywQivyy4P4zXvPdPK9W6dkK9qRUGVWQTGsnhWNKievmqsFuWgN",
  "key6": "4viWCXPGXRv8WxfkaLorZ6FCStzfrD3pkDjkBMpQ6MDrYxLUCM4V59w1szJvZLW3eiJLmF8HFmoq5nAsKRRvVkgD",
  "key7": "28hJNYfRTphmRfPw5SfuoH7hgtjKWefQJQhDwc9MX6WCzpjpgcNKiY2BCUshuQvattZ5dVtPq8KD7UUW6t6rxnxt",
  "key8": "26AQeHuaWkE544sya24kZpU5wUygba9FJyCv9kZgui4bVHC8BooeuD7w3vcxpzVL8CFcr7NDhQMZZLf6DrQoQLQV",
  "key9": "3CunL9X5M4fbPVbsdSZjdUbN4vXg8vswemKBEVNjtpJq2wPsCAZzZvrPwknLgqYzNVL7ySoj26H5DwsVaj8opSQc",
  "key10": "423WuYSH1UiiHaQKE1tnMfcWhtDQkXfbsCzPLfWaDr6sVifh7jV2vkxf6io7X1xK4X4ryuvwwRm1dVaMv7CCHfok",
  "key11": "3od7FrEBterzq2ShtJZ7UDwLQveFrLaJdFeJ4GWg4a7SdrYCSX9juhQAynFbSG1d8AY8fnsm6bv6Njx5DjYweNrf",
  "key12": "3y3J6pRZxm5Fz7TC4zq7e9BbpVHMQfFtHMpyf7YhQmhq5qeQZdEZtTrbxKEvkLvRb1eQwhWrnnbET87ugYD5tiSs",
  "key13": "eQSeCX3D6eDBQzHymWnh923WqVPKeBk9JRtFbrvEGqKhYiAHMbbedPaDPNMR2VeSPqW3oPqsgmiFnbZv3JYosUb",
  "key14": "5NDm1dncF1FXWJVwZVqZ6KfStoGau2Mji1QSUDNERcWKNTk7rEcvCMZFp28yHsXS29gGfwo6QeBADHL46MXG9qYx",
  "key15": "5yciT3BueHssaEjBU7URmK4vPx8qVi2VAmeSvmMj1cpr9dQWsty4nQcXFc1z8GxaRSiPzTqPkaU4h3eXYyvfmmmD",
  "key16": "4tVbigjGqWLGmh7x54ewUn3FGEWGUGmrEnh3otfWjwp1Wqsd5BUfuVhr2HVRsJDSFVdCq12ywTCSuamHrxg3vnRq",
  "key17": "4TVmYo7DZt2EPrz6N3mdp8FM5JpQZYkTkUAw6FMmSTyg46Fmvk7WqBS37uC5dYYFTFsFegkSWnN5eQ4PuAZQ9PNj",
  "key18": "5CFoUVSkUiK7kpHNmGjRJQ1xUoCeVFTAh8mr8MaESWhfeMcPNKrPoQFYyyH4tLqmYCtR1xCx4uXCaAY6oHoyr6vU",
  "key19": "4BPZr6H2uiNyGoQWxRnarMimWA2hSWeFRkLcfwZ59sbhEA2KoRhBjPtaB9SS9sWNeAdyLcHD8HJCCuZbxCc8ikRk",
  "key20": "5uBLSJNNajvK3VKobLbQ88xnqNte69RuojaDQcchMe9Q2BQaf78SZ83kvKKaiCPtaQjaHwyutm5mfHHXGyHj9yPp",
  "key21": "5VJRKv9gvk5777vLz8HrZ5FB8R2yEB5NMxnGHZ5kAW2Ea4T2dg3GY4mJJyP5Ve1XoNmTwha2oXyQTsGXrydjz162",
  "key22": "3XqvDEG7MbS5LdonFKMq8Z31S3fd1kPM1wcZwr7w2YArTpc1CJdZZsTwfCNvKbk8GJVUH7bS77n9ekrbVPZUVH5B",
  "key23": "4rM629B9qGwubWQABSj6biNPyZFrppFh8eLFur2cxbmuSBGTKH9vLPUMiLBYt1g7TDm45ZkFWHpNnugJjCdrWKmJ",
  "key24": "37gNPjHudKLM9Wf9nLTDkAGyUrkh89Mny2sse4BCUvsbCXj1cX8muWjFR1kiotCfVDzFU1h87W1pYeWW85G8JdfF",
  "key25": "2V2GpLz5mDKaBDqmtHUHyUq7BvBj7MRsgbbNywWVZEx5JohzVXT1GiR6vq6SUa4AYH6kXhgPyEtU867WMuc9FQDR",
  "key26": "3yedNMYmk8DBh6CeTdV78CrMSPhnhgH6b1C6YU3mJWbKJuirp58Tb57orBTD6gaUuUtdqczVDZuVYz24aoWishfg",
  "key27": "4A2XdemwPt1jgtKGGyzs11HtxeFwNhTdgofahLrjgGTcU1XsLNfMcaxcMGMA6qyuteUJSD6wSsPhWADh5QEvmSuD",
  "key28": "2vbYoZcERUSGh9o9kjWdPdubfyuqEu5WqAkXDXFGMDCUsCef6CS3WhGWiR495J3yzLANML2mJjDMT3ovEVjpUa8P",
  "key29": "5xvKiF3myohNRBBML7sgyMyip213gSDP9yxyPWHuhh6kuVxT19ZTG9gURBn81rEqme61RfMgnELJHmQ5m6Sib17o",
  "key30": "5xTL9KRscJEEdbNgQzsZxCYvEJ5iWuAVztMpMMZnnm2C1VW33ybscSqPTLuVPH8PV6nwNzeBbiTdewbCTvvfPBY9",
  "key31": "5zo735oTpeJP1kV76tUBX5pkiEq2EWvkKi1gyst2WAR7UV4DavwiJ2c1dd5famsuNmmAYtvsYSQ2hN9ZmF2P8W3t",
  "key32": "A4hFyCfn79TqJ5CfMiUCAEcrBRXuqCgDRt9mvYRaSk7wWhk4eUmnmPiY6JdXx5mwkiqMsbDTBEGncM3r6RccUhr",
  "key33": "338nMFR9sL2tX2Zq4WqScmxpYJD8ncKcaYLC9yndjnJVYc32YqDjMz2FpRCxnWTZco9TUx7QNWmHEEsoVsp7Ta1G",
  "key34": "f58jPGcc1QNiKMCHQLNL2QpwtriG1hynfc5FZTM9rEPv71evfozFi9PrWk5nS2XgCfHD29pJYkgLZaxP5pxizy2",
  "key35": "5noxqRMyzWfZiVFL14qSm8UhRoswZpbpMs6iTyRouti9mdDXt8SoCRaRny1dXAmTCtHv2upsrPEj8YYoTdtbajk",
  "key36": "bCSeLA6MrZytL5TXpJbtnNBx8tF5ny5RBsjQmAmnF3jnTe9t3S8wXi1Hn1nGM7fUyk6eqvpWx6FUcqhd1ng7p2b",
  "key37": "3PUj6BVY1N9e8n7CMv82RByeW8bUBGEC29UDB583weos9aJRiWWbRmPDqrAYzvzg8oiJtVZqceXF1mAy7z3gJAce",
  "key38": "2D6C67MKtHR9foTnx2NBbdRp6u5zBvgwd3AmURuXTma14KCLo13udV4cJr7kcUTNwHh92ncZZwQ4MHis22rNKAwZ",
  "key39": "3qR1C3mX3upDQ7HcxBFHnV3193WQLukbNa4hxU3XQne9dktaVQq3tB2gY7oaWLgv46Fy21kL4A5JFLWpSHd4LTA3",
  "key40": "4MpbQT2oJy6bv9EmnRT6jXzdipQfbAisCw5WnZ2VfNPY76pxcazeBKMC9aZuavJJHxW9vPdx7w9HX42SMxGStTL1",
  "key41": "45pC3juEujcyctwbjoHz6SF1mYCZVivjPxo5fTT3Xb5q1ZdZfC66AmuWuG955g6RtVMsteHBGULsyJHujMi1zBXP",
  "key42": "4QAdEmgkGhoSGyKSabkRthyj5p45KcAcLSZUreN68s3yyKKvv2oKerR5Wf2ccusYsHsrBroUo1iCD9oWcLcpWd28",
  "key43": "XJfvEqBAAT5x8m2dWPSBHRv1btPSD2hbybHioarVBLqoZMSrJXNfstksSAzLXCcc4kASXT72p1uCVYGAG6bVxk6",
  "key44": "2JEkR6j9dphZYuhGw5W5yHHpfFLK56PAc1VQYJvBVwcBrxuSeNQELRXjixFQ7KKQxKsCdsa34gpyuhQVzPurfbtR",
  "key45": "H8QKwGmisYPM75q9kf923my2rf64Q2BrJ7sRa79oq5WQ6PvEEEfBHdyNn3BfRbwY4PwYgaecNjWNqv1cssF2GAT"
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
