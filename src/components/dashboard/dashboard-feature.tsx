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
    "533WhXUJCxFviK225VYNJkLVYCECJDRb9GLuyfvqctg7GqYgsLXCRYSCcXdHPeNRj4SKWoH4EiGtorqEzWSCZjjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mdhukTBdFWKDQSXDXAtkyyxBR4tCtbhUDZWLLDEXB18aKdpfYWJBNLeN2YLZc6TuCnSUVyXKoz2FhEgUxp3iVV",
  "key1": "53kNrciWQ1c7xtBfu2MakFou2w8ohKcqvkzUojXcTcjAUS97jjUjkws1J8qRafYUhXwnM6mjKEArtE5SRjC35PLx",
  "key2": "5MPp6AivkFaW6pzNAf7eXa8hVkRLB8wia78jvohrswf4w9jVGVxzKUUCCdsvK9Gk2DwBaEi9GmXMPMfnr1ATZuEH",
  "key3": "ZAeUyW5M4sX3cZdgq7Y9jftT4VaQUYc8emrGu86dNSwWyhZM49zN3MKXWZST6SPjje7eUNXgx6DrV2q65R42kB5",
  "key4": "23qwSJuJ2h9HhqZd9NftacovCtbLcpugwxbHJ9TLq8q1Vk2s5FJcXTLNwpwtovb3vYRhuCCtL49Vb5o3vokxCUC4",
  "key5": "4JSQroSmH11FkiBF7s7HtRVQ8nt56a1nguCbbHqv7713WqZ6cTh5ap6StSZYMmRy6huBhr4afbjafDoYXtDNnbze",
  "key6": "2XSkM8vCxFFQwebpxhtCXNLoSwwQQZYrKKu5Ue6ycBSUvZkVnnKXZaXCUE3PFk3nCQS4yN1UcGY7An5Tgpwd4ymP",
  "key7": "3B2kfaMU6nUBa1kW5gV43Krv2zH2fxeuaV9HWGtY56w8xPtaeM5gmCT7yQwEAccJfM6TDB8hBAmBDb4uf6pYEirs",
  "key8": "4mKkFgFYzu73ShTPGubbrT4P7kTGdVJArUwJs8b1KJA3xZkSBiFv8HwQENfUQEdyzFfSCvvH54aFEcah7CyExGYK",
  "key9": "4DKgyrawxtRD6KzBgzQQ2GJbHXdA4EK7JWm5q7EzxnNb7Me9rgyQEBGVRAZL4MejTobmtYwUvSK2YfgFKsbH6RF5",
  "key10": "3HPuQLZJjwxSnUHPhAXu2Ba5SETVAhY2kMAy9gESmy9HkZvgcnnse1oMxHwwxctFG22QCYFkBTjGTWZSAkDmoQAF",
  "key11": "5mHnzDstLgWRJBSKa2YDxjXRxHaCAuE1BxkKC8QqnFsxz4LZCgEdA3QJnePGFskjWzFo8tzdGafYFvG1Xz2mmkZw",
  "key12": "3rAQpDveyBBJeQ6udrJuZcXwcdXLarCYUMRBiYywcUmnaYNQ8UEFVHLhVxFnTXVbdLDxPE8ujrGEQ8Gt2cocJDFM",
  "key13": "2VmQ5WnoiiGu7u9fbvu3aZ1AyQRR5qZk3mRsmfMnrEqEmRuvDD9NdAafTRizM3dgfvUq8SrhWgGbGUQkBFSLofzk",
  "key14": "4pyK58QpbZw1QLUxr4wuHSDxUj4ep9dUsWrPauDL6Q7aQbukzhZeLR2ka4jMXSPDrH7TVTPLvN833aLVkqyND2gn",
  "key15": "4Gm1GHNhb3rLNGFceXX1bttP83hniT7qSgxJ32agpgfPw8HwcTEzsBavrtWNtwGz1oWjsaV9JBEToJSVZYweAxHs",
  "key16": "4ePBka6uf12Qox7NqbzzSfcJSCz66EmU3H9q5Eur4tsewhrbZWCALvcCurvGBjEGX4kiozcAZoY7BpsQgPv8RqD9",
  "key17": "4uiBfurqhRn78cBj6na7TDn2RMPeobuYa7pbx5aLrdLabeyuZPFdFepv8Q5BYnUcmuGMFTbexRPvYxBuKQJoBpG1",
  "key18": "2UzMBG7DiL5WUtSfipjTkY16paL49DZkyc6i45KCRvyLUipTTXhF8e4ASDJPc2W4Xb93YyzshwcGapcqXe3tQyNN",
  "key19": "4hefHBwntMWrSVPZtw6Dtz4pqJnjH9LkBY1xjL4dTGei1Mautxcujnd7rd4NJLdHsG34UaWcXrYbzLSB4S3LA8Yo",
  "key20": "28HQJwJ8K4T1g6yk9FJ32DCnQf3762q3p9P1FinRWdQ1oEtMbauggo3bAWmzASDWd769TRkHW6gmneLegh9V6g8t",
  "key21": "2edb5y1vcwtixEH4ZaQAHJCcppNxXfrwSw9md4JyytXy4KutdJvCLBkzUG7QW8ksbUgyZrhpWiyfjFLxo7EV5NpL",
  "key22": "3FUHYbmZVkGJsfVEJMpLoUByAuboWgpX8Upci6bgMB91Jc2Qv5cbsyT5gXD5R6H6QGZWUokpAEyEc7sFnXUauWTx",
  "key23": "5bvXQvtL5WncKmRX9Kh2k5gqhPqDE2YiPUirvMjxKKsSVri1yGENcQRyNQJKZjb1JYb3Vz7GfrbDWEF8SWFcWz8o",
  "key24": "2gSeCHAYZ7mA5eheendQGWP2JkhqhD3YMGiw5MqS9B7b66Ji4hiqo2LB96XabbjGQVJ88qFGXKedaxpLXWE5hefb",
  "key25": "2yHxHnfma5ERJRwCdpyap3JJd1G9wAPtZg5ueePWYj2pf1K1mLDxQseKx8TJzrt49ga2XiFDTYMsg8DpuyphnF69",
  "key26": "4gS5MxyP4Psxxovk9y2Scw8LAsdTpx3E3iwmt3C6omwvgtVieyAgZAeM8GdSHXZtVS6Qd66C8Chiptxvt18PqJ6J",
  "key27": "4gXc4jWWVRVL4Y9CGHxrd2Usd4dR4igym82TdsvtwedNCaPmYxCUw7T3gm4roJQbrhCb3G4Ux8HNJYmWfcMfcaCk",
  "key28": "4yUYcXkEXyKj9tb8dcynCg5Nyv1Rk5DJdfSZB8vV8NRshHh7SBe9pHYgRd2LF4UBTobXS7UT9phdzf518DRCScPS",
  "key29": "uqFxKqWRPUkWsGgwDZFBFV4SeMdpNZEeLN6Zrwq6YosJ78y49YFqpVjZxPrhqFNK8f9YcW6EH3Sssi7oVipzas1",
  "key30": "dN4gZhcFXPD9yjAgjChAmfEcTypHUdsUQkqU5qRTw3p2yu38KSwD8qaHTgo9bsEXGMaidjSDVxiMcuERjLtq8oc",
  "key31": "65A367b17XyQF9S6p1PVJcaTbpqgb7NwSCh9a4n94vBrHKoezCDhu9vV4fiSbHSz5wCXJsA9hQYMG2HKMYQGQ53y",
  "key32": "Xkbdnc1b9ivvZBcaxfDZzcUDhnziUM9gjjD2rtPxD5W5Q9rxsT3JZvDtVio9mxoDajcjCedYfHRgD2TVeFUMxou",
  "key33": "5bVut6oBDeHyCJHhKEtejKGWDHemJCzEhXc9YkWbTxrvb9rNzsTaNgxVndoYwXvkb9GVvtTtmHNGzPWPPGwceK4v",
  "key34": "4Bf3AgkHCAhFWEHLvEvQjzrcYorCrkCM7fp95D73a5GJD76MpiTAPoVepZFpnUuVisF4kH7NXHC9MnMoutXBzEYK",
  "key35": "32TrPYt6LJeaXgeQUcQkAwhXBpyHUUjSQ7oe6KRhxNxYRhAqH7KBAijG27ArZbmfceR15zDbbFr4cqmxmuByqe9x",
  "key36": "4jcbmpRU3rBjFKtMAv2gfaoL9KmPM3c4bbCDzRLiDufG2AFRj8zgdEM7wUi1whPB7RJNL8AqRxw5imw4NPRrLfHK",
  "key37": "33tGyqkMxQa69hR7Lesz578AGEVv3Jps2YeaRg3ZyPNK8DCR67Xf5HCP3pheMFuuKZHkErREYsxPorA657rrMLDb",
  "key38": "dQ58r8cDJhjg9eciaPcKWYDfRYTGK5VLjK4ySTh8gjoT9tuA5K4Uu4GeZL8GjzQqnH2ohicJJKPPHkDptiZTBNe",
  "key39": "4E7cZq2MRNoZCtxwiH9ckAR5ciRPvzB7tMWjTUKXpY4183F74dFUZRugsgeqyGMqeXqfCJT4N3i7nijosBUhhf1k",
  "key40": "5b5neTpjgpzNPgviohWFqgpBcMVAj2vi7so3mKGdTJpbk13aysDPWZKfnxkwyT6oogskvsaiKQwUDXN87cnKcYNj",
  "key41": "2wnVhL37HzRpQXcxVBJ96Z7guE3jHkRq7BNLFJLXhE3vvTbpnTfmhHdid1J4H5FjQQvTzUC5dqA1RPhXPLdghDY6",
  "key42": "3RgXY8JN57pb9p5kdWJxJzP4UG3a1uS4cGTQ6WRbLZdGkRRZpphPDVYZQxgqDAxprVxaB1KJid3N6BBMS3ZhpUmN",
  "key43": "4gKcR173wLNqLdhraQfbqLTZyLHYHuZT93zuGg6KFMueN5qLGsegZwaKviawriNx7RD8xUeQiSQy1sPbv34eWBr3",
  "key44": "28MMZtkj2PhsR7PPJ88DVJzkfn4tqh9GgbcbPmgLKBKXwrte5zq9hZ95kzsCMTQw5GBuD3MJeowT3yj3ctemju8k"
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
