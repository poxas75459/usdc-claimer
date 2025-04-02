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
    "98xNs33bv4xgLkiEArjG1EQStVh8tmpzhRL47Zn8eM26fYH5g3cg7EGxA9wtZCMrD2B2Tib5jb6GSYJQvzDcTj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUYYjwTgzHcjL6Wc9gZrGjPtdHAXWA1B4uNLTBYF4cxzwaPe9uLTEZD4QrkQfM3QDFVhdzbMCMubTTdmEZg6NgU",
  "key1": "4wZNv4y7bCkJn6RYxUM9Zssz7nxs7fYTgUMkuiMQBKpzXnhDBNzMQHiUVheEskTpPiPwK7az3ZaBMmaYtoXzY1RJ",
  "key2": "5JPegHDFDpvhDNExdDjG3WSWqtBV32wFnKX7mUAj8E7JL3xfaYthY37F5rvNcfV8eZ4xT8FCDJ2VP6shS3YDLqgD",
  "key3": "5jrinuCghpdBiH9ACdJQa48vqyAiBNZgisfeS6VXU6ybeaZYAjGcooaUgvDN3MU4g3suXx9d3ui2SyQSmRxghvcN",
  "key4": "4HriwjFVjXX3nUCdPrXqqThc5HaGua3F9LJi93pjJo8eguskwwdC4MfNiF9SGF8mqYebKL4xZFfnpSmxbAvzzUme",
  "key5": "5XpNTVh4R1pRoLtSHXcmSEdPBk5Cyn7qV4qkfvHbnBZ335iV6TTsdojsuXcUgJsQHHRvPyghEzJdjfgda234CGZD",
  "key6": "3EppEiYrYHRpwX4UtVTpzG8KNh6C2Akqu7Uiv8k7v7uaBxDDvoLmYX2Y344w3JDEhQ7w8hwvyn6izHHE5CPnDurv",
  "key7": "hHVKyh4xMM9bAmUPhCEN6vmBerUwScSuqxEA3sRfBcm3zKJoSXKJXbChrtSwbZtysTQA9gBsnony3KzBW3R6m1Z",
  "key8": "54zDwXY6zWoRi9nq5sKaVAo6k4TMY6jrEMGjSQE2LwxrQKWvrZKK3Rq7Qiha8c9E68aQWHXJf4rLQPBvv1coZtL9",
  "key9": "2B9zNsH37aCd42541ptgHtNUL7tznukRQ7NKyXW3xym7p3So9XL86b2MJSShB5oxiM5b43xCtWpYMr5a7a5DWdFV",
  "key10": "4edDqFz47k9uuQrk3sEtstHC6eHQ7fwu9UDyXCQ2SH29Qh6SRL1Fj97zrjbH8ToP94DbHNNSYXTEKTcoLF2nuZvc",
  "key11": "zD4orztptQGN8KhWYnRiNv6jwBPJ1WUqtBu6YyZLM3KeWij1RPn9n8pNuzqxYqp5Z7XktzXQVnjsYzfzYoQMsCs",
  "key12": "3Uzspfz6855tQHV3k3z8FLKwm8AEo8HonkM72ZYZHQi2EHdHFGv4Kg3WVJmDZTZ4aAzEgp15rjh1RXEnFukuz5uY",
  "key13": "4kJFMYDSmVfDgJbJtZR2EUbu5HwJkZ6njwUBnYkNpFbDUC6aLgrc68DEtnFuX1DPNrVvbJpAdYeANmdZDDT79uoW",
  "key14": "26iDJQF3wMJf9akqXrNzumeDKv82ETdqPQ7rgBAFQWpDTqnsTd3ESUXKX8afZGcpRMoXVsCAb1vZB4ZChDP3JzPd",
  "key15": "2PpXyjhTTzwJuXgRe3zUt1ubDfNRDp3h3UV215o5AeCuwoWPuZxcfes57FFK2fwP9U769wmfiVFCvxsB9vABTsFt",
  "key16": "kh7fsKB1EfGFKn8UvBf5euXCQMNn3XRGen9r5rsdhSgQszmfeaa57WLL8m9R69XtJ4EB6sVze9Z4pNzeT4N1HR6",
  "key17": "4MxQBe2KdxJeGZVoLSeQR2a79p3u6XWMZi1ZV2SyskQqpcCeAGAamiZFK7jgABbQoPm3yhXtYnk67rECNMGm8pLX",
  "key18": "2ggfgLHj3hyKVqC1AyqM82f6oHZ3CTdhmBcDezc7FxWDfQMWsv9ZeD5X9bynMDEo5VPUsMTU3YejFqBsyGXYzvqt",
  "key19": "3FxcJ5fbi6qgdKN3siy6f8U7483uN6mT5C4MCjpgjy7HTBRRXqBjJo7qfJ3HdjUX6duFbLeyyFCLDwNrADTGhcdk",
  "key20": "3A59vNR1Bmm73BNSijURwXz3fVqn43Fq89X1CDRxMbRj5qDbGygXNYnKD6bTEP3XBHSRC59xzyL6SrghR3wNG3qp",
  "key21": "5yUSV2nHLxsCpSZnqCre4cWQNYY2SYbkEXSn1ssWM4Pm1KoHAR2tWskeBBMGtQMzVaL8Z5X2Fby9j4D2d7LsGz6x",
  "key22": "3LCLArpe3p6Ujvg3YyM4SEgrVTGExq9ZjxBPWEaoE8F1Jh4BJidYgyf5L2gzRiewuT4868AhHrCf2FEFe4MuSPGj",
  "key23": "26Kbts6asKh9ctcwXie3UZA3AEgE2y9nT9Zfgcr8KipYDMdeXm9NQ5a76FzE7irhXmENQLb5JyQvYbqRUv2BuXHf",
  "key24": "5iKMkYweUHpwdt38t3ojfezf7iw4CTYoaZ3ogrKb1vREUwUsVseEmFPsLG3CB2hygAWSkb1eEQREtdus9ekXY8Ev",
  "key25": "58ETxo4MoHUP8qngR9c9CXVVC98CB5opg73dQNH5BCGmWKaxW236Gux7A7u7m6v7jQGJjGR3rzykkQ7jctgUYXVt",
  "key26": "2NZRpHTiXFkDMYaiqZ52WGt3tWbBYYbcYHv2DdoRfa9yfhtArTUYf6GULVNMHPZGMECg7kjmicdrLzYGUeXnx5Ro",
  "key27": "5hiukdMvLsLe5oXtH5ZsNh4yJmygePjhjpr12VXG4uz89Js15HDvWAPE4ypdJr7K5TwMWhEHXSchros94vsAYmrv",
  "key28": "9qvn2WQtYHGtayansAfB27eoozsYT96vr3nUMda76jQt4Xpg7bQm7wMC9V9B8Bk7KUh9st4iHGrVH3GZnDUK4Sf",
  "key29": "4YF31uZisvV4u4jw2KYXfSyn3PS45Z447QGC4DHqBzrnR2jGxgHMjrfxpoZgELtzSvMnwtZvB2hMiphWPUdjcyJG",
  "key30": "QEbRYvpgdCQAnXFH83v89xKtdrPLcNpMg2QtSsVge3BppPTUiQEkrTKvq5xGtLD4GfU4RrQW6xsJnxd8KGqdtuN",
  "key31": "2SDM1YyQzdR42RDCjQCJ9HGoAN7xfPdAh89cxwPPAHruq7HMm9fThF6nR63LxX8pDSYUHif87BncRkXzS4fLc8oE",
  "key32": "63j1McbnpyZtkWbKMwYyCRySqzRzpsxMGMD2q4dtkWmP3UxJx4tY4oKh9FB4RXdrkfBPZxtiQnoB7VLVX8dXqzSd",
  "key33": "3va3o76jKP2adTdf4456Nvs5YCoV3ekJrvaRXrJCSswgic2vcbk3EQFQdb9T2xJfdNm7tD5PGTChWm3WQfBRTy8C",
  "key34": "J7Nm7QP2zQxQgrBinGba7yiCxpW27jnBX6TXhn5otexrkVftsd43hzfzemYYiJUuaJCPgooR7R6wWYG63CDYWtH",
  "key35": "y9r4pHT4UscaBemE7CF8yAHjrcTF5RD4nsUbYyiA7veeUhDgpeqVhb1TyLSA8e6qQU6cM7q48rXDQD5DDg1MHra",
  "key36": "4ZJy9NkVjk6Jh3MxHTHvBD8qynk6JcRDHZKmxHxTQTcJj1vG7LLtzKvrzNWnJtUox4mMQXCcAKsTxNNADdaPCvTF",
  "key37": "2D44CXpkfS72VNveh5znpR3zBSgrArx7M1pNQXa4cHS9zW9rS5U5hhW1nTzvGw9K8xvDUrPbZvJVtHTKjgspgZyo",
  "key38": "23MZh8PRFkG6Uf4LXHC3juSYcYRPz2anydhDSKVB19SLexaG6EC9amckivc5iDPESsZUKBw3cBe59Z4XCu4bS27U"
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
