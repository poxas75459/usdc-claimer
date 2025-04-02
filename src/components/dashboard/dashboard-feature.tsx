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
    "4CotgDNViRnTG2XaUpBAGSPHq91soD2UfmaF8KFXQpkRuq9QQWck8rDhoyxy9MZxuEReEhtoPWEDanEJPmfPZ4YX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25L2hrwf89Yp574CHFmhtu9NYUrtbTTpR5JbBZ4arszRR952a4FHWNSLPahNc82gkdrSLtPo1uyQf9VJVXfBJ6GL",
  "key1": "ABgiy65BzeQz76hzURpcrfcggdwJ1aNHX4zzbSvWtXczGMTzSBSjdbRx2SZNzYgwcfei6utmChf1CMFRJ3fzSfU",
  "key2": "mYBn8iS6V8z8z3cyq9nJLKMPj6c6Vva1eEh2kNsBzc8h99av4PsB97gmCrdSQBeD417sqZBdrdNerKGXVU2FtYn",
  "key3": "ayZoumu8t7v3vwKM4eZZoPpXGpbkhX7w2FXV9Aje41FQf9Ne2XTLPiVPfu6GMbdA4K5yPFa6mqmErR7FY2gK7md",
  "key4": "3NGT9ckRR37i8Evfoiwb5TioHGEXizHsnR8rE29v1LrC6kY1AeK9yRxKn3CnH71PZnEc7ARDqcLfqj3jSEPYxzQK",
  "key5": "3rwGzMFQd2bSWgLnPAYvLxLEuWZW9pvFPfsMj3YPPkdv1G4vTENZfaGJPiTmBrJYTttN2d4vpch4Qqs42E9QTGs9",
  "key6": "5A7SW6CoGiRDXffq33cUK9Xdy5UFVBDFHyv834hngzgRjAiye8L9Ypgqgso8rrWXyqackK9WuSgBhcMMQwLYURMk",
  "key7": "3EGtb8FpYxSpmuvBJXQj4KPbtqBa9NbYKUQAYzGofdb7hVkS1teVbymzFqGxppyBRjw7jnZoEft38nEmHYyXocQT",
  "key8": "QRHavaYZvuGYupxcy2oWRkkxsjPxcbz7YSVATqcNn6ts54g93vmFzxZARvWTH6pquzEUGvk8VjhqV2p4sWa3QVq",
  "key9": "3VKCh15QFJX1R3dg3RfNDoaFvXtsZ5vwY7wFnmybXwo4GJkpb4D1Ge8wGkrNDkaF24uwafUTvHvHUof5QgfuJD2W",
  "key10": "3JMMXN7yjWCTNJ384qGHeqxSYiUoqeGhvAXyT9ZJ9jjUUDUCygGjhWH7vN3BB8oYdLAYPwcCcNoS8XH4hLyqQiPK",
  "key11": "Fp6bBTPWEMMa4TZ2Q1gWZEqvq2rTbWhEWthabsXq6yzBt9wU18KKj5xKbQ7SqY8Re3cbzR27uJ5USRVZUreDzC8",
  "key12": "28Gkx7vpyPAtYqGp5hBTTdaRgLEwdYncCYe1FvFmL41yhHMTGE26e6Pudqq7JzfDgPgtyfQ2wrEhU3zi8NBNvEkJ",
  "key13": "4Yt5MnMJKXR9oYFH8VyDZg1dHoxburRLBudrmUinD3SDv8ERqgnWULZFvRvfUi9F5x2cJQn2KVrd6m7DnkhvUoxF",
  "key14": "4bKxJJvuFPhbLLZkq3bp8vEVkW1mDoxCX254vd5sHgSKTUaMgBCcfdGofQYQT2AFe5nsDcc78Puc3poTk5FjxMYq",
  "key15": "vsMAGxNLceM5VnBZeBhxZP8pCANRwqqmPNdem2uMPp3p9NzsHCnacqwYkkfLx8W6SnhAHAYB6L7RCfr6D86BkHc",
  "key16": "3h7BGV4R5H2dnr8J3t73cbpSbdNbhWS475rcD4SzRYf6rGhDmvn1UBuvkff5hFiM6XMbZ9traLzXeySqgbEnVSag",
  "key17": "3JSat5uKfMeGqBgMQ3xL6kwSbCkUEHpJahsQhX6J4SGyaMtGvXHsNiLvcN1zU6Q59ijPe4LWCvNy2p95432Epxf9",
  "key18": "52K39rfdH35ngUCxy9h7GpyXfDQKP9uCfLRaf41gasRfAjX3VHmiLxomA9G7Nh2mkPhoV6XXhQQ16CaGEEXfSMRq",
  "key19": "34omaDK38KwHXjrD7oFAcnwnFJfh4J6DzgCfr9DdPb7iNhchSSTUzVk6FSFc7rzL729js3GpC5fKauMXWjYXhXmG",
  "key20": "3HLCFEd1BtjygJiVo2cN7XrVrfUeVRu5WD51hG3MWjHmXDVVFmTLgQsaSrctv3LYa8uaDakEkoY5xr2K1UztFyxV",
  "key21": "3mg6zXyGEt967ZvxoNJuYf54K2QadVYXwpYt7e1K1XjLurKXGRSJUSKyzZMRpTETpNv8rDv6D2jujtnow1MDqQVE",
  "key22": "4X26CFjDE3zD2VFXxptrjjCAdbBHvuf35sMgxZmvAumoisqeGLFrefhkvmh8c3e1g4LWgQVftrfvqKVEfkDSZDHS",
  "key23": "4spHhQjNK5QtJHnoBdfAs1EDnndUAAWWwsR8KtgoALrfFqUVRqkL5qaC2ts2o3kwGtXPgvtWSpZA4bejHudapEGT",
  "key24": "5xarWeAm3Z9CpE6ttbuhvGefxwuZS98oxyd5d9iWwSo4EHQwrtznkNqGaHamAVHh1MXswrnNKZ8wPD9a7ejXsb59",
  "key25": "2CBABuGNNEB863oLvADshZQJj6ok7eH7kaQBPyXZ5dooe8ubXsw5nFrvAMkjYY698qjvEbJ6DL1c31DS8X2uS1BU",
  "key26": "2QucyZfmacJy2G4car3CqLV2SDHSa3L2fY9RftFAtod77LibwU6ZBgkPg2XzcKda4QXtAV32aUKaovMRW6DTaj2G",
  "key27": "5PbTdt9FZoQSKwejk7wgdWmzK85h5FAkyvocCYvQ9FeoYDsBEF4rN8bcCZpMfWs18zqQJBE46JWanzkfWU7zPzEp",
  "key28": "2B28ph7Ppa5oy46uDV4kPXQLhuFbjWN4h4k5pWrH8qQtY4G9VX4BWWeNUtbo3ENMiJmkQuhuVUr9WNYW1vc9APc2",
  "key29": "4vDnvbuMVJfD8cqWqr1hzFLgZrgWta24DuxGSg3peuEoGAv21ymtK5dBFMBwTt69ovkUHcgQkbsCpbUjAGnK5nu5",
  "key30": "HTC98QJNX885A1ytQduEZNGN1Ab93B8vGnvWgdMBz48Fme7wWZbkzcLvKtQPRCNJF5mWBJWPhxAi2o7qqgipZTV",
  "key31": "4jW6f1Uz3wEv4q3QGa6azfcsHen5rLDj4CAJCyQY9ni3xL8RZ2rUyPCAt6x9jd9KBVqx8kFvYg7wABjbY2hDmFxb",
  "key32": "dhZs7dNfjzdDvxxUEJ7neZN2fBjeaJmHyQe3jK4YPKR9t7SbRNmBRwDdvnnHHzE4jjYBc7ytDqxge5TSynvU6pC",
  "key33": "4DBfdfkQfjwuZK8YJrQStS5r85RBZNqwoEHLkQNXe91kAmh3CE3VjXaqSdZ9pqofCEzsnTuenYx1t7fx3vCmwbWB",
  "key34": "2TH39ebw1MiKAn8j1Uhn6JFYff2oxHYwNhKQzibZcYf6SBaPsgA6Xe1GkjxXKEYx6iF1Y9Ltj1JsA29LM7U3uMgZ",
  "key35": "toxyYyb3cRUwRuMHbj43viFWYij5YPzrAs5rQ542uii38i9to5L6H1mWBmGk3WcRJ6cdt3ufbbdWbuwtVHTrEHD",
  "key36": "3XL3TGNCwUBw8CedEAXh5MPDZC1TtqRwLgs7tKuRzHyGKweVLbo2DrfVBJUP2XWN65BWhjtW1qCWMW85qCiMDAkZ",
  "key37": "2g3dW3qBhDZZ1aDVCuav6GAwB9FLV3pmyCXMUodvL1z4cBgiR2dfDtSh5YQ1d5N69TSY5paXb3SuTRrb2gSDrPMD",
  "key38": "5eaFVr6dcLYcqdW8fQN33Bt9VZ1yuhLLVQp29ygxYbX2ySPsG4Bk2DoY8o5xiJsW63MzXdYvCUPmsAQYVpQP1Gr1",
  "key39": "4S8NrU7uq7LoYjBU7MgvqMR736VwPWSF9oPnUAfLeqPAqCNu4Axmq5HB4W28n4zmjmMyoLQ94XpAkxN19uZ4eBFf",
  "key40": "38YB8bfAZWPLUKvnCo89Pf23yE7qZmDQhiaw7sRc4PHgUdW9MVHrMNqimktkDLg22EcysMLmKNvFmQXB5Yyh22r4",
  "key41": "2Qh4sjmq8MrRmtpjzGHFWdwiBvC7kiif6KYv3kvBUU6pU8uHWWQAR7C6Ny7rbJWuMLDrA7DYa3dTsi6VSURxUWEB",
  "key42": "24ADy1SRUsqyrMYvBdC8coSWSBydFFozAk23rdGQJkW3DfEHoFgEoKXvHcGzcpRv2LVohECSvJYfimebq5ocVD58",
  "key43": "2yBsHztVN42yvZ1uD7HquMhegWAS6s4wEhGwUqtUsiELxn5vV9wZ4Whmu1RZ8YoFwHHP2AHbVWDahPvsXGth32Lg",
  "key44": "5jyWDdrdrv9f1PzeNhKcvuVNS5yY77UTwyZii83D79qosi4ez63MwWQg8e3xDrL1FsPP1Tndgiv3peUA4tewRqoH",
  "key45": "VVLpMJdv5wdY9bv6drcFiHyUfPHbb3zuA84dzmbCkypi5rmmh2w9YM4WAhc2Xfr74yxH4h5cE9HRkzqj6AXfeKF",
  "key46": "5tz3bWqf9SyYfirXM4q5oRRXPx5b1dAQzFNweaPxAx9yyLo3Yhn1kwnWKZhTkVxHF39BCa7itevyjsed7mE9dud"
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
