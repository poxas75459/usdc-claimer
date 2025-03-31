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
    "2KztSQ8gyxwJ1ovKLtCVREs66S4MFF6sxCA8xdcussa6qjWZZ1FDThj7hYTikWN9QouVcdrzfUemrsd5qv75RXqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yiCdzPHGGQ1SLu53k3Nu8ffNNKPViX8QTZqcCoigxyJBrv8Sz3Uqv6bEAJjw2ABWZN3Qk1n9XX3c3JNrCqYzWLb",
  "key1": "5fsjwu1MDBGPe9BoxfAUprCdGVsmbS4KcUwwnBxnPHCKYNQ3aXU9gxmS6T5JkNPn9AmzE5TyZn7PVXE6HqAPH1CB",
  "key2": "5ef5zwNxnvZHs3pRBFxBQx8WTCiqmmtw8xrE74T7CZNSi2hLf2X3VvmTSvoATjfecKCqe9xhs8NcLuoTLhdu2ZPL",
  "key3": "4SBLte7AJexN9WDDQ2qaz4DBPW14PWffRiyLwYASzzUpscpd7AY8cth4vGhLZHuXyK8zymtiuLDW6qoVUKZAvSuM",
  "key4": "4WJuTz8xkSMg5vJUxmP3oarLnBrujSsCrNTkjF3nyxpvFeTikbuPvmpni9AyU6Uz6JZeTPZTCmJ276FuVxn5cW9T",
  "key5": "2NYfAEJnXQFqsGRKNygMPsuzkV7g91hjaB4uPfyJ5jYvkaGF9D8NGZACPMuGRLPQ8LKQetAHeqgaMVNoJotPCefM",
  "key6": "4mdZLXEi7SGuiBqQAfXnEcnah4MKK9C3QxBa81tBhrPe4dkyZuVJaW5S8v6G6kx4NPWet2GbKT1Evy4QHfK9i8Dg",
  "key7": "3ZDJMvYUNxnhqBe67zm5WQPkHWvYk1vrM7eHDNx7Y83NYPvhdTCB8U7faLi8cEQ6LkGNAgDu776DdSDjKDnwfM6q",
  "key8": "47xCpmhhzyXVfF33wsNV5ziNoidEYh4NsERyun4tnUkbRJD1QFJ7Ky4XWXz9m4jdEXbfFnJnRkPssDUWrKpFiSpv",
  "key9": "3XZZEeMKiQpBWZHjqsXwLFFJxyMRNQYrT9fSnoFN1yvk4dg7jgkDjG1TBG3Phkq9oiYgvHCmcNr79jwMPjbxeEsR",
  "key10": "23BwhSk3TPVVTA6Vp1kE6d4HjhPciZLL4b3p83VSzYFL1VRTrkx2K76qJkNTm7tdP7V8HXgYmp64muvzDy42LcyQ",
  "key11": "5Vx29DwB6GcfBpQTAgvw34EBVmmaBBixgKmMAFFvZbDPZp4ocSFfsujk9o61YsE3WahDFwXBZopWLhz3cVViq29u",
  "key12": "2wNuiehPkdF7Evb8T4UZb4yRoJUDedWzFpJdNFzYBzdzxkn6pYeX9X73qixqMFZNrJGjKgJDFdbiyLifogJ5mXa9",
  "key13": "2KTTgfTaYUwVnLupZ1YiTJeZg6rd6kCpzNt8BCF1adbvDCgaMahChCCcTHPd31EyT2U6hFwFi43Y3a73wGffpZKT",
  "key14": "3VDvQbqD6oB8oBmCmVhYHpBANygJgJfQuaE3GkG96c1HoqukTkzueAgnca2Fy7s6BEXjFeqQchdKBpFMqrgPwaPi",
  "key15": "61xW3ngv862bDCqVKyjR31v5XfdyqNVmSztbTRdNkHLFnYXDDbxLu6B7V9e4KHXVebktoxwMtC7htCaL5QLEL1zq",
  "key16": "5ZZqWkbQKBZdSmppqTKxxm7s6LrhL6zvJiP1Awx3eL9ohc6cvt4Jn3E3YE5ZaitDTjHbGwUjLKjAzqcfV7n3Gwp9",
  "key17": "2C6jxwo4RdkQykbqqDgrHVvb3HXokTmJL6HukuKoeEtGsn6tZPjn6DjMSXkKcapuzh3PoXpCt2JCAZdd7yAUQ9RJ",
  "key18": "36tLNujwTLPRBqxgVfTRnJm46nK9BYFhJPDVvN382w2tcnyhRYjYzk34BNQWQUngdCvAdhTbbNAuLsbN88JchKSK",
  "key19": "5eUbGQWg8MqWrfZRLwGMMWrsV7S472brgrYSjHtgfRdHCLPB6dvaudUuwKZPEM4n8aJwdxzezUDoEPjFfqKZBPp6",
  "key20": "589wGSgCuAWKSoUZ8HEfLAGxkiq5H2eqVa3tWKSQQ8hkigHyBAeiLqdXxCPEoW8wHFt5KCtaKedC6P6NFyjpsDU3",
  "key21": "5ZagK1mKzuStZWapMFLHnC67Gi9EW8y7n3zJ6hmtUdpgwCR52j2fCSKKkkq3v6At4KFfv6cNfRBBi6Fcb4sRHRq6",
  "key22": "3tgJvCdmMnpGPBiP8vpsrS8M5Cz18NK6JaPiSg4WHWjk5wfNLC5cnnaWvhNXhro6CWqkWLvCq32QH3zxGAZkKNqm",
  "key23": "2U862gh5fvKXASUqUb7EfE1St2RydS1gmiqXvt1KkD2WtQk8zBUCYzydMEfptWPFGZqRihbJVa8bfNjyistDcB8a",
  "key24": "4RdvpMp5WYmuXo32aEbJzFVM3NHWZuiXeKxoqpm5VH2W6C2emR9uVkaJvTpAt1ni6ZCgCUaFbEgJEDKSQNCBVfNy",
  "key25": "4anR4USZrGi3GtTpc1843BJ6GYiSLmoQC4JQksGRRiutRiQeqW7nkgDdcRdbbJwDAKdYzoxsX7pAmUaTtRbozZRu",
  "key26": "3wGfdC47zGUV8aLf8nDgxsqZEdCfH5UL8cR6tpHmPm3B3HGFJNZiHXSAehA9kvRcZHSjqL3fi4cVZvWa31gQib85",
  "key27": "5EGMbLuuyiqoLoE3ykKRqnn6fubuemzfHU9Mvz6c4avJfWY8r3xZW9scVpLEkrtdDqPPW8GJXkgibkEGpwikT9LM",
  "key28": "2S6bYjzUb4ooMwNBjTLCfmTpiF9LWu5nDpaV9R52T5oMBQSj4tvgpMmGM2BszHWZHr1EC1J6u5yPyFzAjgSKBLtR",
  "key29": "4qKtQgyd9tPbnM8rVSuJ5ba7m2M2ZcL1oCnXSva18NTLTs8srkfxgMKV33VLuSDXADHx5Kpa94mPLkp6LEmSHkzj",
  "key30": "22b9aDLerJZJVm9GxdVsX95epQnFbfzRXgKs4EXbrwQi2QEjUz84yJZ68JKHhCp3C9751v2epKtbd84wkRbaXDiF",
  "key31": "5mx9o7NL5rTJm4BDQxuFZjn5EMF2Bh82HF3yKofNowJUWHyrm6mPLg54BDzEqSdWmAP5ttPb9FhzpvL2JxV3Nv41",
  "key32": "39bisc5DhMYnUYF3xPfghr1kVxDzckLKnrkSBc1L8d1Rn95asdXamHE16qnQUpg7k7CfFUvtjtpFyq2AFpLN5gPQ",
  "key33": "5v5W5jZxeEMp3UxwtvUerPfMnua1Lyxfa9aTrZPZ3mZe9xrv4cFBZaNFZBfuzNHasWpRN1Vx1MQa64inrCHvddL6",
  "key34": "2FYo9uXaLB77xHxrcmdbUGUyRESdWNAhQdrheXEgYLSJZjsPTegyAwN8UkDKVJRq9Pg8yD1zbAMUZfCcSL1oBwVB",
  "key35": "4t3dzYDay6CAhd7wBoGkuM4QRSBfamnLKVryGr4VEq3XMGNh6DQwPCKMmA1Ls5sM2fZQzpvxqmUcYxfTEP3wtYaF",
  "key36": "2Gj1DD5SqJKjFJgn6qfyxFBtsv9kHCNRpUmmwzyfBfR7uDYUjKxXhFyP1weAviBXc6o8QEbBd9RxEY2dtfzq25Aa",
  "key37": "4GYtu6szTMWLUX81GWuBL9ejzPnfXoNGZ5HFj8XK1xAeJZ4RbcnLP7dqkU3HFVVrtkHNpukf8VzagjKti3TbWXeG",
  "key38": "3Rhz1aJiyPRcrKTXhxJvN7LEg76UweavqqmycJFHsdd6FxV9kUxivE769x1NWuuedSYgEpz1Nv1ti4FnEWCydMyM",
  "key39": "3YqsJcieuxgfA2mTPJxttdsVWktfBX9jfLsRcVUw4x2SzokhNmR47LYKkffcM3HdydpLcUbKHVrdpheXAG9NZskf",
  "key40": "451JEBHfsJLPr4bbPaxmMnBSuF21LH6NufgcoakeAkKFL9t7thDRyHwWQnSm4ZXBuZjeg4o8oi8TW94x5vtLdfv9",
  "key41": "3Yhu5gvBb3wEsdo1hy9gxHJZ6cb7mJUfgoshJET1SYmng5S8BE9ADGxG1658R2gVo8uYK4xDW3NHLWgR3hbRGHrF",
  "key42": "Ykj5dEYP2gAgMUqaar8o69q24pAkSTaGUJhNxGpqyNuvZ5S8YNy4hG3vPVoGsn4b77Y9FHGATARKNvV5VdPnphn",
  "key43": "62oUx1qs9wzW4G7TpPd3KfycjgBT6bBAej3qVyLqjkjcp8mzADYV3fjzzQitgGrMkP2bmD25HFuaGjmnBBPahHTJ",
  "key44": "4A8YgkNwRfRLxyFyDPdVVWcYkUpZja3bB9MqfJpAvP4p8Qc78emSrdtd7SbZxQiG8tk2Jzj6YVWjDhRzvqoizjZw",
  "key45": "47D6xdZSbV99UDqmXgmgB9zfHtPTGGqEKq4TYHkpmnTWh9cVXyNQYDmGz7pnx8TGiv55ADrUc4wACFs8oK3b1Gdq",
  "key46": "5AUXepDkfXYjMqQATJE2LkR9vUpmPQyQjFuGV5h5mY2DsZodfNVERC1kWznjyvjxX7rSTNSKzuarr49c3rDG9SNH",
  "key47": "2ndb4756rGWVnLv1uFHCZa1h3x11WH3HRDX7tSkC2Sowcemzm68w4o17XFTaT6Lm8BZpRPA8T9k83eF4T4NFaFRk",
  "key48": "5oijayv7xh5iqYYxBFPgmY4F3KvgCg2rxJ7EoxF6B31bLHxUoQc3fDDkizHH5qhkZdWooY4rRvwXT7Gu7LFFyTv3"
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
