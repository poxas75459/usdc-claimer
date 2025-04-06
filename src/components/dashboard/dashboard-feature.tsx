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
    "3GazvTt8hj6847Nr9Mcm12ppEFdc8L89C5sfZQ3aPek6UduPd6mL7QhHjE7UudVuBtUZhhmGC7moU8UJJpkWQ2B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gAMd3SFDNytNvmWywHw91NoyFqVez6o8TAP1xTY99pdtqYEoDV93q5Z1x9rfAGEUPEKZcjSbftTvZDhUjLqVBj",
  "key1": "2Taa9Ei6tgVTrrtY6YgSZNVAbmsw6tANLG2gveQwStyC7C5FzMGkWGwV8AJW8BipanRECuQCtE9CRLxWUsBm3CuT",
  "key2": "2q48aSm4V41aGRP1cBbwyYPi12XqFt7XC5FjCnAcXUXFRwKFm4zoFUdoHUs1RxfG68LGb9cZ47Q9irjFE4adGVCz",
  "key3": "3XGgbaAKEuQfZFwoymXbKEHzkJQsC2y3dsroojGArHcyLSmwACMMaUmXW3GAu4t6387cwsiDWUKhXobVAGqphXXH",
  "key4": "2Yxm3it9tQ9mkcNeq31dY3J2CyaU41bDvFADRJJ3efA5y2iXYcpEDhtcfjbcXnJNc7UphqLkRJdyUCXtD1KJ66eB",
  "key5": "35dTh35sVhMSCkFrZhkuv8dDhr5UNpHv4wvqLkuwJNvDpeKnWqGoQfdPcmPnUqqtWQm2WzRji5mE1aQwuYtJqDL",
  "key6": "4LhsJyBuBwLukr88TuaGvBZPTJWBiVhPmLsUaS4Q4NGpJaH9xJcQ4unbmALZ4uU7bCbpMSBDPyWb8jnnbCCk5X2T",
  "key7": "4M32yef3tcRZzLXUGUtmfqKddyKvMQdnjnmBUwHR6zPG9f3AvPcPrG2bTfbDuvyKooAPEez1ytzoAkVnH4mKwjhp",
  "key8": "5mRnh5t6MwiU4sLxAnoGiAbCZxHdTZM7iaN2PYxHViPcyNdzQLM1jguTTEmKSycfStSiuB4L1wgQuvo3bKR9UF6K",
  "key9": "rHrdmwFuGvKV3wnF3CxsKV4YnUX8bW7S8knyWLxibS9rD9V2swXp21ZUXYd4xCruVy99Aduw4ALaWbqNF3yKKak",
  "key10": "RYfUuqbnmMbNi9dQ5tbXnTTi14RPiwVY1ubACcFsbJwE2fUqZyC7pQX4iNwm7wEvTMt1a5aUpzMqNnxuRQkNijv",
  "key11": "4T2k8xLmyXJ7dC5oVs2B4YVpbWvbWh9Aq2Nfic8LHVSP8pvSbistTPfkiHdJeRiiQGrcKYFv569mWn2YFNrx3oAn",
  "key12": "5vVDpMspBGxHkwamTemkaLp3FMbcdiG5gNXzBTvcNxDWZTbucmHfWPmgyQHipzPgnMHZGqc3TqxLPP29GZZUNeiq",
  "key13": "5U5Wz99JriEpExCgwSgqgiDPXCNJmtPntHu96ydMMzizSfevdZEs8f6Gkz5tQCtsaf1UZvvQV3fTczwatx9VexbF",
  "key14": "3mH8J7uSTw4AmcSMbNW12NeoGj5j8BnyRXnGuXz7ULZJVWaZkPNZMScDQZ3773pXBbGYtpsLw8TZaUkqmcNe3PS3",
  "key15": "2fPpWGu4oBZrViWUM51SkTvQWuRffDm2r62JhQPC2HL22gYP5R7jGqShfgLhNmEpPZfdfeLmgBwZan1ZRMtM2nAb",
  "key16": "drVN3yjbWy78tq3ViCNVNb6pmhMC9MCxhzMaShS4QsWNax8EXuGomdkY5QG6Hsmmhw3PJGpqwrCmmK7egvFRhBD",
  "key17": "4btcgLXCBExd7nqDjRCeKhqtvJG7MHj1LpSheeWHXPgxU1N7RBziC3CfTrMqXNomyWY3oCPtiy5YgiaBYkY4scaR",
  "key18": "kakR6xWziLtjWQpRNmuhffTJX3az9MGTe2nkF7UPYZ7YS5uXhQeTdvHZMUpn13tqvwHecDzsacYfbgrTGH1Lesb",
  "key19": "3YH1XWSw6CGas7yzKCA968HwdD2adAia82uifZ9enD217SwXuCGKsAdKWiyPyC4WRoUeMbYeDt2BqjxweNKzog4v",
  "key20": "5zU3K78p5FeW5KPCM2mesiJuwtJv4wwQUCYoVTT9k3HdyCsmnNmZvnanCTRFomgSoEAbhaaYse6dEmi5b2XsC7o1",
  "key21": "7oNYUQKS5LrVnPS9wAhjtMP5GvYPBcBafvvLfvCkW3G4aV2hdsgu7YhN4trUyPeJahV1w1Fa3Aq8osiueSnK1Q8",
  "key22": "4wFPfN5Tf4XRQbV3u2BmLBMHqLm9mNrS4Gu3mFJkk7HBchQffTBrF1dGfdt5WgYLgyKDK7M4SmzThBRSYMKnhi6g",
  "key23": "4Gwg6SAGq5AALzqdWD1mfpAQiagWUWRfpxB81SWoBUEBwJu2QJvd6c9NfDE7E1pCAQC8Qi4H6mfRokgLf6NpR6Qe",
  "key24": "5TKBawv5jRpgRPhHTyQZwwqSuvkVpzBb2nWj39MtiUiHCz88UZrtvzDQFoQDdbwJC2ZsHcxKb3b4JX8atkiCQKSc",
  "key25": "SRcwue9zXAQB4LH8EJDS9aQtfGE8HzoKm1CDDnyVjE51FwswpcGUDAWN7RccJkV7fhn3o7HqMCcgaWo8LZe1thE",
  "key26": "4XQV43SDzePGRARuvpmPrFkpztbUB1xBH28f3esUM6AUj1EF43KSE8z7ANjDEWpC3zV3FpiARxJGK7LH6WdDQAd",
  "key27": "2xZ5zjBx8ZhT9GQQRyWgm1RkJ6UdKCzykcJmHRx8yFzdYUKABHzUbeh4HcsGeUV87BiBbBNrfDsQAqd81jFo5frW",
  "key28": "32kBWieX2MEdMBZFLwxmWsZQvTniPUokD8qA867YM4SYn9PJ3kzKHbrf6o6az7PfKRjtk5SqYqu2Xvo3P8DgQmsu",
  "key29": "2is3wKF8DoiR7nncxi4FnH34bMAiQ4FaSgsWbdPR9UMcQjbpoitonz5C6Dm9N2NHn7ipEW2ddooMHoR2fhfgcLj6",
  "key30": "4HLiNbpn6xH2zZP3CbzRaorXM1hPcZty6eWHJuSJakfr6Ye644UsWT45nWzu3httH7h1scU6GRmwngGPYu5Xfm7r",
  "key31": "3mwAHdwEScpDKGAgJzFACSoBKiXv3gUETGmWAbuLrQ8iui5fcefrDuBc9BSCB7esbRUdazMqgHmhRCQLLZPwPsS2",
  "key32": "5J7rpsPRBKBitXvc9JCttkzEZqrDT7iUUXCjP2Kz6xf6CLy2oZmSAY54ZNYEazPu9qVkLEU3iGwwMeEAsEd97Ds9",
  "key33": "3jnguAFGhDYBiHG15w6NmkaTAjB8oGaVXPUyipHZnt1wvdmQu8obesGeNfdkp2BqjsCpAdo99osd2trudRkiWeZo",
  "key34": "3UZxNDDZ85nitYA2ng3VfhkykhnxB5bQk4d8ejXHcmABnwG9zSRHs5gCLYYrbgjyDoxC3hv1hkEpJevTA5ybGFf2",
  "key35": "2z3RiPiUYjNK71D4nRf5cj7DYHkCaLttSHCeBc5vW9EPZJX4eFMvmx2HbWEcYqLYCDJ2FLvuHU91127BiksCvHtX",
  "key36": "58okAxnDGQtJJvao1Q1w1CXpwNLpyico7hsRNs2ST24N88v5kupY32FGxURZE4cQ9WbyeaFVqr1meQ75qe5C9a5m",
  "key37": "4BbZT8WUjLKQPgzYTVviEWUeH8n6jrVFgBVLGs5DNo11Rbk7J5RVmoiNGQhsRfakkatfRC5VvYv74e2rLZQoRn11",
  "key38": "3jZtQiTfDnzN42vSMZvq3A62PcjCU5TtU3RCq59ZVGgn2uPdcsaJzE75unCMxABKKzdTsDX3vRzkMUmP13gJeiGk"
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
