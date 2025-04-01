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
    "37M97t1dU9BhiSAUz4UDxHKWx1Gp5QNyvB15KAmDgie3t32DVZNd6yhFExnMCTKeHSqE4fGdKBKwvDRjEdLGpwd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSYVoQSaHahgpQzn7pCm2ejJjt28zdUo11JMUTTm88Nfegj4jxgmQpcdYFLJRYBLQMewhZQX55RtBvfqAZA1tKD",
  "key1": "59FArbYSBFqkSpzf61nuwAXtAouRJZEyJt3Mygq6ZuhunnDcmXQUbJ7MQQGpJVTsFNUMQez26EiySzxQub8ykues",
  "key2": "24UR6P1Tx1ZBxF9qrbPFNc2F9rSgWMwLPuNeQmrgHJLrE64SV6EEFBvFrrudBdYvsGVq4X745tB7x6irPYG4MXsh",
  "key3": "5ZawActQDMmGCqCr59Fw3bHD2ETpyYYj93MCNyxjCpMhYcYtU1w34YjV88aTiuyoQfSuBR7J6cnvoLreasXK7RL",
  "key4": "5PsepgVkckZ4Ni9QhndSrb94yjGcsaLWKX6KRFPvmzvu9p4soLAKnvys2Y7STKsFT3Tuii23ohnB6Bs5857qrTKs",
  "key5": "36KdUUdLz5cmDq1SBkCXLjPvt8gMUxKKWaPVcL6KdFPUwLMtVUWLTDL7TpixMHFEstjCUe16qsDja3P8YTgH4dH8",
  "key6": "pXF1rBNTqkUS4sJAwnMm8g4We1y2bYK43tcYE2hBqAs6FdH36ReGLDFen7GyvDQh7TUuJ5D1e7dacrDQtPo233a",
  "key7": "4Mjbi2gFnAgj7guKkM91oKHqUNpmxZuG8UboofA3L3qtRXk3t9FtzG2ddp1bHJ5Uc36syNKGct5Uz5zAfZnHK98h",
  "key8": "SneJyhc1NbiVro6bvGxemhpU3HvEbKZjabbhJmyGSvJn7Y7Sq79AnauQKzoTaoahs1p3d5E9CYv8LDhjLkz3wZU",
  "key9": "4sL5VRpp3yCWnQ2zYKpFop5t2kj7QtPwmWLh7UWfUaXcfWFRcj64T2XWcHwp5rBFC9fE5PnnnGHdC5zboTJXjsnu",
  "key10": "z6qgd7LLfGDRjbFoM2R9DiaHp983LM1vMVePU7643vGjnx2vPGpycma5syoprJ6HLoZEs5gD4eYBDT5No1Nk7bU",
  "key11": "3Gi5y3Zrd3tMznM9snGYo32zhSnK7Xt3UmfCjqW6zm3LCsK2yMFB8jKhAFx3Lh9LNaJE8nRKFYVJok3Jih5Z1QB8",
  "key12": "g38orjEJUnYc4AFvUG8RMRDXmu3eHJPzXGmQRvxr4zxV7ZMznvXaiNCVqF9SgTDbGp4QmJ9pW1DSdHV6Y63ktdg",
  "key13": "5DFEvZZntzKQanC1XqZkQzUJJJG9C4gg6mzFdvqJvknzvmcuZzQA8ZUPacmLyLFesMnRsbqp8KAGhdzstHfm8wj8",
  "key14": "3rkuUzUuLoj5CR3MtdnsYqyQjFTbGUPaEBMiWSyMHQ3hNapToDgMFYckzRarZKgKUJiMt6aypeBtLasZuvXkKpw5",
  "key15": "4DZ7LBmJ5cbi2A8PzWAs16oVTAHbRdZuxH64kWur2EVgVQb6nq7PzLpsnep8tUNhmiVXeW6k5UykTqZegW1t2PV",
  "key16": "4RrQQLnCS2X8WSU3YL8PqBeN5RExchrLQRq7wD5wwv2SCTnvZXsBQESvJuu2Hzw7ruU26swG8jbjccJN1FfoAEuG",
  "key17": "4iZaAFCXfPxqtQMRRFggETCdx4DXpHBdnJbZhpAiJ3D2j7YHVyRjMPhSUnjcXVcaDdQf6o1F46GUnsdDQ8dzj4pa",
  "key18": "L2DMdLEeCvY76sxoWUtzsQgpph1AfmwSfiPgNzYnuzY975cxdbdN8BkCgXNa3PZiYnu3JZfNgAJx2fExseacrrX",
  "key19": "3SHhdTGth19Ra3wKtqxKTnr54qhPHqVGNSQFHRiKnQ8nfrLrUbPK38ogTDafAxJaSbJ3tnUc7PMQg7gSiZm56wVi",
  "key20": "4ihBtTbp7WqZxUGY7EbYW989bG8QE259aT1oYhDNHnqYBmhbG1uJVWDQzdK8s943LJhp6DkNoKgrckPsx9imFUiq",
  "key21": "64S4AYAhofSLGtLWDEBz1sdEyPz5B4G72f1QEsaLPsPX2WRbrKzbPiWH9aR67jTqY8e6277p2djGWmFxsiB1T4C4",
  "key22": "4H3fDrUhxVimDLcA4cm3SrSgMQcpV2WQLHpnDRUaUzzAjqv5AKwKErhv9gND4yjwLMPnFxQCFn8GnX8vxh1og5ip",
  "key23": "2Rivr2xTQ61i2gUfy4s21ea8zbc4fUsa4MaVYMJoSVNT3MrYe71eQoHUPfrB46c4vNwVkwRKYpuBBZ9J9gpijnsN",
  "key24": "4hy51Z3qvSitKzMke5Bg1bwwqQNtuy6rD58BsYd3WzppZzWwjmkdPdoJyxaivNzfRWnBzYcqmc4DjEvnf8JBAoVy",
  "key25": "2Z1RW64EMpksjnhoX6qG8w2rJKBGeGzf3aMQa8jjDhRDHaQZvzjwJMvTQobzVpcYUnKtTWcENWGLKWCKsPCzHx2X",
  "key26": "4ocCKEjwbF7yTptPYaPKShKW2E1gqdgtRPE48vifN5GRrqQnebEYnVPpA8ykcq2TF2dhBfDGUQ1DHKwE8uy9KGB4",
  "key27": "41L6LzwCj8j53bA7WHVeDBsj6XFoSF25CXoYdQUHAb6XD66h7qTMoYdx5jrRVQchJXwhuFD2SB4c76BWYRCoSB8h",
  "key28": "4A2mFaUeuond9U7LH19RAP3bowYgRg7WJFgq6uxigLmJmqR4NcSpsyUqMsmRkf1BJtCR629uLeDthpyviecZQB9R",
  "key29": "3Cs5cUQUPvAaAwRz17NeWM6PTUT5XQ8669RaeC1Kzmz5Ws6nwEn4tLeGbVMovi8GRakMv4sYndYHtxWsWsnXX279",
  "key30": "3VuRn54gr1fdswDm1NpU6cYpZmy8zW1k3XoQS328KhwA1TBvwKAaC2nbETGyVKmyejqkLnZvP2sJEanbHQUG7Ayr",
  "key31": "5TvnANxYeMrkjegcYfMV5EE5SQKpt5rVt1XCLaQswbYPk8otEkrEUMws9s6pS2uUymDmfbJ49SrvemDheN9CXDW6",
  "key32": "5FnWDr8dAy5stXvu1LVYQFiUNNyR188YoQKFbdVRx99yxcTpYejmJkcCvqSMKq1m4xbj4rn792p7bJBfPUJE2puU",
  "key33": "vCsVozYGtCRozgezhmGWChm6sdnfH5Jf8RQb2tXFYKM7NTypZXzJpXt1iN8UYYsnAkwL4PVjCqScSgp647q4unC",
  "key34": "647Bo2gmdXmA6qMNuHpZ3Gutte67CcmoVT12YGuNRq65d6mRG4t3s8FM8Yhs4qDP47gsE5U6rCHMidPgNv2XUqR4",
  "key35": "3e4KRiwhRdFExSFLyfkEG1vv6dvWbRcpWjkaYd1eA93KdcQ54YUmWEqLFkaKkEA2ryghm2sQGMTSUe9LUxLx3HKs",
  "key36": "38DRoCHphPJJunNi2BQoGvwrPA6XXrdZCfQkonYz7qVZXYfsMJDYVKqcc2ppTy84n2Yu3vDA2TqRdMje6eNzofko",
  "key37": "97yZZcJ6JE6JMVU4TiG99rWFVBE8zSBHpLW8NHzqZAwP4dXPLiDQ8RpQLwnSuCXazKWo7VfVzNkFSjT4gJv2fax",
  "key38": "36u9p4SaFUX1PJXWpVotnYMzSUuiqR7oUCbkR4paT51w48yXsk8sM8sByisAALDzYruLAURyXPRLNdGjtAzDcmkf",
  "key39": "2KoWpwcvKnQ7JFQXhTayEske3HXrEPt94MX4kvmowbMZBN9gqtCZR3ieDq5gd8UbyQAQTUDzKGviwYj7LYnQt9Jv",
  "key40": "DUrpUSSetYtLSsjodhYiGHVW3U4Yi2vozFufSMS7bepvUigHSHo3B8SNKdTWSajnjz3pbLfq3qbQD1viRWC5hzH",
  "key41": "5VftwAsfN2izH7Vb61BQxDwyvpcChU6WMqQ5Yn7nBRXD8qnHTjgpcRGSasubwe5pszEnfwes4y8S1DApvkxqrm6H",
  "key42": "43237AAy5z1L5m5sFXzEnR9yxy6iy5hEMHrXyB9zHuTKqHUTL88VHKoURcowoa7tXn4JmsxNPdouUU8FmBDrxcQB"
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
