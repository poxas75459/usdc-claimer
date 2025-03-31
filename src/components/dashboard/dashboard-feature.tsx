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
    "5mCKGWpMiCbrwsqxNQYAxcJ17uB3YqwQ9oTSUmSHZuLHyR8QuEQN78CE98MMdcafA7UhXHcfLUaEUxa21yzypYDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpE7hAQaNV9qbzfHpLGPHKcJeeyWJeXbELseL7C6wR7G1nwq3DkLgszEaomiMReKZM7NhhKGaT8Ti9FJAXr8JYb",
  "key1": "6CJnFAADtSqpmr3g3sVkLbPn52o12K8wdMeBfGwaXhqo1a5bi8CvwRhZyhYZ3Vs17HjZNoh8YuwrSYAT6EUZn2Z",
  "key2": "2MbRChoUacX3JoeduJLRjCeA9KeB5chkXct9ADZvjLE3YaEXgKha7Gf9qsaKzycVmV3UjD9StAntfCF7apEZEJBc",
  "key3": "4Rc8PvMiE5kc2wVzudywLF2KfQVyG2U86ExA1e7jgQgucAGu31okwbwYCLTLVXixoku2h1hfykueMUzfo4uoM1WP",
  "key4": "5ohwX1pzaZPrLpdBCK3T43pFRcHTzKthKLxZgprRAYvD6p6vCs2H9vadxMu1NfUiEbMhGE6Y5578LCsg9T8CcM8E",
  "key5": "SctVcLc9fEG63Lc42Po11LSGZZDjkmdtBDNVHA2y5EfbnNeYQZ2zyRVFMm9SSHqUiK2ax4UBq475J1q9Bz347PL",
  "key6": "2w1Z9FssxyvTfUcnzm8XZWDaqQsXZq2VaUuAjHmaYSdkV4q6PYipsMWZwQAcivXjhukyy3fZ848oD8ob1qSnBHMD",
  "key7": "hpaqEZvVz6AqAJftWqmv1ZJes9PfZAsjCoiiMbg11ULWuNnHWtetmGa7tZpejnS8k9b56vnKqQpMLq6dpcbqfVw",
  "key8": "3tu4wmP5bmhkNnA2HwDSg5xwE6vvuCpfb8thKdS94LmyUnuen7uxPoqpiFbhzmE2EXLkPoS3n3JPmPNWsPH8p3e8",
  "key9": "4jziudjKg2rEp38tZkeMwEeimejrHXpjnv9kkYJ6RkJE6wchHz9tWKnaHCvFTegJ3DqRBmY3xByiZP1vdaYU4EJX",
  "key10": "4VMhZL1AYDxjMrTFCMFGcz4GwFRHnX1j5QcfKJwrwA8vQASnjEyLe9L8F3UyBnSvrjNKrCGK7sTJaeJmrXwBpLbd",
  "key11": "QT2jsS9vmt2oxiZKuPVZy8NPXyJCAwd1F5xvbmRA7xnThxsj5DCQx4o7o6HnwbSVwWcMMxo8XYp8Ha5Xdhzffjs",
  "key12": "2nWp2HZyRQcN1ckWqWw6LaKAsGXoeZWX3fLqXBfku1QQv9Gm2HyLUoAGBaCneUXHcRUNR4kSMfMpXSgQHG8nVzMT",
  "key13": "66rYTRGNwydxwheCj3nWYpQcJUzgrcsdr3Mma3cNhknnNFqEtSbAp55PvFchyzQ1kir3bPTMEdb9KRJM1Eejc4fi",
  "key14": "5ePF8vEwERT6UwCoFiqpcDjcqqYpXZY5nDihHz1MJdbNgazdaQjF5AwRjcsuVv47ysJVyeWPpEaDuMLu2gW2BhH6",
  "key15": "6NuQwsC2iM8niSpNZjubw7FrVjS9bNRtDYa7PupgXCYFKfWHpXo9Bu6u7X2D55SYn3qaAcDjmV5YwMHci29xLXy",
  "key16": "51Z7b7ZiLjRGxpZhGG3TV6nEtB647ynNHV9ofoMvsHURdj6EvjErQW2jm2opmjiyh8a3HpVaLPeBuVAJTy62x4Az",
  "key17": "4yJXCFicHWrfhJYZmFLyzQtCMuM4Af2UNz1FF6WGbF3aP5jYpqYcmcagcU6QEZc7mD121Gf3fiVL71j2QJFKtNMN",
  "key18": "5sSWaPDGmtDiyYkAjgQ1Afwszf7aRRNwCF1dmR7jLnG3hXXtAfsMzJBbffC6kB4cKt77LDsQRdjTcKMQz4tGw93q",
  "key19": "5SPyyeTPJuoStaUkrn6BhbvwNMz3RhUHVrXrraz73LcsLNH8yTxBqbEZomntaQoaWUhtstuBdHaapXrtjVfpgtA3",
  "key20": "3NERaEDUa8oLwZ1oeHScwfSSUHTPnMX5mRxX2vCeqsqkVGsRdu748W27Vci77qDKosdLwPteBNR9Vojm875vg8TY",
  "key21": "487siAFWuqJSZg55GrsrtEr13c9Sb8i3zttcWSSBmbjYxhAHP4NQY6w66speYkbTbEk6P6y1sQSvniE2JydVEeap",
  "key22": "4i9DE7umSV33oTAUyBphPuhDSLyqeRRfkz78yXaXbpFvgEdqWPi9uWGWH2rdEodE32KRDNMifXTtLP7vxAHLQHjc",
  "key23": "4mJqDJFg96SFtHy9J6Y1Grk2ysvQqhR6EAXBRx2UqsftU36CycxPcikLinLKZb5Rv5JkniKWCgCZUaahT3aPSLfS",
  "key24": "5n7KnGsPcpJkbFGGzQXic7CGcw9iDhBjtteLxi3qUmUFuBDcW3qCgn5mbVrvs8YKT2xZS3WfUkLiNEf3YaQ2nSRH",
  "key25": "4ngDX5WSSgkpRFtnfvM1Dn3uCFoBoA3Fm3yFad6oUoskLZkezV6N4FxaRqWQAjPdaMKRRm93jHvswArxRUrcxu5x",
  "key26": "mhPV8DXFmkEA2dSqeCpHZsYoK1wE6AWHdwqEHPMhdD1zGEWCF4L9vTHrVwzmdqPUzAj2cs98f9hhrAEoswFhNE1",
  "key27": "2v7JiAnk7WW4Wg5Bhwwdn4qXUmrghNx9XdkBTZAYv37sAGz5pVqJBr9dXRzNCv9Xb9XBho3wV7weQpABJSVWVH8p",
  "key28": "5aD31RHxQXYX7WpQ6nKHRBGQyhmZSxWcFrZcMR41RUwnppbktZ5CTQiebqwKeTeqjEo7ujDexoWfAppMhzGMotbX",
  "key29": "31bpd2SQg3ePbN9CSS4HH7hu26WvHVq3cW8YUzwkTHR63UWnM6JwWyhtURkLfw3BG2DqcbxxqK5XmiFHteZnH8Fg"
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
