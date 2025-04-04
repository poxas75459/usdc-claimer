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
    "4ANAF2W8j59YtURVJ4tE2Sm6Y9hRYff1bGjbzxttVgbCSSH7d5SF1si3WNGBrwb5tnpM5BZBMmeY4bAvbxvRUESp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1sZYcojoXvi5r5dL3n8fsag3bKJZbJ69Tk2xbzFETtLvFiVaXdJYRJUpmwX8AkBWAFq7Eo68PRjrjWvcxptfN2",
  "key1": "3u2DDBLk9v5QyuhkENk2bieJzLvw82iujfdQat9pe6vwpFWiwafKXuZFdpZjs7W4UVNjueMKBCcgGrEzjh4fWfZz",
  "key2": "231CU3f2QkGR7TC3BFyJH8wwXRf3y7DhVuB7BMA39tV36JRUkh7g7aWeKx7XzYxcXYvKvQp42p4qJshEgEmEJKas",
  "key3": "Pzom8pXoWNq8UJx7dUd2qi3uak4zooYZFkeExTHVv6qpcFGZ5anBNiCKWF1bgrMRtQgmfytB465p5PqPWwVK9F9",
  "key4": "3APaVt5RAkuEV8LYbx3jNjo7oFpCNFE2Z4HMkoi2of4q8UxE1gPPz5wyRZVyhExNjJDq73HPzUFtHTveQeMekFwN",
  "key5": "4ZJ9sHGovSTsr1zMawvhSmkmUmBUGoUdcnvuLxMcjbKeSBHqaaL9qrUWLVQY2ieFNerNJHJAGbEE87Vo3kNknwkP",
  "key6": "65NgLXXDysuNvRN6kPuqP6bcXRQhxKPutCdJ1ZuaDCRrZSPw5Zr4xJSVmbaQVWL3HqD6rmtWZt29aiTgriVDPTs8",
  "key7": "eKoQL6xRoPBzdnh7q5imYxueG11VEGzQW8J9aaX9gBhQ2jfbQRPH9obUHfFPe6db2TK3fAiiY5wzt8DakVxbhMS",
  "key8": "4p6GdXYKizJCroeLVRv4rzFCKfw6khkxQH18SLPqbSxYk2tkQ3HteTrwczKmsESQjGpafAw4M8enYZTGa4vvKom8",
  "key9": "coXsavjTiVVZ8xxgXtG1X5BncyM8jK6nUZEHAqiNNao2YHUPQXgL2UD8VzofamNvBzyBuL3ZhbfVYTsXVQFZii7",
  "key10": "4GsCgELt1rWvaTPy2madwanGP7YcrK9nymdUWk44Vn1ox3s4uYQjsdeFwvjEcbZNMrAVEiLZDZcwcN77m5KUDQxd",
  "key11": "33tioXRh6Uy9e8fGU8ZZa9h1XZ4vTHPAn4heJF1usLgGBnS1M3Ve7L4evTndM7cmLcL9v35i6KyY8ArGXnTE2dK1",
  "key12": "63fMSZaYUrQm2Z1CCUGsqTbYG1JTvJjBMWBBNqke4iisL6Fi3PBeseXNyyQwnUR3fMEnadAJZQcLNBMGwjBGwcKF",
  "key13": "3oL9JotGNFyTSsw7GWHJgZEFNSozVxgDr5ujuWatjAhyYufinsDG1ewCEmXJkfGUYgQqjDgU5262jM9hg8pWEEBu",
  "key14": "vGSF5E7VEWQ2LbcoSESc72ZvFLG1RTt9Qrvq5squBA4nRnbi7XrHWEfhMAVzx48o8j8bp3E6ReSTChSmkxp1CKL",
  "key15": "3ow9fH1KWaGxCZmHkDJwLTmKPwSSbcDDrKWxwykJ47gU15RWjhQTQzcW5VwcAKaup5k34oWJjQtruVfwtuFCRbtT",
  "key16": "5pp6rBcSS91jg3jQYKNkteNdqHw4Cx9JjQSDkAmgJZ95JdgcdPucWyVQaTcpXCY6bJhjReockTJ8dd6Wnf56tHRB",
  "key17": "5XWh1Tb8MyigmBKYzqWHfn1vjhEnzDViG9ErV1gzjBcnQgUpLMoaTyF3twomH3nD8X98gxhqYJ4QbH4YbJZJKxiR",
  "key18": "5vRuVSihdodQ7TDTgcAXns1oGtR3M3yeYr5bxNLd3TCzGbm5tC73Cr6c6EnZpZasjmqsFQAkYqUpVdv5SxVa54DX",
  "key19": "65XKMyB4jywSKyBCf6UWeoN7X1GWGN7PDkSZTaYe6tQpx1y7Y3uqNiw1q4daDCCRwHxiCY9eSiujkcnCcV9yQcBz",
  "key20": "hnsw2jirVjV1wiuNf35TGWKy4b6zQcWxhodwmoGt1yTNC42NDJdRu6DJ5763mVo55EKNTbCfoHYXafqKvAn9NKa",
  "key21": "5k6ZL9fWNxZsJBgd9gLRyTnvQtsfBBuLGhB1UyHuPmgFGByMrHnNMqLoeDAhwqQ8YAstmQTcCsYzvV5J8eT7n5gC",
  "key22": "5e5F5Xcqb9GdS34hKCX4AhHvAx2yDT9SF5cEFfazqnn43JwpWUwNoPZtJrzLYKWdP95u5PgNchteMGmw3zjnoMg5",
  "key23": "A76Z1z9AgRdFadigmRHcJNkiCBYLp5YexN7Lcn1mMgHTRiLe4vX5QQZGADHhRH5mTFr447M5xEBkU7da34yaHmb",
  "key24": "3CBVPrhUQKr64GDkETU5yY3WjwNFatkVi4QYwWQaeCC14VZLddZJaGPRXvQddzM6C2DtELjPjUrmVZ5buz3TjQtu",
  "key25": "4861JFPqNpzAPejJ7Gv3DwtonuivfH2CBurCyfCGbKfHbkrNUvdM76GiwtEhe9ZMCMNa5HmfcRN2sVSiSztZNjPx",
  "key26": "5GttJFNv7eLGi3pqhVPnoKcNDxYZpCsbSAGerxnJZ5TyFxDeJvaw6tjbrf4bBpjiiLADMBsGZsfnD9cCs5xKUuEb"
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
