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
    "5h9hDc1UGAy6HqGtUh2S5QKhEsqfnxu4WmZMGeH2mQwbk1NFQ4xSAzTtjQUEDuJtVRZw62wpJv2gH2FKsayTHB8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKbwrrLkLiyXKHm5kmBYQPKXbuKEozc8wMkL7K7H1LWLkuJBmw3s2xL2fqFYfXAQmrmRzxWhjnd7RhvMLxzR7sj",
  "key1": "2q9EsUub9wfYzTZsvWj8Xbs6ziuWM3C1ijgdtMAizysFFj7f3fSULZaoC6wJHk88X28ksTxa8xeGq7JuSLaNAbPq",
  "key2": "5XqPAgN99rQCzM7C9pXCFFJDVbenreAwCmqifw3CkJdJp6aJ6LnHBcv8yGVg4YzFMT14SZF8xeGiuzC6qcgheVqi",
  "key3": "4gj3Zz1BRzfn2LiFfGSdRznjoyiEbWhUL9QkKVZ4Mej5DJH8fUQRkSo9ax1PmnhneSmdqWxbQ8z6GwjNRMEEHzni",
  "key4": "WMdHAfnsabAqvx3rzUy7jX938VbsTpJ3WxkxQncCCMdprCDCFWrbdrEv946MVuPubKGbZ1EwvCwBBs41rdAJr5L",
  "key5": "4M8qbuRQzmzwJzHVL9i1jrxTKpHcoBoWqCFhzxWyEgQBwShKVsZtAdjhEv7rQsTaPKm7JYwUG9etnYnwvyzV9opK",
  "key6": "5fmNL3cot4cktq4sKHjzSBiv2MC7vdsBjq7mZrHjmWv3uiJXx73puxmmPtFPg4tMNfeA5B2fnzovaSgLFLjQTzGh",
  "key7": "3ZEXHGFMNfv39eTRNhJiF2ej9LP58DMedqdsr5GHrUMR8mpzf4yYVBucrCLQgFYetYFnsDHeazqzXhQXGF19XFxc",
  "key8": "oDLfG8kUqzU4ze62UgLTRux1vTftpx8wjjbWgahVr4Y6nV3p4DVHZz4c6tu63tQQ82UCM4BwGeV6LyKKmBS5xqT",
  "key9": "5bEQTsN1UgBu43UNRTM1YmqBFPWkLwTMoTXGdKFXMsDxNXn2pDceWvLSSRiDzXKruQQQDFeu1uac2rp4uiYqqH4S",
  "key10": "BJ96cDHvsaJE7yCdzsuxiAhm4nS1zsNnM4XvhxJ2JDV37foCYaFzSRA6NKK5r3ra6hmj2zr29JZquJJzXtVv9Nu",
  "key11": "2a6RNimW16BvnC9Ah5Acsu5qxX682h2DS7jigTtgtgiPCH1pTyLXgTQ4XkRSoCybCgbek2cjaDv7bEDXBRzhW7GD",
  "key12": "3c53kowtGZ2ZAW511NP6jviuxcdUjMQVFjDqG91j5rFK51wxGtVyvkW1ZR9G7aVUfXLqyZw6WnFg7wTm8u3rdtie",
  "key13": "5iPdY65RpZTMwFUM4pTeAgPYJAWKo9mw51wX34jLJaXiPfLYP3hfdPUG16XuHWFyQXg5pDzD8TTE5HATpLiMR1Kj",
  "key14": "5HCfaoyi2HDEKMQYM4gceyZ9BSa22nuMS2eX5kDhgbv6TSvvUpVjCgLb42ojrEGpNqiJpZkKngnPk3hLp4wfScg9",
  "key15": "ABvHLzp7TjJKVNVCWniL5Wx7m2XHdQa5WHwcvQoMRDVUiun3wSRXmhPVa1jKrw6LgW5PqJ7MyTihTD28mz9TReN",
  "key16": "2AYmtLXC7LCr3KhH1rZzSAU7TkwMoKNo3a3gZunxcMhnd9FrYf4SffaBixCnMMorYyU2U9BT3tFwiXRVgm5LN1og",
  "key17": "5DoXUMKx3jLpqzMhtyB5BBH3HguoYwRSWvgxevEJgE4Pr3Xnm7VLLeFzed8mm13vcnKtXZ9ADarFMiCbtCUjCnW",
  "key18": "2rC82iq9sDJsKUy2QsXtbt4qegydCikPjEG4Ha9wK8hjvciYwynLC2tT7JJpxrXEDYViawF2wBfUcivovJpywvvm",
  "key19": "5tV8P4g3wyMhMCje61N9cnC4SfhFc9cejurTdZFU5DsWAE11kBaqPukoG2Ks1hWQTxs1QrpsXzHdGoqHGLifoBJh",
  "key20": "jM3ZhJfxWrzczmcK3pUDNwfQNRtcqFMKoyWfjTdpJw1Vj3JUp3n9uDTo4rSRTGBy3VXus9Nynrnhm3X2vLyVko4",
  "key21": "4qRpV2fDKxdroRhWr8dCTqFoX8ZsBaULaXKjzcg8su4tsDysqb82ozaZRemn3fd1XtbgSa5oysBgNTk2vRZaupUJ",
  "key22": "3J5k7KPJNf7tBUdatK7hPAcSkKbKeppFbAyde1vs4Y4PPp41AzXES2xDcPNmBBouVb2GRczXSp3Y1gcNnogFoEsg",
  "key23": "5P6cw2nJxgESHyKvARc9AtQj3PmReToSivX716u21MRyMPmNi7wWUNUdDyHQgkgtGrU1HtC3h7Fhgtwui7zpHpVh",
  "key24": "4kifPh3JG4zJqgdMoLu5AGgPteEAH3Utj1tAdcT51QWsMGL1z32yWw16PdAi1yJ7pevLHtqiEhgYnj4dXZgKHNK4",
  "key25": "4pLJLeKYYVSeLhBf7pPwGLK7GnCfWMhqn4Ap4UE3GbszkGRCq3Zs7Wb9MhKnH6gXkHkekvn2v2oAVBopep8hTnyE",
  "key26": "2XDBgymDDZGUtkgLbeG3hUmtcm3JtXh7JHxTx8Z3CiQkXBDL5GuzDogX2WUYareRZAVwLAbkM6qdqh56cvG92Jei",
  "key27": "4vuU1r13eRdr5MuHV4cobhBjweVs485oPsYN8KGWV7osR538FBH2u7EwL4pVq7qU3waM3x53mXd2RhistzxhP927",
  "key28": "3DGQJdJXGV2EWULXNZXznAzGyu6jvnVqbShxc1y1qsinLf58vPwZmy6YCwFHL5StihRi6tfdf6hXnpqGQxiR6ZYp",
  "key29": "2o5ZPsHULQa6XjJHJLTz3gkGWs4PH6nQQFeYyq7h53Xsynn8CW4kicvBqQ8TAJTAHMfJnMTo4Bw1ep6pao1zwmxP",
  "key30": "3VvH5tsvtSoDFxhAtHnXESm99oZNjd2Y8s9TLTXWxEqYe1PsE612qe2daEEkQg8i8RwTKQ3md8TrR4oTC4TTFFKc"
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
