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
    "3TnfzwZj4na8T8iX8bYPrEFYwshQNc8GntArcA9Vq75Xd3pFeYvSjuQ2sRKfLXxkJmGtQH8DbV3gZf2cK8UxtVxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHeZnBZc9ygwdKHPDSWMSkPJBTwBQcWUUzkuGdisoobZTZErho1EyHQxUTnju7tsBRvCq5UtnobfHe8Dr32VESi",
  "key1": "5CYSG4CgzSX7Po3WKDEMSKZRy6r9155wGJxa2qQwgknnPdzpYhiwzEmjwEtK2WHbPZaVYBCSxPCY26PTNUqUuYPk",
  "key2": "5zS6irSxCZihqqiLgg1M1eAgoZvjwWTn37i2E7pSxpAZ4fHfRQthz87J6Vct3k91hwAuZcPnEmTLkcPAi8BaorGD",
  "key3": "qc5iEqxRn4uzDHqitieQSVPaprHQWR5nXJzosm4FcuKZhdSKJzyoWyoPDuD9NPfAPuVw7KYpz3g7EZH4BwAjb9R",
  "key4": "sJxvFoRsAEZ3n2HdDh4YukJCE5e16ceTkSGvuWXNDk34tYmjt6h4fYnE3Yird6iNrAyoks1HL7E7cYNPKBQvj83",
  "key5": "n1PiSo7pTdWVzaBG3bsvm3Bkgun2EdvD2uwErKP2MF1EQA7gkAwWigQG9ukivVET8CmvcEu3xerPvnHi77nxKRg",
  "key6": "BdRezJR3bsdbAnyPdNxWorhiJK8f8UGBiwXdR326vYLGNmX2vtUmmnd4biLvR9ZdYhpw7DaVYQrEbiC7kX7pvVC",
  "key7": "4hEEom6BgvQwr7C14XX3xQk8UEDP8a3Am2W7vAB7okXPZ9CTQ746UsdY6D5UXzZQd6mVqkNvG7FtfbiNHMrHz8mC",
  "key8": "2UQqTkzY11u9eueQPc95nF6Y1roVkEgixez6Fw6xKw6QeFYsUryzWpfusARspZaVo69e6d2yAk2og3rmEknidyHd",
  "key9": "5frhkHD9664Pf4848niS2fN9ZC9RQUEJACriXoK6TNDa5XN6mtZp99HyfgG91mcFEbgiEvs5noEMf2kuySb7XoR5",
  "key10": "hunD3jUf3y7tMikYQKs86UhfW7CdtMLy2P8fZNGZcP6Q22gGq8WREhEwcNRb8DTcWhHNUd3JXsfX5Lp9LbmVPu9",
  "key11": "2XAxpJCfMYzNNaQXyr8FuJNQQ6wmGPeBC87cAT72PrsAvmzUqB9LyQAJZddL1AgiNzbDANJ181TDFaCii7STZCk7",
  "key12": "4h5BWssUzaHdjXp3fGLXvJaGJhCAihGHaiZMSS9gNghU9D9CWYk122d2E69JXWhCbPaatd1yv5JspNospU9hFuF",
  "key13": "4JDFtiqLhRRHqNUXc7ExM9UzMAidLMqKimbKCLCECqYsZMN9BE4Twj2h7ynjFfAPFSpqfpaERJH5mqqTsmV9oh3T",
  "key14": "3yvUcaw5Givjt8oXEdHtfLjdpU1NuE1Ex56221eFBk6uy3A429HQcXPPcFo2973vJHXFxGMfpjb3XZd1GixPQvY4",
  "key15": "a7TjLxLBpbJ9T6YLLuJViPBwqXTrNPqXG9NpRoFxPMVQFrJLzr3V7vMsUnr6utBpthtsMrYkyLK9p7oMFnVa1NB",
  "key16": "5ciLokqx1dYXf7pwN48KceVAn6zHnF6waBVzvsyahK3FPVeqbBQXNJrB78SFhu8BiNujGA5cf5MBkiMuT2Bn1dxk",
  "key17": "3DYNsN4QJf7gUouvTVapJEWXCSbb1buAhJQbAHheXLnVBPhuSmAjH2z6htk4k5ZMWevasU8bGJMZ6pazPHVHPjjn",
  "key18": "4XbDpVkM3xQGJNkS3E2J1pn3TuxdEAZXbYjNtvV6297fn4mw4B5WhBWTyz8dNHMm1yEPcuCgesM96bxEvdK74ngM",
  "key19": "21VaG9FxpxUHNLsyoVpX1S7DxdRxz4sssTnmnj8jae9VAc2onh6bAZvB3uMmu2QGp6KgZtMfuzxZU448895NsFY2",
  "key20": "3SpHJtpjLSDiWcJa3Ud31qV32e4ogfVeBkZuHbz7MAdQ5jr1dEJENHpc9WuRWzgnZ7sDwLmLbCkevhTj49Eqkq3Z",
  "key21": "XMSz3SvbNbDSHYsGQS4zoicH6yjEPqb4Qxej3hUGHvjEVrPRTUsGosRnyBivfnhPYedY62BaDzatzQjhJ1Fixmh",
  "key22": "4a2apiMwFjNNquFfvPhNarvkLconhkWUze2RjPC8pz59cCUEsk3DmHrsz2UfxmwMH6UVutd4aMs9gWR5QbyNabuY",
  "key23": "4aXP9gozf4djtXy1phoGVHuf3MGLqCKSyd3o5EaHd6hw5m7nfEsw8pk4KPnex72PCvQDcWKwDNBw25nhpECnXSCC",
  "key24": "2USo9as5MTZjmdnDwXfrkBdKaSUSPgd5JUT25N5Gcev2otJNQV3u1uya4USSmA9cLKaYsPpdETarR5LYmA7stLrg",
  "key25": "8zMScsswVqJfnoREWDM6XwmvQde35CqBVW3sH1MAsTcNXnbtD1jLgQgEFNj3713HcgxDocuki8vnwtrqikXSL1q",
  "key26": "34CpmCTB8B9Lxon7sqCJrk7hKy16Ff7RZWM3u6XAMexCM8xECmhVHmZq8NPqzzyuSDpRMTEmiqyS92bpAB78rmJ5",
  "key27": "5H7vAamchiTqnPfs2TaipwoSCRTm3sGcoXL6ritF8MZ4RRa8VnofFNfD1NmDYPrz8pH4MAA9cV41LL23Z455Vf7h",
  "key28": "HBsf4uwcpxPzA15kfS6yUdDgXibtQjYLK3AY1ygCnWivBGnZN6ddCmdfdftnNVAem6CqADjCmAVFA3jrJytyscz",
  "key29": "KiuNffQnDHDDg2RxoXfZboW4D6Ytsnj7nqt4kNR1bHo8bNtfe8iVyU5rjLJEqJAyFjTrsBc7a3DmEo9tbKdjGWu",
  "key30": "4Ka83AXkaxX5hwM9wjXMS9DRD2psBCAwDHUFuYQSVM8A4JbTSRKBexqYZQwHU72wh7scBRvFz2Q5an312APVHLq7",
  "key31": "UTipVPd6kbaqEuUNbwYssYWcg8jBRaf1t1c8KusxvJpMK3KyVYhdwBZsVbcmCSsdY7WVqPNKRPUrW532GzpJ84i",
  "key32": "2aoMfAD4ihRM1QCq42J9oaXTpjqPeqZNirzwy48MgGnQ5M69nXi7bitJDXKrdctUv21oJEzCjAGH9u1siofCqYUq",
  "key33": "314CTrUAwjhxTnjEP9tCZKFpcAcbKowfZW6NAZV23SSfgnztEUhNc5GABhd9UFZmQM6HNtbZJtafCG5eBanRbSU5"
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
