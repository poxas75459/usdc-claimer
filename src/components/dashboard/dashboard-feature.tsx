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
    "4yQduSkqSNvnyGGFf6AiZhTST7vdSjYJFK8J9Rdsx3f3HvfyEYST5CGgewXsG8pg3Svob3jg8AkECHMwcqrCRXk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9ZiYcgTTSmFeUN4GsH6VwZa3y74VCXKx2YbiNLCCjwZmmDFcb3BJBbEca3a7qsKGZ61gny6cNnG6wWwqrTnHqK",
  "key1": "3wA5hcNtBqDhi4CRzZTEd7Ea3emRrZC3shYEL4SzenABQ9DL4GqUvZwd4PZuTbJjnG3Drhd3xsbhtaB23Mr3peXN",
  "key2": "4K46fDtReZtVzssZgHm231CEnmxEzDycWYZ8q14ABB7sWdXh3B9P6yvkAy52HHmne5VRc1r71R7K33BRHzzh1Qss",
  "key3": "3ktUqJoo9dxvjBPAPrjpX4tnwtTiF4SLbNjfaV2CW6NHHeGdz7YGCW7NmhiB6f64j3ELpyCJDpHiGtJiGJi1pswn",
  "key4": "BT7Tf7hD4Gdmy67wiHpzSn3jqGZ2TC4RjJxH1GpCdbapBjM9wgd8zSvtkVALUVSf3tpDVWfRJ48fjHeiW7Y1sFD",
  "key5": "3sEZhCh9XBWFn2UXxUMhRd2MXyyp8L8SmgPbBeD26vRatFpeHvUvmSvdeNJRnBnqvzGV3MGhz1APpYhnjZcQtDmK",
  "key6": "YtEYu9rzLnXg1pGifdeWGbiSt6ygh6csgHBZ9HubEMXKGmiPffQmgVo1EaQhb9TYAgT1nEtpMT9qN9nDrUYVt3d",
  "key7": "5ohfKJbGDDn3ydQX2ddSewciLQjJGnEYPvDeWPUWuXrFfh438k1nRE11RMVQyp6iwjF1rHois4f4F8gBZRUJ37SH",
  "key8": "4bVCEbvnFs9HNJtMANxGvwGv8PBXcMPRF5m4c51eZRyUNC964n2CAoChus2noXDy8Gy6tpFKVFNC2Fv6i8V87dK6",
  "key9": "2SvEPE45EvJJWi9GygX9bmTQe9azfsXbMxz8ezycZGg8vgYkAhbCBnsykBDqzBBNpMe5Ge8csX99e3qMa6zMcF42",
  "key10": "3SanoXvKA5PwTJAd3zH5C7ifywDQm6j1K3pmyp8tgwFjwsSD1ZeoSqrsrRNzE6SaSriTuSSnoGpxDsnCsV8LViMP",
  "key11": "4gq7fHyNPw1qJGsyzHuzEnEx32mMWvkNmuPV3ksEJHCvtHdLBLJXkV3FYqiMBkJyqZymwjkfBL9oAJJofj841PSv",
  "key12": "TJB12WMyaDNiGYM2JvxXg37CWZ22FdftvwscWakxPKZocGVWU7tQccLfrPWjQcMuxgZw6KfQyavHjd9Y5rKYyge",
  "key13": "5eouykDS6ZABkQZAjcd5buFEkWMqG1PZASuq9YPuz8y1ETXQrQBtHqHBY8waKoDytzAwMhUzFQgrPTWajp8cebkH",
  "key14": "2yu9oFpHHCcQKFwGeWNTiuLTjZmxw1qeoa9CnwXxoagzpNFC3zGgHMVcjj9BLQVNN2E2rrYK7eJbfLJmkdYQ9Tbu",
  "key15": "RqhsHr4tWt9Agbbv7ekqCxorW1d3kucMQJjJmt8MHfSGPobWwbd4nk5ekzpNnpWiszErRREKYP9nVPjkcakak8b",
  "key16": "4fJWr6uoYjKJQjhh5ZHnAKsMS7XxeCtmiVKGR2J2kwN9NTPRw95BFBhQ8jzdXdMrsXsx5EfuBbdEMMa5ZJZuop7T",
  "key17": "5eRbbp9nBGgWpKUniQ9DRCX915T7Nq84q2R5zQuuDFjnDt84uJweeDPGHyqkjnP3Dhs1MG9kX4FhrC5TJDskrSoK",
  "key18": "uDMLwpYtF6GJQf9wbAUq4ag38BqzPdvxKaT9b7D17qE4CVbpGNRAhw18sQypNQSwDZKTdytCAH2EjSvQqEkTPUA",
  "key19": "3CafmkFFphRB2acPTBUxjbjWVfNDJeMEzsEw5TA9bCCduMY7DqE5prDJvAYEvFNtzSFw3hHKcLGbaSVXQgEdvhDy",
  "key20": "PnT8RCCAiS3iz24zDaxV5LV5ZpZRjNcDascEnSKDS7E3GLFGBUBEHCY7qxbFG1uUHktVVUA1kui85h3wLXQ6914",
  "key21": "315YYSWLYW28SFXbXGeAf1sXGyJMyhXJaYQvm3wwjLp4N7jYKs8utps1wPuvtQhpyEaWirHCjVZm2ASnwtQZzSJY",
  "key22": "2RvMwtaw5MMFgSSweLzXoz1Hs2on45NbQdWWjos4Hs2DkJJDpeQxWy4KYpWxTcYDSfkDeXomhtxuHUnrzqiVCb19",
  "key23": "28AehF8ZsH3nfC3Y2WNuJjFR4n9mMT7a6GWxiiAHqrFLZXa9znCeP8pGKYKwYhRFiqdXHANuhgdib5cPY4wrTHi6",
  "key24": "2LuU3wiXW1tW26nmxB3ixSbPR8PqCtJS96VYe3q5nvMRbgbmQpmCWsouZGeJ4rbWmLuLU3PivYWEX8czP29GhsDC",
  "key25": "B5zvMT9Nw5t9hCdZ71AXN93ojkJDhbqUSkxcYMisBccQfGoUxdTaSZN9YjJWktaPZ3q9vK9ENWBnqyCW1seeJSi",
  "key26": "39jyB6KqzCN3QxjJswodTHCCmbKnoHdEE71kqooxhM5WnWVYW3qxzTQE4GJRmz74Y27P5k5GsSwVr8eoNBHuVHHu",
  "key27": "5hnetbizf7wNYsBY8ino2RieKyx9nA2aqfVoYYJK3hbiwDPsw7vzwwN7D4nK2hDqw58nJsNr39QQzEFChsJkyLbx"
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
