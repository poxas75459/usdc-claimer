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
    "5UHhPhsK1tMkV6hxXbC22TaRz9VAXjJPRzr3TdMNU9SCni8CZKn2jZh2yqWWyMbY1in8f771HCfFAJ3Tmp358hrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oiMe1nV1cVpLPKxo4CPubMjy5rvbqUcJbWffyLVSirzm2A2bi5AtSGhK9tjdq4QNx1QLfhSRrqndXJfBxhXkqs",
  "key1": "29aviCeJiJCiJvZWsHihySVdZaNog3izHk3t3CuBTGj26tMYavcMuQTKaWD2B71wXHADoahh3tjcRwjKDzGgAS6x",
  "key2": "3SFThrRvg7yHVSguketqFa34en7tuNmnbGwikeLqW9g8QQoXgS9nCMjQsFanTip2CTjsmFts91UxaqUETHszuXx2",
  "key3": "3umZET73wbWVzxaL2Uvkbmkm3efQrcjhFnshJtKszYhsiLLQgfR2HFUHkrXWRw4uAosnsNSdLLQpJjQXrmG2sCre",
  "key4": "2xxZEDZPt82ttaKSQjWAo6iPsR8nLxKbhJAMZy7RBDNpFUdvBGtpZV5xcWuh96UNVJYZaEUh5BSgVYHscD9vecjR",
  "key5": "5KGTZbrjuCx5pT4ZoVjM6xSKhZrqi24RdhxAucsTo6QBiNAVeGoZwdCoRXk8fPCMtjfBgdSkMdZ7zWteMaSX5pqX",
  "key6": "5H2qVfVi3ZB5fcXWSSTffz2V7zvsyhShtqk7jj3cXKdq9xVXFXfwvDrnAeGTV2kPMjAoo4YjXoeSX1APB7wf4aMh",
  "key7": "3pSD1PuVt1UMRpw9KPwDFJUJkqqEBKdJEpK7otQgT7CHmMEY3S3Pfowe4nnhe6MhuVsqbm6LgrzSnawBcjYgRy3X",
  "key8": "4VSoZPV9KiyvN7WeSabQXqc68didaH4MoetYKXg6Zbqfr49YwhjUJdEFuqAhasSH6P6v7TKjXxDPPYJLg1tVh45s",
  "key9": "5M6JsMLtmENBuRtHq5M2uk78sTRuruiAnyCFkkHsZJx54puwTEhdjaxYYQ5r1BTXHBmPGkUvKLxAgbxh6eNnktS",
  "key10": "5puq3mBnhY7Xchd5UezSDhzXNb6tz7hyYa7xBafDz2QKJA7wf1XCsjzBdugTNm5w4XFkK6pgepDb35Rp74JwRySi",
  "key11": "5W4DZa7YCu3xVGbUFWLEnhGCQAF875mEHRY6WhrJAdXqW1ZmpvsG1dWEH1Ws8KrFhySzmvbW564KXSdPs9g22rEv",
  "key12": "5t5AYQPkiJrd6gY1DYGyR3bpk7mey1AMWFshm1zhuioTyHCE7NebC7f8eCjoJRyRtnBF2jNFggzYqvNUEceqTNz3",
  "key13": "29ugaBpwWivH6kCLPLXeB7S3pRMnyDiQRRR9b9P24UAy6nVQLx4FRgHQahQc8N8vkZX72EzpZRGERkDSu8Fdc7DA",
  "key14": "XabVG2EGPLeHrRM5t78DSULchKuzU5HDm9rVPwR87CMyAjqdUsdandZ6y8HBJVGCj82ZMePgYLzvYYgKLPDkYMR",
  "key15": "57Utm7XrD1KK6f2s2dHFThcWs3Zkgjge3Q4EeNvvCwCVGyPHCpK6upsKgXx2DEMHTDMsnSfqap2yhoyjup7jLQju",
  "key16": "38Y41VS7cjrRZGkc2ej8FkYQHTAHoFi9KJWkHApDMUY7XukquEYYawb1Dudma83oW8XfhRt3Bkcna4CYUqaD8vKj",
  "key17": "4nUJxj6x1keeUAdhT1vpctzCqavgCWGspuXQp4Km6pvBNCWjV6uNMKMYDfvsfjt9WAiUE8XrJJSTybURpNXcWEks",
  "key18": "46ujfTPH6c4XVB3jCohuKSCYXdABbtxQcwPU87Cco8o1jtqX8uMZxgDfzKWtdE4z3nPZKLQQzMkPunS74qg1LPje",
  "key19": "36aXGtr1iYbxfdJmQ3ycUXsXDbqmmscFYutXzuQUpffcEmPeZYh1MUUZb8WpXjApTLqPsi3vPFBP5tXNT2DVoiFq",
  "key20": "21FPWABckKUTpxXXjvWdHfK7vi9iUydDZKx6iK2y57GiYteMhXFYPDAYG94LBJxvkDi3pjDj6aLAmfZHznDW1J4J",
  "key21": "FWwFQfSkGJ5iPYP7WjuZCgazmvMQiVJzGvvnGNVeG7cTVtcnxv4fqabXHA6JLxghVfxuEDGjg9SaY6gBa9SMYPJ",
  "key22": "5Gr4kMENrSHSKSLpBDHqW7YwfKad9wNrVCM75Sz5EtHvyrawA8HMx1EAJbrA4TvxMBvNCioe89DZaAeLP84XuJFz",
  "key23": "3x6n4WaUYuVdWmxUNmWxdWcZYwxidTznGgJK2jf2d7H9c4jaCBWgvicJTychPF25kKkSZp2eNStmi1g4T2DTLArN",
  "key24": "3MG5yxHSwbQ91KnbFRNuzy9oHJGrArCk37NWCrUsmbEbupGpdcrWvyoBb4fMChEyyDQDrgj93pqLrsKuTYPPuA8y",
  "key25": "55Z1R14U18RMqF48ZHQNArCQS4pquK9vqM9rsYkeABXvNkq5sYhjFzqCyFfXqvuw2LBipbJnLNFtXBBqXm8Kn7gf"
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
