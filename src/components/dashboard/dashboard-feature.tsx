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
    "62dvDQUes6CPSk2HpPFHGVuNkHzdiDG6Q94ctN9RNsSkRbCoV7VANUb3gUfzxEN52L3dA1CPKcq3NUGwN2MBJNEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUv874hUXtc21RjdzsRsdrjNfyaFH7TLVC3XWQKa8dvv3g65R8tfRt4uzunvGbcndVcFWRZdmh8mhda8nGXKx3A",
  "key1": "iTGJUdPM7fzSy7bEuaRFA1MKtxA1jtEuwefn4vuhbvjyMGv4FcGkVaXzvbSkYXPsMWmqvNEfYobx7RCztH4b2kC",
  "key2": "2JDofY5qVpBigvgJ1Az9mEUqhXDEzLeSpESUkbEoHx2cNKkh8rS9tg5RSgHafJPygokTChA7P1FeBc4K3cx7zzqD",
  "key3": "PmFQeWzXMEVYGPFhC7JpeRD5dCewJrcCWej8YXstQNtifhvyp4W9kdnYZciyeVbAs6oEjLYq62gfj246ZjuhGCZ",
  "key4": "xpkQGDs5DvmKCcvz8hVaSfM6QnR2UV8bCz6V8KRDJ1pdC2JsBXJGhjAXAyxqBKuYYKJJaSiq2aLteaJ16NNPcyN",
  "key5": "3Xh9i6WmDWkTdrZvunfT4JxheE27gAj2A3Bz6HcmoV5jhaCrvkpAfrKmevUdSNxse18gbGwneMdynkHsKEZNAojj",
  "key6": "5K6FuLtjRWKK7yL5AJbEMSk9dhWBAJBM8CkrHGreqU3i8ko1RPofyF5xmnmsJxnqwCFkvtiDPHHwnjTjp8rnqUzC",
  "key7": "4QmyWHaKNqPtPseLxH6ebLqfnbaHEsW5Jka2Grj7qwwPAiXctTyc9buL7UoiXnEuaLeAN3rsTshf1gacjTB5dzP9",
  "key8": "4egQ4nJ1VX8VCk1BZVZjJJ2Jf5KtjxvaLDJNM7GxyzV4hwfFv1zKMAu6P7GGBdC2gQiKStn5mx6dWSEsxjq7ypLj",
  "key9": "67oJHmd5fSJ5b2D13nkMBTySarAgavfLquLtBVRSqfzgJYWGUjZqNjxDHsFQ5tPq5PkLaftuv1RVsbu1nETvtrRV",
  "key10": "5KNcJCEZB72qUNH3xiR7EpWyCFqpBkM9KP1umQ9TkehCR5etoTuxPhGtfshW5CL7XS2vhNYjqcKbpWYbcp2Dq2ds",
  "key11": "4KYbccPN2H6ADrq9BnFJmcpEzuHiMyMihDWEHFA8D4dNPkcDrRgrDC1rz4JoeXLEMxHrcLw2yLh74P2MsAvqTYht",
  "key12": "4yBCwxKkaarNLr6ndmXmFUBgPR5AXB3u8KzoqZdEm9oTKseyDQExtpv8xfx4SATFNmbqpJmBviq4gQdWBjUJ87LH",
  "key13": "2JkC52tgwp22WEVRNAxTgVQX89vCoPEeB6RxaNzdbt4ypBqUc8FUf3bQAzsPpfmdRzo62ycQxj3WDpPpVsYMNaTW",
  "key14": "e2XLLttjhjRzp7Fzt2kgf9xB3QZvFVyn8YPvoE2a47YLb1V1Pkv2gv8gS2Y2gxS9DKowogcLqoGh4r3CxPB75bK",
  "key15": "4hRSvaC25oCV7n9EGavsaJeoRtmm7iFDfu6U5PqvqasZ4o395nZhhayWoorbF41FxnXZ31Pfws9GQVHWqAJZzrYs",
  "key16": "54YgThbfztzpa9SQRkJQoyWD3mXJLvSMoDifbB52SNvj28FqysPstDZTzaVbapvRQZrQouL5BHHJk4eFEwZK7wCV",
  "key17": "2LtKrggVDkpD3sGEpTBiGJSSuTDmHJGr4DaWv1nXk8WpifsC3iEc8oYCcMUU4TUk196gPwYqZKmGgTd7VTYD7Z4y",
  "key18": "5LUjiEdAKqjUXfnmUvqVpgPgN9tvxzCuhwcMHnhuer19oWYpNFBY4xgsbzPLX7GZXQvmL8HCAwkLy9wj1dqpBHVn",
  "key19": "5oAAMBP2PW5uhi8r7Rz1EMXnh5HumGjJ8cApahpgc4j7yKWNQeNgfxw31jnZef8kXQhXsbhHKWLeWiVEvGAQMufb",
  "key20": "LGrFzXF7PnJuF53Fs3GvvHKhghqVuDBNxomfahqg3jNKkpg7ZiDHRgKqZFBWz4TgFR3aAD1usLTDuEJyvnwDP5B",
  "key21": "4BPJtVWhxq4r9dpDBWRfCwK73SNsWy84QagVu6mTcwbyPikRNSqAmCRYixjEnBqEYobuD9FqodCMjBLiMRNBCQMY",
  "key22": "2JSLxANH4QqNBRPWaAe8ZZZSGP1jPRcLivkwLRRdcQXV5EyKhNv2ZBvYLKrHABczKUaqVe2ZJbfhE98szncD1sua",
  "key23": "3UoAfazAfzYt1bpxCZKwtjruhcpqougkfKBWbcXqf5TbV3U17Hif8t1K1k4YZpMUMeGTQkFGEdtm2LxUHJEaoQWk",
  "key24": "eQpXmGFTSLnkNgqu99yoa7xf2dFQpXgeFrBo81s2CRMMAq2L9sGe5JmSGpVNEFEnuEHBJtubfqzmfNSfrqEoSDg",
  "key25": "5SxRBJog1LKbXvzPYXjND4XYo8Gxu4oB6ZqfU4qf4a2774V2Gf28CzbWmovWPEWSR73rgd4CarQpDaSHJzJKbTrX",
  "key26": "67L4FTuWmgHKKk6LKU244ZmrBBURMG85R21KkWjVEWaDV89ZodqLCCHfkEHTe3c6wguEXovaQjV7CszwEnehaPZn",
  "key27": "3TMedTAWQYUNyTxSGQzFiWCFq8xTajWhfydd7ZrQdBgMPyNPC1dDpkzwXAsHDaRD1L9xEgcjmJBzVkQKJaJQR3jy",
  "key28": "5DdZ61A7YbH3upWPM8KUTQzczNDBFXyCcX1xx6symWGyj76VAGyhMXL4WCTpfWwwGoFcjNfEdKUKFmM2CYwA5kSb",
  "key29": "26mkww1mZ1aKSFjgUCmb1WQ556ctePPKmJZsGvr3XidT82ax2UM3nfGYrLf5yNQAszEqVg9YqRXYusu1fQMf1TPS",
  "key30": "3BVyRaBV8Gg7dyRkqJL5U237WbhMPzcb4kYqvBTKCmHk8P1EE2qT7ZbyNwhVcWZD5QDYciL7jnVQUzQKxkfVPHKS",
  "key31": "5vobwqBzWCtZqWMKyXrEETnkZfM6iJGtR8gZo98ZdvLwc4qfWe6DFGcSdaiQjcX1jqHRJdhrkqmNJxphPJEuB5bY",
  "key32": "hb1GTmxEr35Azt1KtMsCNKpeK2Tk2y4w3kaCKFQaq5Ma3EsYE7eoffY7a4yXYUM9Rjmm4fkpcW7uRLEvTDXpEm1"
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
