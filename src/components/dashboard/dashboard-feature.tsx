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
    "vm5kRdJ7Losd6LtDXx5SvwSDs4nxjfd5TfFmeDbLxAtJ7Hq1ax9qzR4pbgtA1jUovHoxReT9emPyFxT8C5YMxL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tL8Rbhtv2ZQpwBkWSGp6i6RDuRYuRXicC6z4zMeFCydvA9VuxruPWXd96W2dGUwBmJUAc28oZ7TKv9aKG9Ehcmt",
  "key1": "wWWUS4QU26fyYa4MKTWQf4iHm46tPkZs9TDKT6foFM31fStUuDJunNj4WrusBBWE2n8g9wN7weYZUaYwxpmdR9J",
  "key2": "4vRE8dfJrY4uMi7ZZBXiDQgue2PZwfdM8UjhCBUhGRCMkpibysMmhL12MXipXWAEcwi9t2KyXc7xiifXZ9prKDKu",
  "key3": "6441ejToiaxjuK452tyNK1xZmA1wg9u1VJD6D8dRyPGkqH1T6Bc8wGKhahG2sBgr53XS1zuGA9RZgfaR4vMKSyfP",
  "key4": "54XHksXXZpBF9nzr3gTfghGPTspaHDE36CQLBNaxTPwdRZjA5HpEYQ9RsZAyi1uCxJdhFX2avpnU89Mqndx4PXE5",
  "key5": "5TS1wfQarMAk5MTgniLC78kVbtwbHQiCZ7mfkeBuagoYC6QhHZLSLriXbcAASiDYRy5ik9QCy1peQd7wMSAANvxa",
  "key6": "4MbuiuezADzZUhbE2UJCgPsE9dwhWGFUz7D5ozxZu6XT3n1EqqFiNUPmuRimh5jv4aeumT2TcdngDnaWDzjAX49o",
  "key7": "4ETAvN55fefNRryr9Ha7PvE3iPh4BzxbLkpbsyn9J2fmgcGBpj6EnmX5sWxwsrckNswrubhCN1Nx1ECkPQz4d9eQ",
  "key8": "2wPYWE5E96t2EgA1ywanhsP7wguACEB2LXZt1zW95chM4w2brKV7E9NQ1QHWG27mAx8Q4DUxZSYt9kDuoSukuXUN",
  "key9": "3RHAhX1SGLu1KpRNH9RivjZTZ6VgNqpeVQCcKFCTmzDpjgixke7pmGxX67fepCVygfz3f5q54eekfEahYTLEfwBo",
  "key10": "32kMbQ289GxjuFc8pJR1kpwZ453axU8S8YVZXBQAYdjMyBnrLgeJJnkdRG3ezkbkipXVGVVxAM2gA9DntQDDU7iZ",
  "key11": "5PVYbnxJ9xWqpTQBSquPXrUQkXk73QQ4FJcRH44ZgeDnwobkDwegw1sHKgGZAT3NFVqEcbhxDx2pEQjYNbLut7Uq",
  "key12": "xGgNo65SYZ5fL9bsSfozB8aeP7WBnLYxN73k9hmVMe8W4rKpNR5sySz7Rpc7xXY73RTuF2nYwJSUmdQ21oTvA1o",
  "key13": "sxRGK4vr4yWogBn1VcSwAqgF6UDxZJYSDyqsx81945jQ28o6ZVawVcAepH7v5iVVzQkQdG6VfeJ7Cf4ueBdaaeZ",
  "key14": "ZtRR7ko47Jm7A9mRxKEgD6Vzbe1ejw7GJu7xrSRAVT67siBGcyfYfjzgpm6FQpSvGyWDFkeh77fJvT1tadpfGKq",
  "key15": "5aLQ6gphifeVQPLKCBnFBb31VprSdrdY3C8RXG8WSEA25e3z2VqLNfstGUGqssVENQvpZkvnGgiPLZZm8cHZxay6",
  "key16": "5L3epjfYXH3AEmytvYyPcarHPsY5NbVXK6EKb9u32AhwY6DktYEDkF2qLZeF42wsbyZcT4USyKvBP5ppD3Dg9eQ2",
  "key17": "5V12wudf1eBMuN74udhQqxxkAFV4NmUVg2eW1WHLx3FUEk49FvSj6c1i2J3KxVQj4QFQRjKpn1GB33bjY8Nboqcm",
  "key18": "uSJQtjSTUGriU48DaiBuHR9WnRRZg6UDVm8r5NwpZT4NkQZXrEckp9SeTi5BCso7qgU9hLb5jgXRw36sexrKyQi",
  "key19": "47TTkwGCV3eMa3aAY586k7v6VGtSQWwy8o5DZUer2HYn62N3bANdAFjH8XbwTpGLDyBRHDh8XedWFjAhGJWBMLmS",
  "key20": "3WzRsGaos58U4KjfwCBkuS6LpA1VqtGTvP1Y1YKHBeQ4dcAxRovUpSgDgrkcfo1SJB64hVHmdhKaXaTcKZzZSL5k",
  "key21": "2C5fSAQ6emk65VHjxQcx1PQ74gPw97yvVbAytSa1zmfdh2pm8kbstHsVAYSJ4gL91mjXy4mw4jcucC5T5ZyAvhuq",
  "key22": "5yHEAUtykfgLMszmxL1G8G1haT5TazqQxz6v2vq2Tp57AnWRDTFLUVhDhsyys68SgWQYAyP6jWLTjaADgAuMLbR7",
  "key23": "3CHRHUFwYkpDdFRZ6rsUpDcJKskb5V3TZHh8vcWr3GZ7Nh2bAZNvzx6f1vzDQ8qm4vVRCGMmPYiaaaS4f3MhdbWP",
  "key24": "npnNDEVdrXrprfAejBKBXnA6Ya41Ma9fYp6JSZWgEkpPRoU21VzfCghqFLWs4oR75JZHMDH7S27nK7FHaDJqahe",
  "key25": "2Vf911MK8a4JPr95ET4NGHtJbmrXNoPkbfA4iLTyDrfBmuT5Ro88A9AGFwGjWbTXo5NRDEkubWsJ43PCgp89am6h",
  "key26": "4xxxe3XUyp6q8iFK95ZQD86Wesvpc9ErQVdCL1NrB1rg4JDGDuYXczjZMAVr5f8oKrScjVuvnNgnLKGqNu381rRG",
  "key27": "48UUbRieG7chJdKnSNw4dzSyeF1QNfZS5rPhZ15guzco1LscW8m5vDn6aMfLC4AorudLimUfNvXD7W5XM3mpp6yR",
  "key28": "5HnRdeHNZYAgY29ZdknhemEUdiWh4iwUG2aLATRxdCmsd5vsLFmbQaoaqqeJtgLQE5u4xJwg2f8Urgr4NszWkrcV",
  "key29": "3NCjhypeWFhdgE4RZ64ffsfftq1KHK4hXnTBSc7SAXdnJtuMv7MsRUZSZ68qsHTyxNxG5qcFFPj3y6jiTm3N7HZC",
  "key30": "28yLVZNisrv1dKVmSiHP19kkBezw36ccHjQP3JiA5ySZqN3M8eEmjhVT9GPkkyyVh8uHEyEcvnzKvwzaSpL2TciQ",
  "key31": "2vk6fecfaytUcudV9TZ24gjXxuWoySBjJXT5AY2FawvXn6SyWcpSeGUur3sn3fp1ZykeDYSgHxfXqK9C6JdQj4F6",
  "key32": "T32kV6hbG1oCTDrwCmpCkovou2z1KfMR9ndpWxhtgkUfBksYB94jmFgb3XSQpnv46froXu3xV217v7PZcdbeL69",
  "key33": "6TRqVN26iiCL47Z1YBWL9GhJQLAAfDtAYJXuiEDoSZgHuP9uJJXMdsLKMjkJww6bnuasUBf7PdV9rYvcasNdN5D",
  "key34": "2dcB8cTb4Ei6jtufgYsKhqgfkWouTpW9q5cQtapTvRFKoPCSCPNaxuAh88imWpN45iG2VWXnpz6evV94QQydjDcC",
  "key35": "2M5pZGNcM4kuSW4o5q9trn7mkknRofn3kYZm1naNRg8rvyE3CNgSneJDLm4rsmNmCfg1rFjAH21UNb6SHm9HHJf7",
  "key36": "4yheojJuY5V16GgkWZ2rLE3Dua6KEQvg73f636oPjS9FbR4oDyz1bak9jh265K71HPUYP7g2mEmYABmh7mzZKcve"
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
