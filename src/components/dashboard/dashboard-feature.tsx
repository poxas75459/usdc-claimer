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
    "3QM5yNjYVacp3hoNSBX6r2wLMER87kJdaEoYYYvZodufGhcr2dtZ8PF1Vb4v4j9M7MMAvieWEehap3SDSLYFm6nW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SrNfcq9E9wdCCYgNkuHsK3UW9deTr38mZGj4cWfkLKTx3XEYbKHZYSaMZitHwL7dQXNNV2YrcRpaBhJ3n9YRPUS",
  "key1": "Chnb3nb6Y3Dm9Z4CcFoWPswedZrATzFMPZDiG3Mybx3woKFKWBNYzHZfwGMHdCxwcGYArjaTbjNC4B28tsmt6D5",
  "key2": "43xmAz2upd65eTXP8Md2aC5Wn1ojbWe4MdUCPvf8SMaBgcginVdpnXe7pU5XkHXyahCTQmuz6HTTYfp4KponTS5V",
  "key3": "2FMAWLou6GjtdDKHBzaMwyqBx1NbugxwNchW6efiyYKcfbKyMHY75b7i2wxuNt4UUHvJd6ca59ZCqaeFZhE9CEw6",
  "key4": "5Mqosupy519h73SLupSrVuMSav2awW6Kxq42hwEydY7eUtLrqYbN5qeoB6VQae5ZD8wrj2GZwDhZbP5gP6LSFVZx",
  "key5": "5fuqn7nSWVndZtfmpSaQSbwGkqPrvmpUSNS6cQWLBwKU419QaKbyK3XujSiX6PQEHcSGYg3uq4HwXe8Uunn3uAyT",
  "key6": "FaFuwffTswV4w3rFMsmPDoUt7xLGjXRWcZQjd7GFpSdzacY3zf3BUHLE3LSFY9sknh2CLG93N1C2zcJSrWzoSEj",
  "key7": "3YC5fznCvhJY37VFxwoNmF37so5vUJ3nFk3Nts9XMSHo2rVaQT2ypxEKVdZvWkM9pUzEsGnpqWGHvi1ocPY8FHp7",
  "key8": "5LyyiCwCccNnBQJEzZMaEpovDQc6vHiibMLuZU2eiwFF9zWezyePCyvQKoDCPS2iuctYUT9cZ29jCGxBVAD9omfE",
  "key9": "5ngKsiGdesHihnETXaSxV9JbUZyLcKzbwPZZ5Rd7ej7zihNVRpQBj6QZWF51haFpmQ7UKm2LjmuttUutbWdstfjw",
  "key10": "Ux5GemtzJ7dU2EJQjPC4Sk8qbYvgm59UvakG3rXQqo9h5UVbsqEH43sBxKDzMyisY8pMn9yaNd7CysN9jFvRcNg",
  "key11": "TM4oWmUUHKdGBR7JB2RRDjugZe2xqQg7MqPp9X28hPigchdj8YCj1VrowTzzKetBeC8UWCj5vj6kc9vjs2c4t65",
  "key12": "2WJipxZ3WX9shmnKvUbn6UZkwVc9Trk86E4FE6W9uWyCBxqfzo1FYuGz3cUhWmesKcF7PHUYP59GnRBzoH2Qkz5H",
  "key13": "2XRQhRN8ViJZoq4jGbJ58UJrcTrRvoEG5TF6ovVxPwABwog1pPcdKgQFJY5AMWhvirGMqTA1uWuLdbfE7DADE6A",
  "key14": "2F2b53LN88Pobg3F8MPtcfX7jKjWgbb5y3QimgqELyT1ByzBi9sAQALCYGLyhaiYkMdJdwK1JcP7zsR9NoJJThxr",
  "key15": "62JikesxEvANYjr5N2rqehDPssJC5LTtXRf1pjz83AN9UhVbyrsCdCnMveczHoSEi8kaSbQkAx79HidL37eMPi16",
  "key16": "3EgoT6WWUJtGjPJ7k621Xt9Yot4yMZjxbciDhTwub6JzmTo6foEmMX8diNjiJDb9UwQjVvFsLurEsndcbk8ABjrB",
  "key17": "2zwYYVYCPBXkyJZLovrS9WZHWkRrUrtBaMqApgJjpmyCzPiy6wreaRmiGxZYHjE1awA3ahXusZQueUx83721Ssaw",
  "key18": "4XZSm29PNptDGxH19YD5cHEdLPAykrP8RtMoU8b3JsLXmxCRJ6j7UjRaG13iMvFuGRv7KariAxuwBVwYDekB22Yy",
  "key19": "BWpvoJ4XZCL87PVXBQbaFVxQKkpu34Kz8t3XJcGAuGbjLNDH4FFYpp9wBf2JYWsQhCnkRSUxpTStQeCGBBtwcik",
  "key20": "3wS9pjaxYWFVrysLCFayendqTViAEeoe1yVTwQ267d3aAjjRNgTvr9kD7QUvrkQV6zYxVUTP9kq9AbSpuHCw4JLQ",
  "key21": "qMNjrfxbBVdhat2XdgPmTJTXBWLsxbtNSPxE8jQSJqyoLwGKTLa6zbHhXcufy5sUN6NyZitNXxYTMb5n4bc8oRT",
  "key22": "51oEXtgzNuExxzqkJjHbjyBQDwjMboCSNpPVJq49b7gtKfvmT6tFFQu1ZECDBF9tBAUpVGo4tpdcf5212ZPbCGdD",
  "key23": "2ZeN9KToqXPWYwtJH49imojmJ7nor3jFoNLK3Sm4stoNDvGD4QUPz9dzvXN2xNUwpU2LR5J7CgrEhVxtXk8dwNT8",
  "key24": "3RLa5rcobUCy9ZrxKFTdpw2tqJvVkPBKNwnEaJhGcqmSFP21ZL3FM1rDshtUfobYtPxcEZgejxc75iHVsymkmbX8",
  "key25": "3HCcD4CiK28csJsoGnVjVq6XVUAK8GXV3pyQiGiwxtRthZqSD9U2c54LTcJfCunP1kvRjaHafjNbcLrdL5YDnrAB",
  "key26": "4M5xodmvdfexPqHN5xFututPSvkQQS3b9Ab2WkN9Jmv8oiqPwQbfciQNWgdG57uhfouykhCGAxFbn89rJjavBf5Q",
  "key27": "3Fjxgk5BfsWifof33DSSBCRVAW6KpaDsVXtf6oDMt7aeo1SFZmsDdaMvBzS1kbpvSahMgCAr19kEdzs4MfZWonDb"
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
