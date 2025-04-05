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
    "2pM3RbDzGZ4RqN2hD4PQsfM6BjDfcmkiMQziiaiaRKLwnaYDHJeAbXrQUYhRShuEYKAdb9xP3wCh7TFz8H7J2kwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAgr5FusKeNKXxW22vP68EopLfXJVEHBk5GnbrLLsjvMicinJ23aUX4yT2b6JPJ2kUDKJBX49w8dkVhCEJyvzvP",
  "key1": "4uBjJ1bNZNYUTRXPj3ygJ8yGZxocaDWtVAXwXYPVYXJrnJRPUt3YWnJ8XgpYHLabuU7wGDqWpM47PjiCqYeiNS2C",
  "key2": "4DPhfeLMzb76StVc2U1CMyjM5ztXSqCSqA1syZDLtdv4xFEJZBQn2kLfx5pV1BwdM31PozcchGxKT9VyfZqT9UTH",
  "key3": "66ofhjZw1at5HciGUKAri6FnwizYZP1wfSCEWBR98EVs5dB9hDfU7aXe6rz5eM23G6JUB94DBTCW7vsyLN4WqAmi",
  "key4": "42ofmMdjZAweqjAkwt7FwMNbF8PnvmS2jGSHWnEaT1YeZt5PDtcmm6y18xmpHa9pT9jH2jumqV6WAjChbKzcpaFp",
  "key5": "2z4EQdMsKq1uJk21dGvVWPie4K2Zx3wFLMPu5retTW53uMbYxTVo9U3RToFyRdKAjZccSGdsz9ayCUa6pASi5ni4",
  "key6": "33DsgmS5KTYDU5kP6sR8SFT3Bs4JKjB2eZzeRDwaNFucGDQqqibnNUh7iDJpc21SsX9Q2JJvZ5xSn1NnkX3cwHHs",
  "key7": "2eNzDpnY8hGxWP7jmUr7mDNmcbnZwrYMUtc312vSRSu2FEQTUdUXVkziLzwPsxAC1enife9jGXS8wdT17h2QZYZa",
  "key8": "HVKkng34USwUrRwdtPDdLwaoNeK55zhzfcmJsTkbCPR8B4FJVPgDpBeuS3KddJPJmktySU8ZFUECCfAowLj739N",
  "key9": "4Q7KdYsNY9XdVp5pRAETjyPrbfphhN3DucFB6Ej7MRWhtQqEmin5joTWQCV6pErAGu7ZJFqYEgQsEU9vj55f5mJu",
  "key10": "4G6JU268fUsXJEjVGUUWzpidzKEA7TT7KUaLDKGR4L7GHxjmLQHtCSwLqmdwwDcmax48NiLh9aSLwrFQB3KX5aL8",
  "key11": "67kVJdVfwnj11vacSDS5JowEhoFmepauFg2vhXtExHbYZNjBgjXXqYa7RjjsX39PX3HCgULe49RVPzRkTQFawG9t",
  "key12": "28b85SUQtSSExJn9cA8ghnyyjSuLpAbUeWkLGQn72s5iNmvWhZjuv11YFHaAcRYkHd92maKMV12RbbDn2WxPCbHE",
  "key13": "tYk4BY9npHm7awGcRv9UdhHxvF2rCfSRucPRYjiDekGoqQqoU15T52qkjtFW4ZSxCgzivmE7a1hroZzv3ihu7Me",
  "key14": "3SL5ne3cGzXFjTdhBdt9wGzJjnMzDBBaT1UviE9LsyHBYNDEmbcJYEd8JWUAZ3byKbT6sfxdzLHsQ23n4HRXkrfM",
  "key15": "4iCQN3oNjDrbKnfhPH61FAq9SEbGbKHQuEnKFJosEiYY5z4nXUc3Q1kprwnG8uRfTc9BVyzpCjMdcQHQTYvcLXvn",
  "key16": "5rFRfTxtsZLz7LUKVAmyzkxEiWNZEYk1UEb1ajY4DUESD7TUxJvcrfKzsMRN47iQK7RvvAy5DLBfSD1YJtMfnTcm",
  "key17": "4oKcnYJQoUqpaewpQdMEqvbqZCCqr8Rbp1osHoKzixcteFYK2fYYKPk4NRDdDzWVfW6FGLEeHJKqQEiVPyBVZ5u6",
  "key18": "2ec6hAC4jJWaY2F2PUGi8iQV2q6Fw8MYoSEKuhndJp3qPkgHJLBdyGtXKQs9rCYbHSRxriD9H6ere3UZiAKgyb3u",
  "key19": "3QWg4F8qssE2QDTbbn63kL7TtxFZwnCs2MebPsRMgX8hxWU48G14FN6jRJbh5aecWk4um3iLcD11p5D7o5NCy4Fi",
  "key20": "44pbqhnZV4WT1S79ZaaRju6UGypsUYMwmvLyyqemr7povxUkgyQPomUxDTcx16TeBqHjqqLJRFrxdGBExwsZmVdm",
  "key21": "28uYoL9WU6Tx7xQXmRbwQ5GVdmxp79iaihuZpGW5AvnX8niq8Va6w1qfiW5t6ArwrBHcwTQUrXnjHF2UVVCbbZRX",
  "key22": "4L1tpBvLE2NkCn3tRExDs5NwXk9Mee2e67NdKtHkEGnFEWf72gCGA8rzBY9TA9hcuQnbgqyUc3qNWzDYoJTSuV4Q",
  "key23": "5TYTGMcdpZTabVGA6psDCLczZNrx8FhDU94E6SYjXQiBCsAaDvHoU8JcBNriDL77vyCkE779Uhp5fqKTcfD6myUH",
  "key24": "2u8Q6YNFDhEWr9HsEADhKcigycxEvhRQBMhGyiNqAD7f7kUUAzyLXLC4xvU2Xb6LzUFYcAk9MEyxcW1nXiqgE2Ne",
  "key25": "21Be7ekq6hovKdGee8qtUwZb4Aeggs4EYYx633jum2ktxfwYYte9vo7rYuC6XnZQ5rehCMguREQ652GvECmdtJBH",
  "key26": "65c8RqjcioH8U1iqjkmnwyX5FYBjfKN8kz3PYmALzPeuQm3ZqLF5wLdKtqBaTNTasxuq2sa9M64KXxyE3fcaqpR6",
  "key27": "mv2TaC86cxueHuC4oXvJAMooatveXRHbD3bxGWWzQs77SiV5XhP2S9NjSM1MgMpAZsLsB2R5sRud9AjN59Q2WFb",
  "key28": "XMbcD8sDD9sEe7kSUtR5udQbjMkm7zfWiMYLZUn5uKZ5jmsrfcdWTdMBwv8SFByPzhK2kBKnxfMXpnrJcRE2c4g",
  "key29": "s1GhM5j3LtchJyDvethd5yWEDLyrGyWXsQDgRMg5MofsXTQX27c2YUeDkT46BkDXHhyX4DhtCL2RtPepcZfBqZV",
  "key30": "4Uc9TbAaGUJRKhZbZRbR8eceYLJbwXYte7J2FF2hx6hNRcRmWubG2QUP44nuUbs3ZogeEiC2sHDaAscGhHh56Mg1",
  "key31": "3KeFEmuUTipD7qAMRUi2rkC6sdPvHBFVD6NYwkxA7aFZ7wXqwYowMEW3yKozhvHkfradkqRgyhNDWNXDdVrJwKor",
  "key32": "5KRLUpCxUxvT44kaVxRbJU6WhQM7j16VcczRQDxvTSLDiD13hYnZxAxBjQzqoNviKYHhrYWSpYtuJpk78UAH8fAh",
  "key33": "2sVJDo4DDxYpYkepJNZc97ivpGvFRFmdwihhCHMhJEt91DG4EkCtUjhfBbHpkkDZBRaBFXQZ3nyTydrHswrCpvj2",
  "key34": "4dmg6q3sW2eSwhZUaqApAXiHJxwiNQQkPmPuS1nkUqJhD1r5p3uhxjDbuJvnKHb9pHExCVP6tmXVY6WT5LKF5hju",
  "key35": "GNGWryJbyXk4VHgChTbwYL7qBJsq3uB3jPCyefd1dfUCZ5LQNvHegiMYQSTs1waiNTnRjj9HZ8bUyDNahJqG6Qc",
  "key36": "3dnbQGRVNnr1UD7Z3PsKyyMDKi1ThKLQhW2CeqgQ3tzUdZSu5uvFbSnYjJekdGMpwhYqXqTHUbaXcg9Js3Th58TP",
  "key37": "5S2QHX3tjG4QYVqhJYe7cepdeKs7x5hGHJ1wL2v2dhuxwET5xQ1TdHfT3yT8VR9gLJE9ZBFLNranPAnZQ7xJ4T8b",
  "key38": "5DaYBxJ8DkFWa8i46PAbZBqok9Wzgcgn4jKRfjDvUVAvEFziwE6bvAW3pazBMmcDWLafyKGa69kGUrCnyTTrhxQx",
  "key39": "eP6ynB42BUqbmdSZqotX5Q947ak1i338iPvHn5SNTquG1MyEZeLHNfJtpiJizn2dScsSrtCA52TkVYxyvzuaAV6",
  "key40": "28MfNeprU5NzRtG27Z954sThZM6r1XAWQKq7wMMxfq6H4UYNPX4vioigkQoFbMR8aSz8ALPy1V2AjwnePzC546xy",
  "key41": "3Hjh77AjZpr6scYUpYq6J8qdY87kZHWNke4gnZ2Tsf4Ag5zroyxP4aZQbCsz9E7wfdr381k1oDpz9zwpcKSwFKwz",
  "key42": "56wZuJ7YHGtJ2DqLEBi9rVvJzv3yMTKKGgsk7sZbKiNpYk1yiUG94tbtTeUskT3ncTy9AnBHVzyiFmw87KiF6P6k",
  "key43": "4ThX6LakJzbtNdq4CTSAu2E9bACCPyYipc9rTqJgwKY6YK4TZ3zyiQBEHsX2BrFkuP9tbY1kmHghxrHpQJumxQ7S",
  "key44": "4pX4JbxZ2bpfKuowdgop9eHaG1nMFx492ED2xtFh2n5LC9yzV1FULBT3pp332VUsH6oJ5RANRtSRiLFCzok2UNPm"
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
