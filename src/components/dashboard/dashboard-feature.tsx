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
    "3gR5H6yoHf4HyQ7zu6ycBrugeHmKPsAZmuMJheJtQrqEkiTxC85V5kbXdSpLw7EDmhdBU92hVggbE78VmtDvYk8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eB2kHeN6bLqEfYkiKFgGnt76US529FzYyEKxFPUtjFuQUrZto5fyDwY6EmhXmTS7XWxahJhSMDD8RejxeKsUCQ",
  "key1": "5BFQaVCXmDDF6aLyg1PzZ8GPVBqUydGLBjPiga3WKF1pYj1r892dkEkfkwqZepfjAA9QFNgatErUAMX4R1H4DAFp",
  "key2": "2vH7W5ECtQsM26kYRJNDMK4AKtyRwvYbkj3kCCNpVorXJ1sn1eF2wcHThzGGV4GzeppaLYrnDzS9adsNTAkcXKtr",
  "key3": "4szSrYfaXSfkAyaAicxuxevuK38mYDyLDDvgYSYPtZiSyM94RN5fH97CLuLBRTGm1vqxN3qeE9MDLtUuqAtAFg97",
  "key4": "3Pbk462Et4CKYwozgxNAEJEnSmuLgA3CYQBH2Gqfy11f85aA46cY24zFMFjq7MfkuhktsCu2n6Uh6su6zHo7i6sT",
  "key5": "3TAKtGDkur5EkYyxfdwLRiwD47xSpaqxhPc9vg7VszypXhQE5AbrA8RzwcxJCH3QmtAKqQdVPQoTi7SFWvHzc1SL",
  "key6": "5ZJqZie3FzGD2THVbcsGwE1sjUwzw7yNRcGubmtVYk9u6ZLTg5gYW49PrCsFyQ2YxcRktF5QJ8ntQuDjmoyZFUom",
  "key7": "4pow4AS8AvBTA4uxNpXtJf8WXZXMAu2286TUwN6yHWHwMamsgLTouzu3sCbE7ETTLyYyBiDy6wCuXU3GXzcZ3i3X",
  "key8": "acE4SZ4amVrR8B85gc3C2bFimbMMpk3ss8JyqiJijS1tN252svuF6xwZAB4QMqQuHTtR16pjCyJCd3uhvemD5ar",
  "key9": "4X3GUx2zJxQmTcjrbamWF75czLa7zcq62JYFywz9AsbWjUtT6bPxupAERnP83UgVYyh9xEasGiTJAD91keRXvLc8",
  "key10": "2WR3tiPrgocbAAxxDZMLZdABRdvoi62GJgKkYWL2oFmfZNmxwEo2e93pjZ47qDEC8LPfhHp7CWhKq5icrxhsSs2R",
  "key11": "3QewWCxucrJeGJby5Hp3WMpTPW2ArVZaT4cHUMReFpuxmJ5DFuw8NgTcGoiFnjtCgN2SaGySyC7a6hukcHVggLqr",
  "key12": "2cpLBfBJ4tKPpyZyE1puKhxbie1AWbFPbaRtummKh88WMF1xqC2bBo7AF7FiVjo9J7cNYpWJNyMdVjGEGPWsWFBd",
  "key13": "78cne275YAtb9outV2KTDEMBo4ZdUHDs3DocFnGt28K2EjVgrYmCGCUHT7d1Sb1oKD5Jy99HRVkM72NC19BQPDB",
  "key14": "ipn2PzXxAjHH1qj52XnB9Ff1DuUFQ1Fh1LVRqdBP1VwfrLuj9eC3AEapLLjM112aytWY6rP3KFPS6JbSvHkTfK8",
  "key15": "3gWFu3N6po6RzZArGf97ZuNt8J1PyKk18FjKgZoiGqSTCAxfM17vBskvDUSN4Sy491wphz952oZEA5hiJXDty1op",
  "key16": "3R7J8xZMiqQpGcToygH6Pgvcg9SABEwXn76686ergDvpC1yLbbScr8Fz4dxoDAvWkZMttyqUgE97TKK7knkwEeyz",
  "key17": "4R5RnVPnu3ePZ3ohrMGYbQSdJmA7BDAQc6Mf7DbqLBzjpyuSZ5WVYPjDd6vTCBFS2DDEZLsq4q1MXezGwLQRtio4",
  "key18": "5PECaLBAedEGQhPMSFbm6WDdLeCDmHW3nWeTk7qirT3ioU5yzDnjuDLdrAya9TEhPCkzA6mdVcgkHHSEYr14hzUW",
  "key19": "326DdCxKjdSyHh6Joex74T4SQZv3F3orcYidN6pT4dsAtWt5s84wgwYPxJzeNV4oeBaT1a2ruK2MxphR1Jt2wdsL",
  "key20": "5Fw3Yyq8FWA8enyMSzirPRBySQpDuu1tTkJCmMRw9LvzuN4MfCzaPQghurR2Mbhuf5Ryw9BkyBJfTWYn1QpkGeDM",
  "key21": "H5EcjvjxBSWYrksHkZHeQdyJTVL5UHHA22S2bmrCNzb7pk4DzSxQTQfZLGfP4JKjYrRmqvVS2TC6db7TebHecye",
  "key22": "2ZvsFeNDnKq7xMNpu8mQUtJEqsc4mL94DznfE4sEfFenRyntNK2KdnSA4htYE3fiRyL94vUawbt7FrFKxdxfLXGt",
  "key23": "2ytTKSeRnVnzFt8wYw1j8zi3xYBt6DKQXWWiTjg83LbVETWSFmqQHBQVBSQHJGACQQGRASQUoJARF5Vk12bctxVP",
  "key24": "5CA9yGvJL9SiZBgAzDiRaygH7xMBuFLs7LomatKD9iJUMBeBs7HjAX4m12yo2yHyPYZNdWK4UZVdUJBrhdjmpNj",
  "key25": "8rxvp4y7SXxesD9b3dLpL9fbW5r6HQv7SbQBYYu75Jh9VacfeUKfX5aCdDREr1q5wxKAKMnBr2CuBtVzMj7vEvV",
  "key26": "2cDkiBPxi8to4j6YX5s374WfwFCm5MFQ8hEZjo4oARccM1edc6NpiFMFsBu3bXnh6K2hFrggdAbvdRnN6AqE1k5x",
  "key27": "JvZGmuFDTS6MJ96pLaHh3YoDmCwsjYziJDArUDSt21v8WhzqKCSy5cVxzTn7CyLxsZwg5wwnccsULybXzQqwMTn",
  "key28": "5cbpWnKmniFxuPDzN17Dybb6JZkxTeq1pcuUAiqCCbwsmb4CqNXRSf2vmkJarugGXHiATRA8g1umpKNRgfhzoNxM",
  "key29": "yJibvbn5A5gEHrkirSSLouazRo6vE91x5XpJSHbNsH5WNbBjfdhGQJqSA67885w9SzWHzrsk528tb6ZZPNVADFB",
  "key30": "2QwEHbf4g6hWLizwZFHeSinHoQu8hdw3GchTEFT2GMG8qrWU8eAsgreo7aPgaM5jL5WxFzxxcLcaCUKFHcxTh5Rg",
  "key31": "29n44yV1juX7kSxjfccTHneUgerB7Gi3pwa6fAaX6mDpUPRX7VJmawSt2n41smm3rWGRPKrP4cZK2oZf9hBbzGBh",
  "key32": "5Jn7PURkc2c12jZiMFk3LKNd3taps4BqPMFC49G6NGN2Z9umFiFgXnVXjfBARqQdFygE9magsM1EisiuDcMemrZm",
  "key33": "NfaFmHS9bM5Qjv8ZvXeh9in8mcp8PhJjig71bLfgBWtsDDmxj7EaTpJTbbyj92VeNdCpjEgdMKLkgJcwxPkUmgK"
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
