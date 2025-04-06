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
    "2Y3R6riUnJTkQQfhXQZak7dFxPAipUCL4mczE8TyEXD49gUdeZhcpMEepjrJbxQsb6MXLtKjtEZyJPzTE7kn3853"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GYjfvGse5oZ79E4GGzd2Cd8yxpXmAaSRB1d7ncrA6FfNhoZ2hyjWNtVouzRSkEvvReM9itfsJevnya5JkQbGZud",
  "key1": "5tLgx3fodBS3yuvGbXpfPMiBkCSHJBzRaRb822kHhqV1adjXwZJCNbPuJPAAi2gdEZgew79BtpoJkZqo2BVRLuGG",
  "key2": "4qtrgLwWCbwX3DDr9MqQXBejxic955NRFXz4C9c4Fz88j9NF9HM5GKmSNpDebHXvHL2FCghn5W3uHyQ1AfCeHHwi",
  "key3": "2DiPzjAeDTEasVZk9ABMM2mGEAZRMXqYdxwmWo5Ghcven2JkvA5XQPtCQBV9XYFuiAfNWysoHA3o5T67mqqendAY",
  "key4": "REoYw1cRM7o7WtCGwzRtuqkK4LyeYxPH6iXUfmTsqGYrNaHzy8UjGKHfVpcpaeaKAHNKhxZQt7kfWs9cG9GpRsz",
  "key5": "2o9DC2wQ78kwL1uocbEbhjfQUgx33VigQSDhJUYKgUPjU75Gj5o9LxrXXks6bRnycqHY1nW9kXXjQG5JGEZb5SYo",
  "key6": "3NCycenCrXuYLUB7vosRyigEdvkSrMS8mdT3FvH7oY5XijDZfAr6VcrctAzmm7tvMzjydiDTad3nuMrJLiy5dD79",
  "key7": "46SbXpwDWCGF7MD1DVpngs6GeK1G2u5nJwhSXsvkGHwx5Z9C1KCQYKL3eS5SBHhkDjQmPLyQtjSRGbt7dPZqycMj",
  "key8": "44NvAWRxQKaW7A6ScNaFX1arJPCXgVUoYsKKT99a7QZSJ6X2MnpmRVCdmcK8uV8gCVN3oks8QwN79CCGy9KmKVwS",
  "key9": "3nEKZ733rWmqbB57gdfBi7dmP4Nqugkoe8rQ9CjguWFTuZv2fUpTM9aDBZbmzJVPkTjuMjdEtTLHozQ5HxhXf2jg",
  "key10": "5pFb3DbRBjkx4xghBKYRvZVV144FCVR1tAdgzvqxBaYYZiAASoFr5oD1nKYxG1Ki9Fq4pyjtQAGg7NN6SyoQ2i96",
  "key11": "58bovaHsBktQzeeKDvCDGivtKprdJKhV71z2QqQunB4vA5gJdqs4UyoD2S6tG9XNckgybQJovthtaxjzVW57N1RT",
  "key12": "58RKDrHzPYg4uJhJrEoqQ11E7T2uBAjsc4RowNkhYfQLDHkUTXvRZwNUK3DdLpMo4iFZsg51DgjcFjKb3zQgvSh3",
  "key13": "4eZ9f2UjenFYxEQCDf2WUReN841CxqoMciBPCALuh4f9z71YiQGRvZbMtnJAxX83TftHiXYWANgE1E3Ve7TxPeKg",
  "key14": "LjrP1vB2TJArbaBYvh13WdF77YbeZAULaitMncZCVDgHvFav6upiqhbKCerVsSs7rKKoBoMm44AZGdAxHVKWJxn",
  "key15": "363b5LqqK5BmdXmxVjykKHqstG2wmFc1L9mxXx9otcCvsAruLxV1rL9yE38Tq8gW1WUm69LYreK9iTRvfGXtqeTk",
  "key16": "3H1LkwnL9bTwXL9xXRj2wr2Pcc3pHxqkCicwohJwVqb2FNsUeH8gB5BcKehz2i8h86FjhnfBbe8FyUdyV7voC1YR",
  "key17": "52TDYFePYjofTi86e83zdSUy8Zqv6WVfnGFJG9PvTPPEmEHRigGP4MCLy1yTXZrfuH51uuDfMZgLNhFuwopHBWK4",
  "key18": "5RXENvom9Qk7E4HykTHBSE8Zw2rmE2eXcaa6YQe1gdUN2B6yjEK52DdYUbJxmg4Xok7sK4ewBiALUMktXFtkebs6",
  "key19": "3cs3mGFVkpJEZeboBEGxE7b38d7UTbj5JGTj3kydYmiWdTZqJ5dTXPoQQ7nckUQ4x2sMN613b6RY9EXXVTKBei8y",
  "key20": "4RVskEC7bQuvujiBwUyxXptS2btBDibJMkH4Nv2J8MdbMN1L4yXM5ZmPAjDQjNGbqjqvH3xKx9t9dob37LxGPPRu",
  "key21": "2C3dWggbyQPTaGdTH2n8CRmQYKEVjsDhhoGCUm5vSubnDJvSzKoWSRyDMzFB6R3CrqSJ4mVNKP5qCEPcJ3FRvskp",
  "key22": "2RzDEPZgEMaWsk5XFaDRPhUZz6NbFigytqsjkPHm5JPGPkeWJfyVjmM4BL4pxYaDvFAUo5gZ9XEaE7yzmLyvpzTD",
  "key23": "2snYUfBSZShXCzEhLV2em7XLx83yVnCm48TyrehR9PPEavHjYwY97FWhmzvu1GxnQxPNsTUDLdJppPZt9ErSnnGK",
  "key24": "2mRDwbFSxT1UFQNJ7HBC8EXRNAgkwUAqPzdbpg9HwuKNxcTH8XWy993L72Uxg1K6EsLGa8TarjCw8X2winkn9b1b",
  "key25": "5ptKF8s5qNZfTB4hW14cD4wSuqFBQpULQ821JU7iiZjxVCPk3C6m9cNDHJRqEghebWGGXpFARpy2E43yxxTGoyMX",
  "key26": "2CGctemSCrjQcjxBddXqvz7eB5JTmN5BpwAzspVcaeJaTbrJ1WHPwJkusbDU7iKM36LzYegcntmWze4qaHgndX3x",
  "key27": "5GJLVoTd6UEaTp9u57Heo3SDJJKD9qoKBAtpLmtHrWpi1Xfq5JRo6SifJqWkZvS1p8p6t1adPXAF16W7TJas4EGk",
  "key28": "4PkDpPxRxG9xHbUEksrX6yybWxFXXLvc9dEGuv3pusVdJ6KcWErqYFBxQZxdTQg66UQLp39WAUtyV2nuGgg7YBXX",
  "key29": "X9kwNNGs6Nb5stDfbLR3kUHLkpEYy9YVSCQBXcKrMCLjE2WZRkPFZwRjdLHFKAehHjdgKbzbm2XHDMv4UGb7wQ3",
  "key30": "56ChujuSRJVQXKNzPbHkPa5C8rWsouDugvThYEURk1zQuTyMAoXCT6ynakuPj5DnFu45Q81UsVauGx6cKpikJ2Lu",
  "key31": "249iwSkkjvjk7MPYxEcDqi8wgovLf9yxrZrg3ebTsFJgq5SDB2ny6ySXw7vwv6HdepG36N9k24VGCsxe8wj9g5RJ",
  "key32": "fbQm8i5ftoupJqpPnYB7AdTmsQvNYRh5TyucGgaAGR4D1Wf7xiPHvdcVPgsikptGznrkEKYFLJmFnEeZ1y7yVkP",
  "key33": "41q56JGLaJBPMqJr1wf8JckHKW1cgXUChixvQSWD7LxSzESYM1iVrgWWwiJAsoJM1NCEhcYYbsvL2ANQYjoxCGT2",
  "key34": "2D5stFeG5uhqd5V4ftjPo9mJXRDL5Yya1MxQF56mFaFRpRoKpToXPeXmhYFznU11qmL6F6NmX941WwuECf3evjs",
  "key35": "4Gm79BS2zenEAkKvBJpx7UePfgSbL2WES41nE3xBotd45DBGrfK63xeEBpjBTTMrVqV6GJBB2mCfzVxG6wD1je9S",
  "key36": "2Lf66dkNHk4KfykXP7wGUtj2P6kQ9JpUAzYDSC6hiN8goC1LV1c2Udw4JUenoz6VKmDXLhui2KrCcW92X68rAV2N",
  "key37": "5mNnvEPS1DNDsgq32QF8VdUPcN6G2JpiPkshKJGmSrJbMxpCSkYUQTTAAzMXoSPtVKgWq6VVHUpoenSNTsEgPNni",
  "key38": "3avuo1eAE1c4As6A1D3UzJddHF6bm3ekq4EwryNrje7QEWmtvM1tU8MTbVevq9KSKUmV3FUnVnUN9gERDYwjUHT9",
  "key39": "SDtg4d5pMxeYqUYjaFbGiyaCjAJXM4LDwQVD1wAw1dLHvLL2rC3ygztDJRTiFANzdnijKASbZR7sPWZXKzFzKhj",
  "key40": "5Qz5rrjR3UZjrKUTkR7CfFk3rgvZmszMwPLayXY8anCkrsEq8GcbR9NQoKz8oVfXNUiCDu9vJafDopRHamnjJpKW",
  "key41": "3TkgQhZHMR1c7CTGfG7oC5rCRKRSB1VpH8FJz5ix7ZDJaeHz6wgutCv4UC6ByjSaTBBQnTqzqt2QZEm6exVhFAF",
  "key42": "5j9haz52XC1PgeyzqurQHqQrjLbYntNYFarEiRyaCxgikpxfSrH6mrxFtH2ss8swBbDun9P562tzR7tVUk8LQ8uQ",
  "key43": "4fUa1Vj8Wzn2ukKResMLnfhfbvSmTxLMxBHQRmqYYn8GMxQL19VMzoua1iMRQdwzGevRhB2EMFBs2fuHJgpDjyxQ",
  "key44": "24C2rmqP99ZEqpmv86ney7RWE4ewqF8cNahhNgywH7d38AJxBZCwtATn3WxVokLmyJ97ZGXiwTyS4xbujnmaMjL1",
  "key45": "4Kmy6k9yXttzVzVaeEA4U6pAXBj5RPQusFDNBh74EcN9t1BQuiQZVHy89USJzR7md82aN2xwsACAtjxDhUyfMQcm",
  "key46": "66XCYYRBZKa2LY7HSQ2LaQF5TUsgFxeKfW4EZcoViE4R3fiE11oTyV33cLYCX43p6dB9V9Y68bDAYuL9LJRPebj2",
  "key47": "i7djCFLARzZ3Q2dpdfHGmFZd3TqxYNh2FX5p6YijapaGaNTA9BJYgdkXpvD1TYby8CCwqFNWGsnowrmhmExru4h"
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
