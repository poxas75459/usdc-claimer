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
    "62awkRCMZLTPejmL7f4WapJci68Rwzke1HnoYZqY9tteyHmPR5k4jaygv8AqxPdq73LqeruPsTgvzDTh5QGKFxXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGxNTAJXL9mgFfMuxWYTVbj4c5AfWaWw7EVcbaBxYCmWEAivLtxpFd7XF6Y9Hp45Gnjz1jhFL1NKNcXFemyu3PR",
  "key1": "4rcnv8ZDaqVH1pxpdGy43MRZdcq2jKU5FrFVM7WLhtVgPLL1wdpvsPT3AR1XC6orbF23VBG1EWDHC5AsPmxxPyPB",
  "key2": "2Bi9F8NcBuaXVzqEKu3QwNLDrEcg6QqM3hMGEaB9A4eSL5EKuVeKNExLrWM5zY3tZKoPV4fiNEswvLjB6P5ZzpCt",
  "key3": "3wTG7mDwe3ssg6BEkY9aZfN7KXRsviLMkCYtEDQdkrBtG19HNN9TefbPPtp2y7mCJ9ADWhvajyPTsZ8hkfffcMsY",
  "key4": "C4uKjyoyUrKErmb4i8Bi9zXs4ftoPvPsB6GRnq2V31eZXyqhEhRZ74CvogMSH9Nc8z2nUQY9ezXc1jmEVJYbKog",
  "key5": "3cFV8hJjKUzvApXXjT2Z2EfWeG4JTBY5FoQvrpqTmAanGyAagCodv8CRhsw4NXNHWpafuz4yXuip2YyV64MCbZGz",
  "key6": "kfoqa3KnyyDqupzWmeA8PHoPWCKLBz4nQy372C11Kg6zuTSFtZdedgWVfrRBEXMe2g9esG8wSZeoBz1TkuF1DMJ",
  "key7": "21bQiJawa6MZjY8g37ocKhULUNgP8rJuVV44aREHYMNtPbiwUraqNbZepJkHifiP1Cp6d2SNVRytgHphUvFMPorw",
  "key8": "5HVecVLB7rMc1DeswT3uDx4LACQv3rRzLtmeRqWALBVySMTnKy4YdfGMiTF3bWXqykBYvLitaoXrpj2uCSS1dZWN",
  "key9": "3PLASNRLSwKeXicPCJgbdNLfe9MR6YtQmsDE5jJsuZthtqEKgRHUHemUjL19CeVYVWXSuguFunJFMLbWE6tG7FmH",
  "key10": "3jda9qKXmvAHGsFvefAZh1ZVL8wuYdu8wjhonedpfryF6HtdgXQavqLztKUyMETgro6ed8ehU5ccPFc5wd598RyE",
  "key11": "mjXtyf3tvKmKpVTVDp2d9TkPhTjWk2NPiZTbHvrhwaYaNYjpakZTxVwtY2mwD6iJC7dWUzR1TJCuMzZRTu7dpp9",
  "key12": "3i138nDu8nV1YuCFq3zxXq1SzPTyXSdChXcdhbiTywdBiaapURg8uSdqHL8kSbNFDhAy4B2ks7gqL5Rgyn1USFKJ",
  "key13": "4DBHWjFsgTCZuNHCgCSjnmEjEQQdkgwacEzoKX78Q5fdgp5QyAz2Zy5cUkfuoKZbG6tC17EuvZKzXLzqtZqKELEm",
  "key14": "5BtfAKtd39MkztjqHpJ8bVUs2Qhf2BUwbpfagjusbRpsG1R1GB1tg6xS7SgeFs3hSyQXjYvJCCoMncEGqQeqLn7n",
  "key15": "4FyUzzvVMsvEvMQWfGoNkDaB1rJqcN94MZPM9b8xMoiktCGuoAeksXKvnFPovtMwzR8HqY2mxRotj2i2ikdxWqgp",
  "key16": "2DPNkLL3itjT3awCPrhRL4Dp58ZjxYuu8Fzuv298McE7a5tZtHbeunraVVuXbGqxyyZZJEdyLyoT6LWiTGAttQvY",
  "key17": "3M3e11bbVmW27Dwy2SW1Kr7uApAXJ8t5oXUYhXv5zh6RhKdgq3gUoQy24WvjGn9esTM1H4qEu7EVfRCuYChBEJZr",
  "key18": "287oupb934DMrYzci15zoKHL7xXB14MmPng2Q7uuYYB8QHQLxVpRvxAhdF3tpunS6uis4wLs3gmT7VGFG6dd2BRx",
  "key19": "5dTRRykXJeXd7CTJSFq25uHE4rmi89x1e8LqtTX7bjg6Y95TJL3GaHPP3E45jwakRppveAs6rYhaAfN8E5D5RXjS",
  "key20": "2MMEeZSkHfgsTBTbD5WcjmpXLgKurksNAgYF6thGU4zLvaEFhcLD7pjfUNCYJCWfb37mUufp3DZtKKyCSCxzDiXy",
  "key21": "49d1fcrB5Wzif9oueH5TEfU6XRX9d9kEHQbbsN3juDxA9FcVtbG8htW74ev5USftaQhVPB7rGnaDjwVrVS6xZ7qK",
  "key22": "5md8BgrSaxSUZftYbtTNnWMEkofpXJK1wtaPDQWyQaN8u8eRxd5vEayxz1kQYhzKEhev66FDXoxwqGdaYmiVAUUV",
  "key23": "3MaDxzyihJuWL6zrzBVX4BLR3CoAt4hQ4jDarGyyC4F7BBzfFduWksYw5a5votVECSqBh3CZvApATuU8WP4d7Qzh",
  "key24": "2yGekmSBjRqjVQe9eEbf6aM6AMNFnSqP8Au1AVQEmK4QFu8yc848jtc7mE2Q7L8uvmxZxMgs7SUiJsxc3KJACAep",
  "key25": "37vqcVqdDqGB4sFLHEsqKZTimGsmDi6j4tsRRodztr1foEb2g5xfVqkKuX2pQRwzWh8Wud197Eh7txqeahnrVeVr",
  "key26": "4Wo2jkw9k8LzADuaqVvAibijiWDHwBthkXEBRzH5FdEuuKtstneS6kRotRbVGi3bL17VYDyvxVFXmfNCdEJ7o9Rz",
  "key27": "4FwQjTFnTASbg4WJUxEZh8RyCVxUU7abNbER2JrNYJesN6NKzfoSUdzUNg7zfPu7w2j8QoAEpM1SdLnTfv6NqP45",
  "key28": "5QP7212M1sSE8Z1amYFTkmZ8THmuYM4bdcUn9TV5oKkG2kNLGUtpc5nTxHnbmxzz2B6P8ockj7DnyRPXawwD5kup",
  "key29": "3HXxS34AkcRhDFjpR6EC5s8EJuGgFuP4U8ECwHdUGip2zXfQEio8e3bFtamSmQtuFAVdKUBLTXr24J5KLf6jPf3P",
  "key30": "7ZQgLEMLv5XmH3GrKLzJWZzbS6Tx5rBkvJaBg3TsnfqnY87zacAXeyZ4SaNHuReeT53LJJcyYL7WRq7hYLJx7gA",
  "key31": "5sc3GDkTMunXkviuAFCrXCpwLvgWKKRC4h87erEscSdKcxyQJaRuQA974ycmbyik8ggMy49yDd9Ezdrh6Q8B4Aw9",
  "key32": "23V45rgPVhDGdz5EQQ7hJkMtM5Q3ZECABsvvEvnyTJufnKEfegRX5ACdpVQnd9zp7pcBkWBiXWGYWEADmoxVQrB9",
  "key33": "3WGWnbhU29Vm4rQKnWmdXigAjGxbP4bMCNaWqbQrR364UBi5u3TrFWGQFgsA6Pz76vgyxz36gYL4yyR3r1SNAwRZ",
  "key34": "5tvQFZns948t5fozhzwmSxeA9a2m5gFJLmvQDcpFDBHPX2NuDYqAuT8rbbrvMZwrw9nvA4TWdDMtSDz7hLuGLBN",
  "key35": "4sEbZC6yi1BVFXU1FBJEJSHuJoHYKGAunGeDaJGdpSL8kvfvEntGw5ZDY3fAmBiHkH1FLKeXbVPMF7pk957GT7zu",
  "key36": "3CKQyb4GZresMZntiUyWE5zhMJL8Sus864pPj765FJLBhxq9x3aUZK3FeKPPBvpC3e3ZzuzMfw7n3mMB5KXQLxue",
  "key37": "2AAMfTA2E3d5vkLx5zxfXgGFDp9LTAjcQeJ2MwGydYmNzG2itAHd3aF98FSz3gFX6gvcbyefqECLEVYU2d9efG1a",
  "key38": "gwj7ovjoNoSvybMm8kJMynaBST2HAfhqbWjiGpHy1LXjFB2Rw9GvNAY9tmDnRKVZgDX667jNtSbk7W86sx4PJiz",
  "key39": "2HRSGq5SRMxmLNd8eBGFnuWSZ5WUSBV92dNPTx3wymDyuAjRv4u3PQzpwjw9MG9XFbJmQndFPJUXnLXgFYxtfFNP",
  "key40": "21rmERNpVYF32nEaXTaLgEWwvgth8Zc5qpkL1T86i2VCYc1BboVQbXoKvkriaGBqH3GymwthspVdWaBctzJkRUEJ",
  "key41": "5Kf2iKQX9GFVWUWKYXDbecfHrzzXfV6FJFwDRDTVYYoPpddaTPmAcfDWh8QsYQLNVvX8ktaWeentUCXu1MhBwvUc",
  "key42": "3EEdT9Mb8NsWjJWo16PQCCCjKk5CdrCMZ1aBmhcCqgKYTfXqkXgNa7mQRPb6Vkv41fNZXrz7RcCS1cJbsQRnk8c8",
  "key43": "3MiLZKcxwDEnCaidoa1gL5ZMhwgZwYWZ7wHwo4iaEHusQ5qz8LfK5NU1svtntA2MJgWWMcwqpcjHmzcYDQdNJccP",
  "key44": "5vr6Sk7baDLQ59zbHNf7NX4nA6MuoTG4Md73MoViSSJYVSjLNQZtY6W7xccuHSiwr3hPTsQx2prVFQ1oYS8M9dhC",
  "key45": "CNtGLcvig7MmDabwqTzq7a5ZT8s4wfSSrv3uYUQTgmp7nbS5mwHFVEnoskmTZHz8d8zvm9zKc7W3LRLu87PgbiC",
  "key46": "vJVb8VJziXaX5GJrr9oq5RQuo91DoZDK8VByddgDduZ7kQpRe8QwqXWapRcfUfxaxEDqHpiomzQWcomTt1rXV6G",
  "key47": "3prFqoGtZrDWb5QkxT7nrDfdN5b93AkUXCY7XgYmH3a9Q3ouN4YQ1UNuizL97A6pxBZzjKnZzRgWFwCN72odsNkh"
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
