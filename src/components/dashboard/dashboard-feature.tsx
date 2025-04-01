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
    "3qoT7pAPnuz9acGeyVHSYw1XTfqQ3dmswN6ceybBMQk6Baz7ZfXQe4uMXUuvx367ZSk3Hu6ZAf1UrAh1KX4uybHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pphYxsQ37yjUdDpyZ3w889JRhh16viu3ENHAumj6SfHVDgU75yWqokv9nK45wQ9Akponvp8JFsX2esomXkSwAUG",
  "key1": "4hZ7PqkTfNLEJgMbRQsA7xr9PEJA88oSG6eD1VvCt2D6c73mawyr8xsagC8zY4B6pbYVKb7xhqQYRggYwY6SwTuK",
  "key2": "5naP9qvjqvqMbvcNPsF9z3VivZcLbgPQFip2MCDwpLXKVdDG5PG7sAzvfgN1UJG4pUhk6CCPNXYvJoF9ibEdpUCx",
  "key3": "5sawvabeDJUuZrEKxCMU7zsUJg9Yyp5BpoobVz2GCgU1ULe4FAMNjh2qsjHYshnpvgMnodCF6ARMbvMnvxVDiBRB",
  "key4": "66tfckcQ4rpenGLwcgEmEYxa4hoJsbuEJ8sbpeY48GgiTdHWGUejTA5NvRLb2iaSrzdr8dKu7JBBMzGfBiEpXPT8",
  "key5": "2d9Fz8fbdQ94myEwJRvZMN2dn3SfSMdEuuDzUzfyhY9cPZfwkWzuW4zxbXX6HeqoU9f4U3owiMvFqTm176BfJ5jG",
  "key6": "3S84GVTzWaYLdX8cTJkJCRMAZrSiTrMkNXFdL1pMnrUQRPzPRrtmHR632excpYdSPXWq6wPR5NsQjqNEYGcsh3kk",
  "key7": "bpz7f6g2ZhE4YrfjKce1nzNyCRCNhjxeDxRyssbZtK1QdL1JiXLLtaPYSsD8Peza3t5YLpvF86SWxME5U6A88HL",
  "key8": "57QJWjdK2L1q8Yb115DxSpuBSMUyFhAeqfoozwvSGLL22FMPi9RnFRvuiqim8u2RK1nLxUtkqAiUTVVU23mwtL8r",
  "key9": "4ce9XFjDkjGztWkrMxSeJajBNmK6H8dTBrEoVg9y9LtzbyJNb9vvDTktmg8yAeoP7vPm2UcCBR44mf5iPGg1esnC",
  "key10": "5K4bASiEQ7ZZXecJ9Bk6dhSNdx88iyCLViCbCWu9dSMwU28PdeL7A5zsSmqCPsHM3Vr6hupB1L9BitHe7xyTqPqz",
  "key11": "64G1g73XTsh35rXD7z6Dh5GooXko3YxLAUfnXzpWe2ZBipydbDGgXKRupJw3Tih3Mr5TEXhFdEfEYJYFhbo6UjEE",
  "key12": "3MdHPHTfLDSvEFZViovgMzAuLT6H1po5PGKc3mk5B5TypWP8hRzujjVSsBsQL649dNZSu9xfmae5sr9BBrMBZpi6",
  "key13": "5BGmQQy7ZXwvULwyFbkENoezovtGJ6UmRV1yAvqMb7jUTAaV9RPaeACCXzAbGj6mhc2xymigweJJuZ3UPnAKNKey",
  "key14": "4CtzEiqtLy77BJNY5pHpZ7LwLTBNWFRowEaMMQZ46ua66sjeu23gqofLBaYKn3YNNJd9JLPHhmk55pJerR6V1csY",
  "key15": "4qFpuJirLnThKgqXqcVFhx341vY48gomuthNPRCVLz13q2LZtn579ThiyiNRa1bR6Mg8m3ABAuJtM2ztYnqfXmt2",
  "key16": "4PLzQfrHXcs5CsCJzYMmrpxWhyWk8LqfZy63JTXcE4a1HamB5opA3KSQ7iH5HBPkaKwy6bNNFX2HqEUiqQBBoK3X",
  "key17": "ScVFbL9y3MdgPr4D9iYkLjYuWyBT7E5cZD84ppWnGxqXdd4PeGyiYZWKSDLwzhDV6gKT2a2YnwJ82b9pxTvog62",
  "key18": "2hLtZQszShHsdDwXpCJNdTjjaQ8364Po9uX9axxub7pgbNrzq97gvSt1qMSbAFJksM5bvYkPnAeXW4pas9McqSox",
  "key19": "vYGNxu5awHmz8LtqRXoMCBqA3ibHd5T4UDwGwiZgyNT2GMLdSLpDrCgWuCAe4Mxj8JwgS8B1KTEm8X8T85FFPTj",
  "key20": "3BGeuzZVYQ34nDqqYdA6bCe5urK2F2ZfoVQ6K2MsqTegf5wereYPTh2ZMfSXxt7kW1qXZ9jQvnke3os8ZL44Cfx2",
  "key21": "5EoQdDNW28tVAiiShNwNmi1RWcjo65FWJnzY4DMXP5Z2Y46QwbxBGhaH1zY7dtQbtBiugwF4NSo6AHW1HMaVjfU9",
  "key22": "FeMofD8NGantVaTBP7b6dT1TQHdtePpcK8892QbDYDdP7RTChiCuXt9uJ3gm5CoTBW3v3zZNJyMWoXPuP3XDQoy",
  "key23": "5tgRiaCsFtKQXXd8RvE4MHjJr152jp7WTgfa1uPSG938Kd47SeznzLzEXvDX1rK6tYpu1C4TNZAiMoERGjfcYYn8",
  "key24": "RpcVoDt8es6C2BZ6JVqaWDM6UUnjwdZ72YmMPjq2bJhHNBeEd5nLpRG1zEfgpdroadjna6Ct6KV4LhbCxWpeJMr",
  "key25": "5JnSLr8bVLRZJ5Ks5LgLZa7Bj2871swLAGEAkWkhcNKaQujYZGhHxd24hkAVnKAZUGeq5nGskvWq5S3cvpaNMasV",
  "key26": "3RZNvL9sm5HwTJ8E1iC92AoYxtTBLMa5oRvm6fNgUJC8x7XtKK8YaDwxy3uDeGTbZ7gqAesXTZcQoi8fSN2Aov4e",
  "key27": "33ignadZZz4AWAh75Uy1pFasTftTorH6kQkd4cF7b7arxuWLMyWQ8Zgdc2srRyx32RF2Rc13JR3mLgQdhp5dKdC4",
  "key28": "51Us5Ua7PTvAiiJVMLhbaA4FYxx19yKBtT9o6yPeRgD9h1NgVL7bfEU8rY1g4vBbFyL56gf5kowBDKgR2tJLkDwW",
  "key29": "4aZfTyuq6r5LxvRvNqRCLmg8vw6SMk2wNm5CjfexjR4Dgcq85M9XL3k4yQ2tr1R8GMjzd8tNvzG9NvCXP2LeHLfj",
  "key30": "34P8jiQW8ciUns3dqd8Li39ekCjCWwXF4ze8aJSFhYAa3Qc4LBWVr6AbkcpGTj2cfQkTxpJcsuECryLcs69FUFBx",
  "key31": "2MZM1phFGcGJpVBexbxQvYQZ2ozvcBBMJgf8fp5mfy5cTyiKGgVqzPQ4zpds2kPD5GThC2CnbhnbWg6jvXUp6ihp",
  "key32": "3LEm6FxQXSM3mKzksmHRTZ2SBXzauBQLqR2wZmH5oyRBbEpN517T9cc3yaUeDTHL2Trku9tzx25BgtWVhNX9ap4m",
  "key33": "4FAuDio5J1UQJFWV3JFYagUKK5EUjf6vF28yXEY5Drt3TAFBoZ38ZT79fqSicjcoHd1YVS24Xgp8H1DDsjiHTMWL",
  "key34": "qEfA9RmSjpmbrRNugWxGFqrcwVMJkrDft7bnTMEoF4dGgGu8hniDp9qgF6dtzgKp16uo3LhSs6xhrUmChZeTxF5",
  "key35": "3i2f9GK6GR31ECu8iY4k69Quhn33ZdY8BLKNX8podYTW3U67ELTmTesaEfmGuVuMrsWF4mgaQmZrQEiy6jX8QWHY",
  "key36": "TMcT4sxZoTAzQRS3khTNsBFh3Dsmw6EvcEQMHmpd6AVuyCemjJBmJ3ygYgpy4kBrpRkp1eX3AmWcyWzC21ppaJN",
  "key37": "2bwjyaapopGsdEugFekFHjiDDQpj4Ve27xLKHRYynL8ApuKJucDQp8m3EJon5BoiUsr7sA1VRx6aXEuBx57EMthD",
  "key38": "wbKWEDT3P41aBdFqw6WkruwnMAFYq1WKJ3GaR9uq3UffvgV1FxNaK6V1unWW9rT1fvRpYDj6cFXrgAwvkwjaJYb",
  "key39": "4TzTfk7E3TdCo1DZdvpK6XYGF9pMtG4aoadHGSeCW97szp5hqJk1FJwf25USSo2zrGtBMTMVHTUvWqfSBqXjKtxv",
  "key40": "nNX6MmKZESe3d8CKXVqgqqbSK3ezVPUDcDLantDjk2SgN6DeBvd3KgZCCxe8CLo7q133g92BijApcFVW534no1m",
  "key41": "4Bkwy9ptsaTy5kKZ4VMAHy2954FzsmNw2zuUbuFXUeyStkn48pgVBy5SP3WC22d9Wgxh8HJJ2t6nqxUedCGVDLQ5",
  "key42": "5JgBWFbvUjW7HFwrGtUwcEZK5R5LH1CHKEMnnaSyAH4U5vcsSLtuBcC7iQzNBpm3y1n8wd2QazwAa8xEgXToZahW",
  "key43": "4ySG9UFwdZEn3Zzqqns68CgQQvaomy8QhXjWm76xTwgEdArmyDWR3LnhXfHpuTQcdJzajtKpZy8UimEt9htmZHur",
  "key44": "243QUR2WK1XzTeddNZhaeo8fURchUtic51NsPNhk3gfRDjSobTgq5qkqyKTrbvV4vhAf2kq3GSGvTn6KVFqDD3fx",
  "key45": "2Rbg2K3tvgSKihXksZNqBbe6XvqNr7LwnK5cLAhAeUaf697Bm6sWzGfGSQQZ1QC7XhCz1uNpAgi2xgNY3NvbsAp1",
  "key46": "QcJWtooRkLGLBpnLLsBSQKiyBV7DwY9erUHdYB4oiZyDLTGzLFusUzF7y1hrrERbSVd2WiMHrLzrMKQEYsb4VQo",
  "key47": "5DksgEEDrSNjujuG3Y9aqkmBJ9tdhKr17swysqcRWUEUcsrPfDEqvvd9bKwWWznmrEXguDnUXNcQ4WS4zVDLRL69",
  "key48": "2Qzar7nJzD4qSkhmaAaKsafhHGz8ztXkAsKtyLHkSbHMNzDR8SKKRbxqPUhLYsnVBRaA6GxiEjTsegb9jzfLDK7q",
  "key49": "2dnbWKtw21nzr6rNGucHqJfvb7Qs8QNE7TKW6ZE5pBE8ZWqVUaL1zGc6sTrbYXidAadUjDdt6t8dFumutX6fDKed"
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
