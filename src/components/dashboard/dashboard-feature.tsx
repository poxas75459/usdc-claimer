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
    "4BeajQkPsu5b64TGFijAj3d98wX2nBvdPAbUb831wazqCvpmhERG1mriSq3Sqg9AJ4hYwxZEbTh2dPLkBnsoFF7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wuy8wcqkEU4Fn7kX6hjU2M2DcB3GYCjhRKSYCKDZB4zxwj1ftxivm5NtfshNj9a8zkHWQfBX1eu8QFK6ZLaYQgQ",
  "key1": "3hpJfLVz5hzavzo8XQYA18xkNuEW7JSkiaQGGenVEXHzNFFPJagbPxZ4EM5qPRuVowEkFy58em2ZXpvxXJU2XM2G",
  "key2": "5u1eFpqFekqaSgYdXkxwyH9YuvEwx2qQEu2rrFzHt8Qq8uXaLrUnLBJPvQPiofZbDPXQpKQiQLS18yx82q9cMnzw",
  "key3": "4hYeZ5ZH1cKt9Ffx9pWRHJh524KG5hseZ29xkBbcMVCkbZZq9pPeQ1j7MvaqoTWuiMZNEsK8P18NQf5FQiGHqKCz",
  "key4": "2YhAkKop5X6tSyEts4fRribFRYteBvHHp6MuJLCRFT3H58gHpGJW3FFh67BSmM2QjXbj7DUDA36uWbkYsYFMvT7M",
  "key5": "37YQkiSwP946hWGvvG4n4QbRUX5sWcYRqEWV38A8ACbeWXV1MaT5ywfRidX99V81z3ZzyKF28fB1S1vnksggzhD5",
  "key6": "c8oE7wjK9ixakN2hCUV4dj6AxQC75oZMvu6CiMPp8yBvGRc5jPkxk6BVEZUa2ThBJXo5p3ae3wmcuTvFwrGRtAH",
  "key7": "2eB1ekCjFx1ZgRzMJmtqdcnNCuKfJGzXYxuS7XMWquBXpctyvpfXPjJ3DuaXRRfrAhNnG391m81ZRfwEtG693K4d",
  "key8": "2RPQnL9eeZYsz3VkCzjbK1ePw4HTp2CHRUZZW6SPpHioBPGcexwn9GG8CCtmKo8UoAtdDbu4oLAnokNCJ7Gkr4k2",
  "key9": "JVKqBfpwo53B3T7ngoR1TTJNe1HPFY4RifnMnBA8gyxuhKacynuH7jXt3vE4c78EnuzZfJHTcjWkYRxGSbrKbaZ",
  "key10": "2DBnrzxbau9nPT8s4taM52y8X5K2uVoh2BkpJ9rFRTmHrMYzk863TFLuTsxYQFxY56bDffQLNEvsfCuRUrssirwv",
  "key11": "56DGBhhKwmsWgPQFXKm44VFN4ZWkVESfbTj4AdnkBJ4UC98LVGyUhZHYxn3jvkMGGUM7HKsTT9tHPWiGJYPzhPHn",
  "key12": "5PPuxuz2EZczPRpUjr9S1K5udU8aZerczM5sGcPzJk8bqweBrEmkePHyzBghHCZa1QGcPQ8V1wHLmmdqHVbSa9au",
  "key13": "p2bvwr79t6KXF62GX656hyjKP6JRVF5nHT3QsD63v4iFGziNxjqXF13ETTWVTb2vMQWrKi9Kg7bVM9T3QuLRk7A",
  "key14": "63RPjkPr5E3eAgt7GZvSZigYiYCrmq1LfXDDqXpAuxwcjrrMeLP1uXeVoa54niZDietFD2A8BQHcVTprAqkpHFNE",
  "key15": "5tTqGHVK9ajTvqFjgq27VfJ2V6FfwMSbMxzN77WZzLT4DAcYK2qTUDbRkq8MS5CzMc6j2P8FXp5maVvJYzjG88PH",
  "key16": "45zsC4NZ2PC8qint3jVjEXsp5adhHAE7CAKpqSwSY1tong4qmDupD1GHgnKdgYZNpgFfE2BDYpYKcAmd87sLkAum",
  "key17": "63JMCf4MEdv8Ast9PjBy1EpLXPYLiiFMsbcNshiNNqDKgp7wYanTsZQJC4Tn5FdAFTxeFmRfE12AKhq1udXueZG5",
  "key18": "2VdrHV7ogYBEhjNg5XRC4oxPeikZgQyjs7Vu9HtoLnPaSb9S7tWdTBAJkHZmLi4BtF3LXaGp8DcSty9hWEN1wDGo",
  "key19": "QDchhVLRKb7gMh1C1gepfpRC5JE7uFd52yxwpXXMU8KyKE8PAuaCVuvc99iBh8nPbgEAmYCaDFsohm32FBz9S9R",
  "key20": "42DBAT8Gh6jnDGey8vcMx6KNWHkNqozSce4KecwG8ZHvKywmhN357cDuQrVVfRD3NoNm4G23XSQmjB82dh5VoaFe",
  "key21": "2KKwatxm9sAgfLRZWjhhVkQdXYgFxrPjPCNzXLP2oUAJsiKe2CZT8AwQBaR4ogVa9PHzEvxMH3MVxqyuyrSFtS1B",
  "key22": "4yrmUE2t9fxpU2B9TpeqmbD3TjQKAmWGLzVhBcHGjZfiYsoEonqe6nzn2novWPB1W7wis68bFk2y2xmaeouuQELj",
  "key23": "3f3q5gQXheYeBsrXSa3RecF7ZXyL2D348WpqMBqwTcG99fdvTaY2S2An2imtKYfdjjxvs16yNhX8AMvrDSBWaobb",
  "key24": "5RFdr9wBjocDEyrHnUzwNdo1hKEU2AN3bvdaeEK7hNJeJSdud2rZt8C66vcUgPTsd6GcXF1eZ5pKgYm9FSRT98wY",
  "key25": "4cR9yCgLe9tLYQ7GzucpRhKTRayyB682NwpUonhx8gjAazZyqLQrHA1TvKHnqYDPoTesbuSKTUgxXwtBJS8dYQKm",
  "key26": "3npM9ZdMwcBygcAaLuW7AABxr1gMkaGCSZDiJAdowRstYZQ56ofzCcmwTLS4meAsCRpwCpfK6Dh3HCR9F7oBoRMP",
  "key27": "5PsyfzJMkrWwNc4PBg1M8RCSYRnGEJ3Wp44CsixCBgFF1rE1X8p7DdJdk6SycNC4weUoVQ1HVRz7YS2ZdA3vLv5o",
  "key28": "3DTV3rmCthcPcsuyPbT97ZLXyL6qhNPN65j6KmXK9tf8k4U7o3Mb2jHuhGutA2YBnHe6GqULxBSkgfot1b7Q4hga",
  "key29": "5ZYHFScU7CADsFM4fNvpRTZhLn5rqmojBwTzMZkcUMNB7XiPoXxv2EcwZukTJh2GMFN6YF8p2z9cPy39xHaSR7b8",
  "key30": "2FusU6KaY1Lv1oCngZiUKFv3iygAYNQFbhHVLwSyAqbuDKPss7vSi9YATCZXJt7ZXGdiN8QGSJ1WBmc8vDxBoCog",
  "key31": "4jmraeii5pkZ1CzPyLx9DQJCNPvpfpkNtnwCUasRkftBW3RCnvwcCPiwE8MsvGGjW54BgWjzqZ69dT3CxE6qNcDt",
  "key32": "5coLkXMkHFAGc76RJVCz9xCYE6cxBPKpCptM1uTYTfxWNsoVsGr4YYAXFxj7bw1yQPvMoHB8Sto4KpwqPTaCZQ96",
  "key33": "5BMvK5wUSUziF6QpN3AftPEqC7wdnV9SZJRiMgerCaNmrYANAg2Q3PqZRS9pqFz4SfVN265YqECzc8AXjtBikwVw",
  "key34": "2U9wM1Xg4cMTevBdmzPQyvyPyuEdmna22Qyo8Fh9Y7A346pNejowGeg4JD5xryfn44Q9sg8tia862Bk6iPWQD12v",
  "key35": "3Tyu8Qmom9qLzzcoN7S6RKM24SvEcFP2s76XAtwgyMdrp6JSbKFchj6E4DwevvJBo55XhvUygAFrQ4NmJCfhDq6x",
  "key36": "2a3FfsfBA5dn6kAF2VkDAAZ71M9KE5hy6uUJ3NiEhREDhQWKJxPsLWw1Hw5eocjDqsBcXnSVs8Nw2fL37a38u4A3",
  "key37": "kxjM4fuix4EnpQcrYqFoXwv56NmyijiKcWdDMQ8Z5fRhFhQrVXR7RVxLYAmeHJUHunqLvQnpX1Mm5ikiA5WAU14",
  "key38": "MA2oLmNHD7cqoM2kdbstpSMSFVbRauRYssBDfSnPZTppJ1ob4FTb82FkQA9ijvBU9EpqK14oNTjdHFUpxwLWMoA",
  "key39": "5QtHxcAYoqWJwWqiBD9jSLw3ASXMPf3eAPRbKbHE2gFyPn6RpHhcYG8HqkYSFmaq2W3obuCEtLrzm16Dt8EvHwFS",
  "key40": "gAhehT9DWMpw9WS32M41cAsbvV3wRSSmxhMPW9osmDb584GqbQkgsJXwzPrjkAoy7zEeMBp1FoVG956ngQpofoT",
  "key41": "opKXEmyz6WPmEgvnrnbkd9Zcjs4SegNpGBFaGKvACYUUP2JgpVajpvRR6dfpqknbXk2spT48ZpeXqbakpx13a5c",
  "key42": "PHkA6UpKZjyBDcNrxXdd3PsNhS5ehyxJU8XTQWssBdDfDWbf2J9BwwSdmhxBvMyg1PDby1BfZF976NY7VPcZxGJ",
  "key43": "3UawL5JTxkhgfcU69n8Yby1Jg83ZF3hWbsJo2T6tShKd9hEmbjW32D1sxM1Ts7W3LnFEepbeiPdLJ5rv6BfRmskA",
  "key44": "3bcVfShVw6xkT7zFjk1T28JZnwCrzFbh4rqJcoVXq7EvfpunKMYk7JqJmz4UNiZ972yyL1WZYhHb8Qu5cP5gviDp",
  "key45": "2N6FvbhBk1VsCwBMVaSqx6RKVcLFHyNQb5i7w2AoUhiKgPwzjbQ4En7QxSJZWM4xpMoceF1jBceRevYQs5s3gdzw",
  "key46": "4P3ksCv9FrPoBhdLFxvV7cH6GtmC7ByaAjUJMVDeH4A1Q7g5GAWnJaqffYsr9TAA1qL7kikxW3yqkXEWsTVz3Uig"
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
