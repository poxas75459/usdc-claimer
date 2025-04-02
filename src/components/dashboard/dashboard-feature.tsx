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
    "4BRKpKuFhBbZH4woEVfXvf5t8NjcpRK6QRk6tcwZFjJavChdBByEor1TcPhRk4QShzAmohz87F4VtRbzkccum8gT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2oiru9PCmcWmE6Dkx2eWNZzvoyCFUrSf7hAyF878UdBNttMzMYunUJ1HWheZGBTwJWhxJyJUbY5ep2vTqMWx1K",
  "key1": "4FYpGH9uxyYmxpWGxhZhoD9bvGzVNzSDwqCUHZEeo9prorHpF8ogHyq3d5RBvA1MzJ1wTewSohkf8VNworCHrJ7a",
  "key2": "4pCJvwTt1GRYSDjgE8T2fUPL1xbecVH6jyVtZicMH2PDw9aCWnT9yHeWiFWcKBReF3MnnuLKCNJ9GBg97LqUPGh",
  "key3": "2f37onnd4nXkLi6QKqULuZCc4Rqoca7PmbfWDF2EYiq5J9JtA8eMAjLWvQutYyWygVKrdkyvWvvyxu95hNbVhWFy",
  "key4": "xyFjYy9dnqvpVFSfb2UYmJtNVxSMxV9F19AKmkb7VSHt8Y16rrtGRra8MnycEBSziCfTXupUFzfbTVMNrVe1aqh",
  "key5": "4X9iPLYMoRMTbh4UcTRAJ4w2ZUYuCQ9VD4v6WjmnxrtgPxCkyYGhEdQh3ijecFKwG1r3bmYGVfKtbJhfHxtAxCXJ",
  "key6": "4MY3UMu1E2B7WCKV2Fv8mrp9oKJxXdv2oif1Qu3sAuT227wuKV7C2kEiWw6njuhbMEshC23gKGfB1qbjwxx43ViQ",
  "key7": "4RwtKhfC2Xur5xGCZGqfv1hoPZWstCZNssHY4mEFmdKDeXZfHH9M2zWXvbreiNzNE2EocFvZVBjBg8py2GjKcmNj",
  "key8": "4BxDyvhTaKeefuX8Ken5mG8fSS5e595fG31rq7gZ5yT8EmSmHeQ4zGtqb8bn7zgJjcdW5sTLpxU5P9k6SFQy6GQc",
  "key9": "5s1r12RXst37uZDBXBKihYrRt3xKgqAokNHLqwksH2o5QeyWkYgALmY6FYWj1KY5Mcs2toTYejCeuDN7ydBHf5TM",
  "key10": "53o4D1M2fHmajhuApj5QuJBhdb8FnYuzHhiq72yW1GEBZZQ2eVZod8pZN273y5wAHYBQPqAh5r4NehX1UajvV7X",
  "key11": "wJEZhptXaA3BqNAKeNYFMTS5BbmDaP1ZNkWQKNiNFM1eKv3cr7YnXgcham9WND7KrmtPnAbqQyjBQQpeRzX9Bu1",
  "key12": "4t2UYEbLBA5rVsgFDDBsYHmsvKd5DeXuj8Q8iYYkiAEmgbWUV9iqdRF5QBSe3BfY5bQUAkzvNxMx7Bv1WDFmKpMG",
  "key13": "39FRek1rAW9BLMSv2RgVbp95EqQ9SJJLuPy1ePZRQogVFywyw3aknVU6SfDzRKMMpCjtsUJQjGCPXXeSNWwZFx1W",
  "key14": "56y86GWsEiJG6LLpmPYsgsDwcVagdoNMgQTdqFEYb5KJWGxqBYgo4KtCrZh3LNRbktHiNLKBravenjc6Kbw3wiho",
  "key15": "4QRrqZxwGm16ZoYGVtB7GTQNb3ZhWQwFMAkd54ppNrFVEHg5rk2vDb7TDxVWZZ6Nitjaoj76HMEnxsF65tCvg5Qn",
  "key16": "2Sc2vNU7959yu6dFQAJevVgn2Y9EPux9hVvPQHEDVfaVNUPzUP7Lpeuh4vgH43TYgRauzfreKUG2XNiEASbLMZMz",
  "key17": "3ZB9nbYrCrn2zQ9Yb6ixnUE8CQfCu1pFhZfoEq7AXEy1hSTTEkT6xKcfKmhWosMEejPawb7Fp7Pp4KwAWrqbSY6t",
  "key18": "8TtmjDA12kKGhuL4JrCToFsnDu5TqxNvJgNnbu1asquPyBAuahTF6P3zccvsAqm2Hqa85eBKT98nZs2RJQjHLQS",
  "key19": "2Mn9xwvzw3z9t5iGkgPeRfgRYA2iiCpEPv8cW7uBJF8fimhRALXmhMpkoRNcBx6jSkQgPtKmtPicsbFqgwTDzwSf",
  "key20": "46QefAoFWQpszxHDuxUcXAouGMgVqqmAcEE1CwVgJYJyDkwbno6Qw6wv1bsgvhj5ALJiRvMkAig8vyeee2FvSXtp",
  "key21": "3eGnZmUiFAuWs53amU7KuDKPYschd7ZGxUwj7b227bcyP8XAoW2ZxpdRqgghVyMigTuZhYtWiCEbDgBn9ERdK19g",
  "key22": "G3T4yaLjG668xKAPzKUAcVpQfFEDDgLhyEUbEETctH21UvrfnfsSNCwh2HhVxEB2RhgFoRXGUWtsdXvfJZrXA2o",
  "key23": "KQMi98B3itmFdTTCcQ8RijMK38yZ8R9xCfdx7k8SjZfHCJVtoGYFXTNLvNmG4DjxiNGF4ipQQ4Q4YUMzfva3BvQ",
  "key24": "2pscecr8cJSzpPchzNCosqbVh6hxLXvTs6HUkVwG9nfBqHX6CCvP1i23bEqqMN16g64gX9oEGcdcxSvyskVs6i4a"
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
