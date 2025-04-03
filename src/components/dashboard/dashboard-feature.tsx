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
    "2mUeyK2fqbd115m2vXtyVHvDq64PMowq6Yhs1UBnrcnmAFQvv2rjHiWdAC6gsBVgsdSHgtACK9aRC4ftMLeshRiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fd5KTK9XnorQPWngF4rD28d8ygeHbQxQ6vL4zwVeJ1HUDZtNP67zFpHPsaXpxbbaW25Z2xqCnTC5AqHjUzCSQL2",
  "key1": "4fQFmxHxZPTRLNjifMRGu3wWgkg4HU6V1jUP7f27ju8ApjC12LatMWPA1n9wvnrWX2neiKF35dyDpEc5S5YxK9Fr",
  "key2": "3czLovyw3DjB4Yn8Xocec6eK6JpxpLP9i7APUm2Xpha13s7F5BYgpdUDu7xwSVTQ9276QK1vL4GNwTqJPZMWTYCW",
  "key3": "kTuuFPjo8fbChmhCzMgBsUzur9aiMdpHqRKCo7duBCYCNwUwrWU9MCJwHtjKfiq694M3iAgngmhswr9WqVHiQyJ",
  "key4": "4nrp8CprwFFYfy15FaT3BLjm64DPTkaW4cLJR1PQdWzsX38GYSTpJA2wv3Rpy56rZnUDdL5FFRgehUef4sch81yq",
  "key5": "5Gq3LSywQmkfpCifrBKeDdGZugNScwimWgyiGqtmqCJaZjxyyB4gRGqyT2bjCd8CmeyPK5uiEbWygWR6YW16c1AF",
  "key6": "2dosaXz6f39NfHyvng7qhYi6U39ufyNs4JZmjbtHeUgMCYzeuXTNSYkjWb9eSXPojWFQd5cv8n5MtkNfLzEzKRnY",
  "key7": "RiZSNLzDv1XQhdqmzzvmyRSYr2TM9NPrzUAKdUa5AdNHfJycucNqN33sxieXYNAe18kQUGSQVvAvFfU43UWauVv",
  "key8": "2qUJvHzK9RsMdNHpdPbJdBX8Yr1bib941Huj1Ve5BJgWJtcjmB6yrzq3GnFXM4YWoe2zRpwmijfJcGJbVKzS2csn",
  "key9": "5STXHzaW4A7p57hYYvdKQH5hgXsfsHXXmJdmkHTfTvFAYi7vds6saf1P7SrwE22qcAUZHhYsUFDFpa8ww6hZw9qJ",
  "key10": "3QnexgtN54FcvUv3SBELJcTkAfPKdYMQEYZAQ9owChB2owwnzYKbMN8g5znhYuqC57Fxf1Uqy9aZcusC7i4RuDCX",
  "key11": "4V5SUMpGG3GtFmmDDbhecKwbT2xv4mPpjH2wYqumhgyamqWogubpNxmRXumPH3JGvoQU2RGAE8AnME91rxDdEC7v",
  "key12": "5xvJFqHz57HVoc7YXUQfrjuT2o4KRYeA7ZrCsaThXJJr99hkSNise8mnBsGBbnVYuCYd7nQnGHPpF6MUUBDsFysy",
  "key13": "MYPuAqdqYkrw6gKwuJJvqsvnMw4DSMMt8oNCsgiXq2HKfvX3x5rLQZgZrn3g6JfvaShjrNFHKW2bx8tVe9zb8pJ",
  "key14": "3xWf3GMRXjdNxqinF18fadKB76WvwfRuR9mcvnyLjfzhihwpec5RACPwRaRsB67wXSxq1AoApNxWRdRKej5hBskL",
  "key15": "kSEAXr9fgeiXhHAbSbNzvEJd1JX7NjxeFB3DJVZyiuCwddeFxguVMNXqGZe9DJkduJsGdvqkSvDxuAdfrMh7Ka9",
  "key16": "8aNzGBvo4DrrqyVUCKbF5DnYGmjpqAxm1s5xnyycdvTeaDXA3MM7b5rf7An12nkuPP67WD9nPa13mzb7wLbn1ym",
  "key17": "4hE4bRtap9E2TxDpRRY1NipjtnKSa8QXsAhYoNLzcTzd2TdANBk7wM11v1CEuhbr6Qw1T9iu5rwLY79cXcZ5rtqM",
  "key18": "5xy6TZpbpVFRZstZsBshJZnuYD2funuqb1JosgvBn5keMb3cRaFJYWAzDhVydHBnygBB6juE9ZJfLVs41Q5mhvN5",
  "key19": "3quJnDiFVnw8SEqGJTwho89fZHH6zNhXWqBeTzy9GfcFZGZPyD9z9qZNzSzd9urHgbEu3UxbLnoADmjXjDFCBacd",
  "key20": "4nLbN2Y2rHu1aLtSX3WmEfLDu7bsYvtp3yA3w7Mry4EnbkjWFp4KhDGz1jXShx6fGoSaXbBcwZKqmepmvPRAr3bQ",
  "key21": "4wpfEVe5S3rHqyAKzxWdVRAsQQpaYkjYYmWs9G8dNYjs1MaSG6cPfCU7oJqVJiKUj9WF4ADSeAKb1B17Akr6wFq",
  "key22": "29NaJnRGTWiv1Q9QXvFhJLgJc62VT4QYGNCthm7T2Vx92VxjSQctYSaTDPzjA3NeRfUeH6abiBWW3dCyvxa2d4bS",
  "key23": "5PMGmbuxhC4wCJZxXGPu7eNKDZYxDY5EXHmoMFf1ydtMnzgZ4a2uzqNJxfxaJgGhmeasrTcm6RHcpx96fD53G7v1",
  "key24": "3eYWQTdJ7ZrWCEKvg3XRPgpn8KoEvpVGVmUpxn73JRxAUpACzg6CMmkqFhz1tuyQahP6Qp48qMcKffZhtC2H74Z2",
  "key25": "4cqSkEwuU1QVvDMzFhRNtxJbTp4PkYfeppcwzkb72haEFLqkvUzNJntgwDadpU7ZotDu1Zgh3eXJCn47hNAoGDnA",
  "key26": "67dCqpoGHYPtPnYL9ZN4JKejMXQEuMZ7NjE6DBmRD9BMQbLXQHNFhDafL324RyuJDHwHwiXr11LVEqxK9HJsXPZN",
  "key27": "GJ2nppN5VL57cx7bpcVkeHqfzG9EsQRDydF2Mjac531Ex1Kt6PHoi8RrNBHeVbL5HrZHGQ8UB5C9zeQkCTAfkgX",
  "key28": "5B3XdpRBdP1Ti1gq8VFDhw83wpc8PXyeXCTRW3iu4sXfXnyaH8xD4JpxK8df3hEZZF4AuLs6cKZ8M4nCDcWutvvN",
  "key29": "5DXkbdDeEsABpVXTQK4FKrt5W7VbMCmsbCXFosa85RnYE6SEzV1Xpi7UZE9rpDiZgWWtaczRvRAMVRp3WP6bh3Bh",
  "key30": "61otU36wEyiK94N3g36Vg9z9ef5MQAETQfspZkJ8eowGXS8xqosEEEofZZ65g4LdReyVP9rQWH6dmpPPJFkiVSZb",
  "key31": "519fXss82xr9skMLj52wFCqMeD21sdogRhcxv3bU5FBRzfaksSnTjQjCNiwCKNU1nyM1A3rutzDQmYPCsZE9XKm8",
  "key32": "4xbvihtrYzQ8jYhU1MQLAgmpHiGn7HN3dZnfsdjrLoEvWmza97KUzh73YCZxEeknkncZiTQQag86VUjhQ4uU48GA"
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
