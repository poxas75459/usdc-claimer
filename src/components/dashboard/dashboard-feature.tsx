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
    "4J2MD2Cn5SBZ72hFKWFv73nyJ6VQVVhQxNmjQ1ywjsud6BZA7LazrUZ7RgjbiiA7fiCsUjfxaJ4aXfioJiLGF2Ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JTGGRkxWajd7yAtmQDcHCWY6HWuL3TcDUEEeFC4xL6BfFJ2yf9ryj9mRtJVhF14mYRfJfBvGWfFVqZSMvmBF8NU",
  "key1": "42JF1V9rndSD8b7fig8882CiaKCvUPsnbvFDBYUNozqn1U7cj5nsddh5USQiNZVCpLX3UGJKezizQN1bFsdPQU9i",
  "key2": "3vuwmVkVa2r9vFCze8P9Xt54E44jnCmAaQyc8uUfqveeJ1tvkeVQo325DHfBGa3UAA7VYinepJyQf1xPsxPCPw5U",
  "key3": "ddVa21ASpQRoJUybNtM6N5z5DhzewMkhpLpGxZduK6S35Fx58UE1kFPhidcY9yDYWnaGj1mKNYMo36b196kSKaJ",
  "key4": "3tL1FzAEfAojQKaA5hQpsnJhPFU1q6uysnoQrC8UDYTVG3fTWFn3vUm9DggjpomC5RTno7ZWUa2Mr2Par7cA2Dre",
  "key5": "ctecZUtaSb2KbxqP9BPh2JPq43JjZVcd7PoNZ6DiD1Z5JtWF7gvTh7BQSaqxRH46oB5UTPFBfdiRJTUwecAX892",
  "key6": "VSe6bgfuar4jq6q3UVWHJqzMysdGquYsgDmxtXi8oZJCxbLuR79xTw78R1ED4xvFcQ1tjB8gF4SEdPScjz2zY8D",
  "key7": "5ER2ybVAhQx79WwJL5vGqC3g5yNtv4D3HjTLfGPr3khBkxDoRGNPThcaQYugwVXcW5h3iQz9Ros8YRXdxCiXj9nz",
  "key8": "2TtRnNZkaYnw7fyJagQ9DEEkQVJyDU9oGc1ACL4Fkyg7GUk9B7PZ8wbZXAxAFRfNhLrPir1cfDB6s4Sdn4VSqK5j",
  "key9": "XaEcP9ChcrZRKPCGV9jB4bNhibRkdMiwgq2MaakNSEQfnirPjjS77Sy17ZasahaEWANxynwnzxtYD1uZ6YHM2Zg",
  "key10": "3dD5K68Y1KXwVcbLAe7qTeWGWvgPC1pLb68YeZxzUM5RnL1dSkskxahujLhQhPsg5YKWFytE6nmi4hKxd2w7Pm5C",
  "key11": "nqjfHHspUcMgGU4ehEJ4fDqmvNHyyvwiZHv7XiarawtRtFagEMLZtLedJyd8ADP3FthjcCRvpFXwuGn93FiK65V",
  "key12": "33Z4k47PCSAVAGQMcwbpDQcgX9A7A1Woixoxyy6LgtRtWuB7kR84jjV2CzADweeJKuD58btjvHSqpsqAczu2Wqzy",
  "key13": "EuXcsQxSRJucGvFxq7hNZuwpPVc7qqoLeSd1k1TfLQv3sZUBAAo3ECakxoVofJTqvyJRfHqLHJvQvFbKontacuL",
  "key14": "33sPHEswsdNGWtZY21dPxvpVHiadpNrnWRzTJgiKQiPJ5zsD27ZsmT7KvmW5hjtv4c7FwEk8sZAqShs8SZNy8pFt",
  "key15": "3qB2mHhgWgLcLCy6eGKkkFgMiqP7VAKWPcvtLZjAjttbMqewXFUc3cQibf6scjbjCgPgyH2tGeWzKXPuq8ETL5cn",
  "key16": "5s6tJy13CWBV3JEafWgjYgurU1rnkEETSkMWaiivErTZDgkTB4AQj6i3CbNTFBRb2L27rBUBoX9WEVNfiEBmRn5i",
  "key17": "51cgNuzbgkb7d21Wg37zkH7KQ9B6dpoYcdQXKUppG5T3JQoYXn5BZtgeSkdm9SY8VMrJRVrEe1rMRCp5P17f7iAn",
  "key18": "JpVUebASLA3UmHHXAqRtxENQLUR5ZKf6ZcLcWxg6bAF3sPsFSi9oKRCFU9DdEo7pKGKeCAs8xYarrdYT8miXcWt",
  "key19": "23m4ApHXBtYJnH1oJA7KS816dNX1JDc5QXeV9DhkoEM6XuSjtJ8ChxmpAS6j3bY557QCYZGnc2zA9QagW8oSnWNT",
  "key20": "5WghWmU7B2ciGPtEZHBut3mjL1g8q3zLYmtfQ7ki3WjdcA95v31mUqQ18uDySt21TNsdzDAuMevx5EM1uQKSVTsK",
  "key21": "GiyeAT6mehNBx6vAytMCWBPzncKSVAwBW891C4SbrvSb6qPg2tktXFHZ48QMKmpvNaahcFp1j1e6KqTyP3pfuZ1",
  "key22": "2qMu4ti4s8trPuMowqhLxLfUgNjiefZs5D86i5CzC42nxB9NzyoK9RYnpWMEibxjmtZEUbR2qzu17Gf1GhBEAXZt",
  "key23": "5826YrjaMrWxMEhtsuEXU5ytE5uLXgWT1YhzYPP1YYty2Q8Q59xHU3VxwhxEsR9tuCp6Yc1kBi1qzBtiTkjXU7u7",
  "key24": "4S1BHoC2EAKoxVa1m4AJ5ExJ9tNAszTiZFqAHX9TAKqhRumF1bSWLHikLueKx2tJF4NBbJ3HoxESx2CJ8cCbaari",
  "key25": "2m3o5v6dLdY8kZ19M1t6fmaxDmoFKi1rmAUaX1Q23GAn7mxmuYx6t4bjcv24XSh5sERWjfLvEeUqt9wL84dheLDi",
  "key26": "3Vy2MsV5sHGKykNfNyngFSkoNFgHWKkc4MWvXsUdjn8sg3mHsspkygyHw4uXmCF1YZiZ1zkj9JVXwdo3BjAYjZtd",
  "key27": "2qtDofp7NHr5qsMYr5Eb67s6doBpagCHWrrphYvzCzkp5JWycfwqn33scfdnj1Z7WAmrzXBeqHimNvkRzHmQMixh",
  "key28": "5F9NsVCT5SFgCQ4HamJQUn5DNXXXKnNn3tY3db1G1HHGECya3SkE71akSM2ZR156b55qG8tvR62tZChPpGHs4Vqr",
  "key29": "4Wzx61kTpLU8rvCDxwdoN4okz8jSR1AAsXemZWZfAtuyxiD4a12mjWcnuCYgkkf4R4rcz5H9829dgVDr1wLsi8Si",
  "key30": "4SeawhuZwRHhWgKzRRu2fs8qaEyU9saQUyfYWiZdCA9uESKEzBnWVc8UFS8adsEE9xQXdQM7ncfXuvFfEnStr6qT",
  "key31": "5GkWiBNC7yAGYqT5nCT4NR7izpdh7dwc22sqJU1x43rRXGXrBV3Ue2R3ZCfVksrenb3Rbt99sgWuRy5PMeWN2Fis",
  "key32": "5NiSEdtkiaxMP61vnLvDV7hfEve8koPkPdPEKJ1Rbuydg9j8emi33cGgHMZzeWeVpuKC69mv8rNyrJUzPtdxsPwf",
  "key33": "31NeFZnYtt7LYqccdGkpZzbxG8RdQ6mWM4CkUcq5GX8ZaU6TPFejn5eJnPcKkjLfmiXmxf82pKqCnwgBTRdVGuUC",
  "key34": "dPYx1VR7QX1UqpoFteiLES3CD4yaNFwZ4kG87PhdE8MnRME9Rq6ktP386GrgZegubFRAwWhCD8NrqkzKsRdPKgd",
  "key35": "3w3fH52z8CYBymXPjWNjCT3hVqnsVV2g6Aa8JCbywL2wV3PdHn58wqa9Whp1E2Qhek9MPPGHp6AVbVeT6hJ6yDJG"
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
