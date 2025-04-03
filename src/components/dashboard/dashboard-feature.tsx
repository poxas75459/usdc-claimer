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
    "3xDcWb428yJ5KzHvokzotKDXuT4FoBJzDJC37jUT4RocXGhTweEA38hU4XMWMd6irGNWiB41KzMVqf5snphLXUCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5of3q7WwRN3UMKP4e54PAHtxZpWTSpj69Ym3vmbzkJEU6qa624EpVwdCyHWKPYWxePJNjinLu8Wa96Mvy1uFJEi6",
  "key1": "La6fDKqy8P52Eaho5Sz5qBW3mPq4XBAQKBXkYVZbvRsvuaP9fzxAyRV3tzzddmzcKdabcCEvc3a3zXP1wQ1tA3p",
  "key2": "3k11Z49upbheRaP5pYhhC8FUm3qmwukCQMrLTQRar6c94MveLsuiskeCm4WVV6AqbRWC4zgjXyA3YQcHjXDfu5Gv",
  "key3": "4Df4d6JcbR7M2htjmGa7syXk4cSYtvoADvjkg8X3oUDfT4HDapcLB1SpEDBAnV3fcSdJ9BP2VUPCC2gnbmiYbU9V",
  "key4": "2bKGNqmAG2Uyg6Bnd1WQrsh663177QjwWsfQ6kTCkyZFTM6g5M5CMwu5LRBuBRjukMFWKSDRLX8TWetBxMDK51Be",
  "key5": "3Qypf5QzEYunhtSrNuGdq2su4T9RpaxreuacQJFUEru8MDTps82ccLSRgzdtNC5xjNXqvbkzG76EkYdA2NAUoju4",
  "key6": "46sQESRUDwC9vocbQEU8WJ6awLvowruKiEV4BfcLDjTtrytGCSSDK7XU335w3y4DZampqk1a4gyeT4Uwy8QFNhpZ",
  "key7": "3cgYZNTcqtbj6xNyFUfsJC41sDQp3xR7eC4U6sj3k5ewBRj379nbdumf2bGwzxyi5weV7bso91xcjzStDxx8rV9T",
  "key8": "5Wtf3U4wjYfhqBtgB79mX8V37GoNHEWSMCXoycxNZYs12hTEyqEZVMMGhEvCYoL3VMimqVmKsxPRCteYKr7z3fBb",
  "key9": "26r4GLxHkk9R8cDURwHoRTsKVcmo5Pb8BFhaCRyx1jhnbipKsGwmgbHdLom7Si1h8zypudjxbRHt2SZf42NDShH3",
  "key10": "28pizkkw7aBQKA3Y2q5C6iaZLVTqCDKXjcGieswsYqkPBtwJL8qG3V56QMkuUXSEugqjJCRLReTXyhdJrnjZXyNy",
  "key11": "4jNoYzA2WiVvUvBPEE53eZEGEfC2af7igPCLNwQaMPtr5FrT6kpR2DMop4BUtyc5HMJwEM5Ha8ASFJP2rCdzquL7",
  "key12": "2u1rSanfZVPYum29wTskhzb5dN8TsermknEnLFHSJzyPvTNvzfWPyQTSFCdSxE5waR2KUMq1isGqK6cDBdY6WrAX",
  "key13": "2eFS7ziMfhhE4J1QpdEmvp31AyJ6mEuGA2VkB9kznCGJmE8V8MRim6mgZqvwno99by1skbaaCFJLYoyfJEsCme18",
  "key14": "33uARKy6SdfsDdEPhSBS4Mo1hvLgcgE8s383tKbjtUaMuVP5N2ibfWfrtmUPoeWpVG9eGnz1WUhbPSxu2URKVkWN",
  "key15": "3EBL8tEzieLQXov4TQXm4J3fVyn5XqjHG7fNhJ2Wjp3riX9fDU6g2T6BtjBLfD18XYgfkGimjnNG8xZDenzy5YyF",
  "key16": "5sMJcFFmcWNpjq4Xo5Vip4WRzzZnACtXYbDyNypmRqgAqUd8Eg3tpWMPJb58uE79EAUyxrNdzvc86K295139gCqi",
  "key17": "3VUHFQhEZ8S38rp93EovMg7GM8C311nYx5q26CQzjxy23PrwEu7MXACHQmqRDP9qSSXYscqx4TWb6NWgBjZwkS6E",
  "key18": "4BJHvzrnR9Zj7Q2gwfRy59m6MsiGSsXtArjG8x2ahkLbgMSgyG5fcLBcnSFS1Xh6hnXeL3J3cZT5Sex1usZLXbVY",
  "key19": "3tPoJRWvKmNZ15sdsjtQRCDVXAX1yVkxhqmjeBVrpkZpDenHFLWyqyhyYZFsF3HMwEgqFb6cmitiCmdy4JoMJNYx",
  "key20": "4v2cfppLXq8tqBxGSWr4pLN1XxDP7MYG7dcoAMrZoCgCDeQEN4eV7LNYjt5Z92eFjZvM2xWHePZG3ZyV23z2iV6p",
  "key21": "34hifmC87H1h7retWtffc6srqNVXygqRLet3UfLfQjrzxeGfc2ZJZkF5qZLpfrAYGDa4g5qYon2sNT1vtpT1dZdV",
  "key22": "43FssRaC5vusALKV8Ase5bz2q5Tm1wPhmXrXhq99vVFEwQy7o97JeDSLXgUdUKdcj6PVkN2ZEeqQmEzHKQbXorFW",
  "key23": "3x9gqN21AD7mxZYtuDABgm4Y1pupt8iSTKuv8jmA7pTTGoUU6mE1HFNk8Ffny5AW6DMccavWcV5GWg23WvUcrWmq",
  "key24": "83pwtyYHcWMEZDLutQBZmeb4K8qiKaAp8eCaMsAAnJLPyWzSwXat7ZKYPEXGY5an7g56swMSNv8Po9UZyNDsfuD",
  "key25": "mpiF1BLnKtbH58W22xHVnZxz4xrizgji8Qody7rB5Jko7SLdesm8yPGcuxKNiRyP3cTiuWYm9i2JFJaYGQfm2hh",
  "key26": "SRbZ24krp5PitS1spVcTAh4ctuRFFAkHks3UhfcLo9EfGC3Mfde9KoS575WUhRcH1SS8TnevgaDUFW7XMGe1Zx1",
  "key27": "4S942y2oCyFWM6yuXL9saWQV4iznqm4Pwv8gtPfafdZ3TeBgEe4J5Q29XnahUwB95yKSE6cJKhSqJSdRodoLa6pT",
  "key28": "GahmVQN4nGRzqmggR39EE2yVrYUE6K2Y2t2ysPaXW7EYN4vVwrxqhyjzU9bt1LhvAbRd4EPr2NaegVoERG9HFbx",
  "key29": "mQE26gCXxaxRyt7dFCcpksERYx74XfUEj6LM4KxucHtS6qbKYBAM3297uyDzKaP2UHxXRRyxJAEvKpHuR8Q5zmr",
  "key30": "2x6T1FNsdKsR49whbNQnD8TXoSBTtae3uHKhKZBDTLiSQMgbKJ6AmDHJVTfhMjgo1WpM9RrXEjnCjDsVmd9C9829",
  "key31": "5W7PrGjhxZYPgNYvftoDVwTfxgVQiitbm1wKwCZUd8KV7o2jbFhM1SppDqC1yfWHAZakbbtUgaeJacN4TVprrY7L",
  "key32": "29ZCn71DTvmFo7Fk3a3gTCxoA82NhgzbdQD3MWLskgGuiDWBLtYsw7EeHxEMx531J1Qw5Nh7qUPDAgJ4dcs6yqZS",
  "key33": "2KBQdqHeVnnvMQzksvKWRSbDUQEQxePuycrzNa77vF9VbnczUq7amhMrEekT8SnWfZQrnG6twPiyyx3bz4TNHxpG",
  "key34": "2xAScRHXi4gRRgCVMWXtSADVZPMyyteG1YpGVivhP4CMDDrp22iRoZD5MBsHhMBGi7UHZpoT4xsAk1DetRSwSCUN",
  "key35": "2AdZoMPW9nexf6ymEPjAv1wKbWpymtAJGRtSHmuAEacW1Kj2xCLhErvdNPVJRiuGTVRgxJRrvPkYb5AezhJf6nSi",
  "key36": "39MyPNVQnCpyuZwqf47snPYBA2gwyRgJ9qs8YWWRPfcEQzXzHXeWec5jqq54WeKoXkcpr9f67wt27np12K8AxKXm",
  "key37": "3Mc8WmoxeCKw1c7qcpF2o66L7PAzt7hKGjH9vTCHYvafpDRC5LGef2rw3TpgT7dXtXgFqYMdHpYzvyYN3w7LcXV",
  "key38": "2wswJaVXfM9FWaZJrew3yQai8Y9DWgddoueBVZRe7hotCtSQHdU1LksmJsbLvYGNoJyfJY87RdbekDkSmPfZzFp5",
  "key39": "3YqqfHs12VpJA5FbCmHEGeenQ3JdWdQ7cd9LByynGsGusNM5ZzmkkSDFqdqkwnDue6BRBtJytku6PYjX1NXXiTgB"
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
