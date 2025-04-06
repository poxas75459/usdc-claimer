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
    "XSN3oWHX9mfkwfLovNT1LkkWQpdvUut4oEajBEroaYc1wg6Kt65MTboQzDFAoGqEeNCpqs5ag4i7QNdMGJ3K5Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZzet8nDjoFJbbtRpLxfCNQLaMAcZQbtv2Ky9tVjUjPaULy1MkX85FqYmdEdFe1B51LpZah1diBKYeEeENCFXYK",
  "key1": "5npyMxqDb9ogTg34QpzfSCkQ5Rdg1gK4gUvUVKVJtgRQx242Z5jDAfiwYKGbNg1RK2cTHSXX8eLw8CcUVi3DdCuq",
  "key2": "3Pi9vGkBEj5jujSmyMRmbcBM3bVYaaLNVdYV9Ek255yPtt8oHqVspa9Hbz78jMUaJaHkLTy77WiYdc1oB7Zp4nkr",
  "key3": "1CFo2RPv3GqC29VG4vjptDEi9TVK4vsJwGqfYLt35LuqdCZDmDs7ck4X1kMHfEDUYTFowmS7h483jZR6BDPnU3X",
  "key4": "26AeLmgatTwBVPCpGVJzfoQARpr9VFuFqcfddUf295ZjpUHYGHujigY94jD9VZJVjhsQ1hGt2XHEuCwx61iDZLej",
  "key5": "3xcSBxu3kcqEg7D9VPuL8KRHf7iVYkFij9wNHxo3N3x9MXtDtZJNWHcmeGZueMKdAUuNvRtiaeD8rYh5y1Z92gLA",
  "key6": "3V8ndNA3Q2msES3JfoEesijPGtXz3pJUjfHuh4GBqoicxJbLb7i7H2irE7tBxgfa4rZpjT9EeJDJVTC4bJ1RkUsx",
  "key7": "2D5NBpTo4GnYL66kMyaRxZw6vLBsPmmmFRA3mpfDZZajrCn7teC4JufoicH2cxQKtMkG6KonH8qEBccgr4Za4Gyp",
  "key8": "5KhpFvjsN9T88DyAxmCqDeh2phz4uNx53Tn8W8jn2xK96aMGTJrGWrxc2vTjEeSaU2EdzSoK868WVBwgrsZj4Lzs",
  "key9": "F5w72685PUQ6wqJvdfoUgGJKZHxaGTAC2eQzeDaXEc2EReykqX9SitvuCE427bjAwFHkAHursEn3ws2hLUjWJVp",
  "key10": "5t9BE6TCQb1jG4zD49UizoQEyDHQ4bfN8E9R2pm9kcDKb61Y5M6NRkZWoFQV7tMpb3gc3Cxkj5yieTStGVSsE9Xo",
  "key11": "2UEHPdjncbHpf4uA7RZeYQHn7mYCqJ6L2P2D3sMbj4sV9x1Xq45BWtdpkPkF9bxUJaFaHPBkEjm7hxHQ1jii2V4E",
  "key12": "5wYEvg3F2Q6w656jRgYJTbxsBSN6WGF2owdevN5NbW4zHCy7winDHcg2VfiSke3XL3DZ2b2SmnSLinKhGf2CP8Fx",
  "key13": "wzKsDJ1x193nrzbxHfpm1nCSRvR3nZXqxFeJx29uWZ2X3k2HqGfouyShYWRTqkYTxvd9ugWCFMDdD88dvoJtibq",
  "key14": "zqLfNWLPYixEAoTtY7KF3jm4YV99uVb3uR6s2xdXpiycuWQ4KvuRS2eStJYvGCm2nYNdogbbvdJtAjY8LHJkfoJ",
  "key15": "3EurKUSuTrytbqJxwB4sHD6KEwyZQjRzQ2oQrcfSPdJybNeyKnqppKmvSYRQm4mXnvg1osq5yTCBdCxprDWLMTdn",
  "key16": "NtwGjCGHTdEeYxeQQmnnA7kVojWZwfNFdfMJ99RrDE5wBeVGtwaRrjygTbmJ6wCHkHA3aopLKqyRuvjrAjDmkME",
  "key17": "3uqewzBbnXBpVJyRSaMmHE5KQJ6gs5SHt3zdc487gnzMm1GscLQJjUWS4U7nXjCjRGQjM1WPoAmpYyfBLbn4bfGS",
  "key18": "67Eg2JAFUc959BNUhhGf4haBpnR7QExQA91cxZpa4syeaBivscSRBYZkMK4YyB4WPm976KFnDPL56DeEqg8jDpZj",
  "key19": "2nTqBLvqxwKLWtKmCmDMWs6Hmd3oTbNnPemLy84z4wWSaYaxu9GNBDXohjh6TYdz94pxCPWTvCp8NX3svruGP8C7",
  "key20": "42sRfGgAYQAvA2YCboaDLsjLu2c1AN6LMyFqahQSPNyxmsAt9o2GvS4p8Ja3iKAuX7SPxWHA2kVX1ZHtg9tco7QF",
  "key21": "yB3ytFGjxNBSrCe4wauFZ3wMUAqUQTuYa2q4TsK1zc9B54LrxDDwAWJBtseTWYWNLUzXtxHkfbUjcj6gf1hP9vv",
  "key22": "3CYJVCBWuZwqRtU1tHhVnyTaBbTjYmRYnnB8XrAseSjJGJpReXnNMdse8DEff5K9VwJhySkYG12TwadtyzinFsE9",
  "key23": "4xwccm9Js4wRQWZZLAs1PR2MLuDuUGBJtDwMnqYpvWSBzuLyrNZetF3dUGuKdKqpmFwx2BW8fHV9nBfNvQgoqbPL",
  "key24": "BgEcPChwQnu12PuEzaiPAhgdTiHW6BidS2gbgX3XRXPHUfZoxA7hvP9ntsmQy5YwFdGxwSM9diFf27Fa86Cm48C",
  "key25": "4JqVL7MkaqJ4nBqLVERAfmSEHgWG7fTEYu3SM4hZrzkLhbLKNSLoFXVe5atJq311p3rGmyrYwutkw8x9mEVLC4hP",
  "key26": "2ZeQMvBPajaDqaZxSKfzLWCz1fSEyx8nk2jMCRYfrPnU7LmMxNWnaV1Mub9RFiUu9tFtVAvE6J3sH56LdVTRt4p",
  "key27": "4gFMkzUz6dHJxSsvVxqa4fAjt2J8Pcct2Z5Exm4AjkKxfXKN1TH3XtDjFGFrs3WXjVVwrEAoGnqTpZ6uo2sJetdW",
  "key28": "4sx276AGNqkFxDW4jMdXQTdxPLcGxZnRYpwDb5BUTdLovTkfGqM8Dh7DcX29kFsZRbPWfJxXtmA4uVMuawf9tnX5",
  "key29": "7nKEwvx6uHnyDkw47ERiesYBZ8G15kuYi1e98ULxVa82e3g2ZB3QfjtuGAzuN2dn9NaPviWem5u7jLtCkdriGk1",
  "key30": "4iBQ1N6yqLsEPWwo54MtsUsNTQpM7R7Yt7Yz7dyAgscQ39UEDtpexuaGCMZJqeLN3rwsko5Wev9wJaNKj4CBb8i",
  "key31": "5N5STrWW3NwdTLyZcJrfg7mSz2WbkegsgY9UKCiYmjWQEXojBYjFu5qxS3LfxzDedTwVVvjYskEGrshuW8wUfphX",
  "key32": "42paDMLaujBSG7jdrJMRdGtmfyxqsyFEjUV3Qsp9Gqw12QpvceGe9uTFSxXMQVaas9CmrDdzrmjXD4AksyhbEyG9",
  "key33": "skVRA9isDeE8H1UiTBFKkjYniRUKZ2Yp8KXkF2JJgrq6vKb4sJaxzKAkJ6dTov7ch6qCsNcdKpPjPfzWVCAdBeX",
  "key34": "4qyR9QGweBAKq54UeiDAHwQbwgaHKtUmezKrU3gHa5KtHYiLDTpqc2sbCe76LtnNzm9tQT8PJyfj4qsMHE4nyZrV",
  "key35": "65HhXgfaYZv5gZwEP2pe3aXnbdnuiE1cZV6odrFSyHQ8syTZcyNKeKTirQhCAXxsgkerDQ4ViJgqFyNuvvoYeJ3E",
  "key36": "5Hw9XQ4d3g6kaDXZ9qPKtNYBaq7wdCkpyNToUJbUm2tbZUwQhjyVUFRfTAUXczUssZAToF6mWF5BeuX74ZdqPaz1",
  "key37": "3Q91nAnrL8oQUK2tG4qZtBLc3BDfTt982FpXmqnqD5xp7JcWPkQhmwNDYwUyuYJWXpRALTGqSUyZ7x35WsPL4fHw",
  "key38": "3aDDYaun9EfdUekkd9EKWSc5u4BtxquTUr6Xbo3WfnqQmqDJTxF5cVjRxJtRhNJ8qXASFTZeogdQ457Sr5YATwj",
  "key39": "4YZ2A7WHxo7RDiDDSNkxYtPHTbCFSBq226fGDr2jrUzUAaqqBJunPBovum1Jxb5DjAw7jpJxnzAMmyz6VYRPULpR"
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
