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
    "3PkSeX5y2af8w6Henv1aSxDnnkm7yyRAfFoW8WHWAJ1uYjFWreneFK7s3LMBNTTWpmg6ChQRF7FmRJ9DuXAMPKjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436iN8ZkG7wttFo2QVS7cdg4k75tQZ2i96dWyER4s7EgdaRqD57yrQUE1oeXDmVXvDD7wro7cx1m1JybqdXz2bck",
  "key1": "JEmF6DmBBHndDg197kqPfRNu4L4G38z6u6oxr1ADNgQ9TubRUTDcmSe9SGMvgWsWRR2dNkvz4rre5f9tqmknG5S",
  "key2": "sgapQo5Zh4RfR1qaGB5VBzJ991UCqYFARt7rJbsvoqHptNKWjTGmkUGrAX8b1DL5tYRVxWpMRiXzZxcEPz3kaxD",
  "key3": "22onnfKhFmcpyKaLTL4xo5RgBwZX5dQ1br9Kg51Byf73YkxK8szGmasdM33tuYKpdkXHh3t9vn5s36ghefVmPwsw",
  "key4": "679gmruX7gbZt7o6XCNMpvziXHyS6LrRV8mkPKfBNuDGEMHVZKx32MhKk9JzgKGqwW7xVXRYkzXic8c6DZJEXZ9v",
  "key5": "2unzFh3kudPHJX9eoYe7mvhjuvfg9349c8GVQbhnuhV5GjKh8dVjKB6q3C41gPXSCG71aYRoqZj5w1iFuZ4LJsxh",
  "key6": "5G8T9qgeZzmVmBKodnuK14TaNJ3PQq7RAUbhE12VYNMRQMXvNaDk8Vf5C7XGMXxoSPmRtemvfF32u9NDaFthmZ8o",
  "key7": "61KgXBXrW5AgjXzUx16g3bNtyUm1EijZAXSdct8cdknMqCaUAEZVbpxLUQdHEu8tA5HciC1tf9x5hCNSCGdHNbsv",
  "key8": "jX3NEqAVpEvKZjkaAXSdiAPvNaVqQxaagTnxzpvsfQe9f9poACfU3o5rKprA2WjyegtvDqfSPYQQRC5uPX4xWmq",
  "key9": "2HT23xoqy9woGwHVTb8kYnmv5vyV9pnP7o2BwCfVBU8W1CdYCbxZqA8eUgekQmrdEWv6K3uwu9suQCWNqULZERGa",
  "key10": "3M6B12KpHKMeDVxdL8T7Ah3zyCSCPeLa78ToGTxLUUeecW2gG8zygw5uFBZhUtnS3qLCsnxnq9XuZbbVMBM7rMfD",
  "key11": "53vqJDcY131kujJee1TcT5CnGwG6BJQ6nhhqCWVGjDm3a3sfoaEqmet9q3vFpZ7xfEWggHLyQdsgzJjUdFqDiKXk",
  "key12": "4L7K1CWpBCu1mWT9CBFs6FsfHXY9JvdNgz2TrcaTcgsw6CBCbWAPJBuAYThPQm7JQ2YKxFoCxQbCE8fp86RoJ5dM",
  "key13": "5hgqBfkLFe1rkA4isd7Ms9x4dJX5P2KoxbBQ2r3bTuCG3CPqRgg7VWHdknVuhuXKz2kvKeVLzKmmbSXamikibGBG",
  "key14": "66miadJAQJC85Ch99WtuVb79p2K8TkkFhbnX6XoQMY37mXJ3EiNSG7s3RPM9xGLGNS45XRfHrFaFV8Hm7x6muXVr",
  "key15": "5UHX7jwkonMiWUJKJdV5ysK2TaGr5xFdC8W9nR1bTCX9unhXKVf4FuBt5kHf6nuekHXWyQNKbQQjwvvYrWN7S8KP",
  "key16": "4AjfiitLZdLppfVEKPdH2x4MeUChxvBqeXr6aTkYHnFQtx9z2cdZbBNywpTFmAtJxyrSPDzfu9tmr3rN9yMbCcJX",
  "key17": "3MK3ptrujLvKVHFeJ6tFY5n7QrQB37GkyvEfw6Gzy9UrwMS4cLJtQCEHus21ikqaWYLJaCiKkgVs1vuVyXvcLxoi",
  "key18": "B55KgXWZNbWUCrQr8HgVK2TZCCgk9Nq5cY2bZaDuWn3zvioeubSy2Jow9CKPqRZkzKgYcd5UYuHqR2oPKZ1dKi4",
  "key19": "3U9VRgx5MyzE3p7aw7GX2JPMi6kbXqrNGd3Hw1JCgMtqxKk7Jp8aCNpEBpxqDRkLscn2kH3mGF15unZSkJQz7sgu",
  "key20": "569gcC857AhGCJ5hHp1idCzDdtYWd89f8Xj328UxYhDvWYs9ARip4Po2LAwiFeU6EanvTfeWM3jyAdSgSF1UDzih",
  "key21": "4YLQ4QPeYtPwDTfptFzqpSvjgtNbm4VfAdYaFzGw5zhC2UnKgU6HQ4f8DgxDKeth21x6GQ7EZW5eNrqNnt9re9EH",
  "key22": "3cipbUydejLWeprhiJBCnjfEg6fvF9Jpqm5Gtnon64eUGp87ue3opg6vDYwBPK3HiN1zWPNjiFz76KCpRy7H9vFa",
  "key23": "em1je4NK1zbzMi6EBk6bUzz6srWxem3yRvvRaVW5gTkRyS1QQP92xxomtdQh8tyDBJU4m8GRZsSDiuGaCPfn7My",
  "key24": "34vwFe2h7LhdeWQ7AJWrGkqbzEQ3yxECBEBAaqRortLi7feJe62WKAQiFPAtna968Vn51KSdsa3j4RqsfzPQas3z",
  "key25": "5NVZH24msNCxnfNTQY2E3Rj3xR5wwZ1Y1N8tthEvhZGfUKgUuhbunoZgXB8KTey4ZKKAVqK9TwobvnRnETtPW3zK",
  "key26": "2QqA9ffGzUN37DZEGZnAYbnfKt4eUD7KgCyeLZApJvGmwCUm3JCVS3hNGR6R8soVcxpCkx4CC96zkfkXtdRCDkr2",
  "key27": "4DbxMAADNrGDRequDnRzamLnCrX2NcmqUGZRzGp3M4igqopw8AZupRq3NY2xZN7Y7rzmn7xiEJTab6qYWioeFiyt",
  "key28": "4qtd8EHxKvRH2m9EGHDRGcNyaiQTqLJKymDGaApAiL1hNywuHbdtSYEYSnMwhyXgBH3kZDFzEFPpydRXKkQqqy8b",
  "key29": "NGQHfA7BqMJZyLzcn5wkNXbTTSaNc4oJRes6ByLyUYGHKzhSBFtDXnA4TzDkmS4hpiS5NS7vhHnTBkW4bgLAuTa",
  "key30": "2Lb3m5USFj2eDzj3CqgJEwuvX9XmT4W2mTuZzrsCtjxAWsjcDpFmoT1zcopNWbB8vsxTKBLTAPc6vEY6VPvsaM5i",
  "key31": "5EH8igvhCjj2KL72ShvxdgiHTVfWcXJ3JHD7fQYKtn8WkL4bGez2Utz9B5awMZqCDdRAhg7cbftPPSpqtPpJ7v9A",
  "key32": "2n1EmKQ4rhXDzXVtMJWWm5r1dJTrhevedpA3GEJF3Y9xUet8zKcmdKhiRrdp6Z1NfasnFhoc6WoZti4W8V8B7X9k",
  "key33": "3SYpB8Y91Jv7upXkZtw1vLzDX4hbGZUFHHMkMGBKnZrcfq6TnpJxUnPTPabgqQnZZp5exszzvSN4MjtTxcnXEy3B",
  "key34": "4pb41FnB3YYYsmCpWvVmfK97DZRPnEUPt1HQAEKTys17hw8WG1DJtsvA4QZqtFyyfR6D2n5pydbMQQLeWFnsW1nX",
  "key35": "4vkA4ngvrajEeMymMfRZc2MAgwj7sthXqLvGteuAp6pN9P8Xud8zFgoHpJy483YWDvREPAucfZ2PDjHZ8JFTnijh",
  "key36": "4K5rBaaxQ8yND6TqGywkFSMB1dPq7tfB6gGhypECu8V3uD2buAhtF9QqANcFxyTk11StXAhuk8om7o3v1hcztsRD",
  "key37": "3ANkD7wYEPQpDd7qt7ZYgwboXaKCoXiqALbUcjbDEHngbZ7f86ogwWGq8Uz3cqnRV9AKEogCSz4iMTzSSnYn8g36",
  "key38": "3NvCNTskmeZNWWVseXUEs4n3prU4NBsXZzRErvhuG41XzgMKryVYk8WEetEe6JitSTkwWHudwa1BHZRdekSNGUAv",
  "key39": "3pUt5oFTTnmLzNgsjNP3MQaR2v9w5FkWtzjcbwz3WmgNMbASMYDso4WnfYqYqKUM2ceGBREAebGwsw6jBZqvdhFD",
  "key40": "2Z2GndxNe9bhuAkz8GQsq7HNda5NgAwxHgspB9dCtedvevti7o3mAgE8EqGCuurLWoG85v85DkEsBAV84f9HYaUs",
  "key41": "3X2UTRCTmApbXWGZMKWKpgKCbdrcxYYDM5iw5SBHXgPWtZvHCScF9EqoKb9erX53xYRMxDkD4gfaV6NDx6DHgz81",
  "key42": "CF66vpEURtvxWShhssd4MTkKnF6h7RmzvgWWsMDNyq5WqnJZnrHS97qHBfzLH45FDPs15qXsQUYFELVbi3KCstF",
  "key43": "4UBMda1K3wRQ4Dk7vEEBkxBAEEnLz1PzDqZz7sYQ91Kz5cdvpQrytXJbRmurz5uYMyVVkF8drZ9UGbMgWgmSPsKv",
  "key44": "64GzErahNKSctoMo9nRrAXhQwHKx49EKdK9KNDuqXXy2tGBjmyea2oDwgKzdZYg1LCezN4uA4KYgj8QRFYkTb1QA",
  "key45": "46yBQmphx7SoYw7weTS64M5f2hzoXrYxtrNMjyaLvmgtigJ6mDfV3JcANaN3aLu39Grz9iJrZCuqPAN9aD9NtY5W",
  "key46": "4J5HVrEZKLwmb1c2xMCnFzjmht8aFK6yceWvV3i925SY4WW4sQ1HR2rYp3EmBk7VCH6F9HS3bw8gsX5fe2QiYh3o",
  "key47": "oLu5NJG4qDFoFaEHwtQNwWonxsh9VS9j7vBsXirXwoD1wu3FDJjvYEVQhLy6xyMYzcKJF1M9pSQGipNbxwWUS6s"
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
