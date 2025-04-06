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
    "3R1u9VJiUwSuekFFrdEt9Ru4kEM9TuHiEJFhTFcLaR1oWwMVabTLeyG5GU6YLE7xusCpyuCKwiJqDimQmLwtzath"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHgq1ZtayNaLK7ob22XXJFXFsYF1VZRRtKk5bUdLLU9DB2HuXQK1BMcsUtYqNP8gyaL4oBAH8GjW7i4zTVyJVfG",
  "key1": "4LQM4eeP4tnfuhKLpZMChLSwwqz1h3XLn7M11xakB7eeypw5z1Vd9bznZow96BELMZ2iM46NazUK3N7juBaFuMmu",
  "key2": "x8wuGKtgiH1wfyz4p1p5MkFjWwcZh9MXwxg8ZPneW8nmou7i14Cfp3UxFxAszSTa9WV1LuQhNRR1eFLyPYn2wNd",
  "key3": "7QFJ8a98hKQpu8VsCPtmt22BCpjvxwduuwqYEgZ2YUqmR2YM4kqAtWgFapyMXsV4Rn6zM3Ruut4Za8vDtkMKUvF",
  "key4": "4TD3o5hchMusqZrwHQKe55AB95ChtuRaCzZqYh7i8KJnWYEZcp2tWi9dbFa8ZjAGUnbYeGyqJbfChpVXJsSFPHVn",
  "key5": "64FstW8HG643PwL8f4iSbEJ3ZQKrDrY9hmJkZNMZNzK9TKRz5tjewVw5GPuWaNcN4HwVnyGe5vkRKLHeQJ1gu21f",
  "key6": "4iyATVrafxXH93Z3M4c12My17y7riGhGFYKrhi3WxfVsxFj1R4BuQnrwZenaLT78mVN7qTCkrysSEKtn7MwwKx7h",
  "key7": "AK2HiL3TLTfpkJiEUXJyXcJ9Axx5unNo6Epf9jW8v8ESiHuj5pQE5muZ2ZHGYCPh2nuePbDUoB6AJYhyyFoFxeT",
  "key8": "5qKj76Frgorm6H6RVeLZF2CFHYiir7eS7bGPAJiJ3FRWtV4wVrzrBmPxZEZQdaaGtPVn4eTApaPcxRTUWjubstRK",
  "key9": "5mBy4GPwUAaVFRPc2ooYi6EEwEP2SaayM1p2N6E3yUVqE7KTnBwZekFCQXui4PZt64LhPuDnXYDt4fQ314qjUTCN",
  "key10": "49S5j5iQqUk4EWu479Mf7EfmPoGABrKpNh2x8UfNwFbuJ2B4YBt6JgZqnGjT9LAe7XGbWATNvwb7ANpMJu3umuJd",
  "key11": "BCjr2zeQREne4Mb5oyJrH2BmtUEebp1hK1hNxEVwsMRwq8Sx6UuBWMh7U1Najvxc9QqWYUncmdyeLFndyByvLtN",
  "key12": "QC1PCi5QZfWAYnh4PE4fsWj5Buhz63n9Jzw2Aj6BRtKZtKMXTqYKw1zs1GDBXjVnkUTjhuUopqFfattx7XKdPAx",
  "key13": "5KhcUzrMuyBqKFEpdFA4CzpY9SqWT36qKaSpRm7qfhrCaDVb3QwYKHVe2qCA897AwFw2ddn8oF3VyBKYUJ2wxNvR",
  "key14": "3YL69PK86yWE61JepuqYxM8WUjDGnXLay6DZWoLvesxJ4dM7ZjFFkhs9NUdouiBpsvGhD1monZ3fyVHFXZN3rW2i",
  "key15": "595qGnHJBYFdWdTGAg7QPUVyx8cywUxWEbSdQ5yus34aMy7fXAR9fJjrKT8dgUBqkJuh4fNhzXupCpPZtzQgw4Bx",
  "key16": "4RdfBdiiYCobVwtvJXruadm9oyQqJxNTeXa7uPSNmSAe1WvVhaRx6DR8BhR12qNEi47WZKr3wtSbR6eHPMU8dpJy",
  "key17": "R7AWRyvCd1HXkDW3ysKg4KVKh7RpiGMcKVRyY4SqbXytfyaQBydiLUABp79ndcCMajdZSVaJBHPePfjkhVxhhe8",
  "key18": "xzX1P6SCKUwN2NJYAQYCLjYDFja9gYccYyb41P7jSLvi33uN6ZN7PBY5RDqFPJGGtU2w41NnbSYtQcBZM9dmnfK",
  "key19": "3fD7vVrsZAaWszhmkMiH84qx7pBm1JncjQCc1kQbtcuPaocQ4mGCpVgUuuTaWoipZ9kwxerQBNrvbCw9zj2gGrig",
  "key20": "54ysbv8ZRo96SS49R4692sytwSSALmEMBncC6bCdkNt2koeFomZRFV64C92fMczyZyVFFzebZj2Qxvez5mqTjDi3",
  "key21": "5EqsWrnfHr3SNqHPdjrUN4Qo1UxGk44ooDsHTCcZKgCVd4oSCNDKrGsuixFKe7jaqn5EHxwAHtQMcm9ft8NKBTcb",
  "key22": "4Uawxq6pEUGZNtcHKrPNwrxZ7PWU25KZEDpxYPejWU6XdNDgh8RyWVJ8yuNxz58T7LXGrKooytAzCVvSq3PX1F6h",
  "key23": "2eVDM9uHBz4hgKedTU2ybcYzyzUE77QL9L7vx5Dx75oP8r3nMSmSF5NcuArduHqR8K3Rb7FQHvwvPybkpjdeheuE",
  "key24": "5oXHSFzJ9mMskHL9UzzMzNz7a1Y4jsVHCJPB7n79uJ81eKutN2GJFVpsEhjWb3QvieFFm6yu8RD55TLz9HZoPfRY",
  "key25": "5mrqgPCrPK4wYnzD3EuAN7bkiHPi6w8iUYChshAGNbjEqHavUN8ssz3MnyJNk2W2GDWorSEBfjKiWXtMEtAu3WDb",
  "key26": "4UKajZ8Zhct9rAjBS9Tg21aycqyaH8GfnUT2MyerLFK5KCq5frQbMkNWBZ4nLYSvxYeyne18AgKfcPfJNMEtFZqL",
  "key27": "HhTsXw7p73EKVtPevEKkfsgupEnoEdUFxxTSCKsUUocGirQzAR2pWbtXRC7f81Yf8TKqKrURbBq4adeRrbQzKqN",
  "key28": "3BTmxruuutoUsXdEVsuLoq14pNVSpXGk9VPXtH2pqM6xaZsw4HmeCVsMA9i1ft2ZoQ46AgpDNGg4PZGoh3K1Py92",
  "key29": "3CqbPFv5oRAXKV5BRBhKaHrZNCENZykgekdrv2LyGidwwjvrTum4SygLdWzxiWgyBB5U5KposGZnBSeehTJ5gKRf"
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
