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
    "2YfcXUtZLYXJYu8c4G6cBM5NoLJN4CR2ALZmUconkZdj2A7nZe7Xx6CSqs4c5yiCtBb8ZA8PCXPH7dKcmt1Uiyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StSe3DfadSJsqZH9XAwZkfz2cKPhAvqCJMf4nNnLd8WJmEwKLXKU8Na93iMH9kAEbbswsFbM4oF3fwmBDhVNaez",
  "key1": "32oNXBsw9r2zwVWRYFhcXgQ7DjymFubGWWMerTq56kKYZm1Y3duisw58D1XLpPdM47gNyQUDZTLHjDTQAPYgVaEd",
  "key2": "nGhocudEZb3ifBBKYWPwE848U6nmGdd2S31fBWSjywNuVwYvNY5bUqvrsHVrnwkQ3be3JrZzHUMrJVv4iko7qpZ",
  "key3": "3ZA8E91UV1N4bHqNFaCHRzPk1FQWAWy9TH5phxsXWbDbZHfxkxpRBXyqEgUsCTSK2vJznTDvmrErYsH13c2v5SSB",
  "key4": "6471R68imzE1tY8hDMmpQthUmp3izwLCaUdqRcxAqisKmzEVWirNXPwMgkPZfGXhYmzoiikFh8jcxfXUT5BRT1i9",
  "key5": "4iyWY5zsSSoQqaXczccJXHhhQbUyvsbAiU5rNgzASPgrzzv8SDYXWWbKuaQPPpKXWifDbvDzGvN4oombUGgUByD8",
  "key6": "TqWrcksWofGDParhb5eeC9UtZZvToHGQSR5oyQHUtXfcRK54nEkfCnu44YC2XSNHPYmgeHvtyQp245zMApEkHjC",
  "key7": "3auLsaXX24Gbzm5siZsAWkZzeXFyX6Q11K8r8oc4QT7qPDnME1brtRUAXN2Bms5bShPws7wiCSMXvXjtheDogQJa",
  "key8": "2ZgUAFG5k4TuTt1DwA6hy23zsk3zoH3x5SiNBWiGAnFWNuVdcXh22L2ZG4s4WM1x2iSb6abc8twXi4NReUBnvX2a",
  "key9": "2y4edEb2VhAgM98MtPxz5DREMJsjYLiKR8vPJCBcHzHEN7XBEdRc1KsTVnymEB4qxyJrYTdGYEujqTzJpCjckQUx",
  "key10": "4usvDpckzTyzL7ZuSgw3jCPGa6Yzc3A2dU37sFicPQw2bEEaBdq4aTJ9S8RP3dyF2bFAkuZeBYCF7ZJa6LwhzYx7",
  "key11": "aYKhxQHnCCfQSLHiZRG5Xaeg4NSarurX5fqfuvhapjkiSkMrwU6jG1o6tBxuDey9NBYf3eMUzHmkg9F2NxXycPf",
  "key12": "5PPGX9KuMVNA9b1NPBv1hyR6Mj6NG4AWkreingz8ZxMQ8PnsEthqvRgProW8aSfUYHYv1GQDt6grQBUV3LZeVttJ",
  "key13": "4WZLhE7TCB7Ao27vLF7MjGoZ2Mm4q8tRJWEtKheqZdYvCkyvS9mtRE18dZUeS69VkUt1jRintAeZ7sfQk5nQLX5n",
  "key14": "3CdRydDNSgyzKaVAVPP6YYhjkXWzbh4aosEhiC5SWy8CubVxEawWahw4W2c3wemFqnpUQuxWnu3VBSMAhm6fe5AV",
  "key15": "24FMa256oM1RvhxV4o8DVLAPiTRwzbffjZCcVv2GNe6Guwmj7aTQuEmg8hAPiq8hNZARSCfdGjnCi3AppbfnuH1q",
  "key16": "7NXYqymuLC8hJjv1aLxsyDNS7VKkSPVC2oFXLHpGPKhLpJHnqN6GPAaMaiA8CyPNjrxqv9PQ9Md5P6CCdFZhRCw",
  "key17": "2VvbXbbht26DgVXAr7R2jrER2q9pt3RCfNnVcB8ESzYb94XabPFZqFCPjcFVBy7qoNf1jw53gpzjEE7q87jhBk1m",
  "key18": "2hLb1PjUdfw5pnVw5acHsSZzToAF8SkbJakH67w2uJce2x9BZhHvbccJRuS6k3A3u36Wie3sqpBxC7A2SKpXa6KB",
  "key19": "52KxkAhDdGQMidDB9yMrJvffnJWmHX2wuvbdKwRcQy2gQ5TnZhFzQBL3EU6LevuKJvwcPAnpf8kX418Qp827JCbc",
  "key20": "4tMF4vm8FG2X4gAEXWwp2Bfo6rt5S6D8WiAEBeUAUcM9vcsWeJiZHvn7PinzFKPreQ1JrL5ikV7DFrMmHBGUVteY",
  "key21": "56pM2bKG1NJjH95CCoTPz9PnUuP423jBrsfdgmedVpjFsNvmjdNP9UZKcDDj4DWD97wrHobS7MceCPzy1vGgJjf7",
  "key22": "242GzBfwiT67HMzHitXRtqJBc6KwKpwZ5cf6wWid8qLZ1E3AbiPkQnjENxCoPfgGLCFBVdoY8gKmkJsomgz1ngAu",
  "key23": "3rSUWPwDsfTRJ7v9zbJLTXhW37ArYFi5rLNwTXEADK1BTtBcFZSiQ4AwbGbbv3N2oisEoiNzsPtqtCdcgCSWNEdX",
  "key24": "2J5tpL45S2hpb3W8u8TNz2BeRyX65pFMoVAQqTbuiiTgp7UpN72wDQ32VCShb8ZS8jnoSc2cQZtydvfFS46AUdW8",
  "key25": "v1Q3Vxp5YnY5oEUokAyJD6svZ5Kpz9LbfrGHmQBsg6GVDKaNuN4MSJUguUEseySRjtkLMkkAMwwjo6hwRefNjBo",
  "key26": "5g4bvzyi2uimPidhAxmn7e4FXnKLFa2fGYuSNxAmZk19dAsjcUegPhM86QUcXhZuphNHaQe7VoXwVSP5Vre8xbpZ",
  "key27": "5uzsArJWsCGhL545iqisSDfDaCJtkhczZuHynBWW1o6DSXCF9BvZZVCDcGWx97JCe4q2fHxf5z5N9sMEnSvMrxKn",
  "key28": "54Fqn7TRsmw4rRiu7jbLbdfu5HbwvdGrTYsXrL4dfvSH56xmaK3Ywg6EEj3pAW43vv5rnqi5638g76ehgszeciXF",
  "key29": "2qXhmHA5VvdsGV2fW3tRb5dHjUK7V98A4T6TxiUMD7uUDFe6tqNUq7xHikRKUNCMAXJsMj1WCQy4qnWpDcvbXLkY",
  "key30": "3mZFqaK7GswYtbLgGT6Nge86t5ZC9c7TSFhN97CCrmrFyZ7t3hJLsoTGj1QynFYb2khWgExpBGpzspwC7wigPrHa",
  "key31": "9M6nYzfwPfj9dZvGuEDstqtMTigVf1bu1BnPG7Jcs4DBYthGHPifG1PKSiZ142reshnwW7Jf6JqXRTyiQkFSFco",
  "key32": "5diLEv21YBskN5Z1tYGeCeVw8K8u3HhDRR1iw7S5XHVpjR1PPDmRnM61noWBWvvULUGm8JS7X5GavPGhwidKDQA1",
  "key33": "2nWeQ1642apmiHyyMtjzXRfadsxVdpWrGGoK9Y91zS4KjkznSsTZdA2sRmeUp8HbAFkqHyvyazni9rDMoQ3T8DbE"
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
