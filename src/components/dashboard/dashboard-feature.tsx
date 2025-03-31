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
    "MPcUKhYMCHy8A2z2xtYhrvQ6SFxgtWYMsG7jfQfkJQiXiWYKVPfMcMBfscYYXApska5dYvaYsT1BnFbNZtcUMaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrCskndL5HsoA8jMLsmUe8WjvDF7eEhQgUXT6TMrYo4qjz9NmaAbMcQr31gR67xXKpt1LXt7DKEZNj9GffnRjdk",
  "key1": "EhyHv9jv2iiZwGqE7aawt9VMeviRyPdMnSvtzXicGbfKvojErjXAmAxoM8uTJcbigikRVHncpG54raJbWoFvyYZ",
  "key2": "2sDfb8JEZegxzzBFCWHEYd4qTkGi4XocBGjPoiQErRCPKFM1Dwi9GQSejxjfUKzbnsaZHT4nZnGNWEhnky27LECf",
  "key3": "61iAwXeatnDvX5NZyGCn1DDWugYZTBxQ4sdDUQaetXiRaboxvuSjKMmQUrQrb1eQUmM8BTohduYZs4KUsqqDwn3R",
  "key4": "4UvNvR2Ac2QauXSwvhBce4jwt8bVrYaCPv5Mk67CueDpPDPEcebSANuMikUTUMEkWtBdF5K14U5aQYPNmveBoZnU",
  "key5": "2pKMfnAZaF3iDqYX8kMyhYr58z2gTZWPc11HgaEPPJJqGgfLe5Roi7VWZKZk6zf9vVeENYhZm5JvfAZe1Gy5MmJU",
  "key6": "3uJzZ2FpspXXs3nass93LCsRmff896BNVQpUuerwuU5MoauCNr3BM1kKibe6y8Xfe9AwHXWUdZHj5TMCQCyBDrds",
  "key7": "5v9nB4BgFss4b2YwWeeGaKpr2UAkYVbZb6RSmSomuJBRfDaEsqdxXYJ1yuWPSGhZtmHABTAyijddjsBzZynNtAA4",
  "key8": "AG36imWgYkDAmWqvkB5fsoXdsvhnxzh7PFinkVKdNThWJKKsnMKeh4qVWNwrhgAQqVPnJyotdBHoBTyx8A2oeM1",
  "key9": "36zAShzitCXdDDw3eWVwH18VBxQKsYLuj3T9ucXSrnZABYQCSKCcAcpA2XwPMkT1pqTtmpNJE3nPNDjCQXeG3XGa",
  "key10": "3FsSLwnN7U4M594DqZ3rE5GH1EtiZmn8ujLeJCzMJRmXv3K7W2c2s8rJmk2nEnskvhZ2YzXzLGApHUCEGchEFyzK",
  "key11": "2NnNi1mgBtfzHQ4AktNX7uB7Vc3DxZyMihzcHJ3pUxtvAw9wZUF12AZA5GCe4i7pPbE1XFBVwrJXC6BASm8DxthX",
  "key12": "2ziHL8d1zKVe9zmF6nzJuCUPYuBYK1HtpzGoneZZqS9UaNtcWp6Cv8sXNGJCG7n8SeDURoYXn84JG86n3dpGHCew",
  "key13": "28V7i7hA4SHpbW41iNR2gyLGWACBvuREY5WPm8cAeemDYAsiHccjkwTTfFPfxDhkUF9rphu3NEz9MRRXpczSN4C1",
  "key14": "4vg3hXNzF2F9njGGDxQ8SkLX2wPa4bQs2zbSnxZmdaCPYt6vsmToNkc9HsJcjFj9bFi1HGjVHRy5kQcR51eAVGQH",
  "key15": "3gVM7pdd1SH7RbCWH4fMJnPZLCz4Kw5NKo5HsCCfEzZfZgndNpz8hqDWY5pZdjrsg7r5hdyrL82xz8otfEovjhop",
  "key16": "miLy2nseDnx5xAFMAQfvYXhZ2VvwCqDd9ornEjVQUFYmBikWCV65Gv74LQXpmJJ4f1rPe5TUuNKMRCKCeR8mAJL",
  "key17": "5eHqdKiDqsvSihFDwANeevDA25YVnmKmezwqAkirCUhKNHFAoo3oiLYhDbgpbmRj7wwc3xv3xNv64j1paoHSpWBX",
  "key18": "SAR5oEzUFkW1M1gZqkUaSCizfNrr3z21rYM458MXgmz21xwgxSRvspy4YufyzQ5bxo79jfpRhZXAq27RZKhFnqk",
  "key19": "67hFjEEBAoprKmaHJpD77SYwDHRiNau9RpsNDj3RpxeNeRvccyiPb1yRp3hzKF2Y3ePeF6WDYDtMQa2f3Pwvf11v",
  "key20": "3CufpBYDk8bJ3nMyZ2cG3WsXytvvrLZsWxLQhZYWSBThMLQrh9BmQNmAEy2eJWYYSz7Xgh1jrTgGYpvbKhBJFrfd",
  "key21": "4gzsPYCs1HZn7CQbvgdATFrL6RLEYNHMuDDJksRioa42b7uixPZmzrFKYAiwvpfNNMmBPCPrAarzGJ1SgTUELcoM",
  "key22": "x6w818YQQ7bUG9DUMmXY7dJxqcE25RSGF45uUJe6eWkhkj11xv9q6NBZzw42Q33BuuSULTj318jrBzT3TRBYsbT",
  "key23": "5WjMZLJ8HadMsxKn8XCrohXzth4WCfKDZ3DuKHUu93DGARCnccaFxdh7g3RdhmQ6E83UED12KywA3DPmjWpYSAdx",
  "key24": "4LdWZtXHtTrCiWa8noyDbJskpXmZbH1dyfmduUEfPHuCiQnbwCe2ckQayDa55HgPa46v9RrFFALcrDvHviEBNobw",
  "key25": "48ptdao9Dhb4cVWrzwmHYqj7Kaa4Tib3wTaDNGCcStgBPPPEyMRXuo5EfWdK4xTq4twqdCHVQyoxoQ3kwmU7DKk",
  "key26": "4zR3fDqGtUoT3cYTTvM5YeFBYmgeZ5XpqUzPD9KDxoeap6bixtEeZ3od7MpsYSg2mazVoLYmhPJRKAeBmBovTTEt",
  "key27": "2v8jbGtR6ag9SDFuUc42z1QAk1WeEoCfQE3rDNqnazvf5u9BM4aZjhX7s2eJpsXrfmZjGmTKfbT56vipJHK5v8SH"
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
