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
    "4q6waxNVvLDV6fYMgDoh3Kb7moxDvSQxTteXAGvdF5SpmwwU82qckDQJ8ZZjhZ9TQvVM4PYWosVKh5Nm12g2Wm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3RAS33J18fH92tVMpJf6W5zKkzRJRxKQpqVTfxEiNtKB9XdvHEtnaGH7AJ38ZE1kWe1jxWVeBangqXowDQGZ6h",
  "key1": "VSDUbXGBabHMZk1dfB6RC83m4JgZZ2fopANqTD8rkQf7EFTE5neyjuW7uFZx6qDhmW4TS8aJVd5erBQesZCEKxz",
  "key2": "46KbwG5LcaLHbiGdbStAZVjzk7tdqGmj5XF9oj5a1w28dkeQ3YmsWupKHb3QcX2cJZwzQr2niFyy444W32smAYoD",
  "key3": "2VMfYU8bf7YapvmTYDkbodRzByo3sCQWdotxfkiBrA4q9Gpwo5tkyoaEhkjQMfH9tcQyskTG6au7KREJYJwfwKtR",
  "key4": "7B2WcMJ5smavMxFRyQFTxSZNFYNghuGeWD5DBnNDhnyfPkY1x5PukVt8ss47QuQp9KRUX7Jzxbja11RVfc7VYWE",
  "key5": "66CdsZyULTx9ZbTpzHyon4CtiYRWRVa67bbRsAsj4HWj6juWf3oBAs9kC9BTSwd8t94fi9bT99cTzKA5jSxHceSo",
  "key6": "4Y2BPjuq26EA7D7dLMxXtxwpSSKoK8jMBfA7tsMeZSBZUmdZQyMVX8qUvCm9aec7FAzzhH1B18t3AA9J2KpJ7XSG",
  "key7": "5wpTDhTyU3Qp9mhArgb6Kskj1MiBCsvQVpfnzgb58pNiStqjEf9am4ZB8zddeybqcHSywdkLJ4QEmbGSwxzGHtP3",
  "key8": "KG423d29fUnMzfSvVH4wLbZC6e8L38HaadQBxJeQDNXZyyWHMa5XddebBSKDvecBodnEyfMs1QiX8pHTnyK1G5o",
  "key9": "5EhcYpE7abbPzDmXru6wKPrymvHebQJZVngtWZXHx5kj88QhHurhqntb6d6ND5uMbrswd6SBcKE3oxje4H8D3y9U",
  "key10": "26DmaMUJ5mji8nCvCRFRqP81znLjHQdFbSARqdcNego8TkVvZEuTzBuo7LMVhToWkrxuNzH2vRHTxDstE3k5vG9G",
  "key11": "4H7zjo9MRTRF7Yrg2boJQYy3deRV7zYiCHm19C4g2wz71f5Y3SWzkGuVqFys9UDyPETZbkjwWAVhfxU6NMw9m8bL",
  "key12": "uhpdvkMrheMY9XvhEqjVNG45RnyyxwUoQYonF95Njo5g8RDRvMuEPfvariurT26MqPzw6Fcnb6ymcFCuqUTWP2a",
  "key13": "562bHJcix2jxZqmiFUnioPLa4vPRib5pK95yTbLxd8KfXZGT1cRqGGqRD58TiKMUWdQtH1SiojLv8HHou968WzfN",
  "key14": "5TtmbkgHDQDjqJ6WPKCGjqnueXrkeB4x7zUuUBkkSc8hk4DnVMF2SBZCquRsTRFrcomzpUYzebBj9sBvGiySZ6DQ",
  "key15": "3Bxa5DAkrMLHfQD8ihoTciD11tckPcyMYLJ8RJmDPWoBRDqo2nNvKCjU5f1okinQ2o9JSpuVJnt2ZVfrzDkhicg9",
  "key16": "5YHjKPrg6v2vs6TGFnQb7bTsMUsbqS7Ep2iiBwffUbdQnyX2RDb2WnP2DUEBDUkDv1aSJsGPq9AwXohTEofREGXc",
  "key17": "223BZ9UNNL6u6beFnHGv876G1uGwd7D5pttvxbU1qbSdG3Bd7365HizS4d8w6LKJfa627EZYeyp2rL3iJyCi4pXB",
  "key18": "4iKmH3jfhAGDJztdGUAxLBDGeWVv2tKwCMfoBq8LV3FDxyj2X4sqUhGBq1dFQWZoyATDTMSydF8ay6aUXafqY4zn",
  "key19": "4NPDM2NhxmCg4GndL69aBr6SLwtnEWoYPSzyweAWE9KdxXhL6kJiWQr7YDarLAkN3dEfkQbziCVJcfCedjmFMKJi",
  "key20": "4Q3HywymxVhaqDLztWNnLu15vB1rXRWWvyDnsArz1LC3dXeLUD9AJZypLni8g9UJJV3ERKYL7Rd5puNwxW2AjmX2",
  "key21": "5yEniVwZwpqjcGh884mao8N8zsfN3zWw3pQGrSR5USLn4iRN3V7DUR4rrSDeF3NuE5wMLsfzGN8ZTh3Mi6CWH9yS",
  "key22": "3ATH6ZFCPkxPv6XQbThZMDCkpayyo8jNQ7VTvn2krjhGa1htWLYc3HVape1R6GKp7ogyNHaDeve6SH7CxT8u9UDJ",
  "key23": "4VqdyjDpsQtEDfihDfr2JuuCdcc8oL8PKTJ6MJJB7a2HNDmjF5vwuQXXiRsPRmh6yjLuWGzo7g7kC7VzJDNYZqQa",
  "key24": "5w79drZTn5K8zw13apXHJoSjKUkEYtpmqpDp4yQrgoGcBZ8Put45a2MF7Z5dgZT7TyFGp5KN3C1TmdGutHrwEgQc",
  "key25": "5VUakahe1E7UYBX3MBnZzXCKbo4N8NtP9nAa2padhc62Sw5QfuiVawQLeGdueAD6uZSp9Lf9HMLY5roReZtdqAmj",
  "key26": "2hDnWaxVeGhxofApnm3jcH5m9yD16ddsh1CH2m5nSsbY5mDv5rpAuovSPiqgu25TXWWTAtXDtryRQkJnB1wv2w77",
  "key27": "dEygS7sexrrB5ezAmYwS9eSNmwmLs3nAtDVVFizqZopHfXd4jFB2wQLQBz4pQSTa4szNbuk3e3itKK9xhqsVtn5",
  "key28": "2oFiEuXNzXckBv1ZGqWgCakVBpiCRn31oB5qPpGoF2wLzeGPSQmpRA16jGQRZhZjDtVu4mHQff2iAbrBc1shTDHq",
  "key29": "2ZKajXXQxStfMYz9ffoMSkxxpV1VqVZvdF4N1fyJgjB95DtQGD2A7wwVByeN7oeFxRb6cFWYwdm6MkpN2WsQyPeY",
  "key30": "4UKR6dAeibJm7uQ1N6hLSXsabuLz4vNNSkTWjPxHBK2VjH1PbkrMqFYqisPEZXxiD2w8hzNTVrbu6d3UCsh7kpu5",
  "key31": "wprKFwX4PZZNGPbQGJaFzaT2w9PhtL55NeQ4rd8AfMCYc2UgAZfdrgSKuaH16gRZyUgd4CAWTYGtaCiAvcbbHuh",
  "key32": "KnuetQoLafe1to643ZiVPxLB3KXvvQt45DUDeiAxuKzPcDaAdByBKKP1pPVPxbLDQCFYUAxpnoYwFy2mRCBA7fC",
  "key33": "52ipDdrWThX2drnP42ckFx9KkdCM4fTcv76YH6k3rDBLe7shPA7T7AMaqhNeh7K2SwtzxotLQ3yyKZXpvJxZqVyJ",
  "key34": "5FQ6bg7eeakuyPkEqEqKP6mb43JtZqJPNidDwiVZNkG7PEBdSzZHPhoro7NGBaokXymgoSvC9qUrVvGeHosUoJGL",
  "key35": "3W88YEwDV87uj3at6c5Kdqd9Cx6Jj6LazYECX8LkqdGoZktXhinGLMy75myDzhVFGvoMKojH6onosGkVo74EXUyj",
  "key36": "4NXHkxg73pr2ZGpUUdxxVY5s1kPY5eCNCJP2jDQ9jD4fWGQQyr81bdd9ixcDFeKT2QXuRrjRxceJJeafo1WYxsuy",
  "key37": "5EXBRz5vLJZELWBv2NV3ZdYpKtGxjE3mEBBPXwwXLvUiFsfdj2FeQYzWJaoyazBywfZ2TVnhn4vgkitbqGgwtVGV",
  "key38": "mA7fGMNwZko84Mj97FPxceWjU8FXAcWi9b4gxsMV9ZmZXK1fqbSAbr221oRdYU4WdKQsDKsYSjWHovQjXva7VTN",
  "key39": "bLjGMdtziPtcXyi2sZ7iFh9GXSdnkmT95XBEZKvYyPgbQydV49Y5yCRUk6YFtV8k4RvrN2bESx2PigksbK7kUZb",
  "key40": "6142ofbjNtnQP9L379U6X5MfDFHzpwiGAFhdGNggraTAYhN4eiKsfFrPRQ1gqMDSVxA8NcsbybRu6jP4gTWsEvUV"
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
