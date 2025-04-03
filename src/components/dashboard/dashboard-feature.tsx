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
    "3EgAFx2o3bquTD9qoyGLhYV8kTXpcjV8jqCqikGYvXUL8TgGWYsgofcErUeEXCViBUHm4V4gKfWvRwyt5384Y369"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XbwRMVqWFpsM64rhuWBTUoELnoerG41M3Me84QFEnMfe1HzC26QYHpKe5ESFxJKLikGsmiRvyXKCd1ECztTZqmF",
  "key1": "S3Ac3o61KUMLMLHVtxJzRTpEnTT1h9iYdk8rrvirmMU2LZ5qUbZGqz3WTE6XJfHr9FbHVQRu6q4fciuHtz7wrSN",
  "key2": "4WGwQbAvvaJcAxViwR27u2XM1Zuv4Qh1tmX3SgdrPkAjxMZySFxrVMkkWnpLe7DrNksnzAx5hEUWN8JWXvRvsCFw",
  "key3": "9sJhNUCTrZxeysp8DiX4ywv6t696XTNfauwn3exRAvqZNEpSSmt16BRR5vmbuzBfVMskV78H1rBzgBEeyaRwaP7",
  "key4": "cEfyBbokMuzVmcKq8oFiHEbrv96zLHGA13mHhYFHrXKxEafz4Vs3wR574uFBNGzYU4aYBSGMTpCMifvt2ZmwoSU",
  "key5": "ky7AQ8rjDAPwscfnd7yuQ92gJgGhmcqnDDzhEozkrezbBVssp1CpBmwDV5BJt1WgcGQoiYXYszTJfm4nvxBobe7",
  "key6": "58HSBJHSxwb39VzHGMmNcJjHcEn8YEz9rBvAHNmqG6foJAKYN8UnhT3V5kbaoSKEr4axT7rkcwxe3LR4k53dRzwf",
  "key7": "2sXatRqoq1GcejUtAZqW6EhgExzPSVztttBNbX2E9DLvHyJ2ujNwPyCACaMMKuWZKv9dNBv2GYneoVxmk29dRSjq",
  "key8": "66MLcdNRadchy3gQjhyNAaU1p4Jzx6DnCamZnpEuuMSiNuChGJHUNqSt6dRe5FBEhwztbNzsBLDDUzQLgYJBrJBA",
  "key9": "SXFCrhUdUGa94azVuuupapb5yPueKVHbUnyNfjjsWFkoc2H1NLAd4vdLMvRhsajRxSyYwaYVNrgmFQj1oXt6c5e",
  "key10": "Q8CMrmJEFBsfogqhWvXbBTfbC7WJswErAAeE6rdAH2LQZ5AaAuqgqBZ6TkxTMGzEjoDTvrZ1wesUeWcFeQcPfik",
  "key11": "TQQMx8SjEFWYZx5D7rY36Pp8Su1vHAJo9GNMBxXsE7rHfXjyVid7DWtmqN9DVkd74saoPQC1H2VwDgP8ygx5PpU",
  "key12": "4L6686m11rHmjKdJCYUdrtKb5NW9KuRzPh8pRnuHcWitduVfySHcqtdDWPpu6BKeBBT6nVWi2hvN7DYFAePnbXjj",
  "key13": "3Qmz9ij7tPNk1CDXQe9gFXMHuvJTXLQZM4JGirHn5RLe7xoU7MeiHHm21t5L2G5SsbrFLYDicRM21wsU9LTNLemH",
  "key14": "4KV65kgNVJU8CGFgtSGxHNNUWKosfx2GevFEhCM1pxfBKoKiZmqPyX9a8vhkuJ39hzhJSEv9mKiTjuXiLySe6So5",
  "key15": "XFDVcMcsfNWiUJTM3BFiNScicGRaePXRaVDithmQpqrBqmWjScLZgdYWbA5HkLaNVafrVvok52fJGcSXo31q194",
  "key16": "3MbzA6TJrkoSvocjN2g1A8wDDWL9Ui6gTdxzf6URJuHnNSmJRAH3UnebnwSYthxv1RfY8iQPiTK1hy8UE76K1N8p",
  "key17": "36jkNFib5ExdzsYZnitFnEmKF5GmnBfBq4N7xVZJybUsdWw54brUVXoDXohrdM2gDkDwCtHaZ4jVSsKtaJo4nsox",
  "key18": "5vYyfKbqsNo85vKuVCFDfwBrxpKVpcioc24WCPAXrm5FeHy1FJwmvTrqjAKY5fM8g7sTcEhwUHfrikGEASZiMUuS",
  "key19": "2TaTqbvkYfL7MuE3uNxtNBxh4Kdp95FkJw1qSKiM2cS83bGr4p6VxEmjjL3zGy6abwCMoUFNZEuCgHDTjjabiVVM",
  "key20": "4tzW3LQjkxfjXa8curzTRc4hpfNc25xg8ammSig4Z7YPs9Uuw9QVP3Jvfu6XTiCN2axRxMTtaygiAC9THBefcJ8B",
  "key21": "54YDcA3EUASwMXFV4g1GUJGpdVHzv3Y5gm6gCLvaLhVzB4qwr2aUZoGwAdvMiQxCThknTdjjgHY7tv1jbxV7gQ4z",
  "key22": "ukzJygtcjN9rjh5yWJ6jibXhGAxtfiVUDnZxpEitgecr8oV1VvLw4YcJ2W7hx6GED8rMMVB1uq7UM8FRVCEd33j",
  "key23": "584j5vAvjBQMZQKqASDhjJCBMLEd6UBubtmuXppm9VHUjhx6Ruyq5Bh1BVzdDyqkvuRN7h7yqDKpxwodEUduvoSA",
  "key24": "43bCtGysaSrzXSgFWjUdFKMxNtXSmbQXqgzagCzX5gYoMmVfvFfM4Ce7jNsRzHvqVkdpejR69QwXBYBSauDGKhmh",
  "key25": "3qE4SFp8Vy3PKiH7hAd2N1SCNLAqYuoCRhJ9qZqt2jWaZFVKHGYNnyVoMaiVayWwi1sRP7v29SfZFmiVgnKGH9iQ",
  "key26": "2vBjLwnsk2ur5D46qVxf6jhpcdgxfKM7GDbkVw3tPxCztACLXWG2uHVyoxkob6nY4rE26VA5YX4nVNRRSWhU1Mf4",
  "key27": "2BfuBE5Qup5Frt7cqNeGTnZZwM7gWrcVaCcxJZY9WGRxUinFuKrZ7QHpJRZy99KCYMUMrNAVVKuQEz6A8W4MgMDY",
  "key28": "3mimq61tn2Kj71EtEeGbDhSLQ8hsKrUehZ9YtEL3BpsDFHjtHRhyqgwEWBbJezkCPmYfQfv5VizFNdUjh3LxFiaV",
  "key29": "43BYN74F17UrLvxB7r966N6krCiB5RxzWw2Ktn8TVGPmW96G3XaXebvRCxr9cCwdHifoEBZZzfekczDGLtFFKGzC",
  "key30": "apADo4jcq7Res7bDAP7S7b5UgjoT6o5jfZ3ixaUxcMdTDNEiHSJWeK4GRBE3vkNx2oru4iDev6kVJNQKjRxQr3A",
  "key31": "39qYXmLVpXa6czhBqnq8qPBxNwJuUcZhXBQXnEB95xeVMYXXoUu5YGeLsS9xuvubcRg1ZobSYedDhBCSL74v8aNA",
  "key32": "4oVbZsHjKX9iYKbE2rA5G7zawj9rFGhjktiBjgy1yKWqf2zMjEnNq4xFM9157U9PFB8WyJXKYC47WrSQY2YAXXyd",
  "key33": "65pK4WDVNEzYtgBLrYAvPFJvPfULoD7N7sMvTRowKw3Vsxjyhi41hh3Mv2z7yqCJWBUV2drSRxHRqCxfqo9BryW2",
  "key34": "2EwnBNfwK8pk7Z7V1PWs1stJ1556qM2YZezntZtRYCkiZu9sknfHbhJJeHsrop2g1A6vJyUBSEtJS8DbW2yGxFXp",
  "key35": "YypNqhhFX3qdabcmCNHz2WS7vQhTVBf4rfQwmYaEvNwaMX2JwopsRZM1vsLjTKNnsxhwH3izN8LDZd2oMxNmEez",
  "key36": "22QGjYQH21nh2qWLZ69gKzL9vFYXFL3Sw7niUXPPVGamq3GrH66oyZDzL8Z2UD2NvDknwCyCKGnzrQDSaVXcY3em",
  "key37": "3n21dLA8ehZka4gAPfugL6kNwU5gF1e1kptc7zuUw7o1tGVXrTa2wDwYV8G2XQFobYCpYhfWuaXDT4RzcJa6e8gs",
  "key38": "T9Ex3fG3Aq8Tgaf1taWsodSfkF264GvyWgMpWbv5MuDuAuy16fg6CZbyED41rar2cqNsYtH5Lrsn97qy9d741NM",
  "key39": "2wbBembiHYL8iMo9yuXnqKJKTTtcYpaSmwNUsL2n8vuAASGftprriQ5yfApMxxUd1HpXH5QzTmKFHmuADn5dmzpj",
  "key40": "3QwHdL7E3Nt2f5LpdHCu7q9NNkayz12PxBaHeKnMqQP8anH1L2epkk7xNGS1Zgch1yyK9kWPxZmjBNj7MvKLw4Gi",
  "key41": "xXVYPuUXXNM2cSmmQwxFcH3vM9wF75FjuFndfGDfPTanyRLDog7HSgDcUz5S1o5dfD4E4qmEmCRhKd82f4Myjib",
  "key42": "oTfuU4cw5BGgmywLqfzMqxBQZMBwqY4Nhxy1zwavmpWGHEsaTCZmy8TnWugVyWFcjJGWbmdBY5d1JK3PBoMjsxy",
  "key43": "ZCQ5pfT4qBXoPZxMPsNcSsYdx7QY9YCjRfUAvBgd5sc4YBDAFUvcaDYygEYrvisMUhBCfjEocT94kpv1pK6jsNG",
  "key44": "2Y49hPgk6GfnGnsHw5Suh1f1FVojXijvFYSqr6XrNXa1pmUZvKBAtGdk3LoRdBXdFFaar3wtnFWDMiaWfH4VLVWV"
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
