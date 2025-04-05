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
    "4kX5Nak1ETRR4ZXHQ6porAKrJFyoGBmUJiGaJvYsgFYKCgYrU4UUxnoUim5VgkYQTp9nvV54TjoT8C1ifYVxxtaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64iVKMS7HmGA4H8BhtLoDQQzWZXXdA8qTa1cfdJ5vrbcCrNSKYVdbiBVzivMk451sVry76LirjzQEUSYWEBASncp",
  "key1": "21qDNwugw8Xh3UZBdZRiZjGaQZ3C3cgvRZd34SoJ67FGggS5vGQd69N1FHEwtW8WdK2ebToxQBDwMjyg5tVMStrJ",
  "key2": "44er7wNxDy9wV2smGJe6QAWK36EdRJEcfQA5hAp2jUMbzdPob2ciXJdzjR9DxiqFiwzJfD84UqkHU7h3cYcrx8Hn",
  "key3": "TzG6GYobFAzR3sAxd92jTijgYRvGuhwpufwfFwkmrv8KoszjKSRdKpuq5bevVWjCnbTTTEQDVhbi5qayQjBvtoX",
  "key4": "2gATcptvc4caBz3zhZt66LDCSRhQNWTCaoR3XumW1obzKKX8Whib8ynxTL3AhebRXZ4JCWhUEKo4WeuCsuFDcC5n",
  "key5": "3X3H5zDYHLyTQvdexMARmDQ7NcqDoJt2iMEpWaN4rzMac3BhzDpYYCuyiJTbBrDKrEsz3vE7E463EcfSi4VuCiHb",
  "key6": "2NsYhXpLyjyh1AjNu6sGinU9Ma9ZCsCduqsNDmizzuCVXzvTXSNmJ3t93yT7vLZVVh79zxp6qXYmVBZFNNHkVWGW",
  "key7": "4Z3q9gDwDVVZ5UAk9X5ZssaKLRC76hrdpg32eZXqjSVKybhaZiuZ2SLQGhP7dECfAuhoBu8fQATYMRDBn1D8Ea8U",
  "key8": "uiguBXZdnnG6rEdALV5WFTDNTfrku2GgT84iKP9ZmonhuMyefV6Ra8AhAVHv9eoi8Z8LDvMAWfhJxcQKQ6Y46r6",
  "key9": "3sUaauPYFc39YGBKbb8MvuUET7nb4bEbdYuVLLrYtMbcyJzrhsDCkakkrtymmwAP9B6bzBni31NZz8L29H6Fk8bU",
  "key10": "59NWos2ns8d1LSygGHkWGZmhPFgM3quYHNzS9X8abRAEnR8DhVvo2233gSE6JXaZMSUGo3nH72UDpfCjEVMZ6LdC",
  "key11": "istjmfECieTgma3Xka4tLgKsR5pQCeZy66kkeKEXQD28UBna5c23qdxKf2gMitHbaxgeGNexs5ziCNAju1ZuMpP",
  "key12": "3QZMeEPBRsNgaU2jAHa8tDEspFVgDawkiAkgdcDyznmMbo7DNR8C3Ro9snRU2wMdfXU614U1Y9BMCmaTiLbKa6kg",
  "key13": "49aKTHb3QwmDjnjPA7wFLnc5E9Zeia9CW3E12oz2msFdHoLkFD3KZ3voTsyZxArueXkYNjsRtUDbZB6eHjawiQpN",
  "key14": "5JLsTKUYaChUrW9XfL8JnkeWrWKZmBDJCwLtv3FFfN21BKSkMdWi4U7xUEhBsr3mbbrKLEXzwBfVg4X5kT6JPLwi",
  "key15": "5EGfEGjKitECKVDUhs4zHpSKYabnEkjf1CbGP4Wfk13yMFSyzkRXtP6QVU1TxaDjpJhGjnS7SQMSJQerBH96MrAG",
  "key16": "3gdFxSTd9C9ij4Gcb7CWdKEtSNbPYhmgvD9vCrbphdpAkrsNExypSESqUFYxX5Q55jjbN2K84sw3dP6MKC3vziXH",
  "key17": "2Htuw5GUShZ7DeqibQhWY3tqVX2rWFWX71G3VcRixeCWygD2yjqYLrFnUCQzGxrEhXjWzHPf2xKy5yA9KEjsR9nz",
  "key18": "469QBAMD3YSNvHsbaeidSL523wYGh5jpUekFpQoWcbBRoVzm8AjnxY73VGeJWhViDh59M5mR9GyK2C516SCyUGba",
  "key19": "2VQAVUbciLdbN5eSyRBSEoL3wbikVK7UbF7YrzNfxr1UD4EU49jRepTF6TCkY1mCBLxn67qZYEycryrWfbuKAJuh",
  "key20": "3g8ubqY5fQan5PdZ27N6Lb3jTzTySyBh6xf4u27A2oee7vEmskmQfuWVpt7bdxUdVQjkzcv8Y7jrwGe79WNQyHWx",
  "key21": "2PVkwymkRTRbHtmVL31W1EL8QywYrynvuDTSvTHT6N6Esf8BVc4pYJgLoQEF3otsffuwarN6qri7wREKAWk5k4N1",
  "key22": "5LX6hNGhpGUAUFa6ENrkoZZBjM2KfpvXoyVfZzThwvJTfCzyyNPngvttZRQ5HF7fFHEJq8gysGvThMiSaA7tw8vD",
  "key23": "3mbG1LgtLs6aohwRxLBbNbzky6PLa468WxWkur4krjnJpF9pmZdhtQL4JZnRqLL96tpFS2QXxhir1vLP3kyyUahG",
  "key24": "2Eum7F9S2kf5fw66Z7vLgnay8yEb9kxGu932LQDwoT1nFhwxU88MSMbW2cRp1BDpZvgfsiBCAVjaE9gNzbLpcZpg",
  "key25": "4KJfViY5qK9ySf2Zw7osqgEk1c7jj9o5CaaE4pjYzEManqQDRMcjNKYoK5r5BpSm5BjRYXxgZeQsjoAWn3m9Hqhc",
  "key26": "bN6a27HHkN2xvKaFMFTnBg1XtM7qcJLrsPb69Zt1z7B5fxfC9ZhbDqj2Y9hDX7zgaZ1EE7rvz9Vfm9bHsxcityM",
  "key27": "5C3jBdGEqvrFG88EjRHvBocZ2eM7CnCWLfH2XUDK2HwNSc3hVrKDFfP4ZmQWcS3Gh2es2fXT59XyLePoYAJ3XJWB",
  "key28": "LBzEL8AcuRZbcJtdKqJApxeCRyMeRizkiJcJYc6ycgBmNjt1LdYsbi8kc3X4tBi9d9otAdeffyjcKCm7vqESJnx",
  "key29": "3LiWpCcsRUhZJ4RSLBcHx8QrUSo5hSRBT3DYQuRk6qzXhbZAzRghcD11PFx36aQWdzKhRwFzbpQaPQqx7RjnzjGt",
  "key30": "4UZSQcqVSAhqv7TSxhyvLby7zTSAAnxDvSisJFTH18xuP3meYuiAQYcGRZHVWdm95g1esQ9tHTCCLQYvvFtEh4rA",
  "key31": "J96ohifmyHvHU5G5mX8DWSJhK6B3xVBHT1dx1jMQbkuVMd4GVUE5ePsPkHmFa4W6eU7v1HLEvciMPMdExjSbgVH",
  "key32": "tcLmd79drpWy6qmhtYRYaPgNxccFHPHG39VRwWuRcaERcGmWqjW1dFEvrK6bTuuNa8kHk7wfH4Z514EY3nU8T9L",
  "key33": "2b6G4J1g4qLhaT8VvzWpiJR63tAkk7Fx6FrP5kn37mt9PCVGBiorQvjJMeSRWFdELMtH7SYHU7j78iMELa7ChNJZ",
  "key34": "3PQTnw8CBoAwe8Q3m1Wat3cPp4FiZ8pd2uRhBioCxLhfpJ13sDmjYPzewDbCHnntZRzYRMuhQDbPRNeMvdNwGCuu",
  "key35": "4XyihVJey9BdnuGxu7DQttb3Goe6QSjcKawNsJuUWqkSkmydrihCSV3EYHqqPsRmAKbXFjT2x1dDWWyLrjEFEBwA",
  "key36": "27JWRaTyiAKZMgFBwmn2sQ1TKENRzaoAPrUQ7nYJfSxZiCwxtHhg5JSEN2Bz3AxQFdMUNid7PufuNvVLPLMrtKnu",
  "key37": "53VQA3zC3AxX13YegAu8cFHWCVucggtAJEkD2BJuLmiKKfEzC3537kdhCeB52FoxxPm3R2YT3kcv1uyb5njGryh3",
  "key38": "4VA2nVYY5QikVeA4YdbkbK5L33NX7umCXe6jHAnusRqEAXfFmuYqihy3aZUwheK13JoLWu3SrXtjBpTDPJFkCERA",
  "key39": "3cGEEXycVm5VZWEipki8ohmcgLrz1RKsuj1PxskpXBykjEUL11hKpWhe1C28Kkb83Tynftj4w1x997juZSEnTEN6",
  "key40": "4MooqkwMH7TL8ZeSxENF2XNyiS6KA8xs2kyN48iRZY8Sq7iAGrgg4A8FT8n1JbiogVGVkbQNEM5gmUuA6EygHxy8",
  "key41": "ZBvNUsmni1ubtNaBs1PggeCxmyg7KgdcQUG45Kf5ubdCwULjvFu7wNHniKzraD5VR26opRY3kseHdkhsNpQS9gF",
  "key42": "29So9Y87NRmtELmPm34x9Kd1drvTTKPGwfL63JnewoKwTAyojrzCcadUU9J1oTwHxkmG7HehpM9HYzPqxZTwGu2X",
  "key43": "6x5C87pur7yX2YivKjXKrbYRkXWEUTJU3Mg3X2HvMBi76pyt4mCZQWRDaoPBNAT9GYErU2t23V1QPzW8gkWXpkK",
  "key44": "JArdTg1pTE1Vo5QXUvPYAYAanC4rmX5eoMPHWnxEjPbM9ApGP11YXzktRzLwGJ9LsXL6eCKe5GUcDbuMJqdb21X",
  "key45": "UD2ejBYvYoxoLHT4TexWsXD8hPHByuKo3gcThYvytTpKqurHayJb1vRh5onaq7qAgEJXd2gmnyo99cR7nAKKvyp",
  "key46": "2Utc1dGh797cCDFBnAf1huTUnKUjSaVKWitx8rwB7vJcnKut1XbkMYAhC6AvAKg9EYH8cRiA5Qb3RvkJhPysf2rJ",
  "key47": "3d5dWLti8dvBE3GZLirfGjBakDa55pE2BqHgkzRMU33MyAaYqKkb5jjom1i9Kxyp66AiioKuTGVpK4P6DBuSStcd",
  "key48": "5VPzWGj7bkVB7SRaGKs136xy9DFECC4p4GHfd6uJQm4FZvzX5Eb2v9g5near85by2LNJ2gR1eHFPkATAt5mZ1FZz"
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
