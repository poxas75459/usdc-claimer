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
    "7Uehpd5w9SPgHPEwjUiqM9TxtvBr7zNHSs6xh1NsY6Vasc5Mn9v2KUXxEZXP584qW3E6cm351CQCDg5zDtRtrg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xt2fkmiZ19njM6LRsm3vq3b8yZP6mgciSC77K48RpTET898h9c9o2Mrc4A65GczB8PUewtDeMcjJzhBAPEXeNkR",
  "key1": "31XrY2pHgair1fE6BRvQFWMPU579umbo9urBH71stHKSjXocjubg1wfPpxJb1yjw4vfkHq2XUiTbReYVSCsY7kiA",
  "key2": "3YCaHZWyFMBKKCSy7Ny7Z7QBQuT4n3DbEmfAR8iNBemKCKtESMYV4YakQhcDxLuq1RQC2ggKejsVVkqZ2QuAWVZi",
  "key3": "3sCu5pNvVdkPbk3zj3VkLcU4raEyA2eF4axnHHJjBK6oQ95ANaNfMGwhWFXJZU95VYJKb1GDKfE7irobyvAocube",
  "key4": "4tnCSGbs3dMBbdZHAfkVENMppuCsKuSbJ7cLmbqAPeKgf36MJNSzsooVz7sbjSNdiAPKdt7C5dBDu5MrcqU9JJoL",
  "key5": "5pz7pwu1cBHCEsSHgA7ipQLa6xUgbKZUAYqWz6fNDUHEAQ6g8C43ZmPbu5eLQgZbM6eqYBXFfAk6MKRNGDFiQwoJ",
  "key6": "3AjDZK3ju2w2XPSKoxsRUjBHUjLfEnvRbqQzyNhDFbg94BUcY7s5aoShFkmnPWjJXigLYmzvntGHPEdgkB3pCtZa",
  "key7": "4LaFdzbHsP4VUnZe4J9dfnp7ubCXTo6wX6g6kNuVvzfdfnoHrKKc9VZpLXhBjNUbWnNANVjCNJxAtwLVJeCes2mZ",
  "key8": "5A3wcvsqaqXXMNYjUoLAT8MfmDVkHe191LNhBDE4b6LPRMTSkA49jjMTM1datodyRLxwA3EPuMnwFNEeCFUBSpuS",
  "key9": "2dprsh2t8J8GcPmoUFD97mmp9zXo88C7vopRnMqjJfdH87HRAaSGeZrSnz8ofM9rCoriMkSydXQDjrKqCGasmUqd",
  "key10": "2HQSXvN5yT1jrqigduZTScDxboN71pUnRjMe3KPjLQRq6roxGLfGatR3fvkxugpz7cB6BrfXydXEF6yc1DY3gGQL",
  "key11": "2ASJdiuZjMwAa88M2k137MSiq7FFdYPhtKiQeTqiWoaLSTamPHSX48Y5AUy6stTPYdRz8ta9sziE9CVEkjgVLaY8",
  "key12": "xbZ8PMDKs1dJyBryrX8dm8UkKhDDYzonxwyg7SaaiGct1GHnouNM4bDjnUTRQFGdth9RSUyD37o2XbMcwBDjvL7",
  "key13": "aupqt1zoyhVsGKC82KytcbSuXF54fPdkDw9Ua3XvRxSst87Q3SYZiK47jmwm8QKBntJgEajwkyCDqmmZGdJmVyn",
  "key14": "4QV7daA8GrZb7h6FxkAjFuzTvAT8vDC4JMAi9VCEVQznF3Fiysq3nMX73dNP6LBdgWzHJUHJzxNk5M9oMzquXDpS",
  "key15": "3r8YwQbDdxTBcTJiiToW3NyeizrhXHhUkgoPjZmKz4zJ4LPfWTmC8MBUezpyDgqXreNskPheD3DbkUSDLPBghVgL",
  "key16": "2LyC1aGuQD4GwA92cYA9wrd4fQcEDPxN5525RX7D4ey5xF19TDyDKuRY1hwkEFStturCAV4PemFmyX7QgvKnPGy7",
  "key17": "9ptukcLfLGucCp17Bddcbo7RipsE1sy95VfmNPnVWg6FUYSgNvTpgwTMRgc1XAhzgdKDsPr5yLapqxySP7orMUc",
  "key18": "52DxwtVrhcZo5TVMamCJ9y9P4V3jUKwYmzw9njro7Qvnn1zAHcwsybC7g1bNypBBUny4xufa7zb2NhimKnmUWcZH",
  "key19": "XAdthd9LB1cTbNNjjMFo8vBKxLGcDMV511vHPZPDFmyK3XWfXzWJx7RCpcZhhVg5GzeBeJHMpw7rntjKCdCbpSP",
  "key20": "2QhfbkMr9KJ9r5yY8YUHaFmtUesEodhwKabSanuMuHMziBPMzcbckQDX4C9iTiw5x4jJHrQAFi9Mb8tuiM2rXGZB",
  "key21": "5UkMXc7wrLGNCZCPwLYS95b6ejZuJQeibUEuK4uVFUtounKxEg7u9B8q4EKTJ6AGKwZBvEKAKH2xDfXKmmR9cQcw",
  "key22": "2AtVAXfjiZSUtxb8Qrsm2rizwzH1dR3PxDCDayUGScGeUtgfhbBG4AezgmVDFYzimas4fVQa6dMgs73MWKP1WVTP",
  "key23": "266tVXF26HTc2QbJ7S3ftpkejFKjP7DHfkGrotxWY8G9VdT5xrmQeaAUmgYpdhUDaL5PUFaHTxF5y3sBR6EQPScP",
  "key24": "4j4RgZn2GhCqEQmGmEJo1oqysA5LMWNNKKtSoxmCYDmA2gm8FsCmM3CEbEDLt6jZZ4mEbF8wtV3jkNwd4VuPLcv1",
  "key25": "53i1zKJD6kJQXS75fSMqGbKbSd6smK6mpWpxh4wJhigqVHp9ip4rKJtUNGGsSWHigWynCAykoj2TqkdEPtTY3P1s",
  "key26": "4xQohVzFuSBNVenbKsuXr6CYEwFMnLKkT4Nohmwv9ufpvjh8wcH9fLdHSYcH29bwnZMphC7L5zJ41HwnotxdeZzq",
  "key27": "UBgLy5DtyBcevinLAYmY77Sw4Gzegyujta9gpCuiCJcE3njizu2gSxqj9T1ag1RhJNRfQ95xLzLQAgC6bZYZ8h7",
  "key28": "TwhGSw5wWq2b7pe1ABfbxtPApakbywXgMhEikkfTK2MWZKKienJx5h2D7b4csFh4K4hMNbR4csayqQETDoKz34c",
  "key29": "63F2GwBusWuutDRtLnRGSn51Hch8aTFm6egTW6cPXY2TyU6utqzywqAL8qwtzXExDeTaA3RS9KnUSXZSvvNaTs22",
  "key30": "FLs5wk5AZu3KsDBM9ZAzpQPi3WTZKR3LZ2sd236JqxvsDCp97fVJfyK9vPhgsHaVrQQaetm728FZNjtsdRxCSYB",
  "key31": "3ZYR7qRHvLjchiWgJAcgfY49oahAHF5igVGce6SByyxaju7PfWaAcW6QY2JjEyPPY6caFF8yttL3RD3D3R6gpbtw",
  "key32": "4ppEKLwyphr9QRXabtFps1XPUPWkDdFw8iR2g428DKPCXRhA5PKo4CTWitGh9JQAGJ5SNyiEKu7tmGFbBKBh7kDJ",
  "key33": "5wreanSTY7xqDF51ESgtaB64TwGz6sKCq7VXoKM79qQVwCdisEL1gq3ob8N1TdCWEqzUfgnUisjL2oCA2hp6TpeZ",
  "key34": "WEAK7UGQD4wwKaaDGGDDTAVbsgBpquLBk3Knns89KfMG49NHPcaCANffXx411mCN7MQL5EjsrFEXZ5BhBvHu7iU",
  "key35": "3QnTH6MmUtdecdszQybGrHidnN2ADNAYVJtHBRXe5MKuEAFbzh6t5wGwZWhSqq1uiaDtwthyzn1Y1Fx4AkqSu6Ge",
  "key36": "2M6CXLwNGMhvZfjLKCZ3hQHGsp3jQw5wb2hfSKUcQ2VkSi2RQripRBatRyVcEH5WNsWgPgUU1TSJxCrFNVw5C5Uv",
  "key37": "4NMfVw9QpXQT8taRdm8MutXF9EUXEgFJC18YkVB9MXuY44E1Q2gjoc69vhVZhbu8oq51cftbx9i6RvJnpCMorw7",
  "key38": "XNqewaPrNapmMKVvPCSLDq65RnTxCjFvJSuTFsrQDbQAZrEYSr6GuoQnvATCs56DiCUB9LPqtLktseWALdGRfGA",
  "key39": "4p97ShKQWT1kUQPvLkAATxn4SrvzL7Vh2qpMXvMLDTS5YQmqVy2P3ZHJ5jGF8yZAcFh2nnZeCZKDh9gWzMnDeKxu",
  "key40": "3N2zE4xpHLorvtP6yV3KBwH8w7JhLMwLTxJj3Gr1Mv6KvVXfB1gvF9u1RQTQfuCqbti3ovD4YqDBAoAL1ZKrGArb",
  "key41": "3DxSr6UqiKdVLFijHWGRWXou7aXspTq13LXCSzVCne9kfCikjrwAQGgAaertgaoqY7s3VXHDdFf7EWJiVuW886mz",
  "key42": "2YVmdH3JSEFJced4SztMcJYSUBqhZnscXkv2y8WHBdNUrEjiD688ftzuM9GcsSUM5gWy1aF4aTMh7DywpxHf29PU",
  "key43": "62wT3u27T2kcdug9suiBHV87p2q7DtytspJpuJ9dJohucK6QjzsAeNfijEXa1kGmTW4GBa5Hzbfmp3rCDQdUPRRT"
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
