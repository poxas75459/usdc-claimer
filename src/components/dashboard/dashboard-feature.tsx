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
    "61gSL8SSaYcCpqnBsj6mXPkzVd3ddiVDrLYg64KTXU8ofHyeoJYnxHE15WikZNuWdWA3UsFZXeK4k34MHXpUYx39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jmyh53A8GTzkRKf4k6ecj2JPWv38hvFKqhY6MLKaT16hhymo1RFE9j84WJCCKtpa3paDr5hoXUdAKpqH8Uc5ya",
  "key1": "4CgJ5JAdNXdhR8sjMvj9Qns74eiwvxETZvETrbo37XL2xpJdJKM2B1ijGUvJY82unjC9MayCga39JAAuPbUbvDGd",
  "key2": "4w39XEuRh1upqZPfzpj8bo4614hBDnV7NN1FWWw9Cbd6Wc6L4WhDAXrPUnKoZKAukc47gWkY5PWYA3Mv1Rzhfb9W",
  "key3": "59uSxfeMLb5mKoth61cNT3edspUu5EjzPvUsfS62LSDUrEV3WCR8kNpbqve5njnmZVFp4g5ZeFEa5JnMS6msYXNw",
  "key4": "5qqnfxP4jx8ivo88kB9ymZyLpDtysp1kT8pAN9nhCouTd2QssgY2UN6x7YiWUKJxgP23KxxFQ1VzPCxc124fsKL1",
  "key5": "3J26JFkVcD4ZpcoTtUJpRFdvpMYwMnTXHuCSDb2BgoX4HcGpxcB93nZmpUiFa7nm4WK3qjAFJJsbcnTs41jbJoNs",
  "key6": "42BztxogT7zHn7YqTuCXWPB53g9PFfs6MZhpvYqqBLRL7v8115K9yB2QJkTvkLRHPeUGW2MggkyUSNzjnav3B2eR",
  "key7": "vZB4ctyNYXaYupVYdJKqysG6FHAQYF8goCwV3tbf5AA1Kocae9NTJA1ntJ8MaW3agHFWBuk2rXJwoihuLczC6vL",
  "key8": "4xUL7zCCuuF3MH1XJe4q3o6mfcm9R29oQYQz7yQgqeyxzvFSznPjvg6Gc2wpo6FbLyqvyVXhvR5yx5mqHGuuhTtU",
  "key9": "3GnbJrn3o3RE87rRvqkqUyDbu8gcEQtvrBtAScPfxDJVFotznD1pRZA3hFAGWhGAdzwAbsnLAqpXoKF3rFmMiCR5",
  "key10": "4upDJmEihN2DnZojudbAQX6oomTNoevHUaFgrobcADqPbXqjZk8tVn73KgTtxYbGxNcHMH5u4Z7sMbrzXvpvo8F8",
  "key11": "svh5KaLTxaHnfhc3NuXiJHF4C9xc8y5QPpwUAMFkZBfkjZmw9DRY7Kzn1RPjPTi1LWZSFvysiCxUB1Ape8tSaQB",
  "key12": "3pqHmMmq2VCuCnT5AytdQti9zwc9afLmwJ74pL1KZC6kasXCNguTp5XfWJwf5wpcAx3zdz9tb9cgSzqg8ww9e1f1",
  "key13": "27gFaidjfVNRtbC6h9xxGhLUJAk74MqTEzFTc3ARcGZxh5qBihwzc9Gra2wkrA4z9vDM5S98K9DjEMJ7N6UhbDTD",
  "key14": "3VrehDPcdi5Bb9mPrJi5bdF9Z8yowLNNPihm3xdycZiQqvLR4U3t5v9rUC7QgwVAVGLX1NbgSJ5pS9XhyCnyMngd",
  "key15": "5EDE7x24ngEzHKxSr1QWjzbtAmcTQv8k84uZ7LC11nS31Lqau9Nzt4LXmztH8NDGxnDwGweKjECDqVdwuNo2zKzH",
  "key16": "5E2TrUvNUHXTRjmq6Fb9vcuUdbZ3A5fagigLQFKsHvwgXoqzGTTVUT2moEN4yLWzxE91MstyCEzmWWFoAXJCBrMw",
  "key17": "2xRcJLvXAfZzAgNSp1Vd27WTx4u9ibLVGKTskbnd8HMBg3JePCpRktUBgKfabJmxJE56afC7vcq8zpQCsoX9PBcU",
  "key18": "3yfbdKUcUzBQa59fh3MJTZHSRrPD4uQ5QPhWd5oTCM4WyNPAWZcTE4hki5cFmrPYJRpi7YVTRyauAEop3R9QFPTA",
  "key19": "oxqKuLSRTXXhKfRW9nG52pz5eJjZUANpbhHSrw6hfi9VqGK25JMypdYKhcUTmf3QVwiEUXpZq42U5NVoT7aoEiJ",
  "key20": "CUFH6N7PU4iztAtbv8SxNsj8B1ko4sm14cNw23Lvo6BLNSLh4TuRVdAoZwr6gE61rpRPD1b9wuPwUmjTSkcxkbZ",
  "key21": "4E158wybdCW2fYeiE3jFJ5DNgruQf6n4pgPWf6bv74rLMkU4CoK4mNTkddmSYqsoDno13HfJrML99GueJVJa9Yrr",
  "key22": "4nfzMHSLzmEB3SztTYZjkrA34YoGDF2S4TaYx9wwMebXdTWGWPSL8hYWzTkX2ftRfLPCNFQ5dLQ1xYA3HVSWeijy",
  "key23": "4yeyBzkeMfBK9iTn94udrydZ2i68Gkq8oy8uKToAWDPjpAhwcCGZyYZfoVJV4tMNYiEQvrSzLQtTBNCT4hJHoXgc",
  "key24": "MbM2ZBp2uwVA8sq93mbkksMSFRFvoHfsTnrGYzfXjYUVb1m646EA2J4uP5HCdGxXPLVv6nvFJXJ6srmCF6tBoF4",
  "key25": "PaabeSY8EAaAgsry6ETuXPZFKhSuLzSnB1yNDD5PsMCSHCRrMTrPpfpuoTcNuC6A8tS8FLcL5ApNhBrsgN8Vkje",
  "key26": "3KctpUtazQNsoEjRrChEquZF2yAwWxFEZkFKhHUtHqE1edWsREy3iNVnevPp2XMWkdyRaueSyGaBZmvhAPbFZKFU"
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
