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
    "Zdaz4qjfi8xGnmyC1YzZamBZa1xg5fGUj4oFryCZ8ZZymLw7crii86g6WbUpvzK4bhimk7KswQpLZFCUQDHYBji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZ93bAVitKNzLmwPbQsLj8RLW7HX23BykPKe8ohJa4JfyEUp8HXM1bZxgwKNMhK6kL26nKXhjSs9kMgz9zr3dxi",
  "key1": "5kexfr1ir2rCTafxYfxY1LXJHX6TVtUeuLpJJZk9hiHQRBQZm8UFdFcNg6KsZhbr1fumSgC9dGDgAyfG8mEpsaQs",
  "key2": "2jMiiy44bu3vQ9KgPPoaj11S4Trsoau7rfnNZfd7mJ4mMFS6AXGbJUYo8WFGfhRAmNgtncQwoUK6xcfUSFtDM5vZ",
  "key3": "3JXEurMGznmqUrrNzBwmbDbFZVBgfRwnAdWi2qfxsxCAe6AprTVzhyzR2yAd9asM5kcs3s2guzTnbrA1JYHLd7eD",
  "key4": "3dZon2tttH2E1fpN26AENmaeeXQEiETMCuqJJrCbbU78bBrDCEUuiFSX9dYSYWJT17B512RaZ677gG6wTNyWQatX",
  "key5": "4SVm4QmsPRjzbT5gJk7MRAR4gnDbyq5GpUb1NETK16PioRh64WjCY8p99jX9p6tGikD6pVHnxSiS21dWtBxaNC3j",
  "key6": "5hqD5ytowuFhJ3pfBKij1whPAhRuuzFLNPTYhyZarSSW7zi53LYeS7ERWcaCFmPWFGqcKXqVU725qWcmAXxdvGWb",
  "key7": "4wikbVk6SVaNaBrCxHpEPVsYfCrrKYyH56Hfvfmkwn2KsnM1vzZnd6A42Q7YYM9sk6E9e7PHUnec4LSWn15j9RF7",
  "key8": "3VUySsqDjT3XgaHCxpKQsDi5Kqfb6edaXr6EPpnWhhdFA4y6Q3moFgLbLpt28TwUn2VEtfsXD1UrDsoYhKXMhzr2",
  "key9": "2sXsW1RZDu3Pnb45CtGbrQvaAXDNrvSssuEs4KYfC76K8XMpRU5VkjHDsq4s18GMjwXygqVG3KGNpsPsVqZFFnnV",
  "key10": "5i5j61sQKbfoUhcm8N3FWiLjGBtpnkkNtXoudodggZGuZwUde59WbqWmsyVW5T7Zn1x5kEc42HyCzJmeSjuMYeE",
  "key11": "3hLTyGgMPN31QanxUWwS1NemS7njvDfKjPifjCSgFsZhHgTX8r7hJEiPzn4oTqNeX52Pej7V8fPx2kNZ8r8AY3Xe",
  "key12": "24u24muinwAnsqjmHcV2GJQfLDUXZutgb9oqsASrg7oR4rznDAD2GhTRKcSr4DJPcDHTHVChbV8LkcvWhkQ9gMP3",
  "key13": "5oVb29kA6qSd2rWemBHG8pKuADdSKmHmvRdEzFTKmAPot6zb5zA42R7CZwXHkwfWcVqAUkc5A3SkL9NrfhYbs1XZ",
  "key14": "3DJw6xrMCFfBfDQNU7jhKbm4hFJ8UY19xdVxr4RUcnqL5EDLanVjTipoVoo2dCWX28LtQpeManHLbrn7XDgU4C3c",
  "key15": "3eHyTYsuHGcxcCSjevs5TmBSc3KG37Gi7Mfqtw7NYAC13g1nZ8h4RLoBPPBZPQjD8xBn5r5wUfGbFdzaCu99xxvi",
  "key16": "23sHiidWgvpPQQYtnvd4T5nTSymZSzUWUfdhfvb9XWcK5B6L91RZPxd7fQN9PhB7kJsUFyp8wNpMtXxbi28CGQJy",
  "key17": "57c8hKZiQPFLfYEV8DRU1ARLVRYSixJBvb8AXmLhWBMThkWduagZ246nrS414rU67CQN1wY2cdWqhw6ch5y76Gvu",
  "key18": "4ngFv2vetwZXmMLXpGAXfWSKdh9skYWXF5DSayMTXHb2vnkhwMn8MKdGoG3YjB8awBQtfAfSxftAfRh5M4gSdCYx",
  "key19": "4TxhtiDa4R6r3swuT5rh2M25LZ3QcirfyLLUga8QHyJqd49iuuexXD8sV74Gm6hDShc9dw3eb6CJNo7MinxVwdXr",
  "key20": "gTWQ1mDGv3K1q9N6bJuCHf5K48ShLHkwQyt999AK2BxFvVhzV8oJnYW3CP5g9L1gqLFr51r3mJZepWuu5x6x5kd",
  "key21": "4X6ssLo9BhTdoSzgunnGpCrBnhVwCs8xzAexivgAv9AfWxv9ycepFebf4B32okSjocGe1FaU9oszbdu4d3Us712e",
  "key22": "4gQBxYPnFNYqMaF3AdZ5FmDtM1upSHwRyPmbmeTGGbRcGCvP5sBJph32yjwiTqMnchehvoHdKzvBvsbCpU4VG4EU",
  "key23": "4sUW31zghDidh5MjcxV5NCiamWfRyUHBTp6zLkoi9zTAWt3Xmj54Ab9fKfw9SKhCyy53Bi2y7YhBGjqdYHSKTgii",
  "key24": "5VaHFR3wJ35jt49ZX8wZeGi3bR7AKTpV4YZPVaNSQ1isiArwpygyWDjpzjNqxstyRiScHwDMhC7oFnAAZKoMS3Aq",
  "key25": "4ox6hhEbEQpJ5fpHEYtpG26gkJjNzc7GVJj8MJBVoup8s8nQpSmMD1NBUCY9FiBQggZ4bMgJyeSnL3AnkhGZcQMa",
  "key26": "yHAvYGVw6nY57P16Ksa8NzZYDFC9icGLZfWHr3cju3w24jaXu4M1rser4ea1YvLuns4oRnByMkYUgfTp47VpjBn",
  "key27": "4EBT1jpj5VVxhJ1oZeZU1Y8BJWbz5Pjga3uCqnsAYNewQ426kuH8pcMt4AwnXLCTrfM8xkpXUshBQuQRisDUu4jA",
  "key28": "2yCvdN2dcRpgL5AbiUuZFRwas2P1eYDQ3ncySuuVjyBsTYo9vsubxFMiubQQMuJAFrZEvGttwkXhWWHWRUhaSXES",
  "key29": "3zu987rKd3tHiHbQrdmYh4RAdQv8dY2GQEGmJcUCqzAAmS8uoxkDzfT9j6JNb793oBsanDEvDN1vAyobdey2fGtr",
  "key30": "MQbJSkwHVViND3Lia5zQeRb4DkjwkdPQmxggmgV1wqvYnjDtrz5fn4UAGhHGbYu9fE6LBLEPnnvEKZuGtcVPSKA",
  "key31": "VjKoMihh8EVGohEDwe8ttYVDnsZZvJSqVcBB12sX6gWxe3f2DkM8kbWrXNwsnjFx7wFVpCLVtzdxBndNTvBhUhR",
  "key32": "vC46W9KiBdSwBiUwyL6CWfTb3r45syEumcx6wwLZt4SwjBLsYDJkUHmKZYcPmymPsabZhXdBWjZ6NY4yHSjBCyC",
  "key33": "QLgEFqQKfG8jnAvFBTMXkzSihx5V3Z8vUVVWtsVXJXXqCHvta3hbXYWdvtW5sJkUNUNEeZqV7tKtsrYNLwuvjKJ",
  "key34": "5SDtgnMxCFKcxwaKNxEAz38KyVFwyGTux8xZswhsD5SN75u19YmJyzJTikrdJ186wnk7EcPCBYwg39BCdg6Xc6X9",
  "key35": "65rhmtcBy5Ro4Qj2wsJY2RXNxG7aiHSyUFac9Y48FyinBBGTeCBuM8J5K9kgyPPkm5miSwYTEQZ2FkcpCZDczhZA",
  "key36": "3hf9MedoF6dDwcsGpBrtMqcePZPezMrM4T4P3mVYmvCMt1qdwj2dWiL3z2uEYWsKZqGcGMPivxTsmpdoeM1aMFGi",
  "key37": "3KLrUxNrBwGNPfp8EiiYHxdjSfenBJDV9znDTLnYNA2PnYGhqtYbuzhdL739dQdMD3uNn2tsyoz9rrXMbV12dSs7",
  "key38": "61iYZeh11VYos9Ag6dbxPYQTUbnh9CzXL8vJkry5dpxMWL4MP7AYbfJWeFy8DwoTLFWLphjid5Uthq4gDtr23c1c",
  "key39": "2jnvqxBY4QKpPma7XE6CVjvaGAqQt1WnzmMtZ8DafSKu6M659h35oS2vCqpqdcPPyQT3aoNqVPv9otykVBJ9DAoo",
  "key40": "44VKZyBtZUCqkgQayBrULSHcqjqg2ACEaLBYL62tQVh3maGTfnWKwCeuNCGYC7YNtnxK1QUYwNAJRinyB5jxE511",
  "key41": "C2XMTRwzKVgFTGjDaHiQfcZ3ESFAwC8o9hF4uMKbNop7eJh654djohSgAb1WSaaKfmYArLeFq4p9yYLNveGdxQy",
  "key42": "2hNNks2GBZDjVtGqeiMMsafvLpDYJEGe73wcshRKjH6JaG6joB1mA6zHXyKFQUoDjcQauedbYRViHqXbj3oMV1m2",
  "key43": "2XtYGup6fcAYWUUK8VUnuSGrpCboXLkcSMbsKaqitHAUthz4C5qUgjVsXiQvjG3LwLq6DXTrtDHN4FQ7c1D5VCPi",
  "key44": "3VSUyzYwXhUq49vmvrb2FNvNxRrR3mknuVbQV89a9RX3m5cUHbvhuya3NDa3w2UbgPA5fzJSQHmgLxDXSUtQCGfJ",
  "key45": "T6aZfzeewRvXmqW74qkZhGMisxeeVrws1CcQK11N1UPimantMi4tv4LYjZk3QTjsSTt9GM9UgFn9twC9rLjbXmZ",
  "key46": "5wixt2rV35rXqM3zkxZAHcmEbzJW5jLBcckfYbFX7ckb7KwFokoJnLhGqrDWbtS9os2t25ieQAkkM9PKYBJfKYgX",
  "key47": "oTuqzCZAqzAPTxNHig35SfRy7VUtv42o4j7hhMNH86ShBDsheVoKgA78FeShFGqtXmA8YhsAcLmoeGuA72nTMyX"
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
