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
    "61Z7cUqf5KgXeYWV1osbmJJbEPcB1QR1Wr7eYsRY7GhueY33151ZXphHhQ7tVsg4N5ttCXyNJJZ2WQ4UGE64mD9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Yf1S5oGE4tAYGnFJuJKh3wsXqZA9ebKgciA7sKTq2ZLNmX8srA6g4uFqCxBhj2he1j1NdEacPNpPGJpdVYHyeC",
  "key1": "3XPjwu7vps5DFem8rtqBgruK8PooT48Lo7Xit8NdycnWzVqPKNCSDfBgC4Ga8qdZFWHsu8oVsordzxccCgFvkFuG",
  "key2": "3K8sJS2RnKpjMBpTtYhim6yuP2oVCXEPmp2WLh4YFsXjszKP4attyXAu3iA6jCZBhyCFC7EdfYs6BdHx7v81BsWJ",
  "key3": "3c7UfDZnxnKUPYV9ZXDNju1i9tN7QrUD9VQEjxzJ5bB8RtNRjtWb1zuFjR4Nov8j2LVA5HTSQdJ4hXFmnDWG5kFt",
  "key4": "5BybphsHs8zuj1Vti3N3cbdGPvXQ9s1wnjvNANtid36hx7Be3Di9o1fiXKdmkhhH6tjipNiUvHB6CZUwKVkFVxjJ",
  "key5": "3SAPaAhDEgzhWCp8ombjixGVFieCp9ZfubjFVrFEgbbVpdDYvNfrHHTC2xijTw7XqyfEm3pWepvjKirw5EBG9SUf",
  "key6": "5pZQCxxUUmaNvifxR5b8LdpitnLe44EyTwxc5PGdD6USe9hCSmQULpLUZ8YaxfNDBwxe8BeXPZhrZhyCEWZCdGfq",
  "key7": "FGzEy5YM45fPabchoxZ9C8qPkeckHaDbTx622ZNU6Urk1GxMHTTH7orinycsmzZcKUyAnkeZASQtBiTnWqw5VN7",
  "key8": "41hSkuCWMqMAVYdPvNGVpAzvQ8wqtwnyaim3svWabDxpfo76qz1ezTFBAWzD8j4r72cj3UJr8BdTWadfRcsxYKAK",
  "key9": "5GjAmRgg21wNGG5UoRyaabCRbLn4t6qenXyy3mcb8S7PBDMwGek4pxMfRVzauip9Yj3KfJBW1tXJH1eKhPaRdcR5",
  "key10": "26PG9Vjiq9E8Wf3yv5nQSFCsGMTw4bMcPCPswDdY76tGqp3oV122sEqgurtGd3otmrTnaKYL3v1L1KTDLGYRv3EF",
  "key11": "5X1MUeX6Bcn2rRTzRKNaVGkGA8hDHztTw686t8dBwbF4kMaiLK7hy8czNenDnefGYQDiuwqdDSKrnRzHtG7dvS3J",
  "key12": "ynxbJCitzWhpSLdN1e2dWjFkshvEApaHro7W4tVNYa1YFxPuHHSywob8Tb9iLSugfmNb8VfvjrpgdyFZ85apjiP",
  "key13": "2QVhjA6boRqUWydkTvEowEUcVRqCNQNhy3BKRUR2LwhSFTi6j1ZeepXHZrLo8d1531gwRsDWy2pH8tkLyxzUdB81",
  "key14": "7ztAZqMyntpBCfvVhT1yqbjySFzsJ8JDgwm4Dfgsifn2WaQPzrg9e46huPD8vFfCwiXqGitXmT7zyMy9UwvfT9J",
  "key15": "4WVHVG3sZAc3VrvAdLmoCjAcrDJUjSm4BZm8h9Qtrtp2Jtx6mf1xkMftEUDLLEjcXejPp4GKJ9orhkXDDaPi4C2",
  "key16": "3nuo9LWhSEXU2wpAmKH4XJeT1HAQQWHBm6YCtiQxQXapud9tnNeJxkNSRMEf4sFNnMUMQcouheaK4SKdMdK2r4ar",
  "key17": "3CoJciJatp4W4kfZAfSFQsfZUvZgrr4Rv9psxR8sD1Jeu7uaRu1tzde8czEeW1k8hzzN6vcU3HGpKS92J3ZbsefP",
  "key18": "5Gcd986fP3DuB91XMSVmy4YM9dX2VMpSmLpXwfYtScbhZA13CRsA8CzsgGkBRDDqXtpfhMqc7fhy55wCPaveDf7L",
  "key19": "2J7ZbUaEwPEyUNyYBntRKoaECeWZ8nQEMus5ec6s26UobFpbMgzvFcxiTAc4Vg62EWKSmos8i2mML5VKHE8y6CKW",
  "key20": "48SyjpFxCLukxV6pW4dNAGfXVESNQDrdK9e25oHuhnRZRWZ5njr2QYATcdh5uQR1RDqSxsXioCBfNa5SdAmLCmYV",
  "key21": "5mnbEEaAZ8bZfmWxAiMUSqt18a4HrBzPzBMTPtouLktgusTy9LrT5C7PZgdVFgqBsNnoqakjYDELTd2Va4gsLzNr",
  "key22": "5ZgAQwkRcE1BWjCrKVLJnnr5arY1SqoAZ5m3ADAJbtK4Z2oMgBiyhZBV2CcjqseSYSsKisocLoVZjmK1KZozjLxG",
  "key23": "rLKUpGmzLATuict1kzaqLmfDYkQ9ZShRy3iiLJevmpFumBXRHQiDRKwQi6nPTRJXfkYLMcCfTNE4vosgnyA7rR1",
  "key24": "5ntCkXqp2ViDK4XQN8u6Fn1kkrVyFXaAZyxLSCuPe9cEwXDkw6J45rXZyc5MSPYDXeSVSpvtgZwqNRgjwni4KkpN",
  "key25": "3u1wqVb42jo777Y1EVnM5YcM59GkLH82FsXoCAFJ17RMdb2FSvoQNVD2ydfPPvqiAChPJpwci9Zd1AZWcg3G36fM",
  "key26": "XqFj1yeM4JmWNrSCD3zDAmEPAM8SesV8TH4Y28q3sMXCN3ZJVXLhaMcAW2QDBkszDSXkj95kcaSDotVkEfgEe48",
  "key27": "3vSNjCVQXvU8hhrQdWmrxsHwH8i7A2R1oqz76HE5k6Jz4RBBDeVZ2dX3Nq54D9obqFevMzQaUJnXmZ7R9PpN5j7h",
  "key28": "2oJwGEmmbicHRpdoQQ8iFG4QXQSSnjbqwh5sNJ8T8xKCXuc1c5jfc2LQUV4MA9XgKSUavPgPBRxrSB2o4ufAJ6hc",
  "key29": "41Df1gj7bGGAY4pHwDSK2iDCWgyDUb3q8pauqVF5VLS59tvJVTBjP4SYtPtGEyW1mgDKfyFtJkNqURmQtK7B4d7K"
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
