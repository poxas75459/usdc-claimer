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
    "3R9PkhWSnUTxFDeHRSVEcxkTLV5h4vJGWVU2Pu1chhYLhnMFJetDEBRFMBvTdvZeDKqPmayynPgkqnUyf5xo6DJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wM5de2iRuBFi4FYxVph7tchuYpNV5zsqmr3FTa9qG8TmbmDP7y2PAdtXQu1F3g8FRRuEUD8ouwJWG7AGxfqwHrF",
  "key1": "NR5ZwnYUndCT6iPPZ7GLv5ng7ubBvGQGwtetnXKQ83X6gHvVLPjy8C2yk6d8wqekbZNS9jhcXCZsEtJwuWdrV6v",
  "key2": "4wiV8DYmxVwNGebjo74o7TUPZkoE46c379c6a221tjaaNnViXNHMtUg96QZT36F7FBLtDxujDgg4AtDrNo73vSzU",
  "key3": "c7Dafm6aNqTUEDeSL8dZDuSaCQbsPTJuv5F8fUVnSnZzT9rY2Cppa7M661jNJ2wYxQv7m3Qzyg95NjYZCYMp3NB",
  "key4": "3GDmMzvg52VbU4ektdYmmdhyeYwU3wB4EiHtffLHLkuaX682eDxX8WzdcmawkGVAaTU1ai8DGi5Ww9m36Hp3QEXq",
  "key5": "5BSDUnfGQfy7ShV5S4yj9fV7Sa5Xxk3NDpRqGxpABm1FPFktJdA8xZmLYEpANcTYehS1V6wmmZf1VpfwA5A76FC7",
  "key6": "5fEtpAB3ZBURJzvHDHV561AZ1PrPw5xN5cLD1QEbgozHF6EGbiVHGfYEC8drcxtqSuqG5tA4aUehUoawjgmbjpHd",
  "key7": "46H3PHgog9QcFE7UDSUe41LoaVjNkffQkdWhHnj9Gc2nJrvVBAQditYPvrDpunpFLP4FkNemghomW69YaQ6d4ehN",
  "key8": "2WW35uvFzjjZc7VCjeeWMiM9cHBNAqfdYWz2P9VmGfsA76ucQSMMDrVf2cSjWmuMrfrznmL9JmXuCEKNkE9Aei5f",
  "key9": "2MVMSgFAYtdKLKpLCnZVP82fchydtskcUJ8xfifa9hsa4ZcJyM2bU7GLTp8Dx1a8NTwe8a9spRxXXoDak7hre5A8",
  "key10": "3NosMfX5RvXgVxtMYowmuEUiLkbcgdw9pJn3TZMuC9G5Ec4CFSK8k5nbE6qxgN1C6XafYYNRyWvEMBpEaQrHYXMQ",
  "key11": "JcQcMVZeTwnwqnYAWnjn1DYo85NaqdP8YmdH1GPeAmBcHYSX71KAeezoWUewPMzGVrnVeJ4Um1WSUccbGjBJYt2",
  "key12": "4Bz9JNgWQTXocdFeAtqU1fWJiRRNXLkLw6Gsypqk9155C6FkLFboYbJ7bwJnuSCN5PNbES1kL32KDxcchoX2ayZW",
  "key13": "35RBLHZaMh1CzfYHdsb5A9JFowTiiPRA7d5WwzuqnTr8thhHBSZzaBi9gXUtcXp2HQeFLv9HmDF4wWeSeSbTseL4",
  "key14": "4WeJSyYQAfeJjt3KGH1gskpGeSUsF2vpdYY42G1XBgPVB6W1hQ3hE3sU4uKsVumTbcC8hfDfRHMp5fAs2EqFsn1C",
  "key15": "5x7tuEm3c9zc1X4VsE8TPdRoVd2PAXKxbcxQvGhoSQp9LJtzdM1oYCAHJF2Vkus7UeLUMpL5YMeWi1zRLRNpy8st",
  "key16": "65f6s6bVfxwcvdhT4945xHqX5ssYhUBZujMqoSEZmdqZxLmSPYj65v9tLmDVwgz5RPokS7EQ4L7kgpnsz2QmctM1",
  "key17": "5SFGeDWdWRjzrE1swLEm5F9tibiemVTLHxu3cx6Nx2f5UzGzPUB2gdBouygBTuo7Ji1pkL75425FfJRjmGHmbV94",
  "key18": "2smqqrpVAjVytSfuLod9Tx5XpEWThy8n19rwretmGyFjhBorbhqGdTbmcNKsuP6ngpnB2y4PgUG6JydgRdTDPN5c",
  "key19": "2awBvzWgPQbRe2NZ1v1hRvhmT92xH2G7BKWfJLyj9Jhx2mtbdmj85NuCShotgP6D6JWUyYS5WwZGt335HjpmpSa4",
  "key20": "2Uh4MpbVKcvH8Bsbpxrtnqi86uN33u16igbegS91cQTpPRFHwSLvP1xYvNf2UXmXJcjVdwekphZi3Px4quCUrR6u",
  "key21": "4Bh2DqHxmkhFkYvEFnpakNUYZ8vh6cgRjrDtLvk4xMEjfd1Xa1ZuX6ngDQoWVkWWXSJMCjsy8rx2GQj6Z6caU3Rg",
  "key22": "5HPtJGAr6xLrRPut6Qvn2zsNqmB9nAH5MwwZktosVUS7RQH7pq7V4HacGQmepvotHe196JoRwjc9NMELJ8icT4Mh",
  "key23": "3WYSRFMuPgiD8Bpdwm7fzAwUqDGVk4RyG7PSAMgXHMBENHnQwACbew9TDgBb9mKDLzBGgUsNRLCuFkAVD7vC9aAP",
  "key24": "4y1agcWKUBjdAkEbBQzKJZtEXMQKroBwrzE5mVm1rWpxmRrtU4fsbW6mcn52x6sw3tviXwZpKbx6m5Cz9ugfGEWq",
  "key25": "5qDnURbpyV8Zn3196T6uXMGv5cdTJddLGkRPqCLQ5FN3Xijx9poZrtbKJ8XM6X846Mg3YNuXcNqJk3WF4Xc7ypGL",
  "key26": "2d4hqst7D5M73mG1FLV5hWNqnbnzqezesQeggN2Fahcqt4S6SJ8ZKp3nYtc4kkWyUCyQaijrX88QZY7uQSiw1MWi",
  "key27": "5ALH8XX89dPRhLbS2mVcFerTv6NHNooDJHhBeQVenVA31hFczA9xzvZqq1iB7qnnogfdXuSDSa7ECgZCNtD2RZjQ",
  "key28": "4LMdjomma4C2pbFMy2SesWSaEkxR493XuWr17wXvy3uSGaWe8vp9CNafrGZqNRhNyvr4KPF1JWj6N6xHZp7pyK7T",
  "key29": "2LK1HHsS48TkMTJZUZtetq8A5fQqsvspExfDewADh1CLPazGHjYiDVDo93svnyVJj1NRpwmPwGocnEAqHXfSkj7t",
  "key30": "5CC3Tqqcaz48WipaovwM26uGR9mAxiex6mNgmD9jPCb1rN8Y6cBDvLFUf5A2Vktyuuw5arxTKgB1HDbNr2uwWwmT",
  "key31": "612AjjDtGvgTJWuPNkkkYzrgQQv3Yh52VjHfBnAtqy6q98RwLrg857ofsE5XwQAv5yg4oQefZpY7joHjdvWSiz2c",
  "key32": "5Bzi5xx7zS2tcHuPuxmsG4DDJmWPZQ4NY1meAi8YzMwaLJ6q7fqsnrsMwwtikTzmcTaQWRtjZ5U9xpbw3G2sjYw",
  "key33": "3gQW5LSNSZKLKF894zy8kDh5tyzkXMpsMC8zqKLbqD5LNXEr2J2AyrYLvdgmgjJAPfzx1w2pUrFq1nd9L4GMWaZo",
  "key34": "2TEvP4RZ5syqjqgC5TavtyycFprsLKfsFK8KqgxTvv8pdBUVBog93GbFgU8KpzyJfGsNrArQSAZKHKaZpCzoFosj"
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
