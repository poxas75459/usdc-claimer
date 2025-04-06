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
    "4iZvFkYmo1wfp87PXRr4dDTQCsgBnLLpF75kUaBboJ76fgyZy2pEAD8vLEbYa4w1DpPnMJP2nsibHGUAfuL2t3XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uf3pMKsYQQd9rSm1cAnHxVfSPvDWVxpj8QH3SnfS9Ga3VfoyQP75SJvySC2kEyTrTTPtqgvWp4ZpCKsgdrNtNRf",
  "key1": "NwEn4Vot8bYwmdSKwhgMBczE9sGTTqL5H9LwvVLngjZUSdyevoG5VXhExqiUaTw2PpzuM3v76PYqymXVKt6Rrsj",
  "key2": "F5gY1sx6qyrqnjoELiBvnB145j6gwyurzSfCRED3dVunFvzPkKiCofM4zJa8u3gYfyf4VE9BupKFCRcW4uFRGwm",
  "key3": "343hsDLSoimJcAEtaDCpc9bf5nCaVCYzpvZz3bZTS5yavLr9jJ3KfNTwir91HSZcTwThmRmseV4HzgCZLpQpD6pf",
  "key4": "2xBJNyvVFwQDSUSPapejuQFqykWEbkyaerQEZkcc99qj6hHNcj6ZmbRFB1XydKiUwdW6nQZGVHPaoEB9PAeC1upa",
  "key5": "5ohvQVRk3HWCiyV1T8EgDr4NuqYNaEVSouoxGw8jSrWGcuLfykETAnpebn6a4oNbJQM2JLGWu64R1HpwwV9wFsQW",
  "key6": "334YLCkVtEq5gN3qGPAh1QeEFSUXV4t7AtXisu2jAi1WawNqLpsGKhqvxu7jokuuARF5x4gSgWwHs82Rt4Zi8kj3",
  "key7": "5NB1wBoCdSEYaRd4VZ6VD4xJRdN6zFLYexoBapqShAo3YxBhVjdVAcs3WttYnpodRPY7yedCKgYf436qDKBk7uvP",
  "key8": "4bSVaUxHAtFjiCNxGgWkLFXZyAvJD1q3pK8C1xUm5sEBJCcd7DtJDBEHBM35fGzUN5DpiYQkmuHhNYpQX9BMBZgd",
  "key9": "2CCX2fT9vthiQYLrxGJB7HVCMETrdRTwwDsVZaQJF5xgyZ3JbqU4J2qcoVfDPSepmMjUvbBFRakkNngtbSEktuVR",
  "key10": "5E3VALJydEawtfUFW4yiRgBBQM7QeL6u8kSxgiPEXKNnnGHU5ubfgtt5MJVLh5Bm7ZbJ5zF8MiY741d55y38hjrb",
  "key11": "251fpkvEa69a4CTz5ikwRKRPwMNALMMYd6aYkGBaUuTkTj8gHktZNSecgtJgPHjWWWriSzhhQexe618QjYDFmB3z",
  "key12": "oR3KCy3Vi36uB6fDBWTvnbQHwdnRpMaJ33vbsbb5SKkCH7i5MQyF3aePYWRWgrWVrsgvhtnBbUrGDrE5fv1hfE9",
  "key13": "4EpKbnTJ329T9nohKeagx7Uj1XERas2ezBvNSyCz4bbZYVAuVMmEa6CBNTrX4R3X41A6TG9tAMweWVdRkyJmf2jg",
  "key14": "4ypstUKsEGnchaABKXN1TEGMRtnAKaRtGto3gbvsdDA4ykXRwro2YrDZiFz7gdKJ6x64ZK3yESuxMzexdjE99jtm",
  "key15": "3aebmy5CARVGhZ8cgTwXytqJLKh5NyPQUdmPt26fg3zs2ukHyr5LSDZTHX7xUr97tdtSgizTPuuFTg3aSamFA7AS",
  "key16": "4GP6d3Cd6XeZJZSTRUTK23p1WxoEWBh1XRd7zEsKqVafvcdFjL2fRiYnguVpCWjFZ6FQKTgz3U4BpFJDUdCxCVhp",
  "key17": "5jL9Hbrp5oh8CF3EeasM81yaWbgmc4Ewz1LgXSLt6FXBeR16qusDnKZTw6835wA4tnGxPN3RMJRanViHRwMzJQc6",
  "key18": "2ZwwX23LtMkFJ16DFYHdYtkwFsTGACyHQWVPJa46YSsrs3nuyHuCXZdKFJyFAnkPGeQ3onhd8giKMs7Hwd354bMh",
  "key19": "4jqgNCno7CKVwCYvE7nZ32f7GSBXGLwsVED9NnBNY5eq2JHmabuGCt9XCLkctWzmSZKxMHFfpxKhNeWGB4yvZMoM",
  "key20": "2hSzGpQL65MfMLVyK4wviPXWk1GsfL8TvKnoHsVQQLTbMJBPLXXkVbzyRVqp9Y2VX385SSqCX1yWxa5xWv2vUGcj",
  "key21": "4tGf2sFNpQxVM1M5umFRKYjAYaQY2So7FPr7wQjjpTiZxs3NB47iC5DNwZ7N1RCFLpV4ZxbCWKL33n9LxfQgNkeJ",
  "key22": "4QqxdW4b8tj8YHMYuq7JiT1AeFQuGkGgVaJSrzCbHSLSjr5FoxJJ7wLCSv87twFneZzTjqrNCF78WRcchT2Wkn9r",
  "key23": "4DnzDUWXY7pP65UnEiMPajQ5gGNLwBSRLJzHuWAVRVcR1EVb6iJqPowsyG8hG5xmsmFws68pgphGXqRT9bdfekDr",
  "key24": "3rQQM7161HisA3NgSqTQ2fY3m7e3qATNxKnGoH5jtXAMXcnz3C9RkNuZu2AhjwsnVUmCh99oZxT5gG4W4xqSeSuF",
  "key25": "gFuZs1YouwnY1mUDPcFFtRetT3dEnm1HCnSgqZYA4BnECxonNmU5BdbDy2NMcrvGmY1WJvnei3Ha51v2N5LCbqd",
  "key26": "4KK8CQYTEr54XVvSRVF2RUx9pnc2cBB2CgEnnHY5XGmAPVhMsTkojcG1s7d11SmW57hs1WLBUXjcdaNirdp8wR8d",
  "key27": "7tMhHAUmv8GfD377ztLfc8NbWq9Qq8SskSWFdHQU19T3q8KW9ybgmKpebw6GwZK9HMDxLqDMaVVguVBVM8vpj7T",
  "key28": "3vY6EgZ9zteXMw1Xf6rETRYBwrNQBf5wF4VNWkFq2ksT8z9HW4fTGxczfQiFiVJhBL5vEqTxBNFDbqzs4o9hWXTz",
  "key29": "56ZVCHne3TjCTRNeN1KhWRbjwXCGGrgXz1Am8h86i1nhL3cbNuq1kmQRBG9LCkk4u3evoxg3b3wZcoTRc1wj69cD",
  "key30": "2RjMcQfffWFhmj43W4Zfsa5eeRzMDRfRrof93jgA1nCNbmAS7KrnExv5moBjNe9HWb34Zu3P9v3N5BsB8KGmcF6X",
  "key31": "4mzdUPL3e5e1ZacGdYzVhTGpS5Ku4ZRS6Wgpf4hDAmvzWUQiUoXqmVN2pahnND3PCjeDpoD9WAai3Wg1q6TScwgU",
  "key32": "2sHmcjPiGnZBDJbwXXoewDdEmzL4egpB8KD3DLTtFHBczBzLfLm6c2Yy3qnmz23ToqKqYzfza7ur3PJtRkPajuAM",
  "key33": "454qaMYmTpcXg68QVtJULMr3Tez1dAzzdyshgi8X78YYtgApnwWnbY3H7r7sgaCAMwELC2cdsTCTiSmH8pzCwaXo",
  "key34": "YvZvL8G978nfDh2Xq1WE9p46boPM8ueSHFBkjYZNTd7kQ83ef384v7ZnURg1ktLD9g4Tbzz7seLFvnXYwtw54qW",
  "key35": "3AkNVo78kjTFKyeXsYbzLkLCXStQwyw46UvjYXLcYErRtrMAv8ZwGujGZHJYdWW9Adp8mNLzTjav9iUL6P1dpHiD",
  "key36": "3sGogGm8w9evc1FTEab12vRFbStRKPHxQXaGdBqmak2xf3xELgzMwwQ2XdKBqSz4mvQc1JznUsYpKJPrUZ4eWhoq",
  "key37": "5uvZTsEypbDrLnsTi9qnzWJ81gnauz6G9uM5qEZdrrAxTMmwP6N8tDbXZUGUnjbXP6a3K2GtzTZ5HXPq2vEoDevk"
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
