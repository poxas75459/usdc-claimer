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
    "3RPKZAF6ai5wfLSx9YAQgDAXqiUAQxhq1xjw4iMnHD5rkBB9dqP6ZjTrhu5U2XSN8RCtEFGwqsny2kcBABkSWWFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YU7CUcYrCycx8qHid3RjqLDX5mfaHPSnTMi8QbC3nnnM4ZNZM4aX87vmZTSyBemNSyKhoVXPvRv6RtCnsW3RoAc",
  "key1": "4c4PmHWvY88azsw3EZXik7zSgk8WboTKNMZfyNirtLZNMirq5mg7hc459S49sf8ddobU1kHK9yppfWrxhcgt8PuG",
  "key2": "5himAkwfrAMpF5siyFpjMsaN84P269KGkTGaT7e3Feo8dYzheCHm4cAKnKgNH9gv3pWR6dkUEGzpQpE35eZRo2go",
  "key3": "HdqdMsSJSormuRCfPmBjY8KVtXAuLgJ3DxEGMCgUSdpeb153QWHHUyvGBGwhM8usEaHh4nPFqYP6WCYxxec296y",
  "key4": "4KzJy2BVUnTPhaGU89cWmfUrF7eqR9JdRkSsBiA93fWN5oC8CG9rgBTQombRUewA9DZqp1agwFX1JgtJ5C6hd2q5",
  "key5": "2ctGscWbqU3E2A5Ao4hNpqah6PduJ8WEJaQZcbCdAC7RGJPqjahWdG1DioZBSP6zwe7eEb5vepBM8KU7hVNMRvdm",
  "key6": "33nASuQUkvrWEHekSTKySyP1sx5dmgNFv4znuvEq8y1jMYfXzykPNkgXXPYQ82ZYdBJyoRYYyX3kJLcyxk7hbUaG",
  "key7": "4Ej9m7KBw5SF9rW2ydFabWHKwkwyCHENqES5ZNZEJhBCd9Yzdxprgat17n2peHq9k5UiaMmn8YRcW99w6kKmV9pL",
  "key8": "5zkyUJTLozvLDvTWiwZzentiLxv8CtytHJvXLPozU2LM3Mr7HEBqb2GWhLeGA6eDpwY1k7YgKRqbqM5BMGCPRBY6",
  "key9": "4Q9tZ3TtXV44pJ8Rx4irpYgkmVhHoytH7U3HMGoUi8XKpTc2BR3D2pgN4pyyfCNkucDqdm8V4cbHfupu3ghmcED5",
  "key10": "mVGcNTZ3TmRz46CSLfxKcAwnVQXZeHky6iUnrbjYj3ZrS5G9sSPkAvZHrPHhm674GzGKkRJQJs2UG8ys5iSNL95",
  "key11": "2KhV279GFtCfYmLtnRkDh1aXKRkDxgrLiKgJXzA16NrcbYzaNpvVmEsRT3d34ytFMum6ZHv8JMXQS4sE7q5kZEv8",
  "key12": "3tirMkHsWgdGqs2jMzADYddF9sDW9haFaPsTC9bWT8GUKNQLG6qQ9k6P2r4iNXM6FG1TWXjgCAvSjWCM73T128tC",
  "key13": "5icSvYw1FcXMzS9uPGvGU2C9k4YAgFGQCxswFCzKQnoUbeJSqdDVUpHty7gnmzHUiSWV2cFppoAFdpsTEnKJiDQE",
  "key14": "36ohf1eSgaFdZdm96kt8F7AVFDgLtWYa71HztTnnDaFzcT4qJQSKfE7KubLBJWD9TTPY4NokvxQrydsTXf7HZ6wd",
  "key15": "5NiKnondjsE7gYzehPjr4ApJtpGBFrCSNe6LkDkxr1ktgTE5igNLU9JVviPgCnmbTr5WMfeN2AYLmFxt4yA7iTNU",
  "key16": "4m2UPwa7G4bZxe9PGyU2mmfAA8qHq3uY5JMQwX6A6e66L42wpMgY7uwN4tdytqB4miisibgndKCubaRfox61jDkQ",
  "key17": "4BrhtkmYhytb7Zqy6vZinRsQ4VVCBLNiqQqmN25XHZXCEikELsRwSULGc1VpGwQdHSXc59qjDNaYgk8XMfJekawH",
  "key18": "2bHEjVEcQcwfzg142UVvxLuhsnVrCdNCVGAZ48He2EA622J8hWU7EwCGWumsoDYWtyCQmkwikRs7sBWGbJkq7cV4",
  "key19": "5pULwoW1XN6efqjJJFCY4aqJmSTyT3FiQPn2DTiUs6WX41YVttNdf3LeDJoHo5TNcbLMYAU5CSnareDGcBAUSgYX",
  "key20": "4zNWdvAgTNEXwQ32RaoqvPLygKZ3bzWpXxMYunyqfsgzyLsQxaYhbLu7mEH64DYKr6bstoHQmxvxeeDNmTAf2V3r",
  "key21": "3yjgfQZuieYPnT82q4BNfKxF523CfzfFXvJqYBqfZBdmJVMPAoSs43eyPpDJJ3krY9wjUjZd2oqWjFQwC8gT1FFd",
  "key22": "54LzNvWz7agsyjJsc5R3GgszjejGcb77cHQ9vsZrk2knik8J7UbngGZ1MhQKkXALZ9MDC6bfPcyi8LXrj9SRQCAH",
  "key23": "63nrYD6fzs4wzqg6XT6NppwpBk2rGLUiGMwXfeigcBT3YVKGVCPvrR9maeCsc1G78ktvLSXHboah8WU2dsGi5KLc",
  "key24": "twSrsRFxMxQcVmavR6TK9WHsXtBGPVWy4bBTLzKLvZd9p2AUnAraiMDW7ShjBW82vg83DVtJch7Yi6cco2gdnSe",
  "key25": "28YYzQYwd2TiVnCsCgHcKPgm5ZgLvUCzNmrfH24UmJQpiE5GZr8bjQYa6faJ1AyVE5Mnjbo4JjU8Un3DL95qBW4t",
  "key26": "4UQ5a45kczsFHj7Ksy4uTBbTca93sU7QPgDUSAhvUDBymxM4JK1HnRZWhnWPN5w4Pdm1bUQ6kRd1tK4bxwPwRpbL",
  "key27": "5R4VpEXAqq49Nnwh1gUhU2ThFEzxbadErVE8qxE7EcpvXnJzTipkagSJ5BsmexoeAH9mdcgzwtreFJNTY82pnuPQ",
  "key28": "31gzxTMJ2MEtX1Ti9SDAoybq6i922wT3HHuAfKXCukNZ1MrvoaCn9yvtqoJpeZ8YWS83xQ1QkaXzUpYJXN8rtH3D",
  "key29": "5biHfBgGsRGByvp5bEf5Z8VeJguN6DhsXgmTpQh9NYJ9GKnkAZCcNsscZ1VqpFMcnjQUdQZgj8JYt84XaHMX7Bqh",
  "key30": "3Hzibm3NEMeMDoU9L38JWfeNigUBdBJhxT2tuuSXt1va1TeySrZSPH8pJn2rWvUrx4xGTRbQpeheKBFkV8khABpw",
  "key31": "3jcyhxHVLZrsEfbGd36u47XfJC7vuZdE9ecRcDsBCCmh3tpzHPGFMqvfxshsiA8vTiJrpCmpRNBR1sUawTCodkhN",
  "key32": "5WZZ9KmA7Adq6kC3xmDCQXDCdk2txVQjPGAL2gQ9USKFKERvTwgD7xLWCRe1eseYTqR1KbCqYrNi6kn5eRTVMcMn",
  "key33": "3noN6hW6YZWgkUDtqu38Aw5K7FDXmAaTmcriaQiFu2BeuBBBXcbrSL9wUCGD6cfDA68gTKD91qn1hqNmZwusb1JJ",
  "key34": "51qXMvgnp7xV6RBWnAzfkYj6NZiLszfEDnMwn56DP8249Qcsq3WfkjzGkKMCLmeVzNh48L4Ebr34cznorfMpncDr",
  "key35": "5NNwrbTCTd2E8XVbtaSzccZadzf1y9JvSyXUy13V32v9WtoCFZxyJRD5jUaJnW6n18uuwGLpjaV7doo8mUZjXVJQ",
  "key36": "4SHJaAUeZSFwR4B3s1Bb37Kg8EG3crLYwn9Szz1atLvVYAeqpmwyWuG9B5syBcsvcyPvFFZDVVk4xWVNzLFfhoRS",
  "key37": "5LNYa3DkrvZSPiEdmrv41zXmRzgTF6LAW85J8GnEVCoELTDRPP14Z38Z7JMA6cY8AVxoPqgbSm5RdB3gCSqqA4kh",
  "key38": "WrMJKfr1PzSzZhYTKJrsRc3vNRS7TJG8AyjgvRa8cDE8QiHd46oqvNnHmR6Jr9edoPXnigoN2rUF7Re1Pnd6zxN",
  "key39": "4TxMu6NjkeoHTqtdvy7iz7iCztdZRrk4LksPyYNYPL7ZdukKpYXRuqekcehkGyu3vZ6HzDjbsu88EAhJqnWaEbyP",
  "key40": "21c3YC99gU1RNQ6wAX31Zq4Dz5LrA9giEq6w9wohnd3JeoNbbcTc9ctJtHEoVjGvCV19E8cjiYwgvijmME5PQLTP",
  "key41": "eBiDZW4tsJ7iMtFXrvprDUNno3zdS2uRXbyoPtyoQk5T4YbUmSKYvWqaCx7yptkphnCnEWiDgXkFQnt3BB9DWtV",
  "key42": "528NZ2HnUXgJGhV3iJAQtENR3oVARK1th4KziWACrap81pS7QyS1RVmECpMbZ6LwFAJqR4kggPQJ4WhUoohJBKPK",
  "key43": "2EkKo2ESRDN1jn5XLFAHzufiETu9tcUL35WgyVjL4S6gEKKwJrwWf2RwMf5AGLGcMPZLpNFA3cvb5LT8kqMsYjyT",
  "key44": "5CBvQ8xqnbTuUXaobRfev2BBf3UxsXiTeNkVsomSBVmwEH61MRjqKeMmqpEp6nXqFYNF2F9skA5QVECcSESAAMHy",
  "key45": "3uHqCXbbpNEhduPJc2PzX2VEZcA3Rwvmdzsh8g92S12aTGnxDzX2R8f3v9uc5pVo4Qm775NnMmagoxYJhBYkippx",
  "key46": "55pXsUxLSdxdgu2fyhHT9Ca3Poq1s3g8eS3LjsikW5b12b8NjaMTsSdZ52nESk6zLNhqj3a2NwcrzMFyHRJKFKDS",
  "key47": "5ndN2zh8NzDatcoLUkcBxsrefVo74NXyUDULpezxzLohYPMEeCwCcizrMHGcy7dEkpv2WXpfPTYjFGMH7nL8tdru"
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
