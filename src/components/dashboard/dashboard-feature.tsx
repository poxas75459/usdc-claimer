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
    "5bmZFFpG3iAWJDF2S1NQrV3a5eFwEeBPFrqHLURqnkhafgtVDySDWtRnL6v6HtExCHb38ZJjYL1CTsBSWy7D33b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmNpnAUjnFyZCYFLetQeZDNHnvRv6ArkDUgcnUXZRVfW9fUXY5moPvjtsDUqDu8PRroDkA18w7VXHRU1wL7t1Uy",
  "key1": "5kcQGU1GUVFfEx4bWmNcehsbW4kpFHLf1KGbMDVsioTWsVQPGr6LHYAfgQYBxBS7KZ7LMigKNVHS9M9AWcDxJKjb",
  "key2": "5WEDFWMMKMtGH92kSxExP8qPrYqBREk3cmznMpccsMDboNo7CbWqjnD8VbEiSPLZYPpv4UzU7WYrAPvb6ZxtNT5N",
  "key3": "46kL5KdWAr1bENVfND7VqsVcqNuUpxNtpf1wYGGHCRbxkf1ag6YFGTanhBXGexxo6SNvd8sorbu3buBUvVvHD4SL",
  "key4": "5EDWu9f9ck9PXn9jR8oMMZ9xY7GzAWrTYZ7ZgL1cU2muPpDyx1GzkqfG2z5L8M2jUHqPSsqQQAn4vbU4g3SdqiUk",
  "key5": "5E8x7Lb1Eh3kaUqL5wSpWPQgmTUA8Q7GLyRWnXa6HKjCSq2E7QtELJpZvs6xDMqziyZMF9apJpHNdX8Hzdoi7Z63",
  "key6": "2717XyNszb8LnwZ6xvMfmvdksVRzuTRq2JmsDQMHinQJBuJBi5ENg5s2h8oVNHeuThz7TMK7sjudYDxpBJuuvvHM",
  "key7": "5EGJDpS1dYHXaDiT9MUmzfGmFjMQgwDgwFRFsETwmN6yvscijRrbSBQceBPZnoXasBJjiYYpj3guzQ5ZntHRawqz",
  "key8": "5zUrjPbEoskbHK8x2v53hA8xeghQ5B7ydwHHGsenuMAuBhEEqR9vmdYXbLnqTBYJYGjAD1vnwnu5bsn9884ems2W",
  "key9": "66oAUZXkukj6rdahmu4M72C1BvqcDqk6PoiEs9X4WYsGumTEJ6NLQQPNdcDaoGjvgVMUCx18YoFixkb4qKmmibDV",
  "key10": "3eHSeGA8ZiNj5MnLf1EhgvqfydwE9phtdzuEcnK1kSvSoBsUD1Z7JrfwYBS629wpad7zMCLdFzMWzp8xQtaPzKBa",
  "key11": "2CiTw7sYkXZUSYKHRJgpBpkxWAdnJAaRd16HhCPdYiRZ88SvUYwGDNWmdzqHGA7pjjzCpeD8xxgT86vEQrhfuCGs",
  "key12": "5F1rqh7yLfjEa43nvR2gEJEnqvZzJJW1spM8TKpc5NHSLrPupnTZb2YwkT7VLrSa63yRJxL1EzqqGboGjpGujc2D",
  "key13": "49UHsWED9WmxPJcoLDrbpMz3CzKYXSywVwqnJUfPwYWq6JEwcNAaLZ5vtewvvQcpvh1FhFSUd97pMzDfHX8mmEHb",
  "key14": "FqNZiM7FUCQKh5MYPv7enGN81jFs7oMTBN9tgPmD8k5fvycVzkFnyUy1yjQP97dPL3vK9ZshWinGtCaAmWdcVxE",
  "key15": "ELLbqCwQdFwGNZrMhPoL775dFr8b2XS9YLNNqMhYTAd8EacNgpdN1BZ4P3rWmWqJTaiJk4skwwu8sd8EvtWFJQn",
  "key16": "2zmmzj74S2Vs6wN18uLg6Rdq1vQLmESMmuNVFQPFps6RkuppqrrPr17GSpewJmp4EEY4A7Gbhq1BWbVkpWWcc5r",
  "key17": "24c8L6qrE3gcmwe2Q3968LQeHZDV7YN8mZTpuXNJSVjpmwxpak5FyYvYT4WQnQRZe1xqJpRHkkbeWidRajzBC68y",
  "key18": "eMSnUNeErtUVP5paxdBy1hUbcrQwuncTzePaEGp9MD4y8AEQSS3U4NpYhG1EVL1sUauBwTR5MUCqoZe1hNK76qf",
  "key19": "AmuKVgWa1VtFPL3Sz8mb7CBEopdAd3nmtJq9WUDmEP7g1fg2Qy4cQapTmDFSiE6F114qtRgK1ZRPGgd3i1XUd4e",
  "key20": "4mUS9p4sNvqsNqc3hhPecm9Hd8uKC7dPM1WWkcxmyqUoXRFTjUdqrBGToNqq2tgcKH7knDqP7tbdjAaPncoPApdB",
  "key21": "xup8LtsXPLksoonKjvPHsiuMwubbhXcZXfuTDqhTTDi3ez5nUrVKfQizwaaDGRxDjaRAjN8rqbMAFDZGYrVtDzK",
  "key22": "5BSBHf1Mf34M1dsEvxvKCyqKEXP1MbGtnbGuzuJH4un84kf6tNrGMKHmmccyQut57G7LDJtrxtaC29h1tfaGUrg7",
  "key23": "5QtCrcbhk8Y7qnADdMBt62QfbWDic5DMcp9XXrE5NWFo913bHixMY2uYDMv6dFRwdHkX9t3pFcfCXrYeFH6FrNKq",
  "key24": "3P6sWg1fy1Ji3p3WaLSfYMwMTWbc6F29ZV5AAHeYhbN9fN3oxrmMSvegsGf5KzeG3irkzPsS5rSReQp4VPT8i7Mb",
  "key25": "bTUwM7ozmuWg6dyNHMo8DxJVZA9KWDiSPQL4gBgbv4fRhkE6PkPXx239suoYDbHAQ51qByxdUWRvcsA7HhqN6dE",
  "key26": "5LcA5aRPFeLkEUi2WG2o4dUdNEfV73xqYVwL2QSojgVEcbDGSKg5bAtZquR1oubstkE9X5CeiaC1j1H3Krp2hj3D",
  "key27": "MCmFd4qaXVzpp8AwZ8eFGRyHhpWu3sUetcNRLURXRCUQ3t8iXd3T3chaiKEDkgj2LEXR7sSBWXbtQsmP7PiqGJ5",
  "key28": "3KgeAcQ8iEzawHjFnTTmDiuMrrKnCHn8EBXPJMZwe4k8mZTVp34ebfmGrnYxjLyKWnZJH3fU6KjRs5pXAg5CQ6CZ",
  "key29": "2hN6hkDTeEGq7gtg33im3qsdtvQrBSmj2PE9ePi2wgVj2iFYVMtGQpUGSsAphxAQqpQ2fnov9GRzi1LAaTLQNoJp",
  "key30": "3x4bmd16mvyb8Xx84oAgMynvAvWMLE7ZhBCnS4zf9HmzHHox5vXKwhinoDZiiQiGsVfVExPRL4Mdefdek8SrjSKN",
  "key31": "4VW8x8KnZftSz7bXY9ubF8ttWcjDwLddZP851AWwqzrTXrUas91UaHWG26rVbpJ4mgyNeoreuW5Wk2pNrhbtjgUN",
  "key32": "5ZSZDsM5ortEKhXwpjpkfHgEEKVminsLjeGMwBGESukpQR1He4SQT9ckzatvmmf9jSBp31TQ4W9m4CSrtNNPLZNG",
  "key33": "57WQfkbAuABFYxggPBc5iQ9g8HXQf7MDPSrCDsYHoodAhbhLcGprxuPzJ7kdkBNNDehH7w4GbnMi8cHDZsHsJacG"
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
