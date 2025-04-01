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
    "JtknCc1EemdiCzvwCqfvzSS9fVgb2bv83fiPk6QqpVGpMPdBtSgy1Z9r5jYNU2zp7Spp8YxrAfLvEZ7oBjbQt2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HZUwN1DzRKSDioTWou2FQNSwq3RfB5eaKoHFybRJQsYUTYKf9JVpmaUDpXQ9Vis7tCmYbojaJfWTrHXTdc2xxi",
  "key1": "4RPpSwVFeREeZ9kMdczNWwseNVoLubDKF2rfUCRsk1Piqes969JbumwasPiUW4a3M92uEu1fHrT27usYn2HtoEtp",
  "key2": "4VKCJ86WwKFrcEvwQck3sqXMLLhQWHDryNbrswppR1AL4kUEH3mnK6SkKEZqpmzUMCaCXr6GrkkmitTggccAz925",
  "key3": "4niBpn8Y79wYcaUEbHRkJ6vCbX99hGw1BhQWWnJts7so2k7jGVx97JjFj1s9CuZxcg89FUawoT2zLnm4euVBzvxL",
  "key4": "3CQXU8M4aFZyQF8EfnjdWLdg8vR8koNN1wwoW1euYqzX923p88p4JG5F1xU8U25uXpjErsZ3JQBE1mJR8JqTR5zu",
  "key5": "29LnBD9ikJqpGqip7TVNn3m1YRSTTGaYkXyvyNn1UEtkAw9MgiyMGWbK5rmRzGLgoiE586i38DW1k3kAggaXZns8",
  "key6": "3UpkDs2Hu6BQzmAxuCAe2emDQt6ZgzXVoHEQNDHeqn9FNYUy6PNJ8oRKCfzdq8bytwJDaM65sbXQqZgaerMiJLdJ",
  "key7": "3ruP7A9CzuNBaRu7HKnNeTBf2PqR3pxiEMg96kjoScwnFqs8aELJsE1DKkmsnBAiXJPz9HDfjtjeZMC5KQBpuTpD",
  "key8": "5BMduLFozG6Kn6xDpTgUKSpprfQhco5GuFmywJGsPvzi5X5NERpcHxBoQuv4ckBbiwWTgWWXsaagLsxSwUkprmVA",
  "key9": "4oJxp9ynhDxBfA3ZUwFGfCZY14PjcQSrCZ1Jux7fFUZyD4x3ijgtue7rCQCh9kkhgtSxKWELvetPZj2CEP5uxQrx",
  "key10": "2dxCY6L9Nd65i1KgpZfNXf1L4CPhc15Spt5M15ZJYv37CGAjvqUnhRcQroLnUMmjg1HWMWgnNxJsdrGhPJGjfpak",
  "key11": "3T4HDo74o13xt9FqPPrNa5rEHKPQiQd4xEXRHHNPDwupZWhATiZeGAripiXJ14RBDdmcnEP8kCnQQbiR4qMvzVQF",
  "key12": "qYgoWyXLYKYqFfTti7xy7YfXhY8YxUdPnN32ht3A8NF1CVWJYSZrREJCNReuMRDhbsBBjw7R52d5MQhKBiHnZaE",
  "key13": "3qAcFqcaA62qUWc23kgMwrwEueHdMtJuJ8WNhVnq9MX6r9TnwDbTRfDN6knHtD1bwZRbevWarHF3QZASYzzMuXKX",
  "key14": "37qfF5dhthNVtS4UKBqpZH33JbV2zF9JcUUEKXzrTKEAVnt5FxjXEmeDPd92khx71gWHcjYyf4zEJR9xF5uk1nUa",
  "key15": "4xyqxtxrfrVR566vwzjzbcMfQ55pKGb9sbS6jj9eL79mVQ6WQ2NtZSMb8iSLdUUeeBGBHbqXxTHGRzXiHL8gQHEk",
  "key16": "3hfEU1EtQBM4HHpPsVJBv2eaNvpf6P395jjYokqhic8r9KLLGshLUWbEyWGwK1g7VftWTxXKV29dUKf29EozwWWZ",
  "key17": "2Ff5jb1mq6S4sU9bMC3mVcC6q3UhLbHdsgK9Qnndz9HEE9fNnZvunZaj1diGSUpyxYxPwzonvedNNPkys31oaoEe",
  "key18": "32P4obFN2dbXBhpGTpDrPNMT6gFkEL3vYmPA1d37zj5gkpGHJqHB5wLzckwJRGX5fcTaHKJzU1ir5Bz5murEsEZ3",
  "key19": "2yut5Z38qWMDnGkqFagNHyd6X3zwQKeHxBiTEUi4JHHrEoZNKPYYYLRZd1QJ43vXgNy8HBVXvTZTDHjpKw3jF11c",
  "key20": "5vaEUeSubLRNWukEyzofJehueXX9vnGTzzgVxYUfiHYyDy8jisc7kMyyUYMieZrs5YNVSTxniQMMp2R16ruqwLip",
  "key21": "5NFyAXUktqxWeRSEhRKPJyGbo4PksgGSrG2xBLtR11wyMFHvhKe9eCigdZzgsvGJH5sgnPsqjbCHBifhWdK5dEMV",
  "key22": "321wCZHkhdXcWFdSt9cZxwqec419nCFgZc73YKeiZ5KRYDtvUdGcnVkWZNKhuY4cpn9bnnyHqQRB8sMK8fxKDkrE",
  "key23": "5cvTsAzSR14A7Tcgq12rqQa6eoVCDfkRKDwppK41eRrpjAegmcD2769mNHcfArYwXgQHPB5nXxZWd4GCWFBixUTw",
  "key24": "2ftAWHuYdUb2avfNBeJenAy1JuF8ukqzrKqotxMVWgbBKD7wnzZ2FARgRwWs5AhsAiftSmpVaM7baovu79q7MxkZ",
  "key25": "ZnES5taMxLpMjp1LzR2ykk7PChUC7nHFTaZPnonefjpshzubZmCVweQynegQMfKsW26a72VxkbaiLrijtigcdRL",
  "key26": "5dkujBHQ1kyE2bC59j7HECfH1s7tGxduGtns5ZMFczeeUccvLzbyPPmC1YApjziisnHnppSurp6aMMbMR4dktCgx",
  "key27": "AqyZnK1Ld59D1cD4ZLijud6jfFJz8GqMQhrtzSqgNvRqzLL1E39LL3JkaEBcGPnPdzohgqPHXgLuLZBzf3W979Q",
  "key28": "3ftiionuDBDyiUv4L2DZwtbE4jyGCjadXEovRh4x3FWgo5zsjov1jSQKNNHdgqM5PJSncXXzK6KCv17mZokyegkq",
  "key29": "D9fcT5FsNtp5en3cEaAGxMs2PNET9eSsr54j4JhfXDEmNo4bx348aPxtg9mUx8aVwfGuVgZ4pp75Sqd1iyMpCNW",
  "key30": "vQXW3GsPqUBgEh46odxa4Y6FMbeMnbyndAXhyDexTsYj23Wco3F2WuA4PgbsXM2LfkQWZc3w2Hw5W7XfJeoDfQz",
  "key31": "4opuEmvRUc7DYZtZEZPu3JPpJ8d1AJQ4u6A7j9SzNzR6rvrXhvkZJYVYXhaaARW4Ysmh7w3QrBeRZafaaJVcquNw",
  "key32": "qKE98eWr2PiEwSw7J2n3uFYB2Et1ytY7siz8eyoDpXq9Le8PUv5MXoPoHuCwUEjxMsj7cqNnWFmHXsam3qJRuV1",
  "key33": "mxEUtofRPnbzombAwZqvQqPFFiEhBqJNai4BofZMYCaGn9kgNUNHC2xYcPjyKdmURrBGeH3QyeDffqzKM4j3tfq",
  "key34": "qeEAZSmScB3HTD2uPk8PftKLtXRvvZ81xR2Ee2kbPzzKhPFGBufVEUGH5Wj87CS5thAWraVCsNJ9rLE3ktgN7mH",
  "key35": "2T1YWorp2SWLVmvm8V8w87kg3scXsQUegTC36tRm2dXGEGC22YwuJmwZ5vnXRgfkcwZqYYGM9aSHSjkhSaM7wmeB"
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
